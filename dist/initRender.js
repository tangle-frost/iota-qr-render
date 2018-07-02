Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initialize the factories.
 */
const qRRendererFactory_1 = require("./factories/qRRendererFactory");
const bitmapRenderer_1 = require("./renderTypes/bitmapRenderer");
const canvasRenderer_1 = require("./renderTypes/canvasRenderer");
const svgRenderer_1 = require("./renderTypes/svgRenderer");
const textRenderer_1 = require("./renderTypes/textRenderer");
function initRender() {
    qRRendererFactory_1.QRRendererFactory.instance().register("canvas", (opts) => new canvasRenderer_1.CanvasRenderer(opts));
    qRRendererFactory_1.QRRendererFactory.instance().register("text", (opts) => new textRenderer_1.TextRenderer(opts));
    qRRendererFactory_1.QRRendererFactory.instance().register("svg", (opts) => new svgRenderer_1.SvgRenderer(opts));
    qRRendererFactory_1.QRRendererFactory.instance().register("bitmap", (opts) => new bitmapRenderer_1.BitmapRenderer(opts));
    qRRendererFactory_1.QRRendererFactory.instance().register("jpeg", (opts) => new bitmapRenderer_1.BitmapRenderer(Object.assign({}, opts, { bitmapRendererType: "jpeg" })));
    qRRendererFactory_1.QRRendererFactory.instance().register("png", (opts) => new bitmapRenderer_1.BitmapRenderer(Object.assign({}, opts, { bitmapRendererType: "png" })));
    qRRendererFactory_1.QRRendererFactory.instance().register("bmp", (opts) => new bitmapRenderer_1.BitmapRenderer(Object.assign({}, opts, { bitmapRendererType: "bmp" })));
}
exports.initRender = initRender;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0UmVuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHFFQUFrRTtBQUNsRSxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBQzlELDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFFMUQ7SUFDSSxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRixxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLCtCQUFjLG1CQUFLLElBQUksSUFBRSxrQkFBa0IsRUFBRSxNQUFNLElBQUUsQ0FBQyxDQUFDO0lBQ25ILHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksK0JBQWMsbUJBQUssSUFBSSxJQUFFLGtCQUFrQixFQUFFLEtBQUssSUFBRSxDQUFDLENBQUM7SUFDakgscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSwrQkFBYyxtQkFBSyxJQUFJLElBQUUsa0JBQWtCLEVBQUUsS0FBSyxJQUFFLENBQUMsQ0FBQztBQUNySCxDQUFDO0FBUkQsZ0NBUUMifQ==