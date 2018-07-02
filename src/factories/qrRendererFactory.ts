import { FactoryBase } from "@tangle-frost/iota-core/dist/factories/factoryBase";
import { IQRRenderer } from "../models/IQRRenderer";

/**
 * Factory to generate QR renderers.
 */
export class QRRendererFactory extends FactoryBase<IQRRenderer> {
    /** @internal */
    private static _instance: QRRendererFactory;

    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    private constructor() {
        super();
    }

    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    public static instance(): FactoryBase<IQRRenderer> {
        if (!QRRendererFactory._instance) {
            QRRendererFactory._instance = new QRRendererFactory();
        }
        return QRRendererFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<IQRRenderer> {
        return QRRendererFactory.instance();
    }
}
