import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { LinearGradient } from "@tangle-frost/iota-core/dist/data/linearGradient";
import { RadialGradient } from "@tangle-frost/iota-core/dist/data/radialGradient";
/**
 * Options for Svg renderer.
 */
export declare class SvgRendererOptions {
    /**
     * The foreground fill style.
     */
    foregroundType?: "solid" | "linear" | "radial";
    /**
     * The foreground colour.
     */
    foreground?: Color;
    /**
     * The foreground linear gradient.
     */
    foregroundLinear?: LinearGradient;
    /**
     * The foreground radial gradient.
     */
    foregroundRadial?: RadialGradient;
    /**
     * The background colour.
     */
    background?: Color;
    /**
     * The css class to apply for the html element.
     */
    cssClass?: string;
}
