/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"assets/js/bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./lib/index.js","assets/js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/command/commandCenter.js":
/*!**************************************!*\
  !*** ./lib/command/commandCenter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var subscribe_commands = {};

var Command = function () {
    function Command(name) {
        _classCallCheck(this, Command);

        this.name = name;
        this.func = null;
    }

    /**
     * 执行命令
     */


    _createClass(Command, [{
        key: "execute",
        value: function execute() {
            if (this.func === null) {
                throw new Error("\u547D\u4EE4\uFF1A" + this.name + "\u8FD8\u6CA1\u6709\u6CE8\u518C!");
            }
            this.func.apply(null, Array.prototype.slice.call(arguments));
            return this;
        }

        /**
         * 注册命令
         */

    }, {
        key: "register",
        value: function register(func) {
            this.func = func;
            return this;
        }
    }]);

    return Command;
}();

var CommandCenter = function () {
    function CommandCenter() {
        _classCallCheck(this, CommandCenter);
    }

    _createClass(CommandCenter, null, [{
        key: "command",
        value: function command(name) {
            if (!subscribe_commands[name]) {
                subscribe_commands[name] = new Command(name);
            }
            return subscribe_commands[name];
        }
    }]);

    return CommandCenter;
}();

exports.default = CommandCenter;

/***/ }),

/***/ "./lib/command/commands.js":
/*!*********************************!*\
  !*** ./lib/command/commands.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Tabs: {
        Add: "addTab",
        Remove: "removeTab",
        Close: "closeTab",
        CloseAll: "closeAllTabs",
        CloseToRight: "closeToRightTabs",
        CloseOthers: "closeOtherTabs"
    }
};

/***/ }),

/***/ "./lib/command/index.js":
/*!******************************!*\
  !*** ./lib/command/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Commands = exports.CommandCenter = undefined;

var _commandCenter = __webpack_require__(/*! ./commandCenter */ "./lib/command/commandCenter.js");

var _commandCenter2 = _interopRequireDefault(_commandCenter);

var _commands = __webpack_require__(/*! ./commands */ "./lib/command/commands.js");

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CommandCenter = _commandCenter2.default;
exports.Commands = _commands2.default;

/***/ }),

/***/ "./lib/common/const.js":
/*!*****************************!*\
  !*** ./lib/common/const.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Functions = {
    Project: "project",
    Search: "search",
    Setting: "setting"
};

module.exports = {
    Functions: Functions
};

/***/ }),

/***/ "./lib/common/eventBus.js":
/*!********************************!*\
  !*** ./lib/common/eventBus.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EventEmitter = __webpack_require__(/*! events */ "events");

exports.default = new EventEmitter();

/***/ }),

/***/ "./lib/components/console/output.js":
/*!******************************************!*\
  !*** ./lib/components/console/output.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _xterm = __webpack_require__(/*! xterm */ "./node_modules/_xterm@3.5.1@xterm/lib/public/Terminal.js");

var _fit = __webpack_require__(/*! xterm/lib/addons/fit/fit */ "./node_modules/_xterm@3.5.1@xterm/lib/addons/fit/fit.js");

var fit = _interopRequireWildcard(_fit);

var _search = __webpack_require__(/*! xterm/lib/addons/search/search */ "./node_modules/_xterm@3.5.1@xterm/lib/addons/search/search.js");

var search = _interopRequireWildcard(_search);

var _webLinks = __webpack_require__(/*! xterm/lib/addons/webLinks/webLinks */ "./node_modules/_xterm@3.5.1@xterm/lib/addons/webLinks/webLinks.js");

var webLinks = _interopRequireWildcard(_webLinks);

var _winptyCompat = __webpack_require__(/*! xterm/lib/addons/winptyCompat/winptyCompat */ "./node_modules/_xterm@3.5.1@xterm/lib/addons/winptyCompat/winptyCompat.js");

var winptyCompat = _interopRequireWildcard(_winptyCompat);

var _attach = __webpack_require__(/*! xterm/lib/addons/attach/attach */ "./node_modules/_xterm@3.5.1@xterm/lib/addons/attach/attach.js");

var attach = _interopRequireWildcard(_attach);

var _eventBus = __webpack_require__(/*! ../../common/eventBus */ "./lib/common/eventBus.js");

var _eventBus2 = _interopRequireDefault(_eventBus);

var _electron = __webpack_require__(/*! electron */ "electron");

var _vm = __webpack_require__(/*! vm */ "vm");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Remote = __webpack_require__(/*! electron */ "electron").remote;

var Styles = {
    container: {
        color: 'white'
    }
};

_xterm.Terminal.applyAddon(fit);
_xterm.Terminal.applyAddon(webLinks);
_xterm.Terminal.applyAddon(winptyCompat);
_xterm.Terminal.applyAddon(attach);
_xterm.Terminal.applyAddon(search);

var ConsoleOutput = function (_Component) {
    _inherits(ConsoleOutput, _Component);

    function ConsoleOutput(props) {
        _classCallCheck(this, ConsoleOutput);

        var _this = _possibleConstructorReturn(this, (ConsoleOutput.__proto__ || Object.getPrototypeOf(ConsoleOutput)).call(this, props));

        _this.setRef = function (ref) {
            _this.container = ref;
            var sellOption = _extends({}, g_shellOptions, {
                cols: 80,
                rows: 6
            });
            if (!_this.xterm) {
                _this.ptyProcess = g_pty.spawn(g_shell, [], g_shellOptions);
                _this.xterm = new _xterm.Terminal();
                _this.xterm.open(_this.container);
                _this.xterm.winptyCompatInit();
                _this.xterm.webLinksInit();
                _this.xterm.on("blur", function () {
                    _this.isFocus = false;
                });
                _this.xterm.on("focus", function () {
                    _this.isFocus = true;
                });
                _this.xterm.on("data", function (data) {
                    _this.ptyProcess.write(data);
                });
                _this.ptyProcess.on("data", function (data) {
                    _this.xterm.write(data);
                });
                _this.xterm.fit();
            }
        };

        _this.keyDown = function (e) {
            var canBePasted, canBeCopied, canSelectAll;

            canBePasted = false;
            if (g_os.isMac()) {
                canBePasted = e.metaKey && e.keyCode === 86;
                canBeCopied = e.metaKey && e.keyCode === 91;
                canSelectAll = e.metaKey && e.keyCode === 65;
            } else {
                canBePasted = e.ctrlKey && e.keyCode === 86;
                canBePasted = e.ctrlKey && e.keyCode === 91;
                canSelectAll = e.altKey && e.keyCode === 65;
            }
            if (canBePasted) {
                _this.paste();
            } else if (canBeCopied) {
                _this.copy();
            } else if (canSelectAll) {
                _this.selectAll();
            }
        };

        _this.mouseDown = function (e) {
            if (e.button === 2) {
                _this.contentMenus.items[0].enabled = _this.xterm.hasSelection();
                _this.contentMenus.popup(Remote.getCurrentWindow());
            }
        };

        var ID = _this.props.ID;

        _this.ID = ID;
        _this.isFocus = false;
        _this.contentMenus = new Remote.Menu();
        _this.contentMenus.append(new Remote.MenuItem({
            label: "Copy",
            click: function click() {
                _this.copy();
            }
        }));
        _this.contentMenus.append(new Remote.MenuItem({
            label: "Paste",
            click: function click() {
                _this.paste();
            }
        }));
        _this.contentMenus.append(new Remote.MenuItem({
            label: "SelectAll",
            click: function click() {
                _this.selectAll();
            }
        }));
        _this.contentMenus.append(new Remote.MenuItem({
            type: "separator"
        }));
        _this.contentMenus.append(new Remote.MenuItem({
            label: "Clear",
            click: function click() {
                _this.clear();
            }
        }));
        return _this;
    }

    _createClass(ConsoleOutput, [{
        key: 'copy',
        value: function copy() {
            if (this.xterm.hasSelection()) {
                _electron.clipboard.writeText(this.xterm.getSelection());
            }
        }
    }, {
        key: 'paste',
        value: function paste() {
            var text = _electron.clipboard.readText();
            if (text) {
                this.xterm._core.send(text);
                this.xterm.focus();
            }
        }
    }, {
        key: 'selectAll',
        value: function selectAll() {
            this.xterm.selectAll();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.xterm.clear();
        }
    }, {
        key: 'resizeTerm',
        value: function resizeTerm() {
            if (this.xterm) {
                var cols = parseInt((this.container.clientWidth - this.xterm._core.viewport.scrollBarWidth) / this.xterm._core.renderer.dimensions.actualCellWidth);
                cols = cols < 60 ? 60 : cols;
                this.ptyProcess.resize(cols, 6);
                this.xterm.fit();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.resizeTerm();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            try {
                if (g_os.isWindow()) {
                    this.ptyProcess.kill();
                } else {
                    this.ptyProcess.kill(0);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                height = _props.height,
                visible = _props.visible;

            var style = _extends({}, Styles.container, {
                height: height + 'px',
                display: visible ? 'block' : 'none'
            });
            return _react2.default.createElement('div', { style: style, ref: this.setRef, onKeyDown: this.keyDown, onMouseDown: this.mouseDown });
        }
    }]);

    return ConsoleOutput;
}(_react.Component);

exports.default = ConsoleOutput;

/***/ }),

/***/ "./lib/components/console/toolBox.js":
/*!*******************************************!*\
  !*** ./lib/components/console/toolBox.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(/*! antd/lib/icon */ "./node_modules/_antd@3.6.6@antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/lib/select */ "./node_modules/_antd@3.6.6@antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/lib/icon/style */ "./node_modules/_antd@3.6.6@antd/lib/icon/style/index.js");

