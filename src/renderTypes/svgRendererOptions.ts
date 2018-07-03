import { Color } from "@tangle-frost/iota-core/dist/data/color";

/**
 * Options for Svg renderer.
 */
export class SvgRendererOptions {
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
