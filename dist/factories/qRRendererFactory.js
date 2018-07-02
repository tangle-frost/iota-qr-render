Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("@tangle-frost/iota-core/dist/factories/factoryBase");
/**
 * Factory to generate QR renderers.
 */
class QRRendererFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!QRRendererFactory._instance) {
            QRRendererFactory._instance = new QRRendererFactory();
        }
        return QRRendererFactory._instance;
    }
    /* @internal */
    getInstance() {
        return QRRendererFactory.instance();
    }
}
exports.QRRendererFactory = QRRendererFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJSZW5kZXJlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL3FyUmVuZGVyZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBaUY7QUFHakY7O0dBRUc7QUFDSCx1QkFBK0IsU0FBUSx5QkFBd0I7SUFJM0Q7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQzlCLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7U0FDekQ7UUFDRCxPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZTtJQUNMLFdBQVc7UUFDakIsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUEzQkQsOENBMkJDIn0=