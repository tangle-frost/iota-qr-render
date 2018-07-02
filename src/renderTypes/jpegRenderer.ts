import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { JPEGEncoder } from "../images/jpegEncoder";
import { IQRRenderer } from "../models/IQRRenderer";
import { JpegRendererOptions } from "./jpegRendererOptions";

/**
 * Class to render qr data as bitmap.
 */
export class JpegRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: JpegRendererOptions;

    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: JpegRendererOptions) {
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
    public async render(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<Uint8Array> {
        if (!ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }

        if (!NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }

        if (!NumberHelper.isNumber(marginSize) || marginSize < 0) {
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
                for (let c = 0; c < cellSize; c ++) {
                    row[r++] = (colour >> 16)  & 0xFF;
                    row[r++] = (colour >> 8) & 0xFF;
                    row[r++] = colour & 0xFF;
                    row[r++] = 0xFF;
                }
            }

            for (let i = 0; i < marginSize; i ++) {
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

        return new JPEGEncoder().encode(dimensions, dimensions, data, 80);
    }
}
