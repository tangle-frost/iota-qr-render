import { BitmapType } from "./bitmapType";

/**
 * Options for Bitmap renderer.
 */
export class BitmapRendererOptions {
    /**
     * The bitmap type.
     */
    public bitmapType?: BitmapType;

    /**
     * The foreground colour.
     */
    public foregroundColour?: number;

    /**
     * The background colour.
     */
    public backgroundColour?: number;
}
