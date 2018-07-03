/**
 * PNG Encoder.
 * Based on https://github.com/photopea/UPNG.js
 */
export declare class PngEncoder {
    /**
     * Encode the image frames to png.
     * @param bufs The frame buffers to encode.
     * @param w The image width.
     * @param h The image height.
     * @returns The data for the image.
     */
    encode(bufs: ArrayBuffer[], w: number, h: number): Uint8Array;
}
