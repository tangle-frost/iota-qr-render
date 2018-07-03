var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deflate_1 = __importDefault(require("pako/lib/deflate"));
/**
 * PNG Encoder.
 * Based on https://github.com/photopea/UPNG.js
 */
class PngEncoder {
    /**
     * Encode the image frames to png.
     * @param bufs The frame buffers to encode.
     * @param w The image width.
     * @param h The image height.
     * @returns The data for the image.
     */
    encode(bufs, w, h) {
        const ps = 0;
        const forbidPlte = false;
        const dels = undefined;
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
                offset++; // dispose
                data[offset] = fr.blend;
                offset++; // blend
                this.writeUint(data, offset, this.crc(data, offset - 30, 30));
                offset += 4; // crc
            }
            const imgd = fr.cimg;
            const dl = imgd.length;
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
    /* @internal */
    compressPNG(bufs, w, h, ps, forbidPlte) {
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
    /* @internal */
    compress(inBufs, w, h, inPs, forGIF, forbidPlte) {
        let ctype = 6;
        let depth = 8;
        let bpp = 4;
        let alphaAnd = 255;
        let ps = inPs;
        let bufs = inBufs;
        for (let j = 0; j < bufs.length; j++) { // when not quantized, other frames can contain colors, that are not in an initial frame
            const img = new Uint8Array(bufs[j]);
            const ilen = img.length;
            for (let i = 0; i < ilen; i += 4) {
                alphaAnd &= img[i + 3];
            }
        }
        let gotAlpha = alphaAnd !== 255;
        const cmap = {};
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
        }
        else {
            // what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
            for (let j = 0; j < bufs.length; j++) { // when not quantized, other frames can contain colors, that are not in an initial frame
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
        const brute = gotAlpha ? forGIF : false; // brute : frames can only be copied, not "blended"
        const cc = plte.length;
        if (cc <= 256 && !forbidPlte) {
            if (cc <= 2) {
                depth = 1;
            }
            else if (cc <= 4) {
                depth = 2;
            }
            else if (cc <= 16) {
                depth = 4;
            }
            else {
                depth = 8;
            }
            if (forGIF) {
                depth = 8;
            }
            gotAlpha = true;
        }
        const frms = [];
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
                        }
                        else {
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
                }
                else {
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
                    }
                    else if (depth === 4) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 1)] |= (cmap[cimg32[ii + x]] << (4 - (x & 1) * 4));
                        }
                    }
                    else if (depth === 2) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 2)] |= (cmap[cimg32[ii + x]] << (6 - (x & 3) * 2));
                        }
                    }
                    else if (depth === 1) {
                        for (let x = 0; x < nw; x++) {
                            nimg[i + (x >> 3)] |= (cmap[cimg32[ii + x]] << (7 - (x & 7) * 1));
                        }
                    }
                }
                cimg = nimg;
                ctype = 3;
                bpp = 1;
            }
            else if (!gotAlpha && bufs.length === 1) { // some next "reduced" frames may contain alpha for blending
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
    /* @internal */
    filterZero(img, h, bpp, bpl, data) {
        const fls = [];
        for (let t = 0; t < 5; t++) {
            if (h * bpl > 500000 && (t === 2 || t === 3 || t === 4)) {
                continue;
            }
            for (let y = 0; y < h; y++) {
                this.filterLine(data, img, y, bpl, bpp, t);
            }
            fls.push(deflate_1.default.deflate(data));
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
    /* @internal */
    filterLine(data, img, y, bpl, bpp, type) {
        const i = y * bpl;
        let di = i + y;
        data[di] = type;
        di++;
        if (type === 0) {
            for (let x = 0; x < bpl; x++) {
                data[di + x] = img[i + x];
            }
        }
        else if (type === 1) {
            for (let x = 0; x < bpp; x++) {
                data[di + x] = img[i + x];
            }
            for (let x = bpp; x < bpl; x++) {
                data[di + x] = (img[i + x] - img[i + x - bpp] + 256) & 255;
            }
        }
        else if (y === 0) {
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
        }
        else {
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
    /* @internal */
    paeth(a, b, c) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        if (pa <= pb && pa <= pc) {
            return a;
        }
        else if (pb <= pc) {
            return b;
        }
        return c;
    }
    /* @internal */
    writeASCII(data, p, s) {
        for (let i = 0; i < s.length; i++) {
            data[p + i] = s.charCodeAt(i);
        }
    }
    /* @internal */
    writeUint(buff, p, n) {
        buff[p] = (n >> 24) & 255;
        buff[p + 1] = (n >> 16) & 255;
        buff[p + 2] = (n >> 8) & 255;
        buff[p + 3] = n & 255;
    }
    /* @internal */
    writeUshort(buff, p, n) {
        buff[p] = (n >> 8) & 255;
        buff[p + 1] = n & 255;
    }
    /* @internal */
    copyTile(sb, sw, sh, tb, tw, th, xoff, yoff, mode) {
        const w = Math.min(sw, tw);
        const h = Math.min(sh, th);
        let si = 0;
        let ti = 0;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (xoff >= 0 && yoff >= 0) {
                    si = (y * sw + x) << 2;
                    ti = ((yoff + y) * tw + xoff + x) << 2;
                }
                else {
                    si = ((-yoff + y) * sw - xoff + x) << 2;
                    ti = (y * tw + x) << 2;
                }
                if (mode === 0) {
                    tb[ti] = sb[si];
                    tb[ti + 1] = sb[si + 1];
                    tb[ti + 2] = sb[si + 2];
                    tb[ti + 3] = sb[si + 3];
                }
                else if (mode === 1) {
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
                }
                else if (mode === 2) { // copy only differences, otherwise zero
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
                    }
                    else {
                        tb[ti] = fr;
                        tb[ti + 1] = fg;
                        tb[ti + 2] = fb;
                        tb[ti + 3] = fa;
                    }
                }
                else if (mode === 3) { // check if can be blended
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
    /* @internal */
    crc(b, o, l) {
        return this.crcUpdate(0xFFFFFFFF, b, o, l) ^ 0xFFFFFFFF;
    }
    /* @internal */
    crcUpdate(c, buf, off, len) {
        let localC = c;
        const crcTable = this.crcTable();
        for (let i = 0; i < len; i++) {
            localC = crcTable[(localC ^ buf[off + i]) & 0xFF] ^ (localC >>> 8);
        }
        return localC;
    }
    /* @internal */
    crcTable() {
        const tab = new Uint32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) {
                if (c & 1) {
                    c = 0xEDB88320 ^ (c >>> 1);
                }
                else {
                    c = c >>> 1;
                }
            }
            tab[n] = c;
        }
        return tab;
    }
    /* @internal */
    quantize(bufs, ps, roundAlpha) {
        const imgs = [];
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
        const root = {
            i0: 0,
            i1: nimg.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null
        }; // basic statistic, extra statistic
        root.bst = this.quantizeStats(nimg, root.i0, root.i1);
        root.est = this.quantizeEstats(root.bst);
        const leafs = [root];
        while (leafs.length < ps) {
            let maxL = 0;
            let mi = 0;
            for (let i = 0; i < leafs.length; i++) {
                if (leafs[i].est.L > maxL) {
                    maxL = leafs[i].est.L;
                    mi = i;
                }
            }
            if (maxL < 1e-3) {
                break;
            }
            const node = leafs[mi];
            const s0 = this.quantizeSplitPixels(nimg, nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);
            const ln = {
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
            const rn = {
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
        const outBufs = [];
        for (let ii = 0; ii < imgs.length; ii++) {
            const sb = new Uint8Array(imgs[ii]);
            const tb = new Uint32Array(imgs[ii]);
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
    /* @internal */
    quantizeStats(nimg, i0, i1) {
        const R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const m = [0, 0, 0, 0];
        const N = (i1 - i0) >> 2;
        for (let i = i0; i < i1; i += 4) {
            const r = nimg[i] * (1 / 255);
            const g = nimg[i + 1] * (1 / 255);
            const b = nimg[i + 2] * (1 / 255);
            const a = nimg[i + 3] * (1 / 255);
            //let r = nimg[i], g = nimg[i+1], b = nimg[i+2], a = nimg[i+3];
            m[0] += r;
            m[1] += g;
            m[2] += b;
            m[3] += a;
            R[0] += r * r;
            R[1] += r * g;
            R[2] += r * b;
            R[3] += r * a;
            R[5] += g * g;
            R[6] += g * b;
            R[7] += g * a;
            R[10] += b * b;
            R[11] += b * a;
            R[15] += a * a;
        }
        R[4] = R[1];
        R[8] = R[2];
        R[12] = R[3];
        R[9] = R[6];
        R[13] = R[7];
        R[14] = R[11];
        return { R: R, m: m, N: N };
    }
    /* @internal */
    quantizeEstats(stats) {
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
    /* @internal */
    quantizePlaneDst(est, r, g, b, a) {
        const e = est.e;
        return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq;
    }
    /* @internal */
    quantizeSplitPixels(nimg, nimg32, i0in, i1in, e, eMq) {
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
    /* @internal */
    quantizeVecDot(nimg, i, e) {
        return nimg[i] * e[0] + nimg[i + 1] * e[1] + nimg[i + 2] * e[2] + nimg[i + 3] * e[3];
    }
    /* @internal */
    m4MultVec(m, v) {
        return [
            m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3],
            m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3],
            m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3],
            m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3]
        ];
    }
    /* @internal */
    m4Dot(x, y) {
        return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3];
    }
    /* @internal */
    m4Sml(a, y) {
        return [a * y[0], a * y[1], a * y[2], a * y[3]];
    }
    /* @internal */
    alphaMul(img, roundA) {
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
exports.PngEncoder = PngEncoder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nRW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbWFnZXMvcG5nRW5jb2Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQW9DO0FBRXBDOzs7R0FHRztBQUNIO0lBQ0k7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLElBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDbkQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sSUFBSSxHQUFVLFNBQVMsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxN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QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNsQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7d0JBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzFDO3FCQUNKO3lCQUFNLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyRTtxQkFDSjt5QkFBTSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3pCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckU7cUJB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LEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7YUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzlEO1NBQ0o7YUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDN0I7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QyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUN2QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMzQixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFFM0IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7b0JBQ3pCLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztv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QUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLCtEQUErRDtZQUMvRCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpGLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO0lBQ1AsY0FBYyxDQUFDLEtBQThDO1FBU2pFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWxCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxHQUFHO1lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtZQUNsRixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ2xGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDcEYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtTQUN6RixDQUFDO1FBRUYsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFD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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxlQUFlO0lBQ1AsU0FBUyxDQUFDLENBQVcsRUFBRSxDQUFXO1FBQ3RDLE9BQU87WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFD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