import { toRef as de, readonly as Q, customRef as ce, ref as j, onMounted as Y, nextTick as X, unref as ue, getCurrentInstance as Z, getCurrentScope as fe, onScopeDispose as he, watch as K, computed as V, shallowRef as me, watchEffect as be, openBlock as r, createElementBlock as l, createElementVNode as n, withDirectives as pe, vModelSelect as _e, renderSlot as c, resolveComponent as ee, normalizeClass as m, normalizeStyle as z, createCommentVNode as h, createVNode as te, withCtx as H, createTextVNode as O, toDisplayString as g, createStaticVNode as se, createBlock as ge, resolveDynamicComponent as ve, withKeys as q, withModifiers as ye, pushScopeId as we, popScopeId as $e } from "vue";
function ne(e) {
  return fe() ? (he(e), !0) : !1;
}
function W(e) {
  return typeof e == "function" ? e() : ue(e);
}
const xe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ke = Object.prototype.toString, Se = (e) => ke.call(e) === "[object Object]", ae = () => {
};
function Ne(e, s) {
  function t(...o) {
    return new Promise((i, a) => {
      Promise.resolve(e(() => s.apply(this, o), { fn: s, thisArg: this, args: o })).then(i).catch(a);
    });
  }
  return t;
}
const ie = (e) => e();
function Ie(e = ie) {
  const s = j(!0);
  function t() {
    s.value = !1;
  }
  function o() {
    s.value = !0;
  }
  const i = (...a) => {
    s.value && e(...a);
  };
  return { isActive: Q(s), pause: t, resume: o, eventFilter: i };
}
function Ce(e) {
  return e || Z();
}
function Te(...e) {
  if (e.length !== 1)
    return de(...e);
  const s = e[0];
  return typeof s == "function" ? Q(ce(() => ({ get: s, set: ae }))) : j(s);
}
function Oe(e, s, t = {}) {
  const {
    eventFilter: o = ie,
    ...i
  } = t;
  return K(
    e,
    Ne(
      o,
      s
    ),
    i
  );
}
function Me(e, s, t = {}) {
  const {
    eventFilter: o,
    ...i
  } = t, { eventFilter: a, pause: d, resume: x, isActive: N } = Ie(o);
  return { stop: Oe(
    e,
    s,
    {
      ...i,
      eventFilter: a
    }
  ), pause: d, resume: x, isActive: N };
}
function oe(e, s = !0, t) {
  Ce() ? Y(e, t) : s ? e() : X(e);
}
function re(e) {
  var s;
  const t = W(e);
  return (s = t == null ? void 0 : t.$el) != null ? s : t;
}
const L = xe ? window : void 0;
function J(...e) {
  let s, t, o, i;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, i] = e, s = L) : [s, t, o, i] = e, !s)
    return ae;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const a = [], d = () => {
    a.forEach((v) => v()), a.length = 0;
  }, x = (v, p, C, $) => (v.addEventListener(p, C, $), () => v.removeEventListener(p, C, $)), N = K(
    () => [re(s), W(i)],
    ([v, p]) => {
      if (d(), !v)
        return;
      const C = Se(p) ? { ...p } : p;
      a.push(
        ...t.flatMap(($) => o.map((k) => x(v, $, k, C)))
      );
    },
    { immediate: !0, flush: "post" }
  ), w = () => {
    N(), d();
  };
  return ne(w), w;
}
function Pe() {
  const e = j(!1);
  return Z() && Y(() => {
    e.value = !0;
  }), e;
}
function qe(e) {
  const s = Pe();
  return V(() => (s.value, !!e()));
}
function Ae(e, s = {}) {
  const { window: t = L } = s, o = qe(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let i;
  const a = j(!1), d = (w) => {
    a.value = w.matches;
  }, x = () => {
    i && ("removeEventListener" in i ? i.removeEventListener("change", d) : i.removeListener(d));
  }, N = be(() => {
    o.value && (x(), i = t.matchMedia(W(e)), "addEventListener" in i ? i.addEventListener("change", d) : i.addListener(d), a.value = i.matches);
  });
  return ne(() => {
    N(), x(), i = void 0;
  }), a;
}
const F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = "__vueuse_ssr_handlers__", Ee = /* @__PURE__ */ Le();
function Le() {
  return U in F || (F[U] = F[U] || {}), F[U];
}
function le(e, s) {
  return Ee[e] || s;
}
function je(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const De = {
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
}, G = "vueuse-storage";
function Be(e, s, t, o = {}) {
  var i;
  const {
    flush: a = "pre",
    deep: d = !0,
    listenToStorageChanges: x = !0,
    writeDefaults: N = !0,
    mergeDefaults: w = !1,
    shallow: v,
    window: p = L,
    eventFilter: C,
    onError: $ = (u) => {
      console.error(u);
    },
    initOnMounted: k
  } = o, y = (v ? me : j)(typeof s == "function" ? s() : s);
  if (!t)
    try {
      t = le("getDefaultStorage", () => {
        var u;
        return (u = L) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      $(u);
    }
  if (!t)
    return y;
  const I = W(s), E = je(I), T = (i = o.serializer) != null ? i : De[E], { pause: D, resume: _ } = Me(
    y,
    () => M(y.value),
    { flush: a, deep: d, eventFilter: C }
  );
  return p && x && oe(() => {
    J(p, "storage", S), J(p, G, A), k && S();
  }), k || S(), y;
  function M(u) {
    try {
      if (u == null)
        t.removeItem(e);
      else {
        const f = T.write(u), P = t.getItem(e);
        P !== f && (t.setItem(e, f), p && p.dispatchEvent(new CustomEvent(G, {
          detail: {
            key: e,
            oldValue: P,
            newValue: f,
            storageArea: t
          }
        })));
      }
    } catch (f) {
      $(f);
    }
  }
  function B(u) {
    const f = u ? u.newValue : t.getItem(e);
    if (f == null)
      return N && I != null && t.setItem(e, T.write(I)), I;
    if (!u && w) {
      const P = T.read(f);
      return typeof w == "function" ? w(P, I) : E === "object" && !Array.isArray(P) ? { ...I, ...P } : P;
    } else
      return typeof f != "string" ? f : T.read(f);
  }
  function A(u) {
    S(u.detail);
  }
  function S(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        y.value = I;
        return;
      }
      if (!(u && u.key !== e)) {
        D();
        try {
          (u == null ? void 0 : u.newValue) !== T.write(y.value) && (y.value = B(u));
        } catch (f) {
          $(f);
        } finally {
          u ? X(_) : _();
        }
      }
    }
  }
}
function Fe(e) {
  return Ae("(prefers-color-scheme: dark)", e);
}
function Ue(e = {}) {
  const {
    selector: s = "html",
    attribute: t = "class",
    initialValue: o = "auto",
    window: i = L,
    storage: a,
    storageKey: d = "vueuse-color-scheme",
    listenToStorageChanges: x = !0,
    storageRef: N,
    emitAuto: w,
    disableTransition: v = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, C = Fe({ window: i }), $ = V(() => C.value ? "dark" : "light"), k = N || (d == null ? Te(o) : Be(d, o, a, { window: i, listenToStorageChanges: x })), y = V(() => k.value === "auto" ? $.value : k.value), I = le(
    "updateHTMLAttrs",
    (_, M, B) => {
      const A = typeof _ == "string" ? i == null ? void 0 : i.document.querySelector(_) : re(_);
      if (!A)
        return;
      let S;
      if (v && (S = i.document.createElement("style"), S.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), i.document.head.appendChild(S)), M === "class") {
        const u = B.split(/\s/g);
        Object.values(p).flatMap((f) => (f || "").split(/\s/g)).filter(Boolean).forEach((f) => {
          u.includes(f) ? A.classList.add(f) : A.classList.remove(f);
        });
      } else
        A.setAttribute(M, B);
      v && (i.getComputedStyle(S).opacity, document.head.removeChild(S));
    }
  );
  function E(_) {
    var M;
    I(s, t, (M = p[_]) != null ? M : _);
  }
  function T(_) {
    e.onChanged ? e.onChanged(_, E) : E(_);
  }
  K(y, T, { flush: "post", immediate: !0 }), oe(() => T(y.value));
  const D = V({
    get() {
      return w ? k.value : y.value;
    },
    set(_) {
      k.value = _;
    }
  });
  try {
    return Object.assign(D, { store: k, system: $, state: y });
  } catch {
    return D;
  }
}
const b = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, i] of s)
    t[o] = i;
  return t;
}, Ve = {
  name: "axdd-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: Ue({
      emitAuto: !0,
      attribute: "data-bs-theme"
    }) };
  }
}, We = { class: "d-flex mt-4 align-items-center" }, Re = /* @__PURE__ */ n("div", { class: "small me-2" }, "color mode:", -1), ze = /* @__PURE__ */ n("option", { value: "auto" }, "Auto", -1), Ke = /* @__PURE__ */ n("option", { value: "light" }, "Light", -1), He = /* @__PURE__ */ n("option", { value: "dark" }, "Dark", -1), Je = [
  ze,
  Ke,
  He
];
function Ge(e, s, t, o, i, a) {
  return r(), l("div", We, [
    Re,
    n("div", null, [
      pe(n("select", {
        "onUpdate:modelValue": s[0] || (s[0] = (d) => o.colorMode = d),
        class: "form-select form-select-sm"
      }, Je, 512), [
        [_e, o.colorMode]
      ])
    ])
  ]);
}
const Qe = /* @__PURE__ */ b(Ve, [["render", Ge]]), Ye = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, Xe = { class: "card rounded-3 border-0 mb-4 p-4" };
function Ze(e, s, t, o, i, a) {
  return r(), l("div", Xe, [
    c(e.$slots, "default")
  ]);
}
const et = /* @__PURE__ */ b(Ye, [["render", Ze]]), tt = {
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
      default: "bg-brand"
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
}, st = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, nt = { class: "d-flex" }, at = /* @__PURE__ */ n("div", { class: "flex-fill" }, "username", -1), it = { class: "flex-fill text-end" }, ot = ["href"], rt = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, lt = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), dt = [
  lt
], ct = {
  key: 0,
  role: "navigation"
}, ut = /* @__PURE__ */ n("ul", { class: "text-white" }, [
  /* @__PURE__ */ n("li", null, "nav 1"),
  /* @__PURE__ */ n("li", null, "nav 2"),
  /* @__PURE__ */ n("li", null, "nav 3"),
  /* @__PURE__ */ n("li", null, "nav 4")
], -1), ft = {
  key: 1,
  class: "mb-3 text-light"
}, ht = /* @__PURE__ */ n("div", { class: "sol-sidebar-logo" }, " ", -1), mt = { class: "flex-fill" }, bt = { key: 0 }, pt = { class: "font-weight-light py-3 small" }, _t = /* @__PURE__ */ se('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul></ul>', 1);
function gt(e, s, t, o, i, a) {
  const d = ee("router-link");
  return r(), l("div", {
    class: m([a.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: z([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: m([t.sidebarClass + [a.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: z([a.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (r(), l("div", st, [
          c(e.$slots, "profile", {}, () => [
            n("div", nt, [
              at,
              n("div", it, [
                n("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ot)
              ])
            ])
          ])
        ])) : h("", !0),
        n("div", {
          class: m([[a.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (r(), l("a", rt, dt)) : h("", !0),
          n("div", {
            class: m(["d-inline align-middle", [a.mq.mdPlus ? "h2" : "h3"]])
          }, [
            te(d, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: H(() => [
                O(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      n("div", {
        id: "sidebar-nav-collapse",
        class: m(["px-3 flex-fill", [
          a.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (r(), l("nav", ct, [
          c(e.$slots, "navigation", {}, () => [
            ut
          ])
        ])) : h("", !0),
        e.$slots.aside ? (r(), l("aside", ft, [
          c(e.$slots, "aside", {}, () => [
            O("this is aside content")
          ])
        ])) : h("", !0)
      ], 2),
      ht
    ], 6),
    n("div", {
      class: m([[a.mq.mdMinus ? "" : "flex-fill overflow-y-auto"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      n("div", {
        class: m([[a.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        n("main", mt, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (r(), l("footer", bt, [
          c(e.$slots, "footer", {}, () => [
            n("div", pt, [
              _t,
              n("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : h("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const vt = /* @__PURE__ */ b(tt, [["render", gt]]), yt = {
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
      default: "bg-brand"
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
}, wt = { class: "w-100" }, $t = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, xt = { class: "container-xl" }, kt = { class: "axdd-topbar-brand" }, St = { class: "container-xl axdd-topbar-logo" }, Nt = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, It = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Ct = [
  It
], Tt = { class: "w-100 flex-fill bg-body text-body" }, Ot = { class: "container-xl" }, Mt = { class: "row" }, Pt = { role: "navigation" }, qt = { key: 0 }, At = { class: "col" }, Et = {
  key: 0,
  class: "my-3"
}, Lt = /* @__PURE__ */ n("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ n("h1", null, "Hello world..."),
  /* @__PURE__ */ n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), jt = { class: "w-100" }, Dt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Bt = { class: "container-xl" }, Ft = { class: "text-white font-weight-light py-3" }, Ut = /* @__PURE__ */ se('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function Vt(e, s, t, o, i, a) {
  const d = ee("router-link");
  return r(), l("div", {
    class: m([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    n("header", wt, [
      e.$slots.profile ? (r(), l("div", $t, [
        n("div", xt, [
          c(e.$slots, "profile", {}, () => [
            O("Welcome!")
          ])
        ])
      ])) : h("", !0),
      n("div", kt, [
        n("div", St, [
          e.$slots.navigation ? (r(), l("a", Nt, Ct)) : h("", !0),
          n("div", {
            class: m(["d-inline align-middle text-white", [a.mq.xlPlus ? "h2" : "h3"]])
          }, [
            te(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: H(() => [
                O(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    n("div", Tt, [
      n("div", Ot, [
        n("div", Mt, [
          e.$slots.navigation || e.$slots.aside ? (r(), l("div", {
            key: 0,
            class: "",
            style: z(a.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: m([a.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              n("nav", Pt, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (r(), l("aside", qt, [
                c(e.$slots, "aside", {}, () => [
                  O("this is aside content")
                ])
              ])) : h("", !0)
            ], 2)
          ], 4)) : h("", !0),
          n("div", At, [
            e.$slots.bar ? (r(), l("div", Et, [
              c(e.$slots, "bar")
            ])) : h("", !0),
            n("main", null, [
              c(e.$slots, "main", {}, () => [
                Lt
              ])
            ])
          ])
        ])
      ])
    ]),
    n("footer", jt, [
      e.$slots.footer ? (r(), l("div", Dt, [
        n("div", Bt, [
          c(e.$slots, "footer", {}, () => [
            n("div", Ft, [
              Ut,
              n("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : h("", !0)
    ])
  ], 2);
}
const Wt = /* @__PURE__ */ b(yt, [["render", Vt]]), Rt = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, zt = { class: "card shadow-sm rounded-3 mb-4" }, Kt = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, Ht = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, Jt = {
  key: 2,
  class: "card-body"
}, Gt = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function Qt(e, s, t, o, i, a) {
  return r(), l("div", zt, [
    e.$slots.heading ? (r(), l("div", Kt, [
      c(e.$slots, "heading")
    ])) : h("", !0),
    e.$slots["heading-action"] ? (r(), l("div", Ht, [
      c(e.$slots, "heading-action")
    ])) : h("", !0),
    e.$slots.body ? (r(), l("div", Jt, [
      c(e.$slots, "body")
    ])) : h("", !0),
    e.$slots.footer ? (r(), l("div", Gt, [
      c(e.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const Yt = /* @__PURE__ */ b(Rt, [["render", Qt]]), Xt = {
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
function Zt(e, s, t, o, i, a) {
  return r(), ge(ve(`h${a.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: H(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const es = /* @__PURE__ */ b(Xt, [["render", Zt]]), ts = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function ss(e, s, t, o, i, a) {
  return r(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const ns = /* @__PURE__ */ b(ts, [["render", ss]]), as = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function is(e, s, t, o, i, a) {
  return r(), l("div", null, [
    c(e.$slots, "default")
  ]);
}
const os = /* @__PURE__ */ b(as, [["render", is]]), rs = {
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
}, ls = ["id"], ds = ["id"];
function cs(e, s, t, o, i, a) {
  return t.variant == "lines" ? (r(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, ls)) : t.variant == "pills" ? (r(), l("ul", {
    key: 1,
    class: m(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, ds)) : h("", !0);
}
const us = /* @__PURE__ */ b(rs, [["render", cs]]), fs = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, hs = ["id"];
function ms(e, s, t, o, i, a) {
  return r(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, hs);
}
const bs = /* @__PURE__ */ b(fs, [["render", ms]]), ps = {
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
}, _s = {
  class: "nav-item",
  role: "presentation"
}, gs = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], vs = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], ys = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function ws(e, s, t, o, i, a) {
  return r(), l("li", _s, [
    t.variant == "lines" ? (r(), l("button", {
      key: 0,
      class: m(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[0] || (s[0] = q((...d) => a.moveNext && a.moveNext(...d), ["right"])),
        s[1] || (s[1] = q((...d) => a.movePrev && a.movePrev(...d), ["left"]))
      ],
      onClick: s[2] || (s[2] = (...d) => a.onClick && a.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, gs)) : t.variant == "pills" ? (r(), l("button", {
      key: 1,
      class: m(["nav-pills-link rounded-3 px-3 py-2", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[3] || (s[3] = q((...d) => a.moveNext && a.moveNext(...d), ["right"])),
        s[4] || (s[4] = q((...d) => a.movePrev && a.movePrev(...d), ["left"]))
      ],
      onClick: s[5] || (s[5] = (...d) => a.onClick && a.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, vs)) : (r(), l("button", {
      key: 2,
      class: m(["nav-link", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        s[6] || (s[6] = q((...d) => a.moveNext && a.moveNext(...d), ["right"])),
        s[7] || (s[7] = q((...d) => a.movePrev && a.movePrev(...d), ["left"]))
      ],
      onClick: s[8] || (s[8] = (...d) => a.onClick && a.onClick(...d))
    }, [
      c(e.$slots, "default")
    ], 42, ys))
  ]);
}
const $s = /* @__PURE__ */ b(ps, [["render", ws]]), xs = {
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
}, ks = ["id", "aria-labelledby"];
function Ss(e, s, t, o, i, a) {
  return r(), l("div", {
    class: m(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: s[0] || (s[0] = q(ye((...d) => a.setFocus && a.setFocus(...d), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, ks);
}
const Ns = /* @__PURE__ */ b(xs, [["render", Ss]]), Is = {
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
}, Cs = {
  key: 0,
  class: "d-flex"
}, Ts = { class: "flex-fill dropdown" }, Os = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Ms = { class: "me-1" }, Ps = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), qs = { class: "text-decoration-underline" }, As = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Es = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Ls = {
  key: 0,
  class: "small text-danger"
}, js = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Ds = { class: "small" }, Bs = { class: "small" }, Fs = ["href"], Us = ["href"], Vs = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1), Ws = {
  key: 1,
  class: "d-flex"
}, Rs = {
  key: 0,
  class: "flex-fill text-white"
}, zs = { class: "me-1" }, Ks = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Hs = {
  key: 1,
  class: "flex-fill text-white"
}, Js = { class: "flex-fill text-end" }, Gs = ["href"], Qs = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1);
function Ys(e, s, t, o, i, a) {
  return t.variant === "flyout" ? (r(), l("div", Cs, [
    n("div", Ts, [
      t.userOverride ? (r(), l("a", Os, [
        n("span", Ms, g(t.userNetid), 1),
        Ps,
        n("span", qs, g(t.userOverride), 1)
      ])) : (r(), l("a", As, g(t.userNetid), 1)),
      n("div", Es, [
        t.userOverride ? (r(), l("p", Ls, [
          O(" overriding as "),
          js,
          O(" " + g(t.userOverride), 1)
        ])) : h("", !0),
        n("p", Ds, g(t.userOfficialName) + ", " + g(t.userPreferredName) + ", " + g(t.userPronouns), 1),
        n("p", Bs, [
          n("a", { href: t.profileUrl }, "go to profile", 8, Fs)
        ]),
        n("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            n("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Us)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            Vs
          ])
        ])
      ])
    ])
  ])) : (r(), l("div", Ws, [
    t.userOverride ? (r(), l("div", Rs, [
      n("span", zs, g(t.userNetid), 1),
      Ks,
      O(" " + g(t.userOverride), 1)
    ])) : (r(), l("div", Hs, g(t.userNetid), 1)),
    n("div", Js, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Gs)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        Qs
      ])
    ])
  ]));
}
const Xs = /* @__PURE__ */ b(Is, [["render", Ys]]), Zs = {
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
}, en = ["href", "aria-controls"], tn = ["data-bs-target", "aria-controls"], sn = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function nn(e, s, t, o, i, a) {
  return t.isLink ? (r(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 8, en)) : (r(), l("button", {
    key: 1,
    class: m(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (r(), l("i", sn)) : h("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, tn));
}
const an = /* @__PURE__ */ b(Zs, [["render", nn], ["__scopeId", "data-v-bac417f3"]]), on = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, rn = ["id"];
function ln(e, s, t, o, i, a) {
  return r(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, rn);
}
const dn = /* @__PURE__ */ b(on, [["render", ln]]), cn = {
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
}, un = (e) => (we("data-v-075da959"), e = e(), $e(), e), fn = { class: "rounded-3 p-3 mb-2" }, hn = { class: "d-flex" }, mn = {
  class: "me-3",
  style: { width: "330px" }
}, bn = ["data-bs-target", "aria-controls"], pn = /* @__PURE__ */ un(() => /* @__PURE__ */ n("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), _n = ["id"], gn = { class: "flex-fill" }, vn = ["id", "aria-labelledby"];
function yn(e, s, t, o, i, a) {
  return r(), l("div", fn, [
    n("div", hn, [
      n("div", mn, [
        n("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          pn,
          n("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, g(t.blockTitle), 9, _n)
        ], 8, bn)
      ]),
      n("div", gn, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    n("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, vn)
  ]);
}
const wn = /* @__PURE__ */ b(cn, [["render", yn], ["__scopeId", "data-v-075da959"]]), R = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Yt,
  CardHeading: es,
  CardAction: ns,
  CardTabs: os,
  DisclosureAction: an,
  DisclosureBlock: wn,
  DisclosurePanel: dn,
  Profile: Xs,
  TabsList: us,
  TabsDisplay: bs,
  TabsItem: $s,
  TabsPanel: Ns,
  Sidebar: vt,
  Topbar: Wt,
  ColorMode: Qe,
  Panel: et
}, xn = {
  install(e) {
    for (const s in R)
      if (Object.prototype.hasOwnProperty.call(R, s)) {
        const t = R[s];
        e.component(t.name, t);
      }
  }
};
export {
  xn as default
};
