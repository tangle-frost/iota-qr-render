[@tangle-frost/iota-qr-render](../README.md) > [JpegEncoder](../classes/jpegencoder.md)

# Class: JpegEncoder

JPEG Encoder. Based on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, [www.bytestrom.eu](http://www.bytestrom.eu), 11/2009

## Hierarchy

**JpegEncoder**

## Index

### Constructors

* [constructor](jpegencoder.md#constructor)

### Methods

* [encode](jpegencoder.md#encode)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new JpegEncoder**(): [JpegEncoder](jpegencoder.md)

*Defined in [images/jpegEncoder.ts:119](https://github.com/tangle-frost/iota-qr-render/tree/master/src/images/jpegEncoder.ts#L119*

Create a new instance of JpegEncoder.

**Returns:** [JpegEncoder](jpegencoder.md)

___

## Methods

<a id="encode"></a>

###  encode

▸ **encode**(width: *`number`*, height: *`number`*, imageData: *`Uint8Array`*, quality: *`number`*): `Uint8Array`

*Defined in [images/jpegEncoder.ts:156](https://github.com/tangle-frost/iota-qr-render/tree/master/src/images/jpegEncoder.ts#L156*

Encode the image with the given quality.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| width | `number` |  The width of the image to encode. |
| height | `number` |  The height of the image to encode. |
| imageData | `Uint8Array` |  The data for the image. |
| quality | `number` |  The quality to encode the image at. |

**Returns:** `Uint8Array`
The data for the encoded image.

___

