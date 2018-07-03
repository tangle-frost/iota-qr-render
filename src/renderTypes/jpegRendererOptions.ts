import { Color } from "@tangle-frost/iota-core/dist/data/color";

/**
 * Options for Jpeg renderer.
 */
export class JpegRendererOptions {
    /**
     * The foreground colour.
     */
    public foreground?: Color;

    /**
     * The background colour.
     */
    public background?: Color;
    /**
     * The style to apply for the html element.
     */
    public elementStyle?: string;
}
