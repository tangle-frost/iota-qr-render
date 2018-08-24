import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { LinearGradient } from "@tangle-frost/iota-core/dist/data/linearGradient";
import { RadialGradient } from "@tangle-frost/iota-core/dist/data/radialGradient";

/**
 * Options for Svg renderer.
 */
export class SvgRendererOptions {
    /**
     * The foreground fill style.
     */
    public foregroundType?: "solid" | "linear" | "radial";
    /**
     * The foreground colour.
     */
    public foreground?: Color;
    /**
     * The foreground linear gradient.
     */
    public foregroundLinear?: LinearGradient;
    /**
     * The foreground radial gradient.
     */
    public foregroundRadial?: RadialGradient;
    /**
     * The background colour.
     */
    public background?: Color;
    /**
     * The css class to apply for the html element.
     */
    public cssClass?: string;

}
