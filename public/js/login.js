/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/alert.js":
/*!*******************************!*\
  !*** ./resources/js/alert.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function alert_danger(data) {
  var alert = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><i class="icon fa fa-ban"></i> ' + data + '</div>';
  $('body').append(alert);
  $('.alert').fadeIn('slow').delay(3000).fadeOut('slow');
}

function alert_warning(data) {
  var alert = '<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><i class="icon fa fa-ban"></i> ' + data + '</div>';
  $('body').append(alert);
  $('.alert').fadeIn('slow').delay(3000).fadeOut('slow');
}

function alert_info(data) {
  var alert = '<div class="alert alert-info alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><i class="icon fa fa-ban"></i> ' + data + '</div>';
  $('body').append(alert);
  $('.alert').fadeIn('slow').delay(3000).fadeOut('slow');
}

function alert_success(data) {
  var alert = '<div class="alert  alert-success dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><i class="icon fa fa-check"></i> ' + data + '</div>';
  $('body').append(alert);
  $('.alert').fadeIn('slow').delay(3000).fadeOut('slow');
}

function js_dele(data) {
  swal({
    title: "Your data will be deleted permanently!",
    text: "Are you sure to proceed?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, Remove My data!",
    cancelButtonText: "No, I am not sure!",
    closeOnConfirm: false,
    closeOnCancel: false
  }, function (isConfirm) {
    if (isConfirm) {
      swal("Removed Successfully!", data, "success");
    } else {
      swal("Hurray", "Account is not removed!", "error");
    }
  });
}

function js_success(data) {
  swal("Thankyou!", data, "success");
}

function js_update(data) {
  swal("Updated Successfully!", data, "success");
}

function js_error(data) {
  swal("warning!", data, "error");
}

function js_delete(data) {
  swal("Deleted Successfully!", data, "success");
}

function js_login(data) {
  swal("Login Successfully!", data, "success");
}

/***/ }),

