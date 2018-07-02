/**
 * Tests for Txt.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { BitmapRenderer } from "../../src/renderTypes/bitmapRenderer";

describe("BitmapRenderer", () => {
    it("can be created", () => {
        const obj = new BitmapRenderer();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data as jpeg", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new BitmapRenderer({ bitmapType: "jpeg" });
            const buffer = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/jpeg1.jpg");

            chai.expect(buffer.toString()).to.equal(expected.toString());
        });

        it("can render data as bmp", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new BitmapRenderer({ bitmapType: "bmp" });
            const buffer = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/bmp1.bmp");

            chai.expect(buffer.toString()).to.equal(expected.toString());
        });

        it("can render data as png", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const obj = new BitmapRenderer({ bitmapType: "png" });
            const buffer = await obj.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/png1.png");

            chai.expect(buffer.toString()).to.equal(expected.toString());
        });
    });
});
