import { createElementBlock as r, createCommentVNode as f, openBlock as d, renderSlot as c, createElementVNode as s, withKeys as J, normalizeClass as m, withModifiers as re, resolveComponent as de, normalizeStyle as H, createVNode as ue, withCtx as ce, createTextVNode as w, toDisplayString as h, createStaticVNode as Y, toRef as fe, readonly as X, ref as L, customRef as me, onMounted as Z, nextTick as ee, unref as pe, getCurrentInstance as te, getCurrentScope as ge, onScopeDispose as be, watch as K, computed as W, shallowRef as he, watchEffect as ve, withDirectives as V, vShow as z } from "vue";
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
  return n.variant == "underline" ? (d(), r("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, we)) : n.variant == "pills" ? (d(), r("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, _e)) : f("", !0);
}
const dn = /* @__PURE__ */ I(ye, [["render", xe]]), Se = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ke = ["id"];
function $e(e, t, n, o, l, i) {
  return d(), r("div", {
    class: "tab-content",
    id: n.tabsId + "Content"
  }, [
    c(e.$slots, "default")
  ], 8, ke);
}
const un = /* @__PURE__ */ I(Se, [["render", $e]]), Ne = {
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
  return d(), r("li", Ce, [
    s("a", {
      class: m(["nav-link", i.classObject]),
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
        t[0] || (t[0] = J((...u) => i.moveNext && i.moveNext(...u), ["right"])),
        t[1] || (t[1] = J((...u) => i.movePrev && i.movePrev(...u), ["left"]))
      ],
      onClick: t[2] || (t[2] = (...u) => i.onClick && i.onClick(...u))
    }, [
      c(e.$slots, "default")
    ], 42, Me)
  ]);
}
const cn = /* @__PURE__ */ I(Ne, [["render", Oe]]), Te = {
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
  return d(), r("div", {
    class: m(["tab-pane fade", { "show active": n.activePanel }]),
    id: n.panelId,
    role: "tabpanel",
    "aria-labelledby": n.panelId + "-tab",
    tabindex: "0",
    onKeydown: t[0] || (t[0] = J(re((...u) => i.setFocus && i.setFocus(...u), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, qe);
}
const fn = /* @__PURE__ */ I(Te, [["render", Ie]]), Pe = {
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
  const u = de("router-link");
  return d(), r("div", {
    class: m([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: H([n.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: m([n.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: H([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (d(), r("div", Ae, [
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
        ])) : f("", !0),
        s("div", {
          class: m([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), r("a", je, t[1] || (t[1] = [
            s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ]))) : f("", !0),
          s("div", {
            class: m(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ue(u, {
              to: n.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: ce(() => [
                w(h(n.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      s("div", {
        id: "sidebar-nav-collapse",
        class: m(["px-3 flex-fill", [
          i.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (d(), r("nav", De, [
          c(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = s("ul", { class: "text-white" }, [
              s("li", null, "nav 1"),
              s("li", null, "nav 2"),
              s("li", null, "nav 3"),
              s("li", null, "nav 4")
            ], -1))
          ])
        ])) : f("", !0),
        e.$slots.aside ? (d(), r("aside", Ue, [
          c(e.$slots, "aside", {}, () => [
            t[3] || (t[3] = w("this is aside content"))
          ])
        ])) : f("", !0)
      ], 2),
      t[4] || (t[4] = s("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    s("div", {
      id: "scrollbody",
      class: m([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: m([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", Be, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), r("footer", We, [
          c(e.$slots, "footer", {}, () => [
            s("div", Re, [
              t[5] || (t[5] = Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + h((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const mn = /* @__PURE__ */ I(Pe, [["render", Ve]]), ze = {
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
      default: "bg-spirit-purple"
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
}, Je = {
  key: 0,
  class: "w-100"
}, He = { class: "w-100" }, Ke = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Ge = { class: "container-xl" }, Qe = { class: "axdd-topbar-brand" }, Ye = { class: "container-xl axdd-topbar-logo" }, Xe = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ze = ["href"], et = { class: "container-xl" }, tt = { class: "row" }, nt = {
  key: 0,
  role: "navigation"
}, st = { key: 1 }, it = { class: "col-xl" }, ot = { key: 0 }, lt = {
  key: 1,
  class: "col-sm col-xl-3"
}, at = { class: "w-100" }, rt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, dt = { class: "container-xl" }, ut = { class: "text-white font-weight-light py-3" };
function ct(e, t, n, o, l, i) {
  return d(), r("div", {
    class: m([n.topbarClass + [n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    e.$slots.system ? (d(), r("div", Je, [
      c(e.$slots, "system", {}, () => [
        t[0] || (t[0] = w("System messages"))
      ])
    ])) : f("", !0),
    s("header", He, [
      e.$slots.profile ? (d(), r("div", Ke, [
        s("div", Ge, [
          c(e.$slots, "profile", {}, () => [
            t[1] || (t[1] = w("Welcome!"))
          ])
        ])
      ])) : f("", !0),
      s("div", Qe, [
        s("div", Ye, [
          e.$slots.navigation ? (d(), r("a", Xe, t[2] || (t[2] = [
            s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ]))) : f("", !0),
          s("div", {
            class: m(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: n.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, h(n.appName), 9, Ze)
          ], 2)
        ])
      ])
    ]),
    s("div", {
      class: m([n.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      s("div", et, [
        s("div", tt, [
          e.$slots.navigation ? (d(), r("div", {
            key: 0,
            style: H(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: m([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              e.$slots.navigation ? (d(), r("nav", nt, [
                c(e.$slots, "navigation")
              ])) : f("", !0),
              e.$slots.navigation && e.$slots.aside ? (d(), r("aside", st, [
                c(e.$slots, "aside", {}, () => [
                  t[3] || (t[3] = w("Aside content"))
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          s("main", it, [
            e.$slots.bar ? (d(), r("div", ot, [
              c(e.$slots, "bar")
            ])) : f("", !0),
            c(e.$slots, "main", {}, () => [
              t[4] || (t[4] = s("div", { style: { outline: "dashed 1px lightgray" } }, [
                s("h1", null, "Hello world..."),
                s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
              ], -1))
            ])
          ]),
          !e.$slots.navigation && e.$slots.aside ? (d(), r("aside", lt, [
            c(e.$slots, "aside", {}, () => [
              t[5] || (t[5] = w("Aside content"))
            ])
          ])) : f("", !0)
        ])
      ])
    ], 2),
    s("footer", at, [
      e.$slots.footer ? (d(), r("div", rt, [
        s("div", dt, [
          c(e.$slots, "footer", {}, () => [
            s("div", ut, [
              t[6] || (t[6] = Y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + h((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const pn = /* @__PURE__ */ I(ze, [["render", ct]]), ft = {
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
}, mt = {
  key: 0,
  class: "d-flex"
}, pt = { class: "flex-fill dropdown" }, gt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, bt = { class: "me-1" }, ht = { class: "text-decoration-underline" }, vt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, yt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, wt = {
  key: 0,
  class: "small text-danger"
}, _t = { class: "small" }, xt = { class: "small" }, St = ["href"], kt = ["href"], $t = {
  key: 1,
  class: "d-flex"
}, Nt = {
  key: 0,
  class: "flex-fill text-white"
}, Ct = { class: "me-1" }, Mt = {
  key: 1,
  class: "flex-fill text-white"
}, Ot = { class: "flex-fill text-end" }, Tt = ["href"];
function qt(e, t, n, o, l, i) {
  return n.variant === "flyout" ? (d(), r("div", mt, [
    s("div", pt, [
      n.userOverride ? (d(), r("a", gt, [
        s("span", bt, h(n.userNetid), 1),
        t[0] || (t[0] = s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        s("span", ht, h(n.userOverride), 1)
      ])) : (d(), r("a", vt, h(n.userNetid), 1)),
      s("div", yt, [
        n.userOverride ? (d(), r("p", wt, [
          t[1] || (t[1] = w(" overriding as ")),
          t[2] || (t[2] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          w(" " + h(n.userOverride), 1)
        ])) : f("", !0),
        s("p", _t, h(n.userOfficialName) + ", " + h(n.userPreferredName) + ", " + h(n.userPronouns), 1),
        s("p", xt, [
          s("a", { href: n.profileUrl }, "go to profile", 8, St)
        ]),
        s("div", null, [
          n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: n.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, kt)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = s("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (d(), r("div", $t, [
    n.userOverride ? (d(), r("div", Nt, [
      s("span", Ct, h(n.userNetid), 1),
      t[4] || (t[4] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      w(" " + h(n.userOverride), 1)
    ])) : (d(), r("div", Mt, h(n.userNetid), 1)),
    s("div", Ot, [
      n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: n.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Tt)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = s("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const gn = /* @__PURE__ */ I(ft, [["render", qt]]);
function ne(e) {
  return ge() ? (be(e), !0) : !1;
}
function R(e) {
  return typeof e == "function" ? e() : pe(e);
}
const It = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Pt = Object.prototype.toString, At = (e) => Pt.call(e) === "[object Object]", se = () => {
};
function Et(e, t) {
  function n(...o) {
    return new Promise((l, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(i);
    });
  }
  return n;
}
const ie = (e) => e();
function Lt(e = ie) {
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
function Ft(e) {
  return te();
}
function jt(...e) {
  if (e.length !== 1)
    return fe(...e);
  const t = e[0];
  return typeof t == "function" ? X(me(() => ({ get: t, set: se }))) : L(t);
}
function Dt(e, t, n = {}) {
  const {
    eventFilter: o = ie,
    ...l
  } = n;
  return K(
    e,
    Et(
      o,
      t
    ),
    l
  );
}
function Ut(e, t, n = {}) {
  const {
    eventFilter: o,
    ...l
  } = n, { eventFilter: i, pause: u, resume: S, isActive: N } = Lt(o);
  return { stop: Dt(
    e,
    t,
    {
      ...l,
      eventFilter: i
    }
  ), pause: u, resume: S, isActive: N };
}
function oe(e, t = !0, n) {
  Ft() ? Z(e, n) : t ? e() : ee(e);
}
function le(e) {
  var t;
  const n = R(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const E = It ? window : void 0;
function G(...e) {
  let t, n, o, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, l] = e, t = E) : [t, n, o, l] = e, !t)
    return se;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], u = () => {
    i.forEach((v) => v()), i.length = 0;
  }, S = (v, p, M, x) => (v.addEventListener(p, M, x), () => v.removeEventListener(p, M, x)), N = K(
    () => [le(t), R(l)],
    ([v, p]) => {
      if (u(), !v)
        return;
      const M = At(p) ? { ...p } : p;
      i.push(
        ...n.flatMap((x) => o.map((k) => S(v, x, k, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), _ = () => {
    N(), u();
  };
  return ne(_), _;
}
function Bt() {
  const e = L(!1), t = te();
  return t && Z(() => {
    e.value = !0;
  }, t), e;
}
function Wt(e) {
  const t = Bt();
  return W(() => (t.value, !!e()));
}
function Rt(e, t = {}) {
  const { window: n = E } = t, o = Wt(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let l;
  const i = L(!1), u = (_) => {
    i.value = _.matches;
  }, S = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", u) : l.removeListener(u));
  }, N = ve(() => {
    o.value && (S(), l = n.matchMedia(R(e)), "addEventListener" in l ? l.addEventListener("change", u) : l.addListener(u), i.value = l.matches);
  });
  return ne(() => {
    N(), S(), l = void 0;
  }), i;
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = "__vueuse_ssr_handlers__", Vt = /* @__PURE__ */ zt();
function zt() {
  return B in U || (U[B] = U[B] || {}), U[B];
}
function ae(e, t) {
  return Vt[e] || t;
}
function Jt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ht = {
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
function Kt(e, t, n, o = {}) {
  var l;
  const {
    flush: i = "pre",
    deep: u = !0,
    listenToStorageChanges: S = !0,
    writeDefaults: N = !0,
    mergeDefaults: _ = !1,
    shallow: v,
    window: p = E,
    eventFilter: M,
    onError: x = (a) => {
      console.error(a);
    },
    initOnMounted: k
  } = o, y = (v ? he : L)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = ae("getDefaultStorage", () => {
        var a;
        return (a = E) == null ? void 0 : a.localStorage;
      })();
    } catch (a) {
      x(a);
    }
  if (!n)
    return y;
  const C = R(t), A = Jt(C), O = (l = o.serializer) != null ? l : Ht[A], { pause: F, resume: g } = Ut(
    y,
    () => j(y.value),
    { flush: i, deep: u, eventFilter: M }
  );
  p && S && oe(() => {
    G(p, "storage", $), G(p, Q, D), k && $();
  }), k || $();
  function T(a, b) {
    p && p.dispatchEvent(new CustomEvent(Q, {
      detail: {
        key: e,
        oldValue: a,
        newValue: b,
        storageArea: n
      }
    }));
  }
  function j(a) {
    try {
      const b = n.getItem(e);
      if (a == null)
        T(b, null), n.removeItem(e);
      else {
        const q = O.write(a);
        b !== q && (n.setItem(e, q), T(b, q));
      }
    } catch (b) {
      x(b);
    }
  }
  function P(a) {
    const b = a ? a.newValue : n.getItem(e);
    if (b == null)
      return N && C != null && n.setItem(e, O.write(C)), C;
    if (!a && _) {
      const q = O.read(b);
      return typeof _ == "function" ? _(q, C) : A === "object" && !Array.isArray(q) ? { ...C, ...q } : q;
    } else return typeof b != "string" ? b : O.read(b);
  }
  function $(a) {
    if (!(a && a.storageArea !== n)) {
      if (a && a.key == null) {
        y.value = C;
        return;
      }
      if (!(a && a.key !== e)) {
        F();
        try {
          (a == null ? void 0 : a.newValue) !== O.write(y.value) && (y.value = P(a));
        } catch (b) {
          x(b);
        } finally {
          a ? ee(g) : g();
        }
      }
    }
  }
  function D(a) {
    $(a.detail);
  }
  return y;
}
function Gt(e) {
  return Rt("(prefers-color-scheme: dark)", e);
}
function Qt(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: o = "auto",
    window: l = E,
    storage: i,
    storageKey: u = "vueuse-color-scheme",
    listenToStorageChanges: S = !0,
    storageRef: N,
    emitAuto: _,
    disableTransition: v = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = Gt({ window: l }), x = W(() => M.value ? "dark" : "light"), k = N || (u == null ? jt(o) : Kt(u, o, i, { window: l, listenToStorageChanges: S })), y = W(() => k.value === "auto" ? x.value : k.value), C = ae(
    "updateHTMLAttrs",
    (g, T, j) => {
      const P = typeof g == "string" ? l == null ? void 0 : l.document.querySelector(g) : le(g);
      if (!P)
        return;
      let $;
      if (v && ($ = l.document.createElement("style"), $.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), l.document.head.appendChild($)), T === "class") {
        const D = j.split(/\s/g);
        Object.values(p).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
          D.includes(a) ? P.classList.add(a) : P.classList.remove(a);
        });
      } else
        P.setAttribute(T, j);
      v && (l.getComputedStyle($).opacity, document.head.removeChild($));
    }
  );
  function A(g) {
    var T;
    C(t, n, (T = p[g]) != null ? T : g);
  }
  function O(g) {
    e.onChanged ? e.onChanged(g, A) : A(g);
  }
  K(y, O, { flush: "post", immediate: !0 }), oe(() => O(y.value));
  const F = W({
    get() {
      return _ ? k.value : y.value;
    },
    set(g) {
      k.value = g;
    }
  });
  try {
    return Object.assign(F, { store: k, system: x, state: y });
  } catch {
    return F;
  }
}
const Yt = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: Qt({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, Xt = { class: "d-flex align-items-center" }, Zt = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, en = { class: "bi bi-brightness-high-fill" }, tn = { class: "bi bi-moon-stars-fill" }, nn = { class: "bi bi-circle-half" }, sn = { class: "dropdown-menu p-1" }, on = { class: "mb-1" }, ln = { class: "mb-1" };
function an(e, t, n, o, l, i) {
  return d(), r("div", Xt, [
    s("div", null, [
      s("button", Zt, [
        V(s("i", en, null, 512), [
          [z, o.colorMode == "light"]
        ]),
        V(s("i", tn, null, 512), [
          [z, o.colorMode == "dark"]
        ]),
        V(s("i", nn, null, 512), [
          [z, o.colorMode == "auto"]
        ])
      ]),
      s("ul", sn, [
        s("li", on, [
          s("a", {
            class: m(["dropdown-item rounded", o.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[0] || (t[0] = (u) => o.colorMode = "light")
          }, t[3] || (t[3] = [
            s("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            w(" Light")
          ]), 2)
        ]),
        s("li", ln, [
          s("a", {
            class: m(["dropdown-item rounded", o.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[1] || (t[1] = (u) => o.colorMode = "dark")
          }, t[4] || (t[4] = [
            s("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            w(" Dark")
          ]), 2)
        ]),
        s("li", null, [
          s("a", {
            class: m(["dropdown-item rounded", o.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[2] || (t[2] = (u) => o.colorMode = "auto")
          }, t[5] || (t[5] = [
            s("i", { class: "bi bi-circle-half" }, null, -1),
            w(" Auto")
          ]), 2)
        ])
      ])
    ])
  ]);
}
const bn = /* @__PURE__ */ I(Yt, [["render", an]]);
export {
  bn as SColorMode,
  gn as SProfile,
  mn as SSidebar,
  un as STabsDisplay,
  cn as STabsItem,
  dn as STabsList,
  fn as STabsPanel,
  pn as STopbar
};
