Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
const imageHelper_1 = require("../helpers/imageHelper");
const jpegEncoder_1 = require("../images/jpegEncoder");
/**
 * Class to render qr data as bitmap.
 */
class JpegRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options) {
        this._options = options || {};
        this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
        this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
        this._options.cssClass = this._options.cssClass || "qr-jpeg";
        if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
            throw new Error("The options foreground is not a Color object");
        }
        if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
            throw new Error("The options background is not a Color object");
        }
    }
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    async renderRaw(cellData, cellSize = 5, marginSize = 10) {
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
        const data = new Uint8Array(dimensions * dimensions * 4);
        for (let i = 0; i < data.length; i += 4) {
            data[i] = this._options.background.red();
            data[i + 1] = this._options.background.green();
            data[i + 2] = this._options.background.blue();
            data[i + 3] = 0xFF;
        }
        let dc = marginSize * dimensions * 4;
        for (let x = 0; x < cellData.length; x++) {
            const row = new Uint8Array(dimensions * 4);
            let r = 0;
            for (let i = 0; i < marginSize; i++) {
                row[r++] = this._options.background.red();
                row[r++] = this._options.background.green();
                row[r++] = this._options.background.blue();
                row[r++] = 0xFF;
            }
            for (let y = 0; y < cellData[x].length; y++) {
                const colour = cellData[y][x] ? this._options.foreground : this._options.background;
                for (let c = 0; c < cellSize; c++) {
                    row[r++] = colour.red();
                    row[r++] = colour.green();
                    row[r++] = colour.blue();
                    row[r++] = 0xFF;
                }
            }
            for (let i = 0; i < marginSize; i++) {
                row[r++] = this._options.background.red();
                row[r++] = this._options.background.green();
                row[r++] = this._options.background.blue();
                row[r++] = 0xFF;
            }
            for (let c = 0; c < cellSize; c++) {
                data.set(row, dc);
                dc += row.length;
            }
        }
        return new jpegEncoder_1.JpegEncoder().encode(dimensions, dimensions, data, 75);
    }
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    async renderHtml(cellData, cellSize = 5, marginSize = 10) {
        const raw = await this.renderRaw(cellData, cellSize, marginSize);
        const img = document.createElement("img");
        img.classList.add(this._options.cssClass);
        img.src = imageHelper_1.ImageHelper.dataToImageSource("image/jpeg", raw);
        return img;
    }
}
exports.JpegRenderer = JpegRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianBlZ1JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQWdFO0FBQ2hFLGtGQUErRTtBQUMvRSxvRkFBaUY7QUFDakYsb0ZBQWlGO0FBRWpGLHdEQUFxRDtBQUNyRCx1REFBb0Q7QUFJcEQ7O0dBRUc7QUFDSCxNQUFhLFlBQVk7SUFJckI7OztPQUdHO0lBQ0gsWUFBWSxPQUE2QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztRQUU3RCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsYUFBSyxDQUFDLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGFBQUssQ0FBQyxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUNuRTtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFB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