/***/ "./resources/js/sweetalert.min.js":
/*!****************************************!*\
  !*** ./resources/js/sweetalert.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t, n) {
  "use strict";

  !function o(e, t, n) {
    function a(s, l) {
      if (!t[s]) {
        if (!e[s]) {
          var i = "function" == typeof require && require;
          if (!l && i) return require(s, !0);
          if (r) return r(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var c = t[s] = {
          exports: {}
        };
        e[s][0].call(c.exports, function (t) {
          var n = e[s][1][t];
          return a(n ? n : t);
        }, c, c.exports, o, e, t, n);
      }

      return t[s].exports;
    }

    for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) {
      a(n[s]);
    }

    return a;
  }({
    1: [function (o, a, r) {
      var s = function s(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var l,
          i,
          u,
          _c,
          d = o("./modules/handle-dom"),
          f = o("./modules/utils"),
          p = o("./modules/handle-swal-dom"),
          m = o("./modules/handle-click"),
          v = o("./modules/handle-key"),
          y = s(v),
          h = o("./modules/default-params"),
          b = s(h),
          g = o("./modules/set-params"),
          w = s(g);

      r["default"] = u = _c = function c() {
        function o(e) {
          var t = a;
          return t[e] === n ? b["default"][e] : t[e];
        }

        var a = arguments[0];
        if (d.addClass(t.body, "stop-scrolling"), p.resetInput(), a === n) return f.logStr("SweetAlert expects at least 1 attribute!"), !1;
        var r = f.extend({}, b["default"]);

        switch (_typeof(a)) {
          case "string":
            r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";
            break;

          case "object":
            if (a.title === n) return f.logStr('Missing "title" argument!'), !1;
            r.title = a.title;

            for (var s in b["default"]) {
              r[s] = o(s);
            }

            r.confirmButtonText = r.showCancelButton ? "Confirm" : b["default"].confirmButtonText, r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;
            break;

          default:
            return f.logStr('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(a)), !1;
        }

        w["default"](r), p.fixVerticalPosition(), p.openModal(arguments[1]);

        for (var u = p.getModal(), v = u.querySelectorAll("button"), h = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function g(e) {
          return m.handleButton(e, r, u);
        }, C = 0; C < v.length; C++) {
          for (var S = 0; S < h.length; S++) {
            var x = h[S];
            v[C][x] = g;
          }
        }

        p.getOverlay().onclick = g, l = e.onkeydown;

        var k = function k(e) {
          return y["default"](e, r, u);
        };

        e.onkeydown = k, e.onfocus = function () {
          setTimeout(function () {
            i !== n && (i.focus(), i = n);
          }, 0);
        }, _c.enableButtons();
      }, u.setDefaults = _c.setDefaults = function (e) {
        if (!e) throw new Error("userParams is required");
        if ("object" != _typeof(e)) throw new Error("userParams has to be a object");
        f.extend(b["default"], e);
      }, u.close = _c.close = function () {
        var o = p.getModal();
        d.fadeOut(p.getOverlay(), 5), d.fadeOut(o, 5), d.removeClass(o, "showSweetAlert"), d.addClass(o, "hideSweetAlert"), d.removeClass(o, "visible");
        var a = o.querySelector(".sa-icon.sa-success");
        d.removeClass(a, "animate"), d.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"), d.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");
        var r = o.querySelector(".sa-icon.sa-error");
        d.removeClass(r, "animateErrorIcon"), d.removeClass(r.querySelector(".sa-x-mark"), "animateXMark");
        var s = o.querySelector(".sa-icon.sa-warning");
        return d.removeClass(s, "pulseWarning"), d.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"), d.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
          var e = o.getAttribute("data-custom-class");
          d.removeClass(o, e);
        }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(o.timeout), !0;
      }, u.showInputError = _c.showInputError = function (e) {
        var t = p.getModal(),
            n = t.querySelector(".sa-input-error");
        d.addClass(n, "show");
        var o = t.querySelector(".sa-error-container");
        d.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function () {
          u.enableButtons();
        }, 1), t.querySelector("input").focus();
      }, u.resetInputError = _c.resetInputError = function (e) {
        if (e && 13 === e.keyCode) return !1;
        var t = p.getModal(),
            n = t.querySelector(".sa-input-error");
        d.removeClass(n, "show");
        var o = t.querySelector(".sa-error-container");
        d.removeClass(o, "show");
      }, u.disableButtons = _c.disableButtons = function () {
        var e = p.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");
        t.disabled = !0, n.disabled = !0;
      }, u.enableButtons = _c.enableButtons = function () {
        var e = p.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");
        t.disabled = !1, n.disabled = !1;
      }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : f.logStr("SweetAlert is a frontend module!"), a.exports = r["default"];
    }, {
      "./modules/default-params": 2,
      "./modules/handle-click": 3,
      "./modules/handle-dom": 4,
      "./modules/handle-key": 5,
      "./modules/handle-swal-dom": 6,
      "./modules/set-params": 8,
      "./modules/utils": 9
    }],
    2: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var o = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#8CD4F5",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: "",
        html: !1,
        animation: !0,
        allowEscapeKey: !0,
        inputType: "text",
        inputPlaceholder: "",
        inputValue: "",
        showLoaderOnConfirm: !1
      };
      n["default"] = o, t.exports = n["default"];
    }, {}],
    3: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      });

      var a = t("./utils"),
          r = (t("./handle-swal-dom"), t("./handle-dom")),
          s = function s(t, n, o) {
        function s(e) {
          m && n.confirmButtonColor && (p.style.backgroundColor = e);
        }

        var u,
            c,
            d,
            f = t || e.event,
            p = f.target || f.srcElement,
            m = -1 !== p.className.indexOf("confirm"),
            v = -1 !== p.className.indexOf("sweet-overlay"),
            y = r.hasClass(o, "visible"),
            h = n.doneFunction && "true" === o.getAttribute("data-has-done-function");

        switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = a.colorLuminance(u, -.04), d = a.colorLuminance(u, -.14)), f.type) {
          case "mouseover":
            s(c);
            break;

          case "mouseout":
            s(u);
            break;

          case "mousedown":
            s(d);
            break;

          case "mouseup":
            s(c);
            break;

          case "focus":
            var b = o.querySelector("button.confirm"),
                g = o.querySelector("button.cancel");
            m ? g.style.boxShadow = "none" : b.style.boxShadow = "none";
            break;

          case "click":
            var w = o === p,
                C = r.isDescendant(o, p);
            if (!w && !C && y && !n.allowOutsideClick) break;
            m && h && y ? l(o, n) : h && y || v ? i(o, n) : r.isDescendant(o, p) && "BUTTON" === p.tagName && sweetAlert.close();
        }
      },
          l = function l(e, t) {
        var n = !0;
        r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons();
      },
          i = function i(e, t) {
        var n = String(t.doneFunction).replace(/\s/g, ""),
            o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
        o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
      };

      o["default"] = {
        handleButton: s,
        handleConfirm: l,
        handleCancel: i
      }, n.exports = o["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6,
      "./utils": 9
    }],
    4: [function (n, o, a) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });

      var r = function r(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ");
      },
          s = function s(e, t) {
        r(e, t) || (e.className += " " + t);
      },
          l = function l(e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";

        if (r(e, t)) {
          for (; n.indexOf(" " + t + " ") >= 0;) {
            n = n.replace(" " + t + " ", " ");
          }

          e.className = n.replace(/^\s+|\s+$/g, "");
        }
      },
          i = function i(e) {
        var n = t.createElement("div");
        return n.appendChild(t.createTextNode(e)), n.innerHTML;
      },
          u = function u(e) {
        e.style.opacity = "", e.style.display = "block";
      },
          c = function c(e) {
        if (e && !e.length) return u(e);

        for (var t = 0; t < e.length; ++t) {
          u(e[t]);
        }
      },
          d = function d(e) {
        e.style.opacity = "", e.style.display = "none";
      },
          f = function f(e) {
        if (e && !e.length) return d(e);

        for (var t = 0; t < e.length; ++t) {
          d(e[t]);
        }
      },
          p = function p(e, t) {
        for (var n = t.parentNode; null !== n;) {
          if (n === e) return !0;
          n = n.parentNode;
        }

        return !1;
      },
          m = function m(e) {
        e.style.left = "-9999px", e.style.display = "block";
        var t,
            n = e.clientHeight;
        return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px";
      },
          v = function v(e, t) {
        if (+e.style.opacity < 1) {
          t = t || 16, e.style.opacity = 0, e.style.display = "block";

          var n = +new Date(),
              o = function (e) {
            function t() {
              return e.apply(this, arguments);
            }

            return t.toString = function () {
              return e.toString();
            }, t;
          }(function () {
            e.style.opacity = +e.style.opacity + (new Date() - n) / 100, n = +new Date(), +e.style.opacity < 1 && setTimeout(o, t);
          });

          o();
        }

        e.style.display = "block";
      },
          y = function y(e, t) {
        t = t || 16, e.style.opacity = 1;

        var n = +new Date(),
            o = function (e) {
          function t() {
            return e.apply(this, arguments);
          }

          return t.toString = function () {
            return e.toString();
          }, t;
        }(function () {
          e.style.opacity = +e.style.opacity - (new Date() - n) / 100, n = +new Date(), +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none";
        });

        o();
      },
          h = function h(n) {
        if ("function" == typeof MouseEvent) {
          var o = new MouseEvent("click", {
            view: e,
            bubbles: !1,
            cancelable: !0
          });
          n.dispatchEvent(o);
        } else if (t.createEvent) {
          var a = t.createEvent("MouseEvents");
          a.initEvent("click", !1, !1), n.dispatchEvent(a);
        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick();
      },
          b = function b(t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0);
      };

      a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = h, a.stopEventPropagation = b;
    }, {}],
    5: [function (t, o, a) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });

      var r = t("./handle-dom"),
          s = t("./handle-swal-dom"),
          l = function l(t, o, a) {
        var l = t || e.event,
            i = l.keyCode || l.which,
            u = a.querySelector("button.confirm"),
            c = a.querySelector("button.cancel"),
            d = a.querySelectorAll("button[tabindex]");

        if (-1 !== [9, 13, 32, 27].indexOf(i)) {
          for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++) {
            if (f === d[m]) {
              p = m;
              break;
            }
          }

          9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(l), f.focus(), o.confirmButtonColor && s.setFocusStyle(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, r.fireClick(f, l)) : f = n;
        }
      };

      a["default"] = l, o.exports = a["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6
    }],
    6: [function (n, o, a) {
      var r = function r(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      };

      Object.defineProperty(a, "__esModule", {
        value: !0
      });

      var s = n("./utils"),
          l = n("./handle-dom"),
          i = n("./default-params"),
          u = r(i),
          c = n("./injected-html"),
          d = r(c),
          f = ".sweet-alert",
          p = ".sweet-overlay",
          m = function m() {
        var e = t.createElement("div");

        for (e.innerHTML = d["default"]; e.firstChild;) {
          t.body.appendChild(e.firstChild);
        }
      },
          v = function (e) {
        function t() {
          return e.apply(this, arguments);
        }

        return t.toString = function () {
          return e.toString();
        }, t;
      }(function () {
        var e = t.querySelector(f);
        return e || (m(), e = v()), e;
      }),
          y = function y() {
        var e = v();
        return e ? e.querySelector("input") : void 0;
      },
          h = function h() {
        return t.querySelector(p);
      },
          b = function b(e, t) {
        var n = s.hexToRgb(t);
        e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
      },
          g = function g(n) {
        var o = v();
        l.fadeIn(h(), 10), l.show(o), l.addClass(o, "showSweetAlert"), l.removeClass(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
        var a = o.querySelector("button.confirm");
        a.focus(), setTimeout(function () {
          l.addClass(o, "visible");
        }, 500);
        var r = o.getAttribute("data-timer");

        if ("null" !== r && "" !== r) {
          var s = n;
          o.timeout = setTimeout(function () {
            var e = (s || null) && "true" === o.getAttribute("data-has-done-function");
            e ? s(null) : sweetAlert.close();
          }, r);
        }
      },
          w = function w() {
        var e = v(),
            t = y();
        l.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C();
      },
          C = function C(e) {
        if (e && 13 === e.keyCode) return !1;
        var t = v(),
            n = t.querySelector(".sa-input-error");
        l.removeClass(n, "show");
        var o = t.querySelector(".sa-error-container");
        l.removeClass(o, "show");
      },
          S = function S() {
        var e = v();
        e.style.marginTop = l.getTopMargin(v());
      };

      a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = h, a.getInput = y, a.setFocusStyle = b, a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S;
    }, {
      "./default-params": 2,
      "./handle-dom": 4,
      "./injected-html": 7,
      "./utils": 9
    }],
    7: [function (e, t, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
      n["default"] = o, t.exports = n["default"];
    }, {}],
    8: [function (e, t, o) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      });

      var a = e("./utils"),
          r = e("./handle-swal-dom"),
          s = e("./handle-dom"),
          l = ["error", "warning", "info", "success", "input", "prompt"],
          i = function i(e) {
        var t = r.getModal(),
            o = t.querySelector("h2"),
            i = t.querySelector("p"),
            u = t.querySelector("button.cancel"),
            c = t.querySelector("button.confirm");
        if (o.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && s.show(i), e.customClass) s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);else {
          var d = t.getAttribute("data-custom-class");
          s.removeClass(t, d), t.setAttribute("data-custom-class", "");
        }

        if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
          var f = function () {
            for (var o = !1, a = 0; a < l.length; a++) {
              if (e.type === l[a]) {
                o = !0;
                break;
              }
            }

            if (!o) return logStr("Unknown alert type: " + e.type), {
              v: !1
            };
            var i = ["success", "error", "warning", "info"],
                u = n;
            -1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), s.show(u));
            var c = r.getInput();

            switch (e.type) {
              case "success":
                s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                break;

              case "error":
                s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                break;

              case "warning":
                s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                break;

              case "input":
              case "prompt":
                c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), s.addClass(t, "show-input"), setTimeout(function () {
                  c.focus(), c.addEventListener("keyup", swal.resetInputError);
                }, 400);
            }
          }();

          if ("object" == _typeof(f)) return f.v;
        }

        if (e.imageUrl) {
          var p = t.querySelector(".sa-icon.sa-custom");
          p.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(p);
          var m = 80,
              v = 80;

          if (e.imageSize) {
            var y = e.imageSize.toString().split("x"),
                h = y[0],
                b = y[1];
            h && b ? (m = h, v = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize);
          }

          p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px");
        }

        t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : s.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), e.cancelButtonText && (u.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = s.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
        var g = e.doneFunction ? !0 : !1;
        t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer);
      };

      o["default"] = i, t.exports = o["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6,
      "./utils": 9
    }],
    9: [function (t, n, o) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      });

      var a = function a(e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }

        return e;
      },
          r = function r(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null;
      },
          s = function s() {
        return e.attachEvent && !e.addEventListener;
      },
          l = function l(t) {
        e.console && e.console.log("SweetAlert: " + t);
      },
          i = function i(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
        var n,
            o,
            a = "#";

        for (o = 0; 3 > o; o++) {
          n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
        }

        return a;
      };

      o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i;
    }, {}]
  }, {}, [1]),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return sweetAlert;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, document);

/***/ }),

/***/ 1:
/*!**********************************************************************!*\
  !*** multi ./resources/js/alert.js ./resources/js/sweetalert.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\projects\mps\resources\js\alert.js */"./resources/js/alert.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\projects\mps\resources\js\sweetalert.min.js */"./resources/js/sweetalert.min.js");


/***/ })

/******/ });