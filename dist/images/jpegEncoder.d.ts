/**
 * JPEG Encoder.
 * Based on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
 */
export declare class JpegEncoder {
    /**
     * Create a new instance of JpegEncoder.
     */
    constructor();
    /**
     * Encode the image with the given quality.
     * @param width The width of the image to encode.
     * @param height The height of the image to encode.
     * @param imageData The data for the image.
     * @param quality The quality to encode the image at.
     * @returns The data for the encoded image.
     */
    encode(width: number, height: number, imageData: Uint8Array, quality: number): Uint8Array;
}
