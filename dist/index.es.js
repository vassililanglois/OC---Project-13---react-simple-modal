import we from "react";
function xe(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var fe = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ce() {
  if (ve) return ee;
  ve = 1;
  var n = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function h(d, y, s) {
    var T = null;
    if (s !== void 0 && (T = "" + s), y.key !== void 0 && (T = "" + y.key), "key" in y) {
      s = {};
      for (var l in y)
        l !== "key" && (s[l] = y[l]);
    } else s = y;
    return y = s.ref, {
      $$typeof: n,
      type: d,
      key: T,
      ref: y !== void 0 ? y : null,
      props: s
    };
  }
  return ee.Fragment = x, ee.jsx = h, ee.jsxs = h, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ae() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case M:
          return "Profiler";
        case k:
          return "StrictMode";
        case o:
          return "Suspense";
        case W:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case B:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function x(e) {
      return "" + e;
    }
    function h(e) {
      try {
        x(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), x(e);
      }
    }
    function d(e) {
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === B)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function y() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
      function a() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function O() {
      var e = n(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, a, i, c, f, p, v) {
      return a = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: c
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, a, i, c, f, p, v) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (K(u)) {
            for (i = 0; i < u.length; i++)
              _(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(u);
      if (J.call(r, "key")) {
        u = n(e);
        var m = Object.keys(r).filter(function($) {
          return $ !== "key";
        });
        i = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", X[u + i] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          m,
          u
        ), X[u + i] = !0);
      }
      if (u = null, a !== void 0 && (h(a), u = "" + a), T(r) && (h(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var b in r)
          b !== "key" && (a[b] = r[b]);
      } else a = r;
      return u && l(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        u,
        f,
        c,
        y(),
        a,
        p,
        v
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var w = we, C = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, K = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, Y = {}, D = w["react-stack-bottom-frame"].bind(
      w,
      s
    )(), z = L(d(s)), X = {};
    re.Fragment = P, re.jsx = function(e, r, a, i, c) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !1,
        i,
        c,
        f ? Error("react-stack-top-frame") : D,
        f ? L(d(e)) : z
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var f = 1e4 > F.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !0,
        i,
        c,
        f ? Error("react-stack-top-frame") : D,
        f ? L(d(e)) : z
      );
    };
  }()), re;
}
process.env.NODE_ENV === "production" ? fe.exports = Ce() : fe.exports = Ae();
var V = fe.exports, le = { exports: {} }, ne = { exports: {} }, g = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function je() {
  if (me) return g;
  me = 1;
  var n = typeof Symbol == "function" && Symbol.for, x = n ? Symbol.for("react.element") : 60103, h = n ? Symbol.for("react.portal") : 60106, d = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, O = n ? Symbol.for("react.async_mode") : 60111, R = n ? Symbol.for("react.concurrent_mode") : 60111, E = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, C = n ? Symbol.for("react.memo") : 60115, I = n ? Symbol.for("react.lazy") : 60116, P = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, M = n ? Symbol.for("react.responder") : 60118, U = n ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case x:
          switch (o = o.type, o) {
            case O:
            case R:
            case d:
            case s:
            case y:
            case _:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case E:
                case I:
                case C:
                case T:
                  return o;
                default:
                  return W;
              }
          }
        case h:
          return W;
      }
    }
  }
  function A(o) {
    return j(o) === R;
  }
  return g.AsyncMode = O, g.ConcurrentMode = R, g.ContextConsumer = l, g.ContextProvider = T, g.Element = x, g.ForwardRef = E, g.Fragment = d, g.Lazy = I, g.Memo = C, g.Portal = h, g.Profiler = s, g.StrictMode = y, g.Suspense = _, g.isAsyncMode = function(o) {
    return A(o) || j(o) === O;
  }, g.isConcurrentMode = A, g.isContextConsumer = function(o) {
    return j(o) === l;
  }, g.isContextProvider = function(o) {
    return j(o) === T;
  }, g.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }, g.isForwardRef = function(o) {
    return j(o) === E;
  }, g.isFragment = function(o) {
    return j(o) === d;
  }, g.isLazy = function(o) {
    return j(o) === I;
  }, g.isMemo = function(o) {
    return j(o) === C;
  }, g.isPortal = function(o) {
    return j(o) === h;
  }, g.isProfiler = function(o) {
    return j(o) === s;
  }, g.isStrictMode = function(o) {
    return j(o) === y;
  }, g.isSuspense = function(o) {
    return j(o) === _;
  }, g.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === d || o === R || o === s || o === y || o === _ || o === w || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === C || o.$$typeof === T || o.$$typeof === l || o.$$typeof === E || o.$$typeof === k || o.$$typeof === M || o.$$typeof === U || o.$$typeof === P);
  }, g.typeOf = j, g;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function ke() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, x = n ? Symbol.for("react.element") : 60103, h = n ? Symbol.for("react.portal") : 60106, d = n ? Symbol.for("react.fragment") : 60107, y = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, O = n ? Symbol.for("react.async_mode") : 60111, R = n ? Symbol.for("react.concurrent_mode") : 60111, E = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, C = n ? Symbol.for("react.memo") : 60115, I = n ? Symbol.for("react.lazy") : 60116, P = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, M = n ? Symbol.for("react.responder") : 60118, U = n ? Symbol.for("react.scope") : 60119;
    function j(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === d || t === R || t === s || t === y || t === _ || t === w || typeof t == "object" && t !== null && (t.$$typeof === I || t.$$typeof === C || t.$$typeof === T || t.$$typeof === l || t.$$typeof === E || t.$$typeof === k || t.$$typeof === M || t.$$typeof === U || t.$$typeof === P);
    }
    function A(t) {
      if (typeof t == "object" && t !== null) {
        var q = t.$$typeof;
        switch (q) {
          case x:
            var te = t.type;
            switch (te) {
              case O:
              case R:
              case d:
              case s:
              case y:
              case _:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case l:
                  case E:
                  case I:
                  case C:
                  case T:
                    return pe;
                  default:
                    return q;
                }
            }
          case h:
            return q;
        }
      }
    }
    var o = O, W = R, H = l, B = T, Z = x, Q = E, F = d, J = I, K = C, L = h, G = s, Y = y, D = _, z = !1;
    function X(t) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(t) || A(t) === O;
    }
    function e(t) {
      return A(t) === R;
    }
    function r(t) {
      return A(t) === l;
    }
    function a(t) {
      return A(t) === T;
    }
    function i(t) {
      return typeof t == "object" && t !== null && t.$$typeof === x;
    }
    function c(t) {
      return A(t) === E;
    }
    function f(t) {
      return A(t) === d;
    }
    function p(t) {
      return A(t) === I;
    }
    function v(t) {
      return A(t) === C;
    }
    function u(t) {
      return A(t) === h;
    }
    function m(t) {
      return A(t) === s;
    }
    function b(t) {
      return A(t) === y;
    }
    function $(t) {
      return A(t) === _;
    }
    S.AsyncMode = o, S.ConcurrentMode = W, S.ContextConsumer = H, S.ContextProvider = B, S.Element = Z, S.ForwardRef = Q, S.Fragment = F, S.Lazy = J, S.Memo = K, S.Portal = L, S.Profiler = G, S.StrictMode = Y, S.Suspense = D, S.isAsyncMode = X, S.isConcurrentMode = e, S.isContextConsumer = r, S.isContextProvider = a, S.isElement = i, S.isForwardRef = c, S.isFragment = f, S.isLazy = p, S.isMemo = v, S.isPortal = u, S.isProfiler = m, S.isStrictMode = b, S.isSuspense = $, S.isValidElementType = j, S.typeOf = A;
  }()), S;
}
var Ee;
function Oe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? ne.exports = je() : ne.exports = ke()), ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, Te;
function $e() {
  if (Te) return oe;
  Te = 1;
  var n = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function d(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var T = {}, l = 0; l < 10; l++)
        T["_" + String.fromCharCode(l)] = l;
      var O = Object.getOwnPropertyNames(T).map(function(E) {
        return T[E];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        R[E] = E;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = y() ? Object.assign : function(s, T) {
    for (var l, O = d(s), R, E = 1; E < arguments.length; E++) {
      l = Object(arguments[E]);
      for (var _ in l)
        x.call(l, _) && (O[_] = l[_]);
      if (n) {
        R = n(l);
        for (var w = 0; w < R.length; w++)
          h.call(l, R[w]) && (O[R[w]] = l[R[w]]);
      }
    }
    return O;
  }, oe;
}
var ae, he;
function de() {
  if (he) return ae;
  he = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = n, ae;
}
var ie, Re;
function Pe() {
  return Re || (Re = 1, ie = Function.call.bind(Object.prototype.hasOwnProperty)), ie;
}
var se, _e;
function Ie() {
  if (_e) return se;
  _e = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var x = de(), h = {}, d = Pe();
    n = function(s) {
      var T = "Warning: " + s;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function y(s, T, l, O, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in s)
        if (d(s, E)) {
          var _;
          try {
            if (typeof s[E] != "function") {
              var w = Error(
                (O || "React class") + ": " + l + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = s[E](T, E, O, l, null, x);
          } catch (I) {
            _ = I;
          }
          if (_ && !(_ instanceof Error) && n(
            (O || "React class") + ": type specification of " + l + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in h)) {
            h[_.message] = !0;
            var C = R ? R() : "";
            n(
              "Failed " + l + " type: " + _.message + (C ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, se = y, se;
}
var ce, ge;
function Me() {
  if (ge) return ce;
  ge = 1;
  var n = Oe(), x = $e(), h = de(), d = Pe(), y = Ie(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var O = "Warning: " + l;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return ce = function(l, O) {
    var R = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function _(e) {
      var r = e && (R && e[R] || e[E]);
      if (typeof r == "function")
        return r;
    }
    var w = "<<anonymous>>", C = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: U(),
      arrayOf: j,
      element: A(),
      elementType: o(),
      instanceOf: W,
      node: Q(),
      objectOf: B,
      oneOf: H,
      oneOfType: Z,
      shape: J,
      exact: K
    };
    function I(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function P(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(f, p, v, u, m, b, $) {
        if (u = u || w, b = b || v, $ !== h) {
          if (O) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = u + ":" + v;
            !r[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[q] = !0, a++);
          }
        }
        return p[v] == null ? f ? p[v] === null ? new P("The " + m + " `" + b + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new P("The " + m + " `" + b + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(p, v, u, m, b);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function M(e) {
      function r(a, i, c, f, p, v) {
        var u = a[i], m = Y(u);
        if (m !== e) {
          var b = D(u);
          return new P(
            "Invalid " + f + " `" + p + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function U() {
      return k(T);
    }
    function j(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var v = a[i];
        if (!Array.isArray(v)) {
          var u = Y(v);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var m = 0; m < v.length; m++) {
          var b = e(v, m, c, f, p + "[" + m + "]", h);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!l(p)) {
          var v = Y(p);
          return new P("Invalid " + c + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, c, f) {
        var p = r[a];
        if (!n.isValidElementType(p)) {
          var v = Y(p);
          return new P("Invalid " + c + " `" + f + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, c, f, p) {
        if (!(a[i] instanceof e)) {
          var v = e.name || w, u = X(a[i]);
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return k(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), T;
      function r(a, i, c, f, p) {
        for (var v = a[i], u = 0; u < e.length; u++)
          if (I(v, e[u]))
            return null;
        var m = JSON.stringify(e, function($, t) {
          var q = D(t);
          return q === "symbol" ? String(t) : t;
        });
        return new P("Invalid " + f + " `" + p + "` of value `" + String(v) + "` " + ("supplied to `" + c + "`, expected one of " + m + "."));
      }
      return k(r);
    }
    function B(e) {
      function r(a, i, c, f, p) {
        if (typeof e != "function")
          return new P("Property `" + p + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var m in v)
          if (d(v, m)) {
            var b = e(v, m, c, f, p + "." + m, h);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(a) + " at index " + r + "."
          ), T;
      }
      function i(c, f, p, v, u) {
        for (var m = [], b = 0; b < e.length; b++) {
          var $ = e[b], t = $(c, f, p, v, u, h);
          if (t == null)
            return null;
          t.data && d(t.data, "expectedType") && m.push(t.data.expectedType);
        }
        var q = m.length > 0 ? ", expected one of type [" + m.join(", ") + "]" : "";
        return new P("Invalid " + v + " `" + u + "` supplied to " + ("`" + p + "`" + q + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, c, f) {
        return L(r[a]) ? null : new P("Invalid " + c + " `" + f + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function F(e, r, a, i, c) {
      return new P(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function J(e) {
      function r(a, i, c, f, p) {
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var m in e) {
          var b = e[m];
          if (typeof b != "function")
            return F(c, f, p, m, D(b));
          var $ = b(v, m, c, f, p + "." + m, h);
          if ($)
            return $;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, c, f, p) {
        var v = a[i], u = Y(v);
        if (u !== "object")
          return new P("Invalid " + f + " `" + p + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var m = x({}, a[i], e);
        for (var b in m) {
          var $ = e[b];
          if (d(e, b) && typeof $ != "function")
            return F(c, f, p, b, D($));
          if (!$)
            return new P(
              "Invalid " + f + " `" + p + "` key `" + b + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var t = $(v, b, c, f, p + "." + b, h);
          if (t)
            return t;
        }
        return null;
      }
      return k(r);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || l(e))
            return !0;
          var r = _(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!L(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !L(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : G(r, e) ? "symbol" : r;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = Y(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function z(e) {
      var r = D(e);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function X(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return C.checkPropTypes = y, C.resetWarningCache = y.resetWarningCache, C.PropTypes = C, C;
  }, ce;
}
var ue, Se;
function Ye() {
  if (Se) return ue;
  Se = 1;
  var n = de();
  function x() {
  }
  function h() {
  }
  return h.resetWarningCache = x, ue = function() {
    function d(T, l, O, R, E, _) {
      if (_ !== n) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    d.isRequired = d;
    function y() {
      return d;
    }
    var s = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: y,
      element: d,
      elementType: d,
      instanceOf: y,
      node: d,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: h,
      resetWarningCache: x
    };
    return s.PropTypes = s, s;
  }, ue;
}
if (process.env.NODE_ENV !== "production") {
  var Ne = Oe(), Le = !0;
  le.exports = Me()(Ne.isElement, Le);
} else
  le.exports = Ye()();
var De = le.exports;
const N = /* @__PURE__ */ xe(De);
function qe({
  isOpen: n,
  onClose: x,
  children: h,
  containerClassName: d = "",
  containerStyle: y = {},
  modalClassName: s = "",
  modalStyle: T = {},
  contentClassName: l = "",
  contentStyle: O = {},
  closeButtonClassName: R = "",
  closeButtonStyle: E = {}
}) {
  return /* @__PURE__ */ V.jsx(
    "div",
    {
      className: `modal-container ${n ? "show" : ""} ${d}`,
      style: { ...y },
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Confirmation de création d'un nouvel employé",
      children: /* @__PURE__ */ V.jsxs(
        "div",
        {
          className: `modal ${n ? "show" : ""} ${s}`,
          style: T,
          children: [
            /* @__PURE__ */ V.jsx(
              "div",
              {
                className: `modal-content ${l}`,
                style: O,
                children: h
              }
            ),
            /* @__PURE__ */ V.jsx("div", { className: "close-button-container", children: /* @__PURE__ */ V.jsx(
              "button",
              {
                className: `close-button ${R}`,
                style: E,
                onClick: x,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ V.jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "white",
                    width: "24",
                    height: "24",
                    children: /* @__PURE__ */ V.jsx("path", { d: "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" })
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}
qe.propTypes = {
  /** Whether the modal is open (visible) or not */
  isOpen: N.bool.isRequired,
  /** Function called when the modal requests to be closed */
  onClose: N.func.isRequired,
  /** Content inside the modal */
  children: N.node,
  /** Additional class for modal container */
  containerClassName: N.string,
  /** Inline style for modal container */
  containerStyle: N.object,
  /** Additional class for the modal element */
  modalClassName: N.string,
  /** Inline style for the modal element */
  modalStyle: N.object,
  /** Additional class for the content wrapper */
  contentClassName: N.string,
  /** Inline style for the content wrapper */
  contentStyle: N.object,
  /** Additional class for the close button */
  closeButtonClassName: N.string,
  /** Inline style for the close button */
  closeButtonStyle: N.object
};
export {
  qe as default
};
