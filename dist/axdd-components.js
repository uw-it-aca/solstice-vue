import { openBlock as i, createElementBlock as l, createElementVNode as s, toDisplayString as h, createTextVNode as m, createCommentVNode as o, renderSlot as d, normalizeClass as c, pushScopeId as y, popScopeId as x, createBlock as $, resolveDynamicComponent as w, withCtx as k, withKeys as f, withModifiers as I, normalizeStyle as g, createStaticVNode as p } from "vue";
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
}, j = /* @__PURE__ */ m(" overriding as "), D = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), L = { class: "small" }, E = { class: "small" }, F = ["href"], K = ["href"], A = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), R = {
  key: 1,
  class: "d-flex"
}, V = {
  key: 0,
  class: "flex-fill text-white"
}, W = { class: "me-1" }, z = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), H = {
  key: 1,
  class: "flex-fill text-white"
}, Y = { class: "flex-fill text-end" }, G = ["href"], J = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function Q(e, a, t, u, _, n) {
  return t.variant === "flyout" ? (i(), l("div", S, [
    s("div", q, [
      t.userOverride ? (i(), l("a", P, [
        s("span", T, h(t.userNetid), 1),
        C,
        s("span", O, h(t.userOverride), 1)
      ])) : (i(), l("a", B, h(t.userNetid), 1)),
      s("div", U, [
        t.userOverride ? (i(), l("p", M, [
          j,
          D,
          m(" " + h(t.userOverride), 1)
        ])) : o("", !0),
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
  ])) : (i(), l("div", R, [
    t.userOverride ? (i(), l("div", V, [
      s("span", W, h(t.userNetid), 1),
      z,
      m(" " + h(t.userOverride), 1)
    ])) : (i(), l("div", H, h(t.userNetid), 1)),
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
function ae(e, a, t, u, _, n) {
  return t.isLink ? (i(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    d(e.$slots, "default", {}, void 0, !0)
  ], 8, ee)) : (i(), l("button", {
    key: 1,
    class: c(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (i(), l("i", se)) : o("", !0),
    d(e.$slots, "default", {}, void 0, !0)
  ], 10, te));
}
const ne = /* @__PURE__ */ b(Z, [["render", ae], ["__scopeId", "data-v-4720c141"]]), ie = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      type: [String, Number],
      required: !0
    }
  }
}, le = ["id"];
function de(e, a, t, u, _, n) {
  return i(), l("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    d(e.$slots, "default")
  ], 8, le);
}
const oe = /* @__PURE__ */ b(ie, [["render", de]]);
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
}, ce = (e) => (y("data-v-7e2919d6"), e = e(), x(), e), ue = { class: "rounded-3 p-3 mb-2" }, _e = { class: "d-flex" }, he = {
  class: "me-3",
  style: { width: "330px" }
}, be = ["data-bs-target", "aria-controls"], fe = /* @__PURE__ */ ce(() => /* @__PURE__ */ s("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), me = ["id"], ve = { class: "flex-fill" }, ge = ["id", "aria-labelledby"];
function pe(e, a, t, u, _, n) {
  return i(), l("div", ue, [
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
          }, h(t.blockTitle), 9, me)
        ], 8, be)
      ]),
      s("div", ve, [
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
const ye = /* @__PURE__ */ b(re, [["render", pe], ["__scopeId", "data-v-7e2919d6"]]), xe = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, $e = { class: "card border shadow-sm rounded-3 mb-4" }, we = {
  key: 0,
  class: "card-header bg-white rounded-top p-3"
}, ke = {
  key: 1,
  class: "card-header bg-white rounded-top p-3 d-flex align-items-center justify-content-between"
}, Ie = {
  key: 2,
  class: "card-body"
}, Ne = {
  key: 3,
  class: "card-footer bg-white rounded-bottom"
};
function Se(e, a, t, u, _, n) {
  return i(), l("div", $e, [
    e.$slots.heading ? (i(), l("div", we, [
      d(e.$slots, "heading")
    ])) : o("", !0),
    e.$slots["heading-action"] ? (i(), l("div", ke, [
      d(e.$slots, "heading-action")
    ])) : o("", !0),
    e.$slots.body ? (i(), l("div", Ie, [
      d(e.$slots, "body")
    ])) : o("", !0),
    e.$slots.footer ? (i(), l("div", Ne, [
      d(e.$slots, "footer")
    ])) : o("", !0)
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
function Te(e, a, t, u, _, n) {
  return i(), $(w(`h${n.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: k(() => [
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
function Be(e, a, t, u, _, n) {
  return i(), l("div", null, [
    d(e.$slots, "default")
  ]);
}
const Ue = /* @__PURE__ */ b(Oe, [["render", Be]]), Me = {
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function je(e, a, t, u, _, n) {
  return i(), l("div", null, [
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
function Ke(e, a, t, u, _, n) {
  return t.variant == "lines" ? (i(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 8, Ee)) : t.variant == "pills" ? (i(), l("ul", {
    key: 1,
    class: c(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    d(e.$slots, "items")
  ], 10, Fe)) : o("", !0);
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
function We(e, a, t, u, _, n) {
  return i(), l("div", {
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
function Xe(e, a, t, u, _, n) {
  return i(), l("li", Ye, [
    t.variant == "lines" ? (i(), l("button", {
      key: 0,
      class: c(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[0] || (a[0] = f((...r) => n.moveNext && n.moveNext(...r), ["right"])),
        a[1] || (a[1] = f((...r) => n.movePrev && n.movePrev(...r), ["left"]))
      ],
      onClick: a[2] || (a[2] = (...r) => n.onClick && n.onClick(...r))
    }, [
      d(e.$slots, "default")
    ], 42, Ge)) : t.variant == "pills" ? (i(), l("button", {
      key: 1,
      class: c(["nav-pills-link rounded-3 px-3 py-2", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[3] || (a[3] = f((...r) => n.moveNext && n.moveNext(...r), ["right"])),
        a[4] || (a[4] = f((...r) => n.movePrev && n.movePrev(...r), ["left"]))
      ],
      onClick: a[5] || (a[5] = (...r) => n.onClick && n.onClick(...r))
    }, [
      d(e.$slots, "default")
    ], 42, Je)) : (i(), l("button", {
      key: 2,
      class: c(["nav-link", n.classObject]),
      tabindex: [t.activeTab ? "0" : "-1"],
      id: t.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + t.panelId,
      type: "button",
      role: "tab",
      "aria-controls": t.panelId,
      "aria-selected": t.activeTab,
      onKeydown: [
        a[6] || (a[6] = f((...r) => n.moveNext && n.moveNext(...r), ["right"])),
        a[7] || (a[7] = f((...r) => n.movePrev && n.movePrev(...r), ["left"]))
      ],
      onClick: a[8] || (a[8] = (...r) => n.onClick && n.onClick(...r))
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
function st(e, a, t, u, _, n) {
  return i(), l("div", {
    class: c(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: a[0] || (a[0] = f(I((...r) => n.setFocus && n.setFocus(...r), ["shift", "prevent"]), ["tab"]))
  }, [
    d(e.$slots, "default")
  ], 42, tt);
}
const at = /* @__PURE__ */ b(et, [["render", st]]);
const nt = {
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
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  created: function() {
  }
}, it = {
  key: 0,
  class: "bg-dark-purple text-white py-2 px-3 small"
}, lt = { class: "d-flex" }, dt = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), ot = { class: "flex-fill text-end" }, rt = ["href"], ct = {
  key: 0,
  class: "btn btn-link btn-sm d-lg-none border border-2 rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ut = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), _t = [
  ut
], ht = ["href"], bt = { class: "flex-fill" }, ft = {
  key: 0,
  role: "navigation"
}, mt = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), vt = { key: 1 }, gt = /* @__PURE__ */ m("this is aside content"), pt = /* @__PURE__ */ s("div", { class: "axdd-sidebar-logo" }, "\xA0", -1), yt = {
  key: 0,
  class: "row"
}, xt = /* @__PURE__ */ s("div", { class: "col my-3" }, [
  /* @__PURE__ */ s("div", { class: "bg-gray py-2 text-center" }, " default gray bar (default) ")
], -1), $t = { class: "flex-fill" }, wt = {
  key: 1,
  class: "mt-auto"
}, kt = { class: "font-weight-light py-3 small" }, It = /* @__PURE__ */ p('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function Nt(e, a, t, u, _, n) {
  return i(), l("div", {
    class: c([[n.mq.mdMinus ? "" : "d-flex vh-100"], "axdd-font-open-sans"]),
    style: g([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: c([[n.mq.mdMinus ? "" : "overflow-auto"], "d-flex flex-column bg-purple axdd-sidebar"]),
      style: g([n.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (i(), l("div", it, [
          d(e.$slots, "profile", {}, () => [
            s("div", lt, [
              dt,
              s("div", ot, [
                s("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, rt)
              ])
            ])
          ])
        ])) : o("", !0),
        s("div", {
          class: c([[
            n.mq.lgMinus ? "axdd-sidebar-brand-sm" : "axdd-sidebar-brand"
          ], "px-3"])
        }, [
          e.$slots.navigation ? (i(), l("a", ct, _t)) : o("", !0),
          s("div", {
            class: c(["d-inline align-middle text-white", [n.mq.mdPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, h(t.appName), 9, ht)
          ], 2)
        ], 2)
      ]),
      s("div", bt, [
        s("div", {
          id: "sidebar-nav-collapse",
          class: c(["px-3", [n.mq.mdMinus ? "collapse" : "collapse.show"]])
        }, [
          e.$slots.navigation ? (i(), l("nav", ft, [
            d(e.$slots, "navigation", {}, () => [
              mt
            ])
          ])) : o("", !0),
          e.$slots.aside ? (i(), l("aside", vt, [
            d(e.$slots, "aside", {}, () => [
              gt
            ])
          ])) : o("", !0)
        ], 2)
      ]),
      pt
    ], 6),
    s("div", {
      class: c([n.mq.mdMinus ? "" : "flex-fill overflow-auto"])
    }, [
      s("div", {
        class: c([[t.isPreview ? "" : "min-vh-100"], "container-xl d-flex flex-column"])
      }, [
        e.$slots.bar ? (i(), l("div", yt, [
          d(e.$slots, "bar", {}, () => [
            xt
          ])
        ])) : o("", !0),
        s("main", $t, [
          d(e.$slots, "main")
        ]),
        e.$slots.footer ? (i(), l("footer", wt, [
          d(e.$slots, "footer", {}, () => [
            s("div", kt, [
              It,
              s("div", null, " Copyright \xA9 " + h(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : o("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const St = /* @__PURE__ */ b(nt, [["render", Nt]]);
const qt = {
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
}, Pt = { class: "w-100" }, Tt = {
  key: 0,
  class: "bg-dark-purple text-white py-2 small"
}, Ct = { class: "container-xl" }, Ot = /* @__PURE__ */ m("Welcome!"), Bt = { class: "bg-purple axdd-topbar-brand" }, Ut = { class: "container-xl axdd-topbar-logo" }, Mt = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, jt = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Dt = [
  jt
], Lt = ["href"], Et = {
  key: 1,
  class: "w-100"
}, Ft = { class: "w-100 flex-fill" }, Kt = { class: "container-xl" }, At = { class: "row" }, Rt = {
  key: 0,
  class: "col-lg-3"
}, Vt = { role: "navigation" }, Wt = { key: 0 }, zt = /* @__PURE__ */ m("this is aside content"), Ht = {
  key: 1,
  class: "w-100 p-0 m-0"
}, Yt = /* @__PURE__ */ s("div", { class: "bg-gray" }, [
  /* @__PURE__ */ s("div", { class: "container-xl" }, [
    /* @__PURE__ */ s("div", { class: "col-12 py-2 text-center" }, " default gray bar (mobile) ")
  ])
], -1), Gt = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), Jt = { class: "w-100" }, Qt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Xt = { class: "container-xl" }, Zt = { class: "text-white font-weight-light py-3" }, es = /* @__PURE__ */ p('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function ts(e, a, t, u, _, n) {
  return i(), l("div", {
    class: c([[t.isPreview ? " " : "min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", Pt, [
      e.$slots.profile ? (i(), l("div", Tt, [
        s("div", Ct, [
          d(e.$slots, "profile", {}, () => [
            Ot
          ])
        ])
      ])) : o("", !0),
      s("div", Bt, [
        s("div", Ut, [
          e.$slots.navigation ? (i(), l("a", Mt, Dt)) : o("", !0),
          s("div", {
            class: c(["d-inline align-middle text-white", [n.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: t.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, h(t.appName), 9, Lt)
          ], 2)
        ])
      ]),
      e.$slots.bar && n.mq.xlPlus ? (i(), l("div", Et, [
        d(e.$slots, "bar")
      ])) : o("", !0)
    ]),
    s("div", Ft, [
      s("div", Kt, [
        s("div", At, [
          e.$slots.navigation || e.$slots.aside ? (i(), l("div", Rt, [
            s("div", {
              id: "topbar-nav-collapse",
              class: c([n.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", Vt, [
                d(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (i(), l("aside", Wt, [
                d(e.$slots, "aside", {}, () => [
                  zt
                ])
              ])) : o("", !0)
            ], 2)
          ])) : o("", !0),
          e.$slots.bar && !n.mq.xlPlus ? (i(), l("div", Ht, [
            d(e.$slots, "bar", {}, () => [
              Yt
            ])
          ])) : o("", !0),
          s("div", {
            class: c(e.$slots.navigation ? "col-lg-9" : "col-lg-12")
          }, [
            s("main", null, [
              d(e.$slots, "main", {}, () => [
                Gt
              ])
            ])
          ], 2)
        ])
      ])
    ]),
    s("footer", Jt, [
      e.$slots.footer ? (i(), l("div", Qt, [
        s("div", Xt, [
          d(e.$slots, "footer", {}, () => [
            s("div", Zt, [
              es,
              s("div", null, " Copyright \xA9 " + h(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : o("", !0)
    ])
  ], 2);
}
const ss = /* @__PURE__ */ b(qt, [["render", ts]]), v = {
  Card: qe,
  CardHeading: Ce,
  CardAction: Ue,
  CardTabs: De,
  DisclosureAction: ne,
  DisclosureBlock: ye,
  DisclosurePanel: oe,
  Profile: X,
  TabsList: Ae,
  TabsDisplay: ze,
  TabsItem: Ze,
  TabsPanel: at,
  Sidebar: St,
  Topbar: ss
}, ns = {
  install(e) {
    for (const a in v)
      if (Object.prototype.hasOwnProperty.call(v, a)) {
        const t = v[a];
        e.component(t.name, t);
      }
  }
};
export {
  ns as default
};
