export declare class PngEncoder {
    /**
     * Create a new instance of PngEncoder.
     */
    constructor();
    encode(bufs: ArrayBuffer[], w: number, h: number): Uint8Array;
    private compressPNG;
    private compress;
    private filterZero;
    private filterLine;
    private paeth;
    private writeASCII;
    private writeUint;
    private writeUshort;
    private copyTile;
    private crc;
    private crcUpdate;
    private crcTable;
    private quantize;
    private quantizeStats;
    private quantizeEstats;
    private quantizePlaneDst;
    private quantizeSplitPixels;
    private quantizeVecDot;
    private m4MultVec;
    private m4Dot;
    private m4Sml;
    private alphaMul;
}
