/**
 * Tests for Txt.
 */
import { Color } from "@tangle-frost/iota-core/dist/data/color";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { JpegRenderer } from "../../src/renderTypes/jpegRenderer";

describe("BitmapRenderer", () => {
    it("can be created", () => {
        const obj = new JpegRenderer();
        chai.should().exist(obj);
    });

    describe("renderRaw", () => {
        it("can render data as jpeg", async () => {
            const qr = new QR();
            qr.addText("This is a test");
            const data = qr.generate();

            const obj = new JpegRenderer({ foreground: Color.fromHex("#FF0000"), background: Color.fromHex("#00FF00") });
            const array = await obj.renderRaw(data);

            const expected = fs.readFileSync("./test/renderTypes/results/jpeg1.jpg");

            chai.expect(array).to.deep.equal(expected);
        });
    });
});
