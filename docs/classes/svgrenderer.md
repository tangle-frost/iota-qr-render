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

* [renderContent](svgrenderer.md#rendercontent)
* [renderHtml](svgrenderer.md#renderhtml)
* [renderRaw](svgrenderer.md#renderraw)
* [renderWrapper](svgrenderer.md#renderwrapper)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SvgRenderer**(options?: *[SvgRendererOptions](svgrendereroptions.md)*): [SvgRenderer](svgrenderer.md)

*Defined in [renderTypes/svgRenderer.ts:16](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L16*

Create a new instance of Svg renderer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [SvgRendererOptions](svgrendereroptions.md) |  The options for the renderer. |

**Returns:** [SvgRenderer](svgrenderer.md)

___

## Methods

<a id="rendercontent"></a>

###  renderContent

▸ **renderContent**(cellData: *`boolean`[][]*, cellSize: *`number`*, marginSize: *`number`*): `object`

*Defined in [renderTypes/svgRenderer.ts:113](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L113*

Render the internal content of the svg.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cellData | `boolean`[][] |  The cell data to render. |
| cellSize | `number` |  The size of the cell. |
| marginSize | `number` |  The size of the margin. |

**Returns:** `object`
The dimension and content of the svg.

___
<a id="renderhtml"></a>

###  renderHtml

▸ **renderHtml**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*): `Promise`<`SVGSVGElement`>

*Implementation of [IQRRenderer](../interfaces/iqrrenderer.md).[renderHtml](../interfaces/iqrrenderer.md#renderhtml)*

*Defined in [renderTypes/svgRenderer.ts:93](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L93*

Render the cell data as an HTML element.

**Parameters:**

| Name | Type | Default value | Description |
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

*Defined in [renderTypes/svgRenderer.ts:81](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L81*

Render the QR code data as an SVG.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 10 |  The margin to keep around the qr code. |

**Returns:** `Promise`<`string`>
The SVG content.

___
<a id="renderwrapper"></a>

### `<Static>` renderWrapper

▸ **renderWrapper**(width: *`number`*, height: *`number`*, content: *`string`*, includeXmlDeclaration: *`boolean`*): `string`

*Defined in [renderTypes/svgRenderer.ts:63](https://github.com/tangle-frost/iota-qr-render/tree/master/src/renderTypes/svgRenderer.ts#L63*

Wrap svg content with outer xml.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| width | `number` |  The width of the svg. |
| height | `number` |  The height of the svg. |
| content | `string` |  The inner content of the svg. |
| includeXmlDeclaration | `boolean` |  Include an xml declaration at the start of the content |

**Returns:** `string`
The SVG content.

___

