import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";

/**
 * Class to render qr data as svg.
 */
export class Svg {
    /**
     * Render the QR code data as an SVG.
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
        backgroundColour: string = "white"): Promise<string> {

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

        let text = `<svg width="${dimensions}" height="${dimensions}" xmlns="http://www.w3.org/2000/svg">\n`;
        text += `<rect x="0" y="0" width="${dimensions}" height="${dimensions}" fill="${backgroundColour}" />\n`;
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    text += `<rect x="${x * cellSize + marginSize}" y="${y * cellSize + marginSize}" width="${cellSize}" height="${cellSize}" fill="${foregroundColour}" />\n`;
                }
            }
        }
        text += "</svg>";
        return text;
    }
}
