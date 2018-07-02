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

* [render](svgrenderer.md#render)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SvgRenderer**(options?: *[SvgRendererOptions](svgrendereroptions.md)*): [SvgRenderer](svgrenderer.md)

*Defined in renderTypes/svgRenderer.ts:12*

Create a new instance of Svg renderer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [SvgRendererOptions](svgrendereroptions.md) |  The options for the renderer. |

**Returns:** [SvgRenderer](svgrenderer.md)

___

## Methods

<a id="render"></a>

###  render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`string`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[render](../interfaces/iqrrenderer.md#render)*

*Defined in renderTypes/svgRenderer.ts:31*

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

