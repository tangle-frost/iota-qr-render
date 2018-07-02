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

* [render](jpegrenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new JpegRenderer**(options?: *[JpegRendererOptions](jpegrendereroptions.md)*): [JpegRenderer](jpegrenderer.md)

*Defined in renderTypes/jpegRenderer.ts:13*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [JpegRendererOptions](jpegrendereroptions.md) |  The options for the renderer. |

**Returns:** [JpegRenderer](jpegrenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Uint8Array`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/jpegRenderer.ts:32*

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

