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

* [renderHtml](textrenderer.md#renderhtml)
* [renderRaw](textrenderer.md#renderraw)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextRenderer**(options?: *[TextRendererOptions](textrendereroptions.md)*): [TextRenderer](textrenderer.md)

*Defined in [renderTypes/textRenderer.ts:12](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/textRenderer.ts#L12*

Create a new instance of Text renderer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [TextRendererOptions](textrendereroptions.md) |  The options for the renderer. |

**Returns:** [TextRenderer](textrenderer.md)

___

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Element`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/textRenderer.ts:78](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/textRenderer.ts#L78*

Render the cell data as an HTML element.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data to render. |
| `Default value` cellSize | `number` | 1 |  The size in pixels of each cell. |
| `Default value` marginSize | `number` | 2 |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`<`Element`>
The object rendered as an html element.

___
<a id="renderraw"></a>

###  renderRaw

▸ **renderRaw**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`string`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderRaw](../interfaces/iqrrenderer.md#renderraw)*

*Defined in [renderTypes/textRenderer.ts:32](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/textRenderer.ts#L32*

Render the QR code data as text.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 1 |  The size of each cell. |
| `Default value` marginSize | `number` | 2 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`string`>
The text content.

___