__webpack_require__(/*! antd/lib/select/style */ "./node_modules/_antd@3.6.6@antd/lib/select/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.10@lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _strUtil = __webpack_require__(/*! ../../utils/strUtil */ "./lib/utils/strUtil.js");

var _strUtil2 = _interopRequireDefault(_strUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var Styles = {
    icon: {
        fontSize: 20,
        color: 'white'
    }
};

var ConsoleToolBox = function (_Component) {
    _inherits(ConsoleToolBox, _Component);

    function ConsoleToolBox(props) {
        _classCallCheck(this, ConsoleToolBox);

        var _this = _possibleConstructorReturn(this, (ConsoleToolBox.__proto__ || Object.getPrototypeOf(ConsoleToolBox)).call(this, props));

        _this.handleChange = function (value) {
            _this.setState({
                selectOption: value
            });
            _this.props.change(value);
        };

        _this.foldOrUnFold = function () {
            var icon = _this.state.upOrDownIcon;
            if (icon === "up") {
                icon = "down";
                _this.props.unfold();
            } else {
                icon = "up";
                _this.props.fold();
            }
            _this.setState({
                upOrDownIcon: icon
            });
        };

        _this.addConsole = function () {
            var options, selectOption;

            options = _this.state.options;
            if (options.length >= 6) {
                return;
            }
            selectOption = _strUtil2.default.randomStr(9);
            options = [].concat(_toConsumableArray(_this.state.options), [selectOption]);
            _this.setState({
                options: options,
                selectOption: selectOption
            });
            _this.props.add(selectOption);
        };

        _this.removeConsole = function () {
            var options, selectOption;

            options = _this.state.options;
            selectOption = _this.state.selectOption;
            if (options.length > 1) {
                options = _lodash2.default.filter(options, function (item) {
                    return item !== selectOption;
                });
                _this.setState({
                    options: options,
                    selectOption: options[0]
                });
                _this.props.remove(selectOption);
            } else {
                _this.props.close();
            }
        };

        _this.closeConsole = function () {
            var close = _this.props.close;

            close();
        };

        _this.mouseMove = function (e) {
            e.target.style.cursor = 'pointer';
            e.stopPropagation();
        };

        _this.state = {
            options: ['c1'],
            upOrDownIcon: 'up',
            selectOption: 'c1'
        };
        return _this;
    }

    _createClass(ConsoleToolBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var itemsInVisible = this.props.itemsInVisible;

            return _react2.default.createElement(
                'div',
                { className: 'consoleToolBox' },
                _react2.default.createElement(
                    'div',
                    { style: { display: itemsInVisible.select ? 'none' : 'block', cursor: 'pointer' }, className: 'item', onMouseMove: this.mouseMove },
                    _react2.default.createElement(
                        _select2.default,
                        { value: '' + this.state.selectOption, size: 'small', style: { width: 80 }, onChange: this.handleChange },
                        this.state.options.map(function (item, index) {
                            return _react2.default.createElement(
                                Option,
                                { value: item, key: item },
                                index + 1
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { onClick: this.addConsole, style: { display: itemsInVisible.add ? 'none' : 'block' }, className: 'item' },
                    _react2.default.createElement(_icon2.default, { type: 'plus', style: Styles.icon })
                ),
                _react2.default.createElement(
                    'div',
                    { onClick: this.removeConsole, style: { display: itemsInVisible.delete ? 'none' : 'block' }, className: 'item' },
                    _react2.default.createElement(_icon2.default, { type: 'delete', style: Styles.icon })
                ),
                _react2.default.createElement(
                    'div',
                    { onClick: this.foldOrUnFold, className: 'item' },
                    _react2.default.createElement(_icon2.default, { type: this.state.upOrDownIcon, style: Styles.icon })
                ),
                _react2.default.createElement(
                    'div',
                    { onClick: this.closeConsole, className: 'item' },
                    _react2.default.createElement(_icon2.default, { type: 'close', style: Styles.icon })
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: 'true' },
                    '\n                    .consoleHeader .consoleToolBox{\n                        flex:1;\n                        height:44px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: flex-end;\n                    }\n\n                    .consoleToolBox .item .anticon{\n                        cursor:pointer!important;\n                    }\n\n                    .consoleHeader .consoleToolBox .item{\n                        margin:0 10px 0 10px;\n                    }\n                '
                )
            );
        }
    }]);

    return ConsoleToolBox;
}(_react.Component);

exports.default = ConsoleToolBox;

/***/ }),

/***/ "./lib/components/frame/LeftMenuItems.js":
/*!***********************************************!*\
  !*** ./lib/components/frame/LeftMenuItems.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _const = __webpack_require__(/*! ../../common/const */ "./lib/common/const.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    key: _const.Functions.Project,
    component: function component() {
        return _react2.default.createElement(
            'div',
            null,
            'Project'
        );
    },
    icon: 'icon-ziliao'
}, {
    key: _const.Functions.Search,
    component: function component() {
        return _react2.default.createElement(
            'div',
            null,
            'search'
        );
    },
    icon: 'icon-sousuo'
}, {
    key: _const.Functions.Setting,
    component: function component() {
        return _react2.default.createElement(
            'div',
            null,
            'Setting'
        );
    },
    icon: 'icon-shezhi'
}];

/***/ }),

/***/ "./lib/components/frame/console.js":
/*!*****************************************!*\
  !*** ./lib/components/frame/console.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tabs = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/_antd@3.6.6@antd/lib/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/_antd@3.6.6@antd/lib/tabs/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

var _output = __webpack_require__(/*! ../console/output */ "./lib/components/console/output.js");

var _output2 = _interopRequireDefault(_output);

var _toolBox = __webpack_require__(/*! ../console/toolBox */ "./lib/components/console/toolBox.js");

