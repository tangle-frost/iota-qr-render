Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
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
        this._options.foregroundColour = this._options.foregroundColour || 0x000000;
        this._options.backgroundColour = this._options.backgroundColour || 0xFFFFFF;
    }
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    async render(cellData, cellSize = 5, marginSize = 10) {
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
            data[i] = (this._options.backgroundColour >> 16) & 0xFF;
            data[i + 1] = (this._options.backgroundColour >> 8) & 0xFF;
            data[i + 2] = this._options.backgroundColour & 0xFF;
            data[i + 3] = 0xFF;
        }
        let dc = marginSize * dimensions * 4;
        for (let x = 0; x < cellData.length; x++) {
            const row = new Uint8Array(dimensions * 4);
            let r = 0;
            for (let i = 0; i < marginSize; i++) {
                row[r++] = (this._options.backgroundColour >> 16) & 0xFF;
                row[r++] = (this._options.backgroundColour >> 8) & 0xFF;
                row[r++] = this._options.backgroundColour & 0xFF;
                row[r++] = 0xFF;
            }
            for (let y = 0; y < cellData[x].length; y++) {
                const colour = cellData[y][x] ? this._options.foregroundColour : this._options.backgroundColour;
                for (let c = 0; c < cellSize; c++) {
                    row[r++] = (colour >> 16) & 0xFF;
                    row[r++] = (colour >> 8) & 0xFF;
                    row[r++] = colour & 0xFF;
                    row[r++] = 0xFF;
                }
            }
            for (let i = 0; i < marginSize; i++) {
                row[r++] = (this._options.backgroundColour >> 16) & 0xFF;
                row[r++] = (this._options.backgroundColour >> 8) & 0xFF;
                row[r++] = this._options.backgroundColour & 0xFF;
                row[r++] = 0xFF;
            }
            for (let c = 0; c < cellSize; c++) {
                data.set(row, dc);
                dc += row.length;
            }
        }
        return new jpegEncoder_1.JPEGEncoder().encode(dimensions, dimensions, data, 80);
    }
}
exports.JpegRenderer = JpegRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianBlZ1JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQStFO0FBQy9FLG9GQUFpRjtBQUVqRix1REFBb0Q7QUFJcEQ7O0dBRUc7QUFDSDtJQUlJOzs7T0FHRztJQUNILFlBQVksT0FBNkI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFJLFFBQVEsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFvQixFQUFFLFdBQW1CLENBQUMsRUFBRSxhQUFxQixFQUFFO1FBQ25GLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMvRTtRQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxN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