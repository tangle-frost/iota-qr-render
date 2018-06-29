/// <reference types="@types/node" />
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { BitmapType } from "./bitmapType";
/**
 * Class to render qr data as bitmap.
 */
export declare class Bitmap {
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
    static render(cellData: QRCellData, bitmapType: BitmapType, cellSize?: number, marginSize?: number, foregroundColour?: number, backgroundColour?: number): Promise<Buffer>;
    private static createImage;
    private static getBuffer;
}
