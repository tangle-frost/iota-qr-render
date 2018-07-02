/// <reference types="@types/node" />
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { BitmapRendererOptions } from "./bitmapRendererOptions";
/**
 * Class to render qr data as bitmap.
 */
export declare class BitmapRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: BitmapRendererOptions);
    /**
     * Render the QR code data as a bitmap.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The bitmap content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Buffer>;
}
