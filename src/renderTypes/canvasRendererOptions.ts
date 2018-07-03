import { Color } from "@tangle-frost/iota-core/dist/data/color";

/**
 * Options for Canvas renderer.
 */
export class CanvasRendererOptions {
    /**
     * The foreground colour.
     */
    public foreground?: Color;
    /**
     * The background colour.
     */
    public background?: Color;
    /**
     * The css class to apply for the html element.
     */
    public cssClass?: string;
}
