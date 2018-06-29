[@tangle-frost/iota-qr-render](../README.md) > [Svg](../classes/svg.md)

# Class: Svg

Class to render qr data as svg.

## Hierarchy

**Svg**

## Index

### Methods

* [render](svg.md#render)

---

## Methods

<a id="render"></a>

### `<Static>` render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*, foregroundColour?: *`string`*, backgroundColour?: *`string`*): `Promise`<`string`>

*Defined in renderTypes/svg.ts:16*

Render the QR code data as an SVG.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 0 |  The margin to keep around the qr code. |
| `Default value` foregroundColour | `string` | &quot;black&quot; |  The foreground colour. |
| `Default value` backgroundColour | `string` | &quot;white&quot; |  The background colour. |

**Returns:** `Promise`<`string`>
The SVG content.

___

