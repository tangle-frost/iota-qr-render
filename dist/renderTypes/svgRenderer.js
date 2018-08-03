Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
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
        if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
            throw new Error("The options foreground is not a Color object");
        }
        if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
            throw new Error("The options background is not a Color object");
        }
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
            throw new Error(`The marginSize must be a number >= 0, it is ${marginSize}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1FQUFnRTtBQUNoRSxrRkFBK0U7QUFDL0Usb0ZBQWlGO0FBQ2pGLG9GQUFpRjtBQUtqRjs7R0FFRztBQUNILE1BQWEsV0FBVztJQUlwQjs7O09BR0c7SUFDSCxZQUFZLE9BQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1FBRTVELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxhQUFLLENBQUMsRUFBRTtZQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDbkU7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsYUFBSyxDQUFDLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBb0IsRUFBRSxXQUFtQixDQUFDLEVBQUUsYUFBcUIsRUFBRTtRQUN0RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLEdBQUcsZUFBZSxRQUFRLENBQUMsVUFBVSxhQUFhLFFBQVEsQ0FBQyxVQUFVLHlDQUF5QyxDQUFDO1FBQ3ZILElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3pCLElBQUksSUFBSSxRQUFRLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBb0IsRUFBRSxXQUFtQixDQUFDLEVBQUUsYUFBcUIsRUFBRTtRQUN2RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFckUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMseUNBQXlDO1FBQ3pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUVqQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxlQUFlO0lBQ1AsY0FBYyxDQUFDLFFBQXFCLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQjtRQUM5RSxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDaEY7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksR0FBRyw0QkFBNEIsVUFBVSxhQUFhLFVBQVUsV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO1FBQzFILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxJQUFJLFlBQVksQ0FBQyxHQUFHLFFBQVEsR0FBRyxVQUFVLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxVQUFVLFlBQVksUUFBUSxhQUFhLFFBQVEsV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2lCQUM1SzthQUNKO1NBQ0o7UUFDRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFuRkQsa0NBbUZDIn0=