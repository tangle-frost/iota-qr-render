/**
 * Tests for SvgRenderer.
 */
import { Color } from "@tangle-frost/iota-core/dist/data/color";
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
        it("can render data", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new SvgRenderer({ foreground: Color.fromHex("#FF0000"), background: Color.fromHex("#00FF00") });
            const svg = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svg1.svg");

            chai.expect(svg).to.equal(expected.toString());
        });
    });
});
