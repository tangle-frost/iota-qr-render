[@tangle-frost/iota-qr-render](../README.md) > [PngRenderer](../classes/pngrenderer.md)

# Class: PngRenderer

Class to render qr data as png.

## Hierarchy

**PngRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](pngrenderer.md#constructor)

### Methods

* [renderHtml](pngrenderer.md#renderhtml)
* [renderRaw](pngrenderer.md#renderraw)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PngRenderer**(options?: *[PngRendererOptions](pngrendereroptions.md)*): [PngRenderer](pngrenderer.md)

*Defined in [renderTypes/pngRenderer.ts:16](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/pngRenderer.ts#L16*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [PngRendererOptions](pngrendereroptions.md) |  The options for the renderer. |

**Returns:** [PngRenderer](pngrenderer.md)

___

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`HTMLImageElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/pngRenderer.ts:112](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/pngRenderer.ts#L112*

Render the cell data as an HTML element.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data to render. |
| `Default value` cellSize | `number` | 5 |  The size in pixels of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`<`HTMLImageElement`>
The object rendered as an html element.

___
<a id="renderraw"></a>

###  renderRaw

▸ **renderRaw**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Uint8Array`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderRaw](../interfaces/iqrrenderer.md#renderraw)*

*Defined in [renderTypes/pngRenderer.ts:44](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/pngRenderer.ts#L44*

Render the QR code data as a bitmap.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`Uint8Array`>
The bitmap content.

___

