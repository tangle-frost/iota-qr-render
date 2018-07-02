[@tangle-frost/iota-qr-render](../README.md) > [QRRendererFactory](../classes/qrrendererfactory.md)

# Class: QRRendererFactory

Factory to generate QR renderers.

## Hierarchy

 `FactoryBase`<[IQRRenderer](../interfaces/iqrrenderer.md)>

**↳ QRRendererFactory**

## Index

### Methods

* [create](qrrendererfactory.md#create)
* [exists](qrrendererfactory.md#exists)
* [getInstance](qrrendererfactory.md#getinstance)
* [register](qrrendererfactory.md#register)
* [types](qrrendererfactory.md#types)
* [unregister](qrrendererfactory.md#unregister)
* [instance](qrrendererfactory.md#instance)

---

## Methods

<a id="create"></a>

###  create

▸ **create**(name: *`string`*, ...args: *`any`[]*): [IQRRenderer](../interfaces/iqrrenderer.md)

*Inherited from FactoryBase.create*

*Defined in D:/Workarea/tangle-frost/iota-qr-render/node_modules/@tangle-frost/iota-core/dist/factories/factoryBase.d.ts:35*

Create an instance of an object from the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to create. |
| `Rest` args | `any`[] |  Any parameters to pass to the constructor. |

**Returns:** [IQRRenderer](../interfaces/iqrrenderer.md)
A new instance of the type if it exists, or undefined if it does not.

___
<a id="exists"></a>

###  exists

▸ **exists**(name: *`string`*): `boolean`

*Inherited from FactoryBase.exists*

*Defined in D:/Workarea/tangle-frost/iota-qr-render/node_modules/@tangle-frost/iota-core/dist/factories/factoryBase.d.ts:22*

Does the factory contain a specific type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to look for. |

**Returns:** `boolean`
True if the type exists.

___
<a id="getinstance"></a>

### `<Protected>` getInstance

▸ **getInstance**(): `FactoryBase`<[IQRRenderer](../interfaces/iqrrenderer.md)>

*Defined in factories/qrRendererFactory.ts:31*

**Returns:** `FactoryBase`<[IQRRenderer](../interfaces/iqrrenderer.md)>

___
<a id="register"></a>

###  register

▸ **register**(name: *`string`*, typeConstructor: *`function`*): `void`

*Inherited from FactoryBase.register*

*Defined in D:/Workarea/tangle-frost/iota-qr-render/node_modules/@tangle-frost/iota-core/dist/factories/factoryBase.d.ts:11*

Register a new type with the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to register. |
| typeConstructor | `function` |  The constructor for the type. |

**Returns:** `void`

___
<a id="types"></a>

###  types

▸ **types**(): `string`[]

*Inherited from FactoryBase.types*

*Defined in D:/Workarea/tangle-frost/iota-qr-render/node_modules/@tangle-frost/iota-core/dist/factories/factoryBase.d.ts:28*

List the types in the factory.

**Returns:** `string`[]
True if the type exists.

___
<a id="unregister"></a>

###  unregister

▸ **unregister**(name: *`string`*): `void`

*Inherited from FactoryBase.unregister*

*Defined in D:/Workarea/tangle-frost/iota-qr-render/node_modules/@tangle-frost/iota-core/dist/factories/factoryBase.d.ts:16*

Unregister a type from the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to unregister. |

**Returns:** `void`

___
<a id="instance"></a>

### `<Static>` instance

▸ **instance**(): `FactoryBase`<[IQRRenderer](../interfaces/iqrrenderer.md)>

*Defined in factories/qrRendererFactory.ts:23*

Get the instance of the factory.

**Returns:** `FactoryBase`<[IQRRenderer](../interfaces/iqrrenderer.md)>
The factory instance.

___

