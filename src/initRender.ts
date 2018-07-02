/**
 * Initialize the factories.
 */
import { QRRendererFactory } from "./factories/qRRendererFactory";
import { BitmapRenderer } from "./renderTypes/bitmapRenderer";
import { CanvasRenderer } from "./renderTypes/canvasRenderer";
import { SvgRenderer } from "./renderTypes/svgRenderer";
import { TextRenderer } from "./renderTypes/textRenderer";

export function initRender(): void {
    QRRendererFactory.instance().register("canvas", (opts) => new CanvasRenderer(opts));
    QRRendererFactory.instance().register("text", (opts) => new TextRenderer(opts));
    QRRendererFactory.instance().register("svg", (opts) => new SvgRenderer(opts));
    QRRendererFactory.instance().register("bitmap", (opts) => new BitmapRenderer(opts));
    QRRendererFactory.instance().register("jpeg", (opts) => new BitmapRenderer({...opts, bitmapRendererType: "jpeg"}));
    QRRendererFactory.instance().register("png", (opts) => new BitmapRenderer({...opts, bitmapRendererType: "png"}));
    QRRendererFactory.instance().register("bmp", (opts) => new BitmapRenderer({...opts, bitmapRendererType: "bmp"}));
}
