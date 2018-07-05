import { FactoryBase } from "@tangle-frost/iota-core/dist/factories/factoryBase";
import { IQRRenderer } from "../models/IQRRenderer";
/**
 * Factory to generate QR renderers.
 */
export declare class QRRendererFactory extends FactoryBase<IQRRenderer> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IQRRenderer>;
}
