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

* [renderHtml](canvasrenderer.md#renderhtml)
* [renderRaw](canvasrenderer.md#renderraw)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CanvasRenderer**(options?: *[CanvasRendererOptions](canvasrendereroptions.md)*): [CanvasRenderer](canvasrenderer.md)

*Defined in [renderTypes/canvasRenderer.ts:14](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/canvasRenderer.ts#L14*

Create a new instance of Svg renderer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [CanvasRendererOptions](canvasrendereroptions.md) |  The options for the renderer. |

**Returns:** [CanvasRenderer](canvasrenderer.md)

___

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`HTMLCanvasElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/canvasRenderer.ts:53](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/canvasRenderer.ts#L53*

Render the cell data as an HTML element.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data to render. |
| `Default value` cellSize | `number` | 5 |  The size in pixels of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`<`HTMLCanvasElement`>
The object rendered as an html element.

___
<a id="renderraw"></a>

###  renderRaw

▸ **renderRaw**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`Uint8Array` | `string`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderRaw](../interfaces/iqrrenderer.md#renderraw)*

*Defined in [renderTypes/canvasRenderer.ts:42](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/canvasRenderer.ts#L42*

Render the QR code data as an canvas.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`Uint8Array` | `string`>
The SVG content.

___

