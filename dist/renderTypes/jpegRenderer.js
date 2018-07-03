Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
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
            throw new Error(`The marginSize must be a number > 0, it is ${marginSize}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianBlZ1JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQWdFO0FBQ2hFLGtGQUErRTtBQUMvRSxvRkFBaUY7QUFFakYsd0RBQXFEO0FBQ3JELHVEQUFvRDtBQUlwRDs7R0FFRztBQUNIO0lBSUk7OztPQUdHO0lBQ0gsWUFBWSxPQUE2QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFvQixFQUFFLFdBQW1CLENBQUMsRUFBRSxhQUFxQixFQUFFO1FBQ3RGLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMvRTtRQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxFQUFFLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVWLEtBQUssSUFBSSxDQUFDLEdB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