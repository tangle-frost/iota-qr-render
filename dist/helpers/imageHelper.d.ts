/**
 * Class to help with manipulating image data.
 */
export declare class ImageHelper {
    /**
     * Convert the data to an image source.
     * @param mimeType The mime type of the data.
     * @param data The source data.
     * @returns The image source.
     */
    static dataToImageSource(mimeType: string, data: Uint8Array | string): string;
}
