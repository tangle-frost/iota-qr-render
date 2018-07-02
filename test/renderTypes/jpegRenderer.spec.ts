/**
 * Tests for Txt.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { JpegRenderer } from "../../src/renderTypes/jpegRenderer";

describe("BitmapRenderer", () => {
    it("can be created", () => {
        const obj = new JpegRenderer();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data as jpeg", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new JpegRenderer();
            const array = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/jpeg1.jpg");

            chai.expect(array).to.deep.equal(expected);
        });
    });
});