var _toolBox2 = _interopRequireDefault(_toolBox);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.10@lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;
var styles = {
    tabBarStyle: {
        color: 'gray',
        height: 44
    }
};
var TabsInfo = {
    Output: 'OUTPUT',
    Terminal: 'TERMIANL'
};

var Console = function (_Component) {
    _inherits(Console, _Component);

    function Console(props) {
        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this, props));

        _this.tabChange = function (key) {
            if (key === TabsInfo.Output) {
                _this.setState({
                    toolBoxItemsInVisible: {
                        select: true,
                        add: true,
                        delete: true
                    },
                    selectedTab: key
                });
            } else {
                _this.setState({
                    toolBoxItemsInVisible: {},
                    selectedTab: key
                });
            }
        };

        _this.addConsole = function (key) {
            _this.setState({
                consoles: [].concat(_toConsumableArray(_this.state.consoles), [key]),
                selectedConsole: key
            });
        };

        _this.removeConsole = function (key) {
            var consoles = _lodash2.default.filter(_this.state.consoles, function (item) {
                return item !== key;
            });
            _this.setState({
                consoles: consoles,
                selectedConsole: consoles[0]
            });
        };

        _this.foldConsole = function () {
            var onChangeHeight = _this.props.onChangeHeight;

            onChangeHeight();
        };

        _this.unfoldConsole = function () {
            var onChangeHeight = _this.props.onChangeHeight;

            var height = window.document.body.clientHeight - 120;
            onChangeHeight(height);
        };

        _this.closeConsole = function () {
            var onChangeHeight = _this.props.onChangeHeight;

            onChangeHeight(0);
        };

        _this.changeConsole = function (key) {
            _this.setState({
                selectedConsole: key
            });
        };

        _this.clickTabOutput = function () {
            _this.tabChange(TabsInfo.Output);
        };

        _this.clickTabTerminal = function () {
            _this.tabChange(TabsInfo.Terminal);
        };

        _this.setRefDom = function (ref) {
            _this.props.setRef(ref);
        };

        _this.state = {
            outputHeight: 100,
            consoles: ['c1'],
            selectedConsole: 'c1',
            toolBoxItemsInVisible: {},
            selectedTab: TabsInfo.Terminal
        };
        return _this;
    }

    _createClass(Console, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var height = this.props.height;

            var consoleStyle = _extends({}, _frameStyle2.default.Console, {
                height: height + 'px',
                borderTop: '0.5px solid #323843'
            });

            var outputHeight = height - styles.tabBarStyle.height;
            return _react2.default.createElement(
                'div',
                { style: consoleStyle, className: 'console', ref: this.setRefDom },
                _react2.default.createElement(
                    'div',
                    { className: 'consoleHeader' },
                    _react2.default.createElement(
                        'div',
                        { className: this.state.selectedTab === TabsInfo.Output ? 'tabItemSelected' : 'tabItem', onClick: this.clickTabOutput },
                        TabsInfo.Output
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: this.state.selectedTab === TabsInfo.Terminal ? 'tabItemSelected' : 'tabItem', onClick: this.clickTabTerminal },
                        TabsInfo.Terminal
                    ),
                    _react2.default.createElement(_toolBox2.default, { itemsInVisible: this.state.toolBoxItemsInVisible, change: this.changeConsole, add: this.addConsole, remove: this.removeConsole, fold: this.foldConsole, unfold: this.unfoldConsole, close: this.closeConsole })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: this.state.selectedTab === TabsInfo.Output ? 'block' : 'none', width: '100%', height: '100%' } },
                    _react2.default.createElement(
                        'div',
                        null,
                        'abcdefg'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: this.state.selectedTab === TabsInfo.Terminal ? 'block' : 'none' } },
                    this.state.consoles.map(function (item) {
                        return _react2.default.createElement(_output2.default, { key: item, ID: item, height: outputHeight, visible: _this2.state.selectedConsole === item });
                    })
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: 'true' },
                    '\n                .consoleHeader{\n                    height:44px;\n                    width:100%;\n                    display:flex;\n                    color:#75767c;\n                }\n                .consoleHeader .tabItem{\n                    margin:0 0 0 30px;\n                    line-height:44px;\n                    width:80px;\n                    border-bottom:none;\n                    text-align:center;\n                    cursor:pointer!important;\n                }\n                .consoleHeader .tabItem:hover{\n                    color:white;\n                    cursor:pointer;\n                }\n                .consoleHeader .tabItemSelected{\n                    color:white;\n                    border-bottom:1px solid  #75767c;\n                    margin:0 0 0 30px;\n                    line-height:44px;\n                    width:80px;\n                    text-align:center;\n                    cursor:pointer!important;\n                  }\n      \n            '
                )
            );
        }
    }]);

    return Console;
}(_react.Component);

exports.default = Console;

/***/ }),

/***/ "./lib/components/frame/frameStyle.js":
/*!********************************************!*\
  !*** ./lib/components/frame/frameStyle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DefaultWidthHeight = {
    LeftMenuContentWidth: 260,
    ConsoleHeight: 200,
    LeftMenuWidth: 44,
    StatusBarHeight: 30,
    WorkpalceToolBoxWidth: 44
};

var LeftMenu = {
    background: '#323843',
    width: DefaultWidthHeight.LeftMenuWidth,
    bottom: 30,
    left: 0,
    top: 0,
    position: 'absolute'
};

var LeftMenuContent = {
    width: 1,
    background: '#20252c'
};

var Workplace = {
    background: '#272c35',
    flex: 1
};

var StatusBar = {
    height: DefaultWidthHeight.StatusBarHeight,
    bottom: 0,
    left: 0,
    background: '#1f242a',
    position: 'absolute',
    width: '100%'
};

var Console = {
    height: DefaultWidthHeight.ConsoleHeight,
    background: '#272c35'
};

var Container = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: 0
};

var InnerContainer = {
    position: 'absolute',
    bottom: 30,
    left: 44,
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row'
};

var WorkplaceContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
};

exports.default = {
    LeftMenu: LeftMenu,
    LeftMenuContent: LeftMenuContent,
    Workplace: Workplace,
    StatusBar: StatusBar,
    Console: Console,
    Container: Container,
    InnerContainer: InnerContainer,
    WorkplaceContainer: WorkplaceContainer,
    DefaultWidthHeight: DefaultWidthHeight
};

/***/ }),

/***/ "./lib/components/frame/leftMenu.js":
/*!******************************************!*\
  !*** ./lib/components/frame/leftMenu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

var _const = __webpack_require__(/*! ../../common/const */ "./lib/common/const.js");

var _LeftMenuItems = __webpack_require__(/*! ./LeftMenuItems */ "./lib/components/frame/LeftMenuItems.js");

var _LeftMenuItems2 = _interopRequireDefault(_LeftMenuItems);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuIconStyle = {
    fontSize: 28
};

var LeftMenuItemStyle = {
    width: _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
    color: '#9499a2'
};

var LeftMenuItem = function (_Component) {
    _inherits(LeftMenuItem, _Component);

    function LeftMenuItem(props) {
        _classCallCheck(this, LeftMenuItem);

        var _this = _possibleConstructorReturn(this, (LeftMenuItem.__proto__ || Object.getPrototypeOf(LeftMenuItem)).call(this, props));

        _this.menuClick = function () {
            var _this$props = _this.props,
                name = _this$props.name,
                onClick = _this$props.onClick;

            onClick && onClick(name);
        };

        return _this;
    }

    _createClass(LeftMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                icon = _props.icon,
                name = _props.name,
                selectedKey = _props.selectedKey;

            return _react2.default.createElement(
                'div',
                { onClick: this.menuClick, style: LeftMenuItemStyle },
                _react2.default.createElement('span', { className: (0, _classnames2.default)({ iconSelected: selectedKey === name }, 'icon', 'iconfont', '' + icon) })
            );
        }
    }]);

    return LeftMenuItem;
}(_react.Component);

