[@tangle-frost/iota-qr-render](../README.md) > [PngEncoder](../classes/pngencoder.md)

# Class: PngEncoder

PNG Encoder. Based on [https://github.com/photopea/UPNG.js](https://github.com/photopea/UPNG.js)

## Hierarchy

**PngEncoder**

## Index

### Methods

* [encode](pngencoder.md#encode)

---

## Methods

<a id="encode"></a>

###  encode

▸ **encode**(bufs: *`ArrayBuffer`[]*, w: *`number`*, h: *`number`*): `Uint8Array`

*Defined in [images/pngEncoder.ts:15](https://github.com/tangle-frost/iota-qr-render/tree/master/src/images/pngEncoder.ts#L15*

Encode the image frames to png.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bufs | `ArrayBuffer`[] |  The frame buffers to encode. |
| w | `number` |  The image width. |
| h | `number` |  The image height. |

**Returns:** `Uint8Array`
The data for the image.

___

