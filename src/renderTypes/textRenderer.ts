import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { TextRendererOptions } from "./textRendererOptions";

/**
 * Class to render qr data as t3xt.
 */
export class TextRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: TextRendererOptions;

    /**
     * Create a new instance of Text renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: TextRendererOptions) {
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
    public async renderRaw(cellData: QRCellData, cellSize: number = 1, marginSize: number = 2): Promise<string> {
        if (!ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }

        if (!NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }

        if (!NumberHelper.isNumber(marginSize) || marginSize < 0) {
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
                } else {
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
    public async renderHtml(cellData: QRCellData, cellSize: number = 1, marginSize: number = 2): Promise<Element> {
        const raw = await this.renderRaw(cellData, cellSize, marginSize);

        const div = document.createElement("div");
        div.classList.add(this._options.cssClass);
        // tslint:disable-next-line:no-inner-html
        div.innerHTML = raw.replace(/\r/g, "").replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
        return div;
    }
}
