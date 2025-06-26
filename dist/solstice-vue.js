import { createElementBlock as r, createCommentVNode as f, openBlock as d, renderSlot as c, createElementVNode as s, withKeys as J, normalizeClass as p, withModifiers as de, resolveComponent as ue, normalizeStyle as V, createVNode as ce, withCtx as fe, createTextVNode as v, toDisplayString as m, createStaticVNode as W, toRef as me, readonly as K, ref as O, customRef as pe, onMounted as ee, nextTick as te, unref as ge, getCurrentInstance as se, getCurrentScope as be, onScopeDispose as he, watch as z, computed as Z, shallowRef as ve, watchEffect as ye, withDirectives as q, vShow as G } from "vue";
const M = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, we = {
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
}, xe = ["id"], Se = ["id"];
function ke(e, t, n, l, o, i) {
  return n.variant == "underline" ? (d(), r("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, xe)) : n.variant == "pills" ? (d(), r("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: n.tabsId,
    role: "tablist"
  }, [
    c(e.$slots, "default")
  ], 8, Se)) : f("", !0);
}
const Es = /* @__PURE__ */ M(we, [["render", ke]]), _e = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Ae = ["id"];
function Ne(e, t, n, l, o, i) {
  return d(), r("div", {
    class: "tab-content",
    id: n.tabsId + "Content"
  }, [
    c(e.$slots, "default")
  ], 8, Ae);
}
const js = /* @__PURE__ */ M(_e, [["render", Ne]]), $e = {
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
}, Me = {
  class: "nav-item",
  role: "presentation"
}, Te = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ie(e, t, n, l, o, i) {
  return d(), r("li", Me, [
    s("a", {
      class: p(["nav-link", i.classObject]),
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
    ], 42, Te)
  ]);
}
const Ds = /* @__PURE__ */ M($e, [["render", Ie]]), Ce = {
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
}, Ee = ["id", "aria-labelledby"];
function je(e, t, n, l, o, i) {
  return d(), r("div", {
    class: p(["tab-pane fade", { "show active": n.activePanel }]),
    id: n.panelId,
    role: "tabpanel",
    "aria-labelledby": n.panelId + "-tab",
    tabindex: "0",
    onKeydown: t[0] || (t[0] = J(de((...u) => i.setFocus && i.setFocus(...u), ["shift", "prevent"]), ["tab"]))
  }, [
    c(e.$slots, "default")
  ], 42, Ee);
}
const Rs = /* @__PURE__ */ M(Ce, [["render", je]]), De = {
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
}, Re = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Oe = { class: "d-flex" }, Be = { class: "flex-fill text-end" }, Pe = ["href"], Ue = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Le = {
  key: 0,
  role: "navigation"
}, Ye = {
  key: 1,
  class: "mb-3 text-light"
}, Ze = { class: "flex-fill" }, Fe = { key: 0 }, qe = { class: "font-weight-light py-3 small" };
function Ge(e, t, n, l, o, i) {
  const u = ue("router-link");
  return d(), r("div", {
    class: p([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: V([n.isPreview ? "min-height: auto !important;" : ""])
  }, [
    s("div", {
      class: p([n.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: V([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      s("header", null, [
        e.$slots.profile ? (d(), r("div", Re, [
          c(e.$slots, "profile", {}, () => [
            s("div", Oe, [
              t[0] || (t[0] = s("div", { class: "flex-fill" }, "username", -1)),
              s("div", Be, [
                s("a", {
                  href: n.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Pe)
              ])
            ])
          ])
        ])) : f("", !0),
        s("div", {
          class: p([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), r("a", Ue, t[1] || (t[1] = [
            s("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ]))) : f("", !0),
          s("div", {
            class: p(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ce(u, {
              to: n.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: fe(() => [
                v(m(n.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      s("div", {
        id: "sidebar-nav-collapse",
        class: p(["px-3 flex-fill", [
          i.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (d(), r("nav", Le, [
          c(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = s("ul", { class: "text-white" }, [
              s("li", null, "nav 1"),
              s("li", null, "nav 2"),
              s("li", null, "nav 3"),
              s("li", null, "nav 4")
            ], -1))
          ])
        ])) : f("", !0),
        e.$slots.aside ? (d(), r("aside", Ye, [
          c(e.$slots, "aside", {}, () => [
            t[3] || (t[3] = v("this is aside content"))
          ])
        ])) : f("", !0)
      ], 2),
      t[4] || (t[4] = s("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    s("div", {
      id: "scrollbody",
      class: p([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      s("div", {
        class: p([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        s("main", Ze, [
          c(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), r("footer", Fe, [
          c(e.$slots, "footer", {}, () => [
            s("div", qe, [
              t[5] || (t[5] = W('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Os = /* @__PURE__ */ M(De, [["render", Ge]]), Je = {
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
}, Ve = {
  key: 0,
  class: "w-100"
}, We = { class: "w-100" }, ze = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, Qe = { class: "container-xl" }, He = { class: "axdd-topbar-brand" }, Xe = { class: "container-xl axdd-topbar-logo" }, Ke = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, et = ["href"], tt = { class: "container-xl" }, st = { class: "row" }, nt = {
  key: 0,
  role: "navigation"
}, it = { key: 1 }, lt = { class: "col-xl" }, ot = { key: 0 }, at = {
  key: 1,
  class: "col-sm col-xl-3"
}, rt = { class: "w-100" }, dt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, ut = { class: "container-xl" }, ct = { class: "text-white font-weight-light py-3" };
function ft(e, t, n, l, o, i) {
  return d(), r("div", {
    class: p([n.topbarClass + [n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    e.$slots.system ? (d(), r("div", Ve, [
      c(e.$slots, "system", {}, () => [
        t[0] || (t[0] = v("System messages"))
      ])
    ])) : f("", !0),
    s("header", We, [
      e.$slots.profile ? (d(), r("div", ze, [
        s("div", Qe, [
          c(e.$slots, "profile", {}, () => [
            t[1] || (t[1] = v("Welcome!"))
          ])
        ])
      ])) : f("", !0),
      s("div", He, [
        s("div", Xe, [
          e.$slots.navigation ? (d(), r("a", Ke, t[2] || (t[2] = [
            s("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ]))) : f("", !0),
          s("div", {
            class: p(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            s("a", {
              href: n.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, m(n.appName), 9, et)
          ], 2)
        ])
      ])
    ]),
    s("div", {
      class: p([n.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      s("div", tt, [
        s("div", st, [
          e.$slots.navigation ? (d(), r("div", {
            key: 0,
            style: V(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            s("div", {
              id: "topbar-nav-collapse",
              class: p([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              e.$slots.navigation ? (d(), r("nav", nt, [
                c(e.$slots, "navigation")
              ])) : f("", !0),
              e.$slots.navigation && e.$slots.aside ? (d(), r("aside", it, [
                c(e.$slots, "aside", {}, () => [
                  t[3] || (t[3] = v("Aside content"))
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          s("main", lt, [
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
          !e.$slots.navigation && e.$slots.aside ? (d(), r("aside", at, [
            c(e.$slots, "aside", {}, () => [
              t[5] || (t[5] = v("Aside content"))
            ])
          ])) : f("", !0)
        ])
      ])
    ], 2),
    s("footer", rt, [
      e.$slots.footer ? (d(), r("div", dt, [
        s("div", ut, [
          c(e.$slots, "footer", {}, () => [
            s("div", ct, [
              t[6] || (t[6] = W('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              s("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const Bs = /* @__PURE__ */ M(Je, [["render", ft]]), Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC", mt = {
  inject: ["mq"],
  props: {
    appName: {
      type: String,
      default: "appName"
    },
    appDeptName: {
      type: String
    },
    appRootUrl: {
      type: String,
      default: "#"
    },
    isPreview: {
      type: Boolean,
      default: !1
    }
  }
}, pt = { class: "w-100 bg-spirit-purple" }, gt = { class: "sol-topbar-brand" }, bt = { class: "container-xl" }, ht = { class: "d-flex justify-content-between align-items-center" }, vt = { class: "w-50 d-flex align-items-center my-4" }, yt = { class: "text-white d-flex flex-column" }, wt = {
  key: 0,
  class: "fw-light text-nowrap mb-1 lh-1"
}, xt = ["href"], St = { class: "w-50 d-flex justify-content-end align-items-center" }, kt = {
  key: 0,
  class: "navbar navbar-expand-xl w-100 p-0 bg-husky-purple",
  "data-bs-theme": "dark"
}, _t = { class: "container-xl" }, At = {
  class: "collapse navbar-collapse",
  id: "navbarToggler"
}, Nt = { class: "container-xl flex-fill" }, $t = { class: "row" }, Mt = { class: "col" }, Tt = {
  key: 0,
  class: "col-sm-12 col-xl-3"
}, It = { class: "bg-dark w-100" }, Ct = { class: "container-xl" }, Et = { class: "row" }, jt = { class: "col small font-weight-light my-4" }, Dt = { class: "text-light" };
function Rt(e, t, n, l, o, i) {
  return d(), r("div", {
    class: p([[n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column sol-topbar"])
  }, [
    s("header", pt, [
      s("div", gt, [
        s("div", bt, [
          s("div", ht, [
            s("div", vt, [
              t[0] || (t[0] = s("div", { class: "d-xl-none border-end pe-3 me-3" }, [
                s("img", {
                  src: Q,
                  class: "my-1",
                  style: { height: "40px" }
                })
              ], -1)),
              t[1] || (t[1] = s("div", {
                class: "d-none d-xl-block border-end pe-3 me-3",
                style: { "margin-left": "-75px" }
              }, [
                s("img", {
                  src: Q,
                  class: "my-1",
                  style: { height: "40px" }
                })
              ], -1)),
              s("div", yt, [
                n.appDeptName ? (d(), r("div", wt, m(n.appDeptName), 1)) : f("", !0),
                s("a", {
                  href: n.appRootUrl,
                  class: "ff-encode-sans text-white text-decoration-none fs-3 fw-medium lh-1"
                }, m(n.appName), 9, xt)
              ])
            ]),
            s("div", St, [
              e.$slots.settings ? c(e.$slots, "settings", { key: 0 }, () => [
                t[2] || (t[2] = v("user info"))
              ]) : f("", !0),
              t[3] || (t[3] = s("a", {
                class: "ms-1 btn btn-link btn-sm d-xl-none py-0 py-1 text-white",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarToggler",
                "aria-controls": "navbarToggler",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              }, [
                s("i", { class: "bi bi-list text-light fs-3" })
              ], -1))
            ])
          ])
        ])
      ])
    ]),
    e.$slots.navigation ? (d(), r("nav", kt, [
      s("div", _t, [
        s("div", At, [
          c(e.$slots, "navigation", {}, () => [
            t[4] || (t[4] = v("navigation bar"))
          ])
        ])
      ])
    ])) : f("", !0),
    s("div", Nt, [
      s("div", $t, [
        s("main", Mt, [
          c(e.$slots, "main", {}, () => [
            t[5] || (t[5] = s("div", { style: { outline: "dashed 1px lightgray" } }, [
              s("h1", null, "Hello world..."),
              s("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
            ], -1))
          ])
        ]),
        e.$slots.aside ? (d(), r("aside", Tt, [
          c(e.$slots, "aside", {}, () => [
            t[6] || (t[6] = v("aside content"))
          ])
        ])) : f("", !0)
      ])
    ]),
    s("footer", It, [
      s("div", Ct, [
        e.$slots.footer ? c(e.$slots, "footer", { key: 0 }, () => [
          s("div", Et, [
            s("div", jt, [
              t[7] || (t[7] = W('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light">Terms</a></li></ul>', 1)),
              s("div", Dt, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ]) : f("", !0)
      ])
    ])
  ], 2);
}
const Ps = /* @__PURE__ */ M(mt, [["render", Rt]]), Ot = {
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
}, Bt = {
  key: 0,
  class: "d-flex border rounded-2 px-3"
}, Pt = { class: "flex-fill dropdown" }, Ut = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Lt = { class: "me-1" }, Yt = { class: "text-decoration-underline" }, Zt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Ft = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, qt = {
  key: 0,
  class: "small text-danger"
}, Gt = { class: "small" }, Jt = { class: "small" }, Vt = ["href"], Wt = ["href"], zt = {
  key: 1,
  class: "d-flex align-items-center text-nowrap"
}, Qt = {
  key: 0,
  class: "flex-fill text-white"
}, Ht = { class: "me-1" }, Xt = {
  key: 1,
  class: "flex-fill text-white"
}, Kt = { class: "flex-fill text-end ms-2" }, es = ["href"];
function ts(e, t, n, l, o, i) {
  return n.variant === "flyout" ? (d(), r("div", Bt, [
    s("div", Pt, [
      n.userOverride ? (d(), r("a", Ut, [
        s("span", Lt, m(n.userNetid), 1),
        t[0] || (t[0] = s("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        s("span", Yt, m(n.userOverride), 1)
      ])) : (d(), r("a", Zt, m(n.userNetid), 1)),
      s("div", Ft, [
        n.userOverride ? (d(), r("p", qt, [
          t[1] || (t[1] = v(" overriding as ")),
          t[2] || (t[2] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          v(" " + m(n.userOverride), 1)
        ])) : f("", !0),
        s("p", Gt, m(n.userOfficialName) + ", " + m(n.userPreferredName) + ", " + m(n.userPronouns), 1),
        s("p", Jt, [
          s("a", { href: n.profileUrl }, "go to profile", 8, Vt)
        ]),
        s("div", null, [
          n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
            s("a", {
              href: n.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, Wt)
          ]) : c(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = s("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (d(), r("div", zt, [
    n.userOverride ? (d(), r("div", Qt, [
      s("span", Ht, m(n.userNetid), 1),
      t[4] || (t[4] = s("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      v(" " + m(n.userOverride), 1)
    ])) : (d(), r("div", Xt, m(n.userNetid), 1)),
    s("div", Kt, [
      n.signoutUrl ? c(e.$slots, "default", { key: 0 }, () => [
        s("a", {
          href: n.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, es)
      ]) : c(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = s("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const Us = /* @__PURE__ */ M(Ot, [["render", ts]]);
function ne(e) {
  return be() ? (he(e), !0) : !1;
}
function F(e) {
  return typeof e == "function" ? e() : ge(e);
}
const ss = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ns = Object.prototype.toString, is = (e) => ns.call(e) === "[object Object]", ie = () => {
};
function ls(e, t) {
  function n(...l) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(i);
    });
  }
  return n;
}
const le = (e) => e();
function os(e = le) {
  const t = O(!0);
  function n() {
    t.value = !1;
  }
  function l() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: K(t), pause: n, resume: l, eventFilter: o };
}
function as(e) {
  return se();
}
function rs(...e) {
  if (e.length !== 1)
    return me(...e);
  const t = e[0];
  return typeof t == "function" ? K(pe(() => ({ get: t, set: ie }))) : O(t);
}
function ds(e, t, n = {}) {
  const {
    eventFilter: l = le,
    ...o
  } = n;
  return z(
    e,
    ls(
      l,
      t
    ),
    o
  );
}
function us(e, t, n = {}) {
  const {
    eventFilter: l,
    ...o
  } = n, { eventFilter: i, pause: u, resume: k, isActive: N } = os(l);
  return { stop: ds(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: u, resume: k, isActive: N };
}
function oe(e, t = !0, n) {
  as() ? ee(e, n) : t ? e() : te(e);
}
function ae(e) {
  var t;
  const n = F(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const R = ss ? window : void 0;
function H(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = R) : [t, n, l, o] = e, !t)
    return ie;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const i = [], u = () => {
    i.forEach((y) => y()), i.length = 0;
  }, k = (y, g, T, S) => (y.addEventListener(g, T, S), () => y.removeEventListener(g, T, S)), N = z(
    () => [ae(t), F(o)],
    ([y, g]) => {
      if (u(), !y)
        return;
      const T = is(g) ? { ...g } : g;
      i.push(
        ...n.flatMap((S) => l.map((_) => k(y, S, _, T)))
      );
    },
    { immediate: !0, flush: "post" }
  ), x = () => {
    N(), u();
  };
  return ne(x), x;
}
function cs() {
  const e = O(!1), t = se();
  return t && ee(() => {
    e.value = !0;
  }, t), e;
}
function fs(e) {
  const t = cs();
  return Z(() => (t.value, !!e()));
}
function ms(e, t = {}) {
  const { window: n = R } = t, l = fs(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = O(!1), u = (x) => {
    i.value = x.matches;
  }, k = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", u) : o.removeListener(u));
  }, N = ye(() => {
    l.value && (k(), o = n.matchMedia(F(e)), "addEventListener" in o ? o.addEventListener("change", u) : o.addListener(u), i.value = o.matches);
  });
  return ne(() => {
    N(), k(), o = void 0;
  }), i;
}
const L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", ps = /* @__PURE__ */ gs();
function gs() {
  return Y in L || (L[Y] = L[Y] || {}), L[Y];
}
function re(e, t) {
  return ps[e] || t;
}
function bs(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const hs = {
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
}, X = "vueuse-storage";
function vs(e, t, n, l = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: u = !0,
    listenToStorageChanges: k = !0,
    writeDefaults: N = !0,
    mergeDefaults: x = !1,
    shallow: y,
    window: g = R,
    eventFilter: T,
    onError: S = (a) => {
      console.error(a);
    },
    initOnMounted: _
  } = l, w = (y ? ve : O)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = re("getDefaultStorage", () => {
        var a;
        return (a = R) == null ? void 0 : a.localStorage;
      })();
    } catch (a) {
      S(a);
    }
  if (!n)
    return w;
  const $ = F(t), D = bs($), I = (o = l.serializer) != null ? o : hs[D], { pause: B, resume: b } = us(
    w,
    () => P(w.value),
    { flush: i, deep: u, eventFilter: T }
  );
  g && k && oe(() => {
    H(g, "storage", A), H(g, X, U), _ && A();
  }), _ || A();
  function C(a, h) {
    g && g.dispatchEvent(new CustomEvent(X, {
      detail: {
        key: e,
        oldValue: a,
        newValue: h,
        storageArea: n
      }
    }));
  }
  function P(a) {
    try {
      const h = n.getItem(e);
      if (a == null)
        C(h, null), n.removeItem(e);
      else {
        const E = I.write(a);
        h !== E && (n.setItem(e, E), C(h, E));
      }
    } catch (h) {
      S(h);
    }
  }
  function j(a) {
    const h = a ? a.newValue : n.getItem(e);
    if (h == null)
      return N && $ != null && n.setItem(e, I.write($)), $;
    if (!a && x) {
      const E = I.read(h);
      return typeof x == "function" ? x(E, $) : D === "object" && !Array.isArray(E) ? { ...$, ...E } : E;
    } else return typeof h != "string" ? h : I.read(h);
  }
  function A(a) {
    if (!(a && a.storageArea !== n)) {
      if (a && a.key == null) {
        w.value = $;
        return;
      }
      if (!(a && a.key !== e)) {
        B();
        try {
          (a == null ? void 0 : a.newValue) !== I.write(w.value) && (w.value = j(a));
        } catch (h) {
          S(h);
        } finally {
          a ? te(b) : b();
        }
      }
    }
  }
  function U(a) {
    A(a.detail);
  }
  return w;
}
function ys(e) {
  return ms("(prefers-color-scheme: dark)", e);
}
function ws(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: l = "auto",
    window: o = R,
    storage: i,
    storageKey: u = "vueuse-color-scheme",
    listenToStorageChanges: k = !0,
    storageRef: N,
    emitAuto: x,
    disableTransition: y = !0
  } = e, g = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, T = ys({ window: o }), S = Z(() => T.value ? "dark" : "light"), _ = N || (u == null ? rs(l) : vs(u, l, i, { window: o, listenToStorageChanges: k })), w = Z(() => _.value === "auto" ? S.value : _.value), $ = re(
    "updateHTMLAttrs",
    (b, C, P) => {
      const j = typeof b == "string" ? o == null ? void 0 : o.document.querySelector(b) : ae(b);
      if (!j)
        return;
      let A;
      if (y && (A = o.document.createElement("style"), A.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(A)), C === "class") {
        const U = P.split(/\s/g);
        Object.values(g).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
          U.includes(a) ? j.classList.add(a) : j.classList.remove(a);
        });
      } else
        j.setAttribute(C, P);
      y && (o.getComputedStyle(A).opacity, document.head.removeChild(A));
    }
  );
  function D(b) {
    var C;
    $(t, n, (C = g[b]) != null ? C : b);
  }
  function I(b) {
    e.onChanged ? e.onChanged(b, D) : D(b);
  }
  z(w, I, { flush: "post", immediate: !0 }), oe(() => I(w.value));
  const B = Z({
    get() {
      return x ? _.value : w.value;
    },
    set(b) {
      _.value = b;
    }
  });
  try {
    return Object.assign(B, { store: _, system: S, state: w });
  } catch {
    return B;
  }
}
const xs = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: ws({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, Ss = { class: "d-flex align-items-center" }, ks = {
  class: "btn btn-link text-white dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, _s = { class: "bi bi-brightness-high-fill" }, As = { class: "bi bi-moon-stars-fill" }, Ns = { class: "bi bi-circle-half" }, $s = { class: "dropdown-menu p-1" }, Ms = { class: "mb-1" }, Ts = { class: "mb-1" };
function Is(e, t, n, l, o, i) {
  return d(), r("div", Ss, [
    s("div", null, [
      s("button", ks, [
        q(s("i", _s, null, 512), [
          [G, l.colorMode == "light"]
        ]),
        q(s("i", As, null, 512), [
          [G, l.colorMode == "dark"]
        ]),
        q(s("i", Ns, null, 512), [
          [G, l.colorMode == "auto"]
        ])
      ]),
      s("ul", $s, [
        s("li", Ms, [
          s("a", {
            class: p(["dropdown-item rounded", l.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[0] || (t[0] = (u) => l.colorMode = "light")
          }, t[3] || (t[3] = [
            s("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            v(" Light")
          ]), 2)
        ]),
        s("li", Ts, [
          s("a", {
            class: p(["dropdown-item rounded", l.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[1] || (t[1] = (u) => l.colorMode = "dark")
          }, t[4] || (t[4] = [
            s("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            v(" Dark")
          ]), 2)
        ]),
        s("li", null, [
          s("a", {
            class: p(["dropdown-item rounded", l.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[2] || (t[2] = (u) => l.colorMode = "auto")
          }, t[5] || (t[5] = [
            s("i", { class: "bi bi-circle-half" }, null, -1),
            v(" Auto")
          ]), 2)
        ])
      ])
    ])
  ]);
}
const Ls = /* @__PURE__ */ M(xs, [["render", Is]]);
export {
  Ls as SColorMode,
  Us as SProfile,
  Os as SSidebar,
  js as STabsDisplay,
  Ds as STabsItem,
  Es as STabsList,
  Rs as STabsPanel,
  Bs as STopbar,
  Ps as STopbarNeo
};
