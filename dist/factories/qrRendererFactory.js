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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJSZW5kZXJlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL3FyUmVuZGVyZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBaUY7QUFHakY7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLHlCQUF3QjtJQUkzRDs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUN6RDtRQUNELE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQTNCRCw4Q0EyQkMifQ==