import pako from "pako/lib/deflate";

/**
 * PNG Encoder.
 * Based on https://github.com/photopea/UPNG.js
 */
export class PngEncoder {
    /**
     * Create a new instance of PngEncoder.
     */
    constructor() {
    }

    public encode(bufs: ArrayBuffer[], w: number, h: number): Uint8Array {
        const ps = 0;
        const forbidPlte = false;
        const dels: any[] = undefined;
        const data = new Uint8Array(bufs[0].byteLength * bufs.length + 100);
        const wr = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
        for (let i = 0; i < 8; i++) {
            data[i] = wr[i];
        }
        let offset = 8;

        const nimg = this.compressPNG(bufs, w, h, ps, forbidPlte);

        this.writeUint(data, offset, 13);
        offset += 4;
        this.writeASCII(data, offset, "IHDR");
        offset += 4;
        this.writeUint(data, offset, w);
        offset += 4;
        this.writeUint(data, offset, h);
        offset += 4;
        data[offset] = nimg.depth;
        offset++;
        data[offset] = nimg.ctype;
        offset++;
        data[offset] = 0; // compress
        offset++;
        data[offset] = 0; // filter
        offset++;
        data[offset] = 0; // interlace
        offset++;
        this.writeUint(data, offset, this.crc(data, offset - 17, 17));
        offset += 4; // crc

        // 9 bytes to say, that it is sRGB
        this.writeUint(data, offset, 1);
        offset += 4;
        this.writeASCII(data, offset, "sRGB");
        offset += 4;
        data[offset] = 1;
        offset++;
        this.writeUint(data, offset, this.crc(data, offset - 5, 5));
        offset += 4; // crc

        const anim = bufs.length > 1;
        if (anim) {
            this.writeUint(data, offset, 8);
            offset += 4;
            this.writeASCII(data, offset, "acTL");
            offset += 4;
            this.writeUint(data, offset, bufs.length);
            offset += 4;
            this.writeUint(data, offset, 0);
            offset += 4;
            this.writeUint(data, offset, this.crc(data, offset - 12, 12));
            offset += 4; // crc
        }

        if (nimg.ctype === 3) {
            const dl = nimg.plte.length;
            this.writeUint(data, offset, dl * 3);
            offset += 4;
            this.writeASCII(data, offset, "PLTE");
            offset += 4;
            for (let i = 0; i < dl; i++) {
                const ti = i * 3;
                const c = nimg.plte[i];
                const r = (c) & 255;
                const g = (c >> 8) & 255;
                const b = (c >> 16) & 255;
                data[offset + ti + 0] = r;
                data[offset + ti + 1] = g;
                data[offset + ti + 2] = b;
            }
            offset += dl * 3;
            this.writeUint(data, offset, this.crc(data, offset - dl * 3 - 4, dl * 3 + 4));
            offset += 4; // crc

            if (nimg.gotAlpha) {
                this.writeUint(data, offset, dl);
                offset += 4;
                this.writeASCII(data, offset, "tRNS");
                offset += 4;
                for (let i = 0; i < dl; i++) {
                    data[offset + i] = (nimg.plte[i] >> 24) & 255;
                }
                offset += dl;
                this.writeUint(data, offset, this.crc(data, offset - dl - 4, dl + 4));
                offset += 4; // crc
            }
        }

        let fi = 0;
        for (let j = 0; j < nimg.frames.length; j++) {
            const fr = nimg.frames[j];
            if (anim) {
                this.writeUint(data, offset, 26);
                offset += 4;
                this.writeASCII(data, offset, "fcTL");
                offset += 4;
                this.writeUint(data, offset, fi++);
                offset += 4;
                this.writeUint(data, offset, fr.rect.width);
                offset += 4;
                this.writeUint(data, offset, fr.rect.height);
                offset += 4;
                this.writeUint(data, offset, fr.rect.x);
                offset += 4;
                this.writeUint(data, offset, fr.rect.y);
                offset += 4;
                this.writeUshort(data, offset, dels[j]);
                offset += 2;
                this.writeUshort(data, offset, 1000);
                offset += 2;
                data[offset] = fr.dispose;
                offset++;	// dispose
                data[offset] = fr.blend;
                offset++;	// blend
                this.writeUint(data, offset, this.crc(data, offset - 30, 30));
                offset += 4; // crc
            }

            const imgd = fr.cimg;
            const dl: number = imgd.length;
            this.writeUint(data, offset, dl + (j === 0 ? 0 : 4));
            offset += 4;
            const ioff = offset;
            this.writeASCII(data, offset, (j === 0) ? "IDAT" : "fdAT");
            offset += 4;
            if (j !== 0) {
                this.writeUint(data, offset, fi++);
                offset += 4;
            }
            for (let i = 0; i < dl; i++) {
                data[offset + i] = imgd[i];
            }
            offset += dl;
            this.writeUint(data, offset, this.crc(data, ioff, offset - ioff));
            offset += 4; // crc
        }

        this.writeUint(data, offset, 0);
        offset += 4;
        this.writeASCII(data, offset, "IEND");
        offset += 4;
        this.writeUint(data, offset, this.crc(data, offset - 4, 4));
        offset += 4; // crc

        return new Uint8Array(data.buffer.slice(0, offset));
    }

