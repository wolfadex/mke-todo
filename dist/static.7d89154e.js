(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(5);

__webpack_require__(6);

var _AddButton = __webpack_require__(7);

var _AddButton2 = _interopRequireDefault(_AddButton);

var _ToggleButton = __webpack_require__(8);

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ifKeyThen = function ifKeyThen(next) {
  return function (e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      next(e);
    }
  };
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      list: [],
      showAdd: false
    }, _this.stopAdding = function (e) {
      if (e.keyCode === 27) {
        _this.setState({
          showAdd: false
        });
      }
    }, _this.showAdd = function () {
      _this.setState({
        showAdd: true
      });
    }, _this.handleAdd = function (newItem) {
      _this.setState(function (_ref2) {
        var list = _ref2.list;
        return {
          list: [].concat(_toConsumableArray(list), [{ text: newItem, done: false }]),
          showAdd: false
        };
      });
    }, _this.toggleDone = function (i) {
      return function () {
        _this.setState(function (_ref3) {
          var list = _ref3.list;
          return {
            list: [].concat(_toConsumableArray(list.slice(0, i)), [_extends({}, list[i], {
              done: !list[i].done
            })], _toConsumableArray(list.slice(i + 1)))
          };
        });
      };
    }, _this.handleDelete = function (i) {
      return function () {
        _this.setState(function (_ref4) {
          var list = _ref4.list;
          return {
            list: [].concat(_toConsumableArray(list.slice(0, i)), _toConsumableArray(list.slice(i + 1)))
          };
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.stopAdding);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.stopAdding);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          list = _state.list,
          showAdd = _state.showAdd;

      var fullList = [].concat(_toConsumableArray(list));

      fullList.push({
        add: true
      });
      fullList.push({});
      fullList.push({});

      while (fullList.length < 5) {
        fullList.push({});
      }

      if (fullList.length % 2 === 0) {
        fullList.push({});
      }

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'header',
          { className: 'mustard' },
          _react2.default.createElement(
            'div',
            { className: 'white circle-top' },
            'MKE Todo'
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          fullList.map(function () {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                text = _ref5.text,
                done = _ref5.done,
                add = _ref5.add;

            var i = arguments[1];

            var colors = i % 2 === 0 ? 'process-blue' : 'national-flag-blue';
            if (add) {
              return _react2.default.createElement(_AddButton2.default, {
                className: colors,
                onClick: _this2.showAdd,
                onKeyDown: ifKeyThen(_this2.showAdd),
                showAdd: showAdd,
                onDone: _this2.handleAdd
              });
            }
            return _react2.default.createElement(
              'li',
              { key: i, className: colors },
              text && _react2.default.createElement(_ToggleButton2.default, {
                isDone: done,
                className: 'done-button ' + (i % 2 === 0 ? 'national-flag-blue' : 'process-blue'),
                onClick: _this2.toggleDone(i),
                onKeyDown: ifKeyThen(_this2.toggleDone(i))
              }),
              text && _react2.default.createElement(
                'span',
                { className: 'list-item ' + (done ? 'done' : '') },
                text
              ),
              text && _react2.default.createElement(
                'span',
                {
                  tabIndex: '0',
                  className: 'delete-button button',
                  onClick: _this2.handleDelete(i),
                  onKeyDown: ifKeyThen(_this2.handleDelete(i))
                },
                'x'
              )
            );
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddButton = function (_Component) {
  _inherits(AddButton, _Component);

  function AddButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddButton.__proto__ || Object.getPrototypeOf(AddButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      nextItem: ''
    }, _this.handleChange = function (e) {
      _this.setState({
        nextItem: e.target.value.substr(0, 22)
      });
    }, _this.handleDone = function (e) {
      if (e.keyCode === 13) {
        _this.setState({
          nextItem: ''
        });
        _this.props.onDone(_this.state.nextItem);
      } else {
        console.log(e.keyCode);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          showAdd = _props.showAdd,
          onDone = _props.onDone,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          otherProps = _objectWithoutProperties(_props, ['className', 'showAdd', 'onDone', 'onClick', 'onKeyDown']);

      var nextItem = this.state.nextItem;

      var addProps = _extends({}, otherProps);

      if (!showAdd) {
        addProps.onClick = onClick;
        addProps.onKeyDown = onKeyDown;
      }

      return _react2.default.createElement(
        'li',
        _extends({}, addProps, {
          className: className + ' add-button button',
          tabIndex: '0'
        }),
        !showAdd && '+',
        showAdd && _react2.default.createElement('input', {
          autoFocus: true,
          type: 'text',
          value: nextItem,
          onChange: this.handleChange,
          onKeyDown: this.handleDone
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.showAdd && prevState.nextItem !== '') {
        return {
          nextItem: ''
        };
      }

      return null;
    }
  }]);

  return AddButton;
}(_react.Component);

exports.default = AddButton;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleButton = function (_Component) {
  _inherits(ToggleButton, _Component);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    return _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).apply(this, arguments));
  }

  _createClass(ToggleButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          isDone = _props.isDone,
          className = _props.className,
          otherProps = _objectWithoutProperties(_props, ["isDone", "className"]);

      return _react2.default.createElement(
        "div",
        _extends({}, otherProps, { className: className + " toggle-outer", tabIndex: "0" }),
        isDone && _react2.default.createElement("div", { className: "toggle-inner" })
      );
    }
  }]);

  return ToggleButton;
}(_react.Component);

exports.default = ToggleButton;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.7d89154e.js.map