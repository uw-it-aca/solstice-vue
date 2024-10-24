import { openBlock as d, createElementBlock as u, renderSlot as c, createCommentVNode as g, createElementVNode as s, normalizeClass as f, withKeys as J, withModifiers as re, resolveComponent as de, normalizeStyle as H, createVNode as ue, withCtx as ce, createTextVNode as $, toDisplayString as b, createStaticVNode as Y, toRef as fe, readonly as X, customRef as me, ref as L, onMounted as Z, nextTick as ee, unref as pe, getCurrentInstance as te, getCurrentScope as he, onScopeDispose as be, watch as K, computed as W, shallowRef as ge, watchEffect as ve, withDirectives as V, vShow as z } from "vue";
const I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, ye = {
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
}, we = ["id"], _e = ["id"];
function xe(e, t, n, o, l, i) {
  return n.variant == "underline" ? (d(), u("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, we)) : n.variant == "pills" ? (d(), u("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, _e)) : g("", !0);
}
const an = /* @__PURE__ */ I(ye, [["render", xe]]), Se = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ke = ["id"];
function $e(e, t, n, o, l, i) {
  return d(), u("div", {
    class: "tab-content",
    id: n.tabsId + "Content"
  }, [
    c(e.$slots, "default")
  ], 8, ke);
}
const rn = /* @__PURE__ */ I(Se, [["render", $e]]), Ne = {
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
      return [].findIndex.call(this.elements, (t) => t === e);
    },
    moveTab(e) {
      this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((t, n) => {
        n == e ? t.tabIndex = 0 : t.tabIndex = -1;
      });
    },
    moveNext(e) {
      const t = this.findIndex(e.target);
      t < this.elements.length - 1 && this.moveTab(t + 1);
    },
    movePrev(e) {
      const t = this.findIndex(e.target);
      t > 0 && this.moveTab(t - 1);
    },
    onClick(e) {
      const t = this.findIndex(e.target);
      this.moveTab(t);
    }
  }
}, Ce = {
  class: "nav-item",
  role: "presentation"
}, Me = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Oe(e, t, n, o, l, i) {
  return d(), u("li", Ce, [
    s("a", {
      class: f(["nav-link", i.classObject]),
      href: "#",
      tabindex: [n.activeTab ? "0" : "-1"],
      id: n.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + n.panelId,
      type: "button",
      role: "tab",
      "aria-controls": n.panelId,
      "aria-selected": n.activeTab,
      onKeydown: [
        t[0] || (t[0] = J((...r) => i.moveNext && i.moveNext(...r), ["right"])),
        t[1] || (t[1] = J((...r) => i.movePrev && i.movePrev(...r), ["left"]))
      ],
      onClick: t[2] || (t[2] = (...r) => i.onClick && i.onClick(...r))
    }, [
      c(e.$slots, "default")
    ], 42, Me)
  ]);
}
const dn = /* @__PURE__ */ I(Ne, [["render", Oe]]), Te = {
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
function Ie(e, t, n, o, l, i) {
  return d(), u("div", {
    class: f(["tab-pane fade", { "show active": n.activePanel }]),
    id: n.panelId,
    role: "tabpanel",
    "aria-labelledby": n.panelId + "-tab",
    tabindex: "0",
    onKeydown: t[0] || (t[0] = J(re((...r) => i.setFocus && i.setFocus(...r), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, qe);
}
const un = /* @__PURE__ */ I(Te, [["render", Ie]]), Pe = {
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
}, Ee = { class: "d-flex" }, Le = { class: "flex-fill text-end" }, Fe = ["href"], je = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, De = {
  key: 0,
  role: "navigation"
}, Ue = {
  key: 1,
  class: "mb-3 text-light"
}, Be = { class: "flex-fill" }, We = { key: 0 }, Re = { class: "font-weight-light py-3 small" };
function Ve(e, t, n, o, l, i) {
  const r = de("router-link");
  return d(), u("div", {
    class: f([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: H([n.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: f([n.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: H([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (d(), u("div", Ae, [
          c(e.$slots, "profile", {}, () => [
            s("div", Ee, [
              t[0] || (t[0] = s("div", { class: "flex-fill" }, "username", -1)),
              s("div", Le, [
                s("a", {
                  href: n.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Fe)
              ])
            ])
          ])
        ])) : g("", !0),
        s("div", {
          class: f([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), u("a", je, t[1] || (t[1] = [
            s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ]))) : g("", !0),
          s("div", {
            class: f(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ue(r, {
              to: n.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: ce(() => [
                $(b(n.appName), 1)
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
        e.$slots.navigation ? (d(), u("nav", De, [
          c(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = s("ul", { class: "text-white" }, [
              s("li", null, "nav 1"),
              s("li", null, "nav 2"),
              s("li", null, "nav 3"),
              s("li", null, "nav 4")
            ], -1))
          ])
        ])) : g("", !0),
        e.$slots.aside ? (d(), u("aside", Ue, [
          c(e.$slots, "aside", {}, () => [
            t[3] || (t[3] = $("this is aside content"))
          ])
        ])) : g("", !0)
      ], 2),
      t[4] || (t[4] = s("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    s("div", {
      id: "scrollbody",
      class: f([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: f([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", Be, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), u("footer", We, [
          c(e.$slots, "footer", {}, () => [
            s("div", Re, [
              t[5] || (t[5] = Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + b((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : g("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const cn = /* @__PURE__ */ I(Pe, [["render", Ve]]), ze = {
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
}, Je = { class: "w-100" }, He = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Ke = { class: "container-xl" }, Ge = { class: "axdd-topbar-brand" }, Qe = { class: "container-xl axdd-topbar-logo" }, Ye = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Xe = ["href"], Ze = { class: "container-xl" }, et = { class: "row" }, tt = { role: "navigation" }, nt = { key: 0 }, st = { class: "col" }, it = {
  key: 0,
  class: "my-3"
}, ot = { class: "w-100" }, lt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, at = { class: "container-xl" }, rt = { class: "text-white font-weight-light py-3" };
function dt(e, t, n, o, l, i) {
  return d(), u("div", {
    class: f([n.topbarClass + [n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", Je, [
      e.$slots.profile ? (d(), u("div", He, [
        s("div", Ke, [
          c(e.$slots, "profile", {}, () => [
            t[0] || (t[0] = $("Welcome!"))
          ])
        ])
      ])) : g("", !0),
      s("div", Ge, [
        s("div", Qe, [
          e.$slots.navigation ? (d(), u("a", Ye, t[1] || (t[1] = [
            s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ]))) : g("", !0),
          s("div", {
            class: f(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: n.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, b(n.appName), 9, Xe)
          ], 2)
        ])
      ])
    ]),
    s("div", {
      class: f([n.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      s("div", Ze, [
        s("div", et, [
          e.$slots.navigation || e.$slots.aside ? (d(), u("div", {
            key: 0,
            class: "",
            style: H(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: f([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", tt, [
                c(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (d(), u("aside", nt, [
                c(e.$slots, "aside", {}, () => [
                  t[2] || (t[2] = $("this is aside content"))
                ])
              ])) : g("", !0)
            ], 2)
          ], 4)) : g("", !0),
          s("div", st, [
            e.$slots.bar ? (d(), u("div", it, [
              c(e.$slots, "bar")
            ])) : g("", !0),
            s("main", null, [
              c(e.$slots, "main", {}, () => [
                t[3] || (t[3] = s("div", { style: { outline: "dashed 1px lightgray" } }, [
                  s("h1", null, "Hello world..."),
                  s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
                ], -1))
              ])
            ])
          ])
        ])
      ])
    ], 2),
    s("footer", ot, [
      e.$slots.footer ? (d(), u("div", lt, [
        s("div", at, [
          c(e.$slots, "footer", {}, () => [
            s("div", rt, [
              t[4] || (t[4] = Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + b((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : g("", !0)
    ])
  ], 2);
}
const fn = /* @__PURE__ */ I(ze, [["render", dt]]), ut = {
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
}, ct = {
  key: 0,
  class: "d-flex"
}, ft = { class: "flex-fill dropdown" }, mt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, pt = { class: "me-1" }, ht = { class: "text-decoration-underline" }, bt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, gt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, vt = {
  key: 0,
  class: "small text-danger"
}, yt = { class: "small" }, wt = { class: "small" }, _t = ["href"], xt = ["href"], St = {
  key: 1,
  class: "d-flex"
}, kt = {
  key: 0,
  class: "flex-fill text-white"
}, $t = { class: "me-1" }, Nt = {
  key: 1,
  class: "flex-fill text-white"
}, Ct = { class: "flex-fill text-end" }, Mt = ["href"];
function Ot(e, t, n, o, l, i) {
  return n.variant === "flyout" ? (d(), u("div", ct, [
    s("div", ft, [
      n.userOverride ? (d(), u("a", mt, [
        s("span", pt, b(n.userNetid), 1),
        t[0] || (t[0] = s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        s("span", ht, b(n.userOverride), 1)
      ])) : (d(), u("a", bt, b(n.userNetid), 1)),
      s("div", gt, [
        n.userOverride ? (d(), u("p", vt, [
          t[1] || (t[1] = $(" overriding as ")),
          t[2] || (t[2] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          $(" " + b(n.userOverride), 1)
        ])) : g("", !0),
        s("p", yt, b(n.userOfficialName) + ", " + b(n.userPreferredName) + ", " + b(n.userPronouns), 1),
        s("p", wt, [
          s("a", { href: n.profileUrl }, "go to profile", 8, _t)
        ]),
        s("div", null, [
          n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: n.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, xt)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = s("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (d(), u("div", St, [
    n.userOverride ? (d(), u("div", kt, [
      s("span", $t, b(n.userNetid), 1),
      t[4] || (t[4] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      $(" " + b(n.userOverride), 1)
    ])) : (d(), u("div", Nt, b(n.userNetid), 1)),
    s("div", Ct, [
      n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: n.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Mt)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = s("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const mn = /* @__PURE__ */ I(ut, [["render", Ot]]);
function ne(e) {
  return he() ? (be(e), !0) : !1;
}
function R(e) {
  return typeof e == "function" ? e() : pe(e);
}
const Tt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qt = Object.prototype.toString, It = (e) => qt.call(e) === "[object Object]", se = () => {
};
function Pt(e, t) {
  function n(...o) {
    return new Promise((l, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(i);
    });
  }
  return n;
}
const ie = (e) => e();
function At(e = ie) {
  const t = L(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const l = (...i) => {
    t.value && e(...i);
  };
  return { isActive: X(t), pause: n, resume: o, eventFilter: l };
}
function Et(e) {
  return te();
}
function Lt(...e) {
  if (e.length !== 1)
    return fe(...e);
  const t = e[0];
  return typeof t == "function" ? X(me(() => ({ get: t, set: se }))) : L(t);
}
function Ft(e, t, n = {}) {
  const {
    eventFilter: o = ie,
    ...l
  } = n;
  return K(
    e,
    Pt(
      o,
      t
    ),
    l
  );
}
function jt(e, t, n = {}) {
  const {
    eventFilter: o,
    ...l
  } = n, { eventFilter: i, pause: r, resume: x, isActive: N } = At(o);
  return { stop: Ft(
    e,
    t,
    {
      ...l,
      eventFilter: i
    }
  ), pause: r, resume: x, isActive: N };
}
function oe(e, t = !0, n) {
  Et() ? Z(e, n) : t ? e() : ee(e);
}
function le(e) {
  var t;
  const n = R(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const E = Tt ? window : void 0;
function G(...e) {
  let t, n, o, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, l] = e, t = E) : [t, n, o, l] = e, !t)
    return se;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], r = () => {
    i.forEach((v) => v()), i.length = 0;
  }, x = (v, m, M, _) => (v.addEventListener(m, M, _), () => v.removeEventListener(m, M, _)), N = K(
    () => [le(t), R(l)],
    ([v, m]) => {
      if (r(), !v)
        return;
      const M = It(m) ? { ...m } : m;
      i.push(
        ...n.flatMap((_) => o.map((S) => x(v, _, S, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), w = () => {
    N(), r();
  };
  return ne(w), w;
}
function Dt() {
  const e = L(!1), t = te();
  return t && Z(() => {
    e.value = !0;
  }, t), e;
}
function Ut(e) {
  const t = Dt();
  return W(() => (t.value, !!e()));
}
function Bt(e, t = {}) {
  const { window: n = E } = t, o = Ut(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let l;
  const i = L(!1), r = (w) => {
    i.value = w.matches;
  }, x = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", r) : l.removeListener(r));
  }, N = ve(() => {
    o.value && (x(), l = n.matchMedia(R(e)), "addEventListener" in l ? l.addEventListener("change", r) : l.addListener(r), i.value = l.matches);
  });
  return ne(() => {
    N(), x(), l = void 0;
  }), i;
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = "__vueuse_ssr_handlers__", Wt = /* @__PURE__ */ Rt();
function Rt() {
  return B in U || (U[B] = U[B] || {}), U[B];
}
function ae(e, t) {
  return Wt[e] || t;
}
function Vt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const zt = {
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
function Jt(e, t, n, o = {}) {
  var l;
  const {
    flush: i = "pre",
    deep: r = !0,
    listenToStorageChanges: x = !0,
    writeDefaults: N = !0,
    mergeDefaults: w = !1,
    shallow: v,
    window: m = E,
    eventFilter: M,
    onError: _ = (a) => {
      console.error(a);
    },
    initOnMounted: S
  } = o, y = (v ? ge : L)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = ae("getDefaultStorage", () => {
        var a;
        return (a = E) == null ? void 0 : a.localStorage;
      })();
    } catch (a) {
      _(a);
    }
  if (!n)
    return y;
  const C = R(t), A = Vt(C), O = (l = o.serializer) != null ? l : zt[A], { pause: F, resume: p } = jt(
    y,
    () => j(y.value),
    { flush: i, deep: r, eventFilter: M }
  );
  m && x && oe(() => {
    G(m, "storage", k), G(m, Q, D), S && k();
  }), S || k();
  function T(a, h) {
    m && m.dispatchEvent(new CustomEvent(Q, {
      detail: {
        key: e,
        oldValue: a,
        newValue: h,
        storageArea: n
      }
    }));
  }
  function j(a) {
    try {
      const h = n.getItem(e);
      if (a == null)
        T(h, null), n.removeItem(e);
      else {
        const q = O.write(a);
        h !== q && (n.setItem(e, q), T(h, q));
      }
    } catch (h) {
      _(h);
    }
  }
  function P(a) {
    const h = a ? a.newValue : n.getItem(e);
    if (h == null)
      return N && C != null && n.setItem(e, O.write(C)), C;
    if (!a && w) {
      const q = O.read(h);
      return typeof w == "function" ? w(q, C) : A === "object" && !Array.isArray(q) ? { ...C, ...q } : q;
    } else return typeof h != "string" ? h : O.read(h);
  }
  function k(a) {
    if (!(a && a.storageArea !== n)) {
      if (a && a.key == null) {
        y.value = C;
        return;
      }
      if (!(a && a.key !== e)) {
        F();
        try {
          (a == null ? void 0 : a.newValue) !== O.write(y.value) && (y.value = P(a));
        } catch (h) {
          _(h);
        } finally {
          a ? ee(p) : p();
        }
      }
    }
  }
  function D(a) {
    k(a.detail);
  }
  return y;
}
function Ht(e) {
  return Bt("(prefers-color-scheme: dark)", e);
}
function Kt(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: o = "auto",
    window: l = E,
    storage: i,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: x = !0,
    storageRef: N,
    emitAuto: w,
    disableTransition: v = !0
  } = e, m = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = Ht({ window: l }), _ = W(() => M.value ? "dark" : "light"), S = N || (r == null ? Lt(o) : Jt(r, o, i, { window: l, listenToStorageChanges: x })), y = W(() => S.value === "auto" ? _.value : S.value), C = ae(
    "updateHTMLAttrs",
    (p, T, j) => {
      const P = typeof p == "string" ? l == null ? void 0 : l.document.querySelector(p) : le(p);
      if (!P)
        return;
      let k;
      if (v && (k = l.document.createElement("style"), k.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), l.document.head.appendChild(k)), T === "class") {
        const D = j.split(/\s/g);
        Object.values(m).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
          D.includes(a) ? P.classList.add(a) : P.classList.remove(a);
        });
      } else
        P.setAttribute(T, j);
      v && (l.getComputedStyle(k).opacity, document.head.removeChild(k));
    }
  );
  function A(p) {
    var T;
    C(t, n, (T = m[p]) != null ? T : p);
  }
  function O(p) {
    e.onChanged ? e.onChanged(p, A) : A(p);
  }
  K(y, O, { flush: "post", immediate: !0 }), oe(() => O(y.value));
  const F = W({
    get() {
      return w ? S.value : y.value;
    },
    set(p) {
      S.value = p;
    }
  });
  try {
    return Object.assign(F, { store: S, system: _, state: y });
  } catch {
    return F;
  }
}
const Gt = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: Kt({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, Qt = { class: "d-flex align-items-center" }, Yt = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, Xt = { class: "bi bi-brightness-high-fill" }, Zt = { class: "bi bi-moon-stars-fill" }, en = { class: "bi bi-circle-half" }, tn = { class: "dropdown-menu p-1" }, nn = { class: "mb-1" }, sn = { class: "mb-1" };
function on(e, t, n, o, l, i) {
  return d(), u("div", Qt, [
    s("div", null, [
      s("button", Yt, [
        V(s("i", Xt, null, 512), [
          [z, o.colorMode == "light"]
        ]),
        V(s("i", Zt, null, 512), [
          [z, o.colorMode == "dark"]
        ]),
        V(s("i", en, null, 512), [
          [z, o.colorMode == "auto"]
        ])
      ]),
      s("ul", tn, [
        s("li", nn, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[0] || (t[0] = (r) => o.colorMode = "light")
          }, t[3] || (t[3] = [
            s("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            $(" Light")
          ]), 2)
        ]),
        s("li", sn, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[1] || (t[1] = (r) => o.colorMode = "dark")
          }, t[4] || (t[4] = [
            s("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            $(" Dark")
          ]), 2)
        ]),
        s("li", null, [
          s("a", {
            class: f(["dropdown-item rounded", o.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[2] || (t[2] = (r) => o.colorMode = "auto")
          }, t[5] || (t[5] = [
            s("i", { class: "bi bi-circle-half" }, null, -1),
            $(" Auto")
          ]), 2)
        ])
      ])
    ])
  ]);
}
const pn = /* @__PURE__ */ I(Gt, [["render", on]]);
export {
  pn as SColorMode,
  mn as SProfile,
  cn as SSidebar,
  rn as STabsDisplay,
  dn as STabsItem,
  an as STabsList,
  un as STabsPanel,
  fn as STopbar
};
