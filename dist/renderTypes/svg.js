Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class to render qr data as svg.
 */
class Svg {
    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @param foregroundColour The foreground colour.
     * @param backgroundColour The background colour.
     * @returns The SVG content.
     */
    static async render(cellData, cellSize = 5, marginSize = 0, foregroundColour = "black", backgroundColour = "white") {
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
exports.Svg = Svg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlbmRlclR5cGVzL3N2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUNJOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLFFBQW9CLEVBQ3BCLFdBQW1CLENBQUMsRUFDcEIsYUFBcUIsQ0FBQyxFQUN0QixtQkFBMkIsT0FBTyxFQUNsQyxtQkFBMkIsT0FBTztRQUVsQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUVqRSxJQUFJLElBQUksR0FBRyxlQUFlLFVBQVUsYUFBYSxVQUFVLHlDQUF5QyxDQUFDO1FBQ3JHLElBQUksSUFBSSw0QkFBNEIsVUFBVSxhQUFhLFVBQVUsV0FBVyxnQkFBZ0IsUUFBUSxDQUFDO1FBQ3pHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxJQUFJLFlBQVksQ0FBQyxHQUFHLFFBQVEsR0FBRyxVQUFVLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxVQUFVLFlBQVksUUFBUSxhQUFhLFFBQVEsV0FBVyxnQkFBZ0IsUUFBUSxDQUFDO2lCQUM5SjthQUNKO1NBQ0o7UUFDRCxJQUFJLElBQUksUUFBUSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQW5ERCxrQkFtREMifQ==