    private compressPNG(bufs: ArrayBuffer[], w: number, h: number, ps: number, forbidPlte: boolean): ImageData {
        const out = this.compress(bufs, w, h, ps, 0, forbidPlte);
        for (let i = 0; i < bufs.length; i++) {
            const frm = out.frames[i];
            const nw = frm.rect.width;
            const nh = frm.rect.height;
            const bpl = frm.bpl;
            const bpp = frm.bpp;
            const fdata = new Uint8Array(nw * bpl + nh);
            frm.cimg = this.filterZero(frm.img, nh, bpp, bpl, fdata);
        }
        return out;
    }

    private compress(inBufs: ArrayBuffer[], w: number, h: number, inPs: number, forGIF: number, forbidPlte: boolean): ImageData {
        let ctype = 6;
        let depth = 8;
        let bpp = 4;
        let alphaAnd = 255;
        let ps = inPs;
        let bufs = inBufs;

        for (let j = 0; j < bufs.length; j++) {  // when not quantized, other frames can contain colors, that are not in an initial frame
            const img = new Uint8Array(bufs[j]);
            const ilen = img.length;
            for (let i = 0; i < ilen; i += 4) {
                alphaAnd &= img[i + 3];
            }
        }
        let gotAlpha: boolean = alphaAnd !== 255;

        const cmap: { [id: number]: number } = {};
        const plte = [];
        if (bufs.length !== 0) {
            cmap[0] = 0;
            plte.push(0);
            if (ps !== 0) {
                ps--;
            }
        }

        if (ps !== 0) {
            const qres = this.quantize(bufs, ps, forGIF);
            bufs = qres.bufs;
            for (let i = 0; i < qres.plte.length; i++) {
                const c = qres.plte[i].est.rgba;
                if (cmap[c] == null) {
                    cmap[c] = plte.length;
                    plte.push(c);
                }
            }
        } else {
            // what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
            for (let j = 0; j < bufs.length; j++) {  // when not quantized, other frames can contain colors, that are not in an initial frame
                const img32 = new Uint32Array(bufs[j]);
                const ilen = img32.length;
                for (let i = 0; i < ilen; i++) {
                    const c = img32[i];
                    if ((i < w || (c !== img32[i - 1] && c !== img32[i - w])) && cmap[c] == null) {
                        cmap[c] = plte.length;
                        plte.push(c);
                        if (plte.length >= 300) {
                            break;
                        }
                    }
                }
            }
        }

        const brute = gotAlpha ? forGIF : false;		// brute : frames can only be copied, not "blended"
        const cc = plte.length;
        if (cc <= 256 && !forbidPlte) {
            if (cc <= 2) {
                depth = 1;
            } else if (cc <= 4) {
                depth = 2;
            } else if (cc <= 16) {
                depth = 4;
            } else {
                depth = 8;
            }
            if (forGIF) {
                depth = 8;
            }
            gotAlpha = true;
        }

        const frms: Frame[] = [];
        for (let j = 0; j < bufs.length; j++) {
            let cimg = new Uint8Array(bufs[j]);
            let cimg32 = new Uint32Array(cimg.buffer);

            let nx = 0;
            let ny = 0;
            let nw = w;
            let nh = h;
            let blend = 0;
            if (j !== 0 && !brute) {
                const tlim = (forGIF || j === 1 || frms[frms.length - 2].dispose === 2) ? 1 : 2;
                let tstp = 0;
                let tarea = 1e9;
                for (let it = 0; it < tlim; it++) {
                    const p32 = new Uint32Array(bufs[j - 1 - it]);
                    let mix = w;
                    let miy = h;
                    let max = -1;
                    let may = -1;
                    for (let y = 0; y < h; y++) {
                        for (let x = 0; x < w; x++) {
                            const i = y * w + x;
                            if (cimg32[i] !== p32[i]) {
                                if (x < mix) {
                                    mix = x;
                                }
                                if (x > max) {
                                    max = x;
                                }
                                if (y < miy) {
                                    miy = y;
                                }
                                if (y > may) {
                                    may = y;
                                }
                            }
                        }
                    }
                    const sarea = (max === -1) ? 1 : (max - mix + 1) * (may - miy + 1);
                    if (sarea < tarea) {
                        tarea = sarea;
                        tstp = it;
                        if (max === -1) {
                            nx = 0;
                            ny = 0;
                            nw = 1;
                            nh = 1;
                        } else {
                            nx = mix;
                            ny = miy;
                            nw = max - mix + 1;
                            nh = may - miy + 1;
                        }
                    }
                }

                const pimg = new Uint8Array(bufs[j - 1 - tstp]);
                if (tstp === 1) {
                    frms[frms.length - 1].dispose = 2;
                }

                const nimg = new Uint8Array(nw * nh * 4);
                this.copyTile(pimg, w, h, nimg, nw, nh, -nx, -ny, 0);
                if (this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 3)) {
                    this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 2);
                    blend = 1;
                } else {
                    this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 0);
                    blend = 0;
                }
                cimg = nimg;
                cimg32 = new Uint32Array(cimg.buffer);
            }
            let bpl = 4 * nw;
            if (cc <= 256 && !forbidPlte) {
                bpl = Math.ceil(depth * nw / 8);
                const nimg = new Uint8Array(bpl * nh);
                for (let y = 0; y < nh; y++) {
                    const i = y * bpl;
                    const ii = y * nw;
                    if (depth === 8) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x)] = (cmap[cimg32[ii + x]]);
                        }
                    } else if (depth === 4) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 1)] |= (cmap[cimg32[ii + x]] << (4 - (x & 1) * 4));
                        }
                    } else if (depth === 2) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 2)] |= (cmap[cimg32[ii + x]] << (6 - (x & 3) * 2));
                        }
                    } else if (depth === 1) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 3)] |= (cmap[cimg32[ii + x]] << (7 - (x & 7) * 1));
                        }
                    }
                }
                cimg = nimg;
                ctype = 3;
                bpp = 1;
            } else if (!gotAlpha && bufs.length === 1) {	// some next "reduced" frames may contain alpha for blending
                const nimg = new Uint8Array(nw * nh * 3);
                const area = nw * nh;
                for (let i = 0; i < area; i++) {
                    const ti = i * 3;
                    const qi = i * 4;
                    nimg[ti] = cimg[qi];
                    nimg[ti + 1] = cimg[qi + 1];
                    nimg[ti + 2] = cimg[qi + 2];
                }
                cimg = nimg;
                ctype = 2;
                bpp = 3;
                bpl = 3 * nw;
            }
            frms.push({
                rect: {
                    x: nx,
                    y: ny,
                    width: nw,
                    height: nh
                },
                img: cimg,
                bpl: bpl,
                bpp: bpp,
                blend: blend,
                dispose: brute ? 1 : 0
            });
        }
        return { ctype: ctype, depth: depth, plte: plte, gotAlpha: gotAlpha, frames: frms };
    }

    private filterZero(img: Uint8Array, h: number, bpp: number, bpl: number, data: Uint8Array): Uint8Array {
        const fls = [];
        for (let t = 0; t < 5; t++) {
            if (h * bpl > 500000 && (t === 2 || t === 3 || t === 4)) {
                continue;
            }
            for (let y = 0; y < h; y++) {
                this.filterLine(data, img, y, bpl, bpp, t);
            }
            fls.push(pako.deflate(data));
            if (bpp === 1) {
                break;
            }
        }
        let ti;
        let tsize = 1e9;
        for (let i = 0; i < fls.length; i++) {
            if (fls[i].length < tsize) {
                ti = i;
                tsize = fls[i].length;
            }
        }
        return fls[ti];
    }

    private filterLine(data: Uint8Array, img: Uint8Array, y: number, bpl: number, bpp: number, type: number): void {
        const i = y * bpl;
        let di = i + y;
        data[di] = type; di++;

        if (type === 0) {
            for (let x = 0; x < bpl; x++) {
                data[di + x] = img[i + x];
            }
        } else if (type === 1) {
            for (let x = 0; x < bpp; x++) {
                data[di + x] = img[i + x];
            }
            for (let x = bpp; x < bpl; x++) {
                data[di + x] = (img[i + x] - img[i + x - bpp] + 256) & 255;
            }
        } else if (y === 0) {
            for (let x = 0; x < bpp; x++) {
                data[di + x] = img[i + x];
            }

            if (type === 2) {
                for (let x = bpp; x < bpl; x++) {
                    data[di + x] = img[i + x];
                }
            }
            if (type === 3) {
                for (let x = bpp; x < bpl; x++) {
                    data[di + x] = (img[i + x] - (img[i + x - bpp] >> 1) + 256) & 255;
                }
            }
            if (type === 4) {
                for (let x = bpp; x < bpl; x++) {
                    data[di + x] = (img[i + x] - this.paeth(img[i + x - bpp], 0, 0) + 256) & 255;
                }
            }
        } else {
            if (type === 2) {
                for (let x = 0; x < bpl; x++) {
                    data[di + x] = (img[i + x] + 256 - img[i + x - bpl]) & 255;
                }
            }
            if (type === 3) {
                for (let x = 0; x < bpp; x++) {
                    data[di + x] = (img[i + x] + 256 - (img[i + x - bpl] >> 1)) & 255;
                }
                for (let x = bpp; x < bpl; x++) {
                    data[di + x] = (img[i + x] + 256 - ((img[i + x - bpl] + img[i + x - bpp]) >> 1)) & 255;
                }
            }
            if (type === 4) {
                for (let x = 0; x < bpp; x++) {
                    data[di + x] = (img[i + x] + 256 - this.paeth(0, img[i + x - bpl], 0)) & 255;
                }
                for (let x = bpp; x < bpl; x++) {
                    data[di + x] = (img[i + x] + 256 - this.paeth(img[i + x - bpp], img[i + x - bpl], img[i + x - bpp - bpl])) & 255;
                }
            }
        }
    }

    private paeth(a: number, b: number, c: number): number {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        if (pa <= pb && pa <= pc) {
            return a;
        } else if (pb <= pc) {
            return b;
        }
        return c;
    }

    private writeASCII(data: Uint8Array, p: number, s: string): void {
        for (let i = 0; i < s.length; i++) {
            data[p + i] = s.charCodeAt(i);
        }
    }

    private writeUint(buff: Uint8Array, p: number, n: number): void {
        buff[p] = (n >> 24) & 255;
        buff[p + 1] = (n >> 16) & 255;
        buff[p + 2] = (n >> 8) & 255;
        buff[p + 3] = n & 255;
    }

    private writeUshort(buff: Uint8Array, p: number, n: number): void {
        buff[p] = (n >> 8) & 255;
        buff[p + 1] = n & 255;
    }

    private copyTile(sb: Uint8Array, sw: number, sh: number, tb: Uint8Array, tw: number, th: number, xoff: number, yoff: number, mode: number): boolean {
        const w = Math.min(sw, tw);
        const h = Math.min(sh, th);
        let si = 0;
        let ti = 0;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (xoff >= 0 && yoff >= 0) {
                    si = (y * sw + x) << 2;
                    ti = ((yoff + y) * tw + xoff + x) << 2;
                } else {
                    si = ((-yoff + y) * sw - xoff + x) << 2;
                    ti = (y * tw + x) << 2;
                }

                if (mode === 0) {
                    tb[ti] = sb[si];
                    tb[ti + 1] = sb[si + 1];
                    tb[ti + 2] = sb[si + 2];
                    tb[ti + 3] = sb[si + 3];
                } else if (mode === 1) {
                    const fa = sb[si + 3] * (1 / 255);
                    const fr = sb[si] * fa;
                    const fg = sb[si + 1] * fa;
                    const fb = sb[si + 2] * fa;
                    const ba = tb[ti + 3] * (1 / 255);
                    const br = tb[ti] * ba;
                    const bg = tb[ti + 1] * ba;
                    const bb = tb[ti + 2] * ba;

                    const ifa = 1 - fa;
                    const oa = fa + ba * ifa;
                    const ioa = (oa === 0 ? 0 : 1 / oa);
                    tb[ti + 3] = 255 * oa;
                    tb[ti + 0] = (fr + br * ifa) * ioa;
                    tb[ti + 1] = (fg + bg * ifa) * ioa;
                    tb[ti + 2] = (fb + bb * ifa) * ioa;
                } else if (mode === 2) {	// copy only differences, otherwise zero
                    const fa = sb[si + 3];
                    const fr = sb[si];
                    const fg = sb[si + 1];
                    const fb = sb[si + 2];
                    const ba = tb[ti + 3];
                    const br = tb[ti];
                    const bg = tb[ti + 1];
                    const bb = tb[ti + 2];
                    if (fa === ba && fr === br && fg === bg && fb === bb) {
                        tb[ti] = 0;
                        tb[ti + 1] = 0;
                        tb[ti + 2] = 0;
                        tb[ti + 3] = 0;
                    } else {
                        tb[ti] = fr;
                        tb[ti + 1] = fg;
                        tb[ti + 2] = fb;
                        tb[ti + 3] = fa;
                    }
                } else if (mode === 3) {	// check if can be blended
                    const fa = sb[si + 3];
                    const fr = sb[si];
                    const fg = sb[si + 1];
                    const fb = sb[si + 2];
                    const ba = tb[ti + 3];
                    const br = tb[ti];
                    const bg = tb[ti + 1];
                    const bb = tb[ti + 2];
                    if (fa === ba && fr === br && fg === bg && fb === bb) {
                        continue;
                    }
                    //if(fa!=255 && ba!=0) return false;
                    if (fa < 220 && ba > 20) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    private crc(b: Uint8Array, o: number, l: number): number {
        return this.crcUpdate(0xFFFFFFFF, b, o, l) ^ 0xFFFFFFFF;
    }

    private crcUpdate(c: number, buf: Uint8Array, off: number, len: number): number {
        let localC = c;
        const crcTable = this.crcTable();
        for (let i = 0; i < len; i++) {
            localC = crcTable[(localC ^ buf[off + i]) & 0xFF] ^ (localC >>> 8);
        }
        return localC;
    }

    private crcTable(): Uint32Array {
        const tab = new Uint32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) {
                if (c & 1) {
                    c = 0xEDB88320 ^ (c >>> 1);
                } else {
                    c = c >>> 1;
                }
            }
            tab[n] = c;
        }
        return tab;
    }

    private quantize(bufs: ArrayBuffer[], ps: number, roundAlpha: number): { bufs: ArrayBuffer[]; plte: Leaf[] } {
        const imgs: Uint8Array[] = [];
        let totl = 0;
        for (let i = 0; i < bufs.length; i++) {
            imgs.push(this.alphaMul(new Uint8Array(bufs[i]), roundAlpha));
            totl += bufs[i].byteLength;
        }

        const nimg = new Uint8Array(totl);
        const nimg32 = new Uint32Array(nimg.buffer);
        let noff = 0;
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            const il = img.length;
            for (let j = 0; j < il; j++) {
                nimg[noff + j] = img[j];
            }
            noff += il;
        }

        const root: Leaf = {
            i0: 0,
            i1: nimg.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null
        };  // basic statistic, extra statistic
        root.bst = this.quantizeStats(nimg, root.i0, root.i1);
        root.est = this.quantizeEstats(root.bst);
        const leafs: Leaf[] = [root];

        while (leafs.length < ps) {
            let maxL = 0;
            let mi = 0;
            for (let i = 0; i < leafs.length; i++) {
                if (leafs[i].est.L > maxL) {
                    maxL = leafs[i].est.L; mi = i;
                }
            }
            if (maxL < 1e-3) {
                break;
            }
            const node = leafs[mi];

            const s0 = this.quantizeSplitPixels(nimg, nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);

            const ln: Leaf = {
                i0: node.i0,
                i1: s0,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            ln.bst = this.quantizeStats(nimg, ln.i0, ln.i1);
            ln.est = this.quantizeEstats(ln.bst);
            const rn: Leaf = {
                i0: s0,
                i1: node.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            rn.bst = {
                R: [],
                m: [],
                N: node.bst.N - ln.bst.N
            };
            for (let i = 0; i < 16; i++) {
                rn.bst.R[i] = node.bst.R[i] - ln.bst.R[i];
            }
            for (let i = 0; i < 4; i++) {
                rn.bst.m[i] = node.bst.m[i] - ln.bst.m[i];
            }
            rn.est = this.quantizeEstats(rn.bst);

            node.left = ln;
            node.right = rn;
            leafs[mi] = ln;
            leafs.push(rn);
        }
        leafs.sort((a, b) => b.bst.N - a.bst.N);

        const outBufs: ArrayBuffer[] = [];
        for (let ii = 0; ii < imgs.length; ii++) {
            const sb = new Uint8Array(imgs[ii]);
            const tb: Uint32Array = new Uint32Array(imgs[ii]);
            const len = sb.length;

            for (let i = 0; i < len; i += 4) {
                const r = sb[i] * (1 / 255);
                const g = sb[i + 1] * (1 / 255);
                const b = sb[i + 2] * (1 / 255);
                const a = sb[i + 3] * (1 / 255);

                //  exact, but too slow :(
                //var nd = UPNG.quantize.getNearest(root, r, g, b, a);
                let nd = root;
                while (nd.left) {
                    nd = (this.quantizePlaneDst(nd.est, r, g, b, a) <= 0) ? nd.left : nd.right;
                }

                tb[i >> 2] = nd.est.rgba;
            }
            outBufs[ii] = tb.buffer;
        }
        return { bufs: outBufs, plte: leafs };
    }

    private quantizeStats(nimg: Uint8Array, i0: number, i1: number): { R: number[]; m: number[]; N: number } {
        const R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const m = [0, 0, 0, 0];
        const N = (i1 - i0) >> 2;
        for (let i = i0; i < i1; i += 4) {
            const r = nimg[i] * (1 / 255);
            const g = nimg[i + 1] * (1 / 255);
            const b = nimg[i + 2] * (1 / 255);
            const a = nimg[i + 3] * (1 / 255);
            //let r = nimg[i], g = nimg[i+1], b = nimg[i+2], a = nimg[i+3];
            m[0] += r; m[1] += g; m[2] += b; m[3] += a;

            R[0] += r * r; R[1] += r * g; R[2] += r * b; R[3] += r * a;
            R[5] += g * g; R[6] += g * b; R[7] += g * a;
            R[10] += b * b; R[11] += b * a;
            R[15] += a * a;
        }
        R[4] = R[1]; R[8] = R[2]; R[12] = R[3]; R[9] = R[6]; R[13] = R[7]; R[14] = R[11];

        return { R: R, m: m, N: N };
    }

    private quantizeEstats(stats: { R: number[]; m: number[]; N: number }): {
        Cov: number[];
        q: number[];
        e: number[];
        L: number;
        eMq255: number;
        eMq: number;
        rgba: number;
    } {
        const R = stats.R;
        const m = stats.m;
        const N = stats.N;

        const m0 = m[0];
        const m1 = m[1];
        const m2 = m[2];
        const m3 = m[3];
        const iN = (N === 0 ? 0 : 1 / N);
        const rj = [
            R[0] - m0 * m0 * iN, R[1] - m0 * m1 * iN, R[2] - m0 * m2 * iN, R[3] - m0 * m3 * iN,
            R[4] - m1 * m0 * iN, R[5] - m1 * m1 * iN, R[6] - m1 * m2 * iN, R[7] - m1 * m3 * iN,
            R[8] - m2 * m0 * iN, R[9] - m2 * m1 * iN, R[10] - m2 * m2 * iN, R[11] - m2 * m3 * iN,
            R[12] - m3 * m0 * iN, R[13] - m3 * m1 * iN, R[14] - m3 * m2 * iN, R[15] - m3 * m3 * iN
        ];

        const A = rj;
        let b = [0.5, 0.5, 0.5, 0.5];
        let mi = 0;
        let tmi = 0;

        if (N !== 0) {
            for (let i = 0; i < 10; i++) {
                b = this.m4MultVec(A, b);
                tmi = Math.sqrt(this.m4Dot(b, b));
                b = this.m4Sml(1 / tmi, b);
                if (Math.abs(tmi - mi) < 1e-9) {
                    break;
                }
                mi = tmi;
            }
        }
        //b = [0,0,1,0];  mi=N;
        const q = [m0 * iN, m1 * iN, m2 * iN, m3 * iN];
        const eMq255 = this.m4Dot(this.m4Sml(255, q), b);

        const ia = (q[3] < 0.001) ? 0 : 1 / q[3];

        return {
            Cov: rj,
            q: q,
            e: b,
            L: mi,
            eMq255: eMq255,
            eMq: this.m4Dot(b, q),
            rgba: (((Math.round(255 * q[3]) << 24) | (Math.round(255 * q[2] * ia) << 16) | (Math.round(255 * q[1] * ia) << 8) | (Math.round(255 * q[0] * ia) << 0)) >>> 0)
        };
    }

    private quantizePlaneDst(est: { e: number[]; eMq: number }, r: number, g: number, b: number, a: number): number {
        const e = est.e;
        return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq;
    }

    private quantizeSplitPixels(nimg: Uint8Array, nimg32: Uint32Array, i0in: number, i1in: number, e: number[], eMq: number): number {
        let i1 = i1in - 4;
        let i0 = i0in;
        while (i0 < i1) {
            while (this.quantizeVecDot(nimg, i0, e) <= eMq) {
                i0 += 4;
            }
            while (this.quantizeVecDot(nimg, i1, e) > eMq) {
                i1 -= 4;
            }
            if (i0 >= i1) {
                break;
            }

            const t = nimg32[i0 >> 2];
            nimg32[i0 >> 2] = nimg32[i1 >> 2];
            nimg32[i1 >> 2] = t;

            i0 += 4;
            i1 -= 4;
        }
        while (this.quantizeVecDot(nimg, i0, e) > eMq) {
            i0 -= 4;
        }
        return i0 + 4;
    }

    private quantizeVecDot(nimg: Uint8Array, i: number, e: number[]): number {
        return nimg[i] * e[0] + nimg[i + 1] * e[1] + nimg[i + 2] * e[2] + nimg[i + 3] * e[3];
    }

    private m4MultVec(m: number[], v: number[]): number[] {
        return [
            m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3],
            m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3],
            m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3],
            m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3]
        ];
    }
    private m4Dot(x: number[], y: number[]): number {
        return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3];
    }
    private m4Sml(a: number, y: number[]): number[] {
        return [a * y[0], a * y[1], a * y[2], a * y[3]];
    }

    private alphaMul(img: Uint8Array, roundA: number): Uint8Array {
        const nimg = new Uint8Array(img.length);
        const area = img.length >> 2;
        for (let i = 0; i < area; i++) {
            const qi = i << 2;
            let ia = img[qi + 3];
            if (roundA) {
                ia = ((ia < 128)) ? 0 : 255;
            }
            const a = ia * (1 / 255);
            nimg[qi + 0] = img[qi + 0] * a;
            nimg[qi + 1] = img[qi + 1] * a;
            nimg[qi + 2] = img[qi + 2] * a;
            nimg[qi + 3] = ia;
        }
        return nimg;
    }
}

type Frame = {
    img: any;
    rect: { width: number; height: number; x: number; y: number };
    bpl: number;
    bpp: number;
    dispose: number;
    blend: number;
    cimg?: any;
    depth?: number;
    ctype?: number;
};

type Leaf = {
    i0: number;
    i1: number;
    bst: { R: number[]; m: number[]; N: number };
    est: {
        Cov: number[];
        q: number[];
        e: number[];
        L: number;
        eMq255: number;
        eMq: number;
        rgba: number;
    };
    tdst: number;
    left: Leaf;
    right: Leaf;
};

type ImageData = {
    ctype: number;
    depth: number;
    plte: number[];
    gotAlpha: boolean;
    frames: Frame[];
};
