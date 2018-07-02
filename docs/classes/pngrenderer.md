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

* [render](pngrenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PngRenderer**(options?: *[PngRendererOptions](pngrendereroptions.md)*): [PngRenderer](pngrenderer.md)

*Defined in renderTypes/pngRenderer.ts:13*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [PngRendererOptions](pngrendereroptions.md) |  The options for the renderer. |

**Returns:** [PngRenderer](pngrenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Uint8Array`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/pngRenderer.ts:32*

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

