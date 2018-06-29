import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
/**
 * Class to render qr data as svg.
 */
export declare class Svg {
    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param foregroundColour The foreground colour.
     * @param backgroundColour The background colour.
     * @returns The SVG content.
     */
    static render(cellData: QRCellData, cellSize?: number, marginSize?: number, foregroundColour?: string, backgroundColour?: string): Promise<string>;
}
