var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const upng_js_1 = __importDefault(require("upng-js"));
/**
 * Class to render qr data as png.
 */
class PngRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options) {
        this._options = options || {};
        this._options.foregroundColour = this._options.foregroundColour || 0xFF000000;
        this._options.backgroundColour = this._options.backgroundColour || 0xFFFFFFFF;
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
        const data = new Uint32Array(dimensions * dimensions);
        data.fill(this._options.backgroundColour);
        let dc = marginSize * dimensions;
        for (let x = 0; x < cellData.length; x++) {
            const row = new Uint32Array(dimensions);
            row.fill(this._options.backgroundColour);
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[y][x]) {
                    for (let c = 0; c < cellSize; c++) {
                        row[marginSize + (y * cellSize + c)] = this._options.foregroundColour;
                    }
                }
            }
            for (let c = 0; c < cellSize; c++) {
                data.set(row, dc);
                dc += row.length;
            }
        }
        return new Uint8Array(upng_js_1.default.encode([data.buffer], dimensions, dimensions, 0));
    }
}
exports.PngRenderer = PngRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtGQUErRTtBQUMvRSxvRkFBaUY7QUFFakYsc0RBQTJCO0FBSTNCOztHQUVHO0FBQ0g7SUFJSTs7O09BR0c7SUFDSCxZQUFZLE9BQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLElBQUksVUFBVSxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxVQUFVLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBb0IsRUFBRSxXQUFtQixDQUFDLEVBQUUsYUFBcUIsRUFBRTtRQUNuRixJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDL0U7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUVqRSxNQUFNLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsSUFBSSxFQUFFLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQy9CLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDekU7aUJBQ0o7YUFDSjtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtTQUNKO1FBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxpQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNKO0FBMURELGtDQTBEQyJ9