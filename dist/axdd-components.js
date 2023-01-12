import { getCurrentInstance as he, onMounted as ve, nextTick as ne, unref as be, ref as j, getCurrentScope as me, onScopeDispose as ge, watch as B, computed as V, shallowRef as ye, watchEffect as we, openBlock as i, createElementBlock as l, createElementVNode as a, toDisplayString as _, withDirectives as $e, vModelSelect as xe, renderSlot as c, createTextVNode as I, createCommentVNode as f, normalizeClass as p, pushScopeId as Oe, popScopeId as ke, createBlock as Se, resolveDynamicComponent as Ie, withCtx as z, withKeys as E, withModifiers as Pe, resolveComponent as re, normalizeStyle as R, createVNode as oe, createStaticVNode as ie } from "vue";
var H;
const L = typeof window < "u", Ne = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Te = () => {
};
L && ((H = window == null ? void 0 : window.navigator) != null && H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function le(e) {
  return typeof e == "function" ? e() : be(e);
}
function Ee(e, s) {
  function t(...n) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => s.apply(this, n), { fn: s, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return t;
}
const de = (e) => e();
function Me(e = de) {
  const s = j(!0);
  function t() {
    s.value = !1;
  }
  function n() {
    s.value = !0;
  }
  return { isActive: s, pause: t, resume: n, eventFilter: (...r) => {
    s.value && e(...r);
  } };
}
function je(e) {
  return e;
}
function ce(e) {
  return me() ? (ge(e), !0) : !1;
}
function qe(e) {
  return typeof e == "function" ? V(e) : j(e);
}
function ue(e, s = !0) {
  he() ? ve(e) : s ? e() : ne(e);
}
var K = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Fe = (e, s) => {
  var t = {};
  for (var n in e)
    Ae.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && K)
    for (var n of K(e))
      s.indexOf(n) < 0 && Le.call(e, n) && (t[n] = e[n]);
  return t;
};
function Be(e, s, t = {}) {
  const n = t, {
    eventFilter: o = de
  } = n, r = Fe(n, [
    "eventFilter"
  ]);
  return B(e, Ee(o, s), r);
}
var De = Object.defineProperty, Ue = Object.defineProperties, Ve = Object.getOwnPropertyDescriptors, D = Object.getOwnPropertySymbols, fe = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, J = (e, s, t) => s in e ? De(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, Re = (e, s) => {
  for (var t in s || (s = {}))
    fe.call(s, t) && J(e, t, s[t]);
  if (D)
    for (var t of D(s))
      _e.call(s, t) && J(e, t, s[t]);
  return e;
}, Qe = (e, s) => Ue(e, Ve(s)), We = (e, s) => {
  var t = {};
  for (var n in e)
    fe.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && D)
    for (var n of D(e))
      s.indexOf(n) < 0 && _e.call(e, n) && (t[n] = e[n]);
  return t;
};
function ze(e, s, t = {}) {
  const n = t, {
    eventFilter: o
  } = n, r = We(n, [
    "eventFilter"
  ]), { eventFilter: d, pause: v, resume: P, isActive: y } = Me(o);
  return { stop: Be(e, s, Qe(Re({}, r), {
    eventFilter: d
  })), pause: v, resume: P, isActive: y };
}
function He(e) {
  var s;
  const t = le(e);
  return (s = t == null ? void 0 : t.$el) != null ? s : t;
}
const A = L ? window : void 0;
L && window.document;
L && window.navigator;
L && window.location;
function Ke(...e) {
  let s, t, n, o;
  if (Ce(e[0]) || Array.isArray(e[0]) ? ([t, n, o] = e, s = A) : [s, t, n, o] = e, !s)
    return Te;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const r = [], d = () => {
    r.forEach((b) => b()), r.length = 0;
  }, v = (b, g, x) => (b.addEventListener(g, x, o), () => b.removeEventListener(g, x, o)), P = B(() => He(s), (b) => {
    d(), b && r.push(...t.flatMap((g) => n.map((x) => v(b, g, x))));
  }, { immediate: !0, flush: "post" }), y = () => {
    P(), d();
  };
  return ce(y), y;
}
function Je(e, s = !1) {
  const t = j(), n = () => t.value = Boolean(e());
  return n(), ue(n, s), t;
}
function Ge(e, s = {}) {
  const { window: t = A } = s, n = Je(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const r = j(!1), d = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", v) : o.removeListener(v));
  }, v = () => {
    n.value && (d(), o = t.matchMedia(qe(e).value), r.value = o.matches, "addEventListener" in o ? o.addEventListener("change", v) : o.addListener(v));
  };
  return we(v), ce(() => d()), r;
}
const Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__";
Q[W] = Q[W] || {};
const Ye = Q[W];
function pe(e, s) {
  return Ye[e] || s;
}
function Xe(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Ze = Object.defineProperty, G = Object.getOwnPropertySymbols, et = Object.prototype.hasOwnProperty, tt = Object.prototype.propertyIsEnumerable, Y = (e, s, t) => s in e ? Ze(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, X = (e, s) => {
  for (var t in s || (s = {}))
    et.call(s, t) && Y(e, t, s[t]);
  if (G)
    for (var t of G(s))
      tt.call(s, t) && Y(e, t, s[t]);
  return e;
};
const st = {
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
};
function at(e, s, t, n = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: d = !0,
    listenToStorageChanges: v = !0,
    writeDefaults: P = !0,
    mergeDefaults: y = !1,
    shallow: b,
    window: g = A,
    eventFilter: x,
    onError: N = (u) => {
      console.error(u);
    }
  } = n, w = (b ? ye : j)(s);
  if (!t)
    try {
      t = pe("getDefaultStorage", () => {
        var u;
        return (u = A) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      N(u);
    }
  if (!t)
    return w;
  const O = le(s), q = Xe(O), k = (o = n.serializer) != null ? o : st[q], { pause: $, resume: S } = ze(w, () => C(w.value), { flush: r, deep: d, eventFilter: x });
  return g && v && Ke(g, "storage", F), F(), w;
  function C(u) {
    try {
      if (u == null)
        t.removeItem(e);
      else {
        const m = k.write(u), T = t.getItem(e);
        T !== m && (t.setItem(e, m), g && (g == null || g.dispatchEvent(new StorageEvent("storage", {
          key: e,
          oldValue: T,
          newValue: m,
          storageArea: t
        }))));
      }
    } catch (m) {
      N(m);
    }
  }
  function M(u) {
    const m = u ? u.newValue : t.getItem(e);
    if (m == null)
      return P && O !== null && t.setItem(e, k.write(O)), O;
    if (!u && y) {
      const T = k.read(m);
      return Ne(y) ? y(T, O) : q === "object" && !Array.isArray(T) ? X(X({}, O), T) : T;
    } else
      return typeof m != "string" ? m : k.read(m);
  }
  function F(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        w.value = O;
        return;
      }
      if (!(u && u.key !== e)) {
        $();
        try {
          w.value = M(u);
        } catch (m) {
          N(m);
        } finally {
          u ? ne(S) : S();
        }
      }
    }
  }
}
function nt(e) {
  return Ge("(prefers-color-scheme: dark)", e);
}
var rt = Object.defineProperty, Z = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, ee = (e, s, t) => s in e ? rt(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, lt = (e, s) => {
  for (var t in s || (s = {}))
    ot.call(s, t) && ee(e, t, s[t]);
  if (Z)
    for (var t of Z(s))
      it.call(s, t) && ee(e, t, s[t]);
  return e;
};
function dt(e = {}) {
  const {
    selector: s = "html",
    attribute: t = "class",
    initialValue: n = "auto",
    window: o = A,
    storage: r,
    storageKey: d = "vueuse-color-scheme",
    listenToStorageChanges: v = !0,
    storageRef: P,
    emitAuto: y
  } = e, b = lt({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), g = nt({ window: o }), x = V(() => g.value ? "dark" : "light"), N = P || (d == null ? j(n) : at(d, n, r, { window: o, listenToStorageChanges: v })), w = V({
    get() {
      return N.value === "auto" && !y ? x.value : N.value;
    },
    set($) {
      N.value = $;
    }
  }), O = pe("updateHTMLAttrs", ($, S, C) => {
    const M = o == null ? void 0 : o.document.querySelector($);
    if (M)
      if (S === "class") {
        const F = C.split(/\s/g);
        Object.values(b).flatMap((u) => (u || "").split(/\s/g)).filter(Boolean).forEach((u) => {
          F.includes(u) ? M.classList.add(u) : M.classList.remove(u);
        });
      } else
        M.setAttribute(S, C);
  });
  function q($) {
    var S;
    const C = $ === "auto" ? x.value : $;
    O(s, t, (S = b[C]) != null ? S : C);
  }
  function k($) {
    e.onChanged ? e.onChanged($, q) : q($);
  }
  return B(w, k, { flush: "post", immediate: !0 }), y && B(x, () => k(w.value), { flush: "post" }), ue(() => k(w.value)), w;
}
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var ct = Object.defineProperty, se = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, ft = Object.prototype.propertyIsEnumerable, ae = (e, s, t) => s in e ? ct(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, _t = (e, s) => {
  for (var t in s || (s = {}))
    ut.call(s, t) && ae(e, t, s[t]);
  if (se)
    for (var t of se(s))
      ft.call(s, t) && ae(e, t, s[t]);
  return e;
};
const pt = {
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
_t({
  linear: je
}, pt);
const h = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of s)
    t[n] = o;
  return t;
}, ht = {
  name: "axdd-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: dt({
      emitAuto: !0,
      attribute: "data-bs-theme"
    }) };
  }
}, vt = /* @__PURE__ */ a("option", { value: "auto" }, "Auto", -1), bt = /* @__PURE__ */ a("option", { value: "light" }, "Light", -1), mt = /* @__PURE__ */ a("option", { value: "dark" }, "Dark", -1), gt = [
  vt,
  bt,
  mt
];
function yt(e, s, t, n, o, r) {
  return i(), l("div", null, [
    a("p", null, "color mode: " + _(n.colorMode), 1),
    $e(a("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (d) => n.colorMode = d),
      class: "form-select"
    }, gt, 512), [
      [xe, n.colorMode]
    ])
  ]);
}
const wt = /* @__PURE__ */ h(ht, [["render", yt]]), $t = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, xt = { class: "card rounded-3 border-0 mb-4 p-4" };
function Ot(e, s, t, n, o, r) {
  return i(), l("div", xt, [
    c(e.$slots, "default")
  ]);
}
const kt = /* @__PURE__ */ h($t, [["render", Ot]]), St = {
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
}, It = {
  key: 0,
  class: "d-flex"
}, Pt = { class: "flex-fill dropdown" }, Nt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Ct = { class: "me-1" }, Tt = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), Et = { class: "text-decoration-underline" }, Mt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, jt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, qt = {
  key: 0,
  class: "small text-danger"
}, At = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Lt = { class: "small" }, Ft = { class: "small" }, Bt = ["href"], Dt = ["href"], Ut = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1), Vt = {
  key: 1,
  class: "d-flex"
}, Rt = {
  key: 0,
  class: "flex-fill text-white"
}, Qt = { class: "me-1" }, Wt = /* @__PURE__ */ a("i", { class: "bi bi-arrow-right text-danger" }, null, -1), zt = {
  key: 1,
  class: "flex-fill text-white"
}, Ht = { class: "flex-fill text-end" }, Kt = ["href"], Jt = /* @__PURE__ */ a("a", { href: "sadkf" }, "sign out test", -1);
function Gt(e, s, t, n, o, r) {
  return t.variant === "flyout" ? (i(), l("div", It, [
    a("div", Pt, [
      t.userOverride ? (i(), l("a", Nt, [
        a("span", Ct, _(t.userNetid), 1),
        Tt,
        a("span", Et, _(t.userOverride), 1)
      ])) : (i(), l("a", Mt, _(t.userNetid), 1)),
      a("div", jt, [
        t.userOverride ? (i(), l("p", qt, [
          I(" overriding as "),
          At,
          I(" " + _(t.userOverride), 1)
        ])) : f("", !0),
        a("p", Lt, _(t.userOfficialName) + ", " + _(t.userPreferredName) + ", " + _(t.userPronouns), 1),
        a("p", Ft, [
          a("a", { href: t.profileUrl }, "go to profile", 8, Bt)
        ]),
        a("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            a("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Dt)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            Ut
          ])
        ])
      ])
    ])
  ])) : (i(), l("div", Vt, [
    t.userOverride ? (i(), l("div", Rt, [
      a("span", Qt, _(t.userNetid), 1),
      Wt,
      I(" " + _(t.userOverride), 1)
    ])) : (i(), l("div", zt, _(t.userNetid), 1)),
    a("div", Ht, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        a("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Kt)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        Jt
      ])
    ])
  ]));
}
const Yt = /* @__PURE__ */ h(St, [["render", Gt]]);
const Xt = {
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
}, Zt = ["href", "aria-controls"], es = ["data-bs-target", "aria-controls"], ts = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function ss(e, s, t, n, o, r) {
  return t.isLink ? (i(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 8, Zt)) : (i(), l("button", {
    key: 1,
    class: p(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (i(), l("i", ts)) : f("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, es));
}
const as = /* @__PURE__ */ h(Xt, [["render", ss], ["__scopeId", "data-v-bac417f3"]]), ns = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, rs = ["id"];
function os(e, s, t, n, o, r) {
  return i(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, rs);
}
const is = /* @__PURE__ */ h(ns, [["render", os]]);
const ls = {
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
}, ds = (e) => (Oe("data-v-075da959"), e = e(), ke(), e), cs = { class: "rounded-3 p-3 mb-2" }, us = { class: "d-flex" }, fs = {
  class: "me-3",
  style: { width: "330px" }
}, _s = ["data-bs-target", "aria-controls"], ps = /* @__PURE__ */ ds(() => /* @__PURE__ */ a("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), hs = ["id"], vs = { class: "flex-fill" }, bs = ["id", "aria-labelledby"];
function ms(e, s, t, n, o, r) {
  return i(), l("div", cs, [
    a("div", us, [
      a("div", fs, [
        a("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          ps,
          a("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, _(t.blockTitle), 9, hs)
        ], 8, _s)
      ]),
      a("div", vs, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    a("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, bs)
  ]);
}
const gs = /* @__PURE__ */ h(ls, [["render", ms], ["__scopeId", "data-v-075da959"]]), ys = {
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
function Ss(e, s, t, n, o, r) {
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
const Is = /* @__PURE__ */ h(ys, [["render", Ss]]), Ps = {
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
function Ns(e, s, t, n, o, r) {
  return i(), Se(Ie(`h${r.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: z(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const Cs = /* @__PURE__ */ h(Ps, [["render", Ns]]), Ts = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Es(e, s, t, n, o, r) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const Ms = /* @__PURE__ */ h(Ts, [["render", Es]]), js = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function qs(e, s, t, n, o, r) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const As = /* @__PURE__ */ h(js, [["render", qs]]);
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
function Ds(e, s, t, n, o, r) {
  return t.variant == "lines" ? (i(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, Fs)) : t.variant == "pills" ? (i(), l("ul", {
    key: 1,
    class: p(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, Bs)) : f("", !0);
}
const Us = /* @__PURE__ */ h(Ls, [["render", Ds]]), Vs = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Rs = ["id"];
function Qs(e, s, t, n, o, r) {
  return i(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, Rs);
}
const Ws = /* @__PURE__ */ h(Vs, [["render", Qs]]), zs = {
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
function Ys(e, s, t, n, o, r) {
  return i(), l("li", Hs, [
    t.variant == "lines" ? (i(), l("button", {
      key: 0,
      class: p(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", r.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[0] || (s[0] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        s[1] || (s[1] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: s[2] || (s[2] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Ks)) : t.variant == "pills" ? (i(), l("button", {
      key: 1,
      class: p(["nav-pills-link rounded-3 px-3 py-2", r.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[3] || (s[3] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        s[4] || (s[4] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: s[5] || (s[5] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Js)) : (i(), l("button", {
      key: 2,
      class: p(["nav-link", r.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[6] || (s[6] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        s[7] || (s[7] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: s[8] || (s[8] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Gs))
  ]);
}
const Xs = /* @__PURE__ */ h(zs, [["render", Ys]]), Zs = {
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
function ta(e, s, t, n, o, r) {
  return i(), l("div", {
    class: p(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: s[0] || (s[0] = E(Pe((...d) => r.setFocus && r.setFocus(...d), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, ea);
}
const sa = /* @__PURE__ */ h(Zs, [["render", ta]]);
const aa = {
  name: "axdd-sidebar",
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
      default: "#"
    },
    signOutUrl: {
      type: String,
      default: "#"
    },
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  created: function() {
  }
}, na = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, ra = { class: "d-flex" }, oa = /* @__PURE__ */ a("div", { class: "flex-fill" }, "username", -1), ia = { class: "flex-fill text-end" }, la = ["href"], da = {
  key: 0,
  class: "btn btn-link btn-sm d-lg-none border border-1 rounded-3 py-0 px-1 me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ca = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), ua = [
  ca
], fa = {
  key: 0,
  class: "me-2"
}, _a = /* @__PURE__ */ a("i", { class: "bi bi-box-fill" }, null, -1), pa = { class: "flex-fill" }, ha = {
  key: 0,
  role: "navigation"
}, va = /* @__PURE__ */ a("ul", { class: "text-white" }, [
  /* @__PURE__ */ a("li", null, "nav 1"),
  /* @__PURE__ */ a("li", null, "nav 2"),
  /* @__PURE__ */ a("li", null, "nav 3"),
  /* @__PURE__ */ a("li", null, "nav 4")
], -1), ba = {
  key: 1,
  class: "mb-5"
}, ma = /* @__PURE__ */ a("div", { class: "axdd-sidebar-logo" }, " ", -1), ga = {
  key: 0,
  class: "row"
}, ya = { class: "col" }, wa = /* @__PURE__ */ a("div", { class: "bg-gray py-2 text-center" }, " default gray bar (default) ", -1), $a = { class: "flex-fill" }, xa = {
  key: 1,
  class: "mt-auto"
}, Oa = { class: "font-weight-light py-3 small" }, ka = /* @__PURE__ */ ie('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function Sa(e, s, t, n, o, r) {
  const d = re("router-link");
  return i(), l("div", {
    class: p([r.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: R([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    a("div", {
      class: p([[r.mq.mdMinus ? "" : "overflow-auto " + t.sidebarClass], "axdd-sidebar d-flex flex-column"]),
      "data-bs-theme": "dark",
      style: R([r.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      a("header", null, [
        e.$slots.profile ? (i(), l("div", na, [
          c(e.$slots, "profile", {}, () => [
            a("div", ra, [
              oa,
              a("div", ia, [
                a("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, la)
              ])
            ])
          ])
        ])) : f("", !0),
        a("div", {
          class: p([[
            r.mq.lgMinus ? "axdd-sidebar-brand-sm" : "axdd-sidebar-brand"
          ], "px-3"])
        }, [
          e.$slots.navigation ? (i(), l("a", da, ua)) : f("", !0),
          a("div", {
            class: p(["d-inline align-middle", [r.mq.mdPlus ? "h2" : "h3"]])
          }, [
            oe(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-decoration-none text-light"
            }, {
              default: z(() => [
                e.$slots.logo ? (i(), l("span", fa, [
                  c(e.$slots, "logo", {}, () => [
                    _a
                  ])
                ])) : f("", !0),
                I(_(t.appName), 1)
              ]),
              _: 3
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      a("div", pa, [
        a("div", {
          id: "sidebar-nav-collapse",
          class: p(["px-3", [r.mq.mdMinus ? "collapse" : "collapse.show"]])
        }, [
          e.$slots.navigation ? (i(), l("nav", ha, [
            c(e.$slots, "navigation", {}, () => [
              va
            ])
          ])) : f("", !0),
          e.$slots.aside ? (i(), l("aside", ba, [
            c(e.$slots, "aside", {}, () => [
              I("this is aside content")
            ])
          ])) : f("", !0)
        ], 2)
      ]),
      ma
    ], 6),
    a("div", {
      class: p([[r.mq.mdMinus ? "" : "flex-fill overflow-auto"], "bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      a("div", {
        class: p([[t.isPreview ? "" : "min-vh-100"], "container-xl d-flex flex-column"])
      }, [
        e.$slots.bar ? (i(), l("div", ga, [
          a("div", ya, [
            c(e.$slots, "bar", {}, () => [
              wa
            ])
          ])
        ])) : f("", !0),
        a("main", $a, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (i(), l("footer", xa, [
          c(e.$slots, "footer", {}, () => [
            a("div", Oa, [
              ka,
              a("div", null, " Copyright © " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Ia = /* @__PURE__ */ h(aa, [["render", Sa]]);
const Pa = {
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
}, Na = { class: "w-100" }, Ca = {
  key: 0,
  class: "bg-dark-purple text-white py-2 small"
}, Ta = { class: "container-xl" }, Ea = { class: "bg-purple axdd-topbar-brand" }, Ma = { class: "container-xl axdd-topbar-logo" }, ja = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, qa = /* @__PURE__ */ a("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Aa = [
  qa
], La = { class: "w-100 flex-fill bg-white" }, Fa = { class: "container-xl" }, Ba = { class: "row" }, Da = { role: "navigation" }, Ua = { key: 0 }, Va = { class: "col" }, Ra = {
  key: 0,
  class: "my-3"
}, Qa = /* @__PURE__ */ a("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ a("h1", null, "Hello world..."),
  /* @__PURE__ */ a("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Wa = { class: "w-100" }, za = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Ha = { class: "container-xl" }, Ka = { class: "text-white font-weight-light py-3" }, Ja = /* @__PURE__ */ ie('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Ga(e, s, t, n, o, r) {
  const d = re("router-link");
  return i(), l("div", {
    class: p([[t.isPreview ? " " : "min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    a("header", Na, [
      e.$slots.profile ? (i(), l("div", Ca, [
        a("div", Ta, [
          c(e.$slots, "profile", {}, () => [
            I("Welcome!")
          ])
        ])
      ])) : f("", !0),
      a("div", Ea, [
        a("div", Ma, [
          e.$slots.navigation ? (i(), l("a", ja, Aa)) : f("", !0),
          a("div", {
            class: p(["d-inline align-middle text-white", [r.mq.xlPlus ? "h2" : "h3"]])
          }, [
            oe(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: z(() => [
                I(_(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    a("div", La, [
      a("div", Fa, [
        a("div", Ba, [
          e.$slots.navigation || e.$slots.aside ? (i(), l("div", {
            key: 0,
            class: "",
            style: R(r.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            a("div", {
              id: "topbar-nav-collapse",
              class: p([r.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              a("nav", Da, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (i(), l("aside", Ua, [
                c(e.$slots, "aside", {}, () => [
                  I("this is aside content")
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          a("div", Va, [
            e.$slots.bar ? (i(), l("div", Ra, [
              c(e.$slots, "bar")
            ])) : f("", !0),
            a("main", null, [
              c(e.$slots, "main", {}, () => [
                Qa
              ])
            ])
          ])
        ])
      ])
    ]),
    a("footer", Wa, [
      e.$slots.footer ? (i(), l("div", za, [
        a("div", Ha, [
          c(e.$slots, "footer", {}, () => [
            a("div", Ka, [
              Ja,
              a("div", null, " Copyright © " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const Ya = /* @__PURE__ */ h(Pa, [["render", Ga]]), U = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Is,
  CardHeading: Cs,
  CardAction: Ms,
  CardTabs: As,
  DisclosureAction: as,
  DisclosureBlock: gs,
  DisclosurePanel: is,
  Profile: Yt,
  TabsList: Us,
  TabsDisplay: Ws,
  TabsItem: Xs,
  TabsPanel: sa,
  Sidebar: Ia,
  Topbar: Ya,
  ColorMode: wt,
  Panel: kt
}, Za = {
  install(e) {
    for (const s in U)
      if (Object.prototype.hasOwnProperty.call(U, s)) {
        const t = U[s];
        e.component(t.name, t);
      }
  }
};
export {
  Za as default
};
