import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { SvgRendererOptions } from "./svgRendererOptions";
/**
 * Class to render qr data as svg.
 */
export declare class SvgRenderer implements IQRRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: SvgRendererOptions);
    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    renderRaw(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<string>;
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    renderHtml(cellData: QRCellData, cellSize?: number, marginSize?: number): Promise<SVGSVGElement>;
}
