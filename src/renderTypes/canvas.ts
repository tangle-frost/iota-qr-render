import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";

/**
 * Class to render qr data as canvas.
 */
export class Canvas {
    /**
     * Render the QR code data as an canvas.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param foregroundColour The foreground colour.
     * @param backgroundColour The background colour.
     * @returns The SVG content.
     */
    public static async render(
        cellData: QRCellData,
        cellSize: number = 5,
        marginSize: number = 0,
        foregroundColour: string = "black",
        backgroundColour: string = "white"): Promise<HTMLCanvasElement> {

        if (!cellData) {
            throw new Error("You must provide the cellData");
        }

        if (cellSize <= 0) {
            throw new Error(`The cellSize must be > 0, it is ${cellSize}`);
        }

        if (marginSize < 0) {
            throw new Error(`The marginSize must be >= 0, it is ${marginSize}`);
        }

        if (!foregroundColour) {
            throw new Error(`The foregroundColour can not be empty`);
        }

        if (!backgroundColour) {
            throw new Error(`The backgroundColour can not be empty`);
        }

        const dimensions = cellData.length * cellSize + (2 * marginSize);

        const canvas = document.createElement("canvas");
        canvas.width = dimensions;
        canvas.height = dimensions;

        const context = canvas.getContext("2d");

        context.fillStyle = backgroundColour;
        context.fillRect(0, 0, dimensions, dimensions);
        context.fillStyle = foregroundColour;
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
