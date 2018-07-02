import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { CanvasRendererOptions } from "./canvasRendererOptions";
/**
 * Class to render qr data as canvas.
 */
export declare class CanvasRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: CanvasRendererOptions);
    /**
     * Render the QR code data as an canvas.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    render(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<HTMLCanvasElement>;
}
