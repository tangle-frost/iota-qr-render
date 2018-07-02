import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import Jimp from "jimp";
import { IQRRenderer } from "../models/IQRRenderer";
import { BitmapRendererOptions } from "./bitmapRendererOptions";

/**
 * Class to render qr data as bitmap.
 */
export class BitmapRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: BitmapRendererOptions;

    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: BitmapRendererOptions) {
        this._options = options || {};
        this._options.bitmapType = this._options.bitmapType || "jpeg";
        this._options.foregroundColour = this._options.foregroundColour || 0x000000FF;
        this._options.backgroundColour = this._options.backgroundColour || 0xFFFFFFFF;
    }

    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    public async render(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<Buffer> {
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

        const jimp = await this.createImage(dimensions, this._options.backgroundColour);

        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    for (let w = 0; w < cellSize; w++) {
                        for (let h = 0; h < cellSize; h++) {
                            jimp.setPixelColor(this._options.foregroundColour, (x * cellSize) + w + marginSize, (y * cellSize) + h + marginSize);
                        }
                    }
                }
            }
        }
        return this.getBuffer(jimp, `image/${this._options.bitmapType}`);
    }

    /* @internal */
    private async createImage(dimensions: number, background: number): Promise<Jimp> {
        return new Promise<Jimp>((resolve, reject) => {
            // tslint:disable-next-line:no-unused-expression
            new Jimp(dimensions, dimensions, background, (err, image) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(image);
                }
            });
        });
    }

    /* @internal */
    private async getBuffer(jimp: Jimp, mimeType: string): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject) => {
            jimp.getBuffer(mimeType, (err, buffer) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(buffer);
                }
            });
        });
    }
}
