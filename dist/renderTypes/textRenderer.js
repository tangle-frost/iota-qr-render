Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
/**
 * Class to render qr data as t3xt.
 */
class TextRenderer {
    /**
     * Create a new instance of Text renderer.
     * @param options The options for the renderer.
     */
    constructor(options) {
        this._options = options || {};
        this._options.onChar = this._options.onChar || "██";
        this._options.offChar = this._options.offChar || "  ";
        this._options.cssClass = this._options.cssClass || "qr-text";
    }
    /**
     * Render the QR code data as text.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The text content.
     */
    async renderRaw(cellData, cellSize = 1, marginSize = 2) {
        if (!arrayHelper_1.ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }
        if (!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }
        if (!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number > 0, it is ${marginSize}`);
        }
        let text = "";
        for (let m = 0; m < marginSize; m++) {
            text += `${this._options.offChar.repeat(cellSize * cellData.length)}\r\n`;
        }
        for (let x = 0; x < cellData.length; x++) {
            let line = this._options.offChar.repeat(marginSize);
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[y][x]) {
                    line += this._options.onChar.repeat(cellSize);
                }
                else {
                    line += this._options.offChar.repeat(cellSize);
                }
            }
            line += this._options.offChar.repeat(marginSize);
            line += "\r\n";
            for (let c = 0; c < cellSize; c++) {
                text += line;
            }
        }
        for (let m = 0; m < marginSize; m++) {
            text += `${this._options.offChar.repeat(cellSize * cellData.length)}\r\n`;
        }
        return text;
    }
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    async renderHtml(cellData, cellSize = 1, marginSize = 2) {
        const raw = await this.renderRaw(cellData, cellSize, marginSize);
        const div = document.createElement("div");
        div.classList.add(this._options.cssClass);
        // tslint:disable-next-line:no-inner-html
        div.innerHTML = raw.replace(/\r/g, "").replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
        return div;
    }
}
exports.TextRenderer = TextRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dFJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL3RleHRSZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQStFO0FBQy9FLG9GQUFpRjtBQUtqRjs7R0FFRztBQUNIO0lBSUk7OztPQUdHO0lBQ0gsWUFBWSxPQUE2QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBb0IsRUFBRSxXQUFtQixDQUFDLEVBQUUsYUFBcUIsQ0FBQztRQUNyRixJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLFVB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