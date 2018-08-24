/**
 * Tests for SvgRenderer.
 */
import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { LinearGradient } from "@tangle-frost/iota-core/dist/data/linearGradient";
import { RadialGradient } from "@tangle-frost/iota-core/dist/data/radialGradient";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { SvgRenderer } from "../../src/renderTypes/svgRenderer";

describe("SvgRenderer", () => {
    it("can be created", () => {
        const obj = new SvgRenderer();
        chai.should().exist(obj);
    });

    describe("renderRaw", () => {
        it("can render data solid", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({ foreground: Color.fromHex("#FF0000"), background: Color.fromHex("#00FF00") });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svg1.svg");

            chai.expect(svg).to.equal(expected.toString());
        });

        it("can render data linear no extra params", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({
                foregroundType: "linear",
                foregroundLinear: new LinearGradient(
                    [
                        { color: Color.fromHex("#FF0000"), offsetPercent: 30 },
                        { color: Color.fromHex("#0000FF"), offsetPercent: 100 }
                    ]),
                background: Color.fromHex("#00FF00")
            });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svglinear1.svg");

            chai.expect(svg).to.equal(expected.toString());
        });

        it("can render data linear", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({
                foregroundType: "linear",
                foregroundLinear: new LinearGradient(
                    [
                        { color: Color.fromHex("#FF0000"), offsetPercent: 30 },
                        { color: Color.fromHex("#0000FF"), offsetPercent: 100 }
                    ],
                    45),
                background: Color.fromHex("#00FF00")
            });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svglinear2.svg");

            chai.expect(svg).to.equal(expected.toString());
        });

        it("can render data radial no extra params", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({
                foregroundType: "radial",
                foregroundRadial: new RadialGradient(
                    [
                        { color: Color.fromHex("#FF0000"), offsetPercent: 30 },
                        { color: Color.fromHex("#0000FF"), offsetPercent: 100 }
                    ]),
                background: Color.fromHex("#00FF00")
            });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svgradial1.svg");

            chai.expect(svg).to.equal(expected.toString());
        });

        it("can render data radial", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({
                foregroundType: "radial",
                foregroundRadial: new RadialGradient(
                    [
                        { color: Color.fromHex("#FF0000"), offsetPercent: 30 },
                        { color: Color.fromHex("#0000FF"), offsetPercent: 100 }
                    ],
                    30,
                    70,
                    50),
                background: Color.fromHex("#00FF00")
            });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svgradial2.svg");

            chai.expect(svg).to.equal(expected.toString());
        });
    });
});
