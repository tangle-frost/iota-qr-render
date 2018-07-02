import { ArrayHelper } from "@tangle-frost/iota-core/dist/helpers/arrayHelper";
import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";
import { IQRRenderer } from "../models/IQRRenderer";
import { CanvasRendererOptions } from "./canvasRendererOptions";

/**
 * Class to render qr data as canvas.
 */
export class CanvasRenderer implements IQRRenderer {
    /* @internal */
    private readonly _options: CanvasRendererOptions;

    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options?: CanvasRendererOptions) {
        this._options = options || {};
        this._options.foregroundColour = this._options.foregroundColour || "black";
        this._options.backgroundColour = this._options.backgroundColour || "white";
    }

    /**
     * Render the QR code data as an canvas.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    public async render(cellData: QRCellData, cellSize: number = 5, marginSize: number = 10): Promise<HTMLCanvasElement> {
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

        const canvas = document.createElement("canvas");
        canvas.width = dimensions;
        canvas.height = dimensions;

        const context = canvas.getContext("2d");

        context.fillStyle = this._options.backgroundColour;
        context.fillRect(0, 0, dimensions, dimensions);
        context.fillStyle = this._options.foregroundColour;
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    context.fillRect(x * cellSize + marginSize, y * cellSize + marginSize, cellSize, cellSize);
                }
            }
        }
        return canvas;
    }
}
