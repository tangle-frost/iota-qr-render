Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
/**
 * Class to render qr data as svg.
 */
class SvgRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options) {
        this._options = options || {};
        this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
        this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
        this._options.cssClass = this._options.cssClass || "qr-svg";
    }
    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    async renderRaw(cellData, cellSize = 5, marginSize = 10) {
        const rendered = this.internalRender(cellData, cellSize, marginSize);
        let text = `<svg width="${rendered.dimensions}" height="${rendered.dimensions}" xmlns="http://www.w3.org/2000/svg">\n`;
        text += rendered.content;
        text += `</svg>`;
        return text;
    }
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    async renderHtml(cellData, cellSize = 5, marginSize = 10) {
        const rendered = this.internalRender(cellData, cellSize, marginSize);
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", rendered.dimensions.toString());
        svg.setAttribute("height", rendered.dimensions.toString());
        svg.classList.add(this._options.cssClass);
        // tslint:disable-next-line:no-inner-html
        svg.innerHTML = rendered.content;
        return svg;
    }
    /* @internal */
    internalRender(cellData, cellSize, marginSize) {
        if (!arrayHelper_1.ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }
        if (!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }
        if (!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number > 0, it is ${marginSize}`);
        }
        const dimensions = cellData.length * cellSize + (2 * marginSize);
        let text = `<rect x="0" y="0" width="${dimensions}" height="${dimensions}" fill="${this._options.background.hex()}" />\n`;
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    text += `<rect x="${x * cellSize + marginSize}" y="${y * cellSize + marginSize}" width="${cellSize}" height="${cellSize}" fill="${this._options.foreground.hex()}" />\n`;
                }
            }
        }
        return { dimensions, content: text };
    }
}
exports.SvgRenderer = SvgRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1FQUFnRTtBQUNoRSxrRkFBK0U7QUFDL0Usb0ZBQWlGO0FBS2pGOztHQUVHO0FBQ0g7SUFJSTs7O09BR0c7SUFDSCxZQUFZLE9BQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQW9CLEVBQUUsV0FBbUIsQ0FBQyxFQUFFLGFBQXFCLEVBQUU7UUFDdEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksSUFBSSxHQUFHLGVBQWUsUUFBUSxDQUFDLFVBQVUsYUFBYSxRQUFRLENBQUMsVUFBVSx5Q0FBeUMsQ0FBQztRQUN2SCxJQUFJLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLElBQUksUUFBUSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsVUFB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