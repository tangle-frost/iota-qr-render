[@tangle-frost/iota-qr-render](../README.md) > [SvgRenderer](../classes/svgrenderer.md)

# Class: SvgRenderer

Class to render qr data as svg.

## Hierarchy

**SvgRenderer**

## Implements

* [IQRRenderer](../interfaces/iqrrenderer.md)

## Index

### Constructors

* [constructor](svgrenderer.md#constructor)

### Methods

* [renderHtml](svgrenderer.md#renderhtml)
* [renderRaw](svgrenderer.md#renderraw)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SvgRenderer**(options?: *[SvgRendererOptions](svgrendereroptions.md)*): [SvgRenderer](svgrenderer.md)

*Defined in [renderTypes/svgRenderer.ts:14](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L14*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [SvgRendererOptions](svgrendereroptions.md) |  The options for the renderer. |

**Returns:** [SvgRenderer](svgrenderer.md)

___

## Methods

<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`SVGSVGElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/svgRenderer.ts:57](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L57*

Render the cell data as an HTML element.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data to render. |
| `Default value` cellSize | `number` | 5 |  The size in pixels of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin size in pixels to leave around the qr code. |

**Returns:** `Promise`<`SVGSVGElement`>
The object rendered as an html element.

___
<a id="renderraw"></a>

###  renderRaw

▸ **renderRaw**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`string`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderRaw](../interfaces/iqrrenderer.md#renderraw)*

*Defined in [renderTypes/svgRenderer.ts:42](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L42*

Render the QR code data as an SVG.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`string`>
The SVG content.

___

