(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tangle-frost/iota-core/dist/data/color"), require("@tangle-frost/iota-core/dist/data/linearGradient"), require("@tangle-frost/iota-core/dist/data/radialGradient"), require("@tangle-frost/iota-core/dist/factories/factoryBase"), require("@tangle-frost/iota-core/dist/helpers/arrayHelper"), require("@tangle-frost/iota-core/dist/helpers/numberHelper"), require("@tangle-frost/iota-core/dist/helpers/objectHelper"), require("@tangle-frost/iota-core/dist/helpers/stringHelper"));
	else if(typeof define === 'function' && define.amd)
		define("@tangle-frost/iota-qr-render", ["@tangle-frost/iota-core/dist/data/color", "@tangle-frost/iota-core/dist/data/linearGradient", "@tangle-frost/iota-core/dist/data/radialGradient", "@tangle-frost/iota-core/dist/factories/factoryBase", "@tangle-frost/iota-core/dist/helpers/arrayHelper", "@tangle-frost/iota-core/dist/helpers/numberHelper", "@tangle-frost/iota-core/dist/helpers/objectHelper", "@tangle-frost/iota-core/dist/helpers/stringHelper"], factory);
	else if(typeof exports === 'object')
		exports["@tangle-frost/iota-qr-render"] = factory(require("@tangle-frost/iota-core/dist/data/color"), require("@tangle-frost/iota-core/dist/data/linearGradient"), require("@tangle-frost/iota-core/dist/data/radialGradient"), require("@tangle-frost/iota-core/dist/factories/factoryBase"), require("@tangle-frost/iota-core/dist/helpers/arrayHelper"), require("@tangle-frost/iota-core/dist/helpers/numberHelper"), require("@tangle-frost/iota-core/dist/helpers/objectHelper"), require("@tangle-frost/iota-core/dist/helpers/stringHelper"));
	else
		root["TangleFrostIotaQrRender"] = factory(root["@tangle-frost/iota-core/dist/data/color"], root["@tangle-frost/iota-core/dist/data/linearGradient"], root["@tangle-frost/iota-core/dist/data/radialGradient"], root["@tangle-frost/iota-core/dist/factories/factoryBase"], root["@tangle-frost/iota-core/dist/helpers/arrayHelper"], root["@tangle-frost/iota-core/dist/helpers/numberHelper"], root["@tangle-frost/iota-core/dist/helpers/objectHelper"], root["@tangle-frost/iota-core/dist/helpers/stringHelper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_color__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_linearGradient__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_radialGradient__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_factories_factoryBase__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_arrayHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_stringHelper__) {
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
/***/ (function(module, exports) {

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var deflate_1 = __importDefault(__webpack_require__(/*! pako/lib/deflate */ "./node_modules/pako/lib/deflate.js"));
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
      }

      if (pb <= pc) {
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
  qrRendererFactory_1.QRRendererFactory.instance().register("txt", function (opts) {
    return new textRenderer_1.TextRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("svg", function (opts) {
    return new svgRenderer_1.SvgRenderer(opts);
  });
  qrRendererFactory_1.QRRendererFactory.instance().register("jpg", function (opts) {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/objectHelper */ "@tangle-frost/iota-core/dist/helpers/objectHelper");
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

    if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
      throw new Error("The options foreground is not a Color object");
    }

    if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
      throw new Error("The options background is not a Color object");
    }
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
        }, _callee);
      }));

      function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      }

      return renderRaw;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            dimensions,
            canvas,
            context,
            x,
            y,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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

      function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      }

      return renderHtml;
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
/***/ (function(module, exports) {

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/objectHelper */ "@tangle-frost/iota-core/dist/helpers/objectHelper");

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

    if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
      throw new Error("The options foreground is not a Color object");
    }

    if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
      throw new Error("The options background is not a Color object");
    }
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cellData) {
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

      function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      }

      return renderRaw;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            img,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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

      function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      }

      return renderHtml;
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
/***/ (function(module, exports) {

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/objectHelper */ "@tangle-frost/iota-core/dist/helpers/objectHelper");

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

    if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
      throw new Error("The options foreground is not a Color object");
    }

    if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
      throw new Error("The options background is not a Color object");
    }
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cellData) {
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

      function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      }

      return renderRaw;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            img,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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

      function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      }

      return renderHtml;
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
/***/ (function(module, exports) {

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var color_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/color */ "@tangle-frost/iota-core/dist/data/color");

var linearGradient_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/linearGradient */ "@tangle-frost/iota-core/dist/data/linearGradient");

var radialGradient_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/data/radialGradient */ "@tangle-frost/iota-core/dist/data/radialGradient");

var arrayHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/arrayHelper */ "@tangle-frost/iota-core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/objectHelper */ "@tangle-frost/iota-core/dist/helpers/objectHelper");
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
    this._options.foregroundType = this._options.foregroundType || "solid";

    if (this._options.foregroundType !== "solid" && this._options.foregroundType !== "linear" && this._options.foregroundType !== "radial") {
      throw new Error("The options foregroundType must be solid, linear or radial");
    }

    if (this._options.foregroundType === "solid") {
      this._options.foreground = this._options.foreground || color_1.Color.fromHex("#000000");

      if (!objectHelper_1.ObjectHelper.isType(this._options.foreground, color_1.Color)) {
        throw new Error("The options foreground is not a Color object");
      }
    } else if (this._options.foregroundType === "linear") {
      if (!objectHelper_1.ObjectHelper.isType(this._options.foregroundLinear, linearGradient_1.LinearGradient)) {
        throw new Error("The options foregroundLinear must be a LinearGradient object");
      }
    } else if (this._options.foregroundType === "radial") {
      if (!objectHelper_1.ObjectHelper.isType(this._options.foregroundRadial, radialGradient_1.RadialGradient)) {
        throw new Error("The options foregroundRadial must be a RadialGradient object");
      }
    }

    this._options.background = this._options.background || color_1.Color.fromHex("#FFFFFF");
    this._options.cssClass = this._options.cssClass || "qr-svg";

    if (!objectHelper_1.ObjectHelper.isType(this._options.background, color_1.Color)) {
      throw new Error("The options background is not a Color object");
    }
  }
  /**
   * Wrap svg content with outer xml.
   * @param width The width of the svg.
   * @param height The height of the svg.
   * @param content The inner content of the svg.
   * @param includeXmlDeclaration Include an xml declaration at the start of the content
   * @returns The SVG content.
   */


  _createClass(SvgRenderer, [{
    key: "renderRaw",

    /**
     * Render the QR code data as an SVG.
     * @param cellData The cell data for the QR code.
     * @param cellSize The size of each cell.
     * @param marginSize The margin to keep around the qr code.
     * @returns The SVG content.
     */
    value: function () {
      var _renderRaw = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cellData) {
        var cellSize,
            marginSize,
            rendered,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cellSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                marginSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
                rendered = this.renderContent(cellData, cellSize, marginSize);
                return _context.abrupt("return", SvgRenderer.renderWrapper(rendered.width, rendered.height, rendered.content, false));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      }

      return renderRaw;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            rendered,
            svg,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cellSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
                marginSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 10;
                rendered = this.renderContent(cellData, cellSize, marginSize);
                svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("width", "".concat(rendered.width, "px"));
                svg.setAttribute("height", "".concat(rendered.height, "px"));
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

      function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      }

      return renderHtml;
    }()
    /**
     * Render the internal content of the svg.
     * @param cellData The cell data to render.
     * @param cellSize The size of the cell.
     * @param marginSize The size of the margin.
     * @returns The dimension and content of the svg.
     */

  }, {
    key: "renderContent",
    value: function renderContent(cellData, cellSize, marginSize) {
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
      var content = "";
      var fillRef = "";

      if (this._options.foregroundType === "linear" || this._options.foregroundType === "radial") {
        fillRef = "url(#qrfill)";
        content += "<defs>";

        if (this._options.foregroundType === "linear") {
          content += this.renderLinearGradient(this._options.foregroundLinear, "qrfill");
        } else {
          content += this.renderRadialGradient(this._options.foregroundRadial, "qrfill");
        }

        content += "</defs>";
      } else {
        fillRef = this._options.foreground.hex();
      }

      content += "<rect x=\"0\" y=\"0\" width=\"".concat(dimensions, "\" height=\"").concat(dimensions, "\" fill=\"").concat(this._options.background.hex(), "\" />");
      var pathContent = "";

      for (var x = 0; x < cellData.length; x++) {
        for (var y = 0; y < cellData[x].length; y++) {
          if (cellData[x][y]) {
            pathContent += "M".concat(x * cellSize + marginSize, ",").concat(y * cellSize + marginSize, " h").concat(cellSize, " v").concat(cellSize, " h-").concat(cellSize, "z ");
          }
        }
      }

      content += "<path fill=\"".concat(fillRef, "\" d=\"").concat(pathContent.trim(), "\"/>");
      return {
        width: dimensions,
        height: dimensions,
        content: content
      };
    }
  }, {
    key: "renderGradientStops",
    value: function renderGradientStops(stops) {
      var render = "";

      for (var i = 0; i < stops.length; i++) {
        render += "<stop offset=\"".concat(stops[i].offsetPercent, "%\" stop-color=\"").concat(stops[i].color.hex(), "\"/>");
      }

      return render;
    }
  }, {
    key: "renderLinearGradient",
    value: function renderLinearGradient(gradient, id) {
      var render = "<linearGradient id=\"".concat(id, "\"");

      if (gradient.angle() !== undefined) {
        render += " gradientTransform=\"rotate(".concat(gradient.angle(), ")\"");
      }

      render += ">".concat(this.renderGradientStops(gradient.stops()), "</linearGradient>");
      return render;
    }
  }, {
    key: "renderRadialGradient",
    value: function renderRadialGradient(gradient, id) {
      var render = "<radialGradient id=\"".concat(id, "\"");

      if (gradient.offsetXPercent() !== undefined) {
        render += " cx=\"".concat(gradient.offsetXPercent(), "%\"");
      }

      if (gradient.offsetYPercent() !== undefined) {
        render += " cy=\"".concat(gradient.offsetYPercent(), "%\"");
      }

      if (gradient.radiusPercent() !== undefined) {
        render += " r=\"".concat(gradient.radiusPercent(), "%\"");
      }

      render += ">".concat(this.renderGradientStops(gradient.stops()), "</radialGradient>");
      return render;
    }
  }], [{
    key: "renderWrapper",
    value: function renderWrapper(width, height, content, includeXmlDeclaration) {
      var text = "";

      if (includeXmlDeclaration) {
        text += "<?xml version=\"1.0\" standalone=\"no\"?>";
      }

      text += "<svg width=\"".concat(width, "\" height=\"").concat(height, "\" xmlns=\"http://www.w3.org/2000/svg\">");
      text += content;
      text += "</svg>";
      return text;
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
/***/ (function(module, exports) {

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cellData) {
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

      function renderRaw(_x) {
        return _renderRaw.apply(this, arguments);
      }

      return renderRaw;
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cellData) {
        var cellSize,
            marginSize,
            raw,
            div,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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

      function renderHtml(_x2) {
        return _renderHtml.apply(this, arguments);
      }

      return renderHtml;
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
/***/ (function(module, exports) {

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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

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

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
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

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


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
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
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

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
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

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
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

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
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

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

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

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
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

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
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

/* eslint-disable space-unary-ops */

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

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

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
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

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
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
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
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
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
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
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
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

/***/ "@tangle-frost/iota-core/dist/data/linearGradient":
/*!*******************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/data/linearGradient" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_linearGradient__;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/data/radialGradient":
/*!*******************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/data/radialGradient" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_data_radialGradient__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL2ZhY3Rvcmllcy9xclJlbmRlcmVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaGVscGVycy9pbWFnZUhlbHBlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaW1hZ2VzL2pwZWdFbmNvZGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9pbWFnZXMvcG5nRW5jb2Rlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vc3JjL2luaXRSZW5kZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy9jYW52YXNSZW5kZXJlck9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy90ZXh0UmVuZGVyZXJPcHRpb25zLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL2RlZmxhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3V0aWxzL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9hZGxlcjMyLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi90cmVlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3pzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci9leHRlcm5hbCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9saW5lYXJHcmFkaWVudFwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7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QSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQTs7QUFDQSxVQUFJLE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBSSxDQUFKO0FBQ0EsVUFBTSxFQUFFLEdBQUcsQ0FBWDtBQUNBLFVBQU0sR0FBRyxHQUFHLEVBQVo7O0FBQ0EsV0FBSyxDQUFDLEdBQUcsQ0FBVCxFQUFZLENBQUMsR0FBRyxFQUFoQixFQUFvQixFQUFFLENBQXRCLEVBQXlCO0FBQ3JCLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBRCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBRUEsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBRUE7O0FBQ0EsWUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQW5CO0FBQXlCOztBQUN6QixZQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBckI7QUFDQSxZQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBbkI7QUFDQSxZQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBbkI7QUFFQSxZQUFJLENBQUMsT0FBRCxDQUFKLEdBQWdCLEtBQUssR0FBRyxLQUF4QjtBQUErQjs7QUFDL0IsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFYLENBQUosR0FBb0IsS0FBSyxHQUFHLEtBQTVCO0FBRUEsWUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBVCxJQUFrQixXQUE3QjtBQUEwQzs7QUFDMUMsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFYLENBQUosR0FBb0IsS0FBSyxHQUFHLEVBQTVCO0FBQWdDOztBQUNoQyxZQUFJLENBQUMsT0FBTyxHQUFHLENBQVgsQ0FBSixHQUFvQixLQUFLLEdBQUcsRUFBNUI7QUFFQTs7QUFDQSxhQUFLLEdBQUcsSUFBSSxHQUFHLElBQWY7QUFBcUI7O0FBQ3JCLGFBQUssR0FBRyxJQUFJLEdBQUcsSUFBZjtBQUNBLGFBQUssR0FBRyxJQUFJLEdBQUcsSUFBZjtBQUVBOztBQUNBLFlBQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQVQsSUFBa0IsV0FBN0I7QUFBMEM7O0FBQzFDLFlBQU0sRUFBRSxHQUFHLFlBQVksS0FBWixHQUFvQixFQUEvQjtBQUFtQzs7QUFDbkMsWUFBTSxFQUFFLEdBQUcsY0FBYyxLQUFkLEdBQXNCLEVBQWpDO0FBQXFDOztBQUNyQyxZQUFNLEVBQUUsR0FBRyxLQUFLLEdBQUcsV0FBbkI7QUFBZ0M7O0FBRWhDLFlBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFuQjtBQUF1Qjs7QUFDdkIsWUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW5CO0FBRUEsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFYLENBQUosR0FBb0IsR0FBRyxHQUFHLEVBQTFCO0FBQThCOztBQUM5QixZQUFJLENBQUMsT0FBTyxHQUFHLENBQVgsQ0FBSixHQUFvQixHQUFHLEdBQUcsRUFBMUI7QUFDQSxZQUFJLENBQUMsT0FBTyxHQUFHLENBQVgsQ0FBSixHQUFvQixHQUFHLEdBQUcsRUFBMUI7QUFDQSxZQUFJLENBQUMsT0FBTyxHQUFHLENBQVgsQ0FBSixHQUFvQixHQUFHLEdBQUcsRUFBMUI7QUFFQSxlQUFPLElBQUksQ0FBWDtBQUFjO0FBQ2pCO0FBRUQ7OztBQUNBLGFBQU8sR0FBRyxDQUFWOztBQUNBLFdBQUssQ0FBQyxHQUFHLENBQVQsRUFBWSxDQUFDLEdBQUcsRUFBaEIsRUFBb0IsRUFBRSxDQUF0QixFQUF5QjtBQUNyQixVQUFFLEdBQUcsSUFBSSxDQUFDLE9BQUQsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUNBLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQVgsQ0FBVDtBQUVBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFwQjtBQUVBOztBQUNBLFlBQUksT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUF2QjtBQUErQjs7QUFDL0IsWUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQXpCO0FBQ0EsWUFBSSxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQXZCO0FBQ0EsWUFBSSxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQXZCO0FBRUEsWUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFnQixPQUFPLEdBQUcsT0FBMUI7QUFBbUM7O0FBQ25DLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBWCxDQUFKLEdBQXFCLE9BQU8sR0FBRyxPQUEvQjtBQUVBLFlBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQVgsSUFBc0IsV0FBbkM7QUFBZ0Q7O0FBQ2hELFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBWCxDQUFKLEdBQXFCLE9BQU8sR0FBRyxJQUEvQjtBQUFxQzs7QUFDckMsWUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFYLENBQUosR0FBcUIsT0FBTyxHQUFHLElBQS9CO0FBRUE7O0FBQ0EsZUFBTyxHQUFHLE1BQU0sR0FBRyxNQUFuQjtBQUEyQjs7QUFDM0IsZUFBTyxHQUFHLE1BQU0sR0FBRyxNQUFuQjtBQUNBLGVBQU8sR0FBRyxNQUFNLEdBQUcsTUFBbkI7QUFFQTs7QUFDQSxZQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFYLElBQXNCLFdBQW5DO0FBQWdEOztBQUNoRCxZQUFNLElBQUksR0FBRyxZQUFZLE9BQVosR0FBc0IsSUFBbkM7QUFBeUM7O0FBQ3pDLFlBQU0sSUFBSSxHQUFHLGNBQWMsT0FBZCxHQUF3QixJQUFyQztBQUEyQzs7QUFDM0MsWUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLFdBQXZCO0FBQW9DOztBQUVwQyxZQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBdkI7QUFBNkI7O0FBQzdCLFlBQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUF2QjtBQUVBLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBWCxDQUFKLEdBQXFCLEtBQUssR0FBRyxJQUE3QjtBQUFtQzs7QUFDbkMsWUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFYLENBQUosR0FBcUIsS0FBSyxHQUFHLElBQTdCO0FBQ0EsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFYLENBQUosR0FBb0IsS0FBSyxHQUFHLElBQTVCO0FBQ0EsWUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFYLENBQUosR0FBcUIsS0FBSyxHQUFHLElBQTdCO0FBRUEsZUFBTztBQUFJO0FBQ2QsT0ExSDRDLENBNEg3Qzs7O0FBQ0EsVUFBSSxTQUFKOztBQUNBLFdBQUssQ0FBQyxHQUFHLENBQVQsRUFBWSxDQUFDLEdBQUcsR0FBaEIsRUFBcUIsRUFBRSxDQUF2QixFQUEwQjtBQUN0QjtBQUNBLGlCQUFTLEdBQUcsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEtBQUssQ0FBQyxDQUFELENBQTNCO0FBQ0EsYUFBSyxnQkFBTCxDQUFzQixDQUF0QixJQUE0QixTQUFTLEdBQUcsQ0FBYixHQUFvQixTQUFTLEdBQUcsR0FBYixHQUFvQixDQUF2QyxHQUE4QyxTQUFTLEdBQUcsR0FBYixHQUFvQixDQUE1RixDQUhzQixDQUl0QjtBQUVIOztBQUNELGFBQU8sS0FBSyxnQkFBWjtBQUNIO0FBRUQ7Ozs7Z0NBQ2lCO0FBQ2IsV0FBSyxTQUFMLENBQWUsTUFBZixFQURhLENBQ1c7O0FBQ3hCLFdBQUssU0FBTCxDQUFlLEVBQWYsRUFGYSxDQUVPOztBQUNwQixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBSGEsQ0FHUzs7QUFDdEIsV0FBSyxTQUFMLENBQWUsSUFBZixFQUphLENBSVM7O0FBQ3RCLFdBQUssU0FBTCxDQUFlLElBQWYsRUFMYSxDQUtTOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBTmEsQ0FNUzs7QUFDdEIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQVBhLENBT007O0FBQ25CLFdBQUssU0FBTCxDQUFlLENBQWYsRUFSYSxDQVFNOztBQUNuQixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBVGEsQ0FTTTs7QUFDbkIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQVZhLENBVU07O0FBQ25CLFdBQUssU0FBTCxDQUFlLENBQWYsRUFYYSxDQVdNOztBQUNuQixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBWmEsQ0FZTTs7QUFDbkIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQWJhLENBYU07O0FBQ25CLFdBQUssU0FBTCxDQUFlLENBQWYsRUFkYSxDQWNNO0FBQ3RCO0FBRUQ7Ozs7OEJBQ2tCLEssRUFBZSxNLEVBQWM7QUFDM0MsV0FBSyxTQUFMLENBQWUsTUFBZixFQUQyQyxDQUNuQjs7QUFDeEIsV0FBSyxTQUFMLENBQWUsRUFBZixFQUYyQyxDQUVyQjs7QUFDdEIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQUgyQyxDQUdyQjs7QUFDdEIsV0FBSyxTQUFMLENBQWUsTUFBZjtBQUNBLFdBQUssU0FBTCxDQUFlLEtBQWY7QUFDQSxXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBTjJDLENBTXJCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBUDJDLENBT3JCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBUjJDLENBUXJCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBVDJDLENBU3JCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBVjJDLENBVXJCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBWDJDLENBV3JCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBWjJDLENBWXJCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBYjJDLENBYXJCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBZDJDLENBY3JCOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBZjJDLENBZXJCO0FBQ3pCO0FBRUQ7Ozs7K0JBQ2dCO0FBQ1osV0FBSyxTQUFMLENBQWUsTUFBZixFQURZLENBQ1k7O0FBQ3hCLFdBQUssU0FBTCxDQUFlLEdBQWYsRUFGWSxDQUVZOztBQUN4QixXQUFLLFNBQUwsQ0FBZSxDQUFmOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBcEIsRUFBd0IsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixhQUFLLFNBQUwsQ0FBZSxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQWY7QUFDSDs7QUFDRCxXQUFLLFNBQUwsQ0FBZSxDQUFmOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBcEIsRUFBd0IsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixhQUFLLFNBQUwsQ0FBZSxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQWY7QUFDSDtBQUNKO0FBRUQ7Ozs7K0JBQ2dCO0FBQ1osV0FBSyxTQUFMLENBQWUsTUFBZixFQURZLENBQ1k7O0FBQ3hCLFdBQUssU0FBTCxDQUFlLE1BQWYsRUFGWSxDQUVZOztBQUV4QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBSlksQ0FJTzs7QUFDbkIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxFQUFwQixFQUF3QixDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLGFBQUssU0FBTCxDQUFlLFdBQVcsQ0FBQyx3QkFBWixDQUFxQyxDQUFDLEdBQUcsQ0FBekMsQ0FBZjtBQUNIOztBQUNELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLElBQUksRUFBckIsRUFBeUIsQ0FBQyxFQUExQixFQUE4QjtBQUMxQixhQUFLLFNBQUwsQ0FBZSxXQUFXLENBQUMsdUJBQVosQ0FBb0MsQ0FBcEMsQ0FBZjtBQUNIOztBQUVELFdBQUssU0FBTCxDQUFlLElBQWYsRUFaWSxDQVlVOztBQUN0QixXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCLENBQUMsRUFBekIsRUFBNkI7QUFDekIsYUFBSyxTQUFMLENBQWUsV0FBVyxDQUFDLHdCQUFaLENBQXFDLENBQUMsR0FBRyxDQUF6QyxDQUFmO0FBQ0g7O0FBQ0QsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsSUFBSSxHQUFyQixFQUEwQixDQUFDLEVBQTNCLEVBQStCO0FBQzNCLGFBQUssU0FBTCxDQUFlLFdBQVcsQ0FBQyx1QkFBWixDQUFvQyxDQUFwQyxDQUFmO0FBQ0g7O0FBRUQsV0FBSyxTQUFMLENBQWUsQ0FBZixFQXBCWSxDQW9CTzs7QUFDbkIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxFQUFwQixFQUF3QixDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLGFBQUssU0FBTCxDQUFlLFdBQVcsQ0FBQywwQkFBWixDQUF1QyxDQUFDLEdBQUcsQ0FBM0MsQ0FBZjtBQUNIOztBQUNELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLElBQUksRUFBckIsRUFBeUIsQ0FBQyxFQUExQixFQUE4QjtBQUMxQixhQUFLLFNBQUwsQ0FBZSxXQUFXLENBQUMseUJBQVosQ0FBc0MsQ0FBdEMsQ0FBZjtBQUNIOztBQUVELFdBQUssU0FBTCxDQUFlLElBQWYsRUE1QlksQ0E0QlU7O0FBQ3RCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBcEIsRUFBd0IsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixhQUFLLFNBQUwsQ0FBZSxXQUFXLENBQUMsMEJBQVosQ0FBdUMsQ0FBQyxHQUFHLENBQTNDLENBQWY7QUFDSDs7QUFDRCxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxJQUFJLEdBQXJCLEVBQTBCLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsYUFBSyxTQUFMLENBQWUsV0FBVyxDQUFDLHlCQUFaLENBQXNDLENBQXRDLENBQWY7QUFDSDtBQUNKO0FBRUQ7Ozs7K0JBQ2dCO0FBQ1osV0FBSyxTQUFMLENBQWUsTUFBZixFQURZLENBQ1k7O0FBQ3hCLFdBQUssU0FBTCxDQUFlLEVBQWYsRUFGWSxDQUVROztBQUNwQixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBSFksQ0FHTzs7QUFDbkIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQUpZLENBSU87O0FBQ25CLFdBQUssU0FBTCxDQUFlLENBQWYsRUFMWSxDQUtPOztBQUNuQixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBTlksQ0FNTzs7QUFDbkIsV0FBSyxTQUFMLENBQWUsSUFBZixFQVBZLENBT1U7O0FBQ3RCLFdBQUssU0FBTCxDQUFlLENBQWYsRUFSWSxDQVFPOztBQUNuQixXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBVFksQ0FTVTs7QUFDdEIsV0FBSyxTQUFMLENBQWUsQ0FBZixFQVZZLENBVU87O0FBQ25CLFdBQUssU0FBTCxDQUFlLElBQWYsRUFYWSxDQVdVOztBQUN0QixXQUFLLFNBQUwsQ0FBZSxDQUFmLEVBWlksQ0FZTztBQUN0QjtBQUVEOzs7OzhCQUNrQixHLEVBQWUsSyxFQUFpQixRLEVBQWtCLEksRUFBa0IsSSxFQUFnQjtBQUNsRyxVQUFJLEVBQUUsR0FBRyxRQUFUO0FBQ0EsVUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUQsQ0FBaEI7QUFDQSxVQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBRCxDQUF0QjtBQUNBLFVBQUksR0FBSjtBQUNBLFVBQU0sR0FBRyxHQUFHLEVBQVo7QUFDQSxVQUFNLEdBQUcsR0FBRyxFQUFaO0FBQ0EsVUFBTSxHQUFHLEdBQUcsRUFBWjtBQUNBLFVBQU0sTUFBTSxHQUFHLEtBQUssU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBcEIsQ0FBZixDQVJrRyxDQVNsRzs7QUFDQSxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCLEVBQUUsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBSyxHQUFMLENBQVMsV0FBVyxDQUFDLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBVCxJQUFtQyxNQUFNLENBQUMsQ0FBRCxDQUF6QztBQUNIOztBQUNELFVBQU0sSUFBSSxHQUFHLEtBQUssR0FBTCxDQUFTLENBQVQsSUFBYyxFQUEzQjtBQUNBLFFBQUUsR0FBRyxLQUFLLEdBQUwsQ0FBUyxDQUFULENBQUwsQ0Fka0csQ0FlbEc7O0FBQ0EsVUFBSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNaLGFBQUssU0FBTCxDQUFlLElBQUksQ0FBQyxDQUFELENBQW5CLEVBRFksQ0FDYTtBQUM1QixPQUZELE1BRU87QUFDSCxXQUFHLEdBQUcsUUFBUSxJQUFkO0FBQ0EsYUFBSyxTQUFMLENBQWUsSUFBSSxDQUFDLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBRCxDQUFuQjtBQUNBLGFBQUssU0FBTCxDQUFlLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBZjtBQUNILE9BdEJpRyxDQXVCbEc7OztBQUNBLFVBQUksT0FBTyxHQUFHLEVBQWQsQ0F4QmtHLENBd0JoRjs7QUFDbEIsYUFBUSxPQUFPLEdBQUcsQ0FBWCxJQUFrQixLQUFLLEdBQUwsQ0FBUyxPQUFULE1BQXNCLENBQS9DLEVBQW1ELE9BQU8sRUFBMUQsRUFBOEQsQ0FBRyxDQXpCaUMsQ0EwQmxHOzs7QUFDQSxVQUFJLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtBQUNmLGFBQUssU0FBTCxDQUFlLEdBQWY7QUFDQSxlQUFPLEVBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBSSxHQUFKOztBQUNBLGFBQU8sQ0FBQyxJQUFJLE9BQVosRUFBcUI7QUFDakIsWUFBTSxRQUFRLEdBQUcsQ0FBakI7O0FBQ0EsZUFBUSxLQUFLLEdBQUwsQ0FBUyxDQUFULE1BQWdCLENBQWpCLElBQXdCLENBQUMsSUFBSSxPQUFwQyxFQUE4QyxFQUFFLENBQWhELEVBQW1ELENBQUc7O0FBQ3RELFlBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFuQjs7QUFDQSxZQUFJLFFBQVEsSUFBSSxHQUFoQixFQUFxQjtBQUNqQixhQUFHLEdBQUcsUUFBUSxJQUFJLENBQWxCOztBQUNBLGVBQUssSUFBSSxRQUFRLEdBQUcsQ0FBcEIsRUFBdUIsUUFBUSxJQUFJLEdBQW5DLEVBQXdDLEVBQUUsUUFBMUMsRUFBb0Q7QUFDaEQsaUJBQUssU0FBTCxDQUFlLFNBQWY7QUFDSDs7QUFDRCxrQkFBUSxHQUFHLFFBQVEsR0FBRyxHQUF0QjtBQUNIOztBQUNELFdBQUcsR0FBRyxRQUFRLEtBQUssR0FBTCxDQUFTLENBQVQsQ0FBZDtBQUNBLGFBQUssU0FBTCxDQUFlLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFiLElBQWtCLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbkIsQ0FBbkI7QUFDQSxhQUFLLFNBQUwsQ0FBZSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWY7QUFDQSxTQUFDO0FBQ0o7O0FBQ0QsVUFBSSxPQUFPLEtBQUssR0FBaEIsRUFBcUI7QUFDakIsYUFBSyxTQUFMLENBQWUsR0FBZjtBQUNIOztBQUNELGFBQU8sRUFBUDtBQUNIOzs7OztBQXRzQkQ7OztBQUN3Qix1Q0FBcUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxDQUFyQztBQUN4Qjs7QUFDd0Isc0NBQW9DLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsRUFBL0IsRUFBbUMsRUFBbkMsQ0FBcEM7QUFDeEI7O0FBQ3dCLHVDQUFxQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLEVBQWlELElBQWpELENBQXJDO0FBQ3hCOztBQUN3QixzQ0FBb0MsQ0FDeEQsSUFEd0QsRUFDbEQsSUFEa0QsRUFDNUMsSUFENEMsRUFDdEMsSUFEc0MsRUFDaEMsSUFEZ0MsRUFDMUIsSUFEMEIsRUFDcEIsSUFEb0IsRUFDZCxJQURjLEVBRXhELElBRndELEVBRWxELElBRmtELEVBRTVDLElBRjRDLEVBRXRDLElBRnNDLEVBRWhDLElBRmdDLEVBRTFCLElBRjBCLEVBRXBCLElBRm9CLEVBRWQsSUFGYyxFQUd4RCxJQUh3RCxFQUdsRCxJQUhrRCxFQUc1QyxJQUg0QyxFQUd0QyxJQUhzQyxFQUdoQyxJQUhnQyxFQUcxQixJQUgwQixFQUdwQixJQUhvQixFQUdkLElBSGMsRUFJeEQsSUFKd0QsRUFJbEQsSUFKa0QsRUFJNUMsSUFKNEMsRUFJdEMsSUFKc0MsRUFJaEMsSUFKZ0MsRUFJMUIsSUFKMEIsRUFJcEIsSUFKb0IsRUFJZCxJQUpjLEVBS3hELElBTHdELEVBS2xELElBTGtELEVBSzVDLElBTDRDLEVBS3RDLElBTHNDLEVBS2hDLElBTGdDLEVBSzFCLElBTDBCLEVBS3BCLElBTG9CLEVBS2QsSUFMYyxFQU14RCxJQU53RCxFQU1sRCxJQU5rRCxFQU01QyxJQU40QyxFQU10QyxJQU5zQyxFQU1oQyxJQU5nQyxFQU0xQixJQU4wQixFQU1wQixJQU5vQixFQU1kLElBTmMsRUFPeEQsSUFQd0QsRUFPbEQsSUFQa0QsRUFPNUMsSUFQNEMsRUFPdEMsSUFQc0MsRUFPaEMsSUFQZ0MsRUFPMUIsSUFQMEIsRUFPcEIsSUFQb0IsRUFPZCxJQVBjLEVBUXhELElBUndELEVBUWxELElBUmtELEVBUTVDLElBUjRDLEVBUXRDLElBUnNDLEVBUWhDLElBUmdDLEVBUTFCLElBUjBCLEVBUXBCLElBUm9CLEVBUWQsSUFSYyxFQVN4RCxJQVR3RCxFQVNsRCxJQVRrRCxFQVM1QyxJQVQ0QyxFQVN0QyxJQVRzQyxFQVNoQyxJQVRnQyxFQVMxQixJQVQwQixFQVNwQixJQVRvQixFQVNkLElBVGMsRUFVeEQsSUFWd0QsRUFVbEQsSUFWa0QsRUFVNUMsSUFWNEMsRUFVdEMsSUFWc0MsRUFVaEMsSUFWZ0MsRUFVMUIsSUFWMEIsRUFVcEIsSUFWb0IsRUFVZCxJQVZjLEVBV3hELElBWHdELEVBV2xELElBWGtELEVBVzVDLElBWDRDLEVBV3RDLElBWHNDLEVBV2hDLElBWGdDLEVBVzFCLElBWDBCLEVBV3BCLElBWG9CLEVBV2QsSUFYYyxFQVl4RCxJQVp3RCxFQVlsRCxJQVprRCxFQVk1QyxJQVo0QyxFQVl0QyxJQVpzQyxFQVloQyxJQVpnQyxFQVkxQixJQVowQixFQVlwQixJQVpvQixFQVlkLElBWmMsRUFheEQsSUFid0QsRUFhbEQsSUFia0QsRUFhNUMsSUFiNEMsRUFhdEMsSUFic0MsRUFhaEMsSUFiZ0MsRUFhMUIsSUFiMEIsRUFhcEIsSUFib0IsRUFhZCxJQWJjLEVBY3hELElBZHdELEVBY2xELElBZGtELEVBYzVDLElBZDRDLEVBY3RDLElBZHNDLEVBY2hDLElBZGdDLEVBYzFCLElBZDBCLEVBY3BCLElBZG9CLEVBY2QsSUFkYyxFQWV4RCxJQWZ3RCxFQWVsRCxJQWZrRCxFQWU1QyxJQWY0QyxFQWV0QyxJQWZzQyxFQWVoQyxJQWZnQyxFQWUxQixJQWYwQixFQWVwQixJQWZvQixFQWVkLElBZmMsRUFnQnhELElBaEJ3RCxFQWdCbEQsSUFoQmtELEVBZ0I1QyxJQWhCNEMsRUFnQnRDLElBaEJzQyxFQWdCaEMsSUFoQmdDLEVBZ0IxQixJQWhCMEIsRUFnQnBCLElBaEJvQixFQWdCZCxJQWhCYyxFQWlCeEQsSUFqQndELEVBaUJsRCxJQWpCa0QsRUFpQjVDLElBakI0QyxFQWlCdEMsSUFqQnNDLEVBaUJoQyxJQWpCZ0MsRUFpQjFCLElBakIwQixFQWlCcEIsSUFqQm9CLEVBaUJkLElBakJjLEVBa0J4RCxJQWxCd0QsRUFrQmxELElBbEJrRCxFQWtCNUMsSUFsQjRDLEVBa0J0QyxJQWxCc0MsRUFrQmhDLElBbEJnQyxFQWtCMUIsSUFsQjBCLEVBa0JwQixJQWxCb0IsRUFrQmQsSUFsQmMsRUFtQnhELElBbkJ3RCxFQW1CbEQsSUFuQmtELEVBbUI1QyxJQW5CNEMsRUFtQnRDLElBbkJzQyxFQW1CaEMsSUFuQmdDLEVBbUIxQixJQW5CMEIsRUFtQnBCLElBbkJvQixFQW1CZCxJQW5CYyxFQW9CeEQsSUFwQndELEVBb0JsRCxJQXBCa0QsRUFvQjVDLElBcEI0QyxFQW9CdEMsSUFwQnNDLEVBb0JoQyxJQXBCZ0MsRUFvQjFCLElBcEIwQixFQW9CcEIsSUFwQm9CLEVBb0JkLElBcEJjLEVBcUJ4RCxJQXJCd0QsRUFxQmxELElBckJrRCxDQUFwQztBQXdCeEI7O0FBQ3dCLHlDQUF1QyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLEVBQWlELENBQWpELENBQXZDO0FBQ3hCOztBQUN3Qix3Q0FBc0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxDQUF0QztBQUN4Qjs7QUFDd0IseUNBQXVDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsRUFBaUQsSUFBakQsQ0FBdkM7QUFDeEI7O0FBQ3dCLHdDQUFzQyxDQUMxRCxJQUQwRCxFQUNwRCxJQURvRCxFQUM5QyxJQUQ4QyxFQUN4QyxJQUR3QyxFQUNsQyxJQURrQyxFQUM1QixJQUQ0QixFQUN0QixJQURzQixFQUNoQixJQURnQixFQUUxRCxJQUYwRCxFQUVwRCxJQUZvRCxFQUU5QyxJQUY4QyxFQUV4QyxJQUZ3QyxFQUVsQyxJQUZrQyxFQUU1QixJQUY0QixFQUV0QixJQUZzQixFQUVoQixJQUZnQixFQUcxRCxJQUgwRCxFQUdwRCxJQUhvRCxFQUc5QyxJQUg4QyxFQUd4QyxJQUh3QyxFQUdsQyxJQUhrQyxFQUc1QixJQUg0QixFQUd0QixJQUhzQixFQUdoQixJQUhnQixFQUkxRCxJQUowRCxFQUlwRCxJQUpvRCxFQUk5QyxJQUo4QyxFQUl4QyxJQUp3QyxFQUlsQyxJQUprQyxFQUk1QixJQUo0QixFQUl0QixJQUpzQixFQUloQixJQUpnQixFQUsxRCxJQUwwRCxFQUtwRCxJQUxvRCxFQUs5QyxJQUw4QyxFQUt4QyxJQUx3QyxFQUtsQyxJQUxrQyxFQUs1QixJQUw0QixFQUt0QixJQUxzQixFQUtoQixJQUxnQixFQU0xRCxJQU4wRCxFQU1wRCxJQU5vRCxFQU05QyxJQU44QyxFQU14QyxJQU53QyxFQU1sQyxJQU5rQyxFQU01QixJQU40QixFQU10QixJQU5zQixFQU1oQixJQU5nQixFQU8xRCxJQVAwRCxFQU9wRCxJQVBvRCxFQU85QyxJQVA4QyxFQU94QyxJQVB3QyxFQU9sQyxJQVBrQyxFQU81QixJQVA0QixFQU90QixJQVBzQixFQU9oQixJQVBnQixFQVExRCxJQVIwRCxFQVFwRCxJQVJvRCxFQVE5QyxJQVI4QyxFQVF4QyxJQVJ3QyxFQVFsQyxJQVJrQyxFQVE1QixJQVI0QixFQVF0QixJQVJzQixFQVFoQixJQVJnQixFQVMxRCxJQVQwRCxFQVNwRCxJQVRvRCxFQVM5QyxJQVQ4QyxFQVN4QyxJQVR3QyxFQVNsQyxJQVRrQyxFQVM1QixJQVQ0QixFQVN0QixJQVRzQixFQVNoQixJQVRnQixFQVUxRCxJQVYwRCxFQVVwRCxJQVZvRCxFQVU5QyxJQVY4QyxFQVV4QyxJQVZ3QyxFQVVsQyxJQVZrQyxFQVU1QixJQVY0QixFQVV0QixJQVZzQixFQVVoQixJQVZnQixFQVcxRCxJQVgwRCxFQVdwRCxJQVhvRCxFQVc5QyxJQVg4QyxFQVd4QyxJQVh3QyxFQVdsQyxJQVhrQyxFQVc1QixJQVg0QixFQVd0QixJQVhzQixFQVdoQixJQVhnQixFQVkxRCxJQVowRCxFQVlwRCxJQVpvRCxFQVk5QyxJQVo4QyxFQVl4QyxJQVp3QyxFQVlsQyxJQVprQyxFQVk1QixJQVo0QixFQVl0QixJQVpzQixFQVloQixJQVpnQixFQWExRCxJQWIwRCxFQWFwRCxJQWJvRCxFQWE5QyxJQWI4QyxFQWF4QyxJQWJ3QyxFQWFsQyxJQWJrQyxFQWE1QixJQWI0QixFQWF0QixJQWJzQixFQWFoQixJQWJnQixFQWMxRCxJQWQwRCxFQWNwRCxJQWRvRCxFQWM5QyxJQWQ4QyxFQWN4QyxJQWR3QyxFQWNsQyxJQWRrQyxFQWM1QixJQWQ0QixFQWN0QixJQWRzQixFQWNoQixJQWRnQixFQWUxRCxJQWYwRCxFQWVwRCxJQWZvRCxFQWU5QyxJQWY4QyxFQWV4QyxJQWZ3QyxFQWVsQyxJQWZrQyxFQWU1QixJQWY0QixFQWV0QixJQWZzQixFQWVoQixJQWZnQixFQWdCMUQsSUFoQjBELEVBZ0JwRCxJQWhCb0QsRUFnQjlDLElBaEI4QyxFQWdCeEMsSUFoQndDLEVBZ0JsQyxJQWhCa0MsRUFnQjVCLElBaEI0QixFQWdCdEIsSUFoQnNCLEVBZ0JoQixJQWhCZ0IsRUFpQjFELElBakIwRCxFQWlCcEQsSUFqQm9ELEVBaUI5QyxJQWpCOEMsRUFpQnhDLElBakJ3QyxFQWlCbEMsSUFqQmtDLEVBaUI1QixJQWpCNEIsRUFpQnRCLElBakJzQixFQWlCaEIsSUFqQmdCLEVBa0IxRCxJQWxCMEQsRUFrQnBELElBbEJvRCxFQWtCOUMsSUFsQjhDLEVBa0J4QyxJQWxCd0MsRUFrQmxDLElBbEJrQyxFQWtCNUIsSUFsQjRCLEVBa0J0QixJQWxCc0IsRUFrQmhCLElBbEJnQixFQW1CMUQsSUFuQjBELEVBbUJwRCxJQW5Cb0QsRUFtQjlDLElBbkI4QyxFQW1CeEMsSUFuQndDLEVBbUJsQyxJQW5Ca0MsRUFtQjVCLElBbkI0QixFQW1CdEIsSUFuQnNCLEVBbUJoQixJQW5CZ0IsRUFvQjFELElBcEIwRCxFQW9CcEQsSUFwQm9ELEVBb0I5QyxJQXBCOEMsRUFvQnhDLElBcEJ3QyxFQW9CbEMsSUFwQmtDLEVBb0I1QixJQXBCNEIsRUFvQnRCLElBcEJzQixFQW9CaEIsSUFwQmdCLEVBcUIxRCxJQXJCMEQsRUFxQnBELElBckJvRCxDQUF0QztBQXdCeEI7O0FBQ3dCLHNCQUFvQixDQUN4QyxDQUR3QyxFQUNyQyxDQURxQyxFQUNsQyxDQURrQyxFQUMvQixDQUQrQixFQUM1QixFQUQ0QixFQUN4QixFQUR3QixFQUNwQixFQURvQixFQUNoQixFQURnQixFQUV4QyxDQUZ3QyxFQUVyQyxDQUZxQyxFQUVsQyxDQUZrQyxFQUUvQixFQUYrQixFQUUzQixFQUYyQixFQUV2QixFQUZ1QixFQUVuQixFQUZtQixFQUVmLEVBRmUsRUFHeEMsQ0FId0MsRUFHckMsQ0FIcUMsRUFHbEMsRUFIa0MsRUFHOUIsRUFIOEIsRUFHMUIsRUFIMEIsRUFHdEIsRUFIc0IsRUFHbEIsRUFIa0IsRUFHZCxFQUhjLEVBSXhDLENBSndDLEVBSXJDLEVBSnFDLEVBSWpDLEVBSmlDLEVBSTdCLEVBSjZCLEVBSXpCLEVBSnlCLEVBSXJCLEVBSnFCLEVBSWpCLEVBSmlCLEVBSWIsRUFKYSxFQUt4QyxFQUx3QyxFQUtwQyxFQUxvQyxFQUtoQyxFQUxnQyxFQUs1QixFQUw0QixFQUt4QixFQUx3QixFQUtwQixFQUxvQixFQUtoQixFQUxnQixFQUtaLEVBTFksRUFNeEMsRUFOd0MsRUFNcEMsRUFOb0MsRUFNaEMsRUFOZ0MsRUFNNUIsRUFONEIsRUFNeEIsRUFOd0IsRUFNcEIsRUFOb0IsRUFNaEIsRUFOZ0IsRUFNWixFQU5ZLEVBT3hDLEVBUHdDLEVBT3BDLEVBUG9DLEVBT2hDLEVBUGdDLEVBTzVCLEVBUDRCLEVBT3hCLEVBUHdCLEVBT3BCLEVBUG9CLEVBT2hCLEVBUGdCLEVBT1osRUFQWSxFQVF4QyxFQVJ3QyxFQVFwQyxFQVJvQyxFQVFoQyxFQVJnQyxFQVE1QixFQVI0QixFQVF4QixFQVJ3QixFQVFwQixFQVJvQixFQVFoQixFQVJnQixFQVFaLEVBUlksQ0FBcEI7QUFoRTVCLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBOzs7Ozs7SUFJYSxVOzs7Ozs7Ozs7O0FBQ1Q7Ozs7Ozs7MkJBT2MsSSxFQUFxQixDLEVBQVcsQyxFQUFTO0FBQ25ELFVBQU0sRUFBRSxHQUFHLENBQVg7QUFDQSxVQUFNLFVBQVUsR0FBRyxLQUFuQjtBQUNBLFVBQU0sSUFBSSxHQUFVLFNBQXBCO0FBQ0EsVUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFKLENBQWUsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLFVBQVIsR0FBcUIsSUFBSSxDQUFDLE1BQTFCLEdBQW1DLEdBQWxELENBQWI7QUFDQSxVQUFNLEVBQUUsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxDQUFYOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsQ0FBcEIsRUFBdUIsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixZQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsRUFBRSxDQUFDLENBQUQsQ0FBWjtBQUNIOztBQUNELFVBQUksTUFBTSxHQUFHLENBQWI7QUFFQSxVQUFNLElBQUksR0FBRyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsRUFBN0IsRUFBaUMsVUFBakMsQ0FBYjtBQUVBLFdBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBN0I7QUFDQSxZQUFNLElBQUksQ0FBVjtBQUNBLFdBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixNQUE5QjtBQUNBLFlBQU0sSUFBSSxDQUFWO0FBQ0EsV0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixDQUE3QjtBQUNBLFlBQU0sSUFBSSxDQUFWO0FBQ0EsV0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixDQUE3QjtBQUNBLFlBQU0sSUFBSSxDQUFWO0FBQ0EsVUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlLElBQUksQ0FBQyxLQUFwQjtBQUNBLFlBQU07QUFDTixVQUFJLENBQUMsTUFBRCxDQUFKLEdBQWUsSUFBSSxDQUFDLEtBQXBCO0FBQ0EsWUFBTTtBQUNOLFVBQUksQ0FBQyxNQUFELENBQUosR0FBZSxDQUFmLENBekJtRCxDQXlCakM7O0FBQ2xCLFlBQU07QUFDTixVQUFJLENBQUMsTUFBRCxDQUFKLEdBQWUsQ0FBZixDQTNCbUQsQ0EyQmpDOztBQUNsQixZQUFNO0FBQ04sVUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlLENBQWYsQ0E3Qm1ELENBNkJqQzs7QUFDbEIsWUFBTTtBQUNOLFdBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLE1BQU0sR0FBRyxFQUF4QixFQUE0QixFQUE1QixDQUE3QjtBQUNBLFlBQU0sSUFBSSxDQUFWLENBaENtRCxDQWdDdEM7QUFFYjs7QUFDQSxXQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLENBQTdCO0FBQ0EsWUFBTSxJQUFJLENBQVY7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUI7QUFDQSxZQUFNLElBQUksQ0FBVjtBQUNBLFVBQUksQ0FBQyxNQUFELENBQUosR0FBZSxDQUFmO0FBQ0EsWUFBTTtBQUNOLFdBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLE1BQU0sR0FBRyxDQUF4QixFQUEyQixDQUEzQixDQUE3QjtBQUNBLFlBQU0sSUFBSSxDQUFWLENBMUNtRCxDQTBDdEM7O0FBRWIsVUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUEzQjs7QUFDQSxVQUFJLElBQUosRUFBVTtBQUNOLGFBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsQ0FBN0I7QUFDQSxjQUFNLElBQUksQ0FBVjtBQUNBLGFBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixNQUE5QjtBQUNBLGNBQU0sSUFBSSxDQUFWO0FBQ0EsYUFBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixJQUFJLENBQUMsTUFBbEM7QUFDQSxjQUFNLElBQUksQ0FBVjtBQUNBLGFBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsQ0FBN0I7QUFDQSxjQUFNLElBQUksQ0FBVjtBQUNBLGFBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLE1BQU0sR0FBRyxFQUF4QixFQUE0QixFQUE1QixDQUE3QjtBQUNBLGNBQU0sSUFBSSxDQUFWLENBVk0sQ0FVTztBQUNoQjs7QUFFRCxVQUFJLElBQUksQ0FBQyxLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsWUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUwsQ0FBVSxNQUFyQjtBQUNBLGFBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxHQUFHLENBQWxDO0FBQ0EsY0FBTSxJQUFJLENBQVY7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUI7QUFDQSxjQUFNLElBQUksQ0FBVjs7QUFDQSxhQUFLLElBQUksRUFBQyxHQUFHLENBQWIsRUFBZ0IsRUFBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUMsRUFBekIsRUFBNkI7QUFDekIsY0FBTSxFQUFFLEdBQUcsRUFBQyxHQUFHLENBQWY7QUFDQSxjQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLEVBQVYsQ0FBVjtBQUNBLGNBQU0sQ0FBQyxHQUFJLENBQUQsR0FBTSxHQUFoQjtBQUNBLGNBQU0sQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFOLEdBQVcsR0FBckI7QUFDQSxjQUFNLENBQUMsR0FBSSxDQUFDLElBQUksRUFBTixHQUFZLEdBQXRCO0FBQ0EsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFULEdBQWMsQ0FBZixDQUFKLEdBQXdCLENBQXhCO0FBQ0EsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFULEdBQWMsQ0FBZixDQUFKLEdBQXdCLENBQXhCO0FBQ0EsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFULEdBQWMsQ0FBZixDQUFKLEdBQXdCLENBQXhCO0FBQ0g7O0FBQ0QsY0FBTSxJQUFJLEVBQUUsR0FBRyxDQUFmO0FBQ0EsYUFBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFkLEdBQWtCLENBQWpDLEVBQW9DLEVBQUUsR0FBRyxDQUFMLEdBQVMsQ0FBN0MsQ0FBN0I7QUFDQSxjQUFNLElBQUksQ0FBVixDQWxCa0IsQ0FrQkw7O0FBRWIsWUFBSSxJQUFJLENBQUMsUUFBVCxFQUFtQjtBQUNmLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBN0I7QUFDQSxnQkFBTSxJQUFJLENBQVY7QUFDQSxlQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUI7QUFDQSxnQkFBTSxJQUFJLENBQVY7O0FBQ0EsZUFBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsR0FBRyxFQUFwQixFQUF3QixHQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLGdCQUFJLENBQUMsTUFBTSxHQUFHLEdBQVYsQ0FBSixHQUFvQixJQUFJLENBQUMsSUFBTCxDQUFVLEdBQVYsS0FBZ0IsRUFBakIsR0FBdUIsR0FBMUM7QUFDSDs7QUFDRCxnQkFBTSxJQUFJLEVBQVY7QUFDQSxlQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxNQUFNLEdBQUcsRUFBVCxHQUFjLENBQTdCLEVBQWdDLEVBQUUsR0FBRyxDQUFyQyxDQUE3QjtBQUNBLGdCQUFNLElBQUksQ0FBVixDQVZlLENBVUY7QUFDaEI7QUFDSjs7QUFFRCxVQUFJLEVBQUUsR0FBRyxDQUFUOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBWSxNQUFoQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLFlBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFMLENBQVksQ0FBWixDQUFYOztBQUNBLFlBQUksSUFBSixFQUFVO0FBQ04sZUFBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixFQUE3QjtBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixNQUE5QjtBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxFQUEvQjtBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxDQUFDLElBQUgsQ0FBUSxLQUFyQztBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFyQztBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFyQztBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFyQztBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssV0FBTCxDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixJQUFJLENBQUMsQ0FBRCxDQUFuQztBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGVBQUssV0FBTCxDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixJQUEvQjtBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNBLGNBQUksQ0FBQyxNQUFELENBQUosR0FBZSxFQUFFLENBQUMsT0FBbEI7QUFDQSxnQkFBTSxHQXBCQSxDQW9CSTs7QUFDVixjQUFJLENBQUMsTUFBRCxDQUFKLEdBQWUsRUFBRSxDQUFDLEtBQWxCO0FBQ0EsZ0JBQU0sR0F0QkEsQ0FzQkk7O0FBQ1YsZUFBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsTUFBTSxHQUFHLEVBQXhCLEVBQTRCLEVBQTVCLENBQTdCO0FBQ0EsZ0JBQU0sSUFBSSxDQUFWLENBeEJNLENBd0JPO0FBQ2hCOztBQUVELFlBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFoQjtBQUNBLFlBQU0sR0FBRSxHQUFXLElBQUksQ0FBQyxNQUF4QjtBQUNBLGFBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFOLEdBQVUsQ0FBVixHQUFjLENBQWxCLENBQS9CO0FBQ0EsY0FBTSxJQUFJLENBQVY7QUFDQSxZQUFNLElBQUksR0FBRyxNQUFiO0FBQ0EsYUFBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLE1BQXRCLEVBQStCLENBQUMsS0FBSyxDQUFQLEdBQVksTUFBWixHQUFxQixNQUFuRDtBQUNBLGNBQU0sSUFBSSxDQUFWOztBQUNBLFlBQUksQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNULGVBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsRUFBRSxFQUEvQjtBQUNBLGdCQUFNLElBQUksQ0FBVjtBQUNIOztBQUNELGFBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsR0FBcEIsRUFBd0IsR0FBQyxFQUF6QixFQUE2QjtBQUN6QixjQUFJLENBQUMsTUFBTSxHQUFHLEdBQVYsQ0FBSixHQUFtQixJQUFJLENBQUMsR0FBRCxDQUF2QjtBQUNIOztBQUNELGNBQU0sSUFBSSxHQUFWO0FBQ0EsYUFBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsSUFBZixFQUFxQixNQUFNLEdBQUcsSUFBOUIsQ0FBN0I7QUFDQSxjQUFNLElBQUksQ0FBVixDQTdDeUMsQ0E2QzVCO0FBQ2hCOztBQUVELFdBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsQ0FBN0I7QUFDQSxZQUFNLElBQUksQ0FBVjtBQUNBLFdBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixNQUE5QjtBQUNBLFlBQU0sSUFBSSxDQUFWO0FBQ0EsV0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsTUFBTSxHQUFHLENBQXhCLEVBQTJCLENBQTNCLENBQTdCO0FBQ0EsWUFBTSxJQUFJLENBQVYsQ0FsSm1ELENBa0p0Qzs7QUFFYixhQUFPLElBQUksVUFBSixDQUFlLElBQUksQ0FBQyxNQUFMLENBQVksS0FBWixDQUFrQixDQUFsQixFQUFxQixNQUFyQixDQUFmLENBQVA7QUFDSDtBQUVEOzs7O2dDQUNvQixJLEVBQXFCLEMsRUFBVyxDLEVBQVcsRSxFQUFZLFUsRUFBbUI7QUFDMUYsVUFBTSxHQUFHLEdBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixFQUExQixFQUE4QixDQUE5QixFQUFpQyxVQUFqQyxDQUFaOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQXpCLEVBQWlDLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLENBQVo7QUFDQSxZQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSixDQUFTLEtBQXBCO0FBQ0EsWUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUosQ0FBUyxNQUFwQjtBQUNBLFlBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFoQjtBQUNBLFlBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFoQjtBQUNBLFlBQU0sS0FBSyxHQUFHLElBQUksVUFBSixDQUFlLEVBQUUsR0FBRyxHQUFMLEdBQVcsRUFBMUIsQ0FBZDtBQUNBLFdBQUcsQ0FBQyxJQUFKLEdBQVcsS0FBSyxVQUFMLENBQWdCLEdBQUcsQ0FBQyxHQUFwQixFQUF5QixFQUF6QixFQUE2QixHQUE3QixFQUFrQyxHQUFsQyxFQUF1QyxLQUF2QyxDQUFYO0FBQ0g7O0FBQ0QsYUFBTyxHQUFQO0FBQ0g7QUFFRDs7Ozs2QkFDaUIsTSxFQUF1QixDLEVBQVcsQyxFQUFXLEksRUFBYyxNLEVBQWdCLFUsRUFBbUI7QUFDM0csVUFBSSxLQUFLLEdBQUcsQ0FBWjtBQUNBLFVBQUksS0FBSyxHQUFHLENBQVo7QUFDQSxVQUFJLEdBQUcsR0FBRyxDQUFWO0FBQ0EsVUFBSSxRQUFRLEdBQUcsR0FBZjtBQUNBLFVBQUksRUFBRSxHQUFHLElBQVQ7QUFDQSxVQUFJLElBQUksR0FBRyxNQUFYOztBQUVBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQXpCLEVBQWlDLENBQUMsRUFBbEMsRUFBc0M7QUFBRztBQUNyQyxZQUFNLEdBQUcsR0FBRyxJQUFJLFVBQUosQ0FBZSxJQUFJLENBQUMsQ0FBRCxDQUFuQixDQUFaO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQWpCOztBQUNBLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBcEIsRUFBMEIsQ0FBQyxJQUFJLENBQS9CLEVBQWtDO0FBQzlCLGtCQUFRLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWY7QUFDSDtBQUNKOztBQUNELFVBQUksUUFBUSxHQUFZLFFBQVEsS0FBSyxHQUFyQztBQUVBLFVBQU0sSUFBSSxHQUE2QixFQUF2QztBQUNBLFVBQU0sSUFBSSxHQUFHLEVBQWI7O0FBQ0EsVUFBSSxJQUFJLENBQUMsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQixZQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBVjtBQUNBLFlBQUksQ0FBQyxJQUFMLENBQVUsQ0FBVjs7QUFDQSxZQUFJLEVBQUUsS0FBSyxDQUFYLEVBQWM7QUFDVixZQUFFO0FBQ0w7QUFDSjs7QUFFRCxVQUFJLEVBQUUsS0FBSyxDQUFYLEVBQWM7QUFDVixZQUFNLElBQUksR0FBRyxLQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLEVBQXdCLE1BQXhCLENBQWI7QUFDQSxZQUFJLEdBQUcsSUFBSSxDQUFDLElBQVo7O0FBQ0EsYUFBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLE1BQTlCLEVBQXNDLEdBQUMsRUFBdkMsRUFBMkM7QUFDdkMsY0FBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUwsQ0FBVSxHQUFWLEVBQWEsR0FBYixDQUFpQixJQUEzQjs7QUFDQSxjQUFJLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxJQUFmLEVBQXFCO0FBQ2pCLGdCQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsSUFBSSxDQUFDLE1BQWY7QUFDQSxnQkFBSSxDQUFDLElBQUwsQ0FBVSxDQUFWO0FBQ0g7QUFDSjtBQUNKLE9BVkQsTUFVTztBQUNIO0FBQ0EsYUFBSyxJQUFJLEVBQUMsR0FBRyxDQUFiLEVBQWdCLEVBQUMsR0FBRyxJQUFJLENBQUMsTUFBekIsRUFBaUMsRUFBQyxFQUFsQyxFQUFzQztBQUFHO0FBQ3JDLGNBQU0sS0FBSyxHQUFHLElBQUksV0FBSixDQUFnQixJQUFJLENBQUMsRUFBRCxDQUFwQixDQUFkO0FBQ0EsY0FBTSxLQUFJLEdBQUcsS0FBSyxDQUFDLE1BQW5COztBQUNBLGVBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsS0FBcEIsRUFBMEIsR0FBQyxFQUEzQixFQUErQjtBQUMzQixnQkFBTSxFQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUQsQ0FBZjs7QUFDQSxnQkFBSSxDQUFDLEdBQUMsR0FBRyxDQUFKLElBQVUsRUFBQyxLQUFLLEtBQUssQ0FBQyxHQUFDLEdBQUcsQ0FBTCxDQUFYLElBQXNCLEVBQUMsS0FBSyxLQUFLLENBQUMsR0FBQyxHQUFHLENBQUwsQ0FBNUMsS0FBeUQsSUFBSSxDQUFDLEVBQUQsQ0FBSixJQUFXLElBQXhFLEVBQThFO0FBQzFFLGtCQUFJLENBQUMsRUFBRCxDQUFKLEdBQVUsSUFBSSxDQUFDLE1BQWY7QUFDQSxrQkFBSSxDQUFDLElBQUwsQ0FBVSxFQUFWOztBQUNBLGtCQUFJLElBQUksQ0FBQyxNQUFMLElBQWUsR0FBbkIsRUFBd0I7QUFDcEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUVELFVBQU0sS0FBSyxHQUFHLFFBQVEsR0FBRyxNQUFILEdBQVksS0FBbEMsQ0F2RDJHLENBdURqRTs7QUFDMUMsVUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQWhCOztBQUNBLFVBQUksRUFBRSxJQUFJLEdBQU4sSUFBYSxDQUFDLFVBQWxCLEVBQThCO0FBQzFCLFlBQUksRUFBRSxJQUFJLENBQVYsRUFBYTtBQUNULGVBQUssR0FBRyxDQUFSO0FBQ0gsU0FGRCxNQUVPLElBQUksRUFBRSxJQUFJLENBQVYsRUFBYTtBQUNoQixlQUFLLEdBQUcsQ0FBUjtBQUNILFNBRk0sTUFFQSxJQUFJLEVBQUUsSUFBSSxFQUFWLEVBQWM7QUFDakIsZUFBSyxHQUFHLENBQVI7QUFDSCxTQUZNLE1BRUE7QUFDSCxlQUFLLEdBQUcsQ0FBUjtBQUNIOztBQUNELFlBQUksTUFBSixFQUFZO0FBQ1IsZUFBSyxHQUFHLENBQVI7QUFDSDs7QUFDRCxnQkFBUSxHQUFHLElBQVg7QUFDSDs7QUFFRCxVQUFNLElBQUksR0FBWSxFQUF0Qjs7QUFDQSxXQUFLLElBQUksR0FBQyxHQUFHLENBQWIsRUFBZ0IsR0FBQyxHQUFHLElBQUksQ0FBQyxNQUF6QixFQUFpQyxHQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQUksSUFBSSxHQUFHLElBQUksVUFBSixDQUFlLElBQUksQ0FBQyxHQUFELENBQW5CLENBQVg7QUFDQSxZQUFJLE1BQU0sR0FBRyxJQUFJLFdBQUosQ0FBZ0IsSUFBSSxDQUFDLE1BQXJCLENBQWI7QUFFQSxZQUFJLEVBQUUsR0FBRyxDQUFUO0FBQ0EsWUFBSSxFQUFFLEdBQUcsQ0FBVDtBQUNBLFlBQUksRUFBRSxHQUFHLENBQVQ7QUFDQSxZQUFJLEVBQUUsR0FBRyxDQUFUO0FBQ0EsWUFBSSxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxZQUFJLEdBQUMsS0FBSyxDQUFOLElBQVcsQ0FBQyxLQUFoQixFQUF1QjtBQUNuQixjQUFNLElBQUksR0FBSSxNQUFNLElBQUksR0FBQyxLQUFLLENBQWhCLElBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQixPQUF0QixLQUFrQyxDQUF4RCxHQUE2RCxDQUE3RCxHQUFpRSxDQUE5RTtBQUNBLGNBQUksSUFBSSxHQUFHLENBQVg7QUFDQSxjQUFJLEtBQUssR0FBRyxHQUFaOztBQUNBLGVBQUssSUFBSSxFQUFFLEdBQUcsQ0FBZCxFQUFpQixFQUFFLEdBQUcsSUFBdEIsRUFBNEIsRUFBRSxFQUE5QixFQUFrQztBQUM5QixnQkFBTSxHQUFHLEdBQUcsSUFBSSxXQUFKLENBQWdCLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBSixHQUFRLEVBQVQsQ0FBcEIsQ0FBWjtBQUNBLGdCQUFJLEdBQUcsR0FBRyxDQUFWO0FBQ0EsZ0JBQUksR0FBRyxHQUFHLENBQVY7QUFDQSxnQkFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFYO0FBQ0EsZ0JBQUksR0FBRyxHQUFHLENBQUMsQ0FBWDs7QUFDQSxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFwQixFQUF1QixDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLENBQXBCLEVBQXVCLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsb0JBQU0sR0FBQyxHQUFHLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBbEI7O0FBQ0Esb0JBQUksTUFBTSxDQUFDLEdBQUQsQ0FBTixLQUFjLEdBQUcsQ0FBQyxHQUFELENBQXJCLEVBQTBCO0FBQ3RCLHNCQUFJLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFDVCx1QkFBRyxHQUFHLENBQU47QUFDSDs7QUFDRCxzQkFBSSxDQUFDLEdBQUcsR0FBUixFQUFhO0FBQ1QsdUJBQUcsR0FBRyxDQUFOO0FBQ0g7O0FBQ0Qsc0JBQUksQ0FBQyxHQUFHLEdBQVIsRUFBYTtBQUNULHVCQUFHLEdBQUcsQ0FBTjtBQUNIOztBQUNELHNCQUFJLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFDVCx1QkFBRyxHQUFHLENBQU47QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxnQkFBTSxLQUFLLEdBQUksR0FBRyxLQUFLLENBQUMsQ0FBVixHQUFlLENBQWYsR0FBbUIsQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLENBQWIsS0FBbUIsR0FBRyxHQUFHLEdBQU4sR0FBWSxDQUEvQixDQUFqQzs7QUFDQSxnQkFBSSxLQUFLLEdBQUcsS0FBWixFQUFtQjtBQUNmLG1CQUFLLEdBQUcsS0FBUjtBQUNBLGtCQUFJLEdBQUcsRUFBUDs7QUFDQSxrQkFBSSxHQUFHLEtBQUssQ0FBQyxDQUFiLEVBQWdCO0FBQ1osa0JBQUUsR0FBRyxDQUFMO0FBQ0Esa0JBQUUsR0FBRyxDQUFMO0FBQ0Esa0JBQUUsR0FBRyxDQUFMO0FBQ0Esa0JBQUUsR0FBRyxDQUFMO0FBQ0gsZUFMRCxNQUtPO0FBQ0gsa0JBQUUsR0FBRyxHQUFMO0FBQ0Esa0JBQUUsR0FBRyxHQUFMO0FBQ0Esa0JBQUUsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLENBQWpCO0FBQ0Esa0JBQUUsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLENBQWpCO0FBQ0g7QUFDSjtBQUNKOztBQUVELGNBQU0sSUFBSSxHQUFHLElBQUksVUFBSixDQUFlLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBSixHQUFRLElBQVQsQ0FBbkIsQ0FBYjs7QUFDQSxjQUFJLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ1osZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQixPQUF0QixHQUFnQyxDQUFoQztBQUNIOztBQUVELGNBQU0sSUFBSSxHQUFHLElBQUksVUFBSixDQUFlLEVBQUUsR0FBRyxFQUFMLEdBQVUsQ0FBekIsQ0FBYjtBQUNBLGVBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsSUFBMUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QyxDQUFDLEVBQTlDLEVBQWtELENBQWxEOztBQUNBLGNBQUksS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDLENBQUMsRUFBOUMsRUFBa0QsQ0FBbEQsQ0FBSixFQUEwRDtBQUN0RCxpQkFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDLENBQUMsRUFBOUMsRUFBa0QsQ0FBbEQ7QUFDQSxpQkFBSyxHQUFHLENBQVI7QUFDSCxXQUhELE1BR087QUFDSCxpQkFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDLENBQUMsRUFBOUMsRUFBa0QsQ0FBbEQ7QUFDQSxpQkFBSyxHQUFHLENBQVI7QUFDSDs7QUFDRCxjQUFJLEdBQUcsSUFBUDtBQUNBLGdCQUFNLEdBQUcsSUFBSSxXQUFKLENBQWdCLElBQUksQ0FBQyxNQUFyQixDQUFUO0FBQ0g7O0FBQ0QsWUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFkOztBQUNBLFlBQUksRUFBRSxJQUFJLEdBQU4sSUFBYSxDQUFDLFVBQWxCLEVBQThCO0FBQzFCLGFBQUcsR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLEtBQUssR0FBRyxFQUFSLEdBQWEsQ0FBdkIsQ0FBTjs7QUFDQSxjQUFNLEtBQUksR0FBRyxJQUFJLFVBQUosQ0FBZSxHQUFHLEdBQUcsRUFBckIsQ0FBYjs7QUFDQSxlQUFLLElBQUksRUFBQyxHQUFHLENBQWIsRUFBZ0IsRUFBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUMsRUFBekIsRUFBNkI7QUFDekIsZ0JBQU0sR0FBQyxHQUFHLEVBQUMsR0FBRyxHQUFkOztBQUNBLGdCQUFNLEVBQUUsR0FBRyxFQUFDLEdBQUcsRUFBZjs7QUFDQSxnQkFBSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLG1CQUFLLElBQUksRUFBQyxHQUFHLENBQWIsRUFBZ0IsRUFBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUMsRUFBekIsRUFBNkI7QUFDekIscUJBQUksQ0FBQyxHQUFDLEdBQUksRUFBTixDQUFKLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQU4sQ0FBUCxDQUFyQjtBQUNIO0FBQ0osYUFKRCxNQUlPLElBQUksS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDcEIsbUJBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsRUFBcEIsRUFBd0IsR0FBQyxFQUF6QixFQUE2QjtBQUN6QixxQkFBSSxDQUFDLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBVCxDQUFGLENBQUosSUFBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBTixDQUFQLENBQUosSUFBeUIsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFMLElBQVUsQ0FBOUQ7QUFDSDtBQUNKLGFBSk0sTUFJQSxJQUFJLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ3BCLG1CQUFLLElBQUksR0FBQyxHQUFHLENBQWIsRUFBZ0IsR0FBQyxHQUFHLEVBQXBCLEVBQXdCLEdBQUMsRUFBekIsRUFBNkI7QUFDekIscUJBQUksQ0FBQyxHQUFDLElBQUksR0FBQyxJQUFJLENBQVQsQ0FBRixDQUFKLElBQXVCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQU4sQ0FBUCxDQUFKLElBQXlCLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBTCxJQUFVLENBQTlEO0FBQ0g7QUFDSixhQUpNLE1BSUEsSUFBSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNwQixtQkFBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsR0FBRyxFQUFwQixFQUF3QixHQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLHFCQUFJLENBQUMsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFULENBQUYsQ0FBSixJQUF1QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFOLENBQVAsQ0FBSixJQUF5QixJQUFJLENBQUMsR0FBQyxHQUFHLENBQUwsSUFBVSxDQUE5RDtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxjQUFJLEdBQUcsS0FBUDtBQUNBLGVBQUssR0FBRyxDQUFSO0FBQ0EsYUFBRyxHQUFHLENBQU47QUFDSCxTQTNCRCxNQTJCTyxJQUFJLENBQUMsUUFBRCxJQUFhLElBQUksQ0FBQyxNQUFMLEtBQWdCLENBQWpDLEVBQW9DO0FBQUU7QUFDekMsY0FBTSxNQUFJLEdBQUcsSUFBSSxVQUFKLENBQWUsRUFBRSxHQUFHLEVBQUwsR0FBVSxDQUF6QixDQUFiOztBQUNBLGNBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFsQjs7QUFDQSxlQUFLLElBQUksR0FBQyxHQUFHLENBQWIsRUFBZ0IsR0FBQyxHQUFHLElBQXBCLEVBQTBCLEdBQUMsRUFBM0IsRUFBK0I7QUFDM0IsZ0JBQU0sRUFBRSxHQUFHLEdBQUMsR0FBRyxDQUFmO0FBQ0EsZ0JBQU0sRUFBRSxHQUFHLEdBQUMsR0FBRyxDQUFmO0FBQ0Esa0JBQUksQ0FBQyxFQUFELENBQUosR0FBVyxJQUFJLENBQUMsRUFBRCxDQUFmO0FBQ0Esa0JBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFKLEdBQWUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQW5CO0FBQ0Esa0JBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFKLEdBQWUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQW5CO0FBQ0g7O0FBQ0QsY0FBSSxHQUFHLE1BQVA7QUFDQSxlQUFLLEdBQUcsQ0FBUjtBQUNBLGFBQUcsR0FBRyxDQUFOO0FBQ0EsYUFBRyxHQUFHLElBQUksRUFBVjtBQUNIOztBQUNELFlBQUksQ0FBQyxJQUFMLENBQVU7QUFDTixjQUFJLEVBQUU7QUFDRixhQUFDLEVBQUUsRUFERDtBQUVGLGFBQUMsRUFBRSxFQUZEO0FBR0YsaUJBQUssRUFBRSxFQUhMO0FBSUYsa0JBQU0sRUFBRTtBQUpOLFdBREE7QUFPTixhQUFHLEVBQUUsSUFQQztBQVFOLGFBQUcsRUFBRSxHQVJDO0FBU04sYUFBRyxFQUFFLEdBVEM7QUFVTixlQUFLLEVBQUUsS0FWRDtBQVdOLGlCQUFPLEVBQUUsS0FBSyxHQUFHLENBQUgsR0FBTztBQVhmLFNBQVY7QUFhSDs7QUFDRCxhQUFPO0FBQUUsYUFBSyxFQUFFLEtBQVQ7QUFBZ0IsYUFBSyxFQUFFLEtBQXZCO0FBQThCLFlBQUksRUFBRSxJQUFwQztBQUEwQyxnQkFBUSxFQUFFLFFBQXBEO0FBQThELGNBQU0sRUFBRTtBQUF0RSxPQUFQO0FBQ0g7QUFFRDs7OzsrQkFDbUIsRyxFQUFpQixDLEVBQVcsRyxFQUFhLEcsRUFBYSxJLEVBQWdCO0FBQ3JGLFVBQU0sR0FBRyxHQUFHLEVBQVo7O0FBQ0EsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFwQixFQUF1QixDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLFlBQUksQ0FBQyxHQUFHLEdBQUosR0FBVSxNQUFWLEtBQXFCLENBQUMsS0FBSyxDQUFOLElBQVcsQ0FBQyxLQUFLLENBQWpCLElBQXNCLENBQUMsS0FBSyxDQUFqRCxDQUFKLEVBQXlEO0FBQ3JEO0FBQ0g7O0FBQ0QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFwQixFQUF1QixDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLGVBQUssVUFBTCxDQUFnQixJQUFoQixFQUFzQixHQUF0QixFQUEyQixDQUEzQixFQUE4QixHQUE5QixFQUFtQyxHQUFuQyxFQUF3QyxDQUF4QztBQUNIOztBQUNELFdBQUcsQ0FBQyxJQUFKLENBQVMsa0JBQUssT0FBTCxDQUFhLElBQWIsQ0FBVDs7QUFDQSxZQUFJLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDWDtBQUNIO0FBQ0o7O0FBQ0QsVUFBSSxFQUFKO0FBQ0EsVUFBSSxLQUFLLEdBQUcsR0FBWjs7QUFDQSxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUF4QixFQUFnQyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFlBQUksR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLE1BQVAsR0FBZ0IsS0FBcEIsRUFBMkI7QUFDdkIsWUFBRSxHQUFHLENBQUw7QUFDQSxlQUFLLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLE1BQWY7QUFDSDtBQUNKOztBQUNELGFBQU8sR0FBRyxDQUFDLEVBQUQsQ0FBVjtBQUNIO0FBRUQ7Ozs7K0JBQ21CLEksRUFBa0IsRyxFQUFpQixDLEVBQVcsRyxFQUFhLEcsRUFBYSxJLEVBQVk7QUFDbkcsVUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQWQ7QUFDQSxVQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBYjtBQUNBLFVBQUksQ0FBQyxFQUFELENBQUosR0FBVyxJQUFYO0FBQWlCLFFBQUU7O0FBRW5CLFVBQUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixhQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCLENBQUMsRUFBMUIsRUFBOEI7QUFDMUIsY0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUosR0FBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBbEI7QUFDSDtBQUNKLE9BSkQsTUFJTyxJQUFJLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ25CLGFBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsR0FBcEIsRUFBeUIsR0FBQyxFQUExQixFQUE4QjtBQUMxQixjQUFJLENBQUMsRUFBRSxHQUFHLEdBQU4sQ0FBSixHQUFlLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBTCxDQUFsQjtBQUNIOztBQUNELGFBQUssSUFBSSxHQUFDLEdBQUcsR0FBYixFQUFrQixHQUFDLEdBQUcsR0FBdEIsRUFBMkIsR0FBQyxFQUE1QixFQUFnQztBQUM1QixjQUFJLENBQUMsRUFBRSxHQUFHLEdBQU4sQ0FBSixHQUFnQixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUwsQ0FBSCxHQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBSixHQUFRLEdBQVQsQ0FBaEIsR0FBZ0MsR0FBakMsR0FBd0MsR0FBdkQ7QUFDSDtBQUNKLE9BUE0sTUFPQSxJQUFJLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDaEIsYUFBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsR0FBRyxHQUFwQixFQUF5QixHQUFDLEVBQTFCLEVBQThCO0FBQzFCLGNBQUksQ0FBQyxFQUFFLEdBQUcsR0FBTixDQUFKLEdBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFMLENBQWxCO0FBQ0g7O0FBRUQsWUFBSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNaLGVBQUssSUFBSSxHQUFDLEdBQUcsR0FBYixFQUFrQixHQUFDLEdBQUcsR0FBdEIsRUFBMkIsR0FBQyxFQUE1QixFQUFnQztBQUM1QixnQkFBSSxDQUFDLEVBQUUsR0FBRyxHQUFOLENBQUosR0FBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUwsQ0FBbEI7QUFDSDtBQUNKOztBQUNELFlBQUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixlQUFLLElBQUksR0FBQyxHQUFHLEdBQWIsRUFBa0IsR0FBQyxHQUFHLEdBQXRCLEVBQTJCLEdBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsZ0JBQUksQ0FBQyxFQUFFLEdBQUcsR0FBTixDQUFKLEdBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBTCxDQUFILElBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFKLEdBQVEsR0FBVCxDQUFILElBQW9CLENBQWxDLElBQXVDLEdBQXhDLEdBQStDLEdBQTlEO0FBQ0g7QUFDSjs7QUFDRCxZQUFJLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ1osZUFBSyxJQUFJLElBQUMsR0FBRyxHQUFiLEVBQWtCLElBQUMsR0FBRyxHQUF0QixFQUEyQixJQUFDLEVBQTVCLEVBQWdDO0FBQzVCLGdCQUFJLENBQUMsRUFBRSxHQUFHLElBQU4sQ0FBSixHQUFnQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUwsQ0FBSCxHQUFhLEtBQUssS0FBTCxDQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSixHQUFRLEdBQVQsQ0FBZCxFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxDQUFiLEdBQWtELEdBQW5ELEdBQTBELEdBQXpFO0FBQ0g7QUFDSjtBQUNKLE9BcEJNLE1Bb0JBO0FBQ0gsWUFBSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNaLGVBQUssSUFBSSxJQUFDLEdBQUcsQ0FBYixFQUFnQixJQUFDLEdBQUcsR0FBcEIsRUFBeUIsSUFBQyxFQUExQixFQUE4QjtBQUMxQixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFOLENBQUosR0FBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFMLENBQUgsR0FBYSxHQUFiLEdBQW1CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSixHQUFRLEdBQVQsQ0FBdkIsR0FBd0MsR0FBdkQ7QUFDSDtBQUNKOztBQUNELFlBQUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixlQUFLLElBQUksSUFBQyxHQUFHLENBQWIsRUFBZ0IsSUFBQyxHQUFHLEdBQXBCLEVBQXlCLElBQUMsRUFBMUIsRUFBOEI7QUFDMUIsZ0JBQUksQ0FBQyxFQUFFLEdBQUcsSUFBTixDQUFKLEdBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBTCxDQUFILEdBQWEsR0FBYixJQUFvQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUosR0FBUSxHQUFULENBQUgsSUFBb0IsQ0FBeEMsQ0FBRCxHQUErQyxHQUE5RDtBQUNIOztBQUNELGVBQUssSUFBSSxJQUFDLEdBQUcsR0FBYixFQUFrQixJQUFDLEdBQUcsR0FBdEIsRUFBMkIsSUFBQyxFQUE1QixFQUFnQztBQUM1QixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFOLENBQUosR0FBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFMLENBQUgsR0FBYSxHQUFiLElBQXFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSixHQUFRLEdBQVQsQ0FBSCxHQUFtQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUosR0FBUSxHQUFULENBQXZCLElBQXlDLENBQTdELENBQUQsR0FBb0UsR0FBbkY7QUFDSDtBQUNKOztBQUNELFlBQUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixlQUFLLElBQUksSUFBQyxHQUFHLENBQWIsRUFBZ0IsSUFBQyxHQUFHLEdBQXBCLEVBQXlCLElBQUMsRUFBMUIsRUFBOEI7QUFDMUIsZ0JBQUksQ0FBQyxFQUFFLEdBQUcsSUFBTixDQUFKLEdBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBTCxDQUFILEdBQWEsR0FBYixHQUFtQixLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFKLEdBQVEsR0FBVCxDQUFqQixFQUFnQyxDQUFoQyxDQUFwQixHQUEwRCxHQUF6RTtBQUNIOztBQUNELGVBQUssSUFBSSxJQUFDLEdBQUcsR0FBYixFQUFrQixJQUFDLEdBQUcsR0FBdEIsRUFBMkIsSUFBQyxFQUE1QixFQUFnQztBQUM1QixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFOLENBQUosR0FBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFMLENBQUgsR0FBYSxHQUFiLEdBQW1CLEtBQUssS0FBTCxDQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSixHQUFRLEdBQVQsQ0FBZCxFQUE2QixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUosR0FBUSxHQUFULENBQWhDLEVBQStDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSixHQUFRLEdBQVIsR0FBYyxHQUFmLENBQWxELENBQXBCLEdBQThGLEdBQTdHO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFFRDs7OzswQkFDYyxDLEVBQVcsQyxFQUFXLEMsRUFBUztBQUN6QyxVQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQWxCO0FBQ0EsVUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEdBQUcsQ0FBYixDQUFYO0FBQ0EsVUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEdBQUcsQ0FBYixDQUFYO0FBQ0EsVUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEdBQUcsQ0FBYixDQUFYOztBQUNBLFVBQUksRUFBRSxJQUFJLEVBQU4sSUFBWSxFQUFFLElBQUksRUFBdEIsRUFBMEI7QUFDdEIsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsVUFBSSxFQUFFLElBQUksRUFBVixFQUFjO0FBQ1YsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxDQUFQO0FBQ0g7QUFFRDs7OzsrQkFDbUIsSSxFQUFrQixDLEVBQVcsQyxFQUFTO0FBQ3JELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQXRCLEVBQThCLENBQUMsRUFBL0IsRUFBbUM7QUFDL0IsWUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxDQUFDLENBQUMsVUFBRixDQUFhLENBQWIsQ0FBZDtBQUNIO0FBQ0o7QUFFRDs7Ozs4QkFDa0IsSSxFQUFrQixDLEVBQVcsQyxFQUFTO0FBQ3BELFVBQUksQ0FBQyxDQUFELENBQUosR0FBVyxDQUFDLElBQUksRUFBTixHQUFZLEdBQXRCO0FBQ0EsVUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBZSxDQUFDLElBQUksRUFBTixHQUFZLEdBQTFCO0FBQ0EsVUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBZSxDQUFDLElBQUksQ0FBTixHQUFXLEdBQXpCO0FBQ0EsVUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxDQUFDLEdBQUcsR0FBbEI7QUFDSDtBQUVEOzs7O2dDQUNvQixJLEVBQWtCLEMsRUFBVyxDLEVBQVM7QUFDdEQsVUFBSSxDQUFDLENBQUQsQ0FBSixHQUFXLENBQUMsSUFBSSxDQUFOLEdBQVcsR0FBckI7QUFDQSxVQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLENBQUMsR0FBRyxHQUFsQjtBQUNIO0FBRUQ7Ozs7NkJBQ2lCLEUsRUFBZ0IsRSxFQUFZLEUsRUFBWSxFLEVBQWdCLEUsRUFBWSxFLEVBQVksSSxFQUFjLEksRUFBYyxJLEVBQVk7QUFDckksVUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxFQUFULEVBQWEsRUFBYixDQUFWO0FBQ0EsVUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxFQUFULEVBQWEsRUFBYixDQUFWO0FBQ0EsVUFBSSxFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUksRUFBRSxHQUFHLENBQVQ7O0FBQ0EsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFwQixFQUF1QixDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsQ0FBcEIsRUFBdUIsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixjQUFJLElBQUksSUFBSSxDQUFSLElBQWEsSUFBSSxJQUFJLENBQXpCLEVBQTRCO0FBQ3hCLGNBQUUsR0FBSSxDQUFDLEdBQUcsRUFBSixHQUFTLENBQVYsSUFBZ0IsQ0FBckI7QUFDQSxjQUFFLEdBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBUixJQUFhLEVBQWIsR0FBa0IsSUFBbEIsR0FBeUIsQ0FBMUIsSUFBZ0MsQ0FBckM7QUFDSCxXQUhELE1BR087QUFDSCxjQUFFLEdBQUksQ0FBQyxDQUFDLElBQUQsR0FBUSxDQUFULElBQWMsRUFBZCxHQUFtQixJQUFuQixHQUEwQixDQUEzQixJQUFpQyxDQUF0QztBQUNBLGNBQUUsR0FBSSxDQUFDLEdBQUcsRUFBSixHQUFTLENBQVYsSUFBZ0IsQ0FBckI7QUFDSDs7QUFFRCxjQUFJLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ1osY0FBRSxDQUFDLEVBQUQsQ0FBRixHQUFTLEVBQUUsQ0FBQyxFQUFELENBQVg7QUFDQSxjQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFmO0FBQ0EsY0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBZjtBQUNBLGNBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWEsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQWY7QUFDSCxXQUxELE1BS08sSUFBSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNuQixnQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsSUFBYyxJQUFJLEdBQWxCLENBQVg7QUFDQSxnQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUQsQ0FBRixHQUFTLEVBQXBCO0FBQ0EsZ0JBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWEsRUFBeEI7QUFDQSxnQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxFQUF4QjtBQUNBLGdCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixJQUFjLElBQUksR0FBbEIsQ0FBWDtBQUNBLGdCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRCxDQUFGLEdBQVMsRUFBcEI7QUFDQSxnQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxFQUF4QjtBQUNBLGdCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhLEVBQXhCO0FBRUEsZ0JBQU0sR0FBRyxHQUFHLElBQUksRUFBaEI7QUFDQSxnQkFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFyQjtBQUNBLGdCQUFNLEdBQUcsR0FBSSxFQUFFLEtBQUssQ0FBUCxHQUFXLENBQVgsR0FBZSxJQUFJLEVBQWhDO0FBQ0EsY0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxNQUFNLEVBQW5CO0FBQ0EsY0FBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBWCxJQUFrQixHQUEvQjtBQUNBLGNBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQVgsSUFBa0IsR0FBL0I7QUFDQSxjQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFYLElBQWtCLEdBQS9CO0FBQ0gsV0FqQk0sTUFpQkEsSUFBSSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUFFO0FBQ3JCLGdCQUFNLEdBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBYjtBQUNBLGdCQUFNLEdBQUUsR0FBRyxFQUFFLENBQUMsRUFBRCxDQUFiO0FBQ0EsZ0JBQU0sR0FBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFiO0FBQ0EsZ0JBQU0sR0FBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFiO0FBQ0EsZ0JBQU0sR0FBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFiO0FBQ0EsZ0JBQU0sR0FBRSxHQUFHLEVBQUUsQ0FBQyxFQUFELENBQWI7QUFDQSxnQkFBTSxHQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQWI7QUFDQSxnQkFBTSxHQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQWI7O0FBQ0EsZ0JBQUksR0FBRSxLQUFLLEdBQVAsSUFBYSxHQUFFLEtBQUssR0FBcEIsSUFBMEIsR0FBRSxLQUFLLEdBQWpDLElBQXVDLEdBQUUsS0FBSyxHQUFsRCxFQUFzRDtBQUNsRCxnQkFBRSxDQUFDLEVBQUQsQ0FBRixHQUFTLENBQVQ7QUFDQSxnQkFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxDQUFiO0FBQ0EsZ0JBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWEsQ0FBYjtBQUNBLGdCQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhLENBQWI7QUFDSCxhQUxELE1BS087QUFDSCxnQkFBRSxDQUFDLEVBQUQsQ0FBRixHQUFTLEdBQVQ7QUFDQSxnQkFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQUYsR0FBYSxHQUFiO0FBQ0EsZ0JBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFGLEdBQWEsR0FBYjtBQUNBLGdCQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBRixHQUFhLEdBQWI7QUFDSDtBQUNKLFdBcEJNLE1Bb0JBLElBQUksSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFBRTtBQUNyQixnQkFBTSxJQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFOLENBQWI7QUFDQSxnQkFBTSxJQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUQsQ0FBYjtBQUNBLGdCQUFNLElBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBYjtBQUNBLGdCQUFNLElBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBYjtBQUNBLGdCQUFNLElBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBYjtBQUNBLGdCQUFNLElBQUUsR0FBRyxFQUFFLENBQUMsRUFBRCxDQUFiO0FBQ0EsZ0JBQU0sSUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFiO0FBQ0EsZ0JBQU0sSUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFiOztBQUNBLGdCQUFJLElBQUUsS0FBSyxJQUFQLElBQWEsSUFBRSxLQUFLLElBQXBCLElBQTBCLElBQUUsS0FBSyxJQUFqQyxJQUF1QyxJQUFFLEtBQUssSUFBbEQsRUFBc0Q7QUFDbEQ7QUFDSCxhQVhrQixDQVluQjs7O0FBQ0EsZ0JBQUksSUFBRSxHQUFHLEdBQUwsSUFBWSxJQUFFLEdBQUcsRUFBckIsRUFBeUI7QUFDckIscUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7d0JBQ1ksQyxFQUFlLEMsRUFBVyxDLEVBQVM7QUFDM0MsYUFBTyxLQUFLLFNBQUwsQ0FBZSxVQUFmLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLElBQXNDLFVBQTdDO0FBQ0g7QUFFRDs7Ozs4QkFDa0IsQyxFQUFXLEcsRUFBaUIsRyxFQUFhLEcsRUFBVztBQUNsRSxVQUFJLE1BQU0sR0FBRyxDQUFiO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxRQUFMLEVBQWpCOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsR0FBcEIsRUFBeUIsQ0FBQyxFQUExQixFQUE4QjtBQUMxQixjQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBUCxDQUFiLElBQTBCLElBQTNCLENBQVIsR0FBNEMsTUFBTSxLQUFLLENBQWhFO0FBQ0g7O0FBQ0QsYUFBTyxNQUFQO0FBQ0g7QUFFRDs7OzsrQkFDZ0I7QUFDWixVQUFNLEdBQUcsR0FBRyxJQUFJLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBWjs7QUFDQSxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCLENBQUMsRUFBMUIsRUFBOEI7QUFDMUIsWUFBSSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxhQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLENBQXBCLEVBQXVCLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsY0FBSSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsYUFBQyxHQUFHLGFBQWMsQ0FBQyxLQUFLLENBQXhCO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsYUFBQyxHQUFHLENBQUMsS0FBSyxDQUFWO0FBQ0g7QUFDSjs7QUFDRCxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVDtBQUNIOztBQUNELGFBQU8sR0FBUDtBQUNIO0FBRUQ7Ozs7NkJBQ2lCLEksRUFBcUIsRSxFQUFZLFUsRUFBa0I7QUFDaEUsVUFBTSxJQUFJLEdBQWlCLEVBQTNCO0FBQ0EsVUFBSSxJQUFJLEdBQUcsQ0FBWDs7QUFDQSxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUF6QixFQUFpQyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQUksQ0FBQyxJQUFMLENBQVUsS0FBSyxRQUFMLENBQWMsSUFBSSxVQUFKLENBQWUsSUFBSSxDQUFDLENBQUQsQ0FBbkIsQ0FBZCxFQUF1QyxVQUF2QyxDQUFWO0FBQ0EsWUFBSSxJQUFJLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxVQUFoQjtBQUNIOztBQUVELFVBQU0sSUFBSSxHQUFHLElBQUksVUFBSixDQUFlLElBQWYsQ0FBYjtBQUNBLFVBQU0sTUFBTSxHQUFHLElBQUksV0FBSixDQUFnQixJQUFJLENBQUMsTUFBckIsQ0FBZjtBQUNBLFVBQUksSUFBSSxHQUFHLENBQVg7O0FBQ0EsV0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsR0FBRyxJQUFJLENBQUMsTUFBekIsRUFBaUMsR0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRCxDQUFoQjtBQUNBLFlBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFmOztBQUNBLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBcEIsRUFBd0IsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixjQUFJLENBQUMsSUFBSSxHQUFHLENBQVIsQ0FBSixHQUFpQixHQUFHLENBQUMsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFlBQUksSUFBSSxFQUFSO0FBQ0g7O0FBRUQsVUFBTSxJQUFJLEdBQVM7QUFDZixVQUFFLEVBQUUsQ0FEVztBQUVmLFVBQUUsRUFBRSxJQUFJLENBQUMsTUFGTTtBQUdmLFdBQUcsRUFBRSxJQUhVO0FBSWYsV0FBRyxFQUFFLElBSlU7QUFLZixZQUFJLEVBQUUsQ0FMUztBQU1mLFlBQUksRUFBRSxJQU5TO0FBT2YsYUFBSyxFQUFFO0FBUFEsT0FBbkIsQ0FwQmdFLENBNEI1RDs7QUFDSixVQUFJLENBQUMsR0FBTCxHQUFXLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixJQUFJLENBQUMsRUFBOUIsRUFBa0MsSUFBSSxDQUFDLEVBQXZDLENBQVg7QUFDQSxVQUFJLENBQUMsR0FBTCxHQUFXLEtBQUssY0FBTCxDQUFvQixJQUFJLENBQUMsR0FBekIsQ0FBWDtBQUNBLFVBQU0sS0FBSyxHQUFXLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxhQUFPLEtBQUssQ0FBQyxNQUFOLEdBQWUsRUFBdEIsRUFBMEI7QUFDdEIsWUFBSSxJQUFJLEdBQUcsQ0FBWDtBQUNBLFlBQUksRUFBRSxHQUFHLENBQVQ7O0FBQ0EsYUFBSyxJQUFJLElBQUMsR0FBRyxDQUFiLEVBQWdCLElBQUMsR0FBRyxLQUFLLENBQUMsTUFBMUIsRUFBa0MsSUFBQyxFQUFuQyxFQUF1QztBQUNuQyxjQUFJLEtBQUssQ0FBQyxJQUFELENBQUwsQ0FBUyxHQUFULENBQWEsQ0FBYixHQUFpQixJQUFyQixFQUEyQjtBQUN2QixnQkFBSSxHQUFHLEtBQUssQ0FBQyxJQUFELENBQUwsQ0FBUyxHQUFULENBQWEsQ0FBcEI7QUFBdUIsY0FBRSxHQUFHLElBQUw7QUFDMUI7QUFDSjs7QUFDRCxZQUFJLElBQUksR0FBRyxJQUFYLEVBQWlCO0FBQ2I7QUFDSDs7QUFDRCxZQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRCxDQUFsQjtBQUVBLFlBQU0sRUFBRSxHQUFHLEtBQUssbUJBQUwsQ0FBeUIsSUFBekIsRUFBK0IsTUFBL0IsRUFBdUMsSUFBSSxDQUFDLEVBQTVDLEVBQWdELElBQUksQ0FBQyxFQUFyRCxFQUF5RCxJQUFJLENBQUMsR0FBTCxDQUFTLENBQWxFLEVBQXFFLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBOUUsQ0FBWDtBQUVBLFlBQU0sRUFBRSxHQUFTO0FBQ2IsWUFBRSxFQUFFLElBQUksQ0FBQyxFQURJO0FBRWIsWUFBRSxFQUFFLEVBRlM7QUFHYixhQUFHLEVBQUUsSUFIUTtBQUliLGFBQUcsRUFBRSxJQUpRO0FBS2IsY0FBSSxFQUFFLENBTE87QUFNYixjQUFJLEVBQUUsSUFOTztBQU9iLGVBQUssRUFBRTtBQVBNLFNBQWpCO0FBU0EsVUFBRSxDQUFDLEdBQUgsR0FBUyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsRUFBRSxDQUFDLEVBQTVCLEVBQWdDLEVBQUUsQ0FBQyxFQUFuQyxDQUFUO0FBQ0EsVUFBRSxDQUFDLEdBQUgsR0FBUyxLQUFLLGNBQUwsQ0FBb0IsRUFBRSxDQUFDLEdBQXZCLENBQVQ7QUFDQSxZQUFNLEVBQUUsR0FBUztBQUNiLFlBQUUsRUFBRSxFQURTO0FBRWIsWUFBRSxFQUFFLElBQUksQ0FBQyxFQUZJO0FBR2IsYUFBRyxFQUFFLElBSFE7QUFJYixhQUFHLEVBQUUsSUFKUTtBQUtiLGNBQUksRUFBRSxDQUxPO0FBTWIsY0FBSSxFQUFFLElBTk87QUFPYixlQUFLLEVBQUU7QUFQTSxTQUFqQjtBQVNBLFVBQUUsQ0FBQyxHQUFILEdBQVM7QUFDTCxXQUFDLEVBQUUsRUFERTtBQUVMLFdBQUMsRUFBRSxFQUZFO0FBR0wsV0FBQyxFQUFFLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxHQUFhLEVBQUUsQ0FBQyxHQUFILENBQU87QUFIbEIsU0FBVDs7QUFLQSxhQUFLLElBQUksSUFBQyxHQUFHLENBQWIsRUFBZ0IsSUFBQyxHQUFHLEVBQXBCLEVBQXdCLElBQUMsRUFBekIsRUFBNkI7QUFDekIsWUFBRSxDQUFDLEdBQUgsQ0FBTyxDQUFQLENBQVMsSUFBVCxJQUFjLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFXLElBQVgsSUFBZ0IsRUFBRSxDQUFDLEdBQUgsQ0FBTyxDQUFQLENBQVMsSUFBVCxDQUE5QjtBQUNIOztBQUNELGFBQUssSUFBSSxJQUFDLEdBQUcsQ0FBYixFQUFnQixJQUFDLEdBQUcsQ0FBcEIsRUFBdUIsSUFBQyxFQUF4QixFQUE0QjtBQUN4QixZQUFFLENBQUMsR0FBSCxDQUFPLENBQVAsQ0FBUyxJQUFULElBQWMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFULENBQVcsSUFBWCxJQUFnQixFQUFFLENBQUMsR0FBSCxDQUFPLENBQVAsQ0FBUyxJQUFULENBQTlCO0FBQ0g7O0FBQ0QsVUFBRSxDQUFDLEdBQUgsR0FBUyxLQUFLLGNBQUwsQ0FBb0IsRUFBRSxDQUFDLEdBQXZCLENBQVQ7QUFFQSxZQUFJLENBQUMsSUFBTCxHQUFZLEVBQVo7QUFDQSxZQUFJLENBQUMsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLLENBQUMsRUFBRCxDQUFMLEdBQVksRUFBWjtBQUNBLGFBQUssQ0FBQyxJQUFOLENBQVcsRUFBWDtBQUNIOztBQUNELFdBQUssQ0FBQyxJQUFOLENBQVcsVUFBQyxDQUFELEVBQUksQ0FBSjtBQUFBLGVBQVUsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxDQUFOLEdBQVUsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxDQUExQjtBQUFBLE9BQVg7QUFFQSxVQUFNLE9BQU8sR0FBa0IsRUFBL0I7O0FBQ0EsV0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFkLEVBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBM0IsRUFBbUMsRUFBRSxFQUFyQyxFQUF5QztBQUNyQyxZQUFNLEVBQUUsR0FBRyxJQUFJLFVBQUosQ0FBZSxJQUFJLENBQUMsRUFBRCxDQUFuQixDQUFYO0FBQ0EsWUFBTSxFQUFFLEdBQWdCLElBQUksV0FBSixDQUFnQixJQUFJLENBQUMsRUFBRCxDQUFwQixDQUF4QjtBQUNBLFlBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFmOztBQUVBLGFBQUssSUFBSSxJQUFDLEdBQUcsQ0FBYixFQUFnQixJQUFDLEdBQUcsR0FBcEIsRUFBeUIsSUFBQyxJQUFJLENBQTlCLEVBQWlDO0FBQzdCLGNBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFELENBQUYsSUFBUyxJQUFJLEdBQWIsQ0FBVjtBQUNBLGNBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFDLEdBQUcsQ0FBTCxDQUFGLElBQWEsSUFBSSxHQUFqQixDQUFWO0FBQ0EsY0FBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUMsR0FBRyxDQUFMLENBQUYsSUFBYSxJQUFJLEdBQWpCLENBQVY7QUFDQSxjQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBQyxHQUFHLENBQUwsQ0FBRixJQUFhLElBQUksR0FBakIsQ0FBVixDQUo2QixDQU03QjtBQUNBOztBQUNBLGNBQUksRUFBRSxHQUFHLElBQVQ7O0FBQ0EsaUJBQU8sRUFBRSxDQUFDLElBQVYsRUFBZ0I7QUFDWixjQUFFLEdBQUksS0FBSyxnQkFBTCxDQUFzQixFQUFFLENBQUMsR0FBekIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsS0FBNkMsQ0FBOUMsR0FBbUQsRUFBRSxDQUFDLElBQXRELEdBQTZELEVBQUUsQ0FBQyxLQUFyRTtBQUNIOztBQUVELFlBQUUsQ0FBQyxJQUFDLElBQUksQ0FBTixDQUFGLEdBQWEsRUFBRSxDQUFDLEdBQUgsQ0FBTyxJQUFwQjtBQUNIOztBQUNELGVBQU8sQ0FBQyxFQUFELENBQVAsR0FBYyxFQUFFLENBQUMsTUFBakI7QUFDSDs7QUFDRCxhQUFPO0FBQUUsWUFBSSxFQUFFLE9BQVI7QUFBaUIsWUFBSSxFQUFFO0FBQXZCLE9BQVA7QUFDSDtBQUVEOzs7O2tDQUNzQixJLEVBQWtCLEUsRUFBWSxFLEVBQVU7QUFDMUQsVUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxDQUE5QyxDQUFWO0FBQ0EsVUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVY7QUFDQSxVQUFNLENBQUMsR0FBSSxFQUFFLEdBQUcsRUFBTixJQUFhLENBQXZCOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsRUFBYixFQUFpQixDQUFDLEdBQUcsRUFBckIsRUFBeUIsQ0FBQyxJQUFJLENBQTlCLEVBQWlDO0FBQzdCLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxJQUFJLEdBQWYsQ0FBVjtBQUNBLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTCxDQUFKLElBQWUsSUFBSSxHQUFuQixDQUFWO0FBQ0EsWUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosSUFBZSxJQUFJLEdBQW5CLENBQVY7QUFDQSxZQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixJQUFlLElBQUksR0FBbkIsQ0FBVixDQUo2QixDQUs3Qjs7QUFDQSxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBUjtBQUFXLFNBQUMsQ0FBQyxDQUFELENBQUQsSUFBUSxDQUFSO0FBQVcsU0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRLENBQVI7QUFBVyxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBUjtBQUVqQyxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBQyxHQUFHLENBQVo7QUFBZSxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBQyxHQUFHLENBQVo7QUFBZSxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBQyxHQUFHLENBQVo7QUFBZSxTQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBQyxHQUFHLENBQVo7QUFDN0MsU0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRLENBQUMsR0FBRyxDQUFaO0FBQWUsU0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRLENBQUMsR0FBRyxDQUFaO0FBQWUsU0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRLENBQUMsR0FBRyxDQUFaO0FBQzlCLFNBQUMsQ0FBQyxFQUFELENBQUQsSUFBUyxDQUFDLEdBQUcsQ0FBYjtBQUFnQixTQUFDLENBQUMsRUFBRCxDQUFELElBQVMsQ0FBQyxHQUFHLENBQWI7QUFDaEIsU0FBQyxDQUFDLEVBQUQsQ0FBRCxJQUFTLENBQUMsR0FBRyxDQUFiO0FBQ0g7O0FBQ0QsT0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBYSxPQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFhLE9BQUMsQ0FBQyxFQUFELENBQUQsR0FBUSxDQUFDLENBQUMsQ0FBRCxDQUFUO0FBQWMsT0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBYSxPQUFDLENBQUMsRUFBRCxDQUFELEdBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUFjLE9BQUMsQ0FBQyxFQUFELENBQUQsR0FBUSxDQUFDLENBQUMsRUFBRCxDQUFUO0FBRW5FLGFBQU87QUFBRSxTQUFDLEVBQUUsQ0FBTDtBQUFRLFNBQUMsRUFBRSxDQUFYO0FBQWMsU0FBQyxFQUFFO0FBQWpCLE9BQVA7QUFDSDtBQUVEOzs7O21DQUN1QixLLEVBQThDO0FBU2pFLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFoQjtBQUNBLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFoQjtBQUNBLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFoQjtBQUVBLFVBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVo7QUFDQSxVQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFaO0FBQ0EsVUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBWjtBQUNBLFVBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVo7QUFDQSxVQUFNLEVBQUUsR0FBSSxDQUFDLEtBQUssQ0FBTixHQUFVLENBQVYsR0FBYyxJQUFJLENBQTlCO0FBQ0EsVUFBTSxFQUFFLEdBQUcsQ0FDUCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQURWLEVBQ2MsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFEL0IsRUFDbUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFEcEQsRUFDd0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFEekUsRUFFUCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUZWLEVBRWMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFGL0IsRUFFbUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFGcEQsRUFFd0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFGekUsRUFHUCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUhWLEVBR2MsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFIL0IsRUFHbUMsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFIckQsRUFHeUQsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFIM0UsRUFJUCxDQUFDLENBQUMsRUFBRCxDQUFELEdBQVEsRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUpYLEVBSWUsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFKakMsRUFJcUMsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFKdkQsRUFJMkQsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFKN0UsQ0FBWDtBQU9BLFVBQU0sQ0FBQyxHQUFHLEVBQVY7QUFDQSxVQUFJLENBQUMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFSO0FBQ0EsVUFBSSxFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUksR0FBRyxHQUFHLENBQVY7O0FBRUEsVUFBSSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxFQUFwQixFQUF3QixDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCLFdBQUMsR0FBRyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQUo7QUFDQSxhQUFHLEdBQUcsSUFBSSxDQUFDLElBQUwsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFWLENBQU47QUFDQSxXQUFDLEdBQUcsS0FBSyxLQUFMLENBQVcsSUFBSSxHQUFmLEVBQW9CLENBQXBCLENBQUo7O0FBQ0EsY0FBSSxJQUFJLENBQUMsR0FBTCxDQUFTLEdBQUcsR0FBRyxFQUFmLElBQXFCLElBQXpCLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0QsWUFBRSxHQUFHLEdBQUw7QUFDSDtBQUNKLE9BeENnRSxDQXlDakU7OztBQUNBLFVBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQU4sRUFBVSxFQUFFLEdBQUcsRUFBZixFQUFtQixFQUFFLEdBQUcsRUFBeEIsRUFBNEIsRUFBRSxHQUFHLEVBQWpDLENBQVY7QUFDQSxVQUFNLE1BQU0sR0FBRyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQVgsRUFBK0IsQ0FBL0IsQ0FBZjtBQUVBLFVBQU0sRUFBRSxHQUFJLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxLQUFSLEdBQWlCLENBQWpCLEdBQXFCLElBQUksQ0FBQyxDQUFDLENBQUQsQ0FBckM7QUFFQSxhQUFPO0FBQ0gsV0FBRyxFQUFFLEVBREY7QUFFSCxTQUFDLEVBQUUsQ0FGQTtBQUdILFNBQUMsRUFBRSxDQUhBO0FBSUgsU0FBQyxFQUFFLEVBSkE7QUFLSCxjQUFNLEVBQUUsTUFMTDtBQU1ILFdBQUcsRUFBRSxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQU5GO0FBT0gsWUFBSSxFQUFHLENBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFELENBQWxCLEtBQTBCLEVBQTNCLEdBQWtDLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBTSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWEsRUFBeEIsS0FBK0IsRUFBakUsR0FBd0UsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYSxFQUF4QixLQUErQixDQUF2RyxHQUE2RyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhLEVBQXhCLEtBQStCLENBQTdJLE1BQXFKO0FBUHpKLE9BQVA7QUFTSDtBQUVEOzs7O3FDQUN5QixHLEVBQW1DLEMsRUFBVyxDLEVBQVcsQyxFQUFXLEMsRUFBUztBQUNsRyxVQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBZDtBQUNBLGFBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQVAsR0FBVyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBbEIsR0FBc0IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQTdCLEdBQWlDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUF4QyxHQUE0QyxHQUFHLENBQUMsR0FBdkQ7QUFDSDtBQUVEOzs7O3dDQUM0QixJLEVBQWtCLE0sRUFBcUIsSSxFQUFjLEksRUFBYyxDLEVBQWEsRyxFQUFXO0FBQ25ILFVBQUksRUFBRSxHQUFHLElBQUksR0FBRyxDQUFoQjtBQUNBLFVBQUksRUFBRSxHQUFHLElBQVQ7O0FBQ0EsYUFBTyxFQUFFLEdBQUcsRUFBWixFQUFnQjtBQUNaLGVBQU8sS0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEtBQW9DLEdBQTNDLEVBQWdEO0FBQzVDLFlBQUUsSUFBSSxDQUFOO0FBQ0g7O0FBQ0QsZUFBTyxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsRUFBMUIsRUFBOEIsQ0FBOUIsSUFBbUMsR0FBMUMsRUFBK0M7QUFDM0MsWUFBRSxJQUFJLENBQU47QUFDSDs7QUFDRCxZQUFJLEVBQUUsSUFBSSxFQUFWLEVBQWM7QUFDVjtBQUNIOztBQUVELFlBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBUCxDQUFoQjtBQUNBLGNBQU0sQ0FBQyxFQUFFLElBQUksQ0FBUCxDQUFOLEdBQWtCLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBUCxDQUF4QjtBQUNBLGNBQU0sQ0FBQyxFQUFFLElBQUksQ0FBUCxDQUFOLEdBQWtCLENBQWxCO0FBRUEsVUFBRSxJQUFJLENBQU47QUFDQSxVQUFFLElBQUksQ0FBTjtBQUNIOztBQUNELGFBQU8sS0FBSyxjQUFMLENBQW9CLElBQXBCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLElBQW1DLEdBQTFDLEVBQStDO0FBQzNDLFVBQUUsSUFBSSxDQUFOO0FBQ0g7O0FBQ0QsYUFBTyxFQUFFLEdBQUcsQ0FBWjtBQUNIO0FBRUQ7Ozs7bUNBQ3VCLEksRUFBa0IsQyxFQUFXLEMsRUFBVztBQUMzRCxhQUFPLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxDQUFDLENBQUMsQ0FBRCxDQUFYLEdBQWlCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTCxDQUFKLEdBQWMsQ0FBQyxDQUFDLENBQUQsQ0FBaEMsR0FBc0MsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxDQUFDLENBQUMsQ0FBRCxDQUFyRCxHQUEyRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLENBQUMsQ0FBQyxDQUFELENBQWpGO0FBQ0g7QUFFRDs7Ozs4QkFDa0IsQyxFQUFhLEMsRUFBVztBQUN0QyxhQUFPLENBQ0gsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQVIsR0FBYyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBdEIsR0FBNEIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQXBDLEdBQTBDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsQ0FBRCxDQUQvQyxFQUVILENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQXRCLEdBQTRCLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFwQyxHQUEwQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FGL0MsRUFHSCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBUixHQUFjLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsQ0FBRCxDQUF0QixHQUE0QixDQUFDLENBQUMsRUFBRCxDQUFELEdBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBckMsR0FBMkMsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLENBQUMsQ0FBQyxDQUFELENBSGpELEVBSUgsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUFDLENBQUMsRUFBRCxDQUFELEdBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBeEIsR0FBOEIsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxHQUFRLENBQUMsQ0FBQyxDQUFELENBQXZDLEdBQTZDLENBQUMsQ0FBQyxFQUFELENBQUQsR0FBUSxDQUFDLENBQUMsQ0FBRCxDQUpuRCxDQUFQO0FBTUg7QUFFRDs7OzswQkFDYyxDLEVBQWEsQyxFQUFXO0FBQ2xDLGFBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQVIsR0FBYyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBdEIsR0FBNEIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxDQUFELENBQXBDLEdBQTBDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsQ0FBRCxDQUF6RDtBQUNIO0FBRUQ7Ozs7MEJBQ2MsQyxFQUFXLEMsRUFBVztBQUNoQyxhQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQU4sRUFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBaEIsRUFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQTFCLEVBQStCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFwQyxDQUFQO0FBQ0g7QUFFRDs7Ozs2QkFDaUIsRyxFQUFpQixNLEVBQWM7QUFDNUMsVUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFKLENBQWUsR0FBRyxDQUFDLE1BQW5CLENBQWI7QUFDQSxVQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBSixJQUFjLENBQTNCOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBcEIsRUFBMEIsQ0FBQyxFQUEzQixFQUErQjtBQUMzQixZQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBaEI7QUFDQSxZQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBWjs7QUFDQSxZQUFJLE1BQUosRUFBWTtBQUNSLFlBQUUsR0FBSyxFQUFFLEdBQUcsR0FBUCxHQUFlLENBQWYsR0FBbUIsR0FBeEI7QUFDSDs7QUFDRCxZQUFNLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFSLENBQVo7QUFDQSxZQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBSixHQUFlLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFILEdBQWMsQ0FBN0I7QUFDQSxZQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBSixHQUFlLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFILEdBQWMsQ0FBN0I7QUFDQSxZQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBSixHQUFlLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBTixDQUFILEdBQWMsQ0FBN0I7QUFDQSxZQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sQ0FBSixHQUFlLEVBQWY7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7Ozs7O0FBMzNCTCxnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBLG9IOzs7Ozs7Ozs7Ozs7OztBQ2xCQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLFNBQWdCLFVBQWhCLEdBQTBCO0FBQ3RCLHdDQUFrQixRQUFsQixHQUE2QixRQUE3QixDQUFzQyxRQUF0QyxFQUFnRCxVQUFDLElBQUQ7QUFBQSxXQUFVLElBQUksK0JBQUosQ0FBbUIsSUFBbkIsQ0FBVjtBQUFBLEdBQWhEO0FBQ0Esd0NBQWtCLFFBQWxCLEdBQTZCLFFBQTdCLENBQXNDLEtBQXRDLEVBQTZDLFVBQUMsSUFBRDtBQUFBLFdBQVUsSUFBSSwyQkFBSixDQUFpQixJQUFqQixDQUFWO0FBQUEsR0FBN0M7QUFDQSx3Q0FBa0IsUUFBbEIsR0FBNkIsUUFBN0IsQ0FBc0MsS0FBdEMsRUFBNkMsVUFBQyxJQUFEO0FBQUEsV0FBVSxJQUFJLHlCQUFKLENBQWdCLElBQWhCLENBQVY7QUFBQSxHQUE3QztBQUNBLHdDQUFrQixRQUFsQixHQUE2QixRQUE3QixDQUFzQyxLQUF0QyxFQUE2QyxVQUFDLElBQUQ7QUFBQSxXQUFVLElBQUksMkJBQUosQ0FBaUIsSUFBakIsQ0FBVjtBQUFBLEdBQTdDO0FBQ0Esd0NBQWtCLFFBQWxCLEdBQTZCLFFBQTdCLENBQXNDLEtBQXRDLEVBQTZDLFVBQUMsSUFBRDtBQUFBLFdBQVUsSUFBSSx5QkFBSixDQUFnQixJQUFoQixDQUFWO0FBQUEsR0FBN0M7QUFDSDs7QUFORCxnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUNBOztBQUNBOztBQUNBO0FBS0E7Ozs7O0lBR2EsYzs7O0FBSVQ7Ozs7QUFJQSwwQkFBWSxPQUFaLEVBQTJDO0FBQUE7O0FBQ3ZDLFNBQUssUUFBTCxHQUFnQixPQUFPLElBQUksRUFBM0I7QUFDQSxTQUFLLFFBQUwsQ0FBYyxVQUFkLEdBQTJCLEtBQUssUUFBTCxDQUFjLFVBQWQsSUFBNEIsY0FBTSxPQUFOLENBQWMsU0FBZCxDQUF2RDtBQUNBLFNBQUssUUFBTCxDQUFjLFVBQWQsR0FBMkIsS0FBSyxRQUFMLENBQWMsVUFBZCxJQUE0QixjQUFNLE9BQU4sQ0FBYyxTQUFkLENBQXZEO0FBQ0EsU0FBSyxRQUFMLENBQWMsUUFBZCxHQUF5QixLQUFLLFFBQUwsQ0FBYyxRQUFkLElBQTBCLFdBQW5EOztBQUVBLFFBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQUssUUFBTCxDQUFjLFVBQWxDLEVBQThDLGFBQTlDLENBQUwsRUFBMkQ7QUFDdkQsWUFBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0g7O0FBRUQsUUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBSyxRQUFMLENBQWMsVUFBbEMsRUFBOEMsYUFBOUMsQ0FBTCxFQUEyRDtBQUN2RCxZQUFNLElBQUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzhGQU91QixROzs7Ozs7OztBQUFzQix3QiwyREFBbUIsQztBQUFHLDBCLDJEQUFxQixFO3NCQUM5RSxJQUFJLEtBQUosQ0FBVSx5Q0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1Y7Ozs7Ozs7Ozs7Ozs7K0ZBT3dCLFE7Ozs7Ozs7Ozs7Ozs7QUFBc0Isd0IsOERBQW1CLEM7QUFBRywwQiw4REFBcUIsRTs7b0JBQ2hGLDBCQUFZLE9BQVosQ0FBb0IsUUFBcEIsQzs7Ozs7c0JBQ0ssSUFBSSxLQUFKLENBQVUseUNBQVYsQzs7O3NCQUdOLENBQUMsNEJBQWEsUUFBYixDQUFzQixRQUF0QixDQUFELElBQW9DLFFBQVEsSUFBSSxDOzs7OztzQkFDMUMsSUFBSSxLQUFKLG9EQUFzRCxRQUF0RCxFOzs7c0JBR04sQ0FBQyw0QkFBYSxRQUFiLENBQXNCLFVBQXRCLENBQUQsSUFBc0MsVUFBVSxHQUFHLEM7Ozs7O3NCQUM3QyxJQUFJLEtBQUosdURBQXlELFVBQXpELEU7OztBQUdKLDBCLEdBQWEsUUFBUSxDQUFDLE1BQVQsR0FBa0IsUUFBbEIsR0FBOEIsSUFBSSxVO0FBRS9DLHNCLEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQztBQUNmLHNCQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixLQUFLLFFBQUwsQ0FBYyxRQUFuQztBQUVBLHNCQUFNLENBQUMsS0FBUCxHQUFlLFVBQWY7QUFDQSxzQkFBTSxDQUFDLE1BQVAsR0FBZ0IsVUFBaEI7QUFFTSx1QixHQUFVLE1BQU0sQ0FBQyxVQUFQLENBQWtCLElBQWxCLEM7QUFFaEIsdUJBQU8sQ0FBQyxTQUFSLEdBQW9CLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsUUFBekIsRUFBcEI7QUFDQSx1QkFBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsVUFBdkIsRUFBbUMsVUFBbkM7QUFDQSx1QkFBTyxDQUFDLFNBQVIsR0FBb0IsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixRQUF6QixFQUFwQjs7QUFDQSxxQkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQTdCLEVBQXFDLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsdUJBQVMsQ0FBVCxHQUFhLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxNQUFoQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLHdCQUFJLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQUosRUFBb0I7QUFDaEIsNkJBQU8sQ0FBQyxRQUFSLENBQWlCLENBQUMsR0FBRyxRQUFKLEdBQWUsVUFBaEMsRUFBNEMsQ0FBQyxHQUFHLFFBQUosR0FBZSxVQUEzRCxFQUF1RSxRQUF2RSxFQUFpRixRQUFqRjtBQUNIO0FBQ0o7QUFDSjs7a0RBQ00sTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUVmLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7SUFHYSxxQjs7OztBQUFiLHNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7QUFJQTs7Ozs7SUFHYSxZOzs7QUFJVDs7OztBQUlBLHdCQUFZLE9BQVosRUFBeUM7QUFBQTs7QUFDckMsU0FBSyxRQUFMLEdBQWdCLE9BQU8sSUFBSSxFQUEzQjtBQUNBLFNBQUssUUFBTCxDQUFjLFVBQWQsR0FBMkIsS0FBSyxRQUFMLENBQWMsVUFBZCxJQUE0QixjQUFNLE9BQU4sQ0FBYyxTQUFkLENBQXZEO0FBQ0EsU0FBSyxRQUFMLENBQWMsVUFBZCxHQUEyQixLQUFLLFFBQUwsQ0FBYyxVQUFkLElBQTRCLGNBQU0sT0FBTixDQUFjLFNBQWQsQ0FBdkQ7QUFDQSxTQUFLLFFBQUwsQ0FBYyxRQUFkLEdBQXlCLEtBQUssUUFBTCxDQUFjLFFBQWQsSUFBMEIsU0FBbkQ7O0FBRUEsUUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBSyxRQUFMLENBQWMsVUFBbEMsRUFBOEMsYUFBOUMsQ0FBTCxFQUEyRDtBQUN2RCxZQUFNLElBQUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDs7QUFFRCxRQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixLQUFLLFFBQUwsQ0FBYyxVQUFsQyxFQUE4QyxhQUE5QyxDQUFMLEVBQTJEO0FBQ3ZELFlBQU0sSUFBSSxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OEZBT3VCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Isd0IsMkRBQW1CLEM7QUFBRywwQiwyREFBcUIsRTs7b0JBQy9FLDBCQUFZLE9BQVosQ0FBb0IsUUFBcEIsQzs7Ozs7c0JBQ0ssSUFBSSxLQUFKLENBQVUseUNBQVYsQzs7O3NCQUdOLENBQUMsNEJBQWEsUUFBYixDQUFzQixRQUF0QixDQUFELElBQW9DLFFBQVEsSUFBSSxDOzs7OztzQkFDMUMsSUFBSSxLQUFKLG9EQUFzRCxRQUF0RCxFOzs7c0JBR04sQ0FBQyw0QkFBYSxRQUFiLENBQXNCLFVBQXRCLENBQUQsSUFBc0MsVUFBVSxHQUFHLEM7Ozs7O3NCQUM3QyxJQUFJLEtBQUosdURBQXlELFVBQXpELEU7OztBQUdKLDBCLEdBQWEsUUFBUSxDQUFDLE1BQVQsR0FBa0IsUUFBbEIsR0FBOEIsSUFBSSxVO0FBRS9DLG9CLEdBQU8sSUFBSSxVQUFKLENBQWUsVUFBVSxHQUFHLFVBQWIsR0FBMEIsQ0FBekMsQzs7QUFDYixxQkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQXpCLEVBQWlDLENBQUMsSUFBSSxDQUF0QyxFQUF5QztBQUNyQyxzQkFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsR0FBekIsRUFBVjtBQUNBLHNCQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBZDtBQUNBLHNCQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsSUFBekIsRUFBZDtBQUNBLHNCQUFJLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBSixHQUFjLElBQWQ7QUFDSDs7QUFFRyxrQixHQUFLLFVBQVUsR0FBRyxVQUFiLEdBQTBCLEM7O0FBQ25DLHFCQUFTLENBQVQsR0FBYSxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBN0IsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUNoQyxxQkFEZ0MsR0FDMUIsSUFBSSxVQUFKLENBQWUsVUFBVSxHQUFHLENBQTVCLENBRDBCO0FBRWxDLG1CQUZrQyxHQUU5QixDQUY4Qjs7QUFJdEMsdUJBQVMsRUFBVCxHQUFhLENBQWIsRUFBZ0IsRUFBQyxHQUFHLFVBQXBCLEVBQWdDLEVBQUMsRUFBakMsRUFBcUM7QUFDakMsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsR0FBekIsRUFBWDtBQUNBLHVCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQVg7QUFDQSx1QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixJQUF6QixFQUFYO0FBQ0EsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLElBQVg7QUFDSDs7QUFFRCx1QkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLE1BQWhDLEVBQXdDLENBQUMsRUFBekMsRUFBNkM7QUFDbkMsMEJBRG1DLEdBQzFCLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLElBQWlCLEtBQUssUUFBTCxDQUFjLFVBQS9CLEdBQTRDLEtBQUssUUFBTCxDQUFjLFVBRGhDOztBQUV6Qyx5QkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBcEIsRUFBOEIsQ0FBQyxFQUEvQixFQUFvQztBQUNoQyx5QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsTUFBTSxDQUFDLEdBQVAsRUFBWDtBQUNBLHlCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxNQUFNLENBQUMsS0FBUCxFQUFYO0FBQ0EseUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLE1BQU0sQ0FBQyxJQUFQLEVBQVg7QUFDQSx5QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsSUFBWDtBQUNIO0FBQ0o7O0FBRUQsdUJBQVMsR0FBVCxHQUFhLENBQWIsRUFBZ0IsR0FBQyxHQUFHLFVBQXBCLEVBQWdDLEdBQUMsRUFBakMsRUFBc0M7QUFDbEMsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsR0FBekIsRUFBWDtBQUNBLHVCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQVg7QUFDQSx1QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixJQUF6QixFQUFYO0FBQ0EsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLElBQVg7QUFDSDs7QUFFRCx1QkFBUyxFQUFULEdBQWEsQ0FBYixFQUFnQixFQUFDLEdBQUcsUUFBcEIsRUFBOEIsRUFBQyxFQUEvQixFQUFtQztBQUMvQix3QkFBSSxDQUFDLEdBQUwsQ0FBUyxHQUFULEVBQWMsRUFBZDtBQUNBLHNCQUFFLElBQUksR0FBRyxDQUFDLE1BQVY7QUFDSDtBQUNKOztpREFFTSxJQUFJLHlCQUFKLEdBQWtCLE1BQWxCLENBQXlCLFVBQXpCLEVBQXFDLFVBQXJDLEVBQWlELElBQWpELEVBQXVELEVBQXZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWDs7Ozs7Ozs7Ozs7OzsrRkFPd0IsUTs7Ozs7Ozs7OztBQUFzQix3Qiw4REFBbUIsQztBQUFHLDBCLDhEQUFxQixFOzt1QkFDbkUsS0FBSyxTQUFMLENBQWUsUUFBZixFQUF5QixRQUF6QixFQUFtQyxVQUFuQyxDOzs7QUFBWixtQjtBQUVBLG1CLEdBQU0sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQztBQUNaLG1CQUFHLENBQUMsU0FBSixDQUFjLEdBQWQsQ0FBa0IsS0FBSyxRQUFMLENBQWMsUUFBaEM7QUFDQSxtQkFBRyxDQUFDLEdBQUosR0FBVSwwQkFBWSxpQkFBWixDQUE4QixZQUE5QixFQUE0QyxHQUE1QyxDQUFWO2tEQUVPLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpHZixvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0lBR2EsbUI7Ozs7QUFBYixrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBO0FBSUE7Ozs7O0lBR2EsVzs7O0FBSVQ7Ozs7QUFJQSx1QkFBWSxPQUFaLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUssUUFBTCxHQUFnQixPQUFPLElBQUksRUFBM0I7QUFDQSxTQUFLLFFBQUwsQ0FBYyxVQUFkLEdBQTJCLEtBQUssUUFBTCxDQUFjLFVBQWQsSUFBNEIsY0FBTSxPQUFOLENBQWMsU0FBZCxDQUF2RDtBQUNBLFNBQUssUUFBTCxDQUFjLFVBQWQsR0FBMkIsS0FBSyxRQUFMLENBQWMsVUFBZCxJQUE0QixjQUFNLE9BQU4sQ0FBYyxTQUFkLENBQXZEO0FBQ0EsU0FBSyxRQUFMLENBQWMsUUFBZCxHQUF5QixLQUFLLFFBQUwsQ0FBYyxRQUFkLElBQTBCLFFBQW5EOztBQUVBLFFBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQUssUUFBTCxDQUFjLFVBQWxDLEVBQThDLGFBQTlDLENBQUwsRUFBMkQ7QUFDdkQsWUFBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0g7O0FBRUQsUUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBSyxRQUFMLENBQWMsVUFBbEMsRUFBOEMsYUFBOUMsQ0FBTCxFQUEyRDtBQUN2RCxZQUFNLElBQUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzhGQU91QixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNCLHdCLDJEQUFtQixDO0FBQUcsMEIsMkRBQXFCLEU7O29CQUMvRSwwQkFBWSxPQUFaLENBQW9CLFFBQXBCLEM7Ozs7O3NCQUNLLElBQUksS0FBSixDQUFVLHlDQUFWLEM7OztzQkFHTixDQUFDLDRCQUFhLFFBQWIsQ0FBc0IsUUFBdEIsQ0FBRCxJQUFvQyxRQUFRLElBQUksQzs7Ozs7c0JBQzFDLElBQUksS0FBSixvREFBc0QsUUFBdEQsRTs7O3NCQUdOLENBQUMsNEJBQWEsUUFBYixDQUFzQixVQUF0QixDQUFELElBQXNDLFVBQVUsR0FBRyxDOzs7OztzQkFDN0MsSUFBSSxLQUFKLHVEQUF5RCxVQUF6RCxFOzs7QUFHSiwwQixHQUFhLFFBQVEsQ0FBQyxNQUFULEdBQWtCLFFBQWxCLEdBQThCLElBQUksVTtBQUUvQyxvQixHQUFPLElBQUksVUFBSixDQUFlLFVBQVUsR0FBRyxVQUFiLEdBQTBCLENBQXpDLEM7O0FBQ2IscUJBQVMsQ0FBVCxHQUFhLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUF6QixFQUFpQyxDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFDckMsc0JBQUksQ0FBQyxDQUFELENBQUosR0FBVSxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEdBQXpCLEVBQVY7QUFDQSxzQkFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQWQ7QUFDQSxzQkFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLElBQXpCLEVBQWQ7QUFDQSxzQkFBSSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQUosR0FBYyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQWQ7QUFDSDs7QUFFRyxrQixHQUFLLFVBQVUsR0FBRyxVQUFiLEdBQTBCLEM7O0FBQ25DLHFCQUFTLENBQVQsR0FBYSxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBN0IsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUNoQyxxQkFEZ0MsR0FDMUIsSUFBSSxVQUFKLENBQWUsVUFBVSxHQUFHLENBQTVCLENBRDBCO0FBRWxDLG1CQUZrQyxHQUU5QixDQUY4Qjs7QUFJdEMsdUJBQVMsRUFBVCxHQUFhLENBQWIsRUFBZ0IsRUFBQyxHQUFHLFVBQXBCLEVBQWdDLEVBQUMsRUFBakMsRUFBcUM7QUFDakMsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsR0FBekIsRUFBWDtBQUNBLHVCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQVg7QUFDQSx1QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixJQUF6QixFQUFYO0FBQ0EsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBWDtBQUNIOztBQUVELHVCQUFTLENBQVQsR0FBYSxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksTUFBaEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztBQUNuQywwQkFEbUMsR0FDMUIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosSUFBaUIsS0FBSyxRQUFMLENBQWMsVUFBL0IsR0FBNEMsS0FBSyxRQUFMLENBQWMsVUFEaEM7O0FBRXpDLHlCQUFTLENBQVQsR0FBYSxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFwQixFQUE4QixDQUFDLEVBQS9CLEVBQW9DO0FBQ2hDLHlCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxNQUFNLENBQUMsR0FBUCxFQUFYO0FBQ0EseUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLE1BQU0sQ0FBQyxLQUFQLEVBQVg7QUFDQSx5QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsTUFBTSxDQUFDLElBQVAsRUFBWDtBQUNBLHlCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxNQUFNLENBQUMsS0FBUCxFQUFYO0FBQ0g7QUFDSjs7QUFFRCx1QkFBUyxHQUFULEdBQWEsQ0FBYixFQUFnQixHQUFDLEdBQUcsVUFBcEIsRUFBZ0MsR0FBQyxFQUFqQyxFQUFzQztBQUNsQyx1QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixHQUF6QixFQUFYO0FBQ0EsdUJBQUcsQ0FBQyxDQUFDLEVBQUYsQ0FBSCxHQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBWDtBQUNBLHVCQUFHLENBQUMsQ0FBQyxFQUFGLENBQUgsR0FBVyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLElBQXpCLEVBQVg7QUFDQSx1QkFBRyxDQUFDLENBQUMsRUFBRixDQUFILEdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixFQUFYO0FBQ0g7O0FBRUQsdUJBQVMsRUFBVCxHQUFhLENBQWIsRUFBZ0IsRUFBQyxHQUFHLFFBQXBCLEVBQThCLEVBQUMsRUFBL0IsRUFBbUM7QUFDL0Isd0JBQUksQ0FBQyxHQUFMLENBQVMsR0FBVCxFQUFjLEVBQWQ7QUFDQSxzQkFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFWO0FBQ0g7QUFDSjs7aURBRU0sSUFBSSx1QkFBSixHQUFpQixNQUFqQixDQUF3QixDQUFDLElBQUksQ0FBQyxNQUFOLENBQXhCLEVBQXVDLFVBQXZDLEVBQW1ELFVBQW5ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWDs7Ozs7Ozs7Ozs7OzsrRkFPd0IsUTs7Ozs7Ozs7OztBQUFzQix3Qiw4REFBbUIsQztBQUFHLDBCLDhEQUFxQixFOzt1QkFDbkUsS0FBSyxTQUFMLENBQWUsUUFBZixFQUF5QixRQUF6QixFQUFtQyxVQUFuQyxDOzs7QUFBWixtQjtBQUVBLG1CLEdBQU0sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQztBQUNaLG1CQUFHLENBQUMsU0FBSixDQUFjLEdBQWQsQ0FBa0IsS0FBSyxRQUFMLENBQWMsUUFBaEM7QUFDQSxtQkFBRyxDQUFDLEdBQUosR0FBVSwwQkFBWSxpQkFBWixDQUE4QixXQUE5QixFQUEyQyxHQUEzQyxDQUFWO2tEQUVPLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpHZixrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0lBR2Esa0I7Ozs7QUFBYixnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBS0E7Ozs7O0lBR2EsVzs7O0FBSVQ7Ozs7QUFJQSx1QkFBWSxPQUFaLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUssUUFBTCxHQUFnQixPQUFPLElBQUksRUFBM0I7QUFDQSxTQUFLLFFBQUwsQ0FBYyxjQUFkLEdBQStCLEtBQUssUUFBTCxDQUFjLGNBQWQsSUFBZ0MsT0FBL0Q7O0FBRUEsUUFBSSxLQUFLLFFBQUwsQ0FBYyxjQUFkLEtBQWlDLE9BQWpDLElBQ0EsS0FBSyxRQUFMLENBQWMsY0FBZCxLQUFpQyxRQURqQyxJQUVBLEtBQUssUUFBTCxDQUFjLGNBQWQsS0FBaUMsUUFGckMsRUFFK0M7QUFDM0MsWUFBTSxJQUFJLEtBQUosQ0FBVSw0REFBVixDQUFOO0FBQ0g7O0FBRUQsUUFBSSxLQUFLLFFBQUwsQ0FBYyxjQUFkLEtBQWlDLE9BQXJDLEVBQThDO0FBQzFDLFdBQUssUUFBTCxDQUFjLFVBQWQsR0FBMkIsS0FBSyxRQUFMLENBQWMsVUFBZCxJQUE0QixjQUFNLE9BQU4sQ0FBYyxTQUFkLENBQXZEOztBQUNBLFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQUssUUFBTCxDQUFjLFVBQWxDLEVBQThDLGFBQTlDLENBQUwsRUFBMkQ7QUFDdkQsY0FBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0g7QUFDSixLQUxELE1BS08sSUFBSSxLQUFLLFFBQUwsQ0FBYyxjQUFkLEtBQWlDLFFBQXJDLEVBQStDO0FBQ2xELFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQUssUUFBTCxDQUFjLGdCQUFsQyxFQUFvRCwrQkFBcEQsQ0FBTCxFQUEwRTtBQUN0RSxjQUFNLElBQUksS0FBSixDQUFVLDhEQUFWLENBQU47QUFDSDtBQUNKLEtBSk0sTUFJQSxJQUFJLEtBQUssUUFBTCxDQUFjLGNBQWQsS0FBaUMsUUFBckMsRUFBK0M7QUFDbEQsVUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBSyxRQUFMLENBQWMsZ0JBQWxDLEVBQW9ELCtCQUFwRCxDQUFMLEVBQTBFO0FBQ3RFLGNBQU0sSUFBSSxLQUFKLENBQVUsOERBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBRUQsU0FBSyxRQUFMLENBQWMsVUFBZCxHQUEyQixLQUFLLFFBQUwsQ0FBYyxVQUFkLElBQTRCLGNBQU0sT0FBTixDQUFjLFNBQWQsQ0FBdkQ7QUFDQSxTQUFLLFFBQUwsQ0FBYyxRQUFkLEdBQXlCLEtBQUssUUFBTCxDQUFjLFFBQWQsSUFBMEIsUUFBbkQ7O0FBRUEsUUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBSyxRQUFMLENBQWMsVUFBbEMsRUFBOEMsYUFBOUMsQ0FBTCxFQUEyRDtBQUN2RCxZQUFNLElBQUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7OEZBT3VCLFE7Ozs7Ozs7OztBQUFzQix3QiwyREFBbUIsQztBQUFHLDBCLDJEQUFxQixFO0FBQzlFLHdCLEdBQVcsS0FBSyxhQUFMLENBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLEVBQXVDLFVBQXZDLEM7aURBQ1YsV0FBVyxDQUFDLGFBQVosQ0FBMEIsUUFBUSxDQUFDLEtBQW5DLEVBQTBDLFFBQVEsQ0FBQyxNQUFuRCxFQUEyRCxRQUFRLENBQUMsT0FBcEUsRUFBNkUsS0FBN0UsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7Ozs7OytGQU93QixROzs7Ozs7Ozs7O0FBQXNCLHdCLDhEQUFtQixDO0FBQUcsMEIsOERBQXFCLEU7QUFDL0Usd0IsR0FBVyxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkIsUUFBN0IsRUFBdUMsVUFBdkMsQztBQUVYLG1CLEdBQU0sUUFBUSxDQUFDLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELEM7QUFDWixtQkFBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsWUFBNkIsUUFBUSxDQUFDLEtBQXRDO0FBQ0EsbUJBQUcsQ0FBQyxZQUFKLENBQWlCLFFBQWpCLFlBQThCLFFBQVEsQ0FBQyxNQUF2QztBQUNBLG1CQUFHLENBQUMsU0FBSixDQUFjLEdBQWQsQ0FBa0IsS0FBSyxRQUFMLENBQWMsUUFBaEMsRSxDQUNBOztBQUNBLG1CQUFHLENBQUMsU0FBSixHQUFnQixRQUFRLENBQUMsT0FBekI7a0RBRU8sRzs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7O2tDQU9xQixRLEVBQXVCLFEsRUFBa0IsVSxFQUFrQjtBQUM1RSxVQUFJLENBQUMsMEJBQVksT0FBWixDQUFvQixRQUFwQixDQUFMLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSSxLQUFKLENBQVUseUNBQVYsQ0FBTjtBQUNIOztBQUVELFVBQUksQ0FBQyw0QkFBYSxRQUFiLENBQXNCLFFBQXRCLENBQUQsSUFBb0MsUUFBUSxJQUFJLENBQXBELEVBQXVEO0FBQ25ELGNBQU0sSUFBSSxLQUFKLG9EQUFzRCxRQUF0RCxFQUFOO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLDRCQUFhLFFBQWIsQ0FBc0IsVUFBdEIsQ0FBRCxJQUFzQyxVQUFVLEdBQUcsQ0FBdkQsRUFBMEQ7QUFDdEQsY0FBTSxJQUFJLEtBQUosdURBQXlELFVBQXpELEVBQU47QUFDSDs7QUFFRCxVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBVCxHQUFrQixRQUFsQixHQUE4QixJQUFJLFVBQXJEO0FBQ0EsVUFBSSxPQUFPLEtBQVg7QUFDQSxVQUFJLE9BQU8sS0FBWDs7QUFFQSxVQUFJLEtBQUssUUFBTCxDQUFjLGNBQWQsS0FBaUMsUUFBakMsSUFBNkMsS0FBSyxRQUFMLENBQWMsY0FBZCxLQUFpQyxRQUFsRixFQUE0RjtBQUN4RixlQUFPLEdBQUcsY0FBVjtBQUNBLGVBQU8sWUFBUDs7QUFDQSxZQUFJLEtBQUssUUFBTCxDQUFjLGNBQWQsS0FBaUMsUUFBckMsRUFBK0M7QUFDM0MsaUJBQU8sSUFBSSxLQUFLLG9CQUFMLENBQTBCLEtBQUssUUFBTCxDQUFjLGdCQUF4QyxFQUEwRCxRQUExRCxDQUFYO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQU8sSUFBSSxLQUFLLG9CQUFMLENBQTBCLEtBQUssUUFBTCxDQUFjLGdCQUF4QyxFQUEwRCxRQUExRCxDQUFYO0FBQ0g7O0FBQ0QsZUFBTyxhQUFQO0FBQ0gsT0FURCxNQVNPO0FBQ0gsZUFBTyxHQUFHLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsR0FBekIsRUFBVjtBQUNIOztBQUVELGFBQU8sNENBQWdDLFVBQWhDLHlCQUF1RCxVQUF2RCx1QkFBNEUsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixHQUF6QixFQUE1RSxVQUFQO0FBQ0EsVUFBSSxXQUFXLEdBQUcsRUFBbEI7O0FBQ0EsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBN0IsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxNQUFoQyxFQUF3QyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGNBQUksUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBSixFQUFvQjtBQUNoQix1QkFBVyxlQUFRLENBQUMsR0FBRyxRQUFKLEdBQWUsVUFBdkIsY0FBcUMsQ0FBQyxHQUFHLFFBQUosR0FBZSxVQUFwRCxlQUFtRSxRQUFuRSxlQUFnRixRQUFoRixnQkFBOEYsUUFBOUYsT0FBWDtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxhQUFPLDJCQUFtQixPQUFuQixvQkFBa0MsV0FBVyxDQUFDLElBQVosRUFBbEMsU0FBUDtBQUNBLGFBQU87QUFBRSxhQUFLLEVBQUUsVUFBVDtBQUFxQixjQUFNLEVBQUUsVUFBN0I7QUFBeUMsZUFBTyxFQUFFO0FBQWxELE9BQVA7QUFDSDs7O3dDQUUyQixLLEVBQWdEO0FBQ3hFLFVBQUksTUFBTSxLQUFWOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQTFCLEVBQWtDLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsY0FBTSw2QkFBcUIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLGFBQTlCLDhCQUE2RCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsS0FBVCxDQUFlLEdBQWYsRUFBN0QsU0FBTjtBQUNIOztBQUNELGFBQU8sTUFBUDtBQUNIOzs7eUNBRTRCLFEsRUFBMEIsRSxFQUFVO0FBQzdELFVBQUksTUFBTSxrQ0FBMEIsRUFBMUIsT0FBVjs7QUFDQSxVQUFJLFFBQVEsQ0FBQyxLQUFULE9BQXFCLFNBQXpCLEVBQW9DO0FBQ2hDLGNBQU0sMENBQWtDLFFBQVEsQ0FBQyxLQUFULEVBQWxDLFFBQU47QUFDSDs7QUFDRCxZQUFNLGVBQVEsS0FBSyxtQkFBTCxDQUF5QixRQUFRLENBQUMsS0FBVCxFQUF6QixDQUFSLHNCQUFOO0FBQ0EsYUFBTyxNQUFQO0FBQ0g7Ozt5Q0FFNEIsUSxFQUEwQixFLEVBQVU7QUFDN0QsVUFBSSxNQUFNLGtDQUEwQixFQUExQixPQUFWOztBQUNBLFVBQUksUUFBUSxDQUFDLGNBQVQsT0FBOEIsU0FBbEMsRUFBNkM7QUFDekMsY0FBTSxvQkFBWSxRQUFRLENBQUMsY0FBVCxFQUFaLFFBQU47QUFDSDs7QUFDRCxVQUFJLFFBQVEsQ0FBQyxjQUFULE9BQThCLFNBQWxDLEVBQTZDO0FBQ3pDLGNBQU0sb0JBQVksUUFBUSxDQUFDLGNBQVQsRUFBWixRQUFOO0FBQ0g7O0FBQ0QsVUFBSSxRQUFRLENBQUMsYUFBVCxPQUE2QixTQUFqQyxFQUE0QztBQUN4QyxjQUFNLG1CQUFXLFFBQVEsQ0FBQyxhQUFULEVBQVgsUUFBTjtBQUNIOztBQUNELFlBQU0sZUFBUSxLQUFLLG1CQUFMLENBQXlCLFFBQVEsQ0FBQyxLQUFULEVBQXpCLENBQVIsc0JBQU47QUFDQSxhQUFPLE1BQVA7QUFDSDs7O2tDQTNIMkIsSyxFQUFlLE0sRUFBZ0IsTyxFQUFpQixxQixFQUE4QjtBQUN0RyxVQUFJLElBQUksS0FBUjs7QUFDQSxVQUFJLHFCQUFKLEVBQTJCO0FBQ3ZCLFlBQUksK0NBQUo7QUFDSDs7QUFDRCxVQUFJLDJCQUFtQixLQUFuQix5QkFBcUMsTUFBckMsNkNBQUo7QUFDQSxVQUFJLElBQUksT0FBUjtBQUNBLFVBQUksWUFBSjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7Ozs7QUExREwsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7OztJQUdhLGtCOzs7O0FBQWIsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7QUFDQTtBQUtBOzs7OztJQUdhLFk7OztBQUlUOzs7O0FBSUEsd0JBQVksT0FBWixFQUF5QztBQUFBOztBQUNyQyxTQUFLLFFBQUwsR0FBZ0IsT0FBTyxJQUFJLEVBQTNCO0FBQ0EsU0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixLQUFLLFFBQUwsQ0FBYyxNQUFkLElBQXdCLElBQS9DO0FBQ0EsU0FBSyxRQUFMLENBQWMsT0FBZCxHQUF3QixLQUFLLFFBQUwsQ0FBYyxPQUFkLElBQXlCLElBQWpEO0FBQ0EsU0FBSyxRQUFMLENBQWMsUUFBZCxHQUF5QixLQUFLLFFBQUwsQ0FBYyxRQUFkLElBQTBCLFNBQW5EO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OEZBT3VCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Isd0IsMkRBQW1CLEM7QUFBRywwQiwyREFBcUIsQzs7b0JBQy9FLDBCQUFZLE9BQVosQ0FBb0IsUUFBcEIsQzs7Ozs7c0JBQ0ssSUFBSSxLQUFKLENBQVUseUNBQVYsQzs7O3NCQUdOLENBQUMsNEJBQWEsUUFBYixDQUFzQixRQUF0QixDQUFELElBQW9DLFFBQVEsSUFBSSxDOzs7OztzQkFDMUMsSUFBSSxLQUFKLG9EQUFzRCxRQUF0RCxFOzs7c0JBR04sQ0FBQyw0QkFBYSxRQUFiLENBQXNCLFVBQXRCLENBQUQsSUFBc0MsVUFBVSxHQUFHLEM7Ozs7O3NCQUM3QyxJQUFJLEtBQUosdURBQXlELFVBQXpELEU7OztBQUdOLG9CLEdBQU8sRTs7QUFDWCxxQkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsVUFBcEIsRUFBZ0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxzQkFBSSxjQUFPLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsTUFBdEIsQ0FBNkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFqRCxDQUFQLFNBQUo7QUFDSDs7QUFDRCxxQkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQTdCLEVBQXFDLENBQUMsRUFBdEMsRUFBMEM7QUFDbEMsc0JBRGtDLEdBQzNCLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsTUFBdEIsQ0FBNkIsVUFBN0IsQ0FEMkI7O0FBRXRDLHVCQUFTLENBQVQsR0FBYSxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksTUFBaEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztBQUN6Qyx3QkFBSSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksQ0FBWixDQUFKLEVBQW9CO0FBQ2hCLDBCQUFJLElBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixNQUFyQixDQUE0QixRQUE1QixDQUFSO0FBQ0gscUJBRkQsTUFFTztBQUNILDBCQUFJLElBQUksS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixNQUF0QixDQUE2QixRQUE3QixDQUFSO0FBQ0g7QUFDSjs7QUFDRCxzQkFBSSxJQUFJLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsTUFBdEIsQ0FBNkIsVUFBN0IsQ0FBUjtBQUNBLHNCQUFJLElBQUksTUFBUjs7QUFFQSx1QkFBUyxDQUFULEdBQWEsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBcEIsRUFBOEIsQ0FBQyxFQUEvQixFQUFtQztBQUMvQix3QkFBSSxJQUFJLElBQVI7QUFDSDtBQUNKOztBQUNELHFCQUFTLEVBQVQsR0FBYSxDQUFiLEVBQWdCLEVBQUMsR0FBRyxVQUFwQixFQUFnQyxFQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLHNCQUFJLGNBQU8sS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixNQUF0QixDQUE2QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQWpELENBQVAsU0FBSjtBQUNIOztpREFDTSxJOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1g7Ozs7Ozs7Ozs7Ozs7K0ZBT3dCLFE7Ozs7Ozs7Ozs7QUFBc0Isd0IsOERBQW1CLEM7QUFBRywwQiw4REFBcUIsQzs7dUJBQ25FLEtBQUssU0FBTCxDQUFlLFFBQWYsRUFBeUIsUUFBekIsRUFBbUMsVUFBbkMsQzs7O0FBQVosbUI7QUFFQSxtQixHQUFNLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLEM7QUFDWixtQkFBRyxDQUFDLFNBQUosQ0FBYyxHQUFkLENBQWtCLEtBQUssUUFBTCxDQUFjLFFBQWhDLEUsQ0FDQTs7QUFDQSxtQkFBRyxDQUFDLFNBQUosR0FBZ0IsR0FBRyxDQUFDLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLEVBQXVCLE9BQXZCLENBQStCLEtBQS9CLEVBQXNDLE9BQXRDLEVBQStDLE9BQS9DLENBQXVELElBQXZELEVBQTZELFFBQTdELENBQWhCO2tEQUNPLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTNFZixvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0lBR2EsbUI7Ozs7QUFBYixrRDs7Ozs7Ozs7Ozs7QUNIQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBcUI7Ozs7Ozs7Ozs7Ozs7QUNBakM7OztBQUdiLG1CQUFtQixtQkFBTyxDQUFDLCtEQUFnQjtBQUMzQyxtQkFBbUIsbUJBQU8sQ0FBQywrREFBZ0I7QUFDM0MsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWlCO0FBQzVDLG1CQUFtQixtQkFBTyxDQUFDLGlFQUFpQjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQywrREFBZ0I7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTs7QUFFbkU7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7O0FBRWI7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTyxFQUFFO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxtQkFBbUI7O0FBRW5COztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTyxFQUFFO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNodEJBLHFGOzs7Ozs7Ozs7OztBQ0FBLDhGOzs7Ozs7Ozs7OztBQ0FBLDhGOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLDhGOzs7Ozs7Ozs7OztBQ0FBLCtGOzs7Ozs7Ozs7OztBQ0FBLCtGOzs7Ozs7Ozs7OztBQ0FBLCtGIiwiZmlsZSI6InRhbmdsZS1mcm9zdC1pb3RhLXFyLXJlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9saW5lYXJHcmFkaWVudFwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9yYWRpYWxHcmFkaWVudFwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLXJlbmRlclwiLCBbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvbGluZWFyR3JhZGllbnRcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvcmFkaWFsR3JhZGllbnRcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtcXItcmVuZGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2xpbmVhckdyYWRpZW50XCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhbmdsZUZyb3N0SW90YVFyUmVuZGVyXCJdID0gZmFjdG9yeShyb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2xpbmVhckdyYWRpZW50XCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiXSwgcm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX2NvbG9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX2xpbmVhckdyYWRpZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX3JhZGlhbEdyYWRpZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9mYWN0b3JpZXNfZmFjdG9yeUJhc2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfYXJyYXlIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19zdHJpbmdIZWxwZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgUVIgcmVuZGVyZXJzLlxyXG4gKi9cclxuY2xhc3MgUVJSZW5kZXJlckZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVFSUmVuZGVyZXJGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBRUlJlbmRlcmVyRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUVJSZW5kZXJlckZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFFSUmVuZGVyZXJGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUlJlbmRlcmVyRmFjdG9yeSA9IFFSUmVuZGVyZXJGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpTWlc1a1pYSmxja1poWTNSdmNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwzRnlVbVZ1WkdWeVpYSkdZV04wYjNKNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN4dlJrRkJhVVk3UVVGSGFrWTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExHbENRVUZyUWl4VFFVRlJMSGxDUVVGM1FqdEpRVWt6UkRzN08wOUJSMGM3U1VGRFNEdFJRVU5KTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZET1VJc2FVSkJRV2xDTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFOUJRVThzYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeFBRVUZQTEdsQ1FVRnBRaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEzaERMRU5CUVVNN1EwRkRTanRCUVROQ1JDdzRRMEV5UWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byBoZWxwIHdpdGggbWFuaXB1bGF0aW5nIGltYWdlIGRhdGEuXHJcbiAqL1xyXG5jbGFzcyBJbWFnZUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGRhdGEgdG8gYW4gaW1hZ2Ugc291cmNlLlxyXG4gICAgICogQHBhcmFtIG1pbWVUeXBlIFRoZSBtaW1lIHR5cGUgb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgc291cmNlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaW1hZ2Ugc291cmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGF0YVRvSW1hZ2VTb3VyY2UobWltZVR5cGUsIGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkobWltZVR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHByb3ZpZGVyIGEgbWltZVR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWFnZVNvdXJjZTtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkYXRhLCBVaW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICBsZXQgYmluYXJ5ID0gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSBidG9hKGJpbmFyeSk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gYGRhdGE6JHttaW1lVHlwZX07YmFzZTY0LCR7YmFzZTY0RGF0YX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcoZGF0YSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RGF0YSA9IGJ0b2EoZGF0YSk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gYGRhdGE6JHttaW1lVHlwZX07YmFzZTY0LCR7YmFzZTY0RGF0YX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIFVpbnQ4QXJyYXkgb3Igc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbWFnZUhlbHBlciA9IEltYWdlSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzFoWjJWSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OXBiV0ZuWlVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiMFpCUVdsR08wRkJRMnBHTEc5R1FVRnBSanRCUVVOcVJqczdSMEZGUnp0QlFVTklMRTFCUVdFc1YwRkJWenRKUVVOd1FqczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZuUWl4RlFVRkZMRWxCUVhsQ08xRkJRM1pGTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRMjVFTzFGQlJVUXNTVUZCU1N4WFFVRlhMRU5CUVVNN1VVRkZhRUlzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVTdXVUZEZGtNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyaENMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZEZUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETVVJc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFWTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJFUTdXVUZEUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEYUVNc1YwRkJWeXhIUVVGSExGRkJRVkVzVVVGQlVTeFhRVUZYTEZWQlFWVXNSVUZCUlN4RFFVRkRPMU5CUTNwRU8yRkJRVTBzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU53UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZET1VJc1YwRkJWeXhIUVVGSExGRkJRVkVzVVVGQlVTeFhRVUZYTEZWQlFWVXNSVUZCUlN4RFFVRkRPMU5CUTNwRU8yRkJRVTA3V1VGRFNDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVMEZET1VRN1VVRkZSQ3hQUVVGUExGZEJRVmNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRXZRa1FzYTBOQkswSkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSlBFRyBFbmNvZGVyLlxyXG4gKiBCYXNlZCBvbiBKUEVHIGVuY29kZXIgcG9ydGVkIHRvIEphdmFTY3JpcHQgYW5kIG9wdGltaXplZCBieSBBbmRyZWFzIFJpdHRlciwgd3d3LmJ5dGVzdHJvbS5ldSwgMTEvMjAwOVxyXG4gKi9cclxuY2xhc3MgSnBlZ0VuY29kZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgSnBlZ0VuY29kZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3lUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fdXZUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fZmR0YmxZID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9mZHRibFVWID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9iaXRDb2RlID0gbmV3IEFycmF5KDY1NTM1KTtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IG5ldyBBcnJheSg2NTUzNSk7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0ZkRDVFF1YW50ID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9kdSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU91dCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2J5dGVOZXcgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J5dGVQb3MgPSA3O1xyXG4gICAgICAgIHRoaXMuX3lkdSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fdWR1ID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl92ZHUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX3JnYll1dlRhYmxlID0gbmV3IEFycmF5KDIwNDgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEh1ZmZtYW5UYmwoKTtcclxuICAgICAgICB0aGlzLmluaXRDYXRlZ29yeU51bWJlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFJHQllVVlRhYmxlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSB0aGUgaW1hZ2Ugd2l0aCB0aGUgZ2l2ZW4gcXVhbGl0eS5cclxuICAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGltYWdlIHRvIGVuY29kZS5cclxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIGltYWdlRGF0YSBUaGUgZGF0YSBmb3IgdGhlIGltYWdlLlxyXG4gICAgICogQHBhcmFtIHF1YWxpdHkgVGhlIHF1YWxpdHkgdG8gZW5jb2RlIHRoZSBpbWFnZSBhdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIGZvciB0aGUgZW5jb2RlZCBpbWFnZS5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlKHdpZHRoLCBoZWlnaHQsIGltYWdlRGF0YSwgcXVhbGl0eSkge1xyXG4gICAgICAgIHRoaXMuc2V0UXVhbGl0eShxdWFsaXR5KTtcclxuICAgICAgICAvLyBJbml0aWFsaXplIGJpdCB3cml0ZXJcclxuICAgICAgICB0aGlzLl9ieXRlT3V0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU5ldyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnl0ZVBvcyA9IDc7XHJcbiAgICAgICAgLy8gQWRkIEpQRUcgaGVhZGVyc1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZEOCk7IC8vIFNPSVxyXG4gICAgICAgIHRoaXMud3JpdGVBUFAwKCk7XHJcbiAgICAgICAgdGhpcy53cml0ZURRVCgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVTT0YwKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud3JpdGVESFQoKTtcclxuICAgICAgICB0aGlzLndyaXRlU09TKCk7XHJcbiAgICAgICAgLy8gRW5jb2RlIDh4OCBtYWNyb2Jsb2Nrc1xyXG4gICAgICAgIGxldCBEQ1kgPSAwO1xyXG4gICAgICAgIGxldCBEQ1UgPSAwO1xyXG4gICAgICAgIGxldCBEQ1YgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J5dGVOZXcgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J5dGVQb3MgPSA3O1xyXG4gICAgICAgIGNvbnN0IHF1YWRXaWR0aCA9IHdpZHRoICogNDtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBsZXQgeSA9IDA7XHJcbiAgICAgICAgbGV0IHI7XHJcbiAgICAgICAgbGV0IGc7XHJcbiAgICAgICAgbGV0IGI7XHJcbiAgICAgICAgbGV0IHN0YXJ0O1xyXG4gICAgICAgIGxldCBwO1xyXG4gICAgICAgIGxldCBjb2w7XHJcbiAgICAgICAgbGV0IHJvdztcclxuICAgICAgICBsZXQgcG9zO1xyXG4gICAgICAgIHdoaWxlICh5IDwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoeCA8IHF1YWRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBxdWFkV2lkdGggKiB5ICsgeDtcclxuICAgICAgICAgICAgICAgIHAgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIGNvbCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcm93ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAocG9zID0gMDsgcG9zIDwgNjQ7IHBvcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcG9zID4+IDM7IC8vIC84XHJcbiAgICAgICAgICAgICAgICAgICAgY29sID0gKHBvcyAmIDcpICogNDsgLy8gJThcclxuICAgICAgICAgICAgICAgICAgICBwID0gc3RhcnQgKyAocm93ICogcXVhZFdpZHRoKSArIGNvbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSArIHJvdyA+PSBoZWlnaHQpIHsgLy8gcGFkZGluZyBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAtPSAocXVhZFdpZHRoICogKHkgKyAxICsgcm93IC0gaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICsgY29sID49IHF1YWRXaWR0aCkgeyAvLyBwYWRkaW5nIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgLT0gKCh4ICsgY29sKSAtIHF1YWRXaWR0aCArIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByID0gaW1hZ2VEYXRhW3ArK107XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBpbWFnZURhdGFbcCsrXTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAvLyBjYWxjdWxhdGUgWVVWIHZhbHVlcyBkeW5hbWljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIFlEVVtwb3NdPSgoKCAwLjI5OTAwKSpyKyggMC41ODcwMCkqZysoIDAuMTE0MDApKmIpKS0xMjg7IC8vLTB4ODBcclxuICAgICAgICAgICAgICAgICAgICBVRFVbcG9zXT0oKCgtMC4xNjg3NCkqcisoLTAuMzMxMjYpKmcrKCAwLjUwMDAwKSpiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVkRVW3Bvc109KCgoIDAuNTAwMDApKnIrKC0wLjQxODY5KSpnKygtMC4wODEzMSkqYikpO1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIGxvb2t1cCB0YWJsZSAoc2xpZ2h0bHkgZmFzdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3lkdVtwb3NdID0gKCh0aGlzLl9yZ2JZdXZUYWJsZVtyXSArIHRoaXMuX3JnYll1dlRhYmxlWyhnICsgMjU2KSA+PiAwXSArIHRoaXMuX3JnYll1dlRhYmxlWyhiICsgNTEyKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VkdVtwb3NdID0gKCh0aGlzLl9yZ2JZdXZUYWJsZVsociArIDc2OCkgPj4gMF0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoZyArIDEwMjQpID4+IDBdICsgdGhpcy5fcmdiWXV2VGFibGVbKGIgKyAxMjgwKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZkdVtwb3NdID0gKCh0aGlzLl9yZ2JZdXZUYWJsZVsociArIDEyODApID4+IDBdICsgdGhpcy5fcmdiWXV2VGFibGVbKGcgKyAxNTM2KSA+PiAwXSArIHRoaXMuX3JnYll1dlRhYmxlWyhiICsgMTc5MikgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERDWSA9IHRoaXMucHJvY2Vzc0RVKHRoaXMuX3lkdSwgdGhpcy5fZmR0YmxZLCBEQ1ksIHRoaXMuX3lkY0hhc2hUYWJsZSwgdGhpcy5feWFjSGFzaFRhYmxlKTtcclxuICAgICAgICAgICAgICAgIERDVSA9IHRoaXMucHJvY2Vzc0RVKHRoaXMuX3VkdSwgdGhpcy5fZmR0YmxVViwgRENVLCB0aGlzLl91dmRjSGFzaFRhYmxlLCB0aGlzLl91dmFjSGFzaFRhYmxlKTtcclxuICAgICAgICAgICAgICAgIERDViA9IHRoaXMucHJvY2Vzc0RVKHRoaXMuX3ZkdSwgdGhpcy5fZmR0YmxVViwgRENWLCB0aGlzLl91dmRjSGFzaFRhYmxlLCB0aGlzLl91dmFjSGFzaFRhYmxlKTtcclxuICAgICAgICAgICAgICAgIHggKz0gMzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeSArPSA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyB0aGUgYml0IGFsaWdubWVudCBvZiB0aGUgRU9JIG1hcmtlclxyXG4gICAgICAgIGlmICh0aGlzLl9ieXRlUG9zID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsbGJpdHMgPSBbXTtcclxuICAgICAgICAgICAgZmlsbGJpdHNbMV0gPSB0aGlzLl9ieXRlUG9zICsgMTtcclxuICAgICAgICAgICAgZmlsbGJpdHNbMF0gPSAoMSA8PCAodGhpcy5fYnl0ZVBvcyArIDEpKSAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKGZpbGxiaXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkQ5KTsgLy9FT0lcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnl0ZU91dCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldFF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgICAgIGlmIChxdWFsaXR5IDw9IDAgfHwgcXVhbGl0eSA+IDEwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFF1YWxpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEwMCwgaXQgaXMgJHtxdWFsaXR5fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2YgPSAwO1xyXG4gICAgICAgIGlmIChxdWFsaXR5IDwgNTApIHtcclxuICAgICAgICAgICAgc2YgPSBNYXRoLmZsb29yKDUwMDAgLyBxdWFsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNmID0gTWF0aC5mbG9vcigyMDAgLSBxdWFsaXR5ICogMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFF1YW50VGFibGVzKHNmKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgaW5pdFF1YW50VGFibGVzKHNmKSB7XHJcbiAgICAgICAgY29uc3QgWVFUID0gW1xyXG4gICAgICAgICAgICAxNiwgMTEsIDEwLCAxNiwgMjQsIDQwLCA1MSwgNjEsXHJcbiAgICAgICAgICAgIDEyLCAxMiwgMTQsIDE5LCAyNiwgNTgsIDYwLCA1NSxcclxuICAgICAgICAgICAgMTQsIDEzLCAxNiwgMjQsIDQwLCA1NywgNjksIDU2LFxyXG4gICAgICAgICAgICAxNCwgMTcsIDIyLCAyOSwgNTEsIDg3LCA4MCwgNjIsXHJcbiAgICAgICAgICAgIDE4LCAyMiwgMzcsIDU2LCA2OCwgMTA5LCAxMDMsIDc3LFxyXG4gICAgICAgICAgICAyNCwgMzUsIDU1LCA2NCwgODEsIDEwNCwgMTEzLCA5MixcclxuICAgICAgICAgICAgNDksIDY0LCA3OCwgODcsIDEwMywgMTIxLCAxMjAsIDEwMSxcclxuICAgICAgICAgICAgNzIsIDkyLCA5NSwgOTgsIDExMiwgMTAwLCAxMDMsIDk5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBNYXRoLmZsb29yKChZUVRbaV0gKiBzZiArIDUwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh0IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodCA+IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl95VGFibGVbSnBlZ0VuY29kZXIuU0lHX1pBR1tpXV0gPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBVVlFUID0gW1xyXG4gICAgICAgICAgICAxNywgMTgsIDI0LCA0NywgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDE4LCAyMSwgMjYsIDY2LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgMjQsIDI2LCA1NiwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA0NywgNjYsIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2NDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCB1ID0gTWF0aC5mbG9vcigoVVZRVFtqXSAqIHNmICsgNTApIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB1ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1ID4gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICB1ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3V2VGFibGVbSnBlZ0VuY29kZXIuU0lHX1pBR1tqXV0gPSB1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhYXNmID0gW1xyXG4gICAgICAgICAgICAxLCAxLjM4NzAzOTg0NSwgMS4zMDY1NjI5NjUsIDEuMTc1ODc1NjAyLFxyXG4gICAgICAgICAgICAxLCAwLjc4NTY5NDk1OCwgMC41NDExOTYxLCAwLjI3NTg5OTM3OVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mZHRibFlba10gPSAoMSAvICh0aGlzLl95VGFibGVbSnBlZ0VuY29kZXIuU0lHX1pBR1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mZHRibFVWW2tdID0gKDEgLyAodGhpcy5fdXZUYWJsZVtKcGVnRW5jb2Rlci5TSUdfWkFHW2tdXSAqIGFhc2Zbcm93XSAqIGFhc2ZbY29sXSAqIDgpKTtcclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29tcHV0ZUh1ZmZtYW5UYmwobnJjb2Rlcywgc3RkVGFibGUpIHtcclxuICAgICAgICBsZXQgY29kZXZhbHVlID0gMDtcclxuICAgICAgICBsZXQgcG9zSW5UYWJsZSA9IDA7XHJcbiAgICAgICAgY29uc3QgSFQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8PSAxNjsgaysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IG5yY29kZXNba107IGorKykge1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkVGFibGVbcG9zSW5UYWJsZV1dID0gW107XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRUYWJsZVtwb3NJblRhYmxlXV1bMF0gPSBjb2RldmFsdWU7XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRUYWJsZVtwb3NJblRhYmxlXV1bMV0gPSBrO1xyXG4gICAgICAgICAgICAgICAgcG9zSW5UYWJsZSsrO1xyXG4gICAgICAgICAgICAgICAgY29kZXZhbHVlKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZXZhbHVlICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBIVDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgaW5pdEh1ZmZtYW5UYmwoKSB7XHJcbiAgICAgICAgdGhpcy5feWRjSGFzaFRhYmxlID0gdGhpcy5jb21wdXRlSHVmZm1hblRibChKcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX05SQ09ERVMsIEpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfVkFMVUVTKTtcclxuICAgICAgICB0aGlzLl91dmRjSGFzaFRhYmxlID0gdGhpcy5jb21wdXRlSHVmZm1hblRibChKcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfTlJDT0RFUywgSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX1ZBTFVFUyk7XHJcbiAgICAgICAgdGhpcy5feWFjSGFzaFRhYmxlID0gdGhpcy5jb21wdXRlSHVmZm1hblRibChKcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX05SQ09ERVMsIEpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfVkFMVUVTKTtcclxuICAgICAgICB0aGlzLl91dmFjSGFzaFRhYmxlID0gdGhpcy5jb21wdXRlSHVmZm1hblRibChKcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfTlJDT0RFUywgSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX1ZBTFVFUyk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGluaXRDYXRlZ29yeU51bWJlcigpIHtcclxuICAgICAgICBsZXQgbnJsb3dlciA9IDE7XHJcbiAgICAgICAgbGV0IG5ydXBwZXIgPSAyO1xyXG4gICAgICAgIGZvciAobGV0IGNhdCA9IDE7IGNhdCA8PSAxNTsgY2F0KyspIHtcclxuICAgICAgICAgICAgLy9Qb3NpdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5yID0gbnJsb3dlcjsgbnIgPCBucnVwcGVyOyBucisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXRlZ29yeVszMjc2NyArIG5yXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucl0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucl1bMV0gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJdWzBdID0gbnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9OZWdhdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5ybmVnID0gLShucnVwcGVyIC0gMSk7IG5ybmVnIDw9IC1ucmxvd2VyOyBucm5lZysrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXRlZ29yeVszMjc2NyArIG5ybmVnXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucm5lZ10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucm5lZ11bMV0gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRDb2RlWzMyNzY3ICsgbnJuZWddWzBdID0gbnJ1cHBlciAtIDEgKyBucm5lZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBucmxvd2VyIDw8PSAxO1xyXG4gICAgICAgICAgICBucnVwcGVyIDw8PSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgaW5pdFJHQllVVlRhYmxlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbaV0gPSAxOTU5NSAqIGk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgMjU2KSA+PiAwXSA9IDM4NDcwICogaTtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyA1MTIpID4+IDBdID0gNzQ3MSAqIGkgKyAweDgwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgNzY4KSA+PiAwXSA9IC0xMTA1OSAqIGk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgMTAyNCkgPj4gMF0gPSAtMjE3MDkgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDEyODApID4+IDBdID0gMzI3NjggKiBpICsgMHg4MDdGRkY7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgMTUzNikgPj4gMF0gPSAtMjc0MzkgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDE3OTIpID4+IDBdID0gLTUzMjkgKiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVCaXRzKGJzKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBic1swXTtcclxuICAgICAgICBsZXQgcG9zdmFsID0gYnNbMV0gLSAxO1xyXG4gICAgICAgIHdoaWxlIChwb3N2YWwgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgJiAoMSA8PCBwb3N2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ieXRlTmV3IHw9ICgxIDw8IHRoaXMuX2J5dGVQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3ZhbC0tO1xyXG4gICAgICAgICAgICB0aGlzLl9ieXRlUG9zLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ieXRlUG9zIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2J5dGVOZXcgPT09IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgweEZGKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKHRoaXMuX2J5dGVOZXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnl0ZVBvcyA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ieXRlTmV3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVCeXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU91dC5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVXb3JkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoKHZhbHVlID4+IDgpICYgMHhGRik7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoKHZhbHVlKSAmIDB4RkYpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmRENUUXVhbnQoZGF0YSwgZmR0YmwpIHtcclxuICAgICAgICBsZXQgZDA7XHJcbiAgICAgICAgbGV0IGQxO1xyXG4gICAgICAgIGxldCBkMjtcclxuICAgICAgICBsZXQgZDM7XHJcbiAgICAgICAgbGV0IGQ0O1xyXG4gICAgICAgIGxldCBkNTtcclxuICAgICAgICBsZXQgZDY7XHJcbiAgICAgICAgbGV0IGQ3O1xyXG4gICAgICAgIC8qIFBhc3MgMTogcHJvY2VzcyByb3dzLiAqL1xyXG4gICAgICAgIGxldCBkYXRhT2ZmID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBjb25zdCBJOCA9IDg7XHJcbiAgICAgICAgY29uc3QgSTY0ID0gNjQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk4OyArK2kpIHtcclxuICAgICAgICAgICAgZDAgPSBkYXRhW2RhdGFPZmZdO1xyXG4gICAgICAgICAgICBkMSA9IGRhdGFbZGF0YU9mZiArIDFdO1xyXG4gICAgICAgICAgICBkMiA9IGRhdGFbZGF0YU9mZiArIDJdO1xyXG4gICAgICAgICAgICBkMyA9IGRhdGFbZGF0YU9mZiArIDNdO1xyXG4gICAgICAgICAgICBkNCA9IGRhdGFbZGF0YU9mZiArIDRdO1xyXG4gICAgICAgICAgICBkNSA9IGRhdGFbZGF0YU9mZiArIDVdO1xyXG4gICAgICAgICAgICBkNiA9IGRhdGFbZGF0YU9mZiArIDZdO1xyXG4gICAgICAgICAgICBkNyA9IGRhdGFbZGF0YU9mZiArIDddO1xyXG4gICAgICAgICAgICBjb25zdCB0bXAwID0gZDAgKyBkNztcclxuICAgICAgICAgICAgY29uc3QgdG1wNyA9IGQwIC0gZDc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDEgPSBkMSArIGQ2O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA2ID0gZDEgLSBkNjtcclxuICAgICAgICAgICAgY29uc3QgdG1wMiA9IGQyICsgZDU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDUgPSBkMiAtIGQ1O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAzID0gZDMgKyBkNDtcclxuICAgICAgICAgICAgY29uc3QgdG1wNCA9IGQzIC0gZDQ7XHJcbiAgICAgICAgICAgIC8qIEV2ZW4gcGFydCAqL1xyXG4gICAgICAgICAgICBsZXQgdG1wMTAgPSB0bXAwICsgdG1wMzsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICBjb25zdCB0bXAxMyA9IHRtcDAgLSB0bXAzO1xyXG4gICAgICAgICAgICBsZXQgdG1wMTEgPSB0bXAxICsgdG1wMjtcclxuICAgICAgICAgICAgbGV0IHRtcDEyID0gdG1wMSAtIHRtcDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZl0gPSB0bXAxMCArIHRtcDExOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDRdID0gdG1wMTAgLSB0bXAxMTtcclxuICAgICAgICAgICAgY29uc3QgejEgPSAodG1wMTIgKyB0bXAxMykgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMl0gPSB0bXAxMyArIHoxOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDZdID0gdG1wMTMgLSB6MTtcclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTAgPSB0bXA0ICsgdG1wNTsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMSA9IHRtcDUgKyB0bXA2O1xyXG4gICAgICAgICAgICB0bXAxMiA9IHRtcDYgKyB0bXA3O1xyXG4gICAgICAgICAgICAvKiBUaGUgcm90YXRvciBpcyBtb2RpZmllZCBmcm9tIGZpZyA0LTggdG8gYXZvaWQgZXh0cmEgbmVnYXRpb25zLiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6NSA9ICh0bXAxMCAtIHRtcDEyKSAqIDAuMzgyNjgzNDMzOyAvKiBjNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MiA9IDAuNTQxMTk2MSAqIHRtcDEwICsgejU7IC8qIGMyLWM2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHo0ID0gMS4zMDY1NjI5NjUgKiB0bXAxMiArIHo1OyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MyA9IHRtcDExICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoxMSA9IHRtcDcgKyB6MzsgLyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MTMgPSB0bXA3IC0gejM7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDVdID0gejEzICsgejI7IC8qIHBoYXNlIDYgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgM10gPSB6MTMgLSB6MjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMV0gPSB6MTEgKyB6NDtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgN10gPSB6MTEgLSB6NDtcclxuICAgICAgICAgICAgZGF0YU9mZiArPSA4OyAvKiBhZHZhbmNlIHBvaW50ZXIgdG8gbmV4dCByb3cgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLyogUGFzcyAyOiBwcm9jZXNzIGNvbHVtbnMuICovXHJcbiAgICAgICAgZGF0YU9mZiA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk4OyArK2kpIHtcclxuICAgICAgICAgICAgZDAgPSBkYXRhW2RhdGFPZmZdO1xyXG4gICAgICAgICAgICBkMSA9IGRhdGFbZGF0YU9mZiArIDhdO1xyXG4gICAgICAgICAgICBkMiA9IGRhdGFbZGF0YU9mZiArIDE2XTtcclxuICAgICAgICAgICAgZDMgPSBkYXRhW2RhdGFPZmYgKyAyNF07XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgMzJdO1xyXG4gICAgICAgICAgICBkNSA9IGRhdGFbZGF0YU9mZiArIDQwXTtcclxuICAgICAgICAgICAgZDYgPSBkYXRhW2RhdGFPZmYgKyA0OF07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgNTZdO1xyXG4gICAgICAgICAgICBjb25zdCB0bXAwcDIgPSBkMCArIGQ3O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA3cDIgPSBkMCAtIGQ3O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAxcDIgPSBkMSArIGQ2O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA2cDIgPSBkMSAtIGQ2O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAycDIgPSBkMiArIGQ1O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA1cDIgPSBkMiAtIGQ1O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAzcDIgPSBkMyArIGQ0O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA0cDIgPSBkMyAtIGQ0O1xyXG4gICAgICAgICAgICAvKiBFdmVuIHBhcnQgKi9cclxuICAgICAgICAgICAgbGV0IHRtcDEwcDIgPSB0bXAwcDIgKyB0bXAzcDI7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgY29uc3QgdG1wMTNwMiA9IHRtcDBwMiAtIHRtcDNwMjtcclxuICAgICAgICAgICAgbGV0IHRtcDExcDIgPSB0bXAxcDIgKyB0bXAycDI7XHJcbiAgICAgICAgICAgIGxldCB0bXAxMnAyID0gdG1wMXAyIC0gdG1wMnAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmZdID0gdG1wMTBwMiArIHRtcDExcDI7IC8qIHBoYXNlIDMgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMzJdID0gdG1wMTBwMiAtIHRtcDExcDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHoxcDIgPSAodG1wMTJwMiArIHRtcDEzcDIpICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDE2XSA9IHRtcDEzcDIgKyB6MXAyOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDQ4XSA9IHRtcDEzcDIgLSB6MXAyO1xyXG4gICAgICAgICAgICAvKiBPZGQgcGFydCAqL1xyXG4gICAgICAgICAgICB0bXAxMHAyID0gdG1wNHAyICsgdG1wNXAyOyAvKiBwaGFzZSAyICovXHJcbiAgICAgICAgICAgIHRtcDExcDIgPSB0bXA1cDIgKyB0bXA2cDI7XHJcbiAgICAgICAgICAgIHRtcDEycDIgPSB0bXA2cDIgKyB0bXA3cDI7XHJcbiAgICAgICAgICAgIC8qIFRoZSByb3RhdG9yIGlzIG1vZGlmaWVkIGZyb20gZmlnIDQtOCB0byBhdm9pZCBleHRyYSBuZWdhdGlvbnMuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHo1cDIgPSAodG1wMTBwMiAtIHRtcDEycDIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoycDIgPSAwLjU0MTE5NjEgKiB0bXAxMHAyICsgejVwMjsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejRwMiA9IDEuMzA2NTYyOTY1ICogdG1wMTJwMiArIHo1cDI7IC8qIGMyK2M2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHozcDIgPSB0bXAxMXAyICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoxMXAyID0gdG1wN3AyICsgejNwMjsgLyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICBjb25zdCB6MTNwMiA9IHRtcDdwMiAtIHozcDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDQwXSA9IHoxM3AyICsgejJwMjsgLyogcGhhc2UgNiAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAyNF0gPSB6MTNwMiAtIHoycDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDhdID0gejExcDIgKyB6NHAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA1Nl0gPSB6MTFwMiAtIHo0cDI7XHJcbiAgICAgICAgICAgIGRhdGFPZmYrKzsgLyogYWR2YW5jZSBwb2ludGVyIHRvIG5leHQgY29sdW1uICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFF1YW50aXplL2Rlc2NhbGUgdGhlIGNvZWZmaWNpZW50c1xyXG4gICAgICAgIGxldCBmRENUUXVhbnQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk2NDsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBxdWFudGl6YXRpb24gYW5kIHNjYWxpbmcgZmFjdG9yICYgUm91bmQgdG8gbmVhcmVzdCBpbnRlZ2VyXHJcbiAgICAgICAgICAgIGZEQ1RRdWFudCA9IGRhdGFbaV0gKiBmZHRibFtpXTtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0ZkRDVFF1YW50W2ldID0gKGZEQ1RRdWFudCA+IDApID8gKChmRENUUXVhbnQgKyAwLjUpIHwgMCkgOiAoKGZEQ1RRdWFudCAtIDAuNSkgfCAwKTtcclxuICAgICAgICAgICAgLy9vdXRwdXRmRENUUXVhbnRbaV0gPSBmcm91bmQoZkRDVFF1YW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dGZEQ1RRdWFudDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVBUFAwKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZFMCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDE2KTsgLy8gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHg0QSk7IC8vIEpcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4NDkpOyAvLyBJXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHg0Nik7IC8vIEZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gPSBcIkpGSUZcIiwnXFwwJ1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyB2ZXJzaW9uaGlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gdmVyc2lvbmxvXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIHh5dW5pdHNcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxKTsgLy8geGRlbnNpdHlcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxKTsgLy8geWRlbnNpdHlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gdGh1bWJud2lkdGhcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gdGh1bWJuaGVpZ2h0XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlU09GMCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkMwKTsgLy8gbWFya2VyXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMTcpOyAvLyBsZW5ndGgsIHRydWVjb2xvciBZVVYgSlBHXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoOCk7IC8vIHByZWNpc2lvblxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQod2lkdGgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDMpOyAvLyBucm9mY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyBJZFlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFZZXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIFFUWVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDIpOyAvLyBJZFVcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFZVXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIFFUVVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDMpOyAvLyBJZFZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFZWXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIFFUVlxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZURRVCgpIHtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGREIpOyAvLyBtYXJrZXJcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxMzIpOyAvLyBsZW5ndGhcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUodGhpcy5feVRhYmxlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2NDsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKHRoaXMuX3V2VGFibGVbal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVESFQoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkM0KTsgLy8gbWFya2VyXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHgwMUEyKTsgLy8gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIEhUWURDaW5mb1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX05SQ09ERVNbaSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMTE7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX1ZBTFVFU1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTApOyAvLyBIVFlBQ2luZm9cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE2OyBrKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9OUkNPREVTW2sgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDw9IDE2MTsgbCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfVkFMVUVTW2xdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIEhUVURDaW5mb1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTY7IG0rKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfTlJDT0RFU1ttICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8PSAxMTsgbisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9WQUxVRVNbbl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFRVQUNpbmZvXHJcbiAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCAxNjsgbysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9OUkNPREVTW28gKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE2MTsgcCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9WQUxVRVNbcF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVTT1MoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkRBKTsgLy8gbWFya2VyXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMTIpOyAvLyBsZW5ndGhcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgzKTsgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gSWRZXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7IC8vIEhUWVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDIpOyAvLyBJZFVcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDExKTsgLy8gSFRVXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMyk7IC8vIElkVlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVFZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gU3NcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDNGKTsgLy8gU2VcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gQmZcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcHJvY2Vzc0RVKENEVSwgZmR0YmwsIHBhc3NlZERDLCBIVERDLCBIVEFDKSB7XHJcbiAgICAgICAgbGV0IERDID0gcGFzc2VkREM7XHJcbiAgICAgICAgY29uc3QgRU9CID0gSFRBQ1sweDAwXTtcclxuICAgICAgICBjb25zdCBtMTZ6ZXJvZXMgPSBIVEFDWzB4RjBdO1xyXG4gICAgICAgIGxldCBwb3M7XHJcbiAgICAgICAgY29uc3QgSTE2ID0gMTY7XHJcbiAgICAgICAgY29uc3QgSTYzID0gNjM7XHJcbiAgICAgICAgY29uc3QgSTY0ID0gNjQ7XHJcbiAgICAgICAgY29uc3QgRFVfRENUID0gdGhpcy5mRENUUXVhbnQoQ0RVLCBmZHRibCk7XHJcbiAgICAgICAgLy9aaWdaYWcgcmVvcmRlclxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgSTY0OyArK2opIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVbSnBlZ0VuY29kZXIuU0lHX1pBR1tqXV0gPSBEVV9EQ1Rbal07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLl9kdVswXSAtIERDO1xyXG4gICAgICAgIERDID0gdGhpcy5fZHVbMF07XHJcbiAgICAgICAgLy9FbmNvZGUgRENcclxuICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhIVERDWzBdKTsgLy8gRGlmZiBtaWdodCBiZSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwb3MgPSAzMjc2NyArIGRpZmY7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKEhURENbdGhpcy5fY2F0ZWdvcnlbcG9zXV0pO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyh0aGlzLl9iaXRDb2RlW3Bvc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0VuY29kZSBBQ3NcclxuICAgICAgICBsZXQgZW5kMHBvcyA9IDYzOyAvLyB3YXMgY29uc3QuLi4gd2hpY2ggaXMgY3JhenlcclxuICAgICAgICBmb3IgKDsgKGVuZDBwb3MgPiAwKSAmJiAodGhpcy5fZHVbZW5kMHBvc10gPT09IDApOyBlbmQwcG9zLS0pIHsgfVxyXG4gICAgICAgIC8vZW5kMHBvcyA9IGZpcnN0IGVsZW1lbnQgaW4gcmV2ZXJzZSBvcmRlciAhPTBcclxuICAgICAgICBpZiAoZW5kMHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhFT0IpO1xyXG4gICAgICAgICAgICByZXR1cm4gREM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpID0gMTtcclxuICAgICAgICBsZXQgbG5nO1xyXG4gICAgICAgIHdoaWxlIChpIDw9IGVuZDBwb3MpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRwb3MgPSBpO1xyXG4gICAgICAgICAgICBmb3IgKDsgKHRoaXMuX2R1W2ldID09PSAwKSAmJiAoaSA8PSBlbmQwcG9zKTsgKytpKSB7IH1cclxuICAgICAgICAgICAgbGV0IG5yemVyb2VzID0gaSAtIHN0YXJ0cG9zO1xyXG4gICAgICAgICAgICBpZiAobnJ6ZXJvZXMgPj0gSTE2KSB7XHJcbiAgICAgICAgICAgICAgICBsbmcgPSBucnplcm9lcyA+PiA0O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbnJtYXJrZXIgPSAxOyBucm1hcmtlciA8PSBsbmc7ICsrbnJtYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQml0cyhtMTZ6ZXJvZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbnJ6ZXJvZXMgPSBucnplcm9lcyAmIDB4RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgPSAzMjc2NyArIHRoaXMuX2R1W2ldO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyhIVEFDWyhucnplcm9lcyA8PCA0KSArIHRoaXMuX2NhdGVnb3J5W3Bvc11dKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHModGhpcy5fYml0Q29kZVtwb3NdKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5kMHBvcyAhPT0gSTYzKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKEVPQik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEQztcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9OUkNPREVTID0gWzAsIDAsIDEsIDUsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9WQUxVRVMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfTlJDT0RFUyA9IFswLCAwLCAyLCAxLCAzLCAzLCAyLCA0LCAzLCA1LCA1LCA0LCA0LCAwLCAwLCAxLCAweDdEXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfVkFMVUVTID0gW1xyXG4gICAgMHgwMSwgMHgwMiwgMHgwMywgMHgwMCwgMHgwNCwgMHgxMSwgMHgwNSwgMHgxMixcclxuICAgIDB4MjEsIDB4MzEsIDB4NDEsIDB4MDYsIDB4MTMsIDB4NTEsIDB4NjEsIDB4MDcsXHJcbiAgICAweDIyLCAweDcxLCAweDE0LCAweDMyLCAweDgxLCAweDkxLCAweEExLCAweDA4LFxyXG4gICAgMHgyMywgMHg0MiwgMHhCMSwgMHhDMSwgMHgxNSwgMHg1MiwgMHhEMSwgMHhGMCxcclxuICAgIDB4MjQsIDB4MzMsIDB4NjIsIDB4NzIsIDB4ODIsIDB4MDksIDB4MEEsIDB4MTYsXHJcbiAgICAweDE3LCAweDE4LCAweDE5LCAweDFBLCAweDI1LCAweDI2LCAweDI3LCAweDI4LFxyXG4gICAgMHgyOSwgMHgyQSwgMHgzNCwgMHgzNSwgMHgzNiwgMHgzNywgMHgzOCwgMHgzOSxcclxuICAgIDB4M0EsIDB4NDMsIDB4NDQsIDB4NDUsIDB4NDYsIDB4NDcsIDB4NDgsIDB4NDksXHJcbiAgICAweDRBLCAweDUzLCAweDU0LCAweDU1LCAweDU2LCAweDU3LCAweDU4LCAweDU5LFxyXG4gICAgMHg1QSwgMHg2MywgMHg2NCwgMHg2NSwgMHg2NiwgMHg2NywgMHg2OCwgMHg2OSxcclxuICAgIDB4NkEsIDB4NzMsIDB4NzQsIDB4NzUsIDB4NzYsIDB4NzcsIDB4NzgsIDB4NzksXHJcbiAgICAweDdBLCAweDgzLCAweDg0LCAweDg1LCAweDg2LCAweDg3LCAweDg4LCAweDg5LFxyXG4gICAgMHg4QSwgMHg5MiwgMHg5MywgMHg5NCwgMHg5NSwgMHg5NiwgMHg5NywgMHg5OCxcclxuICAgIDB4OTksIDB4OUEsIDB4QTIsIDB4QTMsIDB4QTQsIDB4QTUsIDB4QTYsIDB4QTcsXHJcbiAgICAweEE4LCAweEE5LCAweEFBLCAweEIyLCAweEIzLCAweEI0LCAweEI1LCAweEI2LFxyXG4gICAgMHhCNywgMHhCOCwgMHhCOSwgMHhCQSwgMHhDMiwgMHhDMywgMHhDNCwgMHhDNSxcclxuICAgIDB4QzYsIDB4QzcsIDB4QzgsIDB4QzksIDB4Q0EsIDB4RDIsIDB4RDMsIDB4RDQsXHJcbiAgICAweEQ1LCAweEQ2LCAweEQ3LCAweEQ4LCAweEQ5LCAweERBLCAweEUxLCAweEUyLFxyXG4gICAgMHhFMywgMHhFNCwgMHhFNSwgMHhFNiwgMHhFNywgMHhFOCwgMHhFOSwgMHhFQSxcclxuICAgIDB4RjEsIDB4RjIsIDB4RjMsIDB4RjQsIDB4RjUsIDB4RjYsIDB4RjcsIDB4RjgsXHJcbiAgICAweEY5LCAweEZBXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfTlJDT0RFUyA9IFswLCAwLCAzLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9WQUxVRVMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9OUkNPREVTID0gWzAsIDAsIDIsIDEsIDIsIDQsIDQsIDMsIDQsIDcsIDUsIDQsIDQsIDAsIDEsIDIsIDB4NzddO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX1ZBTFVFUyA9IFtcclxuICAgIDB4MDAsIDB4MDEsIDB4MDIsIDB4MDMsIDB4MTEsIDB4MDQsIDB4MDUsIDB4MjEsXHJcbiAgICAweDMxLCAweDA2LCAweDEyLCAweDQxLCAweDUxLCAweDA3LCAweDYxLCAweDcxLFxyXG4gICAgMHgxMywgMHgyMiwgMHgzMiwgMHg4MSwgMHgwOCwgMHgxNCwgMHg0MiwgMHg5MSxcclxuICAgIDB4QTEsIDB4QjEsIDB4QzEsIDB4MDksIDB4MjMsIDB4MzMsIDB4NTIsIDB4RjAsXHJcbiAgICAweDE1LCAweDYyLCAweDcyLCAweEQxLCAweDBBLCAweDE2LCAweDI0LCAweDM0LFxyXG4gICAgMHhFMSwgMHgyNSwgMHhGMSwgMHgxNywgMHgxOCwgMHgxOSwgMHgxQSwgMHgyNixcclxuICAgIDB4MjcsIDB4MjgsIDB4MjksIDB4MkEsIDB4MzUsIDB4MzYsIDB4MzcsIDB4MzgsXHJcbiAgICAweDM5LCAweDNBLCAweDQzLCAweDQ0LCAweDQ1LCAweDQ2LCAweDQ3LCAweDQ4LFxyXG4gICAgMHg0OSwgMHg0QSwgMHg1MywgMHg1NCwgMHg1NSwgMHg1NiwgMHg1NywgMHg1OCxcclxuICAgIDB4NTksIDB4NUEsIDB4NjMsIDB4NjQsIDB4NjUsIDB4NjYsIDB4NjcsIDB4NjgsXHJcbiAgICAweDY5LCAweDZBLCAweDczLCAweDc0LCAweDc1LCAweDc2LCAweDc3LCAweDc4LFxyXG4gICAgMHg3OSwgMHg3QSwgMHg4MiwgMHg4MywgMHg4NCwgMHg4NSwgMHg4NiwgMHg4NyxcclxuICAgIDB4ODgsIDB4ODksIDB4OEEsIDB4OTIsIDB4OTMsIDB4OTQsIDB4OTUsIDB4OTYsXHJcbiAgICAweDk3LCAweDk4LCAweDk5LCAweDlBLCAweEEyLCAweEEzLCAweEE0LCAweEE1LFxyXG4gICAgMHhBNiwgMHhBNywgMHhBOCwgMHhBOSwgMHhBQSwgMHhCMiwgMHhCMywgMHhCNCxcclxuICAgIDB4QjUsIDB4QjYsIDB4QjcsIDB4QjgsIDB4QjksIDB4QkEsIDB4QzIsIDB4QzMsXHJcbiAgICAweEM0LCAweEM1LCAweEM2LCAweEM3LCAweEM4LCAweEM5LCAweENBLCAweEQyLFxyXG4gICAgMHhEMywgMHhENCwgMHhENSwgMHhENiwgMHhENywgMHhEOCwgMHhEOSwgMHhEQSxcclxuICAgIDB4RTIsIDB4RTMsIDB4RTQsIDB4RTUsIDB4RTYsIDB4RTcsIDB4RTgsIDB4RTksXHJcbiAgICAweEVBLCAweEYyLCAweEYzLCAweEY0LCAweEY1LCAweEY2LCAweEY3LCAweEY4LFxyXG4gICAgMHhGOSwgMHhGQVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU0lHX1pBRyA9IFtcclxuICAgIDAsIDEsIDUsIDYsIDE0LCAxNSwgMjcsIDI4LFxyXG4gICAgMiwgNCwgNywgMTMsIDE2LCAyNiwgMjksIDQyLFxyXG4gICAgMywgOCwgMTIsIDE3LCAyNSwgMzAsIDQxLCA0MyxcclxuICAgIDksIDExLCAxOCwgMjQsIDMxLCA0MCwgNDQsIDUzLFxyXG4gICAgMTAsIDE5LCAyMywgMzIsIDM5LCA0NSwgNTIsIDU0LFxyXG4gICAgMjAsIDIyLCAzMywgMzgsIDQ2LCA1MSwgNTUsIDYwLFxyXG4gICAgMjEsIDM0LCAzNywgNDcsIDUwLCA1NiwgNTksIDYxLFxyXG4gICAgMzUsIDM2LCA0OCwgNDksIDU3LCA1OCwgNjIsIDYzXHJcbl07XHJcbmV4cG9ydHMuSnBlZ0VuY29kZXIgPSBKcGVnRW5jb2RlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5CbFowVnVZMjlrWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVcxaFoyVnpMMnB3WldkRmJtTnZaR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRmRCUVZjN1NVRnZTSEJDT3p0UFFVVkhPMGxCUTBnN1VVRkRTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlJUbENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRha01zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVnNRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlJYQkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVWRU96czdPenM3TzA5QlQwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV01zUlVGQlJTeFRRVUZ4UWl4RlFVRkZMRTlCUVdVN1VVRkRMMFVzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVWNlFpeDNRa0ZCZDBJN1VVRkRlRUlzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV3hDTEcxQ1FVRnRRanRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRUdFJRVU01UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRGFrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRmFFSXNlVUpCUVhsQ08xRkJRM3BDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOYUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZhTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV3hDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRk5VSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOT0xFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEwNHNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhKUVVGSkxFdEJRVXNzUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1NVRkJTU3hIUVVGSExFTkJRVU03VVVGRFVpeEpRVUZKTEVkQlFVY3NRMEZCUXp0UlFVTlNMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRMUlzVDBGQlR5eERRVUZETEVkQlFVY3NUVUZCVFN4RlFVRkZPMWxCUTJZc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5PTEU5QlFVOHNRMEZCUXl4SFFVRkhMRk5CUVZNc1JVRkJSVHRuUWtGRGJFSXNTMEZCU3l4SFFVRkhMRk5CUVZNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTXhRaXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzJkQ1FVTldMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEVkN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVVZTTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMjlDUVVNelFpeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXM3YjBKQlEzSkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTE8yOUNRVU14UWl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRmNFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJTeEZRVUZGTEdsQ1FVRnBRanQzUWtGRGRFTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dHhRa0ZETjBNN2IwSkJSVVFzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hGUVVGRkxHZENRVUZuUWp0M1FrRkRlRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPM0ZDUVVOd1F6dHZRa0ZGUkN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUTI1Q0xFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRGJrSXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVVnVRanM3T3p0elFrRkpZanR2UWtGRllTeHhRMEZCY1VNN2IwSkJRM0pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMjlDUVVNNVNDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZETjBrc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2FVSkJSV3BLTzJkQ1FVVkVMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdaMEpCUXpOR0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1owSkJRemxHTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6bEdMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRFdEdFpRVU5FTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRWanRSUVVWRUxIbERRVUY1UXp0UlFVTjZReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNCQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTndRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGFFTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTNReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUXpWQ08xRkJSVVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXM3VVVGRk4wSXNUMEZCVHl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEZWtNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFZRVUZWTEVOQlFVTXNUMEZCWlR0UlFVTTVRaXhKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NUMEZCVHl4SFFVRkhMRWRCUVVjc1JVRkJSVHRaUVVNdlFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJEUVVFMFF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGRk8xRkJSVVFzU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEyUXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTI1RE8yRkJRVTA3V1VGRFNDeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFZEJRVWNzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRE8xRkJSVVFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR1ZCUVdVc1EwRkJReXhGUVVGVk8xRkJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhPMWxCUTFJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEYUVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEYUVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVYzdXVUZEYkVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdVMEZEY0VNc1EwRkJRenRSUVVWR0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5RTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRWRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVN1owSkJRMmhDTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRXRHRaUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTTFRenRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZITzFsQlExUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRE9VSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3VTBGRGFrTXNRMEZCUXp0UlFVTkdMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOUUxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEVkR0cFFrRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVTdaMEpCUTJoQ0xFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZEV0R0WlFVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRTFCUVUwc1NVRkJTU3hIUVVGSE8xbEJRMVFzUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4WFFVRlhMRVZCUVVVc1YwRkJWenRaUVVONFF5eERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRk5CUVZNc1JVRkJSU3hYUVVGWE8xTkJRM3BETEVOQlFVTTdVVUZEUml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFZpeExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdaMEpCUXpsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRemRHTEVOQlFVTXNSVUZCUlN4RFFVRkRPMkZCUTFBN1UwRkRTanRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhVUpCUVdsQ0xFTkJRVU1zVDBGQmFVSXNSVUZCUlN4UlFVRnJRanRSUVVNelJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRka0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOc1F5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTTVRaXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTjRReXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhWUVVGVkxFVkJRVVVzUTBGQlF6dG5Ra0ZEWWl4VFFVRlRMRVZCUVVVc1EwRkJRenRoUVVObU8xbEJRMFFzVTBGQlV5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTnNRanRSUVVORUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hqUVVGak8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRmRCUVZjc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4WFFVRlhMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXp0UlFVTjJTQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVOQlFVTXNNRUpCUVRCQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VVVGRE5VZ3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1YwRkJWeXhEUVVGRExIZENRVUYzUWl4RlFVRkZMRmRCUVZjc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRPMUZCUTNaSUxFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZkQlFWY3NRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeFhRVUZYTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dEpRVU5vU1N4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHdENRVUZyUWp0UlFVTjBRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNhMEpCUVd0Q08xbEJRMnhDTEV0QlFVc3NTVUZCU1N4RlFVRkZMRWRCUVVjc1QwRkJUeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1owSkJRM1pETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRha01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdaMEpCUTI1RExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0aFFVTnlRenRaUVVORUxHdENRVUZyUWp0WlFVTnNRaXhMUVVGTExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRk8yZENRVU42UkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRiRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmRDUVVOMFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dGhRVU42UkR0WlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRFpDeFBRVUZQTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJwQ08wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4bFFVRmxPMUZCUTI1Q0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU01UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTNSRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJReTlETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyaEVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1dVRkRNVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGFFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRkxFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYmtRN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZOQlFWTXNRMEZCUXl4RlFVRlpPMUZCUXpGQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzWkNMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNSVUZCUlR0blFrRkRka0lzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkRSQ3hOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU5VTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU51UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFdEJRVXNzU1VGQlNTeEZRVUZGTzI5Q1FVTjRRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOeVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU55UWp0eFFrRkJUVHR2UWtGRFNDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZEYWtNN1owSkJRMFFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM0pDTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGTkJRVk1zUTBGQlF5eExRVUZoTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNVMEZCVXl4RFFVRkRMRXRCUVdFN1VVRkRNMElzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGJrTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hUUVVGVExFTkJRVU1zU1VGQll5eEZRVUZGTEV0QlFXVTdVVUZETjBNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFVDeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTlFMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMUFzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEVUN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRVQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5RTERKQ1FVRXlRanRSUVVNelFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEVGl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFlpeE5RVUZOTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU55UWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlEyNUNMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhaQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRja0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOeVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM0pDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGNrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU55UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEY2tJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVVnlRaXhsUVVGbE8xbEJRMllzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExHRkJRV0U3V1VGRGRFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU14UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzaENMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhoUVVGaE8xbEJRelZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVVnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTzFsQlEyeEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExHRkJRV0U3V1VGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUlM5Q0xHTkJRV003V1VGRFpDeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExHRkJRV0U3V1VGRGJFTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRmNFSXNiMFZCUVc5Rk8xbEJRM0JGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXl4RFFVRkRMRkZCUVZFN1dVRkRiRVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTzFsQlF6bERMRTFCUVUwc1JVRkJSU3hIUVVGSExGZEJRVmNzUjBGQlJ5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1YwRkJWenRaUVVOb1JDeE5RVUZOTEVWQlFVVXNSMEZCUnl4TFFVRkxMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zVVVGQlVUdFpRVVY0UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNZVUZCWVR0WlFVTndReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUlhSQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEdGQlFXRTdXVUZETTBNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRemRDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTTNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRk4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExHbERRVUZwUXp0VFFVTnNSRHRSUVVWRUxEaENRVUU0UWp0UlFVTTVRaXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExb3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1dVRkRja0lzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOdVFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVVY0UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzWkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZGtJc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjJRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka0lzVFVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMlFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRmRrSXNaVUZCWlR0WlFVTm1MRWxCUVVrc1QwRkJUeXhIUVVGSExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4aFFVRmhPMWxCUXpWRExFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1dVRkRhRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVNNVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNZVUZCWVR0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03V1VGRmRrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNc1VVRkJVVHRaUVVONFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4aFFVRmhPMWxCUTJ4RUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFpRVVZ3UXl4alFVRmpPMWxCUTJRc1QwRkJUeXhIUVVGSExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4aFFVRmhPMWxCUTNoRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUXpGQ0xFOUJRVThzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUlRGQ0xHOUZRVUZ2UlR0WlFVTndSU3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTzFsQlEzaEVMRTFCUVUwc1NVRkJTU3hIUVVGSExGTkJRVk1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1YwRkJWenRaUVVOd1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4WFFVRlhMRWRCUVVjc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWYzdXVUZEZEVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4RFFVRkRMRkZCUVZFN1dVRkZOVU1zVFVGQlRTeExRVUZMTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExHRkJRV0U3V1VGRE1VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVVUxUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhoUVVGaE8xbEJRMmhFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTnNReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUld4RExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNiME5CUVc5RE8xTkJRMnhFTzFGQlJVUXNiME5CUVc5RE8xRkJRM0JETEVsQlFVa3NVMEZCVXl4RFFVRkRPMUZCUTJRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVU3V1VGRGRFSXNkVVZCUVhWRk8xbEJRM1pGTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSaXg1UTBGQmVVTTdVMEZGTlVNN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNN1VVRkRZaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1R0UlFVTXhRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1R0UlFVTXhRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTzFGQlEyNURMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWk8xRkJReTlDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTzFGQlF6ZENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTzFGQlEycERMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4bFFVRmxPMGxCUTNSRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNVMEZCVXl4RFFVRkRMRXRCUVdFc1JVRkJSU3hOUVVGak8xRkJRek5ETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFGQlEycERMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUnl3MFFrRkJORUk3VVVGRGJFUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZKTEZsQlFWazdVVUZEYkVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJTU3hwUWtGQmFVSTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZKTEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZKTEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZKTEUxQlFVMDdTVUZEYUVNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFJRVUZSTzFGQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkpMRk5CUVZNN1VVRkRha01zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyNURPMUZCUTBRc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JETzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUk8xRkJRMW9zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdVVUZGYWtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrN1VVRkRMMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4M1FrRkJkMElzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNeFJEdFJRVVZFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTzFGQlEyeERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETDBRN1VVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6TkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEhWQ1FVRjFRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETVVRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXVHRSUVVNdlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBGTzFGQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWazdVVUZEYkVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU42UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETTBJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTFSRHRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNVVUZCVVR0UlFVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eHBRa0ZCYVVJN1VVRkRjRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRla0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXM3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVczdVVUZETTBJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzN1NVRkROVUlzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VFFVRlRMRU5CUVVNc1IwRkJZU3hGUVVGRkxFdEJRV1VzUlVGQlJTeFJRVUZuUWl4RlFVRkZMRWxCUVdkQ0xFVkJRVVVzU1VGQlowSTdVVUZEYkVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEyeENMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEhRVUZITEVOQlFVTTdVVUZEVWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNeFF5eG5Ra0ZCWjBJN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTXhRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRhRVE3VVVGRFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVFpeFhRVUZYTzFGQlExZ3NTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMW9zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEd0Q1FVRnJRanRUUVVNNVF6dGhRVUZOTzFsQlEwZ3NSMEZCUnl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGJrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRkRU03VVVGRFJDeFpRVUZaTzFGQlExb3NTVUZCU1N4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zT0VKQlFUaENPMUZCUTJoRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUlVGQlJTeEZRVUZGTEVkQlFVYzdVVUZEYWtVc09FTkJRVGhETzFGQlF6bERMRWxCUVVrc1QwRkJUeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5tTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGNFSXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkRZanRSUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTldMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRMUlzVDBGQlR5eERRVUZETEVsQlFVa3NUMEZCVHl4RlFVRkZPMWxCUTJwQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITzFsQlEzUkVMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTTdXVUZETlVJc1NVRkJTU3hSUVVGUkxFbEJRVWtzUjBGQlJ5eEZRVUZGTzJkQ1FVTnFRaXhIUVVGSExFZEJRVWNzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUVVVc1VVRkJVU3hKUVVGSkxFZEJRVWNzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlR0dlFrRkRhRVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRwUWtGRE4wSTdaMEpCUTBRc1VVRkJVU3hIUVVGSExGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZETjBJN1dVRkRSQ3hIUVVGSExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhGUVVGRkxFTkJRVU03VTBGRFVEdFJRVU5FTEVsQlFVa3NUMEZCVHl4TFFVRkxMRWRCUVVjc1JVRkJSVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM1pDTzFGQlEwUXNUMEZCVHl4RlFVRkZMRU5CUVVNN1NVRkRaQ3hEUVVGRE96dEJRWFJ6UWtRc1pVRkJaVHRCUVVOVExHOURRVUYzUWl4SFFVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwSUxHVkJRV1U3UVVGRFV5eHRRMEZCZFVJc1IwRkJZU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRia2NzWlVGQlpUdEJRVU5UTEc5RFFVRjNRaXhIUVVGaExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM0JJTEdWQlFXVTdRVUZEVXl4dFEwRkJkVUlzUjBGQllUdEpRVU40UkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNUdEpRVU01UXl4SlFVRkpMRVZCUVVVc1NVRkJTVHREUVVOaUxFTkJRVU03UVVGRlJpeGxRVUZsTzBGQlExTXNjME5CUVRCQ0xFZEJRV0VzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJrZ3NaVUZCWlR0QlFVTlRMSEZEUVVGNVFpeEhRVUZoTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU55Unl4bFFVRmxPMEZCUTFNc2MwTkJRVEJDTEVkQlFXRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZEVnc1pVRkJaVHRCUVVOVExIRkRRVUY1UWl4SFFVRmhPMGxCUXpGRUxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpPMGxCUXpsRExFbEJRVWtzUlVGQlJTeEpRVUZKTzBOQlEySXNRMEZCUXp0QlFVVkdMR1ZCUVdVN1FVRkRVeXh0UWtGQlR5eEhRVUZoTzBsQlEzaERMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6VkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6ZENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBsQlF6bENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzBOQlEycERMRU5CUVVNN1FVRjZSVTRzYTBOQmQzTkNReUo5IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBkZWZsYXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBha28vbGliL2RlZmxhdGVcIikpO1xyXG4vKipcclxuICogUE5HIEVuY29kZXIuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b3BlYS9VUE5HLmpzXHJcbiAqL1xyXG5jbGFzcyBQbmdFbmNvZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIHRoZSBpbWFnZSBmcmFtZXMgdG8gcG5nLlxyXG4gICAgICogQHBhcmFtIGJ1ZnMgVGhlIGZyYW1lIGJ1ZmZlcnMgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHcgVGhlIGltYWdlIHdpZHRoLlxyXG4gICAgICogQHBhcmFtIGggVGhlIGltYWdlIGhlaWdodC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIGZvciB0aGUgaW1hZ2UuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZShidWZzLCB3LCBoKSB7XHJcbiAgICAgICAgY29uc3QgcHMgPSAwO1xyXG4gICAgICAgIGNvbnN0IGZvcmJpZFBsdGUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBkZWxzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShidWZzWzBdLmJ5dGVMZW5ndGggKiBidWZzLmxlbmd0aCArIDEwMCk7XHJcbiAgICAgICAgY29uc3Qgd3IgPSBbMHg4OSwgMHg1MCwgMHg0RSwgMHg0NywgMHgwRCwgMHgwQSwgMHgxQSwgMHgwQV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YVtpXSA9IHdyW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gODtcclxuICAgICAgICBjb25zdCBuaW1nID0gdGhpcy5jb21wcmVzc1BORyhidWZzLCB3LCBoLCBwcywgZm9yYmlkUGx0ZSk7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCAxMyk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJJSERSXCIpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdyk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBoKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICBkYXRhW29mZnNldF0gPSBuaW1nLmRlcHRoO1xyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IG5pbWcuY3R5cGU7XHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gMDsgLy8gY29tcHJlc3NcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICBkYXRhW29mZnNldF0gPSAwOyAvLyBmaWx0ZXJcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICBkYXRhW29mZnNldF0gPSAwOyAvLyBpbnRlcmxhY2VcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIDE3LCAxNykpO1xyXG4gICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICAvLyA5IGJ5dGVzIHRvIHNheSwgdGhhdCBpdCBpcyBzUkdCXHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCAxKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcInNSR0JcIik7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gMTtcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIDUsIDUpKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgY29uc3QgYW5pbSA9IGJ1ZnMubGVuZ3RoID4gMTtcclxuICAgICAgICBpZiAoYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDgpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJhY1RMXCIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBidWZzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDApO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSAxMiwgMTIpKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmltZy5jdHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICBjb25zdCBkbCA9IG5pbWcucGx0ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZGwgKiAzKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwiUExURVwiKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGkgPSBpICogMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBuaW1nLnBsdGVbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gKGMpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IChjID4+IDgpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IChjID4+IDE2KSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgdGkgKyAwXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIHRpICsgMV0gPSBnO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyB0aSArIDJdID0gYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gZGwgKiAzO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIGRsICogMyAtIDQsIGRsICogMyArIDQpKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgICAgICBpZiAobmltZy5nb3RBbHBoYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBkbCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwidFJOU1wiKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyBpXSA9IChuaW1nLnBsdGVbaV0gPj4gMjQpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSBkbCAtIDQsIGRsICsgNCkpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuaW1nLmZyYW1lcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBmciA9IG5pbWcuZnJhbWVzW2pdO1xyXG4gICAgICAgICAgICBpZiAoYW5pbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCAyNik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwiZmNUTFwiKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmaSsrKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmci5yZWN0LndpZHRoKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmci5yZWN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZnIucmVjdC54KTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmci5yZWN0LnkpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVXNob3J0KGRhdGEsIG9mZnNldCwgZGVsc1tqXSk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVc2hvcnQoZGF0YSwgb2Zmc2V0LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXRdID0gZnIuZGlzcG9zZTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCsrOyAvLyBkaXNwb3NlXHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSBmci5ibGVuZDtcclxuICAgICAgICAgICAgICAgIG9mZnNldCsrOyAvLyBibGVuZFxyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSAzMCwgMzApKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbWdkID0gZnIuY2ltZztcclxuICAgICAgICAgICAgY29uc3QgZGwgPSBpbWdkLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBkbCArIChqID09PSAwID8gMCA6IDQpKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlvZmYgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIChqID09PSAwKSA/IFwiSURBVFwiIDogXCJmZEFUXCIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgaWYgKGogIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZmkrKyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgaV0gPSBpbWdkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBkbDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBpb2ZmLCBvZmZzZXQgLSBpb2ZmKSk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCAwKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcIklFTkRcIik7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB0aGlzLmNyYyhkYXRhLCBvZmZzZXQgLSA0LCA0KSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlci5zbGljZSgwLCBvZmZzZXQpKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29tcHJlc3NQTkcoYnVmcywgdywgaCwgcHMsIGZvcmJpZFBsdGUpIHtcclxuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLmNvbXByZXNzKGJ1ZnMsIHcsIGgsIHBzLCAwLCBmb3JiaWRQbHRlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZnJtID0gb3V0LmZyYW1lc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgbncgPSBmcm0ucmVjdC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgbmggPSBmcm0ucmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJwbCA9IGZybS5icGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGJwcCA9IGZybS5icHA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZkYXRhID0gbmV3IFVpbnQ4QXJyYXkobncgKiBicGwgKyBuaCk7XHJcbiAgICAgICAgICAgIGZybS5jaW1nID0gdGhpcy5maWx0ZXJaZXJvKGZybS5pbWcsIG5oLCBicHAsIGJwbCwgZmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb21wcmVzcyhpbkJ1ZnMsIHcsIGgsIGluUHMsIGZvckdJRiwgZm9yYmlkUGx0ZSkge1xyXG4gICAgICAgIGxldCBjdHlwZSA9IDY7XHJcbiAgICAgICAgbGV0IGRlcHRoID0gODtcclxuICAgICAgICBsZXQgYnBwID0gNDtcclxuICAgICAgICBsZXQgYWxwaGFBbmQgPSAyNTU7XHJcbiAgICAgICAgbGV0IHBzID0gaW5QcztcclxuICAgICAgICBsZXQgYnVmcyA9IGluQnVmcztcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZnMubGVuZ3RoOyBqKyspIHsgLy8gd2hlbiBub3QgcXVhbnRpemVkLCBvdGhlciBmcmFtZXMgY2FuIGNvbnRhaW4gY29sb3JzLCB0aGF0IGFyZSBub3QgaW4gYW4gaW5pdGlhbCBmcmFtZVxyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgVWludDhBcnJheShidWZzW2pdKTtcclxuICAgICAgICAgICAgY29uc3QgaWxlbiA9IGltZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWxlbjsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYUFuZCAmPSBpbWdbaSArIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBnb3RBbHBoYSA9IGFscGhhQW5kICE9PSAyNTU7XHJcbiAgICAgICAgY29uc3QgY21hcCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHBsdGUgPSBbXTtcclxuICAgICAgICBpZiAoYnVmcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY21hcFswXSA9IDA7XHJcbiAgICAgICAgICAgIHBsdGUucHVzaCgwKTtcclxuICAgICAgICAgICAgaWYgKHBzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcy0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcyAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBxcmVzID0gdGhpcy5xdWFudGl6ZShidWZzLCBwcywgZm9yR0lGKTtcclxuICAgICAgICAgICAgYnVmcyA9IHFyZXMuYnVmcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxcmVzLnBsdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBxcmVzLnBsdGVbaV0uZXN0LnJnYmE7XHJcbiAgICAgICAgICAgICAgICBpZiAoY21hcFtjXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY21hcFtjXSA9IHBsdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdGUucHVzaChjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gd2hhdCBpZiBwcz09MCwgYnV0IHRoZXJlIGFyZSA8PTI1NiBjb2xvcnM/ICB3ZSBzdGlsbCBuZWVkIHRvIGRldGVjdCwgaWYgdGhlIHBhbGV0dGUgY291bGQgYmUgdXNlZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZnMubGVuZ3RoOyBqKyspIHsgLy8gd2hlbiBub3QgcXVhbnRpemVkLCBvdGhlciBmcmFtZXMgY2FuIGNvbnRhaW4gY29sb3JzLCB0aGF0IGFyZSBub3QgaW4gYW4gaW5pdGlhbCBmcmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nMzIgPSBuZXcgVWludDMyQXJyYXkoYnVmc1tqXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbGVuID0gaW1nMzIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1nMzJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpIDwgdyB8fCAoYyAhPT0gaW1nMzJbaSAtIDFdICYmIGMgIT09IGltZzMyW2kgLSB3XSkpICYmIGNtYXBbY10gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbWFwW2NdID0gcGx0ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdGUucHVzaChjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsdGUubGVuZ3RoID49IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnJ1dGUgPSBnb3RBbHBoYSA/IGZvckdJRiA6IGZhbHNlOyAvLyBicnV0ZSA6IGZyYW1lcyBjYW4gb25seSBiZSBjb3BpZWQsIG5vdCBcImJsZW5kZWRcIlxyXG4gICAgICAgIGNvbnN0IGNjID0gcGx0ZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGNjIDw9IDI1NiAmJiAhZm9yYmlkUGx0ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2MgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgZGVwdGggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNjIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjYyA8PSAxNikge1xyXG4gICAgICAgICAgICAgICAgZGVwdGggPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVwdGggPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3JHSUYpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoID0gODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnb3RBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZybXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1ZnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGNpbWcgPSBuZXcgVWludDhBcnJheShidWZzW2pdKTtcclxuICAgICAgICAgICAgbGV0IGNpbWczMiA9IG5ldyBVaW50MzJBcnJheShjaW1nLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGxldCBueCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBueSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBudyA9IHc7XHJcbiAgICAgICAgICAgIGxldCBuaCA9IGg7XHJcbiAgICAgICAgICAgIGxldCBibGVuZCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSAwICYmICFicnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGxpbSA9IChmb3JHSUYgfHwgaiA9PT0gMSB8fCBmcm1zW2ZybXMubGVuZ3RoIC0gMl0uZGlzcG9zZSA9PT0gMikgPyAxIDogMjtcclxuICAgICAgICAgICAgICAgIGxldCB0c3RwID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJlYSA9IDFlOTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ID0gMDsgaXQgPCB0bGltOyBpdCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDMyID0gbmV3IFVpbnQzMkFycmF5KGJ1ZnNbaiAtIDEgLSBpdF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaXggPSB3O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaXkgPSBoO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF5ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB5ICogdyArIHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ltZzMyW2ldICE9PSBwMzJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IG1peCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXggPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXggPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IG1peSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXkgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeSA+IG1heSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXkgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXJlYSA9IChtYXggPT09IC0xKSA/IDEgOiAobWF4IC0gbWl4ICsgMSkgKiAobWF5IC0gbWl5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhcmVhIDwgdGFyZWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZWEgPSBzYXJlYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHN0cCA9IGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbncgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnggPSBtaXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBueSA9IG1peTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG53ID0gbWF4IC0gbWl4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5oID0gbWF5IC0gbWl5ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpbWcgPSBuZXcgVWludDhBcnJheShidWZzW2ogLSAxIC0gdHN0cF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRzdHAgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm1zW2ZybXMubGVuZ3RoIC0gMV0uZGlzcG9zZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuaW1nID0gbmV3IFVpbnQ4QXJyYXkobncgKiBuaCAqIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGlsZShwaW1nLCB3LCBoLCBuaW1nLCBudywgbmgsIC1ueCwgLW55LCAwKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcHlUaWxlKGNpbWcsIHcsIGgsIG5pbWcsIG53LCBuaCwgLW54LCAtbnksIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3B5VGlsZShjaW1nLCB3LCBoLCBuaW1nLCBudywgbmgsIC1ueCwgLW55LCAyKTtcclxuICAgICAgICAgICAgICAgICAgICBibGVuZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlUaWxlKGNpbWcsIHcsIGgsIG5pbWcsIG53LCBuaCwgLW54LCAtbnksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNpbWcgPSBuaW1nO1xyXG4gICAgICAgICAgICAgICAgY2ltZzMyID0gbmV3IFVpbnQzMkFycmF5KGNpbWcuYnVmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYnBsID0gNCAqIG53O1xyXG4gICAgICAgICAgICBpZiAoY2MgPD0gMjU2ICYmICFmb3JiaWRQbHRlKSB7XHJcbiAgICAgICAgICAgICAgICBicGwgPSBNYXRoLmNlaWwoZGVwdGggKiBudyAvIDgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmltZyA9IG5ldyBVaW50OEFycmF5KGJwbCAqIG5oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbmg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB5ICogYnBsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlpID0geSAqIG53O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG53OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pbWdbaSArICh4KV0gPSAoY21hcFtjaW1nMzJbaWkgKyB4XV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlcHRoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnc7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmltZ1tpICsgKHggPj4gMSldIHw9IChjbWFwW2NpbWczMltpaSArIHhdXSA8PCAoNCAtICh4ICYgMSkgKiA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBudzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaW1nW2kgKyAoeCA+PiAyKV0gfD0gKGNtYXBbY2ltZzMyW2lpICsgeF1dIDw8ICg2IC0gKHggJiAzKSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG53OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pbWdbaSArICh4ID4+IDMpXSB8PSAoY21hcFtjaW1nMzJbaWkgKyB4XV0gPDwgKDcgLSAoeCAmIDcpICogMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2ltZyA9IG5pbWc7XHJcbiAgICAgICAgICAgICAgICBjdHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicHAgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFnb3RBbHBoYSAmJiBidWZzLmxlbmd0aCA9PT0gMSkgeyAvLyBzb21lIG5leHQgXCJyZWR1Y2VkXCIgZnJhbWVzIG1heSBjb250YWluIGFscGhhIGZvciBibGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmltZyA9IG5ldyBVaW50OEFycmF5KG53ICogbmggKiAzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBudyAqIG5oO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aSA9IGkgKiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHFpID0gaSAqIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmltZ1t0aV0gPSBjaW1nW3FpXTtcclxuICAgICAgICAgICAgICAgICAgICBuaW1nW3RpICsgMV0gPSBjaW1nW3FpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbmltZ1t0aSArIDJdID0gY2ltZ1txaSArIDJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2ltZyA9IG5pbWc7XHJcbiAgICAgICAgICAgICAgICBjdHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicHAgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnBsID0gMyAqIG53O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZybXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogbngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbnksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG53LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbmhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbWc6IGNpbWcsXHJcbiAgICAgICAgICAgICAgICBicGw6IGJwbCxcclxuICAgICAgICAgICAgICAgIGJwcDogYnBwLFxyXG4gICAgICAgICAgICAgICAgYmxlbmQ6IGJsZW5kLFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zZTogYnJ1dGUgPyAxIDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgY3R5cGU6IGN0eXBlLCBkZXB0aDogZGVwdGgsIHBsdGU6IHBsdGUsIGdvdEFscGhhOiBnb3RBbHBoYSwgZnJhbWVzOiBmcm1zIH07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbHRlclplcm8oaW1nLCBoLCBicHAsIGJwbCwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgNTsgdCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChoICogYnBsID4gNTAwMDAwICYmICh0ID09PSAyIHx8IHQgPT09IDMgfHwgdCA9PT0gNCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckxpbmUoZGF0YSwgaW1nLCB5LCBicGwsIGJwcCwgdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxzLnB1c2goZGVmbGF0ZV8xLmRlZmF1bHQuZGVmbGF0ZShkYXRhKSk7XHJcbiAgICAgICAgICAgIGlmIChicHAgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aTtcclxuICAgICAgICBsZXQgdHNpemUgPSAxZTk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZsc1tpXS5sZW5ndGggPCB0c2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGkgPSBpO1xyXG4gICAgICAgICAgICAgICAgdHNpemUgPSBmbHNbaV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbHNbdGldO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaWx0ZXJMaW5lKGRhdGEsIGltZywgeSwgYnBsLCBicHAsIHR5cGUpIHtcclxuICAgICAgICBjb25zdCBpID0geSAqIGJwbDtcclxuICAgICAgICBsZXQgZGkgPSBpICsgeTtcclxuICAgICAgICBkYXRhW2RpXSA9IHR5cGU7XHJcbiAgICAgICAgZGkrKztcclxuICAgICAgICBpZiAodHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSBpbWdbaSArIHhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicHA7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gaW1nW2kgKyB4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdIC0gaW1nW2kgKyB4IC0gYnBwXSArIDI1NikgJiAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeSA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwcDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSBpbWdbaSArIHhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSBpbWdbaSArIHhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSAtIChpbWdbaSArIHggLSBicHBdID4+IDEpICsgMjU2KSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IGJwcDsgeCA8IGJwbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gLSB0aGlzLnBhZXRoKGltZ1tpICsgeCAtIGJwcF0sIDAsIDApICsgMjU2KSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSArIDI1NiAtIGltZ1tpICsgeCAtIGJwbF0pICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwcDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gKyAyNTYgLSAoaW1nW2kgKyB4IC0gYnBsXSA+PiAxKSkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSArIDI1NiAtICgoaW1nW2kgKyB4IC0gYnBsXSArIGltZ1tpICsgeCAtIGJwcF0pID4+IDEpKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicHA7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdICsgMjU2IC0gdGhpcy5wYWV0aCgwLCBpbWdbaSArIHggLSBicGxdLCAwKSkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSArIDI1NiAtIHRoaXMucGFldGgoaW1nW2kgKyB4IC0gYnBwXSwgaW1nW2kgKyB4IC0gYnBsXSwgaW1nW2kgKyB4IC0gYnBwIC0gYnBsXSkpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwYWV0aChhLCBiLCBjKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IGEgKyBiIC0gYztcclxuICAgICAgICBjb25zdCBwYSA9IE1hdGguYWJzKHAgLSBhKTtcclxuICAgICAgICBjb25zdCBwYiA9IE1hdGguYWJzKHAgLSBiKTtcclxuICAgICAgICBjb25zdCBwYyA9IE1hdGguYWJzKHAgLSBjKTtcclxuICAgICAgICBpZiAocGEgPD0gcGIgJiYgcGEgPD0gcGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYiA8PSBwYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlQVNDSUkoZGF0YSwgcCwgcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhW3AgKyBpXSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlVWludChidWZmLCBwLCBuKSB7XHJcbiAgICAgICAgYnVmZltwXSA9IChuID4+IDI0KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAxXSA9IChuID4+IDE2KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAyXSA9IChuID4+IDgpICYgMjU1O1xyXG4gICAgICAgIGJ1ZmZbcCArIDNdID0gbiAmIDI1NTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVVc2hvcnQoYnVmZiwgcCwgbikge1xyXG4gICAgICAgIGJ1ZmZbcF0gPSAobiA+PiA4KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAxXSA9IG4gJiAyNTU7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvcHlUaWxlKHNiLCBzdywgc2gsIHRiLCB0dywgdGgsIHhvZmYsIHlvZmYsIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB3ID0gTWF0aC5taW4oc3csIHR3KTtcclxuICAgICAgICBjb25zdCBoID0gTWF0aC5taW4oc2gsIHRoKTtcclxuICAgICAgICBsZXQgc2kgPSAwO1xyXG4gICAgICAgIGxldCB0aSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh4b2ZmID49IDAgJiYgeW9mZiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2kgPSAoeSAqIHN3ICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgICAgICB0aSA9ICgoeW9mZiArIHkpICogdHcgKyB4b2ZmICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpID0gKCgteW9mZiArIHkpICogc3cgLSB4b2ZmICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgICAgICB0aSA9ICh5ICogdHcgKyB4KSA8PCAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aV0gPSBzYltzaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAxXSA9IHNiW3NpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAyXSA9IHNiW3NpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAzXSA9IHNiW3NpICsgM107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmEgPSBzYltzaSArIDNdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gc2Jbc2ldICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmcgPSBzYltzaSArIDFdICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmIgPSBzYltzaSArIDJdICogZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmEgPSB0Ylt0aSArIDNdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gdGJbdGldICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmcgPSB0Ylt0aSArIDFdICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmIgPSB0Ylt0aSArIDJdICogYmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZhID0gMSAtIGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9hID0gZmEgKyBiYSAqIGlmYTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpb2EgPSAob2EgPT09IDAgPyAwIDogMSAvIG9hKTtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDNdID0gMjU1ICogb2E7XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAwXSA9IChmciArIGJyICogaWZhKSAqIGlvYTtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDFdID0gKGZnICsgYmcgKiBpZmEpICogaW9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMl0gPSAoZmIgKyBiYiAqIGlmYSkgKiBpb2E7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAyKSB7IC8vIGNvcHkgb25seSBkaWZmZXJlbmNlcywgb3RoZXJ3aXNlIHplcm9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYSA9IHNiW3NpICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnIgPSBzYltzaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmcgPSBzYltzaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZiID0gc2Jbc2kgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYSA9IHRiW3RpICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnIgPSB0Ylt0aV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmcgPSB0Ylt0aSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gdGJbdGkgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmEgPT09IGJhICYmIGZyID09PSBiciAmJiBmZyA9PT0gYmcgJiYgZmIgPT09IGJiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDJdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAzXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aV0gPSBmcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAxXSA9IGZnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDJdID0gZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgM10gPSBmYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb2RlID09PSAzKSB7IC8vIGNoZWNrIGlmIGNhbiBiZSBibGVuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmEgPSBzYltzaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gc2Jbc2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZnID0gc2Jbc2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYiA9IHNiW3NpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmEgPSB0Ylt0aSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gdGJbdGldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnID0gdGJbdGkgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYiA9IHRiW3RpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhID09PSBiYSAmJiBmciA9PT0gYnIgJiYgZmcgPT09IGJnICYmIGZiID09PSBiYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihmYSE9MjU1ICYmIGJhIT0wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhIDwgMjIwICYmIGJhID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JjKGIsIG8sIGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmNVcGRhdGUoMHhGRkZGRkZGRiwgYiwgbywgbCkgXiAweEZGRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmNVcGRhdGUoYywgYnVmLCBvZmYsIGxlbikge1xyXG4gICAgICAgIGxldCBsb2NhbEMgPSBjO1xyXG4gICAgICAgIGNvbnN0IGNyY1RhYmxlID0gdGhpcy5jcmNUYWJsZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbG9jYWxDID0gY3JjVGFibGVbKGxvY2FsQyBeIGJ1ZltvZmYgKyBpXSkgJiAweEZGXSBeIChsb2NhbEMgPj4+IDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYWxDO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmNUYWJsZSgpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSBuZXcgVWludDMyQXJyYXkoMjU2KTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDI1NjsgbisrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjICYgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAweEVEQjg4MzIwIF4gKGMgPj4+IDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMgPj4+IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFiW25dID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemUoYnVmcywgcHMsIHJvdW5kQWxwaGEpIHtcclxuICAgICAgICBjb25zdCBpbWdzID0gW107XHJcbiAgICAgICAgbGV0IHRvdGwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpbWdzLnB1c2godGhpcy5hbHBoYU11bChuZXcgVWludDhBcnJheShidWZzW2ldKSwgcm91bmRBbHBoYSkpO1xyXG4gICAgICAgICAgICB0b3RsICs9IGJ1ZnNbaV0uYnl0ZUxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmltZyA9IG5ldyBVaW50OEFycmF5KHRvdGwpO1xyXG4gICAgICAgIGNvbnN0IG5pbWczMiA9IG5ldyBVaW50MzJBcnJheShuaW1nLmJ1ZmZlcik7XHJcbiAgICAgICAgbGV0IG5vZmYgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBpbWdzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpbCA9IGltZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaWw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbmltZ1tub2ZmICsgal0gPSBpbWdbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9mZiArPSBpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHtcclxuICAgICAgICAgICAgaTA6IDAsXHJcbiAgICAgICAgICAgIGkxOiBuaW1nLmxlbmd0aCxcclxuICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICBlc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHRkc3Q6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsXHJcbiAgICAgICAgfTsgLy8gYmFzaWMgc3RhdGlzdGljLCBleHRyYSBzdGF0aXN0aWNcclxuICAgICAgICByb290LmJzdCA9IHRoaXMucXVhbnRpemVTdGF0cyhuaW1nLCByb290LmkwLCByb290LmkxKTtcclxuICAgICAgICByb290LmVzdCA9IHRoaXMucXVhbnRpemVFc3RhdHMocm9vdC5ic3QpO1xyXG4gICAgICAgIGNvbnN0IGxlYWZzID0gW3Jvb3RdO1xyXG4gICAgICAgIHdoaWxlIChsZWFmcy5sZW5ndGggPCBwcykge1xyXG4gICAgICAgICAgICBsZXQgbWF4TCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVhZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZWFmc1tpXS5lc3QuTCA+IG1heEwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhMID0gbGVhZnNbaV0uZXN0Lkw7XHJcbiAgICAgICAgICAgICAgICAgICAgbWkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtYXhMIDwgMWUtMykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGxlYWZzW21pXTtcclxuICAgICAgICAgICAgY29uc3QgczAgPSB0aGlzLnF1YW50aXplU3BsaXRQaXhlbHMobmltZywgbmltZzMyLCBub2RlLmkwLCBub2RlLmkxLCBub2RlLmVzdC5lLCBub2RlLmVzdC5lTXEyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBsbiA9IHtcclxuICAgICAgICAgICAgICAgIGkwOiBub2RlLmkwLFxyXG4gICAgICAgICAgICAgICAgaTE6IHMwLFxyXG4gICAgICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGRzdDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByaWdodDogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsbi5ic3QgPSB0aGlzLnF1YW50aXplU3RhdHMobmltZywgbG4uaTAsIGxuLmkxKTtcclxuICAgICAgICAgICAgbG4uZXN0ID0gdGhpcy5xdWFudGl6ZUVzdGF0cyhsbi5ic3QpO1xyXG4gICAgICAgICAgICBjb25zdCBybiA9IHtcclxuICAgICAgICAgICAgICAgIGkwOiBzMCxcclxuICAgICAgICAgICAgICAgIGkxOiBub2RlLmkxLFxyXG4gICAgICAgICAgICAgICAgYnN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGRzdDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByaWdodDogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBybi5ic3QgPSB7XHJcbiAgICAgICAgICAgICAgICBSOiBbXSxcclxuICAgICAgICAgICAgICAgIG06IFtdLFxyXG4gICAgICAgICAgICAgICAgTjogbm9kZS5ic3QuTiAtIGxuLmJzdC5OXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm4uYnN0LlJbaV0gPSBub2RlLmJzdC5SW2ldIC0gbG4uYnN0LlJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJuLmJzdC5tW2ldID0gbm9kZS5ic3QubVtpXSAtIGxuLmJzdC5tW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJuLmVzdCA9IHRoaXMucXVhbnRpemVFc3RhdHMocm4uYnN0KTtcclxuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbG47XHJcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBybjtcclxuICAgICAgICAgICAgbGVhZnNbbWldID0gbG47XHJcbiAgICAgICAgICAgIGxlYWZzLnB1c2gocm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZWFmcy5zb3J0KChhLCBiKSA9PiBiLmJzdC5OIC0gYS5ic3QuTik7XHJcbiAgICAgICAgY29uc3Qgb3V0QnVmcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBpbWdzLmxlbmd0aDsgaWkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzYiA9IG5ldyBVaW50OEFycmF5KGltZ3NbaWldKTtcclxuICAgICAgICAgICAgY29uc3QgdGIgPSBuZXcgVWludDMyQXJyYXkoaW1nc1tpaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBzYi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzYltpXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBzYltpICsgMV0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gc2JbaSArIDJdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHNiW2kgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgIC8vICBleGFjdCwgYnV0IHRvbyBzbG93IDooXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBuZCA9IFVQTkcucXVhbnRpemUuZ2V0TmVhcmVzdChyb290LCByLCBnLCBiLCBhKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZCA9IHJvb3Q7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmQubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5kID0gKHRoaXMucXVhbnRpemVQbGFuZURzdChuZC5lc3QsIHIsIGcsIGIsIGEpIDw9IDApID8gbmQubGVmdCA6IG5kLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGJbaSA+PiAyXSA9IG5kLmVzdC5yZ2JhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dEJ1ZnNbaWldID0gdGIuYnVmZmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBidWZzOiBvdXRCdWZzLCBwbHRlOiBsZWFmcyB9O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBxdWFudGl6ZVN0YXRzKG5pbWcsIGkwLCBpMSkge1xyXG4gICAgICAgIGNvbnN0IFIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICAgICAgY29uc3QgbSA9IFswLCAwLCAwLCAwXTtcclxuICAgICAgICBjb25zdCBOID0gKGkxIC0gaTApID4+IDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGkwOyBpIDwgaTE7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gbmltZ1tpXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgY29uc3QgZyA9IG5pbWdbaSArIDFdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbmltZ1tpICsgMl0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBuaW1nW2kgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgLy9sZXQgciA9IG5pbWdbaV0sIGcgPSBuaW1nW2krMV0sIGIgPSBuaW1nW2krMl0sIGEgPSBuaW1nW2krM107XHJcbiAgICAgICAgICAgIG1bMF0gKz0gcjtcclxuICAgICAgICAgICAgbVsxXSArPSBnO1xyXG4gICAgICAgICAgICBtWzJdICs9IGI7XHJcbiAgICAgICAgICAgIG1bM10gKz0gYTtcclxuICAgICAgICAgICAgUlswXSArPSByICogcjtcclxuICAgICAgICAgICAgUlsxXSArPSByICogZztcclxuICAgICAgICAgICAgUlsyXSArPSByICogYjtcclxuICAgICAgICAgICAgUlszXSArPSByICogYTtcclxuICAgICAgICAgICAgUls1XSArPSBnICogZztcclxuICAgICAgICAgICAgUls2XSArPSBnICogYjtcclxuICAgICAgICAgICAgUls3XSArPSBnICogYTtcclxuICAgICAgICAgICAgUlsxMF0gKz0gYiAqIGI7XHJcbiAgICAgICAgICAgIFJbMTFdICs9IGIgKiBhO1xyXG4gICAgICAgICAgICBSWzE1XSArPSBhICogYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUls0XSA9IFJbMV07XHJcbiAgICAgICAgUls4XSA9IFJbMl07XHJcbiAgICAgICAgUlsxMl0gPSBSWzNdO1xyXG4gICAgICAgIFJbOV0gPSBSWzZdO1xyXG4gICAgICAgIFJbMTNdID0gUls3XTtcclxuICAgICAgICBSWzE0XSA9IFJbMTFdO1xyXG4gICAgICAgIHJldHVybiB7IFI6IFIsIG06IG0sIE46IE4gfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVFc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICBjb25zdCBSID0gc3RhdHMuUjtcclxuICAgICAgICBjb25zdCBtID0gc3RhdHMubTtcclxuICAgICAgICBjb25zdCBOID0gc3RhdHMuTjtcclxuICAgICAgICBjb25zdCBtMCA9IG1bMF07XHJcbiAgICAgICAgY29uc3QgbTEgPSBtWzFdO1xyXG4gICAgICAgIGNvbnN0IG0yID0gbVsyXTtcclxuICAgICAgICBjb25zdCBtMyA9IG1bM107XHJcbiAgICAgICAgY29uc3QgaU4gPSAoTiA9PT0gMCA/IDAgOiAxIC8gTik7XHJcbiAgICAgICAgY29uc3QgcmogPSBbXHJcbiAgICAgICAgICAgIFJbMF0gLSBtMCAqIG0wICogaU4sIFJbMV0gLSBtMCAqIG0xICogaU4sIFJbMl0gLSBtMCAqIG0yICogaU4sIFJbM10gLSBtMCAqIG0zICogaU4sXHJcbiAgICAgICAgICAgIFJbNF0gLSBtMSAqIG0wICogaU4sIFJbNV0gLSBtMSAqIG0xICogaU4sIFJbNl0gLSBtMSAqIG0yICogaU4sIFJbN10gLSBtMSAqIG0zICogaU4sXHJcbiAgICAgICAgICAgIFJbOF0gLSBtMiAqIG0wICogaU4sIFJbOV0gLSBtMiAqIG0xICogaU4sIFJbMTBdIC0gbTIgKiBtMiAqIGlOLCBSWzExXSAtIG0yICogbTMgKiBpTixcclxuICAgICAgICAgICAgUlsxMl0gLSBtMyAqIG0wICogaU4sIFJbMTNdIC0gbTMgKiBtMSAqIGlOLCBSWzE0XSAtIG0zICogbTIgKiBpTiwgUlsxNV0gLSBtMyAqIG0zICogaU5cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IEEgPSByajtcclxuICAgICAgICBsZXQgYiA9IFswLjUsIDAuNSwgMC41LCAwLjVdO1xyXG4gICAgICAgIGxldCBtaSA9IDA7XHJcbiAgICAgICAgbGV0IHRtaSA9IDA7XHJcbiAgICAgICAgaWYgKE4gIT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5tNE11bHRWZWMoQSwgYik7XHJcbiAgICAgICAgICAgICAgICB0bWkgPSBNYXRoLnNxcnQodGhpcy5tNERvdChiLCBiKSk7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5tNFNtbCgxIC8gdG1pLCBiKTtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0bWkgLSBtaSkgPCAxZS05KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtaSA9IHRtaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2IgPSBbMCwwLDEsMF07ICBtaT1OO1xyXG4gICAgICAgIGNvbnN0IHEgPSBbbTAgKiBpTiwgbTEgKiBpTiwgbTIgKiBpTiwgbTMgKiBpTl07XHJcbiAgICAgICAgY29uc3QgZU1xMjU1ID0gdGhpcy5tNERvdCh0aGlzLm00U21sKDI1NSwgcSksIGIpO1xyXG4gICAgICAgIGNvbnN0IGlhID0gKHFbM10gPCAwLjAwMSkgPyAwIDogMSAvIHFbM107XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQ292OiByaixcclxuICAgICAgICAgICAgcTogcSxcclxuICAgICAgICAgICAgZTogYixcclxuICAgICAgICAgICAgTDogbWksXHJcbiAgICAgICAgICAgIGVNcTI1NTogZU1xMjU1LFxyXG4gICAgICAgICAgICBlTXE6IHRoaXMubTREb3QoYiwgcSksXHJcbiAgICAgICAgICAgIHJnYmE6ICgoKE1hdGgucm91bmQoMjU1ICogcVszXSkgPDwgMjQpIHwgKE1hdGgucm91bmQoMjU1ICogcVsyXSAqIGlhKSA8PCAxNikgfCAoTWF0aC5yb3VuZCgyNTUgKiBxWzFdICogaWEpIDw8IDgpIHwgKE1hdGgucm91bmQoMjU1ICogcVswXSAqIGlhKSA8PCAwKSkgPj4+IDApXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVQbGFuZURzdChlc3QsIHIsIGcsIGIsIGEpIHtcclxuICAgICAgICBjb25zdCBlID0gZXN0LmU7XHJcbiAgICAgICAgcmV0dXJuIGVbMF0gKiByICsgZVsxXSAqIGcgKyBlWzJdICogYiArIGVbM10gKiBhIC0gZXN0LmVNcTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVTcGxpdFBpeGVscyhuaW1nLCBuaW1nMzIsIGkwaW4sIGkxaW4sIGUsIGVNcSkge1xyXG4gICAgICAgIGxldCBpMSA9IGkxaW4gLSA0O1xyXG4gICAgICAgIGxldCBpMCA9IGkwaW47XHJcbiAgICAgICAgd2hpbGUgKGkwIDwgaTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMucXVhbnRpemVWZWNEb3QobmltZywgaTAsIGUpIDw9IGVNcSkge1xyXG4gICAgICAgICAgICAgICAgaTAgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5xdWFudGl6ZVZlY0RvdChuaW1nLCBpMSwgZSkgPiBlTXEpIHtcclxuICAgICAgICAgICAgICAgIGkxIC09IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkwID49IGkxKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ID0gbmltZzMyW2kwID4+IDJdO1xyXG4gICAgICAgICAgICBuaW1nMzJbaTAgPj4gMl0gPSBuaW1nMzJbaTEgPj4gMl07XHJcbiAgICAgICAgICAgIG5pbWczMltpMSA+PiAyXSA9IHQ7XHJcbiAgICAgICAgICAgIGkwICs9IDQ7XHJcbiAgICAgICAgICAgIGkxIC09IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnF1YW50aXplVmVjRG90KG5pbWcsIGkwLCBlKSA+IGVNcSkge1xyXG4gICAgICAgICAgICBpMCAtPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTAgKyA0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBxdWFudGl6ZVZlY0RvdChuaW1nLCBpLCBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5pbWdbaV0gKiBlWzBdICsgbmltZ1tpICsgMV0gKiBlWzFdICsgbmltZ1tpICsgMl0gKiBlWzJdICsgbmltZ1tpICsgM10gKiBlWzNdO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtNE11bHRWZWMobSwgdikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG1bMF0gKiB2WzBdICsgbVsxXSAqIHZbMV0gKyBtWzJdICogdlsyXSArIG1bM10gKiB2WzNdLFxyXG4gICAgICAgICAgICBtWzRdICogdlswXSArIG1bNV0gKiB2WzFdICsgbVs2XSAqIHZbMl0gKyBtWzddICogdlszXSxcclxuICAgICAgICAgICAgbVs4XSAqIHZbMF0gKyBtWzldICogdlsxXSArIG1bMTBdICogdlsyXSArIG1bMTFdICogdlszXSxcclxuICAgICAgICAgICAgbVsxMl0gKiB2WzBdICsgbVsxM10gKiB2WzFdICsgbVsxNF0gKiB2WzJdICsgbVsxNV0gKiB2WzNdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbTREb3QoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB4WzBdICogeVswXSArIHhbMV0gKiB5WzFdICsgeFsyXSAqIHlbMl0gKyB4WzNdICogeVszXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbTRTbWwoYSwgeSkge1xyXG4gICAgICAgIHJldHVybiBbYSAqIHlbMF0sIGEgKiB5WzFdLCBhICogeVsyXSwgYSAqIHlbM11dO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBhbHBoYU11bChpbWcsIHJvdW5kQSkge1xyXG4gICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheShpbWcubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBhcmVhID0gaW1nLmxlbmd0aCA+PiAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHFpID0gaSA8PCAyO1xyXG4gICAgICAgICAgICBsZXQgaWEgPSBpbWdbcWkgKyAzXTtcclxuICAgICAgICAgICAgaWYgKHJvdW5kQSkge1xyXG4gICAgICAgICAgICAgICAgaWEgPSAoKGlhIDwgMTI4KSkgPyAwIDogMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpYSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgbmltZ1txaSArIDBdID0gaW1nW3FpICsgMF0gKiBhO1xyXG4gICAgICAgICAgICBuaW1nW3FpICsgMV0gPSBpbWdbcWkgKyAxXSAqIGE7XHJcbiAgICAgICAgICAgIG5pbWdbcWkgKyAyXSA9IGltZ1txaSArIDJdICogYTtcclxuICAgICAgICAgICAgbmltZ1txaSArIDNdID0gaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuaW1nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG5nRW5jb2RlciA9IFBuZ0VuY29kZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHNW5SVzVqYjJSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5cGJXRm5aWE12Y0c1blJXNWpiMlJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc0swUkJRVzlETzBGQlJYQkRPenM3UjBGSFJ6dEJRVU5JTEUxQlFXRXNWVUZCVlR0SlFVTnVRanM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCYlVJc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV6dFJRVU51UkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFlpeE5RVUZOTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRla0lzVFVGQlRTeEpRVUZKTEVkQlFWVXNVMEZCVXl4RFFVRkRPMUZCUXpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU53UlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNMVJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNoQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGJrSTdVVUZEUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRlppeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVV4UkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRha01zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFvc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRXaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOYUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRekZDTEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTFRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRNVUlzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEVkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnp0UlFVTTNRaXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU5VTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMVFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVms3VVVGRE9VSXNUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRWQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bEVMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzFGQlJXNUNMR3REUVVGclF6dFJRVU5zUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFvc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU5VTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVVFzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkZia0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE4wSXNTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkRUaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOYUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU4wUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMW9zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTXhReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV2l4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxFTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xTkJRM1JDTzFGQlJVUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5zUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTTFRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM3BDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEycENMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJkQ1FVTndRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WjBKQlEzcENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU0zUWp0WlFVTkVMRTFCUVUwc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xbEJSVzVDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRuUWtGRFppeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJwRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTFvc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU4wUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM3BDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0cFFrRkRha1E3WjBKQlEwUXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRFlpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUkZMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTzJGQlEzUkNPMU5CUTBvN1VVRkZSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEVsQlFVa3NSVUZCUlR0blFrRkRUaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEycERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlExb3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVOMFF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOYUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnVReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTTFReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTNReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM0pETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMW9zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU03WjBKQlF6RkNMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZUdG5Ra0ZEY0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNN1owSkJRM2hDTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVVHRuUWtGRGJFSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE9VUXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3WVVGRGRFSTdXVUZGUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzSkNMRTFCUVUwc1JVRkJSU3hIUVVGWExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSQ3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExb3NUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVNelJDeE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTlVMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU51UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRMlk3V1VGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTTVRanRaUVVORUxFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEWWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xTkJRM1JDTzFGQlJVUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRkRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VUXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRmJrSXNUMEZCVHl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGZEJRVmNzUTBGQlF5eEpRVUZ0UWl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlZTeEZRVUZGTEZWQlFXMUNPMUZCUXpGR0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU42UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5zUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRekZDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFsQlF6TkNMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZEY0VJc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXp0WlFVTndRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6VkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRXNRMEZCUXl4TlFVRnhRaXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNTVUZCV1N4RlFVRkZMRTFCUVdNc1JVRkJSU3hWUVVGdFFqdFJRVU16Unl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGJrSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMlFzU1VGQlNTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUld4Q0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVjc2QwWkJRWGRHTzFsQlF6ZElMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGVFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU01UWl4UlFVRlJMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhRanRUUVVOS08xRkJRMFFzU1VGQlNTeFJRVUZSTEVkQlFWa3NVVUZCVVN4TFFVRkxMRWRCUVVjc1EwRkJRenRSUVVWNlF5eE5RVUZOTEVsQlFVa3NSMEZCTmtJc1JVRkJSU3hEUVVGRE8xRkJRekZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMjVDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMklzU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOV0xFVkJRVVVzUlVGQlJTeERRVUZETzJGQlExSTdVMEZEU2p0UlFVVkVMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5XTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVNM1F5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOcVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dG5Ra0ZEYUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMjlDUVVOcVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dHZRa0ZEZEVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRhRUk3WVVGRFNqdFRRVU5LTzJGQlFVMDdXVUZEU0N4dlIwRkJiMGM3V1VGRGNFY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJ5eDNSa0ZCZDBZN1owSkJRemRJTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMlF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU14UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU16UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN2QwSkJRekZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzNkQ1FVTjBRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVOaUxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVN05FSkJRM0JDTEUxQlFVMDdlVUpCUTFRN2NVSkJRMG83YVVKQlEwbzdZVUZEU2p0VFFVTktPMUZCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZGTEcxRVFVRnRSRHRSUVVNM1JpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM1pDTEVsQlFVa3NSVUZCUlN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJUdFpRVU14UWl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFVkJRVVU3WjBKQlExUXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOaU8ybENRVUZOTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRGFFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOaU8ybENRVUZOTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSVHRuUWtGRGFrSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOaU8ybENRVUZOTzJkQ1FVTklMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRFlqdFpRVU5FTEVsQlFVa3NUVUZCVFN4RlFVRkZPMmRDUVVOU0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWWp0WlFVTkVMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRGJrSTdVVUZGUkN4TlFVRk5MRWxCUVVrc1IwRkJXU3hGUVVGRkxFTkJRVU03VVVGRGVrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJFTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlJURkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTllMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRGJrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUml4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEySXNTVUZCU1N4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU5vUWl4TFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRk8yOUNRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTFvc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTmFMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTmlMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTmlMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlEzaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3TkVKQlEzaENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPelJDUVVOd1FpeEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaME5CUTNSQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlR0dlEwRkRWQ3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJsRFFVTllPMmREUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlR0dlEwRkRWQ3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJsRFFVTllPMmREUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlR0dlEwRkRWQ3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJsRFFVTllPMmREUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlR0dlEwRkRWQ3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJsRFFVTllPelpDUVVOS08zbENRVU5LTzNGQ1FVTktPMjlDUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRia1VzU1VGQlNTeExRVUZMTEVkQlFVY3NTMEZCU3l4RlFVRkZPM2RDUVVObUxFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdkMEpCUTJRc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dDNRa0ZEVml4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUczBRa0ZEV2l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE96UkNRVU5RTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN05FSkJRMUFzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXpzMFFrRkRVQ3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzNsQ1FVTldPelpDUVVGTk96UkNRVU5JTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNN05FSkJRMVFzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXpzMFFrRkRWQ3hGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN05FSkJRMjVDTEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZEZEVJN2NVSkJRMG83YVVKQlEwbzdaMEpCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVOYUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUTNKRE8yZENRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM3BETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRkRVFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGNrUXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRFlqdHhRa0ZCVFR0dlFrRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVJDeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOaU8yZENRVU5FTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRMW9zVFVGQlRTeEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dGhRVU42UXp0WlFVTkVMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1NVRkJTU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMmRDUVVNeFFpeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOb1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTNSRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNwQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRMnhDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEyeENMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUlVGQlJUdDNRa0ZEWWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk96UkNRVU42UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQ1UWtGRE1VTTdjVUpCUTBvN2VVSkJRVTBzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPM2RDUVVOd1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEzSkZPM0ZDUVVOS08zbENRVUZOTEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1JVRkJSVHQzUWtGRGNFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHMwUWtGRGVrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTnlSVHR4UWtGRFNqdDVRa0ZCVFN4SlFVRkpMRXRCUVVzc1MwRkJTeXhEUVVGRExFVkJRVVU3ZDBKQlEzQkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3TkVKQlEzcENMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0NVFrRkRja1U3Y1VKQlEwbzdhVUpCUTBvN1owSkJRMFFzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkRXaXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTldMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRFdEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc05FUkJRVFJFTzJkQ1FVTnlSeXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjZReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOeVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNelFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5xUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTnFRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU53UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6VkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZETDBJN1owSkJRMFFzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkRXaXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTldMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlExSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WVVGRGFFSTdXVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU5PTEVsQlFVa3NSVUZCUlR0dlFrRkRSaXhEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGRFRDeExRVUZMTEVWQlFVVXNSVUZCUlR0dlFrRkRWQ3hOUVVGTkxFVkJRVVVzUlVGQlJUdHBRa0ZEWWp0blFrRkRSQ3hIUVVGSExFVkJRVVVzU1VGQlNUdG5Ra0ZEVkN4SFFVRkhMRVZCUVVVc1IwRkJSenRuUWtGRFVpeEhRVUZITEVWQlFVVXNSMEZCUnp0blFrRkRVaXhMUVVGTExFVkJRVVVzUzBGQlN6dG5Ra0ZEV2l4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRla0lzUTBGQlF5eERRVUZETzFOQlEwNDdVVUZEUkN4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU03U1VGRGVFWXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hWUVVGVkxFTkJRVU1zUjBGQlpTeEZRVUZGTEVOQlFWTXNSVUZCUlN4SFFVRlhMRVZCUVVVc1IwRkJWeXhGUVVGRkxFbEJRV2RDTzFGQlEzSkdMRTFCUVUwc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRlRUlzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdaMEpCUTNKRUxGTkJRVk03WVVGRFdqdFpRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM2hDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU01UXp0WlFVTkVMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlExZ3NUVUZCVFR0aFFVTlVPMU5CUTBvN1VVRkRSQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5RTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOcVF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eEZRVUZGTzJkQ1FVTjJRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTlFMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRPMkZCUTNwQ08xTkJRMG83VVVGRFJDeFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRlZCUVZVc1EwRkJReXhKUVVGblFpeEZRVUZGTEVkQlFXVXNSVUZCUlN4RFFVRlRMRVZCUVVVc1IwRkJWeXhGUVVGRkxFZEJRVmNzUlVGQlJTeEpRVUZaTzFGQlEyNUhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVWMFFpeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRXaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXhRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETjBJN1UwRkRTanRoUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTnVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXhRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETjBJN1dVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRE9VUTdVMEZEU2p0aFFVRk5MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU14UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE4wSTdXVUZGUkN4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlExb3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGRE5VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU0zUWp0aFFVTktPMWxCUTBRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlF6VkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTnlSVHRoUVVOS08xbEJRMFFzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUXpWQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEYUVZN1lVRkRTanRUUVVOS08yRkJRVTA3V1VGRFNDeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMW9zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkRNVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTTVSRHRoUVVOS08xbEJRMFFzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmxDUVVOeVJUdG5Ra0ZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU0xUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdhVUpCUXpGR08yRkJRMG83V1VGRFJDeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMW9zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkRNVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTm9SanRuUWtGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEY0VnN1lVRkRTanRUUVVOS08wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TFFVRkxMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEzcERMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRM1JDTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTFvN1VVRkRSQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZEVml4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVOYU8xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGVkJRVlVzUTBGQlF5eEpRVUZuUWl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRM0pFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFbEJRV2RDTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRjRVFzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hYUVVGWExFTkJRVU1zU1VGQlowSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkVzUTBGQlF5eEZRVUZqTEVWQlFVVXNSVUZCVlN4RlFVRkZMRVZCUVZVc1JVRkJSU3hGUVVGakxFVkJRVVVzUlVGQlZTeEZRVUZGTEVWQlFWVXNSVUZCUlN4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxFbEJRVms3VVVGRGNra3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMElzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBJc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExZ3NTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjRRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjRRaXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGRGVFSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRM1pDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTXhRenR4UWtGQlRUdHZRa0ZEU0N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVONFF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRNVUk3WjBKQlJVUXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU5hTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUTJoQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRlRUlzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONFFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRek5DTzNGQ1FVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdHZRa0ZEYmtJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRiRU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dHZRa0ZEZGtJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU16UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTnNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU4yUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRE0wSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJSVE5DTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEyNUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRPMjlDUVVONlFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTndReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEzUkNMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0dlFrRkRia01zUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yOUNRVU51UXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdhVUpCUTNSRE8zRkNRVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxIZERRVUYzUXp0dlFrRkROMFFzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOc1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU4wUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNSQ0xFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSVHQzUWtGRGJFUXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZEV0N4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRaaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRFppeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZEYkVJN2VVSkJRVTA3ZDBKQlEwZ3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dDNRa0ZEV2l4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0M1FrRkRhRUlzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03ZDBKQlEyaENMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPM0ZDUVVOdVFqdHBRa0ZEU2p0eFFrRkJUU3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVXNSVUZCUlN3d1FrRkJNRUk3YjBKQlF5OURMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZEYkVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOc1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU4wUWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVTdkMEpCUTJ4RUxGTkJRVk03Y1VKQlExbzdiMEpCUTBRc2IwTkJRVzlETzI5Q1FVTndReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHQzUWtGRGNrSXNUMEZCVHl4TFFVRkxMRU5CUVVNN2NVSkJRMmhDTzJsQ1FVTktPMkZCUTBvN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzUjBGQlJ5eERRVUZETEVOQlFXRXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVNelF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFTkJRVk1zUlVGQlJTeEhRVUZsTEVWQlFVVXNSMEZCVnl4RlFVRkZMRWRCUVZjN1VVRkRiRVVzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJwRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZEVVN1VVRkRSQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkU3VVVGRFdpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOV0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRVQ3hEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU01UWp0eFFrRkJUVHR2UWtGRFNDeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGRFpqdGhRVU5LTzFsQlEwUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5rTzFGQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRXNRMEZCUXl4SlFVRnRRaXhGUVVGRkxFVkJRVlVzUlVGQlJTeFZRVUZyUWp0UlFVTm9SU3hOUVVGTkxFbEJRVWtzUjBGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmlMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEyeERMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxFTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFOQlF6bENPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRiRU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6VkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5pTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMnhETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETzFsQlEzUkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzcENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRek5DTzFsQlEwUXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJRenRUUVVOa08xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFWTTdXVUZEWml4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOTUxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVTm1MRWRCUVVjc1JVRkJSU3hKUVVGSk8xbEJRMVFzUjBGQlJ5eEZRVUZGTEVsQlFVazdXVUZEVkN4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOUUxFbEJRVWtzUlVGQlJTeEpRVUZKTzFsQlExWXNTMEZCU3l4RlFVRkZMRWxCUVVrN1UwRkRaQ3hEUVVGRExFTkJRVVVzYlVOQlFXMURPMUZCUTNaRExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRFUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONlF5eE5RVUZOTEV0QlFVc3NSMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSVGRDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGRFSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMklzU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTI1RExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTzI5Q1FVTjJRaXhKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRGFrTTdZVUZEU2p0WlFVTkVMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUlVGQlJUdG5Ra0ZEWWl4TlFVRk5PMkZCUTFRN1dVRkRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkZka0lzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRmFrY3NUVUZCVFN4RlFVRkZMRWRCUVZNN1owSkJRMklzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVOWUxFVkJRVVVzUlVGQlJTeEZRVUZGTzJkQ1FVTk9MRWRCUVVjc1JVRkJSU3hKUVVGSk8yZENRVU5VTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmRDUVVOVUxFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTlFMRWxCUVVrc1JVRkJSU3hKUVVGSk8yZENRVU5XTEV0QlFVc3NSVUZCUlN4SlFVRkpPMkZCUTJRc1EwRkJRenRaUVVOR0xFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFUXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOeVF5eE5RVUZOTEVWQlFVVXNSMEZCVXp0blFrRkRZaXhGUVVGRkxFVkJRVVVzUlVGQlJUdG5Ra0ZEVGl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFVkJRVVU3WjBKQlExZ3NSMEZCUnl4RlFVRkZMRWxCUVVrN1owSkJRMVFzUjBGQlJ5eEZRVUZGTEVsQlFVazdaMEpCUTFRc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlExQXNTVUZCU1N4RlFVRkZMRWxCUVVrN1owSkJRMVlzUzBGQlN5eEZRVUZGTEVsQlFVazdZVUZEWkN4RFFVRkRPMWxCUTBZc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ6dG5Ra0ZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRFRDeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRUQ3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6TkNMRU5CUVVNN1dVRkRSaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjZRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNM1F6dFpRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM2hDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6ZERPMWxCUTBRc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVVZ5UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU5tTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMmhDTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRFppeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMnhDTzFGQlEwUXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmVFTXNUVUZCVFN4UFFVRlBMRWRCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVU5zUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJUdFpRVU55UXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVWQlFVVXNSMEZCWjBJc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJRenRaUVVWMFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRemRDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRE5VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRhRU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRmFFTXNNRUpCUVRCQ08yZENRVU14UWl4elJFRkJjMFE3WjBKQlEzUkVMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZEWkN4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVU3YjBKQlExb3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNN2FVSkJRemxGTzJkQ1FVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRE5VSTdXVUZEUkN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXp0VFFVTXpRanRSUVVORUxFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHRkJRV0VzUTBGQlF5eEpRVUZuUWl4RlFVRkZMRVZCUVZVc1JVRkJSU3hGUVVGVk8xRkJRekZFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRla0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTVRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOc1F5d3JSRUZCSzBRN1dVRkRMMFFzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVVXpReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UkN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkROVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU12UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnNRanRSUVVORUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVVZxUml4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHTkJRV01zUTBGQlF5eExRVUU0UXp0UlFWTnFSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFMUJRVTBzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWc1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaENMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4TlFVRk5MRVZCUVVVc1IwRkJSenRaUVVOUUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1dVRkRiRVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOc1JpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRM0JHTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVU3VTBGRGVrWXNRMEZCUXp0UlFVVkdMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5pTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJWb3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRla0lzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjZRaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlR0dlFrRkRNMElzVFVGQlRUdHBRa0ZEVkR0blFrRkRSQ3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlExbzdVMEZEU2p0UlFVTkVMSFZDUVVGMVFqdFJRVU4yUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNdlF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJXcEVMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGZWtNc1QwRkJUenRaUVVOSUxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlExQXNRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRTaXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU5LTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTB3c1RVRkJUU3hGUVVGRkxFMUJRVTA3V1VGRFpDeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkNMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU5xU3l4RFFVRkRPMGxCUTA0c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeG5Ra0ZCWjBJc1EwRkJReXhIUVVGcFF5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJFY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU12UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHMUNRVUZ0UWl4RFFVRkRMRWxCUVdkQ0xFVkJRVVVzVFVGQmJVSXNSVUZCUlN4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxFTkJRVmNzUlVGQlJTeEhRVUZYTzFGQlEyNUlMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyUXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMmRDUVVNMVF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTFnN1dVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVTdaMEpCUXpORExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEV0R0WlFVTkVMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJUdG5Ra0ZEVml4TlFVRk5PMkZCUTFRN1dVRkZSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVVZ3UWl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMUlzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTllPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlF6TkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRFdEdFJRVU5FTEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR05CUVdNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlhPMUZCUXpORUxFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42Uml4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGTkJRVk1zUTBGQlF5eERRVUZYTEVWQlFVVXNRMEZCVnp0UlFVTjBReXhQUVVGUE8xbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tRc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETlVRc1EwRkJRenRKUVVOT0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNTMEZCU3l4RFFVRkRMRU5CUVZjc1JVRkJSU3hEUVVGWE8xRkJRMnhETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOcVJTeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRXRCUVVzc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlZ6dFJRVU5vUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0JFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVU3hEUVVGRExFZEJRV1VzUlVGQlJTeE5RVUZqTzFGQlF6VkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVONFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGJFSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGSkxFMUJRVTBzUlVGQlJUdG5Ra0ZEVWl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0aFFVTXZRanRaUVVORUxFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU42UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOeVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03UTBGRFNqdEJRVFV6UWtRc1owTkJORE5DUXlKOSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9pbml0UmVuZGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL3FyUmVuZGVyZXJGYWN0b3J5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9pbWFnZUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlcy9qcGVnRW5jb2RlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ltYWdlcy9wbmdFbmNvZGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvY2FudmFzUmVuZGVyZXJPcHRpb25zXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9wbmdSZW5kZXJlck9wdGlvbnNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9zdmdSZW5kZXJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3RleHRSZW5kZXJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3RleHRSZW5kZXJlck9wdGlvbnNcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NhME5CUVRaQ08wRkJRemRDTEcxRVFVRTRRenRCUVVNNVF5d3lRMEZCYzBNN1FVRkRkRU1zTUVOQlFYRkRPMEZCUTNKRExIbERRVUZ2UXp0QlFVVndReXhuUkVGQk1rTTdRVUZETTBNc2RVUkJRV3RFTzBGQlEyeEVMR3RFUVVFMlF6dEJRVU0zUXl4NVJFRkJiMFE3UVVGRGNFUXNLME5CUVRCRE8wRkJRekZETEhORVFVRnBSRHRCUVVOcVJDd3JRMEZCTUVNN1FVRkRNVU1zYzBSQlFXbEVPMEZCUTJwRUxHZEVRVUV5UXp0QlFVTXpReXgxUkVGQmEwUWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSW5pdGlhbGl6ZSB0aGUgZmFjdG9yaWVzLlxyXG4gKi9cclxuY29uc3QgcXJSZW5kZXJlckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9xclJlbmRlcmVyRmFjdG9yeVwiKTtcclxuY29uc3QgY2FudmFzUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyXCIpO1xyXG5jb25zdCBqcGVnUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlclwiKTtcclxuY29uc3QgcG5nUmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyXCIpO1xyXG5jb25zdCBzdmdSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXJcIik7XHJcbmNvbnN0IHRleHRSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyXCIpO1xyXG5mdW5jdGlvbiBpbml0UmVuZGVyKCkge1xyXG4gICAgcXJSZW5kZXJlckZhY3RvcnlfMS5RUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiY2FudmFzXCIsIChvcHRzKSA9PiBuZXcgY2FudmFzUmVuZGVyZXJfMS5DYW52YXNSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJ0eHRcIiwgKG9wdHMpID0+IG5ldyB0ZXh0UmVuZGVyZXJfMS5UZXh0UmVuZGVyZXIob3B0cykpO1xyXG4gICAgcXJSZW5kZXJlckZhY3RvcnlfMS5RUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwic3ZnXCIsIChvcHRzKSA9PiBuZXcgc3ZnUmVuZGVyZXJfMS5TdmdSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJqcGdcIiwgKG9wdHMpID0+IG5ldyBqcGVnUmVuZGVyZXJfMS5KcGVnUmVuZGVyZXIob3B0cykpO1xyXG4gICAgcXJSZW5kZXJlckZhY3RvcnlfMS5RUlJlbmRlcmVyRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwicG5nXCIsIChvcHRzKSA9PiBuZXcgcG5nUmVuZGVyZXJfMS5QbmdSZW5kZXJlcihvcHRzKSk7XHJcbn1cclxuZXhwb3J0cy5pbml0UmVuZGVyID0gaW5pdFJlbmRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1cGRGSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXBibWwwVW1WdVpHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMSEZGUVVGclJUdEJRVU5zUlN4cFJVRkJPRVE3UVVGRE9VUXNOa1JCUVRCRU8wRkJRekZFTERKRVFVRjNSRHRCUVVONFJDd3lSRUZCZDBRN1FVRkRlRVFzTmtSQlFUQkVPMEZCUlRGRUxGTkJRV2RDTEZWQlFWVTdTVUZEZEVJc2NVTkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3dyUWtGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVlzY1VOQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwVXNjVU5CUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZET1VVc2NVTkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3d5UWtGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRMMFVzY1VOQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJFWXNRMEZCUXp0QlFVNUVMR2REUVUxREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIpO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlbmRlciBxciBkYXRhIGFzIGNhbnZhcy5cclxuICovXHJcbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN2ZyByZW5kZXJlci5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgPSB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgfHwgY29sb3JfMS5Db2xvci5mcm9tSGV4KFwiIzAwMDAwMFwiKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQgPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQgfHwgY29sb3JfMS5Db2xvci5mcm9tSGV4KFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmNzc0NsYXNzID0gdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyB8fCBcInFyLWNhbnZhc1wiO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmZvcmVncm91bmQsIGNvbG9yXzEuQ29sb3IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGZvcmVncm91bmQgaXMgbm90IGEgQ29sb3Igb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLCBjb2xvcl8xLkNvbG9yKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBiYWNrZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIGFuIGNhbnZhcy5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIFNWRyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVuZGVyUmF3IGlzIG5vdCBzdXBwb3J0ZWQgZm9yIDxjYW52YXM+XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIGNlbGwgZGF0YSBhcyBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSB0byByZW5kZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgaW4gcGl4ZWxzIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gc2l6ZSBpbiBwaXhlbHMgdG8gbGVhdmUgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIG9iamVjdCByZW5kZXJlZCBhcyBhbiBodG1sIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlckh0bWwoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoY2VsbERhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjZWxsRGF0YSBtdXN0IGJlIG9mIHR5cGUgUVJDZWxsRGF0YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIoY2VsbFNpemUpIHx8IGNlbGxTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2VsbFNpemUgbXVzdCBiZSBhIG51bWJlciA+IDAsIGl0IGlzICR7Y2VsbFNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKG1hcmdpblNpemUpIHx8IG1hcmdpblNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1hcmdpblNpemUgbXVzdCBiZSBhIG51bWJlciA+PSAwLCBpdCBpcyAke21hcmdpblNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjZWxsRGF0YS5sZW5ndGggKiBjZWxsU2l6ZSArICgyICogbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBkaW1lbnNpb25zO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb25zO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJnYmFUZXh0KCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBkaW1lbnNpb25zLCBkaW1lbnNpb25zKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZC5yZ2JhVGV4dCgpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2VsbERhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjZWxsRGF0YVt4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxEYXRhW3hdW3ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4ICogY2VsbFNpemUgKyBtYXJnaW5TaXplLCB5ICogY2VsbFNpemUgKyBtYXJnaW5TaXplLCBjZWxsU2l6ZSwgY2VsbFNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DYW52YXNSZW5kZXJlciA9IENhbnZhc1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMkZ1ZG1GelVtVnVaR1Z5WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y21WdVpHVnlWSGx3WlhNdlkyRnVkbUZ6VW1WdVpHVnlaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzFGUVVGblJUdEJRVU5vUlN4clJrRkJLMFU3UVVGREwwVXNiMFpCUVdsR08wRkJRMnBHTEc5R1FVRnBSanRCUVV0cVJqczdSMEZGUnp0QlFVTklMRTFCUVdFc1kwRkJZenRKUVVsMlFqczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFOUJRU3RDTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVDBGQlR5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzU1VGQlNTeGhRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4SlFVRkpMR0ZCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFbEJRVWtzVjBGQlZ5eERRVUZETzFGQlJTOUVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeGhRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTjJSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERoRFFVRTRReXhEUVVGRExFTkJRVU03VTBGRGJrVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRVVVzWVVGQlN5eERRVUZETEVWQlFVVTdXVUZEZGtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRRMEZCT0VNc1EwRkJReXhEUVVGRE8xTkJRMjVGTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCYjBJc1JVRkJSU3hYUVVGdFFpeERRVUZETEVWQlFVVXNZVUZCY1VJc1JVRkJSVHRSUVVOMFJpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdTVUZETDBRc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJiMElzUlVGQlJTeFhRVUZ0UWl4RFFVRkRMRVZCUVVVc1lVRkJjVUlzUlVGQlJUdFJRVU4yUml4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFOQlF6bEVPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzBRMEZCTkVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU16UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzUkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zSzBOQlFTdERMRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFFWTdVVUZGUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVZxUlN4TlFVRk5MRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGTjBNc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZETVVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZGTTBJc1RVRkJUU3hQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWNFF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRUxFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZETDBNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU40UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRla01zU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEyaENMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU01Ump0aFFVTktPMU5CUTBvN1VVRkRSQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPME5CUTBvN1FVRTFSVVFzZDBOQk5FVkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgQ2FudmFzIHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgQ2FudmFzUmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLkNhbnZhc1JlbmRlcmVyT3B0aW9ucyA9IENhbnZhc1JlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJGdWRtRnpVbVZ1WkdWeVpYSlBjSFJwYjI1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwyTmhiblpoYzFKbGJtUmxjbVZ5VDNCMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlJVRTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExIRkNRVUZ4UWp0RFFXRnFRenRCUVdKRUxITkVRV0ZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIik7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBpbWFnZUhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvaW1hZ2VIZWxwZXJcIik7XHJcbmNvbnN0IGpwZWdFbmNvZGVyXzEgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2pwZWdFbmNvZGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVuZGVyIHFyIGRhdGEgYXMgYml0bWFwLlxyXG4gKi9cclxuY2xhc3MgSnBlZ1JlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN2ZyByZW5kZXJlci5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgPSB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgfHwgY29sb3JfMS5Db2xvci5mcm9tSGV4KFwiIzAwMDAwMFwiKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQgPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQgfHwgY29sb3JfMS5Db2xvci5mcm9tSGV4KFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmNzc0NsYXNzID0gdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyB8fCBcInFyLWpwZWdcIjtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLCBjb2xvcl8xLkNvbG9yKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBmb3JlZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgYmFja2dyb3VuZCBpcyBub3QgYSBDb2xvciBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIFFSIGNvZGUgZGF0YSBhcyBhIGJpdG1hcC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGJpdG1hcCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoY2VsbERhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjZWxsRGF0YSBtdXN0IGJlIG9mIHR5cGUgUVJDZWxsRGF0YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIoY2VsbFNpemUpIHx8IGNlbGxTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2VsbFNpemUgbXVzdCBiZSBhIG51bWJlciA+IDAsIGl0IGlzICR7Y2VsbFNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKG1hcmdpblNpemUpIHx8IG1hcmdpblNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1hcmdpblNpemUgbXVzdCBiZSBhIG51bWJlciA+PSAwLCBpdCBpcyAke21hcmdpblNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjZWxsRGF0YS5sZW5ndGggKiBjZWxsU2l6ZSArICgyICogbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiBkaW1lbnNpb25zICogNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIGRhdGFbaV0gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDFdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmdyZWVuKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDJdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgZGF0YVtpICsgM10gPSAweEZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGMgPSBtYXJnaW5TaXplICogZGltZW5zaW9ucyAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgVWludDhBcnJheShkaW1lbnNpb25zICogNCk7XHJcbiAgICAgICAgICAgIGxldCByID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJnaW5TaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gMHhGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBjZWxsRGF0YVt5XVt4XSA/IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA6IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gMHhGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSAweEZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zZXQocm93LCBkYyk7XHJcbiAgICAgICAgICAgICAgICBkYyArPSByb3cubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcganBlZ0VuY29kZXJfMS5KcGVnRW5jb2RlcigpLmVuY29kZShkaW1lbnNpb25zLCBkaW1lbnNpb25zLCBkYXRhLCA3NSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCB0aGlzLnJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQodGhpcy5fb3B0aW9ucy5jc3NDbGFzcyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlSGVscGVyXzEuSW1hZ2VIZWxwZXIuZGF0YVRvSW1hZ2VTb3VyY2UoXCJpbWFnZS9qcGVnXCIsIHJhdyk7XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpwZWdSZW5kZXJlciA9IEpwZWdSZW5kZXJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5CbFoxSmxibVJsY21WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwycHdaV2RTWlc1a1pYSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiVVZCUVdkRk8wRkJRMmhGTEd0R1FVRXJSVHRCUVVNdlJTeHZSa0ZCYVVZN1FVRkRha1lzYjBaQlFXbEdPMEZCUldwR0xIZEVRVUZ4UkR0QlFVTnlSQ3gxUkVGQmIwUTdRVUZKY0VRN08wZEJSVWM3UVVGRFNDeE5RVUZoTEZsQlFWazdTVUZKY2tJN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4UFFVRTJRanRSUVVOeVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTlCUVU4c1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWxCUVVrc1lVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTm9SaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzU1VGQlNTeGhRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVVM1JDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1lVRkJTeXhEUVVGRExFVkJRVVU3V1VGRGRrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXc0UTBGQk9FTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMR0ZCUVVzc1EwRkJReXhGUVVGRk8xbEJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc09FTkJRVGhETEVOQlFVTXNRMEZCUXp0VFFVTnVSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVzlDTEVWQlFVVXNWMEZCYlVJc1EwRkJReXhGUVVGRkxHRkJRWEZDTEVWQlFVVTdVVUZEZEVZc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVTkJRWGxETEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTI1RUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNORU5CUVRSRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETTBVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjBSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEN0RFFVRXJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyaEdPMUZCUlVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYWtVc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU42UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU42UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFsQlF5OURMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZET1VNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeEpRVUZKTEVWQlFVVXNSMEZCUnl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU55UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUlZZc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEYWtNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUXpGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVNMVF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRE0wTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzJGQlEyNUNPMWxCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM3BETEUxQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETzJkQ1FVTndSaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJ5eEZRVUZGTzI5Q1FVTm9ReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEzaENMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenR2UWtGRE1VSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMjlDUVVONlFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03YVVKQlEyNUNPMkZCUTBvN1dVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJ5eEZRVUZGTzJkQ1FVTnNReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRNVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRelZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVU16UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEYmtJN1dVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXZRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGJFSXNSVUZCUlN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03WVVGRGNFSTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3g1UWtGQlZ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNSRkxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVzlDTEVWQlFVVXNWMEZCYlVJc1EwRkJReXhGUVVGRkxHRkJRWEZDTEVWQlFVVTdVVUZEZGtZc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYWtVc1RVRkJUU3hIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NlVUpCUVZjc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRk0wUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wTkJRMG83UVVFelIwUXNiME5CTWtkREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBKcGVnIHJlbmRlcmVyLlxyXG4gKi9cclxuY2xhc3MgSnBlZ1JlbmRlcmVyT3B0aW9ucyB7XHJcbn1cclxuZXhwb3J0cy5KcGVnUmVuZGVyZXJPcHRpb25zID0gSnBlZ1JlbmRlcmVyT3B0aW9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5CbFoxSmxibVJsY21WeVQzQjBhVzl1Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl5Wlc1a1pYSlVlWEJsY3k5cWNHVm5VbVZ1WkdWeVpYSlBjSFJwYjI1ekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZGUVRzN1IwRkZSenRCUVVOSUxFMUJRV0VzYlVKQlFXMUNPME5CWXk5Q08wRkJaRVFzYTBSQlkwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGltYWdlSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9pbWFnZUhlbHBlclwiKTtcclxuY29uc3QgcG5nRW5jb2Rlcl8xID0gcmVxdWlyZShcIi4uL2ltYWdlcy9wbmdFbmNvZGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVuZGVyIHFyIGRhdGEgYXMgcG5nLlxyXG4gKi9cclxuY2xhc3MgUG5nUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3ZnIHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItcG5nXCI7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgZm9yZWdyb3VuZCBpcyBub3QgYSBDb2xvciBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmJhY2tncm91bmQsIGNvbG9yXzEuQ29sb3IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGJhY2tncm91bmQgaXMgbm90IGEgQ29sb3Igb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBRUiBjb2RlIGRhdGEgYXMgYSBiaXRtYXAuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSBmb3IgdGhlIFFSIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiB0byBrZWVwIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBiaXRtYXAgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KGNlbGxEYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2VsbERhdGEgbXVzdCBiZSBvZiB0eXBlIFFSQ2VsbERhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKGNlbGxTaXplKSB8fCBjZWxsU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNlbGxTaXplIG11c3QgYmUgYSBudW1iZXIgPiAwLCBpdCBpcyAke2NlbGxTaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihtYXJnaW5TaXplKSB8fCBtYXJnaW5TaXplIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJnaW5TaXplIG11c3QgYmUgYSBudW1iZXIgPj0gMCwgaXQgaXMgJHttYXJnaW5TaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2VsbERhdGEubGVuZ3RoICogY2VsbFNpemUgKyAoMiAqIG1hcmdpblNpemUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShkaW1lbnNpb25zICogZGltZW5zaW9ucyAqIDQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBkYXRhW2ldID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICBkYXRhW2kgKyAxXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICBkYXRhW2kgKyAyXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ibHVlKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDNdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmFscGhhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYyA9IG1hcmdpblNpemUgKiBkaW1lbnNpb25zICogNDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiA0KTtcclxuICAgICAgICAgICAgbGV0IHIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYWxwaGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBjZWxsRGF0YVt5XVt4XSA/IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA6IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1tyKytdID0gY29sb3VyLmFscGhhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJnaW5TaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLnJlZCgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmFscGhhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNldChyb3csIGRjKTtcclxuICAgICAgICAgICAgICAgIGRjICs9IHJvdy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBwbmdFbmNvZGVyXzEuUG5nRW5jb2RlcigpLmVuY29kZShbZGF0YS5idWZmZXJdLCBkaW1lbnNpb25zLCBkaW1lbnNpb25zKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMucmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1hZ2VIZWxwZXJfMS5JbWFnZUhlbHBlci5kYXRhVG9JbWFnZVNvdXJjZShcImltYWdlL3BuZ1wiLCByYXcpO1xyXG4gICAgICAgIHJldHVybiBpbWc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbmdSZW5kZXJlciA9IFBuZ1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzVuVW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12Y0c1blVtVnVaR1Z5WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVOb1JTeHJSa0ZCSzBVN1FVRkRMMFVzYjBaQlFXbEdPMEZCUTJwR0xHOUdRVUZwUmp0QlFVVnFSaXgzUkVGQmNVUTdRVUZEY2tRc2NVUkJRV3RFTzBGQlNXeEVPenRIUVVWSE8wRkJRMGdzVFVGQllTeFhRVUZYTzBsQlNYQkNPenM3VDBGSFJ6dEpRVU5JTEZsQlFWa3NUMEZCTkVJN1VVRkRjRU1zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4SlFVRkpMR0ZCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYUVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFbEJRVWtzWVVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOb1JpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRU5CUVVNN1VVRkZOVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMR0ZCUVVzc1EwRkJReXhGUVVGRk8xbEJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc09FTkJRVGhETEVOQlFVTXNRMEZCUXp0VFFVTnVSVHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlN4aFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOMlJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRGhEUVVFNFF5eERRVUZETEVOQlFVTTdVMEZEYmtVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeEZRVUZGTzFGQlEzUkdMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVMEZET1VRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSRFFVRTBReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEZEVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3JRMEZCSzBNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVVkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJXcEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGVrTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU12UXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlF6bERMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVMEZEYkVRN1VVRkZSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOeVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRlZCUVZVc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJWWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGFrTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlF6RkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTTFReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkRNME1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1lVRkRMME03V1VGRlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1owSkJRM0JHTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkhMRVZCUVVVN2IwSkJRMmhETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0dlFrRkRlRUlzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzI5Q1FVTXhRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEzcENMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRwUWtGRE4wSTdZVUZEU2p0WlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGSExFVkJRVVU3WjBKQlEyeERMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXhReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkROVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRek5ETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yRkJReTlETzFsQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xFVkJRVVVzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPMkZCUTNCQ08xTkJRMG83VVVGRlJDeFBRVUZQTEVsQlFVa3NkVUpCUVZVc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZETVVVc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJiMElzUlVGQlJTeFhRVUZ0UWl4RFFVRkRMRVZCUVVVc1lVRkJjVUlzUlVGQlJUdFJRVU4yUml4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVZxUlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZETVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVVeFJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0SlFVTm1MRU5CUVVNN1EwRkRTanRCUVROSFJDeHJRMEV5UjBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBQbmcgcmVuZGVyZXIuXHJcbiAqL1xyXG5jbGFzcyBQbmdSZW5kZXJlck9wdGlvbnMge1xyXG59XHJcbmV4cG9ydHMuUG5nUmVuZGVyZXJPcHRpb25zID0gUG5nUmVuZGVyZXJPcHRpb25zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzVuVW1WdVpHVnlaWEpQY0hScGIyNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzSmxibVJsY2xSNWNHVnpMM0J1WjFKbGJtUmxjbVZ5VDNCMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlJVRTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExHdENRVUZyUWp0RFFXTTVRanRCUVdSRUxHZEVRV05ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIik7XHJcbmNvbnN0IGxpbmVhckdyYWRpZW50XzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2xpbmVhckdyYWRpZW50XCIpO1xyXG5jb25zdCByYWRpYWxHcmFkaWVudF8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9yYWRpYWxHcmFkaWVudFwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBzdmcuXHJcbiAqL1xyXG5jbGFzcyBTdmdSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTdmcgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kVHlwZSA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgfHwgXCJzb2xpZFwiO1xyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlICE9PSBcInNvbGlkXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kVHlwZSAhPT0gXCJsaW5lYXJcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlICE9PSBcInJhZGlhbFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGZvcmVncm91bmRUeXBlIG11c3QgYmUgc29saWQsIGxpbmVhciBvciByYWRpYWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID09PSBcInNvbGlkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmZvcmVncm91bmQsIGNvbG9yXzEuQ29sb3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBmb3JlZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID09PSBcImxpbmVhclwiKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRMaW5lYXIsIGxpbmVhckdyYWRpZW50XzEuTGluZWFyR3JhZGllbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBmb3JlZ3JvdW5kTGluZWFyIG11c3QgYmUgYSBMaW5lYXJHcmFkaWVudCBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kVHlwZSA9PT0gXCJyYWRpYWxcIikge1xyXG4gICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kUmFkaWFsLCByYWRpYWxHcmFkaWVudF8xLlJhZGlhbEdyYWRpZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgZm9yZWdyb3VuZFJhZGlhbCBtdXN0IGJlIGEgUmFkaWFsR3JhZGllbnQgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItc3ZnXCI7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgYmFja2dyb3VuZCBpcyBub3QgYSBDb2xvciBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwIHN2ZyBjb250ZW50IHdpdGggb3V0ZXIgeG1sLlxyXG4gICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc3ZnLlxyXG4gICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBzdmcuXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCBUaGUgaW5uZXIgY29udGVudCBvZiB0aGUgc3ZnLlxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVYbWxEZWNsYXJhdGlvbiBJbmNsdWRlIGFuIHhtbCBkZWNsYXJhdGlvbiBhdCB0aGUgc3RhcnQgb2YgdGhlIGNvbnRlbnRcclxuICAgICAqIEByZXR1cm5zIFRoZSBTVkcgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbmRlcldyYXBwZXIod2lkdGgsIGhlaWdodCwgY29udGVudCwgaW5jbHVkZVhtbERlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSBgYDtcclxuICAgICAgICBpZiAoaW5jbHVkZVhtbERlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dCArPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPmA7XHJcbiAgICAgICAgdGV4dCArPSBjb250ZW50O1xyXG4gICAgICAgIHRleHQgKz0gYDwvc3ZnPmA7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIGFuIFNWRy5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIFNWRyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWQgPSB0aGlzLnJlbmRlckNvbnRlbnQoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKTtcclxuICAgICAgICByZXR1cm4gU3ZnUmVuZGVyZXIucmVuZGVyV3JhcHBlcihyZW5kZXJlZC53aWR0aCwgcmVuZGVyZWQuaGVpZ2h0LCByZW5kZXJlZC5jb250ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMucmVuZGVyQ29udGVudChjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHtyZW5kZXJlZC53aWR0aH1weGApO1xyXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7cmVuZGVyZWQuaGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQodGhpcy5fb3B0aW9ucy5jc3NDbGFzcyk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlubmVyLWh0bWxcclxuICAgICAgICBzdmcuaW5uZXJIVE1MID0gcmVuZGVyZWQuY29udGVudDtcclxuICAgICAgICByZXR1cm4gc3ZnO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIGludGVybmFsIGNvbnRlbnQgb2YgdGhlIHN2Zy5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiB0aGUgY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBzaXplIG9mIHRoZSBtYXJnaW4uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGltZW5zaW9uIGFuZCBjb250ZW50IG9mIHRoZSBzdmcuXHJcbiAgICAgKi9cclxuICAgIHJlbmRlckNvbnRlbnQoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoY2VsbERhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjZWxsRGF0YSBtdXN0IGJlIG9mIHR5cGUgUVJDZWxsRGF0YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIoY2VsbFNpemUpIHx8IGNlbGxTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2VsbFNpemUgbXVzdCBiZSBhIG51bWJlciA+IDAsIGl0IGlzICR7Y2VsbFNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKG1hcmdpblNpemUpIHx8IG1hcmdpblNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1hcmdpblNpemUgbXVzdCBiZSBhIG51bWJlciA+PSAwLCBpdCBpcyAke21hcmdpblNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjZWxsRGF0YS5sZW5ndGggKiBjZWxsU2l6ZSArICgyICogbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICBsZXQgZmlsbFJlZiA9IGBgO1xyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID09PSBcImxpbmVhclwiIHx8IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgPT09IFwicmFkaWFsXCIpIHtcclxuICAgICAgICAgICAgZmlsbFJlZiA9IFwidXJsKCNxcmZpbGwpXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxkZWZzPmA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID09PSBcImxpbmVhclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IHRoaXMucmVuZGVyTGluZWFyR3JhZGllbnQodGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kTGluZWFyLCBcInFyZmlsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gdGhpcy5yZW5kZXJSYWRpYWxHcmFkaWVudCh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRSYWRpYWwsIFwicXJmaWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gYDwvZGVmcz5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsbFJlZiA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZC5oZXgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiJHtkaW1lbnNpb25zfVwiIGhlaWdodD1cIiR7ZGltZW5zaW9uc31cIiBmaWxsPVwiJHt0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuaGV4KCl9XCIgLz5gO1xyXG4gICAgICAgIGxldCBwYXRoQ29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGFbeF1beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoQ29udGVudCArPSBgTSR7eCAqIGNlbGxTaXplICsgbWFyZ2luU2l6ZX0sJHt5ICogY2VsbFNpemUgKyBtYXJnaW5TaXplfSBoJHtjZWxsU2l6ZX0gdiR7Y2VsbFNpemV9IGgtJHtjZWxsU2l6ZX16IGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBgPHBhdGggZmlsbD1cIiR7ZmlsbFJlZn1cIiBkPVwiJHtwYXRoQ29udGVudC50cmltKCl9XCIvPmA7XHJcbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IGRpbWVuc2lvbnMsIGhlaWdodDogZGltZW5zaW9ucywgY29udGVudDogY29udGVudCB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR3JhZGllbnRTdG9wcyhzdG9wcykge1xyXG4gICAgICAgIGxldCByZW5kZXIgPSBgYDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlbmRlciArPSBgPHN0b3Agb2Zmc2V0PVwiJHtzdG9wc1tpXS5vZmZzZXRQZXJjZW50fSVcIiBzdG9wLWNvbG9yPVwiJHtzdG9wc1tpXS5jb2xvci5oZXgoKX1cIi8+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICAgIHJlbmRlckxpbmVhckdyYWRpZW50KGdyYWRpZW50LCBpZCkge1xyXG4gICAgICAgIGxldCByZW5kZXIgPSBgPGxpbmVhckdyYWRpZW50IGlkPVwiJHtpZH1cImA7XHJcbiAgICAgICAgaWYgKGdyYWRpZW50LmFuZ2xlKCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZW5kZXIgKz0gYCBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSgke2dyYWRpZW50LmFuZ2xlKCl9KVwiYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyICs9IGA+JHt0aGlzLnJlbmRlckdyYWRpZW50U3RvcHMoZ3JhZGllbnQuc3RvcHMoKSl9PC9saW5lYXJHcmFkaWVudD5gO1xyXG4gICAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSYWRpYWxHcmFkaWVudChncmFkaWVudCwgaWQpIHtcclxuICAgICAgICBsZXQgcmVuZGVyID0gYDxyYWRpYWxHcmFkaWVudCBpZD1cIiR7aWR9XCJgO1xyXG4gICAgICAgIGlmIChncmFkaWVudC5vZmZzZXRYUGVyY2VudCgpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVuZGVyICs9IGAgY3g9XCIke2dyYWRpZW50Lm9mZnNldFhQZXJjZW50KCl9JVwiYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyYWRpZW50Lm9mZnNldFlQZXJjZW50KCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZW5kZXIgKz0gYCBjeT1cIiR7Z3JhZGllbnQub2Zmc2V0WVBlcmNlbnQoKX0lXCJgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JhZGllbnQucmFkaXVzUGVyY2VudCgpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVuZGVyICs9IGAgcj1cIiR7Z3JhZGllbnQucmFkaXVzUGVyY2VudCgpfSVcImA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlciArPSBgPiR7dGhpcy5yZW5kZXJHcmFkaWVudFN0b3BzKGdyYWRpZW50LnN0b3BzKCkpfTwvcmFkaWFsR3JhZGllbnQ+YDtcclxuICAgICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3ZnUmVuZGVyZXIgPSBTdmdSZW5kZXJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNablVtVnVaR1Z5WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y21WdVpHVnlWSGx3WlhNdmMzWm5VbVZ1WkdWeVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHMUZRVUZuUlR0QlFVTm9SU3h4UmtGQmEwWTdRVUZEYkVZc2NVWkJRV3RHTzBGQlEyeEdMR3RHUVVFclJUdEJRVU12UlN4dlJrRkJhVVk3UVVGRGFrWXNiMFpCUVdsR08wRkJTMnBHT3p0SFFVVkhPMEZCUTBnc1RVRkJZU3hYUVVGWE8wbEJTWEJDT3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVDBGQk5FSTdVVUZEY0VNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFBRVUZQTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eEpRVUZKTEU5QlFVOHNRMEZCUXp0UlFVVjJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4TFFVRkxMRTlCUVU4N1dVRkRlRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRXRCUVVzc1VVRkJVVHRaUVVONlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRE0wTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXcwUkVGQk5FUXNRMEZCUXl4RFFVRkRPMU5CUTJwR08xRkJSVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1MwRkJTeXhQUVVGUExFVkJRVVU3V1VGRE1VTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWxCUVVrc1lVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTm9SaXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNZVUZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM1pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc09FTkJRVGhETEVOQlFVTXNRMEZCUXp0aFFVTnVSVHRUUVVOS08yRkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRGJFUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNLMEpCUVdNc1EwRkJReXhGUVVGRk8yZENRVU4wUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExEaEVRVUU0UkN4RFFVRkRMRU5CUVVNN1lVRkRia1k3VTBGRFNqdGhRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlEyeEVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMQ3RDUVVGakxFTkJRVU1zUlVGQlJUdG5Ra0ZEZEVVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRSRUZCT0VRc1EwRkJReXhEUVVGRE8yRkJRMjVHTzFOQlEwbzdVVUZGUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1NVRkJTU3hoUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJoR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZGQlFWRXNRMEZCUXp0UlFVVTFSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNZVUZCU3l4RFFVRkRMRVZCUVVVN1dVRkRka1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3NFEwRkJPRU1zUTBGQlF5eERRVUZETzFOQlEyNUZPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPenM3TzA5QlQwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRV0VzUlVGQlJTeE5RVUZqTEVWQlFVVXNUMEZCWlN4RlFVRkZMSEZDUVVFNFFqdFJRVU4wUnl4SlFVRkpMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFpDeEpRVUZKTEhGQ1FVRnhRaXhGUVVGRk8xbEJRM1pDTEVsQlFVa3NTVUZCU1N4MVEwRkJkVU1zUTBGQlF6dFRRVU51UkR0UlFVTkVMRWxCUVVrc1NVRkJTU3hsUVVGbExFdEJRVXNzWVVGQllTeE5RVUZOTEhWRFFVRjFReXhEUVVGRE8xRkJRM1pHTEVsQlFVa3NTVUZCU1N4UFFVRlBMRU5CUVVNN1VVRkRhRUlzU1VGQlNTeEpRVUZKTEZGQlFWRXNRMEZCUXp0UlFVTnFRaXhQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRnZRaXhGUVVGRkxGZEJRVzFDTEVOQlFVTXNSVUZCUlN4aFFVRnhRaXhGUVVGRk8xRkJRM1JHTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOd1JTeFBRVUZQTEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBZc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJiMElzUlVGQlJTeFhRVUZ0UWl4RFFVRkRMRVZCUVVVc1lVRkJjVUlzUlVGQlJUdFJRVU4yUml4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmNFVXNUVUZCVFN4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5dzBRa0ZCTkVJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU14UlN4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRia1FzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXhReXg1UTBGQmVVTTdVVUZEZWtNc1IwRkJSeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUldwRExFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEyWXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxHRkJRV0VzUTBGQlF5eFJRVUZ4UWl4RlFVRkZMRkZCUVdkQ0xFVkJRVVVzVlVGQmEwSTdVVUZETlVVc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2VVTkJRWGxETEVOQlFVTXNRMEZCUXp0VFFVTTVSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTI1RUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNORU5CUVRSRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZETTBVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjBSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEN0RFFVRXJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyaEdPMUZCUlVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRWxCUVVrc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZxUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eExRVUZMTEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZEZUVZc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGQlF6dFpRVU42UWl4UFFVRlBMRWxCUVVrc1VVRkJVU3hEUVVGRE8xbEJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTXpReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEYkVZN2FVSkJRVTA3WjBKQlEwZ3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRMnhHTzFsQlEwUXNUMEZCVHl4SlFVRkpMRk5CUVZNc1EwRkJRenRUUVVONFFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUXpWRE8xRkJSVVFzVDBGQlR5eEpRVUZKTERSQ1FVRTBRaXhWUVVGVkxHRkJRV0VzVlVGQlZTeFhRVUZYTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTTdVVUZEZUVnc1NVRkJTU3hYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzSkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzUkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEYUVJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNSMEZCUnl4VlFVRlZMRWxCUVVrc1EwRkJReXhIUVVGSExGRkJRVkVzUjBGQlJ5eFZRVUZWTEV0QlFVc3NVVUZCVVN4TFFVRkxMRkZCUVZFc1RVRkJUU3hSUVVGUkxFbEJRVWtzUTBGQlF6dHBRa0ZEZWtnN1lVRkRTanRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEdWQlFXVXNUMEZCVHl4UlFVRlJMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETzFGQlEycEZMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEzWkZMRU5CUVVNN1NVRkZUeXh0UWtGQmJVSXNRMEZCUXl4TFFVRm5SRHRSUVVONFJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRia01zVFVGQlRTeEpRVUZKTEdsQ1FVRnBRaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4clFrRkJhMElzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETzFOQlEyaEhPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVlBMRzlDUVVGdlFpeERRVUZETEZGQlFYZENMRVZCUVVVc1JVRkJWVHRSUVVNM1JDeEpRVUZKTEUxQlFVMHNSMEZCUnl4MVFrRkJkVUlzUlVGQlJTeEhRVUZITEVOQlFVTTdVVUZETVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTdzRRa0ZCT0VJc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTTdVMEZEYUVVN1VVRkRSQ3hOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRzFDUVVGdFFpeERRVUZETzFGQlF6VkZMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGVHl4dlFrRkJiMElzUTBGQlF5eFJRVUYzUWl4RlFVRkZMRVZCUVZVN1VVRkROMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NkVUpCUVhWQ0xFVkJRVVVzUjBGQlJ5eERRVUZETzFGQlF6RkRMRWxCUVVrc1VVRkJVU3hEUVVGRExHTkJRV01zUlVGQlJTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjZReXhOUVVGTkxFbEJRVWtzVVVGQlVTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJRenRUUVVOdVJEdFJRVU5FTEVsQlFVa3NVVUZCVVN4RFFVRkRMR05CUVdNc1JVRkJSU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU42UXl4TlFVRk5MRWxCUVVrc1VVRkJVU3hSUVVGUkxFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXp0VFFVTnVSRHRSUVVORUxFbEJRVWtzVVVGQlVTeERRVUZETEdGQlFXRXNSVUZCUlN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONFF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4UlFVRlJMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUTBGQlF6dFRRVU5xUkR0UlFVTkVMRTFCUVUwc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03VVVGRE5VVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dERRVU5LTzBGQk4wdEVMR3REUVRaTFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBTdmcgcmVuZGVyZXIuXHJcbiAqL1xyXG5jbGFzcyBTdmdSZW5kZXJlck9wdGlvbnMge1xyXG59XHJcbmV4cG9ydHMuU3ZnUmVuZGVyZXJPcHRpb25zID0gU3ZnUmVuZGVyZXJPcHRpb25zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1puVW1WdVpHVnlaWEpQY0hScGIyNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzSmxibVJsY2xSNWNHVnpMM04yWjFKbGJtUmxjbVZ5VDNCMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlNVRTdPMGRCUlVjN1FVRkRTQ3hOUVVGaExHdENRVUZyUWp0RFFUQkNPVUk3UVVFeFFrUXNaMFJCTUVKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVuZGVyIHFyIGRhdGEgYXMgdDN4dC5cclxuICovXHJcbmNsYXNzIFRleHRSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBUZXh0IHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMub25DaGFyID0gdGhpcy5fb3B0aW9ucy5vbkNoYXIgfHwgXCLilojilohcIjtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLm9mZkNoYXIgPSB0aGlzLl9vcHRpb25zLm9mZkNoYXIgfHwgXCIgIFwiO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItdGV4dFwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIFFSIGNvZGUgZGF0YSBhcyB0ZXh0LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgZm9yIHRoZSBRUiBjb2RlLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gdG8ga2VlcCBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdGV4dCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gMSwgbWFyZ2luU2l6ZSA9IDIpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWFyZ2luU2l6ZTsgbSsrKSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYCR7dGhpcy5fb3B0aW9ucy5vZmZDaGFyLnJlcGVhdChjZWxsU2l6ZSAqIGNlbGxEYXRhLmxlbmd0aCl9XFxyXFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuX29wdGlvbnMub2ZmQ2hhci5yZXBlYXQobWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2VsbERhdGFbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsRGF0YVt5XVt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gdGhpcy5fb3B0aW9ucy5vbkNoYXIucmVwZWF0KGNlbGxTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gdGhpcy5fb3B0aW9ucy5vZmZDaGFyLnJlcGVhdChjZWxsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluZSArPSB0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KG1hcmdpblNpemUpO1xyXG4gICAgICAgICAgICBsaW5lICs9IFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbFNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbWFyZ2luU2l6ZTsgbSsrKSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYCR7dGhpcy5fb3B0aW9ucy5vZmZDaGFyLnJlcGVhdChjZWxsU2l6ZSAqIGNlbGxEYXRhLmxlbmd0aCl9XFxyXFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSAxLCBtYXJnaW5TaXplID0gMikge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMucmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5uZXItaHRtbFxyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSByYXcucmVwbGFjZSgvXFxyL2csIFwiXCIpLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpLnJlcGxhY2UoLyAvZywgXCImbmJzcDtcIik7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRleHRSZW5kZXJlciA9IFRleHRSZW5kZXJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRGSmxibVJsY21WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwzUmxlSFJTWlc1a1pYSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhMFpCUVN0Rk8wRkJReTlGTEc5R1FVRnBSanRCUVV0cVJqczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVseVFqczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFOUJRVFpDTzFGQlEzSkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVDBGQlR5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTTdVVUZEY0VRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETzFGQlEzUkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hKUVVGSkxGTkJRVk1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRnZRaXhGUVVGRkxGZEJRVzFDTEVOQlFVTXNSVUZCUlN4aFFVRnhRaXhEUVVGRE8xRkJRM0pHTEVsQlFVa3NRMEZCUXl4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhsRFFVRjVReXhEUVVGRExFTkJRVU03VTBGRE9VUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU51UkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExEUkRRVUUwUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRek5GTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGRFUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXdyUTBGQkswTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVVZFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRUUVVNM1JUdFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM1JETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOd1JDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtNc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRMmhDTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2FVSkJRMnBFTzNGQ1FVRk5PMjlDUVVOSUxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdhVUpCUTJ4RU8yRkJRMG83V1VGRFJDeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMWxCUTJwRUxFbEJRVWtzU1VGQlNTeE5RVUZOTEVOQlFVTTdXVUZGWml4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU12UWl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRE8yRkJRMmhDTzFOQlEwbzdVVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMnBETEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZETjBVN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRnZRaXhGUVVGRkxGZEJRVzFDTEVOQlFVTXNSVUZCUlN4aFFVRnhRaXhEUVVGRE8xRkJRM1JHTEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJSV3BGTEUxQlFVMHNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4NVEwRkJlVU03VVVGRGVrTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZGtZc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUUzUlVRc2IwTkJOa1ZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIFRleHQgcmVuZGVyZXIuXHJcbiAqL1xyXG5jbGFzcyBUZXh0UmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLlRleHRSZW5kZXJlck9wdGlvbnMgPSBUZXh0UmVuZGVyZXJPcHRpb25zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEZKbGJtUmxjbVZ5VDNCMGFXOXVjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXlaVzVrWlhKVWVYQmxjeTkwWlhoMFVtVnVaR1Z5WlhKUGNIUnBiMjV6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNiVUpCUVcxQ08wTkJZUzlDTzBGQllrUXNhMFJCWVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB6bGliX2RlZmxhdGUgPSByZXF1aXJlKCcuL3psaWIvZGVmbGF0ZScpO1xudmFyIHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvY29tbW9uJyk7XG52YXIgc3RyaW5ncyAgICAgID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmdzJyk7XG52YXIgbXNnICAgICAgICAgID0gcmVxdWlyZSgnLi96bGliL21lc3NhZ2VzJyk7XG52YXIgWlN0cmVhbSAgICAgID0gcmVxdWlyZSgnLi96bGliL3pzdHJlYW0nKTtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbnZhciBaX05PX0ZMVVNIICAgICAgPSAwO1xudmFyIFpfRklOSVNIICAgICAgICA9IDQ7XG5cbnZhciBaX09LICAgICAgICAgICAgPSAwO1xudmFyIFpfU1RSRUFNX0VORCAgICA9IDE7XG52YXIgWl9TWU5DX0ZMVVNIICAgID0gMjtcblxudmFyIFpfREVGQVVMVF9DT01QUkVTU0lPTiA9IC0xO1xuXG52YXIgWl9ERUZBVUxUX1NUUkFURUdZICAgID0gMDtcblxudmFyIFpfREVGTEFURUQgID0gODtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKipcbiAqIGNsYXNzIERlZmxhdGVcbiAqXG4gKiBHZW5lcmljIEpTLXN0eWxlIHdyYXBwZXIgZm9yIHpsaWIgY2FsbHMuIElmIHlvdSBkb24ndCBuZWVkXG4gKiBzdHJlYW1pbmcgYmVoYXZpb3VyIC0gdXNlIG1vcmUgc2ltcGxlIGZ1bmN0aW9uczogW1tkZWZsYXRlXV0sXG4gKiBbW2RlZmxhdGVSYXddXSBhbmQgW1tnemlwXV0uXG4gKiovXG5cbi8qIGludGVybmFsXG4gKiBEZWZsYXRlLmNodW5rcyAtPiBBcnJheVxuICpcbiAqIENodW5rcyBvZiBvdXRwdXQgZGF0YSwgaWYgW1tEZWZsYXRlI29uRGF0YV1dIG5vdCBvdmVycmlkZGVuLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUucmVzdWx0IC0+IFVpbnQ4QXJyYXl8QXJyYXlcbiAqXG4gKiBDb21wcmVzc2VkIHJlc3VsdCwgZ2VuZXJhdGVkIGJ5IGRlZmF1bHQgW1tEZWZsYXRlI29uRGF0YV1dXG4gKiBhbmQgW1tEZWZsYXRlI29uRW5kXV0gaGFuZGxlcnMuIEZpbGxlZCBhZnRlciB5b3UgcHVzaCBsYXN0IGNodW5rXG4gKiAoY2FsbCBbW0RlZmxhdGUjcHVzaF1dIHdpdGggYFpfRklOSVNIYCAvIGB0cnVlYCBwYXJhbSkgIG9yIGlmIHlvdVxuICogcHVzaCBhIGNodW5rIHdpdGggZXhwbGljaXQgZmx1c2ggKGNhbGwgW1tEZWZsYXRlI3B1c2hdXSB3aXRoXG4gKiBgWl9TWU5DX0ZMVVNIYCBwYXJhbSkuXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5lcnIgLT4gTnVtYmVyXG4gKlxuICogRXJyb3IgY29kZSBhZnRlciBkZWZsYXRlIGZpbmlzaGVkLiAwIChaX09LKSBvbiBzdWNjZXNzLlxuICogWW91IHdpbGwgbm90IG5lZWQgaXQgaW4gcmVhbCBsaWZlLCBiZWNhdXNlIGRlZmxhdGUgZXJyb3JzXG4gKiBhcmUgcG9zc2libGUgb25seSBvbiB3cm9uZyBvcHRpb25zIG9yIGJhZCBgb25EYXRhYCAvIGBvbkVuZGBcbiAqIGN1c3RvbSBoYW5kbGVycy5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLm1zZyAtPiBTdHJpbmdcbiAqXG4gKiBFcnJvciBtZXNzYWdlLCBpZiBbW0RlZmxhdGUuZXJyXV0gIT0gMFxuICoqL1xuXG5cbi8qKlxuICogbmV3IERlZmxhdGUob3B0aW9ucylcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogQ3JlYXRlcyBuZXcgZGVmbGF0b3IgaW5zdGFuY2Ugd2l0aCBzcGVjaWZpZWQgcGFyYW1zLiBUaHJvd3MgZXhjZXB0aW9uXG4gKiBvbiBiYWQgcGFyYW1zLiBTdXBwb3J0ZWQgb3B0aW9uczpcbiAqXG4gKiAtIGBsZXZlbGBcbiAqIC0gYHdpbmRvd0JpdHNgXG4gKiAtIGBtZW1MZXZlbGBcbiAqIC0gYHN0cmF0ZWd5YFxuICogLSBgZGljdGlvbmFyeWBcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGVzZS5cbiAqXG4gKiBBZGRpdGlvbmFsIG9wdGlvbnMsIGZvciBpbnRlcm5hbCBuZWVkczpcbiAqXG4gKiAtIGBjaHVua1NpemVgIC0gc2l6ZSBvZiBnZW5lcmF0ZWQgZGF0YSBjaHVua3MgKDE2SyBieSBkZWZhdWx0KVxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBkbyByYXcgZGVmbGF0ZVxuICogLSBgZ3ppcGAgKEJvb2xlYW4pIC0gY3JlYXRlIGd6aXAgd3JhcHBlclxuICogLSBgdG9gIChTdHJpbmcpIC0gaWYgZXF1YWwgdG8gJ3N0cmluZycsIHRoZW4gcmVzdWx0IHdpbGwgYmUgXCJiaW5hcnkgc3RyaW5nXCJcbiAqICAgIChlYWNoIGNoYXIgY29kZSBbMC4uMjU1XSlcbiAqIC0gYGhlYWRlcmAgKE9iamVjdCkgLSBjdXN0b20gaGVhZGVyIGZvciBnemlwXG4gKiAgIC0gYHRleHRgIChCb29sZWFuKSAtIHRydWUgaWYgY29tcHJlc3NlZCBkYXRhIGJlbGlldmVkIHRvIGJlIHRleHRcbiAqICAgLSBgdGltZWAgKE51bWJlcikgLSBtb2RpZmljYXRpb24gdGltZSwgdW5peCB0aW1lc3RhbXBcbiAqICAgLSBgb3NgIChOdW1iZXIpIC0gb3BlcmF0aW9uIHN5c3RlbSBjb2RlXG4gKiAgIC0gYGV4dHJhYCAoQXJyYXkpIC0gYXJyYXkgb2YgYnl0ZXMgd2l0aCBleHRyYSBkYXRhIChtYXggNjU1MzYpXG4gKiAgIC0gYG5hbWVgIChTdHJpbmcpIC0gZmlsZSBuYW1lIChiaW5hcnkgc3RyaW5nKVxuICogICAtIGBjb21tZW50YCAoU3RyaW5nKSAtIGNvbW1lbnQgKGJpbmFyeSBzdHJpbmcpXG4gKiAgIC0gYGhjcmNgIChCb29sZWFuKSAtIHRydWUgaWYgaGVhZGVyIGNyYyBzaG91bGQgYmUgYWRkZWRcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgY2h1bmsxID0gVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogICAsIGNodW5rMiA9IFVpbnQ4QXJyYXkoWzEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5XSk7XG4gKlxuICogdmFyIGRlZmxhdGUgPSBuZXcgcGFrby5EZWZsYXRlKHsgbGV2ZWw6IDN9KTtcbiAqXG4gKiBkZWZsYXRlLnB1c2goY2h1bmsxLCBmYWxzZSk7XG4gKiBkZWZsYXRlLnB1c2goY2h1bmsyLCB0cnVlKTsgIC8vIHRydWUgLT4gbGFzdCBjaHVua1xuICpcbiAqIGlmIChkZWZsYXRlLmVycikgeyB0aHJvdyBuZXcgRXJyb3IoZGVmbGF0ZS5lcnIpOyB9XG4gKlxuICogY29uc29sZS5sb2coZGVmbGF0ZS5yZXN1bHQpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBEZWZsYXRlKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIERlZmxhdGUpKSByZXR1cm4gbmV3IERlZmxhdGUob3B0aW9ucyk7XG5cbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuYXNzaWduKHtcbiAgICBsZXZlbDogWl9ERUZBVUxUX0NPTVBSRVNTSU9OLFxuICAgIG1ldGhvZDogWl9ERUZMQVRFRCxcbiAgICBjaHVua1NpemU6IDE2Mzg0LFxuICAgIHdpbmRvd0JpdHM6IDE1LFxuICAgIG1lbUxldmVsOiA4LFxuICAgIHN0cmF0ZWd5OiBaX0RFRkFVTFRfU1RSQVRFR1ksXG4gICAgdG86ICcnXG4gIH0sIG9wdGlvbnMgfHwge30pO1xuXG4gIHZhciBvcHQgPSB0aGlzLm9wdGlvbnM7XG5cbiAgaWYgKG9wdC5yYXcgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkpIHtcbiAgICBvcHQud2luZG93Qml0cyA9IC1vcHQud2luZG93Qml0cztcbiAgfVxuXG4gIGVsc2UgaWYgKG9wdC5nemlwICYmIChvcHQud2luZG93Qml0cyA+IDApICYmIChvcHQud2luZG93Qml0cyA8IDE2KSkge1xuICAgIG9wdC53aW5kb3dCaXRzICs9IDE2O1xuICB9XG5cbiAgdGhpcy5lcnIgICAgPSAwOyAgICAgIC8vIGVycm9yIGNvZGUsIGlmIGhhcHBlbnMgKDAgPSBaX09LKVxuICB0aGlzLm1zZyAgICA9ICcnOyAgICAgLy8gZXJyb3IgbWVzc2FnZVxuICB0aGlzLmVuZGVkICA9IGZhbHNlOyAgLy8gdXNlZCB0byBhdm9pZCBtdWx0aXBsZSBvbkVuZCgpIGNhbGxzXG4gIHRoaXMuY2h1bmtzID0gW107ICAgICAvLyBjaHVua3Mgb2YgY29tcHJlc3NlZCBkYXRhXG5cbiAgdGhpcy5zdHJtID0gbmV3IFpTdHJlYW0oKTtcbiAgdGhpcy5zdHJtLmF2YWlsX291dCA9IDA7XG5cbiAgdmFyIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlSW5pdDIoXG4gICAgdGhpcy5zdHJtLFxuICAgIG9wdC5sZXZlbCxcbiAgICBvcHQubWV0aG9kLFxuICAgIG9wdC53aW5kb3dCaXRzLFxuICAgIG9wdC5tZW1MZXZlbCxcbiAgICBvcHQuc3RyYXRlZ3lcbiAgKTtcblxuICBpZiAoc3RhdHVzICE9PSBaX09LKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgfVxuXG4gIGlmIChvcHQuaGVhZGVyKSB7XG4gICAgemxpYl9kZWZsYXRlLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLCBvcHQuaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChvcHQuZGljdGlvbmFyeSkge1xuICAgIHZhciBkaWN0O1xuICAgIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIG9wdC5kaWN0aW9uYXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gSWYgd2UgbmVlZCB0byBjb21wcmVzcyB0ZXh0LCBjaGFuZ2UgZW5jb2RpbmcgdG8gdXRmOC5cbiAgICAgIGRpY3QgPSBzdHJpbmdzLnN0cmluZzJidWYob3B0LmRpY3Rpb25hcnkpO1xuICAgIH0gZWxzZSBpZiAodG9TdHJpbmcuY2FsbChvcHQuZGljdGlvbmFyeSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIGRpY3QgPSBuZXcgVWludDhBcnJheShvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpY3QgPSBvcHQuZGljdGlvbmFyeTtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLCBkaWN0KTtcblxuICAgIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGljdF9zZXQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRGVmbGF0ZSNwdXNoKGRhdGFbLCBtb2RlXSkgLT4gQm9vbGVhblxuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fEFycmF5QnVmZmVyfFN0cmluZyk6IGlucHV0IGRhdGEuIFN0cmluZ3Mgd2lsbCBiZVxuICogICBjb252ZXJ0ZWQgdG8gdXRmOCBieXRlIHNlcXVlbmNlLlxuICogLSBtb2RlIChOdW1iZXJ8Qm9vbGVhbik6IDAuLjYgZm9yIGNvcnJlc3BvbmRpbmcgWl9OT19GTFVTSC4uWl9UUkVFIG1vZGVzLlxuICogICBTZWUgY29uc3RhbnRzLiBTa2lwcGVkIG9yIGBmYWxzZWAgbWVhbnMgWl9OT19GTFVTSCwgYHRydWVgIG1lYW5zIFpfRklOSVNILlxuICpcbiAqIFNlbmRzIGlucHV0IGRhdGEgdG8gZGVmbGF0ZSBwaXBlLCBnZW5lcmF0aW5nIFtbRGVmbGF0ZSNvbkRhdGFdXSBjYWxscyB3aXRoXG4gKiBuZXcgY29tcHJlc3NlZCBjaHVua3MuIFJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3MuIFRoZSBsYXN0IGRhdGEgYmxvY2sgbXVzdCBoYXZlXG4gKiBtb2RlIFpfRklOSVNIIChvciBgdHJ1ZWApLiBUaGF0IHdpbGwgZmx1c2ggaW50ZXJuYWwgcGVuZGluZyBidWZmZXJzIGFuZCBjYWxsXG4gKiBbW0RlZmxhdGUjb25FbmRdXS4gRm9yIGludGVyaW0gZXhwbGljaXQgZmx1c2hlcyAod2l0aG91dCBlbmRpbmcgdGhlIHN0cmVhbSkgeW91XG4gKiBjYW4gdXNlIG1vZGUgWl9TWU5DX0ZMVVNILCBrZWVwaW5nIHRoZSBjb21wcmVzc2lvbiBjb250ZXh0LlxuICpcbiAqIE9uIGZhaWwgY2FsbCBbW0RlZmxhdGUjb25FbmRdXSB3aXRoIGVycm9yIGNvZGUgYW5kIHJldHVybiBmYWxzZS5cbiAqXG4gKiBXZSBzdHJvbmdseSByZWNvbW1lbmQgdG8gdXNlIGBVaW50OEFycmF5YCBvbiBpbnB1dCBmb3IgYmVzdCBzcGVlZCAob3V0cHV0XG4gKiBhcnJheSBmb3JtYXQgaXMgZGV0ZWN0ZWQgYXV0b21hdGljYWxseSkuIEFsc28sIGRvbid0IHNraXAgbGFzdCBwYXJhbSBhbmQgYWx3YXlzXG4gKiB1c2UgdGhlIHNhbWUgdHlwZSBpbiB5b3VyIGNvZGUgKGJvb2xlYW4gb3IgbnVtYmVyKS4gVGhhdCB3aWxsIGltcHJvdmUgSlMgc3BlZWQuXG4gKlxuICogRm9yIHJlZ3VsYXIgYEFycmF5YC1zIG1ha2Ugc3VyZSBhbGwgZWxlbWVudHMgYXJlIFswLi4yNTVdLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwdXNoKGNodW5rLCBmYWxzZSk7IC8vIHB1c2ggb25lIG9mIGRhdGEgY2h1bmtzXG4gKiAuLi5cbiAqIHB1c2goY2h1bmssIHRydWUpOyAgLy8gcHVzaCBsYXN0IGNodW5rXG4gKiBgYGBcbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSkge1xuICB2YXIgc3RybSA9IHRoaXMuc3RybTtcbiAgdmFyIGNodW5rU2l6ZSA9IHRoaXMub3B0aW9ucy5jaHVua1NpemU7XG4gIHZhciBzdGF0dXMsIF9tb2RlO1xuXG4gIGlmICh0aGlzLmVuZGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIF9tb2RlID0gKG1vZGUgPT09IH5+bW9kZSkgPyBtb2RlIDogKChtb2RlID09PSB0cnVlKSA/IFpfRklOSVNIIDogWl9OT19GTFVTSCk7XG5cbiAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgd2UgbmVlZCB0byBjb21wcmVzcyB0ZXh0LCBjaGFuZ2UgZW5jb2RpbmcgdG8gdXRmOC5cbiAgICBzdHJtLmlucHV0ID0gc3RyaW5ncy5zdHJpbmcyYnVmKGRhdGEpO1xuICB9IGVsc2UgaWYgKHRvU3RyaW5nLmNhbGwoZGF0YSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICBzdHJtLmlucHV0ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgc3RybS5pbnB1dCA9IGRhdGE7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmF2YWlsX2luID0gc3RybS5pbnB1dC5sZW5ndGg7XG5cbiAgZG8ge1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgc3RybS5vdXRwdXQgPSBuZXcgdXRpbHMuQnVmOChjaHVua1NpemUpO1xuICAgICAgc3RybS5uZXh0X291dCA9IDA7XG4gICAgICBzdHJtLmF2YWlsX291dCA9IGNodW5rU2l6ZTtcbiAgICB9XG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGUoc3RybSwgX21vZGUpOyAgICAvKiBubyBiYWQgcmV0dXJuIHZhbHVlICovXG5cbiAgICBpZiAoc3RhdHVzICE9PSBaX1NUUkVBTV9FTkQgJiYgc3RhdHVzICE9PSBaX09LKSB7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwIHx8IChzdHJtLmF2YWlsX2luID09PSAwICYmIChfbW9kZSA9PT0gWl9GSU5JU0ggfHwgX21vZGUgPT09IFpfU1lOQ19GTFVTSCkpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLm9uRGF0YShzdHJpbmdzLmJ1ZjJiaW5zdHJpbmcodXRpbHMuc2hyaW5rQnVmKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkRhdGEodXRpbHMuc2hyaW5rQnVmKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlICgoc3RybS5hdmFpbF9pbiA+IDAgfHwgc3RybS5hdmFpbF9vdXQgPT09IDApICYmIHN0YXR1cyAhPT0gWl9TVFJFQU1fRU5EKTtcblxuICAvLyBGaW5hbGl6ZSBvbiB0aGUgbGFzdCBjaHVuay5cbiAgaWYgKF9tb2RlID09PSBaX0ZJTklTSCkge1xuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlRW5kKHRoaXMuc3RybSk7XG4gICAgdGhpcy5vbkVuZChzdGF0dXMpO1xuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgIHJldHVybiBzdGF0dXMgPT09IFpfT0s7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpbnRlcmltIHJlc3VsdHMgaWYgWl9TWU5DX0ZMVVNILlxuICBpZiAoX21vZGUgPT09IFpfU1lOQ19GTFVTSCkge1xuICAgIHRoaXMub25FbmQoWl9PSyk7XG4gICAgc3RybS5hdmFpbF9vdXQgPSAwO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKlxuICogRGVmbGF0ZSNvbkRhdGEoY2h1bmspIC0+IFZvaWRcbiAqIC0gY2h1bmsgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogb3V0cHV0IGRhdGEuIFR5cGUgb2YgYXJyYXkgZGVwZW5kc1xuICogICBvbiBqcyBlbmdpbmUgc3VwcG9ydC4gV2hlbiBzdHJpbmcgb3V0cHV0IHJlcXVlc3RlZCwgZWFjaCBjaHVua1xuICogICB3aWxsIGJlIHN0cmluZy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBzdG9yZXMgZGF0YSBibG9ja3MgaW4gYGNodW5rc1tdYCBwcm9wZXJ0eSBhbmQgZ2x1ZVxuICogdGhvc2UgaW4gYG9uRW5kYC4gT3ZlcnJpZGUgdGhpcyBoYW5kbGVyLCBpZiB5b3UgbmVlZCBhbm90aGVyIGJlaGF2aW91ci5cbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB0aGlzLmNodW5rcy5wdXNoKGNodW5rKTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRW5kKHN0YXR1cykgLT4gVm9pZFxuICogLSBzdGF0dXMgKE51bWJlcik6IGRlZmxhdGUgc3RhdHVzLiAwIChaX09LKSBvbiBzdWNjZXNzLFxuICogICBvdGhlciBpZiBub3QuXG4gKlxuICogQ2FsbGVkIG9uY2UgYWZ0ZXIgeW91IHRlbGwgZGVmbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkgb3Igc2hvdWxkIGJlIGZsdXNoZWQgKFpfU1lOQ19GTFVTSClcbiAqIG9yIGlmIGFuIGVycm9yIGhhcHBlbmVkLiBCeSBkZWZhdWx0IC0gam9pbiBjb2xsZWN0ZWQgY2h1bmtzLFxuICogZnJlZSBtZW1vcnkgYW5kIGZpbGwgYHJlc3VsdHNgIC8gYGVycmAgcHJvcGVydGllcy5cbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAvLyBPbiBzdWNjZXNzIC0gam9pblxuICBpZiAoc3RhdHVzID09PSBaX09LKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5jaHVua3Muam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gdXRpbHMuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcyk7XG4gICAgfVxuICB9XG4gIHRoaXMuY2h1bmtzID0gW107XG4gIHRoaXMuZXJyID0gc3RhdHVzO1xuICB0aGlzLm1zZyA9IHRoaXMuc3RybS5tc2c7XG59O1xuXG5cbi8qKlxuICogZGVmbGF0ZShkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogQ29tcHJlc3MgYGRhdGFgIHdpdGggZGVmbGF0ZSBhbGdvcml0aG0gYW5kIGBvcHRpb25zYC5cbiAqXG4gKiBTdXBwb3J0ZWQgb3B0aW9ucyBhcmU6XG4gKlxuICogLSBsZXZlbFxuICogLSB3aW5kb3dCaXRzXG4gKiAtIG1lbUxldmVsXG4gKiAtIHN0cmF0ZWd5XG4gKiAtIGRpY3Rpb25hcnlcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGVzZS5cbiAqXG4gKiBTdWdhciAob3B0aW9ucyk6XG4gKlxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBzYXkgdGhhdCB3ZSB3b3JrIHdpdGggcmF3IHN0cmVhbSwgaWYgeW91IGRvbid0IHdpc2ggdG8gc3BlY2lmeVxuICogICBuZWdhdGl2ZSB3aW5kb3dCaXRzIGltcGxpY2l0bHkuXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBcImJpbmFyeSBzdHJpbmdcIlxuICogICAgKGVhY2ggY2hhciBjb2RlIFswLi4yNTVdKVxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBkYXRhID0gVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwYWtvLmRlZmxhdGUoZGF0YSkpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBkZWZsYXRvciA9IG5ldyBEZWZsYXRlKG9wdGlvbnMpO1xuXG4gIGRlZmxhdG9yLnB1c2goaW5wdXQsIHRydWUpO1xuXG4gIC8vIFRoYXQgd2lsbCBuZXZlciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3QgY2hlYXQgd2l0aCBvcHRpb25zIDopXG4gIGlmIChkZWZsYXRvci5lcnIpIHsgdGhyb3cgZGVmbGF0b3IubXNnIHx8IG1zZ1tkZWZsYXRvci5lcnJdOyB9XG5cbiAgcmV0dXJuIGRlZmxhdG9yLnJlc3VsdDtcbn1cblxuXG4vKipcbiAqIGRlZmxhdGVSYXcoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbZGVmbGF0ZV1dLCBidXQgY3JlYXRlcyByYXcgZGF0YSwgd2l0aG91dCB3cmFwcGVyXG4gKiAoaGVhZGVyIGFuZCBhZGxlcjMyIGNyYykuXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlUmF3KGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnJhdyA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG4vKipcbiAqIGd6aXAoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbZGVmbGF0ZV1dLCBidXQgY3JlYXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkIG9mXG4gKiBkZWZsYXRlIG9uZS5cbiAqKi9cbmZ1bmN0aW9uIGd6aXAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuZ3ppcCA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG5leHBvcnRzLkRlZmxhdGUgPSBEZWZsYXRlO1xuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZVJhdyA9IGRlZmxhdGVSYXc7XG5leHBvcnRzLmd6aXAgPSBnemlwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBUWVBFRF9PSyA9ICAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgICAgICh0eXBlb2YgVWludDE2QXJyYXkgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgICAgICh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5mdW5jdGlvbiBfaGFzKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnRzLmFzc2lnbiA9IGZ1bmN0aW9uIChvYmogLypmcm9tMSwgZnJvbTIsIGZyb20zLCAuLi4qLykge1xuICB2YXIgc291cmNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHdoaWxlIChzb3VyY2VzLmxlbmd0aCkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKCFzb3VyY2UpIHsgY29udGludWU7IH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzb3VyY2UgKyAnbXVzdCBiZSBub24tb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcCBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChfaGFzKHNvdXJjZSwgcCkpIHtcbiAgICAgICAgb2JqW3BdID0gc291cmNlW3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vIHJlZHVjZSBidWZmZXIgc2l6ZSwgYXZvaWRpbmcgbWVtIGNvcHlcbmV4cG9ydHMuc2hyaW5rQnVmID0gZnVuY3Rpb24gKGJ1Ziwgc2l6ZSkge1xuICBpZiAoYnVmLmxlbmd0aCA9PT0gc2l6ZSkgeyByZXR1cm4gYnVmOyB9XG4gIGlmIChidWYuc3ViYXJyYXkpIHsgcmV0dXJuIGJ1Zi5zdWJhcnJheSgwLCBzaXplKTsgfVxuICBidWYubGVuZ3RoID0gc2l6ZTtcbiAgcmV0dXJuIGJ1Zjtcbn07XG5cblxudmFyIGZuVHlwZWQgPSB7XG4gIGFycmF5U2V0OiBmdW5jdGlvbiAoZGVzdCwgc3JjLCBzcmNfb2ZmcywgbGVuLCBkZXN0X29mZnMpIHtcbiAgICBpZiAoc3JjLnN1YmFycmF5ICYmIGRlc3Quc3ViYXJyYXkpIHtcbiAgICAgIGRlc3Quc2V0KHNyYy5zdWJhcnJheShzcmNfb2Zmcywgc3JjX29mZnMgKyBsZW4pLCBkZXN0X29mZnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGYWxsYmFjayB0byBvcmRpbmFyeSBhcnJheVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RbZGVzdF9vZmZzICsgaV0gPSBzcmNbc3JjX29mZnMgKyBpXTtcbiAgICB9XG4gIH0sXG4gIC8vIEpvaW4gYXJyYXkgb2YgY2h1bmtzIHRvIHNpbmdsZSBhcnJheS5cbiAgZmxhdHRlbkNodW5rczogZnVuY3Rpb24gKGNodW5rcykge1xuICAgIHZhciBpLCBsLCBsZW4sIHBvcywgY2h1bmssIHJlc3VsdDtcblxuICAgIC8vIGNhbGN1bGF0ZSBkYXRhIGxlbmd0aFxuICAgIGxlbiA9IDA7XG4gICAgZm9yIChpID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxlbiArPSBjaHVua3NbaV0ubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIGpvaW4gY2h1bmtzXG4gICAgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICBwb3MgPSAwO1xuICAgIGZvciAoaSA9IDAsIGwgPSBjaHVua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaHVuayA9IGNodW5rc1tpXTtcbiAgICAgIHJlc3VsdC5zZXQoY2h1bmssIHBvcyk7XG4gICAgICBwb3MgKz0gY2h1bmsubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbnZhciBmblVudHlwZWQgPSB7XG4gIGFycmF5U2V0OiBmdW5jdGlvbiAoZGVzdCwgc3JjLCBzcmNfb2ZmcywgbGVuLCBkZXN0X29mZnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkZXN0W2Rlc3Rfb2ZmcyArIGldID0gc3JjW3NyY19vZmZzICsgaV07XG4gICAgfVxuICB9LFxuICAvLyBKb2luIGFycmF5IG9mIGNodW5rcyB0byBzaW5nbGUgYXJyYXkuXG4gIGZsYXR0ZW5DaHVua3M6IGZ1bmN0aW9uIChjaHVua3MpIHtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBjaHVua3MpO1xuICB9XG59O1xuXG5cbi8vIEVuYWJsZS9EaXNhYmxlIHR5cGVkIGFycmF5cyB1c2UsIGZvciB0ZXN0aW5nXG4vL1xuZXhwb3J0cy5zZXRUeXBlZCA9IGZ1bmN0aW9uIChvbikge1xuICBpZiAob24pIHtcbiAgICBleHBvcnRzLkJ1ZjggID0gVWludDhBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjE2ID0gVWludDE2QXJyYXk7XG4gICAgZXhwb3J0cy5CdWYzMiA9IEludDMyQXJyYXk7XG4gICAgZXhwb3J0cy5hc3NpZ24oZXhwb3J0cywgZm5UeXBlZCk7XG4gIH0gZWxzZSB7XG4gICAgZXhwb3J0cy5CdWY4ICA9IEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMTYgPSBBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjMyID0gQXJyYXk7XG4gICAgZXhwb3J0cy5hc3NpZ24oZXhwb3J0cywgZm5VbnR5cGVkKTtcbiAgfVxufTtcblxuZXhwb3J0cy5zZXRUeXBlZChUWVBFRF9PSyk7XG4iLCIvLyBTdHJpbmcgZW5jb2RlL2RlY29kZSBoZWxwZXJzXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9jb21tb24nKTtcblxuXG4vLyBRdWljayBjaGVjayBpZiB3ZSBjYW4gdXNlIGZhc3QgYXJyYXkgdG8gYmluIHN0cmluZyBjb252ZXJzaW9uXG4vL1xuLy8gLSBhcHBseShBcnJheSkgY2FuIGZhaWwgb24gQW5kcm9pZCAyLjJcbi8vIC0gYXBwbHkoVWludDhBcnJheSkgY2FuIGZhaWwgb24gaU9TIDUuMSBTYWZhcmlcbi8vXG52YXIgU1RSX0FQUExZX09LID0gdHJ1ZTtcbnZhciBTVFJfQVBQTFlfVUlBX09LID0gdHJ1ZTtcblxudHJ5IHsgU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBbIDAgXSk7IH0gY2F0Y2ggKF9fKSB7IFNUUl9BUFBMWV9PSyA9IGZhbHNlOyB9XG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KDEpKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX1VJQV9PSyA9IGZhbHNlOyB9XG5cblxuLy8gVGFibGUgd2l0aCB1dGY4IGxlbmd0aHMgKGNhbGN1bGF0ZWQgYnkgZmlyc3QgYnl0ZSBvZiBzZXF1ZW5jZSlcbi8vIE5vdGUsIHRoYXQgNSAmIDYtYnl0ZSB2YWx1ZXMgYW5kIHNvbWUgNC1ieXRlIHZhbHVlcyBjYW4gbm90IGJlIHJlcHJlc2VudGVkIGluIEpTLFxuLy8gYmVjYXVzZSBtYXggcG9zc2libGUgY29kZXBvaW50IGlzIDB4MTBmZmZmXG52YXIgX3V0ZjhsZW4gPSBuZXcgdXRpbHMuQnVmOCgyNTYpO1xuZm9yICh2YXIgcSA9IDA7IHEgPCAyNTY7IHErKykge1xuICBfdXRmOGxlbltxXSA9IChxID49IDI1MiA/IDYgOiBxID49IDI0OCA/IDUgOiBxID49IDI0MCA/IDQgOiBxID49IDIyNCA/IDMgOiBxID49IDE5MiA/IDIgOiAxKTtcbn1cbl91dGY4bGVuWzI1NF0gPSBfdXRmOGxlblsyNTRdID0gMTsgLy8gSW52YWxpZCBzZXF1ZW5jZSBzdGFydFxuXG5cbi8vIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5ICh0eXBlZCwgd2hlbiBwb3NzaWJsZSlcbmV4cG9ydHMuc3RyaW5nMmJ1ZiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGJ1ZiwgYywgYzIsIG1fcG9zLCBpLCBzdHJfbGVuID0gc3RyLmxlbmd0aCwgYnVmX2xlbiA9IDA7XG5cbiAgLy8gY291bnQgYmluYXJ5IHNpemVcbiAgZm9yIChtX3BvcyA9IDA7IG1fcG9zIDwgc3RyX2xlbjsgbV9wb3MrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChtX3Bvcyk7XG4gICAgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChtX3BvcyArIDEgPCBzdHJfbGVuKSkge1xuICAgICAgYzIgPSBzdHIuY2hhckNvZGVBdChtX3BvcyArIDEpO1xuICAgICAgaWYgKChjMiAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjID0gMHgxMDAwMCArICgoYyAtIDB4ZDgwMCkgPDwgMTApICsgKGMyIC0gMHhkYzAwKTtcbiAgICAgICAgbV9wb3MrKztcbiAgICAgIH1cbiAgICB9XG4gICAgYnVmX2xlbiArPSBjIDwgMHg4MCA/IDEgOiBjIDwgMHg4MDAgPyAyIDogYyA8IDB4MTAwMDAgPyAzIDogNDtcbiAgfVxuXG4gIC8vIGFsbG9jYXRlIGJ1ZmZlclxuICBidWYgPSBuZXcgdXRpbHMuQnVmOChidWZfbGVuKTtcblxuICAvLyBjb252ZXJ0XG4gIGZvciAoaSA9IDAsIG1fcG9zID0gMDsgaSA8IGJ1Zl9sZW47IG1fcG9zKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQobV9wb3MpO1xuICAgIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAobV9wb3MgKyAxIDwgc3RyX2xlbikpIHtcbiAgICAgIGMyID0gc3RyLmNoYXJDb2RlQXQobV9wb3MgKyAxKTtcbiAgICAgIGlmICgoYzIgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgLSAweGQ4MDApIDw8IDEwKSArIChjMiAtIDB4ZGMwMCk7XG4gICAgICAgIG1fcG9zKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgLyogb25lIGJ5dGUgKi9cbiAgICAgIGJ1ZltpKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgLyogdHdvIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4QzAgfCAoYyA+Pj4gNik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4MTAwMDApIHtcbiAgICAgIC8qIHRocmVlIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4RTAgfCAoYyA+Pj4gMTIpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDYgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGZvdXIgYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhmMCB8IChjID4+PiAxOCk7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gMTIgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiA2ICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWY7XG59O1xuXG4vLyBIZWxwZXIgKHVzZWQgaW4gMiBwbGFjZXMpXG5mdW5jdGlvbiBidWYyYmluc3RyaW5nKGJ1ZiwgbGVuKSB7XG4gIC8vIE9uIENocm9tZSwgdGhlIGFyZ3VtZW50cyBpbiBhIGZ1bmN0aW9uIGNhbGwgdGhhdCBhcmUgYWxsb3dlZCBpcyBgNjU1MzRgLlxuICAvLyBJZiB0aGUgbGVuZ3RoIG9mIHRoZSBidWZmZXIgaXMgc21hbGxlciB0aGFuIHRoYXQsIHdlIGNhbiB1c2UgdGhpcyBvcHRpbWl6YXRpb24sXG4gIC8vIG90aGVyd2lzZSB3ZSB3aWxsIHRha2UgYSBzbG93ZXIgcGF0aC5cbiAgaWYgKGxlbiA8IDY1NTM0KSB7XG4gICAgaWYgKChidWYuc3ViYXJyYXkgJiYgU1RSX0FQUExZX1VJQV9PSykgfHwgKCFidWYuc3ViYXJyYXkgJiYgU1RSX0FQUExZX09LKSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdXRpbHMuc2hyaW5rQnVmKGJ1ZiwgbGVuKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8vIENvbnZlcnQgYnl0ZSBhcnJheSB0byBiaW5hcnkgc3RyaW5nXG5leHBvcnRzLmJ1ZjJiaW5zdHJpbmcgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIHJldHVybiBidWYyYmluc3RyaW5nKGJ1ZiwgYnVmLmxlbmd0aCk7XG59O1xuXG5cbi8vIENvbnZlcnQgYmluYXJ5IHN0cmluZyAodHlwZWQsIHdoZW4gcG9zc2libGUpXG5leHBvcnRzLmJpbnN0cmluZzJidWYgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBidWYgPSBuZXcgdXRpbHMuQnVmOChzdHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1ZltpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBidWY7XG59O1xuXG5cbi8vIGNvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXG5leHBvcnRzLmJ1ZjJzdHJpbmcgPSBmdW5jdGlvbiAoYnVmLCBtYXgpIHtcbiAgdmFyIGksIG91dCwgYywgY19sZW47XG4gIHZhciBsZW4gPSBtYXggfHwgYnVmLmxlbmd0aDtcblxuICAvLyBSZXNlcnZlIG1heCBwb3NzaWJsZSBsZW5ndGggKDIgd29yZHMgcGVyIGNoYXIpXG4gIC8vIE5COiBieSB1bmtub3duIHJlYXNvbnMsIEFycmF5IGlzIHNpZ25pZmljYW50bHkgZmFzdGVyIGZvclxuICAvLyAgICAgU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSB0aGFuIFVpbnQxNkFycmF5LlxuICB2YXIgdXRmMTZidWYgPSBuZXcgQXJyYXkobGVuICogMik7XG5cbiAgZm9yIChvdXQgPSAwLCBpID0gMDsgaSA8IGxlbjspIHtcbiAgICBjID0gYnVmW2krK107XG4gICAgLy8gcXVpY2sgcHJvY2VzcyBhc2NpaVxuICAgIGlmIChjIDwgMHg4MCkgeyB1dGYxNmJ1ZltvdXQrK10gPSBjOyBjb250aW51ZTsgfVxuXG4gICAgY19sZW4gPSBfdXRmOGxlbltjXTtcbiAgICAvLyBza2lwIDUgJiA2IGJ5dGUgY29kZXNcbiAgICBpZiAoY19sZW4gPiA0KSB7IHV0ZjE2YnVmW291dCsrXSA9IDB4ZmZmZDsgaSArPSBjX2xlbiAtIDE7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBhcHBseSBtYXNrIG9uIGZpcnN0IGJ5dGVcbiAgICBjICY9IGNfbGVuID09PSAyID8gMHgxZiA6IGNfbGVuID09PSAzID8gMHgwZiA6IDB4MDc7XG4gICAgLy8gam9pbiB0aGUgcmVzdFxuICAgIHdoaWxlIChjX2xlbiA+IDEgJiYgaSA8IGxlbikge1xuICAgICAgYyA9IChjIDw8IDYpIHwgKGJ1ZltpKytdICYgMHgzZik7XG4gICAgICBjX2xlbi0tO1xuICAgIH1cblxuICAgIC8vIHRlcm1pbmF0ZWQgYnkgZW5kIG9mIHN0cmluZz9cbiAgICBpZiAoY19sZW4gPiAxKSB7IHV0ZjE2YnVmW291dCsrXSA9IDB4ZmZmZDsgY29udGludWU7IH1cblxuICAgIGlmIChjIDwgMHgxMDAwMCkge1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgYyAtPSAweDEwMDAwO1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gMHhkODAwIHwgKChjID4+IDEwKSAmIDB4M2ZmKTtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IDB4ZGMwMCB8IChjICYgMHgzZmYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYyYmluc3RyaW5nKHV0ZjE2YnVmLCBvdXQpO1xufTtcblxuXG4vLyBDYWxjdWxhdGUgbWF4IHBvc3NpYmxlIHBvc2l0aW9uIGluIHV0ZjggYnVmZmVyLFxuLy8gdGhhdCB3aWxsIG5vdCBicmVhayBzZXF1ZW5jZS4gSWYgdGhhdCdzIG5vdCBwb3NzaWJsZVxuLy8gLSAodmVyeSBzbWFsbCBsaW1pdHMpIHJldHVybiBtYXggc2l6ZSBhcyBpcy5cbi8vXG4vLyBidWZbXSAtIHV0ZjggYnl0ZXMgYXJyYXlcbi8vIG1heCAgIC0gbGVuZ3RoIGxpbWl0IChtYW5kYXRvcnkpO1xuZXhwb3J0cy51dGY4Ym9yZGVyID0gZnVuY3Rpb24gKGJ1ZiwgbWF4KSB7XG4gIHZhciBwb3M7XG5cbiAgbWF4ID0gbWF4IHx8IGJ1Zi5sZW5ndGg7XG4gIGlmIChtYXggPiBidWYubGVuZ3RoKSB7IG1heCA9IGJ1Zi5sZW5ndGg7IH1cblxuICAvLyBnbyBiYWNrIGZyb20gbGFzdCBwb3NpdGlvbiwgdW50aWwgc3RhcnQgb2Ygc2VxdWVuY2UgZm91bmRcbiAgcG9zID0gbWF4IC0gMTtcbiAgd2hpbGUgKHBvcyA+PSAwICYmIChidWZbcG9zXSAmIDB4QzApID09PSAweDgwKSB7IHBvcy0tOyB9XG5cbiAgLy8gVmVyeSBzbWFsbCBhbmQgYnJva2VuIHNlcXVlbmNlLFxuICAvLyByZXR1cm4gbWF4LCBiZWNhdXNlIHdlIHNob3VsZCByZXR1cm4gc29tZXRoaW5nIGFueXdheS5cbiAgaWYgKHBvcyA8IDApIHsgcmV0dXJuIG1heDsgfVxuXG4gIC8vIElmIHdlIGNhbWUgdG8gc3RhcnQgb2YgYnVmZmVyIC0gdGhhdCBtZWFucyBidWZmZXIgaXMgdG9vIHNtYWxsLFxuICAvLyByZXR1cm4gbWF4IHRvby5cbiAgaWYgKHBvcyA9PT0gMCkgeyByZXR1cm4gbWF4OyB9XG5cbiAgcmV0dXJuIChwb3MgKyBfdXRmOGxlbltidWZbcG9zXV0gPiBtYXgpID8gcG9zIDogbWF4O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTm90ZTogYWRsZXIzMiB0YWtlcyAxMiUgZm9yIGxldmVsIDAgYW5kIDIlIGZvciBsZXZlbCA2LlxuLy8gSXQgaXNuJ3Qgd29ydGggaXQgdG8gbWFrZSBhZGRpdGlvbmFsIG9wdGltaXphdGlvbnMgYXMgaW4gb3JpZ2luYWwuXG4vLyBTbWFsbCBzaXplIGlzIHByZWZlcmFibGUuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuZnVuY3Rpb24gYWRsZXIzMihhZGxlciwgYnVmLCBsZW4sIHBvcykge1xuICB2YXIgczEgPSAoYWRsZXIgJiAweGZmZmYpIHwwLFxuICAgICAgczIgPSAoKGFkbGVyID4+PiAxNikgJiAweGZmZmYpIHwwLFxuICAgICAgbiA9IDA7XG5cbiAgd2hpbGUgKGxlbiAhPT0gMCkge1xuICAgIC8vIFNldCBsaW1pdCB+IHR3aWNlIGxlc3MgdGhhbiA1NTUyLCB0byBrZWVwXG4gICAgLy8gczIgaW4gMzEtYml0cywgYmVjYXVzZSB3ZSBmb3JjZSBzaWduZWQgaW50cy5cbiAgICAvLyBpbiBvdGhlciBjYXNlICU9IHdpbGwgZmFpbC5cbiAgICBuID0gbGVuID4gMjAwMCA/IDIwMDAgOiBsZW47XG4gICAgbGVuIC09IG47XG5cbiAgICBkbyB7XG4gICAgICBzMSA9IChzMSArIGJ1Zltwb3MrK10pIHwwO1xuICAgICAgczIgPSAoczIgKyBzMSkgfDA7XG4gICAgfSB3aGlsZSAoLS1uKTtcblxuICAgIHMxICU9IDY1NTIxO1xuICAgIHMyICU9IDY1NTIxO1xuICB9XG5cbiAgcmV0dXJuIChzMSB8IChzMiA8PCAxNikpIHwwO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gYWRsZXIzMjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTm90ZTogd2UgY2FuJ3QgZ2V0IHNpZ25pZmljYW50IHNwZWVkIGJvb3N0IGhlcmUuXG4vLyBTbyB3cml0ZSBjb2RlIHRvIG1pbmltaXplIHNpemUgLSBubyBwcmVnZW5lcmF0ZWQgdGFibGVzXG4vLyBhbmQgYXJyYXkgdG9vbHMgZGVwZW5kZW5jaWVzLlxuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbi8vIFVzZSBvcmRpbmFyeSBhcnJheSwgc2luY2UgdW50eXBlZCBtYWtlcyBubyBib29zdCBoZXJlXG5mdW5jdGlvbiBtYWtlVGFibGUoKSB7XG4gIHZhciBjLCB0YWJsZSA9IFtdO1xuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgMjU2OyBuKyspIHtcbiAgICBjID0gbjtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgYyA9ICgoYyAmIDEpID8gKDB4RURCODgzMjAgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcbiAgICB9XG4gICAgdGFibGVbbl0gPSBjO1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG4vLyBDcmVhdGUgdGFibGUgb24gbG9hZC4gSnVzdCAyNTUgc2lnbmVkIGxvbmdzLiBOb3QgYSBwcm9ibGVtLlxudmFyIGNyY1RhYmxlID0gbWFrZVRhYmxlKCk7XG5cblxuZnVuY3Rpb24gY3JjMzIoY3JjLCBidWYsIGxlbiwgcG9zKSB7XG4gIHZhciB0ID0gY3JjVGFibGUsXG4gICAgICBlbmQgPSBwb3MgKyBsZW47XG5cbiAgY3JjIF49IC0xO1xuXG4gIGZvciAodmFyIGkgPSBwb3M7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNyYyA9IChjcmMgPj4+IDgpIF4gdFsoY3JjIF4gYnVmW2ldKSAmIDB4RkZdO1xuICB9XG5cbiAgcmV0dXJuIChjcmMgXiAoLTEpKTsgLy8gPj4+IDA7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjcmMzMjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG52YXIgdXRpbHMgICA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xudmFyIHRyZWVzICAgPSByZXF1aXJlKCcuL3RyZWVzJyk7XG52YXIgYWRsZXIzMiA9IHJlcXVpcmUoJy4vYWRsZXIzMicpO1xudmFyIGNyYzMyICAgPSByZXF1aXJlKCcuL2NyYzMyJyk7XG52YXIgbXNnICAgICA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xudmFyIFpfTk9fRkxVU0ggICAgICA9IDA7XG52YXIgWl9QQVJUSUFMX0ZMVVNIID0gMTtcbi8vdmFyIFpfU1lOQ19GTFVTSCAgICA9IDI7XG52YXIgWl9GVUxMX0ZMVVNIICAgID0gMztcbnZhciBaX0ZJTklTSCAgICAgICAgPSA0O1xudmFyIFpfQkxPQ0sgICAgICAgICA9IDU7XG4vL3ZhciBaX1RSRUVTICAgICAgICAgPSA2O1xuXG5cbi8qIFJldHVybiBjb2RlcyBmb3IgdGhlIGNvbXByZXNzaW9uL2RlY29tcHJlc3Npb24gZnVuY3Rpb25zLiBOZWdhdGl2ZSB2YWx1ZXNcbiAqIGFyZSBlcnJvcnMsIHBvc2l0aXZlIHZhbHVlcyBhcmUgdXNlZCBmb3Igc3BlY2lhbCBidXQgbm9ybWFsIGV2ZW50cy5cbiAqL1xudmFyIFpfT0sgICAgICAgICAgICA9IDA7XG52YXIgWl9TVFJFQU1fRU5EICAgID0gMTtcbi8vdmFyIFpfTkVFRF9ESUNUICAgICA9IDI7XG4vL3ZhciBaX0VSUk5PICAgICAgICAgPSAtMTtcbnZhciBaX1NUUkVBTV9FUlJPUiAgPSAtMjtcbnZhciBaX0RBVEFfRVJST1IgICAgPSAtMztcbi8vdmFyIFpfTUVNX0VSUk9SICAgICA9IC00O1xudmFyIFpfQlVGX0VSUk9SICAgICA9IC01O1xuLy92YXIgWl9WRVJTSU9OX0VSUk9SID0gLTY7XG5cblxuLyogY29tcHJlc3Npb24gbGV2ZWxzICovXG4vL3ZhciBaX05PX0NPTVBSRVNTSU9OICAgICAgPSAwO1xuLy92YXIgWl9CRVNUX1NQRUVEICAgICAgICAgID0gMTtcbi8vdmFyIFpfQkVTVF9DT01QUkVTU0lPTiAgICA9IDk7XG52YXIgWl9ERUZBVUxUX0NPTVBSRVNTSU9OID0gLTE7XG5cblxudmFyIFpfRklMVEVSRUQgICAgICAgICAgICA9IDE7XG52YXIgWl9IVUZGTUFOX09OTFkgICAgICAgID0gMjtcbnZhciBaX1JMRSAgICAgICAgICAgICAgICAgPSAzO1xudmFyIFpfRklYRUQgICAgICAgICAgICAgICA9IDQ7XG52YXIgWl9ERUZBVUxUX1NUUkFURUdZICAgID0gMDtcblxuLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xuLy92YXIgWl9CSU5BUlkgICAgICAgICAgICAgID0gMDtcbi8vdmFyIFpfVEVYVCAgICAgICAgICAgICAgICA9IDE7XG4vL3ZhciBaX0FTQ0lJICAgICAgICAgICAgICAgPSAxOyAvLyA9IFpfVEVYVFxudmFyIFpfVU5LTk9XTiAgICAgICAgICAgICA9IDI7XG5cblxuLyogVGhlIGRlZmxhdGUgY29tcHJlc3Npb24gbWV0aG9kICovXG52YXIgWl9ERUZMQVRFRCAgPSA4O1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbnZhciBNQVhfTUVNX0xFVkVMID0gOTtcbi8qIE1heGltdW0gdmFsdWUgZm9yIG1lbUxldmVsIGluIGRlZmxhdGVJbml0MiAqL1xudmFyIE1BWF9XQklUUyA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG52YXIgREVGX01FTV9MRVZFTCA9IDg7XG5cblxudmFyIExFTkdUSF9DT0RFUyAgPSAyOTtcbi8qIG51bWJlciBvZiBsZW5ndGggY29kZXMsIG5vdCBjb3VudGluZyB0aGUgc3BlY2lhbCBFTkRfQkxPQ0sgY29kZSAqL1xudmFyIExJVEVSQUxTICAgICAgPSAyNTY7XG4vKiBudW1iZXIgb2YgbGl0ZXJhbCBieXRlcyAwLi4yNTUgKi9cbnZhciBMX0NPREVTICAgICAgID0gTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTO1xuLyogbnVtYmVyIG9mIExpdGVyYWwgb3IgTGVuZ3RoIGNvZGVzLCBpbmNsdWRpbmcgdGhlIEVORF9CTE9DSyBjb2RlICovXG52YXIgRF9DT0RFUyAgICAgICA9IDMwO1xuLyogbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGVzICovXG52YXIgQkxfQ09ERVMgICAgICA9IDE5O1xuLyogbnVtYmVyIG9mIGNvZGVzIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGJpdCBsZW5ndGhzICovXG52YXIgSEVBUF9TSVpFICAgICA9IDIgKiBMX0NPREVTICsgMTtcbi8qIG1heGltdW0gaGVhcCBzaXplICovXG52YXIgTUFYX0JJVFMgID0gMTU7XG4vKiBBbGwgY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CSVRTIGJpdHMgKi9cblxudmFyIE1JTl9NQVRDSCA9IDM7XG52YXIgTUFYX01BVENIID0gMjU4O1xudmFyIE1JTl9MT09LQUhFQUQgPSAoTUFYX01BVENIICsgTUlOX01BVENIICsgMSk7XG5cbnZhciBQUkVTRVRfRElDVCA9IDB4MjA7XG5cbnZhciBJTklUX1NUQVRFID0gNDI7XG52YXIgRVhUUkFfU1RBVEUgPSA2OTtcbnZhciBOQU1FX1NUQVRFID0gNzM7XG52YXIgQ09NTUVOVF9TVEFURSA9IDkxO1xudmFyIEhDUkNfU1RBVEUgPSAxMDM7XG52YXIgQlVTWV9TVEFURSA9IDExMztcbnZhciBGSU5JU0hfU1RBVEUgPSA2NjY7XG5cbnZhciBCU19ORUVEX01PUkUgICAgICA9IDE7IC8qIGJsb2NrIG5vdCBjb21wbGV0ZWQsIG5lZWQgbW9yZSBpbnB1dCBvciBtb3JlIG91dHB1dCAqL1xudmFyIEJTX0JMT0NLX0RPTkUgICAgID0gMjsgLyogYmxvY2sgZmx1c2ggcGVyZm9ybWVkICovXG52YXIgQlNfRklOSVNIX1NUQVJURUQgPSAzOyAvKiBmaW5pc2ggc3RhcnRlZCwgbmVlZCBvbmx5IG1vcmUgb3V0cHV0IGF0IG5leHQgZGVmbGF0ZSAqL1xudmFyIEJTX0ZJTklTSF9ET05FICAgID0gNDsgLyogZmluaXNoIGRvbmUsIGFjY2VwdCBubyBtb3JlIGlucHV0IG9yIG91dHB1dCAqL1xuXG52YXIgT1NfQ09ERSA9IDB4MDM7IC8vIFVuaXggOikgLiBEb24ndCBkZXRlY3QsIHVzZSB0aGlzIGRlZmF1bHQuXG5cbmZ1bmN0aW9uIGVycihzdHJtLCBlcnJvckNvZGUpIHtcbiAgc3RybS5tc2cgPSBtc2dbZXJyb3JDb2RlXTtcbiAgcmV0dXJuIGVycm9yQ29kZTtcbn1cblxuZnVuY3Rpb24gcmFuayhmKSB7XG4gIHJldHVybiAoKGYpIDw8IDEpIC0gKChmKSA+IDQgPyA5IDogMCk7XG59XG5cbmZ1bmN0aW9uIHplcm8oYnVmKSB7IHZhciBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH0gfVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUuIEFsbCBkZWZsYXRlKCkgb3V0cHV0IGdvZXNcbiAqIHRocm91Z2ggdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXRcbiAqIHRvIGF2b2lkIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5vdXRwdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGludG8gaXQuXG4gKiAoU2VlIGFsc28gcmVhZF9idWYoKSkuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoX3BlbmRpbmcoc3RybSkge1xuICB2YXIgcyA9IHN0cm0uc3RhdGU7XG5cbiAgLy9fdHJfZmx1c2hfYml0cyhzKTtcbiAgdmFyIGxlbiA9IHMucGVuZGluZztcbiAgaWYgKGxlbiA+IHN0cm0uYXZhaWxfb3V0KSB7XG4gICAgbGVuID0gc3RybS5hdmFpbF9vdXQ7XG4gIH1cbiAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm47IH1cblxuICB1dGlscy5hcnJheVNldChzdHJtLm91dHB1dCwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nX291dCwgbGVuLCBzdHJtLm5leHRfb3V0KTtcbiAgc3RybS5uZXh0X291dCArPSBsZW47XG4gIHMucGVuZGluZ19vdXQgKz0gbGVuO1xuICBzdHJtLnRvdGFsX291dCArPSBsZW47XG4gIHN0cm0uYXZhaWxfb3V0IC09IGxlbjtcbiAgcy5wZW5kaW5nIC09IGxlbjtcbiAgaWYgKHMucGVuZGluZyA9PT0gMCkge1xuICAgIHMucGVuZGluZ19vdXQgPSAwO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZmx1c2hfYmxvY2tfb25seShzLCBsYXN0KSB7XG4gIHRyZWVzLl90cl9mbHVzaF9ibG9jayhzLCAocy5ibG9ja19zdGFydCA+PSAwID8gcy5ibG9ja19zdGFydCA6IC0xKSwgcy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQsIGxhc3QpO1xuICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgZmx1c2hfcGVuZGluZyhzLnN0cm0pO1xufVxuXG5cbmZ1bmN0aW9uIHB1dF9ieXRlKHMsIGIpIHtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBiO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFB1dCBhIHNob3J0IGluIHRoZSBwZW5kaW5nIGJ1ZmZlci4gVGhlIDE2LWJpdCB2YWx1ZSBpcyBwdXQgaW4gTVNCIG9yZGVyLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgc3RyZWFtIHN0YXRlIGlzIGNvcnJlY3QgYW5kIHRoZXJlIGlzIGVub3VnaCByb29tIGluXG4gKiBwZW5kaW5nX2J1Zi5cbiAqL1xuZnVuY3Rpb24gcHV0U2hvcnRNU0IocywgYikge1xuLy8gIHB1dF9ieXRlKHMsIChCeXRlKShiID4+IDgpKTtcbi8vICBwdXRfYnl0ZShzLCAoQnl0ZSkoYiAmIDB4ZmYpKTtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAoYiA+Pj4gOCkgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IGIgJiAweGZmO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVhZCBhIG5ldyBidWZmZXIgZnJvbSB0aGUgY3VycmVudCBpbnB1dCBzdHJlYW0sIHVwZGF0ZSB0aGUgYWRsZXIzMlxuICogYW5kIHRvdGFsIG51bWJlciBvZiBieXRlcyByZWFkLiAgQWxsIGRlZmxhdGUoKSBpbnB1dCBnb2VzIHRocm91Z2hcbiAqIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0IHRvIGF2b2lkXG4gKiBhbGxvY2F0aW5nIGEgbGFyZ2Ugc3RybS0+aW5wdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGZyb20gaXQuXG4gKiAoU2VlIGFsc28gZmx1c2hfcGVuZGluZygpKS5cbiAqL1xuZnVuY3Rpb24gcmVhZF9idWYoc3RybSwgYnVmLCBzdGFydCwgc2l6ZSkge1xuICB2YXIgbGVuID0gc3RybS5hdmFpbF9pbjtcblxuICBpZiAobGVuID4gc2l6ZSkgeyBsZW4gPSBzaXplOyB9XG4gIGlmIChsZW4gPT09IDApIHsgcmV0dXJuIDA7IH1cblxuICBzdHJtLmF2YWlsX2luIC09IGxlbjtcblxuICAvLyB6bWVtY3B5KGJ1Ziwgc3RybS0+bmV4dF9pbiwgbGVuKTtcbiAgdXRpbHMuYXJyYXlTZXQoYnVmLCBzdHJtLmlucHV0LCBzdHJtLm5leHRfaW4sIGxlbiwgc3RhcnQpO1xuICBpZiAoc3RybS5zdGF0ZS53cmFwID09PSAxKSB7XG4gICAgc3RybS5hZGxlciA9IGFkbGVyMzIoc3RybS5hZGxlciwgYnVmLCBsZW4sIHN0YXJ0KTtcbiAgfVxuXG4gIGVsc2UgaWYgKHN0cm0uc3RhdGUud3JhcCA9PT0gMikge1xuICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBidWYsIGxlbiwgc3RhcnQpO1xuICB9XG5cbiAgc3RybS5uZXh0X2luICs9IGxlbjtcbiAgc3RybS50b3RhbF9pbiArPSBsZW47XG5cbiAgcmV0dXJuIGxlbjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNldCBtYXRjaF9zdGFydCB0byB0aGUgbG9uZ2VzdCBtYXRjaCBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gc3RyaW5nIGFuZFxuICogcmV0dXJuIGl0cyBsZW5ndGguIE1hdGNoZXMgc2hvcnRlciBvciBlcXVhbCB0byBwcmV2X2xlbmd0aCBhcmUgZGlzY2FyZGVkLFxuICogaW4gd2hpY2ggY2FzZSB0aGUgcmVzdWx0IGlzIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFuZCBtYXRjaF9zdGFydCBpc1xuICogZ2FyYmFnZS5cbiAqIElOIGFzc2VydGlvbnM6IGN1cl9tYXRjaCBpcyB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbiBmb3IgdGhlIGN1cnJlbnRcbiAqICAgc3RyaW5nIChzdHJzdGFydCkgYW5kIGl0cyBkaXN0YW5jZSBpcyA8PSBNQVhfRElTVCwgYW5kIHByZXZfbGVuZ3RoID49IDFcbiAqIE9VVCBhc3NlcnRpb246IHRoZSBtYXRjaCBsZW5ndGggaXMgbm90IGdyZWF0ZXIgdGhhbiBzLT5sb29rYWhlYWQuXG4gKi9cbmZ1bmN0aW9uIGxvbmdlc3RfbWF0Y2gocywgY3VyX21hdGNoKSB7XG4gIHZhciBjaGFpbl9sZW5ndGggPSBzLm1heF9jaGFpbl9sZW5ndGg7ICAgICAgLyogbWF4IGhhc2ggY2hhaW4gbGVuZ3RoICovXG4gIHZhciBzY2FuID0gcy5zdHJzdGFydDsgLyogY3VycmVudCBzdHJpbmcgKi9cbiAgdmFyIG1hdGNoOyAgICAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2hlZCBzdHJpbmcgKi9cbiAgdmFyIGxlbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBtYXRjaCAqL1xuICB2YXIgYmVzdF9sZW4gPSBzLnByZXZfbGVuZ3RoOyAgICAgICAgICAgICAgLyogYmVzdCBtYXRjaCBsZW5ndGggc28gZmFyICovXG4gIHZhciBuaWNlX21hdGNoID0gcy5uaWNlX21hdGNoOyAgICAgICAgICAgICAvKiBzdG9wIGlmIG1hdGNoIGxvbmcgZW5vdWdoICovXG4gIHZhciBsaW1pdCA9IChzLnN0cnN0YXJ0ID4gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpID9cbiAgICAgIHMuc3Ryc3RhcnQgLSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSA6IDAvKk5JTCovO1xuXG4gIHZhciBfd2luID0gcy53aW5kb3c7IC8vIHNob3J0Y3V0XG5cbiAgdmFyIHdtYXNrID0gcy53X21hc2s7XG4gIHZhciBwcmV2ICA9IHMucHJldjtcblxuICAvKiBTdG9wIHdoZW4gY3VyX21hdGNoIGJlY29tZXMgPD0gbGltaXQuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLFxuICAgKiB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nIG9mIHdpbmRvdyBpbmRleCAwLlxuICAgKi9cblxuICB2YXIgc3RyZW5kID0gcy5zdHJzdGFydCArIE1BWF9NQVRDSDtcbiAgdmFyIHNjYW5fZW5kMSAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuICB2YXIgc2Nhbl9lbmQgICA9IF93aW5bc2NhbiArIGJlc3RfbGVuXTtcblxuICAvKiBUaGUgY29kZSBpcyBvcHRpbWl6ZWQgZm9yIEhBU0hfQklUUyA+PSA4IGFuZCBNQVhfTUFUQ0gtMiBtdWx0aXBsZSBvZiAxNi5cbiAgICogSXQgaXMgZWFzeSB0byBnZXQgcmlkIG9mIHRoaXMgb3B0aW1pemF0aW9uIGlmIG5lY2Vzc2FyeS5cbiAgICovXG4gIC8vIEFzc2VydChzLT5oYXNoX2JpdHMgPj0gOCAmJiBNQVhfTUFUQ0ggPT0gMjU4LCBcIkNvZGUgdG9vIGNsZXZlclwiKTtcblxuICAvKiBEbyBub3Qgd2FzdGUgdG9vIG11Y2ggdGltZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBnb29kIG1hdGNoOiAqL1xuICBpZiAocy5wcmV2X2xlbmd0aCA+PSBzLmdvb2RfbWF0Y2gpIHtcbiAgICBjaGFpbl9sZW5ndGggPj49IDI7XG4gIH1cbiAgLyogRG8gbm90IGxvb2sgZm9yIG1hdGNoZXMgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGlucHV0LiBUaGlzIGlzIG5lY2Vzc2FyeVxuICAgKiB0byBtYWtlIGRlZmxhdGUgZGV0ZXJtaW5pc3RpYy5cbiAgICovXG4gIGlmIChuaWNlX21hdGNoID4gcy5sb29rYWhlYWQpIHsgbmljZV9tYXRjaCA9IHMubG9va2FoZWFkOyB9XG5cbiAgLy8gQXNzZXJ0KCh1bGcpcy0+c3Ryc3RhcnQgPD0gcy0+d2luZG93X3NpemUtTUlOX0xPT0tBSEVBRCwgXCJuZWVkIGxvb2thaGVhZFwiKTtcblxuICBkbyB7XG4gICAgLy8gQXNzZXJ0KGN1cl9tYXRjaCA8IHMtPnN0cnN0YXJ0LCBcIm5vIGZ1dHVyZVwiKTtcbiAgICBtYXRjaCA9IGN1cl9tYXRjaDtcblxuICAgIC8qIFNraXAgdG8gbmV4dCBtYXRjaCBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGNhbm5vdCBpbmNyZWFzZVxuICAgICAqIG9yIGlmIHRoZSBtYXRjaCBsZW5ndGggaXMgbGVzcyB0aGFuIDIuICBOb3RlIHRoYXQgdGhlIGNoZWNrcyBiZWxvd1xuICAgICAqIGZvciBpbnN1ZmZpY2llbnQgbG9va2FoZWFkIG9ubHkgb2NjdXIgb2NjYXNpb25hbGx5IGZvciBwZXJmb3JtYW5jZVxuICAgICAqIHJlYXNvbnMuICBUaGVyZWZvcmUgdW5pbml0aWFsaXplZCBtZW1vcnkgd2lsbCBiZSBhY2Nlc3NlZCwgYW5kXG4gICAgICogY29uZGl0aW9uYWwganVtcHMgd2lsbCBiZSBtYWRlIHRoYXQgZGVwZW5kIG9uIHRob3NlIHZhbHVlcy5cbiAgICAgKiBIb3dldmVyIHRoZSBsZW5ndGggb2YgdGhlIG1hdGNoIGlzIGxpbWl0ZWQgdG8gdGhlIGxvb2thaGVhZCwgc29cbiAgICAgKiB0aGUgb3V0cHV0IG9mIGRlZmxhdGUgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSB1bmluaXRpYWxpemVkIHZhbHVlcy5cbiAgICAgKi9cblxuICAgIGlmIChfd2luW21hdGNoICsgYmVzdF9sZW5dICAgICAhPT0gc2Nhbl9lbmQgIHx8XG4gICAgICAgIF93aW5bbWF0Y2ggKyBiZXN0X2xlbiAtIDFdICE9PSBzY2FuX2VuZDEgfHxcbiAgICAgICAgX3dpblttYXRjaF0gICAgICAgICAgICAgICAgIT09IF93aW5bc2Nhbl0gfHxcbiAgICAgICAgX3dpblsrK21hdGNoXSAgICAgICAgICAgICAgIT09IF93aW5bc2NhbiArIDFdKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKiBUaGUgY2hlY2sgYXQgYmVzdF9sZW4tMSBjYW4gYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IHdpbGwgYmUgbWFkZVxuICAgICAqIGFnYWluIGxhdGVyLiAoVGhpcyBoZXVyaXN0aWMgaXMgbm90IGFsd2F5cyBhIHdpbi4pXG4gICAgICogSXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjb21wYXJlIHNjYW5bMl0gYW5kIG1hdGNoWzJdIHNpbmNlIHRoZXlcbiAgICAgKiBhcmUgYWx3YXlzIGVxdWFsIHdoZW4gdGhlIG90aGVyIGJ5dGVzIG1hdGNoLCBnaXZlbiB0aGF0XG4gICAgICogdGhlIGhhc2gga2V5cyBhcmUgZXF1YWwgYW5kIHRoYXQgSEFTSF9CSVRTID49IDguXG4gICAgICovXG4gICAgc2NhbiArPSAyO1xuICAgIG1hdGNoKys7XG4gICAgLy8gQXNzZXJ0KCpzY2FuID09ICptYXRjaCwgXCJtYXRjaFsyXT9cIik7XG5cbiAgICAvKiBXZSBjaGVjayBmb3IgaW5zdWZmaWNpZW50IGxvb2thaGVhZCBvbmx5IGV2ZXJ5IDh0aCBjb21wYXJpc29uO1xuICAgICAqIHRoZSAyNTZ0aCBjaGVjayB3aWxsIGJlIG1hZGUgYXQgc3Ryc3RhcnQrMjU4LlxuICAgICAqL1xuICAgIGRvIHtcbiAgICAgIC8qanNoaW50IG5vZW1wdHk6ZmFsc2UqL1xuICAgIH0gd2hpbGUgKF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBzY2FuIDwgc3RyZW5kKTtcblxuICAgIC8vIEFzc2VydChzY2FuIDw9IHMtPndpbmRvdysodW5zaWduZWQpKHMtPndpbmRvd19zaXplLTEpLCBcIndpbGQgc2NhblwiKTtcblxuICAgIGxlbiA9IE1BWF9NQVRDSCAtIChzdHJlbmQgLSBzY2FuKTtcbiAgICBzY2FuID0gc3RyZW5kIC0gTUFYX01BVENIO1xuXG4gICAgaWYgKGxlbiA+IGJlc3RfbGVuKSB7XG4gICAgICBzLm1hdGNoX3N0YXJ0ID0gY3VyX21hdGNoO1xuICAgICAgYmVzdF9sZW4gPSBsZW47XG4gICAgICBpZiAobGVuID49IG5pY2VfbWF0Y2gpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzY2FuX2VuZDEgID0gX3dpbltzY2FuICsgYmVzdF9sZW4gLSAxXTtcbiAgICAgIHNjYW5fZW5kICAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbl07XG4gICAgfVxuICB9IHdoaWxlICgoY3VyX21hdGNoID0gcHJldltjdXJfbWF0Y2ggJiB3bWFza10pID4gbGltaXQgJiYgLS1jaGFpbl9sZW5ndGggIT09IDApO1xuXG4gIGlmIChiZXN0X2xlbiA8PSBzLmxvb2thaGVhZCkge1xuICAgIHJldHVybiBiZXN0X2xlbjtcbiAgfVxuICByZXR1cm4gcy5sb29rYWhlYWQ7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxsIHRoZSB3aW5kb3cgd2hlbiB0aGUgbG9va2FoZWFkIGJlY29tZXMgaW5zdWZmaWNpZW50LlxuICogVXBkYXRlcyBzdHJzdGFydCBhbmQgbG9va2FoZWFkLlxuICpcbiAqIElOIGFzc2VydGlvbjogbG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRFxuICogT1VUIGFzc2VydGlvbnM6IHN0cnN0YXJ0IDw9IHdpbmRvd19zaXplLU1JTl9MT09LQUhFQURcbiAqICAgIEF0IGxlYXN0IG9uZSBieXRlIGhhcyBiZWVuIHJlYWQsIG9yIGF2YWlsX2luID09IDA7IHJlYWRzIGFyZVxuICogICAgcGVyZm9ybWVkIGZvciBhdCBsZWFzdCB0d28gYnl0ZXMgKHJlcXVpcmVkIGZvciB0aGUgemlwIHRyYW5zbGF0ZV9lb2xcbiAqICAgIG9wdGlvbiAtLSBub3Qgc3VwcG9ydGVkIGhlcmUpLlxuICovXG5mdW5jdGlvbiBmaWxsX3dpbmRvdyhzKSB7XG4gIHZhciBfd19zaXplID0gcy53X3NpemU7XG4gIHZhciBwLCBuLCBtLCBtb3JlLCBzdHI7XG5cbiAgLy9Bc3NlcnQocy0+bG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCwgXCJhbHJlYWR5IGVub3VnaCBsb29rYWhlYWRcIik7XG5cbiAgZG8ge1xuICAgIG1vcmUgPSBzLndpbmRvd19zaXplIC0gcy5sb29rYWhlYWQgLSBzLnN0cnN0YXJ0O1xuXG4gICAgLy8gSlMgaW50cyBoYXZlIDMyIGJpdCwgYmxvY2sgYmVsb3cgbm90IG5lZWRlZFxuICAgIC8qIERlYWwgd2l0aCAhQCMkJSA2NEsgbGltaXQ6ICovXG4gICAgLy9pZiAoc2l6ZW9mKGludCkgPD0gMikge1xuICAgIC8vICAgIGlmIChtb3JlID09IDAgJiYgcy0+c3Ryc3RhcnQgPT0gMCAmJiBzLT5sb29rYWhlYWQgPT0gMCkge1xuICAgIC8vICAgICAgICBtb3JlID0gd3NpemU7XG4gICAgLy9cbiAgICAvLyAgfSBlbHNlIGlmIChtb3JlID09ICh1bnNpZ25lZCkoLTEpKSB7XG4gICAgLy8gICAgICAgIC8qIFZlcnkgdW5saWtlbHksIGJ1dCBwb3NzaWJsZSBvbiAxNiBiaXQgbWFjaGluZSBpZlxuICAgIC8vICAgICAgICAgKiBzdHJzdGFydCA9PSAwICYmIGxvb2thaGVhZCA9PSAxIChpbnB1dCBkb25lIGEgYnl0ZSBhdCB0aW1lKVxuICAgIC8vICAgICAgICAgKi9cbiAgICAvLyAgICAgICAgbW9yZS0tO1xuICAgIC8vICAgIH1cbiAgICAvL31cblxuXG4gICAgLyogSWYgdGhlIHdpbmRvdyBpcyBhbG1vc3QgZnVsbCBhbmQgdGhlcmUgaXMgaW5zdWZmaWNpZW50IGxvb2thaGVhZCxcbiAgICAgKiBtb3ZlIHRoZSB1cHBlciBoYWxmIHRvIHRoZSBsb3dlciBvbmUgdG8gbWFrZSByb29tIGluIHRoZSB1cHBlciBoYWxmLlxuICAgICAqL1xuICAgIGlmIChzLnN0cnN0YXJ0ID49IF93X3NpemUgKyAoX3dfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSB7XG5cbiAgICAgIHV0aWxzLmFycmF5U2V0KHMud2luZG93LCBzLndpbmRvdywgX3dfc2l6ZSwgX3dfc2l6ZSwgMCk7XG4gICAgICBzLm1hdGNoX3N0YXJ0IC09IF93X3NpemU7XG4gICAgICBzLnN0cnN0YXJ0IC09IF93X3NpemU7XG4gICAgICAvKiB3ZSBub3cgaGF2ZSBzdHJzdGFydCA+PSBNQVhfRElTVCAqL1xuICAgICAgcy5ibG9ja19zdGFydCAtPSBfd19zaXplO1xuXG4gICAgICAvKiBTbGlkZSB0aGUgaGFzaCB0YWJsZSAoY291bGQgYmUgYXZvaWRlZCB3aXRoIDMyIGJpdCB2YWx1ZXNcbiAgICAgICBhdCB0aGUgZXhwZW5zZSBvZiBtZW1vcnkgdXNhZ2UpLiBXZSBzbGlkZSBldmVuIHdoZW4gbGV2ZWwgPT0gMFxuICAgICAgIHRvIGtlZXAgdGhlIGhhc2ggdGFibGUgY29uc2lzdGVudCBpZiB3ZSBzd2l0Y2ggYmFjayB0byBsZXZlbCA+IDBcbiAgICAgICBsYXRlci4gKFVzaW5nIGxldmVsIDAgcGVybWFuZW50bHkgaXMgbm90IGFuIG9wdGltYWwgdXNhZ2Ugb2ZcbiAgICAgICB6bGliLCBzbyB3ZSBkb24ndCBjYXJlIGFib3V0IHRoaXMgcGF0aG9sb2dpY2FsIGNhc2UuKVxuICAgICAgICovXG5cbiAgICAgIG4gPSBzLmhhc2hfc2l6ZTtcbiAgICAgIHAgPSBuO1xuICAgICAgZG8ge1xuICAgICAgICBtID0gcy5oZWFkWy0tcF07XG4gICAgICAgIHMuaGVhZFtwXSA9IChtID49IF93X3NpemUgPyBtIC0gX3dfc2l6ZSA6IDApO1xuICAgICAgfSB3aGlsZSAoLS1uKTtcblxuICAgICAgbiA9IF93X3NpemU7XG4gICAgICBwID0gbjtcbiAgICAgIGRvIHtcbiAgICAgICAgbSA9IHMucHJldlstLXBdO1xuICAgICAgICBzLnByZXZbcF0gPSAobSA+PSBfd19zaXplID8gbSAtIF93X3NpemUgOiAwKTtcbiAgICAgICAgLyogSWYgbiBpcyBub3Qgb24gYW55IGhhc2ggY2hhaW4sIHByZXZbbl0gaXMgZ2FyYmFnZSBidXRcbiAgICAgICAgICogaXRzIHZhbHVlIHdpbGwgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAgICovXG4gICAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgICBtb3JlICs9IF93X3NpemU7XG4gICAgfVxuICAgIGlmIChzLnN0cm0uYXZhaWxfaW4gPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIElmIHRoZXJlIHdhcyBubyBzbGlkaW5nOlxuICAgICAqICAgIHN0cnN0YXJ0IDw9IFdTSVpFK01BWF9ESVNULTEgJiYgbG9va2FoZWFkIDw9IE1JTl9MT09LQUhFQUQgLSAxICYmXG4gICAgICogICAgbW9yZSA9PSB3aW5kb3dfc2l6ZSAtIGxvb2thaGVhZCAtIHN0cnN0YXJ0XG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIChNSU5fTE9PS0FIRUFELTEgKyBXU0laRSArIE1BWF9ESVNULTEpXG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIDIqV1NJWkUgKyAyXG4gICAgICogSW4gdGhlIEJJR19NRU0gb3IgTU1BUCBjYXNlIChub3QgeWV0IHN1cHBvcnRlZCksXG4gICAgICogICB3aW5kb3dfc2l6ZSA9PSBpbnB1dF9zaXplICsgTUlOX0xPT0tBSEVBRCAgJiZcbiAgICAgKiAgIHN0cnN0YXJ0ICsgcy0+bG9va2FoZWFkIDw9IGlucHV0X3NpemUgPT4gbW9yZSA+PSBNSU5fTE9PS0FIRUFELlxuICAgICAqIE90aGVyd2lzZSwgd2luZG93X3NpemUgPT0gMipXU0laRSBzbyBtb3JlID49IDIuXG4gICAgICogSWYgdGhlcmUgd2FzIHNsaWRpbmcsIG1vcmUgPj0gV1NJWkUuIFNvIGluIGFsbCBjYXNlcywgbW9yZSA+PSAyLlxuICAgICAqL1xuICAgIC8vQXNzZXJ0KG1vcmUgPj0gMiwgXCJtb3JlIDwgMlwiKTtcbiAgICBuID0gcmVhZF9idWYocy5zdHJtLCBzLndpbmRvdywgcy5zdHJzdGFydCArIHMubG9va2FoZWFkLCBtb3JlKTtcbiAgICBzLmxvb2thaGVhZCArPSBuO1xuXG4gICAgLyogSW5pdGlhbGl6ZSB0aGUgaGFzaCB2YWx1ZSBub3cgdGhhdCB3ZSBoYXZlIHNvbWUgaW5wdXQ6ICovXG4gICAgaWYgKHMubG9va2FoZWFkICsgcy5pbnNlcnQgPj0gTUlOX01BVENIKSB7XG4gICAgICBzdHIgPSBzLnN0cnN0YXJ0IC0gcy5pbnNlcnQ7XG4gICAgICBzLmluc19oID0gcy53aW5kb3dbc3RyXTtcblxuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyAxXSk7ICovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzdHIgKyAxXSkgJiBzLmhhc2hfbWFzaztcbi8vI2lmIE1JTl9NQVRDSCAhPSAzXG4vLyAgICAgICAgQ2FsbCB1cGRhdGVfaGFzaCgpIE1JTl9NQVRDSC0zIG1vcmUgdGltZXNcbi8vI2VuZGlmXG4gICAgICB3aGlsZSAocy5pbnNlcnQpIHtcbiAgICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyBNSU5fTUFUQ0gtMV0pOyAqL1xuICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzdHIgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcblxuICAgICAgICBzLnByZXZbc3RyICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzdHI7XG4gICAgICAgIHN0cisrO1xuICAgICAgICBzLmluc2VydC0tO1xuICAgICAgICBpZiAocy5sb29rYWhlYWQgKyBzLmluc2VydCA8IE1JTl9NQVRDSCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZSB3aG9sZSBpbnB1dCBoYXMgbGVzcyB0aGFuIE1JTl9NQVRDSCBieXRlcywgaW5zX2ggaXMgZ2FyYmFnZSxcbiAgICAgKiBidXQgdGhpcyBpcyBub3QgaW1wb3J0YW50IHNpbmNlIG9ubHkgbGl0ZXJhbCBieXRlcyB3aWxsIGJlIGVtaXR0ZWQuXG4gICAgICovXG5cbiAgfSB3aGlsZSAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIHMuc3RybS5hdmFpbF9pbiAhPT0gMCk7XG5cbiAgLyogSWYgdGhlIFdJTl9JTklUIGJ5dGVzIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBoYXZlIG5ldmVyIGJlZW5cbiAgICogd3JpdHRlbiwgdGhlbiB6ZXJvIHRob3NlIGJ5dGVzIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayByZXBvcnRzIG9mXG4gICAqIHRoZSB1c2Ugb2YgdW5pbml0aWFsaXplZCAob3IgdW5pbml0aWFsaXNlZCBhcyBKdWxpYW4gd3JpdGVzKSBieXRlcyBieVxuICAgKiB0aGUgbG9uZ2VzdCBtYXRjaCByb3V0aW5lcy4gIFVwZGF0ZSB0aGUgaGlnaCB3YXRlciBtYXJrIGZvciB0aGUgbmV4dFxuICAgKiB0aW1lIHRocm91Z2ggaGVyZS4gIFdJTl9JTklUIGlzIHNldCB0byBNQVhfTUFUQ0ggc2luY2UgdGhlIGxvbmdlc3QgbWF0Y2hcbiAgICogcm91dGluZXMgYWxsb3cgc2Nhbm5pbmcgdG8gc3Ryc3RhcnQgKyBNQVhfTUFUQ0gsIGlnbm9yaW5nIGxvb2thaGVhZC5cbiAgICovXG4vLyAgaWYgKHMuaGlnaF93YXRlciA8IHMud2luZG93X3NpemUpIHtcbi8vICAgIHZhciBjdXJyID0gcy5zdHJzdGFydCArIHMubG9va2FoZWFkO1xuLy8gICAgdmFyIGluaXQgPSAwO1xuLy9cbi8vICAgIGlmIChzLmhpZ2hfd2F0ZXIgPCBjdXJyKSB7XG4vLyAgICAgIC8qIFByZXZpb3VzIGhpZ2ggd2F0ZXIgbWFyayBiZWxvdyBjdXJyZW50IGRhdGEgLS0gemVybyBXSU5fSU5JVFxuLy8gICAgICAgKiBieXRlcyBvciB1cCB0byBlbmQgb2Ygd2luZG93LCB3aGljaGV2ZXIgaXMgbGVzcy5cbi8vICAgICAgICovXG4vLyAgICAgIGluaXQgPSBzLndpbmRvd19zaXplIC0gY3Vycjtcbi8vICAgICAgaWYgKGluaXQgPiBXSU5fSU5JVClcbi8vICAgICAgICBpbml0ID0gV0lOX0lOSVQ7XG4vLyAgICAgIHptZW16ZXJvKHMtPndpbmRvdyArIGN1cnIsICh1bnNpZ25lZClpbml0KTtcbi8vICAgICAgcy0+aGlnaF93YXRlciA9IGN1cnIgKyBpbml0O1xuLy8gICAgfVxuLy8gICAgZWxzZSBpZiAocy0+aGlnaF93YXRlciA8ICh1bGcpY3VyciArIFdJTl9JTklUKSB7XG4vLyAgICAgIC8qIEhpZ2ggd2F0ZXIgbWFyayBhdCBvciBhYm92ZSBjdXJyZW50IGRhdGEsIGJ1dCBiZWxvdyBjdXJyZW50IGRhdGFcbi8vICAgICAgICogcGx1cyBXSU5fSU5JVCAtLSB6ZXJvIG91dCB0byBjdXJyZW50IGRhdGEgcGx1cyBXSU5fSU5JVCwgb3IgdXBcbi8vICAgICAgICogdG8gZW5kIG9mIHdpbmRvdywgd2hpY2hldmVyIGlzIGxlc3MuXG4vLyAgICAgICAqL1xuLy8gICAgICBpbml0ID0gKHVsZyljdXJyICsgV0lOX0lOSVQgLSBzLT5oaWdoX3dhdGVyO1xuLy8gICAgICBpZiAoaW5pdCA+IHMtPndpbmRvd19zaXplIC0gcy0+aGlnaF93YXRlcilcbi8vICAgICAgICBpbml0ID0gcy0+d2luZG93X3NpemUgLSBzLT5oaWdoX3dhdGVyO1xuLy8gICAgICB6bWVtemVybyhzLT53aW5kb3cgKyBzLT5oaWdoX3dhdGVyLCAodW5zaWduZWQpaW5pdCk7XG4vLyAgICAgIHMtPmhpZ2hfd2F0ZXIgKz0gaW5pdDtcbi8vICAgIH1cbi8vICB9XG4vL1xuLy8gIEFzc2VydCgodWxnKXMtPnN0cnN0YXJ0IDw9IHMtPndpbmRvd19zaXplIC0gTUlOX0xPT0tBSEVBRCxcbi8vICAgIFwibm90IGVub3VnaCByb29tIGZvciBzZWFyY2hcIik7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weSB3aXRob3V0IGNvbXByZXNzaW9uIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm5cbiAqIHRoZSBjdXJyZW50IGJsb2NrIHN0YXRlLlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBpbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgc2luY2VcbiAqIHVuY29tcHJlc3NpYmxlIGRhdGEgaXMgcHJvYmFibHkgbm90IHVzZWZ1bC4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkXG4gKiBvbmx5IGZvciB0aGUgbGV2ZWw9MCBjb21wcmVzc2lvbiBvcHRpb24uXG4gKiBOT1RFOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBvcHRpbWl6ZWQgdG8gYXZvaWQgZXh0cmEgY29weWluZyBmcm9tXG4gKiB3aW5kb3cgdG8gcGVuZGluZ19idWYuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfc3RvcmVkKHMsIGZsdXNoKSB7XG4gIC8qIFN0b3JlZCBibG9ja3MgYXJlIGxpbWl0ZWQgdG8gMHhmZmZmIGJ5dGVzLCBwZW5kaW5nX2J1ZiBpcyBsaW1pdGVkXG4gICAqIHRvIHBlbmRpbmdfYnVmX3NpemUsIGFuZCBlYWNoIHN0b3JlZCBibG9jayBoYXMgYSA1IGJ5dGUgaGVhZGVyOlxuICAgKi9cbiAgdmFyIG1heF9ibG9ja19zaXplID0gMHhmZmZmO1xuXG4gIGlmIChtYXhfYmxvY2tfc2l6ZSA+IHMucGVuZGluZ19idWZfc2l6ZSAtIDUpIHtcbiAgICBtYXhfYmxvY2tfc2l6ZSA9IHMucGVuZGluZ19idWZfc2l6ZSAtIDU7XG4gIH1cblxuICAvKiBDb3B5IGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSBpbnB1dCB0byBvdXRwdXQ6ICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBGaWxsIHRoZSB3aW5kb3cgYXMgbXVjaCBhcyBwb3NzaWJsZTogKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPD0gMSkge1xuXG4gICAgICAvL0Fzc2VydChzLT5zdHJzdGFydCA8IHMtPndfc2l6ZStNQVhfRElTVChzKSB8fFxuICAgICAgLy8gIHMtPmJsb2NrX3N0YXJ0ID49IChsb25nKXMtPndfc2l6ZSwgXCJzbGlkZSB0b28gbGF0ZVwiKTtcbi8vICAgICAgaWYgKCEocy5zdHJzdGFydCA8IHMud19zaXplICsgKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkgfHxcbi8vICAgICAgICBzLmJsb2NrX3N0YXJ0ID49IHMud19zaXplKSkge1xuLy8gICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJzbGlkZSB0b28gbGF0ZVwiKTtcbi8vICAgICAgfVxuXG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuXG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cbiAgICAvL0Fzc2VydChzLT5ibG9ja19zdGFydCA+PSAwTCwgXCJibG9jayBnb25lXCIpO1xuLy8gICAgaWYgKHMuYmxvY2tfc3RhcnQgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJibG9jayBnb25lXCIpO1xuXG4gICAgcy5zdHJzdGFydCArPSBzLmxvb2thaGVhZDtcbiAgICBzLmxvb2thaGVhZCA9IDA7XG5cbiAgICAvKiBFbWl0IGEgc3RvcmVkIGJsb2NrIGlmIHBlbmRpbmdfYnVmIHdpbGwgYmUgZnVsbDogKi9cbiAgICB2YXIgbWF4X3N0YXJ0ID0gcy5ibG9ja19zdGFydCArIG1heF9ibG9ja19zaXplO1xuXG4gICAgaWYgKHMuc3Ryc3RhcnQgPT09IDAgfHwgcy5zdHJzdGFydCA+PSBtYXhfc3RhcnQpIHtcbiAgICAgIC8qIHN0cnN0YXJ0ID09IDAgaXMgcG9zc2libGUgd2hlbiB3cmFwYXJvdW5kIG9uIDE2LWJpdCBtYWNoaW5lICovXG4gICAgICBzLmxvb2thaGVhZCA9IHMuc3Ryc3RhcnQgLSBtYXhfc3RhcnQ7XG4gICAgICBzLnN0cnN0YXJ0ID0gbWF4X3N0YXJ0O1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cblxuXG4gICAgfVxuICAgIC8qIEZsdXNoIGlmIHdlIG1heSBoYXZlIHRvIHNsaWRlLCBvdGhlcndpc2UgYmxvY2tfc3RhcnQgbWF5IGJlY29tZVxuICAgICAqIG5lZ2F0aXZlIGFuZCB0aGUgZGF0YSB3aWxsIGJlIGdvbmU6XG4gICAgICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0ID49IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuXG4gIHMuaW5zZXJ0ID0gMDtcblxuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cblxuICBpZiAocy5zdHJzdGFydCA+IHMuYmxvY2tfc3RhcnQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cblxuICByZXR1cm4gQlNfTkVFRF9NT1JFO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXByZXNzIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm4gdGhlIGN1cnJlbnRcbiAqIGJsb2NrIHN0YXRlLlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBwZXJmb3JtIGxhenkgZXZhbHVhdGlvbiBvZiBtYXRjaGVzIGFuZCBpbnNlcnRzXG4gKiBuZXcgc3RyaW5ncyBpbiB0aGUgZGljdGlvbmFyeSBvbmx5IGZvciB1bm1hdGNoZWQgc3RyaW5ncyBvciBmb3Igc2hvcnRcbiAqIG1hdGNoZXMuIEl0IGlzIHVzZWQgb25seSBmb3IgdGhlIGZhc3QgY29tcHJlc3Npb24gb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9mYXN0KHMsIGZsdXNoKSB7XG4gIHZhciBoYXNoX2hlYWQ7ICAgICAgICAvKiBoZWFkIG9mIHRoZSBoYXNoIGNoYWluICovXG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGJyZWFrOyAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcbiAgICAgKi9cbiAgICBoYXNoX2hlYWQgPSAwLypOSUwqLztcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgLyoqKi9cbiAgICB9XG5cbiAgICAvKiBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuICAgICAqIEF0IHRoaXMgcG9pbnQgd2UgaGF2ZSBhbHdheXMgbWF0Y2hfbGVuZ3RoIDwgTUlOX01BVENIXG4gICAgICovXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgKChzLnN0cnN0YXJ0IC0gaGFzaF9oZWFkKSA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkpIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKHMsIGhhc2hfaGVhZCk7XG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuICAgIH1cbiAgICBpZiAocy5tYXRjaF9sZW5ndGggPj0gTUlOX01BVENIKSB7XG4gICAgICAvLyBjaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCk7IC8vIGZvciBkZWJ1ZyBvbmx5XG5cbiAgICAgIC8qKiogX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cbiAgICAgIHMubG9va2FoZWFkIC09IHMubWF0Y2hfbGVuZ3RoO1xuXG4gICAgICAvKiBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoXG4gICAgICAgKiBpcyBub3QgdG9vIGxhcmdlLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgICAgICovXG4gICAgICBpZiAocy5tYXRjaF9sZW5ndGggPD0gcy5tYXhfbGF6eV9tYXRjaC8qbWF4X2luc2VydF9sZW5ndGgqLyAmJiBzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGgtLTsgLyogc3RyaW5nIGF0IHN0cnN0YXJ0IGFscmVhZHkgaW4gdGFibGUgKi9cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgLyogc3Ryc3RhcnQgbmV2ZXIgZXhjZWVkcyBXU0laRS1NQVhfTUFUQ0gsIHNvIHRoZXJlIGFyZVxuICAgICAgICAgICAqIGFsd2F5cyBNSU5fTUFUQ0ggYnl0ZXMgYWhlYWQuXG4gICAgICAgICAgICovXG4gICAgICAgIH0gd2hpbGUgKC0tcy5tYXRjaF9sZW5ndGggIT09IDApO1xuICAgICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICB9IGVsc2VcbiAgICAgIHtcbiAgICAgICAgcy5zdHJzdGFydCArPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgICAgICBzLmluc19oID0gcy53aW5kb3dbcy5zdHJzdGFydF07XG4gICAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQrMV0pOyAqL1xuICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgMV0pICYgcy5oYXNoX21hc2s7XG5cbi8vI2lmIE1JTl9NQVRDSCAhPSAzXG4vLyAgICAgICAgICAgICAgICBDYWxsIFVQREFURV9IQVNIKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgICAgLyogSWYgbG9va2FoZWFkIDwgTUlOX01BVENILCBpbnNfaCBpcyBnYXJiYWdlLCBidXQgaXQgZG9lcyBub3RcbiAgICAgICAgICogbWF0dGVyIHNpbmNlIGl0IHdpbGwgYmUgcmVjb21wdXRlZCBhdCBuZXh0IGRlZmxhdGUgY2FsbC5cbiAgICAgICAgICovXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy53aW5kb3dbcy5zdHJzdGFydF0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcblxuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICB9XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAoKHMuc3Ryc3RhcnQgPCAoTUlOX01BVENIIC0gMSkpID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDEpO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2FtZSBhcyBhYm92ZSwgYnV0IGFjaGlldmVzIGJldHRlciBjb21wcmVzc2lvbi4gV2UgdXNlIGEgbGF6eVxuICogZXZhbHVhdGlvbiBmb3IgbWF0Y2hlczogYSBtYXRjaCBpcyBmaW5hbGx5IGFkb3B0ZWQgb25seSBpZiB0aGVyZSBpc1xuICogbm8gYmV0dGVyIG1hdGNoIGF0IHRoZSBuZXh0IHdpbmRvdyBwb3NpdGlvbi5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9zbG93KHMsIGZsdXNoKSB7XG4gIHZhciBoYXNoX2hlYWQ7ICAgICAgICAgIC8qIGhlYWQgb2YgaGFzaCBjaGFpbiAqL1xuICB2YXIgYmZsdXNoOyAgICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgdmFyIG1heF9pbnNlcnQ7XG5cbiAgLyogUHJvY2VzcyB0aGUgaW5wdXQgYmxvY2suICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuICAgICAqIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgaGFzaF9oZWFkID0gMC8qTklMKi87XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgIC8qKiovXG4gICAgfVxuXG4gICAgLyogRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cbiAgICAgKi9cbiAgICBzLnByZXZfbGVuZ3RoID0gcy5tYXRjaF9sZW5ndGg7XG4gICAgcy5wcmV2X21hdGNoID0gcy5tYXRjaF9zdGFydDtcbiAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cbiAgICBpZiAoaGFzaF9oZWFkICE9PSAwLypOSUwqLyAmJiBzLnByZXZfbGVuZ3RoIDwgcy5tYXhfbGF6eV9tYXRjaCAmJlxuICAgICAgICBzLnN0cnN0YXJ0IC0gaGFzaF9oZWFkIDw9IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpLypNQVhfRElTVChzKSovKSB7XG4gICAgICAvKiBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuICAgICAgICogb2Ygd2luZG93IGluZGV4IDAgKGluIHBhcnRpY3VsYXIgd2UgaGF2ZSB0byBhdm9pZCBhIG1hdGNoXG4gICAgICAgKiBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG4gICAgICAgKi9cbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gbG9uZ2VzdF9tYXRjaChzLCBoYXNoX2hlYWQpO1xuICAgICAgLyogbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnQgKi9cblxuICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoIDw9IDUgJiZcbiAgICAgICAgIChzLnN0cmF0ZWd5ID09PSBaX0ZJTFRFUkVEIHx8IChzLm1hdGNoX2xlbmd0aCA9PT0gTUlOX01BVENIICYmIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0ID4gNDA5Ni8qVE9PX0ZBUiovKSkpIHtcblxuICAgICAgICAvKiBJZiBwcmV2X21hdGNoIGlzIGFsc28gTUlOX01BVENILCBtYXRjaF9zdGFydCBpcyBnYXJiYWdlXG4gICAgICAgICAqIGJ1dCB3ZSB3aWxsIGlnbm9yZSB0aGUgY3VycmVudCBtYXRjaCBhbnl3YXkuXG4gICAgICAgICAqL1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZXJlIHdhcyBhIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBzdGVwIGFuZCB0aGUgY3VycmVudFxuICAgICAqIG1hdGNoIGlzIG5vdCBiZXR0ZXIsIG91dHB1dCB0aGUgcHJldmlvdXMgbWF0Y2g6XG4gICAgICovXG4gICAgaWYgKHMucHJldl9sZW5ndGggPj0gTUlOX01BVENIICYmIHMubWF0Y2hfbGVuZ3RoIDw9IHMucHJldl9sZW5ndGgpIHtcbiAgICAgIG1heF9pbnNlcnQgPSBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQgLSBNSU5fTUFUQ0g7XG4gICAgICAvKiBEbyBub3QgaW5zZXJ0IHN0cmluZ3MgaW4gaGFzaCB0YWJsZSBiZXlvbmQgdGhpcy4gKi9cblxuICAgICAgLy9jaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LTEsIHMucHJldl9tYXRjaCwgcy5wcmV2X2xlbmd0aCk7XG5cbiAgICAgIC8qKipfdHJfdGFsbHlfZGlzdChzLCBzLnN0cnN0YXJ0IC0gMSAtIHMucHJldl9tYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgIHMucHJldl9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7KioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIHMuc3Ryc3RhcnQgLSAxIC0gcy5wcmV2X21hdGNoLCBzLnByZXZfbGVuZ3RoIC0gTUlOX01BVENIKTtcbiAgICAgIC8qIEluc2VydCBpbiBoYXNoIHRhYmxlIGFsbCBzdHJpbmdzIHVwIHRvIHRoZSBlbmQgb2YgdGhlIG1hdGNoLlxuICAgICAgICogc3Ryc3RhcnQtMSBhbmQgc3Ryc3RhcnQgYXJlIGFscmVhZHkgaW5zZXJ0ZWQuIElmIHRoZXJlIGlzIG5vdFxuICAgICAgICogZW5vdWdoIGxvb2thaGVhZCwgdGhlIGxhc3QgdHdvIHN0cmluZ3MgYXJlIG5vdCBpbnNlcnRlZCBpblxuICAgICAgICogdGhlIGhhc2ggdGFibGUuXG4gICAgICAgKi9cbiAgICAgIHMubG9va2FoZWFkIC09IHMucHJldl9sZW5ndGggLSAxO1xuICAgICAgcy5wcmV2X2xlbmd0aCAtPSAyO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoKytzLnN0cnN0YXJ0IDw9IG1heF9pbnNlcnQpIHtcbiAgICAgICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgICAgIC8qKiovXG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKC0tcy5wcmV2X2xlbmd0aCAhPT0gMCk7XG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG5cbiAgICAgIGlmIChiZmx1c2gpIHtcbiAgICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgICB9XG4gICAgICAgIC8qKiovXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHMubWF0Y2hfYXZhaWxhYmxlKSB7XG4gICAgICAvKiBJZiB0aGVyZSB3YXMgbm8gbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHBvc2l0aW9uLCBvdXRwdXQgYVxuICAgICAgICogc2luZ2xlIGxpdGVyYWwuIElmIHRoZXJlIHdhcyBhIG1hdGNoIGJ1dCB0aGUgY3VycmVudCBtYXRjaFxuICAgICAgICogaXMgbG9uZ2VyLCB0cnVuY2F0ZSB0aGUgcHJldmlvdXMgbWF0Y2ggdG8gYSBzaW5nbGUgbGl0ZXJhbC5cbiAgICAgICAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnQtMV0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0LTFdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLX09OTFkocywgMCkgKioqL1xuICAgICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH1cbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUaGVyZSBpcyBubyBwcmV2aW91cyBtYXRjaCB0byBjb21wYXJlIHdpdGgsIHdhaXQgZm9yXG4gICAgICAgKiB0aGUgbmV4dCBzdGVwIHRvIGRlY2lkZS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9hdmFpbGFibGUgPSAxO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGZsdXNoICE9IFpfTk9fRkxVU0gsIFwibm8gZmx1c2g/XCIpO1xuICBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0LTFdLCBiZmx1c2gpOyAqKiovXG4gICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnQgLSAxXSk7XG5cbiAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIH1cbiAgcy5pbnNlcnQgPSBzLnN0cnN0YXJ0IDwgTUlOX01BVENIIC0gMSA/IHMuc3Ryc3RhcnQgOiBNSU5fTUFUQ0ggLSAxO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cblxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZvciBaX1JMRSwgc2ltcGx5IGxvb2sgZm9yIHJ1bnMgb2YgYnl0ZXMsIGdlbmVyYXRlIG1hdGNoZXMgb25seSBvZiBkaXN0YW5jZVxuICogb25lLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS4gIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mXG4gKiBkZWZsYXRlIHN3aXRjaGVzIGF3YXkgZnJvbSBaX1JMRS4pXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfcmxlKHMsIGZsdXNoKSB7XG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG4gIHZhciBwcmV2OyAgICAgICAgICAgICAgLyogYnl0ZSBhdCBkaXN0YW5jZSBvbmUgdG8gbWF0Y2ggKi9cbiAgdmFyIHNjYW4sIHN0cmVuZDsgICAgICAvKiBzY2FuIGdvZXMgdXAgdG8gc3RyZW5kIGZvciBsZW5ndGggb2YgcnVuICovXG5cbiAgdmFyIF93aW4gPSBzLndpbmRvdztcblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIGxvbmdlc3QgcnVuLCBwbHVzIG9uZSBmb3IgdGhlIHVucm9sbGVkIGxvb3AuXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDw9IE1BWF9NQVRDSCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPD0gTUFYX01BVENIICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBTZWUgaG93IG1hbnkgdGltZXMgdGhlIHByZXZpb3VzIGJ5dGUgcmVwZWF0cyAqL1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIICYmIHMuc3Ryc3RhcnQgPiAwKSB7XG4gICAgICBzY2FuID0gcy5zdHJzdGFydCAtIDE7XG4gICAgICBwcmV2ID0gX3dpbltzY2FuXTtcbiAgICAgIGlmIChwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSkge1xuICAgICAgICBzdHJlbmQgPSBzLnN0cnN0YXJ0ICsgTUFYX01BVENIO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgLypqc2hpbnQgbm9lbXB0eTpmYWxzZSovXG4gICAgICAgIH0gd2hpbGUgKHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgc2NhbiA8IHN0cmVuZCk7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuICAgICAgICBpZiAocy5tYXRjaF9sZW5ndGggPiBzLmxvb2thaGVhZCkge1xuICAgICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gcy5sb29rYWhlYWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQXNzZXJ0KHNjYW4gPD0gcy0+d2luZG93Kyh1SW50KShzLT53aW5kb3dfc2l6ZS0xKSwgXCJ3aWxkIHNjYW5cIik7XG4gICAgfVxuXG4gICAgLyogRW1pdCBtYXRjaCBpZiBoYXZlIHJ1biBvZiBNSU5fTUFUQ0ggb3IgbG9uZ2VyLCBlbHNlIGVtaXQgbGl0ZXJhbCAqL1xuICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8vY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydCwgcy5zdHJzdGFydCAtIDEsIHMubWF0Y2hfbGVuZ3RoKTtcblxuICAgICAgLyoqKiBfdHJfdGFsbHlfZGlzdChzLCAxLCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDEsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuICAgICAgcy5sb29rYWhlYWQgLT0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICBzLnN0cnN0YXJ0ICs9IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBObyBtYXRjaCwgb3V0cHV0IGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydF0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcblxuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICB9XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAwO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRm9yIFpfSFVGRk1BTl9PTkxZLCBkbyBub3QgbG9vayBmb3IgbWF0Y2hlcy4gIERvIG5vdCBtYWludGFpbiBhIGhhc2ggdGFibGUuXG4gKiAoSXQgd2lsbCBiZSByZWdlbmVyYXRlZCBpZiB0aGlzIHJ1biBvZiBkZWZsYXRlIHN3aXRjaGVzIGF3YXkgZnJvbSBIdWZmbWFuLilcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9odWZmKHMsIGZsdXNoKSB7XG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIGEgbGl0ZXJhbCB0byB3cml0ZS4gKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7ICAgICAgLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBPdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnRdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcbiAgICBzLmxvb2thaGVhZC0tO1xuICAgIHMuc3Ryc3RhcnQrKztcbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogVmFsdWVzIGZvciBtYXhfbGF6eV9tYXRjaCwgZ29vZF9tYXRjaCBhbmQgbWF4X2NoYWluX2xlbmd0aCwgZGVwZW5kaW5nIG9uXG4gKiB0aGUgZGVzaXJlZCBwYWNrIGxldmVsICgwLi45KS4gVGhlIHZhbHVlcyBnaXZlbiBiZWxvdyBoYXZlIGJlZW4gdHVuZWQgdG9cbiAqIGV4Y2x1ZGUgd29yc3QgY2FzZSBwZXJmb3JtYW5jZSBmb3IgcGF0aG9sb2dpY2FsIGZpbGVzLiBCZXR0ZXIgdmFsdWVzIG1heSBiZVxuICogZm91bmQgZm9yIHNwZWNpZmljIGZpbGVzLlxuICovXG5mdW5jdGlvbiBDb25maWcoZ29vZF9sZW5ndGgsIG1heF9sYXp5LCBuaWNlX2xlbmd0aCwgbWF4X2NoYWluLCBmdW5jKSB7XG4gIHRoaXMuZ29vZF9sZW5ndGggPSBnb29kX2xlbmd0aDtcbiAgdGhpcy5tYXhfbGF6eSA9IG1heF9sYXp5O1xuICB0aGlzLm5pY2VfbGVuZ3RoID0gbmljZV9sZW5ndGg7XG4gIHRoaXMubWF4X2NoYWluID0gbWF4X2NoYWluO1xuICB0aGlzLmZ1bmMgPSBmdW5jO1xufVxuXG52YXIgY29uZmlndXJhdGlvbl90YWJsZTtcblxuY29uZmlndXJhdGlvbl90YWJsZSA9IFtcbiAgLyogICAgICBnb29kIGxhenkgbmljZSBjaGFpbiAqL1xuICBuZXcgQ29uZmlnKDAsIDAsIDAsIDAsIGRlZmxhdGVfc3RvcmVkKSwgICAgICAgICAgLyogMCBzdG9yZSBvbmx5ICovXG4gIG5ldyBDb25maWcoNCwgNCwgOCwgNCwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgICAvKiAxIG1heCBzcGVlZCwgbm8gbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoNCwgNSwgMTYsIDgsIGRlZmxhdGVfZmFzdCksICAgICAgICAgICAvKiAyICovXG4gIG5ldyBDb25maWcoNCwgNiwgMzIsIDMyLCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAvKiAzICovXG5cbiAgbmV3IENvbmZpZyg0LCA0LCAxNiwgMTYsIGRlZmxhdGVfc2xvdyksICAgICAgICAgIC8qIDQgbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDMyLCAzMiwgZGVmbGF0ZV9zbG93KSwgICAgICAgICAvKiA1ICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDEyOCwgMTI4LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA2ICovXG4gIG5ldyBDb25maWcoOCwgMzIsIDEyOCwgMjU2LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA3ICovXG4gIG5ldyBDb25maWcoMzIsIDEyOCwgMjU4LCAxMDI0LCBkZWZsYXRlX3Nsb3cpLCAgICAvKiA4ICovXG4gIG5ldyBDb25maWcoMzIsIDI1OCwgMjU4LCA0MDk2LCBkZWZsYXRlX3Nsb3cpICAgICAvKiA5IG1heCBjb21wcmVzc2lvbiAqL1xuXTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgdGhlIFwibG9uZ2VzdCBtYXRjaFwiIHJvdXRpbmVzIGZvciBhIG5ldyB6bGliIHN0cmVhbVxuICovXG5mdW5jdGlvbiBsbV9pbml0KHMpIHtcbiAgcy53aW5kb3dfc2l6ZSA9IDIgKiBzLndfc2l6ZTtcblxuICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gIC8qIFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnM6XG4gICAqL1xuICBzLm1heF9sYXp5X21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfbGF6eTtcbiAgcy5nb29kX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5nb29kX2xlbmd0aDtcbiAgcy5uaWNlX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5uaWNlX2xlbmd0aDtcbiAgcy5tYXhfY2hhaW5fbGVuZ3RoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfY2hhaW47XG5cbiAgcy5zdHJzdGFydCA9IDA7XG4gIHMuYmxvY2tfc3RhcnQgPSAwO1xuICBzLmxvb2thaGVhZCA9IDA7XG4gIHMuaW5zZXJ0ID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzLmluc19oID0gMDtcbn1cblxuXG5mdW5jdGlvbiBEZWZsYXRlU3RhdGUoKSB7XG4gIHRoaXMuc3RybSA9IG51bGw7ICAgICAgICAgICAgLyogcG9pbnRlciBiYWNrIHRvIHRoaXMgemxpYiBzdHJlYW0gKi9cbiAgdGhpcy5zdGF0dXMgPSAwOyAgICAgICAgICAgIC8qIGFzIHRoZSBuYW1lIGltcGxpZXMgKi9cbiAgdGhpcy5wZW5kaW5nX2J1ZiA9IG51bGw7ICAgICAgLyogb3V0cHV0IHN0aWxsIHBlbmRpbmcgKi9cbiAgdGhpcy5wZW5kaW5nX2J1Zl9zaXplID0gMDsgIC8qIHNpemUgb2YgcGVuZGluZ19idWYgKi9cbiAgdGhpcy5wZW5kaW5nX291dCA9IDA7ICAgICAgIC8qIG5leHQgcGVuZGluZyBieXRlIHRvIG91dHB1dCB0byB0aGUgc3RyZWFtICovXG4gIHRoaXMucGVuZGluZyA9IDA7ICAgICAgICAgICAvKiBuYiBvZiBieXRlcyBpbiB0aGUgcGVuZGluZyBidWZmZXIgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAgKi9cbiAgdGhpcy5nemhlYWQgPSBudWxsOyAgICAgICAgIC8qIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uIHRvIHdyaXRlICovXG4gIHRoaXMuZ3ppbmRleCA9IDA7ICAgICAgICAgICAvKiB3aGVyZSBpbiBleHRyYSwgbmFtZSwgb3IgY29tbWVudCAqL1xuICB0aGlzLm1ldGhvZCA9IFpfREVGTEFURUQ7IC8qIGNhbiBvbmx5IGJlIERFRkxBVEVEICovXG4gIHRoaXMubGFzdF9mbHVzaCA9IC0xOyAgIC8qIHZhbHVlIG9mIGZsdXNoIHBhcmFtIGZvciBwcmV2aW91cyBkZWZsYXRlIGNhbGwgKi9cblxuICB0aGlzLndfc2l6ZSA9IDA7ICAvKiBMWjc3IHdpbmRvdyBzaXplICgzMksgYnkgZGVmYXVsdCkgKi9cbiAgdGhpcy53X2JpdHMgPSAwOyAgLyogbG9nMih3X3NpemUpICAoOC4uMTYpICovXG4gIHRoaXMud19tYXNrID0gMDsgIC8qIHdfc2l6ZSAtIDEgKi9cblxuICB0aGlzLndpbmRvdyA9IG51bGw7XG4gIC8qIFNsaWRpbmcgd2luZG93LiBJbnB1dCBieXRlcyBhcmUgcmVhZCBpbnRvIHRoZSBzZWNvbmQgaGFsZiBvZiB0aGUgd2luZG93LFxuICAgKiBhbmQgbW92ZSB0byB0aGUgZmlyc3QgaGFsZiBsYXRlciB0byBrZWVwIGEgZGljdGlvbmFyeSBvZiBhdCBsZWFzdCB3U2l6ZVxuICAgKiBieXRlcy4gV2l0aCB0aGlzIG9yZ2FuaXphdGlvbiwgbWF0Y2hlcyBhcmUgbGltaXRlZCB0byBhIGRpc3RhbmNlIG9mXG4gICAqIHdTaXplLU1BWF9NQVRDSCBieXRlcywgYnV0IHRoaXMgZW5zdXJlcyB0aGF0IElPIGlzIGFsd2F5c1xuICAgKiBwZXJmb3JtZWQgd2l0aCBhIGxlbmd0aCBtdWx0aXBsZSBvZiB0aGUgYmxvY2sgc2l6ZS5cbiAgICovXG5cbiAgdGhpcy53aW5kb3dfc2l6ZSA9IDA7XG4gIC8qIEFjdHVhbCBzaXplIG9mIHdpbmRvdzogMip3U2l6ZSwgZXhjZXB0IHdoZW4gdGhlIHVzZXIgaW5wdXQgYnVmZmVyXG4gICAqIGlzIGRpcmVjdGx5IHVzZWQgYXMgc2xpZGluZyB3aW5kb3cuXG4gICAqL1xuXG4gIHRoaXMucHJldiA9IG51bGw7XG4gIC8qIExpbmsgdG8gb2xkZXIgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGluZGV4LiBUbyBsaW1pdCB0aGUgc2l6ZSBvZiB0aGlzXG4gICAqIGFycmF5IHRvIDY0SywgdGhpcyBsaW5rIGlzIG1haW50YWluZWQgb25seSBmb3IgdGhlIGxhc3QgMzJLIHN0cmluZ3MuXG4gICAqIEFuIGluZGV4IGluIHRoaXMgYXJyYXkgaXMgdGh1cyBhIHdpbmRvdyBpbmRleCBtb2R1bG8gMzJLLlxuICAgKi9cblxuICB0aGlzLmhlYWQgPSBudWxsOyAgIC8qIEhlYWRzIG9mIHRoZSBoYXNoIGNoYWlucyBvciBOSUwuICovXG5cbiAgdGhpcy5pbnNfaCA9IDA7ICAgICAgIC8qIGhhc2ggaW5kZXggb2Ygc3RyaW5nIHRvIGJlIGluc2VydGVkICovXG4gIHRoaXMuaGFzaF9zaXplID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gaGFzaCB0YWJsZSAqL1xuICB0aGlzLmhhc2hfYml0cyA9IDA7ICAgLyogbG9nMihoYXNoX3NpemUpICovXG4gIHRoaXMuaGFzaF9tYXNrID0gMDsgICAvKiBoYXNoX3NpemUtMSAqL1xuXG4gIHRoaXMuaGFzaF9zaGlmdCA9IDA7XG4gIC8qIE51bWJlciBvZiBiaXRzIGJ5IHdoaWNoIGluc19oIG11c3QgYmUgc2hpZnRlZCBhdCBlYWNoIGlucHV0XG4gICAqIHN0ZXAuIEl0IG11c3QgYmUgc3VjaCB0aGF0IGFmdGVyIE1JTl9NQVRDSCBzdGVwcywgdGhlIG9sZGVzdFxuICAgKiBieXRlIG5vIGxvbmdlciB0YWtlcyBwYXJ0IGluIHRoZSBoYXNoIGtleSwgdGhhdCBpczpcbiAgICogICBoYXNoX3NoaWZ0ICogTUlOX01BVENIID49IGhhc2hfYml0c1xuICAgKi9cblxuICB0aGlzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgLyogV2luZG93IHBvc2l0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgb3V0cHV0IGJsb2NrLiBHZXRzXG4gICAqIG5lZ2F0aXZlIHdoZW4gdGhlIHdpbmRvdyBpcyBtb3ZlZCBiYWNrd2FyZHMuXG4gICAqL1xuXG4gIHRoaXMubWF0Y2hfbGVuZ3RoID0gMDsgICAgICAvKiBsZW5ndGggb2YgYmVzdCBtYXRjaCAqL1xuICB0aGlzLnByZXZfbWF0Y2ggPSAwOyAgICAgICAgLyogcHJldmlvdXMgbWF0Y2ggKi9cbiAgdGhpcy5tYXRjaF9hdmFpbGFibGUgPSAwOyAgIC8qIHNldCBpZiBwcmV2aW91cyBtYXRjaCBleGlzdHMgKi9cbiAgdGhpcy5zdHJzdGFydCA9IDA7ICAgICAgICAgIC8qIHN0YXJ0IG9mIHN0cmluZyB0byBpbnNlcnQgKi9cbiAgdGhpcy5tYXRjaF9zdGFydCA9IDA7ICAgICAgIC8qIHN0YXJ0IG9mIG1hdGNoaW5nIHN0cmluZyAqL1xuICB0aGlzLmxvb2thaGVhZCA9IDA7ICAgICAgICAgLyogbnVtYmVyIG9mIHZhbGlkIGJ5dGVzIGFoZWFkIGluIHdpbmRvdyAqL1xuXG4gIHRoaXMucHJldl9sZW5ndGggPSAwO1xuICAvKiBMZW5ndGggb2YgdGhlIGJlc3QgbWF0Y2ggYXQgcHJldmlvdXMgc3RlcC4gTWF0Y2hlcyBub3QgZ3JlYXRlciB0aGFuIHRoaXNcbiAgICogYXJlIGRpc2NhcmRlZC4gVGhpcyBpcyB1c2VkIGluIHRoZSBsYXp5IG1hdGNoIGV2YWx1YXRpb24uXG4gICAqL1xuXG4gIHRoaXMubWF4X2NoYWluX2xlbmd0aCA9IDA7XG4gIC8qIFRvIHNwZWVkIHVwIGRlZmxhdGlvbiwgaGFzaCBjaGFpbnMgYXJlIG5ldmVyIHNlYXJjaGVkIGJleW9uZCB0aGlzXG4gICAqIGxlbmd0aC4gIEEgaGlnaGVyIGxpbWl0IGltcHJvdmVzIGNvbXByZXNzaW9uIHJhdGlvIGJ1dCBkZWdyYWRlcyB0aGVcbiAgICogc3BlZWQuXG4gICAqL1xuXG4gIHRoaXMubWF4X2xhenlfbWF0Y2ggPSAwO1xuICAvKiBBdHRlbXB0IHRvIGZpbmQgYSBiZXR0ZXIgbWF0Y2ggb25seSB3aGVuIHRoZSBjdXJyZW50IG1hdGNoIGlzIHN0cmljdGx5XG4gICAqIHNtYWxsZXIgdGhhbiB0aGlzIHZhbHVlLiBUaGlzIG1lY2hhbmlzbSBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uXG4gICAqIGxldmVscyA+PSA0LlxuICAgKi9cbiAgLy8gVGhhdCdzIGFsaWFzIHRvIG1heF9sYXp5X21hdGNoLCBkb24ndCB1c2UgZGlyZWN0bHlcbiAgLy90aGlzLm1heF9pbnNlcnRfbGVuZ3RoID0gMDtcbiAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBub3RcbiAgICogZ3JlYXRlciB0aGFuIHRoaXMgbGVuZ3RoLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgKiBtYXhfaW5zZXJ0X2xlbmd0aCBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uIGxldmVscyA8PSAzLlxuICAgKi9cblxuICB0aGlzLmxldmVsID0gMDsgICAgIC8qIGNvbXByZXNzaW9uIGxldmVsICgxLi45KSAqL1xuICB0aGlzLnN0cmF0ZWd5ID0gMDsgIC8qIGZhdm9yIG9yIGZvcmNlIEh1ZmZtYW4gY29kaW5nKi9cblxuICB0aGlzLmdvb2RfbWF0Y2ggPSAwO1xuICAvKiBVc2UgYSBmYXN0ZXIgc2VhcmNoIHdoZW4gdGhlIHByZXZpb3VzIG1hdGNoIGlzIGxvbmdlciB0aGFuIHRoaXMgKi9cblxuICB0aGlzLm5pY2VfbWF0Y2ggPSAwOyAvKiBTdG9wIHNlYXJjaGluZyB3aGVuIGN1cnJlbnQgbWF0Y2ggZXhjZWVkcyB0aGlzICovXG5cbiAgICAgICAgICAgICAgLyogdXNlZCBieSB0cmVlcy5jOiAqL1xuXG4gIC8qIERpZG4ndCB1c2UgY3RfZGF0YSB0eXBlZGVmIGJlbG93IHRvIHN1cHByZXNzIGNvbXBpbGVyIHdhcm5pbmcgKi9cblxuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGR5bl9sdHJlZVtIRUFQX1NJWkVdOyAgIC8qIGxpdGVyYWwgYW5kIGxlbmd0aCB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2R0cmVlWzIqRF9DT0RFUysxXTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGJsX3RyZWVbMipCTF9DT0RFUysxXTsgIC8qIEh1ZmZtYW4gdHJlZSBmb3IgYml0IGxlbmd0aHMgKi9cblxuICAvLyBVc2UgZmxhdCBhcnJheSBvZiBET1VCTEUgc2l6ZSwgd2l0aCBpbnRlcmxlYXZlZCBmYXRhLFxuICAvLyBiZWNhdXNlIEpTIGRvZXMgbm90IHN1cHBvcnQgZWZmZWN0aXZlXG4gIHRoaXMuZHluX2x0cmVlICA9IG5ldyB1dGlscy5CdWYxNihIRUFQX1NJWkUgKiAyKTtcbiAgdGhpcy5keW5fZHRyZWUgID0gbmV3IHV0aWxzLkJ1ZjE2KCgyICogRF9DT0RFUyArIDEpICogMik7XG4gIHRoaXMuYmxfdHJlZSAgICA9IG5ldyB1dGlscy5CdWYxNigoMiAqIEJMX0NPREVTICsgMSkgKiAyKTtcbiAgemVybyh0aGlzLmR5bl9sdHJlZSk7XG4gIHplcm8odGhpcy5keW5fZHRyZWUpO1xuICB6ZXJvKHRoaXMuYmxfdHJlZSk7XG5cbiAgdGhpcy5sX2Rlc2MgICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGxpdGVyYWwgdHJlZSAqL1xuICB0aGlzLmRfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgZGlzdGFuY2UgdHJlZSAqL1xuICB0aGlzLmJsX2Rlc2MgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgYml0IGxlbmd0aCB0cmVlICovXG5cbiAgLy91c2ggYmxfY291bnRbTUFYX0JJVFMrMV07XG4gIHRoaXMuYmxfY291bnQgPSBuZXcgdXRpbHMuQnVmMTYoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy9pbnQgaGVhcFsyKkxfQ09ERVMrMV07ICAgICAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHRoaXMuaGVhcCA9IG5ldyB1dGlscy5CdWYxNigyICogTF9DT0RFUyArIDEpOyAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHplcm8odGhpcy5oZWFwKTtcblxuICB0aGlzLmhlYXBfbGVuID0gMDsgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGhlYXAgKi9cbiAgdGhpcy5oZWFwX21heCA9IDA7ICAgICAgICAgICAgICAgLyogZWxlbWVudCBvZiBsYXJnZXN0IGZyZXF1ZW5jeSAqL1xuICAvKiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuICAgKiBUaGUgc2FtZSBoZWFwIGFycmF5IGlzIHVzZWQgdG8gYnVpbGQgYWxsIHRyZWVzLlxuICAgKi9cblxuICB0aGlzLmRlcHRoID0gbmV3IHV0aWxzLkJ1ZjE2KDIgKiBMX0NPREVTICsgMSk7IC8vdWNoIGRlcHRoWzIqTF9DT0RFUysxXTtcbiAgemVybyh0aGlzLmRlcHRoKTtcbiAgLyogRGVwdGggb2YgZWFjaCBzdWJ0cmVlIHVzZWQgYXMgdGllIGJyZWFrZXIgZm9yIHRyZWVzIG9mIGVxdWFsIGZyZXF1ZW5jeVxuICAgKi9cblxuICB0aGlzLmxfYnVmID0gMDsgICAgICAgICAgLyogYnVmZmVyIGluZGV4IGZvciBsaXRlcmFscyBvciBsZW5ndGhzICovXG5cbiAgdGhpcy5saXRfYnVmc2l6ZSA9IDA7XG4gIC8qIFNpemUgb2YgbWF0Y2ggYnVmZmVyIGZvciBsaXRlcmFscy9sZW5ndGhzLiAgVGhlcmUgYXJlIDQgcmVhc29ucyBmb3JcbiAgICogbGltaXRpbmcgbGl0X2J1ZnNpemUgdG8gNjRLOlxuICAgKiAgIC0gZnJlcXVlbmNpZXMgY2FuIGJlIGtlcHQgaW4gMTYgYml0IGNvdW50ZXJzXG4gICAqICAgLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgdGhlIGZpcnN0IGJsb2NrLCBhbGwgaW5wdXRcbiAgICogICAgIGRhdGEgaXMgc3RpbGwgaW4gdGhlIHdpbmRvdyBzbyB3ZSBjYW4gc3RpbGwgZW1pdCBhIHN0b3JlZCBibG9jayBldmVuXG4gICAqICAgICB3aGVuIGlucHV0IGNvbWVzIGZyb20gc3RhbmRhcmQgaW5wdXQuICAoVGhpcyBjYW4gYWxzbyBiZSBkb25lIGZvclxuICAgKiAgICAgYWxsIGJsb2NrcyBpZiBsaXRfYnVmc2l6ZSBpcyBub3QgZ3JlYXRlciB0aGFuIDMySy4pXG4gICAqICAgLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgYSBmaWxlIHNtYWxsZXIgdGhhbiA2NEssIHdlIGNhblxuICAgKiAgICAgZXZlbiBlbWl0IGEgc3RvcmVkIGZpbGUgaW5zdGVhZCBvZiBhIHN0b3JlZCBibG9jayAoc2F2aW5nIDUgYnl0ZXMpLlxuICAgKiAgICAgVGhpcyBpcyBhcHBsaWNhYmxlIG9ubHkgZm9yIHppcCAobm90IGd6aXAgb3IgemxpYikuXG4gICAqICAgLSBjcmVhdGluZyBuZXcgSHVmZm1hbiB0cmVlcyBsZXNzIGZyZXF1ZW50bHkgbWF5IG5vdCBwcm92aWRlIGZhc3RcbiAgICogICAgIGFkYXB0YXRpb24gdG8gY2hhbmdlcyBpbiB0aGUgaW5wdXQgZGF0YSBzdGF0aXN0aWNzLiAoVGFrZSBmb3JcbiAgICogICAgIGV4YW1wbGUgYSBiaW5hcnkgZmlsZSB3aXRoIHBvb3JseSBjb21wcmVzc2libGUgY29kZSBmb2xsb3dlZCBieVxuICAgKiAgICAgYSBoaWdobHkgY29tcHJlc3NpYmxlIHN0cmluZyB0YWJsZS4pIFNtYWxsZXIgYnVmZmVyIHNpemVzIGdpdmVcbiAgICogICAgIGZhc3QgYWRhcHRhdGlvbiBidXQgaGF2ZSBvZiBjb3Vyc2UgdGhlIG92ZXJoZWFkIG9mIHRyYW5zbWl0dGluZ1xuICAgKiAgICAgdHJlZXMgbW9yZSBmcmVxdWVudGx5LlxuICAgKiAgIC0gSSBjYW4ndCBjb3VudCBhYm92ZSA0XG4gICAqL1xuXG4gIHRoaXMubGFzdF9saXQgPSAwOyAgICAgIC8qIHJ1bm5pbmcgaW5kZXggaW4gbF9idWYgKi9cblxuICB0aGlzLmRfYnVmID0gMDtcbiAgLyogQnVmZmVyIGluZGV4IGZvciBkaXN0YW5jZXMuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCBkX2J1ZiBhbmQgbF9idWYgaGF2ZVxuICAgKiB0aGUgc2FtZSBudW1iZXIgb2YgZWxlbWVudHMuIFRvIHVzZSBkaWZmZXJlbnQgbGVuZ3RocywgYW4gZXh0cmEgZmxhZ1xuICAgKiBhcnJheSB3b3VsZCBiZSBuZWNlc3NhcnkuXG4gICAqL1xuXG4gIHRoaXMub3B0X2xlbiA9IDA7ICAgICAgIC8qIGJpdCBsZW5ndGggb2YgY3VycmVudCBibG9jayB3aXRoIG9wdGltYWwgdHJlZXMgKi9cbiAgdGhpcy5zdGF0aWNfbGVuID0gMDsgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggc3RhdGljIHRyZWVzICovXG4gIHRoaXMubWF0Y2hlcyA9IDA7ICAgICAgIC8qIG51bWJlciBvZiBzdHJpbmcgbWF0Y2hlcyBpbiBjdXJyZW50IGJsb2NrICovXG4gIHRoaXMuaW5zZXJ0ID0gMDsgICAgICAgIC8qIGJ5dGVzIGF0IGVuZCBvZiB3aW5kb3cgbGVmdCB0byBpbnNlcnQgKi9cblxuXG4gIHRoaXMuYmlfYnVmID0gMDtcbiAgLyogT3V0cHV0IGJ1ZmZlci4gYml0cyBhcmUgaW5zZXJ0ZWQgc3RhcnRpbmcgYXQgdGhlIGJvdHRvbSAobGVhc3RcbiAgICogc2lnbmlmaWNhbnQgYml0cykuXG4gICAqL1xuICB0aGlzLmJpX3ZhbGlkID0gMDtcbiAgLyogTnVtYmVyIG9mIHZhbGlkIGJpdHMgaW4gYmlfYnVmLiAgQWxsIGJpdHMgYWJvdmUgdGhlIGxhc3QgdmFsaWQgYml0XG4gICAqIGFyZSBhbHdheXMgemVyby5cbiAgICovXG5cbiAgLy8gVXNlZCBmb3Igd2luZG93IG1lbW9yeSBpbml0LiBXZSBzYWZlbHkgaWdub3JlIGl0IGZvciBKUy4gVGhhdCBtYWtlc1xuICAvLyBzZW5zZSBvbmx5IGZvciBwb2ludGVycyBhbmQgbWVtb3J5IGNoZWNrIHRvb2xzLlxuICAvL3RoaXMuaGlnaF93YXRlciA9IDA7XG4gIC8qIEhpZ2ggd2F0ZXIgbWFyayBvZmZzZXQgaW4gd2luZG93IGZvciBpbml0aWFsaXplZCBieXRlcyAtLSBieXRlcyBhYm92ZVxuICAgKiB0aGlzIGFyZSBzZXQgdG8gemVybyBpbiBvcmRlciB0byBhdm9pZCBtZW1vcnkgY2hlY2sgd2FybmluZ3Mgd2hlblxuICAgKiBsb25nZXN0IG1hdGNoIHJvdXRpbmVzIGFjY2VzcyBieXRlcyBwYXN0IHRoZSBpbnB1dC4gIFRoaXMgaXMgdGhlblxuICAgKiB1cGRhdGVkIHRvIHRoZSBuZXcgaGlnaCB3YXRlciBtYXJrLlxuICAgKi9cbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlUmVzZXRLZWVwKHN0cm0pIHtcbiAgdmFyIHM7XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBzdHJtLnRvdGFsX2luID0gc3RybS50b3RhbF9vdXQgPSAwO1xuICBzdHJtLmRhdGFfdHlwZSA9IFpfVU5LTk9XTjtcblxuICBzID0gc3RybS5zdGF0ZTtcbiAgcy5wZW5kaW5nID0gMDtcbiAgcy5wZW5kaW5nX291dCA9IDA7XG5cbiAgaWYgKHMud3JhcCA8IDApIHtcbiAgICBzLndyYXAgPSAtcy53cmFwO1xuICAgIC8qIHdhcyBtYWRlIG5lZ2F0aXZlIGJ5IGRlZmxhdGUoLi4uLCBaX0ZJTklTSCk7ICovXG4gIH1cbiAgcy5zdGF0dXMgPSAocy53cmFwID8gSU5JVF9TVEFURSA6IEJVU1lfU1RBVEUpO1xuICBzdHJtLmFkbGVyID0gKHMud3JhcCA9PT0gMikgP1xuICAgIDAgIC8vIGNyYzMyKDAsIFpfTlVMTCwgMClcbiAgOlxuICAgIDE7IC8vIGFkbGVyMzIoMCwgWl9OVUxMLCAwKVxuICBzLmxhc3RfZmx1c2ggPSBaX05PX0ZMVVNIO1xuICB0cmVlcy5fdHJfaW5pdChzKTtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZVJlc2V0KHN0cm0pIHtcbiAgdmFyIHJldCA9IGRlZmxhdGVSZXNldEtlZXAoc3RybSk7XG4gIGlmIChyZXQgPT09IFpfT0spIHtcbiAgICBsbV9pbml0KHN0cm0uc3RhdGUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZVNldEhlYWRlcihzdHJtLCBoZWFkKSB7XG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgaWYgKHN0cm0uc3RhdGUud3JhcCAhPT0gMikgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RybS5zdGF0ZS5nemhlYWQgPSBoZWFkO1xuICByZXR1cm4gWl9PSztcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlSW5pdDIoc3RybSwgbGV2ZWwsIG1ldGhvZCwgd2luZG93Qml0cywgbWVtTGV2ZWwsIHN0cmF0ZWd5KSB7XG4gIGlmICghc3RybSkgeyAvLyA9PT0gWl9OVUxMXG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG4gIHZhciB3cmFwID0gMTtcblxuICBpZiAobGV2ZWwgPT09IFpfREVGQVVMVF9DT01QUkVTU0lPTikge1xuICAgIGxldmVsID0gNjtcbiAgfVxuXG4gIGlmICh3aW5kb3dCaXRzIDwgMCkgeyAvKiBzdXBwcmVzcyB6bGliIHdyYXBwZXIgKi9cbiAgICB3cmFwID0gMDtcbiAgICB3aW5kb3dCaXRzID0gLXdpbmRvd0JpdHM7XG4gIH1cblxuICBlbHNlIGlmICh3aW5kb3dCaXRzID4gMTUpIHtcbiAgICB3cmFwID0gMjsgICAgICAgICAgIC8qIHdyaXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkICovXG4gICAgd2luZG93Qml0cyAtPSAxNjtcbiAgfVxuXG5cbiAgaWYgKG1lbUxldmVsIDwgMSB8fCBtZW1MZXZlbCA+IE1BWF9NRU1fTEVWRUwgfHwgbWV0aG9kICE9PSBaX0RFRkxBVEVEIHx8XG4gICAgd2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1IHx8IGxldmVsIDwgMCB8fCBsZXZlbCA+IDkgfHxcbiAgICBzdHJhdGVneSA8IDAgfHwgc3RyYXRlZ3kgPiBaX0ZJWEVEKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuXG4gIGlmICh3aW5kb3dCaXRzID09PSA4KSB7XG4gICAgd2luZG93Qml0cyA9IDk7XG4gIH1cbiAgLyogdW50aWwgMjU2LWJ5dGUgd2luZG93IGJ1ZyBmaXhlZCAqL1xuXG4gIHZhciBzID0gbmV3IERlZmxhdGVTdGF0ZSgpO1xuXG4gIHN0cm0uc3RhdGUgPSBzO1xuICBzLnN0cm0gPSBzdHJtO1xuXG4gIHMud3JhcCA9IHdyYXA7XG4gIHMuZ3poZWFkID0gbnVsbDtcbiAgcy53X2JpdHMgPSB3aW5kb3dCaXRzO1xuICBzLndfc2l6ZSA9IDEgPDwgcy53X2JpdHM7XG4gIHMud19tYXNrID0gcy53X3NpemUgLSAxO1xuXG4gIHMuaGFzaF9iaXRzID0gbWVtTGV2ZWwgKyA3O1xuICBzLmhhc2hfc2l6ZSA9IDEgPDwgcy5oYXNoX2JpdHM7XG4gIHMuaGFzaF9tYXNrID0gcy5oYXNoX3NpemUgLSAxO1xuICBzLmhhc2hfc2hpZnQgPSB+figocy5oYXNoX2JpdHMgKyBNSU5fTUFUQ0ggLSAxKSAvIE1JTl9NQVRDSCk7XG5cbiAgcy53aW5kb3cgPSBuZXcgdXRpbHMuQnVmOChzLndfc2l6ZSAqIDIpO1xuICBzLmhlYWQgPSBuZXcgdXRpbHMuQnVmMTYocy5oYXNoX3NpemUpO1xuICBzLnByZXYgPSBuZXcgdXRpbHMuQnVmMTYocy53X3NpemUpO1xuXG4gIC8vIERvbid0IG5lZWQgbWVtIGluaXQgbWFnaWMgZm9yIEpTLlxuICAvL3MuaGlnaF93YXRlciA9IDA7ICAvKiBub3RoaW5nIHdyaXR0ZW4gdG8gcy0+d2luZG93IHlldCAqL1xuXG4gIHMubGl0X2J1ZnNpemUgPSAxIDw8IChtZW1MZXZlbCArIDYpOyAvKiAxNksgZWxlbWVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIHMucGVuZGluZ19idWZfc2l6ZSA9IHMubGl0X2J1ZnNpemUgKiA0O1xuXG4gIC8vb3ZlcmxheSA9ICh1c2hmICopIFpBTExPQyhzdHJtLCBzLT5saXRfYnVmc2l6ZSwgc2l6ZW9mKHVzaCkrMik7XG4gIC8vcy0+cGVuZGluZ19idWYgPSAodWNoZiAqKSBvdmVybGF5O1xuICBzLnBlbmRpbmdfYnVmID0gbmV3IHV0aWxzLkJ1Zjgocy5wZW5kaW5nX2J1Zl9zaXplKTtcblxuICAvLyBJdCBpcyBvZmZzZXQgZnJvbSBgcy5wZW5kaW5nX2J1ZmAgKHNpemUgaXMgYHMubGl0X2J1ZnNpemUgKiAyYClcbiAgLy9zLT5kX2J1ZiA9IG92ZXJsYXkgKyBzLT5saXRfYnVmc2l6ZS9zaXplb2YodXNoKTtcbiAgcy5kX2J1ZiA9IDEgKiBzLmxpdF9idWZzaXplO1xuXG4gIC8vcy0+bF9idWYgPSBzLT5wZW5kaW5nX2J1ZiArICgxK3NpemVvZih1c2gpKSpzLT5saXRfYnVmc2l6ZTtcbiAgcy5sX2J1ZiA9ICgxICsgMikgKiBzLmxpdF9idWZzaXplO1xuXG4gIHMubGV2ZWwgPSBsZXZlbDtcbiAgcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICBzLm1ldGhvZCA9IG1ldGhvZDtcblxuICByZXR1cm4gZGVmbGF0ZVJlc2V0KHN0cm0pO1xufVxuXG5mdW5jdGlvbiBkZWZsYXRlSW5pdChzdHJtLCBsZXZlbCkge1xuICByZXR1cm4gZGVmbGF0ZUluaXQyKHN0cm0sIGxldmVsLCBaX0RFRkxBVEVELCBNQVhfV0JJVFMsIERFRl9NRU1fTEVWRUwsIFpfREVGQVVMVF9TVFJBVEVHWSk7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZShzdHJtLCBmbHVzaCkge1xuICB2YXIgb2xkX2ZsdXNoLCBzO1xuICB2YXIgYmVnLCB2YWw7IC8vIGZvciBnemlwIGhlYWRlciB3cml0ZSBvbmx5XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlIHx8XG4gICAgZmx1c2ggPiBaX0JMT0NLIHx8IGZsdXNoIDwgMCkge1xuICAgIHJldHVybiBzdHJtID8gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKSA6IFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgcyA9IHN0cm0uc3RhdGU7XG5cbiAgaWYgKCFzdHJtLm91dHB1dCB8fFxuICAgICAgKCFzdHJtLmlucHV0ICYmIHN0cm0uYXZhaWxfaW4gIT09IDApIHx8XG4gICAgICAocy5zdGF0dXMgPT09IEZJTklTSF9TVEFURSAmJiBmbHVzaCAhPT0gWl9GSU5JU0gpKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCAoc3RybS5hdmFpbF9vdXQgPT09IDApID8gWl9CVUZfRVJST1IgOiBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBzLnN0cm0gPSBzdHJtOyAvKiBqdXN0IGluIGNhc2UgKi9cbiAgb2xkX2ZsdXNoID0gcy5sYXN0X2ZsdXNoO1xuICBzLmxhc3RfZmx1c2ggPSBmbHVzaDtcblxuICAvKiBXcml0ZSB0aGUgaGVhZGVyICovXG4gIGlmIChzLnN0YXR1cyA9PT0gSU5JVF9TVEFURSkge1xuXG4gICAgaWYgKHMud3JhcCA9PT0gMikgeyAvLyBHWklQIGhlYWRlclxuICAgICAgc3RybS5hZGxlciA9IDA7ICAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgICAgcHV0X2J5dGUocywgMzEpO1xuICAgICAgcHV0X2J5dGUocywgMTM5KTtcbiAgICAgIHB1dF9ieXRlKHMsIDgpO1xuICAgICAgaWYgKCFzLmd6aGVhZCkgeyAvLyBzLT5nemhlYWQgPT0gWl9OVUxMXG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgICBwdXRfYnl0ZShzLCBPU19DT0RFKTtcbiAgICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50ZXh0ID8gMSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgKHMuZ3poZWFkLmhjcmMgPyAyIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmV4dHJhID8gMCA6IDQpICtcbiAgICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5uYW1lID8gMCA6IDgpICtcbiAgICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5jb21tZW50ID8gMCA6IDE2KVxuICAgICAgICApO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC50aW1lICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDgpICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDE2KSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiAyNCkgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC5vcyAmIDB4ZmYpO1xuICAgICAgICBpZiAocy5nemhlYWQuZXh0cmEgJiYgcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmEubGVuZ3RoICYgMHhmZik7XG4gICAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLmV4dHJhLmxlbmd0aCA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmd6aGVhZC5oY3JjKSB7XG4gICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBFWFRSQV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBERUZMQVRFIGhlYWRlclxuICAgIHtcbiAgICAgIHZhciBoZWFkZXIgPSAoWl9ERUZMQVRFRCArICgocy53X2JpdHMgLSA4KSA8PCA0KSkgPDwgODtcbiAgICAgIHZhciBsZXZlbF9mbGFncyA9IC0xO1xuXG4gICAgICBpZiAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPCA2KSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocy5sZXZlbCA9PT0gNikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuICAgICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHsgaGVhZGVyIHw9IFBSRVNFVF9ESUNUOyB9XG4gICAgICBoZWFkZXIgKz0gMzEgLSAoaGVhZGVyICUgMzEpO1xuXG4gICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICBwdXRTaG9ydE1TQihzLCBoZWFkZXIpO1xuXG4gICAgICAvKiBTYXZlIHRoZSBhZGxlcjMyIG9mIHRoZSBwcmVzZXQgZGljdGlvbmFyeTogKi9cbiAgICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7XG4gICAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICAgICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gICAgICB9XG4gICAgICBzdHJtLmFkbGVyID0gMTsgLy8gYWRsZXIzMigwTCwgWl9OVUxMLCAwKTtcbiAgICB9XG4gIH1cblxuLy8jaWZkZWYgR1pJUFxuICBpZiAocy5zdGF0dXMgPT09IEVYVFJBX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmV4dHJhLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cblxuICAgICAgd2hpbGUgKHMuZ3ppbmRleCA8IChzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmZmYpKSB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmFbcy5nemluZGV4XSAmIDB4ZmYpO1xuICAgICAgICBzLmd6aW5kZXgrKztcbiAgICAgIH1cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHMuZ3ppbmRleCA9PT0gcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IE5BTUVfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gTkFNRV9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5uYW1lLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIC8vaW50IHZhbDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgYmVnID0gcy5wZW5kaW5nO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgICAgdmFsID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBzcGVjaWZpYzogbGl0dGxlIG1hZ2ljIHRvIGFkZCB6ZXJvIHRlcm1pbmF0b3IgdG8gZW5kIG9mIHN0cmluZ1xuICAgICAgICBpZiAocy5nemluZGV4IDwgcy5nemhlYWQubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICB2YWwgPSBzLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQocy5nemluZGV4KyspICYgMHhmZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHZhbCk7XG4gICAgICB9IHdoaWxlICh2YWwgIT09IDApO1xuXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IDApIHtcbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gQ09NTUVOVF9TVEFURTtcbiAgICB9XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBDT01NRU5UX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmNvbW1lbnQvKiAhPSBaX05VTEwqLykge1xuICAgICAgYmVnID0gcy5wZW5kaW5nOyAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgLy9pbnQgdmFsO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICB2YWwgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEpTIHNwZWNpZmljOiBsaXR0bGUgbWFnaWMgdG8gYWRkIHplcm8gdGVybWluYXRvciB0byBlbmQgb2Ygc3RyaW5nXG4gICAgICAgIGlmIChzLmd6aW5kZXggPCBzLmd6aGVhZC5jb21tZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHZhbCA9IHMuZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChzLmd6aW5kZXgrKykgJiAweGZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgdmFsKTtcbiAgICAgIH0gd2hpbGUgKHZhbCAhPT0gMCk7XG5cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgICBzLnN0YXR1cyA9IEhDUkNfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBIQ1JDX1NUQVRFO1xuICAgIH1cbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IEhDUkNfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgaWYgKHMucGVuZGluZyArIDIgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChzLnBlbmRpbmcgKyAyIDw9IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDgpICYgMHhmZik7XG4gICAgICAgIHN0cm0uYWRsZXIgPSAwOyAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgIH1cbiAgfVxuLy8jZW5kaWZcblxuICAvKiBGbHVzaCBhcyBtdWNoIHBlbmRpbmcgb3V0cHV0IGFzIHBvc3NpYmxlICovXG4gIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgLyogU2luY2UgYXZhaWxfb3V0IGlzIDAsIGRlZmxhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2l0aFxuICAgICAgICogbW9yZSBvdXRwdXQgc3BhY2UsIGJ1dCBwb3NzaWJseSB3aXRoIGJvdGggcGVuZGluZyBhbmRcbiAgICAgICAqIGF2YWlsX2luIGVxdWFsIHRvIHplcm8uIFRoZXJlIHdvbid0IGJlIGFueXRoaW5nIHRvIGRvLFxuICAgICAgICogYnV0IHRoaXMgaXMgbm90IGFuIGVycm9yIHNpdHVhdGlvbiBzbyBtYWtlIHN1cmUgd2VcbiAgICAgICAqIHJldHVybiBPSyBpbnN0ZWFkIG9mIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwgb2YgZGVmbGF0ZTpcbiAgICAgICAqL1xuICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICByZXR1cm4gWl9PSztcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGRvIGFuZCBhdm9pZCBkdXBsaWNhdGUgY29uc2VjdXRpdmVcbiAgICAgKiBmbHVzaGVzLiBGb3IgcmVwZWF0ZWQgYW5kIHVzZWxlc3MgY2FsbHMgd2l0aCBaX0ZJTklTSCwgd2Uga2VlcFxuICAgICAqIHJldHVybmluZyBaX1NUUkVBTV9FTkQgaW5zdGVhZCBvZiBaX0JVRl9FUlJPUi5cbiAgICAgKi9cbiAgfSBlbHNlIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIHJhbmsoZmx1c2gpIDw9IHJhbmsob2xkX2ZsdXNoKSAmJlxuICAgIGZsdXNoICE9PSBaX0ZJTklTSCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogVXNlciBtdXN0IG5vdCBwcm92aWRlIG1vcmUgaW5wdXQgYWZ0ZXIgdGhlIGZpcnN0IEZJTklTSDogKi9cbiAgaWYgKHMuc3RhdHVzID09PSBGSU5JU0hfU1RBVEUgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogU3RhcnQgYSBuZXcgYmxvY2sgb3IgY29udGludWUgdGhlIGN1cnJlbnQgb25lLlxuICAgKi9cbiAgaWYgKHN0cm0uYXZhaWxfaW4gIT09IDAgfHwgcy5sb29rYWhlYWQgIT09IDAgfHxcbiAgICAoZmx1c2ggIT09IFpfTk9fRkxVU0ggJiYgcy5zdGF0dXMgIT09IEZJTklTSF9TVEFURSkpIHtcbiAgICB2YXIgYnN0YXRlID0gKHMuc3RyYXRlZ3kgPT09IFpfSFVGRk1BTl9PTkxZKSA/IGRlZmxhdGVfaHVmZihzLCBmbHVzaCkgOlxuICAgICAgKHMuc3RyYXRlZ3kgPT09IFpfUkxFID8gZGVmbGF0ZV9ybGUocywgZmx1c2gpIDpcbiAgICAgICAgY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5mdW5jKHMsIGZsdXNoKSk7XG5cbiAgICBpZiAoYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCB8fCBic3RhdGUgPT09IEJTX0ZJTklTSF9ET05FKSB7XG4gICAgICBzLnN0YXR1cyA9IEZJTklTSF9TVEFURTtcbiAgICB9XG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfTkVFRF9NT1JFIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX1NUQVJURUQpIHtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgLyogYXZvaWQgQlVGX0VSUk9SIG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICB9XG4gICAgICByZXR1cm4gWl9PSztcbiAgICAgIC8qIElmIGZsdXNoICE9IFpfTk9fRkxVU0ggJiYgYXZhaWxfb3V0ID09IDAsIHRoZSBuZXh0IGNhbGxcbiAgICAgICAqIG9mIGRlZmxhdGUgc2hvdWxkIHVzZSB0aGUgc2FtZSBmbHVzaCBwYXJhbWV0ZXIgdG8gbWFrZSBzdXJlXG4gICAgICAgKiB0aGF0IHRoZSBmbHVzaCBpcyBjb21wbGV0ZS4gU28gd2UgZG9uJ3QgaGF2ZSB0byBvdXRwdXQgYW5cbiAgICAgICAqIGVtcHR5IGJsb2NrIGhlcmUsIHRoaXMgd2lsbCBiZSBkb25lIGF0IG5leHQgY2FsbC4gVGhpcyBhbHNvXG4gICAgICAgKiBlbnN1cmVzIHRoYXQgZm9yIGEgdmVyeSBzbWFsbCBvdXRwdXQgYnVmZmVyLCB3ZSBlbWl0IGF0IG1vc3RcbiAgICAgICAqIG9uZSBlbXB0eSBibG9jay5cbiAgICAgICAqL1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19CTE9DS19ET05FKSB7XG4gICAgICBpZiAoZmx1c2ggPT09IFpfUEFSVElBTF9GTFVTSCkge1xuICAgICAgICB0cmVlcy5fdHJfYWxpZ24ocyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmbHVzaCAhPT0gWl9CTE9DSykgeyAvKiBGVUxMX0ZMVVNIIG9yIFNZTkNfRkxVU0ggKi9cblxuICAgICAgICB0cmVlcy5fdHJfc3RvcmVkX2Jsb2NrKHMsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgLyogRm9yIGEgZnVsbCBmbHVzaCwgdGhpcyBlbXB0eSBibG9jayB3aWxsIGJlIHJlY29nbml6ZWRcbiAgICAgICAgICogYXMgYSBzcGVjaWFsIG1hcmtlciBieSBpbmZsYXRlX3N5bmMoKS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9GVUxMX0ZMVVNIKSB7XG4gICAgICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovICAgICAgICAgICAgIC8qIGZvcmdldCBoaXN0b3J5ICovXG4gICAgICAgICAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gICAgICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5pbnNlcnQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTsgLyogYXZvaWQgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICAgIHJldHVybiBaX09LO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL0Fzc2VydChzdHJtLT5hdmFpbF9vdXQgPiAwLCBcImJ1ZzJcIik7XG4gIC8vaWYgKHN0cm0uYXZhaWxfb3V0IDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiYnVnMlwiKTt9XG5cbiAgaWYgKGZsdXNoICE9PSBaX0ZJTklTSCkgeyByZXR1cm4gWl9PSzsgfVxuICBpZiAocy53cmFwIDw9IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VORDsgfVxuXG4gIC8qIFdyaXRlIHRoZSB0cmFpbGVyICovXG4gIGlmIChzLndyYXAgPT09IDIpIHtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAyNCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLnRvdGFsX2luICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAyNCkgJiAweGZmKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyID4+PiAxNik7XG4gICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gIH1cblxuICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAvKiBJZiBhdmFpbF9vdXQgaXMgemVybywgdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2FsbCBkZWZsYXRlIGFnYWluXG4gICAqIHRvIGZsdXNoIHRoZSByZXN0LlxuICAgKi9cbiAgaWYgKHMud3JhcCA+IDApIHsgcy53cmFwID0gLXMud3JhcDsgfVxuICAvKiB3cml0ZSB0aGUgdHJhaWxlciBvbmx5IG9uY2UhICovXG4gIHJldHVybiBzLnBlbmRpbmcgIT09IDAgPyBaX09LIDogWl9TVFJFQU1fRU5EO1xufVxuXG5mdW5jdGlvbiBkZWZsYXRlRW5kKHN0cm0pIHtcbiAgdmFyIHN0YXR1cztcblxuICBpZiAoIXN0cm0vKj09IFpfTlVMTCovIHx8ICFzdHJtLnN0YXRlLyo9PSBaX05VTEwqLykge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHN0YXR1cyA9IHN0cm0uc3RhdGUuc3RhdHVzO1xuICBpZiAoc3RhdHVzICE9PSBJTklUX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBFWFRSQV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gTkFNRV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQ09NTUVOVF9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gSENSQ19TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQlVTWV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gRklOSVNIX1NUQVRFXG4gICkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cbiAgc3RybS5zdGF0ZSA9IG51bGw7XG5cbiAgcmV0dXJuIHN0YXR1cyA9PT0gQlVTWV9TVEFURSA/IGVycihzdHJtLCBaX0RBVEFfRVJST1IpIDogWl9PSztcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplcyB0aGUgY29tcHJlc3Npb24gZGljdGlvbmFyeSBmcm9tIHRoZSBnaXZlbiBieXRlXG4gKiBzZXF1ZW5jZSB3aXRob3V0IHByb2R1Y2luZyBhbnkgY29tcHJlc3NlZCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVTZXREaWN0aW9uYXJ5KHN0cm0sIGRpY3Rpb25hcnkpIHtcbiAgdmFyIGRpY3RMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcblxuICB2YXIgcztcbiAgdmFyIHN0ciwgbjtcbiAgdmFyIHdyYXA7XG4gIHZhciBhdmFpbDtcbiAgdmFyIG5leHQ7XG4gIHZhciBpbnB1dDtcbiAgdmFyIHRtcERpY3Q7XG5cbiAgaWYgKCFzdHJtLyo9PSBaX05VTEwqLyB8fCAhc3RybS5zdGF0ZS8qPT0gWl9OVUxMKi8pIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzID0gc3RybS5zdGF0ZTtcbiAgd3JhcCA9IHMud3JhcDtcblxuICBpZiAod3JhcCA9PT0gMiB8fCAod3JhcCA9PT0gMSAmJiBzLnN0YXR1cyAhPT0gSU5JVF9TVEFURSkgfHwgcy5sb29rYWhlYWQpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICAvKiB3aGVuIHVzaW5nIHpsaWIgd3JhcHBlcnMsIGNvbXB1dGUgQWRsZXItMzIgZm9yIHByb3ZpZGVkIGRpY3Rpb25hcnkgKi9cbiAgaWYgKHdyYXAgPT09IDEpIHtcbiAgICAvKiBhZGxlcjMyKHN0cm0tPmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTsgKi9cbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMihzdHJtLmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHMud3JhcCA9IDA7ICAgLyogYXZvaWQgY29tcHV0aW5nIEFkbGVyLTMyIGluIHJlYWRfYnVmICovXG5cbiAgLyogaWYgZGljdGlvbmFyeSB3b3VsZCBmaWxsIHdpbmRvdywganVzdCByZXBsYWNlIHRoZSBoaXN0b3J5ICovXG4gIGlmIChkaWN0TGVuZ3RoID49IHMud19zaXplKSB7XG4gICAgaWYgKHdyYXAgPT09IDApIHsgICAgICAgICAgICAvKiBhbHJlYWR5IGVtcHR5IG90aGVyd2lzZSAqL1xuICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovXG4gICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG4gICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgcy5pbnNlcnQgPSAwO1xuICAgIH1cbiAgICAvKiB1c2UgdGhlIHRhaWwgKi9cbiAgICAvLyBkaWN0aW9uYXJ5ID0gZGljdGlvbmFyeS5zbGljZShkaWN0TGVuZ3RoIC0gcy53X3NpemUpO1xuICAgIHRtcERpY3QgPSBuZXcgdXRpbHMuQnVmOChzLndfc2l6ZSk7XG4gICAgdXRpbHMuYXJyYXlTZXQodG1wRGljdCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCAtIHMud19zaXplLCBzLndfc2l6ZSwgMCk7XG4gICAgZGljdGlvbmFyeSA9IHRtcERpY3Q7XG4gICAgZGljdExlbmd0aCA9IHMud19zaXplO1xuICB9XG4gIC8qIGluc2VydCBkaWN0aW9uYXJ5IGludG8gd2luZG93IGFuZCBoYXNoICovXG4gIGF2YWlsID0gc3RybS5hdmFpbF9pbjtcbiAgbmV4dCA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBzdHJtLmF2YWlsX2luID0gZGljdExlbmd0aDtcbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5pbnB1dCA9IGRpY3Rpb25hcnk7XG4gIGZpbGxfd2luZG93KHMpO1xuICB3aGlsZSAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgc3RyID0gcy5zdHJzdGFydDtcbiAgICBuID0gcy5sb29rYWhlYWQgLSAoTUlOX01BVENIIC0gMSk7XG4gICAgZG8ge1xuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyBNSU5fTUFUQ0gtMV0pOyAqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbc3RyICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG5cbiAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG5cbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgIHN0cisrO1xuICAgIH0gd2hpbGUgKC0tbik7XG4gICAgcy5zdHJzdGFydCA9IHN0cjtcbiAgICBzLmxvb2thaGVhZCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgZmlsbF93aW5kb3cocyk7XG4gIH1cbiAgcy5zdHJzdGFydCArPSBzLmxvb2thaGVhZDtcbiAgcy5ibG9ja19zdGFydCA9IHMuc3Ryc3RhcnQ7XG4gIHMuaW5zZXJ0ID0gcy5sb29rYWhlYWQ7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICBzdHJtLmlucHV0ID0gaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBhdmFpbDtcbiAgcy53cmFwID0gd3JhcDtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZXhwb3J0cy5kZWZsYXRlSW5pdCA9IGRlZmxhdGVJbml0O1xuZXhwb3J0cy5kZWZsYXRlSW5pdDIgPSBkZWZsYXRlSW5pdDI7XG5leHBvcnRzLmRlZmxhdGVSZXNldCA9IGRlZmxhdGVSZXNldDtcbmV4cG9ydHMuZGVmbGF0ZVJlc2V0S2VlcCA9IGRlZmxhdGVSZXNldEtlZXA7XG5leHBvcnRzLmRlZmxhdGVTZXRIZWFkZXIgPSBkZWZsYXRlU2V0SGVhZGVyO1xuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZUVuZCA9IGRlZmxhdGVFbmQ7XG5leHBvcnRzLmRlZmxhdGVTZXREaWN0aW9uYXJ5ID0gZGVmbGF0ZVNldERpY3Rpb25hcnk7XG5leHBvcnRzLmRlZmxhdGVJbmZvID0gJ3Bha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbmV4cG9ydHMuZGVmbGF0ZUJvdW5kID0gZGVmbGF0ZUJvdW5kO1xuZXhwb3J0cy5kZWZsYXRlQ29weSA9IGRlZmxhdGVDb3B5O1xuZXhwb3J0cy5kZWZsYXRlUGFyYW1zID0gZGVmbGF0ZVBhcmFtcztcbmV4cG9ydHMuZGVmbGF0ZVBlbmRpbmcgPSBkZWZsYXRlUGVuZGluZztcbmV4cG9ydHMuZGVmbGF0ZVByaW1lID0gZGVmbGF0ZVByaW1lO1xuZXhwb3J0cy5kZWZsYXRlVHVuZSA9IGRlZmxhdGVUdW5lO1xuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgMjogICAgICAnbmVlZCBkaWN0aW9uYXJ5JywgICAgIC8qIFpfTkVFRF9ESUNUICAgICAgIDIgICovXG4gIDE6ICAgICAgJ3N0cmVhbSBlbmQnLCAgICAgICAgICAvKiBaX1NUUkVBTV9FTkQgICAgICAxICAqL1xuICAwOiAgICAgICcnLCAgICAgICAgICAgICAgICAgICAgLyogWl9PSyAgICAgICAgICAgICAgMCAgKi9cbiAgJy0xJzogICAnZmlsZSBlcnJvcicsICAgICAgICAgIC8qIFpfRVJSTk8gICAgICAgICAoLTEpICovXG4gICctMic6ICAgJ3N0cmVhbSBlcnJvcicsICAgICAgICAvKiBaX1NUUkVBTV9FUlJPUiAgKC0yKSAqL1xuICAnLTMnOiAgICdkYXRhIGVycm9yJywgICAgICAgICAgLyogWl9EQVRBX0VSUk9SICAgICgtMykgKi9cbiAgJy00JzogICAnaW5zdWZmaWNpZW50IG1lbW9yeScsIC8qIFpfTUVNX0VSUk9SICAgICAoLTQpICovXG4gICctNSc6ICAgJ2J1ZmZlciBlcnJvcicsICAgICAgICAvKiBaX0JVRl9FUlJPUiAgICAgKC01KSAqL1xuICAnLTYnOiAgICdpbmNvbXBhdGlibGUgdmVyc2lvbicgLyogWl9WRVJTSU9OX0VSUk9SICgtNikgKi9cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLyogZXNsaW50LWRpc2FibGUgc3BhY2UtdW5hcnktb3BzICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vL3ZhciBaX0ZJTFRFUkVEICAgICAgICAgID0gMTtcbi8vdmFyIFpfSFVGRk1BTl9PTkxZICAgICAgPSAyO1xuLy92YXIgWl9STEUgICAgICAgICAgICAgICA9IDM7XG52YXIgWl9GSVhFRCAgICAgICAgICAgICAgID0gNDtcbi8vdmFyIFpfREVGQVVMVF9TVFJBVEVHWSAgPSAwO1xuXG4vKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG52YXIgWl9CSU5BUlkgICAgICAgICAgICAgID0gMDtcbnZhciBaX1RFWFQgICAgICAgICAgICAgICAgPSAxO1xuLy92YXIgWl9BU0NJSSAgICAgICAgICAgICA9IDE7IC8vID0gWl9URVhUXG52YXIgWl9VTktOT1dOICAgICAgICAgICAgID0gMjtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5mdW5jdGlvbiB6ZXJvKGJ1ZikgeyB2YXIgbGVuID0gYnVmLmxlbmd0aDsgd2hpbGUgKC0tbGVuID49IDApIHsgYnVmW2xlbl0gPSAwOyB9IH1cblxuLy8gRnJvbSB6dXRpbC5oXG5cbnZhciBTVE9SRURfQkxPQ0sgPSAwO1xudmFyIFNUQVRJQ19UUkVFUyA9IDE7XG52YXIgRFlOX1RSRUVTICAgID0gMjtcbi8qIFRoZSB0aHJlZSBraW5kcyBvZiBibG9jayB0eXBlICovXG5cbnZhciBNSU5fTUFUQ0ggICAgPSAzO1xudmFyIE1BWF9NQVRDSCAgICA9IDI1ODtcbi8qIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG1hdGNoIGxlbmd0aHMgKi9cblxuLy8gRnJvbSBkZWZsYXRlLmhcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW50ZXJuYWwgY29tcHJlc3Npb24gc3RhdGUuXG4gKi9cblxudmFyIExFTkdUSF9DT0RFUyAgPSAyOTtcbi8qIG51bWJlciBvZiBsZW5ndGggY29kZXMsIG5vdCBjb3VudGluZyB0aGUgc3BlY2lhbCBFTkRfQkxPQ0sgY29kZSAqL1xuXG52YXIgTElURVJBTFMgICAgICA9IDI1Njtcbi8qIG51bWJlciBvZiBsaXRlcmFsIGJ5dGVzIDAuLjI1NSAqL1xuXG52YXIgTF9DT0RFUyAgICAgICA9IExJVEVSQUxTICsgMSArIExFTkdUSF9DT0RFUztcbi8qIG51bWJlciBvZiBMaXRlcmFsIG9yIExlbmd0aCBjb2RlcywgaW5jbHVkaW5nIHRoZSBFTkRfQkxPQ0sgY29kZSAqL1xuXG52YXIgRF9DT0RFUyAgICAgICA9IDMwO1xuLyogbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGVzICovXG5cbnZhciBCTF9DT0RFUyAgICAgID0gMTk7XG4vKiBudW1iZXIgb2YgY29kZXMgdXNlZCB0byB0cmFuc2ZlciB0aGUgYml0IGxlbmd0aHMgKi9cblxudmFyIEhFQVBfU0laRSAgICAgPSAyICogTF9DT0RFUyArIDE7XG4vKiBtYXhpbXVtIGhlYXAgc2l6ZSAqL1xuXG52YXIgTUFYX0JJVFMgICAgICA9IDE1O1xuLyogQWxsIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQklUUyBiaXRzICovXG5cbnZhciBCdWZfc2l6ZSAgICAgID0gMTY7XG4vKiBzaXplIG9mIGJpdCBidWZmZXIgaW4gYmlfYnVmICovXG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdGFudHNcbiAqL1xuXG52YXIgTUFYX0JMX0JJVFMgPSA3O1xuLyogQml0IGxlbmd0aCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JMX0JJVFMgYml0cyAqL1xuXG52YXIgRU5EX0JMT0NLICAgPSAyNTY7XG4vKiBlbmQgb2YgYmxvY2sgbGl0ZXJhbCBjb2RlICovXG5cbnZhciBSRVBfM182ICAgICA9IDE2O1xuLyogcmVwZWF0IHByZXZpb3VzIGJpdCBsZW5ndGggMy02IHRpbWVzICgyIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG52YXIgUkVQWl8zXzEwICAgPSAxNztcbi8qIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDMtMTAgdGltZXMgICgzIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG52YXIgUkVQWl8xMV8xMzggPSAxODtcbi8qIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDExLTEzOCB0aW1lcyAgKDcgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLXNwYWNpbmcsYXJyYXktYnJhY2tldC1zcGFjaW5nICovXG52YXIgZXh0cmFfbGJpdHMgPSAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggbGVuZ3RoIGNvZGUgKi9cbiAgWzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF07XG5cbnZhciBleHRyYV9kYml0cyA9ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBkaXN0YW5jZSBjb2RlICovXG4gIFswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXTtcblxudmFyIGV4dHJhX2JsYml0cyA9ICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGJpdCBsZW5ndGggY29kZSAqL1xuICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN107XG5cbnZhciBibF9vcmRlciA9XG4gIFsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtcbi8qIGVzbGludC1lbmFibGUgY29tbWEtc3BhY2luZyxhcnJheS1icmFja2V0LXNwYWNpbmcgKi9cblxuLyogVGhlIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMgYXJlIHNlbnQgaW4gb3JkZXIgb2YgZGVjcmVhc2luZ1xuICogcHJvYmFiaWxpdHksIHRvIGF2b2lkIHRyYW5zbWl0dGluZyB0aGUgbGVuZ3RocyBmb3IgdW51c2VkIGJpdCBsZW5ndGggY29kZXMuXG4gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBMb2NhbCBkYXRhLiBUaGVzZSBhcmUgaW5pdGlhbGl6ZWQgb25seSBvbmNlLlxuICovXG5cbi8vIFdlIHByZS1maWxsIGFycmF5cyB3aXRoIDAgdG8gYXZvaWQgdW5pbml0aWFsaXplZCBnYXBzXG5cbnZhciBESVNUX0NPREVfTEVOID0gNTEyOyAvKiBzZWUgZGVmaW5pdGlvbiBvZiBhcnJheSBkaXN0X2NvZGUgYmVsb3cgKi9cblxuLy8gISEhISBVc2UgZmxhdCBhcnJheSBpbnN0ZWFkIG9mIHN0cnVjdHVyZSwgRnJlcSA9IGkqMiwgTGVuID0gaSoyKzFcbnZhciBzdGF0aWNfbHRyZWUgID0gbmV3IEFycmF5KChMX0NPREVTICsgMikgKiAyKTtcbnplcm8oc3RhdGljX2x0cmVlKTtcbi8qIFRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlLiBTaW5jZSB0aGUgYml0IGxlbmd0aHMgYXJlIGltcG9zZWQsIHRoZXJlIGlzIG5vXG4gKiBuZWVkIGZvciB0aGUgTF9DT0RFUyBleHRyYSBjb2RlcyB1c2VkIGR1cmluZyBoZWFwIGNvbnN0cnVjdGlvbi4gSG93ZXZlclxuICogVGhlIGNvZGVzIDI4NiBhbmQgMjg3IGFyZSBuZWVkZWQgdG8gYnVpbGQgYSBjYW5vbmljYWwgdHJlZSAoc2VlIF90cl9pbml0XG4gKiBiZWxvdykuXG4gKi9cblxudmFyIHN0YXRpY19kdHJlZSAgPSBuZXcgQXJyYXkoRF9DT0RFUyAqIDIpO1xuemVybyhzdGF0aWNfZHRyZWUpO1xuLyogVGhlIHN0YXRpYyBkaXN0YW5jZSB0cmVlLiAoQWN0dWFsbHkgYSB0cml2aWFsIHRyZWUgc2luY2UgYWxsIGNvZGVzIHVzZVxuICogNSBiaXRzLilcbiAqL1xuXG52YXIgX2Rpc3RfY29kZSAgICA9IG5ldyBBcnJheShESVNUX0NPREVfTEVOKTtcbnplcm8oX2Rpc3RfY29kZSk7XG4vKiBEaXN0YW5jZSBjb2Rlcy4gVGhlIGZpcnN0IDI1NiB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgZGlzdGFuY2VzXG4gKiAzIC4uIDI1OCwgdGhlIGxhc3QgMjU2IHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSB0b3AgOCBiaXRzIG9mXG4gKiB0aGUgMTUgYml0IGRpc3RhbmNlcy5cbiAqL1xuXG52YXIgX2xlbmd0aF9jb2RlICA9IG5ldyBBcnJheShNQVhfTUFUQ0ggLSBNSU5fTUFUQ0ggKyAxKTtcbnplcm8oX2xlbmd0aF9jb2RlKTtcbi8qIGxlbmd0aCBjb2RlIGZvciBlYWNoIG5vcm1hbGl6ZWQgbWF0Y2ggbGVuZ3RoICgwID09IE1JTl9NQVRDSCkgKi9cblxudmFyIGJhc2VfbGVuZ3RoICAgPSBuZXcgQXJyYXkoTEVOR1RIX0NPREVTKTtcbnplcm8oYmFzZV9sZW5ndGgpO1xuLyogRmlyc3Qgbm9ybWFsaXplZCBsZW5ndGggZm9yIGVhY2ggY29kZSAoMCA9IE1JTl9NQVRDSCkgKi9cblxudmFyIGJhc2VfZGlzdCAgICAgPSBuZXcgQXJyYXkoRF9DT0RFUyk7XG56ZXJvKGJhc2VfZGlzdCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGRpc3RhbmNlIGZvciBlYWNoIGNvZGUgKDAgPSBkaXN0YW5jZSBvZiAxKSAqL1xuXG5cbmZ1bmN0aW9uIFN0YXRpY1RyZWVEZXNjKHN0YXRpY190cmVlLCBleHRyYV9iaXRzLCBleHRyYV9iYXNlLCBlbGVtcywgbWF4X2xlbmd0aCkge1xuXG4gIHRoaXMuc3RhdGljX3RyZWUgID0gc3RhdGljX3RyZWU7ICAvKiBzdGF0aWMgdHJlZSBvciBOVUxMICovXG4gIHRoaXMuZXh0cmFfYml0cyAgID0gZXh0cmFfYml0czsgICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGNvZGUgb3IgTlVMTCAqL1xuICB0aGlzLmV4dHJhX2Jhc2UgICA9IGV4dHJhX2Jhc2U7ICAgLyogYmFzZSBpbmRleCBmb3IgZXh0cmFfYml0cyAqL1xuICB0aGlzLmVsZW1zICAgICAgICA9IGVsZW1zOyAgICAgICAgLyogbWF4IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZSAqL1xuICB0aGlzLm1heF9sZW5ndGggICA9IG1heF9sZW5ndGg7ICAgLyogbWF4IGJpdCBsZW5ndGggZm9yIHRoZSBjb2RlcyAqL1xuXG4gIC8vIHNob3cgaWYgYHN0YXRpY190cmVlYCBoYXMgZGF0YSBvciBkdW1teSAtIG5lZWRlZCBmb3IgbW9ub21vcnBoaWMgb2JqZWN0c1xuICB0aGlzLmhhc19zdHJlZSAgICA9IHN0YXRpY190cmVlICYmIHN0YXRpY190cmVlLmxlbmd0aDtcbn1cblxuXG52YXIgc3RhdGljX2xfZGVzYztcbnZhciBzdGF0aWNfZF9kZXNjO1xudmFyIHN0YXRpY19ibF9kZXNjO1xuXG5cbmZ1bmN0aW9uIFRyZWVEZXNjKGR5bl90cmVlLCBzdGF0X2Rlc2MpIHtcbiAgdGhpcy5keW5fdHJlZSA9IGR5bl90cmVlOyAgICAgLyogdGhlIGR5bmFtaWMgdHJlZSAqL1xuICB0aGlzLm1heF9jb2RlID0gMDsgICAgICAgICAgICAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbiAgdGhpcy5zdGF0X2Rlc2MgPSBzdGF0X2Rlc2M7ICAgLyogdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGljIHRyZWUgKi9cbn1cblxuXG5cbmZ1bmN0aW9uIGRfY29kZShkaXN0KSB7XG4gIHJldHVybiBkaXN0IDwgMjU2ID8gX2Rpc3RfY29kZVtkaXN0XSA6IF9kaXN0X2NvZGVbMjU2ICsgKGRpc3QgPj4+IDcpXTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIE91dHB1dCBhIHNob3J0IExTQiBmaXJzdCBvbiB0aGUgc3RyZWFtLlxuICogSU4gYXNzZXJ0aW9uOiB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpbiBwZW5kaW5nQnVmLlxuICovXG5mdW5jdGlvbiBwdXRfc2hvcnQocywgdykge1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHcpICYgMHhmZikpO1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHVzaCkodykgPj4gOCkpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9ICh3KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKHcgPj4+IDgpICYgMHhmZjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSB2YWx1ZSBvbiBhIGdpdmVuIG51bWJlciBvZiBiaXRzLlxuICogSU4gYXNzZXJ0aW9uOiBsZW5ndGggPD0gMTYgYW5kIHZhbHVlIGZpdHMgaW4gbGVuZ3RoIGJpdHMuXG4gKi9cbmZ1bmN0aW9uIHNlbmRfYml0cyhzLCB2YWx1ZSwgbGVuZ3RoKSB7XG4gIGlmIChzLmJpX3ZhbGlkID4gKEJ1Zl9zaXplIC0gbGVuZ3RoKSkge1xuICAgIHMuYmlfYnVmIHw9ICh2YWx1ZSA8PCBzLmJpX3ZhbGlkKSAmIDB4ZmZmZjtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICAgIHMuYmlfYnVmID0gdmFsdWUgPj4gKEJ1Zl9zaXplIC0gcy5iaV92YWxpZCk7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGggLSBCdWZfc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzLmJpX2J1ZiB8PSAodmFsdWUgPDwgcy5iaV92YWxpZCkgJiAweGZmZmY7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGg7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzZW5kX2NvZGUocywgYywgdHJlZSkge1xuICBzZW5kX2JpdHMocywgdHJlZVtjICogMl0vKi5Db2RlKi8sIHRyZWVbYyAqIDIgKyAxXS8qLkxlbiovKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFJldmVyc2UgdGhlIGZpcnN0IGxlbiBiaXRzIG9mIGEgY29kZSwgdXNpbmcgc3RyYWlnaHRmb3J3YXJkIGNvZGUgKGEgZmFzdGVyXG4gKiBtZXRob2Qgd291bGQgdXNlIGEgdGFibGUpXG4gKiBJTiBhc3NlcnRpb246IDEgPD0gbGVuIDw9IDE1XG4gKi9cbmZ1bmN0aW9uIGJpX3JldmVyc2UoY29kZSwgbGVuKSB7XG4gIHZhciByZXMgPSAwO1xuICBkbyB7XG4gICAgcmVzIHw9IGNvZGUgJiAxO1xuICAgIGNvZGUgPj4+PSAxO1xuICAgIHJlcyA8PD0gMTtcbiAgfSB3aGlsZSAoLS1sZW4gPiAwKTtcbiAgcmV0dXJuIHJlcyA+Pj4gMTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIHRoZSBiaXQgYnVmZmVyLCBrZWVwaW5nIGF0IG1vc3QgNyBiaXRzIGluIGl0LlxuICovXG5mdW5jdGlvbiBiaV9mbHVzaChzKSB7XG4gIGlmIChzLmJpX3ZhbGlkID09PSAxNikge1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gICAgcy5iaV9idWYgPSAwO1xuICAgIHMuYmlfdmFsaWQgPSAwO1xuXG4gIH0gZWxzZSBpZiAocy5iaV92YWxpZCA+PSA4KSB7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBzLmJpX2J1ZiAmIDB4ZmY7XG4gICAgcy5iaV9idWYgPj49IDg7XG4gICAgcy5iaV92YWxpZCAtPSA4O1xuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzIGZvciBhIHRyZWUgYW5kIHVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aFxuICogZm9yIHRoZSBjdXJyZW50IGJsb2NrLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LCBoZWFwW2hlYXBfbWF4XSBhbmRcbiAqICAgIGFib3ZlIGFyZSB0aGUgdHJlZSBub2RlcyBzb3J0ZWQgYnkgaW5jcmVhc2luZyBmcmVxdWVuY3kuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkIGxlbiBpcyBzZXQgdG8gdGhlIG9wdGltYWwgYml0IGxlbmd0aCwgdGhlXG4gKiAgICAgYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGZyZXF1ZW5jaWVzIGZvciBlYWNoIGJpdCBsZW5ndGguXG4gKiAgICAgVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXMgYWxzbyB1cGRhdGVkIGlmIHN0cmVlIGlzXG4gKiAgICAgbm90IG51bGwuXG4gKi9cbmZ1bmN0aW9uIGdlbl9iaXRsZW4ocywgZGVzYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB0cmVlX2Rlc2MgKmRlc2M7ICAgIC8qIHRoZSB0cmVlIGRlc2NyaXB0b3IgKi9cbntcbiAgdmFyIHRyZWUgICAgICAgICAgICA9IGRlc2MuZHluX3RyZWU7XG4gIHZhciBtYXhfY29kZSAgICAgICAgPSBkZXNjLm1heF9jb2RlO1xuICB2YXIgc3RyZWUgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2Muc3RhdGljX3RyZWU7XG4gIHZhciBoYXNfc3RyZWUgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5oYXNfc3RyZWU7XG4gIHZhciBleHRyYSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iaXRzO1xuICB2YXIgYmFzZSAgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuZXh0cmFfYmFzZTtcbiAgdmFyIG1heF9sZW5ndGggICAgICA9IGRlc2Muc3RhdF9kZXNjLm1heF9sZW5ndGg7XG4gIHZhciBoOyAgICAgICAgICAgICAgLyogaGVhcCBpbmRleCAqL1xuICB2YXIgbiwgbTsgICAgICAgICAgIC8qIGl0ZXJhdGUgb3ZlciB0aGUgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgYml0czsgICAgICAgICAgIC8qIGJpdCBsZW5ndGggKi9cbiAgdmFyIHhiaXRzOyAgICAgICAgICAvKiBleHRyYSBiaXRzICovXG4gIHZhciBmOyAgICAgICAgICAgICAgLyogZnJlcXVlbmN5ICovXG4gIHZhciBvdmVyZmxvdyA9IDA7ICAgLyogbnVtYmVyIG9mIGVsZW1lbnRzIHdpdGggYml0IGxlbmd0aCB0b28gbGFyZ2UgKi9cblxuICBmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspIHtcbiAgICBzLmJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIC8qIEluIGEgZmlyc3QgcGFzcywgY29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyAod2hpY2ggbWF5XG4gICAqIG92ZXJmbG93IGluIHRoZSBjYXNlIG9mIHRoZSBiaXQgbGVuZ3RoIHRyZWUpLlxuICAgKi9cbiAgdHJlZVtzLmhlYXBbcy5oZWFwX21heF0gKiAyICsgMV0vKi5MZW4qLyA9IDA7IC8qIHJvb3Qgb2YgdGhlIGhlYXAgKi9cblxuICBmb3IgKGggPSBzLmhlYXBfbWF4ICsgMTsgaCA8IEhFQVBfU0laRTsgaCsrKSB7XG4gICAgbiA9IHMuaGVhcFtoXTtcbiAgICBiaXRzID0gdHJlZVt0cmVlW24gKiAyICsgMV0vKi5EYWQqLyAqIDIgKyAxXS8qLkxlbiovICsgMTtcbiAgICBpZiAoYml0cyA+IG1heF9sZW5ndGgpIHtcbiAgICAgIGJpdHMgPSBtYXhfbGVuZ3RoO1xuICAgICAgb3ZlcmZsb3crKztcbiAgICB9XG4gICAgdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSBiaXRzO1xuICAgIC8qIFdlIG92ZXJ3cml0ZSB0cmVlW25dLkRhZCB3aGljaCBpcyBubyBsb25nZXIgbmVlZGVkICovXG5cbiAgICBpZiAobiA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9IC8qIG5vdCBhIGxlYWYgbm9kZSAqL1xuXG4gICAgcy5ibF9jb3VudFtiaXRzXSsrO1xuICAgIHhiaXRzID0gMDtcbiAgICBpZiAobiA+PSBiYXNlKSB7XG4gICAgICB4Yml0cyA9IGV4dHJhW24gLSBiYXNlXTtcbiAgICB9XG4gICAgZiA9IHRyZWVbbiAqIDJdLyouRnJlcSovO1xuICAgIHMub3B0X2xlbiArPSBmICogKGJpdHMgKyB4Yml0cyk7XG4gICAgaWYgKGhhc19zdHJlZSkge1xuICAgICAgcy5zdGF0aWNfbGVuICs9IGYgKiAoc3RyZWVbbiAqIDIgKyAxXS8qLkxlbiovICsgeGJpdHMpO1xuICAgIH1cbiAgfVxuICBpZiAob3ZlcmZsb3cgPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgLy8gVHJhY2UoKHN0ZGVycixcIlxcbmJpdCBsZW5ndGggb3ZlcmZsb3dcXG5cIikpO1xuICAvKiBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1cyAqL1xuXG4gIC8qIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6ICovXG4gIGRvIHtcbiAgICBiaXRzID0gbWF4X2xlbmd0aCAtIDE7XG4gICAgd2hpbGUgKHMuYmxfY291bnRbYml0c10gPT09IDApIHsgYml0cy0tOyB9XG4gICAgcy5ibF9jb3VudFtiaXRzXS0tOyAgICAgIC8qIG1vdmUgb25lIGxlYWYgZG93biB0aGUgdHJlZSAqL1xuICAgIHMuYmxfY291bnRbYml0cyArIDFdICs9IDI7IC8qIG1vdmUgb25lIG92ZXJmbG93IGl0ZW0gYXMgaXRzIGJyb3RoZXIgKi9cbiAgICBzLmJsX2NvdW50W21heF9sZW5ndGhdLS07XG4gICAgLyogVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcbiAgICAgKiBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cbiAgICAgKi9cbiAgICBvdmVyZmxvdyAtPSAyO1xuICB9IHdoaWxlIChvdmVyZmxvdyA+IDApO1xuXG4gIC8qIE5vdyByZWNvbXB1dGUgYWxsIGJpdCBsZW5ndGhzLCBzY2FubmluZyBpbiBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAgICogaCBpcyBzdGlsbCBlcXVhbCB0byBIRUFQX1NJWkUuIChJdCBpcyBzaW1wbGVyIHRvIHJlY29uc3RydWN0IGFsbFxuICAgKiBsZW5ndGhzIGluc3RlYWQgb2YgZml4aW5nIG9ubHkgdGhlIHdyb25nIG9uZXMuIFRoaXMgaWRlYSBpcyB0YWtlblxuICAgKiBmcm9tICdhcicgd3JpdHRlbiBieSBIYXJ1aGlrbyBPa3VtdXJhLilcbiAgICovXG4gIGZvciAoYml0cyA9IG1heF9sZW5ndGg7IGJpdHMgIT09IDA7IGJpdHMtLSkge1xuICAgIG4gPSBzLmJsX2NvdW50W2JpdHNdO1xuICAgIHdoaWxlIChuICE9PSAwKSB7XG4gICAgICBtID0gcy5oZWFwWy0taF07XG4gICAgICBpZiAobSA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAodHJlZVttICogMiArIDFdLyouTGVuKi8gIT09IGJpdHMpIHtcbiAgICAgICAgLy8gVHJhY2UoKHN0ZGVycixcImNvZGUgJWQgYml0cyAlZC0+JWRcXG5cIiwgbSwgdHJlZVttXS5MZW4sIGJpdHMpKTtcbiAgICAgICAgcy5vcHRfbGVuICs9IChiaXRzIC0gdHJlZVttICogMiArIDFdLyouTGVuKi8pICogdHJlZVttICogMl0vKi5GcmVxKi87XG4gICAgICAgIHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovID0gYml0cztcbiAgICAgIH1cbiAgICAgIG4tLTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEdlbmVyYXRlIHRoZSBjb2RlcyBmb3IgYSBnaXZlbiB0cmVlIGFuZCBiaXQgY291bnRzICh3aGljaCBuZWVkIG5vdCBiZVxuICogb3B0aW1hbCkuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgYml0IGxlbmd0aCBzdGF0aXN0aWNzIGZvclxuICogdGhlIGdpdmVuIHRyZWUgYW5kIHRoZSBmaWVsZCBsZW4gaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cy5cbiAqIE9VVCBhc3NlcnRpb246IHRoZSBmaWVsZCBjb2RlIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMgb2Ygbm9uXG4gKiAgICAgemVybyBjb2RlIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gZ2VuX2NvZGVzKHRyZWUsIG1heF9jb2RlLCBibF9jb3VudClcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAgICAgICAgICAgIC8qIHRoZSB0cmVlIHRvIGRlY29yYXRlICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgICAgICAgICAgICAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbi8vICAgIHVzaGYgKmJsX2NvdW50OyAgICAgICAgICAgIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggKi9cbntcbiAgdmFyIG5leHRfY29kZSA9IG5ldyBBcnJheShNQVhfQklUUyArIDEpOyAvKiBuZXh0IGNvZGUgdmFsdWUgZm9yIGVhY2ggYml0IGxlbmd0aCAqL1xuICB2YXIgY29kZSA9IDA7ICAgICAgICAgICAgICAvKiBydW5uaW5nIGNvZGUgdmFsdWUgKi9cbiAgdmFyIGJpdHM7ICAgICAgICAgICAgICAgICAgLyogYml0IGluZGV4ICovXG4gIHZhciBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGNvZGUgaW5kZXggKi9cblxuICAvKiBUaGUgZGlzdHJpYnV0aW9uIGNvdW50cyBhcmUgZmlyc3QgdXNlZCB0byBnZW5lcmF0ZSB0aGUgY29kZSB2YWx1ZXNcbiAgICogd2l0aG91dCBiaXQgcmV2ZXJzYWwuXG4gICAqL1xuICBmb3IgKGJpdHMgPSAxOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspIHtcbiAgICBuZXh0X2NvZGVbYml0c10gPSBjb2RlID0gKGNvZGUgKyBibF9jb3VudFtiaXRzIC0gMV0pIDw8IDE7XG4gIH1cbiAgLyogQ2hlY2sgdGhhdCB0aGUgYml0IGNvdW50cyBpbiBibF9jb3VudCBhcmUgY29uc2lzdGVudC4gVGhlIGxhc3QgY29kZVxuICAgKiBtdXN0IGJlIGFsbCBvbmVzLlxuICAgKi9cbiAgLy9Bc3NlcnQgKGNvZGUgKyBibF9jb3VudFtNQVhfQklUU10tMSA9PSAoMTw8TUFYX0JJVFMpLTEsXG4gIC8vICAgICAgICBcImluY29uc2lzdGVudCBiaXQgY291bnRzXCIpO1xuICAvL1RyYWNldigoc3RkZXJyLFwiXFxuZ2VuX2NvZGVzOiBtYXhfY29kZSAlZCBcIiwgbWF4X2NvZGUpKTtcblxuICBmb3IgKG4gPSAwOyAgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgdmFyIGxlbiA9IHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovO1xuICAgIGlmIChsZW4gPT09IDApIHsgY29udGludWU7IH1cbiAgICAvKiBOb3cgcmV2ZXJzZSB0aGUgYml0cyAqL1xuICAgIHRyZWVbbiAqIDJdLyouQ29kZSovID0gYmlfcmV2ZXJzZShuZXh0X2NvZGVbbGVuXSsrLCBsZW4pO1xuXG4gICAgLy9UcmFjZWN2KHRyZWUgIT0gc3RhdGljX2x0cmVlLCAoc3RkZXJyLFwiXFxubiAlM2QgJWMgbCAlMmQgYyAlNHggKCV4KSBcIixcbiAgICAvLyAgICAgbiwgKGlzZ3JhcGgobikgPyBuIDogJyAnKSwgbGVuLCB0cmVlW25dLkNvZGUsIG5leHRfY29kZVtsZW5dLTEpKTtcbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgdmFyaW91cyAnY29uc3RhbnQnIHRhYmxlcy5cbiAqL1xuZnVuY3Rpb24gdHJfc3RhdGljX2luaXQoKSB7XG4gIHZhciBuOyAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBiaXRzOyAgICAgLyogYml0IGNvdW50ZXIgKi9cbiAgdmFyIGxlbmd0aDsgICAvKiBsZW5ndGggdmFsdWUgKi9cbiAgdmFyIGNvZGU7ICAgICAvKiBjb2RlIHZhbHVlICovXG4gIHZhciBkaXN0OyAgICAgLyogZGlzdGFuY2UgaW5kZXggKi9cbiAgdmFyIGJsX2NvdW50ID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7XG4gIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZSAqL1xuXG4gIC8vIGRvIGNoZWNrIGluIF90cl9pbml0KClcbiAgLy9pZiAoc3RhdGljX2luaXRfZG9uZSkgcmV0dXJuO1xuXG4gIC8qIEZvciBzb21lIGVtYmVkZGVkIHRhcmdldHMsIGdsb2JhbCB2YXJpYWJsZXMgYXJlIG5vdCBpbml0aWFsaXplZDogKi9cbi8qI2lmZGVmIE5PX0lOSVRfR0xPQkFMX1BPSU5URVJTXG4gIHN0YXRpY19sX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfbHRyZWU7XG4gIHN0YXRpY19sX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2xiaXRzO1xuICBzdGF0aWNfZF9kZXNjLnN0YXRpY190cmVlID0gc3RhdGljX2R0cmVlO1xuICBzdGF0aWNfZF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9kYml0cztcbiAgc3RhdGljX2JsX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2JsYml0cztcbiNlbmRpZiovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBsZW5ndGggKDAuLjI1NSkgLT4gbGVuZ3RoIGNvZGUgKDAuLjI4KSAqL1xuICBsZW5ndGggPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgTEVOR1RIX0NPREVTIC0gMTsgY29kZSsrKSB7XG4gICAgYmFzZV9sZW5ndGhbY29kZV0gPSBsZW5ndGg7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2xiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfbGVuZ3RoX2NvZGVbbGVuZ3RoKytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGxlbmd0aCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGxlbmd0aCAhPSAyNTZcIik7XG4gIC8qIE5vdGUgdGhhdCB0aGUgbGVuZ3RoIDI1NSAobWF0Y2ggbGVuZ3RoIDI1OCkgY2FuIGJlIHJlcHJlc2VudGVkXG4gICAqIGluIHR3byBkaWZmZXJlbnQgd2F5czogY29kZSAyODQgKyA1IGJpdHMgb3IgY29kZSAyODUsIHNvIHdlXG4gICAqIG92ZXJ3cml0ZSBsZW5ndGhfY29kZVsyNTVdIHRvIHVzZSB0aGUgYmVzdCBlbmNvZGluZzpcbiAgICovXG4gIF9sZW5ndGhfY29kZVtsZW5ndGggLSAxXSA9IGNvZGU7XG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBkaXN0ICgwLi4zMkspIC0+IGRpc3QgY29kZSAoMC4uMjkpICovXG4gIGRpc3QgPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgMTY7IGNvZGUrKykge1xuICAgIGJhc2VfZGlzdFtjb2RlXSA9IGRpc3Q7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2RiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlW2Rpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGRpc3QgIT0gMjU2XCIpO1xuICBkaXN0ID4+PSA3OyAvKiBmcm9tIG5vdyBvbiwgYWxsIGRpc3RhbmNlcyBhcmUgZGl2aWRlZCBieSAxMjggKi9cbiAgZm9yICg7IGNvZGUgPCBEX0NPREVTOyBjb2RlKyspIHtcbiAgICBiYXNlX2Rpc3RbY29kZV0gPSBkaXN0IDw8IDc7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IChleHRyYV9kYml0c1tjb2RlXSAtIDcpKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlWzI1NiArIGRpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IDI1NitkaXN0ICE9IDUxMlwiKTtcblxuICAvKiBDb25zdHJ1Y3QgdGhlIGNvZGVzIG9mIHRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlICovXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIGJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIG4gPSAwO1xuICB3aGlsZSAobiA8PSAxNDMpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNTUpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gOTtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOV0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNzkpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNztcbiAgICBuKys7XG4gICAgYmxfY291bnRbN10rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyODcpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICAvKiBDb2RlcyAyODYgYW5kIDI4NyBkbyBub3QgZXhpc3QsIGJ1dCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGVcbiAgICogdHJlZSBjb25zdHJ1Y3Rpb24gdG8gZ2V0IGEgY2Fub25pY2FsIEh1ZmZtYW4gdHJlZSAobG9uZ2VzdCBjb2RlXG4gICAqIGFsbCBvbmVzKVxuICAgKi9cbiAgZ2VuX2NvZGVzKHN0YXRpY19sdHJlZSwgTF9DT0RFUyArIDEsIGJsX2NvdW50KTtcblxuICAvKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUgaXMgdHJpdmlhbDogKi9cbiAgZm9yIChuID0gMDsgbiA8IERfQ09ERVM7IG4rKykge1xuICAgIHN0YXRpY19kdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA1O1xuICAgIHN0YXRpY19kdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG4sIDUpO1xuICB9XG5cbiAgLy8gTm93IGRhdGEgcmVhZHkgYW5kIHdlIGNhbiBpbml0IHN0YXRpYyB0cmVlc1xuICBzdGF0aWNfbF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19sdHJlZSwgZXh0cmFfbGJpdHMsIExJVEVSQUxTICsgMSwgTF9DT0RFUywgTUFYX0JJVFMpO1xuICBzdGF0aWNfZF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19kdHJlZSwgZXh0cmFfZGJpdHMsIDAsICAgICAgICAgIERfQ09ERVMsIE1BWF9CSVRTKTtcbiAgc3RhdGljX2JsX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2MobmV3IEFycmF5KDApLCBleHRyYV9ibGJpdHMsIDAsICAgICAgICAgQkxfQ09ERVMsIE1BWF9CTF9CSVRTKTtcblxuICAvL3N0YXRpY19pbml0X2RvbmUgPSB0cnVlO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSBhIG5ldyBibG9jay5cbiAqL1xuZnVuY3Rpb24gaW5pdF9ibG9jayhzKSB7XG4gIHZhciBuOyAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cblxuICAvKiBJbml0aWFsaXplIHRoZSB0cmVlcy4gKi9cbiAgZm9yIChuID0gMDsgbiA8IExfQ09ERVM7ICBuKyspIHsgcy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUzsgIG4rKykgeyBzLmR5bl9kdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG4gIGZvciAobiA9IDA7IG4gPCBCTF9DT0RFUzsgbisrKSB7IHMuYmxfdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG5cbiAgcy5keW5fbHRyZWVbRU5EX0JMT0NLICogMl0vKi5GcmVxKi8gPSAxO1xuICBzLm9wdF9sZW4gPSBzLnN0YXRpY19sZW4gPSAwO1xuICBzLmxhc3RfbGl0ID0gcy5tYXRjaGVzID0gMDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIHRoZSBiaXQgYnVmZmVyIGFuZCBhbGlnbiB0aGUgb3V0cHV0IG9uIGEgYnl0ZSBib3VuZGFyeVxuICovXG5mdW5jdGlvbiBiaV93aW5kdXAocylcbntcbiAgaWYgKHMuYmlfdmFsaWQgPiA4KSB7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgfSBlbHNlIGlmIChzLmJpX3ZhbGlkID4gMCkge1xuICAgIC8vcHV0X2J5dGUocywgKEJ5dGUpcy0+YmlfYnVmKTtcbiAgICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IHMuYmlfYnVmO1xuICB9XG4gIHMuYmlfYnVmID0gMDtcbiAgcy5iaV92YWxpZCA9IDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weSBhIHN0b3JlZCBibG9jaywgc3RvcmluZyBmaXJzdCB0aGUgbGVuZ3RoIGFuZCBpdHNcbiAqIG9uZSdzIGNvbXBsZW1lbnQgaWYgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBjb3B5X2Jsb2NrKHMsIGJ1ZiwgbGVuLCBoZWFkZXIpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgICAgKmJ1ZjsgICAgLyogdGhlIGlucHV0IGRhdGEgKi9cbi8vdW5zaWduZWQgbGVuOyAgICAgLyogaXRzIGxlbmd0aCAqL1xuLy9pbnQgICAgICBoZWFkZXI7ICAvKiB0cnVlIGlmIGJsb2NrIGhlYWRlciBtdXN0IGJlIHdyaXR0ZW4gKi9cbntcbiAgYmlfd2luZHVwKHMpOyAgICAgICAgLyogYWxpZ24gb24gYnl0ZSBib3VuZGFyeSAqL1xuXG4gIGlmIChoZWFkZXIpIHtcbiAgICBwdXRfc2hvcnQocywgbGVuKTtcbiAgICBwdXRfc2hvcnQocywgfmxlbik7XG4gIH1cbi8vICB3aGlsZSAobGVuLS0pIHtcbi8vICAgIHB1dF9ieXRlKHMsICpidWYrKyk7XG4vLyAgfVxuICB1dGlscy5hcnJheVNldChzLnBlbmRpbmdfYnVmLCBzLndpbmRvdywgYnVmLCBsZW4sIHMucGVuZGluZyk7XG4gIHMucGVuZGluZyArPSBsZW47XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcGFyZXMgdG8gc3VidHJlZXMsIHVzaW5nIHRoZSB0cmVlIGRlcHRoIGFzIHRpZSBicmVha2VyIHdoZW5cbiAqIHRoZSBzdWJ0cmVlcyBoYXZlIGVxdWFsIGZyZXF1ZW5jeS4gVGhpcyBtaW5pbWl6ZXMgdGhlIHdvcnN0IGNhc2UgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBzbWFsbGVyKHRyZWUsIG4sIG0sIGRlcHRoKSB7XG4gIHZhciBfbjIgPSBuICogMjtcbiAgdmFyIF9tMiA9IG0gKiAyO1xuICByZXR1cm4gKHRyZWVbX24yXS8qLkZyZXEqLyA8IHRyZWVbX20yXS8qLkZyZXEqLyB8fFxuICAgICAgICAgKHRyZWVbX24yXS8qLkZyZXEqLyA9PT0gdHJlZVtfbTJdLyouRnJlcSovICYmIGRlcHRoW25dIDw9IGRlcHRoW21dKSk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVzdG9yZSB0aGUgaGVhcCBwcm9wZXJ0eSBieSBtb3ZpbmcgZG93biB0aGUgdHJlZSBzdGFydGluZyBhdCBub2RlIGssXG4gKiBleGNoYW5naW5nIGEgbm9kZSB3aXRoIHRoZSBzbWFsbGVzdCBvZiBpdHMgdHdvIHNvbnMgaWYgbmVjZXNzYXJ5LCBzdG9wcGluZ1xuICogd2hlbiB0aGUgaGVhcCBwcm9wZXJ0eSBpcyByZS1lc3RhYmxpc2hlZCAoZWFjaCBmYXRoZXIgc21hbGxlciB0aGFuIGl0c1xuICogdHdvIHNvbnMpLlxuICovXG5mdW5jdGlvbiBwcWRvd25oZWFwKHMsIHRyZWUsIGspXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgIC8qIHRoZSB0cmVlIHRvIHJlc3RvcmUgKi9cbi8vICAgIGludCBrOyAgICAgICAgICAgICAgIC8qIG5vZGUgdG8gbW92ZSBkb3duICovXG57XG4gIHZhciB2ID0gcy5oZWFwW2tdO1xuICB2YXIgaiA9IGsgPDwgMTsgIC8qIGxlZnQgc29uIG9mIGsgKi9cbiAgd2hpbGUgKGogPD0gcy5oZWFwX2xlbikge1xuICAgIC8qIFNldCBqIHRvIHRoZSBzbWFsbGVzdCBvZiB0aGUgdHdvIHNvbnM6ICovXG4gICAgaWYgKGogPCBzLmhlYXBfbGVuICYmXG4gICAgICBzbWFsbGVyKHRyZWUsIHMuaGVhcFtqICsgMV0sIHMuaGVhcFtqXSwgcy5kZXB0aCkpIHtcbiAgICAgIGorKztcbiAgICB9XG4gICAgLyogRXhpdCBpZiB2IGlzIHNtYWxsZXIgdGhhbiBib3RoIHNvbnMgKi9cbiAgICBpZiAoc21hbGxlcih0cmVlLCB2LCBzLmhlYXBbal0sIHMuZGVwdGgpKSB7IGJyZWFrOyB9XG5cbiAgICAvKiBFeGNoYW5nZSB2IHdpdGggdGhlIHNtYWxsZXN0IHNvbiAqL1xuICAgIHMuaGVhcFtrXSA9IHMuaGVhcFtqXTtcbiAgICBrID0gajtcblxuICAgIC8qIEFuZCBjb250aW51ZSBkb3duIHRoZSB0cmVlLCBzZXR0aW5nIGogdG8gdGhlIGxlZnQgc29uIG9mIGsgKi9cbiAgICBqIDw8PSAxO1xuICB9XG4gIHMuaGVhcFtrXSA9IHY7XG59XG5cblxuLy8gaW5saW5lZCBtYW51YWxseVxuLy8gdmFyIFNNQUxMRVNUID0gMTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBibG9jayBkYXRhIGNvbXByZXNzZWQgdXNpbmcgdGhlIGdpdmVuIEh1ZmZtYW4gdHJlZXNcbiAqL1xuZnVuY3Rpb24gY29tcHJlc3NfYmxvY2socywgbHRyZWUsIGR0cmVlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGNvbnN0IGN0X2RhdGEgKmx0cmVlOyAvKiBsaXRlcmFsIHRyZWUgKi9cbi8vICAgIGNvbnN0IGN0X2RhdGEgKmR0cmVlOyAvKiBkaXN0YW5jZSB0cmVlICovXG57XG4gIHZhciBkaXN0OyAgICAgICAgICAgLyogZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmcgKi9cbiAgdmFyIGxjOyAgICAgICAgICAgICAvKiBtYXRjaCBsZW5ndGggb3IgdW5tYXRjaGVkIGNoYXIgKGlmIGRpc3QgPT0gMCkgKi9cbiAgdmFyIGx4ID0gMDsgICAgICAgICAvKiBydW5uaW5nIGluZGV4IGluIGxfYnVmICovXG4gIHZhciBjb2RlOyAgICAgICAgICAgLyogdGhlIGNvZGUgdG8gc2VuZCAqL1xuICB2YXIgZXh0cmE7ICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzIHRvIHNlbmQgKi9cblxuICBpZiAocy5sYXN0X2xpdCAhPT0gMCkge1xuICAgIGRvIHtcbiAgICAgIGRpc3QgPSAocy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgbHggKiAyXSA8PCA4KSB8IChzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBseCAqIDIgKyAxXSk7XG4gICAgICBsYyA9IHMucGVuZGluZ19idWZbcy5sX2J1ZiArIGx4XTtcbiAgICAgIGx4Kys7XG5cbiAgICAgIGlmIChkaXN0ID09PSAwKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBsYywgbHRyZWUpOyAvKiBzZW5kIGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAgIC8vVHJhY2Vjdihpc2dyYXBoKGxjKSwgKHN0ZGVycixcIiAnJWMnIFwiLCBsYykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSCAqL1xuICAgICAgICBjb2RlID0gX2xlbmd0aF9jb2RlW2xjXTtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUgKyBMSVRFUkFMUyArIDEsIGx0cmVlKTsgLyogc2VuZCB0aGUgbGVuZ3RoIGNvZGUgKi9cbiAgICAgICAgZXh0cmEgPSBleHRyYV9sYml0c1tjb2RlXTtcbiAgICAgICAgaWYgKGV4dHJhICE9PSAwKSB7XG4gICAgICAgICAgbGMgLT0gYmFzZV9sZW5ndGhbY29kZV07XG4gICAgICAgICAgc2VuZF9iaXRzKHMsIGxjLCBleHRyYSk7ICAgICAgIC8qIHNlbmQgdGhlIGV4dHJhIGxlbmd0aCBiaXRzICovXG4gICAgICAgIH1cbiAgICAgICAgZGlzdC0tOyAvKiBkaXN0IGlzIG5vdyB0aGUgbWF0Y2ggZGlzdGFuY2UgLSAxICovXG4gICAgICAgIGNvZGUgPSBkX2NvZGUoZGlzdCk7XG4gICAgICAgIC8vQXNzZXJ0IChjb2RlIDwgRF9DT0RFUywgXCJiYWQgZF9jb2RlXCIpO1xuXG4gICAgICAgIHNlbmRfY29kZShzLCBjb2RlLCBkdHJlZSk7ICAgICAgIC8qIHNlbmQgdGhlIGRpc3RhbmNlIGNvZGUgKi9cbiAgICAgICAgZXh0cmEgPSBleHRyYV9kYml0c1tjb2RlXTtcbiAgICAgICAgaWYgKGV4dHJhICE9PSAwKSB7XG4gICAgICAgICAgZGlzdCAtPSBiYXNlX2Rpc3RbY29kZV07XG4gICAgICAgICAgc2VuZF9iaXRzKHMsIGRpc3QsIGV4dHJhKTsgICAvKiBzZW5kIHRoZSBleHRyYSBkaXN0YW5jZSBiaXRzICovXG4gICAgICAgIH1cbiAgICAgIH0gLyogbGl0ZXJhbCBvciBtYXRjaCBwYWlyID8gKi9cblxuICAgICAgLyogQ2hlY2sgdGhhdCB0aGUgb3ZlcmxheSBiZXR3ZWVuIHBlbmRpbmdfYnVmIGFuZCBkX2J1ZitsX2J1ZiBpcyBvazogKi9cbiAgICAgIC8vQXNzZXJ0KCh1SW50KShzLT5wZW5kaW5nKSA8IHMtPmxpdF9idWZzaXplICsgMipseCxcbiAgICAgIC8vICAgICAgIFwicGVuZGluZ0J1ZiBvdmVyZmxvd1wiKTtcblxuICAgIH0gd2hpbGUgKGx4IDwgcy5sYXN0X2xpdCk7XG4gIH1cblxuICBzZW5kX2NvZGUocywgRU5EX0JMT0NLLCBsdHJlZSk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3Qgb25lIEh1ZmZtYW4gdHJlZSBhbmQgYXNzaWducyB0aGUgY29kZSBiaXQgc3RyaW5ncyBhbmQgbGVuZ3Rocy5cbiAqIFVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aCBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZCBmcmVxIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkcyBsZW4gYW5kIGNvZGUgYXJlIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoXG4gKiAgICAgYW5kIGNvcnJlc3BvbmRpbmcgY29kZS4gVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXNcbiAqICAgICBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXMgbm90IG51bGwuIFRoZSBmaWVsZCBtYXhfY29kZSBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkX3RyZWUocywgZGVzYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB0cmVlX2Rlc2MgKmRlc2M7IC8qIHRoZSB0cmVlIGRlc2NyaXB0b3IgKi9cbntcbiAgdmFyIHRyZWUgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgdmFyIHN0cmVlICAgID0gZGVzYy5zdGF0X2Rlc2Muc3RhdGljX3RyZWU7XG4gIHZhciBoYXNfc3RyZWUgPSBkZXNjLnN0YXRfZGVzYy5oYXNfc3RyZWU7XG4gIHZhciBlbGVtcyAgICA9IGRlc2Muc3RhdF9kZXNjLmVsZW1zO1xuICB2YXIgbiwgbTsgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHMgKi9cbiAgdmFyIG1heF9jb2RlID0gLTE7IC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICB2YXIgbm9kZTsgICAgICAgICAgLyogbmV3IG5vZGUgYmVpbmcgY3JlYXRlZCAqL1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgaW5pdGlhbCBoZWFwLCB3aXRoIGxlYXN0IGZyZXF1ZW50IGVsZW1lbnQgaW5cbiAgICogaGVhcFtTTUFMTEVTVF0uIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uXG4gICAqIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqL1xuICBzLmhlYXBfbGVuID0gMDtcbiAgcy5oZWFwX21heCA9IEhFQVBfU0laRTtcblxuICBmb3IgKG4gPSAwOyBuIDwgZWxlbXM7IG4rKykge1xuICAgIGlmICh0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgICAgcy5oZWFwWysrcy5oZWFwX2xlbl0gPSBtYXhfY29kZSA9IG47XG4gICAgICBzLmRlcHRoW25dID0gMDtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlIHBremlwIGZvcm1hdCByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IG9uZSBkaXN0YW5jZSBjb2RlIGV4aXN0cyxcbiAgICogYW5kIHRoYXQgYXQgbGVhc3Qgb25lIGJpdCBzaG91bGQgYmUgc2VudCBldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lXG4gICAqIHBvc3NpYmxlIGNvZGUuIFNvIHRvIGF2b2lkIHNwZWNpYWwgY2hlY2tzIGxhdGVyIG9uIHdlIGZvcmNlIGF0IGxlYXN0XG4gICAqIHR3byBjb2RlcyBvZiBub24gemVybyBmcmVxdWVuY3kuXG4gICAqL1xuICB3aGlsZSAocy5oZWFwX2xlbiA8IDIpIHtcbiAgICBub2RlID0gcy5oZWFwWysrcy5oZWFwX2xlbl0gPSAobWF4X2NvZGUgPCAyID8gKyttYXhfY29kZSA6IDApO1xuICAgIHRyZWVbbm9kZSAqIDJdLyouRnJlcSovID0gMTtcbiAgICBzLmRlcHRoW25vZGVdID0gMDtcbiAgICBzLm9wdF9sZW4tLTtcblxuICAgIGlmIChoYXNfc3RyZWUpIHtcbiAgICAgIHMuc3RhdGljX2xlbiAtPSBzdHJlZVtub2RlICogMiArIDFdLyouTGVuKi87XG4gICAgfVxuICAgIC8qIG5vZGUgaXMgMCBvciAxIHNvIGl0IGRvZXMgbm90IGhhdmUgZXh0cmEgYml0cyAqL1xuICB9XG4gIGRlc2MubWF4X2NvZGUgPSBtYXhfY29kZTtcblxuICAvKiBUaGUgZWxlbWVudHMgaGVhcFtoZWFwX2xlbi8yKzEgLi4gaGVhcF9sZW5dIGFyZSBsZWF2ZXMgb2YgdGhlIHRyZWUsXG4gICAqIGVzdGFibGlzaCBzdWItaGVhcHMgb2YgaW5jcmVhc2luZyBsZW5ndGhzOlxuICAgKi9cbiAgZm9yIChuID0gKHMuaGVhcF9sZW4gPj4gMS8qaW50IC8yKi8pOyBuID49IDE7IG4tLSkgeyBwcWRvd25oZWFwKHMsIHRyZWUsIG4pOyB9XG5cbiAgLyogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgYnkgcmVwZWF0ZWRseSBjb21iaW5pbmcgdGhlIGxlYXN0IHR3b1xuICAgKiBmcmVxdWVudCBub2Rlcy5cbiAgICovXG4gIG5vZGUgPSBlbGVtczsgICAgICAgICAgICAgIC8qIG5leHQgaW50ZXJuYWwgbm9kZSBvZiB0aGUgdHJlZSAqL1xuICBkbyB7XG4gICAgLy9wcXJlbW92ZShzLCB0cmVlLCBuKTsgIC8qIG4gPSBub2RlIG9mIGxlYXN0IGZyZXF1ZW5jeSAqL1xuICAgIC8qKiogcHFyZW1vdmUgKioqL1xuICAgIG4gPSBzLmhlYXBbMS8qU01BTExFU1QqL107XG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gcy5oZWFwW3MuaGVhcF9sZW4tLV07XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcbiAgICAvKioqL1xuXG4gICAgbSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTsgLyogbSA9IG5vZGUgb2YgbmV4dCBsZWFzdCBmcmVxdWVuY3kgKi9cblxuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbjsgLyoga2VlcCB0aGUgbm9kZXMgc29ydGVkIGJ5IGZyZXF1ZW5jeSAqL1xuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbTtcblxuICAgIC8qIENyZWF0ZSBhIG5ldyBub2RlIGZhdGhlciBvZiBuIGFuZCBtICovXG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSB0cmVlW24gKiAyXS8qLkZyZXEqLyArIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAocy5kZXB0aFtuXSA+PSBzLmRlcHRoW21dID8gcy5kZXB0aFtuXSA6IHMuZGVwdGhbbV0pICsgMTtcbiAgICB0cmVlW24gKiAyICsgMV0vKi5EYWQqLyA9IHRyZWVbbSAqIDIgKyAxXS8qLkRhZCovID0gbm9kZTtcblxuICAgIC8qIGFuZCBpbnNlcnQgdGhlIG5ldyBub2RlIGluIHRoZSBoZWFwICovXG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gbm9kZSsrO1xuICAgIHBxZG93bmhlYXAocywgdHJlZSwgMS8qU01BTExFU1QqLyk7XG5cbiAgfSB3aGlsZSAocy5oZWFwX2xlbiA+PSAyKTtcblxuICBzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcblxuICAvKiBBdCB0aGlzIHBvaW50LCB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LiBXZSBjYW4gbm93XG4gICAqIGdlbmVyYXRlIHRoZSBiaXQgbGVuZ3Rocy5cbiAgICovXG4gIGdlbl9iaXRsZW4ocywgZGVzYyk7XG5cbiAgLyogVGhlIGZpZWxkIGxlbiBpcyBub3cgc2V0LCB3ZSBjYW4gZ2VuZXJhdGUgdGhlIGJpdCBjb2RlcyAqL1xuICBnZW5fY29kZXModHJlZSwgbWF4X2NvZGUsIHMuYmxfY291bnQpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2NhbiBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jaWVzIG9mIHRoZSBjb2Rlc1xuICogaW4gdGhlIGJpdCBsZW5ndGggdHJlZS5cbiAqL1xuZnVuY3Rpb24gc2Nhbl90cmVlKHMsIHRyZWUsIG1heF9jb2RlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cbntcbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgcHJldmxlbiA9IC0xOyAgICAgICAgICAvKiBsYXN0IGVtaXR0ZWQgbGVuZ3RoICovXG4gIHZhciBjdXJsZW47ICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IGNvZGUgKi9cblxuICB2YXIgbmV4dGxlbiA9IHRyZWVbMCAqIDIgKyAxXS8qLkxlbiovOyAvKiBsZW5ndGggb2YgbmV4dCBjb2RlICovXG5cbiAgdmFyIGNvdW50ID0gMDsgICAgICAgICAgICAgLyogcmVwZWF0IGNvdW50IG9mIHRoZSBjdXJyZW50IGNvZGUgKi9cbiAgdmFyIG1heF9jb3VudCA9IDc7ICAgICAgICAgLyogbWF4IHJlcGVhdCBjb3VudCAqL1xuICB2YXIgbWluX2NvdW50ID0gNDsgICAgICAgICAvKiBtaW4gcmVwZWF0IGNvdW50ICovXG5cbiAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgbWluX2NvdW50ID0gMztcbiAgfVxuICB0cmVlWyhtYXhfY29kZSArIDEpICogMiArIDFdLyouTGVuKi8gPSAweGZmZmY7IC8qIGd1YXJkICovXG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlbjtcbiAgICBuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdLyouTGVuKi87XG5cbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgcy5ibF90cmVlW2N1cmxlbiAqIDJdLyouRnJlcSovICs9IGNvdW50O1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcblxuICAgICAgaWYgKGN1cmxlbiAhPT0gcHJldmxlbikgeyBzLmJsX3RyZWVbY3VybGVuICogMl0vKi5GcmVxKi8rKzsgfVxuICAgICAgcy5ibF90cmVlW1JFUF8zXzYgKiAyXS8qLkZyZXEqLysrO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgICAgcy5ibF90cmVlW1JFUFpfM18xMCAqIDJdLyouRnJlcSovKys7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcy5ibF90cmVlW1JFUFpfMTFfMTM4ICogMl0vKi5GcmVxKi8rKztcbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG4gICAgcHJldmxlbiA9IGN1cmxlbjtcblxuICAgIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIG1heF9jb3VudCA9IDY7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG1heF9jb3VudCA9IDc7XG4gICAgICBtaW5fY291bnQgPSA0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSBpbiBjb21wcmVzc2VkIGZvcm0sIHVzaW5nIHRoZSBjb2RlcyBpblxuICogYmxfdHJlZS5cbiAqL1xuZnVuY3Rpb24gc2VuZF90cmVlKHMsIHRyZWUsIG1heF9jb2RlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7IC8qIHRoZSB0cmVlIHRvIGJlIHNjYW5uZWQgKi9cbi8vICAgIGludCBtYXhfY29kZTsgICAgICAgLyogYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5ICovXG57XG4gIHZhciBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIHByZXZsZW4gPSAtMTsgICAgICAgICAgLyogbGFzdCBlbWl0dGVkIGxlbmd0aCAqL1xuICB2YXIgY3VybGVuOyAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBjb2RlICovXG5cbiAgdmFyIG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV0vKi5MZW4qLzsgLyogbGVuZ3RoIG9mIG5leHQgY29kZSAqL1xuXG4gIHZhciBjb3VudCA9IDA7ICAgICAgICAgICAgIC8qIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlICovXG4gIHZhciBtYXhfY291bnQgPSA3OyAgICAgICAgIC8qIG1heCByZXBlYXQgY291bnQgKi9cbiAgdmFyIG1pbl9jb3VudCA9IDQ7ICAgICAgICAgLyogbWluIHJlcGVhdCBjb3VudCAqL1xuXG4gIC8qIHRyZWVbbWF4X2NvZGUrMV0uTGVuID0gLTE7ICovICAvKiBndWFyZCBhbHJlYWR5IHNldCAqL1xuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlbjtcbiAgICBuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdLyouTGVuKi87XG5cbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgZG8geyBzZW5kX2NvZGUocywgY3VybGVuLCBzLmJsX3RyZWUpOyB9IHdoaWxlICgtLWNvdW50ICE9PSAwKTtcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuICE9PSAwKSB7XG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBjdXJsZW4sIHMuYmxfdHJlZSk7XG4gICAgICAgIGNvdW50LS07XG4gICAgICB9XG4gICAgICAvL0Fzc2VydChjb3VudCA+PSAzICYmIGNvdW50IDw9IDYsIFwiIDNfNj9cIik7XG4gICAgICBzZW5kX2NvZGUocywgUkVQXzNfNiwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDIpO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUFpfM18xMCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBaXzExXzEzOCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDExLCA3KTtcbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG4gICAgcHJldmxlbiA9IGN1cmxlbjtcbiAgICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgICAgbWF4X2NvdW50ID0gMTM4O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBtYXhfY291bnQgPSA2O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3O1xuICAgICAgbWluX2NvdW50ID0gNDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0cnVjdCB0aGUgSHVmZm1hbiB0cmVlIGZvciB0aGUgYml0IGxlbmd0aHMgYW5kIHJldHVybiB0aGUgaW5kZXggaW5cbiAqIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuICovXG5mdW5jdGlvbiBidWlsZF9ibF90cmVlKHMpIHtcbiAgdmFyIG1heF9ibGluZGV4OyAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIERldGVybWluZSB0aGUgYml0IGxlbmd0aCBmcmVxdWVuY2llcyBmb3IgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXMgKi9cbiAgc2Nhbl90cmVlKHMsIHMuZHluX2x0cmVlLCBzLmxfZGVzYy5tYXhfY29kZSk7XG4gIHNjYW5fdHJlZShzLCBzLmR5bl9kdHJlZSwgcy5kX2Rlc2MubWF4X2NvZGUpO1xuXG4gIC8qIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWU6ICovXG4gIGJ1aWxkX3RyZWUocywgcy5ibF9kZXNjKTtcbiAgLyogb3B0X2xlbiBub3cgaW5jbHVkZXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMsIGV4Y2VwdFxuICAgKiB0aGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aHMgY29kZXMgYW5kIHRoZSA1KzUrNCBiaXRzIGZvciB0aGUgY291bnRzLlxuICAgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBiaXQgbGVuZ3RoIGNvZGVzIHRvIHNlbmQuIFRoZSBwa3ppcCBmb3JtYXRcbiAgICogcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCA0IGJpdCBsZW5ndGggY29kZXMgYmUgc2VudC4gKGFwcG5vdGUudHh0IHNheXNcbiAgICogMyBidXQgdGhlIGFjdHVhbCB2YWx1ZSB1c2VkIGlzIDQuKVxuICAgKi9cbiAgZm9yIChtYXhfYmxpbmRleCA9IEJMX0NPREVTIC0gMTsgbWF4X2JsaW5kZXggPj0gMzsgbWF4X2JsaW5kZXgtLSkge1xuICAgIGlmIChzLmJsX3RyZWVbYmxfb3JkZXJbbWF4X2JsaW5kZXhdICogMiArIDFdLyouTGVuKi8gIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvKiBVcGRhdGUgb3B0X2xlbiB0byBpbmNsdWRlIHRoZSBiaXQgbGVuZ3RoIHRyZWUgYW5kIGNvdW50cyAqL1xuICBzLm9wdF9sZW4gKz0gMyAqIChtYXhfYmxpbmRleCArIDEpICsgNSArIDUgKyA0O1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmR5biB0cmVlczogZHluICVsZCwgc3RhdCAlbGRcIixcbiAgLy8gICAgICAgIHMtPm9wdF9sZW4sIHMtPnN0YXRpY19sZW4pKTtcblxuICByZXR1cm4gbWF4X2JsaW5kZXg7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBoZWFkZXIgZm9yIGEgYmxvY2sgdXNpbmcgZHluYW1pYyBIdWZmbWFuIHRyZWVzOiB0aGUgY291bnRzLCB0aGVcbiAqIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMsIHRoZSBsaXRlcmFsIHRyZWUgYW5kIHRoZSBkaXN0YW5jZSB0cmVlLlxuICogSU4gYXNzZXJ0aW9uOiBsY29kZXMgPj0gMjU3LCBkY29kZXMgPj0gMSwgYmxjb2RlcyA+PSA0LlxuICovXG5mdW5jdGlvbiBzZW5kX2FsbF90cmVlcyhzLCBsY29kZXMsIGRjb2RlcywgYmxjb2Rlcylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBpbnQgbGNvZGVzLCBkY29kZXMsIGJsY29kZXM7IC8qIG51bWJlciBvZiBjb2RlcyBmb3IgZWFjaCB0cmVlICovXG57XG4gIHZhciByYW5rOyAgICAgICAgICAgICAgICAgICAgLyogaW5kZXggaW4gYmxfb3JkZXIgKi9cblxuICAvL0Fzc2VydCAobGNvZGVzID49IDI1NyAmJiBkY29kZXMgPj0gMSAmJiBibGNvZGVzID49IDQsIFwibm90IGVub3VnaCBjb2Rlc1wiKTtcbiAgLy9Bc3NlcnQgKGxjb2RlcyA8PSBMX0NPREVTICYmIGRjb2RlcyA8PSBEX0NPREVTICYmIGJsY29kZXMgPD0gQkxfQ09ERVMsXG4gIC8vICAgICAgICBcInRvbyBtYW55IGNvZGVzXCIpO1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvdW50czogXCIpKTtcbiAgc2VuZF9iaXRzKHMsIGxjb2RlcyAtIDI1NywgNSk7IC8qIG5vdCArMjU1IGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dCAqL1xuICBzZW5kX2JpdHMocywgZGNvZGVzIC0gMSwgICA1KTtcbiAgc2VuZF9iaXRzKHMsIGJsY29kZXMgLSA0LCAgNCk7IC8qIG5vdCAtMyBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHQgKi9cbiAgZm9yIChyYW5rID0gMDsgcmFuayA8IGJsY29kZXM7IHJhbmsrKykge1xuICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY29kZSAlMmQgXCIsIGJsX29yZGVyW3JhbmtdKSk7XG4gICAgc2VuZF9iaXRzKHMsIHMuYmxfdHJlZVtibF9vcmRlcltyYW5rXSAqIDIgKyAxXS8qLkxlbiovLCAzKTtcbiAgfVxuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xuXG4gIHNlbmRfdHJlZShzLCBzLmR5bl9sdHJlZSwgbGNvZGVzIC0gMSk7IC8qIGxpdGVyYWwgdHJlZSAqL1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmxpdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcblxuICBzZW5kX3RyZWUocywgcy5keW5fZHRyZWUsIGRjb2RlcyAtIDEpOyAvKiBkaXN0YW5jZSB0cmVlICovXG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZGlzdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENoZWNrIGlmIHRoZSBkYXRhIHR5cGUgaXMgVEVYVCBvciBCSU5BUlksIHVzaW5nIHRoZSBmb2xsb3dpbmcgYWxnb3JpdGhtOlxuICogLSBURVhUIGlmIHRoZSB0d28gY29uZGl0aW9ucyBiZWxvdyBhcmUgc2F0aXNmaWVkOlxuICogICAgYSkgVGhlcmUgYXJlIG5vIG5vbi1wb3J0YWJsZSBjb250cm9sIGNoYXJhY3RlcnMgYmVsb25naW5nIHRvIHRoZVxuICogICAgICAgXCJibGFjayBsaXN0XCIgKDAuLjYsIDE0Li4yNSwgMjguLjMxKS5cbiAqICAgIGIpIFRoZXJlIGlzIGF0IGxlYXN0IG9uZSBwcmludGFibGUgY2hhcmFjdGVyIGJlbG9uZ2luZyB0byB0aGVcbiAqICAgICAgIFwid2hpdGUgbGlzdFwiICg5IHtUQUJ9LCAxMCB7TEZ9LCAxMyB7Q1J9LCAzMi4uMjU1KS5cbiAqIC0gQklOQVJZIG90aGVyd2lzZS5cbiAqIC0gVGhlIGZvbGxvd2luZyBwYXJ0aWFsbHktcG9ydGFibGUgY29udHJvbCBjaGFyYWN0ZXJzIGZvcm0gYVxuICogICBcImdyYXkgbGlzdFwiIHRoYXQgaXMgaWdub3JlZCBpbiB0aGlzIGRldGVjdGlvbiBhbGdvcml0aG06XG4gKiAgICg3IHtCRUx9LCA4IHtCU30sIDExIHtWVH0sIDEyIHtGRn0sIDI2IHtTVUJ9LCAyNyB7RVNDfSkuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZHMgRnJlcSBvZiBkeW5fbHRyZWUgYXJlIHNldC5cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0X2RhdGFfdHlwZShzKSB7XG4gIC8qIGJsYWNrX21hc2sgaXMgdGhlIGJpdCBtYXNrIG9mIGJsYWNrLWxpc3RlZCBieXRlc1xuICAgKiBzZXQgYml0cyAwLi42LCAxNC4uMjUsIGFuZCAyOC4uMzFcbiAgICogMHhmM2ZmYzA3ZiA9IGJpbmFyeSAxMTExMDAxMTExMTExMTExMTEwMDAwMDAwMTExMTExMVxuICAgKi9cbiAgdmFyIGJsYWNrX21hc2sgPSAweGYzZmZjMDdmO1xuICB2YXIgbjtcblxuICAvKiBDaGVjayBmb3Igbm9uLXRleHR1YWwgKFwiYmxhY2stbGlzdGVkXCIpIGJ5dGVzLiAqL1xuICBmb3IgKG4gPSAwOyBuIDw9IDMxOyBuKyssIGJsYWNrX21hc2sgPj4+PSAxKSB7XG4gICAgaWYgKChibGFja19tYXNrICYgMSkgJiYgKHMuZHluX2x0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBaX0JJTkFSWTtcbiAgICB9XG4gIH1cblxuICAvKiBDaGVjayBmb3IgdGV4dHVhbCAoXCJ3aGl0ZS1saXN0ZWRcIikgYnl0ZXMuICovXG4gIGlmIChzLmR5bl9sdHJlZVs5ICogMl0vKi5GcmVxKi8gIT09IDAgfHwgcy5keW5fbHRyZWVbMTAgKiAyXS8qLkZyZXEqLyAhPT0gMCB8fFxuICAgICAgcy5keW5fbHRyZWVbMTMgKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgIHJldHVybiBaX1RFWFQ7XG4gIH1cbiAgZm9yIChuID0gMzI7IG4gPCBMSVRFUkFMUzsgbisrKSB7XG4gICAgaWYgKHMuZHluX2x0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgICAgcmV0dXJuIFpfVEVYVDtcbiAgICB9XG4gIH1cblxuICAvKiBUaGVyZSBhcmUgbm8gXCJibGFjay1saXN0ZWRcIiBvciBcIndoaXRlLWxpc3RlZFwiIGJ5dGVzOlxuICAgKiB0aGlzIHN0cmVhbSBlaXRoZXIgaXMgZW1wdHkgb3IgaGFzIHRvbGVyYXRlZCAoXCJncmF5LWxpc3RlZFwiKSBieXRlcyBvbmx5LlxuICAgKi9cbiAgcmV0dXJuIFpfQklOQVJZO1xufVxuXG5cbnZhciBzdGF0aWNfaW5pdF9kb25lID0gZmFsc2U7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgdHJlZSBkYXRhIHN0cnVjdHVyZXMgZm9yIGEgbmV3IHpsaWIgc3RyZWFtLlxuICovXG5mdW5jdGlvbiBfdHJfaW5pdChzKVxue1xuXG4gIGlmICghc3RhdGljX2luaXRfZG9uZSkge1xuICAgIHRyX3N0YXRpY19pbml0KCk7XG4gICAgc3RhdGljX2luaXRfZG9uZSA9IHRydWU7XG4gIH1cblxuICBzLmxfZGVzYyAgPSBuZXcgVHJlZURlc2Mocy5keW5fbHRyZWUsIHN0YXRpY19sX2Rlc2MpO1xuICBzLmRfZGVzYyAgPSBuZXcgVHJlZURlc2Mocy5keW5fZHRyZWUsIHN0YXRpY19kX2Rlc2MpO1xuICBzLmJsX2Rlc2MgPSBuZXcgVHJlZURlc2Mocy5ibF90cmVlLCBzdGF0aWNfYmxfZGVzYyk7XG5cbiAgcy5iaV9idWYgPSAwO1xuICBzLmJpX3ZhbGlkID0gMDtcblxuICAvKiBJbml0aWFsaXplIHRoZSBmaXJzdCBibG9jayBvZiB0aGUgZmlyc3QgZmlsZTogKi9cbiAgaW5pdF9ibG9jayhzKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSBzdG9yZWQgYmxvY2tcbiAqL1xuZnVuY3Rpb24gX3RyX3N0b3JlZF9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgKmJ1ZjsgICAgICAgLyogaW5wdXQgYmxvY2sgKi9cbi8vdWxnIHN0b3JlZF9sZW47ICAgLyogbGVuZ3RoIG9mIGlucHV0IGJsb2NrICovXG4vL2ludCBsYXN0OyAgICAgICAgIC8qIG9uZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGUgKi9cbntcbiAgc2VuZF9iaXRzKHMsIChTVE9SRURfQkxPQ0sgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7ICAgIC8qIHNlbmQgYmxvY2sgdHlwZSAqL1xuICBjb3B5X2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgdHJ1ZSk7IC8qIHdpdGggaGVhZGVyICovXG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIG9uZSBlbXB0eSBzdGF0aWMgYmxvY2sgdG8gZ2l2ZSBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlLlxuICogVGhpcyB0YWtlcyAxMCBiaXRzLCBvZiB3aGljaCA3IG1heSByZW1haW4gaW4gdGhlIGJpdCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIF90cl9hbGlnbihzKSB7XG4gIHNlbmRfYml0cyhzLCBTVEFUSUNfVFJFRVMgPDwgMSwgMyk7XG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIHN0YXRpY19sdHJlZSk7XG4gIGJpX2ZsdXNoKHMpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRGV0ZXJtaW5lIHRoZSBiZXN0IGVuY29kaW5nIGZvciB0aGUgY3VycmVudCBibG9jazogZHluYW1pYyB0cmVlcywgc3RhdGljXG4gKiB0cmVlcyBvciBzdG9yZSwgYW5kIG91dHB1dCB0aGUgZW5jb2RlZCBibG9jayB0byB0aGUgemlwIGZpbGUuXG4gKi9cbmZ1bmN0aW9uIF90cl9mbHVzaF9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgKmJ1ZjsgICAgICAgLyogaW5wdXQgYmxvY2ssIG9yIE5VTEwgaWYgdG9vIG9sZCAqL1xuLy91bGcgc3RvcmVkX2xlbjsgICAvKiBsZW5ndGggb2YgaW5wdXQgYmxvY2sgKi9cbi8vaW50IGxhc3Q7ICAgICAgICAgLyogb25lIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZSAqL1xue1xuICB2YXIgb3B0X2xlbmIsIHN0YXRpY19sZW5iOyAgLyogb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBpbiBieXRlcyAqL1xuICB2YXIgbWF4X2JsaW5kZXggPSAwOyAgICAgICAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIEJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzIHVubGVzcyBhIHN0b3JlZCBibG9jayBpcyBmb3JjZWQgKi9cbiAgaWYgKHMubGV2ZWwgPiAwKSB7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZmlsZSBpcyBiaW5hcnkgb3IgdGV4dCAqL1xuICAgIGlmIChzLnN0cm0uZGF0YV90eXBlID09PSBaX1VOS05PV04pIHtcbiAgICAgIHMuc3RybS5kYXRhX3R5cGUgPSBkZXRlY3RfZGF0YV90eXBlKHMpO1xuICAgIH1cblxuICAgIC8qIENvbnN0cnVjdCB0aGUgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXMgKi9cbiAgICBidWlsZF90cmVlKHMsIHMubF9kZXNjKTtcbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5saXQgZGF0YTogZHluICVsZCwgc3RhdCAlbGRcIiwgcy0+b3B0X2xlbixcbiAgICAvLyAgICAgICAgcy0+c3RhdGljX2xlbikpO1xuXG4gICAgYnVpbGRfdHJlZShzLCBzLmRfZGVzYyk7XG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxuZGlzdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLCBzLT5vcHRfbGVuLFxuICAgIC8vICAgICAgICBzLT5zdGF0aWNfbGVuKSk7XG4gICAgLyogQXQgdGhpcyBwb2ludCwgb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBhcmUgdGhlIHRvdGFsIGJpdCBsZW5ndGhzIG9mXG4gICAgICogdGhlIGNvbXByZXNzZWQgYmxvY2sgZGF0YSwgZXhjbHVkaW5nIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucy5cbiAgICAgKi9cblxuICAgIC8qIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWUgZm9yIHRoZSBhYm92ZSB0d28gdHJlZXMsIGFuZCBnZXQgdGhlIGluZGV4XG4gICAgICogaW4gYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gICAgICovXG4gICAgbWF4X2JsaW5kZXggPSBidWlsZF9ibF90cmVlKHMpO1xuXG4gICAgLyogRGV0ZXJtaW5lIHRoZSBiZXN0IGVuY29kaW5nLiBDb21wdXRlIHRoZSBibG9jayBsZW5ndGhzIGluIGJ5dGVzLiAqL1xuICAgIG9wdF9sZW5iID0gKHMub3B0X2xlbiArIDMgKyA3KSA+Pj4gMztcbiAgICBzdGF0aWNfbGVuYiA9IChzLnN0YXRpY19sZW4gKyAzICsgNykgPj4+IDM7XG5cbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5vcHQgJWx1KCVsdSkgc3RhdCAlbHUoJWx1KSBzdG9yZWQgJWx1IGxpdCAldSBcIixcbiAgICAvLyAgICAgICAgb3B0X2xlbmIsIHMtPm9wdF9sZW4sIHN0YXRpY19sZW5iLCBzLT5zdGF0aWNfbGVuLCBzdG9yZWRfbGVuLFxuICAgIC8vICAgICAgICBzLT5sYXN0X2xpdCkpO1xuXG4gICAgaWYgKHN0YXRpY19sZW5iIDw9IG9wdF9sZW5iKSB7IG9wdF9sZW5iID0gc3RhdGljX2xlbmI7IH1cblxuICB9IGVsc2Uge1xuICAgIC8vIEFzc2VydChidWYgIT0gKGNoYXIqKTAsIFwibG9zdCBidWZcIik7XG4gICAgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYiA9IHN0b3JlZF9sZW4gKyA1OyAvKiBmb3JjZSBhIHN0b3JlZCBibG9jayAqL1xuICB9XG5cbiAgaWYgKChzdG9yZWRfbGVuICsgNCA8PSBvcHRfbGVuYikgJiYgKGJ1ZiAhPT0gLTEpKSB7XG4gICAgLyogNDogdHdvIHdvcmRzIGZvciB0aGUgbGVuZ3RocyAqL1xuXG4gICAgLyogVGhlIHRlc3QgYnVmICE9IE5VTEwgaXMgb25seSBuZWNlc3NhcnkgaWYgTElUX0JVRlNJWkUgPiBXU0laRS5cbiAgICAgKiBPdGhlcndpc2Ugd2UgY2FuJ3QgaGF2ZSBwcm9jZXNzZWQgbW9yZSB0aGFuIFdTSVpFIGlucHV0IGJ5dGVzIHNpbmNlXG4gICAgICogdGhlIGxhc3QgYmxvY2sgZmx1c2gsIGJlY2F1c2UgY29tcHJlc3Npb24gd291bGQgaGF2ZSBiZWVuXG4gICAgICogc3VjY2Vzc2Z1bC4gSWYgTElUX0JVRlNJWkUgPD0gV1NJWkUsIGl0IGlzIG5ldmVyIHRvbyBsYXRlIHRvXG4gICAgICogdHJhbnNmb3JtIGEgYmxvY2sgaW50byBhIHN0b3JlZCBibG9jay5cbiAgICAgKi9cbiAgICBfdHJfc3RvcmVkX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdCk7XG5cbiAgfSBlbHNlIGlmIChzLnN0cmF0ZWd5ID09PSBaX0ZJWEVEIHx8IHN0YXRpY19sZW5iID09PSBvcHRfbGVuYikge1xuXG4gICAgc2VuZF9iaXRzKHMsIChTVEFUSUNfVFJFRVMgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7XG4gICAgY29tcHJlc3NfYmxvY2socywgc3RhdGljX2x0cmVlLCBzdGF0aWNfZHRyZWUpO1xuXG4gIH0gZWxzZSB7XG4gICAgc2VuZF9iaXRzKHMsIChEWU5fVFJFRVMgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7XG4gICAgc2VuZF9hbGxfdHJlZXMocywgcy5sX2Rlc2MubWF4X2NvZGUgKyAxLCBzLmRfZGVzYy5tYXhfY29kZSArIDEsIG1heF9ibGluZGV4ICsgMSk7XG4gICAgY29tcHJlc3NfYmxvY2socywgcy5keW5fbHRyZWUsIHMuZHluX2R0cmVlKTtcbiAgfVxuICAvLyBBc3NlcnQgKHMtPmNvbXByZXNzZWRfbGVuID09IHMtPmJpdHNfc2VudCwgXCJiYWQgY29tcHJlc3NlZCBzaXplXCIpO1xuICAvKiBUaGUgYWJvdmUgY2hlY2sgaXMgbWFkZSBtb2QgMl4zMiwgZm9yIGZpbGVzIGxhcmdlciB0aGFuIDUxMiBNQlxuICAgKiBhbmQgdUxvbmcgaW1wbGVtZW50ZWQgb24gMzIgYml0cy5cbiAgICovXG4gIGluaXRfYmxvY2socyk7XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBiaV93aW5kdXAocyk7XG4gIH1cbiAgLy8gVHJhY2V2KChzdGRlcnIsXCJcXG5jb21wcmxlbiAlbHUoJWx1KSBcIiwgcy0+Y29tcHJlc3NlZF9sZW4+PjMsXG4gIC8vICAgICAgIHMtPmNvbXByZXNzZWRfbGVuLTcqbGFzdCkpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhdmUgdGhlIG1hdGNoIGluZm8gYW5kIHRhbGx5IHRoZSBmcmVxdWVuY3kgY291bnRzLiBSZXR1cm4gdHJ1ZSBpZlxuICogdGhlIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBfdHJfdGFsbHkocywgZGlzdCwgbGMpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdW5zaWduZWQgZGlzdDsgIC8qIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nICovXG4vLyAgICB1bnNpZ25lZCBsYzsgICAgLyogbWF0Y2ggbGVuZ3RoLU1JTl9NQVRDSCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdD09MCkgKi9cbntcbiAgLy92YXIgb3V0X2xlbmd0aCwgaW5fbGVuZ3RoLCBkY29kZTtcblxuICBzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBzLmxhc3RfbGl0ICogMl0gICAgID0gKGRpc3QgPj4+IDgpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgcy5sYXN0X2xpdCAqIDIgKyAxXSA9IGRpc3QgJiAweGZmO1xuXG4gIHMucGVuZGluZ19idWZbcy5sX2J1ZiArIHMubGFzdF9saXRdID0gbGMgJiAweGZmO1xuICBzLmxhc3RfbGl0Kys7XG5cbiAgaWYgKGRpc3QgPT09IDApIHtcbiAgICAvKiBsYyBpcyB0aGUgdW5tYXRjaGVkIGNoYXIgKi9cbiAgICBzLmR5bl9sdHJlZVtsYyAqIDJdLyouRnJlcSovKys7XG4gIH0gZWxzZSB7XG4gICAgcy5tYXRjaGVzKys7XG4gICAgLyogSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSCAqL1xuICAgIGRpc3QtLTsgICAgICAgICAgICAgLyogZGlzdCA9IG1hdGNoIGRpc3RhbmNlIC0gMSAqL1xuICAgIC8vQXNzZXJ0KCh1c2gpZGlzdCA8ICh1c2gpTUFYX0RJU1QocykgJiZcbiAgICAvLyAgICAgICAodXNoKWxjIDw9ICh1c2gpKE1BWF9NQVRDSC1NSU5fTUFUQ0gpICYmXG4gICAgLy8gICAgICAgKHVzaClkX2NvZGUoZGlzdCkgPCAodXNoKURfQ09ERVMsICBcIl90cl90YWxseTogYmFkIG1hdGNoXCIpO1xuXG4gICAgcy5keW5fbHRyZWVbKF9sZW5ndGhfY29kZVtsY10gKyBMSVRFUkFMUyArIDEpICogMl0vKi5GcmVxKi8rKztcbiAgICBzLmR5bl9kdHJlZVtkX2NvZGUoZGlzdCkgKiAyXS8qLkZyZXEqLysrO1xuICB9XG5cbi8vICghKSBUaGlzIGJsb2NrIGlzIGRpc2FibGVkIGluIHpsaWIgZGVmYXVsdHMsXG4vLyBkb24ndCBlbmFibGUgaXQgZm9yIGJpbmFyeSBjb21wYXRpYmlsaXR5XG5cbi8vI2lmZGVmIFRSVU5DQVRFX0JMT0NLXG4vLyAgLyogVHJ5IHRvIGd1ZXNzIGlmIGl0IGlzIHByb2ZpdGFibGUgdG8gc3RvcCB0aGUgY3VycmVudCBibG9jayBoZXJlICovXG4vLyAgaWYgKChzLmxhc3RfbGl0ICYgMHgxZmZmKSA9PT0gMCAmJiBzLmxldmVsID4gMikge1xuLy8gICAgLyogQ29tcHV0ZSBhbiB1cHBlciBib3VuZCBmb3IgdGhlIGNvbXByZXNzZWQgbGVuZ3RoICovXG4vLyAgICBvdXRfbGVuZ3RoID0gcy5sYXN0X2xpdCo4O1xuLy8gICAgaW5fbGVuZ3RoID0gcy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQ7XG4vL1xuLy8gICAgZm9yIChkY29kZSA9IDA7IGRjb2RlIDwgRF9DT0RFUzsgZGNvZGUrKykge1xuLy8gICAgICBvdXRfbGVuZ3RoICs9IHMuZHluX2R0cmVlW2Rjb2RlKjJdLyouRnJlcSovICogKDUgKyBleHRyYV9kYml0c1tkY29kZV0pO1xuLy8gICAgfVxuLy8gICAgb3V0X2xlbmd0aCA+Pj49IDM7XG4vLyAgICAvL1RyYWNldigoc3RkZXJyLFwiXFxubGFzdF9saXQgJXUsIGluICVsZCwgb3V0IH4lbGQoJWxkJSUpIFwiLFxuLy8gICAgLy8gICAgICAgcy0+bGFzdF9saXQsIGluX2xlbmd0aCwgb3V0X2xlbmd0aCxcbi8vICAgIC8vICAgICAgIDEwMEwgLSBvdXRfbGVuZ3RoKjEwMEwvaW5fbGVuZ3RoKSk7XG4vLyAgICBpZiAocy5tYXRjaGVzIDwgKHMubGFzdF9saXQ+PjEpLyppbnQgLzIqLyAmJiBvdXRfbGVuZ3RoIDwgKGluX2xlbmd0aD4+MSkvKmludCAvMiovKSB7XG4vLyAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgfVxuLy8gIH1cbi8vI2VuZGlmXG5cbiAgcmV0dXJuIChzLmxhc3RfbGl0ID09PSBzLmxpdF9idWZzaXplIC0gMSk7XG4gIC8qIFdlIGF2b2lkIGVxdWFsaXR5IHdpdGggbGl0X2J1ZnNpemUgYmVjYXVzZSBvZiB3cmFwYXJvdW5kIGF0IDY0S1xuICAgKiBvbiAxNiBiaXQgbWFjaGluZXMgYW5kIGJlY2F1c2Ugc3RvcmVkIGJsb2NrcyBhcmUgcmVzdHJpY3RlZCB0b1xuICAgKiA2NEstMSBieXRlcy5cbiAgICovXG59XG5cbmV4cG9ydHMuX3RyX2luaXQgID0gX3RyX2luaXQ7XG5leHBvcnRzLl90cl9zdG9yZWRfYmxvY2sgPSBfdHJfc3RvcmVkX2Jsb2NrO1xuZXhwb3J0cy5fdHJfZmx1c2hfYmxvY2sgID0gX3RyX2ZsdXNoX2Jsb2NrO1xuZXhwb3J0cy5fdHJfdGFsbHkgPSBfdHJfdGFsbHk7XG5leHBvcnRzLl90cl9hbGlnbiA9IF90cl9hbGlnbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5mdW5jdGlvbiBaU3RyZWFtKCkge1xuICAvKiBuZXh0IGlucHV0IGJ5dGUgKi9cbiAgdGhpcy5pbnB1dCA9IG51bGw7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcbiAgdGhpcy5uZXh0X2luID0gMDtcbiAgLyogbnVtYmVyIG9mIGJ5dGVzIGF2YWlsYWJsZSBhdCBpbnB1dCAqL1xuICB0aGlzLmF2YWlsX2luID0gMDtcbiAgLyogdG90YWwgbnVtYmVyIG9mIGlucHV0IGJ5dGVzIHJlYWQgc28gZmFyICovXG4gIHRoaXMudG90YWxfaW4gPSAwO1xuICAvKiBuZXh0IG91dHB1dCBieXRlIHNob3VsZCBiZSBwdXQgdGhlcmUgKi9cbiAgdGhpcy5vdXRwdXQgPSBudWxsOyAvLyBKUyBzcGVjaWZpYywgYmVjYXVzZSB3ZSBoYXZlIG5vIHBvaW50ZXJzXG4gIHRoaXMubmV4dF9vdXQgPSAwO1xuICAvKiByZW1haW5pbmcgZnJlZSBzcGFjZSBhdCBvdXRwdXQgKi9cbiAgdGhpcy5hdmFpbF9vdXQgPSAwO1xuICAvKiB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgb3V0cHV0IHNvIGZhciAqL1xuICB0aGlzLnRvdGFsX291dCA9IDA7XG4gIC8qIGxhc3QgZXJyb3IgbWVzc2FnZSwgTlVMTCBpZiBubyBlcnJvciAqL1xuICB0aGlzLm1zZyA9ICcnLypaX05VTEwqLztcbiAgLyogbm90IHZpc2libGUgYnkgYXBwbGljYXRpb25zICovXG4gIHRoaXMuc3RhdGUgPSBudWxsO1xuICAvKiBiZXN0IGd1ZXNzIGFib3V0IHRoZSBkYXRhIHR5cGU6IGJpbmFyeSBvciB0ZXh0ICovXG4gIHRoaXMuZGF0YV90eXBlID0gMi8qWl9VTktOT1dOKi87XG4gIC8qIGFkbGVyMzIgdmFsdWUgb2YgdGhlIHVuY29tcHJlc3NlZCBkYXRhICovXG4gIHRoaXMuYWRsZXIgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpTdHJlYW07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZGF0YV9jb2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2RhdGFfbGluZWFyR3JhZGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX3JhZGlhbEdyYWRpZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZmFjdG9yaWVzX2ZhY3RvcnlCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=