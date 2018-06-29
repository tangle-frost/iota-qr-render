[@tangle-frost/iota-qr-render](../README.md) > [Canvas](../classes/canvas.md)

# Class: Canvas

Class to render qr data as canvas.

## Hierarchy

**Canvas**

## Index

### Methods

* [render](canvas.md#render)

---

## Methods

<a id="render"></a>

### `<Static>` render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*, foregroundColour?: *`string`*, backgroundColour?: *`string`*): `Promise`<`HTMLCanvasElement`>

*Defined in renderTypes/canvas.ts:16*

Render the QR code data as an canvas.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 0 |  The margin to keep around the qr code. |
| `Default value` foregroundColour | `string` | &quot;black&quot; |  The foreground colour. |
| `Default value` backgroundColour | `string` | &quot;white&quot; |  The background colour. |

**Returns:** `Promise`<`HTMLCanvasElement`>
The SVG content.

___

