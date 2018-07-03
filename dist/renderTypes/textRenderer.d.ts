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
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLElement>;
}
