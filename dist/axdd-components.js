import { getCurrentInstance as be, onMounted as ge, nextTick as ie, unref as ye, ref as q, readonly as we, getCurrentScope as $e, onScopeDispose as xe, watch as F, computed as V, shallowRef as Oe, watchEffect as ke, openBlock as i, createElementBlock as l, createElementVNode as a, withDirectives as Se, vModelSelect as Ie, renderSlot as c, resolveComponent as le, normalizeClass as _, normalizeStyle as R, createCommentVNode as f, createVNode as de, withCtx as z, createTextVNode as N, toDisplayString as h, createStaticVNode as ce, createBlock as Pe, resolveDynamicComponent as Ne, withKeys as M, withModifiers as Ce, pushScopeId as Te, popScopeId as Ee } from "vue";
var K;
const ue = typeof window < "u", Me = (e) => typeof e == "function", je = (e) => typeof e == "string", qe = () => {
};
ue && ((K = window == null ? void 0 : window.navigator) != null && K.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function H(e) {
  return typeof e == "function" ? e() : ye(e);
}
function Ae(e, s) {
  function t(...r) {
    return new Promise((o, n) => {
      Promise.resolve(e(() => s.apply(this, r), { fn: s, thisArg: this, args: r })).then(o).catch(n);
    });
  }
  return t;
}
const fe = (e) => e();
function Le(e = fe) {
  const s = q(!0);
  function t() {
    s.value = !1;
  }
  function r() {
    s.value = !0;
  }
  const o = (...n) => {
    s.value && e(...n);
  };
  return { isActive: we(s), pause: t, resume: r, eventFilter: o };
}
function Fe(e) {
  return e;
}
function _e(e) {
  return $e() ? (xe(e), !0) : !1;
}
function Be(e) {
  return typeof e == "function" ? V(e) : q(e);
}
function pe(e, s = !0) {
  be() ? ge(e) : s ? e() : ie(e);
}
var J = Object.getOwnPropertySymbols, De = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, Ve = (e, s) => {
  var t = {};
  for (var r in e)
    De.call(e, r) && s.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && J)
    for (var r of J(e))
      s.indexOf(r) < 0 && Ue.call(e, r) && (t[r] = e[r]);
  return t;
};
function Re(e, s, t = {}) {
  const r = t, {
    eventFilter: o = fe
  } = r, n = Ve(r, [
    "eventFilter"
  ]);
  return F(e, Ae(o, s), n);
}
var Qe = Object.defineProperty, We = Object.defineProperties, ze = Object.getOwnPropertyDescriptors, B = Object.getOwnPropertySymbols, he = Object.prototype.hasOwnProperty, me = Object.prototype.propertyIsEnumerable, G = (e, s, t) => s in e ? Qe(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, He = (e, s) => {
  for (var t in s || (s = {}))
    he.call(s, t) && G(e, t, s[t]);
  if (B)
    for (var t of B(s))
      me.call(s, t) && G(e, t, s[t]);
  return e;
}, Ke = (e, s) => We(e, ze(s)), Je = (e, s) => {
  var t = {};
  for (var r in e)
    he.call(e, r) && s.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && B)
    for (var r of B(e))
      s.indexOf(r) < 0 && me.call(e, r) && (t[r] = e[r]);
  return t;
};
function Ge(e, s, t = {}) {
  const r = t, {
    eventFilter: o
  } = r, n = Je(r, [
    "eventFilter"
  ]), { eventFilter: d, pause: m, resume: C, isActive: w } = Le(o);
  return { stop: Re(e, s, Ke(He({}, n), {
    eventFilter: d
  })), pause: m, resume: C, isActive: w };
}
function Ye(e) {
  var s;
  const t = H(e);
  return (s = t == null ? void 0 : t.$el) != null ? s : t;
}
const L = ue ? window : void 0;
function Y(...e) {
  let s, t, r, o;
  if (je(e[0]) || Array.isArray(e[0]) ? ([t, r, o] = e, s = L) : [s, t, r, o] = e, !s)
    return qe;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const n = [], d = () => {
    n.forEach((v) => v()), n.length = 0;
  }, m = (v, g, O, y) => (v.addEventListener(g, O, y), () => v.removeEventListener(g, O, y)), C = F(() => [Ye(s), H(o)], ([v, g]) => {
    d(), v && n.push(...t.flatMap((O) => r.map((y) => m(v, O, y, g))));
  }, { immediate: !0, flush: "post" }), w = () => {
    C(), d();
  };
  return _e(w), w;
}
function Xe(e, s = !1) {
  const t = q(), r = () => t.value = !!e();
  return r(), pe(r, s), t;
}
function Ze(e, s = {}) {
  const { window: t = L } = s, r = Xe(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const n = q(!1), d = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", m) : o.removeListener(m));
  }, m = () => {
    r.value && (d(), o = t.matchMedia(Be(e).value), n.value = o.matches, "addEventListener" in o ? o.addEventListener("change", m) : o.addListener(m));
  };
  return ke(m), _e(() => d()), n;
}
const Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__";
Q[W] = Q[W] || {};
const et = Q[W];
function ve(e, s) {
  return et[e] || s;
}
function tt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var st = Object.defineProperty, X = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, nt = Object.prototype.propertyIsEnumerable, Z = (e, s, t) => s in e ? st(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, ee = (e, s) => {
  for (var t in s || (s = {}))
    at.call(s, t) && Z(e, t, s[t]);
  if (X)
    for (var t of X(s))
      nt.call(s, t) && Z(e, t, s[t]);
  return e;
};
const rt = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, te = "vueuse-storage";
function ot(e, s, t, r = {}) {
  var o;
  const {
    flush: n = "pre",
    deep: d = !0,
    listenToStorageChanges: m = !0,
    writeDefaults: C = !0,
    mergeDefaults: w = !1,
    shallow: v,
    window: g = L,
    eventFilter: O,
    onError: y = (u) => {
      console.error(u);
    }
  } = r, $ = (v ? Oe : q)(s);
  if (!t)
    try {
      t = ve("getDefaultStorage", () => {
        var u;
        return (u = L) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      y(u);
    }
  if (!t)
    return $;
  const k = H(s), A = tt(k), I = (o = r.serializer) != null ? o : rt[A], { pause: x, resume: P } = Ge($, () => T($.value), { flush: n, deep: d, eventFilter: O });
  return g && m && (Y(g, "storage", S), Y(g, te, D)), S(), $;
  function T(u) {
    try {
      if (u == null)
        t.removeItem(e);
      else {
        const b = I.write(u), E = t.getItem(e);
        E !== b && (t.setItem(e, b), g && g.dispatchEvent(new CustomEvent(te, {
          detail: {
            key: e,
            oldValue: E,
            newValue: b,
            storageArea: t
          }
        })));
      }
    } catch (b) {
      y(b);
    }
  }
  function j(u) {
    const b = u ? u.newValue : t.getItem(e);
    if (b == null)
      return C && k !== null && t.setItem(e, I.write(k)), k;
    if (!u && w) {
      const E = I.read(b);
      return Me(w) ? w(E, k) : A === "object" && !Array.isArray(E) ? ee(ee({}, k), E) : E;
    } else
      return typeof b != "string" ? b : I.read(b);
  }
  function D(u) {
    S(u.detail);
  }
  function S(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        $.value = k;
        return;
      }
      if (!(u && u.key !== e)) {
        x();
        try {
          $.value = j(u);
        } catch (b) {
          y(b);
        } finally {
          u ? ie(P) : P();
        }
      }
    }
  }
}
function it(e) {
  return Ze("(prefers-color-scheme: dark)", e);
}
var lt = Object.defineProperty, se = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, ae = (e, s, t) => s in e ? lt(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, ut = (e, s) => {
  for (var t in s || (s = {}))
    dt.call(s, t) && ae(e, t, s[t]);
  if (se)
    for (var t of se(s))
      ct.call(s, t) && ae(e, t, s[t]);
  return e;
};
function ft(e = {}) {
  const {
    selector: s = "html",
    attribute: t = "class",
    initialValue: r = "auto",
    window: o = L,
    storage: n,
    storageKey: d = "vueuse-color-scheme",
    listenToStorageChanges: m = !0,
    storageRef: C,
    emitAuto: w
  } = e, v = ut({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), g = it({ window: o }), O = V(() => g.value ? "dark" : "light"), y = C || (d == null ? q(r) : ot(d, r, n, { window: o, listenToStorageChanges: m })), $ = V({
    get() {
      return y.value === "auto" && !w ? O.value : y.value;
    },
    set(x) {
      y.value = x;
    }
  }), k = ve("updateHTMLAttrs", (x, P, T) => {
    const j = o == null ? void 0 : o.document.querySelector(x);
    if (j)
      if (P === "class") {
        const D = T.split(/\s/g);
        Object.values(v).flatMap((S) => (S || "").split(/\s/g)).filter(Boolean).forEach((S) => {
          D.includes(S) ? j.classList.add(S) : j.classList.remove(S);
        });
      } else
        j.setAttribute(P, T);
  });
  function A(x) {
    var P;
    const T = x === "auto" ? O.value : x;
    k(s, t, (P = v[T]) != null ? P : T);
  }
  function I(x) {
    e.onChanged ? e.onChanged(x, A) : A(x);
  }
  return F($, I, { flush: "post", immediate: !0 }), w && F(O, () => I($.value), { flush: "post" }), pe(() => I($.value)), $;
}
var ne;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ne || (ne = {}));
var _t = Object.defineProperty, re = Object.getOwnPropertySymbols, pt = Object.prototype.hasOwnProperty, ht = Object.prototype.propertyIsEnumerable, oe = (e, s, t) => s in e ? _t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, mt = (e, s) => {
  for (var t in s || (s = {}))
    pt.call(s, t) && oe(e, t, s[t]);
  if (re)
    for (var t of re(s))
      ht.call(s, t) && oe(e, t, s[t]);
  return e;
};
const vt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
mt({
  linear: Fe
}, vt);
const p = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of s)
    t[r] = o;
  return t;
}, bt = {
  name: "axdd-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: ft({
      emitAuto: !0,
      attribute: "data-bs-theme"
    }) };
  }
}, gt = { class: "d-flex mt-4 align-items-center" }, yt = /* @__PURE__ */ a("div", { class: "small me-2" }, "color mode:", -1), wt = /* @__PURE__ */ a("option", { value: "auto" }, "Auto", -1), $t = /* @__PURE__ */ a("option", { value: "light" }, "Light", -1), xt = /* @__PURE__ */ a("option", { value: "dark" }, "Dark", -1), Ot = [
  wt,
  $t,
  xt
];
function kt(e, s, t, r, o, n) {
  return i(), l("div", gt, [
    yt,
    a("div", null, [
      Se(a("select", {
        "onUpdate:modelValue": s[0] || (s[0] = (d) => r.colorMode = d),
        class: "form-select form-select-sm"
      }, Ot, 512), [
        [Ie, r.colorMode]
      ])
    ])
  ]);
}
const St = /* @__PURE__ */ p(bt, [["render", kt]]), It = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, Pt = { class: "card rounded-3 border-0 mb-4 p-4" };
function Nt(e, s, t, r, o, n) {
  return i(), l("div", Pt, [
    c(e.$slots, "default")
  ]);
}
const Ct = /* @__PURE__ */ p(It, [["render", Nt]]);
const Tt = {
  name: "sol-sidebar",
  inject: ["mq"],
  props: {
    appName: {
      type: String,
      default: "appName"
    },
    pageTitle: {
      type: String,
      default: "pageTitle"
    },
    userName: {
      type: String,
      default: "userName"
    },
    appRootUrl: {
      type: String,
      default: "#"
    },
    sidebarClass: {
      type: String,
      default: "bg-purple"
    },
    signOutUrl: {
      type: String,
      default: "#"
    },
    // used for documentation site
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  created: function() {
  }
}, Et = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Mt = { class: "d-flex" }, jt = /* @__PURE__ */ a("div", { class: "flex-fill" }, "username", -1), qt = { class: "flex-fill text-end" }, At = ["href"], Lt = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ft = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), Bt = [
  Ft
], Dt = {
  key: 0,
  role: "navigation"
}, Ut = /* @__PURE__ */ a("ul", { class: "text-white" }, [
  /* @__PURE__ */ a("li", null, "nav 1"),
  /* @__PURE__ */ a("li", null, "nav 2"),
  /* @__PURE__ */ a("li", null, "nav 3"),
  /* @__PURE__ */ a("li", null, "nav 4")
], -1), Vt = {
  key: 1,
  class: "mb-3 text-light"
}, Rt = /* @__PURE__ */ a("div", { class: "sol-sidebar-logo" }, " ", -1), Qt = { class: "flex-fill" }, Wt = { key: 0 }, zt = { class: "font-weight-light py-3 small" }, Ht = /* @__PURE__ */ ce('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function Kt(e, s, t, r, o, n) {
  const d = le("router-link");
  return i(), l("div", {
    class: _([n.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: R([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    a("div", {
      class: _([t.sidebarClass + [n.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: R([n.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      a("header", null, [
        e.$slots.profile ? (i(), l("div", Et, [
          c(e.$slots, "profile", {}, () => [
            a("div", Mt, [
              jt,
              a("div", qt, [
                a("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, At)
              ])
            ])
          ])
        ])) : f("", !0),
        a("div", {
          class: _([[n.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (i(), l("a", Lt, Bt)) : f("", !0),
          a("div", {
            class: _(["d-inline align-middle", [n.mq.mdPlus ? "h2" : "h3"]])
          }, [
            de(d, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: z(() => [
                N(h(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      a("div", {
        id: "sidebar-nav-collapse",
        class: _(["px-3 flex-fill", [
          n.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (i(), l("nav", Dt, [
          c(e.$slots, "navigation", {}, () => [
            Ut
          ])
        ])) : f("", !0),
        e.$slots.aside ? (i(), l("aside", Vt, [
          c(e.$slots, "aside", {}, () => [
            N("this is aside content")
          ])
        ])) : f("", !0)
      ], 2),
      Rt
    ], 6),
    a("div", {
      class: _([[n.mq.mdMinus ? "" : "flex-fill overflow-y-auto"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      a("div", {
        class: _([[n.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        a("main", Qt, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (i(), l("footer", Wt, [
          c(e.$slots, "footer", {}, () => [
            a("div", zt, [
              Ht,
              a("div", null, " Copyright © " + h((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Jt = /* @__PURE__ */ p(Tt, [["render", Kt]]);
const Gt = {
  name: "axdd-topbar",
  inject: ["mq"],
  props: {
    appName: {
      type: String,
      default: "appName"
    },
    appRootUrl: {
      type: String,
      default: "#"
    },
    topbarClass: {
      type: String,
      default: "bg-purple"
    },
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  components: {},
  data() {
    return {};
  },
  created: function() {
  }
}, Yt = { class: "w-100" }, Xt = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Zt = { class: "container-xl" }, es = { class: "axdd-topbar-brand" }, ts = { class: "container-xl axdd-topbar-logo" }, ss = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, as = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), ns = [
  as
], rs = { class: "w-100 flex-fill bg-body text-body" }, os = { class: "container-xl" }, is = { class: "row" }, ls = { role: "navigation" }, ds = { key: 0 }, cs = { class: "col" }, us = {
  key: 0,
  class: "my-3"
}, fs = /* @__PURE__ */ a("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ a("h1", null, "Hello world..."),
  /* @__PURE__ */ a("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), _s = { class: "w-100" }, ps = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, hs = { class: "container-xl" }, ms = { class: "text-white font-weight-light py-3" }, vs = /* @__PURE__ */ ce('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function bs(e, s, t, r, o, n) {
  const d = le("router-link");
  return i(), l("div", {
    class: _([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    a("header", Yt, [
      e.$slots.profile ? (i(), l("div", Xt, [
        a("div", Zt, [
          c(e.$slots, "profile", {}, () => [
            N("Welcome!")
          ])
        ])
      ])) : f("", !0),
      a("div", es, [
        a("div", ts, [
          e.$slots.navigation ? (i(), l("a", ss, ns)) : f("", !0),
          a("div", {
            class: _(["d-inline align-middle text-white", [n.mq.xlPlus ? "h2" : "h3"]])
          }, [
            de(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: z(() => [
                N(h(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    a("div", rs, [
      a("div", os, [
        a("div", is, [
          e.$slots.navigation || e.$slots.aside ? (i(), l("div", {
            key: 0,
            class: "",
            style: R(n.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            a("div", {
              id: "topbar-nav-collapse",
              class: _([n.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              a("nav", ls, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (i(), l("aside", ds, [
                c(e.$slots, "aside", {}, () => [
                  N("this is aside content")
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          a("div", cs, [
            e.$slots.bar ? (i(), l("div", us, [
              c(e.$slots, "bar")
            ])) : f("", !0),
            a("main", null, [
              c(e.$slots, "main", {}, () => [
                fs
              ])
            ])
          ])
        ])
      ])
    ]),
    a("footer", _s, [
      e.$slots.footer ? (i(), l("div", ps, [
        a("div", hs, [
          c(e.$slots, "footer", {}, () => [
            a("div", ms, [
              vs,
              a("div", null, " Copyright © " + h((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const gs = /* @__PURE__ */ p(Gt, [["render", bs]]), ys = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, ws = { class: "card shadow-sm rounded-3 mb-4" }, $s = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, xs = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, Os = {
  key: 2,
  class: "card-body"
}, ks = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function Ss(e, s, t, r, o, n) {
  return i(), l("div", ws, [
    e.$slots.heading ? (i(), l("div", $s, [
      c(e.$slots, "heading")
    ])) : f("", !0),
    e.$slots["heading-action"] ? (i(), l("div", xs, [
      c(e.$slots, "heading-action")
    ])) : f("", !0),
    e.$slots.body ? (i(), l("div", Os, [
      c(e.$slots, "body")
    ])) : f("", !0),
    e.$slots.footer ? (i(), l("div", ks, [
      c(e.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const Is = /* @__PURE__ */ p(ys, [["render", Ss]]), Ps = {
  name: "axdd-card-heading",
  props: {
    level: {
      type: Number,
      required: !0
    }
  },
  data: function() {
    return {};
  },
  computed: {
    checkedLevel() {
      return this.level > 0 && this.level < 7 ? this.level : 2;
    }
  }
};
function Ns(e, s, t, r, o, n) {
  return i(), Pe(Ne(`h${n.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: z(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const Cs = /* @__PURE__ */ p(Ps, [["render", Ns]]), Ts = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Es(e, s, t, r, o, n) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const Ms = /* @__PURE__ */ p(Ts, [["render", Es]]), js = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function qs(e, s, t, r, o, n) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const As = /* @__PURE__ */ p(js, [["render", qs]]);
const Ls = {
  name: "axdd-tabs-list",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "lines"
    },
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Fs = ["id"], Bs = ["id"];
function Ds(e, s, t, r, o, n) {
  return t.variant == "lines" ? (i(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, Fs)) : t.variant == "pills" ? (i(), l("ul", {
    key: 1,
    class: _(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, Bs)) : f("", !0);
}
const Us = /* @__PURE__ */ p(Ls, [["render", Ds]]), Vs = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Rs = ["id"];
function Qs(e, s, t, r, o, n) {
  return i(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, Rs);
}
const Ws = /* @__PURE__ */ p(Vs, [["render", Qs]]), zs = {
  name: "axdd-tabs-item",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "lines"
    },
    panelId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    },
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    },
    activeTab: {
      type: Boolean,
      required: !1
    }
  },
  computed: {
    elements() {
      return document.getElementsByClassName(this.tabsId + "-link");
    },
    classObject() {
      let e = {};
      return e[this.tabsId + "-link"] = !0, e.active = this.activeTab, e;
    }
  },
  methods: {
    findIndex(e) {
      return [].findIndex.call(this.elements, (s) => s === e);
    },
    moveTab(e) {
      this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((s, t) => {
        t == e ? s.tabIndex = 0 : s.tabIndex = -1;
      });
    },
    moveNext(e) {
      const s = this.findIndex(e.target);
      s < this.elements.length - 1 && this.moveTab(s + 1);
    },
    movePrev(e) {
      const s = this.findIndex(e.target);
      s > 0 && this.moveTab(s - 1);
    },
    onClick(e) {
      const s = this.findIndex(e.target);
      this.moveTab(s);
    }
  }
}, Hs = {
  class: "nav-item",
  role: "presentation"
}, Ks = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Js = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Gs = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ys(e, s, t, r, o, n) {
  return i(), l("li", Hs, [
    t.variant == "lines" ? (i(), l("button", {
      key: 0,
      class: _(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[0] || (s[0] = M((...d) => n.moveNext && n.moveNext(...d), ["right"])),
        s[1] || (s[1] = M((...d) => n.movePrev && n.movePrev(...d), ["left"]))
      ],
      onClick: s[2] || (s[2] = (...d) => n.onClick && n.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Ks)) : t.variant == "pills" ? (i(), l("button", {
      key: 1,
      class: _(["nav-pills-link rounded-3 px-3 py-2", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[3] || (s[3] = M((...d) => n.moveNext && n.moveNext(...d), ["right"])),
        s[4] || (s[4] = M((...d) => n.movePrev && n.movePrev(...d), ["left"]))
      ],
      onClick: s[5] || (s[5] = (...d) => n.onClick && n.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Js)) : (i(), l("button", {
      key: 2,
      class: _(["nav-link", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[6] || (s[6] = M((...d) => n.moveNext && n.moveNext(...d), ["right"])),
        s[7] || (s[7] = M((...d) => n.movePrev && n.movePrev(...d), ["left"]))
      ],
      onClick: s[8] || (s[8] = (...d) => n.onClick && n.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Gs))
  ]);
}
const Xs = /* @__PURE__ */ p(zs, [["render", Ys]]), Zs = {
  name: "axdd-tabs-panel",
  props: {
    panelId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    },
    activePanel: {
      type: Boolean,
      required: !1
    }
  },
  methods: {
    setFocus() {
      document.getElementById(this.panelId + "-tab").focus();
    }
  }
}, ea = ["id", "aria-labelledby"];
function ta(e, s, t, r, o, n) {
  return i(), l("div", {
    class: _(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: s[0] || (s[0] = M(Ce((...d) => n.setFocus && n.setFocus(...d), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, ea);
}
const sa = /* @__PURE__ */ p(Zs, [["render", ta]]), aa = {
  name: "axdd-profile",
  props: {
    variant: {
      type: String,
      default: "standard"
    },
    userNetid: {
      type: String,
      required: !0
    },
    userOverride: {
      type: String,
      required: !1
    },
    userOfficialName: {
      type: String
    },
    userPreferredName: {
      type: String
    },
    userPronouns: {
      type: String
    },
    signoutUrl: {
      type: String
    },
    profileUrl: {
      type: String
    }
  },
  data: function() {
    return {};
  }
}, na = {
  key: 0,
  class: "d-flex"
}, ra = { class: "flex-fill dropdown" }, oa = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ia = { class: "me-1" }, la = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), da = { class: "text-decoration-underline" }, ca = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ua = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, fa = {
  key: 0,
  class: "small text-danger"
}, _a = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), pa = { class: "small" }, ha = { class: "small" }, ma = ["href"], va = ["href"], ba = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1), ga = {
  key: 1,
  class: "d-flex"
}, ya = {
  key: 0,
  class: "flex-fill text-white"
}, wa = { class: "me-1" }, $a = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), xa = {
  key: 1,
  class: "flex-fill text-white"
}, Oa = { class: "flex-fill text-end" }, ka = ["href"], Sa = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1);
function Ia(e, s, t, r, o, n) {
  return t.variant === "flyout" ? (i(), l("div", na, [
    a("div", ra, [
      t.userOverride ? (i(), l("a", oa, [
        a("span", ia, h(t.userNetid), 1),
        la,
        a("span", da, h(t.userOverride), 1)
      ])) : (i(), l("a", ca, h(t.userNetid), 1)),
      a("div", ua, [
        t.userOverride ? (i(), l("p", fa, [
          N(" overriding as "),
          _a,
          N(" " + h(t.userOverride), 1)
        ])) : f("", !0),
        a("p", pa, h(t.userOfficialName) + ", " + h(t.userPreferredName) + ", " + h(t.userPronouns), 1),
        a("p", ha, [
          a("a", { href: t.profileUrl }, "go to profile", 8, ma)
        ]),
        a("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            a("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, va)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            ba
          ])
        ])
      ])
    ])
  ])) : (i(), l("div", ga, [
    t.userOverride ? (i(), l("div", ya, [
      a("span", wa, h(t.userNetid), 1),
      $a,
      N(" " + h(t.userOverride), 1)
    ])) : (i(), l("div", xa, h(t.userNetid), 1)),
    a("div", Oa, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        a("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, ka)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        Sa
      ])
    ])
  ]));
}
const Pa = /* @__PURE__ */ p(aa, [["render", Ia]]);
const Na = {
  name: "axdd-disclosure-action",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    },
    isLink: {
      type: Boolean
    },
    hasIndicator: {
      type: Boolean
    }
  }
}, Ca = ["href", "aria-controls"], Ta = ["data-bs-target", "aria-controls"], Ea = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function Ma(e, s, t, r, o, n) {
  return t.isLink ? (i(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 8, Ca)) : (i(), l("button", {
    key: 1,
    class: _(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (i(), l("i", Ea)) : f("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, Ta));
}
const ja = /* @__PURE__ */ p(Na, [["render", Ma], ["__scopeId", "data-v-bac417f3"]]), qa = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Aa = ["id"];
function La(e, s, t, r, o, n) {
  return i(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, Aa);
}
const Fa = /* @__PURE__ */ p(qa, [["render", La]]);
const Ba = {
  name: "axdd-disclosure-block",
  props: {
    blockId: {
      type: [String, Number],
      required: !0
    },
    blockTitle: {
      type: String,
      required: !0
    }
  }
}, Da = (e) => (Te("data-v-075da959"), e = e(), Ee(), e), Ua = { class: "rounded-3 p-3 mb-2" }, Va = { class: "d-flex" }, Ra = {
  class: "me-3",
  style: { width: "330px" }
}, Qa = ["data-bs-target", "aria-controls"], Wa = /* @__PURE__ */ Da(() => /* @__PURE__ */ a("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), za = ["id"], Ha = { class: "flex-fill" }, Ka = ["id", "aria-labelledby"];
function Ja(e, s, t, r, o, n) {
  return i(), l("div", Ua, [
    a("div", Va, [
      a("div", Ra, [
        a("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          Wa,
          a("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, h(t.blockTitle), 9, za)
        ], 8, Qa)
      ]),
      a("div", Ha, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    a("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, Ka)
  ]);
}
const Ga = /* @__PURE__ */ p(Ba, [["render", Ja], ["__scopeId", "data-v-075da959"]]), U = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Is,
  CardHeading: Cs,
  CardAction: Ms,
  CardTabs: As,
  DisclosureAction: ja,
  DisclosureBlock: Ga,
  DisclosurePanel: Fa,
  Profile: Pa,
  TabsList: Us,
  TabsDisplay: Ws,
  TabsItem: Xs,
  TabsPanel: sa,
  Sidebar: Jt,
  Topbar: gs,
  ColorMode: St,
  Panel: Ct
}, Xa = {
  install(e) {
    for (const s in U)
      if (Object.prototype.hasOwnProperty.call(U, s)) {
        const t = U[s];
        e.component(t.name, t);
      }
  }
};
export {
  Xa as default
};
