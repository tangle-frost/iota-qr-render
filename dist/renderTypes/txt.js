Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class to render qr data as txt.
 */
class Txt {
    /**
     * Render the QR code data as txt.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param onChar The character to use for on pixels.
     * @param offChar The character to use for off pixels.
     * @returns The txt content.
     */
    static async render(cellData, cellSize = 1, marginSize = 1, onChar = "██", offChar = "  ") {
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
                }
                else {
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
exports.Txt = Txt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL3R4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUNJOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLFFBQW9CLEVBQ3BCLFdBQW1CLENBQUMsRUFDcEIsYUFBcUIsQ0FBQyxFQUN0QixTQUFpQixJQUFJLEVBQ3JCLFVBQWtCLElBQUk7UUFFdEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQixJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0gsSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0o7WUFDRCxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksTUFBTSxDQUFDO1lBRWYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLElBQUksQ0FBQzthQUNoQjtTQUNKO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQTlERCxrQkE4REMifQ==