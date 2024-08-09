import { openBlock as l, createElementBlock as d, renderSlot as u, createCommentVNode as h, createBlock as ue, resolveDynamicComponent as fe, withCtx as J, normalizeClass as f, withKeys as P, withModifiers as he, createElementVNode as n, toDisplayString as _, pushScopeId as be, popScopeId as me, resolveComponent as X, normalizeStyle as H, createVNode as Z, createTextVNode as $, createStaticVNode as ee, toRef as ge, readonly as te, customRef as _e, ref as D, onMounted as se, nextTick as ne, unref as pe, getCurrentInstance as ae, getCurrentScope as ve, onScopeDispose as ye, watch as G, computed as R, shallowRef as we, watchEffect as xe, withDirectives as z, vShow as K } from "vue";
const p = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [i, o] of s)
    t[i] = o;
  return t;
}, $e = {
  name: "axdd-card",
  data: function() {
    return {};
  }
}, ke = { class: "card shadow-sm rounded-3 mb-4" }, Se = {
  key: 0,
  class: "card-header bg-transparent border-0 rounded-top p-3"
}, Ne = {
  key: 1,
  class: "card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
}, Ie = {
  key: 2,
  class: "card-body"
}, Ce = {
  key: 3,
  class: "card-footer bg-black bg-opacity-10 border-0 rounded-bottom"
};
function Me(e, s, t, i, o, a) {
  return l(), d("div", ke, [
    e.$slots.heading ? (l(), d("div", Se, [
      u(e.$slots, "heading")
    ])) : h("", !0),
    e.$slots["heading-action"] ? (l(), d("div", Ne, [
      u(e.$slots, "heading-action")
    ])) : h("", !0),
    e.$slots.body ? (l(), d("div", Ie, [
      u(e.$slots, "body")
    ])) : h("", !0),
    e.$slots.footer ? (l(), d("div", Ce, [
      u(e.$slots, "footer")
    ])) : h("", !0)
  ]);
}
const Te = /* @__PURE__ */ p($e, [["render", Me]]), Oe = {
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
function qe(e, s, t, i, o, a) {
  return l(), ue(fe(`h${a.checkedLevel}`), { class: "h6 m-0 fw-bold" }, {
    default: J(() => [
      u(e.$slots, "default")
    ]),
    _: 3
  });
}
const Pe = /* @__PURE__ */ p(Oe, [["render", qe]]), Ae = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-action",
  data: function() {
    return {};
  }
};
function Ee(e, s, t, i, o, a) {
  return l(), d("div", null, [
    u(e.$slots, "default")
  ]);
}
const Le = /* @__PURE__ */ p(Ae, [["render", Ee]]), De = {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "axdd-card-tabs",
  data: function() {
    return {};
  }
};
function je(e, s, t, i, o, a) {
  return l(), d("div", null, [
    u(e.$slots, "default")
  ]);
}
const Be = /* @__PURE__ */ p(De, [["render", je]]), Fe = {
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
}, Ue = ["id"], We = ["id"];
function Re(e, s, t, i, o, a) {
  return t.variant == "lines" ? (l(), d("ul", {
    key: 0,
    class: "nav nav-lines border-bottom",
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "items")
  ], 8, Ue)) : t.variant == "pills" ? (l(), d("ul", {
    key: 1,
    class: f(["bg-light gap-1 rounded-3 p-1", "nav nav-" + t.variant]),
    id: t.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "items")
  ], 10, We)) : h("", !0);
}
const Ve = /* @__PURE__ */ p(Fe, [["render", Re]]), ze = {
  name: "axdd-tabs-display",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Ke = ["id"];
function He(e, s, t, i, o, a) {
  return l(), d("div", {
    class: "tab-content",
    id: t.tabsId + "Content"
  }, [
    u(e.$slots, "panels")
  ], 8, Ke);
}
const Je = /* @__PURE__ */ p(ze, [["render", He]]), Ge = {
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
}, Qe = {
  class: "nav-item",
  role: "presentation"
}, Ye = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Xe = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"], Ze = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function et(e, s, t, i, o, a) {
  return l(), d("li", Qe, [
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
        s[0] || (s[0] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        s[1] || (s[1] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: s[2] || (s[2] = (...r) => a.onClick && a.onClick(...r))
    }, [
      u(e.$slots, "default")
    ], 42, Ye)) : t.variant == "pills" ? (l(), d("button", {
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
        s[3] || (s[3] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        s[4] || (s[4] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: s[5] || (s[5] = (...r) => a.onClick && a.onClick(...r))
    }, [
      u(e.$slots, "default")
    ], 42, Xe)) : (l(), d("button", {
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
        s[6] || (s[6] = P((...r) => a.moveNext && a.moveNext(...r), ["right"])),
        s[7] || (s[7] = P((...r) => a.movePrev && a.movePrev(...r), ["left"]))
      ],
      onClick: s[8] || (s[8] = (...r) => a.onClick && a.onClick(...r))
    }, [
      u(e.$slots, "default")
    ], 42, Ze))
  ]);
}
const tt = /* @__PURE__ */ p(Ge, [["render", et]]), st = {
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
}, nt = ["id", "aria-labelledby"];
function at(e, s, t, i, o, a) {
  return l(), d("div", {
    class: f(["tab-pane fade", { "show active": t.activePanel }]),
    id: t.panelId,
    role: "tabpanel",
    "aria-labelledby": t.panelId + "-tab",
    tabindex: "0",
    onKeydown: s[0] || (s[0] = P(he((...r) => a.setFocus && a.setFocus(...r), ["shift", "prevent"]), ["tab"]))
  }, [
    u(e.$slots, "default")
  ], 42, nt);
}
const it = /* @__PURE__ */ p(st, [["render", at]]), ot = {
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
}, lt = ["href", "aria-controls"], rt = ["data-bs-target", "aria-controls"], dt = {
  key: 0,
  class: "bi bi-chevron-right text-dark-beige",
  "aria-hidden": "true"
};
function ct(e, s, t, i, o, a) {
  return t.isLink ? (l(), d("a", {
    key: 0,
    "data-bs-toggle": "collapse",
    href: "#" + t.disclosureId,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    u(e.$slots, "default", {}, void 0, !0)
  ], 8, lt)) : (l(), d("button", {
    key: 1,
    class: f(["btn btn-beige", [t.hasIndicator ? "chevron" : ""]]),
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#" + t.disclosureId,
    "aria-expanded": "false",
    "aria-controls": t.disclosureId
  }, [
    t.hasIndicator ? (l(), d("i", dt)) : h("", !0),
    u(e.$slots, "default", {}, void 0, !0)
  ], 10, rt));
}
const ut = /* @__PURE__ */ p(ot, [["render", ct], ["__scopeId", "data-v-bac417f3"]]), ft = {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ht = ["id"];
function bt(e, s, t, i, o, a) {
  return l(), d("div", {
    class: "collapse",
    id: t.disclosureId
  }, [
    u(e.$slots, "default")
  ], 8, ht);
}
const mt = /* @__PURE__ */ p(ft, [["render", bt]]), gt = {
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
}, _t = (e) => (be("data-v-075da959"), e = e(), me(), e), pt = { class: "rounded-3 p-3 mb-2" }, vt = { class: "d-flex" }, yt = {
  class: "me-3",
  style: { width: "330px" }
}, wt = ["data-bs-target", "aria-controls"], xt = /* @__PURE__ */ _t(() => /* @__PURE__ */ n("i", {
  class: "bi bi-chevron-right mx-2",
  "aria-hidden": "true"
}, null, -1)), $t = ["id"], kt = { class: "flex-fill" }, St = ["id", "aria-labelledby"];
function Nt(e, s, t, i, o, a) {
  return l(), d("div", pt, [
    n("div", vt, [
      n("div", yt, [
        n("a", {
          href: "#",
          class: "chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.blockId + "-panel",
          "aria-expanded": "false",
          "aria-controls": t.blockId + "-panel"
        }, [
          xt,
          n("span", {
            class: "fw-bold",
            id: t.blockId + "-heading"
          }, _(t.blockTitle), 9, $t)
        ], 8, wt)
      ]),
      n("div", kt, [
        u(e.$slots, "header", {}, void 0, !0)
      ])
    ]),
    n("div", {
      id: t.blockId + "-panel",
      class: "collapse",
      "aria-labelledby": t.blockId + "-heading"
    }, [
      u(e.$slots, "body", {}, void 0, !0)
    ], 8, St)
  ]);
}
const It = /* @__PURE__ */ p(gt, [["render", Nt], ["__scopeId", "data-v-075da959"]]), Ct = {
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
}, Mt = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Tt = { class: "d-flex" }, Ot = /* @__PURE__ */ n("div", { class: "flex-fill" }, "username", -1), qt = { class: "flex-fill text-end" }, Pt = ["href"], At = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Et = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold fs-6" }, null, -1), Lt = [
  Et
], Dt = {
  key: 0,
  role: "navigation"
}, jt = /* @__PURE__ */ n("ul", { class: "text-white" }, [
  /* @__PURE__ */ n("li", null, "nav 1"),
  /* @__PURE__ */ n("li", null, "nav 2"),
  /* @__PURE__ */ n("li", null, "nav 3"),
  /* @__PURE__ */ n("li", null, "nav 4")
], -1), Bt = {
  key: 1,
  class: "mb-3 text-light"
}, Ft = /* @__PURE__ */ n("div", { class: "sol-sidebar-logo" }, " ", -1), Ut = { class: "flex-fill" }, Wt = { key: 0 }, Rt = { class: "font-weight-light py-3 small" }, Vt = /* @__PURE__ */ ee('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1);
function zt(e, s, t, i, o, a) {
  const r = X("router-link");
  return l(), d("div", {
    class: f([a.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: H([t.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: f([t.sidebarClass + [a.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: H([a.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (l(), d("div", Mt, [
          u(e.$slots, "profile", {}, () => [
            n("div", Tt, [
              Ot,
              n("div", qt, [
                n("a", {
                  href: t.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Pt)
              ])
            ])
          ])
        ])) : h("", !0),
        n("div", {
          class: f([[a.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (l(), d("a", At, Lt)) : h("", !0),
          n("div", {
            class: f(["d-inline align-middle", [a.mq.mdPlus ? "h2" : "h3"]])
          }, [
            Z(r, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: J(() => [
                $(_(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      n("div", {
        id: "sidebar-nav-collapse",
        class: f(["px-3 flex-fill", [
          a.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (l(), d("nav", Dt, [
          u(e.$slots, "navigation", {}, () => [
            jt
          ])
        ])) : h("", !0),
        e.$slots.aside ? (l(), d("aside", Bt, [
          u(e.$slots, "aside", {}, () => [
            $("this is aside content")
          ])
        ])) : h("", !0)
      ], 2),
      Ft
    ], 6),
    n("div", {
      id: "scrollbody",
      class: f([[a.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      n("div", {
        class: f([[a.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        n("main", Ut, [
          u(e.$slots, "main")
        ]),
        e.$slots.footer ? (l(), d("footer", Wt, [
          u(e.$slots, "footer", {}, () => [
            n("div", Rt, [
              Vt,
              n("div", null, " Copyright © " + _((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : h("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Kt = /* @__PURE__ */ p(Ct, [["render", zt]]), Ht = {
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
}, Jt = { class: "w-100" }, Gt = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Qt = { class: "container-xl" }, Yt = { class: "axdd-topbar-brand" }, Xt = { class: "container-xl axdd-topbar-logo" }, Zt = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, es = /* @__PURE__ */ n("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1), ts = [
  es
], ss = { class: "container-xl" }, ns = { class: "row" }, as = { role: "navigation" }, is = { key: 0 }, os = { class: "col" }, ls = {
  key: 0,
  class: "my-3"
}, rs = /* @__PURE__ */ n("div", { style: { outline: "dashed 1px lightgray" } }, [
  /* @__PURE__ */ n("h1", null, "Hello world..."),
  /* @__PURE__ */ n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
], -1), ds = { class: "w-100" }, cs = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, us = { class: "container-xl" }, fs = { class: "text-white font-weight-light py-3" }, hs = /* @__PURE__ */ ee('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>', 1);
function bs(e, s, t, i, o, a) {
  const r = X("router-link");
  return l(), d("div", {
    class: f([t.topbarClass + [t.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    n("header", Jt, [
      e.$slots.profile ? (l(), d("div", Gt, [
        n("div", Qt, [
          u(e.$slots, "profile", {}, () => [
            $("Welcome!")
          ])
        ])
      ])) : h("", !0),
      n("div", Yt, [
        n("div", Xt, [
          e.$slots.navigation ? (l(), d("a", Zt, ts)) : h("", !0),
          n("div", {
            class: f(["d-inline align-middle text-white", [a.mq.xlPlus ? "h2" : "h3"]])
          }, [
            Z(r, {
              to: t.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, {
              default: J(() => [
                $(_(t.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ])
      ])
    ]),
    n("div", {
      class: f([t.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      n("div", ss, [
        n("div", ns, [
          e.$slots.navigation || e.$slots.aside ? (l(), d("div", {
            key: 0,
            class: "",
            style: H(a.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: f([a.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              n("nav", as, [
                u(e.$slots, "navigation")
              ]),
              e.$slots.aside ? (l(), d("aside", is, [
                u(e.$slots, "aside", {}, () => [
                  $("this is aside content")
                ])
              ])) : h("", !0)
            ], 2)
          ], 4)) : h("", !0),
          n("div", os, [
            e.$slots.bar ? (l(), d("div", ls, [
              u(e.$slots, "bar")
            ])) : h("", !0),
            n("main", null, [
              u(e.$slots, "main", {}, () => [
                rs
              ])
            ])
          ])
        ])
      ])
    ], 2),
    n("footer", ds, [
      e.$slots.footer ? (l(), d("div", cs, [
        n("div", us, [
          u(e.$slots, "footer", {}, () => [
            n("div", fs, [
              hs,
              n("div", null, " Copyright © " + _((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : h("", !0)
    ])
  ], 2);
}
const ms = /* @__PURE__ */ p(Ht, [["render", bs]]), gs = {
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
}, _s = {
  key: 0,
  class: "d-flex"
}, ps = { class: "flex-fill dropdown" }, vs = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ys = { class: "me-1" }, ws = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1), xs = { class: "text-decoration-underline" }, $s = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ks = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Ss = {
  key: 0,
  class: "small text-danger"
}, Ns = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Is = { class: "small" }, Cs = { class: "small" }, Ms = ["href"], Ts = ["href"], Os = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1), qs = {
  key: 1,
  class: "d-flex"
}, Ps = {
  key: 0,
  class: "flex-fill text-white"
}, As = { class: "me-1" }, Es = /* @__PURE__ */ n("i", { class: "bi bi-arrow-right text-danger" }, null, -1), Ls = {
  key: 1,
  class: "flex-fill text-white"
}, Ds = { class: "flex-fill text-end" }, js = ["href"], Bs = /* @__PURE__ */ n("a", { href: "sadkf" }, "sign out test", -1);
function Fs(e, s, t, i, o, a) {
  return t.variant === "flyout" ? (l(), d("div", _s, [
    n("div", ps, [
      t.userOverride ? (l(), d("a", vs, [
        n("span", ys, _(t.userNetid), 1),
        ws,
        n("span", xs, _(t.userOverride), 1)
      ])) : (l(), d("a", $s, _(t.userNetid), 1)),
      n("div", ks, [
        t.userOverride ? (l(), d("p", Ss, [
          $(" overriding as "),
          Ns,
          $(" " + _(t.userOverride), 1)
        ])) : h("", !0),
        n("p", Is, _(t.userOfficialName) + ", " + _(t.userPreferredName) + ", " + _(t.userPronouns), 1),
        n("p", Cs, [
          n("a", { href: t.profileUrl }, "go to profile", 8, Ms)
        ]),
        n("div", null, [
          t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            n("a", {
              href: t.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Ts)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            Os
          ])
        ])
      ])
    ])
  ])) : (l(), d("div", qs, [
    t.userOverride ? (l(), d("div", Ps, [
      n("span", As, _(t.userNetid), 1),
      Es,
      $(" " + _(t.userOverride), 1)
    ])) : (l(), d("div", Ls, _(t.userNetid), 1)),
    n("div", Ds, [
      t.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: t.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, js)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        Bs
      ])
    ])
  ]));
}
const Us = /* @__PURE__ */ p(gs, [["render", Fs]]);
function ie(e) {
  return ve() ? (ye(e), !0) : !1;
}
function V(e) {
  return typeof e == "function" ? e() : pe(e);
}
const Ws = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Rs = Object.prototype.toString, Vs = (e) => Rs.call(e) === "[object Object]", oe = () => {
};
function zs(e, s) {
  function t(...i) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => s.apply(this, i), { fn: s, thisArg: this, args: i })).then(o).catch(a);
    });
  }
  return t;
}
const le = (e) => e();
function Ks(e = le) {
  const s = D(!0);
  function t() {
    s.value = !1;
  }
  function i() {
    s.value = !0;
  }
  const o = (...a) => {
    s.value && e(...a);
  };
  return { isActive: te(s), pause: t, resume: i, eventFilter: o };
}
function Hs(e) {
  return ae();
}
function Js(...e) {
  if (e.length !== 1)
    return ge(...e);
  const s = e[0];
  return typeof s == "function" ? te(_e(() => ({ get: s, set: oe }))) : D(s);
}
function Gs(e, s, t = {}) {
  const {
    eventFilter: i = le,
    ...o
  } = t;
  return G(
    e,
    zs(
      i,
      s
    ),
    o
  );
}
function Qs(e, s, t = {}) {
  const {
    eventFilter: i,
    ...o
  } = t, { eventFilter: a, pause: r, resume: k, isActive: I } = Ks(i);
  return { stop: Gs(
    e,
    s,
    {
      ...o,
      eventFilter: a
    }
  ), pause: r, resume: k, isActive: I };
}
function re(e, s = !0, t) {
  Hs() ? se(e, t) : s ? e() : ne(e);
}
function de(e) {
  var s;
  const t = V(e);
  return (s = t == null ? void 0 : t.$el) != null ? s : t;
}
const L = Ws ? window : void 0;
function Q(...e) {
  let s, t, i, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, i, o] = e, s = L) : [s, t, i, o] = e, !s)
    return oe;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const a = [], r = () => {
    a.forEach((v) => v()), a.length = 0;
  }, k = (v, b, M, x) => (v.addEventListener(b, M, x), () => v.removeEventListener(b, M, x)), I = G(
    () => [de(s), V(o)],
    ([v, b]) => {
      if (r(), !v)
        return;
      const M = Vs(b) ? { ...b } : b;
      a.push(
        ...t.flatMap((x) => i.map((S) => k(v, x, S, M)))
      );
    },
    { immediate: !0, flush: "post" }
  ), w = () => {
    I(), r();
  };
  return ie(w), w;
}
function Ys() {
  const e = D(!1), s = ae();
  return s && se(() => {
    e.value = !0;
  }, s), e;
}
function Xs(e) {
  const s = Ys();
  return R(() => (s.value, !!e()));
}
function Zs(e, s = {}) {
  const { window: t = L } = s, i = Xs(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let o;
  const a = D(!1), r = (w) => {
    a.value = w.matches;
  }, k = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, I = xe(() => {
    i.value && (k(), o = t.matchMedia(V(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), a.value = o.matches);
  });
  return ie(() => {
    I(), k(), o = void 0;
  }), a;
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__", en = /* @__PURE__ */ tn();
function tn() {
  return W in U || (U[W] = U[W] || {}), U[W];
}
function ce(e, s) {
  return en[e] || s;
}
function sn(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const nn = {
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
function an(e, s, t, i = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: r = !0,
    listenToStorageChanges: k = !0,
    writeDefaults: I = !0,
    mergeDefaults: w = !1,
    shallow: v,
    window: b = L,
    eventFilter: M,
    onError: x = (c) => {
      console.error(c);
    },
    initOnMounted: S
  } = i, y = (v ? we : D)(typeof s == "function" ? s() : s);
  if (!t)
    try {
      t = ce("getDefaultStorage", () => {
        var c;
        return (c = L) == null ? void 0 : c.localStorage;
      })();
    } catch (c) {
      x(c);
    }
  if (!t)
    return y;
  const C = V(s), E = sn(C), T = (o = i.serializer) != null ? o : nn[E], { pause: j, resume: m } = Qs(
    y,
    () => B(y.value),
    { flush: a, deep: r, eventFilter: M }
  );
  b && k && re(() => {
    Q(b, "storage", N), Q(b, Y, F), S && N();
  }), S || N();
  function O(c, g) {
    b && b.dispatchEvent(new CustomEvent(Y, {
      detail: {
        key: e,
        oldValue: c,
        newValue: g,
        storageArea: t
      }
    }));
  }
  function B(c) {
    try {
      const g = t.getItem(e);
      if (c == null)
        O(g, null), t.removeItem(e);
      else {
        const q = T.write(c);
        g !== q && (t.setItem(e, q), O(g, q));
      }
    } catch (g) {
      x(g);
    }
  }
  function A(c) {
    const g = c ? c.newValue : t.getItem(e);
    if (g == null)
      return I && C != null && t.setItem(e, T.write(C)), C;
    if (!c && w) {
      const q = T.read(g);
      return typeof w == "function" ? w(q, C) : E === "object" && !Array.isArray(q) ? { ...C, ...q } : q;
    } else
      return typeof g != "string" ? g : T.read(g);
  }
  function N(c) {
    if (!(c && c.storageArea !== t)) {
      if (c && c.key == null) {
        y.value = C;
        return;
      }
      if (!(c && c.key !== e)) {
        j();
        try {
          (c == null ? void 0 : c.newValue) !== T.write(y.value) && (y.value = A(c));
        } catch (g) {
          x(g);
        } finally {
          c ? ne(m) : m();
        }
      }
    }
  }
  function F(c) {
    N(c.detail);
  }
  return y;
}
function on(e) {
  return Zs("(prefers-color-scheme: dark)", e);
}
function ln(e = {}) {
  const {
    selector: s = "html",
    attribute: t = "class",
    initialValue: i = "auto",
    window: o = L,
    storage: a,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: k = !0,
    storageRef: I,
    emitAuto: w,
    disableTransition: v = !0
  } = e, b = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, M = on({ window: o }), x = R(() => M.value ? "dark" : "light"), S = I || (r == null ? Js(i) : an(r, i, a, { window: o, listenToStorageChanges: k })), y = R(() => S.value === "auto" ? x.value : S.value), C = ce(
    "updateHTMLAttrs",
    (m, O, B) => {
      const A = typeof m == "string" ? o == null ? void 0 : o.document.querySelector(m) : de(m);
      if (!A)
        return;
      let N;
      if (v && (N = o.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(N)), O === "class") {
        const F = B.split(/\s/g);
        Object.values(b).flatMap((c) => (c || "").split(/\s/g)).filter(Boolean).forEach((c) => {
          F.includes(c) ? A.classList.add(c) : A.classList.remove(c);
        });
      } else
        A.setAttribute(O, B);
      v && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function E(m) {
    var O;
    C(s, t, (O = b[m]) != null ? O : m);
  }
  function T(m) {
    e.onChanged ? e.onChanged(m, E) : E(m);
  }
  G(y, T, { flush: "post", immediate: !0 }), re(() => T(y.value));
  const j = R({
    get() {
      return w ? S.value : y.value;
    },
    set(m) {
      S.value = m;
    }
  });
  try {
    return Object.assign(j, { store: S, system: x, state: y });
  } catch {
    return j;
  }
}
const rn = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: ln({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, dn = { class: "d-flex align-items-center" }, cn = {
  class: "btn btn-link text-reset dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, un = { class: "bi bi-brightness-high-fill" }, fn = { class: "bi bi-moon-stars-fill" }, hn = { class: "bi bi-circle-half" }, bn = { class: "dropdown-menu p-1" }, mn = { class: "mb-1" }, gn = /* @__PURE__ */ n("i", { class: "bi bi-brightness-high-fill" }, null, -1), _n = { class: "mb-1" }, pn = /* @__PURE__ */ n("i", { class: "bi bi-moon-stars-fill" }, null, -1), vn = /* @__PURE__ */ n("i", { class: "bi bi-circle-half" }, null, -1);
function yn(e, s, t, i, o, a) {
  return l(), d("div", dn, [
    n("div", null, [
      n("button", cn, [
        z(n("i", un, null, 512), [
          [K, i.colorMode == "light"]
        ]),
        z(n("i", fn, null, 512), [
          [K, i.colorMode == "dark"]
        ]),
        z(n("i", hn, null, 512), [
          [K, i.colorMode == "auto"]
        ])
      ]),
      n("ul", bn, [
        n("li", mn, [
          n("a", {
            class: f(["dropdown-item rounded", i.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[0] || (s[0] = (r) => i.colorMode = "light")
          }, [
            gn,
            $(" Light")
          ], 2)
        ]),
        n("li", _n, [
          n("a", {
            class: f(["dropdown-item rounded", i.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[1] || (s[1] = (r) => i.colorMode = "dark")
          }, [
            pn,
            $(" Dark")
          ], 2)
        ]),
        n("li", null, [
          n("a", {
            class: f(["dropdown-item rounded", i.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: s[2] || (s[2] = (r) => i.colorMode = "auto")
          }, [
            vn,
            $(" Auto")
          ], 2)
        ])
      ])
    ])
  ]);
}
const wn = /* @__PURE__ */ p(rn, [["render", yn]]), $n = {
  // CardProperty,
  // CardStatus,
  // LinkButton,
  Card: Te,
  CardHeading: Pe,
  CardAction: Le,
  CardTabs: Be,
  DisclosureAction: ut,
  DisclosureBlock: It,
  DisclosurePanel: mt,
  TabsList: Ve,
  TabsDisplay: Je,
  TabsItem: tt,
  TabsPanel: it,
  SSidebar: Kt,
  STopbar: ms,
  SColorMode: wn,
  SProfile: Us
};
export {
  $n as default
};
