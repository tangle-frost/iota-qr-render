import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import Jimp from "jimp";
import { BitmapType } from "./bitmapType";

/**
 * Class to render qr data as bitmap.
 */
export class Bitmap {
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param bitmapType The mime type to render the data.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param foregroundColour The foreground colour.
     * @param backgroundColour The background colour.
     * @returns The bitmap content.
     */
    public static async render(
        cellData: QRCellData,
        bitmapType: BitmapType,
        cellSize: number = 5,
        marginSize: number = 0,
        foregroundColour: number = 0x000000FF,
        backgroundColour: number = 0xFFFFFFFF): Promise<Buffer> {

        if (!cellData) {
            throw new Error("You must provide the cellData");
        }

        if (cellSize <= 0) {
            throw new Error(`The cellSize must be > 0, it is ${cellSize}`);
        }

        if (marginSize < 0) {
            throw new Error(`The marginSize must be >= 0, it is ${marginSize}`);
        }

        const dimensions = cellData.length * cellSize + (2 * marginSize);

        const jimp = await Bitmap.createImage(dimensions, backgroundColour);

        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    for (let w = 0; w < cellSize; w++) {
                        for (let h = 0; h < cellSize; h++) {
                            jimp.setPixelColor(foregroundColour, (x * cellSize) + w + marginSize, (y * cellSize) + h + marginSize);
                        }
                    }
                }
            }
        }
        return Bitmap.getBuffer(jimp, `image/${bitmapType}`);
    }

    private static async createImage(dimensions: number, background: number): Promise<Jimp> {
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

    private static async getBuffer(jimp: Jimp, mimeType: string): Promise<Buffer> {
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
