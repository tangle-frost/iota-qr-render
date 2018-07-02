[@tangle-frost/iota-qr-render](../README.md) > [IQRRenderer](../interfaces/iqrrenderer.md)

# Interface: IQRRenderer

Interface which defines a QR Code Renderer.
*__interface__*: 

## Hierarchy

**IQRRenderer**

## Implemented by

* [BitmapRenderer](../classes/bitmaprenderer.md)
* [CanvasRenderer](../classes/canvasrenderer.md)
* [SvgRenderer](../classes/svgrenderer.md)
* [TextRenderer](../classes/textrenderer.md)

## Index

### Methods

* [render](iqrrenderer.md#render)

---

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `any`

*Defined in models/IQRRenderer.ts:15*

Render the cell data with the given dimensions.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cellData | `QRCellData` |  The cell data to render. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |

**Returns:** `any`
The rendered object.

___

