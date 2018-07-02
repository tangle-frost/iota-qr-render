import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { TextRendererOptions } from "./textRendererOptions";
/**
 * Class to render qr data as t3xt.
 */
export declare class TextRenderer implements IQRRenderer {
    /**
     * Create a new instance of Text renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: TextRendererOptions);
    /**
     * Render the QR code data as text.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The text content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
}
