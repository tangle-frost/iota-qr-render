[@tangle-frost/iota-qr-render](../README.md) > [Bitmap](../classes/bitmap.md)

# Class: Bitmap

Class to render qr data as bitmap.

## Hierarchy

**Bitmap**

## Index

### Methods

* [render](bitmap.md#render)

---

## Methods

<a id="render"></a>

### `<Static>` render

▸ **render**(cellData: *`QRCellData`*, bitmapType: *[BitmapType](../#bitmaptype)*, cellSize?: *`number`*, marginSize?: *`number`*, foregroundColour?: *`number`*, backgroundColour?: *`number`*): `Promise`<`Buffer`>

*Defined in renderTypes/bitmap.ts:19*

Render the QR code data as a bitmap.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cellData | `QRCellData` | - |  The cell data for the QR code. |
| bitmapType | [BitmapType](../#bitmaptype) | - |  The mime type to render the data. |
| `Default value` cellSize | `number` | 5 |  The size of each cell. |
| `Default value` marginSize | `number` | 0 |  The margin to keep around the qr code. |
| `Default value` foregroundColour | `number` | 255 |  The foreground colour. |
| `Default value` backgroundColour | `number` | 4294967295 |  The background colour. |

**Returns:** `Promise`<`Buffer`>
The bitmap content.

___

