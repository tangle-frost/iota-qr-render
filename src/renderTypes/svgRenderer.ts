import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
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
    }

    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    public async renderRaw(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<string> {
        const rendered = this.internalRender(cellData, cellSize, marginSize);
        let text = `<svg width="${rendered.dimensions}" height="${rendered.dimensions}" xmlns="http://www.w3.org/2000/svg">\n`;
        text += rendered.content;
        text += `</svg>`;
        return text;
    }

    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */
    public async renderHtml(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<SVGSVGElement> {
        const rendered = this.internalRender(cellData, cellSize, marginSize);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", rendered.dimensions.toString());
        svg.setAttribute("height", rendered.dimensions.toString());
        svg.classList.add(this._options.cssClass);
        // tslint:disable-next-line:no-inner-html
        svg.innerHTML = rendered.content;

        return svg;
    }

    /* @internal */
    private internalRender(cellData: boolean[][], cellSize: number, marginSize: number): { dimensions: number; content: string } {
        if (!ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }

        if (!NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }

        if (!NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number > 0, it is ${marginSize}`);
        }

        const dimensions = cellData.length * cellSize + (2 * marginSize);
        let text = `<rect x="0" y="0" width="${dimensions}" height="${dimensions}" fill="${this._options.background.hex()}" />\n`;
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    text += `<rect x="${x * cellSize + marginSize}" y="${y * cellSize + marginSize}" width="${cellSize}" height="${cellSize}" fill="${this._options.foreground.hex()}" />\n`;
                }
            }
        }
        return { dimensions, content: text };
    }
}
