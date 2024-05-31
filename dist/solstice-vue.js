import { toRef as he, readonly as te, customRef as be, ref as D, onMounted as ne, nextTick as se, unref as me, getCurrentInstance as ae, getCurrentScope as ge, onScopeDispose as _e, watch as Y, computed as R, shallowRef as pe, watchEffect as ve, openBlock as l, createElementBlock as d, createElementVNode as s, withDirectives as z, vShow as K, normalizeClass as f, createTextVNode as x, renderSlot as c, resolveComponent as X, normalizeStyle as Q, createCommentVNode as h, createVNode as ie, withCtx as E, toDisplayString as v, createStaticVNode as oe, createBlock as H, resolveDynamicComponent as ye, withKeys as P, withModifiers as we, pushScopeId as ke, popScopeId as $e, Fragment as xe } from "vue";
function le(e) {
  return ge() ? (_e(e), !0) : !1;
}
function J(e) {
  return typeof e == "function" ? e() : me(e);
}
const Se = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ne = Object.prototype.toString, Ce = (e) => Ne.call(e) === "[object Object]", re = () => {
};
function Ie(e, n) {
  function t(...i) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => n.apply(this, i), { fn: n, thisArg: this, args: i })).then(o).catch(a);
    });
  }
  return t;
}
const de = (e) => e();
function Me(e = de) {
  const n = D(!0);
  function t() {
    n.value = !1;
  }
  function i() {
    n.value = !0;
  }
  const o = (...a) => {
    n.value && e(...a);
  };
  return { isActive: te(n), pause: t, resume: i, eventFilter: o };
}
function Te(e) {
  return ae();
}
function qe(...e) {
  if (e.length !== 1)
    return he(...e);
  const n = e[0];
  return typeof n == "function" ? te(be(() => ({ get: n, set: re }))) : D(n);
}
function Oe(e, n, t = {}) {
  const {
    eventFilter: i = de,
    ...o
  } = t;
  return Y(
    e,
    Ie(
      i,
      n
    ),
    o
  );
}
function Pe(e, n, t = {}) {
  const {
    eventFilter: i,
    ...o
  } = t, { eventFilter: a, pause: r, resume: m, isActive: C } = Me(i);
  return { stop: Oe(
    e,
    n,
    {
      ...o,
      eventFilter: a
    }
  ), pause: r, resume: m, isActive: C };
}
function ce(e, n = !0, t) {
  Te() ? ne(e, t) : n ? e() : se(e);
}
function ue(e) {
  var n;
  const t = J(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const j = Se ? window : void 0;
function Z(...e) {
  let n, t, i, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, i, o] = e, n = j) : [n, t, i, o] = e, !n)
    return re;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const a = [], r = () => {
    a.forEach((y) => y()), a.length = 0;
  }, m = (y, g, M, $) => (y.addEventListener(g, M, $), () => y.removeEventListener(g, M, $)), C = Y(
    () => [ue(n), J(o)],
    ([y, g]) => {
      if (r(), !y)
        return;
      const M = Ce(g) ? { ...g } : g;
      a.push(
        ...t.flatMap(($) => i.map((S) => m(y, $, S, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), k = () => {
    C(), r();
  };
  return le(k), k;
}
function Ae() {
  const e = D(!1), n = ae();
  return n && ne(() => {
    e.value = !0;
  }, n), e;
}
function Ee(e) {
  const n = Ae();
  return R(() => (n.value, !!e()));
}
function Le(e, n = {}) {
  const { window: t = j } = n, i = Ee(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const a = D(!1), r = (k) => {
    a.value = k.matches;
  }, m = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, C = ve(() => {
    i.value && (m(), o = t.matchMedia(J(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), a.value = o.matches);
  });
  return le(() => {
    C(), m(), o = void 0;
  }), a;
}
const W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, V = "__vueuse_ssr_handlers__", je = /* @__PURE__ */ De();
function De() {
  return V in W || (W[V] = W[V] || {}), W[V];
}
function fe(e, n) {
  return je[e] || n;
}
function Be(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Fe = {
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
}, ee = "vueuse-storage";
function Ue(e, n, t, i = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: r = !0,
    listenToStorageChanges: m = !0,
    writeDefaults: C = !0,
    mergeDefaults: k = !1,
    shallow: y,
    window: g = j,
    eventFilter: M,
    onError: $ = (u) => {
      console.error(u);
    },
    initOnMounted: S
  } = i, w = (y ? pe : D)(typeof n == "function" ? n() : n);
  if (!t)
    try {
      t = fe("getDefaultStorage", () => {
        var u;
        return (u = j) == null ? void 0 : u.localStorage;
      })();
    } catch (u) {
      $(u);
    }
  if (!t)
    return w;
  const I = J(n), L = Be(I), T = (o = i.serializer) != null ? o : Fe[L], { pause: B, resume: _ } = Pe(
    w,
    () => F(w.value),
    { flush: a, deep: r, eventFilter: M }
  );
  g && m && ce(() => {
    Z(g, "storage", N), Z(g, ee, U), S && N();
  }), S || N();
  function q(u, p) {
    g && g.dispatchEvent(new CustomEvent(ee, {
      detail: {
        key: e,
        oldValue: u,
        newValue: p,
        storageArea: t
      }
    }));
  }
  function F(u) {
    try {
      const p = t.getItem(e);
      if (u == null)
        q(p, null), t.removeItem(e);
      else {
        const O = T.write(u);
        p !== O && (t.setItem(e, O), q(p, O));
      }
    } catch (p) {
      $(p);
    }
  }
  function A(u) {
    const p = u ? u.newValue : t.getItem(e);
    if (p == null)
      return C && I != null && t.setItem(e, T.write(I)), I;
    if (!u && k) {
      const O = T.read(p);
      return typeof k == "function" ? k(O, I) : L === "object" && !Array.isArray(O) ? { ...I, ...O } : O;
    } else
      return typeof p != "string" ? p : T.read(p);
  }
  function N(u) {
    if (!(u && u.storageArea !== t)) {
      if (u && u.key == null) {
        w.value = I;
        return;
      }
      if (!(u && u.key !== e)) {
        B();
        try {
          (u == null ? void 0 : u.newValue) !== T.write(w.value) && (w.value = A(u));
        } catch (p) {
          $(p);
        } finally {
          u ? se(_) : _();
        }
      }
    }
  }
  function U(u) {
    N(u.detail);
  }
  return w;
}
function We(e) {
  return Le("(prefers-color-scheme: dark)", e);
}
function Ve(e = {}) {
  const {
    selector: n = "html",
    attribute: t = "class",
    initialValue: i = "auto",
    window: o = j,
    storage: a,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: m = !0,
    storageRef: C,
    emitAuto: k,
    disableTransition: y = !0
  } = e, g = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = We({ window: o }), $ = R(() => M.value ? "dark" : "light"), S = C || (r == null ? qe(i) : Ue(r, i, a, { window: o, listenToStorageChanges: m })), w = R(() => S.value === "auto" ? $.value : S.value), I = fe(
    "updateHTMLAttrs",
    (_, q, F) => {
      const A = typeof _ == "string" ? o == null ? void 0 : o.document.querySelector(_) : ue(_);
      if (!A)
        return;
      let N;
      if (y && (N = o.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(N)), q === "class") {
        const U = F.split(/\s/g);
        Object.values(g).flatMap((u) => (u || "").split(/\s/g)).filter(Boolean).forEach((u) => {
          U.includes(u) ? A.classList.add(u) : A.classList.remove(u);
        });
      } else
        A.setAttribute(q, F);
      y && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function L(_) {
    var q;
    I(n, t, (q = g[_]) != null ? q : _);
  }
  function T(_) {
    e.onChanged ? e.onChanged(_, L) : L(_);
  }
  Y(w, T, { flush: "post", immediate: !0 }), ce(() => T(w.value));
  const B = R({
    get() {
      return k ? S.value : w.value;
    },
    set(_) {
      S.value = _;
    }
  });
  try {
    return Object.assign(B, { store: S, system: $, state: w });
  } catch {
    return B;
  }
}
const b = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [i, o] of n)
    t[i] = o;
  return t;
}, Re = {
  name: "sol-color-mode",
  // composition in options api requires setup()
  setup() {
    return { colorMode: Ve({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, ze = { class: "d-flex align-items-center" }, Ke = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, He = { class: "bi bi-brightness-high-fill" }, Je = { class: "bi bi-moon-stars-fill" }, Ge = { class: "bi bi-circle-half" }, Qe = { class: "dropdown-menu p-1" }, Ye = { class: "mb-1" }, Xe = /* @__PURE__ */ s("i", { class: "bi bi-brightness-high-fill" }, null, -1), Ze = { class: "mb-1" }, et = /* @__PURE__ */ s("i", { class: "bi bi-moon-stars-fill" }, null, -1), tt = /* @__PURE__ */ s("i", { class: "bi bi-circle-half" }, null, -1);
function nt(e, n, t, i, o, a) {
  return l(), d("div", ze, [
    s("div", null, [
      s("button", Ke, [
        z(s("i", He, null, 512), [
          [K, i.colorMode == "light"]
        ]),
        z(s("i", Je, null, 512), [
          [K, i.colorMode == "dark"]
        ]),
        z(s("i", Ge, null, 512), [
          [K, i.colorMode == "auto"]
        ])
      ]),
      s("ul", Qe, [
        s("li", Ye, [
          s("a", {
            class: f(["dropdown-item rounded", i.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[0] || (n[0] = (r) => i.colorMode = "light")
          }, [
            Xe,
            x(" Light")
          ], 2)
        ]),
        s("li", Ze, [
          s("a", {
            class: f(["dropdown-item rounded", i.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[1] || (n[1] = (r) => i.colorMode = "dark")
          }, [
            et,
            x(" Dark")
          ], 2)
        ]),
        s("li", null, [
          s("a", {
            class: f(["dropdown-item rounded", i.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[2] || (n[2] = (r) => i.colorMode = "auto")
          }, [
            tt,
            x(" Auto")
          ], 2)
        ])
      ])
    ])
  ]);
}
const st = /* @__PURE__ */ b(Re, [["render", nt]]), at = {
  name: "axdd-panel",
  data: function() {
    return {};
  }
}, it = { class: "card rounded-3 border-0 mb-4 p-4" };
function ot(e, n, t, i, o, a) {
  return l(), d("div", it, [
    c(e.$slots, "default")
  ]);
}
const lt = /* @__PURE__ */ b(at, [["render", ot]]), rt = {
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
}, dt = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, ct = { class: "d-flex" }, ut = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), ft = { class: "flex-fill text-end" }, ht = ["href"], bt = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, mt = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), gt = [
  mt
], _t = {
  key: 0,
  role: "navigation"
}, pt = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), vt = {
  key: 1,
  class: "mb-3 text-light"
}, yt = /* @__PURE__ */ s("div", { class: "sol-sidebar-logo" }, " ", -1), wt = { class: "flex-fill" }, kt = { key: 0 }, $t = { class: "font-weight-light py-3 small" }, xt = /* @__PURE__ */ oe('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function St(e, n, t, i, o, a) {
  const r = X("router-link");
  return l(), d("div", {
    class: f([a.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: Q([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: f([t.sidebarClass + [a.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: Q([a.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (l(), d("div", dt, [
          c(e.$slots, "profile", {}, () => [
            s("div", ct, [
              ut,
              s("div", ft, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ht)
              ])
            ])
          ])
        ])) : h("", !0),
        s("div", {
          class: f([[a.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (l(), d("a", bt, gt)) : h("", !0),
          s("div", {
            class: f(["d-inline align-middle", [a.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ie(r, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: E(() => [
                x(v(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      s("div", {
        id: "sidebar-nav-collapse",
        class: f(["px-3 flex-fill", [
          a.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (l(), d("nav", _t, [
          c(e.$slots, "navigation", {}, () => [
            pt
          ])
        ])) : h("", !0),
        e.$slots.aside ? (l(), d("aside", vt, [
          c(e.$slots, "aside", {}, () => [
            x("this is aside content")
          ])
        ])) : h("", !0)
      ], 2),
      yt
    ], 6),
    s("div", {
      id: "scrollbody",
      class: f([[a.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: f([[a.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", wt, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (l(), d("footer", kt, [
          c(e.$slots, "footer", {}, () => [
            s("div", $t, [
              xt,
              s("div", null, " Copyright © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : h("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Nt = /* @__PURE__ */ b(rt, [["render", St]]), Ct = {
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
}, It = { class: "w-100" }, Mt = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Tt = { class: "container-xl" }, qt = { class: "axdd-topbar-brand" }, Ot = { class: "container-xl axdd-topbar-logo" }, Pt = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, At = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Et = [
  At
], Lt = { class: "w-100 flex-fill bg-body text-body" }, jt = { class: "container-xl" }, Dt = { class: "row" }, Bt = { role: "navigation" }, Ft = { key: 0 }, Ut = { class: "col" }, Wt = {
  key: 0,
  class: "my-3"
}, Vt = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Rt = { class: "w-100" }, zt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Kt = { class: "container-xl" }, Ht = { class: "text-white font-weight-light py-3" }, Jt = /* @__PURE__ */ oe('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function Gt(e, n, t, i, o, a) {
  const r = X("router-link");
  return l(), d("div", {
    class: f([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", It, [
      e.$slots.profile ? (l(), d("div", Mt, [
        s("div", Tt, [
          c(e.$slots, "profile", {}, () => [
            x("Welcome!")
          ])
        ])
      ])) : h("", !0),
      s("div", qt, [
        s("div", Ot, [
          e.$slots.navigation ? (l(), d("a", Pt, Et)) : h("", !0),
          s("div", {
            class: f(["d-inline align-middle text-white", [a.mq.xlPlus ? "h2" : "h3"]])
          }, [
            ie(r, {
              to: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, {
              default: E(() => [
                x(v(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    s("div", Lt, [
      s("div", jt, [
        s("div", Dt, [
          e.$slots.navigation || e.$slots.aside ? (l(), d("div", {
            key: 0,
            class: "",
            style: Q(a.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: f([a.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", Bt, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (l(), d("aside", Ft, [
                c(e.$slots, "aside", {}, () => [
                  x("this is aside content")
                ])
              ])) : h("", !0)
            ], 2)
          ], 4)) : h("", !0),
          s("div", Ut, [
            e.$slots.bar ? (l(), d("div", Wt, [
              c(e.$slots, "bar")
            ])) : h("", !0),
            s("main", null, [
              c(e.$slots, "main", {}, () => [
                Vt
              ])
            ])
          ])
        ])
      ])
    ]),
    s("footer", Rt, [
      e.$slots.footer ? (l(), d("div", zt, [
        s("div", Kt, [
          c(e.$slots, "footer", {}, () => [
            s("div", Ht, [
              Jt,
              s("div", null, " Copyright © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : h("", !0)
    ])
  ], 2);
}
const Qt = /* @__PURE__ */ b(Ct, [["render", Gt]]), Yt = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, Xt = { class: "card shadow-sm rounded-3 mb-4" }, Zt = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, en = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, tn = {
  key: 2,
  class: "card-body"
}, nn = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function sn(e, n, t, i, o, a) {
  return l(), d("div", Xt, [
    e.$slots.heading ? (l(), d("div", Zt, [
      c(e.$slots, "heading")
    ])) : h("", !0),
    e.$slots["heading-action"] ? (l(), d("div", en, [
      c(e.$slots, "heading-action")
    ])) : h("", !0),
    e.$slots.body ? (l(), d("div", tn, [
      c(e.$slots, "body")
    ])) : h("", !0),
    e.$slots.footer ? (l(), d("div", nn, [
      c(e.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const an = /* @__PURE__ */ b(Yt, [["render", sn]]), on = {
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
function ln(e, n, t, i, o, a) {
  return l(), H(ye(`h${a.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: E(() => [
      c(e.$slots, "default")
    ]),
    _: 3
  });
}
const rn = /* @__PURE__ */ b(on, [["render", ln]]), dn = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function cn(e, n, t, i, o, a) {
  return l(), d("div", null, [
    c(e.$slots, "default")
  ]);
}
const un = /* @__PURE__ */ b(dn, [["render", cn]]), fn = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function hn(e, n, t, i, o, a) {
  return l(), d("div", null, [
    c(e.$slots, "default")
  ]);
}
const bn = /* @__PURE__ */ b(fn, [["render", hn]]), mn = {
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
}, gn = ["id"], _n = ["id"];
function pn(e, n, t, i, o, a) {
  return t.variant == "lines" ? (l(), d("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 8, gn)) : t.variant == "pills" ? (l(), d("ul", {
    key: 1,
    class: f(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "items")
  ], 10, _n)) : h("", !0);
}
const vn = /* @__PURE__ */ b(mn, [["render", pn]]), yn = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, wn = ["id"];
function kn(e, n, t, i, o, a) {
  return l(), d("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    c(e.$slots, "panels")
  ], 8, wn);
}
const $n = /* @__PURE__ */ b(yn, [["render", kn]]), xn = {
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
}, Sn = {
  class: "nav-item",
  role: "presentation"
}, Nn = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Cn = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], In = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Mn(e, n, t, i, o, a) {
  return l(), d("li", Sn, [
    t.variant == "lines" ? (l(), d("button", {
      key: 0,
      class: f(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[0] || (n[0] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        n[1] || (n[1] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: n[2] || (n[2] = (...r) => a.onClick && a.onClick(...r))
    }, [
      c(e.$slots, "default")
    ], 42, Nn)) : t.variant == "pills" ? (l(), d("button", {
      key: 1,
      class: f(["nav-pills-link rounded-3 px-3 py-2", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[3] || (n[3] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        n[4] || (n[4] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: n[5] || (n[5] = (...r) => a.onClick && a.onClick(...r))
    }, [
      c(e.$slots, "default")
    ], 42, Cn)) : (l(), d("button", {
      key: 2,
      class: f(["nav-link", a.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[6] || (n[6] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        n[7] || (n[7] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: n[8] || (n[8] = (...r) => a.onClick && a.onClick(...r))
    }, [
      c(e.$slots, "default")
    ], 42, In))
  ]);
}
const Tn = /* @__PURE__ */ b(xn, [["render", Mn]]), qn = {
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
}, On = ["id", "aria-labelledby"];
function Pn(e, n, t, i, o, a) {
  return l(), d("div", {
    class: f(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: n[0] || (n[0] = P(we((...r) => a.setFocus && a.setFocus(...r), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, On);
}
const An = /* @__PURE__ */ b(qn, [["render", Pn]]), En = {
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
}, Ln = {
  key: 0,
  class: "d-flex"
}, jn = { class: "flex-fill dropdown" }, Dn = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Bn = { class: "me-1" }, Fn = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), Un = { class: "text-decoration-underline" }, Wn = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Vn = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Rn = {
  key: 0,
  class: "small text-danger"
}, zn = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Kn = { class: "small" }, Hn = { class: "small" }, Jn = ["href"], Gn = ["href"], Qn = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), Yn = {
  key: 1,
  class: "d-flex"
}, Xn = {
  key: 0,
  class: "flex-fill text-white"
}, Zn = { class: "me-1" }, es = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), ts = {
  key: 1,
  class: "flex-fill text-white"
}, ns = { class: "flex-fill text-end" }, ss = ["href"], as = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function is(e, n, t, i, o, a) {
  return t.variant === "flyout" ? (l(), d("div", Ln, [
    s("div", jn, [
      t.userOverride ? (l(), d("a", Dn, [
        s("span", Bn, v(t.userNetid), 1),
        Fn,
        s("span", Un, v(t.userOverride), 1)
      ])) : (l(), d("a", Wn, v(t.userNetid), 1)),
      s("div", Vn, [
        t.userOverride ? (l(), d("p", Rn, [
          x(" overriding as "),
          zn,
          x(" " + v(t.userOverride), 1)
        ])) : h("", !0),
        s("p", Kn, v(t.userOfficialName) + ", " + v(t.userPreferredName) + ", " + v(t.userPronouns), 1),
        s("p", Hn, [
          s("a", { href: t.profileUrl }, "go to profile", 8, Jn)
        ]),
        s("div", null, [
          t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Gn)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            Qn
          ])
        ])
      ])
    ])
  ])) : (l(), d("div", Yn, [
    t.userOverride ? (l(), d("div", Xn, [
      s("span", Zn, v(t.userNetid), 1),
      es,
      x(" " + v(t.userOverride), 1)
    ])) : (l(), d("div", ts, v(t.userNetid), 1)),
    s("div", ns, [
      t.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, ss)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        as
      ])
    ])
  ]));
}
const os = /* @__PURE__ */ b(En, [["render", is]]), ls = {
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
}, rs = ["href", "aria-controls"], ds = ["data-bs-target", "aria-controls"], cs = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function us(e, n, t, i, o, a) {
  return t.isLink ? (l(), d("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 8, rs)) : (l(), d("button", {
    key: 1,
    class: f(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (l(), d("i", cs)) : h("", !0),
    c(e.$slots, "default", {}, void 0, !0)
  ], 10, ds));
}
const fs = /* @__PURE__ */ b(ls, [["render", us], ["__scopeId", "data-v-bac417f3"]]), hs = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, bs = ["id"];
function ms(e, n, t, i, o, a) {
  return l(), d("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    c(e.$slots, "default")
  ], 8, bs);
}
const gs = /* @__PURE__ */ b(hs, [["render", ms]]), _s = {
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
}, ps = (e) => (ke("data-v-075da959"), e = e(), $e(), e), vs = { class: "rounded-3 p-3 mb-2" }, ys = { class: "d-flex" }, ws = {
  class: "me-3",
  style: { width: "330px" }
}, ks = ["data-bs-target", "aria-controls"], $s = /* @__PURE__ */ ps(() => /* @__PURE__ */ s("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), xs = ["id"], Ss = { class: "flex-fill" }, Ns = ["id", "aria-labelledby"];
function Cs(e, n, t, i, o, a) {
  return l(), d("div", vs, [
    s("div", ys, [
      s("div", ws, [
        s("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          $s,
          s("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, v(t.blockTitle), 9, xs)
        ], 8, ks)
      ]),
      s("div", Ss, [
        c(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    s("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      c(e.$slots, "body", {}, void 0, !0)
    ], 8, Ns)
  ]);
}
const Is = /* @__PURE__ */ b(_s, [["render", Cs], ["__scopeId", "data-v-075da959"]]), Ms = {
  name: "sol-link",
  props: {
    variant: {
      type: String,
      required: !0,
      default: "default"
    },
    href: {
      type: String,
      required: !0,
      default: "/"
    },
    color: {
      type: String,
      required: !1
    },
    icon: {
      type: String,
      required: !1
    }
  },
  data: function() {
    return {};
  }
};
function Ts(e, n, t, i, o, a) {
  const r = X("router-link");
  return l(), d(xe, null, [
    t.variant == "default" ? (l(), H(r, {
      key: 0,
      to: t.href,
      class: f(t.color),
      onClick: n[0] || (n[0] = (m) => e.$emit("click", m))
    }, {
      default: E(() => [
        c(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class"])) : h("", !0),
    t.variant == "quiet" ? (l(), H(r, {
      key: 1,
      to: t.href,
      class: f([t.color, "link-underline link-underline-opacity-0 link-underline-opacity-100-hover"]),
      onClick: n[1] || (n[1] = (m) => e.$emit("click", m))
    }, {
      default: E(() => [
        c(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class"])) : h("", !0),
    t.variant == "icon" ? (l(), H(r, {
      key: 2,
      to: t.href,
      class: f([t.color, "link-underline link-underline-opacity-0 link-underline-opacity-100-hover"]),
      onClick: n[2] || (n[2] = (m) => e.$emit("click", m))
    }, {
      default: E(() => [
        z(s("i", {
          class: f(["bi " + t.icon, "me-1"])
        }, null, 2), [
          [K, t.icon]
        ]),
        c(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to", "class"])) : h("", !0)
  ], 64);
}
const qs = /* @__PURE__ */ b(Ms, [["render", Ts]]), G = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: an,
  CardHeading: rn,
  CardAction: un,
  CardTabs: bn,
  DisclosureAction: fs,
  DisclosureBlock: Is,
  DisclosurePanel: gs,
  Profile: os,
  TabsList: vn,
  TabsDisplay: $n,
  TabsItem: Tn,
  TabsPanel: An,
  Sidebar: Nt,
  Topbar: Qt,
  ColorMode: st,
  Panel: lt,
  Link: qs
}, Ps = {
  install(e) {
    for (const n in G)
      if (Object.prototype.hasOwnProperty.call(G, n)) {
        const t = G[n];
        e.component(t.name, t);
      }
  }
};
export {
  Ps as default
};
