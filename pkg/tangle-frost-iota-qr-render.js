(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tangle-frost/iota-core/dist/data/color"), require("@tangle-frost/iota-core/dist/factories/factoryBase"), require("@tangle-frost/iota-core/dist/helpers/arrayHelper"), require("@tangle-frost/iota-core/dist/helpers/numberHelper"), require("@tangle-frost/iota-core/dist/helpers/objectHelper"), require("@tangle-frost/iota-core/dist/helpers/stringHelper"));
	else if(typeof define === 'function' && define.amd)
		define("@tangle-frost/iota-qr-render", ["@tangle-frost/iota-core/dist/data/color", "@tangle-frost/iota-core/dist/factories/factoryBase", "@tangle-frost/iota-core/dist/helpers/arrayHelper", "@tangle-frost/iota-core/dist/helpers/numberHelper", "@tangle-frost/iota-core/dist/helpers/objectHelper", "@tangle-frost/iota-core/dist/helpers/stringHelper"], factory);
	else if(typeof exports === 'object')
		exports["@tangle-frost/iota-qr-render"] = factory(require("@tangle-frost/iota-core/dist/data/color"), require("@tangle-frost/iota-core/dist/factories/factoryBase"), require("@tangle-frost/iota-core/dist/helpers/arrayHelper"), require("@tangle-frost/iota-core/dist/helpers/numberHelper"), require("@tangle-frost/iota-core/dist/helpers/objectHelper"), require("@tangle-frost/iota-core/dist/helpers/stringHelper"));
	else
		root["TangleFrostIotaQrRender"] = factory(root["@tangle-frost/iota-core/dist/data/color"], root["@tangle-frost/iota-core/dist/factories/factoryBase"], root["@tangle-frost/iota-core/dist/helpers/arrayHelper"], root["@tangle-frost/iota-core/dist/helpers/numberHelper"], root["@tangle-frost/iota-core/dist/helpers/objectHelper"], root["@tangle-frost/iota-core/dist/helpers/stringHelper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_color__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_factories_factoryBase__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_arrayHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_stringHelper__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/factories/qrRendererFactory.js":
/*!*********************************************!*\
  !*** ./dist/factories/qrRendererFactory.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/factories/factoryBase */ "@tangle-frost/iota-core/dist/factories/factoryBase");
/**
 * Factory to generate QR renderers.
 */


var QRRendererFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(QRRendererFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function QRRendererFactory() {
    _classCallCheck(this, QRRendererFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRRendererFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(QRRendererFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return QRRendererFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!QRRendererFactory._instance) {
        QRRendererFactory._instance = new QRRendererFactory();
      }

      return QRRendererFactory._instance;
    }
  }]);

  return QRRendererFactory;
}(factoryBase_1.FactoryBase);

exports.QRRendererFactory = QRRendererFactory;

/***/ }),

/***/ "./dist/helpers/imageHelper.js":
/*!*************************************!*\
  !*** ./dist/helpers/imageHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/objectHelper */ "@tangle-frost/iota-core/dist/helpers/objectHelper");

var stringHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/stringHelper */ "@tangle-frost/iota-core/dist/helpers/stringHelper");
/**
 * Class to help with manipulating image data.
 */


var ImageHelper =
/*#__PURE__*/
function () {
  function ImageHelper() {
    _classCallCheck(this, ImageHelper);
  }

  _createClass(ImageHelper, null, [{
    key: "dataToImageSource",

    /**
     * Convert the data to an image source.
     * @param mimeType The mime type of the data.
     * @param data The source data.
     * @returns The image source.
     */
    value: function dataToImageSource(mimeType, data) {
      if (stringHelper_1.StringHelper.isEmpty(mimeType)) {
        throw new Error("You must provider a mimeType");
      }

      var imageSource;

      if (objectHelper_1.ObjectHelper.isType(data, Uint8Array)) {
        var binary = "";
        var len = data.length;

        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(data[i]);
        }

        var base64Data = btoa(binary);
        imageSource = "data:".concat(mimeType, ";base64,").concat(base64Data);
      } else if (stringHelper_1.StringHelper.isString(data)) {
        var _base64Data = btoa(data);

        imageSource = "data:".concat(mimeType, ";base64,").concat(_base64Data);
      } else {
        throw new Error("The data must be a Uint8Array or string");
      }

      return imageSource;
    }
  }]);

  return ImageHelper;
}();

exports.ImageHelper = ImageHelper;

/***/ }),

/***/ "./dist/images/jpegEncoder.js":
/*!************************************!*\
  !*** ./dist/images/jpegEncoder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * JPEG Encoder.
 * Based on JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
 */

var JpegEncoder =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of JpegEncoder.
   */
  function JpegEncoder() {
    _classCallCheck(this, JpegEncoder);

    this._yTable = new Array(64);
    this._uvTable = new Array(64);
    this._fdtblY = new Array(64);
    this._fdtblUV = new Array(64);
    this._bitCode = new Array(65535);
    this._category = new Array(65535);
    this._outputfDCTQuant = new Array(64);
    this._du = new Array(64);
    this._byteOut = [];
    this._byteNew = 0;
    this._bytePos = 7;
    this._ydu = new Array(64);
    this._udu = new Array(64);
    this._vdu = new Array(64);
    this._rgbYuvTable = new Array(2048);
    this.initHuffmanTbl();
    this.initCategoryNumber();
    this.initRGBYUVTable();
  }
  /**
   * Encode the image with the given quality.
   * @param width The width of the image to encode.
   * @param height The height of the image to encode.
   * @param imageData The data for the image.
   * @param quality The quality to encode the image at.
   * @returns The data for the encoded image.
   */


  _createClass(JpegEncoder, [{
    key: "encode",
    value: function encode(width, height, imageData, quality) {
      this.setQuality(quality); // Initialize bit writer

      this._byteOut = new Array();
      this._byteNew = 0;
      this._bytePos = 7; // Add JPEG headers

      this.writeWord(0xFFD8); // SOI

      this.writeAPP0();
      this.writeDQT();
      this.writeSOF0(width, height);
      this.writeDHT();
      this.writeSOS(); // Encode 8x8 macroblocks

      var DCY = 0;
      var DCU = 0;
      var DCV = 0;
      this._byteNew = 0;
      this._bytePos = 7;
      var quadWidth = width * 4;
      var x;
      var y = 0;
      var r;
      var g;
      var b;
      var start;
      var p;
      var col;
      var row;
      var pos;

      while (y < height) {
        x = 0;

        while (x < quadWidth) {
          start = quadWidth * y + x;
          p = start;
          col = -1;
          row = 0;

          for (pos = 0; pos < 64; pos++) {
            row = pos >> 3; // /8

            col = (pos & 7) * 4; // %8

            p = start + row * quadWidth + col;

            if (y + row >= height) {
              // padding bottom
              p -= quadWidth * (y + 1 + row - height);
            }

            if (x + col >= quadWidth) {
              // padding right
              p -= x + col - quadWidth + 4;
            }

            r = imageData[p++];
            g = imageData[p++];
            b = imageData[p++];
            /* // calculate YUV values dynamically
            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
            */
            // use lookup table (slightly faster)

            this._ydu[pos] = (this._rgbYuvTable[r] + this._rgbYuvTable[g + 256 >> 0] + this._rgbYuvTable[b + 512 >> 0] >> 16) - 128;
            this._udu[pos] = (this._rgbYuvTable[r + 768 >> 0] + this._rgbYuvTable[g + 1024 >> 0] + this._rgbYuvTable[b + 1280 >> 0] >> 16) - 128;
            this._vdu[pos] = (this._rgbYuvTable[r + 1280 >> 0] + this._rgbYuvTable[g + 1536 >> 0] + this._rgbYuvTable[b + 1792 >> 0] >> 16) - 128;
          }

          DCY = this.processDU(this._ydu, this._fdtblY, DCY, this._ydcHashTable, this._yacHashTable);
          DCU = this.processDU(this._udu, this._fdtblUV, DCU, this._uvdcHashTable, this._uvacHashTable);
          DCV = this.processDU(this._vdu, this._fdtblUV, DCV, this._uvdcHashTable, this._uvacHashTable);
          x += 32;
        }

        y += 8;
      } // Do the bit alignment of the EOI marker


      if (this._bytePos >= 0) {
        var fillbits = [];
        fillbits[1] = this._bytePos + 1;
        fillbits[0] = (1 << this._bytePos + 1) - 1;
        this.writeBits(fillbits);
      }

      this.writeWord(0xFFD9); //EOI

      return new Uint8Array(this._byteOut);
    }
    /* @internal */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      if (quality <= 0 || quality > 100) {
        throw new Error("Quality must be between 1 and 100, it is ".concat(quality));
      }

      var sf = 0;

      if (quality < 50) {
        sf = Math.floor(5000 / quality);
      } else {
        sf = Math.floor(200 - quality * 2);
      }

      this.initQuantTables(sf);
    }
    /* @internal */

  }, {
    key: "initQuantTables",
    value: function initQuantTables(sf) {
      var YQT = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];

      for (var i = 0; i < 64; i++) {
        var t = Math.floor((YQT[i] * sf + 50) / 100);

        if (t < 1) {
          t = 1;
        } else if (t > 255) {
          t = 255;
        }

        this._yTable[JpegEncoder.SIG_ZAG[i]] = t;
      }

      var UVQT = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];

      for (var j = 0; j < 64; j++) {
        var u = Math.floor((UVQT[j] * sf + 50) / 100);

        if (u < 1) {
          u = 1;
        } else if (u > 255) {
          u = 255;
        }

        this._uvTable[JpegEncoder.SIG_ZAG[j]] = u;
      }

      var aasf = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379];
      var k = 0;

      for (var row = 0; row < 8; row++) {
        for (var col = 0; col < 8; col++) {
          this._fdtblY[k] = 1 / (this._yTable[JpegEncoder.SIG_ZAG[k]] * aasf[row] * aasf[col] * 8);
          this._fdtblUV[k] = 1 / (this._uvTable[JpegEncoder.SIG_ZAG[k]] * aasf[row] * aasf[col] * 8);
          k++;
        }
      }
    }
    /* @internal */

  }, {
    key: "computeHuffmanTbl",
    value: function computeHuffmanTbl(nrcodes, stdTable) {
      var codevalue = 0;
      var posInTable = 0;
      var HT = new Array();

      for (var k = 1; k <= 16; k++) {
        for (var j = 1; j <= nrcodes[k]; j++) {
          HT[stdTable[posInTable]] = [];
          HT[stdTable[posInTable]][0] = codevalue;
          HT[stdTable[posInTable]][1] = k;
          posInTable++;
          codevalue++;
        }

        codevalue *= 2;
      }

      return HT;
    }
    /* @internal */

  }, {
    key: "initHuffmanTbl",
    value: function initHuffmanTbl() {
      this._ydcHashTable = this.computeHuffmanTbl(JpegEncoder.STD_DC_LUMINANCE_NRCODES, JpegEncoder.STD_DC_LUMINANCE_VALUES);
      this._uvdcHashTable = this.computeHuffmanTbl(JpegEncoder.STD_DC_CHROMINANCE_NRCODES, JpegEncoder.STD_DC_CHROMINANCE_VALUES);
      this._yacHashTable = this.computeHuffmanTbl(JpegEncoder.STD_AC_LUMINANCE_NRCODES, JpegEncoder.STD_AC_LUMINANCE_VALUES);
      this._uvacHashTable = this.computeHuffmanTbl(JpegEncoder.STD_AC_CHROMINANCE_NRCODES, JpegEncoder.STD_AC_CHROMINANCE_VALUES);
    }
    /* @internal */

  }, {
    key: "initCategoryNumber",
    value: function initCategoryNumber() {
      var nrlower = 1;
      var nrupper = 2;

      for (var cat = 1; cat <= 15; cat++) {
        //Positive numbers
        for (var nr = nrlower; nr < nrupper; nr++) {
          this._category[32767 + nr] = cat;
          this._bitCode[32767 + nr] = [];
          this._bitCode[32767 + nr][1] = cat;
          this._bitCode[32767 + nr][0] = nr;
        } //Negative numbers


        for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
          this._category[32767 + nrneg] = cat;
          this._bitCode[32767 + nrneg] = [];
          this._bitCode[32767 + nrneg][1] = cat;
          this._bitCode[32767 + nrneg][0] = nrupper - 1 + nrneg;
        }

        nrlower <<= 1;
        nrupper <<= 1;
      }
    }
    /* @internal */

  }, {
    key: "initRGBYUVTable",
    value: function initRGBYUVTable() {
      for (var i = 0; i < 256; i++) {
        this._rgbYuvTable[i] = 19595 * i;
        this._rgbYuvTable[i + 256 >> 0] = 38470 * i;
        this._rgbYuvTable[i + 512 >> 0] = 7471 * i + 0x8000;
        this._rgbYuvTable[i + 768 >> 0] = -11059 * i;
        this._rgbYuvTable[i + 1024 >> 0] = -21709 * i;
        this._rgbYuvTable[i + 1280 >> 0] = 32768 * i + 0x807FFF;
        this._rgbYuvTable[i + 1536 >> 0] = -27439 * i;
        this._rgbYuvTable[i + 1792 >> 0] = -5329 * i;
      }
    }
    /* @internal */

  }, {
    key: "writeBits",
    value: function writeBits(bs) {
      var value = bs[0];
      var posval = bs[1] - 1;

      while (posval >= 0) {
        if (value & 1 << posval) {
          this._byteNew |= 1 << this._bytePos;
        }

        posval--;
        this._bytePos--;

        if (this._bytePos < 0) {
          if (this._byteNew === 0xFF) {
            this.writeByte(0xFF);
            this.writeByte(0);
          } else {
            this.writeByte(this._byteNew);
          }

          this._bytePos = 7;
          this._byteNew = 0;
        }
      }
    }
    /* @internal */

  }, {
    key: "writeByte",
    value: function writeByte(value) {
      this._byteOut.push(value);
    }
    /* @internal */

  }, {
    key: "writeWord",
    value: function writeWord(value) {
      this.writeByte(value >> 8 & 0xFF);
      this.writeByte(value & 0xFF);
    }
    /* @internal */

  }, {
    key: "fDCTQuant",
    value: function fDCTQuant(data, fdtbl) {
      var d0;
      var d1;
      var d2;
      var d3;
      var d4;
      var d5;
      var d6;
      var d7;
      /* Pass 1: process rows. */

      var dataOff = 0;
      var i;
      var I8 = 8;
      var I64 = 64;

      for (i = 0; i < I8; ++i) {
        d0 = data[dataOff];
        d1 = data[dataOff + 1];
        d2 = data[dataOff + 2];
        d3 = data[dataOff + 3];
        d4 = data[dataOff + 4];
        d5 = data[dataOff + 5];
        d6 = data[dataOff + 6];
        d7 = data[dataOff + 7];
        var tmp0 = d0 + d7;
        var tmp7 = d0 - d7;
        var tmp1 = d1 + d6;
        var tmp6 = d1 - d6;
        var tmp2 = d2 + d5;
        var tmp5 = d2 - d5;
        var tmp3 = d3 + d4;
        var tmp4 = d3 - d4;
        /* Even part */

        var tmp10 = tmp0 + tmp3;
        /* phase 2 */

        var tmp13 = tmp0 - tmp3;
        var tmp11 = tmp1 + tmp2;
        var tmp12 = tmp1 - tmp2;
        data[dataOff] = tmp10 + tmp11;
        /* phase 3 */

        data[dataOff + 4] = tmp10 - tmp11;
        var z1 = (tmp12 + tmp13) * 0.707106781;
        /* c4 */

        data[dataOff + 2] = tmp13 + z1;
        /* phase 5 */

        data[dataOff + 6] = tmp13 - z1;
        /* Odd part */

        tmp10 = tmp4 + tmp5;
        /* phase 2 */

        tmp11 = tmp5 + tmp6;
        tmp12 = tmp6 + tmp7;
        /* The rotator is modified from fig 4-8 to avoid extra negations. */

        var z5 = (tmp10 - tmp12) * 0.382683433;
        /* c6 */

        var z2 = 0.5411961 * tmp10 + z5;
        /* c2-c6 */

        var z4 = 1.306562965 * tmp12 + z5;
        /* c2+c6 */

        var z3 = tmp11 * 0.707106781;
        /* c4 */

        var z11 = tmp7 + z3;
        /* phase 5 */

        var z13 = tmp7 - z3;
        data[dataOff + 5] = z13 + z2;
        /* phase 6 */

        data[dataOff + 3] = z13 - z2;
        data[dataOff + 1] = z11 + z4;
        data[dataOff + 7] = z11 - z4;
        dataOff += 8;
        /* advance pointer to next row */
      }
      /* Pass 2: process columns. */


      dataOff = 0;

      for (i = 0; i < I8; ++i) {
        d0 = data[dataOff];
        d1 = data[dataOff + 8];
        d2 = data[dataOff + 16];
        d3 = data[dataOff + 24];
        d4 = data[dataOff + 32];
        d5 = data[dataOff + 40];
        d6 = data[dataOff + 48];
        d7 = data[dataOff + 56];
        var tmp0p2 = d0 + d7;
        var tmp7p2 = d0 - d7;
        var tmp1p2 = d1 + d6;
        var tmp6p2 = d1 - d6;
        var tmp2p2 = d2 + d5;
        var tmp5p2 = d2 - d5;
        var tmp3p2 = d3 + d4;
        var tmp4p2 = d3 - d4;
        /* Even part */

        var tmp10p2 = tmp0p2 + tmp3p2;
        /* phase 2 */

        var tmp13p2 = tmp0p2 - tmp3p2;
        var tmp11p2 = tmp1p2 + tmp2p2;
        var tmp12p2 = tmp1p2 - tmp2p2;
        data[dataOff] = tmp10p2 + tmp11p2;
        /* phase 3 */

        data[dataOff + 32] = tmp10p2 - tmp11p2;
        var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
        /* c4 */

        data[dataOff + 16] = tmp13p2 + z1p2;
        /* phase 5 */

        data[dataOff + 48] = tmp13p2 - z1p2;
        /* Odd part */

        tmp10p2 = tmp4p2 + tmp5p2;
        /* phase 2 */

        tmp11p2 = tmp5p2 + tmp6p2;
        tmp12p2 = tmp6p2 + tmp7p2;
        /* The rotator is modified from fig 4-8 to avoid extra negations. */

        var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
        /* c6 */

        var z2p2 = 0.5411961 * tmp10p2 + z5p2;
        /* c2-c6 */

        var z4p2 = 1.306562965 * tmp12p2 + z5p2;
        /* c2+c6 */

        var z3p2 = tmp11p2 * 0.707106781;
        /* c4 */

        var z11p2 = tmp7p2 + z3p2;
        /* phase 5 */

        var z13p2 = tmp7p2 - z3p2;
        data[dataOff + 40] = z13p2 + z2p2;
        /* phase 6 */

        data[dataOff + 24] = z13p2 - z2p2;
        data[dataOff + 8] = z11p2 + z4p2;
        data[dataOff + 56] = z11p2 - z4p2;
        dataOff++;
        /* advance pointer to next column */
      } // Quantize/descale the coefficients


      var fDCTQuant;

      for (i = 0; i < I64; ++i) {
        // Apply the quantization and scaling factor & Round to nearest integer
        fDCTQuant = data[i] * fdtbl[i];
        this._outputfDCTQuant[i] = fDCTQuant > 0 ? fDCTQuant + 0.5 | 0 : fDCTQuant - 0.5 | 0; //outputfDCTQuant[i] = fround(fDCTQuant);
      }

      return this._outputfDCTQuant;
    }
    /* @internal */

  }, {
    key: "writeAPP0",
    value: function writeAPP0() {
      this.writeWord(0xFFE0); // marker

      this.writeWord(16); // length

      this.writeByte(0x4A); // J

      this.writeByte(0x46); // F

      this.writeByte(0x49); // I

      this.writeByte(0x46); // F

      this.writeByte(0); // = "JFIF",'\0'

      this.writeByte(1); // versionhi

      this.writeByte(1); // versionlo

      this.writeByte(0); // xyunits

      this.writeWord(1); // xdensity

      this.writeWord(1); // ydensity

      this.writeByte(0); // thumbnwidth

      this.writeByte(0); // thumbnheight
    }
    /* @internal */

  }, {
    key: "writeSOF0",
    value: function writeSOF0(width, height) {
      this.writeWord(0xFFC0); // marker

      this.writeWord(17); // length, truecolor YUV JPG

      this.writeByte(8); // precision

      this.writeWord(height);
      this.writeWord(width);
      this.writeByte(3); // nrofcomponents

      this.writeByte(1); // IdY

      this.writeByte(0x11); // HVY

      this.writeByte(0); // QTY

      this.writeByte(2); // IdU

      this.writeByte(0x11); // HVU

      this.writeByte(1); // QTU

      this.writeByte(3); // IdV

      this.writeByte(0x11); // HVV

      this.writeByte(1); // QTV
    }
    /* @internal */

  }, {
    key: "writeDQT",
    value: function writeDQT() {
      this.writeWord(0xFFDB); // marker

      this.writeWord(132); // length

      this.writeByte(0);

      for (var i = 0; i < 64; i++) {
        this.writeByte(this._yTable[i]);
      }

      this.writeByte(1);

      for (var j = 0; j < 64; j++) {
        this.writeByte(this._uvTable[j]);
      }
    }
    /* @internal */

  }, {
    key: "writeDHT",
    value: function writeDHT() {
      this.writeWord(0xFFC4); // marker

      this.writeWord(0x01A2); // length

      this.writeByte(0); // HTYDCinfo

      for (var i = 0; i < 16; i++) {
        this.writeByte(JpegEncoder.STD_DC_LUMINANCE_NRCODES[i + 1]);
      }

      for (var j = 0; j <= 11; j++) {
        this.writeByte(JpegEncoder.STD_DC_LUMINANCE_VALUES[j]);
      }

      this.writeByte(0x10); // HTYACinfo

      for (var k = 0; k < 16; k++) {
        this.writeByte(JpegEncoder.STD_AC_LUMINANCE_NRCODES[k + 1]);
      }

      for (var l = 0; l <= 161; l++) {
        this.writeByte(JpegEncoder.STD_AC_LUMINANCE_VALUES[l]);
      }

      this.writeByte(1); // HTUDCinfo

      for (var m = 0; m < 16; m++) {
        this.writeByte(JpegEncoder.STD_DC_CHROMINANCE_NRCODES[m + 1]);
      }

      for (var n = 0; n <= 11; n++) {
        this.writeByte(JpegEncoder.STD_DC_CHROMINANCE_VALUES[n]);
      }

      this.writeByte(0x11); // HTUACinfo

      for (var o = 0; o < 16; o++) {
        this.writeByte(JpegEncoder.STD_AC_CHROMINANCE_NRCODES[o + 1]);
      }

      for (var p = 0; p <= 161; p++) {
        this.writeByte(JpegEncoder.STD_AC_CHROMINANCE_VALUES[p]);
      }
    }
    /* @internal */

  }, {
    key: "writeSOS",
    value: function writeSOS() {
      this.writeWord(0xFFDA); // marker

      this.writeWord(12); // length

      this.writeByte(3); // nrofcomponents

      this.writeByte(1); // IdY

      this.writeByte(0); // HTY

      this.writeByte(2); // IdU

      this.writeByte(0x11); // HTU

      this.writeByte(3); // IdV

      this.writeByte(0x11); // HTV

      this.writeByte(0); // Ss

      this.writeByte(0x3F); // Se

      this.writeByte(0); // Bf
    }
    /* @internal */

  }, {
    key: "processDU",
    value: function processDU(CDU, fdtbl, passedDC, HTDC, HTAC) {
      var DC = passedDC;
      var EOB = HTAC[0x00];
      var m16zeroes = HTAC[0xF0];
      var pos;
      var I16 = 16;
      var I63 = 63;
      var I64 = 64;
      var DU_DCT = this.fDCTQuant(CDU, fdtbl); //ZigZag reorder

      for (var j = 0; j < I64; ++j) {
        this._du[JpegEncoder.SIG_ZAG[j]] = DU_DCT[j];
      }

      var diff = this._du[0] - DC;
      DC = this._du[0]; //Encode DC

      if (diff === 0) {
        this.writeBits(HTDC[0]); // Diff might be 0
      } else {
        pos = 32767 + diff;
        this.writeBits(HTDC[this._category[pos]]);
        this.writeBits(this._bitCode[pos]);
      } //Encode ACs


      var end0pos = 63; // was const... which is crazy

      for (; end0pos > 0 && this._du[end0pos] === 0; end0pos--) {} //end0pos = first element in reverse order !=0


      if (end0pos === 0) {
        this.writeBits(EOB);
        return DC;
      }

      var i = 1;
      var lng;

      while (i <= end0pos) {
        var startpos = i;

        for (; this._du[i] === 0 && i <= end0pos; ++i) {}

        var nrzeroes = i - startpos;

        if (nrzeroes >= I16) {
          lng = nrzeroes >> 4;

          for (var nrmarker = 1; nrmarker <= lng; ++nrmarker) {
            this.writeBits(m16zeroes);
          }

          nrzeroes = nrzeroes & 0xF;
        }

        pos = 32767 + this._du[i];
        this.writeBits(HTAC[(nrzeroes << 4) + this._category[pos]]);
        this.writeBits(this._bitCode[pos]);
        i++;
      }

      if (end0pos !== I63) {
        this.writeBits(EOB);
      }

      return DC;
    }
  }]);

  return JpegEncoder;
}();
/* @internal */


JpegEncoder.STD_DC_LUMINANCE_NRCODES = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
/* @internal */

JpegEncoder.STD_DC_LUMINANCE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* @internal */

JpegEncoder.STD_AC_LUMINANCE_NRCODES = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7D];
/* @internal */

JpegEncoder.STD_AC_LUMINANCE_VALUES = [0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12, 0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07, 0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xA1, 0x08, 0x23, 0x42, 0xB1, 0xC1, 0x15, 0x52, 0xD1, 0xF0, 0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0A, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE1, 0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA, 0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8, 0xF9, 0xFA];
/* @internal */

JpegEncoder.STD_DC_CHROMINANCE_NRCODES = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
/* @internal */

JpegEncoder.STD_DC_CHROMINANCE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* @internal */

JpegEncoder.STD_AC_CHROMINANCE_NRCODES = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
/* @internal */

JpegEncoder.STD_AC_CHROMINANCE_VALUES = [0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21, 0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71, 0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91, 0xA1, 0xB1, 0xC1, 0x09, 0x23, 0x33, 0x52, 0xF0, 0x15, 0x62, 0x72, 0xD1, 0x0A, 0x16, 0x24, 0x34, 0xE1, 0x25, 0xF1, 0x17, 0x18, 0x19, 0x1A, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8, 0xF9, 0xFA];
/* @internal */

JpegEncoder.SIG_ZAG = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
exports.JpegEncoder = JpegEncoder;

/***/ }),

/***/ "./dist/images/pngEncoder.js":
/*!***********************************!*\
  !*** ./dist/images/pngEncoder.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var deflate_1 = __importDefault(__webpack_require__(/*! pako/lib/deflate */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/deflate.js"));
/**
 * PNG Encoder.
 * Based on https://github.com/photopea/UPNG.js
 */


var PngEncoder =
/*#__PURE__*/
function () {
  function PngEncoder() {
    _classCallCheck(this, PngEncoder);
  }

  _createClass(PngEncoder, [{
    key: "encode",

    /**
     * Encode the image frames to png.
     * @param bufs The frame buffers to encode.
     * @param w The image width.
     * @param h The image height.
     * @returns The data for the image.
     */
    value: function encode(bufs, w, h) {
      var ps = 0;
      var forbidPlte = false;
      var dels = undefined;
      var data = new Uint8Array(bufs[0].byteLength * bufs.length + 100);
      var wr = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];

      for (var i = 0; i < 8; i++) {
        data[i] = wr[i];
      }

      var offset = 8;
      var nimg = this.compressPNG(bufs, w, h, ps, forbidPlte);
      this.writeUint(data, offset, 13);
      offset += 4;
      this.writeASCII(data, offset, "IHDR");
      offset += 4;
      this.writeUint(data, offset, w);
      offset += 4;
      this.writeUint(data, offset, h);
      offset += 4;
      data[offset] = nimg.depth;
      offset++;
      data[offset] = nimg.ctype;
      offset++;
      data[offset] = 0; // compress

      offset++;
      data[offset] = 0; // filter

      offset++;
      data[offset] = 0; // interlace

      offset++;
      this.writeUint(data, offset, this.crc(data, offset - 17, 17));
      offset += 4; // crc
      // 9 bytes to say, that it is sRGB

      this.writeUint(data, offset, 1);
      offset += 4;
      this.writeASCII(data, offset, "sRGB");
      offset += 4;
      data[offset] = 1;
      offset++;
      this.writeUint(data, offset, this.crc(data, offset - 5, 5));
      offset += 4; // crc

      var anim = bufs.length > 1;

      if (anim) {
        this.writeUint(data, offset, 8);
        offset += 4;
        this.writeASCII(data, offset, "acTL");
        offset += 4;
        this.writeUint(data, offset, bufs.length);
        offset += 4;
        this.writeUint(data, offset, 0);
        offset += 4;
        this.writeUint(data, offset, this.crc(data, offset - 12, 12));
        offset += 4; // crc
      }

      if (nimg.ctype === 3) {
        var dl = nimg.plte.length;
        this.writeUint(data, offset, dl * 3);
        offset += 4;
        this.writeASCII(data, offset, "PLTE");
        offset += 4;

        for (var _i = 0; _i < dl; _i++) {
          var ti = _i * 3;
          var c = nimg.plte[_i];
          var r = c & 255;
          var g = c >> 8 & 255;
          var b = c >> 16 & 255;
          data[offset + ti + 0] = r;
          data[offset + ti + 1] = g;
          data[offset + ti + 2] = b;
        }

        offset += dl * 3;
        this.writeUint(data, offset, this.crc(data, offset - dl * 3 - 4, dl * 3 + 4));
        offset += 4; // crc

        if (nimg.gotAlpha) {
          this.writeUint(data, offset, dl);
          offset += 4;
          this.writeASCII(data, offset, "tRNS");
          offset += 4;

          for (var _i2 = 0; _i2 < dl; _i2++) {
            data[offset + _i2] = nimg.plte[_i2] >> 24 & 255;
          }

          offset += dl;
          this.writeUint(data, offset, this.crc(data, offset - dl - 4, dl + 4));
          offset += 4; // crc
        }
      }

      var fi = 0;

      for (var j = 0; j < nimg.frames.length; j++) {
        var fr = nimg.frames[j];

        if (anim) {
          this.writeUint(data, offset, 26);
          offset += 4;
          this.writeASCII(data, offset, "fcTL");
          offset += 4;
          this.writeUint(data, offset, fi++);
          offset += 4;
          this.writeUint(data, offset, fr.rect.width);
          offset += 4;
          this.writeUint(data, offset, fr.rect.height);
          offset += 4;
          this.writeUint(data, offset, fr.rect.x);
          offset += 4;
          this.writeUint(data, offset, fr.rect.y);
          offset += 4;
          this.writeUshort(data, offset, dels[j]);
          offset += 2;
          this.writeUshort(data, offset, 1000);
          offset += 2;
          data[offset] = fr.dispose;
          offset++; // dispose

          data[offset] = fr.blend;
          offset++; // blend

          this.writeUint(data, offset, this.crc(data, offset - 30, 30));
          offset += 4; // crc
        }

        var imgd = fr.cimg;
        var _dl = imgd.length;
        this.writeUint(data, offset, _dl + (j === 0 ? 0 : 4));
        offset += 4;
        var ioff = offset;
        this.writeASCII(data, offset, j === 0 ? "IDAT" : "fdAT");
        offset += 4;

        if (j !== 0) {
          this.writeUint(data, offset, fi++);
          offset += 4;
        }

        for (var _i3 = 0; _i3 < _dl; _i3++) {
          data[offset + _i3] = imgd[_i3];
        }

        offset += _dl;
        this.writeUint(data, offset, this.crc(data, ioff, offset - ioff));
        offset += 4; // crc
      }

      this.writeUint(data, offset, 0);
      offset += 4;
      this.writeASCII(data, offset, "IEND");
      offset += 4;
      this.writeUint(data, offset, this.crc(data, offset - 4, 4));
      offset += 4; // crc

      return new Uint8Array(data.buffer.slice(0, offset));
    }
    /* @internal */

  }, {
    key: "compressPNG",
    value: function compressPNG(bufs, w, h, ps, forbidPlte) {
      var out = this.compress(bufs, w, h, ps, 0, forbidPlte);

      for (var i = 0; i < bufs.length; i++) {
        var frm = out.frames[i];
        var nw = frm.rect.width;
        var nh = frm.rect.height;
        var bpl = frm.bpl;
        var bpp = frm.bpp;
        var fdata = new Uint8Array(nw * bpl + nh);
        frm.cimg = this.filterZero(frm.img, nh, bpp, bpl, fdata);
      }

      return out;
    }
    /* @internal */

  }, {
    key: "compress",
    value: function compress(inBufs, w, h, inPs, forGIF, forbidPlte) {
      var ctype = 6;
      var depth = 8;
      var bpp = 4;
      var alphaAnd = 255;
      var ps = inPs;
      var bufs = inBufs;

      for (var j = 0; j < bufs.length; j++) {
        // when not quantized, other frames can contain colors, that are not in an initial frame
        var img = new Uint8Array(bufs[j]);
        var ilen = img.length;

        for (var i = 0; i < ilen; i += 4) {
          alphaAnd &= img[i + 3];
        }
      }

      var gotAlpha = alphaAnd !== 255;
      var cmap = {};
      var plte = [];

      if (bufs.length !== 0) {
        cmap[0] = 0;
        plte.push(0);

        if (ps !== 0) {
          ps--;
        }
      }

      if (ps !== 0) {
        var qres = this.quantize(bufs, ps, forGIF);
        bufs = qres.bufs;

        for (var _i4 = 0; _i4 < qres.plte.length; _i4++) {
          var c = qres.plte[_i4].est.rgba;

          if (cmap[c] == null) {
            cmap[c] = plte.length;
            plte.push(c);
          }
        }
      } else {
        // what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
        for (var _j = 0; _j < bufs.length; _j++) {
          // when not quantized, other frames can contain colors, that are not in an initial frame
          var img32 = new Uint32Array(bufs[_j]);
          var _ilen = img32.length;

          for (var _i5 = 0; _i5 < _ilen; _i5++) {
            var _c = img32[_i5];

            if ((_i5 < w || _c !== img32[_i5 - 1] && _c !== img32[_i5 - w]) && cmap[_c] == null) {
              cmap[_c] = plte.length;
              plte.push(_c);

              if (plte.length >= 300) {
                break;
              }
            }
          }
        }
      }

      var brute = gotAlpha ? forGIF : false; // brute : frames can only be copied, not "blended"

      var cc = plte.length;

      if (cc <= 256 && !forbidPlte) {
        if (cc <= 2) {
          depth = 1;
        } else if (cc <= 4) {
          depth = 2;
        } else if (cc <= 16) {
          depth = 4;
        } else {
          depth = 8;
        }

        if (forGIF) {
          depth = 8;
        }

        gotAlpha = true;
      }

      var frms = [];

      for (var _j2 = 0; _j2 < bufs.length; _j2++) {
        var cimg = new Uint8Array(bufs[_j2]);
        var cimg32 = new Uint32Array(cimg.buffer);
        var nx = 0;
        var ny = 0;
        var nw = w;
        var nh = h;
        var blend = 0;

        if (_j2 !== 0 && !brute) {
          var tlim = forGIF || _j2 === 1 || frms[frms.length - 2].dispose === 2 ? 1 : 2;
          var tstp = 0;
          var tarea = 1e9;

          for (var it = 0; it < tlim; it++) {
            var p32 = new Uint32Array(bufs[_j2 - 1 - it]);
            var mix = w;
            var miy = h;
            var max = -1;
            var may = -1;

            for (var y = 0; y < h; y++) {
              for (var x = 0; x < w; x++) {
                var _i6 = y * w + x;

                if (cimg32[_i6] !== p32[_i6]) {
                  if (x < mix) {
                    mix = x;
                  }

                  if (x > max) {
                    max = x;
                  }

                  if (y < miy) {
                    miy = y;
                  }

                  if (y > may) {
                    may = y;
                  }
                }
              }
            }

            var sarea = max === -1 ? 1 : (max - mix + 1) * (may - miy + 1);

            if (sarea < tarea) {
              tarea = sarea;
              tstp = it;

              if (max === -1) {
                nx = 0;
                ny = 0;
                nw = 1;
                nh = 1;
              } else {
                nx = mix;
                ny = miy;
                nw = max - mix + 1;
                nh = may - miy + 1;
              }
            }
          }

          var pimg = new Uint8Array(bufs[_j2 - 1 - tstp]);

          if (tstp === 1) {
            frms[frms.length - 1].dispose = 2;
          }

          var nimg = new Uint8Array(nw * nh * 4);
          this.copyTile(pimg, w, h, nimg, nw, nh, -nx, -ny, 0);

          if (this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 3)) {
            this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 2);
            blend = 1;
          } else {
            this.copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 0);
            blend = 0;
          }

          cimg = nimg;
          cimg32 = new Uint32Array(cimg.buffer);
        }

        var bpl = 4 * nw;

        if (cc <= 256 && !forbidPlte) {
          bpl = Math.ceil(depth * nw / 8);

          var _nimg = new Uint8Array(bpl * nh);

          for (var _y = 0; _y < nh; _y++) {
            var _i7 = _y * bpl;

            var ii = _y * nw;

            if (depth === 8) {
              for (var _x = 0; _x < nw; _x++) {
                _nimg[_i7 + _x] = cmap[cimg32[ii + _x]];
              }
            } else if (depth === 4) {
              for (var _x2 = 0; _x2 < nw; _x2++) {
                _nimg[_i7 + (_x2 >> 1)] |= cmap[cimg32[ii + _x2]] << 4 - (_x2 & 1) * 4;
              }
            } else if (depth === 2) {
              for (var _x3 = 0; _x3 < nw; _x3++) {
                _nimg[_i7 + (_x3 >> 2)] |= cmap[cimg32[ii + _x3]] << 6 - (_x3 & 3) * 2;
              }
            } else if (depth === 1) {
              for (var _x4 = 0; _x4 < nw; _x4++) {
                _nimg[_i7 + (_x4 >> 3)] |= cmap[cimg32[ii + _x4]] << 7 - (_x4 & 7) * 1;
              }
            }
          }

          cimg = _nimg;
          ctype = 3;
          bpp = 1;
        } else if (!gotAlpha && bufs.length === 1) {
          // some next "reduced" frames may contain alpha for blending
          var _nimg2 = new Uint8Array(nw * nh * 3);

          var area = nw * nh;

          for (var _i8 = 0; _i8 < area; _i8++) {
            var ti = _i8 * 3;
            var qi = _i8 * 4;
            _nimg2[ti] = cimg[qi];
            _nimg2[ti + 1] = cimg[qi + 1];
            _nimg2[ti + 2] = cimg[qi + 2];
          }

          cimg = _nimg2;
          ctype = 2;
          bpp = 3;
          bpl = 3 * nw;
        }

        frms.push({
          rect: {
            x: nx,
            y: ny,
            width: nw,
            height: nh
          },
          img: cimg,
          bpl: bpl,
          bpp: bpp,
          blend: blend,
          dispose: brute ? 1 : 0
        });
      }

      return {
        ctype: ctype,
        depth: depth,
        plte: plte,
        gotAlpha: gotAlpha,
        frames: frms
      };
    }
    /* @internal */

  }, {
    key: "filterZero",
    value: function filterZero(img, h, bpp, bpl, data) {
      var fls = [];

      for (var t = 0; t < 5; t++) {
        if (h * bpl > 500000 && (t === 2 || t === 3 || t === 4)) {
          continue;
        }

        for (var y = 0; y < h; y++) {
          this.filterLine(data, img, y, bpl, bpp, t);
        }

        fls.push(deflate_1.default.deflate(data));

        if (bpp === 1) {
          break;
        }
      }

      var ti;
      var tsize = 1e9;

      for (var i = 0; i < fls.length; i++) {
        if (fls[i].length < tsize) {
          ti = i;
          tsize = fls[i].length;
        }
      }

      return fls[ti];
    }
    /* @internal */

  }, {
    key: "filterLine",
    value: function filterLine(data, img, y, bpl, bpp, type) {
      var i = y * bpl;
      var di = i + y;
      data[di] = type;
      di++;

      if (type === 0) {
        for (var x = 0; x < bpl; x++) {
          data[di + x] = img[i + x];
        }
      } else if (type === 1) {
        for (var _x5 = 0; _x5 < bpp; _x5++) {
          data[di + _x5] = img[i + _x5];
        }

        for (var _x6 = bpp; _x6 < bpl; _x6++) {
          data[di + _x6] = img[i + _x6] - img[i + _x6 - bpp] + 256 & 255;
        }
      } else if (y === 0) {
        for (var _x7 = 0; _x7 < bpp; _x7++) {
          data[di + _x7] = img[i + _x7];
        }

        if (type === 2) {
          for (var _x8 = bpp; _x8 < bpl; _x8++) {
            data[di + _x8] = img[i + _x8];
          }
        }

        if (type === 3) {
          for (var _x9 = bpp; _x9 < bpl; _x9++) {
            data[di + _x9] = img[i + _x9] - (img[i + _x9 - bpp] >> 1) + 256 & 255;
          }
        }

        if (type === 4) {
          for (var _x10 = bpp; _x10 < bpl; _x10++) {
            data[di + _x10] = img[i + _x10] - this.paeth(img[i + _x10 - bpp], 0, 0) + 256 & 255;
          }
        }
      } else {
        if (type === 2) {
          for (var _x11 = 0; _x11 < bpl; _x11++) {
            data[di + _x11] = img[i + _x11] + 256 - img[i + _x11 - bpl] & 255;
          }
        }

        if (type === 3) {
          for (var _x12 = 0; _x12 < bpp; _x12++) {
            data[di + _x12] = img[i + _x12] + 256 - (img[i + _x12 - bpl] >> 1) & 255;
          }

          for (var _x13 = bpp; _x13 < bpl; _x13++) {
            data[di + _x13] = img[i + _x13] + 256 - (img[i + _x13 - bpl] + img[i + _x13 - bpp] >> 1) & 255;
          }
        }

        if (type === 4) {
          for (var _x14 = 0; _x14 < bpp; _x14++) {
            data[di + _x14] = img[i + _x14] + 256 - this.paeth(0, img[i + _x14 - bpl], 0) & 255;
          }

          for (var _x15 = bpp; _x15 < bpl; _x15++) {
            data[di + _x15] = img[i + _x15] + 256 - this.paeth(img[i + _x15 - bpp], img[i + _x15 - bpl], img[i + _x15 - bpp - bpl]) & 255;
          }
        }
      }
    }
    /* @internal */

  }, {
    key: "paeth",
    value: function paeth(a, b, c) {
      var p = a + b - c;
      var pa = Math.abs(p - a);
      var pb = Math.abs(p - b);
      var pc = Math.abs(p - c);

      if (pa <= pb && pa <= pc) {
        return a;
      } else if (pb <= pc) {
        return b;
      }

      return c;
    }
    /* @internal */

  }, {
    key: "writeASCII",
    value: function writeASCII(data, p, s) {
      for (var i = 0; i < s.length; i++) {
        data[p + i] = s.charCodeAt(i);
      }
    }
    /* @internal */

  }, {
    key: "writeUint",
    value: function writeUint(buff, p, n) {
      buff[p] = n >> 24 & 255;
      buff[p + 1] = n >> 16 & 255;
      buff[p + 2] = n >> 8 & 255;
      buff[p + 3] = n & 255;
    }
    /* @internal */

  }, {
    key: "writeUshort",
    value: function writeUshort(buff, p, n) {
      buff[p] = n >> 8 & 255;
      buff[p + 1] = n & 255;
    }
    /* @internal */

  }, {
    key: "copyTile",
    value: function copyTile(sb, sw, sh, tb, tw, th, xoff, yoff, mode) {
      var w = Math.min(sw, tw);
      var h = Math.min(sh, th);
      var si = 0;
      var ti = 0;

      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          if (xoff >= 0 && yoff >= 0) {
            si = y * sw + x << 2;
            ti = (yoff + y) * tw + xoff + x << 2;
          } else {
            si = (-yoff + y) * sw - xoff + x << 2;
            ti = y * tw + x << 2;
          }

          if (mode === 0) {
            tb[ti] = sb[si];
            tb[ti + 1] = sb[si + 1];
            tb[ti + 2] = sb[si + 2];
            tb[ti + 3] = sb[si + 3];
          } else if (mode === 1) {
            var fa = sb[si + 3] * (1 / 255);
            var fr = sb[si] * fa;
            var fg = sb[si + 1] * fa;
            var fb = sb[si + 2] * fa;
            var ba = tb[ti + 3] * (1 / 255);
            var br = tb[ti] * ba;
            var bg = tb[ti + 1] * ba;
            var bb = tb[ti + 2] * ba;
            var ifa = 1 - fa;
            var oa = fa + ba * ifa;
            var ioa = oa === 0 ? 0 : 1 / oa;
            tb[ti + 3] = 255 * oa;
            tb[ti + 0] = (fr + br * ifa) * ioa;
            tb[ti + 1] = (fg + bg * ifa) * ioa;
            tb[ti + 2] = (fb + bb * ifa) * ioa;
          } else if (mode === 2) {
            // copy only differences, otherwise zero
            var _fa = sb[si + 3];
            var _fr = sb[si];
            var _fg = sb[si + 1];
            var _fb = sb[si + 2];
            var _ba = tb[ti + 3];
            var _br = tb[ti];
            var _bg = tb[ti + 1];
            var _bb = tb[ti + 2];

            if (_fa === _ba && _fr === _br && _fg === _bg && _fb === _bb) {
              tb[ti] = 0;
              tb[ti + 1] = 0;
              tb[ti + 2] = 0;
              tb[ti + 3] = 0;
            } else {
              tb[ti] = _fr;
              tb[ti + 1] = _fg;
              tb[ti + 2] = _fb;
              tb[ti + 3] = _fa;
            }
          } else if (mode === 3) {
            // check if can be blended
            var _fa2 = sb[si + 3];
            var _fr2 = sb[si];
            var _fg2 = sb[si + 1];
            var _fb2 = sb[si + 2];
            var _ba2 = tb[ti + 3];
            var _br2 = tb[ti];
            var _bg2 = tb[ti + 1];
            var _bb2 = tb[ti + 2];

            if (_fa2 === _ba2 && _fr2 === _br2 && _fg2 === _bg2 && _fb2 === _bb2) {
              continue;
            } //if(fa!=255 && ba!=0) return false;


            if (_fa2 < 220 && _ba2 > 20) {
              return false;
            }
          }
        }
      }

      return true;
    }
    /* @internal */

  }, {
    key: "crc",
    value: function crc(b, o, l) {
      return this.crcUpdate(0xFFFFFFFF, b, o, l) ^ 0xFFFFFFFF;
    }
    /* @internal */

  }, {
    key: "crcUpdate",
    value: function crcUpdate(c, buf, off, len) {
      var localC = c;
      var crcTable = this.crcTable();

      for (var i = 0; i < len; i++) {
        localC = crcTable[(localC ^ buf[off + i]) & 0xFF] ^ localC >>> 8;
      }

      return localC;
    }
    /* @internal */

  }, {
    key: "crcTable",
    value: function crcTable() {
      var tab = new Uint32Array(256);

      for (var n = 0; n < 256; n++) {
        var c = n;

        for (var k = 0; k < 8; k++) {
          if (c & 1) {
            c = 0xEDB88320 ^ c >>> 1;
          } else {
            c = c >>> 1;
          }
        }

        tab[n] = c;
      }

      return tab;
    }
    /* @internal */

  }, {
    key: "quantize",
    value: function quantize(bufs, ps, roundAlpha) {
      var imgs = [];
      var totl = 0;

      for (var i = 0; i < bufs.length; i++) {
        imgs.push(this.alphaMul(new Uint8Array(bufs[i]), roundAlpha));
        totl += bufs[i].byteLength;
      }

      var nimg = new Uint8Array(totl);
      var nimg32 = new Uint32Array(nimg.buffer);
      var noff = 0;

      for (var _i9 = 0; _i9 < imgs.length; _i9++) {
        var img = imgs[_i9];
        var il = img.length;

        for (var j = 0; j < il; j++) {
          nimg[noff + j] = img[j];
        }

        noff += il;
      }

      var root = {
        i0: 0,
        i1: nimg.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      }; // basic statistic, extra statistic

      root.bst = this.quantizeStats(nimg, root.i0, root.i1);
      root.est = this.quantizeEstats(root.bst);
      var leafs = [root];

      while (leafs.length < ps) {
        var maxL = 0;
        var mi = 0;

        for (var _i10 = 0; _i10 < leafs.length; _i10++) {
          if (leafs[_i10].est.L > maxL) {
            maxL = leafs[_i10].est.L;
            mi = _i10;
          }
        }

        if (maxL < 1e-3) {
          break;
        }

        var node = leafs[mi];
        var s0 = this.quantizeSplitPixels(nimg, nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);
        var ln = {
          i0: node.i0,
          i1: s0,
          bst: null,
          est: null,
          tdst: 0,
          left: null,
          right: null
        };
        ln.bst = this.quantizeStats(nimg, ln.i0, ln.i1);
        ln.est = this.quantizeEstats(ln.bst);
        var rn = {
          i0: s0,
          i1: node.i1,
          bst: null,
          est: null,
          tdst: 0,
          left: null,
          right: null
        };
        rn.bst = {
          R: [],
          m: [],
          N: node.bst.N - ln.bst.N
        };

        for (var _i11 = 0; _i11 < 16; _i11++) {
          rn.bst.R[_i11] = node.bst.R[_i11] - ln.bst.R[_i11];
        }

        for (var _i12 = 0; _i12 < 4; _i12++) {
          rn.bst.m[_i12] = node.bst.m[_i12] - ln.bst.m[_i12];
        }

        rn.est = this.quantizeEstats(rn.bst);
        node.left = ln;
        node.right = rn;
        leafs[mi] = ln;
        leafs.push(rn);
      }

      leafs.sort(function (a, b) {
        return b.bst.N - a.bst.N;
      });
      var outBufs = [];

      for (var ii = 0; ii < imgs.length; ii++) {
        var sb = new Uint8Array(imgs[ii]);
        var tb = new Uint32Array(imgs[ii]);
        var len = sb.length;

        for (var _i13 = 0; _i13 < len; _i13 += 4) {
          var r = sb[_i13] * (1 / 255);
          var g = sb[_i13 + 1] * (1 / 255);
          var b = sb[_i13 + 2] * (1 / 255);
          var a = sb[_i13 + 3] * (1 / 255); //  exact, but too slow :(
          //var nd = UPNG.quantize.getNearest(root, r, g, b, a);

          var nd = root;

          while (nd.left) {
            nd = this.quantizePlaneDst(nd.est, r, g, b, a) <= 0 ? nd.left : nd.right;
          }

          tb[_i13 >> 2] = nd.est.rgba;
        }

        outBufs[ii] = tb.buffer;
      }

      return {
        bufs: outBufs,
        plte: leafs
      };
    }
    /* @internal */

  }, {
    key: "quantizeStats",
    value: function quantizeStats(nimg, i0, i1) {
      var R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var m = [0, 0, 0, 0];
      var N = i1 - i0 >> 2;

      for (var i = i0; i < i1; i += 4) {
        var r = nimg[i] * (1 / 255);
        var g = nimg[i + 1] * (1 / 255);
        var b = nimg[i + 2] * (1 / 255);
        var a = nimg[i + 3] * (1 / 255); //let r = nimg[i], g = nimg[i+1], b = nimg[i+2], a = nimg[i+3];

        m[0] += r;
        m[1] += g;
        m[2] += b;
        m[3] += a;
        R[0] += r * r;
        R[1] += r * g;
        R[2] += r * b;
        R[3] += r * a;
        R[5] += g * g;
        R[6] += g * b;
        R[7] += g * a;
        R[10] += b * b;
        R[11] += b * a;
        R[15] += a * a;
      }

      R[4] = R[1];
      R[8] = R[2];
      R[12] = R[3];
      R[9] = R[6];
      R[13] = R[7];
      R[14] = R[11];
      return {
        R: R,
        m: m,
        N: N
      };
    }
    /* @internal */

  }, {
    key: "quantizeEstats",
    value: function quantizeEstats(stats) {
      var R = stats.R;
      var m = stats.m;
      var N = stats.N;
      var m0 = m[0];
      var m1 = m[1];
      var m2 = m[2];
      var m3 = m[3];
      var iN = N === 0 ? 0 : 1 / N;
      var rj = [R[0] - m0 * m0 * iN, R[1] - m0 * m1 * iN, R[2] - m0 * m2 * iN, R[3] - m0 * m3 * iN, R[4] - m1 * m0 * iN, R[5] - m1 * m1 * iN, R[6] - m1 * m2 * iN, R[7] - m1 * m3 * iN, R[8] - m2 * m0 * iN, R[9] - m2 * m1 * iN, R[10] - m2 * m2 * iN, R[11] - m2 * m3 * iN, R[12] - m3 * m0 * iN, R[13] - m3 * m1 * iN, R[14] - m3 * m2 * iN, R[15] - m3 * m3 * iN];
      var A = rj;
      var b = [0.5, 0.5, 0.5, 0.5];
      var mi = 0;
      var tmi = 0;

      if (N !== 0) {
        for (var i = 0; i < 10; i++) {
          b = this.m4MultVec(A, b);
          tmi = Math.sqrt(this.m4Dot(b, b));
          b = this.m4Sml(1 / tmi, b);

          if (Math.abs(tmi - mi) < 1e-9) {
            break;
          }

          mi = tmi;
        }
      } //b = [0,0,1,0];  mi=N;


      var q = [m0 * iN, m1 * iN, m2 * iN, m3 * iN];
      var eMq255 = this.m4Dot(this.m4Sml(255, q), b);
      var ia = q[3] < 0.001 ? 0 : 1 / q[3];
      return {
        Cov: rj,
        q: q,
        e: b,
        L: mi,
        eMq255: eMq255,
        eMq: this.m4Dot(b, q),
        rgba: (Math.round(255 * q[3]) << 24 | Math.round(255 * q[2] * ia) << 16 | Math.round(255 * q[1] * ia) << 8 | Math.round(255 * q[0] * ia) << 0) >>> 0
      };
    }
    /* @internal */

  }, {
    key: "quantizePlaneDst",
    value: function quantizePlaneDst(est, r, g, b, a) {
      var e = est.e;
      return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq;
    }
    /* @internal */

  }, {
    key: "quantizeSplitPixels",
    value: function quantizeSplitPixels(nimg, nimg32, i0in, i1in, e, eMq) {
      var i1 = i1in - 4;
      var i0 = i0in;

      while (i0 < i1) {
        while (this.quantizeVecDot(nimg, i0, e) <= eMq) {
          i0 += 4;
        }

        while (this.quantizeVecDot(nimg, i1, e) > eMq) {
          i1 -= 4;
        }

        if (i0 >= i1) {
          break;
        }

        var t = nimg32[i0 >> 2];
        nimg32[i0 >> 2] = nimg32[i1 >> 2];
        nimg32[i1 >> 2] = t;
        i0 += 4;
        i1 -= 4;
      }

      while (this.quantizeVecDot(nimg, i0, e) > eMq) {
        i0 -= 4;
      }

      return i0 + 4;
    }
    /* @internal */

  }, {
    key: "quantizeVecDot",
    value: function quantizeVecDot(nimg, i, e) {
      return nimg[i] * e[0] + nimg[i + 1] * e[1] + nimg[i + 2] * e[2] + nimg[i + 3] * e[3];
    }
    /* @internal */

  }, {
    key: "m4MultVec",
    value: function m4MultVec(m, v) {
      return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3], m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3], m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3], m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3]];
    }
    /* @internal */

  }, {
    key: "m4Dot",
    value: function m4Dot(x, y) {
      return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3];
    }
    /* @internal */

  }, {
    key: "m4Sml",
    value: function m4Sml(a, y) {
      return [a * y[0], a * y[1], a * y[2], a * y[3]];
    }
    /* @internal */

  }, {
    key: "alphaMul",
    value: function alphaMul(img, roundA) {
      var nimg = new Uint8Array(img.length);
      var area = img.length >> 2;

      for (var i = 0; i < area; i++) {
        var qi = i << 2;
        var ia = img[qi + 3];

        if (roundA) {
          ia = ia < 128 ? 0 : 255;
        }

        var a = ia * (1 / 255);
        nimg[qi + 0] = img[qi + 0] * a;
        nimg[qi + 1] = img[qi + 1] * a;
        nimg[qi + 2] = img[qi + 2] * a;
        nimg[qi + 3] = ia;
      }

      return nimg;
    }
  }]);

  return PngEncoder;
}();

exports.PngEncoder = PngEncoder;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./initRender */ "./dist/initRender.js"));

__export(__webpack_require__(/*! ./factories/qrRendererFactory */ "./dist/factories/qrRendererFactory.js"));

__export(__webpack_require__(/*! ./helpers/imageHelper */ "./dist/helpers/imageHelper.js"));

__export(__webpack_require__(/*! ./images/jpegEncoder */ "./dist/images/jpegEncoder.js"));

__export(__webpack_require__(/*! ./images/pngEncoder */ "./dist/images/pngEncoder.js"));

__export(__webpack_require__(/*! ./renderTypes/jpegRenderer */ "./dist/renderTypes/jpegRenderer.js"));

__export(__webpack_require__(/*! ./renderTypes/jpegRendererOptions */ "./dist/renderTypes/jpegRendererOptions.js"));

__export(__webpack_require__(/*! ./renderTypes/canvasRenderer */ "./dist/renderTypes/canvasRenderer.js"));

__export(__webpack_require__(/*! ./renderTypes/canvasRendererOptions */ "./dist/renderTypes/canvasRendererOptions.js"));

__export(__webpack_require__(/*! ./renderTypes/pngRenderer */ "./dist/renderTypes/pngRenderer.js"));

__export(__webpack_require__(/*! ./renderTypes/pngRendererOptions */ "./dist/renderTypes/pngRendererOptions.js"));

__export(__webpack_require__(/*! ./renderTypes/svgRenderer */ "./dist/renderTypes/svgRenderer.js"));

__export(__webpack_require__(/*! ./renderTypes/svgRendererOptions */ "./dist/renderTypes/svgRendererOptions.js"));

__export(__webpack_require__(/*! ./renderTypes/textRenderer */ "./dist/renderTypes/textRenderer.js"));

__export(__webpack_require__(/*! ./renderTypes/textRendererOptions */ "./dist/renderTypes/textRendererOptions.js"));

/***/ }),

/***/ "./dist/initRender.js":
/*!****************************!*\
  !*** ./dist/initRender.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Initialize the factories.
 */

var qrRendererFactory_1 = __webpack_require__(/*! ./factories/qrRendererFactory */ "./dist/factories/qrRendererFactory.js");

var canvasRenderer_1 = __webpack_require__(/*! ./renderTypes/canvasRenderer */ "./dist/renderTypes/canvasRenderer.js");

var jpegRenderer_1 = __webpack_require__(/*! ./renderTypes/jpegRenderer */ "./dist/renderTypes/jpegRenderer.js");

var pngRenderer_1 = __webpack_require__(/*! ./renderTypes/pngRenderer */ "./dist/renderTypes/pngRenderer.js");

var svgRenderer_1 = __webpack_require__(/*! ./renderTypes/svgRenderer */ "./dist/renderTypes/svgRenderer.js");

var textRenderer_1 = __webpack_require__(/*! ./renderTypes/textRenderer */ "./dist/renderTypes/textRenderer.js");

function initRender() {
  qrRendererFactory_1.QRRendererFactory.instance().register("canvas", function (opts) {
    return new canvasRenderer_1.CanvasRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("text", function (opts) {
    return new textRenderer_1.TextRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("svg", function (opts) {
    return new svgRenderer_1.SvgRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("jpeg", function (opts) {
    return new jpegRenderer_1.JpegRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("png", function (opts) {
    return new pngRenderer_1.PngRenderer(opts);
  });
}

exports.initRender = initRender;

/***/ }),

/***/ "./dist/renderTypes/canvasRenderer.js":
/*!********************************************!*\
  !*** ./dist/renderTypes/canvasRenderer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");
/**
 * Class to render qr data as canvas.
 */


var CanvasRenderer =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Svg renderer.
   * @param options The options for the renderer.
   */
  function CanvasRenderer(options) {
    _classCallCheck(this, CanvasRenderer);

    this._options = options || {};
    this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
    this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
    this._options.cssClass = this._options.cssClass || "qr-canvas";
  }
  /**
   * Render the QR code data as an canvas.
   * @param cellData The cell data for the QR code.
   * @param cellSize The size of each cell.
   * @param marginSize The margin to keep around the qr code.
   * @returns The SVG content.
   */


  _createClass(CanvasRenderer, [{
    key: "renderRaw",
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
                throw new Error("renderRaw is not supported for <canvas>");

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      };
    }()
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */

  }, {
    key: "renderHtml",
    value: function () {
      var _renderHtml = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            dimensions,
            canvas,
            context,
            x,
            y,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;

                if (arrayHelper_1.ArrayHelper.isArray(cellData)) {
                  _context2.next = 4;
                  break;
                }

                throw new Error("The cellData must be of type QRCellData");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0)) {
                  _context2.next = 6;
                  break;
                }

                throw new Error("The cellSize must be a number > 0, it is ".concat(cellSize));

              case 6:
                if (!(!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error("The marginSize must be a number >= 0, it is ".concat(marginSize));

              case 8:
                dimensions = cellData.length * cellSize + 2 * marginSize;
                canvas = document.createElement("canvas");
                canvas.classList.add(this._options.cssClass);
                canvas.width = dimensions;
                canvas.height = dimensions;
                context = canvas.getContext("2d");
                context.fillStyle = this._options.background.rgbaText();
                context.fillRect(0, 0, dimensions, dimensions);
                context.fillStyle = this._options.foreground.rgbaText();

                for (x = 0; x < cellData.length; x++) {
                  for (y = 0; y < cellData[x].length; y++) {
                    if (cellData[x][y]) {
                      context.fillRect(x * cellSize + marginSize, y * cellSize + marginSize, cellSize, cellSize);
                    }
                  }
                }

                return _context2.abrupt("return", canvas);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      };
    }()
  }]);

  return CanvasRenderer;
}();

exports.CanvasRenderer = CanvasRenderer;

/***/ }),

/***/ "./dist/renderTypes/canvasRendererOptions.js":
/*!***************************************************!*\
  !*** ./dist/renderTypes/canvasRendererOptions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Options for Canvas renderer.
 */

var CanvasRendererOptions = function CanvasRendererOptions() {
  _classCallCheck(this, CanvasRendererOptions);
};

exports.CanvasRendererOptions = CanvasRendererOptions;

/***/ }),

/***/ "./dist/renderTypes/jpegRenderer.js":
/*!******************************************!*\
  !*** ./dist/renderTypes/jpegRenderer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var imageHelper_1 = __webpack_require__(/*! ../helpers/imageHelper */ "./dist/helpers/imageHelper.js");

var jpegEncoder_1 = __webpack_require__(/*! ../images/jpegEncoder */ "./dist/images/jpegEncoder.js");
/**
 * Class to render qr data as bitmap.
 */


var JpegRenderer =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Svg renderer.
   * @param options The options for the renderer.
   */
  function JpegRenderer(options) {
    _classCallCheck(this, JpegRenderer);

    this._options = options || {};
    this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
    this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
    this._options.cssClass = this._options.cssClass || "qr-jpeg";
  }
  /**
   * Render the QR code data as a bitmap.
   * @param cellData The cell data for the QR code.
   * @param cellSize The size of each cell.
   * @param marginSize The margin to keep around the qr code.
   * @returns The bitmap content.
   */


  _createClass(JpegRenderer, [{
    key: "renderRaw",
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            dimensions,
            data,
            i,
            dc,
            x,
            row,
            r,
            _i,
            y,
            colour,
            c,
            _i2,
            _c,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;

                if (arrayHelper_1.ArrayHelper.isArray(cellData)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("The cellData must be of type QRCellData");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0)) {
                  _context.next = 6;
                  break;
                }

                throw new Error("The cellSize must be a number > 0, it is ".concat(cellSize));

              case 6:
                if (!(!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0)) {
                  _context.next = 8;
                  break;
                }

                throw new Error("The marginSize must be a number >= 0, it is ".concat(marginSize));

              case 8:
                dimensions = cellData.length * cellSize + 2 * marginSize;
                data = new Uint8Array(dimensions * dimensions * 4);

                for (i = 0; i < data.length; i += 4) {
                  data[i] = this._options.background.red();
                  data[i + 1] = this._options.background.green();
                  data[i + 2] = this._options.background.blue();
                  data[i + 3] = 0xFF;
                }

                dc = marginSize * dimensions * 4;

                for (x = 0; x < cellData.length; x++) {
                  row = new Uint8Array(dimensions * 4);
                  r = 0;

                  for (_i = 0; _i < marginSize; _i++) {
                    row[r++] = this._options.background.red();
                    row[r++] = this._options.background.green();
                    row[r++] = this._options.background.blue();
                    row[r++] = 0xFF;
                  }

                  for (y = 0; y < cellData[x].length; y++) {
                    colour = cellData[y][x] ? this._options.foreground : this._options.background;

                    for (c = 0; c < cellSize; c++) {
                      row[r++] = colour.red();
                      row[r++] = colour.green();
                      row[r++] = colour.blue();
                      row[r++] = 0xFF;
                    }
                  }

                  for (_i2 = 0; _i2 < marginSize; _i2++) {
                    row[r++] = this._options.background.red();
                    row[r++] = this._options.background.green();
                    row[r++] = this._options.background.blue();
                    row[r++] = 0xFF;
                  }

                  for (_c = 0; _c < cellSize; _c++) {
                    data.set(row, dc);
                    dc += row.length;
                  }
                }

                return _context.abrupt("return", new jpegEncoder_1.JpegEncoder().encode(dimensions, dimensions, data, 75));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      };
    }()
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */

  }, {
    key: "renderHtml",
    value: function () {
      var _renderHtml = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            img,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
                _context2.next = 4;
                return this.renderRaw(cellData, cellSize, marginSize);

              case 4:
                raw = _context2.sent;
                img = document.createElement("img");
                img.classList.add(this._options.cssClass);
                img.src = imageHelper_1.ImageHelper.dataToImageSource("image/jpeg", raw);
                return _context2.abrupt("return", img);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      };
    }()
  }]);

  return JpegRenderer;
}();

exports.JpegRenderer = JpegRenderer;

/***/ }),

/***/ "./dist/renderTypes/jpegRendererOptions.js":
/*!*************************************************!*\
  !*** ./dist/renderTypes/jpegRendererOptions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Options for Jpeg renderer.
 */

var JpegRendererOptions = function JpegRendererOptions() {
  _classCallCheck(this, JpegRendererOptions);
};

exports.JpegRendererOptions = JpegRendererOptions;

/***/ }),

/***/ "./dist/renderTypes/pngRenderer.js":
/*!*****************************************!*\
  !*** ./dist/renderTypes/pngRenderer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var imageHelper_1 = __webpack_require__(/*! ../helpers/imageHelper */ "./dist/helpers/imageHelper.js");

var pngEncoder_1 = __webpack_require__(/*! ../images/pngEncoder */ "./dist/images/pngEncoder.js");
/**
 * Class to render qr data as png.
 */


var PngRenderer =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Svg renderer.
   * @param options The options for the renderer.
   */
  function PngRenderer(options) {
    _classCallCheck(this, PngRenderer);

    this._options = options || {};
    this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
    this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
    this._options.cssClass = this._options.cssClass || "qr-png";
  }
  /**
   * Render the QR code data as a bitmap.
   * @param cellData The cell data for the QR code.
   * @param cellSize The size of each cell.
   * @param marginSize The margin to keep around the qr code.
   * @returns The bitmap content.
   */


  _createClass(PngRenderer, [{
    key: "renderRaw",
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            dimensions,
            data,
            i,
            dc,
            x,
            row,
            r,
            _i,
            y,
            colour,
            c,
            _i2,
            _c,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;

                if (arrayHelper_1.ArrayHelper.isArray(cellData)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("The cellData must be of type QRCellData");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0)) {
                  _context.next = 6;
                  break;
                }

                throw new Error("The cellSize must be a number > 0, it is ".concat(cellSize));

              case 6:
                if (!(!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0)) {
                  _context.next = 8;
                  break;
                }

                throw new Error("The marginSize must be a number >= 0, it is ".concat(marginSize));

              case 8:
                dimensions = cellData.length * cellSize + 2 * marginSize;
                data = new Uint8Array(dimensions * dimensions * 4);

                for (i = 0; i < data.length; i += 4) {
                  data[i] = this._options.background.red();
                  data[i + 1] = this._options.background.green();
                  data[i + 2] = this._options.background.blue();
                  data[i + 3] = this._options.background.alpha();
                }

                dc = marginSize * dimensions * 4;

                for (x = 0; x < cellData.length; x++) {
                  row = new Uint8Array(dimensions * 4);
                  r = 0;

                  for (_i = 0; _i < marginSize; _i++) {
                    row[r++] = this._options.background.red();
                    row[r++] = this._options.background.green();
                    row[r++] = this._options.background.blue();
                    row[r++] = this._options.background.alpha();
                  }

                  for (y = 0; y < cellData[x].length; y++) {
                    colour = cellData[y][x] ? this._options.foreground : this._options.background;

                    for (c = 0; c < cellSize; c++) {
                      row[r++] = colour.red();
                      row[r++] = colour.green();
                      row[r++] = colour.blue();
                      row[r++] = colour.alpha();
                    }
                  }

                  for (_i2 = 0; _i2 < marginSize; _i2++) {
                    row[r++] = this._options.background.red();
                    row[r++] = this._options.background.green();
                    row[r++] = this._options.background.blue();
                    row[r++] = this._options.background.alpha();
                  }

                  for (_c = 0; _c < cellSize; _c++) {
                    data.set(row, dc);
                    dc += row.length;
                  }
                }

                return _context.abrupt("return", new pngEncoder_1.PngEncoder().encode([data.buffer], dimensions, dimensions));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      };
    }()
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */

  }, {
    key: "renderHtml",
    value: function () {
      var _renderHtml = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            img,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
                _context2.next = 4;
                return this.renderRaw(cellData, cellSize, marginSize);

              case 4:
                raw = _context2.sent;
                img = document.createElement("img");
                img.classList.add(this._options.cssClass);
                img.src = imageHelper_1.ImageHelper.dataToImageSource("image/png", raw);
                return _context2.abrupt("return", img);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      };
    }()
  }]);

  return PngRenderer;
}();

exports.PngRenderer = PngRenderer;

/***/ }),

/***/ "./dist/renderTypes/pngRendererOptions.js":
/*!************************************************!*\
  !*** ./dist/renderTypes/pngRendererOptions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Options for Png renderer.
 */

var PngRendererOptions = function PngRendererOptions() {
  _classCallCheck(this, PngRendererOptions);
};

exports.PngRendererOptions = PngRendererOptions;

/***/ }),

/***/ "./dist/renderTypes/svgRenderer.js":
/*!*****************************************!*\
  !*** ./dist/renderTypes/svgRenderer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");
/**
 * Class to render qr data as svg.
 */


var SvgRenderer =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Svg renderer.
   * @param options The options for the renderer.
   */
  function SvgRenderer(options) {
    _classCallCheck(this, SvgRenderer);

    this._options = options || {};
    this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");
    this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
    this._options.cssClass = this._options.cssClass || "qr-svg";
  }
  /**
   * Render the QR code data as an SVG.
   * @param cellData The cell data for the QR code.
   * @param cellSize The size of each cell.
   * @param marginSize The margin to keep around the qr code.
   * @returns The SVG content.
   */


  _createClass(SvgRenderer, [{
    key: "renderRaw",
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            rendered,
            text,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
                rendered = this.internalRender(cellData, cellSize, marginSize);
                text = "<svg width=\"".concat(rendered.dimensions, "\" height=\"").concat(rendered.dimensions, "\" xmlns=\"http://www.w3.org/2000/svg\">\n");
                text += rendered.content;
                text += "</svg>";
                return _context.abrupt("return", text);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      };
    }()
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */

  }, {
    key: "renderHtml",
    value: function () {
      var _renderHtml = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            rendered,
            svg,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
                rendered = this.internalRender(cellData, cellSize, marginSize);
                svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("width", rendered.dimensions.toString());
                svg.setAttribute("height", rendered.dimensions.toString());
                svg.classList.add(this._options.cssClass); // tslint:disable-next-line:no-inner-html

                svg.innerHTML = rendered.content;
                return _context2.abrupt("return", svg);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "internalRender",
    value: function internalRender(cellData, cellSize, marginSize) {
      if (!arrayHelper_1.ArrayHelper.isArray(cellData)) {
        throw new Error("The cellData must be of type QRCellData");
      }

      if (!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0) {
        throw new Error("The cellSize must be a number > 0, it is ".concat(cellSize));
      }

      if (!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0) {
        throw new Error("The marginSize must be a number >= 0, it is ".concat(marginSize));
      }

      var dimensions = cellData.length * cellSize + 2 * marginSize;
      var text = "<rect x=\"0\" y=\"0\" width=\"".concat(dimensions, "\" height=\"").concat(dimensions, "\" fill=\"").concat(this._options.background.hex(), "\" />\n");

      for (var x = 0; x < cellData.length; x++) {
        for (var y = 0; y < cellData[x].length; y++) {
          if (cellData[x][y]) {
            text += "<rect x=\"".concat(x * cellSize + marginSize, "\" y=\"").concat(y * cellSize + marginSize, "\" width=\"").concat(cellSize, "\" height=\"").concat(cellSize, "\" fill=\"").concat(this._options.foreground.hex(), "\" />\n");
          }
        }
      }

      return {
        dimensions: dimensions,
        content: text
      };
    }
  }]);

  return SvgRenderer;
}();

exports.SvgRenderer = SvgRenderer;

/***/ }),

/***/ "./dist/renderTypes/svgRendererOptions.js":
/*!************************************************!*\
  !*** ./dist/renderTypes/svgRendererOptions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Options for Svg renderer.
 */

var SvgRendererOptions = function SvgRendererOptions() {
  _classCallCheck(this, SvgRendererOptions);
};

exports.SvgRendererOptions = SvgRendererOptions;

/***/ }),

/***/ "./dist/renderTypes/textRenderer.js":
/*!******************************************!*\
  !*** ./dist/renderTypes/textRenderer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");
/**
 * Class to render qr data as t3xt.
 */


var TextRenderer =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Text renderer.
   * @param options The options for the renderer.
   */
  function TextRenderer(options) {
    _classCallCheck(this, TextRenderer);

    this._options = options || {};
    this._options.onChar = this._options.onChar || "██";
    this._options.offChar = this._options.offChar || "  ";
    this._options.cssClass = this._options.cssClass || "qr-text";
  }
  /**
   * Render the QR code data as text.
   * @param cellData The cell data for the QR code.
   * @param cellSize The size of each cell.
   * @param marginSize The margin to keep around the qr code.
   * @returns The text content.
   */


  _createClass(TextRenderer, [{
    key: "renderRaw",
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            text,
            m,
            x,
            line,
            y,
            c,
            _m,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 2;

                if (arrayHelper_1.ArrayHelper.isArray(cellData)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("The cellData must be of type QRCellData");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isNumber(cellSize) || cellSize <= 0)) {
                  _context.next = 6;
                  break;
                }

                throw new Error("The cellSize must be a number > 0, it is ".concat(cellSize));

              case 6:
                if (!(!numberHelper_1.NumberHelper.isNumber(marginSize) || marginSize < 0)) {
                  _context.next = 8;
                  break;
                }

                throw new Error("The marginSize must be a number >= 0, it is ".concat(marginSize));

              case 8:
                text = "";

                for (m = 0; m < marginSize; m++) {
                  text += "".concat(this._options.offChar.repeat(cellSize * cellData.length), "\r\n");
                }

                for (x = 0; x < cellData.length; x++) {
                  line = this._options.offChar.repeat(marginSize);

                  for (y = 0; y < cellData[x].length; y++) {
                    if (cellData[y][x]) {
                      line += this._options.onChar.repeat(cellSize);
                    } else {
                      line += this._options.offChar.repeat(cellSize);
                    }
                  }

                  line += this._options.offChar.repeat(marginSize);
                  line += "\r\n";

                  for (c = 0; c < cellSize; c++) {
                    text += line;
                  }
                }

                for (_m = 0; _m < marginSize; _m++) {
                  text += "".concat(this._options.offChar.repeat(cellSize * cellData.length), "\r\n");
                }

                return _context.abrupt("return", text);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      };
    }()
    /**
     * Render the cell data as an HTML element.
     * @param cellData The cell data to render.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @returns The object rendered as an html element.
     */

  }, {
    key: "renderHtml",
    value: function () {
      var _renderHtml = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            div,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 2;
                _context2.next = 4;
                return this.renderRaw(cellData, cellSize, marginSize);

              case 4:
                raw = _context2.sent;
                div = document.createElement("div");
                div.classList.add(this._options.cssClass); // tslint:disable-next-line:no-inner-html

                div.innerHTML = raw.replace(/\r/g, "").replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
                return _context2.abrupt("return", div);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      };
    }()
  }]);

  return TextRenderer;
}();

exports.TextRenderer = TextRenderer;

/***/ }),

/***/ "./dist/renderTypes/textRendererOptions.js":
/*!*************************************************!*\
  !*** ./dist/renderTypes/textRendererOptions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Options for Text renderer.
 */

var TextRendererOptions = function TextRendererOptions() {
  _classCallCheck(this, TextRendererOptions);
};

exports.TextRendererOptions = TextRendererOptions;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/deflate.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/deflate.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/strings.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/strings.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/adler32.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/adler32.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/crc32.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/crc32.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/deflate.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/deflate.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/messages.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/messages.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/trees.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/trees.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/zstream.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/pako/1.0.6/node_modules/pako/lib/zlib/zstream.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "@tangle-frost/iota-core/dist/data/color":
/*!**********************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/data/color" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_color__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/factories/factoryBase":
/*!*********************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/factories/factoryBase" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_factories_factoryBase__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/helpers/arrayHelper":
/*!*******************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/helpers/arrayHelper" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_arrayHelper__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/helpers/numberHelper":
/*!********************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/helpers/numberHelper" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/helpers/objectHelper":
/*!********************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/helpers/objectHelper" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/helpers/stringHelper":
/*!********************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/helpers/stringHelper" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_stringHelper__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL2ZhY3Rvcmllcy9xclJlbmRlcmVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaGVscGVycy9pbWFnZUhlbHBlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaW1hZ2VzL2pwZWdFbmNvZGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9pbWFnZXMvcG5nRW5jb2Rlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vc3JjL2luaXRSZW5kZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy9jYW52YXNSZW5kZXJlck9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy90ZXh0UmVuZGVyZXJPcHRpb25zLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS41MS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wYWtvLzEuMC42L25vZGVfbW9kdWxlcy9wYWtvL2xpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcGFrby8xLjAuNi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcGFrby8xLjAuNi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bha28vMS4wLjYvbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvYWRsZXIzMi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bha28vMS4wLjYvbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wYWtvLzEuMC42L25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2RlZmxhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wYWtvLzEuMC42L25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL21lc3NhZ2VzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcGFrby8xLjAuNi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi90cmVlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bha28vMS4wLjYvbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvenN0cmVhbS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcmVnZW5lcmF0b3ItcnVudGltZS8wLjExLjEvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci9leHRlcm5hbCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci9leHRlcm5hbCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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SUFIc0IsRUFHaEIsSUFIZ0IsRUFJMUQsSUFKMEQsRUFJcEQsSUFKb0QsRUFJOUMsSUFKOEMsRUFJeEMsSUFKd0MsRUFJbEMsSUFKa0MsRUFJNUIsSUFKNEIsRUFJdEIsSUFKc0IsRUFJaEIsSUFKZ0IsRUFLMUQsSUFMMEQsRUFLcEQsSUFMb0QsRUFLOUMsSUFMOEMsRUFLeEMsSUFMd0MsRUFLbEMsSUFMa0MsRUFLNUIsSUFMNEIsRUFLdEIsSUFMc0IsRUFLaEIsSUFMZ0IsRUFNMUQsSUFOMEQsRUFNcEQsSUFOb0QsRUFNOUMsSUFOOEMsRUFNeEMsSUFOd0MsRUFNbEMsSUFOa0MsRUFNNUIsSUFONEIsRUFNdEIsSUFOc0IsRUFNaEIsSUFOZ0IsRUFPMUQsSUFQMEQsRUFPcEQsSUFQb0QsRUFPOUMsSUFQOEMsRUFPeEMsSUFQd0MsRUFPbEMsSUFQa0MsRUFPNUIsSUFQNEIsRUFPdEIsSUFQc0IsRUFPaEIsSUFQZ0IsRUFRMUQsSUFSMEQsRUFRcEQsSUFSb0QsRUFROUMsSUFSOEMsRUFReEMsSUFSd0MsRUFRbEMsSUFSa0MsRUFRNUIsSUFSNEIsRUFRdEIsSUFSc0IsRUFRaEIsSUFSZ0IsRUFTMUQsSUFUMEQsRUFTcEQsSUFUb0QsRUFTOUMsSUFUOEMsRUFTeEMsSUFUd0MsRUFTbEMsSUFUa0MsRUFTNUIsSUFUNEIsRUFTdEIsSUFUc0IsRUFTaEIsSUFUZ0IsRUFVMUQsSUFWMEQsRUFVcEQsSUFWb0QsRUFVOUMsSUFWOEMsRUFVeEMsSUFWd0MsRUFVbEMsSUFWa0MsRUFVNUIsSUFWNEIsRUFVdEIsSUFWc0IsRUFVaEIsSUFWZ0IsRUFXMUQsSUFYMEQsRUFXcEQsSUFYb0QsRUFXOUMsSUFYOEMsRUFXeEMsSUFYd0MsRUFXbEMsSUFYa0MsRUFXNUIsSUFYNEIsRUFXdEIsSUFYc0IsRUFXaEIsSUFYZ0IsRUFZMUQsSUFaMEQsRUFZcEQsSUFab0QsRUFZOUMsSUFaOEMsRUFZeEMsSUFad0MsRUFZbEMsSUFaa0MsRUFZNUIsSUFaNEIsRUFZdEIsSUFac0IsRUFZaEIsSUFaZ0IsRUFhMUQsSUFiMEQsRUFhcEQs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QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsY0FBYzs7QUFFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FB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QVk7O0FBRTVCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTs7QUFFOUI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hMQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FDbERBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBLHNCQUFzQjtBQUN0Qjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUIsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQixxQkFBcUIsY0FBYyxFQUFFOzs7QUFHL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQixrQkFBa0IsVUFBVTs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx3QkFBd0I7QUFDeEIsWUFBWTtBQUNaLFVBQVU7QUFDViwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3Qjs7Ozs7Ozs7Ozs7O0FDdHRCQSxxRjs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7QUNBQSw4Rjs7Ozs7Ozs7Ozs7QUNBQSwrRjs7Ozs7Ozs7Ozs7QUNBQSwrRjs7Ozs7Ozs7Ozs7QUNBQSwrRiIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1xci1yZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1yZW5kZXJcIiwgW1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLXJlbmRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFRclJlbmRlclwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiXSwgcm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZGF0YV9jb2xvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZmFjdG9yaWVzX2ZhY3RvcnlCYXNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX2FycmF5SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfc3RyaW5nSGVscGVyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIFFSIHJlbmRlcmVycy5cclxuICovXHJcbmNsYXNzIFFSUmVuZGVyZXJGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFRUlJlbmRlcmVyRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUVJSZW5kZXJlckZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFFSUmVuZGVyZXJGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBRUlJlbmRlcmVyRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBRUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJSZW5kZXJlckZhY3RvcnkgPSBRUlJlbmRlcmVyRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKU1pXNWtaWEpsY2taaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMM0Z5VW1WdVpHVnlaWEpHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTeHZSa0ZCYVVZN1FVRkhha1k3TzBkQlJVYzdRVUZEU0N4MVFrRkJLMElzVTBGQlVTeDVRa0ZCZDBJN1NVRkpNMFE3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRemxDTEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VTBGRGVrUTdVVUZEUkN4UFFVRlBMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5NTEZkQlFWYzdVVUZEYWtJc1QwRkJUeXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVONFF5eERRVUZETzBOQlEwbzdRVUV6UWtRc09FTkJNa0pESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIGhlbHAgd2l0aCBtYW5pcHVsYXRpbmcgaW1hZ2UgZGF0YS5cclxuICovXHJcbmNsYXNzIEltYWdlSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgZGF0YSB0byBhbiBpbWFnZSBzb3VyY2UuXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBzb3VyY2UgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBpbWFnZSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkYXRhVG9JbWFnZVNvdXJjZShtaW1lVHlwZSwgZGF0YSkge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShtaW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZXIgYSBtaW1lVHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltYWdlU291cmNlO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRhdGEsIFVpbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBiaW5hcnkgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RGF0YSA9IGJ0b2EoYmluYXJ5KTtcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsJHtiYXNlNjREYXRhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhkYXRhKSkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjREYXRhID0gYnRvYShkYXRhKTtcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsJHtiYXNlNjREYXRhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YSBtdXN0IGJlIGEgVWludDhBcnJheSBvciBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbWFnZVNvdXJjZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlSGVscGVyID0gSW1hZ2VIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlZJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5cGJXRm5aVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwWkJRV2xHTzBGQlEycEdMRzlHUVVGcFJqdEJRVU5xUmpzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlowSXNSVUZCUlN4SlFVRjVRanRSUVVOMlJTeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyaERMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVOdVJEdFJRVVZFTEVsQlFVa3NWMEZCVnl4RFFVRkRPMUZCUldoQ0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTzFsQlEzWkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5vUWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFsQlEzaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlF6RkNMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZUTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhFTzFsQlEwUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyaERMRmRCUVZjc1IwRkJSeXhSUVVGUkxGRkJRVkVzVjBGQlZ5eFZRVUZWTEVWQlFVVXNRMEZCUXp0VFFVTjZSRHRoUVVGTkxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGNFTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6bENMRmRCUVZjc1IwRkJSeXhSUVVGUkxGRkJRVkVzVjBGQlZ5eFZRVUZWTEVWQlFVVXNRMEZCUXp0VFFVTjZSRHRoUVVGTk8xbEJRMGdzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFOQlF6bEVPMUZCUlVRc1QwRkJUeXhYUVVGWExFTkJRVU03U1VGRGRrSXNRMEZCUXp0RFFVTktPMEZCTDBKRUxHdERRU3RDUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpQRUcgRW5jb2Rlci5cclxuICogQmFzZWQgb24gSlBFRyBlbmNvZGVyIHBvcnRlZCB0byBKYXZhU2NyaXB0IGFuZCBvcHRpbWl6ZWQgYnkgQW5kcmVhcyBSaXR0ZXIsIHd3dy5ieXRlc3Ryb20uZXUsIDExLzIwMDlcclxuICovXHJcbmNsYXNzIEpwZWdFbmNvZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEpwZWdFbmNvZGVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl95VGFibGUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX3V2VGFibGUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX2ZkdGJsWSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fZmR0YmxVViA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fYml0Q29kZSA9IG5ldyBBcnJheSg2NTUzNSk7XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSBuZXcgQXJyYXkoNjU1MzUpO1xyXG4gICAgICAgIHRoaXMuX291dHB1dGZEQ1RRdWFudCA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fZHUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPdXQgPSBbXTtcclxuICAgICAgICB0aGlzLl9ieXRlTmV3ID0gMDtcclxuICAgICAgICB0aGlzLl9ieXRlUG9zID0gNztcclxuICAgICAgICB0aGlzLl95ZHUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX3VkdSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fdmR1ID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZSA9IG5ldyBBcnJheSgyMDQ4KTtcclxuICAgICAgICB0aGlzLmluaXRIdWZmbWFuVGJsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q2F0ZWdvcnlOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRSR0JZVVZUYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgdGhlIGltYWdlIHdpdGggdGhlIGdpdmVuIHF1YWxpdHkuXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIHRvIGVuY29kZS5cclxuICAgICAqIEBwYXJhbSBpbWFnZURhdGEgVGhlIGRhdGEgZm9yIHRoZSBpbWFnZS5cclxuICAgICAqIEBwYXJhbSBxdWFsaXR5IFRoZSBxdWFsaXR5IHRvIGVuY29kZSB0aGUgaW1hZ2UgYXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBmb3IgdGhlIGVuY29kZWQgaW1hZ2UuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZSh3aWR0aCwgaGVpZ2h0LCBpbWFnZURhdGEsIHF1YWxpdHkpIHtcclxuICAgICAgICB0aGlzLnNldFF1YWxpdHkocXVhbGl0eSk7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBiaXQgd3JpdGVyXHJcbiAgICAgICAgdGhpcy5fYnl0ZU91dCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVOZXcgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J5dGVQb3MgPSA3O1xyXG4gICAgICAgIC8vIEFkZCBKUEVHIGhlYWRlcnNcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGRDgpOyAvLyBTT0lcclxuICAgICAgICB0aGlzLndyaXRlQVBQMCgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVEUVQoKTtcclxuICAgICAgICB0aGlzLndyaXRlU09GMCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLndyaXRlREhUKCk7XHJcbiAgICAgICAgdGhpcy53cml0ZVNPUygpO1xyXG4gICAgICAgIC8vIEVuY29kZSA4eDggbWFjcm9ibG9ja3NcclxuICAgICAgICBsZXQgRENZID0gMDtcclxuICAgICAgICBsZXQgRENVID0gMDtcclxuICAgICAgICBsZXQgRENWID0gMDtcclxuICAgICAgICB0aGlzLl9ieXRlTmV3ID0gMDtcclxuICAgICAgICB0aGlzLl9ieXRlUG9zID0gNztcclxuICAgICAgICBjb25zdCBxdWFkV2lkdGggPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgbGV0IHg7XHJcbiAgICAgICAgbGV0IHkgPSAwO1xyXG4gICAgICAgIGxldCByO1xyXG4gICAgICAgIGxldCBnO1xyXG4gICAgICAgIGxldCBiO1xyXG4gICAgICAgIGxldCBzdGFydDtcclxuICAgICAgICBsZXQgcDtcclxuICAgICAgICBsZXQgY29sO1xyXG4gICAgICAgIGxldCByb3c7XHJcbiAgICAgICAgbGV0IHBvcztcclxuICAgICAgICB3aGlsZSAoeSA8IGhlaWdodCkge1xyXG4gICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHggPCBxdWFkV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gcXVhZFdpZHRoICogeSArIHg7XHJcbiAgICAgICAgICAgICAgICBwID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSAtMTtcclxuICAgICAgICAgICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHBvcyA9IDA7IHBvcyA8IDY0OyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHBvcyA+PiAzOyAvLyAvOFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IChwb3MgJiA3KSAqIDQ7IC8vICU4XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IHN0YXJ0ICsgKHJvdyAqIHF1YWRXaWR0aCkgKyBjb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyByb3cgPj0gaGVpZ2h0KSB7IC8vIHBhZGRpbmcgYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgLT0gKHF1YWRXaWR0aCAqICh5ICsgMSArIHJvdyAtIGhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCArIGNvbCA+PSBxdWFkV2lkdGgpIHsgLy8gcGFkZGluZyByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIC09ICgoeCArIGNvbCkgLSBxdWFkV2lkdGggKyA0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBpbWFnZURhdGFbcCsrXTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gaW1hZ2VEYXRhW3ArK107XHJcbiAgICAgICAgICAgICAgICAgICAgLyogLy8gY2FsY3VsYXRlIFlVViB2YWx1ZXMgZHluYW1pY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBZRFVbcG9zXT0oKCggMC4yOTkwMCkqcisoIDAuNTg3MDApKmcrKCAwLjExNDAwKSpiKSktMTI4OyAvLy0weDgwXHJcbiAgICAgICAgICAgICAgICAgICAgVURVW3Bvc109KCgoLTAuMTY4NzQpKnIrKC0wLjMzMTI2KSpnKyggMC41MDAwMCkqYikpO1xyXG4gICAgICAgICAgICAgICAgICAgIFZEVVtwb3NdPSgoKCAwLjUwMDAwKSpyKygtMC40MTg2OSkqZysoLTAuMDgxMzEpKmIpKTtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSBsb29rdXAgdGFibGUgKHNsaWdodGx5IGZhc3RlcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl95ZHVbcG9zXSA9ICgodGhpcy5fcmdiWXV2VGFibGVbcl0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoZyArIDI1NikgPj4gMF0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoYiArIDUxMikgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91ZHVbcG9zXSA9ICgodGhpcy5fcmdiWXV2VGFibGVbKHIgKyA3NjgpID4+IDBdICsgdGhpcy5fcmdiWXV2VGFibGVbKGcgKyAxMDI0KSA+PiAwXSArIHRoaXMuX3JnYll1dlRhYmxlWyhiICsgMTI4MCkgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZHVbcG9zXSA9ICgodGhpcy5fcmdiWXV2VGFibGVbKHIgKyAxMjgwKSA+PiAwXSArIHRoaXMuX3JnYll1dlRhYmxlWyhnICsgMTUzNikgPj4gMF0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoYiArIDE3OTIpID4+IDBdKSA+PiAxNikgLSAxMjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEQ1kgPSB0aGlzLnByb2Nlc3NEVSh0aGlzLl95ZHUsIHRoaXMuX2ZkdGJsWSwgRENZLCB0aGlzLl95ZGNIYXNoVGFibGUsIHRoaXMuX3lhY0hhc2hUYWJsZSk7XHJcbiAgICAgICAgICAgICAgICBEQ1UgPSB0aGlzLnByb2Nlc3NEVSh0aGlzLl91ZHUsIHRoaXMuX2ZkdGJsVVYsIERDVSwgdGhpcy5fdXZkY0hhc2hUYWJsZSwgdGhpcy5fdXZhY0hhc2hUYWJsZSk7XHJcbiAgICAgICAgICAgICAgICBEQ1YgPSB0aGlzLnByb2Nlc3NEVSh0aGlzLl92ZHUsIHRoaXMuX2ZkdGJsVVYsIERDViwgdGhpcy5fdXZkY0hhc2hUYWJsZSwgdGhpcy5fdXZhY0hhc2hUYWJsZSk7XHJcbiAgICAgICAgICAgICAgICB4ICs9IDMyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHkgKz0gODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gdGhlIGJpdCBhbGlnbm1lbnQgb2YgdGhlIEVPSSBtYXJrZXJcclxuICAgICAgICBpZiAodGhpcy5fYnl0ZVBvcyA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGxiaXRzID0gW107XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzFdID0gdGhpcy5fYnl0ZVBvcyArIDE7XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzBdID0gKDEgPDwgKHRoaXMuX2J5dGVQb3MgKyAxKSkgLSAxO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhmaWxsYml0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZEOSk7IC8vRU9JXHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMuX2J5dGVPdXQpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXRRdWFsaXR5KHF1YWxpdHkpIHtcclxuICAgICAgICBpZiAocXVhbGl0eSA8PSAwIHx8IHF1YWxpdHkgPiAxMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdWFsaXR5IG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxMDAsIGl0IGlzICR7cXVhbGl0eX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNmID0gMDtcclxuICAgICAgICBpZiAocXVhbGl0eSA8IDUwKSB7XHJcbiAgICAgICAgICAgIHNmID0gTWF0aC5mbG9vcig1MDAwIC8gcXVhbGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZiA9IE1hdGguZmxvb3IoMjAwIC0gcXVhbGl0eSAqIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRRdWFudFRhYmxlcyhzZik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGluaXRRdWFudFRhYmxlcyhzZikge1xyXG4gICAgICAgIGNvbnN0IFlRVCA9IFtcclxuICAgICAgICAgICAgMTYsIDExLCAxMCwgMTYsIDI0LCA0MCwgNTEsIDYxLFxyXG4gICAgICAgICAgICAxMiwgMTIsIDE0LCAxOSwgMjYsIDU4LCA2MCwgNTUsXHJcbiAgICAgICAgICAgIDE0LCAxMywgMTYsIDI0LCA0MCwgNTcsIDY5LCA1NixcclxuICAgICAgICAgICAgMTQsIDE3LCAyMiwgMjksIDUxLCA4NywgODAsIDYyLFxyXG4gICAgICAgICAgICAxOCwgMjIsIDM3LCA1NiwgNjgsIDEwOSwgMTAzLCA3NyxcclxuICAgICAgICAgICAgMjQsIDM1LCA1NSwgNjQsIDgxLCAxMDQsIDExMywgOTIsXHJcbiAgICAgICAgICAgIDQ5LCA2NCwgNzgsIDg3LCAxMDMsIDEyMSwgMTIwLCAxMDEsXHJcbiAgICAgICAgICAgIDcyLCA5MiwgOTUsIDk4LCAxMTIsIDEwMCwgMTAzLCA5OVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gTWF0aC5mbG9vcigoWVFUW2ldICogc2YgKyA1MCkgLyAxMDApO1xyXG4gICAgICAgICAgICBpZiAodCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHQgPiAyNTUpIHtcclxuICAgICAgICAgICAgICAgIHQgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5feVRhYmxlW0pwZWdFbmNvZGVyLlNJR19aQUdbaV1dID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVVZRVCA9IFtcclxuICAgICAgICAgICAgMTcsIDE4LCAyNCwgNDcsIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICAxOCwgMjEsIDI2LCA2NiwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDI0LCAyNiwgNTYsIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgNDcsIDY2LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjQ7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgdSA9IE1hdGguZmxvb3IoKFVWUVRbal0gKiBzZiArIDUwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh1IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodSA+IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl91dlRhYmxlW0pwZWdFbmNvZGVyLlNJR19aQUdbal1dID0gdTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWFzZiA9IFtcclxuICAgICAgICAgICAgMSwgMS4zODcwMzk4NDUsIDEuMzA2NTYyOTY1LCAxLjE3NTg3NTYwMixcclxuICAgICAgICAgICAgMSwgMC43ODU2OTQ5NTgsIDAuNTQxMTk2MSwgMC4yNzU4OTkzNzlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmR0YmxZW2tdID0gKDEgLyAodGhpcy5feVRhYmxlW0pwZWdFbmNvZGVyLlNJR19aQUdba11dICogYWFzZltyb3ddICogYWFzZltjb2xdICogOCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmR0YmxVVltrXSA9ICgxIC8gKHRoaXMuX3V2VGFibGVbSnBlZ0VuY29kZXIuU0lHX1pBR1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4KSk7XHJcbiAgICAgICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbXB1dGVIdWZmbWFuVGJsKG5yY29kZXMsIHN0ZFRhYmxlKSB7XHJcbiAgICAgICAgbGV0IGNvZGV2YWx1ZSA9IDA7XHJcbiAgICAgICAgbGV0IHBvc0luVGFibGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IEhUID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPD0gMTY7IGsrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBucmNvZGVzW2tdOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIEhUW3N0ZFRhYmxlW3Bvc0luVGFibGVdXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkVGFibGVbcG9zSW5UYWJsZV1dWzBdID0gY29kZXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkVGFibGVbcG9zSW5UYWJsZV1dWzFdID0gaztcclxuICAgICAgICAgICAgICAgIHBvc0luVGFibGUrKztcclxuICAgICAgICAgICAgICAgIGNvZGV2YWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGV2YWx1ZSAqPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSFQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGluaXRIdWZmbWFuVGJsKCkge1xyXG4gICAgICAgIHRoaXMuX3lkY0hhc2hUYWJsZSA9IHRoaXMuY29tcHV0ZUh1ZmZtYW5UYmwoSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9OUkNPREVTLCBKcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX1ZBTFVFUyk7XHJcbiAgICAgICAgdGhpcy5fdXZkY0hhc2hUYWJsZSA9IHRoaXMuY29tcHV0ZUh1ZmZtYW5UYmwoSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX05SQ09ERVMsIEpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9WQUxVRVMpO1xyXG4gICAgICAgIHRoaXMuX3lhY0hhc2hUYWJsZSA9IHRoaXMuY29tcHV0ZUh1ZmZtYW5UYmwoSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9OUkNPREVTLCBKcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX1ZBTFVFUyk7XHJcbiAgICAgICAgdGhpcy5fdXZhY0hhc2hUYWJsZSA9IHRoaXMuY29tcHV0ZUh1ZmZtYW5UYmwoSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX05SQ09ERVMsIEpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9WQUxVRVMpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpbml0Q2F0ZWdvcnlOdW1iZXIoKSB7XHJcbiAgICAgICAgbGV0IG5ybG93ZXIgPSAxO1xyXG4gICAgICAgIGxldCBucnVwcGVyID0gMjtcclxuICAgICAgICBmb3IgKGxldCBjYXQgPSAxOyBjYXQgPD0gMTU7IGNhdCsrKSB7XHJcbiAgICAgICAgICAgIC8vUG9zaXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuciA9IG5ybG93ZXI7IG5yIDwgbnJ1cHBlcjsgbnIrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2F0ZWdvcnlbMzI3NjcgKyBucl0gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJdID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJdWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5yXVswXSA9IG5yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vTmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBucm5lZyA9IC0obnJ1cHBlciAtIDEpOyBucm5lZyA8PSAtbnJsb3dlcjsgbnJuZWcrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2F0ZWdvcnlbMzI3NjcgKyBucm5lZ10gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJuZWddID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJuZWddWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5ybmVnXVswXSA9IG5ydXBwZXIgLSAxICsgbnJuZWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnJsb3dlciA8PD0gMTtcclxuICAgICAgICAgICAgbnJ1cHBlciA8PD0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGluaXRSR0JZVVZUYWJsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlW2ldID0gMTk1OTUgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDI1NikgPj4gMF0gPSAzODQ3MCAqIGk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgNTEyKSA+PiAwXSA9IDc0NzEgKiBpICsgMHg4MDAwO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDc2OCkgPj4gMF0gPSAtMTEwNTkgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDEwMjQpID4+IDBdID0gLTIxNzA5ICogaTtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyAxMjgwKSA+PiAwXSA9IDMyNzY4ICogaSArIDB4ODA3RkZGO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDE1MzYpID4+IDBdID0gLTI3NDM5ICogaTtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyAxNzkyKSA+PiAwXSA9IC01MzI5ICogaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlQml0cyhicykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYnNbMF07XHJcbiAgICAgICAgbGV0IHBvc3ZhbCA9IGJzWzFdIC0gMTtcclxuICAgICAgICB3aGlsZSAocG9zdmFsID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICYgKDEgPDwgcG9zdmFsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnl0ZU5ldyB8PSAoMSA8PCB0aGlzLl9ieXRlUG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3N2YWwtLTtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZVBvcy0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnl0ZVBvcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ieXRlTmV3ID09PSAweEZGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHhGRik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSh0aGlzLl9ieXRlTmV3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2J5dGVQb3MgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnl0ZU5ldyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlQnl0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2J5dGVPdXQucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlV29yZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKCh2YWx1ZSA+PiA4KSAmIDB4RkYpO1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKCh2YWx1ZSkgJiAweEZGKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZkRDVFF1YW50KGRhdGEsIGZkdGJsKSB7XHJcbiAgICAgICAgbGV0IGQwO1xyXG4gICAgICAgIGxldCBkMTtcclxuICAgICAgICBsZXQgZDI7XHJcbiAgICAgICAgbGV0IGQzO1xyXG4gICAgICAgIGxldCBkNDtcclxuICAgICAgICBsZXQgZDU7XHJcbiAgICAgICAgbGV0IGQ2O1xyXG4gICAgICAgIGxldCBkNztcclxuICAgICAgICAvKiBQYXNzIDE6IHByb2Nlc3Mgcm93cy4gKi9cclxuICAgICAgICBsZXQgZGF0YU9mZiA9IDA7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgY29uc3QgSTggPSA4O1xyXG4gICAgICAgIGNvbnN0IEk2NCA9IDY0O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBJODsgKytpKSB7XHJcbiAgICAgICAgICAgIGQwID0gZGF0YVtkYXRhT2ZmXTtcclxuICAgICAgICAgICAgZDEgPSBkYXRhW2RhdGFPZmYgKyAxXTtcclxuICAgICAgICAgICAgZDIgPSBkYXRhW2RhdGFPZmYgKyAyXTtcclxuICAgICAgICAgICAgZDMgPSBkYXRhW2RhdGFPZmYgKyAzXTtcclxuICAgICAgICAgICAgZDQgPSBkYXRhW2RhdGFPZmYgKyA0XTtcclxuICAgICAgICAgICAgZDUgPSBkYXRhW2RhdGFPZmYgKyA1XTtcclxuICAgICAgICAgICAgZDYgPSBkYXRhW2RhdGFPZmYgKyA2XTtcclxuICAgICAgICAgICAgZDcgPSBkYXRhW2RhdGFPZmYgKyA3XTtcclxuICAgICAgICAgICAgY29uc3QgdG1wMCA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDcgPSBkMCAtIGQ3O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAxID0gZDEgKyBkNjtcclxuICAgICAgICAgICAgY29uc3QgdG1wNiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDIgPSBkMiArIGQ1O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA1ID0gZDIgLSBkNTtcclxuICAgICAgICAgICAgY29uc3QgdG1wMyA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDQgPSBkMyAtIGQ0O1xyXG4gICAgICAgICAgICAvKiBFdmVuIHBhcnQgKi9cclxuICAgICAgICAgICAgbGV0IHRtcDEwID0gdG1wMCArIHRtcDM7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgY29uc3QgdG1wMTMgPSB0bXAwIC0gdG1wMztcclxuICAgICAgICAgICAgbGV0IHRtcDExID0gdG1wMSArIHRtcDI7XHJcbiAgICAgICAgICAgIGxldCB0bXAxMiA9IHRtcDEgLSB0bXAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmZdID0gdG1wMTAgKyB0bXAxMTsgLyogcGhhc2UgMyAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0XSA9IHRtcDEwIC0gdG1wMTE7XHJcbiAgICAgICAgICAgIGNvbnN0IHoxID0gKHRtcDEyICsgdG1wMTMpICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDJdID0gdG1wMTMgKyB6MTsgLyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA2XSA9IHRtcDEzIC0gejE7XHJcbiAgICAgICAgICAgIC8qIE9kZCBwYXJ0ICovXHJcbiAgICAgICAgICAgIHRtcDEwID0gdG1wNCArIHRtcDU7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdG1wMTEgPSB0bXA1ICsgdG1wNjtcclxuICAgICAgICAgICAgdG1wMTIgPSB0bXA2ICsgdG1wNztcclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgY29uc3QgejUgPSAodG1wMTAgLSB0bXAxMikgKiAwLjM4MjY4MzQzMzsgLyogYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejIgPSAwLjU0MTE5NjEgKiB0bXAxMCArIHo1OyAvKiBjMi1jNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6NCA9IDEuMzA2NTYyOTY1ICogdG1wMTIgKyB6NTsgLyogYzIrYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejMgPSB0bXAxMSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MTEgPSB0bXA3ICsgejM7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgY29uc3QgejEzID0gdG1wNyAtIHozO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA1XSA9IHoxMyArIHoyOyAvKiBwaGFzZSA2ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDNdID0gejEzIC0gejI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDFdID0gejExICsgejQ7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDddID0gejExIC0gejQ7XHJcbiAgICAgICAgICAgIGRhdGFPZmYgKz0gODsgLyogYWR2YW5jZSBwb2ludGVyIHRvIG5leHQgcm93ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIFBhc3MgMjogcHJvY2VzcyBjb2x1bW5zLiAqL1xyXG4gICAgICAgIGRhdGFPZmYgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBJODsgKytpKSB7XHJcbiAgICAgICAgICAgIGQwID0gZGF0YVtkYXRhT2ZmXTtcclxuICAgICAgICAgICAgZDEgPSBkYXRhW2RhdGFPZmYgKyA4XTtcclxuICAgICAgICAgICAgZDIgPSBkYXRhW2RhdGFPZmYgKyAxNl07XHJcbiAgICAgICAgICAgIGQzID0gZGF0YVtkYXRhT2ZmICsgMjRdO1xyXG4gICAgICAgICAgICBkNCA9IGRhdGFbZGF0YU9mZiArIDMyXTtcclxuICAgICAgICAgICAgZDUgPSBkYXRhW2RhdGFPZmYgKyA0MF07XHJcbiAgICAgICAgICAgIGQ2ID0gZGF0YVtkYXRhT2ZmICsgNDhdO1xyXG4gICAgICAgICAgICBkNyA9IGRhdGFbZGF0YU9mZiArIDU2XTtcclxuICAgICAgICAgICAgY29uc3QgdG1wMHAyID0gZDAgKyBkNztcclxuICAgICAgICAgICAgY29uc3QgdG1wN3AyID0gZDAgLSBkNztcclxuICAgICAgICAgICAgY29uc3QgdG1wMXAyID0gZDEgKyBkNjtcclxuICAgICAgICAgICAgY29uc3QgdG1wNnAyID0gZDEgLSBkNjtcclxuICAgICAgICAgICAgY29uc3QgdG1wMnAyID0gZDIgKyBkNTtcclxuICAgICAgICAgICAgY29uc3QgdG1wNXAyID0gZDIgLSBkNTtcclxuICAgICAgICAgICAgY29uc3QgdG1wM3AyID0gZDMgKyBkNDtcclxuICAgICAgICAgICAgY29uc3QgdG1wNHAyID0gZDMgLSBkNDtcclxuICAgICAgICAgICAgLyogRXZlbiBwYXJ0ICovXHJcbiAgICAgICAgICAgIGxldCB0bXAxMHAyID0gdG1wMHAyICsgdG1wM3AyOyAvKiBwaGFzZSAyICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDEzcDIgPSB0bXAwcDIgLSB0bXAzcDI7XHJcbiAgICAgICAgICAgIGxldCB0bXAxMXAyID0gdG1wMXAyICsgdG1wMnAyO1xyXG4gICAgICAgICAgICBsZXQgdG1wMTJwMiA9IHRtcDFwMiAtIHRtcDJwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmXSA9IHRtcDEwcDIgKyB0bXAxMXAyOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDMyXSA9IHRtcDEwcDIgLSB0bXAxMXAyO1xyXG4gICAgICAgICAgICBjb25zdCB6MXAyID0gKHRtcDEycDIgKyB0bXAxM3AyKSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAxNl0gPSB0bXAxM3AyICsgejFwMjsgLyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0OF0gPSB0bXAxM3AyIC0gejFwMjtcclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTBwMiA9IHRtcDRwMiArIHRtcDVwMjsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMXAyID0gdG1wNXAyICsgdG1wNnAyO1xyXG4gICAgICAgICAgICB0bXAxMnAyID0gdG1wNnAyICsgdG1wN3AyO1xyXG4gICAgICAgICAgICAvKiBUaGUgcm90YXRvciBpcyBtb2RpZmllZCBmcm9tIGZpZyA0LTggdG8gYXZvaWQgZXh0cmEgbmVnYXRpb25zLiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6NXAyID0gKHRtcDEwcDIgLSB0bXAxMnAyKSAqIDAuMzgyNjgzNDMzOyAvKiBjNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MnAyID0gMC41NDExOTYxICogdG1wMTBwMiArIHo1cDI7IC8qIGMyLWM2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHo0cDIgPSAxLjMwNjU2Mjk2NSAqIHRtcDEycDIgKyB6NXAyOyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6M3AyID0gdG1wMTFwMiAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MTFwMiA9IHRtcDdwMiArIHozcDI7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgY29uc3QgejEzcDIgPSB0bXA3cDIgLSB6M3AyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0MF0gPSB6MTNwMiArIHoycDI7IC8qIHBoYXNlIDYgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMjRdID0gejEzcDIgLSB6MnAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA4XSA9IHoxMXAyICsgejRwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNTZdID0gejExcDIgLSB6NHAyO1xyXG4gICAgICAgICAgICBkYXRhT2ZmKys7IC8qIGFkdmFuY2UgcG9pbnRlciB0byBuZXh0IGNvbHVtbiAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBRdWFudGl6ZS9kZXNjYWxlIHRoZSBjb2VmZmljaWVudHNcclxuICAgICAgICBsZXQgZkRDVFF1YW50O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBJNjQ7ICsraSkge1xyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgcXVhbnRpemF0aW9uIGFuZCBzY2FsaW5nIGZhY3RvciAmIFJvdW5kIHRvIG5lYXJlc3QgaW50ZWdlclxyXG4gICAgICAgICAgICBmRENUUXVhbnQgPSBkYXRhW2ldICogZmR0YmxbaV07XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dGZEQ1RRdWFudFtpXSA9IChmRENUUXVhbnQgPiAwKSA/ICgoZkRDVFF1YW50ICsgMC41KSB8IDApIDogKChmRENUUXVhbnQgLSAwLjUpIHwgMCk7XHJcbiAgICAgICAgICAgIC8vb3V0cHV0ZkRDVFF1YW50W2ldID0gZnJvdW5kKGZEQ1RRdWFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXRmRENUUXVhbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlQVBQMCgpIHtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGRTApOyAvLyBtYXJrZXJcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxNik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4NEEpOyAvLyBKXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHg0Nik7IC8vIEZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDQ5KTsgLy8gSVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4NDYpOyAvLyBGXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vID0gXCJKRklGXCIsJ1xcMCdcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gdmVyc2lvbmhpXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIHZlcnNpb25sb1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyB4eXVuaXRzXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMSk7IC8vIHhkZW5zaXR5XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMSk7IC8vIHlkZW5zaXR5XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIHRodW1ibndpZHRoXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIHRodW1ibmhlaWdodFxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZVNPRjAod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZDMCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDE3KTsgLy8gbGVuZ3RoLCB0cnVlY29sb3IgWVVWIEpQR1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDgpOyAvLyBwcmVjaXNpb25cclxuICAgICAgICB0aGlzLndyaXRlV29yZChoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKHdpZHRoKTtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgzKTsgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gSWRZXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhWWVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyBRVFlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgyKTsgLy8gSWRVXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhWVVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyBRVFVcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgzKTsgLy8gSWRWXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhWVlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyBRVFZcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVEUVQoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkRCKTsgLy8gbWFya2VyXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMTMyKTsgLy8gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKHRoaXMuX3lUYWJsZVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjQ7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSh0aGlzLl91dlRhYmxlW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlREhUKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZDNCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4MDFBMik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyBIVFlEQ2luZm9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9OUkNPREVTW2kgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDExOyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9WQUxVRVNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDEwKTsgLy8gSFRZQUNpbmZvXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNjsgaysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfTlJDT0RFU1trICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8PSAxNjE7IGwrKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX1ZBTFVFU1tsXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyBIVFVEQ2luZm9cclxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IDE2OyBtKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX05SQ09ERVNbbSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPD0gMTE7IG4rKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfVkFMVUVTW25dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVUFDaW5mb1xyXG4gICAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgMTY7IG8rKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfTlJDT0RFU1tvICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxNjE7IHArKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfVkFMVUVTW3BdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlU09TKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZEQSk7IC8vIG1hcmtlclxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDEyKTsgLy8gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMyk7IC8vIG5yb2Zjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIElkWVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyBIVFlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgyKTsgLy8gSWRVXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDMpOyAvLyBJZFZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFRWXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIFNzXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgzRik7IC8vIFNlXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIEJmXHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHByb2Nlc3NEVShDRFUsIGZkdGJsLCBwYXNzZWREQywgSFREQywgSFRBQykge1xyXG4gICAgICAgIGxldCBEQyA9IHBhc3NlZERDO1xyXG4gICAgICAgIGNvbnN0IEVPQiA9IEhUQUNbMHgwMF07XHJcbiAgICAgICAgY29uc3QgbTE2emVyb2VzID0gSFRBQ1sweEYwXTtcclxuICAgICAgICBsZXQgcG9zO1xyXG4gICAgICAgIGNvbnN0IEkxNiA9IDE2O1xyXG4gICAgICAgIGNvbnN0IEk2MyA9IDYzO1xyXG4gICAgICAgIGNvbnN0IEk2NCA9IDY0O1xyXG4gICAgICAgIGNvbnN0IERVX0RDVCA9IHRoaXMuZkRDVFF1YW50KENEVSwgZmR0YmwpO1xyXG4gICAgICAgIC8vWmlnWmFnIHJlb3JkZXJcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEk2NDsgKytqKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2R1W0pwZWdFbmNvZGVyLlNJR19aQUdbal1dID0gRFVfRENUW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5fZHVbMF0gLSBEQztcclxuICAgICAgICBEQyA9IHRoaXMuX2R1WzBdO1xyXG4gICAgICAgIC8vRW5jb2RlIERDXHJcbiAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoSFREQ1swXSk7IC8vIERpZmYgbWlnaHQgYmUgMFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcG9zID0gMzI3NjcgKyBkaWZmO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhIVERDW3RoaXMuX2NhdGVnb3J5W3Bvc11dKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHModGhpcy5fYml0Q29kZVtwb3NdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9FbmNvZGUgQUNzXHJcbiAgICAgICAgbGV0IGVuZDBwb3MgPSA2MzsgLy8gd2FzIGNvbnN0Li4uIHdoaWNoIGlzIGNyYXp5XHJcbiAgICAgICAgZm9yICg7IChlbmQwcG9zID4gMCkgJiYgKHRoaXMuX2R1W2VuZDBwb3NdID09PSAwKTsgZW5kMHBvcy0tKSB7IH1cclxuICAgICAgICAvL2VuZDBwb3MgPSBmaXJzdCBlbGVtZW50IGluIHJldmVyc2Ugb3JkZXIgIT0wXHJcbiAgICAgICAgaWYgKGVuZDBwb3MgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgbGV0IGxuZztcclxuICAgICAgICB3aGlsZSAoaSA8PSBlbmQwcG9zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0cG9zID0gaTtcclxuICAgICAgICAgICAgZm9yICg7ICh0aGlzLl9kdVtpXSA9PT0gMCkgJiYgKGkgPD0gZW5kMHBvcyk7ICsraSkgeyB9XHJcbiAgICAgICAgICAgIGxldCBucnplcm9lcyA9IGkgLSBzdGFydHBvcztcclxuICAgICAgICAgICAgaWYgKG5yemVyb2VzID49IEkxNikge1xyXG4gICAgICAgICAgICAgICAgbG5nID0gbnJ6ZXJvZXMgPj4gNDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG5ybWFya2VyID0gMTsgbnJtYXJrZXIgPD0gbG5nOyArK25ybWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMobTE2emVyb2VzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5yemVyb2VzID0gbnJ6ZXJvZXMgJiAweEY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zID0gMzI3NjcgKyB0aGlzLl9kdVtpXTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoSFRBQ1sobnJ6ZXJvZXMgPDwgNCkgKyB0aGlzLl9jYXRlZ29yeVtwb3NdXSk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKHRoaXMuX2JpdENvZGVbcG9zXSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZDBwb3MgIT09IEk2Mykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhFT0IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gREM7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfTlJDT0RFUyA9IFswLCAwLCAxLCA1LCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfVkFMVUVTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX05SQ09ERVMgPSBbMCwgMCwgMiwgMSwgMywgMywgMiwgNCwgMywgNSwgNSwgNCwgNCwgMCwgMCwgMSwgMHg3RF07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX1ZBTFVFUyA9IFtcclxuICAgIDB4MDEsIDB4MDIsIDB4MDMsIDB4MDAsIDB4MDQsIDB4MTEsIDB4MDUsIDB4MTIsXHJcbiAgICAweDIxLCAweDMxLCAweDQxLCAweDA2LCAweDEzLCAweDUxLCAweDYxLCAweDA3LFxyXG4gICAgMHgyMiwgMHg3MSwgMHgxNCwgMHgzMiwgMHg4MSwgMHg5MSwgMHhBMSwgMHgwOCxcclxuICAgIDB4MjMsIDB4NDIsIDB4QjEsIDB4QzEsIDB4MTUsIDB4NTIsIDB4RDEsIDB4RjAsXHJcbiAgICAweDI0LCAweDMzLCAweDYyLCAweDcyLCAweDgyLCAweDA5LCAweDBBLCAweDE2LFxyXG4gICAgMHgxNywgMHgxOCwgMHgxOSwgMHgxQSwgMHgyNSwgMHgyNiwgMHgyNywgMHgyOCxcclxuICAgIDB4MjksIDB4MkEsIDB4MzQsIDB4MzUsIDB4MzYsIDB4MzcsIDB4MzgsIDB4MzksXHJcbiAgICAweDNBLCAweDQzLCAweDQ0LCAweDQ1LCAweDQ2LCAweDQ3LCAweDQ4LCAweDQ5LFxyXG4gICAgMHg0QSwgMHg1MywgMHg1NCwgMHg1NSwgMHg1NiwgMHg1NywgMHg1OCwgMHg1OSxcclxuICAgIDB4NUEsIDB4NjMsIDB4NjQsIDB4NjUsIDB4NjYsIDB4NjcsIDB4NjgsIDB4NjksXHJcbiAgICAweDZBLCAweDczLCAweDc0LCAweDc1LCAweDc2LCAweDc3LCAweDc4LCAweDc5LFxyXG4gICAgMHg3QSwgMHg4MywgMHg4NCwgMHg4NSwgMHg4NiwgMHg4NywgMHg4OCwgMHg4OSxcclxuICAgIDB4OEEsIDB4OTIsIDB4OTMsIDB4OTQsIDB4OTUsIDB4OTYsIDB4OTcsIDB4OTgsXHJcbiAgICAweDk5LCAweDlBLCAweEEyLCAweEEzLCAweEE0LCAweEE1LCAweEE2LCAweEE3LFxyXG4gICAgMHhBOCwgMHhBOSwgMHhBQSwgMHhCMiwgMHhCMywgMHhCNCwgMHhCNSwgMHhCNixcclxuICAgIDB4QjcsIDB4QjgsIDB4QjksIDB4QkEsIDB4QzIsIDB4QzMsIDB4QzQsIDB4QzUsXHJcbiAgICAweEM2LCAweEM3LCAweEM4LCAweEM5LCAweENBLCAweEQyLCAweEQzLCAweEQ0LFxyXG4gICAgMHhENSwgMHhENiwgMHhENywgMHhEOCwgMHhEOSwgMHhEQSwgMHhFMSwgMHhFMixcclxuICAgIDB4RTMsIDB4RTQsIDB4RTUsIDB4RTYsIDB4RTcsIDB4RTgsIDB4RTksIDB4RUEsXHJcbiAgICAweEYxLCAweEYyLCAweEYzLCAweEY0LCAweEY1LCAweEY2LCAweEY3LCAweEY4LFxyXG4gICAgMHhGOSwgMHhGQVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX05SQ09ERVMgPSBbMCwgMCwgMywgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfVkFMVUVTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfTlJDT0RFUyA9IFswLCAwLCAyLCAxLCAyLCA0LCA0LCAzLCA0LCA3LCA1LCA0LCA0LCAwLCAxLCAyLCAweDc3XTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9WQUxVRVMgPSBbXHJcbiAgICAweDAwLCAweDAxLCAweDAyLCAweDAzLCAweDExLCAweDA0LCAweDA1LCAweDIxLFxyXG4gICAgMHgzMSwgMHgwNiwgMHgxMiwgMHg0MSwgMHg1MSwgMHgwNywgMHg2MSwgMHg3MSxcclxuICAgIDB4MTMsIDB4MjIsIDB4MzIsIDB4ODEsIDB4MDgsIDB4MTQsIDB4NDIsIDB4OTEsXHJcbiAgICAweEExLCAweEIxLCAweEMxLCAweDA5LCAweDIzLCAweDMzLCAweDUyLCAweEYwLFxyXG4gICAgMHgxNSwgMHg2MiwgMHg3MiwgMHhEMSwgMHgwQSwgMHgxNiwgMHgyNCwgMHgzNCxcclxuICAgIDB4RTEsIDB4MjUsIDB4RjEsIDB4MTcsIDB4MTgsIDB4MTksIDB4MUEsIDB4MjYsXHJcbiAgICAweDI3LCAweDI4LCAweDI5LCAweDJBLCAweDM1LCAweDM2LCAweDM3LCAweDM4LFxyXG4gICAgMHgzOSwgMHgzQSwgMHg0MywgMHg0NCwgMHg0NSwgMHg0NiwgMHg0NywgMHg0OCxcclxuICAgIDB4NDksIDB4NEEsIDB4NTMsIDB4NTQsIDB4NTUsIDB4NTYsIDB4NTcsIDB4NTgsXHJcbiAgICAweDU5LCAweDVBLCAweDYzLCAweDY0LCAweDY1LCAweDY2LCAweDY3LCAweDY4LFxyXG4gICAgMHg2OSwgMHg2QSwgMHg3MywgMHg3NCwgMHg3NSwgMHg3NiwgMHg3NywgMHg3OCxcclxuICAgIDB4NzksIDB4N0EsIDB4ODIsIDB4ODMsIDB4ODQsIDB4ODUsIDB4ODYsIDB4ODcsXHJcbiAgICAweDg4LCAweDg5LCAweDhBLCAweDkyLCAweDkzLCAweDk0LCAweDk1LCAweDk2LFxyXG4gICAgMHg5NywgMHg5OCwgMHg5OSwgMHg5QSwgMHhBMiwgMHhBMywgMHhBNCwgMHhBNSxcclxuICAgIDB4QTYsIDB4QTcsIDB4QTgsIDB4QTksIDB4QUEsIDB4QjIsIDB4QjMsIDB4QjQsXHJcbiAgICAweEI1LCAweEI2LCAweEI3LCAweEI4LCAweEI5LCAweEJBLCAweEMyLCAweEMzLFxyXG4gICAgMHhDNCwgMHhDNSwgMHhDNiwgMHhDNywgMHhDOCwgMHhDOSwgMHhDQSwgMHhEMixcclxuICAgIDB4RDMsIDB4RDQsIDB4RDUsIDB4RDYsIDB4RDcsIDB4RDgsIDB4RDksIDB4REEsXHJcbiAgICAweEUyLCAweEUzLCAweEU0LCAweEU1LCAweEU2LCAweEU3LCAweEU4LCAweEU5LFxyXG4gICAgMHhFQSwgMHhGMiwgMHhGMywgMHhGNCwgMHhGNSwgMHhGNiwgMHhGNywgMHhGOCxcclxuICAgIDB4RjksIDB4RkFcclxuXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNJR19aQUcgPSBbXHJcbiAgICAwLCAxLCA1LCA2LCAxNCwgMTUsIDI3LCAyOCxcclxuICAgIDIsIDQsIDcsIDEzLCAxNiwgMjYsIDI5LCA0MixcclxuICAgIDMsIDgsIDEyLCAxNywgMjUsIDMwLCA0MSwgNDMsXHJcbiAgICA5LCAxMSwgMTgsIDI0LCAzMSwgNDAsIDQ0LCA1MyxcclxuICAgIDEwLCAxOSwgMjMsIDMyLCAzOSwgNDUsIDUyLCA1NCxcclxuICAgIDIwLCAyMiwgMzMsIDM4LCA0NiwgNTEsIDU1LCA2MCxcclxuICAgIDIxLCAzNCwgMzcsIDQ3LCA1MCwgNTYsIDU5LCA2MSxcclxuICAgIDM1LCAzNiwgNDgsIDQ5LCA1NywgNTgsIDYyLCA2M1xyXG5dO1xyXG5leHBvcnRzLkpwZWdFbmNvZGVyID0gSnBlZ0VuY29kZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuQmxaMFZ1WTI5a1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXMWhaMlZ6TDJwd1pXZEZibU52WkdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNEdEpRVzlJU1RzN1QwRkZSenRKUVVOSU8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRia0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZiRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVndReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1RVRkJUU3hEUVVGRExFdEJRV0VzUlVGQlJTeE5RVUZqTEVWQlFVVXNVMEZCY1VJc1JVRkJSU3hQUVVGbE8xRkJReTlGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRmVrSXNkMEpCUVhkQ08xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZzUWl4dFFrRkJiVUk3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZET1VJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXaENMSGxDUVVGNVFqdFJRVU42UWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRXaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGV2l4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZzUWl4TlFVRk5MRk5CUVZNc1IwRkJSeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJUVkNMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMDRzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFZc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFRpeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTk9MRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMDRzU1VGQlNTeExRVUZMTEVOQlFVTTdVVUZEVml4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOT0xFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlExSXNTVUZCU1N4SFFVRkhMRU5CUVVNN1VVRkRVaXhKUVVGSkxFZEJRVWNzUTBGQlF6dFJRVU5TTEU5QlFVOHNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSVHRaUVVObUxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVGl4UFFVRlBMRU5CUVVNc1IwRkJSeXhUUVVGVExFVkJRVVU3WjBKQlEyeENMRXRCUVVzc1IwRkJSeXhUUVVGVExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRNVUlzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkRWaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTFRc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZGVWl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHR2UWtGRE0wSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTzI5Q1FVTnlRaXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN6dHZRa0ZETVVJc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4VFFVRlRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlJYQkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVXNSVUZCUlN4cFFrRkJhVUk3ZDBKQlEzUkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdjVUpCUXpkRE8yOUNRVVZFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hUUVVGVExFVkJRVVVzUlVGQlJTeG5Ra0ZCWjBJN2QwSkJRM2hETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR4UWtGRGNFTTdiMEpCUlVRc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOdVFpeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlEyNUNMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkZia0k3T3pzN2MwSkJTV0k3YjBKQlJXRXNjVU5CUVhGRE8yOUNRVU55UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRE9VZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUXpkSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVVZxU2p0blFrRkZSQ3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMmRDUVVNelJpeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8yZENRVU01Uml4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzJkQ1FVTTVSaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJGQlExZzdXVUZEUkN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRMVk3VVVGRlJDeDVRMEZCZVVNN1VVRkRla01zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOd1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRjRUlzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyaERMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRUUVVNMVFqdFJRVVZFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTzFGQlJUZENMRTlCUVU4c1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRPVUlzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGREwwSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUTBGQk5FTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVVZFTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTmtMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVOdVF6dGhRVUZOTzFsQlEwZ3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOMFF6dFJRVVZFTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hsUVVGbExFTkJRVU1zUlVGQlZUdFJRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSenRaUVVOU0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJoRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJoRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhPMWxCUTJ4RExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMU5CUTNCRExFTkJRVU03VVVGRlJpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEVUN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRMVE3YVVKQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRk8yZENRVU5vUWl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRMWc3V1VGRFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkROVU03VVVGRFJDeE5RVUZOTEVsQlFVa3NSMEZCUnp0WlFVTlVMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFOQlEycERMRU5CUVVNN1VVRkRSaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRemxETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFVDeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTFRN2FVSkJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZPMmRDUVVOb1FpeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUTFnN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZETjBNN1VVRkRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ6dFpRVU5VTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1YwRkJWeXhGUVVGRkxGZEJRVmM3V1VGRGVFTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hUUVVGVExFVkJRVVVzVjBGQlZ6dFRRVU42UXl4RFFVRkRPMUZCUTBZc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExWXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVNNVFpeExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXpSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU0zUml4RFFVRkRMRVZCUVVVc1EwRkJRenRoUVVOUU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR2xDUVVGcFFpeERRVUZETEU5QlFXbENMRVZCUVVVc1VVRkJhMEk3VVVGRE0wUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnhDTEVsQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOdVFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGJFTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRPVUlzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkRlRU1zUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRhRU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdaMEpCUTJJc1UwRkJVeXhGUVVGRkxFTkJRVU03WVVGRFpqdFpRVU5FTEZOQlFWTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRiRUk3VVVGRFJDeFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzWTBGQll6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhYUVVGWExFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1YwRkJWeXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRU5CUVVNN1VVRkRka2dzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMREJDUVVFd1FpeEZRVUZGTEZkQlFWY3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzFGQlF6VklMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGZEJRVmNzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hYUVVGWExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJRenRSUVVOMlNDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNWMEZCVnl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdTVUZEYUVrc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHJRa0ZCYTBJN1VVRkRkRUlzU1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEyaERMR3RDUVVGclFqdFpRVU5zUWl4TFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFOUJRVThzUlVGQlJTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRk8yZENRVU4yUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRMnBETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRMMElzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1lVRkRja003V1VGRFJDeHJRa0ZCYTBJN1dVRkRiRUlzUzBGQlN5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtRc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU53UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMnhETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGRFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1QwRkJUeXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdZVUZEZWtRN1dVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOcVFqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1pVRkJaVHRSUVVOdVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZET1VNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVOMFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU12UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8xbEJRekZFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyaEVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTI1RU8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VFFVRlRMRU5CUVVNc1JVRkJXVHRSUVVNeFFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhQUVVGUExFMUJRVTBzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYUVJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRVZCUVVVN1owSkJRM1pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTNwRE8xbEJRMFFzVFVGQlRTeEZRVUZGTEVOQlFVTTdXVUZEVkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRGFFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYmtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeExRVUZMTEVsQlFVa3NSVUZCUlR0dlFrRkRlRUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRGNrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEY2tJN2NVSkJRVTA3YjBKQlEwZ3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdhVUpCUTJwRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5zUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU55UWp0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFRRVUZUTEVOQlFVTXNTMEZCWVR0UlFVTXpRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhMUVVGaE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVTBGQlV5eERRVUZETEVsQlFXTXNSVUZCUlN4TFFVRmxPMUZCUXpkRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRVQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5RTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFBc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFVDeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTlFMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMUFzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEVUN3eVFrRkJNa0k3VVVGRE0wSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEySXNUVUZCVFN4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMllzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVTdXVUZEY2tJc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVWMlFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGNrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU55UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEY2tJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTnlRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkZja0lzWlVGQlpUdFpRVU5tTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlEzUkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZETVVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTjRRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUlhoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zWVVGQllUdFpRVU0xUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1dVRkZiRU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVR0WlFVTnNSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlF6ZERMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVVdlFpeGpRVUZqTzFsQlEyUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlEyeERMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzQkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlJYQkNMRzlGUVVGdlJUdFpRVU53UlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhSUVVGUk8xbEJRMnhFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRk5CUVZNc1IwRkJSeXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNWMEZCVnp0WlFVTTVReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExGZEJRVmM3V1VGRGFFUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETEZGQlFWRTdXVUZGZUVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFN1dVRkRjRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVWMFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhPMWxCUXpORExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU0zUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkROMElzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlJUZENMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eHBRMEZCYVVNN1UwRkRiRVE3VVVGRlJDdzRRa0ZCT0VJN1VVRkRPVUlzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmFMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRk8xbEJRM0pDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGJrSXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtJc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRlRUlzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGVFSXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZUVJc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRlRUlzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGVFSXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZGZUVJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka0lzVFVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMlFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRrSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4yUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlJYWkNMR1ZCUVdVN1dVRkRaaXhKUVVGSkxFOUJRVThzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1lVRkJZVHRaUVVNMVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRMmhETEVsQlFVa3NUMEZCVHl4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRE9VSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFpRVVU1UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMR0ZCUVdFN1dVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlJYWkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkU3V1VGRGVFUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1lVRkJZVHRaUVVOc1JDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGY0VNc1kwRkJZenRaUVVOa0xFOUJRVThzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1lVRkJZVHRaUVVONFF5eFBRVUZQTEVkQlFVY3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVNeFFpeFBRVUZQTEVkQlFVY3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVVeFFpeHZSVUZCYjBVN1dVRkRjRVVzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVR0WlFVTjRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFRRVUZUTEVkQlFVY3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmM3V1VGRGNFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1YwRkJWeXhIUVVGSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhPMWxCUTNSRUxFMUJRVTBzU1VGQlNTeEhRVUZITEU5QlFVOHNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhSUVVGUk8xbEJSVFZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlF6RkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGTlVJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zWVVGQllUdFpRVU5vUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRiRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEycERMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVWc1F5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRzlEUVVGdlF6dFRRVU5zUkR0UlFVVkVMRzlEUVVGdlF6dFJRVU53UXl4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzFsQlEzUkNMSFZGUVVGMVJUdFpRVU4yUlN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFlzZVVOQlFYbERPMU5CUlRWRE8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hUUVVGVE8xRkJRMklzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdVVUZETjBJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrN1VVRkRNVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWs3VVVGRE1VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVazdVVUZETVVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrN1VVRkRNVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWp0UlFVTnVReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXVHRSUVVNdlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldUdFJRVU12UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlR0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZMEZCWXp0UlFVTnFReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1pVRkJaVHRKUVVOMFF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhMUVVGaExFVkJRVVVzVFVGQll6dFJRVU16UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXp0UlFVTnFReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVjc05FSkJRVFJDTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCU1N4WlFVRlpPMUZCUTJ4RExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVWtzYVVKQlFXbENPMUZCUTNaRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJTU3hOUVVGTk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCU1N4TlFVRk5PMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJTU3hOUVVGTk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCU1N4TlFVRk5PMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJTU3hOUVVGTk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCU1N4TlFVRk5PMGxCUTJoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNVVUZCVVR0UlFVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTU3hUUVVGVE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnVRenRSUVVORUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU53UXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVVVGQlVUdFJRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFGQlEycERMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRPMUZCUldwRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWk8xRkJReTlDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRla0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGREwwUTdVVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE1VUTdVVUZGUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1R0UlFVTnNReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXk5RU8xRkJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXpRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRU8xRkJSVVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVms3VVVGREwwSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUlR0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0xUkR0UlFVVkVMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpPMUZCUTJ4RExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha1U3VVVGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVVE3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRkZCUVZFN1VVRkRXaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ08xRkJRM0JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlEzcENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTzFGQlEzaENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTE8wbEJRelZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFZEJRV0VzUlVGQlJTeExRVUZsTEVWQlFVVXNVVUZCWjBJc1JVRkJSU3hKUVVGblFpeEZRVUZGTEVsQlFXZENPMUZCUTJ4SExFbEJRVWtzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTnNRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRka0lzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRDTEVsQlFVa3NSMEZCUnl4RFFVRkRPMUZCUTFJc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMllzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJZc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE1VTXNaMEpCUVdkQ08xRkJRMmhDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMmhFTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRPVUlzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrSXNWMEZCVnp0UlFVTllMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4clFrRkJhMEk3VTBGRE9VTTdZVUZCVFR0WlFVTklMRWRCUVVjc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEyNUNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1JETzFGQlEwUXNXVUZCV1R0UlFVTmFMRWxCUVVrc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETERoQ1FVRTRRanRSUVVOb1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4SFFVRkhPMUZCUTJwRkxEaERRVUU0UXp0UlFVTTVReXhKUVVGSkxFOUJRVThzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEWml4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzQkNMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRMkk3VVVGRFJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFZEJRVWNzUTBGQlF6dFJRVU5TTEU5QlFVOHNRMEZCUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRia0lzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnp0WlFVTjBSQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRPMWxCUXpWQ0xFbEJRVWtzVVVGQlVTeEpRVUZKTEVkQlFVY3NSVUZCUlR0blFrRkRha0lzUjBGQlJ5eEhRVUZITEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEV0QlFVc3NTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhGUVVGRkxGRkJRVkVzU1VGQlNTeEhRVUZITEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVN2IwSkJRMmhFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YVVKQlF6ZENPMmRDUVVORUxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUXpkQ08xbEJRMFFzUjBGQlJ5eEhRVUZITEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUlVGQlJTeERRVUZETzFOQlExQTdVVUZEUkN4SlFVRkpMRTlCUVU4c1MwRkJTeXhIUVVGSExFVkJRVVU3V1VGRGFrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU4yUWp0UlFVTkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6czdRVUYwYzBKRUxHVkJRV1U3UVVGRFV5eHZRMEZCZDBJc1IwRkJZU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOcVNDeGxRVUZsTzBGQlExTXNiVU5CUVhWQ0xFZEJRV0VzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRMjVITEdWQlFXVTdRVUZEVXl4dlEwRkJkMElzUjBGQllTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU53U0N4bFFVRmxPMEZCUTFNc2JVTkJRWFZDTEVkQlFXRTdTVUZEZUVRc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVazdTVUZET1VNc1NVRkJTU3hGUVVGRkxFbEJRVWs3UTBGRFlpeERRVUZETzBGQlJVWXNaVUZCWlR0QlFVTlRMSE5EUVVFd1FpeEhRVUZoTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyNUlMR1ZCUVdVN1FVRkRVeXh4UTBGQmVVSXNSMEZCWVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEY2tjc1pVRkJaVHRCUVVOVExITkRRVUV3UWl4SFFVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNSSUxHVkJRV1U3UVVGRFV5eHhRMEZCZVVJc1IwRkJZVHRKUVVNeFJDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTVHRKUVVNNVF5eEpRVUZKTEVWQlFVVXNTVUZCU1R0RFFVTmlMRU5CUVVNN1FVRkZSaXhsUVVGbE8wRkJRMU1zYlVKQlFVOHNSMEZCWVR0SlFVTjRReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTXhRaXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTXpRaXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTTFRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTTNRaXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTTVRaXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTTVRaXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0SlFVTTVRaXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0RFFVTnFReXhEUVVGRE8wRkJla1ZPTEd0RFFYZHpRa01pZlE9PSIsInZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZGVmbGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYWtvL2xpYi9kZWZsYXRlXCIpKTtcclxuLyoqXHJcbiAqIFBORyBFbmNvZGVyLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9wZWEvVVBORy5qc1xyXG4gKi9cclxuY2xhc3MgUG5nRW5jb2RlciB7XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSB0aGUgaW1hZ2UgZnJhbWVzIHRvIHBuZy5cclxuICAgICAqIEBwYXJhbSBidWZzIFRoZSBmcmFtZSBidWZmZXJzIHRvIGVuY29kZS5cclxuICAgICAqIEBwYXJhbSB3IFRoZSBpbWFnZSB3aWR0aC5cclxuICAgICAqIEBwYXJhbSBoIFRoZSBpbWFnZSBoZWlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBmb3IgdGhlIGltYWdlLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGUoYnVmcywgdywgaCkge1xyXG4gICAgICAgIGNvbnN0IHBzID0gMDtcclxuICAgICAgICBjb25zdCBmb3JiaWRQbHRlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZGVscyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnVmc1swXS5ieXRlTGVuZ3RoICogYnVmcy5sZW5ndGggKyAxMDApO1xyXG4gICAgICAgIGNvbnN0IHdyID0gWzB4ODksIDB4NTAsIDB4NEUsIDB4NDcsIDB4MEQsIDB4MEEsIDB4MUEsIDB4MEFdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGFbaV0gPSB3cltpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDg7XHJcbiAgICAgICAgY29uc3QgbmltZyA9IHRoaXMuY29tcHJlc3NQTkcoYnVmcywgdywgaCwgcHMsIGZvcmJpZFBsdGUpO1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgMTMpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwiSUhEUlwiKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHcpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgaCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gbmltZy5kZXB0aDtcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICBkYXRhW29mZnNldF0gPSBuaW1nLmN0eXBlO1xyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IDA7IC8vIGNvbXByZXNzXHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gMDsgLy8gZmlsdGVyXHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gMDsgLy8gaW50ZXJsYWNlXHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSAxNywgMTcpKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgLy8gOSBieXRlcyB0byBzYXksIHRoYXQgaXQgaXMgc1JHQlxyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgMSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJzUkdCXCIpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IDE7XHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSA1LCA1KSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgIGNvbnN0IGFuaW0gPSBidWZzLmxlbmd0aCA+IDE7XHJcbiAgICAgICAgaWYgKGFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCA4KTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwiYWNUTFwiKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgYnVmcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCAwKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gMTIsIDEyKSk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5pbWcuY3R5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGwgPSBuaW1nLnBsdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGRsICogMyk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcIlBMVEVcIik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpID0gaSAqIDM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gbmltZy5wbHRlW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IChjKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSAoYyA+PiA4KSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSAoYyA+PiAxNikgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIHRpICsgMF0gPSByO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyB0aSArIDFdID0gZztcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgdGkgKyAyXSA9IGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGRsICogMztcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSBkbCAqIDMgLSA0LCBkbCAqIDMgKyA0KSk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICAgICAgaWYgKG5pbWcuZ290QWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZGwpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcInRSTlNcIik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgaV0gPSAobmltZy5wbHRlW2ldID4+IDI0KSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSBkbDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gZGwgLSA0LCBkbCArIDQpKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmkgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmltZy5mcmFtZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnIgPSBuaW1nLmZyYW1lc1tqXTtcclxuICAgICAgICAgICAgaWYgKGFuaW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgMjYpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcImZjVExcIik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZmkrKyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZnIucmVjdC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZnIucmVjdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZyLnJlY3QueCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZnIucmVjdC55KTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVzaG9ydChkYXRhLCBvZmZzZXQsIGRlbHNbal0pO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVXNob3J0KGRhdGEsIG9mZnNldCwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IGZyLmRpc3Bvc2U7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQrKzsgLy8gZGlzcG9zZVxyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXRdID0gZnIuYmxlbmQ7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQrKzsgLy8gYmxlbmRcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gMzAsIDMwKSk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW1nZCA9IGZyLmNpbWc7XHJcbiAgICAgICAgICAgIGNvbnN0IGRsID0gaW1nZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZGwgKyAoaiA9PT0gMCA/IDAgOiA0KSk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICBjb25zdCBpb2ZmID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCAoaiA9PT0gMCkgPyBcIklEQVRcIiA6IFwiZmRBVFwiKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZpKyspO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIGldID0gaW1nZFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gZGw7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgaW9mZiwgb2Zmc2V0IC0gaW9mZikpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgMCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJJRU5EXCIpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gNCwgNCkpO1xyXG4gICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIuc2xpY2UoMCwgb2Zmc2V0KSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbXByZXNzUE5HKGJ1ZnMsIHcsIGgsIHBzLCBmb3JiaWRQbHRlKSB7XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gdGhpcy5jb21wcmVzcyhidWZzLCB3LCBoLCBwcywgMCwgZm9yYmlkUGx0ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZybSA9IG91dC5mcmFtZXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IG53ID0gZnJtLnJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG5oID0gZnJtLnJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBicGwgPSBmcm0uYnBsO1xyXG4gICAgICAgICAgICBjb25zdCBicHAgPSBmcm0uYnBwO1xyXG4gICAgICAgICAgICBjb25zdCBmZGF0YSA9IG5ldyBVaW50OEFycmF5KG53ICogYnBsICsgbmgpO1xyXG4gICAgICAgICAgICBmcm0uY2ltZyA9IHRoaXMuZmlsdGVyWmVybyhmcm0uaW1nLCBuaCwgYnBwLCBicGwsIGZkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29tcHJlc3MoaW5CdWZzLCB3LCBoLCBpblBzLCBmb3JHSUYsIGZvcmJpZFBsdGUpIHtcclxuICAgICAgICBsZXQgY3R5cGUgPSA2O1xyXG4gICAgICAgIGxldCBkZXB0aCA9IDg7XHJcbiAgICAgICAgbGV0IGJwcCA9IDQ7XHJcbiAgICAgICAgbGV0IGFscGhhQW5kID0gMjU1O1xyXG4gICAgICAgIGxldCBwcyA9IGluUHM7XHJcbiAgICAgICAgbGV0IGJ1ZnMgPSBpbkJ1ZnM7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBidWZzLmxlbmd0aDsgaisrKSB7IC8vIHdoZW4gbm90IHF1YW50aXplZCwgb3RoZXIgZnJhbWVzIGNhbiBjb250YWluIGNvbG9ycywgdGhhdCBhcmUgbm90IGluIGFuIGluaXRpYWwgZnJhbWVcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IFVpbnQ4QXJyYXkoYnVmc1tqXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlsZW4gPSBpbWcubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlsZW47IGkgKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgYWxwaGFBbmQgJj0gaW1nW2kgKyAzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZ290QWxwaGEgPSBhbHBoYUFuZCAhPT0gMjU1O1xyXG4gICAgICAgIGNvbnN0IGNtYXAgPSB7fTtcclxuICAgICAgICBjb25zdCBwbHRlID0gW107XHJcbiAgICAgICAgaWYgKGJ1ZnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNtYXBbMF0gPSAwO1xyXG4gICAgICAgICAgICBwbHRlLnB1c2goMCk7XHJcbiAgICAgICAgICAgIGlmIChwcyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHMtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHMgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcXJlcyA9IHRoaXMucXVhbnRpemUoYnVmcywgcHMsIGZvckdJRik7XHJcbiAgICAgICAgICAgIGJ1ZnMgPSBxcmVzLmJ1ZnM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXJlcy5wbHRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gcXJlcy5wbHRlW2ldLmVzdC5yZ2JhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtYXBbY10gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtYXBbY10gPSBwbHRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBwbHRlLnB1c2goYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHdoYXQgaWYgcHM9PTAsIGJ1dCB0aGVyZSBhcmUgPD0yNTYgY29sb3JzPyAgd2Ugc3RpbGwgbmVlZCB0byBkZXRlY3QsIGlmIHRoZSBwYWxldHRlIGNvdWxkIGJlIHVzZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBidWZzLmxlbmd0aDsgaisrKSB7IC8vIHdoZW4gbm90IHF1YW50aXplZCwgb3RoZXIgZnJhbWVzIGNhbiBjb250YWluIGNvbG9ycywgdGhhdCBhcmUgbm90IGluIGFuIGluaXRpYWwgZnJhbWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZzMyID0gbmV3IFVpbnQzMkFycmF5KGJ1ZnNbal0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWxlbiA9IGltZzMyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGltZzMyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoaSA8IHcgfHwgKGMgIT09IGltZzMyW2kgLSAxXSAmJiBjICE9PSBpbWczMltpIC0gd10pKSAmJiBjbWFwW2NdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21hcFtjXSA9IHBsdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHRlLnB1c2goYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHRlLmxlbmd0aCA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJydXRlID0gZ290QWxwaGEgPyBmb3JHSUYgOiBmYWxzZTsgLy8gYnJ1dGUgOiBmcmFtZXMgY2FuIG9ubHkgYmUgY29waWVkLCBub3QgXCJibGVuZGVkXCJcclxuICAgICAgICBjb25zdCBjYyA9IHBsdGUubGVuZ3RoO1xyXG4gICAgICAgIGlmIChjYyA8PSAyNTYgJiYgIWZvcmJpZFBsdGUpIHtcclxuICAgICAgICAgICAgaWYgKGNjIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjYyA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2MgPD0gMTYpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm9yR0lGKSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ290QWxwaGEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmcm1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBidWZzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaW1nID0gbmV3IFVpbnQ4QXJyYXkoYnVmc1tqXSk7XHJcbiAgICAgICAgICAgIGxldCBjaW1nMzIgPSBuZXcgVWludDMyQXJyYXkoY2ltZy5idWZmZXIpO1xyXG4gICAgICAgICAgICBsZXQgbnggPSAwO1xyXG4gICAgICAgICAgICBsZXQgbnkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbncgPSB3O1xyXG4gICAgICAgICAgICBsZXQgbmggPSBoO1xyXG4gICAgICAgICAgICBsZXQgYmxlbmQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gMCAmJiAhYnJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRsaW0gPSAoZm9yR0lGIHx8IGogPT09IDEgfHwgZnJtc1tmcm1zLmxlbmd0aCAtIDJdLmRpc3Bvc2UgPT09IDIpID8gMSA6IDI7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHN0cCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZWEgPSAxZTk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdCA9IDA7IGl0IDwgdGxpbTsgaXQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAzMiA9IG5ldyBVaW50MzJBcnJheShidWZzW2ogLSAxIC0gaXRdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWl4ID0gdztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWl5ID0gaDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0geSAqIHcgKyB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNpbWczMltpXSAhPT0gcDMyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPCBtaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWl4ID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCBtaXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWl5ID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPiBtYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5ID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FyZWEgPSAobWF4ID09PSAtMSkgPyAxIDogKG1heCAtIG1peCArIDEpICogKG1heSAtIG1peSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXJlYSA8IHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmVhID0gc2FyZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzdHAgPSBpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG53ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5oID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG54ID0gbWl4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnkgPSBtaXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudyA9IG1heCAtIG1peCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaCA9IG1heSAtIG1peSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaW1nID0gbmV3IFVpbnQ4QXJyYXkoYnVmc1tqIC0gMSAtIHRzdHBdKTtcclxuICAgICAgICAgICAgICAgIGlmICh0c3RwID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJtc1tmcm1zLmxlbmd0aCAtIDFdLmRpc3Bvc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmltZyA9IG5ldyBVaW50OEFycmF5KG53ICogbmggKiA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weVRpbGUocGltZywgdywgaCwgbmltZywgbncsIG5oLCAtbngsIC1ueSwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3B5VGlsZShjaW1nLCB3LCBoLCBuaW1nLCBudywgbmgsIC1ueCwgLW55LCAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29weVRpbGUoY2ltZywgdywgaCwgbmltZywgbncsIG5oLCAtbngsIC1ueSwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmQgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5VGlsZShjaW1nLCB3LCBoLCBuaW1nLCBudywgbmgsIC1ueCwgLW55LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBibGVuZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaW1nID0gbmltZztcclxuICAgICAgICAgICAgICAgIGNpbWczMiA9IG5ldyBVaW50MzJBcnJheShjaW1nLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJwbCA9IDQgKiBudztcclxuICAgICAgICAgICAgaWYgKGNjIDw9IDI1NiAmJiAhZm9yYmlkUGx0ZSkge1xyXG4gICAgICAgICAgICAgICAgYnBsID0gTWF0aC5jZWlsKGRlcHRoICogbncgLyA4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheShicGwgKiBuaCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG5oOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0geSAqIGJwbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpaSA9IHkgKiBudztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBudzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaW1nW2kgKyAoeCldID0gKGNtYXBbY2ltZzMyW2lpICsgeF1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG53OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pbWdbaSArICh4ID4+IDEpXSB8PSAoY21hcFtjaW1nMzJbaWkgKyB4XV0gPDwgKDQgLSAoeCAmIDEpICogNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlcHRoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnc7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmltZ1tpICsgKHggPj4gMildIHw9IChjbWFwW2NpbWczMltpaSArIHhdXSA8PCAoNiAtICh4ICYgMykgKiAyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBudzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaW1nW2kgKyAoeCA+PiAzKV0gfD0gKGNtYXBbY2ltZzMyW2lpICsgeF1dIDw8ICg3IC0gKHggJiA3KSAqIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNpbWcgPSBuaW1nO1xyXG4gICAgICAgICAgICAgICAgY3R5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnBwID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghZ290QWxwaGEgJiYgYnVmcy5sZW5ndGggPT09IDEpIHsgLy8gc29tZSBuZXh0IFwicmVkdWNlZFwiIGZyYW1lcyBtYXkgY29udGFpbiBhbHBoYSBmb3IgYmxlbmRpbmdcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheShudyAqIG5oICogMyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmVhID0gbncgKiBuaDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGkgPSBpICogMztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxaSA9IGkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5pbWdbdGldID0gY2ltZ1txaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbmltZ1t0aSArIDFdID0gY2ltZ1txaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5pbWdbdGkgKyAyXSA9IGNpbWdbcWkgKyAyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNpbWcgPSBuaW1nO1xyXG4gICAgICAgICAgICAgICAgY3R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnBwID0gMztcclxuICAgICAgICAgICAgICAgIGJwbCA9IDMgKiBudztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcm1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IG54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG55LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBudyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5oXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1nOiBjaW1nLFxyXG4gICAgICAgICAgICAgICAgYnBsOiBicGwsXHJcbiAgICAgICAgICAgICAgICBicHA6IGJwcCxcclxuICAgICAgICAgICAgICAgIGJsZW5kOiBibGVuZCxcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2U6IGJydXRlID8gMSA6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGN0eXBlOiBjdHlwZSwgZGVwdGg6IGRlcHRoLCBwbHRlOiBwbHRlLCBnb3RBbHBoYTogZ290QWxwaGEsIGZyYW1lczogZnJtcyB9O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaWx0ZXJaZXJvKGltZywgaCwgYnBwLCBicGwsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBmbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDU7IHQrKykge1xyXG4gICAgICAgICAgICBpZiAoaCAqIGJwbCA+IDUwMDAwMCAmJiAodCA9PT0gMiB8fCB0ID09PSAzIHx8IHQgPT09IDQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaW5lKGRhdGEsIGltZywgeSwgYnBsLCBicHAsIHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZscy5wdXNoKGRlZmxhdGVfMS5kZWZhdWx0LmRlZmxhdGUoZGF0YSkpO1xyXG4gICAgICAgICAgICBpZiAoYnBwID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGk7XHJcbiAgICAgICAgbGV0IHRzaXplID0gMWU5O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmbHNbaV0ubGVuZ3RoIDwgdHNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRpID0gaTtcclxuICAgICAgICAgICAgICAgIHRzaXplID0gZmxzW2ldLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmxzW3RpXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmlsdGVyTGluZShkYXRhLCBpbWcsIHksIGJwbCwgYnBwLCB0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgaSA9IHkgKiBicGw7XHJcbiAgICAgICAgbGV0IGRpID0gaSArIHk7XHJcbiAgICAgICAgZGF0YVtkaV0gPSB0eXBlO1xyXG4gICAgICAgIGRpKys7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gaW1nW2kgKyB4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBwOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IGltZ1tpICsgeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSAtIGltZ1tpICsgeCAtIGJwcF0gKyAyNTYpICYgMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHkgPT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicHA7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gaW1nW2kgKyB4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gaW1nW2kgKyB4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gLSAoaW1nW2kgKyB4IC0gYnBwXSA+PiAxKSArIDI1NikgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdIC0gdGhpcy5wYWV0aChpbWdbaSArIHggLSBicHBdLCAwLCAwKSArIDI1NikgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gKyAyNTYgLSBpbWdbaSArIHggLSBicGxdKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicHA7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdICsgMjU2IC0gKGltZ1tpICsgeCAtIGJwbF0gPj4gMSkpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gKyAyNTYgLSAoKGltZ1tpICsgeCAtIGJwbF0gKyBpbWdbaSArIHggLSBicHBdKSA+PiAxKSkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBwOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSArIDI1NiAtIHRoaXMucGFldGgoMCwgaW1nW2kgKyB4IC0gYnBsXSwgMCkpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gKyAyNTYgLSB0aGlzLnBhZXRoKGltZ1tpICsgeCAtIGJwcF0sIGltZ1tpICsgeCAtIGJwbF0sIGltZ1tpICsgeCAtIGJwcCAtIGJwbF0pKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcGFldGgoYSwgYiwgYykge1xyXG4gICAgICAgIGNvbnN0IHAgPSBhICsgYiAtIGM7XHJcbiAgICAgICAgY29uc3QgcGEgPSBNYXRoLmFicyhwIC0gYSk7XHJcbiAgICAgICAgY29uc3QgcGIgPSBNYXRoLmFicyhwIC0gYik7XHJcbiAgICAgICAgY29uc3QgcGMgPSBNYXRoLmFicyhwIC0gYyk7XHJcbiAgICAgICAgaWYgKHBhIDw9IHBiICYmIHBhIDw9IHBjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYiA8PSBwYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlQVNDSUkoZGF0YSwgcCwgcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhW3AgKyBpXSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlVWludChidWZmLCBwLCBuKSB7XHJcbiAgICAgICAgYnVmZltwXSA9IChuID4+IDI0KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAxXSA9IChuID4+IDE2KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAyXSA9IChuID4+IDgpICYgMjU1O1xyXG4gICAgICAgIGJ1ZmZbcCArIDNdID0gbiAmIDI1NTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVVc2hvcnQoYnVmZiwgcCwgbikge1xyXG4gICAgICAgIGJ1ZmZbcF0gPSAobiA+PiA4KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAxXSA9IG4gJiAyNTU7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvcHlUaWxlKHNiLCBzdywgc2gsIHRiLCB0dywgdGgsIHhvZmYsIHlvZmYsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB3ID0gTWF0aC5taW4oc3csIHR3KTtcclxuICAgICAgICBjb25zdCBoID0gTWF0aC5taW4oc2gsIHRoKTtcclxuICAgICAgICBsZXQgc2kgPSAwO1xyXG4gICAgICAgIGxldCB0aSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh4b2ZmID49IDAgJiYgeW9mZiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2kgPSAoeSAqIHN3ICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgICAgICB0aSA9ICgoeW9mZiArIHkpICogdHcgKyB4b2ZmICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpID0gKCgteW9mZiArIHkpICogc3cgLSB4b2ZmICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgICAgICB0aSA9ICh5ICogdHcgKyB4KSA8PCAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aV0gPSBzYltzaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAxXSA9IHNiW3NpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAyXSA9IHNiW3NpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAzXSA9IHNiW3NpICsgM107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmEgPSBzYltzaSArIDNdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gc2Jbc2ldICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmcgPSBzYltzaSArIDFdICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmIgPSBzYltzaSArIDJdICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmEgPSB0Ylt0aSArIDNdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gdGJbdGldICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmcgPSB0Ylt0aSArIDFdICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmIgPSB0Ylt0aSArIDJdICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZhID0gMSAtIGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9hID0gZmEgKyBiYSAqIGlmYTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpb2EgPSAob2EgPT09IDAgPyAwIDogMSAvIG9hKTtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDNdID0gMjU1ICogb2E7XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAwXSA9IChmciArIGJyICogaWZhKSAqIGlvYTtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDFdID0gKGZnICsgYmcgKiBpZmEpICogaW9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMl0gPSAoZmIgKyBiYiAqIGlmYSkgKiBpb2E7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAyKSB7IC8vIGNvcHkgb25seSBkaWZmZXJlbmNlcywgb3RoZXJ3aXNlIHplcm9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYSA9IHNiW3NpICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnIgPSBzYltzaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmcgPSBzYltzaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZiID0gc2Jbc2kgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYSA9IHRiW3RpICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnIgPSB0Ylt0aV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmcgPSB0Ylt0aSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gdGJbdGkgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmEgPT09IGJhICYmIGZyID09PSBiciAmJiBmZyA9PT0gYmcgJiYgZmIgPT09IGJiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDJdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAzXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aV0gPSBmcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAxXSA9IGZnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDJdID0gZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgM10gPSBmYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAzKSB7IC8vIGNoZWNrIGlmIGNhbiBiZSBibGVuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmEgPSBzYltzaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gc2Jbc2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZnID0gc2Jbc2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYiA9IHNiW3NpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmEgPSB0Ylt0aSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gdGJbdGldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnID0gdGJbdGkgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYiA9IHRiW3RpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhID09PSBiYSAmJiBmciA9PT0gYnIgJiYgZmcgPT09IGJnICYmIGZiID09PSBiYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihmYSE9MjU1ICYmIGJhIT0wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhIDwgMjIwICYmIGJhID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JjKGIsIG8sIGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmNVcGRhdGUoMHhGRkZGRkZGRiwgYiwgbywgbCkgXiAweEZGRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmNVcGRhdGUoYywgYnVmLCBvZmYsIGxlbikge1xyXG4gICAgICAgIGxldCBsb2NhbEMgPSBjO1xyXG4gICAgICAgIGNvbnN0IGNyY1RhYmxlID0gdGhpcy5jcmNUYWJsZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbG9jYWxDID0gY3JjVGFibGVbKGxvY2FsQyBeIGJ1ZltvZmYgKyBpXSkgJiAweEZGXSBeIChsb2NhbEMgPj4+IDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYWxDO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmNUYWJsZSgpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVWludDMyQXJyYXkoMjU2KTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDI1NjsgbisrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjICYgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAweEVEQjg4MzIwIF4gKGMgPj4+IDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMgPj4+IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFiW25dID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemUoYnVmcywgcHMsIHJvdW5kQWxwaGEpIHtcclxuICAgICAgICBjb25zdCBpbWdzID0gW107XHJcbiAgICAgICAgbGV0IHRvdGwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpbWdzLnB1c2godGhpcy5hbHBoYU11bChuZXcgVWludDhBcnJheShidWZzW2ldKSwgcm91bmRBbHBoYSkpO1xyXG4gICAgICAgICAgICB0b3RsICs9IGJ1ZnNbaV0uYnl0ZUxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmltZyA9IG5ldyBVaW50OEFycmF5KHRvdGwpO1xyXG4gICAgICAgIGNvbnN0IG5pbWczMiA9IG5ldyBVaW50MzJBcnJheShuaW1nLmJ1ZmZlcik7XHJcbiAgICAgICAgbGV0IG5vZmYgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBpbWdzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpbCA9IGltZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaWw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbmltZ1tub2ZmICsgal0gPSBpbWdbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9mZiArPSBpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHtcclxuICAgICAgICAgICAgaTA6IDAsXHJcbiAgICAgICAgICAgIGkxOiBuaW1nLmxlbmd0aCxcclxuICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICBlc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHRkc3Q6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsXHJcbiAgICAgICAgfTsgLy8gYmFzaWMgc3RhdGlzdGljLCBleHRyYSBzdGF0aXN0aWNcclxuICAgICAgICByb290LmJzdCA9IHRoaXMucXVhbnRpemVTdGF0cyhuaW1nLCByb290LmkwLCByb290LmkxKTtcclxuICAgICAgICByb290LmVzdCA9IHRoaXMucXVhbnRpemVFc3RhdHMocm9vdC5ic3QpO1xyXG4gICAgICAgIGNvbnN0IGxlYWZzID0gW3Jvb3RdO1xyXG4gICAgICAgIHdoaWxlIChsZWFmcy5sZW5ndGggPCBwcykge1xyXG4gICAgICAgICAgICBsZXQgbWF4TCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVhZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZWFmc1tpXS5lc3QuTCA+IG1heEwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhMID0gbGVhZnNbaV0uZXN0Lkw7XHJcbiAgICAgICAgICAgICAgICAgICAgbWkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtYXhMIDwgMWUtMykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGxlYWZzW21pXTtcclxuICAgICAgICAgICAgY29uc3QgczAgPSB0aGlzLnF1YW50aXplU3BsaXRQaXhlbHMobmltZywgbmltZzMyLCBub2RlLmkwLCBub2RlLmkxLCBub2RlLmVzdC5lLCBub2RlLmVzdC5lTXEyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBsbiA9IHtcclxuICAgICAgICAgICAgICAgIGkwOiBub2RlLmkwLFxyXG4gICAgICAgICAgICAgICAgaTE6IHMwLFxyXG4gICAgICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGRzdDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByaWdodDogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsbi5ic3QgPSB0aGlzLnF1YW50aXplU3RhdHMobmltZywgbG4uaTAsIGxuLmkxKTtcclxuICAgICAgICAgICAgbG4uZXN0ID0gdGhpcy5xdWFudGl6ZUVzdGF0cyhsbi5ic3QpO1xyXG4gICAgICAgICAgICBjb25zdCBybiA9IHtcclxuICAgICAgICAgICAgICAgIGkwOiBzMCxcclxuICAgICAgICAgICAgICAgIGkxOiBub2RlLmkxLFxyXG4gICAgICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGRzdDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByaWdodDogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBybi5ic3QgPSB7XHJcbiAgICAgICAgICAgICAgICBSOiBbXSxcclxuICAgICAgICAgICAgICAgIG06IFtdLFxyXG4gICAgICAgICAgICAgICAgTjogbm9kZS5ic3QuTiAtIGxuLmJzdC5OXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm4uYnN0LlJbaV0gPSBub2RlLmJzdC5SW2ldIC0gbG4uYnN0LlJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJuLmJzdC5tW2ldID0gbm9kZS5ic3QubVtpXSAtIGxuLmJzdC5tW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJuLmVzdCA9IHRoaXMucXVhbnRpemVFc3RhdHMocm4uYnN0KTtcclxuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbG47XHJcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBybjtcclxuICAgICAgICAgICAgbGVhZnNbbWldID0gbG47XHJcbiAgICAgICAgICAgIGxlYWZzLnB1c2gocm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZWFmcy5zb3J0KChhLCBiKSA9PiBiLmJzdC5OIC0gYS5ic3QuTik7XHJcbiAgICAgICAgY29uc3Qgb3V0QnVmcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBpbWdzLmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzYiA9IG5ldyBVaW50OEFycmF5KGltZ3NbaWldKTtcclxuICAgICAgICAgICAgY29uc3QgdGIgPSBuZXcgVWludDMyQXJyYXkoaW1nc1tpaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBzYi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzYltpXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBzYltpICsgMV0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gc2JbaSArIDJdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHNiW2kgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgIC8vICBleGFjdCwgYnV0IHRvbyBzbG93IDooXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBuZCA9IFVQTkcucXVhbnRpemUuZ2V0TmVhcmVzdChyb290LCByLCBnLCBiLCBhKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZCA9IHJvb3Q7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmQubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5kID0gKHRoaXMucXVhbnRpemVQbGFuZURzdChuZC5lc3QsIHIsIGcsIGIsIGEpIDw9IDApID8gbmQubGVmdCA6IG5kLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGJbaSA+PiAyXSA9IG5kLmVzdC5yZ2JhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dEJ1ZnNbaWldID0gdGIuYnVmZmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBidWZzOiBvdXRCdWZzLCBwbHRlOiBsZWFmcyB9O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBxdWFudGl6ZVN0YXRzKG5pbWcsIGkwLCBpMSkge1xyXG4gICAgICAgIGNvbnN0IFIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICAgICAgY29uc3QgbSA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBOID0gKGkxIC0gaTApID4+IDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGkwOyBpIDwgaTE7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbmltZ1tpXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgY29uc3QgZyA9IG5pbWdbaSArIDFdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbmltZ1tpICsgMl0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBuaW1nW2kgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgLy9sZXQgciA9IG5pbWdbaV0sIGcgPSBuaW1nW2krMV0sIGIgPSBuaW1nW2krMl0sIGEgPSBuaW1nW2krM107XHJcbiAgICAgICAgICAgIG1bMF0gKz0gcjtcclxuICAgICAgICAgICAgbVsxXSArPSBnO1xyXG4gICAgICAgICAgICBtWzJdICs9IGI7XHJcbiAgICAgICAgICAgIG1bM10gKz0gYTtcclxuICAgICAgICAgICAgUlswXSArPSByICogcjtcclxuICAgICAgICAgICAgUlsxXSArPSByICogZztcclxuICAgICAgICAgICAgUlsyXSArPSByICogYjtcclxuICAgICAgICAgICAgUlszXSArPSByICogYTtcclxuICAgICAgICAgICAgUls1XSArPSBnICogZztcclxuICAgICAgICAgICAgUls2XSArPSBnICogYjtcclxuICAgICAgICAgICAgUls3XSArPSBnICogYTtcclxuICAgICAgICAgICAgUlsxMF0gKz0gYiAqIGI7XHJcbiAgICAgICAgICAgIFJbMTFdICs9IGIgKiBhO1xyXG4gICAgICAgICAgICBSWzE1XSArPSBhICogYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUls0XSA9IFJbMV07XHJcbiAgICAgICAgUls4XSA9IFJbMl07XHJcbiAgICAgICAgUlsxMl0gPSBSWzNdO1xyXG4gICAgICAgIFJbOV0gPSBSWzZdO1xyXG4gICAgICAgIFJbMTNdID0gUls3XTtcclxuICAgICAgICBSWzE0XSA9IFJbMTFdO1xyXG4gICAgICAgIHJldHVybiB7IFI6IFIsIG06IG0sIE46IE4gfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVFc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICBjb25zdCBSID0gc3RhdHMuUjtcclxuICAgICAgICBjb25zdCBtID0gc3RhdHMubTtcclxuICAgICAgICBjb25zdCBOID0gc3RhdHMuTjtcclxuICAgICAgICBjb25zdCBtMCA9IG1bMF07XHJcbiAgICAgICAgY29uc3QgbTEgPSBtWzFdO1xyXG4gICAgICAgIGNvbnN0IG0yID0gbVsyXTtcclxuICAgICAgICBjb25zdCBtMyA9IG1bM107XHJcbiAgICAgICAgY29uc3QgaU4gPSAoTiA9PT0gMCA/IDAgOiAxIC8gTik7XHJcbiAgICAgICAgY29uc3QgcmogPSBbXHJcbiAgICAgICAgICAgIFJbMF0gLSBtMCAqIG0wICogaU4sIFJbMV0gLSBtMCAqIG0xICogaU4sIFJbMl0gLSBtMCAqIG0yICogaU4sIFJbM10gLSBtMCAqIG0zICogaU4sXHJcbiAgICAgICAgICAgIFJbNF0gLSBtMSAqIG0wICogaU4sIFJbNV0gLSBtMSAqIG0xICogaU4sIFJbNl0gLSBtMSAqIG0yICogaU4sIFJbN10gLSBtMSAqIG0zICogaU4sXHJcbiAgICAgICAgICAgIFJbOF0gLSBtMiAqIG0wICogaU4sIFJbOV0gLSBtMiAqIG0xICogaU4sIFJbMTBdIC0gbTIgKiBtMiAqIGlOLCBSWzExXSAtIG0yICogbTMgKiBpTixcclxuICAgICAgICAgICAgUlsxMl0gLSBtMyAqIG0wICogaU4sIFJbMTNdIC0gbTMgKiBtMSAqIGlOLCBSWzE0XSAtIG0zICogbTIgKiBpTiwgUlsxNV0gLSBtMyAqIG0zICogaU5cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IEEgPSByajtcclxuICAgICAgICBsZXQgYiA9IFswLjUsIDAuNSwgMC41LCAwLjVdO1xyXG4gICAgICAgIGxldCBtaSA9IDA7XHJcbiAgICAgICAgbGV0IHRtaSA9IDA7XHJcbiAgICAgICAgaWYgKE4gIT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5tNE11bHRWZWMoQSwgYik7XHJcbiAgICAgICAgICAgICAgICB0bWkgPSBNYXRoLnNxcnQodGhpcy5tNERvdChiLCBiKSk7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5tNFNtbCgxIC8gdG1pLCBiKTtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0bWkgLSBtaSkgPCAxZS05KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtaSA9IHRtaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2IgPSBbMCwwLDEsMF07ICBtaT1OO1xyXG4gICAgICAgIGNvbnN0IHEgPSBbbTAgKiBpTiwgbTEgKiBpTiwgbTIgKiBpTiwgbTMgKiBpTl07XHJcbiAgICAgICAgY29uc3QgZU1xMjU1ID0gdGhpcy5tNERvdCh0aGlzLm00U21sKDI1NSwgcSksIGIpO1xyXG4gICAgICAgIGNvbnN0IGlhID0gKHFbM10gPCAwLjAwMSkgPyAwIDogMSAvIHFbM107XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQ292OiByaixcclxuICAgICAgICAgICAgcTogcSxcclxuICAgICAgICAgICAgZTogYixcclxuICAgICAgICAgICAgTDogbWksXHJcbiAgICAgICAgICAgIGVNcTI1NTogZU1xMjU1LFxyXG4gICAgICAgICAgICBlTXE6IHRoaXMubTREb3QoYiwgcSksXHJcbiAgICAgICAgICAgIHJnYmE6ICgoKE1hdGgucm91bmQoMjU1ICogcVszXSkgPDwgMjQpIHwgKE1hdGgucm91bmQoMjU1ICogcVsyXSAqIGlhKSA8PCAxNikgfCAoTWF0aC5yb3VuZCgyNTUgKiBxWzFdICogaWEpIDw8IDgpIHwgKE1hdGgucm91bmQoMjU1ICogcVswXSAqIGlhKSA8PCAwKSkgPj4+IDApXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVQbGFuZURzdChlc3QsIHIsIGcsIGIsIGEpIHtcclxuICAgICAgICBjb25zdCBlID0gZXN0LmU7XHJcbiAgICAgICAgcmV0dXJuIGVbMF0gKiByICsgZVsxXSAqIGcgKyBlWzJdICogYiArIGVbM10gKiBhIC0gZXN0LmVNcTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVTcGxpdFBpeGVscyhuaW1nLCBuaW1nMzIsIGkwaW4sIGkxaW4sIGUsIGVNcSkge1xyXG4gICAgICAgIGxldCBpMSA9IGkxaW4gLSA0O1xyXG4gICAgICAgIGxldCBpMCA9IGkwaW47XHJcbiAgICAgICAgd2hpbGUgKGkwIDwgaTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMucXVhbnRpemVWZWNEb3QobmltZywgaTAsIGUpIDw9IGVNcSkge1xyXG4gICAgICAgICAgICAgICAgaTAgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5xdWFudGl6ZVZlY0RvdChuaW1nLCBpMSwgZSkgPiBlTXEpIHtcclxuICAgICAgICAgICAgICAgIGkxIC09IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkwID49IGkxKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ID0gbmltZzMyW2kwID4+IDJdO1xyXG4gICAgICAgICAgICBuaW1nMzJbaTAgPj4gMl0gPSBuaW1nMzJbaTEgPj4gMl07XHJcbiAgICAgICAgICAgIG5pbWczMltpMSA+PiAyXSA9IHQ7XHJcbiAgICAgICAgICAgIGkwICs9IDQ7XHJcbiAgICAgICAgICAgIGkxIC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnF1YW50aXplVmVjRG90KG5pbWcsIGkwLCBlKSA+IGVNcSkge1xyXG4gICAgICAgICAgICBpMCAtPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTAgKyA0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBxdWFudGl6ZVZlY0RvdChuaW1nLCBpLCBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5pbWdbaV0gKiBlWzBdICsgbmltZ1tpICsgMV0gKiBlWzFdICsgbmltZ1tpICsgMl0gKiBlWzJdICsgbmltZ1tpICsgM10gKiBlWzNdO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtNE11bHRWZWMobSwgdikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG1bMF0gKiB2WzBdICsgbVsxXSAqIHZbMV0gKyBtWzJdICogdlsyXSArIG1bM10gKiB2WzNdLFxyXG4gICAgICAgICAgICBtWzRdICogdlswXSArIG1bNV0gKiB2WzFdICsgbVs2XSAqIHZbMl0gKyBtWzddICogdlszXSxcclxuICAgICAgICAgICAgbVs4XSAqIHZbMF0gKyBtWzldICogdlsxXSArIG1bMTBdICogdlsyXSArIG1bMTFdICogdlszXSxcclxuICAgICAgICAgICAgbVsxMl0gKiB2WzBdICsgbVsxM10gKiB2WzFdICsgbVsxNF0gKiB2WzJdICsgbVsxNV0gKiB2WzNdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbTREb3QoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB4WzBdICogeVswXSArIHhbMV0gKiB5WzFdICsgeFsyXSAqIHlbMl0gKyB4WzNdICogeVszXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbTRTbWwoYSwgeSkge1xyXG4gICAgICAgIHJldHVybiBbYSAqIHlbMF0sIGEgKiB5WzFdLCBhICogeVsyXSwgYSAqIHlbM11dO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBhbHBoYU11bChpbWcsIHJvdW5kQSkge1xyXG4gICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheShpbWcubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhcmVhID0gaW1nLmxlbmd0aCA+PiAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHFpID0gaSA8PCAyO1xyXG4gICAgICAgICAgICBsZXQgaWEgPSBpbWdbcWkgKyAzXTtcclxuICAgICAgICAgICAgaWYgKHJvdW5kQSkge1xyXG4gICAgICAgICAgICAgICAgaWEgPSAoKGlhIDwgMTI4KSkgPyAwIDogMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpYSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgbmltZ1txaSArIDBdID0gaW1nW3FpICsgMF0gKiBhO1xyXG4gICAgICAgICAgICBuaW1nW3FpICsgMV0gPSBpbWdbcWkgKyAxXSAqIGE7XHJcbiAgICAgICAgICAgIG5pbWdbcWkgKyAyXSA9IGltZ1txaSArIDJdICogYTtcclxuICAgICAgICAgICAgbmltZ1txaSArIDNdID0gaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuaW1nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG5nRW5jb2RlciA9IFBuZ0VuY29kZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHNW5SVzVqYjJSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5cGJXRm5aWE12Y0c1blJXNWpiMlJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc0swUkJRVzlETzBGQlJYQkRPenM3UjBGSFJ6dEJRVU5JTzBsQlEwazdPenM3T3p0UFFVMUhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVzFDTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRia1FzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJJc1RVRkJUU3hWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzcENMRTFCUVUwc1NVRkJTU3hIUVVGVkxGTkJRVk1zUTBGQlF6dFJRVU01UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU40UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1Q08xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUldZc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkZNVVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEycERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXhRaXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU5VTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6RkNMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMVFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmM3VVVGRE4wSXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRWQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVenRSUVVNelFpeE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTlVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpPMUZCUXpsQ0xFMUJRVTBzUlVGQlJTeERRVUZETzFGQlExUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVJDeE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUVHRSUVVWdVFpeHJRMEZCYTBNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrSXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRWQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkVMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlJXNUNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzU1VGQlNTeEZRVUZGTzFsQlEwNHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV2l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOYUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMW9zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVSQ3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0VFFVTjBRanRSUVVWRUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRiRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjZRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOcVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGNFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmRDUVVONlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkROMEk3V1VGRFJDeE5RVUZOTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOcVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVSU3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0WlFVVnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdaMEpCUTJZc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU5xUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRkRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRXaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03YVVKQlEycEVPMmRDUVVORUxFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTJJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMFJTeE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUVHRoUVVOMFFqdFRRVU5LTzFGQlJVUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlEwNHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOcVF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOYUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGRE5VTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM2hETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMW9zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnlReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVNeFFpeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVN1owSkJRM0JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTjRRaXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRTdaMEpCUTJ4Q0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpsRUxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMkZCUTNSQ08xbEJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeE5RVUZOTEVWQlFVVXNSMEZCVnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJReTlDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrUXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOYUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXp0WlFVTndRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETTBRc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5hTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRFZDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTm1PMWxCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE9VSTdXVUZEUkN4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNSU3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0VFFVTjBRanRSUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMW9zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUlc1Q0xFOUJRVThzU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4WFFVRlhMRU5CUVVNc1NVRkJiVUlzUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVZVc1JVRkJSU3hWUVVGdFFqdFJRVU14Uml4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRla1FzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRiRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTXhRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRaUVVNelFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRE8xbEJRM0JDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU03V1VGRGNFSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNMVF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTTFSRHRSUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEyWXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUkxFTkJRVU1zVFVGQmNVSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFbEJRVmtzUlVGQlJTeE5RVUZqTEVWQlFVVXNWVUZCYlVJN1VVRkRNMGNzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMW9zU1VGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVZzUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZITEhkR1FVRjNSanRaUVVNM1NDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPMWxCUTNoQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRPVUlzVVVGQlVTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VSTdVMEZEU2p0UlFVTkVMRWxCUVVrc1VVRkJVU3hIUVVGWkxGRkJRVkVzUzBGQlN5eEhRVUZITEVOQlFVTTdVVUZGZWtNc1RVRkJUU3hKUVVGSkxFZEJRVFpDTEVWQlFVVXNRMEZCUXp0UlFVTXhReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnVRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmlMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZEVml4RlFVRkZMRVZCUVVVc1EwRkJRenRoUVVOU08xTkJRMG83VVVGRlJDeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRWaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEYWtJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOMlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRMmhETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJUdHZRa0ZEYWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEyaENPMkZCUTBvN1UwRkRTanRoUVVGTk8xbEJRMGdzYjBkQlFXOUhPMWxCUTNCSExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVjc2QwWkJRWGRHTzJkQ1FVTTNTQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtNc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRNVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkRNMElzVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU51UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzNkQ1FVTXhSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenQzUWtGRGRFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dDNRa0ZEWWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGT3pSQ1FVTndRaXhOUVVGTk8zbENRVU5VTzNGQ1FVTktPMmxDUVVOS08yRkJRMG83VTBGRFNqdFJRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJSU3h0UkVGQmJVUTdVVUZETjBZc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFVkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVOVUxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWWp0cFFrRkJUU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVTdaMEpCUTJoQ0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWWp0cFFrRkJUU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVTdaMEpCUTJwQ0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWWp0cFFrRkJUVHRuUWtGRFNDeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTJJN1dVRkRSQ3hKUVVGSkxFMUJRVTBzUlVGQlJUdG5Ra0ZEVWl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRMkk3V1VGRFJDeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTI1Q08xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFWa3NSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVVeFF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV0N4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUTI1Q0xFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRhRVlzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOaUxFbEJRVWtzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRhRUlzUzBGQlN5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlR0dlFrRkRPVUlzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE9VTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5hTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRFdpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFlpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFlpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPM2RDUVVONFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPelJDUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czBRa0ZEY0VJc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZERRVU4wUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3YjBOQlExUXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUTBGRFdEdG5RMEZEUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3YjBOQlExUXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUTBGRFdEdG5RMEZEUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3YjBOQlExUXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUTBGRFdEdG5RMEZEUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3YjBOQlExUXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUTBGRFdEczJRa0ZEU2p0NVFrRkRTanR4UWtGRFNqdHZRa0ZEUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyNUZMRWxCUVVrc1MwRkJTeXhIUVVGSExFdEJRVXNzUlVGQlJUdDNRa0ZEWml4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8zZENRVU5rTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN2QwSkJRMVlzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRMW9zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXpzMFFrRkRVQ3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTlFMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03TkVKQlExQXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGRFZqczJRa0ZCVFRzMFFrRkRTQ3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZET3pSQ1FVTlVMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03TkVKQlExUXNSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTnVRaXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2VVSkJRM1JDTzNGQ1FVTktPMmxDUVVOS08yZENRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaEVMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdHZRa0ZEV2l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU55UXp0blFrRkZSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjZReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOeVJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEzUkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKRUxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUTJJN2NVSkJRVTA3YjBKQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY2tRc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEWWp0blFrRkRSQ3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTmFMRTFCUVUwc1IwRkJSeXhKUVVGSkxGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRFJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMnBDTEVsQlFVa3NSVUZCUlN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETVVJc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU4wUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU42UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzI5Q1FVTnNRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVOc1FpeEpRVUZKTEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVN2QwSkJRMklzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlRzMFFrRkRla0lzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUXpGRE8zRkNRVU5LTzNsQ1FVRk5MRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUlVGQlJUdDNRa0ZEY0VJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUczBRa0ZEZWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOeVJUdHhRa0ZEU2p0NVFrRkJUU3hKUVVGSkxFdEJRVXNzUzBGQlN5eERRVUZETEVWQlFVVTdkMEpCUTNCQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdORUpCUTNwQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGRGNrVTdjVUpCUTBvN2VVSkJRVTBzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPM2RDUVVOd1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEzSkZPM0ZDUVVOS08ybENRVU5LTzJkQ1FVTkVMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlExb3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFZpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTFnN2FVSkJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTERSRVFVRTBSRHRuUWtGRGNrY3NUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEY2tJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZETTBJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRha0lzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRGFrSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRjRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJReTlDTzJkQ1FVTkVMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlExb3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFZpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOU0xFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMkZCUTJoQ08xbEJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRUaXhKUVVGSkxFVkJRVVU3YjBKQlEwWXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTB3c1MwRkJTeXhGUVVGRkxFVkJRVVU3YjBKQlExUXNUVUZCVFN4RlFVRkZMRVZCUVVVN2FVSkJRMkk3WjBKQlEwUXNSMEZCUnl4RlFVRkZMRWxCUVVrN1owSkJRMVFzUjBGQlJ5eEZRVUZGTEVkQlFVYzdaMEpCUTFJc1IwRkJSeXhGUVVGRkxFZEJRVWM3WjBKQlExSXNTMEZCU3l4RlFVRkZMRXRCUVVzN1owSkJRMW9zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzcENMRU5CUVVNc1EwRkJRenRUUVVOT08xRkJRMFFzVDBGQlR5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPMGxCUTNoR0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNWVUZCVlN4RFFVRkRMRWRCUVdVc1JVRkJSU3hEUVVGVExFVkJRVVVzUjBGQlZ5eEZRVUZGTEVkQlFWY3NSVUZCUlN4SlFVRm5RanRSUVVOeVJpeE5RVUZOTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzaENMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU55UkN4VFFVRlRPMkZCUTFvN1dVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjRRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRPVU03V1VGRFJDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOWUxFMUJRVTA3WVVGRFZEdFRRVU5LTzFGQlEwUXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRVQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEYUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRGRrSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFVDeExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dGhRVU42UWp0VFFVTktPMUZCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFZRVUZWTEVOQlFVTXNTVUZCWjBJc1JVRkJSU3hIUVVGbExFVkJRVVVzUTBGQlV5eEZRVUZGTEVkQlFWY3NSVUZCUlN4SFFVRlhMRVZCUVVVc1NVRkJXVHRSUVVOdVJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMnhDTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFppeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZGZEVJc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlExb3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRemRDTzFOQlEwbzdZVUZCVFN4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGJrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRemRDTzFsQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE5VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUXpsRU8xTkJRMG83WVVGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpkQ08xbEJSVVFzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUXpWQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkROMEk3WVVGRFNqdFpRVU5FTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRFdpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRGNrVTdZVUZEU2p0WlFVTkVMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU0xUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2FVSkJRMmhHTzJGQlEwbzdVMEZEU2p0aFFVRk5PMWxCUTBnc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlF6RkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRE9VUTdZVUZEU2p0WlFVTkVMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU14UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEY2tVN1owSkJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkROVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU14Ump0aFFVTktPMWxCUTBRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlF6RkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRGFFWTdaMEpCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZETlVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2FVSkJRM0JJTzJGQlEwbzdVMEZEU2p0SlFVTk1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzUzBGQlN5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVONlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU53UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU16UWl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlR0WlFVTjBRaXhQUVVGUExFTkJRVU1zUTBGQlF6dFRRVU5hTzJGQlFVMHNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRMnBDTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTFvN1VVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1ZVRkJWU3hEUVVGRExFbEJRV2RDTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRja1FzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRMMElzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJwRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VFFVRlRMRU5CUVVNc1NVRkJaMElzUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXp0UlFVTndSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6ZENMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmRCUVZjc1EwRkJReXhKUVVGblFpeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTNSRUxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVU3hEUVVGRExFVkJRV01zUlVGQlJTeEZRVUZWTEVWQlFVVXNSVUZCVlN4RlFVRkZMRVZCUVdNc1JVRkJSU3hGUVVGVkxFVkJRVVVzUlVGQlZTeEZRVUZGTEVsQlFWa3NSVUZCUlN4SlFVRlpMRVZCUVVVc1NVRkJXVHRSUVVOeVNTeE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16UWl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRXQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzaENMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZPMjlDUVVONFFpeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRka0lzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlF6RkRPM0ZDUVVGTk8yOUNRVU5JTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTNoRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTXhRanRuUWtGRlJDeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN2IwSkJRMW9zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZEYUVJc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjRRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNoQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRNMEk3Y1VKQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU51UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU4yUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRE0wSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlEyeERMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRM1pDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVNelFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0dlFrRkZNMElzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRGJrSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTNwQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlEzQkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRGRFSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzI5Q1FVTnVReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRMjVETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEZEVNN2NVSkJRVTBzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc2QwTkJRWGRETzI5Q1FVTTNSQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU4wUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUTJ4Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNSQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRGJFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPM2RDUVVOc1JDeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU5ZTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTm1MRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVObUxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zRkNRVU5zUWp0NVFrRkJUVHQzUWtGRFNDeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8zZENRVU5hTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzNkQ1FVTm9RaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenQzUWtGRGFFSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdjVUpCUTI1Q08ybENRVU5LTzNGQ1FVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTERCQ1FVRXdRanR2UWtGREwwTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU5zUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU4wUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUTJ4Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JDTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdDNRa0ZEYkVRc1UwRkJVenR4UWtGRFdqdHZRa0ZEUkN4dlEwRkJiME03YjBKQlEzQkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFZEJRVWNzU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPM2RDUVVOeVFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0eFFrRkRhRUk3YVVKQlEwbzdZVUZEU2p0VFFVTktPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hIUVVGSExFTkJRVU1zUTBGQllTeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUXpORExFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkROVVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VFFVRlRMRU5CUVVNc1EwRkJVeXhGUVVGRkxFZEJRV1VzUlVGQlJTeEhRVUZYTEVWQlFVVXNSMEZCVnp0UlFVTnNSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWml4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYWtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU14UWl4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU4wUlR0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVVHRSUVVOYUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnBETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFZc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTlFMRU5CUVVNc1IwRkJSeXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRemxDTzNGQ1FVRk5PMjlDUVVOSUxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVObU8yRkJRMG83V1VGRFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRMlE3VVVGRFJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVVVGQlVTeERRVUZETEVsQlFXMUNMRVZCUVVVc1JVRkJWU3hGUVVGRkxGVkJRV3RDTzFGQlEyaEZMRTFCUVUwc1NVRkJTU3hIUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEySXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVVFzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU03VTBGRE9VSTdVVUZGUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE5VTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMklzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRiRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGRFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGVrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNMEk3V1VGRFJDeEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMU5CUTJRN1VVRkZSQ3hOUVVGTkxFbEJRVWtzUjBGQlV6dFpRVU5tTEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTB3c1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTzFsQlEyWXNSMEZCUnl4RlFVRkZMRWxCUVVrN1dVRkRWQ3hIUVVGSExFVkJRVVVzU1VGQlNUdFpRVU5VTEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTFBc1NVRkJTU3hGUVVGRkxFbEJRVWs3V1VGRFZpeExRVUZMTEVWQlFVVXNTVUZCU1R0VFFVTmtMRU5CUVVNc1EwRkJSU3h0UTBGQmJVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNwRExFMUJRVTBzUzBGQlN5eEhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZOMElzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVOMFFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRZaXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV0N4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEYmtNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVU3YjBKQlEzWkNMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOcVF6dGhRVU5LTzFsQlEwUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hGUVVGRk8yZENRVU5pTEUxQlFVMDdZVUZEVkR0WlFVTkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVjJRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVWcVJ5eE5RVUZOTEVWQlFVVXNSMEZCVXp0blFrRkRZaXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVTdaMEpCUTFnc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlEwNHNSMEZCUnl4RlFVRkZMRWxCUVVrN1owSkJRMVFzUjBGQlJ5eEZRVUZGTEVsQlFVazdaMEpCUTFRc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlExQXNTVUZCU1N4RlFVRkZMRWxCUVVrN1owSkJRMVlzUzBGQlN5eEZRVUZGTEVsQlFVazdZVUZEWkN4RFFVRkRPMWxCUTBZc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOb1JDeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFMUJRVTBzUlVGQlJTeEhRVUZUTzJkQ1FVTmlMRVZCUVVVc1JVRkJSU3hGUVVGRk8yZENRVU5PTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRFdDeEhRVUZITEVWQlFVVXNTVUZCU1R0blFrRkRWQ3hIUVVGSExFVkJRVVVzU1VGQlNUdG5Ra0ZEVkN4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRFVDeEpRVUZKTEVWQlFVVXNTVUZCU1R0blFrRkRWaXhMUVVGTExFVkJRVVVzU1VGQlNUdGhRVU5rTEVOQlFVTTdXVUZEUml4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSE8yZENRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTk1MRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRE0wSXNRMEZCUXp0WlFVTkdMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzcENMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpkRE8xbEJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRlRUlzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE4wTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSWEpETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMllzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVObUxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRiRUk3VVVGRFJDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWNFF5eE5RVUZOTEU5QlFVOHNSMEZCYTBJc1JVRkJSU3hEUVVGRE8xRkJRMnhETEV0QlFVc3NTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRk8xbEJRM0pETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzUlVGQlJTeEhRVUZuUWl4SlFVRkpMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRPMWxCUlhSQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkROMElzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNMVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5vUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVWb1F5d3dRa0ZCTUVJN1owSkJRekZDTEhORVFVRnpSRHRuUWtGRGRFUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8yZENRVU5rTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSVHR2UWtGRFdpeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXp0cFFrRkRPVVU3WjBKQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJRenRoUVVNMVFqdFpRVU5FTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzFOQlF6TkNPMUZCUTBRc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRekZETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1lVRkJZU3hEUVVGRExFbEJRV2RDTEVWQlFVVXNSVUZCVlN4RlFVRkZMRVZCUVZVN1VVRkRNVVFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZETjBJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6bENMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnNReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExDdEVRVUVyUkR0WlFVTXZSQ3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlJUTkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5FTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTFReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJReTlDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEyeENPMUZCUTBRc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSV3BHTEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1kwRkJZeXhEUVVGRExFdEJRVGhETzFGQlUycEZMRTFCUVUwc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUld4Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaENMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBETEUxQlFVMHNSVUZCUlN4SFFVRkhPMWxCUTFBc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTnNSaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUTJ4R0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1dVRkRjRVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSVHRUUVVONlJpeERRVUZETzFGQlJVWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMklzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRldpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRWQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjZRaXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzcENMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJ4RExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTzI5Q1FVTXpRaXhOUVVGTk8ybENRVU5VTzJkQ1FVTkVMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRFdqdFRRVU5LTzFGQlEwUXNkVUpCUVhWQ08xRkJRM1pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXk5RExFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmFrUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVY2UXl4UFFVRlBPMWxCUTBnc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRFVDeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTktMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJRMG9zUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEVEN4TlFVRk5MRVZCUVVVc1RVRkJUVHRaUVVOa0xFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMnBMTEVOQlFVTTdTVUZEVGl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHZENRVUZuUWl4RFFVRkRMRWRCUVdsRExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOc1J5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2JVSkJRVzFDTEVOQlFVTXNTVUZCWjBJc1JVRkJSU3hOUVVGdFFpeEZRVUZGTEVsQlFWa3NSVUZCUlN4SlFVRlpMRVZCUVVVc1EwRkJWeXhGUVVGRkxFZEJRVmM3VVVGRGJrZ3NTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5zUWl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRFpDeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVTdaMEpCUXpWRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEV0R0WlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdG5Ra0ZETTBNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU5ZTzFsQlEwUXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8yZENRVU5XTEUxQlFVMDdZVUZEVkR0WlFVVkVMRTFCUVUwc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzVFVGQlRTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSWEJDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRVaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlExZzdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRE0wTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOWU8xRkJRMFFzVDBGQlR5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNZMEZCWXl4RFFVRkRMRWxCUVdkQ0xFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWYzdVVUZETTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BHTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFTkJRVmNzUlVGQlJTeERRVUZYTzFGQlEzUkRMRTlCUVU4N1dVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVJDeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0xUkN4RFFVRkRPMGxCUTA0c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeExRVUZMTEVOQlFVTXNRMEZCVnl4RlFVRkZMRU5CUVZjN1VVRkRiRU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNTMEZCU3l4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGWE8xRkJRMmhETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UlFVRlJMRU5CUVVNc1IwRkJaU3hGUVVGRkxFMUJRV003VVVGRE5VTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNMElzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOc1FpeEpRVUZKTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkNMRWxCUVVrc1RVRkJUU3hGUVVGRk8yZENRVU5TTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzJGQlF5OUNPMWxCUTBRc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTNKQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenREUVVOS08wRkJNek5DUkN4blEwRXlNMEpESW4wPSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbml0UmVuZGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3FyUmVuZGVyZXJGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9pbWFnZUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlcy9qcGVnRW5jb2RlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlcy9wbmdFbmNvZGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvY2FudmFzUmVuZGVyZXJPcHRpb25zXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9wbmdSZW5kZXJlck9wdGlvbnNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9zdmdSZW5kZXJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3RleHRSZW5kZXJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3RleHRSZW5kZXJlck9wdGlvbnNcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NhME5CUVRaQ08wRkJRemRDTEcxRVFVRTRRenRCUVVNNVF5d3lRMEZCYzBNN1FVRkRkRU1zTUVOQlFYRkRPMEZCUTNKRExIbERRVUZ2UXp0QlFVVndReXhuUkVGQk1rTTdRVUZETTBNc2RVUkJRV3RFTzBGQlEyeEVMR3RFUVVFMlF6dEJRVU0zUXl4NVJFRkJiMFE3UVVGRGNFUXNLME5CUVRCRE8wRkJRekZETEhORVFVRnBSRHRCUVVOcVJDd3JRMEZCTUVNN1FVRkRNVU1zYzBSQlFXbEVPMEZCUTJwRUxHZEVRVUV5UXp0QlFVTXpReXgxUkVGQmEwUWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW5pdGlhbGl6ZSB0aGUgZmFjdG9yaWVzLlxyXG4gKi9cclxuY29uc3QgcXJSZW5kZXJlckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9xclJlbmRlcmVyRmFjdG9yeVwiKTtcclxuY29uc3QgY2FudmFzUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyXCIpO1xyXG5jb25zdCBqcGVnUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlclwiKTtcclxuY29uc3QgcG5nUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyXCIpO1xyXG5jb25zdCBzdmdSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXJcIik7XHJcbmNvbnN0IHRleHRSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyXCIpO1xyXG5mdW5jdGlvbiBpbml0UmVuZGVyKCkge1xyXG4gICAgcXJSZW5kZXJlckZhY3RvcnlfMS5RUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiY2FudmFzXCIsIChvcHRzKSA9PiBuZXcgY2FudmFzUmVuZGVyZXJfMS5DYW52YXNSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJ0ZXh0XCIsIChvcHRzKSA9PiBuZXcgdGV4dFJlbmRlcmVyXzEuVGV4dFJlbmRlcmVyKG9wdHMpKTtcclxuICAgIHFyUmVuZGVyZXJGYWN0b3J5XzEuUVJSZW5kZXJlckZhY3RvcnkuaW5zdGFuY2UoKS5yZWdpc3RlcihcInN2Z1wiLCAob3B0cykgPT4gbmV3IHN2Z1JlbmRlcmVyXzEuU3ZnUmVuZGVyZXIob3B0cykpO1xyXG4gICAgcXJSZW5kZXJlckZhY3RvcnlfMS5RUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwianBlZ1wiLCAob3B0cykgPT4gbmV3IGpwZWdSZW5kZXJlcl8xLkpwZWdSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJwbmdcIiwgKG9wdHMpID0+IG5ldyBwbmdSZW5kZXJlcl8xLlBuZ1JlbmRlcmVyKG9wdHMpKTtcclxufVxyXG5leHBvcnRzLmluaXRSZW5kZXIgPSBpbml0UmVuZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVwZEZKbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtbDBVbVZ1WkdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxIRkZRVUZyUlR0QlFVTnNSU3hwUlVGQk9FUTdRVUZET1VRc05rUkJRVEJFTzBGQlF6RkVMREpFUVVGM1JEdEJRVU40UkN3eVJFRkJkMFE3UVVGRGVFUXNOa1JCUVRCRU8wRkJSVEZFTzBsQlEwa3NjVU5CUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N3clFrRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY0VZc2NVTkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3d5UWtGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVlzY1VOQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VVXNjVU5CUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVZc2NVTkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRiRVlzUTBGQlF6dEJRVTVFTEdkRFFVMURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBjYW52YXMuXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTdmcgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci1jYW52YXNcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBRUiBjb2RlIGRhdGEgYXMgYW4gY2FudmFzLlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgZm9yIHRoZSBRUiBjb2RlLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gdG8ga2VlcCBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgU1ZHIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJSYXcgaXMgbm90IHN1cHBvcnRlZCBmb3IgPGNhbnZhcz5cIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNlbGxEYXRhLmxlbmd0aCAqIGNlbGxTaXplICsgKDIgKiBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmdiYVRleHQoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGRpbWVuc2lvbnMsIGRpbWVuc2lvbnMpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLnJnYmFUZXh0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGFbeF1beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggKiBjZWxsU2l6ZSArIG1hcmdpblNpemUsIHkgKiBjZWxsU2l6ZSArIG1hcmdpblNpemUsIGNlbGxTaXplLCBjZWxsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhbnZhc1JlbmRlcmVyID0gQ2FudmFzUmVuZGVyZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyRnVkbUZ6VW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12WTJGdWRtRnpVbVZ1WkdWeVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHMUZRVUZuUlR0QlFVTm9SU3hyUmtGQkswVTdRVUZETDBVc2IwWkJRV2xHTzBGQlMycEdPenRIUVVWSE8wRkJRMGc3U1VGSlNUczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFOUJRU3RDTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVDBGQlR5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzU1VGQlNTeGhRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4SlFVRkpMR0ZCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFbEJRVWtzVjBGQlZ5eERRVUZETzBsQlEyNUZMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVc5Q0xFVkJRVVVzVjBGQmJVSXNRMEZCUXl4RlFVRkZMR0ZCUVhGQ0xFVkJRVVU3VVVGRGRFWXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVzlDTEVWQlFVVXNWMEZCYlVJc1EwRkJReXhGUVVGRkxHRkJRWEZDTEVWQlFVVTdVVUZEZGtZc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVTkJRWGxETEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTI1RUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNORU5CUVRSRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETTBVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjBSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEN0RFFVRXJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyaEdPMUZCUlVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYWtVc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOb1JDeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUlRkRExFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpGQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUlROQ0xFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRmVFTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFJDeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXk5RExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZUVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZEVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM3BETEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTm9RaXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVkQlFVY3NWVUZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZET1VZN1lVRkRTanRUUVVOS08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenREUVVOS08wRkJjRVZFTEhkRFFXOUZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgQ2FudmFzIHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgQ2FudmFzUmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLkNhbnZhc1JlbmRlcmVyT3B0aW9ucyA9IENhbnZhc1JlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJGdWRtRnpVbVZ1WkdWeVpYSlBjSFJwYjI1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwyTmhiblpoYzFKbGJtUmxjbVZ5VDNCMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlJVRTdPMGRCUlVjN1FVRkRTRHREUVdGRE8wRkJZa1FzYzBSQllVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IGltYWdlSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9pbWFnZUhlbHBlclwiKTtcclxuY29uc3QganBlZ0VuY29kZXJfMSA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvanBlZ0VuY29kZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBiaXRtYXAuXHJcbiAqL1xyXG5jbGFzcyBKcGVnUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3ZnIHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItanBlZ1wiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIFFSIGNvZGUgZGF0YSBhcyBhIGJpdG1hcC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGJpdG1hcCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoY2VsbERhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjZWxsRGF0YSBtdXN0IGJlIG9mIHR5cGUgUVJDZWxsRGF0YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIoY2VsbFNpemUpIHx8IGNlbGxTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2VsbFNpemUgbXVzdCBiZSBhIG51bWJlciA+IDAsIGl0IGlzICR7Y2VsbFNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKG1hcmdpblNpemUpIHx8IG1hcmdpblNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1hcmdpblNpemUgbXVzdCBiZSBhIG51bWJlciA+PSAwLCBpdCBpcyAke21hcmdpblNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjZWxsRGF0YS5sZW5ndGggKiBjZWxsU2l6ZSArICgyICogbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiBkaW1lbnNpb25zICogNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIGRhdGFbaV0gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDFdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmdyZWVuKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDJdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgZGF0YVtpICsgM10gPSAweEZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGMgPSBtYXJnaW5TaXplICogZGltZW5zaW9ucyAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgVWludDhBcnJheShkaW1lbnNpb25zICogNCk7XHJcbiAgICAgICAgICAgIGxldCByID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJnaW5TaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gMHhGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBjZWxsRGF0YVt5XVt4XSA/IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA6IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gMHhGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSAweEZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zZXQocm93LCBkYyk7XHJcbiAgICAgICAgICAgICAgICBkYyArPSByb3cubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcganBlZ0VuY29kZXJfMS5KcGVnRW5jb2RlcigpLmVuY29kZShkaW1lbnNpb25zLCBkaW1lbnNpb25zLCBkYXRhLCA3NSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCB0aGlzLnJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQodGhpcy5fb3B0aW9ucy5jc3NDbGFzcyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlSGVscGVyXzEuSW1hZ2VIZWxwZXIuZGF0YVRvSW1hZ2VTb3VyY2UoXCJpbWFnZS9qcGVnXCIsIHJhdyk7XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpwZWdSZW5kZXJlciA9IEpwZWdSZW5kZXJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5CbFoxSmxibVJsY21WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwycHdaV2RTWlc1a1pYSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiVVZCUVdkRk8wRkJRMmhGTEd0R1FVRXJSVHRCUVVNdlJTeHZSa0ZCYVVZN1FVRkZha1lzZDBSQlFYRkVPMEZCUTNKRUxIVkVRVUZ2UkR0QlFVbHdSRHM3UjBGRlJ6dEJRVU5JTzBsQlNVazdPenRQUVVkSE8wbEJRMGdzV1VGQldTeFBRVUUyUWp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVsQlFVa3NZVUZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU5vUml4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1NVRkJTU3hoUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJoR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZOQlFWTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeEZRVUZGTzFGQlEzUkdMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVMEZET1VRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSRFFVRTBReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEZEVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3JRMEZCSzBNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJXcEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGVrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU12UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlF6bERMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTNSQ08xRkJSVVFzU1VGQlNTeEZRVUZGTEVkQlFVY3NWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGRFTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVVldMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEycERMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXhReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkROVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRek5ETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dGhRVU51UWp0WlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONlF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dG5Ra0ZEY0VZc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVWNzUlVGQlJUdHZRa0ZEYUVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU40UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN2IwSkJRekZDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0dlFrRkRla0lzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8ybENRVU51UWp0aFFVTktPMWxCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVWNzUlVGQlJUdG5Ra0ZEYkVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUXpGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVNMVF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRE0wTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzJGQlEyNUNPMWxCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8yRkJRM0JDTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc2VVSkJRVmNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjBSU3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeEZRVUZGTzFGQlEzWkdMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJXcEZMRTFCUVUwc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVE5FTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenREUVVOS08wRkJia2RFTEc5RFFXMUhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgSnBlZyByZW5kZXJlci5cclxuICovXHJcbmNsYXNzIEpwZWdSZW5kZXJlck9wdGlvbnMge1xyXG59XHJcbmV4cG9ydHMuSnBlZ1JlbmRlcmVyT3B0aW9ucyA9IEpwZWdSZW5kZXJlck9wdGlvbnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuQmxaMUpsYm1SbGNtVnlUM0IwYVc5dWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5eVpXNWtaWEpVZVhCbGN5OXFjR1ZuVW1WdVpHVnlaWEpQY0hScGIyNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRlFUczdSMEZGUnp0QlFVTklPME5CWTBNN1FVRmtSQ3hyUkVGalF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIpO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3QgaW1hZ2VIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ltYWdlSGVscGVyXCIpO1xyXG5jb25zdCBwbmdFbmNvZGVyXzEgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3BuZ0VuY29kZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBwbmcuXHJcbiAqL1xyXG5jbGFzcyBQbmdSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTdmcgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci1wbmdcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBRUiBjb2RlIGRhdGEgYXMgYSBiaXRtYXAuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSBmb3IgdGhlIFFSIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiB0byBrZWVwIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBiaXRtYXAgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KGNlbGxEYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2VsbERhdGEgbXVzdCBiZSBvZiB0eXBlIFFSQ2VsbERhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKGNlbGxTaXplKSB8fCBjZWxsU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNlbGxTaXplIG11c3QgYmUgYSBudW1iZXIgPiAwLCBpdCBpcyAke2NlbGxTaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihtYXJnaW5TaXplKSB8fCBtYXJnaW5TaXplIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJnaW5TaXplIG11c3QgYmUgYSBudW1iZXIgPj0gMCwgaXQgaXMgJHttYXJnaW5TaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2VsbERhdGEubGVuZ3RoICogY2VsbFNpemUgKyAoMiAqIG1hcmdpblNpemUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShkaW1lbnNpb25zICogZGltZW5zaW9ucyAqIDQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBkYXRhW2ldID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICBkYXRhW2kgKyAxXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICBkYXRhW2kgKyAyXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ibHVlKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDNdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmFscGhhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYyA9IG1hcmdpblNpemUgKiBkaW1lbnNpb25zICogNDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiA0KTtcclxuICAgICAgICAgICAgbGV0IHIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYWxwaGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBjZWxsRGF0YVt5XVt4XSA/IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA6IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmFscGhhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJnaW5TaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmFscGhhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNldChyb3csIGRjKTtcclxuICAgICAgICAgICAgICAgIGRjICs9IHJvdy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwbmdFbmNvZGVyXzEuUG5nRW5jb2RlcigpLmVuY29kZShbZGF0YS5idWZmZXJdLCBkaW1lbnNpb25zLCBkaW1lbnNpb25zKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMucmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1hZ2VIZWxwZXJfMS5JbWFnZUhlbHBlci5kYXRhVG9JbWFnZVNvdXJjZShcImltYWdlL3BuZ1wiLCByYXcpO1xyXG4gICAgICAgIHJldHVybiBpbWc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbmdSZW5kZXJlciA9IFBuZ1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzVuVW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12Y0c1blVtVnVaR1Z5WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVOb1JTeHJSa0ZCSzBVN1FVRkRMMFVzYjBaQlFXbEdPMEZCUldwR0xIZEVRVUZ4UkR0QlFVTnlSQ3h4UkVGQmEwUTdRVUZKYkVRN08wZEJSVWM3UVVGRFNEdEpRVWxKT3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVDBGQk5FSTdVVUZEY0VNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFBRVUZQTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEpRVUZKTEdGQlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFFWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWxCUVVrc1lVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTm9SaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFJRVUZSTEVOQlFVTTdTVUZEYUVVc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJiMElzUlVGQlJTeFhRVUZ0UWl4RFFVRkRMRVZCUVVVc1lVRkJjVUlzUlVGQlJUdFJRVU4wUml4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFOQlF6bEVPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzBRMEZCTkVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU16UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzUkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zSzBOQlFTdERMRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFFWTdVVUZGUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVZxUlN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM3BETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGREwwTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU01UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFOQlEyeEVPMUZCUlVRc1NVRkJTU3hGUVVGRkxFZEJRVWNzVlVGQlZTeEhRVUZITEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRja01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRkRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVVZXTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRMnBETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU14UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZETlVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUXpORExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMkZCUXk5RE8xbEJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzcERMRTFCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVOd1JpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUnl4RlFVRkZPMjlDUVVOb1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdiMEpCUTNoQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dHZRa0ZETVVJc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yOUNRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN2FVSkJRemRDTzJGQlEwbzdXVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSeXhGUVVGRk8yZENRVU5zUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZETVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUXpWRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMmRDUVVNelF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRoUVVNdlF6dFpRVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhGUVVGRkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0aFFVTndRanRUUVVOS08xRkJSVVFzVDBGQlR5eEpRVUZKTEhWQ1FVRlZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBsQlF6RkZMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVc5Q0xFVkJRVVVzVjBGQmJVSXNRMEZCUXl4RlFVRkZMR0ZCUVhGQ0xFVkJRVVU3VVVGRGRrWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmFrVXNUVUZCVFN4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6RkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZNVVFzVDBGQlR5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPME5CUTBvN1FVRnVSMFFzYTBOQmJVZERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgUG5nIHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgUG5nUmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLlBuZ1JlbmRlcmVyT3B0aW9ucyA9IFBuZ1JlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c1blVtVnVaR1Z5WlhKUGNIUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDNCdVoxSmxibVJsY21WeVQzQjBhVzl1Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJSVUU3TzBkQlJVYzdRVUZEU0R0RFFXTkRPMEZCWkVRc1owUkJZME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIik7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVuZGVyIHFyIGRhdGEgYXMgc3ZnLlxyXG4gKi9cclxuY2xhc3MgU3ZnUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3ZnIHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItc3ZnXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIGFuIFNWRy5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIFNWRyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWQgPSB0aGlzLmludGVybmFsUmVuZGVyKGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgbGV0IHRleHQgPSBgPHN2ZyB3aWR0aD1cIiR7cmVuZGVyZWQuZGltZW5zaW9uc31cIiBoZWlnaHQ9XCIke3JlbmRlcmVkLmRpbWVuc2lvbnN9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbmA7XHJcbiAgICAgICAgdGV4dCArPSByZW5kZXJlZC5jb250ZW50O1xyXG4gICAgICAgIHRleHQgKz0gYDwvc3ZnPmA7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMuaW50ZXJuYWxSZW5kZXIoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgcmVuZGVyZWQuZGltZW5zaW9ucy50b1N0cmluZygpKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHJlbmRlcmVkLmRpbWVuc2lvbnMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQodGhpcy5fb3B0aW9ucy5jc3NDbGFzcyk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlubmVyLWh0bWxcclxuICAgICAgICBzdmcuaW5uZXJIVE1MID0gcmVuZGVyZWQuY29udGVudDtcclxuICAgICAgICByZXR1cm4gc3ZnO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpbnRlcm5hbFJlbmRlcihjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNlbGxEYXRhLmxlbmd0aCAqIGNlbGxTaXplICsgKDIgKiBtYXJnaW5TaXplKTtcclxuICAgICAgICBsZXQgdGV4dCA9IGA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIke2RpbWVuc2lvbnN9XCIgaGVpZ2h0PVwiJHtkaW1lbnNpb25zfVwiIGZpbGw9XCIke3RoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5oZXgoKX1cIiAvPlxcbmA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGFbeF1beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGA8cmVjdCB4PVwiJHt4ICogY2VsbFNpemUgKyBtYXJnaW5TaXplfVwiIHk9XCIke3kgKiBjZWxsU2l6ZSArIG1hcmdpblNpemV9XCIgd2lkdGg9XCIke2NlbGxTaXplfVwiIGhlaWdodD1cIiR7Y2VsbFNpemV9XCIgZmlsbD1cIiR7dGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLmhleCgpfVwiIC8+XFxuYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBkaW1lbnNpb25zLCBjb250ZW50OiB0ZXh0IH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdmdSZW5kZXJlciA9IFN2Z1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1puVW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12YzNablVtVnVaR1Z5WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVOb1JTeHJSa0ZCSzBVN1FVRkRMMFVzYjBaQlFXbEdPMEZCUzJwR096dEhRVVZITzBGQlEwZzdTVUZKU1RzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEU5QlFUUkNPMUZCUTNCRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUMEZCVHl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEyaEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hKUVVGSkxHRkJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRhRVlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRPMGxCUTJoRkxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVzlDTEVWQlFVVXNWMEZCYlVJc1EwRkJReXhGUVVGRkxHRkJRWEZDTEVWQlFVVTdVVUZEZEVZc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzSkZMRWxCUVVrc1NVRkJTU3hIUVVGSExHVkJRV1VzVVVGQlVTeERRVUZETEZWQlFWVXNZVUZCWVN4UlFVRlJMRU5CUVVNc1ZVRkJWU3g1UTBGQmVVTXNRMEZCUXp0UlFVTjJTQ3hKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFXOUNMRVZCUVVVc1YwRkJiVUlzUTBGQlF5eEZRVUZGTEdGQlFYRkNMRVZCUVVVN1VVRkRka1lzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUlhKRkxFMUJRVTBzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4bFFVRmxMRU5CUVVNc05FSkJRVFJDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6RkRMSGxEUVVGNVF6dFJRVU42UXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZGYWtNc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR05CUVdNc1EwRkJReXhSUVVGeFFpeEZRVUZGTEZGQlFXZENMRVZCUVVVc1ZVRkJhMEk3VVVGRE9VVXNTVUZCU1N4RFFVRkRMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNlVU5CUVhsRExFTkJRVU1zUTBGQlF6dFRRVU01UkR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEyNUVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zTkVOQlFUUkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE0wVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU4wUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExDdERRVUVyUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMmhHTzFGQlJVUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGFrVXNTVUZCU1N4SlFVRkpMRWRCUVVjc05FSkJRVFJDTEZWQlFWVXNZVUZCWVN4VlFVRlZMRmRCUVZjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNeFNDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRMmhDTEVsQlFVa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1IwRkJSeXhSUVVGUkxFZEJRVWNzVlVGQlZTeFJRVUZSTEVOQlFVTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1ZVRkJWU3haUVVGWkxGRkJRVkVzWVVGQllTeFJRVUZSTEZkQlFWY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXp0cFFrRkROVXM3WVVGRFNqdFRRVU5LTzFGQlEwUXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEZWtNc1EwRkJRenREUVVOS08wRkJNMFZFTEd0RFFUSkZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgU3ZnIHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgU3ZnUmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLlN2Z1JlbmRlcmVyT3B0aW9ucyA9IFN2Z1JlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNablVtVnVaR1Z5WlhKUGNIUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDNOMloxSmxibVJsY21WeVQzQjBhVzl1Y3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJSVUU3TzBkQlJVYzdRVUZEU0R0RFFXRkRPMEZCWWtRc1owUkJZVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyB0M3h0LlxyXG4gKi9cclxuY2xhc3MgVGV4dFJlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFRleHQgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5vbkNoYXIgPSB0aGlzLl9vcHRpb25zLm9uQ2hhciB8fCBcIuKWiOKWiFwiO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMub2ZmQ2hhciA9IHRoaXMuX29wdGlvbnMub2ZmQ2hhciB8fCBcIiAgXCI7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci10ZXh0XCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSBmb3IgdGhlIFFSIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiB0byBrZWVwIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0ZXh0IGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSAxLCBtYXJnaW5TaXplID0gMikge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KGNlbGxEYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2VsbERhdGEgbXVzdCBiZSBvZiB0eXBlIFFSQ2VsbERhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKGNlbGxTaXplKSB8fCBjZWxsU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNlbGxTaXplIG11c3QgYmUgYSBudW1iZXIgPiAwLCBpdCBpcyAke2NlbGxTaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihtYXJnaW5TaXplKSB8fCBtYXJnaW5TaXplIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJnaW5TaXplIG11c3QgYmUgYSBudW1iZXIgPj0gMCwgaXQgaXMgJHttYXJnaW5TaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtYXJnaW5TaXplOyBtKyspIHtcclxuICAgICAgICAgICAgdGV4dCArPSBgJHt0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplICogY2VsbERhdGEubGVuZ3RoKX1cXHJcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5fb3B0aW9ucy5vZmZDaGFyLnJlcGVhdChtYXJnaW5TaXplKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjZWxsRGF0YVt4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxEYXRhW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSB0aGlzLl9vcHRpb25zLm9uQ2hhci5yZXBlYXQoY2VsbFNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSB0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuX29wdGlvbnMub2ZmQ2hhci5yZXBlYXQobWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgICAgIGxpbmUgKz0gXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtYXJnaW5TaXplOyBtKyspIHtcclxuICAgICAgICAgICAgdGV4dCArPSBgJHt0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplICogY2VsbERhdGEubGVuZ3RoKX1cXHJcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDEsIG1hcmdpblNpemUgPSAyKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5yZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbm5lci1odG1sXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHJhdy5yZXBsYWNlKC9cXHIvZywgXCJcIikucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIikucmVwbGFjZSgvIC9nLCBcIiZuYnNwO1wiKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEZKbGJtUmxjbVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDNSbGVIUlNaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2EwWkJRU3RGTzBGQlF5OUZMRzlHUVVGcFJqdEJRVXRxUmpzN1IwRkZSenRCUVVOSU8wbEJTVWs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hQUVVFMlFqdFJRVU55UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETzFGQlEzQkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF6dFJRVU4wUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hUUVVGVExFTkJRVU03U1VGRGFrVXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCYjBJc1JVRkJSU3hYUVVGdFFpeERRVUZETEVWQlFVVXNZVUZCY1VJc1EwRkJRenRSUVVOeVJpeEpRVUZKTEVOQlFVTXNlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8xTkJRemxFTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUTBGQk5FTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNelJUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM1JFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc0swTkJRU3RETEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRhRVk3VVVGRlJDeEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEycERMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkROMFU3VVVGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRjRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzcERMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOb1FpeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVOcVJEdHhRa0ZCVFR0dlFrRkRTQ3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJsQ1FVTnNSRHRoUVVOS08xbEJRMFFzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hKUVVGSkxFbEJRVWtzVFVGQlRTeERRVUZETzFsQlJXWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGREwwSXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJRenRoUVVOb1FqdFRRVU5LTzFGQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOcVF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFOQlF6ZEZPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCYjBJc1JVRkJSU3hYUVVGdFFpeERRVUZETEVWQlFVVXNZVUZCY1VJc1EwRkJRenRSUVVOMFJpeE5RVUZOTEVkQlFVY3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVWcVJTeE5RVUZOTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6RkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE1VTXNlVU5CUVhsRE8xRkJRM3BETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzWkdMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dERRVU5LTzBGQk4wVkVMRzlEUVRaRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBUZXh0IHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgVGV4dFJlbmRlcmVyT3B0aW9ucyB7XHJcbn1cclxuZXhwb3J0cy5UZXh0UmVuZGVyZXJPcHRpb25zID0gVGV4dFJlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRGSmxibVJsY21WeVQzQjBhVzl1Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl5Wlc1a1pYSlVlWEJsY3k5MFpYaDBVbVZ1WkdWeVpYSlBjSFJwYjI1ekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wTkJZVU03UVVGaVJDeHJSRUZoUXlKOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIHpsaWJfZGVmbGF0ZSA9IHJlcXVpcmUoJy4vemxpYi9kZWZsYXRlJyk7XG52YXIgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9jb21tb24nKTtcbnZhciBzdHJpbmdzICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3N0cmluZ3MnKTtcbnZhciBtc2cgICAgICAgICAgPSByZXF1aXJlKCcuL3psaWIvbWVzc2FnZXMnKTtcbnZhciBaU3RyZWFtICAgICAgPSByZXF1aXJlKCcuL3psaWIvenN0cmVhbScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxudmFyIFpfTk9fRkxVU0ggICAgICA9IDA7XG52YXIgWl9GSU5JU0ggICAgICAgID0gNDtcblxudmFyIFpfT0sgICAgICAgICAgICA9IDA7XG52YXIgWl9TVFJFQU1fRU5EICAgID0gMTtcbnZhciBaX1NZTkNfRkxVU0ggICAgPSAyO1xuXG52YXIgWl9ERUZBVUxUX0NPTVBSRVNTSU9OID0gLTE7XG5cbnZhciBaX0RFRkFVTFRfU1RSQVRFR1kgICAgPSAwO1xuXG52YXIgWl9ERUZMQVRFRCAgPSA4O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8qKlxuICogY2xhc3MgRGVmbGF0ZVxuICpcbiAqIEdlbmVyaWMgSlMtc3R5bGUgd3JhcHBlciBmb3IgemxpYiBjYWxscy4gSWYgeW91IGRvbid0IG5lZWRcbiAqIHN0cmVhbWluZyBiZWhhdmlvdXIgLSB1c2UgbW9yZSBzaW1wbGUgZnVuY3Rpb25zOiBbW2RlZmxhdGVdXSxcbiAqIFtbZGVmbGF0ZVJhd11dIGFuZCBbW2d6aXBdXS5cbiAqKi9cblxuLyogaW50ZXJuYWxcbiAqIERlZmxhdGUuY2h1bmtzIC0+IEFycmF5XG4gKlxuICogQ2h1bmtzIG9mIG91dHB1dCBkYXRhLCBpZiBbW0RlZmxhdGUjb25EYXRhXV0gbm90IG92ZXJyaWRkZW4uXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5yZXN1bHQgLT4gVWludDhBcnJheXxBcnJheVxuICpcbiAqIENvbXByZXNzZWQgcmVzdWx0LCBnZW5lcmF0ZWQgYnkgZGVmYXVsdCBbW0RlZmxhdGUjb25EYXRhXV1cbiAqIGFuZCBbW0RlZmxhdGUjb25FbmRdXSBoYW5kbGVycy4gRmlsbGVkIGFmdGVyIHlvdSBwdXNoIGxhc3QgY2h1bmtcbiAqIChjYWxsIFtbRGVmbGF0ZSNwdXNoXV0gd2l0aCBgWl9GSU5JU0hgIC8gYHRydWVgIHBhcmFtKSAgb3IgaWYgeW91XG4gKiBwdXNoIGEgY2h1bmsgd2l0aCBleHBsaWNpdCBmbHVzaCAoY2FsbCBbW0RlZmxhdGUjcHVzaF1dIHdpdGhcbiAqIGBaX1NZTkNfRkxVU0hgIHBhcmFtKS5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLmVyciAtPiBOdW1iZXJcbiAqXG4gKiBFcnJvciBjb2RlIGFmdGVyIGRlZmxhdGUgZmluaXNoZWQuIDAgKFpfT0spIG9uIHN1Y2Nlc3MuXG4gKiBZb3Ugd2lsbCBub3QgbmVlZCBpdCBpbiByZWFsIGxpZmUsIGJlY2F1c2UgZGVmbGF0ZSBlcnJvcnNcbiAqIGFyZSBwb3NzaWJsZSBvbmx5IG9uIHdyb25nIG9wdGlvbnMgb3IgYmFkIGBvbkRhdGFgIC8gYG9uRW5kYFxuICogY3VzdG9tIGhhbmRsZXJzLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUubXNnIC0+IFN0cmluZ1xuICpcbiAqIEVycm9yIG1lc3NhZ2UsIGlmIFtbRGVmbGF0ZS5lcnJdXSAhPSAwXG4gKiovXG5cblxuLyoqXG4gKiBuZXcgRGVmbGF0ZShvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDcmVhdGVzIG5ldyBkZWZsYXRvciBpbnN0YW5jZSB3aXRoIHNwZWNpZmllZCBwYXJhbXMuIFRocm93cyBleGNlcHRpb25cbiAqIG9uIGJhZCBwYXJhbXMuIFN1cHBvcnRlZCBvcHRpb25zOlxuICpcbiAqIC0gYGxldmVsYFxuICogLSBgd2luZG93Qml0c2BcbiAqIC0gYG1lbUxldmVsYFxuICogLSBgc3RyYXRlZ3lgXG4gKiAtIGBkaWN0aW9uYXJ5YFxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucywgZm9yIGludGVybmFsIG5lZWRzOlxuICpcbiAqIC0gYGNodW5rU2l6ZWAgLSBzaXplIG9mIGdlbmVyYXRlZCBkYXRhIGNodW5rcyAoMTZLIGJ5IGRlZmF1bHQpXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIGRvIHJhdyBkZWZsYXRlXG4gKiAtIGBnemlwYCAoQm9vbGVhbikgLSBjcmVhdGUgZ3ppcCB3cmFwcGVyXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBcImJpbmFyeSBzdHJpbmdcIlxuICogICAgKGVhY2ggY2hhciBjb2RlIFswLi4yNTVdKVxuICogLSBgaGVhZGVyYCAoT2JqZWN0KSAtIGN1c3RvbSBoZWFkZXIgZm9yIGd6aXBcbiAqICAgLSBgdGV4dGAgKEJvb2xlYW4pIC0gdHJ1ZSBpZiBjb21wcmVzc2VkIGRhdGEgYmVsaWV2ZWQgdG8gYmUgdGV4dFxuICogICAtIGB0aW1lYCAoTnVtYmVyKSAtIG1vZGlmaWNhdGlvbiB0aW1lLCB1bml4IHRpbWVzdGFtcFxuICogICAtIGBvc2AgKE51bWJlcikgLSBvcGVyYXRpb24gc3lzdGVtIGNvZGVcbiAqICAgLSBgZXh0cmFgIChBcnJheSkgLSBhcnJheSBvZiBieXRlcyB3aXRoIGV4dHJhIGRhdGEgKG1heCA2NTUzNilcbiAqICAgLSBgbmFtZWAgKFN0cmluZykgLSBmaWxlIG5hbWUgKGJpbmFyeSBzdHJpbmcpXG4gKiAgIC0gYGNvbW1lbnRgIChTdHJpbmcpIC0gY29tbWVudCAoYmluYXJ5IHN0cmluZylcbiAqICAgLSBgaGNyY2AgKEJvb2xlYW4pIC0gdHJ1ZSBpZiBoZWFkZXIgY3JjIHNob3VsZCBiZSBhZGRlZFxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBjaHVuazEgPSBVaW50OEFycmF5KFsxLDIsMyw0LDUsNiw3LDgsOV0pXG4gKiAgICwgY2h1bmsyID0gVWludDhBcnJheShbMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTldKTtcbiAqXG4gKiB2YXIgZGVmbGF0ZSA9IG5ldyBwYWtvLkRlZmxhdGUoeyBsZXZlbDogM30pO1xuICpcbiAqIGRlZmxhdGUucHVzaChjaHVuazEsIGZhbHNlKTtcbiAqIGRlZmxhdGUucHVzaChjaHVuazIsIHRydWUpOyAgLy8gdHJ1ZSAtPiBsYXN0IGNodW5rXG4gKlxuICogaWYgKGRlZmxhdGUuZXJyKSB7IHRocm93IG5ldyBFcnJvcihkZWZsYXRlLmVycik7IH1cbiAqXG4gKiBjb25zb2xlLmxvZyhkZWZsYXRlLnJlc3VsdCk7XG4gKiBgYGBcbiAqKi9cbmZ1bmN0aW9uIERlZmxhdGUob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRGVmbGF0ZSkpIHJldHVybiBuZXcgRGVmbGF0ZShvcHRpb25zKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5hc3NpZ24oe1xuICAgIGxldmVsOiBaX0RFRkFVTFRfQ09NUFJFU1NJT04sXG4gICAgbWV0aG9kOiBaX0RFRkxBVEVELFxuICAgIGNodW5rU2l6ZTogMTYzODQsXG4gICAgd2luZG93Qml0czogMTUsXG4gICAgbWVtTGV2ZWw6IDgsXG4gICAgc3RyYXRlZ3k6IFpfREVGQVVMVF9TVFJBVEVHWSxcbiAgICB0bzogJydcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIG9wdCA9IHRoaXMub3B0aW9ucztcblxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPiAwKSkge1xuICAgIG9wdC53aW5kb3dCaXRzID0gLW9wdC53aW5kb3dCaXRzO1xuICB9XG5cbiAgZWxzZSBpZiAob3B0Lmd6aXAgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMTY7XG4gIH1cblxuICB0aGlzLmVyciAgICA9IDA7ICAgICAgLy8gZXJyb3IgY29kZSwgaWYgaGFwcGVucyAoMCA9IFpfT0spXG4gIHRoaXMubXNnICAgID0gJyc7ICAgICAvLyBlcnJvciBtZXNzYWdlXG4gIHRoaXMuZW5kZWQgID0gZmFsc2U7ICAvLyB1c2VkIHRvIGF2b2lkIG11bHRpcGxlIG9uRW5kKCkgY2FsbHNcbiAgdGhpcy5jaHVua3MgPSBbXTsgICAgIC8vIGNodW5rcyBvZiBjb21wcmVzc2VkIGRhdGFcblxuICB0aGlzLnN0cm0gPSBuZXcgWlN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICB2YXIgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVJbml0MihcbiAgICB0aGlzLnN0cm0sXG4gICAgb3B0LmxldmVsLFxuICAgIG9wdC5tZXRob2QsXG4gICAgb3B0LndpbmRvd0JpdHMsXG4gICAgb3B0Lm1lbUxldmVsLFxuICAgIG9wdC5zdHJhdGVneVxuICApO1xuXG4gIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnW3N0YXR1c10pO1xuICB9XG5cbiAgaWYgKG9wdC5oZWFkZXIpIHtcbiAgICB6bGliX2RlZmxhdGUuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sIG9wdC5oZWFkZXIpO1xuICB9XG5cbiAgaWYgKG9wdC5kaWN0aW9uYXJ5KSB7XG4gICAgdmFyIGRpY3Q7XG4gICAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2Ygb3B0LmRpY3Rpb25hcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgICAgZGljdCA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKG9wdC5kaWN0aW9uYXJ5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgZGljdCA9IG5ldyBVaW50OEFycmF5KG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGljdCA9IG9wdC5kaWN0aW9uYXJ5O1xuICAgIH1cblxuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIGRpY3QpO1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWN0X3NldCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZsYXRlI3B1c2goZGF0YVssIG1vZGVdKSAtPiBCb29sZWFuXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8QXJyYXlCdWZmZXJ8U3RyaW5nKTogaW5wdXQgZGF0YS4gU3RyaW5ncyB3aWxsIGJlXG4gKiAgIGNvbnZlcnRlZCB0byB1dGY4IGJ5dGUgc2VxdWVuY2UuXG4gKiAtIG1vZGUgKE51bWJlcnxCb29sZWFuKTogMC4uNiBmb3IgY29ycmVzcG9uZGluZyBaX05PX0ZMVVNILi5aX1RSRUUgbW9kZXMuXG4gKiAgIFNlZSBjb25zdGFudHMuIFNraXBwZWQgb3IgYGZhbHNlYCBtZWFucyBaX05PX0ZMVVNILCBgdHJ1ZWAgbWVhbnMgWl9GSU5JU0guXG4gKlxuICogU2VuZHMgaW5wdXQgZGF0YSB0byBkZWZsYXRlIHBpcGUsIGdlbmVyYXRpbmcgW1tEZWZsYXRlI29uRGF0YV1dIGNhbGxzIHdpdGhcbiAqIG5ldyBjb21wcmVzc2VkIGNodW5rcy4gUmV0dXJucyBgdHJ1ZWAgb24gc3VjY2Vzcy4gVGhlIGxhc3QgZGF0YSBibG9jayBtdXN0IGhhdmVcbiAqIG1vZGUgWl9GSU5JU0ggKG9yIGB0cnVlYCkuIFRoYXQgd2lsbCBmbHVzaCBpbnRlcm5hbCBwZW5kaW5nIGJ1ZmZlcnMgYW5kIGNhbGxcbiAqIFtbRGVmbGF0ZSNvbkVuZF1dLiBGb3IgaW50ZXJpbSBleHBsaWNpdCBmbHVzaGVzICh3aXRob3V0IGVuZGluZyB0aGUgc3RyZWFtKSB5b3VcbiAqIGNhbiB1c2UgbW9kZSBaX1NZTkNfRkxVU0gsIGtlZXBpbmcgdGhlIGNvbXByZXNzaW9uIGNvbnRleHQuXG4gKlxuICogT24gZmFpbCBjYWxsIFtbRGVmbGF0ZSNvbkVuZF1dIHdpdGggZXJyb3IgY29kZSBhbmQgcmV0dXJuIGZhbHNlLlxuICpcbiAqIFdlIHN0cm9uZ2x5IHJlY29tbWVuZCB0byB1c2UgYFVpbnQ4QXJyYXlgIG9uIGlucHV0IGZvciBiZXN0IHNwZWVkIChvdXRwdXRcbiAqIGFycmF5IGZvcm1hdCBpcyBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5KS4gQWxzbywgZG9uJ3Qgc2tpcCBsYXN0IHBhcmFtIGFuZCBhbHdheXNcbiAqIHVzZSB0aGUgc2FtZSB0eXBlIGluIHlvdXIgY29kZSAoYm9vbGVhbiBvciBudW1iZXIpLiBUaGF0IHdpbGwgaW1wcm92ZSBKUyBzcGVlZC5cbiAqXG4gKiBGb3IgcmVndWxhciBgQXJyYXlgLXMgbWFrZSBzdXJlIGFsbCBlbGVtZW50cyBhcmUgWzAuLjI1NV0uXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHB1c2goY2h1bmssIGZhbHNlKTsgLy8gcHVzaCBvbmUgb2YgZGF0YSBjaHVua3NcbiAqIC4uLlxuICogcHVzaChjaHVuaywgdHJ1ZSk7ICAvLyBwdXNoIGxhc3QgY2h1bmtcbiAqIGBgYFxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBtb2RlKSB7XG4gIHZhciBzdHJtID0gdGhpcy5zdHJtO1xuICB2YXIgY2h1bmtTaXplID0gdGhpcy5vcHRpb25zLmNodW5rU2l6ZTtcbiAgdmFyIHN0YXR1cywgX21vZGU7XG5cbiAgaWYgKHRoaXMuZW5kZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgX21vZGUgPSAobW9kZSA9PT0gfn5tb2RlKSA/IG1vZGUgOiAoKG1vZGUgPT09IHRydWUpID8gWl9GSU5JU0ggOiBaX05PX0ZMVVNIKTtcblxuICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgIHN0cm0uaW5wdXQgPSBzdHJpbmdzLnN0cmluZzJidWYoZGF0YSk7XG4gIH0gZWxzZSBpZiAodG9TdHJpbmcuY2FsbChkYXRhKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgIHN0cm0uaW5wdXQgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJtLmlucHV0ID0gZGF0YTtcbiAgfVxuXG4gIHN0cm0ubmV4dF9pbiA9IDA7XG4gIHN0cm0uYXZhaWxfaW4gPSBzdHJtLmlucHV0Lmxlbmd0aDtcblxuICBkbyB7XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICBzdHJtLm91dHB1dCA9IG5ldyB1dGlscy5CdWY4KGNodW5rU2l6ZSk7XG4gICAgICBzdHJtLm5leHRfb3V0ID0gMDtcbiAgICAgIHN0cm0uYXZhaWxfb3V0ID0gY2h1bmtTaXplO1xuICAgIH1cbiAgICBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZShzdHJtLCBfbW9kZSk7ICAgIC8qIG5vIGJhZCByZXR1cm4gdmFsdWUgKi9cblxuICAgIGlmIChzdGF0dXMgIT09IFpfU1RSRUFNX0VORCAmJiBzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgIHRoaXMub25FbmQoc3RhdHVzKTtcbiAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDAgfHwgKHN0cm0uYXZhaWxfaW4gPT09IDAgJiYgKF9tb2RlID09PSBaX0ZJTklTSCB8fCBfbW9kZSA9PT0gWl9TWU5DX0ZMVVNIKSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMub25EYXRhKHN0cmluZ3MuYnVmMmJpbnN0cmluZyh1dGlscy5zaHJpbmtCdWYoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uRGF0YSh1dGlscy5zaHJpbmtCdWYoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKChzdHJtLmF2YWlsX2luID4gMCB8fCBzdHJtLmF2YWlsX291dCA9PT0gMCkgJiYgc3RhdHVzICE9PSBaX1NUUkVBTV9FTkQpO1xuXG4gIC8vIEZpbmFsaXplIG9uIHRoZSBsYXN0IGNodW5rLlxuICBpZiAoX21vZGUgPT09IFpfRklOSVNIKSB7XG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVFbmQodGhpcy5zdHJtKTtcbiAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gWl9PSztcbiAgfVxuXG4gIC8vIGNhbGxiYWNrIGludGVyaW0gcmVzdWx0cyBpZiBaX1NZTkNfRkxVU0guXG4gIGlmIChfbW9kZSA9PT0gWl9TWU5DX0ZMVVNIKSB7XG4gICAgdGhpcy5vbkVuZChaX09LKTtcbiAgICBzdHJtLmF2YWlsX291dCA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRGF0YShjaHVuaykgLT4gVm9pZFxuICogLSBjaHVuayAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBvdXRwdXQgZGF0YS4gVHlwZSBvZiBhcnJheSBkZXBlbmRzXG4gKiAgIG9uIGpzIGVuZ2luZSBzdXBwb3J0LiBXaGVuIHN0cmluZyBvdXRwdXQgcmVxdWVzdGVkLCBlYWNoIGNodW5rXG4gKiAgIHdpbGwgYmUgc3RyaW5nLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHN0b3JlcyBkYXRhIGJsb2NrcyBpbiBgY2h1bmtzW11gIHByb3BlcnR5IGFuZCBnbHVlXG4gKiB0aG9zZSBpbiBgb25FbmRgLiBPdmVycmlkZSB0aGlzIGhhbmRsZXIsIGlmIHlvdSBuZWVkIGFub3RoZXIgYmVoYXZpb3VyLlxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHRoaXMuY2h1bmtzLnB1c2goY2h1bmspO1xufTtcblxuXG4vKipcbiAqIERlZmxhdGUjb25FbmQoc3RhdHVzKSAtPiBWb2lkXG4gKiAtIHN0YXR1cyAoTnVtYmVyKTogZGVmbGF0ZSBzdGF0dXMuIDAgKFpfT0spIG9uIHN1Y2Nlc3MsXG4gKiAgIG90aGVyIGlmIG5vdC5cbiAqXG4gKiBDYWxsZWQgb25jZSBhZnRlciB5b3UgdGVsbCBkZWZsYXRlIHRoYXQgdGhlIGlucHV0IHN0cmVhbSBpc1xuICogY29tcGxldGUgKFpfRklOSVNIKSBvciBzaG91bGQgYmUgZmx1c2hlZCAoWl9TWU5DX0ZMVVNIKVxuICogb3IgaWYgYW4gZXJyb3IgaGFwcGVuZWQuIEJ5IGRlZmF1bHQgLSBqb2luIGNvbGxlY3RlZCBjaHVua3MsXG4gKiBmcmVlIG1lbW9yeSBhbmQgZmlsbCBgcmVzdWx0c2AgLyBgZXJyYCBwcm9wZXJ0aWVzLlxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIC8vIE9uIHN1Y2Nlc3MgLSBqb2luXG4gIGlmIChzdGF0dXMgPT09IFpfT0spIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmNodW5rcy5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN1bHQgPSB1dGlscy5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5jaHVua3MgPSBbXTtcbiAgdGhpcy5lcnIgPSBzdGF0dXM7XG4gIHRoaXMubXNnID0gdGhpcy5zdHJtLm1zZztcbn07XG5cblxuLyoqXG4gKiBkZWZsYXRlKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDb21wcmVzcyBgZGF0YWAgd2l0aCBkZWZsYXRlIGFsZ29yaXRobSBhbmQgYG9wdGlvbnNgLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIGxldmVsXG4gKiAtIHdpbmRvd0JpdHNcbiAqIC0gbWVtTGV2ZWxcbiAqIC0gc3RyYXRlZ3lcbiAqIC0gZGljdGlvbmFyeVxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIFN1Z2FyIChvcHRpb25zKTpcbiAqXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIHNheSB0aGF0IHdlIHdvcmsgd2l0aCByYXcgc3RyZWFtLCBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzcGVjaWZ5XG4gKiAgIG5lZ2F0aXZlIHdpbmRvd0JpdHMgaW1wbGljaXRseS5cbiAqIC0gYHRvYCAoU3RyaW5nKSAtIGlmIGVxdWFsIHRvICdzdHJpbmcnLCB0aGVuIHJlc3VsdCB3aWxsIGJlIFwiYmluYXJ5IHN0cmluZ1wiXG4gKiAgICAoZWFjaCBjaGFyIGNvZGUgWzAuLjI1NV0pXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgcGFrbyA9IHJlcXVpcmUoJ3Bha28nKVxuICogICAsIGRhdGEgPSBVaW50OEFycmF5KFsxLDIsMyw0LDUsNiw3LDgsOV0pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBha28uZGVmbGF0ZShkYXRhKSk7XG4gKiBgYGBcbiAqKi9cbmZ1bmN0aW9uIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRlZmxhdG9yID0gbmV3IERlZmxhdGUob3B0aW9ucyk7XG5cbiAgZGVmbGF0b3IucHVzaChpbnB1dCwgdHJ1ZSk7XG5cbiAgLy8gVGhhdCB3aWxsIG5ldmVyIGhhcHBlbnMsIGlmIHlvdSBkb24ndCBjaGVhdCB3aXRoIG9wdGlvbnMgOilcbiAgaWYgKGRlZmxhdG9yLmVycikgeyB0aHJvdyBkZWZsYXRvci5tc2cgfHwgbXNnW2RlZmxhdG9yLmVycl07IH1cblxuICByZXR1cm4gZGVmbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogZGVmbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tkZWZsYXRlXV0sIGJ1dCBjcmVhdGVzIHJhdyBkYXRhLCB3aXRob3V0IHdyYXBwZXJcbiAqIChoZWFkZXIgYW5kIGFkbGVyMzIgY3JjKS5cbiAqKi9cbmZ1bmN0aW9uIGRlZmxhdGVSYXcoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMucmF3ID0gdHJ1ZTtcbiAgcmV0dXJuIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbi8qKlxuICogZ3ppcChkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tkZWZsYXRlXV0sIGJ1dCBjcmVhdGUgZ3ppcCB3cmFwcGVyIGluc3RlYWQgb2ZcbiAqIGRlZmxhdGUgb25lLlxuICoqL1xuZnVuY3Rpb24gZ3ppcChpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5nemlwID0gdHJ1ZTtcbiAgcmV0dXJuIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbmV4cG9ydHMuRGVmbGF0ZSA9IERlZmxhdGU7XG5leHBvcnRzLmRlZmxhdGUgPSBkZWZsYXRlO1xuZXhwb3J0cy5kZWZsYXRlUmF3ID0gZGVmbGF0ZVJhdztcbmV4cG9ydHMuZ3ppcCA9IGd6aXA7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIFRZUEVEX09LID0gICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBVaW50MTZBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbmZ1bmN0aW9uIF9oYXMob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydHMuYXNzaWduID0gZnVuY3Rpb24gKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIHZhciBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgd2hpbGUgKHNvdXJjZXMubGVuZ3RoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICBpZiAoIXNvdXJjZSkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG5vbi1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwIGluIHNvdXJjZSkge1xuICAgICAgaWYgKF9oYXMoc291cmNlLCBwKSkge1xuICAgICAgICBvYmpbcF0gPSBzb3VyY2VbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8gcmVkdWNlIGJ1ZmZlciBzaXplLCBhdm9pZGluZyBtZW0gY29weVxuZXhwb3J0cy5zaHJpbmtCdWYgPSBmdW5jdGlvbiAoYnVmLCBzaXplKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBzaXplKSB7IHJldHVybiBidWY7IH1cbiAgaWYgKGJ1Zi5zdWJhcnJheSkgeyByZXR1cm4gYnVmLnN1YmFycmF5KDAsIHNpemUpOyB9XG4gIGJ1Zi5sZW5ndGggPSBzaXplO1xuICByZXR1cm4gYnVmO1xufTtcblxuXG52YXIgZm5UeXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGlmIChzcmMuc3ViYXJyYXkgJiYgZGVzdC5zdWJhcnJheSkge1xuICAgICAgZGVzdC5zZXQoc3JjLnN1YmFycmF5KHNyY19vZmZzLCBzcmNfb2ZmcyArIGxlbiksIGRlc3Rfb2Zmcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZhbGxiYWNrIHRvIG9yZGluYXJ5IGFycmF5XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdFtkZXN0X29mZnMgKyBpXSA9IHNyY1tzcmNfb2ZmcyArIGldO1xuICAgIH1cbiAgfSxcbiAgLy8gSm9pbiBhcnJheSBvZiBjaHVua3MgdG8gc2luZ2xlIGFycmF5LlxuICBmbGF0dGVuQ2h1bmtzOiBmdW5jdGlvbiAoY2h1bmtzKSB7XG4gICAgdmFyIGksIGwsIGxlbiwgcG9zLCBjaHVuaywgcmVzdWx0O1xuXG4gICAgLy8gY2FsY3VsYXRlIGRhdGEgbGVuZ3RoXG4gICAgbGVuID0gMDtcbiAgICBmb3IgKGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGVuICs9IGNodW5rc1tpXS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gam9pbiBjaHVua3NcbiAgICByZXN1bHQgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIHBvcyA9IDA7XG4gICAgZm9yIChpID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNodW5rID0gY2h1bmtzW2ldO1xuICAgICAgcmVzdWx0LnNldChjaHVuaywgcG9zKTtcbiAgICAgIHBvcyArPSBjaHVuay5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxudmFyIGZuVW50eXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RbZGVzdF9vZmZzICsgaV0gPSBzcmNbc3JjX29mZnMgKyBpXTtcbiAgICB9XG4gIH0sXG4gIC8vIEpvaW4gYXJyYXkgb2YgY2h1bmtzIHRvIHNpbmdsZSBhcnJheS5cbiAgZmxhdHRlbkNodW5rczogZnVuY3Rpb24gKGNodW5rcykge1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIGNodW5rcyk7XG4gIH1cbn07XG5cblxuLy8gRW5hYmxlL0Rpc2FibGUgdHlwZWQgYXJyYXlzIHVzZSwgZm9yIHRlc3Rpbmdcbi8vXG5leHBvcnRzLnNldFR5cGVkID0gZnVuY3Rpb24gKG9uKSB7XG4gIGlmIChvbikge1xuICAgIGV4cG9ydHMuQnVmOCAgPSBVaW50OEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMTYgPSBVaW50MTZBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjMyID0gSW50MzJBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblR5cGVkKTtcbiAgfSBlbHNlIHtcbiAgICBleHBvcnRzLkJ1ZjggID0gQXJyYXk7XG4gICAgZXhwb3J0cy5CdWYxNiA9IEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMzIgPSBBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblVudHlwZWQpO1xuICB9XG59O1xuXG5leHBvcnRzLnNldFR5cGVkKFRZUEVEX09LKTtcbiIsIi8vIFN0cmluZyBlbmNvZGUvZGVjb2RlIGhlbHBlcnNcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuXG5cbi8vIFF1aWNrIGNoZWNrIGlmIHdlIGNhbiB1c2UgZmFzdCBhcnJheSB0byBiaW4gc3RyaW5nIGNvbnZlcnNpb25cbi8vXG4vLyAtIGFwcGx5KEFycmF5KSBjYW4gZmFpbCBvbiBBbmRyb2lkIDIuMlxuLy8gLSBhcHBseShVaW50OEFycmF5KSBjYW4gZmFpbCBvbiBpT1MgNS4xIFNhZmFyaVxuLy9cbnZhciBTVFJfQVBQTFlfT0sgPSB0cnVlO1xudmFyIFNUUl9BUFBMWV9VSUFfT0sgPSB0cnVlO1xuXG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIFsgMCBdKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX09LID0gZmFsc2U7IH1cbnRyeSB7IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoMSkpOyB9IGNhdGNoIChfXykgeyBTVFJfQVBQTFlfVUlBX09LID0gZmFsc2U7IH1cblxuXG4vLyBUYWJsZSB3aXRoIHV0ZjggbGVuZ3RocyAoY2FsY3VsYXRlZCBieSBmaXJzdCBieXRlIG9mIHNlcXVlbmNlKVxuLy8gTm90ZSwgdGhhdCA1ICYgNi1ieXRlIHZhbHVlcyBhbmQgc29tZSA0LWJ5dGUgdmFsdWVzIGNhbiBub3QgYmUgcmVwcmVzZW50ZWQgaW4gSlMsXG4vLyBiZWNhdXNlIG1heCBwb3NzaWJsZSBjb2RlcG9pbnQgaXMgMHgxMGZmZmZcbnZhciBfdXRmOGxlbiA9IG5ldyB1dGlscy5CdWY4KDI1Nik7XG5mb3IgKHZhciBxID0gMDsgcSA8IDI1NjsgcSsrKSB7XG4gIF91dGY4bGVuW3FdID0gKHEgPj0gMjUyID8gNiA6IHEgPj0gMjQ4ID8gNSA6IHEgPj0gMjQwID8gNCA6IHEgPj0gMjI0ID8gMyA6IHEgPj0gMTkyID8gMiA6IDEpO1xufVxuX3V0ZjhsZW5bMjU0XSA9IF91dGY4bGVuWzI1NF0gPSAxOyAvLyBJbnZhbGlkIHNlcXVlbmNlIHN0YXJ0XG5cblxuLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXkgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxuZXhwb3J0cy5zdHJpbmcyYnVmID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYnVmLCBjLCBjMiwgbV9wb3MsIGksIHN0cl9sZW4gPSBzdHIubGVuZ3RoLCBidWZfbGVuID0gMDtcblxuICAvLyBjb3VudCBiaW5hcnkgc2l6ZVxuICBmb3IgKG1fcG9zID0gMDsgbV9wb3MgPCBzdHJfbGVuOyBtX3BvcysrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zKTtcbiAgICBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKG1fcG9zICsgMSA8IHN0cl9sZW4pKSB7XG4gICAgICBjMiA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zICsgMSk7XG4gICAgICBpZiAoKGMyICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKChjIC0gMHhkODAwKSA8PCAxMCkgKyAoYzIgLSAweGRjMDApO1xuICAgICAgICBtX3BvcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBidWZfbGVuICs9IGMgPCAweDgwID8gMSA6IGMgPCAweDgwMCA/IDIgOiBjIDwgMHgxMDAwMCA/IDMgOiA0O1xuICB9XG5cbiAgLy8gYWxsb2NhdGUgYnVmZmVyXG4gIGJ1ZiA9IG5ldyB1dGlscy5CdWY4KGJ1Zl9sZW4pO1xuXG4gIC8vIGNvbnZlcnRcbiAgZm9yIChpID0gMCwgbV9wb3MgPSAwOyBpIDwgYnVmX2xlbjsgbV9wb3MrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChtX3Bvcyk7XG4gICAgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChtX3BvcyArIDEgPCBzdHJfbGVuKSkge1xuICAgICAgYzIgPSBzdHIuY2hhckNvZGVBdChtX3BvcyArIDEpO1xuICAgICAgaWYgKChjMiAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjID0gMHgxMDAwMCArICgoYyAtIDB4ZDgwMCkgPDwgMTApICsgKGMyIC0gMHhkYzAwKTtcbiAgICAgICAgbV9wb3MrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAvKiBvbmUgYnl0ZSAqL1xuICAgICAgYnVmW2krK10gPSBjO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAvKiB0d28gYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhDMCB8IChjID4+PiA2KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfSBlbHNlIGlmIChjIDwgMHgxMDAwMCkge1xuICAgICAgLyogdGhyZWUgYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhFMCB8IChjID4+PiAxMik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gNiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogZm91ciBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweGYwIHwgKGMgPj4+IDE4KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiAxMiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDYgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn07XG5cbi8vIEhlbHBlciAodXNlZCBpbiAyIHBsYWNlcylcbmZ1bmN0aW9uIGJ1ZjJiaW5zdHJpbmcoYnVmLCBsZW4pIHtcbiAgLy8gdXNlIGZhbGxiYWNrIGZvciBiaWcgYXJyYXlzIHRvIGF2b2lkIHN0YWNrIG92ZXJmbG93XG4gIGlmIChsZW4gPCA2NTUzNykge1xuICAgIGlmICgoYnVmLnN1YmFycmF5ICYmIFNUUl9BUFBMWV9VSUFfT0spIHx8ICghYnVmLnN1YmFycmF5ICYmIFNUUl9BUFBMWV9PSykpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHV0aWxzLnNocmlua0J1ZihidWYsIGxlbikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vLyBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gYmluYXJ5IHN0cmluZ1xuZXhwb3J0cy5idWYyYmluc3RyaW5nID0gZnVuY3Rpb24gKGJ1Zikge1xuICByZXR1cm4gYnVmMmJpbnN0cmluZyhidWYsIGJ1Zi5sZW5ndGgpO1xufTtcblxuXG4vLyBDb252ZXJ0IGJpbmFyeSBzdHJpbmcgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxuZXhwb3J0cy5iaW5zdHJpbmcyYnVmID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYnVmID0gbmV3IHV0aWxzLkJ1Zjgoc3RyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufTtcblxuXG4vLyBjb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xuZXhwb3J0cy5idWYyc3RyaW5nID0gZnVuY3Rpb24gKGJ1ZiwgbWF4KSB7XG4gIHZhciBpLCBvdXQsIGMsIGNfbGVuO1xuICB2YXIgbGVuID0gbWF4IHx8IGJ1Zi5sZW5ndGg7XG5cbiAgLy8gUmVzZXJ2ZSBtYXggcG9zc2libGUgbGVuZ3RoICgyIHdvcmRzIHBlciBjaGFyKVxuICAvLyBOQjogYnkgdW5rbm93biByZWFzb25zLCBBcnJheSBpcyBzaWduaWZpY2FudGx5IGZhc3RlciBmb3JcbiAgLy8gICAgIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkgdGhhbiBVaW50MTZBcnJheS5cbiAgdmFyIHV0ZjE2YnVmID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuXG4gIGZvciAob3V0ID0gMCwgaSA9IDA7IGkgPCBsZW47KSB7XG4gICAgYyA9IGJ1ZltpKytdO1xuICAgIC8vIHF1aWNrIHByb2Nlc3MgYXNjaWlcbiAgICBpZiAoYyA8IDB4ODApIHsgdXRmMTZidWZbb3V0KytdID0gYzsgY29udGludWU7IH1cblxuICAgIGNfbGVuID0gX3V0ZjhsZW5bY107XG4gICAgLy8gc2tpcCA1ICYgNiBieXRlIGNvZGVzXG4gICAgaWYgKGNfbGVuID4gNCkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGkgKz0gY19sZW4gLSAxOyBjb250aW51ZTsgfVxuXG4gICAgLy8gYXBwbHkgbWFzayBvbiBmaXJzdCBieXRlXG4gICAgYyAmPSBjX2xlbiA9PT0gMiA/IDB4MWYgOiBjX2xlbiA9PT0gMyA/IDB4MGYgOiAweDA3O1xuICAgIC8vIGpvaW4gdGhlIHJlc3RcbiAgICB3aGlsZSAoY19sZW4gPiAxICYmIGkgPCBsZW4pIHtcbiAgICAgIGMgPSAoYyA8PCA2KSB8IChidWZbaSsrXSAmIDB4M2YpO1xuICAgICAgY19sZW4tLTtcbiAgICB9XG5cbiAgICAvLyB0ZXJtaW5hdGVkIGJ5IGVuZCBvZiBzdHJpbmc/XG4gICAgaWYgKGNfbGVuID4gMSkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoYyA8IDB4MTAwMDApIHtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgLT0gMHgxMDAwMDtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IDB4ZDgwMCB8ICgoYyA+PiAxMCkgJiAweDNmZik7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSAweGRjMDAgfCAoYyAmIDB4M2ZmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmMmJpbnN0cmluZyh1dGYxNmJ1Ziwgb3V0KTtcbn07XG5cblxuLy8gQ2FsY3VsYXRlIG1heCBwb3NzaWJsZSBwb3NpdGlvbiBpbiB1dGY4IGJ1ZmZlcixcbi8vIHRoYXQgd2lsbCBub3QgYnJlYWsgc2VxdWVuY2UuIElmIHRoYXQncyBub3QgcG9zc2libGVcbi8vIC0gKHZlcnkgc21hbGwgbGltaXRzKSByZXR1cm4gbWF4IHNpemUgYXMgaXMuXG4vL1xuLy8gYnVmW10gLSB1dGY4IGJ5dGVzIGFycmF5XG4vLyBtYXggICAtIGxlbmd0aCBsaW1pdCAobWFuZGF0b3J5KTtcbmV4cG9ydHMudXRmOGJvcmRlciA9IGZ1bmN0aW9uIChidWYsIG1heCkge1xuICB2YXIgcG9zO1xuXG4gIG1heCA9IG1heCB8fCBidWYubGVuZ3RoO1xuICBpZiAobWF4ID4gYnVmLmxlbmd0aCkgeyBtYXggPSBidWYubGVuZ3RoOyB9XG5cbiAgLy8gZ28gYmFjayBmcm9tIGxhc3QgcG9zaXRpb24sIHVudGlsIHN0YXJ0IG9mIHNlcXVlbmNlIGZvdW5kXG4gIHBvcyA9IG1heCAtIDE7XG4gIHdoaWxlIChwb3MgPj0gMCAmJiAoYnVmW3Bvc10gJiAweEMwKSA9PT0gMHg4MCkgeyBwb3MtLTsgfVxuXG4gIC8vIFZlcnkgc21hbGwgYW5kIGJyb2tlbiBzZXF1ZW5jZSxcbiAgLy8gcmV0dXJuIG1heCwgYmVjYXVzZSB3ZSBzaG91bGQgcmV0dXJuIHNvbWV0aGluZyBhbnl3YXkuXG4gIGlmIChwb3MgPCAwKSB7IHJldHVybiBtYXg7IH1cblxuICAvLyBJZiB3ZSBjYW1lIHRvIHN0YXJ0IG9mIGJ1ZmZlciAtIHRoYXQgbWVhbnMgYnVmZmVyIGlzIHRvbyBzbWFsbCxcbiAgLy8gcmV0dXJuIG1heCB0b28uXG4gIGlmIChwb3MgPT09IDApIHsgcmV0dXJuIG1heDsgfVxuXG4gIHJldHVybiAocG9zICsgX3V0ZjhsZW5bYnVmW3Bvc11dID4gbWF4KSA/IHBvcyA6IG1heDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIE5vdGU6IGFkbGVyMzIgdGFrZXMgMTIlIGZvciBsZXZlbCAwIGFuZCAyJSBmb3IgbGV2ZWwgNi5cbi8vIEl0IGlzbid0IHdvcnRoIGl0IHRvIG1ha2UgYWRkaXRpb25hbCBvcHRpbWl6YXRpb25zIGFzIGluIG9yaWdpbmFsLlxuLy8gU21hbGwgc2l6ZSBpcyBwcmVmZXJhYmxlLlxuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIGFkbGVyMzIoYWRsZXIsIGJ1ZiwgbGVuLCBwb3MpIHtcbiAgdmFyIHMxID0gKGFkbGVyICYgMHhmZmZmKSB8MCxcbiAgICAgIHMyID0gKChhZGxlciA+Pj4gMTYpICYgMHhmZmZmKSB8MCxcbiAgICAgIG4gPSAwO1xuXG4gIHdoaWxlIChsZW4gIT09IDApIHtcbiAgICAvLyBTZXQgbGltaXQgfiB0d2ljZSBsZXNzIHRoYW4gNTU1MiwgdG8ga2VlcFxuICAgIC8vIHMyIGluIDMxLWJpdHMsIGJlY2F1c2Ugd2UgZm9yY2Ugc2lnbmVkIGludHMuXG4gICAgLy8gaW4gb3RoZXIgY2FzZSAlPSB3aWxsIGZhaWwuXG4gICAgbiA9IGxlbiA+IDIwMDAgPyAyMDAwIDogbGVuO1xuICAgIGxlbiAtPSBuO1xuXG4gICAgZG8ge1xuICAgICAgczEgPSAoczEgKyBidWZbcG9zKytdKSB8MDtcbiAgICAgIHMyID0gKHMyICsgczEpIHwwO1xuICAgIH0gd2hpbGUgKC0tbik7XG5cbiAgICBzMSAlPSA2NTUyMTtcbiAgICBzMiAlPSA2NTUyMTtcbiAgfVxuXG4gIHJldHVybiAoczEgfCAoczIgPDwgMTYpKSB8MDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkbGVyMzI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIE5vdGU6IHdlIGNhbid0IGdldCBzaWduaWZpY2FudCBzcGVlZCBib29zdCBoZXJlLlxuLy8gU28gd3JpdGUgY29kZSB0byBtaW5pbWl6ZSBzaXplIC0gbm8gcHJlZ2VuZXJhdGVkIHRhYmxlc1xuLy8gYW5kIGFycmF5IHRvb2xzIGRlcGVuZGVuY2llcy5cblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG4vLyBVc2Ugb3JkaW5hcnkgYXJyYXksIHNpbmNlIHVudHlwZWQgbWFrZXMgbm8gYm9vc3QgaGVyZVxuZnVuY3Rpb24gbWFrZVRhYmxlKCkge1xuICB2YXIgYywgdGFibGUgPSBbXTtcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDI1NjsgbisrKSB7XG4gICAgYyA9IG47XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGMgPSAoKGMgJiAxKSA/ICgweEVEQjg4MzIwIF4gKGMgPj4+IDEpKSA6IChjID4+PiAxKSk7XG4gICAgfVxuICAgIHRhYmxlW25dID0gYztcbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn1cblxuLy8gQ3JlYXRlIHRhYmxlIG9uIGxvYWQuIEp1c3QgMjU1IHNpZ25lZCBsb25ncy4gTm90IGEgcHJvYmxlbS5cbnZhciBjcmNUYWJsZSA9IG1ha2VUYWJsZSgpO1xuXG5cbmZ1bmN0aW9uIGNyYzMyKGNyYywgYnVmLCBsZW4sIHBvcykge1xuICB2YXIgdCA9IGNyY1RhYmxlLFxuICAgICAgZW5kID0gcG9zICsgbGVuO1xuXG4gIGNyYyBePSAtMTtcblxuICBmb3IgKHZhciBpID0gcG9zOyBpIDwgZW5kOyBpKyspIHtcbiAgICBjcmMgPSAoY3JjID4+PiA4KSBeIHRbKGNyYyBeIGJ1ZltpXSkgJiAweEZGXTtcbiAgfVxuXG4gIHJldHVybiAoY3JjIF4gKC0xKSk7IC8vID4+PiAwO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY3JjMzI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxudmFyIHV0aWxzICAgPSByZXF1aXJlKCcuLi91dGlscy9jb21tb24nKTtcbnZhciB0cmVlcyAgID0gcmVxdWlyZSgnLi90cmVlcycpO1xudmFyIGFkbGVyMzIgPSByZXF1aXJlKCcuL2FkbGVyMzInKTtcbnZhciBjcmMzMiAgID0gcmVxdWlyZSgnLi9jcmMzMicpO1xudmFyIG1zZyAgICAgPSByZXF1aXJlKCcuL21lc3NhZ2VzJyk7XG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8qIEFsbG93ZWQgZmx1c2ggdmFsdWVzOyBzZWUgZGVmbGF0ZSgpIGFuZCBpbmZsYXRlKCkgYmVsb3cgZm9yIGRldGFpbHMgKi9cbnZhciBaX05PX0ZMVVNIICAgICAgPSAwO1xudmFyIFpfUEFSVElBTF9GTFVTSCA9IDE7XG4vL3ZhciBaX1NZTkNfRkxVU0ggICAgPSAyO1xudmFyIFpfRlVMTF9GTFVTSCAgICA9IDM7XG52YXIgWl9GSU5JU0ggICAgICAgID0gNDtcbnZhciBaX0JMT0NLICAgICAgICAgPSA1O1xuLy92YXIgWl9UUkVFUyAgICAgICAgID0gNjtcblxuXG4vKiBSZXR1cm4gY29kZXMgZm9yIHRoZSBjb21wcmVzc2lvbi9kZWNvbXByZXNzaW9uIGZ1bmN0aW9ucy4gTmVnYXRpdmUgdmFsdWVzXG4gKiBhcmUgZXJyb3JzLCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgYnV0IG5vcm1hbCBldmVudHMuXG4gKi9cbnZhciBaX09LICAgICAgICAgICAgPSAwO1xudmFyIFpfU1RSRUFNX0VORCAgICA9IDE7XG4vL3ZhciBaX05FRURfRElDVCAgICAgPSAyO1xuLy92YXIgWl9FUlJOTyAgICAgICAgID0gLTE7XG52YXIgWl9TVFJFQU1fRVJST1IgID0gLTI7XG52YXIgWl9EQVRBX0VSUk9SICAgID0gLTM7XG4vL3ZhciBaX01FTV9FUlJPUiAgICAgPSAtNDtcbnZhciBaX0JVRl9FUlJPUiAgICAgPSAtNTtcbi8vdmFyIFpfVkVSU0lPTl9FUlJPUiA9IC02O1xuXG5cbi8qIGNvbXByZXNzaW9uIGxldmVscyAqL1xuLy92YXIgWl9OT19DT01QUkVTU0lPTiAgICAgID0gMDtcbi8vdmFyIFpfQkVTVF9TUEVFRCAgICAgICAgICA9IDE7XG4vL3ZhciBaX0JFU1RfQ09NUFJFU1NJT04gICAgPSA5O1xudmFyIFpfREVGQVVMVF9DT01QUkVTU0lPTiA9IC0xO1xuXG5cbnZhciBaX0ZJTFRFUkVEICAgICAgICAgICAgPSAxO1xudmFyIFpfSFVGRk1BTl9PTkxZICAgICAgICA9IDI7XG52YXIgWl9STEUgICAgICAgICAgICAgICAgID0gMztcbnZhciBaX0ZJWEVEICAgICAgICAgICAgICAgPSA0O1xudmFyIFpfREVGQVVMVF9TVFJBVEVHWSAgICA9IDA7XG5cbi8qIFBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgZGF0YV90eXBlIGZpZWxkICh0aG91Z2ggc2VlIGluZmxhdGUoKSkgKi9cbi8vdmFyIFpfQklOQVJZICAgICAgICAgICAgICA9IDA7XG4vL3ZhciBaX1RFWFQgICAgICAgICAgICAgICAgPSAxO1xuLy92YXIgWl9BU0NJSSAgICAgICAgICAgICAgID0gMTsgLy8gPSBaX1RFWFRcbnZhciBaX1VOS05PV04gICAgICAgICAgICAgPSAyO1xuXG5cbi8qIFRoZSBkZWZsYXRlIGNvbXByZXNzaW9uIG1ldGhvZCAqL1xudmFyIFpfREVGTEFURUQgID0gODtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG52YXIgTUFYX01FTV9MRVZFTCA9IDk7XG4vKiBNYXhpbXVtIHZhbHVlIGZvciBtZW1MZXZlbCBpbiBkZWZsYXRlSW5pdDIgKi9cbnZhciBNQVhfV0JJVFMgPSAxNTtcbi8qIDMySyBMWjc3IHdpbmRvdyAqL1xudmFyIERFRl9NRU1fTEVWRUwgPSA4O1xuXG5cbnZhciBMRU5HVEhfQ09ERVMgID0gMjk7XG4vKiBudW1iZXIgb2YgbGVuZ3RoIGNvZGVzLCBub3QgY291bnRpbmcgdGhlIHNwZWNpYWwgRU5EX0JMT0NLIGNvZGUgKi9cbnZhciBMSVRFUkFMUyAgICAgID0gMjU2O1xuLyogbnVtYmVyIG9mIGxpdGVyYWwgYnl0ZXMgMC4uMjU1ICovXG52YXIgTF9DT0RFUyAgICAgICA9IExJVEVSQUxTICsgMSArIExFTkdUSF9DT0RFUztcbi8qIG51bWJlciBvZiBMaXRlcmFsIG9yIExlbmd0aCBjb2RlcywgaW5jbHVkaW5nIHRoZSBFTkRfQkxPQ0sgY29kZSAqL1xudmFyIERfQ09ERVMgICAgICAgPSAzMDtcbi8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlcyAqL1xudmFyIEJMX0NPREVTICAgICAgPSAxOTtcbi8qIG51bWJlciBvZiBjb2RlcyB1c2VkIHRvIHRyYW5zZmVyIHRoZSBiaXQgbGVuZ3RocyAqL1xudmFyIEhFQVBfU0laRSAgICAgPSAyICogTF9DT0RFUyArIDE7XG4vKiBtYXhpbXVtIGhlYXAgc2l6ZSAqL1xudmFyIE1BWF9CSVRTICA9IDE1O1xuLyogQWxsIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQklUUyBiaXRzICovXG5cbnZhciBNSU5fTUFUQ0ggPSAzO1xudmFyIE1BWF9NQVRDSCA9IDI1ODtcbnZhciBNSU5fTE9PS0FIRUFEID0gKE1BWF9NQVRDSCArIE1JTl9NQVRDSCArIDEpO1xuXG52YXIgUFJFU0VUX0RJQ1QgPSAweDIwO1xuXG52YXIgSU5JVF9TVEFURSA9IDQyO1xudmFyIEVYVFJBX1NUQVRFID0gNjk7XG52YXIgTkFNRV9TVEFURSA9IDczO1xudmFyIENPTU1FTlRfU1RBVEUgPSA5MTtcbnZhciBIQ1JDX1NUQVRFID0gMTAzO1xudmFyIEJVU1lfU1RBVEUgPSAxMTM7XG52YXIgRklOSVNIX1NUQVRFID0gNjY2O1xuXG52YXIgQlNfTkVFRF9NT1JFICAgICAgPSAxOyAvKiBibG9jayBub3QgY29tcGxldGVkLCBuZWVkIG1vcmUgaW5wdXQgb3IgbW9yZSBvdXRwdXQgKi9cbnZhciBCU19CTE9DS19ET05FICAgICA9IDI7IC8qIGJsb2NrIGZsdXNoIHBlcmZvcm1lZCAqL1xudmFyIEJTX0ZJTklTSF9TVEFSVEVEID0gMzsgLyogZmluaXNoIHN0YXJ0ZWQsIG5lZWQgb25seSBtb3JlIG91dHB1dCBhdCBuZXh0IGRlZmxhdGUgKi9cbnZhciBCU19GSU5JU0hfRE9ORSAgICA9IDQ7IC8qIGZpbmlzaCBkb25lLCBhY2NlcHQgbm8gbW9yZSBpbnB1dCBvciBvdXRwdXQgKi9cblxudmFyIE9TX0NPREUgPSAweDAzOyAvLyBVbml4IDopIC4gRG9uJ3QgZGV0ZWN0LCB1c2UgdGhpcyBkZWZhdWx0LlxuXG5mdW5jdGlvbiBlcnIoc3RybSwgZXJyb3JDb2RlKSB7XG4gIHN0cm0ubXNnID0gbXNnW2Vycm9yQ29kZV07XG4gIHJldHVybiBlcnJvckNvZGU7XG59XG5cbmZ1bmN0aW9uIHJhbmsoZikge1xuICByZXR1cm4gKChmKSA8PCAxKSAtICgoZikgPiA0ID8gOSA6IDApO1xufVxuXG5mdW5jdGlvbiB6ZXJvKGJ1ZikgeyB2YXIgbGVuID0gYnVmLmxlbmd0aDsgd2hpbGUgKC0tbGVuID49IDApIHsgYnVmW2xlbl0gPSAwOyB9IH1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCBhcyBtdWNoIHBlbmRpbmcgb3V0cHV0IGFzIHBvc3NpYmxlLiBBbGwgZGVmbGF0ZSgpIG91dHB1dCBnb2VzXG4gKiB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0XG4gKiB0byBhdm9pZCBhbGxvY2F0aW5nIGEgbGFyZ2Ugc3RybS0+b3V0cHV0IGJ1ZmZlciBhbmQgY29weWluZyBpbnRvIGl0LlxuICogKFNlZSBhbHNvIHJlYWRfYnVmKCkpLlxuICovXG5mdW5jdGlvbiBmbHVzaF9wZW5kaW5nKHN0cm0pIHtcbiAgdmFyIHMgPSBzdHJtLnN0YXRlO1xuXG4gIC8vX3RyX2ZsdXNoX2JpdHMocyk7XG4gIHZhciBsZW4gPSBzLnBlbmRpbmc7XG4gIGlmIChsZW4gPiBzdHJtLmF2YWlsX291dCkge1xuICAgIGxlbiA9IHN0cm0uYXZhaWxfb3V0O1xuICB9XG4gIGlmIChsZW4gPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgdXRpbHMuYXJyYXlTZXQoc3RybS5vdXRwdXQsIHMucGVuZGluZ19idWYsIHMucGVuZGluZ19vdXQsIGxlbiwgc3RybS5uZXh0X291dCk7XG4gIHN0cm0ubmV4dF9vdXQgKz0gbGVuO1xuICBzLnBlbmRpbmdfb3V0ICs9IGxlbjtcbiAgc3RybS50b3RhbF9vdXQgKz0gbGVuO1xuICBzdHJtLmF2YWlsX291dCAtPSBsZW47XG4gIHMucGVuZGluZyAtPSBsZW47XG4gIGlmIChzLnBlbmRpbmcgPT09IDApIHtcbiAgICBzLnBlbmRpbmdfb3V0ID0gMDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGZsdXNoX2Jsb2NrX29ubHkocywgbGFzdCkge1xuICB0cmVlcy5fdHJfZmx1c2hfYmxvY2socywgKHMuYmxvY2tfc3RhcnQgPj0gMCA/IHMuYmxvY2tfc3RhcnQgOiAtMSksIHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0LCBsYXN0KTtcbiAgcy5ibG9ja19zdGFydCA9IHMuc3Ryc3RhcnQ7XG4gIGZsdXNoX3BlbmRpbmcocy5zdHJtKTtcbn1cblxuXG5mdW5jdGlvbiBwdXRfYnl0ZShzLCBiKSB7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gYjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBQdXQgYSBzaG9ydCBpbiB0aGUgcGVuZGluZyBidWZmZXIuIFRoZSAxNi1iaXQgdmFsdWUgaXMgcHV0IGluIE1TQiBvcmRlci5cbiAqIElOIGFzc2VydGlvbjogdGhlIHN0cmVhbSBzdGF0ZSBpcyBjb3JyZWN0IGFuZCB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpblxuICogcGVuZGluZ19idWYuXG4gKi9cbmZ1bmN0aW9uIHB1dFNob3J0TVNCKHMsIGIpIHtcbi8vICBwdXRfYnl0ZShzLCAoQnl0ZSkoYiA+PiA4KSk7XG4vLyAgcHV0X2J5dGUocywgKEJ5dGUpKGIgJiAweGZmKSk7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKGIgPj4+IDgpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBiICYgMHhmZjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFJlYWQgYSBuZXcgYnVmZmVyIGZyb20gdGhlIGN1cnJlbnQgaW5wdXQgc3RyZWFtLCB1cGRhdGUgdGhlIGFkbGVyMzJcbiAqIGFuZCB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC4gIEFsbCBkZWZsYXRlKCkgaW5wdXQgZ29lcyB0aHJvdWdoXG4gKiB0aGlzIGZ1bmN0aW9uIHNvIHNvbWUgYXBwbGljYXRpb25zIG1heSB3aXNoIHRvIG1vZGlmeSBpdCB0byBhdm9pZFxuICogYWxsb2NhdGluZyBhIGxhcmdlIHN0cm0tPmlucHV0IGJ1ZmZlciBhbmQgY29weWluZyBmcm9tIGl0LlxuICogKFNlZSBhbHNvIGZsdXNoX3BlbmRpbmcoKSkuXG4gKi9cbmZ1bmN0aW9uIHJlYWRfYnVmKHN0cm0sIGJ1Ziwgc3RhcnQsIHNpemUpIHtcbiAgdmFyIGxlbiA9IHN0cm0uYXZhaWxfaW47XG5cbiAgaWYgKGxlbiA+IHNpemUpIHsgbGVuID0gc2l6ZTsgfVxuICBpZiAobGVuID09PSAwKSB7IHJldHVybiAwOyB9XG5cbiAgc3RybS5hdmFpbF9pbiAtPSBsZW47XG5cbiAgLy8gem1lbWNweShidWYsIHN0cm0tPm5leHRfaW4sIGxlbik7XG4gIHV0aWxzLmFycmF5U2V0KGJ1Ziwgc3RybS5pbnB1dCwgc3RybS5uZXh0X2luLCBsZW4sIHN0YXJ0KTtcbiAgaWYgKHN0cm0uc3RhdGUud3JhcCA9PT0gMSkge1xuICAgIHN0cm0uYWRsZXIgPSBhZGxlcjMyKHN0cm0uYWRsZXIsIGJ1ZiwgbGVuLCBzdGFydCk7XG4gIH1cblxuICBlbHNlIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDIpIHtcbiAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgYnVmLCBsZW4sIHN0YXJ0KTtcbiAgfVxuXG4gIHN0cm0ubmV4dF9pbiArPSBsZW47XG4gIHN0cm0udG90YWxfaW4gKz0gbGVuO1xuXG4gIHJldHVybiBsZW47XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZXQgbWF0Y2hfc3RhcnQgdG8gdGhlIGxvbmdlc3QgbWF0Y2ggc3RhcnRpbmcgYXQgdGhlIGdpdmVuIHN0cmluZyBhbmRcbiAqIHJldHVybiBpdHMgbGVuZ3RoLiBNYXRjaGVzIHNob3J0ZXIgb3IgZXF1YWwgdG8gcHJldl9sZW5ndGggYXJlIGRpc2NhcmRlZCxcbiAqIGluIHdoaWNoIGNhc2UgdGhlIHJlc3VsdCBpcyBlcXVhbCB0byBwcmV2X2xlbmd0aCBhbmQgbWF0Y2hfc3RhcnQgaXNcbiAqIGdhcmJhZ2UuXG4gKiBJTiBhc3NlcnRpb25zOiBjdXJfbWF0Y2ggaXMgdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW4gZm9yIHRoZSBjdXJyZW50XG4gKiAgIHN0cmluZyAoc3Ryc3RhcnQpIGFuZCBpdHMgZGlzdGFuY2UgaXMgPD0gTUFYX0RJU1QsIGFuZCBwcmV2X2xlbmd0aCA+PSAxXG4gKiBPVVQgYXNzZXJ0aW9uOiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIG5vdCBncmVhdGVyIHRoYW4gcy0+bG9va2FoZWFkLlxuICovXG5mdW5jdGlvbiBsb25nZXN0X21hdGNoKHMsIGN1cl9tYXRjaCkge1xuICB2YXIgY2hhaW5fbGVuZ3RoID0gcy5tYXhfY2hhaW5fbGVuZ3RoOyAgICAgIC8qIG1heCBoYXNoIGNoYWluIGxlbmd0aCAqL1xuICB2YXIgc2NhbiA9IHMuc3Ryc3RhcnQ7IC8qIGN1cnJlbnQgc3RyaW5nICovXG4gIHZhciBtYXRjaDsgICAgICAgICAgICAgICAgICAgICAgIC8qIG1hdGNoZWQgc3RyaW5nICovXG4gIHZhciBsZW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgbWF0Y2ggKi9cbiAgdmFyIGJlc3RfbGVuID0gcy5wcmV2X2xlbmd0aDsgICAgICAgICAgICAgIC8qIGJlc3QgbWF0Y2ggbGVuZ3RoIHNvIGZhciAqL1xuICB2YXIgbmljZV9tYXRjaCA9IHMubmljZV9tYXRjaDsgICAgICAgICAgICAgLyogc3RvcCBpZiBtYXRjaCBsb25nIGVub3VnaCAqL1xuICB2YXIgbGltaXQgPSAocy5zdHJzdGFydCA+IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSA/XG4gICAgICBzLnN0cnN0YXJ0IC0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkgOiAwLypOSUwqLztcblxuICB2YXIgX3dpbiA9IHMud2luZG93OyAvLyBzaG9ydGN1dFxuXG4gIHZhciB3bWFzayA9IHMud19tYXNrO1xuICB2YXIgcHJldiAgPSBzLnByZXY7XG5cbiAgLyogU3RvcCB3aGVuIGN1cl9tYXRjaCBiZWNvbWVzIDw9IGxpbWl0LiBUbyBzaW1wbGlmeSB0aGUgY29kZSxcbiAgICogd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZyBvZiB3aW5kb3cgaW5kZXggMC5cbiAgICovXG5cbiAgdmFyIHN0cmVuZCA9IHMuc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG4gIHZhciBzY2FuX2VuZDEgID0gX3dpbltzY2FuICsgYmVzdF9sZW4gLSAxXTtcbiAgdmFyIHNjYW5fZW5kICAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbl07XG5cbiAgLyogVGhlIGNvZGUgaXMgb3B0aW1pemVkIGZvciBIQVNIX0JJVFMgPj0gOCBhbmQgTUFYX01BVENILTIgbXVsdGlwbGUgb2YgMTYuXG4gICAqIEl0IGlzIGVhc3kgdG8gZ2V0IHJpZCBvZiB0aGlzIG9wdGltaXphdGlvbiBpZiBuZWNlc3NhcnkuXG4gICAqL1xuICAvLyBBc3NlcnQocy0+aGFzaF9iaXRzID49IDggJiYgTUFYX01BVENIID09IDI1OCwgXCJDb2RlIHRvbyBjbGV2ZXJcIik7XG5cbiAgLyogRG8gbm90IHdhc3RlIHRvbyBtdWNoIHRpbWUgaWYgd2UgYWxyZWFkeSBoYXZlIGEgZ29vZCBtYXRjaDogKi9cbiAgaWYgKHMucHJldl9sZW5ndGggPj0gcy5nb29kX21hdGNoKSB7XG4gICAgY2hhaW5fbGVuZ3RoID4+PSAyO1xuICB9XG4gIC8qIERvIG5vdCBsb29rIGZvciBtYXRjaGVzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBpbnB1dC4gVGhpcyBpcyBuZWNlc3NhcnlcbiAgICogdG8gbWFrZSBkZWZsYXRlIGRldGVybWluaXN0aWMuXG4gICAqL1xuICBpZiAobmljZV9tYXRjaCA+IHMubG9va2FoZWFkKSB7IG5pY2VfbWF0Y2ggPSBzLmxvb2thaGVhZDsgfVxuXG4gIC8vIEFzc2VydCgodWxnKXMtPnN0cnN0YXJ0IDw9IHMtPndpbmRvd19zaXplLU1JTl9MT09LQUhFQUQsIFwibmVlZCBsb29rYWhlYWRcIik7XG5cbiAgZG8ge1xuICAgIC8vIEFzc2VydChjdXJfbWF0Y2ggPCBzLT5zdHJzdGFydCwgXCJubyBmdXR1cmVcIik7XG4gICAgbWF0Y2ggPSBjdXJfbWF0Y2g7XG5cbiAgICAvKiBTa2lwIHRvIG5leHQgbWF0Y2ggaWYgdGhlIG1hdGNoIGxlbmd0aCBjYW5ub3QgaW5jcmVhc2VcbiAgICAgKiBvciBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIGxlc3MgdGhhbiAyLiAgTm90ZSB0aGF0IHRoZSBjaGVja3MgYmVsb3dcbiAgICAgKiBmb3IgaW5zdWZmaWNpZW50IGxvb2thaGVhZCBvbmx5IG9jY3VyIG9jY2FzaW9uYWxseSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgKiByZWFzb25zLiAgVGhlcmVmb3JlIHVuaW5pdGlhbGl6ZWQgbWVtb3J5IHdpbGwgYmUgYWNjZXNzZWQsIGFuZFxuICAgICAqIGNvbmRpdGlvbmFsIGp1bXBzIHdpbGwgYmUgbWFkZSB0aGF0IGRlcGVuZCBvbiB0aG9zZSB2YWx1ZXMuXG4gICAgICogSG93ZXZlciB0aGUgbGVuZ3RoIG9mIHRoZSBtYXRjaCBpcyBsaW1pdGVkIHRvIHRoZSBsb29rYWhlYWQsIHNvXG4gICAgICogdGhlIG91dHB1dCBvZiBkZWZsYXRlIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgdW5pbml0aWFsaXplZCB2YWx1ZXMuXG4gICAgICovXG5cbiAgICBpZiAoX3dpblttYXRjaCArIGJlc3RfbGVuXSAgICAgIT09IHNjYW5fZW5kICB8fFxuICAgICAgICBfd2luW21hdGNoICsgYmVzdF9sZW4gLSAxXSAhPT0gc2Nhbl9lbmQxIHx8XG4gICAgICAgIF93aW5bbWF0Y2hdICAgICAgICAgICAgICAgICE9PSBfd2luW3NjYW5dIHx8XG4gICAgICAgIF93aW5bKyttYXRjaF0gICAgICAgICAgICAgICE9PSBfd2luW3NjYW4gKyAxXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyogVGhlIGNoZWNrIGF0IGJlc3RfbGVuLTEgY2FuIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCB3aWxsIGJlIG1hZGVcbiAgICAgKiBhZ2FpbiBsYXRlci4gKFRoaXMgaGV1cmlzdGljIGlzIG5vdCBhbHdheXMgYSB3aW4uKVxuICAgICAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY29tcGFyZSBzY2FuWzJdIGFuZCBtYXRjaFsyXSBzaW5jZSB0aGV5XG4gICAgICogYXJlIGFsd2F5cyBlcXVhbCB3aGVuIHRoZSBvdGhlciBieXRlcyBtYXRjaCwgZ2l2ZW4gdGhhdFxuICAgICAqIHRoZSBoYXNoIGtleXMgYXJlIGVxdWFsIGFuZCB0aGF0IEhBU0hfQklUUyA+PSA4LlxuICAgICAqL1xuICAgIHNjYW4gKz0gMjtcbiAgICBtYXRjaCsrO1xuICAgIC8vIEFzc2VydCgqc2NhbiA9PSAqbWF0Y2gsIFwibWF0Y2hbMl0/XCIpO1xuXG4gICAgLyogV2UgY2hlY2sgZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBldmVyeSA4dGggY29tcGFyaXNvbjtcbiAgICAgKiB0aGUgMjU2dGggY2hlY2sgd2lsbCBiZSBtYWRlIGF0IHN0cnN0YXJ0KzI1OC5cbiAgICAgKi9cbiAgICBkbyB7XG4gICAgICAvKmpzaGludCBub2VtcHR5OmZhbHNlKi9cbiAgICB9IHdoaWxlIChfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgc2NhbiA8IHN0cmVuZCk7XG5cbiAgICAvLyBBc3NlcnQoc2NhbiA8PSBzLT53aW5kb3crKHVuc2lnbmVkKShzLT53aW5kb3dfc2l6ZS0xKSwgXCJ3aWxkIHNjYW5cIik7XG5cbiAgICBsZW4gPSBNQVhfTUFUQ0ggLSAoc3RyZW5kIC0gc2Nhbik7XG4gICAgc2NhbiA9IHN0cmVuZCAtIE1BWF9NQVRDSDtcblxuICAgIGlmIChsZW4gPiBiZXN0X2xlbikge1xuICAgICAgcy5tYXRjaF9zdGFydCA9IGN1cl9tYXRjaDtcbiAgICAgIGJlc3RfbGVuID0gbGVuO1xuICAgICAgaWYgKGxlbiA+PSBuaWNlX21hdGNoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2Nhbl9lbmQxICA9IF93aW5bc2NhbiArIGJlc3RfbGVuIC0gMV07XG4gICAgICBzY2FuX2VuZCAgID0gX3dpbltzY2FuICsgYmVzdF9sZW5dO1xuICAgIH1cbiAgfSB3aGlsZSAoKGN1cl9tYXRjaCA9IHByZXZbY3VyX21hdGNoICYgd21hc2tdKSA+IGxpbWl0ICYmIC0tY2hhaW5fbGVuZ3RoICE9PSAwKTtcblxuICBpZiAoYmVzdF9sZW4gPD0gcy5sb29rYWhlYWQpIHtcbiAgICByZXR1cm4gYmVzdF9sZW47XG4gIH1cbiAgcmV0dXJuIHMubG9va2FoZWFkO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmlsbCB0aGUgd2luZG93IHdoZW4gdGhlIGxvb2thaGVhZCBiZWNvbWVzIGluc3VmZmljaWVudC5cbiAqIFVwZGF0ZXMgc3Ryc3RhcnQgYW5kIGxvb2thaGVhZC5cbiAqXG4gKiBJTiBhc3NlcnRpb246IGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQURcbiAqIE9VVCBhc3NlcnRpb25zOiBzdHJzdGFydCA8PSB3aW5kb3dfc2l6ZS1NSU5fTE9PS0FIRUFEXG4gKiAgICBBdCBsZWFzdCBvbmUgYnl0ZSBoYXMgYmVlbiByZWFkLCBvciBhdmFpbF9pbiA9PSAwOyByZWFkcyBhcmVcbiAqICAgIHBlcmZvcm1lZCBmb3IgYXQgbGVhc3QgdHdvIGJ5dGVzIChyZXF1aXJlZCBmb3IgdGhlIHppcCB0cmFuc2xhdGVfZW9sXG4gKiAgICBvcHRpb24gLS0gbm90IHN1cHBvcnRlZCBoZXJlKS5cbiAqL1xuZnVuY3Rpb24gZmlsbF93aW5kb3cocykge1xuICB2YXIgX3dfc2l6ZSA9IHMud19zaXplO1xuICB2YXIgcCwgbiwgbSwgbW9yZSwgc3RyO1xuXG4gIC8vQXNzZXJ0KHMtPmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQsIFwiYWxyZWFkeSBlbm91Z2ggbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICBtb3JlID0gcy53aW5kb3dfc2l6ZSAtIHMubG9va2FoZWFkIC0gcy5zdHJzdGFydDtcblxuICAgIC8vIEpTIGludHMgaGF2ZSAzMiBiaXQsIGJsb2NrIGJlbG93IG5vdCBuZWVkZWRcbiAgICAvKiBEZWFsIHdpdGggIUAjJCUgNjRLIGxpbWl0OiAqL1xuICAgIC8vaWYgKHNpemVvZihpbnQpIDw9IDIpIHtcbiAgICAvLyAgICBpZiAobW9yZSA9PSAwICYmIHMtPnN0cnN0YXJ0ID09IDAgJiYgcy0+bG9va2FoZWFkID09IDApIHtcbiAgICAvLyAgICAgICAgbW9yZSA9IHdzaXplO1xuICAgIC8vXG4gICAgLy8gIH0gZWxzZSBpZiAobW9yZSA9PSAodW5zaWduZWQpKC0xKSkge1xuICAgIC8vICAgICAgICAvKiBWZXJ5IHVubGlrZWx5LCBidXQgcG9zc2libGUgb24gMTYgYml0IG1hY2hpbmUgaWZcbiAgICAvLyAgICAgICAgICogc3Ryc3RhcnQgPT0gMCAmJiBsb29rYWhlYWQgPT0gMSAoaW5wdXQgZG9uZSBhIGJ5dGUgYXQgdGltZSlcbiAgICAvLyAgICAgICAgICovXG4gICAgLy8gICAgICAgIG1vcmUtLTtcbiAgICAvLyAgICB9XG4gICAgLy99XG5cblxuICAgIC8qIElmIHRoZSB3aW5kb3cgaXMgYWxtb3N0IGZ1bGwgYW5kIHRoZXJlIGlzIGluc3VmZmljaWVudCBsb29rYWhlYWQsXG4gICAgICogbW92ZSB0aGUgdXBwZXIgaGFsZiB0byB0aGUgbG93ZXIgb25lIHRvIG1ha2Ugcm9vbSBpbiB0aGUgdXBwZXIgaGFsZi5cbiAgICAgKi9cbiAgICBpZiAocy5zdHJzdGFydCA+PSBfd19zaXplICsgKF93X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkge1xuXG4gICAgICB1dGlscy5hcnJheVNldChzLndpbmRvdywgcy53aW5kb3csIF93X3NpemUsIF93X3NpemUsIDApO1xuICAgICAgcy5tYXRjaF9zdGFydCAtPSBfd19zaXplO1xuICAgICAgcy5zdHJzdGFydCAtPSBfd19zaXplO1xuICAgICAgLyogd2Ugbm93IGhhdmUgc3Ryc3RhcnQgPj0gTUFYX0RJU1QgKi9cbiAgICAgIHMuYmxvY2tfc3RhcnQgLT0gX3dfc2l6ZTtcblxuICAgICAgLyogU2xpZGUgdGhlIGhhc2ggdGFibGUgKGNvdWxkIGJlIGF2b2lkZWQgd2l0aCAzMiBiaXQgdmFsdWVzXG4gICAgICAgYXQgdGhlIGV4cGVuc2Ugb2YgbWVtb3J5IHVzYWdlKS4gV2Ugc2xpZGUgZXZlbiB3aGVuIGxldmVsID09IDBcbiAgICAgICB0byBrZWVwIHRoZSBoYXNoIHRhYmxlIGNvbnNpc3RlbnQgaWYgd2Ugc3dpdGNoIGJhY2sgdG8gbGV2ZWwgPiAwXG4gICAgICAgbGF0ZXIuIChVc2luZyBsZXZlbCAwIHBlcm1hbmVudGx5IGlzIG5vdCBhbiBvcHRpbWFsIHVzYWdlIG9mXG4gICAgICAgemxpYiwgc28gd2UgZG9uJ3QgY2FyZSBhYm91dCB0aGlzIHBhdGhvbG9naWNhbCBjYXNlLilcbiAgICAgICAqL1xuXG4gICAgICBuID0gcy5oYXNoX3NpemU7XG4gICAgICBwID0gbjtcbiAgICAgIGRvIHtcbiAgICAgICAgbSA9IHMuaGVhZFstLXBdO1xuICAgICAgICBzLmhlYWRbcF0gPSAobSA+PSBfd19zaXplID8gbSAtIF93X3NpemUgOiAwKTtcbiAgICAgIH0gd2hpbGUgKC0tbik7XG5cbiAgICAgIG4gPSBfd19zaXplO1xuICAgICAgcCA9IG47XG4gICAgICBkbyB7XG4gICAgICAgIG0gPSBzLnByZXZbLS1wXTtcbiAgICAgICAgcy5wcmV2W3BdID0gKG0gPj0gX3dfc2l6ZSA/IG0gLSBfd19zaXplIDogMCk7XG4gICAgICAgIC8qIElmIG4gaXMgbm90IG9uIGFueSBoYXNoIGNoYWluLCBwcmV2W25dIGlzIGdhcmJhZ2UgYnV0XG4gICAgICAgICAqIGl0cyB2YWx1ZSB3aWxsIG5ldmVyIGJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgfSB3aGlsZSAoLS1uKTtcblxuICAgICAgbW9yZSArPSBfd19zaXplO1xuICAgIH1cbiAgICBpZiAocy5zdHJtLmF2YWlsX2luID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBJZiB0aGVyZSB3YXMgbm8gc2xpZGluZzpcbiAgICAgKiAgICBzdHJzdGFydCA8PSBXU0laRStNQVhfRElTVC0xICYmIGxvb2thaGVhZCA8PSBNSU5fTE9PS0FIRUFEIC0gMSAmJlxuICAgICAqICAgIG1vcmUgPT0gd2luZG93X3NpemUgLSBsb29rYWhlYWQgLSBzdHJzdGFydFxuICAgICAqID0+IG1vcmUgPj0gd2luZG93X3NpemUgLSAoTUlOX0xPT0tBSEVBRC0xICsgV1NJWkUgKyBNQVhfRElTVC0xKVxuICAgICAqID0+IG1vcmUgPj0gd2luZG93X3NpemUgLSAyKldTSVpFICsgMlxuICAgICAqIEluIHRoZSBCSUdfTUVNIG9yIE1NQVAgY2FzZSAobm90IHlldCBzdXBwb3J0ZWQpLFxuICAgICAqICAgd2luZG93X3NpemUgPT0gaW5wdXRfc2l6ZSArIE1JTl9MT09LQUhFQUQgICYmXG4gICAgICogICBzdHJzdGFydCArIHMtPmxvb2thaGVhZCA8PSBpbnB1dF9zaXplID0+IG1vcmUgPj0gTUlOX0xPT0tBSEVBRC5cbiAgICAgKiBPdGhlcndpc2UsIHdpbmRvd19zaXplID09IDIqV1NJWkUgc28gbW9yZSA+PSAyLlxuICAgICAqIElmIHRoZXJlIHdhcyBzbGlkaW5nLCBtb3JlID49IFdTSVpFLiBTbyBpbiBhbGwgY2FzZXMsIG1vcmUgPj0gMi5cbiAgICAgKi9cbiAgICAvL0Fzc2VydChtb3JlID49IDIsIFwibW9yZSA8IDJcIik7XG4gICAgbiA9IHJlYWRfYnVmKHMuc3RybSwgcy53aW5kb3csIHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZCwgbW9yZSk7XG4gICAgcy5sb29rYWhlYWQgKz0gbjtcblxuICAgIC8qIEluaXRpYWxpemUgdGhlIGhhc2ggdmFsdWUgbm93IHRoYXQgd2UgaGF2ZSBzb21lIGlucHV0OiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCArIHMuaW5zZXJ0ID49IE1JTl9NQVRDSCkge1xuICAgICAgc3RyID0gcy5zdHJzdGFydCAtIHMuaW5zZXJ0O1xuICAgICAgcy5pbnNfaCA9IHMud2luZG93W3N0cl07XG5cbiAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgMV0pOyAqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbc3RyICsgMV0pICYgcy5oYXNoX21hc2s7XG4vLyNpZiBNSU5fTUFUQ0ggIT0gM1xuLy8gICAgICAgIENhbGwgdXBkYXRlX2hhc2goKSBNSU5fTUFUQ0gtMyBtb3JlIHRpbWVzXG4vLyNlbmRpZlxuICAgICAgd2hpbGUgKHMuaW5zZXJ0KSB7XG4gICAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgTUlOX01BVENILTFdKTsgKi9cbiAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbc3RyICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG5cbiAgICAgICAgcy5wcmV2W3N0ciAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgICAgcy5oZWFkW3MuaW5zX2hdID0gc3RyO1xuICAgICAgICBzdHIrKztcbiAgICAgICAgcy5pbnNlcnQtLTtcbiAgICAgICAgaWYgKHMubG9va2FoZWFkICsgcy5pbnNlcnQgPCBNSU5fTUFUQ0gpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiBJZiB0aGUgd2hvbGUgaW5wdXQgaGFzIGxlc3MgdGhhbiBNSU5fTUFUQ0ggYnl0ZXMsIGluc19oIGlzIGdhcmJhZ2UsXG4gICAgICogYnV0IHRoaXMgaXMgbm90IGltcG9ydGFudCBzaW5jZSBvbmx5IGxpdGVyYWwgYnl0ZXMgd2lsbCBiZSBlbWl0dGVkLlxuICAgICAqL1xuXG4gIH0gd2hpbGUgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBzLnN0cm0uYXZhaWxfaW4gIT09IDApO1xuXG4gIC8qIElmIHRoZSBXSU5fSU5JVCBieXRlcyBhZnRlciB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IGRhdGEgaGF2ZSBuZXZlciBiZWVuXG4gICAqIHdyaXR0ZW4sIHRoZW4gemVybyB0aG9zZSBieXRlcyBpbiBvcmRlciB0byBhdm9pZCBtZW1vcnkgY2hlY2sgcmVwb3J0cyBvZlxuICAgKiB0aGUgdXNlIG9mIHVuaW5pdGlhbGl6ZWQgKG9yIHVuaW5pdGlhbGlzZWQgYXMgSnVsaWFuIHdyaXRlcykgYnl0ZXMgYnlcbiAgICogdGhlIGxvbmdlc3QgbWF0Y2ggcm91dGluZXMuICBVcGRhdGUgdGhlIGhpZ2ggd2F0ZXIgbWFyayBmb3IgdGhlIG5leHRcbiAgICogdGltZSB0aHJvdWdoIGhlcmUuICBXSU5fSU5JVCBpcyBzZXQgdG8gTUFYX01BVENIIHNpbmNlIHRoZSBsb25nZXN0IG1hdGNoXG4gICAqIHJvdXRpbmVzIGFsbG93IHNjYW5uaW5nIHRvIHN0cnN0YXJ0ICsgTUFYX01BVENILCBpZ25vcmluZyBsb29rYWhlYWQuXG4gICAqL1xuLy8gIGlmIChzLmhpZ2hfd2F0ZXIgPCBzLndpbmRvd19zaXplKSB7XG4vLyAgICB2YXIgY3VyciA9IHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZDtcbi8vICAgIHZhciBpbml0ID0gMDtcbi8vXG4vLyAgICBpZiAocy5oaWdoX3dhdGVyIDwgY3Vycikge1xuLy8gICAgICAvKiBQcmV2aW91cyBoaWdoIHdhdGVyIG1hcmsgYmVsb3cgY3VycmVudCBkYXRhIC0tIHplcm8gV0lOX0lOSVRcbi8vICAgICAgICogYnl0ZXMgb3IgdXAgdG8gZW5kIG9mIHdpbmRvdywgd2hpY2hldmVyIGlzIGxlc3MuXG4vLyAgICAgICAqL1xuLy8gICAgICBpbml0ID0gcy53aW5kb3dfc2l6ZSAtIGN1cnI7XG4vLyAgICAgIGlmIChpbml0ID4gV0lOX0lOSVQpXG4vLyAgICAgICAgaW5pdCA9IFdJTl9JTklUO1xuLy8gICAgICB6bWVtemVybyhzLT53aW5kb3cgKyBjdXJyLCAodW5zaWduZWQpaW5pdCk7XG4vLyAgICAgIHMtPmhpZ2hfd2F0ZXIgPSBjdXJyICsgaW5pdDtcbi8vICAgIH1cbi8vICAgIGVsc2UgaWYgKHMtPmhpZ2hfd2F0ZXIgPCAodWxnKWN1cnIgKyBXSU5fSU5JVCkge1xuLy8gICAgICAvKiBIaWdoIHdhdGVyIG1hcmsgYXQgb3IgYWJvdmUgY3VycmVudCBkYXRhLCBidXQgYmVsb3cgY3VycmVudCBkYXRhXG4vLyAgICAgICAqIHBsdXMgV0lOX0lOSVQgLS0gemVybyBvdXQgdG8gY3VycmVudCBkYXRhIHBsdXMgV0lOX0lOSVQsIG9yIHVwXG4vLyAgICAgICAqIHRvIGVuZCBvZiB3aW5kb3csIHdoaWNoZXZlciBpcyBsZXNzLlxuLy8gICAgICAgKi9cbi8vICAgICAgaW5pdCA9ICh1bGcpY3VyciArIFdJTl9JTklUIC0gcy0+aGlnaF93YXRlcjtcbi8vICAgICAgaWYgKGluaXQgPiBzLT53aW5kb3dfc2l6ZSAtIHMtPmhpZ2hfd2F0ZXIpXG4vLyAgICAgICAgaW5pdCA9IHMtPndpbmRvd19zaXplIC0gcy0+aGlnaF93YXRlcjtcbi8vICAgICAgem1lbXplcm8ocy0+d2luZG93ICsgcy0+aGlnaF93YXRlciwgKHVuc2lnbmVkKWluaXQpO1xuLy8gICAgICBzLT5oaWdoX3dhdGVyICs9IGluaXQ7XG4vLyAgICB9XG4vLyAgfVxuLy9cbi8vICBBc3NlcnQoKHVsZylzLT5zdHJzdGFydCA8PSBzLT53aW5kb3dfc2l6ZSAtIE1JTl9MT09LQUhFQUQsXG4vLyAgICBcIm5vdCBlbm91Z2ggcm9vbSBmb3Igc2VhcmNoXCIpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHkgd2l0aG91dCBjb21wcmVzc2lvbiBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gdGhlIGlucHV0IHN0cmVhbSwgcmV0dXJuXG4gKiB0aGUgY3VycmVudCBibG9jayBzdGF0ZS5cbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgaW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBkaWN0aW9uYXJ5IHNpbmNlXG4gKiB1bmNvbXByZXNzaWJsZSBkYXRhIGlzIHByb2JhYmx5IG5vdCB1c2VmdWwuIFRoaXMgZnVuY3Rpb24gaXMgdXNlZFxuICogb25seSBmb3IgdGhlIGxldmVsPTAgY29tcHJlc3Npb24gb3B0aW9uLlxuICogTk9URTogdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgb3B0aW1pemVkIHRvIGF2b2lkIGV4dHJhIGNvcHlpbmcgZnJvbVxuICogd2luZG93IHRvIHBlbmRpbmdfYnVmLlxuICovXG5mdW5jdGlvbiBkZWZsYXRlX3N0b3JlZChzLCBmbHVzaCkge1xuICAvKiBTdG9yZWQgYmxvY2tzIGFyZSBsaW1pdGVkIHRvIDB4ZmZmZiBieXRlcywgcGVuZGluZ19idWYgaXMgbGltaXRlZFxuICAgKiB0byBwZW5kaW5nX2J1Zl9zaXplLCBhbmQgZWFjaCBzdG9yZWQgYmxvY2sgaGFzIGEgNSBieXRlIGhlYWRlcjpcbiAgICovXG4gIHZhciBtYXhfYmxvY2tfc2l6ZSA9IDB4ZmZmZjtcblxuICBpZiAobWF4X2Jsb2NrX3NpemUgPiBzLnBlbmRpbmdfYnVmX3NpemUgLSA1KSB7XG4gICAgbWF4X2Jsb2NrX3NpemUgPSBzLnBlbmRpbmdfYnVmX3NpemUgLSA1O1xuICB9XG5cbiAgLyogQ29weSBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gaW5wdXQgdG8gb3V0cHV0OiAqL1xuICBmb3IgKDs7KSB7XG4gICAgLyogRmlsbCB0aGUgd2luZG93IGFzIG11Y2ggYXMgcG9zc2libGU6ICovXG4gICAgaWYgKHMubG9va2FoZWFkIDw9IDEpIHtcblxuICAgICAgLy9Bc3NlcnQocy0+c3Ryc3RhcnQgPCBzLT53X3NpemUrTUFYX0RJU1QocykgfHxcbiAgICAgIC8vICBzLT5ibG9ja19zdGFydCA+PSAobG9uZylzLT53X3NpemUsIFwic2xpZGUgdG9vIGxhdGVcIik7XG4vLyAgICAgIGlmICghKHMuc3Ryc3RhcnQgPCBzLndfc2l6ZSArIChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIHx8XG4vLyAgICAgICAgcy5ibG9ja19zdGFydCA+PSBzLndfc2l6ZSkpIHtcbi8vICAgICAgICB0aHJvdyAgbmV3IEVycm9yKFwic2xpZGUgdG9vIGxhdGVcIik7XG4vLyAgICAgIH1cblxuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDAgJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cblxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG4gICAgLy9Bc3NlcnQocy0+YmxvY2tfc3RhcnQgPj0gMEwsIFwiYmxvY2sgZ29uZVwiKTtcbi8vICAgIGlmIChzLmJsb2NrX3N0YXJ0IDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiYmxvY2sgZ29uZVwiKTtcblxuICAgIHMuc3Ryc3RhcnQgKz0gcy5sb29rYWhlYWQ7XG4gICAgcy5sb29rYWhlYWQgPSAwO1xuXG4gICAgLyogRW1pdCBhIHN0b3JlZCBibG9jayBpZiBwZW5kaW5nX2J1ZiB3aWxsIGJlIGZ1bGw6ICovXG4gICAgdmFyIG1heF9zdGFydCA9IHMuYmxvY2tfc3RhcnQgKyBtYXhfYmxvY2tfc2l6ZTtcblxuICAgIGlmIChzLnN0cnN0YXJ0ID09PSAwIHx8IHMuc3Ryc3RhcnQgPj0gbWF4X3N0YXJ0KSB7XG4gICAgICAvKiBzdHJzdGFydCA9PSAwIGlzIHBvc3NpYmxlIHdoZW4gd3JhcGFyb3VuZCBvbiAxNi1iaXQgbWFjaGluZSAqL1xuICAgICAgcy5sb29rYWhlYWQgPSBzLnN0cnN0YXJ0IC0gbWF4X3N0YXJ0O1xuICAgICAgcy5zdHJzdGFydCA9IG1heF9zdGFydDtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG5cblxuICAgIH1cbiAgICAvKiBGbHVzaCBpZiB3ZSBtYXkgaGF2ZSB0byBzbGlkZSwgb3RoZXJ3aXNlIGJsb2NrX3N0YXJ0IG1heSBiZWNvbWVcbiAgICAgKiBuZWdhdGl2ZSBhbmQgdGhlIGRhdGEgd2lsbCBiZSBnb25lOlxuICAgICAqL1xuICAgIGlmIChzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydCA+PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cblxuICBzLmluc2VydCA9IDA7XG5cbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG5cbiAgaWYgKHMuc3Ryc3RhcnQgPiBzLmJsb2NrX3N0YXJ0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG5cbiAgcmV0dXJuIEJTX05FRURfTU9SRTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wcmVzcyBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gdGhlIGlucHV0IHN0cmVhbSwgcmV0dXJuIHRoZSBjdXJyZW50XG4gKiBibG9jayBzdGF0ZS5cbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgcGVyZm9ybSBsYXp5IGV2YWx1YXRpb24gb2YgbWF0Y2hlcyBhbmQgaW5zZXJ0c1xuICogbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgb25seSBmb3IgdW5tYXRjaGVkIHN0cmluZ3Mgb3IgZm9yIHNob3J0XG4gKiBtYXRjaGVzLiBJdCBpcyB1c2VkIG9ubHkgZm9yIHRoZSBmYXN0IGNvbXByZXNzaW9uIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfZmFzdChzLCBmbHVzaCkge1xuICB2YXIgaGFzaF9oZWFkOyAgICAgICAgLyogaGVhZCBvZiB0aGUgaGFzaCBjaGFpbiAqL1xuICB2YXIgYmZsdXNoOyAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBuZXh0IG1hdGNoLCBwbHVzIE1JTl9NQVRDSCBieXRlcyB0byBpbnNlcnQgdGhlXG4gICAgICogc3RyaW5nIGZvbGxvd2luZyB0aGUgbmV4dCBtYXRjaC5cbiAgICAgKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBicmVhazsgLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgaGFzaF9oZWFkID0gMC8qTklMKi87XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgIC8qKiovXG4gICAgfVxuXG4gICAgLyogRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cbiAgICAgKiBBdCB0aGlzIHBvaW50IHdlIGhhdmUgYWx3YXlzIG1hdGNoX2xlbmd0aCA8IE1JTl9NQVRDSFxuICAgICAqL1xuICAgIGlmIChoYXNoX2hlYWQgIT09IDAvKk5JTCovICYmICgocy5zdHJzdGFydCAtIGhhc2hfaGVhZCkgPD0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpKSB7XG4gICAgICAvKiBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuICAgICAgICogb2Ygd2luZG93IGluZGV4IDAgKGluIHBhcnRpY3VsYXIgd2UgaGF2ZSB0byBhdm9pZCBhIG1hdGNoXG4gICAgICAgKiBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG4gICAgICAgKi9cbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gbG9uZ2VzdF9tYXRjaChzLCBoYXNoX2hlYWQpO1xuICAgICAgLyogbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnQgKi9cbiAgICB9XG4gICAgaWYgKHMubWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuICAgICAgLy8gY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydCwgcy5tYXRjaF9zdGFydCwgcy5tYXRjaF9sZW5ndGgpOyAvLyBmb3IgZGVidWcgb25seVxuXG4gICAgICAvKioqIF90cl90YWxseV9kaXN0KHMsIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLm1hdGNoX2xlbmd0aDtcblxuICAgICAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aFxuICAgICAgICogaXMgbm90IHRvbyBsYXJnZS4gVGhpcyBzYXZlcyB0aW1lIGJ1dCBkZWdyYWRlcyBjb21wcmVzc2lvbi5cbiAgICAgICAqL1xuICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoIDw9IHMubWF4X2xhenlfbWF0Y2gvKm1heF9pbnNlcnRfbGVuZ3RoKi8gJiYgcy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoLS07IC8qIHN0cmluZyBhdCBzdHJzdGFydCBhbHJlYWR5IGluIHRhYmxlICovXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG4gICAgICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIC8qIHN0cnN0YXJ0IG5ldmVyIGV4Y2VlZHMgV1NJWkUtTUFYX01BVENILCBzbyB0aGVyZSBhcmVcbiAgICAgICAgICAgKiBhbHdheXMgTUlOX01BVENIIGJ5dGVzIGFoZWFkLlxuICAgICAgICAgICAqL1xuICAgICAgICB9IHdoaWxlICgtLXMubWF0Y2hfbGVuZ3RoICE9PSAwKTtcbiAgICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgfSBlbHNlXG4gICAgICB7XG4gICAgICAgIHMuc3Ryc3RhcnQgKz0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICAgICAgcy5pbnNfaCA9IHMud2luZG93W3Muc3Ryc3RhcnRdO1xuICAgICAgICAvKiBVUERBVEVfSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0KzFdKTsgKi9cbiAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIDFdKSAmIHMuaGFzaF9tYXNrO1xuXG4vLyNpZiBNSU5fTUFUQ0ggIT0gM1xuLy8gICAgICAgICAgICAgICAgQ2FsbCBVUERBVEVfSEFTSCgpIE1JTl9NQVRDSC0zIG1vcmUgdGltZXNcbi8vI2VuZGlmXG4gICAgICAgIC8qIElmIGxvb2thaGVhZCA8IE1JTl9NQVRDSCwgaW5zX2ggaXMgZ2FyYmFnZSwgYnV0IGl0IGRvZXMgbm90XG4gICAgICAgICAqIG1hdHRlciBzaW5jZSBpdCB3aWxsIGJlIHJlY29tcHV0ZWQgYXQgbmV4dCBkZWZsYXRlIGNhbGwuXG4gICAgICAgICAqL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBObyBtYXRjaCwgb3V0cHV0IGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMud2luZG93W3Muc3Ryc3RhcnRdKSk7XG4gICAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydF0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSk7XG5cbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgfVxuICAgIGlmIChiZmx1c2gpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG4gIHMuaW5zZXJ0ID0gKChzLnN0cnN0YXJ0IDwgKE1JTl9NQVRDSCAtIDEpKSA/IHMuc3Ryc3RhcnQgOiBNSU5fTUFUQ0ggLSAxKTtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLmxhc3RfbGl0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhbWUgYXMgYWJvdmUsIGJ1dCBhY2hpZXZlcyBiZXR0ZXIgY29tcHJlc3Npb24uIFdlIHVzZSBhIGxhenlcbiAqIGV2YWx1YXRpb24gZm9yIG1hdGNoZXM6IGEgbWF0Y2ggaXMgZmluYWxseSBhZG9wdGVkIG9ubHkgaWYgdGhlcmUgaXNcbiAqIG5vIGJldHRlciBtYXRjaCBhdCB0aGUgbmV4dCB3aW5kb3cgcG9zaXRpb24uXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfc2xvdyhzLCBmbHVzaCkge1xuICB2YXIgaGFzaF9oZWFkOyAgICAgICAgICAvKiBoZWFkIG9mIGhhc2ggY2hhaW4gKi9cbiAgdmFyIGJmbHVzaDsgICAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIHZhciBtYXhfaW5zZXJ0O1xuXG4gIC8qIFByb2Nlc3MgdGhlIGlucHV0IGJsb2NrLiAqL1xuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7IGJyZWFrOyB9IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuICAgICAqIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuICAgICAqL1xuICAgIGhhc2hfaGVhZCA9IDAvKk5JTCovO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG4gICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAvKioqL1xuICAgIH1cblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICovXG4gICAgcy5wcmV2X2xlbmd0aCA9IHMubWF0Y2hfbGVuZ3RoO1xuICAgIHMucHJldl9tYXRjaCA9IHMubWF0Y2hfc3RhcnQ7XG4gICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgcy5wcmV2X2xlbmd0aCA8IHMubWF4X2xhenlfbWF0Y2ggJiZcbiAgICAgICAgcy5zdHJzdGFydCAtIGhhc2hfaGVhZCA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKS8qTUFYX0RJU1QocykqLykge1xuICAgICAgLyogVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcbiAgICAgICAqIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuICAgICAgICogb2YgdGhlIHN0cmluZyB3aXRoIGl0c2VsZiBhdCB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IGZpbGUpLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2gocywgaGFzaF9oZWFkKTtcbiAgICAgIC8qIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0ICovXG5cbiAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA8PSA1ICYmXG4gICAgICAgICAocy5zdHJhdGVneSA9PT0gWl9GSUxURVJFRCB8fCAocy5tYXRjaF9sZW5ndGggPT09IE1JTl9NQVRDSCAmJiBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCA+IDQwOTYvKlRPT19GQVIqLykpKSB7XG5cbiAgICAgICAgLyogSWYgcHJldl9tYXRjaCBpcyBhbHNvIE1JTl9NQVRDSCwgbWF0Y2hfc3RhcnQgaXMgZ2FyYmFnZVxuICAgICAgICAgKiBidXQgd2Ugd2lsbCBpZ25vcmUgdGhlIGN1cnJlbnQgbWF0Y2ggYW55d2F5LlxuICAgICAgICAgKi9cbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBJZiB0aGVyZSB3YXMgYSBtYXRjaCBhdCB0aGUgcHJldmlvdXMgc3RlcCBhbmQgdGhlIGN1cnJlbnRcbiAgICAgKiBtYXRjaCBpcyBub3QgYmV0dGVyLCBvdXRwdXQgdGhlIHByZXZpb3VzIG1hdGNoOlxuICAgICAqL1xuICAgIGlmIChzLnByZXZfbGVuZ3RoID49IE1JTl9NQVRDSCAmJiBzLm1hdGNoX2xlbmd0aCA8PSBzLnByZXZfbGVuZ3RoKSB7XG4gICAgICBtYXhfaW5zZXJ0ID0gcy5zdHJzdGFydCArIHMubG9va2FoZWFkIC0gTUlOX01BVENIO1xuICAgICAgLyogRG8gbm90IGluc2VydCBzdHJpbmdzIGluIGhhc2ggdGFibGUgYmV5b25kIHRoaXMuICovXG5cbiAgICAgIC8vY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydC0xLCBzLnByZXZfbWF0Y2gsIHMucHJldl9sZW5ndGgpO1xuXG4gICAgICAvKioqX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIDEgLSBzLnByZXZfbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICBzLnByZXZfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCBzLnN0cnN0YXJ0IC0gMSAtIHMucHJldl9tYXRjaCwgcy5wcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCk7XG4gICAgICAvKiBJbnNlcnQgaW4gaGFzaCB0YWJsZSBhbGwgc3RyaW5ncyB1cCB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgICAqIHN0cnN0YXJ0LTEgYW5kIHN0cnN0YXJ0IGFyZSBhbHJlYWR5IGluc2VydGVkLiBJZiB0aGVyZSBpcyBub3RcbiAgICAgICAqIGVub3VnaCBsb29rYWhlYWQsIHRoZSBsYXN0IHR3byBzdHJpbmdzIGFyZSBub3QgaW5zZXJ0ZWQgaW5cbiAgICAgICAqIHRoZSBoYXNoIHRhYmxlLlxuICAgICAgICovXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLnByZXZfbGVuZ3RoIC0gMTtcbiAgICAgIHMucHJldl9sZW5ndGggLT0gMjtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKCsrcy5zdHJzdGFydCA8PSBtYXhfaW5zZXJ0KSB7XG4gICAgICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG4gICAgICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgICAgICAvKioqL1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlICgtLXMucHJldl9sZW5ndGggIT09IDApO1xuICAgICAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICAgICAgcy5zdHJzdGFydCsrO1xuXG4gICAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgICAgfVxuICAgICAgICAvKioqL1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChzLm1hdGNoX2F2YWlsYWJsZSkge1xuICAgICAgLyogSWYgdGhlcmUgd2FzIG5vIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBwb3NpdGlvbiwgb3V0cHV0IGFcbiAgICAgICAqIHNpbmdsZSBsaXRlcmFsLiBJZiB0aGVyZSB3YXMgYSBtYXRjaCBidXQgdGhlIGN1cnJlbnQgbWF0Y2hcbiAgICAgICAqIGlzIGxvbmdlciwgdHJ1bmNhdGUgdGhlIHByZXZpb3VzIG1hdGNoIHRvIGEgc2luZ2xlIGxpdGVyYWwuXG4gICAgICAgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0LTFdKSk7XG4gICAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydC0xXSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnQgLSAxXSk7XG5cbiAgICAgIGlmIChiZmx1c2gpIHtcbiAgICAgICAgLyoqKiBGTFVTSF9CTE9DS19PTkxZKHMsIDApICoqKi9cbiAgICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICAgIC8qKiovXG4gICAgICB9XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogVGhlcmUgaXMgbm8gcHJldmlvdXMgbWF0Y2ggdG8gY29tcGFyZSB3aXRoLCB3YWl0IGZvclxuICAgICAgICogdGhlIG5leHQgc3RlcCB0byBkZWNpZGUuXG4gICAgICAgKi9cbiAgICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChmbHVzaCAhPSBaX05PX0ZMVVNILCBcIm5vIGZsdXNoP1wiKTtcbiAgaWYgKHMubWF0Y2hfYXZhaWxhYmxlKSB7XG4gICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnQtMV0pKTtcbiAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydC0xXSwgYmZsdXNoKTsgKioqL1xuICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0IC0gMV0pO1xuXG4gICAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICB9XG4gIHMuaW5zZXJ0ID0gcy5zdHJzdGFydCA8IE1JTl9NQVRDSCAtIDEgPyBzLnN0cnN0YXJ0IDogTUlOX01BVENIIC0gMTtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLmxhc3RfbGl0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG5cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGb3IgWl9STEUsIHNpbXBseSBsb29rIGZvciBydW5zIG9mIGJ5dGVzLCBnZW5lcmF0ZSBtYXRjaGVzIG9ubHkgb2YgZGlzdGFuY2VcbiAqIG9uZS4gIERvIG5vdCBtYWludGFpbiBhIGhhc2ggdGFibGUuICAoSXQgd2lsbCBiZSByZWdlbmVyYXRlZCBpZiB0aGlzIHJ1biBvZlxuICogZGVmbGF0ZSBzd2l0Y2hlcyBhd2F5IGZyb20gWl9STEUuKVxuICovXG5mdW5jdGlvbiBkZWZsYXRlX3JsZShzLCBmbHVzaCkge1xuICB2YXIgYmZsdXNoOyAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuICB2YXIgcHJldjsgICAgICAgICAgICAgIC8qIGJ5dGUgYXQgZGlzdGFuY2Ugb25lIHRvIG1hdGNoICovXG4gIHZhciBzY2FuLCBzdHJlbmQ7ICAgICAgLyogc2NhbiBnb2VzIHVwIHRvIHN0cmVuZCBmb3IgbGVuZ3RoIG9mIHJ1biAqL1xuXG4gIHZhciBfd2luID0gcy53aW5kb3c7XG5cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBsb25nZXN0IHJ1biwgcGx1cyBvbmUgZm9yIHRoZSB1bnJvbGxlZCBsb29wLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8PSBNQVhfTUFUQ0gpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDw9IE1BWF9NQVRDSCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7IGJyZWFrOyB9IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgfVxuXG4gICAgLyogU2VlIGhvdyBtYW55IHRpbWVzIHRoZSBwcmV2aW91cyBieXRlIHJlcGVhdHMgKi9cbiAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCAmJiBzLnN0cnN0YXJ0ID4gMCkge1xuICAgICAgc2NhbiA9IHMuc3Ryc3RhcnQgLSAxO1xuICAgICAgcHJldiA9IF93aW5bc2Nhbl07XG4gICAgICBpZiAocHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0pIHtcbiAgICAgICAgc3RyZW5kID0gcy5zdHJzdGFydCArIE1BWF9NQVRDSDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIC8qanNoaW50IG5vZW1wdHk6ZmFsc2UqL1xuICAgICAgICB9IHdoaWxlIChwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHNjYW4gPCBzdHJlbmQpO1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IE1BWF9NQVRDSCAtIChzdHJlbmQgLSBzY2FuKTtcbiAgICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoID4gcy5sb29rYWhlYWQpIHtcbiAgICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IHMubG9va2FoZWFkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL0Fzc2VydChzY2FuIDw9IHMtPndpbmRvdysodUludCkocy0+d2luZG93X3NpemUtMSksIFwid2lsZCBzY2FuXCIpO1xuICAgIH1cblxuICAgIC8qIEVtaXQgbWF0Y2ggaWYgaGF2ZSBydW4gb2YgTUlOX01BVENIIG9yIGxvbmdlciwgZWxzZSBlbWl0IGxpdGVyYWwgKi9cbiAgICBpZiAocy5tYXRjaF9sZW5ndGggPj0gTUlOX01BVENIKSB7XG4gICAgICAvL2NoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQsIHMuc3Ryc3RhcnQgLSAxLCBzLm1hdGNoX2xlbmd0aCk7XG5cbiAgICAgIC8qKiogX3RyX3RhbGx5X2Rpc3QocywgMSwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAxLCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cbiAgICAgIHMubG9va2FoZWFkIC09IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgcy5zdHJzdGFydCArPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnRdKSk7XG4gICAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydF0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSk7XG5cbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgfVxuICAgIGlmIChiZmx1c2gpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG4gIHMuaW5zZXJ0ID0gMDtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLmxhc3RfbGl0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZvciBaX0hVRkZNQU5fT05MWSwgZG8gbm90IGxvb2sgZm9yIG1hdGNoZXMuICBEbyBub3QgbWFpbnRhaW4gYSBoYXNoIHRhYmxlLlxuICogKEl0IHdpbGwgYmUgcmVnZW5lcmF0ZWQgaWYgdGhpcyBydW4gb2YgZGVmbGF0ZSBzd2l0Y2hlcyBhd2F5IGZyb20gSHVmZm1hbi4pXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfaHVmZihzLCBmbHVzaCkge1xuICB2YXIgYmZsdXNoOyAgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhIGxpdGVyYWwgdG8gd3JpdGUuICovXG4gICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBpZiAoZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrOyAgICAgIC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogT3V0cHV0IGEgbGl0ZXJhbCBieXRlICovXG4gICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0XSkpO1xuICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSk7XG4gICAgcy5sb29rYWhlYWQtLTtcbiAgICBzLnN0cnN0YXJ0Kys7XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAwO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cbi8qIFZhbHVlcyBmb3IgbWF4X2xhenlfbWF0Y2gsIGdvb2RfbWF0Y2ggYW5kIG1heF9jaGFpbl9sZW5ndGgsIGRlcGVuZGluZyBvblxuICogdGhlIGRlc2lyZWQgcGFjayBsZXZlbCAoMC4uOSkuIFRoZSB2YWx1ZXMgZ2l2ZW4gYmVsb3cgaGF2ZSBiZWVuIHR1bmVkIHRvXG4gKiBleGNsdWRlIHdvcnN0IGNhc2UgcGVyZm9ybWFuY2UgZm9yIHBhdGhvbG9naWNhbCBmaWxlcy4gQmV0dGVyIHZhbHVlcyBtYXkgYmVcbiAqIGZvdW5kIGZvciBzcGVjaWZpYyBmaWxlcy5cbiAqL1xuZnVuY3Rpb24gQ29uZmlnKGdvb2RfbGVuZ3RoLCBtYXhfbGF6eSwgbmljZV9sZW5ndGgsIG1heF9jaGFpbiwgZnVuYykge1xuICB0aGlzLmdvb2RfbGVuZ3RoID0gZ29vZF9sZW5ndGg7XG4gIHRoaXMubWF4X2xhenkgPSBtYXhfbGF6eTtcbiAgdGhpcy5uaWNlX2xlbmd0aCA9IG5pY2VfbGVuZ3RoO1xuICB0aGlzLm1heF9jaGFpbiA9IG1heF9jaGFpbjtcbiAgdGhpcy5mdW5jID0gZnVuYztcbn1cblxudmFyIGNvbmZpZ3VyYXRpb25fdGFibGU7XG5cbmNvbmZpZ3VyYXRpb25fdGFibGUgPSBbXG4gIC8qICAgICAgZ29vZCBsYXp5IG5pY2UgY2hhaW4gKi9cbiAgbmV3IENvbmZpZygwLCAwLCAwLCAwLCBkZWZsYXRlX3N0b3JlZCksICAgICAgICAgIC8qIDAgc3RvcmUgb25seSAqL1xuICBuZXcgQ29uZmlnKDQsIDQsIDgsIDQsIGRlZmxhdGVfZmFzdCksICAgICAgICAgICAgLyogMSBtYXggc3BlZWQsIG5vIGxhenkgbWF0Y2hlcyAqL1xuICBuZXcgQ29uZmlnKDQsIDUsIDE2LCA4LCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAgLyogMiAqL1xuICBuZXcgQ29uZmlnKDQsIDYsIDMyLCAzMiwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgLyogMyAqL1xuXG4gIG5ldyBDb25maWcoNCwgNCwgMTYsIDE2LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAgICAvKiA0IGxhenkgbWF0Y2hlcyAqL1xuICBuZXcgQ29uZmlnKDgsIDE2LCAzMiwgMzIsIGRlZmxhdGVfc2xvdyksICAgICAgICAgLyogNSAqL1xuICBuZXcgQ29uZmlnKDgsIDE2LCAxMjgsIDEyOCwgZGVmbGF0ZV9zbG93KSwgICAgICAgLyogNiAqL1xuICBuZXcgQ29uZmlnKDgsIDMyLCAxMjgsIDI1NiwgZGVmbGF0ZV9zbG93KSwgICAgICAgLyogNyAqL1xuICBuZXcgQ29uZmlnKDMyLCAxMjgsIDI1OCwgMTAyNCwgZGVmbGF0ZV9zbG93KSwgICAgLyogOCAqL1xuICBuZXcgQ29uZmlnKDMyLCAyNTgsIDI1OCwgNDA5NiwgZGVmbGF0ZV9zbG93KSAgICAgLyogOSBtYXggY29tcHJlc3Npb24gKi9cbl07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSBcImxvbmdlc3QgbWF0Y2hcIiByb3V0aW5lcyBmb3IgYSBuZXcgemxpYiBzdHJlYW1cbiAqL1xuZnVuY3Rpb24gbG1faW5pdChzKSB7XG4gIHMud2luZG93X3NpemUgPSAyICogcy53X3NpemU7XG5cbiAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovXG4gIHplcm8ocy5oZWFkKTsgLy8gRmlsbCB3aXRoIE5JTCAoPSAwKTtcblxuICAvKiBTZXQgdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzOlxuICAgKi9cbiAgcy5tYXhfbGF6eV9tYXRjaCA9IGNvbmZpZ3VyYXRpb25fdGFibGVbcy5sZXZlbF0ubWF4X2xhenk7XG4gIHMuZ29vZF9tYXRjaCA9IGNvbmZpZ3VyYXRpb25fdGFibGVbcy5sZXZlbF0uZ29vZF9sZW5ndGg7XG4gIHMubmljZV9tYXRjaCA9IGNvbmZpZ3VyYXRpb25fdGFibGVbcy5sZXZlbF0ubmljZV9sZW5ndGg7XG4gIHMubWF4X2NoYWluX2xlbmd0aCA9IGNvbmZpZ3VyYXRpb25fdGFibGVbcy5sZXZlbF0ubWF4X2NoYWluO1xuXG4gIHMuc3Ryc3RhcnQgPSAwO1xuICBzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgcy5sb29rYWhlYWQgPSAwO1xuICBzLmluc2VydCA9IDA7XG4gIHMubWF0Y2hfbGVuZ3RoID0gcy5wcmV2X2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgcy5pbnNfaCA9IDA7XG59XG5cblxuZnVuY3Rpb24gRGVmbGF0ZVN0YXRlKCkge1xuICB0aGlzLnN0cm0gPSBudWxsOyAgICAgICAgICAgIC8qIHBvaW50ZXIgYmFjayB0byB0aGlzIHpsaWIgc3RyZWFtICovXG4gIHRoaXMuc3RhdHVzID0gMDsgICAgICAgICAgICAvKiBhcyB0aGUgbmFtZSBpbXBsaWVzICovXG4gIHRoaXMucGVuZGluZ19idWYgPSBudWxsOyAgICAgIC8qIG91dHB1dCBzdGlsbCBwZW5kaW5nICovXG4gIHRoaXMucGVuZGluZ19idWZfc2l6ZSA9IDA7ICAvKiBzaXplIG9mIHBlbmRpbmdfYnVmICovXG4gIHRoaXMucGVuZGluZ19vdXQgPSAwOyAgICAgICAvKiBuZXh0IHBlbmRpbmcgYnl0ZSB0byBvdXRwdXQgdG8gdGhlIHN0cmVhbSAqL1xuICB0aGlzLnBlbmRpbmcgPSAwOyAgICAgICAgICAgLyogbmIgb2YgYnl0ZXMgaW4gdGhlIHBlbmRpbmcgYnVmZmVyICovXG4gIHRoaXMud3JhcCA9IDA7ICAgICAgICAgICAgICAvKiBiaXQgMCB0cnVlIGZvciB6bGliLCBiaXQgMSB0cnVlIGZvciBnemlwICovXG4gIHRoaXMuZ3poZWFkID0gbnVsbDsgICAgICAgICAvKiBnemlwIGhlYWRlciBpbmZvcm1hdGlvbiB0byB3cml0ZSAqL1xuICB0aGlzLmd6aW5kZXggPSAwOyAgICAgICAgICAgLyogd2hlcmUgaW4gZXh0cmEsIG5hbWUsIG9yIGNvbW1lbnQgKi9cbiAgdGhpcy5tZXRob2QgPSBaX0RFRkxBVEVEOyAvKiBjYW4gb25seSBiZSBERUZMQVRFRCAqL1xuICB0aGlzLmxhc3RfZmx1c2ggPSAtMTsgICAvKiB2YWx1ZSBvZiBmbHVzaCBwYXJhbSBmb3IgcHJldmlvdXMgZGVmbGF0ZSBjYWxsICovXG5cbiAgdGhpcy53X3NpemUgPSAwOyAgLyogTFo3NyB3aW5kb3cgc2l6ZSAoMzJLIGJ5IGRlZmF1bHQpICovXG4gIHRoaXMud19iaXRzID0gMDsgIC8qIGxvZzIod19zaXplKSAgKDguLjE2KSAqL1xuICB0aGlzLndfbWFzayA9IDA7ICAvKiB3X3NpemUgLSAxICovXG5cbiAgdGhpcy53aW5kb3cgPSBudWxsO1xuICAvKiBTbGlkaW5nIHdpbmRvdy4gSW5wdXQgYnl0ZXMgYXJlIHJlYWQgaW50byB0aGUgc2Vjb25kIGhhbGYgb2YgdGhlIHdpbmRvdyxcbiAgICogYW5kIG1vdmUgdG8gdGhlIGZpcnN0IGhhbGYgbGF0ZXIgdG8ga2VlcCBhIGRpY3Rpb25hcnkgb2YgYXQgbGVhc3Qgd1NpemVcbiAgICogYnl0ZXMuIFdpdGggdGhpcyBvcmdhbml6YXRpb24sIG1hdGNoZXMgYXJlIGxpbWl0ZWQgdG8gYSBkaXN0YW5jZSBvZlxuICAgKiB3U2l6ZS1NQVhfTUFUQ0ggYnl0ZXMsIGJ1dCB0aGlzIGVuc3VyZXMgdGhhdCBJTyBpcyBhbHdheXNcbiAgICogcGVyZm9ybWVkIHdpdGggYSBsZW5ndGggbXVsdGlwbGUgb2YgdGhlIGJsb2NrIHNpemUuXG4gICAqL1xuXG4gIHRoaXMud2luZG93X3NpemUgPSAwO1xuICAvKiBBY3R1YWwgc2l6ZSBvZiB3aW5kb3c6IDIqd1NpemUsIGV4Y2VwdCB3aGVuIHRoZSB1c2VyIGlucHV0IGJ1ZmZlclxuICAgKiBpcyBkaXJlY3RseSB1c2VkIGFzIHNsaWRpbmcgd2luZG93LlxuICAgKi9cblxuICB0aGlzLnByZXYgPSBudWxsO1xuICAvKiBMaW5rIHRvIG9sZGVyIHN0cmluZyB3aXRoIHNhbWUgaGFzaCBpbmRleC4gVG8gbGltaXQgdGhlIHNpemUgb2YgdGhpc1xuICAgKiBhcnJheSB0byA2NEssIHRoaXMgbGluayBpcyBtYWludGFpbmVkIG9ubHkgZm9yIHRoZSBsYXN0IDMySyBzdHJpbmdzLlxuICAgKiBBbiBpbmRleCBpbiB0aGlzIGFycmF5IGlzIHRodXMgYSB3aW5kb3cgaW5kZXggbW9kdWxvIDMySy5cbiAgICovXG5cbiAgdGhpcy5oZWFkID0gbnVsbDsgICAvKiBIZWFkcyBvZiB0aGUgaGFzaCBjaGFpbnMgb3IgTklMLiAqL1xuXG4gIHRoaXMuaW5zX2ggPSAwOyAgICAgICAvKiBoYXNoIGluZGV4IG9mIHN0cmluZyB0byBiZSBpbnNlcnRlZCAqL1xuICB0aGlzLmhhc2hfc2l6ZSA9IDA7ICAgLyogbnVtYmVyIG9mIGVsZW1lbnRzIGluIGhhc2ggdGFibGUgKi9cbiAgdGhpcy5oYXNoX2JpdHMgPSAwOyAgIC8qIGxvZzIoaGFzaF9zaXplKSAqL1xuICB0aGlzLmhhc2hfbWFzayA9IDA7ICAgLyogaGFzaF9zaXplLTEgKi9cblxuICB0aGlzLmhhc2hfc2hpZnQgPSAwO1xuICAvKiBOdW1iZXIgb2YgYml0cyBieSB3aGljaCBpbnNfaCBtdXN0IGJlIHNoaWZ0ZWQgYXQgZWFjaCBpbnB1dFxuICAgKiBzdGVwLiBJdCBtdXN0IGJlIHN1Y2ggdGhhdCBhZnRlciBNSU5fTUFUQ0ggc3RlcHMsIHRoZSBvbGRlc3RcbiAgICogYnl0ZSBubyBsb25nZXIgdGFrZXMgcGFydCBpbiB0aGUgaGFzaCBrZXksIHRoYXQgaXM6XG4gICAqICAgaGFzaF9zaGlmdCAqIE1JTl9NQVRDSCA+PSBoYXNoX2JpdHNcbiAgICovXG5cbiAgdGhpcy5ibG9ja19zdGFydCA9IDA7XG4gIC8qIFdpbmRvdyBwb3NpdGlvbiBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IG91dHB1dCBibG9jay4gR2V0c1xuICAgKiBuZWdhdGl2ZSB3aGVuIHRoZSB3aW5kb3cgaXMgbW92ZWQgYmFja3dhcmRzLlxuICAgKi9cblxuICB0aGlzLm1hdGNoX2xlbmd0aCA9IDA7ICAgICAgLyogbGVuZ3RoIG9mIGJlc3QgbWF0Y2ggKi9cbiAgdGhpcy5wcmV2X21hdGNoID0gMDsgICAgICAgIC8qIHByZXZpb3VzIG1hdGNoICovXG4gIHRoaXMubWF0Y2hfYXZhaWxhYmxlID0gMDsgICAvKiBzZXQgaWYgcHJldmlvdXMgbWF0Y2ggZXhpc3RzICovXG4gIHRoaXMuc3Ryc3RhcnQgPSAwOyAgICAgICAgICAvKiBzdGFydCBvZiBzdHJpbmcgdG8gaW5zZXJ0ICovXG4gIHRoaXMubWF0Y2hfc3RhcnQgPSAwOyAgICAgICAvKiBzdGFydCBvZiBtYXRjaGluZyBzdHJpbmcgKi9cbiAgdGhpcy5sb29rYWhlYWQgPSAwOyAgICAgICAgIC8qIG51bWJlciBvZiB2YWxpZCBieXRlcyBhaGVhZCBpbiB3aW5kb3cgKi9cblxuICB0aGlzLnByZXZfbGVuZ3RoID0gMDtcbiAgLyogTGVuZ3RoIG9mIHRoZSBiZXN0IG1hdGNoIGF0IHByZXZpb3VzIHN0ZXAuIE1hdGNoZXMgbm90IGdyZWF0ZXIgdGhhbiB0aGlzXG4gICAqIGFyZSBkaXNjYXJkZWQuIFRoaXMgaXMgdXNlZCBpbiB0aGUgbGF6eSBtYXRjaCBldmFsdWF0aW9uLlxuICAgKi9cblxuICB0aGlzLm1heF9jaGFpbl9sZW5ndGggPSAwO1xuICAvKiBUbyBzcGVlZCB1cCBkZWZsYXRpb24sIGhhc2ggY2hhaW5zIGFyZSBuZXZlciBzZWFyY2hlZCBiZXlvbmQgdGhpc1xuICAgKiBsZW5ndGguICBBIGhpZ2hlciBsaW1pdCBpbXByb3ZlcyBjb21wcmVzc2lvbiByYXRpbyBidXQgZGVncmFkZXMgdGhlXG4gICAqIHNwZWVkLlxuICAgKi9cblxuICB0aGlzLm1heF9sYXp5X21hdGNoID0gMDtcbiAgLyogQXR0ZW1wdCB0byBmaW5kIGEgYmV0dGVyIG1hdGNoIG9ubHkgd2hlbiB0aGUgY3VycmVudCBtYXRjaCBpcyBzdHJpY3RseVxuICAgKiBzbWFsbGVyIHRoYW4gdGhpcyB2YWx1ZS4gVGhpcyBtZWNoYW5pc20gaXMgdXNlZCBvbmx5IGZvciBjb21wcmVzc2lvblxuICAgKiBsZXZlbHMgPj0gNC5cbiAgICovXG4gIC8vIFRoYXQncyBhbGlhcyB0byBtYXhfbGF6eV9tYXRjaCwgZG9uJ3QgdXNlIGRpcmVjdGx5XG4gIC8vdGhpcy5tYXhfaW5zZXJ0X2xlbmd0aCA9IDA7XG4gIC8qIEluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSBvbmx5IGlmIHRoZSBtYXRjaCBsZW5ndGggaXMgbm90XG4gICAqIGdyZWF0ZXIgdGhhbiB0aGlzIGxlbmd0aC4gVGhpcyBzYXZlcyB0aW1lIGJ1dCBkZWdyYWRlcyBjb21wcmVzc2lvbi5cbiAgICogbWF4X2luc2VydF9sZW5ndGggaXMgdXNlZCBvbmx5IGZvciBjb21wcmVzc2lvbiBsZXZlbHMgPD0gMy5cbiAgICovXG5cbiAgdGhpcy5sZXZlbCA9IDA7ICAgICAvKiBjb21wcmVzc2lvbiBsZXZlbCAoMS4uOSkgKi9cbiAgdGhpcy5zdHJhdGVneSA9IDA7ICAvKiBmYXZvciBvciBmb3JjZSBIdWZmbWFuIGNvZGluZyovXG5cbiAgdGhpcy5nb29kX21hdGNoID0gMDtcbiAgLyogVXNlIGEgZmFzdGVyIHNlYXJjaCB3aGVuIHRoZSBwcmV2aW91cyBtYXRjaCBpcyBsb25nZXIgdGhhbiB0aGlzICovXG5cbiAgdGhpcy5uaWNlX21hdGNoID0gMDsgLyogU3RvcCBzZWFyY2hpbmcgd2hlbiBjdXJyZW50IG1hdGNoIGV4Y2VlZHMgdGhpcyAqL1xuXG4gICAgICAgICAgICAgIC8qIHVzZWQgYnkgdHJlZXMuYzogKi9cblxuICAvKiBEaWRuJ3QgdXNlIGN0X2RhdGEgdHlwZWRlZiBiZWxvdyB0byBzdXBwcmVzcyBjb21waWxlciB3YXJuaW5nICovXG5cbiAgLy8gc3RydWN0IGN0X2RhdGFfcyBkeW5fbHRyZWVbSEVBUF9TSVpFXTsgICAvKiBsaXRlcmFsIGFuZCBsZW5ndGggdHJlZSAqL1xuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGR5bl9kdHJlZVsyKkRfQ09ERVMrMV07IC8qIGRpc3RhbmNlIHRyZWUgKi9cbiAgLy8gc3RydWN0IGN0X2RhdGFfcyBibF90cmVlWzIqQkxfQ09ERVMrMV07ICAvKiBIdWZmbWFuIHRyZWUgZm9yIGJpdCBsZW5ndGhzICovXG5cbiAgLy8gVXNlIGZsYXQgYXJyYXkgb2YgRE9VQkxFIHNpemUsIHdpdGggaW50ZXJsZWF2ZWQgZmF0YSxcbiAgLy8gYmVjYXVzZSBKUyBkb2VzIG5vdCBzdXBwb3J0IGVmZmVjdGl2ZVxuICB0aGlzLmR5bl9sdHJlZSAgPSBuZXcgdXRpbHMuQnVmMTYoSEVBUF9TSVpFICogMik7XG4gIHRoaXMuZHluX2R0cmVlICA9IG5ldyB1dGlscy5CdWYxNigoMiAqIERfQ09ERVMgKyAxKSAqIDIpO1xuICB0aGlzLmJsX3RyZWUgICAgPSBuZXcgdXRpbHMuQnVmMTYoKDIgKiBCTF9DT0RFUyArIDEpICogMik7XG4gIHplcm8odGhpcy5keW5fbHRyZWUpO1xuICB6ZXJvKHRoaXMuZHluX2R0cmVlKTtcbiAgemVybyh0aGlzLmJsX3RyZWUpO1xuXG4gIHRoaXMubF9kZXNjICAgPSBudWxsOyAgICAgICAgIC8qIGRlc2MuIGZvciBsaXRlcmFsIHRyZWUgKi9cbiAgdGhpcy5kX2Rlc2MgICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGRpc3RhbmNlIHRyZWUgKi9cbiAgdGhpcy5ibF9kZXNjICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGJpdCBsZW5ndGggdHJlZSAqL1xuXG4gIC8vdXNoIGJsX2NvdW50W01BWF9CSVRTKzFdO1xuICB0aGlzLmJsX2NvdW50ID0gbmV3IHV0aWxzLkJ1ZjE2KE1BWF9CSVRTICsgMSk7XG4gIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZSAqL1xuXG4gIC8vaW50IGhlYXBbMipMX0NPREVTKzFdOyAgICAgIC8qIGhlYXAgdXNlZCB0byBidWlsZCB0aGUgSHVmZm1hbiB0cmVlcyAqL1xuICB0aGlzLmhlYXAgPSBuZXcgdXRpbHMuQnVmMTYoMiAqIExfQ09ERVMgKyAxKTsgIC8qIGhlYXAgdXNlZCB0byBidWlsZCB0aGUgSHVmZm1hbiB0cmVlcyAqL1xuICB6ZXJvKHRoaXMuaGVhcCk7XG5cbiAgdGhpcy5oZWFwX2xlbiA9IDA7ICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBoZWFwICovXG4gIHRoaXMuaGVhcF9tYXggPSAwOyAgICAgICAgICAgICAgIC8qIGVsZW1lbnQgb2YgbGFyZ2VzdCBmcmVxdWVuY3kgKi9cbiAgLyogVGhlIHNvbnMgb2YgaGVhcFtuXSBhcmUgaGVhcFsyKm5dIGFuZCBoZWFwWzIqbisxXS4gaGVhcFswXSBpcyBub3QgdXNlZC5cbiAgICogVGhlIHNhbWUgaGVhcCBhcnJheSBpcyB1c2VkIHRvIGJ1aWxkIGFsbCB0cmVlcy5cbiAgICovXG5cbiAgdGhpcy5kZXB0aCA9IG5ldyB1dGlscy5CdWYxNigyICogTF9DT0RFUyArIDEpOyAvL3VjaCBkZXB0aFsyKkxfQ09ERVMrMV07XG4gIHplcm8odGhpcy5kZXB0aCk7XG4gIC8qIERlcHRoIG9mIGVhY2ggc3VidHJlZSB1c2VkIGFzIHRpZSBicmVha2VyIGZvciB0cmVlcyBvZiBlcXVhbCBmcmVxdWVuY3lcbiAgICovXG5cbiAgdGhpcy5sX2J1ZiA9IDA7ICAgICAgICAgIC8qIGJ1ZmZlciBpbmRleCBmb3IgbGl0ZXJhbHMgb3IgbGVuZ3RocyAqL1xuXG4gIHRoaXMubGl0X2J1ZnNpemUgPSAwO1xuICAvKiBTaXplIG9mIG1hdGNoIGJ1ZmZlciBmb3IgbGl0ZXJhbHMvbGVuZ3Rocy4gIFRoZXJlIGFyZSA0IHJlYXNvbnMgZm9yXG4gICAqIGxpbWl0aW5nIGxpdF9idWZzaXplIHRvIDY0SzpcbiAgICogICAtIGZyZXF1ZW5jaWVzIGNhbiBiZSBrZXB0IGluIDE2IGJpdCBjb3VudGVyc1xuICAgKiAgIC0gaWYgY29tcHJlc3Npb24gaXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmaXJzdCBibG9jaywgYWxsIGlucHV0XG4gICAqICAgICBkYXRhIGlzIHN0aWxsIGluIHRoZSB3aW5kb3cgc28gd2UgY2FuIHN0aWxsIGVtaXQgYSBzdG9yZWQgYmxvY2sgZXZlblxuICAgKiAgICAgd2hlbiBpbnB1dCBjb21lcyBmcm9tIHN0YW5kYXJkIGlucHV0LiAgKFRoaXMgY2FuIGFsc28gYmUgZG9uZSBmb3JcbiAgICogICAgIGFsbCBibG9ja3MgaWYgbGl0X2J1ZnNpemUgaXMgbm90IGdyZWF0ZXIgdGhhbiAzMksuKVxuICAgKiAgIC0gaWYgY29tcHJlc3Npb24gaXMgbm90IHN1Y2Nlc3NmdWwgZm9yIGEgZmlsZSBzbWFsbGVyIHRoYW4gNjRLLCB3ZSBjYW5cbiAgICogICAgIGV2ZW4gZW1pdCBhIHN0b3JlZCBmaWxlIGluc3RlYWQgb2YgYSBzdG9yZWQgYmxvY2sgKHNhdmluZyA1IGJ5dGVzKS5cbiAgICogICAgIFRoaXMgaXMgYXBwbGljYWJsZSBvbmx5IGZvciB6aXAgKG5vdCBnemlwIG9yIHpsaWIpLlxuICAgKiAgIC0gY3JlYXRpbmcgbmV3IEh1ZmZtYW4gdHJlZXMgbGVzcyBmcmVxdWVudGx5IG1heSBub3QgcHJvdmlkZSBmYXN0XG4gICAqICAgICBhZGFwdGF0aW9uIHRvIGNoYW5nZXMgaW4gdGhlIGlucHV0IGRhdGEgc3RhdGlzdGljcy4gKFRha2UgZm9yXG4gICAqICAgICBleGFtcGxlIGEgYmluYXJ5IGZpbGUgd2l0aCBwb29ybHkgY29tcHJlc3NpYmxlIGNvZGUgZm9sbG93ZWQgYnlcbiAgICogICAgIGEgaGlnaGx5IGNvbXByZXNzaWJsZSBzdHJpbmcgdGFibGUuKSBTbWFsbGVyIGJ1ZmZlciBzaXplcyBnaXZlXG4gICAqICAgICBmYXN0IGFkYXB0YXRpb24gYnV0IGhhdmUgb2YgY291cnNlIHRoZSBvdmVyaGVhZCBvZiB0cmFuc21pdHRpbmdcbiAgICogICAgIHRyZWVzIG1vcmUgZnJlcXVlbnRseS5cbiAgICogICAtIEkgY2FuJ3QgY291bnQgYWJvdmUgNFxuICAgKi9cblxuICB0aGlzLmxhc3RfbGl0ID0gMDsgICAgICAvKiBydW5uaW5nIGluZGV4IGluIGxfYnVmICovXG5cbiAgdGhpcy5kX2J1ZiA9IDA7XG4gIC8qIEJ1ZmZlciBpbmRleCBmb3IgZGlzdGFuY2VzLiBUbyBzaW1wbGlmeSB0aGUgY29kZSwgZF9idWYgYW5kIGxfYnVmIGhhdmVcbiAgICogdGhlIHNhbWUgbnVtYmVyIG9mIGVsZW1lbnRzLiBUbyB1c2UgZGlmZmVyZW50IGxlbmd0aHMsIGFuIGV4dHJhIGZsYWdcbiAgICogYXJyYXkgd291bGQgYmUgbmVjZXNzYXJ5LlxuICAgKi9cblxuICB0aGlzLm9wdF9sZW4gPSAwOyAgICAgICAvKiBiaXQgbGVuZ3RoIG9mIGN1cnJlbnQgYmxvY2sgd2l0aCBvcHRpbWFsIHRyZWVzICovXG4gIHRoaXMuc3RhdGljX2xlbiA9IDA7ICAgIC8qIGJpdCBsZW5ndGggb2YgY3VycmVudCBibG9jayB3aXRoIHN0YXRpYyB0cmVlcyAqL1xuICB0aGlzLm1hdGNoZXMgPSAwOyAgICAgICAvKiBudW1iZXIgb2Ygc3RyaW5nIG1hdGNoZXMgaW4gY3VycmVudCBibG9jayAqL1xuICB0aGlzLmluc2VydCA9IDA7ICAgICAgICAvKiBieXRlcyBhdCBlbmQgb2Ygd2luZG93IGxlZnQgdG8gaW5zZXJ0ICovXG5cblxuICB0aGlzLmJpX2J1ZiA9IDA7XG4gIC8qIE91dHB1dCBidWZmZXIuIGJpdHMgYXJlIGluc2VydGVkIHN0YXJ0aW5nIGF0IHRoZSBib3R0b20gKGxlYXN0XG4gICAqIHNpZ25pZmljYW50IGJpdHMpLlxuICAgKi9cbiAgdGhpcy5iaV92YWxpZCA9IDA7XG4gIC8qIE51bWJlciBvZiB2YWxpZCBiaXRzIGluIGJpX2J1Zi4gIEFsbCBiaXRzIGFib3ZlIHRoZSBsYXN0IHZhbGlkIGJpdFxuICAgKiBhcmUgYWx3YXlzIHplcm8uXG4gICAqL1xuXG4gIC8vIFVzZWQgZm9yIHdpbmRvdyBtZW1vcnkgaW5pdC4gV2Ugc2FmZWx5IGlnbm9yZSBpdCBmb3IgSlMuIFRoYXQgbWFrZXNcbiAgLy8gc2Vuc2Ugb25seSBmb3IgcG9pbnRlcnMgYW5kIG1lbW9yeSBjaGVjayB0b29scy5cbiAgLy90aGlzLmhpZ2hfd2F0ZXIgPSAwO1xuICAvKiBIaWdoIHdhdGVyIG1hcmsgb2Zmc2V0IGluIHdpbmRvdyBmb3IgaW5pdGlhbGl6ZWQgYnl0ZXMgLS0gYnl0ZXMgYWJvdmVcbiAgICogdGhpcyBhcmUgc2V0IHRvIHplcm8gaW4gb3JkZXIgdG8gYXZvaWQgbWVtb3J5IGNoZWNrIHdhcm5pbmdzIHdoZW5cbiAgICogbG9uZ2VzdCBtYXRjaCByb3V0aW5lcyBhY2Nlc3MgYnl0ZXMgcGFzdCB0aGUgaW5wdXQuICBUaGlzIGlzIHRoZW5cbiAgICogdXBkYXRlZCB0byB0aGUgbmV3IGhpZ2ggd2F0ZXIgbWFyay5cbiAgICovXG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZVJlc2V0S2VlcChzdHJtKSB7XG4gIHZhciBzO1xuXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cbiAgc3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gMDtcbiAgc3RybS5kYXRhX3R5cGUgPSBaX1VOS05PV047XG5cbiAgcyA9IHN0cm0uc3RhdGU7XG4gIHMucGVuZGluZyA9IDA7XG4gIHMucGVuZGluZ19vdXQgPSAwO1xuXG4gIGlmIChzLndyYXAgPCAwKSB7XG4gICAgcy53cmFwID0gLXMud3JhcDtcbiAgICAvKiB3YXMgbWFkZSBuZWdhdGl2ZSBieSBkZWZsYXRlKC4uLiwgWl9GSU5JU0gpOyAqL1xuICB9XG4gIHMuc3RhdHVzID0gKHMud3JhcCA/IElOSVRfU1RBVEUgOiBCVVNZX1NUQVRFKTtcbiAgc3RybS5hZGxlciA9IChzLndyYXAgPT09IDIpID9cbiAgICAwICAvLyBjcmMzMigwLCBaX05VTEwsIDApXG4gIDpcbiAgICAxOyAvLyBhZGxlcjMyKDAsIFpfTlVMTCwgMClcbiAgcy5sYXN0X2ZsdXNoID0gWl9OT19GTFVTSDtcbiAgdHJlZXMuX3RyX2luaXQocyk7XG4gIHJldHVybiBaX09LO1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVSZXNldChzdHJtKSB7XG4gIHZhciByZXQgPSBkZWZsYXRlUmVzZXRLZWVwKHN0cm0pO1xuICBpZiAocmV0ID09PSBaX09LKSB7XG4gICAgbG1faW5pdChzdHJtLnN0YXRlKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVTZXRIZWFkZXIoc3RybSwgaGVhZCkge1xuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIGlmIChzdHJtLnN0YXRlLndyYXAgIT09IDIpIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIHN0cm0uc3RhdGUuZ3poZWFkID0gaGVhZDtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZUluaXQyKHN0cm0sIGxldmVsLCBtZXRob2QsIHdpbmRvd0JpdHMsIG1lbUxldmVsLCBzdHJhdGVneSkge1xuICBpZiAoIXN0cm0pIHsgLy8gPT09IFpfTlVMTFxuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuICB2YXIgd3JhcCA9IDE7XG5cbiAgaWYgKGxldmVsID09PSBaX0RFRkFVTFRfQ09NUFJFU1NJT04pIHtcbiAgICBsZXZlbCA9IDY7XG4gIH1cblxuICBpZiAod2luZG93Qml0cyA8IDApIHsgLyogc3VwcHJlc3MgemxpYiB3cmFwcGVyICovXG4gICAgd3JhcCA9IDA7XG4gICAgd2luZG93Qml0cyA9IC13aW5kb3dCaXRzO1xuICB9XG5cbiAgZWxzZSBpZiAod2luZG93Qml0cyA+IDE1KSB7XG4gICAgd3JhcCA9IDI7ICAgICAgICAgICAvKiB3cml0ZSBnemlwIHdyYXBwZXIgaW5zdGVhZCAqL1xuICAgIHdpbmRvd0JpdHMgLT0gMTY7XG4gIH1cblxuXG4gIGlmIChtZW1MZXZlbCA8IDEgfHwgbWVtTGV2ZWwgPiBNQVhfTUVNX0xFVkVMIHx8IG1ldGhvZCAhPT0gWl9ERUZMQVRFRCB8fFxuICAgIHdpbmRvd0JpdHMgPCA4IHx8IHdpbmRvd0JpdHMgPiAxNSB8fCBsZXZlbCA8IDAgfHwgbGV2ZWwgPiA5IHx8XG4gICAgc3RyYXRlZ3kgPCAwIHx8IHN0cmF0ZWd5ID4gWl9GSVhFRCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cblxuICBpZiAod2luZG93Qml0cyA9PT0gOCkge1xuICAgIHdpbmRvd0JpdHMgPSA5O1xuICB9XG4gIC8qIHVudGlsIDI1Ni1ieXRlIHdpbmRvdyBidWcgZml4ZWQgKi9cblxuICB2YXIgcyA9IG5ldyBEZWZsYXRlU3RhdGUoKTtcblxuICBzdHJtLnN0YXRlID0gcztcbiAgcy5zdHJtID0gc3RybTtcblxuICBzLndyYXAgPSB3cmFwO1xuICBzLmd6aGVhZCA9IG51bGw7XG4gIHMud19iaXRzID0gd2luZG93Qml0cztcbiAgcy53X3NpemUgPSAxIDw8IHMud19iaXRzO1xuICBzLndfbWFzayA9IHMud19zaXplIC0gMTtcblxuICBzLmhhc2hfYml0cyA9IG1lbUxldmVsICsgNztcbiAgcy5oYXNoX3NpemUgPSAxIDw8IHMuaGFzaF9iaXRzO1xuICBzLmhhc2hfbWFzayA9IHMuaGFzaF9zaXplIC0gMTtcbiAgcy5oYXNoX3NoaWZ0ID0gfn4oKHMuaGFzaF9iaXRzICsgTUlOX01BVENIIC0gMSkgLyBNSU5fTUFUQ0gpO1xuXG4gIHMud2luZG93ID0gbmV3IHV0aWxzLkJ1Zjgocy53X3NpemUgKiAyKTtcbiAgcy5oZWFkID0gbmV3IHV0aWxzLkJ1ZjE2KHMuaGFzaF9zaXplKTtcbiAgcy5wcmV2ID0gbmV3IHV0aWxzLkJ1ZjE2KHMud19zaXplKTtcblxuICAvLyBEb24ndCBuZWVkIG1lbSBpbml0IG1hZ2ljIGZvciBKUy5cbiAgLy9zLmhpZ2hfd2F0ZXIgPSAwOyAgLyogbm90aGluZyB3cml0dGVuIHRvIHMtPndpbmRvdyB5ZXQgKi9cblxuICBzLmxpdF9idWZzaXplID0gMSA8PCAobWVtTGV2ZWwgKyA2KTsgLyogMTZLIGVsZW1lbnRzIGJ5IGRlZmF1bHQgKi9cblxuICBzLnBlbmRpbmdfYnVmX3NpemUgPSBzLmxpdF9idWZzaXplICogNDtcblxuICAvL292ZXJsYXkgPSAodXNoZiAqKSBaQUxMT0Moc3RybSwgcy0+bGl0X2J1ZnNpemUsIHNpemVvZih1c2gpKzIpO1xuICAvL3MtPnBlbmRpbmdfYnVmID0gKHVjaGYgKikgb3ZlcmxheTtcbiAgcy5wZW5kaW5nX2J1ZiA9IG5ldyB1dGlscy5CdWY4KHMucGVuZGluZ19idWZfc2l6ZSk7XG5cbiAgLy8gSXQgaXMgb2Zmc2V0IGZyb20gYHMucGVuZGluZ19idWZgIChzaXplIGlzIGBzLmxpdF9idWZzaXplICogMmApXG4gIC8vcy0+ZF9idWYgPSBvdmVybGF5ICsgcy0+bGl0X2J1ZnNpemUvc2l6ZW9mKHVzaCk7XG4gIHMuZF9idWYgPSAxICogcy5saXRfYnVmc2l6ZTtcblxuICAvL3MtPmxfYnVmID0gcy0+cGVuZGluZ19idWYgKyAoMStzaXplb2YodXNoKSkqcy0+bGl0X2J1ZnNpemU7XG4gIHMubF9idWYgPSAoMSArIDIpICogcy5saXRfYnVmc2l6ZTtcblxuICBzLmxldmVsID0gbGV2ZWw7XG4gIHMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgcy5tZXRob2QgPSBtZXRob2Q7XG5cbiAgcmV0dXJuIGRlZmxhdGVSZXNldChzdHJtKTtcbn1cblxuZnVuY3Rpb24gZGVmbGF0ZUluaXQoc3RybSwgbGV2ZWwpIHtcbiAgcmV0dXJuIGRlZmxhdGVJbml0MihzdHJtLCBsZXZlbCwgWl9ERUZMQVRFRCwgTUFYX1dCSVRTLCBERUZfTUVNX0xFVkVMLCBaX0RFRkFVTFRfU1RSQVRFR1kpO1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGUoc3RybSwgZmx1c2gpIHtcbiAgdmFyIG9sZF9mbHVzaCwgcztcbiAgdmFyIGJlZywgdmFsOyAvLyBmb3IgZ3ppcCBoZWFkZXIgd3JpdGUgb25seVxuXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSB8fFxuICAgIGZsdXNoID4gWl9CTE9DSyB8fCBmbHVzaCA8IDApIHtcbiAgICByZXR1cm4gc3RybSA/IGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUikgOiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHMgPSBzdHJtLnN0YXRlO1xuXG4gIGlmICghc3RybS5vdXRwdXQgfHxcbiAgICAgICghc3RybS5pbnB1dCAmJiBzdHJtLmF2YWlsX2luICE9PSAwKSB8fFxuICAgICAgKHMuc3RhdHVzID09PSBGSU5JU0hfU1RBVEUgJiYgZmx1c2ggIT09IFpfRklOSVNIKSkge1xuICAgIHJldHVybiBlcnIoc3RybSwgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSA/IFpfQlVGX0VSUk9SIDogWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cbiAgcy5zdHJtID0gc3RybTsgLyoganVzdCBpbiBjYXNlICovXG4gIG9sZF9mbHVzaCA9IHMubGFzdF9mbHVzaDtcbiAgcy5sYXN0X2ZsdXNoID0gZmx1c2g7XG5cbiAgLyogV3JpdGUgdGhlIGhlYWRlciAqL1xuICBpZiAocy5zdGF0dXMgPT09IElOSVRfU1RBVEUpIHtcblxuICAgIGlmIChzLndyYXAgPT09IDIpIHsgLy8gR1pJUCBoZWFkZXJcbiAgICAgIHN0cm0uYWRsZXIgPSAwOyAgLy9jcmMzMigwTCwgWl9OVUxMLCAwKTtcbiAgICAgIHB1dF9ieXRlKHMsIDMxKTtcbiAgICAgIHB1dF9ieXRlKHMsIDEzOSk7XG4gICAgICBwdXRfYnl0ZShzLCA4KTtcbiAgICAgIGlmICghcy5nemhlYWQpIHsgLy8gcy0+Z3poZWFkID09IFpfTlVMTFxuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIHMubGV2ZWwgPT09IDkgPyAyIDpcbiAgICAgICAgICAgICAgICAgICAgKHMuc3RyYXRlZ3kgPj0gWl9IVUZGTUFOX09OTFkgfHwgcy5sZXZlbCA8IDIgP1xuICAgICAgICAgICAgICAgICAgICAgNCA6IDApKTtcbiAgICAgICAgcHV0X2J5dGUocywgT1NfQ09ERSk7XG4gICAgICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGV4dCA/IDEgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgIChzLmd6aGVhZC5oY3JjID8gMiA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5leHRyYSA/IDAgOiA0KSArXG4gICAgICAgICAgICAgICAgICAgICghcy5nemhlYWQubmFtZSA/IDAgOiA4KSArXG4gICAgICAgICAgICAgICAgICAgICghcy5nemhlYWQuY29tbWVudCA/IDAgOiAxNilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC50aW1lICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDgpICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDE2KSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiAyNCkgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC5vcyAmIDB4ZmYpO1xuICAgICAgICBpZiAocy5nemhlYWQuZXh0cmEgJiYgcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmEubGVuZ3RoICYgMHhmZik7XG4gICAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLmV4dHJhLmxlbmd0aCA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmd6aGVhZC5oY3JjKSB7XG4gICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBFWFRSQV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBERUZMQVRFIGhlYWRlclxuICAgIHtcbiAgICAgIHZhciBoZWFkZXIgPSAoWl9ERUZMQVRFRCArICgocy53X2JpdHMgLSA4KSA8PCA0KSkgPDwgODtcbiAgICAgIHZhciBsZXZlbF9mbGFncyA9IC0xO1xuXG4gICAgICBpZiAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPCA2KSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocy5sZXZlbCA9PT0gNikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuICAgICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHsgaGVhZGVyIHw9IFBSRVNFVF9ESUNUOyB9XG4gICAgICBoZWFkZXIgKz0gMzEgLSAoaGVhZGVyICUgMzEpO1xuXG4gICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICBwdXRTaG9ydE1TQihzLCBoZWFkZXIpO1xuXG4gICAgICAvKiBTYXZlIHRoZSBhZGxlcjMyIG9mIHRoZSBwcmVzZXQgZGljdGlvbmFyeTogKi9cbiAgICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7XG4gICAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICAgICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gICAgICB9XG4gICAgICBzdHJtLmFkbGVyID0gMTsgLy8gYWRsZXIzMigwTCwgWl9OVUxMLCAwKTtcbiAgICB9XG4gIH1cblxuLy8jaWZkZWYgR1pJUFxuICBpZiAocy5zdGF0dXMgPT09IEVYVFJBX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmV4dHJhLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cblxuICAgICAgd2hpbGUgKHMuZ3ppbmRleCA8IChzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmZmYpKSB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmFbcy5nemluZGV4XSAmIDB4ZmYpO1xuICAgICAgICBzLmd6aW5kZXgrKztcbiAgICAgIH1cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHMuZ3ppbmRleCA9PT0gcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IE5BTUVfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gTkFNRV9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5uYW1lLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIC8vaW50IHZhbDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgYmVnID0gcy5wZW5kaW5nO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgICAgdmFsID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBzcGVjaWZpYzogbGl0dGxlIG1hZ2ljIHRvIGFkZCB6ZXJvIHRlcm1pbmF0b3IgdG8gZW5kIG9mIHN0cmluZ1xuICAgICAgICBpZiAocy5nemluZGV4IDwgcy5nemhlYWQubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICB2YWwgPSBzLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQocy5nemluZGV4KyspICYgMHhmZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHZhbCk7XG4gICAgICB9IHdoaWxlICh2YWwgIT09IDApO1xuXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IDApIHtcbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gQ09NTUVOVF9TVEFURTtcbiAgICB9XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBDT01NRU5UX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmNvbW1lbnQvKiAhPSBaX05VTEwqLykge1xuICAgICAgYmVnID0gcy5wZW5kaW5nOyAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgLy9pbnQgdmFsO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICB2YWwgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEpTIHNwZWNpZmljOiBsaXR0bGUgbWFnaWMgdG8gYWRkIHplcm8gdGVybWluYXRvciB0byBlbmQgb2Ygc3RyaW5nXG4gICAgICAgIGlmIChzLmd6aW5kZXggPCBzLmd6aGVhZC5jb21tZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHZhbCA9IHMuZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChzLmd6aW5kZXgrKykgJiAweGZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgdmFsKTtcbiAgICAgIH0gd2hpbGUgKHZhbCAhPT0gMCk7XG5cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgICBzLnN0YXR1cyA9IEhDUkNfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBIQ1JDX1NUQVRFO1xuICAgIH1cbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IEhDUkNfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgaWYgKHMucGVuZGluZyArIDIgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChzLnBlbmRpbmcgKyAyIDw9IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDgpICYgMHhmZik7XG4gICAgICAgIHN0cm0uYWRsZXIgPSAwOyAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgIH1cbiAgfVxuLy8jZW5kaWZcblxuICAvKiBGbHVzaCBhcyBtdWNoIHBlbmRpbmcgb3V0cHV0IGFzIHBvc3NpYmxlICovXG4gIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgLyogU2luY2UgYXZhaWxfb3V0IGlzIDAsIGRlZmxhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2l0aFxuICAgICAgICogbW9yZSBvdXRwdXQgc3BhY2UsIGJ1dCBwb3NzaWJseSB3aXRoIGJvdGggcGVuZGluZyBhbmRcbiAgICAgICAqIGF2YWlsX2luIGVxdWFsIHRvIHplcm8uIFRoZXJlIHdvbid0IGJlIGFueXRoaW5nIHRvIGRvLFxuICAgICAgICogYnV0IHRoaXMgaXMgbm90IGFuIGVycm9yIHNpdHVhdGlvbiBzbyBtYWtlIHN1cmUgd2VcbiAgICAgICAqIHJldHVybiBPSyBpbnN0ZWFkIG9mIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwgb2YgZGVmbGF0ZTpcbiAgICAgICAqL1xuICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICByZXR1cm4gWl9PSztcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGRvIGFuZCBhdm9pZCBkdXBsaWNhdGUgY29uc2VjdXRpdmVcbiAgICAgKiBmbHVzaGVzLiBGb3IgcmVwZWF0ZWQgYW5kIHVzZWxlc3MgY2FsbHMgd2l0aCBaX0ZJTklTSCwgd2Uga2VlcFxuICAgICAqIHJldHVybmluZyBaX1NUUkVBTV9FTkQgaW5zdGVhZCBvZiBaX0JVRl9FUlJPUi5cbiAgICAgKi9cbiAgfSBlbHNlIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIHJhbmsoZmx1c2gpIDw9IHJhbmsob2xkX2ZsdXNoKSAmJlxuICAgIGZsdXNoICE9PSBaX0ZJTklTSCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogVXNlciBtdXN0IG5vdCBwcm92aWRlIG1vcmUgaW5wdXQgYWZ0ZXIgdGhlIGZpcnN0IEZJTklTSDogKi9cbiAgaWYgKHMuc3RhdHVzID09PSBGSU5JU0hfU1RBVEUgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogU3RhcnQgYSBuZXcgYmxvY2sgb3IgY29udGludWUgdGhlIGN1cnJlbnQgb25lLlxuICAgKi9cbiAgaWYgKHN0cm0uYXZhaWxfaW4gIT09IDAgfHwgcy5sb29rYWhlYWQgIT09IDAgfHxcbiAgICAoZmx1c2ggIT09IFpfTk9fRkxVU0ggJiYgcy5zdGF0dXMgIT09IEZJTklTSF9TVEFURSkpIHtcbiAgICB2YXIgYnN0YXRlID0gKHMuc3RyYXRlZ3kgPT09IFpfSFVGRk1BTl9PTkxZKSA/IGRlZmxhdGVfaHVmZihzLCBmbHVzaCkgOlxuICAgICAgKHMuc3RyYXRlZ3kgPT09IFpfUkxFID8gZGVmbGF0ZV9ybGUocywgZmx1c2gpIDpcbiAgICAgICAgY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5mdW5jKHMsIGZsdXNoKSk7XG5cbiAgICBpZiAoYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCB8fCBic3RhdGUgPT09IEJTX0ZJTklTSF9ET05FKSB7XG4gICAgICBzLnN0YXR1cyA9IEZJTklTSF9TVEFURTtcbiAgICB9XG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfTkVFRF9NT1JFIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX1NUQVJURUQpIHtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgLyogYXZvaWQgQlVGX0VSUk9SIG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICB9XG4gICAgICByZXR1cm4gWl9PSztcbiAgICAgIC8qIElmIGZsdXNoICE9IFpfTk9fRkxVU0ggJiYgYXZhaWxfb3V0ID09IDAsIHRoZSBuZXh0IGNhbGxcbiAgICAgICAqIG9mIGRlZmxhdGUgc2hvdWxkIHVzZSB0aGUgc2FtZSBmbHVzaCBwYXJhbWV0ZXIgdG8gbWFrZSBzdXJlXG4gICAgICAgKiB0aGF0IHRoZSBmbHVzaCBpcyBjb21wbGV0ZS4gU28gd2UgZG9uJ3QgaGF2ZSB0byBvdXRwdXQgYW5cbiAgICAgICAqIGVtcHR5IGJsb2NrIGhlcmUsIHRoaXMgd2lsbCBiZSBkb25lIGF0IG5leHQgY2FsbC4gVGhpcyBhbHNvXG4gICAgICAgKiBlbnN1cmVzIHRoYXQgZm9yIGEgdmVyeSBzbWFsbCBvdXRwdXQgYnVmZmVyLCB3ZSBlbWl0IGF0IG1vc3RcbiAgICAgICAqIG9uZSBlbXB0eSBibG9jay5cbiAgICAgICAqL1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19CTE9DS19ET05FKSB7XG4gICAgICBpZiAoZmx1c2ggPT09IFpfUEFSVElBTF9GTFVTSCkge1xuICAgICAgICB0cmVlcy5fdHJfYWxpZ24ocyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmbHVzaCAhPT0gWl9CTE9DSykgeyAvKiBGVUxMX0ZMVVNIIG9yIFNZTkNfRkxVU0ggKi9cblxuICAgICAgICB0cmVlcy5fdHJfc3RvcmVkX2Jsb2NrKHMsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgLyogRm9yIGEgZnVsbCBmbHVzaCwgdGhpcyBlbXB0eSBibG9jayB3aWxsIGJlIHJlY29nbml6ZWRcbiAgICAgICAgICogYXMgYSBzcGVjaWFsIG1hcmtlciBieSBpbmZsYXRlX3N5bmMoKS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9GVUxMX0ZMVVNIKSB7XG4gICAgICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovICAgICAgICAgICAgIC8qIGZvcmdldCBoaXN0b3J5ICovXG4gICAgICAgICAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gICAgICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5pbnNlcnQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTsgLyogYXZvaWQgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICAgIHJldHVybiBaX09LO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL0Fzc2VydChzdHJtLT5hdmFpbF9vdXQgPiAwLCBcImJ1ZzJcIik7XG4gIC8vaWYgKHN0cm0uYXZhaWxfb3V0IDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiYnVnMlwiKTt9XG5cbiAgaWYgKGZsdXNoICE9PSBaX0ZJTklTSCkgeyByZXR1cm4gWl9PSzsgfVxuICBpZiAocy53cmFwIDw9IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VORDsgfVxuXG4gIC8qIFdyaXRlIHRoZSB0cmFpbGVyICovXG4gIGlmIChzLndyYXAgPT09IDIpIHtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAyNCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLnRvdGFsX2luICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAyNCkgJiAweGZmKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyID4+PiAxNik7XG4gICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gIH1cblxuICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAvKiBJZiBhdmFpbF9vdXQgaXMgemVybywgdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2FsbCBkZWZsYXRlIGFnYWluXG4gICAqIHRvIGZsdXNoIHRoZSByZXN0LlxuICAgKi9cbiAgaWYgKHMud3JhcCA+IDApIHsgcy53cmFwID0gLXMud3JhcDsgfVxuICAvKiB3cml0ZSB0aGUgdHJhaWxlciBvbmx5IG9uY2UhICovXG4gIHJldHVybiBzLnBlbmRpbmcgIT09IDAgPyBaX09LIDogWl9TVFJFQU1fRU5EO1xufVxuXG5mdW5jdGlvbiBkZWZsYXRlRW5kKHN0cm0pIHtcbiAgdmFyIHN0YXR1cztcblxuICBpZiAoIXN0cm0vKj09IFpfTlVMTCovIHx8ICFzdHJtLnN0YXRlLyo9PSBaX05VTEwqLykge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHN0YXR1cyA9IHN0cm0uc3RhdGUuc3RhdHVzO1xuICBpZiAoc3RhdHVzICE9PSBJTklUX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBFWFRSQV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gTkFNRV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQ09NTUVOVF9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gSENSQ19TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQlVTWV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gRklOSVNIX1NUQVRFXG4gICkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cbiAgc3RybS5zdGF0ZSA9IG51bGw7XG5cbiAgcmV0dXJuIHN0YXR1cyA9PT0gQlVTWV9TVEFURSA/IGVycihzdHJtLCBaX0RBVEFfRVJST1IpIDogWl9PSztcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplcyB0aGUgY29tcHJlc3Npb24gZGljdGlvbmFyeSBmcm9tIHRoZSBnaXZlbiBieXRlXG4gKiBzZXF1ZW5jZSB3aXRob3V0IHByb2R1Y2luZyBhbnkgY29tcHJlc3NlZCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVTZXREaWN0aW9uYXJ5KHN0cm0sIGRpY3Rpb25hcnkpIHtcbiAgdmFyIGRpY3RMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcblxuICB2YXIgcztcbiAgdmFyIHN0ciwgbjtcbiAgdmFyIHdyYXA7XG4gIHZhciBhdmFpbDtcbiAgdmFyIG5leHQ7XG4gIHZhciBpbnB1dDtcbiAgdmFyIHRtcERpY3Q7XG5cbiAgaWYgKCFzdHJtLyo9PSBaX05VTEwqLyB8fCAhc3RybS5zdGF0ZS8qPT0gWl9OVUxMKi8pIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzID0gc3RybS5zdGF0ZTtcbiAgd3JhcCA9IHMud3JhcDtcblxuICBpZiAod3JhcCA9PT0gMiB8fCAod3JhcCA9PT0gMSAmJiBzLnN0YXR1cyAhPT0gSU5JVF9TVEFURSkgfHwgcy5sb29rYWhlYWQpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICAvKiB3aGVuIHVzaW5nIHpsaWIgd3JhcHBlcnMsIGNvbXB1dGUgQWRsZXItMzIgZm9yIHByb3ZpZGVkIGRpY3Rpb25hcnkgKi9cbiAgaWYgKHdyYXAgPT09IDEpIHtcbiAgICAvKiBhZGxlcjMyKHN0cm0tPmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTsgKi9cbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMihzdHJtLmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHMud3JhcCA9IDA7ICAgLyogYXZvaWQgY29tcHV0aW5nIEFkbGVyLTMyIGluIHJlYWRfYnVmICovXG5cbiAgLyogaWYgZGljdGlvbmFyeSB3b3VsZCBmaWxsIHdpbmRvdywganVzdCByZXBsYWNlIHRoZSBoaXN0b3J5ICovXG4gIGlmIChkaWN0TGVuZ3RoID49IHMud19zaXplKSB7XG4gICAgaWYgKHdyYXAgPT09IDApIHsgICAgICAgICAgICAvKiBhbHJlYWR5IGVtcHR5IG90aGVyd2lzZSAqL1xuICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovXG4gICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG4gICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgcy5pbnNlcnQgPSAwO1xuICAgIH1cbiAgICAvKiB1c2UgdGhlIHRhaWwgKi9cbiAgICAvLyBkaWN0aW9uYXJ5ID0gZGljdGlvbmFyeS5zbGljZShkaWN0TGVuZ3RoIC0gcy53X3NpemUpO1xuICAgIHRtcERpY3QgPSBuZXcgdXRpbHMuQnVmOChzLndfc2l6ZSk7XG4gICAgdXRpbHMuYXJyYXlTZXQodG1wRGljdCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCAtIHMud19zaXplLCBzLndfc2l6ZSwgMCk7XG4gICAgZGljdGlvbmFyeSA9IHRtcERpY3Q7XG4gICAgZGljdExlbmd0aCA9IHMud19zaXplO1xuICB9XG4gIC8qIGluc2VydCBkaWN0aW9uYXJ5IGludG8gd2luZG93IGFuZCBoYXNoICovXG4gIGF2YWlsID0gc3RybS5hdmFpbF9pbjtcbiAgbmV4dCA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBzdHJtLmF2YWlsX2luID0gZGljdExlbmd0aDtcbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5pbnB1dCA9IGRpY3Rpb25hcnk7XG4gIGZpbGxfd2luZG93KHMpO1xuICB3aGlsZSAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgc3RyID0gcy5zdHJzdGFydDtcbiAgICBuID0gcy5sb29rYWhlYWQgLSAoTUlOX01BVENIIC0gMSk7XG4gICAgZG8ge1xuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyBNSU5fTUFUQ0gtMV0pOyAqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbc3RyICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG5cbiAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG5cbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgIHN0cisrO1xuICAgIH0gd2hpbGUgKC0tbik7XG4gICAgcy5zdHJzdGFydCA9IHN0cjtcbiAgICBzLmxvb2thaGVhZCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgZmlsbF93aW5kb3cocyk7XG4gIH1cbiAgcy5zdHJzdGFydCArPSBzLmxvb2thaGVhZDtcbiAgcy5ibG9ja19zdGFydCA9IHMuc3Ryc3RhcnQ7XG4gIHMuaW5zZXJ0ID0gcy5sb29rYWhlYWQ7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICBzdHJtLmlucHV0ID0gaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBhdmFpbDtcbiAgcy53cmFwID0gd3JhcDtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZXhwb3J0cy5kZWZsYXRlSW5pdCA9IGRlZmxhdGVJbml0O1xuZXhwb3J0cy5kZWZsYXRlSW5pdDIgPSBkZWZsYXRlSW5pdDI7XG5leHBvcnRzLmRlZmxhdGVSZXNldCA9IGRlZmxhdGVSZXNldDtcbmV4cG9ydHMuZGVmbGF0ZVJlc2V0S2VlcCA9IGRlZmxhdGVSZXNldEtlZXA7XG5leHBvcnRzLmRlZmxhdGVTZXRIZWFkZXIgPSBkZWZsYXRlU2V0SGVhZGVyO1xuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZUVuZCA9IGRlZmxhdGVFbmQ7XG5leHBvcnRzLmRlZmxhdGVTZXREaWN0aW9uYXJ5ID0gZGVmbGF0ZVNldERpY3Rpb25hcnk7XG5leHBvcnRzLmRlZmxhdGVJbmZvID0gJ3Bha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbmV4cG9ydHMuZGVmbGF0ZUJvdW5kID0gZGVmbGF0ZUJvdW5kO1xuZXhwb3J0cy5kZWZsYXRlQ29weSA9IGRlZmxhdGVDb3B5O1xuZXhwb3J0cy5kZWZsYXRlUGFyYW1zID0gZGVmbGF0ZVBhcmFtcztcbmV4cG9ydHMuZGVmbGF0ZVBlbmRpbmcgPSBkZWZsYXRlUGVuZGluZztcbmV4cG9ydHMuZGVmbGF0ZVByaW1lID0gZGVmbGF0ZVByaW1lO1xuZXhwb3J0cy5kZWZsYXRlVHVuZSA9IGRlZmxhdGVUdW5lO1xuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgMjogICAgICAnbmVlZCBkaWN0aW9uYXJ5JywgICAgIC8qIFpfTkVFRF9ESUNUICAgICAgIDIgICovXG4gIDE6ICAgICAgJ3N0cmVhbSBlbmQnLCAgICAgICAgICAvKiBaX1NUUkVBTV9FTkQgICAgICAxICAqL1xuICAwOiAgICAgICcnLCAgICAgICAgICAgICAgICAgICAgLyogWl9PSyAgICAgICAgICAgICAgMCAgKi9cbiAgJy0xJzogICAnZmlsZSBlcnJvcicsICAgICAgICAgIC8qIFpfRVJSTk8gICAgICAgICAoLTEpICovXG4gICctMic6ICAgJ3N0cmVhbSBlcnJvcicsICAgICAgICAvKiBaX1NUUkVBTV9FUlJPUiAgKC0yKSAqL1xuICAnLTMnOiAgICdkYXRhIGVycm9yJywgICAgICAgICAgLyogWl9EQVRBX0VSUk9SICAgICgtMykgKi9cbiAgJy00JzogICAnaW5zdWZmaWNpZW50IG1lbW9yeScsIC8qIFpfTUVNX0VSUk9SICAgICAoLTQpICovXG4gICctNSc6ICAgJ2J1ZmZlciBlcnJvcicsICAgICAgICAvKiBaX0JVRl9FUlJPUiAgICAgKC01KSAqL1xuICAnLTYnOiAgICdpbmNvbXBhdGlibGUgdmVyc2lvbicgLyogWl9WRVJTSU9OX0VSUk9SICgtNikgKi9cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8vdmFyIFpfRklMVEVSRUQgICAgICAgICAgPSAxO1xuLy92YXIgWl9IVUZGTUFOX09OTFkgICAgICA9IDI7XG4vL3ZhciBaX1JMRSAgICAgICAgICAgICAgID0gMztcbnZhciBaX0ZJWEVEICAgICAgICAgICAgICAgPSA0O1xuLy92YXIgWl9ERUZBVUxUX1NUUkFURUdZICA9IDA7XG5cbi8qIFBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgZGF0YV90eXBlIGZpZWxkICh0aG91Z2ggc2VlIGluZmxhdGUoKSkgKi9cbnZhciBaX0JJTkFSWSAgICAgICAgICAgICAgPSAwO1xudmFyIFpfVEVYVCAgICAgICAgICAgICAgICA9IDE7XG4vL3ZhciBaX0FTQ0lJICAgICAgICAgICAgID0gMTsgLy8gPSBaX1RFWFRcbnZhciBaX1VOS05PV04gICAgICAgICAgICAgPSAyO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmZ1bmN0aW9uIHplcm8oYnVmKSB7IHZhciBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH0gfVxuXG4vLyBGcm9tIHp1dGlsLmhcblxudmFyIFNUT1JFRF9CTE9DSyA9IDA7XG52YXIgU1RBVElDX1RSRUVTID0gMTtcbnZhciBEWU5fVFJFRVMgICAgPSAyO1xuLyogVGhlIHRocmVlIGtpbmRzIG9mIGJsb2NrIHR5cGUgKi9cblxudmFyIE1JTl9NQVRDSCAgICA9IDM7XG52YXIgTUFYX01BVENIICAgID0gMjU4O1xuLyogVGhlIG1pbmltdW0gYW5kIG1heGltdW0gbWF0Y2ggbGVuZ3RocyAqL1xuXG4vLyBGcm9tIGRlZmxhdGUuaFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbnRlcm5hbCBjb21wcmVzc2lvbiBzdGF0ZS5cbiAqL1xuXG52YXIgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG5cbnZhciBMSVRFUkFMUyAgICAgID0gMjU2O1xuLyogbnVtYmVyIG9mIGxpdGVyYWwgYnl0ZXMgMC4uMjU1ICovXG5cbnZhciBMX0NPREVTICAgICAgID0gTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTO1xuLyogbnVtYmVyIG9mIExpdGVyYWwgb3IgTGVuZ3RoIGNvZGVzLCBpbmNsdWRpbmcgdGhlIEVORF9CTE9DSyBjb2RlICovXG5cbnZhciBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cblxudmFyIEJMX0NPREVTICAgICAgPSAxOTtcbi8qIG51bWJlciBvZiBjb2RlcyB1c2VkIHRvIHRyYW5zZmVyIHRoZSBiaXQgbGVuZ3RocyAqL1xuXG52YXIgSEVBUF9TSVpFICAgICA9IDIgKiBMX0NPREVTICsgMTtcbi8qIG1heGltdW0gaGVhcCBzaXplICovXG5cbnZhciBNQVhfQklUUyAgICAgID0gMTU7XG4vKiBBbGwgY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CSVRTIGJpdHMgKi9cblxudmFyIEJ1Zl9zaXplICAgICAgPSAxNjtcbi8qIHNpemUgb2YgYml0IGJ1ZmZlciBpbiBiaV9idWYgKi9cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0YW50c1xuICovXG5cbnZhciBNQVhfQkxfQklUUyA9IDc7XG4vKiBCaXQgbGVuZ3RoIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQkxfQklUUyBiaXRzICovXG5cbnZhciBFTkRfQkxPQ0sgICA9IDI1Njtcbi8qIGVuZCBvZiBibG9jayBsaXRlcmFsIGNvZGUgKi9cblxudmFyIFJFUF8zXzYgICAgID0gMTY7XG4vKiByZXBlYXQgcHJldmlvdXMgYml0IGxlbmd0aCAzLTYgdGltZXMgKDIgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbnZhciBSRVBaXzNfMTAgICA9IDE3O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMy0xMCB0aW1lcyAgKDMgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbnZhciBSRVBaXzExXzEzOCA9IDE4O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMTEtMTM4IHRpbWVzICAoNyBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtc3BhY2luZyxhcnJheS1icmFja2V0LXNwYWNpbmcgKi9cbnZhciBleHRyYV9sYml0cyA9ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBsZW5ndGggY29kZSAqL1xuICBbMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXTtcblxudmFyIGV4dHJhX2RiaXRzID0gICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGRpc3RhbmNlIGNvZGUgKi9cbiAgWzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdO1xuXG52YXIgZXh0cmFfYmxiaXRzID0gIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggYml0IGxlbmd0aCBjb2RlICovXG4gIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XTtcblxudmFyIGJsX29yZGVyID1cbiAgWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO1xuLyogZXNsaW50LWVuYWJsZSBjb21tYS1zcGFjaW5nLGFycmF5LWJyYWNrZXQtc3BhY2luZyAqL1xuXG4vKiBUaGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcyBhcmUgc2VudCBpbiBvcmRlciBvZiBkZWNyZWFzaW5nXG4gKiBwcm9iYWJpbGl0eSwgdG8gYXZvaWQgdHJhbnNtaXR0aW5nIHRoZSBsZW5ndGhzIGZvciB1bnVzZWQgYml0IGxlbmd0aCBjb2Rlcy5cbiAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIExvY2FsIGRhdGEuIFRoZXNlIGFyZSBpbml0aWFsaXplZCBvbmx5IG9uY2UuXG4gKi9cblxuLy8gV2UgcHJlLWZpbGwgYXJyYXlzIHdpdGggMCB0byBhdm9pZCB1bmluaXRpYWxpemVkIGdhcHNcblxudmFyIERJU1RfQ09ERV9MRU4gPSA1MTI7IC8qIHNlZSBkZWZpbml0aW9uIG9mIGFycmF5IGRpc3RfY29kZSBiZWxvdyAqL1xuXG4vLyAhISEhIFVzZSBmbGF0IGFycmF5IGluc3RlYWQgb2Ygc3RydWN0dXJlLCBGcmVxID0gaSoyLCBMZW4gPSBpKjIrMVxudmFyIHN0YXRpY19sdHJlZSAgPSBuZXcgQXJyYXkoKExfQ09ERVMgKyAyKSAqIDIpO1xuemVybyhzdGF0aWNfbHRyZWUpO1xuLyogVGhlIHN0YXRpYyBsaXRlcmFsIHRyZWUuIFNpbmNlIHRoZSBiaXQgbGVuZ3RocyBhcmUgaW1wb3NlZCwgdGhlcmUgaXMgbm9cbiAqIG5lZWQgZm9yIHRoZSBMX0NPREVTIGV4dHJhIGNvZGVzIHVzZWQgZHVyaW5nIGhlYXAgY29uc3RydWN0aW9uLiBIb3dldmVyXG4gKiBUaGUgY29kZXMgMjg2IGFuZCAyODcgYXJlIG5lZWRlZCB0byBidWlsZCBhIGNhbm9uaWNhbCB0cmVlIChzZWUgX3RyX2luaXRcbiAqIGJlbG93KS5cbiAqL1xuXG52YXIgc3RhdGljX2R0cmVlICA9IG5ldyBBcnJheShEX0NPREVTICogMik7XG56ZXJvKHN0YXRpY19kdHJlZSk7XG4vKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUuIChBY3R1YWxseSBhIHRyaXZpYWwgdHJlZSBzaW5jZSBhbGwgY29kZXMgdXNlXG4gKiA1IGJpdHMuKVxuICovXG5cbnZhciBfZGlzdF9jb2RlICAgID0gbmV3IEFycmF5KERJU1RfQ09ERV9MRU4pO1xuemVybyhfZGlzdF9jb2RlKTtcbi8qIERpc3RhbmNlIGNvZGVzLiBUaGUgZmlyc3QgMjU2IHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBkaXN0YW5jZXNcbiAqIDMgLi4gMjU4LCB0aGUgbGFzdCAyNTYgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIHRvcCA4IGJpdHMgb2ZcbiAqIHRoZSAxNSBiaXQgZGlzdGFuY2VzLlxuICovXG5cbnZhciBfbGVuZ3RoX2NvZGUgID0gbmV3IEFycmF5KE1BWF9NQVRDSCAtIE1JTl9NQVRDSCArIDEpO1xuemVybyhfbGVuZ3RoX2NvZGUpO1xuLyogbGVuZ3RoIGNvZGUgZm9yIGVhY2ggbm9ybWFsaXplZCBtYXRjaCBsZW5ndGggKDAgPT0gTUlOX01BVENIKSAqL1xuXG52YXIgYmFzZV9sZW5ndGggICA9IG5ldyBBcnJheShMRU5HVEhfQ09ERVMpO1xuemVybyhiYXNlX2xlbmd0aCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGxlbmd0aCBmb3IgZWFjaCBjb2RlICgwID0gTUlOX01BVENIKSAqL1xuXG52YXIgYmFzZV9kaXN0ICAgICA9IG5ldyBBcnJheShEX0NPREVTKTtcbnplcm8oYmFzZV9kaXN0KTtcbi8qIEZpcnN0IG5vcm1hbGl6ZWQgZGlzdGFuY2UgZm9yIGVhY2ggY29kZSAoMCA9IGRpc3RhbmNlIG9mIDEpICovXG5cblxuZnVuY3Rpb24gU3RhdGljVHJlZURlc2Moc3RhdGljX3RyZWUsIGV4dHJhX2JpdHMsIGV4dHJhX2Jhc2UsIGVsZW1zLCBtYXhfbGVuZ3RoKSB7XG5cbiAgdGhpcy5zdGF0aWNfdHJlZSAgPSBzdGF0aWNfdHJlZTsgIC8qIHN0YXRpYyB0cmVlIG9yIE5VTEwgKi9cbiAgdGhpcy5leHRyYV9iaXRzICAgPSBleHRyYV9iaXRzOyAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggY29kZSBvciBOVUxMICovXG4gIHRoaXMuZXh0cmFfYmFzZSAgID0gZXh0cmFfYmFzZTsgICAvKiBiYXNlIGluZGV4IGZvciBleHRyYV9iaXRzICovXG4gIHRoaXMuZWxlbXMgICAgICAgID0gZWxlbXM7ICAgICAgICAvKiBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB0cmVlICovXG4gIHRoaXMubWF4X2xlbmd0aCAgID0gbWF4X2xlbmd0aDsgICAvKiBtYXggYml0IGxlbmd0aCBmb3IgdGhlIGNvZGVzICovXG5cbiAgLy8gc2hvdyBpZiBgc3RhdGljX3RyZWVgIGhhcyBkYXRhIG9yIGR1bW15IC0gbmVlZGVkIGZvciBtb25vbW9ycGhpYyBvYmplY3RzXG4gIHRoaXMuaGFzX3N0cmVlICAgID0gc3RhdGljX3RyZWUgJiYgc3RhdGljX3RyZWUubGVuZ3RoO1xufVxuXG5cbnZhciBzdGF0aWNfbF9kZXNjO1xudmFyIHN0YXRpY19kX2Rlc2M7XG52YXIgc3RhdGljX2JsX2Rlc2M7XG5cblxuZnVuY3Rpb24gVHJlZURlc2MoZHluX3RyZWUsIHN0YXRfZGVzYykge1xuICB0aGlzLmR5bl90cmVlID0gZHluX3RyZWU7ICAgICAvKiB0aGUgZHluYW1pYyB0cmVlICovXG4gIHRoaXMubWF4X2NvZGUgPSAwOyAgICAgICAgICAgIC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICB0aGlzLnN0YXRfZGVzYyA9IHN0YXRfZGVzYzsgICAvKiB0aGUgY29ycmVzcG9uZGluZyBzdGF0aWMgdHJlZSAqL1xufVxuXG5cblxuZnVuY3Rpb24gZF9jb2RlKGRpc3QpIHtcbiAgcmV0dXJuIGRpc3QgPCAyNTYgPyBfZGlzdF9jb2RlW2Rpc3RdIDogX2Rpc3RfY29kZVsyNTYgKyAoZGlzdCA+Pj4gNyldO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogT3V0cHV0IGEgc2hvcnQgTFNCIGZpcnN0IG9uIHRoZSBzdHJlYW0uXG4gKiBJTiBhc3NlcnRpb246IHRoZXJlIGlzIGVub3VnaCByb29tIGluIHBlbmRpbmdCdWYuXG4gKi9cbmZ1bmN0aW9uIHB1dF9zaG9ydChzLCB3KSB7XG4vLyAgICBwdXRfYnl0ZShzLCAodWNoKSgodykgJiAweGZmKSk7XG4vLyAgICBwdXRfYnl0ZShzLCAodWNoKSgodXNoKSh3KSA+PiA4KSk7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKHcpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAodyA+Pj4gOCkgJiAweGZmO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHZhbHVlIG9uIGEgZ2l2ZW4gbnVtYmVyIG9mIGJpdHMuXG4gKiBJTiBhc3NlcnRpb246IGxlbmd0aCA8PSAxNiBhbmQgdmFsdWUgZml0cyBpbiBsZW5ndGggYml0cy5cbiAqL1xuZnVuY3Rpb24gc2VuZF9iaXRzKHMsIHZhbHVlLCBsZW5ndGgpIHtcbiAgaWYgKHMuYmlfdmFsaWQgPiAoQnVmX3NpemUgLSBsZW5ndGgpKSB7XG4gICAgcy5iaV9idWYgfD0gKHZhbHVlIDw8IHMuYmlfdmFsaWQpICYgMHhmZmZmO1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gICAgcy5iaV9idWYgPSB2YWx1ZSA+PiAoQnVmX3NpemUgLSBzLmJpX3ZhbGlkKTtcbiAgICBzLmJpX3ZhbGlkICs9IGxlbmd0aCAtIEJ1Zl9zaXplO1xuICB9IGVsc2Uge1xuICAgIHMuYmlfYnVmIHw9ICh2YWx1ZSA8PCBzLmJpX3ZhbGlkKSAmIDB4ZmZmZjtcbiAgICBzLmJpX3ZhbGlkICs9IGxlbmd0aDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHNlbmRfY29kZShzLCBjLCB0cmVlKSB7XG4gIHNlbmRfYml0cyhzLCB0cmVlW2MgKiAyXS8qLkNvZGUqLywgdHJlZVtjICogMiArIDFdLyouTGVuKi8pO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmV2ZXJzZSB0aGUgZmlyc3QgbGVuIGJpdHMgb2YgYSBjb2RlLCB1c2luZyBzdHJhaWdodGZvcndhcmQgY29kZSAoYSBmYXN0ZXJcbiAqIG1ldGhvZCB3b3VsZCB1c2UgYSB0YWJsZSlcbiAqIElOIGFzc2VydGlvbjogMSA8PSBsZW4gPD0gMTVcbiAqL1xuZnVuY3Rpb24gYmlfcmV2ZXJzZShjb2RlLCBsZW4pIHtcbiAgdmFyIHJlcyA9IDA7XG4gIGRvIHtcbiAgICByZXMgfD0gY29kZSAmIDE7XG4gICAgY29kZSA+Pj49IDE7XG4gICAgcmVzIDw8PSAxO1xuICB9IHdoaWxlICgtLWxlbiA+IDApO1xuICByZXR1cm4gcmVzID4+PiAxO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIsIGtlZXBpbmcgYXQgbW9zdCA3IGJpdHMgaW4gaXQuXG4gKi9cbmZ1bmN0aW9uIGJpX2ZsdXNoKHMpIHtcbiAgaWYgKHMuYmlfdmFsaWQgPT09IDE2KSB7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgICBzLmJpX2J1ZiA9IDA7XG4gICAgcy5iaV92YWxpZCA9IDA7XG5cbiAgfSBlbHNlIGlmIChzLmJpX3ZhbGlkID49IDgpIHtcbiAgICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IHMuYmlfYnVmICYgMHhmZjtcbiAgICBzLmJpX2J1ZiA+Pj0gODtcbiAgICBzLmJpX3ZhbGlkIC09IDg7XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgZm9yIGEgdHJlZSBhbmQgdXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoXG4gKiBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQsIGhlYXBbaGVhcF9tYXhdIGFuZFxuICogICAgYWJvdmUgYXJlIHRoZSB0cmVlIG5vZGVzIHNvcnRlZCBieSBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGQgbGVuIGlzIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoLCB0aGVcbiAqICAgICBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgZnJlcXVlbmNpZXMgZm9yIGVhY2ggYml0IGxlbmd0aC5cbiAqICAgICBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpcyBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXNcbiAqICAgICBub3QgbnVsbC5cbiAqL1xuZnVuY3Rpb24gZ2VuX2JpdGxlbihzLCBkZXNjKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgICAgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xue1xuICB2YXIgdHJlZSAgICAgICAgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgdmFyIG1heF9jb2RlICAgICAgICA9IGRlc2MubWF4X2NvZGU7XG4gIHZhciBzdHJlZSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgdmFyIGhhc19zdHJlZSAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmhhc19zdHJlZTtcbiAgdmFyIGV4dHJhICAgICAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmV4dHJhX2JpdHM7XG4gIHZhciBiYXNlICAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iYXNlO1xuICB2YXIgbWF4X2xlbmd0aCAgICAgID0gZGVzYy5zdGF0X2Rlc2MubWF4X2xlbmd0aDtcbiAgdmFyIGg7ICAgICAgICAgICAgICAvKiBoZWFwIGluZGV4ICovXG4gIHZhciBuLCBtOyAgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIHRoZSB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBiaXRzOyAgICAgICAgICAgLyogYml0IGxlbmd0aCAqL1xuICB2YXIgeGJpdHM7ICAgICAgICAgIC8qIGV4dHJhIGJpdHMgKi9cbiAgdmFyIGY7ICAgICAgICAgICAgICAvKiBmcmVxdWVuY3kgKi9cbiAgdmFyIG92ZXJmbG93ID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCBiaXQgbGVuZ3RoIHRvbyBsYXJnZSAqL1xuXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIHMuYmxfY291bnRbYml0c10gPSAwO1xuICB9XG5cbiAgLyogSW4gYSBmaXJzdCBwYXNzLCBjb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzICh3aGljaCBtYXlcbiAgICogb3ZlcmZsb3cgaW4gdGhlIGNhc2Ugb2YgdGhlIGJpdCBsZW5ndGggdHJlZSkuXG4gICAqL1xuICB0cmVlW3MuaGVhcFtzLmhlYXBfbWF4XSAqIDIgKyAxXS8qLkxlbiovID0gMDsgLyogcm9vdCBvZiB0aGUgaGVhcCAqL1xuXG4gIGZvciAoaCA9IHMuaGVhcF9tYXggKyAxOyBoIDwgSEVBUF9TSVpFOyBoKyspIHtcbiAgICBuID0gcy5oZWFwW2hdO1xuICAgIGJpdHMgPSB0cmVlW3RyZWVbbiAqIDIgKyAxXS8qLkRhZCovICogMiArIDFdLyouTGVuKi8gKyAxO1xuICAgIGlmIChiaXRzID4gbWF4X2xlbmd0aCkge1xuICAgICAgYml0cyA9IG1heF9sZW5ndGg7XG4gICAgICBvdmVyZmxvdysrO1xuICAgIH1cbiAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgLyogV2Ugb3ZlcndyaXRlIHRyZWVbbl0uRGFkIHdoaWNoIGlzIG5vIGxvbmdlciBuZWVkZWQgKi9cblxuICAgIGlmIChuID4gbWF4X2NvZGUpIHsgY29udGludWU7IH0gLyogbm90IGEgbGVhZiBub2RlICovXG5cbiAgICBzLmJsX2NvdW50W2JpdHNdKys7XG4gICAgeGJpdHMgPSAwO1xuICAgIGlmIChuID49IGJhc2UpIHtcbiAgICAgIHhiaXRzID0gZXh0cmFbbiAtIGJhc2VdO1xuICAgIH1cbiAgICBmID0gdHJlZVtuICogMl0vKi5GcmVxKi87XG4gICAgcy5vcHRfbGVuICs9IGYgKiAoYml0cyArIHhiaXRzKTtcbiAgICBpZiAoaGFzX3N0cmVlKSB7XG4gICAgICBzLnN0YXRpY19sZW4gKz0gZiAqIChzdHJlZVtuICogMiArIDFdLyouTGVuKi8gKyB4Yml0cyk7XG4gICAgfVxuICB9XG4gIGlmIChvdmVyZmxvdyA9PT0gMCkgeyByZXR1cm47IH1cblxuICAvLyBUcmFjZSgoc3RkZXJyLFwiXFxuYml0IGxlbmd0aCBvdmVyZmxvd1xcblwiKSk7XG4gIC8qIFRoaXMgaGFwcGVucyBmb3IgZXhhbXBsZSBvbiBvYmoyIGFuZCBwaWMgb2YgdGhlIENhbGdhcnkgY29ycHVzICovXG5cbiAgLyogRmluZCB0aGUgZmlyc3QgYml0IGxlbmd0aCB3aGljaCBjb3VsZCBpbmNyZWFzZTogKi9cbiAgZG8ge1xuICAgIGJpdHMgPSBtYXhfbGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAocy5ibF9jb3VudFtiaXRzXSA9PT0gMCkgeyBiaXRzLS07IH1cbiAgICBzLmJsX2NvdW50W2JpdHNdLS07ICAgICAgLyogbW92ZSBvbmUgbGVhZiBkb3duIHRoZSB0cmVlICovXG4gICAgcy5ibF9jb3VudFtiaXRzICsgMV0gKz0gMjsgLyogbW92ZSBvbmUgb3ZlcmZsb3cgaXRlbSBhcyBpdHMgYnJvdGhlciAqL1xuICAgIHMuYmxfY291bnRbbWF4X2xlbmd0aF0tLTtcbiAgICAvKiBUaGUgYnJvdGhlciBvZiB0aGUgb3ZlcmZsb3cgaXRlbSBhbHNvIG1vdmVzIG9uZSBzdGVwIHVwLFxuICAgICAqIGJ1dCB0aGlzIGRvZXMgbm90IGFmZmVjdCBibF9jb3VudFttYXhfbGVuZ3RoXVxuICAgICAqL1xuICAgIG92ZXJmbG93IC09IDI7XG4gIH0gd2hpbGUgKG92ZXJmbG93ID4gMCk7XG5cbiAgLyogTm93IHJlY29tcHV0ZSBhbGwgYml0IGxlbmd0aHMsIHNjYW5uaW5nIGluIGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuICAgKiBoIGlzIHN0aWxsIGVxdWFsIHRvIEhFQVBfU0laRS4gKEl0IGlzIHNpbXBsZXIgdG8gcmVjb25zdHJ1Y3QgYWxsXG4gICAqIGxlbmd0aHMgaW5zdGVhZCBvZiBmaXhpbmcgb25seSB0aGUgd3Jvbmcgb25lcy4gVGhpcyBpZGVhIGlzIHRha2VuXG4gICAqIGZyb20gJ2FyJyB3cml0dGVuIGJ5IEhhcnVoaWtvIE9rdW11cmEuKVxuICAgKi9cbiAgZm9yIChiaXRzID0gbWF4X2xlbmd0aDsgYml0cyAhPT0gMDsgYml0cy0tKSB7XG4gICAgbiA9IHMuYmxfY291bnRbYml0c107XG4gICAgd2hpbGUgKG4gIT09IDApIHtcbiAgICAgIG0gPSBzLmhlYXBbLS1oXTtcbiAgICAgIGlmIChtID4gbWF4X2NvZGUpIHsgY29udGludWU7IH1cbiAgICAgIGlmICh0cmVlW20gKiAyICsgMV0vKi5MZW4qLyAhPT0gYml0cykge1xuICAgICAgICAvLyBUcmFjZSgoc3RkZXJyLFwiY29kZSAlZCBiaXRzICVkLT4lZFxcblwiLCBtLCB0cmVlW21dLkxlbiwgYml0cykpO1xuICAgICAgICBzLm9wdF9sZW4gKz0gKGJpdHMgLSB0cmVlW20gKiAyICsgMV0vKi5MZW4qLykgKiB0cmVlW20gKiAyXS8qLkZyZXEqLztcbiAgICAgICAgdHJlZVttICogMiArIDFdLyouTGVuKi8gPSBiaXRzO1xuICAgICAgfVxuICAgICAgbi0tO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogR2VuZXJhdGUgdGhlIGNvZGVzIGZvciBhIGdpdmVuIHRyZWUgYW5kIGJpdCBjb3VudHMgKHdoaWNoIG5lZWQgbm90IGJlXG4gKiBvcHRpbWFsKS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBiaXQgbGVuZ3RoIHN0YXRpc3RpY3MgZm9yXG4gKiB0aGUgZ2l2ZW4gdHJlZSBhbmQgdGhlIGZpZWxkIGxlbiBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuICogT1VUIGFzc2VydGlvbjogdGhlIGZpZWxkIGNvZGUgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cyBvZiBub25cbiAqICAgICB6ZXJvIGNvZGUgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBnZW5fY29kZXModHJlZSwgbWF4X2NvZGUsIGJsX2NvdW50KVxuLy8gICAgY3RfZGF0YSAqdHJlZTsgICAgICAgICAgICAgLyogdGhlIHRyZWUgdG8gZGVjb3JhdGUgKi9cbi8vICAgIGludCBtYXhfY29kZTsgICAgICAgICAgICAgIC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuLy8gICAgdXNoZiAqYmxfY291bnQ7ICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCAqL1xue1xuICB2YXIgbmV4dF9jb2RlID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7IC8qIG5leHQgY29kZSB2YWx1ZSBmb3IgZWFjaCBiaXQgbGVuZ3RoICovXG4gIHZhciBjb2RlID0gMDsgICAgICAgICAgICAgIC8qIHJ1bm5pbmcgY29kZSB2YWx1ZSAqL1xuICB2YXIgYml0czsgICAgICAgICAgICAgICAgICAvKiBiaXQgaW5kZXggKi9cbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogY29kZSBpbmRleCAqL1xuXG4gIC8qIFRoZSBkaXN0cmlidXRpb24gY291bnRzIGFyZSBmaXJzdCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBjb2RlIHZhbHVlc1xuICAgKiB3aXRob3V0IGJpdCByZXZlcnNhbC5cbiAgICovXG4gIGZvciAoYml0cyA9IDE7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIG5leHRfY29kZVtiaXRzXSA9IGNvZGUgPSAoY29kZSArIGJsX2NvdW50W2JpdHMgLSAxXSkgPDwgMTtcbiAgfVxuICAvKiBDaGVjayB0aGF0IHRoZSBiaXQgY291bnRzIGluIGJsX2NvdW50IGFyZSBjb25zaXN0ZW50LiBUaGUgbGFzdCBjb2RlXG4gICAqIG11c3QgYmUgYWxsIG9uZXMuXG4gICAqL1xuICAvL0Fzc2VydCAoY29kZSArIGJsX2NvdW50W01BWF9CSVRTXS0xID09ICgxPDxNQVhfQklUUyktMSxcbiAgLy8gICAgICAgIFwiaW5jb25zaXN0ZW50IGJpdCBjb3VudHNcIik7XG4gIC8vVHJhY2V2KChzdGRlcnIsXCJcXG5nZW5fY29kZXM6IG1heF9jb2RlICVkIFwiLCBtYXhfY29kZSkpO1xuXG4gIGZvciAobiA9IDA7ICBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICB2YXIgbGVuID0gdHJlZVtuICogMiArIDFdLyouTGVuKi87XG4gICAgaWYgKGxlbiA9PT0gMCkgeyBjb250aW51ZTsgfVxuICAgIC8qIE5vdyByZXZlcnNlIHRoZSBiaXRzICovXG4gICAgdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG5leHRfY29kZVtsZW5dKyssIGxlbik7XG5cbiAgICAvL1RyYWNlY3YodHJlZSAhPSBzdGF0aWNfbHRyZWUsIChzdGRlcnIsXCJcXG5uICUzZCAlYyBsICUyZCBjICU0eCAoJXgpIFwiLFxuICAgIC8vICAgICBuLCAoaXNncmFwaChuKSA/IG4gOiAnICcpLCBsZW4sIHRyZWVbbl0uQ29kZSwgbmV4dF9jb2RlW2xlbl0tMSkpO1xuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB2YXJpb3VzICdjb25zdGFudCcgdGFibGVzLlxuICovXG5mdW5jdGlvbiB0cl9zdGF0aWNfaW5pdCgpIHtcbiAgdmFyIG47ICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIGJpdHM7ICAgICAvKiBiaXQgY291bnRlciAqL1xuICB2YXIgbGVuZ3RoOyAgIC8qIGxlbmd0aCB2YWx1ZSAqL1xuICB2YXIgY29kZTsgICAgIC8qIGNvZGUgdmFsdWUgKi9cbiAgdmFyIGRpc3Q7ICAgICAvKiBkaXN0YW5jZSBpbmRleCAqL1xuICB2YXIgYmxfY291bnQgPSBuZXcgQXJyYXkoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy8gZG8gY2hlY2sgaW4gX3RyX2luaXQoKVxuICAvL2lmIChzdGF0aWNfaW5pdF9kb25lKSByZXR1cm47XG5cbiAgLyogRm9yIHNvbWUgZW1iZWRkZWQgdGFyZ2V0cywgZ2xvYmFsIHZhcmlhYmxlcyBhcmUgbm90IGluaXRpYWxpemVkOiAqL1xuLyojaWZkZWYgTk9fSU5JVF9HTE9CQUxfUE9JTlRFUlNcbiAgc3RhdGljX2xfZGVzYy5zdGF0aWNfdHJlZSA9IHN0YXRpY19sdHJlZTtcbiAgc3RhdGljX2xfZGVzYy5leHRyYV9iaXRzID0gZXh0cmFfbGJpdHM7XG4gIHN0YXRpY19kX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfZHRyZWU7XG4gIHN0YXRpY19kX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2RiaXRzO1xuICBzdGF0aWNfYmxfZGVzYy5leHRyYV9iaXRzID0gZXh0cmFfYmxiaXRzO1xuI2VuZGlmKi9cblxuICAvKiBJbml0aWFsaXplIHRoZSBtYXBwaW5nIGxlbmd0aCAoMC4uMjU1KSAtPiBsZW5ndGggY29kZSAoMC4uMjgpICovXG4gIGxlbmd0aCA9IDA7XG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCBMRU5HVEhfQ09ERVMgLSAxOyBjb2RlKyspIHtcbiAgICBiYXNlX2xlbmd0aFtjb2RlXSA9IGxlbmd0aDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfbGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9sZW5ndGhfY29kZVtsZW5ndGgrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAobGVuZ3RoID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogbGVuZ3RoICE9IDI1NlwiKTtcbiAgLyogTm90ZSB0aGF0IHRoZSBsZW5ndGggMjU1IChtYXRjaCBsZW5ndGggMjU4KSBjYW4gYmUgcmVwcmVzZW50ZWRcbiAgICogaW4gdHdvIGRpZmZlcmVudCB3YXlzOiBjb2RlIDI4NCArIDUgYml0cyBvciBjb2RlIDI4NSwgc28gd2VcbiAgICogb3ZlcndyaXRlIGxlbmd0aF9jb2RlWzI1NV0gdG8gdXNlIHRoZSBiZXN0IGVuY29kaW5nOlxuICAgKi9cbiAgX2xlbmd0aF9jb2RlW2xlbmd0aCAtIDFdID0gY29kZTtcblxuICAvKiBJbml0aWFsaXplIHRoZSBtYXBwaW5nIGRpc3QgKDAuLjMySykgLT4gZGlzdCBjb2RlICgwLi4yOSkgKi9cbiAgZGlzdCA9IDA7XG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCAxNjsgY29kZSsrKSB7XG4gICAgYmFzZV9kaXN0W2NvZGVdID0gZGlzdDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfZGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9kaXN0X2NvZGVbZGlzdCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogZGlzdCAhPSAyNTZcIik7XG4gIGRpc3QgPj49IDc7IC8qIGZyb20gbm93IG9uLCBhbGwgZGlzdGFuY2VzIGFyZSBkaXZpZGVkIGJ5IDEyOCAqL1xuICBmb3IgKDsgY29kZSA8IERfQ09ERVM7IGNvZGUrKykge1xuICAgIGJhc2VfZGlzdFtjb2RlXSA9IGRpc3QgPDwgNztcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgKGV4dHJhX2RiaXRzW2NvZGVdIC0gNykpOyBuKyspIHtcbiAgICAgIF9kaXN0X2NvZGVbMjU2ICsgZGlzdCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogMjU2K2Rpc3QgIT0gNTEyXCIpO1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgY29kZXMgb2YgdGhlIHN0YXRpYyBsaXRlcmFsIHRyZWUgKi9cbiAgZm9yIChiaXRzID0gMDsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKSB7XG4gICAgYmxfY291bnRbYml0c10gPSAwO1xuICB9XG5cbiAgbiA9IDA7XG4gIHdoaWxlIChuIDw9IDE0Mykge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA4O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs4XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI1NSkge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA5O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs5XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI3OSkge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA3O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs3XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI4Nykge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA4O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs4XSsrO1xuICB9XG4gIC8qIENvZGVzIDI4NiBhbmQgMjg3IGRvIG5vdCBleGlzdCwgYnV0IHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZVxuICAgKiB0cmVlIGNvbnN0cnVjdGlvbiB0byBnZXQgYSBjYW5vbmljYWwgSHVmZm1hbiB0cmVlIChsb25nZXN0IGNvZGVcbiAgICogYWxsIG9uZXMpXG4gICAqL1xuICBnZW5fY29kZXMoc3RhdGljX2x0cmVlLCBMX0NPREVTICsgMSwgYmxfY291bnQpO1xuXG4gIC8qIFRoZSBzdGF0aWMgZGlzdGFuY2UgdHJlZSBpcyB0cml2aWFsOiAqL1xuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUzsgbisrKSB7XG4gICAgc3RhdGljX2R0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDU7XG4gICAgc3RhdGljX2R0cmVlW24gKiAyXS8qLkNvZGUqLyA9IGJpX3JldmVyc2UobiwgNSk7XG4gIH1cblxuICAvLyBOb3cgZGF0YSByZWFkeSBhbmQgd2UgY2FuIGluaXQgc3RhdGljIHRyZWVzXG4gIHN0YXRpY19sX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2Moc3RhdGljX2x0cmVlLCBleHRyYV9sYml0cywgTElURVJBTFMgKyAxLCBMX0NPREVTLCBNQVhfQklUUyk7XG4gIHN0YXRpY19kX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2Moc3RhdGljX2R0cmVlLCBleHRyYV9kYml0cywgMCwgICAgICAgICAgRF9DT0RFUywgTUFYX0JJVFMpO1xuICBzdGF0aWNfYmxfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhuZXcgQXJyYXkoMCksIGV4dHJhX2JsYml0cywgMCwgICAgICAgICBCTF9DT0RFUywgTUFYX0JMX0JJVFMpO1xuXG4gIC8vc3RhdGljX2luaXRfZG9uZSA9IHRydWU7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIGEgbmV3IGJsb2NrLlxuICovXG5mdW5jdGlvbiBpbml0X2Jsb2NrKHMpIHtcbiAgdmFyIG47IC8qIGl0ZXJhdGVzIG92ZXIgdHJlZSBlbGVtZW50cyAqL1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIHRyZWVzLiAqL1xuICBmb3IgKG4gPSAwOyBuIDwgTF9DT0RFUzsgIG4rKykgeyBzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG4gIGZvciAobiA9IDA7IG4gPCBEX0NPREVTOyAgbisrKSB7IHMuZHluX2R0cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cbiAgZm9yIChuID0gMDsgbiA8IEJMX0NPREVTOyBuKyspIHsgcy5ibF90cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cblxuICBzLmR5bl9sdHJlZVtFTkRfQkxPQ0sgKiAyXS8qLkZyZXEqLyA9IDE7XG4gIHMub3B0X2xlbiA9IHMuc3RhdGljX2xlbiA9IDA7XG4gIHMubGFzdF9saXQgPSBzLm1hdGNoZXMgPSAwO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIgYW5kIGFsaWduIHRoZSBvdXRwdXQgb24gYSBieXRlIGJvdW5kYXJ5XG4gKi9cbmZ1bmN0aW9uIGJpX3dpbmR1cChzKVxue1xuICBpZiAocy5iaV92YWxpZCA+IDgpIHtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICB9IGVsc2UgaWYgKHMuYmlfdmFsaWQgPiAwKSB7XG4gICAgLy9wdXRfYnl0ZShzLCAoQnl0ZSlzLT5iaV9idWYpO1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gcy5iaV9idWY7XG4gIH1cbiAgcy5iaV9idWYgPSAwO1xuICBzLmJpX3ZhbGlkID0gMDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5IGEgc3RvcmVkIGJsb2NrLCBzdG9yaW5nIGZpcnN0IHRoZSBsZW5ndGggYW5kIGl0c1xuICogb25lJ3MgY29tcGxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlfYmxvY2socywgYnVmLCBsZW4sIGhlYWRlcilcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAgICAqYnVmOyAgICAvKiB0aGUgaW5wdXQgZGF0YSAqL1xuLy91bnNpZ25lZCBsZW47ICAgICAvKiBpdHMgbGVuZ3RoICovXG4vL2ludCAgICAgIGhlYWRlcjsgIC8qIHRydWUgaWYgYmxvY2sgaGVhZGVyIG11c3QgYmUgd3JpdHRlbiAqL1xue1xuICBiaV93aW5kdXAocyk7ICAgICAgICAvKiBhbGlnbiBvbiBieXRlIGJvdW5kYXJ5ICovXG5cbiAgaWYgKGhlYWRlcikge1xuICAgIHB1dF9zaG9ydChzLCBsZW4pO1xuICAgIHB1dF9zaG9ydChzLCB+bGVuKTtcbiAgfVxuLy8gIHdoaWxlIChsZW4tLSkge1xuLy8gICAgcHV0X2J5dGUocywgKmJ1ZisrKTtcbi8vICB9XG4gIHV0aWxzLmFycmF5U2V0KHMucGVuZGluZ19idWYsIHMud2luZG93LCBidWYsIGxlbiwgcy5wZW5kaW5nKTtcbiAgcy5wZW5kaW5nICs9IGxlbjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wYXJlcyB0byBzdWJ0cmVlcywgdXNpbmcgdGhlIHRyZWUgZGVwdGggYXMgdGllIGJyZWFrZXIgd2hlblxuICogdGhlIHN1YnRyZWVzIGhhdmUgZXF1YWwgZnJlcXVlbmN5LiBUaGlzIG1pbmltaXplcyB0aGUgd29yc3QgY2FzZSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHNtYWxsZXIodHJlZSwgbiwgbSwgZGVwdGgpIHtcbiAgdmFyIF9uMiA9IG4gKiAyO1xuICB2YXIgX20yID0gbSAqIDI7XG4gIHJldHVybiAodHJlZVtfbjJdLyouRnJlcSovIDwgdHJlZVtfbTJdLyouRnJlcSovIHx8XG4gICAgICAgICAodHJlZVtfbjJdLyouRnJlcSovID09PSB0cmVlW19tMl0vKi5GcmVxKi8gJiYgZGVwdGhbbl0gPD0gZGVwdGhbbV0pKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZXN0b3JlIHRoZSBoZWFwIHByb3BlcnR5IGJ5IG1vdmluZyBkb3duIHRoZSB0cmVlIHN0YXJ0aW5nIGF0IG5vZGUgayxcbiAqIGV4Y2hhbmdpbmcgYSBub2RlIHdpdGggdGhlIHNtYWxsZXN0IG9mIGl0cyB0d28gc29ucyBpZiBuZWNlc3NhcnksIHN0b3BwaW5nXG4gKiB3aGVuIHRoZSBoZWFwIHByb3BlcnR5IGlzIHJlLWVzdGFibGlzaGVkIChlYWNoIGZhdGhlciBzbWFsbGVyIHRoYW4gaXRzXG4gKiB0d28gc29ucykuXG4gKi9cbmZ1bmN0aW9uIHBxZG93bmhlYXAocywgdHJlZSwgaylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgLyogdGhlIHRyZWUgdG8gcmVzdG9yZSAqL1xuLy8gICAgaW50IGs7ICAgICAgICAgICAgICAgLyogbm9kZSB0byBtb3ZlIGRvd24gKi9cbntcbiAgdmFyIHYgPSBzLmhlYXBba107XG4gIHZhciBqID0gayA8PCAxOyAgLyogbGVmdCBzb24gb2YgayAqL1xuICB3aGlsZSAoaiA8PSBzLmhlYXBfbGVuKSB7XG4gICAgLyogU2V0IGogdG8gdGhlIHNtYWxsZXN0IG9mIHRoZSB0d28gc29uczogKi9cbiAgICBpZiAoaiA8IHMuaGVhcF9sZW4gJiZcbiAgICAgIHNtYWxsZXIodHJlZSwgcy5oZWFwW2ogKyAxXSwgcy5oZWFwW2pdLCBzLmRlcHRoKSkge1xuICAgICAgaisrO1xuICAgIH1cbiAgICAvKiBFeGl0IGlmIHYgaXMgc21hbGxlciB0aGFuIGJvdGggc29ucyAqL1xuICAgIGlmIChzbWFsbGVyKHRyZWUsIHYsIHMuaGVhcFtqXSwgcy5kZXB0aCkpIHsgYnJlYWs7IH1cblxuICAgIC8qIEV4Y2hhbmdlIHYgd2l0aCB0aGUgc21hbGxlc3Qgc29uICovXG4gICAgcy5oZWFwW2tdID0gcy5oZWFwW2pdO1xuICAgIGsgPSBqO1xuXG4gICAgLyogQW5kIGNvbnRpbnVlIGRvd24gdGhlIHRyZWUsIHNldHRpbmcgaiB0byB0aGUgbGVmdCBzb24gb2YgayAqL1xuICAgIGogPDw9IDE7XG4gIH1cbiAgcy5oZWFwW2tdID0gdjtcbn1cblxuXG4vLyBpbmxpbmVkIG1hbnVhbGx5XG4vLyB2YXIgU01BTExFU1QgPSAxO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGJsb2NrIGRhdGEgY29tcHJlc3NlZCB1c2luZyB0aGUgZ2l2ZW4gSHVmZm1hbiB0cmVlc1xuICovXG5mdW5jdGlvbiBjb21wcmVzc19ibG9jayhzLCBsdHJlZSwgZHRyZWUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY29uc3QgY3RfZGF0YSAqbHRyZWU7IC8qIGxpdGVyYWwgdHJlZSAqL1xuLy8gICAgY29uc3QgY3RfZGF0YSAqZHRyZWU7IC8qIGRpc3RhbmNlIHRyZWUgKi9cbntcbiAgdmFyIGRpc3Q7ICAgICAgICAgICAvKiBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZyAqL1xuICB2YXIgbGM7ICAgICAgICAgICAgIC8qIG1hdGNoIGxlbmd0aCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdCA9PSAwKSAqL1xuICB2YXIgbHggPSAwOyAgICAgICAgIC8qIHJ1bm5pbmcgaW5kZXggaW4gbF9idWYgKi9cbiAgdmFyIGNvZGU7ICAgICAgICAgICAvKiB0aGUgY29kZSB0byBzZW5kICovXG4gIHZhciBleHRyYTsgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgdG8gc2VuZCAqL1xuXG4gIGlmIChzLmxhc3RfbGl0ICE9PSAwKSB7XG4gICAgZG8ge1xuICAgICAgZGlzdCA9IChzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBseCAqIDJdIDw8IDgpIHwgKHMucGVuZGluZ19idWZbcy5kX2J1ZiArIGx4ICogMiArIDFdKTtcbiAgICAgIGxjID0gcy5wZW5kaW5nX2J1ZltzLmxfYnVmICsgbHhdO1xuICAgICAgbHgrKztcblxuICAgICAgaWYgKGRpc3QgPT09IDApIHtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGxjLCBsdHJlZSk7IC8qIHNlbmQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgICAgLy9UcmFjZWN2KGlzZ3JhcGgobGMpLCAoc3RkZXJyLFwiICclYycgXCIsIGxjKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgICAgIGNvZGUgPSBfbGVuZ3RoX2NvZGVbbGNdO1xuICAgICAgICBzZW5kX2NvZGUocywgY29kZSArIExJVEVSQUxTICsgMSwgbHRyZWUpOyAvKiBzZW5kIHRoZSBsZW5ndGggY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2xiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBsYyAtPSBiYXNlX2xlbmd0aFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgbGMsIGV4dHJhKTsgICAgICAgLyogc2VuZCB0aGUgZXh0cmEgbGVuZ3RoIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgICBkaXN0LS07IC8qIGRpc3QgaXMgbm93IHRoZSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAgICAgY29kZSA9IGRfY29kZShkaXN0KTtcbiAgICAgICAgLy9Bc3NlcnQgKGNvZGUgPCBEX0NPREVTLCBcImJhZCBkX2NvZGVcIik7XG5cbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUsIGR0cmVlKTsgICAgICAgLyogc2VuZCB0aGUgZGlzdGFuY2UgY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2RiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBkaXN0IC09IGJhc2VfZGlzdFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgZGlzdCwgZXh0cmEpOyAgIC8qIHNlbmQgdGhlIGV4dHJhIGRpc3RhbmNlIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgfSAvKiBsaXRlcmFsIG9yIG1hdGNoIHBhaXIgPyAqL1xuXG4gICAgICAvKiBDaGVjayB0aGF0IHRoZSBvdmVybGF5IGJldHdlZW4gcGVuZGluZ19idWYgYW5kIGRfYnVmK2xfYnVmIGlzIG9rOiAqL1xuICAgICAgLy9Bc3NlcnQoKHVJbnQpKHMtPnBlbmRpbmcpIDwgcy0+bGl0X2J1ZnNpemUgKyAyKmx4LFxuICAgICAgLy8gICAgICAgXCJwZW5kaW5nQnVmIG92ZXJmbG93XCIpO1xuXG4gICAgfSB3aGlsZSAobHggPCBzLmxhc3RfbGl0KTtcbiAgfVxuXG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIGx0cmVlKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0cnVjdCBvbmUgSHVmZm1hbiB0cmVlIGFuZCBhc3NpZ25zIHRoZSBjb2RlIGJpdCBzdHJpbmdzIGFuZCBsZW5ndGhzLlxuICogVXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkIGZyZXEgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cy5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGRzIGxlbiBhbmQgY29kZSBhcmUgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhcbiAqICAgICBhbmQgY29ycmVzcG9uZGluZyBjb2RlLiBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpc1xuICogICAgIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpcyBub3QgbnVsbC4gVGhlIGZpZWxkIG1heF9jb2RlIGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gYnVpbGRfdHJlZShzLCBkZXNjKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xue1xuICB2YXIgdHJlZSAgICAgPSBkZXNjLmR5bl90cmVlO1xuICB2YXIgc3RyZWUgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgdmFyIGhhc19zdHJlZSA9IGRlc2Muc3RhdF9kZXNjLmhhc19zdHJlZTtcbiAgdmFyIGVsZW1zICAgID0gZGVzYy5zdGF0X2Rlc2MuZWxlbXM7XG4gIHZhciBuLCBtOyAgICAgICAgICAvKiBpdGVyYXRlIG92ZXIgaGVhcCBlbGVtZW50cyAqL1xuICB2YXIgbWF4X2NvZGUgPSAtMTsgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4gIHZhciBub2RlOyAgICAgICAgICAvKiBuZXcgbm9kZSBiZWluZyBjcmVhdGVkICovXG5cbiAgLyogQ29uc3RydWN0IHRoZSBpbml0aWFsIGhlYXAsIHdpdGggbGVhc3QgZnJlcXVlbnQgZWxlbWVudCBpblxuICAgKiBoZWFwW1NNQUxMRVNUXS4gVGhlIHNvbnMgb2YgaGVhcFtuXSBhcmUgaGVhcFsyKm5dIGFuZCBoZWFwWzIqbisxXS5cbiAgICogaGVhcFswXSBpcyBub3QgdXNlZC5cbiAgICovXG4gIHMuaGVhcF9sZW4gPSAwO1xuICBzLmhlYXBfbWF4ID0gSEVBUF9TSVpFO1xuXG4gIGZvciAobiA9IDA7IG4gPCBlbGVtczsgbisrKSB7XG4gICAgaWYgKHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgICBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IG1heF9jb2RlID0gbjtcbiAgICAgIHMuZGVwdGhbbl0gPSAwO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiBUaGUgcGt6aXAgZm9ybWF0IHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIGRpc3RhbmNlIGNvZGUgZXhpc3RzLFxuICAgKiBhbmQgdGhhdCBhdCBsZWFzdCBvbmUgYml0IHNob3VsZCBiZSBzZW50IGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmVcbiAgICogcG9zc2libGUgY29kZS4gU28gdG8gYXZvaWQgc3BlY2lhbCBjaGVja3MgbGF0ZXIgb24gd2UgZm9yY2UgYXQgbGVhc3RcbiAgICogdHdvIGNvZGVzIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeS5cbiAgICovXG4gIHdoaWxlIChzLmhlYXBfbGVuIDwgMikge1xuICAgIG5vZGUgPSBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IChtYXhfY29kZSA8IDIgPyArK21heF9jb2RlIDogMCk7XG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSAxO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAwO1xuICAgIHMub3B0X2xlbi0tO1xuXG4gICAgaWYgKGhhc19zdHJlZSkge1xuICAgICAgcy5zdGF0aWNfbGVuIC09IHN0cmVlW25vZGUgKiAyICsgMV0vKi5MZW4qLztcbiAgICB9XG4gICAgLyogbm9kZSBpcyAwIG9yIDEgc28gaXQgZG9lcyBub3QgaGF2ZSBleHRyYSBiaXRzICovXG4gIH1cbiAgZGVzYy5tYXhfY29kZSA9IG1heF9jb2RlO1xuXG4gIC8qIFRoZSBlbGVtZW50cyBoZWFwW2hlYXBfbGVuLzIrMSAuLiBoZWFwX2xlbl0gYXJlIGxlYXZlcyBvZiB0aGUgdHJlZSxcbiAgICogZXN0YWJsaXNoIHN1Yi1oZWFwcyBvZiBpbmNyZWFzaW5nIGxlbmd0aHM6XG4gICAqL1xuICBmb3IgKG4gPSAocy5oZWFwX2xlbiA+PiAxLyppbnQgLzIqLyk7IG4gPj0gMTsgbi0tKSB7IHBxZG93bmhlYXAocywgdHJlZSwgbik7IH1cblxuICAvKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBieSByZXBlYXRlZGx5IGNvbWJpbmluZyB0aGUgbGVhc3QgdHdvXG4gICAqIGZyZXF1ZW50IG5vZGVzLlxuICAgKi9cbiAgbm9kZSA9IGVsZW1zOyAgICAgICAgICAgICAgLyogbmV4dCBpbnRlcm5hbCBub2RlIG9mIHRoZSB0cmVlICovXG4gIGRvIHtcbiAgICAvL3BxcmVtb3ZlKHMsIHRyZWUsIG4pOyAgLyogbiA9IG5vZGUgb2YgbGVhc3QgZnJlcXVlbmN5ICovXG4gICAgLyoqKiBwcXJlbW92ZSAqKiovXG4gICAgbiA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBzLmhlYXBbcy5oZWFwX2xlbi0tXTtcbiAgICBwcWRvd25oZWFwKHMsIHRyZWUsIDEvKlNNQUxMRVNUKi8pO1xuICAgIC8qKiovXG5cbiAgICBtID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dOyAvKiBtID0gbm9kZSBvZiBuZXh0IGxlYXN0IGZyZXF1ZW5jeSAqL1xuXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBuOyAvKiBrZWVwIHRoZSBub2RlcyBzb3J0ZWQgYnkgZnJlcXVlbmN5ICovXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBtO1xuXG4gICAgLyogQ3JlYXRlIGEgbmV3IG5vZGUgZmF0aGVyIG9mIG4gYW5kIG0gKi9cbiAgICB0cmVlW25vZGUgKiAyXS8qLkZyZXEqLyA9IHRyZWVbbiAqIDJdLyouRnJlcSovICsgdHJlZVttICogMl0vKi5GcmVxKi87XG4gICAgcy5kZXB0aFtub2RlXSA9IChzLmRlcHRoW25dID49IHMuZGVwdGhbbV0gPyBzLmRlcHRoW25dIDogcy5kZXB0aFttXSkgKyAxO1xuICAgIHRyZWVbbiAqIDIgKyAxXS8qLkRhZCovID0gdHJlZVttICogMiArIDFdLyouRGFkKi8gPSBub2RlO1xuXG4gICAgLyogYW5kIGluc2VydCB0aGUgbmV3IG5vZGUgaW4gdGhlIGhlYXAgKi9cbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBub2RlKys7XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcblxuICB9IHdoaWxlIChzLmhlYXBfbGVuID49IDIpO1xuXG4gIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dO1xuXG4gIC8qIEF0IHRoaXMgcG9pbnQsIHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQuIFdlIGNhbiBub3dcbiAgICogZ2VuZXJhdGUgdGhlIGJpdCBsZW5ndGhzLlxuICAgKi9cbiAgZ2VuX2JpdGxlbihzLCBkZXNjKTtcblxuICAvKiBUaGUgZmllbGQgbGVuIGlzIG5vdyBzZXQsIHdlIGNhbiBnZW5lcmF0ZSB0aGUgYml0IGNvZGVzICovXG4gIGdlbl9jb2Rlcyh0cmVlLCBtYXhfY29kZSwgcy5ibF9jb3VudCk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTY2FuIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIHRvIGRldGVybWluZSB0aGUgZnJlcXVlbmNpZXMgb2YgdGhlIGNvZGVzXG4gKiBpbiB0aGUgYml0IGxlbmd0aCB0cmVlLlxuICovXG5mdW5jdGlvbiBzY2FuX3RyZWUocywgdHJlZSwgbWF4X2NvZGUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgICAvKiB0aGUgdHJlZSB0byBiZSBzY2FubmVkICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgIC8qIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xue1xuICB2YXIgbjsgICAgICAgICAgICAgICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIGFsbCB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBwcmV2bGVuID0gLTE7ICAgICAgICAgIC8qIGxhc3QgZW1pdHRlZCBsZW5ndGggKi9cbiAgdmFyIGN1cmxlbjsgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgY29kZSAqL1xuXG4gIHZhciBuZXh0bGVuID0gdHJlZVswICogMiArIDFdLyouTGVuKi87IC8qIGxlbmd0aCBvZiBuZXh0IGNvZGUgKi9cblxuICB2YXIgY291bnQgPSAwOyAgICAgICAgICAgICAvKiByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZSAqL1xuICB2YXIgbWF4X2NvdW50ID0gNzsgICAgICAgICAvKiBtYXggcmVwZWF0IGNvdW50ICovXG4gIHZhciBtaW5fY291bnQgPSA0OyAgICAgICAgIC8qIG1pbiByZXBlYXQgY291bnQgKi9cblxuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG4gIHRyZWVbKG1heF9jb2RlICsgMSkgKiAyICsgMV0vKi5MZW4qLyA9IDB4ZmZmZjsgLyogZ3VhcmQgKi9cblxuICBmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBjdXJsZW4gPSBuZXh0bGVuO1xuICAgIG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV0vKi5MZW4qLztcblxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgY29udGludWU7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG4gICAgICBzLmJsX3RyZWVbY3VybGVuICogMl0vKi5GcmVxKi8gKz0gY291bnQ7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuXG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7IHMuYmxfdHJlZVtjdXJsZW4gKiAyXS8qLkZyZXEqLysrOyB9XG4gICAgICBzLmJsX3RyZWVbUkVQXzNfNiAqIDJdLyouRnJlcSovKys7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8zXzEwICogMl0vKi5GcmVxKi8rKztcblxuICAgIH0gZWxzZSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8xMV8xMzggKiAyXS8qLkZyZXEqLysrO1xuICAgIH1cblxuICAgIGNvdW50ID0gMDtcbiAgICBwcmV2bGVuID0gY3VybGVuO1xuXG4gICAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzODtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNjtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4X2NvdW50ID0gNztcbiAgICAgIG1pbl9jb3VudCA9IDQ7XG4gICAgfVxuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIGluIGNvbXByZXNzZWQgZm9ybSwgdXNpbmcgdGhlIGNvZGVzIGluXG4gKiBibF90cmVlLlxuICovXG5mdW5jdGlvbiBzZW5kX3RyZWUocywgdHJlZSwgbWF4X2NvZGUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cbntcbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgcHJldmxlbiA9IC0xOyAgICAgICAgICAvKiBsYXN0IGVtaXR0ZWQgbGVuZ3RoICovXG4gIHZhciBjdXJsZW47ICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IGNvZGUgKi9cblxuICB2YXIgbmV4dGxlbiA9IHRyZWVbMCAqIDIgKyAxXS8qLkxlbiovOyAvKiBsZW5ndGggb2YgbmV4dCBjb2RlICovXG5cbiAgdmFyIGNvdW50ID0gMDsgICAgICAgICAgICAgLyogcmVwZWF0IGNvdW50IG9mIHRoZSBjdXJyZW50IGNvZGUgKi9cbiAgdmFyIG1heF9jb3VudCA9IDc7ICAgICAgICAgLyogbWF4IHJlcGVhdCBjb3VudCAqL1xuICB2YXIgbWluX2NvdW50ID0gNDsgICAgICAgICAvKiBtaW4gcmVwZWF0IGNvdW50ICovXG5cbiAgLyogdHJlZVttYXhfY29kZSsxXS5MZW4gPSAtMTsgKi8gIC8qIGd1YXJkIGFscmVhZHkgc2V0ICovXG4gIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgbWF4X2NvdW50ID0gMTM4O1xuICAgIG1pbl9jb3VudCA9IDM7XG4gIH1cblxuICBmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBjdXJsZW4gPSBuZXh0bGVuO1xuICAgIG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV0vKi5MZW4qLztcblxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgY29udGludWU7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG4gICAgICBkbyB7IHNlbmRfY29kZShzLCBjdXJsZW4sIHMuYmxfdHJlZSk7IH0gd2hpbGUgKC0tY291bnQgIT09IDApO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcbiAgICAgIGlmIChjdXJsZW4gIT09IHByZXZsZW4pIHtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGN1cmxlbiwgcy5ibF90cmVlKTtcbiAgICAgICAgY291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vQXNzZXJ0KGNvdW50ID49IDMgJiYgY291bnQgPD0gNiwgXCIgM182P1wiKTtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBfM182LCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMywgMik7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgICBzZW5kX2NvZGUocywgUkVQWl8zXzEwLCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMywgMyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUFpfMTFfMTM4LCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMTEsIDcpO1xuICAgIH1cblxuICAgIGNvdW50ID0gMDtcbiAgICBwcmV2bGVuID0gY3VybGVuO1xuICAgIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIG1heF9jb3VudCA9IDY7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG1heF9jb3VudCA9IDc7XG4gICAgICBtaW5fY291bnQgPSA0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgZm9yIHRoZSBiaXQgbGVuZ3RocyBhbmQgcmV0dXJuIHRoZSBpbmRleCBpblxuICogYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkX2JsX3RyZWUocykge1xuICB2YXIgbWF4X2JsaW5kZXg7ICAvKiBpbmRleCBvZiBsYXN0IGJpdCBsZW5ndGggY29kZSBvZiBub24gemVybyBmcmVxICovXG5cbiAgLyogRGV0ZXJtaW5lIHRoZSBiaXQgbGVuZ3RoIGZyZXF1ZW5jaWVzIGZvciBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlcyAqL1xuICBzY2FuX3RyZWUocywgcy5keW5fbHRyZWUsIHMubF9kZXNjLm1heF9jb2RlKTtcbiAgc2Nhbl90cmVlKHMsIHMuZHluX2R0cmVlLCBzLmRfZGVzYy5tYXhfY29kZSk7XG5cbiAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZTogKi9cbiAgYnVpbGRfdHJlZShzLCBzLmJsX2Rlc2MpO1xuICAvKiBvcHRfbGVuIG5vdyBpbmNsdWRlcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucywgZXhjZXB0XG4gICAqIHRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RocyBjb2RlcyBhbmQgdGhlIDUrNSs0IGJpdHMgZm9yIHRoZSBjb3VudHMuXG4gICAqL1xuXG4gIC8qIERldGVybWluZSB0aGUgbnVtYmVyIG9mIGJpdCBsZW5ndGggY29kZXMgdG8gc2VuZC4gVGhlIHBremlwIGZvcm1hdFxuICAgKiByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IDQgYml0IGxlbmd0aCBjb2RlcyBiZSBzZW50LiAoYXBwbm90ZS50eHQgc2F5c1xuICAgKiAzIGJ1dCB0aGUgYWN0dWFsIHZhbHVlIHVzZWQgaXMgNC4pXG4gICAqL1xuICBmb3IgKG1heF9ibGluZGV4ID0gQkxfQ09ERVMgLSAxOyBtYXhfYmxpbmRleCA+PSAzOyBtYXhfYmxpbmRleC0tKSB7XG4gICAgaWYgKHMuYmxfdHJlZVtibF9vcmRlclttYXhfYmxpbmRleF0gKiAyICsgMV0vKi5MZW4qLyAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8qIFVwZGF0ZSBvcHRfbGVuIHRvIGluY2x1ZGUgdGhlIGJpdCBsZW5ndGggdHJlZSBhbmQgY291bnRzICovXG4gIHMub3B0X2xlbiArPSAzICogKG1heF9ibGluZGV4ICsgMSkgKyA1ICsgNSArIDQ7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZHluIHRyZWVzOiBkeW4gJWxkLCBzdGF0ICVsZFwiLFxuICAvLyAgICAgICAgcy0+b3B0X2xlbiwgcy0+c3RhdGljX2xlbikpO1xuXG4gIHJldHVybiBtYXhfYmxpbmRleDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGhlYWRlciBmb3IgYSBibG9jayB1c2luZyBkeW5hbWljIEh1ZmZtYW4gdHJlZXM6IHRoZSBjb3VudHMsIHRoZVxuICogbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcywgdGhlIGxpdGVyYWwgdHJlZSBhbmQgdGhlIGRpc3RhbmNlIHRyZWUuXG4gKiBJTiBhc3NlcnRpb246IGxjb2RlcyA+PSAyNTcsIGRjb2RlcyA+PSAxLCBibGNvZGVzID49IDQuXG4gKi9cbmZ1bmN0aW9uIHNlbmRfYWxsX3RyZWVzKHMsIGxjb2RlcywgZGNvZGVzLCBibGNvZGVzKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGludCBsY29kZXMsIGRjb2RlcywgYmxjb2RlczsgLyogbnVtYmVyIG9mIGNvZGVzIGZvciBlYWNoIHRyZWUgKi9cbntcbiAgdmFyIHJhbms7ICAgICAgICAgICAgICAgICAgICAvKiBpbmRleCBpbiBibF9vcmRlciAqL1xuXG4gIC8vQXNzZXJ0IChsY29kZXMgPj0gMjU3ICYmIGRjb2RlcyA+PSAxICYmIGJsY29kZXMgPj0gNCwgXCJub3QgZW5vdWdoIGNvZGVzXCIpO1xuICAvL0Fzc2VydCAobGNvZGVzIDw9IExfQ09ERVMgJiYgZGNvZGVzIDw9IERfQ09ERVMgJiYgYmxjb2RlcyA8PSBCTF9DT0RFUyxcbiAgLy8gICAgICAgIFwidG9vIG1hbnkgY29kZXNcIik7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY291bnRzOiBcIikpO1xuICBzZW5kX2JpdHMocywgbGNvZGVzIC0gMjU3LCA1KTsgLyogbm90ICsyNTUgYXMgc3RhdGVkIGluIGFwcG5vdGUudHh0ICovXG4gIHNlbmRfYml0cyhzLCBkY29kZXMgLSAxLCAgIDUpO1xuICBzZW5kX2JpdHMocywgYmxjb2RlcyAtIDQsICA0KTsgLyogbm90IC0zIGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dCAqL1xuICBmb3IgKHJhbmsgPSAwOyByYW5rIDwgYmxjb2RlczsgcmFuaysrKSB7XG4gICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCBjb2RlICUyZCBcIiwgYmxfb3JkZXJbcmFua10pKTtcbiAgICBzZW5kX2JpdHMocywgcy5ibF90cmVlW2JsX29yZGVyW3JhbmtdICogMiArIDFdLyouTGVuKi8sIDMpO1xuICB9XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG5cbiAgc2VuZF90cmVlKHMsIHMuZHluX2x0cmVlLCBsY29kZXMgLSAxKTsgLyogbGl0ZXJhbCB0cmVlICovXG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxubGl0IHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xuXG4gIHNlbmRfdHJlZShzLCBzLmR5bl9kdHJlZSwgZGNvZGVzIC0gMSk7IC8qIGRpc3RhbmNlIHRyZWUgKi9cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ2hlY2sgaWYgdGhlIGRhdGEgdHlwZSBpcyBURVhUIG9yIEJJTkFSWSwgdXNpbmcgdGhlIGZvbGxvd2luZyBhbGdvcml0aG06XG4gKiAtIFRFWFQgaWYgdGhlIHR3byBjb25kaXRpb25zIGJlbG93IGFyZSBzYXRpc2ZpZWQ6XG4gKiAgICBhKSBUaGVyZSBhcmUgbm8gbm9uLXBvcnRhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBiZWxvbmdpbmcgdG8gdGhlXG4gKiAgICAgICBcImJsYWNrIGxpc3RcIiAoMC4uNiwgMTQuLjI1LCAyOC4uMzEpLlxuICogICAgYikgVGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByaW50YWJsZSBjaGFyYWN0ZXIgYmVsb25naW5nIHRvIHRoZVxuICogICAgICAgXCJ3aGl0ZSBsaXN0XCIgKDkge1RBQn0sIDEwIHtMRn0sIDEzIHtDUn0sIDMyLi4yNTUpLlxuICogLSBCSU5BUlkgb3RoZXJ3aXNlLlxuICogLSBUaGUgZm9sbG93aW5nIHBhcnRpYWxseS1wb3J0YWJsZSBjb250cm9sIGNoYXJhY3RlcnMgZm9ybSBhXG4gKiAgIFwiZ3JheSBsaXN0XCIgdGhhdCBpcyBpZ25vcmVkIGluIHRoaXMgZGV0ZWN0aW9uIGFsZ29yaXRobTpcbiAqICAgKDcge0JFTH0sIDgge0JTfSwgMTEge1ZUfSwgMTIge0ZGfSwgMjYge1NVQn0sIDI3IHtFU0N9KS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBGcmVxIG9mIGR5bl9sdHJlZSBhcmUgc2V0LlxuICovXG5mdW5jdGlvbiBkZXRlY3RfZGF0YV90eXBlKHMpIHtcbiAgLyogYmxhY2tfbWFzayBpcyB0aGUgYml0IG1hc2sgb2YgYmxhY2stbGlzdGVkIGJ5dGVzXG4gICAqIHNldCBiaXRzIDAuLjYsIDE0Li4yNSwgYW5kIDI4Li4zMVxuICAgKiAweGYzZmZjMDdmID0gYmluYXJ5IDExMTEwMDExMTExMTExMTExMTAwMDAwMDAxMTExMTExXG4gICAqL1xuICB2YXIgYmxhY2tfbWFzayA9IDB4ZjNmZmMwN2Y7XG4gIHZhciBuO1xuXG4gIC8qIENoZWNrIGZvciBub24tdGV4dHVhbCAoXCJibGFjay1saXN0ZWRcIikgYnl0ZXMuICovXG4gIGZvciAobiA9IDA7IG4gPD0gMzE7IG4rKywgYmxhY2tfbWFzayA+Pj49IDEpIHtcbiAgICBpZiAoKGJsYWNrX21hc2sgJiAxKSAmJiAocy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSkge1xuICAgICAgcmV0dXJuIFpfQklOQVJZO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNrIGZvciB0ZXh0dWFsIChcIndoaXRlLWxpc3RlZFwiKSBieXRlcy4gKi9cbiAgaWYgKHMuZHluX2x0cmVlWzkgKiAyXS8qLkZyZXEqLyAhPT0gMCB8fCBzLmR5bl9sdHJlZVsxMCAqIDJdLyouRnJlcSovICE9PSAwIHx8XG4gICAgICBzLmR5bl9sdHJlZVsxMyAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgcmV0dXJuIFpfVEVYVDtcbiAgfVxuICBmb3IgKG4gPSAzMjsgbiA8IExJVEVSQUxTOyBuKyspIHtcbiAgICBpZiAocy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgICByZXR1cm4gWl9URVhUO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRoZXJlIGFyZSBubyBcImJsYWNrLWxpc3RlZFwiIG9yIFwid2hpdGUtbGlzdGVkXCIgYnl0ZXM6XG4gICAqIHRoaXMgc3RyZWFtIGVpdGhlciBpcyBlbXB0eSBvciBoYXMgdG9sZXJhdGVkIChcImdyYXktbGlzdGVkXCIpIGJ5dGVzIG9ubHkuXG4gICAqL1xuICByZXR1cm4gWl9CSU5BUlk7XG59XG5cblxudmFyIHN0YXRpY19pbml0X2RvbmUgPSBmYWxzZTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB0cmVlIGRhdGEgc3RydWN0dXJlcyBmb3IgYSBuZXcgemxpYiBzdHJlYW0uXG4gKi9cbmZ1bmN0aW9uIF90cl9pbml0KHMpXG57XG5cbiAgaWYgKCFzdGF0aWNfaW5pdF9kb25lKSB7XG4gICAgdHJfc3RhdGljX2luaXQoKTtcbiAgICBzdGF0aWNfaW5pdF9kb25lID0gdHJ1ZTtcbiAgfVxuXG4gIHMubF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9sdHJlZSwgc3RhdGljX2xfZGVzYyk7XG4gIHMuZF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9kdHJlZSwgc3RhdGljX2RfZGVzYyk7XG4gIHMuYmxfZGVzYyA9IG5ldyBUcmVlRGVzYyhzLmJsX3RyZWUsIHN0YXRpY19ibF9kZXNjKTtcblxuICBzLmJpX2J1ZiA9IDA7XG4gIHMuYmlfdmFsaWQgPSAwO1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBmaXJzdCBmaWxlOiAqL1xuICBpbml0X2Jsb2NrKHMpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHN0b3JlZCBibG9ja1xuICovXG5mdW5jdGlvbiBfdHJfc3RvcmVkX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdClcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jayAqL1xuLy91bGcgc3RvcmVkX2xlbjsgICAvKiBsZW5ndGggb2YgaW5wdXQgYmxvY2sgKi9cbi8vaW50IGxhc3Q7ICAgICAgICAgLyogb25lIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZSAqL1xue1xuICBzZW5kX2JpdHMocywgKFNUT1JFRF9CTE9DSyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTsgICAgLyogc2VuZCBibG9jayB0eXBlICovXG4gIGNvcHlfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCB0cnVlKTsgLyogd2l0aCBoZWFkZXIgKi9cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgb25lIGVtcHR5IHN0YXRpYyBibG9jayB0byBnaXZlIGVub3VnaCBsb29rYWhlYWQgZm9yIGluZmxhdGUuXG4gKiBUaGlzIHRha2VzIDEwIGJpdHMsIG9mIHdoaWNoIDcgbWF5IHJlbWFpbiBpbiB0aGUgYml0IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gX3RyX2FsaWduKHMpIHtcbiAgc2VuZF9iaXRzKHMsIFNUQVRJQ19UUkVFUyA8PCAxLCAzKTtcbiAgc2VuZF9jb2RlKHMsIEVORF9CTE9DSywgc3RhdGljX2x0cmVlKTtcbiAgYmlfZmx1c2gocyk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcgZm9yIHRoZSBjdXJyZW50IGJsb2NrOiBkeW5hbWljIHRyZWVzLCBzdGF0aWNcbiAqIHRyZWVzIG9yIHN0b3JlLCBhbmQgb3V0cHV0IHRoZSBlbmNvZGVkIGJsb2NrIHRvIHRoZSB6aXAgZmlsZS5cbiAqL1xuZnVuY3Rpb24gX3RyX2ZsdXNoX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdClcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jaywgb3IgTlVMTCBpZiB0b28gb2xkICovXG4vL3VsZyBzdG9yZWRfbGVuOyAgIC8qIGxlbmd0aCBvZiBpbnB1dCBibG9jayAqL1xuLy9pbnQgbGFzdDsgICAgICAgICAvKiBvbmUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlICovXG57XG4gIHZhciBvcHRfbGVuYiwgc3RhdGljX2xlbmI7ICAvKiBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGluIGJ5dGVzICovXG4gIHZhciBtYXhfYmxpbmRleCA9IDA7ICAgICAgICAvKiBpbmRleCBvZiBsYXN0IGJpdCBsZW5ndGggY29kZSBvZiBub24gemVybyBmcmVxICovXG5cbiAgLyogQnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgdW5sZXNzIGEgc3RvcmVkIGJsb2NrIGlzIGZvcmNlZCAqL1xuICBpZiAocy5sZXZlbCA+IDApIHtcblxuICAgIC8qIENoZWNrIGlmIHRoZSBmaWxlIGlzIGJpbmFyeSBvciB0ZXh0ICovXG4gICAgaWYgKHMuc3RybS5kYXRhX3R5cGUgPT09IFpfVU5LTk9XTikge1xuICAgICAgcy5zdHJtLmRhdGFfdHlwZSA9IGRldGVjdF9kYXRhX3R5cGUocyk7XG4gICAgfVxuXG4gICAgLyogQ29uc3RydWN0IHRoZSBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlcyAqL1xuICAgIGJ1aWxkX3RyZWUocywgcy5sX2Rlc2MpO1xuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbmxpdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLCBzLT5vcHRfbGVuLFxuICAgIC8vICAgICAgICBzLT5zdGF0aWNfbGVuKSk7XG5cbiAgICBidWlsZF90cmVlKHMsIHMuZF9kZXNjKTtcbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsIHMtPm9wdF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN0YXRpY19sZW4pKTtcbiAgICAvKiBBdCB0aGlzIHBvaW50LCBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGFyZSB0aGUgdG90YWwgYml0IGxlbmd0aHMgb2ZcbiAgICAgKiB0aGUgY29tcHJlc3NlZCBibG9jayBkYXRhLCBleGNsdWRpbmcgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLlxuICAgICAqL1xuXG4gICAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZSBmb3IgdGhlIGFib3ZlIHR3byB0cmVlcywgYW5kIGdldCB0aGUgaW5kZXhcbiAgICAgKiBpbiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAgICAgKi9cbiAgICBtYXhfYmxpbmRleCA9IGJ1aWxkX2JsX3RyZWUocyk7XG5cbiAgICAvKiBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcuIENvbXB1dGUgdGhlIGJsb2NrIGxlbmd0aHMgaW4gYnl0ZXMuICovXG4gICAgb3B0X2xlbmIgPSAocy5vcHRfbGVuICsgMyArIDcpID4+PiAzO1xuICAgIHN0YXRpY19sZW5iID0gKHMuc3RhdGljX2xlbiArIDMgKyA3KSA+Pj4gMztcblxuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbm9wdCAlbHUoJWx1KSBzdGF0ICVsdSglbHUpIHN0b3JlZCAlbHUgbGl0ICV1IFwiLFxuICAgIC8vICAgICAgICBvcHRfbGVuYiwgcy0+b3B0X2xlbiwgc3RhdGljX2xlbmIsIHMtPnN0YXRpY19sZW4sIHN0b3JlZF9sZW4sXG4gICAgLy8gICAgICAgIHMtPmxhc3RfbGl0KSk7XG5cbiAgICBpZiAoc3RhdGljX2xlbmIgPD0gb3B0X2xlbmIpIHsgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYjsgfVxuXG4gIH0gZWxzZSB7XG4gICAgLy8gQXNzZXJ0KGJ1ZiAhPSAoY2hhciopMCwgXCJsb3N0IGJ1ZlwiKTtcbiAgICBvcHRfbGVuYiA9IHN0YXRpY19sZW5iID0gc3RvcmVkX2xlbiArIDU7IC8qIGZvcmNlIGEgc3RvcmVkIGJsb2NrICovXG4gIH1cblxuICBpZiAoKHN0b3JlZF9sZW4gKyA0IDw9IG9wdF9sZW5iKSAmJiAoYnVmICE9PSAtMSkpIHtcbiAgICAvKiA0OiB0d28gd29yZHMgZm9yIHRoZSBsZW5ndGhzICovXG5cbiAgICAvKiBUaGUgdGVzdCBidWYgIT0gTlVMTCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiBMSVRfQlVGU0laRSA+IFdTSVpFLlxuICAgICAqIE90aGVyd2lzZSB3ZSBjYW4ndCBoYXZlIHByb2Nlc3NlZCBtb3JlIHRoYW4gV1NJWkUgaW5wdXQgYnl0ZXMgc2luY2VcbiAgICAgKiB0aGUgbGFzdCBibG9jayBmbHVzaCwgYmVjYXVzZSBjb21wcmVzc2lvbiB3b3VsZCBoYXZlIGJlZW5cbiAgICAgKiBzdWNjZXNzZnVsLiBJZiBMSVRfQlVGU0laRSA8PSBXU0laRSwgaXQgaXMgbmV2ZXIgdG9vIGxhdGUgdG9cbiAgICAgKiB0cmFuc2Zvcm0gYSBibG9jayBpbnRvIGEgc3RvcmVkIGJsb2NrLlxuICAgICAqL1xuICAgIF90cl9zdG9yZWRfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KTtcblxuICB9IGVsc2UgaWYgKHMuc3RyYXRlZ3kgPT09IFpfRklYRUQgfHwgc3RhdGljX2xlbmIgPT09IG9wdF9sZW5iKSB7XG5cbiAgICBzZW5kX2JpdHMocywgKFNUQVRJQ19UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzdGF0aWNfbHRyZWUsIHN0YXRpY19kdHJlZSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzZW5kX2JpdHMocywgKERZTl9UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBzZW5kX2FsbF90cmVlcyhzLCBzLmxfZGVzYy5tYXhfY29kZSArIDEsIHMuZF9kZXNjLm1heF9jb2RlICsgMSwgbWF4X2JsaW5kZXggKyAxKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzLmR5bl9sdHJlZSwgcy5keW5fZHRyZWUpO1xuICB9XG4gIC8vIEFzc2VydCAocy0+Y29tcHJlc3NlZF9sZW4gPT0gcy0+Yml0c19zZW50LCBcImJhZCBjb21wcmVzc2VkIHNpemVcIik7XG4gIC8qIFRoZSBhYm92ZSBjaGVjayBpcyBtYWRlIG1vZCAyXjMyLCBmb3IgZmlsZXMgbGFyZ2VyIHRoYW4gNTEyIE1CXG4gICAqIGFuZCB1TG9uZyBpbXBsZW1lbnRlZCBvbiAzMiBiaXRzLlxuICAgKi9cbiAgaW5pdF9ibG9jayhzKTtcblxuICBpZiAobGFzdCkge1xuICAgIGJpX3dpbmR1cChzKTtcbiAgfVxuICAvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmNvbXBybGVuICVsdSglbHUpIFwiLCBzLT5jb21wcmVzc2VkX2xlbj4+MyxcbiAgLy8gICAgICAgcy0+Y29tcHJlc3NlZF9sZW4tNypsYXN0KSk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2F2ZSB0aGUgbWF0Y2ggaW5mbyBhbmQgdGFsbHkgdGhlIGZyZXF1ZW5jeSBjb3VudHMuIFJldHVybiB0cnVlIGlmXG4gKiB0aGUgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIF90cl90YWxseShzLCBkaXN0LCBsYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB1bnNpZ25lZCBkaXN0OyAgLyogZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmcgKi9cbi8vICAgIHVuc2lnbmVkIGxjOyAgICAvKiBtYXRjaCBsZW5ndGgtTUlOX01BVENIIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0PT0wKSAqL1xue1xuICAvL3ZhciBvdXRfbGVuZ3RoLCBpbl9sZW5ndGgsIGRjb2RlO1xuXG4gIHMucGVuZGluZ19idWZbcy5kX2J1ZiArIHMubGFzdF9saXQgKiAyXSAgICAgPSAoZGlzdCA+Pj4gOCkgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBzLmxhc3RfbGl0ICogMiArIDFdID0gZGlzdCAmIDB4ZmY7XG5cbiAgcy5wZW5kaW5nX2J1ZltzLmxfYnVmICsgcy5sYXN0X2xpdF0gPSBsYyAmIDB4ZmY7XG4gIHMubGFzdF9saXQrKztcblxuICBpZiAoZGlzdCA9PT0gMCkge1xuICAgIC8qIGxjIGlzIHRoZSB1bm1hdGNoZWQgY2hhciAqL1xuICAgIHMuZHluX2x0cmVlW2xjICogMl0vKi5GcmVxKi8rKztcbiAgfSBlbHNlIHtcbiAgICBzLm1hdGNoZXMrKztcbiAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgZGlzdC0tOyAgICAgICAgICAgICAvKiBkaXN0ID0gbWF0Y2ggZGlzdGFuY2UgLSAxICovXG4gICAgLy9Bc3NlcnQoKHVzaClkaXN0IDwgKHVzaClNQVhfRElTVChzKSAmJlxuICAgIC8vICAgICAgICh1c2gpbGMgPD0gKHVzaCkoTUFYX01BVENILU1JTl9NQVRDSCkgJiZcbiAgICAvLyAgICAgICAodXNoKWRfY29kZShkaXN0KSA8ICh1c2gpRF9DT0RFUywgIFwiX3RyX3RhbGx5OiBiYWQgbWF0Y2hcIik7XG5cbiAgICBzLmR5bl9sdHJlZVsoX2xlbmd0aF9jb2RlW2xjXSArIExJVEVSQUxTICsgMSkgKiAyXS8qLkZyZXEqLysrO1xuICAgIHMuZHluX2R0cmVlW2RfY29kZShkaXN0KSAqIDJdLyouRnJlcSovKys7XG4gIH1cblxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcblxuLy8jaWZkZWYgVFJVTkNBVEVfQkxPQ0tcbi8vICAvKiBUcnkgdG8gZ3Vlc3MgaWYgaXQgaXMgcHJvZml0YWJsZSB0byBzdG9wIHRoZSBjdXJyZW50IGJsb2NrIGhlcmUgKi9cbi8vICBpZiAoKHMubGFzdF9saXQgJiAweDFmZmYpID09PSAwICYmIHMubGV2ZWwgPiAyKSB7XG4vLyAgICAvKiBDb21wdXRlIGFuIHVwcGVyIGJvdW5kIGZvciB0aGUgY29tcHJlc3NlZCBsZW5ndGggKi9cbi8vICAgIG91dF9sZW5ndGggPSBzLmxhc3RfbGl0Kjg7XG4vLyAgICBpbl9sZW5ndGggPSBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydDtcbi8vXG4vLyAgICBmb3IgKGRjb2RlID0gMDsgZGNvZGUgPCBEX0NPREVTOyBkY29kZSsrKSB7XG4vLyAgICAgIG91dF9sZW5ndGggKz0gcy5keW5fZHRyZWVbZGNvZGUqMl0vKi5GcmVxKi8gKiAoNSArIGV4dHJhX2RiaXRzW2Rjb2RlXSk7XG4vLyAgICB9XG4vLyAgICBvdXRfbGVuZ3RoID4+Pj0gMztcbi8vICAgIC8vVHJhY2V2KChzdGRlcnIsXCJcXG5sYXN0X2xpdCAldSwgaW4gJWxkLCBvdXQgfiVsZCglbGQlJSkgXCIsXG4vLyAgICAvLyAgICAgICBzLT5sYXN0X2xpdCwgaW5fbGVuZ3RoLCBvdXRfbGVuZ3RoLFxuLy8gICAgLy8gICAgICAgMTAwTCAtIG91dF9sZW5ndGgqMTAwTC9pbl9sZW5ndGgpKTtcbi8vICAgIGlmIChzLm1hdGNoZXMgPCAocy5sYXN0X2xpdD4+MSkvKmludCAvMiovICYmIG91dF9sZW5ndGggPCAoaW5fbGVuZ3RoPj4xKS8qaW50IC8yKi8pIHtcbi8vICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICB9XG4vLyAgfVxuLy8jZW5kaWZcblxuICByZXR1cm4gKHMubGFzdF9saXQgPT09IHMubGl0X2J1ZnNpemUgLSAxKTtcbiAgLyogV2UgYXZvaWQgZXF1YWxpdHkgd2l0aCBsaXRfYnVmc2l6ZSBiZWNhdXNlIG9mIHdyYXBhcm91bmQgYXQgNjRLXG4gICAqIG9uIDE2IGJpdCBtYWNoaW5lcyBhbmQgYmVjYXVzZSBzdG9yZWQgYmxvY2tzIGFyZSByZXN0cmljdGVkIHRvXG4gICAqIDY0Sy0xIGJ5dGVzLlxuICAgKi9cbn1cblxuZXhwb3J0cy5fdHJfaW5pdCAgPSBfdHJfaW5pdDtcbmV4cG9ydHMuX3RyX3N0b3JlZF9ibG9jayA9IF90cl9zdG9yZWRfYmxvY2s7XG5leHBvcnRzLl90cl9mbHVzaF9ibG9jayAgPSBfdHJfZmx1c2hfYmxvY2s7XG5leHBvcnRzLl90cl90YWxseSA9IF90cl90YWxseTtcbmV4cG9ydHMuX3RyX2FsaWduID0gX3RyX2FsaWduO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIFpTdHJlYW0oKSB7XG4gIC8qIG5leHQgaW5wdXQgYnl0ZSAqL1xuICB0aGlzLmlucHV0ID0gbnVsbDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuICB0aGlzLm5leHRfaW4gPSAwO1xuICAvKiBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGF0IGlucHV0ICovXG4gIHRoaXMuYXZhaWxfaW4gPSAwO1xuICAvKiB0b3RhbCBudW1iZXIgb2YgaW5wdXQgYnl0ZXMgcmVhZCBzbyBmYXIgKi9cbiAgdGhpcy50b3RhbF9pbiA9IDA7XG4gIC8qIG5leHQgb3V0cHV0IGJ5dGUgc2hvdWxkIGJlIHB1dCB0aGVyZSAqL1xuICB0aGlzLm91dHB1dCA9IG51bGw7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcbiAgdGhpcy5uZXh0X291dCA9IDA7XG4gIC8qIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG91dHB1dCAqL1xuICB0aGlzLmF2YWlsX291dCA9IDA7XG4gIC8qIHRvdGFsIG51bWJlciBvZiBieXRlcyBvdXRwdXQgc28gZmFyICovXG4gIHRoaXMudG90YWxfb3V0ID0gMDtcbiAgLyogbGFzdCBlcnJvciBtZXNzYWdlLCBOVUxMIGlmIG5vIGVycm9yICovXG4gIHRoaXMubXNnID0gJycvKlpfTlVMTCovO1xuICAvKiBub3QgdmlzaWJsZSBieSBhcHBsaWNhdGlvbnMgKi9cbiAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gIC8qIGJlc3QgZ3Vlc3MgYWJvdXQgdGhlIGRhdGEgdHlwZTogYmluYXJ5IG9yIHRleHQgKi9cbiAgdGhpcy5kYXRhX3R5cGUgPSAyLypaX1VOS05PV04qLztcbiAgLyogYWRsZXIzMiB2YWx1ZSBvZiB0aGUgdW5jb21wcmVzc2VkIGRhdGEgKi9cbiAgdGhpcy5hZGxlciA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWlN0cmVhbTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX2NvbG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZmFjdG9yaWVzX2ZhY3RvcnlCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=