declare module "upng-js" {
    export function decode(buff: ArrayBuffer): PngData;

    export function encode(bufs: ArrayBuffer[], width: number, height: number, ps?: number, dels?: any[]): ArrayBuffer;

    export function toRGBA8(out: PngData): ArrayBuffer;

    export interface PngData {
        width: number;
        height: number;
        depth: number;
        ctype: any;
        frames: any;
        tabs: any;
        data: ArrayBuffer;
    }
}