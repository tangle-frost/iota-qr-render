import { Color } from "@tangle-frost/iota-core/dist/data/color";

/**
 * Options for Png renderer.
 */
export class PngRendererOptions {
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
