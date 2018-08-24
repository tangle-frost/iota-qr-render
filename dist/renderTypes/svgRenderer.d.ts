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
     * Wrap svg content with outer xml.
     * @param width The width of the svg.
     * @param height The height of the svg.
     * @param content The inner content of the svg.
     * @param includeXmlDeclaration Include an xml declaration at the start of the content
     * @returns The SVG content.
     */
    static renderWrapper(width: number, height: number, content: string, includeXmlDeclaration: boolean): string;
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
    /**
     * Render the internal content of the svg.
     * @param cellData The cell data to render.
     * @param cellSize The size of the cell.
     * @param marginSize The size of the margin.
     * @returns The dimension and content of the svg.
     */
    renderContent(cellData: boolean[][], cellSize: number, marginSize: number): {
        width: number;
        height: number;
        content: string;
    };
    private renderGradientStops;
    private renderLinearGradient;
    private renderRadialGradient;
}
