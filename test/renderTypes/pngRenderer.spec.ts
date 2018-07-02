/**
 * Tests for Txt.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { PngRenderer } from "../../src/renderTypes/pngRenderer";

describe("PngRenderer", () => {
    it("can be created", () => {
        const obj = new PngRenderer();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data as png", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new PngRenderer();
            const array = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/png1.png");

            chai.expect(array).to.deep.equal(expected);
        });
    });
});