var LeftMenu = function (_Component2) {
    _inherits(LeftMenu, _Component2);

    function LeftMenu(props) {
        _classCallCheck(this, LeftMenu);

        var _this2 = _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this, props));

        _this2.menuClick = function (key) {
            var onClick = _this2.props.onClick;

            _this2.setState({
                selectedKey: key
            });
            onClick && onClick(key);
        };

        _this2.state = {
            selectedKey: ''
        };
        return _this2;
    }

    _createClass(LeftMenu, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { style: _frameStyle2.default.LeftMenu },
                _LeftMenuItems2.default.map(function (item) {
                    return _react2.default.createElement(LeftMenuItem, { name: item.key, key: item.key, onClick: _this3.menuClick, icon: item.icon, selectedKey: _this3.state.selectedKey });
                })
            );
        }
    }]);

    return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ "./lib/components/frame/leftMenuContent.js":
/*!*************************************************!*\
  !*** ./lib/components/frame/leftMenuContent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

var _LeftMenuItems = __webpack_require__(/*! ./LeftMenuItems */ "./lib/components/frame/LeftMenuItems.js");

var _LeftMenuItems2 = _interopRequireDefault(_LeftMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenuContent = function (_Component) {
    _inherits(LeftMenuContent, _Component);

    function LeftMenuContent(props) {
        _classCallCheck(this, LeftMenuContent);

        var _this = _possibleConstructorReturn(this, (LeftMenuContent.__proto__ || Object.getPrototypeOf(LeftMenuContent)).call(this, props));

        _this.setDomRef = function (ref) {
            _this.props.setRef(ref);
        };

        return _this;
    }

    _createClass(LeftMenuContent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                width = _props.width,
                selectedKey = _props.selectedKey;

            var menuStyle = _extends({}, _frameStyle2.default.LeftMenuContent, {
                width: width + 'px',
                height: '100%',
                background: '#20252c',
                color: 'white'
            });
            var contentStyle = {
                width: width + 'px',
                height: '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: menuStyle, ref: this.setDomRef },
                _LeftMenuItems2.default.map(function (item) {
                    var MenuItem = item.component;
                    var cStyle = _extends({}, contentStyle, {
                        display: selectedKey === item.key ? 'block' : 'none'
                    });
                    return _react2.default.createElement(
                        'div',
                        { style: cStyle, key: item.key },
                        _react2.default.createElement(MenuItem, null)
                    );
                })
            );
        }
    }]);

    return LeftMenuContent;
}(_react.Component);

exports.default = LeftMenuContent;

/***/ }),

/***/ "./lib/components/frame/mainFrame.js":
/*!*******************************************!*\
  !*** ./lib/components/frame/mainFrame.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _leftMenu = __webpack_require__(/*! ./leftMenu */ "./lib/components/frame/leftMenu.js");

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _leftMenuContent = __webpack_require__(/*! ./leftMenuContent */ "./lib/components/frame/leftMenuContent.js");

var _leftMenuContent2 = _interopRequireDefault(_leftMenuContent);

var _statusBar = __webpack_require__(/*! ./statusBar */ "./lib/components/frame/statusBar.js");

var _statusBar2 = _interopRequireDefault(_statusBar);

var _wokplace = __webpack_require__(/*! ./wokplace */ "./lib/components/frame/wokplace.js");

var _wokplace2 = _interopRequireDefault(_wokplace);

var _console = __webpack_require__(/*! ./console */ "./lib/components/frame/console.js");

var _console2 = _interopRequireDefault(_console);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

var _appStore = __webpack_require__(/*! ../../store/appStore */ "./lib/store/appStore.js");

var _appStore2 = _interopRequireDefault(_appStore);

var _domUtil = __webpack_require__(/*! ../../utils/domUtil */ "./lib/utils/domUtil.js");

var _domUtil2 = _interopRequireDefault(_domUtil);

var _test = __webpack_require__(/*! ../workplace/test */ "./lib/components/workplace/test.js");

var _test2 = _interopRequireDefault(_test);

var _eventBus = __webpack_require__(/*! ../../common/eventBus */ "./lib/common/eventBus.js");

var _eventBus2 = _interopRequireDefault(_eventBus);

