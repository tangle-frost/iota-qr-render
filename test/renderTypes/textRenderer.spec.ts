/**
 * Tests for TextRenderer.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { TextRenderer } from "../../src/renderTypes/textRenderer";

describe("TextRenderer", () => {
    it("can be created", () => {
        const obj = new TextRenderer();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new TextRenderer();
            const txt = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/txt1.txt");

            chai.expect(txt).to.equal(expected.toString());
        });
    });
});
