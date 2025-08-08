import { createElementBlock as a, createCommentVNode as m, openBlock as r, renderSlot as u, createElementVNode as n, withKeys as K, normalizeClass as b, withModifiers as he, resolveComponent as be, normalizeStyle as ee, createVNode as ve, withCtx as ye, createTextVNode as w, toDisplayString as v, createStaticVNode as le, toRef as we, readonly as oe, ref as ae, customRef as Se, onMounted as re, nextTick as de, getCurrentInstance as se, watch as J, getCurrentScope as ke, onScopeDispose as xe, hasInjectionContext as ue, inject as _e, computed as B, shallowRef as Z, toValue as E, watchEffect as Ae, unref as Ne, withDirectives as V, vShow as Q } from "vue";
const C = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, o] of t)
    s[i] = o;
  return s;
}, Me = {
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
}, Te = ["id"], $e = ["id"];
function Ie(e, t, s, i, o, l) {
  return s.variant == "underline" ? (r(), a("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, Te)) : s.variant == "pills" ? (r(), a("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: s.tabsId,
    role: "tablist"
  }, [
    u(e.$slots, "default")
  ], 8, $e)) : m("", !0);
}
const Xs = /* @__PURE__ */ C(Me, [["render", Ie]]), Ce = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Re = ["id"];
function Ee(e, t, s, i, o, l) {
  return r(), a("div", {
    class: "tab-content",
    id: s.tabsId + "Content"
  }, [
    u(e.$slots, "default")
  ], 8, Re);
}
const Ks = /* @__PURE__ */ C(Ce, [["render", Ee]]), je = {
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
}, De = {
  class: "nav-item",
  role: "presentation"
}, Oe = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function Ue(e, t, s, i, o, l) {
  return r(), a("li", De, [
    n("a", {
      class: b(["nav-link", l.classObject]),
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
        t[0] || (t[0] = K((...c) => l.moveNext && l.moveNext(...c), ["right"])),
        t[1] || (t[1] = K((...c) => l.movePrev && l.movePrev(...c), ["left"]))
      ],
      onClick: t[2] || (t[2] = (...c) => l.onClick && l.onClick(...c))
    }, [
      u(e.$slots, "default")
    ], 42, Oe)
  ]);
}
const en = /* @__PURE__ */ C(je, [["render", Ue]]), Be = {
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
}, Pe = ["id", "aria-labelledby"];
function Le(e, t, s, i, o, l) {
  return r(), a("div", {
    id: s.panelId,
    class: b(["tab-pane fade", { "show active": s.activePanel }]),
    role: "tabpanel",
    "aria-labelledby": s.panelId + "-tab",
    tabindex: "0",
    onKeydown: t[0] || (t[0] = K(he((...c) => l.setFocus && l.setFocus(...c), ["shift", "prevent"]), ["tab"]))
  }, [
    u(e.$slots, "default")
  ], 42, Pe);
}
const tn = /* @__PURE__ */ C(Be, [["render", Le]]), Fe = {
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
}, We = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, Ye = { class: "d-flex" }, Ze = { class: "flex-fill text-end" }, qe = ["href"], Ge = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ze = {
  key: 0,
  role: "navigation"
}, Je = {
  key: 1,
  class: "mb-3 text-light"
}, Ve = { class: "flex-fill" }, Qe = { key: 0 }, He = { class: "font-weight-light py-3 small" };
function Xe(e, t, s, i, o, l) {
  const c = be("router-link");
  return r(), a("div", {
    class: b([l.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: ee([s.isPreview ? "min-height: auto !important;" : ""])
  }, [
    n("div", {
      class: b([s.sidebarClass + [l.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: ee([l.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      n("header", null, [
        e.$slots.profile ? (r(), a("div", We, [
          u(e.$slots, "profile", {}, () => [
            n("div", Ye, [
              t[0] || (t[0] = n("div", { class: "flex-fill" }, "username", -1)),
              n("div", Ze, [
                n("a", {
                  href: s.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, qe)
              ])
            ])
          ])
        ])) : m("", !0),
        n("div", {
          class: b([[l.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          e.$slots.navigation ? (r(), a("a", Ge, t[1] || (t[1] = [
            n("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ]))) : m("", !0),
          n("div", {
            class: b(["d-inline align-middle", [l.mq.mdPlus ? "h2" : "h3"]])
          }, [
            ve(c, {
              to: s.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: ye(() => [
                w(v(s.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      n("div", {
        id: "sidebar-nav-collapse",
        class: b(["px-3 flex-fill", [
          l.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        e.$slots.navigation ? (r(), a("nav", ze, [
          u(e.$slots, "navigation", {}, () => [
            t[2] || (t[2] = n("ul", { class: "text-white" }, [
              n("li", null, "nav 1"),
              n("li", null, "nav 2"),
              n("li", null, "nav 3"),
              n("li", null, "nav 4")
            ], -1))
          ])
        ])) : m("", !0),
        e.$slots.aside ? (r(), a("aside", Je, [
          u(e.$slots, "aside", {}, () => [
            t[3] || (t[3] = w("this is aside content", -1))
          ])
        ])) : m("", !0)
      ], 2),
      t[4] || (t[4] = n("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    n("div", {
      id: "scrollbody",
      class: b([[l.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      n("div", {
        class: b([[l.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        n("main", Ve, [
          u(e.$slots, "main")
        ]),
        e.$slots.footer ? (r(), a("footer", Qe, [
          u(e.$slots, "footer", {}, () => [
            n("div", He, [
              t[5] || (t[5] = le('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])) : m("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const sn = /* @__PURE__ */ C(Fe, [["render", Xe]]), Ke = {
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
}, et = {
  key: 0,
  class: "w-100"
}, tt = { class: "w-100" }, st = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, nt = { class: "container-xl" }, it = { class: "axdd-topbar-brand" }, lt = { class: "container-xl axdd-topbar-logo" }, ot = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, at = ["href"], rt = { class: "container-xl" }, dt = { class: "row" }, ut = {
  key: 0,
  role: "navigation"
}, ct = { key: 1 }, ft = { class: "col-xl" }, mt = { key: 0 }, pt = {
  key: 1,
  class: "col-sm col-xl-3"
}, gt = { class: "w-100" }, ht = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, bt = { class: "container-xl" }, vt = { class: "text-white font-weight-light py-3" };
function yt(e, t, s, i, o, l) {
  return r(), a("div", {
    class: b([s.topbarClass + [s.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    e.$slots.system ? (r(), a("div", et, [
      u(e.$slots, "system", {}, () => [
        t[0] || (t[0] = w("System messages", -1))
      ])
    ])) : m("", !0),
    n("header", tt, [
      e.$slots.profile ? (r(), a("div", st, [
        n("div", nt, [
          u(e.$slots, "profile", {}, () => [
            t[1] || (t[1] = w("Welcome!", -1))
          ])
        ])
      ])) : m("", !0),
      n("div", it, [
        n("div", lt, [
          e.$slots.navigation ? (r(), a("a", ot, t[2] || (t[2] = [
            n("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ]))) : m("", !0),
          n("div", {
            class: b(["d-inline align-middle text-white", [l.mq.xlPlus ? "h2" : "h3"]])
          }, [
            n("a", {
              href: s.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, v(s.appName), 9, at)
          ], 2)
        ])
      ])
    ]),
    n("div", {
      class: b([s.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      n("div", rt, [
        n("div", dt, [
          e.$slots.navigation ? (r(), a("div", {
            key: 0,
            style: ee(l.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            n("div", {
              id: "topbar-nav-collapse",
              class: b([l.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              e.$slots.navigation ? (r(), a("nav", ut, [
                u(e.$slots, "navigation")
              ])) : m("", !0),
              e.$slots.navigation && e.$slots.aside ? (r(), a("aside", ct, [
                u(e.$slots, "aside", {}, () => [
                  t[3] || (t[3] = w("Aside content", -1))
                ])
              ])) : m("", !0)
            ], 2)
          ], 4)) : m("", !0),
          n("main", ft, [
            e.$slots.bar ? (r(), a("div", mt, [
              u(e.$slots, "bar")
            ])) : m("", !0),
            u(e.$slots, "main", {}, () => [
              t[4] || (t[4] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
                n("h1", null, "Hello world..."),
                n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
              ], -1))
            ])
          ]),
          !e.$slots.navigation && e.$slots.aside ? (r(), a("aside", pt, [
            u(e.$slots, "aside", {}, () => [
              t[5] || (t[5] = w("Aside content", -1))
            ])
          ])) : m("", !0)
        ])
      ])
    ], 2),
    n("footer", gt, [
      e.$slots.footer ? (r(), a("div", ht, [
        n("div", bt, [
          u(e.$slots, "footer", {}, () => [
            n("div", vt, [
              t[6] || (t[6] = le('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              n("div", null, " Copyright © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ])
      ])) : m("", !0)
    ])
  ], 2);
}
const nn = /* @__PURE__ */ C(Ke, [["render", yt]]), wt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC", St = {
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
}, kt = { class: "w-100 bg-spirit-purple" }, xt = { class: "container-xl" }, _t = { class: "d-flex justify-content-between align-items-center" }, At = { class: "w-50 d-flex align-items-center my-4" }, Nt = { class: "text-white d-flex flex-column" }, Mt = {
  key: 0,
  class: "fw-light text-nowrap mb-1 lh-1"
}, Tt = ["href"], $t = { class: "w-50 d-flex justify-content-end align-items-center" }, It = {
  key: 1,
  class: "ms-1 btn btn-link btn-sm d-xl-none py-0 py-1 text-white",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarToggler",
  "aria-controls": "navbarToggler",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, Ct = {
  key: 0,
  class: "navbar navbar-expand-xl w-100 p-0 py-xl-2 bg-husky-purple"
}, Rt = { class: "container-xl" }, Et = {
  class: "collapse navbar-collapse",
  id: "navbarToggler"
}, jt = {
  key: 1,
  class: "bg-info-subtle w-100"
}, Dt = { class: "container-xl" }, Ot = { class: "container-xl flex-fill" }, Ut = { class: "row" }, Bt = { class: "col" }, Pt = {
  key: 0,
  class: "col-sm-12 col-xl-3"
}, Lt = { class: "bg-dark w-100" }, Ft = { class: "container-xl" }, Wt = { class: "row" }, Yt = { class: "col small font-weight-light my-4" }, Zt = { class: "list-inline m-0" }, qt = { class: "list-inline-item" }, Gt = ["href"], zt = { class: "list-inline-item" }, Jt = ["href"], Vt = { class: "text-light" };
function Qt(e, t, s, i, o, l) {
  return r(), a("div", {
    class: b([[s.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column sol-topbar-neo"])
  }, [
    n("header", kt, [
      n("div", xt, [
        n("div", _t, [
          n("div", At, [
            t[0] || (t[0] = n("div", { class: "border-end border-white border-opacity-25 pe-3 me-3" }, [
              n("img", {
                src: wt,
                alt: "UW logo",
                class: "my-1",
                style: { height: "38px" }
              })
            ], -1)),
            n("div", Nt, [
              s.appDeptName ? (r(), a("div", Mt, v(s.appDeptName), 1)) : m("", !0),
              n("a", {
                href: s.appRootUrl,
                class: "ff-encode-sans text-white text-nowrap text-decoration-none fs-3 fw-medium lh-1"
              }, v(s.appName), 9, Tt)
            ])
          ]),
          n("div", $t, [
            e.$slots.settings ? u(e.$slots, "settings", { key: 0 }, () => [
              t[1] || (t[1] = w("user info", -1))
            ]) : m("", !0),
            e.$slots.navigation ? (r(), a("a", It, t[2] || (t[2] = [
              n("i", { class: "bi bi-list text-light fs-3" }, null, -1)
            ]))) : m("", !0)
          ])
        ])
      ])
    ]),
    e.$slots.navigation ? (r(), a("nav", Ct, [
      n("div", Rt, [
        n("div", Et, [
          u(e.$slots, "navigation", {}, () => [
            t[3] || (t[3] = w("navigation bar", -1))
          ])
        ])
      ])
    ])) : m("", !0),
    e.$slots.system ? (r(), a("div", jt, [
      n("div", Dt, [
        u(e.$slots, "system", {}, () => [
          t[4] || (t[4] = w("system messages", -1))
        ])
      ])
    ])) : m("", !0),
    n("div", Ot, [
      n("div", Ut, [
        n("main", Bt, [
          u(e.$slots, "main", {}, () => [
            t[5] || (t[5] = n("div", { style: { outline: "dashed 1px lightgray" } }, [
              n("h1", null, "Hello world..."),
              n("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
            ], -1))
          ])
        ]),
        e.$slots.aside ? (r(), a("aside", Pt, [
          u(e.$slots, "aside", {}, () => [
            t[6] || (t[6] = w("aside content", -1))
          ])
        ])) : m("", !0)
      ])
    ]),
    n("footer", Lt, [
      n("div", Ft, [
        e.$slots.footer ? u(e.$slots, "footer", { key: 0 }, () => [
          n("div", Wt, [
            n("div", Yt, [
              n("ul", Zt, [
                n("li", qt, [
                  s.privacyURL ? (r(), a("a", {
                    key: 0,
                    href: s.privacyURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Privacy", 8, Gt)) : m("", !0)
                ]),
                n("li", zt, [
                  s.termsURL ? (r(), a("a", {
                    key: 0,
                    href: s.termsURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Terms", 8, Jt)) : m("", !0)
                ])
              ]),
              n("div", Vt, " Copyright © " + v((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)
            ])
          ])
        ]) : m("", !0)
      ])
    ])
  ], 2);
}
const ln = /* @__PURE__ */ C(St, [["render", Qt]]), Ht = {
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
}, Xt = {
  key: 0,
  class: "d-flex align-items-center"
}, Kt = { class: "flex-fill dropdown" }, es = {
  key: 0,
  class: "text-white text-decoration-none py-2",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, ts = { class: "me-1" }, ss = { class: "text-decoration-underline" }, ns = {
  key: 1,
  class: "text-white text-decoration-none py-2",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, is = {
  class: "dropdown-menu p-3",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, ls = {
  key: 0,
  class: "text-danger"
}, os = { class: "" }, as = { class: "" }, rs = ["href"], ds = ["href"], us = {
  key: 1,
  class: "d-flex align-items-center text-nowrap"
}, cs = {
  key: 0,
  class: "flex-fill text-white"
}, fs = { class: "me-1" }, ms = {
  key: 1,
  class: "flex-fill text-white"
}, ps = { class: "flex-fill text-end ms-2" }, gs = ["href"];
function hs(e, t, s, i, o, l) {
  return s.variant === "flyout" ? (r(), a("div", Xt, [
    n("div", Kt, [
      s.userOverride ? (r(), a("a", es, [
        n("span", ts, v(s.userNetid), 1),
        t[0] || (t[0] = n("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        n("span", ss, v(s.userOverride), 1)
      ])) : (r(), a("a", ns, v(s.userNetid), 1)),
      n("div", is, [
        s.userOverride ? (r(), a("p", ls, [
          t[1] || (t[1] = w(" overriding as ", -1)),
          t[2] || (t[2] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          w(" " + v(s.userOverride), 1)
        ])) : m("", !0),
        n("p", os, v(s.userOfficialName) + ", " + v(s.userPreferredName) + ", " + v(s.userPronouns), 1),
        n("p", as, [
          n("a", { href: s.profileUrl }, "go to profile", 8, rs)
        ]),
        n("div", null, [
          s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
            n("a", { href: s.signoutUrl }, "Sign out", 8, ds)
          ]) : u(e.$slots, "default", { key: 1 }, () => [
            t[3] || (t[3] = n("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (r(), a("div", us, [
    s.userOverride ? (r(), a("div", cs, [
      n("span", fs, v(s.userNetid), 1),
      t[4] || (t[4] = n("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      w(" " + v(s.userOverride), 1)
    ])) : (r(), a("div", ms, v(s.userNetid), 1)),
    n("div", ps, [
      s.signoutUrl ? u(e.$slots, "default", { key: 0 }, () => [
        n("a", {
          href: s.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, gs)
      ]) : u(e.$slots, "default", { key: 1 }, () => [
        t[5] || (t[5] = n("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const on = /* @__PURE__ */ C(Ht, [["render", hs]]);
function bs(e) {
  return ke() ? (xe(e), !0) : !1;
}
const H = /* @__PURE__ */ new WeakMap(), vs = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const s = e[0], i = (t = se()) == null ? void 0 : t.proxy;
  if (i == null && !ue())
    throw new Error("injectLocal must be called in setup");
  return i && H.has(i) && s in H.get(i) ? H.get(i)[s] : _e(...e);
}, ys = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ws = Object.prototype.toString, Ss = (e) => ws.call(e) === "[object Object]", ks = () => {
};
function ce(...e) {
  if (e.length !== 1)
    return we(...e);
  const t = e[0];
  return typeof t == "function" ? oe(Se(() => ({ get: t, set: ks }))) : ae(t);
}
function xs(e, t) {
  function s(...i) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(o).catch(l);
    });
  }
  return s;
}
const fe = (e) => e();
function _s(e = fe, t = {}) {
  const {
    initialState: s = "active"
  } = t, i = ce(s === "active");
  function o() {
    i.value = !1;
  }
  function l() {
    i.value = !0;
  }
  const c = (...f) => {
    i.value && e(...f);
  };
  return { isActive: oe(i), pause: o, resume: l, eventFilter: c };
}
function ne(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function X(e) {
  return Array.isArray(e) ? e : [e];
}
function As(e) {
  return se();
}
function Ns(e, t, s = {}) {
  const {
    eventFilter: i = fe,
    ...o
  } = s;
  return J(
    e,
    xs(
      i,
      t
    ),
    o
  );
}
function Ms(e, t, s = {}) {
  const {
    eventFilter: i,
    initialState: o = "active",
    ...l
  } = s, { eventFilter: c, pause: f, resume: g, isActive: p } = _s(i, { initialState: o });
  return { stop: Ns(
    e,
    t,
    {
      ...l,
      eventFilter: c
    }
  ), pause: f, resume: g, isActive: p };
}
function me(e, t = !0, s) {
  As() ? re(e, s) : t ? e() : de(e);
}
function Ts(e, t, s) {
  return J(
    e,
    t,
    {
      ...s,
      immediate: !0
    }
  );
}
const q = ys ? window : void 0;
function pe(e) {
  var t;
  const s = E(e);
  return (t = s?.$el) != null ? t : s;
}
function te(...e) {
  const t = [], s = () => {
    t.forEach((f) => f()), t.length = 0;
  }, i = (f, g, p, y) => (f.addEventListener(g, p, y), () => f.removeEventListener(g, p, y)), o = B(() => {
    const f = X(E(e[0])).filter((g) => g != null);
    return f.every((g) => typeof g != "string") ? f : void 0;
  }), l = Ts(
    () => {
      var f, g;
      return [
        (g = (f = o.value) == null ? void 0 : f.map((p) => pe(p))) != null ? g : [q].filter((p) => p != null),
        X(E(o.value ? e[1] : e[0])),
        X(Ne(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        E(o.value ? e[3] : e[2])
      ];
    },
    ([f, g, p, y]) => {
      if (s(), !f?.length || !g?.length || !p?.length)
        return;
      const x = Ss(y) ? { ...y } : y;
      t.push(
        ...f.flatMap(
          (I) => g.flatMap(
            (_) => p.map((h) => i(I, _, h, x))
          )
        )
      );
    },
    { flush: "post" }
  ), c = () => {
    l(), s();
  };
  return bs(s), c;
}
// @__NO_SIDE_EFFECTS__
function $s() {
  const e = Z(!1), t = se();
  return t && re(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = /* @__PURE__ */ $s();
  return B(() => (t.value, !!e()));
}
const Cs = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Rs() {
  const e = ue() ? /* @__PURE__ */ vs(Cs, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Es(e, t = {}) {
  const { window: s = q, ssrWidth: i = /* @__PURE__ */ Rs() } = t, o = /* @__PURE__ */ Is(() => s && "matchMedia" in s && typeof s.matchMedia == "function"), l = Z(typeof i == "number"), c = Z(), f = Z(!1), g = (p) => {
    f.value = p.matches;
  };
  return Ae(() => {
    if (l.value) {
      l.value = !o.value;
      const p = E(e).split(",");
      f.value = p.some((y) => {
        const x = y.includes("not all"), I = y.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), _ = y.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(I || _);
        return I && h && (h = i >= ne(I[1])), _ && h && (h = i <= ne(_[1])), x ? !h : h;
      });
      return;
    }
    o.value && (c.value = s.matchMedia(E(e)), f.value = c.value.matches);
  }), te(c, "change", g, { passive: !0 }), B(() => f.value);
}
const G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, z = "__vueuse_ssr_handlers__", js = /* @__PURE__ */ Ds();
function Ds() {
  return z in G || (G[z] = G[z] || {}), G[z];
}
function ge(e, t) {
  return js[e] || t;
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  return Es("(prefers-color-scheme: dark)", e);
}
function Us(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Bs = {
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
}, ie = "vueuse-storage";
function Ps(e, t, s, i = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: c = !0,
    listenToStorageChanges: f = !0,
    writeDefaults: g = !0,
    mergeDefaults: p = !1,
    shallow: y,
    window: x = q,
    eventFilter: I,
    onError: _ = (d) => {
      console.error(d);
    },
    initOnMounted: h
  } = i, A = (y ? Z : ae)(typeof t == "function" ? t() : t), T = B(() => E(e));
  if (!s)
    try {
      s = ge("getDefaultStorage", () => {
        var d;
        return (d = q) == null ? void 0 : d.localStorage;
      })();
    } catch (d) {
      _(d);
    }
  if (!s)
    return A;
  const $ = E(t), W = Us($), j = (o = i.serializer) != null ? o : Bs[W], { pause: k, resume: R } = Ms(
    A,
    () => D(A.value),
    { flush: l, deep: c, eventFilter: I }
  );
  J(T, () => N(), { flush: l });
  let P = !1;
  const L = (d) => {
    h && !P || N(d);
  }, Y = (d) => {
    h && !P || U(d);
  };
  x && f && (s instanceof Storage ? te(x, "storage", L, { passive: !0 }) : te(x, ie, Y)), h ? me(() => {
    P = !0, N();
  }) : N();
  function F(d, S) {
    if (x) {
      const M = {
        key: T.value,
        oldValue: d,
        newValue: S,
        storageArea: s
      };
      x.dispatchEvent(s instanceof Storage ? new StorageEvent("storage", M) : new CustomEvent(ie, {
        detail: M
      }));
    }
  }
  function D(d) {
    try {
      const S = s.getItem(T.value);
      if (d == null)
        F(S, null), s.removeItem(T.value);
      else {
        const M = j.write(d);
        S !== M && (s.setItem(T.value, M), F(S, M));
      }
    } catch (S) {
      _(S);
    }
  }
  function O(d) {
    const S = d ? d.newValue : s.getItem(T.value);
    if (S == null)
      return g && $ != null && s.setItem(T.value, j.write($)), $;
    if (!d && p) {
      const M = j.read(S);
      return typeof p == "function" ? p(M, $) : W === "object" && !Array.isArray(M) ? { ...$, ...M } : M;
    } else return typeof S != "string" ? S : j.read(S);
  }
  function N(d) {
    if (!(d && d.storageArea !== s)) {
      if (d && d.key == null) {
        A.value = $;
        return;
      }
      if (!(d && d.key !== T.value)) {
        k();
        try {
          d?.newValue !== j.write(A.value) && (A.value = O(d));
        } catch (S) {
          _(S);
        } finally {
          d ? de(R) : R();
        }
      }
    }
  }
  function U(d) {
    N(d.detail);
  }
  return A;
}
const Ls = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Fs(e = {}) {
  const {
    selector: t = "html",
    attribute: s = "class",
    initialValue: i = "auto",
    window: o = q,
    storage: l,
    storageKey: c = "vueuse-color-scheme",
    listenToStorageChanges: f = !0,
    storageRef: g,
    emitAuto: p,
    disableTransition: y = !0
  } = e, x = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, I = /* @__PURE__ */ Os({ window: o }), _ = B(() => I.value ? "dark" : "light"), h = g || (c == null ? ce(i) : Ps(c, i, l, { window: o, listenToStorageChanges: f })), A = B(() => h.value === "auto" ? _.value : h.value), T = ge(
    "updateHTMLAttrs",
    (k, R, P) => {
      const L = typeof k == "string" ? o?.document.querySelector(k) : pe(k);
      if (!L)
        return;
      const Y = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
      let D = null;
      if (R === "class") {
        const N = P.split(/\s/g);
        Object.values(x).flatMap((U) => (U || "").split(/\s/g)).filter(Boolean).forEach((U) => {
          N.includes(U) ? Y.add(U) : F.add(U);
        });
      } else
        D = { key: R, value: P };
      if (Y.size === 0 && F.size === 0 && D === null)
        return;
      let O;
      y && (O = o.document.createElement("style"), O.appendChild(document.createTextNode(Ls)), o.document.head.appendChild(O));
      for (const N of Y)
        L.classList.add(N);
      for (const N of F)
        L.classList.remove(N);
      D && L.setAttribute(D.key, D.value), y && (o.getComputedStyle(O).opacity, document.head.removeChild(O));
    }
  );
  function $(k) {
    var R;
    T(t, s, (R = x[k]) != null ? R : k);
  }
  function W(k) {
    e.onChanged ? e.onChanged(k, $) : $(k);
  }
  J(A, W, { flush: "post", immediate: !0 }), me(() => W(A.value));
  const j = B({
    get() {
      return p ? h.value : A.value;
    },
    set(k) {
      h.value = k;
    }
  });
  return Object.assign(j, { store: h, system: _, state: A });
}
const Ws = {
  props: {
    colorClass: {
      type: String,
      default: "text-body"
    }
  },
  // composition in options api requires setup()
  setup() {
    return { colorMode: Fs({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, Ys = { class: "d-flex align-items-center" }, Zs = { class: "bi bi-brightness-high-fill" }, qs = { class: "bi bi-moon-stars-fill" }, Gs = { class: "bi bi-circle-half" }, zs = { class: "dropdown-menu p-1" }, Js = { class: "mb-1" }, Vs = { class: "mb-1" };
function Qs(e, t, s, i, o, l) {
  return r(), a("div", Ys, [
    n("div", null, [
      n("button", {
        class: b(["btn btn-link dropdown-toggle p-1", s.colorClass]),
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        "aria-label": "Choose color mode"
      }, [
        V(n("i", Zs, null, 512), [
          [Q, i.colorMode == "light"]
        ]),
        V(n("i", qs, null, 512), [
          [Q, i.colorMode == "dark"]
        ]),
        V(n("i", Gs, null, 512), [
          [Q, i.colorMode == "auto"]
        ])
      ], 2),
      n("ul", zs, [
        n("li", Js, [
          n("a", {
            class: b(["dropdown-item rounded", i.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[0] || (t[0] = (c) => i.colorMode = "light")
          }, t[3] || (t[3] = [
            n("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            w(" Light", -1)
          ]), 2)
        ]),
        n("li", Vs, [
          n("a", {
            class: b(["dropdown-item rounded", i.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[1] || (t[1] = (c) => i.colorMode = "dark")
          }, t[4] || (t[4] = [
            n("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            w(" Dark", -1)
          ]), 2)
        ]),
        n("li", null, [
          n("a", {
            class: b(["dropdown-item rounded", i.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: t[2] || (t[2] = (c) => i.colorMode = "auto")
          }, t[5] || (t[5] = [
            n("i", { class: "bi bi-circle-half" }, null, -1),
            w(" Auto", -1)
          ]), 2)
        ])
      ])
    ])
  ]);
}
const an = /* @__PURE__ */ C(Ws, [["render", Qs]]);
export {
  an as SColorMode,
  on as SProfile,
  sn as SSidebar,
  Ks as STabsDisplay,
  en as STabsItem,
  Xs as STabsList,
  tn as STabsPanel,
  nn as STopbar,
  ln as STopbarNeo
};
