import { openBlock as d, createElementBlock as c, renderSlot as u, normalizeClass as f, createCommentVNode as v, withKeys as q, withModifiers as ue, resolveComponent as Y, normalizeStyle as J, createElementVNode as s, createVNode as X, withCtx as Z, createTextVNode as x, toDisplayString as g, createStaticVNode as ee, toRef as fe, readonly as te, customRef as he, ref as L, onMounted as ne, nextTick as se, unref as me, getCurrentInstance as ie, getCurrentScope as be, onScopeDispose as ge, watch as H, computed as R, shallowRef as ve, watchEffect as pe, withDirectives as z, vShow as K } from "vue";
const P = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of n)
    t[a] = o;
  return t;
}, ye = {
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
}, _e = ["id"], we = ["id"];
function xe(e, n, t, a, o, i) {
  return t.variant == "lines" ? (d(), c("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "items")
  ], 8, _e)) : t.variant == "pills" ? (d(), c("ul", {
    key: 1,
    class: f(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "items")
  ], 10, we)) : v("", !0);
}
const Cn = /* @__PURE__ */ P(ye, [["render", xe]]), Se = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ke = ["id"];
function Ne(e, n, t, a, o, i) {
  return d(), c("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    u(e.$slots, "panels")
  ], 8, ke);
}
const $n = /* @__PURE__ */ P(Se, [["render", Ne]]), Ce = {
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
}, $e = {
  class: "nav-item",
  role: "presentation"
}, Me = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Te = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Oe = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ie(e, n, t, a, o, i) {
  return d(), c("li", $e, [
    t.variant == "lines" ? (d(), c("button", {
      key: 0,
      class: f(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[0] || (n[0] = q((...l) => i.moveNext && i.moveNext(...l), ["right"])),
        n[1] || (n[1] = q((...l) => i.movePrev && i.movePrev(...l), ["left"]))
      ],
      onClick: n[2] || (n[2] = (...l) => i.onClick && i.onClick(...l))
    }, [
      u(e.$slots, "default")
    ], 42, Me)) : t.variant == "pills" ? (d(), c("button", {
      key: 1,
      class: f(["nav-pills-link rounded-3 px-3 py-2", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[3] || (n[3] = q((...l) => i.moveNext && i.moveNext(...l), ["right"])),
        n[4] || (n[4] = q((...l) => i.movePrev && i.movePrev(...l), ["left"]))
      ],
      onClick: n[5] || (n[5] = (...l) => i.onClick && i.onClick(...l))
    }, [
      u(e.$slots, "default")
    ], 42, Te)) : (d(), c("button", {
      key: 2,
      class: f(["nav-link", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        n[6] || (n[6] = q((...l) => i.moveNext && i.moveNext(...l), ["right"])),
        n[7] || (n[7] = q((...l) => i.movePrev && i.movePrev(...l), ["left"]))
      ],
      onClick: n[8] || (n[8] = (...l) => i.onClick && i.onClick(...l))
    }, [
      u(e.$slots, "default")
    ], 42, Oe))
  ]);
}
const Mn = /* @__PURE__ */ P(Ce, [["render", Ie]]), Pe = {
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
function Ae(e, n, t, a, o, i) {
  return d(), c("div", {
    class: f(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: n[0] || (n[0] = q(ue((...l) => i.setFocus && i.setFocus(...l), ["shift", "prevent"]), ["tab"]))
  }, [
    u(e.$slots, "default")
  ], 42, qe);
}
const Tn = /* @__PURE__ */ P(Pe, [["render", Ae]]), Ee = {
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
}, je = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Le = { class: "d-flex" }, Fe = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), De = { class: "flex-fill text-end" }, Ue = ["href"], Be = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, We = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), Re = [
  We
], Ve = {
  key: 0,
  role: "navigation"
}, ze = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), Ke = {
  key: 1,
  class: "mb-3 text-light"
}, Je = /* @__PURE__ */ s("div", { class: "sol-sidebar-logo" }, " ", -1), He = { class: "flex-fill" }, Ge = { key: 0 }, Qe = { class: "font-weight-light py-3 small" }, Ye = /* @__PURE__ */ ee('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Xe(e, n, t, a, o, i) {
  const l = Y("router-link");
  return d(), c("div", {
    class: f([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: J([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: f([t.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: J([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (d(), c("div", je, [
          u(e.$slots, "profile", {}, () => [
            s("div", Le, [
              Fe,
              s("div", De, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Ue)
              ])
            ])
          ])
        ])) : v("", !0),
        s("div", {
          class: f([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), c("a", Be, Re)) : v("", !0),
          s("div", {
            class: f(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            X(l, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: Z(() => [
                x(g(t.appName), 1)
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
        e.$slots.navigation ? (d(), c("nav", Ve, [
          u(e.$slots, "navigation", {}, () => [
            ze
          ])
        ])) : v("", !0),
        e.$slots.aside ? (d(), c("aside", Ke, [
          u(e.$slots, "aside", {}, () => [
            x("this is aside content")
          ])
        ])) : v("", !0)
      ], 2),
      Je
    ], 6),
    s("div", {
      id: "scrollbody",
      class: f([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: f([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", He, [
          u(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), c("footer", Ge, [
          u(e.$slots, "footer", {}, () => [
            s("div", Qe, [
              Ye,
              s("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : v("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const On = /* @__PURE__ */ P(Ee, [["render", Xe]]), Ze = {
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
}, et = { class: "w-100" }, tt = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, nt = { class: "container-xl" }, st = { class: "axdd-topbar-brand" }, it = { class: "container-xl axdd-topbar-logo" }, at = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ot = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), lt = [
  ot
], rt = { class: "container-xl" }, dt = { class: "row" }, ct = { role: "navigation" }, ut = { key: 0 }, ft = { class: "col" }, ht = {
  key: 0,
  class: "my-3"
}, mt = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), bt = { class: "w-100" }, gt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, vt = { class: "container-xl" }, pt = { class: "text-white font-weight-light py-3" }, yt = /* @__PURE__ */ ee('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function _t(e, n, t, a, o, i) {
  const l = Y("router-link");
  return d(), c("div", {
    class: f([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", et, [
      e.$slots.profile ? (d(), c("div", tt, [
        s("div", nt, [
          u(e.$slots, "profile", {}, () => [
            x("Welcome!")
          ])
        ])
      ])) : v("", !0),
      s("div", st, [
        s("div", it, [
          e.$slots.navigation ? (d(), c("a", at, lt)) : v("", !0),
          s("div", {
            class: f(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            X(l, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, {
              default: Z(() => [
                x(g(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    s("div", {
      class: f([t.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      s("div", rt, [
        s("div", dt, [
          e.$slots.navigation || e.$slots.aside ? (d(), c("div", {
            key: 0,
            class: "",
            style: J(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: f([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", ct, [
                u(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (d(), c("aside", ut, [
                u(e.$slots, "aside", {}, () => [
                  x("this is aside content")
                ])
              ])) : v("", !0)
            ], 2)
          ], 4)) : v("", !0),
          s("div", ft, [
            e.$slots.bar ? (d(), c("div", ht, [
              u(e.$slots, "bar")
            ])) : v("", !0),
            s("main", null, [
              u(e.$slots, "main", {}, () => [
                mt
              ])
            ])
          ])
        ])
      ])
    ], 2),
    s("footer", bt, [
      e.$slots.footer ? (d(), c("div", gt, [
        s("div", vt, [
          u(e.$slots, "footer", {}, () => [
            s("div", pt, [
              yt,
              s("div", null, " Copyright © " + g((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : v("", !0)
    ])
  ], 2);
}
const In = /* @__PURE__ */ P(Ze, [["render", _t]]), wt = {
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
}, xt = {
  key: 0,
  class: "d-flex"
}, St = { class: "flex-fill dropdown" }, kt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Nt = { class: "me-1" }, Ct = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), $t = { class: "text-decoration-underline" }, Mt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Tt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Ot = {
  key: 0,
  class: "small text-danger"
}, It = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Pt = { class: "small" }, qt = { class: "small" }, At = ["href"], Et = ["href"], jt = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), Lt = {
  key: 1,
  class: "d-flex"
}, Ft = {
  key: 0,
  class: "flex-fill text-white"
}, Dt = { class: "me-1" }, Ut = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Bt = {
  key: 1,
  class: "flex-fill text-white"
}, Wt = { class: "flex-fill text-end" }, Rt = ["href"], Vt = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function zt(e, n, t, a, o, i) {
  return t.variant === "flyout" ? (d(), c("div", xt, [
    s("div", St, [
      t.userOverride ? (d(), c("a", kt, [
        s("span", Nt, g(t.userNetid), 1),
        Ct,
        s("span", $t, g(t.userOverride), 1)
      ])) : (d(), c("a", Mt, g(t.userNetid), 1)),
      s("div", Tt, [
        t.userOverride ? (d(), c("p", Ot, [
          x(" overriding as "),
          It,
          x(" " + g(t.userOverride), 1)
        ])) : v("", !0),
        s("p", Pt, g(t.userOfficialName) + ", " + g(t.userPreferredName) + ", " + g(t.userPronouns), 1),
        s("p", qt, [
          s("a", { href: t.profileUrl }, "go to profile", 8, At)
        ]),
        s("div", null, [
          t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Et)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            jt
          ])
        ])
      ])
    ])
  ])) : (d(), c("div", Lt, [
    t.userOverride ? (d(), c("div", Ft, [
      s("span", Dt, g(t.userNetid), 1),
      Ut,
      x(" " + g(t.userOverride), 1)
    ])) : (d(), c("div", Bt, g(t.userNetid), 1)),
    s("div", Wt, [
      t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Rt)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        Vt
      ])
    ])
  ]));
}
const Pn = /* @__PURE__ */ P(wt, [["render", zt]]);
function ae(e) {
  return be() ? (ge(e), !0) : !1;
}
function V(e) {
  return typeof e == "function" ? e() : me(e);
}
const Kt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jt = Object.prototype.toString, Ht = (e) => Jt.call(e) === "[object Object]", oe = () => {
};
function Gt(e, n) {
  function t(...a) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => n.apply(this, a), { fn: n, thisArg: this, args: a })).then(o).catch(i);
    });
  }
  return t;
}
const le = (e) => e();
function Qt(e = le) {
  const n = L(!0);
  function t() {
    n.value = !1;
  }
  function a() {
    n.value = !0;
  }
  const o = (...i) => {
    n.value && e(...i);
  };
  return { isActive: te(n), pause: t, resume: a, eventFilter: o };
}
function Yt(e) {
  return ie();
}
function Xt(...e) {
  if (e.length !== 1)
    return fe(...e);
  const n = e[0];
  return typeof n == "function" ? te(he(() => ({ get: n, set: oe }))) : L(n);
}
function Zt(e, n, t = {}) {
  const {
    eventFilter: a = le,
    ...o
  } = t;
  return H(
    e,
    Gt(
      a,
      n
    ),
    o
  );
}
function en(e, n, t = {}) {
  const {
    eventFilter: a,
    ...o
  } = t, { eventFilter: i, pause: l, resume: S, isActive: C } = Qt(a);
  return { stop: Zt(
    e,
    n,
    {
      ...o,
      eventFilter: i
    }
  ), pause: l, resume: S, isActive: C };
}
function re(e, n = !0, t) {
  Yt() ? ne(e, t) : n ? e() : se(e);
}
function de(e) {
  var n;
  const t = V(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const j = Kt ? window : void 0;
function G(...e) {
  let n, t, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, a, o] = e, n = j) : [n, t, a, o] = e, !n)
    return oe;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const i = [], l = () => {
    i.forEach((p) => p()), i.length = 0;
  }, S = (p, h, M, w) => (p.addEventListener(h, M, w), () => p.removeEventListener(h, M, w)), C = H(
    () => [de(n), V(o)],
    ([p, h]) => {
      if (l(), !p)
        return;
      const M = Ht(h) ? { ...h } : h;
      i.push(
        ...t.flatMap((w) => a.map((k) => S(p, w, k, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), _ = () => {
    C(), l();
  };
  return ae(_), _;
}
function tn() {
  const e = L(!1), n = ie();
  return n && ne(() => {
    e.value = !0;
  }, n), e;
}
function nn(e) {
  const n = tn();
  return R(() => (n.value, !!e()));
}
function sn(e, n = {}) {
  const { window: t = j } = n, a = nn(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const i = L(!1), l = (_) => {
    i.value = _.matches;
  }, S = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", l) : o.removeListener(l));
  }, C = pe(() => {
    a.value && (S(), o = t.matchMedia(V(e)), "addEventListener" in o ? o.addEventListener("change", l) : o.addListener(l), i.value = o.matches);
  });
  return ae(() => {
    C(), S(), o = void 0;
  }), i;
}
const B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__", an = /* @__PURE__ */ on();
function on() {
  return W in B || (B[W] = B[W] || {}), B[W];
}
function ce(e, n) {
  return an[e] || n;
}
function ln(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const rn = {
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
function dn(e, n, t, a = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: l = !0,
    listenToStorageChanges: S = !0,
    writeDefaults: C = !0,
    mergeDefaults: _ = !1,
    shallow: p,
    window: h = j,
    eventFilter: M,
    onError: w = (r) => {
      console.error(r);
    },
    initOnMounted: k
  } = a, y = (p ? ve : L)(typeof n == "function" ? n() : n);
  if (!t)
    try {
      t = ce("getDefaultStorage", () => {
        var r;
        return (r = j) == null ? void 0 : r.localStorage;
      })();
    } catch (r) {
      w(r);
    }
  if (!t)
    return y;
  const $ = V(n), E = ln($), T = (o = a.serializer) != null ? o : rn[E], { pause: F, resume: m } = en(
    y,
    () => D(y.value),
    { flush: i, deep: l, eventFilter: M }
  );
  h && S && re(() => {
    G(h, "storage", N), G(h, Q, U), k && N();
  }), k || N();
  function O(r, b) {
    h && h.dispatchEvent(new CustomEvent(Q, {
      detail: {
        key: e,
        oldValue: r,
        newValue: b,
        storageArea: t
      }
    }));
  }
  function D(r) {
    try {
      const b = t.getItem(e);
      if (r == null)
        O(b, null), t.removeItem(e);
      else {
        const I = T.write(r);
        b !== I && (t.setItem(e, I), O(b, I));
      }
    } catch (b) {
      w(b);
    }
  }
  function A(r) {
    const b = r ? r.newValue : t.getItem(e);
    if (b == null)
      return C && $ != null && t.setItem(e, T.write($)), $;
    if (!r && _) {
      const I = T.read(b);
      return typeof _ == "function" ? _(I, $) : E === "object" && !Array.isArray(I) ? { ...$, ...I } : I;
    } else return typeof b != "string" ? b : T.read(b);
  }
  function N(r) {
    if (!(r && r.storageArea !== t)) {
      if (r && r.key == null) {
        y.value = $;
        return;
      }
      if (!(r && r.key !== e)) {
        F();
        try {
          (r == null ? void 0 : r.newValue) !== T.write(y.value) && (y.value = A(r));
        } catch (b) {
          w(b);
        } finally {
          r ? se(m) : m();
        }
      }
    }
  }
  function U(r) {
    N(r.detail);
  }
  return y;
}
function cn(e) {
  return sn("(prefers-color-scheme: dark)", e);
}
function un(e = {}) {
  const {
    selector: n = "html",
    attribute: t = "class",
    initialValue: a = "auto",
    window: o = j,
    storage: i,
    storageKey: l = "vueuse-color-scheme",
    listenToStorageChanges: S = !0,
    storageRef: C,
    emitAuto: _,
    disableTransition: p = !0
  } = e, h = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = cn({ window: o }), w = R(() => M.value ? "dark" : "light"), k = C || (l == null ? Xt(a) : dn(l, a, i, { window: o, listenToStorageChanges: S })), y = R(() => k.value === "auto" ? w.value : k.value), $ = ce(
    "updateHTMLAttrs",
    (m, O, D) => {
      const A = typeof m == "string" ? o == null ? void 0 : o.document.querySelector(m) : de(m);
      if (!A)
        return;
      let N;
      if (p && (N = o.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(N)), O === "class") {
        const U = D.split(/\s/g);
        Object.values(h).flatMap((r) => (r || "").split(/\s/g)).filter(Boolean).forEach((r) => {
          U.includes(r) ? A.classList.add(r) : A.classList.remove(r);
        });
      } else
        A.setAttribute(O, D);
      p && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function E(m) {
    var O;
    $(n, t, (O = h[m]) != null ? O : m);
  }
  function T(m) {
    e.onChanged ? e.onChanged(m, E) : E(m);
  }
  H(y, T, { flush: "post", immediate: !0 }), re(() => T(y.value));
  const F = R({
    get() {
      return _ ? k.value : y.value;
    },
    set(m) {
      k.value = m;
    }
  });
  try {
    return Object.assign(F, { store: k, system: w, state: y });
  } catch {
    return F;
  }
}
const fn = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: un({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, hn = { class: "d-flex align-items-center" }, mn = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, bn = { class: "bi bi-brightness-high-fill" }, gn = { class: "bi bi-moon-stars-fill" }, vn = { class: "bi bi-circle-half" }, pn = { class: "dropdown-menu p-1" }, yn = { class: "mb-1" }, _n = /* @__PURE__ */ s("i", { class: "bi bi-brightness-high-fill" }, null, -1), wn = { class: "mb-1" }, xn = /* @__PURE__ */ s("i", { class: "bi bi-moon-stars-fill" }, null, -1), Sn = /* @__PURE__ */ s("i", { class: "bi bi-circle-half" }, null, -1);
function kn(e, n, t, a, o, i) {
  return d(), c("div", hn, [
    s("div", null, [
      s("button", mn, [
        z(s("i", bn, null, 512), [
          [K, a.colorMode == "light"]
        ]),
        z(s("i", gn, null, 512), [
          [K, a.colorMode == "dark"]
        ]),
        z(s("i", vn, null, 512), [
          [K, a.colorMode == "auto"]
        ])
      ]),
      s("ul", pn, [
        s("li", yn, [
          s("a", {
            class: f(["dropdown-item rounded", a.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[0] || (n[0] = (l) => a.colorMode = "light")
          }, [
            _n,
            x(" Light")
          ], 2)
        ]),
        s("li", wn, [
          s("a", {
            class: f(["dropdown-item rounded", a.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[1] || (n[1] = (l) => a.colorMode = "dark")
          }, [
            xn,
            x(" Dark")
          ], 2)
        ]),
        s("li", null, [
          s("a", {
            class: f(["dropdown-item rounded", a.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: n[2] || (n[2] = (l) => a.colorMode = "auto")
          }, [
            Sn,
            x(" Auto")
          ], 2)
        ])
      ])
    ])
  ]);
}
const qn = /* @__PURE__ */ P(fn, [["render", kn]]);
export {
  qn as SColorMode,
  Pn as SProfile,
  On as SSidebar,
  $n as STabsDisplay,
  Mn as STabsItem,
  Cn as STabsList,
  Tn as STabsPanel,
  In as STopbar
};
