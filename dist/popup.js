"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p;
  var v;
  var y;
  var d = {};
  var w = [];
  var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var g = Array.isArray;
  function m(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l3, u4, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return x(l3, e3, i3, r3, null);
  }
  function x(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function $(n2, l3) {
    if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o3 = m({}, u4);
      o3.__v = u4.__v + 1, l.vnode && l.vnode(o3), q(n2.__P, o3, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? $(u4) : t3, !!(32 & u4.__u), r3), o3.__v = u4.__v, o3.__.__k[o3.__i] = o3, D(i3, o3, r3), u4.__e = u4.__ = null, o3.__e != t3 && P(o3);
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
      if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
    }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, _2, g2, m3 = t3 && t3.__k || w, b2 = l3.length;
    for (f4 = T(u4, l3, m3, f4, b2), a3 = 0; a3 < b2; a3++) null != (p3 = u4.__k[a3]) && (h3 = -1 != p3.__i && m3[p3.__i] || d, p3.__i = a3, _2 = q(n2, p3, h3, i3, r3, o3, e3, f4, c3, s3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), s3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), (g2 = !!(4 & p3.__u)) || h3.__k === p3.__k ? (f4 = j(p3, f4, n2, g2), g2 && h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _2 ? f4 = _2 : v3 && (f4 = v3.nextSibling), p3.__u &= -7);
    return u4.__e = y3, f4;
  }
  function T(n2, l3, u4, t3, i3) {
    var r3, o3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = x(null, o3, null, null, null) : g(o3) ? o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f4 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = O(o3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
    return t3;
  }
  function j(n2, l3, u4, t3) {
    var i3, r3;
    if ("function" == typeof n2.type) {
      for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = j(i3[r3], l3, u4, t3));
      return l3;
    }
    n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function O(n2, l3, u4, t3) {
    var i3, r3, o3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], s3 = null != c3 && 0 == (2 & c3.__u);
    if (null === c3 && null == e3 || s3 && e3 == c3.key && f4 == c3.type) return u4;
    if (t3 > (s3 ? 1 : 0)) {
      for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o3;
    }
    return -1;
  }
  function z(n2, l3, u4) {
    "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px";
  }
  function N(n2, l3, u4, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || z(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || z(n2.style, l3, u4[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(a, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4[s] = t3[s] : (u4[s] = h, n2.addEventListener(l3, r3 ? v : p, r3)) : n2.removeEventListener(l3, r3 ? v : p, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function V(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4[c]) u4[c] = h++;
        else if (u4[c] < t3[s]) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function q(n2, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, d3, _2, k4, x4, M2, $3, I2, P2, A2, H3, T3 = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n: if ("function" == typeof T3) try {
      if (k4 = u4.props, x4 = T3.prototype && T3.prototype.render, M2 = (a3 = T3.contextType) && i3[a3.__c], $3 = a3 ? M2 ? M2.props.value : a3.__ : i3, t3.__c ? _2 = (h3 = u4.__c = t3.__c).__ = h3.__E : (x4 ? u4.__c = h3 = new T3(k4, $3) : (u4.__c = h3 = new C(k4, $3), h3.constructor = T3, h3.render = Q), M2 && M2.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), x4 && null == h3.__s && (h3.__s = h3.state), x4 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = m({}, h3.__s)), m(h3.__s, T3.getDerivedStateFromProps(k4, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) x4 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x4 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x4 && null == T3.getDerivedStateFromProps && k4 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(k4, $3), u4.__v == t3.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(k4, h3.__s, $3)) {
          u4.__v != t3.__v && (h3.props = k4, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), w.push.apply(h3.__h, h3._sb), h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(k4, h3.__s, $3), x4 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, d3);
        });
      }
      if (h3.context = $3, h3.props = k4, h3.__P = n2, h3.__e = false, I2 = l.__r, P2 = 0, x4) h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), w.push.apply(h3.__h, h3._sb), h3._sb = [];
      else do {
        h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++P2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = m(m({}, i3), h3.getChildContext())), x4 && !p3 && null != h3.getSnapshotBeforeUpdate && (d3 = h3.getSnapshotBeforeUpdate(v3, y3)), A2 = null != a3 && a3.type === S && null == a3.key ? E(a3.props.children) : a3, f4 = L(n2, g(A2) ? A2 : [A2], u4, t3, i3, r3, o3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), _2 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u4.__v = null, c3 || null != o3) if (n3.then) {
        for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o3[o3.indexOf(f4)] = null, u4.__e = f4;
      } else {
        for (H3 = o3.length; H3--; ) b(o3[H3]);
        B(u4);
      }
      else u4.__e = t3.__e, u4.__k = t3.__k, n3.then || B(u4);
      l.__e(n3, u4, t3);
    }
    else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u4, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
  }
  function G(u4, t3, i3, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k4 = t3.props, x4 = t3.type;
    if ("svg" == x4 ? o3 = "http://www.w3.org/2000/svg" : "math" == x4 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((y3 = e3[a3]) && "setAttribute" in y3 == !!x4 && (x4 ? y3.localName == x4 : 3 == y3.nodeType)) {
        u4 = y3, e3[a3] = null;
        break;
      }
    }
    if (null == u4) {
      if (null == x4) return document.createTextNode(k4);
      u4 = document.createElementNS(o3, x4, k4.is && k4), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null == x4) m3 === k4 || c3 && u4.data == k4 || (u4.data = k4);
    else {
      if (e3 = e3 && n.call(u4.childNodes), !c3 && null != e3) for (m3 = {}, a3 = 0; a3 < u4.attributes.length; a3++) m3[(y3 = u4.attributes[a3]).name] = y3.value;
      for (a3 in m3) y3 = m3[a3], "dangerouslySetInnerHTML" == a3 ? p3 = y3 : "children" == a3 || a3 in k4 || "value" == a3 && "defaultValue" in k4 || "checked" == a3 && "defaultChecked" in k4 || N(u4, a3, null, y3, o3);
      for (a3 in k4) y3 = k4[a3], "children" == a3 ? v3 = y3 : "dangerouslySetInnerHTML" == a3 ? h3 = y3 : "value" == a3 ? w3 = y3 : "checked" == a3 ? _2 = y3 : c3 && "function" != typeof y3 || m3[a3] === y3 || N(u4, a3, y3, m3[a3], o3);
      if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
      else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) b(e3[a3]);
      c3 || (a3 = "value", "progress" == x4 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[a3] || "progress" == x4 && !w3 || "option" == x4 && w3 != m3[a3]) && N(u4, a3, w3, m3[a3], o3), a3 = "checked", null != _2 && _2 != u4[a3] && N(u4, a3, _2, m3[a3], o3));
    }
    return u4;
  }
  function J(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function K(n2, u4, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u4)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
    t3 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function Q(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function R(u4, t3, i3) {
    var r3, o3, e3, f4;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], q(t3, u4 = (!r3 && i3 || t3).__k = k(S, null, [u4]), o3 || d, d, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), D(e3, u4, f4);
  }
  function X(n2) {
    function l3(n3) {
      var u4, t3;
      return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u4 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value != n4.value && u4.forEach(function(n5) {
          n5.__e = true, A(n5);
        });
      }, this.sub = function(n4) {
        u4.add(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4 && u4.delete(n4), l4 && l4.call(n4);
        };
      }), n3.children;
    }
    return l3.__c = "__cC" + y++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
      return n3.children(l4);
    }).contextType = l3, l3;
  }
  n = w.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
      if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, C.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)), n2 && m(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), A(this));
  }, C.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u4, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u5.some(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u4) {
    var i3 = p2(t2++, 3);
    !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
  }
  function T2(n2, r3) {
    var u4 = p2(t2++, 7);
    return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function x2(n2) {
    var u4 = r2.context[n2.__c], i3 = p2(t2++, 9);
    return i3.c = n2, u4 ? (null == i3.__ && (i3.__ = true, u4.sub(r2)), u4.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) {
      var t3 = n2.__H;
      if (n2.__P && t3) try {
        t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
      } catch (r3) {
        t3.__h = [], c2.__e(r3, n2.__v);
      }
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.some(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // src/locales.ts
  var translations = {
    en: {
      loadingId: "Loading ID...",
      detectingListing: "Detecting listing...",
      postingAs: "Posting as:",
      anonUser: "AnonUser",
      noComments: "No comments yet. Be the first!",
      price: "Price",
      noise: "Noise",
      security: "Security",
      accesses: "Accesses",
      post: "Post",
      placeholder: "Is the price fair? How is the neighborhood?",
      noListingFound: "No Listing Found",
      navigateMessage: "Navigate to any Idealista listing page to see and post comments.",
      guidanceHint: "Open a property on idealista.pt, idealista.com, or idealista.it, then click this extension.",
      openIdealista: "Open Idealista",
      listingPrefix: "Listing #",
      guest: "Guest",
      reply: "Reply",
      cancel: "Cancel",
      anonymous: "Anonymous",
      postAnonymously: "Post anonymously",
      sponsored: "Sponsored",
      ad: "Ad",
      compareMortgages: "Compare Mortgages",
      homeInsurance: "Home Insurance",
      movingServices: "Moving Services"
    },
    pt: {
      loadingId: "A carregar ID...",
      detectingListing: "A detetar an\xFAncio...",
      postingAs: "Publicando como:",
      anonUser: "UtilizadorAn\xF3nimo",
      noComments: "Sem coment\xE1rios. Seja o primeiro!",
      price: "Pre\xE7o",
      noise: "Ru\xEDdo",
      security: "Seguran\xE7a",
      accesses: "Acessos",
      post: "Publicar",
      placeholder: "O pre\xE7o \xE9 justo? Como \xE9 o bairro?",
      noListingFound: "An\xFAncio n\xE3o encontrado",
      navigateMessage: "Navegue para uma p\xE1gina de an\xFAncio no Idealista para ver e publicar coment\xE1rios.",
      guidanceHint: "Abra um im\xF3vel no idealista.pt, idealista.com ou idealista.it e clique nesta extens\xE3o.",
      openIdealista: "Abrir Idealista",
      listingPrefix: "An\xFAncio #",
      guest: "Visitante",
      reply: "Responder",
      cancel: "Cancelar",
      anonymous: "An\xF3nimo",
      postAnonymously: "Publicar anonimamente",
      sponsored: "Patrocinado",
      ad: "An\xFAncio",
      compareMortgages: "Comparar Cr\xE9ditos",
      homeInsurance: "Seguro Habita\xE7\xE3o",
      movingServices: "Servi\xE7os de Mudan\xE7as"
    },
    es: {
      loadingId: "Cargando ID...",
      detectingListing: "Detectando anuncio...",
      postingAs: "Publicando como:",
      anonUser: "UsuarioAn\xF3nimo",
      noComments: "Sin comentarios. \xA1S\xE9 el primero!",
      price: "Precio",
      noise: "Ruido",
      security: "Seguridad",
      accesses: "Accesos",
      post: "Publicar",
      placeholder: "\xBFEl precio es justo? \xBFC\xF3mo es el barrio?",
      noListingFound: "Anuncio no encontrado",
      navigateMessage: "Navega a una p\xE1gina de anuncio en Idealista para ver y publicar comentarios.",
      guidanceHint: "Abre un inmueble en idealista.com, idealista.pt o idealista.it y haz clic en esta extensi\xF3n.",
      openIdealista: "Abrir Idealista",
      listingPrefix: "Anuncio #",
      guest: "Invitado",
      reply: "Responder",
      cancel: "Cancelar",
      anonymous: "An\xF3nimo",
      postAnonymously: "Publicar an\xF3nimamente",
      sponsored: "Patrocinado",
      ad: "Anuncio",
      compareMortgages: "Comparar Hipotecas",
      homeInsurance: "Seguro de Hogar",
      movingServices: "Servicios de Mudanza"
    },
    it: {
      loadingId: "Caricamento ID...",
      detectingListing: "Rilevamento annuncio...",
      postingAs: "Pubblicando come:",
      anonUser: "UtenteAnonimo",
      noComments: "Nessun commento. Sii il primo!",
      price: "Prezzo",
      noise: "Rumore",
      security: "Sicurezza",
      accesses: "Accessi",
      post: "Pubblica",
      placeholder: "Il prezzo \xE8 giusto? Com'\xE8 il quartiere?",
      noListingFound: "Annuncio non trovato",
      navigateMessage: "Vai a una pagina di annuncio su Idealista per vedere e pubblicare commenti.",
      guidanceHint: "Apri un immobile su idealista.it, idealista.com o idealista.pt e clicca su questa estensione.",
      openIdealista: "Apri Idealista",
      listingPrefix: "Annuncio #",
      guest: "Ospite",
      reply: "Rispondi",
      cancel: "Annulla",
      anonymous: "Anonimo",
      postAnonymously: "Pubblica anonimamente",
      sponsored: "Sponsorizzato",
      ad: "Annuncio",
      compareMortgages: "Confronta Mutui",
      homeInsurance: "Assicurazione Casa",
      movingServices: "Servizi Trasloco"
    }
  };

  // node_modules/@firebase/util/dist/postinstall.mjs
  var getDefaultsFromPostinstall = () => void 0;

  // node_modules/@firebase/util/dist/index.esm.js
  var stringToByteArray$1 = function(str) {
    const out = [];
    let p3 = 0;
    for (let i3 = 0; i3 < str.length; i3++) {
      let c3 = str.charCodeAt(i3);
      if (c3 < 128) {
        out[p3++] = c3;
      } else if (c3 < 2048) {
        out[p3++] = c3 >> 6 | 192;
        out[p3++] = c3 & 63 | 128;
      } else if ((c3 & 64512) === 55296 && i3 + 1 < str.length && (str.charCodeAt(i3 + 1) & 64512) === 56320) {
        c3 = 65536 + ((c3 & 1023) << 10) + (str.charCodeAt(++i3) & 1023);
        out[p3++] = c3 >> 18 | 240;
        out[p3++] = c3 >> 12 & 63 | 128;
        out[p3++] = c3 >> 6 & 63 | 128;
        out[p3++] = c3 & 63 | 128;
      } else {
        out[p3++] = c3 >> 12 | 224;
        out[p3++] = c3 >> 6 & 63 | 128;
        out[p3++] = c3 & 63 | 128;
      }
    }
    return out;
  };
  var byteArrayToString = function(bytes) {
    const out = [];
    let pos = 0, c3 = 0;
    while (pos < bytes.length) {
      const c1 = bytes[pos++];
      if (c1 < 128) {
        out[c3++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        const c22 = bytes[pos++];
        out[c3++] = String.fromCharCode((c1 & 31) << 6 | c22 & 63);
      } else if (c1 > 239 && c1 < 365) {
        const c22 = bytes[pos++];
        const c32 = bytes[pos++];
        const c4 = bytes[pos++];
        const u4 = ((c1 & 7) << 18 | (c22 & 63) << 12 | (c32 & 63) << 6 | c4 & 63) - 65536;
        out[c3++] = String.fromCharCode(55296 + (u4 >> 10));
        out[c3++] = String.fromCharCode(56320 + (u4 & 1023));
      } else {
        const c22 = bytes[pos++];
        const c32 = bytes[pos++];
        out[c3++] = String.fromCharCode((c1 & 15) << 12 | (c22 & 63) << 6 | c32 & 63);
      }
    }
    return out.join("");
  };
  var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === "function",
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
      if (!Array.isArray(input)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      this.init_();
      const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
      const output = [];
      for (let i3 = 0; i3 < input.length; i3 += 3) {
        const byte1 = input[i3];
        const haveByte2 = i3 + 1 < input.length;
        const byte2 = haveByte2 ? input[i3 + 1] : 0;
        const haveByte3 = i3 + 2 < input.length;
        const byte3 = haveByte3 ? input[i3 + 2] : 0;
        const outByte1 = byte1 >> 2;
        const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
        let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
        let outByte4 = byte3 & 63;
        if (!haveByte3) {
          outByte4 = 64;
          if (!haveByte2) {
            outByte3 = 64;
          }
        }
        output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
      }
      return output.join("");
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return btoa(input);
      }
      return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return atob(input);
      }
      return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
      this.init_();
      const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
      const output = [];
      for (let i3 = 0; i3 < input.length; ) {
        const byte1 = charToByteMap[input.charAt(i3++)];
        const haveByte2 = i3 < input.length;
        const byte2 = haveByte2 ? charToByteMap[input.charAt(i3)] : 0;
        ++i3;
        const haveByte3 = i3 < input.length;
        const byte3 = haveByte3 ? charToByteMap[input.charAt(i3)] : 64;
        ++i3;
        const haveByte4 = i3 < input.length;
        const byte4 = haveByte4 ? charToByteMap[input.charAt(i3)] : 64;
        ++i3;
        if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
          throw new DecodeBase64StringError();
        }
        const outByte1 = byte1 << 2 | byte2 >> 4;
        output.push(outByte1);
        if (byte3 !== 64) {
          const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
          output.push(outByte2);
          if (byte4 !== 64) {
            const outByte3 = byte3 << 6 & 192 | byte4;
            output.push(outByte3);
          }
        }
      }
      return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {};
        this.charToByteMap_ = {};
        this.byteToCharMapWebSafe_ = {};
        this.charToByteMapWebSafe_ = {};
        for (let i3 = 0; i3 < this.ENCODED_VALS.length; i3++) {
          this.byteToCharMap_[i3] = this.ENCODED_VALS.charAt(i3);
          this.charToByteMap_[this.byteToCharMap_[i3]] = i3;
          this.byteToCharMapWebSafe_[i3] = this.ENCODED_VALS_WEBSAFE.charAt(i3);
          this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i3]] = i3;
          if (i3 >= this.ENCODED_VALS_BASE.length) {
            this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i3)] = i3;
            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i3)] = i3;
          }
        }
      }
    }
  };
  var DecodeBase64StringError = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "DecodeBase64StringError";
    }
  };
  var base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
  };
  var base64urlEncodeWithoutPadding = function(str) {
    return base64Encode(str).replace(/\./g, "");
  };
  var base64Decode = function(str) {
    try {
      return base64.decodeString(str, true);
    } catch (e3) {
      console.error("base64Decode failed: ", e3);
    }
    return null;
  };
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("Unable to locate global object.");
  }
  var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
  var getDefaultsFromEnvVariable = () => {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
      return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
      return JSON.parse(defaultsJsonString);
    }
  };
  var getDefaultsFromCookie = () => {
    if (typeof document === "undefined") {
      return;
    }
    let match;
    try {
      match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e3) {
      return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
  };
  var getDefaults = () => {
    try {
      return getDefaultsFromPostinstall() || getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e3) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e3}`);
      return;
    }
  };
  var getDefaultEmulatorHost = (productName) => getDefaults()?.emulatorHosts?.[productName];
  var getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
      return void 0;
    }
    const separatorIndex = host.lastIndexOf(":");
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
      throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === "[") {
      return [host.substring(1, separatorIndex - 1), port];
    } else {
      return [host.substring(0, separatorIndex), port];
    }
  };
  var getDefaultAppConfig = () => getDefaults()?.config;
  var getExperimentalSetting = (name4) => getDefaults()?.[`_${name4}`];
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    /**
     * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  function isCloudWorkstation(url) {
    try {
      const host = url.startsWith("http://") || url.startsWith("https://") ? new URL(url).hostname : url;
      return host.endsWith(".cloudworkstations.dev");
    } catch {
      return false;
    }
  }
  async function pingServer(endpoint) {
    const result = await fetch(endpoint, {
      credentials: "include"
    });
    return result.ok;
  }
  function createMockUserToken(token, projectId) {
    if (token.uid) {
      throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    const header = {
      alg: "none",
      type: "JWT"
    };
    const project = projectId || "demo-project";
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
      throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = {
      // Set all required fields to decent defaults
      iss: `https://securetoken.google.com/${project}`,
      aud: project,
      iat,
      exp: iat + 3600,
      auth_time: iat,
      sub,
      user_id: sub,
      firebase: {
        sign_in_provider: "custom",
        identities: {}
      },
      // Override with user options
      ...token
    };
    const signature = "";
    return [
      base64urlEncodeWithoutPadding(JSON.stringify(header)),
      base64urlEncodeWithoutPadding(JSON.stringify(payload)),
      signature
    ].join(".");
  }
  var emulatorStatus = {};
  function getEmulatorSummary() {
    const summary = {
      prod: [],
      emulator: []
    };
    for (const key of Object.keys(emulatorStatus)) {
      if (emulatorStatus[key]) {
        summary.emulator.push(key);
      } else {
        summary.prod.push(key);
      }
    }
    return summary;
  }
  function getOrCreateEl(id) {
    let parentDiv = document.getElementById(id);
    let created = false;
    if (!parentDiv) {
      parentDiv = document.createElement("div");
      parentDiv.setAttribute("id", id);
      created = true;
    }
    return { created, element: parentDiv };
  }
  var previouslyDismissed = false;
  function updateEmulatorBanner(name4, isRunningEmulator) {
    if (typeof window === "undefined" || typeof document === "undefined" || !isCloudWorkstation(window.location.host) || emulatorStatus[name4] === isRunningEmulator || emulatorStatus[name4] || // If already set to use emulator, can't go back to prod.
    previouslyDismissed) {
      return;
    }
    emulatorStatus[name4] = isRunningEmulator;
    function prefixedId(id) {
      return `__firebase__banner__${id}`;
    }
    const bannerId = "__firebase__banner";
    const summary = getEmulatorSummary();
    const showError = summary.prod.length > 0;
    function tearDown() {
      const element = document.getElementById(bannerId);
      if (element) {
        element.remove();
      }
    }
    function setupBannerStyles(bannerEl) {
      bannerEl.style.display = "flex";
      bannerEl.style.background = "#7faaf0";
      bannerEl.style.position = "fixed";
      bannerEl.style.bottom = "5px";
      bannerEl.style.left = "5px";
      bannerEl.style.padding = ".5em";
      bannerEl.style.borderRadius = "5px";
      bannerEl.style.alignItems = "center";
    }
    function setupIconStyles(prependIcon, iconId) {
      prependIcon.setAttribute("width", "24");
      prependIcon.setAttribute("id", iconId);
      prependIcon.setAttribute("height", "24");
      prependIcon.setAttribute("viewBox", "0 0 24 24");
      prependIcon.setAttribute("fill", "none");
      prependIcon.style.marginLeft = "-6px";
    }
    function setupCloseBtn() {
      const closeBtn = document.createElement("span");
      closeBtn.style.cursor = "pointer";
      closeBtn.style.marginLeft = "16px";
      closeBtn.style.fontSize = "24px";
      closeBtn.innerHTML = " &times;";
      closeBtn.onclick = () => {
        previouslyDismissed = true;
        tearDown();
      };
      return closeBtn;
    }
    function setupLinkStyles(learnMoreLink, learnMoreId) {
      learnMoreLink.setAttribute("id", learnMoreId);
      learnMoreLink.innerText = "Learn more";
      learnMoreLink.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend";
      learnMoreLink.setAttribute("target", "__blank");
      learnMoreLink.style.paddingLeft = "5px";
      learnMoreLink.style.textDecoration = "underline";
    }
    function setupDom() {
      const banner = getOrCreateEl(bannerId);
      const firebaseTextId = prefixedId("text");
      const firebaseText = document.getElementById(firebaseTextId) || document.createElement("span");
      const learnMoreId = prefixedId("learnmore");
      const learnMoreLink = document.getElementById(learnMoreId) || document.createElement("a");
      const prependIconId = prefixedId("preprendIcon");
      const prependIcon = document.getElementById(prependIconId) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
      if (banner.created) {
        const bannerEl = banner.element;
        setupBannerStyles(bannerEl);
        setupLinkStyles(learnMoreLink, learnMoreId);
        const closeBtn = setupCloseBtn();
        setupIconStyles(prependIcon, prependIconId);
        bannerEl.append(prependIcon, firebaseText, learnMoreLink, closeBtn);
        document.body.appendChild(bannerEl);
      }
      if (showError) {
        firebaseText.innerText = `Preview backend disconnected.`;
        prependIcon.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
      } else {
        prependIcon.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
        firebaseText.innerText = "Preview backend running in this workspace.";
      }
      firebaseText.setAttribute("id", firebaseTextId);
    }
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", setupDom);
    } else {
      setupDom();
    }
  }
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isNode() {
    const forceEnvironment = getDefaults()?.forceEnvironment;
    if (forceEnvironment === "node") {
      return true;
    } else if (forceEnvironment === "browser") {
      return false;
    }
    try {
      return Object.prototype.toString.call(global.process) === "[object process]";
    } catch (e3) {
      return false;
    }
  }
  function isCloudflareWorker() {
    return typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isIE() {
    const ua = getUA();
    return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
  }
  function isSafari() {
    return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
  }
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e3) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          reject(request.error?.message || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class _FirebaseError extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, _FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = `${this.service}/${code}`;
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_2, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function deepEqual(a3, b2) {
    if (a3 === b2) {
      return true;
    }
    const aKeys = Object.keys(a3);
    const bKeys = Object.keys(b2);
    for (const k4 of aKeys) {
      if (!bKeys.includes(k4)) {
        return false;
      }
      const aProp = a3[k4];
      const bProp = b2[k4];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k4 of bKeys) {
      if (!aKeys.includes(k4)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
      if (Array.isArray(value)) {
        value.forEach((arrayVal) => {
          params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
        });
      } else {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
    return params.length ? "&" + params.join("&") : "";
  }
  function querystringDecode(querystring2) {
    const obj = {};
    const tokens = querystring2.replace(/^\?/, "").split("&");
    tokens.forEach((token) => {
      if (token) {
        const [key, value] = token.split("=");
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
    return obj;
  }
  function extractQuerystring(url) {
    const queryStart = url.indexOf("?");
    if (!queryStart) {
      return "";
    }
    const fragmentStart = url.indexOf("#", queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
  }
  function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
  }
  var ObserverProxy = class {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
      this.observers = [];
      this.unsubscribes = [];
      this.observerCount = 0;
      this.task = Promise.resolve();
      this.finalized = false;
      this.onNoObservers = onNoObservers;
      this.task.then(() => {
        executor(this);
      }).catch((e3) => {
        this.error(e3);
      });
    }
    next(value) {
      this.forEachObserver((observer) => {
        observer.next(value);
      });
    }
    error(error) {
      this.forEachObserver((observer) => {
        observer.error(error);
      });
      this.close(error);
    }
    complete() {
      this.forEachObserver((observer) => {
        observer.complete();
      });
      this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber synchronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
      let observer;
      if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
        throw new Error("Missing Observer.");
      }
      if (implementsAnyMethods(nextOrObserver, [
        "next",
        "error",
        "complete"
      ])) {
        observer = nextOrObserver;
      } else {
        observer = {
          next: nextOrObserver,
          error,
          complete
        };
      }
      if (observer.next === void 0) {
        observer.next = noop;
      }
      if (observer.error === void 0) {
        observer.error = noop;
      }
      if (observer.complete === void 0) {
        observer.complete = noop;
      }
      const unsub = this.unsubscribeOne.bind(this, this.observers.length);
      if (this.finalized) {
        this.task.then(() => {
          try {
            if (this.finalError) {
              observer.error(this.finalError);
            } else {
              observer.complete();
            }
          } catch (e3) {
          }
          return;
        });
      }
      this.observers.push(observer);
      return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i3) {
      if (this.observers === void 0 || this.observers[i3] === void 0) {
        return;
      }
      delete this.observers[i3];
      this.observerCount -= 1;
      if (this.observerCount === 0 && this.onNoObservers !== void 0) {
        this.onNoObservers(this);
      }
    }
    forEachObserver(fn) {
      if (this.finalized) {
        return;
      }
      for (let i3 = 0; i3 < this.observers.length; i3++) {
        this.sendOne(i3, fn);
      }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i3, fn) {
      this.task.then(() => {
        if (this.observers !== void 0 && this.observers[i3] !== void 0) {
          try {
            fn(this.observers[i3]);
          } catch (e3) {
            if (typeof console !== "undefined" && console.error) {
              console.error(e3);
            }
          }
        }
      });
    }
    close(err) {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      if (err !== void 0) {
        this.finalError = err;
      }
      this.task.then(() => {
        this.observers = void 0;
        this.onNoObservers = void 0;
      });
    }
  };
  function implementsAnyMethods(obj, methods) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    for (const method of methods) {
      if (method in obj && typeof obj[method] === "function") {
        return true;
      }
    }
    return false;
  }
  function noop() {
  }
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // node_modules/@firebase/component/dist/esm/index.esm.js
  var Component = class {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name4, instanceFactory, type) {
      this.name = name4;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
    setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
    setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
    setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  };
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = class {
    constructor(name4, container) {
      this.name = name4;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
      this.instancesOptions = /* @__PURE__ */ new Map();
      this.onInitCallbacks = /* @__PURE__ */ new Map();
    }
    /**
     * @param identifier A provider can provide multiple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        const deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e3) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(options?.identifier);
      const optional = options?.optional ?? false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e3) {
          if (optional) {
            return null;
          } else {
            throw e3;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error(`Service ${this.name} is not available`);
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
      }
      if (this.component) {
        throw Error(`Component for ${this.name} has already been provided`);
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e3) {
        }
      }
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e3) {
        }
      }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
      const services = Array.from(this.instances.values());
      await Promise.all([
        ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
        ...services.filter((service) => "_delete" in service).map((service) => service._delete())
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
      return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
      return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
      const { options = {} } = opts;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
      }
      if (!this.isComponentSet()) {
        throw Error(`Component ${this.name} has not been registered yet`);
      }
      const instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      const existingCallbacks = this.onInitCallbacks.get(normalizedIdentifier) ?? /* @__PURE__ */ new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      const existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return () => {
        existingCallbacks.delete(callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
      const callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      for (const callback of callbacks) {
        try {
          callback(instance, identifier);
        } catch {
        }
      }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
      let instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch {
          }
        }
      }
      return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    }
  };
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = class {
    constructor(name4) {
      this.name = name4;
      this.providers = /* @__PURE__ */ new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
      const provider2 = this.getProvider(component.name);
      if (provider2.isComponentSet()) {
        throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
      }
      provider2.setComponent(component);
    }
    addOrOverwriteComponent(component) {
      const provider2 = this.getProvider(component.name);
      if (provider2.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name4) {
      if (this.providers.has(name4)) {
        return this.providers.get(name4);
      }
      const provider2 = new Provider(name4, this);
      this.providers.set(name4, provider2);
      return provider2;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };

  // node_modules/@firebase/logger/dist/esm/index.esm.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
      throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
  };
  var Logger = class {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name4) {
      this.name = name4;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
      }
      this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c3) => object instanceof c3);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // node_modules/idb/build/index.js
  function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name4, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db2) => {
      if (terminated)
        db2.addEventListener("close", () => terminated());
      if (blocking) {
        db2.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // node_modules/@firebase/app/dist/esm/index.esm.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider2) => {
        if (isVersionServiceProvider(provider2)) {
          const service = provider2.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider2) {
    const component = provider2.getComponent();
    return component?.type === "VERSION";
  }
  var name$q = "@firebase/app";
  var version$1 = "0.14.6";
  var logger = new Logger("@firebase/app");
  var name$p = "@firebase/app-compat";
  var name$o = "@firebase/analytics-compat";
  var name$n = "@firebase/analytics";
  var name$m = "@firebase/app-check-compat";
  var name$l = "@firebase/app-check";
  var name$k = "@firebase/auth";
  var name$j = "@firebase/auth-compat";
  var name$i = "@firebase/database";
  var name$h = "@firebase/data-connect";
  var name$g = "@firebase/database-compat";
  var name$f = "@firebase/functions";
  var name$e = "@firebase/functions-compat";
  var name$d = "@firebase/installations";
  var name$c = "@firebase/installations-compat";
  var name$b = "@firebase/messaging";
  var name$a = "@firebase/messaging-compat";
  var name$9 = "@firebase/performance";
  var name$8 = "@firebase/performance-compat";
  var name$7 = "@firebase/remote-config";
  var name$6 = "@firebase/remote-config-compat";
  var name$5 = "@firebase/storage";
  var name$4 = "@firebase/storage-compat";
  var name$3 = "@firebase/firestore";
  var name$2 = "@firebase/ai";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var version = "12.6.0";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$q]: "fire-core",
    [name$p]: "fire-core-compat",
    [name$n]: "fire-analytics",
    [name$o]: "fire-analytics-compat",
    [name$l]: "fire-app-check",
    [name$m]: "fire-app-check-compat",
    [name$k]: "fire-auth",
    [name$j]: "fire-auth-compat",
    [name$i]: "fire-rtdb",
    [name$h]: "fire-data-connect",
    [name$g]: "fire-rtdb-compat",
    [name$f]: "fire-fn",
    [name$e]: "fire-fn-compat",
    [name$d]: "fire-iid",
    [name$c]: "fire-iid-compat",
    [name$b]: "fire-fcm",
    [name$a]: "fire-fcm-compat",
    [name$9]: "fire-perf",
    [name$8]: "fire-perf-compat",
    [name$7]: "fire-rc",
    [name$6]: "fire-rc-compat",
    [name$5]: "fire-gcs",
    [name$4]: "fire-gcs-compat",
    [name$3]: "fire-fst",
    [name$1]: "fire-fst-compat",
    [name$2]: "fire-vertex",
    "fire-js": "fire-js",
    // Platform identifier for JS SDK.
    [name]: "fire-js-all"
  };
  var _apps = /* @__PURE__ */ new Map();
  var _serverApps = /* @__PURE__ */ new Map();
  var _components = /* @__PURE__ */ new Map();
  function _addComponent(app2, component) {
    try {
      app2.container.addComponent(component);
    } catch (e3) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e3);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app2 of _apps.values()) {
      _addComponent(app2, component);
    }
    for (const serverApp of _serverApps.values()) {
      _addComponent(serverApp, component);
    }
    return true;
  }
  function _getProvider(app2, name4) {
    const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app2.container.getProvider(name4);
  }
  function _isFirebaseServerApp(obj) {
    if (obj === null || obj === void 0) {
      return false;
    }
    return obj.settings !== void 0;
  }
  var ERRORS = {
    [
      "no-app"
      /* AppError.NO_APP */
    ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
    [
      "bad-app-name"
      /* AppError.BAD_APP_NAME */
    ]: "Illegal App name: '{$appName}'",
    [
      "duplicate-app"
      /* AppError.DUPLICATE_APP */
    ]: "Firebase App named '{$appName}' already exists with different options or config",
    [
      "app-deleted"
      /* AppError.APP_DELETED */
    ]: "Firebase App named '{$appName}' already deleted",
    [
      "server-app-deleted"
      /* AppError.SERVER_APP_DELETED */
    ]: "Firebase Server App has been deleted",
    [
      "no-options"
      /* AppError.NO_OPTIONS */
    ]: "Need to provide options, when not being deployed to hosting via source.",
    [
      "invalid-app-argument"
      /* AppError.INVALID_APP_ARGUMENT */
    ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    [
      "invalid-log-argument"
      /* AppError.INVALID_LOG_ARGUMENT */
    ]: "First argument to `onLog` must be null or a function.",
    [
      "idb-open"
      /* AppError.IDB_OPEN */
    ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-get"
      /* AppError.IDB_GET */
    ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-set"
      /* AppError.IDB_WRITE */
    ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-delete"
      /* AppError.IDB_DELETE */
    ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "finalization-registry-not-supported"
      /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
    ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    [
      "invalid-server-app-environment"
      /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
    ]: "FirebaseServerApp is not for use in browser environments."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = { ...options };
      this._config = { ...config };
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component(
        "app",
        () => this,
        "PUBLIC"
        /* ComponentType.PUBLIC */
      ));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  var SDK_VERSION = version;
  function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
      const name5 = rawConfig;
      rawConfig = { name: name5 };
    }
    const config = {
      name: DEFAULT_ENTRY_NAME2,
      automaticDataCollectionEnabled: true,
      ...rawConfig
    };
    const name4 = config.name;
    if (typeof name4 !== "string" || !name4) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name4)
      });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
      throw ERROR_FACTORY.create(
        "no-options"
        /* AppError.NO_OPTIONS */
      );
    }
    const existingApp = _apps.get(name4);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
      }
    }
    const container = new ComponentContainer(name4);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
  }
  function getApp(name4 = DEFAULT_ENTRY_NAME2) {
    const app2 = _apps.get(name4);
    if (!app2 && name4 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
      return initializeApp();
    }
    if (!app2) {
      throw ERROR_FACTORY.create("no-app", { appName: name4 });
    }
    return app2;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    let library = PLATFORM_LOG_STRING[libraryKeyOrName] ?? libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      `${library}-version`,
      () => ({ library, version: version4 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  var DB_NAME = "firebase-heartbeat-database";
  var DB_VERSION = 1;
  var STORE_NAME = "firebase-heartbeat-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db2, oldVersion) => {
          switch (oldVersion) {
            case 0:
              try {
                db2.createObjectStore(STORE_NAME);
              } catch (e3) {
                console.warn(e3);
              }
          }
        }
      }).catch((e3) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e3.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app2) {
    try {
      const db2 = await getDbPromise();
      const tx = db2.transaction(STORE_NAME);
      const result = await tx.objectStore(STORE_NAME).get(computeKey(app2));
      await tx.done;
      return result;
    } catch (e3) {
      if (e3 instanceof FirebaseError) {
        logger.warn(e3.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e3?.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
    try {
      const db2 = await getDbPromise();
      const tx = db2.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app2));
      await tx.done;
    } catch (e3) {
      if (e3 instanceof FirebaseError) {
        logger.warn(e3.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e3?.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app2) {
    return `${app2.name}!${app2.options.appId}`;
  }
  var MAX_HEADER_BYTES = 1024;
  var MAX_NUM_STORED_HEARTBEATS = 30;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app2 = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app2);
      this._heartbeatsCachePromise = this._storage.read().then((result) => {
        this._heartbeatsCache = result;
        return result;
      });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
      try {
        const platformLogger = this.container.getProvider("platform-logger").getImmediate();
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache?.heartbeats == null) {
          this._heartbeatsCache = await this._heartbeatsCachePromise;
          if (this._heartbeatsCache?.heartbeats == null) {
            return;
          }
        }
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
          return;
        } else {
          this._heartbeatsCache.heartbeats.push({ date, agent });
          if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
            const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
            this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
          }
        }
        return this._storage.overwrite(this._heartbeatsCache);
      } catch (e3) {
        logger.warn(e3);
      }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
      try {
        if (this._heartbeatsCache === null) {
          await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0) {
          return "";
        }
        const date = getUTCDateString();
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
          this._heartbeatsCache.heartbeats = unsentEntries;
          await this._storage.overwrite(this._heartbeatsCache);
        } else {
          this._heartbeatsCache.heartbeats = [];
          void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
      } catch (e3) {
        logger.warn(e3);
        return "";
      }
    }
  };
  function getUTCDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  var HeartbeatStorageImpl = class {
    constructor(app2) {
      this.app = app2;
      this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
      if (!isIndexedDBAvailable()) {
        return false;
      } else {
        return validateIndexedDBOpenable().then(() => true).catch(() => false);
      }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return { heartbeats: [] };
      } else {
        const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
        if (idbHeartbeatObject?.heartbeats) {
          return idbHeartbeatObject;
        } else {
          return { heartbeats: [] };
        }
      }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ?? existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: heartbeatsObject.heartbeats
        });
      }
    }
    // add heartbeats
    async add(heartbeatsObject) {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ?? existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: [
            ...existingHeartbeatsObject.heartbeats,
            ...heartbeatsObject.heartbeats
          ]
        });
      }
    }
  };
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function getEarliestHeartbeatIdx(heartbeats) {
    if (heartbeats.length === 0) {
      return -1;
    }
    let earliestHeartbeatIdx = 0;
    let earliestHeartbeatDate = heartbeats[0].date;
    for (let i3 = 1; i3 < heartbeats.length; i3++) {
      if (heartbeats[i3].date < earliestHeartbeatDate) {
        earliestHeartbeatDate = heartbeats[i3].date;
        earliestHeartbeatIdx = i3;
      }
    }
    return earliestHeartbeatIdx;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$q, version$1, variant);
    registerVersion(name$q, version$1, "esm2020");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // node_modules/firebase/app/dist/esm/index.esm.js
  var name2 = "firebase";
  var version2 = "12.7.0";
  registerVersion(name2, version2, "app");

  // node_modules/@firebase/auth/dist/esm/index-36fcbc82.js
  function _prodErrorMap() {
    return {
      [
        "dependent-sdk-initialized-before-auth"
        /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
      ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    };
  }
  var prodErrorMap = _prodErrorMap;
  var _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
  var logClient = new Logger("@firebase/auth");
  function _logWarn(msg, ...args) {
    if (logClient.logLevel <= LogLevel.WARN) {
      logClient.warn(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
  }
  function _logError(msg, ...args) {
    if (logClient.logLevel <= LogLevel.ERROR) {
      logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
  }
  function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
  }
  function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
  }
  function _errorWithCustomMessage(auth2, code, message) {
    const errorMap = {
      ...prodErrorMap(),
      [code]: message
    };
    const factory = new ErrorFactory("auth", "Firebase", errorMap);
    return factory.create(code, {
      appName: auth2.name
    });
  }
  function _serverAppCurrentUserOperationNotSupportedError(auth2) {
    return _errorWithCustomMessage(auth2, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
  }
  function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== "string") {
      const code = rest[0];
      const fullParams = [...rest.slice(1)];
      if (fullParams[0]) {
        fullParams[0].appName = authOrCode.name;
      }
      return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
  }
  function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) {
      throw createErrorInternal(authOrCode, ...rest);
    }
  }
  function debugFail(failure) {
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    throw new Error(message);
  }
  function debugAssert(assertion, message) {
    if (!assertion) {
      debugFail(message);
    }
  }
  function _isHttpOrHttps() {
    return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
  }
  function _getCurrentScheme() {
    return typeof self !== "undefined" && self.location?.protocol || null;
  }
  function _isOnline() {
    if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
    // This is especially true for Cordova apps which have unreliable
    // navigator.onLine behavior unless cordova-plugin-network-information is
    // installed which overwrites the native navigator.onLine value and
    // defines navigator.connection.
    (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
      return navigator.onLine;
    }
    return true;
  }
  function _getUserLanguage() {
    if (typeof navigator === "undefined") {
      return null;
    }
    const navigatorLanguage = navigator;
    return (
      // Most reliable, but only supported in Chrome/Firefox.
      navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
      // UI, not the language set in browser settings.
      navigatorLanguage.language || // Couldn't determine language.
      null
    );
  }
  var Delay = class {
    constructor(shortDelay, longDelay) {
      this.shortDelay = shortDelay;
      this.longDelay = longDelay;
      debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
      this.isMobile = isMobileCordova() || isReactNative();
    }
    get() {
      if (!_isOnline()) {
        return Math.min(5e3, this.shortDelay);
      }
      return this.isMobile ? this.longDelay : this.shortDelay;
    }
  };
  function _emulatorUrl(config, path) {
    debugAssert(config.emulator, "Emulator should always be set here");
    const { url } = config.emulator;
    if (!path) {
      return url;
    }
    return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
  }
  var FetchProvider = class {
    static initialize(fetchImpl, headersImpl, responseImpl) {
      this.fetchImpl = fetchImpl;
      if (headersImpl) {
        this.headersImpl = headersImpl;
      }
      if (responseImpl) {
        this.responseImpl = responseImpl;
      }
    }
    static fetch() {
      if (this.fetchImpl) {
        return this.fetchImpl;
      }
      if (typeof self !== "undefined" && "fetch" in self) {
        return self.fetch;
      }
      if (typeof globalThis !== "undefined" && globalThis.fetch) {
        return globalThis.fetch;
      }
      if (typeof fetch !== "undefined") {
        return fetch;
      }
      debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static headers() {
      if (this.headersImpl) {
        return this.headersImpl;
      }
      if (typeof self !== "undefined" && "Headers" in self) {
        return self.Headers;
      }
      if (typeof globalThis !== "undefined" && globalThis.Headers) {
        return globalThis.Headers;
      }
      if (typeof Headers !== "undefined") {
        return Headers;
      }
      debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static response() {
      if (this.responseImpl) {
        return this.responseImpl;
      }
      if (typeof self !== "undefined" && "Response" in self) {
        return self.Response;
      }
      if (typeof globalThis !== "undefined" && globalThis.Response) {
        return globalThis.Response;
      }
      if (typeof Response !== "undefined") {
        return Response;
      }
      debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
  };
  var SERVER_ERROR_MAP = {
    // Custom token errors.
    [
      "CREDENTIAL_MISMATCH"
      /* ServerError.CREDENTIAL_MISMATCH */
    ]: "custom-token-mismatch",
    // This can only happen if the SDK sends a bad request.
    [
      "MISSING_CUSTOM_TOKEN"
      /* ServerError.MISSING_CUSTOM_TOKEN */
    ]: "internal-error",
    // Create Auth URI errors.
    [
      "INVALID_IDENTIFIER"
      /* ServerError.INVALID_IDENTIFIER */
    ]: "invalid-email",
    // This can only happen if the SDK sends a bad request.
    [
      "MISSING_CONTINUE_URI"
      /* ServerError.MISSING_CONTINUE_URI */
    ]: "internal-error",
    // Sign in with email and password errors (some apply to sign up too).
    [
      "INVALID_PASSWORD"
      /* ServerError.INVALID_PASSWORD */
    ]: "wrong-password",
    // This can only happen if the SDK sends a bad request.
    [
      "MISSING_PASSWORD"
      /* ServerError.MISSING_PASSWORD */
    ]: "missing-password",
    // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
    // invalid.
    [
      "INVALID_LOGIN_CREDENTIALS"
      /* ServerError.INVALID_LOGIN_CREDENTIALS */
    ]: "invalid-credential",
    // Sign up with email and password errors.
    [
      "EMAIL_EXISTS"
      /* ServerError.EMAIL_EXISTS */
    ]: "email-already-in-use",
    [
      "PASSWORD_LOGIN_DISABLED"
      /* ServerError.PASSWORD_LOGIN_DISABLED */
    ]: "operation-not-allowed",
    // Verify assertion for sign in with credential errors:
    [
      "INVALID_IDP_RESPONSE"
      /* ServerError.INVALID_IDP_RESPONSE */
    ]: "invalid-credential",
    [
      "INVALID_PENDING_TOKEN"
      /* ServerError.INVALID_PENDING_TOKEN */
    ]: "invalid-credential",
    [
      "FEDERATED_USER_ID_ALREADY_LINKED"
      /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
    ]: "credential-already-in-use",
    // This can only happen if the SDK sends a bad request.
    [
      "MISSING_REQ_TYPE"
      /* ServerError.MISSING_REQ_TYPE */
    ]: "internal-error",
    // Send Password reset email errors:
    [
      "EMAIL_NOT_FOUND"
      /* ServerError.EMAIL_NOT_FOUND */
    ]: "user-not-found",
    [
      "RESET_PASSWORD_EXCEED_LIMIT"
      /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
    ]: "too-many-requests",
    [
      "EXPIRED_OOB_CODE"
      /* ServerError.EXPIRED_OOB_CODE */
    ]: "expired-action-code",
    [
      "INVALID_OOB_CODE"
      /* ServerError.INVALID_OOB_CODE */
    ]: "invalid-action-code",
    // This can only happen if the SDK sends a bad request.
    [
      "MISSING_OOB_CODE"
      /* ServerError.MISSING_OOB_CODE */
    ]: "internal-error",
    // Operations that require ID token in request:
    [
      "CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
      /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
    ]: "requires-recent-login",
    [
      "INVALID_ID_TOKEN"
      /* ServerError.INVALID_ID_TOKEN */
    ]: "invalid-user-token",
    [
      "TOKEN_EXPIRED"
      /* ServerError.TOKEN_EXPIRED */
    ]: "user-token-expired",
    [
      "USER_NOT_FOUND"
      /* ServerError.USER_NOT_FOUND */
    ]: "user-token-expired",
    // Other errors.
    [
      "TOO_MANY_ATTEMPTS_TRY_LATER"
      /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
    ]: "too-many-requests",
    [
      "PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
      /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
    ]: "password-does-not-meet-requirements",
    // Phone Auth related errors.
    [
      "INVALID_CODE"
      /* ServerError.INVALID_CODE */
    ]: "invalid-verification-code",
    [
      "INVALID_SESSION_INFO"
      /* ServerError.INVALID_SESSION_INFO */
    ]: "invalid-verification-id",
    [
      "INVALID_TEMPORARY_PROOF"
      /* ServerError.INVALID_TEMPORARY_PROOF */
    ]: "invalid-credential",
    [
      "MISSING_SESSION_INFO"
      /* ServerError.MISSING_SESSION_INFO */
    ]: "missing-verification-id",
    [
      "SESSION_EXPIRED"
      /* ServerError.SESSION_EXPIRED */
    ]: "code-expired",
    // Other action code errors when additional settings passed.
    // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
    // This is OK as this error will be caught by client side validation.
    [
      "MISSING_ANDROID_PACKAGE_NAME"
      /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
    ]: "missing-android-pkg-name",
    [
      "UNAUTHORIZED_DOMAIN"
      /* ServerError.UNAUTHORIZED_DOMAIN */
    ]: "unauthorized-continue-uri",
    // getProjectConfig errors when clientId is passed.
    [
      "INVALID_OAUTH_CLIENT_ID"
      /* ServerError.INVALID_OAUTH_CLIENT_ID */
    ]: "invalid-oauth-client-id",
    // User actions (sign-up or deletion) disabled errors.
    [
      "ADMIN_ONLY_OPERATION"
      /* ServerError.ADMIN_ONLY_OPERATION */
    ]: "admin-restricted-operation",
    // Multi factor related errors.
    [
      "INVALID_MFA_PENDING_CREDENTIAL"
      /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
    ]: "invalid-multi-factor-session",
    [
      "MFA_ENROLLMENT_NOT_FOUND"
      /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
    ]: "multi-factor-info-not-found",
    [
      "MISSING_MFA_ENROLLMENT_ID"
      /* ServerError.MISSING_MFA_ENROLLMENT_ID */
    ]: "missing-multi-factor-info",
    [
      "MISSING_MFA_PENDING_CREDENTIAL"
      /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
    ]: "missing-multi-factor-session",
    [
      "SECOND_FACTOR_EXISTS"
      /* ServerError.SECOND_FACTOR_EXISTS */
    ]: "second-factor-already-in-use",
    [
      "SECOND_FACTOR_LIMIT_EXCEEDED"
      /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
    ]: "maximum-second-factor-count-exceeded",
    // Blocking functions related errors.
    [
      "BLOCKING_FUNCTION_ERROR_RESPONSE"
      /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
    ]: "internal-error",
    // Recaptcha related errors.
    [
      "RECAPTCHA_NOT_ENABLED"
      /* ServerError.RECAPTCHA_NOT_ENABLED */
    ]: "recaptcha-not-enabled",
    [
      "MISSING_RECAPTCHA_TOKEN"
      /* ServerError.MISSING_RECAPTCHA_TOKEN */
    ]: "missing-recaptcha-token",
    [
      "INVALID_RECAPTCHA_TOKEN"
      /* ServerError.INVALID_RECAPTCHA_TOKEN */
    ]: "invalid-recaptcha-token",
    [
      "INVALID_RECAPTCHA_ACTION"
      /* ServerError.INVALID_RECAPTCHA_ACTION */
    ]: "invalid-recaptcha-action",
    [
      "MISSING_CLIENT_TYPE"
      /* ServerError.MISSING_CLIENT_TYPE */
    ]: "missing-client-type",
    [
      "MISSING_RECAPTCHA_VERSION"
      /* ServerError.MISSING_RECAPTCHA_VERSION */
    ]: "missing-recaptcha-version",
    [
      "INVALID_RECAPTCHA_VERSION"
      /* ServerError.INVALID_RECAPTCHA_VERSION */
    ]: "invalid-recaptcha-version",
    [
      "INVALID_REQ_TYPE"
      /* ServerError.INVALID_REQ_TYPE */
    ]: "invalid-req-type"
    /* AuthErrorCode.INVALID_REQ_TYPE */
  };
  var CookieAuthProxiedEndpoints = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token"
    /* Endpoint.TOKEN */
  ];
  var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
  function _addTidIfNecessary(auth2, request) {
    if (auth2.tenantId && !request.tenantId) {
      return {
        ...request,
        tenantId: auth2.tenantId
      };
    }
    return request;
  }
  async function _performApiRequest(auth2, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth2, customErrorMap, async () => {
      let body = {};
      let params = {};
      if (request) {
        if (method === "GET") {
          params = request;
        } else {
          body = {
            body: JSON.stringify(request)
          };
        }
      }
      const query2 = querystring({
        key: auth2.config.apiKey,
        ...params
      }).slice(1);
      const headers = await auth2._getAdditionalHeaders();
      headers[
        "Content-Type"
        /* HttpHeader.CONTENT_TYPE */
      ] = "application/json";
      if (auth2.languageCode) {
        headers[
          "X-Firebase-Locale"
          /* HttpHeader.X_FIREBASE_LOCALE */
        ] = auth2.languageCode;
      }
      const fetchArgs = {
        method,
        headers,
        ...body
      };
      if (!isCloudflareWorker()) {
        fetchArgs.referrerPolicy = "no-referrer";
      }
      if (auth2.emulatorConfig && isCloudWorkstation(auth2.emulatorConfig.host)) {
        fetchArgs.credentials = "include";
      }
      return FetchProvider.fetch()(await _getFinalTarget(auth2, auth2.config.apiHost, path, query2), fetchArgs);
    });
  }
  async function _performFetchWithErrorHandling(auth2, customErrorMap, fetchFn) {
    auth2._canInitEmulator = false;
    const errorMap = { ...SERVER_ERROR_MAP, ...customErrorMap };
    try {
      const networkTimeout = new NetworkTimeout(auth2);
      const response = await Promise.race([
        fetchFn(),
        networkTimeout.promise
      ]);
      networkTimeout.clearNetworkTimeout();
      const json = await response.json();
      if ("needConfirmation" in json) {
        throw _makeTaggedError(auth2, "account-exists-with-different-credential", json);
      }
      if (response.ok && !("errorMessage" in json)) {
        return json;
      } else {
        const errorMessage = response.ok ? json.errorMessage : json.error.message;
        const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
        if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
          throw _makeTaggedError(auth2, "credential-already-in-use", json);
        } else if (serverErrorCode === "EMAIL_EXISTS") {
          throw _makeTaggedError(auth2, "email-already-in-use", json);
        } else if (serverErrorCode === "USER_DISABLED") {
          throw _makeTaggedError(auth2, "user-disabled", json);
        }
        const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
        if (serverErrorMessage) {
          throw _errorWithCustomMessage(auth2, authError, serverErrorMessage);
        } else {
          _fail(auth2, authError);
        }
      }
    } catch (e3) {
      if (e3 instanceof FirebaseError) {
        throw e3;
      }
      _fail(auth2, "network-request-failed", { "message": String(e3) });
    }
  }
  async function _performSignInRequest(auth2, method, path, request, customErrorMap = {}) {
    const serverResponse = await _performApiRequest(auth2, method, path, request, customErrorMap);
    if ("mfaPendingCredential" in serverResponse) {
      _fail(auth2, "multi-factor-auth-required", {
        _serverResponse: serverResponse
      });
    }
    return serverResponse;
  }
  async function _getFinalTarget(auth2, host, path, query2) {
    const base = `${host}${path}?${query2}`;
    const authInternal = auth2;
    const finalTarget = authInternal.config.emulator ? _emulatorUrl(auth2.config, base) : `${auth2.config.apiScheme}://${base}`;
    if (CookieAuthProxiedEndpoints.includes(path)) {
      await authInternal._persistenceManagerAvailable;
      if (authInternal._getPersistenceType() === "COOKIE") {
        const cookiePersistence = authInternal._getPersistence();
        return cookiePersistence._getFinalTarget(finalTarget).toString();
      }
    }
    return finalTarget;
  }
  function _parseEnforcementState(enforcementStateStr) {
    switch (enforcementStateStr) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  var NetworkTimeout = class {
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
    constructor(auth2) {
      this.auth = auth2;
      this.timer = null;
      this.promise = new Promise((_2, reject) => {
        this.timer = setTimeout(() => {
          return reject(_createError(
            this.auth,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        }, DEFAULT_API_TIMEOUT_MS.get());
      });
    }
  };
  function _makeTaggedError(auth2, code, response) {
    const errorParams = {
      appName: auth2.name
    };
    if (response.email) {
      errorParams.email = response.email;
    }
    if (response.phoneNumber) {
      errorParams.phoneNumber = response.phoneNumber;
    }
    const error = _createError(auth2, code, errorParams);
    error.customData._tokenResponse = response;
    return error;
  }
  function isEnterprise(grecaptcha) {
    return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
  }
  var RecaptchaConfig = class {
    constructor(response) {
      this.siteKey = "";
      this.recaptchaEnforcementState = [];
      if (response.recaptchaKey === void 0) {
        throw new Error("recaptchaKey undefined");
      }
      this.siteKey = response.recaptchaKey.split("/")[3];
      this.recaptchaEnforcementState = response.recaptchaEnforcementState;
    }
    /**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */
    getProviderEnforcementState(providerStr) {
      if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
        return null;
      }
      for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
        if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
          return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
        }
      }
      return null;
    }
    /**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */
    isProviderEnabled(providerStr) {
      return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
    }
    /**
     * Returns true if reCAPTCHA Enterprise protection is enabled in at least one provider, otherwise
     * returns false.
     *
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for at least one provider.
     */
    isAnyProviderEnabled() {
      return this.isProviderEnabled(
        "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
      ) || this.isProviderEnabled(
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      );
    }
  };
  async function getRecaptchaConfig(auth2, request) {
    return _performApiRequest(auth2, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth2, request));
  }
  async function deleteAccount(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:delete", request);
  }
  async function getAccountInfo(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:lookup", request);
  }
  function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) {
      return void 0;
    }
    try {
      const date = new Date(Number(utcTimestamp));
      if (!isNaN(date.getTime())) {
        return date.toUTCString();
      }
    } catch (e3) {
    }
    return void 0;
  }
  async function getIdTokenResult(user, forceRefresh = false) {
    const userInternal = getModularInstance(user);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(
      claims && claims.exp && claims.auth_time && claims.iat,
      userInternal.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
    const signInProvider = firebase?.["sign_in_provider"];
    return {
      claims,
      token,
      authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
      issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
      expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
      signInProvider: signInProvider || null,
      signInSecondFactor: firebase?.["sign_in_second_factor"] || null
    };
  }
  function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1e3;
  }
  function _parseToken(token) {
    const [algorithm, payload, signature] = token.split(".");
    if (algorithm === void 0 || payload === void 0 || signature === void 0) {
      _logError("JWT malformed, contained fewer than 3 sections");
      return null;
    }
    try {
      const decoded = base64Decode(payload);
      if (!decoded) {
        _logError("Failed to decode base64 JWT payload");
        return null;
      }
      return JSON.parse(decoded);
    } catch (e3) {
      _logError("Caught error parsing JWT payload as JSON", e3?.toString());
      return null;
    }
  }
  function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(
      parsedToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof parsedToken.exp !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof parsedToken.iat !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return Number(parsedToken.exp) - Number(parsedToken.iat);
  }
  async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
    if (bypassAuthState) {
      return promise;
    }
    try {
      return await promise;
    } catch (e3) {
      if (e3 instanceof FirebaseError && isUserInvalidated(e3)) {
        if (user.auth.currentUser === user) {
          await user.auth.signOut();
        }
      }
      throw e3;
    }
  }
  function isUserInvalidated({ code }) {
    return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
  }
  var ProactiveRefresh = class {
    constructor(user) {
      this.user = user;
      this.isRunning = false;
      this.timerId = null;
      this.errorBackoff = 3e4;
    }
    _start() {
      if (this.isRunning) {
        return;
      }
      this.isRunning = true;
      this.schedule();
    }
    _stop() {
      if (!this.isRunning) {
        return;
      }
      this.isRunning = false;
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
      }
    }
    getInterval(wasError) {
      if (wasError) {
        const interval = this.errorBackoff;
        this.errorBackoff = Math.min(
          this.errorBackoff * 2,
          96e4
          /* Duration.RETRY_BACKOFF_MAX */
        );
        return interval;
      } else {
        this.errorBackoff = 3e4;
        const expTime = this.user.stsTokenManager.expirationTime ?? 0;
        const interval = expTime - Date.now() - 3e5;
        return Math.max(0, interval);
      }
    }
    schedule(wasError = false) {
      if (!this.isRunning) {
        return;
      }
      const interval = this.getInterval(wasError);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, interval);
    }
    async iteration() {
      try {
        await this.user.getIdToken(true);
      } catch (e3) {
        if (e3?.code === `auth/${"network-request-failed"}`) {
          this.schedule(
            /* wasError */
            true
          );
        }
        return;
      }
      this.schedule();
    }
  };
  var UserMetadata = class {
    constructor(createdAt, lastLoginAt) {
      this.createdAt = createdAt;
      this.lastLoginAt = lastLoginAt;
      this._initializeTime();
    }
    _initializeTime() {
      this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
      this.creationTime = utcTimestampToDateString(this.createdAt);
    }
    _copy(metadata) {
      this.createdAt = metadata.createdAt;
      this.lastLoginAt = metadata.lastLoginAt;
      this._initializeTime();
    }
    toJSON() {
      return {
        createdAt: this.createdAt,
        lastLoginAt: this.lastLoginAt
      };
    }
  };
  async function _reloadWithoutSaving(user) {
    const auth2 = user.auth;
    const idToken = await user.getIdToken();
    const response = await _logoutIfInvalidated(user, getAccountInfo(auth2, { idToken }));
    _assert(
      response?.users.length,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const coreAccount = response.users[0];
    user._notifyReloadListener(coreAccount);
    const newProviderData = coreAccount.providerUserInfo?.length ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user.providerData, newProviderData);
    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !providerData?.length;
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous
    };
    Object.assign(user, updates);
  }
  async function reload(user) {
    const userInternal = getModularInstance(user);
    await _reloadWithoutSaving(userInternal);
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
  }
  function mergeProviderData(original, newData) {
    const deduped = original.filter((o3) => !newData.some((n2) => n2.providerId === o3.providerId));
    return [...deduped, ...newData];
  }
  function extractProviderData(providers) {
    return providers.map(({ providerId, ...provider2 }) => {
      return {
        providerId,
        uid: provider2.rawId || "",
        displayName: provider2.displayName || null,
        email: provider2.email || null,
        phoneNumber: provider2.phoneNumber || null,
        photoURL: provider2.photoUrl || null
      };
    });
  }
  async function requestStsToken(auth2, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth2, {}, async () => {
      const body = querystring({
        "grant_type": "refresh_token",
        "refresh_token": refreshToken
      }).slice(1);
      const { tokenApiHost, apiKey } = auth2.config;
      const url = await _getFinalTarget(auth2, tokenApiHost, "/v1/token", `key=${apiKey}`);
      const headers = await auth2._getAdditionalHeaders();
      headers[
        "Content-Type"
        /* HttpHeader.CONTENT_TYPE */
      ] = "application/x-www-form-urlencoded";
      const options = {
        method: "POST",
        headers,
        body
      };
      if (auth2.emulatorConfig && isCloudWorkstation(auth2.emulatorConfig.host)) {
        options.credentials = "include";
      }
      return FetchProvider.fetch()(url, options);
    });
    return {
      accessToken: response.access_token,
      expiresIn: response.expires_in,
      refreshToken: response.refresh_token
    };
  }
  async function revokeToken(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth2, request));
  }
  var StsTokenManager = class _StsTokenManager {
    constructor() {
      this.refreshToken = null;
      this.accessToken = null;
      this.expirationTime = null;
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(response) {
      _assert(
        response.idToken,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      _assert(
        typeof response.idToken !== "undefined",
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      _assert(
        typeof response.refreshToken !== "undefined",
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
      this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
    }
    updateFromIdToken(idToken) {
      _assert(
        idToken.length !== 0,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const expiresIn = _tokenExpiresIn(idToken);
      this.updateTokensAndExpiration(idToken, null, expiresIn);
    }
    async getToken(auth2, forceRefresh = false) {
      if (!forceRefresh && this.accessToken && !this.isExpired) {
        return this.accessToken;
      }
      _assert(
        this.refreshToken,
        auth2,
        "user-token-expired"
        /* AuthErrorCode.TOKEN_EXPIRED */
      );
      if (this.refreshToken) {
        await this.refresh(auth2, this.refreshToken);
        return this.accessToken;
      }
      return null;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(auth2, oldToken) {
      const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth2, oldToken);
      this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    }
    updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
      this.refreshToken = refreshToken || null;
      this.accessToken = accessToken || null;
      this.expirationTime = Date.now() + expiresInSec * 1e3;
    }
    static fromJSON(appName, object) {
      const { refreshToken, accessToken, expirationTime } = object;
      const manager = new _StsTokenManager();
      if (refreshToken) {
        _assert(typeof refreshToken === "string", "internal-error", {
          appName
        });
        manager.refreshToken = refreshToken;
      }
      if (accessToken) {
        _assert(typeof accessToken === "string", "internal-error", {
          appName
        });
        manager.accessToken = accessToken;
      }
      if (expirationTime) {
        _assert(typeof expirationTime === "number", "internal-error", {
          appName
        });
        manager.expirationTime = expirationTime;
      }
      return manager;
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime
      };
    }
    _assign(stsTokenManager) {
      this.accessToken = stsTokenManager.accessToken;
      this.refreshToken = stsTokenManager.refreshToken;
      this.expirationTime = stsTokenManager.expirationTime;
    }
    _clone() {
      return Object.assign(new _StsTokenManager(), this.toJSON());
    }
    _performRefresh() {
      return debugFail("not implemented");
    }
  };
  function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
  }
  var UserImpl = class _UserImpl {
    constructor({ uid, auth: auth2, stsTokenManager, ...opt }) {
      this.providerId = "firebase";
      this.proactiveRefresh = new ProactiveRefresh(this);
      this.reloadUserInfo = null;
      this.reloadListener = null;
      this.uid = uid;
      this.auth = auth2;
      this.stsTokenManager = stsTokenManager;
      this.accessToken = stsTokenManager.accessToken;
      this.displayName = opt.displayName || null;
      this.email = opt.email || null;
      this.emailVerified = opt.emailVerified || false;
      this.phoneNumber = opt.phoneNumber || null;
      this.photoURL = opt.photoURL || null;
      this.isAnonymous = opt.isAnonymous || false;
      this.tenantId = opt.tenantId || null;
      this.providerData = opt.providerData ? [...opt.providerData] : [];
      this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
    }
    async getIdToken(forceRefresh) {
      const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
      _assert(
        accessToken,
        this.auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      if (this.accessToken !== accessToken) {
        this.accessToken = accessToken;
        await this.auth._persistUserIfCurrent(this);
        this.auth._notifyListenersIfCurrent(this);
      }
      return accessToken;
    }
    getIdTokenResult(forceRefresh) {
      return getIdTokenResult(this, forceRefresh);
    }
    reload() {
      return reload(this);
    }
    _assign(user) {
      if (this === user) {
        return;
      }
      _assert(
        this.uid === user.uid,
        this.auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
      this.email = user.email;
      this.emailVerified = user.emailVerified;
      this.phoneNumber = user.phoneNumber;
      this.isAnonymous = user.isAnonymous;
      this.tenantId = user.tenantId;
      this.providerData = user.providerData.map((userInfo) => ({ ...userInfo }));
      this.metadata._copy(user.metadata);
      this.stsTokenManager._assign(user.stsTokenManager);
    }
    _clone(auth2) {
      const newUser = new _UserImpl({
        ...this,
        auth: auth2,
        stsTokenManager: this.stsTokenManager._clone()
      });
      newUser.metadata._copy(this.metadata);
      return newUser;
    }
    _onReload(callback) {
      _assert(
        !this.reloadListener,
        this.auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      this.reloadListener = callback;
      if (this.reloadUserInfo) {
        this._notifyReloadListener(this.reloadUserInfo);
        this.reloadUserInfo = null;
      }
    }
    _notifyReloadListener(userInfo) {
      if (this.reloadListener) {
        this.reloadListener(userInfo);
      } else {
        this.reloadUserInfo = userInfo;
      }
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(response, reload2 = false) {
      let tokensRefreshed = false;
      if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
        this.stsTokenManager.updateFromServerResponse(response);
        tokensRefreshed = true;
      }
      if (reload2) {
        await _reloadWithoutSaving(this);
      }
      await this.auth._persistUserIfCurrent(this);
      if (tokensRefreshed) {
        this.auth._notifyListenersIfCurrent(this);
      }
    }
    async delete() {
      if (_isFirebaseServerApp(this.auth.app)) {
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
      }
      const idToken = await this.getIdToken();
      await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
      this.stsTokenManager.clearRefreshToken();
      return this.auth.signOut();
    }
    toJSON() {
      return {
        uid: this.uid,
        email: this.email || void 0,
        emailVerified: this.emailVerified,
        displayName: this.displayName || void 0,
        isAnonymous: this.isAnonymous,
        photoURL: this.photoURL || void 0,
        phoneNumber: this.phoneNumber || void 0,
        tenantId: this.tenantId || void 0,
        providerData: this.providerData.map((userInfo) => ({ ...userInfo })),
        stsTokenManager: this.stsTokenManager.toJSON(),
        // Redirect event ID must be maintained in case there is a pending
        // redirect event.
        _redirectEventId: this._redirectEventId,
        ...this.metadata.toJSON(),
        // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
        apiKey: this.auth.config.apiKey,
        appName: this.auth.name
        // Missing authDomain will be tolerated by the legacy SDK.
        // stsTokenManager.apiKey isn't actually required (despite the legacy SDK persisting it).
      };
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(auth2, object) {
      const displayName = object.displayName ?? void 0;
      const email = object.email ?? void 0;
      const phoneNumber = object.phoneNumber ?? void 0;
      const photoURL = object.photoURL ?? void 0;
      const tenantId = object.tenantId ?? void 0;
      const _redirectEventId = object._redirectEventId ?? void 0;
      const createdAt = object.createdAt ?? void 0;
      const lastLoginAt = object.lastLoginAt ?? void 0;
      const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
      _assert(
        uid && plainObjectTokenManager,
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
      _assert(
        typeof uid === "string",
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      assertStringOrUndefined(displayName, auth2.name);
      assertStringOrUndefined(email, auth2.name);
      _assert(
        typeof emailVerified === "boolean",
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      _assert(
        typeof isAnonymous === "boolean",
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      assertStringOrUndefined(phoneNumber, auth2.name);
      assertStringOrUndefined(photoURL, auth2.name);
      assertStringOrUndefined(tenantId, auth2.name);
      assertStringOrUndefined(_redirectEventId, auth2.name);
      assertStringOrUndefined(createdAt, auth2.name);
      assertStringOrUndefined(lastLoginAt, auth2.name);
      const user = new _UserImpl({
        uid,
        auth: auth2,
        email,
        emailVerified,
        displayName,
        isAnonymous,
        photoURL,
        phoneNumber,
        tenantId,
        stsTokenManager,
        createdAt,
        lastLoginAt
      });
      if (providerData && Array.isArray(providerData)) {
        user.providerData = providerData.map((userInfo) => ({ ...userInfo }));
      }
      if (_redirectEventId) {
        user._redirectEventId = _redirectEventId;
      }
      return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */
    static async _fromIdTokenResponse(auth2, idTokenResponse, isAnonymous = false) {
      const stsTokenManager = new StsTokenManager();
      stsTokenManager.updateFromServerResponse(idTokenResponse);
      const user = new _UserImpl({
        uid: idTokenResponse.localId,
        auth: auth2,
        stsTokenManager,
        isAnonymous
      });
      await _reloadWithoutSaving(user);
      return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */
    static async _fromGetAccountInfoResponse(auth2, response, idToken) {
      const coreAccount = response.users[0];
      _assert(
        coreAccount.localId !== void 0,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
      const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !providerData?.length;
      const stsTokenManager = new StsTokenManager();
      stsTokenManager.updateFromIdToken(idToken);
      const user = new _UserImpl({
        uid: coreAccount.localId,
        auth: auth2,
        stsTokenManager,
        isAnonymous
      });
      const updates = {
        uid: coreAccount.localId,
        displayName: coreAccount.displayName || null,
        photoURL: coreAccount.photoUrl || null,
        email: coreAccount.email || null,
        emailVerified: coreAccount.emailVerified || false,
        phoneNumber: coreAccount.phoneNumber || null,
        tenantId: coreAccount.tenantId || null,
        providerData,
        metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
        isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !providerData?.length
      };
      Object.assign(user, updates);
      return user;
    }
  };
  var instanceCache = /* @__PURE__ */ new Map();
  function _getInstance(cls) {
    debugAssert(cls instanceof Function, "Expected a class definition");
    let instance = instanceCache.get(cls);
    if (instance) {
      debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
      return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
  }
  var InMemoryPersistence = class {
    constructor() {
      this.type = "NONE";
      this.storage = {};
    }
    async _isAvailable() {
      return true;
    }
    async _set(key, value) {
      this.storage[key] = value;
    }
    async _get(key) {
      const value = this.storage[key];
      return value === void 0 ? null : value;
    }
    async _remove(key) {
      delete this.storage[key];
    }
    _addListener(_key, _listener) {
      return;
    }
    _removeListener(_key, _listener) {
      return;
    }
  };
  InMemoryPersistence.type = "NONE";
  var inMemoryPersistence = InMemoryPersistence;
  function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase"}:${key}:${apiKey}:${appName}`;
  }
  var PersistenceUserManager = class _PersistenceUserManager {
    constructor(persistence, auth2, userKey) {
      this.persistence = persistence;
      this.auth = auth2;
      this.userKey = userKey;
      const { config, name: name4 } = this.auth;
      this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
      this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
      this.boundEventHandler = auth2._onStorageEvent.bind(auth2);
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(user) {
      return this.persistence._set(this.fullUserKey, user.toJSON());
    }
    async getCurrentUser() {
      const blob = await this.persistence._get(this.fullUserKey);
      if (!blob) {
        return null;
      }
      if (typeof blob === "string") {
        const response = await getAccountInfo(this.auth, { idToken: blob }).catch(() => void 0);
        if (!response) {
          return null;
        }
        return UserImpl._fromGetAccountInfoResponse(this.auth, response, blob);
      }
      return UserImpl._fromJSON(this.auth, blob);
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
    }
    async setPersistence(newPersistence) {
      if (this.persistence === newPersistence) {
        return;
      }
      const currentUser = await this.getCurrentUser();
      await this.removeCurrentUser();
      this.persistence = newPersistence;
      if (currentUser) {
        return this.setCurrentUser(currentUser);
      }
    }
    delete() {
      this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
    }
    static async create(auth2, persistenceHierarchy, userKey = "authUser") {
      if (!persistenceHierarchy.length) {
        return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth2, userKey);
      }
      const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
        if (await persistence._isAvailable()) {
          return persistence;
        }
        return void 0;
      }))).filter((persistence) => persistence);
      let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
      const key = _persistenceKeyName(userKey, auth2.config.apiKey, auth2.name);
      let userToMigrate = null;
      for (const persistence of persistenceHierarchy) {
        try {
          const blob = await persistence._get(key);
          if (blob) {
            let user;
            if (typeof blob === "string") {
              const response = await getAccountInfo(auth2, {
                idToken: blob
              }).catch(() => void 0);
              if (!response) {
                break;
              }
              user = await UserImpl._fromGetAccountInfoResponse(auth2, response, blob);
            } else {
              user = UserImpl._fromJSON(auth2, blob);
            }
            if (persistence !== selectedPersistence) {
              userToMigrate = user;
            }
            selectedPersistence = persistence;
            break;
          }
        } catch {
        }
      }
      const migrationHierarchy = availablePersistences.filter((p3) => p3._shouldAllowMigration);
      if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
        return new _PersistenceUserManager(selectedPersistence, auth2, userKey);
      }
      selectedPersistence = migrationHierarchy[0];
      if (userToMigrate) {
        await selectedPersistence._set(key, userToMigrate.toJSON());
      }
      await Promise.all(persistenceHierarchy.map(async (persistence) => {
        if (persistence !== selectedPersistence) {
          try {
            await persistence._remove(key);
          } catch {
          }
        }
      }));
      return new _PersistenceUserManager(selectedPersistence, auth2, userKey);
    }
  };
  function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
      return "Opera";
    } else if (_isIEMobile(ua)) {
      return "IEMobile";
    } else if (ua.includes("msie") || ua.includes("trident/")) {
      return "IE";
    } else if (ua.includes("edge/")) {
      return "Edge";
    } else if (_isFirefox(ua)) {
      return "Firefox";
    } else if (ua.includes("silk/")) {
      return "Silk";
    } else if (_isBlackBerry(ua)) {
      return "Blackberry";
    } else if (_isWebOS(ua)) {
      return "Webos";
    } else if (_isSafari(ua)) {
      return "Safari";
    } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
      return "Chrome";
    } else if (_isAndroid(ua)) {
      return "Android";
    } else {
      const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
      const matches = userAgent.match(re);
      if (matches?.length === 2) {
        return matches[1];
      }
    }
    return "Other";
  }
  function _isFirefox(ua = getUA()) {
    return /firefox\//i.test(ua);
  }
  function _isSafari(userAgent = getUA()) {
    const ua = userAgent.toLowerCase();
    return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
  }
  function _isChromeIOS(ua = getUA()) {
    return /crios\//i.test(ua);
  }
  function _isIEMobile(ua = getUA()) {
    return /iemobile/i.test(ua);
  }
  function _isAndroid(ua = getUA()) {
    return /android/i.test(ua);
  }
  function _isBlackBerry(ua = getUA()) {
    return /blackberry/i.test(ua);
  }
  function _isWebOS(ua = getUA()) {
    return /webos/i.test(ua);
  }
  function _isIOS(ua = getUA()) {
    return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
  }
  function _isIE10() {
    return isIE() && document.documentMode === 10;
  }
  function _isMobileBrowser(ua = getUA()) {
    return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
  }
  function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch (clientPlatform) {
      case "Browser":
        reportedPlatform = _getBrowserName(getUA());
        break;
      case "Worker":
        reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
        break;
      default:
        reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
    return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
  }
  var AuthMiddlewareQueue = class {
    constructor(auth2) {
      this.auth = auth2;
      this.queue = [];
    }
    pushCallback(callback, onAbort) {
      const wrappedCallback = (user) => new Promise((resolve, reject) => {
        try {
          const result = callback(user);
          resolve(result);
        } catch (e3) {
          reject(e3);
        }
      });
      wrappedCallback.onAbort = onAbort;
      this.queue.push(wrappedCallback);
      const index = this.queue.length - 1;
      return () => {
        this.queue[index] = () => Promise.resolve();
      };
    }
    async runMiddleware(nextUser) {
      if (this.auth.currentUser === nextUser) {
        return;
      }
      const onAbortStack = [];
      try {
        for (const beforeStateCallback of this.queue) {
          await beforeStateCallback(nextUser);
          if (beforeStateCallback.onAbort) {
            onAbortStack.push(beforeStateCallback.onAbort);
          }
        }
      } catch (e3) {
        onAbortStack.reverse();
        for (const onAbort of onAbortStack) {
          try {
            onAbort();
          } catch (_2) {
          }
        }
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: e3?.message
        });
      }
    }
  };
  async function _getPasswordPolicy(auth2, request = {}) {
    return _performApiRequest(auth2, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth2, request));
  }
  var MINIMUM_MIN_PASSWORD_LENGTH = 6;
  var PasswordPolicyImpl = class {
    constructor(response) {
      const responseOptions = response.customStrengthOptions;
      this.customStrengthOptions = {};
      this.customStrengthOptions.minPasswordLength = responseOptions.minPasswordLength ?? MINIMUM_MIN_PASSWORD_LENGTH;
      if (responseOptions.maxPasswordLength) {
        this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
      }
      if (responseOptions.containsLowercaseCharacter !== void 0) {
        this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
      }
      if (responseOptions.containsUppercaseCharacter !== void 0) {
        this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
      }
      if (responseOptions.containsNumericCharacter !== void 0) {
        this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
      }
      if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
        this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
      }
      this.enforcementState = response.enforcementState;
      if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
        this.enforcementState = "OFF";
      }
      this.allowedNonAlphanumericCharacters = response.allowedNonAlphanumericCharacters?.join("") ?? "";
      this.forceUpgradeOnSignin = response.forceUpgradeOnSignin ?? false;
      this.schemaVersion = response.schemaVersion;
    }
    validatePassword(password) {
      const status = {
        isValid: true,
        passwordPolicy: this
      };
      this.validatePasswordLengthOptions(password, status);
      this.validatePasswordCharacterOptions(password, status);
      status.isValid && (status.isValid = status.meetsMinPasswordLength ?? true);
      status.isValid && (status.isValid = status.meetsMaxPasswordLength ?? true);
      status.isValid && (status.isValid = status.containsLowercaseLetter ?? true);
      status.isValid && (status.isValid = status.containsUppercaseLetter ?? true);
      status.isValid && (status.isValid = status.containsNumericCharacter ?? true);
      status.isValid && (status.isValid = status.containsNonAlphanumericCharacter ?? true);
      return status;
    }
    /**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */
    validatePasswordLengthOptions(password, status) {
      const minPasswordLength = this.customStrengthOptions.minPasswordLength;
      const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
      if (minPasswordLength) {
        status.meetsMinPasswordLength = password.length >= minPasswordLength;
      }
      if (maxPasswordLength) {
        status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
      }
    }
    /**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */
    validatePasswordCharacterOptions(password, status) {
      this.updatePasswordCharacterOptionsStatuses(
        status,
        /* containsLowercaseCharacter= */
        false,
        /* containsUppercaseCharacter= */
        false,
        /* containsNumericCharacter= */
        false,
        /* containsNonAlphanumericCharacter= */
        false
      );
      let passwordChar;
      for (let i3 = 0; i3 < password.length; i3++) {
        passwordChar = password.charAt(i3);
        this.updatePasswordCharacterOptionsStatuses(
          status,
          /* containsLowercaseCharacter= */
          passwordChar >= "a" && passwordChar <= "z",
          /* containsUppercaseCharacter= */
          passwordChar >= "A" && passwordChar <= "Z",
          /* containsNumericCharacter= */
          passwordChar >= "0" && passwordChar <= "9",
          /* containsNonAlphanumericCharacter= */
          this.allowedNonAlphanumericCharacters.includes(passwordChar)
        );
      }
    }
    /**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */
    updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
      if (this.customStrengthOptions.containsLowercaseLetter) {
        status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
      }
      if (this.customStrengthOptions.containsUppercaseLetter) {
        status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
      }
      if (this.customStrengthOptions.containsNumericCharacter) {
        status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
      }
      if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
        status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
      }
    }
  };
  var AuthImpl = class {
    constructor(app2, heartbeatServiceProvider, appCheckServiceProvider, config) {
      this.app = app2;
      this.heartbeatServiceProvider = heartbeatServiceProvider;
      this.appCheckServiceProvider = appCheckServiceProvider;
      this.config = config;
      this.currentUser = null;
      this.emulatorConfig = null;
      this.operations = Promise.resolve();
      this.authStateSubscription = new Subscription(this);
      this.idTokenSubscription = new Subscription(this);
      this.beforeStateQueue = new AuthMiddlewareQueue(this);
      this.redirectUser = null;
      this.isProactiveRefreshEnabled = false;
      this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
      this._canInitEmulator = true;
      this._isInitialized = false;
      this._deleted = false;
      this._initializationPromise = null;
      this._popupRedirectResolver = null;
      this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
      this._agentRecaptchaConfig = null;
      this._tenantRecaptchaConfigs = {};
      this._projectPasswordPolicy = null;
      this._tenantPasswordPolicies = {};
      this._resolvePersistenceManagerAvailable = void 0;
      this.lastNotifiedUid = void 0;
      this.languageCode = null;
      this.tenantId = null;
      this.settings = { appVerificationDisabledForTesting: false };
      this.frameworks = [];
      this.name = app2.name;
      this.clientVersion = config.sdkClientVersion;
      this._persistenceManagerAvailable = new Promise((resolve) => this._resolvePersistenceManagerAvailable = resolve);
    }
    _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
      if (popupRedirectResolver) {
        this._popupRedirectResolver = _getInstance(popupRedirectResolver);
      }
      this._initializationPromise = this.queue(async () => {
        if (this._deleted) {
          return;
        }
        this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
        this._resolvePersistenceManagerAvailable?.();
        if (this._deleted) {
          return;
        }
        if (this._popupRedirectResolver?._shouldInitProactively) {
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch (e3) {
          }
        }
        await this.initializeCurrentUser(popupRedirectResolver);
        this.lastNotifiedUid = this.currentUser?.uid || null;
        if (this._deleted) {
          return;
        }
        this._isInitialized = true;
      });
      return this._initializationPromise;
    }
    /**
     * If the persistence is changed in another window, the user manager will let us know
     */
    async _onStorageEvent() {
      if (this._deleted) {
        return;
      }
      const user = await this.assertedPersistence.getCurrentUser();
      if (!this.currentUser && !user) {
        return;
      }
      if (this.currentUser && user && this.currentUser.uid === user.uid) {
        this._currentUser._assign(user);
        await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        user,
        /* skipBeforeStateCallbacks */
        true
      );
    }
    async initializeCurrentUserFromIdToken(idToken) {
      try {
        const response = await getAccountInfo(this, { idToken });
        const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
        await this.directlySetCurrentUser(user);
      } catch (err) {
        console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
        await this.directlySetCurrentUser(null);
      }
    }
    async initializeCurrentUser(popupRedirectResolver) {
      if (_isFirebaseServerApp(this.app)) {
        const idToken = this.app.settings.authIdToken;
        if (idToken) {
          return new Promise((resolve) => {
            setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
          });
        } else {
          return this.directlySetCurrentUser(null);
        }
      }
      const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
      let futureCurrentUser = previouslyStoredUser;
      let needsTocheckMiddleware = false;
      if (popupRedirectResolver && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const redirectUserEventId = this.redirectUser?._redirectEventId;
        const storedUserEventId = futureCurrentUser?._redirectEventId;
        const result = await this.tryRedirectSignIn(popupRedirectResolver);
        if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && result?.user) {
          futureCurrentUser = result.user;
          needsTocheckMiddleware = true;
        }
      }
      if (!futureCurrentUser) {
        return this.directlySetCurrentUser(null);
      }
      if (!futureCurrentUser._redirectEventId) {
        if (needsTocheckMiddleware) {
          try {
            await this.beforeStateQueue.runMiddleware(futureCurrentUser);
          } catch (e3) {
            futureCurrentUser = previouslyStoredUser;
            this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e3));
          }
        }
        if (futureCurrentUser) {
          return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        } else {
          return this.directlySetCurrentUser(null);
        }
      }
      _assert(
        this._popupRedirectResolver,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      await this.getOrInitRedirectPersistenceManager();
      if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
        return this.directlySetCurrentUser(futureCurrentUser);
      }
      return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
    }
    async tryRedirectSignIn(redirectResolver) {
      let result = null;
      try {
        result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
      } catch (e3) {
        await this._setRedirectUser(null);
      }
      return result;
    }
    async reloadAndSetCurrentUserOrClear(user) {
      try {
        await _reloadWithoutSaving(user);
      } catch (e3) {
        if (e3?.code !== `auth/${"network-request-failed"}`) {
          return this.directlySetCurrentUser(null);
        }
      }
      return this.directlySetCurrentUser(user);
    }
    useDeviceLanguage() {
      this.languageCode = _getUserLanguage();
    }
    async _delete() {
      this._deleted = true;
    }
    async updateCurrentUser(userExtern) {
      if (_isFirebaseServerApp(this.app)) {
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
      }
      const user = userExtern ? getModularInstance(userExtern) : null;
      if (user) {
        _assert(
          user.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
          /* AuthErrorCode.INVALID_AUTH */
        );
      }
      return this._updateCurrentUser(user && user._clone(this));
    }
    async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
      if (this._deleted) {
        return;
      }
      if (user) {
        _assert(
          this.tenantId === user.tenantId,
          this,
          "tenant-id-mismatch"
          /* AuthErrorCode.TENANT_ID_MISMATCH */
        );
      }
      if (!skipBeforeStateCallbacks) {
        await this.beforeStateQueue.runMiddleware(user);
      }
      return this.queue(async () => {
        await this.directlySetCurrentUser(user);
        this.notifyAuthListeners();
      });
    }
    async signOut() {
      if (_isFirebaseServerApp(this.app)) {
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
      }
      await this.beforeStateQueue.runMiddleware(null);
      if (this.redirectPersistenceManager || this._popupRedirectResolver) {
        await this._setRedirectUser(null);
      }
      return this._updateCurrentUser(
        null,
        /* skipBeforeStateCallbacks */
        true
      );
    }
    setPersistence(persistence) {
      if (_isFirebaseServerApp(this.app)) {
        return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
      }
      return this.queue(async () => {
        await this.assertedPersistence.setPersistence(_getInstance(persistence));
      });
    }
    _getRecaptchaConfig() {
      if (this.tenantId == null) {
        return this._agentRecaptchaConfig;
      } else {
        return this._tenantRecaptchaConfigs[this.tenantId];
      }
    }
    async validatePassword(password) {
      if (!this._getPasswordPolicyInternal()) {
        await this._updatePasswordPolicy();
      }
      const passwordPolicy = this._getPasswordPolicyInternal();
      if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
        return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
      }
      return passwordPolicy.validatePassword(password);
    }
    _getPasswordPolicyInternal() {
      if (this.tenantId === null) {
        return this._projectPasswordPolicy;
      } else {
        return this._tenantPasswordPolicies[this.tenantId];
      }
    }
    async _updatePasswordPolicy() {
      const response = await _getPasswordPolicy(this);
      const passwordPolicy = new PasswordPolicyImpl(response);
      if (this.tenantId === null) {
        this._projectPasswordPolicy = passwordPolicy;
      } else {
        this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
      }
    }
    _getPersistenceType() {
      return this.assertedPersistence.persistence.type;
    }
    _getPersistence() {
      return this.assertedPersistence.persistence;
    }
    _updateErrorMap(errorMap) {
      this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
    }
    onAuthStateChanged(nextOrObserver, error, completed) {
      return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
    }
    beforeAuthStateChanged(callback, onAbort) {
      return this.beforeStateQueue.pushCallback(callback, onAbort);
    }
    onIdTokenChanged(nextOrObserver, error, completed) {
      return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
    }
    authStateReady() {
      return new Promise((resolve, reject) => {
        if (this.currentUser) {
          resolve();
        } else {
          const unsubscribe = this.onAuthStateChanged(() => {
            unsubscribe();
            resolve();
          }, reject);
        }
      });
    }
    /**
     * Revokes the given access token. Currently only supports Apple OAuth access tokens.
     */
    async revokeAccessToken(token) {
      if (this.currentUser) {
        const idToken = await this.currentUser.getIdToken();
        const request = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token,
          idToken
        };
        if (this.tenantId != null) {
          request.tenantId = this.tenantId;
        }
        await revokeToken(this, request);
      }
    }
    toJSON() {
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: this._currentUser?.toJSON()
      };
    }
    async _setRedirectUser(user, popupRedirectResolver) {
      const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
      return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
    }
    async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
      if (!this.redirectPersistenceManager) {
        const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
        _assert(
          resolver,
          this,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        this.redirectPersistenceManager = await PersistenceUserManager.create(
          this,
          [_getInstance(resolver._redirectPersistence)],
          "redirectUser"
          /* KeyName.REDIRECT_USER */
        );
        this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(id) {
      if (this._isInitialized) {
        await this.queue(async () => {
        });
      }
      if (this._currentUser?._redirectEventId === id) {
        return this._currentUser;
      }
      if (this.redirectUser?._redirectEventId === id) {
        return this.redirectUser;
      }
      return null;
    }
    async _persistUserIfCurrent(user) {
      if (user === this.currentUser) {
        return this.queue(async () => this.directlySetCurrentUser(user));
      }
    }
    /** Notifies listeners only if the user is current */
    _notifyListenersIfCurrent(user) {
      if (user === this.currentUser) {
        this.notifyAuthListeners();
      }
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      this.isProactiveRefreshEnabled = true;
      if (this.currentUser) {
        this._currentUser._startProactiveRefresh();
      }
    }
    _stopProactiveRefresh() {
      this.isProactiveRefreshEnabled = false;
      if (this.currentUser) {
        this._currentUser._stopProactiveRefresh();
      }
    }
    /** Returns the current user cast as the internal type */
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      if (!this._isInitialized) {
        return;
      }
      this.idTokenSubscription.next(this.currentUser);
      const currentUid = this.currentUser?.uid ?? null;
      if (this.lastNotifiedUid !== currentUid) {
        this.lastNotifiedUid = currentUid;
        this.authStateSubscription.next(this.currentUser);
      }
    }
    registerStateListener(subscription, nextOrObserver, error, completed) {
      if (this._deleted) {
        return () => {
        };
      }
      const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
      let isUnsubscribed = false;
      const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
      _assert(
        promise,
        this,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      promise.then(() => {
        if (isUnsubscribed) {
          return;
        }
        cb(this.currentUser);
      });
      if (typeof nextOrObserver === "function") {
        const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
        return () => {
          isUnsubscribed = true;
          unsubscribe();
        };
      } else {
        const unsubscribe = subscription.addObserver(nextOrObserver);
        return () => {
          isUnsubscribed = true;
          unsubscribe();
        };
      }
    }
    /**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */
    async directlySetCurrentUser(user) {
      if (this.currentUser && this.currentUser !== user) {
        this._currentUser._stopProactiveRefresh();
      }
      if (user && this.isProactiveRefreshEnabled) {
        user._startProactiveRefresh();
      }
      this.currentUser = user;
      if (user) {
        await this.assertedPersistence.setCurrentUser(user);
      } else {
        await this.assertedPersistence.removeCurrentUser();
      }
    }
    queue(action) {
      this.operations = this.operations.then(action, action);
      return this.operations;
    }
    get assertedPersistence() {
      _assert(
        this.persistenceManager,
        this,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      return this.persistenceManager;
    }
    _logFramework(framework) {
      if (!framework || this.frameworks.includes(framework)) {
        return;
      }
      this.frameworks.push(framework);
      this.frameworks.sort();
      this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      const headers = {
        [
          "X-Client-Version"
          /* HttpHeader.X_CLIENT_VERSION */
        ]: this.clientVersion
      };
      if (this.app.options.appId) {
        headers[
          "X-Firebase-gmpid"
          /* HttpHeader.X_FIREBASE_GMPID */
        ] = this.app.options.appId;
      }
      const heartbeatsHeader = await this.heartbeatServiceProvider.getImmediate({
        optional: true
      })?.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers[
          "X-Firebase-Client"
          /* HttpHeader.X_FIREBASE_CLIENT */
        ] = heartbeatsHeader;
      }
      const appCheckToken = await this._getAppCheckToken();
      if (appCheckToken) {
        headers[
          "X-Firebase-AppCheck"
          /* HttpHeader.X_FIREBASE_APP_CHECK */
        ] = appCheckToken;
      }
      return headers;
    }
    async _getAppCheckToken() {
      if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken) {
        return this.app.settings.appCheckToken;
      }
      const appCheckTokenResult = await this.appCheckServiceProvider.getImmediate({ optional: true })?.getToken();
      if (appCheckTokenResult?.error) {
        _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
      }
      return appCheckTokenResult?.token;
    }
  };
  function _castAuth(auth2) {
    return getModularInstance(auth2);
  }
  var Subscription = class {
    constructor(auth2) {
      this.auth = auth2;
      this.observer = null;
      this.addObserver = createSubscribe((observer) => this.observer = observer);
    }
    get next() {
      _assert(
        this.observer,
        this.auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      return this.observer.next.bind(this.observer);
    }
  };
  var externalJSProvider = {
    async loadJS() {
      throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
  };
  function _setExternalJSProvider(p3) {
    externalJSProvider = p3;
  }
  function _loadJS(url) {
    return externalJSProvider.loadJS(url);
  }
  function _recaptchaEnterpriseScriptUrl() {
    return externalJSProvider.recaptchaEnterpriseScript;
  }
  function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
  }
  var MockGreCAPTCHATopLevel = class {
    constructor() {
      this.enterprise = new MockGreCAPTCHA();
    }
    ready(callback) {
      callback();
    }
    execute(_siteKey, _options) {
      return Promise.resolve("token");
    }
    render(_container, _parameters) {
      return "";
    }
  };
  var MockGreCAPTCHA = class {
    ready(callback) {
      callback();
    }
    execute(_siteKey, _options) {
      return Promise.resolve("token");
    }
    render(_container, _parameters) {
      return "";
    }
  };
  var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
  var FAKE_TOKEN = "NO_RECAPTCHA";
  var RecaptchaEnterpriseVerifier = class {
    /**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */
    constructor(authExtern) {
      this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
      this.auth = _castAuth(authExtern);
    }
    /**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */
    async verify(action = "verify", forceRefresh = false) {
      async function retrieveSiteKey(auth2) {
        if (!forceRefresh) {
          if (auth2.tenantId == null && auth2._agentRecaptchaConfig != null) {
            return auth2._agentRecaptchaConfig.siteKey;
          }
          if (auth2.tenantId != null && auth2._tenantRecaptchaConfigs[auth2.tenantId] !== void 0) {
            return auth2._tenantRecaptchaConfigs[auth2.tenantId].siteKey;
          }
        }
        return new Promise(async (resolve, reject) => {
          getRecaptchaConfig(auth2, {
            clientType: "CLIENT_TYPE_WEB",
            version: "RECAPTCHA_ENTERPRISE"
            /* RecaptchaVersion.ENTERPRISE */
          }).then((response) => {
            if (response.recaptchaKey === void 0) {
              reject(new Error("recaptcha Enterprise site key undefined"));
            } else {
              const config = new RecaptchaConfig(response);
              if (auth2.tenantId == null) {
                auth2._agentRecaptchaConfig = config;
              } else {
                auth2._tenantRecaptchaConfigs[auth2.tenantId] = config;
              }
              return resolve(config.siteKey);
            }
          }).catch((error) => {
            reject(error);
          });
        });
      }
      function retrieveRecaptchaToken(siteKey, resolve, reject) {
        const grecaptcha = window.grecaptcha;
        if (isEnterprise(grecaptcha)) {
          grecaptcha.enterprise.ready(() => {
            grecaptcha.enterprise.execute(siteKey, { action }).then((token) => {
              resolve(token);
            }).catch(() => {
              resolve(FAKE_TOKEN);
            });
          });
        } else {
          reject(Error("No reCAPTCHA enterprise script loaded."));
        }
      }
      if (this.auth.settings.appVerificationDisabledForTesting) {
        const mockRecaptcha = new MockGreCAPTCHATopLevel();
        return mockRecaptcha.execute("siteKey", { action: "verify" });
      }
      return new Promise((resolve, reject) => {
        retrieveSiteKey(this.auth).then((siteKey) => {
          if (!forceRefresh && isEnterprise(window.grecaptcha)) {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          } else {
            if (typeof window === "undefined") {
              reject(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let url = _recaptchaEnterpriseScriptUrl();
            if (url.length !== 0) {
              url += siteKey;
            }
            _loadJS(url).then(() => {
              retrieveRecaptchaToken(siteKey, resolve, reject);
            }).catch((error) => {
              reject(error);
            });
          }
        }).catch((error) => {
          reject(error);
        });
      });
    }
  };
  async function injectRecaptchaFields(auth2, request, action, isCaptchaResp = false, isFakeToken = false) {
    const verifier = new RecaptchaEnterpriseVerifier(auth2);
    let captchaResponse;
    if (isFakeToken) {
      captchaResponse = FAKE_TOKEN;
    } else {
      try {
        captchaResponse = await verifier.verify(action);
      } catch (error) {
        captchaResponse = await verifier.verify(action, true);
      }
    }
    const newRequest = { ...request };
    if (action === "mfaSmsEnrollment" || action === "mfaSmsSignIn") {
      if ("phoneEnrollmentInfo" in newRequest) {
        const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
        const recaptchaToken = newRequest.phoneEnrollmentInfo.recaptchaToken;
        Object.assign(newRequest, {
          "phoneEnrollmentInfo": {
            phoneNumber,
            recaptchaToken,
            captchaResponse,
            "clientType": "CLIENT_TYPE_WEB",
            "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
            /* RecaptchaVersion.ENTERPRISE */
          }
        });
      } else if ("phoneSignInInfo" in newRequest) {
        const recaptchaToken = newRequest.phoneSignInInfo.recaptchaToken;
        Object.assign(newRequest, {
          "phoneSignInInfo": {
            recaptchaToken,
            captchaResponse,
            "clientType": "CLIENT_TYPE_WEB",
            "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
            /* RecaptchaVersion.ENTERPRISE */
          }
        });
      }
      return newRequest;
    }
    if (!isCaptchaResp) {
      Object.assign(newRequest, { captchaResponse });
    } else {
      Object.assign(newRequest, { "captchaResp": captchaResponse });
    }
    Object.assign(newRequest, {
      "clientType": "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    });
    Object.assign(newRequest, {
      "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    });
    return newRequest;
  }
  async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
    if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
      if (authInstance._getRecaptchaConfig()?.isProviderEnabled(
        "EMAIL_PASSWORD_PROVIDER"
        /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
      )) {
        const requestWithRecaptcha = await injectRecaptchaFields(
          authInstance,
          request,
          actionName,
          actionName === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return actionMethod(authInstance, requestWithRecaptcha);
      } else {
        return actionMethod(authInstance, request).catch(async (error) => {
          if (error.code === `auth/${"missing-recaptcha-token"}`) {
            console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
            const requestWithRecaptcha = await injectRecaptchaFields(
              authInstance,
              request,
              actionName,
              actionName === "getOobCode"
              /* RecaptchaActionName.GET_OOB_CODE */
            );
            return actionMethod(authInstance, requestWithRecaptcha);
          } else {
            return Promise.reject(error);
          }
        });
      }
    } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
      if (authInstance._getRecaptchaConfig()?.isProviderEnabled(
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      )) {
        const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
        return actionMethod(authInstance, requestWithRecaptcha).catch(async (error) => {
          if (authInstance._getRecaptchaConfig()?.getProviderEnforcementState(
            "PHONE_PROVIDER"
            /* RecaptchaAuthProvider.PHONE_PROVIDER */
          ) === "AUDIT") {
            if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
              console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
              const requestWithRecaptchaFields = await injectRecaptchaFields(
                authInstance,
                request,
                actionName,
                false,
                // isCaptchaResp
                true
                // isFakeToken
              );
              return actionMethod(authInstance, requestWithRecaptchaFields);
            }
          }
          return Promise.reject(error);
        });
      } else {
        const requestWithRecaptchaFields = await injectRecaptchaFields(
          authInstance,
          request,
          actionName,
          false,
          // isCaptchaResp
          true
          // isFakeToken
        );
        return actionMethod(authInstance, requestWithRecaptchaFields);
      }
    } else {
      return Promise.reject(recaptchaAuthProvider + " provider is not supported.");
    }
  }
  async function _initializeRecaptchaConfig(auth2) {
    const authInternal = _castAuth(auth2);
    const response = await getRecaptchaConfig(authInternal, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    });
    const config = new RecaptchaConfig(response);
    if (authInternal.tenantId == null) {
      authInternal._agentRecaptchaConfig = config;
    } else {
      authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
    }
    if (config.isAnyProviderEnabled()) {
      const verifier = new RecaptchaEnterpriseVerifier(authInternal);
      void verifier.verify();
    }
  }
  function initializeAuth(app2, deps) {
    const provider2 = _getProvider(app2, "auth");
    if (provider2.isInitialized()) {
      const auth3 = provider2.getImmediate();
      const initialOptions = provider2.getOptions();
      if (deepEqual(initialOptions, deps ?? {})) {
        return auth3;
      } else {
        _fail(
          auth3,
          "already-initialized"
          /* AuthErrorCode.ALREADY_INITIALIZED */
        );
      }
    }
    const auth2 = provider2.initialize({ options: deps });
    return auth2;
  }
  function _initializeAuthInstance(auth2, deps) {
    const persistence = deps?.persistence || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
    if (deps?.errorMap) {
      auth2._updateErrorMap(deps.errorMap);
    }
    auth2._initializeWithPersistence(hierarchy, deps?.popupRedirectResolver);
  }
  var AuthCredential = class {
    /** @internal */
    constructor(providerId, signInMethod) {
      this.providerId = providerId;
      this.signInMethod = signInMethod;
    }
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */
    toJSON() {
      return debugFail("not implemented");
    }
    /** @internal */
    _getIdTokenResponse(_auth) {
      return debugFail("not implemented");
    }
    /** @internal */
    _linkToIdToken(_auth, _idToken) {
      return debugFail("not implemented");
    }
    /** @internal */
    _getReauthenticationResolver(_auth) {
      return debugFail("not implemented");
    }
  };
  async function linkEmailPassword(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:signUp", request);
  }
  async function signInWithPassword(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth2, request));
  }
  async function signInWithEmailLink$1(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
  }
  async function signInWithEmailLinkForLinking(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
  }
  var EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
    /** @internal */
    constructor(_email, _password, signInMethod, _tenantId = null) {
      super("password", signInMethod);
      this._email = _email;
      this._password = _password;
      this._tenantId = _tenantId;
    }
    /** @internal */
    static _fromEmailAndPassword(email, password) {
      return new _EmailAuthCredential(
        email,
        password,
        "password"
        /* SignInMethod.EMAIL_PASSWORD */
      );
    }
    /** @internal */
    static _fromEmailAndCode(email, oobCode, tenantId = null) {
      return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
    }
    /** {@inheritdoc AuthCredential.toJSON} */
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId
      };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */
    static fromJSON(json) {
      const obj = typeof json === "string" ? JSON.parse(json) : json;
      if (obj?.email && obj?.password) {
        if (obj.signInMethod === "password") {
          return this._fromEmailAndPassword(obj.email, obj.password);
        } else if (obj.signInMethod === "emailLink") {
          return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
        }
      }
      return null;
    }
    /** @internal */
    async _getIdTokenResponse(auth2) {
      switch (this.signInMethod) {
        case "password":
          const request = {
            returnSecureToken: true,
            email: this._email,
            password: this._password,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          };
          return handleRecaptchaFlow(
            auth2,
            request,
            "signInWithPassword",
            signInWithPassword,
            "EMAIL_PASSWORD_PROVIDER"
            /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
          );
        case "emailLink":
          return signInWithEmailLink$1(auth2, {
            email: this._email,
            oobCode: this._password
          });
        default:
          _fail(
            auth2,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
      }
    }
    /** @internal */
    async _linkToIdToken(auth2, idToken) {
      switch (this.signInMethod) {
        case "password":
          const request = {
            idToken,
            returnSecureToken: true,
            email: this._email,
            password: this._password,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          };
          return handleRecaptchaFlow(
            auth2,
            request,
            "signUpPassword",
            linkEmailPassword,
            "EMAIL_PASSWORD_PROVIDER"
            /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
          );
        case "emailLink":
          return signInWithEmailLinkForLinking(auth2, {
            idToken,
            email: this._email,
            oobCode: this._password
          });
        default:
          _fail(
            auth2,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
      }
    }
    /** @internal */
    _getReauthenticationResolver(auth2) {
      return this._getIdTokenResponse(auth2);
    }
  };
  async function signInWithIdp(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth2, request));
  }
  var IDP_REQUEST_URI$1 = "http://localhost";
  var OAuthCredential = class _OAuthCredential extends AuthCredential {
    constructor() {
      super(...arguments);
      this.pendingToken = null;
    }
    /** @internal */
    static _fromParams(params) {
      const cred = new _OAuthCredential(params.providerId, params.signInMethod);
      if (params.idToken || params.accessToken) {
        if (params.idToken) {
          cred.idToken = params.idToken;
        }
        if (params.accessToken) {
          cred.accessToken = params.accessToken;
        }
        if (params.nonce && !params.pendingToken) {
          cred.nonce = params.nonce;
        }
        if (params.pendingToken) {
          cred.pendingToken = params.pendingToken;
        }
      } else if (params.oauthToken && params.oauthTokenSecret) {
        cred.accessToken = params.oauthToken;
        cred.secret = params.oauthTokenSecret;
      } else {
        _fail(
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
      }
      return cred;
    }
    /** {@inheritdoc AuthCredential.toJSON}  */
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod
      };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */
    static fromJSON(json) {
      const obj = typeof json === "string" ? JSON.parse(json) : json;
      const { providerId, signInMethod, ...rest } = obj;
      if (!providerId || !signInMethod) {
        return null;
      }
      const cred = new _OAuthCredential(providerId, signInMethod);
      cred.idToken = rest.idToken || void 0;
      cred.accessToken = rest.accessToken || void 0;
      cred.secret = rest.secret;
      cred.nonce = rest.nonce;
      cred.pendingToken = rest.pendingToken || null;
      return cred;
    }
    /** @internal */
    _getIdTokenResponse(auth2) {
      const request = this.buildRequest();
      return signInWithIdp(auth2, request);
    }
    /** @internal */
    _linkToIdToken(auth2, idToken) {
      const request = this.buildRequest();
      request.idToken = idToken;
      return signInWithIdp(auth2, request);
    }
    /** @internal */
    _getReauthenticationResolver(auth2) {
      const request = this.buildRequest();
      request.autoCreate = false;
      return signInWithIdp(auth2, request);
    }
    buildRequest() {
      const request = {
        requestUri: IDP_REQUEST_URI$1,
        returnSecureToken: true
      };
      if (this.pendingToken) {
        request.pendingToken = this.pendingToken;
      } else {
        const postBody = {};
        if (this.idToken) {
          postBody["id_token"] = this.idToken;
        }
        if (this.accessToken) {
          postBody["access_token"] = this.accessToken;
        }
        if (this.secret) {
          postBody["oauth_token_secret"] = this.secret;
        }
        postBody["providerId"] = this.providerId;
        if (this.nonce && !this.pendingToken) {
          postBody["nonce"] = this.nonce;
        }
        request.postBody = querystring(postBody);
      }
      return request;
    }
  };
  async function sendPhoneVerificationCode(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth2, request));
  }
  async function signInWithPhoneNumber$1(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
  }
  async function linkWithPhoneNumber$1(auth2, request) {
    const response = await _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
    if (response.temporaryProof) {
      throw _makeTaggedError(auth2, "account-exists-with-different-credential", response);
    }
    return response;
  }
  var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
    [
      "USER_NOT_FOUND"
      /* ServerError.USER_NOT_FOUND */
    ]: "user-not-found"
    /* AuthErrorCode.USER_DELETED */
  };
  async function verifyPhoneNumberForExisting(auth2, request) {
    const apiRequest = {
      ...request,
      operation: "REAUTH"
    };
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
  }
  var PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
    constructor(params) {
      super(
        "phone",
        "phone"
        /* SignInMethod.PHONE */
      );
      this.params = params;
    }
    /** @internal */
    static _fromVerification(verificationId, verificationCode) {
      return new _PhoneAuthCredential({ verificationId, verificationCode });
    }
    /** @internal */
    static _fromTokenResponse(phoneNumber, temporaryProof) {
      return new _PhoneAuthCredential({ phoneNumber, temporaryProof });
    }
    /** @internal */
    _getIdTokenResponse(auth2) {
      return signInWithPhoneNumber$1(auth2, this._makeVerificationRequest());
    }
    /** @internal */
    _linkToIdToken(auth2, idToken) {
      return linkWithPhoneNumber$1(auth2, {
        idToken,
        ...this._makeVerificationRequest()
      });
    }
    /** @internal */
    _getReauthenticationResolver(auth2) {
      return verifyPhoneNumberForExisting(auth2, this._makeVerificationRequest());
    }
    /** @internal */
    _makeVerificationRequest() {
      const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
      if (temporaryProof && phoneNumber) {
        return { temporaryProof, phoneNumber };
      }
      return {
        sessionInfo: verificationId,
        code: verificationCode
      };
    }
    /** {@inheritdoc AuthCredential.toJSON} */
    toJSON() {
      const obj = {
        providerId: this.providerId
      };
      if (this.params.phoneNumber) {
        obj.phoneNumber = this.params.phoneNumber;
      }
      if (this.params.temporaryProof) {
        obj.temporaryProof = this.params.temporaryProof;
      }
      if (this.params.verificationCode) {
        obj.verificationCode = this.params.verificationCode;
      }
      if (this.params.verificationId) {
        obj.verificationId = this.params.verificationId;
      }
      return obj;
    }
    /** Generates a phone credential based on a plain object or a JSON string. */
    static fromJSON(json) {
      if (typeof json === "string") {
        json = JSON.parse(json);
      }
      const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
      if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
        return null;
      }
      return new _PhoneAuthCredential({
        verificationId,
        verificationCode,
        phoneNumber,
        temporaryProof
      });
    }
  };
  function parseMode(mode) {
    switch (mode) {
      case "recoverEmail":
        return "RECOVER_EMAIL";
      case "resetPassword":
        return "PASSWORD_RESET";
      case "signIn":
        return "EMAIL_SIGNIN";
      case "verifyEmail":
        return "VERIFY_EMAIL";
      case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
      case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
      default:
        return null;
    }
  }
  function parseDeepLink(url) {
    const link = querystringDecode(extractQuerystring(url))["link"];
    const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
    const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
    const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
    return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
  }
  var ActionCodeURL = class _ActionCodeURL {
    /**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */
    constructor(actionLink) {
      const searchParams = querystringDecode(extractQuerystring(actionLink));
      const apiKey = searchParams[
        "apiKey"
        /* QueryField.API_KEY */
      ] ?? null;
      const code = searchParams[
        "oobCode"
        /* QueryField.CODE */
      ] ?? null;
      const operation = parseMode(searchParams[
        "mode"
        /* QueryField.MODE */
      ] ?? null);
      _assert(
        apiKey && code && operation,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      this.apiKey = apiKey;
      this.operation = operation;
      this.code = code;
      this.continueUrl = searchParams[
        "continueUrl"
        /* QueryField.CONTINUE_URL */
      ] ?? null;
      this.languageCode = searchParams[
        "lang"
        /* QueryField.LANGUAGE_CODE */
      ] ?? null;
      this.tenantId = searchParams[
        "tenantId"
        /* QueryField.TENANT_ID */
      ] ?? null;
    }
    /**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */
    static parseLink(link) {
      const actionLink = parseDeepLink(link);
      try {
        return new _ActionCodeURL(actionLink);
      } catch {
        return null;
      }
    }
  };
  var EmailAuthProvider = class _EmailAuthProvider {
    constructor() {
      this.providerId = _EmailAuthProvider.PROVIDER_ID;
    }
    /**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */
    static credential(email, password) {
      return EmailAuthCredential._fromEmailAndPassword(email, password);
    }
    /**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */
    static credentialWithLink(email, emailLink) {
      const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
      _assert(
        actionCodeUrl,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
    }
  };
  EmailAuthProvider.PROVIDER_ID = "password";
  EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
  EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
  var FederatedAuthProvider = class {
    /**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */
    constructor(providerId) {
      this.providerId = providerId;
      this.defaultLanguageCode = null;
      this.customParameters = {};
    }
    /**
     * Set the language gode.
     *
     * @param languageCode - language code
     */
    setDefaultLanguage(languageCode) {
      this.defaultLanguageCode = languageCode;
    }
    /**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */
    setCustomParameters(customOAuthParameters) {
      this.customParameters = customOAuthParameters;
      return this;
    }
    /**
     * Retrieve the current list of {@link CustomParameters}.
     */
    getCustomParameters() {
      return this.customParameters;
    }
  };
  var BaseOAuthProvider = class extends FederatedAuthProvider {
    constructor() {
      super(...arguments);
      this.scopes = [];
    }
    /**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */
    addScope(scope) {
      if (!this.scopes.includes(scope)) {
        this.scopes.push(scope);
      }
      return this;
    }
    /**
     * Retrieve the current list of OAuth scopes.
     */
    getScopes() {
      return [...this.scopes];
    }
  };
  var FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
    constructor() {
      super(
        "facebook.com"
        /* ProviderId.FACEBOOK */
      );
    }
    /**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */
    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: _FacebookAuthProvider.PROVIDER_ID,
        signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
      return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
      return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
        return null;
      }
      if (!tokenResponse.oauthAccessToken) {
        return null;
      }
      try {
        return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
  FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
  FacebookAuthProvider.PROVIDER_ID = "facebook.com";
  var GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
    constructor() {
      super(
        "google.com"
        /* ProviderId.GOOGLE */
      );
      this.addScope("profile");
    }
    /**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */
    static credential(idToken, accessToken) {
      return OAuthCredential._fromParams({
        providerId: _GoogleAuthProvider.PROVIDER_ID,
        signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
        idToken,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
      return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
      return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { oauthIdToken, oauthAccessToken } = tokenResponse;
      if (!oauthIdToken && !oauthAccessToken) {
        return null;
      }
      try {
        return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
  GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
  GoogleAuthProvider.PROVIDER_ID = "google.com";
  var GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
    constructor() {
      super(
        "github.com"
        /* ProviderId.GITHUB */
      );
    }
    /**
     * Creates a credential for GitHub.
     *
     * @param accessToken - GitHub access token.
     */
    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: _GithubAuthProvider.PROVIDER_ID,
        signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
      return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
      return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
        return null;
      }
      if (!tokenResponse.oauthAccessToken) {
        return null;
      }
      try {
        return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
  GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
  GithubAuthProvider.PROVIDER_ID = "github.com";
  var TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
    constructor() {
      super(
        "twitter.com"
        /* ProviderId.TWITTER */
      );
    }
    /**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */
    static credential(token, secret) {
      return OAuthCredential._fromParams({
        providerId: _TwitterAuthProvider.PROVIDER_ID,
        signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
        oauthToken: token,
        oauthTokenSecret: secret
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
      return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
      return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
      if (!oauthAccessToken || !oauthTokenSecret) {
        return null;
      }
      try {
        return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
      } catch {
        return null;
      }
    }
  };
  TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
  TwitterAuthProvider.PROVIDER_ID = "twitter.com";
  var UserCredentialImpl = class _UserCredentialImpl {
    constructor(params) {
      this.user = params.user;
      this.providerId = params.providerId;
      this._tokenResponse = params._tokenResponse;
      this.operationType = params.operationType;
    }
    static async _fromIdTokenResponse(auth2, operationType, idTokenResponse, isAnonymous = false) {
      const user = await UserImpl._fromIdTokenResponse(auth2, idTokenResponse, isAnonymous);
      const providerId = providerIdForResponse(idTokenResponse);
      const userCred = new _UserCredentialImpl({
        user,
        providerId,
        _tokenResponse: idTokenResponse,
        operationType
      });
      return userCred;
    }
    static async _forOperation(user, operationType, response) {
      await user._updateTokensIfNecessary(
        response,
        /* reload */
        true
      );
      const providerId = providerIdForResponse(response);
      return new _UserCredentialImpl({
        user,
        providerId,
        _tokenResponse: response,
        operationType
      });
    }
  };
  function providerIdForResponse(response) {
    if (response.providerId) {
      return response.providerId;
    }
    if ("phoneNumber" in response) {
      return "phone";
    }
    return null;
  }
  var MultiFactorError = class _MultiFactorError extends FirebaseError {
    constructor(auth2, error, operationType, user) {
      super(error.code, error.message);
      this.operationType = operationType;
      this.user = user;
      Object.setPrototypeOf(this, _MultiFactorError.prototype);
      this.customData = {
        appName: auth2.name,
        tenantId: auth2.tenantId ?? void 0,
        _serverResponse: error.customData._serverResponse,
        operationType
      };
    }
    static _fromErrorAndOperation(auth2, error, operationType, user) {
      return new _MultiFactorError(auth2, error, operationType, user);
    }
  };
  function _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth2) : credential._getIdTokenResponse(auth2);
    return idTokenProvider.catch((error) => {
      if (error.code === `auth/${"multi-factor-auth-required"}`) {
        throw MultiFactorError._fromErrorAndOperation(auth2, error, operationType, user);
      }
      throw error;
    });
  }
  async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link", response);
  }
  async function _reauthenticate(user, credential, bypassAuthState = false) {
    const { auth: auth2 } = user;
    if (_isFirebaseServerApp(auth2.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth2));
    }
    const operationType = "reauthenticate";
    try {
      const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user), bypassAuthState);
      _assert(
        response.idToken,
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const parsed = _parseToken(response.idToken);
      _assert(
        parsed,
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const { sub: localId } = parsed;
      _assert(
        user.uid === localId,
        auth2,
        "user-mismatch"
        /* AuthErrorCode.USER_MISMATCH */
      );
      return UserCredentialImpl._forOperation(user, operationType, response);
    } catch (e3) {
      if (e3?.code === `auth/${"user-not-found"}`) {
        _fail(
          auth2,
          "user-mismatch"
          /* AuthErrorCode.USER_MISMATCH */
        );
      }
      throw e3;
    }
  }
  async function _signInWithCredential(auth2, credential, bypassAuthState = false) {
    if (_isFirebaseServerApp(auth2.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth2));
    }
    const operationType = "signIn";
    const response = await _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth2, operationType, response);
    if (!bypassAuthState) {
      await auth2._updateCurrentUser(userCredential.user);
    }
    return userCredential;
  }
  function onAuthStateChanged(auth2, nextOrObserver, error, completed) {
    return getModularInstance(auth2).onAuthStateChanged(nextOrObserver, error, completed);
  }
  function signOut(auth2) {
    return getModularInstance(auth2).signOut();
  }
  function startEnrollPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth2, request));
  }
  function finalizeEnrollPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth2, request));
  }
  function startEnrollTotpMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth2, request));
  }
  function finalizeEnrollTotpMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth2, request));
  }
  var STORAGE_AVAILABLE_KEY = "__sak";
  var BrowserPersistenceClass = class {
    constructor(storageRetriever, type) {
      this.storageRetriever = storageRetriever;
      this.type = type;
    }
    _isAvailable() {
      try {
        if (!this.storage) {
          return Promise.resolve(false);
        }
        this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
        this.storage.removeItem(STORAGE_AVAILABLE_KEY);
        return Promise.resolve(true);
      } catch {
        return Promise.resolve(false);
      }
    }
    _set(key, value) {
      this.storage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    }
    _get(key) {
      const json = this.storage.getItem(key);
      return Promise.resolve(json ? JSON.parse(json) : null);
    }
    _remove(key) {
      this.storage.removeItem(key);
      return Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  };
  var _POLLING_INTERVAL_MS$1 = 1e3;
  var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
  var BrowserLocalPersistence = class extends BrowserPersistenceClass {
    constructor() {
      super(
        () => window.localStorage,
        "LOCAL"
        /* PersistenceType.LOCAL */
      );
      this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
      this.listeners = {};
      this.localCache = {};
      this.pollTimer = null;
      this.fallbackToPolling = _isMobileBrowser();
      this._shouldAllowMigration = true;
    }
    forAllChangedKeys(cb) {
      for (const key of Object.keys(this.listeners)) {
        const newValue = this.storage.getItem(key);
        const oldValue = this.localCache[key];
        if (newValue !== oldValue) {
          cb(key, oldValue, newValue);
        }
      }
    }
    onStorageEvent(event, poll = false) {
      if (!event.key) {
        this.forAllChangedKeys((key2, _oldValue, newValue) => {
          this.notifyListeners(key2, newValue);
        });
        return;
      }
      const key = event.key;
      if (poll) {
        this.detachListener();
      } else {
        this.stopPolling();
      }
      const triggerListeners = () => {
        const storedValue2 = this.storage.getItem(key);
        if (!poll && this.localCache[key] === storedValue2) {
          return;
        }
        this.notifyListeners(key, storedValue2);
      };
      const storedValue = this.storage.getItem(key);
      if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
        setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
      } else {
        triggerListeners();
      }
    }
    notifyListeners(key, value) {
      this.localCache[key] = value;
      const listeners = this.listeners[key];
      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(value ? JSON.parse(value) : value);
        }
      }
    }
    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((key, oldValue, newValue) => {
          this.onStorageEvent(
            new StorageEvent("storage", {
              key,
              oldValue,
              newValue
            }),
            /* poll */
            true
          );
        });
      }, _POLLING_INTERVAL_MS$1);
    }
    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        if (this.fallbackToPolling) {
          this.startPolling();
        } else {
          this.attachListener();
        }
      }
      if (!this.listeners[key]) {
        this.listeners[key] = /* @__PURE__ */ new Set();
        this.localCache[key] = this.storage.getItem(key);
      }
      this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);
        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }
      if (Object.keys(this.listeners).length === 0) {
        this.detachListener();
        this.stopPolling();
      }
    }
    // Update local cache on base operations:
    async _set(key, value) {
      await super._set(key, value);
      this.localCache[key] = JSON.stringify(value);
    }
    async _get(key) {
      const value = await super._get(key);
      this.localCache[key] = JSON.stringify(value);
      return value;
    }
    async _remove(key) {
      await super._remove(key);
      delete this.localCache[key];
    }
  };
  BrowserLocalPersistence.type = "LOCAL";
  var browserLocalPersistence = BrowserLocalPersistence;
  var POLLING_INTERVAL_MS = 1e3;
  function getDocumentCookie(name4) {
    const escapedName = name4.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
    const matcher = RegExp(`${escapedName}=([^;]+)`);
    return document.cookie.match(matcher)?.[1] ?? null;
  }
  function getCookieName(key) {
    const isDevMode = window.location.protocol === "http:";
    return `${isDevMode ? "__dev_" : "__HOST-"}FIREBASE_${key.split(":")[3]}`;
  }
  var CookiePersistence = class {
    constructor() {
      this.type = "COOKIE";
      this.listenerUnsubscribes = /* @__PURE__ */ new Map();
    }
    // used to get the URL to the backend to proxy to
    _getFinalTarget(originalUrl) {
      if (typeof window === void 0) {
        return originalUrl;
      }
      const url = new URL(`${window.location.origin}/__cookies__`);
      url.searchParams.set("finalTarget", originalUrl);
      return url;
    }
    // To be a usable persistence method in a chain browserCookiePersistence ensures that
    // prerequisites have been met, namely that we're in a secureContext, navigator and document are
    // available and cookies are enabled. Not all UAs support these method, so fallback accordingly.
    async _isAvailable() {
      if (typeof isSecureContext === "boolean" && !isSecureContext) {
        return false;
      }
      if (typeof navigator === "undefined" || typeof document === "undefined") {
        return false;
      }
      return navigator.cookieEnabled ?? true;
    }
    // Set should be a noop as we expect middleware to handle this
    async _set(_key, _value) {
      return;
    }
    // Attempt to get the cookie from cookieStore, fallback to document.cookie
    async _get(key) {
      if (!this._isAvailable()) {
        return null;
      }
      const name4 = getCookieName(key);
      if (window.cookieStore) {
        const cookie = await window.cookieStore.get(name4);
        return cookie?.value;
      }
      return getDocumentCookie(name4);
    }
    // Log out by overriding the idToken with a sentinel value of ""
    async _remove(key) {
      if (!this._isAvailable()) {
        return;
      }
      const existingValue = await this._get(key);
      if (!existingValue) {
        return;
      }
      const name4 = getCookieName(key);
      document.cookie = `${name4}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`;
      await fetch(`/__cookies__`, { method: "DELETE" }).catch(() => void 0);
    }
    // Listen for cookie changes, both cookieStore and fallback to polling document.cookie
    _addListener(key, listener) {
      if (!this._isAvailable()) {
        return;
      }
      const name4 = getCookieName(key);
      if (window.cookieStore) {
        const cb = ((event) => {
          const changedCookie = event.changed.find((change) => change.name === name4);
          if (changedCookie) {
            listener(changedCookie.value);
          }
          const deletedCookie = event.deleted.find((change) => change.name === name4);
          if (deletedCookie) {
            listener(null);
          }
        });
        const unsubscribe2 = () => window.cookieStore.removeEventListener("change", cb);
        this.listenerUnsubscribes.set(listener, unsubscribe2);
        return window.cookieStore.addEventListener("change", cb);
      }
      let lastValue = getDocumentCookie(name4);
      const interval = setInterval(() => {
        const currentValue = getDocumentCookie(name4);
        if (currentValue !== lastValue) {
          listener(currentValue);
          lastValue = currentValue;
        }
      }, POLLING_INTERVAL_MS);
      const unsubscribe = () => clearInterval(interval);
      this.listenerUnsubscribes.set(listener, unsubscribe);
    }
    _removeListener(_key, listener) {
      const unsubscribe = this.listenerUnsubscribes.get(listener);
      if (!unsubscribe) {
        return;
      }
      unsubscribe();
      this.listenerUnsubscribes.delete(listener);
    }
  };
  CookiePersistence.type = "COOKIE";
  var BrowserSessionPersistence = class extends BrowserPersistenceClass {
    constructor() {
      super(
        () => window.sessionStorage,
        "SESSION"
        /* PersistenceType.SESSION */
      );
    }
    _addListener(_key, _listener) {
      return;
    }
    _removeListener(_key, _listener) {
      return;
    }
  };
  BrowserSessionPersistence.type = "SESSION";
  function _allSettled(promises) {
    return Promise.all(promises.map(async (promise) => {
      try {
        const value = await promise;
        return {
          fulfilled: true,
          value
        };
      } catch (reason) {
        return {
          fulfilled: false,
          reason
        };
      }
    }));
  }
  var Receiver = class _Receiver {
    constructor(eventTarget) {
      this.eventTarget = eventTarget;
      this.handlersMap = {};
      this.boundEventHandler = this.handleEvent.bind(this);
    }
    /**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */
    static _getInstance(eventTarget) {
      const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
      if (existingInstance) {
        return existingInstance;
      }
      const newInstance = new _Receiver(eventTarget);
      this.receivers.push(newInstance);
      return newInstance;
    }
    isListeningto(eventTarget) {
      return this.eventTarget === eventTarget;
    }
    /**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */
    async handleEvent(event) {
      const messageEvent = event;
      const { eventId, eventType, data } = messageEvent.data;
      const handlers = this.handlersMap[eventType];
      if (!handlers?.size) {
        return;
      }
      messageEvent.ports[0].postMessage({
        status: "ack",
        eventId,
        eventType
      });
      const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
      const response = await _allSettled(promises);
      messageEvent.ports[0].postMessage({
        status: "done",
        eventId,
        eventType,
        response
      });
    }
    /**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */
    _subscribe(eventType, eventHandler) {
      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.addEventListener("message", this.boundEventHandler);
      }
      if (!this.handlersMap[eventType]) {
        this.handlersMap[eventType] = /* @__PURE__ */ new Set();
      }
      this.handlersMap[eventType].add(eventHandler);
    }
    /**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
     *
     */
    _unsubscribe(eventType, eventHandler) {
      if (this.handlersMap[eventType] && eventHandler) {
        this.handlersMap[eventType].delete(eventHandler);
      }
      if (!eventHandler || this.handlersMap[eventType].size === 0) {
        delete this.handlersMap[eventType];
      }
      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
      }
    }
  };
  Receiver.receivers = [];
  function _generateEventId(prefix = "", digits = 10) {
    let random = "";
    for (let i3 = 0; i3 < digits; i3++) {
      random += Math.floor(Math.random() * 10);
    }
    return prefix + random;
  }
  var Sender = class {
    constructor(target) {
      this.target = target;
      this.handlers = /* @__PURE__ */ new Set();
    }
    /**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */
    removeMessageHandler(handler) {
      if (handler.messageChannel) {
        handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
        handler.messageChannel.port1.close();
      }
      this.handlers.delete(handler);
    }
    /**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */
    async _send(eventType, data, timeout = 50) {
      const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
      if (!messageChannel) {
        throw new Error(
          "connection_unavailable"
          /* _MessageError.CONNECTION_UNAVAILABLE */
        );
      }
      let completionTimer;
      let handler;
      return new Promise((resolve, reject) => {
        const eventId = _generateEventId("", 20);
        messageChannel.port1.start();
        const ackTimer = setTimeout(() => {
          reject(new Error(
            "unsupported_event"
            /* _MessageError.UNSUPPORTED_EVENT */
          ));
        }, timeout);
        handler = {
          messageChannel,
          onMessage(event) {
            const messageEvent = event;
            if (messageEvent.data.eventId !== eventId) {
              return;
            }
            switch (messageEvent.data.status) {
              case "ack":
                clearTimeout(ackTimer);
                completionTimer = setTimeout(
                  () => {
                    reject(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(completionTimer);
                resolve(messageEvent.data.response);
                break;
              default:
                clearTimeout(ackTimer);
                clearTimeout(completionTimer);
                reject(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
          }
        };
        this.handlers.add(handler);
        messageChannel.port1.addEventListener("message", handler.onMessage);
        this.target.postMessage({
          eventType,
          eventId,
          data
        }, [messageChannel.port2]);
      }).finally(() => {
        if (handler) {
          this.removeMessageHandler(handler);
        }
      });
    }
  };
  function _window() {
    return window;
  }
  function _isWorker() {
    return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
  }
  async function _getActiveServiceWorker() {
    if (!navigator?.serviceWorker) {
      return null;
    }
    try {
      const registration = await navigator.serviceWorker.ready;
      return registration.active;
    } catch {
      return null;
    }
  }
  function _getServiceWorkerController() {
    return navigator?.serviceWorker?.controller || null;
  }
  function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
  }
  var DB_NAME2 = "firebaseLocalStorageDb";
  var DB_VERSION2 = 1;
  var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
  var DB_DATA_KEYPATH = "fbase_key";
  var DBPromise = class {
    constructor(request) {
      this.request = request;
    }
    toPromise() {
      return new Promise((resolve, reject) => {
        this.request.addEventListener("success", () => {
          resolve(this.request.result);
        });
        this.request.addEventListener("error", () => {
          reject(this.request.error);
        });
      });
    }
  };
  function getObjectStore(db2, isReadWrite) {
    return db2.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
  }
  function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME2);
    return new DBPromise(request).toPromise();
  }
  function _openDatabase() {
    const request = indexedDB.open(DB_NAME2, DB_VERSION2);
    return new Promise((resolve, reject) => {
      request.addEventListener("error", () => {
        reject(request.error);
      });
      request.addEventListener("upgradeneeded", () => {
        const db2 = request.result;
        try {
          db2.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
        } catch (e3) {
          reject(e3);
        }
      });
      request.addEventListener("success", async () => {
        const db2 = request.result;
        if (!db2.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
          db2.close();
          await _deleteDatabase();
          resolve(await _openDatabase());
        } else {
          resolve(db2);
        }
      });
    });
  }
  async function _putObject(db2, key, value) {
    const request = getObjectStore(db2, true).put({
      [DB_DATA_KEYPATH]: key,
      value
    });
    return new DBPromise(request).toPromise();
  }
  async function getObject(db2, key) {
    const request = getObjectStore(db2, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === void 0 ? null : data.value;
  }
  function _deleteObject(db2, key) {
    const request = getObjectStore(db2, true).delete(key);
    return new DBPromise(request).toPromise();
  }
  var _POLLING_INTERVAL_MS = 800;
  var _TRANSACTION_RETRY_COUNT = 3;
  var IndexedDBLocalPersistence = class {
    constructor() {
      this.type = "LOCAL";
      this._shouldAllowMigration = true;
      this.listeners = {};
      this.localCache = {};
      this.pollTimer = null;
      this.pendingWrites = 0;
      this.receiver = null;
      this.sender = null;
      this.serviceWorkerReceiverAvailable = false;
      this.activeServiceWorker = null;
      this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
      }, () => {
      });
    }
    async _openDb() {
      if (this.db) {
        return this.db;
      }
      this.db = await _openDatabase();
      return this.db;
    }
    async _withRetries(op) {
      let numAttempts = 0;
      while (true) {
        try {
          const db2 = await this._openDb();
          return await op(db2);
        } catch (e3) {
          if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
            throw e3;
          }
          if (this.db) {
            this.db.close();
            this.db = void 0;
          }
        }
      }
    }
    /**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */
    async initializeServiceWorkerMessaging() {
      return _isWorker() ? this.initializeReceiver() : this.initializeSender();
    }
    /**
     * As the worker we should listen to events from the main window.
     */
    async initializeReceiver() {
      this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
      this.receiver._subscribe("keyChanged", async (_origin, data) => {
        const keys = await this._poll();
        return {
          keyProcessed: keys.includes(data.key)
        };
      });
      this.receiver._subscribe("ping", async (_origin, _data) => {
        return [
          "keyChanged"
          /* _EventType.KEY_CHANGED */
        ];
      });
    }
    /**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */
    async initializeSender() {
      this.activeServiceWorker = await _getActiveServiceWorker();
      if (!this.activeServiceWorker) {
        return;
      }
      this.sender = new Sender(this.activeServiceWorker);
      const results = await this.sender._send(
        "ping",
        {},
        800
        /* _TimeoutDuration.LONG_ACK */
      );
      if (!results) {
        return;
      }
      if (results[0]?.fulfilled && results[0]?.value.includes(
        "keyChanged"
        /* _EventType.KEY_CHANGED */
      )) {
        this.serviceWorkerReceiverAvailable = true;
      }
    }
    /**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */
    async notifyServiceWorker(key) {
      if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
        return;
      }
      try {
        await this.sender._send(
          "keyChanged",
          { key },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
    }
    async _isAvailable() {
      try {
        if (!indexedDB) {
          return false;
        }
        const db2 = await _openDatabase();
        await _putObject(db2, STORAGE_AVAILABLE_KEY, "1");
        await _deleteObject(db2, STORAGE_AVAILABLE_KEY);
        return true;
      } catch {
      }
      return false;
    }
    async _withPendingWrite(write) {
      this.pendingWrites++;
      try {
        await write();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(key, value) {
      return this._withPendingWrite(async () => {
        await this._withRetries((db2) => _putObject(db2, key, value));
        this.localCache[key] = value;
        return this.notifyServiceWorker(key);
      });
    }
    async _get(key) {
      const obj = await this._withRetries((db2) => getObject(db2, key));
      this.localCache[key] = obj;
      return obj;
    }
    async _remove(key) {
      return this._withPendingWrite(async () => {
        await this._withRetries((db2) => _deleteObject(db2, key));
        delete this.localCache[key];
        return this.notifyServiceWorker(key);
      });
    }
    async _poll() {
      const result = await this._withRetries((db2) => {
        const getAllRequest = getObjectStore(db2, false).getAll();
        return new DBPromise(getAllRequest).toPromise();
      });
      if (!result) {
        return [];
      }
      if (this.pendingWrites !== 0) {
        return [];
      }
      const keys = [];
      const keysInResult = /* @__PURE__ */ new Set();
      if (result.length !== 0) {
        for (const { fbase_key: key, value } of result) {
          keysInResult.add(key);
          if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
            this.notifyListeners(key, value);
            keys.push(key);
          }
        }
      }
      for (const localKey of Object.keys(this.localCache)) {
        if (this.localCache[localKey] && !keysInResult.has(localKey)) {
          this.notifyListeners(localKey, null);
          keys.push(localKey);
        }
      }
      return keys;
    }
    notifyListeners(key, newValue) {
      this.localCache[key] = newValue;
      const listeners = this.listeners[key];
      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(newValue);
        }
      }
    }
    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
    }
    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }
    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        this.startPolling();
      }
      if (!this.listeners[key]) {
        this.listeners[key] = /* @__PURE__ */ new Set();
        void this._get(key);
      }
      this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);
        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }
      if (Object.keys(this.listeners).length === 0) {
        this.stopPolling();
      }
    }
  };
  IndexedDBLocalPersistence.type = "LOCAL";
  function startSignInPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth2, request));
  }
  function finalizeSignInPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth2, request));
  }
  function finalizeSignInTotpMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth2, request));
  }
  var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
  var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
  var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
  async function _verifyPhoneNumber(auth2, options, verifier) {
    if (!auth2._getRecaptchaConfig()) {
      try {
        await _initializeRecaptchaConfig(auth2);
      } catch (error) {
        console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
      }
    }
    try {
      let phoneInfoOptions;
      if (typeof options === "string") {
        phoneInfoOptions = {
          phoneNumber: options
        };
      } else {
        phoneInfoOptions = options;
      }
      if ("session" in phoneInfoOptions) {
        const session = phoneInfoOptions.session;
        if ("phoneNumber" in phoneInfoOptions) {
          _assert(
            session.type === "enroll",
            auth2,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const startPhoneMfaEnrollmentRequest = {
            idToken: session.credential,
            phoneEnrollmentInfo: {
              phoneNumber: phoneInfoOptions.phoneNumber,
              clientType: "CLIENT_TYPE_WEB"
              /* RecaptchaClientType.WEB */
            }
          };
          const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
            if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
              _assert(
                verifier?.type === RECAPTCHA_VERIFIER_TYPE,
                authInstance,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
              return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
            }
            return startEnrollPhoneMfa(authInstance, request);
          };
          const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(
            auth2,
            startPhoneMfaEnrollmentRequest,
            "mfaSmsEnrollment",
            startEnrollPhoneMfaActionCallback,
            "PHONE_PROVIDER"
            /* RecaptchaAuthProvider.PHONE_PROVIDER */
          );
          const response = await startPhoneMfaEnrollmentResponse.catch((error) => {
            return Promise.reject(error);
          });
          return response.phoneSessionInfo.sessionInfo;
        } else {
          _assert(
            session.type === "signin",
            auth2,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const mfaEnrollmentId = phoneInfoOptions.multiFactorHint?.uid || phoneInfoOptions.multiFactorUid;
          _assert(
            mfaEnrollmentId,
            auth2,
            "missing-multi-factor-info"
            /* AuthErrorCode.MISSING_MFA_INFO */
          );
          const startPhoneMfaSignInRequest = {
            mfaPendingCredential: session.credential,
            mfaEnrollmentId,
            phoneSignInInfo: {
              clientType: "CLIENT_TYPE_WEB"
              /* RecaptchaClientType.WEB */
            }
          };
          const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
            if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
              _assert(
                verifier?.type === RECAPTCHA_VERIFIER_TYPE,
                authInstance,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
              return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
            }
            return startSignInPhoneMfa(authInstance, request);
          };
          const startPhoneMfaSignInResponse = handleRecaptchaFlow(
            auth2,
            startPhoneMfaSignInRequest,
            "mfaSmsSignIn",
            startSignInPhoneMfaActionCallback,
            "PHONE_PROVIDER"
            /* RecaptchaAuthProvider.PHONE_PROVIDER */
          );
          const response = await startPhoneMfaSignInResponse.catch((error) => {
            return Promise.reject(error);
          });
          return response.phoneResponseInfo.sessionInfo;
        }
      } else {
        const sendPhoneVerificationCodeRequest = {
          phoneNumber: phoneInfoOptions.phoneNumber,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
          if (request.captchaResponse === FAKE_TOKEN) {
            _assert(
              verifier?.type === RECAPTCHA_VERIFIER_TYPE,
              authInstance,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
          }
          return sendPhoneVerificationCode(authInstance, request);
        };
        const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(
          auth2,
          sendPhoneVerificationCodeRequest,
          "sendVerificationCode",
          sendPhoneVerificationCodeActionCallback,
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        );
        const response = await sendPhoneVerificationCodeResponse.catch((error) => {
          return Promise.reject(error);
        });
        return response.sessionInfo;
      }
    } finally {
      verifier?._reset();
    }
  }
  async function injectRecaptchaV2Token(auth2, request, recaptchaV2Verifier) {
    _assert(
      recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE,
      auth2,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    const recaptchaV2Token = await recaptchaV2Verifier.verify();
    _assert(
      typeof recaptchaV2Token === "string",
      auth2,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    const newRequest = { ...request };
    if ("phoneEnrollmentInfo" in newRequest) {
      const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
      const captchaResponse = newRequest.phoneEnrollmentInfo.captchaResponse;
      const clientType = newRequest.phoneEnrollmentInfo.clientType;
      const recaptchaVersion = newRequest.phoneEnrollmentInfo.recaptchaVersion;
      Object.assign(newRequest, {
        "phoneEnrollmentInfo": {
          phoneNumber,
          recaptchaToken: recaptchaV2Token,
          captchaResponse,
          clientType,
          recaptchaVersion
        }
      });
      return newRequest;
    } else if ("phoneSignInInfo" in newRequest) {
      const captchaResponse = newRequest.phoneSignInInfo.captchaResponse;
      const clientType = newRequest.phoneSignInInfo.clientType;
      const recaptchaVersion = newRequest.phoneSignInInfo.recaptchaVersion;
      Object.assign(newRequest, {
        "phoneSignInInfo": {
          recaptchaToken: recaptchaV2Token,
          captchaResponse,
          clientType,
          recaptchaVersion
        }
      });
      return newRequest;
    } else {
      Object.assign(newRequest, { "recaptchaToken": recaptchaV2Token });
      return newRequest;
    }
  }
  var PhoneAuthProvider = class _PhoneAuthProvider {
    /**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */
    constructor(auth2) {
      this.providerId = _PhoneAuthProvider.PROVIDER_ID;
      this.auth = _castAuth(auth2);
    }
    /**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - An {@link ApplicationVerifier}, which prevents
     * requests from unauthorized clients. This SDK includes an implementation
     * based on reCAPTCHA v2, {@link RecaptchaVerifier}. If you've enabled
     * reCAPTCHA Enterprise bot protection in Enforce mode, this parameter is
     * optional; in all other configurations, the parameter is required.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow.
     */
    verifyPhoneNumber(phoneOptions, applicationVerifier) {
      return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
    }
    /**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */
    static credential(verificationId, verificationCode) {
      return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
      const credential = userCredential;
      return _PhoneAuthProvider.credentialFromTaggedObject(credential);
    }
    /**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */
    static credentialFromError(error) {
      return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { phoneNumber, temporaryProof } = tokenResponse;
      if (phoneNumber && temporaryProof) {
        return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
      }
      return null;
    }
  };
  PhoneAuthProvider.PROVIDER_ID = "phone";
  PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
  var IdpCredential = class extends AuthCredential {
    constructor(params) {
      super(
        "custom",
        "custom"
        /* ProviderId.CUSTOM */
      );
      this.params = params;
    }
    _getIdTokenResponse(auth2) {
      return signInWithIdp(auth2, this._buildIdpRequest());
    }
    _linkToIdToken(auth2, idToken) {
      return signInWithIdp(auth2, this._buildIdpRequest(idToken));
    }
    _getReauthenticationResolver(auth2) {
      return signInWithIdp(auth2, this._buildIdpRequest());
    }
    _buildIdpRequest(idToken) {
      const request = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: true,
        returnIdpCredential: true
      };
      if (idToken) {
        request.idToken = idToken;
      }
      return request;
    }
  };
  function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
  }
  function _reauth(params) {
    const { auth: auth2, user } = params;
    _assert(
      user,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
  }
  async function _link(params) {
    const { auth: auth2, user } = params;
    _assert(
      user,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
  }
  var AbstractPopupRedirectOperation = class {
    constructor(auth2, filter, resolver, user, bypassAuthState = false) {
      this.auth = auth2;
      this.resolver = resolver;
      this.user = user;
      this.bypassAuthState = bypassAuthState;
      this.pendingPromise = null;
      this.eventManager = null;
      this.filter = Array.isArray(filter) ? filter : [filter];
    }
    execute() {
      return new Promise(async (resolve, reject) => {
        this.pendingPromise = { resolve, reject };
        try {
          this.eventManager = await this.resolver._initialize(this.auth);
          await this.onExecution();
          this.eventManager.registerConsumer(this);
        } catch (e3) {
          this.reject(e3);
        }
      });
    }
    async onAuthEvent(event) {
      const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
      if (error) {
        this.reject(error);
        return;
      }
      const params = {
        auth: this.auth,
        requestUri: urlResponse,
        sessionId,
        tenantId: tenantId || void 0,
        postBody: postBody || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState
      };
      try {
        this.resolve(await this.getIdpTask(type)(params));
      } catch (e3) {
        this.reject(e3);
      }
    }
    onError(error) {
      this.reject(error);
    }
    getIdpTask(type) {
      switch (type) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return _signIn;
        case "linkViaPopup":
        case "linkViaRedirect":
          return _link;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return _reauth;
        default:
          _fail(
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
      }
    }
    resolve(cred) {
      debugAssert(this.pendingPromise, "Pending promise was never set");
      this.pendingPromise.resolve(cred);
      this.unregisterAndCleanUp();
    }
    reject(error) {
      debugAssert(this.pendingPromise, "Pending promise was never set");
      this.pendingPromise.reject(error);
      this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      if (this.eventManager) {
        this.eventManager.unregisterConsumer(this);
      }
      this.pendingPromise = null;
      this.cleanUp();
    }
  };
  var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
  var PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
    constructor(auth2, filter, provider2, resolver, user) {
      super(auth2, filter, resolver, user);
      this.provider = provider2;
      this.authWindow = null;
      this.pollId = null;
      if (_PopupOperation.currentPopupAction) {
        _PopupOperation.currentPopupAction.cancel();
      }
      _PopupOperation.currentPopupAction = this;
    }
    async executeNotNull() {
      const result = await this.execute();
      _assert(
        result,
        this.auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      return result;
    }
    async onExecution() {
      debugAssert(this.filter.length === 1, "Popup operations only handle one event");
      const eventId = _generateEventId();
      this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        // There's always one, see constructor
        eventId
      );
      this.authWindow.associatedEvent = eventId;
      this.resolver._originValidation(this.auth).catch((e3) => {
        this.reject(e3);
      });
      this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
        if (!isSupported) {
          this.reject(_createError(
            this.auth,
            "web-storage-unsupported"
            /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
          ));
        }
      });
      this.pollUserCancellation();
    }
    get eventId() {
      return this.authWindow?.associatedEvent || null;
    }
    cancel() {
      this.reject(_createError(
        this.auth,
        "cancelled-popup-request"
        /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
      ));
    }
    cleanUp() {
      if (this.authWindow) {
        this.authWindow.close();
      }
      if (this.pollId) {
        window.clearTimeout(this.pollId);
      }
      this.authWindow = null;
      this.pollId = null;
      _PopupOperation.currentPopupAction = null;
    }
    pollUserCancellation() {
      const poll = () => {
        if (this.authWindow?.window?.closed) {
          this.pollId = window.setTimeout(
            () => {
              this.pollId = null;
              this.reject(_createError(
                this.auth,
                "popup-closed-by-user"
                /* AuthErrorCode.POPUP_CLOSED_BY_USER */
              ));
            },
            8e3
            /* _Timeout.AUTH_EVENT */
          );
          return;
        }
        this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
      };
      poll();
    }
  };
  PopupOperation.currentPopupAction = null;
  var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
  var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
  var PING_TIMEOUT = new Delay(5e3, 15e3);
  var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
  var MultiFactorAssertionImpl = class {
    constructor(factorId) {
      this.factorId = factorId;
    }
    _process(auth2, session, displayName) {
      switch (session.type) {
        case "enroll":
          return this._finalizeEnroll(auth2, session.credential, displayName);
        case "signin":
          return this._finalizeSignIn(auth2, session.credential);
        default:
          return debugFail("unexpected MultiFactorSessionType");
      }
    }
  };
  var PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
    constructor(credential) {
      super(
        "phone"
        /* FactorId.PHONE */
      );
      this.credential = credential;
    }
    /** @internal */
    static _fromCredential(credential) {
      return new _PhoneMultiFactorAssertionImpl(credential);
    }
    /** @internal */
    _finalizeEnroll(auth2, idToken, displayName) {
      return finalizeEnrollPhoneMfa(auth2, {
        idToken,
        displayName,
        phoneVerificationInfo: this.credential._makeVerificationRequest()
      });
    }
    /** @internal */
    _finalizeSignIn(auth2, mfaPendingCredential) {
      return finalizeSignInPhoneMfa(auth2, {
        mfaPendingCredential,
        phoneVerificationInfo: this.credential._makeVerificationRequest()
      });
    }
  };
  var PhoneMultiFactorGenerator = class {
    constructor() {
    }
    /**
     * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
     *
     * @remarks
     * This method does not work in a Node.js environment.
     *
     * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
     * @returns A {@link PhoneMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}
     */
    static assertion(credential) {
      return PhoneMultiFactorAssertionImpl._fromCredential(credential);
    }
  };
  PhoneMultiFactorGenerator.FACTOR_ID = "phone";
  var TotpMultiFactorGenerator = class {
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
     * the TOTP (time-based one-time password) second factor.
     * This assertion is used to complete enrollment in TOTP second factor.
     *
     * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorUser.enroll}.
     */
    static assertionForEnrollment(secret, oneTimePassword) {
      return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
    }
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
     * This assertion is used to complete signIn with TOTP as the second factor.
     *
     * @param enrollmentId identifies the enrolled TOTP second factor.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}.
     */
    static assertionForSignIn(enrollmentId, oneTimePassword) {
      return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
    }
    /**
     * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
     * Creates a TOTP secret as part of enrolling a TOTP second factor.
     * Used for generating a QR code URL or inputting into a TOTP app.
     * This method uses the auth instance corresponding to the user in the multiFactorSession.
     *
     * @param session The {@link MultiFactorSession} that the user is part of.
     * @returns A promise to {@link TotpSecret}.
     */
    static async generateSecret(session) {
      const mfaSession = session;
      _assert(
        typeof mfaSession.user?.auth !== "undefined",
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const response = await startEnrollTotpMfa(mfaSession.user.auth, {
        idToken: mfaSession.credential,
        totpEnrollmentInfo: {}
      });
      return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
    }
  };
  TotpMultiFactorGenerator.FACTOR_ID = "totp";
  var TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
    constructor(otp, enrollmentId, secret) {
      super(
        "totp"
        /* FactorId.TOTP */
      );
      this.otp = otp;
      this.enrollmentId = enrollmentId;
      this.secret = secret;
    }
    /** @internal */
    static _fromSecret(secret, otp) {
      return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
    }
    /** @internal */
    static _fromEnrollmentId(enrollmentId, otp) {
      return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
    }
    /** @internal */
    async _finalizeEnroll(auth2, idToken, displayName) {
      _assert(
        typeof this.secret !== "undefined",
        auth2,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      return finalizeEnrollTotpMfa(auth2, {
        idToken,
        displayName,
        totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
      });
    }
    /** @internal */
    async _finalizeSignIn(auth2, mfaPendingCredential) {
      _assert(
        this.enrollmentId !== void 0 && this.otp !== void 0,
        auth2,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      const totpVerificationInfo = { verificationCode: this.otp };
      return finalizeSignInTotpMfa(auth2, {
        mfaPendingCredential,
        mfaEnrollmentId: this.enrollmentId,
        totpVerificationInfo
      });
    }
  };
  var TotpSecret = class _TotpSecret {
    // The public members are declared outside the constructor so the docs can be generated.
    constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth2) {
      this.sessionInfo = sessionInfo;
      this.auth = auth2;
      this.secretKey = secretKey;
      this.hashingAlgorithm = hashingAlgorithm;
      this.codeLength = codeLength;
      this.codeIntervalSeconds = codeIntervalSeconds;
      this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
    }
    /** @internal */
    static _fromStartTotpMfaEnrollmentResponse(response, auth2) {
      return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth2);
    }
    /** @internal */
    _makeTotpVerificationInfo(otp) {
      return { sessionInfo: this.sessionInfo, verificationCode: otp };
    }
    /**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */
    generateQrCodeUrl(accountName, issuer) {
      let useDefaults = false;
      if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
        useDefaults = true;
      }
      if (useDefaults) {
        if (_isEmptyString(accountName)) {
          accountName = this.auth.currentUser?.email || "unknownuser";
        }
        if (_isEmptyString(issuer)) {
          issuer = this.auth.name;
        }
      }
      return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
    }
  };
  function _isEmptyString(input) {
    return typeof input === "undefined" || input?.length === 0;
  }
  var name3 = "@firebase/auth";
  var version3 = "1.12.0";
  var AuthInterop = class {
    constructor(auth2) {
      this.auth = auth2;
      this.internalListeners = /* @__PURE__ */ new Map();
    }
    getUid() {
      this.assertAuthConfigured();
      return this.auth.currentUser?.uid || null;
    }
    async getToken(forceRefresh) {
      this.assertAuthConfigured();
      await this.auth._initializationPromise;
      if (!this.auth.currentUser) {
        return null;
      }
      const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
      return { accessToken };
    }
    addAuthTokenListener(listener) {
      this.assertAuthConfigured();
      if (this.internalListeners.has(listener)) {
        return;
      }
      const unsubscribe = this.auth.onIdTokenChanged((user) => {
        listener(user?.stsTokenManager.accessToken || null);
      });
      this.internalListeners.set(listener, unsubscribe);
      this.updateProactiveRefresh();
    }
    removeAuthTokenListener(listener) {
      this.assertAuthConfigured();
      const unsubscribe = this.internalListeners.get(listener);
      if (!unsubscribe) {
        return;
      }
      this.internalListeners.delete(listener);
      unsubscribe();
      this.updateProactiveRefresh();
    }
    assertAuthConfigured() {
      _assert(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth"
        /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
      );
    }
    updateProactiveRefresh() {
      if (this.internalListeners.size > 0) {
        this.auth._startProactiveRefresh();
      } else {
        this.auth._stopProactiveRefresh();
      }
    }
  };
  function getVersionForPlatform(clientPlatform) {
    switch (clientPlatform) {
      case "Node":
        return "node";
      case "ReactNative":
        return "rn";
      case "Worker":
        return "webworker";
      case "Cordova":
        return "cordova";
      case "WebExtension":
        return "web-extension";
      default:
        return void 0;
    }
  }
  function registerAuth(clientPlatform) {
    _registerComponent(new Component(
      "auth",
      (container, { options: deps }) => {
        const app2 = container.getProvider("app").getImmediate();
        const heartbeatServiceProvider = container.getProvider("heartbeat");
        const appCheckServiceProvider = container.getProvider("app-check-internal");
        const { apiKey, authDomain } = app2.options;
        _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app2.name });
        const config = {
          apiKey,
          authDomain,
          clientPlatform,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: _getClientVersion(clientPlatform)
        };
        const authInstance = new AuthImpl(app2, heartbeatServiceProvider, appCheckServiceProvider, config);
        _initializeAuthInstance(authInstance, deps);
        return authInstance;
      },
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ).setInstantiationMode(
      "EXPLICIT"
      /* InstantiationMode.EXPLICIT */
    ).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
      const authInternalProvider = container.getProvider(
        "auth-internal"
        /* _ComponentName.AUTH_INTERNAL */
      );
      authInternalProvider.initialize();
    }));
    _registerComponent(new Component(
      "auth-internal",
      (container) => {
        const auth2 = _castAuth(container.getProvider(
          "auth"
          /* _ComponentName.AUTH */
        ).getImmediate());
        return ((auth3) => new AuthInterop(auth3))(auth2);
      },
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ).setInstantiationMode(
      "EXPLICIT"
      /* InstantiationMode.EXPLICIT */
    ));
    registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
    registerVersion(name3, version3, "esm2020");
  }
  var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
  var authIdTokenMaxAge = getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
  function getScriptParentElement() {
    return document.getElementsByTagName("head")?.[0] ?? document;
  }
  _setExternalJSProvider({
    loadJS(url) {
      return new Promise((resolve, reject) => {
        const el = document.createElement("script");
        el.setAttribute("src", url);
        el.onload = resolve;
        el.onerror = (e3) => {
          const error = _createError(
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          error.customData = e3;
          reject(error);
        };
        el.type = "text/javascript";
        el.charset = "UTF-8";
        getScriptParentElement().appendChild(el);
      });
    },
    gapiScript: "",
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: ""
  });
  registerAuth(
    "Browser"
    /* ClientPlatform.BROWSER */
  );

  // node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var bloom_blob_es2018 = {};
  var Integer;
  var Md5;
  (function() {
    var h3;
    function k4(d3, a3) {
      function c3() {
      }
      c3.prototype = a3.prototype;
      d3.F = a3.prototype;
      d3.prototype = new c3();
      d3.prototype.constructor = d3;
      d3.D = function(f4, e3, g2) {
        for (var b2 = Array(arguments.length - 2), r3 = 2; r3 < arguments.length; r3++) b2[r3 - 2] = arguments[r3];
        return a3.prototype[e3].apply(f4, b2);
      };
    }
    function l3() {
      this.blockSize = -1;
    }
    function m3() {
      this.blockSize = -1;
      this.blockSize = 64;
      this.g = Array(4);
      this.C = Array(this.blockSize);
      this.o = this.h = 0;
      this.u();
    }
    k4(m3, l3);
    m3.prototype.u = function() {
      this.g[0] = 1732584193;
      this.g[1] = 4023233417;
      this.g[2] = 2562383102;
      this.g[3] = 271733878;
      this.o = this.h = 0;
    };
    function n2(d3, a3, c3) {
      c3 || (c3 = 0);
      const f4 = Array(16);
      if (typeof a3 === "string") for (var e3 = 0; e3 < 16; ++e3) f4[e3] = a3.charCodeAt(c3++) | a3.charCodeAt(c3++) << 8 | a3.charCodeAt(c3++) << 16 | a3.charCodeAt(c3++) << 24;
      else for (e3 = 0; e3 < 16; ++e3) f4[e3] = a3[c3++] | a3[c3++] << 8 | a3[c3++] << 16 | a3[c3++] << 24;
      a3 = d3.g[0];
      c3 = d3.g[1];
      e3 = d3.g[2];
      let g2 = d3.g[3], b2;
      b2 = a3 + (g2 ^ c3 & (e3 ^ g2)) + f4[0] + 3614090360 & 4294967295;
      a3 = c3 + (b2 << 7 & 4294967295 | b2 >>> 25);
      b2 = g2 + (e3 ^ a3 & (c3 ^ e3)) + f4[1] + 3905402710 & 4294967295;
      g2 = a3 + (b2 << 12 & 4294967295 | b2 >>> 20);
      b2 = e3 + (c3 ^ g2 & (a3 ^ c3)) + f4[2] + 606105819 & 4294967295;
      e3 = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
      b2 = c3 + (a3 ^ e3 & (g2 ^ a3)) + f4[3] + 3250441966 & 4294967295;
      c3 = e3 + (b2 << 22 & 4294967295 | b2 >>> 10);
      b2 = a3 + (g2 ^ c3 & (e3 ^ g2)) + f4[4] + 4118548399 & 4294967295;
      a3 = c3 + (b2 << 7 & 4294967295 | b2 >>> 25);
      b2 = g2 + (e3 ^ a3 & (c3 ^ e3)) + f4[5] + 1200080426 & 4294967295;
      g2 = a3 + (b2 << 12 & 4294967295 | b2 >>> 20);
      b2 = e3 + (c3 ^ g2 & (a3 ^ c3)) + f4[6] + 2821735955 & 4294967295;
      e3 = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
      b2 = c3 + (a3 ^ e3 & (g2 ^ a3)) + f4[7] + 4249261313 & 4294967295;
      c3 = e3 + (b2 << 22 & 4294967295 | b2 >>> 10);
      b2 = a3 + (g2 ^ c3 & (e3 ^ g2)) + f4[8] + 1770035416 & 4294967295;
      a3 = c3 + (b2 << 7 & 4294967295 | b2 >>> 25);
      b2 = g2 + (e3 ^ a3 & (c3 ^ e3)) + f4[9] + 2336552879 & 4294967295;
      g2 = a3 + (b2 << 12 & 4294967295 | b2 >>> 20);
      b2 = e3 + (c3 ^ g2 & (a3 ^ c3)) + f4[10] + 4294925233 & 4294967295;
      e3 = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
      b2 = c3 + (a3 ^ e3 & (g2 ^ a3)) + f4[11] + 2304563134 & 4294967295;
      c3 = e3 + (b2 << 22 & 4294967295 | b2 >>> 10);
      b2 = a3 + (g2 ^ c3 & (e3 ^ g2)) + f4[12] + 1804603682 & 4294967295;
      a3 = c3 + (b2 << 7 & 4294967295 | b2 >>> 25);
      b2 = g2 + (e3 ^ a3 & (c3 ^ e3)) + f4[13] + 4254626195 & 4294967295;
      g2 = a3 + (b2 << 12 & 4294967295 | b2 >>> 20);
      b2 = e3 + (c3 ^ g2 & (a3 ^ c3)) + f4[14] + 2792965006 & 4294967295;
      e3 = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
      b2 = c3 + (a3 ^ e3 & (g2 ^ a3)) + f4[15] + 1236535329 & 4294967295;
      c3 = e3 + (b2 << 22 & 4294967295 | b2 >>> 10);
      b2 = a3 + (e3 ^ g2 & (c3 ^ e3)) + f4[1] + 4129170786 & 4294967295;
      a3 = c3 + (b2 << 5 & 4294967295 | b2 >>> 27);
      b2 = g2 + (c3 ^ e3 & (a3 ^ c3)) + f4[6] + 3225465664 & 4294967295;
      g2 = a3 + (b2 << 9 & 4294967295 | b2 >>> 23);
      b2 = e3 + (a3 ^ c3 & (g2 ^ a3)) + f4[11] + 643717713 & 4294967295;
      e3 = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
      b2 = c3 + (g2 ^ a3 & (e3 ^ g2)) + f4[0] + 3921069994 & 4294967295;
      c3 = e3 + (b2 << 20 & 4294967295 | b2 >>> 12);
      b2 = a3 + (e3 ^ g2 & (c3 ^ e3)) + f4[5] + 3593408605 & 4294967295;
      a3 = c3 + (b2 << 5 & 4294967295 | b2 >>> 27);
      b2 = g2 + (c3 ^ e3 & (a3 ^ c3)) + f4[10] + 38016083 & 4294967295;
      g2 = a3 + (b2 << 9 & 4294967295 | b2 >>> 23);
      b2 = e3 + (a3 ^ c3 & (g2 ^ a3)) + f4[15] + 3634488961 & 4294967295;
      e3 = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
      b2 = c3 + (g2 ^ a3 & (e3 ^ g2)) + f4[4] + 3889429448 & 4294967295;
      c3 = e3 + (b2 << 20 & 4294967295 | b2 >>> 12);
      b2 = a3 + (e3 ^ g2 & (c3 ^ e3)) + f4[9] + 568446438 & 4294967295;
      a3 = c3 + (b2 << 5 & 4294967295 | b2 >>> 27);
      b2 = g2 + (c3 ^ e3 & (a3 ^ c3)) + f4[14] + 3275163606 & 4294967295;
      g2 = a3 + (b2 << 9 & 4294967295 | b2 >>> 23);
      b2 = e3 + (a3 ^ c3 & (g2 ^ a3)) + f4[3] + 4107603335 & 4294967295;
      e3 = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
      b2 = c3 + (g2 ^ a3 & (e3 ^ g2)) + f4[8] + 1163531501 & 4294967295;
      c3 = e3 + (b2 << 20 & 4294967295 | b2 >>> 12);
      b2 = a3 + (e3 ^ g2 & (c3 ^ e3)) + f4[13] + 2850285829 & 4294967295;
      a3 = c3 + (b2 << 5 & 4294967295 | b2 >>> 27);
      b2 = g2 + (c3 ^ e3 & (a3 ^ c3)) + f4[2] + 4243563512 & 4294967295;
      g2 = a3 + (b2 << 9 & 4294967295 | b2 >>> 23);
      b2 = e3 + (a3 ^ c3 & (g2 ^ a3)) + f4[7] + 1735328473 & 4294967295;
      e3 = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
      b2 = c3 + (g2 ^ a3 & (e3 ^ g2)) + f4[12] + 2368359562 & 4294967295;
      c3 = e3 + (b2 << 20 & 4294967295 | b2 >>> 12);
      b2 = a3 + (c3 ^ e3 ^ g2) + f4[5] + 4294588738 & 4294967295;
      a3 = c3 + (b2 << 4 & 4294967295 | b2 >>> 28);
      b2 = g2 + (a3 ^ c3 ^ e3) + f4[8] + 2272392833 & 4294967295;
      g2 = a3 + (b2 << 11 & 4294967295 | b2 >>> 21);
      b2 = e3 + (g2 ^ a3 ^ c3) + f4[11] + 1839030562 & 4294967295;
      e3 = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
      b2 = c3 + (e3 ^ g2 ^ a3) + f4[14] + 4259657740 & 4294967295;
      c3 = e3 + (b2 << 23 & 4294967295 | b2 >>> 9);
      b2 = a3 + (c3 ^ e3 ^ g2) + f4[1] + 2763975236 & 4294967295;
      a3 = c3 + (b2 << 4 & 4294967295 | b2 >>> 28);
      b2 = g2 + (a3 ^ c3 ^ e3) + f4[4] + 1272893353 & 4294967295;
      g2 = a3 + (b2 << 11 & 4294967295 | b2 >>> 21);
      b2 = e3 + (g2 ^ a3 ^ c3) + f4[7] + 4139469664 & 4294967295;
      e3 = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
      b2 = c3 + (e3 ^ g2 ^ a3) + f4[10] + 3200236656 & 4294967295;
      c3 = e3 + (b2 << 23 & 4294967295 | b2 >>> 9);
      b2 = a3 + (c3 ^ e3 ^ g2) + f4[13] + 681279174 & 4294967295;
      a3 = c3 + (b2 << 4 & 4294967295 | b2 >>> 28);
      b2 = g2 + (a3 ^ c3 ^ e3) + f4[0] + 3936430074 & 4294967295;
      g2 = a3 + (b2 << 11 & 4294967295 | b2 >>> 21);
      b2 = e3 + (g2 ^ a3 ^ c3) + f4[3] + 3572445317 & 4294967295;
      e3 = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
      b2 = c3 + (e3 ^ g2 ^ a3) + f4[6] + 76029189 & 4294967295;
      c3 = e3 + (b2 << 23 & 4294967295 | b2 >>> 9);
      b2 = a3 + (c3 ^ e3 ^ g2) + f4[9] + 3654602809 & 4294967295;
      a3 = c3 + (b2 << 4 & 4294967295 | b2 >>> 28);
      b2 = g2 + (a3 ^ c3 ^ e3) + f4[12] + 3873151461 & 4294967295;
      g2 = a3 + (b2 << 11 & 4294967295 | b2 >>> 21);
      b2 = e3 + (g2 ^ a3 ^ c3) + f4[15] + 530742520 & 4294967295;
      e3 = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
      b2 = c3 + (e3 ^ g2 ^ a3) + f4[2] + 3299628645 & 4294967295;
      c3 = e3 + (b2 << 23 & 4294967295 | b2 >>> 9);
      b2 = a3 + (e3 ^ (c3 | ~g2)) + f4[0] + 4096336452 & 4294967295;
      a3 = c3 + (b2 << 6 & 4294967295 | b2 >>> 26);
      b2 = g2 + (c3 ^ (a3 | ~e3)) + f4[7] + 1126891415 & 4294967295;
      g2 = a3 + (b2 << 10 & 4294967295 | b2 >>> 22);
      b2 = e3 + (a3 ^ (g2 | ~c3)) + f4[14] + 2878612391 & 4294967295;
      e3 = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
      b2 = c3 + (g2 ^ (e3 | ~a3)) + f4[5] + 4237533241 & 4294967295;
      c3 = e3 + (b2 << 21 & 4294967295 | b2 >>> 11);
      b2 = a3 + (e3 ^ (c3 | ~g2)) + f4[12] + 1700485571 & 4294967295;
      a3 = c3 + (b2 << 6 & 4294967295 | b2 >>> 26);
      b2 = g2 + (c3 ^ (a3 | ~e3)) + f4[3] + 2399980690 & 4294967295;
      g2 = a3 + (b2 << 10 & 4294967295 | b2 >>> 22);
      b2 = e3 + (a3 ^ (g2 | ~c3)) + f4[10] + 4293915773 & 4294967295;
      e3 = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
      b2 = c3 + (g2 ^ (e3 | ~a3)) + f4[1] + 2240044497 & 4294967295;
      c3 = e3 + (b2 << 21 & 4294967295 | b2 >>> 11);
      b2 = a3 + (e3 ^ (c3 | ~g2)) + f4[8] + 1873313359 & 4294967295;
      a3 = c3 + (b2 << 6 & 4294967295 | b2 >>> 26);
      b2 = g2 + (c3 ^ (a3 | ~e3)) + f4[15] + 4264355552 & 4294967295;
      g2 = a3 + (b2 << 10 & 4294967295 | b2 >>> 22);
      b2 = e3 + (a3 ^ (g2 | ~c3)) + f4[6] + 2734768916 & 4294967295;
      e3 = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
      b2 = c3 + (g2 ^ (e3 | ~a3)) + f4[13] + 1309151649 & 4294967295;
      c3 = e3 + (b2 << 21 & 4294967295 | b2 >>> 11);
      b2 = a3 + (e3 ^ (c3 | ~g2)) + f4[4] + 4149444226 & 4294967295;
      a3 = c3 + (b2 << 6 & 4294967295 | b2 >>> 26);
      b2 = g2 + (c3 ^ (a3 | ~e3)) + f4[11] + 3174756917 & 4294967295;
      g2 = a3 + (b2 << 10 & 4294967295 | b2 >>> 22);
      b2 = e3 + (a3 ^ (g2 | ~c3)) + f4[2] + 718787259 & 4294967295;
      e3 = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
      b2 = c3 + (g2 ^ (e3 | ~a3)) + f4[9] + 3951481745 & 4294967295;
      d3.g[0] = d3.g[0] + a3 & 4294967295;
      d3.g[1] = d3.g[1] + (e3 + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
      d3.g[2] = d3.g[2] + e3 & 4294967295;
      d3.g[3] = d3.g[3] + g2 & 4294967295;
    }
    m3.prototype.v = function(d3, a3) {
      a3 === void 0 && (a3 = d3.length);
      const c3 = a3 - this.blockSize, f4 = this.C;
      let e3 = this.h, g2 = 0;
      for (; g2 < a3; ) {
        if (e3 == 0) for (; g2 <= c3; ) n2(this, d3, g2), g2 += this.blockSize;
        if (typeof d3 === "string") for (; g2 < a3; ) {
          if (f4[e3++] = d3.charCodeAt(g2++), e3 == this.blockSize) {
            n2(this, f4);
            e3 = 0;
            break;
          }
        }
        else for (; g2 < a3; ) if (f4[e3++] = d3[g2++], e3 == this.blockSize) {
          n2(this, f4);
          e3 = 0;
          break;
        }
      }
      this.h = e3;
      this.o += a3;
    };
    m3.prototype.A = function() {
      var d3 = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
      d3[0] = 128;
      for (var a3 = 1; a3 < d3.length - 8; ++a3) d3[a3] = 0;
      a3 = this.o * 8;
      for (var c3 = d3.length - 8; c3 < d3.length; ++c3) d3[c3] = a3 & 255, a3 /= 256;
      this.v(d3);
      d3 = Array(16);
      a3 = 0;
      for (c3 = 0; c3 < 4; ++c3) for (let f4 = 0; f4 < 32; f4 += 8) d3[a3++] = this.g[c3] >>> f4 & 255;
      return d3;
    };
    function p3(d3, a3) {
      var c3 = q4;
      return Object.prototype.hasOwnProperty.call(c3, d3) ? c3[d3] : c3[d3] = a3(d3);
    }
    function t3(d3, a3) {
      this.h = a3;
      const c3 = [];
      let f4 = true;
      for (let e3 = d3.length - 1; e3 >= 0; e3--) {
        const g2 = d3[e3] | 0;
        f4 && g2 == a3 || (c3[e3] = g2, f4 = false);
      }
      this.g = c3;
    }
    var q4 = {};
    function u4(d3) {
      return -128 <= d3 && d3 < 128 ? p3(d3, function(a3) {
        return new t3([a3 | 0], a3 < 0 ? -1 : 0);
      }) : new t3([d3 | 0], d3 < 0 ? -1 : 0);
    }
    function v3(d3) {
      if (isNaN(d3) || !isFinite(d3)) return w3;
      if (d3 < 0) return x4(v3(-d3));
      const a3 = [];
      let c3 = 1;
      for (let f4 = 0; d3 >= c3; f4++) a3[f4] = d3 / c3 | 0, c3 *= 4294967296;
      return new t3(a3, 0);
    }
    function y3(d3, a3) {
      if (d3.length == 0) throw Error("number format error: empty string");
      a3 = a3 || 10;
      if (a3 < 2 || 36 < a3) throw Error("radix out of range: " + a3);
      if (d3.charAt(0) == "-") return x4(y3(d3.substring(1), a3));
      if (d3.indexOf("-") >= 0) throw Error('number format error: interior "-" character');
      const c3 = v3(Math.pow(a3, 8));
      let f4 = w3;
      for (let g2 = 0; g2 < d3.length; g2 += 8) {
        var e3 = Math.min(8, d3.length - g2);
        const b2 = parseInt(d3.substring(g2, g2 + e3), a3);
        e3 < 8 ? (e3 = v3(Math.pow(a3, e3)), f4 = f4.j(e3).add(v3(b2))) : (f4 = f4.j(c3), f4 = f4.add(v3(b2)));
      }
      return f4;
    }
    var w3 = u4(0), z3 = u4(1), A2 = u4(16777216);
    h3 = t3.prototype;
    h3.m = function() {
      if (B4(this)) return -x4(this).m();
      let d3 = 0, a3 = 1;
      for (let c3 = 0; c3 < this.g.length; c3++) {
        const f4 = this.i(c3);
        d3 += (f4 >= 0 ? f4 : 4294967296 + f4) * a3;
        a3 *= 4294967296;
      }
      return d3;
    };
    h3.toString = function(d3) {
      d3 = d3 || 10;
      if (d3 < 2 || 36 < d3) throw Error("radix out of range: " + d3);
      if (C3(this)) return "0";
      if (B4(this)) return "-" + x4(this).toString(d3);
      const a3 = v3(Math.pow(d3, 6));
      var c3 = this;
      let f4 = "";
      for (; ; ) {
        const e3 = D3(c3, a3).g;
        c3 = F2(c3, e3.j(a3));
        let g2 = ((c3.g.length > 0 ? c3.g[0] : c3.h) >>> 0).toString(d3);
        c3 = e3;
        if (C3(c3)) return g2 + f4;
        for (; g2.length < 6; ) g2 = "0" + g2;
        f4 = g2 + f4;
      }
    };
    h3.i = function(d3) {
      return d3 < 0 ? 0 : d3 < this.g.length ? this.g[d3] : this.h;
    };
    function C3(d3) {
      if (d3.h != 0) return false;
      for (let a3 = 0; a3 < d3.g.length; a3++) if (d3.g[a3] != 0) return false;
      return true;
    }
    function B4(d3) {
      return d3.h == -1;
    }
    h3.l = function(d3) {
      d3 = F2(this, d3);
      return B4(d3) ? -1 : C3(d3) ? 0 : 1;
    };
    function x4(d3) {
      const a3 = d3.g.length, c3 = [];
      for (let f4 = 0; f4 < a3; f4++) c3[f4] = ~d3.g[f4];
      return new t3(c3, ~d3.h).add(z3);
    }
    h3.abs = function() {
      return B4(this) ? x4(this) : this;
    };
    h3.add = function(d3) {
      const a3 = Math.max(this.g.length, d3.g.length), c3 = [];
      let f4 = 0;
      for (let e3 = 0; e3 <= a3; e3++) {
        let g2 = f4 + (this.i(e3) & 65535) + (d3.i(e3) & 65535), b2 = (g2 >>> 16) + (this.i(e3) >>> 16) + (d3.i(e3) >>> 16);
        f4 = b2 >>> 16;
        g2 &= 65535;
        b2 &= 65535;
        c3[e3] = b2 << 16 | g2;
      }
      return new t3(c3, c3[c3.length - 1] & -2147483648 ? -1 : 0);
    };
    function F2(d3, a3) {
      return d3.add(x4(a3));
    }
    h3.j = function(d3) {
      if (C3(this) || C3(d3)) return w3;
      if (B4(this)) return B4(d3) ? x4(this).j(x4(d3)) : x4(x4(this).j(d3));
      if (B4(d3)) return x4(this.j(x4(d3)));
      if (this.l(A2) < 0 && d3.l(A2) < 0) return v3(this.m() * d3.m());
      const a3 = this.g.length + d3.g.length, c3 = [];
      for (var f4 = 0; f4 < 2 * a3; f4++) c3[f4] = 0;
      for (f4 = 0; f4 < this.g.length; f4++) for (let e3 = 0; e3 < d3.g.length; e3++) {
        const g2 = this.i(f4) >>> 16, b2 = this.i(f4) & 65535, r3 = d3.i(e3) >>> 16, E2 = d3.i(e3) & 65535;
        c3[2 * f4 + 2 * e3] += b2 * E2;
        G2(c3, 2 * f4 + 2 * e3);
        c3[2 * f4 + 2 * e3 + 1] += g2 * E2;
        G2(c3, 2 * f4 + 2 * e3 + 1);
        c3[2 * f4 + 2 * e3 + 1] += b2 * r3;
        G2(c3, 2 * f4 + 2 * e3 + 1);
        c3[2 * f4 + 2 * e3 + 2] += g2 * r3;
        G2(c3, 2 * f4 + 2 * e3 + 2);
      }
      for (d3 = 0; d3 < a3; d3++) c3[d3] = c3[2 * d3 + 1] << 16 | c3[2 * d3];
      for (d3 = a3; d3 < 2 * a3; d3++) c3[d3] = 0;
      return new t3(c3, 0);
    };
    function G2(d3, a3) {
      for (; (d3[a3] & 65535) != d3[a3]; ) d3[a3 + 1] += d3[a3] >>> 16, d3[a3] &= 65535, a3++;
    }
    function H3(d3, a3) {
      this.g = d3;
      this.h = a3;
    }
    function D3(d3, a3) {
      if (C3(a3)) throw Error("division by zero");
      if (C3(d3)) return new H3(w3, w3);
      if (B4(d3)) return a3 = D3(x4(d3), a3), new H3(x4(a3.g), x4(a3.h));
      if (B4(a3)) return a3 = D3(d3, x4(a3)), new H3(x4(a3.g), a3.h);
      if (d3.g.length > 30) {
        if (B4(d3) || B4(a3)) throw Error("slowDivide_ only works with positive integers.");
        for (var c3 = z3, f4 = a3; f4.l(d3) <= 0; ) c3 = I2(c3), f4 = I2(f4);
        var e3 = J3(c3, 1), g2 = J3(f4, 1);
        f4 = J3(f4, 2);
        for (c3 = J3(c3, 2); !C3(f4); ) {
          var b2 = g2.add(f4);
          b2.l(d3) <= 0 && (e3 = e3.add(c3), g2 = b2);
          f4 = J3(f4, 1);
          c3 = J3(c3, 1);
        }
        a3 = F2(d3, e3.j(a3));
        return new H3(e3, a3);
      }
      for (e3 = w3; d3.l(a3) >= 0; ) {
        c3 = Math.max(1, Math.floor(d3.m() / a3.m()));
        f4 = Math.ceil(Math.log(c3) / Math.LN2);
        f4 = f4 <= 48 ? 1 : Math.pow(2, f4 - 48);
        g2 = v3(c3);
        for (b2 = g2.j(a3); B4(b2) || b2.l(d3) > 0; ) c3 -= f4, g2 = v3(c3), b2 = g2.j(a3);
        C3(g2) && (g2 = z3);
        e3 = e3.add(g2);
        d3 = F2(d3, b2);
      }
      return new H3(e3, d3);
    }
    h3.B = function(d3) {
      return D3(this, d3).h;
    };
    h3.and = function(d3) {
      const a3 = Math.max(this.g.length, d3.g.length), c3 = [];
      for (let f4 = 0; f4 < a3; f4++) c3[f4] = this.i(f4) & d3.i(f4);
      return new t3(c3, this.h & d3.h);
    };
    h3.or = function(d3) {
      const a3 = Math.max(this.g.length, d3.g.length), c3 = [];
      for (let f4 = 0; f4 < a3; f4++) c3[f4] = this.i(f4) | d3.i(f4);
      return new t3(c3, this.h | d3.h);
    };
    h3.xor = function(d3) {
      const a3 = Math.max(this.g.length, d3.g.length), c3 = [];
      for (let f4 = 0; f4 < a3; f4++) c3[f4] = this.i(f4) ^ d3.i(f4);
      return new t3(c3, this.h ^ d3.h);
    };
    function I2(d3) {
      const a3 = d3.g.length + 1, c3 = [];
      for (let f4 = 0; f4 < a3; f4++) c3[f4] = d3.i(f4) << 1 | d3.i(f4 - 1) >>> 31;
      return new t3(c3, d3.h);
    }
    function J3(d3, a3) {
      const c3 = a3 >> 5;
      a3 %= 32;
      const f4 = d3.g.length - c3, e3 = [];
      for (let g2 = 0; g2 < f4; g2++) e3[g2] = a3 > 0 ? d3.i(g2 + c3) >>> a3 | d3.i(g2 + c3 + 1) << 32 - a3 : d3.i(g2 + c3);
      return new t3(e3, d3.h);
    }
    m3.prototype.digest = m3.prototype.A;
    m3.prototype.reset = m3.prototype.u;
    m3.prototype.update = m3.prototype.v;
    Md5 = bloom_blob_es2018.Md5 = m3;
    t3.prototype.add = t3.prototype.add;
    t3.prototype.multiply = t3.prototype.j;
    t3.prototype.modulo = t3.prototype.B;
    t3.prototype.compare = t3.prototype.l;
    t3.prototype.toNumber = t3.prototype.m;
    t3.prototype.toString = t3.prototype.toString;
    t3.prototype.getBits = t3.prototype.i;
    t3.fromNumber = v3;
    t3.fromString = y3;
    Integer = bloom_blob_es2018.Integer = t3;
  }).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

  // node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
  var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var webchannel_blob_es2018 = {};
  var XhrIo;
  var FetchXmlHttpFactory;
  var WebChannel;
  var EventType;
  var ErrorCode;
  var Stat;
  var Event;
  var getStatEventTarget;
  var createWebChannelTransport;
  (function() {
    var h3, aa = Object.defineProperty;
    function ba(a3) {
      a3 = ["object" == typeof globalThis && globalThis, a3, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal2 && commonjsGlobal2];
      for (var b2 = 0; b2 < a3.length; ++b2) {
        var c3 = a3[b2];
        if (c3 && c3.Math == Math) return c3;
      }
      throw Error("Cannot find global object");
    }
    var ca = ba(this);
    function da(a3, b2) {
      if (b2) a: {
        var c3 = ca;
        a3 = a3.split(".");
        for (var d3 = 0; d3 < a3.length - 1; d3++) {
          var e3 = a3[d3];
          if (!(e3 in c3)) break a;
          c3 = c3[e3];
        }
        a3 = a3[a3.length - 1];
        d3 = c3[a3];
        b2 = b2(d3);
        b2 != d3 && b2 != null && aa(c3, a3, { configurable: true, writable: true, value: b2 });
      }
    }
    da("Symbol.dispose", function(a3) {
      return a3 ? a3 : /* @__PURE__ */ Symbol("Symbol.dispose");
    });
    da("Array.prototype.values", function(a3) {
      return a3 ? a3 : function() {
        return this[Symbol.iterator]();
      };
    });
    da("Object.entries", function(a3) {
      return a3 ? a3 : function(b2) {
        var c3 = [], d3;
        for (d3 in b2) Object.prototype.hasOwnProperty.call(b2, d3) && c3.push([d3, b2[d3]]);
        return c3;
      };
    });
    var ea = ea || {}, l3 = this || self;
    function n2(a3) {
      var b2 = typeof a3;
      return b2 == "object" && a3 != null || b2 == "function";
    }
    function fa(a3, b2, c3) {
      return a3.call.apply(a3.bind, arguments);
    }
    function p3(a3, b2, c3) {
      p3 = fa;
      return p3.apply(null, arguments);
    }
    function ha(a3, b2) {
      var c3 = Array.prototype.slice.call(arguments, 1);
      return function() {
        var d3 = c3.slice();
        d3.push.apply(d3, arguments);
        return a3.apply(this, d3);
      };
    }
    function t3(a3, b2) {
      function c3() {
      }
      c3.prototype = b2.prototype;
      a3.Z = b2.prototype;
      a3.prototype = new c3();
      a3.prototype.constructor = a3;
      a3.Ob = function(d3, e3, f4) {
        for (var g2 = Array(arguments.length - 2), k4 = 2; k4 < arguments.length; k4++) g2[k4 - 2] = arguments[k4];
        return b2.prototype[e3].apply(d3, g2);
      };
    }
    var ia = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? (a3) => a3 && AsyncContext.Snapshot.wrap(a3) : (a3) => a3;
    function ja(a3) {
      const b2 = a3.length;
      if (b2 > 0) {
        const c3 = Array(b2);
        for (let d3 = 0; d3 < b2; d3++) c3[d3] = a3[d3];
        return c3;
      }
      return [];
    }
    function ka(a3, b2) {
      for (let d3 = 1; d3 < arguments.length; d3++) {
        const e3 = arguments[d3];
        var c3 = typeof e3;
        c3 = c3 != "object" ? c3 : e3 ? Array.isArray(e3) ? "array" : c3 : "null";
        if (c3 == "array" || c3 == "object" && typeof e3.length == "number") {
          c3 = a3.length || 0;
          const f4 = e3.length || 0;
          a3.length = c3 + f4;
          for (let g2 = 0; g2 < f4; g2++) a3[c3 + g2] = e3[g2];
        } else a3.push(e3);
      }
    }
    class la {
      constructor(a3, b2) {
        this.i = a3;
        this.j = b2;
        this.h = 0;
        this.g = null;
      }
      get() {
        let a3;
        this.h > 0 ? (this.h--, a3 = this.g, this.g = a3.next, a3.next = null) : a3 = this.i();
        return a3;
      }
    }
    function ma(a3) {
      l3.setTimeout(() => {
        throw a3;
      }, 0);
    }
    function na() {
      var a3 = oa;
      let b2 = null;
      a3.g && (b2 = a3.g, a3.g = a3.g.next, a3.g || (a3.h = null), b2.next = null);
      return b2;
    }
    class pa {
      constructor() {
        this.h = this.g = null;
      }
      add(a3, b2) {
        const c3 = qa.get();
        c3.set(a3, b2);
        this.h ? this.h.next = c3 : this.g = c3;
        this.h = c3;
      }
    }
    var qa = new la(() => new ra(), (a3) => a3.reset());
    class ra {
      constructor() {
        this.next = this.g = this.h = null;
      }
      set(a3, b2) {
        this.h = a3;
        this.g = b2;
        this.next = null;
      }
      reset() {
        this.next = this.g = this.h = null;
      }
    }
    let u4, v3 = false, oa = new pa(), ta = () => {
      const a3 = Promise.resolve(void 0);
      u4 = () => {
        a3.then(sa);
      };
    };
    function sa() {
      for (var a3; a3 = na(); ) {
        try {
          a3.h.call(a3.g);
        } catch (c3) {
          ma(c3);
        }
        var b2 = qa;
        b2.j(a3);
        b2.h < 100 && (b2.h++, a3.next = b2.g, b2.g = a3);
      }
      v3 = false;
    }
    function w3() {
      this.u = this.u;
      this.C = this.C;
    }
    w3.prototype.u = false;
    w3.prototype.dispose = function() {
      this.u || (this.u = true, this.N());
    };
    w3.prototype[Symbol.dispose] = function() {
      this.dispose();
    };
    w3.prototype.N = function() {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    };
    function x4(a3, b2) {
      this.type = a3;
      this.g = this.target = b2;
      this.defaultPrevented = false;
    }
    x4.prototype.h = function() {
      this.defaultPrevented = true;
    };
    var ua = (function() {
      if (!l3.addEventListener || !Object.defineProperty) return false;
      var a3 = false, b2 = Object.defineProperty({}, "passive", { get: function() {
        a3 = true;
      } });
      try {
        const c3 = () => {
        };
        l3.addEventListener("test", c3, b2);
        l3.removeEventListener("test", c3, b2);
      } catch (c3) {
      }
      return a3;
    })();
    function y3(a3) {
      return /^[\s\xa0]*$/.test(a3);
    }
    function z3(a3, b2) {
      x4.call(this, a3 ? a3.type : "");
      this.relatedTarget = this.g = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.i = null;
      a3 && this.init(a3, b2);
    }
    t3(z3, x4);
    z3.prototype.init = function(a3, b2) {
      const c3 = this.type = a3.type, d3 = a3.changedTouches && a3.changedTouches.length ? a3.changedTouches[0] : null;
      this.target = a3.target || a3.srcElement;
      this.g = b2;
      b2 = a3.relatedTarget;
      b2 || (c3 == "mouseover" ? b2 = a3.fromElement : c3 == "mouseout" && (b2 = a3.toElement));
      this.relatedTarget = b2;
      d3 ? (this.clientX = d3.clientX !== void 0 ? d3.clientX : d3.pageX, this.clientY = d3.clientY !== void 0 ? d3.clientY : d3.pageY, this.screenX = d3.screenX || 0, this.screenY = d3.screenY || 0) : (this.clientX = a3.clientX !== void 0 ? a3.clientX : a3.pageX, this.clientY = a3.clientY !== void 0 ? a3.clientY : a3.pageY, this.screenX = a3.screenX || 0, this.screenY = a3.screenY || 0);
      this.button = a3.button;
      this.key = a3.key || "";
      this.ctrlKey = a3.ctrlKey;
      this.altKey = a3.altKey;
      this.shiftKey = a3.shiftKey;
      this.metaKey = a3.metaKey;
      this.pointerId = a3.pointerId || 0;
      this.pointerType = a3.pointerType;
      this.state = a3.state;
      this.i = a3;
      a3.defaultPrevented && z3.Z.h.call(this);
    };
    z3.prototype.h = function() {
      z3.Z.h.call(this);
      const a3 = this.i;
      a3.preventDefault ? a3.preventDefault() : a3.returnValue = false;
    };
    var B4 = "closure_listenable_" + (Math.random() * 1e6 | 0);
    var va = 0;
    function wa(a3, b2, c3, d3, e3) {
      this.listener = a3;
      this.proxy = null;
      this.src = b2;
      this.type = c3;
      this.capture = !!d3;
      this.ha = e3;
      this.key = ++va;
      this.da = this.fa = false;
    }
    function xa(a3) {
      a3.da = true;
      a3.listener = null;
      a3.proxy = null;
      a3.src = null;
      a3.ha = null;
    }
    function ya(a3, b2, c3) {
      for (const d3 in a3) b2.call(c3, a3[d3], d3, a3);
    }
    function Aa(a3, b2) {
      for (const c3 in a3) b2.call(void 0, a3[c3], c3, a3);
    }
    function Ba(a3) {
      const b2 = {};
      for (const c3 in a3) b2[c3] = a3[c3];
      return b2;
    }
    const Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Da(a3, b2) {
      let c3, d3;
      for (let e3 = 1; e3 < arguments.length; e3++) {
        d3 = arguments[e3];
        for (c3 in d3) a3[c3] = d3[c3];
        for (let f4 = 0; f4 < Ca.length; f4++) c3 = Ca[f4], Object.prototype.hasOwnProperty.call(d3, c3) && (a3[c3] = d3[c3]);
      }
    }
    function Ea(a3) {
      this.src = a3;
      this.g = {};
      this.h = 0;
    }
    Ea.prototype.add = function(a3, b2, c3, d3, e3) {
      const f4 = a3.toString();
      a3 = this.g[f4];
      a3 || (a3 = this.g[f4] = [], this.h++);
      const g2 = Fa(a3, b2, d3, e3);
      g2 > -1 ? (b2 = a3[g2], c3 || (b2.fa = false)) : (b2 = new wa(b2, this.src, f4, !!d3, e3), b2.fa = c3, a3.push(b2));
      return b2;
    };
    function Ga(a3, b2) {
      const c3 = b2.type;
      if (c3 in a3.g) {
        var d3 = a3.g[c3], e3 = Array.prototype.indexOf.call(d3, b2, void 0), f4;
        (f4 = e3 >= 0) && Array.prototype.splice.call(d3, e3, 1);
        f4 && (xa(b2), a3.g[c3].length == 0 && (delete a3.g[c3], a3.h--));
      }
    }
    function Fa(a3, b2, c3, d3) {
      for (let e3 = 0; e3 < a3.length; ++e3) {
        const f4 = a3[e3];
        if (!f4.da && f4.listener == b2 && f4.capture == !!c3 && f4.ha == d3) return e3;
      }
      return -1;
    }
    var Ha = "closure_lm_" + (Math.random() * 1e6 | 0), Ia = {};
    function Ka(a3, b2, c3, d3, e3) {
      if (d3 && d3.once) return La(a3, b2, c3, d3, e3);
      if (Array.isArray(b2)) {
        for (let f4 = 0; f4 < b2.length; f4++) Ka(a3, b2[f4], c3, d3, e3);
        return null;
      }
      c3 = Ma(c3);
      return a3 && a3[B4] ? a3.J(b2, c3, n2(d3) ? !!d3.capture : !!d3, e3) : Na(a3, b2, c3, false, d3, e3);
    }
    function Na(a3, b2, c3, d3, e3, f4) {
      if (!b2) throw Error("Invalid event type");
      const g2 = n2(e3) ? !!e3.capture : !!e3;
      let k4 = Oa(a3);
      k4 || (a3[Ha] = k4 = new Ea(a3));
      c3 = k4.add(b2, c3, d3, g2, f4);
      if (c3.proxy) return c3;
      d3 = Pa();
      c3.proxy = d3;
      d3.src = a3;
      d3.listener = c3;
      if (a3.addEventListener) ua || (e3 = g2), e3 === void 0 && (e3 = false), a3.addEventListener(b2.toString(), d3, e3);
      else if (a3.attachEvent) a3.attachEvent(Qa(b2.toString()), d3);
      else if (a3.addListener && a3.removeListener) a3.addListener(d3);
      else throw Error("addEventListener and attachEvent are unavailable.");
      return c3;
    }
    function Pa() {
      function a3(c3) {
        return b2.call(a3.src, a3.listener, c3);
      }
      const b2 = Ra;
      return a3;
    }
    function La(a3, b2, c3, d3, e3) {
      if (Array.isArray(b2)) {
        for (let f4 = 0; f4 < b2.length; f4++) La(a3, b2[f4], c3, d3, e3);
        return null;
      }
      c3 = Ma(c3);
      return a3 && a3[B4] ? a3.K(b2, c3, n2(d3) ? !!d3.capture : !!d3, e3) : Na(a3, b2, c3, true, d3, e3);
    }
    function Sa(a3, b2, c3, d3, e3) {
      if (Array.isArray(b2)) for (var f4 = 0; f4 < b2.length; f4++) Sa(a3, b2[f4], c3, d3, e3);
      else (d3 = n2(d3) ? !!d3.capture : !!d3, c3 = Ma(c3), a3 && a3[B4]) ? (a3 = a3.i, f4 = String(b2).toString(), f4 in a3.g && (b2 = a3.g[f4], c3 = Fa(b2, c3, d3, e3), c3 > -1 && (xa(b2[c3]), Array.prototype.splice.call(b2, c3, 1), b2.length == 0 && (delete a3.g[f4], a3.h--)))) : a3 && (a3 = Oa(a3)) && (b2 = a3.g[b2.toString()], a3 = -1, b2 && (a3 = Fa(b2, c3, d3, e3)), (c3 = a3 > -1 ? b2[a3] : null) && Ta(c3));
    }
    function Ta(a3) {
      if (typeof a3 !== "number" && a3 && !a3.da) {
        var b2 = a3.src;
        if (b2 && b2[B4]) Ga(b2.i, a3);
        else {
          var c3 = a3.type, d3 = a3.proxy;
          b2.removeEventListener ? b2.removeEventListener(c3, d3, a3.capture) : b2.detachEvent ? b2.detachEvent(Qa(c3), d3) : b2.addListener && b2.removeListener && b2.removeListener(d3);
          (c3 = Oa(b2)) ? (Ga(c3, a3), c3.h == 0 && (c3.src = null, b2[Ha] = null)) : xa(a3);
        }
      }
    }
    function Qa(a3) {
      return a3 in Ia ? Ia[a3] : Ia[a3] = "on" + a3;
    }
    function Ra(a3, b2) {
      if (a3.da) a3 = true;
      else {
        b2 = new z3(b2, this);
        const c3 = a3.listener, d3 = a3.ha || a3.src;
        a3.fa && Ta(a3);
        a3 = c3.call(d3, b2);
      }
      return a3;
    }
    function Oa(a3) {
      a3 = a3[Ha];
      return a3 instanceof Ea ? a3 : null;
    }
    var Ua = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
    function Ma(a3) {
      if (typeof a3 === "function") return a3;
      a3[Ua] || (a3[Ua] = function(b2) {
        return a3.handleEvent(b2);
      });
      return a3[Ua];
    }
    function C3() {
      w3.call(this);
      this.i = new Ea(this);
      this.M = this;
      this.G = null;
    }
    t3(C3, w3);
    C3.prototype[B4] = true;
    C3.prototype.removeEventListener = function(a3, b2, c3, d3) {
      Sa(this, a3, b2, c3, d3);
    };
    function D3(a3, b2) {
      var c3, d3 = a3.G;
      if (d3) for (c3 = []; d3; d3 = d3.G) c3.push(d3);
      a3 = a3.M;
      d3 = b2.type || b2;
      if (typeof b2 === "string") b2 = new x4(b2, a3);
      else if (b2 instanceof x4) b2.target = b2.target || a3;
      else {
        var e3 = b2;
        b2 = new x4(d3, a3);
        Da(b2, e3);
      }
      e3 = true;
      let f4, g2;
      if (c3) for (g2 = c3.length - 1; g2 >= 0; g2--) f4 = b2.g = c3[g2], e3 = Va(f4, d3, true, b2) && e3;
      f4 = b2.g = a3;
      e3 = Va(f4, d3, true, b2) && e3;
      e3 = Va(f4, d3, false, b2) && e3;
      if (c3) for (g2 = 0; g2 < c3.length; g2++) f4 = b2.g = c3[g2], e3 = Va(f4, d3, false, b2) && e3;
    }
    C3.prototype.N = function() {
      C3.Z.N.call(this);
      if (this.i) {
        var a3 = this.i;
        for (const c3 in a3.g) {
          const d3 = a3.g[c3];
          for (let e3 = 0; e3 < d3.length; e3++) xa(d3[e3]);
          delete a3.g[c3];
          a3.h--;
        }
      }
      this.G = null;
    };
    C3.prototype.J = function(a3, b2, c3, d3) {
      return this.i.add(String(a3), b2, false, c3, d3);
    };
    C3.prototype.K = function(a3, b2, c3, d3) {
      return this.i.add(String(a3), b2, true, c3, d3);
    };
    function Va(a3, b2, c3, d3) {
      b2 = a3.i.g[String(b2)];
      if (!b2) return true;
      b2 = b2.concat();
      let e3 = true;
      for (let f4 = 0; f4 < b2.length; ++f4) {
        const g2 = b2[f4];
        if (g2 && !g2.da && g2.capture == c3) {
          const k4 = g2.listener, q4 = g2.ha || g2.src;
          g2.fa && Ga(a3.i, g2);
          e3 = k4.call(q4, d3) !== false && e3;
        }
      }
      return e3 && !d3.defaultPrevented;
    }
    function Wa(a3, b2) {
      if (typeof a3 !== "function") if (a3 && typeof a3.handleEvent == "function") a3 = p3(a3.handleEvent, a3);
      else throw Error("Invalid listener argument");
      return Number(b2) > 2147483647 ? -1 : l3.setTimeout(a3, b2 || 0);
    }
    function Xa(a3) {
      a3.g = Wa(() => {
        a3.g = null;
        a3.i && (a3.i = false, Xa(a3));
      }, a3.l);
      const b2 = a3.h;
      a3.h = null;
      a3.m.apply(null, b2);
    }
    class Ya extends w3 {
      constructor(a3, b2) {
        super();
        this.m = a3;
        this.l = b2;
        this.h = null;
        this.i = false;
        this.g = null;
      }
      j(a3) {
        this.h = arguments;
        this.g ? this.i = true : Xa(this);
      }
      N() {
        super.N();
        this.g && (l3.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
      }
    }
    function E2(a3) {
      w3.call(this);
      this.h = a3;
      this.g = {};
    }
    t3(E2, w3);
    var Za = [];
    function $a(a3) {
      ya(a3.g, function(b2, c3) {
        this.g.hasOwnProperty(c3) && Ta(b2);
      }, a3);
      a3.g = {};
    }
    E2.prototype.N = function() {
      E2.Z.N.call(this);
      $a(this);
    };
    E2.prototype.handleEvent = function() {
      throw Error("EventHandler.handleEvent not implemented");
    };
    var ab = l3.JSON.stringify;
    var cb = l3.JSON.parse;
    var db2 = class {
      stringify(a3) {
        return l3.JSON.stringify(a3, void 0);
      }
      parse(a3) {
        return l3.JSON.parse(a3, void 0);
      }
    };
    function eb() {
    }
    function fb() {
    }
    var H3 = { OPEN: "a", hb: "b", ERROR: "c", tb: "d" };
    function gb() {
      x4.call(this, "d");
    }
    t3(gb, x4);
    function hb() {
      x4.call(this, "c");
    }
    t3(hb, x4);
    var I2 = {}, ib = null;
    function jb() {
      return ib = ib || new C3();
    }
    I2.Ia = "serverreachability";
    function kb(a3) {
      x4.call(this, I2.Ia, a3);
    }
    t3(kb, x4);
    function lb(a3) {
      const b2 = jb();
      D3(b2, new kb(b2));
    }
    I2.STAT_EVENT = "statevent";
    function mb(a3, b2) {
      x4.call(this, I2.STAT_EVENT, a3);
      this.stat = b2;
    }
    t3(mb, x4);
    function J3(a3) {
      const b2 = jb();
      D3(b2, new mb(b2, a3));
    }
    I2.Ja = "timingevent";
    function nb(a3, b2) {
      x4.call(this, I2.Ja, a3);
      this.size = b2;
    }
    t3(nb, x4);
    function ob(a3, b2) {
      if (typeof a3 !== "function") throw Error("Fn must not be null and must be a function");
      return l3.setTimeout(function() {
        a3();
      }, b2);
    }
    function pb() {
      this.g = true;
    }
    pb.prototype.ua = function() {
      this.g = false;
    };
    function qb(a3, b2, c3, d3, e3, f4) {
      a3.info(function() {
        if (a3.g) if (f4) {
          var g2 = "";
          var k4 = f4.split("&");
          for (let m3 = 0; m3 < k4.length; m3++) {
            var q4 = k4[m3].split("=");
            if (q4.length > 1) {
              const r3 = q4[0];
              q4 = q4[1];
              const A2 = r3.split("_");
              g2 = A2.length >= 2 && A2[1] == "type" ? g2 + (r3 + "=" + q4 + "&") : g2 + (r3 + "=redacted&");
            }
          }
        } else g2 = null;
        else g2 = f4;
        return "XMLHTTP REQ (" + d3 + ") [attempt " + e3 + "]: " + b2 + "\n" + c3 + "\n" + g2;
      });
    }
    function rb(a3, b2, c3, d3, e3, f4, g2) {
      a3.info(function() {
        return "XMLHTTP RESP (" + d3 + ") [ attempt " + e3 + "]: " + b2 + "\n" + c3 + "\n" + f4 + " " + g2;
      });
    }
    function K3(a3, b2, c3, d3) {
      a3.info(function() {
        return "XMLHTTP TEXT (" + b2 + "): " + sb(a3, c3) + (d3 ? " " + d3 : "");
      });
    }
    function tb(a3, b2) {
      a3.info(function() {
        return "TIMEOUT: " + b2;
      });
    }
    pb.prototype.info = function() {
    };
    function sb(a3, b2) {
      if (!a3.g) return b2;
      if (!b2) return null;
      try {
        const f4 = JSON.parse(b2);
        if (f4) {
          for (a3 = 0; a3 < f4.length; a3++) if (Array.isArray(f4[a3])) {
            var c3 = f4[a3];
            if (!(c3.length < 2)) {
              var d3 = c3[1];
              if (Array.isArray(d3) && !(d3.length < 1)) {
                var e3 = d3[0];
                if (e3 != "noop" && e3 != "stop" && e3 != "close") for (let g2 = 1; g2 < d3.length; g2++) d3[g2] = "";
              }
            }
          }
        }
        return ab(f4);
      } catch (f4) {
        return b2;
      }
    }
    var ub = { NO_ERROR: 0, cb: 1, qb: 2, pb: 3, kb: 4, ob: 5, rb: 6, Ga: 7, TIMEOUT: 8, ub: 9 };
    var vb = { ib: "complete", Fb: "success", ERROR: "error", Ga: "abort", xb: "ready", yb: "readystatechange", TIMEOUT: "timeout", sb: "incrementaldata", wb: "progress", lb: "downloadprogress", Nb: "uploadprogress" };
    var wb;
    function xb() {
    }
    t3(xb, eb);
    xb.prototype.g = function() {
      return new XMLHttpRequest();
    };
    wb = new xb();
    function L3(a3) {
      return encodeURIComponent(String(a3));
    }
    function yb(a3) {
      var b2 = 1;
      a3 = a3.split(":");
      const c3 = [];
      for (; b2 > 0 && a3.length; ) c3.push(a3.shift()), b2--;
      a3.length && c3.push(a3.join(":"));
      return c3;
    }
    function N3(a3, b2, c3, d3) {
      this.j = a3;
      this.i = b2;
      this.l = c3;
      this.S = d3 || 1;
      this.V = new E2(this);
      this.H = 45e3;
      this.J = null;
      this.o = false;
      this.u = this.B = this.A = this.M = this.F = this.T = this.D = null;
      this.G = [];
      this.g = null;
      this.C = 0;
      this.m = this.v = null;
      this.X = -1;
      this.K = false;
      this.P = 0;
      this.O = null;
      this.W = this.L = this.U = this.R = false;
      this.h = new zb();
    }
    function zb() {
      this.i = null;
      this.g = "";
      this.h = false;
    }
    var Ab = {}, Bb = {};
    function Cb(a3, b2, c3) {
      a3.M = 1;
      a3.A = Db(O3(b2));
      a3.u = c3;
      a3.R = true;
      Eb(a3, null);
    }
    function Eb(a3, b2) {
      a3.F = Date.now();
      Fb(a3);
      a3.B = O3(a3.A);
      var c3 = a3.B, d3 = a3.S;
      Array.isArray(d3) || (d3 = [String(d3)]);
      Gb(c3.i, "t", d3);
      a3.C = 0;
      c3 = a3.j.L;
      a3.h = new zb();
      a3.g = Hb(a3.j, c3 ? b2 : null, !a3.u);
      a3.P > 0 && (a3.O = new Ya(p3(a3.Y, a3, a3.g), a3.P));
      b2 = a3.V;
      c3 = a3.g;
      d3 = a3.ba;
      var e3 = "readystatechange";
      Array.isArray(e3) || (e3 && (Za[0] = e3.toString()), e3 = Za);
      for (let f4 = 0; f4 < e3.length; f4++) {
        const g2 = Ka(c3, e3[f4], d3 || b2.handleEvent, false, b2.h || b2);
        if (!g2) break;
        b2.g[g2.key] = g2;
      }
      b2 = a3.J ? Ba(a3.J) : {};
      a3.u ? (a3.v || (a3.v = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a3.g.ea(
        a3.B,
        a3.v,
        a3.u,
        b2
      )) : (a3.v = "GET", a3.g.ea(a3.B, a3.v, null, b2));
      lb();
      qb(a3.i, a3.v, a3.B, a3.l, a3.S, a3.u);
    }
    N3.prototype.ba = function(a3) {
      a3 = a3.target;
      const b2 = this.O;
      b2 && P2(a3) == 3 ? b2.j() : this.Y(a3);
    };
    N3.prototype.Y = function(a3) {
      try {
        if (a3 == this.g) a: {
          const k4 = P2(this.g), q4 = this.g.ya(), m3 = this.g.ca();
          if (!(k4 < 3) && (k4 != 3 || this.g && (this.h.h || this.g.la() || Ib(this.g)))) {
            this.K || k4 != 4 || q4 == 7 || (q4 == 8 || m3 <= 0 ? lb(3) : lb(2));
            Jb(this);
            var b2 = this.g.ca();
            this.X = b2;
            var c3 = Kb(this);
            this.o = b2 == 200;
            rb(this.i, this.v, this.B, this.l, this.S, k4, b2);
            if (this.o) {
              if (this.U && !this.L) {
                b: {
                  if (this.g) {
                    var d3, e3 = this.g;
                    if ((d3 = e3.g ? e3.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !y3(d3)) {
                      var f4 = d3;
                      break b;
                    }
                  }
                  f4 = null;
                }
                if (a3 = f4) K3(this.i, this.l, a3, "Initial handshake response via X-HTTP-Initial-Response"), this.L = true, Lb(this, a3);
                else {
                  this.o = false;
                  this.m = 3;
                  J3(12);
                  Q3(this);
                  Mb(this);
                  break a;
                }
              }
              if (this.R) {
                a3 = true;
                let r3;
                for (; !this.K && this.C < c3.length; ) if (r3 = Nb(this, c3), r3 == Bb) {
                  k4 == 4 && (this.m = 4, J3(14), a3 = false);
                  K3(this.i, this.l, null, "[Incomplete Response]");
                  break;
                } else if (r3 == Ab) {
                  this.m = 4;
                  J3(15);
                  K3(this.i, this.l, c3, "[Invalid Chunk]");
                  a3 = false;
                  break;
                } else K3(this.i, this.l, r3, null), Lb(this, r3);
                Ob(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0);
                k4 != 4 || c3.length != 0 || this.h.h || (this.m = 1, J3(16), a3 = false);
                this.o = this.o && a3;
                if (!a3) K3(
                  this.i,
                  this.l,
                  c3,
                  "[Invalid Chunked Response]"
                ), Q3(this), Mb(this);
                else if (c3.length > 0 && !this.W) {
                  this.W = true;
                  var g2 = this.j;
                  g2.g == this && g2.aa && !g2.P && (g2.j.info("Great, no buffering proxy detected. Bytes received: " + c3.length), Pb(g2), g2.P = true, J3(11));
                }
              } else K3(this.i, this.l, c3, null), Lb(this, c3);
              k4 == 4 && Q3(this);
              this.o && !this.K && (k4 == 4 ? Qb(this.j, this) : (this.o = false, Fb(this)));
            } else Rb(this.g), b2 == 400 && c3.indexOf("Unknown SID") > 0 ? (this.m = 3, J3(12)) : (this.m = 0, J3(13)), Q3(this), Mb(this);
          }
        }
      } catch (k4) {
      } finally {
      }
    };
    function Kb(a3) {
      if (!Ob(a3)) return a3.g.la();
      const b2 = Ib(a3.g);
      if (b2 === "") return "";
      let c3 = "";
      const d3 = b2.length, e3 = P2(a3.g) == 4;
      if (!a3.h.i) {
        if (typeof TextDecoder === "undefined") return Q3(a3), Mb(a3), "";
        a3.h.i = new l3.TextDecoder();
      }
      for (let f4 = 0; f4 < d3; f4++) a3.h.h = true, c3 += a3.h.i.decode(b2[f4], { stream: !(e3 && f4 == d3 - 1) });
      b2.length = 0;
      a3.h.g += c3;
      a3.C = 0;
      return a3.h.g;
    }
    function Ob(a3) {
      return a3.g ? a3.v == "GET" && a3.M != 2 && a3.j.Aa : false;
    }
    function Nb(a3, b2) {
      var c3 = a3.C, d3 = b2.indexOf("\n", c3);
      if (d3 == -1) return Bb;
      c3 = Number(b2.substring(c3, d3));
      if (isNaN(c3)) return Ab;
      d3 += 1;
      if (d3 + c3 > b2.length) return Bb;
      b2 = b2.slice(d3, d3 + c3);
      a3.C = d3 + c3;
      return b2;
    }
    N3.prototype.cancel = function() {
      this.K = true;
      Q3(this);
    };
    function Fb(a3) {
      a3.T = Date.now() + a3.H;
      Sb(a3, a3.H);
    }
    function Sb(a3, b2) {
      if (a3.D != null) throw Error("WatchDog timer not null");
      a3.D = ob(p3(a3.aa, a3), b2);
    }
    function Jb(a3) {
      a3.D && (l3.clearTimeout(a3.D), a3.D = null);
    }
    N3.prototype.aa = function() {
      this.D = null;
      const a3 = Date.now();
      a3 - this.T >= 0 ? (tb(this.i, this.B), this.M != 2 && (lb(), J3(17)), Q3(this), this.m = 2, Mb(this)) : Sb(this, this.T - a3);
    };
    function Mb(a3) {
      a3.j.I == 0 || a3.K || Qb(a3.j, a3);
    }
    function Q3(a3) {
      Jb(a3);
      var b2 = a3.O;
      b2 && typeof b2.dispose == "function" && b2.dispose();
      a3.O = null;
      $a(a3.V);
      a3.g && (b2 = a3.g, a3.g = null, b2.abort(), b2.dispose());
    }
    function Lb(a3, b2) {
      try {
        var c3 = a3.j;
        if (c3.I != 0 && (c3.g == a3 || Tb(c3.h, a3))) {
          if (!a3.L && Tb(c3.h, a3) && c3.I == 3) {
            try {
              var d3 = c3.Ba.g.parse(b2);
            } catch (m3) {
              d3 = null;
            }
            if (Array.isArray(d3) && d3.length == 3) {
              var e3 = d3;
              if (e3[0] == 0) a: {
                if (!c3.v) {
                  if (c3.g) if (c3.g.F + 3e3 < a3.F) Ub(c3), Vb(c3);
                  else break a;
                  Wb(c3);
                  J3(18);
                }
              }
              else c3.xa = e3[1], 0 < c3.xa - c3.K && e3[2] < 37500 && c3.F && c3.A == 0 && !c3.C && (c3.C = ob(p3(c3.Va, c3), 6e3));
              Xb(c3.h) <= 1 && c3.ta && (c3.ta = void 0);
            } else R2(c3, 11);
          } else if ((a3.L || c3.g == a3) && Ub(c3), !y3(b2)) for (e3 = c3.Ba.g.parse(b2), b2 = 0; b2 < e3.length; b2++) {
            let m3 = e3[b2];
            const r3 = m3[0];
            if (!(r3 <= c3.K)) if (c3.K = r3, m3 = m3[1], c3.I == 2) if (m3[0] == "c") {
              c3.M = m3[1];
              c3.ba = m3[2];
              const A2 = m3[3];
              A2 != null && (c3.ka = A2, c3.j.info("VER=" + c3.ka));
              const M2 = m3[4];
              M2 != null && (c3.za = M2, c3.j.info("SVER=" + c3.za));
              const F2 = m3[5];
              F2 != null && typeof F2 === "number" && F2 > 0 && (d3 = 1.5 * F2, c3.O = d3, c3.j.info("backChannelRequestTimeoutMs_=" + d3));
              d3 = c3;
              const G2 = a3.g;
              if (G2) {
                const za = G2.g ? G2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (za) {
                  var f4 = d3.h;
                  f4.g || za.indexOf("spdy") == -1 && za.indexOf("quic") == -1 && za.indexOf("h2") == -1 || (f4.j = f4.l, f4.g = /* @__PURE__ */ new Set(), f4.h && (Yb(f4, f4.h), f4.h = null));
                }
                if (d3.G) {
                  const bb = G2.g ? G2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  bb && (d3.wa = bb, S2(d3.J, d3.G, bb));
                }
              }
              c3.I = 3;
              c3.l && c3.l.ra();
              c3.aa && (c3.T = Date.now() - a3.F, c3.j.info("Handshake RTT: " + c3.T + "ms"));
              d3 = c3;
              var g2 = a3;
              d3.na = Zb(d3, d3.L ? d3.ba : null, d3.W);
              if (g2.L) {
                $b(d3.h, g2);
                var k4 = g2, q4 = d3.O;
                q4 && (k4.H = q4);
                k4.D && (Jb(k4), Fb(k4));
                d3.g = g2;
              } else ac(d3);
              c3.i.length > 0 && bc(c3);
            } else m3[0] != "stop" && m3[0] != "close" || R2(c3, 7);
            else c3.I == 3 && (m3[0] == "stop" || m3[0] == "close" ? m3[0] == "stop" ? R2(c3, 7) : cc(c3) : m3[0] != "noop" && c3.l && c3.l.qa(m3), c3.A = 0);
          }
        }
        lb(4);
      } catch (m3) {
      }
    }
    var dc = class {
      constructor(a3, b2) {
        this.g = a3;
        this.map = b2;
      }
    };
    function ec(a3) {
      this.l = a3 || 10;
      l3.PerformanceNavigationTiming ? (a3 = l3.performance.getEntriesByType("navigation"), a3 = a3.length > 0 && (a3[0].nextHopProtocol == "hq" || a3[0].nextHopProtocol == "h2")) : a3 = !!(l3.chrome && l3.chrome.loadTimes && l3.chrome.loadTimes() && l3.chrome.loadTimes().wasFetchedViaSpdy);
      this.j = a3 ? this.l : 1;
      this.g = null;
      this.j > 1 && (this.g = /* @__PURE__ */ new Set());
      this.h = null;
      this.i = [];
    }
    function fc(a3) {
      return a3.h ? true : a3.g ? a3.g.size >= a3.j : false;
    }
    function Xb(a3) {
      return a3.h ? 1 : a3.g ? a3.g.size : 0;
    }
    function Tb(a3, b2) {
      return a3.h ? a3.h == b2 : a3.g ? a3.g.has(b2) : false;
    }
    function Yb(a3, b2) {
      a3.g ? a3.g.add(b2) : a3.h = b2;
    }
    function $b(a3, b2) {
      a3.h && a3.h == b2 ? a3.h = null : a3.g && a3.g.has(b2) && a3.g.delete(b2);
    }
    ec.prototype.cancel = function() {
      this.i = hc(this);
      if (this.h) this.h.cancel(), this.h = null;
      else if (this.g && this.g.size !== 0) {
        for (const a3 of this.g.values()) a3.cancel();
        this.g.clear();
      }
    };
    function hc(a3) {
      if (a3.h != null) return a3.i.concat(a3.h.G);
      if (a3.g != null && a3.g.size !== 0) {
        let b2 = a3.i;
        for (const c3 of a3.g.values()) b2 = b2.concat(c3.G);
        return b2;
      }
      return ja(a3.i);
    }
    var ic = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function jc(a3, b2) {
      if (a3) {
        a3 = a3.split("&");
        for (let c3 = 0; c3 < a3.length; c3++) {
          const d3 = a3[c3].indexOf("=");
          let e3, f4 = null;
          d3 >= 0 ? (e3 = a3[c3].substring(0, d3), f4 = a3[c3].substring(d3 + 1)) : e3 = a3[c3];
          b2(e3, f4 ? decodeURIComponent(f4.replace(/\+/g, " ")) : "");
        }
      }
    }
    function T3(a3) {
      this.g = this.o = this.j = "";
      this.u = null;
      this.m = this.h = "";
      this.l = false;
      let b2;
      a3 instanceof T3 ? (this.l = a3.l, kc(this, a3.j), this.o = a3.o, this.g = a3.g, lc(this, a3.u), this.h = a3.h, mc(this, nc(a3.i)), this.m = a3.m) : a3 && (b2 = String(a3).match(ic)) ? (this.l = false, kc(this, b2[1] || "", true), this.o = oc(b2[2] || ""), this.g = oc(b2[3] || "", true), lc(this, b2[4]), this.h = oc(b2[5] || "", true), mc(this, b2[6] || "", true), this.m = oc(b2[7] || "")) : (this.l = false, this.i = new pc(null, this.l));
    }
    T3.prototype.toString = function() {
      const a3 = [];
      var b2 = this.j;
      b2 && a3.push(qc(b2, rc, true), ":");
      var c3 = this.g;
      if (c3 || b2 == "file") a3.push("//"), (b2 = this.o) && a3.push(qc(b2, rc, true), "@"), a3.push(L3(c3).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c3 = this.u, c3 != null && a3.push(":", String(c3));
      if (c3 = this.h) this.g && c3.charAt(0) != "/" && a3.push("/"), a3.push(qc(c3, c3.charAt(0) == "/" ? sc : tc, true));
      (c3 = this.i.toString()) && a3.push("?", c3);
      (c3 = this.m) && a3.push("#", qc(c3, uc));
      return a3.join("");
    };
    T3.prototype.resolve = function(a3) {
      const b2 = O3(this);
      let c3 = !!a3.j;
      c3 ? kc(b2, a3.j) : c3 = !!a3.o;
      c3 ? b2.o = a3.o : c3 = !!a3.g;
      c3 ? b2.g = a3.g : c3 = a3.u != null;
      var d3 = a3.h;
      if (c3) lc(b2, a3.u);
      else if (c3 = !!a3.h) {
        if (d3.charAt(0) != "/") if (this.g && !this.h) d3 = "/" + d3;
        else {
          var e3 = b2.h.lastIndexOf("/");
          e3 != -1 && (d3 = b2.h.slice(0, e3 + 1) + d3);
        }
        e3 = d3;
        if (e3 == ".." || e3 == ".") d3 = "";
        else if (e3.indexOf("./") != -1 || e3.indexOf("/.") != -1) {
          d3 = e3.lastIndexOf("/", 0) == 0;
          e3 = e3.split("/");
          const f4 = [];
          for (let g2 = 0; g2 < e3.length; ) {
            const k4 = e3[g2++];
            k4 == "." ? d3 && g2 == e3.length && f4.push("") : k4 == ".." ? ((f4.length > 1 || f4.length == 1 && f4[0] != "") && f4.pop(), d3 && g2 == e3.length && f4.push("")) : (f4.push(k4), d3 = true);
          }
          d3 = f4.join("/");
        } else d3 = e3;
      }
      c3 ? b2.h = d3 : c3 = a3.i.toString() !== "";
      c3 ? mc(b2, nc(a3.i)) : c3 = !!a3.m;
      c3 && (b2.m = a3.m);
      return b2;
    };
    function O3(a3) {
      return new T3(a3);
    }
    function kc(a3, b2, c3) {
      a3.j = c3 ? oc(b2, true) : b2;
      a3.j && (a3.j = a3.j.replace(/:$/, ""));
    }
    function lc(a3, b2) {
      if (b2) {
        b2 = Number(b2);
        if (isNaN(b2) || b2 < 0) throw Error("Bad port number " + b2);
        a3.u = b2;
      } else a3.u = null;
    }
    function mc(a3, b2, c3) {
      b2 instanceof pc ? (a3.i = b2, vc(a3.i, a3.l)) : (c3 || (b2 = qc(b2, wc)), a3.i = new pc(b2, a3.l));
    }
    function S2(a3, b2, c3) {
      a3.i.set(b2, c3);
    }
    function Db(a3) {
      S2(a3, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36));
      return a3;
    }
    function oc(a3, b2) {
      return a3 ? b2 ? decodeURI(a3.replace(/%25/g, "%2525")) : decodeURIComponent(a3) : "";
    }
    function qc(a3, b2, c3) {
      return typeof a3 === "string" ? (a3 = encodeURI(a3).replace(b2, xc), c3 && (a3 = a3.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a3) : null;
    }
    function xc(a3) {
      a3 = a3.charCodeAt(0);
      return "%" + (a3 >> 4 & 15).toString(16) + (a3 & 15).toString(16);
    }
    var rc = /[#\/\?@]/g, tc = /[#\?:]/g, sc = /[#\?]/g, wc = /[#\?@]/g, uc = /#/g;
    function pc(a3, b2) {
      this.h = this.g = null;
      this.i = a3 || null;
      this.j = !!b2;
    }
    function U2(a3) {
      a3.g || (a3.g = /* @__PURE__ */ new Map(), a3.h = 0, a3.i && jc(a3.i, function(b2, c3) {
        a3.add(decodeURIComponent(b2.replace(/\+/g, " ")), c3);
      }));
    }
    h3 = pc.prototype;
    h3.add = function(a3, b2) {
      U2(this);
      this.i = null;
      a3 = V2(this, a3);
      let c3 = this.g.get(a3);
      c3 || this.g.set(a3, c3 = []);
      c3.push(b2);
      this.h += 1;
      return this;
    };
    function yc(a3, b2) {
      U2(a3);
      b2 = V2(a3, b2);
      a3.g.has(b2) && (a3.i = null, a3.h -= a3.g.get(b2).length, a3.g.delete(b2));
    }
    function zc(a3, b2) {
      U2(a3);
      b2 = V2(a3, b2);
      return a3.g.has(b2);
    }
    h3.forEach = function(a3, b2) {
      U2(this);
      this.g.forEach(function(c3, d3) {
        c3.forEach(function(e3) {
          a3.call(b2, e3, d3, this);
        }, this);
      }, this);
    };
    function Ac(a3, b2) {
      U2(a3);
      let c3 = [];
      if (typeof b2 === "string") zc(a3, b2) && (c3 = c3.concat(a3.g.get(V2(a3, b2))));
      else for (a3 = Array.from(a3.g.values()), b2 = 0; b2 < a3.length; b2++) c3 = c3.concat(a3[b2]);
      return c3;
    }
    h3.set = function(a3, b2) {
      U2(this);
      this.i = null;
      a3 = V2(this, a3);
      zc(this, a3) && (this.h -= this.g.get(a3).length);
      this.g.set(a3, [b2]);
      this.h += 1;
      return this;
    };
    h3.get = function(a3, b2) {
      if (!a3) return b2;
      a3 = Ac(this, a3);
      return a3.length > 0 ? String(a3[0]) : b2;
    };
    function Gb(a3, b2, c3) {
      yc(a3, b2);
      c3.length > 0 && (a3.i = null, a3.g.set(V2(a3, b2), ja(c3)), a3.h += c3.length);
    }
    h3.toString = function() {
      if (this.i) return this.i;
      if (!this.g) return "";
      const a3 = [], b2 = Array.from(this.g.keys());
      for (let d3 = 0; d3 < b2.length; d3++) {
        var c3 = b2[d3];
        const e3 = L3(c3);
        c3 = Ac(this, c3);
        for (let f4 = 0; f4 < c3.length; f4++) {
          let g2 = e3;
          c3[f4] !== "" && (g2 += "=" + L3(c3[f4]));
          a3.push(g2);
        }
      }
      return this.i = a3.join("&");
    };
    function nc(a3) {
      const b2 = new pc();
      b2.i = a3.i;
      a3.g && (b2.g = new Map(a3.g), b2.h = a3.h);
      return b2;
    }
    function V2(a3, b2) {
      b2 = String(b2);
      a3.j && (b2 = b2.toLowerCase());
      return b2;
    }
    function vc(a3, b2) {
      b2 && !a3.j && (U2(a3), a3.i = null, a3.g.forEach(function(c3, d3) {
        const e3 = d3.toLowerCase();
        d3 != e3 && (yc(this, d3), Gb(this, e3, c3));
      }, a3));
      a3.j = b2;
    }
    function Bc(a3, b2) {
      const c3 = new pb();
      if (l3.Image) {
        const d3 = new Image();
        d3.onload = ha(W, c3, "TestLoadImage: loaded", true, b2, d3);
        d3.onerror = ha(W, c3, "TestLoadImage: error", false, b2, d3);
        d3.onabort = ha(W, c3, "TestLoadImage: abort", false, b2, d3);
        d3.ontimeout = ha(W, c3, "TestLoadImage: timeout", false, b2, d3);
        l3.setTimeout(function() {
          if (d3.ontimeout) d3.ontimeout();
        }, 1e4);
        d3.src = a3;
      } else b2(false);
    }
    function Cc(a3, b2) {
      const c3 = new pb(), d3 = new AbortController(), e3 = setTimeout(() => {
        d3.abort();
        W(c3, "TestPingServer: timeout", false, b2);
      }, 1e4);
      fetch(a3, { signal: d3.signal }).then((f4) => {
        clearTimeout(e3);
        f4.ok ? W(c3, "TestPingServer: ok", true, b2) : W(c3, "TestPingServer: server error", false, b2);
      }).catch(() => {
        clearTimeout(e3);
        W(c3, "TestPingServer: error", false, b2);
      });
    }
    function W(a3, b2, c3, d3, e3) {
      try {
        e3 && (e3.onload = null, e3.onerror = null, e3.onabort = null, e3.ontimeout = null), d3(c3);
      } catch (f4) {
      }
    }
    function Dc() {
      this.g = new db2();
    }
    function Ec(a3) {
      this.i = a3.Sb || null;
      this.h = a3.ab || false;
    }
    t3(Ec, eb);
    Ec.prototype.g = function() {
      return new Fc(this.i, this.h);
    };
    function Fc(a3, b2) {
      C3.call(this);
      this.H = a3;
      this.o = b2;
      this.m = void 0;
      this.status = this.readyState = 0;
      this.responseType = this.responseText = this.response = this.statusText = "";
      this.onreadystatechange = null;
      this.A = new Headers();
      this.h = null;
      this.F = "GET";
      this.D = "";
      this.g = false;
      this.B = this.j = this.l = null;
      this.v = new AbortController();
    }
    t3(Fc, C3);
    h3 = Fc.prototype;
    h3.open = function(a3, b2) {
      if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
      this.F = a3;
      this.D = b2;
      this.readyState = 1;
      Gc(this);
    };
    h3.send = function(a3) {
      if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
      if (this.v.signal.aborted) throw this.abort(), Error("Request was aborted.");
      this.g = true;
      const b2 = { headers: this.A, method: this.F, credentials: this.m, cache: void 0, signal: this.v.signal };
      a3 && (b2.body = a3);
      (this.H || l3).fetch(new Request(this.D, b2)).then(this.Pa.bind(this), this.ga.bind(this));
    };
    h3.abort = function() {
      this.response = this.responseText = "";
      this.A = new Headers();
      this.status = 0;
      this.v.abort();
      this.j && this.j.cancel("Request was aborted.").catch(() => {
      });
      this.readyState >= 1 && this.g && this.readyState != 4 && (this.g = false, Hc(this));
      this.readyState = 0;
    };
    h3.Pa = function(a3) {
      if (this.g && (this.l = a3, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a3.headers, this.readyState = 2, Gc(this)), this.g && (this.readyState = 3, Gc(this), this.g))) if (this.responseType === "arraybuffer") a3.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
      else if (typeof l3.ReadableStream !== "undefined" && "body" in a3) {
        this.j = a3.body.getReader();
        if (this.o) {
          if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = [];
        } else this.response = this.responseText = "", this.B = new TextDecoder();
        Ic(this);
      } else a3.text().then(this.Oa.bind(this), this.ga.bind(this));
    };
    function Ic(a3) {
      a3.j.read().then(a3.Ma.bind(a3)).catch(a3.ga.bind(a3));
    }
    h3.Ma = function(a3) {
      if (this.g) {
        if (this.o && a3.value) this.response.push(a3.value);
        else if (!this.o) {
          var b2 = a3.value ? a3.value : new Uint8Array(0);
          if (b2 = this.B.decode(b2, { stream: !a3.done })) this.response = this.responseText += b2;
        }
        a3.done ? Hc(this) : Gc(this);
        this.readyState == 3 && Ic(this);
      }
    };
    h3.Oa = function(a3) {
      this.g && (this.response = this.responseText = a3, Hc(this));
    };
    h3.Na = function(a3) {
      this.g && (this.response = a3, Hc(this));
    };
    h3.ga = function() {
      this.g && Hc(this);
    };
    function Hc(a3) {
      a3.readyState = 4;
      a3.l = null;
      a3.j = null;
      a3.B = null;
      Gc(a3);
    }
    h3.setRequestHeader = function(a3, b2) {
      this.A.append(a3, b2);
    };
    h3.getResponseHeader = function(a3) {
      return this.h ? this.h.get(a3.toLowerCase()) || "" : "";
    };
    h3.getAllResponseHeaders = function() {
      if (!this.h) return "";
      const a3 = [], b2 = this.h.entries();
      for (var c3 = b2.next(); !c3.done; ) c3 = c3.value, a3.push(c3[0] + ": " + c3[1]), c3 = b2.next();
      return a3.join("\r\n");
    };
    function Gc(a3) {
      a3.onreadystatechange && a3.onreadystatechange.call(a3);
    }
    Object.defineProperty(Fc.prototype, "withCredentials", { get: function() {
      return this.m === "include";
    }, set: function(a3) {
      this.m = a3 ? "include" : "same-origin";
    } });
    function Jc(a3) {
      let b2 = "";
      ya(a3, function(c3, d3) {
        b2 += d3;
        b2 += ":";
        b2 += c3;
        b2 += "\r\n";
      });
      return b2;
    }
    function Kc(a3, b2, c3) {
      a: {
        for (d3 in c3) {
          var d3 = false;
          break a;
        }
        d3 = true;
      }
      d3 || (c3 = Jc(c3), typeof a3 === "string" ? c3 != null && L3(c3) : S2(a3, b2, c3));
    }
    function X3(a3) {
      C3.call(this);
      this.headers = /* @__PURE__ */ new Map();
      this.L = a3 || null;
      this.h = false;
      this.g = null;
      this.D = "";
      this.o = 0;
      this.l = "";
      this.j = this.B = this.v = this.A = false;
      this.m = null;
      this.F = "";
      this.H = false;
    }
    t3(X3, C3);
    var Lc = /^https?$/i, Mc = ["POST", "PUT"];
    h3 = X3.prototype;
    h3.Fa = function(a3) {
      this.H = a3;
    };
    h3.ea = function(a3, b2, c3, d3) {
      if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a3);
      b2 = b2 ? b2.toUpperCase() : "GET";
      this.D = a3;
      this.l = "";
      this.o = 0;
      this.A = false;
      this.h = true;
      this.g = this.L ? this.L.g() : wb.g();
      this.g.onreadystatechange = ia(p3(this.Ca, this));
      try {
        this.B = true, this.g.open(b2, String(a3), true), this.B = false;
      } catch (f4) {
        Nc(this, f4);
        return;
      }
      a3 = c3 || "";
      c3 = new Map(this.headers);
      if (d3) if (Object.getPrototypeOf(d3) === Object.prototype) for (var e3 in d3) c3.set(e3, d3[e3]);
      else if (typeof d3.keys === "function" && typeof d3.get === "function") for (const f4 of d3.keys()) c3.set(f4, d3.get(f4));
      else throw Error("Unknown input type for opt_headers: " + String(d3));
      d3 = Array.from(c3.keys()).find((f4) => "content-type" == f4.toLowerCase());
      e3 = l3.FormData && a3 instanceof l3.FormData;
      !(Array.prototype.indexOf.call(Mc, b2, void 0) >= 0) || d3 || e3 || c3.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      for (const [f4, g2] of c3) this.g.setRequestHeader(f4, g2);
      this.F && (this.g.responseType = this.F);
      "withCredentials" in this.g && this.g.withCredentials !== this.H && (this.g.withCredentials = this.H);
      try {
        this.m && (clearTimeout(this.m), this.m = null), this.v = true, this.g.send(a3), this.v = false;
      } catch (f4) {
        Nc(this, f4);
      }
    };
    function Nc(a3, b2) {
      a3.h = false;
      a3.g && (a3.j = true, a3.g.abort(), a3.j = false);
      a3.l = b2;
      a3.o = 5;
      Oc(a3);
      Pc(a3);
    }
    function Oc(a3) {
      a3.A || (a3.A = true, D3(a3, "complete"), D3(a3, "error"));
    }
    h3.abort = function(a3) {
      this.g && this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false, this.o = a3 || 7, D3(this, "complete"), D3(this, "abort"), Pc(this));
    };
    h3.N = function() {
      this.g && (this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false), Pc(this, true));
      X3.Z.N.call(this);
    };
    h3.Ca = function() {
      this.u || (this.B || this.v || this.j ? Qc(this) : this.Xa());
    };
    h3.Xa = function() {
      Qc(this);
    };
    function Qc(a3) {
      if (a3.h && typeof ea != "undefined") {
        if (a3.v && P2(a3) == 4) setTimeout(a3.Ca.bind(a3), 0);
        else if (D3(a3, "readystatechange"), P2(a3) == 4) {
          a3.h = false;
          try {
            const f4 = a3.ca();
            a: switch (f4) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b2 = true;
                break a;
              default:
                b2 = false;
            }
            var c3;
            if (!(c3 = b2)) {
              var d3;
              if (d3 = f4 === 0) {
                let g2 = String(a3.D).match(ic)[1] || null;
                !g2 && l3.self && l3.self.location && (g2 = l3.self.location.protocol.slice(0, -1));
                d3 = !Lc.test(g2 ? g2.toLowerCase() : "");
              }
              c3 = d3;
            }
            if (c3) D3(a3, "complete"), D3(a3, "success");
            else {
              a3.o = 6;
              try {
                var e3 = P2(a3) > 2 ? a3.g.statusText : "";
              } catch (g2) {
                e3 = "";
              }
              a3.l = e3 + " [" + a3.ca() + "]";
              Oc(a3);
            }
          } finally {
            Pc(a3);
          }
        }
      }
    }
    function Pc(a3, b2) {
      if (a3.g) {
        a3.m && (clearTimeout(a3.m), a3.m = null);
        const c3 = a3.g;
        a3.g = null;
        b2 || D3(a3, "ready");
        try {
          c3.onreadystatechange = null;
        } catch (d3) {
        }
      }
    }
    h3.isActive = function() {
      return !!this.g;
    };
    function P2(a3) {
      return a3.g ? a3.g.readyState : 0;
    }
    h3.ca = function() {
      try {
        return P2(this) > 2 ? this.g.status : -1;
      } catch (a3) {
        return -1;
      }
    };
    h3.la = function() {
      try {
        return this.g ? this.g.responseText : "";
      } catch (a3) {
        return "";
      }
    };
    h3.La = function(a3) {
      if (this.g) {
        var b2 = this.g.responseText;
        a3 && b2.indexOf(a3) == 0 && (b2 = b2.substring(a3.length));
        return cb(b2);
      }
    };
    function Ib(a3) {
      try {
        if (!a3.g) return null;
        if ("response" in a3.g) return a3.g.response;
        switch (a3.F) {
          case "":
          case "text":
            return a3.g.responseText;
          case "arraybuffer":
            if ("mozResponseArrayBuffer" in a3.g) return a3.g.mozResponseArrayBuffer;
        }
        return null;
      } catch (b2) {
        return null;
      }
    }
    function Rb(a3) {
      const b2 = {};
      a3 = (a3.g && P2(a3) >= 2 ? a3.g.getAllResponseHeaders() || "" : "").split("\r\n");
      for (let d3 = 0; d3 < a3.length; d3++) {
        if (y3(a3[d3])) continue;
        var c3 = yb(a3[d3]);
        const e3 = c3[0];
        c3 = c3[1];
        if (typeof c3 !== "string") continue;
        c3 = c3.trim();
        const f4 = b2[e3] || [];
        b2[e3] = f4;
        f4.push(c3);
      }
      Aa(b2, function(d3) {
        return d3.join(", ");
      });
    }
    h3.ya = function() {
      return this.o;
    };
    h3.Ha = function() {
      return typeof this.l === "string" ? this.l : String(this.l);
    };
    function Rc(a3, b2, c3) {
      return c3 && c3.internalChannelParams ? c3.internalChannelParams[a3] || b2 : b2;
    }
    function Sc(a3) {
      this.za = 0;
      this.i = [];
      this.j = new pb();
      this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null;
      this.Ya = this.V = 0;
      this.Sa = Rc("failFast", false, a3);
      this.F = this.C = this.v = this.m = this.l = null;
      this.X = true;
      this.xa = this.K = -1;
      this.Y = this.A = this.D = 0;
      this.Qa = Rc("baseRetryDelayMs", 5e3, a3);
      this.Za = Rc("retryDelaySeedMs", 1e4, a3);
      this.Ta = Rc("forwardChannelMaxRetries", 2, a3);
      this.va = Rc("forwardChannelRequestTimeoutMs", 2e4, a3);
      this.ma = a3 && a3.xmlHttpFactory || void 0;
      this.Ua = a3 && a3.Rb || void 0;
      this.Aa = a3 && a3.useFetchStreams || false;
      this.O = void 0;
      this.L = a3 && a3.supportsCrossDomainXhr || false;
      this.M = "";
      this.h = new ec(a3 && a3.concurrentRequestLimit);
      this.Ba = new Dc();
      this.S = a3 && a3.fastHandshake || false;
      this.R = a3 && a3.encodeInitMessageHeaders || false;
      this.S && this.R && (this.R = false);
      this.Ra = a3 && a3.Pb || false;
      a3 && a3.ua && this.j.ua();
      a3 && a3.forceLongPolling && (this.X = false);
      this.aa = !this.S && this.X && a3 && a3.detectBufferingProxy || false;
      this.ia = void 0;
      a3 && a3.longPollingTimeout && a3.longPollingTimeout > 0 && (this.ia = a3.longPollingTimeout);
      this.ta = void 0;
      this.T = 0;
      this.P = false;
      this.ja = this.B = null;
    }
    h3 = Sc.prototype;
    h3.ka = 8;
    h3.I = 1;
    h3.connect = function(a3, b2, c3, d3) {
      J3(0);
      this.W = a3;
      this.H = b2 || {};
      c3 && d3 !== void 0 && (this.H.OSID = c3, this.H.OAID = d3);
      this.F = this.X;
      this.J = Zb(this, null, this.W);
      bc(this);
    };
    function cc(a3) {
      Tc(a3);
      if (a3.I == 3) {
        var b2 = a3.V++, c3 = O3(a3.J);
        S2(c3, "SID", a3.M);
        S2(c3, "RID", b2);
        S2(c3, "TYPE", "terminate");
        Uc(a3, c3);
        b2 = new N3(a3, a3.j, b2);
        b2.M = 2;
        b2.A = Db(O3(c3));
        c3 = false;
        if (l3.navigator && l3.navigator.sendBeacon) try {
          c3 = l3.navigator.sendBeacon(b2.A.toString(), "");
        } catch (d3) {
        }
        !c3 && l3.Image && (new Image().src = b2.A, c3 = true);
        c3 || (b2.g = Hb(b2.j, null), b2.g.ea(b2.A));
        b2.F = Date.now();
        Fb(b2);
      }
      Vc(a3);
    }
    function Vb(a3) {
      a3.g && (Pb(a3), a3.g.cancel(), a3.g = null);
    }
    function Tc(a3) {
      Vb(a3);
      a3.v && (l3.clearTimeout(a3.v), a3.v = null);
      Ub(a3);
      a3.h.cancel();
      a3.m && (typeof a3.m === "number" && l3.clearTimeout(a3.m), a3.m = null);
    }
    function bc(a3) {
      if (!fc(a3.h) && !a3.m) {
        a3.m = true;
        var b2 = a3.Ea;
        u4 || ta();
        v3 || (u4(), v3 = true);
        oa.add(b2, a3);
        a3.D = 0;
      }
    }
    function Wc(a3, b2) {
      if (Xb(a3.h) >= a3.h.j - (a3.m ? 1 : 0)) return false;
      if (a3.m) return a3.i = b2.G.concat(a3.i), true;
      if (a3.I == 1 || a3.I == 2 || a3.D >= (a3.Sa ? 0 : a3.Ta)) return false;
      a3.m = ob(p3(a3.Ea, a3, b2), Xc(a3, a3.D));
      a3.D++;
      return true;
    }
    h3.Ea = function(a3) {
      if (this.m) if (this.m = null, this.I == 1) {
        if (!a3) {
          this.V = Math.floor(Math.random() * 1e5);
          a3 = this.V++;
          const e3 = new N3(this, this.j, a3);
          let f4 = this.o;
          this.U && (f4 ? (f4 = Ba(f4), Da(f4, this.U)) : f4 = this.U);
          this.u !== null || this.R || (e3.J = f4, f4 = null);
          if (this.S) a: {
            var b2 = 0;
            for (var c3 = 0; c3 < this.i.length; c3++) {
              b: {
                var d3 = this.i[c3];
                if ("__data__" in d3.map && (d3 = d3.map.__data__, typeof d3 === "string")) {
                  d3 = d3.length;
                  break b;
                }
                d3 = void 0;
              }
              if (d3 === void 0) break;
              b2 += d3;
              if (b2 > 4096) {
                b2 = c3;
                break a;
              }
              if (b2 === 4096 || c3 === this.i.length - 1) {
                b2 = c3 + 1;
                break a;
              }
            }
            b2 = 1e3;
          }
          else b2 = 1e3;
          b2 = Yc(this, e3, b2);
          c3 = O3(this.J);
          S2(c3, "RID", a3);
          S2(c3, "CVER", 22);
          this.G && S2(c3, "X-HTTP-Session-Id", this.G);
          Uc(this, c3);
          f4 && (this.R ? b2 = "headers=" + L3(Jc(f4)) + "&" + b2 : this.u && Kc(c3, this.u, f4));
          Yb(this.h, e3);
          this.Ra && S2(c3, "TYPE", "init");
          this.S ? (S2(c3, "$req", b2), S2(c3, "SID", "null"), e3.U = true, Cb(e3, c3, null)) : Cb(e3, c3, b2);
          this.I = 2;
        }
      } else this.I == 3 && (a3 ? Zc(this, a3) : this.i.length == 0 || fc(this.h) || Zc(this));
    };
    function Zc(a3, b2) {
      var c3;
      b2 ? c3 = b2.l : c3 = a3.V++;
      const d3 = O3(a3.J);
      S2(d3, "SID", a3.M);
      S2(d3, "RID", c3);
      S2(d3, "AID", a3.K);
      Uc(a3, d3);
      a3.u && a3.o && Kc(d3, a3.u, a3.o);
      c3 = new N3(a3, a3.j, c3, a3.D + 1);
      a3.u === null && (c3.J = a3.o);
      b2 && (a3.i = b2.G.concat(a3.i));
      b2 = Yc(a3, c3, 1e3);
      c3.H = Math.round(a3.va * 0.5) + Math.round(a3.va * 0.5 * Math.random());
      Yb(a3.h, c3);
      Cb(c3, d3, b2);
    }
    function Uc(a3, b2) {
      a3.H && ya(a3.H, function(c3, d3) {
        S2(b2, d3, c3);
      });
      a3.l && ya({}, function(c3, d3) {
        S2(b2, d3, c3);
      });
    }
    function Yc(a3, b2, c3) {
      c3 = Math.min(a3.i.length, c3);
      const d3 = a3.l ? p3(a3.l.Ka, a3.l, a3) : null;
      a: {
        var e3 = a3.i;
        let k4 = -1;
        for (; ; ) {
          const q4 = ["count=" + c3];
          k4 == -1 ? c3 > 0 ? (k4 = e3[0].g, q4.push("ofs=" + k4)) : k4 = 0 : q4.push("ofs=" + k4);
          let m3 = true;
          for (let r3 = 0; r3 < c3; r3++) {
            var f4 = e3[r3].g;
            const A2 = e3[r3].map;
            f4 -= k4;
            if (f4 < 0) k4 = Math.max(0, e3[r3].g - 100), m3 = false;
            else try {
              f4 = "req" + f4 + "_" || "";
              try {
                var g2 = A2 instanceof Map ? A2 : Object.entries(A2);
                for (const [M2, F2] of g2) {
                  let G2 = F2;
                  n2(F2) && (G2 = ab(F2));
                  q4.push(f4 + M2 + "=" + encodeURIComponent(G2));
                }
              } catch (M2) {
                throw q4.push(f4 + "type=" + encodeURIComponent("_badmap")), M2;
              }
            } catch (M2) {
              d3 && d3(A2);
            }
          }
          if (m3) {
            g2 = q4.join("&");
            break a;
          }
        }
        g2 = void 0;
      }
      a3 = a3.i.splice(0, c3);
      b2.G = a3;
      return g2;
    }
    function ac(a3) {
      if (!a3.g && !a3.v) {
        a3.Y = 1;
        var b2 = a3.Da;
        u4 || ta();
        v3 || (u4(), v3 = true);
        oa.add(b2, a3);
        a3.A = 0;
      }
    }
    function Wb(a3) {
      if (a3.g || a3.v || a3.A >= 3) return false;
      a3.Y++;
      a3.v = ob(p3(a3.Da, a3), Xc(a3, a3.A));
      a3.A++;
      return true;
    }
    h3.Da = function() {
      this.v = null;
      $c(this);
      if (this.aa && !(this.P || this.g == null || this.T <= 0)) {
        var a3 = 4 * this.T;
        this.j.info("BP detection timer enabled: " + a3);
        this.B = ob(p3(this.Wa, this), a3);
      }
    };
    h3.Wa = function() {
      this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = false, this.P = true, J3(10), Vb(this), $c(this));
    };
    function Pb(a3) {
      a3.B != null && (l3.clearTimeout(a3.B), a3.B = null);
    }
    function $c(a3) {
      a3.g = new N3(a3, a3.j, "rpc", a3.Y);
      a3.u === null && (a3.g.J = a3.o);
      a3.g.P = 0;
      var b2 = O3(a3.na);
      S2(b2, "RID", "rpc");
      S2(b2, "SID", a3.M);
      S2(b2, "AID", a3.K);
      S2(b2, "CI", a3.F ? "0" : "1");
      !a3.F && a3.ia && S2(b2, "TO", a3.ia);
      S2(b2, "TYPE", "xmlhttp");
      Uc(a3, b2);
      a3.u && a3.o && Kc(b2, a3.u, a3.o);
      a3.O && (a3.g.H = a3.O);
      var c3 = a3.g;
      a3 = a3.ba;
      c3.M = 1;
      c3.A = Db(O3(b2));
      c3.u = null;
      c3.R = true;
      Eb(c3, a3);
    }
    h3.Va = function() {
      this.C != null && (this.C = null, Vb(this), Wb(this), J3(19));
    };
    function Ub(a3) {
      a3.C != null && (l3.clearTimeout(a3.C), a3.C = null);
    }
    function Qb(a3, b2) {
      var c3 = null;
      if (a3.g == b2) {
        Ub(a3);
        Pb(a3);
        a3.g = null;
        var d3 = 2;
      } else if (Tb(a3.h, b2)) c3 = b2.G, $b(a3.h, b2), d3 = 1;
      else return;
      if (a3.I != 0) {
        if (b2.o) if (d3 == 1) {
          c3 = b2.u ? b2.u.length : 0;
          b2 = Date.now() - b2.F;
          var e3 = a3.D;
          d3 = jb();
          D3(d3, new nb(d3, c3));
          bc(a3);
        } else ac(a3);
        else if (e3 = b2.m, e3 == 3 || e3 == 0 && b2.X > 0 || !(d3 == 1 && Wc(a3, b2) || d3 == 2 && Wb(a3))) switch (c3 && c3.length > 0 && (b2 = a3.h, b2.i = b2.i.concat(c3)), e3) {
          case 1:
            R2(a3, 5);
            break;
          case 4:
            R2(a3, 10);
            break;
          case 3:
            R2(a3, 6);
            break;
          default:
            R2(a3, 2);
        }
      }
    }
    function Xc(a3, b2) {
      let c3 = a3.Qa + Math.floor(Math.random() * a3.Za);
      a3.isActive() || (c3 *= 2);
      return c3 * b2;
    }
    function R2(a3, b2) {
      a3.j.info("Error code " + b2);
      if (b2 == 2) {
        var c3 = p3(a3.bb, a3), d3 = a3.Ua;
        const e3 = !d3;
        d3 = new T3(d3 || "//www.google.com/images/cleardot.gif");
        l3.location && l3.location.protocol == "http" || kc(d3, "https");
        Db(d3);
        e3 ? Bc(d3.toString(), c3) : Cc(d3.toString(), c3);
      } else J3(2);
      a3.I = 0;
      a3.l && a3.l.pa(b2);
      Vc(a3);
      Tc(a3);
    }
    h3.bb = function(a3) {
      a3 ? (this.j.info("Successfully pinged google.com"), J3(2)) : (this.j.info("Failed to ping google.com"), J3(1));
    };
    function Vc(a3) {
      a3.I = 0;
      a3.ja = [];
      if (a3.l) {
        const b2 = hc(a3.h);
        if (b2.length != 0 || a3.i.length != 0) ka(a3.ja, b2), ka(a3.ja, a3.i), a3.h.i.length = 0, ja(a3.i), a3.i.length = 0;
        a3.l.oa();
      }
    }
    function Zb(a3, b2, c3) {
      var d3 = c3 instanceof T3 ? O3(c3) : new T3(c3);
      if (d3.g != "") b2 && (d3.g = b2 + "." + d3.g), lc(d3, d3.u);
      else {
        var e3 = l3.location;
        d3 = e3.protocol;
        b2 = b2 ? b2 + "." + e3.hostname : e3.hostname;
        e3 = +e3.port;
        const f4 = new T3(null);
        d3 && kc(f4, d3);
        b2 && (f4.g = b2);
        e3 && lc(f4, e3);
        c3 && (f4.h = c3);
        d3 = f4;
      }
      c3 = a3.G;
      b2 = a3.wa;
      c3 && b2 && S2(d3, c3, b2);
      S2(d3, "VER", a3.ka);
      Uc(a3, d3);
      return d3;
    }
    function Hb(a3, b2, c3) {
      if (b2 && !a3.L) throw Error("Can't create secondary domain capable XhrIo object.");
      b2 = a3.Aa && !a3.ma ? new X3(new Ec({ ab: c3 })) : new X3(a3.ma);
      b2.Fa(a3.L);
      return b2;
    }
    h3.isActive = function() {
      return !!this.l && this.l.isActive(this);
    };
    function ad() {
    }
    h3 = ad.prototype;
    h3.ra = function() {
    };
    h3.qa = function() {
    };
    h3.pa = function() {
    };
    h3.oa = function() {
    };
    h3.isActive = function() {
      return true;
    };
    h3.Ka = function() {
    };
    function bd() {
    }
    bd.prototype.g = function(a3, b2) {
      return new Y2(a3, b2);
    };
    function Y2(a3, b2) {
      C3.call(this);
      this.g = new Sc(b2);
      this.l = a3;
      this.h = b2 && b2.messageUrlParams || null;
      a3 = b2 && b2.messageHeaders || null;
      b2 && b2.clientProtocolHeaderRequired && (a3 ? a3["X-Client-Protocol"] = "webchannel" : a3 = { "X-Client-Protocol": "webchannel" });
      this.g.o = a3;
      a3 = b2 && b2.initMessageHeaders || null;
      b2 && b2.messageContentType && (a3 ? a3["X-WebChannel-Content-Type"] = b2.messageContentType : a3 = { "X-WebChannel-Content-Type": b2.messageContentType });
      b2 && b2.sa && (a3 ? a3["X-WebChannel-Client-Profile"] = b2.sa : a3 = { "X-WebChannel-Client-Profile": b2.sa });
      this.g.U = a3;
      (a3 = b2 && b2.Qb) && !y3(a3) && (this.g.u = a3);
      this.A = b2 && b2.supportsCrossDomainXhr || false;
      this.v = b2 && b2.sendRawJson || false;
      (b2 = b2 && b2.httpSessionIdParam) && !y3(b2) && (this.g.G = b2, a3 = this.h, a3 !== null && b2 in a3 && (a3 = this.h, b2 in a3 && delete a3[b2]));
      this.j = new Z(this);
    }
    t3(Y2, C3);
    Y2.prototype.m = function() {
      this.g.l = this.j;
      this.A && (this.g.L = true);
      this.g.connect(this.l, this.h || void 0);
    };
    Y2.prototype.close = function() {
      cc(this.g);
    };
    Y2.prototype.o = function(a3) {
      var b2 = this.g;
      if (typeof a3 === "string") {
        var c3 = {};
        c3.__data__ = a3;
        a3 = c3;
      } else this.v && (c3 = {}, c3.__data__ = ab(a3), a3 = c3);
      b2.i.push(new dc(b2.Ya++, a3));
      b2.I == 3 && bc(b2);
    };
    Y2.prototype.N = function() {
      this.g.l = null;
      delete this.j;
      cc(this.g);
      delete this.g;
      Y2.Z.N.call(this);
    };
    function cd(a3) {
      gb.call(this);
      a3.__headers__ && (this.headers = a3.__headers__, this.statusCode = a3.__status__, delete a3.__headers__, delete a3.__status__);
      var b2 = a3.__sm__;
      if (b2) {
        a: {
          for (const c3 in b2) {
            a3 = c3;
            break a;
          }
          a3 = void 0;
        }
        if (this.i = a3) a3 = this.i, b2 = b2 !== null && a3 in b2 ? b2[a3] : void 0;
        this.data = b2;
      } else this.data = a3;
    }
    t3(cd, gb);
    function dd() {
      hb.call(this);
      this.status = 1;
    }
    t3(dd, hb);
    function Z(a3) {
      this.g = a3;
    }
    t3(Z, ad);
    Z.prototype.ra = function() {
      D3(this.g, "a");
    };
    Z.prototype.qa = function(a3) {
      D3(this.g, new cd(a3));
    };
    Z.prototype.pa = function(a3) {
      D3(this.g, new dd());
    };
    Z.prototype.oa = function() {
      D3(this.g, "b");
    };
    bd.prototype.createWebChannel = bd.prototype.g;
    Y2.prototype.send = Y2.prototype.o;
    Y2.prototype.open = Y2.prototype.m;
    Y2.prototype.close = Y2.prototype.close;
    createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
      return new bd();
    };
    getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
      return jb();
    };
    Event = webchannel_blob_es2018.Event = I2;
    Stat = webchannel_blob_es2018.Stat = { jb: 0, mb: 1, nb: 2, Hb: 3, Mb: 4, Jb: 5, Kb: 6, Ib: 7, Gb: 8, Lb: 9, PROXY: 10, NOPROXY: 11, Eb: 12, Ab: 13, Bb: 14, zb: 15, Cb: 16, Db: 17, fb: 18, eb: 19, gb: 20 };
    ub.NO_ERROR = 0;
    ub.TIMEOUT = 8;
    ub.HTTP_ERROR = 6;
    ErrorCode = webchannel_blob_es2018.ErrorCode = ub;
    vb.COMPLETE = "complete";
    EventType = webchannel_blob_es2018.EventType = vb;
    fb.EventType = H3;
    H3.OPEN = "a";
    H3.CLOSE = "b";
    H3.ERROR = "c";
    H3.MESSAGE = "d";
    C3.prototype.listen = C3.prototype.J;
    WebChannel = webchannel_blob_es2018.WebChannel = fb;
    FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Ec;
    X3.prototype.listenOnce = X3.prototype.K;
    X3.prototype.getLastError = X3.prototype.Ha;
    X3.prototype.getLastErrorCode = X3.prototype.ya;
    X3.prototype.getStatus = X3.prototype.ca;
    X3.prototype.getResponseJson = X3.prototype.La;
    X3.prototype.getResponseText = X3.prototype.la;
    X3.prototype.send = X3.prototype.ea;
    X3.prototype.setWithCredentials = X3.prototype.Fa;
    XhrIo = webchannel_blob_es2018.XhrIo = X3;
  }).apply(typeof commonjsGlobal2 !== "undefined" ? commonjsGlobal2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

  // node_modules/@firebase/firestore/dist/index.esm.js
  var F = "@firebase/firestore";
  var M = "4.9.3";
  var User = class {
    constructor(e3) {
      this.uid = e3;
    }
    isAuthenticated() {
      return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    toKey() {
      return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(e3) {
      return e3.uid === this.uid;
    }
  };
  User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
  // non-FirebaseAuth providers.
  User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
  var x3 = "12.7.0";
  var O2 = new Logger("@firebase/firestore");
  function __PRIVATE_getLogLevel() {
    return O2.logLevel;
  }
  function __PRIVATE_logDebug(e3, ...t3) {
    if (O2.logLevel <= LogLevel.DEBUG) {
      const n2 = t3.map(__PRIVATE_argToString);
      O2.debug(`Firestore (${x3}): ${e3}`, ...n2);
    }
  }
  function __PRIVATE_logError(e3, ...t3) {
    if (O2.logLevel <= LogLevel.ERROR) {
      const n2 = t3.map(__PRIVATE_argToString);
      O2.error(`Firestore (${x3}): ${e3}`, ...n2);
    }
  }
  function __PRIVATE_logWarn(e3, ...t3) {
    if (O2.logLevel <= LogLevel.WARN) {
      const n2 = t3.map(__PRIVATE_argToString);
      O2.warn(`Firestore (${x3}): ${e3}`, ...n2);
    }
  }
  function __PRIVATE_argToString(e3) {
    if ("string" == typeof e3) return e3;
    try {
      return (function __PRIVATE_formatJSON(e4) {
        return JSON.stringify(e4);
      })(e3);
    } catch (t3) {
      return e3;
    }
  }
  function fail(e3, t3, n2) {
    let r3 = "Unexpected state";
    "string" == typeof t3 ? r3 = t3 : n2 = t3, __PRIVATE__fail(e3, r3, n2);
  }
  function __PRIVATE__fail(e3, t3, n2) {
    let r3 = `FIRESTORE (${x3}) INTERNAL ASSERTION FAILED: ${t3} (ID: ${e3.toString(16)})`;
    if (void 0 !== n2) try {
      r3 += " CONTEXT: " + JSON.stringify(n2);
    } catch (e4) {
      r3 += " CONTEXT: " + n2;
    }
    throw __PRIVATE_logError(r3), new Error(r3);
  }
  function __PRIVATE_hardAssert(e3, t3, n2, r3) {
    let i3 = "Unexpected state";
    "string" == typeof n2 ? i3 = n2 : r3 = n2, e3 || __PRIVATE__fail(t3, i3, r3);
  }
  function __PRIVATE_debugCast(e3, t3) {
    return e3;
  }
  var N2 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller cannot be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
  };
  var FirestoreError = class extends FirebaseError {
    /** @hideconstructor */
    constructor(e3, t3) {
      super(e3, t3), this.code = e3, this.message = t3, // HACK: We write a toString property directly because Error is not a real
      // class and so inheritance does not work correctly. We could alternatively
      // do the same "back-door inheritance" trick that FirebaseError does.
      this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
  };
  var __PRIVATE_Deferred = class {
    constructor() {
      this.promise = new Promise(((e3, t3) => {
        this.resolve = e3, this.reject = t3;
      }));
    }
  };
  var __PRIVATE_OAuthToken = class {
    constructor(e3, t3) {
      this.user = t3, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e3}`);
    }
  };
  var __PRIVATE_EmptyAuthCredentialsProvider = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {
    }
    start(e3, t3) {
      e3.enqueueRetryable((() => t3(User.UNAUTHENTICATED)));
    }
    shutdown() {
    }
  };
  var __PRIVATE_EmulatorAuthCredentialsProvider = class {
    constructor(e3) {
      this.token = e3, /**
       * Stores the listener registered with setChangeListener()
       * This isn't actually necessary since the UID never changes, but we use this
       * to verify the listen contract is adhered to in tests.
       */
      this.changeListener = null;
    }
    getToken() {
      return Promise.resolve(this.token);
    }
    invalidateToken() {
    }
    start(e3, t3) {
      this.changeListener = t3, // Fire with initial user.
      e3.enqueueRetryable((() => t3(this.token.user)));
    }
    shutdown() {
      this.changeListener = null;
    }
  };
  var __PRIVATE_FirebaseAuthCredentialsProvider = class {
    constructor(e3) {
      this.t = e3, /** Tracks the current User. */
      this.currentUser = User.UNAUTHENTICATED, /**
       * Counter used to detect if the token changed while a getToken request was
       * outstanding.
       */
      this.i = 0, this.forceRefresh = false, this.auth = null;
    }
    start(e3, t3) {
      __PRIVATE_hardAssert(void 0 === this.o, 42304);
      let n2 = this.i;
      const __PRIVATE_guardedChangeListener = (e4) => this.i !== n2 ? (n2 = this.i, t3(e4)) : Promise.resolve();
      let r3 = new __PRIVATE_Deferred();
      this.o = () => {
        this.i++, this.currentUser = this.u(), r3.resolve(), r3 = new __PRIVATE_Deferred(), e3.enqueueRetryable((() => __PRIVATE_guardedChangeListener(this.currentUser)));
      };
      const __PRIVATE_awaitNextToken = () => {
        const t4 = r3;
        e3.enqueueRetryable((async () => {
          await t4.promise, await __PRIVATE_guardedChangeListener(this.currentUser);
        }));
      }, __PRIVATE_registerAuth = (e4) => {
        __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e4, this.o && (this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken());
      };
      this.t.onInit(((e4) => __PRIVATE_registerAuth(e4))), // Our users can initialize Auth right after Firestore, so we give it
      // a chance to register itself with the component framework before we
      // determine whether to start up in unauthenticated mode.
      setTimeout((() => {
        if (!this.auth) {
          const e4 = this.t.getImmediate({
            optional: true
          });
          e4 ? __PRIVATE_registerAuth(e4) : (
            // If auth is still not available, proceed with `null` user
            (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r3.resolve(), r3 = new __PRIVATE_Deferred())
          );
        }
      }), 0), __PRIVATE_awaitNextToken();
    }
    getToken() {
      const e3 = this.i, t3 = this.forceRefresh;
      return this.forceRefresh = false, this.auth ? this.auth.getToken(t3).then(((t4) => (
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.i !== e3 ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t4 ? (__PRIVATE_hardAssert("string" == typeof t4.accessToken, 31837, {
          l: t4
        }), new __PRIVATE_OAuthToken(t4.accessToken, this.currentUser)) : null
      ))) : Promise.resolve(null);
    }
    invalidateToken() {
      this.forceRefresh = true;
    }
    shutdown() {
      this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    u() {
      const e3 = this.auth && this.auth.getUid();
      return __PRIVATE_hardAssert(null === e3 || "string" == typeof e3, 2055, {
        h: e3
      }), new User(e3);
    }
  };
  var __PRIVATE_FirstPartyToken = class {
    constructor(e3, t3, n2) {
      this.P = e3, this.T = t3, this.I = n2, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.A = /* @__PURE__ */ new Map();
    }
    /**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */
    R() {
      return this.I ? this.I() : null;
    }
    get headers() {
      this.A.set("X-Goog-AuthUser", this.P);
      const e3 = this.R();
      return e3 && this.A.set("Authorization", e3), this.T && this.A.set("X-Goog-Iam-Authorization-Token", this.T), this.A;
    }
  };
  var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
    constructor(e3, t3, n2) {
      this.P = e3, this.T = t3, this.I = n2;
    }
    getToken() {
      return Promise.resolve(new __PRIVATE_FirstPartyToken(this.P, this.T, this.I));
    }
    start(e3, t3) {
      e3.enqueueRetryable((() => t3(User.FIRST_PARTY)));
    }
    shutdown() {
    }
    invalidateToken() {
    }
  };
  var AppCheckToken = class {
    constructor(e3) {
      this.value = e3, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e3 && e3.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
    }
  };
  var __PRIVATE_FirebaseAppCheckTokenProvider = class {
    constructor(t3, n2) {
      this.V = n2, this.forceRefresh = false, this.appCheck = null, this.m = null, this.p = null, _isFirebaseServerApp(t3) && t3.settings.appCheckToken && (this.p = t3.settings.appCheckToken);
    }
    start(e3, t3) {
      __PRIVATE_hardAssert(void 0 === this.o, 3512);
      const onTokenChanged = (e4) => {
        null != e4.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e4.error.message}`);
        const n2 = e4.token !== this.m;
        return this.m = e4.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? t3(e4.token) : Promise.resolve();
      };
      this.o = (t4) => {
        e3.enqueueRetryable((() => onTokenChanged(t4)));
      };
      const __PRIVATE_registerAppCheck = (e4) => {
        __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e4, this.o && this.appCheck.addTokenListener(this.o);
      };
      this.V.onInit(((e4) => __PRIVATE_registerAppCheck(e4))), // Our users can initialize AppCheck after Firestore, so we give it
      // a chance to register itself with the component framework.
      setTimeout((() => {
        if (!this.appCheck) {
          const e4 = this.V.getImmediate({
            optional: true
          });
          e4 ? __PRIVATE_registerAppCheck(e4) : (
            // If AppCheck is still not available, proceed without it.
            __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
          );
        }
      }), 0);
    }
    getToken() {
      if (this.p) return Promise.resolve(new AppCheckToken(this.p));
      const e3 = this.forceRefresh;
      return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e3).then(((e4) => e4 ? (__PRIVATE_hardAssert("string" == typeof e4.token, 44558, {
        tokenResult: e4
      }), this.m = e4.token, new AppCheckToken(e4.token)) : null)) : Promise.resolve(null);
    }
    invalidateToken() {
      this.forceRefresh = true;
    }
    shutdown() {
      this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
    }
  };
  function __PRIVATE_randomBytes(e3) {
    const t3 = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "undefined" != typeof self && (self.crypto || self.msCrypto)
    ), n2 = new Uint8Array(e3);
    if (t3 && "function" == typeof t3.getRandomValues) t3.getRandomValues(n2);
    else
      for (let t4 = 0; t4 < e3; t4++) n2[t4] = Math.floor(256 * Math.random());
    return n2;
  }
  var __PRIVATE_AutoId = class {
    static newId() {
      const e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t3 = 62 * Math.floor(256 / 62);
      let n2 = "";
      for (; n2.length < 20; ) {
        const r3 = __PRIVATE_randomBytes(40);
        for (let i3 = 0; i3 < r3.length; ++i3)
          n2.length < 20 && r3[i3] < t3 && (n2 += e3.charAt(r3[i3] % 62));
      }
      return n2;
    }
  };
  function __PRIVATE_primitiveComparator(e3, t3) {
    return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
  }
  function __PRIVATE_compareUtf8Strings(e3, t3) {
    const n2 = Math.min(e3.length, t3.length);
    for (let r3 = 0; r3 < n2; r3++) {
      const n3 = e3.charAt(r3), i3 = t3.charAt(r3);
      if (n3 !== i3) return __PRIVATE_isSurrogate(n3) === __PRIVATE_isSurrogate(i3) ? __PRIVATE_primitiveComparator(n3, i3) : __PRIVATE_isSurrogate(n3) ? 1 : -1;
    }
    return __PRIVATE_primitiveComparator(e3.length, t3.length);
  }
  var B3 = 55296;
  var L2 = 57343;
  function __PRIVATE_isSurrogate(e3) {
    const t3 = e3.charCodeAt(0);
    return t3 >= B3 && t3 <= L2;
  }
  function __PRIVATE_arrayEquals(e3, t3, n2) {
    return e3.length === t3.length && e3.every(((e4, r3) => n2(e4, t3[r3])));
  }
  var k3 = "__name__";
  var BasePath = class _BasePath {
    constructor(e3, t3, n2) {
      void 0 === t3 ? t3 = 0 : t3 > e3.length && fail(637, {
        offset: t3,
        range: e3.length
      }), void 0 === n2 ? n2 = e3.length - t3 : n2 > e3.length - t3 && fail(1746, {
        length: n2,
        range: e3.length - t3
      }), this.segments = e3, this.offset = t3, this.len = n2;
    }
    get length() {
      return this.len;
    }
    isEqual(e3) {
      return 0 === _BasePath.comparator(this, e3);
    }
    child(e3) {
      const t3 = this.segments.slice(this.offset, this.limit());
      return e3 instanceof _BasePath ? e3.forEach(((e4) => {
        t3.push(e4);
      })) : t3.push(e3), this.construct(t3);
    }
    /** The index of one past the last segment of the path. */
    limit() {
      return this.offset + this.length;
    }
    popFirst(e3) {
      return e3 = void 0 === e3 ? 1 : e3, this.construct(this.segments, this.offset + e3, this.length - e3);
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(e3) {
      return this.segments[this.offset + e3];
    }
    isEmpty() {
      return 0 === this.length;
    }
    isPrefixOf(e3) {
      if (e3.length < this.length) return false;
      for (let t3 = 0; t3 < this.length; t3++) if (this.get(t3) !== e3.get(t3)) return false;
      return true;
    }
    isImmediateParentOf(e3) {
      if (this.length + 1 !== e3.length) return false;
      for (let t3 = 0; t3 < this.length; t3++) if (this.get(t3) !== e3.get(t3)) return false;
      return true;
    }
    forEach(e3) {
      for (let t3 = this.offset, n2 = this.limit(); t3 < n2; t3++) e3(this.segments[t3]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    /**
     * Compare 2 paths segment by segment, prioritizing numeric IDs
     * (e.g., "__id123__") in numeric ascending order, followed by string
     * segments in lexicographical order.
     */
    static comparator(e3, t3) {
      const n2 = Math.min(e3.length, t3.length);
      for (let r3 = 0; r3 < n2; r3++) {
        const n3 = _BasePath.compareSegments(e3.get(r3), t3.get(r3));
        if (0 !== n3) return n3;
      }
      return __PRIVATE_primitiveComparator(e3.length, t3.length);
    }
    static compareSegments(e3, t3) {
      const n2 = _BasePath.isNumericId(e3), r3 = _BasePath.isNumericId(t3);
      return n2 && !r3 ? -1 : !n2 && r3 ? 1 : n2 && r3 ? _BasePath.extractNumericId(e3).compare(_BasePath.extractNumericId(t3)) : __PRIVATE_compareUtf8Strings(e3, t3);
    }
    // Checks if a segment is a numeric ID (starts with "__id" and ends with "__").
    static isNumericId(e3) {
      return e3.startsWith("__id") && e3.endsWith("__");
    }
    static extractNumericId(e3) {
      return Integer.fromString(e3.substring(4, e3.length - 2));
    }
  };
  var ResourcePath = class _ResourcePath extends BasePath {
    construct(e3, t3, n2) {
      return new _ResourcePath(e3, t3, n2);
    }
    canonicalString() {
      return this.toArray().join("/");
    }
    toString() {
      return this.canonicalString();
    }
    /**
     * Returns a string representation of this path
     * where each path segment has been encoded with
     * `encodeURIComponent`.
     */
    toUriEncodedString() {
      return this.toArray().map(encodeURIComponent).join("/");
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    static fromString(...e3) {
      const t3 = [];
      for (const n2 of e3) {
        if (n2.indexOf("//") >= 0) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid segment (${n2}). Paths must not contain // in them.`);
        t3.push(...n2.split("/").filter(((e4) => e4.length > 0)));
      }
      return new _ResourcePath(t3);
    }
    static emptyPath() {
      return new _ResourcePath([]);
    }
  };
  var q3 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
  var FieldPath$1 = class _FieldPath$1 extends BasePath {
    construct(e3, t3, n2) {
      return new _FieldPath$1(e3, t3, n2);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    static isValidIdentifier(e3) {
      return q3.test(e3);
    }
    canonicalString() {
      return this.toArray().map(((e3) => (e3 = e3.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(e3) || (e3 = "`" + e3 + "`"), e3))).join(".");
    }
    toString() {
      return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */
    isKeyField() {
      return 1 === this.length && this.get(0) === k3;
    }
    /**
     * The field designating the key of a document.
     */
    static keyField() {
      return new _FieldPath$1([k3]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    static fromServerFormat(e3) {
      const t3 = [];
      let n2 = "", r3 = 0;
      const __PRIVATE_addCurrentSegment = () => {
        if (0 === n2.length) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid field path (${e3}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
        t3.push(n2), n2 = "";
      };
      let i3 = false;
      for (; r3 < e3.length; ) {
        const t4 = e3[r3];
        if ("\\" === t4) {
          if (r3 + 1 === e3.length) throw new FirestoreError(N2.INVALID_ARGUMENT, "Path has trailing escape character: " + e3);
          const t5 = e3[r3 + 1];
          if ("\\" !== t5 && "." !== t5 && "`" !== t5) throw new FirestoreError(N2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e3);
          n2 += t5, r3 += 2;
        } else "`" === t4 ? (i3 = !i3, r3++) : "." !== t4 || i3 ? (n2 += t4, r3++) : (__PRIVATE_addCurrentSegment(), r3++);
      }
      if (__PRIVATE_addCurrentSegment(), i3) throw new FirestoreError(N2.INVALID_ARGUMENT, "Unterminated ` in path: " + e3);
      return new _FieldPath$1(t3);
    }
    static emptyPath() {
      return new _FieldPath$1([]);
    }
  };
  var DocumentKey = class _DocumentKey {
    constructor(e3) {
      this.path = e3;
    }
    static fromPath(e3) {
      return new _DocumentKey(ResourcePath.fromString(e3));
    }
    static fromName(e3) {
      return new _DocumentKey(ResourcePath.fromString(e3).popFirst(5));
    }
    static empty() {
      return new _DocumentKey(ResourcePath.emptyPath());
    }
    get collectionGroup() {
      return this.path.popLast().lastSegment();
    }
    /** Returns true if the document is in the specified collectionId. */
    hasCollectionId(e3) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === e3;
    }
    /** Returns the collection group (i.e. the name of the parent collection) for this key. */
    getCollectionGroup() {
      return this.path.get(this.path.length - 2);
    }
    /** Returns the fully qualified path to the parent collection. */
    getCollectionPath() {
      return this.path.popLast();
    }
    isEqual(e3) {
      return null !== e3 && 0 === ResourcePath.comparator(this.path, e3.path);
    }
    toString() {
      return this.path.toString();
    }
    static comparator(e3, t3) {
      return ResourcePath.comparator(e3.path, t3.path);
    }
    static isDocumentKey(e3) {
      return e3.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    static fromSegments(e3) {
      return new _DocumentKey(new ResourcePath(e3.slice()));
    }
  };
  function __PRIVATE_validateNonEmptyArgument(e3, t3, n2) {
    if (!n2) throw new FirestoreError(N2.INVALID_ARGUMENT, `Function ${e3}() cannot be called with an empty ${t3}.`);
  }
  function __PRIVATE_validateIsNotUsedTogether(e3, t3, n2, r3) {
    if (true === t3 && true === r3) throw new FirestoreError(N2.INVALID_ARGUMENT, `${e3} and ${n2} cannot be used together.`);
  }
  function __PRIVATE_validateDocumentPath(e3) {
    if (!DocumentKey.isDocumentKey(e3)) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e3} has ${e3.length}.`);
  }
  function __PRIVATE_validateCollectionPath(e3) {
    if (DocumentKey.isDocumentKey(e3)) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e3} has ${e3.length}.`);
  }
  function __PRIVATE_isPlainObject(e3) {
    return "object" == typeof e3 && null !== e3 && (Object.getPrototypeOf(e3) === Object.prototype || null === Object.getPrototypeOf(e3));
  }
  function __PRIVATE_valueDescription(e3) {
    if (void 0 === e3) return "undefined";
    if (null === e3) return "null";
    if ("string" == typeof e3) return e3.length > 20 && (e3 = `${e3.substring(0, 20)}...`), JSON.stringify(e3);
    if ("number" == typeof e3 || "boolean" == typeof e3) return "" + e3;
    if ("object" == typeof e3) {
      if (e3 instanceof Array) return "an array";
      {
        const t3 = (
          /** try to get the constructor name for an object. */
          (function __PRIVATE_tryGetCustomObjectType(e4) {
            if (e4.constructor) return e4.constructor.name;
            return null;
          })(e3)
        );
        return t3 ? `a custom ${t3} object` : "an object";
      }
    }
    return "function" == typeof e3 ? "a function" : fail(12329, {
      type: typeof e3
    });
  }
  function __PRIVATE_cast(e3, t3) {
    if ("_delegate" in e3 && // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e3 = e3._delegate), !(e3 instanceof t3)) {
      if (t3.name === e3.constructor.name) throw new FirestoreError(N2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
        const n2 = __PRIVATE_valueDescription(e3);
        throw new FirestoreError(N2.INVALID_ARGUMENT, `Expected type '${t3.name}', but it was: ${n2}`);
      }
    }
    return e3;
  }
  function property(e3, t3) {
    const n2 = {
      typeString: e3
    };
    return t3 && (n2.value = t3), n2;
  }
  function __PRIVATE_validateJSON(e3, t3) {
    if (!__PRIVATE_isPlainObject(e3)) throw new FirestoreError(N2.INVALID_ARGUMENT, "JSON must be an object");
    let n2;
    for (const r3 in t3) if (t3[r3]) {
      const i3 = t3[r3].typeString, s3 = "value" in t3[r3] ? {
        value: t3[r3].value
      } : void 0;
      if (!(r3 in e3)) {
        n2 = `JSON missing required field: '${r3}'`;
        break;
      }
      const o3 = e3[r3];
      if (i3 && typeof o3 !== i3) {
        n2 = `JSON field '${r3}' must be a ${i3}.`;
        break;
      }
      if (void 0 !== s3 && o3 !== s3.value) {
        n2 = `Expected '${r3}' field to equal '${s3.value}'`;
        break;
      }
    }
    if (n2) throw new FirestoreError(N2.INVALID_ARGUMENT, n2);
    return true;
  }
  var Q2 = -62135596800;
  var $2 = 1e6;
  var Timestamp = class _Timestamp {
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */
    static now() {
      return _Timestamp.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    static fromDate(e3) {
      return _Timestamp.fromMillis(e3.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    static fromMillis(e3) {
      const t3 = Math.floor(e3 / 1e3), n2 = Math.floor((e3 - 1e3 * t3) * $2);
      return new _Timestamp(t3, n2);
    }
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(e3, t3) {
      if (this.seconds = e3, this.nanoseconds = t3, t3 < 0) throw new FirestoreError(N2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t3);
      if (t3 >= 1e9) throw new FirestoreError(N2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t3);
      if (e3 < Q2) throw new FirestoreError(N2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e3);
      if (e3 >= 253402300800) throw new FirestoreError(N2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e3);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    toDate() {
      return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    toMillis() {
      return 1e3 * this.seconds + this.nanoseconds / $2;
    }
    _compareTo(e3) {
      return this.seconds === e3.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e3.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e3.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    isEqual(e3) {
      return e3.seconds === this.seconds && e3.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this `Timestamp`. */
    toString() {
      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /**
     * Returns a JSON-serializable representation of this `Timestamp`.
     */
    toJSON() {
      return {
        type: _Timestamp._jsonSchemaVersion,
        seconds: this.seconds,
        nanoseconds: this.nanoseconds
      };
    }
    /**
     * Builds a `Timestamp` instance from a JSON object created by {@link Timestamp.toJSON}.
     */
    static fromJSON(e3) {
      if (__PRIVATE_validateJSON(e3, _Timestamp._jsonSchema)) return new _Timestamp(e3.seconds, e3.nanoseconds);
    }
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */
    valueOf() {
      const e3 = this.seconds - Q2;
      return String(e3).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
  };
  Timestamp._jsonSchemaVersion = "firestore/timestamp/1.0", Timestamp._jsonSchema = {
    type: property("string", Timestamp._jsonSchemaVersion),
    seconds: property("number"),
    nanoseconds: property("number")
  };
  var SnapshotVersion = class _SnapshotVersion {
    static fromTimestamp(e3) {
      return new _SnapshotVersion(e3);
    }
    static min() {
      return new _SnapshotVersion(new Timestamp(0, 0));
    }
    static max() {
      return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
    }
    constructor(e3) {
      this.timestamp = e3;
    }
    compareTo(e3) {
      return this.timestamp._compareTo(e3.timestamp);
    }
    isEqual(e3) {
      return this.timestamp.isEqual(e3.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */
    toMicroseconds() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
      return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
      return this.timestamp;
    }
  };
  var U = -1;
  var FieldIndex = class {
    constructor(e3, t3, n2, r3) {
      this.indexId = e3, this.collectionGroup = t3, this.fields = n2, this.indexState = r3;
    }
  };
  FieldIndex.UNKNOWN_ID = -1;
  function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e3, t3) {
    const n2 = e3.toTimestamp().seconds, r3 = e3.toTimestamp().nanoseconds + 1, i3 = SnapshotVersion.fromTimestamp(1e9 === r3 ? new Timestamp(n2 + 1, 0) : new Timestamp(n2, r3));
    return new IndexOffset(i3, DocumentKey.empty(), t3);
  }
  function __PRIVATE_newIndexOffsetFromDocument(e3) {
    return new IndexOffset(e3.readTime, e3.key, U);
  }
  var IndexOffset = class _IndexOffset {
    constructor(e3, t3, n2) {
      this.readTime = e3, this.documentKey = t3, this.largestBatchId = n2;
    }
    /** Returns an offset that sorts before all regular offsets. */
    static min() {
      return new _IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), U);
    }
    /** Returns an offset that sorts after all regular offsets. */
    static max() {
      return new _IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), U);
    }
  };
  function __PRIVATE_indexOffsetComparator(e3, t3) {
    let n2 = e3.readTime.compareTo(t3.readTime);
    return 0 !== n2 ? n2 : (n2 = DocumentKey.comparator(e3.documentKey, t3.documentKey), 0 !== n2 ? n2 : __PRIVATE_primitiveComparator(e3.largestBatchId, t3.largestBatchId));
  }
  var K2 = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
  var PersistenceTransaction = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(e3) {
      this.onCommittedListeners.push(e3);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach(((e3) => e3()));
    }
  };
  async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e3) {
    if (e3.code !== N2.FAILED_PRECONDITION || e3.message !== K2) throw e3;
    __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
  }
  var PersistencePromise = class _PersistencePromise {
    constructor(e3) {
      this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
      this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
      // chaining.
      this.callbackAttached = false, e3(((e4) => {
        this.isDone = true, this.result = e4, this.nextCallback && // value should be defined unless T is Void, but we can't express
        // that in the type system.
        this.nextCallback(e4);
      }), ((e4) => {
        this.isDone = true, this.error = e4, this.catchCallback && this.catchCallback(e4);
      }));
    }
    catch(e3) {
      return this.next(void 0, e3);
    }
    next(e3, t3) {
      return this.callbackAttached && fail(59440), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t3, this.error) : this.wrapSuccess(e3, this.result) : new _PersistencePromise(((n2, r3) => {
        this.nextCallback = (t4) => {
          this.wrapSuccess(e3, t4).next(n2, r3);
        }, this.catchCallback = (e4) => {
          this.wrapFailure(t3, e4).next(n2, r3);
        };
      }));
    }
    toPromise() {
      return new Promise(((e3, t3) => {
        this.next(e3, t3);
      }));
    }
    wrapUserFunction(e3) {
      try {
        const t3 = e3();
        return t3 instanceof _PersistencePromise ? t3 : _PersistencePromise.resolve(t3);
      } catch (e4) {
        return _PersistencePromise.reject(e4);
      }
    }
    wrapSuccess(e3, t3) {
      return e3 ? this.wrapUserFunction((() => e3(t3))) : _PersistencePromise.resolve(t3);
    }
    wrapFailure(e3, t3) {
      return e3 ? this.wrapUserFunction((() => e3(t3))) : _PersistencePromise.reject(t3);
    }
    static resolve(e3) {
      return new _PersistencePromise(((t3, n2) => {
        t3(e3);
      }));
    }
    static reject(e3) {
      return new _PersistencePromise(((t3, n2) => {
        n2(e3);
      }));
    }
    static waitFor(e3) {
      return new _PersistencePromise(((t3, n2) => {
        let r3 = 0, i3 = 0, s3 = false;
        e3.forEach(((e4) => {
          ++r3, e4.next((() => {
            ++i3, s3 && i3 === r3 && t3();
          }), ((e5) => n2(e5)));
        })), s3 = true, i3 === r3 && t3();
      }));
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    static or(e3) {
      let t3 = _PersistencePromise.resolve(false);
      for (const n2 of e3) t3 = t3.next(((e4) => e4 ? _PersistencePromise.resolve(e4) : n2()));
      return t3;
    }
    static forEach(e3, t3) {
      const n2 = [];
      return e3.forEach(((e4, r3) => {
        n2.push(t3.call(this, e4, r3));
      })), this.waitFor(n2);
    }
    /**
     * Concurrently map all array elements through asynchronous function.
     */
    static mapArray(e3, t3) {
      return new _PersistencePromise(((n2, r3) => {
        const i3 = e3.length, s3 = new Array(i3);
        let o3 = 0;
        for (let _2 = 0; _2 < i3; _2++) {
          const a3 = _2;
          t3(e3[a3]).next(((e4) => {
            s3[a3] = e4, ++o3, o3 === i3 && n2(s3);
          }), ((e4) => r3(e4)));
        }
      }));
    }
    /**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */
    static doWhile(e3, t3) {
      return new _PersistencePromise(((n2, r3) => {
        const process2 = () => {
          true === e3() ? t3().next((() => {
            process2();
          }), r3) : n2();
        };
        process2();
      }));
    }
  };
  function __PRIVATE_getAndroidVersion(e3) {
    const t3 = e3.match(/Android ([\d.]+)/i), n2 = t3 ? t3[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }
  function __PRIVATE_isIndexedDbTransactionError(e3) {
    return "IndexedDbTransactionError" === e3.name;
  }
  var __PRIVATE_ListenSequence = class {
    constructor(e3, t3) {
      this.previousValue = e3, t3 && (t3.sequenceNumberHandler = (e4) => this.ae(e4), this.ue = (e4) => t3.writeSequenceNumber(e4));
    }
    ae(e3) {
      return this.previousValue = Math.max(e3, this.previousValue), this.previousValue;
    }
    next() {
      const e3 = ++this.previousValue;
      return this.ue && this.ue(e3), e3;
    }
  };
  __PRIVATE_ListenSequence.ce = -1;
  var j3 = -1;
  function __PRIVATE_isNullOrUndefined(e3) {
    return null == e3;
  }
  function __PRIVATE_isNegativeZero(e3) {
    return 0 === e3 && 1 / e3 == -1 / 0;
  }
  function isSafeInteger(e3) {
    return "number" == typeof e3 && Number.isInteger(e3) && !__PRIVATE_isNegativeZero(e3) && e3 <= Number.MAX_SAFE_INTEGER && e3 >= Number.MIN_SAFE_INTEGER;
  }
  var J2 = "";
  function __PRIVATE_encodeResourcePath(e3) {
    let t3 = "";
    for (let n2 = 0; n2 < e3.length; n2++) t3.length > 0 && (t3 = __PRIVATE_encodeSeparator(t3)), t3 = __PRIVATE_encodeSegment(e3.get(n2), t3);
    return __PRIVATE_encodeSeparator(t3);
  }
  function __PRIVATE_encodeSegment(e3, t3) {
    let n2 = t3;
    const r3 = e3.length;
    for (let t4 = 0; t4 < r3; t4++) {
      const r4 = e3.charAt(t4);
      switch (r4) {
        case "\0":
          n2 += "";
          break;
        case J2:
          n2 += "";
          break;
        default:
          n2 += r4;
      }
    }
    return n2;
  }
  function __PRIVATE_encodeSeparator(e3) {
    return e3 + J2 + "";
  }
  var H2 = "remoteDocuments";
  var Y = "owner";
  var X2 = "mutationQueues";
  var te = "mutations";
  var oe = "documentMutations";
  var _e = "remoteDocumentsV14";
  var Pe = "remoteDocumentGlobal";
  var Ie = "targets";
  var Ae = "targetDocuments";
  var ge = "targetGlobal";
  var pe = "collectionParents";
  var we = "clientMetadata";
  var be = "bundles";
  var Ce = "namedQueries";
  var Fe = "indexConfiguration";
  var Ne = "indexState";
  var qe = "indexEntries";
  var Ke = "documentOverlays";
  var He = "globals";
  var Ze = [...[...[...[...[X2, te, oe, H2, Ie, Y, ge, Ae], we], Pe], pe], be, Ce];
  var Xe = [...Ze, Ke];
  var et = [X2, te, oe, _e, Ie, Y, ge, Ae, we, Pe, pe, be, Ce, Ke];
  var tt = et;
  var nt = [...tt, Fe, Ne, qe];
  var it = [...nt, He];
  function __PRIVATE_objectSize(e3) {
    let t3 = 0;
    for (const n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && t3++;
    return t3;
  }
  function forEach(e3, t3) {
    for (const n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && t3(n2, e3[n2]);
  }
  function isEmpty2(e3) {
    for (const t3 in e3) if (Object.prototype.hasOwnProperty.call(e3, t3)) return false;
    return true;
  }
  var SortedMap = class _SortedMap {
    constructor(e3, t3) {
      this.comparator = e3, this.root = t3 || LLRBNode.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    insert(e3, t3) {
      return new _SortedMap(this.comparator, this.root.insert(e3, t3, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(e3) {
      return new _SortedMap(this.comparator, this.root.remove(e3, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(e3) {
      let t3 = this.root;
      for (; !t3.isEmpty(); ) {
        const n2 = this.comparator(e3, t3.key);
        if (0 === n2) return t3.value;
        n2 < 0 ? t3 = t3.left : n2 > 0 && (t3 = t3.right);
      }
      return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(e3) {
      let t3 = 0, n2 = this.root;
      for (; !n2.isEmpty(); ) {
        const r3 = this.comparator(e3, n2.key);
        if (0 === r3) return t3 + n2.left.size;
        r3 < 0 ? n2 = n2.left : (
          // Count all nodes left of the node plus the node itself
          (t3 += n2.left.size + 1, n2 = n2.right)
        );
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    // Returns the total number of nodes in the map.
    get size() {
      return this.root.size;
    }
    // Returns the minimum key in the map.
    minKey() {
      return this.root.minKey();
    }
    // Returns the maximum key in the map.
    maxKey() {
      return this.root.maxKey();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(e3) {
      return this.root.inorderTraversal(e3);
    }
    forEach(e3) {
      this.inorderTraversal(((t3, n2) => (e3(t3, n2), false)));
    }
    toString() {
      const e3 = [];
      return this.inorderTraversal(((t3, n2) => (e3.push(`${t3}:${n2}`), false))), `{${e3.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(e3) {
      return this.root.reverseTraversal(e3);
    }
    // Returns an iterator over the SortedMap.
    getIterator() {
      return new SortedMapIterator(this.root, null, this.comparator, false);
    }
    getIteratorFrom(e3) {
      return new SortedMapIterator(this.root, e3, this.comparator, false);
    }
    getReverseIterator() {
      return new SortedMapIterator(this.root, null, this.comparator, true);
    }
    getReverseIteratorFrom(e3) {
      return new SortedMapIterator(this.root, e3, this.comparator, true);
    }
  };
  var SortedMapIterator = class {
    constructor(e3, t3, n2, r3) {
      this.isReverse = r3, this.nodeStack = [];
      let i3 = 1;
      for (; !e3.isEmpty(); ) if (i3 = t3 ? n2(e3.key, t3) : 1, // flip the comparison if we're going in reverse
      t3 && r3 && (i3 *= -1), i3 < 0)
        e3 = this.isReverse ? e3.left : e3.right;
      else {
        if (0 === i3) {
          this.nodeStack.push(e3);
          break;
        }
        this.nodeStack.push(e3), e3 = this.isReverse ? e3.right : e3.left;
      }
    }
    getNext() {
      let e3 = this.nodeStack.pop();
      const t3 = {
        key: e3.key,
        value: e3.value
      };
      if (this.isReverse) for (e3 = e3.left; !e3.isEmpty(); ) this.nodeStack.push(e3), e3 = e3.right;
      else for (e3 = e3.right; !e3.isEmpty(); ) this.nodeStack.push(e3), e3 = e3.left;
      return t3;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (0 === this.nodeStack.length) return null;
      const e3 = this.nodeStack[this.nodeStack.length - 1];
      return {
        key: e3.key,
        value: e3.value
      };
    }
  };
  var LLRBNode = class _LLRBNode {
    constructor(e3, t3, n2, r3, i3) {
      this.key = e3, this.value = t3, this.color = null != n2 ? n2 : _LLRBNode.RED, this.left = null != r3 ? r3 : _LLRBNode.EMPTY, this.right = null != i3 ? i3 : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(e3, t3, n2, r3, i3) {
      return new _LLRBNode(null != e3 ? e3 : this.key, null != t3 ? t3 : this.value, null != n2 ? n2 : this.color, null != r3 ? r3 : this.left, null != i3 ? i3 : this.right);
    }
    isEmpty() {
      return false;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(e3) {
      return this.left.inorderTraversal(e3) || e3(this.key, this.value) || this.right.inorderTraversal(e3);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(e3) {
      return this.right.reverseTraversal(e3) || e3(this.key, this.value) || this.left.reverseTraversal(e3);
    }
    // Returns the minimum node in the tree.
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    minKey() {
      return this.min().key;
    }
    // Returns the maximum key in the tree.
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    // Returns new tree, with the key/value added.
    insert(e3, t3, n2) {
      let r3 = this;
      const i3 = n2(e3, r3.key);
      return r3 = i3 < 0 ? r3.copy(null, null, null, r3.left.insert(e3, t3, n2), null) : 0 === i3 ? r3.copy(null, t3, null, null, null) : r3.copy(null, null, null, null, r3.right.insert(e3, t3, n2)), r3.fixUp();
    }
    removeMin() {
      if (this.left.isEmpty()) return _LLRBNode.EMPTY;
      let e3 = this;
      return e3.left.isRed() || e3.left.left.isRed() || (e3 = e3.moveRedLeft()), e3 = e3.copy(null, null, null, e3.left.removeMin(), null), e3.fixUp();
    }
    // Returns new tree, with the specified item removed.
    remove(e3, t3) {
      let n2, r3 = this;
      if (t3(e3, r3.key) < 0) r3.left.isEmpty() || r3.left.isRed() || r3.left.left.isRed() || (r3 = r3.moveRedLeft()), r3 = r3.copy(null, null, null, r3.left.remove(e3, t3), null);
      else {
        if (r3.left.isRed() && (r3 = r3.rotateRight()), r3.right.isEmpty() || r3.right.isRed() || r3.right.left.isRed() || (r3 = r3.moveRedRight()), 0 === t3(e3, r3.key)) {
          if (r3.right.isEmpty()) return _LLRBNode.EMPTY;
          n2 = r3.right.min(), r3 = r3.copy(n2.key, n2.value, null, null, r3.right.removeMin());
        }
        r3 = r3.copy(null, null, null, null, r3.right.remove(e3, t3));
      }
      return r3.fixUp();
    }
    isRed() {
      return this.color;
    }
    // Returns new tree after performing any needed rotations.
    fixUp() {
      let e3 = this;
      return e3.right.isRed() && !e3.left.isRed() && (e3 = e3.rotateLeft()), e3.left.isRed() && e3.left.left.isRed() && (e3 = e3.rotateRight()), e3.left.isRed() && e3.right.isRed() && (e3 = e3.colorFlip()), e3;
    }
    moveRedLeft() {
      let e3 = this.colorFlip();
      return e3.right.left.isRed() && (e3 = e3.copy(null, null, null, null, e3.right.rotateRight()), e3 = e3.rotateLeft(), e3 = e3.colorFlip()), e3;
    }
    moveRedRight() {
      let e3 = this.colorFlip();
      return e3.left.left.isRed() && (e3 = e3.rotateRight(), e3 = e3.colorFlip()), e3;
    }
    rotateLeft() {
      const e3 = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e3, null);
    }
    rotateRight() {
      const e3 = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e3);
    }
    colorFlip() {
      const e3 = this.left.copy(null, null, !this.left.color, null, null), t3 = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e3, t3);
    }
    // For testing.
    checkMaxDepth() {
      const e3 = this.check();
      return Math.pow(2, e3) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    check() {
      if (this.isRed() && this.left.isRed()) throw fail(43730, {
        key: this.key,
        value: this.value
      });
      if (this.right.isRed()) throw fail(14113, {
        key: this.key,
        value: this.value
      });
      const e3 = this.left.check();
      if (e3 !== this.right.check()) throw fail(27949);
      return e3 + (this.isRed() ? 0 : 1);
    }
  };
  LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
  LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
  class LLRBEmptyNode {
    constructor() {
      this.size = 0;
    }
    get key() {
      throw fail(57766);
    }
    get value() {
      throw fail(16141);
    }
    get color() {
      throw fail(16727);
    }
    get left() {
      throw fail(29726);
    }
    get right() {
      throw fail(36894);
    }
    // Returns a copy of the current node.
    copy(e3, t3, n2, r3, i3) {
      return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    insert(e3, t3, n2) {
      return new LLRBNode(e3, t3);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(e3, t3) {
      return this;
    }
    isEmpty() {
      return true;
    }
    inorderTraversal(e3) {
      return false;
    }
    reverseTraversal(e3) {
      return false;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    isRed() {
      return false;
    }
    // For testing.
    checkMaxDepth() {
      return true;
    }
    check() {
      return 0;
    }
  }();
  var SortedSet = class _SortedSet {
    constructor(e3) {
      this.comparator = e3, this.data = new SortedMap(this.comparator);
    }
    has(e3) {
      return null !== this.data.get(e3);
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(e3) {
      return this.data.indexOf(e3);
    }
    /** Iterates elements in order defined by "comparator" */
    forEach(e3) {
      this.data.inorderTraversal(((t3, n2) => (e3(t3), false)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
    forEachInRange(e3, t3) {
      const n2 = this.data.getIteratorFrom(e3[0]);
      for (; n2.hasNext(); ) {
        const r3 = n2.getNext();
        if (this.comparator(r3.key, e3[1]) >= 0) return;
        t3(r3.key);
      }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    forEachWhile(e3, t3) {
      let n2;
      for (n2 = void 0 !== t3 ? this.data.getIteratorFrom(t3) : this.data.getIterator(); n2.hasNext(); ) {
        if (!e3(n2.getNext().key)) return;
      }
    }
    /** Finds the least element greater than or equal to `elem`. */
    firstAfterOrEqual(e3) {
      const t3 = this.data.getIteratorFrom(e3);
      return t3.hasNext() ? t3.getNext().key : null;
    }
    getIterator() {
      return new SortedSetIterator(this.data.getIterator());
    }
    getIteratorFrom(e3) {
      return new SortedSetIterator(this.data.getIteratorFrom(e3));
    }
    /** Inserts or updates an element */
    add(e3) {
      return this.copy(this.data.remove(e3).insert(e3, true));
    }
    /** Deletes an element */
    delete(e3) {
      return this.has(e3) ? this.copy(this.data.remove(e3)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(e3) {
      let t3 = this;
      return t3.size < e3.size && (t3 = e3, e3 = this), e3.forEach(((e4) => {
        t3 = t3.add(e4);
      })), t3;
    }
    isEqual(e3) {
      if (!(e3 instanceof _SortedSet)) return false;
      if (this.size !== e3.size) return false;
      const t3 = this.data.getIterator(), n2 = e3.data.getIterator();
      for (; t3.hasNext(); ) {
        const e4 = t3.getNext().key, r3 = n2.getNext().key;
        if (0 !== this.comparator(e4, r3)) return false;
      }
      return true;
    }
    toArray() {
      const e3 = [];
      return this.forEach(((t3) => {
        e3.push(t3);
      })), e3;
    }
    toString() {
      const e3 = [];
      return this.forEach(((t3) => e3.push(t3))), "SortedSet(" + e3.toString() + ")";
    }
    copy(e3) {
      const t3 = new _SortedSet(this.comparator);
      return t3.data = e3, t3;
    }
  };
  var SortedSetIterator = class {
    constructor(e3) {
      this.iter = e3;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  };
  var FieldMask = class _FieldMask {
    constructor(e3) {
      this.fields = e3, // TODO(dimond): validation of FieldMask
      // Sort the field mask to support `FieldMask.isEqual()` and assert below.
      e3.sort(FieldPath$1.comparator);
    }
    static empty() {
      return new _FieldMask([]);
    }
    /**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */
    unionWith(e3) {
      let t3 = new SortedSet(FieldPath$1.comparator);
      for (const e4 of this.fields) t3 = t3.add(e4);
      for (const n2 of e3) t3 = t3.add(n2);
      return new _FieldMask(t3.toArray());
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    covers(e3) {
      for (const t3 of this.fields) if (t3.isPrefixOf(e3)) return true;
      return false;
    }
    isEqual(e3) {
      return __PRIVATE_arrayEquals(this.fields, e3.fields, ((e4, t3) => e4.isEqual(t3)));
    }
  };
  var __PRIVATE_Base64DecodeError = class extends Error {
    constructor() {
      super(...arguments), this.name = "Base64DecodeError";
    }
  };
  var ByteString = class _ByteString {
    constructor(e3) {
      this.binaryString = e3;
    }
    static fromBase64String(e3) {
      const t3 = (function __PRIVATE_decodeBase64(e4) {
        try {
          return atob(e4);
        } catch (e5) {
          throw "undefined" != typeof DOMException && e5 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e5) : e5;
        }
      })(e3);
      return new _ByteString(t3);
    }
    static fromUint8Array(e3) {
      const t3 = (
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        (function __PRIVATE_binaryStringFromUint8Array(e4) {
          let t4 = "";
          for (let n2 = 0; n2 < e4.length; ++n2) t4 += String.fromCharCode(e4[n2]);
          return t4;
        })(e3)
      );
      return new _ByteString(t3);
    }
    [Symbol.iterator]() {
      let e3 = 0;
      return {
        next: () => e3 < this.binaryString.length ? {
          value: this.binaryString.charCodeAt(e3++),
          done: false
        } : {
          value: void 0,
          done: true
        }
      };
    }
    toBase64() {
      return (function __PRIVATE_encodeBase64(e3) {
        return btoa(e3);
      })(this.binaryString);
    }
    toUint8Array() {
      return (function __PRIVATE_uint8ArrayFromBinaryString(e3) {
        const t3 = new Uint8Array(e3.length);
        for (let n2 = 0; n2 < e3.length; n2++) t3[n2] = e3.charCodeAt(n2);
        return t3;
      })(this.binaryString);
    }
    approximateByteSize() {
      return 2 * this.binaryString.length;
    }
    compareTo(e3) {
      return __PRIVATE_primitiveComparator(this.binaryString, e3.binaryString);
    }
    isEqual(e3) {
      return this.binaryString === e3.binaryString;
    }
  };
  ByteString.EMPTY_BYTE_STRING = new ByteString("");
  var ot = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
  function __PRIVATE_normalizeTimestamp(e3) {
    if (__PRIVATE_hardAssert(!!e3, 39018), "string" == typeof e3) {
      let t3 = 0;
      const n2 = ot.exec(e3);
      if (__PRIVATE_hardAssert(!!n2, 46558, {
        timestamp: e3
      }), n2[1]) {
        let e4 = n2[1];
        e4 = (e4 + "000000000").substr(0, 9), t3 = Number(e4);
      }
      const r3 = new Date(e3);
      return {
        seconds: Math.floor(r3.getTime() / 1e3),
        nanos: t3
      };
    }
    return {
      seconds: __PRIVATE_normalizeNumber(e3.seconds),
      nanos: __PRIVATE_normalizeNumber(e3.nanos)
    };
  }
  function __PRIVATE_normalizeNumber(e3) {
    return "number" == typeof e3 ? e3 : "string" == typeof e3 ? Number(e3) : 0;
  }
  function __PRIVATE_normalizeByteString(e3) {
    return "string" == typeof e3 ? ByteString.fromBase64String(e3) : ByteString.fromUint8Array(e3);
  }
  var _t = "server_timestamp";
  var at = "__type__";
  var ut = "__previous_value__";
  var ct = "__local_write_time__";
  function __PRIVATE_isServerTimestamp(e3) {
    const t3 = (e3?.mapValue?.fields || {})[at]?.stringValue;
    return t3 === _t;
  }
  function __PRIVATE_getPreviousValue(e3) {
    const t3 = e3.mapValue.fields[ut];
    return __PRIVATE_isServerTimestamp(t3) ? __PRIVATE_getPreviousValue(t3) : t3;
  }
  function __PRIVATE_getLocalWriteTime(e3) {
    const t3 = __PRIVATE_normalizeTimestamp(e3.mapValue.fields[ct].timestampValue);
    return new Timestamp(t3.seconds, t3.nanos);
  }
  var DatabaseInfo = class {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
    constructor(e3, t3, n2, r3, i3, s3, o3, _2, a3, u4) {
      this.databaseId = e3, this.appId = t3, this.persistenceKey = n2, this.host = r3, this.ssl = i3, this.forceLongPolling = s3, this.autoDetectLongPolling = o3, this.longPollingOptions = _2, this.useFetchStreams = a3, this.isUsingEmulator = u4;
    }
  };
  var lt = "(default)";
  var DatabaseId = class _DatabaseId {
    constructor(e3, t3) {
      this.projectId = e3, this.database = t3 || lt;
    }
    static empty() {
      return new _DatabaseId("", "");
    }
    get isDefaultDatabase() {
      return this.database === lt;
    }
    isEqual(e3) {
      return e3 instanceof _DatabaseId && e3.projectId === this.projectId && e3.database === this.database;
    }
  };
  var ht = "__type__";
  var Pt = "__max__";
  var Tt = {
    mapValue: {
      fields: {
        __type__: {
          stringValue: Pt
        }
      }
    }
  };
  var It = "__vector__";
  var Et = "value";
  function __PRIVATE_typeOrder(e3) {
    return "nullValue" in e3 ? 0 : "booleanValue" in e3 ? 1 : "integerValue" in e3 || "doubleValue" in e3 ? 2 : "timestampValue" in e3 ? 3 : "stringValue" in e3 ? 5 : "bytesValue" in e3 ? 6 : "referenceValue" in e3 ? 7 : "geoPointValue" in e3 ? 8 : "arrayValue" in e3 ? 9 : "mapValue" in e3 ? __PRIVATE_isServerTimestamp(e3) ? 4 : __PRIVATE_isMaxValue(e3) ? 9007199254740991 : __PRIVATE_isVectorValue(e3) ? 10 : 11 : fail(28295, {
      value: e3
    });
  }
  function __PRIVATE_valueEquals(e3, t3) {
    if (e3 === t3) return true;
    const n2 = __PRIVATE_typeOrder(e3);
    if (n2 !== __PRIVATE_typeOrder(t3)) return false;
    switch (n2) {
      case 0:
      case 9007199254740991:
        return true;
      case 1:
        return e3.booleanValue === t3.booleanValue;
      case 4:
        return __PRIVATE_getLocalWriteTime(e3).isEqual(__PRIVATE_getLocalWriteTime(t3));
      case 3:
        return (function __PRIVATE_timestampEquals(e4, t4) {
          if ("string" == typeof e4.timestampValue && "string" == typeof t4.timestampValue && e4.timestampValue.length === t4.timestampValue.length)
            return e4.timestampValue === t4.timestampValue;
          const n3 = __PRIVATE_normalizeTimestamp(e4.timestampValue), r3 = __PRIVATE_normalizeTimestamp(t4.timestampValue);
          return n3.seconds === r3.seconds && n3.nanos === r3.nanos;
        })(e3, t3);
      case 5:
        return e3.stringValue === t3.stringValue;
      case 6:
        return (function __PRIVATE_blobEquals(e4, t4) {
          return __PRIVATE_normalizeByteString(e4.bytesValue).isEqual(__PRIVATE_normalizeByteString(t4.bytesValue));
        })(e3, t3);
      case 7:
        return e3.referenceValue === t3.referenceValue;
      case 8:
        return (function __PRIVATE_geoPointEquals(e4, t4) {
          return __PRIVATE_normalizeNumber(e4.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t4.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e4.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t4.geoPointValue.longitude);
        })(e3, t3);
      case 2:
        return (function __PRIVATE_numberEquals(e4, t4) {
          if ("integerValue" in e4 && "integerValue" in t4) return __PRIVATE_normalizeNumber(e4.integerValue) === __PRIVATE_normalizeNumber(t4.integerValue);
          if ("doubleValue" in e4 && "doubleValue" in t4) {
            const n3 = __PRIVATE_normalizeNumber(e4.doubleValue), r3 = __PRIVATE_normalizeNumber(t4.doubleValue);
            return n3 === r3 ? __PRIVATE_isNegativeZero(n3) === __PRIVATE_isNegativeZero(r3) : isNaN(n3) && isNaN(r3);
          }
          return false;
        })(e3, t3);
      case 9:
        return __PRIVATE_arrayEquals(e3.arrayValue.values || [], t3.arrayValue.values || [], __PRIVATE_valueEquals);
      case 10:
      case 11:
        return (function __PRIVATE_objectEquals(e4, t4) {
          const n3 = e4.mapValue.fields || {}, r3 = t4.mapValue.fields || {};
          if (__PRIVATE_objectSize(n3) !== __PRIVATE_objectSize(r3)) return false;
          for (const e5 in n3) if (n3.hasOwnProperty(e5) && (void 0 === r3[e5] || !__PRIVATE_valueEquals(n3[e5], r3[e5]))) return false;
          return true;
        })(e3, t3);
      default:
        return fail(52216, {
          left: e3
        });
    }
  }
  function __PRIVATE_arrayValueContains(e3, t3) {
    return void 0 !== (e3.values || []).find(((e4) => __PRIVATE_valueEquals(e4, t3)));
  }
  function __PRIVATE_valueCompare(e3, t3) {
    if (e3 === t3) return 0;
    const n2 = __PRIVATE_typeOrder(e3), r3 = __PRIVATE_typeOrder(t3);
    if (n2 !== r3) return __PRIVATE_primitiveComparator(n2, r3);
    switch (n2) {
      case 0:
      case 9007199254740991:
        return 0;
      case 1:
        return __PRIVATE_primitiveComparator(e3.booleanValue, t3.booleanValue);
      case 2:
        return (function __PRIVATE_compareNumbers(e4, t4) {
          const n3 = __PRIVATE_normalizeNumber(e4.integerValue || e4.doubleValue), r4 = __PRIVATE_normalizeNumber(t4.integerValue || t4.doubleValue);
          return n3 < r4 ? -1 : n3 > r4 ? 1 : n3 === r4 ? 0 : (
            // one or both are NaN.
            isNaN(n3) ? isNaN(r4) ? 0 : -1 : 1
          );
        })(e3, t3);
      case 3:
        return __PRIVATE_compareTimestamps(e3.timestampValue, t3.timestampValue);
      case 4:
        return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e3), __PRIVATE_getLocalWriteTime(t3));
      case 5:
        return __PRIVATE_compareUtf8Strings(e3.stringValue, t3.stringValue);
      case 6:
        return (function __PRIVATE_compareBlobs(e4, t4) {
          const n3 = __PRIVATE_normalizeByteString(e4), r4 = __PRIVATE_normalizeByteString(t4);
          return n3.compareTo(r4);
        })(e3.bytesValue, t3.bytesValue);
      case 7:
        return (function __PRIVATE_compareReferences(e4, t4) {
          const n3 = e4.split("/"), r4 = t4.split("/");
          for (let e5 = 0; e5 < n3.length && e5 < r4.length; e5++) {
            const t5 = __PRIVATE_primitiveComparator(n3[e5], r4[e5]);
            if (0 !== t5) return t5;
          }
          return __PRIVATE_primitiveComparator(n3.length, r4.length);
        })(e3.referenceValue, t3.referenceValue);
      case 8:
        return (function __PRIVATE_compareGeoPoints(e4, t4) {
          const n3 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e4.latitude), __PRIVATE_normalizeNumber(t4.latitude));
          if (0 !== n3) return n3;
          return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e4.longitude), __PRIVATE_normalizeNumber(t4.longitude));
        })(e3.geoPointValue, t3.geoPointValue);
      case 9:
        return __PRIVATE_compareArrays(e3.arrayValue, t3.arrayValue);
      case 10:
        return (function __PRIVATE_compareVectors(e4, t4) {
          const n3 = e4.fields || {}, r4 = t4.fields || {}, i3 = n3[Et]?.arrayValue, s3 = r4[Et]?.arrayValue, o3 = __PRIVATE_primitiveComparator(i3?.values?.length || 0, s3?.values?.length || 0);
          if (0 !== o3) return o3;
          return __PRIVATE_compareArrays(i3, s3);
        })(e3.mapValue, t3.mapValue);
      case 11:
        return (function __PRIVATE_compareMaps(e4, t4) {
          if (e4 === Tt.mapValue && t4 === Tt.mapValue) return 0;
          if (e4 === Tt.mapValue) return 1;
          if (t4 === Tt.mapValue) return -1;
          const n3 = e4.fields || {}, r4 = Object.keys(n3), i3 = t4.fields || {}, s3 = Object.keys(i3);
          r4.sort(), s3.sort();
          for (let e5 = 0; e5 < r4.length && e5 < s3.length; ++e5) {
            const t5 = __PRIVATE_compareUtf8Strings(r4[e5], s3[e5]);
            if (0 !== t5) return t5;
            const o3 = __PRIVATE_valueCompare(n3[r4[e5]], i3[s3[e5]]);
            if (0 !== o3) return o3;
          }
          return __PRIVATE_primitiveComparator(r4.length, s3.length);
        })(e3.mapValue, t3.mapValue);
      default:
        throw fail(23264, {
          he: n2
        });
    }
  }
  function __PRIVATE_compareTimestamps(e3, t3) {
    if ("string" == typeof e3 && "string" == typeof t3 && e3.length === t3.length) return __PRIVATE_primitiveComparator(e3, t3);
    const n2 = __PRIVATE_normalizeTimestamp(e3), r3 = __PRIVATE_normalizeTimestamp(t3), i3 = __PRIVATE_primitiveComparator(n2.seconds, r3.seconds);
    return 0 !== i3 ? i3 : __PRIVATE_primitiveComparator(n2.nanos, r3.nanos);
  }
  function __PRIVATE_compareArrays(e3, t3) {
    const n2 = e3.values || [], r3 = t3.values || [];
    for (let e4 = 0; e4 < n2.length && e4 < r3.length; ++e4) {
      const t4 = __PRIVATE_valueCompare(n2[e4], r3[e4]);
      if (t4) return t4;
    }
    return __PRIVATE_primitiveComparator(n2.length, r3.length);
  }
  function canonicalId(e3) {
    return __PRIVATE_canonifyValue(e3);
  }
  function __PRIVATE_canonifyValue(e3) {
    return "nullValue" in e3 ? "null" : "booleanValue" in e3 ? "" + e3.booleanValue : "integerValue" in e3 ? "" + e3.integerValue : "doubleValue" in e3 ? "" + e3.doubleValue : "timestampValue" in e3 ? (function __PRIVATE_canonifyTimestamp(e4) {
      const t3 = __PRIVATE_normalizeTimestamp(e4);
      return `time(${t3.seconds},${t3.nanos})`;
    })(e3.timestampValue) : "stringValue" in e3 ? e3.stringValue : "bytesValue" in e3 ? (function __PRIVATE_canonifyByteString(e4) {
      return __PRIVATE_normalizeByteString(e4).toBase64();
    })(e3.bytesValue) : "referenceValue" in e3 ? (function __PRIVATE_canonifyReference(e4) {
      return DocumentKey.fromName(e4).toString();
    })(e3.referenceValue) : "geoPointValue" in e3 ? (function __PRIVATE_canonifyGeoPoint(e4) {
      return `geo(${e4.latitude},${e4.longitude})`;
    })(e3.geoPointValue) : "arrayValue" in e3 ? (function __PRIVATE_canonifyArray(e4) {
      let t3 = "[", n2 = true;
      for (const r3 of e4.values || []) n2 ? n2 = false : t3 += ",", t3 += __PRIVATE_canonifyValue(r3);
      return t3 + "]";
    })(e3.arrayValue) : "mapValue" in e3 ? (function __PRIVATE_canonifyMap(e4) {
      const t3 = Object.keys(e4.fields || {}).sort();
      let n2 = "{", r3 = true;
      for (const i3 of t3) r3 ? r3 = false : n2 += ",", n2 += `${i3}:${__PRIVATE_canonifyValue(e4.fields[i3])}`;
      return n2 + "}";
    })(e3.mapValue) : fail(61005, {
      value: e3
    });
  }
  function __PRIVATE_estimateByteSize(e3) {
    switch (__PRIVATE_typeOrder(e3)) {
      case 0:
      case 1:
        return 4;
      case 2:
        return 8;
      case 3:
      case 8:
        return 16;
      case 4:
        const t3 = __PRIVATE_getPreviousValue(e3);
        return t3 ? 16 + __PRIVATE_estimateByteSize(t3) : 16;
      case 5:
        return 2 * e3.stringValue.length;
      case 6:
        return __PRIVATE_normalizeByteString(e3.bytesValue).approximateByteSize();
      case 7:
        return e3.referenceValue.length;
      case 9:
        return (function __PRIVATE_estimateArrayByteSize(e4) {
          return (e4.values || []).reduce(((e5, t4) => e5 + __PRIVATE_estimateByteSize(t4)), 0);
        })(e3.arrayValue);
      case 10:
      case 11:
        return (function __PRIVATE_estimateMapByteSize(e4) {
          let t4 = 0;
          return forEach(e4.fields, ((e5, n2) => {
            t4 += e5.length + __PRIVATE_estimateByteSize(n2);
          })), t4;
        })(e3.mapValue);
      default:
        throw fail(13486, {
          value: e3
        });
    }
  }
  function __PRIVATE_refValue(e3, t3) {
    return {
      referenceValue: `projects/${e3.projectId}/databases/${e3.database}/documents/${t3.path.canonicalString()}`
    };
  }
  function isInteger(e3) {
    return !!e3 && "integerValue" in e3;
  }
  function isArray(e3) {
    return !!e3 && "arrayValue" in e3;
  }
  function __PRIVATE_isNullValue(e3) {
    return !!e3 && "nullValue" in e3;
  }
  function __PRIVATE_isNanValue(e3) {
    return !!e3 && "doubleValue" in e3 && isNaN(Number(e3.doubleValue));
  }
  function __PRIVATE_isMapValue(e3) {
    return !!e3 && "mapValue" in e3;
  }
  function __PRIVATE_isVectorValue(e3) {
    const t3 = (e3?.mapValue?.fields || {})[ht]?.stringValue;
    return t3 === It;
  }
  function __PRIVATE_deepClone(e3) {
    if (e3.geoPointValue) return {
      geoPointValue: {
        ...e3.geoPointValue
      }
    };
    if (e3.timestampValue && "object" == typeof e3.timestampValue) return {
      timestampValue: {
        ...e3.timestampValue
      }
    };
    if (e3.mapValue) {
      const t3 = {
        mapValue: {
          fields: {}
        }
      };
      return forEach(e3.mapValue.fields, ((e4, n2) => t3.mapValue.fields[e4] = __PRIVATE_deepClone(n2))), t3;
    }
    if (e3.arrayValue) {
      const t3 = {
        arrayValue: {
          values: []
        }
      };
      for (let n2 = 0; n2 < (e3.arrayValue.values || []).length; ++n2) t3.arrayValue.values[n2] = __PRIVATE_deepClone(e3.arrayValue.values[n2]);
      return t3;
    }
    return {
      ...e3
    };
  }
  function __PRIVATE_isMaxValue(e3) {
    return (((e3.mapValue || {}).fields || {}).__type__ || {}).stringValue === Pt;
  }
  var At = {
    mapValue: {
      fields: {
        [ht]: {
          stringValue: It
        },
        [Et]: {
          arrayValue: {}
        }
      }
    }
  };
  var ObjectValue = class _ObjectValue {
    constructor(e3) {
      this.value = e3;
    }
    static empty() {
      return new _ObjectValue({
        mapValue: {}
      });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */
    field(e3) {
      if (e3.isEmpty()) return this.value;
      {
        let t3 = this.value;
        for (let n2 = 0; n2 < e3.length - 1; ++n2) if (t3 = (t3.mapValue.fields || {})[e3.get(n2)], !__PRIVATE_isMapValue(t3)) return null;
        return t3 = (t3.mapValue.fields || {})[e3.lastSegment()], t3 || null;
      }
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */
    set(e3, t3) {
      this.getFieldsMap(e3.popLast())[e3.lastSegment()] = __PRIVATE_deepClone(t3);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */
    setAll(e3) {
      let t3 = FieldPath$1.emptyPath(), n2 = {}, r3 = [];
      e3.forEach(((e4, i4) => {
        if (!t3.isImmediateParentOf(i4)) {
          const e5 = this.getFieldsMap(t3);
          this.applyChanges(e5, n2, r3), n2 = {}, r3 = [], t3 = i4.popLast();
        }
        e4 ? n2[i4.lastSegment()] = __PRIVATE_deepClone(e4) : r3.push(i4.lastSegment());
      }));
      const i3 = this.getFieldsMap(t3);
      this.applyChanges(i3, n2, r3);
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */
    delete(e3) {
      const t3 = this.field(e3.popLast());
      __PRIVATE_isMapValue(t3) && t3.mapValue.fields && delete t3.mapValue.fields[e3.lastSegment()];
    }
    isEqual(e3) {
      return __PRIVATE_valueEquals(this.value, e3.value);
    }
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */
    getFieldsMap(e3) {
      let t3 = this.value;
      t3.mapValue.fields || (t3.mapValue = {
        fields: {}
      });
      for (let n2 = 0; n2 < e3.length; ++n2) {
        let r3 = t3.mapValue.fields[e3.get(n2)];
        __PRIVATE_isMapValue(r3) && r3.mapValue.fields || (r3 = {
          mapValue: {
            fields: {}
          }
        }, t3.mapValue.fields[e3.get(n2)] = r3), t3 = r3;
      }
      return t3.mapValue.fields;
    }
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */
    applyChanges(e3, t3, n2) {
      forEach(t3, ((t4, n3) => e3[t4] = n3));
      for (const t4 of n2) delete e3[t4];
    }
    clone() {
      return new _ObjectValue(__PRIVATE_deepClone(this.value));
    }
  };
  function __PRIVATE_extractFieldMask(e3) {
    const t3 = [];
    return forEach(e3.fields, ((e4, n2) => {
      const r3 = new FieldPath$1([e4]);
      if (__PRIVATE_isMapValue(n2)) {
        const e5 = __PRIVATE_extractFieldMask(n2.mapValue).fields;
        if (0 === e5.length)
          t3.push(r3);
        else
          for (const n3 of e5) t3.push(r3.child(n3));
      } else
        t3.push(r3);
    })), new FieldMask(t3);
  }
  var MutableDocument = class _MutableDocument {
    constructor(e3, t3, n2, r3, i3, s3, o3) {
      this.key = e3, this.documentType = t3, this.version = n2, this.readTime = r3, this.createTime = i3, this.data = s3, this.documentState = o3;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */
    static newInvalidDocument(e3) {
      return new _MutableDocument(
        e3,
        0,
        /* version */
        SnapshotVersion.min(),
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        0
        /* DocumentState.SYNCED */
      );
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */
    static newFoundDocument(e3, t3, n2, r3) {
      return new _MutableDocument(
        e3,
        1,
        /* version */
        t3,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        n2,
        r3,
        0
        /* DocumentState.SYNCED */
      );
    }
    /** Creates a new document that is known to not exist at the given version. */
    static newNoDocument(e3, t3) {
      return new _MutableDocument(
        e3,
        2,
        /* version */
        t3,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        0
        /* DocumentState.SYNCED */
      );
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */
    static newUnknownDocument(e3, t3) {
      return new _MutableDocument(
        e3,
        3,
        /* version */
        t3,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        2
        /* DocumentState.HAS_COMMITTED_MUTATIONS */
      );
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */
    convertToFoundDocument(e3, t3) {
      return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e3), this.version = e3, this.documentType = 1, this.data = t3, this.documentState = 0, this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */
    convertToNoDocument(e3) {
      return this.version = e3, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */
    convertToUnknownDocument(e3) {
      return this.version = e3, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
    }
    setHasCommittedMutations() {
      return this.documentState = 2, this;
    }
    setHasLocalMutations() {
      return this.documentState = 1, this.version = SnapshotVersion.min(), this;
    }
    setReadTime(e3) {
      return this.readTime = e3, this;
    }
    get hasLocalMutations() {
      return 1 === this.documentState;
    }
    get hasCommittedMutations() {
      return 2 === this.documentState;
    }
    get hasPendingWrites() {
      return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
      return 0 !== this.documentType;
    }
    isFoundDocument() {
      return 1 === this.documentType;
    }
    isNoDocument() {
      return 2 === this.documentType;
    }
    isUnknownDocument() {
      return 3 === this.documentType;
    }
    isEqual(e3) {
      return e3 instanceof _MutableDocument && this.key.isEqual(e3.key) && this.version.isEqual(e3.version) && this.documentType === e3.documentType && this.documentState === e3.documentState && this.data.isEqual(e3.data);
    }
    mutableCopy() {
      return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
    }
    toString() {
      return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
  };
  var Bound = class {
    constructor(e3, t3) {
      this.position = e3, this.inclusive = t3;
    }
  };
  function __PRIVATE_boundCompareToDocument(e3, t3, n2) {
    let r3 = 0;
    for (let i3 = 0; i3 < e3.position.length; i3++) {
      const s3 = t3[i3], o3 = e3.position[i3];
      if (s3.field.isKeyField()) r3 = DocumentKey.comparator(DocumentKey.fromName(o3.referenceValue), n2.key);
      else {
        r3 = __PRIVATE_valueCompare(o3, n2.data.field(s3.field));
      }
      if ("desc" === s3.dir && (r3 *= -1), 0 !== r3) break;
    }
    return r3;
  }
  function __PRIVATE_boundEquals(e3, t3) {
    if (null === e3) return null === t3;
    if (null === t3) return false;
    if (e3.inclusive !== t3.inclusive || e3.position.length !== t3.position.length) return false;
    for (let n2 = 0; n2 < e3.position.length; n2++) {
      if (!__PRIVATE_valueEquals(e3.position[n2], t3.position[n2])) return false;
    }
    return true;
  }
  var OrderBy = class {
    constructor(e3, t3 = "asc") {
      this.field = e3, this.dir = t3;
    }
  };
  function __PRIVATE_orderByEquals(e3, t3) {
    return e3.dir === t3.dir && e3.field.isEqual(t3.field);
  }
  var Filter = class {
  };
  var FieldFilter = class _FieldFilter extends Filter {
    constructor(e3, t3, n2) {
      super(), this.field = e3, this.op = t3, this.value = n2;
    }
    /**
     * Creates a filter based on the provided arguments.
     */
    static create(e3, t3, n2) {
      return e3.isKeyField() ? "in" === t3 || "not-in" === t3 ? this.createKeyFieldInFilter(e3, t3, n2) : new __PRIVATE_KeyFieldFilter(e3, t3, n2) : "array-contains" === t3 ? new __PRIVATE_ArrayContainsFilter(e3, n2) : "in" === t3 ? new __PRIVATE_InFilter(e3, n2) : "not-in" === t3 ? new __PRIVATE_NotInFilter(e3, n2) : "array-contains-any" === t3 ? new __PRIVATE_ArrayContainsAnyFilter(e3, n2) : new _FieldFilter(e3, t3, n2);
    }
    static createKeyFieldInFilter(e3, t3, n2) {
      return "in" === t3 ? new __PRIVATE_KeyFieldInFilter(e3, n2) : new __PRIVATE_KeyFieldNotInFilter(e3, n2);
    }
    matches(e3) {
      const t3 = e3.data.field(this.field);
      return "!=" === this.op ? null !== t3 && void 0 === t3.nullValue && this.matchesComparison(__PRIVATE_valueCompare(t3, this.value)) : null !== t3 && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t3) && this.matchesComparison(__PRIVATE_valueCompare(t3, this.value));
    }
    matchesComparison(e3) {
      switch (this.op) {
        case "<":
          return e3 < 0;
        case "<=":
          return e3 <= 0;
        case "==":
          return 0 === e3;
        case "!=":
          return 0 !== e3;
        case ">":
          return e3 > 0;
        case ">=":
          return e3 >= 0;
        default:
          return fail(47266, {
            operator: this.op
          });
      }
    }
    isInequality() {
      return [
        "<",
        "<=",
        ">",
        ">=",
        "!=",
        "not-in"
        /* Operator.NOT_IN */
      ].indexOf(this.op) >= 0;
    }
    getFlattenedFilters() {
      return [this];
    }
    getFilters() {
      return [this];
    }
  };
  var CompositeFilter = class _CompositeFilter extends Filter {
    constructor(e3, t3) {
      super(), this.filters = e3, this.op = t3, this.Pe = null;
    }
    /**
     * Creates a filter based on the provided arguments.
     */
    static create(e3, t3) {
      return new _CompositeFilter(e3, t3);
    }
    matches(e3) {
      return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find(((t3) => !t3.matches(e3))) : void 0 !== this.filters.find(((t3) => t3.matches(e3)));
    }
    getFlattenedFilters() {
      return null !== this.Pe || (this.Pe = this.filters.reduce(((e3, t3) => e3.concat(t3.getFlattenedFilters())), [])), this.Pe;
    }
    // Returns a mutable copy of `this.filters`
    getFilters() {
      return Object.assign([], this.filters);
    }
  };
  function __PRIVATE_compositeFilterIsConjunction(e3) {
    return "and" === e3.op;
  }
  function __PRIVATE_compositeFilterIsFlatConjunction(e3) {
    return __PRIVATE_compositeFilterIsFlat(e3) && __PRIVATE_compositeFilterIsConjunction(e3);
  }
  function __PRIVATE_compositeFilterIsFlat(e3) {
    for (const t3 of e3.filters) if (t3 instanceof CompositeFilter) return false;
    return true;
  }
  function __PRIVATE_canonifyFilter(e3) {
    if (e3 instanceof FieldFilter)
      return e3.field.canonicalString() + e3.op.toString() + canonicalId(e3.value);
    if (__PRIVATE_compositeFilterIsFlatConjunction(e3))
      return e3.filters.map(((e4) => __PRIVATE_canonifyFilter(e4))).join(",");
    {
      const t3 = e3.filters.map(((e4) => __PRIVATE_canonifyFilter(e4))).join(",");
      return `${e3.op}(${t3})`;
    }
  }
  function __PRIVATE_filterEquals(e3, t3) {
    return e3 instanceof FieldFilter ? (function __PRIVATE_fieldFilterEquals(e4, t4) {
      return t4 instanceof FieldFilter && e4.op === t4.op && e4.field.isEqual(t4.field) && __PRIVATE_valueEquals(e4.value, t4.value);
    })(e3, t3) : e3 instanceof CompositeFilter ? (function __PRIVATE_compositeFilterEquals(e4, t4) {
      if (t4 instanceof CompositeFilter && e4.op === t4.op && e4.filters.length === t4.filters.length) {
        return e4.filters.reduce(((e5, n2, r3) => e5 && __PRIVATE_filterEquals(n2, t4.filters[r3])), true);
      }
      return false;
    })(e3, t3) : void fail(19439);
  }
  function __PRIVATE_stringifyFilter(e3) {
    return e3 instanceof FieldFilter ? (function __PRIVATE_stringifyFieldFilter(e4) {
      return `${e4.field.canonicalString()} ${e4.op} ${canonicalId(e4.value)}`;
    })(e3) : e3 instanceof CompositeFilter ? (function __PRIVATE_stringifyCompositeFilter(e4) {
      return e4.op.toString() + " {" + e4.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
    })(e3) : "Filter";
  }
  var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
    constructor(e3, t3, n2) {
      super(e3, t3, n2), this.key = DocumentKey.fromName(n2.referenceValue);
    }
    matches(e3) {
      const t3 = DocumentKey.comparator(e3.key, this.key);
      return this.matchesComparison(t3);
    }
  };
  var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "in", t3), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t3);
    }
    matches(e3) {
      return this.keys.some(((t3) => t3.isEqual(e3.key)));
    }
  };
  var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "not-in", t3), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t3);
    }
    matches(e3) {
      return !this.keys.some(((t3) => t3.isEqual(e3.key)));
    }
  };
  function __PRIVATE_extractDocumentKeysFromArrayValue(e3, t3) {
    return (t3.arrayValue?.values || []).map(((e4) => DocumentKey.fromName(e4.referenceValue)));
  }
  var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "array-contains", t3);
    }
    matches(e3) {
      const t3 = e3.data.field(this.field);
      return isArray(t3) && __PRIVATE_arrayValueContains(t3.arrayValue, this.value);
    }
  };
  var __PRIVATE_InFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "in", t3);
    }
    matches(e3) {
      const t3 = e3.data.field(this.field);
      return null !== t3 && __PRIVATE_arrayValueContains(this.value.arrayValue, t3);
    }
  };
  var __PRIVATE_NotInFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "not-in", t3);
    }
    matches(e3) {
      if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
        nullValue: "NULL_VALUE"
      })) return false;
      const t3 = e3.data.field(this.field);
      return null !== t3 && void 0 === t3.nullValue && !__PRIVATE_arrayValueContains(this.value.arrayValue, t3);
    }
  };
  var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
    constructor(e3, t3) {
      super(e3, "array-contains-any", t3);
    }
    matches(e3) {
      const t3 = e3.data.field(this.field);
      return !(!isArray(t3) || !t3.arrayValue.values) && t3.arrayValue.values.some(((e4) => __PRIVATE_arrayValueContains(this.value.arrayValue, e4)));
    }
  };
  var __PRIVATE_TargetImpl = class {
    constructor(e3, t3 = null, n2 = [], r3 = [], i3 = null, s3 = null, o3 = null) {
      this.path = e3, this.collectionGroup = t3, this.orderBy = n2, this.filters = r3, this.limit = i3, this.startAt = s3, this.endAt = o3, this.Te = null;
    }
  };
  function __PRIVATE_newTarget(e3, t3 = null, n2 = [], r3 = [], i3 = null, s3 = null, o3 = null) {
    return new __PRIVATE_TargetImpl(e3, t3, n2, r3, i3, s3, o3);
  }
  function __PRIVATE_canonifyTarget(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    if (null === t3.Te) {
      let e4 = t3.path.canonicalString();
      null !== t3.collectionGroup && (e4 += "|cg:" + t3.collectionGroup), e4 += "|f:", e4 += t3.filters.map(((e5) => __PRIVATE_canonifyFilter(e5))).join(","), e4 += "|ob:", e4 += t3.orderBy.map(((e5) => (function __PRIVATE_canonifyOrderBy(e6) {
        return e6.field.canonicalString() + e6.dir;
      })(e5))).join(","), __PRIVATE_isNullOrUndefined(t3.limit) || (e4 += "|l:", e4 += t3.limit), t3.startAt && (e4 += "|lb:", e4 += t3.startAt.inclusive ? "b:" : "a:", e4 += t3.startAt.position.map(((e5) => canonicalId(e5))).join(",")), t3.endAt && (e4 += "|ub:", e4 += t3.endAt.inclusive ? "a:" : "b:", e4 += t3.endAt.position.map(((e5) => canonicalId(e5))).join(",")), t3.Te = e4;
    }
    return t3.Te;
  }
  function __PRIVATE_targetEquals(e3, t3) {
    if (e3.limit !== t3.limit) return false;
    if (e3.orderBy.length !== t3.orderBy.length) return false;
    for (let n2 = 0; n2 < e3.orderBy.length; n2++) if (!__PRIVATE_orderByEquals(e3.orderBy[n2], t3.orderBy[n2])) return false;
    if (e3.filters.length !== t3.filters.length) return false;
    for (let n2 = 0; n2 < e3.filters.length; n2++) if (!__PRIVATE_filterEquals(e3.filters[n2], t3.filters[n2])) return false;
    return e3.collectionGroup === t3.collectionGroup && (!!e3.path.isEqual(t3.path) && (!!__PRIVATE_boundEquals(e3.startAt, t3.startAt) && __PRIVATE_boundEquals(e3.endAt, t3.endAt)));
  }
  function __PRIVATE_targetIsDocumentTarget(e3) {
    return DocumentKey.isDocumentKey(e3.path) && null === e3.collectionGroup && 0 === e3.filters.length;
  }
  var __PRIVATE_QueryImpl = class {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(e3, t3 = null, n2 = [], r3 = [], i3 = null, s3 = "F", o3 = null, _2 = null) {
      this.path = e3, this.collectionGroup = t3, this.explicitOrderBy = n2, this.filters = r3, this.limit = i3, this.limitType = s3, this.startAt = o3, this.endAt = _2, this.Ie = null, // The corresponding `Target` of this `Query` instance, for use with
      // non-aggregate queries.
      this.Ee = null, // The corresponding `Target` of this `Query` instance, for use with
      // aggregate queries. Unlike targets for non-aggregate queries,
      // aggregate query targets do not contain normalized order-bys, they only
      // contain explicit order-bys.
      this.de = null, this.startAt, this.endAt;
    }
  };
  function __PRIVATE_newQuery(e3, t3, n2, r3, i3, s3, o3, _2) {
    return new __PRIVATE_QueryImpl(e3, t3, n2, r3, i3, s3, o3, _2);
  }
  function __PRIVATE_newQueryForPath(e3) {
    return new __PRIVATE_QueryImpl(e3);
  }
  function __PRIVATE_queryMatchesAllDocuments(e3) {
    return 0 === e3.filters.length && null === e3.limit && null == e3.startAt && null == e3.endAt && (0 === e3.explicitOrderBy.length || 1 === e3.explicitOrderBy.length && e3.explicitOrderBy[0].field.isKeyField());
  }
  function __PRIVATE_isCollectionGroupQuery(e3) {
    return null !== e3.collectionGroup;
  }
  function __PRIVATE_queryNormalizedOrderBy(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    if (null === t3.Ie) {
      t3.Ie = [];
      const e4 = /* @__PURE__ */ new Set();
      for (const n3 of t3.explicitOrderBy) t3.Ie.push(n3), e4.add(n3.field.canonicalString());
      const n2 = t3.explicitOrderBy.length > 0 ? t3.explicitOrderBy[t3.explicitOrderBy.length - 1].dir : "asc", r3 = (function __PRIVATE_getInequalityFilterFields(e5) {
        let t4 = new SortedSet(FieldPath$1.comparator);
        return e5.filters.forEach(((e6) => {
          e6.getFlattenedFilters().forEach(((e7) => {
            e7.isInequality() && (t4 = t4.add(e7.field));
          }));
        })), t4;
      })(t3);
      r3.forEach(((r4) => {
        e4.has(r4.canonicalString()) || r4.isKeyField() || t3.Ie.push(new OrderBy(r4, n2));
      })), // Add the document key field to the last if it is not explicitly ordered.
      e4.has(FieldPath$1.keyField().canonicalString()) || t3.Ie.push(new OrderBy(FieldPath$1.keyField(), n2));
    }
    return t3.Ie;
  }
  function __PRIVATE_queryToTarget(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    return t3.Ee || (t3.Ee = __PRIVATE__queryToTarget(t3, __PRIVATE_queryNormalizedOrderBy(e3))), t3.Ee;
  }
  function __PRIVATE__queryToTarget(e3, t3) {
    if ("F" === e3.limitType) return __PRIVATE_newTarget(e3.path, e3.collectionGroup, t3, e3.filters, e3.limit, e3.startAt, e3.endAt);
    {
      t3 = t3.map(((e4) => {
        const t4 = "desc" === e4.dir ? "asc" : "desc";
        return new OrderBy(e4.field, t4);
      }));
      const n2 = e3.endAt ? new Bound(e3.endAt.position, e3.endAt.inclusive) : null, r3 = e3.startAt ? new Bound(e3.startAt.position, e3.startAt.inclusive) : null;
      return __PRIVATE_newTarget(e3.path, e3.collectionGroup, t3, e3.filters, e3.limit, n2, r3);
    }
  }
  function __PRIVATE_queryWithAddedFilter(e3, t3) {
    const n2 = e3.filters.concat([t3]);
    return new __PRIVATE_QueryImpl(e3.path, e3.collectionGroup, e3.explicitOrderBy.slice(), n2, e3.limit, e3.limitType, e3.startAt, e3.endAt);
  }
  function __PRIVATE_queryWithLimit(e3, t3, n2) {
    return new __PRIVATE_QueryImpl(e3.path, e3.collectionGroup, e3.explicitOrderBy.slice(), e3.filters.slice(), t3, n2, e3.startAt, e3.endAt);
  }
  function __PRIVATE_queryEquals(e3, t3) {
    return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e3), __PRIVATE_queryToTarget(t3)) && e3.limitType === t3.limitType;
  }
  function __PRIVATE_canonifyQuery(e3) {
    return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e3))}|lt:${e3.limitType}`;
  }
  function __PRIVATE_stringifyQuery(e3) {
    return `Query(target=${(function __PRIVATE_stringifyTarget(e4) {
      let t3 = e4.path.canonicalString();
      return null !== e4.collectionGroup && (t3 += " collectionGroup=" + e4.collectionGroup), e4.filters.length > 0 && (t3 += `, filters: [${e4.filters.map(((e5) => __PRIVATE_stringifyFilter(e5))).join(", ")}]`), __PRIVATE_isNullOrUndefined(e4.limit) || (t3 += ", limit: " + e4.limit), e4.orderBy.length > 0 && (t3 += `, orderBy: [${e4.orderBy.map(((e5) => (function __PRIVATE_stringifyOrderBy(e6) {
        return `${e6.field.canonicalString()} (${e6.dir})`;
      })(e5))).join(", ")}]`), e4.startAt && (t3 += ", startAt: ", t3 += e4.startAt.inclusive ? "b:" : "a:", t3 += e4.startAt.position.map(((e5) => canonicalId(e5))).join(",")), e4.endAt && (t3 += ", endAt: ", t3 += e4.endAt.inclusive ? "a:" : "b:", t3 += e4.endAt.position.map(((e5) => canonicalId(e5))).join(",")), `Target(${t3})`;
    })(__PRIVATE_queryToTarget(e3))}; limitType=${e3.limitType})`;
  }
  function __PRIVATE_queryMatches(e3, t3) {
    return t3.isFoundDocument() && (function __PRIVATE_queryMatchesPathAndCollectionGroup(e4, t4) {
      const n2 = t4.key.path;
      return null !== e4.collectionGroup ? t4.key.hasCollectionId(e4.collectionGroup) && e4.path.isPrefixOf(n2) : DocumentKey.isDocumentKey(e4.path) ? e4.path.isEqual(n2) : e4.path.isImmediateParentOf(n2);
    })(e3, t3) && (function __PRIVATE_queryMatchesOrderBy(e4, t4) {
      for (const n2 of __PRIVATE_queryNormalizedOrderBy(e4))
        if (!n2.field.isKeyField() && null === t4.data.field(n2.field)) return false;
      return true;
    })(e3, t3) && (function __PRIVATE_queryMatchesFilters(e4, t4) {
      for (const n2 of e4.filters) if (!n2.matches(t4)) return false;
      return true;
    })(e3, t3) && (function __PRIVATE_queryMatchesBounds(e4, t4) {
      if (e4.startAt && !/**
      * Returns true if a document sorts before a bound using the provided sort
      * order.
      */
      (function __PRIVATE_boundSortsBeforeDocument(e5, t5, n2) {
        const r3 = __PRIVATE_boundCompareToDocument(e5, t5, n2);
        return e5.inclusive ? r3 <= 0 : r3 < 0;
      })(e4.startAt, __PRIVATE_queryNormalizedOrderBy(e4), t4)) return false;
      if (e4.endAt && !(function __PRIVATE_boundSortsAfterDocument(e5, t5, n2) {
        const r3 = __PRIVATE_boundCompareToDocument(e5, t5, n2);
        return e5.inclusive ? r3 >= 0 : r3 > 0;
      })(e4.endAt, __PRIVATE_queryNormalizedOrderBy(e4), t4)) return false;
      return true;
    })(e3, t3);
  }
  function __PRIVATE_queryCollectionGroup(e3) {
    return e3.collectionGroup || (e3.path.length % 2 == 1 ? e3.path.lastSegment() : e3.path.get(e3.path.length - 2));
  }
  function __PRIVATE_newQueryComparator(e3) {
    return (t3, n2) => {
      let r3 = false;
      for (const i3 of __PRIVATE_queryNormalizedOrderBy(e3)) {
        const e4 = __PRIVATE_compareDocs(i3, t3, n2);
        if (0 !== e4) return e4;
        r3 = r3 || i3.field.isKeyField();
      }
      return 0;
    };
  }
  function __PRIVATE_compareDocs(e3, t3, n2) {
    const r3 = e3.field.isKeyField() ? DocumentKey.comparator(t3.key, n2.key) : (function __PRIVATE_compareDocumentsByField(e4, t4, n3) {
      const r4 = t4.data.field(e4), i3 = n3.data.field(e4);
      return null !== r4 && null !== i3 ? __PRIVATE_valueCompare(r4, i3) : fail(42886);
    })(e3.field, t3, n2);
    switch (e3.dir) {
      case "asc":
        return r3;
      case "desc":
        return -1 * r3;
      default:
        return fail(19790, {
          direction: e3.dir
        });
    }
  }
  var ObjectMap = class {
    constructor(e3, t3) {
      this.mapKeyFn = e3, this.equalsFn = t3, /**
       * The inner map for a key/value pair. Due to the possibility of collisions we
       * keep a list of entries that we do a linear search through to find an actual
       * match. Note that collisions should be rare, so we still expect near
       * constant time lookups in practice.
       */
      this.inner = {}, /** The number of entries stored in the map */
      this.innerSize = 0;
    }
    /** Get a value for this key, or undefined if it does not exist. */
    get(e3) {
      const t3 = this.mapKeyFn(e3), n2 = this.inner[t3];
      if (void 0 !== n2) {
        for (const [t4, r3] of n2) if (this.equalsFn(t4, e3)) return r3;
      }
    }
    has(e3) {
      return void 0 !== this.get(e3);
    }
    /** Put this key and value in the map. */
    set(e3, t3) {
      const n2 = this.mapKeyFn(e3), r3 = this.inner[n2];
      if (void 0 === r3) return this.inner[n2] = [[e3, t3]], void this.innerSize++;
      for (let n3 = 0; n3 < r3.length; n3++) if (this.equalsFn(r3[n3][0], e3))
        return void (r3[n3] = [e3, t3]);
      r3.push([e3, t3]), this.innerSize++;
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    delete(e3) {
      const t3 = this.mapKeyFn(e3), n2 = this.inner[t3];
      if (void 0 === n2) return false;
      for (let r3 = 0; r3 < n2.length; r3++) if (this.equalsFn(n2[r3][0], e3)) return 1 === n2.length ? delete this.inner[t3] : n2.splice(r3, 1), this.innerSize--, true;
      return false;
    }
    forEach(e3) {
      forEach(this.inner, ((t3, n2) => {
        for (const [t4, r3] of n2) e3(t4, r3);
      }));
    }
    isEmpty() {
      return isEmpty2(this.inner);
    }
    size() {
      return this.innerSize;
    }
  };
  var Rt = new SortedMap(DocumentKey.comparator);
  function __PRIVATE_mutableDocumentMap() {
    return Rt;
  }
  var Vt = new SortedMap(DocumentKey.comparator);
  function documentMap(...e3) {
    let t3 = Vt;
    for (const n2 of e3) t3 = t3.insert(n2.key, n2);
    return t3;
  }
  function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e3) {
    let t3 = Vt;
    return e3.forEach(((e4, n2) => t3 = t3.insert(e4, n2.overlayedDocument))), t3;
  }
  function __PRIVATE_newOverlayMap() {
    return __PRIVATE_newDocumentKeyMap();
  }
  function __PRIVATE_newMutationMap() {
    return __PRIVATE_newDocumentKeyMap();
  }
  function __PRIVATE_newDocumentKeyMap() {
    return new ObjectMap(((e3) => e3.toString()), ((e3, t3) => e3.isEqual(t3)));
  }
  var mt = new SortedMap(DocumentKey.comparator);
  var ft = new SortedSet(DocumentKey.comparator);
  function __PRIVATE_documentKeySet(...e3) {
    let t3 = ft;
    for (const n2 of e3) t3 = t3.add(n2);
    return t3;
  }
  var gt = new SortedSet(__PRIVATE_primitiveComparator);
  function __PRIVATE_targetIdSet() {
    return gt;
  }
  function __PRIVATE_toDouble(e3, t3) {
    if (e3.useProto3Json) {
      if (isNaN(t3)) return {
        doubleValue: "NaN"
      };
      if (t3 === 1 / 0) return {
        doubleValue: "Infinity"
      };
      if (t3 === -1 / 0) return {
        doubleValue: "-Infinity"
      };
    }
    return {
      doubleValue: __PRIVATE_isNegativeZero(t3) ? "-0" : t3
    };
  }
  function __PRIVATE_toInteger(e3) {
    return {
      integerValue: "" + e3
    };
  }
  function toNumber(e3, t3) {
    return isSafeInteger(t3) ? __PRIVATE_toInteger(t3) : __PRIVATE_toDouble(e3, t3);
  }
  var TransformOperation = class {
    constructor() {
      this._ = void 0;
    }
  };
  function __PRIVATE_applyTransformOperationToLocalView(e3, t3, n2) {
    return e3 instanceof __PRIVATE_ServerTimestampTransform ? (function serverTimestamp$1(e4, t4) {
      const n3 = {
        fields: {
          [at]: {
            stringValue: _t
          },
          [ct]: {
            timestampValue: {
              seconds: e4.seconds,
              nanos: e4.nanoseconds
            }
          }
        }
      };
      return t4 && __PRIVATE_isServerTimestamp(t4) && (t4 = __PRIVATE_getPreviousValue(t4)), t4 && (n3.fields[ut] = t4), {
        mapValue: n3
      };
    })(n2, t3) : e3 instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e3, t3) : e3 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e3, t3) : (function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e4, t4) {
      const n3 = __PRIVATE_computeTransformOperationBaseValue(e4, t4), r3 = asNumber(n3) + asNumber(e4.Ae);
      return isInteger(n3) && isInteger(e4.Ae) ? __PRIVATE_toInteger(r3) : __PRIVATE_toDouble(e4.serializer, r3);
    })(e3, t3);
  }
  function __PRIVATE_applyTransformOperationToRemoteDocument(e3, t3, n2) {
    return e3 instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e3, t3) : e3 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e3, t3) : n2;
  }
  function __PRIVATE_computeTransformOperationBaseValue(e3, t3) {
    return e3 instanceof __PRIVATE_NumericIncrementTransformOperation ? (
      /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
      (function __PRIVATE_isNumber(e4) {
        return isInteger(e4) || (function __PRIVATE_isDouble(e5) {
          return !!e5 && "doubleValue" in e5;
        })(e4);
      })(t3) ? t3 : {
        integerValue: 0
      }
    ) : null;
  }
  var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
  };
  var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
    constructor(e3) {
      super(), this.elements = e3;
    }
  };
  function __PRIVATE_applyArrayUnionTransformOperation(e3, t3) {
    const n2 = __PRIVATE_coercedFieldValuesArray(t3);
    for (const t4 of e3.elements) n2.some(((e4) => __PRIVATE_valueEquals(e4, t4))) || n2.push(t4);
    return {
      arrayValue: {
        values: n2
      }
    };
  }
  var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
    constructor(e3) {
      super(), this.elements = e3;
    }
  };
  function __PRIVATE_applyArrayRemoveTransformOperation(e3, t3) {
    let n2 = __PRIVATE_coercedFieldValuesArray(t3);
    for (const t4 of e3.elements) n2 = n2.filter(((e4) => !__PRIVATE_valueEquals(e4, t4)));
    return {
      arrayValue: {
        values: n2
      }
    };
  }
  var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
    constructor(e3, t3) {
      super(), this.serializer = e3, this.Ae = t3;
    }
  };
  function asNumber(e3) {
    return __PRIVATE_normalizeNumber(e3.integerValue || e3.doubleValue);
  }
  function __PRIVATE_coercedFieldValuesArray(e3) {
    return isArray(e3) && e3.arrayValue.values ? e3.arrayValue.values.slice() : [];
  }
  var FieldTransform = class {
    constructor(e3, t3) {
      this.field = e3, this.transform = t3;
    }
  };
  function __PRIVATE_fieldTransformEquals(e3, t3) {
    return e3.field.isEqual(t3.field) && (function __PRIVATE_transformOperationEquals(e4, t4) {
      return e4 instanceof __PRIVATE_ArrayUnionTransformOperation && t4 instanceof __PRIVATE_ArrayUnionTransformOperation || e4 instanceof __PRIVATE_ArrayRemoveTransformOperation && t4 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e4.elements, t4.elements, __PRIVATE_valueEquals) : e4 instanceof __PRIVATE_NumericIncrementTransformOperation && t4 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e4.Ae, t4.Ae) : e4 instanceof __PRIVATE_ServerTimestampTransform && t4 instanceof __PRIVATE_ServerTimestampTransform;
    })(e3.transform, t3.transform);
  }
  var MutationResult = class {
    constructor(e3, t3) {
      this.version = e3, this.transformResults = t3;
    }
  };
  var Precondition = class _Precondition {
    constructor(e3, t3) {
      this.updateTime = e3, this.exists = t3;
    }
    /** Creates a new empty Precondition. */
    static none() {
      return new _Precondition();
    }
    /** Creates a new Precondition with an exists flag. */
    static exists(e3) {
      return new _Precondition(void 0, e3);
    }
    /** Creates a new Precondition based on a version a document exists at. */
    static updateTime(e3) {
      return new _Precondition(e3);
    }
    /** Returns whether this Precondition is empty. */
    get isNone() {
      return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(e3) {
      return this.exists === e3.exists && (this.updateTime ? !!e3.updateTime && this.updateTime.isEqual(e3.updateTime) : !e3.updateTime);
    }
  };
  function __PRIVATE_preconditionIsValidForDocument(e3, t3) {
    return void 0 !== e3.updateTime ? t3.isFoundDocument() && t3.version.isEqual(e3.updateTime) : void 0 === e3.exists || e3.exists === t3.isFoundDocument();
  }
  var Mutation = class {
  };
  function __PRIVATE_calculateOverlayMutation(e3, t3) {
    if (!e3.hasLocalMutations || t3 && 0 === t3.fields.length) return null;
    if (null === t3) return e3.isNoDocument() ? new __PRIVATE_DeleteMutation(e3.key, Precondition.none()) : new __PRIVATE_SetMutation(e3.key, e3.data, Precondition.none());
    {
      const n2 = e3.data, r3 = ObjectValue.empty();
      let i3 = new SortedSet(FieldPath$1.comparator);
      for (let e4 of t3.fields) if (!i3.has(e4)) {
        let t4 = n2.field(e4);
        null === t4 && e4.length > 1 && (e4 = e4.popLast(), t4 = n2.field(e4)), null === t4 ? r3.delete(e4) : r3.set(e4, t4), i3 = i3.add(e4);
      }
      return new __PRIVATE_PatchMutation(e3.key, r3, new FieldMask(i3.toArray()), Precondition.none());
    }
  }
  function __PRIVATE_mutationApplyToRemoteDocument(e3, t3, n2) {
    e3 instanceof __PRIVATE_SetMutation ? (function __PRIVATE_setMutationApplyToRemoteDocument(e4, t4, n3) {
      const r3 = e4.value.clone(), i3 = __PRIVATE_serverTransformResults(e4.fieldTransforms, t4, n3.transformResults);
      r3.setAll(i3), t4.convertToFoundDocument(n3.version, r3).setHasCommittedMutations();
    })(e3, t3, n2) : e3 instanceof __PRIVATE_PatchMutation ? (function __PRIVATE_patchMutationApplyToRemoteDocument(e4, t4, n3) {
      if (!__PRIVATE_preconditionIsValidForDocument(e4.precondition, t4))
        return void t4.convertToUnknownDocument(n3.version);
      const r3 = __PRIVATE_serverTransformResults(e4.fieldTransforms, t4, n3.transformResults), i3 = t4.data;
      i3.setAll(__PRIVATE_getPatch(e4)), i3.setAll(r3), t4.convertToFoundDocument(n3.version, i3).setHasCommittedMutations();
    })(e3, t3, n2) : (function __PRIVATE_deleteMutationApplyToRemoteDocument(e4, t4, n3) {
      t4.convertToNoDocument(n3.version).setHasCommittedMutations();
    })(0, t3, n2);
  }
  function __PRIVATE_mutationApplyToLocalView(e3, t3, n2, r3) {
    return e3 instanceof __PRIVATE_SetMutation ? (function __PRIVATE_setMutationApplyToLocalView(e4, t4, n3, r4) {
      if (!__PRIVATE_preconditionIsValidForDocument(e4.precondition, t4))
        return n3;
      const i3 = e4.value.clone(), s3 = __PRIVATE_localTransformResults(e4.fieldTransforms, r4, t4);
      return i3.setAll(s3), t4.convertToFoundDocument(t4.version, i3).setHasLocalMutations(), null;
    })(e3, t3, n2, r3) : e3 instanceof __PRIVATE_PatchMutation ? (function __PRIVATE_patchMutationApplyToLocalView(e4, t4, n3, r4) {
      if (!__PRIVATE_preconditionIsValidForDocument(e4.precondition, t4)) return n3;
      const i3 = __PRIVATE_localTransformResults(e4.fieldTransforms, r4, t4), s3 = t4.data;
      if (s3.setAll(__PRIVATE_getPatch(e4)), s3.setAll(i3), t4.convertToFoundDocument(t4.version, s3).setHasLocalMutations(), null === n3) return null;
      return n3.unionWith(e4.fieldMask.fields).unionWith(e4.fieldTransforms.map(((e5) => e5.field)));
    })(e3, t3, n2, r3) : (function __PRIVATE_deleteMutationApplyToLocalView(e4, t4, n3) {
      if (__PRIVATE_preconditionIsValidForDocument(e4.precondition, t4)) return t4.convertToNoDocument(t4.version).setHasLocalMutations(), null;
      return n3;
    })(e3, t3, n2);
  }
  function __PRIVATE_mutationExtractBaseValue(e3, t3) {
    let n2 = null;
    for (const r3 of e3.fieldTransforms) {
      const e4 = t3.data.field(r3.field), i3 = __PRIVATE_computeTransformOperationBaseValue(r3.transform, e4 || null);
      null != i3 && (null === n2 && (n2 = ObjectValue.empty()), n2.set(r3.field, i3));
    }
    return n2 || null;
  }
  function __PRIVATE_mutationEquals(e3, t3) {
    return e3.type === t3.type && (!!e3.key.isEqual(t3.key) && (!!e3.precondition.isEqual(t3.precondition) && (!!(function __PRIVATE_fieldTransformsAreEqual(e4, t4) {
      return void 0 === e4 && void 0 === t4 || !(!e4 || !t4) && __PRIVATE_arrayEquals(e4, t4, ((e5, t5) => __PRIVATE_fieldTransformEquals(e5, t5)));
    })(e3.fieldTransforms, t3.fieldTransforms) && (0 === e3.type ? e3.value.isEqual(t3.value) : 1 !== e3.type || e3.data.isEqual(t3.data) && e3.fieldMask.isEqual(t3.fieldMask)))));
  }
  var __PRIVATE_SetMutation = class extends Mutation {
    constructor(e3, t3, n2, r3 = []) {
      super(), this.key = e3, this.value = t3, this.precondition = n2, this.fieldTransforms = r3, this.type = 0;
    }
    getFieldMask() {
      return null;
    }
  };
  var __PRIVATE_PatchMutation = class extends Mutation {
    constructor(e3, t3, n2, r3, i3 = []) {
      super(), this.key = e3, this.data = t3, this.fieldMask = n2, this.precondition = r3, this.fieldTransforms = i3, this.type = 1;
    }
    getFieldMask() {
      return this.fieldMask;
    }
  };
  function __PRIVATE_getPatch(e3) {
    const t3 = /* @__PURE__ */ new Map();
    return e3.fieldMask.fields.forEach(((n2) => {
      if (!n2.isEmpty()) {
        const r3 = e3.data.field(n2);
        t3.set(n2, r3);
      }
    })), t3;
  }
  function __PRIVATE_serverTransformResults(e3, t3, n2) {
    const r3 = /* @__PURE__ */ new Map();
    __PRIVATE_hardAssert(e3.length === n2.length, 32656, {
      Re: n2.length,
      Ve: e3.length
    });
    for (let i3 = 0; i3 < n2.length; i3++) {
      const s3 = e3[i3], o3 = s3.transform, _2 = t3.data.field(s3.field);
      r3.set(s3.field, __PRIVATE_applyTransformOperationToRemoteDocument(o3, _2, n2[i3]));
    }
    return r3;
  }
  function __PRIVATE_localTransformResults(e3, t3, n2) {
    const r3 = /* @__PURE__ */ new Map();
    for (const i3 of e3) {
      const e4 = i3.transform, s3 = n2.data.field(i3.field);
      r3.set(i3.field, __PRIVATE_applyTransformOperationToLocalView(e4, s3, t3));
    }
    return r3;
  }
  var __PRIVATE_DeleteMutation = class extends Mutation {
    constructor(e3, t3) {
      super(), this.key = e3, this.precondition = t3, this.type = 2, this.fieldTransforms = [];
    }
    getFieldMask() {
      return null;
    }
  };
  var __PRIVATE_VerifyMutation = class extends Mutation {
    constructor(e3, t3) {
      super(), this.key = e3, this.precondition = t3, this.type = 3, this.fieldTransforms = [];
    }
    getFieldMask() {
      return null;
    }
  };
  var MutationBatch = class {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(e3, t3, n2, r3) {
      this.batchId = e3, this.localWriteTime = t3, this.baseMutations = n2, this.mutations = r3;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */
    applyToRemoteDocument(e3, t3) {
      const n2 = t3.mutationResults;
      for (let t4 = 0; t4 < this.mutations.length; t4++) {
        const r3 = this.mutations[t4];
        if (r3.key.isEqual(e3.key)) {
          __PRIVATE_mutationApplyToRemoteDocument(r3, e3, n2[t4]);
        }
      }
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */
    applyToLocalView(e3, t3) {
      for (const n2 of this.baseMutations) n2.key.isEqual(e3.key) && (t3 = __PRIVATE_mutationApplyToLocalView(n2, e3, t3, this.localWriteTime));
      for (const n2 of this.mutations) n2.key.isEqual(e3.key) && (t3 = __PRIVATE_mutationApplyToLocalView(n2, e3, t3, this.localWriteTime));
      return t3;
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */
    applyToLocalDocumentSet(e3, t3) {
      const n2 = __PRIVATE_newMutationMap();
      return this.mutations.forEach(((r3) => {
        const i3 = e3.get(r3.key), s3 = i3.overlayedDocument;
        let o3 = this.applyToLocalView(s3, i3.mutatedFields);
        o3 = t3.has(r3.key) ? null : o3;
        const _2 = __PRIVATE_calculateOverlayMutation(s3, o3);
        null !== _2 && n2.set(r3.key, _2), s3.isValidDocument() || s3.convertToNoDocument(SnapshotVersion.min());
      })), n2;
    }
    keys() {
      return this.mutations.reduce(((e3, t3) => e3.add(t3.key)), __PRIVATE_documentKeySet());
    }
    isEqual(e3) {
      return this.batchId === e3.batchId && __PRIVATE_arrayEquals(this.mutations, e3.mutations, ((e4, t3) => __PRIVATE_mutationEquals(e4, t3))) && __PRIVATE_arrayEquals(this.baseMutations, e3.baseMutations, ((e4, t3) => __PRIVATE_mutationEquals(e4, t3)));
    }
  };
  var MutationBatchResult = class _MutationBatchResult {
    constructor(e3, t3, n2, r3) {
      this.batch = e3, this.commitVersion = t3, this.mutationResults = n2, this.docVersions = r3;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */
    static from(e3, t3, n2) {
      __PRIVATE_hardAssert(e3.mutations.length === n2.length, 58842, {
        me: e3.mutations.length,
        fe: n2.length
      });
      let r3 = /* @__PURE__ */ (function __PRIVATE_documentVersionMap() {
        return mt;
      })();
      const i3 = e3.mutations;
      for (let e4 = 0; e4 < i3.length; e4++) r3 = r3.insert(i3[e4].key, n2[e4].version);
      return new _MutationBatchResult(e3, t3, n2, r3);
    }
  };
  var Overlay = class {
    constructor(e3, t3) {
      this.largestBatchId = e3, this.mutation = t3;
    }
    getKey() {
      return this.mutation.key;
    }
    isEqual(e3) {
      return null !== e3 && this.mutation === e3.mutation;
    }
    toString() {
      return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
    }
  };
  var ExistenceFilter = class {
    constructor(e3, t3) {
      this.count = e3, this.unchangedNames = t3;
    }
  };
  var pt;
  var yt;
  function __PRIVATE_isPermanentError(e3) {
    switch (e3) {
      case N2.OK:
        return fail(64938);
      case N2.CANCELLED:
      case N2.UNKNOWN:
      case N2.DEADLINE_EXCEEDED:
      case N2.RESOURCE_EXHAUSTED:
      case N2.INTERNAL:
      case N2.UNAVAILABLE:
      // Unauthenticated means something went wrong with our token and we need
      // to retry with new credentials which will happen automatically.
      case N2.UNAUTHENTICATED:
        return false;
      case N2.INVALID_ARGUMENT:
      case N2.NOT_FOUND:
      case N2.ALREADY_EXISTS:
      case N2.PERMISSION_DENIED:
      case N2.FAILED_PRECONDITION:
      // Aborted might be retried in some scenarios, but that is dependent on
      // the context and should handled individually by the calling code.
      // See https://cloud.google.com/apis/design/errors.
      case N2.ABORTED:
      case N2.OUT_OF_RANGE:
      case N2.UNIMPLEMENTED:
      case N2.DATA_LOSS:
        return true;
      default:
        return fail(15467, {
          code: e3
        });
    }
  }
  function __PRIVATE_mapCodeFromRpcCode(e3) {
    if (void 0 === e3)
      return __PRIVATE_logError("GRPC error has no .code"), N2.UNKNOWN;
    switch (e3) {
      case pt.OK:
        return N2.OK;
      case pt.CANCELLED:
        return N2.CANCELLED;
      case pt.UNKNOWN:
        return N2.UNKNOWN;
      case pt.DEADLINE_EXCEEDED:
        return N2.DEADLINE_EXCEEDED;
      case pt.RESOURCE_EXHAUSTED:
        return N2.RESOURCE_EXHAUSTED;
      case pt.INTERNAL:
        return N2.INTERNAL;
      case pt.UNAVAILABLE:
        return N2.UNAVAILABLE;
      case pt.UNAUTHENTICATED:
        return N2.UNAUTHENTICATED;
      case pt.INVALID_ARGUMENT:
        return N2.INVALID_ARGUMENT;
      case pt.NOT_FOUND:
        return N2.NOT_FOUND;
      case pt.ALREADY_EXISTS:
        return N2.ALREADY_EXISTS;
      case pt.PERMISSION_DENIED:
        return N2.PERMISSION_DENIED;
      case pt.FAILED_PRECONDITION:
        return N2.FAILED_PRECONDITION;
      case pt.ABORTED:
        return N2.ABORTED;
      case pt.OUT_OF_RANGE:
        return N2.OUT_OF_RANGE;
      case pt.UNIMPLEMENTED:
        return N2.UNIMPLEMENTED;
      case pt.DATA_LOSS:
        return N2.DATA_LOSS;
      default:
        return fail(39323, {
          code: e3
        });
    }
  }
  (yt = pt || (pt = {}))[yt.OK = 0] = "OK", yt[yt.CANCELLED = 1] = "CANCELLED", yt[yt.UNKNOWN = 2] = "UNKNOWN", yt[yt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", yt[yt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", yt[yt.NOT_FOUND = 5] = "NOT_FOUND", yt[yt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", yt[yt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", yt[yt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", yt[yt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", yt[yt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", yt[yt.ABORTED = 10] = "ABORTED", yt[yt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", yt[yt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", yt[yt.INTERNAL = 13] = "INTERNAL", yt[yt.UNAVAILABLE = 14] = "UNAVAILABLE", yt[yt.DATA_LOSS = 15] = "DATA_LOSS";
  var wt = null;
  function __PRIVATE_newTextEncoder() {
    return new TextEncoder();
  }
  var St = new Integer([4294967295, 4294967295], 0);
  function __PRIVATE_getMd5HashValue(e3) {
    const t3 = __PRIVATE_newTextEncoder().encode(e3), n2 = new Md5();
    return n2.update(t3), new Uint8Array(n2.digest());
  }
  function __PRIVATE_get64BitUints(e3) {
    const t3 = new DataView(e3.buffer), n2 = t3.getUint32(
      0,
      /* littleEndian= */
      true
    ), r3 = t3.getUint32(
      4,
      /* littleEndian= */
      true
    ), i3 = t3.getUint32(
      8,
      /* littleEndian= */
      true
    ), s3 = t3.getUint32(
      12,
      /* littleEndian= */
      true
    );
    return [new Integer([n2, r3], 0), new Integer([i3, s3], 0)];
  }
  var BloomFilter = class _BloomFilter {
    constructor(e3, t3, n2) {
      if (this.bitmap = e3, this.padding = t3, this.hashCount = n2, t3 < 0 || t3 >= 8) throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t3}`);
      if (n2 < 0) throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n2}`);
      if (e3.length > 0 && 0 === this.hashCount)
        throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n2}`);
      if (0 === e3.length && 0 !== t3)
        throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t3}`);
      this.ge = 8 * e3.length - t3, // Set the bit count in Integer to avoid repetition in mightContain().
      this.pe = Integer.fromNumber(this.ge);
    }
    // Calculate the ith hash value based on the hashed 64bit integers,
    // and calculate its corresponding bit index in the bitmap to be checked.
    ye(e3, t3, n2) {
      let r3 = e3.add(t3.multiply(Integer.fromNumber(n2)));
      return 1 === r3.compare(St) && (r3 = new Integer([r3.getBits(0), r3.getBits(1)], 0)), r3.modulo(this.pe).toNumber();
    }
    // Return whether the bit on the given index in the bitmap is set to 1.
    we(e3) {
      return !!(this.bitmap[Math.floor(e3 / 8)] & 1 << e3 % 8);
    }
    mightContain(e3) {
      if (0 === this.ge) return false;
      const t3 = __PRIVATE_getMd5HashValue(e3), [n2, r3] = __PRIVATE_get64BitUints(t3);
      for (let e4 = 0; e4 < this.hashCount; e4++) {
        const t4 = this.ye(n2, r3, e4);
        if (!this.we(t4)) return false;
      }
      return true;
    }
    /** Create bloom filter for testing purposes only. */
    static create(e3, t3, n2) {
      const r3 = e3 % 8 == 0 ? 0 : 8 - e3 % 8, i3 = new Uint8Array(Math.ceil(e3 / 8)), s3 = new _BloomFilter(i3, r3, t3);
      return n2.forEach(((e4) => s3.insert(e4))), s3;
    }
    insert(e3) {
      if (0 === this.ge) return;
      const t3 = __PRIVATE_getMd5HashValue(e3), [n2, r3] = __PRIVATE_get64BitUints(t3);
      for (let e4 = 0; e4 < this.hashCount; e4++) {
        const t4 = this.ye(n2, r3, e4);
        this.Se(t4);
      }
    }
    Se(e3) {
      const t3 = Math.floor(e3 / 8), n2 = e3 % 8;
      this.bitmap[t3] |= 1 << n2;
    }
  };
  var __PRIVATE_BloomFilterError = class extends Error {
    constructor() {
      super(...arguments), this.name = "BloomFilterError";
    }
  };
  var RemoteEvent = class _RemoteEvent {
    constructor(e3, t3, n2, r3, i3) {
      this.snapshotVersion = e3, this.targetChanges = t3, this.targetMismatches = n2, this.documentUpdates = r3, this.resolvedLimboDocuments = i3;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static createSynthesizedRemoteEventForCurrentChange(e3, t3, n2) {
      const r3 = /* @__PURE__ */ new Map();
      return r3.set(e3, TargetChange.createSynthesizedTargetChangeForCurrentChange(e3, t3, n2)), new _RemoteEvent(SnapshotVersion.min(), r3, new SortedMap(__PRIVATE_primitiveComparator), __PRIVATE_mutableDocumentMap(), __PRIVATE_documentKeySet());
    }
  };
  var TargetChange = class _TargetChange {
    constructor(e3, t3, n2, r3, i3) {
      this.resumeToken = e3, this.current = t3, this.addedDocuments = n2, this.modifiedDocuments = r3, this.removedDocuments = i3;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */
    static createSynthesizedTargetChangeForCurrentChange(e3, t3, n2) {
      return new _TargetChange(n2, t3, __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet());
    }
  };
  var __PRIVATE_DocumentWatchChange = class {
    constructor(e3, t3, n2, r3) {
      this.be = e3, this.removedTargetIds = t3, this.key = n2, this.De = r3;
    }
  };
  var __PRIVATE_ExistenceFilterChange = class {
    constructor(e3, t3) {
      this.targetId = e3, this.Ce = t3;
    }
  };
  var __PRIVATE_WatchTargetChange = class {
    constructor(e3, t3, n2 = ByteString.EMPTY_BYTE_STRING, r3 = null) {
      this.state = e3, this.targetIds = t3, this.resumeToken = n2, this.cause = r3;
    }
  };
  var __PRIVATE_TargetState = class {
    constructor() {
      this.ve = 0, /**
       * Keeps track of the document changes since the last raised snapshot.
       *
       * These changes are continuously updated as we receive document updates and
       * always reflect the current set of changes against the last issued snapshot.
       */
      this.Fe = __PRIVATE_snapshotChangesMap(), /** See public getters for explanations of these fields. */
      this.Me = ByteString.EMPTY_BYTE_STRING, this.xe = false, /**
       * Whether this target state should be included in the next snapshot. We
       * initialize to true so that newly-added targets are included in the next
       * RemoteEvent.
       */
      this.Oe = true;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */
    get current() {
      return this.xe;
    }
    /** The last resume token sent to us for this target. */
    get resumeToken() {
      return this.Me;
    }
    /** Whether this target has pending target adds or target removes. */
    get Ne() {
      return 0 !== this.ve;
    }
    /** Whether we have modified any state that should trigger a snapshot. */
    get Be() {
      return this.Oe;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    Le(e3) {
      e3.approximateByteSize() > 0 && (this.Oe = true, this.Me = e3);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    ke() {
      let e3 = __PRIVATE_documentKeySet(), t3 = __PRIVATE_documentKeySet(), n2 = __PRIVATE_documentKeySet();
      return this.Fe.forEach(((r3, i3) => {
        switch (i3) {
          case 0:
            e3 = e3.add(r3);
            break;
          case 2:
            t3 = t3.add(r3);
            break;
          case 1:
            n2 = n2.add(r3);
            break;
          default:
            fail(38017, {
              changeType: i3
            });
        }
      })), new TargetChange(this.Me, this.xe, e3, t3, n2);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    qe() {
      this.Oe = false, this.Fe = __PRIVATE_snapshotChangesMap();
    }
    Qe(e3, t3) {
      this.Oe = true, this.Fe = this.Fe.insert(e3, t3);
    }
    $e(e3) {
      this.Oe = true, this.Fe = this.Fe.remove(e3);
    }
    Ue() {
      this.ve += 1;
    }
    Ke() {
      this.ve -= 1, __PRIVATE_hardAssert(this.ve >= 0, 3241, {
        ve: this.ve
      });
    }
    We() {
      this.Oe = true, this.xe = true;
    }
  };
  var __PRIVATE_WatchChangeAggregator = class {
    constructor(e3) {
      this.Ge = e3, /** The internal state of all tracked targets. */
      this.ze = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
      this.je = __PRIVATE_mutableDocumentMap(), this.Je = __PRIVATE_documentTargetMap(), /** A mapping of document keys to their set of target IDs. */
      this.He = __PRIVATE_documentTargetMap(), /**
       * A map of targets with existence filter mismatches. These targets are
       * known to be inconsistent and their listens needs to be re-established by
       * RemoteStore.
       */
      this.Ye = new SortedMap(__PRIVATE_primitiveComparator);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */
    Ze(e3) {
      for (const t3 of e3.be) e3.De && e3.De.isFoundDocument() ? this.Xe(t3, e3.De) : this.et(t3, e3.key, e3.De);
      for (const t3 of e3.removedTargetIds) this.et(t3, e3.key, e3.De);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */
    tt(e3) {
      this.forEachTarget(e3, ((t3) => {
        const n2 = this.nt(t3);
        switch (e3.state) {
          case 0:
            this.rt(t3) && n2.Le(e3.resumeToken);
            break;
          case 1:
            n2.Ke(), n2.Ne || // We have a freshly added target, so we need to reset any state
            // that we had previously. This can happen e.g. when remove and add
            // back a target for existence filter mismatches.
            n2.qe(), n2.Le(e3.resumeToken);
            break;
          case 2:
            n2.Ke(), n2.Ne || this.removeTarget(t3);
            break;
          case 3:
            this.rt(t3) && (n2.We(), n2.Le(e3.resumeToken));
            break;
          case 4:
            this.rt(t3) && // Reset the target and synthesizes removes for all existing
            // documents. The backend will re-add any documents that still
            // match the target before it sends the next global snapshot.
            (this.it(t3), n2.Le(e3.resumeToken));
            break;
          default:
            fail(56790, {
              state: e3.state
            });
        }
      }));
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    forEachTarget(e3, t3) {
      e3.targetIds.length > 0 ? e3.targetIds.forEach(t3) : this.ze.forEach(((e4, n2) => {
        this.rt(n2) && t3(n2);
      }));
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    st(e3) {
      const t3 = e3.targetId, n2 = e3.Ce.count, r3 = this.ot(t3);
      if (r3) {
        const i3 = r3.target;
        if (__PRIVATE_targetIsDocumentTarget(i3)) if (0 === n2) {
          const e4 = new DocumentKey(i3.path);
          this.et(t3, e4, MutableDocument.newNoDocument(e4, SnapshotVersion.min()));
        } else __PRIVATE_hardAssert(1 === n2, 20013, {
          expectedCount: n2
        });
        else {
          const r4 = this._t(t3);
          if (r4 !== n2) {
            const n3 = this.ut(e3), i4 = n3 ? this.ct(n3, e3, r4) : 1;
            if (0 !== i4) {
              this.it(t3);
              const e4 = 2 === i4 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
              this.Ye = this.Ye.insert(t3, e4);
            }
            wt?.lt((function __PRIVATE_createExistenceFilterMismatchInfoForTestingHooks(e4, t4, n4, r5, i5) {
              const s3 = {
                localCacheCount: e4,
                existenceFilterCount: t4.count,
                databaseId: n4.database,
                projectId: n4.projectId
              }, o3 = t4.unchangedNames;
              o3 && (s3.bloomFilter = {
                applied: 0 === i5,
                hashCount: o3?.hashCount ?? 0,
                bitmapLength: o3?.bits?.bitmap?.length ?? 0,
                padding: o3?.bits?.padding ?? 0,
                mightContain: (e5) => r5?.mightContain(e5) ?? false
              });
              return s3;
            })(r4, e3.Ce, this.Ge.ht(), n3, i4));
          }
        }
      }
    }
    /**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */
    ut(e3) {
      const t3 = e3.Ce.unchangedNames;
      if (!t3 || !t3.bits) return null;
      const { bits: { bitmap: n2 = "", padding: r3 = 0 }, hashCount: i3 = 0 } = t3;
      let s3, o3;
      try {
        s3 = __PRIVATE_normalizeByteString(n2).toUint8Array();
      } catch (e4) {
        if (e4 instanceof __PRIVATE_Base64DecodeError) return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed (" + e4.message + "); ignoring the bloom filter and falling back to full re-query."), null;
        throw e4;
      }
      try {
        o3 = new BloomFilter(s3, r3, i3);
      } catch (e4) {
        return __PRIVATE_logWarn(e4 instanceof __PRIVATE_BloomFilterError ? "BloomFilter error: " : "Applying bloom filter failed: ", e4), null;
      }
      return 0 === o3.ge ? null : o3;
    }
    /**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */
    ct(e3, t3, n2) {
      return t3.Ce.count === n2 - this.Pt(e3, t3.targetId) ? 0 : 2;
    }
    /**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */
    Pt(e3, t3) {
      const n2 = this.Ge.getRemoteKeysForTarget(t3);
      let r3 = 0;
      return n2.forEach(((n3) => {
        const i3 = this.Ge.ht(), s3 = `projects/${i3.projectId}/databases/${i3.database}/documents/${n3.path.canonicalString()}`;
        e3.mightContain(s3) || (this.et(
          t3,
          n3,
          /*updatedDocument=*/
          null
        ), r3++);
      })), r3;
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    Tt(e3) {
      const t3 = /* @__PURE__ */ new Map();
      this.ze.forEach(((n3, r4) => {
        const i3 = this.ot(r4);
        if (i3) {
          if (n3.current && __PRIVATE_targetIsDocumentTarget(i3.target)) {
            const t4 = new DocumentKey(i3.target.path);
            this.It(t4).has(r4) || this.Et(r4, t4) || this.et(r4, t4, MutableDocument.newNoDocument(t4, e3));
          }
          n3.Be && (t3.set(r4, n3.ke()), n3.qe());
        }
      }));
      let n2 = __PRIVATE_documentKeySet();
      this.He.forEach(((e4, t4) => {
        let r4 = true;
        t4.forEachWhile(((e5) => {
          const t5 = this.ot(e5);
          return !t5 || "TargetPurposeLimboResolution" === t5.purpose || (r4 = false, false);
        })), r4 && (n2 = n2.add(e4));
      })), this.je.forEach(((t4, n3) => n3.setReadTime(e3)));
      const r3 = new RemoteEvent(e3, t3, this.Ye, this.je, n2);
      return this.je = __PRIVATE_mutableDocumentMap(), this.Je = __PRIVATE_documentTargetMap(), this.He = __PRIVATE_documentTargetMap(), this.Ye = new SortedMap(__PRIVATE_primitiveComparator), r3;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Xe(e3, t3) {
      if (!this.rt(e3)) return;
      const n2 = this.Et(e3, t3.key) ? 2 : 0;
      this.nt(e3).Qe(t3.key, n2), this.je = this.je.insert(t3.key, t3), this.Je = this.Je.insert(t3.key, this.It(t3.key).add(e3)), this.He = this.He.insert(t3.key, this.dt(t3.key).add(e3));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    et(e3, t3, n2) {
      if (!this.rt(e3)) return;
      const r3 = this.nt(e3);
      this.Et(e3, t3) ? r3.Qe(
        t3,
        1
        /* ChangeType.Removed */
      ) : (
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        r3.$e(t3)
      ), this.He = this.He.insert(t3, this.dt(t3).delete(e3)), this.He = this.He.insert(t3, this.dt(t3).add(e3)), n2 && (this.je = this.je.insert(t3, n2));
    }
    removeTarget(e3) {
      this.ze.delete(e3);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    _t(e3) {
      const t3 = this.nt(e3).ke();
      return this.Ge.getRemoteKeysForTarget(e3).size + t3.addedDocuments.size - t3.removedDocuments.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    Ue(e3) {
      this.nt(e3).Ue();
    }
    nt(e3) {
      let t3 = this.ze.get(e3);
      return t3 || (t3 = new __PRIVATE_TargetState(), this.ze.set(e3, t3)), t3;
    }
    dt(e3) {
      let t3 = this.He.get(e3);
      return t3 || (t3 = new SortedSet(__PRIVATE_primitiveComparator), this.He = this.He.insert(e3, t3)), t3;
    }
    It(e3) {
      let t3 = this.Je.get(e3);
      return t3 || (t3 = new SortedSet(__PRIVATE_primitiveComparator), this.Je = this.Je.insert(e3, t3)), t3;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    rt(e3) {
      const t3 = null !== this.ot(e3);
      return t3 || __PRIVATE_logDebug("WatchChangeAggregator", "Detected inactive target", e3), t3;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    ot(e3) {
      const t3 = this.ze.get(e3);
      return t3 && t3.Ne ? null : this.Ge.At(e3);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    it(e3) {
      this.ze.set(e3, new __PRIVATE_TargetState());
      this.Ge.getRemoteKeysForTarget(e3).forEach(((t3) => {
        this.et(
          e3,
          t3,
          /*updatedDocument=*/
          null
        );
      }));
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    Et(e3, t3) {
      return this.Ge.getRemoteKeysForTarget(e3).has(t3);
    }
  };
  function __PRIVATE_documentTargetMap() {
    return new SortedMap(DocumentKey.comparator);
  }
  function __PRIVATE_snapshotChangesMap() {
    return new SortedMap(DocumentKey.comparator);
  }
  var bt = /* @__PURE__ */ (() => {
    const e3 = {
      asc: "ASCENDING",
      desc: "DESCENDING"
    };
    return e3;
  })();
  var Dt = /* @__PURE__ */ (() => {
    const e3 = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return e3;
  })();
  var Ct = /* @__PURE__ */ (() => {
    const e3 = {
      and: "AND",
      or: "OR"
    };
    return e3;
  })();
  var JsonProtoSerializer = class {
    constructor(e3, t3) {
      this.databaseId = e3, this.useProto3Json = t3;
    }
  };
  function __PRIVATE_toInt32Proto(e3, t3) {
    return e3.useProto3Json || __PRIVATE_isNullOrUndefined(t3) ? t3 : {
      value: t3
    };
  }
  function toTimestamp(e3, t3) {
    if (e3.useProto3Json) {
      return `${new Date(1e3 * t3.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t3.nanoseconds).slice(-9)}Z`;
    }
    return {
      seconds: "" + t3.seconds,
      nanos: t3.nanoseconds
    };
  }
  function __PRIVATE_toBytes(e3, t3) {
    return e3.useProto3Json ? t3.toBase64() : t3.toUint8Array();
  }
  function __PRIVATE_toVersion(e3, t3) {
    return toTimestamp(e3, t3.toTimestamp());
  }
  function __PRIVATE_fromVersion(e3) {
    return __PRIVATE_hardAssert(!!e3, 49232), SnapshotVersion.fromTimestamp((function fromTimestamp(e4) {
      const t3 = __PRIVATE_normalizeTimestamp(e4);
      return new Timestamp(t3.seconds, t3.nanos);
    })(e3));
  }
  function __PRIVATE_toResourceName(e3, t3) {
    return __PRIVATE_toResourcePath(e3, t3).canonicalString();
  }
  function __PRIVATE_toResourcePath(e3, t3) {
    const n2 = (function __PRIVATE_fullyQualifiedPrefixPath(e4) {
      return new ResourcePath(["projects", e4.projectId, "databases", e4.database]);
    })(e3).child("documents");
    return void 0 === t3 ? n2 : n2.child(t3);
  }
  function __PRIVATE_fromResourceName(e3) {
    const t3 = ResourcePath.fromString(e3);
    return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t3), 10190, {
      key: t3.toString()
    }), t3;
  }
  function __PRIVATE_toName(e3, t3) {
    return __PRIVATE_toResourceName(e3.databaseId, t3.path);
  }
  function fromName(e3, t3) {
    const n2 = __PRIVATE_fromResourceName(t3);
    if (n2.get(1) !== e3.databaseId.projectId) throw new FirestoreError(N2.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n2.get(1) + " vs " + e3.databaseId.projectId);
    if (n2.get(3) !== e3.databaseId.database) throw new FirestoreError(N2.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n2.get(3) + " vs " + e3.databaseId.database);
    return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(n2));
  }
  function __PRIVATE_toQueryPath(e3, t3) {
    return __PRIVATE_toResourceName(e3.databaseId, t3);
  }
  function __PRIVATE_fromQueryPath(e3) {
    const t3 = __PRIVATE_fromResourceName(e3);
    return 4 === t3.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t3);
  }
  function __PRIVATE_getEncodedDatabaseId(e3) {
    return new ResourcePath(["projects", e3.databaseId.projectId, "databases", e3.databaseId.database]).canonicalString();
  }
  function __PRIVATE_extractLocalPathFromResourceName(e3) {
    return __PRIVATE_hardAssert(e3.length > 4 && "documents" === e3.get(4), 29091, {
      key: e3.toString()
    }), e3.popFirst(5);
  }
  function __PRIVATE_toMutationDocument(e3, t3, n2) {
    return {
      name: __PRIVATE_toName(e3, t3),
      fields: n2.value.mapValue.fields
    };
  }
  function __PRIVATE_fromWatchChange(e3, t3) {
    let n2;
    if ("targetChange" in t3) {
      t3.targetChange;
      const r3 = (function __PRIVATE_fromWatchTargetChangeState(e4) {
        return "NO_CHANGE" === e4 ? 0 : "ADD" === e4 ? 1 : "REMOVE" === e4 ? 2 : "CURRENT" === e4 ? 3 : "RESET" === e4 ? 4 : fail(39313, {
          state: e4
        });
      })(t3.targetChange.targetChangeType || "NO_CHANGE"), i3 = t3.targetChange.targetIds || [], s3 = (function __PRIVATE_fromBytes(e4, t4) {
        return e4.useProto3Json ? (__PRIVATE_hardAssert(void 0 === t4 || "string" == typeof t4, 58123), ByteString.fromBase64String(t4 || "")) : (__PRIVATE_hardAssert(void 0 === t4 || // Check if the value is an instance of both Buffer and Uint8Array,
        // despite the fact that Buffer extends Uint8Array. In some
        // environments, such as jsdom, the prototype chain of Buffer
        // does not indicate that it extends Uint8Array.
        t4 instanceof Buffer || t4 instanceof Uint8Array, 16193), ByteString.fromUint8Array(t4 || new Uint8Array()));
      })(e3, t3.targetChange.resumeToken), o3 = t3.targetChange.cause, _2 = o3 && (function __PRIVATE_fromRpcStatus(e4) {
        const t4 = void 0 === e4.code ? N2.UNKNOWN : __PRIVATE_mapCodeFromRpcCode(e4.code);
        return new FirestoreError(t4, e4.message || "");
      })(o3);
      n2 = new __PRIVATE_WatchTargetChange(r3, i3, s3, _2 || null);
    } else if ("documentChange" in t3) {
      t3.documentChange;
      const r3 = t3.documentChange;
      r3.document, r3.document.name, r3.document.updateTime;
      const i3 = fromName(e3, r3.document.name), s3 = __PRIVATE_fromVersion(r3.document.updateTime), o3 = r3.document.createTime ? __PRIVATE_fromVersion(r3.document.createTime) : SnapshotVersion.min(), _2 = new ObjectValue({
        mapValue: {
          fields: r3.document.fields
        }
      }), a3 = MutableDocument.newFoundDocument(i3, s3, o3, _2), u4 = r3.targetIds || [], c3 = r3.removedTargetIds || [];
      n2 = new __PRIVATE_DocumentWatchChange(u4, c3, a3.key, a3);
    } else if ("documentDelete" in t3) {
      t3.documentDelete;
      const r3 = t3.documentDelete;
      r3.document;
      const i3 = fromName(e3, r3.document), s3 = r3.readTime ? __PRIVATE_fromVersion(r3.readTime) : SnapshotVersion.min(), o3 = MutableDocument.newNoDocument(i3, s3), _2 = r3.removedTargetIds || [];
      n2 = new __PRIVATE_DocumentWatchChange([], _2, o3.key, o3);
    } else if ("documentRemove" in t3) {
      t3.documentRemove;
      const r3 = t3.documentRemove;
      r3.document;
      const i3 = fromName(e3, r3.document), s3 = r3.removedTargetIds || [];
      n2 = new __PRIVATE_DocumentWatchChange([], s3, i3, null);
    } else {
      if (!("filter" in t3)) return fail(11601, {
        Rt: t3
      });
      {
        t3.filter;
        const e4 = t3.filter;
        e4.targetId;
        const { count: r3 = 0, unchangedNames: i3 } = e4, s3 = new ExistenceFilter(r3, i3), o3 = e4.targetId;
        n2 = new __PRIVATE_ExistenceFilterChange(o3, s3);
      }
    }
    return n2;
  }
  function toMutation(e3, t3) {
    let n2;
    if (t3 instanceof __PRIVATE_SetMutation) n2 = {
      update: __PRIVATE_toMutationDocument(e3, t3.key, t3.value)
    };
    else if (t3 instanceof __PRIVATE_DeleteMutation) n2 = {
      delete: __PRIVATE_toName(e3, t3.key)
    };
    else if (t3 instanceof __PRIVATE_PatchMutation) n2 = {
      update: __PRIVATE_toMutationDocument(e3, t3.key, t3.data),
      updateMask: __PRIVATE_toDocumentMask(t3.fieldMask)
    };
    else {
      if (!(t3 instanceof __PRIVATE_VerifyMutation)) return fail(16599, {
        Vt: t3.type
      });
      n2 = {
        verify: __PRIVATE_toName(e3, t3.key)
      };
    }
    return t3.fieldTransforms.length > 0 && (n2.updateTransforms = t3.fieldTransforms.map(((e4) => (function __PRIVATE_toFieldTransform(e5, t4) {
      const n3 = t4.transform;
      if (n3 instanceof __PRIVATE_ServerTimestampTransform) return {
        fieldPath: t4.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
      if (n3 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
        fieldPath: t4.field.canonicalString(),
        appendMissingElements: {
          values: n3.elements
        }
      };
      if (n3 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
        fieldPath: t4.field.canonicalString(),
        removeAllFromArray: {
          values: n3.elements
        }
      };
      if (n3 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
        fieldPath: t4.field.canonicalString(),
        increment: n3.Ae
      };
      throw fail(20930, {
        transform: t4.transform
      });
    })(0, e4)))), t3.precondition.isNone || (n2.currentDocument = (function __PRIVATE_toPrecondition(e4, t4) {
      return void 0 !== t4.updateTime ? {
        updateTime: __PRIVATE_toVersion(e4, t4.updateTime)
      } : void 0 !== t4.exists ? {
        exists: t4.exists
      } : fail(27497);
    })(e3, t3.precondition)), n2;
  }
  function __PRIVATE_fromWriteResults(e3, t3) {
    return e3 && e3.length > 0 ? (__PRIVATE_hardAssert(void 0 !== t3, 14353), e3.map(((e4) => (function __PRIVATE_fromWriteResult(e5, t4) {
      let n2 = e5.updateTime ? __PRIVATE_fromVersion(e5.updateTime) : __PRIVATE_fromVersion(t4);
      return n2.isEqual(SnapshotVersion.min()) && // The Firestore Emulator currently returns an update time of 0 for
      // deletes of non-existing documents (rather than null). This breaks the
      // test "get deleted doc while offline with source=cache" as NoDocuments
      // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
      // TODO(#2149): Remove this when Emulator is fixed
      (n2 = __PRIVATE_fromVersion(t4)), new MutationResult(n2, e5.transformResults || []);
    })(e4, t3)))) : [];
  }
  function __PRIVATE_toDocumentsTarget(e3, t3) {
    return {
      documents: [__PRIVATE_toQueryPath(e3, t3.path)]
    };
  }
  function __PRIVATE_toQueryTarget(e3, t3) {
    const n2 = {
      structuredQuery: {}
    }, r3 = t3.path;
    let i3;
    null !== t3.collectionGroup ? (i3 = r3, n2.structuredQuery.from = [{
      collectionId: t3.collectionGroup,
      allDescendants: true
    }]) : (i3 = r3.popLast(), n2.structuredQuery.from = [{
      collectionId: r3.lastSegment()
    }]), n2.parent = __PRIVATE_toQueryPath(e3, i3);
    const s3 = (function __PRIVATE_toFilters(e4) {
      if (0 === e4.length) return;
      return __PRIVATE_toFilter(CompositeFilter.create(
        e4,
        "and"
        /* CompositeOperator.AND */
      ));
    })(t3.filters);
    s3 && (n2.structuredQuery.where = s3);
    const o3 = (function __PRIVATE_toOrder(e4) {
      if (0 === e4.length) return;
      return e4.map(((e5) => (
        // visible for testing
        (function __PRIVATE_toPropertyOrder(e6) {
          return {
            field: __PRIVATE_toFieldPathReference(e6.field),
            direction: __PRIVATE_toDirection(e6.dir)
          };
        })(e5)
      )));
    })(t3.orderBy);
    o3 && (n2.structuredQuery.orderBy = o3);
    const _2 = __PRIVATE_toInt32Proto(e3, t3.limit);
    return null !== _2 && (n2.structuredQuery.limit = _2), t3.startAt && (n2.structuredQuery.startAt = (function __PRIVATE_toStartAtCursor(e4) {
      return {
        before: e4.inclusive,
        values: e4.position
      };
    })(t3.startAt)), t3.endAt && (n2.structuredQuery.endAt = (function __PRIVATE_toEndAtCursor(e4) {
      return {
        before: !e4.inclusive,
        values: e4.position
      };
    })(t3.endAt)), {
      ft: n2,
      parent: i3
    };
  }
  function __PRIVATE_convertQueryTargetToQuery(e3) {
    let t3 = __PRIVATE_fromQueryPath(e3.parent);
    const n2 = e3.structuredQuery, r3 = n2.from ? n2.from.length : 0;
    let i3 = null;
    if (r3 > 0) {
      __PRIVATE_hardAssert(1 === r3, 65062);
      const e4 = n2.from[0];
      e4.allDescendants ? i3 = e4.collectionId : t3 = t3.child(e4.collectionId);
    }
    let s3 = [];
    n2.where && (s3 = (function __PRIVATE_fromFilters(e4) {
      const t4 = __PRIVATE_fromFilter(e4);
      if (t4 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t4)) return t4.getFilters();
      return [t4];
    })(n2.where));
    let o3 = [];
    n2.orderBy && (o3 = (function __PRIVATE_fromOrder(e4) {
      return e4.map(((e5) => (function __PRIVATE_fromPropertyOrder(e6) {
        return new OrderBy(
          __PRIVATE_fromFieldPathReference(e6.field),
          // visible for testing
          (function __PRIVATE_fromDirection(e7) {
            switch (e7) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(e6.direction)
        );
      })(e5)));
    })(n2.orderBy));
    let _2 = null;
    n2.limit && (_2 = (function __PRIVATE_fromInt32Proto(e4) {
      let t4;
      return t4 = "object" == typeof e4 ? e4.value : e4, __PRIVATE_isNullOrUndefined(t4) ? null : t4;
    })(n2.limit));
    let a3 = null;
    n2.startAt && (a3 = (function __PRIVATE_fromStartAtCursor(e4) {
      const t4 = !!e4.before, n3 = e4.values || [];
      return new Bound(n3, t4);
    })(n2.startAt));
    let u4 = null;
    return n2.endAt && (u4 = (function __PRIVATE_fromEndAtCursor(e4) {
      const t4 = !e4.before, n3 = e4.values || [];
      return new Bound(n3, t4);
    })(n2.endAt)), __PRIVATE_newQuery(t3, i3, o3, s3, _2, "F", a3, u4);
  }
  function __PRIVATE_toListenRequestLabels(e3, t3) {
    const n2 = (function __PRIVATE_toLabel(e4) {
      switch (e4) {
        case "TargetPurposeListen":
          return null;
        case "TargetPurposeExistenceFilterMismatch":
          return "existence-filter-mismatch";
        case "TargetPurposeExistenceFilterMismatchBloom":
          return "existence-filter-mismatch-bloom";
        case "TargetPurposeLimboResolution":
          return "limbo-document";
        default:
          return fail(28987, {
            purpose: e4
          });
      }
    })(t3.purpose);
    return null == n2 ? null : {
      "goog-listen-tags": n2
    };
  }
  function __PRIVATE_fromFilter(e3) {
    return void 0 !== e3.unaryFilter ? (function __PRIVATE_fromUnaryFilter(e4) {
      switch (e4.unaryFilter.op) {
        case "IS_NAN":
          const t3 = __PRIVATE_fromFieldPathReference(e4.unaryFilter.field);
          return FieldFilter.create(t3, "==", {
            doubleValue: NaN
          });
        case "IS_NULL":
          const n2 = __PRIVATE_fromFieldPathReference(e4.unaryFilter.field);
          return FieldFilter.create(n2, "==", {
            nullValue: "NULL_VALUE"
          });
        case "IS_NOT_NAN":
          const r3 = __PRIVATE_fromFieldPathReference(e4.unaryFilter.field);
          return FieldFilter.create(r3, "!=", {
            doubleValue: NaN
          });
        case "IS_NOT_NULL":
          const i3 = __PRIVATE_fromFieldPathReference(e4.unaryFilter.field);
          return FieldFilter.create(i3, "!=", {
            nullValue: "NULL_VALUE"
          });
        case "OPERATOR_UNSPECIFIED":
          return fail(61313);
        default:
          return fail(60726);
      }
    })(e3) : void 0 !== e3.fieldFilter ? (function __PRIVATE_fromFieldFilter(e4) {
      return FieldFilter.create(__PRIVATE_fromFieldPathReference(e4.fieldFilter.field), (function __PRIVATE_fromOperatorName(e5) {
        switch (e5) {
          case "EQUAL":
            return "==";
          case "NOT_EQUAL":
            return "!=";
          case "GREATER_THAN":
            return ">";
          case "GREATER_THAN_OR_EQUAL":
            return ">=";
          case "LESS_THAN":
            return "<";
          case "LESS_THAN_OR_EQUAL":
            return "<=";
          case "ARRAY_CONTAINS":
            return "array-contains";
          case "IN":
            return "in";
          case "NOT_IN":
            return "not-in";
          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any";
          case "OPERATOR_UNSPECIFIED":
            return fail(58110);
          default:
            return fail(50506);
        }
      })(e4.fieldFilter.op), e4.fieldFilter.value);
    })(e3) : void 0 !== e3.compositeFilter ? (function __PRIVATE_fromCompositeFilter(e4) {
      return CompositeFilter.create(e4.compositeFilter.filters.map(((e5) => __PRIVATE_fromFilter(e5))), (function __PRIVATE_fromCompositeOperatorName(e5) {
        switch (e5) {
          case "AND":
            return "and";
          case "OR":
            return "or";
          default:
            return fail(1026);
        }
      })(e4.compositeFilter.op));
    })(e3) : fail(30097, {
      filter: e3
    });
  }
  function __PRIVATE_toDirection(e3) {
    return bt[e3];
  }
  function __PRIVATE_toOperatorName(e3) {
    return Dt[e3];
  }
  function __PRIVATE_toCompositeOperatorName(e3) {
    return Ct[e3];
  }
  function __PRIVATE_toFieldPathReference(e3) {
    return {
      fieldPath: e3.canonicalString()
    };
  }
  function __PRIVATE_fromFieldPathReference(e3) {
    return FieldPath$1.fromServerFormat(e3.fieldPath);
  }
  function __PRIVATE_toFilter(e3) {
    return e3 instanceof FieldFilter ? (function __PRIVATE_toUnaryOrFieldFilter(e4) {
      if ("==" === e4.op) {
        if (__PRIVATE_isNanValue(e4.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(e4.field),
            op: "IS_NAN"
          }
        };
        if (__PRIVATE_isNullValue(e4.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(e4.field),
            op: "IS_NULL"
          }
        };
      } else if ("!=" === e4.op) {
        if (__PRIVATE_isNanValue(e4.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(e4.field),
            op: "IS_NOT_NAN"
          }
        };
        if (__PRIVATE_isNullValue(e4.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(e4.field),
            op: "IS_NOT_NULL"
          }
        };
      }
      return {
        fieldFilter: {
          field: __PRIVATE_toFieldPathReference(e4.field),
          op: __PRIVATE_toOperatorName(e4.op),
          value: e4.value
        }
      };
    })(e3) : e3 instanceof CompositeFilter ? (function __PRIVATE_toCompositeFilter(e4) {
      const t3 = e4.getFilters().map(((e5) => __PRIVATE_toFilter(e5)));
      if (1 === t3.length) return t3[0];
      return {
        compositeFilter: {
          op: __PRIVATE_toCompositeOperatorName(e4.op),
          filters: t3
        }
      };
    })(e3) : fail(54877, {
      filter: e3
    });
  }
  function __PRIVATE_toDocumentMask(e3) {
    const t3 = [];
    return e3.fields.forEach(((e4) => t3.push(e4.canonicalString()))), {
      fieldPaths: t3
    };
  }
  function __PRIVATE_isValidResourceName(e3) {
    return e3.length >= 4 && "projects" === e3.get(0) && "databases" === e3.get(2);
  }
  var TargetData = class _TargetData {
    constructor(e3, t3, n2, r3, i3 = SnapshotVersion.min(), s3 = SnapshotVersion.min(), o3 = ByteString.EMPTY_BYTE_STRING, _2 = null) {
      this.target = e3, this.targetId = t3, this.purpose = n2, this.sequenceNumber = r3, this.snapshotVersion = i3, this.lastLimboFreeSnapshotVersion = s3, this.resumeToken = o3, this.expectedCount = _2;
    }
    /** Creates a new target data instance with an updated sequence number. */
    withSequenceNumber(e3) {
      return new _TargetData(this.target, this.targetId, this.purpose, e3, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    withResumeToken(e3, t3) {
      return new _TargetData(
        this.target,
        this.targetId,
        this.purpose,
        this.sequenceNumber,
        t3,
        this.lastLimboFreeSnapshotVersion,
        e3,
        /* expectedCount= */
        null
      );
    }
    /**
     * Creates a new target data instance with an updated expected count.
     */
    withExpectedCount(e3) {
      return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e3);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    withLastLimboFreeSnapshotVersion(e3) {
      return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e3, this.resumeToken, this.expectedCount);
    }
  };
  var __PRIVATE_LocalSerializer = class {
    constructor(e3) {
      this.yt = e3;
    }
  };
  function __PRIVATE_fromBundledQuery(e3) {
    const t3 = __PRIVATE_convertQueryTargetToQuery({
      parent: e3.parent,
      structuredQuery: e3.structuredQuery
    });
    return "LAST" === e3.limitType ? __PRIVATE_queryWithLimit(
      t3,
      t3.limit,
      "L"
      /* LimitType.Last */
    ) : t3;
  }
  var __PRIVATE_FirestoreIndexValueWriter = class {
    constructor() {
    }
    // The write methods below short-circuit writing terminators for values
    // containing a (terminating) truncated value.
    // As an example, consider the resulting encoding for:
    // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
    // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
    // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
    /** Writes an index value.  */
    Dt(e3, t3) {
      this.Ct(e3, t3), // Write separator to split index values
      // (see go/firestore-storage-format#encodings).
      t3.vt();
    }
    Ct(e3, t3) {
      if ("nullValue" in e3) this.Ft(t3, 5);
      else if ("booleanValue" in e3) this.Ft(t3, 10), t3.Mt(e3.booleanValue ? 1 : 0);
      else if ("integerValue" in e3) this.Ft(t3, 15), t3.Mt(__PRIVATE_normalizeNumber(e3.integerValue));
      else if ("doubleValue" in e3) {
        const n2 = __PRIVATE_normalizeNumber(e3.doubleValue);
        isNaN(n2) ? this.Ft(t3, 13) : (this.Ft(t3, 15), __PRIVATE_isNegativeZero(n2) ? (
          // -0.0, 0 and 0.0 are all considered the same
          t3.Mt(0)
        ) : t3.Mt(n2));
      } else if ("timestampValue" in e3) {
        let n2 = e3.timestampValue;
        this.Ft(t3, 20), "string" == typeof n2 && (n2 = __PRIVATE_normalizeTimestamp(n2)), t3.xt(`${n2.seconds || ""}`), t3.Mt(n2.nanos || 0);
      } else if ("stringValue" in e3) this.Ot(e3.stringValue, t3), this.Nt(t3);
      else if ("bytesValue" in e3) this.Ft(t3, 30), t3.Bt(__PRIVATE_normalizeByteString(e3.bytesValue)), this.Nt(t3);
      else if ("referenceValue" in e3) this.Lt(e3.referenceValue, t3);
      else if ("geoPointValue" in e3) {
        const n2 = e3.geoPointValue;
        this.Ft(t3, 45), t3.Mt(n2.latitude || 0), t3.Mt(n2.longitude || 0);
      } else "mapValue" in e3 ? __PRIVATE_isMaxValue(e3) ? this.Ft(t3, Number.MAX_SAFE_INTEGER) : __PRIVATE_isVectorValue(e3) ? this.kt(e3.mapValue, t3) : (this.qt(e3.mapValue, t3), this.Nt(t3)) : "arrayValue" in e3 ? (this.Qt(e3.arrayValue, t3), this.Nt(t3)) : fail(19022, {
        $t: e3
      });
    }
    Ot(e3, t3) {
      this.Ft(t3, 25), this.Ut(e3, t3);
    }
    Ut(e3, t3) {
      t3.xt(e3);
    }
    qt(e3, t3) {
      const n2 = e3.fields || {};
      this.Ft(t3, 55);
      for (const e4 of Object.keys(n2)) this.Ot(e4, t3), this.Ct(n2[e4], t3);
    }
    kt(e3, t3) {
      const n2 = e3.fields || {};
      this.Ft(t3, 53);
      const r3 = Et, i3 = n2[r3].arrayValue?.values?.length || 0;
      this.Ft(t3, 15), t3.Mt(__PRIVATE_normalizeNumber(i3)), // Vectors then sort by position value
      this.Ot(r3, t3), this.Ct(n2[r3], t3);
    }
    Qt(e3, t3) {
      const n2 = e3.values || [];
      this.Ft(t3, 50);
      for (const e4 of n2) this.Ct(e4, t3);
    }
    Lt(e3, t3) {
      this.Ft(t3, 37);
      DocumentKey.fromName(e3).path.forEach(((e4) => {
        this.Ft(t3, 60), this.Ut(e4, t3);
      }));
    }
    Ft(e3, t3) {
      e3.Mt(t3);
    }
    Nt(e3) {
      e3.Mt(2);
    }
  };
  __PRIVATE_FirestoreIndexValueWriter.Kt = new __PRIVATE_FirestoreIndexValueWriter();
  var __PRIVATE_MemoryIndexManager = class {
    constructor() {
      this.Cn = new __PRIVATE_MemoryCollectionParentIndex();
    }
    addToCollectionParentIndex(e3, t3) {
      return this.Cn.add(t3), PersistencePromise.resolve();
    }
    getCollectionParents(e3, t3) {
      return PersistencePromise.resolve(this.Cn.getEntries(t3));
    }
    addFieldIndex(e3, t3) {
      return PersistencePromise.resolve();
    }
    deleteFieldIndex(e3, t3) {
      return PersistencePromise.resolve();
    }
    deleteAllFieldIndexes(e3) {
      return PersistencePromise.resolve();
    }
    createTargetIndexes(e3, t3) {
      return PersistencePromise.resolve();
    }
    getDocumentsMatchingTarget(e3, t3) {
      return PersistencePromise.resolve(null);
    }
    getIndexType(e3, t3) {
      return PersistencePromise.resolve(
        0
        /* IndexType.NONE */
      );
    }
    getFieldIndexes(e3, t3) {
      return PersistencePromise.resolve([]);
    }
    getNextCollectionGroupToUpdate(e3) {
      return PersistencePromise.resolve(null);
    }
    getMinOffset(e3, t3) {
      return PersistencePromise.resolve(IndexOffset.min());
    }
    getMinOffsetFromCollectionGroup(e3, t3) {
      return PersistencePromise.resolve(IndexOffset.min());
    }
    updateCollectionGroup(e3, t3, n2) {
      return PersistencePromise.resolve();
    }
    updateIndexEntries(e3, t3) {
      return PersistencePromise.resolve();
    }
  };
  var __PRIVATE_MemoryCollectionParentIndex = class {
    constructor() {
      this.index = {};
    }
    // Returns false if the entry already existed.
    add(e3) {
      const t3 = e3.lastSegment(), n2 = e3.popLast(), r3 = this.index[t3] || new SortedSet(ResourcePath.comparator), i3 = !r3.has(n2);
      return this.index[t3] = r3.add(n2), i3;
    }
    has(e3) {
      const t3 = e3.lastSegment(), n2 = e3.popLast(), r3 = this.index[t3];
      return r3 && r3.has(n2);
    }
    getEntries(e3) {
      return (this.index[e3] || new SortedSet(ResourcePath.comparator)).toArray();
    }
  };
  var Mt = new Uint8Array(0);
  var xt = {
    didRun: false,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
  };
  var Ot = 41943040;
  var LruParams = class _LruParams {
    static withCacheSize(e3) {
      return new _LruParams(e3, _LruParams.DEFAULT_COLLECTION_PERCENTILE, _LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    }
    constructor(e3, t3, n2) {
      this.cacheSizeCollectionThreshold = e3, this.percentileToCollect = t3, this.maximumSequenceNumbersToCollect = n2;
    }
  };
  LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(Ot, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
  var __PRIVATE_TargetIdGenerator = class ___PRIVATE_TargetIdGenerator {
    constructor(e3) {
      this.ar = e3;
    }
    next() {
      return this.ar += 2, this.ar;
    }
    static ur() {
      return new ___PRIVATE_TargetIdGenerator(0);
    }
    static cr() {
      return new ___PRIVATE_TargetIdGenerator(-1);
    }
  };
  var Nt = "LruGarbageCollector";
  var Bt = 1048576;
  function __PRIVATE_bufferEntryComparator([e3, t3], [n2, r3]) {
    const i3 = __PRIVATE_primitiveComparator(e3, n2);
    return 0 === i3 ? __PRIVATE_primitiveComparator(t3, r3) : i3;
  }
  var __PRIVATE_RollingSequenceNumberBuffer = class {
    constructor(e3) {
      this.Ir = e3, this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator), this.Er = 0;
    }
    dr() {
      return ++this.Er;
    }
    Ar(e3) {
      const t3 = [e3, this.dr()];
      if (this.buffer.size < this.Ir) this.buffer = this.buffer.add(t3);
      else {
        const e4 = this.buffer.last();
        __PRIVATE_bufferEntryComparator(t3, e4) < 0 && (this.buffer = this.buffer.delete(e4).add(t3));
      }
    }
    get maxValue() {
      return this.buffer.last()[0];
    }
  };
  var __PRIVATE_LruScheduler = class {
    constructor(e3, t3, n2) {
      this.garbageCollector = e3, this.asyncQueue = t3, this.localStore = n2, this.Rr = null;
    }
    start() {
      -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Vr(6e4);
    }
    stop() {
      this.Rr && (this.Rr.cancel(), this.Rr = null);
    }
    get started() {
      return null !== this.Rr;
    }
    Vr(e3) {
      __PRIVATE_logDebug(Nt, `Garbage collection scheduled in ${e3}ms`), this.Rr = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e3, (async () => {
        this.Rr = null;
        try {
          await this.localStore.collectGarbage(this.garbageCollector);
        } catch (e4) {
          __PRIVATE_isIndexedDbTransactionError(e4) ? __PRIVATE_logDebug(Nt, "Ignoring IndexedDB error during garbage collection: ", e4) : await __PRIVATE_ignoreIfPrimaryLeaseLoss(e4);
        }
        await this.Vr(3e5);
      }));
    }
  };
  var __PRIVATE_LruGarbageCollectorImpl = class {
    constructor(e3, t3) {
      this.mr = e3, this.params = t3;
    }
    calculateTargetCount(e3, t3) {
      return this.mr.gr(e3).next(((e4) => Math.floor(t3 / 100 * e4)));
    }
    nthSequenceNumber(e3, t3) {
      if (0 === t3) return PersistencePromise.resolve(__PRIVATE_ListenSequence.ce);
      const n2 = new __PRIVATE_RollingSequenceNumberBuffer(t3);
      return this.mr.forEachTarget(e3, ((e4) => n2.Ar(e4.sequenceNumber))).next((() => this.mr.pr(e3, ((e4) => n2.Ar(e4))))).next((() => n2.maxValue));
    }
    removeTargets(e3, t3, n2) {
      return this.mr.removeTargets(e3, t3, n2);
    }
    removeOrphanedDocuments(e3, t3) {
      return this.mr.removeOrphanedDocuments(e3, t3);
    }
    collect(e3, t3) {
      return -1 === this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", "Garbage collection skipped; disabled"), PersistencePromise.resolve(xt)) : this.getCacheSize(e3).next(((n2) => n2 < this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection skipped; Cache size ${n2} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), xt) : this.yr(e3, t3)));
    }
    getCacheSize(e3) {
      return this.mr.getCacheSize(e3);
    }
    yr(e3, t3) {
      let n2, r3, i3, s3, o3, _2, u4;
      const c3 = Date.now();
      return this.calculateTargetCount(e3, this.params.percentileToCollect).next(((t4) => (
        // Cap at the configured max
        (t4 > this.params.maximumSequenceNumbersToCollect ? (__PRIVATE_logDebug("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t4}`), r3 = this.params.maximumSequenceNumbersToCollect) : r3 = t4, s3 = Date.now(), this.nthSequenceNumber(e3, r3))
      ))).next(((r4) => (n2 = r4, o3 = Date.now(), this.removeTargets(e3, n2, t3)))).next(((t4) => (i3 = t4, _2 = Date.now(), this.removeOrphanedDocuments(e3, n2)))).next(((e4) => {
        if (u4 = Date.now(), __PRIVATE_getLogLevel() <= LogLevel.DEBUG) {
          __PRIVATE_logDebug("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${s3 - c3}ms
	Determined least recently used ${r3} in ` + (o3 - s3) + `ms
	Removed ${i3} targets in ` + (_2 - o3) + `ms
	Removed ${e4} documents in ` + (u4 - _2) + `ms
Total Duration: ${u4 - c3}ms`);
        }
        return PersistencePromise.resolve({
          didRun: true,
          sequenceNumbersCollected: r3,
          targetsRemoved: i3,
          documentsRemoved: e4
        });
      }));
    }
  };
  function __PRIVATE_newLruGarbageCollector(e3, t3) {
    return new __PRIVATE_LruGarbageCollectorImpl(e3, t3);
  }
  var RemoteDocumentChangeBuffer = class {
    constructor() {
      this.changes = new ObjectMap(((e3) => e3.toString()), ((e3, t3) => e3.isEqual(t3))), this.changesApplied = false;
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    addEntry(e3) {
      this.assertNotApplied(), this.changes.set(e3.key, e3);
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    removeEntry(e3, t3) {
      this.assertNotApplied(), this.changes.set(e3, MutableDocument.newInvalidDocument(e3).setReadTime(t3));
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */
    getEntry(e3, t3) {
      this.assertNotApplied();
      const n2 = this.changes.get(t3);
      return void 0 !== n2 ? PersistencePromise.resolve(n2) : this.getFromCache(e3, t3);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */
    getEntries(e3, t3) {
      return this.getAllFromCache(e3, t3);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    apply(e3) {
      return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e3);
    }
    /** Helper to assert this.changes is not null  */
    assertNotApplied() {
    }
  };
  var OverlayedDocument = class {
    constructor(e3, t3) {
      this.overlayedDocument = e3, this.mutatedFields = t3;
    }
  };
  var LocalDocumentsView = class {
    constructor(e3, t3, n2, r3) {
      this.remoteDocumentCache = e3, this.mutationQueue = t3, this.documentOverlayCache = n2, this.indexManager = r3;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */
    getDocument(e3, t3) {
      let n2 = null;
      return this.documentOverlayCache.getOverlay(e3, t3).next(((r3) => (n2 = r3, this.remoteDocumentCache.getEntry(e3, t3)))).next(((e4) => (null !== n2 && __PRIVATE_mutationApplyToLocalView(n2.mutation, e4, FieldMask.empty(), Timestamp.now()), e4)));
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    getDocuments(e3, t3) {
      return this.remoteDocumentCache.getEntries(e3, t3).next(((t4) => this.getLocalViewOfDocuments(e3, t4, __PRIVATE_documentKeySet()).next((() => t4))));
    }
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */
    getLocalViewOfDocuments(e3, t3, n2 = __PRIVATE_documentKeySet()) {
      const r3 = __PRIVATE_newOverlayMap();
      return this.populateOverlays(e3, r3, t3).next((() => this.computeViews(e3, t3, r3, n2).next(((e4) => {
        let t4 = documentMap();
        return e4.forEach(((e5, n3) => {
          t4 = t4.insert(e5, n3.overlayedDocument);
        })), t4;
      }))));
    }
    /**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */
    getOverlayedDocuments(e3, t3) {
      const n2 = __PRIVATE_newOverlayMap();
      return this.populateOverlays(e3, n2, t3).next((() => this.computeViews(e3, t3, n2, __PRIVATE_documentKeySet())));
    }
    /**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */
    populateOverlays(e3, t3, n2) {
      const r3 = [];
      return n2.forEach(((e4) => {
        t3.has(e4) || r3.push(e4);
      })), this.documentOverlayCache.getOverlays(e3, r3).next(((e4) => {
        e4.forEach(((e5, n3) => {
          t3.set(e5, n3);
        }));
      }));
    }
    /**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */
    computeViews(e3, t3, n2, r3) {
      let i3 = __PRIVATE_mutableDocumentMap();
      const s3 = __PRIVATE_newDocumentKeyMap(), o3 = (function __PRIVATE_newOverlayedDocumentMap() {
        return __PRIVATE_newDocumentKeyMap();
      })();
      return t3.forEach(((e4, t4) => {
        const o4 = n2.get(t4.key);
        r3.has(t4.key) && (void 0 === o4 || o4.mutation instanceof __PRIVATE_PatchMutation) ? i3 = i3.insert(t4.key, t4) : void 0 !== o4 ? (s3.set(t4.key, o4.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o4.mutation, t4, o4.mutation.getFieldMask(), Timestamp.now())) : (
          // no overlay exists
          // Using EMPTY to indicate there is no overlay for the document.
          s3.set(t4.key, FieldMask.empty())
        );
      })), this.recalculateAndSaveOverlays(e3, i3).next(((e4) => (e4.forEach(((e5, t4) => s3.set(e5, t4))), t3.forEach(((e5, t4) => o3.set(e5, new OverlayedDocument(t4, s3.get(e5) ?? null)))), o3)));
    }
    recalculateAndSaveOverlays(e3, t3) {
      const n2 = __PRIVATE_newDocumentKeyMap();
      let r3 = new SortedMap(((e4, t4) => e4 - t4)), i3 = __PRIVATE_documentKeySet();
      return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e3, t3).next(((e4) => {
        for (const i4 of e4) i4.keys().forEach(((e5) => {
          const s3 = t3.get(e5);
          if (null === s3) return;
          let o3 = n2.get(e5) || FieldMask.empty();
          o3 = i4.applyToLocalView(s3, o3), n2.set(e5, o3);
          const _2 = (r3.get(i4.batchId) || __PRIVATE_documentKeySet()).add(e5);
          r3 = r3.insert(i4.batchId, _2);
        }));
      })).next((() => {
        const s3 = [], o3 = r3.getReverseIterator();
        for (; o3.hasNext(); ) {
          const r4 = o3.getNext(), _2 = r4.key, a3 = r4.value, u4 = __PRIVATE_newMutationMap();
          a3.forEach(((e4) => {
            if (!i3.has(e4)) {
              const r5 = __PRIVATE_calculateOverlayMutation(t3.get(e4), n2.get(e4));
              null !== r5 && u4.set(e4, r5), i3 = i3.add(e4);
            }
          })), s3.push(this.documentOverlayCache.saveOverlays(e3, _2, u4));
        }
        return PersistencePromise.waitFor(s3);
      })).next((() => n2));
    }
    /**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */
    recalculateAndSaveOverlaysForDocumentKeys(e3, t3) {
      return this.remoteDocumentCache.getEntries(e3, t3).next(((t4) => this.recalculateAndSaveOverlays(e3, t4)));
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */
    getDocumentsMatchingQuery(e3, t3, n2, r3) {
      return (function __PRIVATE_isDocumentQuery$1(e4) {
        return DocumentKey.isDocumentKey(e4.path) && null === e4.collectionGroup && 0 === e4.filters.length;
      })(t3) ? this.getDocumentsMatchingDocumentQuery(e3, t3.path) : __PRIVATE_isCollectionGroupQuery(t3) ? this.getDocumentsMatchingCollectionGroupQuery(e3, t3, n2, r3) : this.getDocumentsMatchingCollectionQuery(e3, t3, n2, r3);
    }
    /**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */
    getNextDocuments(e3, t3, n2, r3) {
      return this.remoteDocumentCache.getAllFromCollectionGroup(e3, t3, n2, r3).next(((i3) => {
        const s3 = r3 - i3.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e3, t3, n2.largestBatchId, r3 - i3.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
        let o3 = U, _2 = i3;
        return s3.next(((t4) => PersistencePromise.forEach(t4, ((t5, n3) => (o3 < n3.largestBatchId && (o3 = n3.largestBatchId), i3.get(t5) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e3, t5).next(((e4) => {
          _2 = _2.insert(t5, e4);
        }))))).next((() => this.populateOverlays(e3, t4, i3))).next((() => this.computeViews(e3, _2, t4, __PRIVATE_documentKeySet()))).next(((e4) => ({
          batchId: o3,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e4)
        })))));
      }));
    }
    getDocumentsMatchingDocumentQuery(e3, t3) {
      return this.getDocument(e3, new DocumentKey(t3)).next(((e4) => {
        let t4 = documentMap();
        return e4.isFoundDocument() && (t4 = t4.insert(e4.key, e4)), t4;
      }));
    }
    getDocumentsMatchingCollectionGroupQuery(e3, t3, n2, r3) {
      const i3 = t3.collectionGroup;
      let s3 = documentMap();
      return this.indexManager.getCollectionParents(e3, i3).next(((o3) => PersistencePromise.forEach(o3, ((o4) => {
        const _2 = (function __PRIVATE_asCollectionQueryAtPath(e4, t4) {
          return new __PRIVATE_QueryImpl(
            t4,
            /*collectionGroup=*/
            null,
            e4.explicitOrderBy.slice(),
            e4.filters.slice(),
            e4.limit,
            e4.limitType,
            e4.startAt,
            e4.endAt
          );
        })(t3, o4.child(i3));
        return this.getDocumentsMatchingCollectionQuery(e3, _2, n2, r3).next(((e4) => {
          e4.forEach(((e5, t4) => {
            s3 = s3.insert(e5, t4);
          }));
        }));
      })).next((() => s3))));
    }
    getDocumentsMatchingCollectionQuery(e3, t3, n2, r3) {
      let i3;
      return this.documentOverlayCache.getOverlaysForCollection(e3, t3.path, n2.largestBatchId).next(((s3) => (i3 = s3, this.remoteDocumentCache.getDocumentsMatchingQuery(e3, t3, n2, i3, r3)))).next(((e4) => {
        i3.forEach(((t4, n4) => {
          const r4 = n4.getKey();
          null === e4.get(r4) && (e4 = e4.insert(r4, MutableDocument.newInvalidDocument(r4)));
        }));
        let n3 = documentMap();
        return e4.forEach(((e5, r4) => {
          const s3 = i3.get(e5);
          void 0 !== s3 && __PRIVATE_mutationApplyToLocalView(s3.mutation, r4, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
          __PRIVATE_queryMatches(t3, r4) && (n3 = n3.insert(e5, r4));
        })), n3;
      }));
    }
  };
  var __PRIVATE_MemoryBundleCache = class {
    constructor(e3) {
      this.serializer = e3, this.Lr = /* @__PURE__ */ new Map(), this.kr = /* @__PURE__ */ new Map();
    }
    getBundleMetadata(e3, t3) {
      return PersistencePromise.resolve(this.Lr.get(t3));
    }
    saveBundleMetadata(e3, t3) {
      return this.Lr.set(
        t3.id,
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        (function __PRIVATE_fromBundleMetadata(e4) {
          return {
            id: e4.id,
            version: e4.version,
            createTime: __PRIVATE_fromVersion(e4.createTime)
          };
        })(t3)
      ), PersistencePromise.resolve();
    }
    getNamedQuery(e3, t3) {
      return PersistencePromise.resolve(this.kr.get(t3));
    }
    saveNamedQuery(e3, t3) {
      return this.kr.set(t3.name, (function __PRIVATE_fromProtoNamedQuery(e4) {
        return {
          name: e4.name,
          query: __PRIVATE_fromBundledQuery(e4.bundledQuery),
          readTime: __PRIVATE_fromVersion(e4.readTime)
        };
      })(t3)), PersistencePromise.resolve();
    }
  };
  var __PRIVATE_MemoryDocumentOverlayCache = class {
    constructor() {
      this.overlays = new SortedMap(DocumentKey.comparator), this.qr = /* @__PURE__ */ new Map();
    }
    getOverlay(e3, t3) {
      return PersistencePromise.resolve(this.overlays.get(t3));
    }
    getOverlays(e3, t3) {
      const n2 = __PRIVATE_newOverlayMap();
      return PersistencePromise.forEach(t3, ((t4) => this.getOverlay(e3, t4).next(((e4) => {
        null !== e4 && n2.set(t4, e4);
      })))).next((() => n2));
    }
    saveOverlays(e3, t3, n2) {
      return n2.forEach(((n3, r3) => {
        this.St(e3, t3, r3);
      })), PersistencePromise.resolve();
    }
    removeOverlaysForBatchId(e3, t3, n2) {
      const r3 = this.qr.get(n2);
      return void 0 !== r3 && (r3.forEach(((e4) => this.overlays = this.overlays.remove(e4))), this.qr.delete(n2)), PersistencePromise.resolve();
    }
    getOverlaysForCollection(e3, t3, n2) {
      const r3 = __PRIVATE_newOverlayMap(), i3 = t3.length + 1, s3 = new DocumentKey(t3.child("")), o3 = this.overlays.getIteratorFrom(s3);
      for (; o3.hasNext(); ) {
        const e4 = o3.getNext().value, s4 = e4.getKey();
        if (!t3.isPrefixOf(s4.path)) break;
        s4.path.length === i3 && (e4.largestBatchId > n2 && r3.set(e4.getKey(), e4));
      }
      return PersistencePromise.resolve(r3);
    }
    getOverlaysForCollectionGroup(e3, t3, n2, r3) {
      let i3 = new SortedMap(((e4, t4) => e4 - t4));
      const s3 = this.overlays.getIterator();
      for (; s3.hasNext(); ) {
        const e4 = s3.getNext().value;
        if (e4.getKey().getCollectionGroup() === t3 && e4.largestBatchId > n2) {
          let t4 = i3.get(e4.largestBatchId);
          null === t4 && (t4 = __PRIVATE_newOverlayMap(), i3 = i3.insert(e4.largestBatchId, t4)), t4.set(e4.getKey(), e4);
        }
      }
      const o3 = __PRIVATE_newOverlayMap(), _2 = i3.getIterator();
      for (; _2.hasNext(); ) {
        if (_2.getNext().value.forEach(((e4, t4) => o3.set(e4, t4))), o3.size() >= r3) break;
      }
      return PersistencePromise.resolve(o3);
    }
    St(e3, t3, n2) {
      const r3 = this.overlays.get(n2.key);
      if (null !== r3) {
        const e4 = this.qr.get(r3.largestBatchId).delete(n2.key);
        this.qr.set(r3.largestBatchId, e4);
      }
      this.overlays = this.overlays.insert(n2.key, new Overlay(t3, n2));
      let i3 = this.qr.get(t3);
      void 0 === i3 && (i3 = __PRIVATE_documentKeySet(), this.qr.set(t3, i3)), this.qr.set(t3, i3.add(n2.key));
    }
  };
  var __PRIVATE_MemoryGlobalsCache = class {
    constructor() {
      this.sessionToken = ByteString.EMPTY_BYTE_STRING;
    }
    getSessionToken(e3) {
      return PersistencePromise.resolve(this.sessionToken);
    }
    setSessionToken(e3, t3) {
      return this.sessionToken = t3, PersistencePromise.resolve();
    }
  };
  var __PRIVATE_ReferenceSet = class {
    constructor() {
      this.Qr = new SortedSet(__PRIVATE_DocReference.$r), // A set of outstanding references to a document sorted by target id.
      this.Ur = new SortedSet(__PRIVATE_DocReference.Kr);
    }
    /** Returns true if the reference set contains no references. */
    isEmpty() {
      return this.Qr.isEmpty();
    }
    /** Adds a reference to the given document key for the given ID. */
    addReference(e3, t3) {
      const n2 = new __PRIVATE_DocReference(e3, t3);
      this.Qr = this.Qr.add(n2), this.Ur = this.Ur.add(n2);
    }
    /** Add references to the given document keys for the given ID. */
    Wr(e3, t3) {
      e3.forEach(((e4) => this.addReference(e4, t3)));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    removeReference(e3, t3) {
      this.Gr(new __PRIVATE_DocReference(e3, t3));
    }
    zr(e3, t3) {
      e3.forEach(((e4) => this.removeReference(e4, t3)));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    jr(e3) {
      const t3 = new DocumentKey(new ResourcePath([])), n2 = new __PRIVATE_DocReference(t3, e3), r3 = new __PRIVATE_DocReference(t3, e3 + 1), i3 = [];
      return this.Ur.forEachInRange([n2, r3], ((e4) => {
        this.Gr(e4), i3.push(e4.key);
      })), i3;
    }
    Jr() {
      this.Qr.forEach(((e3) => this.Gr(e3)));
    }
    Gr(e3) {
      this.Qr = this.Qr.delete(e3), this.Ur = this.Ur.delete(e3);
    }
    Hr(e3) {
      const t3 = new DocumentKey(new ResourcePath([])), n2 = new __PRIVATE_DocReference(t3, e3), r3 = new __PRIVATE_DocReference(t3, e3 + 1);
      let i3 = __PRIVATE_documentKeySet();
      return this.Ur.forEachInRange([n2, r3], ((e4) => {
        i3 = i3.add(e4.key);
      })), i3;
    }
    containsKey(e3) {
      const t3 = new __PRIVATE_DocReference(e3, 0), n2 = this.Qr.firstAfterOrEqual(t3);
      return null !== n2 && e3.isEqual(n2.key);
    }
  };
  var __PRIVATE_DocReference = class {
    constructor(e3, t3) {
      this.key = e3, this.Yr = t3;
    }
    /** Compare by key then by ID */
    static $r(e3, t3) {
      return DocumentKey.comparator(e3.key, t3.key) || __PRIVATE_primitiveComparator(e3.Yr, t3.Yr);
    }
    /** Compare by ID then by key */
    static Kr(e3, t3) {
      return __PRIVATE_primitiveComparator(e3.Yr, t3.Yr) || DocumentKey.comparator(e3.key, t3.key);
    }
  };
  var __PRIVATE_MemoryMutationQueue = class {
    constructor(e3, t3) {
      this.indexManager = e3, this.referenceDelegate = t3, /**
       * The set of all mutations that have been sent but not yet been applied to
       * the backend.
       */
      this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
      this.tr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
      this.Zr = new SortedSet(__PRIVATE_DocReference.$r);
    }
    checkEmpty(e3) {
      return PersistencePromise.resolve(0 === this.mutationQueue.length);
    }
    addMutationBatch(e3, t3, n2, r3) {
      const i3 = this.tr;
      this.tr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
      const s3 = new MutationBatch(i3, t3, n2, r3);
      this.mutationQueue.push(s3);
      for (const t4 of r3) this.Zr = this.Zr.add(new __PRIVATE_DocReference(t4.key, i3)), this.indexManager.addToCollectionParentIndex(e3, t4.key.path.popLast());
      return PersistencePromise.resolve(s3);
    }
    lookupMutationBatch(e3, t3) {
      return PersistencePromise.resolve(this.Xr(t3));
    }
    getNextMutationBatchAfterBatchId(e3, t3) {
      const n2 = t3 + 1, r3 = this.ei(n2), i3 = r3 < 0 ? 0 : r3;
      return PersistencePromise.resolve(this.mutationQueue.length > i3 ? this.mutationQueue[i3] : null);
    }
    getHighestUnacknowledgedBatchId() {
      return PersistencePromise.resolve(0 === this.mutationQueue.length ? j3 : this.tr - 1);
    }
    getAllMutationBatches(e3) {
      return PersistencePromise.resolve(this.mutationQueue.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(e3, t3) {
      const n2 = new __PRIVATE_DocReference(t3, 0), r3 = new __PRIVATE_DocReference(t3, Number.POSITIVE_INFINITY), i3 = [];
      return this.Zr.forEachInRange([n2, r3], ((e4) => {
        const t4 = this.Xr(e4.Yr);
        i3.push(t4);
      })), PersistencePromise.resolve(i3);
    }
    getAllMutationBatchesAffectingDocumentKeys(e3, t3) {
      let n2 = new SortedSet(__PRIVATE_primitiveComparator);
      return t3.forEach(((e4) => {
        const t4 = new __PRIVATE_DocReference(e4, 0), r3 = new __PRIVATE_DocReference(e4, Number.POSITIVE_INFINITY);
        this.Zr.forEachInRange([t4, r3], ((e5) => {
          n2 = n2.add(e5.Yr);
        }));
      })), PersistencePromise.resolve(this.ti(n2));
    }
    getAllMutationBatchesAffectingQuery(e3, t3) {
      const n2 = t3.path, r3 = n2.length + 1;
      let i3 = n2;
      DocumentKey.isDocumentKey(i3) || (i3 = i3.child(""));
      const s3 = new __PRIVATE_DocReference(new DocumentKey(i3), 0);
      let o3 = new SortedSet(__PRIVATE_primitiveComparator);
      return this.Zr.forEachWhile(((e4) => {
        const t4 = e4.key.path;
        return !!n2.isPrefixOf(t4) && // Rows with document keys more than one segment longer than the query
        // path can't be matches. For example, a query on 'rooms' can't match
        // the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        (t4.length === r3 && (o3 = o3.add(e4.Yr)), true);
      }), s3), PersistencePromise.resolve(this.ti(o3));
    }
    ti(e3) {
      const t3 = [];
      return e3.forEach(((e4) => {
        const n2 = this.Xr(e4);
        null !== n2 && t3.push(n2);
      })), t3;
    }
    removeMutationBatch(e3, t3) {
      __PRIVATE_hardAssert(0 === this.ni(t3.batchId, "removed"), 55003), this.mutationQueue.shift();
      let n2 = this.Zr;
      return PersistencePromise.forEach(t3.mutations, ((r3) => {
        const i3 = new __PRIVATE_DocReference(r3.key, t3.batchId);
        return n2 = n2.delete(i3), this.referenceDelegate.markPotentiallyOrphaned(e3, r3.key);
      })).next((() => {
        this.Zr = n2;
      }));
    }
    ir(e3) {
    }
    containsKey(e3, t3) {
      const n2 = new __PRIVATE_DocReference(t3, 0), r3 = this.Zr.firstAfterOrEqual(n2);
      return PersistencePromise.resolve(t3.isEqual(r3 && r3.key));
    }
    performConsistencyCheck(e3) {
      return this.mutationQueue.length, PersistencePromise.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    ni(e3, t3) {
      return this.ei(e3);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been removed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    ei(e3) {
      if (0 === this.mutationQueue.length)
        return 0;
      return e3 - this.mutationQueue[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficient.
     */
    Xr(e3) {
      const t3 = this.ei(e3);
      if (t3 < 0 || t3 >= this.mutationQueue.length) return null;
      return this.mutationQueue[t3];
    }
  };
  var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(e3) {
      this.ri = e3, /** Underlying cache of documents and their read times. */
      this.docs = (function __PRIVATE_documentEntryMap() {
        return new SortedMap(DocumentKey.comparator);
      })(), /** Size of all cached documents. */
      this.size = 0;
    }
    setIndexManager(e3) {
      this.indexManager = e3;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    addEntry(e3, t3) {
      const n2 = t3.key, r3 = this.docs.get(n2), i3 = r3 ? r3.size : 0, s3 = this.ri(t3);
      return this.docs = this.docs.insert(n2, {
        document: t3.mutableCopy(),
        size: s3
      }), this.size += s3 - i3, this.indexManager.addToCollectionParentIndex(e3, n2.path.popLast());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    removeEntry(e3) {
      const t3 = this.docs.get(e3);
      t3 && (this.docs = this.docs.remove(e3), this.size -= t3.size);
    }
    getEntry(e3, t3) {
      const n2 = this.docs.get(t3);
      return PersistencePromise.resolve(n2 ? n2.document.mutableCopy() : MutableDocument.newInvalidDocument(t3));
    }
    getEntries(e3, t3) {
      let n2 = __PRIVATE_mutableDocumentMap();
      return t3.forEach(((e4) => {
        const t4 = this.docs.get(e4);
        n2 = n2.insert(e4, t4 ? t4.document.mutableCopy() : MutableDocument.newInvalidDocument(e4));
      })), PersistencePromise.resolve(n2);
    }
    getDocumentsMatchingQuery(e3, t3, n2, r3) {
      let i3 = __PRIVATE_mutableDocumentMap();
      const s3 = t3.path, o3 = new DocumentKey(s3.child("__id-9223372036854775808__")), _2 = this.docs.getIteratorFrom(o3);
      for (; _2.hasNext(); ) {
        const { key: e4, value: { document: o4 } } = _2.getNext();
        if (!s3.isPrefixOf(e4.path)) break;
        e4.path.length > s3.length + 1 || (__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o4), n2) <= 0 || (r3.has(o4.key) || __PRIVATE_queryMatches(t3, o4)) && (i3 = i3.insert(o4.key, o4.mutableCopy())));
      }
      return PersistencePromise.resolve(i3);
    }
    getAllFromCollectionGroup(e3, t3, n2, r3) {
      fail(9500);
    }
    ii(e3, t3) {
      return PersistencePromise.forEach(this.docs, ((e4) => t3(e4)));
    }
    newChangeBuffer(e3) {
      return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
    }
    getSize(e3) {
      return PersistencePromise.resolve(this.size);
    }
  };
  var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
    constructor(e3) {
      super(), this.Nr = e3;
    }
    applyChanges(e3) {
      const t3 = [];
      return this.changes.forEach(((n2, r3) => {
        r3.isValidDocument() ? t3.push(this.Nr.addEntry(e3, r3)) : this.Nr.removeEntry(n2);
      })), PersistencePromise.waitFor(t3);
    }
    getFromCache(e3, t3) {
      return this.Nr.getEntry(e3, t3);
    }
    getAllFromCache(e3, t3) {
      return this.Nr.getEntries(e3, t3);
    }
  };
  var __PRIVATE_MemoryTargetCache = class {
    constructor(e3) {
      this.persistence = e3, /**
       * Maps a target to the data about that target
       */
      this.si = new ObjectMap(((e4) => __PRIVATE_canonifyTarget(e4)), __PRIVATE_targetEquals), /** The last received snapshot version. */
      this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
      this.highestTargetId = 0, /** The highest sequence number encountered. */
      this.oi = 0, /**
       * A ordered bidirectional mapping between documents and the remote target
       * IDs.
       */
      this._i = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.ai = __PRIVATE_TargetIdGenerator.ur();
    }
    forEachTarget(e3, t3) {
      return this.si.forEach(((e4, n2) => t3(n2))), PersistencePromise.resolve();
    }
    getLastRemoteSnapshotVersion(e3) {
      return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(e3) {
      return PersistencePromise.resolve(this.oi);
    }
    allocateTargetId(e3) {
      return this.highestTargetId = this.ai.next(), PersistencePromise.resolve(this.highestTargetId);
    }
    setTargetsMetadata(e3, t3, n2) {
      return n2 && (this.lastRemoteSnapshotVersion = n2), t3 > this.oi && (this.oi = t3), PersistencePromise.resolve();
    }
    Pr(e3) {
      this.si.set(e3.target, e3);
      const t3 = e3.targetId;
      t3 > this.highestTargetId && (this.ai = new __PRIVATE_TargetIdGenerator(t3), this.highestTargetId = t3), e3.sequenceNumber > this.oi && (this.oi = e3.sequenceNumber);
    }
    addTargetData(e3, t3) {
      return this.Pr(t3), this.targetCount += 1, PersistencePromise.resolve();
    }
    updateTargetData(e3, t3) {
      return this.Pr(t3), PersistencePromise.resolve();
    }
    removeTargetData(e3, t3) {
      return this.si.delete(t3.target), this._i.jr(t3.targetId), this.targetCount -= 1, PersistencePromise.resolve();
    }
    removeTargets(e3, t3, n2) {
      let r3 = 0;
      const i3 = [];
      return this.si.forEach(((s3, o3) => {
        o3.sequenceNumber <= t3 && null === n2.get(o3.targetId) && (this.si.delete(s3), i3.push(this.removeMatchingKeysForTargetId(e3, o3.targetId)), r3++);
      })), PersistencePromise.waitFor(i3).next((() => r3));
    }
    getTargetCount(e3) {
      return PersistencePromise.resolve(this.targetCount);
    }
    getTargetData(e3, t3) {
      const n2 = this.si.get(t3) || null;
      return PersistencePromise.resolve(n2);
    }
    addMatchingKeys(e3, t3, n2) {
      return this._i.Wr(t3, n2), PersistencePromise.resolve();
    }
    removeMatchingKeys(e3, t3, n2) {
      this._i.zr(t3, n2);
      const r3 = this.persistence.referenceDelegate, i3 = [];
      return r3 && t3.forEach(((t4) => {
        i3.push(r3.markPotentiallyOrphaned(e3, t4));
      })), PersistencePromise.waitFor(i3);
    }
    removeMatchingKeysForTargetId(e3, t3) {
      return this._i.jr(t3), PersistencePromise.resolve();
    }
    getMatchingKeysForTargetId(e3, t3) {
      const n2 = this._i.Hr(t3);
      return PersistencePromise.resolve(n2);
    }
    containsKey(e3, t3) {
      return PersistencePromise.resolve(this._i.containsKey(t3));
    }
  };
  var __PRIVATE_MemoryPersistence = class {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(e3, t3) {
      this.ui = {}, this.overlays = {}, this.ci = new __PRIVATE_ListenSequence(0), this.li = false, this.li = true, this.hi = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e3(this), this.Pi = new __PRIVATE_MemoryTargetCache(this);
      this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = (function __PRIVATE_newMemoryRemoteDocumentCache(e4) {
        return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e4);
      })(((e4) => this.referenceDelegate.Ti(e4))), this.serializer = new __PRIVATE_LocalSerializer(t3), this.Ii = new __PRIVATE_MemoryBundleCache(this.serializer);
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return this.li = false, Promise.resolve();
    }
    get started() {
      return this.li;
    }
    setDatabaseDeletedListener() {
    }
    setNetworkEnabled() {
    }
    getIndexManager(e3) {
      return this.indexManager;
    }
    getDocumentOverlayCache(e3) {
      let t3 = this.overlays[e3.toKey()];
      return t3 || (t3 = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e3.toKey()] = t3), t3;
    }
    getMutationQueue(e3, t3) {
      let n2 = this.ui[e3.toKey()];
      return n2 || (n2 = new __PRIVATE_MemoryMutationQueue(t3, this.referenceDelegate), this.ui[e3.toKey()] = n2), n2;
    }
    getGlobalsCache() {
      return this.hi;
    }
    getTargetCache() {
      return this.Pi;
    }
    getRemoteDocumentCache() {
      return this.remoteDocumentCache;
    }
    getBundleCache() {
      return this.Ii;
    }
    runTransaction(e3, t3, n2) {
      __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e3);
      const r3 = new __PRIVATE_MemoryTransaction(this.ci.next());
      return this.referenceDelegate.Ei(), n2(r3).next(((e4) => this.referenceDelegate.di(r3).next((() => e4)))).toPromise().then(((e4) => (r3.raiseOnCommittedEvent(), e4)));
    }
    Ai(e3, t3) {
      return PersistencePromise.or(Object.values(this.ui).map(((n2) => () => n2.containsKey(e3, t3))));
    }
  };
  var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
    constructor(e3) {
      super(), this.currentSequenceNumber = e3;
    }
  };
  var __PRIVATE_MemoryEagerDelegate = class ___PRIVATE_MemoryEagerDelegate {
    constructor(e3) {
      this.persistence = e3, /** Tracks all documents that are active in Query views. */
      this.Ri = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
      this.Vi = null;
    }
    static mi(e3) {
      return new ___PRIVATE_MemoryEagerDelegate(e3);
    }
    get fi() {
      if (this.Vi) return this.Vi;
      throw fail(60996);
    }
    addReference(e3, t3, n2) {
      return this.Ri.addReference(n2, t3), this.fi.delete(n2.toString()), PersistencePromise.resolve();
    }
    removeReference(e3, t3, n2) {
      return this.Ri.removeReference(n2, t3), this.fi.add(n2.toString()), PersistencePromise.resolve();
    }
    markPotentiallyOrphaned(e3, t3) {
      return this.fi.add(t3.toString()), PersistencePromise.resolve();
    }
    removeTarget(e3, t3) {
      this.Ri.jr(t3.targetId).forEach(((e4) => this.fi.add(e4.toString())));
      const n2 = this.persistence.getTargetCache();
      return n2.getMatchingKeysForTargetId(e3, t3.targetId).next(((e4) => {
        e4.forEach(((e5) => this.fi.add(e5.toString())));
      })).next((() => n2.removeTargetData(e3, t3)));
    }
    Ei() {
      this.Vi = /* @__PURE__ */ new Set();
    }
    di(e3) {
      const t3 = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return PersistencePromise.forEach(this.fi, ((n2) => {
        const r3 = DocumentKey.fromPath(n2);
        return this.gi(e3, r3).next(((e4) => {
          e4 || t3.removeEntry(r3, SnapshotVersion.min());
        }));
      })).next((() => (this.Vi = null, t3.apply(e3))));
    }
    updateLimboDocument(e3, t3) {
      return this.gi(e3, t3).next(((e4) => {
        e4 ? this.fi.delete(t3.toString()) : this.fi.add(t3.toString());
      }));
    }
    Ti(e3) {
      return 0;
    }
    gi(e3, t3) {
      return PersistencePromise.or([() => PersistencePromise.resolve(this.Ri.containsKey(t3)), () => this.persistence.getTargetCache().containsKey(e3, t3), () => this.persistence.Ai(e3, t3)]);
    }
  };
  var __PRIVATE_MemoryLruDelegate = class ___PRIVATE_MemoryLruDelegate {
    constructor(e3, t3) {
      this.persistence = e3, this.pi = new ObjectMap(((e4) => __PRIVATE_encodeResourcePath(e4.path)), ((e4, t4) => e4.isEqual(t4))), this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t3);
    }
    static mi(e3, t3) {
      return new ___PRIVATE_MemoryLruDelegate(e3, t3);
    }
    // No-ops, present so memory persistence doesn't have to care which delegate
    // it has.
    Ei() {
    }
    di(e3) {
      return PersistencePromise.resolve();
    }
    forEachTarget(e3, t3) {
      return this.persistence.getTargetCache().forEachTarget(e3, t3);
    }
    gr(e3) {
      const t3 = this.wr(e3);
      return this.persistence.getTargetCache().getTargetCount(e3).next(((e4) => t3.next(((t4) => e4 + t4))));
    }
    wr(e3) {
      let t3 = 0;
      return this.pr(e3, ((e4) => {
        t3++;
      })).next((() => t3));
    }
    pr(e3, t3) {
      return PersistencePromise.forEach(this.pi, ((n2, r3) => this.br(e3, n2, r3).next(((e4) => e4 ? PersistencePromise.resolve() : t3(r3)))));
    }
    removeTargets(e3, t3, n2) {
      return this.persistence.getTargetCache().removeTargets(e3, t3, n2);
    }
    removeOrphanedDocuments(e3, t3) {
      let n2 = 0;
      const r3 = this.persistence.getRemoteDocumentCache(), i3 = r3.newChangeBuffer();
      return r3.ii(e3, ((r4) => this.br(e3, r4, t3).next(((e4) => {
        e4 || (n2++, i3.removeEntry(r4, SnapshotVersion.min()));
      })))).next((() => i3.apply(e3))).next((() => n2));
    }
    markPotentiallyOrphaned(e3, t3) {
      return this.pi.set(t3, e3.currentSequenceNumber), PersistencePromise.resolve();
    }
    removeTarget(e3, t3) {
      const n2 = t3.withSequenceNumber(e3.currentSequenceNumber);
      return this.persistence.getTargetCache().updateTargetData(e3, n2);
    }
    addReference(e3, t3, n2) {
      return this.pi.set(n2, e3.currentSequenceNumber), PersistencePromise.resolve();
    }
    removeReference(e3, t3, n2) {
      return this.pi.set(n2, e3.currentSequenceNumber), PersistencePromise.resolve();
    }
    updateLimboDocument(e3, t3) {
      return this.pi.set(t3, e3.currentSequenceNumber), PersistencePromise.resolve();
    }
    Ti(e3) {
      let t3 = e3.key.toString().length;
      return e3.isFoundDocument() && (t3 += __PRIVATE_estimateByteSize(e3.data.value)), t3;
    }
    br(e3, t3, n2) {
      return PersistencePromise.or([() => this.persistence.Ai(e3, t3), () => this.persistence.getTargetCache().containsKey(e3, t3), () => {
        const e4 = this.pi.get(t3);
        return PersistencePromise.resolve(void 0 !== e4 && e4 > n2);
      }]);
    }
    getCacheSize(e3) {
      return this.persistence.getRemoteDocumentCache().getSize(e3);
    }
  };
  var __PRIVATE_LocalViewChanges = class ___PRIVATE_LocalViewChanges {
    constructor(e3, t3, n2, r3) {
      this.targetId = e3, this.fromCache = t3, this.Es = n2, this.ds = r3;
    }
    static As(e3, t3) {
      let n2 = __PRIVATE_documentKeySet(), r3 = __PRIVATE_documentKeySet();
      for (const e4 of t3.docChanges) switch (e4.type) {
        case 0:
          n2 = n2.add(e4.doc.key);
          break;
        case 1:
          r3 = r3.add(e4.doc.key);
      }
      return new ___PRIVATE_LocalViewChanges(e3, t3.fromCache, n2, r3);
    }
  };
  var QueryContext = class {
    constructor() {
      this._documentReadCount = 0;
    }
    get documentReadCount() {
      return this._documentReadCount;
    }
    incrementDocumentReadCount(e3) {
      this._documentReadCount += e3;
    }
  };
  var __PRIVATE_QueryEngine = class {
    constructor() {
      this.Rs = false, this.Vs = false, /**
       * SDK only decides whether it should create index when collection size is
       * larger than this.
       */
      this.fs = 100, this.gs = /**
      * This cost represents the evaluation result of
      * (([index, docKey] + [docKey, docContent]) per document in the result set)
      * / ([docKey, docContent] per documents in full collection scan) coming from
      * experiment [enter PR experiment URL here].
      */
      (function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
        return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
      })();
    }
    /** Sets the document view to query against. */
    initialize(e3, t3) {
      this.ps = e3, this.indexManager = t3, this.Rs = true;
    }
    /** Returns all local documents matching the specified query. */
    getDocumentsMatchingQuery(e3, t3, n2, r3) {
      const i3 = {
        result: null
      };
      return this.ys(e3, t3).next(((e4) => {
        i3.result = e4;
      })).next((() => {
        if (!i3.result) return this.ws(e3, t3, r3, n2).next(((e4) => {
          i3.result = e4;
        }));
      })).next((() => {
        if (i3.result) return;
        const n3 = new QueryContext();
        return this.Ss(e3, t3, n3).next(((r4) => {
          if (i3.result = r4, this.Vs) return this.bs(e3, t3, n3, r4.size);
        }));
      })).next((() => i3.result));
    }
    bs(e3, t3, n2, r3) {
      return n2.documentReadCount < this.fs ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t3), "since it only creates cache indexes for collection contains", "more than or equal to", this.fs, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t3), "scans", n2.documentReadCount, "local documents and returns", r3, "documents as results."), n2.documentReadCount > this.gs * r3 ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t3), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e3, __PRIVATE_queryToTarget(t3))) : PersistencePromise.resolve());
    }
    /**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */
    ys(e3, t3) {
      if (__PRIVATE_queryMatchesAllDocuments(t3))
        return PersistencePromise.resolve(null);
      let n2 = __PRIVATE_queryToTarget(t3);
      return this.indexManager.getIndexType(e3, n2).next(((r3) => 0 === r3 ? null : (null !== t3.limit && 1 === r3 && // We cannot apply a limit for targets that are served using a partial
      // index. If a partial index will be used to serve the target, the
      // query may return a superset of documents that match the target
      // (e.g. if the index doesn't include all the target's filters), or
      // may return the correct set of documents in the wrong order (e.g. if
      // the index doesn't include a segment for one of the orderBys).
      // Therefore, a limit should not be applied in such cases.
      (t3 = __PRIVATE_queryWithLimit(
        t3,
        null,
        "F"
        /* LimitType.First */
      ), n2 = __PRIVATE_queryToTarget(t3)), this.indexManager.getDocumentsMatchingTarget(e3, n2).next(((r4) => {
        const i3 = __PRIVATE_documentKeySet(...r4);
        return this.ps.getDocuments(e3, i3).next(((r5) => this.indexManager.getMinOffset(e3, n2).next(((n3) => {
          const s3 = this.Ds(t3, r5);
          return this.Cs(t3, s3, i3, n3.readTime) ? this.ys(e3, __PRIVATE_queryWithLimit(
            t3,
            null,
            "F"
            /* LimitType.First */
          )) : this.vs(e3, s3, t3, n3);
        }))));
      })))));
    }
    /**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */
    ws(e3, t3, n2, r3) {
      return __PRIVATE_queryMatchesAllDocuments(t3) || r3.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.ps.getDocuments(e3, n2).next(((i3) => {
        const s3 = this.Ds(t3, i3);
        return this.Cs(t3, s3, n2, r3) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r3.toString(), __PRIVATE_stringifyQuery(t3)), this.vs(e3, s3, t3, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r3, U)).next(((e4) => e4)));
      }));
    }
    /** Applies the query filter and sorting to the provided documents.  */
    Ds(e3, t3) {
      let n2 = new SortedSet(__PRIVATE_newQueryComparator(e3));
      return t3.forEach(((t4, r3) => {
        __PRIVATE_queryMatches(e3, r3) && (n2 = n2.add(r3));
      })), n2;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    Cs(e3, t3, n2, r3) {
      if (null === e3.limit)
        return false;
      if (n2.size !== t3.size)
        return true;
      const i3 = "F" === e3.limitType ? t3.last() : t3.first();
      return !!i3 && (i3.hasPendingWrites || i3.version.compareTo(r3) > 0);
    }
    Ss(e3, t3, n2) {
      return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t3)), this.ps.getDocumentsMatchingQuery(e3, t3, IndexOffset.min(), n2);
    }
    /**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */
    vs(e3, t3, n2, r3) {
      return this.ps.getDocumentsMatchingQuery(e3, n2, r3).next(((e4) => (
        // Merge with existing results
        (t3.forEach(((t4) => {
          e4 = e4.insert(t4.key, t4);
        })), e4)
      )));
    }
  };
  var Ut = "LocalStore";
  var Kt = 3e8;
  var __PRIVATE_LocalStoreImpl = class {
    constructor(e3, t3, n2, r3) {
      this.persistence = e3, this.Fs = t3, this.serializer = r3, /**
       * Maps a targetID to data about its target.
       *
       * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
       * of `applyRemoteEvent()` idempotent.
       */
      this.Ms = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
      // TODO(wuandy): Evaluate if TargetId can be part of Target.
      this.xs = new ObjectMap(((e4) => __PRIVATE_canonifyTarget(e4)), __PRIVATE_targetEquals), /**
       * A per collection group index of the last read time processed by
       * `getNewDocumentChanges()`.
       *
       * PORTING NOTE: This is only used for multi-tab synchronization.
       */
      this.Os = /* @__PURE__ */ new Map(), this.Ns = e3.getRemoteDocumentCache(), this.Pi = e3.getTargetCache(), this.Ii = e3.getBundleCache(), this.Bs(n2);
    }
    Bs(e3) {
      this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e3), this.indexManager = this.persistence.getIndexManager(e3), this.mutationQueue = this.persistence.getMutationQueue(e3, this.indexManager), this.localDocuments = new LocalDocumentsView(this.Ns, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Ns.setIndexManager(this.indexManager), this.Fs.initialize(this.localDocuments, this.indexManager);
    }
    collectGarbage(e3) {
      return this.persistence.runTransaction("Collect garbage", "readwrite-primary", ((t3) => e3.collect(t3, this.Ms)));
    }
  };
  function __PRIVATE_newLocalStore(e3, t3, n2, r3) {
    return new __PRIVATE_LocalStoreImpl(e3, t3, n2, r3);
  }
  async function __PRIVATE_localStoreHandleUserChange(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    return await n2.persistence.runTransaction("Handle user change", "readonly", ((e4) => {
      let r3;
      return n2.mutationQueue.getAllMutationBatches(e4).next(((i3) => (r3 = i3, n2.Bs(t3), n2.mutationQueue.getAllMutationBatches(e4)))).next(((t4) => {
        const i3 = [], s3 = [];
        let o3 = __PRIVATE_documentKeySet();
        for (const e5 of r3) {
          i3.push(e5.batchId);
          for (const t5 of e5.mutations) o3 = o3.add(t5.key);
        }
        for (const e5 of t4) {
          s3.push(e5.batchId);
          for (const t5 of e5.mutations) o3 = o3.add(t5.key);
        }
        return n2.localDocuments.getDocuments(e4, o3).next(((e5) => ({
          Ls: e5,
          removedBatchIds: i3,
          addedBatchIds: s3
        })));
      }));
    }));
  }
  function __PRIVATE_localStoreAcknowledgeBatch(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", ((e4) => {
      const r3 = t3.batch.keys(), i3 = n2.Ns.newChangeBuffer({
        trackRemovals: true
      });
      return (function __PRIVATE_applyWriteToRemoteDocuments(e5, t4, n3, r4) {
        const i4 = n3.batch, s3 = i4.keys();
        let o3 = PersistencePromise.resolve();
        return s3.forEach(((e6) => {
          o3 = o3.next((() => r4.getEntry(t4, e6))).next(((t5) => {
            const s4 = n3.docVersions.get(e6);
            __PRIVATE_hardAssert(null !== s4, 48541), t5.version.compareTo(s4) < 0 && (i4.applyToRemoteDocument(t5, n3), t5.isValidDocument() && // We use the commitVersion as the readTime rather than the
            // document's updateTime since the updateTime is not advanced
            // for updates that do not modify the underlying document.
            (t5.setReadTime(n3.commitVersion), r4.addEntry(t5)));
          }));
        })), o3.next((() => e5.mutationQueue.removeMutationBatch(t4, i4)));
      })(n2, e4, t3, i3).next((() => i3.apply(e4))).next((() => n2.mutationQueue.performConsistencyCheck(e4))).next((() => n2.documentOverlayCache.removeOverlaysForBatchId(e4, r3, t3.batch.batchId))).next((() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e4, (function __PRIVATE_getKeysWithTransformResults(e5) {
        let t4 = __PRIVATE_documentKeySet();
        for (let n3 = 0; n3 < e5.mutationResults.length; ++n3) {
          e5.mutationResults[n3].transformResults.length > 0 && (t4 = t4.add(e5.batch.mutations[n3].key));
        }
        return t4;
      })(t3)))).next((() => n2.localDocuments.getDocuments(e4, r3)));
    }));
  }
  function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    return t3.persistence.runTransaction("Get last remote snapshot version", "readonly", ((e4) => t3.Pi.getLastRemoteSnapshotVersion(e4)));
  }
  function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = t3.snapshotVersion;
    let i3 = n2.Ms;
    return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", ((e4) => {
      const s3 = n2.Ns.newChangeBuffer({
        trackRemovals: true
      });
      i3 = n2.Ms;
      const o3 = [];
      t3.targetChanges.forEach(((s4, _3) => {
        const a4 = i3.get(_3);
        if (!a4) return;
        o3.push(n2.Pi.removeMatchingKeys(e4, s4.removedDocuments, _3).next((() => n2.Pi.addMatchingKeys(e4, s4.addedDocuments, _3))));
        let u4 = a4.withSequenceNumber(e4.currentSequenceNumber);
        null !== t3.targetMismatches.get(_3) ? u4 = u4.withResumeToken(ByteString.EMPTY_BYTE_STRING, SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()) : s4.resumeToken.approximateByteSize() > 0 && (u4 = u4.withResumeToken(s4.resumeToken, r3)), i3 = i3.insert(_3, u4), // Update the target data if there are target changes (or if
        // sufficient time has passed since the last update).
        /**
        * Returns true if the newTargetData should be persisted during an update of
        * an active target. TargetData should always be persisted when a target is
        * being released and should not call this function.
        *
        * While the target is active, TargetData updates can be omitted when nothing
        * about the target has changed except metadata like the resume token or
        * snapshot version. Occasionally it's worth the extra write to prevent these
        * values from getting too stale after a crash, but this doesn't have to be
        * too frequent.
        */
        (function __PRIVATE_shouldPersistTargetData(e5, t4, n3) {
          if (0 === e5.resumeToken.approximateByteSize()) return true;
          const r4 = t4.snapshotVersion.toMicroseconds() - e5.snapshotVersion.toMicroseconds();
          if (r4 >= Kt) return true;
          const i4 = n3.addedDocuments.size + n3.modifiedDocuments.size + n3.removedDocuments.size;
          return i4 > 0;
        })(a4, u4, s4) && o3.push(n2.Pi.updateTargetData(e4, u4));
      }));
      let _2 = __PRIVATE_mutableDocumentMap(), a3 = __PRIVATE_documentKeySet();
      if (t3.documentUpdates.forEach(((r4) => {
        t3.resolvedLimboDocuments.has(r4) && o3.push(n2.persistence.referenceDelegate.updateLimboDocument(e4, r4));
      })), // Each loop iteration only affects its "own" doc, so it's safe to get all
      // the remote documents in advance in a single call.
      o3.push(__PRIVATE_populateDocumentChangeBuffer(e4, s3, t3.documentUpdates).next(((e5) => {
        _2 = e5.ks, a3 = e5.qs;
      }))), !r3.isEqual(SnapshotVersion.min())) {
        const t4 = n2.Pi.getLastRemoteSnapshotVersion(e4).next(((t5) => n2.Pi.setTargetsMetadata(e4, e4.currentSequenceNumber, r3)));
        o3.push(t4);
      }
      return PersistencePromise.waitFor(o3).next((() => s3.apply(e4))).next((() => n2.localDocuments.getLocalViewOfDocuments(e4, _2, a3))).next((() => _2));
    })).then(((e4) => (n2.Ms = i3, e4)));
  }
  function __PRIVATE_populateDocumentChangeBuffer(e3, t3, n2) {
    let r3 = __PRIVATE_documentKeySet(), i3 = __PRIVATE_documentKeySet();
    return n2.forEach(((e4) => r3 = r3.add(e4))), t3.getEntries(e3, r3).next(((e4) => {
      let r4 = __PRIVATE_mutableDocumentMap();
      return n2.forEach(((n3, s3) => {
        const o3 = e4.get(n3);
        s3.isFoundDocument() !== o3.isFoundDocument() && (i3 = i3.add(n3)), // Note: The order of the steps below is important, since we want
        // to ensure that rejected limbo resolutions (which fabricate
        // NoDocuments with SnapshotVersion.min()) never add documents to
        // cache.
        s3.isNoDocument() && s3.version.isEqual(SnapshotVersion.min()) ? (
          // NoDocuments with SnapshotVersion.min() are used in manufactured
          // events. We remove these documents from cache since we lost
          // access.
          (t3.removeEntry(n3, s3.readTime), r4 = r4.insert(n3, s3))
        ) : !o3.isValidDocument() || s3.version.compareTo(o3.version) > 0 || 0 === s3.version.compareTo(o3.version) && o3.hasPendingWrites ? (t3.addEntry(s3), r4 = r4.insert(n3, s3)) : __PRIVATE_logDebug(Ut, "Ignoring outdated watch update for ", n3, ". Current version:", o3.version, " Watch version:", s3.version);
      })), {
        ks: r4,
        qs: i3
      };
    }));
  }
  function __PRIVATE_localStoreGetNextMutationBatch(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    return n2.persistence.runTransaction("Get next mutation batch", "readonly", ((e4) => (void 0 === t3 && (t3 = j3), n2.mutationQueue.getNextMutationBatchAfterBatchId(e4, t3))));
  }
  function __PRIVATE_localStoreAllocateTarget(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    return n2.persistence.runTransaction("Allocate target", "readwrite", ((e4) => {
      let r3;
      return n2.Pi.getTargetData(e4, t3).next(((i3) => i3 ? (
        // This target has been listened to previously, so reuse the
        // previous targetID.
        // TODO(mcg): freshen last accessed date?
        (r3 = i3, PersistencePromise.resolve(r3))
      ) : n2.Pi.allocateTargetId(e4).next(((i4) => (r3 = new TargetData(t3, i4, "TargetPurposeListen", e4.currentSequenceNumber), n2.Pi.addTargetData(e4, r3).next((() => r3)))))));
    })).then(((e4) => {
      const r3 = n2.Ms.get(e4.targetId);
      return (null === r3 || e4.snapshotVersion.compareTo(r3.snapshotVersion) > 0) && (n2.Ms = n2.Ms.insert(e4.targetId, e4), n2.xs.set(t3, e4.targetId)), e4;
    }));
  }
  async function __PRIVATE_localStoreReleaseTarget(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3), i3 = r3.Ms.get(t3), s3 = n2 ? "readwrite" : "readwrite-primary";
    try {
      n2 || await r3.persistence.runTransaction("Release target", s3, ((e4) => r3.persistence.referenceDelegate.removeTarget(e4, i3)));
    } catch (e4) {
      if (!__PRIVATE_isIndexedDbTransactionError(e4)) throw e4;
      __PRIVATE_logDebug(Ut, `Failed to update sequence numbers for target ${t3}: ${e4}`);
    }
    r3.Ms = r3.Ms.remove(t3), r3.xs.delete(i3.target);
  }
  function __PRIVATE_localStoreExecuteQuery(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3);
    let i3 = SnapshotVersion.min(), s3 = __PRIVATE_documentKeySet();
    return r3.persistence.runTransaction(
      "Execute query",
      "readwrite",
      // Use readwrite instead of readonly so indexes can be created
      // Use readwrite instead of readonly so indexes can be created
      ((e4) => (function __PRIVATE_localStoreGetTargetData(e5, t4, n3) {
        const r4 = __PRIVATE_debugCast(e5), i4 = r4.xs.get(n3);
        return void 0 !== i4 ? PersistencePromise.resolve(r4.Ms.get(i4)) : r4.Pi.getTargetData(t4, n3);
      })(r3, e4, __PRIVATE_queryToTarget(t3)).next(((t4) => {
        if (t4) return i3 = t4.lastLimboFreeSnapshotVersion, r3.Pi.getMatchingKeysForTargetId(e4, t4.targetId).next(((e5) => {
          s3 = e5;
        }));
      })).next((() => r3.Fs.getDocumentsMatchingQuery(e4, t3, n2 ? i3 : SnapshotVersion.min(), n2 ? s3 : __PRIVATE_documentKeySet()))).next(((e5) => (__PRIVATE_setMaxReadTime(r3, __PRIVATE_queryCollectionGroup(t3), e5), {
        documents: e5,
        Qs: s3
      }))))
    );
  }
  function __PRIVATE_setMaxReadTime(e3, t3, n2) {
    let r3 = e3.Os.get(t3) || SnapshotVersion.min();
    n2.forEach(((e4, t4) => {
      t4.readTime.compareTo(r3) > 0 && (r3 = t4.readTime);
    })), e3.Os.set(t3, r3);
  }
  var __PRIVATE_LocalClientState = class {
    constructor() {
      this.activeTargetIds = __PRIVATE_targetIdSet();
    }
    zs(e3) {
      this.activeTargetIds = this.activeTargetIds.add(e3);
    }
    js(e3) {
      this.activeTargetIds = this.activeTargetIds.delete(e3);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    Gs() {
      const e3 = {
        activeTargetIds: this.activeTargetIds.toArray(),
        updateTimeMs: Date.now()
      };
      return JSON.stringify(e3);
    }
  };
  var __PRIVATE_MemorySharedClientState = class {
    constructor() {
      this.Mo = new __PRIVATE_LocalClientState(), this.xo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    addPendingMutation(e3) {
    }
    updateMutationState(e3, t3, n2) {
    }
    addLocalQueryTarget(e3, t3 = true) {
      return t3 && this.Mo.zs(e3), this.xo[e3] || "not-current";
    }
    updateQueryState(e3, t3, n2) {
      this.xo[e3] = t3;
    }
    removeLocalQueryTarget(e3) {
      this.Mo.js(e3);
    }
    isLocalQueryTarget(e3) {
      return this.Mo.activeTargetIds.has(e3);
    }
    clearQueryState(e3) {
      delete this.xo[e3];
    }
    getAllActiveQueryTargets() {
      return this.Mo.activeTargetIds;
    }
    isActiveQueryTarget(e3) {
      return this.Mo.activeTargetIds.has(e3);
    }
    start() {
      return this.Mo = new __PRIVATE_LocalClientState(), Promise.resolve();
    }
    handleUserChange(e3, t3, n2) {
    }
    setOnlineState(e3) {
    }
    shutdown() {
    }
    writeSequenceNumber(e3) {
    }
    notifyBundleLoaded(e3) {
    }
  };
  var __PRIVATE_NoopConnectivityMonitor = class {
    Oo(e3) {
    }
    shutdown() {
    }
  };
  var Jt = "ConnectivityMonitor";
  var __PRIVATE_BrowserConnectivityMonitor = class {
    constructor() {
      this.No = () => this.Bo(), this.Lo = () => this.ko(), this.qo = [], this.Qo();
    }
    Oo(e3) {
      this.qo.push(e3);
    }
    shutdown() {
      window.removeEventListener("online", this.No), window.removeEventListener("offline", this.Lo);
    }
    Qo() {
      window.addEventListener("online", this.No), window.addEventListener("offline", this.Lo);
    }
    Bo() {
      __PRIVATE_logDebug(Jt, "Network connectivity changed: AVAILABLE");
      for (const e3 of this.qo) e3(
        0
        /* NetworkStatus.AVAILABLE */
      );
    }
    ko() {
      __PRIVATE_logDebug(Jt, "Network connectivity changed: UNAVAILABLE");
      for (const e3 of this.qo) e3(
        1
        /* NetworkStatus.UNAVAILABLE */
      );
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static v() {
      return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }
  };
  var Ht = null;
  function __PRIVATE_generateUniqueDebugId() {
    return null === Ht ? Ht = (function __PRIVATE_generateInitialUniqueDebugId() {
      return 268435456 + Math.round(2147483648 * Math.random());
    })() : Ht++, "0x" + Ht.toString(16);
  }
  var Yt = "RestConnection";
  var Zt = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
  };
  var __PRIVATE_RestConnection = class {
    get $o() {
      return false;
    }
    constructor(e3) {
      this.databaseInfo = e3, this.databaseId = e3.databaseId;
      const t3 = e3.ssl ? "https" : "http", n2 = encodeURIComponent(this.databaseId.projectId), r3 = encodeURIComponent(this.databaseId.database);
      this.Uo = t3 + "://" + e3.host, this.Ko = `projects/${n2}/databases/${r3}`, this.Wo = this.databaseId.database === lt ? `project_id=${n2}` : `project_id=${n2}&database_id=${r3}`;
    }
    Go(e3, t3, n2, r3, i3) {
      const s3 = __PRIVATE_generateUniqueDebugId(), o3 = this.zo(e3, t3.toUriEncodedString());
      __PRIVATE_logDebug(Yt, `Sending RPC '${e3}' ${s3}:`, o3, n2);
      const _2 = {
        "google-cloud-resource-prefix": this.Ko,
        "x-goog-request-params": this.Wo
      };
      this.jo(_2, r3, i3);
      const { host: a3 } = new URL(o3), u4 = isCloudWorkstation(a3);
      return this.Jo(e3, o3, _2, n2, u4).then(((t4) => (__PRIVATE_logDebug(Yt, `Received RPC '${e3}' ${s3}: `, t4), t4)), ((t4) => {
        throw __PRIVATE_logWarn(Yt, `RPC '${e3}' ${s3} failed with error: `, t4, "url: ", o3, "request:", n2), t4;
      }));
    }
    Ho(e3, t3, n2, r3, i3, s3) {
      return this.Go(e3, t3, n2, r3, i3);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    jo(e3, t3, n2) {
      e3["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
      // so we need to get its value when we need it in a function.
      (function __PRIVATE_getGoogApiClientValue() {
        return "gl-js/ fire/" + x3;
      })(), // Content-Type: text/plain will avoid preflight requests which might
      // mess with CORS and redirects by proxies. If we add custom headers
      // we will need to change this code to potentially use the $httpOverwrite
      // parameter supported by ESF to avoid triggering preflight requests.
      e3["Content-Type"] = "text/plain", this.databaseInfo.appId && (e3["X-Firebase-GMPID"] = this.databaseInfo.appId), t3 && t3.headers.forEach(((t4, n3) => e3[n3] = t4)), n2 && n2.headers.forEach(((t4, n3) => e3[n3] = t4));
    }
    zo(e3, t3) {
      const n2 = Zt[e3];
      return `${this.Uo}/v1/${t3}:${n2}`;
    }
    /**
     * Closes and cleans up any resources associated with the connection. This
     * implementation is a no-op because there are no resources associated
     * with the RestConnection that need to be cleaned up.
     */
    terminate() {
    }
  };
  var __PRIVATE_StreamBridge = class {
    constructor(e3) {
      this.Yo = e3.Yo, this.Zo = e3.Zo;
    }
    Xo(e3) {
      this.e_ = e3;
    }
    t_(e3) {
      this.n_ = e3;
    }
    r_(e3) {
      this.i_ = e3;
    }
    onMessage(e3) {
      this.s_ = e3;
    }
    close() {
      this.Zo();
    }
    send(e3) {
      this.Yo(e3);
    }
    o_() {
      this.e_();
    }
    __() {
      this.n_();
    }
    a_(e3) {
      this.i_(e3);
    }
    u_(e3) {
      this.s_(e3);
    }
  };
  var Xt = "WebChannelConnection";
  var __PRIVATE_WebChannelConnection = class extends __PRIVATE_RestConnection {
    constructor(e3) {
      super(e3), /** A collection of open WebChannel instances */
      this.c_ = [], this.forceLongPolling = e3.forceLongPolling, this.autoDetectLongPolling = e3.autoDetectLongPolling, this.useFetchStreams = e3.useFetchStreams, this.longPollingOptions = e3.longPollingOptions;
    }
    Jo(e3, t3, n2, r3, i3) {
      const s3 = __PRIVATE_generateUniqueDebugId();
      return new Promise(((i4, o3) => {
        const _2 = new XhrIo();
        _2.setWithCredentials(true), _2.listenOnce(EventType.COMPLETE, (() => {
          try {
            switch (_2.getLastErrorCode()) {
              case ErrorCode.NO_ERROR:
                const t4 = _2.getResponseJson();
                __PRIVATE_logDebug(Xt, `XHR for RPC '${e3}' ${s3} received:`, JSON.stringify(t4)), i4(t4);
                break;
              case ErrorCode.TIMEOUT:
                __PRIVATE_logDebug(Xt, `RPC '${e3}' ${s3} timed out`), o3(new FirestoreError(N2.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case ErrorCode.HTTP_ERROR:
                const n3 = _2.getStatus();
                if (__PRIVATE_logDebug(Xt, `RPC '${e3}' ${s3} failed with status:`, n3, "response text:", _2.getResponseText()), n3 > 0) {
                  let e4 = _2.getResponseJson();
                  Array.isArray(e4) && (e4 = e4[0]);
                  const t5 = e4?.error;
                  if (t5 && t5.status && t5.message) {
                    const e5 = (function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e6) {
                      const t6 = e6.toLowerCase().replace(/_/g, "-");
                      return Object.values(N2).indexOf(t6) >= 0 ? t6 : N2.UNKNOWN;
                    })(t5.status);
                    o3(new FirestoreError(e5, t5.message));
                  } else o3(new FirestoreError(N2.UNKNOWN, "Server responded with status " + _2.getStatus()));
                } else
                  o3(new FirestoreError(N2.UNAVAILABLE, "Connection failed."));
                break;
              default:
                fail(9055, {
                  l_: e3,
                  streamId: s3,
                  h_: _2.getLastErrorCode(),
                  P_: _2.getLastError()
                });
            }
          } finally {
            __PRIVATE_logDebug(Xt, `RPC '${e3}' ${s3} completed.`);
          }
        }));
        const a3 = JSON.stringify(r3);
        __PRIVATE_logDebug(Xt, `RPC '${e3}' ${s3} sending request:`, r3), _2.send(t3, "POST", a3, n2, 15);
      }));
    }
    T_(e3, t3, n2) {
      const r3 = __PRIVATE_generateUniqueDebugId(), i3 = [this.Uo, "/", "google.firestore.v1.Firestore", "/", e3, "/channel"], s3 = createWebChannelTransport(), o3 = getStatEventTarget(), _2 = {
        // Required for backend stickiness, routing behavior is based on this
        // parameter.
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          // This param is used to improve routing and project isolation by the
          // backend and must be included in every request.
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
        },
        sendRawJson: true,
        supportsCrossDomainXhr: true,
        internalChannelParams: {
          // Override the default timeout (randomized between 10-20 seconds) since
          // a large write batch on a slow internet connection may take a long
          // time to send to the backend. Rather than have WebChannel impose a
          // tight timeout which could lead to infinite timeouts and retries, we
          // set it very large (5-10 minutes) and rely on the browser's builtin
          // timeouts to kick in if the request isn't working.
          forwardChannelRequestTimeoutMs: 6e5
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling
      }, a3 = this.longPollingOptions.timeoutSeconds;
      void 0 !== a3 && (_2.longPollingTimeout = Math.round(1e3 * a3)), this.useFetchStreams && (_2.useFetchStreams = true), this.jo(_2.initMessageHeaders, t3, n2), // Sending the custom headers we just added to request.initMessageHeaders
      // (Authorization, etc.) will trigger the browser to make a CORS preflight
      // request because the XHR will no longer meet the criteria for a "simple"
      // CORS request:
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
      // Therefore to avoid the CORS preflight request (an extra network
      // roundtrip), we use the encodeInitMessageHeaders option to specify that
      // the headers should instead be encoded in the request's POST payload,
      // which is recognized by the webchannel backend.
      _2.encodeInitMessageHeaders = true;
      const u4 = i3.join("");
      __PRIVATE_logDebug(Xt, `Creating RPC '${e3}' stream ${r3}: ${u4}`, _2);
      const c3 = s3.createWebChannel(u4, _2);
      this.I_(c3);
      let l3 = false, h3 = false;
      const P2 = new __PRIVATE_StreamBridge({
        Yo: (t4) => {
          h3 ? __PRIVATE_logDebug(Xt, `Not sending because RPC '${e3}' stream ${r3} is closed:`, t4) : (l3 || (__PRIVATE_logDebug(Xt, `Opening RPC '${e3}' stream ${r3} transport.`), c3.open(), l3 = true), __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} sending:`, t4), c3.send(t4));
        },
        Zo: () => c3.close()
      }), __PRIVATE_unguardedEventListen = (e4, t4, n3) => {
        e4.listen(t4, ((e5) => {
          try {
            n3(e5);
          } catch (e6) {
            setTimeout((() => {
              throw e6;
            }), 0);
          }
        }));
      };
      return __PRIVATE_unguardedEventListen(c3, WebChannel.EventType.OPEN, (() => {
        h3 || (__PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} transport opened.`), P2.o_());
      })), __PRIVATE_unguardedEventListen(c3, WebChannel.EventType.CLOSE, (() => {
        h3 || (h3 = true, __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} transport closed`), P2.a_(), this.E_(c3));
      })), __PRIVATE_unguardedEventListen(c3, WebChannel.EventType.ERROR, ((t4) => {
        h3 || (h3 = true, __PRIVATE_logWarn(Xt, `RPC '${e3}' stream ${r3} transport errored. Name:`, t4.name, "Message:", t4.message), P2.a_(new FirestoreError(N2.UNAVAILABLE, "The operation could not be completed")));
      })), __PRIVATE_unguardedEventListen(c3, WebChannel.EventType.MESSAGE, ((t4) => {
        if (!h3) {
          const n3 = t4.data[0];
          __PRIVATE_hardAssert(!!n3, 16349);
          const i4 = n3, s4 = i4?.error || i4[0]?.error;
          if (s4) {
            __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} received error:`, s4);
            const t5 = s4.status;
            let n4 = (
              /**
              * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
              *
              * @returns The Code equivalent to the given status string or undefined if
              *     there is no match.
              */
              (function __PRIVATE_mapCodeFromRpcStatus(e4) {
                const t6 = pt[e4];
                if (void 0 !== t6) return __PRIVATE_mapCodeFromRpcCode(t6);
              })(t5)
            ), i5 = s4.message;
            void 0 === n4 && (n4 = N2.INTERNAL, i5 = "Unknown error status: " + t5 + " with message " + s4.message), // Mark closed so no further events are propagated
            h3 = true, P2.a_(new FirestoreError(n4, i5)), c3.close();
          } else __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} received:`, n3), P2.u_(n3);
        }
      })), __PRIVATE_unguardedEventListen(o3, Event.STAT_EVENT, ((t4) => {
        t4.stat === Stat.PROXY ? __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} detected buffering proxy`) : t4.stat === Stat.NOPROXY && __PRIVATE_logDebug(Xt, `RPC '${e3}' stream ${r3} detected no buffering proxy`);
      })), setTimeout((() => {
        P2.__();
      }), 0), P2;
    }
    /**
     * Closes and cleans up any resources associated with the connection.
     */
    terminate() {
      this.c_.forEach(((e3) => e3.close())), this.c_ = [];
    }
    /**
     * Add a WebChannel instance to the collection of open instances.
     * @param webChannel
     */
    I_(e3) {
      this.c_.push(e3);
    }
    /**
     * Remove a WebChannel instance from the collection of open instances.
     * @param webChannel
     */
    E_(e3) {
      this.c_ = this.c_.filter(((t3) => t3 === e3));
    }
  };
  function getDocument() {
    return "undefined" != typeof document ? document : null;
  }
  function __PRIVATE_newSerializer(e3) {
    return new JsonProtoSerializer(
      e3,
      /* useProto3Json= */
      true
    );
  }
  var __PRIVATE_ExponentialBackoff = class {
    constructor(e3, t3, n2 = 1e3, r3 = 1.5, i3 = 6e4) {
      this.Mi = e3, this.timerId = t3, this.d_ = n2, this.A_ = r3, this.R_ = i3, this.V_ = 0, this.m_ = null, /** The last backoff attempt, as epoch milliseconds. */
      this.f_ = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */
    reset() {
      this.V_ = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    g_() {
      this.V_ = this.R_;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    p_(e3) {
      this.cancel();
      const t3 = Math.floor(this.V_ + this.y_()), n2 = Math.max(0, Date.now() - this.f_), r3 = Math.max(0, t3 - n2);
      r3 > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r3} ms (base delay: ${this.V_} ms, delay with jitter: ${t3} ms, last attempt: ${n2} ms ago)`), this.m_ = this.Mi.enqueueAfterDelay(this.timerId, r3, (() => (this.f_ = Date.now(), e3()))), // Apply backoff factor to determine next delay and ensure it is within
      // bounds.
      this.V_ *= this.A_, this.V_ < this.d_ && (this.V_ = this.d_), this.V_ > this.R_ && (this.V_ = this.R_);
    }
    w_() {
      null !== this.m_ && (this.m_.skipDelay(), this.m_ = null);
    }
    cancel() {
      null !== this.m_ && (this.m_.cancel(), this.m_ = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    y_() {
      return (Math.random() - 0.5) * this.V_;
    }
  };
  var en = "PersistentStream";
  var __PRIVATE_PersistentStream = class {
    constructor(e3, t3, n2, r3, i3, s3, o3, _2) {
      this.Mi = e3, this.S_ = n2, this.b_ = r3, this.connection = i3, this.authCredentialsProvider = s3, this.appCheckCredentialsProvider = o3, this.listener = _2, this.state = 0, /**
       * A close count that's incremented every time the stream is closed; used by
       * getCloseGuardedDispatcher() to invalidate callbacks that happen after
       * close.
       */
      this.D_ = 0, this.C_ = null, this.v_ = null, this.stream = null, /**
       * Count of response messages received.
       */
      this.F_ = 0, this.M_ = new __PRIVATE_ExponentialBackoff(e3, t3);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */
    x_() {
      return 1 === this.state || 5 === this.state || this.O_();
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    O_() {
      return 2 === this.state || 3 === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    start() {
      this.F_ = 0, 4 !== this.state ? this.auth() : this.N_();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    async stop() {
      this.x_() && await this.close(
        0
        /* PersistentStreamState.Initial */
      );
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    B_() {
      this.state = 0, this.M_.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    L_() {
      this.O_() && null === this.C_ && (this.C_ = this.Mi.enqueueAfterDelay(this.S_, 6e4, (() => this.k_())));
    }
    /** Sends a message to the underlying stream. */
    q_(e3) {
      this.Q_(), this.stream.send(e3);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */
    async k_() {
      if (this.O_())
        return this.close(
          0
          /* PersistentStreamState.Initial */
        );
    }
    /** Marks the stream as active again. */
    Q_() {
      this.C_ && (this.C_.cancel(), this.C_ = null);
    }
    /** Cancels the health check delayed operation. */
    U_() {
      this.v_ && (this.v_.cancel(), this.v_ = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    async close(e3, t3) {
      this.Q_(), this.U_(), this.M_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
      // underlying stream), guaranteeing they won't execute.
      this.D_++, 4 !== e3 ? (
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.M_.reset()
      ) : t3 && t3.code === N2.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        (__PRIVATE_logError(t3.toString()), __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."), this.M_.g_())
      ) : t3 && t3.code === N2.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
      // happen since both Auth and AppCheck ensure a sufficient TTL when we
      // request a token. If a user manually resets their system clock this can
      // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
      // before we received the first message and we need to invalidate the token
      // to ensure that we fetch a new token.
      (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
      null !== this.stream && (this.K_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
      // inhibit backoff or otherwise manipulate the state in its non-started state.
      this.state = e3, // Notify the listener that the stream closed.
      await this.listener.r_(t3);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    K_() {
    }
    auth() {
      this.state = 1;
      const e3 = this.W_(this.D_), t3 = this.D_;
      Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((([e4, n2]) => {
        this.D_ === t3 && // Normally we'd have to schedule the callback on the AsyncQueue.
        // However, the following calls are safe to be called outside the
        // AsyncQueue since they don't chain asynchronous calls
        this.G_(e4, n2);
      }), ((t4) => {
        e3((() => {
          const e4 = new FirestoreError(N2.UNKNOWN, "Fetching auth token failed: " + t4.message);
          return this.z_(e4);
        }));
      }));
    }
    G_(e3, t3) {
      const n2 = this.W_(this.D_);
      this.stream = this.j_(e3, t3), this.stream.Xo((() => {
        n2((() => this.listener.Xo()));
      })), this.stream.t_((() => {
        n2((() => (this.state = 2, this.v_ = this.Mi.enqueueAfterDelay(this.b_, 1e4, (() => (this.O_() && (this.state = 3), Promise.resolve()))), this.listener.t_())));
      })), this.stream.r_(((e4) => {
        n2((() => this.z_(e4)));
      })), this.stream.onMessage(((e4) => {
        n2((() => 1 == ++this.F_ ? this.J_(e4) : this.onNext(e4)));
      }));
    }
    N_() {
      this.state = 5, this.M_.p_((async () => {
        this.state = 0, this.start();
      }));
    }
    // Visible for tests
    z_(e3) {
      return __PRIVATE_logDebug(en, `close with error: ${e3}`), this.stream = null, this.close(4, e3);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    W_(e3) {
      return (t3) => {
        this.Mi.enqueueAndForget((() => this.D_ === e3 ? t3() : (__PRIVATE_logDebug(en, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())));
      };
    }
  };
  var __PRIVATE_PersistentListenStream = class extends __PRIVATE_PersistentStream {
    constructor(e3, t3, n2, r3, i3, s3) {
      super(e3, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t3, n2, r3, s3), this.serializer = i3;
    }
    j_(e3, t3) {
      return this.connection.T_("Listen", e3, t3);
    }
    J_(e3) {
      return this.onNext(e3);
    }
    onNext(e3) {
      this.M_.reset();
      const t3 = __PRIVATE_fromWatchChange(this.serializer, e3), n2 = (function __PRIVATE_versionFromListenResponse(e4) {
        if (!("targetChange" in e4)) return SnapshotVersion.min();
        const t4 = e4.targetChange;
        return t4.targetIds && t4.targetIds.length ? SnapshotVersion.min() : t4.readTime ? __PRIVATE_fromVersion(t4.readTime) : SnapshotVersion.min();
      })(e3);
      return this.listener.H_(t3, n2);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    Y_(e3) {
      const t3 = {};
      t3.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t3.addTarget = (function __PRIVATE_toTarget(e4, t4) {
        let n3;
        const r3 = t4.target;
        if (n3 = __PRIVATE_targetIsDocumentTarget(r3) ? {
          documents: __PRIVATE_toDocumentsTarget(e4, r3)
        } : {
          query: __PRIVATE_toQueryTarget(e4, r3).ft
        }, n3.targetId = t4.targetId, t4.resumeToken.approximateByteSize() > 0) {
          n3.resumeToken = __PRIVATE_toBytes(e4, t4.resumeToken);
          const r4 = __PRIVATE_toInt32Proto(e4, t4.expectedCount);
          null !== r4 && (n3.expectedCount = r4);
        } else if (t4.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
          n3.readTime = toTimestamp(e4, t4.snapshotVersion.toTimestamp());
          const r4 = __PRIVATE_toInt32Proto(e4, t4.expectedCount);
          null !== r4 && (n3.expectedCount = r4);
        }
        return n3;
      })(this.serializer, e3);
      const n2 = __PRIVATE_toListenRequestLabels(this.serializer, e3);
      n2 && (t3.labels = n2), this.q_(t3);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    Z_(e3) {
      const t3 = {};
      t3.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t3.removeTarget = e3, this.q_(t3);
    }
  };
  var __PRIVATE_PersistentWriteStream = class extends __PRIVATE_PersistentStream {
    constructor(e3, t3, n2, r3, i3, s3) {
      super(e3, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t3, n2, r3, s3), this.serializer = i3;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */
    get X_() {
      return this.F_ > 0;
    }
    // Override of PersistentStream.start
    start() {
      this.lastStreamToken = void 0, super.start();
    }
    K_() {
      this.X_ && this.ea([]);
    }
    j_(e3, t3) {
      return this.connection.T_("Write", e3, t3);
    }
    J_(e3) {
      return __PRIVATE_hardAssert(!!e3.streamToken, 31322), this.lastStreamToken = e3.streamToken, // The first response is always the handshake response
      __PRIVATE_hardAssert(!e3.writeResults || 0 === e3.writeResults.length, 55816), this.listener.ta();
    }
    onNext(e3) {
      __PRIVATE_hardAssert(!!e3.streamToken, 12678), this.lastStreamToken = e3.streamToken, // A successful first write response means the stream is healthy,
      // Note, that we could consider a successful handshake healthy, however,
      // the write itself might be causing an error we want to back off from.
      this.M_.reset();
      const t3 = __PRIVATE_fromWriteResults(e3.writeResults, e3.commitTime), n2 = __PRIVATE_fromVersion(e3.commitTime);
      return this.listener.na(n2, t3);
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    ra() {
      const e3 = {};
      e3.database = __PRIVATE_getEncodedDatabaseId(this.serializer), this.q_(e3);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */
    ea(e3) {
      const t3 = {
        streamToken: this.lastStreamToken,
        writes: e3.map(((e4) => toMutation(this.serializer, e4)))
      };
      this.q_(t3);
    }
  };
  var Datastore = class {
  };
  var __PRIVATE_DatastoreImpl = class extends Datastore {
    constructor(e3, t3, n2, r3) {
      super(), this.authCredentials = e3, this.appCheckCredentials = t3, this.connection = n2, this.serializer = r3, this.ia = false;
    }
    sa() {
      if (this.ia) throw new FirestoreError(N2.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Invokes the provided RPC with auth and AppCheck tokens. */
    Go(e3, t3, n2, r3) {
      return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([i3, s3]) => this.connection.Go(e3, __PRIVATE_toResourcePath(t3, n2), r3, i3, s3))).catch(((e4) => {
        throw "FirebaseError" === e4.name ? (e4.code === N2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e4) : new FirestoreError(N2.UNKNOWN, e4.toString());
      }));
    }
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
    Ho(e3, t3, n2, r3, i3) {
      return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([s3, o3]) => this.connection.Ho(e3, __PRIVATE_toResourcePath(t3, n2), r3, s3, o3, i3))).catch(((e4) => {
        throw "FirebaseError" === e4.name ? (e4.code === N2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e4) : new FirestoreError(N2.UNKNOWN, e4.toString());
      }));
    }
    terminate() {
      this.ia = true, this.connection.terminate();
    }
  };
  var __PRIVATE_OnlineStateTracker = class {
    constructor(e3, t3) {
      this.asyncQueue = e3, this.onlineStateHandler = t3, /** The current OnlineState. */
      this.state = "Unknown", /**
       * A count of consecutive failures to open the stream. If it reaches the
       * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
       * Offline.
       */
      this.oa = 0, /**
       * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
       * transition from OnlineState.Unknown to OnlineState.Offline without waiting
       * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
       */
      this._a = null, /**
       * Whether the client should log a warning message if it fails to connect to
       * the backend (initially true, cleared after a successful stream, or if we've
       * logged the message already).
       */
      this.aa = true;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */
    ua() {
      0 === this.oa && (this.ca(
        "Unknown"
        /* OnlineState.Unknown */
      ), this._a = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this._a = null, this.la("Backend didn't respond within 10 seconds."), this.ca(
        "Offline"
        /* OnlineState.Offline */
      ), Promise.resolve()))));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    ha(e3) {
      "Online" === this.state ? this.ca(
        "Unknown"
        /* OnlineState.Unknown */
      ) : (this.oa++, this.oa >= 1 && (this.Pa(), this.la(`Connection failed 1 times. Most recent error: ${e3.toString()}`), this.ca(
        "Offline"
        /* OnlineState.Offline */
      )));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    set(e3) {
      this.Pa(), this.oa = 0, "Online" === e3 && // We've connected to watch at least once. Don't warn the developer
      // about being offline going forward.
      (this.aa = false), this.ca(e3);
    }
    ca(e3) {
      e3 !== this.state && (this.state = e3, this.onlineStateHandler(e3));
    }
    la(e3) {
      const t3 = `Could not reach Cloud Firestore backend. ${e3}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.aa ? (__PRIVATE_logError(t3), this.aa = false) : __PRIVATE_logDebug("OnlineStateTracker", t3);
    }
    Pa() {
      null !== this._a && (this._a.cancel(), this._a = null);
    }
  };
  var tn = "RemoteStore";
  var __PRIVATE_RemoteStoreImpl = class {
    constructor(e3, t3, n2, r3, i3) {
      this.localStore = e3, this.datastore = t3, this.asyncQueue = n2, this.remoteSyncer = {}, /**
       * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
       * LocalStore via fillWritePipeline() and have or will send to the write
       * stream.
       *
       * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
       * restart the write stream. When the stream is established the writes in the
       * pipeline will be sent in order.
       *
       * Writes remain in writePipeline until they are acknowledged by the backend
       * and thus will automatically be re-sent if the stream is interrupted /
       * restarted before they're acknowledged.
       *
       * Write responses from the backend are linked to their originating request
       * purely based on order, and so we can just shift() writes from the front of
       * the writePipeline as we receive responses.
       */
      this.Ta = [], /**
       * A mapping of watched targets that the client cares about tracking and the
       * user has explicitly called a 'listen' for this target.
       *
       * These targets may or may not have been sent to or acknowledged by the
       * server. On re-establishing the listen stream, these targets should be sent
       * to the server. The targets removed with unlistens are removed eagerly
       * without waiting for confirmation from the listen stream.
       */
      this.Ia = /* @__PURE__ */ new Map(), /**
       * A set of reasons for why the RemoteStore may be offline. If empty, the
       * RemoteStore may start its network connections.
       */
      this.Ea = /* @__PURE__ */ new Set(), /**
       * Event handlers that get called when the network is disabled or enabled.
       *
       * PORTING NOTE: These functions are used on the Web client to create the
       * underlying streams (to support tree-shakeable streams). On Android and iOS,
       * the streams are created during construction of RemoteStore.
       */
      this.da = [], this.Aa = i3, this.Aa.Oo(((e4) => {
        n2.enqueueAndForget((async () => {
          __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug(tn, "Restarting streams for network reachability change."), await (async function __PRIVATE_restartNetwork(e5) {
            const t4 = __PRIVATE_debugCast(e5);
            t4.Ea.add(
              4
              /* OfflineCause.ConnectivityChange */
            ), await __PRIVATE_disableNetworkInternal(t4), t4.Ra.set(
              "Unknown"
              /* OnlineState.Unknown */
            ), t4.Ea.delete(
              4
              /* OfflineCause.ConnectivityChange */
            ), await __PRIVATE_enableNetworkInternal(t4);
          })(this));
        }));
      })), this.Ra = new __PRIVATE_OnlineStateTracker(n2, r3);
    }
  };
  async function __PRIVATE_enableNetworkInternal(e3) {
    if (__PRIVATE_canUseNetwork(e3)) for (const t3 of e3.da) await t3(
      /* enabled= */
      true
    );
  }
  async function __PRIVATE_disableNetworkInternal(e3) {
    for (const t3 of e3.da) await t3(
      /* enabled= */
      false
    );
  }
  function __PRIVATE_remoteStoreListen(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    n2.Ia.has(t3.targetId) || // Mark this as something the client is currently listening for.
    (n2.Ia.set(t3.targetId, t3), __PRIVATE_shouldStartWatchStream(n2) ? (
      // The listen will be sent in onWatchStreamOpen
      __PRIVATE_startWatchStream(n2)
    ) : __PRIVATE_ensureWatchStream(n2).O_() && __PRIVATE_sendWatchRequest(n2, t3));
  }
  function __PRIVATE_remoteStoreUnlisten(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = __PRIVATE_ensureWatchStream(n2);
    n2.Ia.delete(t3), r3.O_() && __PRIVATE_sendUnwatchRequest(n2, t3), 0 === n2.Ia.size && (r3.O_() ? r3.L_() : __PRIVATE_canUseNetwork(n2) && // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n2.Ra.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  }
  function __PRIVATE_sendWatchRequest(e3, t3) {
    if (e3.Va.Ue(t3.targetId), t3.resumeToken.approximateByteSize() > 0 || t3.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
      const n2 = e3.remoteSyncer.getRemoteKeysForTarget(t3.targetId).size;
      t3 = t3.withExpectedCount(n2);
    }
    __PRIVATE_ensureWatchStream(e3).Y_(t3);
  }
  function __PRIVATE_sendUnwatchRequest(e3, t3) {
    e3.Va.Ue(t3), __PRIVATE_ensureWatchStream(e3).Z_(t3);
  }
  function __PRIVATE_startWatchStream(e3) {
    e3.Va = new __PRIVATE_WatchChangeAggregator({
      getRemoteKeysForTarget: (t3) => e3.remoteSyncer.getRemoteKeysForTarget(t3),
      At: (t3) => e3.Ia.get(t3) || null,
      ht: () => e3.datastore.serializer.databaseId
    }), __PRIVATE_ensureWatchStream(e3).start(), e3.Ra.ua();
  }
  function __PRIVATE_shouldStartWatchStream(e3) {
    return __PRIVATE_canUseNetwork(e3) && !__PRIVATE_ensureWatchStream(e3).x_() && e3.Ia.size > 0;
  }
  function __PRIVATE_canUseNetwork(e3) {
    return 0 === __PRIVATE_debugCast(e3).Ea.size;
  }
  function __PRIVATE_cleanUpWatchStreamState(e3) {
    e3.Va = void 0;
  }
  async function __PRIVATE_onWatchStreamConnected(e3) {
    e3.Ra.set(
      "Online"
      /* OnlineState.Online */
    );
  }
  async function __PRIVATE_onWatchStreamOpen(e3) {
    e3.Ia.forEach(((t3, n2) => {
      __PRIVATE_sendWatchRequest(e3, t3);
    }));
  }
  async function __PRIVATE_onWatchStreamClose(e3, t3) {
    __PRIVATE_cleanUpWatchStreamState(e3), // If we still need the watch stream, retry the connection.
    __PRIVATE_shouldStartWatchStream(e3) ? (e3.Ra.ha(t3), __PRIVATE_startWatchStream(e3)) : (
      // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      e3.Ra.set(
        "Unknown"
        /* OnlineState.Unknown */
      )
    );
  }
  async function __PRIVATE_onWatchStreamChange(e3, t3, n2) {
    if (
      // Mark the client as online since we got a message from the server
      e3.Ra.set(
        "Online"
        /* OnlineState.Online */
      ), t3 instanceof __PRIVATE_WatchTargetChange && 2 === t3.state && t3.cause
    )
      try {
        await (async function __PRIVATE_handleTargetError(e4, t4) {
          const n3 = t4.cause;
          for (const r3 of t4.targetIds)
            e4.Ia.has(r3) && (await e4.remoteSyncer.rejectListen(r3, n3), e4.Ia.delete(r3), e4.Va.removeTarget(r3));
        })(e3, t3);
      } catch (n3) {
        __PRIVATE_logDebug(tn, "Failed to remove targets %s: %s ", t3.targetIds.join(","), n3), await __PRIVATE_disableNetworkUntilRecovery(e3, n3);
      }
    else if (t3 instanceof __PRIVATE_DocumentWatchChange ? e3.Va.Ze(t3) : t3 instanceof __PRIVATE_ExistenceFilterChange ? e3.Va.st(t3) : e3.Va.tt(t3), !n2.isEqual(SnapshotVersion.min())) try {
      const t4 = await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e3.localStore);
      n2.compareTo(t4) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      /**
      * Takes a batch of changes from the Datastore, repackages them as a
      * RemoteEvent, and passes that on to the listener, which is typically the
      * SyncEngine.
      */
      await (function __PRIVATE_raiseWatchSnapshot(e4, t5) {
        const n3 = e4.Va.Tt(t5);
        return n3.targetChanges.forEach(((n4, r3) => {
          if (n4.resumeToken.approximateByteSize() > 0) {
            const i3 = e4.Ia.get(r3);
            i3 && e4.Ia.set(r3, i3.withResumeToken(n4.resumeToken, t5));
          }
        })), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n3.targetMismatches.forEach(((t6, n4) => {
          const r3 = e4.Ia.get(t6);
          if (!r3)
            return;
          e4.Ia.set(t6, r3.withResumeToken(ByteString.EMPTY_BYTE_STRING, r3.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
          // deliberately don't send a resume token so that we get a full update.
          __PRIVATE_sendUnwatchRequest(e4, t6);
          const i3 = new TargetData(r3.target, t6, n4, r3.sequenceNumber);
          __PRIVATE_sendWatchRequest(e4, i3);
        })), e4.remoteSyncer.applyRemoteEvent(n3);
      })(e3, n2);
    } catch (t4) {
      __PRIVATE_logDebug(tn, "Failed to raise snapshot:", t4), await __PRIVATE_disableNetworkUntilRecovery(e3, t4);
    }
  }
  async function __PRIVATE_disableNetworkUntilRecovery(e3, t3, n2) {
    if (!__PRIVATE_isIndexedDbTransactionError(t3)) throw t3;
    e3.Ea.add(
      1
      /* OfflineCause.IndexedDbFailed */
    ), // Disable network and raise offline snapshots
    await __PRIVATE_disableNetworkInternal(e3), e3.Ra.set(
      "Offline"
      /* OnlineState.Offline */
    ), n2 || // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    (n2 = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e3.localStore)), // Probe IndexedDB periodically and re-enable network
    e3.asyncQueue.enqueueRetryable((async () => {
      __PRIVATE_logDebug(tn, "Retrying IndexedDB access"), await n2(), e3.Ea.delete(
        1
        /* OfflineCause.IndexedDbFailed */
      ), await __PRIVATE_enableNetworkInternal(e3);
    }));
  }
  function __PRIVATE_executeWithRecovery(e3, t3) {
    return t3().catch(((n2) => __PRIVATE_disableNetworkUntilRecovery(e3, n2, t3)));
  }
  async function __PRIVATE_fillWritePipeline(e3) {
    const t3 = __PRIVATE_debugCast(e3), n2 = __PRIVATE_ensureWriteStream(t3);
    let r3 = t3.Ta.length > 0 ? t3.Ta[t3.Ta.length - 1].batchId : j3;
    for (; __PRIVATE_canAddToWritePipeline(t3); ) try {
      const e4 = await __PRIVATE_localStoreGetNextMutationBatch(t3.localStore, r3);
      if (null === e4) {
        0 === t3.Ta.length && n2.L_();
        break;
      }
      r3 = e4.batchId, __PRIVATE_addToWritePipeline(t3, e4);
    } catch (e4) {
      await __PRIVATE_disableNetworkUntilRecovery(t3, e4);
    }
    __PRIVATE_shouldStartWriteStream(t3) && __PRIVATE_startWriteStream(t3);
  }
  function __PRIVATE_canAddToWritePipeline(e3) {
    return __PRIVATE_canUseNetwork(e3) && e3.Ta.length < 10;
  }
  function __PRIVATE_addToWritePipeline(e3, t3) {
    e3.Ta.push(t3);
    const n2 = __PRIVATE_ensureWriteStream(e3);
    n2.O_() && n2.X_ && n2.ea(t3.mutations);
  }
  function __PRIVATE_shouldStartWriteStream(e3) {
    return __PRIVATE_canUseNetwork(e3) && !__PRIVATE_ensureWriteStream(e3).x_() && e3.Ta.length > 0;
  }
  function __PRIVATE_startWriteStream(e3) {
    __PRIVATE_ensureWriteStream(e3).start();
  }
  async function __PRIVATE_onWriteStreamOpen(e3) {
    __PRIVATE_ensureWriteStream(e3).ra();
  }
  async function __PRIVATE_onWriteHandshakeComplete(e3) {
    const t3 = __PRIVATE_ensureWriteStream(e3);
    for (const n2 of e3.Ta) t3.ea(n2.mutations);
  }
  async function __PRIVATE_onMutationResult(e3, t3, n2) {
    const r3 = e3.Ta.shift(), i3 = MutationBatchResult.from(r3, t3, n2);
    await __PRIVATE_executeWithRecovery(e3, (() => e3.remoteSyncer.applySuccessfulWrite(i3))), // It's possible that with the completion of this mutation another
    // slot has freed up.
    await __PRIVATE_fillWritePipeline(e3);
  }
  async function __PRIVATE_onWriteStreamClose(e3, t3) {
    t3 && __PRIVATE_ensureWriteStream(e3).X_ && // This error affects the actual write.
    await (async function __PRIVATE_handleWriteError(e4, t4) {
      if ((function __PRIVATE_isPermanentWriteError(e5) {
        return __PRIVATE_isPermanentError(e5) && e5 !== N2.ABORTED;
      })(t4.code)) {
        const n2 = e4.Ta.shift();
        __PRIVATE_ensureWriteStream(e4).B_(), await __PRIVATE_executeWithRecovery(e4, (() => e4.remoteSyncer.rejectFailedWrite(n2.batchId, t4))), // It's possible that with the completion of this mutation
        // another slot has freed up.
        await __PRIVATE_fillWritePipeline(e4);
      }
    })(e3, t3), // The write stream might have been started by refilling the write
    // pipeline for failed writes
    __PRIVATE_shouldStartWriteStream(e3) && __PRIVATE_startWriteStream(e3);
  }
  async function __PRIVATE_remoteStoreHandleCredentialChange(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    n2.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug(tn, "RemoteStore received new credentials");
    const r3 = __PRIVATE_canUseNetwork(n2);
    n2.Ea.add(
      3
      /* OfflineCause.CredentialChange */
    ), await __PRIVATE_disableNetworkInternal(n2), r3 && // Don't set the network status to Unknown if we are offline.
    n2.Ra.set(
      "Unknown"
      /* OnlineState.Unknown */
    ), await n2.remoteSyncer.handleCredentialChange(t3), n2.Ea.delete(
      3
      /* OfflineCause.CredentialChange */
    ), await __PRIVATE_enableNetworkInternal(n2);
  }
  async function __PRIVATE_remoteStoreApplyPrimaryState(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    t3 ? (n2.Ea.delete(
      2
      /* OfflineCause.IsSecondary */
    ), await __PRIVATE_enableNetworkInternal(n2)) : t3 || (n2.Ea.add(
      2
      /* OfflineCause.IsSecondary */
    ), await __PRIVATE_disableNetworkInternal(n2), n2.Ra.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  }
  function __PRIVATE_ensureWatchStream(e3) {
    return e3.ma || // Create stream (but note that it is not started yet).
    (e3.ma = (function __PRIVATE_newPersistentWatchStream(e4, t3, n2) {
      const r3 = __PRIVATE_debugCast(e4);
      return r3.sa(), new __PRIVATE_PersistentListenStream(t3, r3.connection, r3.authCredentials, r3.appCheckCredentials, r3.serializer, n2);
    })(e3.datastore, e3.asyncQueue, {
      Xo: __PRIVATE_onWatchStreamConnected.bind(null, e3),
      t_: __PRIVATE_onWatchStreamOpen.bind(null, e3),
      r_: __PRIVATE_onWatchStreamClose.bind(null, e3),
      H_: __PRIVATE_onWatchStreamChange.bind(null, e3)
    }), e3.da.push((async (t3) => {
      t3 ? (e3.ma.B_(), __PRIVATE_shouldStartWatchStream(e3) ? __PRIVATE_startWatchStream(e3) : e3.Ra.set(
        "Unknown"
        /* OnlineState.Unknown */
      )) : (await e3.ma.stop(), __PRIVATE_cleanUpWatchStreamState(e3));
    }))), e3.ma;
  }
  function __PRIVATE_ensureWriteStream(e3) {
    return e3.fa || // Create stream (but note that it is not started yet).
    (e3.fa = (function __PRIVATE_newPersistentWriteStream(e4, t3, n2) {
      const r3 = __PRIVATE_debugCast(e4);
      return r3.sa(), new __PRIVATE_PersistentWriteStream(t3, r3.connection, r3.authCredentials, r3.appCheckCredentials, r3.serializer, n2);
    })(e3.datastore, e3.asyncQueue, {
      Xo: () => Promise.resolve(),
      t_: __PRIVATE_onWriteStreamOpen.bind(null, e3),
      r_: __PRIVATE_onWriteStreamClose.bind(null, e3),
      ta: __PRIVATE_onWriteHandshakeComplete.bind(null, e3),
      na: __PRIVATE_onMutationResult.bind(null, e3)
    }), e3.da.push((async (t3) => {
      t3 ? (e3.fa.B_(), // This will start the write stream if necessary.
      await __PRIVATE_fillWritePipeline(e3)) : (await e3.fa.stop(), e3.Ta.length > 0 && (__PRIVATE_logDebug(tn, `Stopping write stream with ${e3.Ta.length} pending writes`), e3.Ta = []));
    }))), e3.fa;
  }
  var DelayedOperation = class _DelayedOperation {
    constructor(e3, t3, n2, r3, i3) {
      this.asyncQueue = e3, this.timerId = t3, this.targetTimeMs = n2, this.op = r3, this.removalCallback = i3, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
      // and so we attach a dummy catch callback to avoid
      // 'UnhandledPromiseRejectionWarning' log spam.
      this.deferred.promise.catch(((e4) => {
      }));
    }
    get promise() {
      return this.deferred.promise;
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */
    static createAndSchedule(e3, t3, n2, r3, i3) {
      const s3 = Date.now() + n2, o3 = new _DelayedOperation(e3, t3, s3, r3, i3);
      return o3.start(n2), o3;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    start(e3) {
      this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e3);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    skipDelay() {
      return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    cancel(e3) {
      null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(N2.CANCELLED, "Operation cancelled" + (e3 ? ": " + e3 : ""))));
    }
    handleDelayElapsed() {
      this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then(((e3) => this.deferred.resolve(e3)))) : Promise.resolve()));
    }
    clearTimeout() {
      null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
    }
  };
  function __PRIVATE_wrapInUserErrorIfRecoverable(e3, t3) {
    if (__PRIVATE_logError("AsyncQueue", `${t3}: ${e3}`), __PRIVATE_isIndexedDbTransactionError(e3)) return new FirestoreError(N2.UNAVAILABLE, `${t3}: ${e3}`);
    throw e3;
  }
  var DocumentSet = class _DocumentSet {
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */
    static emptySet(e3) {
      return new _DocumentSet(e3.comparator);
    }
    /** The default ordering is by key if the comparator is omitted */
    constructor(e3) {
      this.comparator = e3 ? (t3, n2) => e3(t3, n2) || DocumentKey.comparator(t3.key, n2.key) : (e4, t3) => DocumentKey.comparator(e4.key, t3.key), this.keyedMap = documentMap(), this.sortedSet = new SortedMap(this.comparator);
    }
    has(e3) {
      return null != this.keyedMap.get(e3);
    }
    get(e3) {
      return this.keyedMap.get(e3);
    }
    first() {
      return this.sortedSet.minKey();
    }
    last() {
      return this.sortedSet.maxKey();
    }
    isEmpty() {
      return this.sortedSet.isEmpty();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    indexOf(e3) {
      const t3 = this.keyedMap.get(e3);
      return t3 ? this.sortedSet.indexOf(t3) : -1;
    }
    get size() {
      return this.sortedSet.size;
    }
    /** Iterates documents in order defined by "comparator" */
    forEach(e3) {
      this.sortedSet.inorderTraversal(((t3, n2) => (e3(t3), false)));
    }
    /** Inserts or updates a document with the same key */
    add(e3) {
      const t3 = this.delete(e3.key);
      return t3.copy(t3.keyedMap.insert(e3.key, e3), t3.sortedSet.insert(e3, null));
    }
    /** Deletes a document with a given key */
    delete(e3) {
      const t3 = this.get(e3);
      return t3 ? this.copy(this.keyedMap.remove(e3), this.sortedSet.remove(t3)) : this;
    }
    isEqual(e3) {
      if (!(e3 instanceof _DocumentSet)) return false;
      if (this.size !== e3.size) return false;
      const t3 = this.sortedSet.getIterator(), n2 = e3.sortedSet.getIterator();
      for (; t3.hasNext(); ) {
        const e4 = t3.getNext().key, r3 = n2.getNext().key;
        if (!e4.isEqual(r3)) return false;
      }
      return true;
    }
    toString() {
      const e3 = [];
      return this.forEach(((t3) => {
        e3.push(t3.toString());
      })), 0 === e3.length ? "DocumentSet ()" : "DocumentSet (\n  " + e3.join("  \n") + "\n)";
    }
    copy(e3, t3) {
      const n2 = new _DocumentSet();
      return n2.comparator = this.comparator, n2.keyedMap = e3, n2.sortedSet = t3, n2;
    }
  };
  var __PRIVATE_DocumentChangeSet = class {
    constructor() {
      this.ga = new SortedMap(DocumentKey.comparator);
    }
    track(e3) {
      const t3 = e3.doc.key, n2 = this.ga.get(t3);
      n2 ? (
        // Merge the new change with the existing change.
        0 !== e3.type && 3 === n2.type ? this.ga = this.ga.insert(t3, e3) : 3 === e3.type && 1 !== n2.type ? this.ga = this.ga.insert(t3, {
          type: n2.type,
          doc: e3.doc
        }) : 2 === e3.type && 2 === n2.type ? this.ga = this.ga.insert(t3, {
          type: 2,
          doc: e3.doc
        }) : 2 === e3.type && 0 === n2.type ? this.ga = this.ga.insert(t3, {
          type: 0,
          doc: e3.doc
        }) : 1 === e3.type && 0 === n2.type ? this.ga = this.ga.remove(t3) : 1 === e3.type && 2 === n2.type ? this.ga = this.ga.insert(t3, {
          type: 1,
          doc: n2.doc
        }) : 0 === e3.type && 1 === n2.type ? this.ga = this.ga.insert(t3, {
          type: 2,
          doc: e3.doc
        }) : (
          // This includes these cases, which don't make sense:
          // Added->Added
          // Removed->Removed
          // Modified->Added
          // Removed->Modified
          // Metadata->Added
          // Removed->Metadata
          fail(63341, {
            Rt: e3,
            pa: n2
          })
        )
      ) : this.ga = this.ga.insert(t3, e3);
    }
    ya() {
      const e3 = [];
      return this.ga.inorderTraversal(((t3, n2) => {
        e3.push(n2);
      })), e3;
    }
  };
  var ViewSnapshot = class _ViewSnapshot {
    constructor(e3, t3, n2, r3, i3, s3, o3, _2, a3) {
      this.query = e3, this.docs = t3, this.oldDocs = n2, this.docChanges = r3, this.mutatedKeys = i3, this.fromCache = s3, this.syncStateChanged = o3, this.excludesMetadataChanges = _2, this.hasCachedResults = a3;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */
    static fromInitialDocuments(e3, t3, n2, r3, i3) {
      const s3 = [];
      return t3.forEach(((e4) => {
        s3.push({
          type: 0,
          doc: e4
        });
      })), new _ViewSnapshot(
        e3,
        t3,
        DocumentSet.emptySet(t3),
        s3,
        n2,
        r3,
        /* syncStateChanged= */
        true,
        /* excludesMetadataChanges= */
        false,
        i3
      );
    }
    get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty();
    }
    isEqual(e3) {
      if (!(this.fromCache === e3.fromCache && this.hasCachedResults === e3.hasCachedResults && this.syncStateChanged === e3.syncStateChanged && this.mutatedKeys.isEqual(e3.mutatedKeys) && __PRIVATE_queryEquals(this.query, e3.query) && this.docs.isEqual(e3.docs) && this.oldDocs.isEqual(e3.oldDocs))) return false;
      const t3 = this.docChanges, n2 = e3.docChanges;
      if (t3.length !== n2.length) return false;
      for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4].type !== n2[e4].type || !t3[e4].doc.isEqual(n2[e4].doc)) return false;
      return true;
    }
  };
  var __PRIVATE_QueryListenersInfo = class {
    constructor() {
      this.wa = void 0, this.Sa = [];
    }
    // Helper methods that checks if the query has listeners that listening to remote store
    ba() {
      return this.Sa.some(((e3) => e3.Da()));
    }
  };
  var __PRIVATE_EventManagerImpl = class {
    constructor() {
      this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.Ca = /* @__PURE__ */ new Set();
    }
    terminate() {
      !(function __PRIVATE_errorAllTargets(e3, t3) {
        const n2 = __PRIVATE_debugCast(e3), r3 = n2.queries;
        n2.queries = __PRIVATE_newQueriesObjectMap(), r3.forEach(((e4, n3) => {
          for (const e5 of n3.Sa) e5.onError(t3);
        }));
      })(this, new FirestoreError(N2.ABORTED, "Firestore shutting down"));
    }
  };
  function __PRIVATE_newQueriesObjectMap() {
    return new ObjectMap(((e3) => __PRIVATE_canonifyQuery(e3)), __PRIVATE_queryEquals);
  }
  async function __PRIVATE_eventManagerListen(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    let r3 = 3;
    const i3 = t3.query;
    let s3 = n2.queries.get(i3);
    s3 ? !s3.ba() && t3.Da() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
    (r3 = 2) : (s3 = new __PRIVATE_QueryListenersInfo(), r3 = t3.Da() ? 0 : 1);
    try {
      switch (r3) {
        case 0:
          s3.wa = await n2.onListen(
            i3,
            /** enableRemoteListen= */
            true
          );
          break;
        case 1:
          s3.wa = await n2.onListen(
            i3,
            /** enableRemoteListen= */
            false
          );
          break;
        case 2:
          await n2.onFirstRemoteStoreListen(i3);
      }
    } catch (e4) {
      const n3 = __PRIVATE_wrapInUserErrorIfRecoverable(e4, `Initialization of query '${__PRIVATE_stringifyQuery(t3.query)}' failed`);
      return void t3.onError(n3);
    }
    if (n2.queries.set(i3, s3), s3.Sa.push(t3), // Run global snapshot listeners if a consistent snapshot has been emitted.
    t3.va(n2.onlineState), s3.wa) {
      t3.Fa(s3.wa) && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
    }
  }
  async function __PRIVATE_eventManagerUnlisten(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = t3.query;
    let i3 = 3;
    const s3 = n2.queries.get(r3);
    if (s3) {
      const e4 = s3.Sa.indexOf(t3);
      e4 >= 0 && (s3.Sa.splice(e4, 1), 0 === s3.Sa.length ? i3 = t3.Da() ? 0 : 1 : !s3.ba() && t3.Da() && // The removed listener is the last one that sourced from watch.
      (i3 = 2));
    }
    switch (i3) {
      case 0:
        return n2.queries.delete(r3), n2.onUnlisten(
          r3,
          /** disableRemoteListen= */
          true
        );
      case 1:
        return n2.queries.delete(r3), n2.onUnlisten(
          r3,
          /** disableRemoteListen= */
          false
        );
      case 2:
        return n2.onLastRemoteStoreUnlisten(r3);
      default:
        return;
    }
  }
  function __PRIVATE_eventManagerOnWatchChange(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    let r3 = false;
    for (const e4 of t3) {
      const t4 = e4.query, i3 = n2.queries.get(t4);
      if (i3) {
        for (const t5 of i3.Sa) t5.Fa(e4) && (r3 = true);
        i3.wa = e4;
      }
    }
    r3 && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
  }
  function __PRIVATE_eventManagerOnWatchError(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3), i3 = r3.queries.get(t3);
    if (i3) for (const e4 of i3.Sa) e4.onError(n2);
    r3.queries.delete(t3);
  }
  function __PRIVATE_raiseSnapshotsInSyncEvent(e3) {
    e3.Ca.forEach(((e4) => {
      e4.next();
    }));
  }
  var nn;
  var rn;
  (rn = nn || (nn = {})).Ma = "default", /** Listen to changes in cache only */
  rn.Cache = "cache";
  var __PRIVATE_QueryListener = class {
    constructor(e3, t3, n2) {
      this.query = e3, this.xa = t3, /**
       * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
       * observer. This flag is set to true once we've actually raised an event.
       */
      this.Oa = false, this.Na = null, this.onlineState = "Unknown", this.options = n2 || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */
    Fa(e3) {
      if (!this.options.includeMetadataChanges) {
        const t4 = [];
        for (const n2 of e3.docChanges) 3 !== n2.type && t4.push(n2);
        e3 = new ViewSnapshot(
          e3.query,
          e3.docs,
          e3.oldDocs,
          t4,
          e3.mutatedKeys,
          e3.fromCache,
          e3.syncStateChanged,
          /* excludesMetadataChanges= */
          true,
          e3.hasCachedResults
        );
      }
      let t3 = false;
      return this.Oa ? this.Ba(e3) && (this.xa.next(e3), t3 = true) : this.La(e3, this.onlineState) && (this.ka(e3), t3 = true), this.Na = e3, t3;
    }
    onError(e3) {
      this.xa.error(e3);
    }
    /** Returns whether a snapshot was raised. */
    va(e3) {
      this.onlineState = e3;
      let t3 = false;
      return this.Na && !this.Oa && this.La(this.Na, e3) && (this.ka(this.Na), t3 = true), t3;
    }
    La(e3, t3) {
      if (!e3.fromCache) return true;
      if (!this.Da()) return true;
      const n2 = "Offline" !== t3;
      return (!this.options.qa || !n2) && (!e3.docs.isEmpty() || e3.hasCachedResults || "Offline" === t3);
    }
    Ba(e3) {
      if (e3.docChanges.length > 0) return true;
      const t3 = this.Na && this.Na.hasPendingWrites !== e3.hasPendingWrites;
      return !(!e3.syncStateChanged && !t3) && true === this.options.includeMetadataChanges;
    }
    ka(e3) {
      e3 = ViewSnapshot.fromInitialDocuments(e3.query, e3.docs, e3.mutatedKeys, e3.fromCache, e3.hasCachedResults), this.Oa = true, this.xa.next(e3);
    }
    Da() {
      return this.options.source !== nn.Cache;
    }
  };
  var __PRIVATE_AddedLimboDocument = class {
    constructor(e3) {
      this.key = e3;
    }
  };
  var __PRIVATE_RemovedLimboDocument = class {
    constructor(e3) {
      this.key = e3;
    }
  };
  var __PRIVATE_View = class {
    constructor(e3, t3) {
      this.query = e3, this.Ya = t3, this.Za = null, this.hasCachedResults = false, /**
       * A flag whether the view is current with the backend. A view is considered
       * current after it has seen the current flag from the backend and did not
       * lose consistency within the watch stream (e.g. because of an existence
       * filter mismatch).
       */
      this.current = false, /** Documents in the view but not in the remote target */
      this.Xa = __PRIVATE_documentKeySet(), /** Document Keys that have local changes */
      this.mutatedKeys = __PRIVATE_documentKeySet(), this.eu = __PRIVATE_newQueryComparator(e3), this.tu = new DocumentSet(this.eu);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */
    get nu() {
      return this.Ya;
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    ru(e3, t3) {
      const n2 = t3 ? t3.iu : new __PRIVATE_DocumentChangeSet(), r3 = t3 ? t3.tu : this.tu;
      let i3 = t3 ? t3.mutatedKeys : this.mutatedKeys, s3 = r3, o3 = false;
      const _2 = "F" === this.query.limitType && r3.size === this.query.limit ? r3.last() : null, a3 = "L" === this.query.limitType && r3.size === this.query.limit ? r3.first() : null;
      if (e3.inorderTraversal(((e4, t4) => {
        const u4 = r3.get(e4), c3 = __PRIVATE_queryMatches(this.query, t4) ? t4 : null, l3 = !!u4 && this.mutatedKeys.has(u4.key), h3 = !!c3 && (c3.hasLocalMutations || // We only consider committed mutations for documents that were
        // mutated during the lifetime of the view.
        this.mutatedKeys.has(c3.key) && c3.hasCommittedMutations);
        let P2 = false;
        if (u4 && c3) {
          u4.data.isEqual(c3.data) ? l3 !== h3 && (n2.track({
            type: 3,
            doc: c3
          }), P2 = true) : this.su(u4, c3) || (n2.track({
            type: 2,
            doc: c3
          }), P2 = true, (_2 && this.eu(c3, _2) > 0 || a3 && this.eu(c3, a3) < 0) && // This doc moved from inside the limit to outside the limit.
          // That means there may be some other doc in the local cache
          // that should be included instead.
          (o3 = true));
        } else !u4 && c3 ? (n2.track({
          type: 0,
          doc: c3
        }), P2 = true) : u4 && !c3 && (n2.track({
          type: 1,
          doc: u4
        }), P2 = true, (_2 || a3) && // A doc was removed from a full limit query. We'll need to
        // requery from the local cache to see if we know about some other
        // doc that should be in the results.
        (o3 = true));
        P2 && (c3 ? (s3 = s3.add(c3), i3 = h3 ? i3.add(e4) : i3.delete(e4)) : (s3 = s3.delete(e4), i3 = i3.delete(e4)));
      })), null !== this.query.limit) for (; s3.size > this.query.limit; ) {
        const e4 = "F" === this.query.limitType ? s3.last() : s3.first();
        s3 = s3.delete(e4.key), i3 = i3.delete(e4.key), n2.track({
          type: 1,
          doc: e4
        });
      }
      return {
        tu: s3,
        iu: n2,
        Cs: o3,
        mutatedKeys: i3
      };
    }
    su(e3, t3) {
      return e3.hasLocalMutations && t3.hasCommittedMutations && !t3.hasLocalMutations;
    }
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param limboResolutionEnabled - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @param targetIsPendingReset - Whether the target is pending to reset due to
     *        existence filter mismatch. If not explicitly specified, it is treated
     *        equivalently to `false`.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    applyChanges(e3, t3, n2, r3) {
      const i3 = this.tu;
      this.tu = e3.tu, this.mutatedKeys = e3.mutatedKeys;
      const s3 = e3.iu.ya();
      s3.sort(((e4, t4) => (function __PRIVATE_compareChangeType(e5, t5) {
        const order = (e6) => {
          switch (e6) {
            case 0:
              return 1;
            case 2:
            case 3:
              return 2;
            case 1:
              return 0;
            default:
              return fail(20277, {
                Rt: e6
              });
          }
        };
        return order(e5) - order(t5);
      })(e4.type, t4.type) || this.eu(e4.doc, t4.doc))), this.ou(n2), r3 = r3 ?? false;
      const o3 = t3 && !r3 ? this._u() : [], _2 = 0 === this.Xa.size && this.current && !r3 ? 1 : 0, a3 = _2 !== this.Za;
      if (this.Za = _2, 0 !== s3.length || a3) {
        return {
          snapshot: new ViewSnapshot(
            this.query,
            e3.tu,
            i3,
            s3,
            e3.mutatedKeys,
            0 === _2,
            a3,
            /* excludesMetadataChanges= */
            false,
            !!n2 && n2.resumeToken.approximateByteSize() > 0
          ),
          au: o3
        };
      }
      return {
        au: o3
      };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    va(e3) {
      return this.current && "Offline" === e3 ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        (this.current = false, this.applyChanges(
          {
            tu: this.tu,
            iu: new __PRIVATE_DocumentChangeSet(),
            mutatedKeys: this.mutatedKeys,
            Cs: false
          },
          /* limboResolutionEnabled= */
          false
        ))
      ) : {
        au: []
      };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    uu(e3) {
      return !this.Ya.has(e3) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
      (!!this.tu.has(e3) && !this.tu.get(e3).hasLocalMutations);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    ou(e3) {
      e3 && (e3.addedDocuments.forEach(((e4) => this.Ya = this.Ya.add(e4))), e3.modifiedDocuments.forEach(((e4) => {
      })), e3.removedDocuments.forEach(((e4) => this.Ya = this.Ya.delete(e4))), this.current = e3.current);
    }
    _u() {
      if (!this.current) return [];
      const e3 = this.Xa;
      this.Xa = __PRIVATE_documentKeySet(), this.tu.forEach(((e4) => {
        this.uu(e4.key) && (this.Xa = this.Xa.add(e4.key));
      }));
      const t3 = [];
      return e3.forEach(((e4) => {
        this.Xa.has(e4) || t3.push(new __PRIVATE_RemovedLimboDocument(e4));
      })), this.Xa.forEach(((n2) => {
        e3.has(n2) || t3.push(new __PRIVATE_AddedLimboDocument(n2));
      })), t3;
    }
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    cu(e3) {
      this.Ya = e3.Qs, this.Xa = __PRIVATE_documentKeySet();
      const t3 = this.ru(e3.documents);
      return this.applyChanges(
        t3,
        /* limboResolutionEnabled= */
        true
      );
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    lu() {
      return ViewSnapshot.fromInitialDocuments(this.query, this.tu, this.mutatedKeys, 0 === this.Za, this.hasCachedResults);
    }
  };
  var sn = "SyncEngine";
  var __PRIVATE_QueryView = class {
    constructor(e3, t3, n2) {
      this.query = e3, this.targetId = t3, this.view = n2;
    }
  };
  var LimboResolution = class {
    constructor(e3) {
      this.key = e3, /**
       * Set to true once we've received a document. This is used in
       * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
       * decide whether it needs to manufacture a delete event for the target once
       * the target is CURRENT.
       */
      this.hu = false;
    }
  };
  var __PRIVATE_SyncEngineImpl = class {
    constructor(e3, t3, n2, r3, i3, s3) {
      this.localStore = e3, this.remoteStore = t3, this.eventManager = n2, this.sharedClientState = r3, this.currentUser = i3, this.maxConcurrentLimboResolutions = s3, this.Pu = {}, this.Tu = new ObjectMap(((e4) => __PRIVATE_canonifyQuery(e4)), __PRIVATE_queryEquals), this.Iu = /* @__PURE__ */ new Map(), /**
       * The keys of documents that are in limbo for which we haven't yet started a
       * limbo resolution query. The strings in this set are the result of calling
       * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
       *
       * The `Set` type was chosen because it provides efficient lookup and removal
       * of arbitrary elements and it also maintains insertion order, providing the
       * desired queue-like FIFO semantics.
       */
      this.Eu = /* @__PURE__ */ new Set(), /**
       * Keeps track of the target ID for each document that is in limbo with an
       * active target.
       */
      this.du = new SortedMap(DocumentKey.comparator), /**
       * Keeps track of the information about an active limbo resolution for each
       * active target ID that was started for the purpose of limbo resolution.
       */
      this.Au = /* @__PURE__ */ new Map(), this.Ru = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
      this.Vu = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
      this.mu = /* @__PURE__ */ new Map(), this.fu = __PRIVATE_TargetIdGenerator.cr(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
      // startup. In the interim, a client should only be considered primary if
      // `isPrimary` is true.
      this.gu = void 0;
    }
    get isPrimaryClient() {
      return true === this.gu;
    }
  };
  async function __PRIVATE_syncEngineListen(e3, t3, n2 = true) {
    const r3 = __PRIVATE_ensureWatchCallbacks(e3);
    let i3;
    const s3 = r3.Tu.get(t3);
    return s3 ? (
      // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
      // already exists when EventManager calls us for the first time. This
      // happens when the primary tab is already listening to this query on
      // behalf of another tab and the user of the primary also starts listening
      // to the query. EventManager will not have an assigned target ID in this
      // case and calls `listen` to obtain this ID.
      (r3.sharedClientState.addLocalQueryTarget(s3.targetId), i3 = s3.view.lu())
    ) : i3 = await __PRIVATE_allocateTargetAndMaybeListen(
      r3,
      t3,
      n2,
      /** shouldInitializeView= */
      true
    ), i3;
  }
  async function __PRIVATE_triggerRemoteStoreListen(e3, t3) {
    const n2 = __PRIVATE_ensureWatchCallbacks(e3);
    await __PRIVATE_allocateTargetAndMaybeListen(
      n2,
      t3,
      /** shouldListenToRemote= */
      true,
      /** shouldInitializeView= */
      false
    );
  }
  async function __PRIVATE_allocateTargetAndMaybeListen(e3, t3, n2, r3) {
    const i3 = await __PRIVATE_localStoreAllocateTarget(e3.localStore, __PRIVATE_queryToTarget(t3)), s3 = i3.targetId, o3 = e3.sharedClientState.addLocalQueryTarget(s3, n2);
    let _2;
    return r3 && (_2 = await __PRIVATE_initializeViewAndComputeSnapshot(e3, t3, s3, "current" === o3, i3.resumeToken)), e3.isPrimaryClient && n2 && __PRIVATE_remoteStoreListen(e3.remoteStore, i3), _2;
  }
  async function __PRIVATE_initializeViewAndComputeSnapshot(e3, t3, n2, r3, i3) {
    e3.pu = (t4, n3, r4) => (async function __PRIVATE_applyDocChanges(e4, t5, n4, r5) {
      let i4 = t5.view.ru(n4);
      i4.Cs && // The query has a limit and some docs were removed, so we need
      // to re-run the query against the local store to make sure we
      // didn't lose any good docs that had been past the limit.
      (i4 = await __PRIVATE_localStoreExecuteQuery(
        e4.localStore,
        t5.query,
        /* usePreviousResults= */
        false
      ).then((({ documents: e5 }) => t5.view.ru(e5, i4))));
      const s4 = r5 && r5.targetChanges.get(t5.targetId), o4 = r5 && null != r5.targetMismatches.get(t5.targetId), _3 = t5.view.applyChanges(
        i4,
        /* limboResolutionEnabled= */
        e4.isPrimaryClient,
        s4,
        o4
      );
      return __PRIVATE_updateTrackedLimbos(e4, t5.targetId, _3.au), _3.snapshot;
    })(e3, t4, n3, r4);
    const s3 = await __PRIVATE_localStoreExecuteQuery(
      e3.localStore,
      t3,
      /* usePreviousResults= */
      true
    ), o3 = new __PRIVATE_View(t3, s3.Qs), _2 = o3.ru(s3.documents), a3 = TargetChange.createSynthesizedTargetChangeForCurrentChange(n2, r3 && "Offline" !== e3.onlineState, i3), u4 = o3.applyChanges(
      _2,
      /* limboResolutionEnabled= */
      e3.isPrimaryClient,
      a3
    );
    __PRIVATE_updateTrackedLimbos(e3, n2, u4.au);
    const c3 = new __PRIVATE_QueryView(t3, n2, o3);
    return e3.Tu.set(t3, c3), e3.Iu.has(n2) ? e3.Iu.get(n2).push(t3) : e3.Iu.set(n2, [t3]), u4.snapshot;
  }
  async function __PRIVATE_syncEngineUnlisten(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3), i3 = r3.Tu.get(t3), s3 = r3.Iu.get(i3.targetId);
    if (s3.length > 1) return r3.Iu.set(i3.targetId, s3.filter(((e4) => !__PRIVATE_queryEquals(e4, t3)))), void r3.Tu.delete(t3);
    if (r3.isPrimaryClient) {
      r3.sharedClientState.removeLocalQueryTarget(i3.targetId);
      r3.sharedClientState.isActiveQueryTarget(i3.targetId) || await __PRIVATE_localStoreReleaseTarget(
        r3.localStore,
        i3.targetId,
        /*keepPersistedTargetData=*/
        false
      ).then((() => {
        r3.sharedClientState.clearQueryState(i3.targetId), n2 && __PRIVATE_remoteStoreUnlisten(r3.remoteStore, i3.targetId), __PRIVATE_removeAndCleanupTarget(r3, i3.targetId);
      })).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
    } else __PRIVATE_removeAndCleanupTarget(r3, i3.targetId), await __PRIVATE_localStoreReleaseTarget(
      r3.localStore,
      i3.targetId,
      /*keepPersistedTargetData=*/
      true
    );
  }
  async function __PRIVATE_triggerRemoteStoreUnlisten(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = n2.Tu.get(t3), i3 = n2.Iu.get(r3.targetId);
    n2.isPrimaryClient && 1 === i3.length && // PORTING NOTE: Unregister the target ID with local Firestore client as
    // watch target.
    (n2.sharedClientState.removeLocalQueryTarget(r3.targetId), __PRIVATE_remoteStoreUnlisten(n2.remoteStore, r3.targetId));
  }
  async function __PRIVATE_syncEngineWrite(e3, t3, n2) {
    const r3 = __PRIVATE_syncEngineEnsureWriteCallbacks(e3);
    try {
      const e4 = await (function __PRIVATE_localStoreWriteLocally(e5, t4) {
        const n3 = __PRIVATE_debugCast(e5), r4 = Timestamp.now(), i3 = t4.reduce(((e6, t5) => e6.add(t5.key)), __PRIVATE_documentKeySet());
        let s3, o3;
        return n3.persistence.runTransaction("Locally write mutations", "readwrite", ((e6) => {
          let _2 = __PRIVATE_mutableDocumentMap(), a3 = __PRIVATE_documentKeySet();
          return n3.Ns.getEntries(e6, i3).next(((e7) => {
            _2 = e7, _2.forEach(((e8, t5) => {
              t5.isValidDocument() || (a3 = a3.add(e8));
            }));
          })).next((() => n3.localDocuments.getOverlayedDocuments(e6, _2))).next(((i4) => {
            s3 = i4;
            const o4 = [];
            for (const e7 of t4) {
              const t5 = __PRIVATE_mutationExtractBaseValue(e7, s3.get(e7.key).overlayedDocument);
              null != t5 && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              o4.push(new __PRIVATE_PatchMutation(e7.key, t5, __PRIVATE_extractFieldMask(t5.value.mapValue), Precondition.exists(true)));
            }
            return n3.mutationQueue.addMutationBatch(e6, r4, o4, t4);
          })).next(((t5) => {
            o3 = t5;
            const r5 = t5.applyToLocalDocumentSet(s3, a3);
            return n3.documentOverlayCache.saveOverlays(e6, t5.batchId, r5);
          }));
        })).then((() => ({
          batchId: o3.batchId,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(s3)
        })));
      })(r3.localStore, t3);
      r3.sharedClientState.addPendingMutation(e4.batchId), (function __PRIVATE_addMutationCallback(e5, t4, n3) {
        let r4 = e5.Vu[e5.currentUser.toKey()];
        r4 || (r4 = new SortedMap(__PRIVATE_primitiveComparator));
        r4 = r4.insert(t4, n3), e5.Vu[e5.currentUser.toKey()] = r4;
      })(r3, e4.batchId, n2), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r3, e4.changes), await __PRIVATE_fillWritePipeline(r3.remoteStore);
    } catch (e4) {
      const t4 = __PRIVATE_wrapInUserErrorIfRecoverable(e4, "Failed to persist write");
      n2.reject(t4);
    }
  }
  async function __PRIVATE_syncEngineApplyRemoteEvent(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    try {
      const e4 = await __PRIVATE_localStoreApplyRemoteEventToLocalCache(n2.localStore, t3);
      t3.targetChanges.forEach(((e5, t4) => {
        const r3 = n2.Au.get(t4);
        r3 && // Since this is a limbo resolution lookup, it's for a single document
        // and it could be added, modified, or removed, but not a combination.
        (__PRIVATE_hardAssert(e5.addedDocuments.size + e5.modifiedDocuments.size + e5.removedDocuments.size <= 1, 22616), e5.addedDocuments.size > 0 ? r3.hu = true : e5.modifiedDocuments.size > 0 ? __PRIVATE_hardAssert(r3.hu, 14607) : e5.removedDocuments.size > 0 && (__PRIVATE_hardAssert(r3.hu, 42227), r3.hu = false));
      })), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n2, e4, t3);
    } catch (e4) {
      await __PRIVATE_ignoreIfPrimaryLeaseLoss(e4);
    }
  }
  function __PRIVATE_syncEngineApplyOnlineStateChange(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3);
    if (r3.isPrimaryClient && 0 === n2 || !r3.isPrimaryClient && 1 === n2) {
      const e4 = [];
      r3.Tu.forEach(((n3, r4) => {
        const i3 = r4.view.va(t3);
        i3.snapshot && e4.push(i3.snapshot);
      })), (function __PRIVATE_eventManagerOnOnlineStateChange(e5, t4) {
        const n3 = __PRIVATE_debugCast(e5);
        n3.onlineState = t4;
        let r4 = false;
        n3.queries.forEach(((e6, n4) => {
          for (const e7 of n4.Sa)
            e7.va(t4) && (r4 = true);
        })), r4 && __PRIVATE_raiseSnapshotsInSyncEvent(n3);
      })(r3.eventManager, t3), e4.length && r3.Pu.H_(e4), r3.onlineState = t3, r3.isPrimaryClient && r3.sharedClientState.setOnlineState(t3);
    }
  }
  async function __PRIVATE_syncEngineRejectListen(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3);
    r3.sharedClientState.updateQueryState(t3, "rejected", n2);
    const i3 = r3.Au.get(t3), s3 = i3 && i3.key;
    if (s3) {
      let e4 = new SortedMap(DocumentKey.comparator);
      e4 = e4.insert(s3, MutableDocument.newNoDocument(s3, SnapshotVersion.min()));
      const n3 = __PRIVATE_documentKeySet().add(s3), i4 = new RemoteEvent(
        SnapshotVersion.min(),
        /* targetChanges= */
        /* @__PURE__ */ new Map(),
        /* targetMismatches= */
        new SortedMap(__PRIVATE_primitiveComparator),
        e4,
        n3
      );
      await __PRIVATE_syncEngineApplyRemoteEvent(r3, i4), // Since this query failed, we won't want to manually unlisten to it.
      // We only remove it from bookkeeping after we successfully applied the
      // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
      // this query when the RemoteStore restarts the Watch stream, which should
      // re-trigger the target failure.
      r3.du = r3.du.remove(s3), r3.Au.delete(t3), __PRIVATE_pumpEnqueuedLimboResolutions(r3);
    } else await __PRIVATE_localStoreReleaseTarget(
      r3.localStore,
      t3,
      /* keepPersistedTargetData */
      false
    ).then((() => __PRIVATE_removeAndCleanupTarget(r3, t3, n2))).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
  }
  async function __PRIVATE_syncEngineApplySuccessfulWrite(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = t3.batch.batchId;
    try {
      const e4 = await __PRIVATE_localStoreAcknowledgeBatch(n2.localStore, t3);
      __PRIVATE_processUserCallback(
        n2,
        r3,
        /*error=*/
        null
      ), __PRIVATE_triggerPendingWritesCallbacks(n2, r3), n2.sharedClientState.updateMutationState(r3, "acknowledged"), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n2, e4);
    } catch (e4) {
      await __PRIVATE_ignoreIfPrimaryLeaseLoss(e4);
    }
  }
  async function __PRIVATE_syncEngineRejectFailedWrite(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3);
    try {
      const e4 = await (function __PRIVATE_localStoreRejectBatch(e5, t4) {
        const n3 = __PRIVATE_debugCast(e5);
        return n3.persistence.runTransaction("Reject batch", "readwrite-primary", ((e6) => {
          let r4;
          return n3.mutationQueue.lookupMutationBatch(e6, t4).next(((t5) => (__PRIVATE_hardAssert(null !== t5, 37113), r4 = t5.keys(), n3.mutationQueue.removeMutationBatch(e6, t5)))).next((() => n3.mutationQueue.performConsistencyCheck(e6))).next((() => n3.documentOverlayCache.removeOverlaysForBatchId(e6, r4, t4))).next((() => n3.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e6, r4))).next((() => n3.localDocuments.getDocuments(e6, r4)));
        }));
      })(r3.localStore, t3);
      __PRIVATE_processUserCallback(r3, t3, n2), __PRIVATE_triggerPendingWritesCallbacks(r3, t3), r3.sharedClientState.updateMutationState(t3, "rejected", n2), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r3, e4);
    } catch (n3) {
      await __PRIVATE_ignoreIfPrimaryLeaseLoss(n3);
    }
  }
  function __PRIVATE_triggerPendingWritesCallbacks(e3, t3) {
    (e3.mu.get(t3) || []).forEach(((e4) => {
      e4.resolve();
    })), e3.mu.delete(t3);
  }
  function __PRIVATE_processUserCallback(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3);
    let i3 = r3.Vu[r3.currentUser.toKey()];
    if (i3) {
      const e4 = i3.get(t3);
      e4 && (n2 ? e4.reject(n2) : e4.resolve(), i3 = i3.remove(t3)), r3.Vu[r3.currentUser.toKey()] = i3;
    }
  }
  function __PRIVATE_removeAndCleanupTarget(e3, t3, n2 = null) {
    e3.sharedClientState.removeLocalQueryTarget(t3);
    for (const r3 of e3.Iu.get(t3)) e3.Tu.delete(r3), n2 && e3.Pu.yu(r3, n2);
    if (e3.Iu.delete(t3), e3.isPrimaryClient) {
      e3.Ru.jr(t3).forEach(((t4) => {
        e3.Ru.containsKey(t4) || // We removed the last reference for this key
        __PRIVATE_removeLimboTarget(e3, t4);
      }));
    }
  }
  function __PRIVATE_removeLimboTarget(e3, t3) {
    e3.Eu.delete(t3.path.canonicalString());
    const n2 = e3.du.get(t3);
    null !== n2 && (__PRIVATE_remoteStoreUnlisten(e3.remoteStore, n2), e3.du = e3.du.remove(t3), e3.Au.delete(n2), __PRIVATE_pumpEnqueuedLimboResolutions(e3));
  }
  function __PRIVATE_updateTrackedLimbos(e3, t3, n2) {
    for (const r3 of n2) if (r3 instanceof __PRIVATE_AddedLimboDocument) e3.Ru.addReference(r3.key, t3), __PRIVATE_trackLimboChange(e3, r3);
    else if (r3 instanceof __PRIVATE_RemovedLimboDocument) {
      __PRIVATE_logDebug(sn, "Document no longer in limbo: " + r3.key), e3.Ru.removeReference(r3.key, t3);
      e3.Ru.containsKey(r3.key) || // We removed the last reference for this key
      __PRIVATE_removeLimboTarget(e3, r3.key);
    } else fail(19791, {
      wu: r3
    });
  }
  function __PRIVATE_trackLimboChange(e3, t3) {
    const n2 = t3.key, r3 = n2.path.canonicalString();
    e3.du.get(n2) || e3.Eu.has(r3) || (__PRIVATE_logDebug(sn, "New document in limbo: " + n2), e3.Eu.add(r3), __PRIVATE_pumpEnqueuedLimboResolutions(e3));
  }
  function __PRIVATE_pumpEnqueuedLimboResolutions(e3) {
    for (; e3.Eu.size > 0 && e3.du.size < e3.maxConcurrentLimboResolutions; ) {
      const t3 = e3.Eu.values().next().value;
      e3.Eu.delete(t3);
      const n2 = new DocumentKey(ResourcePath.fromString(t3)), r3 = e3.fu.next();
      e3.Au.set(r3, new LimboResolution(n2)), e3.du = e3.du.insert(n2, r3), __PRIVATE_remoteStoreListen(e3.remoteStore, new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(n2.path)), r3, "TargetPurposeLimboResolution", __PRIVATE_ListenSequence.ce));
    }
  }
  async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e3, t3, n2) {
    const r3 = __PRIVATE_debugCast(e3), i3 = [], s3 = [], o3 = [];
    r3.Tu.isEmpty() || (r3.Tu.forEach(((e4, _2) => {
      o3.push(r3.pu(_2, t3, n2).then(((e5) => {
        if ((e5 || n2) && r3.isPrimaryClient) {
          const t4 = e5 ? !e5.fromCache : n2?.targetChanges.get(_2.targetId)?.current;
          r3.sharedClientState.updateQueryState(_2.targetId, t4 ? "current" : "not-current");
        }
        if (e5) {
          i3.push(e5);
          const t4 = __PRIVATE_LocalViewChanges.As(_2.targetId, e5);
          s3.push(t4);
        }
      })));
    })), await Promise.all(o3), r3.Pu.H_(i3), await (async function __PRIVATE_localStoreNotifyLocalViewChanges(e4, t4) {
      const n3 = __PRIVATE_debugCast(e4);
      try {
        await n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", ((e5) => PersistencePromise.forEach(t4, ((t5) => PersistencePromise.forEach(t5.Es, ((r4) => n3.persistence.referenceDelegate.addReference(e5, t5.targetId, r4))).next((() => PersistencePromise.forEach(t5.ds, ((r4) => n3.persistence.referenceDelegate.removeReference(e5, t5.targetId, r4)))))))));
      } catch (e5) {
        if (!__PRIVATE_isIndexedDbTransactionError(e5)) throw e5;
        __PRIVATE_logDebug(Ut, "Failed to update sequence numbers: " + e5);
      }
      for (const e5 of t4) {
        const t5 = e5.targetId;
        if (!e5.fromCache) {
          const e6 = n3.Ms.get(t5), r4 = e6.snapshotVersion, i4 = e6.withLastLimboFreeSnapshotVersion(r4);
          n3.Ms = n3.Ms.insert(t5, i4);
        }
      }
    })(r3.localStore, s3));
  }
  async function __PRIVATE_syncEngineHandleCredentialChange(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3);
    if (!n2.currentUser.isEqual(t3)) {
      __PRIVATE_logDebug(sn, "User change. New user:", t3.toKey());
      const e4 = await __PRIVATE_localStoreHandleUserChange(n2.localStore, t3);
      n2.currentUser = t3, // Fails tasks waiting for pending writes requested by previous user.
      (function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e5, t4) {
        e5.mu.forEach(((e6) => {
          e6.forEach(((e7) => {
            e7.reject(new FirestoreError(N2.CANCELLED, t4));
          }));
        })), e5.mu.clear();
      })(n2, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
      n2.sharedClientState.handleUserChange(t3, e4.removedBatchIds, e4.addedBatchIds), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n2, e4.Ls);
    }
  }
  function __PRIVATE_syncEngineGetRemoteKeysForTarget(e3, t3) {
    const n2 = __PRIVATE_debugCast(e3), r3 = n2.Au.get(t3);
    if (r3 && r3.hu) return __PRIVATE_documentKeySet().add(r3.key);
    {
      let e4 = __PRIVATE_documentKeySet();
      const r4 = n2.Iu.get(t3);
      if (!r4) return e4;
      for (const t4 of r4) {
        const r5 = n2.Tu.get(t4);
        e4 = e4.unionWith(r5.view.nu);
      }
      return e4;
    }
  }
  function __PRIVATE_ensureWatchCallbacks(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    return t3.remoteStore.remoteSyncer.applyRemoteEvent = __PRIVATE_syncEngineApplyRemoteEvent.bind(null, t3), t3.remoteStore.remoteSyncer.getRemoteKeysForTarget = __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, t3), t3.remoteStore.remoteSyncer.rejectListen = __PRIVATE_syncEngineRejectListen.bind(null, t3), t3.Pu.H_ = __PRIVATE_eventManagerOnWatchChange.bind(null, t3.eventManager), t3.Pu.yu = __PRIVATE_eventManagerOnWatchError.bind(null, t3.eventManager), t3;
  }
  function __PRIVATE_syncEngineEnsureWriteCallbacks(e3) {
    const t3 = __PRIVATE_debugCast(e3);
    return t3.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, t3), t3.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, t3), t3;
  }
  var __PRIVATE_MemoryOfflineComponentProvider = class {
    constructor() {
      this.kind = "memory", this.synchronizeTabs = false;
    }
    async initialize(e3) {
      this.serializer = __PRIVATE_newSerializer(e3.databaseInfo.databaseId), this.sharedClientState = this.Du(e3), this.persistence = this.Cu(e3), await this.persistence.start(), this.localStore = this.vu(e3), this.gcScheduler = this.Fu(e3, this.localStore), this.indexBackfillerScheduler = this.Mu(e3, this.localStore);
    }
    Fu(e3, t3) {
      return null;
    }
    Mu(e3, t3) {
      return null;
    }
    vu(e3) {
      return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e3.initialUser, this.serializer);
    }
    Cu(e3) {
      return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.mi, this.serializer);
    }
    Du(e3) {
      return new __PRIVATE_MemorySharedClientState();
    }
    async terminate() {
      this.gcScheduler?.stop(), this.indexBackfillerScheduler?.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
    }
  };
  __PRIVATE_MemoryOfflineComponentProvider.provider = {
    build: () => new __PRIVATE_MemoryOfflineComponentProvider()
  };
  var __PRIVATE_LruGcMemoryOfflineComponentProvider = class extends __PRIVATE_MemoryOfflineComponentProvider {
    constructor(e3) {
      super(), this.cacheSizeBytes = e3;
    }
    Fu(e3, t3) {
      __PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate, 46915);
      const n2 = this.persistence.referenceDelegate.garbageCollector;
      return new __PRIVATE_LruScheduler(n2, e3.asyncQueue, t3);
    }
    Cu(e3) {
      const t3 = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
      return new __PRIVATE_MemoryPersistence(((e4) => __PRIVATE_MemoryLruDelegate.mi(e4, t3)), this.serializer);
    }
  };
  var OnlineComponentProvider = class {
    async initialize(e3, t3) {
      this.localStore || (this.localStore = e3.localStore, this.sharedClientState = e3.sharedClientState, this.datastore = this.createDatastore(t3), this.remoteStore = this.createRemoteStore(t3), this.eventManager = this.createEventManager(t3), this.syncEngine = this.createSyncEngine(
        t3,
        /* startAsPrimary=*/
        !e3.synchronizeTabs
      ), this.sharedClientState.onlineStateHandler = (e4) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e4,
        1
        /* OnlineStateSource.SharedClientState */
      ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(e3) {
      return (function __PRIVATE_newEventManager() {
        return new __PRIVATE_EventManagerImpl();
      })();
    }
    createDatastore(e3) {
      const t3 = __PRIVATE_newSerializer(e3.databaseInfo.databaseId), n2 = (function __PRIVATE_newConnection(e4) {
        return new __PRIVATE_WebChannelConnection(e4);
      })(e3.databaseInfo);
      return (function __PRIVATE_newDatastore(e4, t4, n3, r3) {
        return new __PRIVATE_DatastoreImpl(e4, t4, n3, r3);
      })(e3.authCredentials, e3.appCheckCredentials, n2, t3);
    }
    createRemoteStore(e3) {
      return (function __PRIVATE_newRemoteStore(e4, t3, n2, r3, i3) {
        return new __PRIVATE_RemoteStoreImpl(e4, t3, n2, r3, i3);
      })(this.localStore, this.datastore, e3.asyncQueue, ((e4) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e4,
        0
        /* OnlineStateSource.RemoteStore */
      )), (function __PRIVATE_newConnectivityMonitor() {
        return __PRIVATE_BrowserConnectivityMonitor.v() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
      })());
    }
    createSyncEngine(e3, t3) {
      return (function __PRIVATE_newSyncEngine(e4, t4, n2, r3, i3, s3, o3) {
        const _2 = new __PRIVATE_SyncEngineImpl(e4, t4, n2, r3, i3, s3);
        return o3 && (_2.gu = true), _2;
      })(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e3.initialUser, e3.maxConcurrentLimboResolutions, t3);
    }
    async terminate() {
      await (async function __PRIVATE_remoteStoreShutdown(e3) {
        const t3 = __PRIVATE_debugCast(e3);
        __PRIVATE_logDebug(tn, "RemoteStore shutting down."), t3.Ea.add(
          5
          /* OfflineCause.Shutdown */
        ), await __PRIVATE_disableNetworkInternal(t3), t3.Aa.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
        // triggering spurious listener events with cached data, etc.
        t3.Ra.set(
          "Unknown"
          /* OnlineState.Unknown */
        );
      })(this.remoteStore), this.datastore?.terminate(), this.eventManager?.terminate();
    }
  };
  OnlineComponentProvider.provider = {
    build: () => new OnlineComponentProvider()
  };
  var __PRIVATE_AsyncObserver = class {
    constructor(e3) {
      this.observer = e3, /**
       * When set to true, will not raise future events. Necessary to deal with
       * async detachment of listener.
       */
      this.muted = false;
    }
    next(e3) {
      this.muted || this.observer.next && this.Ou(this.observer.next, e3);
    }
    error(e3) {
      this.muted || (this.observer.error ? this.Ou(this.observer.error, e3) : __PRIVATE_logError("Uncaught Error in snapshot listener:", e3.toString()));
    }
    Nu() {
      this.muted = true;
    }
    Ou(e3, t3) {
      setTimeout((() => {
        this.muted || e3(t3);
      }), 0);
    }
  };
  var on = "FirestoreClient";
  var FirestoreClient = class {
    constructor(e3, t3, n2, r3, i3) {
      this.authCredentials = e3, this.appCheckCredentials = t3, this.asyncQueue = n2, this.databaseInfo = r3, this.user = User.UNAUTHENTICATED, this.clientId = __PRIVATE_AutoId.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = i3, this.authCredentials.start(n2, (async (e4) => {
        __PRIVATE_logDebug(on, "Received user=", e4.uid), await this.authCredentialListener(e4), this.user = e4;
      })), this.appCheckCredentials.start(n2, ((e4) => (__PRIVATE_logDebug(on, "Received new app check token=", e4), this.appCheckCredentialListener(e4, this.user))));
    }
    get configuration() {
      return {
        asyncQueue: this.asyncQueue,
        databaseInfo: this.databaseInfo,
        clientId: this.clientId,
        authCredentials: this.authCredentials,
        appCheckCredentials: this.appCheckCredentials,
        initialUser: this.user,
        maxConcurrentLimboResolutions: 100
      };
    }
    setCredentialChangeListener(e3) {
      this.authCredentialListener = e3;
    }
    setAppCheckTokenChangeListener(e3) {
      this.appCheckCredentialListener = e3;
    }
    terminate() {
      this.asyncQueue.enterRestrictedMode();
      const e3 = new __PRIVATE_Deferred();
      return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
        try {
          this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
          // RemoteStore as it will prevent the RemoteStore from retrieving auth
          // tokens.
          this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e3.resolve();
        } catch (t3) {
          const n2 = __PRIVATE_wrapInUserErrorIfRecoverable(t3, "Failed to shutdown persistence");
          e3.reject(n2);
        }
      })), e3.promise;
    }
  };
  async function __PRIVATE_setOfflineComponentProvider(e3, t3) {
    e3.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug(on, "Initializing OfflineComponentProvider");
    const n2 = e3.configuration;
    await t3.initialize(n2);
    let r3 = n2.initialUser;
    e3.setCredentialChangeListener((async (e4) => {
      r3.isEqual(e4) || (await __PRIVATE_localStoreHandleUserChange(t3.localStore, e4), r3 = e4);
    })), // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    t3.persistence.setDatabaseDeletedListener((() => e3.terminate())), e3._offlineComponents = t3;
  }
  async function __PRIVATE_setOnlineComponentProvider(e3, t3) {
    e3.asyncQueue.verifyOperationInProgress();
    const n2 = await __PRIVATE_ensureOfflineComponents(e3);
    __PRIVATE_logDebug(on, "Initializing OnlineComponentProvider"), await t3.initialize(n2, e3.configuration), // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    e3.setCredentialChangeListener(((e4) => __PRIVATE_remoteStoreHandleCredentialChange(t3.remoteStore, e4))), e3.setAppCheckTokenChangeListener(((e4, n3) => __PRIVATE_remoteStoreHandleCredentialChange(t3.remoteStore, n3))), e3._onlineComponents = t3;
  }
  async function __PRIVATE_ensureOfflineComponents(e3) {
    if (!e3._offlineComponents) if (e3._uninitializedComponentsProvider) {
      __PRIVATE_logDebug(on, "Using user provided OfflineComponentProvider");
      try {
        await __PRIVATE_setOfflineComponentProvider(e3, e3._uninitializedComponentsProvider._offline);
      } catch (t3) {
        const n2 = t3;
        if (!(function __PRIVATE_canFallbackFromIndexedDbError(e4) {
          return "FirebaseError" === e4.name ? e4.code === N2.FAILED_PRECONDITION || e4.code === N2.UNIMPLEMENTED : !("undefined" != typeof DOMException && e4 instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
          // or an aborted error depending on whether the error happened during
          // schema migration.
          22 === e4.code || 20 === e4.code || // Firefox Private Browsing mode disables IndexedDb and returns
          // INVALID_STATE for any usage.
          11 === e4.code;
        })(n2)) throw n2;
        __PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + n2), await __PRIVATE_setOfflineComponentProvider(e3, new __PRIVATE_MemoryOfflineComponentProvider());
      }
    } else __PRIVATE_logDebug(on, "Using default OfflineComponentProvider"), await __PRIVATE_setOfflineComponentProvider(e3, new __PRIVATE_LruGcMemoryOfflineComponentProvider(void 0));
    return e3._offlineComponents;
  }
  async function __PRIVATE_ensureOnlineComponents(e3) {
    return e3._onlineComponents || (e3._uninitializedComponentsProvider ? (__PRIVATE_logDebug(on, "Using user provided OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e3, e3._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug(on, "Using default OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e3, new OnlineComponentProvider()))), e3._onlineComponents;
  }
  function __PRIVATE_getSyncEngine(e3) {
    return __PRIVATE_ensureOnlineComponents(e3).then(((e4) => e4.syncEngine));
  }
  async function __PRIVATE_getEventManager(e3) {
    const t3 = await __PRIVATE_ensureOnlineComponents(e3), n2 = t3.eventManager;
    return n2.onListen = __PRIVATE_syncEngineListen.bind(null, t3.syncEngine), n2.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, t3.syncEngine), n2.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(null, t3.syncEngine), n2.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(null, t3.syncEngine), n2;
  }
  function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(e3, t3, n2 = {}) {
    const r3 = new __PRIVATE_Deferred();
    return e3.asyncQueue.enqueueAndForget((async () => (function __PRIVATE_executeQueryViaSnapshotListener(e4, t4, n3, r4, i3) {
      const s3 = new __PRIVATE_AsyncObserver({
        next: (n4) => {
          s3.Nu(), t4.enqueueAndForget((() => __PRIVATE_eventManagerUnlisten(e4, o3))), n4.fromCache && "server" === r4.source ? i3.reject(new FirestoreError(N2.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i3.resolve(n4);
        },
        error: (e5) => i3.reject(e5)
      }), o3 = new __PRIVATE_QueryListener(n3, s3, {
        includeMetadataChanges: true,
        qa: true
      });
      return __PRIVATE_eventManagerListen(e4, o3);
    })(await __PRIVATE_getEventManager(e3), e3.asyncQueue, t3, n2, r3))), r3.promise;
  }
  function __PRIVATE_cloneLongPollingOptions(e3) {
    const t3 = {};
    return void 0 !== e3.timeoutSeconds && (t3.timeoutSeconds = e3.timeoutSeconds), t3;
  }
  var _n = /* @__PURE__ */ new Map();
  var an = "firestore.googleapis.com";
  var un = true;
  var FirestoreSettingsImpl = class {
    constructor(e3) {
      if (void 0 === e3.host) {
        if (void 0 !== e3.ssl) throw new FirestoreError(N2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
        this.host = an, this.ssl = un;
      } else this.host = e3.host, this.ssl = e3.ssl ?? un;
      if (this.isUsingEmulator = void 0 !== e3.emulatorOptions, this.credentials = e3.credentials, this.ignoreUndefinedProperties = !!e3.ignoreUndefinedProperties, this.localCache = e3.localCache, void 0 === e3.cacheSizeBytes) this.cacheSizeBytes = Ot;
      else {
        if (-1 !== e3.cacheSizeBytes && e3.cacheSizeBytes < Bt) throw new FirestoreError(N2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
        this.cacheSizeBytes = e3.cacheSizeBytes;
      }
      __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e3.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e3.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e3.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e3.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
        // For backwards compatibility, coerce the value to boolean even though
        // the TypeScript compiler has narrowed the type to boolean already.
        // noinspection PointlessBooleanExpressionJS
        this.experimentalAutoDetectLongPolling = !!e3.experimentalAutoDetectLongPolling
      ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(e3.experimentalLongPollingOptions ?? {}), (function __PRIVATE_validateLongPollingOptions(e4) {
        if (void 0 !== e4.timeoutSeconds) {
          if (isNaN(e4.timeoutSeconds)) throw new FirestoreError(N2.INVALID_ARGUMENT, `invalid long polling timeout: ${e4.timeoutSeconds} (must not be NaN)`);
          if (e4.timeoutSeconds < 5) throw new FirestoreError(N2.INVALID_ARGUMENT, `invalid long polling timeout: ${e4.timeoutSeconds} (minimum allowed value is 5)`);
          if (e4.timeoutSeconds > 30) throw new FirestoreError(N2.INVALID_ARGUMENT, `invalid long polling timeout: ${e4.timeoutSeconds} (maximum allowed value is 30)`);
        }
      })(this.experimentalLongPollingOptions), this.useFetchStreams = !!e3.useFetchStreams;
    }
    isEqual(e3) {
      return this.host === e3.host && this.ssl === e3.ssl && this.credentials === e3.credentials && this.cacheSizeBytes === e3.cacheSizeBytes && this.experimentalForceLongPolling === e3.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e3.experimentalAutoDetectLongPolling && (function __PRIVATE_longPollingOptionsEqual(e4, t3) {
        return e4.timeoutSeconds === t3.timeoutSeconds;
      })(this.experimentalLongPollingOptions, e3.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e3.ignoreUndefinedProperties && this.useFetchStreams === e3.useFetchStreams;
    }
  };
  var Firestore$1 = class {
    /** @hideconstructor */
    constructor(e3, t3, n2, r3) {
      this._authCredentials = e3, this._appCheckCredentials = t3, this._databaseId = n2, this._app = r3, /**
       * Whether it's a Firestore or Firestore Lite instance.
       */
      this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false, this._emulatorOptions = {}, // A task that is assigned when the terminate() is invoked and resolved when
      // all components have shut down. Otherwise, Firestore is not terminated,
      // which can mean either the FirestoreClient is in the process of starting,
      // or restarting.
      this._terminateTask = "notTerminated";
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */
    get app() {
      if (!this._app) throw new FirestoreError(N2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app;
    }
    get _initialized() {
      return this._settingsFrozen;
    }
    get _terminated() {
      return "notTerminated" !== this._terminateTask;
    }
    _setSettings(e3) {
      if (this._settingsFrozen) throw new FirestoreError(N2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
      this._settings = new FirestoreSettingsImpl(e3), this._emulatorOptions = e3.emulatorOptions || {}, void 0 !== e3.credentials && (this._authCredentials = (function __PRIVATE_makeAuthCredentialsProvider(e4) {
        if (!e4) return new __PRIVATE_EmptyAuthCredentialsProvider();
        switch (e4.type) {
          case "firstParty":
            return new __PRIVATE_FirstPartyAuthCredentialsProvider(e4.sessionIndex || "0", e4.iamToken || null, e4.authTokenFactory || null);
          case "provider":
            return e4.client;
          default:
            throw new FirestoreError(N2.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
        }
      })(e3.credentials));
    }
    _getSettings() {
      return this._settings;
    }
    _getEmulatorOptions() {
      return this._emulatorOptions;
    }
    _freezeSettings() {
      return this._settingsFrozen = true, this._settings;
    }
    _delete() {
      return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
    }
    async _restart() {
      "notTerminated" === this._terminateTask ? await this._terminate() : this._terminateTask = "notTerminated";
    }
    /** Returns a JSON-serializable representation of this `Firestore` instance. */
    toJSON() {
      return {
        app: this._app,
        databaseId: this._databaseId,
        settings: this._settings
      };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    _terminate() {
      return (function __PRIVATE_removeComponents(e3) {
        const t3 = _n.get(e3);
        t3 && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), _n.delete(e3), t3.terminate());
      })(this), Promise.resolve();
    }
  };
  function connectFirestoreEmulator(e3, t3, n2, r3 = {}) {
    e3 = __PRIVATE_cast(e3, Firestore$1);
    const i3 = isCloudWorkstation(t3), s3 = e3._getSettings(), o3 = {
      ...s3,
      emulatorOptions: e3._getEmulatorOptions()
    }, _2 = `${t3}:${n2}`;
    i3 && (pingServer(`https://${_2}`), updateEmulatorBanner("Firestore", true)), s3.host !== an && s3.host !== _2 && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
    const a3 = {
      ...s3,
      host: _2,
      ssl: i3,
      emulatorOptions: r3
    };
    if (!deepEqual(a3, o3) && (e3._setSettings(a3), r3.mockUserToken)) {
      let t4, n3;
      if ("string" == typeof r3.mockUserToken) t4 = r3.mockUserToken, n3 = User.MOCK_USER;
      else {
        t4 = createMockUserToken(r3.mockUserToken, e3._app?.options.projectId);
        const i4 = r3.mockUserToken.sub || r3.mockUserToken.user_id;
        if (!i4) throw new FirestoreError(N2.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
        n3 = new User(i4);
      }
      e3._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t4, n3));
    }
  }
  var Query = class _Query {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(e3, t3, n2) {
      this.converter = t3, this._query = n2, /** The type of this Firestore reference. */
      this.type = "query", this.firestore = e3;
    }
    withConverter(e3) {
      return new _Query(this.firestore, e3, this._query);
    }
  };
  var DocumentReference = class _DocumentReference {
    /** @hideconstructor */
    constructor(e3, t3, n2) {
      this.converter = t3, this._key = n2, /** The type of this Firestore reference. */
      this.type = "document", this.firestore = e3;
    }
    get _path() {
      return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */
    get id() {
      return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    get path() {
      return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */
    get parent() {
      return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(e3) {
      return new _DocumentReference(this.firestore, e3, this._key);
    }
    /**
     * Returns a JSON-serializable representation of this `DocumentReference` instance.
     *
     * @returns a JSON representation of this object.
     */
    toJSON() {
      return {
        type: _DocumentReference._jsonSchemaVersion,
        referencePath: this._key.toString()
      };
    }
    static fromJSON(e3, t3, n2) {
      if (__PRIVATE_validateJSON(t3, _DocumentReference._jsonSchema)) return new _DocumentReference(e3, n2 || null, new DocumentKey(ResourcePath.fromString(t3.referencePath)));
    }
  };
  DocumentReference._jsonSchemaVersion = "firestore/documentReference/1.0", DocumentReference._jsonSchema = {
    type: property("string", DocumentReference._jsonSchemaVersion),
    referencePath: property("string")
  };
  var CollectionReference = class _CollectionReference extends Query {
    /** @hideconstructor */
    constructor(e3, t3, n2) {
      super(e3, t3, __PRIVATE_newQueryForPath(n2)), this._path = n2, /** The type of this Firestore reference. */
      this.type = "collection";
    }
    /** The collection's identifier. */
    get id() {
      return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    get path() {
      return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */
    get parent() {
      const e3 = this._path.popLast();
      return e3.isEmpty() ? null : new DocumentReference(
        this.firestore,
        /* converter= */
        null,
        new DocumentKey(e3)
      );
    }
    withConverter(e3) {
      return new _CollectionReference(this.firestore, e3, this._path);
    }
  };
  function collection(e3, t3, ...n2) {
    if (e3 = getModularInstance(e3), __PRIVATE_validateNonEmptyArgument("collection", "path", t3), e3 instanceof Firestore$1) {
      const r3 = ResourcePath.fromString(t3, ...n2);
      return __PRIVATE_validateCollectionPath(r3), new CollectionReference(
        e3,
        /* converter= */
        null,
        r3
      );
    }
    {
      if (!(e3 instanceof DocumentReference || e3 instanceof CollectionReference)) throw new FirestoreError(N2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const r3 = e3._path.child(ResourcePath.fromString(t3, ...n2));
      return __PRIVATE_validateCollectionPath(r3), new CollectionReference(
        e3.firestore,
        /* converter= */
        null,
        r3
      );
    }
  }
  function doc(e3, t3, ...n2) {
    if (e3 = getModularInstance(e3), // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (t3 = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t3), e3 instanceof Firestore$1) {
      const r3 = ResourcePath.fromString(t3, ...n2);
      return __PRIVATE_validateDocumentPath(r3), new DocumentReference(
        e3,
        /* converter= */
        null,
        new DocumentKey(r3)
      );
    }
    {
      if (!(e3 instanceof DocumentReference || e3 instanceof CollectionReference)) throw new FirestoreError(N2.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const r3 = e3._path.child(ResourcePath.fromString(t3, ...n2));
      return __PRIVATE_validateDocumentPath(r3), new DocumentReference(e3.firestore, e3 instanceof CollectionReference ? e3.converter : null, new DocumentKey(r3));
    }
  }
  var cn = "AsyncQueue";
  var __PRIVATE_AsyncQueueImpl = class {
    constructor(e3 = Promise.resolve()) {
      this.Xu = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
      // be changed again.
      this.ec = false, // Operations scheduled to be queued in the future. Operations are
      // automatically removed after they are run or canceled.
      this.tc = [], // visible for testing
      this.nc = null, // Flag set while there's an outstanding AsyncQueue operation, used for
      // assertion sanity-checks.
      this.rc = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
      this.sc = false, // List of TimerIds to fast-forward delays for.
      this.oc = [], // Backoff timer used to schedule retries for retryable operations
      this.M_ = new __PRIVATE_ExponentialBackoff(
        this,
        "async_queue_retry"
        /* TimerId.AsyncQueueRetry */
      ), // Visibility handler that triggers an immediate retry of all retryable
      // operations. Meant to speed up recovery when we regain file system access
      // after page comes into foreground.
      this._c = () => {
        const e4 = getDocument();
        e4 && __PRIVATE_logDebug(cn, "Visibility state changed to " + e4.visibilityState), this.M_.w_();
      }, this.ac = e3;
      const t3 = getDocument();
      t3 && "function" == typeof t3.addEventListener && t3.addEventListener("visibilitychange", this._c);
    }
    get isShuttingDown() {
      return this.ec;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    enqueueAndForget(e3) {
      this.enqueue(e3);
    }
    enqueueAndForgetEvenWhileRestricted(e3) {
      this.uc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.cc(e3);
    }
    enterRestrictedMode(e3) {
      if (!this.ec) {
        this.ec = true, this.sc = e3 || false;
        const t3 = getDocument();
        t3 && "function" == typeof t3.removeEventListener && t3.removeEventListener("visibilitychange", this._c);
      }
    }
    enqueue(e3) {
      if (this.uc(), this.ec)
        return new Promise((() => {
        }));
      const t3 = new __PRIVATE_Deferred();
      return this.cc((() => this.ec && this.sc ? Promise.resolve() : (e3().then(t3.resolve, t3.reject), t3.promise))).then((() => t3.promise));
    }
    enqueueRetryable(e3) {
      this.enqueueAndForget((() => (this.Xu.push(e3), this.lc())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    async lc() {
      if (0 !== this.Xu.length) {
        try {
          await this.Xu[0](), this.Xu.shift(), this.M_.reset();
        } catch (e3) {
          if (!__PRIVATE_isIndexedDbTransactionError(e3)) throw e3;
          __PRIVATE_logDebug(cn, "Operation failed with retryable error: " + e3);
        }
        this.Xu.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
        // This is necessary to run retryable operations that failed during
        // their initial attempt since we don't know whether they are already
        // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
        // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
        // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
        // call scheduled here.
        // Since `backoffAndRun()` cancels an existing backoff and schedules a
        // new backoff on every call, there is only ever a single additional
        // operation in the queue.
        this.M_.p_((() => this.lc()));
      }
    }
    cc(e3) {
      const t3 = this.ac.then((() => (this.rc = true, e3().catch(((e4) => {
        this.nc = e4, this.rc = false;
        throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", __PRIVATE_getMessageOrStack(e4)), e4;
      })).then(((e4) => (this.rc = false, e4))))));
      return this.ac = t3, t3;
    }
    enqueueAfterDelay(e3, t3, n2) {
      this.uc(), // Fast-forward delays for timerIds that have been overridden.
      this.oc.indexOf(e3) > -1 && (t3 = 0);
      const r3 = DelayedOperation.createAndSchedule(this, e3, t3, n2, ((e4) => this.hc(e4)));
      return this.tc.push(r3), r3;
    }
    uc() {
      this.nc && fail(47125, {
        Pc: __PRIVATE_getMessageOrStack(this.nc)
      });
    }
    verifyOperationInProgress() {
    }
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    async Tc() {
      let e3;
      do {
        e3 = this.ac, await e3;
      } while (e3 !== this.ac);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    Ic(e3) {
      for (const t3 of this.tc) if (t3.timerId === e3) return true;
      return false;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    Ec(e3) {
      return this.Tc().then((() => {
        this.tc.sort(((e4, t3) => e4.targetTimeMs - t3.targetTimeMs));
        for (const t3 of this.tc) if (t3.skipDelay(), "all" !== e3 && t3.timerId === e3) break;
        return this.Tc();
      }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    dc(e3) {
      this.oc.push(e3);
    }
    /** Called once a DelayedOperation is run or canceled. */
    hc(e3) {
      const t3 = this.tc.indexOf(e3);
      this.tc.splice(t3, 1);
    }
  };
  function __PRIVATE_getMessageOrStack(e3) {
    let t3 = e3.message || "";
    return e3.stack && (t3 = e3.stack.includes(e3.message) ? e3.stack : e3.message + "\n" + e3.stack), t3;
  }
  var Firestore = class extends Firestore$1 {
    /** @hideconstructor */
    constructor(e3, t3, n2, r3) {
      super(e3, t3, n2, r3), /**
       * Whether it's a {@link Firestore} or Firestore Lite instance.
       */
      this.type = "firestore", this._queue = new __PRIVATE_AsyncQueueImpl(), this._persistenceKey = r3?.name || "[DEFAULT]";
    }
    async _terminate() {
      if (this._firestoreClient) {
        const e3 = this._firestoreClient.terminate();
        this._queue = new __PRIVATE_AsyncQueueImpl(e3), this._firestoreClient = void 0, await e3;
      }
    }
  };
  function getFirestore(e3, n2) {
    const r3 = "object" == typeof e3 ? e3 : getApp(), i3 = "string" == typeof e3 ? e3 : n2 || lt, s3 = _getProvider(r3, "firestore").getImmediate({
      identifier: i3
    });
    if (!s3._initialized) {
      const e4 = getDefaultEmulatorHostnameAndPort("firestore");
      e4 && connectFirestoreEmulator(s3, ...e4);
    }
    return s3;
  }
  function ensureFirestoreConfigured(e3) {
    if (e3._terminated) throw new FirestoreError(N2.FAILED_PRECONDITION, "The client has already been terminated.");
    return e3._firestoreClient || __PRIVATE_configureFirestore(e3), e3._firestoreClient;
  }
  function __PRIVATE_configureFirestore(e3) {
    const t3 = e3._freezeSettings(), n2 = (function __PRIVATE_makeDatabaseInfo(e4, t4, n3, r3) {
      return new DatabaseInfo(e4, t4, n3, r3.host, r3.ssl, r3.experimentalForceLongPolling, r3.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(r3.experimentalLongPollingOptions), r3.useFetchStreams, r3.isUsingEmulator);
    })(e3._databaseId, e3._app?.options.appId || "", e3._persistenceKey, t3);
    e3._componentsProvider || t3.localCache?._offlineComponentProvider && t3.localCache?._onlineComponentProvider && (e3._componentsProvider = {
      _offline: t3.localCache._offlineComponentProvider,
      _online: t3.localCache._onlineComponentProvider
    }), e3._firestoreClient = new FirestoreClient(e3._authCredentials, e3._appCheckCredentials, e3._queue, n2, e3._componentsProvider && (function __PRIVATE_buildComponentProvider(e4) {
      const t4 = e4?._online.build();
      return {
        _offline: e4?._offline.build(t4),
        _online: t4
      };
    })(e3._componentsProvider));
  }
  var Bytes = class _Bytes {
    /** @hideconstructor */
    constructor(e3) {
      this._byteString = e3;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */
    static fromBase64String(e3) {
      try {
        return new _Bytes(ByteString.fromBase64String(e3));
      } catch (e4) {
        throw new FirestoreError(N2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e4);
      }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    static fromUint8Array(e3) {
      return new _Bytes(ByteString.fromUint8Array(e3));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    toBase64() {
      return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    toUint8Array() {
      return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    toString() {
      return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    isEqual(e3) {
      return this._byteString.isEqual(e3._byteString);
    }
    /**
     * Returns a JSON-serializable representation of this `Bytes` instance.
     *
     * @returns a JSON representation of this object.
     */
    toJSON() {
      return {
        type: _Bytes._jsonSchemaVersion,
        bytes: this.toBase64()
      };
    }
    /**
     * Builds a `Bytes` instance from a JSON object created by {@link Bytes.toJSON}.
     *
     * @param json a JSON object represention of a `Bytes` instance
     * @returns an instance of {@link Bytes} if the JSON object could be parsed. Throws a
     * {@link FirestoreError} if an error occurs.
     */
    static fromJSON(e3) {
      if (__PRIVATE_validateJSON(e3, _Bytes._jsonSchema)) return _Bytes.fromBase64String(e3.bytes);
    }
  };
  Bytes._jsonSchemaVersion = "firestore/bytes/1.0", Bytes._jsonSchema = {
    type: property("string", Bytes._jsonSchemaVersion),
    bytes: property("string")
  };
  var FieldPath = class {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...e3) {
      for (let t3 = 0; t3 < e3.length; ++t3) if (0 === e3[t3].length) throw new FirestoreError(N2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      this._internalPath = new FieldPath$1(e3);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */
    isEqual(e3) {
      return this._internalPath.isEqual(e3._internalPath);
    }
  };
  var FieldValue = class {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(e3) {
      this._methodName = e3;
    }
  };
  var GeoPoint = class _GeoPoint {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(e3, t3) {
      if (!isFinite(e3) || e3 < -90 || e3 > 90) throw new FirestoreError(N2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e3);
      if (!isFinite(t3) || t3 < -180 || t3 > 180) throw new FirestoreError(N2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t3);
      this._lat = e3, this._long = t3;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */
    get latitude() {
      return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */
    get longitude() {
      return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    isEqual(e3) {
      return this._lat === e3._lat && this._long === e3._long;
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    _compareTo(e3) {
      return __PRIVATE_primitiveComparator(this._lat, e3._lat) || __PRIVATE_primitiveComparator(this._long, e3._long);
    }
    /**
     * Returns a JSON-serializable representation of this `GeoPoint` instance.
     *
     * @returns a JSON representation of this object.
     */
    toJSON() {
      return {
        latitude: this._lat,
        longitude: this._long,
        type: _GeoPoint._jsonSchemaVersion
      };
    }
    /**
     * Builds a `GeoPoint` instance from a JSON object created by {@link GeoPoint.toJSON}.
     *
     * @param json a JSON object represention of a `GeoPoint` instance
     * @returns an instance of {@link GeoPoint} if the JSON object could be parsed. Throws a
     * {@link FirestoreError} if an error occurs.
     */
    static fromJSON(e3) {
      if (__PRIVATE_validateJSON(e3, _GeoPoint._jsonSchema)) return new _GeoPoint(e3.latitude, e3.longitude);
    }
  };
  GeoPoint._jsonSchemaVersion = "firestore/geoPoint/1.0", GeoPoint._jsonSchema = {
    type: property("string", GeoPoint._jsonSchemaVersion),
    latitude: property("number"),
    longitude: property("number")
  };
  var VectorValue = class _VectorValue {
    /**
     * @private
     * @internal
     */
    constructor(e3) {
      this._values = (e3 || []).map(((e4) => e4));
    }
    /**
     * Returns a copy of the raw number array form of the vector.
     */
    toArray() {
      return this._values.map(((e3) => e3));
    }
    /**
     * Returns `true` if the two `VectorValue` values have the same raw number arrays, returns `false` otherwise.
     */
    isEqual(e3) {
      return (function __PRIVATE_isPrimitiveArrayEqual(e4, t3) {
        if (e4.length !== t3.length) return false;
        for (let n2 = 0; n2 < e4.length; ++n2) if (e4[n2] !== t3[n2]) return false;
        return true;
      })(this._values, e3._values);
    }
    /**
     * Returns a JSON-serializable representation of this `VectorValue` instance.
     *
     * @returns a JSON representation of this object.
     */
    toJSON() {
      return {
        type: _VectorValue._jsonSchemaVersion,
        vectorValues: this._values
      };
    }
    /**
     * Builds a `VectorValue` instance from a JSON object created by {@link VectorValue.toJSON}.
     *
     * @param json a JSON object represention of a `VectorValue` instance.
     * @returns an instance of {@link VectorValue} if the JSON object could be parsed. Throws a
     * {@link FirestoreError} if an error occurs.
     */
    static fromJSON(e3) {
      if (__PRIVATE_validateJSON(e3, _VectorValue._jsonSchema)) {
        if (Array.isArray(e3.vectorValues) && e3.vectorValues.every(((e4) => "number" == typeof e4))) return new _VectorValue(e3.vectorValues);
        throw new FirestoreError(N2.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
      }
    }
  };
  VectorValue._jsonSchemaVersion = "firestore/vectorValue/1.0", VectorValue._jsonSchema = {
    type: property("string", VectorValue._jsonSchemaVersion),
    vectorValues: property("object")
  };
  var hn = /^__.*__$/;
  var ParsedSetData = class {
    constructor(e3, t3, n2) {
      this.data = e3, this.fieldMask = t3, this.fieldTransforms = n2;
    }
    toMutation(e3, t3) {
      return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e3, this.data, this.fieldMask, t3, this.fieldTransforms) : new __PRIVATE_SetMutation(e3, this.data, t3, this.fieldTransforms);
    }
  };
  var ParsedUpdateData = class {
    constructor(e3, t3, n2) {
      this.data = e3, this.fieldMask = t3, this.fieldTransforms = n2;
    }
    toMutation(e3, t3) {
      return new __PRIVATE_PatchMutation(e3, this.data, this.fieldMask, t3, this.fieldTransforms);
    }
  };
  function __PRIVATE_isWrite(e3) {
    switch (e3) {
      case 0:
      // fall through
      case 2:
      // fall through
      case 1:
        return true;
      case 3:
      case 4:
        return false;
      default:
        throw fail(40011, {
          Ac: e3
        });
    }
  }
  var __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(e3, t3, n2, r3, i3, s3) {
      this.settings = e3, this.databaseId = t3, this.serializer = n2, this.ignoreUndefinedProperties = r3, // Minor hack: If fieldTransforms is undefined, we assume this is an
      // external call and we need to validate the entire path.
      void 0 === i3 && this.Rc(), this.fieldTransforms = i3 || [], this.fieldMask = s3 || [];
    }
    get path() {
      return this.settings.path;
    }
    get Ac() {
      return this.settings.Ac;
    }
    /** Returns a new context with the specified settings overwritten. */
    Vc(e3) {
      return new ___PRIVATE_ParseContextImpl({
        ...this.settings,
        ...e3
      }, this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    mc(e3) {
      const t3 = this.path?.child(e3), n2 = this.Vc({
        path: t3,
        fc: false
      });
      return n2.gc(e3), n2;
    }
    yc(e3) {
      const t3 = this.path?.child(e3), n2 = this.Vc({
        path: t3,
        fc: false
      });
      return n2.Rc(), n2;
    }
    wc(e3) {
      return this.Vc({
        path: void 0,
        fc: true
      });
    }
    Sc(e3) {
      return __PRIVATE_createError(e3, this.settings.methodName, this.settings.bc || false, this.path, this.settings.Dc);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    contains(e3) {
      return void 0 !== this.fieldMask.find(((t3) => e3.isPrefixOf(t3))) || void 0 !== this.fieldTransforms.find(((t3) => e3.isPrefixOf(t3.field)));
    }
    Rc() {
      if (this.path) for (let e3 = 0; e3 < this.path.length; e3++) this.gc(this.path.get(e3));
    }
    gc(e3) {
      if (0 === e3.length) throw this.Sc("Document fields must not be empty");
      if (__PRIVATE_isWrite(this.Ac) && hn.test(e3)) throw this.Sc('Document fields cannot begin and end with "__"');
    }
  };
  var __PRIVATE_UserDataReader = class {
    constructor(e3, t3, n2) {
      this.databaseId = e3, this.ignoreUndefinedProperties = t3, this.serializer = n2 || __PRIVATE_newSerializer(e3);
    }
    /** Creates a new top-level parse context. */
    Cc(e3, t3, n2, r3 = false) {
      return new __PRIVATE_ParseContextImpl({
        Ac: e3,
        methodName: t3,
        Dc: n2,
        path: FieldPath$1.emptyPath(),
        fc: false,
        bc: r3
      }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
    }
  };
  function __PRIVATE_newUserDataReader(e3) {
    const t3 = e3._freezeSettings(), n2 = __PRIVATE_newSerializer(e3._databaseId);
    return new __PRIVATE_UserDataReader(e3._databaseId, !!t3.ignoreUndefinedProperties, n2);
  }
  function __PRIVATE_parseSetData(e3, t3, n2, r3, i3, s3 = {}) {
    const o3 = e3.Cc(s3.merge || s3.mergeFields ? 2 : 0, t3, n2, i3);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", o3, r3);
    const _2 = __PRIVATE_parseObject(r3, o3);
    let a3, u4;
    if (s3.merge) a3 = new FieldMask(o3.fieldMask), u4 = o3.fieldTransforms;
    else if (s3.mergeFields) {
      const e4 = [];
      for (const r4 of s3.mergeFields) {
        const i4 = __PRIVATE_fieldPathFromArgument$1(t3, r4, n2);
        if (!o3.contains(i4)) throw new FirestoreError(N2.INVALID_ARGUMENT, `Field '${i4}' is specified in your field mask but missing from your input data.`);
        __PRIVATE_fieldMaskContains(e4, i4) || e4.push(i4);
      }
      a3 = new FieldMask(e4), u4 = o3.fieldTransforms.filter(((e5) => a3.covers(e5.field)));
    } else a3 = null, u4 = o3.fieldTransforms;
    return new ParsedSetData(new ObjectValue(_2), a3, u4);
  }
  var __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
    _toFieldTransform(e3) {
      if (2 !== e3.Ac) throw 1 === e3.Ac ? e3.Sc(`${this._methodName}() can only appear at the top level of your update data`) : e3.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
      return e3.fieldMask.push(e3.path), null;
    }
    isEqual(e3) {
      return e3 instanceof ___PRIVATE_DeleteFieldValueImpl;
    }
  };
  function __PRIVATE_createSentinelChildContext(e3, t3, n2) {
    return new __PRIVATE_ParseContextImpl({
      Ac: 3,
      Dc: t3.settings.Dc,
      methodName: e3._methodName,
      fc: n2
    }, t3.databaseId, t3.serializer, t3.ignoreUndefinedProperties);
  }
  var __PRIVATE_ServerTimestampFieldValueImpl = class ___PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
    _toFieldTransform(e3) {
      return new FieldTransform(e3.path, new __PRIVATE_ServerTimestampTransform());
    }
    isEqual(e3) {
      return e3 instanceof ___PRIVATE_ServerTimestampFieldValueImpl;
    }
  };
  var __PRIVATE_ArrayUnionFieldValueImpl = class ___PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
    constructor(e3, t3) {
      super(e3), this.vc = t3;
    }
    _toFieldTransform(e3) {
      const t3 = __PRIVATE_createSentinelChildContext(
        this,
        e3,
        /*array=*/
        true
      ), n2 = this.vc.map(((e4) => __PRIVATE_parseData(e4, t3))), r3 = new __PRIVATE_ArrayUnionTransformOperation(n2);
      return new FieldTransform(e3.path, r3);
    }
    isEqual(e3) {
      return e3 instanceof ___PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.vc, e3.vc);
    }
  };
  var __PRIVATE_ArrayRemoveFieldValueImpl = class ___PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
    constructor(e3, t3) {
      super(e3), this.vc = t3;
    }
    _toFieldTransform(e3) {
      const t3 = __PRIVATE_createSentinelChildContext(
        this,
        e3,
        /*array=*/
        true
      ), n2 = this.vc.map(((e4) => __PRIVATE_parseData(e4, t3))), r3 = new __PRIVATE_ArrayRemoveTransformOperation(n2);
      return new FieldTransform(e3.path, r3);
    }
    isEqual(e3) {
      return e3 instanceof ___PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.vc, e3.vc);
    }
  };
  var __PRIVATE_NumericIncrementFieldValueImpl = class ___PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
    constructor(e3, t3) {
      super(e3), this.Fc = t3;
    }
    _toFieldTransform(e3) {
      const t3 = new __PRIVATE_NumericIncrementTransformOperation(e3.serializer, toNumber(e3.serializer, this.Fc));
      return new FieldTransform(e3.path, t3);
    }
    isEqual(e3) {
      return e3 instanceof ___PRIVATE_NumericIncrementFieldValueImpl && this.Fc === e3.Fc;
    }
  };
  function __PRIVATE_parseUpdateData(e3, t3, n2, r3) {
    const i3 = e3.Cc(1, t3, n2);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", i3, r3);
    const s3 = [], o3 = ObjectValue.empty();
    forEach(r3, ((e4, r4) => {
      const _3 = __PRIVATE_fieldPathFromDotSeparatedString(t3, e4, n2);
      r4 = getModularInstance(r4);
      const a3 = i3.yc(_3);
      if (r4 instanceof __PRIVATE_DeleteFieldValueImpl)
        s3.push(_3);
      else {
        const e5 = __PRIVATE_parseData(r4, a3);
        null != e5 && (s3.push(_3), o3.set(_3, e5));
      }
    }));
    const _2 = new FieldMask(s3);
    return new ParsedUpdateData(o3, _2, i3.fieldTransforms);
  }
  function __PRIVATE_parseUpdateVarargs(e3, t3, n2, r3, i3, s3) {
    const o3 = e3.Cc(1, t3, n2), _2 = [__PRIVATE_fieldPathFromArgument$1(t3, r3, n2)], a3 = [i3];
    if (s3.length % 2 != 0) throw new FirestoreError(N2.INVALID_ARGUMENT, `Function ${t3}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let e4 = 0; e4 < s3.length; e4 += 2) _2.push(__PRIVATE_fieldPathFromArgument$1(t3, s3[e4])), a3.push(s3[e4 + 1]);
    const u4 = [], c3 = ObjectValue.empty();
    for (let e4 = _2.length - 1; e4 >= 0; --e4) if (!__PRIVATE_fieldMaskContains(u4, _2[e4])) {
      const t4 = _2[e4];
      let n3 = a3[e4];
      n3 = getModularInstance(n3);
      const r4 = o3.yc(t4);
      if (n3 instanceof __PRIVATE_DeleteFieldValueImpl)
        u4.push(t4);
      else {
        const e5 = __PRIVATE_parseData(n3, r4);
        null != e5 && (u4.push(t4), c3.set(t4, e5));
      }
    }
    const l3 = new FieldMask(u4);
    return new ParsedUpdateData(c3, l3, o3.fieldTransforms);
  }
  function __PRIVATE_parseQueryValue(e3, t3, n2, r3 = false) {
    return __PRIVATE_parseData(n2, e3.Cc(r3 ? 4 : 3, t3));
  }
  function __PRIVATE_parseData(e3, t3) {
    if (__PRIVATE_looksLikeJsonObject(
      // Unwrap the API type from the Compat SDK. This will return the API type
      // from firestore-exp.
      e3 = getModularInstance(e3)
    )) return __PRIVATE_validatePlainObject("Unsupported field value:", t3, e3), __PRIVATE_parseObject(e3, t3);
    if (e3 instanceof FieldValue)
      return (function __PRIVATE_parseSentinelFieldValue(e4, t4) {
        if (!__PRIVATE_isWrite(t4.Ac)) throw t4.Sc(`${e4._methodName}() can only be used with update() and set()`);
        if (!t4.path) throw t4.Sc(`${e4._methodName}() is not currently supported inside arrays`);
        const n2 = e4._toFieldTransform(t4);
        n2 && t4.fieldTransforms.push(n2);
      })(e3, t3), null;
    if (void 0 === e3 && t3.ignoreUndefinedProperties)
      return null;
    if (
      // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      t3.path && t3.fieldMask.push(t3.path), e3 instanceof Array
    ) {
      if (t3.settings.fc && 4 !== t3.Ac) throw t3.Sc("Nested arrays are not supported");
      return (function __PRIVATE_parseArray(e4, t4) {
        const n2 = [];
        let r3 = 0;
        for (const i3 of e4) {
          let e5 = __PRIVATE_parseData(i3, t4.wc(r3));
          null == e5 && // Just include nulls in the array for fields being replaced with a
          // sentinel.
          (e5 = {
            nullValue: "NULL_VALUE"
          }), n2.push(e5), r3++;
        }
        return {
          arrayValue: {
            values: n2
          }
        };
      })(e3, t3);
    }
    return (function __PRIVATE_parseScalarValue(e4, t4) {
      if (null === (e4 = getModularInstance(e4))) return {
        nullValue: "NULL_VALUE"
      };
      if ("number" == typeof e4) return toNumber(t4.serializer, e4);
      if ("boolean" == typeof e4) return {
        booleanValue: e4
      };
      if ("string" == typeof e4) return {
        stringValue: e4
      };
      if (e4 instanceof Date) {
        const n2 = Timestamp.fromDate(e4);
        return {
          timestampValue: toTimestamp(t4.serializer, n2)
        };
      }
      if (e4 instanceof Timestamp) {
        const n2 = new Timestamp(e4.seconds, 1e3 * Math.floor(e4.nanoseconds / 1e3));
        return {
          timestampValue: toTimestamp(t4.serializer, n2)
        };
      }
      if (e4 instanceof GeoPoint) return {
        geoPointValue: {
          latitude: e4.latitude,
          longitude: e4.longitude
        }
      };
      if (e4 instanceof Bytes) return {
        bytesValue: __PRIVATE_toBytes(t4.serializer, e4._byteString)
      };
      if (e4 instanceof DocumentReference) {
        const n2 = t4.databaseId, r3 = e4.firestore._databaseId;
        if (!r3.isEqual(n2)) throw t4.Sc(`Document reference is for database ${r3.projectId}/${r3.database} but should be for database ${n2.projectId}/${n2.database}`);
        return {
          referenceValue: __PRIVATE_toResourceName(e4.firestore._databaseId || t4.databaseId, e4._key.path)
        };
      }
      if (e4 instanceof VectorValue)
        return (function __PRIVATE_parseVectorValue(e5, t5) {
          const n2 = {
            fields: {
              [ht]: {
                stringValue: It
              },
              [Et]: {
                arrayValue: {
                  values: e5.toArray().map(((e6) => {
                    if ("number" != typeof e6) throw t5.Sc("VectorValues must only contain numeric values.");
                    return __PRIVATE_toDouble(t5.serializer, e6);
                  }))
                }
              }
            }
          };
          return {
            mapValue: n2
          };
        })(e4, t4);
      throw t4.Sc(`Unsupported field value: ${__PRIVATE_valueDescription(e4)}`);
    })(e3, t3);
  }
  function __PRIVATE_parseObject(e3, t3) {
    const n2 = {};
    return isEmpty2(e3) ? (
      // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      t3.path && t3.path.length > 0 && t3.fieldMask.push(t3.path)
    ) : forEach(e3, ((e4, r3) => {
      const i3 = __PRIVATE_parseData(r3, t3.mc(e4));
      null != i3 && (n2[e4] = i3);
    })), {
      mapValue: {
        fields: n2
      }
    };
  }
  function __PRIVATE_looksLikeJsonObject(e3) {
    return !("object" != typeof e3 || null === e3 || e3 instanceof Array || e3 instanceof Date || e3 instanceof Timestamp || e3 instanceof GeoPoint || e3 instanceof Bytes || e3 instanceof DocumentReference || e3 instanceof FieldValue || e3 instanceof VectorValue);
  }
  function __PRIVATE_validatePlainObject(e3, t3, n2) {
    if (!__PRIVATE_looksLikeJsonObject(n2) || !__PRIVATE_isPlainObject(n2)) {
      const r3 = __PRIVATE_valueDescription(n2);
      throw "an object" === r3 ? t3.Sc(e3 + " a custom object") : t3.Sc(e3 + " " + r3);
    }
  }
  function __PRIVATE_fieldPathFromArgument$1(e3, t3, n2) {
    if (
      // If required, replace the FieldPath Compat class with the firestore-exp
      // FieldPath.
      (t3 = getModularInstance(t3)) instanceof FieldPath
    ) return t3._internalPath;
    if ("string" == typeof t3) return __PRIVATE_fieldPathFromDotSeparatedString(e3, t3);
    throw __PRIVATE_createError(
      "Field path arguments must be of type string or ",
      e3,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n2
    );
  }
  var Pn = new RegExp("[~\\*/\\[\\]]");
  function __PRIVATE_fieldPathFromDotSeparatedString(e3, t3, n2) {
    if (t3.search(Pn) >= 0) throw __PRIVATE_createError(
      `Invalid field path (${t3}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e3,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n2
    );
    try {
      return new FieldPath(...t3.split("."))._internalPath;
    } catch (r3) {
      throw __PRIVATE_createError(
        `Invalid field path (${t3}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        e3,
        /* hasConverter= */
        false,
        /* path= */
        void 0,
        n2
      );
    }
  }
  function __PRIVATE_createError(e3, t3, n2, r3, i3) {
    const s3 = r3 && !r3.isEmpty(), o3 = void 0 !== i3;
    let _2 = `Function ${t3}() called with invalid data`;
    n2 && (_2 += " (via `toFirestore()`)"), _2 += ". ";
    let a3 = "";
    return (s3 || o3) && (a3 += " (found", s3 && (a3 += ` in field ${r3}`), o3 && (a3 += ` in document ${i3}`), a3 += ")"), new FirestoreError(N2.INVALID_ARGUMENT, _2 + e3 + a3);
  }
  function __PRIVATE_fieldMaskContains(e3, t3) {
    return e3.some(((e4) => e4.isEqual(t3)));
  }
  var DocumentSnapshot$1 = class {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(e3, t3, n2, r3, i3) {
      this._firestore = e3, this._userDataWriter = t3, this._key = n2, this._document = r3, this._converter = i3;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */
    get id() {
      return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */
    get ref() {
      return new DocumentReference(this._firestore, this._converter, this._key);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    exists() {
      return null !== this._document;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    data() {
      if (this._document) {
        if (this._converter) {
          const e3 = new QueryDocumentSnapshot$1(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            /* converter= */
            null
          );
          return this._converter.fromFirestore(e3);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
      }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(e3) {
      if (this._document) {
        const t3 = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e3));
        if (null !== t3) return this._userDataWriter.convertValue(t3);
      }
    }
  };
  var QueryDocumentSnapshot$1 = class extends DocumentSnapshot$1 {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
      return super.data();
    }
  };
  function __PRIVATE_fieldPathFromArgument(e3, t3) {
    return "string" == typeof t3 ? __PRIVATE_fieldPathFromDotSeparatedString(e3, t3) : t3 instanceof FieldPath ? t3._internalPath : t3._delegate._internalPath;
  }
  function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e3) {
    if ("L" === e3.limitType && 0 === e3.explicitOrderBy.length) throw new FirestoreError(N2.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
  }
  var AppliableConstraint = class {
  };
  var QueryConstraint = class extends AppliableConstraint {
  };
  function query(e3, t3, ...n2) {
    let r3 = [];
    t3 instanceof AppliableConstraint && r3.push(t3), r3 = r3.concat(n2), (function __PRIVATE_validateQueryConstraintArray(e4) {
      const t4 = e4.filter(((e5) => e5 instanceof QueryCompositeFilterConstraint)).length, n3 = e4.filter(((e5) => e5 instanceof QueryFieldFilterConstraint)).length;
      if (t4 > 1 || t4 > 0 && n3 > 0) throw new FirestoreError(N2.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
    })(r3);
    for (const t4 of r3) e3 = t4._apply(e3);
    return e3;
  }
  var QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
    /**
     * @internal
     */
    constructor(e3, t3, n2) {
      super(), this._field = e3, this._op = t3, this._value = n2, /** The type of this query constraint */
      this.type = "where";
    }
    static _create(e3, t3, n2) {
      return new _QueryFieldFilterConstraint(e3, t3, n2);
    }
    _apply(e3) {
      const t3 = this._parse(e3);
      return __PRIVATE_validateNewFieldFilter(e3._query, t3), new Query(e3.firestore, e3.converter, __PRIVATE_queryWithAddedFilter(e3._query, t3));
    }
    _parse(e3) {
      const t3 = __PRIVATE_newUserDataReader(e3.firestore), n2 = (function __PRIVATE_newQueryFilter(e4, t4, n3, r3, i3, s3, o3) {
        let _2;
        if (i3.isKeyField()) {
          if ("array-contains" === s3 || "array-contains-any" === s3) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid Query. You can't perform '${s3}' queries on documentId().`);
          if ("in" === s3 || "not-in" === s3) {
            __PRIVATE_validateDisjunctiveFilterElements(o3, s3);
            const t5 = [];
            for (const n4 of o3) t5.push(__PRIVATE_parseDocumentIdValue(r3, e4, n4));
            _2 = {
              arrayValue: {
                values: t5
              }
            };
          } else _2 = __PRIVATE_parseDocumentIdValue(r3, e4, o3);
        } else "in" !== s3 && "not-in" !== s3 && "array-contains-any" !== s3 || __PRIVATE_validateDisjunctiveFilterElements(o3, s3), _2 = __PRIVATE_parseQueryValue(
          n3,
          t4,
          o3,
          /* allowArrays= */
          "in" === s3 || "not-in" === s3
        );
        const a3 = FieldFilter.create(i3, s3, _2);
        return a3;
      })(e3._query, "where", t3, e3.firestore._databaseId, this._field, this._op, this._value);
      return n2;
    }
  };
  function where(e3, t3, n2) {
    const r3 = t3, i3 = __PRIVATE_fieldPathFromArgument("where", e3);
    return QueryFieldFilterConstraint._create(i3, r3, n2);
  }
  var QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
    /**
     * @internal
     */
    constructor(e3, t3) {
      super(), this.type = e3, this._queryConstraints = t3;
    }
    static _create(e3, t3) {
      return new _QueryCompositeFilterConstraint(e3, t3);
    }
    _parse(e3) {
      const t3 = this._queryConstraints.map(((t4) => t4._parse(e3))).filter(((e4) => e4.getFilters().length > 0));
      return 1 === t3.length ? t3[0] : CompositeFilter.create(t3, this._getOperator());
    }
    _apply(e3) {
      const t3 = this._parse(e3);
      return 0 === t3.getFilters().length ? e3 : ((function __PRIVATE_validateNewFilter(e4, t4) {
        let n2 = e4;
        const r3 = t4.getFlattenedFilters();
        for (const e5 of r3) __PRIVATE_validateNewFieldFilter(n2, e5), n2 = __PRIVATE_queryWithAddedFilter(n2, e5);
      })(e3._query, t3), new Query(e3.firestore, e3.converter, __PRIVATE_queryWithAddedFilter(e3._query, t3)));
    }
    _getQueryConstraints() {
      return this._queryConstraints;
    }
    _getOperator() {
      return "and" === this.type ? "and" : "or";
    }
  };
  function __PRIVATE_parseDocumentIdValue(e3, t3, n2) {
    if ("string" == typeof (n2 = getModularInstance(n2))) {
      if ("" === n2) throw new FirestoreError(N2.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
      if (!__PRIVATE_isCollectionGroupQuery(t3) && -1 !== n2.indexOf("/")) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n2}' contains a '/' character.`);
      const r3 = t3.path.child(ResourcePath.fromString(n2));
      if (!DocumentKey.isDocumentKey(r3)) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r3}' is not because it has an odd number of segments (${r3.length}).`);
      return __PRIVATE_refValue(e3, new DocumentKey(r3));
    }
    if (n2 instanceof DocumentReference) return __PRIVATE_refValue(e3, n2._key);
    throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(n2)}.`);
  }
  function __PRIVATE_validateDisjunctiveFilterElements(e3, t3) {
    if (!Array.isArray(e3) || 0 === e3.length) throw new FirestoreError(N2.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t3.toString()}' filters.`);
  }
  function __PRIVATE_validateNewFieldFilter(e3, t3) {
    const n2 = (function __PRIVATE_findOpInsideFilters(e4, t4) {
      for (const n3 of e4) for (const e5 of n3.getFlattenedFilters()) if (t4.indexOf(e5.op) >= 0) return e5.op;
      return null;
    })(e3.filters, (function __PRIVATE_conflictingOps(e4) {
      switch (e4) {
        case "!=":
          return [
            "!=",
            "not-in"
            /* Operator.NOT_IN */
          ];
        case "array-contains-any":
        case "in":
          return [
            "not-in"
            /* Operator.NOT_IN */
          ];
        case "not-in":
          return [
            "array-contains-any",
            "in",
            "not-in",
            "!="
            /* Operator.NOT_EQUAL */
          ];
        default:
          return [];
      }
    })(t3.op));
    if (null !== n2)
      throw n2 === t3.op ? new FirestoreError(N2.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t3.op.toString()}' filter.`) : new FirestoreError(N2.INVALID_ARGUMENT, `Invalid query. You cannot use '${t3.op.toString()}' filters with '${n2.toString()}' filters.`);
  }
  var AbstractUserDataWriter = class {
    convertValue(e3, t3 = "none") {
      switch (__PRIVATE_typeOrder(e3)) {
        case 0:
          return null;
        case 1:
          return e3.booleanValue;
        case 2:
          return __PRIVATE_normalizeNumber(e3.integerValue || e3.doubleValue);
        case 3:
          return this.convertTimestamp(e3.timestampValue);
        case 4:
          return this.convertServerTimestamp(e3, t3);
        case 5:
          return e3.stringValue;
        case 6:
          return this.convertBytes(__PRIVATE_normalizeByteString(e3.bytesValue));
        case 7:
          return this.convertReference(e3.referenceValue);
        case 8:
          return this.convertGeoPoint(e3.geoPointValue);
        case 9:
          return this.convertArray(e3.arrayValue, t3);
        case 11:
          return this.convertObject(e3.mapValue, t3);
        case 10:
          return this.convertVectorValue(e3.mapValue);
        default:
          throw fail(62114, {
            value: e3
          });
      }
    }
    convertObject(e3, t3) {
      return this.convertObjectMap(e3.fields, t3);
    }
    /**
     * @internal
     */
    convertObjectMap(e3, t3 = "none") {
      const n2 = {};
      return forEach(e3, ((e4, r3) => {
        n2[e4] = this.convertValue(r3, t3);
      })), n2;
    }
    /**
     * @internal
     */
    convertVectorValue(e3) {
      const t3 = e3.fields?.[Et].arrayValue?.values?.map(((e4) => __PRIVATE_normalizeNumber(e4.doubleValue)));
      return new VectorValue(t3);
    }
    convertGeoPoint(e3) {
      return new GeoPoint(__PRIVATE_normalizeNumber(e3.latitude), __PRIVATE_normalizeNumber(e3.longitude));
    }
    convertArray(e3, t3) {
      return (e3.values || []).map(((e4) => this.convertValue(e4, t3)));
    }
    convertServerTimestamp(e3, t3) {
      switch (t3) {
        case "previous":
          const n2 = __PRIVATE_getPreviousValue(e3);
          return null == n2 ? null : this.convertValue(n2, t3);
        case "estimate":
          return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e3));
        default:
          return null;
      }
    }
    convertTimestamp(e3) {
      const t3 = __PRIVATE_normalizeTimestamp(e3);
      return new Timestamp(t3.seconds, t3.nanos);
    }
    convertDocumentKey(e3, t3) {
      const n2 = ResourcePath.fromString(e3);
      __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(n2), 9688, {
        name: e3
      });
      const r3 = new DatabaseId(n2.get(1), n2.get(3)), i3 = new DocumentKey(n2.popFirst(5));
      return r3.isEqual(t3) || // TODO(b/64130202): Somehow support foreign references.
      __PRIVATE_logError(`Document ${i3} contains a document reference within a different database (${r3.projectId}/${r3.database}) which is not supported. It will be treated as a reference in the current database (${t3.projectId}/${t3.database}) instead.`), i3;
    }
  };
  function __PRIVATE_applyFirestoreDataConverter(e3, t3, n2) {
    let r3;
    return r3 = e3 ? n2 && (n2.merge || n2.mergeFields) ? e3.toFirestore(t3, n2) : e3.toFirestore(t3) : t3, r3;
  }
  var SnapshotMetadata = class {
    /** @hideconstructor */
    constructor(e3, t3) {
      this.hasPendingWrites = e3, this.fromCache = t3;
    }
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */
    isEqual(e3) {
      return this.hasPendingWrites === e3.hasPendingWrites && this.fromCache === e3.fromCache;
    }
  };
  var DocumentSnapshot = class _DocumentSnapshot extends DocumentSnapshot$1 {
    /** @hideconstructor protected */
    constructor(e3, t3, n2, r3, i3, s3) {
      super(e3, t3, n2, r3, s3), this._firestore = e3, this._firestoreImpl = e3, this.metadata = i3;
    }
    /**
     * Returns whether or not the data exists. True if the document exists.
     */
    exists() {
      return super.exists();
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    data(e3 = {}) {
      if (this._document) {
        if (this._converter) {
          const t3 = new QueryDocumentSnapshot(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            this.metadata,
            /* converter= */
            null
          );
          return this._converter.fromFirestore(t3, e3);
        }
        return this._userDataWriter.convertValue(this._document.data.value, e3.serverTimestamps);
      }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(e3, t3 = {}) {
      if (this._document) {
        const n2 = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e3));
        if (null !== n2) return this._userDataWriter.convertValue(n2, t3.serverTimestamps);
      }
    }
    /**
     * Returns a JSON-serializable representation of this `DocumentSnapshot` instance.
     *
     * @returns a JSON representation of this object.  Throws a {@link FirestoreError} if this
     * `DocumentSnapshot` has pending writes.
     */
    toJSON() {
      if (this.metadata.hasPendingWrites) throw new FirestoreError(N2.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
      const e3 = this._document, t3 = {};
      if (t3.type = _DocumentSnapshot._jsonSchemaVersion, t3.bundle = "", t3.bundleSource = "DocumentSnapshot", t3.bundleName = this._key.toString(), !e3 || !e3.isValidDocument() || !e3.isFoundDocument()) return t3;
      this._userDataWriter.convertObjectMap(e3.data.value.mapValue.fields, "previous");
      return t3.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED"), t3;
    }
  };
  DocumentSnapshot._jsonSchemaVersion = "firestore/documentSnapshot/1.0", DocumentSnapshot._jsonSchema = {
    type: property("string", DocumentSnapshot._jsonSchemaVersion),
    bundleSource: property("string", "DocumentSnapshot"),
    bundleName: property("string"),
    bundle: property("string")
  };
  var QueryDocumentSnapshot = class extends DocumentSnapshot {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */
    data(e3 = {}) {
      return super.data(e3);
    }
  };
  var QuerySnapshot = class _QuerySnapshot {
    /** @hideconstructor */
    constructor(e3, t3, n2, r3) {
      this._firestore = e3, this._userDataWriter = t3, this._snapshot = r3, this.metadata = new SnapshotMetadata(r3.hasPendingWrites, r3.fromCache), this.query = n2;
    }
    /** An array of all the documents in the `QuerySnapshot`. */
    get docs() {
      const e3 = [];
      return this.forEach(((t3) => e3.push(t3))), e3;
    }
    /** The number of documents in the `QuerySnapshot`. */
    get size() {
      return this._snapshot.docs.size;
    }
    /** True if there are no documents in the `QuerySnapshot`. */
    get empty() {
      return 0 === this.size;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    forEach(e3, t3) {
      this._snapshot.docs.forEach(((n2) => {
        e3.call(t3, new QueryDocumentSnapshot(this._firestore, this._userDataWriter, n2.key, n2, new SnapshotMetadata(this._snapshot.mutatedKeys.has(n2.key), this._snapshot.fromCache), this.query.converter));
      }));
    }
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    docChanges(e3 = {}) {
      const t3 = !!e3.includeMetadataChanges;
      if (t3 && this._snapshot.excludesMetadataChanges) throw new FirestoreError(N2.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
      return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t3 || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
      (function __PRIVATE_changesFromSnapshot(e4, t4) {
        if (e4._snapshot.oldDocs.isEmpty()) {
          let t5 = 0;
          return e4._snapshot.docChanges.map(((n2) => {
            const r3 = new QueryDocumentSnapshot(e4._firestore, e4._userDataWriter, n2.doc.key, n2.doc, new SnapshotMetadata(e4._snapshot.mutatedKeys.has(n2.doc.key), e4._snapshot.fromCache), e4.query.converter);
            return n2.doc, {
              type: "added",
              doc: r3,
              oldIndex: -1,
              newIndex: t5++
            };
          }));
        }
        {
          let n2 = e4._snapshot.oldDocs;
          return e4._snapshot.docChanges.filter(((e5) => t4 || 3 !== e5.type)).map(((t5) => {
            const r3 = new QueryDocumentSnapshot(e4._firestore, e4._userDataWriter, t5.doc.key, t5.doc, new SnapshotMetadata(e4._snapshot.mutatedKeys.has(t5.doc.key), e4._snapshot.fromCache), e4.query.converter);
            let i3 = -1, s3 = -1;
            return 0 !== t5.type && (i3 = n2.indexOf(t5.doc.key), n2 = n2.delete(t5.doc.key)), 1 !== t5.type && (n2 = n2.add(t5.doc), s3 = n2.indexOf(t5.doc.key)), {
              type: __PRIVATE_resultChangeType(t5.type),
              doc: r3,
              oldIndex: i3,
              newIndex: s3
            };
          }));
        }
      })(this, t3), this._cachedChangesIncludeMetadataChanges = t3), this._cachedChanges;
    }
    /**
     * Returns a JSON-serializable representation of this `QuerySnapshot` instance.
     *
     * @returns a JSON representation of this object. Throws a {@link FirestoreError} if this
     * `QuerySnapshot` has pending writes.
     */
    toJSON() {
      if (this.metadata.hasPendingWrites) throw new FirestoreError(N2.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
      const e3 = {};
      e3.type = _QuerySnapshot._jsonSchemaVersion, e3.bundleSource = "QuerySnapshot", e3.bundleName = __PRIVATE_AutoId.newId(), this._firestore._databaseId.database, this._firestore._databaseId.projectId;
      const t3 = [], n2 = [], r3 = [];
      return this.docs.forEach(((e4) => {
        null !== e4._document && (t3.push(e4._document), n2.push(this._userDataWriter.convertObjectMap(e4._document.data.value.mapValue.fields, "previous")), r3.push(e4.ref.path));
      })), e3.bundle = (this._firestore, this.query._query, e3.bundleName, "NOT SUPPORTED"), e3;
    }
  };
  function __PRIVATE_resultChangeType(e3) {
    switch (e3) {
      case 0:
        return "added";
      case 2:
      case 3:
        return "modified";
      case 1:
        return "removed";
      default:
        return fail(61501, {
          type: e3
        });
    }
  }
  QuerySnapshot._jsonSchemaVersion = "firestore/querySnapshot/1.0", QuerySnapshot._jsonSchema = {
    type: property("string", QuerySnapshot._jsonSchemaVersion),
    bundleSource: property("string", "QuerySnapshot"),
    bundleName: property("string"),
    bundle: property("string")
  };
  var __PRIVATE_ExpUserDataWriter = class extends AbstractUserDataWriter {
    constructor(e3) {
      super(), this.firestore = e3;
    }
    convertBytes(e3) {
      return new Bytes(e3);
    }
    convertReference(e3) {
      const t3 = this.convertDocumentKey(e3, this.firestore._databaseId);
      return new DocumentReference(
        this.firestore,
        /* converter= */
        null,
        t3
      );
    }
  };
  function getDocs(e3) {
    e3 = __PRIVATE_cast(e3, Query);
    const t3 = __PRIVATE_cast(e3.firestore, Firestore), n2 = ensureFirestoreConfigured(t3), r3 = new __PRIVATE_ExpUserDataWriter(t3);
    return __PRIVATE_validateHasExplicitOrderByForLimitToLast(e3._query), __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n2, e3._query).then(((n3) => new QuerySnapshot(t3, r3, e3, n3)));
  }
  function updateDoc(e3, t3, n2, ...r3) {
    e3 = __PRIVATE_cast(e3, DocumentReference);
    const i3 = __PRIVATE_cast(e3.firestore, Firestore), s3 = __PRIVATE_newUserDataReader(i3);
    let o3;
    o3 = "string" == typeof // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    (t3 = getModularInstance(t3)) || t3 instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(s3, "updateDoc", e3._key, t3, n2, r3) : __PRIVATE_parseUpdateData(s3, "updateDoc", e3._key, t3);
    return executeWrite(i3, [o3.toMutation(e3._key, Precondition.exists(true))]);
  }
  function deleteDoc(e3) {
    return executeWrite(__PRIVATE_cast(e3.firestore, Firestore), [new __PRIVATE_DeleteMutation(e3._key, Precondition.none())]);
  }
  function addDoc(e3, t3) {
    const n2 = __PRIVATE_cast(e3.firestore, Firestore), r3 = doc(e3), i3 = __PRIVATE_applyFirestoreDataConverter(e3.converter, t3);
    return executeWrite(n2, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(e3.firestore), "addDoc", r3._key, i3, null !== e3.converter, {}).toMutation(r3._key, Precondition.exists(false))]).then((() => r3));
  }
  function executeWrite(e3, t3) {
    return (function __PRIVATE_firestoreClientWrite(e4, t4) {
      const n2 = new __PRIVATE_Deferred();
      return e4.asyncQueue.enqueueAndForget((async () => __PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(e4), t4, n2))), n2.promise;
    })(ensureFirestoreConfigured(e3), t3);
  }
  function serverTimestamp() {
    return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
  }
  function arrayUnion(...e3) {
    return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", e3);
  }
  function arrayRemove(...e3) {
    return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", e3);
  }
  function increment(e3) {
    return new __PRIVATE_NumericIncrementFieldValueImpl("increment", e3);
  }
  !(function __PRIVATE_registerFirestore(e3, t3 = true) {
    !(function __PRIVATE_setSDKVersion(e4) {
      x3 = e4;
    })(SDK_VERSION), _registerComponent(new Component("firestore", ((e4, { instanceIdentifier: n2, options: r3 }) => {
      const i3 = e4.getProvider("app").getImmediate(), s3 = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e4.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(i3, e4.getProvider("app-check-internal")), (function __PRIVATE_databaseIdFromApp(e5, t4) {
        if (!Object.prototype.hasOwnProperty.apply(e5.options, ["projectId"])) throw new FirestoreError(N2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        return new DatabaseId(e5.options.projectId, t4);
      })(i3, n2), i3);
      return r3 = {
        useFetchStreams: t3,
        ...r3
      }, s3._setSettings(r3), s3;
    }), "PUBLIC").setMultipleInstances(true)), registerVersion(F, M, e3), // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
    registerVersion(F, M, "esm2020");
  })();

  // src/firebase.ts
  var firebaseConfig = {
    apiKey: "AIzaSyC6GaYhy1t0QPhXITiwvxGNykf3jVDvEAI",
    authDomain: "idealista-comments.firebaseapp.com",
    projectId: "idealista-comments",
    storageBucket: "idealista-comments.firebasestorage.app",
    messagingSenderId: "446935726598",
    appId: "1:446935726598:web:b95b53035b02bd66eaa187",
    measurementId: "G-ZZ0SPCQ2TX"
  };
  var app = initializeApp(firebaseConfig);
  var auth = initializeAuth(app, {
    persistence: browserLocalPersistence
  });
  var db = getFirestore(app);
  var provider = new GoogleAuthProvider();

  // src/hooks/useTranslation.ts
  var I18nContext = X({
    t: translations.en,
    lang: "en",
    setLang: () => {
    }
  });
  function useTranslation() {
    return x2(I18nContext);
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  function u3(e3, t3, n2, o3, i3, u4) {
    t3 || (t3 = {});
    var a3, c3, p3 = t3;
    if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // src/components/Header.tsx
  function Header({ listingId, listingTitle, loading }) {
    const { t: t3, lang, setLang } = useTranslation();
    const idText = loading ? t3.loadingId : listingId ? `${t3.listingPrefix}${listingId}` : t3.noListingFound;
    const titleText = loading ? t3.detectingListing : listingTitle || "";
    return /* @__PURE__ */ u3("header", { children: [
      /* @__PURE__ */ u3("div", { class: "header-top", children: [
        /* @__PURE__ */ u3("h2", { id: "property-id", children: idText }),
        /* @__PURE__ */ u3(
          "select",
          {
            id: "lang-select",
            value: lang,
            onChange: (e3) => setLang(e3.target.value),
            children: [
              /* @__PURE__ */ u3("option", { value: "en", children: "EN" }),
              /* @__PURE__ */ u3("option", { value: "pt", children: "PT" }),
              /* @__PURE__ */ u3("option", { value: "es", children: "ES" }),
              /* @__PURE__ */ u3("option", { value: "it", children: "IT" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u3("p", { id: "property-title", class: "truncate", children: titleText })
    ] });
  }

  // src/components/AuthBar.tsx
  function AuthBar({ user }) {
    const handleSignIn = () => {
      chrome.tabs.create({ url: chrome.runtime.getURL("src/auth.html") });
    };
    const handleSignOut = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Sign Out Error:", error);
      }
    };
    return /* @__PURE__ */ u3("div", { class: "user-bar", children: /* @__PURE__ */ u3("div", { id: "auth-container", style: { width: "100%", display: "flex", flexDirection: "column", gap: "8px" }, children: !user ? /* @__PURE__ */ u3("div", { id: "sign-in-view", children: /* @__PURE__ */ u3("button", { id: "google-signin-btn", class: "btn-google", onClick: handleSignIn, children: "Sign in with Google" }) }) : /* @__PURE__ */ u3("div", { id: "user-info-view", style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ u3("div", { style: { display: "flex", alignItems: "center", gap: "5px" }, children: [
        user.photoURL && /* @__PURE__ */ u3(
          "img",
          {
            id: "user-avatar",
            src: user.photoURL,
            alt: "",
            style: { width: "24px", height: "24px", borderRadius: "50%" }
          }
        ),
        /* @__PURE__ */ u3("span", { id: "user-display-name", children: user.displayName || user.email || "User" })
      ] }),
      /* @__PURE__ */ u3("button", { id: "sign-out-btn", class: "btn-small", onClick: handleSignOut, children: "Sign Out" })
    ] }) }) });
  }

  // src/components/GuidanceView.tsx
  function GuidanceView() {
    const { t: t3 } = useTranslation();
    const handleOpen = () => {
      chrome.tabs.create({ url: "https://www.idealista.pt" });
    };
    return /* @__PURE__ */ u3("div", { class: "guidance-view", children: [
      /* @__PURE__ */ u3("div", { class: "guidance-icon", children: "\u{1F4AC}" }),
      /* @__PURE__ */ u3("p", { class: "guidance-text", children: t3.navigateMessage }),
      /* @__PURE__ */ u3("p", { class: "guidance-hint", children: t3.guidanceHint }),
      /* @__PURE__ */ u3("button", { class: "guidance-btn", onClick: handleOpen, children: t3.openIdealista })
    ] });
  }

  // src/components/CommentCard.tsx
  function CommentCard({ comment, currentUser, onLike, onReply, onDelete }) {
    const { t: t3 } = useTranslation();
    const [showReply, setShowReply] = d2(false);
    const [replyText, setReplyText] = d2("");
    const [replyAnon, setReplyAnon] = d2(false);
    const isLoggedIn = currentUser !== null;
    const currentUserId = currentUser?.uid ?? null;
    const likedByUser = currentUserId ? comment.likedBy?.includes(currentUserId) ?? false : false;
    const isOwner = currentUserId !== null && comment.userId === currentUserId;
    let timeString = "";
    if (comment.timestamp?.toDate) {
      const d3 = comment.timestamp.toDate();
      timeString = d3.toLocaleDateString() + " " + d3.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else {
      timeString = "Just now";
    }
    const displayName = comment.isAnonymous ? t3.anonymous || "Anonymous" : comment.nickname;
    const handlePostReply = () => {
      const text = replyText.trim();
      if (!text) return;
      onReply(comment.id, text, replyAnon);
      setReplyText("");
      setReplyAnon(false);
      setShowReply(false);
    };
    const actionStyle = isLoggedIn ? void 0 : { opacity: "0.5", cursor: "not-allowed" };
    return /* @__PURE__ */ u3("div", { class: "comment-card", "data-id": comment.id, children: [
      /* @__PURE__ */ u3("div", { class: "comment-header", children: [
        /* @__PURE__ */ u3("span", { children: displayName }),
        /* @__PURE__ */ u3("span", { style: { fontWeight: "normal", opacity: 0.6 }, children: timeString })
      ] }),
      comment.topics?.length > 0 && /* @__PURE__ */ u3("div", { class: "topic-tags", children: comment.topics.map((topicKey) => /* @__PURE__ */ u3("span", { class: `topic-tag topic-${topicKey}`, children: t3[topicKey] || topicKey }, topicKey)) }),
      /* @__PURE__ */ u3("div", { class: "comment-body", children: comment.text }),
      /* @__PURE__ */ u3("div", { class: "comment-actions", children: [
        /* @__PURE__ */ u3(
          "span",
          {
            class: `action-btn like-btn ${likedByUser ? "liked" : ""}`,
            style: actionStyle,
            onClick: () => isLoggedIn && onLike(comment.id, likedByUser),
            children: [
              "\u2665 ",
              comment.likes || 0
            ]
          }
        ),
        /* @__PURE__ */ u3(
          "span",
          {
            class: "action-btn reply-btn",
            style: actionStyle,
            onClick: () => isLoggedIn && setShowReply(!showReply),
            children: t3.reply || "Reply"
          }
        ),
        isOwner && /* @__PURE__ */ u3(
          "span",
          {
            class: "action-btn delete-btn",
            style: { color: "red" },
            onClick: () => {
              if (confirm("Are you sure you want to delete this comment?")) {
                onDelete(comment.id);
              }
            },
            children: "Delete"
          }
        )
      ] }),
      showReply && /* @__PURE__ */ u3("div", { class: "reply-input-container", style: { display: "flex" }, children: [
        /* @__PURE__ */ u3(
          "textarea",
          {
            class: "reply-textarea",
            placeholder: t3.placeholder,
            value: replyText,
            onInput: (e3) => setReplyText(e3.target.value),
            autoFocus: true
          }
        ),
        /* @__PURE__ */ u3("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }, children: [
          /* @__PURE__ */ u3("div", { style: { display: "flex", alignItems: "center", gap: "5px" }, children: [
            /* @__PURE__ */ u3(
              "input",
              {
                type: "checkbox",
                checked: replyAnon,
                onChange: (e3) => setReplyAnon(e3.target.checked)
              }
            ),
            /* @__PURE__ */ u3("label", { style: { fontSize: "10px", color: "#666" }, children: t3.postAnonymously || "Post anonymously" })
          ] }),
          /* @__PURE__ */ u3("div", { class: "reply-actions", children: [
            /* @__PURE__ */ u3("button", { class: "btn-small btn-cancel", onClick: () => setShowReply(false), children: t3.cancel || "Cancel" }),
            /* @__PURE__ */ u3("button", { class: "btn-small btn-post", onClick: handlePostReply, children: t3.post })
          ] })
        ] })
      ] }),
      comment.replies && comment.replies.length > 0 && /* @__PURE__ */ u3("div", { class: "replies-container", children: comment.replies.map((reply) => /* @__PURE__ */ u3(
        CommentCard,
        {
          comment: reply,
          currentUser,
          onLike,
          onReply,
          onDelete
        },
        reply.id
      )) })
    ] });
  }

  // src/components/CommentsList.tsx
  function CommentsList({ comments, loading, currentUser, onLike, onReply, onDelete }) {
    const { t: t3 } = useTranslation();
    if (loading) {
      return /* @__PURE__ */ u3("div", { class: "comments-area", children: /* @__PURE__ */ u3("div", { class: "loading-spinner", children: "Loading..." }) });
    }
    if (comments.length === 0) {
      return /* @__PURE__ */ u3("div", { class: "comments-area", children: /* @__PURE__ */ u3("div", { class: "empty-state", children: t3.noComments }) });
    }
    return /* @__PURE__ */ u3("div", { class: "comments-area", children: comments.map((comment) => /* @__PURE__ */ u3(
      CommentCard,
      {
        comment,
        currentUser,
        onLike,
        onReply,
        onDelete
      },
      comment.id
    )) });
  }

  // src/components/CommentInput.tsx
  var TOPICS = ["price", "noise", "security", "accesses"];
  function CommentInput({ onPost }) {
    const { t: t3 } = useTranslation();
    const [text, setText] = d2("");
    const [selectedTopics, setSelectedTopics] = d2([]);
    const [isAnonymous, setIsAnonymous] = d2(false);
    const toggleTopic = (topic) => {
      setSelectedTopics(
        (prev) => prev.includes(topic) ? prev.filter((t4) => t4 !== topic) : [...prev, topic]
      );
    };
    const handlePost = () => {
      const trimmed = text.trim();
      if (!trimmed) return;
      onPost(trimmed, selectedTopics, isAnonymous);
      setText("");
      setSelectedTopics([]);
      setIsAnonymous(false);
    };
    return /* @__PURE__ */ u3("div", { class: "input-container", children: [
      /* @__PURE__ */ u3("div", { class: "topic-selector", children: TOPICS.map((topic) => {
        const isSelected = selectedTopics.includes(topic);
        return /* @__PURE__ */ u3(
          "span",
          {
            class: `topic-label lbl-${topic}${isSelected ? " selected" : ""}`,
            onClick: () => toggleTopic(topic),
            children: t3[topic] || topic
          },
          topic
        );
      }) }),
      /* @__PURE__ */ u3("div", { class: "options-bar", style: { padding: "0 15px", marginTop: "5px", display: "flex", alignItems: "center", gap: "5px" }, children: [
        /* @__PURE__ */ u3(
          "input",
          {
            type: "checkbox",
            id: "anon-check",
            checked: isAnonymous,
            onChange: (e3) => setIsAnonymous(e3.target.checked)
          }
        ),
        /* @__PURE__ */ u3("label", { for: "anon-check", style: { fontSize: "11px", color: "#666", cursor: "pointer" }, children: t3.postAnonymously })
      ] }),
      /* @__PURE__ */ u3("div", { class: "input-area", children: [
        /* @__PURE__ */ u3(
          "textarea",
          {
            id: "comment-input",
            placeholder: t3.placeholder,
            value: text,
            onInput: (e3) => setText(e3.target.value)
          }
        ),
        /* @__PURE__ */ u3("button", { id: "post-btn", onClick: handlePost, children: t3.post })
      ] })
    ] });
  }

  // src/components/AdBanner.tsx
  var KOFI_URL = "https://ko-fi.com/ar_dev";
  function AdBanner() {
    const handleClick = () => {
      chrome.tabs.create({ url: KOFI_URL });
    };
    return /* @__PURE__ */ u3("div", { class: "ad-banner", onClick: handleClick, children: [
      /* @__PURE__ */ u3("span", { class: "kofi-icon", children: "\u2615" }),
      /* @__PURE__ */ u3("span", { class: "ad-text", children: "Enjoying the extension? Buy me a coffee!" })
    ] });
  }

  // src/components/App.tsx
  function App() {
    const [lang, setLangState] = d2("en");
    const [user, setUser] = d2(null);
    const [listingId, setListingId] = d2(null);
    const [listingTitle, setListingTitle] = d2(null);
    const [comments, setComments] = d2([]);
    const [loading, setLoading] = d2(true);
    const [commentsLoading, setCommentsLoading] = d2(false);
    const [noListing, setNoListing] = d2(false);
    const t3 = translations[lang];
    const setLang = q2((newLang) => {
      setLangState(newLang);
      chrome.storage.local.set({ language: newLang });
    }, []);
    y2(() => {
      const browserLang = navigator.language.split("-")[0];
      if (["pt", "es", "it"].includes(browserLang)) {
        setLangState(browserLang);
      }
      chrome.storage.local.get(["language"], (result) => {
        if (result.language) {
          setLangState(result.language);
        }
      });
    }, []);
    const fetchComments = q2(async (id) => {
      setCommentsLoading(true);
      try {
        const q4 = query(collection(db, "comments"), where("listingId", "==", id));
        const snapshot = await getDocs(q4);
        const all = [];
        snapshot.forEach((d3) => all.push({ id: d3.id, ...d3.data() }));
        all.sort((a3, b2) => (a3.timestamp?.seconds ?? 0) - (b2.timestamp?.seconds ?? 0));
        const roots = all.filter((c3) => !c3.parentId);
        const replies = all.filter((c3) => c3.parentId);
        roots.forEach((root) => {
          root.replies = replies.filter((r3) => r3.parentId === root.id);
        });
        setComments(roots);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setCommentsLoading(false);
      }
    }, []);
    y2(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        if (firebaseUser && listingId) {
          fetchComments(listingId);
        }
      });
      return unsubscribe;
    }, [listingId, fetchComments]);
    y2(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (!activeTab?.id) {
          setLoading(false);
          setNoListing(true);
          return;
        }
        getPropertyInfo(activeTab.id);
      });
    }, []);
    function getPropertyInfo(tabId) {
      chrome.tabs.sendMessage(tabId, { action: "GET_PROPERTY_INFO" }, (response) => {
        if (chrome.runtime.lastError) {
          injectContentScript(tabId);
          return;
        }
        handlePropertyResponse(response);
      });
    }
    function injectContentScript(tabId) {
      chrome.scripting.executeScript(
        { target: { tabId }, files: ["dist/content.js"] },
        () => {
          if (chrome.runtime.lastError) {
            setLoading(false);
            setNoListing(true);
            return;
          }
          let attempts = 0;
          const maxAttempts = 3;
          const trySendMessage = () => {
            attempts++;
            chrome.tabs.sendMessage(tabId, { action: "GET_PROPERTY_INFO" }, (response) => {
              if (chrome.runtime.lastError) {
                if (attempts < maxAttempts) {
                  setTimeout(trySendMessage, 200);
                } else {
                  setLoading(false);
                  setNoListing(true);
                }
              } else {
                handlePropertyResponse(response);
              }
            });
          };
          setTimeout(trySendMessage, 100);
        }
      );
    }
    function handlePropertyResponse(response) {
      if (!response?.id) {
        setLoading(false);
        setNoListing(true);
        return;
      }
      setListingId(response.id);
      setListingTitle(response.title);
      setLoading(false);
      setNoListing(false);
      if (auth.currentUser) {
        fetchComments(response.id);
      }
    }
    const handlePost = q2(
      async (text, topics, isAnonymous) => {
        if (!auth.currentUser || !listingId || !user) return;
        try {
          await addDoc(collection(db, "comments"), {
            listingId,
            userId: user.uid,
            nickname: user.displayName || "User",
            isAnonymous,
            text,
            topics,
            likes: 0,
            likedBy: [],
            timestamp: serverTimestamp(),
            parentId: null
          });
          fetchComments(listingId);
        } catch (e3) {
          console.error("Error adding comment:", e3);
        }
      },
      [listingId, user, fetchComments]
    );
    const handleReply = q2(
      async (parentId, text, isAnonymous) => {
        if (!auth.currentUser || !listingId || !user) return;
        try {
          await addDoc(collection(db, "comments"), {
            listingId,
            userId: user.uid,
            nickname: user.displayName || "User",
            isAnonymous,
            text,
            topics: [],
            likes: 0,
            likedBy: [],
            timestamp: serverTimestamp(),
            parentId
          });
          fetchComments(listingId);
        } catch (e3) {
          console.error("Error adding reply:", e3);
        }
      },
      [listingId, user, fetchComments]
    );
    const handleLike = q2(
      async (commentId, currentlyLiked) => {
        if (!user) return;
        const ref = doc(db, "comments", commentId);
        try {
          if (currentlyLiked) {
            await updateDoc(ref, { likes: increment(-1), likedBy: arrayRemove(user.uid) });
          } else {
            await updateDoc(ref, { likes: increment(1), likedBy: arrayUnion(user.uid) });
          }
          if (listingId) fetchComments(listingId);
        } catch (e3) {
          console.error("Error toggling like:", e3);
        }
      },
      [user, listingId, fetchComments]
    );
    const handleDelete = q2(
      async (commentId) => {
        if (!user) return;
        try {
          await deleteDoc(doc(db, "comments", commentId));
          if (listingId) fetchComments(listingId);
        } catch (e3) {
          console.error("Error deleting comment:", e3);
        }
      },
      [user, listingId, fetchComments]
    );
    return /* @__PURE__ */ u3(I18nContext.Provider, { value: { t: t3, lang, setLang }, children: /* @__PURE__ */ u3("div", { class: "container", children: [
      /* @__PURE__ */ u3(Header, { listingId, listingTitle, loading }),
      /* @__PURE__ */ u3(AuthBar, { user }),
      noListing ? /* @__PURE__ */ u3(GuidanceView, {}) : /* @__PURE__ */ u3(S, { children: [
        /* @__PURE__ */ u3(
          CommentsList,
          {
            comments,
            loading: commentsLoading,
            currentUser: user,
            onLike: handleLike,
            onReply: handleReply,
            onDelete: handleDelete
          }
        ),
        user && listingId && /* @__PURE__ */ u3(CommentInput, { onPost: handlePost })
      ] }),
      /* @__PURE__ */ u3(AdBanner, {})
    ] }) });
  }

  // src/popup.tsx
  R(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/logger/dist/esm/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/component/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
firebase/app/dist/esm/index.esm.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
@firebase/auth/dist/esm/index-36fcbc82.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
