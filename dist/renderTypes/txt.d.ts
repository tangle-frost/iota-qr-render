import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
/**
 * Class to render qr data as txt.
 */
export declare class Txt {
    /**
     * Render the QR code data as txt.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param onChar The character to use for on pixels.
     * @param offChar The character to use for off pixels.
     * @returns The txt content.
     */
    static render(cellData: QRCellData, cellSize?: number, marginSize?: number, onChar?: string, offChar?: string): Promise<string>;
}
