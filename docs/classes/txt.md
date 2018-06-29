[@tangle-frost/iota-qr-render](../README.md) > [Txt](../classes/txt.md)

# Class: Txt

Class to render qr data as txt.

## Hierarchy

**Txt**

## Index

### Methods

* [render](txt.md#render)

---

## Methods

<a id="render"></a>

### `<Static>` render

▸ **render**(cellData: *`QRCellData`*, cellSize?: *`number`*, marginSize?: *`number`*, onChar?: *`string`*, offChar?: *`string`*): `Promise`<`string`>

*Defined in renderTypes/txt.ts:16*

Render the QR code data as txt.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| `Default value` cellSize | `number` | 1 |  The size of each cell. |
| `Default value` marginSize | `number` | 1 |  The margin to keep around the qr code. |
| `Default value` onChar | `string` | &quot;██&quot; |  The character to use for on pixels. |
| `Default value` offChar | `string` | &quot;  &quot; |  The character to use for off pixels. |

**Returns:** `Promise`<`string`>
The txt content.

___

