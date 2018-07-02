/**
 * Initialize the factories.
 */
import { QRRendererFactory } from "./factories/qrRendererFactory";
import { CanvasRenderer } from "./renderTypes/canvasRenderer";
import { JpegRenderer } from "./renderTypes/jpegRenderer";
import { PngRenderer } from "./renderTypes/pngRenderer";
import { SvgRenderer } from "./renderTypes/svgRenderer";
import { TextRenderer } from "./renderTypes/textRenderer";

export function initRender(): void {
    QRRendererFactory.instance().register("canvas", (opts) => new CanvasRenderer(opts));
    QRRendererFactory.instance().register("text", (opts) => new TextRenderer(opts));
    QRRendererFactory.instance().register("svg", (opts) => new SvgRenderer(opts));
    QRRendererFactory.instance().register("jpeg", (opts) => new JpegRenderer(opts));
    QRRendererFactory.instance().register("png", (opts) => new PngRenderer(opts));
}
