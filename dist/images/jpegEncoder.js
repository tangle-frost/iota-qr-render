Object.defineProperty(exports, "__esModule", { value: true });
/**
 * JPEG Encoder.
 * Baed on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
 */
class JPEGEncoder {
    /**
     * Create a new instance of JPEGEncoder.
     */
    constructor() {
        this._yTable = new Array(64);
        this._uvTable = new Array(64);
        this._fdtblY = new Array(64);
        this._fdtblUV = new Array(64);
        this._bitCode = new Array(65535);
        this._category = new Array(65535);
        this._outputfDCTQuant = new Array(64);
        this._du = new Array(64);
        this._byteOut = [];
        this._byteNew = 0;
        this._bytePos = 7;
        this._ydu = new Array(64);
        this._udu = new Array(64);
        this._vdu = new Array(64);
        this._rgbYuvTable = new Array(2048);
        this.initHuffmanTbl();
        this.initCategoryNumber();
        this.initRGBYUVTable();
    }
    /**
     * Encode the image with the given quality.
     * @param width The width of the image to encode.
     * @param height The height of the image to encode.
     * @param imageData The data for the image.
     * @param quality The quality to encode the image at.
     * @returns The data for the encoded image.
     */
    encode(width, height, imageData, quality) {
        this.setQuality(quality);
        // Initialize bit writer
        this._byteOut = new Array();
        this._byteNew = 0;
        this._bytePos = 7;
        // Add JPEG headers
        this.writeWord(0xFFD8); // SOI
        this.writeAPP0();
        this.writeDQT();
        this.writeSOF0(width, height);
        this.writeDHT();
        this.writeSOS();
        // Encode 8x8 macroblocks
        let DCY = 0;
        let DCU = 0;
        let DCV = 0;
        this._byteNew = 0;
        this._bytePos = 7;
        const quadWidth = width * 4;
        let x;
        let y = 0;
        let r;
        let g;
        let b;
        let start;
        let p;
        let col;
        let row;
        let pos;
        while (y < height) {
            x = 0;
            while (x < quadWidth) {
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;
                for (pos = 0; pos < 64; pos++) {
                    row = pos >> 3; // /8
                    col = (pos & 7) * 4; // %8
                    p = start + (row * quadWidth) + col;
                    if (y + row >= height) { // padding bottom
                        p -= (quadWidth * (y + 1 + row - height));
                    }
                    if (x + col >= quadWidth) { // padding right
                        p -= ((x + col) - quadWidth + 4);
                    }
                    r = imageData[p++];
                    g = imageData[p++];
                    b = imageData[p++];
                    /* // calculate YUV values dynamically
                    YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                    UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                    VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                    */
                    // use lookup table (slightly faster)
                    this._ydu[pos] = ((this._rgbYuvTable[r] + this._rgbYuvTable[(g + 256) >> 0] + this._rgbYuvTable[(b + 512) >> 0]) >> 16) - 128;
                    this._udu[pos] = ((this._rgbYuvTable[(r + 768) >> 0] + this._rgbYuvTable[(g + 1024) >> 0] + this._rgbYuvTable[(b + 1280) >> 0]) >> 16) - 128;
                    this._vdu[pos] = ((this._rgbYuvTable[(r + 1280) >> 0] + this._rgbYuvTable[(g + 1536) >> 0] + this._rgbYuvTable[(b + 1792) >> 0]) >> 16) - 128;
                }
                DCY = this.processDU(this._ydu, this._fdtblY, DCY, this._ydcHashTable, this._yacHashTable);
                DCU = this.processDU(this._udu, this._fdtblUV, DCU, this._uvdcHashTable, this._uvacHashTable);
                DCV = this.processDU(this._vdu, this._fdtblUV, DCV, this._uvdcHashTable, this._uvacHashTable);
                x += 32;
            }
            y += 8;
        }
        // Do the bit alignment of the EOI marker
        if (this._bytePos >= 0) {
            const fillbits = [];
            fillbits[1] = this._bytePos + 1;
            fillbits[0] = (1 << (this._bytePos + 1)) - 1;
            this.writeBits(fillbits);
        }
        this.writeWord(0xFFD9); //EOI
        return new Uint8Array(this._byteOut);
    }
    /* @internal */
    setQuality(quality) {
        if (quality <= 0 || quality > 100) {
            throw new Error(`Quality must be between 1 and 100, it is ${quality}`);
        }
        let sf = 0;
        if (quality < 50) {
            sf = Math.floor(5000 / quality);
        }
        else {
            sf = Math.floor(200 - quality * 2);
        }
        this.initQuantTables(sf);
    }
    /* @internal */
    initQuantTables(sf) {
        const YQT = [
            16, 11, 10, 16, 24, 40, 51, 61,
            12, 12, 14, 19, 26, 58, 60, 55,
            14, 13, 16, 24, 40, 57, 69, 56,
            14, 17, 22, 29, 51, 87, 80, 62,
            18, 22, 37, 56, 68, 109, 103, 77,
            24, 35, 55, 64, 81, 104, 113, 92,
            49, 64, 78, 87, 103, 121, 120, 101,
            72, 92, 95, 98, 112, 100, 103, 99
        ];
        for (let i = 0; i < 64; i++) {
            let t = Math.floor((YQT[i] * sf + 50) / 100);
            if (t < 1) {
                t = 1;
            }
            else if (t > 255) {
                t = 255;
            }
            this._yTable[JPEGEncoder.SIG_ZAG[i]] = t;
        }
        const UVQT = [
            17, 18, 24, 47, 99, 99, 99, 99,
            18, 21, 26, 66, 99, 99, 99, 99,
            24, 26, 56, 99, 99, 99, 99, 99,
            47, 66, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99
        ];
        for (let j = 0; j < 64; j++) {
            let u = Math.floor((UVQT[j] * sf + 50) / 100);
            if (u < 1) {
                u = 1;
            }
            else if (u > 255) {
                u = 255;
            }
            this._uvTable[JPEGEncoder.SIG_ZAG[j]] = u;
        }
        const aasf = [
            1, 1.387039845, 1.306562965, 1.175875602,
            1, 0.785694958, 0.5411961, 0.275899379
        ];
        let k = 0;
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                this._fdtblY[k] = (1 / (this._yTable[JPEGEncoder.SIG_ZAG[k]] * aasf[row] * aasf[col] * 8));
                this._fdtblUV[k] = (1 / (this._uvTable[JPEGEncoder.SIG_ZAG[k]] * aasf[row] * aasf[col] * 8));
                k++;
            }
        }
    }
    /* @internal */
    computeHuffmanTbl(nrcodes, stdTable) {
        let codevalue = 0;
        let posInTable = 0;
        const HT = new Array();
        for (let k = 1; k <= 16; k++) {
            for (let j = 1; j <= nrcodes[k]; j++) {
                HT[stdTable[posInTable]] = [];
                HT[stdTable[posInTable]][0] = codevalue;
                HT[stdTable[posInTable]][1] = k;
                posInTable++;
                codevalue++;
            }
            codevalue *= 2;
        }
        return HT;
    }
    /* @internal */
    initHuffmanTbl() {
        this._ydcHashTable = this.computeHuffmanTbl(JPEGEncoder.STD_DC_LUMINANCE_NRCODES, JPEGEncoder.STD_DC_LUMINANCE_VALUES);
        this._uvdcHashTable = this.computeHuffmanTbl(JPEGEncoder.STD_DC_CHROMINANCE_NRCODES, JPEGEncoder.STD_DC_CHROMINANCE_VALUES);
        this._yacHashTable = this.computeHuffmanTbl(JPEGEncoder.STD_AC_LUMINANCE_NRCODES, JPEGEncoder.STD_AC_LUMINANCE_VALUES);
        this._uvacHashTable = this.computeHuffmanTbl(JPEGEncoder.STD_AC_CHROMINANCE_NRCODES, JPEGEncoder.STD_AC_CHROMINANCE_VALUES);
    }
    /* @internal */
    initCategoryNumber() {
        let nrlower = 1;
        let nrupper = 2;
        for (let cat = 1; cat <= 15; cat++) {
            //Positive numbers
            for (let nr = nrlower; nr < nrupper; nr++) {
                this._category[32767 + nr] = cat;
                this._bitCode[32767 + nr] = [];
                this._bitCode[32767 + nr][1] = cat;
                this._bitCode[32767 + nr][0] = nr;
            }
            //Negative numbers
            for (let nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
                this._category[32767 + nrneg] = cat;
                this._bitCode[32767 + nrneg] = [];
                this._bitCode[32767 + nrneg][1] = cat;
                this._bitCode[32767 + nrneg][0] = nrupper - 1 + nrneg;
            }
            nrlower <<= 1;
            nrupper <<= 1;
        }
    }
    /* @internal */
    initRGBYUVTable() {
        for (let i = 0; i < 256; i++) {
            this._rgbYuvTable[i] = 19595 * i;
            this._rgbYuvTable[(i + 256) >> 0] = 38470 * i;
            this._rgbYuvTable[(i + 512) >> 0] = 7471 * i + 0x8000;
            this._rgbYuvTable[(i + 768) >> 0] = -11059 * i;
            this._rgbYuvTable[(i + 1024) >> 0] = -21709 * i;
            this._rgbYuvTable[(i + 1280) >> 0] = 32768 * i + 0x807FFF;
            this._rgbYuvTable[(i + 1536) >> 0] = -27439 * i;
            this._rgbYuvTable[(i + 1792) >> 0] = -5329 * i;
        }
    }
    /* @internal */
    writeBits(bs) {
        const value = bs[0];
        let posval = bs[1] - 1;
        while (posval >= 0) {
            if (value & (1 << posval)) {
                this._byteNew |= (1 << this._bytePos);
            }
            posval--;
            this._bytePos--;
            if (this._bytePos < 0) {
                if (this._byteNew === 0xFF) {
                    this.writeByte(0xFF);
                    this.writeByte(0);
                }
                else {
                    this.writeByte(this._byteNew);
                }
                this._bytePos = 7;
                this._byteNew = 0;
            }
        }
    }
    /* @internal */
    writeByte(value) {
        this._byteOut.push(value);
    }
    /* @internal */
    writeWord(value) {
        this.writeByte((value >> 8) & 0xFF);
        this.writeByte((value) & 0xFF);
    }
    /* @internal */
    fDCTQuant(data, fdtbl) {
        let d0;
        let d1;
        let d2;
        let d3;
        let d4;
        let d5;
        let d6;
        let d7;
        /* Pass 1: process rows. */
        let dataOff = 0;
        let i;
        const I8 = 8;
        const I64 = 64;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 1];
            d2 = data[dataOff + 2];
            d3 = data[dataOff + 3];
            d4 = data[dataOff + 4];
            d5 = data[dataOff + 5];
            d6 = data[dataOff + 6];
            d7 = data[dataOff + 7];
            const tmp0 = d0 + d7;
            const tmp7 = d0 - d7;
            const tmp1 = d1 + d6;
            const tmp6 = d1 - d6;
            const tmp2 = d2 + d5;
            const tmp5 = d2 - d5;
            const tmp3 = d3 + d4;
            const tmp4 = d3 - d4;
            /* Even part */
            let tmp10 = tmp0 + tmp3; /* phase 2 */
            const tmp13 = tmp0 - tmp3;
            let tmp11 = tmp1 + tmp2;
            let tmp12 = tmp1 - tmp2;
            data[dataOff] = tmp10 + tmp11; /* phase 3 */
            data[dataOff + 4] = tmp10 - tmp11;
            const z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
            data[dataOff + 2] = tmp13 + z1; /* phase 5 */
            data[dataOff + 6] = tmp13 - z1;
            /* Odd part */
            tmp10 = tmp4 + tmp5; /* phase 2 */
            tmp11 = tmp5 + tmp6;
            tmp12 = tmp6 + tmp7;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            const z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
            const z2 = 0.5411961 * tmp10 + z5; /* c2-c6 */
            const z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
            const z3 = tmp11 * 0.707106781; /* c4 */
            const z11 = tmp7 + z3; /* phase 5 */
            const z13 = tmp7 - z3;
            data[dataOff + 5] = z13 + z2; /* phase 6 */
            data[dataOff + 3] = z13 - z2;
            data[dataOff + 1] = z11 + z4;
            data[dataOff + 7] = z11 - z4;
            dataOff += 8; /* advance pointer to next row */
        }
        /* Pass 2: process columns. */
        dataOff = 0;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 8];
            d2 = data[dataOff + 16];
            d3 = data[dataOff + 24];
            d4 = data[dataOff + 32];
            d5 = data[dataOff + 40];
            d6 = data[dataOff + 48];
            d7 = data[dataOff + 56];
            const tmp0p2 = d0 + d7;
            const tmp7p2 = d0 - d7;
            const tmp1p2 = d1 + d6;
            const tmp6p2 = d1 - d6;
            const tmp2p2 = d2 + d5;
            const tmp5p2 = d2 - d5;
            const tmp3p2 = d3 + d4;
            const tmp4p2 = d3 - d4;
            /* Even part */
            let tmp10p2 = tmp0p2 + tmp3p2; /* phase 2 */
            const tmp13p2 = tmp0p2 - tmp3p2;
            let tmp11p2 = tmp1p2 + tmp2p2;
            let tmp12p2 = tmp1p2 - tmp2p2;
            data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
            data[dataOff + 32] = tmp10p2 - tmp11p2;
            const z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
            data[dataOff + 16] = tmp13p2 + z1p2; /* phase 5 */
            data[dataOff + 48] = tmp13p2 - z1p2;
            /* Odd part */
            tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
            tmp11p2 = tmp5p2 + tmp6p2;
            tmp12p2 = tmp6p2 + tmp7p2;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            const z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
            const z2p2 = 0.5411961 * tmp10p2 + z5p2; /* c2-c6 */
            const z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
            const z3p2 = tmp11p2 * 0.707106781; /* c4 */
            const z11p2 = tmp7p2 + z3p2; /* phase 5 */
            const z13p2 = tmp7p2 - z3p2;
            data[dataOff + 40] = z13p2 + z2p2; /* phase 6 */
            data[dataOff + 24] = z13p2 - z2p2;
            data[dataOff + 8] = z11p2 + z4p2;
            data[dataOff + 56] = z11p2 - z4p2;
            dataOff++; /* advance pointer to next column */
        }
        // Quantize/descale the coefficients
        let fDCTQuant;
        for (i = 0; i < I64; ++i) {
            // Apply the quantization and scaling factor & Round to nearest integer
            fDCTQuant = data[i] * fdtbl[i];
            this._outputfDCTQuant[i] = (fDCTQuant > 0) ? ((fDCTQuant + 0.5) | 0) : ((fDCTQuant - 0.5) | 0);
            //outputfDCTQuant[i] = fround(fDCTQuant);
        }
        return this._outputfDCTQuant;
    }
    /* @internal */
    writeAPP0() {
        this.writeWord(0xFFE0); // marker
        this.writeWord(16); // length
        this.writeByte(0x4A); // J
        this.writeByte(0x46); // F
        this.writeByte(0x49); // I
        this.writeByte(0x46); // F
        this.writeByte(0); // = "JFIF",'\0'
        this.writeByte(1); // versionhi
        this.writeByte(1); // versionlo
        this.writeByte(0); // xyunits
        this.writeWord(1); // xdensity
        this.writeWord(1); // ydensity
        this.writeByte(0); // thumbnwidth
        this.writeByte(0); // thumbnheight
    }
    /* @internal */
    writeSOF0(width, height) {
        this.writeWord(0xFFC0); // marker
        this.writeWord(17); // length, truecolor YUV JPG
        this.writeByte(8); // precision
        this.writeWord(height);
        this.writeWord(width);
        this.writeByte(3); // nrofcomponents
        this.writeByte(1); // IdY
        this.writeByte(0x11); // HVY
        this.writeByte(0); // QTY
        this.writeByte(2); // IdU
        this.writeByte(0x11); // HVU
        this.writeByte(1); // QTU
        this.writeByte(3); // IdV
        this.writeByte(0x11); // HVV
        this.writeByte(1); // QTV
    }
    /* @internal */
    writeDQT() {
        this.writeWord(0xFFDB); // marker
        this.writeWord(132); // length
        this.writeByte(0);
        for (let i = 0; i < 64; i++) {
            this.writeByte(this._yTable[i]);
        }
        this.writeByte(1);
        for (let j = 0; j < 64; j++) {
            this.writeByte(this._uvTable[j]);
        }
    }
    /* @internal */
    writeDHT() {
        this.writeWord(0xFFC4); // marker
        this.writeWord(0x01A2); // length
        this.writeByte(0); // HTYDCinfo
        for (let i = 0; i < 16; i++) {
            this.writeByte(JPEGEncoder.STD_DC_LUMINANCE_NRCODES[i + 1]);
        }
        for (let j = 0; j <= 11; j++) {
            this.writeByte(JPEGEncoder.STD_DC_LUMINANCE_VALUES[j]);
        }
        this.writeByte(0x10); // HTYACinfo
        for (let k = 0; k < 16; k++) {
            this.writeByte(JPEGEncoder.STD_AC_LUMINANCE_NRCODES[k + 1]);
        }
        for (let l = 0; l <= 161; l++) {
            this.writeByte(JPEGEncoder.STD_AC_LUMINANCE_VALUES[l]);
        }
        this.writeByte(1); // HTUDCinfo
        for (let m = 0; m < 16; m++) {
            this.writeByte(JPEGEncoder.STD_DC_CHROMINANCE_NRCODES[m + 1]);
        }
        for (let n = 0; n <= 11; n++) {
            this.writeByte(JPEGEncoder.STD_DC_CHROMINANCE_VALUES[n]);
        }
        this.writeByte(0x11); // HTUACinfo
        for (let o = 0; o < 16; o++) {
            this.writeByte(JPEGEncoder.STD_AC_CHROMINANCE_NRCODES[o + 1]);
        }
        for (let p = 0; p <= 161; p++) {
            this.writeByte(JPEGEncoder.STD_AC_CHROMINANCE_VALUES[p]);
        }
    }
    /* @internal */
    writeSOS() {
        this.writeWord(0xFFDA); // marker
        this.writeWord(12); // length
        this.writeByte(3); // nrofcomponents
        this.writeByte(1); // IdY
        this.writeByte(0); // HTY
        this.writeByte(2); // IdU
        this.writeByte(0x11); // HTU
        this.writeByte(3); // IdV
        this.writeByte(0x11); // HTV
        this.writeByte(0); // Ss
        this.writeByte(0x3F); // Se
        this.writeByte(0); // Bf
    }
    /* @internal */
    processDU(CDU, fdtbl, passedDC, HTDC, HTAC) {
        let DC = passedDC;
        const EOB = HTAC[0x00];
        const m16zeroes = HTAC[0xF0];
        let pos;
        const I16 = 16;
        const I63 = 63;
        const I64 = 64;
        const DU_DCT = this.fDCTQuant(CDU, fdtbl);
        //ZigZag reorder
        for (let j = 0; j < I64; ++j) {
            this._du[JPEGEncoder.SIG_ZAG[j]] = DU_DCT[j];
        }
        const diff = this._du[0] - DC;
        DC = this._du[0];
        //Encode DC
        if (diff === 0) {
            this.writeBits(HTDC[0]); // Diff might be 0
        }
        else {
            pos = 32767 + diff;
            this.writeBits(HTDC[this._category[pos]]);
            this.writeBits(this._bitCode[pos]);
        }
        //Encode ACs
        let end0pos = 63; // was const... which is crazy
        for (; (end0pos > 0) && (this._du[end0pos] === 0); end0pos--) { }
        //end0pos = first element in reverse order !=0
        if (end0pos === 0) {
            this.writeBits(EOB);
            return DC;
        }
        let i = 1;
        let lng;
        while (i <= end0pos) {
            const startpos = i;
            for (; (this._du[i] === 0) && (i <= end0pos); ++i) { }
            let nrzeroes = i - startpos;
            if (nrzeroes >= I16) {
                lng = nrzeroes >> 4;
                for (let nrmarker = 1; nrmarker <= lng; ++nrmarker) {
                    this.writeBits(m16zeroes);
                }
                nrzeroes = nrzeroes & 0xF;
            }
            pos = 32767 + this._du[i];
            this.writeBits(HTAC[(nrzeroes << 4) + this._category[pos]]);
            this.writeBits(this._bitCode[pos]);
            i++;
        }
        if (end0pos !== I63) {
            this.writeBits(EOB);
        }
        return DC;
    }
}
/* @internal */
JPEGEncoder.STD_DC_LUMINANCE_NRCODES = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
/* @internal */
JPEGEncoder.STD_DC_LUMINANCE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* @internal */
JPEGEncoder.STD_AC_LUMINANCE_NRCODES = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7D];
/* @internal */
JPEGEncoder.STD_AC_LUMINANCE_VALUES = [
    0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12,
    0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07,
    0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xA1, 0x08,
    0x23, 0x42, 0xB1, 0xC1, 0x15, 0x52, 0xD1, 0xF0,
    0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0A, 0x16,
    0x17, 0x18, 0x19, 0x1A, 0x25, 0x26, 0x27, 0x28,
    0x29, 0x2A, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
    0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
    0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
    0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69,
    0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79,
    0x7A, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89,
    0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98,
    0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7,
    0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6,
    0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5,
    0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4,
    0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE1, 0xE2,
    0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA,
    0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
    0xF9, 0xFA
];
/* @internal */
JPEGEncoder.STD_DC_CHROMINANCE_NRCODES = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
/* @internal */
JPEGEncoder.STD_DC_CHROMINANCE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* @internal */
JPEGEncoder.STD_AC_CHROMINANCE_NRCODES = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
/* @internal */
JPEGEncoder.STD_AC_CHROMINANCE_VALUES = [
    0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21,
    0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71,
    0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91,
    0xA1, 0xB1, 0xC1, 0x09, 0x23, 0x33, 0x52, 0xF0,
    0x15, 0x62, 0x72, 0xD1, 0x0A, 0x16, 0x24, 0x34,
    0xE1, 0x25, 0xF1, 0x17, 0x18, 0x19, 0x1A, 0x26,
    0x27, 0x28, 0x29, 0x2A, 0x35, 0x36, 0x37, 0x38,
    0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48,
    0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
    0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68,
    0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
    0x79, 0x7A, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
    0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96,
    0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5,
    0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4,
    0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3,
    0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2,
    0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA,
    0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9,
    0xEA, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
    0xF9, 0xFA
];
/* @internal */
JPEGEncoder.SIG_ZAG = [
    0, 1, 5, 6, 14, 15, 27, 28,
    2, 4, 7, 13, 16, 26, 29, 42,
    3, 8, 12, 17, 25, 30, 41, 43,
    9, 11, 18, 24, 31, 40, 44, 53,
    10, 19, 23, 32, 39, 45, 52, 54,
    20, 22, 33, 38, 46, 51, 55, 60,
    21, 34, 37, 47, 50, 56, 59, 61,
    35, 36, 48, 49, 57, 58, 62, 63
];
exports.JPEGEncoder = JPEGEncoder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianBlZ0VuY29kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW1hZ2VzL2pwZWdFbmNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7QUFDSDtJQW9ISTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlB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QUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUN0QyxDQUFDO0lBRUQsZUFBZTtJQUNQLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUcsNEJBQTRCO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxZQUFZO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUksaUJBQWlCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQzVC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RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwSCxlQUFlO0FBQ1MsbUNBQXVCLEdBQWE7SUFDeEQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBRUYsZUFBZTtBQUNTLHNDQUEwQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ILGVBQWU7QUFDUyxxQ0FBeUIsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckcsZUFBZTtBQUNTLHNDQUEwQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RILGVBQWU7QUFDUyxxQ0FBeUIsR0FBYTtJQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM5QyxJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixlQUFlO0FBQ1MsbUJBQU8sR0FBYTtJQUN4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUMxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUMzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM3QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtDQUNqQyxDQUFDO0FBekVOLGtDQXdzQkMifQ==