var _index = __webpack_require__(/*! ../../command/index */ "./lib/command/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.10@lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fixed_Blank = 100;

var MainFrame = function (_Component) {
    _inherits(MainFrame, _Component);

    function MainFrame(props) {
        _classCallCheck(this, MainFrame);

        var _this2 = _possibleConstructorReturn(this, (MainFrame.__proto__ || Object.getPrototypeOf(MainFrame)).call(this, props));

        _this2.closeAllTabs = function () {
            _this2.setState({
                workpalceTabItems: [],
                currentTab: ''
            });
        };

        _this2.closeTab = function (tabID) {
            var items = _lodash2.default.filter(_this2.state.workpalceTabItems, function (item) {
                return item.ID !== tabID;
            });
            _this2.changeTabs(items);
        };

        _this2.closeOtherTabs = function (tabID) {
            var items = _lodash2.default.filter(_this2.state.workpalceTabItems, function (item) {
                return item.ID === tabID;
            });
            _this2.changeTabs(items);
        };

        _this2.closeToRightTabs = function (tabID) {
            var items;
            items = _lodash2.default.slice(_this2.state.workpalceTabItems, 0, _lodash2.default.findIndex(_this2.state.workpalceTabItems, function (item) {
                return item.ID === tabID;
            }) + 1);
            _this2.changeTabs(items);
        };

        _this2.changeTabs = function (items) {
            var index;
            index = _lodash2.default.findIndex(items, function (item) {
                return item.ID === _this2.state.currentTab;
            });
            if (index >= 0) {
                _this2.setState({
                    workpalceTabItems: items
                });
            } else {
                _this2.setState({
                    workpalceTabItems: items,
                    currentTab: items.length > 0 ? items[items.length - 1].ID : ''
                });
            }
        };

        _this2.domRef = function (dom) {
            _this2.domElement = dom;
        };

        _this2.winSizeChanaged = function () {
            var maxWidth, maxHeight;
            maxWidth = _this2.getMaxLeftMenuContextWidth();
            maxHeight = _this2.getMaxConsoleHeight();

            maxWidth = maxWidth < Fixed_Blank ? Fixed_Blank : maxWidth;
            maxHeight = maxHeight < Fixed_Blank ? Fixed_Blank : maxHeight;
            if (_this2.state.leftMenuContentWidth >= maxWidth) {
                _this2.changeLeftMenuContentWidth(maxWidth);
            } else {
                _this2.setState({
                    workplaceWidth: _this2.domElement.clientWidth - _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth - _this2.state.leftMenuContentWidth
                });
            }
            if (_this2.state.consoleHeight >= maxHeight) {
                _this2.changeConsoleHeight(maxHeight);
            }
        };

        _this2.getMaxLeftMenuContextWidth = function () {
            return _this2.domElement.clientWidth - _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth - Fixed_Blank;
        };

        _this2.getMaxConsoleHeight = function () {
            return _this2.domElement.clientHeight - _frameStyle2.default.DefaultWidthHeight.StatusBarHeight - Fixed_Blank;
        };

        _this2.changeLeftMenuContentWidth = function (width, other) {
            _this2.setState(_extends({
                leftMenuContentWidth: width,
                workplaceWidth: _this2.domElement.clientWidth - _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth - width
            }, other));
        };

        _this2.changeConsoleHeight = function (height) {
            var _this = _this2;
            _this2.oldConsoleHeight = height;
            _this2.setState({
                consoleHeight: height
            });
        };

        _this2.mouseMove = function (e) {
            var x, y;

            x = e.clientX - _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth;
            y = _this2.domElement.clientHeight - e.clientY - _frameStyle2.default.DefaultWidthHeight.StatusBarHeight;
            if (_this2.isDragging === true) {
                if (_this2.isColResized) {
                    if (x === _frameStyle2.default.DefaultWidthHeight.LeftMenuContentWidth / 2) {
                        _this2.changeLeftMenuContentWidth(_frameStyle2.default.DefaultWidthHeight.LeftMenuContentWidth);
                    } else if (x <= _frameStyle2.default.DefaultWidthHeight.LeftMenuContentWidth / 2) {
                        _this2.changeLeftMenuContentWidth(0);
                    } else if (x >= _frameStyle2.default.DefaultWidthHeight.LeftMenuContentWidth / 2 && x <= _this2.getMaxLeftMenuContextWidth()) {
                        _this2.changeLeftMenuContentWidth(x);
                    }
                } else if (_this2.isRowResized) {
                    if (y === _frameStyle2.default.DefaultWidthHeight.ConsoleHeight / 2) {
                        _this2.changeConsoleHeight(_frameStyle2.default.DefaultWidthHeight.ConsoleHeight);
                    } else if (y <= _frameStyle2.default.DefaultWidthHeight.ConsoleHeight / 2) {
                        _this2.changeConsoleHeight(0);
                    } else if (y > _frameStyle2.default.DefaultWidthHeight.ConsoleHeight / 2 && y <= _this2.getMaxConsoleHeight()) {
                        _this2.changeConsoleHeight(y);
                    }
                }
            } else {
                _this2.isColResized = Math.abs(x - _this2.leftMenuContentDom.clientWidth) <= 3;
                _this2.isRowResized = Math.abs(y - _this2.state.consoleHeight) <= 3;
                if (_this2.isColResized) {
                    e.target.style.cursor = 'col-resize';
                } else if (_this2.isRowResized) {
                    e.target.style.cursor = 'row-resize';
                } else {
                    e.target.style.cursor = 'default';
                }
            }
            //拖动tab //按下鼠标左键
            if (_this2.isDragging && _this2.cloneDraggedTabDom) {
                e.target.style.cursor = 'default';
                _this2.cloneDraggedTabDom.style.left = e.clientX - _this2.draggingTabPostion.x + "px";
                _this2.cloneDraggedTabDom.style.top = e.clientY - _this2.draggingTabPostion.y + "px";;
            }
            e.preventDefault();
            return false;
        };

        _this2.mouseDown = function (e) {
            _this2.isDragging = true;
        };

        _this2.resetDragginTabStatus = function () {
            //拖动tab
            _domUtil2.default.removeDom(_this2.cloneDraggedTabDom);
            _domUtil2.default.removeDom(_this2.coverDom);
            _this2.targetTab = null;
            _this2.draggingTab = null;
        };

        _this2.documentMouseUp = function (e) {
            if (_this2.targetTab && _this2.draggingTab) {
                _this2.exchangeTab(_this2.draggingTab.ID, _this2.targetTab.ID);
            }
            _this2.resetDragginTabStatus();
        };

        _this2.mouseUp = function (e) {
            _this2.isDragging = false;
        };

        _this2.createCoverDom = function (sourceDom) {
            var coverDom, position;
            position = _domUtil2.default.getElememtnPosition(sourceDom);
            coverDom = document.createElement("div");
            coverDom.style.opacity = 0.3;
            coverDom.style.zIndex = 666;
            coverDom.style.border = "1px solid lightgray";
            coverDom.style.position = "fixed";
            coverDom.style.background = "lightgray";
            coverDom.style.left = position.x + 'px';
            coverDom.style.top = position.y + 'px';
            coverDom.style.width = sourceDom.clientWidth + 'px';
            coverDom.style.height = sourceDom.clientHeight + 'px';
            return coverDom;
        };

        _this2.exchangeTab = function (source, target) {
            var sIndex, tIndex, tabItems;

            tabItems = _this2.state.workpalceTabItems;
            if (source !== target) {
                tIndex = _lodash2.default.findIndex(tabItems, function (item) {
                    return item.ID === target;
                });
                sIndex = _lodash2.default.findIndex(tabItems, function (item) {
                    return item.ID === source;
                });
                if (tIndex < 0) {
                    tabItems = [].concat(_toConsumableArray(tabItems.slice(0, sIndex)), _toConsumableArray(tabItems.slice(sIndex + 1)), [tabItems[sIndex]]);
                } else if (sIndex < tIndex) {
                    tabItems = [].concat(_toConsumableArray(tabItems.slice(0, sIndex)), _toConsumableArray(tabItems.slice(sIndex + 1, tIndex)), [tabItems[sIndex]], _toConsumableArray(tabItems.slice(tIndex)));
                } else if (sIndex > tIndex) {
                    tabItems = [].concat(_toConsumableArray(tabItems.slice(0, tIndex)), [tabItems[sIndex]], _toConsumableArray(tabItems.slice(tIndex, sIndex)), _toConsumableArray(tabItems.slice(sIndex + 1)));
                }
                _this2.setState({
                    workpalceTabItems: tabItems
                });
            }
        };

        _this2.mouseOverTab = function (e, tab) {
            if (_this2.isDragging && _this2.draggingTab) {
                _this2.targetTab = tab;
                _domUtil2.default.removeDom(_this2.coverDom);
                if (_this2.targetTab.ID !== _this2.draggingTab.ID) {
                    _this2.coverDom = _this2.createCoverDom(tab.dom);
                    document.documentElement.appendChild(_this2.coverDom);
                }
            }
        };

        _this2.createDraggingDom = function (e, tab) {
            _domUtil2.default.removeDom(_this2.cloneDraggedTabDom);
            _this2.cloneDraggedTabDom = tab.dom.cloneNode(true);
            _this2.draggingTabPostion = _domUtil2.default.getElememtnPosition(tab.dom);
            _this2.draggingTabPostion = { x: e.clientX - _this2.draggingTabPostion.x, y: e.clientY - _this2.draggingTabPostion.y };
            _this2.cloneDraggedTabDom.style = "border:1px solid #343843;z-index:999;position:fixed;background:#343843;";
            document.documentElement.appendChild(_this2.cloneDraggedTabDom);
        };

        _this2.dragTabStart = function (e, tab) {
            _this2.draggingTab = tab;
            _this2.createDraggingDom(e, tab);
        };

        _this2.leftMenuClick = function (key) {
            var width = _this2.leftMenuContentDom.clientWidth <= 0 ? _frameStyle2.default.DefaultWidthHeight.LeftMenuContentWidth : _this2.leftMenuContentDom.clientWidth;
            var values = {};
            if (width !== _this2.state.leftMenuContentWidth) {
                if (key !== _this2.state.selectedKey) {
                    values.selectedKey = key;
                }
                _this2.changeLeftMenuContentWidth(width, values);
            } else {
                if (key !== _this2.state.selectedKey) {
                    _this2.setState({
                        selectedKey: key
                    });
                }
            }
        };

        _this2.changeHeight = function (height) {
            if (height === undefined) {
                _this2.setState({ consoleHeight: _this2.oldConsoleHeight });
            } else if (height >= 0) {
                _this2.setState({ consoleHeight: height });
            }
        };

        _this2.setLeftMenuContentDom = function (ref) {
            _this2.leftMenuContentDom = ref;
        };

        _this2.setConsoleDom = function (ref) {
            _this2.consoleDom = ref;
        };

        _this2.handleTabChanage = function (tab) {
            _this2.setState({
                currentTab: tab.ID
            });
        };

        _this2.handleCloseTab = function (tab) {
            var items;
            items = _lodash2.default.filter(_this2.state.workpalceTabItems, function (item) {
                return item.ID !== tab.ID;
            });
            if (tab.ID === _this2.state.currentTab && items.length > 0) {
                _this2.setState({
                    workpalceTabItems: items,
                    currentTab: items[items.length - 1].ID
                });
            } else {
                _this2.setState({
                    workpalceTabItems: items
                });
            }
        };

        _this2.isDragging = false;
        _this2.isColResized = false;
        _this2.isRowResized = false;
        _this2.oldConsoleHeight = _frameStyle2.default.DefaultWidthHeight.ConsoleHeight;
        _this2.winSizeChanaged = _this2.winSizeChanaged.bind(_this2);
        _this2.state = {
            leftMenuContentWidth: 0,
            consoleHeight: _frameStyle2.default.DefaultWidthHeight.ConsoleHeight,
            consoleWidth: 0,
            selectedKey: '',
            currentTab: 1,
            workpalceTabItems: [{
                ID: 1,
                title: "test1",
                content: _test2.default
            }, {
                ID: 2,
                title: "test2",
                content: function content() {
                    return _react2.default.createElement(
                        'div',
                        { style: { color: 'red' } },
                        'test2'
                    );
                }
            }, {
                ID: 3,
                title: "test3",
                content: function content() {
                    return _react2.default.createElement(
                        'div',
                        { style: { color: 'blue' } },
                        'test3'
                    );
                }
            }, {
                ID: 4,
                title: "test4",
                content: function content() {
                    return _react2.default.createElement(
                        'div',
                        { style: { color: 'blue' } },
                        'test4'
                    );
                }
            }, {
                ID: 5,
                title: "test5",
                content: function content() {
                    return _react2.default.createElement(
                        'div',
                        { style: { color: 'blue' } },
                        'test5'
                    );
                }
            }, {
                ID: 6,
                title: "test6",
                content: function content() {
                    return _react2.default.createElement(
                        'div',
                        { style: { color: 'blue' } },
                        'test6'
                    );
                }
            }]
        };
        return _this2;
    }

    _createClass(MainFrame, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener("resize", this.winSizeChanaged);
            window.addEventListener("mouseup", this.documentMouseUp);
            _index.CommandCenter.command(_index.Commands.Tabs.CloseAll).register(this.closeAllTabs);
            _index.CommandCenter.command(_index.Commands.Tabs.Close).register(this.closeTab);
            _index.CommandCenter.command(_index.Commands.Tabs.CloseOthers).register(this.closeOtherTabs);
            _index.CommandCenter.command(_index.Commands.Tabs.CloseToRight).register(this.closeToRightTabs);

            this.setState({
                workplaceWidth: this.domElement.clientWidth - _frameStyle2.default.DefaultWidthHeight.LeftMenuWidth - this.state.leftMenuContentWidth
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.winSizeChanaged);
            window.removeEventListener("mouseup", this.documentMouseUp);
        }
    }, {
        key: 'tabsOnchange',
        value: function tabsOnchange(tabs) {
            this.setState({
                workpalceTabItems: tabs
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: _frameStyle2.default.Container, onMouseMove: this.mouseMove, onMouseDown: this.mouseDown, onMouseUp: this.mouseUp, ref: this.domRef },
                _react2.default.createElement(_leftMenu2.default, { onClick: this.leftMenuClick }),
                _react2.default.createElement(
                    'div',
                    { style: _frameStyle2.default.InnerContainer },
                    _react2.default.createElement(_leftMenuContent2.default, { width: this.state.leftMenuContentWidth, selectedKey: this.state.selectedKey, setRef: this.setLeftMenuContentDom }),
                    _react2.default.createElement(
                        'div',
                        { style: _frameStyle2.default.WorkplaceContainer },
                        _react2.default.createElement(_wokplace2.default, { tabs: this.state.workpalceTabItems, onDragTabStart: this.dragTabStart, onMouseOverTab: this.mouseOverTab, width: this.state.workplaceWidth, currentTab: this.state.currentTab, onTabChange: this.handleTabChanage, closeTab: this.handleCloseTab }),
                        _react2.default.createElement(_console2.default, { height: this.state.consoleHeight, onChangeHeight: this.changeHeight, setRef: this.setConsoleDom })
                    )
                ),
                _react2.default.createElement(_statusBar2.default, null)
            );
        }
    }]);

    return MainFrame;
}(_react.Component);

