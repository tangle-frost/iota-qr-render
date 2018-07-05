Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initialize the factories.
 */
const qrRendererFactory_1 = require("./factories/qrRendererFactory");
const canvasRenderer_1 = require("./renderTypes/canvasRenderer");
const jpegRenderer_1 = require("./renderTypes/jpegRenderer");
const pngRenderer_1 = require("./renderTypes/pngRenderer");
const svgRenderer_1 = require("./renderTypes/svgRenderer");
const textRenderer_1 = require("./renderTypes/textRenderer");
function initRender() {
    qrRendererFactory_1.QRRendererFactory.instance().register("canvas", (opts) => new canvasRenderer_1.CanvasRenderer(opts));
    qrRendererFactory_1.QRRendererFactory.instance().register("txt", (opts) => new textRenderer_1.TextRenderer(opts));
    qrRendererFactory_1.QRRendererFactory.instance().register("svg", (opts) => new svgRenderer_1.SvgRenderer(opts));
    qrRendererFactory_1.QRRendererFactory.instance().register("jpg", (opts) => new jpegRenderer_1.JpegRenderer(opts));
    qrRendererFactory_1.QRRendererFactory.instance().register("png", (opts) => new pngRenderer_1.PngRenderer(opts));
}
exports.initRender = initRender;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0UmVuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHFFQUFrRTtBQUNsRSxpRUFBOEQ7QUFDOUQsNkRBQTBEO0FBQzFELDJEQUF3RDtBQUN4RCwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBRTFEO0lBQ0kscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEYscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUUscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQU5ELGdDQU1DIn0=