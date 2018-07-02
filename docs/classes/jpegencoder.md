[@tangle-frost/iota-qr-render](../README.md) > [JPEGEncoder](../classes/jpegencoder.md)

# Class: JPEGEncoder

JPEG Encoder. Baed on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, [www.bytestrom.eu](http://www.bytestrom.eu), 11/2009

## Hierarchy

**JPEGEncoder**

## Index

### Constructors

* [constructor](jpegencoder.md#constructor)

### Methods

* [encode](jpegencoder.md#encode)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new JPEGEncoder**(): [JPEGEncoder](jpegencoder.md)

*Defined in images/jpegEncoder.ts:119*

Create a new instance of JPEGEncoder.

**Returns:** [JPEGEncoder](jpegencoder.md)

___

## Methods

<a id="encode"></a>

###  encode

▸ **encode**(width: *`number`*, height: *`number`*, imageData: *`Uint8Array`*, quality: *`number`*): `Uint8Array`

*Defined in images/jpegEncoder.ts:156*

Encode the image with the given quality.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| width | `number` |  The width of the image to encode. |
| height | `number` |  The height of the image to encode. |
| imageData | `Uint8Array` |  The data for the image. |
| quality | `number` |  The quality to encode the image at. |

**Returns:** `Uint8Array`
The data for the encoded image.

___

