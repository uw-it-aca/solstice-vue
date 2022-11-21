import { openBlock as n, createElementBlock as l, createElementVNode as s, toDisplayString as h, createTextVNode as v, createCommentVNode as r, renderSlot as d, normalizeClass as o, pushScopeId as p, popScopeId as x, createBlock as $, resolveDynamicComponent as k, withCtx as w, withKeys as f, withModifiers as I, normalizeStyle as g, createStaticVNode as y } from "vue";
const b = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [u, _] of a)
    t[u] = _;
  return t;
}, N = {
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
}, S = {
  key: 0,
  class: "d-flex"
}, q = { class: "flex-fill dropdown" }, P = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, T = { class: "me-1" }, C = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), O = { class: "text-decoration-underline" }, B = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, U = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, M = {
  key: 0,
  class: "small text-danger"
}, j = /* @__PURE__ */ v(" overriding as "), D = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), L = { class: "small" }, E = { class: "small" }, F = ["href"], K = ["href"], A = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), R = {
  key: 1,
  class: "d-flex"
}, V = {
  key: 0,
  class: "flex-fill text-white"
}, W = { class: "me-1" }, z = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), H = {
  key: 1,
  class: "flex-fill text-white"
}, Y = { class: "flex-fill text-end" }, G = ["href"], J = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function Q(e, a, t, u, _, i) {
  return t.variant === "flyout" ? (n(), l("div", S, [
    s("div", q, [
      t.userOverride ? (n(), l("a", P, [
        s("span", T, h(t.userNetid), 1),
        C,
        s("span", O, h(t.userOverride), 1)
      ])) : (n(), l("a", B, h(t.userNetid), 1)),
      s("div", U, [
        t.userOverride ? (n(), l("p", M, [
          j,
          D,
          v(" " + h(t.userOverride), 1)
        ])) : r("", !0),
        s("p", L, h(t.userOfficialName) + ", " + h(t.userPreferredName) + ", " + h(t.userPronouns), 1),
        s("p", E, [
          s("a", { href: t.profileUrl }, "go to profile", 8, F)
        ]),
        s("div", null, [
          t.signoutUrl ? d(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, K)
          ]) : d(e.$slots, "default", { key: 1 }, () => [
            A
          ])
        ])
      ])
    ])
  ])) : (n(), l("div", R, [
    t.userOverride ? (n(), l("div", V, [
      s("span", W, h(t.userNetid), 1),
      z,
      v(" " + h(t.userOverride), 1)
    ])) : (n(), l("div", H, h(t.userNetid), 1)),
    s("div", Y, [
      t.signoutUrl ? d(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, G)
      ]) : d(e.$slots, "default", { key: 1 }, () => [
        J
      ])
    ])
  ]));
}
const X = /* @__PURE__ */ b(N, [["render", Q]]);
const Z = {
  name: "axdd-disclosure-action",
  props: {
    disclosureId: {
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
}, ee = ["href", "aria-controls"], te = ["data-bs-target", "aria-controls"], se = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function ae(e, a, t, u, _, i) {
  return t.isLink ? (n(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    d(e.$slots, "default", {}, void 0, !0)
  ], 8, ee)) : (n(), l("button", {
    key: 1,
    class: o(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (n(), l("i", se)) : r("", !0),
    d(e.$slots, "default", {}, void 0, !0)
  ], 10, te));
}
const ie = /* @__PURE__ */ b(Z, [["render", ae], ["__scopeId", "data-v-fa03efea"]]), ne = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      type: [String, Number],
      required: !0
    }
  }
}, le = ["id"];
function de(e, a, t, u, _, i) {
  return n(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    d(e.$slots, "default")
  ], 8, le);
}
const oe = /* @__PURE__ */ b(ne, [["render", de]]);
const re = {
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
}, ce = (e) => (p("data-v-7e2919d6"), e = e(), x(), e), ue = { class: "rounded-3 p-3 mb-2" }, _e = { class: "d-flex" }, he = {
  class: "me-3",
  style: { width: "330px" }
}, be = ["data-bs-target", "aria-controls"], fe = /* @__PURE__ */ ce(() => /* @__PURE__ */ s("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), ve = ["id"], me = { class: "flex-fill" }, ge = ["id", "aria-labelledby"];
function ye(e, a, t, u, _, i) {
  return n(), l("div", ue, [
    s("div", _e, [
      s("div", he, [
        s("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          fe,
          s("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, h(t.blockTitle), 9, ve)
        ], 8, be)
      ]),
      s("div", me, [
        d(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    s("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      d(e.$slots, "body", {}, void 0, !0)
    ], 8, ge)
  ]);
}
const pe = /* @__PURE__ */ b(re, [["render", ye], ["__scopeId", "data-v-7e2919d6"]]), xe = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, $e = { class: "card border shadow-sm rounded-3 mb-4" }, ke = {
  key: 0,
  class: "card-header bg-white rounded-top p-3"
}, we = {
  key: 1,
  class: "card-header bg-white rounded-top p-3 d-flex align-items-center justify-content-between"
}, Ie = {
  key: 2,
  class: "card-body"
}, Ne = {
  key: 3,
  class: "card-footer bg-white rounded-bottom"
};
function Se(e, a, t, u, _, i) {
  return n(), l("div", $e, [
    e.$slots.heading ? (n(), l("div", ke, [
      d(e.$slots, "heading")
    ])) : r("", !0),
    e.$slots["heading-action"] ? (n(), l("div", we, [
      d(e.$slots, "heading-action")
    ])) : r("", !0),
    e.$slots.body ? (n(), l("div", Ie, [
      d(e.$slots, "body")
    ])) : r("", !0),
    e.$slots.footer ? (n(), l("div", Ne, [
      d(e.$slots, "footer")
    ])) : r("", !0)
  ]);
}
const qe = /* @__PURE__ */ b(xe, [["render", Se]]), Pe = {
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
function Te(e, a, t, u, _, i) {
  return n(), $(k(`h${i.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: w(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ce = /* @__PURE__ */ b(Pe, [["render", Te]]), Oe = {
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Be(e, a, t, u, _, i) {
  return n(), l("div", null, [
    d(e.$slots, "default")
  ]);
}
const Ue = /* @__PURE__ */ b(Oe, [["render", Be]]), Me = {
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function je(e, a, t, u, _, i) {
  return n(), l("div", null, [
    d(e.$slots, "default")
  ]);
}
const De = /* @__PURE__ */ b(Me, [["render", je]]);
const Le = {
  name: "axdd-tabs-list",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "lines"
    },
    tabsId: {
      type: [String, Number],
      required: !0
    }
  }
}, Ee = ["id"], Fe = ["id"];
function Ke(e, a, t, u, _, i) {
  return t.variant == "lines" ? (n(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 8, Ee)) : t.variant == "pills" ? (n(), l("ul", {
    key: 1,
    class: o(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 10, Fe)) : r("", !0);
}
const Ae = /* @__PURE__ */ b(Le, [["render", Ke]]), Re = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      type: [String, Number],
      required: !0
    }
  }
}, Ve = ["id"];
function We(e, a, t, u, _, i) {
  return n(), l("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    d(e.$slots, "panels")
  ], 8, Ve);
}
const ze = /* @__PURE__ */ b(Re, [["render", We]]), He = {
  name: "axdd-tabs-item",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "lines"
    },
    panelId: {
      type: [String, Number],
      required: !0
    },
    tabsId: {
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
}, Ye = {
  class: "nav-item",
  role: "presentation"
}, Ge = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Je = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Qe = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Xe(e, a, t, u, _, i) {
  return n(), l("li", Ye, [
    t.variant == "lines" ? (n(), l("button", {
      key: 0,
      class: o(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[0] || (a[0] = f((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[1] || (a[1] = f((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[2] || (a[2] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Ge)) : t.variant == "pills" ? (n(), l("button", {
      key: 1,
      class: o(["nav-pills-link rounded-3 px-3 py-2", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[3] || (a[3] = f((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[4] || (a[4] = f((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[5] || (a[5] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Je)) : (n(), l("button", {
      key: 2,
      class: o(["nav-link", i.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[6] || (a[6] = f((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[7] || (a[7] = f((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[8] || (a[8] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(e.$slots, "default")
    ], 42, Qe))
  ]);
}
const Ze = /* @__PURE__ */ b(He, [["render", Xe]]), et = {
  name: "axdd-tabs-panel",
  props: {
    panelId: {
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
}, tt = ["id", "aria-labelledby"];
function st(e, a, t, u, _, i) {
  return n(), l("div", {
    class: o(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: a[0] || (a[0] = f(I((...c) => i.setFocus && i.setFocus(...c), ["shift", "prevent"]), ["tab"]))
  }, [
    d(e.$slots, "default")
  ], 42, tt);
}
const at = /* @__PURE__ */ b(et, [["render", st]]);
const it = {
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
    signOutUrl: {
      type: String,
      default: "#"
    },
    variant: {
      type: String,
      default: "dark"
    },
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  created: function() {
  }
}, nt = { class: "d-flex" }, lt = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), dt = { class: "flex-fill text-end" }, ot = ["href"], rt = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), ct = [
  rt
], ut = ["href"], _t = {
  key: 0,
  class: "me-2"
}, ht = /* @__PURE__ */ s("i", { class: "bi bi-box-fill" }, null, -1), bt = { class: "flex-fill" }, ft = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), vt = /* @__PURE__ */ v("this is aside content"), mt = {
  key: 0,
  class: "row"
}, gt = /* @__PURE__ */ s("div", { class: "col my-3" }, [
  /* @__PURE__ */ s("div", { class: "bg-gray py-2 text-center" }, " default gray bar (default) ")
], -1), yt = { class: "flex-fill" }, pt = {
  key: 1,
  class: "mt-auto"
}, xt = { class: "font-weight-light py-3 small" }, $t = /* @__PURE__ */ y('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function kt(e, a, t, u, _, i) {
  return n(), l("div", {
    class: o([[i.mq.mdMinus ? "" : "d-flex vh-100"], "axdd-sidebar"]),
    style: g([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: o([[i.mq.mdMinus ? "" : "overflow-auto"], "d-flex flex-column"]),
      style: g([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (n(), l("div", {
          key: 0,
          class: o(["py-2 px-3 small bg-opaque", [t.variant === "dark" ? "text-white" : "text-dark"]])
        }, [
          d(e.$slots, "profile", {}, () => [
            s("div", nt, [
              lt,
              s("div", dt, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ot)
              ])
            ])
          ])
        ], 2)) : r("", !0),
        s("div", {
          class: o([[
            i.mq.lgMinus ? "axdd-sidebar-brand-sm" : "axdd-sidebar-brand"
          ], "px-3"])
        }, [
          e.$slots.navigation ? (n(), l("a", {
            key: 0,
            class: o(["btn btn-link btn-sm d-lg-none border border-1 rounded-3 py-0 px-1 me-2", [
              t.variant === "dark" ? "text-white border-white" : "text-dark border-dark"
            ]]),
            "data-bs-toggle": "collapse",
            "data-bs-target": "#sidebar-nav-collapse",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "sidebar-nav-collapse",
            "aria-label": "Toggle Navigation Menu"
          }, ct, 2)) : r("", !0),
          s("div", {
            class: o(["d-inline align-middle text-white", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: t.appRootUrl,
              class: o(["axdd-font-encode-sans text-decoration-none", [t.variant === "dark" ? "text-white" : "text-dark"]])
            }, [
              e.$slots.logo ? (n(), l("span", _t, [
                d(e.$slots, "logo", {}, () => [
                  ht
                ])
              ])) : r("", !0),
              v(h(t.appName), 1)
            ], 10, ut)
          ], 2)
        ], 2)
      ]),
      s("div", bt, [
        s("div", {
          id: "sidebar-nav-collapse",
          class: o(["px-3", [i.mq.mdMinus ? "collapse" : "collapse.show"]])
        }, [
          e.$slots.navigation ? (n(), l("nav", {
            key: 0,
            role: "navigation",
            class: o([t.variant === "dark" ? "text-white" : "text-dark"])
          }, [
            d(e.$slots, "navigation", {}, () => [
              ft
            ])
          ], 2)) : r("", !0),
          e.$slots.aside ? (n(), l("aside", {
            key: 1,
            class: o([[t.variant === "dark" ? "text-white" : "text-dark"], "mb-5"])
          }, [
            d(e.$slots, "aside", {}, () => [
              vt
            ])
          ], 2)) : r("", !0)
        ], 2)
      ]),
      s("div", {
        class: o([[
          t.variant === "dark" ? "axdd-sidebar-logo-dark" : "axdd-sidebar-logo-light"
        ], ""])
      }, " \xA0 ", 2)
    ], 6),
    s("div", {
      class: o([[i.mq.mdMinus ? "" : "flex-fill overflow-auto"], "bg-white"])
    }, [
      s("div", {
        class: o([[t.isPreview ? "" : "min-vh-100"], "container-xl d-flex flex-column"])
      }, [
        e.$slots.bar ? (n(), l("div", mt, [
          d(e.$slots, "bar", {}, () => [
            gt
          ])
        ])) : r("", !0),
        s("main", yt, [
          d(e.$slots, "main")
        ]),
        e.$slots.footer ? (n(), l("footer", pt, [
          d(e.$slots, "footer", {}, () => [
            s("div", xt, [
              $t,
              s("div", null, " Copyright \xA9 " + h(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : r("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const wt = /* @__PURE__ */ b(it, [["render", kt]]);
const It = {
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
}, Nt = { class: "w-100" }, St = {
  key: 0,
  class: "bg-dark-purple text-white py-2 small"
}, qt = { class: "container-xl" }, Pt = /* @__PURE__ */ v("Welcome!"), Tt = { class: "bg-purple axdd-topbar-brand" }, Ct = { class: "container-xl axdd-topbar-logo" }, Ot = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Bt = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Ut = [
  Bt
], Mt = ["href"], jt = {
  key: 1,
  class: "w-100"
}, Dt = { class: "w-100 flex-fill" }, Lt = { class: "container-xl" }, Et = { class: "row" }, Ft = {
  key: 0,
  class: "col-lg-3"
}, Kt = { role: "navigation" }, At = { key: 0 }, Rt = /* @__PURE__ */ v("this is aside content"), Vt = {
  key: 1,
  class: "w-100 p-0 m-0"
}, Wt = /* @__PURE__ */ s("div", { class: "bg-gray" }, [
  /* @__PURE__ */ s("div", { class: "container-xl" }, [
    /* @__PURE__ */ s("div", { class: "col-12 py-2 text-center" }, " default gray bar (mobile) ")
  ])
], -1), zt = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Ht = { class: "w-100" }, Yt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Gt = { class: "container-xl" }, Jt = { class: "text-white font-weight-light py-3" }, Qt = /* @__PURE__ */ y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Xt(e, a, t, u, _, i) {
  return n(), l("div", {
    class: o([[t.isPreview ? " " : "min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", Nt, [
      e.$slots.profile ? (n(), l("div", St, [
        s("div", qt, [
          d(e.$slots, "profile", {}, () => [
            Pt
          ])
        ])
      ])) : r("", !0),
      s("div", Tt, [
        s("div", Ct, [
          e.$slots.navigation ? (n(), l("a", Ot, Ut)) : r("", !0),
          s("div", {
            class: o(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, h(t.appName), 9, Mt)
          ], 2)
        ])
      ]),
      e.$slots.bar && i.mq.xlPlus ? (n(), l("div", jt, [
        d(e.$slots, "bar")
      ])) : r("", !0)
    ]),
    s("div", Dt, [
      s("div", Lt, [
        s("div", Et, [
          e.$slots.navigation || e.$slots.aside ? (n(), l("div", Ft, [
            s("div", {
              id: "topbar-nav-collapse",
              class: o([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", Kt, [
                d(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (n(), l("aside", At, [
                d(e.$slots, "aside", {}, () => [
                  Rt
                ])
              ])) : r("", !0)
            ], 2)
          ])) : r("", !0),
          e.$slots.bar && !i.mq.xlPlus ? (n(), l("div", Vt, [
            d(e.$slots, "bar", {}, () => [
              Wt
            ])
          ])) : r("", !0),
          s("div", {
            class: o(e.$slots.navigation ? "col-lg-9" : "col-lg-12")
          }, [
            s("main", null, [
              d(e.$slots, "main", {}, () => [
                zt
              ])
            ])
          ], 2)
        ])
      ])
    ]),
    s("footer", Ht, [
      e.$slots.footer ? (n(), l("div", Yt, [
        s("div", Gt, [
          d(e.$slots, "footer", {}, () => [
            s("div", Jt, [
              Qt,
              s("div", null, " Copyright \xA9 " + h(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : r("", !0)
    ])
  ], 2);
}
const Zt = /* @__PURE__ */ b(It, [["render", Xt]]), m = {
  Card: qe,
  CardHeading: Ce,
  CardAction: Ue,
  CardTabs: De,
  DisclosureAction: ie,
  DisclosureBlock: pe,
  DisclosurePanel: oe,
  Profile: X,
  TabsList: Ae,
  TabsDisplay: ze,
  TabsItem: Ze,
  TabsPanel: at,
  Sidebar: wt,
  Topbar: Zt
}, ts = {
  install(e) {
    for (const a in m)
      if (Object.prototype.hasOwnProperty.call(m, a)) {
        const t = m[a];
        e.component(t.name, t);
      }
  }
};
export {
  ts as default
};
