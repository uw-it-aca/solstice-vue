import { createElementBlock as a, createCommentVNode as f, openBlock as r, renderSlot as u, createElementVNode as n, withKeys as J, normalizeClass as p, withModifiers as re, resolveComponent as de, normalizeStyle as W, createVNode as ue, withCtx as ce, createTextVNode as g, toDisplayString as m, createStaticVNode as H, toRef as fe, readonly as X, ref as O, customRef as me, onMounted as K, nextTick as ee, unref as pe, getCurrentInstance as te, getCurrentScope as ge, onScopeDispose as be, watch as V, computed as Z, shallowRef as he, watchEffect as ve, withDirectives as q, vShow as G } from "vue";
const $ = (e, t) => {
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
  return s.variant == "underline" ? (r(), a("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, we)) : s.variant == "pills" ? (r(), a("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, xe)) : f("", !0);
}
const Ls = /* @__PURE__ */ $(ye, [["render", Se]]), _e = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, ke = ["id"];
function Ae(e, t, s, l, o, i) {
  return r(), a("div", {
    class: "tab-content",
    id: s.tabsId + "Content"
  }, [
    u(e.$slots, "default")
  ], 8, ke);
}
const Bs = /* @__PURE__ */ $(_e, [["render", Ae]]), Ne = {
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
}, Me = {
  class: "nav-item",
  role: "presentation"
}, $e = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Te(e, t, s, l, o, i) {
  return r(), a("li", Me, [
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
    ], 42, $e)
  ]);
}
const Ps = /* @__PURE__ */ $(Ne, [["render", Te]]), Ie = {
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
  return r(), a("div", {
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
const Ys = /* @__PURE__ */ $(Ie, [["render", Ee]]), Re = {
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
}, De = { class: "d-flex" }, Oe = { class: "flex-fill text-end" }, Ue = ["href"], Le = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Be = {
  key: 0,
  role: "navigation"
}, Pe = {
  key: 1,
  class: "mb-3 text-light"
}, Ye = { class: "flex-fill" }, Ze = { key: 0 }, Fe = { class: "font-weight-light py-3 small" };
function qe(e, t, s, l, o, i) {
  const c = de("router-link");
  return r(), a("div", {
    class: p([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: W([s.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: p([s.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: W([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (r(), a("div", je, [
          u(e.$slots, "profile", {}, () => [
            n("div", De, [
              t[0] || (t[0] = n("div", { class: "flex-fill" }, "username", -1)),
              n("div", Oe, [
                n("a", {
                  href: s.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, Ue)
              ])
            ])
          ])
        ])) : f("", !0),
        n("div", {
          class: p([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (r(), a("a", Le, t[1] || (t[1] = [
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
        e.$slots.navigation ? (r(), a("nav", Be, [
          u(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = n("ul", { class: "text-white" }, [
              n("li", null, "nav 1"),
              n("li", null, "nav 2"),
              n("li", null, "nav 3"),
              n("li", null, "nav 4")
            ], -1))
          ])
        ])) : f("", !0),
        e.$slots.aside ? (r(), a("aside", Pe, [
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
        e.$slots.footer ? (r(), a("footer", Ze, [
          u(e.$slots, "footer", {}, () => [
            n("div", Fe, [
              t[5] || (t[5] = H('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : f("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const Zs = /* @__PURE__ */ $(Re, [["render", qe]]), Ge = {
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
  return r(), a("div", {
    class: p([s.topbarClass + [s.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    e.$slots.system ? (r(), a("div", Je, [
      u(e.$slots, "system", {}, () => [
        t[0] || (t[0] = g("System messages"))
      ])
    ])) : f("", !0),
    n("header", We, [
      e.$slots.profile ? (r(), a("div", Ve, [
        n("div", ze, [
          u(e.$slots, "profile", {}, () => [
            t[1] || (t[1] = g("Welcome!"))
          ])
        ])
      ])) : f("", !0),
      n("div", Qe, [
        n("div", He, [
          e.$slots.navigation ? (r(), a("a", Xe, t[2] || (t[2] = [
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
          e.$slots.navigation ? (r(), a("div", {
            key: 0,
            style: W(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: p([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              e.$slots.navigation ? (r(), a("nav", st, [
                u(e.$slots, "navigation")
              ])) : f("", !0),
              e.$slots.navigation && e.$slots.aside ? (r(), a("aside", nt, [
                u(e.$slots, "aside", {}, () => [
                  t[3] || (t[3] = g("Aside content"))
                ])
              ])) : f("", !0)
            ], 2)
          ], 4)) : f("", !0),
          n("main", it, [
            e.$slots.bar ? (r(), a("div", lt, [
              u(e.$slots, "bar")
            ])) : f("", !0),
            u(e.$slots, "main", {}, () => [
              t[4] || (t[4] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
                n("h1", null, "Hello world..."),
                n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
              ], -1))
            ])
          ]),
          !e.$slots.navigation && e.$slots.aside ? (r(), a("aside", ot, [
            u(e.$slots, "aside", {}, () => [
              t[5] || (t[5] = g("Aside content"))
            ])
          ])) : f("", !0)
        ])
      ])
    ], 2),
    n("footer", at, [
      e.$slots.footer ? (r(), a("div", rt, [
        n("div", dt, [
          u(e.$slots, "footer", {}, () => [
            n("div", ut, [
              t[6] || (t[6] = H('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : f("", !0)
    ])
  ], 2);
}
const Fs = /* @__PURE__ */ $(Ge, [["render", ct]]), ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC", mt = {
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
    },
    privacyURL: {
      type: String,
      required: !1,
      default: "https://www.washington.edu/online/privacy/"
    },
    termsURL: {
      type: String,
      required: !1,
      default: "https://www.washington.edu/online/terms/"
    }
  }
}, pt = { class: "w-100 bg-spirit-purple" }, gt = { class: "container-xl" }, bt = { class: "d-flex justify-content-between align-items-center" }, ht = { class: "w-50 d-flex align-items-center my-4" }, vt = { class: "text-white d-flex flex-column" }, yt = {
  key: 0,
  class: "fw-light text-nowrap mb-1 lh-1"
}, wt = ["href"], xt = { class: "w-50 d-flex justify-content-end align-items-center" }, St = {
  key: 0,
  class: "navbar navbar-expand-xl w-100 p-0 py-xl-2 bg-husky-purple"
}, _t = { class: "container-xl" }, kt = {
  class: "collapse navbar-collapse",
  id: "navbarToggler"
}, At = {
  key: 1,
  class: "bg-info-subtle w-100"
}, Nt = { class: "container-xl" }, Mt = { class: "container-xl flex-fill" }, $t = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col-sm-12 col-xl-3"
}, Ct = { class: "bg-dark w-100" }, Et = { class: "container-xl" }, Rt = { class: "row" }, jt = { class: "col small font-weight-light my-4" }, Dt = { class: "list-inline m-0" }, Ot = { class: "list-inline-item" }, Ut = ["href"], Lt = { class: "list-inline-item" }, Bt = ["href"], Pt = { class: "text-light" };
function Yt(e, t, s, l, o, i) {
  return r(), a("div", {
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
              s.appDeptName ? (r(), a("div", yt, m(s.appDeptName), 1)) : f("", !0),
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
    e.$slots.navigation ? (r(), a("nav", St, [
      n("div", _t, [
        n("div", kt, [
          u(e.$slots, "navigation", {}, () => [
            t[3] || (t[3] = g("navigation bar"))
          ])
        ])
      ])
    ])) : f("", !0),
    e.$slots.system ? (r(), a("div", At, [
      n("div", Nt, [
        u(e.$slots, "system", {}, () => [
          t[4] || (t[4] = g("system messages"))
        ])
      ])
    ])) : f("", !0),
    n("div", Mt, [
      n("div", $t, [
        n("main", Tt, [
          u(e.$slots, "main", {}, () => [
            t[5] || (t[5] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
              n("h1", null, "Hello world..."),
              n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
            ], -1))
          ])
        ]),
        e.$slots.aside ? (r(), a("aside", It, [
          u(e.$slots, "aside", {}, () => [
            t[6] || (t[6] = g("aside content"))
          ])
        ])) : f("", !0)
      ])
    ]),
    n("footer", Ct, [
      n("div", Et, [
        e.$slots.footer ? u(e.$slots, "footer", { key: 0 }, () => [
          n("div", Rt, [
            n("div", jt, [
              n("ul", Dt, [
                n("li", Ot, [
                  s.privacyURL ? (r(), a("a", {
                    key: 0,
                    href: s.privacyURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Privacy", 8, Ut)) : f("", !0)
                ]),
                n("li", Lt, [
                  s.termsURL ? (r(), a("a", {
                    key: 0,
                    href: s.termsURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Terms", 8, Bt)) : f("", !0)
                ])
              ]),
              n("div", Pt, " Copyright © " + m((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ]) : f("", !0)
      ])
    ])
  ], 2);
}
const qs = /* @__PURE__ */ $(mt, [["render", Yt]]), Zt = {
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
}, Ft = {
  key: 0,
  class: "d-flex border rounded-2 px-3"
}, qt = { class: "flex-fill dropdown" }, Gt = {
  key: 0,
  class: "text-white text-decoration-none",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Jt = { class: "me-1" }, Wt = { class: "text-decoration-underline" }, Vt = {
  key: 1,
  class: "text-white",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, zt = {
  class: "dropdown-menu p-3 bg-dark border-0 text-white small",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Qt = {
  key: 0,
  class: "small text-danger"
}, Ht = { class: "small" }, Xt = { class: "small" }, Kt = ["href"], es = ["href"], ts = {
  key: 1,
  class: "d-flex align-items-center text-nowrap"
}, ss = {
  key: 0,
  class: "flex-fill text-white"
}, ns = { class: "me-1" }, is = {
  key: 1,
  class: "flex-fill text-white"
}, ls = { class: "flex-fill text-end ms-2" }, os = ["href"];
function as(e, t, s, l, o, i) {
  return s.variant === "flyout" ? (r(), a("div", Ft, [
    n("div", qt, [
      s.userOverride ? (r(), a("a", Gt, [
        n("span", Jt, m(s.userNetid), 1),
        t[0] || (t[0] = n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        n("span", Wt, m(s.userOverride), 1)
      ])) : (r(), a("a", Vt, m(s.userNetid), 1)),
      n("div", zt, [
        s.userOverride ? (r(), a("p", Qt, [
          t[1] || (t[1] = g(" overriding as ")),
          t[2] || (t[2] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          g(" " + m(s.userOverride), 1)
        ])) : f("", !0),
        n("p", Ht, m(s.userOfficialName) + ", " + m(s.userPreferredName) + ", " + m(s.userPronouns), 1),
        n("p", Xt, [
          n("a", { href: s.profileUrl }, "go to profile", 8, Kt)
        ]),
        n("div", null, [
          s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            n("a", {
              href: s.signoutUrl,
              class: "text-white"
            }, "Sign out", 8, es)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = n("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (r(), a("div", ts, [
    s.userOverride ? (r(), a("div", ss, [
      n("span", ns, m(s.userNetid), 1),
      t[4] || (t[4] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      g(" " + m(s.userOverride), 1)
    ])) : (r(), a("div", is, m(s.userNetid), 1)),
    n("div", ls, [
      s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: s.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, os)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = n("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const Gs = /* @__PURE__ */ $(Zt, [["render", as]]);
function se(e) {
  return ge() ? (be(e), !0) : !1;
}
function F(e) {
  return typeof e == "function" ? e() : pe(e);
}
const rs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ds = Object.prototype.toString, us = (e) => ds.call(e) === "[object Object]", ne = () => {
};
function cs(e, t) {
  function s(...l) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(i);
    });
  }
  return s;
}
const ie = (e) => e();
function fs(e = ie) {
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
function ms(e) {
  return te();
}
function ps(...e) {
  if (e.length !== 1)
    return fe(...e);
  const t = e[0];
  return typeof t == "function" ? X(me(() => ({ get: t, set: ne }))) : O(t);
}
function gs(e, t, s = {}) {
  const {
    eventFilter: l = ie,
    ...o
  } = s;
  return V(
    e,
    cs(
      l,
      t
    ),
    o
  );
}
function bs(e, t, s = {}) {
  const {
    eventFilter: l,
    ...o
  } = s, { eventFilter: i, pause: c, resume: _, isActive: N } = fs(l);
  return { stop: gs(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: c, resume: _, isActive: N };
}
function le(e, t = !0, s) {
  ms() ? K(e, s) : t ? e() : ee(e);
}
function oe(e) {
  var t;
  const s = F(e);
  return (t = s == null ? void 0 : s.$el) != null ? t : s;
}
const D = rs ? window : void 0;
function z(...e) {
  let t, s, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([s, l, o] = e, t = D) : [t, s, l, o] = e, !t)
    return ne;
  Array.isArray(s) || (s = [s]), Array.isArray(l) || (l = [l]);
  const i = [], c = () => {
    i.forEach((y) => y()), i.length = 0;
  }, _ = (y, b, T, S) => (y.addEventListener(b, T, S), () => y.removeEventListener(b, T, S)), N = V(
    () => [oe(t), F(o)],
    ([y, b]) => {
      if (c(), !y)
        return;
      const T = us(b) ? { ...b } : b;
      i.push(
        ...s.flatMap((S) => l.map((k) => _(y, S, k, T)))
      );
    },
    { immediate: !0, flush: "post" }
  ), x = () => {
    N(), c();
  };
  return se(x), x;
}
function hs() {
  const e = O(!1), t = te();
  return t && K(() => {
    e.value = !0;
  }, t), e;
}
function vs(e) {
  const t = hs();
  return Z(() => (t.value, !!e()));
}
function ys(e, t = {}) {
  const { window: s = D } = t, l = vs(() => s && "matchMedia" in s && typeof s.matchMedia == "function");
  let o;
  const i = O(!1), c = (x) => {
    i.value = x.matches;
  }, _ = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", c) : o.removeListener(c));
  }, N = ve(() => {
    l.value && (_(), o = s.matchMedia(F(e)), "addEventListener" in o ? o.addEventListener("change", c) : o.addListener(c), i.value = o.matches);
  });
  return se(() => {
    N(), _(), o = void 0;
  }), i;
}
const P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", ws = /* @__PURE__ */ xs();
function xs() {
  return Y in P || (P[Y] = P[Y] || {}), P[Y];
}
function ae(e, t) {
  return ws[e] || t;
}
function Ss(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const _s = {
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
function ks(e, t, s, l = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: c = !0,
    listenToStorageChanges: _ = !0,
    writeDefaults: N = !0,
    mergeDefaults: x = !1,
    shallow: y,
    window: b = D,
    eventFilter: T,
    onError: S = (d) => {
      console.error(d);
    },
    initOnMounted: k
  } = l, w = (y ? he : O)(typeof t == "function" ? t() : t);
  if (!s)
    try {
      s = ae("getDefaultStorage", () => {
        var d;
        return (d = D) == null ? void 0 : d.localStorage;
      })();
    } catch (d) {
      S(d);
    }
  if (!s)
    return w;
  const M = F(t), j = Ss(M), I = (o = l.serializer) != null ? o : _s[j], { pause: U, resume: h } = bs(
    w,
    () => L(w.value),
    { flush: i, deep: c, eventFilter: T }
  );
  b && _ && le(() => {
    z(b, "storage", A), z(b, Q, B), k && A();
  }), k || A();
  function C(d, v) {
    b && b.dispatchEvent(new CustomEvent(Q, {
      detail: {
        key: e,
        oldValue: d,
        newValue: v,
        storageArea: s
      }
    }));
  }
  function L(d) {
    try {
      const v = s.getItem(e);
      if (d == null)
        C(v, null), s.removeItem(e);
      else {
        const E = I.write(d);
        v !== E && (s.setItem(e, E), C(v, E));
      }
    } catch (v) {
      S(v);
    }
  }
  function R(d) {
    const v = d ? d.newValue : s.getItem(e);
    if (v == null)
      return N && M != null && s.setItem(e, I.write(M)), M;
    if (!d && x) {
      const E = I.read(v);
      return typeof x == "function" ? x(E, M) : j === "object" && !Array.isArray(E) ? { ...M, ...E } : E;
    } else return typeof v != "string" ? v : I.read(v);
  }
  function A(d) {
    if (!(d && d.storageArea !== s)) {
      if (d && d.key == null) {
        w.value = M;
        return;
      }
      if (!(d && d.key !== e)) {
        U();
        try {
          (d == null ? void 0 : d.newValue) !== I.write(w.value) && (w.value = R(d));
        } catch (v) {
          S(v);
        } finally {
          d ? ee(h) : h();
        }
      }
    }
  }
  function B(d) {
    A(d.detail);
  }
  return w;
}
function As(e) {
  return ys("(prefers-color-scheme: dark)", e);
}
function Ns(e = {}) {
  const {
    selector: t = "html",
    attribute: s = "class",
    initialValue: l = "auto",
    window: o = D,
    storage: i,
    storageKey: c = "vueuse-color-scheme",
    listenToStorageChanges: _ = !0,
    storageRef: N,
    emitAuto: x,
    disableTransition: y = !0
  } = e, b = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, T = As({ window: o }), S = Z(() => T.value ? "dark" : "light"), k = N || (c == null ? ps(l) : ks(c, l, i, { window: o, listenToStorageChanges: _ })), w = Z(() => k.value === "auto" ? S.value : k.value), M = ae(
    "updateHTMLAttrs",
    (h, C, L) => {
      const R = typeof h == "string" ? o == null ? void 0 : o.document.querySelector(h) : oe(h);
      if (!R)
        return;
      let A;
      if (y && (A = o.document.createElement("style"), A.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(A)), C === "class") {
        const B = L.split(/\s/g);
        Object.values(b).flatMap((d) => (d || "").split(/\s/g)).filter(Boolean).forEach((d) => {
          B.includes(d) ? R.classList.add(d) : R.classList.remove(d);
        });
      } else
        R.setAttribute(C, L);
      y && (o.getComputedStyle(A).opacity, document.head.removeChild(A));
    }
  );
  function j(h) {
    var C;
    M(t, s, (C = b[h]) != null ? C : h);
  }
  function I(h) {
    e.onChanged ? e.onChanged(h, j) : j(h);
  }
  V(w, I, { flush: "post", immediate: !0 }), le(() => I(w.value));
  const U = Z({
    get() {
      return x ? k.value : w.value;
    },
    set(h) {
      k.value = h;
    }
  });
  try {
    return Object.assign(U, { store: k, system: S, state: w });
  } catch {
    return U;
  }
}
const Ms = {
  // composition in options api requires setup()
  setup() {
    return { colorMode: Ns({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, $s = { class: "d-flex align-items-center" }, Ts = {
  class: "btn btn-link text-white dropdown-toggle p-1",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  "aria-label": "Choose color mode"
}, Is = { class: "bi bi-brightness-high-fill" }, Cs = { class: "bi bi-moon-stars-fill" }, Es = { class: "bi bi-circle-half" }, Rs = { class: "dropdown-menu p-1" }, js = { class: "mb-1" }, Ds = { class: "mb-1" };
function Os(e, t, s, l, o, i) {
  return r(), a("div", $s, [
    n("div", null, [
      n("button", Ts, [
        q(n("i", Is, null, 512), [
          [G, l.colorMode == "light"]
        ]),
        q(n("i", Cs, null, 512), [
          [G, l.colorMode == "dark"]
        ]),
        q(n("i", Es, null, 512), [
          [G, l.colorMode == "auto"]
        ])
      ]),
      n("ul", Rs, [
        n("li", js, [
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
        n("li", Ds, [
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
const Js = /* @__PURE__ */ $(Ms, [["render", Os]]);
export {
  Js as SColorMode,
  Gs as SProfile,
  Zs as SSidebar,
  Bs as STabsDisplay,
  Ps as STabsItem,
  Ls as STabsList,
  Ys as STabsPanel,
  Fs as STopbar,
  qs as STopbarNeo
};
