import { openBlock as n, createElementBlock as l, createElementVNode as s, toDisplayString as _, createTextVNode as m, createCommentVNode as r, renderSlot as d, normalizeClass as o, pushScopeId as p, popScopeId as x, createBlock as w, resolveDynamicComponent as k, withCtx as $, withKeys as b, withModifiers as I, normalizeStyle as g, createStaticVNode as y } from "vue";
const f = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [u, h] of a)
    e[u] = h;
  return e;
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
}, j = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), D = { class: "small" }, L = { class: "small" }, E = ["href"], F = ["href"], K = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1), A = {
  key: 1,
  class: "d-flex"
}, R = {
  key: 0,
  class: "flex-fill text-white"
}, V = { class: "me-1" }, W = /* @__PURE__ */ s("i", { class: "bi bi-arrow-right text-danger" }, null, -1), z = {
  key: 1,
  class: "flex-fill text-white"
}, H = { class: "flex-fill text-end" }, Y = ["href"], G = /* @__PURE__ */ s("a", { href: "sadkf" }, "sign out test", -1);
function J(t, a, e, u, h, i) {
  return e.variant === "flyout" ? (n(), l("div", S, [
    s("div", q, [
      e.userOverride ? (n(), l("a", P, [
        s("span", T, _(e.userNetid), 1),
        C,
        s("span", O, _(e.userOverride), 1)
      ])) : (n(), l("a", B, _(e.userNetid), 1)),
      s("div", U, [
        e.userOverride ? (n(), l("p", M, [
          m(" overriding as "),
          j,
          m(" " + _(e.userOverride), 1)
        ])) : r("", !0),
        s("p", D, _(e.userOfficialName) + ", " + _(e.userPreferredName) + ", " + _(e.userPronouns), 1),
        s("p", L, [
          s("a", { href: e.profileUrl }, "go to profile", 8, E)
        ]),
        s("div", null, [
          e.signoutUrl ? d(t.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: e.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, F)
          ]) : d(t.$slots, "default", { key: 1 }, () => [
            K
          ])
        ])
      ])
    ])
  ])) : (n(), l("div", A, [
    e.userOverride ? (n(), l("div", R, [
      s("span", V, _(e.userNetid), 1),
      W,
      m(" " + _(e.userOverride), 1)
    ])) : (n(), l("div", z, _(e.userNetid), 1)),
    s("div", H, [
      e.signoutUrl ? d(t.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: e.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, Y)
      ]) : d(t.$slots, "default", { key: 1 }, () => [
        G
      ])
    ])
  ]));
}
const Q = /* @__PURE__ */ f(N, [["render", J]]);
const X = {
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
}, Z = ["href", "aria-controls"], ee = ["data-bs-target", "aria-controls"], te = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function se(t, a, e, u, h, i) {
  return e.isLink ? (n(), l("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + e.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": e.disclosureId
  }, [
    d(t.$slots, "default", {}, void 0, !0)
  ], 8, Z)) : (n(), l("button", {
    key: 1,
    class: o(["btn btn-beige", [e.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + e.disclosureId,
    "aria-expanded": "false",
    "aria-controls": e.disclosureId
  }, [
    e.hasIndicator ? (n(), l("i", te)) : r("", !0),
    d(t.$slots, "default", {}, void 0, !0)
  ], 10, ee));
}
const ae = /* @__PURE__ */ f(X, [["render", se], ["__scopeId", "data-v-fa03efea"]]), ie = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      type: [String, Number],
      required: !0
    }
  }
}, ne = ["id"];
function le(t, a, e, u, h, i) {
  return n(), l("div", {
    class: "collapse",
    id: e.disclosureId
  }, [
    d(t.$slots, "default")
  ], 8, ne);
}
const de = /* @__PURE__ */ f(ie, [["render", le]]);
const oe = {
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
}, re = (t) => (p("data-v-7e2919d6"), t = t(), x(), t), ce = { class: "rounded-3 p-3 mb-2" }, ue = { class: "d-flex" }, he = {
  class: "me-3",
  style: { width: "330px" }
}, _e = ["data-bs-target", "aria-controls"], fe = /* @__PURE__ */ re(() => /* @__PURE__ */ s("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), be = ["id"], me = { class: "flex-fill" }, ve = ["id", "aria-labelledby"];
function ge(t, a, e, u, h, i) {
  return n(), l("div", ce, [
    s("div", ue, [
      s("div", he, [
        s("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + e.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": e.blockId + "-panel"
        }, [
          fe,
          s("span", {
            class: "fw-bold",
            id: e.blockId + "-heading"
          }, _(e.blockTitle), 9, be)
        ], 8, _e)
      ]),
      s("div", me, [
        d(t.$slots, "header", {}, void 0, !0)
      ])
    ]),
    s("div", {
      id: e.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": e.blockId + "-heading"
    }, [
      d(t.$slots, "body", {}, void 0, !0)
    ], 8, ve)
  ]);
}
const ye = /* @__PURE__ */ f(oe, [["render", ge], ["__scopeId", "data-v-7e2919d6"]]), pe = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, xe = { class: "card border shadow-sm rounded-3 mb-4" }, we = {
  key: 0,
  class: "card-header bg-white rounded-top p-3"
}, ke = {
  key: 1,
  class: "card-header bg-white rounded-top p-3 d-flex align-items-center justify-content-between"
}, $e = {
  key: 2,
  class: "card-body"
}, Ie = {
  key: 3,
  class: "card-footer bg-white rounded-bottom"
};
function Ne(t, a, e, u, h, i) {
  return n(), l("div", xe, [
    t.$slots.heading ? (n(), l("div", we, [
      d(t.$slots, "heading")
    ])) : r("", !0),
    t.$slots["heading-action"] ? (n(), l("div", ke, [
      d(t.$slots, "heading-action")
    ])) : r("", !0),
    t.$slots.body ? (n(), l("div", $e, [
      d(t.$slots, "body")
    ])) : r("", !0),
    t.$slots.footer ? (n(), l("div", Ie, [
      d(t.$slots, "footer")
    ])) : r("", !0)
  ]);
}
const Se = /* @__PURE__ */ f(pe, [["render", Ne]]), qe = {
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
function Pe(t, a, e, u, h, i) {
  return n(), w(k(`h${i.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: $(() => [
      d(t.$slots, "default")
    ]),
    _: 3
  });
}
const Te = /* @__PURE__ */ f(qe, [["render", Pe]]), Ce = {
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Oe(t, a, e, u, h, i) {
  return n(), l("div", null, [
    d(t.$slots, "default")
  ]);
}
const Be = /* @__PURE__ */ f(Ce, [["render", Oe]]), Ue = {
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function Me(t, a, e, u, h, i) {
  return n(), l("div", null, [
    d(t.$slots, "default")
  ]);
}
const je = /* @__PURE__ */ f(Ue, [["render", Me]]);
const De = {
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
}, Le = ["id"], Ee = ["id"];
function Fe(t, a, e, u, h, i) {
  return e.variant == "lines" ? (n(), l("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: e.tabsId,
    role: "tablist"
  }, [
    d(t.$slots, "items")
  ], 8, Le)) : e.variant == "pills" ? (n(), l("ul", {
    key: 1,
    class: o(["bg-light gap-1 rounded-3 p-1", "nav nav-" + e.variant]),
    id: e.tabsId,
    role: "tablist"
  }, [
    d(t.$slots, "items")
  ], 10, Ee)) : r("", !0);
}
const Ke = /* @__PURE__ */ f(De, [["render", Fe]]), Ae = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      type: [String, Number],
      required: !0
    }
  }
}, Re = ["id"];
function Ve(t, a, e, u, h, i) {
  return n(), l("div", {
    class: "tab-content",
    id: e.tabsId + "Content"
  }, [
    d(t.$slots, "panels")
  ], 8, Re);
}
const We = /* @__PURE__ */ f(Ae, [["render", Ve]]), ze = {
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
      let t = {};
      return t[this.tabsId + "-link"] = !0, t.active = this.activeTab, t;
    }
  },
  methods: {
    findIndex(t) {
      return [].findIndex.call(this.elements, (a) => a === t);
    },
    moveTab(t) {
      this.elements[t].click(), this.elements[t].focus(), Array.from(this.elements).forEach((a, e) => {
        e == t ? a.tabIndex = 0 : a.tabIndex = -1;
      });
    },
    moveNext(t) {
      const a = this.findIndex(t.target);
      a < this.elements.length - 1 && this.moveTab(a + 1);
    },
    movePrev(t) {
      const a = this.findIndex(t.target);
      a > 0 && this.moveTab(a - 1);
    },
    onClick(t) {
      const a = this.findIndex(t.target);
      this.moveTab(a);
    }
  }
}, He = {
  class: "nav-item",
  role: "presentation"
}, Ye = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Ge = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Je = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Qe(t, a, e, u, h, i) {
  return n(), l("li", He, [
    e.variant == "lines" ? (n(), l("button", {
      key: 0,
      class: o(["nav-lines-link text-secondary border-bottom border-white border-4 p-3", i.classObject]),
      tabindex: [e.activeTab ? "0" : "-1"],
      id: e.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + e.panelId,
      type: "button",
      role: "tab",
      "aria-controls": e.panelId,
      "aria-selected": e.activeTab,
      onKeydown: [
        a[0] || (a[0] = b((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[1] || (a[1] = b((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[2] || (a[2] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(t.$slots, "default")
    ], 42, Ye)) : e.variant == "pills" ? (n(), l("button", {
      key: 1,
      class: o(["nav-pills-link rounded-3 px-3 py-2", i.classObject]),
      tabindex: [e.activeTab ? "0" : "-1"],
      id: e.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + e.panelId,
      type: "button",
      role: "tab",
      "aria-controls": e.panelId,
      "aria-selected": e.activeTab,
      onKeydown: [
        a[3] || (a[3] = b((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[4] || (a[4] = b((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[5] || (a[5] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(t.$slots, "default")
    ], 42, Ge)) : (n(), l("button", {
      key: 2,
      class: o(["nav-link", i.classObject]),
      tabindex: [e.activeTab ? "0" : "-1"],
      id: e.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + e.panelId,
      type: "button",
      role: "tab",
      "aria-controls": e.panelId,
      "aria-selected": e.activeTab,
      onKeydown: [
        a[6] || (a[6] = b((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        a[7] || (a[7] = b((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: a[8] || (a[8] = (...c) => i.onClick && i.onClick(...c))
    }, [
      d(t.$slots, "default")
    ], 42, Je))
  ]);
}
const Xe = /* @__PURE__ */ f(ze, [["render", Qe]]), Ze = {
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
}, et = ["id", "aria-labelledby"];
function tt(t, a, e, u, h, i) {
  return n(), l("div", {
    class: o(["tab-pane fade", { "show active": e.activePanel }]),
    id: e.panelId,
    role: "tabpanel",
    "aria-labelledby": e.panelId + "-tab",
    tabindex: "0",
    onKeydown: a[0] || (a[0] = b(I((...c) => i.setFocus && i.setFocus(...c), ["shift", "prevent"]), ["tab"]))
  }, [
    d(t.$slots, "default")
  ], 42, et);
}
const st = /* @__PURE__ */ f(Ze, [["render", tt]]);
const at = {
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
}, it = { class: "d-flex" }, nt = /* @__PURE__ */ s("div", { class: "flex-fill" }, "username", -1), lt = { class: "flex-fill text-end" }, dt = ["href"], ot = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), rt = [
  ot
], ct = ["href"], ut = {
  key: 0,
  class: "me-2"
}, ht = /* @__PURE__ */ s("i", { class: "bi bi-box-fill" }, null, -1), _t = { class: "flex-fill" }, ft = /* @__PURE__ */ s("ul", { class: "text-white" }, [
  /* @__PURE__ */ s("li", null, "nav 1"),
  /* @__PURE__ */ s("li", null, "nav 2"),
  /* @__PURE__ */ s("li", null, "nav 3"),
  /* @__PURE__ */ s("li", null, "nav 4")
], -1), bt = {
  key: 0,
  class: "row"
}, mt = { class: "col" }, vt = /* @__PURE__ */ s("div", { class: "bg-gray py-2 text-center" }, " default gray bar (default) ", -1), gt = { class: "flex-fill" }, yt = {
  key: 1,
  class: "mt-auto"
}, pt = { class: "font-weight-light py-3 small" }, xt = /* @__PURE__ */ y('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>', 1);
function wt(t, a, e, u, h, i) {
  return n(), l("div", {
    class: o([[i.mq.mdMinus ? "" : "d-flex vh-100"], "axdd-sidebar"]),
    style: g([e.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: o([[i.mq.mdMinus ? "" : "overflow-auto"], "d-flex flex-column"]),
      style: g([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        t.$slots.profile ? (n(), l("div", {
          key: 0,
          class: o(["py-2 px-3 small bg-opaque", [e.variant === "dark" ? "text-white" : "text-dark"]])
        }, [
          d(t.$slots, "profile", {}, () => [
            s("div", it, [
              nt,
              s("div", lt, [
                s("a", {
                  href: e.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, dt)
              ])
            ])
          ])
        ], 2)) : r("", !0),
        s("div", {
          class: o([[
            i.mq.lgMinus ? "axdd-sidebar-brand-sm" : "axdd-sidebar-brand"
          ], "px-3"])
        }, [
          t.$slots.navigation ? (n(), l("a", {
            key: 0,
            class: o(["btn btn-link btn-sm d-lg-none border border-1 rounded-3 py-0 px-1 me-2", [
              e.variant === "dark" ? "text-white border-white" : "text-dark border-dark"
            ]]),
            "data-bs-toggle": "collapse",
            "data-bs-target": "#sidebar-nav-collapse",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "sidebar-nav-collapse",
            "aria-label": "Toggle Navigation Menu"
          }, rt, 2)) : r("", !0),
          s("div", {
            class: o(["d-inline align-middle text-white", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: e.appRootUrl,
              class: o(["axdd-font-encode-sans text-decoration-none", [e.variant === "dark" ? "text-white" : "text-dark"]])
            }, [
              t.$slots.logo ? (n(), l("span", ut, [
                d(t.$slots, "logo", {}, () => [
                  ht
                ])
              ])) : r("", !0),
              m(_(e.appName), 1)
            ], 10, ct)
          ], 2)
        ], 2)
      ]),
      s("div", _t, [
        s("div", {
          id: "sidebar-nav-collapse",
          class: o(["px-3", [i.mq.mdMinus ? "collapse" : "collapse.show"]])
        }, [
          t.$slots.navigation ? (n(), l("nav", {
            key: 0,
            role: "navigation",
            class: o([e.variant === "dark" ? "text-white" : "text-dark"])
          }, [
            d(t.$slots, "navigation", {}, () => [
              ft
            ])
          ], 2)) : r("", !0),
          t.$slots.aside ? (n(), l("aside", {
            key: 1,
            class: o([[e.variant === "dark" ? "text-white" : "text-dark"], "mb-5"])
          }, [
            d(t.$slots, "aside", {}, () => [
              m("this is aside content")
            ])
          ], 2)) : r("", !0)
        ], 2)
      ]),
      s("div", {
        class: o([[
          e.variant === "dark" ? "axdd-sidebar-logo-dark" : "axdd-sidebar-logo-light"
        ], ""])
      }, " \xA0 ", 2)
    ], 6),
    s("div", {
      class: o([[i.mq.mdMinus ? "" : "flex-fill overflow-auto"], "bg-white"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: o([[e.isPreview ? "" : "min-vh-100"], "container-xl d-flex flex-column"])
      }, [
        t.$slots.bar ? (n(), l("div", bt, [
          s("div", mt, [
            d(t.$slots, "bar", {}, () => [
              vt
            ])
          ])
        ])) : r("", !0),
        s("main", gt, [
          d(t.$slots, "main")
        ]),
        t.$slots.footer ? (n(), l("footer", yt, [
          d(t.$slots, "footer", {}, () => [
            s("div", pt, [
              xt,
              s("div", null, " Copyright \xA9 " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : r("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const kt = /* @__PURE__ */ f(at, [["render", wt]]);
const $t = {
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
}, It = { class: "w-100" }, Nt = {
  key: 0,
  class: "bg-dark-purple text-white py-2 small"
}, St = { class: "container-xl" }, qt = { class: "bg-purple axdd-topbar-brand" }, Pt = { class: "container-xl axdd-topbar-logo" }, Tt = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ct = /* @__PURE__ */ s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), Ot = [
  Ct
], Bt = ["href"], Ut = { class: "w-100 flex-fill bg-white" }, Mt = { class: "container-xl" }, jt = { class: "row" }, Dt = { role: "navigation" }, Lt = { key: 0 }, Et = { class: "col" }, Ft = {
  key: 0,
  class: "my-3"
}, Kt = /* @__PURE__ */ s("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ s("h1", null, "Hello world..."),
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), At = { class: "w-100" }, Rt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, Vt = { class: "container-xl" }, Wt = { class: "text-white font-weight-light py-3" }, zt = /* @__PURE__ */ y('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function Ht(t, a, e, u, h, i) {
  return n(), l("div", {
    class: o([[e.isPreview ? " " : "min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    s("header", It, [
      t.$slots.profile ? (n(), l("div", Nt, [
        s("div", St, [
          d(t.$slots, "profile", {}, () => [
            m("Welcome!")
          ])
        ])
      ])) : r("", !0),
      s("div", qt, [
        s("div", Pt, [
          t.$slots.navigation ? (n(), l("a", Tt, Ot)) : r("", !0),
          s("div", {
            class: o(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: e.appRootUrl,
              class: "axdd-font-encode-sans text-white text-decoration-none"
            }, _(e.appName), 9, Bt)
          ], 2)
        ])
      ])
    ]),
    s("div", Ut, [
      s("div", Mt, [
        s("div", jt, [
          t.$slots.navigation || t.$slots.aside ? (n(), l("div", {
            key: 0,
            class: "",
            style: g(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: o([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              s("nav", Dt, [
                d(t.$slots, "navigation")
              ]),
              t.$slots.aside ? (n(), l("aside", Lt, [
                d(t.$slots, "aside", {}, () => [
                  m("this is aside content")
                ])
              ])) : r("", !0)
            ], 2)
          ], 4)) : r("", !0),
          s("div", Et, [
            t.$slots.bar ? (n(), l("div", Ft, [
              d(t.$slots, "bar")
            ])) : r("", !0),
            s("main", null, [
              d(t.$slots, "main", {}, () => [
                Kt
              ])
            ])
          ])
        ])
      ])
    ]),
    s("footer", At, [
      t.$slots.footer ? (n(), l("div", Rt, [
        s("div", Vt, [
          d(t.$slots, "footer", {}, () => [
            s("div", Wt, [
              zt,
              s("div", null, " Copyright \xA9 " + _(new Date().getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : r("", !0)
    ])
  ], 2);
}
const Yt = /* @__PURE__ */ f($t, [["render", Ht]]), v = {
  Card: Se,
  CardHeading: Te,
  CardAction: Be,
  CardTabs: je,
  DisclosureAction: ae,
  DisclosureBlock: ye,
  DisclosurePanel: de,
  Profile: Q,
  TabsList: Ke,
  TabsDisplay: We,
  TabsItem: Xe,
  TabsPanel: st,
  Sidebar: kt,
  Topbar: Yt
}, Jt = {
  install(t) {
    for (const a in v)
      if (Object.prototype.hasOwnProperty.call(v, a)) {
        const e = v[a];
        t.component(e.name, e);
      }
  }
};
export {
  Jt as default
};