exports.default = MainFrame;

/***/ }),

/***/ "./lib/components/frame/statusBar.js":
/*!*******************************************!*\
  !*** ./lib/components/frame/statusBar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusBar = function (_Component) {
    _inherits(StatusBar, _Component);

    function StatusBar(props) {
        _classCallCheck(this, StatusBar);

        return _possibleConstructorReturn(this, (StatusBar.__proto__ || Object.getPrototypeOf(StatusBar)).call(this, props));
    }

    _createClass(StatusBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: _frameStyle2.default.StatusBar });
        }
    }]);

    return StatusBar;
}(_react.Component);

exports.default = StatusBar;

/***/ }),

/***/ "./lib/components/frame/wokplace.js":
/*!******************************************!*\
  !*** ./lib/components/frame/wokplace.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(/*! antd/lib/icon */ "./node_modules/_antd@3.6.6@antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/lib/icon/style */ "./node_modules/_antd@3.6.6@antd/lib/icon/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _frameStyle = __webpack_require__(/*! ./frameStyle */ "./lib/components/frame/frameStyle.js");

var _frameStyle2 = _interopRequireDefault(_frameStyle);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _command = __webpack_require__(/*! ../../command */ "./lib/command/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Remote = __webpack_require__(/*! electron */ "electron").remote;

var Styles = {
    icon: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    closeIcon: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
};

var WorkPlaceTab = function (_Component) {
    _inherits(WorkPlaceTab, _Component);

    function WorkPlaceTab(props) {
        _classCallCheck(this, WorkPlaceTab);

        var _this2 = _possibleConstructorReturn(this, (WorkPlaceTab.__proto__ || Object.getPrototypeOf(WorkPlaceTab)).call(this, props));

        _this2.close = function (e) {
            _this2.props.closeTab(_this2.getTabInfo());
            e.preventDefault();
        };

        _this2.mouseUp = function (e) {
            if (e.button === 1) {
                clearInterval(_this2.longPressTimer);
            }
        };

        _this2.mouseDown = function (e) {
            var timeStart, position;

            position = { clientX: e.clientX, clientY: e.clientY };
            //鼠标右键
            if (e.button === 2) {
                _this2.WorkPlaceTabMenu.popup(Remote.getCurrentWindow());
            } else if (e.button === 0) {
                timeStart = Date.now();
                _this2.longPressTimer = setInterval(function () {
                    if (Date.now() - timeStart > 300) {
                        _this2.props.tabClick(_this2.getTabInfo());
                        clearInterval(_this2.longPressTimer);
                        _this2.props.onDragTabStart(position, _this2.getTabInfo());
                    }
                }, 50);
            }
            return false;
        };

        _this2.mouseOut = function (e) {
            _this2.setState({
                showClose: false
            });
            e.stopPropagation();
        };

        _this2.mouseOver = function (e) {
            _this2.setState({
                showClose: true
            });
            _this2.props.onMouseOverTab(e, _this2.getTabInfo());
            e.stopPropagation();
        };

        _this2.getTabInfo = function () {
            return {
                ID: _this2.props.tabID,
                isEditing: _this2.state.isEditing,
                dom: _this2.dom
            };
        };

        _this2.setRef = function (ref) {
            _this2.dom = ref;
        };

        _this2.state = {
            isEditing: false,
            showClose: false
        };
        return _this2;
    }

    _createClass(WorkPlaceTab, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tabID = this.props.tabID;

            this.WorkPlaceTabMenu = new Remote.Menu();
            this.WorkPlaceTabMenu.append(new Remote.MenuItem({
                label: "Close",
                click: function click() {
                    _command.CommandCenter.command(_command.Commands.Tabs.Close).execute(tabID);
                }
            }));
            this.WorkPlaceTabMenu.append(new Remote.MenuItem({
                label: "Close Others",
                click: function click() {
                    _command.CommandCenter.command(_command.Commands.Tabs.CloseOthers).execute(tabID);
                }
            }));
            this.WorkPlaceTabMenu.append(new Remote.MenuItem({
                label: "Close to the right",
                click: function click() {
                    _command.CommandCenter.command(_command.Commands.Tabs.CloseToRight).execute(tabID);
                }
            }));
            this.WorkPlaceTabMenu.append(new Remote.MenuItem({
                label: "Close All",
                click: function click() {
                    _command.CommandCenter.command(_command.Commands.Tabs.CloseAll).execute();
                }
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                fileIcon = _props.fileIcon,
                selected = _props.selected;

            var editStyle = void 0,
                closeStyle = void 0;
            editStyle = _extends({}, Styles.closeIcon, {
                display: this.state.isEditing && !this.state.showClose ? 'block' : 'none'
            });
            closeStyle = _extends({}, Styles.closeIcon, {
                display: !this.state.isEditing && selected || this.state.showClose ? 'block' : 'none'
            });
            return _react2.default.createElement(
                'div',
                { 'data-tab': this.props.tabID, ref: this.setRef, className: 'workplace-tab', style: { background: selected ? '#272c35' : '#20252c' }, onMouseUp: this.mouseUp, onMouseDown: this.mouseDown, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
                _react2.default.createElement(
                    'div',
                    { className: 'workplace-tab-filetype' },
                    _react2.default.createElement(_icon2.default, { type: 'file-unknown', style: Styles.icon })
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)({ "workplace-tab-selected": selected }, "workplace-tab-title") },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'workplace-tab-close', onClick: this.close },
                    _react2.default.createElement(_icon2.default, { type: 'close', style: closeStyle }),
                    _react2.default.createElement(_icon2.default, { type: 'edit', style: editStyle })
                )
            );
        }
    }]);

    return WorkPlaceTab;
}(_react.Component);

