
#  @tangle-frost/iota-qr-render

## Index

### Classes

* [CanvasRenderer](classes/canvasrenderer.md)
* [CanvasRendererOptions](classes/canvasrendereroptions.md)
* [ImageHelper](classes/imagehelper.md)
* [JpegEncoder](classes/jpegencoder.md)
* [JpegRenderer](classes/jpegrenderer.md)
* [JpegRendererOptions](classes/jpegrendereroptions.md)
* [PngEncoder](classes/pngencoder.md)
* [PngRenderer](classes/pngrenderer.md)
* [PngRendererOptions](classes/pngrendereroptions.md)
* [QRRendererFactory](classes/qrrendererfactory.md)
* [SvgRenderer](classes/svgrenderer.md)
* [SvgRendererOptions](classes/svgrendereroptions.md)
* [TextRenderer](classes/textrenderer.md)
* [TextRendererOptions](classes/textrendereroptions.md)

### Interfaces

* [IQRRenderer](interfaces/iqrrenderer.md)

### Type aliases

* [Frame](#frame)
* [ImageData](#imagedata)
* [Leaf](#leaf)

### Functions

* [initRender](#initrender)

---

## Type aliases

<a id="frame"></a>

###  Frame

**ΤFrame**: *`object`*

*Defined in images/pngEncoder.ts:7*

PNG Encoder. Based on [https://github.com/photopea/UPNG.js](https://github.com/photopea/UPNG.js)

#### Type declaration

 blend: `number`

 bpl: `number`

 bpp: `number`

`Optional`  cimg: `any`

`Optional`  ctype: `number`

`Optional`  depth: `number`

 dispose: `number`

 img: `any`

 rect: `object`

 height: `number`

 width: `number`

 x: `number`

 y: `number`

___
<a id="imagedata"></a>

###  ImageData

**ΤImageData**: *`object`*

*Defined in images/pngEncoder.ts:37*

#### Type declaration

 ctype: `number`

 depth: `number`

 frames: [Frame](#frame)[]

 gotAlpha: `boolean`

 plte: `number`[]

___
<a id="leaf"></a>

###  Leaf

**ΤLeaf**: *`object`*

*Defined in images/pngEncoder.ts:19*

#### Type declaration

 bst: `object`

 N: `number`

 R: `number`[]

 m: `number`[]

 est: `object`

 Cov: `number`[]

 L: `number`

 e: `number`[]

 eMq: `number`

 eMq255: `number`

 q: `number`[]

 rgba: `number`

 i0: `number`

 i1: `number`

 left: [Leaf](#leaf)

 right: [Leaf](#leaf)

 tdst: `number`

___

## Functions

<a id="initrender"></a>

###  initRender

▸ **initRender**(): `void`

*Defined in initRender.ts:11*

**Returns:** `void`

___

