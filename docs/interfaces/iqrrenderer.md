[@tangle-frost/iota-qr-render](../README.md) > [IQRRenderer](../interfaces/iqrrenderer.md)

# Interface: IQRRenderer

Interface which defines a QR Code Renderer.
*__interface__*: 

## Hierarchy

**IQRRenderer**

## Implemented by

* [CanvasRenderer](../classes/canvasrenderer.md)
* [JpegRenderer](../classes/jpegrenderer.md)
* [PngRenderer](../classes/pngrenderer.md)
* [SvgRenderer](../classes/svgrenderer.md)
* [TextRenderer](../classes/textrenderer.md)

## Index

### Methods

* [renderHtml](iqrrenderer.md#renderhtml)
* [renderRaw](iqrrenderer.md#renderraw)

---

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Element`>

*Defined in models/IQRRenderer.ts:24*

Render the cell data as an HTML element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cellData | `QRCellData` |  The cell data to render. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`<`Element`>
The object rendered as an html element.

___
<a id="renderraw"></a>

###  renderRaw

▸ **renderRaw**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`< `Uint8Array` &#124; `string`>

*Defined in models/IQRRenderer.ts:15*

Render the cell data with the given dimensions.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cellData | `QRCellData` |  The cell data to render. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`< `Uint8Array` &#124; `string`>
The rendered object.

___