var WorkPlaceTabContent = function (_Component2) {
    _inherits(WorkPlaceTabContent, _Component2);

    function WorkPlaceTabContent(props) {
        _classCallCheck(this, WorkPlaceTabContent);

        return _possibleConstructorReturn(this, (WorkPlaceTabContent.__proto__ || Object.getPrototypeOf(WorkPlaceTabContent)).call(this, props));
    }

    _createClass(WorkPlaceTabContent, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                Content = _props2.Content,
                selected = _props2.selected;

            var style = {
                display: selected ? 'block' : 'none'
            };
            return _react2.default.createElement(
                'div',
                { className: 'workplace-tabcontent', style: style },
                _react2.default.createElement(Content, null)
            );
        }
    }]);

    return WorkPlaceTabContent;
}(_react.Component);

var WorkPlaceToolBox = function (_Component3) {
    _inherits(WorkPlaceToolBox, _Component3);

    function WorkPlaceToolBox(props) {
        _classCallCheck(this, WorkPlaceToolBox);

        var _this4 = _possibleConstructorReturn(this, (WorkPlaceToolBox.__proto__ || Object.getPrototypeOf(WorkPlaceToolBox)).call(this, props));

        _this4.click = function (e) {
            _this4.ToolBoxMenu.popup(Remote.getCurrentWindow());
        };

        return _this4;
    }

    _createClass(WorkPlaceToolBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initMenu();
        }
    }, {
        key: 'initMenu',
        value: function initMenu() {
            var _this = this;
            this.ToolBoxMenu = new Remote.Menu();
            this.ToolBoxMenu.append(new Remote.MenuItem({
                label: "Close All",
                click: function click() {
                    _command.CommandCenter.command(_command.Commands.Tabs.CloseAll).execute();
                }
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'workplace-toolbox' },
                _react2.default.createElement(
                    'div',
                    { className: 'workplace-toolbox-item', onClick: this.click },
                    _react2.default.createElement(_icon2.default, { style: Styles.icon, type: 'ellipsis' })
                )
            );
        }
    }]);

    return WorkPlaceToolBox;
}(_react.Component);

var WorkPlace = function (_Component4) {
    _inherits(WorkPlace, _Component4);

    function WorkPlace(props) {
        _classCallCheck(this, WorkPlace);

        var _this5 = _possibleConstructorReturn(this, (WorkPlace.__proto__ || Object.getPrototypeOf(WorkPlace)).call(this, props));

        _this5.tabClick = function (tab) {
            var _this5$props = _this5.props,
                currentTab = _this5$props.currentTab,
                onTabChange = _this5$props.onTabChange;

            if (tab.ID !== currentTab) {
                onTabChange && onTabChange(tab);
            }
        };

        _this5.closeTab = function (tab) {
            var closeTab = _this5.props.closeTab;

            closeTab && closeTab(tab);
        };

        _this5.setRef = function (ref) {
            _this5.dom = ref;
        };

        _this5.setTabTailRef = function (ref) {
            _this5.tabTailDom = ref;
        };

        _this5.tabTailMouseOver = function (e) {
            _this5.props.onMouseOverTab(e, {
                ID: null,
                isEditing: false,
                dom: _this5.tabTailDom
            });
            e.stopPropagation();
        };

        return _this5;
    }

    _createClass(WorkPlace, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props3 = this.props,
                tabs = _props3.tabs,
                currentTab = _props3.currentTab,
                width = _props3.width;

            var style = {
                width: width - _frameStyle2.default.DefaultWidthHeight.WorkpalceToolBoxWidth + 'px'
            };
            return _react2.default.createElement(
                'div',
                { className: 'workplace-container', ref: this.setRef },
                _react2.default.createElement(
                    'div',
                    { className: 'workplace-header', onMouseMove: this.mouseMove, onMouseUp: this.mouseUp },
                    _react2.default.createElement(
                        'div',
                        { className: 'workplace-tabs', style: style },
                        tabs.map(function (tab) {
                            return _react2.default.createElement(WorkPlaceTab, { onDragTabStart: _this6.props.onDragTabStart, onMouseOverTab: _this6.props.onMouseOverTab, tabID: tab.ID, title: tab.title, key: 't_' + tab.ID, selected: tab.ID === currentTab, tabClick: _this6.tabClick, closeTab: _this6.closeTab });
                        }),
                        _react2.default.createElement('div', { onMouseOver: this.tabTailMouseOver, className: 'workplace-tab-tail', ref: this.setTabTailRef })
                    ),
                    _react2.default.createElement(WorkPlaceToolBox, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'workplace-tabcontents' },
                    tabs.map(function (tab) {
                        return _react2.default.createElement(WorkPlaceTabContent, { key: 'c_' + tab.ID, ID: tab.ID, Content: tab.content, selected: currentTab === tab.ID });
                    })
                ),
                _react2.default.createElement(
                    'style',
                    { jsx: 'true' },
                    '\n                    .workplace-container{\n                        display:flex;\n                        flex-direction:column;\n                        width:100%;\n                        height:100%;\n                        background:#272c35;\n                        position: relative;\n                    }\n\n                    .workplace-header{\n                        height:44px;\n                        width:100%;\n                        background:#20252c;\n                        border-bottom:0.5px solid #323843;\n                        position:relative;\n                        overflow:hidden;\n                    }\n\n                    .workplace-tabs{\n                        overflow-x:auto;\n                        display:flex;\n                        height:44px;\n                    }\n\n                    .workplace-toolbox{\n                        position:absolute;\n                        right:0;\n                        top:0;\n                        height:44px;\n                        width:' + _frameStyle2.default.DefaultWidthHeight.WorkpalceToolBoxWidth + 'px;\n                    }\n\n                    .workplace-toolbox-item{\n                        float:right;\n                        padding:13px 0 13px 0;\n                    }\n\n                    .workplace-tab{\n                        display:flex;\n                        align-content:center;\n                        border-right:1px solid black;\n                        cursor:pointer!important;\n                    }\n\n                    .workplace-tab-tail{\n                         flex:1;\n                    }\n\n                    .workplace-tab-filetype{\n                        width:20px;\n                        padding:13px 0 13px 3px;\n                        cursor:pointer!important;\n                    }\n\n                    .workplace-tab-title{\n                        flex:1;\n                        line-height: 44px;\n                        text-align:center;\n                        color:#75767c;\n                        cursor:pointer!important;\n                        white-space: normal;\n                        width:90px;\n                    }\n\n                    .workplace-tab-selected{\n                        color:white;\n                    }\n                    .workplace-tab-close{\n                        width:20px;\n                        padding:13px 0 13px 0;\n                        cursor:pointer!important;\n                    }\n\n                    .workplace-tabcontents{\n                        flex:1;\n                        width:100%;\n                        position:relative;\n                    }\n\n                    .workplace-tabcontent{\n                        width:100%;\n                        position:absolute;\n                        background:#272c35;\n                        left:0;\n                        right:0;\n                        bottom:0;\n                        top:0;\n                        margin:0;\n                    }\n\n                    .workplace-tab .anticon{\n                        cursor:pointer!important;\n                    }\n                 '
                )
            );
        }
    }]);

    return WorkPlace;
}(_react.Component);

