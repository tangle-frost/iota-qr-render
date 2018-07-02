[@tangle-frost/iota-qr-render](../README.md) > [CanvasRenderer](../classes/canvasrenderer.md)

# Class: CanvasRenderer

Class to render qr data as canvas.

## Hierarchy

**CanvasRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](canvasrenderer.md#constructor)

### Methods

* [render](canvasrenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CanvasRenderer**(options?: *[CanvasRendererOptions](canvasrendereroptions.md)*): [CanvasRenderer](canvasrenderer.md)

*Defined in renderTypes/canvasRenderer.ts:12*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [CanvasRendererOptions](canvasrendereroptions.md) |  The options for the renderer. |

**Returns:** [CanvasRenderer](canvasrenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`HTMLCanvasElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/canvasRenderer.ts:31*

Render the QR code data as an canvas.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`HTMLCanvasElement`>
The SVG content.

___

