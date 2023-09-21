import { getCurrentInstance as ge, onMounted as ye, nextTick as de, unref as we, ref as A, readonly as $e, getCurrentScope as ke, onScopeDispose as xe, watch as D, computed as Q, shallowRef as Oe, watchEffect as Se, openBlock as i, createElementBlock as l, createElementVNode as a, withDirectives as Ie, vModelSelect as Pe, renderSlot as d, resolveComponent as K, normalizeClass as f, normalizeStyle as W, createCommentVNode as _, createVNode as ce, withCtx as j, createTextVNode as N, toDisplayString as m, createStaticVNode as ue, createBlock as F, resolveDynamicComponent as Ne, withKeys as q, withModifiers as Ce, pushScopeId as Ee, popScopeId as Te } from "vue";
var G;
const fe = typeof window < "u", qe = (e) => typeof e == "function", Me = (e) => typeof e == "string", je = () => {
};
fe && ((G = window == null ? void 0 : window.navigator) != null && G.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function J(e) {
  return typeof e == "function" ? e() : we(e);
}
function Ae(e, n) {
  function t(...r) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(o).catch(s);
    });
  }
  return t;
}
const _e = (e) => e();
function Le(e = _e) {
  const n = A(!0);
  function t() {
    n.value = !1;
  }
  function r() {
    n.value = !0;
  }
  const o = (...s) => {
    n.value && e(...s);
  };
  return { isActive: $e(n), pause: t, resume: r, eventFilter: o };
}
function Be(e) {
  return e;
}
function he(e) {
  return ke() ? (xe(e), !0) : !1;
}
function Fe(e) {
  return typeof e == "function" ? Q(e) : A(e);
}
function me(e, n = !0) {
  ge() ? ye(e) : n ? e() : de(e);
}
var Y = Object.getOwnPropertySymbols, De = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, Ve = (e, n) => {
  var t = {};
  for (var r in e)
    De.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Y)
    for (var r of Y(e))
      n.indexOf(r) < 0 && Ue.call(e, r) && (t[r] = e[r]);
  return t;
};
function Re(e, n, t = {}) {
  const r = t, {
    eventFilter: o = _e
  } = r, s = Ve(r, [
    "eventFilter"
  ]);
  return D(e, Ae(o, n), s);
}
var Qe = Object.defineProperty, We = Object.defineProperties, ze = Object.getOwnPropertyDescriptors, U = Object.getOwnPropertySymbols, ve = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable, X = (e, n, t) => n in e ? Qe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, He = (e, n) => {
  for (var t in n || (n = {}))
    ve.call(n, t) && X(e, t, n[t]);
  if (U)
    for (var t of U(n))
      be.call(n, t) && X(e, t, n[t]);
  return e;
}, Ke = (e, n) => We(e, ze(n)), Je = (e, n) => {
  var t = {};
  for (var r in e)
    ve.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && U)
    for (var r of U(e))
      n.indexOf(r) < 0 && be.call(e, r) && (t[r] = e[r]);
  return t;
};
function Ge(e, n, t = {}) {
  const r = t, {
    eventFilter: o
  } = r, s = Je(r, [
    "eventFilter"
  ]), { eventFilter: c, pause: v, resume: C, isActive: w } = Le(o);
  return { stop: Re(e, n, Ke(He({}, s), {
    eventFilter: c
  })), pause: v, resume: C, isActive: w };
}
function Ye(e) {
  var n;
  const t = J(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const B = fe ? window : void 0;
function Z(...e) {
  let n, t, r, o;
  if (Me(e[0]) || Array.isArray(e[0]) ? ([t, r, o] = e, n = B) : [n, t, r, o] = e, !n)
    return je;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const s = [], c = () => {
    s.forEach((b) => b()), s.length = 0;
  }, v = (b, g, x, y) => (b.addEventListener(g, x, y), () => b.removeEventListener(g, x, y)), C = D(() => [Ye(n), J(o)], ([b, g]) => {
    c(), b && s.push(...t.flatMap((x) => r.map((y) => v(b, x, y, g))));
  }, { immediate: !0, flush: "post" }), w = () => {
    C(), c();
  };
  return he(w), w;
}
function Xe(e, n = !1) {
  const t = A(), r = () => t.value = !!e();
  return r(), me(r, n), t;
}
function Ze(e, n = {}) {
  const { window: t = B } = n, r = Xe(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const s = A(!1), c = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", v) : o.removeListener(v));
  }, v = () => {
    r.value && (c(), o = t.matchMedia(Fe(e).value), s.value = o.matches, "addEventListener" in o ? o.addEventListener("change", v) : o.addListener(v));
  };
  return Se(v), he(() => c()), s;
}
const z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, H = "__vueuse_ssr_handlers__";
z[H] = z[H] || {};
const et = z[H];
function pe(e, n) {
  return et[e] || n;
}
function tt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var nt = Object.defineProperty, ee = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, st = Object.prototype.propertyIsEnumerable, te = (e, n, t) => n in e ? nt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ne = (e, n) => {
  for (var t in n || (n = {}))
    at.call(n, t) && te(e, t, n[t]);
  if (ee)
    for (var t of ee(n))
      st.call(n, t) && te(e, t, n[t]);
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
}, ae = "vueuse-storage";
function it(e, n, t, r = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: c = !0,
    listenToStorageChanges: v = !0,
    writeDefaults: C = !0,
    mergeDefaults: w = !1,
    shallow: b,
    window: g = B,
    eventFilter: x,
    onError: y = (u) => {
      console.error(u);
    }
  } = r, $ = (b ? Oe : A)(n);
  if (!t)
    try {
      t = pe("getDefaultStorage", () => {
        var u;
        return (u = B) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      y(u);
    }
  if (!t)
    return $;
  const O = J(n), L = tt(O), I = (o = r.serializer) != null ? o : rt[L], { pause: k, resume: P } = Ge($, () => E($.value), { flush: s, deep: c, eventFilter: x });
  return g && v && (Z(g, "storage", S), Z(g, ae, V)), S(), $;
  function E(u) {
    try {
      if (u == null)
        t.removeItem(e);
      else {
        const p = I.write(u), T = t.getItem(e);
        T !== p && (t.setItem(e, p), g && g.dispatchEvent(new CustomEvent(ae, {
          detail: {
            key: e,
            oldValue: T,
            newValue: p,
            storageArea: t
          }
        })));
      }
    } catch (p) {
      y(p);
    }
  }
  function M(u) {
    const p = u ? u.newValue : t.getItem(e);
    if (p == null)
      return C && O !== null && t.setItem(e, I.write(O)), O;
    if (!u && w) {
      const T = I.read(p);
      return qe(w) ? w(T, O) : L === "object" && !Array.isArray(T) ? ne(ne({}, O), T) : T;
    } else
      return typeof p != "string" ? p : I.read(p);
  }
  function V(u) {
    S(u.detail);
  }
  function S(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        $.value = O;
        return;
      }
      if (!(u && u.key !== e)) {
        k();
        try {
          $.value = M(u);
        } catch (p) {
          y(p);
        } finally {
          u ? de(P) : P();
        }
      }
    }
  }
}
function ot(e) {
  return Ze("(prefers-color-scheme: dark)", e);
}
var lt = Object.defineProperty, se = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, re = (e, n, t) => n in e ? lt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ut = (e, n) => {
  for (var t in n || (n = {}))
    dt.call(n, t) && re(e, t, n[t]);
  if (se)
    for (var t of se(n))
      ct.call(n, t) && re(e, t, n[t]);
  return e;
};
function ft(e = {}) {
  const {
    selector: n = "html",
    attribute: t = "class",
    initialValue: r = "auto",
    window: o = B,
    storage: s,
    storageKey: c = "vueuse-color-scheme",
    listenToStorageChanges: v = !0,
    storageRef: C,
    emitAuto: w
  } = e, b = ut({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), g = ot({ window: o }), x = Q(() => g.value ? "dark" : "light"), y = C || (c == null ? A(r) : it(c, r, s, { window: o, listenToStorageChanges: v })), $ = Q({
    get() {
      return y.value === "auto" && !w ? x.value : y.value;
    },
    set(k) {
      y.value = k;
    }
  }), O = pe("updateHTMLAttrs", (k, P, E) => {
    const M = o == null ? void 0 : o.document.querySelector(k);
    if (M)
      if (P === "class") {
        const V = E.split(/\s/g);
        Object.values(b).flatMap((S) => (S || "").split(/\s/g)).filter(Boolean).forEach((S) => {
          V.includes(S) ? M.classList.add(S) : M.classList.remove(S);
        });
      } else
        M.setAttribute(P, E);
  });
  function L(k) {
    var P;
    const E = k === "auto" ? x.value : k;
    O(n, t, (P = b[E]) != null ? P : E);
  }
  function I(k) {
    e.onChanged ? e.onChanged(k, L) : L(k);
  }
  return D($, I, { flush: "post", immediate: !0 }), w && D(x, () => I($.value), { flush: "post" }), me(() => I($.value)), $;
}
var ie;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ie || (ie = {}));
var _t = Object.defineProperty, oe = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, mt = Object.prototype.propertyIsEnumerable, le = (e, n, t) => n in e ? _t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, vt = (e, n) => {
  for (var t in n || (n = {}))
    ht.call(n, t) && le(e, t, n[t]);
  if (oe)
    for (var t of oe(n))
      mt.call(n, t) && le(e, t, n[t]);
  return e;
};
const bt = {
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
vt({
  linear: Be
}, bt);
const h = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, pt = {
  name: "axdd-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: ft({
      emitAuto: !0,
      attribute: "data-bs-theme"
    }) };
  }
}, gt = { class: "d-flex mt-4 align-items-center" }, yt = /* @__PURE__ */ a("div", { class: "small me-2" }, "color mode:", -1), wt = /* @__PURE__ */ a("option", { value: "auto" }, "Auto", -1), $t = /* @__PURE__ */ a("option", { value: "light" }, "Light", -1), kt = /* @__PURE__ */ a("option", { value: "dark" }, "Dark", -1), xt = [
  wt,
  $t,
  kt
];
function Ot(e, n, t, r, o, s) {
  return i(), l("div", gt, [
    yt,
    a("div", null, [
      Ie(a("select", {
        "onUpdate:modelValue": n[0] || (n[0] = (c) => r.colorMode = c),
        class: "form-select form-select-sm"
      }, xt, 512), [
        [Pe, r.colorMode]
      ])
    ])
  ]);
}
const St = /* @__PURE__ */ h(pt, [["render", Ot]]), It = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, Pt = { class: "card rounded-3 border-0 mb-4 p-4" };
function Nt(e, n, t, r, o, s) {
  return i(), l("div", Pt, [
    d(e.$slots, "default")
  ]);
}
const Ct = /* @__PURE__ */ h(It, [["render", Nt]]);
const Et = {
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
}, Tt = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, qt = { class: "d-flex" }, Mt = /* @__PURE__ */ a("div", { class: "flex-fill" }, "username", -1), jt = { class: "flex-fill text-end" }, At = ["href"], Lt = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Bt = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), Ft = [
  Bt
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
}, Rt = /* @__PURE__ */ a("div", { class: "sol-sidebar-logo" }, " ", -1), Qt = { class: "flex-fill" }, Wt = { key: 0 }, zt = { class: "font-weight-light py-3 small" }, Ht = /* @__PURE__ */ ue('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul></ul>', 1);
function Kt(e, n, t, r, o, s) {
  const c = K("router-link");
  return i(), l("div", {
    class: f([s.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: W([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    a("div", {
      class: f([t.sidebarClass + [s.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: W([s.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      a("header", null, [
        e.$slots.profile ? (i(), l("div", Tt, [
          d(e.$slots, "profile", {}, () => [
            a("div", qt, [
              Mt,
              a("div", jt, [
                a("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, At)
              ])
            ])
          ])
        ])) : _("", !0),
        a("div", {
          class: f([[s.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (i(), l("a", Lt, Ft)) : _("", !0),
          a("div", {
            class: f(["d-inline align-middle", [s.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ce(c, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: j(() => [
                N(m(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      a("div", {
        id: "sidebar-nav-collapse",
        class: f(["px-3 flex-fill", [
          s.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (i(), l("nav", Dt, [
          d(e.$slots, "navigation", {}, () => [
            Ut
          ])
        ])) : _("", !0),
        e.$slots.aside ? (i(), l("aside", Vt, [
          d(e.$slots, "aside", {}, () => [
            N("this is aside content")
          ])
        ])) : _("", !0)
      ], 2),
      Rt
    ], 6),
    a("div", {
      class: f([[s.mq.mdMinus ? "" : "flex-fill overflow-y-auto"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      a("div", {
        class: f([[s.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        a("main", Qt, [
          d(e.$slots, "main")
        ]),
        e.$slots.footer ? (i(), l("footer", Wt, [
          d(e.$slots, "footer", {}, () => [
            a("div", zt, [
              Ht,
              a("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : _("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Jt = /* @__PURE__ */ h(Et, [["render", Kt]]);
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
}, Zt = { class: "container-xl" }, en = { class: "axdd-topbar-brand" }, tn = { class: "container-xl axdd-topbar-logo" }, nn = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, an = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), sn = [
  an
], rn = { class: "w-100 flex-fill bg-body text-body" }, on = { class: "container-xl" }, ln = { class: "row" }, dn = { role: "navigation" }, cn = { key: 0 }, un = { class: "col" }, fn = {
  key: 0,
  class: "my-3"
}, _n = /* @__PURE__ */ a("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ a("h1", null, "Hello world..."),
  /* @__PURE__ */ a("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), hn = { class: "w-100" }, mn = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, vn = { class: "container-xl" }, bn = { class: "text-white font-weight-light py-3" }, pn = /* @__PURE__ */ ue('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function gn(e, n, t, r, o, s) {
  const c = K("router-link");
  return i(), l("div", {
    class: f([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    a("header", Yt, [
      e.$slots.profile ? (i(), l("div", Xt, [
        a("div", Zt, [
          d(e.$slots, "profile", {}, () => [
            N("Welcome!")
          ])
        ])
      ])) : _("", !0),
      a("div", en, [
        a("div", tn, [
          e.$slots.navigation ? (i(), l("a", nn, sn)) : _("", !0),
          a("div", {
            class: f(["d-inline align-middle text-white", [s.mq.xlPlus ? "h2" : "h3"]])
          }, [
            ce(c, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: j(() => [
                N(m(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    a("div", rn, [
      a("div", on, [
        a("div", ln, [
          e.$slots.navigation || e.$slots.aside ? (i(), l("div", {
            key: 0,
            class: "",
            style: W(s.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            a("div", {
              id: "topbar-nav-collapse",
              class: f([s.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              a("nav", dn, [
                d(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (i(), l("aside", cn, [
                d(e.$slots, "aside", {}, () => [
                  N("this is aside content")
                ])
              ])) : _("", !0)
            ], 2)
          ], 4)) : _("", !0),
          a("div", un, [
            e.$slots.bar ? (i(), l("div", fn, [
              d(e.$slots, "bar")
            ])) : _("", !0),
            a("main", null, [
              d(e.$slots, "main", {}, () => [
                _n
              ])
            ])
          ])
        ])
      ])
    ]),
    a("footer", hn, [
      e.$slots.footer ? (i(), l("div", mn, [
        a("div", vn, [
          d(e.$slots, "footer", {}, () => [
            a("div", bn, [
              pn,
              a("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : _("", !0)
    ])
  ], 2);
}
const yn = /* @__PURE__ */ h(Gt, [["render", gn]]), wn = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, $n = { class: "card shadow-sm rounded-3 mb-4" }, kn = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, xn = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, On = {
  key: 2,
  class: "card-body"
}, Sn = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function In(e, n, t, r, o, s) {
  return i(), l("div", $n, [
    e.$slots.heading ? (i(), l("div", kn, [
      d(e.$slots, "heading")
    ])) : _("", !0),
    e.$slots["heading-action"] ? (i(), l("div", xn, [
      d(e.$slots, "heading-action")
    ])) : _("", !0),
    e.$slots.body ? (i(), l("div", On, [
      d(e.$slots, "body")
    ])) : _("", !0),
    e.$slots.footer ? (i(), l("div", Sn, [
      d(e.$slots, "footer")
    ])) : _("", !0)
  ]);
}
const Pn = /* @__PURE__ */ h(wn, [["render", In]]), Nn = {
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
function Cn(e, n, t, r, o, s) {
  return i(), F(Ne(`h${s.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: j(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  });
}
const En = /* @__PURE__ */ h(Nn, [["render", Cn]]), Tn = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function qn(e, n, t, r, o, s) {
  return i(), l("div", null, [
    d(e.$slots, "default")
  ]);
}
const Mn = /* @__PURE__ */ h(Tn, [["render", qn]]), jn = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function An(e, n, t, r, o, s) {
  return i(), l("div", null, [
    d(e.$slots, "default")
  ]);
}
const Ln = /* @__PURE__ */ h(jn, [["render", An]]);
const Bn = {
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
}, Fn = ["id"], Dn = ["id"];
function Un(e, n, t, r, o, s) {
  return t.variant == "lines" ? (i(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 8, Fn)) : t.variant == "pills" ? (i(), l("ul", {
    key: 1,
    class: f(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 10, Dn)) : _("", !0);
}
const Vn = /* @__PURE__ */ h(Bn, [["render", Un]]), Rn = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Qn = ["id"];
function Wn(e, n, t, r, o, s) {
  return i(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    d(e.$slots, "panels")
  ], 8, Qn);
}
const zn = /* @__PURE__ */ h(Rn, [["render", Wn]]), Hn = {
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
      return [].findIndex.call(this.elements, (n) => n === e);
    },
    moveTab(e) {
      this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((n, t) => {
        t == e ? n.tabIndex = 0 : n.tabIndex = -1;
      });
    },
    moveNext(e) {
      const n = this.findIndex(e.target);
      n < this.elements.length - 1 && this.moveTab(n + 1);
    },
    movePrev(e) {
      const n = this.findIndex(e.target);
      n > 0 && this.moveTab(n - 1);
    },
    onClick(e) {
      const n = this.findIndex(e.target);
      this.moveTab(n);
    }
  }
}, Kn = {
  class: "nav-item",
  role: "presentation"
}, Jn = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Gn = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Yn = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Xn(e, n, t, r, o, s) {
  return i(), l("li", Kn, [
    t.variant == "lines" ? (i(), l("button", {
      key: 0,
      class: f(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", s.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[0] || (n[0] = q((...c) => s.moveNext && s.moveNext(...c), ["right"])),
        n[1] || (n[1] = q((...c) => s.movePrev && s.movePrev(...c), ["left"]))
      ],
      onClick: n[2] || (n[2] = (...c) => s.onClick && s.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Jn)) : t.variant == "pills" ? (i(), l("button", {
      key: 1,
      class: f(["nav-pills-link rounded-3 px-3 py-2", s.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[3] || (n[3] = q((...c) => s.moveNext && s.moveNext(...c), ["right"])),
        n[4] || (n[4] = q((...c) => s.movePrev && s.movePrev(...c), ["left"]))
      ],
      onClick: n[5] || (n[5] = (...c) => s.onClick && s.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Gn)) : (i(), l("button", {
      key: 2,
      class: f(["nav-link", s.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[6] || (n[6] = q((...c) => s.moveNext && s.moveNext(...c), ["right"])),
        n[7] || (n[7] = q((...c) => s.movePrev && s.movePrev(...c), ["left"]))
      ],
      onClick: n[8] || (n[8] = (...c) => s.onClick && s.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Yn))
  ]);
}
const Zn = /* @__PURE__ */ h(Hn, [["render", Xn]]), ea = {
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
}, ta = ["id", "aria-labelledby"];
function na(e, n, t, r, o, s) {
  return i(), l("div", {
    class: f(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: n[0] || (n[0] = q(Ce((...c) => s.setFocus && s.setFocus(...c), ["shift", "prevent"]), ["tab"]))
  }, [
    d(e.$slots, "default")
  ], 42, ta);
}
const aa = /* @__PURE__ */ h(ea, [["render", na]]), sa = {
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
}, ra = {
  key: 0,
  class: "d-flex"
}, ia = { class: "flex-fill dropdown" }, oa = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, la = { class: "me-1" }, da = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), ca = { class: "text-decoration-underline" }, ua = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, fa = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, _a = {
  key: 0,
  class: "small text-danger"
}, ha = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), ma = { class: "small" }, va = { class: "small" }, ba = ["href"], pa = ["href"], ga = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1), ya = {
  key: 1,
  class: "d-flex"
}, wa = {
  key: 0,
  class: "flex-fill text-white"
}, $a = { class: "me-1" }, ka = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), xa = {
  key: 1,
  class: "flex-fill text-white"
}, Oa = { class: "flex-fill text-end" }, Sa = ["href"], Ia = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1);
function Pa(e, n, t, r, o, s) {
  return t.variant === "flyout" ? (i(), l("div", ra, [
    a("div", ia, [
      t.userOverride ? (i(), l("a", oa, [
        a("span", la, m(t.userNetid), 1),
        da,
        a("span", ca, m(t.userOverride), 1)
      ])) : (i(), l("a", ua, m(t.userNetid), 1)),
      a("div", fa, [
        t.userOverride ? (i(), l("p", _a, [
          N(" overriding as "),
          ha,
          N(" " + m(t.userOverride), 1)
        ])) : _("", !0),
        a("p", ma, m(t.userOfficialName) + ", " + m(t.userPreferredName) + ", " + m(t.userPronouns), 1),
        a("p", va, [
          a("a", { href: t.profileUrl }, "go to profile", 8, ba)
        ]),
        a("div", null, [
          t.signoutUrl ? d(e.$slots, "default", { key: 0 }, () => [
            a("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, pa)
          ]) : d(e.$slots, "default", { key: 1 }, () => [
            ga
          ])
        ])
      ])
    ])
  ])) : (i(), l("div", ya, [
    t.userOverride ? (i(), l("div", wa, [
      a("span", $a, m(t.userNetid), 1),
      ka,
      N(" " + m(t.userOverride), 1)
    ])) : (i(), l("div", xa, m(t.userNetid), 1)),
    a("div", Oa, [
      t.signoutUrl ? d(e.$slots, "default", { key: 0 }, () => [
        a("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Sa)
      ]) : d(e.$slots, "default", { key: 1 }, () => [
        Ia
      ])
    ])
  ]));
}
const Na = /* @__PURE__ */ h(sa, [["render", Pa]]);
const Ca = {
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
}, Ea = ["href", "aria-controls"], Ta = ["data-bs-target", "aria-controls"], qa = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function Ma(e, n, t, r, o, s) {
  return t.isLink ? (i(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    d(e.$slots, "default", {}, void 0, !0)
  ], 8, Ea)) : (i(), l("button", {
    key: 1,
    class: f(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (i(), l("i", qa)) : _("", !0),
    d(e.$slots, "default", {}, void 0, !0)
  ], 10, Ta));
}
const ja = /* @__PURE__ */ h(Ca, [["render", Ma], ["__scopeId", "data-v-bac417f3"]]), Aa = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, La = ["id"];
function Ba(e, n, t, r, o, s) {
  return i(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    d(e.$slots, "default")
  ], 8, La);
}
const Fa = /* @__PURE__ */ h(Aa, [["render", Ba]]);
const Da = {
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
}, Ua = (e) => (Ee("data-v-075da959"), e = e(), Te(), e), Va = { class: "rounded-3 p-3 mb-2" }, Ra = { class: "d-flex" }, Qa = {
  class: "me-3",
  style: { width: "330px" }
}, Wa = ["data-bs-target", "aria-controls"], za = /* @__PURE__ */ Ua(() => /* @__PURE__ */ a("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), Ha = ["id"], Ka = { class: "flex-fill" }, Ja = ["id", "aria-labelledby"];
function Ga(e, n, t, r, o, s) {
  return i(), l("div", Va, [
    a("div", Ra, [
      a("div", Qa, [
        a("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          za,
          a("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, m(t.blockTitle), 9, Ha)
        ], 8, Wa)
      ]),
      a("div", Ka, [
        d(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    a("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      d(e.$slots, "body", {}, void 0, !0)
    ], 8, Ja)
  ]);
}
const Ya = /* @__PURE__ */ h(Da, [["render", Ga], ["__scopeId", "data-v-075da959"]]), Xa = {
  name: "sol-link",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default"
    },
    href: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !1
    },
    color: {
      type: String,
      required: !1,
      default: ""
    },
    isExternal: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  data: function() {
    return {};
  }
}, Za = ["href"], es = ["href"], ts = ["href"];
function ns(e, n, t, r, o, s) {
  const c = K("router-link");
  return t.variant == "icon" && t.isExternal ? (i(), l("a", {
    key: 0,
    href: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"])
  }, [
    d(e.$slots, "icon", {}, () => [
      a("i", {
        class: f(["bi me-1", t.icon])
      }, null, 2)
    ]),
    d(e.$slots, "default")
  ], 10, Za)) : t.variant == "quiet" && t.isExternal ? (i(), l("a", {
    key: 1,
    href: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"])
  }, [
    d(e.$slots, "default")
  ], 10, es)) : t.isExternal ? (i(), l("a", {
    key: 2,
    href: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-50-hover"])
  }, [
    d(e.$slots, "default")
  ], 10, ts)) : t.variant == "icon" ? (i(), F(c, {
    key: 3,
    to: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"])
  }, {
    default: j(() => [
      d(e.$slots, "icon", {}, () => [
        a("i", {
          class: f(["bi me-1", t.icon])
        }, null, 2)
      ]),
      d(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class"])) : t.variant == "quiet" ? (i(), F(c, {
    key: 4,
    to: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"])
  }, {
    default: j(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class"])) : (i(), F(c, {
    key: 5,
    to: t.href,
    class: f([[t.color ? t.color : "link-underline"], "link-offset-1 link-underline-opacity-50-hover"])
  }, {
    default: j(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class"]));
}
const as = /* @__PURE__ */ h(Xa, [["render", ns]]), R = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Pn,
  CardHeading: En,
  CardAction: Mn,
  CardTabs: Ln,
  DisclosureAction: ja,
  DisclosureBlock: Ya,
  DisclosurePanel: Fa,
  Profile: Na,
  TabsList: Vn,
  TabsDisplay: zn,
  TabsItem: Zn,
  TabsPanel: aa,
  Sidebar: Jt,
  Topbar: yn,
  ColorMode: St,
  Panel: Ct,
  Link: as
}, rs = {
  install(e) {
    for (const n in R)
      if (Object.prototype.hasOwnProperty.call(R, n)) {
        const t = R[n];
        e.component(t.name, t);
      }
  }
};
export {
  rs as default
};
