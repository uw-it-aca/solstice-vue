import { getCurrentInstance as he, onMounted as ve, nextTick as ne, unref as be, ref as j, getCurrentScope as me, onScopeDispose as ge, watch as B, computed as V, shallowRef as ye, watchEffect as we, openBlock as i, createElementBlock as l, createElementVNode as s, toDisplayString as _, withDirectives as $e, vModelSelect as xe, renderSlot as c, createTextVNode as I, createCommentVNode as f, normalizeClass as p, pushScopeId as Oe, popScopeId as ke, createBlock as Se, resolveDynamicComponent as Ie, withCtx as z, withKeys as E, withModifiers as Pe, resolveComponent as re, normalizeStyle as R, createVNode as oe, createStaticVNode as ie } from "vue";
var H;
const L = typeof window < "u", Ne = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Te = () => {
};
L && ((H = window == null ? void 0 : window.navigator) != null && H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function le(e) {
  return typeof e == "function" ? e() : be(e);
}
function Ee(e, a) {
  function t(...n) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => a.apply(this, n), { fn: a, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return t;
}
const de = (e) => e();
function Me(e = de) {
  const a = j(!0);
  function t() {
    a.value = !1;
  }
  function n() {
    a.value = !0;
  }
  return { isActive: a, pause: t, resume: n, eventFilter: (...r) => {
    a.value && e(...r);
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
function ue(e, a = !0) {
  he() ? ve(e) : a ? e() : ne(e);
}
var K = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Fe = (e, a) => {
  var t = {};
  for (var n in e)
    Ae.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && K)
    for (var n of K(e))
      a.indexOf(n) < 0 && Le.call(e, n) && (t[n] = e[n]);
  return t;
};
function Be(e, a, t = {}) {
  const n = t, {
    eventFilter: o = de
  } = n, r = Fe(n, [
    "eventFilter"
  ]);
  return B(e, Ee(o, a), r);
}
var De = Object.defineProperty, Ue = Object.defineProperties, Ve = Object.getOwnPropertyDescriptors, D = Object.getOwnPropertySymbols, fe = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, J = (e, a, t) => a in e ? De(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Re = (e, a) => {
  for (var t in a || (a = {}))
    fe.call(a, t) && J(e, t, a[t]);
  if (D)
    for (var t of D(a))
      _e.call(a, t) && J(e, t, a[t]);
  return e;
}, Qe = (e, a) => Ue(e, Ve(a)), We = (e, a) => {
  var t = {};
  for (var n in e)
    fe.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && D)
    for (var n of D(e))
      a.indexOf(n) < 0 && _e.call(e, n) && (t[n] = e[n]);
  return t;
};
function ze(e, a, t = {}) {
  const n = t, {
    eventFilter: o
  } = n, r = We(n, [
    "eventFilter"
  ]), { eventFilter: d, pause: v, resume: P, isActive: y } = Me(o);
  return { stop: Be(e, a, Qe(Re({}, r), {
    eventFilter: d
  })), pause: v, resume: P, isActive: y };
}
function He(e) {
  var a;
  const t = le(e);
  return (a = t == null ? void 0 : t.$el) != null ? a : t;
}
const A = L ? window : void 0;
L && window.document;
L && window.navigator;
L && window.location;
function Ke(...e) {
  let a, t, n, o;
  if (Ce(e[0]) || Array.isArray(e[0]) ? ([t, n, o] = e, a = A) : [a, t, n, o] = e, !a)
    return Te;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const r = [], d = () => {
    r.forEach((b) => b()), r.length = 0;
  }, v = (b, g, x) => (b.addEventListener(g, x, o), () => b.removeEventListener(g, x, o)), P = B(() => He(a), (b) => {
    d(), b && r.push(...t.flatMap((g) => n.map((x) => v(b, g, x))));
  }, { immediate: !0, flush: "post" }), y = () => {
    P(), d();
  };
  return ce(y), y;
}
function Je(e, a = !1) {
  const t = j(), n = () => t.value = Boolean(e());
  return n(), ue(n, a), t;
}
function Ge(e, a = {}) {
  const { window: t = A } = a, n = Je(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
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
function pe(e, a) {
  return Ye[e] || a;
}
function Xe(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Ze = Object.defineProperty, G = Object.getOwnPropertySymbols, et = Object.prototype.hasOwnProperty, tt = Object.prototype.propertyIsEnumerable, Y = (e, a, t) => a in e ? Ze(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, X = (e, a) => {
  for (var t in a || (a = {}))
    et.call(a, t) && Y(e, t, a[t]);
  if (G)
    for (var t of G(a))
      tt.call(a, t) && Y(e, t, a[t]);
  return e;
};
const at = {
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
function st(e, a, t, n = {}) {
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
  } = n, w = (b ? ye : j)(a);
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
  const O = le(a), q = Xe(O), k = (o = n.serializer) != null ? o : at[q], { pause: $, resume: S } = ze(w, () => C(w.value), { flush: r, deep: d, eventFilter: x });
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
var rt = Object.defineProperty, Z = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, ee = (e, a, t) => a in e ? rt(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, lt = (e, a) => {
  for (var t in a || (a = {}))
    ot.call(a, t) && ee(e, t, a[t]);
  if (Z)
    for (var t of Z(a))
      it.call(a, t) && ee(e, t, a[t]);
  return e;
};
function dt(e = {}) {
  const {
    selector: a = "html",
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
  }, e.modes || {}), g = nt({ window: o }), x = V(() => g.value ? "dark" : "light"), N = P || (d == null ? j(n) : st(d, n, r, { window: o, listenToStorageChanges: v })), w = V({
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
    O(a, t, (S = b[C]) != null ? S : C);
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
var ct = Object.defineProperty, ae = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, ft = Object.prototype.propertyIsEnumerable, se = (e, a, t) => a in e ? ct(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, _t = (e, a) => {
  for (var t in a || (a = {}))
    ut.call(a, t) && se(e, t, a[t]);
  if (ae)
    for (var t of ae(a))
      ft.call(a, t) && se(e, t, a[t]);
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
const h = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of a)
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
}, vt = /* @__PURE__ */ s("option", { value: "auto" }, "Auto", -1), bt = /* @__PURE__ */ s("option", { value: "light" }, "Light", -1), mt = /* @__PURE__ */ s("option", { value: "dark" }, "Dark", -1), gt = [
  vt,
  bt,
  mt
];
function yt(e, a, t, n, o, r) {
  return i(), l("div", null, [
    s("p", null, "color mode: " + _(n.colorMode), 1),
    $e(s("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (d) => n.colorMode = d),
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
function Ot(e, a, t, n, o, r) {
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
}, Ct = { class: "me-1" }, Tt = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), Et = { class: "text-decoration-underline" }, Mt = {
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
}, At = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Lt = { class: "small" }, Ft = { class: "small" }, Bt = ["href"], Dt = ["href"], Ut = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), Vt = {
  key: 1,
  class: "d-flex"
}, Rt = {
  key: 0,
  class: "flex-fill text-white"
}, Qt = { class: "me-1" }, Wt = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), zt = {
  key: 1,
  class: "flex-fill text-white"
}, Ht = { class: "flex-fill text-end" }, Kt = ["href"], Jt = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function Gt(e, a, t, n, o, r) {
  return t.variant === "flyout" ? (i(), l("div", It, [
    s("div", Pt, [
      t.userOverride ? (i(), l("a", Nt, [
        s("span", Ct, _(t.userNetid), 1),
        Tt,
        s("span", Et, _(t.userOverride), 1)
      ])) : (i(), l("a", Mt, _(t.userNetid), 1)),
      s("div", jt, [
        t.userOverride ? (i(), l("p", qt, [
          I(" overriding as "),
          At,
          I(" " + _(t.userOverride), 1)
        ])) : f("", !0),
        s("p", Lt, _(t.userOfficialName) + ", " + _(t.userPreferredName) + ", " + _(t.userPronouns), 1),
        s("p", Ft, [
          s("a", { href: t.profileUrl }, "go to profile", 8, Bt)
        ]),
        s("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            s("a", {
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
      s("span", Qt, _(t.userNetid), 1),
      Wt,
      I(" " + _(t.userOverride), 1)
    ])) : (i(), l("div", zt, _(t.userNetid), 1)),
    s("div", Ht, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        s("a", {
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
}, Zt = ["href", "aria-controls"], ea = ["data-bs-target", "aria-controls"], ta = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function aa(e, a, t, n, o, r) {
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
    t.hasIndicator ? (i(), l("i", ta)) : f("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, ea));
}
const sa = /* @__PURE__ */ h(Xt, [["render", aa], ["__scopeId", "data-v-bac417f3"]]), na = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ra = ["id"];
function oa(e, a, t, n, o, r) {
  return i(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, ra);
}
const ia = /* @__PURE__ */ h(na, [["render", oa]]);
const la = {
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
}, da = (e) => (Oe("data-v-075da959"), e = e(), ke(), e), ca = { class: "rounded-3 p-3 mb-2" }, ua = { class: "d-flex" }, fa = {
  class: "me-3",
  style: { width: "330px" }
}, _a = ["data-bs-target", "aria-controls"], pa = /* @__PURE__ */ da(() => /* @__PURE__ */ s("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), ha = ["id"], va = { class: "flex-fill" }, ba = ["id", "aria-labelledby"];
function ma(e, a, t, n, o, r) {
  return i(), l("div", ca, [
    s("div", ua, [
      s("div", fa, [
        s("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          pa,
          s("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, _(t.blockTitle), 9, ha)
        ], 8, _a)
      ]),
      s("div", va, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    s("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, ba)
  ]);
}
const ga = /* @__PURE__ */ h(la, [["render", ma], ["__scopeId", "data-v-075da959"]]), ya = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, wa = { class: "card shadow-sm rounded-3 mb-4" }, $a = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, xa = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, Oa = {
  key: 2,
  class: "card-body"
}, ka = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function Sa(e, a, t, n, o, r) {
  return i(), l("div", wa, [
    e.$slots.heading ? (i(), l("div", $a, [
      c(e.$slots, "heading")
    ])) : f("", !0),
    e.$slots["heading-action"] ? (i(), l("div", xa, [
      c(e.$slots, "heading-action")
    ])) : f("", !0),
    e.$slots.body ? (i(), l("div", Oa, [
      c(e.$slots, "body")
    ])) : f("", !0),
    e.$slots.footer ? (i(), l("div", ka, [
      c(e.$slots, "footer")
    ])) : f("", !0)
  ]);
}
const Ia = /* @__PURE__ */ h(ya, [["render", Sa]]), Pa = {
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
function Na(e, a, t, n, o, r) {
  return i(), Se(Ie(`h${r.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: z(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ca = /* @__PURE__ */ h(Pa, [["render", Na]]), Ta = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Ea(e, a, t, n, o, r) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const Ma = /* @__PURE__ */ h(Ta, [["render", Ea]]), ja = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function qa(e, a, t, n, o, r) {
  return i(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const Aa = /* @__PURE__ */ h(ja, [["render", qa]]);
const La = {
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
}, Fa = ["id"], Ba = ["id"];
function Da(e, a, t, n, o, r) {
  return t.variant == "lines" ? (i(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, Fa)) : t.variant == "pills" ? (i(), l("ul", {
    key: 1,
    class: p(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, Ba)) : f("", !0);
}
const Ua = /* @__PURE__ */ h(La, [["render", Da]]), Va = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Ra = ["id"];
function Qa(e, a, t, n, o, r) {
  return i(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, Ra);
}
const Wa = /* @__PURE__ */ h(Va, [["render", Qa]]), za = {
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
      return [].findIndex.call(this.elements, (a) => a === e);
    },
    moveTab(e) {
      this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((a, t) => {
        t == e ? a.tabIndex = 0 : a.tabIndex = -1;
      });
    },
    moveNext(e) {
      const a = this.findIndex(e.target);
      a < this.elements.length - 1 && this.moveTab(a + 1);
    },
    movePrev(e) {
      const a = this.findIndex(e.target);
      a > 0 && this.moveTab(a - 1);
    },
    onClick(e) {
      const a = this.findIndex(e.target);
      this.moveTab(a);
    }
  }
}, Ha = {
  class: "nav-item",
  role: "presentation"
}, Ka = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Ja = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Ga = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ya(e, a, t, n, o, r) {
  return i(), l("li", Ha, [
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
        a[0] || (a[0] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        a[1] || (a[1] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: a[2] || (a[2] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Ka)) : t.variant == "pills" ? (i(), l("button", {
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
        a[3] || (a[3] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        a[4] || (a[4] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: a[5] || (a[5] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Ja)) : (i(), l("button", {
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
        a[6] || (a[6] = E((...d) => r.moveNext && r.moveNext(...d), ["right"])),
        a[7] || (a[7] = E((...d) => r.movePrev && r.movePrev(...d), ["left"]))
      ],
      onClick: a[8] || (a[8] = (...d) => r.onClick && r.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, Ga))
  ]);
}
const Xa = /* @__PURE__ */ h(za, [["render", Ya]]), Za = {
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
}, es = ["id", "aria-labelledby"];
function ts(e, a, t, n, o, r) {
  return i(), l("div", {
    class: p(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: a[0] || (a[0] = E(Pe((...d) => r.setFocus && r.setFocus(...d), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, es);
}
const as = /* @__PURE__ */ h(Za, [["render", ts]]);
const ss = {
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
}, ns = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, rs = { class: "d-flex" }, os = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), is = { class: "flex-fill text-end" }, ls = ["href"], ds = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, cs = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), us = [
  cs
], fs = { class: "flex-fill" }, _s = {
  key: 0,
  role: "navigation"
}, ps = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), hs = {
  key: 1,
  class: "mb-5"
}, vs = /* @__PURE__ */ s("div", { class: "axdd-sidebar-logo" }, " ", -1), bs = {
  key: 0,
  class: "row"
}, ms = { class: "col" }, gs = /* @__PURE__ */ s("div", { class: "bg-gray py-2 text-center" }, " default gray bar (default) ", -1), ys = { class: "flex-fill" }, ws = {
  key: 1,
  class: "mt-auto"
}, $s = { class: "font-weight-light py-3 small" }, xs = /* @__PURE__ */ ie('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function Os(e, a, t, n, o, r) {
  const d = re("router-link");
  return i(), l("div", {
    class: p([r.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: R([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: p([t.sidebarClass + [r.mq.mdMinus ? "" : " overflow-auto"], "axdd-sidebar d-flex flex-column"]),
      style: R([r.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (i(), l("div", ns, [
          c(e.$slots, "profile", {}, () => [
            s("div", rs, [
              os,
              s("div", is, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ls)
              ])
            ])
          ])
        ])) : f("", !0),
        s("div", {
          class: p([[
            r.mq.lgMinus ? "axdd-sidebar-brand-sm" : "axdd-sidebar-brand"
          ], "px-3"])
        }, [
          e.$slots.navigation ? (i(), l("a", ds, us)) : f("", !0),
          s("div", {
            class: p(["d-inline align-middle", [r.mq.mdPlus ? "h2" : "h3"]])
          }, [
            oe(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-decoration-none text-light"
            }, {
              default: z(() => [
                I(_(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      s("div", fs, [
        s("div", {
          id: "sidebar-nav-collapse",
          class: p(["px-3", [r.mq.mdMinus ? "collapse" : "collapse.show"]])
        }, [
          e.$slots.navigation ? (i(), l("nav", _s, [
            c(e.$slots, "navigation", {}, () => [
              ps
            ])
          ])) : f("", !0),
          e.$slots.aside ? (i(), l("aside", hs, [
            c(e.$slots, "aside", {}, () => [
              I("this is aside content")
            ])
          ])) : f("", !0)
        ], 2)
      ]),
      vs
    ], 6),
    s("div", {
      class: p([[r.mq.mdMinus ? "" : "flex-fill overflow-auto"], "bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: p([[t.isPreview ? "" : "min-vh-100"], "container-xl d-flex flex-column"])
      }, [
        e.$slots.bar ? (i(), l("div", bs, [
          s("div", ms, [
            c(e.$slots, "bar", {}, () => [
              gs
            ])
          ])
        ])) : f("", !0),
        s("main", ys, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (i(), l("footer", ws, [
          c(e.$slots, "footer", {}, () => [
            s("div", $s, [
              xs,
              s("div", null, " Copyright © " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const ks = /* @__PURE__ */ h(ss, [["render", Os]]);
const Ss = {
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
}, Is = { class: "w-100" }, Ps = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Ns = { class: "container-xl" }, Cs = { class: "axdd-topbar-brand" }, Ts = { class: "container-xl axdd-topbar-logo" }, Es = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ms = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), js = [
  Ms
], qs = { class: "w-100 flex-fill bg-body text-body" }, As = { class: "container-xl" }, Ls = { class: "row" }, Fs = { role: "navigation" }, Bs = { key: 0 }, Ds = { class: "col" }, Us = {
  key: 0,
  class: "my-3"
}, Vs = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Rs = { class: "w-100" }, Qs = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Ws = { class: "container-xl" }, zs = { class: "text-white font-weight-light py-3" }, Hs = /* @__PURE__ */ ie('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Ks(e, a, t, n, o, r) {
  const d = re("router-link");
  return i(), l("div", {
    class: p([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", Is, [
      e.$slots.profile ? (i(), l("div", Ps, [
        s("div", Ns, [
          c(e.$slots, "profile", {}, () => [
            I("Welcome!")
          ])
        ])
      ])) : f("", !0),
      s("div", Cs, [
        s("div", Ts, [
          e.$slots.navigation ? (i(), l("a", Es, js)) : f("", !0),
          s("div", {
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
    s("div", qs, [
      s("div", As, [
        s("div", Ls, [
          e.$slots.navigation || e.$slots.aside ? (i(), l("div", {
            key: 0,
            class: "",
            style: R(r.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: p([r.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", Fs, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (i(), l("aside", Bs, [
                c(e.$slots, "aside", {}, () => [
                  I("this is aside content")
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          s("div", Ds, [
            e.$slots.bar ? (i(), l("div", Us, [
              c(e.$slots, "bar")
            ])) : f("", !0),
            s("main", null, [
              c(e.$slots, "main", {}, () => [
                Vs
              ])
            ])
          ])
        ])
      ])
    ]),
    s("footer", Rs, [
      e.$slots.footer ? (i(), l("div", Qs, [
        s("div", Ws, [
          c(e.$slots, "footer", {}, () => [
            s("div", zs, [
              Hs,
              s("div", null, " Copyright © " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const Js = /* @__PURE__ */ h(Ss, [["render", Ks]]), U = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Ia,
  CardHeading: Ca,
  CardAction: Ma,
  CardTabs: Aa,
  DisclosureAction: sa,
  DisclosureBlock: ga,
  DisclosurePanel: ia,
  Profile: Yt,
  TabsList: Ua,
  TabsDisplay: Wa,
  TabsItem: Xa,
  TabsPanel: as,
  Sidebar: ks,
  Topbar: Js,
  ColorMode: wt,
  Panel: kt
}, Ys = {
  install(e) {
    for (const a in U)
      if (Object.prototype.hasOwnProperty.call(U, a)) {
        const t = U[a];
        e.component(t.name, t);
      }
  }
};
export {
  Ys as default
};
