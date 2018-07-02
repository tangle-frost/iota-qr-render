import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import UPNG from "upng-js";
import { IQRRenderer } from "../models/IQRRenderer";
import { PngRendererOptions } from "./pngRendererOptions";

/**
 * Class to render qr data as png.
 */
export class PngRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: PngRendererOptions;

    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: PngRendererOptions) {
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

        return new Uint8Array(UPNG.encode([data.buffer], dimensions, dimensions, 0));
    }
}
