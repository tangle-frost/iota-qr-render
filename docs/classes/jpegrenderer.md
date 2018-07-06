[@tangle-frost/iota-qr-render](../README.md) > [JpegRenderer](../classes/jpegrenderer.md)

# Class: JpegRenderer

Class to render qr data as bitmap.

## Hierarchy

**JpegRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](jpegrenderer.md#constructor)

### Methods

* [renderHtml](jpegrenderer.md#renderhtml)
* [renderRaw](jpegrenderer.md#renderraw)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new JpegRenderer**(options?: *[JpegRendererOptions](jpegrendereroptions.md)*): [JpegRenderer](jpegrenderer.md)

*Defined in [renderTypes/jpegRenderer.ts:16](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/jpegRenderer.ts#L16*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [JpegRendererOptions](jpegrendereroptions.md) |  The options for the renderer. |

**Returns:** [JpegRenderer](jpegrenderer.md)

___

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`HTMLImageElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/jpegRenderer.ts:112](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/jpegRenderer.ts#L112*

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

*Defined in [renderTypes/jpegRenderer.ts:44](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/jpegRenderer.ts#L44*

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

