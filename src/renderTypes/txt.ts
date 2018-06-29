import { QRCellData } from "@tangle-frost/iota-qr-core/dist/models/qrCellData";

/**
 * Class to render qr data as txt.
 */
export class Txt {
    /**
     * Render the QR code data as txt.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param onChar The character to use for on pixels.
     * @param offChar The character to use for off pixels.
     * @returns The txt content.
     */
    public static async render(
        cellData: QRCellData,
        cellSize: number = 1,
        marginSize: number = 1,
        onChar: string = "██",
        offChar: string = "  "): Promise<string> {

        if (!cellData) {
            throw new Error("You must provide the cellData");
        }

        if (cellSize <= 0) {
            throw new Error(`The cellSize must be > 0, it is ${cellSize}`);
        }

        if (marginSize < 0) {
            throw new Error(`The marginSize must be >= 0, it is ${marginSize}`);
        }

        if (!onChar) {
            throw new Error(`The onChar can not be empty`);
        }

        if (!offChar) {
            throw new Error(`The offChar can not be empty`);
        }

        let text = "";
        for (let m = 0; m < marginSize; m++) {
            text += `${offChar.repeat(cellSize * cellData.length)}\r\n`;
        }
        for (let x = 0; x < cellData.length; x++) {
            let line = offChar.repeat(marginSize);
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[y][x]) {
                    line += onChar.repeat(cellSize);
                } else {
                    line += offChar.repeat(cellSize);
                }
            }
            line += offChar.repeat(marginSize);
            line += "\r\n";

            for (let c = 0; c < cellSize; c++) {
                text += line;
            }
        }
        for (let m = 0; m < marginSize; m++) {
            text += `${offChar.repeat(cellSize * cellData.length)}\r\n`;
        }
        return text;
    }
}
