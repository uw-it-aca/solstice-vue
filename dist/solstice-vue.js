import { toRef as ue, readonly as X, customRef as fe, ref as j, onMounted as Z, nextTick as ee, unref as he, getCurrentInstance as te, getCurrentScope as be, onScopeDispose as me, watch as J, computed as V, shallowRef as pe, watchEffect as _e, openBlock as l, createElementBlock as r, createElementVNode as n, withDirectives as R, vShow as z, normalizeClass as h, createTextVNode as x, renderSlot as c, resolveComponent as se, normalizeStyle as H, createCommentVNode as b, createVNode as ne, withCtx as G, toDisplayString as g, createStaticVNode as ae, createBlock as ge, resolveDynamicComponent as ve, withKeys as q, withModifiers as ye, pushScopeId as we, popScopeId as $e } from "vue";
function oe(e) {
  return be() ? (me(e), !0) : !1;
}
function W(e) {
  return typeof e == "function" ? e() : he(e);
}
const xe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ke = Object.prototype.toString, Se = (e) => ke.call(e) === "[object Object]", ie = () => {
};
function Ne(e, s) {
  function t(...o) {
    return new Promise((i, a) => {
      Promise.resolve(e(() => s.apply(this, o), { fn: s, thisArg: this, args: o })).then(i).catch(a);
    });
  }
  return t;
}
const le = (e) => e();
function Ie(e = le) {
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
  return { isActive: X(s), pause: t, resume: o, eventFilter: i };
}
function Ce(e) {
  return e || te();
}
function Me(...e) {
  if (e.length !== 1)
    return ue(...e);
  const s = e[0];
  return typeof s == "function" ? X(fe(() => ({ get: s, set: ie }))) : j(s);
}
function Te(e, s, t = {}) {
  const {
    eventFilter: o = le,
    ...i
  } = t;
  return J(
    e,
    Ne(
      o,
      s
    ),
    i
  );
}
function Oe(e, s, t = {}) {
  const {
    eventFilter: o,
    ...i
  } = t, { eventFilter: a, pause: d, resume: k, isActive: I } = Ie(o);
  return { stop: Te(
    e,
    s,
    {
      ...i,
      eventFilter: a
    }
  ), pause: d, resume: k, isActive: I };
}
function re(e, s = !0, t) {
  Ce() ? Z(e, t) : s ? e() : ee(e);
}
function de(e) {
  var s;
  const t = W(e);
  return (s = t == null ? void 0 : t.$el) != null ? s : t;
}
const L = xe ? window : void 0;
function Q(...e) {
  let s, t, o, i;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, i] = e, s = L) : [s, t, o, i] = e, !s)
    return ie;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const a = [], d = () => {
    a.forEach((v) => v()), a.length = 0;
  }, k = (v, p, M, $) => (v.addEventListener(p, M, $), () => v.removeEventListener(p, M, $)), I = J(
    () => [de(s), W(i)],
    ([v, p]) => {
      if (d(), !v)
        return;
      const M = Se(p) ? { ...p } : p;
      a.push(
        ...t.flatMap(($) => o.map((S) => k(v, $, S, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), w = () => {
    I(), d();
  };
  return oe(w), w;
}
function Pe() {
  const e = j(!1);
  return te() && Z(() => {
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
  }, k = () => {
    i && ("removeEventListener" in i ? i.removeEventListener("change", d) : i.removeListener(d));
  }, I = _e(() => {
    o.value && (k(), i = t.matchMedia(W(e)), "addEventListener" in i ? i.addEventListener("change", d) : i.addListener(d), a.value = i.matches);
  });
  return oe(() => {
    I(), k(), i = void 0;
  }), a;
}
const F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = "__vueuse_ssr_handlers__", Ee = /* @__PURE__ */ Le();
function Le() {
  return U in F || (F[U] = F[U] || {}), F[U];
}
function ce(e, s) {
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
}, Y = "vueuse-storage";
function Be(e, s, t, o = {}) {
  var i;
  const {
    flush: a = "pre",
    deep: d = !0,
    listenToStorageChanges: k = !0,
    writeDefaults: I = !0,
    mergeDefaults: w = !1,
    shallow: v,
    window: p = L,
    eventFilter: M,
    onError: $ = (u) => {
      console.error(u);
    },
    initOnMounted: S
  } = o, y = (v ? pe : j)(typeof s == "function" ? s() : s);
  if (!t)
    try {
      t = ce("getDefaultStorage", () => {
        var u;
        return (u = L) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      $(u);
    }
  if (!t)
    return y;
  const C = W(s), E = je(C), T = (i = o.serializer) != null ? i : De[E], { pause: D, resume: _ } = Oe(
    y,
    () => O(y.value),
    { flush: a, deep: d, eventFilter: M }
  );
  return p && k && re(() => {
    Q(p, "storage", N), Q(p, Y, A), S && N();
  }), S || N(), y;
  function O(u) {
    try {
      if (u == null)
        t.removeItem(e);
      else {
        const f = T.write(u), P = t.getItem(e);
        P !== f && (t.setItem(e, f), p && p.dispatchEvent(new CustomEvent(Y, {
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
      return I && C != null && t.setItem(e, T.write(C)), C;
    if (!u && w) {
      const P = T.read(f);
      return typeof w == "function" ? w(P, C) : E === "object" && !Array.isArray(P) ? { ...C, ...P } : P;
    } else
      return typeof f != "string" ? f : T.read(f);
  }
  function A(u) {
    N(u.detail);
  }
  function N(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        y.value = C;
        return;
      }
      if (!(u && u.key !== e)) {
        D();
        try {
          (u == null ? void 0 : u.newValue) !== T.write(y.value) && (y.value = B(u));
        } catch (f) {
          $(f);
        } finally {
          u ? ee(_) : _();
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
    listenToStorageChanges: k = !0,
    storageRef: I,
    emitAuto: w,
    disableTransition: v = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = Fe({ window: i }), $ = V(() => M.value ? "dark" : "light"), S = I || (d == null ? Me(o) : Be(d, o, a, { window: i, listenToStorageChanges: k })), y = V(() => S.value === "auto" ? $.value : S.value), C = ce(
    "updateHTMLAttrs",
    (_, O, B) => {
      const A = typeof _ == "string" ? i == null ? void 0 : i.document.querySelector(_) : de(_);
      if (!A)
        return;
      let N;
      if (v && (N = i.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), i.document.head.appendChild(N)), O === "class") {
        const u = B.split(/\s/g);
        Object.values(p).flatMap((f) => (f || "").split(/\s/g)).filter(Boolean).forEach((f) => {
          u.includes(f) ? A.classList.add(f) : A.classList.remove(f);
        });
      } else
        A.setAttribute(O, B);
      v && (i.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function E(_) {
    var O;
    C(s, t, (O = p[_]) != null ? O : _);
  }
  function T(_) {
    e.onChanged ? e.onChanged(_, E) : E(_);
  }
  J(y, T, { flush: "post", immediate: !0 }), re(() => T(y.value));
  const D = V({
    get() {
      return w ? S.value : y.value;
    },
    set(_) {
      S.value = _;
    }
  });
  try {
    return Object.assign(D, { store: S, system: $, state: y });
  } catch {
    return D;
  }
}
const m = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, i] of s)
    t[o] = i;
  return t;
}, Ve = {
  name: "sol-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: Ue({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, We = { class: "d-flex align-items-center" }, Re = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ze = { class: "bi bi-brightness-high-fill" }, Ke = { class: "bi bi-moon-stars-fill" }, He = { class: "bi bi-circle-half" }, Je = { class: "dropdown-menu p-1" }, Ge = { class: "mb-1" }, Qe = /* @__PURE__ */ n("i", { class: "bi bi-brightness-high-fill" }, null, -1), Ye = { class: "mb-1" }, Xe = /* @__PURE__ */ n("i", { class: "bi bi-moon-stars-fill" }, null, -1), Ze = /* @__PURE__ */ n("i", { class: "bi bi-circle-half" }, null, -1);
function et(e, s, t, o, i, a) {
  return l(), r("div", We, [
    n("div", null, [
      n("button", Re, [
        R(n("i", ze, null, 512), [
          [z, o.colorMode == "light"]
        ]),
        R(n("i", Ke, null, 512), [
          [z, o.colorMode == "dark"]
        ]),
        R(n("i", He, null, 512), [
          [z, o.colorMode == "auto"]
        ])
      ]),
      n("ul", Je, [
        n("li", Ge, [
          n("a", {
            class: h(["dropdown-item rounded", o.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[0] || (s[0] = (d) => o.colorMode = "light")
          }, [
            Qe,
            x(" Light")
          ], 2)
        ]),
        n("li", Ye, [
          n("a", {
            class: h(["dropdown-item rounded", o.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[1] || (s[1] = (d) => o.colorMode = "dark")
          }, [
            Xe,
            x(" Dark")
          ], 2)
        ]),
        n("li", null, [
          n("a", {
            class: h(["dropdown-item rounded", o.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[2] || (s[2] = (d) => o.colorMode = "auto")
          }, [
            Ze,
            x(" Auto")
          ], 2)
        ])
      ])
    ])
  ]);
}
const tt = /* @__PURE__ */ m(Ve, [["render", et]]), st = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, nt = { class: "card rounded-3 border-0 mb-4 p-4" };
function at(e, s, t, o, i, a) {
  return l(), r("div", nt, [
    c(e.$slots, "default")
  ]);
}
const ot = /* @__PURE__ */ m(st, [["render", at]]), it = {
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
}, lt = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, rt = { class: "d-flex" }, dt = /* @__PURE__ */ n("div", { class: "flex-fill" }, "username", -1), ct = { class: "flex-fill text-end" }, ut = ["href"], ft = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ht = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), bt = [
  ht
], mt = {
  key: 0,
  role: "navigation"
}, pt = /* @__PURE__ */ n("ul", { class: "text-white" }, [
  /* @__PURE__ */ n("li", null, "nav 1"),
  /* @__PURE__ */ n("li", null, "nav 2"),
  /* @__PURE__ */ n("li", null, "nav 3"),
  /* @__PURE__ */ n("li", null, "nav 4")
], -1), _t = {
  key: 1,
  class: "mb-3 text-light"
}, gt = /* @__PURE__ */ n("div", { class: "sol-sidebar-logo" }, " ", -1), vt = { class: "flex-fill" }, yt = { key: 0 }, wt = { class: "font-weight-light py-3 small" }, $t = /* @__PURE__ */ ae('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul></ul>', 1);
function xt(e, s, t, o, i, a) {
  const d = se("router-link");
  return l(), r("div", {
    class: h([a.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: H([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: h([t.sidebarClass + [a.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: H([a.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (l(), r("div", lt, [
          c(e.$slots, "profile", {}, () => [
            n("div", rt, [
              dt,
              n("div", ct, [
                n("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ut)
              ])
            ])
          ])
        ])) : b("", !0),
        n("div", {
          class: h([[a.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (l(), r("a", ft, bt)) : b("", !0),
          n("div", {
            class: h(["d-inline align-middle", [a.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ne(d, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: G(() => [
                x(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      n("div", {
        id: "sidebar-nav-collapse",
        class: h(["px-3 flex-fill", [
          a.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (l(), r("nav", mt, [
          c(e.$slots, "navigation", {}, () => [
            pt
          ])
        ])) : b("", !0),
        e.$slots.aside ? (l(), r("aside", _t, [
          c(e.$slots, "aside", {}, () => [
            x("this is aside content")
          ])
        ])) : b("", !0)
      ], 2),
      gt
    ], 6),
    n("div", {
      class: h([[a.mq.mdMinus ? "" : "flex-fill overflow-y-auto"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      n("div", {
        class: h([[a.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        n("main", vt, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (l(), r("footer", yt, [
          c(e.$slots, "footer", {}, () => [
            n("div", wt, [
              $t,
              n("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : b("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const kt = /* @__PURE__ */ m(it, [["render", xt]]), St = {
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
}, Nt = { class: "w-100" }, It = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Ct = { class: "container-xl" }, Mt = { class: "axdd-topbar-brand" }, Tt = { class: "container-xl axdd-topbar-logo" }, Ot = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Pt = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), qt = [
  Pt
], At = { class: "w-100 flex-fill bg-body text-body" }, Et = { class: "container-xl" }, Lt = { class: "row" }, jt = { role: "navigation" }, Dt = { key: 0 }, Bt = { class: "col" }, Ft = {
  key: 0,
  class: "my-3"
}, Ut = /* @__PURE__ */ n("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ n("h1", null, "Hello world..."),
  /* @__PURE__ */ n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Vt = { class: "w-100" }, Wt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Rt = { class: "container-xl" }, zt = { class: "text-white font-weight-light py-3" }, Kt = /* @__PURE__ */ ae('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function Ht(e, s, t, o, i, a) {
  const d = se("router-link");
  return l(), r("div", {
    class: h([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    n("header", Nt, [
      e.$slots.profile ? (l(), r("div", It, [
        n("div", Ct, [
          c(e.$slots, "profile", {}, () => [
            x("Welcome!")
          ])
        ])
      ])) : b("", !0),
      n("div", Mt, [
        n("div", Tt, [
          e.$slots.navigation ? (l(), r("a", Ot, qt)) : b("", !0),
          n("div", {
            class: h(["d-inline align-middle text-white", [a.mq.xlPlus ? "h2" : "h3"]])
          }, [
            ne(d, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: G(() => [
                x(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    n("div", At, [
      n("div", Et, [
        n("div", Lt, [
          e.$slots.navigation || e.$slots.aside ? (l(), r("div", {
            key: 0,
            class: "",
            style: H(a.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: h([a.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              n("nav", jt, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (l(), r("aside", Dt, [
                c(e.$slots, "aside", {}, () => [
                  x("this is aside content")
                ])
              ])) : b("", !0)
            ], 2)
          ], 4)) : b("", !0),
          n("div", Bt, [
            e.$slots.bar ? (l(), r("div", Ft, [
              c(e.$slots, "bar")
            ])) : b("", !0),
            n("main", null, [
              c(e.$slots, "main", {}, () => [
                Ut
              ])
            ])
          ])
        ])
      ])
    ]),
    n("footer", Vt, [
      e.$slots.footer ? (l(), r("div", Wt, [
        n("div", Rt, [
          c(e.$slots, "footer", {}, () => [
            n("div", zt, [
              Kt,
              n("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : b("", !0)
    ])
  ], 2);
}
const Jt = /* @__PURE__ */ m(St, [["render", Ht]]), Gt = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, Qt = { class: "card shadow-sm rounded-3 mb-4" }, Yt = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, Xt = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, Zt = {
  key: 2,
  class: "card-body"
}, es = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function ts(e, s, t, o, i, a) {
  return l(), r("div", Qt, [
    e.$slots.heading ? (l(), r("div", Yt, [
      c(e.$slots, "heading")
    ])) : b("", !0),
    e.$slots["heading-action"] ? (l(), r("div", Xt, [
      c(e.$slots, "heading-action")
    ])) : b("", !0),
    e.$slots.body ? (l(), r("div", Zt, [
      c(e.$slots, "body")
    ])) : b("", !0),
    e.$slots.footer ? (l(), r("div", es, [
      c(e.$slots, "footer")
    ])) : b("", !0)
  ]);
}
const ss = /* @__PURE__ */ m(Gt, [["render", ts]]), ns = {
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
function as(e, s, t, o, i, a) {
  return l(), ge(ve(`h${a.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: G(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const os = /* @__PURE__ */ m(ns, [["render", as]]), is = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function ls(e, s, t, o, i, a) {
  return l(), r("div", null, [
    c(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ m(is, [["render", ls]]), ds = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function cs(e, s, t, o, i, a) {
  return l(), r("div", null, [
    c(e.$slots, "default")
  ]);
}
const us = /* @__PURE__ */ m(ds, [["render", cs]]), fs = {
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
}, hs = ["id"], bs = ["id"];
function ms(e, s, t, o, i, a) {
  return t.variant == "lines" ? (l(), r("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, hs)) : t.variant == "pills" ? (l(), r("ul", {
    key: 1,
    class: h(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, bs)) : b("", !0);
}
const ps = /* @__PURE__ */ m(fs, [["render", ms]]), _s = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, gs = ["id"];
function vs(e, s, t, o, i, a) {
  return l(), r("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, gs);
}
const ys = /* @__PURE__ */ m(_s, [["render", vs]]), ws = {
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
}, $s = {
  class: "nav-item",
  role: "presentation"
}, xs = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], ks = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Ss = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ns(e, s, t, o, i, a) {
  return l(), r("li", $s, [
    t.variant == "lines" ? (l(), r("button", {
      key: 0,
      class: h(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", a.classObject]),
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
    ], 42, xs)) : t.variant == "pills" ? (l(), r("button", {
      key: 1,
      class: h(["nav-pills-link rounded-3 px-3 py-2", a.classObject]),
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
    ], 42, ks)) : (l(), r("button", {
      key: 2,
      class: h(["nav-link", a.classObject]),
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
    ], 42, Ss))
  ]);
}
const Is = /* @__PURE__ */ m(ws, [["render", Ns]]), Cs = {
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
}, Ms = ["id", "aria-labelledby"];
function Ts(e, s, t, o, i, a) {
  return l(), r("div", {
    class: h(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: s[0] || (s[0] = q(ye((...d) => a.setFocus && a.setFocus(...d), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, Ms);
}
const Os = /* @__PURE__ */ m(Cs, [["render", Ts]]), Ps = {
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
}, qs = {
  key: 0,
  class: "d-flex"
}, As = { class: "flex-fill dropdown" }, Es = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Ls = { class: "me-1" }, js = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), Ds = { class: "text-decoration-underline" }, Bs = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Fs = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Us = {
  key: 0,
  class: "small text-danger"
}, Vs = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Ws = { class: "small" }, Rs = { class: "small" }, zs = ["href"], Ks = ["href"], Hs = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1), Js = {
  key: 1,
  class: "d-flex"
}, Gs = {
  key: 0,
  class: "flex-fill text-white"
}, Qs = { class: "me-1" }, Ys = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Xs = {
  key: 1,
  class: "flex-fill text-white"
}, Zs = { class: "flex-fill text-end" }, en = ["href"], tn = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1);
function sn(e, s, t, o, i, a) {
  return t.variant === "flyout" ? (l(), r("div", qs, [
    n("div", As, [
      t.userOverride ? (l(), r("a", Es, [
        n("span", Ls, g(t.userNetid), 1),
        js,
        n("span", Ds, g(t.userOverride), 1)
      ])) : (l(), r("a", Bs, g(t.userNetid), 1)),
      n("div", Fs, [
        t.userOverride ? (l(), r("p", Us, [
          x(" overriding as "),
          Vs,
          x(" " + g(t.userOverride), 1)
        ])) : b("", !0),
        n("p", Ws, g(t.userOfficialName) + ", " + g(t.userPreferredName) + ", " + g(t.userPronouns), 1),
        n("p", Rs, [
          n("a", { href: t.profileUrl }, "go to profile", 8, zs)
        ]),
        n("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            n("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Ks)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            Hs
          ])
        ])
      ])
    ])
  ])) : (l(), r("div", Js, [
    t.userOverride ? (l(), r("div", Gs, [
      n("span", Qs, g(t.userNetid), 1),
      Ys,
      x(" " + g(t.userOverride), 1)
    ])) : (l(), r("div", Xs, g(t.userNetid), 1)),
    n("div", Zs, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, en)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        tn
      ])
    ])
  ]));
}
const nn = /* @__PURE__ */ m(Ps, [["render", sn]]), an = {
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
}, on = ["href", "aria-controls"], ln = ["data-bs-target", "aria-controls"], rn = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function dn(e, s, t, o, i, a) {
  return t.isLink ? (l(), r("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 8, on)) : (l(), r("button", {
    key: 1,
    class: h(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (l(), r("i", rn)) : b("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, ln));
}
const cn = /* @__PURE__ */ m(an, [["render", dn], ["__scopeId", "data-v-bac417f3"]]), un = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, fn = ["id"];
function hn(e, s, t, o, i, a) {
  return l(), r("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, fn);
}
const bn = /* @__PURE__ */ m(un, [["render", hn]]), mn = {
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
}, pn = (e) => (we("data-v-075da959"), e = e(), $e(), e), _n = { class: "rounded-3 p-3 mb-2" }, gn = { class: "d-flex" }, vn = {
  class: "me-3",
  style: { width: "330px" }
}, yn = ["data-bs-target", "aria-controls"], wn = /* @__PURE__ */ pn(() => /* @__PURE__ */ n("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), $n = ["id"], xn = { class: "flex-fill" }, kn = ["id", "aria-labelledby"];
function Sn(e, s, t, o, i, a) {
  return l(), r("div", _n, [
    n("div", gn, [
      n("div", vn, [
        n("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          wn,
          n("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, g(t.blockTitle), 9, $n)
        ], 8, yn)
      ]),
      n("div", xn, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    n("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, kn)
  ]);
}
const Nn = /* @__PURE__ */ m(mn, [["render", Sn], ["__scopeId", "data-v-075da959"]]), K = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: ss,
  CardHeading: os,
  CardAction: rs,
  CardTabs: us,
  DisclosureAction: cn,
  DisclosureBlock: Nn,
  DisclosurePanel: bn,
  Profile: nn,
  TabsList: ps,
  TabsDisplay: ys,
  TabsItem: Is,
  TabsPanel: Os,
  Sidebar: kt,
  Topbar: Jt,
  ColorMode: tt,
  Panel: ot
}, Cn = {
  install(e) {
    for (const s in K)
      if (Object.prototype.hasOwnProperty.call(K, s)) {
        const t = K[s];
        e.component(t.name, t);
      }
  }
};
export {
  Cn as default
};
