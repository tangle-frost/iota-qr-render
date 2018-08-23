import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { SvgRendererOptions } from "./svgRendererOptions";

/**
 * Class to render qr data as svg.
 */
export class SvgRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: SvgRendererOptions;

    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: SvgRendererOptions) {
        this._options = options || {};
        this._options.foreground = this._options.foreground || Color.fromHex("#000000");
        this._options.background = this._options.background || Color.fromHex("#FFFFFF");
        this._options.cssClass = this._options.cssClass || "qr-svg";

        if (!ObjectHelper.isType(this._options.foreground, Color)) {
            throw new Error("The options foreground is not a Color object");
        }

        if (!ObjectHelper.isType(this._options.background, Color)) {
            throw new Error("The options background is not a Color object");
        }
    }

    /**
     * Wrap svg content with outer xml.
     * @param width The width of the svg.
     * @param height The height of the svg.
     * @param content The inner content of the svg.
     * @param includeXmlDeclaration Include an xml declaration at the start of the content
     * @returns The SVG content.
     */
    public static renderWrapper(width: number, height: number, content: string, includeXmlDeclaration: boolean): string {
        let text = ``;
        if (includeXmlDeclaration) {
            text += `<?xml version="1.0" standalone="no"?>`;
        }
        text += `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
        text += content;
        text += `</svg>`;
        return text;
    }

    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    public async renderRaw(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<string> {
        const rendered = this.renderContent(cellData, cellSize, marginSize);
        return SvgRenderer.renderWrapper(rendered.width, rendered.height, rendered.content, false);
    }

    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    public async renderHtml(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<SVGSVGElement> {
        const rendered = this.renderContent(cellData, cellSize, marginSize);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", `${rendered.width}px`);
        svg.setAttribute("height", `${rendered.height}px`);
        svg.classList.add(this._options.cssClass);
        // tslint:disable-next-line:no-inner-html
        svg.innerHTML = rendered.content;

        return svg;
    }

    /**
     * Render the internal content of the svg.
     * @param cellData The cell data to render.
     * @param cellSize The size of the cell.
     * @param marginSize The size of the margin.
     * @returns The dimension and content of the svg.
     */
    public renderContent(cellData: boolean[][], cellSize: number, marginSize: number): { width: number; height: number; content: string } {
        if (!ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }

        if (!NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }

        if (!NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number >= 0, it is ${marginSize}`);
        }

        const dimensions = cellData.length * cellSize + (2 * marginSize);
        let content = `<rect x="0" y="0" width="${dimensions}" height="${dimensions}" fill="${this._options.background.hex()}" />`;
        let pathContent = "";
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    pathContent += `M${x * cellSize + marginSize},${y * cellSize + marginSize} h${cellSize} v${cellSize} h-${cellSize}z `;
                }
            }
        }
        content += `<path fill="${this._options.foreground.hex()}" d="${pathContent.trim()}"/>`;
        return { width: dimensions, height: dimensions, content: content };
    }
}
