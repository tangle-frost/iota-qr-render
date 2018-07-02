[@tangle-frost/iota-qr-render](../README.md) > [BitmapRenderer](../classes/bitmaprenderer.md)

# Class: BitmapRenderer

Class to render qr data as bitmap.

## Hierarchy

**BitmapRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](bitmaprenderer.md#constructor)

### Methods

* [render](bitmaprenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BitmapRenderer**(options?: *[BitmapRendererOptions](bitmaprendereroptions.md)*): [BitmapRenderer](bitmaprenderer.md)

*Defined in renderTypes/bitmapRenderer.ts:13*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [BitmapRendererOptions](bitmaprendereroptions.md) |  The options for the renderer. |

**Returns:** [BitmapRenderer](bitmaprenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Buffer`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/bitmapRenderer.ts:33*

Render the QR code data as a bitmap.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`Buffer`>
The bitmap content.

___

