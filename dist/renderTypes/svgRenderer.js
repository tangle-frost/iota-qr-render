Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@tangle-frost/iota-core/dist/data/color");
const linearGradient_1 = require("@tangle-frost/iota-core/dist/data/linearGradient");
const radialGradient_1 = require("@tangle-frost/iota-core/dist/data/radialGradient");
const arrayHelper_1 = require("@tangle-frost/iota-core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
/**
 * Class to render qr data as svg.
 */
class SvgRenderer {
    /**
     * Create a new instance of Svg renderer.
     * @param options The options for the renderer.
     */
    constructor(options) {
        this._options = options || {};
        this._options.foregroundType = this._options.foregroundType || "solid";
        if (this._options.foregroundType !== "solid" &&
            this._options.foregroundType !== "linear" &&
            this._options.foregroundType !== "radial") {
            throw new Error("The options foregroundType must be solid, linear or radial");
        }
        if (this._options.foregroundType === "solid") {
            this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
            if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
                throw new Error("The options foreground is not a Color object");
            }
        }
        else if (this._options.foregroundType === "linear") {
            if (!objectHelper_1.ObjectHelper.isType(this._options.foregroundLinear, linearGradient_1.LinearGradient)) {
                throw new Error("The options foregroundLinear must be a LinearGradient object");
            }
        }
        else if (this._options.foregroundType === "radial") {
            if (!objectHelper_1.ObjectHelper.isType(this._options.foregroundRadial, radialGradient_1.RadialGradient)) {
                throw new Error("The options foregroundRadial must be a RadialGradient object");
            }
        }
        this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
        this._options.cssClass = this._options.cssClass || "qr-svg";
        if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
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
    static renderWrapper(width, height, content, includeXmlDeclaration) {
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
    async renderRaw(cellData, cellSize = 5, marginSize = 10) {
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
    async renderHtml(cellData, cellSize = 5, marginSize = 10) {
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
    renderContent(cellData, cellSize, marginSize) {
        if (!arrayHelper_1.ArrayHelper.isArray(cellData)) {
            throw new Error("The cellData must be of type QRCellData");
        }
        if (!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0) {
            throw new Error(`The cellSize must be a number > 0, it is ${cellSize}`);
        }
        if (!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0) {
            throw new Error(`The marginSize must be a number >= 0, it is ${marginSize}`);
        }
        const dimensions = cellData.length * cellSize + (2 * marginSize);
        let content = ``;
        let fillRef = ``;
        if (this._options.foregroundType === "linear" || this._options.foregroundType === "radial") {
            fillRef = "url(#qrfill)";
            content += `<defs>`;
            if (this._options.foregroundType === "linear") {
                content += this.renderLinearGradient(this._options.foregroundLinear, "qrfill");
            }
            else {
                content += this.renderRadialGradient(this._options.foregroundRadial, "qrfill");
            }
            content += `</defs>`;
        }
        else {
            fillRef = this._options.foreground.hex();
        }
        content += `<rect x="0" y="0" width="${dimensions}" height="${dimensions}" fill="${this._options.background.hex()}" />`;
        let pathContent = "";
        for (let x = 0; x < cellData.length; x++) {
            for (let y = 0; y < cellData[x].length; y++) {
                if (cellData[x][y]) {
                    pathContent += `M${x * cellSize + marginSize},${y * cellSize + marginSize} h${cellSize} v${cellSize} h-${cellSize}z `;
                }
            }
        }
        content += `<path fill="${fillRef}" d="${pathContent.trim()}"/>`;
        return { width: dimensions, height: dimensions, content: content };
    }
    renderGradientStops(stops) {
        let render = ``;
        for (let i = 0; i < stops.length; i++) {
            render += `<stop offset="${stops[i].offsetPercent}%" stop-color="${stops[i].color.hex()}"/>`;
        }
        return render;
    }
    renderLinearGradient(gradient, id) {
        let render = `<linearGradient id="${id}"`;
        if (gradient.angle() !== undefined) {
            render += ` gradientTransform="rotate(${gradient.angle()})"`;
        }
        render += `>${this.renderGradientStops(gradient.stops())}</linearGradient>`;
        return render;
    }
    renderRadialGradient(gradient, id) {
        let render = `<radialGradient id="${id}"`;
        if (gradient.offsetXPercent() !== undefined) {
            render += ` cx="${gradient.offsetXPercent()}%"`;
        }
        if (gradient.offsetYPercent() !== undefined) {
            render += ` cy="${gradient.offsetYPercent()}%"`;
        }
        if (gradient.radiusPercent() !== undefined) {
            render += ` r="${gradient.radiusPercent()}%"`;
        }
        render += `>${this.renderGradientStops(gradient.stops())}</radialGradient>`;
        return render;
    }
}
exports.SvgRenderer = SvgRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1FQUFnRTtBQUNoRSxxRkFBa0Y7QUFDbEYscUZBQWtGO0FBQ2xGLGtGQUErRTtBQUMvRSxvRkFBaUY7QUFDakYsb0ZBQWlGO0FBS2pGOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBSXBCOzs7T0FHRztJQUNILFlBQVksT0FBNEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQztRQUV2RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxLQUFLLE9BQU87WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEtBQUssUUFBUTtZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsS0FBSyxRQUFRLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1NBQ2pGO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsS0FBSyxPQUFPLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsYUFBSyxDQUFDLEVBQUU7Z0JBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQzthQUNuRTtTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsS0FBSyxRQUFRLEVB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