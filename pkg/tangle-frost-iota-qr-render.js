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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL2ZhY3Rvcmllcy9xclJlbmRlcmVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaGVscGVycy9pbWFnZUhlbHBlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvaW1hZ2VzL2pwZWdFbmNvZGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9pbWFnZXMvcG5nRW5jb2Rlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vc3JjL2luaXRSZW5kZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy9jYW52YXNSZW5kZXJlck9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL2pwZWdSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi4vLi4vc3JjL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uLi8uLi9zcmMvcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4uLy4uL3NyYy9yZW5kZXJUeXBlcy90ZXh0UmVuZGVyZXJPcHRpb25zLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL2RlZmxhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3V0aWxzL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9hZGxlcjMyLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi90cmVlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3pzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRclJlbmRlci9leHRlcm5hbCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9saW5lYXJHcmFkaWVudFwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyUmVuZGVyL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXIvZXh0ZXJuYWwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7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QSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQSxVQUFJLEVBQUo7QUFDQTs7QUFDQSxVQUFJLE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBSSxDQUFKO0FBQ0EsVUFBTSxFQUFFLEdBQUcsQ0FBWDtBQUNBLFVBQU0sR0FBRyxHQUFHLEVBQVo7O0FBQ0EsV0FBSyxDQUFDLEdBQUcsQ0FBVCxFQUFZLENBQUMsR0FBRyxFQUFoQixFQUFvQixFQUFFLENBQXRCLEVBQXlCO0FBQ3JCLFVBQUUsR0FBRyxJQUFJLENBQUMsT0FBRCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBQ0EsVUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBWCxDQUFUO0FBRUEsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQWxCO0FBRUE7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsY0FBYzs7QUFFakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtB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QXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFD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QSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2h0QkEscUY7Ozs7Ozs7Ozs7O0FDQUEsOEY7Ozs7Ozs7Ozs7O0FDQUEsOEY7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsOEY7Ozs7Ozs7Ozs7O0FDQUEsK0Y7Ozs7Ozs7Ozs7O0FDQUEsK0Y7Ozs7Ozs7Ozs7O0FDQUEsK0YiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtcXItcmVuZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2xpbmVhckdyYWRpZW50XCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtcXItcmVuZGVyXCIsIFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9saW5lYXJHcmFkaWVudFwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9yYWRpYWxHcmFkaWVudFwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiLCBcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1yZW5kZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvbGluZWFyR3JhZGllbnRcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvcmFkaWFsR3JhZGllbnRcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKSwgcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhUXJSZW5kZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvbGluZWFyR3JhZGllbnRcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvcmFkaWFsR3JhZGllbnRcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiXSwgcm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiXSwgcm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIl0sIHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2RhdGFfY29sb3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2RhdGFfbGluZWFyR3JhZGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2RhdGFfcmFkaWFsR3JhZGllbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2ZhY3Rvcmllc19mYWN0b3J5QmFzZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBRUiByZW5kZXJlcnMuXHJcbiAqL1xyXG5jbGFzcyBRUlJlbmRlcmVyRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUVJSZW5kZXJlckZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFFSUmVuZGVyZXJGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBRUlJlbmRlcmVyRmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUVJSZW5kZXJlckZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUVJSZW5kZXJlckZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSUmVuZGVyZXJGYWN0b3J5ID0gUVJSZW5kZXJlckZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSlNaVzVrWlhKbGNrWmhZM1J2Y25rdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDNGeVVtVnVaR1Z5WlhKR1lXTjBiM0o1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3h2UmtGQmFVWTdRVUZIYWtZN08wZEJSVWM3UVVGRFNDeE5RVUZoTEdsQ1FVRnJRaXhUUVVGUkxIbENRVUYzUWp0SlFVa3pSRHM3TzA5QlIwYzdTVUZEU0R0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTzFGQlEyeENMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRPVUlzYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzYVVKQlFXbENMRVZCUVVVc1EwRkJRenRUUVVONlJEdFJRVU5FTEU5QlFVOHNhVUpCUVdsQ0xFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMR2xDUVVGcFFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRExFTkJRVU03UTBGRFNqdEJRVE5DUkN3NFEwRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIGhlbHAgd2l0aCBtYW5pcHVsYXRpbmcgaW1hZ2UgZGF0YS5cclxuICovXHJcbmNsYXNzIEltYWdlSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgZGF0YSB0byBhbiBpbWFnZSBzb3VyY2UuXHJcbiAgICAgKiBAcGFyYW0gbWltZVR5cGUgVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBzb3VyY2UgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBpbWFnZSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkYXRhVG9JbWFnZVNvdXJjZShtaW1lVHlwZSwgZGF0YSkge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShtaW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcHJvdmlkZXIgYSBtaW1lVHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltYWdlU291cmNlO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRhdGEsIFVpbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBiaW5hcnkgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RGF0YSA9IGJ0b2EoYmluYXJ5KTtcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsJHtiYXNlNjREYXRhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhkYXRhKSkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjREYXRhID0gYnRvYShkYXRhKTtcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsJHtiYXNlNjREYXRhfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YSBtdXN0IGJlIGEgVWludDhBcnJheSBvciBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbWFnZVNvdXJjZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkltYWdlSGVscGVyID0gSW1hZ2VIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXMWhaMlZJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5cGJXRm5aVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwWkJRV2xHTzBGQlEycEdMRzlHUVVGcFJqdEJRVU5xUmpzN1IwRkZSenRCUVVOSUxFMUJRV0VzVjBGQlZ6dEpRVU53UWpzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRm5RaXhGUVVGRkxFbEJRWGxDTzFGQlEzWkZMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEyNUVPMUZCUlVRc1NVRkJTU3hYUVVGWExFTkJRVU03VVVGRmFFSXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVN1dVRkRka01zU1VGQlNTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJoQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRlRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVZNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVRN1dVRkRSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVjBGQlZ5eEhRVUZITEZGQlFWRXNVVUZCVVN4WFFVRlhMRlZCUVZVc1JVRkJSU3hEUVVGRE8xTkJRM3BFTzJGQlFVMHNTVUZCU1N3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTndReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRPVUlzVjBGQlZ5eEhRVUZITEZGQlFWRXNVVUZCVVN4WFFVRlhMRlZCUVZVc1JVRkJSU3hEUVVGRE8xTkJRM3BFTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRlJDeFBRVUZQTEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wTkJRMG83UVVFdlFrUXNhME5CSzBKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBKUEVHIEVuY29kZXIuXHJcbiAqIEJhc2VkIG9uIEpQRUcgZW5jb2RlciBwb3J0ZWQgdG8gSmF2YVNjcmlwdCBhbmQgb3B0aW1pemVkIGJ5IEFuZHJlYXMgUml0dGVyLCB3d3cuYnl0ZXN0cm9tLmV1LCAxMS8yMDA5XHJcbiAqL1xyXG5jbGFzcyBKcGVnRW5jb2RlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBKcGVnRW5jb2Rlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5feVRhYmxlID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl91dlRhYmxlID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9mZHRibFkgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX2ZkdGJsVVYgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX2JpdENvZGUgPSBuZXcgQXJyYXkoNjU1MzUpO1xyXG4gICAgICAgIHRoaXMuX2NhdGVnb3J5ID0gbmV3IEFycmF5KDY1NTM1KTtcclxuICAgICAgICB0aGlzLl9vdXRwdXRmRENUUXVhbnQgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX2R1ID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl9ieXRlT3V0ID0gW107XHJcbiAgICAgICAgdGhpcy5fYnl0ZU5ldyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnl0ZVBvcyA9IDc7XHJcbiAgICAgICAgdGhpcy5feWR1ID0gbmV3IEFycmF5KDY0KTtcclxuICAgICAgICB0aGlzLl91ZHUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgICAgIHRoaXMuX3ZkdSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICAgICAgdGhpcy5fcmdiWXV2VGFibGUgPSBuZXcgQXJyYXkoMjA0OCk7XHJcbiAgICAgICAgdGhpcy5pbml0SHVmZm1hblRibCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENhdGVnb3J5TnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UkdCWVVWVGFibGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIHRoZSBpbWFnZSB3aXRoIHRoZSBnaXZlbiBxdWFsaXR5LlxyXG4gICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gaW1hZ2VEYXRhIFRoZSBkYXRhIGZvciB0aGUgaW1hZ2UuXHJcbiAgICAgKiBAcGFyYW0gcXVhbGl0eSBUaGUgcXVhbGl0eSB0byBlbmNvZGUgdGhlIGltYWdlIGF0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgZm9yIHRoZSBlbmNvZGVkIGltYWdlLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGUod2lkdGgsIGhlaWdodCwgaW1hZ2VEYXRhLCBxdWFsaXR5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgYml0IHdyaXRlclxyXG4gICAgICAgIHRoaXMuX2J5dGVPdXQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9ieXRlTmV3ID0gMDtcclxuICAgICAgICB0aGlzLl9ieXRlUG9zID0gNztcclxuICAgICAgICAvLyBBZGQgSlBFRyBoZWFkZXJzXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkQ4KTsgLy8gU09JXHJcbiAgICAgICAgdGhpcy53cml0ZUFQUDAoKTtcclxuICAgICAgICB0aGlzLndyaXRlRFFUKCk7XHJcbiAgICAgICAgdGhpcy53cml0ZVNPRjAod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy53cml0ZURIVCgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVTT1MoKTtcclxuICAgICAgICAvLyBFbmNvZGUgOHg4IG1hY3JvYmxvY2tzXHJcbiAgICAgICAgbGV0IERDWSA9IDA7XHJcbiAgICAgICAgbGV0IERDVSA9IDA7XHJcbiAgICAgICAgbGV0IERDViA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU5ldyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnl0ZVBvcyA9IDc7XHJcbiAgICAgICAgY29uc3QgcXVhZFdpZHRoID0gd2lkdGggKiA0O1xyXG4gICAgICAgIGxldCB4O1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBsZXQgcjtcclxuICAgICAgICBsZXQgZztcclxuICAgICAgICBsZXQgYjtcclxuICAgICAgICBsZXQgc3RhcnQ7XHJcbiAgICAgICAgbGV0IHA7XHJcbiAgICAgICAgbGV0IGNvbDtcclxuICAgICAgICBsZXQgcm93O1xyXG4gICAgICAgIGxldCBwb3M7XHJcbiAgICAgICAgd2hpbGUgKHkgPCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh4IDwgcXVhZFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IHF1YWRXaWR0aCAqIHkgKyB4O1xyXG4gICAgICAgICAgICAgICAgcCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgY29sID0gLTE7XHJcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChwb3MgPSAwOyBwb3MgPCA2NDsgcG9zKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cgPSBwb3MgPj4gMzsgLy8gLzhcclxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAocG9zICYgNykgKiA0OyAvLyAlOFxyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBzdGFydCArIChyb3cgKiBxdWFkV2lkdGgpICsgY29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ICsgcm93ID49IGhlaWdodCkgeyAvLyBwYWRkaW5nIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIC09IChxdWFkV2lkdGggKiAoeSArIDEgKyByb3cgLSBoZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggKyBjb2wgPj0gcXVhZFdpZHRoKSB7IC8vIHBhZGRpbmcgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAtPSAoKHggKyBjb2wpIC0gcXVhZFdpZHRoICsgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBpbWFnZURhdGFbcCsrXTtcclxuICAgICAgICAgICAgICAgICAgICBnID0gaW1hZ2VEYXRhW3ArK107XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIC8vIGNhbGN1bGF0ZSBZVVYgdmFsdWVzIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgWURVW3Bvc109KCgoIDAuMjk5MDApKnIrKCAwLjU4NzAwKSpnKyggMC4xMTQwMCkqYikpLTEyODsgLy8tMHg4MFxyXG4gICAgICAgICAgICAgICAgICAgIFVEVVtwb3NdPSgoKC0wLjE2ODc0KSpyKygtMC4zMzEyNikqZysoIDAuNTAwMDApKmIpKTtcclxuICAgICAgICAgICAgICAgICAgICBWRFVbcG9zXT0oKCggMC41MDAwMCkqcisoLTAuNDE4NjkpKmcrKC0wLjA4MTMxKSpiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgbG9va3VwIHRhYmxlIChzbGlnaHRseSBmYXN0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5feWR1W3Bvc10gPSAoKHRoaXMuX3JnYll1dlRhYmxlW3JdICsgdGhpcy5fcmdiWXV2VGFibGVbKGcgKyAyNTYpID4+IDBdICsgdGhpcy5fcmdiWXV2VGFibGVbKGIgKyA1MTIpID4+IDBdKSA+PiAxNikgLSAxMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdWR1W3Bvc10gPSAoKHRoaXMuX3JnYll1dlRhYmxlWyhyICsgNzY4KSA+PiAwXSArIHRoaXMuX3JnYll1dlRhYmxlWyhnICsgMTAyNCkgPj4gMF0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoYiArIDEyODApID4+IDBdKSA+PiAxNikgLSAxMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmR1W3Bvc10gPSAoKHRoaXMuX3JnYll1dlRhYmxlWyhyICsgMTI4MCkgPj4gMF0gKyB0aGlzLl9yZ2JZdXZUYWJsZVsoZyArIDE1MzYpID4+IDBdICsgdGhpcy5fcmdiWXV2VGFibGVbKGIgKyAxNzkyKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRENZID0gdGhpcy5wcm9jZXNzRFUodGhpcy5feWR1LCB0aGlzLl9mZHRibFksIERDWSwgdGhpcy5feWRjSGFzaFRhYmxlLCB0aGlzLl95YWNIYXNoVGFibGUpO1xyXG4gICAgICAgICAgICAgICAgRENVID0gdGhpcy5wcm9jZXNzRFUodGhpcy5fdWR1LCB0aGlzLl9mZHRibFVWLCBEQ1UsIHRoaXMuX3V2ZGNIYXNoVGFibGUsIHRoaXMuX3V2YWNIYXNoVGFibGUpO1xyXG4gICAgICAgICAgICAgICAgRENWID0gdGhpcy5wcm9jZXNzRFUodGhpcy5fdmR1LCB0aGlzLl9mZHRibFVWLCBEQ1YsIHRoaXMuX3V2ZGNIYXNoVGFibGUsIHRoaXMuX3V2YWNIYXNoVGFibGUpO1xyXG4gICAgICAgICAgICAgICAgeCArPSAzMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB5ICs9IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIHRoZSBiaXQgYWxpZ25tZW50IG9mIHRoZSBFT0kgbWFya2VyXHJcbiAgICAgICAgaWYgKHRoaXMuX2J5dGVQb3MgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxsYml0cyA9IFtdO1xyXG4gICAgICAgICAgICBmaWxsYml0c1sxXSA9IHRoaXMuX2J5dGVQb3MgKyAxO1xyXG4gICAgICAgICAgICBmaWxsYml0c1swXSA9ICgxIDw8ICh0aGlzLl9ieXRlUG9zICsgMSkpIC0gMTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoZmlsbGJpdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGRDkpOyAvL0VPSVxyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLl9ieXRlT3V0KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0UXVhbGl0eShxdWFsaXR5KSB7XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPD0gMCB8fCBxdWFsaXR5ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUXVhbGl0eSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMTAwLCBpdCBpcyAke3F1YWxpdHl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZiA9IDA7XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPCA1MCkge1xyXG4gICAgICAgICAgICBzZiA9IE1hdGguZmxvb3IoNTAwMCAvIHF1YWxpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2YgPSBNYXRoLmZsb29yKDIwMCAtIHF1YWxpdHkgKiAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0UXVhbnRUYWJsZXMoc2YpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpbml0UXVhbnRUYWJsZXMoc2YpIHtcclxuICAgICAgICBjb25zdCBZUVQgPSBbXHJcbiAgICAgICAgICAgIDE2LCAxMSwgMTAsIDE2LCAyNCwgNDAsIDUxLCA2MSxcclxuICAgICAgICAgICAgMTIsIDEyLCAxNCwgMTksIDI2LCA1OCwgNjAsIDU1LFxyXG4gICAgICAgICAgICAxNCwgMTMsIDE2LCAyNCwgNDAsIDU3LCA2OSwgNTYsXHJcbiAgICAgICAgICAgIDE0LCAxNywgMjIsIDI5LCA1MSwgODcsIDgwLCA2MixcclxuICAgICAgICAgICAgMTgsIDIyLCAzNywgNTYsIDY4LCAxMDksIDEwMywgNzcsXHJcbiAgICAgICAgICAgIDI0LCAzNSwgNTUsIDY0LCA4MSwgMTA0LCAxMTMsIDkyLFxyXG4gICAgICAgICAgICA0OSwgNjQsIDc4LCA4NywgMTAzLCAxMjEsIDEyMCwgMTAxLFxyXG4gICAgICAgICAgICA3MiwgOTIsIDk1LCA5OCwgMTEyLCAxMDAsIDEwMywgOTlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IE1hdGguZmxvb3IoKFlRVFtpXSAqIHNmICsgNTApIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0ID4gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3lUYWJsZVtKcGVnRW5jb2Rlci5TSUdfWkFHW2ldXSA9IHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFVWUVQgPSBbXHJcbiAgICAgICAgICAgIDE3LCAxOCwgMjQsIDQ3LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgMTgsIDIxLCAyNiwgNjYsIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICAyNCwgMjYsIDU2LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDQ3LCA2NiwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY0OyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHUgPSBNYXRoLmZsb29yKChVVlFUW2pdICogc2YgKyA1MCkgLyAxMDApO1xyXG4gICAgICAgICAgICBpZiAodSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHUgPiAyNTUpIHtcclxuICAgICAgICAgICAgICAgIHUgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdXZUYWJsZVtKcGVnRW5jb2Rlci5TSUdfWkFHW2pdXSA9IHU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFhc2YgPSBbXHJcbiAgICAgICAgICAgIDEsIDEuMzg3MDM5ODQ1LCAxLjMwNjU2Mjk2NSwgMS4xNzU4NzU2MDIsXHJcbiAgICAgICAgICAgIDEsIDAuNzg1Njk0OTU4LCAwLjU0MTE5NjEsIDAuMjc1ODk5Mzc5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgayA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZkdGJsWVtrXSA9ICgxIC8gKHRoaXMuX3lUYWJsZVtKcGVnRW5jb2Rlci5TSUdfWkFHW2tdXSAqIGFhc2Zbcm93XSAqIGFhc2ZbY29sXSAqIDgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZkdGJsVVZba10gPSAoMSAvICh0aGlzLl91dlRhYmxlW0pwZWdFbmNvZGVyLlNJR19aQUdba11dICogYWFzZltyb3ddICogYWFzZltjb2xdICogOCkpO1xyXG4gICAgICAgICAgICAgICAgaysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb21wdXRlSHVmZm1hblRibChucmNvZGVzLCBzdGRUYWJsZSkge1xyXG4gICAgICAgIGxldCBjb2RldmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBwb3NJblRhYmxlID0gMDtcclxuICAgICAgICBjb25zdCBIVCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDw9IDE2OyBrKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gbnJjb2Rlc1trXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRUYWJsZVtwb3NJblRhYmxlXV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIEhUW3N0ZFRhYmxlW3Bvc0luVGFibGVdXVswXSA9IGNvZGV2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEhUW3N0ZFRhYmxlW3Bvc0luVGFibGVdXVsxXSA9IGs7XHJcbiAgICAgICAgICAgICAgICBwb3NJblRhYmxlKys7XHJcbiAgICAgICAgICAgICAgICBjb2RldmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2RldmFsdWUgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEhUO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpbml0SHVmZm1hblRibCgpIHtcclxuICAgICAgICB0aGlzLl95ZGNIYXNoVGFibGUgPSB0aGlzLmNvbXB1dGVIdWZmbWFuVGJsKEpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfTlJDT0RFUywgSnBlZ0VuY29kZXIuU1REX0RDX0xVTUlOQU5DRV9WQUxVRVMpO1xyXG4gICAgICAgIHRoaXMuX3V2ZGNIYXNoVGFibGUgPSB0aGlzLmNvbXB1dGVIdWZmbWFuVGJsKEpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9OUkNPREVTLCBKcGVnRW5jb2Rlci5TVERfRENfQ0hST01JTkFOQ0VfVkFMVUVTKTtcclxuICAgICAgICB0aGlzLl95YWNIYXNoVGFibGUgPSB0aGlzLmNvbXB1dGVIdWZmbWFuVGJsKEpwZWdFbmNvZGVyLlNURF9BQ19MVU1JTkFOQ0VfTlJDT0RFUywgSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9WQUxVRVMpO1xyXG4gICAgICAgIHRoaXMuX3V2YWNIYXNoVGFibGUgPSB0aGlzLmNvbXB1dGVIdWZmbWFuVGJsKEpwZWdFbmNvZGVyLlNURF9BQ19DSFJPTUlOQU5DRV9OUkNPREVTLCBKcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfVkFMVUVTKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgaW5pdENhdGVnb3J5TnVtYmVyKCkge1xyXG4gICAgICAgIGxldCBucmxvd2VyID0gMTtcclxuICAgICAgICBsZXQgbnJ1cHBlciA9IDI7XHJcbiAgICAgICAgZm9yIChsZXQgY2F0ID0gMTsgY2F0IDw9IDE1OyBjYXQrKykge1xyXG4gICAgICAgICAgICAvL1Bvc2l0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgZm9yIChsZXQgbnIgPSBucmxvd2VyOyBuciA8IG5ydXBwZXI7IG5yKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhdGVnb3J5WzMyNzY3ICsgbnJdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5yXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5yXVsxXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucl1bMF0gPSBucjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL05lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgZm9yIChsZXQgbnJuZWcgPSAtKG5ydXBwZXIgLSAxKTsgbnJuZWcgPD0gLW5ybG93ZXI7IG5ybmVnKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhdGVnb3J5WzMyNzY3ICsgbnJuZWddID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5ybmVnXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYml0Q29kZVszMjc2NyArIG5ybmVnXVsxXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpdENvZGVbMzI3NjcgKyBucm5lZ11bMF0gPSBucnVwcGVyIC0gMSArIG5ybmVnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ybG93ZXIgPDw9IDE7XHJcbiAgICAgICAgICAgIG5ydXBwZXIgPDw9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpbml0UkdCWVVWVGFibGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVtpXSA9IDE5NTk1ICogaTtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyAyNTYpID4+IDBdID0gMzg0NzAgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZ2JZdXZUYWJsZVsoaSArIDUxMikgPj4gMF0gPSA3NDcxICogaSArIDB4ODAwMDtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyA3NjgpID4+IDBdID0gLTExMDU5ICogaTtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyAxMDI0KSA+PiAwXSA9IC0yMTcwOSAqIGk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgMTI4MCkgPj4gMF0gPSAzMjc2OCAqIGkgKyAweDgwN0ZGRjtcclxuICAgICAgICAgICAgdGhpcy5fcmdiWXV2VGFibGVbKGkgKyAxNTM2KSA+PiAwXSA9IC0yNzQzOSAqIGk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JnYll1dlRhYmxlWyhpICsgMTc5MikgPj4gMF0gPSAtNTMyOSAqIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZUJpdHMoYnMpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJzWzBdO1xyXG4gICAgICAgIGxldCBwb3N2YWwgPSBic1sxXSAtIDE7XHJcbiAgICAgICAgd2hpbGUgKHBvc3ZhbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmICgxIDw8IHBvc3ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J5dGVOZXcgfD0gKDEgPDwgdGhpcy5fYnl0ZVBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zdmFsLS07XHJcbiAgICAgICAgICAgIHRoaXMuX2J5dGVQb3MtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J5dGVQb3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYnl0ZU5ldyA9PT0gMHhGRikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKDB4RkYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUodGhpcy5fYnl0ZU5ldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ieXRlUG9zID0gNztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J5dGVOZXcgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZUJ5dGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9ieXRlT3V0LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZVdvcmQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUgPj4gOCkgJiAweEZGKTtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUpICYgMHhGRik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZEQ1RRdWFudChkYXRhLCBmZHRibCkge1xyXG4gICAgICAgIGxldCBkMDtcclxuICAgICAgICBsZXQgZDE7XHJcbiAgICAgICAgbGV0IGQyO1xyXG4gICAgICAgIGxldCBkMztcclxuICAgICAgICBsZXQgZDQ7XHJcbiAgICAgICAgbGV0IGQ1O1xyXG4gICAgICAgIGxldCBkNjtcclxuICAgICAgICBsZXQgZDc7XHJcbiAgICAgICAgLyogUGFzcyAxOiBwcm9jZXNzIHJvd3MuICovXHJcbiAgICAgICAgbGV0IGRhdGFPZmYgPSAwO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGNvbnN0IEk4ID0gODtcclxuICAgICAgICBjb25zdCBJNjQgPSA2NDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgSTg7ICsraSkge1xyXG4gICAgICAgICAgICBkMCA9IGRhdGFbZGF0YU9mZl07XHJcbiAgICAgICAgICAgIGQxID0gZGF0YVtkYXRhT2ZmICsgMV07XHJcbiAgICAgICAgICAgIGQyID0gZGF0YVtkYXRhT2ZmICsgMl07XHJcbiAgICAgICAgICAgIGQzID0gZGF0YVtkYXRhT2ZmICsgM107XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgNF07XHJcbiAgICAgICAgICAgIGQ1ID0gZGF0YVtkYXRhT2ZmICsgNV07XHJcbiAgICAgICAgICAgIGQ2ID0gZGF0YVtkYXRhT2ZmICsgNl07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgN107XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDAgPSBkMCArIGQ3O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA3ID0gZDAgLSBkNztcclxuICAgICAgICAgICAgY29uc3QgdG1wMSA9IGQxICsgZDY7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDYgPSBkMSAtIGQ2O1xyXG4gICAgICAgICAgICBjb25zdCB0bXAyID0gZDIgKyBkNTtcclxuICAgICAgICAgICAgY29uc3QgdG1wNSA9IGQyIC0gZDU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDMgPSBkMyArIGQ0O1xyXG4gICAgICAgICAgICBjb25zdCB0bXA0ID0gZDMgLSBkNDtcclxuICAgICAgICAgICAgLyogRXZlbiBwYXJ0ICovXHJcbiAgICAgICAgICAgIGxldCB0bXAxMCA9IHRtcDAgKyB0bXAzOyAvKiBwaGFzZSAyICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDEzID0gdG1wMCAtIHRtcDM7XHJcbiAgICAgICAgICAgIGxldCB0bXAxMSA9IHRtcDEgKyB0bXAyO1xyXG4gICAgICAgICAgICBsZXQgdG1wMTIgPSB0bXAxIC0gdG1wMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmXSA9IHRtcDEwICsgdG1wMTE7IC8qIHBoYXNlIDMgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNF0gPSB0bXAxMCAtIHRtcDExO1xyXG4gICAgICAgICAgICBjb25zdCB6MSA9ICh0bXAxMiArIHRtcDEzKSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAyXSA9IHRtcDEzICsgejE7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNl0gPSB0bXAxMyAtIHoxO1xyXG4gICAgICAgICAgICAvKiBPZGQgcGFydCAqL1xyXG4gICAgICAgICAgICB0bXAxMCA9IHRtcDQgKyB0bXA1OyAvKiBwaGFzZSAyICovXHJcbiAgICAgICAgICAgIHRtcDExID0gdG1wNSArIHRtcDY7XHJcbiAgICAgICAgICAgIHRtcDEyID0gdG1wNiArIHRtcDc7XHJcbiAgICAgICAgICAgIC8qIFRoZSByb3RhdG9yIGlzIG1vZGlmaWVkIGZyb20gZmlnIDQtOCB0byBhdm9pZCBleHRyYSBuZWdhdGlvbnMuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHo1ID0gKHRtcDEwIC0gdG1wMTIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoyID0gMC41NDExOTYxICogdG1wMTAgKyB6NTsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejQgPSAxLjMwNjU2Mjk2NSAqIHRtcDEyICsgejU7IC8qIGMyK2M2ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHozID0gdG1wMTEgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuICAgICAgICAgICAgY29uc3QgejExID0gdG1wNyArIHozOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoxMyA9IHRtcDcgLSB6MztcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNV0gPSB6MTMgKyB6MjsgLyogcGhhc2UgNiAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAzXSA9IHoxMyAtIHoyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAxXSA9IHoxMSArIHo0O1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA3XSA9IHoxMSAtIHo0O1xyXG4gICAgICAgICAgICBkYXRhT2ZmICs9IDg7IC8qIGFkdmFuY2UgcG9pbnRlciB0byBuZXh0IHJvdyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBQYXNzIDI6IHByb2Nlc3MgY29sdW1ucy4gKi9cclxuICAgICAgICBkYXRhT2ZmID0gMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgSTg7ICsraSkge1xyXG4gICAgICAgICAgICBkMCA9IGRhdGFbZGF0YU9mZl07XHJcbiAgICAgICAgICAgIGQxID0gZGF0YVtkYXRhT2ZmICsgOF07XHJcbiAgICAgICAgICAgIGQyID0gZGF0YVtkYXRhT2ZmICsgMTZdO1xyXG4gICAgICAgICAgICBkMyA9IGRhdGFbZGF0YU9mZiArIDI0XTtcclxuICAgICAgICAgICAgZDQgPSBkYXRhW2RhdGFPZmYgKyAzMl07XHJcbiAgICAgICAgICAgIGQ1ID0gZGF0YVtkYXRhT2ZmICsgNDBdO1xyXG4gICAgICAgICAgICBkNiA9IGRhdGFbZGF0YU9mZiArIDQ4XTtcclxuICAgICAgICAgICAgZDcgPSBkYXRhW2RhdGFPZmYgKyA1Nl07XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDBwMiA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDdwMiA9IGQwIC0gZDc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDFwMiA9IGQxICsgZDY7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDZwMiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDJwMiA9IGQyICsgZDU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDVwMiA9IGQyIC0gZDU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDNwMiA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDRwMiA9IGQzIC0gZDQ7XHJcbiAgICAgICAgICAgIC8qIEV2ZW4gcGFydCAqL1xyXG4gICAgICAgICAgICBsZXQgdG1wMTBwMiA9IHRtcDBwMiArIHRtcDNwMjsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICBjb25zdCB0bXAxM3AyID0gdG1wMHAyIC0gdG1wM3AyO1xyXG4gICAgICAgICAgICBsZXQgdG1wMTFwMiA9IHRtcDFwMiArIHRtcDJwMjtcclxuICAgICAgICAgICAgbGV0IHRtcDEycDIgPSB0bXAxcDIgLSB0bXAycDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZl0gPSB0bXAxMHAyICsgdG1wMTFwMjsgLyogcGhhc2UgMyAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAzMl0gPSB0bXAxMHAyIC0gdG1wMTFwMjtcclxuICAgICAgICAgICAgY29uc3QgejFwMiA9ICh0bXAxMnAyICsgdG1wMTNwMikgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMTZdID0gdG1wMTNwMiArIHoxcDI7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNDhdID0gdG1wMTNwMiAtIHoxcDI7XHJcbiAgICAgICAgICAgIC8qIE9kZCBwYXJ0ICovXHJcbiAgICAgICAgICAgIHRtcDEwcDIgPSB0bXA0cDIgKyB0bXA1cDI7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdG1wMTFwMiA9IHRtcDVwMiArIHRtcDZwMjtcclxuICAgICAgICAgICAgdG1wMTJwMiA9IHRtcDZwMiArIHRtcDdwMjtcclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgY29uc3QgejVwMiA9ICh0bXAxMHAyIC0gdG1wMTJwMikgKiAwLjM4MjY4MzQzMzsgLyogYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejJwMiA9IDAuNTQxMTk2MSAqIHRtcDEwcDIgKyB6NXAyOyAvKiBjMi1jNiAqL1xyXG4gICAgICAgICAgICBjb25zdCB6NHAyID0gMS4zMDY1NjI5NjUgKiB0bXAxMnAyICsgejVwMjsgLyogYzIrYzYgKi9cclxuICAgICAgICAgICAgY29uc3QgejNwMiA9IHRtcDExcDIgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuICAgICAgICAgICAgY29uc3QgejExcDIgPSB0bXA3cDIgKyB6M3AyOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGNvbnN0IHoxM3AyID0gdG1wN3AyIC0gejNwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNDBdID0gejEzcDIgKyB6MnAyOyAvKiBwaGFzZSA2ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDI0XSA9IHoxM3AyIC0gejJwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgOF0gPSB6MTFwMiArIHo0cDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDU2XSA9IHoxMXAyIC0gejRwMjtcclxuICAgICAgICAgICAgZGF0YU9mZisrOyAvKiBhZHZhbmNlIHBvaW50ZXIgdG8gbmV4dCBjb2x1bW4gKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUXVhbnRpemUvZGVzY2FsZSB0aGUgY29lZmZpY2llbnRzXHJcbiAgICAgICAgbGV0IGZEQ1RRdWFudDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgSTY0OyArK2kpIHtcclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIHF1YW50aXphdGlvbiBhbmQgc2NhbGluZyBmYWN0b3IgJiBSb3VuZCB0byBuZWFyZXN0IGludGVnZXJcclxuICAgICAgICAgICAgZkRDVFF1YW50ID0gZGF0YVtpXSAqIGZkdGJsW2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRmRENUUXVhbnRbaV0gPSAoZkRDVFF1YW50ID4gMCkgPyAoKGZEQ1RRdWFudCArIDAuNSkgfCAwKSA6ICgoZkRDVFF1YW50IC0gMC41KSB8IDApO1xyXG4gICAgICAgICAgICAvL291dHB1dGZEQ1RRdWFudFtpXSA9IGZyb3VuZChmRENUUXVhbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fb3V0cHV0ZkRDVFF1YW50O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZUFQUDAoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMHhGRkUwKTsgLy8gbWFya2VyXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoMTYpOyAvLyBsZW5ndGhcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDRBKTsgLy8gSlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4NDYpOyAvLyBGXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHg0OSk7IC8vIElcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyA9IFwiSkZJRlwiLCdcXDAnXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIHZlcnNpb25oaVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyB2ZXJzaW9ubG9cclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8geHl1bml0c1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDEpOyAvLyB4ZGVuc2l0eVxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDEpOyAvLyB5ZGVuc2l0eVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyB0aHVtYm53aWR0aFxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyB0aHVtYm5oZWlnaHRcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd3JpdGVTT0YwKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGQzApOyAvLyBtYXJrZXJcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxNyk7IC8vIGxlbmd0aCwgdHJ1ZWNvbG9yIFlVViBKUEdcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSg4KTsgLy8gcHJlY2lzaW9uXHJcbiAgICAgICAgdGhpcy53cml0ZVdvcmQoaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMyk7IC8vIG5yb2Zjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMSk7IC8vIElkWVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVllcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gUVRZXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMik7IC8vIElkVVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVlVcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gUVRVXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMyk7IC8vIElkVlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVlZcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gUVRWXHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlRFFUKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDB4RkZEQik7IC8vIG1hcmtlclxyXG4gICAgICAgIHRoaXMud3JpdGVXb3JkKDEzMik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSh0aGlzLl95VGFibGVbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY0OyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUodGhpcy5fdXZUYWJsZVtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZURIVCgpIHtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGQzQpOyAvLyBtYXJrZXJcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweDAxQTIpOyAvLyBsZW5ndGhcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gSFRZRENpbmZvXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfTlJDT0RFU1tpICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSAxMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9EQ19MVU1JTkFOQ0VfVkFMVUVTW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMCk7IC8vIEhUWUFDaW5mb1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTY7IGsrKykge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShKcGVnRW5jb2Rlci5TVERfQUNfTFVNSU5BTkNFX05SQ09ERVNbayArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPD0gMTYxOyBsKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9WQUxVRVNbbF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgxKTsgLy8gSFRVRENpbmZvXHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCAxNjsgbSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKEpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9OUkNPREVTW20gKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDw9IDExOyBuKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX1ZBTFVFU1tuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVFVBQ2luZm9cclxuICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IDE2OyBvKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX05SQ09ERVNbbyArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTYxOyBwKyspIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX1ZBTFVFU1twXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZVNPUygpIHtcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgweEZGREEpOyAvLyBtYXJrZXJcclxuICAgICAgICB0aGlzLndyaXRlV29yZCgxMik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDMpOyAvLyBucm9mY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDEpOyAvLyBJZFlcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTsgLy8gSFRZXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMik7IC8vIElkVVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4MTEpOyAvLyBIVFVcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgzKTsgLy8gSWRWXHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVlxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyBTc1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDB4M0YpOyAvLyBTZVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKDApOyAvLyBCZlxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwcm9jZXNzRFUoQ0RVLCBmZHRibCwgcGFzc2VkREMsIEhUREMsIEhUQUMpIHtcclxuICAgICAgICBsZXQgREMgPSBwYXNzZWREQztcclxuICAgICAgICBjb25zdCBFT0IgPSBIVEFDWzB4MDBdO1xyXG4gICAgICAgIGNvbnN0IG0xNnplcm9lcyA9IEhUQUNbMHhGMF07XHJcbiAgICAgICAgbGV0IHBvcztcclxuICAgICAgICBjb25zdCBJMTYgPSAxNjtcclxuICAgICAgICBjb25zdCBJNjMgPSA2MztcclxuICAgICAgICBjb25zdCBJNjQgPSA2NDtcclxuICAgICAgICBjb25zdCBEVV9EQ1QgPSB0aGlzLmZEQ1RRdWFudChDRFUsIGZkdGJsKTtcclxuICAgICAgICAvL1ppZ1phZyByZW9yZGVyXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBJNjQ7ICsraikge1xyXG4gICAgICAgICAgICB0aGlzLl9kdVtKcGVnRW5jb2Rlci5TSUdfWkFHW2pdXSA9IERVX0RDVFtqXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX2R1WzBdIC0gREM7XHJcbiAgICAgICAgREMgPSB0aGlzLl9kdVswXTtcclxuICAgICAgICAvL0VuY29kZSBEQ1xyXG4gICAgICAgIGlmIChkaWZmID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKEhURENbMF0pOyAvLyBEaWZmIG1pZ2h0IGJlIDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBvcyA9IDMyNzY3ICsgZGlmZjtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoSFREQ1t0aGlzLl9jYXRlZ29yeVtwb3NdXSk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKHRoaXMuX2JpdENvZGVbcG9zXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRW5jb2RlIEFDc1xyXG4gICAgICAgIGxldCBlbmQwcG9zID0gNjM7IC8vIHdhcyBjb25zdC4uLiB3aGljaCBpcyBjcmF6eVxyXG4gICAgICAgIGZvciAoOyAoZW5kMHBvcyA+IDApICYmICh0aGlzLl9kdVtlbmQwcG9zXSA9PT0gMCk7IGVuZDBwb3MtLSkgeyB9XHJcbiAgICAgICAgLy9lbmQwcG9zID0gZmlyc3QgZWxlbWVudCBpbiByZXZlcnNlIG9yZGVyICE9MFxyXG4gICAgICAgIGlmIChlbmQwcG9zID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKEVPQik7XHJcbiAgICAgICAgICAgIHJldHVybiBEQztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGkgPSAxO1xyXG4gICAgICAgIGxldCBsbmc7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gZW5kMHBvcykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydHBvcyA9IGk7XHJcbiAgICAgICAgICAgIGZvciAoOyAodGhpcy5fZHVbaV0gPT09IDApICYmIChpIDw9IGVuZDBwb3MpOyArK2kpIHsgfVxyXG4gICAgICAgICAgICBsZXQgbnJ6ZXJvZXMgPSBpIC0gc3RhcnRwb3M7XHJcbiAgICAgICAgICAgIGlmIChucnplcm9lcyA+PSBJMTYpIHtcclxuICAgICAgICAgICAgICAgIGxuZyA9IG5yemVyb2VzID4+IDQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBucm1hcmtlciA9IDE7IG5ybWFya2VyIDw9IGxuZzsgKytucm1hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKG0xNnplcm9lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBucnplcm9lcyA9IG5yemVyb2VzICYgMHhGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcyA9IDMyNzY3ICsgdGhpcy5fZHVbaV07XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCaXRzKEhUQUNbKG5yemVyb2VzIDw8IDQpICsgdGhpcy5fY2F0ZWdvcnlbcG9zXV0pO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQml0cyh0aGlzLl9iaXRDb2RlW3Bvc10pO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmQwcG9zICE9PSBJNjMpIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX05SQ09ERVMgPSBbMCwgMCwgMSwgNSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfRENfTFVNSU5BTkNFX1ZBTFVFUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9OUkNPREVTID0gWzAsIDAsIDIsIDEsIDMsIDMsIDIsIDQsIDMsIDUsIDUsIDQsIDQsIDAsIDAsIDEsIDB4N0RdO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0FDX0xVTUlOQU5DRV9WQUxVRVMgPSBbXHJcbiAgICAweDAxLCAweDAyLCAweDAzLCAweDAwLCAweDA0LCAweDExLCAweDA1LCAweDEyLFxyXG4gICAgMHgyMSwgMHgzMSwgMHg0MSwgMHgwNiwgMHgxMywgMHg1MSwgMHg2MSwgMHgwNyxcclxuICAgIDB4MjIsIDB4NzEsIDB4MTQsIDB4MzIsIDB4ODEsIDB4OTEsIDB4QTEsIDB4MDgsXHJcbiAgICAweDIzLCAweDQyLCAweEIxLCAweEMxLCAweDE1LCAweDUyLCAweEQxLCAweEYwLFxyXG4gICAgMHgyNCwgMHgzMywgMHg2MiwgMHg3MiwgMHg4MiwgMHgwOSwgMHgwQSwgMHgxNixcclxuICAgIDB4MTcsIDB4MTgsIDB4MTksIDB4MUEsIDB4MjUsIDB4MjYsIDB4MjcsIDB4MjgsXHJcbiAgICAweDI5LCAweDJBLCAweDM0LCAweDM1LCAweDM2LCAweDM3LCAweDM4LCAweDM5LFxyXG4gICAgMHgzQSwgMHg0MywgMHg0NCwgMHg0NSwgMHg0NiwgMHg0NywgMHg0OCwgMHg0OSxcclxuICAgIDB4NEEsIDB4NTMsIDB4NTQsIDB4NTUsIDB4NTYsIDB4NTcsIDB4NTgsIDB4NTksXHJcbiAgICAweDVBLCAweDYzLCAweDY0LCAweDY1LCAweDY2LCAweDY3LCAweDY4LCAweDY5LFxyXG4gICAgMHg2QSwgMHg3MywgMHg3NCwgMHg3NSwgMHg3NiwgMHg3NywgMHg3OCwgMHg3OSxcclxuICAgIDB4N0EsIDB4ODMsIDB4ODQsIDB4ODUsIDB4ODYsIDB4ODcsIDB4ODgsIDB4ODksXHJcbiAgICAweDhBLCAweDkyLCAweDkzLCAweDk0LCAweDk1LCAweDk2LCAweDk3LCAweDk4LFxyXG4gICAgMHg5OSwgMHg5QSwgMHhBMiwgMHhBMywgMHhBNCwgMHhBNSwgMHhBNiwgMHhBNyxcclxuICAgIDB4QTgsIDB4QTksIDB4QUEsIDB4QjIsIDB4QjMsIDB4QjQsIDB4QjUsIDB4QjYsXHJcbiAgICAweEI3LCAweEI4LCAweEI5LCAweEJBLCAweEMyLCAweEMzLCAweEM0LCAweEM1LFxyXG4gICAgMHhDNiwgMHhDNywgMHhDOCwgMHhDOSwgMHhDQSwgMHhEMiwgMHhEMywgMHhENCxcclxuICAgIDB4RDUsIDB4RDYsIDB4RDcsIDB4RDgsIDB4RDksIDB4REEsIDB4RTEsIDB4RTIsXHJcbiAgICAweEUzLCAweEU0LCAweEU1LCAweEU2LCAweEU3LCAweEU4LCAweEU5LCAweEVBLFxyXG4gICAgMHhGMSwgMHhGMiwgMHhGMywgMHhGNCwgMHhGNSwgMHhGNiwgMHhGNywgMHhGOCxcclxuICAgIDB4RjksIDB4RkFcclxuXTtcclxuLyogQGludGVybmFsICovXHJcbkpwZWdFbmNvZGVyLlNURF9EQ19DSFJPTUlOQU5DRV9OUkNPREVTID0gWzAsIDAsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0RDX0NIUk9NSU5BTkNFX1ZBTFVFUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuSnBlZ0VuY29kZXIuU1REX0FDX0NIUk9NSU5BTkNFX05SQ09ERVMgPSBbMCwgMCwgMiwgMSwgMiwgNCwgNCwgMywgNCwgNywgNSwgNCwgNCwgMCwgMSwgMiwgMHg3N107XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TVERfQUNfQ0hST01JTkFOQ0VfVkFMVUVTID0gW1xyXG4gICAgMHgwMCwgMHgwMSwgMHgwMiwgMHgwMywgMHgxMSwgMHgwNCwgMHgwNSwgMHgyMSxcclxuICAgIDB4MzEsIDB4MDYsIDB4MTIsIDB4NDEsIDB4NTEsIDB4MDcsIDB4NjEsIDB4NzEsXHJcbiAgICAweDEzLCAweDIyLCAweDMyLCAweDgxLCAweDA4LCAweDE0LCAweDQyLCAweDkxLFxyXG4gICAgMHhBMSwgMHhCMSwgMHhDMSwgMHgwOSwgMHgyMywgMHgzMywgMHg1MiwgMHhGMCxcclxuICAgIDB4MTUsIDB4NjIsIDB4NzIsIDB4RDEsIDB4MEEsIDB4MTYsIDB4MjQsIDB4MzQsXHJcbiAgICAweEUxLCAweDI1LCAweEYxLCAweDE3LCAweDE4LCAweDE5LCAweDFBLCAweDI2LFxyXG4gICAgMHgyNywgMHgyOCwgMHgyOSwgMHgyQSwgMHgzNSwgMHgzNiwgMHgzNywgMHgzOCxcclxuICAgIDB4MzksIDB4M0EsIDB4NDMsIDB4NDQsIDB4NDUsIDB4NDYsIDB4NDcsIDB4NDgsXHJcbiAgICAweDQ5LCAweDRBLCAweDUzLCAweDU0LCAweDU1LCAweDU2LCAweDU3LCAweDU4LFxyXG4gICAgMHg1OSwgMHg1QSwgMHg2MywgMHg2NCwgMHg2NSwgMHg2NiwgMHg2NywgMHg2OCxcclxuICAgIDB4NjksIDB4NkEsIDB4NzMsIDB4NzQsIDB4NzUsIDB4NzYsIDB4NzcsIDB4NzgsXHJcbiAgICAweDc5LCAweDdBLCAweDgyLCAweDgzLCAweDg0LCAweDg1LCAweDg2LCAweDg3LFxyXG4gICAgMHg4OCwgMHg4OSwgMHg4QSwgMHg5MiwgMHg5MywgMHg5NCwgMHg5NSwgMHg5NixcclxuICAgIDB4OTcsIDB4OTgsIDB4OTksIDB4OUEsIDB4QTIsIDB4QTMsIDB4QTQsIDB4QTUsXHJcbiAgICAweEE2LCAweEE3LCAweEE4LCAweEE5LCAweEFBLCAweEIyLCAweEIzLCAweEI0LFxyXG4gICAgMHhCNSwgMHhCNiwgMHhCNywgMHhCOCwgMHhCOSwgMHhCQSwgMHhDMiwgMHhDMyxcclxuICAgIDB4QzQsIDB4QzUsIDB4QzYsIDB4QzcsIDB4QzgsIDB4QzksIDB4Q0EsIDB4RDIsXHJcbiAgICAweEQzLCAweEQ0LCAweEQ1LCAweEQ2LCAweEQ3LCAweEQ4LCAweEQ5LCAweERBLFxyXG4gICAgMHhFMiwgMHhFMywgMHhFNCwgMHhFNSwgMHhFNiwgMHhFNywgMHhFOCwgMHhFOSxcclxuICAgIDB4RUEsIDB4RjIsIDB4RjMsIDB4RjQsIDB4RjUsIDB4RjYsIDB4RjcsIDB4RjgsXHJcbiAgICAweEY5LCAweEZBXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5KcGVnRW5jb2Rlci5TSUdfWkFHID0gW1xyXG4gICAgMCwgMSwgNSwgNiwgMTQsIDE1LCAyNywgMjgsXHJcbiAgICAyLCA0LCA3LCAxMywgMTYsIDI2LCAyOSwgNDIsXHJcbiAgICAzLCA4LCAxMiwgMTcsIDI1LCAzMCwgNDEsIDQzLFxyXG4gICAgOSwgMTEsIDE4LCAyNCwgMzEsIDQwLCA0NCwgNTMsXHJcbiAgICAxMCwgMTksIDIzLCAzMiwgMzksIDQ1LCA1MiwgNTQsXHJcbiAgICAyMCwgMjIsIDMzLCAzOCwgNDYsIDUxLCA1NSwgNjAsXHJcbiAgICAyMSwgMzQsIDM3LCA0NywgNTAsIDU2LCA1OSwgNjEsXHJcbiAgICAzNSwgMzYsIDQ4LCA0OSwgNTcsIDU4LCA2MiwgNjNcclxuXTtcclxuZXhwb3J0cy5KcGVnRW5jb2RlciA9IEpwZWdFbmNvZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbkJsWjBWdVkyOWtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzFoWjJWekwycHdaV2RGYm1OdlpHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExGZEJRVmM3U1VGdlNIQkNPenRQUVVWSE8wbEJRMGc3VVVGRFNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUlRsQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWc1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlhCRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQllTeEZRVUZGTEUxQlFXTXNSVUZCUlN4VFFVRnhRaXhGUVVGRkxFOUJRV1U3VVVGREwwVXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVVY2UWl4M1FrRkJkMEk3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXeENMRzFDUVVGdFFqdFJRVU51UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGYUVJc2VVSkJRWGxDTzFGQlEzcENMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOYUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmFMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXeENMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGTlVJc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFRpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5PTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFRpeEpRVUZKTEV0QlFVc3NRMEZCUXp0UlFVTldMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMDRzU1VGQlNTeEhRVUZITEVOQlFVTTdVVUZEVWl4SlFVRkpMRWRCUVVjc1EwRkJRenRSUVVOU0xFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlExSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRk8xbEJRMllzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTk9MRTlCUVU4c1EwRkJReXhIUVVGSExGTkJRVk1zUlVGQlJUdG5Ra0ZEYkVJc1MwRkJTeXhIUVVGSExGTkJRVk1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNeFFpeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMmRDUVVOV0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRWQ3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVVlNMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8yOUNRVU16UWl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVczdiMEpCUTNKQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTzI5Q1FVTXhRaXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZGY0VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEUxQlFVMHNSVUZCUlN4RlFVRkZMR2xDUVVGcFFqdDNRa0ZEZEVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0eFFrRkROME03YjBKQlJVUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeEZRVUZGTEdkQ1FVRm5RanQzUWtGRGVFTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8zRkNRVU53UXp0dlFrRkZSQ3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRMjVDTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZEYmtJc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVWdVFqczdPenR6UWtGSllqdHZRa0ZGWVN4eFEwRkJjVU03YjBKQlEzSkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yOUNRVU01U0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0dlFrRkROMGtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03YVVKQlJXcEtPMmRDUVVWRUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1owSkJRek5HTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03WjBKQlF6bEdMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdaMEpCUXpsR0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEV0R0WlFVTkVMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRFZqdFJRVVZFTEhsRFFVRjVRenRSUVVONlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRM0JDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOd1FpeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYUVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNM1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xTkJRelZDTzFGQlJVUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVczdVVUZGTjBJc1QwRkJUeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VlFVRlZMRU5CUVVNc1QwRkJaVHRSUVVNNVFpeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU12UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExEUkRRVUUwUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRekZGTzFGQlJVUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzU1VGQlNTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJRc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRMjVETzJGQlFVMDdXVUZEU0N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVkQlFVY3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1JETzFGQlJVUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHVkJRV1VzUTBGQlF5eEZRVUZWTzFGQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSE8xbEJRMUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjN1dVRkRiRU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1UwRkRjRU1zUTBGQlF6dFJRVVZHTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRla0lzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETjBNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRFZEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVU3WjBKQlEyaENMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRFdEdFpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNMVF6dFJRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhPMWxCUTFRc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdVMEZEYWtNc1EwRkJRenRSUVVOR0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5RTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRWRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVN1owSkJRMmhDTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRXRHRaUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZITzFsQlExUXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hYUVVGWExFVkJRVVVzVjBGQlZ6dFpRVU40UXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFhRVUZYTzFOQlEzcERMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRemxDTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRemxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6ZEdMRU5CUVVNc1JVRkJSU3hEUVVGRE8yRkJRMUE3VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2FVSkJRV2xDTEVOQlFVTXNUMEZCYVVJc1JVRkJSU3hSUVVGclFqdFJRVU16UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJFSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMjVDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGRrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU5zUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVNNVFpeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMmRDUVVONFF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOb1F5eFZRVUZWTEVWQlFVVXNRMEZCUXp0blFrRkRZaXhUUVVGVExFVkJRVVVzUTBGQlF6dGhRVU5tTzFsQlEwUXNVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOc1FqdFJRVU5FTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeGpRVUZqTzFGQlEyeENMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGZEJRVmNzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hYUVVGWExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJRenRSUVVOMlNDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNWMEZCVnl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdVVUZETlVnc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEhkQ1FVRjNRaXhGUVVGRkxGZEJRVmNzUTBGQlF5eDFRa0ZCZFVJc1EwRkJReXhEUVVGRE8xRkJRM1pJTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRmRCUVZjc1EwRkJReXd3UWtGQk1FSXNSVUZCUlN4WFFVRlhMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTm9TU3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEd0Q1FVRnJRanRSUVVOMFFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzU1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEYUVNc2EwSkJRV3RDTzFsQlEyeENMRXRCUVVzc1NVRkJTU3hGUVVGRkxFZEJRVWNzVDBGQlR5eEZRVUZGTEVWQlFVVXNSMEZCUnl4UFFVRlBMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGFrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVNdlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRoUVVOeVF6dFpRVU5FTEd0Q1FVRnJRanRaUVVOc1FpeExRVUZMTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzJkQ1FVTjZSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WjBKQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGJFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0aFFVTjZSRHRaUVVORUxFOUJRVThzUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEWkN4UFFVRlBMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMnBDTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hsUVVGbE8xRkJRMjVDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTVReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRM1JFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF5OURMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJoRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU03V1VGRE1VUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYUVRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZGTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRia1E3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhGUVVGWk8xRkJRekZDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFOUJRVThzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9RaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRGRrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRFJDeE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTlVMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU5vUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEV0QlFVc3NTVUZCU1N4RlFVRkZPMjlDUVVONFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU55UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTnlRanR4UWtGQlRUdHZRa0ZEU0N4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0cFFrRkRha003WjBKQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyeENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzSkNPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZOQlFWTXNRMEZCUXl4TFFVRmhPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFdEJRV0U3VVVGRE0wSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYmtNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFRRVUZUTEVOQlFVTXNTVUZCWXl4RlFVRkZMRXRCUVdVN1VVRkROME1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEVUN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRVQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5RTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFBc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFVDeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTlFMREpDUVVFeVFqdFJRVU16UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFFSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTnlRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWFpDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGNrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU55UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEY2tJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTnlRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNKQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRja0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVWeVFpeGxRVUZsTzFsQlEyWXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRTdXVUZEZEVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTXhRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNoQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkZlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlF6VkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVWc1F5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4UlFVRlJPMWxCUTJ4RUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEdGQlFXRTdXVUZETjBNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJSUzlDTEdOQlFXTTdXVUZEWkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRTdXVUZEYkVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEY0VJc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGY0VJc2IwVkJRVzlGTzFsQlEzQkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkU3V1VGRGJFUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1UwRkJVeXhIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WFFVRlhPMWxCUXpsRExFMUJRVTBzUlVGQlJTeEhRVUZITEZkQlFWY3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zVjBGQlZ6dFpRVU5vUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVR0WlFVVjRReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZVHRaUVVOd1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJSWFJDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFN1dVRkRNME1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6ZENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVNM1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZGTjBJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEdsRFFVRnBRenRUUVVOc1JEdFJRVVZFTERoQ1FVRTRRanRSUVVNNVFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFvc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVU3V1VGRGNrSXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU51UWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVjRRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka0lzVFVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOMlFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGRrSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU4yUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzWkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZGZGtJc1pVRkJaVHRaUVVObUxFbEJRVWtzVDBGQlR5eEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhoUVVGaE8xbEJRelZETEUxQlFVMHNUMEZCVHl4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRGFFTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFpRVU01UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFsQlJUbENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRU5CUVVNc1lVRkJZVHRaUVVOb1JDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdXVUZGZGtNc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zVVVGQlVUdFpRVU40UkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhoUVVGaE8xbEJRMnhFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVVndReXhqUVVGak8xbEJRMlFzVDBGQlR5eEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhoUVVGaE8xbEJRM2hETEU5QlFVOHNSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRekZDTEU5QlFVOHNSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJSVEZDTEc5RlFVRnZSVHRaUVVOd1JTeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4UlFVRlJPMWxCUTNoRUxFMUJRVTBzU1VGQlNTeEhRVUZITEZOQlFWTXNSMEZCUnl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ6dFpRVU53UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhYUVVGWExFZEJRVWNzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjN1dVRkRkRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkU3V1VGRk5VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRTdXVUZETVVNc1RVRkJUU3hMUVVGTExFZEJRVWNzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVVTFRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTzFsQlEyaEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOc1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJSV3hETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc2IwTkJRVzlETzFOQlEyeEVPMUZCUlVRc2IwTkJRVzlETzFGQlEzQkRMRWxCUVVrc1UwRkJVeXhEUVVGRE8xRkJRMlFzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVTdXVUZEZEVJc2RVVkJRWFZGTzFsQlEzWkZMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlDTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlJpeDVRMEZCZVVNN1UwRkZOVU03VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGTkJRVk03VVVGRFlpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV6dFJRVU5xUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1R0UlFVTXhRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWjBKQlFXZENPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWk8xRkJReTlDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTzFGQlF5OUNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTzFGQlF6bENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhsUVVGbE8wbEJRM1JETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVeXhEUVVGRExFdEJRV0VzUlVGQlJTeE5RVUZqTzFGQlF6TkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJSeXcwUWtGQk5FSTdVVUZEYkVRc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRmxCUVZrN1VVRkRiRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlNTeHBRa0ZCYVVJN1VVRkRka01zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGSkxFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGSkxFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1VVRkROVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGSkxFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkpMRTFCUVUwN1NVRkRhRU1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UlFVRlJPMUZCUTFvc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNN1VVRkRha01zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGSkxGTkJRVk03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1RE8xRkJRMFFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzQkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFJRVUZSTzFGQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNN1VVRkZha01zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVms3VVVGREwwSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU14UkR0UlFVVkVMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpPMUZCUTJ4RExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRMMFE3VVVGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldUdFJRVU12UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU14UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrN1VVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOcVJUdFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNMElzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNMVJEdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1VVRkJVVHRSUVVOYUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFGQlF6ZENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4cFFrRkJhVUk3VVVGRGNFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRla0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZETlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRla0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVczdVVUZEZUVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzN1VVRkRNMElzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXM3U1VGRE5VSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hUUVVGVExFTkJRVU1zUjBGQllTeEZRVUZGTEV0QlFXVXNSVUZCUlN4UlFVRm5RaXhGUVVGRkxFbEJRV2RDTEVWQlFVVXNTVUZCWjBJN1VVRkRiRWNzU1VGQlNTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTJ4Q0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE4wSXNTVUZCU1N4SFFVRkhMRU5CUVVNN1VVRkRVaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4TlFVRk5MRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU14UXl4blFrRkJaMEk3VVVGRGFFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGFFUTdVVUZEUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4WFFVRlhPMUZCUTFnc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR3RDUVVGclFqdFRRVU01UXp0aFFVRk5PMWxCUTBnc1IwRkJSeXhIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYmtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGRFTTdVVUZEUkN4WlFVRlpPMUZCUTFvc1NVRkJTU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNPRUpCUVRoQ08xRkJRMmhFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRWRCUVVjN1VVRkRha1VzT0VOQlFUaERPMUZCUXpsRExFbEJRVWtzVDBGQlR5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTm1MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEY0VJc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRFlqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlExSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOdVFpeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhPMWxCUTNSRUxFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1dVRkROVUlzU1VGQlNTeFJRVUZSTEVsQlFVa3NSMEZCUnl4RlFVRkZPMmRDUVVOcVFpeEhRVUZITEVkQlFVY3NVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRVVVzVVVGQlVTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSVHR2UWtGRGFFUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHBRa0ZETjBJN1owSkJRMFFzVVVGQlVTeEhRVUZITEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkROMEk3V1VGRFJDeEhRVUZITEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEVUR0UlFVTkVMRWxCUVVrc1QwRkJUeXhMUVVGTExFZEJRVWNzUlVGQlJUdFpRVU5xUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzWkNPMUZCUTBRc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRFpDeERRVUZET3p0QlFYUnpRa1FzWlVGQlpUdEJRVU5UTEc5RFFVRjNRaXhIUVVGaExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnBJTEdWQlFXVTdRVUZEVXl4dFEwRkJkVUlzUjBGQllTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGJrY3NaVUZCWlR0QlFVTlRMRzlEUVVGM1FpeEhRVUZoTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzQklMR1ZCUVdVN1FVRkRVeXh0UTBGQmRVSXNSMEZCWVR0SlFVTjRSQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTTVReXhKUVVGSkxFVkJRVVVzU1VGQlNUdERRVU5pTEVOQlFVTTdRVUZGUml4bFFVRmxPMEZCUTFNc2MwTkJRVEJDTEVkQlFXRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYmtnc1pVRkJaVHRCUVVOVExIRkRRVUY1UWl4SFFVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTnlSeXhsUVVGbE8wRkJRMU1zYzBOQlFUQkNMRWRCUVdFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRkRWdzWlVGQlpUdEJRVU5UTEhGRFFVRjVRaXhIUVVGaE8wbEJRekZFTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wbEJRemxETEVsQlFVa3NSVUZCUlN4SlFVRkpPME5CUTJJc1EwRkJRenRCUVVWR0xHVkJRV1U3UVVGRFV5eHRRa0ZCVHl4SFFVRmhPMGxCUTNoRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpWQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpkQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMGxCUXpsQ0xFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPME5CUTJwRExFTkJRVU03UVVGNlJVNHNhME5CZDNOQ1F5SjkiLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGRlZmxhdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGFrby9saWIvZGVmbGF0ZVwiKSk7XHJcbi8qKlxyXG4gKiBQTkcgRW5jb2Rlci5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvcGVhL1VQTkcuanNcclxuICovXHJcbmNsYXNzIFBuZ0VuY29kZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgdGhlIGltYWdlIGZyYW1lcyB0byBwbmcuXHJcbiAgICAgKiBAcGFyYW0gYnVmcyBUaGUgZnJhbWUgYnVmZmVycyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gdyBUaGUgaW1hZ2Ugd2lkdGguXHJcbiAgICAgKiBAcGFyYW0gaCBUaGUgaW1hZ2UgaGVpZ2h0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgZm9yIHRoZSBpbWFnZS5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlKGJ1ZnMsIHcsIGgpIHtcclxuICAgICAgICBjb25zdCBwcyA9IDA7XHJcbiAgICAgICAgY29uc3QgZm9yYmlkUGx0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGRlbHMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGJ1ZnNbMF0uYnl0ZUxlbmd0aCAqIGJ1ZnMubGVuZ3RoICsgMTAwKTtcclxuICAgICAgICBjb25zdCB3ciA9IFsweDg5LCAweDUwLCAweDRFLCAweDQ3LCAweDBELCAweDBBLCAweDFBLCAweDBBXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhW2ldID0gd3JbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvZmZzZXQgPSA4O1xyXG4gICAgICAgIGNvbnN0IG5pbWcgPSB0aGlzLmNvbXByZXNzUE5HKGJ1ZnMsIHcsIGgsIHBzLCBmb3JiaWRQbHRlKTtcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDEzKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcIklIRFJcIik7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCB3KTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGgpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IG5pbWcuZGVwdGg7XHJcbiAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgZGF0YVtvZmZzZXRdID0gbmltZy5jdHlwZTtcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICBkYXRhW29mZnNldF0gPSAwOyAvLyBjb21wcmVzc1xyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IDA7IC8vIGZpbHRlclxyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIGRhdGFbb2Zmc2V0XSA9IDA7IC8vIGludGVybGFjZVxyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gMTcsIDE3KSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgIC8vIDkgYnl0ZXMgdG8gc2F5LCB0aGF0IGl0IGlzIHNSR0JcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDEpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwic1JHQlwiKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICBkYXRhW29mZnNldF0gPSAxO1xyXG4gICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gNSwgNSkpO1xyXG4gICAgICAgIG9mZnNldCArPSA0OyAvLyBjcmNcclxuICAgICAgICBjb25zdCBhbmltID0gYnVmcy5sZW5ndGggPiAxO1xyXG4gICAgICAgIGlmIChhbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgOCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQVNDSUkoZGF0YSwgb2Zmc2V0LCBcImFjVExcIik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGJ1ZnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgMCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIDEyLCAxMikpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuaW1nLmN0eXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRsID0gbmltZy5wbHRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBkbCAqIDMpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJQTFRFXCIpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aSA9IGkgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IG5pbWcucGx0ZVtpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSAoYykgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gKGMgPj4gOCkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gKGMgPj4gMTYpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyB0aSArIDBdID0gcjtcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgdGkgKyAxXSA9IGc7XHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIHRpICsgMl0gPSBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBkbCAqIDM7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgdGhpcy5jcmMoZGF0YSwgb2Zmc2V0IC0gZGwgKiAzIC0gNCwgZGwgKiAzICsgNCkpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgICAgIGlmIChuaW1nLmdvdEFscGhhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGRsKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJ0Uk5TXCIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIGldID0gKG5pbWcucGx0ZVtpXSA+PiAyNCkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gZGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIGRsIC0gNCwgZGwgKyA0KSk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5pbWcuZnJhbWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyID0gbmltZy5mcmFtZXNbal07XHJcbiAgICAgICAgICAgIGlmIChhbmltKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDI2KTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgXCJmY1RMXCIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZpKyspO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZyLnJlY3Qud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZyLnJlY3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmci5yZWN0LngpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGZyLnJlY3QueSk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVc2hvcnQoZGF0YSwgb2Zmc2V0LCBkZWxzW2pdKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVzaG9ydChkYXRhLCBvZmZzZXQsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XHJcbiAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSBmci5kaXNwb3NlO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0Kys7IC8vIGRpc3Bvc2VcclxuICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IGZyLmJsZW5kO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0Kys7IC8vIGJsZW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIDMwLCAzMCkpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ2QgPSBmci5jaW1nO1xyXG4gICAgICAgICAgICBjb25zdCBkbCA9IGltZ2QubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGRsICsgKGogPT09IDAgPyAwIDogNCkpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgY29uc3QgaW9mZiA9IG9mZnNldDtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUFTQ0lJKGRhdGEsIG9mZnNldCwgKGogPT09IDApID8gXCJJREFUXCIgOiBcImZkQVRcIik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBmaSsrKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyBpXSA9IGltZ2RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGRsO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIGlvZmYsIG9mZnNldCAtIGlvZmYpKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIGNyY1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIDApO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHRoaXMud3JpdGVBU0NJSShkYXRhLCBvZmZzZXQsIFwiSUVORFwiKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICB0aGlzLndyaXRlVWludChkYXRhLCBvZmZzZXQsIHRoaXMuY3JjKGRhdGEsIG9mZnNldCAtIDQsIDQpKTtcclxuICAgICAgICBvZmZzZXQgKz0gNDsgLy8gY3JjXHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLnNsaWNlKDAsIG9mZnNldCkpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb21wcmVzc1BORyhidWZzLCB3LCBoLCBwcywgZm9yYmlkUGx0ZSkge1xyXG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMuY29tcHJlc3MoYnVmcywgdywgaCwgcHMsIDAsIGZvcmJpZFBsdGUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmcm0gPSBvdXQuZnJhbWVzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBudyA9IGZybS5yZWN0LndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBuaCA9IGZybS5yZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgYnBsID0gZnJtLmJwbDtcclxuICAgICAgICAgICAgY29uc3QgYnBwID0gZnJtLmJwcDtcclxuICAgICAgICAgICAgY29uc3QgZmRhdGEgPSBuZXcgVWludDhBcnJheShudyAqIGJwbCArIG5oKTtcclxuICAgICAgICAgICAgZnJtLmNpbWcgPSB0aGlzLmZpbHRlclplcm8oZnJtLmltZywgbmgsIGJwcCwgYnBsLCBmZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbXByZXNzKGluQnVmcywgdywgaCwgaW5QcywgZm9yR0lGLCBmb3JiaWRQbHRlKSB7XHJcbiAgICAgICAgbGV0IGN0eXBlID0gNjtcclxuICAgICAgICBsZXQgZGVwdGggPSA4O1xyXG4gICAgICAgIGxldCBicHAgPSA0O1xyXG4gICAgICAgIGxldCBhbHBoYUFuZCA9IDI1NTtcclxuICAgICAgICBsZXQgcHMgPSBpblBzO1xyXG4gICAgICAgIGxldCBidWZzID0gaW5CdWZzO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVmcy5sZW5ndGg7IGorKykgeyAvLyB3aGVuIG5vdCBxdWFudGl6ZWQsIG90aGVyIGZyYW1lcyBjYW4gY29udGFpbiBjb2xvcnMsIHRoYXQgYXJlIG5vdCBpbiBhbiBpbml0aWFsIGZyYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBVaW50OEFycmF5KGJ1ZnNbal0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbGVuID0gaW1nLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbGVuOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgICAgIGFscGhhQW5kICY9IGltZ1tpICsgM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdvdEFscGhhID0gYWxwaGFBbmQgIT09IDI1NTtcclxuICAgICAgICBjb25zdCBjbWFwID0ge307XHJcbiAgICAgICAgY29uc3QgcGx0ZSA9IFtdO1xyXG4gICAgICAgIGlmIChidWZzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjbWFwWzBdID0gMDtcclxuICAgICAgICAgICAgcGx0ZS5wdXNoKDApO1xyXG4gICAgICAgICAgICBpZiAocHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBzLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHFyZXMgPSB0aGlzLnF1YW50aXplKGJ1ZnMsIHBzLCBmb3JHSUYpO1xyXG4gICAgICAgICAgICBidWZzID0gcXJlcy5idWZzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHFyZXMucGx0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHFyZXMucGx0ZVtpXS5lc3QucmdiYTtcclxuICAgICAgICAgICAgICAgIGlmIChjbWFwW2NdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbWFwW2NdID0gcGx0ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx0ZS5wdXNoKGMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB3aGF0IGlmIHBzPT0wLCBidXQgdGhlcmUgYXJlIDw9MjU2IGNvbG9ycz8gIHdlIHN0aWxsIG5lZWQgdG8gZGV0ZWN0LCBpZiB0aGUgcGFsZXR0ZSBjb3VsZCBiZSB1c2VkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVmcy5sZW5ndGg7IGorKykgeyAvLyB3aGVuIG5vdCBxdWFudGl6ZWQsIG90aGVyIGZyYW1lcyBjYW4gY29udGFpbiBjb2xvcnMsIHRoYXQgYXJlIG5vdCBpbiBhbiBpbml0aWFsIGZyYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWczMiA9IG5ldyBVaW50MzJBcnJheShidWZzW2pdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlsZW4gPSBpbWczMi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbWczMltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgPCB3IHx8IChjICE9PSBpbWczMltpIC0gMV0gJiYgYyAhPT0gaW1nMzJbaSAtIHddKSkgJiYgY21hcFtjXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtYXBbY10gPSBwbHRlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGx0ZS5wdXNoKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx0ZS5sZW5ndGggPj0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBicnV0ZSA9IGdvdEFscGhhID8gZm9yR0lGIDogZmFsc2U7IC8vIGJydXRlIDogZnJhbWVzIGNhbiBvbmx5IGJlIGNvcGllZCwgbm90IFwiYmxlbmRlZFwiXHJcbiAgICAgICAgY29uc3QgY2MgPSBwbHRlLmxlbmd0aDtcclxuICAgICAgICBpZiAoY2MgPD0gMjU2ICYmICFmb3JiaWRQbHRlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYyA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2MgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgZGVwdGggPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNjIDw9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvckdJRikge1xyXG4gICAgICAgICAgICAgICAgZGVwdGggPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvdEFscGhhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnJtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVmcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgY2ltZyA9IG5ldyBVaW50OEFycmF5KGJ1ZnNbal0pO1xyXG4gICAgICAgICAgICBsZXQgY2ltZzMyID0gbmV3IFVpbnQzMkFycmF5KGNpbWcuYnVmZmVyKTtcclxuICAgICAgICAgICAgbGV0IG54ID0gMDtcclxuICAgICAgICAgICAgbGV0IG55ID0gMDtcclxuICAgICAgICAgICAgbGV0IG53ID0gdztcclxuICAgICAgICAgICAgbGV0IG5oID0gaDtcclxuICAgICAgICAgICAgbGV0IGJsZW5kID0gMDtcclxuICAgICAgICAgICAgaWYgKGogIT09IDAgJiYgIWJydXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bGltID0gKGZvckdJRiB8fCBqID09PSAxIHx8IGZybXNbZnJtcy5sZW5ndGggLSAyXS5kaXNwb3NlID09PSAyKSA/IDEgOiAyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRzdHAgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmVhID0gMWU5O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXQgPSAwOyBpdCA8IHRsaW07IGl0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMzIgPSBuZXcgVWludDMyQXJyYXkoYnVmc1tqIC0gMSAtIGl0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1peCA9IHc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1peSA9IGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXkgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IHkgKiB3ICsgeDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaW1nMzJbaV0gIT09IHAzMltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4IDwgbWl4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1peCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5IDwgbWl5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1peSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID4gbWF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhcmVhID0gKG1heCA9PT0gLTEpID8gMSA6IChtYXggLSBtaXggKyAxKSAqIChtYXkgLSBtaXkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2FyZWEgPCB0YXJlYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJlYSA9IHNhcmVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0c3RwID0gaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBueCA9IG1peDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG55ID0gbWl5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbncgPSBtYXggLSBtaXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmggPSBtYXkgLSBtaXkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGltZyA9IG5ldyBVaW50OEFycmF5KGJ1ZnNbaiAtIDEgLSB0c3RwXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHN0cCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZybXNbZnJtcy5sZW5ndGggLSAxXS5kaXNwb3NlID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheShudyAqIG5oICogNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUaWxlKHBpbWcsIHcsIGgsIG5pbWcsIG53LCBuaCwgLW54LCAtbnksIDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29weVRpbGUoY2ltZywgdywgaCwgbmltZywgbncsIG5oLCAtbngsIC1ueSwgMykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlUaWxlKGNpbWcsIHcsIGgsIG5pbWcsIG53LCBuaCwgLW54LCAtbnksIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29weVRpbGUoY2ltZywgdywgaCwgbmltZywgbncsIG5oLCAtbngsIC1ueSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2ltZyA9IG5pbWc7XHJcbiAgICAgICAgICAgICAgICBjaW1nMzIgPSBuZXcgVWludDMyQXJyYXkoY2ltZy5idWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBicGwgPSA0ICogbnc7XHJcbiAgICAgICAgICAgIGlmIChjYyA8PSAyNTYgJiYgIWZvcmJpZFBsdGUpIHtcclxuICAgICAgICAgICAgICAgIGJwbCA9IE1hdGguY2VpbChkZXB0aCAqIG53IC8gOCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuaW1nID0gbmV3IFVpbnQ4QXJyYXkoYnBsICogbmgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBuaDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IHkgKiBicGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWkgPSB5ICogbnc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnc7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmltZ1tpICsgKHgpXSA9IChjbWFwW2NpbWczMltpaSArIHhdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBudzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaW1nW2kgKyAoeCA+PiAxKV0gfD0gKGNtYXBbY2ltZzMyW2lpICsgeF1dIDw8ICg0IC0gKHggJiAxKSAqIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG53OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pbWdbaSArICh4ID4+IDIpXSB8PSAoY21hcFtjaW1nMzJbaWkgKyB4XV0gPDwgKDYgLSAoeCAmIDMpICogMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlcHRoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnc7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmltZ1tpICsgKHggPj4gMyldIHw9IChjbWFwW2NpbWczMltpaSArIHhdXSA8PCAoNyAtICh4ICYgNykgKiAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaW1nID0gbmltZztcclxuICAgICAgICAgICAgICAgIGN0eXBlID0gMztcclxuICAgICAgICAgICAgICAgIGJwcCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWdvdEFscGhhICYmIGJ1ZnMubGVuZ3RoID09PSAxKSB7IC8vIHNvbWUgbmV4dCBcInJlZHVjZWRcIiBmcmFtZXMgbWF5IGNvbnRhaW4gYWxwaGEgZm9yIGJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuaW1nID0gbmV3IFVpbnQ4QXJyYXkobncgKiBuaCAqIDMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJlYSA9IG53ICogbmg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZWE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpID0gaSAqIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcWkgPSBpICogNDtcclxuICAgICAgICAgICAgICAgICAgICBuaW1nW3RpXSA9IGNpbWdbcWldO1xyXG4gICAgICAgICAgICAgICAgICAgIG5pbWdbdGkgKyAxXSA9IGNpbWdbcWkgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBuaW1nW3RpICsgMl0gPSBjaW1nW3FpICsgMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaW1nID0gbmltZztcclxuICAgICAgICAgICAgICAgIGN0eXBlID0gMjtcclxuICAgICAgICAgICAgICAgIGJwcCA9IDM7XHJcbiAgICAgICAgICAgICAgICBicGwgPSAzICogbnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBueSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbncsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBuaFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltZzogY2ltZyxcclxuICAgICAgICAgICAgICAgIGJwbDogYnBsLFxyXG4gICAgICAgICAgICAgICAgYnBwOiBicHAsXHJcbiAgICAgICAgICAgICAgICBibGVuZDogYmxlbmQsXHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlOiBicnV0ZSA/IDEgOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBjdHlwZTogY3R5cGUsIGRlcHRoOiBkZXB0aCwgcGx0ZTogcGx0ZSwgZ290QWxwaGE6IGdvdEFscGhhLCBmcmFtZXM6IGZybXMgfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmlsdGVyWmVybyhpbWcsIGgsIGJwcCwgYnBsLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZmxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCA1OyB0KyspIHtcclxuICAgICAgICAgICAgaWYgKGggKiBicGwgPiA1MDAwMDAgJiYgKHQgPT09IDIgfHwgdCA9PT0gMyB8fCB0ID09PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTGluZShkYXRhLCBpbWcsIHksIGJwbCwgYnBwLCB0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbHMucHVzaChkZWZsYXRlXzEuZGVmYXVsdC5kZWZsYXRlKGRhdGEpKTtcclxuICAgICAgICAgICAgaWYgKGJwcCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRpO1xyXG4gICAgICAgIGxldCB0c2l6ZSA9IDFlOTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmxzW2ldLmxlbmd0aCA8IHRzaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aSA9IGk7XHJcbiAgICAgICAgICAgICAgICB0c2l6ZSA9IGZsc1tpXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsc1t0aV07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbHRlckxpbmUoZGF0YSwgaW1nLCB5LCBicGwsIGJwcCwgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGkgPSB5ICogYnBsO1xyXG4gICAgICAgIGxldCBkaSA9IGkgKyB5O1xyXG4gICAgICAgIGRhdGFbZGldID0gdHlwZTtcclxuICAgICAgICBkaSsrO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IGltZ1tpICsgeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwcDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSBpbWdbaSArIHhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gLSBpbWdbaSArIHggLSBicHBdICsgMjU2KSAmIDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh5ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBwOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IGltZ1tpICsgeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IGltZ1tpICsgeF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdIC0gKGltZ1tpICsgeCAtIGJwcF0gPj4gMSkgKyAyNTYpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gYnBwOyB4IDwgYnBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSAtIHRoaXMucGFldGgoaW1nW2kgKyB4IC0gYnBwXSwgMCwgMCkgKyAyNTYpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdICsgMjU2IC0gaW1nW2kgKyB4IC0gYnBsXSkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYnBwOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2RpICsgeF0gPSAoaW1nW2kgKyB4XSArIDI1NiAtIChpbWdbaSArIHggLSBicGxdID4+IDEpKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdICsgMjU2IC0gKChpbWdbaSArIHggLSBicGxdICsgaW1nW2kgKyB4IC0gYnBwXSkgPj4gMSkpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJwcDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkaSArIHhdID0gKGltZ1tpICsgeF0gKyAyNTYgLSB0aGlzLnBhZXRoKDAsIGltZ1tpICsgeCAtIGJwbF0sIDApKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBicHA7IHggPCBicGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZGkgKyB4XSA9IChpbWdbaSArIHhdICsgMjU2IC0gdGhpcy5wYWV0aChpbWdbaSArIHggLSBicHBdLCBpbWdbaSArIHggLSBicGxdLCBpbWdbaSArIHggLSBicHAgLSBicGxdKSkgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHBhZXRoKGEsIGIsIGMpIHtcclxuICAgICAgICBjb25zdCBwID0gYSArIGIgLSBjO1xyXG4gICAgICAgIGNvbnN0IHBhID0gTWF0aC5hYnMocCAtIGEpO1xyXG4gICAgICAgIGNvbnN0IHBiID0gTWF0aC5hYnMocCAtIGIpO1xyXG4gICAgICAgIGNvbnN0IHBjID0gTWF0aC5hYnMocCAtIGMpO1xyXG4gICAgICAgIGlmIChwYSA8PSBwYiAmJiBwYSA8PSBwYykge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGIgPD0gcGMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZUFTQ0lJKGRhdGEsIHAsIHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YVtwICsgaV0gPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3cml0ZVVpbnQoYnVmZiwgcCwgbikge1xyXG4gICAgICAgIGJ1ZmZbcF0gPSAobiA+PiAyNCkgJiAyNTU7XHJcbiAgICAgICAgYnVmZltwICsgMV0gPSAobiA+PiAxNikgJiAyNTU7XHJcbiAgICAgICAgYnVmZltwICsgMl0gPSAobiA+PiA4KSAmIDI1NTtcclxuICAgICAgICBidWZmW3AgKyAzXSA9IG4gJiAyNTU7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdyaXRlVXNob3J0KGJ1ZmYsIHAsIG4pIHtcclxuICAgICAgICBidWZmW3BdID0gKG4gPj4gOCkgJiAyNTU7XHJcbiAgICAgICAgYnVmZltwICsgMV0gPSBuICYgMjU1O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb3B5VGlsZShzYiwgc3csIHNoLCB0YiwgdHcsIHRoLCB4b2ZmLCB5b2ZmLCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdyA9IE1hdGgubWluKHN3LCB0dyk7XHJcbiAgICAgICAgY29uc3QgaCA9IE1hdGgubWluKHNoLCB0aCk7XHJcbiAgICAgICAgbGV0IHNpID0gMDtcclxuICAgICAgICBsZXQgdGkgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeG9mZiA+PSAwICYmIHlvZmYgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpID0gKHkgKiBzdyArIHgpIDw8IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkgPSAoKHlvZmYgKyB5KSAqIHR3ICsgeG9mZiArIHgpIDw8IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaSA9ICgoLXlvZmYgKyB5KSAqIHN3IC0geG9mZiArIHgpIDw8IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGkgPSAoeSAqIHR3ICsgeCkgPDwgMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGldID0gc2Jbc2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMV0gPSBzYltzaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMl0gPSBzYltzaSArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgM10gPSBzYltzaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhID0gc2Jbc2kgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmciA9IHNiW3NpXSAqIGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZnID0gc2Jbc2kgKyAxXSAqIGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZiID0gc2Jbc2kgKyAyXSAqIGZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhID0gdGJbdGkgKyAzXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiciA9IHRiW3RpXSAqIGJhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnID0gdGJbdGkgKyAxXSAqIGJhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gdGJbdGkgKyAyXSAqIGJhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlmYSA9IDEgLSBmYTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYSA9IGZhICsgYmEgKiBpZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW9hID0gKG9hID09PSAwID8gMCA6IDEgLyBvYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAzXSA9IDI1NSAqIG9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMF0gPSAoZnIgKyBiciAqIGlmYSkgKiBpb2E7XHJcbiAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAxXSA9IChmZyArIGJnICogaWZhKSAqIGlvYTtcclxuICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDJdID0gKGZiICsgYmIgKiBpZmEpICogaW9hO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gMikgeyAvLyBjb3B5IG9ubHkgZGlmZmVyZW5jZXMsIG90aGVyd2lzZSB6ZXJvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmEgPSBzYltzaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyID0gc2Jbc2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZnID0gc2Jbc2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYiA9IHNiW3NpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmEgPSB0Ylt0aSArIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gdGJbdGldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnID0gdGJbdGkgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYiA9IHRiW3RpICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhID09PSBiYSAmJiBmciA9PT0gYnIgJiYgZmcgPT09IGJnICYmIGZiID09PSBiYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDFdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAyXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgM10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGldID0gZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRiW3RpICsgMV0gPSBmZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJbdGkgKyAyXSA9IGZiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ylt0aSArIDNdID0gZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gMykgeyAvLyBjaGVjayBpZiBjYW4gYmUgYmxlbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhID0gc2Jbc2kgKyAzXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmciA9IHNiW3NpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZyA9IHNiW3NpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmIgPSBzYltzaSArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhID0gdGJbdGkgKyAzXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiciA9IHRiW3RpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiZyA9IHRiW3RpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmIgPSB0Ylt0aSArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYSA9PT0gYmEgJiYgZnIgPT09IGJyICYmIGZnID09PSBiZyAmJiBmYiA9PT0gYmIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYoZmEhPTI1NSAmJiBiYSE9MCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYSA8IDIyMCAmJiBiYSA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyYyhiLCBvLCBsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JjVXBkYXRlKDB4RkZGRkZGRkYsIGIsIG8sIGwpIF4gMHhGRkZGRkZGRjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JjVXBkYXRlKGMsIGJ1Ziwgb2ZmLCBsZW4pIHtcclxuICAgICAgICBsZXQgbG9jYWxDID0gYztcclxuICAgICAgICBjb25zdCBjcmNUYWJsZSA9IHRoaXMuY3JjVGFibGUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxvY2FsQyA9IGNyY1RhYmxlWyhsb2NhbEMgXiBidWZbb2ZmICsgaV0pICYgMHhGRl0gXiAobG9jYWxDID4+PiA4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsQztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JjVGFibGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGFiID0gbmV3IFVpbnQzMkFycmF5KDI1Nik7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCAyNTY7IG4rKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IG47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyAmIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gMHhFREI4ODMyMCBeIChjID4+PiAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBjID4+PiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYltuXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWI7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHF1YW50aXplKGJ1ZnMsIHBzLCByb3VuZEFscGhhKSB7XHJcbiAgICAgICAgY29uc3QgaW1ncyA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RsID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaW1ncy5wdXNoKHRoaXMuYWxwaGFNdWwobmV3IFVpbnQ4QXJyYXkoYnVmc1tpXSksIHJvdW5kQWxwaGEpKTtcclxuICAgICAgICAgICAgdG90bCArPSBidWZzW2ldLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5pbWcgPSBuZXcgVWludDhBcnJheSh0b3RsKTtcclxuICAgICAgICBjb25zdCBuaW1nMzIgPSBuZXcgVWludDMyQXJyYXkobmltZy5idWZmZXIpO1xyXG4gICAgICAgIGxldCBub2ZmID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gaW1nc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgaWwgPSBpbWcubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGlsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG5pbWdbbm9mZiArIGpdID0gaW1nW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZmYgKz0gaWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvb3QgPSB7XHJcbiAgICAgICAgICAgIGkwOiAwLFxyXG4gICAgICAgICAgICBpMTogbmltZy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJzdDogbnVsbCxcclxuICAgICAgICAgICAgZXN0OiBudWxsLFxyXG4gICAgICAgICAgICB0ZHN0OiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICByaWdodDogbnVsbFxyXG4gICAgICAgIH07IC8vIGJhc2ljIHN0YXRpc3RpYywgZXh0cmEgc3RhdGlzdGljXHJcbiAgICAgICAgcm9vdC5ic3QgPSB0aGlzLnF1YW50aXplU3RhdHMobmltZywgcm9vdC5pMCwgcm9vdC5pMSk7XHJcbiAgICAgICAgcm9vdC5lc3QgPSB0aGlzLnF1YW50aXplRXN0YXRzKHJvb3QuYnN0KTtcclxuICAgICAgICBjb25zdCBsZWFmcyA9IFtyb290XTtcclxuICAgICAgICB3aGlsZSAobGVhZnMubGVuZ3RoIDwgcHMpIHtcclxuICAgICAgICAgICAgbGV0IG1heEwgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbWkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlYWZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVhZnNbaV0uZXN0LkwgPiBtYXhMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TCA9IGxlYWZzW2ldLmVzdC5MO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWF4TCA8IDFlLTMpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBsZWFmc1ttaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHMwID0gdGhpcy5xdWFudGl6ZVNwbGl0UGl4ZWxzKG5pbWcsIG5pbWczMiwgbm9kZS5pMCwgbm9kZS5pMSwgbm9kZS5lc3QuZSwgbm9kZS5lc3QuZU1xMjU1KTtcclxuICAgICAgICAgICAgY29uc3QgbG4gPSB7XHJcbiAgICAgICAgICAgICAgICBpMDogbm9kZS5pMCxcclxuICAgICAgICAgICAgICAgIGkxOiBzMCxcclxuICAgICAgICAgICAgICAgIGJzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRkc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbG4uYnN0ID0gdGhpcy5xdWFudGl6ZVN0YXRzKG5pbWcsIGxuLmkwLCBsbi5pMSk7XHJcbiAgICAgICAgICAgIGxuLmVzdCA9IHRoaXMucXVhbnRpemVFc3RhdHMobG4uYnN0KTtcclxuICAgICAgICAgICAgY29uc3Qgcm4gPSB7XHJcbiAgICAgICAgICAgICAgICBpMDogczAsXHJcbiAgICAgICAgICAgICAgICBpMTogbm9kZS5pMSxcclxuICAgICAgICAgICAgICAgIGJzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRkc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcm4uYnN0ID0ge1xyXG4gICAgICAgICAgICAgICAgUjogW10sXHJcbiAgICAgICAgICAgICAgICBtOiBbXSxcclxuICAgICAgICAgICAgICAgIE46IG5vZGUuYnN0Lk4gLSBsbi5ic3QuTlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJuLmJzdC5SW2ldID0gbm9kZS5ic3QuUltpXSAtIGxuLmJzdC5SW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBybi5ic3QubVtpXSA9IG5vZGUuYnN0Lm1baV0gLSBsbi5ic3QubVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBybi5lc3QgPSB0aGlzLnF1YW50aXplRXN0YXRzKHJuLmJzdCk7XHJcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGxuO1xyXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gcm47XHJcbiAgICAgICAgICAgIGxlYWZzW21pXSA9IGxuO1xyXG4gICAgICAgICAgICBsZWFmcy5wdXNoKHJuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVhZnMuc29ydCgoYSwgYikgPT4gYi5ic3QuTiAtIGEuYnN0Lk4pO1xyXG4gICAgICAgIGNvbnN0IG91dEJ1ZnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgaW1ncy5sZW5ndGg7IGlpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2IgPSBuZXcgVWludDhBcnJheShpbWdzW2lpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRiID0gbmV3IFVpbnQzMkFycmF5KGltZ3NbaWldKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gc2IubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gc2JbaV0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gc2JbaSArIDFdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHNiW2kgKyAyXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBzYltpICsgM10gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgZXhhY3QsIGJ1dCB0b28gc2xvdyA6KFxyXG4gICAgICAgICAgICAgICAgLy92YXIgbmQgPSBVUE5HLnF1YW50aXplLmdldE5lYXJlc3Qocm9vdCwgciwgZywgYiwgYSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmQgPSByb290O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5kLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZCA9ICh0aGlzLnF1YW50aXplUGxhbmVEc3QobmQuZXN0LCByLCBnLCBiLCBhKSA8PSAwKSA/IG5kLmxlZnQgOiBuZC5yaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRiW2kgPj4gMl0gPSBuZC5lc3QucmdiYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRCdWZzW2lpXSA9IHRiLmJ1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgYnVmczogb3V0QnVmcywgcGx0ZTogbGVhZnMgfTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVTdGF0cyhuaW1nLCBpMCwgaTEpIHtcclxuICAgICAgICBjb25zdCBSID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgICAgIGNvbnN0IG0gPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgY29uc3QgTiA9IChpMSAtIGkwKSA+PiAyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpMDsgaSA8IGkxOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG5pbWdbaV0gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBuaW1nW2kgKyAxXSAqICgxIC8gMjU1KTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IG5pbWdbaSArIDJdICogKDEgLyAyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gbmltZ1tpICsgM10gKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgIC8vbGV0IHIgPSBuaW1nW2ldLCBnID0gbmltZ1tpKzFdLCBiID0gbmltZ1tpKzJdLCBhID0gbmltZ1tpKzNdO1xyXG4gICAgICAgICAgICBtWzBdICs9IHI7XHJcbiAgICAgICAgICAgIG1bMV0gKz0gZztcclxuICAgICAgICAgICAgbVsyXSArPSBiO1xyXG4gICAgICAgICAgICBtWzNdICs9IGE7XHJcbiAgICAgICAgICAgIFJbMF0gKz0gciAqIHI7XHJcbiAgICAgICAgICAgIFJbMV0gKz0gciAqIGc7XHJcbiAgICAgICAgICAgIFJbMl0gKz0gciAqIGI7XHJcbiAgICAgICAgICAgIFJbM10gKz0gciAqIGE7XHJcbiAgICAgICAgICAgIFJbNV0gKz0gZyAqIGc7XHJcbiAgICAgICAgICAgIFJbNl0gKz0gZyAqIGI7XHJcbiAgICAgICAgICAgIFJbN10gKz0gZyAqIGE7XHJcbiAgICAgICAgICAgIFJbMTBdICs9IGIgKiBiO1xyXG4gICAgICAgICAgICBSWzExXSArPSBiICogYTtcclxuICAgICAgICAgICAgUlsxNV0gKz0gYSAqIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJbNF0gPSBSWzFdO1xyXG4gICAgICAgIFJbOF0gPSBSWzJdO1xyXG4gICAgICAgIFJbMTJdID0gUlszXTtcclxuICAgICAgICBSWzldID0gUls2XTtcclxuICAgICAgICBSWzEzXSA9IFJbN107XHJcbiAgICAgICAgUlsxNF0gPSBSWzExXTtcclxuICAgICAgICByZXR1cm4geyBSOiBSLCBtOiBtLCBOOiBOIH07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHF1YW50aXplRXN0YXRzKHN0YXRzKSB7XHJcbiAgICAgICAgY29uc3QgUiA9IHN0YXRzLlI7XHJcbiAgICAgICAgY29uc3QgbSA9IHN0YXRzLm07XHJcbiAgICAgICAgY29uc3QgTiA9IHN0YXRzLk47XHJcbiAgICAgICAgY29uc3QgbTAgPSBtWzBdO1xyXG4gICAgICAgIGNvbnN0IG0xID0gbVsxXTtcclxuICAgICAgICBjb25zdCBtMiA9IG1bMl07XHJcbiAgICAgICAgY29uc3QgbTMgPSBtWzNdO1xyXG4gICAgICAgIGNvbnN0IGlOID0gKE4gPT09IDAgPyAwIDogMSAvIE4pO1xyXG4gICAgICAgIGNvbnN0IHJqID0gW1xyXG4gICAgICAgICAgICBSWzBdIC0gbTAgKiBtMCAqIGlOLCBSWzFdIC0gbTAgKiBtMSAqIGlOLCBSWzJdIC0gbTAgKiBtMiAqIGlOLCBSWzNdIC0gbTAgKiBtMyAqIGlOLFxyXG4gICAgICAgICAgICBSWzRdIC0gbTEgKiBtMCAqIGlOLCBSWzVdIC0gbTEgKiBtMSAqIGlOLCBSWzZdIC0gbTEgKiBtMiAqIGlOLCBSWzddIC0gbTEgKiBtMyAqIGlOLFxyXG4gICAgICAgICAgICBSWzhdIC0gbTIgKiBtMCAqIGlOLCBSWzldIC0gbTIgKiBtMSAqIGlOLCBSWzEwXSAtIG0yICogbTIgKiBpTiwgUlsxMV0gLSBtMiAqIG0zICogaU4sXHJcbiAgICAgICAgICAgIFJbMTJdIC0gbTMgKiBtMCAqIGlOLCBSWzEzXSAtIG0zICogbTEgKiBpTiwgUlsxNF0gLSBtMyAqIG0yICogaU4sIFJbMTVdIC0gbTMgKiBtMyAqIGlOXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBBID0gcmo7XHJcbiAgICAgICAgbGV0IGIgPSBbMC41LCAwLjUsIDAuNSwgMC41XTtcclxuICAgICAgICBsZXQgbWkgPSAwO1xyXG4gICAgICAgIGxldCB0bWkgPSAwO1xyXG4gICAgICAgIGlmIChOICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYiA9IHRoaXMubTRNdWx0VmVjKEEsIGIpO1xyXG4gICAgICAgICAgICAgICAgdG1pID0gTWF0aC5zcXJ0KHRoaXMubTREb3QoYiwgYikpO1xyXG4gICAgICAgICAgICAgICAgYiA9IHRoaXMubTRTbWwoMSAvIHRtaSwgYik7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModG1pIC0gbWkpIDwgMWUtOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWkgPSB0bWk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9iID0gWzAsMCwxLDBdOyAgbWk9TjtcclxuICAgICAgICBjb25zdCBxID0gW20wICogaU4sIG0xICogaU4sIG0yICogaU4sIG0zICogaU5dO1xyXG4gICAgICAgIGNvbnN0IGVNcTI1NSA9IHRoaXMubTREb3QodGhpcy5tNFNtbCgyNTUsIHEpLCBiKTtcclxuICAgICAgICBjb25zdCBpYSA9IChxWzNdIDwgMC4wMDEpID8gMCA6IDEgLyBxWzNdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIENvdjogcmosXHJcbiAgICAgICAgICAgIHE6IHEsXHJcbiAgICAgICAgICAgIGU6IGIsXHJcbiAgICAgICAgICAgIEw6IG1pLFxyXG4gICAgICAgICAgICBlTXEyNTU6IGVNcTI1NSxcclxuICAgICAgICAgICAgZU1xOiB0aGlzLm00RG90KGIsIHEpLFxyXG4gICAgICAgICAgICByZ2JhOiAoKChNYXRoLnJvdW5kKDI1NSAqIHFbM10pIDw8IDI0KSB8IChNYXRoLnJvdW5kKDI1NSAqIHFbMl0gKiBpYSkgPDwgMTYpIHwgKE1hdGgucm91bmQoMjU1ICogcVsxXSAqIGlhKSA8PCA4KSB8IChNYXRoLnJvdW5kKDI1NSAqIHFbMF0gKiBpYSkgPDwgMCkpID4+PiAwKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHF1YW50aXplUGxhbmVEc3QoZXN0LCByLCBnLCBiLCBhKSB7XHJcbiAgICAgICAgY29uc3QgZSA9IGVzdC5lO1xyXG4gICAgICAgIHJldHVybiBlWzBdICogciArIGVbMV0gKiBnICsgZVsyXSAqIGIgKyBlWzNdICogYSAtIGVzdC5lTXE7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHF1YW50aXplU3BsaXRQaXhlbHMobmltZywgbmltZzMyLCBpMGluLCBpMWluLCBlLCBlTXEpIHtcclxuICAgICAgICBsZXQgaTEgPSBpMWluIC0gNDtcclxuICAgICAgICBsZXQgaTAgPSBpMGluO1xyXG4gICAgICAgIHdoaWxlIChpMCA8IGkxKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnF1YW50aXplVmVjRG90KG5pbWcsIGkwLCBlKSA8PSBlTXEpIHtcclxuICAgICAgICAgICAgICAgIGkwICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMucXVhbnRpemVWZWNEb3QobmltZywgaTEsIGUpID4gZU1xKSB7XHJcbiAgICAgICAgICAgICAgICBpMSAtPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpMCA+PSBpMSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdCA9IG5pbWczMltpMCA+PiAyXTtcclxuICAgICAgICAgICAgbmltZzMyW2kwID4+IDJdID0gbmltZzMyW2kxID4+IDJdO1xyXG4gICAgICAgICAgICBuaW1nMzJbaTEgPj4gMl0gPSB0O1xyXG4gICAgICAgICAgICBpMCArPSA0O1xyXG4gICAgICAgICAgICBpMSAtPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5xdWFudGl6ZVZlY0RvdChuaW1nLCBpMCwgZSkgPiBlTXEpIHtcclxuICAgICAgICAgICAgaTAgLT0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGkwICsgNDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcXVhbnRpemVWZWNEb3QobmltZywgaSwgZSkge1xyXG4gICAgICAgIHJldHVybiBuaW1nW2ldICogZVswXSArIG5pbWdbaSArIDFdICogZVsxXSArIG5pbWdbaSArIDJdICogZVsyXSArIG5pbWdbaSArIDNdICogZVszXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbTRNdWx0VmVjKG0sIHYpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBtWzBdICogdlswXSArIG1bMV0gKiB2WzFdICsgbVsyXSAqIHZbMl0gKyBtWzNdICogdlszXSxcclxuICAgICAgICAgICAgbVs0XSAqIHZbMF0gKyBtWzVdICogdlsxXSArIG1bNl0gKiB2WzJdICsgbVs3XSAqIHZbM10sXHJcbiAgICAgICAgICAgIG1bOF0gKiB2WzBdICsgbVs5XSAqIHZbMV0gKyBtWzEwXSAqIHZbMl0gKyBtWzExXSAqIHZbM10sXHJcbiAgICAgICAgICAgIG1bMTJdICogdlswXSArIG1bMTNdICogdlsxXSArIG1bMTRdICogdlsyXSArIG1bMTVdICogdlszXVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG00RG90KHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geFswXSAqIHlbMF0gKyB4WzFdICogeVsxXSArIHhbMl0gKiB5WzJdICsgeFszXSAqIHlbM107XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG00U21sKGEsIHkpIHtcclxuICAgICAgICByZXR1cm4gW2EgKiB5WzBdLCBhICogeVsxXSwgYSAqIHlbMl0sIGEgKiB5WzNdXTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgYWxwaGFNdWwoaW1nLCByb3VuZEEpIHtcclxuICAgICAgICBjb25zdCBuaW1nID0gbmV3IFVpbnQ4QXJyYXkoaW1nLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGltZy5sZW5ndGggPj4gMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZWE7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBxaSA9IGkgPDwgMjtcclxuICAgICAgICAgICAgbGV0IGlhID0gaW1nW3FpICsgM107XHJcbiAgICAgICAgICAgIGlmIChyb3VuZEEpIHtcclxuICAgICAgICAgICAgICAgIGlhID0gKChpYSA8IDEyOCkpID8gMCA6IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhID0gaWEgKiAoMSAvIDI1NSk7XHJcbiAgICAgICAgICAgIG5pbWdbcWkgKyAwXSA9IGltZ1txaSArIDBdICogYTtcclxuICAgICAgICAgICAgbmltZ1txaSArIDFdID0gaW1nW3FpICsgMV0gKiBhO1xyXG4gICAgICAgICAgICBuaW1nW3FpICsgMl0gPSBpbWdbcWkgKyAyXSAqIGE7XHJcbiAgICAgICAgICAgIG5pbWdbcWkgKyAzXSA9IGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmltZztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBuZ0VuY29kZXIgPSBQbmdFbmNvZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzVuUlc1amIyUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXBiV0ZuWlhNdmNHNW5SVzVqYjJSbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRXNLMFJCUVc5RE8wRkJSWEJET3pzN1IwRkhSenRCUVVOSUxFMUJRV0VzVlVGQlZUdEpRVU51UWpzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQmJVSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOdVJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRZaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZWtJc1RVRkJUU3hKUVVGSkxFZEJRVlVzVTBGQlV5eERRVUZETzFGQlF6bENMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOd1JTeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzaENMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRia0k3VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZaaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVVeFJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYWtNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjBReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlExb3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpGQ0xFMUJRVTBzUlVGQlJTeERRVUZETzFGQlExUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETVVJc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRFZDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ6dFJRVU0zUWl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOVUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVE8xRkJRek5DTEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTFRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrN1VVRkRPVUlzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEVkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxFTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8xRkJSVzVDTEd0RFFVRnJRenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjBReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlExb3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOVUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVRc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMDdVVUZGYmtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEVGl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTmFMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOMFF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMW9zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRUxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMU5CUTNSQ08xRkJSVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOc1FpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU0xUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGRFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNwQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU53UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM3BDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0blFrRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTXhRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6RkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNM1FqdFpRVU5FTEUxQlFVMHNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRkxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMWxCUlc1Q0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0blFrRkRaaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEycERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlExb3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVOMFF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEYWtRN1owSkJRMFFzVFVGQlRTeEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkRZaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1JGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTk8yRkJRM1JDTzFOQlEwbzdVVUZGUkN4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhKUVVGSkxFbEJRVWtzUlVGQlJUdG5Ra0ZEVGl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnBETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMW9zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTjBReXhOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU51UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU0xUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU0zUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5hTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGVFTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFdpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTNKRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTFvc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNN1owSkJRekZDTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWVHRuUWtGRGNFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTTdaMEpCUTNoQ0xFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVR0blFrRkRiRUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRPVVFzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1lVRkRkRUk3V1VGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM0pDTEUxQlFVMHNSVUZCUlN4SFFVRlhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGREwwSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4TlFVRk5MRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMW9zVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTXpSQ3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExb3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5VTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTJZN1dVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU01UWp0WlFVTkVMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRFlpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RkxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5PMU5CUTNSQ08xRkJSVVFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaERMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVVFzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkZia0lzVDBGQlR5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFJDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmRCUVZjc1EwRkJReXhKUVVGdFFpeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJWU3hGUVVGRkxGVkJRVzFDTzFGQlF6RkdMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVONlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRek5DTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU03V1VGRGNFSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU53UWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRelZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJRMFFzVDBGQlR5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkVzUTBGQlF5eE5RVUZ4UWl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzU1VGQldTeEZRVUZGTEUxQlFXTXNSVUZCUlN4VlFVRnRRanRSUVVNelJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRia0lzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJXeENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVY3NkMFpCUVhkR08xbEJRemRJTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRlRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVNNVFpeFJRVUZSTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UWp0VFFVTktPMUZCUTBRc1NVRkJTU3hSUVVGUkxFZEJRVmtzVVVGQlVTeExRVUZMTEVkQlFVY3NRMEZCUXp0UlFVVjZReXhOUVVGTkxFbEJRVWtzUjBGQk5rSXNSVUZCUlN4RFFVRkRPMUZCUXpGRExFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJJc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTldMRVZCUVVVc1JVRkJSU3hEUVVGRE8yRkJRMUk3VTBGRFNqdFJRVVZFTEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOV0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTTNReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnFRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1pETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRGFFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzI5Q1FVTnFRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenR2UWtGRGRFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEYUVJN1lVRkRTanRUUVVOS08yRkJRVTA3V1VGRFNDeHZSMEZCYjBjN1dVRkRjRWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSeXgzUmtGQmQwWTdaMEpCUXpkSUxFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVNeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNelFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyNUNMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdkMEpCUXpGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8zZENRVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTmlMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVTdORUpCUTNCQ0xFMUJRVTA3ZVVKQlExUTdjVUpCUTBvN2FVSkJRMG83WVVGRFNqdFRRVU5LTzFGQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRkxHMUVRVUZ0UkR0UlFVTTNSaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTNaQ0xFbEJRVWtzUlVGQlJTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRMVFzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTmlPMmxDUVVGTkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRhRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTmlPMmxDUVVGTkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlR0blFrRkRha0lzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTmlPMmxDUVVGTk8yZENRVU5JTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRZanRaUVVORUxFbEJRVWtzVFVGQlRTeEZRVUZGTzJkQ1FVTlNMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRFlqdFpRVU5FTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRia0k3VVVGRlJDeE5RVUZOTEVsQlFVa3NSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRkRla0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRiRU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJSVEZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTllMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRia0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOb1JpeEpRVUZKTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMklzU1VGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRPMmRDUVVOb1FpeExRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMjlDUVVNNVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU01UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03YjBKQlExb3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5hTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5pTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5pTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2QwSkJRM2hDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN05FSkJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTndRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBOQlEzUkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdHZRMEZEVkN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8ybERRVU5ZTzJkRFFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdHZRMEZEVkN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8ybERRVU5ZTzJkRFFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdHZRMEZEVkN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8ybERRVU5ZTzJkRFFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdHZRMEZEVkN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8ybERRVU5ZT3paQ1FVTktPM2xDUVVOS08zRkNRVU5LTzI5Q1FVTkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYmtVc1NVRkJTU3hMUVVGTExFZEJRVWNzUzBGQlN5eEZRVUZGTzNkQ1FVTm1MRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03ZDBKQlEyUXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenQzUWtGRFZpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHMwUWtGRFdpeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPelJDUVVOUUxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdORUpCUTFBc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6czBRa0ZEVUN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVU5XT3paQ1FVRk5PelJDUVVOSUxFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTTdORUpCUTFRc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF6czBRa0ZEVkN4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdORUpCUTI1Q0xFVkJRVVVzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGRGRFSTdjVUpCUTBvN2FVSkJRMG83WjBKQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzI5Q1FVTmFMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEzSkRPMmRDUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEZEVRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRja1FzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRZanR4UWtGQlRUdHZRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlSQ3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTmlPMmRDUVVORUxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdaMEpCUTFvc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRoUVVONlF6dFpRVU5FTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGFrSXNTVUZCU1N4RlFVRkZMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTXhRaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlEzUkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlEzcENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTJ4Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRMnhDTEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1JVRkJSVHQzUWtGRFlpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0NVFrRkRNVU03Y1VKQlEwbzdlVUpCUVUwc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzNkQ1FVTndRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGT3pSQ1FVTjZRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2VVSkJRM0pGTzNGQ1FVTktPM2xDUVVGTkxFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNSVUZCUlR0M1FrRkRjRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlRzMFFrRkRla0lzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU55UlR0eFFrRkRTanQ1UWtGQlRTeEpRVUZKTEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVN2QwSkJRM0JDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN05FSkJRM3BDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dDVRa0ZEY2tVN2NVSkJRMG83YVVKQlEwbzdaMEpCUTBRc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZEV2l4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5XTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRXRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNORVJCUVRSRU8yZENRVU55Unl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU42UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnlRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTXpRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVOcVFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5xUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVOd1FpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGREwwSTdaMEpCUTBRc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZEV2l4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5XTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1lVRkRhRUk3V1VGRFJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOT0xFbEJRVWtzUlVGQlJUdHZRa0ZEUml4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGRFRDeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkRUQ3hMUVVGTExFVkJRVVVzUlVGQlJUdHZRa0ZEVkN4TlFVRk5MRVZCUVVVc1JVRkJSVHRwUWtGRFlqdG5Ra0ZEUkN4SFFVRkhMRVZCUVVVc1NVRkJTVHRuUWtGRFZDeEhRVUZITEVWQlFVVXNSMEZCUnp0blFrRkRVaXhIUVVGSExFVkJRVVVzUjBGQlJ6dG5Ra0ZEVWl4TFFVRkxMRVZCUVVVc1MwRkJTenRuUWtGRFdpeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZWtJc1EwRkJReXhEUVVGRE8xTkJRMDQ3VVVGRFJDeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRlRVlzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VlFVRlZMRU5CUVVNc1IwRkJaU3hGUVVGRkxFTkJRVk1zUlVGQlJTeEhRVUZYTEVWQlFVVXNSMEZCVnl4RlFVRkZMRWxCUVdkQ08xRkJRM0pHTEUxQlFVMHNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVObUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEzSkVMRk5CUVZNN1lVRkRXanRaUVVORUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNoQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNNVF6dFpRVU5FTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1FpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMWdzVFVGQlRUdGhRVU5VTzFOQlEwbzdVVUZEUkN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnFReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhGUVVGRk8yZENRVU4yUWl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5RTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzJGQlEzcENPMU5CUTBvN1VVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZWQlFWVXNRMEZCUXl4SlFVRm5RaXhGUVVGRkxFZEJRV1VzUlVGQlJTeERRVUZUTEVWQlFVVXNSMEZCVnl4RlFVRkZMRWRCUVZjc1JVRkJSU3hKUVVGWk8xRkJRMjVITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGJFSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVVjBRaXhKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU14UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE4wSTdVMEZEU2p0aFFVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU51UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU14UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE4wSTdXVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU0xUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRPVVE3VTBGRFNqdGhRVUZOTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNeFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROMEk3V1VGRlJDeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMW9zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkROVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNM1FqdGhRVU5LTzFsQlEwUXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRelZDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU55UlR0aFFVTktPMWxCUTBRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlF6VkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRGFFWTdZVUZEU2p0VFFVTktPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTFvc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZETVVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU01UkR0aFFVTktPMWxCUTBRc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlF6RkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTnlSVHRuUWtGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03YVVKQlF6RkdPMkZCUTBvN1dVRkRSQ3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTFvc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZETVVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU5vUmp0blFrRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTTFRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRGNFZzdZVUZEU2p0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeExRVUZMTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRM3BETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZPMWxCUTNSQ0xFOUJRVThzUTBGQlF5eERRVUZETzFOQlExbzdZVUZCVFN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGFrSXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRXanRSUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hWUVVGVkxFTkJRVU1zU1VGQlowSXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOeVJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNdlFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha003U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTNCRUxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZETjBJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1YwRkJWeXhEUVVGRExFbEJRV2RDTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRkRVFzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUkxFTkJRVU1zUlVGQll5eEZRVUZGTEVWQlFWVXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJZeXhGUVVGRkxFVkJRVlVzUlVGQlJTeEZRVUZWTEVWQlFVVXNTVUZCV1N4RlFVRkZMRWxCUVZrc1JVRkJSU3hKUVVGWk8xRkJRM0pKTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRVZCUVVVN2IwSkJRM2hDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOMlFpeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVNN2NVSkJRVTA3YjBKQlEwZ3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRlRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUXpGQ08yZENRVVZFTEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UWtGRFdpeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTm9RaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNoQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRlRUlzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNelFqdHhRa0ZCVFN4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFVkJRVVU3YjBKQlEyNUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTJ4RExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEzWkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU16UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRE0wSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dHZRa0ZEYkVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRGRrSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVVelFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU51UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXp0dlFrRkRla0lzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVU4wUWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdiMEpCUTI1RExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenR2UWtGRGJrTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTjBRenR4UWtGQlRTeEpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVc1JVRkJSU3gzUTBGQmQwTTdiMEpCUXpkRUxFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRiRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU5zUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjBRaXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN2QwSkJRMnhFTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlExZ3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUTJZc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRMllzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03Y1VKQlEyeENPM2xDUVVGTk8zZENRVU5JTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03ZDBKQlExb3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdkMEpCUTJoQ0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8zZENRVU5vUWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0eFFrRkRia0k3YVVKQlEwbzdjVUpCUVUwc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNNRUpCUVRCQ08yOUNRVU12UXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOMFFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNSQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzUkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRiRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGRFSXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzNkQ1FVTnNSQ3hUUVVGVE8zRkNRVU5hTzI5Q1FVTkVMRzlEUVVGdlF6dHZRa0ZEY0VNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN2QwSkJRM0pDTEU5QlFVOHNTMEZCU3l4RFFVRkRPM0ZDUVVOb1FqdHBRa0ZEU2p0aFFVTktPMU5CUTBvN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFZEJRVWNzUTBGQlF5eERRVUZoTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRNME1zVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVNMVJDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhEUVVGVExFVkJRVVVzUjBGQlpTeEZRVUZGTEVkQlFWY3NSVUZCUlN4SFFVRlhPMUZCUTJ4RkxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTnFReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6RkNMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzUkZPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUk8xRkJRMW9zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjRRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdiMEpCUTFBc1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRE9VSTdjVUpCUVUwN2IwSkJRMGdzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2FVSkJRMlk3WVVGRFNqdFpRVU5FTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRFpEdFJRVU5FTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFJRVUZSTEVOQlFVTXNTVUZCYlVJc1JVRkJSU3hGUVVGVkxFVkJRVVVzVlVGQmEwSTdVVUZEYUVVc1RVRkJUU3hKUVVGSkxFZEJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5zUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVJDeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF6dFRRVU01UWp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJ4RExFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFlpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU4wUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNelFqdFpRVU5FTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1UwRkRaRHRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZUTzFsQlEyWXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRUQ3hGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMDdXVUZEWml4SFFVRkhMRVZCUVVVc1NVRkJTVHRaUVVOVUxFZEJRVWNzUlVGQlJTeEpRVUZKTzFsQlExUXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRVQ3hKUVVGSkxFVkJRVVVzU1VGQlNUdFpRVU5XTEV0QlFVc3NSVUZCUlN4SlFVRkpPMU5CUTJRc1EwRkJReXhEUVVGRkxHMURRVUZ0UXp0UlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla01zVFVGQlRTeExRVUZMTEVkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVVM1FpeFBRVUZQTEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRM1JDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOaUxFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTllMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTnVReXhKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJUdHZRa0ZEZGtJc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRMnBETzJGQlEwbzdXVUZEUkN4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFVkJRVVU3WjBKQlEySXNUVUZCVFR0aFFVTlVPMWxCUTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUlhaQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJSV3BITEUxQlFVMHNSVUZCUlN4SFFVRlRPMmRDUVVOaUxFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRXQ3hGUVVGRkxFVkJRVVVzUlVGQlJUdG5Ra0ZEVGl4SFFVRkhMRVZCUVVVc1NVRkJTVHRuUWtGRFZDeEhRVUZITEVWQlFVVXNTVUZCU1R0blFrRkRWQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZEVUN4SlFVRkpMRVZCUVVVc1NVRkJTVHRuUWtGRFZpeExRVUZMTEVWQlFVVXNTVUZCU1R0aFFVTmtMRU5CUVVNN1dVRkRSaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMmhFTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRja01zVFVGQlRTeEZRVUZGTEVkQlFWTTdaMEpCUTJJc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlEwNHNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU5ZTEVkQlFVY3NSVUZCUlN4SlFVRkpPMmRDUVVOVUxFZEJRVWNzUlVGQlJTeEpRVUZKTzJkQ1FVTlVMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVU5RTEVsQlFVa3NSVUZCUlN4SlFVRkpPMmRDUVVOV0xFdEJRVXNzUlVGQlJTeEpRVUZKTzJGQlEyUXNRMEZCUXp0WlFVTkdMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWM3WjBKQlEwd3NRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTB3c1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU16UWl4RFFVRkRPMWxCUTBZc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZWtJc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROME03V1VGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONFFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU0zUXp0WlFVTkVMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNrTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRFppeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOb1FpeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMllzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOc1FqdFJRVU5FTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSWGhETEUxQlFVMHNUMEZCVHl4SFFVRnJRaXhGUVVGRkxFTkJRVU03VVVGRGJFTXNTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3V1VGRGNrTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVFVGQlRTeEZRVUZGTEVkQlFXZENMRWxCUVVrc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkZkRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVNM1FpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRelZDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyaERMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJoRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJSV2hETERCQ1FVRXdRanRuUWtGRE1VSXNjMFJCUVhORU8yZENRVU4wUkN4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlEyUXNUMEZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRk8yOUNRVU5hTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRPMmxDUVVNNVJUdG5Ra0ZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJRelZDTzFsQlEwUXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZETTBJN1VVRkRSQ3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRE1VTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hoUVVGaExFTkJRVU1zU1VGQlowSXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWVHRSUVVNeFJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNwQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZET1VJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnNReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zSzBSQlFTdEVPMWxCUXk5RUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGTTBNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpWRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGREwwSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYkVJN1VVRkRSQ3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmFrWXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hqUVVGakxFTkJRVU1zUzBGQk9FTTdVVUZUYWtVc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFMUJRVTBzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZiRUlzVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrTXNUVUZCVFN4RlFVRkZMRWRCUVVjN1dVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUTJ4R0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1dVRkRiRVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVOd1JpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRk8xTkJRM3BHTEVOQlFVTTdVVUZGUml4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTllMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZhTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOVUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNwQ0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtJc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRiRU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVTdiMEpCUXpOQ0xFMUJRVTA3YVVKQlExUTdaMEpCUTBRc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU5hTzFOQlEwbzdVVUZEUkN4MVFrRkJkVUk3VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZxUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJYcERMRTlCUVU4N1dVRkRTQ3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU5RTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUTBvc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRFNpeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTk1MRTFCUVUwc1JVRkJSU3hOUVVGTk8xbEJRMlFzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UWl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGFrc3NRMEZCUXp0SlFVTk9MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzWjBKQlFXZENMRU5CUVVNc1IwRkJhVU1zUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMnhITEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU03U1VGREwwUXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3h0UWtGQmJVSXNRMEZCUXl4SlFVRm5RaXhGUVVGRkxFMUJRVzFDTEVWQlFVVXNTVUZCV1N4RlFVRkZMRWxCUVZrc1JVRkJSU3hEUVVGWExFVkJRVVVzUjBGQlZ6dFJRVU51U0N4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyeENMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5rTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlR0blFrRkROVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTllPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTzJkQ1FVTXpReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlExZzdXVUZEUkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3WjBKQlExWXNUVUZCVFR0aFFVTlVPMWxCUlVRc1RVRkJUU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zVFVGQlRTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNFSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOU0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEV0R0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU16UXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRMWc3VVVGRFJDeFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4alFVRmpMRU5CUVVNc1NVRkJaMElzUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVnp0UlFVTXpSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrWXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hUUVVGVExFTkJRVU1zUTBGQlZ5eEZRVUZGTEVOQlFWYzdVVUZEZEVNc1QwRkJUenRaUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6VkVMRU5CUVVNN1NVRkRUaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEV0QlFVc3NRMEZCUXl4RFFVRlhMRVZCUVVVc1EwRkJWenRSUVVOc1F5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1VzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TFFVRkxMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVmM3VVVGRGFFTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1JDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRkZCUVZFc1EwRkJReXhIUVVGbExFVkJRVVVzVFVGQll6dFJRVU0xUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRlRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE4wSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNelFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMnhDTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlExSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdZVUZETDBJN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVrSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF5OUNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETDBJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1UwRkRja0k3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wTkJRMG83UVVFek0wSkVMR2REUVRJelFrTWlmUT09IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2luaXRSZW5kZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvcXJSZW5kZXJlckZhY3RvcnlcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL2ltYWdlSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW1hZ2VzL2pwZWdFbmNvZGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaW1hZ2VzL3BuZ0VuY29kZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9qcGVnUmVuZGVyZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9qcGVnUmVuZGVyZXJPcHRpb25zXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvY2FudmFzUmVuZGVyZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9jYW52YXNSZW5kZXJlck9wdGlvbnNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9wbmdSZW5kZXJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3BuZ1JlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlbmRlclR5cGVzL3N2Z1JlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvc3ZnUmVuZGVyZXJPcHRpb25zXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvdGV4dFJlbmRlcmVyT3B0aW9uc1wiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2EwTkJRVFpDTzBGQlF6ZENMRzFFUVVFNFF6dEJRVU01UXl3eVEwRkJjME03UVVGRGRFTXNNRU5CUVhGRE8wRkJRM0pETEhsRFFVRnZRenRCUVVWd1F5eG5SRUZCTWtNN1FVRkRNME1zZFVSQlFXdEVPMEZCUTJ4RUxHdEVRVUUyUXp0QlFVTTNReXg1UkVGQmIwUTdRVUZEY0VRc0swTkJRVEJETzBGQlF6RkRMSE5FUVVGcFJEdEJRVU5xUkN3clEwRkJNRU03UVVGRE1VTXNjMFJCUVdsRU8wRkJRMnBFTEdkRVFVRXlRenRCUVVNelF5eDFSRUZCYTBRaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIHRoZSBmYWN0b3JpZXMuXHJcbiAqL1xyXG5jb25zdCBxclJlbmRlcmVyRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vZmFjdG9yaWVzL3FyUmVuZGVyZXJGYWN0b3J5XCIpO1xyXG5jb25zdCBjYW52YXNSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvY2FudmFzUmVuZGVyZXJcIik7XHJcbmNvbnN0IGpwZWdSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvanBlZ1JlbmRlcmVyXCIpO1xyXG5jb25zdCBwbmdSZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyVHlwZXMvcG5nUmVuZGVyZXJcIik7XHJcbmNvbnN0IHN2Z1JlbmRlcmVyXzEgPSByZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy9zdmdSZW5kZXJlclwiKTtcclxuY29uc3QgdGV4dFJlbmRlcmVyXzEgPSByZXF1aXJlKFwiLi9yZW5kZXJUeXBlcy90ZXh0UmVuZGVyZXJcIik7XHJcbmZ1bmN0aW9uIGluaXRSZW5kZXIoKSB7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJjYW52YXNcIiwgKG9wdHMpID0+IG5ldyBjYW52YXNSZW5kZXJlcl8xLkNhbnZhc1JlbmRlcmVyKG9wdHMpKTtcclxuICAgIHFyUmVuZGVyZXJGYWN0b3J5XzEuUVJSZW5kZXJlckZhY3RvcnkuaW5zdGFuY2UoKS5yZWdpc3RlcihcInR4dFwiLCAob3B0cykgPT4gbmV3IHRleHRSZW5kZXJlcl8xLlRleHRSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJzdmdcIiwgKG9wdHMpID0+IG5ldyBzdmdSZW5kZXJlcl8xLlN2Z1JlbmRlcmVyKG9wdHMpKTtcclxuICAgIHFyUmVuZGVyZXJGYWN0b3J5XzEuUVJSZW5kZXJlckZhY3RvcnkuaW5zdGFuY2UoKS5yZWdpc3RlcihcImpwZ1wiLCAob3B0cykgPT4gbmV3IGpwZWdSZW5kZXJlcl8xLkpwZWdSZW5kZXJlcihvcHRzKSk7XHJcbiAgICBxclJlbmRlcmVyRmFjdG9yeV8xLlFSUmVuZGVyZXJGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJwbmdcIiwgKG9wdHMpID0+IG5ldyBwbmdSZW5kZXJlcl8xLlBuZ1JlbmRlcmVyKG9wdHMpKTtcclxufVxyXG5leHBvcnRzLmluaXRSZW5kZXIgPSBpbml0UmVuZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVwZEZKbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtbDBVbVZ1WkdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxIRkZRVUZyUlR0QlFVTnNSU3hwUlVGQk9FUTdRVUZET1VRc05rUkJRVEJFTzBGQlF6RkVMREpFUVVGM1JEdEJRVU40UkN3eVJFRkJkMFE3UVVGRGVFUXNOa1JCUVRCRU8wRkJSVEZFTEZOQlFXZENMRlZCUVZVN1NVRkRkRUlzY1VOQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTd3JRa0ZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNFWXNjVU5CUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETDBVc2NVTkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRPVVVzY1VOQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGREwwVXNjVU5CUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVZc1EwRkJRenRCUVU1RUxHZERRVTFESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvY29sb3JcIik7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVuZGVyIHFyIGRhdGEgYXMgY2FudmFzLlxyXG4gKi9cclxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3ZnIHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItY2FudmFzXCI7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgZm9yZWdyb3VuZCBpcyBub3QgYSBDb2xvciBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmJhY2tncm91bmQsIGNvbG9yXzEuQ29sb3IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGJhY2tncm91bmQgaXMgbm90IGEgQ29sb3Igb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBRUiBjb2RlIGRhdGEgYXMgYW4gY2FudmFzLlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgZm9yIHRoZSBRUiBjb2RlLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gdG8ga2VlcCBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgU1ZHIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJSYXcgaXMgbm90IHN1cHBvcnRlZCBmb3IgPGNhbnZhcz5cIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhIGFzIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIHRvIHJlbmRlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBpbiBwaXhlbHMgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiBzaXplIGluIHBpeGVscyB0byBsZWF2ZSBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IHJlbmRlcmVkIGFzIGFuIGh0bWwgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVuZGVySHRtbChjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNlbGxEYXRhLmxlbmd0aCAqIGNlbGxTaXplICsgKDIgKiBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmdiYVRleHQoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGRpbWVuc2lvbnMsIGRpbWVuc2lvbnMpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLnJnYmFUZXh0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjZWxsRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNlbGxEYXRhW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbERhdGFbeF1beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggKiBjZWxsU2l6ZSArIG1hcmdpblNpemUsIHkgKiBjZWxsU2l6ZSArIG1hcmdpblNpemUsIGNlbGxTaXplLCBjZWxsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhbnZhc1JlbmRlcmVyID0gQ2FudmFzUmVuZGVyZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyRnVkbUZ6VW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12WTJGdWRtRnpVbVZ1WkdWeVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHMUZRVUZuUlR0QlFVTm9SU3hyUmtGQkswVTdRVUZETDBVc2IwWkJRV2xHTzBGQlEycEdMRzlHUVVGcFJqdEJRVXRxUmpzN1IwRkZSenRCUVVOSUxFMUJRV0VzWTBGQll6dEpRVWwyUWpzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEU5QlFTdENPMUZCUTNaRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUMEZCVHl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEyaEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hKUVVGSkxHRkJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRhRVlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NWMEZCVnl4RFFVRkRPMUZCUlM5RUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlN4aFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOMlJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRGhEUVVFNFF5eERRVUZETEVOQlFVTTdVMEZEYmtVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNZVUZCU3l4RFFVRkRMRVZCUVVVN1dVRkRka1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3NFEwRkJPRU1zUTBGQlF5eERRVUZETzFOQlEyNUZPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJiMElzUlVGQlJTeFhRVUZ0UWl4RFFVRkRMRVZCUVVVc1lVRkJjVUlzUlVGQlJUdFJRVU4wUml4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1NVRkRMMFFzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQmIwSXNSVUZCUlN4WFFVRnRRaXhEUVVGRExFVkJRVVVzWVVGQmNVSXNSVUZCUlR0UlFVTjJSaXhKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTXpSVHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNSRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLME5CUVN0RExGVkJRVlVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYUVZN1VVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVnFSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMmhFTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZOME1zVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRNVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkZNMElzVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVY0UXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRM2hFTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTjRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGVrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTJoQ0xFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSMEZCUnl4VlFVRlZMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzJsQ1FVTTVSanRoUVVOS08xTkJRMG83VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wTkJRMG83UVVFMVJVUXNkME5CTkVWREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBDYW52YXMgcmVuZGVyZXIuXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNSZW5kZXJlck9wdGlvbnMge1xyXG59XHJcbmV4cG9ydHMuQ2FudmFzUmVuZGVyZXJPcHRpb25zID0gQ2FudmFzUmVuZGVyZXJPcHRpb25zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMkZ1ZG1GelVtVnVaR1Z5WlhKUGNIUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDJOaGJuWmhjMUpsYm1SbGNtVnlUM0IwYVc5dWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUlVFN08wZEJSVWM3UVVGRFNDeE5RVUZoTEhGQ1FVRnhRanREUVdGcVF6dEJRV0pFTEhORVFXRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGltYWdlSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9pbWFnZUhlbHBlclwiKTtcclxuY29uc3QganBlZ0VuY29kZXJfMSA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvanBlZ0VuY29kZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBiaXRtYXAuXHJcbiAqL1xyXG5jbGFzcyBKcGVnUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3ZnIHJlbmRlcmVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCA9IHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCB8fCBjb2xvcl8xLkNvbG9yLmZyb21IZXgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgPSB0aGlzLl9vcHRpb25zLmNzc0NsYXNzIHx8IFwicXItanBlZ1wiO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmZvcmVncm91bmQsIGNvbG9yXzEuQ29sb3IpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGZvcmVncm91bmQgaXMgbm90IGEgQ29sb3Igb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLCBjb2xvcl8xLkNvbG9yKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBiYWNrZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIGEgYml0bWFwLlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgZm9yIHRoZSBRUiBjb2RlLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gdG8ga2VlcCBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYml0bWFwIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNlbGxEYXRhLmxlbmd0aCAqIGNlbGxTaXplICsgKDIgKiBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGltZW5zaW9ucyAqIGRpbWVuc2lvbnMgKiA0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgZGF0YVtpXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5yZWQoKTtcclxuICAgICAgICAgICAgZGF0YVtpICsgMV0gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuZ3JlZW4oKTtcclxuICAgICAgICAgICAgZGF0YVtpICsgMl0gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICBkYXRhW2kgKyAzXSA9IDB4RkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYyA9IG1hcmdpblNpemUgKiBkaW1lbnNpb25zICogNDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiA0KTtcclxuICAgICAgICAgICAgbGV0IHIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSAweEZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2VsbERhdGFbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG91ciA9IGNlbGxEYXRhW3ldW3hdID8gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIDogdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIucmVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dbcisrXSA9IGNvbG91ci5ibHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSAweEZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFyZ2luU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5yZWQoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ibHVlKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IDB4RkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNldChyb3csIGRjKTtcclxuICAgICAgICAgICAgICAgIGRjICs9IHJvdy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBqcGVnRW5jb2Rlcl8xLkpwZWdFbmNvZGVyKCkuZW5jb2RlKGRpbWVuc2lvbnMsIGRpbWVuc2lvbnMsIGRhdGEsIDc1KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMucmVuZGVyUmF3KGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1hZ2VIZWxwZXJfMS5JbWFnZUhlbHBlci5kYXRhVG9JbWFnZVNvdXJjZShcImltYWdlL2pwZWdcIiwgcmF3KTtcclxuICAgICAgICByZXR1cm4gaW1nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnBlZ1JlbmRlcmVyID0gSnBlZ1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbkJsWjFKbGJtUmxjbVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDJwd1pXZFNaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2JVVkJRV2RGTzBGQlEyaEZMR3RHUVVFclJUdEJRVU12UlN4dlJrRkJhVVk3UVVGRGFrWXNiMFpCUVdsR08wRkJSV3BHTEhkRVFVRnhSRHRCUVVOeVJDeDFSRUZCYjBRN1FVRkpjRVE3TzBkQlJVYzdRVUZEU0N4TlFVRmhMRmxCUVZrN1NVRkpja0k3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hQUVVFMlFqdFJRVU55UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFbEJRVWtzWVVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOb1JpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNTVUZCU1N4aFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEyaEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hKUVVGSkxGTkJRVk1zUTBGQlF6dFJRVVUzUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRVVVzWVVGQlN5eERRVUZETEVWQlFVVTdXVUZEZGtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzRRMEZCT0VNc1EwRkJReXhEUVVGRE8xTkJRMjVGTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHRkJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zT0VOQlFUaERMRU5CUVVNc1EwRkJRenRUUVVOdVJUdEpRVU5NTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFXOUNMRVZCUVVVc1YwRkJiVUlzUTBGQlF5eEZRVUZGTEdGQlFYRkNMRVZCUVVVN1VVRkRkRVlzU1VGQlNTeERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyaERMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZVVOQlFYbERMRU5CUVVNc1EwRkJRenRUUVVNNVJEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMjVFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc05FTkJRVFJETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRNMFU3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOMFJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMQ3REUVVFclF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJoR08xRkJSVVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkZha1VzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNKRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTjZReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUXk5RExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRGRFSTdVVUZGUkN4SlFVRkpMRVZCUVVVc1IwRkJSeXhWUVVGVkxFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnlReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSVllzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRha01zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRekZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU0xUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZETTBNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTI1Q08xbEJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzcERMRTFCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMmRDUVVOd1JpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUnl4RlFVRkZPMjlDUVVOb1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdiMEpCUTNoQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dHZRa0ZETVVJc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yOUNRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdhVUpCUTI1Q08yRkJRMG83V1VGRlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUnl4RlFVRkZPMmRDUVVOc1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRE1VTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlF6VkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTXpReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRia0k3V1VGRlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNdlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVJc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdZVUZEY0VJN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeDVRa0ZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1JGTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFXOUNMRVZCUVVVc1YwRkJiVUlzUTBGQlF5eEZRVUZGTEdGQlFYRkNMRVZCUVVVN1VVRkRka1lzVFVGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkZha1VzVFVGQlRTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU14UXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRekZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGTTBRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUV6UjBRc2IwTkJNa2RESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIEpwZWcgcmVuZGVyZXIuXHJcbiAqL1xyXG5jbGFzcyBKcGVnUmVuZGVyZXJPcHRpb25zIHtcclxufVxyXG5leHBvcnRzLkpwZWdSZW5kZXJlck9wdGlvbnMgPSBKcGVnUmVuZGVyZXJPcHRpb25zO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbkJsWjFKbGJtUmxjbVZ5VDNCMGFXOXVjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXlaVzVrWlhKVWVYQmxjeTlxY0dWblVtVnVaR1Z5WlhKUGNIUnBiMjV6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkZRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNiVUpCUVcxQ08wTkJZeTlDTzBGQlpFUXNhMFJCWTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL2NvbG9yXCIpO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgaW1hZ2VIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ltYWdlSGVscGVyXCIpO1xyXG5jb25zdCBwbmdFbmNvZGVyXzEgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3BuZ0VuY29kZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyBwbmcuXHJcbiAqL1xyXG5jbGFzcyBQbmdSZW5kZXJlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTdmcgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci1wbmdcIjtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLCBjb2xvcl8xLkNvbG9yKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBmb3JlZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgYmFja2dyb3VuZCBpcyBub3QgYSBDb2xvciBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIFFSIGNvZGUgZGF0YSBhcyBhIGJpdG1hcC5cclxuICAgICAqIEBwYXJhbSBjZWxsRGF0YSBUaGUgY2VsbCBkYXRhIGZvciB0aGUgUVIgY29kZS5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHRvIGtlZXAgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGJpdG1hcCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzQXJyYXkoY2VsbERhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjZWxsRGF0YSBtdXN0IGJlIG9mIHR5cGUgUVJDZWxsRGF0YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIoY2VsbFNpemUpIHx8IGNlbGxTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2VsbFNpemUgbXVzdCBiZSBhIG51bWJlciA+IDAsIGl0IGlzICR7Y2VsbFNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKG1hcmdpblNpemUpIHx8IG1hcmdpblNpemUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1hcmdpblNpemUgbXVzdCBiZSBhIG51bWJlciA+PSAwLCBpdCBpcyAke21hcmdpblNpemV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjZWxsRGF0YS5sZW5ndGggKiBjZWxsU2l6ZSArICgyICogbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRpbWVuc2lvbnMgKiBkaW1lbnNpb25zICogNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIGRhdGFbaV0gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDFdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmdyZWVuKCk7XHJcbiAgICAgICAgICAgIGRhdGFbaSArIDJdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmJsdWUoKTtcclxuICAgICAgICAgICAgZGF0YVtpICsgM10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYWxwaGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRjID0gbWFyZ2luU2l6ZSAqIGRpbWVuc2lvbnMgKiA0O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2VsbERhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gbmV3IFVpbnQ4QXJyYXkoZGltZW5zaW9ucyAqIDQpO1xyXG4gICAgICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFyZ2luU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5yZWQoKTtcclxuICAgICAgICAgICAgICAgIHJvd1tyKytdID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLmdyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ibHVlKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5hbHBoYSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2VsbERhdGFbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG91ciA9IGNlbGxEYXRhW3ldW3hdID8gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kIDogdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIucmVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuZ3JlZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dbcisrXSA9IGNvbG91ci5ibHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W3IrK10gPSBjb2xvdXIuYWxwaGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmdpblNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQucmVkKCk7XHJcbiAgICAgICAgICAgICAgICByb3dbcisrXSA9IHRoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5ncmVlbigpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYmx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgcm93W3IrK10gPSB0aGlzLl9vcHRpb25zLmJhY2tncm91bmQuYWxwaGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNlbGxTaXplOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuc2V0KHJvdywgZGMpO1xyXG4gICAgICAgICAgICAgICAgZGMgKz0gcm93Lmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHBuZ0VuY29kZXJfMS5QbmdFbmNvZGVyKCkuZW5jb2RlKFtkYXRhLmJ1ZmZlcl0sIGRpbWVuc2lvbnMsIGRpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIGNlbGwgZGF0YSBhcyBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSB0byByZW5kZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgaW4gcGl4ZWxzIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gc2l6ZSBpbiBwaXhlbHMgdG8gbGVhdmUgYXJvdW5kIHRoZSBxciBjb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIG9iamVjdCByZW5kZXJlZCBhcyBhbiBodG1sIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlckh0bWwoY2VsbERhdGEsIGNlbGxTaXplID0gNSwgbWFyZ2luU2l6ZSA9IDEwKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5yZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MpO1xyXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZUhlbHBlcl8xLkltYWdlSGVscGVyLmRhdGFUb0ltYWdlU291cmNlKFwiaW1hZ2UvcG5nXCIsIHJhdyk7XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBuZ1JlbmRlcmVyID0gUG5nUmVuZGVyZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHNW5VbVZ1WkdWeVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNtVnVaR1Z5Vkhsd1pYTXZjRzVuVW1WdVpHVnlaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzFGUVVGblJUdEJRVU5vUlN4clJrRkJLMFU3UVVGREwwVXNiMFpCUVdsR08wRkJRMnBHTEc5R1FVRnBSanRCUVVWcVJpeDNSRUZCY1VRN1FVRkRja1FzY1VSQlFXdEVPMEZCU1d4RU96dEhRVVZITzBGQlEwZ3NUVUZCWVN4WFFVRlhPMGxCU1hCQ096czdUMEZIUnp0SlFVTklMRmxCUVZrc1QwRkJORUk3VVVGRGNFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hKUVVGSkxHRkJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRhRVlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVsQlFVa3NZVUZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU5vUml4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU03VVVGRk5VUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHRkJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zT0VOQlFUaERMRU5CUVVNc1EwRkJRenRUUVVOdVJUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hoUVVGTExFTkJRVU1zUlVGQlJUdFpRVU4yUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExEaERRVUU0UXl4RFFVRkRMRU5CUVVNN1UwRkRia1U3U1VGRFRDeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZ2UWl4RlFVRkZMRmRCUVcxQ0xFTkJRVU1zUlVGQlJTeGhRVUZ4UWl4RlFVRkZPMUZCUTNSR0xFbEJRVWtzUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1UwRkRPVVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOdVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJEUVVFMFF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRkRVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3clEwRkJLME1zVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVWRUxFMUJRVTBzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUldwRkxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZWtRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEZWtNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTXZReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUXpsRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1UwRkRiRVE3VVVGRlJDeEpRVUZKTEVWQlFVVXNSMEZCUnl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU55UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUlZZc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEYWtNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUXpGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVNMVF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRE0wTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WVVGREwwTTdXVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRla01zVFVGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03WjBKQlEzQkdMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGSExFVkJRVVU3YjBKQlEyaERMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRGVFSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMjlDUVVNeFFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdiMEpCUTNwQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dHBRa0ZETjBJN1lVRkRTanRaUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZITEVWQlFVVTdaMEpCUTJ4RExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVNeFF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRE5VTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlF6TkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJGQlF5OURPMWxCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8yRkJRM0JDTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc2RVSkJRVlVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRNVVVzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQmIwSXNSVUZCUlN4WFFVRnRRaXhEUVVGRExFVkJRVVVzWVVGQmNVSXNSVUZCUlR0UlFVTjJSaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVnFSU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRekZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4NVFrRkJWeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVV4UkN4UFFVRlBMRWRCUVVjc1EwRkJRenRKUVVObUxFTkJRVU03UTBGRFNqdEJRVE5IUkN4clEwRXlSME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIFBuZyByZW5kZXJlci5cclxuICovXHJcbmNsYXNzIFBuZ1JlbmRlcmVyT3B0aW9ucyB7XHJcbn1cclxuZXhwb3J0cy5QbmdSZW5kZXJlck9wdGlvbnMgPSBQbmdSZW5kZXJlck9wdGlvbnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHNW5VbVZ1WkdWeVpYSlBjSFJwYjI1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwzQnVaMUpsYm1SbGNtVnlUM0IwYVc5dWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUlVFN08wZEJSVWM3UVVGRFNDeE5RVUZoTEd0Q1FVRnJRanREUVdNNVFqdEJRV1JFTEdkRVFXTkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvZGF0YS9jb2xvclwiKTtcclxuY29uc3QgbGluZWFyR3JhZGllbnRfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2RhdGEvbGluZWFyR3JhZGllbnRcIik7XHJcbmNvbnN0IHJhZGlhbEdyYWRpZW50XzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9kYXRhL3JhZGlhbEdyYWRpZW50XCIpO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlbmRlciBxciBkYXRhIGFzIHN2Zy5cclxuICovXHJcbmNsYXNzIFN2Z1JlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN2ZyByZW5kZXJlci5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kVHlwZSB8fCBcInNvbGlkXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgIT09IFwic29saWRcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlICE9PSBcImxpbmVhclwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgIT09IFwicmFkaWFsXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9wdGlvbnMgZm9yZWdyb3VuZFR5cGUgbXVzdCBiZSBzb2xpZCwgbGluZWFyIG9yIHJhZGlhbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgPT09IFwic29saWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgPSB0aGlzLl9vcHRpb25zLmZvcmVncm91bmQgfHwgY29sb3JfMS5Db2xvci5mcm9tSGV4KFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZCwgY29sb3JfMS5Db2xvcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGZvcmVncm91bmQgaXMgbm90IGEgQ29sb3Igb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgPT09IFwibGluZWFyXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZExpbmVhciwgbGluZWFyR3JhZGllbnRfMS5MaW5lYXJHcmFkaWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvcHRpb25zIGZvcmVncm91bmRMaW5lYXIgbXVzdCBiZSBhIExpbmVhckdyYWRpZW50IG9iamVjdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRUeXBlID09PSBcInJhZGlhbFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRSYWRpYWwsIHJhZGlhbEdyYWRpZW50XzEuUmFkaWFsR3JhZGllbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBmb3JlZ3JvdW5kUmFkaWFsIG11c3QgYmUgYSBSYWRpYWxHcmFkaWVudCBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kID0gdGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kIHx8IGNvbG9yXzEuQ29sb3IuZnJvbUhleChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci1zdmdcIjtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5fb3B0aW9ucy5iYWNrZ3JvdW5kLCBjb2xvcl8xLkNvbG9yKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb3B0aW9ucyBiYWNrZ3JvdW5kIGlzIG5vdCBhIENvbG9yIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyYXAgc3ZnIGNvbnRlbnQgd2l0aCBvdXRlciB4bWwuXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBzdmcuXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHN2Zy5cclxuICAgICAqIEBwYXJhbSBjb250ZW50IFRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBzdmcuXHJcbiAgICAgKiBAcGFyYW0gaW5jbHVkZVhtbERlY2xhcmF0aW9uIEluY2x1ZGUgYW4geG1sIGRlY2xhcmF0aW9uIGF0IHRoZSBzdGFydCBvZiB0aGUgY29udGVudFxyXG4gICAgICogQHJldHVybnMgVGhlIFNWRyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVuZGVyV3JhcHBlcih3aWR0aCwgaGVpZ2h0LCBjb250ZW50LCBpbmNsdWRlWG1sRGVjbGFyYXRpb24pIHtcclxuICAgICAgICBsZXQgdGV4dCA9IGBgO1xyXG4gICAgICAgIGlmIChpbmNsdWRlWG1sRGVjbGFyYXRpb24pIHtcclxuICAgICAgICAgICAgdGV4dCArPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0ICs9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcclxuICAgICAgICB0ZXh0ICs9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGV4dCArPSBgPC9zdmc+YDtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBRUiBjb2RlIGRhdGEgYXMgYW4gU1ZHLlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgZm9yIHRoZSBRUiBjb2RlLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIGVhY2ggY2VsbC5cclxuICAgICAqIEBwYXJhbSBtYXJnaW5TaXplIFRoZSBtYXJnaW4gdG8ga2VlcCBhcm91bmQgdGhlIHFyIGNvZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgU1ZHIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSA1LCBtYXJnaW5TaXplID0gMTApIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMucmVuZGVyQ29udGVudChjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpO1xyXG4gICAgICAgIHJldHVybiBTdmdSZW5kZXJlci5yZW5kZXJXcmFwcGVyKHJlbmRlcmVkLndpZHRoLCByZW5kZXJlZC5oZWlnaHQsIHJlbmRlcmVkLmNvbnRlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDUsIG1hcmdpblNpemUgPSAxMCkge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkID0gdGhpcy5yZW5kZXJDb250ZW50KGNlbGxEYXRhLCBjZWxsU2l6ZSwgbWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3JlbmRlcmVkLndpZHRofXB4YCk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHtyZW5kZXJlZC5oZWlnaHR9cHhgKTtcclxuICAgICAgICBzdmcuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcHRpb25zLmNzc0NsYXNzKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5uZXItaHRtbFxyXG4gICAgICAgIHN2Zy5pbm5lckhUTUwgPSByZW5kZXJlZC5jb250ZW50O1xyXG4gICAgICAgIHJldHVybiBzdmc7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgaW50ZXJuYWwgY29udGVudCBvZiB0aGUgc3ZnLlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIHRoZSBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIHNpemUgb2YgdGhlIG1hcmdpbi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaW1lbnNpb24gYW5kIGNvbnRlbnQgb2YgdGhlIHN2Zy5cclxuICAgICAqL1xyXG4gICAgcmVuZGVyQ29udGVudChjZWxsRGF0YSwgY2VsbFNpemUsIG1hcmdpblNpemUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNBcnJheShjZWxsRGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNlbGxEYXRhIG11c3QgYmUgb2YgdHlwZSBRUkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihjZWxsU2l6ZSkgfHwgY2VsbFNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjZWxsU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID4gMCwgaXQgaXMgJHtjZWxsU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNOdW1iZXIobWFyZ2luU2l6ZSkgfHwgbWFyZ2luU2l6ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWFyZ2luU2l6ZSBtdXN0IGJlIGEgbnVtYmVyID49IDAsIGl0IGlzICR7bWFyZ2luU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNlbGxEYXRhLmxlbmd0aCAqIGNlbGxTaXplICsgKDIgKiBtYXJnaW5TaXplKTtcclxuICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgIGxldCBmaWxsUmVmID0gYGA7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgPT09IFwibGluZWFyXCIgfHwgdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kVHlwZSA9PT0gXCJyYWRpYWxcIikge1xyXG4gICAgICAgICAgICBmaWxsUmVmID0gXCJ1cmwoI3FyZmlsbClcIjtcclxuICAgICAgICAgICAgY29udGVudCArPSBgPGRlZnM+YDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFR5cGUgPT09IFwibGluZWFyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gdGhpcy5yZW5kZXJMaW5lYXJHcmFkaWVudCh0aGlzLl9vcHRpb25zLmZvcmVncm91bmRMaW5lYXIsIFwicXJmaWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCArPSB0aGlzLnJlbmRlclJhZGlhbEdyYWRpZW50KHRoaXMuX29wdGlvbnMuZm9yZWdyb3VuZFJhZGlhbCwgXCJxcmZpbGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudCArPSBgPC9kZWZzPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxsUmVmID0gdGhpcy5fb3B0aW9ucy5mb3JlZ3JvdW5kLmhleCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIke2RpbWVuc2lvbnN9XCIgaGVpZ2h0PVwiJHtkaW1lbnNpb25zfVwiIGZpbGw9XCIke3RoaXMuX29wdGlvbnMuYmFja2dyb3VuZC5oZXgoKX1cIiAvPmA7XHJcbiAgICAgICAgbGV0IHBhdGhDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2VsbERhdGFbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsRGF0YVt4XVt5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhDb250ZW50ICs9IGBNJHt4ICogY2VsbFNpemUgKyBtYXJnaW5TaXplfSwke3kgKiBjZWxsU2l6ZSArIG1hcmdpblNpemV9IGgke2NlbGxTaXplfSB2JHtjZWxsU2l6ZX0gaC0ke2NlbGxTaXplfXogYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGA8cGF0aCBmaWxsPVwiJHtmaWxsUmVmfVwiIGQ9XCIke3BhdGhDb250ZW50LnRyaW0oKX1cIi8+YDtcclxuICAgICAgICByZXR1cm4geyB3aWR0aDogZGltZW5zaW9ucywgaGVpZ2h0OiBkaW1lbnNpb25zLCBjb250ZW50OiBjb250ZW50IH07XHJcbiAgICB9XHJcbiAgICByZW5kZXJHcmFkaWVudFN0b3BzKHN0b3BzKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlciA9IGBgO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVuZGVyICs9IGA8c3RvcCBvZmZzZXQ9XCIke3N0b3BzW2ldLm9mZnNldFBlcmNlbnR9JVwiIHN0b3AtY29sb3I9XCIke3N0b3BzW2ldLmNvbG9yLmhleCgpfVwiLz5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTGluZWFyR3JhZGllbnQoZ3JhZGllbnQsIGlkKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlciA9IGA8bGluZWFyR3JhZGllbnQgaWQ9XCIke2lkfVwiYDtcclxuICAgICAgICBpZiAoZ3JhZGllbnQuYW5nbGUoKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlbmRlciArPSBgIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKCR7Z3JhZGllbnQuYW5nbGUoKX0pXCJgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIgKz0gYD4ke3RoaXMucmVuZGVyR3JhZGllbnRTdG9wcyhncmFkaWVudC5zdG9wcygpKX08L2xpbmVhckdyYWRpZW50PmA7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICAgIHJlbmRlclJhZGlhbEdyYWRpZW50KGdyYWRpZW50LCBpZCkge1xyXG4gICAgICAgIGxldCByZW5kZXIgPSBgPHJhZGlhbEdyYWRpZW50IGlkPVwiJHtpZH1cImA7XHJcbiAgICAgICAgaWYgKGdyYWRpZW50Lm9mZnNldFhQZXJjZW50KCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZW5kZXIgKz0gYCBjeD1cIiR7Z3JhZGllbnQub2Zmc2V0WFBlcmNlbnQoKX0lXCJgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JhZGllbnQub2Zmc2V0WVBlcmNlbnQoKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlbmRlciArPSBgIGN5PVwiJHtncmFkaWVudC5vZmZzZXRZUGVyY2VudCgpfSVcImA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncmFkaWVudC5yYWRpdXNQZXJjZW50KCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZW5kZXIgKz0gYCByPVwiJHtncmFkaWVudC5yYWRpdXNQZXJjZW50KCl9JVwiYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyICs9IGA+JHt0aGlzLnJlbmRlckdyYWRpZW50U3RvcHMoZ3JhZGllbnQuc3RvcHMoKSl9PC9yYWRpYWxHcmFkaWVudD5gO1xyXG4gICAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdmdSZW5kZXJlciA9IFN2Z1JlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1puVW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjbVZ1WkdWeVZIbHdaWE12YzNablVtVnVaR1Z5WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVOb1JTeHhSa0ZCYTBZN1FVRkRiRVlzY1VaQlFXdEdPMEZCUTJ4R0xHdEdRVUVyUlR0QlFVTXZSU3h2UmtGQmFVWTdRVUZEYWtZc2IwWkJRV2xHTzBGQlMycEdPenRIUVVWSE8wRkJRMGdzVFVGQllTeFhRVUZYTzBsQlNYQkNPenM3VDBGSFJ6dEpRVU5JTEZsQlFWa3NUMEZCTkVJN1VVRkRjRU1zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4SlFVRkpMRTlCUVU4c1EwRkJRenRSUVVWMlJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhMUVVGTExFOUJRVTg3V1VGRGVFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFdEJRVXNzVVVGQlVUdFpRVU42UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZETTBNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzBSRUZCTkVRc1EwRkJReXhEUVVGRE8xTkJRMnBHTzFGQlJVUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUzBGQlN5eFBRVUZQTEVWQlFVVTdXVUZETVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFbEJRVWtzWVVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOb1JpeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1lVRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zT0VOQlFUaERMRU5CUVVNc1EwRkJRenRoUVVOdVJUdFRRVU5LTzJGQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZEYkVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc0swSkJRV01zUTBGQlF5eEZRVUZGTzJkQ1FVTjBSU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERoRVFVRTRSQ3hEUVVGRExFTkJRVU03WVVGRGJrWTdVMEZEU2p0aFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUTJ4RUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxDdENRVUZqTEVOQlFVTXNSVUZCUlR0blFrRkRkRVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3NFJFRkJPRVFzUTBGQlF5eERRVUZETzJGQlEyNUdPMU5CUTBvN1VVRkZSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzU1VGQlNTeGhRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SlFVRkpMRkZCUVZFc1EwRkJRenRSUVVVMVJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1lVRkJTeXhEUVVGRExFVkJRVVU3V1VGRGRrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXc0UTBGQk9FTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFXRXNSVUZCUlN4TlFVRmpMRVZCUVVVc1QwRkJaU3hGUVVGRkxIRkNRVUU0UWp0UlFVTjBSeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWkN4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1NVRkJTU3gxUTBGQmRVTXNRMEZCUXp0VFFVTnVSRHRSUVVORUxFbEJRVWtzU1VGQlNTeGxRVUZsTEV0QlFVc3NZVUZCWVN4TlFVRk5MSFZEUVVGMVF5eERRVUZETzFGQlEzWkdMRWxCUVVrc1NVRkJTU3hQUVVGUExFTkJRVU03VVVGRGFFSXNTVUZCU1N4SlFVRkpMRkZCUVZFc1EwRkJRenRSUVVOcVFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeEZRVUZGTzFGQlEzUkdMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU53UlN4UFFVRlBMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMFlzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQmIwSXNSVUZCUlN4WFFVRnRRaXhEUVVGRExFVkJRVVVzWVVGQmNVSXNSVUZCUlR0UlFVTjJSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGY0VVc1RVRkJUU3hIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl3MFFrRkJORUlzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEycEVMRWRCUVVjc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJrUXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNeFF5eDVRMEZCZVVNN1VVRkRla01zUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJSV3BETEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEdGQlFXRXNRMEZCUXl4UlFVRnhRaXhGUVVGRkxGRkJRV2RDTEVWQlFVVXNWVUZCYTBJN1VVRkROVVVzU1VGQlNTeERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzFsQlEyaERMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZVVOQlFYbERMRU5CUVVNc1EwRkJRenRUUVVNNVJEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMjVFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc05FTkJRVFJETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRNMFU3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOMFJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMQ3REUVVFclF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJoR08xRkJSVVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRha1VzU1VGQlNTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnFRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRlRVlzVDBGQlR5eEhRVUZITEdOQlFXTXNRMEZCUXp0WlFVTjZRaXhQUVVGUExFbEJRVWtzVVVGQlVTeERRVUZETzFsQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVNelF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1lVRkRiRVk3YVVKQlFVMDdaMEpCUTBnc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEyeEdPMWxCUTBRc1QwRkJUeXhKUVVGSkxGTkJRVk1zUTBGQlF6dFRRVU40UWp0aFFVRk5PMWxCUTBnc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRelZETzFGQlJVUXNUMEZCVHl4SlFVRkpMRFJDUVVFMFFpeFZRVUZWTEdGQlFXRXNWVUZCVlN4WFFVRlhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNN1VVRkRlRWdzU1VGQlNTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNSRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU42UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRhRUlzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1IwRkJSeXhWUVVGVkxFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNSMEZCUnl4VlFVRlZMRXRCUVVzc1VVRkJVU3hMUVVGTExGRkJRVkVzVFVGQlRTeFJRVUZSTEVsQlFVa3NRMEZCUXp0cFFrRkRla2c3WVVGRFNqdFRRVU5LTzFGQlEwUXNUMEZCVHl4SlFVRkpMR1ZCUVdVc1QwRkJUeXhSUVVGUkxGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRPMUZCUTJwRkxFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTNaRkxFTkJRVU03U1VGRlR5eHRRa0ZCYlVJc1EwRkJReXhMUVVGblJEdFJRVU40UlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNUVUZCVFN4SlFVRkpMR2xDUVVGcFFpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hyUWtGQmEwSXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRPMU5CUTJoSE8xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWUExHOUNRVUZ2UWl4RFFVRkRMRkZCUVhkQ0xFVkJRVVVzUlVGQlZUdFJRVU0zUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXgxUWtGQmRVSXNSVUZCUlN4SFFVRkhMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N3NFFrRkJPRUlzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeE5RVUZOTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRPMUZCUXpWRkxFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZUeXh2UWtGQmIwSXNRMEZCUXl4UlFVRjNRaXhGUVVGRkxFVkJRVlU3VVVGRE4wUXNTVUZCU1N4TlFVRk5MRWRCUVVjc2RVSkJRWFZDTEVWQlFVVXNSMEZCUnl4RFFVRkRPMUZCUXpGRExFbEJRVWtzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONlF5eE5RVUZOTEVsQlFVa3NVVUZCVVN4UlFVRlJMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF6dFRRVU51UkR0UlFVTkVMRWxCUVVrc1VVRkJVU3hEUVVGRExHTkJRV01zUlVGQlJTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTjZReXhOUVVGTkxFbEJRVWtzVVVGQlVTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJRenRUUVVOdVJEdFJRVU5FTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1JVRkJSU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU40UXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhSUVVGUkxFTkJRVU1zWVVGQllTeEZRVUZGTEVsQlFVa3NRMEZCUXp0VFFVTnFSRHRSUVVORUxFMUJRVTBzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdVVUZETlVVc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0RFFVTktPMEZCTjB0RUxHdERRVFpMUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIFN2ZyByZW5kZXJlci5cclxuICovXHJcbmNsYXNzIFN2Z1JlbmRlcmVyT3B0aW9ucyB7XHJcbn1cclxuZXhwb3J0cy5TdmdSZW5kZXJlck9wdGlvbnMgPSBTdmdSZW5kZXJlck9wdGlvbnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzWm5VbVZ1WkdWeVpYSlBjSFJwYjI1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKbGJtUmxjbFI1Y0dWekwzTjJaMUpsYm1SbGNtVnlUM0IwYVc5dWN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCU1VFN08wZEJSVWM3UVVGRFNDeE5RVUZoTEd0Q1FVRnJRanREUVRCQ09VSTdRVUV4UWtRc1owUkJNRUpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZW5kZXIgcXIgZGF0YSBhcyB0M3h0LlxyXG4gKi9cclxuY2xhc3MgVGV4dFJlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFRleHQgcmVuZGVyZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5vbkNoYXIgPSB0aGlzLl9vcHRpb25zLm9uQ2hhciB8fCBcIuKWiOKWiFwiO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMub2ZmQ2hhciA9IHRoaXMuX29wdGlvbnMub2ZmQ2hhciB8fCBcIiAgXCI7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jc3NDbGFzcyA9IHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MgfHwgXCJxci10ZXh0XCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgUVIgY29kZSBkYXRhIGFzIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gY2VsbERhdGEgVGhlIGNlbGwgZGF0YSBmb3IgdGhlIFFSIGNvZGUuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgZWFjaCBjZWxsLlxyXG4gICAgICogQHBhcmFtIG1hcmdpblNpemUgVGhlIG1hcmdpbiB0byBrZWVwIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0ZXh0IGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbmRlclJhdyhjZWxsRGF0YSwgY2VsbFNpemUgPSAxLCBtYXJnaW5TaXplID0gMikge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KGNlbGxEYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2VsbERhdGEgbXVzdCBiZSBvZiB0eXBlIFFSQ2VsbERhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzTnVtYmVyKGNlbGxTaXplKSB8fCBjZWxsU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNlbGxTaXplIG11c3QgYmUgYSBudW1iZXIgPiAwLCBpdCBpcyAke2NlbGxTaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc051bWJlcihtYXJnaW5TaXplKSB8fCBtYXJnaW5TaXplIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJnaW5TaXplIG11c3QgYmUgYSBudW1iZXIgPj0gMCwgaXQgaXMgJHttYXJnaW5TaXplfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtYXJnaW5TaXplOyBtKyspIHtcclxuICAgICAgICAgICAgdGV4dCArPSBgJHt0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplICogY2VsbERhdGEubGVuZ3RoKX1cXHJcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNlbGxEYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5fb3B0aW9ucy5vZmZDaGFyLnJlcGVhdChtYXJnaW5TaXplKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjZWxsRGF0YVt4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxEYXRhW3ldW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSB0aGlzLl9vcHRpb25zLm9uQ2hhci5yZXBlYXQoY2VsbFNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSB0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuX29wdGlvbnMub2ZmQ2hhci5yZXBlYXQobWFyZ2luU2l6ZSk7XHJcbiAgICAgICAgICAgIGxpbmUgKz0gXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsU2l6ZTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBtYXJnaW5TaXplOyBtKyspIHtcclxuICAgICAgICAgICAgdGV4dCArPSBgJHt0aGlzLl9vcHRpb25zLm9mZkNoYXIucmVwZWF0KGNlbGxTaXplICogY2VsbERhdGEubGVuZ3RoKX1cXHJcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEgYXMgYW4gSFRNTCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGNlbGxEYXRhIFRoZSBjZWxsIGRhdGEgdG8gcmVuZGVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIGluIHBpeGVscyBvZiBlYWNoIGNlbGwuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luU2l6ZSBUaGUgbWFyZ2luIHNpemUgaW4gcGl4ZWxzIHRvIGxlYXZlIGFyb3VuZCB0aGUgcXIgY29kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgcmVuZGVyZWQgYXMgYW4gaHRtbCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJIdG1sKGNlbGxEYXRhLCBjZWxsU2l6ZSA9IDEsIG1hcmdpblNpemUgPSAyKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5yZW5kZXJSYXcoY2VsbERhdGEsIGNlbGxTaXplLCBtYXJnaW5TaXplKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHRoaXMuX29wdGlvbnMuY3NzQ2xhc3MpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbm5lci1odG1sXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHJhdy5yZXBsYWNlKC9cXHIvZywgXCJcIikucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIikucmVwbGFjZSgvIC9nLCBcIiZuYnNwO1wiKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEZKbGJtUmxjbVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0psYm1SbGNsUjVjR1Z6TDNSbGVIUlNaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2EwWkJRU3RGTzBGQlF5OUZMRzlHUVVGcFJqdEJRVXRxUmpzN1IwRkZSenRCUVVOSUxFMUJRV0VzV1VGQldUdEpRVWx5UWpzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEU5QlFUWkNPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUMEZCVHl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNN1VVRkRjRVFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRPMUZCUTNSRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEpRVUZKTEZOQlFWTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeERRVUZETzFGQlEzSkdMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVMEZET1VRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSRFFVRTBReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEZEVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3JRMEZCSzBNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVVkVMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5rTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha01zU1VGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFRRVU0zUlR0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzUkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFpRVU53UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRla01zU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEyaENMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03YVVKQlEycEVPM0ZDUVVGTk8yOUNRVU5JTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2FVSkJRMnhFTzJGQlEwbzdXVUZEUkN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xbEJRMnBFTEVsQlFVa3NTVUZCU1N4TlFVRk5MRU5CUVVNN1dVRkZaaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXZRaXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETzJGQlEyaENPMU5CUTBvN1VVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEycERMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkROMFU3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGdlFpeEZRVUZGTEZkQlFXMUNMRU5CUVVNc1JVRkJSU3hoUVVGeFFpeERRVUZETzFGQlEzUkdMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJXcEZMRTFCUVUwc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTXhReXg1UTBGQmVVTTdVVUZEZWtNc1IwRkJSeXhEUVVGRExGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRka1lzVDBGQlR5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPME5CUTBvN1FVRTNSVVFzYjBOQk5rVkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT3B0aW9ucyBmb3IgVGV4dCByZW5kZXJlci5cclxuICovXHJcbmNsYXNzIFRleHRSZW5kZXJlck9wdGlvbnMge1xyXG59XHJcbmV4cG9ydHMuVGV4dFJlbmRlcmVyT3B0aW9ucyA9IFRleHRSZW5kZXJlck9wdGlvbnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkRkpsYm1SbGNtVnlUM0IwYVc5dWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5eVpXNWtaWEpVZVhCbGN5OTBaWGgwVW1WdVpHVnlaWEpQY0hScGIyNXpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc2JVSkJRVzFDTzBOQllTOUNPMEZCWWtRc2EwUkJZVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIHpsaWJfZGVmbGF0ZSA9IHJlcXVpcmUoJy4vemxpYi9kZWZsYXRlJyk7XG52YXIgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi91dGlscy9jb21tb24nKTtcbnZhciBzdHJpbmdzICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL3N0cmluZ3MnKTtcbnZhciBtc2cgICAgICAgICAgPSByZXF1aXJlKCcuL3psaWIvbWVzc2FnZXMnKTtcbnZhciBaU3RyZWFtICAgICAgPSByZXF1aXJlKCcuL3psaWIvenN0cmVhbScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxudmFyIFpfTk9fRkxVU0ggICAgICA9IDA7XG52YXIgWl9GSU5JU0ggICAgICAgID0gNDtcblxudmFyIFpfT0sgICAgICAgICAgICA9IDA7XG52YXIgWl9TVFJFQU1fRU5EICAgID0gMTtcbnZhciBaX1NZTkNfRkxVU0ggICAgPSAyO1xuXG52YXIgWl9ERUZBVUxUX0NPTVBSRVNTSU9OID0gLTE7XG5cbnZhciBaX0RFRkFVTFRfU1RSQVRFR1kgICAgPSAwO1xuXG52YXIgWl9ERUZMQVRFRCAgPSA4O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8qKlxuICogY2xhc3MgRGVmbGF0ZVxuICpcbiAqIEdlbmVyaWMgSlMtc3R5bGUgd3JhcHBlciBmb3IgemxpYiBjYWxscy4gSWYgeW91IGRvbid0IG5lZWRcbiAqIHN0cmVhbWluZyBiZWhhdmlvdXIgLSB1c2UgbW9yZSBzaW1wbGUgZnVuY3Rpb25zOiBbW2RlZmxhdGVdXSxcbiAqIFtbZGVmbGF0ZVJhd11dIGFuZCBbW2d6aXBdXS5cbiAqKi9cblxuLyogaW50ZXJuYWxcbiAqIERlZmxhdGUuY2h1bmtzIC0+IEFycmF5XG4gKlxuICogQ2h1bmtzIG9mIG91dHB1dCBkYXRhLCBpZiBbW0RlZmxhdGUjb25EYXRhXV0gbm90IG92ZXJyaWRkZW4uXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5yZXN1bHQgLT4gVWludDhBcnJheXxBcnJheVxuICpcbiAqIENvbXByZXNzZWQgcmVzdWx0LCBnZW5lcmF0ZWQgYnkgZGVmYXVsdCBbW0RlZmxhdGUjb25EYXRhXV1cbiAqIGFuZCBbW0RlZmxhdGUjb25FbmRdXSBoYW5kbGVycy4gRmlsbGVkIGFmdGVyIHlvdSBwdXNoIGxhc3QgY2h1bmtcbiAqIChjYWxsIFtbRGVmbGF0ZSNwdXNoXV0gd2l0aCBgWl9GSU5JU0hgIC8gYHRydWVgIHBhcmFtKSAgb3IgaWYgeW91XG4gKiBwdXNoIGEgY2h1bmsgd2l0aCBleHBsaWNpdCBmbHVzaCAoY2FsbCBbW0RlZmxhdGUjcHVzaF1dIHdpdGhcbiAqIGBaX1NZTkNfRkxVU0hgIHBhcmFtKS5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLmVyciAtPiBOdW1iZXJcbiAqXG4gKiBFcnJvciBjb2RlIGFmdGVyIGRlZmxhdGUgZmluaXNoZWQuIDAgKFpfT0spIG9uIHN1Y2Nlc3MuXG4gKiBZb3Ugd2lsbCBub3QgbmVlZCBpdCBpbiByZWFsIGxpZmUsIGJlY2F1c2UgZGVmbGF0ZSBlcnJvcnNcbiAqIGFyZSBwb3NzaWJsZSBvbmx5IG9uIHdyb25nIG9wdGlvbnMgb3IgYmFkIGBvbkRhdGFgIC8gYG9uRW5kYFxuICogY3VzdG9tIGhhbmRsZXJzLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUubXNnIC0+IFN0cmluZ1xuICpcbiAqIEVycm9yIG1lc3NhZ2UsIGlmIFtbRGVmbGF0ZS5lcnJdXSAhPSAwXG4gKiovXG5cblxuLyoqXG4gKiBuZXcgRGVmbGF0ZShvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDcmVhdGVzIG5ldyBkZWZsYXRvciBpbnN0YW5jZSB3aXRoIHNwZWNpZmllZCBwYXJhbXMuIFRocm93cyBleGNlcHRpb25cbiAqIG9uIGJhZCBwYXJhbXMuIFN1cHBvcnRlZCBvcHRpb25zOlxuICpcbiAqIC0gYGxldmVsYFxuICogLSBgd2luZG93Qml0c2BcbiAqIC0gYG1lbUxldmVsYFxuICogLSBgc3RyYXRlZ3lgXG4gKiAtIGBkaWN0aW9uYXJ5YFxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucywgZm9yIGludGVybmFsIG5lZWRzOlxuICpcbiAqIC0gYGNodW5rU2l6ZWAgLSBzaXplIG9mIGdlbmVyYXRlZCBkYXRhIGNodW5rcyAoMTZLIGJ5IGRlZmF1bHQpXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIGRvIHJhdyBkZWZsYXRlXG4gKiAtIGBnemlwYCAoQm9vbGVhbikgLSBjcmVhdGUgZ3ppcCB3cmFwcGVyXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBcImJpbmFyeSBzdHJpbmdcIlxuICogICAgKGVhY2ggY2hhciBjb2RlIFswLi4yNTVdKVxuICogLSBgaGVhZGVyYCAoT2JqZWN0KSAtIGN1c3RvbSBoZWFkZXIgZm9yIGd6aXBcbiAqICAgLSBgdGV4dGAgKEJvb2xlYW4pIC0gdHJ1ZSBpZiBjb21wcmVzc2VkIGRhdGEgYmVsaWV2ZWQgdG8gYmUgdGV4dFxuICogICAtIGB0aW1lYCAoTnVtYmVyKSAtIG1vZGlmaWNhdGlvbiB0aW1lLCB1bml4IHRpbWVzdGFtcFxuICogICAtIGBvc2AgKE51bWJlcikgLSBvcGVyYXRpb24gc3lzdGVtIGNvZGVcbiAqICAgLSBgZXh0cmFgIChBcnJheSkgLSBhcnJheSBvZiBieXRlcyB3aXRoIGV4dHJhIGRhdGEgKG1heCA2NTUzNilcbiAqICAgLSBgbmFtZWAgKFN0cmluZykgLSBmaWxlIG5hbWUgKGJpbmFyeSBzdHJpbmcpXG4gKiAgIC0gYGNvbW1lbnRgIChTdHJpbmcpIC0gY29tbWVudCAoYmluYXJ5IHN0cmluZylcbiAqICAgLSBgaGNyY2AgKEJvb2xlYW4pIC0gdHJ1ZSBpZiBoZWFkZXIgY3JjIHNob3VsZCBiZSBhZGRlZFxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBjaHVuazEgPSBVaW50OEFycmF5KFsxLDIsMyw0LDUsNiw3LDgsOV0pXG4gKiAgICwgY2h1bmsyID0gVWludDhBcnJheShbMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTldKTtcbiAqXG4gKiB2YXIgZGVmbGF0ZSA9IG5ldyBwYWtvLkRlZmxhdGUoeyBsZXZlbDogM30pO1xuICpcbiAqIGRlZmxhdGUucHVzaChjaHVuazEsIGZhbHNlKTtcbiAqIGRlZmxhdGUucHVzaChjaHVuazIsIHRydWUpOyAgLy8gdHJ1ZSAtPiBsYXN0IGNodW5rXG4gKlxuICogaWYgKGRlZmxhdGUuZXJyKSB7IHRocm93IG5ldyBFcnJvcihkZWZsYXRlLmVycik7IH1cbiAqXG4gKiBjb25zb2xlLmxvZyhkZWZsYXRlLnJlc3VsdCk7XG4gKiBgYGBcbiAqKi9cbmZ1bmN0aW9uIERlZmxhdGUob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRGVmbGF0ZSkpIHJldHVybiBuZXcgRGVmbGF0ZShvcHRpb25zKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5hc3NpZ24oe1xuICAgIGxldmVsOiBaX0RFRkFVTFRfQ09NUFJFU1NJT04sXG4gICAgbWV0aG9kOiBaX0RFRkxBVEVELFxuICAgIGNodW5rU2l6ZTogMTYzODQsXG4gICAgd2luZG93Qml0czogMTUsXG4gICAgbWVtTGV2ZWw6IDgsXG4gICAgc3RyYXRlZ3k6IFpfREVGQVVMVF9TVFJBVEVHWSxcbiAgICB0bzogJydcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIG9wdCA9IHRoaXMub3B0aW9ucztcblxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPiAwKSkge1xuICAgIG9wdC53aW5kb3dCaXRzID0gLW9wdC53aW5kb3dCaXRzO1xuICB9XG5cbiAgZWxzZSBpZiAob3B0Lmd6aXAgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMTY7XG4gIH1cblxuICB0aGlzLmVyciAgICA9IDA7ICAgICAgLy8gZXJyb3IgY29kZSwgaWYgaGFwcGVucyAoMCA9IFpfT0spXG4gIHRoaXMubXNnICAgID0gJyc7ICAgICAvLyBlcnJvciBtZXNzYWdlXG4gIHRoaXMuZW5kZWQgID0gZmFsc2U7ICAvLyB1c2VkIHRvIGF2b2lkIG11bHRpcGxlIG9uRW5kKCkgY2FsbHNcbiAgdGhpcy5jaHVua3MgPSBbXTsgICAgIC8vIGNodW5rcyBvZiBjb21wcmVzc2VkIGRhdGFcblxuICB0aGlzLnN0cm0gPSBuZXcgWlN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICB2YXIgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVJbml0MihcbiAgICB0aGlzLnN0cm0sXG4gICAgb3B0LmxldmVsLFxuICAgIG9wdC5tZXRob2QsXG4gICAgb3B0LndpbmRvd0JpdHMsXG4gICAgb3B0Lm1lbUxldmVsLFxuICAgIG9wdC5zdHJhdGVneVxuICApO1xuXG4gIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnW3N0YXR1c10pO1xuICB9XG5cbiAgaWYgKG9wdC5oZWFkZXIpIHtcbiAgICB6bGliX2RlZmxhdGUuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sIG9wdC5oZWFkZXIpO1xuICB9XG5cbiAgaWYgKG9wdC5kaWN0aW9uYXJ5KSB7XG4gICAgdmFyIGRpY3Q7XG4gICAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2Ygb3B0LmRpY3Rpb25hcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgICAgZGljdCA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKG9wdC5kaWN0aW9uYXJ5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgZGljdCA9IG5ldyBVaW50OEFycmF5KG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGljdCA9IG9wdC5kaWN0aW9uYXJ5O1xuICAgIH1cblxuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIGRpY3QpO1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWN0X3NldCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZsYXRlI3B1c2goZGF0YVssIG1vZGVdKSAtPiBCb29sZWFuXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8QXJyYXlCdWZmZXJ8U3RyaW5nKTogaW5wdXQgZGF0YS4gU3RyaW5ncyB3aWxsIGJlXG4gKiAgIGNvbnZlcnRlZCB0byB1dGY4IGJ5dGUgc2VxdWVuY2UuXG4gKiAtIG1vZGUgKE51bWJlcnxCb29sZWFuKTogMC4uNiBmb3IgY29ycmVzcG9uZGluZyBaX05PX0ZMVVNILi5aX1RSRUUgbW9kZXMuXG4gKiAgIFNlZSBjb25zdGFudHMuIFNraXBwZWQgb3IgYGZhbHNlYCBtZWFucyBaX05PX0ZMVVNILCBgdHJ1ZWAgbWVhbnMgWl9GSU5JU0guXG4gKlxuICogU2VuZHMgaW5wdXQgZGF0YSB0byBkZWZsYXRlIHBpcGUsIGdlbmVyYXRpbmcgW1tEZWZsYXRlI29uRGF0YV1dIGNhbGxzIHdpdGhcbiAqIG5ldyBjb21wcmVzc2VkIGNodW5rcy4gUmV0dXJucyBgdHJ1ZWAgb24gc3VjY2Vzcy4gVGhlIGxhc3QgZGF0YSBibG9jayBtdXN0IGhhdmVcbiAqIG1vZGUgWl9GSU5JU0ggKG9yIGB0cnVlYCkuIFRoYXQgd2lsbCBmbHVzaCBpbnRlcm5hbCBwZW5kaW5nIGJ1ZmZlcnMgYW5kIGNhbGxcbiAqIFtbRGVmbGF0ZSNvbkVuZF1dLiBGb3IgaW50ZXJpbSBleHBsaWNpdCBmbHVzaGVzICh3aXRob3V0IGVuZGluZyB0aGUgc3RyZWFtKSB5b3VcbiAqIGNhbiB1c2UgbW9kZSBaX1NZTkNfRkxVU0gsIGtlZXBpbmcgdGhlIGNvbXByZXNzaW9uIGNvbnRleHQuXG4gKlxuICogT24gZmFpbCBjYWxsIFtbRGVmbGF0ZSNvbkVuZF1dIHdpdGggZXJyb3IgY29kZSBhbmQgcmV0dXJuIGZhbHNlLlxuICpcbiAqIFdlIHN0cm9uZ2x5IHJlY29tbWVuZCB0byB1c2UgYFVpbnQ4QXJyYXlgIG9uIGlucHV0IGZvciBiZXN0IHNwZWVkIChvdXRwdXRcbiAqIGFycmF5IGZvcm1hdCBpcyBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5KS4gQWxzbywgZG9uJ3Qgc2tpcCBsYXN0IHBhcmFtIGFuZCBhbHdheXNcbiAqIHVzZSB0aGUgc2FtZSB0eXBlIGluIHlvdXIgY29kZSAoYm9vbGVhbiBvciBudW1iZXIpLiBUaGF0IHdpbGwgaW1wcm92ZSBKUyBzcGVlZC5cbiAqXG4gKiBGb3IgcmVndWxhciBgQXJyYXlgLXMgbWFrZSBzdXJlIGFsbCBlbGVtZW50cyBhcmUgWzAuLjI1NV0uXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHB1c2goY2h1bmssIGZhbHNlKTsgLy8gcHVzaCBvbmUgb2YgZGF0YSBjaHVua3NcbiAqIC4uLlxuICogcHVzaChjaHVuaywgdHJ1ZSk7ICAvLyBwdXNoIGxhc3QgY2h1bmtcbiAqIGBgYFxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBtb2RlKSB7XG4gIHZhciBzdHJtID0gdGhpcy5zdHJtO1xuICB2YXIgY2h1bmtTaXplID0gdGhpcy5vcHRpb25zLmNodW5rU2l6ZTtcbiAgdmFyIHN0YXR1cywgX21vZGU7XG5cbiAgaWYgKHRoaXMuZW5kZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgX21vZGUgPSAobW9kZSA9PT0gfn5tb2RlKSA/IG1vZGUgOiAoKG1vZGUgPT09IHRydWUpID8gWl9GSU5JU0ggOiBaX05PX0ZMVVNIKTtcblxuICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgIHN0cm0uaW5wdXQgPSBzdHJpbmdzLnN0cmluZzJidWYoZGF0YSk7XG4gIH0gZWxzZSBpZiAodG9TdHJpbmcuY2FsbChkYXRhKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgIHN0cm0uaW5wdXQgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJtLmlucHV0ID0gZGF0YTtcbiAgfVxuXG4gIHN0cm0ubmV4dF9pbiA9IDA7XG4gIHN0cm0uYXZhaWxfaW4gPSBzdHJtLmlucHV0Lmxlbmd0aDtcblxuICBkbyB7XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICBzdHJtLm91dHB1dCA9IG5ldyB1dGlscy5CdWY4KGNodW5rU2l6ZSk7XG4gICAgICBzdHJtLm5leHRfb3V0ID0gMDtcbiAgICAgIHN0cm0uYXZhaWxfb3V0ID0gY2h1bmtTaXplO1xuICAgIH1cbiAgICBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZShzdHJtLCBfbW9kZSk7ICAgIC8qIG5vIGJhZCByZXR1cm4gdmFsdWUgKi9cblxuICAgIGlmIChzdGF0dXMgIT09IFpfU1RSRUFNX0VORCAmJiBzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgIHRoaXMub25FbmQoc3RhdHVzKTtcbiAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDAgfHwgKHN0cm0uYXZhaWxfaW4gPT09IDAgJiYgKF9tb2RlID09PSBaX0ZJTklTSCB8fCBfbW9kZSA9PT0gWl9TWU5DX0ZMVVNIKSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMub25EYXRhKHN0cmluZ3MuYnVmMmJpbnN0cmluZyh1dGlscy5zaHJpbmtCdWYoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uRGF0YSh1dGlscy5zaHJpbmtCdWYoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKChzdHJtLmF2YWlsX2luID4gMCB8fCBzdHJtLmF2YWlsX291dCA9PT0gMCkgJiYgc3RhdHVzICE9PSBaX1NUUkVBTV9FTkQpO1xuXG4gIC8vIEZpbmFsaXplIG9uIHRoZSBsYXN0IGNodW5rLlxuICBpZiAoX21vZGUgPT09IFpfRklOSVNIKSB7XG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVFbmQodGhpcy5zdHJtKTtcbiAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gWl9PSztcbiAgfVxuXG4gIC8vIGNhbGxiYWNrIGludGVyaW0gcmVzdWx0cyBpZiBaX1NZTkNfRkxVU0guXG4gIGlmIChfbW9kZSA9PT0gWl9TWU5DX0ZMVVNIKSB7XG4gICAgdGhpcy5vbkVuZChaX09LKTtcbiAgICBzdHJtLmF2YWlsX291dCA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRGF0YShjaHVuaykgLT4gVm9pZFxuICogLSBjaHVuayAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBvdXRwdXQgZGF0YS4gVHlwZSBvZiBhcnJheSBkZXBlbmRzXG4gKiAgIG9uIGpzIGVuZ2luZSBzdXBwb3J0LiBXaGVuIHN0cmluZyBvdXRwdXQgcmVxdWVzdGVkLCBlYWNoIGNodW5rXG4gKiAgIHdpbGwgYmUgc3RyaW5nLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHN0b3JlcyBkYXRhIGJsb2NrcyBpbiBgY2h1bmtzW11gIHByb3BlcnR5IGFuZCBnbHVlXG4gKiB0aG9zZSBpbiBgb25FbmRgLiBPdmVycmlkZSB0aGlzIGhhbmRsZXIsIGlmIHlvdSBuZWVkIGFub3RoZXIgYmVoYXZpb3VyLlxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHRoaXMuY2h1bmtzLnB1c2goY2h1bmspO1xufTtcblxuXG4vKipcbiAqIERlZmxhdGUjb25FbmQoc3RhdHVzKSAtPiBWb2lkXG4gKiAtIHN0YXR1cyAoTnVtYmVyKTogZGVmbGF0ZSBzdGF0dXMuIDAgKFpfT0spIG9uIHN1Y2Nlc3MsXG4gKiAgIG90aGVyIGlmIG5vdC5cbiAqXG4gKiBDYWxsZWQgb25jZSBhZnRlciB5b3UgdGVsbCBkZWZsYXRlIHRoYXQgdGhlIGlucHV0IHN0cmVhbSBpc1xuICogY29tcGxldGUgKFpfRklOSVNIKSBvciBzaG91bGQgYmUgZmx1c2hlZCAoWl9TWU5DX0ZMVVNIKVxuICogb3IgaWYgYW4gZXJyb3IgaGFwcGVuZWQuIEJ5IGRlZmF1bHQgLSBqb2luIGNvbGxlY3RlZCBjaHVua3MsXG4gKiBmcmVlIG1lbW9yeSBhbmQgZmlsbCBgcmVzdWx0c2AgLyBgZXJyYCBwcm9wZXJ0aWVzLlxuICoqL1xuRGVmbGF0ZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIC8vIE9uIHN1Y2Nlc3MgLSBqb2luXG4gIGlmIChzdGF0dXMgPT09IFpfT0spIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmNodW5rcy5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN1bHQgPSB1dGlscy5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5jaHVua3MgPSBbXTtcbiAgdGhpcy5lcnIgPSBzdGF0dXM7XG4gIHRoaXMubXNnID0gdGhpcy5zdHJtLm1zZztcbn07XG5cblxuLyoqXG4gKiBkZWZsYXRlKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDb21wcmVzcyBgZGF0YWAgd2l0aCBkZWZsYXRlIGFsZ29yaXRobSBhbmQgYG9wdGlvbnNgLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIGxldmVsXG4gKiAtIHdpbmRvd0JpdHNcbiAqIC0gbWVtTGV2ZWxcbiAqIC0gc3RyYXRlZ3lcbiAqIC0gZGljdGlvbmFyeVxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIFN1Z2FyIChvcHRpb25zKTpcbiAqXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIHNheSB0aGF0IHdlIHdvcmsgd2l0aCByYXcgc3RyZWFtLCBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzcGVjaWZ5XG4gKiAgIG5lZ2F0aXZlIHdpbmRvd0JpdHMgaW1wbGljaXRseS5cbiAqIC0gYHRvYCAoU3RyaW5nKSAtIGlmIGVxdWFsIHRvICdzdHJpbmcnLCB0aGVuIHJlc3VsdCB3aWxsIGJlIFwiYmluYXJ5IHN0cmluZ1wiXG4gKiAgICAoZWFjaCBjaGFyIGNvZGUgWzAuLjI1NV0pXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgcGFrbyA9IHJlcXVpcmUoJ3Bha28nKVxuICogICAsIGRhdGEgPSBVaW50OEFycmF5KFsxLDIsMyw0LDUsNiw3LDgsOV0pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBha28uZGVmbGF0ZShkYXRhKSk7XG4gKiBgYGBcbiAqKi9cbmZ1bmN0aW9uIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRlZmxhdG9yID0gbmV3IERlZmxhdGUob3B0aW9ucyk7XG5cbiAgZGVmbGF0b3IucHVzaChpbnB1dCwgdHJ1ZSk7XG5cbiAgLy8gVGhhdCB3aWxsIG5ldmVyIGhhcHBlbnMsIGlmIHlvdSBkb24ndCBjaGVhdCB3aXRoIG9wdGlvbnMgOilcbiAgaWYgKGRlZmxhdG9yLmVycikgeyB0aHJvdyBkZWZsYXRvci5tc2cgfHwgbXNnW2RlZmxhdG9yLmVycl07IH1cblxuICByZXR1cm4gZGVmbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogZGVmbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tkZWZsYXRlXV0sIGJ1dCBjcmVhdGVzIHJhdyBkYXRhLCB3aXRob3V0IHdyYXBwZXJcbiAqIChoZWFkZXIgYW5kIGFkbGVyMzIgY3JjKS5cbiAqKi9cbmZ1bmN0aW9uIGRlZmxhdGVSYXcoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMucmF3ID0gdHJ1ZTtcbiAgcmV0dXJuIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbi8qKlxuICogZ3ppcChkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tkZWZsYXRlXV0sIGJ1dCBjcmVhdGUgZ3ppcCB3cmFwcGVyIGluc3RlYWQgb2ZcbiAqIGRlZmxhdGUgb25lLlxuICoqL1xuZnVuY3Rpb24gZ3ppcChpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5nemlwID0gdHJ1ZTtcbiAgcmV0dXJuIGRlZmxhdGUoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbmV4cG9ydHMuRGVmbGF0ZSA9IERlZmxhdGU7XG5leHBvcnRzLmRlZmxhdGUgPSBkZWZsYXRlO1xuZXhwb3J0cy5kZWZsYXRlUmF3ID0gZGVmbGF0ZVJhdztcbmV4cG9ydHMuZ3ppcCA9IGd6aXA7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIFRZUEVEX09LID0gICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBVaW50MTZBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbmZ1bmN0aW9uIF9oYXMob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydHMuYXNzaWduID0gZnVuY3Rpb24gKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIHZhciBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgd2hpbGUgKHNvdXJjZXMubGVuZ3RoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICBpZiAoIXNvdXJjZSkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG5vbi1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwIGluIHNvdXJjZSkge1xuICAgICAgaWYgKF9oYXMoc291cmNlLCBwKSkge1xuICAgICAgICBvYmpbcF0gPSBzb3VyY2VbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8gcmVkdWNlIGJ1ZmZlciBzaXplLCBhdm9pZGluZyBtZW0gY29weVxuZXhwb3J0cy5zaHJpbmtCdWYgPSBmdW5jdGlvbiAoYnVmLCBzaXplKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBzaXplKSB7IHJldHVybiBidWY7IH1cbiAgaWYgKGJ1Zi5zdWJhcnJheSkgeyByZXR1cm4gYnVmLnN1YmFycmF5KDAsIHNpemUpOyB9XG4gIGJ1Zi5sZW5ndGggPSBzaXplO1xuICByZXR1cm4gYnVmO1xufTtcblxuXG52YXIgZm5UeXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGlmIChzcmMuc3ViYXJyYXkgJiYgZGVzdC5zdWJhcnJheSkge1xuICAgICAgZGVzdC5zZXQoc3JjLnN1YmFycmF5KHNyY19vZmZzLCBzcmNfb2ZmcyArIGxlbiksIGRlc3Rfb2Zmcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZhbGxiYWNrIHRvIG9yZGluYXJ5IGFycmF5XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdFtkZXN0X29mZnMgKyBpXSA9IHNyY1tzcmNfb2ZmcyArIGldO1xuICAgIH1cbiAgfSxcbiAgLy8gSm9pbiBhcnJheSBvZiBjaHVua3MgdG8gc2luZ2xlIGFycmF5LlxuICBmbGF0dGVuQ2h1bmtzOiBmdW5jdGlvbiAoY2h1bmtzKSB7XG4gICAgdmFyIGksIGwsIGxlbiwgcG9zLCBjaHVuaywgcmVzdWx0O1xuXG4gICAgLy8gY2FsY3VsYXRlIGRhdGEgbGVuZ3RoXG4gICAgbGVuID0gMDtcbiAgICBmb3IgKGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGVuICs9IGNodW5rc1tpXS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gam9pbiBjaHVua3NcbiAgICByZXN1bHQgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIHBvcyA9IDA7XG4gICAgZm9yIChpID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNodW5rID0gY2h1bmtzW2ldO1xuICAgICAgcmVzdWx0LnNldChjaHVuaywgcG9zKTtcbiAgICAgIHBvcyArPSBjaHVuay5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxudmFyIGZuVW50eXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RbZGVzdF9vZmZzICsgaV0gPSBzcmNbc3JjX29mZnMgKyBpXTtcbiAgICB9XG4gIH0sXG4gIC8vIEpvaW4gYXJyYXkgb2YgY2h1bmtzIHRvIHNpbmdsZSBhcnJheS5cbiAgZmxhdHRlbkNodW5rczogZnVuY3Rpb24gKGNodW5rcykge1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIGNodW5rcyk7XG4gIH1cbn07XG5cblxuLy8gRW5hYmxlL0Rpc2FibGUgdHlwZWQgYXJyYXlzIHVzZSwgZm9yIHRlc3Rpbmdcbi8vXG5leHBvcnRzLnNldFR5cGVkID0gZnVuY3Rpb24gKG9uKSB7XG4gIGlmIChvbikge1xuICAgIGV4cG9ydHMuQnVmOCAgPSBVaW50OEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMTYgPSBVaW50MTZBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjMyID0gSW50MzJBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblR5cGVkKTtcbiAgfSBlbHNlIHtcbiAgICBleHBvcnRzLkJ1ZjggID0gQXJyYXk7XG4gICAgZXhwb3J0cy5CdWYxNiA9IEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMzIgPSBBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblVudHlwZWQpO1xuICB9XG59O1xuXG5leHBvcnRzLnNldFR5cGVkKFRZUEVEX09LKTtcbiIsIi8vIFN0cmluZyBlbmNvZGUvZGVjb2RlIGhlbHBlcnNcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuXG5cbi8vIFF1aWNrIGNoZWNrIGlmIHdlIGNhbiB1c2UgZmFzdCBhcnJheSB0byBiaW4gc3RyaW5nIGNvbnZlcnNpb25cbi8vXG4vLyAtIGFwcGx5KEFycmF5KSBjYW4gZmFpbCBvbiBBbmRyb2lkIDIuMlxuLy8gLSBhcHBseShVaW50OEFycmF5KSBjYW4gZmFpbCBvbiBpT1MgNS4xIFNhZmFyaVxuLy9cbnZhciBTVFJfQVBQTFlfT0sgPSB0cnVlO1xudmFyIFNUUl9BUFBMWV9VSUFfT0sgPSB0cnVlO1xuXG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIFsgMCBdKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX09LID0gZmFsc2U7IH1cbnRyeSB7IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoMSkpOyB9IGNhdGNoIChfXykgeyBTVFJfQVBQTFlfVUlBX09LID0gZmFsc2U7IH1cblxuXG4vLyBUYWJsZSB3aXRoIHV0ZjggbGVuZ3RocyAoY2FsY3VsYXRlZCBieSBmaXJzdCBieXRlIG9mIHNlcXVlbmNlKVxuLy8gTm90ZSwgdGhhdCA1ICYgNi1ieXRlIHZhbHVlcyBhbmQgc29tZSA0LWJ5dGUgdmFsdWVzIGNhbiBub3QgYmUgcmVwcmVzZW50ZWQgaW4gSlMsXG4vLyBiZWNhdXNlIG1heCBwb3NzaWJsZSBjb2RlcG9pbnQgaXMgMHgxMGZmZmZcbnZhciBfdXRmOGxlbiA9IG5ldyB1dGlscy5CdWY4KDI1Nik7XG5mb3IgKHZhciBxID0gMDsgcSA8IDI1NjsgcSsrKSB7XG4gIF91dGY4bGVuW3FdID0gKHEgPj0gMjUyID8gNiA6IHEgPj0gMjQ4ID8gNSA6IHEgPj0gMjQwID8gNCA6IHEgPj0gMjI0ID8gMyA6IHEgPj0gMTkyID8gMiA6IDEpO1xufVxuX3V0ZjhsZW5bMjU0XSA9IF91dGY4bGVuWzI1NF0gPSAxOyAvLyBJbnZhbGlkIHNlcXVlbmNlIHN0YXJ0XG5cblxuLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXkgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxuZXhwb3J0cy5zdHJpbmcyYnVmID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYnVmLCBjLCBjMiwgbV9wb3MsIGksIHN0cl9sZW4gPSBzdHIubGVuZ3RoLCBidWZfbGVuID0gMDtcblxuICAvLyBjb3VudCBiaW5hcnkgc2l6ZVxuICBmb3IgKG1fcG9zID0gMDsgbV9wb3MgPCBzdHJfbGVuOyBtX3BvcysrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zKTtcbiAgICBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKG1fcG9zICsgMSA8IHN0cl9sZW4pKSB7XG4gICAgICBjMiA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zICsgMSk7XG4gICAgICBpZiAoKGMyICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKChjIC0gMHhkODAwKSA8PCAxMCkgKyAoYzIgLSAweGRjMDApO1xuICAgICAgICBtX3BvcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBidWZfbGVuICs9IGMgPCAweDgwID8gMSA6IGMgPCAweDgwMCA/IDIgOiBjIDwgMHgxMDAwMCA/IDMgOiA0O1xuICB9XG5cbiAgLy8gYWxsb2NhdGUgYnVmZmVyXG4gIGJ1ZiA9IG5ldyB1dGlscy5CdWY4KGJ1Zl9sZW4pO1xuXG4gIC8vIGNvbnZlcnRcbiAgZm9yIChpID0gMCwgbV9wb3MgPSAwOyBpIDwgYnVmX2xlbjsgbV9wb3MrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChtX3Bvcyk7XG4gICAgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChtX3BvcyArIDEgPCBzdHJfbGVuKSkge1xuICAgICAgYzIgPSBzdHIuY2hhckNvZGVBdChtX3BvcyArIDEpO1xuICAgICAgaWYgKChjMiAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjID0gMHgxMDAwMCArICgoYyAtIDB4ZDgwMCkgPDwgMTApICsgKGMyIC0gMHhkYzAwKTtcbiAgICAgICAgbV9wb3MrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAvKiBvbmUgYnl0ZSAqL1xuICAgICAgYnVmW2krK10gPSBjO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAvKiB0d28gYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhDMCB8IChjID4+PiA2KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfSBlbHNlIGlmIChjIDwgMHgxMDAwMCkge1xuICAgICAgLyogdGhyZWUgYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhFMCB8IChjID4+PiAxMik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gNiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogZm91ciBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweGYwIHwgKGMgPj4+IDE4KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiAxMiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDYgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn07XG5cbi8vIEhlbHBlciAodXNlZCBpbiAyIHBsYWNlcylcbmZ1bmN0aW9uIGJ1ZjJiaW5zdHJpbmcoYnVmLCBsZW4pIHtcbiAgLy8gT24gQ2hyb21lLCB0aGUgYXJndW1lbnRzIGluIGEgZnVuY3Rpb24gY2FsbCB0aGF0IGFyZSBhbGxvd2VkIGlzIGA2NTUzNGAuXG4gIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIGJ1ZmZlciBpcyBzbWFsbGVyIHRoYW4gdGhhdCwgd2UgY2FuIHVzZSB0aGlzIG9wdGltaXphdGlvbixcbiAgLy8gb3RoZXJ3aXNlIHdlIHdpbGwgdGFrZSBhIHNsb3dlciBwYXRoLlxuICBpZiAobGVuIDwgNjU1MzQpIHtcbiAgICBpZiAoKGJ1Zi5zdWJhcnJheSAmJiBTVFJfQVBQTFlfVUlBX09LKSB8fCAoIWJ1Zi5zdWJhcnJheSAmJiBTVFJfQVBQTFlfT0spKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB1dGlscy5zaHJpbmtCdWYoYnVmLCBsZW4pKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLy8gQ29udmVydCBieXRlIGFycmF5IHRvIGJpbmFyeSBzdHJpbmdcbmV4cG9ydHMuYnVmMmJpbnN0cmluZyA9IGZ1bmN0aW9uIChidWYpIHtcbiAgcmV0dXJuIGJ1ZjJiaW5zdHJpbmcoYnVmLCBidWYubGVuZ3RoKTtcbn07XG5cblxuLy8gQ29udmVydCBiaW5hcnkgc3RyaW5nICh0eXBlZCwgd2hlbiBwb3NzaWJsZSlcbmV4cG9ydHMuYmluc3RyaW5nMmJ1ZiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGJ1ZiA9IG5ldyB1dGlscy5CdWY4KHN0ci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnVmW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn07XG5cblxuLy8gY29udmVydCBhcnJheSB0byBzdHJpbmdcbmV4cG9ydHMuYnVmMnN0cmluZyA9IGZ1bmN0aW9uIChidWYsIG1heCkge1xuICB2YXIgaSwgb3V0LCBjLCBjX2xlbjtcbiAgdmFyIGxlbiA9IG1heCB8fCBidWYubGVuZ3RoO1xuXG4gIC8vIFJlc2VydmUgbWF4IHBvc3NpYmxlIGxlbmd0aCAoMiB3b3JkcyBwZXIgY2hhcilcbiAgLy8gTkI6IGJ5IHVua25vd24gcmVhc29ucywgQXJyYXkgaXMgc2lnbmlmaWNhbnRseSBmYXN0ZXIgZm9yXG4gIC8vICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5IHRoYW4gVWludDE2QXJyYXkuXG4gIHZhciB1dGYxNmJ1ZiA9IG5ldyBBcnJheShsZW4gKiAyKTtcblxuICBmb3IgKG91dCA9IDAsIGkgPSAwOyBpIDwgbGVuOykge1xuICAgIGMgPSBidWZbaSsrXTtcbiAgICAvLyBxdWljayBwcm9jZXNzIGFzY2lpXG4gICAgaWYgKGMgPCAweDgwKSB7IHV0ZjE2YnVmW291dCsrXSA9IGM7IGNvbnRpbnVlOyB9XG5cbiAgICBjX2xlbiA9IF91dGY4bGVuW2NdO1xuICAgIC8vIHNraXAgNSAmIDYgYnl0ZSBjb2Rlc1xuICAgIGlmIChjX2xlbiA+IDQpIHsgdXRmMTZidWZbb3V0KytdID0gMHhmZmZkOyBpICs9IGNfbGVuIC0gMTsgY29udGludWU7IH1cblxuICAgIC8vIGFwcGx5IG1hc2sgb24gZmlyc3QgYnl0ZVxuICAgIGMgJj0gY19sZW4gPT09IDIgPyAweDFmIDogY19sZW4gPT09IDMgPyAweDBmIDogMHgwNztcbiAgICAvLyBqb2luIHRoZSByZXN0XG4gICAgd2hpbGUgKGNfbGVuID4gMSAmJiBpIDwgbGVuKSB7XG4gICAgICBjID0gKGMgPDwgNikgfCAoYnVmW2krK10gJiAweDNmKTtcbiAgICAgIGNfbGVuLS07XG4gICAgfVxuXG4gICAgLy8gdGVybWluYXRlZCBieSBlbmQgb2Ygc3RyaW5nP1xuICAgIGlmIChjX2xlbiA+IDEpIHsgdXRmMTZidWZbb3V0KytdID0gMHhmZmZkOyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBjIC09IDB4MTAwMDA7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSAweGQ4MDAgfCAoKGMgPj4gMTApICYgMHgzZmYpO1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gMHhkYzAwIHwgKGMgJiAweDNmZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZjJiaW5zdHJpbmcodXRmMTZidWYsIG91dCk7XG59O1xuXG5cbi8vIENhbGN1bGF0ZSBtYXggcG9zc2libGUgcG9zaXRpb24gaW4gdXRmOCBidWZmZXIsXG4vLyB0aGF0IHdpbGwgbm90IGJyZWFrIHNlcXVlbmNlLiBJZiB0aGF0J3Mgbm90IHBvc3NpYmxlXG4vLyAtICh2ZXJ5IHNtYWxsIGxpbWl0cykgcmV0dXJuIG1heCBzaXplIGFzIGlzLlxuLy9cbi8vIGJ1ZltdIC0gdXRmOCBieXRlcyBhcnJheVxuLy8gbWF4ICAgLSBsZW5ndGggbGltaXQgKG1hbmRhdG9yeSk7XG5leHBvcnRzLnV0Zjhib3JkZXIgPSBmdW5jdGlvbiAoYnVmLCBtYXgpIHtcbiAgdmFyIHBvcztcblxuICBtYXggPSBtYXggfHwgYnVmLmxlbmd0aDtcbiAgaWYgKG1heCA+IGJ1Zi5sZW5ndGgpIHsgbWF4ID0gYnVmLmxlbmd0aDsgfVxuXG4gIC8vIGdvIGJhY2sgZnJvbSBsYXN0IHBvc2l0aW9uLCB1bnRpbCBzdGFydCBvZiBzZXF1ZW5jZSBmb3VuZFxuICBwb3MgPSBtYXggLSAxO1xuICB3aGlsZSAocG9zID49IDAgJiYgKGJ1Zltwb3NdICYgMHhDMCkgPT09IDB4ODApIHsgcG9zLS07IH1cblxuICAvLyBWZXJ5IHNtYWxsIGFuZCBicm9rZW4gc2VxdWVuY2UsXG4gIC8vIHJldHVybiBtYXgsIGJlY2F1c2Ugd2Ugc2hvdWxkIHJldHVybiBzb21ldGhpbmcgYW55d2F5LlxuICBpZiAocG9zIDwgMCkgeyByZXR1cm4gbWF4OyB9XG5cbiAgLy8gSWYgd2UgY2FtZSB0byBzdGFydCBvZiBidWZmZXIgLSB0aGF0IG1lYW5zIGJ1ZmZlciBpcyB0b28gc21hbGwsXG4gIC8vIHJldHVybiBtYXggdG9vLlxuICBpZiAocG9zID09PSAwKSB7IHJldHVybiBtYXg7IH1cblxuICByZXR1cm4gKHBvcyArIF91dGY4bGVuW2J1Zltwb3NdXSA+IG1heCkgPyBwb3MgOiBtYXg7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBOb3RlOiBhZGxlcjMyIHRha2VzIDEyJSBmb3IgbGV2ZWwgMCBhbmQgMiUgZm9yIGxldmVsIDYuXG4vLyBJdCBpc24ndCB3b3J0aCBpdCB0byBtYWtlIGFkZGl0aW9uYWwgb3B0aW1pemF0aW9ucyBhcyBpbiBvcmlnaW5hbC5cbi8vIFNtYWxsIHNpemUgaXMgcHJlZmVyYWJsZS5cblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5mdW5jdGlvbiBhZGxlcjMyKGFkbGVyLCBidWYsIGxlbiwgcG9zKSB7XG4gIHZhciBzMSA9IChhZGxlciAmIDB4ZmZmZikgfDAsXG4gICAgICBzMiA9ICgoYWRsZXIgPj4+IDE2KSAmIDB4ZmZmZikgfDAsXG4gICAgICBuID0gMDtcblxuICB3aGlsZSAobGVuICE9PSAwKSB7XG4gICAgLy8gU2V0IGxpbWl0IH4gdHdpY2UgbGVzcyB0aGFuIDU1NTIsIHRvIGtlZXBcbiAgICAvLyBzMiBpbiAzMS1iaXRzLCBiZWNhdXNlIHdlIGZvcmNlIHNpZ25lZCBpbnRzLlxuICAgIC8vIGluIG90aGVyIGNhc2UgJT0gd2lsbCBmYWlsLlxuICAgIG4gPSBsZW4gPiAyMDAwID8gMjAwMCA6IGxlbjtcbiAgICBsZW4gLT0gbjtcblxuICAgIGRvIHtcbiAgICAgIHMxID0gKHMxICsgYnVmW3BvcysrXSkgfDA7XG4gICAgICBzMiA9IChzMiArIHMxKSB8MDtcbiAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgczEgJT0gNjU1MjE7XG4gICAgczIgJT0gNjU1MjE7XG4gIH1cblxuICByZXR1cm4gKHMxIHwgKHMyIDw8IDE2KSkgfDA7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBhZGxlcjMyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBOb3RlOiB3ZSBjYW4ndCBnZXQgc2lnbmlmaWNhbnQgc3BlZWQgYm9vc3QgaGVyZS5cbi8vIFNvIHdyaXRlIGNvZGUgdG8gbWluaW1pemUgc2l6ZSAtIG5vIHByZWdlbmVyYXRlZCB0YWJsZXNcbi8vIGFuZCBhcnJheSB0b29scyBkZXBlbmRlbmNpZXMuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gVXNlIG9yZGluYXJ5IGFycmF5LCBzaW5jZSB1bnR5cGVkIG1ha2VzIG5vIGJvb3N0IGhlcmVcbmZ1bmN0aW9uIG1ha2VUYWJsZSgpIHtcbiAgdmFyIGMsIHRhYmxlID0gW107XG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCAyNTY7IG4rKykge1xuICAgIGMgPSBuO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjID0gKChjICYgMSkgPyAoMHhFREI4ODMyMCBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuICAgIH1cbiAgICB0YWJsZVtuXSA9IGM7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG5cbi8vIENyZWF0ZSB0YWJsZSBvbiBsb2FkLiBKdXN0IDI1NSBzaWduZWQgbG9uZ3MuIE5vdCBhIHByb2JsZW0uXG52YXIgY3JjVGFibGUgPSBtYWtlVGFibGUoKTtcblxuXG5mdW5jdGlvbiBjcmMzMihjcmMsIGJ1ZiwgbGVuLCBwb3MpIHtcbiAgdmFyIHQgPSBjcmNUYWJsZSxcbiAgICAgIGVuZCA9IHBvcyArIGxlbjtcblxuICBjcmMgXj0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IHBvczsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY3JjID0gKGNyYyA+Pj4gOCkgXiB0WyhjcmMgXiBidWZbaV0pICYgMHhGRl07XG4gIH1cblxuICByZXR1cm4gKGNyYyBeICgtMSkpOyAvLyA+Pj4gMDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyYzMyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciB1dGlscyAgID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG52YXIgdHJlZXMgICA9IHJlcXVpcmUoJy4vdHJlZXMnKTtcbnZhciBhZGxlcjMyID0gcmVxdWlyZSgnLi9hZGxlcjMyJyk7XG52YXIgY3JjMzIgICA9IHJlcXVpcmUoJy4vY3JjMzInKTtcbnZhciBtc2cgICAgID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKiBBbGxvd2VkIGZsdXNoIHZhbHVlczsgc2VlIGRlZmxhdGUoKSBhbmQgaW5mbGF0ZSgpIGJlbG93IGZvciBkZXRhaWxzICovXG52YXIgWl9OT19GTFVTSCAgICAgID0gMDtcbnZhciBaX1BBUlRJQUxfRkxVU0ggPSAxO1xuLy92YXIgWl9TWU5DX0ZMVVNIICAgID0gMjtcbnZhciBaX0ZVTExfRkxVU0ggICAgPSAzO1xudmFyIFpfRklOSVNIICAgICAgICA9IDQ7XG52YXIgWl9CTE9DSyAgICAgICAgID0gNTtcbi8vdmFyIFpfVFJFRVMgICAgICAgICA9IDY7XG5cblxuLyogUmV0dXJuIGNvZGVzIGZvciB0aGUgY29tcHJlc3Npb24vZGVjb21wcmVzc2lvbiBmdW5jdGlvbnMuIE5lZ2F0aXZlIHZhbHVlc1xuICogYXJlIGVycm9ycywgcG9zaXRpdmUgdmFsdWVzIGFyZSB1c2VkIGZvciBzcGVjaWFsIGJ1dCBub3JtYWwgZXZlbnRzLlxuICovXG52YXIgWl9PSyAgICAgICAgICAgID0gMDtcbnZhciBaX1NUUkVBTV9FTkQgICAgPSAxO1xuLy92YXIgWl9ORUVEX0RJQ1QgICAgID0gMjtcbi8vdmFyIFpfRVJSTk8gICAgICAgICA9IC0xO1xudmFyIFpfU1RSRUFNX0VSUk9SICA9IC0yO1xudmFyIFpfREFUQV9FUlJPUiAgICA9IC0zO1xuLy92YXIgWl9NRU1fRVJST1IgICAgID0gLTQ7XG52YXIgWl9CVUZfRVJST1IgICAgID0gLTU7XG4vL3ZhciBaX1ZFUlNJT05fRVJST1IgPSAtNjtcblxuXG4vKiBjb21wcmVzc2lvbiBsZXZlbHMgKi9cbi8vdmFyIFpfTk9fQ09NUFJFU1NJT04gICAgICA9IDA7XG4vL3ZhciBaX0JFU1RfU1BFRUQgICAgICAgICAgPSAxO1xuLy92YXIgWl9CRVNUX0NPTVBSRVNTSU9OICAgID0gOTtcbnZhciBaX0RFRkFVTFRfQ09NUFJFU1NJT04gPSAtMTtcblxuXG52YXIgWl9GSUxURVJFRCAgICAgICAgICAgID0gMTtcbnZhciBaX0hVRkZNQU5fT05MWSAgICAgICAgPSAyO1xudmFyIFpfUkxFICAgICAgICAgICAgICAgICA9IDM7XG52YXIgWl9GSVhFRCAgICAgICAgICAgICAgID0gNDtcbnZhciBaX0RFRkFVTFRfU1RSQVRFR1kgICAgPSAwO1xuXG4vKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG4vL3ZhciBaX0JJTkFSWSAgICAgICAgICAgICAgPSAwO1xuLy92YXIgWl9URVhUICAgICAgICAgICAgICAgID0gMTtcbi8vdmFyIFpfQVNDSUkgICAgICAgICAgICAgICA9IDE7IC8vID0gWl9URVhUXG52YXIgWl9VTktOT1dOICAgICAgICAgICAgID0gMjtcblxuXG4vKiBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2QgKi9cbnZhciBaX0RFRkxBVEVEICA9IDg7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxudmFyIE1BWF9NRU1fTEVWRUwgPSA5O1xuLyogTWF4aW11bSB2YWx1ZSBmb3IgbWVtTGV2ZWwgaW4gZGVmbGF0ZUluaXQyICovXG52YXIgTUFYX1dCSVRTID0gMTU7XG4vKiAzMksgTFo3NyB3aW5kb3cgKi9cbnZhciBERUZfTUVNX0xFVkVMID0gODtcblxuXG52YXIgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG52YXIgTElURVJBTFMgICAgICA9IDI1Njtcbi8qIG51bWJlciBvZiBsaXRlcmFsIGJ5dGVzIDAuLjI1NSAqL1xudmFyIExfQ09ERVMgICAgICAgPSBMSVRFUkFMUyArIDEgKyBMRU5HVEhfQ09ERVM7XG4vKiBudW1iZXIgb2YgTGl0ZXJhbCBvciBMZW5ndGggY29kZXMsIGluY2x1ZGluZyB0aGUgRU5EX0JMT0NLIGNvZGUgKi9cbnZhciBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cbnZhciBCTF9DT0RFUyAgICAgID0gMTk7XG4vKiBudW1iZXIgb2YgY29kZXMgdXNlZCB0byB0cmFuc2ZlciB0aGUgYml0IGxlbmd0aHMgKi9cbnZhciBIRUFQX1NJWkUgICAgID0gMiAqIExfQ09ERVMgKyAxO1xuLyogbWF4aW11bSBoZWFwIHNpemUgKi9cbnZhciBNQVhfQklUUyAgPSAxNTtcbi8qIEFsbCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JJVFMgYml0cyAqL1xuXG52YXIgTUlOX01BVENIID0gMztcbnZhciBNQVhfTUFUQ0ggPSAyNTg7XG52YXIgTUlOX0xPT0tBSEVBRCA9IChNQVhfTUFUQ0ggKyBNSU5fTUFUQ0ggKyAxKTtcblxudmFyIFBSRVNFVF9ESUNUID0gMHgyMDtcblxudmFyIElOSVRfU1RBVEUgPSA0MjtcbnZhciBFWFRSQV9TVEFURSA9IDY5O1xudmFyIE5BTUVfU1RBVEUgPSA3MztcbnZhciBDT01NRU5UX1NUQVRFID0gOTE7XG52YXIgSENSQ19TVEFURSA9IDEwMztcbnZhciBCVVNZX1NUQVRFID0gMTEzO1xudmFyIEZJTklTSF9TVEFURSA9IDY2NjtcblxudmFyIEJTX05FRURfTU9SRSAgICAgID0gMTsgLyogYmxvY2sgbm90IGNvbXBsZXRlZCwgbmVlZCBtb3JlIGlucHV0IG9yIG1vcmUgb3V0cHV0ICovXG52YXIgQlNfQkxPQ0tfRE9ORSAgICAgPSAyOyAvKiBibG9jayBmbHVzaCBwZXJmb3JtZWQgKi9cbnZhciBCU19GSU5JU0hfU1RBUlRFRCA9IDM7IC8qIGZpbmlzaCBzdGFydGVkLCBuZWVkIG9ubHkgbW9yZSBvdXRwdXQgYXQgbmV4dCBkZWZsYXRlICovXG52YXIgQlNfRklOSVNIX0RPTkUgICAgPSA0OyAvKiBmaW5pc2ggZG9uZSwgYWNjZXB0IG5vIG1vcmUgaW5wdXQgb3Igb3V0cHV0ICovXG5cbnZhciBPU19DT0RFID0gMHgwMzsgLy8gVW5peCA6KSAuIERvbid0IGRldGVjdCwgdXNlIHRoaXMgZGVmYXVsdC5cblxuZnVuY3Rpb24gZXJyKHN0cm0sIGVycm9yQ29kZSkge1xuICBzdHJtLm1zZyA9IG1zZ1tlcnJvckNvZGVdO1xuICByZXR1cm4gZXJyb3JDb2RlO1xufVxuXG5mdW5jdGlvbiByYW5rKGYpIHtcbiAgcmV0dXJuICgoZikgPDwgMSkgLSAoKGYpID4gNCA/IDkgOiAwKTtcbn1cblxuZnVuY3Rpb24gemVybyhidWYpIHsgdmFyIGxlbiA9IGJ1Zi5sZW5ndGg7IHdoaWxlICgtLWxlbiA+PSAwKSB7IGJ1ZltsZW5dID0gMDsgfSB9XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZS4gQWxsIGRlZmxhdGUoKSBvdXRwdXQgZ29lc1xuICogdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIHNvIHNvbWUgYXBwbGljYXRpb25zIG1heSB3aXNoIHRvIG1vZGlmeSBpdFxuICogdG8gYXZvaWQgYWxsb2NhdGluZyBhIGxhcmdlIHN0cm0tPm91dHB1dCBidWZmZXIgYW5kIGNvcHlpbmcgaW50byBpdC5cbiAqIChTZWUgYWxzbyByZWFkX2J1ZigpKS5cbiAqL1xuZnVuY3Rpb24gZmx1c2hfcGVuZGluZyhzdHJtKSB7XG4gIHZhciBzID0gc3RybS5zdGF0ZTtcblxuICAvL190cl9mbHVzaF9iaXRzKHMpO1xuICB2YXIgbGVuID0gcy5wZW5kaW5nO1xuICBpZiAobGVuID4gc3RybS5hdmFpbF9vdXQpIHtcbiAgICBsZW4gPSBzdHJtLmF2YWlsX291dDtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7IHJldHVybjsgfVxuXG4gIHV0aWxzLmFycmF5U2V0KHN0cm0ub3V0cHV0LCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmdfb3V0LCBsZW4sIHN0cm0ubmV4dF9vdXQpO1xuICBzdHJtLm5leHRfb3V0ICs9IGxlbjtcbiAgcy5wZW5kaW5nX291dCArPSBsZW47XG4gIHN0cm0udG90YWxfb3V0ICs9IGxlbjtcbiAgc3RybS5hdmFpbF9vdXQgLT0gbGVuO1xuICBzLnBlbmRpbmcgLT0gbGVuO1xuICBpZiAocy5wZW5kaW5nID09PSAwKSB7XG4gICAgcy5wZW5kaW5nX291dCA9IDA7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBmbHVzaF9ibG9ja19vbmx5KHMsIGxhc3QpIHtcbiAgdHJlZXMuX3RyX2ZsdXNoX2Jsb2NrKHMsIChzLmJsb2NrX3N0YXJ0ID49IDAgPyBzLmJsb2NrX3N0YXJ0IDogLTEpLCBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydCwgbGFzdCk7XG4gIHMuYmxvY2tfc3RhcnQgPSBzLnN0cnN0YXJ0O1xuICBmbHVzaF9wZW5kaW5nKHMuc3RybSk7XG59XG5cblxuZnVuY3Rpb24gcHV0X2J5dGUocywgYikge1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IGI7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUHV0IGEgc2hvcnQgaW4gdGhlIHBlbmRpbmcgYnVmZmVyLiBUaGUgMTYtYml0IHZhbHVlIGlzIHB1dCBpbiBNU0Igb3JkZXIuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBzdHJlYW0gc3RhdGUgaXMgY29ycmVjdCBhbmQgdGhlcmUgaXMgZW5vdWdoIHJvb20gaW5cbiAqIHBlbmRpbmdfYnVmLlxuICovXG5mdW5jdGlvbiBwdXRTaG9ydE1TQihzLCBiKSB7XG4vLyAgcHV0X2J5dGUocywgKEJ5dGUpKGIgPj4gOCkpO1xuLy8gIHB1dF9ieXRlKHMsIChCeXRlKShiICYgMHhmZikpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IChiID4+PiA4KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gYiAmIDB4ZmY7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZWFkIGEgbmV3IGJ1ZmZlciBmcm9tIHRoZSBjdXJyZW50IGlucHV0IHN0cmVhbSwgdXBkYXRlIHRoZSBhZGxlcjMyXG4gKiBhbmQgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIHJlYWQuICBBbGwgZGVmbGF0ZSgpIGlucHV0IGdvZXMgdGhyb3VnaFxuICogdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXQgdG8gYXZvaWRcbiAqIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5pbnB1dCBidWZmZXIgYW5kIGNvcHlpbmcgZnJvbSBpdC5cbiAqIChTZWUgYWxzbyBmbHVzaF9wZW5kaW5nKCkpLlxuICovXG5mdW5jdGlvbiByZWFkX2J1ZihzdHJtLCBidWYsIHN0YXJ0LCBzaXplKSB7XG4gIHZhciBsZW4gPSBzdHJtLmF2YWlsX2luO1xuXG4gIGlmIChsZW4gPiBzaXplKSB7IGxlbiA9IHNpemU7IH1cbiAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm4gMDsgfVxuXG4gIHN0cm0uYXZhaWxfaW4gLT0gbGVuO1xuXG4gIC8vIHptZW1jcHkoYnVmLCBzdHJtLT5uZXh0X2luLCBsZW4pO1xuICB1dGlscy5hcnJheVNldChidWYsIHN0cm0uaW5wdXQsIHN0cm0ubmV4dF9pbiwgbGVuLCBzdGFydCk7XG4gIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDEpIHtcbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMihzdHJtLmFkbGVyLCBidWYsIGxlbiwgc3RhcnQpO1xuICB9XG5cbiAgZWxzZSBpZiAoc3RybS5zdGF0ZS53cmFwID09PSAyKSB7XG4gICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIGJ1ZiwgbGVuLCBzdGFydCk7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gKz0gbGVuO1xuICBzdHJtLnRvdGFsX2luICs9IGxlbjtcblxuICByZXR1cm4gbGVuO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2V0IG1hdGNoX3N0YXJ0IHRvIHRoZSBsb25nZXN0IG1hdGNoIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBzdHJpbmcgYW5kXG4gKiByZXR1cm4gaXRzIGxlbmd0aC4gTWF0Y2hlcyBzaG9ydGVyIG9yIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFyZSBkaXNjYXJkZWQsXG4gKiBpbiB3aGljaCBjYXNlIHRoZSByZXN1bHQgaXMgZXF1YWwgdG8gcHJldl9sZW5ndGggYW5kIG1hdGNoX3N0YXJ0IGlzXG4gKiBnYXJiYWdlLlxuICogSU4gYXNzZXJ0aW9uczogY3VyX21hdGNoIGlzIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluIGZvciB0aGUgY3VycmVudFxuICogICBzdHJpbmcgKHN0cnN0YXJ0KSBhbmQgaXRzIGRpc3RhbmNlIGlzIDw9IE1BWF9ESVNULCBhbmQgcHJldl9sZW5ndGggPj0gMVxuICogT1VUIGFzc2VydGlvbjogdGhlIG1hdGNoIGxlbmd0aCBpcyBub3QgZ3JlYXRlciB0aGFuIHMtPmxvb2thaGVhZC5cbiAqL1xuZnVuY3Rpb24gbG9uZ2VzdF9tYXRjaChzLCBjdXJfbWF0Y2gpIHtcbiAgdmFyIGNoYWluX2xlbmd0aCA9IHMubWF4X2NoYWluX2xlbmd0aDsgICAgICAvKiBtYXggaGFzaCBjaGFpbiBsZW5ndGggKi9cbiAgdmFyIHNjYW4gPSBzLnN0cnN0YXJ0OyAvKiBjdXJyZW50IHN0cmluZyAqL1xuICB2YXIgbWF0Y2g7ICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXRjaGVkIHN0cmluZyAqL1xuICB2YXIgbGVuOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IG1hdGNoICovXG4gIHZhciBiZXN0X2xlbiA9IHMucHJldl9sZW5ndGg7ICAgICAgICAgICAgICAvKiBiZXN0IG1hdGNoIGxlbmd0aCBzbyBmYXIgKi9cbiAgdmFyIG5pY2VfbWF0Y2ggPSBzLm5pY2VfbWF0Y2g7ICAgICAgICAgICAgIC8qIHN0b3AgaWYgbWF0Y2ggbG9uZyBlbm91Z2ggKi9cbiAgdmFyIGxpbWl0ID0gKHMuc3Ryc3RhcnQgPiAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkgP1xuICAgICAgcy5zdHJzdGFydCAtIChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIDogMC8qTklMKi87XG5cbiAgdmFyIF93aW4gPSBzLndpbmRvdzsgLy8gc2hvcnRjdXRcblxuICB2YXIgd21hc2sgPSBzLndfbWFzaztcbiAgdmFyIHByZXYgID0gcy5wcmV2O1xuXG4gIC8qIFN0b3Agd2hlbiBjdXJfbWF0Y2ggYmVjb21lcyA8PSBsaW1pdC4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsXG4gICAqIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmcgb2Ygd2luZG93IGluZGV4IDAuXG4gICAqL1xuXG4gIHZhciBzdHJlbmQgPSBzLnN0cnN0YXJ0ICsgTUFYX01BVENIO1xuICB2YXIgc2Nhbl9lbmQxICA9IF93aW5bc2NhbiArIGJlc3RfbGVuIC0gMV07XG4gIHZhciBzY2FuX2VuZCAgID0gX3dpbltzY2FuICsgYmVzdF9sZW5dO1xuXG4gIC8qIFRoZSBjb2RlIGlzIG9wdGltaXplZCBmb3IgSEFTSF9CSVRTID49IDggYW5kIE1BWF9NQVRDSC0yIG11bHRpcGxlIG9mIDE2LlxuICAgKiBJdCBpcyBlYXN5IHRvIGdldCByaWQgb2YgdGhpcyBvcHRpbWl6YXRpb24gaWYgbmVjZXNzYXJ5LlxuICAgKi9cbiAgLy8gQXNzZXJ0KHMtPmhhc2hfYml0cyA+PSA4ICYmIE1BWF9NQVRDSCA9PSAyNTgsIFwiQ29kZSB0b28gY2xldmVyXCIpO1xuXG4gIC8qIERvIG5vdCB3YXN0ZSB0b28gbXVjaCB0aW1lIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGdvb2QgbWF0Y2g6ICovXG4gIGlmIChzLnByZXZfbGVuZ3RoID49IHMuZ29vZF9tYXRjaCkge1xuICAgIGNoYWluX2xlbmd0aCA+Pj0gMjtcbiAgfVxuICAvKiBEbyBub3QgbG9vayBmb3IgbWF0Y2hlcyBiZXlvbmQgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gICAqIHRvIG1ha2UgZGVmbGF0ZSBkZXRlcm1pbmlzdGljLlxuICAgKi9cbiAgaWYgKG5pY2VfbWF0Y2ggPiBzLmxvb2thaGVhZCkgeyBuaWNlX21hdGNoID0gcy5sb29rYWhlYWQ7IH1cblxuICAvLyBBc3NlcnQoKHVsZylzLT5zdHJzdGFydCA8PSBzLT53aW5kb3dfc2l6ZS1NSU5fTE9PS0FIRUFELCBcIm5lZWQgbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICAvLyBBc3NlcnQoY3VyX21hdGNoIDwgcy0+c3Ryc3RhcnQsIFwibm8gZnV0dXJlXCIpO1xuICAgIG1hdGNoID0gY3VyX21hdGNoO1xuXG4gICAgLyogU2tpcCB0byBuZXh0IG1hdGNoIGlmIHRoZSBtYXRjaCBsZW5ndGggY2Fubm90IGluY3JlYXNlXG4gICAgICogb3IgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBsZXNzIHRoYW4gMi4gIE5vdGUgdGhhdCB0aGUgY2hlY2tzIGJlbG93XG4gICAgICogZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBvY2N1ciBvY2Nhc2lvbmFsbHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICogcmVhc29ucy4gIFRoZXJlZm9yZSB1bmluaXRpYWxpemVkIG1lbW9yeSB3aWxsIGJlIGFjY2Vzc2VkLCBhbmRcbiAgICAgKiBjb25kaXRpb25hbCBqdW1wcyB3aWxsIGJlIG1hZGUgdGhhdCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzLlxuICAgICAqIEhvd2V2ZXIgdGhlIGxlbmd0aCBvZiB0aGUgbWF0Y2ggaXMgbGltaXRlZCB0byB0aGUgbG9va2FoZWFkLCBzb1xuICAgICAqIHRoZSBvdXRwdXQgb2YgZGVmbGF0ZSBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIHVuaW5pdGlhbGl6ZWQgdmFsdWVzLlxuICAgICAqL1xuXG4gICAgaWYgKF93aW5bbWF0Y2ggKyBiZXN0X2xlbl0gICAgICE9PSBzY2FuX2VuZCAgfHxcbiAgICAgICAgX3dpblttYXRjaCArIGJlc3RfbGVuIC0gMV0gIT09IHNjYW5fZW5kMSB8fFxuICAgICAgICBfd2luW21hdGNoXSAgICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuXSB8fFxuICAgICAgICBfd2luWysrbWF0Y2hdICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuICsgMV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qIFRoZSBjaGVjayBhdCBiZXN0X2xlbi0xIGNhbiBiZSByZW1vdmVkIGJlY2F1c2UgaXQgd2lsbCBiZSBtYWRlXG4gICAgICogYWdhaW4gbGF0ZXIuIChUaGlzIGhldXJpc3RpYyBpcyBub3QgYWx3YXlzIGEgd2luLilcbiAgICAgKiBJdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNvbXBhcmUgc2NhblsyXSBhbmQgbWF0Y2hbMl0gc2luY2UgdGhleVxuICAgICAqIGFyZSBhbHdheXMgZXF1YWwgd2hlbiB0aGUgb3RoZXIgYnl0ZXMgbWF0Y2gsIGdpdmVuIHRoYXRcbiAgICAgKiB0aGUgaGFzaCBrZXlzIGFyZSBlcXVhbCBhbmQgdGhhdCBIQVNIX0JJVFMgPj0gOC5cbiAgICAgKi9cbiAgICBzY2FuICs9IDI7XG4gICAgbWF0Y2grKztcbiAgICAvLyBBc3NlcnQoKnNjYW4gPT0gKm1hdGNoLCBcIm1hdGNoWzJdP1wiKTtcblxuICAgIC8qIFdlIGNoZWNrIGZvciBpbnN1ZmZpY2llbnQgbG9va2FoZWFkIG9ubHkgZXZlcnkgOHRoIGNvbXBhcmlzb247XG4gICAgICogdGhlIDI1NnRoIGNoZWNrIHdpbGwgYmUgbWFkZSBhdCBzdHJzdGFydCsyNTguXG4gICAgICovXG4gICAgZG8ge1xuICAgICAgLypqc2hpbnQgbm9lbXB0eTpmYWxzZSovXG4gICAgfSB3aGlsZSAoX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIHNjYW4gPCBzdHJlbmQpO1xuXG4gICAgLy8gQXNzZXJ0KHNjYW4gPD0gcy0+d2luZG93Kyh1bnNpZ25lZCkocy0+d2luZG93X3NpemUtMSksIFwid2lsZCBzY2FuXCIpO1xuXG4gICAgbGVuID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuICAgIHNjYW4gPSBzdHJlbmQgLSBNQVhfTUFUQ0g7XG5cbiAgICBpZiAobGVuID4gYmVzdF9sZW4pIHtcbiAgICAgIHMubWF0Y2hfc3RhcnQgPSBjdXJfbWF0Y2g7XG4gICAgICBiZXN0X2xlbiA9IGxlbjtcbiAgICAgIGlmIChsZW4gPj0gbmljZV9tYXRjaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNjYW5fZW5kMSAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuICAgICAgc2Nhbl9lbmQgICA9IF93aW5bc2NhbiArIGJlc3RfbGVuXTtcbiAgICB9XG4gIH0gd2hpbGUgKChjdXJfbWF0Y2ggPSBwcmV2W2N1cl9tYXRjaCAmIHdtYXNrXSkgPiBsaW1pdCAmJiAtLWNoYWluX2xlbmd0aCAhPT0gMCk7XG5cbiAgaWYgKGJlc3RfbGVuIDw9IHMubG9va2FoZWFkKSB7XG4gICAgcmV0dXJuIGJlc3RfbGVuO1xuICB9XG4gIHJldHVybiBzLmxvb2thaGVhZDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZpbGwgdGhlIHdpbmRvdyB3aGVuIHRoZSBsb29rYWhlYWQgYmVjb21lcyBpbnN1ZmZpY2llbnQuXG4gKiBVcGRhdGVzIHN0cnN0YXJ0IGFuZCBsb29rYWhlYWQuXG4gKlxuICogSU4gYXNzZXJ0aW9uOiBsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEXG4gKiBPVVQgYXNzZXJ0aW9uczogc3Ryc3RhcnQgPD0gd2luZG93X3NpemUtTUlOX0xPT0tBSEVBRFxuICogICAgQXQgbGVhc3Qgb25lIGJ5dGUgaGFzIGJlZW4gcmVhZCwgb3IgYXZhaWxfaW4gPT0gMDsgcmVhZHMgYXJlXG4gKiAgICBwZXJmb3JtZWQgZm9yIGF0IGxlYXN0IHR3byBieXRlcyAocmVxdWlyZWQgZm9yIHRoZSB6aXAgdHJhbnNsYXRlX2VvbFxuICogICAgb3B0aW9uIC0tIG5vdCBzdXBwb3J0ZWQgaGVyZSkuXG4gKi9cbmZ1bmN0aW9uIGZpbGxfd2luZG93KHMpIHtcbiAgdmFyIF93X3NpemUgPSBzLndfc2l6ZTtcbiAgdmFyIHAsIG4sIG0sIG1vcmUsIHN0cjtcblxuICAvL0Fzc2VydChzLT5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFELCBcImFscmVhZHkgZW5vdWdoIGxvb2thaGVhZFwiKTtcblxuICBkbyB7XG4gICAgbW9yZSA9IHMud2luZG93X3NpemUgLSBzLmxvb2thaGVhZCAtIHMuc3Ryc3RhcnQ7XG5cbiAgICAvLyBKUyBpbnRzIGhhdmUgMzIgYml0LCBibG9jayBiZWxvdyBub3QgbmVlZGVkXG4gICAgLyogRGVhbCB3aXRoICFAIyQlIDY0SyBsaW1pdDogKi9cbiAgICAvL2lmIChzaXplb2YoaW50KSA8PSAyKSB7XG4gICAgLy8gICAgaWYgKG1vcmUgPT0gMCAmJiBzLT5zdHJzdGFydCA9PSAwICYmIHMtPmxvb2thaGVhZCA9PSAwKSB7XG4gICAgLy8gICAgICAgIG1vcmUgPSB3c2l6ZTtcbiAgICAvL1xuICAgIC8vICB9IGVsc2UgaWYgKG1vcmUgPT0gKHVuc2lnbmVkKSgtMSkpIHtcbiAgICAvLyAgICAgICAgLyogVmVyeSB1bmxpa2VseSwgYnV0IHBvc3NpYmxlIG9uIDE2IGJpdCBtYWNoaW5lIGlmXG4gICAgLy8gICAgICAgICAqIHN0cnN0YXJ0ID09IDAgJiYgbG9va2FoZWFkID09IDEgKGlucHV0IGRvbmUgYSBieXRlIGF0IHRpbWUpXG4gICAgLy8gICAgICAgICAqL1xuICAgIC8vICAgICAgICBtb3JlLS07XG4gICAgLy8gICAgfVxuICAgIC8vfVxuXG5cbiAgICAvKiBJZiB0aGUgd2luZG93IGlzIGFsbW9zdCBmdWxsIGFuZCB0aGVyZSBpcyBpbnN1ZmZpY2llbnQgbG9va2FoZWFkLFxuICAgICAqIG1vdmUgdGhlIHVwcGVyIGhhbGYgdG8gdGhlIGxvd2VyIG9uZSB0byBtYWtlIHJvb20gaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgPj0gX3dfc2l6ZSArIChfd19zaXplIC0gTUlOX0xPT0tBSEVBRCkpIHtcblxuICAgICAgdXRpbHMuYXJyYXlTZXQocy53aW5kb3csIHMud2luZG93LCBfd19zaXplLCBfd19zaXplLCAwKTtcbiAgICAgIHMubWF0Y2hfc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIHMuc3Ryc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIC8qIHdlIG5vdyBoYXZlIHN0cnN0YXJ0ID49IE1BWF9ESVNUICovXG4gICAgICBzLmJsb2NrX3N0YXJ0IC09IF93X3NpemU7XG5cbiAgICAgIC8qIFNsaWRlIHRoZSBoYXNoIHRhYmxlIChjb3VsZCBiZSBhdm9pZGVkIHdpdGggMzIgYml0IHZhbHVlc1xuICAgICAgIGF0IHRoZSBleHBlbnNlIG9mIG1lbW9yeSB1c2FnZSkuIFdlIHNsaWRlIGV2ZW4gd2hlbiBsZXZlbCA9PSAwXG4gICAgICAgdG8ga2VlcCB0aGUgaGFzaCB0YWJsZSBjb25zaXN0ZW50IGlmIHdlIHN3aXRjaCBiYWNrIHRvIGxldmVsID4gMFxuICAgICAgIGxhdGVyLiAoVXNpbmcgbGV2ZWwgMCBwZXJtYW5lbnRseSBpcyBub3QgYW4gb3B0aW1hbCB1c2FnZSBvZlxuICAgICAgIHpsaWIsIHNvIHdlIGRvbid0IGNhcmUgYWJvdXQgdGhpcyBwYXRob2xvZ2ljYWwgY2FzZS4pXG4gICAgICAgKi9cblxuICAgICAgbiA9IHMuaGFzaF9zaXplO1xuICAgICAgcCA9IG47XG4gICAgICBkbyB7XG4gICAgICAgIG0gPSBzLmhlYWRbLS1wXTtcbiAgICAgICAgcy5oZWFkW3BdID0gKG0gPj0gX3dfc2l6ZSA/IG0gLSBfd19zaXplIDogMCk7XG4gICAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgICBuID0gX3dfc2l6ZTtcbiAgICAgIHAgPSBuO1xuICAgICAgZG8ge1xuICAgICAgICBtID0gcy5wcmV2Wy0tcF07XG4gICAgICAgIHMucHJldltwXSA9IChtID49IF93X3NpemUgPyBtIC0gX3dfc2l6ZSA6IDApO1xuICAgICAgICAvKiBJZiBuIGlzIG5vdCBvbiBhbnkgaGFzaCBjaGFpbiwgcHJldltuXSBpcyBnYXJiYWdlIGJ1dFxuICAgICAgICAgKiBpdHMgdmFsdWUgd2lsbCBuZXZlciBiZSB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgIH0gd2hpbGUgKC0tbik7XG5cbiAgICAgIG1vcmUgKz0gX3dfc2l6ZTtcbiAgICB9XG4gICAgaWYgKHMuc3RybS5hdmFpbF9pbiA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLyogSWYgdGhlcmUgd2FzIG5vIHNsaWRpbmc6XG4gICAgICogICAgc3Ryc3RhcnQgPD0gV1NJWkUrTUFYX0RJU1QtMSAmJiBsb29rYWhlYWQgPD0gTUlOX0xPT0tBSEVBRCAtIDEgJiZcbiAgICAgKiAgICBtb3JlID09IHdpbmRvd19zaXplIC0gbG9va2FoZWFkIC0gc3Ryc3RhcnRcbiAgICAgKiA9PiBtb3JlID49IHdpbmRvd19zaXplIC0gKE1JTl9MT09LQUhFQUQtMSArIFdTSVpFICsgTUFYX0RJU1QtMSlcbiAgICAgKiA9PiBtb3JlID49IHdpbmRvd19zaXplIC0gMipXU0laRSArIDJcbiAgICAgKiBJbiB0aGUgQklHX01FTSBvciBNTUFQIGNhc2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSxcbiAgICAgKiAgIHdpbmRvd19zaXplID09IGlucHV0X3NpemUgKyBNSU5fTE9PS0FIRUFEICAmJlxuICAgICAqICAgc3Ryc3RhcnQgKyBzLT5sb29rYWhlYWQgPD0gaW5wdXRfc2l6ZSA9PiBtb3JlID49IE1JTl9MT09LQUhFQUQuXG4gICAgICogT3RoZXJ3aXNlLCB3aW5kb3dfc2l6ZSA9PSAyKldTSVpFIHNvIG1vcmUgPj0gMi5cbiAgICAgKiBJZiB0aGVyZSB3YXMgc2xpZGluZywgbW9yZSA+PSBXU0laRS4gU28gaW4gYWxsIGNhc2VzLCBtb3JlID49IDIuXG4gICAgICovXG4gICAgLy9Bc3NlcnQobW9yZSA+PSAyLCBcIm1vcmUgPCAyXCIpO1xuICAgIG4gPSByZWFkX2J1ZihzLnN0cm0sIHMud2luZG93LCBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQsIG1vcmUpO1xuICAgIHMubG9va2FoZWFkICs9IG47XG5cbiAgICAvKiBJbml0aWFsaXplIHRoZSBoYXNoIHZhbHVlIG5vdyB0aGF0IHdlIGhhdmUgc29tZSBpbnB1dDogKi9cbiAgICBpZiAocy5sb29rYWhlYWQgKyBzLmluc2VydCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIHN0ciA9IHMuc3Ryc3RhcnQgLSBzLmluc2VydDtcbiAgICAgIHMuaW5zX2ggPSBzLndpbmRvd1tzdHJdO1xuXG4gICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIDFdKTsgKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3N0ciArIDFdKSAmIHMuaGFzaF9tYXNrO1xuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICBDYWxsIHVwZGF0ZV9oYXNoKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgIHdoaWxlIChzLmluc2VydCkge1xuICAgICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIE1JTl9NQVRDSC0xXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuXG4gICAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgICAgc3RyKys7XG4gICAgICAgIHMuaW5zZXJ0LS07XG4gICAgICAgIGlmIChzLmxvb2thaGVhZCArIHMuaW5zZXJ0IDwgTUlOX01BVENIKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogSWYgdGhlIHdob2xlIGlucHV0IGhhcyBsZXNzIHRoYW4gTUlOX01BVENIIGJ5dGVzLCBpbnNfaCBpcyBnYXJiYWdlLFxuICAgICAqIGJ1dCB0aGlzIGlzIG5vdCBpbXBvcnRhbnQgc2luY2Ugb25seSBsaXRlcmFsIGJ5dGVzIHdpbGwgYmUgZW1pdHRlZC5cbiAgICAgKi9cblxuICB9IHdoaWxlIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgcy5zdHJtLmF2YWlsX2luICE9PSAwKTtcblxuICAvKiBJZiB0aGUgV0lOX0lOSVQgYnl0ZXMgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY3VycmVudCBkYXRhIGhhdmUgbmV2ZXIgYmVlblxuICAgKiB3cml0dGVuLCB0aGVuIHplcm8gdGhvc2UgYnl0ZXMgaW4gb3JkZXIgdG8gYXZvaWQgbWVtb3J5IGNoZWNrIHJlcG9ydHMgb2ZcbiAgICogdGhlIHVzZSBvZiB1bmluaXRpYWxpemVkIChvciB1bmluaXRpYWxpc2VkIGFzIEp1bGlhbiB3cml0ZXMpIGJ5dGVzIGJ5XG4gICAqIHRoZSBsb25nZXN0IG1hdGNoIHJvdXRpbmVzLiAgVXBkYXRlIHRoZSBoaWdoIHdhdGVyIG1hcmsgZm9yIHRoZSBuZXh0XG4gICAqIHRpbWUgdGhyb3VnaCBoZXJlLiAgV0lOX0lOSVQgaXMgc2V0IHRvIE1BWF9NQVRDSCBzaW5jZSB0aGUgbG9uZ2VzdCBtYXRjaFxuICAgKiByb3V0aW5lcyBhbGxvdyBzY2FubmluZyB0byBzdHJzdGFydCArIE1BWF9NQVRDSCwgaWdub3JpbmcgbG9va2FoZWFkLlxuICAgKi9cbi8vICBpZiAocy5oaWdoX3dhdGVyIDwgcy53aW5kb3dfc2l6ZSkge1xuLy8gICAgdmFyIGN1cnIgPSBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQ7XG4vLyAgICB2YXIgaW5pdCA9IDA7XG4vL1xuLy8gICAgaWYgKHMuaGlnaF93YXRlciA8IGN1cnIpIHtcbi8vICAgICAgLyogUHJldmlvdXMgaGlnaCB3YXRlciBtYXJrIGJlbG93IGN1cnJlbnQgZGF0YSAtLSB6ZXJvIFdJTl9JTklUXG4vLyAgICAgICAqIGJ5dGVzIG9yIHVwIHRvIGVuZCBvZiB3aW5kb3csIHdoaWNoZXZlciBpcyBsZXNzLlxuLy8gICAgICAgKi9cbi8vICAgICAgaW5pdCA9IHMud2luZG93X3NpemUgLSBjdXJyO1xuLy8gICAgICBpZiAoaW5pdCA+IFdJTl9JTklUKVxuLy8gICAgICAgIGluaXQgPSBXSU5fSU5JVDtcbi8vICAgICAgem1lbXplcm8ocy0+d2luZG93ICsgY3VyciwgKHVuc2lnbmVkKWluaXQpO1xuLy8gICAgICBzLT5oaWdoX3dhdGVyID0gY3VyciArIGluaXQ7XG4vLyAgICB9XG4vLyAgICBlbHNlIGlmIChzLT5oaWdoX3dhdGVyIDwgKHVsZyljdXJyICsgV0lOX0lOSVQpIHtcbi8vICAgICAgLyogSGlnaCB3YXRlciBtYXJrIGF0IG9yIGFib3ZlIGN1cnJlbnQgZGF0YSwgYnV0IGJlbG93IGN1cnJlbnQgZGF0YVxuLy8gICAgICAgKiBwbHVzIFdJTl9JTklUIC0tIHplcm8gb3V0IHRvIGN1cnJlbnQgZGF0YSBwbHVzIFdJTl9JTklULCBvciB1cFxuLy8gICAgICAgKiB0byBlbmQgb2Ygd2luZG93LCB3aGljaGV2ZXIgaXMgbGVzcy5cbi8vICAgICAgICovXG4vLyAgICAgIGluaXQgPSAodWxnKWN1cnIgKyBXSU5fSU5JVCAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIGlmIChpbml0ID4gcy0+d2luZG93X3NpemUgLSBzLT5oaWdoX3dhdGVyKVxuLy8gICAgICAgIGluaXQgPSBzLT53aW5kb3dfc2l6ZSAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIHptZW16ZXJvKHMtPndpbmRvdyArIHMtPmhpZ2hfd2F0ZXIsICh1bnNpZ25lZClpbml0KTtcbi8vICAgICAgcy0+aGlnaF93YXRlciArPSBpbml0O1xuLy8gICAgfVxuLy8gIH1cbi8vXG4vLyAgQXNzZXJ0KCh1bGcpcy0+c3Ryc3RhcnQgPD0gcy0+d2luZG93X3NpemUgLSBNSU5fTE9PS0FIRUFELFxuLy8gICAgXCJub3QgZW5vdWdoIHJvb20gZm9yIHNlYXJjaFwiKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5IHdpdGhvdXQgY29tcHJlc3Npb24gYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVyblxuICogdGhlIGN1cnJlbnQgYmxvY2sgc3RhdGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgZGljdGlvbmFyeSBzaW5jZVxuICogdW5jb21wcmVzc2libGUgZGF0YSBpcyBwcm9iYWJseSBub3QgdXNlZnVsLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWRcbiAqIG9ubHkgZm9yIHRoZSBsZXZlbD0wIGNvbXByZXNzaW9uIG9wdGlvbi5cbiAqIE5PVEU6IHRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIG9wdGltaXplZCB0byBhdm9pZCBleHRyYSBjb3B5aW5nIGZyb21cbiAqIHdpbmRvdyB0byBwZW5kaW5nX2J1Zi5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9zdG9yZWQocywgZmx1c2gpIHtcbiAgLyogU3RvcmVkIGJsb2NrcyBhcmUgbGltaXRlZCB0byAweGZmZmYgYnl0ZXMsIHBlbmRpbmdfYnVmIGlzIGxpbWl0ZWRcbiAgICogdG8gcGVuZGluZ19idWZfc2l6ZSwgYW5kIGVhY2ggc3RvcmVkIGJsb2NrIGhhcyBhIDUgYnl0ZSBoZWFkZXI6XG4gICAqL1xuICB2YXIgbWF4X2Jsb2NrX3NpemUgPSAweGZmZmY7XG5cbiAgaWYgKG1heF9ibG9ja19zaXplID4gcy5wZW5kaW5nX2J1Zl9zaXplIC0gNSkge1xuICAgIG1heF9ibG9ja19zaXplID0gcy5wZW5kaW5nX2J1Zl9zaXplIC0gNTtcbiAgfVxuXG4gIC8qIENvcHkgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIGlucHV0IHRvIG91dHB1dDogKi9cbiAgZm9yICg7Oykge1xuICAgIC8qIEZpbGwgdGhlIHdpbmRvdyBhcyBtdWNoIGFzIHBvc3NpYmxlOiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8PSAxKSB7XG5cbiAgICAgIC8vQXNzZXJ0KHMtPnN0cnN0YXJ0IDwgcy0+d19zaXplK01BWF9ESVNUKHMpIHx8XG4gICAgICAvLyAgcy0+YmxvY2tfc3RhcnQgPj0gKGxvbmcpcy0+d19zaXplLCBcInNsaWRlIHRvbyBsYXRlXCIpO1xuLy8gICAgICBpZiAoIShzLnN0cnN0YXJ0IDwgcy53X3NpemUgKyAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB8fFxuLy8gICAgICAgIHMuYmxvY2tfc3RhcnQgPj0gcy53X3NpemUpKSB7XG4vLyAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcInNsaWRlIHRvbyBsYXRlXCIpO1xuLy8gICAgICB9XG5cbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgfVxuICAgIC8vQXNzZXJ0KHMtPmJsb2NrX3N0YXJ0ID49IDBMLCBcImJsb2NrIGdvbmVcIik7XG4vLyAgICBpZiAocy5ibG9ja19zdGFydCA8IDApIHRocm93IG5ldyBFcnJvcihcImJsb2NrIGdvbmVcIik7XG5cbiAgICBzLnN0cnN0YXJ0ICs9IHMubG9va2FoZWFkO1xuICAgIHMubG9va2FoZWFkID0gMDtcblxuICAgIC8qIEVtaXQgYSBzdG9yZWQgYmxvY2sgaWYgcGVuZGluZ19idWYgd2lsbCBiZSBmdWxsOiAqL1xuICAgIHZhciBtYXhfc3RhcnQgPSBzLmJsb2NrX3N0YXJ0ICsgbWF4X2Jsb2NrX3NpemU7XG5cbiAgICBpZiAocy5zdHJzdGFydCA9PT0gMCB8fCBzLnN0cnN0YXJ0ID49IG1heF9zdGFydCkge1xuICAgICAgLyogc3Ryc3RhcnQgPT0gMCBpcyBwb3NzaWJsZSB3aGVuIHdyYXBhcm91bmQgb24gMTYtYml0IG1hY2hpbmUgKi9cbiAgICAgIHMubG9va2FoZWFkID0gcy5zdHJzdGFydCAtIG1heF9zdGFydDtcbiAgICAgIHMuc3Ryc3RhcnQgPSBtYXhfc3RhcnQ7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuXG5cbiAgICB9XG4gICAgLyogRmx1c2ggaWYgd2UgbWF5IGhhdmUgdG8gc2xpZGUsIG90aGVyd2lzZSBibG9ja19zdGFydCBtYXkgYmVjb21lXG4gICAgICogbmVnYXRpdmUgYW5kIHRoZSBkYXRhIHdpbGwgYmUgZ29uZTpcbiAgICAgKi9cbiAgICBpZiAocy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQgPj0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG5cbiAgcy5pbnNlcnQgPSAwO1xuXG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuXG4gIGlmIChzLnN0cnN0YXJ0ID4gcy5ibG9ja19zdGFydCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuXG4gIHJldHVybiBCU19ORUVEX01PUkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcHJlc3MgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVybiB0aGUgY3VycmVudFxuICogYmxvY2sgc3RhdGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHBlcmZvcm0gbGF6eSBldmFsdWF0aW9uIG9mIG1hdGNoZXMgYW5kIGluc2VydHNcbiAqIG5ldyBzdHJpbmdzIGluIHRoZSBkaWN0aW9uYXJ5IG9ubHkgZm9yIHVubWF0Y2hlZCBzdHJpbmdzIG9yIGZvciBzaG9ydFxuICogbWF0Y2hlcy4gSXQgaXMgdXNlZCBvbmx5IGZvciB0aGUgZmFzdCBjb21wcmVzc2lvbiBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBkZWZsYXRlX2Zhc3QocywgZmx1c2gpIHtcbiAgdmFyIGhhc2hfaGVhZDsgICAgICAgIC8qIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW4gKi9cbiAgdmFyIGJmbHVzaDsgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuICAgICAqIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuICAgICAqIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuICAgICAqL1xuICAgIGhhc2hfaGVhZCA9IDAvKk5JTCovO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG4gICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAvKioqL1xuICAgIH1cblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICogQXQgdGhpcyBwb2ludCB3ZSBoYXZlIGFsd2F5cyBtYXRjaF9sZW5ndGggPCBNSU5fTUFUQ0hcbiAgICAgKi9cbiAgICBpZiAoaGFzaF9oZWFkICE9PSAwLypOSUwqLyAmJiAoKHMuc3Ryc3RhcnQgLSBoYXNoX2hlYWQpIDw9IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSkge1xuICAgICAgLyogVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcbiAgICAgICAqIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuICAgICAgICogb2YgdGhlIHN0cmluZyB3aXRoIGl0c2VsZiBhdCB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IGZpbGUpLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2gocywgaGFzaF9oZWFkKTtcbiAgICAgIC8qIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0ICovXG4gICAgfVxuICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8vIGNoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQsIHMubWF0Y2hfc3RhcnQsIHMubWF0Y2hfbGVuZ3RoKTsgLy8gZm9yIGRlYnVnIG9ubHlcblxuICAgICAgLyoqKiBfdHJfdGFsbHlfZGlzdChzLCBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuICAgICAgcy5sb29rYWhlYWQgLT0gcy5tYXRjaF9sZW5ndGg7XG5cbiAgICAgIC8qIEluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSBvbmx5IGlmIHRoZSBtYXRjaCBsZW5ndGhcbiAgICAgICAqIGlzIG5vdCB0b28gbGFyZ2UuIFRoaXMgc2F2ZXMgdGltZSBidXQgZGVncmFkZXMgY29tcHJlc3Npb24uXG4gICAgICAgKi9cbiAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA8PSBzLm1heF9sYXp5X21hdGNoLyptYXhfaW5zZXJ0X2xlbmd0aCovICYmIHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgICBzLm1hdGNoX2xlbmd0aC0tOyAvKiBzdHJpbmcgYXQgc3Ryc3RhcnQgYWxyZWFkeSBpbiB0YWJsZSAqL1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAvKiBzdHJzdGFydCBuZXZlciBleGNlZWRzIFdTSVpFLU1BWF9NQVRDSCwgc28gdGhlcmUgYXJlXG4gICAgICAgICAgICogYWx3YXlzIE1JTl9NQVRDSCBieXRlcyBhaGVhZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgfSB3aGlsZSAoLS1zLm1hdGNoX2xlbmd0aCAhPT0gMCk7XG4gICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIH0gZWxzZVxuICAgICAge1xuICAgICAgICBzLnN0cnN0YXJ0ICs9IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgICAgIHMuaW5zX2ggPSBzLndpbmRvd1tzLnN0cnN0YXJ0XTtcbiAgICAgICAgLyogVVBEQVRFX0hBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbcy5zdHJzdGFydCsxXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyAxXSkgJiBzLmhhc2hfbWFzaztcblxuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICAgICAgICAgIENhbGwgVVBEQVRFX0hBU0goKSBNSU5fTUFUQ0gtMyBtb3JlIHRpbWVzXG4vLyNlbmRpZlxuICAgICAgICAvKiBJZiBsb29rYWhlYWQgPCBNSU5fTUFUQ0gsIGluc19oIGlzIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzIG5vdFxuICAgICAgICAgKiBtYXR0ZXIgc2luY2UgaXQgd2lsbCBiZSByZWNvbXB1dGVkIGF0IG5leHQgZGVmbGF0ZSBjYWxsLlxuICAgICAgICAgKi9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9ICgocy5zdHJzdGFydCA8IChNSU5fTUFUQ0ggLSAxKSkgPyBzLnN0cnN0YXJ0IDogTUlOX01BVENIIC0gMSk7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTYW1lIGFzIGFib3ZlLCBidXQgYWNoaWV2ZXMgYmV0dGVyIGNvbXByZXNzaW9uLiBXZSB1c2UgYSBsYXp5XG4gKiBldmFsdWF0aW9uIGZvciBtYXRjaGVzOiBhIG1hdGNoIGlzIGZpbmFsbHkgYWRvcHRlZCBvbmx5IGlmIHRoZXJlIGlzXG4gKiBubyBiZXR0ZXIgbWF0Y2ggYXQgdGhlIG5leHQgd2luZG93IHBvc2l0aW9uLlxuICovXG5mdW5jdGlvbiBkZWZsYXRlX3Nsb3cocywgZmx1c2gpIHtcbiAgdmFyIGhhc2hfaGVhZDsgICAgICAgICAgLyogaGVhZCBvZiBoYXNoIGNoYWluICovXG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICB2YXIgbWF4X2luc2VydDtcblxuICAvKiBQcm9jZXNzIHRoZSBpbnB1dCBibG9jay4gKi9cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBuZXh0IG1hdGNoLCBwbHVzIE1JTl9NQVRDSCBieXRlcyB0byBpbnNlcnQgdGhlXG4gICAgICogc3RyaW5nIGZvbGxvd2luZyB0aGUgbmV4dCBtYXRjaC5cbiAgICAgKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkgeyBicmVhazsgfSAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cblxuICAgIC8qIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcbiAgICAgKi9cbiAgICBoYXNoX2hlYWQgPSAwLypOSUwqLztcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgLyoqKi9cbiAgICB9XG5cbiAgICAvKiBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuICAgICAqL1xuICAgIHMucHJldl9sZW5ndGggPSBzLm1hdGNoX2xlbmd0aDtcbiAgICBzLnByZXZfbWF0Y2ggPSBzLm1hdGNoX3N0YXJ0O1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcblxuICAgIGlmIChoYXNoX2hlYWQgIT09IDAvKk5JTCovICYmIHMucHJldl9sZW5ndGggPCBzLm1heF9sYXp5X21hdGNoICYmXG4gICAgICAgIHMuc3Ryc3RhcnQgLSBoYXNoX2hlYWQgPD0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkvKk1BWF9ESVNUKHMpKi8pIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKHMsIGhhc2hfaGVhZCk7XG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuXG4gICAgICBpZiAocy5tYXRjaF9sZW5ndGggPD0gNSAmJlxuICAgICAgICAgKHMuc3RyYXRlZ3kgPT09IFpfRklMVEVSRUQgfHwgKHMubWF0Y2hfbGVuZ3RoID09PSBNSU5fTUFUQ0ggJiYgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQgPiA0MDk2LypUT09fRkFSKi8pKSkge1xuXG4gICAgICAgIC8qIElmIHByZXZfbWF0Y2ggaXMgYWxzbyBNSU5fTUFUQ0gsIG1hdGNoX3N0YXJ0IGlzIGdhcmJhZ2VcbiAgICAgICAgICogYnV0IHdlIHdpbGwgaWdub3JlIHRoZSBjdXJyZW50IG1hdGNoIGFueXdheS5cbiAgICAgICAgICovXG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHN0ZXAgYW5kIHRoZSBjdXJyZW50XG4gICAgICogbWF0Y2ggaXMgbm90IGJldHRlciwgb3V0cHV0IHRoZSBwcmV2aW91cyBtYXRjaDpcbiAgICAgKi9cbiAgICBpZiAocy5wcmV2X2xlbmd0aCA+PSBNSU5fTUFUQ0ggJiYgcy5tYXRjaF9sZW5ndGggPD0gcy5wcmV2X2xlbmd0aCkge1xuICAgICAgbWF4X2luc2VydCA9IHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZCAtIE1JTl9NQVRDSDtcbiAgICAgIC8qIERvIG5vdCBpbnNlcnQgc3RyaW5ncyBpbiBoYXNoIHRhYmxlIGJleW9uZCB0aGlzLiAqL1xuXG4gICAgICAvL2NoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQtMSwgcy5wcmV2X21hdGNoLCBzLnByZXZfbGVuZ3RoKTtcblxuICAgICAgLyoqKl90cl90YWxseV9kaXN0KHMsIHMuc3Ryc3RhcnQgLSAxIC0gcy5wcmV2X21hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgcy5wcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgcy5zdHJzdGFydCAtIDEgLSBzLnByZXZfbWF0Y2gsIHMucHJldl9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuICAgICAgLyogSW5zZXJ0IGluIGhhc2ggdGFibGUgYWxsIHN0cmluZ3MgdXAgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2guXG4gICAgICAgKiBzdHJzdGFydC0xIGFuZCBzdHJzdGFydCBhcmUgYWxyZWFkeSBpbnNlcnRlZC4gSWYgdGhlcmUgaXMgbm90XG4gICAgICAgKiBlbm91Z2ggbG9va2FoZWFkLCB0aGUgbGFzdCB0d28gc3RyaW5ncyBhcmUgbm90IGluc2VydGVkIGluXG4gICAgICAgKiB0aGUgaGFzaCB0YWJsZS5cbiAgICAgICAqL1xuICAgICAgcy5sb29rYWhlYWQgLT0gcy5wcmV2X2xlbmd0aCAtIDE7XG4gICAgICBzLnByZXZfbGVuZ3RoIC09IDI7XG4gICAgICBkbyB7XG4gICAgICAgIGlmICgrK3Muc3Ryc3RhcnQgPD0gbWF4X2luc2VydCkge1xuICAgICAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoLS1zLnByZXZfbGVuZ3RoICE9PSAwKTtcbiAgICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqKi9cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAgIC8qIElmIHRoZXJlIHdhcyBubyBtYXRjaCBhdCB0aGUgcHJldmlvdXMgcG9zaXRpb24sIG91dHB1dCBhXG4gICAgICAgKiBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICAgKiBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuICAgICAgICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0IC0gMV0pO1xuXG4gICAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAgIC8qKiogRkxVU0hfQkxPQ0tfT05MWShzLCAwKSAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICAvKioqL1xuICAgICAgfVxuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRoZXJlIGlzIG5vIHByZXZpb3VzIG1hdGNoIHRvIGNvbXBhcmUgd2l0aCwgd2FpdCBmb3JcbiAgICAgICAqIHRoZSBuZXh0IHN0ZXAgdG8gZGVjaWRlLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZmx1c2ggIT0gWl9OT19GTFVTSCwgXCJubyBmbHVzaD9cIik7XG4gIGlmIChzLm1hdGNoX2F2YWlsYWJsZSkge1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0LTFdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgfVxuICBzLmluc2VydCA9IHMuc3Ryc3RhcnQgPCBNSU5fTUFUQ0ggLSAxID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDE7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuXG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRm9yIFpfUkxFLCBzaW1wbHkgbG9vayBmb3IgcnVucyBvZiBieXRlcywgZ2VuZXJhdGUgbWF0Y2hlcyBvbmx5IG9mIGRpc3RhbmNlXG4gKiBvbmUuICBEbyBub3QgbWFpbnRhaW4gYSBoYXNoIHRhYmxlLiAgKEl0IHdpbGwgYmUgcmVnZW5lcmF0ZWQgaWYgdGhpcyBydW4gb2ZcbiAqIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIFpfUkxFLilcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9ybGUocywgZmx1c2gpIHtcbiAgdmFyIGJmbHVzaDsgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cbiAgdmFyIHByZXY7ICAgICAgICAgICAgICAvKiBieXRlIGF0IGRpc3RhbmNlIG9uZSB0byBtYXRjaCAqL1xuICB2YXIgc2Nhbiwgc3RyZW5kOyAgICAgIC8qIHNjYW4gZ29lcyB1cCB0byBzdHJlbmQgZm9yIGxlbmd0aCBvZiBydW4gKi9cblxuICB2YXIgX3dpbiA9IHMud2luZG93O1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbG9uZ2VzdCBydW4sIHBsdXMgb25lIGZvciB0aGUgdW5yb2xsZWQgbG9vcC5cbiAgICAgKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPD0gTUFYX01BVENIKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA8PSBNQVhfTUFUQ0ggJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkgeyBicmVhazsgfSAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cblxuICAgIC8qIFNlZSBob3cgbWFueSB0aW1lcyB0aGUgcHJldmlvdXMgYnl0ZSByZXBlYXRzICovXG4gICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0ggJiYgcy5zdHJzdGFydCA+IDApIHtcbiAgICAgIHNjYW4gPSBzLnN0cnN0YXJ0IC0gMTtcbiAgICAgIHByZXYgPSBfd2luW3NjYW5dO1xuICAgICAgaWYgKHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dKSB7XG4gICAgICAgIHN0cmVuZCA9IHMuc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvKmpzaGludCBub2VtcHR5OmZhbHNlKi9cbiAgICAgICAgfSB3aGlsZSAocHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBzY2FuIDwgc3RyZW5kKTtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNQVhfTUFUQ0ggLSAoc3RyZW5kIC0gc2Nhbik7XG4gICAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+IHMubG9va2FoZWFkKSB7XG4gICAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBzLmxvb2thaGVhZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9Bc3NlcnQoc2NhbiA8PSBzLT53aW5kb3crKHVJbnQpKHMtPndpbmRvd19zaXplLTEpLCBcIndpbGQgc2NhblwiKTtcbiAgICB9XG5cbiAgICAvKiBFbWl0IG1hdGNoIGlmIGhhdmUgcnVuIG9mIE1JTl9NQVRDSCBvciBsb25nZXIsIGVsc2UgZW1pdCBsaXRlcmFsICovXG4gICAgaWYgKHMubWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuICAgICAgLy9jaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLnN0cnN0YXJ0IC0gMSwgcy5tYXRjaF9sZW5ndGgpO1xuXG4gICAgICAvKioqIF90cl90YWxseV9kaXN0KHMsIDEsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMSwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgIHMuc3Ryc3RhcnQgKz0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGb3IgWl9IVUZGTUFOX09OTFksIGRvIG5vdCBsb29rIGZvciBtYXRjaGVzLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS5cbiAqIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIEh1ZmZtYW4uKVxuICovXG5mdW5jdGlvbiBkZWZsYXRlX2h1ZmYocywgZmx1c2gpIHtcbiAgdmFyIGJmbHVzaDsgICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgYSBsaXRlcmFsIHRvIHdyaXRlLiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgICAgfVxuICAgICAgICBicmVhazsgICAgICAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydF0pKTtcbiAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydF0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuICAgIHMubG9va2FoZWFkLS07XG4gICAgcy5zdHJzdGFydCsrO1xuICAgIGlmIChiZmx1c2gpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG4gIHMuaW5zZXJ0ID0gMDtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLmxhc3RfbGl0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG4vKiBWYWx1ZXMgZm9yIG1heF9sYXp5X21hdGNoLCBnb29kX21hdGNoIGFuZCBtYXhfY2hhaW5fbGVuZ3RoLCBkZXBlbmRpbmcgb25cbiAqIHRoZSBkZXNpcmVkIHBhY2sgbGV2ZWwgKDAuLjkpLiBUaGUgdmFsdWVzIGdpdmVuIGJlbG93IGhhdmUgYmVlbiB0dW5lZCB0b1xuICogZXhjbHVkZSB3b3JzdCBjYXNlIHBlcmZvcm1hbmNlIGZvciBwYXRob2xvZ2ljYWwgZmlsZXMuIEJldHRlciB2YWx1ZXMgbWF5IGJlXG4gKiBmb3VuZCBmb3Igc3BlY2lmaWMgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIENvbmZpZyhnb29kX2xlbmd0aCwgbWF4X2xhenksIG5pY2VfbGVuZ3RoLCBtYXhfY2hhaW4sIGZ1bmMpIHtcbiAgdGhpcy5nb29kX2xlbmd0aCA9IGdvb2RfbGVuZ3RoO1xuICB0aGlzLm1heF9sYXp5ID0gbWF4X2xhenk7XG4gIHRoaXMubmljZV9sZW5ndGggPSBuaWNlX2xlbmd0aDtcbiAgdGhpcy5tYXhfY2hhaW4gPSBtYXhfY2hhaW47XG4gIHRoaXMuZnVuYyA9IGZ1bmM7XG59XG5cbnZhciBjb25maWd1cmF0aW9uX3RhYmxlO1xuXG5jb25maWd1cmF0aW9uX3RhYmxlID0gW1xuICAvKiAgICAgIGdvb2QgbGF6eSBuaWNlIGNoYWluICovXG4gIG5ldyBDb25maWcoMCwgMCwgMCwgMCwgZGVmbGF0ZV9zdG9yZWQpLCAgICAgICAgICAvKiAwIHN0b3JlIG9ubHkgKi9cbiAgbmV3IENvbmZpZyg0LCA0LCA4LCA0LCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAgIC8qIDEgbWF4IHNwZWVkLCBubyBsYXp5IG1hdGNoZXMgKi9cbiAgbmV3IENvbmZpZyg0LCA1LCAxNiwgOCwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgIC8qIDIgKi9cbiAgbmV3IENvbmZpZyg0LCA2LCAzMiwgMzIsIGRlZmxhdGVfZmFzdCksICAgICAgICAgIC8qIDMgKi9cblxuICBuZXcgQ29uZmlnKDQsIDQsIDE2LCAxNiwgZGVmbGF0ZV9zbG93KSwgICAgICAgICAgLyogNCBsYXp5IG1hdGNoZXMgKi9cbiAgbmV3IENvbmZpZyg4LCAxNiwgMzIsIDMyLCBkZWZsYXRlX3Nsb3cpLCAgICAgICAgIC8qIDUgKi9cbiAgbmV3IENvbmZpZyg4LCAxNiwgMTI4LCAxMjgsIGRlZmxhdGVfc2xvdyksICAgICAgIC8qIDYgKi9cbiAgbmV3IENvbmZpZyg4LCAzMiwgMTI4LCAyNTYsIGRlZmxhdGVfc2xvdyksICAgICAgIC8qIDcgKi9cbiAgbmV3IENvbmZpZygzMiwgMTI4LCAyNTgsIDEwMjQsIGRlZmxhdGVfc2xvdyksICAgIC8qIDggKi9cbiAgbmV3IENvbmZpZygzMiwgMjU4LCAyNTgsIDQwOTYsIGRlZmxhdGVfc2xvdykgICAgIC8qIDkgbWF4IGNvbXByZXNzaW9uICovXG5dO1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgXCJsb25nZXN0IG1hdGNoXCIgcm91dGluZXMgZm9yIGEgbmV3IHpsaWIgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIGxtX2luaXQocykge1xuICBzLndpbmRvd19zaXplID0gMiAqIHMud19zaXplO1xuXG4gIC8qKiogQ0xFQVJfSEFTSChzKTsgKioqL1xuICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgLyogU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyczpcbiAgICovXG4gIHMubWF4X2xhenlfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9sYXp5O1xuICBzLmdvb2RfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLmdvb2RfbGVuZ3RoO1xuICBzLm5pY2VfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm5pY2VfbGVuZ3RoO1xuICBzLm1heF9jaGFpbl9sZW5ndGggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9jaGFpbjtcblxuICBzLnN0cnN0YXJ0ID0gMDtcbiAgcy5ibG9ja19zdGFydCA9IDA7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5pbnNlcnQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHMuaW5zX2ggPSAwO1xufVxuXG5cbmZ1bmN0aW9uIERlZmxhdGVTdGF0ZSgpIHtcbiAgdGhpcy5zdHJtID0gbnVsbDsgICAgICAgICAgICAvKiBwb2ludGVyIGJhY2sgdG8gdGhpcyB6bGliIHN0cmVhbSAqL1xuICB0aGlzLnN0YXR1cyA9IDA7ICAgICAgICAgICAgLyogYXMgdGhlIG5hbWUgaW1wbGllcyAqL1xuICB0aGlzLnBlbmRpbmdfYnVmID0gbnVsbDsgICAgICAvKiBvdXRwdXQgc3RpbGwgcGVuZGluZyAqL1xuICB0aGlzLnBlbmRpbmdfYnVmX3NpemUgPSAwOyAgLyogc2l6ZSBvZiBwZW5kaW5nX2J1ZiAqL1xuICB0aGlzLnBlbmRpbmdfb3V0ID0gMDsgICAgICAgLyogbmV4dCBwZW5kaW5nIGJ5dGUgdG8gb3V0cHV0IHRvIHRoZSBzdHJlYW0gKi9cbiAgdGhpcy5wZW5kaW5nID0gMDsgICAgICAgICAgIC8qIG5iIG9mIGJ5dGVzIGluIHRoZSBwZW5kaW5nIGJ1ZmZlciAqL1xuICB0aGlzLndyYXAgPSAwOyAgICAgICAgICAgICAgLyogYml0IDAgdHJ1ZSBmb3IgemxpYiwgYml0IDEgdHJ1ZSBmb3IgZ3ppcCAqL1xuICB0aGlzLmd6aGVhZCA9IG51bGw7ICAgICAgICAgLyogZ3ppcCBoZWFkZXIgaW5mb3JtYXRpb24gdG8gd3JpdGUgKi9cbiAgdGhpcy5nemluZGV4ID0gMDsgICAgICAgICAgIC8qIHdoZXJlIGluIGV4dHJhLCBuYW1lLCBvciBjb21tZW50ICovXG4gIHRoaXMubWV0aG9kID0gWl9ERUZMQVRFRDsgLyogY2FuIG9ubHkgYmUgREVGTEFURUQgKi9cbiAgdGhpcy5sYXN0X2ZsdXNoID0gLTE7ICAgLyogdmFsdWUgb2YgZmx1c2ggcGFyYW0gZm9yIHByZXZpb3VzIGRlZmxhdGUgY2FsbCAqL1xuXG4gIHRoaXMud19zaXplID0gMDsgIC8qIExaNzcgd2luZG93IHNpemUgKDMySyBieSBkZWZhdWx0KSAqL1xuICB0aGlzLndfYml0cyA9IDA7ICAvKiBsb2cyKHdfc2l6ZSkgICg4Li4xNikgKi9cbiAgdGhpcy53X21hc2sgPSAwOyAgLyogd19zaXplIC0gMSAqL1xuXG4gIHRoaXMud2luZG93ID0gbnVsbDtcbiAgLyogU2xpZGluZyB3aW5kb3cuIElucHV0IGJ5dGVzIGFyZSByZWFkIGludG8gdGhlIHNlY29uZCBoYWxmIG9mIHRoZSB3aW5kb3csXG4gICAqIGFuZCBtb3ZlIHRvIHRoZSBmaXJzdCBoYWxmIGxhdGVyIHRvIGtlZXAgYSBkaWN0aW9uYXJ5IG9mIGF0IGxlYXN0IHdTaXplXG4gICAqIGJ5dGVzLiBXaXRoIHRoaXMgb3JnYW5pemF0aW9uLCBtYXRjaGVzIGFyZSBsaW1pdGVkIHRvIGEgZGlzdGFuY2Ugb2ZcbiAgICogd1NpemUtTUFYX01BVENIIGJ5dGVzLCBidXQgdGhpcyBlbnN1cmVzIHRoYXQgSU8gaXMgYWx3YXlzXG4gICAqIHBlcmZvcm1lZCB3aXRoIGEgbGVuZ3RoIG11bHRpcGxlIG9mIHRoZSBibG9jayBzaXplLlxuICAgKi9cblxuICB0aGlzLndpbmRvd19zaXplID0gMDtcbiAgLyogQWN0dWFsIHNpemUgb2Ygd2luZG93OiAyKndTaXplLCBleGNlcHQgd2hlbiB0aGUgdXNlciBpbnB1dCBidWZmZXJcbiAgICogaXMgZGlyZWN0bHkgdXNlZCBhcyBzbGlkaW5nIHdpbmRvdy5cbiAgICovXG5cbiAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgLyogTGluayB0byBvbGRlciBzdHJpbmcgd2l0aCBzYW1lIGhhc2ggaW5kZXguIFRvIGxpbWl0IHRoZSBzaXplIG9mIHRoaXNcbiAgICogYXJyYXkgdG8gNjRLLCB0aGlzIGxpbmsgaXMgbWFpbnRhaW5lZCBvbmx5IGZvciB0aGUgbGFzdCAzMksgc3RyaW5ncy5cbiAgICogQW4gaW5kZXggaW4gdGhpcyBhcnJheSBpcyB0aHVzIGEgd2luZG93IGluZGV4IG1vZHVsbyAzMksuXG4gICAqL1xuXG4gIHRoaXMuaGVhZCA9IG51bGw7ICAgLyogSGVhZHMgb2YgdGhlIGhhc2ggY2hhaW5zIG9yIE5JTC4gKi9cblxuICB0aGlzLmluc19oID0gMDsgICAgICAgLyogaGFzaCBpbmRleCBvZiBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgdGhpcy5oYXNoX3NpemUgPSAwOyAgIC8qIG51bWJlciBvZiBlbGVtZW50cyBpbiBoYXNoIHRhYmxlICovXG4gIHRoaXMuaGFzaF9iaXRzID0gMDsgICAvKiBsb2cyKGhhc2hfc2l6ZSkgKi9cbiAgdGhpcy5oYXNoX21hc2sgPSAwOyAgIC8qIGhhc2hfc2l6ZS0xICovXG5cbiAgdGhpcy5oYXNoX3NoaWZ0ID0gMDtcbiAgLyogTnVtYmVyIG9mIGJpdHMgYnkgd2hpY2ggaW5zX2ggbXVzdCBiZSBzaGlmdGVkIGF0IGVhY2ggaW5wdXRcbiAgICogc3RlcC4gSXQgbXVzdCBiZSBzdWNoIHRoYXQgYWZ0ZXIgTUlOX01BVENIIHN0ZXBzLCB0aGUgb2xkZXN0XG4gICAqIGJ5dGUgbm8gbG9uZ2VyIHRha2VzIHBhcnQgaW4gdGhlIGhhc2gga2V5LCB0aGF0IGlzOlxuICAgKiAgIGhhc2hfc2hpZnQgKiBNSU5fTUFUQ0ggPj0gaGFzaF9iaXRzXG4gICAqL1xuXG4gIHRoaXMuYmxvY2tfc3RhcnQgPSAwO1xuICAvKiBXaW5kb3cgcG9zaXRpb24gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCBvdXRwdXQgYmxvY2suIEdldHNcbiAgICogbmVnYXRpdmUgd2hlbiB0aGUgd2luZG93IGlzIG1vdmVkIGJhY2t3YXJkcy5cbiAgICovXG5cbiAgdGhpcy5tYXRjaF9sZW5ndGggPSAwOyAgICAgIC8qIGxlbmd0aCBvZiBiZXN0IG1hdGNoICovXG4gIHRoaXMucHJldl9tYXRjaCA9IDA7ICAgICAgICAvKiBwcmV2aW91cyBtYXRjaCAqL1xuICB0aGlzLm1hdGNoX2F2YWlsYWJsZSA9IDA7ICAgLyogc2V0IGlmIHByZXZpb3VzIG1hdGNoIGV4aXN0cyAqL1xuICB0aGlzLnN0cnN0YXJ0ID0gMDsgICAgICAgICAgLyogc3RhcnQgb2Ygc3RyaW5nIHRvIGluc2VydCAqL1xuICB0aGlzLm1hdGNoX3N0YXJ0ID0gMDsgICAgICAgLyogc3RhcnQgb2YgbWF0Y2hpbmcgc3RyaW5nICovXG4gIHRoaXMubG9va2FoZWFkID0gMDsgICAgICAgICAvKiBudW1iZXIgb2YgdmFsaWQgYnl0ZXMgYWhlYWQgaW4gd2luZG93ICovXG5cbiAgdGhpcy5wcmV2X2xlbmd0aCA9IDA7XG4gIC8qIExlbmd0aCBvZiB0aGUgYmVzdCBtYXRjaCBhdCBwcmV2aW91cyBzdGVwLiBNYXRjaGVzIG5vdCBncmVhdGVyIHRoYW4gdGhpc1xuICAgKiBhcmUgZGlzY2FyZGVkLiBUaGlzIGlzIHVzZWQgaW4gdGhlIGxhenkgbWF0Y2ggZXZhbHVhdGlvbi5cbiAgICovXG5cbiAgdGhpcy5tYXhfY2hhaW5fbGVuZ3RoID0gMDtcbiAgLyogVG8gc3BlZWQgdXAgZGVmbGF0aW9uLCBoYXNoIGNoYWlucyBhcmUgbmV2ZXIgc2VhcmNoZWQgYmV5b25kIHRoaXNcbiAgICogbGVuZ3RoLiAgQSBoaWdoZXIgbGltaXQgaW1wcm92ZXMgY29tcHJlc3Npb24gcmF0aW8gYnV0IGRlZ3JhZGVzIHRoZVxuICAgKiBzcGVlZC5cbiAgICovXG5cbiAgdGhpcy5tYXhfbGF6eV9tYXRjaCA9IDA7XG4gIC8qIEF0dGVtcHQgdG8gZmluZCBhIGJldHRlciBtYXRjaCBvbmx5IHdoZW4gdGhlIGN1cnJlbnQgbWF0Y2ggaXMgc3RyaWN0bHlcbiAgICogc21hbGxlciB0aGFuIHRoaXMgdmFsdWUuIFRoaXMgbWVjaGFuaXNtIGlzIHVzZWQgb25seSBmb3IgY29tcHJlc3Npb25cbiAgICogbGV2ZWxzID49IDQuXG4gICAqL1xuICAvLyBUaGF0J3MgYWxpYXMgdG8gbWF4X2xhenlfbWF0Y2gsIGRvbid0IHVzZSBkaXJlY3RseVxuICAvL3RoaXMubWF4X2luc2VydF9sZW5ndGggPSAwO1xuICAvKiBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIG5vdFxuICAgKiBncmVhdGVyIHRoYW4gdGhpcyBsZW5ndGguIFRoaXMgc2F2ZXMgdGltZSBidXQgZGVncmFkZXMgY29tcHJlc3Npb24uXG4gICAqIG1heF9pbnNlcnRfbGVuZ3RoIGlzIHVzZWQgb25seSBmb3IgY29tcHJlc3Npb24gbGV2ZWxzIDw9IDMuXG4gICAqL1xuXG4gIHRoaXMubGV2ZWwgPSAwOyAgICAgLyogY29tcHJlc3Npb24gbGV2ZWwgKDEuLjkpICovXG4gIHRoaXMuc3RyYXRlZ3kgPSAwOyAgLyogZmF2b3Igb3IgZm9yY2UgSHVmZm1hbiBjb2RpbmcqL1xuXG4gIHRoaXMuZ29vZF9tYXRjaCA9IDA7XG4gIC8qIFVzZSBhIGZhc3RlciBzZWFyY2ggd2hlbiB0aGUgcHJldmlvdXMgbWF0Y2ggaXMgbG9uZ2VyIHRoYW4gdGhpcyAqL1xuXG4gIHRoaXMubmljZV9tYXRjaCA9IDA7IC8qIFN0b3Agc2VhcmNoaW5nIHdoZW4gY3VycmVudCBtYXRjaCBleGNlZWRzIHRoaXMgKi9cblxuICAgICAgICAgICAgICAvKiB1c2VkIGJ5IHRyZWVzLmM6ICovXG5cbiAgLyogRGlkbid0IHVzZSBjdF9kYXRhIHR5cGVkZWYgYmVsb3cgdG8gc3VwcHJlc3MgY29tcGlsZXIgd2FybmluZyAqL1xuXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2x0cmVlW0hFQVBfU0laRV07ICAgLyogbGl0ZXJhbCBhbmQgbGVuZ3RoIHRyZWUgKi9cbiAgLy8gc3RydWN0IGN0X2RhdGFfcyBkeW5fZHRyZWVbMipEX0NPREVTKzFdOyAvKiBkaXN0YW5jZSB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgYmxfdHJlZVsyKkJMX0NPREVTKzFdOyAgLyogSHVmZm1hbiB0cmVlIGZvciBiaXQgbGVuZ3RocyAqL1xuXG4gIC8vIFVzZSBmbGF0IGFycmF5IG9mIERPVUJMRSBzaXplLCB3aXRoIGludGVybGVhdmVkIGZhdGEsXG4gIC8vIGJlY2F1c2UgSlMgZG9lcyBub3Qgc3VwcG9ydCBlZmZlY3RpdmVcbiAgdGhpcy5keW5fbHRyZWUgID0gbmV3IHV0aWxzLkJ1ZjE2KEhFQVBfU0laRSAqIDIpO1xuICB0aGlzLmR5bl9kdHJlZSAgPSBuZXcgdXRpbHMuQnVmMTYoKDIgKiBEX0NPREVTICsgMSkgKiAyKTtcbiAgdGhpcy5ibF90cmVlICAgID0gbmV3IHV0aWxzLkJ1ZjE2KCgyICogQkxfQ09ERVMgKyAxKSAqIDIpO1xuICB6ZXJvKHRoaXMuZHluX2x0cmVlKTtcbiAgemVybyh0aGlzLmR5bl9kdHJlZSk7XG4gIHplcm8odGhpcy5ibF90cmVlKTtcblxuICB0aGlzLmxfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgbGl0ZXJhbCB0cmVlICovXG4gIHRoaXMuZF9kZXNjICAgPSBudWxsOyAgICAgICAgIC8qIGRlc2MuIGZvciBkaXN0YW5jZSB0cmVlICovXG4gIHRoaXMuYmxfZGVzYyAgPSBudWxsOyAgICAgICAgIC8qIGRlc2MuIGZvciBiaXQgbGVuZ3RoIHRyZWUgKi9cblxuICAvL3VzaCBibF9jb3VudFtNQVhfQklUUysxXTtcbiAgdGhpcy5ibF9jb3VudCA9IG5ldyB1dGlscy5CdWYxNihNQVhfQklUUyArIDEpO1xuICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoIGZvciBhbiBvcHRpbWFsIHRyZWUgKi9cblxuICAvL2ludCBoZWFwWzIqTF9DT0RFUysxXTsgICAgICAvKiBoZWFwIHVzZWQgdG8gYnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgKi9cbiAgdGhpcy5oZWFwID0gbmV3IHV0aWxzLkJ1ZjE2KDIgKiBMX0NPREVTICsgMSk7ICAvKiBoZWFwIHVzZWQgdG8gYnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgKi9cbiAgemVybyh0aGlzLmhlYXApO1xuXG4gIHRoaXMuaGVhcF9sZW4gPSAwOyAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgaGVhcCAqL1xuICB0aGlzLmhlYXBfbWF4ID0gMDsgICAgICAgICAgICAgICAvKiBlbGVtZW50IG9mIGxhcmdlc3QgZnJlcXVlbmN5ICovXG4gIC8qIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqIFRoZSBzYW1lIGhlYXAgYXJyYXkgaXMgdXNlZCB0byBidWlsZCBhbGwgdHJlZXMuXG4gICAqL1xuXG4gIHRoaXMuZGVwdGggPSBuZXcgdXRpbHMuQnVmMTYoMiAqIExfQ09ERVMgKyAxKTsgLy91Y2ggZGVwdGhbMipMX0NPREVTKzFdO1xuICB6ZXJvKHRoaXMuZGVwdGgpO1xuICAvKiBEZXB0aCBvZiBlYWNoIHN1YnRyZWUgdXNlZCBhcyB0aWUgYnJlYWtlciBmb3IgdHJlZXMgb2YgZXF1YWwgZnJlcXVlbmN5XG4gICAqL1xuXG4gIHRoaXMubF9idWYgPSAwOyAgICAgICAgICAvKiBidWZmZXIgaW5kZXggZm9yIGxpdGVyYWxzIG9yIGxlbmd0aHMgKi9cblxuICB0aGlzLmxpdF9idWZzaXplID0gMDtcbiAgLyogU2l6ZSBvZiBtYXRjaCBidWZmZXIgZm9yIGxpdGVyYWxzL2xlbmd0aHMuICBUaGVyZSBhcmUgNCByZWFzb25zIGZvclxuICAgKiBsaW1pdGluZyBsaXRfYnVmc2l6ZSB0byA2NEs6XG4gICAqICAgLSBmcmVxdWVuY2llcyBjYW4gYmUga2VwdCBpbiAxNiBiaXQgY291bnRlcnNcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciB0aGUgZmlyc3QgYmxvY2ssIGFsbCBpbnB1dFxuICAgKiAgICAgZGF0YSBpcyBzdGlsbCBpbiB0aGUgd2luZG93IHNvIHdlIGNhbiBzdGlsbCBlbWl0IGEgc3RvcmVkIGJsb2NrIGV2ZW5cbiAgICogICAgIHdoZW4gaW5wdXQgY29tZXMgZnJvbSBzdGFuZGFyZCBpbnB1dC4gIChUaGlzIGNhbiBhbHNvIGJlIGRvbmUgZm9yXG4gICAqICAgICBhbGwgYmxvY2tzIGlmIGxpdF9idWZzaXplIGlzIG5vdCBncmVhdGVyIHRoYW4gMzJLLilcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciBhIGZpbGUgc21hbGxlciB0aGFuIDY0Sywgd2UgY2FuXG4gICAqICAgICBldmVuIGVtaXQgYSBzdG9yZWQgZmlsZSBpbnN0ZWFkIG9mIGEgc3RvcmVkIGJsb2NrIChzYXZpbmcgNSBieXRlcykuXG4gICAqICAgICBUaGlzIGlzIGFwcGxpY2FibGUgb25seSBmb3IgemlwIChub3QgZ3ppcCBvciB6bGliKS5cbiAgICogICAtIGNyZWF0aW5nIG5ldyBIdWZmbWFuIHRyZWVzIGxlc3MgZnJlcXVlbnRseSBtYXkgbm90IHByb3ZpZGUgZmFzdFxuICAgKiAgICAgYWRhcHRhdGlvbiB0byBjaGFuZ2VzIGluIHRoZSBpbnB1dCBkYXRhIHN0YXRpc3RpY3MuIChUYWtlIGZvclxuICAgKiAgICAgZXhhbXBsZSBhIGJpbmFyeSBmaWxlIHdpdGggcG9vcmx5IGNvbXByZXNzaWJsZSBjb2RlIGZvbGxvd2VkIGJ5XG4gICAqICAgICBhIGhpZ2hseSBjb21wcmVzc2libGUgc3RyaW5nIHRhYmxlLikgU21hbGxlciBidWZmZXIgc2l6ZXMgZ2l2ZVxuICAgKiAgICAgZmFzdCBhZGFwdGF0aW9uIGJ1dCBoYXZlIG9mIGNvdXJzZSB0aGUgb3ZlcmhlYWQgb2YgdHJhbnNtaXR0aW5nXG4gICAqICAgICB0cmVlcyBtb3JlIGZyZXF1ZW50bHkuXG4gICAqICAgLSBJIGNhbid0IGNvdW50IGFib3ZlIDRcbiAgICovXG5cbiAgdGhpcy5sYXN0X2xpdCA9IDA7ICAgICAgLyogcnVubmluZyBpbmRleCBpbiBsX2J1ZiAqL1xuXG4gIHRoaXMuZF9idWYgPSAwO1xuICAvKiBCdWZmZXIgaW5kZXggZm9yIGRpc3RhbmNlcy4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIGRfYnVmIGFuZCBsX2J1ZiBoYXZlXG4gICAqIHRoZSBzYW1lIG51bWJlciBvZiBlbGVtZW50cy4gVG8gdXNlIGRpZmZlcmVudCBsZW5ndGhzLCBhbiBleHRyYSBmbGFnXG4gICAqIGFycmF5IHdvdWxkIGJlIG5lY2Vzc2FyeS5cbiAgICovXG5cbiAgdGhpcy5vcHRfbGVuID0gMDsgICAgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggb3B0aW1hbCB0cmVlcyAqL1xuICB0aGlzLnN0YXRpY19sZW4gPSAwOyAgICAvKiBiaXQgbGVuZ3RoIG9mIGN1cnJlbnQgYmxvY2sgd2l0aCBzdGF0aWMgdHJlZXMgKi9cbiAgdGhpcy5tYXRjaGVzID0gMDsgICAgICAgLyogbnVtYmVyIG9mIHN0cmluZyBtYXRjaGVzIGluIGN1cnJlbnQgYmxvY2sgKi9cbiAgdGhpcy5pbnNlcnQgPSAwOyAgICAgICAgLyogYnl0ZXMgYXQgZW5kIG9mIHdpbmRvdyBsZWZ0IHRvIGluc2VydCAqL1xuXG5cbiAgdGhpcy5iaV9idWYgPSAwO1xuICAvKiBPdXRwdXQgYnVmZmVyLiBiaXRzIGFyZSBpbnNlcnRlZCBzdGFydGluZyBhdCB0aGUgYm90dG9tIChsZWFzdFxuICAgKiBzaWduaWZpY2FudCBiaXRzKS5cbiAgICovXG4gIHRoaXMuYmlfdmFsaWQgPSAwO1xuICAvKiBOdW1iZXIgb2YgdmFsaWQgYml0cyBpbiBiaV9idWYuICBBbGwgYml0cyBhYm92ZSB0aGUgbGFzdCB2YWxpZCBiaXRcbiAgICogYXJlIGFsd2F5cyB6ZXJvLlxuICAgKi9cblxuICAvLyBVc2VkIGZvciB3aW5kb3cgbWVtb3J5IGluaXQuIFdlIHNhZmVseSBpZ25vcmUgaXQgZm9yIEpTLiBUaGF0IG1ha2VzXG4gIC8vIHNlbnNlIG9ubHkgZm9yIHBvaW50ZXJzIGFuZCBtZW1vcnkgY2hlY2sgdG9vbHMuXG4gIC8vdGhpcy5oaWdoX3dhdGVyID0gMDtcbiAgLyogSGlnaCB3YXRlciBtYXJrIG9mZnNldCBpbiB3aW5kb3cgZm9yIGluaXRpYWxpemVkIGJ5dGVzIC0tIGJ5dGVzIGFib3ZlXG4gICAqIHRoaXMgYXJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayB3YXJuaW5ncyB3aGVuXG4gICAqIGxvbmdlc3QgbWF0Y2ggcm91dGluZXMgYWNjZXNzIGJ5dGVzIHBhc3QgdGhlIGlucHV0LiAgVGhpcyBpcyB0aGVuXG4gICAqIHVwZGF0ZWQgdG8gdGhlIG5ldyBoaWdoIHdhdGVyIG1hcmsuXG4gICAqL1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVSZXNldEtlZXAoc3RybSkge1xuICB2YXIgcztcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IDA7XG4gIHN0cm0uZGF0YV90eXBlID0gWl9VTktOT1dOO1xuXG4gIHMgPSBzdHJtLnN0YXRlO1xuICBzLnBlbmRpbmcgPSAwO1xuICBzLnBlbmRpbmdfb3V0ID0gMDtcblxuICBpZiAocy53cmFwIDwgMCkge1xuICAgIHMud3JhcCA9IC1zLndyYXA7XG4gICAgLyogd2FzIG1hZGUgbmVnYXRpdmUgYnkgZGVmbGF0ZSguLi4sIFpfRklOSVNIKTsgKi9cbiAgfVxuICBzLnN0YXR1cyA9IChzLndyYXAgPyBJTklUX1NUQVRFIDogQlVTWV9TVEFURSk7XG4gIHN0cm0uYWRsZXIgPSAocy53cmFwID09PSAyKSA/XG4gICAgMCAgLy8gY3JjMzIoMCwgWl9OVUxMLCAwKVxuICA6XG4gICAgMTsgLy8gYWRsZXIzMigwLCBaX05VTEwsIDApXG4gIHMubGFzdF9mbHVzaCA9IFpfTk9fRkxVU0g7XG4gIHRyZWVzLl90cl9pbml0KHMpO1xuICByZXR1cm4gWl9PSztcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlUmVzZXQoc3RybSkge1xuICB2YXIgcmV0ID0gZGVmbGF0ZVJlc2V0S2VlcChzdHJtKTtcbiAgaWYgKHJldCA9PT0gWl9PSykge1xuICAgIGxtX2luaXQoc3RybS5zdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlU2V0SGVhZGVyKHN0cm0sIGhlYWQpIHtcbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBpZiAoc3RybS5zdGF0ZS53cmFwICE9PSAyKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBzdHJtLnN0YXRlLmd6aGVhZCA9IGhlYWQ7XG4gIHJldHVybiBaX09LO1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVJbml0MihzdHJtLCBsZXZlbCwgbWV0aG9kLCB3aW5kb3dCaXRzLCBtZW1MZXZlbCwgc3RyYXRlZ3kpIHtcbiAgaWYgKCFzdHJtKSB7IC8vID09PSBaX05VTExcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cbiAgdmFyIHdyYXAgPSAxO1xuXG4gIGlmIChsZXZlbCA9PT0gWl9ERUZBVUxUX0NPTVBSRVNTSU9OKSB7XG4gICAgbGV2ZWwgPSA2O1xuICB9XG5cbiAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7IC8qIHN1cHByZXNzIHpsaWIgd3JhcHBlciAqL1xuICAgIHdyYXAgPSAwO1xuICAgIHdpbmRvd0JpdHMgPSAtd2luZG93Qml0cztcbiAgfVxuXG4gIGVsc2UgaWYgKHdpbmRvd0JpdHMgPiAxNSkge1xuICAgIHdyYXAgPSAyOyAgICAgICAgICAgLyogd3JpdGUgZ3ppcCB3cmFwcGVyIGluc3RlYWQgKi9cbiAgICB3aW5kb3dCaXRzIC09IDE2O1xuICB9XG5cblxuICBpZiAobWVtTGV2ZWwgPCAxIHx8IG1lbUxldmVsID4gTUFYX01FTV9MRVZFTCB8fCBtZXRob2QgIT09IFpfREVGTEFURUQgfHxcbiAgICB3aW5kb3dCaXRzIDwgOCB8fCB3aW5kb3dCaXRzID4gMTUgfHwgbGV2ZWwgPCAwIHx8IGxldmVsID4gOSB8fFxuICAgIHN0cmF0ZWd5IDwgMCB8fCBzdHJhdGVneSA+IFpfRklYRUQpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG5cbiAgaWYgKHdpbmRvd0JpdHMgPT09IDgpIHtcbiAgICB3aW5kb3dCaXRzID0gOTtcbiAgfVxuICAvKiB1bnRpbCAyNTYtYnl0ZSB3aW5kb3cgYnVnIGZpeGVkICovXG5cbiAgdmFyIHMgPSBuZXcgRGVmbGF0ZVN0YXRlKCk7XG5cbiAgc3RybS5zdGF0ZSA9IHM7XG4gIHMuc3RybSA9IHN0cm07XG5cbiAgcy53cmFwID0gd3JhcDtcbiAgcy5nemhlYWQgPSBudWxsO1xuICBzLndfYml0cyA9IHdpbmRvd0JpdHM7XG4gIHMud19zaXplID0gMSA8PCBzLndfYml0cztcbiAgcy53X21hc2sgPSBzLndfc2l6ZSAtIDE7XG5cbiAgcy5oYXNoX2JpdHMgPSBtZW1MZXZlbCArIDc7XG4gIHMuaGFzaF9zaXplID0gMSA8PCBzLmhhc2hfYml0cztcbiAgcy5oYXNoX21hc2sgPSBzLmhhc2hfc2l6ZSAtIDE7XG4gIHMuaGFzaF9zaGlmdCA9IH5+KChzLmhhc2hfYml0cyArIE1JTl9NQVRDSCAtIDEpIC8gTUlOX01BVENIKTtcblxuICBzLndpbmRvdyA9IG5ldyB1dGlscy5CdWY4KHMud19zaXplICogMik7XG4gIHMuaGVhZCA9IG5ldyB1dGlscy5CdWYxNihzLmhhc2hfc2l6ZSk7XG4gIHMucHJldiA9IG5ldyB1dGlscy5CdWYxNihzLndfc2l6ZSk7XG5cbiAgLy8gRG9uJ3QgbmVlZCBtZW0gaW5pdCBtYWdpYyBmb3IgSlMuXG4gIC8vcy5oaWdoX3dhdGVyID0gMDsgIC8qIG5vdGhpbmcgd3JpdHRlbiB0byBzLT53aW5kb3cgeWV0ICovXG5cbiAgcy5saXRfYnVmc2l6ZSA9IDEgPDwgKG1lbUxldmVsICsgNik7IC8qIDE2SyBlbGVtZW50cyBieSBkZWZhdWx0ICovXG5cbiAgcy5wZW5kaW5nX2J1Zl9zaXplID0gcy5saXRfYnVmc2l6ZSAqIDQ7XG5cbiAgLy9vdmVybGF5ID0gKHVzaGYgKikgWkFMTE9DKHN0cm0sIHMtPmxpdF9idWZzaXplLCBzaXplb2YodXNoKSsyKTtcbiAgLy9zLT5wZW5kaW5nX2J1ZiA9ICh1Y2hmICopIG92ZXJsYXk7XG4gIHMucGVuZGluZ19idWYgPSBuZXcgdXRpbHMuQnVmOChzLnBlbmRpbmdfYnVmX3NpemUpO1xuXG4gIC8vIEl0IGlzIG9mZnNldCBmcm9tIGBzLnBlbmRpbmdfYnVmYCAoc2l6ZSBpcyBgcy5saXRfYnVmc2l6ZSAqIDJgKVxuICAvL3MtPmRfYnVmID0gb3ZlcmxheSArIHMtPmxpdF9idWZzaXplL3NpemVvZih1c2gpO1xuICBzLmRfYnVmID0gMSAqIHMubGl0X2J1ZnNpemU7XG5cbiAgLy9zLT5sX2J1ZiA9IHMtPnBlbmRpbmdfYnVmICsgKDErc2l6ZW9mKHVzaCkpKnMtPmxpdF9idWZzaXplO1xuICBzLmxfYnVmID0gKDEgKyAyKSAqIHMubGl0X2J1ZnNpemU7XG5cbiAgcy5sZXZlbCA9IGxldmVsO1xuICBzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIHMubWV0aG9kID0gbWV0aG9kO1xuXG4gIHJldHVybiBkZWZsYXRlUmVzZXQoc3RybSk7XG59XG5cbmZ1bmN0aW9uIGRlZmxhdGVJbml0KHN0cm0sIGxldmVsKSB7XG4gIHJldHVybiBkZWZsYXRlSW5pdDIoc3RybSwgbGV2ZWwsIFpfREVGTEFURUQsIE1BWF9XQklUUywgREVGX01FTV9MRVZFTCwgWl9ERUZBVUxUX1NUUkFURUdZKTtcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlKHN0cm0sIGZsdXNoKSB7XG4gIHZhciBvbGRfZmx1c2gsIHM7XG4gIHZhciBiZWcsIHZhbDsgLy8gZm9yIGd6aXAgaGVhZGVyIHdyaXRlIG9ubHlcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgfHxcbiAgICBmbHVzaCA+IFpfQkxPQ0sgfHwgZmx1c2ggPCAwKSB7XG4gICAgcmV0dXJuIHN0cm0gPyBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpIDogWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzID0gc3RybS5zdGF0ZTtcblxuICBpZiAoIXN0cm0ub3V0cHV0IHx8XG4gICAgICAoIXN0cm0uaW5wdXQgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkgfHxcbiAgICAgIChzLnN0YXR1cyA9PT0gRklOSVNIX1NUQVRFICYmIGZsdXNoICE9PSBaX0ZJTklTSCkpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIChzdHJtLmF2YWlsX291dCA9PT0gMCkgPyBaX0JVRl9FUlJPUiA6IFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHMuc3RybSA9IHN0cm07IC8qIGp1c3QgaW4gY2FzZSAqL1xuICBvbGRfZmx1c2ggPSBzLmxhc3RfZmx1c2g7XG4gIHMubGFzdF9mbHVzaCA9IGZsdXNoO1xuXG4gIC8qIFdyaXRlIHRoZSBoZWFkZXIgKi9cbiAgaWYgKHMuc3RhdHVzID09PSBJTklUX1NUQVRFKSB7XG5cbiAgICBpZiAocy53cmFwID09PSAyKSB7IC8vIEdaSVAgaGVhZGVyXG4gICAgICBzdHJtLmFkbGVyID0gMDsgIC8vY3JjMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgICBwdXRfYnl0ZShzLCAzMSk7XG4gICAgICBwdXRfYnl0ZShzLCAxMzkpO1xuICAgICAgcHV0X2J5dGUocywgOCk7XG4gICAgICBpZiAoIXMuZ3poZWFkKSB7IC8vIHMtPmd6aGVhZCA9PSBaX05VTExcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmxldmVsID09PSA5ID8gMiA6XG4gICAgICAgICAgICAgICAgICAgIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyID9cbiAgICAgICAgICAgICAgICAgICAgIDQgOiAwKSk7XG4gICAgICAgIHB1dF9ieXRlKHMsIE9TX0NPREUpO1xuICAgICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRleHQgPyAxIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAocy5nemhlYWQuaGNyYyA/IDIgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICghcy5nemhlYWQuZXh0cmEgPyAwIDogNCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLm5hbWUgPyAwIDogOCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmNvbW1lbnQgPyAwIDogMTYpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQudGltZSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiAxNikgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gMjQpICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIHMubGV2ZWwgPT09IDkgPyAyIDpcbiAgICAgICAgICAgICAgICAgICAgKHMuc3RyYXRlZ3kgPj0gWl9IVUZGTUFOX09OTFkgfHwgcy5sZXZlbCA8IDIgP1xuICAgICAgICAgICAgICAgICAgICAgNCA6IDApKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQub3MgJiAweGZmKTtcbiAgICAgICAgaWYgKHMuZ3poZWFkLmV4dHJhICYmIHMuZ3poZWFkLmV4dHJhLmxlbmd0aCkge1xuICAgICAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLmV4dHJhLmxlbmd0aCAmIDB4ZmYpO1xuICAgICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC5leHRyYS5sZW5ndGggPj4gOCkgJiAweGZmKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcsIDApO1xuICAgICAgICB9XG4gICAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgICAgIHMuc3RhdHVzID0gRVhUUkFfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgLy8gREVGTEFURSBoZWFkZXJcbiAgICB7XG4gICAgICB2YXIgaGVhZGVyID0gKFpfREVGTEFURUQgKyAoKHMud19iaXRzIC0gOCkgPDwgNCkpIDw8IDg7XG4gICAgICB2YXIgbGV2ZWxfZmxhZ3MgPSAtMTtcblxuICAgICAgaWYgKHMuc3RyYXRlZ3kgPj0gWl9IVUZGTUFOX09OTFkgfHwgcy5sZXZlbCA8IDIpIHtcbiAgICAgICAgbGV2ZWxfZmxhZ3MgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzLmxldmVsIDwgNikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPT09IDYpIHtcbiAgICAgICAgbGV2ZWxfZmxhZ3MgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWxfZmxhZ3MgPSAzO1xuICAgICAgfVxuICAgICAgaGVhZGVyIHw9IChsZXZlbF9mbGFncyA8PCA2KTtcbiAgICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7IGhlYWRlciB8PSBQUkVTRVRfRElDVDsgfVxuICAgICAgaGVhZGVyICs9IDMxIC0gKGhlYWRlciAlIDMxKTtcblxuICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgICAgcHV0U2hvcnRNU0IocywgaGVhZGVyKTtcblxuICAgICAgLyogU2F2ZSB0aGUgYWRsZXIzMiBvZiB0aGUgcHJlc2V0IGRpY3Rpb25hcnk6ICovXG4gICAgICBpZiAocy5zdHJzdGFydCAhPT0gMCkge1xuICAgICAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyID4+PiAxNik7XG4gICAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgJiAweGZmZmYpO1xuICAgICAgfVxuICAgICAgc3RybS5hZGxlciA9IDE7IC8vIGFkbGVyMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgfVxuICB9XG5cbi8vI2lmZGVmIEdaSVBcbiAgaWYgKHMuc3RhdHVzID09PSBFWFRSQV9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5leHRyYS8qICE9IFpfTlVMTCovKSB7XG4gICAgICBiZWcgPSBzLnBlbmRpbmc7ICAvKiBzdGFydCBvZiBieXRlcyB0byB1cGRhdGUgY3JjICovXG5cbiAgICAgIHdoaWxlIChzLmd6aW5kZXggPCAocy5nemhlYWQuZXh0cmEubGVuZ3RoICYgMHhmZmZmKSkge1xuICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgYmVnID0gcy5wZW5kaW5nO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLmV4dHJhW3MuZ3ppbmRleF0gJiAweGZmKTtcbiAgICAgICAgcy5nemluZGV4Kys7XG4gICAgICB9XG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmd6aW5kZXggPT09IHMuZ3poZWFkLmV4dHJhLmxlbmd0aCkge1xuICAgICAgICBzLmd6aW5kZXggPSAwO1xuICAgICAgICBzLnN0YXR1cyA9IE5BTUVfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBOQU1FX1NUQVRFO1xuICAgIH1cbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IE5BTUVfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQubmFtZS8qICE9IFpfTlVMTCovKSB7XG4gICAgICBiZWcgPSBzLnBlbmRpbmc7ICAvKiBzdGFydCBvZiBieXRlcyB0byB1cGRhdGUgY3JjICovXG4gICAgICAvL2ludCB2YWw7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgICAgIGJlZyA9IHMucGVuZGluZztcbiAgICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICAgIHZhbCA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSlMgc3BlY2lmaWM6IGxpdHRsZSBtYWdpYyB0byBhZGQgemVybyB0ZXJtaW5hdG9yIHRvIGVuZCBvZiBzdHJpbmdcbiAgICAgICAgaWYgKHMuZ3ppbmRleCA8IHMuZ3poZWFkLm5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsID0gcy5nemhlYWQubmFtZS5jaGFyQ29kZUF0KHMuZ3ppbmRleCsrKSAmIDB4ZmY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwdXRfYnl0ZShzLCB2YWwpO1xuICAgICAgfSB3aGlsZSAodmFsICE9PSAwKTtcblxuICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsID09PSAwKSB7XG4gICAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgICAgIHMuc3RhdHVzID0gQ09NTUVOVF9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IENPTU1FTlRfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gQ09NTUVOVF9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5jb21tZW50LyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIC8vaW50IHZhbDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgYmVnID0gcy5wZW5kaW5nO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgICAgdmFsID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBzcGVjaWZpYzogbGl0dGxlIG1hZ2ljIHRvIGFkZCB6ZXJvIHRlcm1pbmF0b3IgdG8gZW5kIG9mIHN0cmluZ1xuICAgICAgICBpZiAocy5nemluZGV4IDwgcy5nemhlYWQuY29tbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB2YWwgPSBzLmd6aGVhZC5jb21tZW50LmNoYXJDb2RlQXQocy5nemluZGV4KyspICYgMHhmZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHZhbCk7XG4gICAgICB9IHdoaWxlICh2YWwgIT09IDApO1xuXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IDApIHtcbiAgICAgICAgcy5zdGF0dXMgPSBIQ1JDX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gSENSQ19TVEFURTtcbiAgICB9XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBIQ1JDX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmhjcmMpIHtcbiAgICAgIGlmIChzLnBlbmRpbmcgKyAyID4gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICB9XG4gICAgICBpZiAocy5wZW5kaW5nICsgMiA8PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgcHV0X2J5dGUocywgc3RybS5hZGxlciAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICBzdHJtLmFkbGVyID0gMDsgLy9jcmMzMigwTCwgWl9OVUxMLCAwKTtcbiAgICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcbiAgICB9XG4gIH1cbi8vI2VuZGlmXG5cbiAgLyogRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZSAqL1xuICBpZiAocy5wZW5kaW5nICE9PSAwKSB7XG4gICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIC8qIFNpbmNlIGF2YWlsX291dCBpcyAwLCBkZWZsYXRlIHdpbGwgYmUgY2FsbGVkIGFnYWluIHdpdGhcbiAgICAgICAqIG1vcmUgb3V0cHV0IHNwYWNlLCBidXQgcG9zc2libHkgd2l0aCBib3RoIHBlbmRpbmcgYW5kXG4gICAgICAgKiBhdmFpbF9pbiBlcXVhbCB0byB6ZXJvLiBUaGVyZSB3b24ndCBiZSBhbnl0aGluZyB0byBkbyxcbiAgICAgICAqIGJ1dCB0aGlzIGlzIG5vdCBhbiBlcnJvciBzaXR1YXRpb24gc28gbWFrZSBzdXJlIHdlXG4gICAgICAgKiByZXR1cm4gT0sgaW5zdGVhZCBvZiBCVUZfRVJST1IgYXQgbmV4dCBjYWxsIG9mIGRlZmxhdGU6XG4gICAgICAgKi9cbiAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgcmV0dXJuIFpfT0s7XG4gICAgfVxuXG4gICAgLyogTWFrZSBzdXJlIHRoZXJlIGlzIHNvbWV0aGluZyB0byBkbyBhbmQgYXZvaWQgZHVwbGljYXRlIGNvbnNlY3V0aXZlXG4gICAgICogZmx1c2hlcy4gRm9yIHJlcGVhdGVkIGFuZCB1c2VsZXNzIGNhbGxzIHdpdGggWl9GSU5JU0gsIHdlIGtlZXBcbiAgICAgKiByZXR1cm5pbmcgWl9TVFJFQU1fRU5EIGluc3RlYWQgb2YgWl9CVUZfRVJST1IuXG4gICAgICovXG4gIH0gZWxzZSBpZiAoc3RybS5hdmFpbF9pbiA9PT0gMCAmJiByYW5rKGZsdXNoKSA8PSByYW5rKG9sZF9mbHVzaCkgJiZcbiAgICBmbHVzaCAhPT0gWl9GSU5JU0gpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfQlVGX0VSUk9SKTtcbiAgfVxuXG4gIC8qIFVzZXIgbXVzdCBub3QgcHJvdmlkZSBtb3JlIGlucHV0IGFmdGVyIHRoZSBmaXJzdCBGSU5JU0g6ICovXG4gIGlmIChzLnN0YXR1cyA9PT0gRklOSVNIX1NUQVRFICYmIHN0cm0uYXZhaWxfaW4gIT09IDApIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfQlVGX0VSUk9SKTtcbiAgfVxuXG4gIC8qIFN0YXJ0IGEgbmV3IGJsb2NrIG9yIGNvbnRpbnVlIHRoZSBjdXJyZW50IG9uZS5cbiAgICovXG4gIGlmIChzdHJtLmF2YWlsX2luICE9PSAwIHx8IHMubG9va2FoZWFkICE9PSAwIHx8XG4gICAgKGZsdXNoICE9PSBaX05PX0ZMVVNIICYmIHMuc3RhdHVzICE9PSBGSU5JU0hfU1RBVEUpKSB7XG4gICAgdmFyIGJzdGF0ZSA9IChzLnN0cmF0ZWd5ID09PSBaX0hVRkZNQU5fT05MWSkgPyBkZWZsYXRlX2h1ZmYocywgZmx1c2gpIDpcbiAgICAgIChzLnN0cmF0ZWd5ID09PSBaX1JMRSA/IGRlZmxhdGVfcmxlKHMsIGZsdXNoKSA6XG4gICAgICAgIGNvbmZpZ3VyYXRpb25fdGFibGVbcy5sZXZlbF0uZnVuYyhzLCBmbHVzaCkpO1xuXG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfRklOSVNIX1NUQVJURUQgfHwgYnN0YXRlID09PSBCU19GSU5JU0hfRE9ORSkge1xuICAgICAgcy5zdGF0dXMgPSBGSU5JU0hfU1RBVEU7XG4gICAgfVxuICAgIGlmIChic3RhdGUgPT09IEJTX05FRURfTU9SRSB8fCBic3RhdGUgPT09IEJTX0ZJTklTSF9TVEFSVEVEKSB7XG4gICAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICAgIC8qIGF2b2lkIEJVRl9FUlJPUiBuZXh0IGNhbGwsIHNlZSBhYm92ZSAqL1xuICAgICAgfVxuICAgICAgcmV0dXJuIFpfT0s7XG4gICAgICAvKiBJZiBmbHVzaCAhPSBaX05PX0ZMVVNIICYmIGF2YWlsX291dCA9PSAwLCB0aGUgbmV4dCBjYWxsXG4gICAgICAgKiBvZiBkZWZsYXRlIHNob3VsZCB1c2UgdGhlIHNhbWUgZmx1c2ggcGFyYW1ldGVyIHRvIG1ha2Ugc3VyZVxuICAgICAgICogdGhhdCB0aGUgZmx1c2ggaXMgY29tcGxldGUuIFNvIHdlIGRvbid0IGhhdmUgdG8gb3V0cHV0IGFuXG4gICAgICAgKiBlbXB0eSBibG9jayBoZXJlLCB0aGlzIHdpbGwgYmUgZG9uZSBhdCBuZXh0IGNhbGwuIFRoaXMgYWxzb1xuICAgICAgICogZW5zdXJlcyB0aGF0IGZvciBhIHZlcnkgc21hbGwgb3V0cHV0IGJ1ZmZlciwgd2UgZW1pdCBhdCBtb3N0XG4gICAgICAgKiBvbmUgZW1wdHkgYmxvY2suXG4gICAgICAgKi9cbiAgICB9XG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfQkxPQ0tfRE9ORSkge1xuICAgICAgaWYgKGZsdXNoID09PSBaX1BBUlRJQUxfRkxVU0gpIHtcbiAgICAgICAgdHJlZXMuX3RyX2FsaWduKHMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmx1c2ggIT09IFpfQkxPQ0spIHsgLyogRlVMTF9GTFVTSCBvciBTWU5DX0ZMVVNIICovXG5cbiAgICAgICAgdHJlZXMuX3RyX3N0b3JlZF9ibG9jayhzLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIC8qIEZvciBhIGZ1bGwgZmx1c2gsIHRoaXMgZW1wdHkgYmxvY2sgd2lsbCBiZSByZWNvZ25pemVkXG4gICAgICAgICAqIGFzIGEgc3BlY2lhbCBtYXJrZXIgYnkgaW5mbGF0ZV9zeW5jKCkuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZmx1c2ggPT09IFpfRlVMTF9GTFVTSCkge1xuICAgICAgICAgIC8qKiogQ0xFQVJfSEFTSChzKTsgKioqLyAgICAgICAgICAgICAvKiBmb3JnZXQgaGlzdG9yeSAqL1xuICAgICAgICAgIHplcm8ocy5oZWFkKTsgLy8gRmlsbCB3aXRoIE5JTCAoPSAwKTtcblxuICAgICAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICAgICAgcy5zdHJzdGFydCA9IDA7XG4gICAgICAgICAgICBzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgICAgICAgICAgIHMuaW5zZXJ0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7IC8qIGF2b2lkIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwsIHNlZSBhYm92ZSAqL1xuICAgICAgICByZXR1cm4gWl9PSztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQoc3RybS0+YXZhaWxfb3V0ID4gMCwgXCJidWcyXCIpO1xuICAvL2lmIChzdHJtLmF2YWlsX291dCA8PSAwKSB7IHRocm93IG5ldyBFcnJvcihcImJ1ZzJcIik7fVxuXG4gIGlmIChmbHVzaCAhPT0gWl9GSU5JU0gpIHsgcmV0dXJuIFpfT0s7IH1cbiAgaWYgKHMud3JhcCA8PSAwKSB7IHJldHVybiBaX1NUUkVBTV9FTkQ7IH1cblxuICAvKiBXcml0ZSB0aGUgdHJhaWxlciAqL1xuICBpZiAocy53cmFwID09PSAyKSB7XG4gICAgcHV0X2J5dGUocywgc3RybS5hZGxlciAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDgpICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gMTYpICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gMjQpICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgc3RybS50b3RhbF9pbiAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLnRvdGFsX2luID4+IDgpICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gMTYpICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gMjQpICYgMHhmZik7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciA+Pj4gMTYpO1xuICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgJiAweGZmZmYpO1xuICB9XG5cbiAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgLyogSWYgYXZhaWxfb3V0IGlzIHplcm8sIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGNhbGwgZGVmbGF0ZSBhZ2FpblxuICAgKiB0byBmbHVzaCB0aGUgcmVzdC5cbiAgICovXG4gIGlmIChzLndyYXAgPiAwKSB7IHMud3JhcCA9IC1zLndyYXA7IH1cbiAgLyogd3JpdGUgdGhlIHRyYWlsZXIgb25seSBvbmNlISAqL1xuICByZXR1cm4gcy5wZW5kaW5nICE9PSAwID8gWl9PSyA6IFpfU1RSRUFNX0VORDtcbn1cblxuZnVuY3Rpb24gZGVmbGF0ZUVuZChzdHJtKSB7XG4gIHZhciBzdGF0dXM7XG5cbiAgaWYgKCFzdHJtLyo9PSBaX05VTEwqLyB8fCAhc3RybS5zdGF0ZS8qPT0gWl9OVUxMKi8pIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzdGF0dXMgPSBzdHJtLnN0YXRlLnN0YXR1cztcbiAgaWYgKHN0YXR1cyAhPT0gSU5JVF9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gRVhUUkFfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IE5BTUVfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IENPTU1FTlRfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IEhDUkNfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IEJVU1lfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IEZJTklTSF9TVEFURVxuICApIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHN0cm0uc3RhdGUgPSBudWxsO1xuXG4gIHJldHVybiBzdGF0dXMgPT09IEJVU1lfU1RBVEUgPyBlcnIoc3RybSwgWl9EQVRBX0VSUk9SKSA6IFpfT0s7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZXMgdGhlIGNvbXByZXNzaW9uIGRpY3Rpb25hcnkgZnJvbSB0aGUgZ2l2ZW4gYnl0ZVxuICogc2VxdWVuY2Ugd2l0aG91dCBwcm9kdWNpbmcgYW55IGNvbXByZXNzZWQgb3V0cHV0LlxuICovXG5mdW5jdGlvbiBkZWZsYXRlU2V0RGljdGlvbmFyeShzdHJtLCBkaWN0aW9uYXJ5KSB7XG4gIHZhciBkaWN0TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XG5cbiAgdmFyIHM7XG4gIHZhciBzdHIsIG47XG4gIHZhciB3cmFwO1xuICB2YXIgYXZhaWw7XG4gIHZhciBuZXh0O1xuICB2YXIgaW5wdXQ7XG4gIHZhciB0bXBEaWN0O1xuXG4gIGlmICghc3RybS8qPT0gWl9OVUxMKi8gfHwgIXN0cm0uc3RhdGUvKj09IFpfTlVMTCovKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgcyA9IHN0cm0uc3RhdGU7XG4gIHdyYXAgPSBzLndyYXA7XG5cbiAgaWYgKHdyYXAgPT09IDIgfHwgKHdyYXAgPT09IDEgJiYgcy5zdGF0dXMgIT09IElOSVRfU1RBVEUpIHx8IHMubG9va2FoZWFkKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgLyogd2hlbiB1c2luZyB6bGliIHdyYXBwZXJzLCBjb21wdXRlIEFkbGVyLTMyIGZvciBwcm92aWRlZCBkaWN0aW9uYXJ5ICovXG4gIGlmICh3cmFwID09PSAxKSB7XG4gICAgLyogYWRsZXIzMihzdHJtLT5hZGxlciwgZGljdGlvbmFyeSwgZGljdExlbmd0aCk7ICovXG4gICAgc3RybS5hZGxlciA9IGFkbGVyMzIoc3RybS5hZGxlciwgZGljdGlvbmFyeSwgZGljdExlbmd0aCwgMCk7XG4gIH1cblxuICBzLndyYXAgPSAwOyAgIC8qIGF2b2lkIGNvbXB1dGluZyBBZGxlci0zMiBpbiByZWFkX2J1ZiAqL1xuXG4gIC8qIGlmIGRpY3Rpb25hcnkgd291bGQgZmlsbCB3aW5kb3csIGp1c3QgcmVwbGFjZSB0aGUgaGlzdG9yeSAqL1xuICBpZiAoZGljdExlbmd0aCA+PSBzLndfc2l6ZSkge1xuICAgIGlmICh3cmFwID09PSAwKSB7ICAgICAgICAgICAgLyogYWxyZWFkeSBlbXB0eSBvdGhlcndpc2UgKi9cbiAgICAgIC8qKiogQ0xFQVJfSEFTSChzKTsgKioqL1xuICAgICAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuICAgICAgcy5zdHJzdGFydCA9IDA7XG4gICAgICBzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgICAgIHMuaW5zZXJ0ID0gMDtcbiAgICB9XG4gICAgLyogdXNlIHRoZSB0YWlsICovXG4gICAgLy8gZGljdGlvbmFyeSA9IGRpY3Rpb25hcnkuc2xpY2UoZGljdExlbmd0aCAtIHMud19zaXplKTtcbiAgICB0bXBEaWN0ID0gbmV3IHV0aWxzLkJ1Zjgocy53X3NpemUpO1xuICAgIHV0aWxzLmFycmF5U2V0KHRtcERpY3QsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGggLSBzLndfc2l6ZSwgcy53X3NpemUsIDApO1xuICAgIGRpY3Rpb25hcnkgPSB0bXBEaWN0O1xuICAgIGRpY3RMZW5ndGggPSBzLndfc2l6ZTtcbiAgfVxuICAvKiBpbnNlcnQgZGljdGlvbmFyeSBpbnRvIHdpbmRvdyBhbmQgaGFzaCAqL1xuICBhdmFpbCA9IHN0cm0uYXZhaWxfaW47XG4gIG5leHQgPSBzdHJtLm5leHRfaW47XG4gIGlucHV0ID0gc3RybS5pbnB1dDtcbiAgc3RybS5hdmFpbF9pbiA9IGRpY3RMZW5ndGg7XG4gIHN0cm0ubmV4dF9pbiA9IDA7XG4gIHN0cm0uaW5wdXQgPSBkaWN0aW9uYXJ5O1xuICBmaWxsX3dpbmRvdyhzKTtcbiAgd2hpbGUgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgIHN0ciA9IHMuc3Ryc3RhcnQ7XG4gICAgbiA9IHMubG9va2FoZWFkIC0gKE1JTl9NQVRDSCAtIDEpO1xuICAgIGRvIHtcbiAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgTUlOX01BVENILTFdKTsgKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuXG4gICAgICBzLnByZXZbc3RyICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuXG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzdHI7XG4gICAgICBzdHIrKztcbiAgICB9IHdoaWxlICgtLW4pO1xuICAgIHMuc3Ryc3RhcnQgPSBzdHI7XG4gICAgcy5sb29rYWhlYWQgPSBNSU5fTUFUQ0ggLSAxO1xuICAgIGZpbGxfd2luZG93KHMpO1xuICB9XG4gIHMuc3Ryc3RhcnQgKz0gcy5sb29rYWhlYWQ7XG4gIHMuYmxvY2tfc3RhcnQgPSBzLnN0cnN0YXJ0O1xuICBzLmluc2VydCA9IHMubG9va2FoZWFkO1xuICBzLmxvb2thaGVhZCA9IDA7XG4gIHMubWF0Y2hfbGVuZ3RoID0gcy5wcmV2X2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgc3RybS5uZXh0X2luID0gbmV4dDtcbiAgc3RybS5pbnB1dCA9IGlucHV0O1xuICBzdHJtLmF2YWlsX2luID0gYXZhaWw7XG4gIHMud3JhcCA9IHdyYXA7XG4gIHJldHVybiBaX09LO1xufVxuXG5cbmV4cG9ydHMuZGVmbGF0ZUluaXQgPSBkZWZsYXRlSW5pdDtcbmV4cG9ydHMuZGVmbGF0ZUluaXQyID0gZGVmbGF0ZUluaXQyO1xuZXhwb3J0cy5kZWZsYXRlUmVzZXQgPSBkZWZsYXRlUmVzZXQ7XG5leHBvcnRzLmRlZmxhdGVSZXNldEtlZXAgPSBkZWZsYXRlUmVzZXRLZWVwO1xuZXhwb3J0cy5kZWZsYXRlU2V0SGVhZGVyID0gZGVmbGF0ZVNldEhlYWRlcjtcbmV4cG9ydHMuZGVmbGF0ZSA9IGRlZmxhdGU7XG5leHBvcnRzLmRlZmxhdGVFbmQgPSBkZWZsYXRlRW5kO1xuZXhwb3J0cy5kZWZsYXRlU2V0RGljdGlvbmFyeSA9IGRlZmxhdGVTZXREaWN0aW9uYXJ5O1xuZXhwb3J0cy5kZWZsYXRlSW5mbyA9ICdwYWtvIGRlZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpJztcblxuLyogTm90IGltcGxlbWVudGVkXG5leHBvcnRzLmRlZmxhdGVCb3VuZCA9IGRlZmxhdGVCb3VuZDtcbmV4cG9ydHMuZGVmbGF0ZUNvcHkgPSBkZWZsYXRlQ29weTtcbmV4cG9ydHMuZGVmbGF0ZVBhcmFtcyA9IGRlZmxhdGVQYXJhbXM7XG5leHBvcnRzLmRlZmxhdGVQZW5kaW5nID0gZGVmbGF0ZVBlbmRpbmc7XG5leHBvcnRzLmRlZmxhdGVQcmltZSA9IGRlZmxhdGVQcmltZTtcbmV4cG9ydHMuZGVmbGF0ZVR1bmUgPSBkZWZsYXRlVHVuZTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIDI6ICAgICAgJ25lZWQgZGljdGlvbmFyeScsICAgICAvKiBaX05FRURfRElDVCAgICAgICAyICAqL1xuICAxOiAgICAgICdzdHJlYW0gZW5kJywgICAgICAgICAgLyogWl9TVFJFQU1fRU5EICAgICAgMSAgKi9cbiAgMDogICAgICAnJywgICAgICAgICAgICAgICAgICAgIC8qIFpfT0sgICAgICAgICAgICAgIDAgICovXG4gICctMSc6ICAgJ2ZpbGUgZXJyb3InLCAgICAgICAgICAvKiBaX0VSUk5PICAgICAgICAgKC0xKSAqL1xuICAnLTInOiAgICdzdHJlYW0gZXJyb3InLCAgICAgICAgLyogWl9TVFJFQU1fRVJST1IgICgtMikgKi9cbiAgJy0zJzogICAnZGF0YSBlcnJvcicsICAgICAgICAgIC8qIFpfREFUQV9FUlJPUiAgICAoLTMpICovXG4gICctNCc6ICAgJ2luc3VmZmljaWVudCBtZW1vcnknLCAvKiBaX01FTV9FUlJPUiAgICAgKC00KSAqL1xuICAnLTUnOiAgICdidWZmZXIgZXJyb3InLCAgICAgICAgLyogWl9CVUZfRVJST1IgICAgICgtNSkgKi9cbiAgJy02JzogICAnaW5jb21wYXRpYmxlIHZlcnNpb24nIC8qIFpfVkVSU0lPTl9FUlJPUiAoLTYpICovXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vL3ZhciBaX0ZJTFRFUkVEICAgICAgICAgID0gMTtcbi8vdmFyIFpfSFVGRk1BTl9PTkxZICAgICAgPSAyO1xuLy92YXIgWl9STEUgICAgICAgICAgICAgICA9IDM7XG52YXIgWl9GSVhFRCAgICAgICAgICAgICAgID0gNDtcbi8vdmFyIFpfREVGQVVMVF9TVFJBVEVHWSAgPSAwO1xuXG4vKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG52YXIgWl9CSU5BUlkgICAgICAgICAgICAgID0gMDtcbnZhciBaX1RFWFQgICAgICAgICAgICAgICAgPSAxO1xuLy92YXIgWl9BU0NJSSAgICAgICAgICAgICA9IDE7IC8vID0gWl9URVhUXG52YXIgWl9VTktOT1dOICAgICAgICAgICAgID0gMjtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5mdW5jdGlvbiB6ZXJvKGJ1ZikgeyB2YXIgbGVuID0gYnVmLmxlbmd0aDsgd2hpbGUgKC0tbGVuID49IDApIHsgYnVmW2xlbl0gPSAwOyB9IH1cblxuLy8gRnJvbSB6dXRpbC5oXG5cbnZhciBTVE9SRURfQkxPQ0sgPSAwO1xudmFyIFNUQVRJQ19UUkVFUyA9IDE7XG52YXIgRFlOX1RSRUVTICAgID0gMjtcbi8qIFRoZSB0aHJlZSBraW5kcyBvZiBibG9jayB0eXBlICovXG5cbnZhciBNSU5fTUFUQ0ggICAgPSAzO1xudmFyIE1BWF9NQVRDSCAgICA9IDI1ODtcbi8qIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG1hdGNoIGxlbmd0aHMgKi9cblxuLy8gRnJvbSBkZWZsYXRlLmhcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW50ZXJuYWwgY29tcHJlc3Npb24gc3RhdGUuXG4gKi9cblxudmFyIExFTkdUSF9DT0RFUyAgPSAyOTtcbi8qIG51bWJlciBvZiBsZW5ndGggY29kZXMsIG5vdCBjb3VudGluZyB0aGUgc3BlY2lhbCBFTkRfQkxPQ0sgY29kZSAqL1xuXG52YXIgTElURVJBTFMgICAgICA9IDI1Njtcbi8qIG51bWJlciBvZiBsaXRlcmFsIGJ5dGVzIDAuLjI1NSAqL1xuXG52YXIgTF9DT0RFUyAgICAgICA9IExJVEVSQUxTICsgMSArIExFTkdUSF9DT0RFUztcbi8qIG51bWJlciBvZiBMaXRlcmFsIG9yIExlbmd0aCBjb2RlcywgaW5jbHVkaW5nIHRoZSBFTkRfQkxPQ0sgY29kZSAqL1xuXG52YXIgRF9DT0RFUyAgICAgICA9IDMwO1xuLyogbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGVzICovXG5cbnZhciBCTF9DT0RFUyAgICAgID0gMTk7XG4vKiBudW1iZXIgb2YgY29kZXMgdXNlZCB0byB0cmFuc2ZlciB0aGUgYml0IGxlbmd0aHMgKi9cblxudmFyIEhFQVBfU0laRSAgICAgPSAyICogTF9DT0RFUyArIDE7XG4vKiBtYXhpbXVtIGhlYXAgc2l6ZSAqL1xuXG52YXIgTUFYX0JJVFMgICAgICA9IDE1O1xuLyogQWxsIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQklUUyBiaXRzICovXG5cbnZhciBCdWZfc2l6ZSAgICAgID0gMTY7XG4vKiBzaXplIG9mIGJpdCBidWZmZXIgaW4gYmlfYnVmICovXG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdGFudHNcbiAqL1xuXG52YXIgTUFYX0JMX0JJVFMgPSA3O1xuLyogQml0IGxlbmd0aCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JMX0JJVFMgYml0cyAqL1xuXG52YXIgRU5EX0JMT0NLICAgPSAyNTY7XG4vKiBlbmQgb2YgYmxvY2sgbGl0ZXJhbCBjb2RlICovXG5cbnZhciBSRVBfM182ICAgICA9IDE2O1xuLyogcmVwZWF0IHByZXZpb3VzIGJpdCBsZW5ndGggMy02IHRpbWVzICgyIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG52YXIgUkVQWl8zXzEwICAgPSAxNztcbi8qIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDMtMTAgdGltZXMgICgzIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG52YXIgUkVQWl8xMV8xMzggPSAxODtcbi8qIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDExLTEzOCB0aW1lcyAgKDcgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLXNwYWNpbmcsYXJyYXktYnJhY2tldC1zcGFjaW5nICovXG52YXIgZXh0cmFfbGJpdHMgPSAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggbGVuZ3RoIGNvZGUgKi9cbiAgWzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF07XG5cbnZhciBleHRyYV9kYml0cyA9ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBkaXN0YW5jZSBjb2RlICovXG4gIFswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXTtcblxudmFyIGV4dHJhX2JsYml0cyA9ICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGJpdCBsZW5ndGggY29kZSAqL1xuICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN107XG5cbnZhciBibF9vcmRlciA9XG4gIFsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtcbi8qIGVzbGludC1lbmFibGUgY29tbWEtc3BhY2luZyxhcnJheS1icmFja2V0LXNwYWNpbmcgKi9cblxuLyogVGhlIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMgYXJlIHNlbnQgaW4gb3JkZXIgb2YgZGVjcmVhc2luZ1xuICogcHJvYmFiaWxpdHksIHRvIGF2b2lkIHRyYW5zbWl0dGluZyB0aGUgbGVuZ3RocyBmb3IgdW51c2VkIGJpdCBsZW5ndGggY29kZXMuXG4gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBMb2NhbCBkYXRhLiBUaGVzZSBhcmUgaW5pdGlhbGl6ZWQgb25seSBvbmNlLlxuICovXG5cbi8vIFdlIHByZS1maWxsIGFycmF5cyB3aXRoIDAgdG8gYXZvaWQgdW5pbml0aWFsaXplZCBnYXBzXG5cbnZhciBESVNUX0NPREVfTEVOID0gNTEyOyAvKiBzZWUgZGVmaW5pdGlvbiBvZiBhcnJheSBkaXN0X2NvZGUgYmVsb3cgKi9cblxuLy8gISEhISBVc2UgZmxhdCBhcnJheSBpbnN0ZWFkIG9mIHN0cnVjdHVyZSwgRnJlcSA9IGkqMiwgTGVuID0gaSoyKzFcbnZhciBzdGF0aWNfbHRyZWUgID0gbmV3IEFycmF5KChMX0NPREVTICsgMikgKiAyKTtcbnplcm8oc3RhdGljX2x0cmVlKTtcbi8qIFRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlLiBTaW5jZSB0aGUgYml0IGxlbmd0aHMgYXJlIGltcG9zZWQsIHRoZXJlIGlzIG5vXG4gKiBuZWVkIGZvciB0aGUgTF9DT0RFUyBleHRyYSBjb2RlcyB1c2VkIGR1cmluZyBoZWFwIGNvbnN0cnVjdGlvbi4gSG93ZXZlclxuICogVGhlIGNvZGVzIDI4NiBhbmQgMjg3IGFyZSBuZWVkZWQgdG8gYnVpbGQgYSBjYW5vbmljYWwgdHJlZSAoc2VlIF90cl9pbml0XG4gKiBiZWxvdykuXG4gKi9cblxudmFyIHN0YXRpY19kdHJlZSAgPSBuZXcgQXJyYXkoRF9DT0RFUyAqIDIpO1xuemVybyhzdGF0aWNfZHRyZWUpO1xuLyogVGhlIHN0YXRpYyBkaXN0YW5jZSB0cmVlLiAoQWN0dWFsbHkgYSB0cml2aWFsIHRyZWUgc2luY2UgYWxsIGNvZGVzIHVzZVxuICogNSBiaXRzLilcbiAqL1xuXG52YXIgX2Rpc3RfY29kZSAgICA9IG5ldyBBcnJheShESVNUX0NPREVfTEVOKTtcbnplcm8oX2Rpc3RfY29kZSk7XG4vKiBEaXN0YW5jZSBjb2Rlcy4gVGhlIGZpcnN0IDI1NiB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgZGlzdGFuY2VzXG4gKiAzIC4uIDI1OCwgdGhlIGxhc3QgMjU2IHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSB0b3AgOCBiaXRzIG9mXG4gKiB0aGUgMTUgYml0IGRpc3RhbmNlcy5cbiAqL1xuXG52YXIgX2xlbmd0aF9jb2RlICA9IG5ldyBBcnJheShNQVhfTUFUQ0ggLSBNSU5fTUFUQ0ggKyAxKTtcbnplcm8oX2xlbmd0aF9jb2RlKTtcbi8qIGxlbmd0aCBjb2RlIGZvciBlYWNoIG5vcm1hbGl6ZWQgbWF0Y2ggbGVuZ3RoICgwID09IE1JTl9NQVRDSCkgKi9cblxudmFyIGJhc2VfbGVuZ3RoICAgPSBuZXcgQXJyYXkoTEVOR1RIX0NPREVTKTtcbnplcm8oYmFzZV9sZW5ndGgpO1xuLyogRmlyc3Qgbm9ybWFsaXplZCBsZW5ndGggZm9yIGVhY2ggY29kZSAoMCA9IE1JTl9NQVRDSCkgKi9cblxudmFyIGJhc2VfZGlzdCAgICAgPSBuZXcgQXJyYXkoRF9DT0RFUyk7XG56ZXJvKGJhc2VfZGlzdCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGRpc3RhbmNlIGZvciBlYWNoIGNvZGUgKDAgPSBkaXN0YW5jZSBvZiAxKSAqL1xuXG5cbmZ1bmN0aW9uIFN0YXRpY1RyZWVEZXNjKHN0YXRpY190cmVlLCBleHRyYV9iaXRzLCBleHRyYV9iYXNlLCBlbGVtcywgbWF4X2xlbmd0aCkge1xuXG4gIHRoaXMuc3RhdGljX3RyZWUgID0gc3RhdGljX3RyZWU7ICAvKiBzdGF0aWMgdHJlZSBvciBOVUxMICovXG4gIHRoaXMuZXh0cmFfYml0cyAgID0gZXh0cmFfYml0czsgICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGNvZGUgb3IgTlVMTCAqL1xuICB0aGlzLmV4dHJhX2Jhc2UgICA9IGV4dHJhX2Jhc2U7ICAgLyogYmFzZSBpbmRleCBmb3IgZXh0cmFfYml0cyAqL1xuICB0aGlzLmVsZW1zICAgICAgICA9IGVsZW1zOyAgICAgICAgLyogbWF4IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZSAqL1xuICB0aGlzLm1heF9sZW5ndGggICA9IG1heF9sZW5ndGg7ICAgLyogbWF4IGJpdCBsZW5ndGggZm9yIHRoZSBjb2RlcyAqL1xuXG4gIC8vIHNob3cgaWYgYHN0YXRpY190cmVlYCBoYXMgZGF0YSBvciBkdW1teSAtIG5lZWRlZCBmb3IgbW9ub21vcnBoaWMgb2JqZWN0c1xuICB0aGlzLmhhc19zdHJlZSAgICA9IHN0YXRpY190cmVlICYmIHN0YXRpY190cmVlLmxlbmd0aDtcbn1cblxuXG52YXIgc3RhdGljX2xfZGVzYztcbnZhciBzdGF0aWNfZF9kZXNjO1xudmFyIHN0YXRpY19ibF9kZXNjO1xuXG5cbmZ1bmN0aW9uIFRyZWVEZXNjKGR5bl90cmVlLCBzdGF0X2Rlc2MpIHtcbiAgdGhpcy5keW5fdHJlZSA9IGR5bl90cmVlOyAgICAgLyogdGhlIGR5bmFtaWMgdHJlZSAqL1xuICB0aGlzLm1heF9jb2RlID0gMDsgICAgICAgICAgICAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbiAgdGhpcy5zdGF0X2Rlc2MgPSBzdGF0X2Rlc2M7ICAgLyogdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGljIHRyZWUgKi9cbn1cblxuXG5cbmZ1bmN0aW9uIGRfY29kZShkaXN0KSB7XG4gIHJldHVybiBkaXN0IDwgMjU2ID8gX2Rpc3RfY29kZVtkaXN0XSA6IF9kaXN0X2NvZGVbMjU2ICsgKGRpc3QgPj4+IDcpXTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIE91dHB1dCBhIHNob3J0IExTQiBmaXJzdCBvbiB0aGUgc3RyZWFtLlxuICogSU4gYXNzZXJ0aW9uOiB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpbiBwZW5kaW5nQnVmLlxuICovXG5mdW5jdGlvbiBwdXRfc2hvcnQocywgdykge1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHcpICYgMHhmZikpO1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHVzaCkodykgPj4gOCkpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9ICh3KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKHcgPj4+IDgpICYgMHhmZjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSB2YWx1ZSBvbiBhIGdpdmVuIG51bWJlciBvZiBiaXRzLlxuICogSU4gYXNzZXJ0aW9uOiBsZW5ndGggPD0gMTYgYW5kIHZhbHVlIGZpdHMgaW4gbGVuZ3RoIGJpdHMuXG4gKi9cbmZ1bmN0aW9uIHNlbmRfYml0cyhzLCB2YWx1ZSwgbGVuZ3RoKSB7XG4gIGlmIChzLmJpX3ZhbGlkID4gKEJ1Zl9zaXplIC0gbGVuZ3RoKSkge1xuICAgIHMuYmlfYnVmIHw9ICh2YWx1ZSA8PCBzLmJpX3ZhbGlkKSAmIDB4ZmZmZjtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICAgIHMuYmlfYnVmID0gdmFsdWUgPj4gKEJ1Zl9zaXplIC0gcy5iaV92YWxpZCk7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGggLSBCdWZfc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzLmJpX2J1ZiB8PSAodmFsdWUgPDwgcy5iaV92YWxpZCkgJiAweGZmZmY7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGg7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzZW5kX2NvZGUocywgYywgdHJlZSkge1xuICBzZW5kX2JpdHMocywgdHJlZVtjICogMl0vKi5Db2RlKi8sIHRyZWVbYyAqIDIgKyAxXS8qLkxlbiovKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFJldmVyc2UgdGhlIGZpcnN0IGxlbiBiaXRzIG9mIGEgY29kZSwgdXNpbmcgc3RyYWlnaHRmb3J3YXJkIGNvZGUgKGEgZmFzdGVyXG4gKiBtZXRob2Qgd291bGQgdXNlIGEgdGFibGUpXG4gKiBJTiBhc3NlcnRpb246IDEgPD0gbGVuIDw9IDE1XG4gKi9cbmZ1bmN0aW9uIGJpX3JldmVyc2UoY29kZSwgbGVuKSB7XG4gIHZhciByZXMgPSAwO1xuICBkbyB7XG4gICAgcmVzIHw9IGNvZGUgJiAxO1xuICAgIGNvZGUgPj4+PSAxO1xuICAgIHJlcyA8PD0gMTtcbiAgfSB3aGlsZSAoLS1sZW4gPiAwKTtcbiAgcmV0dXJuIHJlcyA+Pj4gMTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIHRoZSBiaXQgYnVmZmVyLCBrZWVwaW5nIGF0IG1vc3QgNyBiaXRzIGluIGl0LlxuICovXG5mdW5jdGlvbiBiaV9mbHVzaChzKSB7XG4gIGlmIChzLmJpX3ZhbGlkID09PSAxNikge1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gICAgcy5iaV9idWYgPSAwO1xuICAgIHMuYmlfdmFsaWQgPSAwO1xuXG4gIH0gZWxzZSBpZiAocy5iaV92YWxpZCA+PSA4KSB7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBzLmJpX2J1ZiAmIDB4ZmY7XG4gICAgcy5iaV9idWYgPj49IDg7XG4gICAgcy5iaV92YWxpZCAtPSA4O1xuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzIGZvciBhIHRyZWUgYW5kIHVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aFxuICogZm9yIHRoZSBjdXJyZW50IGJsb2NrLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LCBoZWFwW2hlYXBfbWF4XSBhbmRcbiAqICAgIGFib3ZlIGFyZSB0aGUgdHJlZSBub2RlcyBzb3J0ZWQgYnkgaW5jcmVhc2luZyBmcmVxdWVuY3kuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkIGxlbiBpcyBzZXQgdG8gdGhlIG9wdGltYWwgYml0IGxlbmd0aCwgdGhlXG4gKiAgICAgYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGZyZXF1ZW5jaWVzIGZvciBlYWNoIGJpdCBsZW5ndGguXG4gKiAgICAgVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXMgYWxzbyB1cGRhdGVkIGlmIHN0cmVlIGlzXG4gKiAgICAgbm90IG51bGwuXG4gKi9cbmZ1bmN0aW9uIGdlbl9iaXRsZW4ocywgZGVzYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB0cmVlX2Rlc2MgKmRlc2M7ICAgIC8qIHRoZSB0cmVlIGRlc2NyaXB0b3IgKi9cbntcbiAgdmFyIHRyZWUgICAgICAgICAgICA9IGRlc2MuZHluX3RyZWU7XG4gIHZhciBtYXhfY29kZSAgICAgICAgPSBkZXNjLm1heF9jb2RlO1xuICB2YXIgc3RyZWUgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2Muc3RhdGljX3RyZWU7XG4gIHZhciBoYXNfc3RyZWUgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5oYXNfc3RyZWU7XG4gIHZhciBleHRyYSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iaXRzO1xuICB2YXIgYmFzZSAgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuZXh0cmFfYmFzZTtcbiAgdmFyIG1heF9sZW5ndGggICAgICA9IGRlc2Muc3RhdF9kZXNjLm1heF9sZW5ndGg7XG4gIHZhciBoOyAgICAgICAgICAgICAgLyogaGVhcCBpbmRleCAqL1xuICB2YXIgbiwgbTsgICAgICAgICAgIC8qIGl0ZXJhdGUgb3ZlciB0aGUgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgYml0czsgICAgICAgICAgIC8qIGJpdCBsZW5ndGggKi9cbiAgdmFyIHhiaXRzOyAgICAgICAgICAvKiBleHRyYSBiaXRzICovXG4gIHZhciBmOyAgICAgICAgICAgICAgLyogZnJlcXVlbmN5ICovXG4gIHZhciBvdmVyZmxvdyA9IDA7ICAgLyogbnVtYmVyIG9mIGVsZW1lbnRzIHdpdGggYml0IGxlbmd0aCB0b28gbGFyZ2UgKi9cblxuICBmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspIHtcbiAgICBzLmJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIC8qIEluIGEgZmlyc3QgcGFzcywgY29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyAod2hpY2ggbWF5XG4gICAqIG92ZXJmbG93IGluIHRoZSBjYXNlIG9mIHRoZSBiaXQgbGVuZ3RoIHRyZWUpLlxuICAgKi9cbiAgdHJlZVtzLmhlYXBbcy5oZWFwX21heF0gKiAyICsgMV0vKi5MZW4qLyA9IDA7IC8qIHJvb3Qgb2YgdGhlIGhlYXAgKi9cblxuICBmb3IgKGggPSBzLmhlYXBfbWF4ICsgMTsgaCA8IEhFQVBfU0laRTsgaCsrKSB7XG4gICAgbiA9IHMuaGVhcFtoXTtcbiAgICBiaXRzID0gdHJlZVt0cmVlW24gKiAyICsgMV0vKi5EYWQqLyAqIDIgKyAxXS8qLkxlbiovICsgMTtcbiAgICBpZiAoYml0cyA+IG1heF9sZW5ndGgpIHtcbiAgICAgIGJpdHMgPSBtYXhfbGVuZ3RoO1xuICAgICAgb3ZlcmZsb3crKztcbiAgICB9XG4gICAgdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSBiaXRzO1xuICAgIC8qIFdlIG92ZXJ3cml0ZSB0cmVlW25dLkRhZCB3aGljaCBpcyBubyBsb25nZXIgbmVlZGVkICovXG5cbiAgICBpZiAobiA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9IC8qIG5vdCBhIGxlYWYgbm9kZSAqL1xuXG4gICAgcy5ibF9jb3VudFtiaXRzXSsrO1xuICAgIHhiaXRzID0gMDtcbiAgICBpZiAobiA+PSBiYXNlKSB7XG4gICAgICB4Yml0cyA9IGV4dHJhW24gLSBiYXNlXTtcbiAgICB9XG4gICAgZiA9IHRyZWVbbiAqIDJdLyouRnJlcSovO1xuICAgIHMub3B0X2xlbiArPSBmICogKGJpdHMgKyB4Yml0cyk7XG4gICAgaWYgKGhhc19zdHJlZSkge1xuICAgICAgcy5zdGF0aWNfbGVuICs9IGYgKiAoc3RyZWVbbiAqIDIgKyAxXS8qLkxlbiovICsgeGJpdHMpO1xuICAgIH1cbiAgfVxuICBpZiAob3ZlcmZsb3cgPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgLy8gVHJhY2UoKHN0ZGVycixcIlxcbmJpdCBsZW5ndGggb3ZlcmZsb3dcXG5cIikpO1xuICAvKiBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1cyAqL1xuXG4gIC8qIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6ICovXG4gIGRvIHtcbiAgICBiaXRzID0gbWF4X2xlbmd0aCAtIDE7XG4gICAgd2hpbGUgKHMuYmxfY291bnRbYml0c10gPT09IDApIHsgYml0cy0tOyB9XG4gICAgcy5ibF9jb3VudFtiaXRzXS0tOyAgICAgIC8qIG1vdmUgb25lIGxlYWYgZG93biB0aGUgdHJlZSAqL1xuICAgIHMuYmxfY291bnRbYml0cyArIDFdICs9IDI7IC8qIG1vdmUgb25lIG92ZXJmbG93IGl0ZW0gYXMgaXRzIGJyb3RoZXIgKi9cbiAgICBzLmJsX2NvdW50W21heF9sZW5ndGhdLS07XG4gICAgLyogVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcbiAgICAgKiBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cbiAgICAgKi9cbiAgICBvdmVyZmxvdyAtPSAyO1xuICB9IHdoaWxlIChvdmVyZmxvdyA+IDApO1xuXG4gIC8qIE5vdyByZWNvbXB1dGUgYWxsIGJpdCBsZW5ndGhzLCBzY2FubmluZyBpbiBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAgICogaCBpcyBzdGlsbCBlcXVhbCB0byBIRUFQX1NJWkUuIChJdCBpcyBzaW1wbGVyIHRvIHJlY29uc3RydWN0IGFsbFxuICAgKiBsZW5ndGhzIGluc3RlYWQgb2YgZml4aW5nIG9ubHkgdGhlIHdyb25nIG9uZXMuIFRoaXMgaWRlYSBpcyB0YWtlblxuICAgKiBmcm9tICdhcicgd3JpdHRlbiBieSBIYXJ1aGlrbyBPa3VtdXJhLilcbiAgICovXG4gIGZvciAoYml0cyA9IG1heF9sZW5ndGg7IGJpdHMgIT09IDA7IGJpdHMtLSkge1xuICAgIG4gPSBzLmJsX2NvdW50W2JpdHNdO1xuICAgIHdoaWxlIChuICE9PSAwKSB7XG4gICAgICBtID0gcy5oZWFwWy0taF07XG4gICAgICBpZiAobSA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAodHJlZVttICogMiArIDFdLyouTGVuKi8gIT09IGJpdHMpIHtcbiAgICAgICAgLy8gVHJhY2UoKHN0ZGVycixcImNvZGUgJWQgYml0cyAlZC0+JWRcXG5cIiwgbSwgdHJlZVttXS5MZW4sIGJpdHMpKTtcbiAgICAgICAgcy5vcHRfbGVuICs9IChiaXRzIC0gdHJlZVttICogMiArIDFdLyouTGVuKi8pICogdHJlZVttICogMl0vKi5GcmVxKi87XG4gICAgICAgIHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovID0gYml0cztcbiAgICAgIH1cbiAgICAgIG4tLTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEdlbmVyYXRlIHRoZSBjb2RlcyBmb3IgYSBnaXZlbiB0cmVlIGFuZCBiaXQgY291bnRzICh3aGljaCBuZWVkIG5vdCBiZVxuICogb3B0aW1hbCkuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgYml0IGxlbmd0aCBzdGF0aXN0aWNzIGZvclxuICogdGhlIGdpdmVuIHRyZWUgYW5kIHRoZSBmaWVsZCBsZW4gaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cy5cbiAqIE9VVCBhc3NlcnRpb246IHRoZSBmaWVsZCBjb2RlIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMgb2Ygbm9uXG4gKiAgICAgemVybyBjb2RlIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gZ2VuX2NvZGVzKHRyZWUsIG1heF9jb2RlLCBibF9jb3VudClcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAgICAgICAgICAgIC8qIHRoZSB0cmVlIHRvIGRlY29yYXRlICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgICAgICAgICAgICAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbi8vICAgIHVzaGYgKmJsX2NvdW50OyAgICAgICAgICAgIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggKi9cbntcbiAgdmFyIG5leHRfY29kZSA9IG5ldyBBcnJheShNQVhfQklUUyArIDEpOyAvKiBuZXh0IGNvZGUgdmFsdWUgZm9yIGVhY2ggYml0IGxlbmd0aCAqL1xuICB2YXIgY29kZSA9IDA7ICAgICAgICAgICAgICAvKiBydW5uaW5nIGNvZGUgdmFsdWUgKi9cbiAgdmFyIGJpdHM7ICAgICAgICAgICAgICAgICAgLyogYml0IGluZGV4ICovXG4gIHZhciBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGNvZGUgaW5kZXggKi9cblxuICAvKiBUaGUgZGlzdHJpYnV0aW9uIGNvdW50cyBhcmUgZmlyc3QgdXNlZCB0byBnZW5lcmF0ZSB0aGUgY29kZSB2YWx1ZXNcbiAgICogd2l0aG91dCBiaXQgcmV2ZXJzYWwuXG4gICAqL1xuICBmb3IgKGJpdHMgPSAxOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspIHtcbiAgICBuZXh0X2NvZGVbYml0c10gPSBjb2RlID0gKGNvZGUgKyBibF9jb3VudFtiaXRzIC0gMV0pIDw8IDE7XG4gIH1cbiAgLyogQ2hlY2sgdGhhdCB0aGUgYml0IGNvdW50cyBpbiBibF9jb3VudCBhcmUgY29uc2lzdGVudC4gVGhlIGxhc3QgY29kZVxuICAgKiBtdXN0IGJlIGFsbCBvbmVzLlxuICAgKi9cbiAgLy9Bc3NlcnQgKGNvZGUgKyBibF9jb3VudFtNQVhfQklUU10tMSA9PSAoMTw8TUFYX0JJVFMpLTEsXG4gIC8vICAgICAgICBcImluY29uc2lzdGVudCBiaXQgY291bnRzXCIpO1xuICAvL1RyYWNldigoc3RkZXJyLFwiXFxuZ2VuX2NvZGVzOiBtYXhfY29kZSAlZCBcIiwgbWF4X2NvZGUpKTtcblxuICBmb3IgKG4gPSAwOyAgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgdmFyIGxlbiA9IHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovO1xuICAgIGlmIChsZW4gPT09IDApIHsgY29udGludWU7IH1cbiAgICAvKiBOb3cgcmV2ZXJzZSB0aGUgYml0cyAqL1xuICAgIHRyZWVbbiAqIDJdLyouQ29kZSovID0gYmlfcmV2ZXJzZShuZXh0X2NvZGVbbGVuXSsrLCBsZW4pO1xuXG4gICAgLy9UcmFjZWN2KHRyZWUgIT0gc3RhdGljX2x0cmVlLCAoc3RkZXJyLFwiXFxubiAlM2QgJWMgbCAlMmQgYyAlNHggKCV4KSBcIixcbiAgICAvLyAgICAgbiwgKGlzZ3JhcGgobikgPyBuIDogJyAnKSwgbGVuLCB0cmVlW25dLkNvZGUsIG5leHRfY29kZVtsZW5dLTEpKTtcbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgdmFyaW91cyAnY29uc3RhbnQnIHRhYmxlcy5cbiAqL1xuZnVuY3Rpb24gdHJfc3RhdGljX2luaXQoKSB7XG4gIHZhciBuOyAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBiaXRzOyAgICAgLyogYml0IGNvdW50ZXIgKi9cbiAgdmFyIGxlbmd0aDsgICAvKiBsZW5ndGggdmFsdWUgKi9cbiAgdmFyIGNvZGU7ICAgICAvKiBjb2RlIHZhbHVlICovXG4gIHZhciBkaXN0OyAgICAgLyogZGlzdGFuY2UgaW5kZXggKi9cbiAgdmFyIGJsX2NvdW50ID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7XG4gIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZSAqL1xuXG4gIC8vIGRvIGNoZWNrIGluIF90cl9pbml0KClcbiAgLy9pZiAoc3RhdGljX2luaXRfZG9uZSkgcmV0dXJuO1xuXG4gIC8qIEZvciBzb21lIGVtYmVkZGVkIHRhcmdldHMsIGdsb2JhbCB2YXJpYWJsZXMgYXJlIG5vdCBpbml0aWFsaXplZDogKi9cbi8qI2lmZGVmIE5PX0lOSVRfR0xPQkFMX1BPSU5URVJTXG4gIHN0YXRpY19sX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfbHRyZWU7XG4gIHN0YXRpY19sX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2xiaXRzO1xuICBzdGF0aWNfZF9kZXNjLnN0YXRpY190cmVlID0gc3RhdGljX2R0cmVlO1xuICBzdGF0aWNfZF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9kYml0cztcbiAgc3RhdGljX2JsX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2JsYml0cztcbiNlbmRpZiovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBsZW5ndGggKDAuLjI1NSkgLT4gbGVuZ3RoIGNvZGUgKDAuLjI4KSAqL1xuICBsZW5ndGggPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgTEVOR1RIX0NPREVTIC0gMTsgY29kZSsrKSB7XG4gICAgYmFzZV9sZW5ndGhbY29kZV0gPSBsZW5ndGg7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2xiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfbGVuZ3RoX2NvZGVbbGVuZ3RoKytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGxlbmd0aCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGxlbmd0aCAhPSAyNTZcIik7XG4gIC8qIE5vdGUgdGhhdCB0aGUgbGVuZ3RoIDI1NSAobWF0Y2ggbGVuZ3RoIDI1OCkgY2FuIGJlIHJlcHJlc2VudGVkXG4gICAqIGluIHR3byBkaWZmZXJlbnQgd2F5czogY29kZSAyODQgKyA1IGJpdHMgb3IgY29kZSAyODUsIHNvIHdlXG4gICAqIG92ZXJ3cml0ZSBsZW5ndGhfY29kZVsyNTVdIHRvIHVzZSB0aGUgYmVzdCBlbmNvZGluZzpcbiAgICovXG4gIF9sZW5ndGhfY29kZVtsZW5ndGggLSAxXSA9IGNvZGU7XG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBkaXN0ICgwLi4zMkspIC0+IGRpc3QgY29kZSAoMC4uMjkpICovXG4gIGRpc3QgPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgMTY7IGNvZGUrKykge1xuICAgIGJhc2VfZGlzdFtjb2RlXSA9IGRpc3Q7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IGV4dHJhX2RiaXRzW2NvZGVdKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlW2Rpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IGRpc3QgIT0gMjU2XCIpO1xuICBkaXN0ID4+PSA3OyAvKiBmcm9tIG5vdyBvbiwgYWxsIGRpc3RhbmNlcyBhcmUgZGl2aWRlZCBieSAxMjggKi9cbiAgZm9yICg7IGNvZGUgPCBEX0NPREVTOyBjb2RlKyspIHtcbiAgICBiYXNlX2Rpc3RbY29kZV0gPSBkaXN0IDw8IDc7XG4gICAgZm9yIChuID0gMDsgbiA8ICgxIDw8IChleHRyYV9kYml0c1tjb2RlXSAtIDcpKTsgbisrKSB7XG4gICAgICBfZGlzdF9jb2RlWzI1NiArIGRpc3QrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZGlzdCA9PSAyNTYsIFwidHJfc3RhdGljX2luaXQ6IDI1NitkaXN0ICE9IDUxMlwiKTtcblxuICAvKiBDb25zdHJ1Y3QgdGhlIGNvZGVzIG9mIHRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlICovXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIGJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIG4gPSAwO1xuICB3aGlsZSAobiA8PSAxNDMpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNTUpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gOTtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOV0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNzkpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNztcbiAgICBuKys7XG4gICAgYmxfY291bnRbN10rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyODcpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICAvKiBDb2RlcyAyODYgYW5kIDI4NyBkbyBub3QgZXhpc3QsIGJ1dCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGVcbiAgICogdHJlZSBjb25zdHJ1Y3Rpb24gdG8gZ2V0IGEgY2Fub25pY2FsIEh1ZmZtYW4gdHJlZSAobG9uZ2VzdCBjb2RlXG4gICAqIGFsbCBvbmVzKVxuICAgKi9cbiAgZ2VuX2NvZGVzKHN0YXRpY19sdHJlZSwgTF9DT0RFUyArIDEsIGJsX2NvdW50KTtcblxuICAvKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUgaXMgdHJpdmlhbDogKi9cbiAgZm9yIChuID0gMDsgbiA8IERfQ09ERVM7IG4rKykge1xuICAgIHN0YXRpY19kdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA1O1xuICAgIHN0YXRpY19kdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG4sIDUpO1xuICB9XG5cbiAgLy8gTm93IGRhdGEgcmVhZHkgYW5kIHdlIGNhbiBpbml0IHN0YXRpYyB0cmVlc1xuICBzdGF0aWNfbF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19sdHJlZSwgZXh0cmFfbGJpdHMsIExJVEVSQUxTICsgMSwgTF9DT0RFUywgTUFYX0JJVFMpO1xuICBzdGF0aWNfZF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKHN0YXRpY19kdHJlZSwgZXh0cmFfZGJpdHMsIDAsICAgICAgICAgIERfQ09ERVMsIE1BWF9CSVRTKTtcbiAgc3RhdGljX2JsX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2MobmV3IEFycmF5KDApLCBleHRyYV9ibGJpdHMsIDAsICAgICAgICAgQkxfQ09ERVMsIE1BWF9CTF9CSVRTKTtcblxuICAvL3N0YXRpY19pbml0X2RvbmUgPSB0cnVlO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSBhIG5ldyBibG9jay5cbiAqL1xuZnVuY3Rpb24gaW5pdF9ibG9jayhzKSB7XG4gIHZhciBuOyAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cblxuICAvKiBJbml0aWFsaXplIHRoZSB0cmVlcy4gKi9cbiAgZm9yIChuID0gMDsgbiA8IExfQ09ERVM7ICBuKyspIHsgcy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUzsgIG4rKykgeyBzLmR5bl9kdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG4gIGZvciAobiA9IDA7IG4gPCBCTF9DT0RFUzsgbisrKSB7IHMuYmxfdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG5cbiAgcy5keW5fbHRyZWVbRU5EX0JMT0NLICogMl0vKi5GcmVxKi8gPSAxO1xuICBzLm9wdF9sZW4gPSBzLnN0YXRpY19sZW4gPSAwO1xuICBzLmxhc3RfbGl0ID0gcy5tYXRjaGVzID0gMDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIHRoZSBiaXQgYnVmZmVyIGFuZCBhbGlnbiB0aGUgb3V0cHV0IG9uIGEgYnl0ZSBib3VuZGFyeVxuICovXG5mdW5jdGlvbiBiaV93aW5kdXAocylcbntcbiAgaWYgKHMuYmlfdmFsaWQgPiA4KSB7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgfSBlbHNlIGlmIChzLmJpX3ZhbGlkID4gMCkge1xuICAgIC8vcHV0X2J5dGUocywgKEJ5dGUpcy0+YmlfYnVmKTtcbiAgICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IHMuYmlfYnVmO1xuICB9XG4gIHMuYmlfYnVmID0gMDtcbiAgcy5iaV92YWxpZCA9IDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weSBhIHN0b3JlZCBibG9jaywgc3RvcmluZyBmaXJzdCB0aGUgbGVuZ3RoIGFuZCBpdHNcbiAqIG9uZSdzIGNvbXBsZW1lbnQgaWYgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBjb3B5X2Jsb2NrKHMsIGJ1ZiwgbGVuLCBoZWFkZXIpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgICAgKmJ1ZjsgICAgLyogdGhlIGlucHV0IGRhdGEgKi9cbi8vdW5zaWduZWQgbGVuOyAgICAgLyogaXRzIGxlbmd0aCAqL1xuLy9pbnQgICAgICBoZWFkZXI7ICAvKiB0cnVlIGlmIGJsb2NrIGhlYWRlciBtdXN0IGJlIHdyaXR0ZW4gKi9cbntcbiAgYmlfd2luZHVwKHMpOyAgICAgICAgLyogYWxpZ24gb24gYnl0ZSBib3VuZGFyeSAqL1xuXG4gIGlmIChoZWFkZXIpIHtcbiAgICBwdXRfc2hvcnQocywgbGVuKTtcbiAgICBwdXRfc2hvcnQocywgfmxlbik7XG4gIH1cbi8vICB3aGlsZSAobGVuLS0pIHtcbi8vICAgIHB1dF9ieXRlKHMsICpidWYrKyk7XG4vLyAgfVxuICB1dGlscy5hcnJheVNldChzLnBlbmRpbmdfYnVmLCBzLndpbmRvdywgYnVmLCBsZW4sIHMucGVuZGluZyk7XG4gIHMucGVuZGluZyArPSBsZW47XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcGFyZXMgdG8gc3VidHJlZXMsIHVzaW5nIHRoZSB0cmVlIGRlcHRoIGFzIHRpZSBicmVha2VyIHdoZW5cbiAqIHRoZSBzdWJ0cmVlcyBoYXZlIGVxdWFsIGZyZXF1ZW5jeS4gVGhpcyBtaW5pbWl6ZXMgdGhlIHdvcnN0IGNhc2UgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBzbWFsbGVyKHRyZWUsIG4sIG0sIGRlcHRoKSB7XG4gIHZhciBfbjIgPSBuICogMjtcbiAgdmFyIF9tMiA9IG0gKiAyO1xuICByZXR1cm4gKHRyZWVbX24yXS8qLkZyZXEqLyA8IHRyZWVbX20yXS8qLkZyZXEqLyB8fFxuICAgICAgICAgKHRyZWVbX24yXS8qLkZyZXEqLyA9PT0gdHJlZVtfbTJdLyouRnJlcSovICYmIGRlcHRoW25dIDw9IGRlcHRoW21dKSk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVzdG9yZSB0aGUgaGVhcCBwcm9wZXJ0eSBieSBtb3ZpbmcgZG93biB0aGUgdHJlZSBzdGFydGluZyBhdCBub2RlIGssXG4gKiBleGNoYW5naW5nIGEgbm9kZSB3aXRoIHRoZSBzbWFsbGVzdCBvZiBpdHMgdHdvIHNvbnMgaWYgbmVjZXNzYXJ5LCBzdG9wcGluZ1xuICogd2hlbiB0aGUgaGVhcCBwcm9wZXJ0eSBpcyByZS1lc3RhYmxpc2hlZCAoZWFjaCBmYXRoZXIgc21hbGxlciB0aGFuIGl0c1xuICogdHdvIHNvbnMpLlxuICovXG5mdW5jdGlvbiBwcWRvd25oZWFwKHMsIHRyZWUsIGspXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgIC8qIHRoZSB0cmVlIHRvIHJlc3RvcmUgKi9cbi8vICAgIGludCBrOyAgICAgICAgICAgICAgIC8qIG5vZGUgdG8gbW92ZSBkb3duICovXG57XG4gIHZhciB2ID0gcy5oZWFwW2tdO1xuICB2YXIgaiA9IGsgPDwgMTsgIC8qIGxlZnQgc29uIG9mIGsgKi9cbiAgd2hpbGUgKGogPD0gcy5oZWFwX2xlbikge1xuICAgIC8qIFNldCBqIHRvIHRoZSBzbWFsbGVzdCBvZiB0aGUgdHdvIHNvbnM6ICovXG4gICAgaWYgKGogPCBzLmhlYXBfbGVuICYmXG4gICAgICBzbWFsbGVyKHRyZWUsIHMuaGVhcFtqICsgMV0sIHMuaGVhcFtqXSwgcy5kZXB0aCkpIHtcbiAgICAgIGorKztcbiAgICB9XG4gICAgLyogRXhpdCBpZiB2IGlzIHNtYWxsZXIgdGhhbiBib3RoIHNvbnMgKi9cbiAgICBpZiAoc21hbGxlcih0cmVlLCB2LCBzLmhlYXBbal0sIHMuZGVwdGgpKSB7IGJyZWFrOyB9XG5cbiAgICAvKiBFeGNoYW5nZSB2IHdpdGggdGhlIHNtYWxsZXN0IHNvbiAqL1xuICAgIHMuaGVhcFtrXSA9IHMuaGVhcFtqXTtcbiAgICBrID0gajtcblxuICAgIC8qIEFuZCBjb250aW51ZSBkb3duIHRoZSB0cmVlLCBzZXR0aW5nIGogdG8gdGhlIGxlZnQgc29uIG9mIGsgKi9cbiAgICBqIDw8PSAxO1xuICB9XG4gIHMuaGVhcFtrXSA9IHY7XG59XG5cblxuLy8gaW5saW5lZCBtYW51YWxseVxuLy8gdmFyIFNNQUxMRVNUID0gMTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBibG9jayBkYXRhIGNvbXByZXNzZWQgdXNpbmcgdGhlIGdpdmVuIEh1ZmZtYW4gdHJlZXNcbiAqL1xuZnVuY3Rpb24gY29tcHJlc3NfYmxvY2socywgbHRyZWUsIGR0cmVlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGNvbnN0IGN0X2RhdGEgKmx0cmVlOyAvKiBsaXRlcmFsIHRyZWUgKi9cbi8vICAgIGNvbnN0IGN0X2RhdGEgKmR0cmVlOyAvKiBkaXN0YW5jZSB0cmVlICovXG57XG4gIHZhciBkaXN0OyAgICAgICAgICAgLyogZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmcgKi9cbiAgdmFyIGxjOyAgICAgICAgICAgICAvKiBtYXRjaCBsZW5ndGggb3IgdW5tYXRjaGVkIGNoYXIgKGlmIGRpc3QgPT0gMCkgKi9cbiAgdmFyIGx4ID0gMDsgICAgICAgICAvKiBydW5uaW5nIGluZGV4IGluIGxfYnVmICovXG4gIHZhciBjb2RlOyAgICAgICAgICAgLyogdGhlIGNvZGUgdG8gc2VuZCAqL1xuICB2YXIgZXh0cmE7ICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzIHRvIHNlbmQgKi9cblxuICBpZiAocy5sYXN0X2xpdCAhPT0gMCkge1xuICAgIGRvIHtcbiAgICAgIGRpc3QgPSAocy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgbHggKiAyXSA8PCA4KSB8IChzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBseCAqIDIgKyAxXSk7XG4gICAgICBsYyA9IHMucGVuZGluZ19idWZbcy5sX2J1ZiArIGx4XTtcbiAgICAgIGx4Kys7XG5cbiAgICAgIGlmIChkaXN0ID09PSAwKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBsYywgbHRyZWUpOyAvKiBzZW5kIGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAgIC8vVHJhY2Vjdihpc2dyYXBoKGxjKSwgKHN0ZGVycixcIiAnJWMnIFwiLCBsYykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSCAqL1xuICAgICAgICBjb2RlID0gX2xlbmd0aF9jb2RlW2xjXTtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUgKyBMSVRFUkFMUyArIDEsIGx0cmVlKTsgLyogc2VuZCB0aGUgbGVuZ3RoIGNvZGUgKi9cbiAgICAgICAgZXh0cmEgPSBleHRyYV9sYml0c1tjb2RlXTtcbiAgICAgICAgaWYgKGV4dHJhICE9PSAwKSB7XG4gICAgICAgICAgbGMgLT0gYmFzZV9sZW5ndGhbY29kZV07XG4gICAgICAgICAgc2VuZF9iaXRzKHMsIGxjLCBleHRyYSk7ICAgICAgIC8qIHNlbmQgdGhlIGV4dHJhIGxlbmd0aCBiaXRzICovXG4gICAgICAgIH1cbiAgICAgICAgZGlzdC0tOyAvKiBkaXN0IGlzIG5vdyB0aGUgbWF0Y2ggZGlzdGFuY2UgLSAxICovXG4gICAgICAgIGNvZGUgPSBkX2NvZGUoZGlzdCk7XG4gICAgICAgIC8vQXNzZXJ0IChjb2RlIDwgRF9DT0RFUywgXCJiYWQgZF9jb2RlXCIpO1xuXG4gICAgICAgIHNlbmRfY29kZShzLCBjb2RlLCBkdHJlZSk7ICAgICAgIC8qIHNlbmQgdGhlIGRpc3RhbmNlIGNvZGUgKi9cbiAgICAgICAgZXh0cmEgPSBleHRyYV9kYml0c1tjb2RlXTtcbiAgICAgICAgaWYgKGV4dHJhICE9PSAwKSB7XG4gICAgICAgICAgZGlzdCAtPSBiYXNlX2Rpc3RbY29kZV07XG4gICAgICAgICAgc2VuZF9iaXRzKHMsIGRpc3QsIGV4dHJhKTsgICAvKiBzZW5kIHRoZSBleHRyYSBkaXN0YW5jZSBiaXRzICovXG4gICAgICAgIH1cbiAgICAgIH0gLyogbGl0ZXJhbCBvciBtYXRjaCBwYWlyID8gKi9cblxuICAgICAgLyogQ2hlY2sgdGhhdCB0aGUgb3ZlcmxheSBiZXR3ZWVuIHBlbmRpbmdfYnVmIGFuZCBkX2J1ZitsX2J1ZiBpcyBvazogKi9cbiAgICAgIC8vQXNzZXJ0KCh1SW50KShzLT5wZW5kaW5nKSA8IHMtPmxpdF9idWZzaXplICsgMipseCxcbiAgICAgIC8vICAgICAgIFwicGVuZGluZ0J1ZiBvdmVyZmxvd1wiKTtcblxuICAgIH0gd2hpbGUgKGx4IDwgcy5sYXN0X2xpdCk7XG4gIH1cblxuICBzZW5kX2NvZGUocywgRU5EX0JMT0NLLCBsdHJlZSk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3Qgb25lIEh1ZmZtYW4gdHJlZSBhbmQgYXNzaWducyB0aGUgY29kZSBiaXQgc3RyaW5ncyBhbmQgbGVuZ3Rocy5cbiAqIFVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aCBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZCBmcmVxIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkcyBsZW4gYW5kIGNvZGUgYXJlIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoXG4gKiAgICAgYW5kIGNvcnJlc3BvbmRpbmcgY29kZS4gVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXNcbiAqICAgICBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXMgbm90IG51bGwuIFRoZSBmaWVsZCBtYXhfY29kZSBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkX3RyZWUocywgZGVzYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB0cmVlX2Rlc2MgKmRlc2M7IC8qIHRoZSB0cmVlIGRlc2NyaXB0b3IgKi9cbntcbiAgdmFyIHRyZWUgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgdmFyIHN0cmVlICAgID0gZGVzYy5zdGF0X2Rlc2Muc3RhdGljX3RyZWU7XG4gIHZhciBoYXNfc3RyZWUgPSBkZXNjLnN0YXRfZGVzYy5oYXNfc3RyZWU7XG4gIHZhciBlbGVtcyAgICA9IGRlc2Muc3RhdF9kZXNjLmVsZW1zO1xuICB2YXIgbiwgbTsgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHMgKi9cbiAgdmFyIG1heF9jb2RlID0gLTE7IC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICB2YXIgbm9kZTsgICAgICAgICAgLyogbmV3IG5vZGUgYmVpbmcgY3JlYXRlZCAqL1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgaW5pdGlhbCBoZWFwLCB3aXRoIGxlYXN0IGZyZXF1ZW50IGVsZW1lbnQgaW5cbiAgICogaGVhcFtTTUFMTEVTVF0uIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uXG4gICAqIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqL1xuICBzLmhlYXBfbGVuID0gMDtcbiAgcy5oZWFwX21heCA9IEhFQVBfU0laRTtcblxuICBmb3IgKG4gPSAwOyBuIDwgZWxlbXM7IG4rKykge1xuICAgIGlmICh0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgICAgcy5oZWFwWysrcy5oZWFwX2xlbl0gPSBtYXhfY29kZSA9IG47XG4gICAgICBzLmRlcHRoW25dID0gMDtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlIHBremlwIGZvcm1hdCByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IG9uZSBkaXN0YW5jZSBjb2RlIGV4aXN0cyxcbiAgICogYW5kIHRoYXQgYXQgbGVhc3Qgb25lIGJpdCBzaG91bGQgYmUgc2VudCBldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lXG4gICAqIHBvc3NpYmxlIGNvZGUuIFNvIHRvIGF2b2lkIHNwZWNpYWwgY2hlY2tzIGxhdGVyIG9uIHdlIGZvcmNlIGF0IGxlYXN0XG4gICAqIHR3byBjb2RlcyBvZiBub24gemVybyBmcmVxdWVuY3kuXG4gICAqL1xuICB3aGlsZSAocy5oZWFwX2xlbiA8IDIpIHtcbiAgICBub2RlID0gcy5oZWFwWysrcy5oZWFwX2xlbl0gPSAobWF4X2NvZGUgPCAyID8gKyttYXhfY29kZSA6IDApO1xuICAgIHRyZWVbbm9kZSAqIDJdLyouRnJlcSovID0gMTtcbiAgICBzLmRlcHRoW25vZGVdID0gMDtcbiAgICBzLm9wdF9sZW4tLTtcblxuICAgIGlmIChoYXNfc3RyZWUpIHtcbiAgICAgIHMuc3RhdGljX2xlbiAtPSBzdHJlZVtub2RlICogMiArIDFdLyouTGVuKi87XG4gICAgfVxuICAgIC8qIG5vZGUgaXMgMCBvciAxIHNvIGl0IGRvZXMgbm90IGhhdmUgZXh0cmEgYml0cyAqL1xuICB9XG4gIGRlc2MubWF4X2NvZGUgPSBtYXhfY29kZTtcblxuICAvKiBUaGUgZWxlbWVudHMgaGVhcFtoZWFwX2xlbi8yKzEgLi4gaGVhcF9sZW5dIGFyZSBsZWF2ZXMgb2YgdGhlIHRyZWUsXG4gICAqIGVzdGFibGlzaCBzdWItaGVhcHMgb2YgaW5jcmVhc2luZyBsZW5ndGhzOlxuICAgKi9cbiAgZm9yIChuID0gKHMuaGVhcF9sZW4gPj4gMS8qaW50IC8yKi8pOyBuID49IDE7IG4tLSkgeyBwcWRvd25oZWFwKHMsIHRyZWUsIG4pOyB9XG5cbiAgLyogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgYnkgcmVwZWF0ZWRseSBjb21iaW5pbmcgdGhlIGxlYXN0IHR3b1xuICAgKiBmcmVxdWVudCBub2Rlcy5cbiAgICovXG4gIG5vZGUgPSBlbGVtczsgICAgICAgICAgICAgIC8qIG5leHQgaW50ZXJuYWwgbm9kZSBvZiB0aGUgdHJlZSAqL1xuICBkbyB7XG4gICAgLy9wcXJlbW92ZShzLCB0cmVlLCBuKTsgIC8qIG4gPSBub2RlIG9mIGxlYXN0IGZyZXF1ZW5jeSAqL1xuICAgIC8qKiogcHFyZW1vdmUgKioqL1xuICAgIG4gPSBzLmhlYXBbMS8qU01BTExFU1QqL107XG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gcy5oZWFwW3MuaGVhcF9sZW4tLV07XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcbiAgICAvKioqL1xuXG4gICAgbSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTsgLyogbSA9IG5vZGUgb2YgbmV4dCBsZWFzdCBmcmVxdWVuY3kgKi9cblxuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbjsgLyoga2VlcCB0aGUgbm9kZXMgc29ydGVkIGJ5IGZyZXF1ZW5jeSAqL1xuICAgIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbTtcblxuICAgIC8qIENyZWF0ZSBhIG5ldyBub2RlIGZhdGhlciBvZiBuIGFuZCBtICovXG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSB0cmVlW24gKiAyXS8qLkZyZXEqLyArIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAocy5kZXB0aFtuXSA+PSBzLmRlcHRoW21dID8gcy5kZXB0aFtuXSA6IHMuZGVwdGhbbV0pICsgMTtcbiAgICB0cmVlW24gKiAyICsgMV0vKi5EYWQqLyA9IHRyZWVbbSAqIDIgKyAxXS8qLkRhZCovID0gbm9kZTtcblxuICAgIC8qIGFuZCBpbnNlcnQgdGhlIG5ldyBub2RlIGluIHRoZSBoZWFwICovXG4gICAgcy5oZWFwWzEvKlNNQUxMRVNUKi9dID0gbm9kZSsrO1xuICAgIHBxZG93bmhlYXAocywgdHJlZSwgMS8qU01BTExFU1QqLyk7XG5cbiAgfSB3aGlsZSAocy5oZWFwX2xlbiA+PSAyKTtcblxuICBzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcblxuICAvKiBBdCB0aGlzIHBvaW50LCB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LiBXZSBjYW4gbm93XG4gICAqIGdlbmVyYXRlIHRoZSBiaXQgbGVuZ3Rocy5cbiAgICovXG4gIGdlbl9iaXRsZW4ocywgZGVzYyk7XG5cbiAgLyogVGhlIGZpZWxkIGxlbiBpcyBub3cgc2V0LCB3ZSBjYW4gZ2VuZXJhdGUgdGhlIGJpdCBjb2RlcyAqL1xuICBnZW5fY29kZXModHJlZSwgbWF4X2NvZGUsIHMuYmxfY291bnQpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2NhbiBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jaWVzIG9mIHRoZSBjb2Rlc1xuICogaW4gdGhlIGJpdCBsZW5ndGggdHJlZS5cbiAqL1xuZnVuY3Rpb24gc2Nhbl90cmVlKHMsIHRyZWUsIG1heF9jb2RlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cbntcbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgcHJldmxlbiA9IC0xOyAgICAgICAgICAvKiBsYXN0IGVtaXR0ZWQgbGVuZ3RoICovXG4gIHZhciBjdXJsZW47ICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IGNvZGUgKi9cblxuICB2YXIgbmV4dGxlbiA9IHRyZWVbMCAqIDIgKyAxXS8qLkxlbiovOyAvKiBsZW5ndGggb2YgbmV4dCBjb2RlICovXG5cbiAgdmFyIGNvdW50ID0gMDsgICAgICAgICAgICAgLyogcmVwZWF0IGNvdW50IG9mIHRoZSBjdXJyZW50IGNvZGUgKi9cbiAgdmFyIG1heF9jb3VudCA9IDc7ICAgICAgICAgLyogbWF4IHJlcGVhdCBjb3VudCAqL1xuICB2YXIgbWluX2NvdW50ID0gNDsgICAgICAgICAvKiBtaW4gcmVwZWF0IGNvdW50ICovXG5cbiAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgbWluX2NvdW50ID0gMztcbiAgfVxuICB0cmVlWyhtYXhfY29kZSArIDEpICogMiArIDFdLyouTGVuKi8gPSAweGZmZmY7IC8qIGd1YXJkICovXG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlbjtcbiAgICBuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdLyouTGVuKi87XG5cbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgcy5ibF90cmVlW2N1cmxlbiAqIDJdLyouRnJlcSovICs9IGNvdW50O1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcblxuICAgICAgaWYgKGN1cmxlbiAhPT0gcHJldmxlbikgeyBzLmJsX3RyZWVbY3VybGVuICogMl0vKi5GcmVxKi8rKzsgfVxuICAgICAgcy5ibF90cmVlW1JFUF8zXzYgKiAyXS8qLkZyZXEqLysrO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgICAgcy5ibF90cmVlW1JFUFpfM18xMCAqIDJdLyouRnJlcSovKys7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcy5ibF90cmVlW1JFUFpfMTFfMTM4ICogMl0vKi5GcmVxKi8rKztcbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG4gICAgcHJldmxlbiA9IGN1cmxlbjtcblxuICAgIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIG1heF9jb3VudCA9IDY7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG1heF9jb3VudCA9IDc7XG4gICAgICBtaW5fY291bnQgPSA0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSBpbiBjb21wcmVzc2VkIGZvcm0sIHVzaW5nIHRoZSBjb2RlcyBpblxuICogYmxfdHJlZS5cbiAqL1xuZnVuY3Rpb24gc2VuZF90cmVlKHMsIHRyZWUsIG1heF9jb2RlKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7IC8qIHRoZSB0cmVlIHRvIGJlIHNjYW5uZWQgKi9cbi8vICAgIGludCBtYXhfY29kZTsgICAgICAgLyogYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5ICovXG57XG4gIHZhciBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIHByZXZsZW4gPSAtMTsgICAgICAgICAgLyogbGFzdCBlbWl0dGVkIGxlbmd0aCAqL1xuICB2YXIgY3VybGVuOyAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBjb2RlICovXG5cbiAgdmFyIG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV0vKi5MZW4qLzsgLyogbGVuZ3RoIG9mIG5leHQgY29kZSAqL1xuXG4gIHZhciBjb3VudCA9IDA7ICAgICAgICAgICAgIC8qIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlICovXG4gIHZhciBtYXhfY291bnQgPSA3OyAgICAgICAgIC8qIG1heCByZXBlYXQgY291bnQgKi9cbiAgdmFyIG1pbl9jb3VudCA9IDQ7ICAgICAgICAgLyogbWluIHJlcGVhdCBjb3VudCAqL1xuXG4gIC8qIHRyZWVbbWF4X2NvZGUrMV0uTGVuID0gLTE7ICovICAvKiBndWFyZCBhbHJlYWR5IHNldCAqL1xuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlbjtcbiAgICBuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdLyouTGVuKi87XG5cbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgZG8geyBzZW5kX2NvZGUocywgY3VybGVuLCBzLmJsX3RyZWUpOyB9IHdoaWxlICgtLWNvdW50ICE9PSAwKTtcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuICE9PSAwKSB7XG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBjdXJsZW4sIHMuYmxfdHJlZSk7XG4gICAgICAgIGNvdW50LS07XG4gICAgICB9XG4gICAgICAvL0Fzc2VydChjb3VudCA+PSAzICYmIGNvdW50IDw9IDYsIFwiIDNfNj9cIik7XG4gICAgICBzZW5kX2NvZGUocywgUkVQXzNfNiwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDIpO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUFpfM18xMCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBaXzExXzEzOCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDExLCA3KTtcbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG4gICAgcHJldmxlbiA9IGN1cmxlbjtcbiAgICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgICAgbWF4X2NvdW50ID0gMTM4O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBtYXhfY291bnQgPSA2O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3O1xuICAgICAgbWluX2NvdW50ID0gNDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0cnVjdCB0aGUgSHVmZm1hbiB0cmVlIGZvciB0aGUgYml0IGxlbmd0aHMgYW5kIHJldHVybiB0aGUgaW5kZXggaW5cbiAqIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuICovXG5mdW5jdGlvbiBidWlsZF9ibF90cmVlKHMpIHtcbiAgdmFyIG1heF9ibGluZGV4OyAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIERldGVybWluZSB0aGUgYml0IGxlbmd0aCBmcmVxdWVuY2llcyBmb3IgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXMgKi9cbiAgc2Nhbl90cmVlKHMsIHMuZHluX2x0cmVlLCBzLmxfZGVzYy5tYXhfY29kZSk7XG4gIHNjYW5fdHJlZShzLCBzLmR5bl9kdHJlZSwgcy5kX2Rlc2MubWF4X2NvZGUpO1xuXG4gIC8qIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWU6ICovXG4gIGJ1aWxkX3RyZWUocywgcy5ibF9kZXNjKTtcbiAgLyogb3B0X2xlbiBub3cgaW5jbHVkZXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMsIGV4Y2VwdFxuICAgKiB0aGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aHMgY29kZXMgYW5kIHRoZSA1KzUrNCBiaXRzIGZvciB0aGUgY291bnRzLlxuICAgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBiaXQgbGVuZ3RoIGNvZGVzIHRvIHNlbmQuIFRoZSBwa3ppcCBmb3JtYXRcbiAgICogcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCA0IGJpdCBsZW5ndGggY29kZXMgYmUgc2VudC4gKGFwcG5vdGUudHh0IHNheXNcbiAgICogMyBidXQgdGhlIGFjdHVhbCB2YWx1ZSB1c2VkIGlzIDQuKVxuICAgKi9cbiAgZm9yIChtYXhfYmxpbmRleCA9IEJMX0NPREVTIC0gMTsgbWF4X2JsaW5kZXggPj0gMzsgbWF4X2JsaW5kZXgtLSkge1xuICAgIGlmIChzLmJsX3RyZWVbYmxfb3JkZXJbbWF4X2JsaW5kZXhdICogMiArIDFdLyouTGVuKi8gIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvKiBVcGRhdGUgb3B0X2xlbiB0byBpbmNsdWRlIHRoZSBiaXQgbGVuZ3RoIHRyZWUgYW5kIGNvdW50cyAqL1xuICBzLm9wdF9sZW4gKz0gMyAqIChtYXhfYmxpbmRleCArIDEpICsgNSArIDUgKyA0O1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmR5biB0cmVlczogZHluICVsZCwgc3RhdCAlbGRcIixcbiAgLy8gICAgICAgIHMtPm9wdF9sZW4sIHMtPnN0YXRpY19sZW4pKTtcblxuICByZXR1cm4gbWF4X2JsaW5kZXg7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBoZWFkZXIgZm9yIGEgYmxvY2sgdXNpbmcgZHluYW1pYyBIdWZmbWFuIHRyZWVzOiB0aGUgY291bnRzLCB0aGVcbiAqIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMsIHRoZSBsaXRlcmFsIHRyZWUgYW5kIHRoZSBkaXN0YW5jZSB0cmVlLlxuICogSU4gYXNzZXJ0aW9uOiBsY29kZXMgPj0gMjU3LCBkY29kZXMgPj0gMSwgYmxjb2RlcyA+PSA0LlxuICovXG5mdW5jdGlvbiBzZW5kX2FsbF90cmVlcyhzLCBsY29kZXMsIGRjb2RlcywgYmxjb2Rlcylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBpbnQgbGNvZGVzLCBkY29kZXMsIGJsY29kZXM7IC8qIG51bWJlciBvZiBjb2RlcyBmb3IgZWFjaCB0cmVlICovXG57XG4gIHZhciByYW5rOyAgICAgICAgICAgICAgICAgICAgLyogaW5kZXggaW4gYmxfb3JkZXIgKi9cblxuICAvL0Fzc2VydCAobGNvZGVzID49IDI1NyAmJiBkY29kZXMgPj0gMSAmJiBibGNvZGVzID49IDQsIFwibm90IGVub3VnaCBjb2Rlc1wiKTtcbiAgLy9Bc3NlcnQgKGxjb2RlcyA8PSBMX0NPREVTICYmIGRjb2RlcyA8PSBEX0NPREVTICYmIGJsY29kZXMgPD0gQkxfQ09ERVMsXG4gIC8vICAgICAgICBcInRvbyBtYW55IGNvZGVzXCIpO1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvdW50czogXCIpKTtcbiAgc2VuZF9iaXRzKHMsIGxjb2RlcyAtIDI1NywgNSk7IC8qIG5vdCArMjU1IGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dCAqL1xuICBzZW5kX2JpdHMocywgZGNvZGVzIC0gMSwgICA1KTtcbiAgc2VuZF9iaXRzKHMsIGJsY29kZXMgLSA0LCAgNCk7IC8qIG5vdCAtMyBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHQgKi9cbiAgZm9yIChyYW5rID0gMDsgcmFuayA8IGJsY29kZXM7IHJhbmsrKykge1xuICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY29kZSAlMmQgXCIsIGJsX29yZGVyW3JhbmtdKSk7XG4gICAgc2VuZF9iaXRzKHMsIHMuYmxfdHJlZVtibF9vcmRlcltyYW5rXSAqIDIgKyAxXS8qLkxlbiovLCAzKTtcbiAgfVxuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xuXG4gIHNlbmRfdHJlZShzLCBzLmR5bl9sdHJlZSwgbGNvZGVzIC0gMSk7IC8qIGxpdGVyYWwgdHJlZSAqL1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmxpdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcblxuICBzZW5kX3RyZWUocywgcy5keW5fZHRyZWUsIGRjb2RlcyAtIDEpOyAvKiBkaXN0YW5jZSB0cmVlICovXG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZGlzdCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENoZWNrIGlmIHRoZSBkYXRhIHR5cGUgaXMgVEVYVCBvciBCSU5BUlksIHVzaW5nIHRoZSBmb2xsb3dpbmcgYWxnb3JpdGhtOlxuICogLSBURVhUIGlmIHRoZSB0d28gY29uZGl0aW9ucyBiZWxvdyBhcmUgc2F0aXNmaWVkOlxuICogICAgYSkgVGhlcmUgYXJlIG5vIG5vbi1wb3J0YWJsZSBjb250cm9sIGNoYXJhY3RlcnMgYmVsb25naW5nIHRvIHRoZVxuICogICAgICAgXCJibGFjayBsaXN0XCIgKDAuLjYsIDE0Li4yNSwgMjguLjMxKS5cbiAqICAgIGIpIFRoZXJlIGlzIGF0IGxlYXN0IG9uZSBwcmludGFibGUgY2hhcmFjdGVyIGJlbG9uZ2luZyB0byB0aGVcbiAqICAgICAgIFwid2hpdGUgbGlzdFwiICg5IHtUQUJ9LCAxMCB7TEZ9LCAxMyB7Q1J9LCAzMi4uMjU1KS5cbiAqIC0gQklOQVJZIG90aGVyd2lzZS5cbiAqIC0gVGhlIGZvbGxvd2luZyBwYXJ0aWFsbHktcG9ydGFibGUgY29udHJvbCBjaGFyYWN0ZXJzIGZvcm0gYVxuICogICBcImdyYXkgbGlzdFwiIHRoYXQgaXMgaWdub3JlZCBpbiB0aGlzIGRldGVjdGlvbiBhbGdvcml0aG06XG4gKiAgICg3IHtCRUx9LCA4IHtCU30sIDExIHtWVH0sIDEyIHtGRn0sIDI2IHtTVUJ9LCAyNyB7RVNDfSkuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZHMgRnJlcSBvZiBkeW5fbHRyZWUgYXJlIHNldC5cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0X2RhdGFfdHlwZShzKSB7XG4gIC8qIGJsYWNrX21hc2sgaXMgdGhlIGJpdCBtYXNrIG9mIGJsYWNrLWxpc3RlZCBieXRlc1xuICAgKiBzZXQgYml0cyAwLi42LCAxNC4uMjUsIGFuZCAyOC4uMzFcbiAgICogMHhmM2ZmYzA3ZiA9IGJpbmFyeSAxMTExMDAxMTExMTExMTExMTEwMDAwMDAwMTExMTExMVxuICAgKi9cbiAgdmFyIGJsYWNrX21hc2sgPSAweGYzZmZjMDdmO1xuICB2YXIgbjtcblxuICAvKiBDaGVjayBmb3Igbm9uLXRleHR1YWwgKFwiYmxhY2stbGlzdGVkXCIpIGJ5dGVzLiAqL1xuICBmb3IgKG4gPSAwOyBuIDw9IDMxOyBuKyssIGJsYWNrX21hc2sgPj4+PSAxKSB7XG4gICAgaWYgKChibGFja19tYXNrICYgMSkgJiYgKHMuZHluX2x0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBaX0JJTkFSWTtcbiAgICB9XG4gIH1cblxuICAvKiBDaGVjayBmb3IgdGV4dHVhbCAoXCJ3aGl0ZS1saXN0ZWRcIikgYnl0ZXMuICovXG4gIGlmIChzLmR5bl9sdHJlZVs5ICogMl0vKi5GcmVxKi8gIT09IDAgfHwgcy5keW5fbHRyZWVbMTAgKiAyXS8qLkZyZXEqLyAhPT0gMCB8fFxuICAgICAgcy5keW5fbHRyZWVbMTMgKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgIHJldHVybiBaX1RFWFQ7XG4gIH1cbiAgZm9yIChuID0gMzI7IG4gPCBMSVRFUkFMUzsgbisrKSB7XG4gICAgaWYgKHMuZHluX2x0cmVlW24gKiAyXS8qLkZyZXEqLyAhPT0gMCkge1xuICAgICAgcmV0dXJuIFpfVEVYVDtcbiAgICB9XG4gIH1cblxuICAvKiBUaGVyZSBhcmUgbm8gXCJibGFjay1saXN0ZWRcIiBvciBcIndoaXRlLWxpc3RlZFwiIGJ5dGVzOlxuICAgKiB0aGlzIHN0cmVhbSBlaXRoZXIgaXMgZW1wdHkgb3IgaGFzIHRvbGVyYXRlZCAoXCJncmF5LWxpc3RlZFwiKSBieXRlcyBvbmx5LlxuICAgKi9cbiAgcmV0dXJuIFpfQklOQVJZO1xufVxuXG5cbnZhciBzdGF0aWNfaW5pdF9kb25lID0gZmFsc2U7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgdHJlZSBkYXRhIHN0cnVjdHVyZXMgZm9yIGEgbmV3IHpsaWIgc3RyZWFtLlxuICovXG5mdW5jdGlvbiBfdHJfaW5pdChzKVxue1xuXG4gIGlmICghc3RhdGljX2luaXRfZG9uZSkge1xuICAgIHRyX3N0YXRpY19pbml0KCk7XG4gICAgc3RhdGljX2luaXRfZG9uZSA9IHRydWU7XG4gIH1cblxuICBzLmxfZGVzYyAgPSBuZXcgVHJlZURlc2Mocy5keW5fbHRyZWUsIHN0YXRpY19sX2Rlc2MpO1xuICBzLmRfZGVzYyAgPSBuZXcgVHJlZURlc2Mocy5keW5fZHRyZWUsIHN0YXRpY19kX2Rlc2MpO1xuICBzLmJsX2Rlc2MgPSBuZXcgVHJlZURlc2Mocy5ibF90cmVlLCBzdGF0aWNfYmxfZGVzYyk7XG5cbiAgcy5iaV9idWYgPSAwO1xuICBzLmJpX3ZhbGlkID0gMDtcblxuICAvKiBJbml0aWFsaXplIHRoZSBmaXJzdCBibG9jayBvZiB0aGUgZmlyc3QgZmlsZTogKi9cbiAgaW5pdF9ibG9jayhzKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSBzdG9yZWQgYmxvY2tcbiAqL1xuZnVuY3Rpb24gX3RyX3N0b3JlZF9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgKmJ1ZjsgICAgICAgLyogaW5wdXQgYmxvY2sgKi9cbi8vdWxnIHN0b3JlZF9sZW47ICAgLyogbGVuZ3RoIG9mIGlucHV0IGJsb2NrICovXG4vL2ludCBsYXN0OyAgICAgICAgIC8qIG9uZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGUgKi9cbntcbiAgc2VuZF9iaXRzKHMsIChTVE9SRURfQkxPQ0sgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7ICAgIC8qIHNlbmQgYmxvY2sgdHlwZSAqL1xuICBjb3B5X2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgdHJ1ZSk7IC8qIHdpdGggaGVhZGVyICovXG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIG9uZSBlbXB0eSBzdGF0aWMgYmxvY2sgdG8gZ2l2ZSBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlLlxuICogVGhpcyB0YWtlcyAxMCBiaXRzLCBvZiB3aGljaCA3IG1heSByZW1haW4gaW4gdGhlIGJpdCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIF90cl9hbGlnbihzKSB7XG4gIHNlbmRfYml0cyhzLCBTVEFUSUNfVFJFRVMgPDwgMSwgMyk7XG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIHN0YXRpY19sdHJlZSk7XG4gIGJpX2ZsdXNoKHMpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRGV0ZXJtaW5lIHRoZSBiZXN0IGVuY29kaW5nIGZvciB0aGUgY3VycmVudCBibG9jazogZHluYW1pYyB0cmVlcywgc3RhdGljXG4gKiB0cmVlcyBvciBzdG9yZSwgYW5kIG91dHB1dCB0aGUgZW5jb2RlZCBibG9jayB0byB0aGUgemlwIGZpbGUuXG4gKi9cbmZ1bmN0aW9uIF90cl9mbHVzaF9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpXG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgKmJ1ZjsgICAgICAgLyogaW5wdXQgYmxvY2ssIG9yIE5VTEwgaWYgdG9vIG9sZCAqL1xuLy91bGcgc3RvcmVkX2xlbjsgICAvKiBsZW5ndGggb2YgaW5wdXQgYmxvY2sgKi9cbi8vaW50IGxhc3Q7ICAgICAgICAgLyogb25lIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZSAqL1xue1xuICB2YXIgb3B0X2xlbmIsIHN0YXRpY19sZW5iOyAgLyogb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBpbiBieXRlcyAqL1xuICB2YXIgbWF4X2JsaW5kZXggPSAwOyAgICAgICAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIEJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzIHVubGVzcyBhIHN0b3JlZCBibG9jayBpcyBmb3JjZWQgKi9cbiAgaWYgKHMubGV2ZWwgPiAwKSB7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZmlsZSBpcyBiaW5hcnkgb3IgdGV4dCAqL1xuICAgIGlmIChzLnN0cm0uZGF0YV90eXBlID09PSBaX1VOS05PV04pIHtcbiAgICAgIHMuc3RybS5kYXRhX3R5cGUgPSBkZXRlY3RfZGF0YV90eXBlKHMpO1xuICAgIH1cblxuICAgIC8qIENvbnN0cnVjdCB0aGUgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXMgKi9cbiAgICBidWlsZF90cmVlKHMsIHMubF9kZXNjKTtcbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5saXQgZGF0YTogZHluICVsZCwgc3RhdCAlbGRcIiwgcy0+b3B0X2xlbixcbiAgICAvLyAgICAgICAgcy0+c3RhdGljX2xlbikpO1xuXG4gICAgYnVpbGRfdHJlZShzLCBzLmRfZGVzYyk7XG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxuZGlzdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLCBzLT5vcHRfbGVuLFxuICAgIC8vICAgICAgICBzLT5zdGF0aWNfbGVuKSk7XG4gICAgLyogQXQgdGhpcyBwb2ludCwgb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBhcmUgdGhlIHRvdGFsIGJpdCBsZW5ndGhzIG9mXG4gICAgICogdGhlIGNvbXByZXNzZWQgYmxvY2sgZGF0YSwgZXhjbHVkaW5nIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucy5cbiAgICAgKi9cblxuICAgIC8qIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWUgZm9yIHRoZSBhYm92ZSB0d28gdHJlZXMsIGFuZCBnZXQgdGhlIGluZGV4XG4gICAgICogaW4gYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gICAgICovXG4gICAgbWF4X2JsaW5kZXggPSBidWlsZF9ibF90cmVlKHMpO1xuXG4gICAgLyogRGV0ZXJtaW5lIHRoZSBiZXN0IGVuY29kaW5nLiBDb21wdXRlIHRoZSBibG9jayBsZW5ndGhzIGluIGJ5dGVzLiAqL1xuICAgIG9wdF9sZW5iID0gKHMub3B0X2xlbiArIDMgKyA3KSA+Pj4gMztcbiAgICBzdGF0aWNfbGVuYiA9IChzLnN0YXRpY19sZW4gKyAzICsgNykgPj4+IDM7XG5cbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5vcHQgJWx1KCVsdSkgc3RhdCAlbHUoJWx1KSBzdG9yZWQgJWx1IGxpdCAldSBcIixcbiAgICAvLyAgICAgICAgb3B0X2xlbmIsIHMtPm9wdF9sZW4sIHN0YXRpY19sZW5iLCBzLT5zdGF0aWNfbGVuLCBzdG9yZWRfbGVuLFxuICAgIC8vICAgICAgICBzLT5sYXN0X2xpdCkpO1xuXG4gICAgaWYgKHN0YXRpY19sZW5iIDw9IG9wdF9sZW5iKSB7IG9wdF9sZW5iID0gc3RhdGljX2xlbmI7IH1cblxuICB9IGVsc2Uge1xuICAgIC8vIEFzc2VydChidWYgIT0gKGNoYXIqKTAsIFwibG9zdCBidWZcIik7XG4gICAgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYiA9IHN0b3JlZF9sZW4gKyA1OyAvKiBmb3JjZSBhIHN0b3JlZCBibG9jayAqL1xuICB9XG5cbiAgaWYgKChzdG9yZWRfbGVuICsgNCA8PSBvcHRfbGVuYikgJiYgKGJ1ZiAhPT0gLTEpKSB7XG4gICAgLyogNDogdHdvIHdvcmRzIGZvciB0aGUgbGVuZ3RocyAqL1xuXG4gICAgLyogVGhlIHRlc3QgYnVmICE9IE5VTEwgaXMgb25seSBuZWNlc3NhcnkgaWYgTElUX0JVRlNJWkUgPiBXU0laRS5cbiAgICAgKiBPdGhlcndpc2Ugd2UgY2FuJ3QgaGF2ZSBwcm9jZXNzZWQgbW9yZSB0aGFuIFdTSVpFIGlucHV0IGJ5dGVzIHNpbmNlXG4gICAgICogdGhlIGxhc3QgYmxvY2sgZmx1c2gsIGJlY2F1c2UgY29tcHJlc3Npb24gd291bGQgaGF2ZSBiZWVuXG4gICAgICogc3VjY2Vzc2Z1bC4gSWYgTElUX0JVRlNJWkUgPD0gV1NJWkUsIGl0IGlzIG5ldmVyIHRvbyBsYXRlIHRvXG4gICAgICogdHJhbnNmb3JtIGEgYmxvY2sgaW50byBhIHN0b3JlZCBibG9jay5cbiAgICAgKi9cbiAgICBfdHJfc3RvcmVkX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdCk7XG5cbiAgfSBlbHNlIGlmIChzLnN0cmF0ZWd5ID09PSBaX0ZJWEVEIHx8IHN0YXRpY19sZW5iID09PSBvcHRfbGVuYikge1xuXG4gICAgc2VuZF9iaXRzKHMsIChTVEFUSUNfVFJFRVMgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7XG4gICAgY29tcHJlc3NfYmxvY2socywgc3RhdGljX2x0cmVlLCBzdGF0aWNfZHRyZWUpO1xuXG4gIH0gZWxzZSB7XG4gICAgc2VuZF9iaXRzKHMsIChEWU5fVFJFRVMgPDwgMSkgKyAobGFzdCA/IDEgOiAwKSwgMyk7XG4gICAgc2VuZF9hbGxfdHJlZXMocywgcy5sX2Rlc2MubWF4X2NvZGUgKyAxLCBzLmRfZGVzYy5tYXhfY29kZSArIDEsIG1heF9ibGluZGV4ICsgMSk7XG4gICAgY29tcHJlc3NfYmxvY2socywgcy5keW5fbHRyZWUsIHMuZHluX2R0cmVlKTtcbiAgfVxuICAvLyBBc3NlcnQgKHMtPmNvbXByZXNzZWRfbGVuID09IHMtPmJpdHNfc2VudCwgXCJiYWQgY29tcHJlc3NlZCBzaXplXCIpO1xuICAvKiBUaGUgYWJvdmUgY2hlY2sgaXMgbWFkZSBtb2QgMl4zMiwgZm9yIGZpbGVzIGxhcmdlciB0aGFuIDUxMiBNQlxuICAgKiBhbmQgdUxvbmcgaW1wbGVtZW50ZWQgb24gMzIgYml0cy5cbiAgICovXG4gIGluaXRfYmxvY2socyk7XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBiaV93aW5kdXAocyk7XG4gIH1cbiAgLy8gVHJhY2V2KChzdGRlcnIsXCJcXG5jb21wcmxlbiAlbHUoJWx1KSBcIiwgcy0+Y29tcHJlc3NlZF9sZW4+PjMsXG4gIC8vICAgICAgIHMtPmNvbXByZXNzZWRfbGVuLTcqbGFzdCkpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhdmUgdGhlIG1hdGNoIGluZm8gYW5kIHRhbGx5IHRoZSBmcmVxdWVuY3kgY291bnRzLiBSZXR1cm4gdHJ1ZSBpZlxuICogdGhlIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBfdHJfdGFsbHkocywgZGlzdCwgbGMpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdW5zaWduZWQgZGlzdDsgIC8qIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nICovXG4vLyAgICB1bnNpZ25lZCBsYzsgICAgLyogbWF0Y2ggbGVuZ3RoLU1JTl9NQVRDSCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdD09MCkgKi9cbntcbiAgLy92YXIgb3V0X2xlbmd0aCwgaW5fbGVuZ3RoLCBkY29kZTtcblxuICBzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBzLmxhc3RfbGl0ICogMl0gICAgID0gKGRpc3QgPj4+IDgpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgcy5sYXN0X2xpdCAqIDIgKyAxXSA9IGRpc3QgJiAweGZmO1xuXG4gIHMucGVuZGluZ19idWZbcy5sX2J1ZiArIHMubGFzdF9saXRdID0gbGMgJiAweGZmO1xuICBzLmxhc3RfbGl0Kys7XG5cbiAgaWYgKGRpc3QgPT09IDApIHtcbiAgICAvKiBsYyBpcyB0aGUgdW5tYXRjaGVkIGNoYXIgKi9cbiAgICBzLmR5bl9sdHJlZVtsYyAqIDJdLyouRnJlcSovKys7XG4gIH0gZWxzZSB7XG4gICAgcy5tYXRjaGVzKys7XG4gICAgLyogSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSCAqL1xuICAgIGRpc3QtLTsgICAgICAgICAgICAgLyogZGlzdCA9IG1hdGNoIGRpc3RhbmNlIC0gMSAqL1xuICAgIC8vQXNzZXJ0KCh1c2gpZGlzdCA8ICh1c2gpTUFYX0RJU1QocykgJiZcbiAgICAvLyAgICAgICAodXNoKWxjIDw9ICh1c2gpKE1BWF9NQVRDSC1NSU5fTUFUQ0gpICYmXG4gICAgLy8gICAgICAgKHVzaClkX2NvZGUoZGlzdCkgPCAodXNoKURfQ09ERVMsICBcIl90cl90YWxseTogYmFkIG1hdGNoXCIpO1xuXG4gICAgcy5keW5fbHRyZWVbKF9sZW5ndGhfY29kZVtsY10gKyBMSVRFUkFMUyArIDEpICogMl0vKi5GcmVxKi8rKztcbiAgICBzLmR5bl9kdHJlZVtkX2NvZGUoZGlzdCkgKiAyXS8qLkZyZXEqLysrO1xuICB9XG5cbi8vICghKSBUaGlzIGJsb2NrIGlzIGRpc2FibGVkIGluIHpsaWIgZGVmYXVsdHMsXG4vLyBkb24ndCBlbmFibGUgaXQgZm9yIGJpbmFyeSBjb21wYXRpYmlsaXR5XG5cbi8vI2lmZGVmIFRSVU5DQVRFX0JMT0NLXG4vLyAgLyogVHJ5IHRvIGd1ZXNzIGlmIGl0IGlzIHByb2ZpdGFibGUgdG8gc3RvcCB0aGUgY3VycmVudCBibG9jayBoZXJlICovXG4vLyAgaWYgKChzLmxhc3RfbGl0ICYgMHgxZmZmKSA9PT0gMCAmJiBzLmxldmVsID4gMikge1xuLy8gICAgLyogQ29tcHV0ZSBhbiB1cHBlciBib3VuZCBmb3IgdGhlIGNvbXByZXNzZWQgbGVuZ3RoICovXG4vLyAgICBvdXRfbGVuZ3RoID0gcy5sYXN0X2xpdCo4O1xuLy8gICAgaW5fbGVuZ3RoID0gcy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQ7XG4vL1xuLy8gICAgZm9yIChkY29kZSA9IDA7IGRjb2RlIDwgRF9DT0RFUzsgZGNvZGUrKykge1xuLy8gICAgICBvdXRfbGVuZ3RoICs9IHMuZHluX2R0cmVlW2Rjb2RlKjJdLyouRnJlcSovICogKDUgKyBleHRyYV9kYml0c1tkY29kZV0pO1xuLy8gICAgfVxuLy8gICAgb3V0X2xlbmd0aCA+Pj49IDM7XG4vLyAgICAvL1RyYWNldigoc3RkZXJyLFwiXFxubGFzdF9saXQgJXUsIGluICVsZCwgb3V0IH4lbGQoJWxkJSUpIFwiLFxuLy8gICAgLy8gICAgICAgcy0+bGFzdF9saXQsIGluX2xlbmd0aCwgb3V0X2xlbmd0aCxcbi8vICAgIC8vICAgICAgIDEwMEwgLSBvdXRfbGVuZ3RoKjEwMEwvaW5fbGVuZ3RoKSk7XG4vLyAgICBpZiAocy5tYXRjaGVzIDwgKHMubGFzdF9saXQ+PjEpLyppbnQgLzIqLyAmJiBvdXRfbGVuZ3RoIDwgKGluX2xlbmd0aD4+MSkvKmludCAvMiovKSB7XG4vLyAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgfVxuLy8gIH1cbi8vI2VuZGlmXG5cbiAgcmV0dXJuIChzLmxhc3RfbGl0ID09PSBzLmxpdF9idWZzaXplIC0gMSk7XG4gIC8qIFdlIGF2b2lkIGVxdWFsaXR5IHdpdGggbGl0X2J1ZnNpemUgYmVjYXVzZSBvZiB3cmFwYXJvdW5kIGF0IDY0S1xuICAgKiBvbiAxNiBiaXQgbWFjaGluZXMgYW5kIGJlY2F1c2Ugc3RvcmVkIGJsb2NrcyBhcmUgcmVzdHJpY3RlZCB0b1xuICAgKiA2NEstMSBieXRlcy5cbiAgICovXG59XG5cbmV4cG9ydHMuX3RyX2luaXQgID0gX3RyX2luaXQ7XG5leHBvcnRzLl90cl9zdG9yZWRfYmxvY2sgPSBfdHJfc3RvcmVkX2Jsb2NrO1xuZXhwb3J0cy5fdHJfZmx1c2hfYmxvY2sgID0gX3RyX2ZsdXNoX2Jsb2NrO1xuZXhwb3J0cy5fdHJfdGFsbHkgPSBfdHJfdGFsbHk7XG5leHBvcnRzLl90cl9hbGlnbiA9IF90cl9hbGlnbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5mdW5jdGlvbiBaU3RyZWFtKCkge1xuICAvKiBuZXh0IGlucHV0IGJ5dGUgKi9cbiAgdGhpcy5pbnB1dCA9IG51bGw7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcbiAgdGhpcy5uZXh0X2luID0gMDtcbiAgLyogbnVtYmVyIG9mIGJ5dGVzIGF2YWlsYWJsZSBhdCBpbnB1dCAqL1xuICB0aGlzLmF2YWlsX2luID0gMDtcbiAgLyogdG90YWwgbnVtYmVyIG9mIGlucHV0IGJ5dGVzIHJlYWQgc28gZmFyICovXG4gIHRoaXMudG90YWxfaW4gPSAwO1xuICAvKiBuZXh0IG91dHB1dCBieXRlIHNob3VsZCBiZSBwdXQgdGhlcmUgKi9cbiAgdGhpcy5vdXRwdXQgPSBudWxsOyAvLyBKUyBzcGVjaWZpYywgYmVjYXVzZSB3ZSBoYXZlIG5vIHBvaW50ZXJzXG4gIHRoaXMubmV4dF9vdXQgPSAwO1xuICAvKiByZW1haW5pbmcgZnJlZSBzcGFjZSBhdCBvdXRwdXQgKi9cbiAgdGhpcy5hdmFpbF9vdXQgPSAwO1xuICAvKiB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgb3V0cHV0IHNvIGZhciAqL1xuICB0aGlzLnRvdGFsX291dCA9IDA7XG4gIC8qIGxhc3QgZXJyb3IgbWVzc2FnZSwgTlVMTCBpZiBubyBlcnJvciAqL1xuICB0aGlzLm1zZyA9ICcnLypaX05VTEwqLztcbiAgLyogbm90IHZpc2libGUgYnkgYXBwbGljYXRpb25zICovXG4gIHRoaXMuc3RhdGUgPSBudWxsO1xuICAvKiBiZXN0IGd1ZXNzIGFib3V0IHRoZSBkYXRhIHR5cGU6IGJpbmFyeSBvciB0ZXh0ICovXG4gIHRoaXMuZGF0YV90eXBlID0gMi8qWl9VTktOT1dOKi87XG4gIC8qIGFkbGVyMzIgdmFsdWUgb2YgdGhlIHVuY29tcHJlc3NlZCBkYXRhICovXG4gIHRoaXMuYWRsZXIgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpTdHJlYW07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZGF0YV9jb2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2RhdGFfbGluZWFyR3JhZGllbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9kYXRhX3JhZGlhbEdyYWRpZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfZmFjdG9yaWVzX2ZhY3RvcnlCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=