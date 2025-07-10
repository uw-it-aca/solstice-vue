import { createElementBlock as r, createCommentVNode as f, openBlock as d, renderSlot as u, createElementVNode as n, withKeys as J, normalizeClass as p, withModifiers as re, resolveComponent as de, normalizeStyle as W, createVNode as ue, withCtx as ce, createTextVNode as g, toDisplayString as m, createStaticVNode as V, toRef as fe, readonly as X, ref as O, customRef as me, onMounted as K, nextTick as ee, unref as pe, getCurrentInstance as te, getCurrentScope as ge, onScopeDispose as be, watch as z, computed as Z, shallowRef as he, watchEffect as ve, withDirectives as q, vShow as G } from "vue";
const M = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, o] of t)
    s[l] = o;
  return s;
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
}, we = ["id"], xe = ["id"];
function Se(e, t, s, l, o, i) {
  return s.variant == "underline" ? (d(), r("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, we)) : s.variant == "pills" ? (d(), r("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, xe)) : f("", !0);
}
const js = /* @__PURE__ */ M(ye, [["render", Se]]), ke = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, _e = ["id"];
function Ae(e, t, s, l, o, i) {
  return d(), r("div", {
    class: "tab-content",
    id: s.tabsId + "Content"
  }, [
    u(e.$slots, "default")
  ], 8, _e);
}
const Ds = /* @__PURE__ */ M(ke, [["render", Ae]]), Ne = {
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
      this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((t, s) => {
        s == e ? t.tabIndex = 0 : t.tabIndex = -1;
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
}, $e = {
  class: "nav-item",
  role: "presentation"
}, Me = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Te(e, t, s, l, o, i) {
  return d(), r("li", $e, [
    n("a", {
      class: p(["nav-link", i.classObject]),
      href: "#",
      tabindex: [s.activeTab ? "0" : "-1"],
      id: s.panelId + "-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#" + s.panelId,
      type: "button",
      role: "tab",
      "aria-controls": s.panelId,
      "aria-selected": s.activeTab,
      onKeydown: [
        t[0] || (t[0] = J((...c) => i.moveNext && i.moveNext(...c), ["right"])),
        t[1] || (t[1] = J((...c) => i.movePrev && i.movePrev(...c), ["left"]))
      ],
      onClick: t[2] || (t[2] = (...c) => i.onClick && i.onClick(...c))
    }, [
      u(e.$slots, "default")
    ], 42, Me)
  ]);
}
const Rs = /* @__PURE__ */ M(Ne, [["render", Te]]), Ie = {
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
}, Ce = ["id", "aria-labelledby"];
function Ee(e, t, s, l, o, i) {
  return d(), r("div", {
    class: p(["tab-pane fade", { "show active": s.activePanel }]),
    id: s.panelId,
    role: "tabpanel",
    "aria-labelledby": s.panelId + "-tab",
    tabindex: "0",
    onKeydown: t[0] || (t[0] = J(re((...c) => i.setFocus && i.setFocus(...c), ["shift", "prevent"]), ["tab"]))
  }, [
    u(e.$slots, "default")
  ], 42, Ce);
}
const Os = /* @__PURE__ */ M(Ie, [["render", Ee]]), je = {
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
}, De = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Re = { class: "d-flex" }, Oe = { class: "flex-fill text-end" }, Be = ["href"], Pe = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ue = {
  key: 0,
  role: "navigation"
}, Le = {
  key: 1,
  class: "mb-3 text-light"
}, Ye = { class: "flex-fill" }, Ze = { key: 0 }, Fe = { class: "font-weight-light py-3 small" };
function qe(e, t, s, l, o, i) {
  const c = de("router-link");
  return d(), r("div", {
    class: p([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: W([s.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: p([s.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: W([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (d(), r("div", De, [
          u(e.$slots, "profile", {}, () => [
            n("div", Re, [
              t[0] || (t[0] = n("div", { class: "flex-fill" }, "username", -1)),
              n("div", Oe, [
                n("a", {
                  href: s.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Be)
              ])
            ])
          ])
        ])) : f("", !0),
        n("div", {
          class: p([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (d(), r("a", Pe, t[1] || (t[1] = [
            n("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ]))) : f("", !0),
          n("div", {
            class: p(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ue(c, {
              to: s.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: ce(() => [
                g(m(s.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      n("div", {
        id: "sidebar-nav-collapse",
        class: p(["px-3 flex-fill", [
          i.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (d(), r("nav", Ue, [
          u(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = n("ul", { class: "text-white" }, [
              n("li", null, "nav 1"),
              n("li", null, "nav 2"),
              n("li", null, "nav 3"),
              n("li", null, "nav 4")
            ], -1))
          ])
        ])) : f("", !0),
        e.$slots.aside ? (d(), r("aside", Le, [
          u(e.$slots, "aside", {}, () => [
            t[3] || (t[3] = g("this is aside content"))
          ])
        ])) : f("", !0)
      ], 2),
      t[4] || (t[4] = n("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    n("div", {
      id: "scrollbody",
      class: p([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      n("div", {
        class: p([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        n("main", Ye, [
          u(e.$slots, "main")
        ]),
        e.$slots.footer ? (d(), r("footer", Ze, [
          u(e.$slots, "footer", {}, () => [
            n("div", Fe, [
              t[5] || (t[5] = V('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Bs = /* @__PURE__ */ M(je, [["render", qe]]), Ge = {
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
}, We = { class: "w-100" }, Ve = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, ze = { class: "container-xl" }, Qe = { class: "axdd-topbar-brand" }, He = { class: "container-xl axdd-topbar-logo" }, Xe = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Ke = ["href"], et = { class: "container-xl" }, tt = { class: "row" }, st = {
  key: 0,
  role: "navigation"
}, nt = { key: 1 }, it = { class: "col-xl" }, lt = { key: 0 }, ot = {
  key: 1,
  class: "col-sm col-xl-3"
}, at = { class: "w-100" }, rt = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, dt = { class: "container-xl" }, ut = { class: "text-white font-weight-light py-3" };
function ct(e, t, s, l, o, i) {
  return d(), r("div", {
    class: p([s.topbarClass + [s.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    e.$slots.system ? (d(), r("div", Je, [
      u(e.$slots, "system", {}, () => [
        t[0] || (t[0] = g("System messages"))
      ])
    ])) : f("", !0),
    n("header", We, [
      e.$slots.profile ? (d(), r("div", Ve, [
        n("div", ze, [
          u(e.$slots, "profile", {}, () => [
            t[1] || (t[1] = g("Welcome!"))
          ])
        ])
      ])) : f("", !0),
      n("div", Qe, [
        n("div", He, [
          e.$slots.navigation ? (d(), r("a", Xe, t[2] || (t[2] = [
            n("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ]))) : f("", !0),
          n("div", {
            class: p(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            n("a", {
              href: s.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, m(s.appName), 9, Ke)
          ], 2)
        ])
      ])
    ]),
    n("div", {
      class: p([s.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      n("div", et, [
        n("div", tt, [
          e.$slots.navigation ? (d(), r("div", {
            key: 0,
            style: W(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: p([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              e.$slots.navigation ? (d(), r("nav", st, [
                u(e.$slots, "navigation")
              ])) : f("", !0),
              e.$slots.navigation && e.$slots.aside ? (d(), r("aside", nt, [
                u(e.$slots, "aside", {}, () => [
                  t[3] || (t[3] = g("Aside content"))
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          n("main", it, [
            e.$slots.bar ? (d(), r("div", lt, [
              u(e.$slots, "bar")
            ])) : f("", !0),
            u(e.$slots, "main", {}, () => [
              t[4] || (t[4] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
                n("h1", null, "Hello world..."),
                n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
              ], -1))
            ])
          ]),
          !e.$slots.navigation && e.$slots.aside ? (d(), r("aside", ot, [
            u(e.$slots, "aside", {}, () => [
              t[5] || (t[5] = g("Aside content"))
            ])
          ])) : f("", !0)
        ])
      ])
    ], 2),
    n("footer", at, [
      e.$slots.footer ? (d(), r("div", rt, [
        n("div", dt, [
          u(e.$slots, "footer", {}, () => [
            n("div", ut, [
              t[6] || (t[6] = V('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const Ps = /* @__PURE__ */ M(Ge, [["render", ct]]), ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC", mt = {
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
}, pt = { class: "w-100 bg-spirit-purple" }, gt = { class: "container-xl" }, bt = { class: "d-flex justify-content-between align-items-center" }, ht = { class: "w-50 d-flex align-items-center my-4" }, vt = { class: "text-white d-flex flex-column" }, yt = {
  key: 0,
  class: "fw-light text-nowrap mb-1 lh-1"
}, wt = ["href"], xt = { class: "w-50 d-flex justify-content-end align-items-center" }, St = {
  key: 0,
  class: "navbar navbar-expand-xl w-100 p-0 py-xl-2 bg-husky-purple",
  "data-bs-theme": "dark"
}, kt = { class: "container-xl" }, _t = {
  class: "collapse navbar-collapse",
  id: "navbarToggler"
}, At = {
  key: 1,
  class: "bg-info-subtle w-100"
}, Nt = { class: "container-xl" }, $t = { class: "container-xl flex-fill" }, Mt = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col-sm-12 col-xl-3"
}, Ct = { class: "bg-dark w-100" }, Et = { class: "container-xl" }, jt = { class: "row" }, Dt = { class: "col small font-weight-light my-4" }, Rt = { class: "text-light" };
function Ot(e, t, s, l, o, i) {
  return d(), r("div", {
    class: p([[s.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column sol-topbar-neo"])
  }, [
    n("header", pt, [
      n("div", gt, [
        n("div", bt, [
          n("div", ht, [
            t[0] || (t[0] = n("div", { class: "border-end border-white border-opacity-25 pe-3 me-3" }, [
              n("img", {
                src: ft,
                alt: "UW logo",
                class: "my-1",
                style: { height: "38px" }
              })
            ], -1)),
            n("div", vt, [
              s.appDeptName ? (d(), r("div", yt, m(s.appDeptName), 1)) : f("", !0),
              n("a", {
                href: s.appRootUrl,
                class: "ff-encode-sans text-white text-nowrap text-decoration-none fs-3 fw-medium lh-1"
              }, m(s.appName), 9, wt)
            ])
          ]),
          n("div", xt, [
            e.$slots.settings ? u(e.$slots, "settings", { key: 0 }, () => [
              t[1] || (t[1] = g("user info"))
            ]) : f("", !0),
            t[2] || (t[2] = n("a", {
              class: "ms-1 btn btn-link btn-sm d-xl-none py-0 py-1 text-white",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#navbarToggler",
              "aria-controls": "navbarToggler",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            }, [
              n("i", { class: "bi bi-list text-light fs-3" })
            ], -1))
          ])
        ])
      ])
    ]),
    e.$slots.navigation ? (d(), r("nav", St, [
      n("div", kt, [
        n("div", _t, [
          u(e.$slots, "navigation", {}, () => [
            t[3] || (t[3] = g("navigation bar"))
          ])
        ])
      ])
    ])) : f("", !0),
    e.$slots.system ? (d(), r("div", At, [
      n("div", Nt, [
        u(e.$slots, "system", {}, () => [
          t[4] || (t[4] = g("system messages"))
        ])
      ])
    ])) : f("", !0),
    n("div", $t, [
      n("div", Mt, [
        n("main", Tt, [
          u(e.$slots, "main", {}, () => [
            t[5] || (t[5] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
              n("h1", null, "Hello world..."),
              n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
            ], -1))
          ])
        ]),
        e.$slots.aside ? (d(), r("aside", It, [
          u(e.$slots, "aside", {}, () => [
            t[6] || (t[6] = g("aside content"))
          ])
        ])) : f("", !0)
      ])
    ]),
    n("footer", Ct, [
      n("div", Et, [
        e.$slots.footer ? u(e.$slots, "footer", { key: 0 }, () => [
          n("div", jt, [
            n("div", Dt, [
              t[7] || (t[7] = V('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light">Terms</a></li></ul>', 1)),
              n("div", Rt, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ]) : f("", !0)
      ])
    ])
  ], 2);
}
const Us = /* @__PURE__ */ M(mt, [["render", Ot]]), Bt = {
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
}, Pt = {
  key: 0,
  class: "d-flex border rounded-2 px-3"
}, Ut = { class: "flex-fill dropdown" }, Lt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Yt = { class: "me-1" }, Zt = { class: "text-decoration-underline" }, Ft = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, qt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Gt = {
  key: 0,
  class: "small text-danger"
}, Jt = { class: "small" }, Wt = { class: "small" }, Vt = ["href"], zt = ["href"], Qt = {
  key: 1,
  class: "d-flex align-items-center text-nowrap"
}, Ht = {
  key: 0,
  class: "flex-fill text-white"
}, Xt = { class: "me-1" }, Kt = {
  key: 1,
  class: "flex-fill text-white"
}, es = { class: "flex-fill text-end ms-2" }, ts = ["href"];
function ss(e, t, s, l, o, i) {
  return s.variant === "flyout" ? (d(), r("div", Pt, [
    n("div", Ut, [
      s.userOverride ? (d(), r("a", Lt, [
        n("span", Yt, m(s.userNetid), 1),
        t[0] || (t[0] = n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        n("span", Zt, m(s.userOverride), 1)
      ])) : (d(), r("a", Ft, m(s.userNetid), 1)),
      n("div", qt, [
        s.userOverride ? (d(), r("p", Gt, [
          t[1] || (t[1] = g(" overriding as ")),
          t[2] || (t[2] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          g(" " + m(s.userOverride), 1)
        ])) : f("", !0),
        n("p", Jt, m(s.userOfficialName) + ", " + m(s.userPreferredName) + ", " + m(s.userPronouns), 1),
        n("p", Wt, [
          n("a", { href: s.profileUrl }, "go to profile", 8, Vt)
        ]),
        n("div", null, [
          s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            n("a", {
              href: s.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, zt)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = n("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (d(), r("div", Qt, [
    s.userOverride ? (d(), r("div", Ht, [
      n("span", Xt, m(s.userNetid), 1),
      t[4] || (t[4] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      g(" " + m(s.userOverride), 1)
    ])) : (d(), r("div", Kt, m(s.userNetid), 1)),
    n("div", es, [
      s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: s.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, ts)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = n("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const Ls = /* @__PURE__ */ M(Bt, [["render", ss]]);
function se(e) {
  return ge() ? (be(e), !0) : !1;
}
function F(e) {
  return typeof e == "function" ? e() : pe(e);
}
const ns = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const is = Object.prototype.toString, ls = (e) => is.call(e) === "[object Object]", ne = () => {
};
function os(e, t) {
  function s(...l) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(i);
    });
  }
  return s;
}
const ie = (e) => e();
function as(e = ie) {
  const t = O(!0);
  function s() {
    t.value = !1;
  }
  function l() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: X(t), pause: s, resume: l, eventFilter: o };
}
function rs(e) {
  return te();
}
function ds(...e) {
  if (e.length !== 1)
    return fe(...e);
  const t = e[0];
  return typeof t == "function" ? X(me(() => ({ get: t, set: ne }))) : O(t);
}
function us(e, t, s = {}) {
  const {
    eventFilter: l = ie,
    ...o
  } = s;
  return z(
    e,
    os(
      l,
      t
    ),
    o
  );
}
function cs(e, t, s = {}) {
  const {
    eventFilter: l,
    ...o
  } = s, { eventFilter: i, pause: c, resume: k, isActive: N } = as(l);
  return { stop: us(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: c, resume: k, isActive: N };
}
function le(e, t = !0, s) {
  rs() ? K(e, s) : t ? e() : ee(e);
}
function oe(e) {
  var t;
  const s = F(e);
  return (t = s == null ? void 0 : s.$el) != null ? t : s;
}
const R = ns ? window : void 0;
function Q(...e) {
  let t, s, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([s, l, o] = e, t = R) : [t, s, l, o] = e, !t)
    return ne;
  Array.isArray(s) || (s = [s]), Array.isArray(l) || (l = [l]);
  const i = [], c = () => {
    i.forEach((y) => y()), i.length = 0;
  }, k = (y, b, T, S) => (y.addEventListener(b, T, S), () => y.removeEventListener(b, T, S)), N = z(
    () => [oe(t), F(o)],
    ([y, b]) => {
      if (c(), !y)
        return;
      const T = ls(b) ? { ...b } : b;
      i.push(
        ...s.flatMap((S) => l.map((_) => k(y, S, _, T)))
      );
    },
    { immediate: !0, flush: "post" }
  ), x = () => {
    N(), c();
  };
  return se(x), x;
}
function fs() {
  const e = O(!1), t = te();
  return t && K(() => {
    e.value = !0;
  }, t), e;
}
function ms(e) {
  const t = fs();
  return Z(() => (t.value, !!e()));
}
function ps(e, t = {}) {
  const { window: s = R } = t, l = ms(() => s && "matchMedia" in s && typeof s.matchMedia == "function");
  let o;
  const i = O(!1), c = (x) => {
    i.value = x.matches;
  }, k = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", c) : o.removeListener(c));
  }, N = ve(() => {
    l.value && (k(), o = s.matchMedia(F(e)), "addEventListener" in o ? o.addEventListener("change", c) : o.addListener(c), i.value = o.matches);
  });
  return se(() => {
    N(), k(), o = void 0;
  }), i;
}
const L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", gs = /* @__PURE__ */ bs();
function bs() {
  return Y in L || (L[Y] = L[Y] || {}), L[Y];
}
function ae(e, t) {
  return gs[e] || t;
}
function hs(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const vs = {
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
}, H = "vueuse-storage";
function ys(e, t, s, l = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: c = !0,
    listenToStorageChanges: k = !0,
    writeDefaults: N = !0,
    mergeDefaults: x = !1,
    shallow: y,
    window: b = R,
    eventFilter: T,
    onError: S = (a) => {
      console.error(a);
    },
    initOnMounted: _
  } = l, w = (y ? he : O)(typeof t == "function" ? t() : t);
  if (!s)
    try {
      s = ae("getDefaultStorage", () => {
        var a;
        return (a = R) == null ? void 0 : a.localStorage;
      })();
    } catch (a) {
      S(a);
    }
  if (!s)
    return w;
  const $ = F(t), D = hs($), I = (o = l.serializer) != null ? o : vs[D], { pause: B, resume: h } = cs(
    w,
    () => P(w.value),
    { flush: i, deep: c, eventFilter: T }
  );
  b && k && le(() => {
    Q(b, "storage", A), Q(b, H, U), _ && A();
  }), _ || A();
  function C(a, v) {
    b && b.dispatchEvent(new CustomEvent(H, {
      detail: {
        key: e,
        oldValue: a,
        newValue: v,
        storageArea: s
      }
    }));
  }
  function P(a) {
    try {
      const v = s.getItem(e);
      if (a == null)
        C(v, null), s.removeItem(e);
      else {
        const E = I.write(a);
        v !== E && (s.setItem(e, E), C(v, E));
      }
    } catch (v) {
      S(v);
    }
  }
  function j(a) {
    const v = a ? a.newValue : s.getItem(e);
    if (v == null)
      return N && $ != null && s.setItem(e, I.write($)), $;
    if (!a && x) {
      const E = I.read(v);
      return typeof x == "function" ? x(E, $) : D === "object" && !Array.isArray(E) ? { ...$, ...E } : E;
    } else return typeof v != "string" ? v : I.read(v);
  }
  function A(a) {
    if (!(a && a.storageArea !== s)) {
      if (a && a.key == null) {
        w.value = $;
        return;
      }
      if (!(a && a.key !== e)) {
        B();
        try {
          (a == null ? void 0 : a.newValue) !== I.write(w.value) && (w.value = j(a));
        } catch (v) {
          S(v);
        } finally {
          a ? ee(h) : h();
        }
      }
    }
  }
  function U(a) {
    A(a.detail);
  }
  return w;
}
function ws(e) {
  return ps("(prefers-color-scheme: dark)", e);
}
function xs(e = {}) {
  const {
    selector: t = "html",
    attribute: s = "class",
    initialValue: l = "auto",
    window: o = R,
    storage: i,
    storageKey: c = "vueuse-color-scheme",
    listenToStorageChanges: k = !0,
    storageRef: N,
    emitAuto: x,
    disableTransition: y = !0
  } = e, b = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, T = ws({ window: o }), S = Z(() => T.value ? "dark" : "light"), _ = N || (c == null ? ds(l) : ys(c, l, i, { window: o, listenToStorageChanges: k })), w = Z(() => _.value === "auto" ? S.value : _.value), $ = ae(
    "updateHTMLAttrs",
    (h, C, P) => {
      const j = typeof h == "string" ? o == null ? void 0 : o.document.querySelector(h) : oe(h);
      if (!j)
        return;
      let A;
      if (y && (A = o.document.createElement("style"), A.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(A)), C === "class") {
        const U = P.split(/\s/g);
        Object.values(b).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
          U.includes(a) ? j.classList.add(a) : j.classList.remove(a);
        });
      } else
        j.setAttribute(C, P);
      y && (o.getComputedStyle(A).opacity, document.head.removeChild(A));
    }
  );
  function D(h) {
    var C;
    $(t, s, (C = b[h]) != null ? C : h);
  }
  function I(h) {
    e.onChanged ? e.onChanged(h, D) : D(h);
  }
  z(w, I, { flush: "post", immediate: !0 }), le(() => I(w.value));
  const B = Z({
    get() {
      return x ? _.value : w.value;
    },
    set(h) {
      _.value = h;
    }
  });
  try {
    return Object.assign(B, { store: _, system: S, state: w });
  } catch {
    return B;
  }
}
const Ss = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: xs({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, ks = { class: "d-flex align-items-center" }, _s = {
  class: "btn btn-link text-white dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, As = { class: "bi bi-brightness-high-fill" }, Ns = { class: "bi bi-moon-stars-fill" }, $s = { class: "bi bi-circle-half" }, Ms = { class: "dropdown-menu p-1" }, Ts = { class: "mb-1" }, Is = { class: "mb-1" };
function Cs(e, t, s, l, o, i) {
  return d(), r("div", ks, [
    n("div", null, [
      n("button", _s, [
        q(n("i", As, null, 512), [
          [G, l.colorMode == "light"]
        ]),
        q(n("i", Ns, null, 512), [
          [G, l.colorMode == "dark"]
        ]),
        q(n("i", $s, null, 512), [
          [G, l.colorMode == "auto"]
        ])
      ]),
      n("ul", Ms, [
        n("li", Ts, [
          n("a", {
            class: p(["dropdown-item rounded", l.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[0] || (t[0] = (c) => l.colorMode = "light")
          }, t[3] || (t[3] = [
            n("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            g(" Light")
          ]), 2)
        ]),
        n("li", Is, [
          n("a", {
            class: p(["dropdown-item rounded", l.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[1] || (t[1] = (c) => l.colorMode = "dark")
          }, t[4] || (t[4] = [
            n("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            g(" Dark")
          ]), 2)
        ]),
        n("li", null, [
          n("a", {
            class: p(["dropdown-item rounded", l.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[2] || (t[2] = (c) => l.colorMode = "auto")
          }, t[5] || (t[5] = [
            n("i", { class: "bi bi-circle-half" }, null, -1),
            g(" Auto")
          ]), 2)
        ])
      ])
    ])
  ]);
}
const Ys = /* @__PURE__ */ M(Ss, [["render", Cs]]);
export {
  Ys as SColorMode,
  Ls as SProfile,
  Bs as SSidebar,
  Ds as STabsDisplay,
  Rs as STabsItem,
  js as STabsList,
  Os as STabsPanel,
  Ps as STopbar,
  Us as STopbarNeo
};