exports.default = WorkPlace;

/***/ }),

/***/ "./lib/components/workplace/test.js":
/*!******************************************!*\
  !*** ./lib/components/workplace/test.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabTest = function (_Component) {
    _inherits(TabTest, _Component);

    function TabTest(props) {
        _classCallCheck(this, TabTest);

        var _this = _possibleConstructorReturn(this, (TabTest.__proto__ || Object.getPrototypeOf(TabTest)).call(this, props));

        _this.sendMessage = function () {
            g_console_output.exeCommand("ls -ll");
        };

        return _this;
    }

    _createClass(TabTest, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "a",
                    { onClick: this.sendMessage },
                    "sending"
                )
            );
        }
    }]);

    return TabTest;
}(_react.Component);

exports.default = TabTest;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.4.1@react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.1@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mainFrame = __webpack_require__(/*! ./components/frame/mainFrame */ "./lib/components/frame/mainFrame.js");

var _mainFrame2 = _interopRequireDefault(_mainFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_mainFrame2.default, null), document.getElementById("appContent"));

/***/ }),

/***/ "./lib/store/appStore.js":
/*!*******************************!*\
  !*** ./lib/store/appStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _appData = {};

var _indexOfItem = function _indexOfItem(data, func) {
    var i, len;
    len = data.length;
    for (i = 0; i < len; i++) {
        if (func(data[i]) === true) {
            return i;
        }
    }
    return -1;
};

var CollectionData = function () {
    function CollectionData(name) {
        _classCallCheck(this, CollectionData);

        this.name = name;
    }

    _createClass(CollectionData, [{
        key: "addItem",
        value: function addItem(item) {
            var data = _appData[this.name];
            _appData[this.name] = [].concat(_toConsumableArray(data), [item]);
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
    }, {
        key: "removeItem",
        value: function removeItem(func) {
            var index, data;
            data = _appData[this.name];
            index = _indexOfItem(data, func);
            if (index === 0) {
                _appData[this.name] = [].concat(_toConsumableArray(data.slice(1)));
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            } else if (index === data.length - 1) {
                _appData[this.name] = [].concat(_toConsumableArray(data.slice(0, index)));
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            } else if (index > 0) {
                _appData[this.name] = [].concat(_toConsumableArray(data.slice(0, index)), _toConsumableArray(data.slice(index + 1)));
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            }
        }
    }, {
        key: "updateItem",
        value: function updateItem(item, func) {
            var index, data;
            data = _appData[this.name];
            index = _indexOfItem(data, func);
            if (index === 0) {
                _appData[this.name] = [item].concat(_toConsumableArray(data.slice(1)));
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            } else if (index === data.length - 1) {
                _appData[this.name] = [].concat(_toConsumableArray(data.slice(0, index)), [item]);
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            } else if (index > 0) {
                _appData[this.name] = [].concat(_toConsumableArray(data.slice(0, index)), [item], _toConsumableArray(data.slice(index + 1)));
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            var data = _appData[this.name];
            data.splice(0, data.length);
            subscribes[this.name] && subscribes[namthis.name](_appData[this.name]);
        }
    }]);

    return CollectionData;
}();

var ObjectData = function () {
    function ObjectData(name) {
        _classCallCheck(this, ObjectData);

        this.name = name;
    }

    _createClass(ObjectData, [{
        key: "updateItem",
        value: function updateItem(name, value) {
            _appData[this.name] = _extends({}, _appData[this.name], { name: value });
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
    }, {
        key: "reomveItem",
        value: function reomveItem(name) {
            var pName, data, newData, isDeleted;

            data = _appData[this.name];
            isDeleted = false;
            newData = {};
            for (pName in data) {
                if (name !== pName) {
                    newData[name] = data[pName];
                } else {
                    isDeleted = true;
                }
            }
            if (isDeleted) {
                _appData[this.name] = newData;
                subscribes[this.name] && subscribes[this.name](_appData[this.name]);
            }
        }
    }]);

    return ObjectData;
}();

var subscribes = {};

var AppStore = function AppStore() {
    _classCallCheck(this, AppStore);
};

AppStore.getData = function (name) {
    if (appData.name !== undefined) {
        return appData.name;
    }
    return null;
};

AppStore.collectionData = function (name) {
    return new CollectionData(name);
};

AppStore.objectData = function (name) {
    return new ObjectData(name);
};

AppStore.setData = function (name, value) {
    appData[name] = value;
};

AppStore.subscribe = function (name, func) {
    subscribes[name] = func;
};

AppStore.emit = function (name) {
    var func = subscribes[name];
    if (func) {
        func(appData[name]);
    }
};

exports.default = AppStore;

/***/ }),

/***/ "./lib/utils/domUtil.js":
/*!******************************!*\
  !*** ./lib/utils/domUtil.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomUtil = function () {
  function DomUtil() {
    _classCallCheck(this, DomUtil);
  }

  _createClass(DomUtil, null, [{
    key: "getElememtnPosition",
    value: function getElememtnPosition(obj) {
      var pos = { "top": 0, "left": 0 };
      if (obj.offsetParent) {
        while (obj.offsetParent) {
          pos.top += obj.offsetTop;
          pos.left += obj.offsetLeft;
          obj = obj.offsetParent;
        }
      } else if (obj.x) {
        pos.left += obj.x;
      } else if (obj.x) {
        pos.top += obj.y;
      }
      return { x: pos.left, y: pos.top };
    }
  }, {
    key: "removeDom",
    value: function removeDom(dom) {
      if (dom && dom.parentNode) {
        dom.parentNode.removeChild(dom);
      }
      dom = null;
    }
  }]);

  return DomUtil;
}();

exports.default = DomUtil;

/***/ }),

/***/ "./lib/utils/strUtil.js":
/*!******************************!*\
  !*** ./lib/utils/strUtil.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnoprstuvwxyz0123456789';

var StrUtil = function StrUtil() {
    _classCallCheck(this, StrUtil);
};

StrUtil.randomStr = function (len) {
    var result, maxPos, i;
    maxPos = $chars.length;
    result = '';
    for (i = 0; i < len; i++) {
        result += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
};

exports.default = StrUtil;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map