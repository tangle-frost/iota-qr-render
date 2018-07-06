import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { ImageHelper } from "../helpers/imageHelper";
import { PngEncoder } from "../images/pngEncoder";
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
        this._options.foreground = this._options.foreground || Color.fromHex("#000000");
        this._options.background = this._options.background || Color.fromHex("#FFFFFF");
        this._options.cssClass = this._options.cssClass || "qr-png";

        if (!ObjectHelper.isType(this._options.foreground, Color)) {
            throw new Error("The options foreground is not a Color object");
        }

        if (!ObjectHelper.isType(this._options.background, Color)) {
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
    public async renderRaw(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<Uint8Array> {
        if (!ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }

        if (!NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }

        if (!NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number >= 0, it is ${marginSize}`);
        }

        const dimensions = cellData.length * cellSize + (2 * marginSize);

        const data = new Uint8Array(dimensions * dimensions * 4);
        for (let i = 0; i < data.length; i += 4) {
            data[i] = this._options.background.red();
            data[i + 1] = this._options.background.green();
            data[i + 2] = this._options.background.blue();
            data[i + 3] = this._options.background.alpha();
        }

        let dc = marginSize * dimensions * 4;
        for (let x = 0; x < cellData.length; x++) {
            const row = new Uint8Array(dimensions * 4);
            let r = 0;

            for (let i = 0; i < marginSize; i++) {
                row[r++] = this._options.background.red();
                row[r++] = this._options.background.green();
                row[r++] = this._options.background.blue();
                row[r++] = this._options.background.alpha();
            }

            for (let y = 0; y < cellData[x].length; y++) {
                const colour = cellData[y][x] ? this._options.foreground : this._options.background;
                for (let c = 0; c < cellSize; c ++) {
                    row[r++] = colour.red();
                    row[r++] = colour.green();
                    row[r++] = colour.blue();
                    row[r++] = colour.alpha();
                }
            }

            for (let i = 0; i < marginSize; i ++) {
                row[r++] = this._options.background.red();
                row[r++] = this._options.background.green();
                row[r++] = this._options.background.blue();
                row[r++] = this._options.background.alpha();
            }

            for (let c = 0; c < cellSize; c++) {
                data.set(row, dc);
                dc += row.length;
            }
        }

        return new PngEncoder().encode([data.buffer], dimensions, dimensions);
    }

    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    public async renderHtml(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<HTMLImageElement> {
        const raw = await this.renderRaw(cellData, cellSize, marginSize);

        const img = document.createElement("img");
        img.classList.add(this._options.cssClass);
        img.src = ImageHelper.dataToImageSource("image/png", raw);

        return img;
    }
}
