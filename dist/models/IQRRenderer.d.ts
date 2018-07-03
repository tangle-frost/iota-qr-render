import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
/**
 * Interface which defines a QR Code Renderer.
 * @interface
 */
export interface IQRRenderer {
    /**
     * Render the cell data with the given dimensions.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The rendered object.
     */
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Uint8Array | string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<Element>;
}
