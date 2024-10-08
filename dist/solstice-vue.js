import { openBlock as d, createElementBlock as c, renderSlot as u, createCommentVNode as b, createElementVNode as s, normalizeClass as f, withKeys as J, withModifiers as re, resolveComponent as de, normalizeStyle as H, createVNode as ce, withCtx as ue, createTextVNode as $, toDisplayString as g, createStaticVNode as Y, toRef as fe, readonly as X, customRef as he, ref as L, onMounted as Z, nextTick as ee, unref as me, getCurrentInstance as te, getCurrentScope as pe, onScopeDispose as ge, watch as K, computed as W, shallowRef as be, watchEffect as ve, withDirectives as V, vShow as z } from "vue";
const I = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of n)
    t[o] = a;
  return t;
}, _e = {
  props: {
    variant: {
      type: String,
      required: !1,
      default: "underline"
    },
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ye = ["id"], we = ["id"];
function xe(e, n, t, o, a, i) {
  return t.variant == "underline" ? (d(), c("ul", {
    key: 0,
    class: "nav nav-underline border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, ye)) : t.variant == "pills" ? (d(), c("ul", {
    key: 1,
    class: "bg-body-tertiary gap-1 rounded-3 p-1 nav nav-pills",
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, we)) : b("", !0);
}
const $n = /* @__PURE__ */ I(_e, [["render", xe]]), Se = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ke = ["id"];
function $e(e, n, t, o, a, i) {
  return d(), c("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    u(e.$slots, "default")
  ], 8, ke);
}
const Nn = /* @__PURE__ */ I(Se, [["render", $e]]), Ne = {
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
}, Ce = {
  class: "nav-item",
  role: "presentation"
}, Me = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Oe(e, n, t, o, a, i) {
  return d(), c("li", Ce, [
    s("a", {
      class: f(["nav-link", i.classObject]),
      href: "#",
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[0] || (n[0] = J((...r) => i.moveNext && i.moveNext(...r), ["right"])),
        n[1] || (n[1] = J((...r) => i.movePrev && i.movePrev(...r), ["left"]))
      ],
      onClick: n[2] || (n[2] = (...r) => i.onClick && i.onClick(...r))
    }, [
      u(e.$slots, "default")
    ], 42, Me)
  ]);
}
const Cn = /* @__PURE__ */ I(Ne, [["render", Oe]]), Te = {
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
}, qe = ["id", "aria-labelledby"];
function Ie(e, n, t, o, a, i) {
  return d(), c("div", {
    class: f(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: n[0] || (n[0] = J(re((...r) => i.setFocus && i.setFocus(...r), ["shift", "prevent"]), ["tab"]))
  }, [
    u(e.$slots, "default")
  ], 42, qe);
}
const Mn = /* @__PURE__ */ I(Te, [["render", Ie]]), Pe = {
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
}, Ae = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Ee = { class: "d-flex" }, Le = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), Fe = { class: "flex-fill text-end" }, je = ["href"], De = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ue = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), Be = [
  Ue
], We = {
  key: 0,
  role: "navigation"
}, Re = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), Ve = {
  key: 1,
  class: "mb-3 text-light"
}, ze = /* @__PURE__ */ s("div", { class: "sol-sidebar-logo" }, " ", -1), Je = { class: "flex-fill" }, He = { key: 0 }, Ke = { class: "font-weight-light py-3 small" }, Ge = /* @__PURE__ */ Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Qe(e, n, t, o, a, i) {
  const r = de("router-link");
  return d(), c("div", {
    class: f([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: H([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: f([t.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: H([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (d(), c("div", Ae, [
          u(e.$slots, "profile", {}, () => [
            s("div", Ee, [
              Le,
              s("div", Fe, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, je)
              ])
            ])
          ])
        ])) : b("", !0),
        s("div", {
          class: f([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), c("a", De, Be)) : b("", !0),
          s("div", {
            class: f(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ce(r, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: ue(() => [
                $(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      s("div", {
        id: "sidebar-nav-collapse",
        class: f(["px-3 flex-fill", [
          i.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (d(), c("nav", We, [
          u(e.$slots, "navigation", {}, () => [
            Re
          ])
        ])) : b("", !0),
        e.$slots.aside ? (d(), c("aside", Ve, [
          u(e.$slots, "aside", {}, () => [
            $("this is aside content")
          ])
        ])) : b("", !0)
      ], 2),
      ze
    ], 6),
    s("div", {
      id: "scrollbody",
      class: f([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: f([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", Je, [
          u(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), c("footer", He, [
          u(e.$slots, "footer", {}, () => [
            s("div", Ke, [
              Ge,
              s("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : b("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const On = /* @__PURE__ */ I(Pe, [["render", Qe]]), Ye = {
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
    },
    backgroundClass: {
      type: String,
      default: "bg-body"
    }
  },
  components: {},
  data() {
    return {};
  },
  created: function() {
  }
}, Xe = { class: "w-100" }, Ze = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, et = { class: "container-xl" }, tt = { class: "axdd-topbar-brand" }, nt = { class: "container-xl axdd-topbar-logo" }, st = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, it = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), ot = [
  it
], at = ["href"], lt = { class: "container-xl" }, rt = { class: "row" }, dt = { role: "navigation" }, ct = { key: 0 }, ut = { class: "col" }, ft = {
  key: 0,
  class: "my-3"
}, ht = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), mt = { class: "w-100" }, pt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, gt = { class: "container-xl" }, bt = { class: "text-white font-weight-light py-3" }, vt = /* @__PURE__ */ Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1);
function _t(e, n, t, o, a, i) {
  return d(), c("div", {
    class: f([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", Xe, [
      e.$slots.profile ? (d(), c("div", Ze, [
        s("div", et, [
          u(e.$slots, "profile", {}, () => [
            $("Welcome!")
          ])
        ])
      ])) : b("", !0),
      s("div", tt, [
        s("div", nt, [
          e.$slots.navigation ? (d(), c("a", st, ot)) : b("", !0),
          s("div", {
            class: f(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: t.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, g(t.appName), 9, at)
          ], 2)
        ])
      ])
    ]),
    s("div", {
      class: f([t.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      s("div", lt, [
        s("div", rt, [
          e.$slots.navigation || e.$slots.aside ? (d(), c("div", {
            key: 0,
            class: "",
            style: H(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: f([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", dt, [
                u(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (d(), c("aside", ct, [
                u(e.$slots, "aside", {}, () => [
                  $("this is aside content")
                ])
              ])) : b("", !0)
            ], 2)
          ], 4)) : b("", !0),
          s("div", ut, [
            e.$slots.bar ? (d(), c("div", ft, [
              u(e.$slots, "bar")
            ])) : b("", !0),
            s("main", null, [
              u(e.$slots, "main", {}, () => [
                ht
              ])
            ])
          ])
        ])
      ])
    ], 2),
    s("footer", mt, [
      e.$slots.footer ? (d(), c("div", pt, [
        s("div", gt, [
          u(e.$slots, "footer", {}, () => [
            s("div", bt, [
              vt,
              s("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : b("", !0)
    ])
  ], 2);
}
const Tn = /* @__PURE__ */ I(Ye, [["render", _t]]), yt = {
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
}, wt = {
  key: 0,
  class: "d-flex"
}, xt = { class: "flex-fill dropdown" }, St = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, kt = { class: "me-1" }, $t = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), Nt = { class: "text-decoration-underline" }, Ct = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Mt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Ot = {
  key: 0,
  class: "small text-danger"
}, Tt = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), qt = { class: "small" }, It = { class: "small" }, Pt = ["href"], At = ["href"], Et = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), Lt = {
  key: 1,
  class: "d-flex"
}, Ft = {
  key: 0,
  class: "flex-fill text-white"
}, jt = { class: "me-1" }, Dt = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Ut = {
  key: 1,
  class: "flex-fill text-white"
}, Bt = { class: "flex-fill text-end" }, Wt = ["href"], Rt = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function Vt(e, n, t, o, a, i) {
  return t.variant === "flyout" ? (d(), c("div", wt, [
    s("div", xt, [
      t.userOverride ? (d(), c("a", St, [
        s("span", kt, g(t.userNetid), 1),
        $t,
        s("span", Nt, g(t.userOverride), 1)
      ])) : (d(), c("a", Ct, g(t.userNetid), 1)),
      s("div", Mt, [
        t.userOverride ? (d(), c("p", Ot, [
          $(" overriding as "),
          Tt,
          $(" " + g(t.userOverride), 1)
        ])) : b("", !0),
        s("p", qt, g(t.userOfficialName) + ", " + g(t.userPreferredName) + ", " + g(t.userPronouns), 1),
        s("p", It, [
          s("a", { href: t.profileUrl }, "go to profile", 8, Pt)
        ]),
        s("div", null, [
          t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, At)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            Et
          ])
        ])
      ])
    ])
  ])) : (d(), c("div", Lt, [
    t.userOverride ? (d(), c("div", Ft, [
      s("span", jt, g(t.userNetid), 1),
      Dt,
      $(" " + g(t.userOverride), 1)
    ])) : (d(), c("div", Ut, g(t.userNetid), 1)),
    s("div", Bt, [
      t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Wt)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        Rt
      ])
    ])
  ]));
}
const qn = /* @__PURE__ */ I(yt, [["render", Vt]]);
function ne(e) {
  return pe() ? (ge(e), !0) : !1;
}
function R(e) {
  return typeof e == "function" ? e() : me(e);
}
const zt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jt = Object.prototype.toString, Ht = (e) => Jt.call(e) === "[object Object]", se = () => {
};
function Kt(e, n) {
  function t(...o) {
    return new Promise((a, i) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(a).catch(i);
    });
  }
  return t;
}
const ie = (e) => e();
function Gt(e = ie) {
  const n = L(!0);
  function t() {
    n.value = !1;
  }
  function o() {
    n.value = !0;
  }
  const a = (...i) => {
    n.value && e(...i);
  };
  return { isActive: X(n), pause: t, resume: o, eventFilter: a };
}
function Qt(e) {
  return te();
}
function Yt(...e) {
  if (e.length !== 1)
    return fe(...e);
  const n = e[0];
  return typeof n == "function" ? X(he(() => ({ get: n, set: se }))) : L(n);
}
function Xt(e, n, t = {}) {
  const {
    eventFilter: o = ie,
    ...a
  } = t;
  return K(
    e,
    Kt(
      o,
      n
    ),
    a
  );
}
function Zt(e, n, t = {}) {
  const {
    eventFilter: o,
    ...a
  } = t, { eventFilter: i, pause: r, resume: x, isActive: N } = Gt(o);
  return { stop: Xt(
    e,
    n,
    {
      ...a,
      eventFilter: i
    }
  ), pause: r, resume: x, isActive: N };
}
function oe(e, n = !0, t) {
  Qt() ? Z(e, t) : n ? e() : ee(e);
}
function ae(e) {
  var n;
  const t = R(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const E = zt ? window : void 0;
function G(...e) {
  let n, t, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, a] = e, n = E) : [n, t, o, a] = e, !n)
    return se;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const i = [], r = () => {
    i.forEach((v) => v()), i.length = 0;
  }, x = (v, h, M, w) => (v.addEventListener(h, M, w), () => v.removeEventListener(h, M, w)), N = K(
    () => [ae(n), R(a)],
    ([v, h]) => {
      if (r(), !v)
        return;
      const M = Ht(h) ? { ...h } : h;
      i.push(
        ...t.flatMap((w) => o.map((S) => x(v, w, S, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), y = () => {
    N(), r();
  };
  return ne(y), y;
}
function en() {
  const e = L(!1), n = te();
  return n && Z(() => {
    e.value = !0;
  }, n), e;
}
function tn(e) {
  const n = en();
  return W(() => (n.value, !!e()));
}
function nn(e, n = {}) {
  const { window: t = E } = n, o = tn(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let a;
  const i = L(!1), r = (y) => {
    i.value = y.matches;
  }, x = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", r) : a.removeListener(r));
  }, N = ve(() => {
    o.value && (x(), a = t.matchMedia(R(e)), "addEventListener" in a ? a.addEventListener("change", r) : a.addListener(r), i.value = a.matches);
  });
  return ne(() => {
    N(), x(), a = void 0;
  }), i;
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = "__vueuse_ssr_handlers__", sn = /* @__PURE__ */ on();
function on() {
  return B in U || (U[B] = U[B] || {}), U[B];
}
function le(e, n) {
  return sn[e] || n;
}
function an(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ln = {
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
}, Q = "vueuse-storage";
function rn(e, n, t, o = {}) {
  var a;
  const {
    flush: i = "pre",
    deep: r = !0,
    listenToStorageChanges: x = !0,
    writeDefaults: N = !0,
    mergeDefaults: y = !1,
    shallow: v,
    window: h = E,
    eventFilter: M,
    onError: w = (l) => {
      console.error(l);
    },
    initOnMounted: S
  } = o, _ = (v ? be : L)(typeof n == "function" ? n() : n);
  if (!t)
    try {
      t = le("getDefaultStorage", () => {
        var l;
        return (l = E) == null ? void 0 : l.localStorage;
      })();
    } catch (l) {
      w(l);
    }
  if (!t)
    return _;
  const C = R(n), A = an(C), O = (a = o.serializer) != null ? a : ln[A], { pause: F, resume: m } = Zt(
    _,
    () => j(_.value),
    { flush: i, deep: r, eventFilter: M }
  );
  h && x && oe(() => {
    G(h, "storage", k), G(h, Q, D), S && k();
  }), S || k();
  function T(l, p) {
    h && h.dispatchEvent(new CustomEvent(Q, {
      detail: {
        key: e,
        oldValue: l,
        newValue: p,
        storageArea: t
      }
    }));
  }
  function j(l) {
    try {
      const p = t.getItem(e);
      if (l == null)
        T(p, null), t.removeItem(e);
      else {
        const q = O.write(l);
        p !== q && (t.setItem(e, q), T(p, q));
      }
    } catch (p) {
      w(p);
    }
  }
  function P(l) {
    const p = l ? l.newValue : t.getItem(e);
    if (p == null)
      return N && C != null && t.setItem(e, O.write(C)), C;
    if (!l && y) {
      const q = O.read(p);
      return typeof y == "function" ? y(q, C) : A === "object" && !Array.isArray(q) ? { ...C, ...q } : q;
    } else return typeof p != "string" ? p : O.read(p);
  }
  function k(l) {
    if (!(l && l.storageArea !== t)) {
      if (l && l.key == null) {
        _.value = C;
        return;
      }
      if (!(l && l.key !== e)) {
        F();
        try {
          (l == null ? void 0 : l.newValue) !== O.write(_.value) && (_.value = P(l));
        } catch (p) {
          w(p);
        } finally {
          l ? ee(m) : m();
        }
      }
    }
  }
  function D(l) {
    k(l.detail);
  }
  return _;
}
function dn(e) {
  return nn("(prefers-color-scheme: dark)", e);
}
function cn(e = {}) {
  const {
    selector: n = "html",
    attribute: t = "class",
    initialValue: o = "auto",
    window: a = E,
    storage: i,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: x = !0,
    storageRef: N,
    emitAuto: y,
    disableTransition: v = !0
  } = e, h = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = dn({ window: a }), w = W(() => M.value ? "dark" : "light"), S = N || (r == null ? Yt(o) : rn(r, o, i, { window: a, listenToStorageChanges: x })), _ = W(() => S.value === "auto" ? w.value : S.value), C = le(
    "updateHTMLAttrs",
    (m, T, j) => {
      const P = typeof m == "string" ? a == null ? void 0 : a.document.querySelector(m) : ae(m);
      if (!P)
        return;
      let k;
      if (v && (k = a.document.createElement("style"), k.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), a.document.head.appendChild(k)), T === "class") {
        const D = j.split(/\s/g);
        Object.values(h).flatMap((l) => (l || "").split(/\s/g)).filter(Boolean).forEach((l) => {
          D.includes(l) ? P.classList.add(l) : P.classList.remove(l);
        });
      } else
        P.setAttribute(T, j);
      v && (a.getComputedStyle(k).opacity, document.head.removeChild(k));
    }
  );
  function A(m) {
    var T;
    C(n, t, (T = h[m]) != null ? T : m);
  }
  function O(m) {
    e.onChanged ? e.onChanged(m, A) : A(m);
  }
  K(_, O, { flush: "post", immediate: !0 }), oe(() => O(_.value));
  const F = W({
    get() {
      return y ? S.value : _.value;
    },
    set(m) {
      S.value = m;
    }
  });
  try {
    return Object.assign(F, { store: S, system: w, state: _ });
  } catch {
    return F;
  }
}
const un = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: cn({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, fn = { class: "d-flex align-items-center" }, hn = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, mn = { class: "bi bi-brightness-high-fill" }, pn = { class: "bi bi-moon-stars-fill" }, gn = { class: "bi bi-circle-half" }, bn = { class: "dropdown-menu p-1" }, vn = { class: "mb-1" }, _n = /* @__PURE__ */ s("i", { class: "bi bi-brightness-high-fill" }, null, -1), yn = { class: "mb-1" }, wn = /* @__PURE__ */ s("i", { class: "bi bi-moon-stars-fill" }, null, -1), xn = /* @__PURE__ */ s("i", { class: "bi bi-circle-half" }, null, -1);
function Sn(e, n, t, o, a, i) {
  return d(), c("div", fn, [
    s("div", null, [
      s("button", hn, [
        V(s("i", mn, null, 512), [
          [z, o.colorMode == "light"]
        ]),
        V(s("i", pn, null, 512), [
          [z, o.colorMode == "dark"]
        ]),
        V(s("i", gn, null, 512), [
          [z, o.colorMode == "auto"]
        ])
      ]),
      s("ul", bn, [
        s("li", vn, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[0] || (n[0] = (r) => o.colorMode = "light")
          }, [
            _n,
            $(" Light")
          ], 2)
        ]),
        s("li", yn, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[1] || (n[1] = (r) => o.colorMode = "dark")
          }, [
            wn,
            $(" Dark")
          ], 2)
        ]),
        s("li", null, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[2] || (n[2] = (r) => o.colorMode = "auto")
          }, [
            xn,
            $(" Auto")
          ], 2)
        ])
      ])
    ])
  ]);
}
const In = /* @__PURE__ */ I(un, [["render", Sn]]);
export {
  In as SColorMode,
  qn as SProfile,
  On as SSidebar,
  Nn as STabsDisplay,
  Cn as STabsItem,
  $n as STabsList,
  Mn as STabsPanel,
  Tn as STopbar
};
