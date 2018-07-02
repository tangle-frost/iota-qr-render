[@tangle-frost/iota-qr-render](../README.md) > [TextRenderer](../classes/textrenderer.md)

# Class: TextRenderer

Class to render qr data as t3xt.

## Hierarchy

**TextRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](textrenderer.md#constructor)

### Methods

* [render](textrenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextRenderer**(options?: *[TextRendererOptions](textrendereroptions.md)*): [TextRenderer](textrenderer.md)

*Defined in renderTypes/textRenderer.ts:12*

Create a new instance of Text renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [TextRendererOptions](textrendereroptions.md) |  The options for the renderer. |

**Returns:** [TextRenderer](textrenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`string`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/textRenderer.ts:31*

Render the QR code data as text.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 1 |  The size of each cell. |
| `Default value` marginSize | `number` | 2 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`string`>
The text content.

___

