import { createElementBlock as t, createCommentVNode as y, openBlock as l, renderSlot as f, createElementVNode as o, withKeys as oa, normalizeClass as p, withModifiers as wa, resolveComponent as ka, normalizeStyle as ia, createVNode as Pa, withCtx as Ma, createTextVNode as h, toDisplayString as L, createStaticVNode as ya, toRef as Ia, readonly as Ca, ref as Na, customRef as Ra, onMounted as La, nextTick as Ea, getCurrentInstance as ca, watch as X, getCurrentScope as pa, onScopeDispose as Ua, hasInjectionContext as ha, inject as Da, computed as O, shallowRef as Z, toValue as D, watchEffect as Fa, unref as Ba, withDirectives as Q, vShow as aa, Fragment as ta, renderList as xa } from "vue";
const R = (a, e) => {
  const n = a.__vccOpts || a;
  for (const [r, c] of e)
    n[r] = c;
  return n;
}, _a = {
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
}, Ga = ["id"], Oa = ["id"];
function Va(a, e, n, r, c, i) {
  return n.variant == "underline" ? (l(), t("ul", {
    key: 0,
    class: "text-body nav nav-underline border-bottom",
    id: n.tabsId,
    role: "tablist"
  }, [
    f(a.$slots, "default")
  ], 8, Ga)) : n.variant == "pills" ? (l(), t("ul", {
    key: 1,
    class: "bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills border",
    id: n.tabsId,
    role: "tablist"
  }, [
    f(a.$slots, "default")
  ], 8, Oa)) : y("", !0);
}
const Oo = /* @__PURE__ */ R(_a, [["render", Va]]), za = {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: !0
    }
  }
}, Ka = ["id"];
function ja(a, e, n, r, c, i) {
  return l(), t("div", {
    class: "tab-content",
    id: n.tabsId + "Content"
  }, [
    f(a.$slots, "default")
  ], 8, Ka);
}
const Vo = /* @__PURE__ */ R(za, [["render", ja]]), $a = {
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
      let a = {};
      return a[this.tabsId + "-link"] = !0, a.active = this.activeTab, a;
    }
  },
  methods: {
    findIndex(a) {
      return [].findIndex.call(this.elements, (e) => e === a);
    },
    moveTab(a) {
      this.elements[a].click(), this.elements[a].focus(), Array.from(this.elements).forEach((e, n) => {
        n === a ? e.tabIndex = 0 : e.tabIndex = -1;
      });
    },
    moveNext(a) {
      const e = this.findIndex(a.target);
      e < this.elements.length - 1 && this.moveTab(e + 1);
    },
    movePrev(a) {
      const e = this.findIndex(a.target);
      e > 0 && this.moveTab(e - 1);
    },
    onClick(a) {
      const e = this.findIndex(a.target);
      this.moveTab(e);
    }
  }
}, Za = {
  class: "nav-item",
  role: "presentation"
}, Ha = ["tabindex", "id", "data-bs-target", "aria-controls", "aria-selected"];
function qa(a, e, n, r, c, i) {
  return l(), t("li", Za, [
    o("a", {
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
        e[0] || (e[0] = oa((...g) => i.moveNext && i.moveNext(...g), ["right"])),
        e[1] || (e[1] = oa((...g) => i.movePrev && i.movePrev(...g), ["left"]))
      ],
      onClick: e[2] || (e[2] = (...g) => i.onClick && i.onClick(...g))
    }, [
      f(a.$slots, "default")
    ], 42, Ha)
  ]);
}
const zo = /* @__PURE__ */ R($a, [["render", qa]]), Wa = {
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
}, Ja = ["id", "aria-labelledby"];
function Ya(a, e, n, r, c, i) {
  return l(), t("div", {
    id: n.panelId,
    class: p(["tab-pane fade", { "show active": n.activePanel }]),
    role: "tabpanel",
    "aria-labelledby": n.panelId + "-tab",
    tabindex: "0",
    onKeydown: e[0] || (e[0] = oa(wa((...g) => i.setFocus && i.setFocus(...g), ["shift", "prevent"]), ["tab"]))
  }, [
    f(a.$slots, "default")
  ], 42, Ja);
}
const Ko = /* @__PURE__ */ R(Wa, [["render", Ya]]), Xa = {
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
  created() {
  }
}, Qa = {
  key: 0,
  class: "py-2 px-3 small bg-black bg-opacity-10"
}, ae = { class: "d-flex" }, ee = { class: "flex-fill text-end" }, ne = ["href"], oe = {
  key: 0,
  class: "btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#sidebar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "sidebar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, ie = {
  key: 0,
  role: "navigation"
}, re = {
  key: 1,
  class: "mb-3 text-light"
}, ce = { class: "flex-fill" }, te = { key: 0 }, le = { class: "font-weight-light py-3 small" };
function ue(a, e, n, r, c, i) {
  const g = ka("router-link");
  return l(), t("div", {
    class: p([i.mq.mdMinus ? "" : "d-flex vh-100"]),
    style: ia([n.isPreview ? "min-height: auto !important;" : ""])
  }, [
    o("div", {
      class: p([n.sidebarClass + [i.mq.mdMinus ? "" : " overflow-auto"], "sol-sidebar d-flex flex-column"]),
      style: ia([i.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
    }, [
      o("header", null, [
        a.$slots.profile ? (l(), t("div", Qa, [
          f(a.$slots, "profile", {}, () => [
            o("div", ae, [
              e[0] || (e[0] = o("div", { class: "flex-fill" }, "username", -1)),
              o("div", ee, [
                o("a", {
                  href: n.signOutUrl,
                  class: "text-white"
                }, "Sign out", 8, ne)
              ])
            ])
          ])
        ])) : y("", !0),
        o("div", {
          class: p([[i.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"])
        }, [
          a.$slots.navigation ? (l(), t("a", oe, [...e[1] || (e[1] = [
            o("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)
          ])])) : y("", !0),
          o("div", {
            class: p(["d-inline align-middle", [i.mq.mdPlus ? "h2" : "h3"]])
          }, [
            Pa(g, {
              to: n.appRootUrl,
              class: "ff-encode-sans text-decoration-none text-light"
            }, {
              default: Ma(() => [
                h(L(n.appName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ], 2)
      ]),
      o("div", {
        id: "sidebar-nav-collapse",
        class: p(["px-3 flex-fill", [
          i.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"
        ]])
      }, [
        a.$slots.navigation ? (l(), t("nav", ie, [
          f(a.$slots, "navigation", {}, () => [
            e[2] || (e[2] = o("ul", { class: "text-white" }, [
              o("li", null, "nav 1"),
              o("li", null, "nav 2"),
              o("li", null, "nav 3"),
              o("li", null, "nav 4")
            ], -1))
          ])
        ])) : y("", !0),
        a.$slots.aside ? (l(), t("aside", re, [
          f(a.$slots, "aside", {}, () => [
            e[3] || (e[3] = h("this is aside content", -1))
          ])
        ])) : y("", !0)
      ], 2),
      e[4] || (e[4] = o("div", { class: "sol-sidebar-logo" }, " ", -1))
    ], 6),
    o("div", {
      id: "scrollbody",
      class: p([[i.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"]),
      style: { "padding-top": "37px !important" }
    }, [
      o("div", {
        class: p([[i.mq.lgPlus ? "px-5" : ""], "container-xl d-flex flex-column"])
      }, [
        o("main", ce, [
          f(a.$slots, "main")
        ]),
        a.$slots.footer ? (l(), t("footer", te, [
          f(a.$slots, "footer", {}, () => [
            o("div", le, [
              e[5] || (e[5] = ya('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>', 1)),
              o("div", null, " Copyright © " + L((/* @__PURE__ */ new Date()).getFullYear()) + "University of Washington ", 1)
            ])
          ])
        ])) : y("", !0)
      ], 2)
    ], 2)
  ], 6);
}
const jo = /* @__PURE__ */ R(Xa, [["render", ue]]), ge = {
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
  created() {
  }
}, de = {
  key: 0,
  class: "w-100"
}, se = { class: "w-100" }, fe = {
  key: 0,
  class: "bg-black bg-opacity-10 text-white py-2 small"
}, me = { class: "container-xl" }, ye = { class: "axdd-topbar-brand" }, Ce = { class: "container-xl axdd-topbar-logo" }, Ne = {
  key: 0,
  class: "btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#topbar-nav-collapse",
  role: "button",
  "aria-expanded": "false",
  "aria-controls": "topbar-nav-collapse",
  "aria-label": "Toggle Navigation Menu"
}, Le = ["href"], Ee = { class: "container-xl" }, pe = { class: "row" }, he = {
  key: 0,
  role: "navigation"
}, be = { key: 1 }, Se = { class: "col-xl" }, Ae = { key: 0 }, Te = {
  key: 1,
  class: "col-sm col-xl-3"
}, ve = { class: "w-100" }, we = {
  key: 0,
  class: "bg-dark text-white py-2 small"
}, ke = { class: "container-xl" }, Pe = { class: "text-white font-weight-light py-3" };
function Me(a, e, n, r, c, i) {
  return l(), t("div", {
    class: p([n.topbarClass + [n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])
  }, [
    a.$slots.system ? (l(), t("div", de, [
      f(a.$slots, "system", {}, () => [
        e[0] || (e[0] = h("System messages", -1))
      ])
    ])) : y("", !0),
    o("header", se, [
      a.$slots.profile ? (l(), t("div", fe, [
        o("div", me, [
          f(a.$slots, "profile", {}, () => [
            e[1] || (e[1] = h("Welcome!", -1))
          ])
        ])
      ])) : y("", !0),
      o("div", ye, [
        o("div", Ce, [
          a.$slots.navigation ? (l(), t("a", Ne, [...e[2] || (e[2] = [
            o("i", { class: "bi bi-list fw-bold text-white fs-6" }, null, -1)
          ])])) : y("", !0),
          o("div", {
            class: p(["d-inline align-middle text-white", [i.mq.xlPlus ? "h2" : "h3"]])
          }, [
            o("a", {
              href: n.appRootUrl,
              class: "ff-encode-sans text-white text-decoration-none"
            }, L(n.appName), 9, Le)
          ], 2)
        ])
      ])
    ]),
    o("div", {
      class: p([n.backgroundClass, "w-100 flex-fill text-body"])
    }, [
      o("div", Ee, [
        o("div", pe, [
          a.$slots.navigation ? (l(), t("div", {
            key: 0,
            style: ia(i.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
          }, [
            o("div", {
              id: "topbar-nav-collapse",
              class: p([i.mq.xlPlus ? "collapse.show" : "collapse"])
            }, [
              a.$slots.navigation ? (l(), t("nav", he, [
                f(a.$slots, "navigation")
              ])) : y("", !0),
              a.$slots.navigation && a.$slots.aside ? (l(), t("aside", be, [
                f(a.$slots, "aside", {}, () => [
                  e[3] || (e[3] = h("Aside content", -1))
                ])
              ])) : y("", !0)
            ], 2)
          ], 4)) : y("", !0),
          o("main", Se, [
            a.$slots.bar ? (l(), t("div", Ae, [
              f(a.$slots, "bar")
            ])) : y("", !0),
            f(a.$slots, "main", {}, () => [
              e[4] || (e[4] = o("div", { style: { outline: "dashed 1px lightgray" } }, [
                o("h1", null, "Hello world..."),
                o("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
              ], -1))
            ])
          ]),
          !a.$slots.navigation && a.$slots.aside ? (l(), t("aside", Te, [
            f(a.$slots, "aside", {}, () => [
              e[5] || (e[5] = h("Aside content", -1))
            ])
          ])) : y("", !0)
        ])
      ])
    ], 2),
    o("footer", ve, [
      a.$slots.footer ? (l(), t("div", we, [
        o("div", ke, [
          f(a.$slots, "footer", {}, () => [
            o("div", Pe, [
              e[6] || (e[6] = ya('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>', 1)),
              o("div", null, " Copyright © " + L((/* @__PURE__ */ new Date()).getFullYear()) + "University of Washington ", 1)
            ])
          ])
        ])
      ])) : y("", !0)
    ])
  ], 2);
}
const $o = /* @__PURE__ */ R(ge, [["render", Me]]), Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC", Re = {
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
}, Ue = { class: "w-100 bg-spirit-purple" }, De = { class: "container-xl" }, Fe = { class: "d-flex justify-content-between align-items-center" }, Be = { class: "w-50 d-flex align-items-center my-4" }, xe = { class: "text-white d-flex flex-column" }, _e = {
  key: 0,
  class: "fw-light text-nowrap mb-1 lh-1"
}, Ge = ["href"], Oe = { class: "w-50 d-flex justify-content-end align-items-center" }, Ve = {
  key: 1,
  class: "ms-1 btn btn-link btn-sm d-xl-none py-0 py-1 text-white",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarToggler",
  "aria-controls": "navbarToggler",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, ze = {
  key: 0,
  class: "navbar navbar-expand-xl w-100 p-0 py-xl-2 bg-husky-purple"
}, Ke = { class: "container-xl" }, je = {
  class: "collapse navbar-collapse",
  id: "navbarToggler"
}, $e = {
  key: 1,
  class: "bg-info-subtle w-100"
}, Ze = { class: "container-xl" }, He = { class: "container-xl flex-fill" }, qe = { class: "row" }, We = { class: "col" }, Je = {
  key: 0,
  class: "col-sm-12 col-xl-3"
}, Ye = { class: "bg-dark w-100" }, Xe = { class: "container-xl" }, Qe = { class: "row" }, an = { class: "col small font-weight-light my-4" }, en = { class: "list-inline m-0" }, nn = { class: "list-inline-item" }, on = ["href"], rn = { class: "list-inline-item" }, cn = ["href"], tn = { class: "text-light" };
function ln(a, e, n, r, c, i) {
  return l(), t("div", {
    class: p([[n.isPreview ? " " : " min-vh-100"], "d-flex align-items-end flex-column sol-topbar-neo"])
  }, [
    o("header", Ue, [
      o("div", De, [
        o("div", Fe, [
          o("div", Be, [
            e[0] || (e[0] = o("div", { class: "border-end border-white border-opacity-25 pe-3 me-3" }, [
              o("img", {
                src: Ie,
                alt: "UW logo",
                class: "my-1",
                style: { height: "38px" }
              })
            ], -1)),
            o("div", xe, [
              n.appDeptName ? (l(), t("div", _e, L(n.appDeptName), 1)) : y("", !0),
              o("a", {
                href: n.appRootUrl,
                class: "ff-encode-sans text-white text-nowrap text-decoration-none fs-3 fw-medium lh-1"
              }, L(n.appName), 9, Ge)
            ])
          ]),
          o("div", Oe, [
            a.$slots.settings ? f(a.$slots, "settings", { key: 0 }, () => [
              e[1] || (e[1] = h("user info", -1))
            ]) : y("", !0),
            a.$slots.navigation ? (l(), t("a", Ve, [...e[2] || (e[2] = [
              o("i", { class: "bi bi-list text-light fs-3" }, null, -1)
            ])])) : y("", !0)
          ])
        ])
      ])
    ]),
    a.$slots.navigation ? (l(), t("nav", ze, [
      o("div", Ke, [
        o("div", je, [
          f(a.$slots, "navigation", {}, () => [
            e[3] || (e[3] = h("navigation bar", -1))
          ])
        ])
      ])
    ])) : y("", !0),
    a.$slots.system ? (l(), t("div", $e, [
      o("div", Ze, [
        f(a.$slots, "system", {}, () => [
          e[4] || (e[4] = h("system messages", -1))
        ])
      ])
    ])) : y("", !0),
    o("div", He, [
      o("div", qe, [
        o("main", We, [
          f(a.$slots, "main", {}, () => [
            e[5] || (e[5] = o("div", { style: { outline: "dashed 1px lightgray" } }, [
              o("h1", null, "Hello world..."),
              o("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")
            ], -1))
          ])
        ]),
        a.$slots.aside ? (l(), t("aside", Je, [
          f(a.$slots, "aside", {}, () => [
            e[6] || (e[6] = h("aside content", -1))
          ])
        ])) : y("", !0)
      ])
    ]),
    o("footer", Ye, [
      o("div", Xe, [
        a.$slots.footer ? f(a.$slots, "footer", { key: 0 }, () => [
          o("div", Qe, [
            o("div", an, [
              o("ul", en, [
                o("li", nn, [
                  n.privacyURL ? (l(), t("a", {
                    key: 0,
                    href: n.privacyURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Privacy", 8, on)) : y("", !0)
                ]),
                o("li", rn, [
                  n.termsURL ? (l(), t("a", {
                    key: 0,
                    href: n.termsURL,
                    target: "_blank",
                    rel: "noopener",
                    class: "link-light"
                  }, "Terms", 8, cn)) : y("", !0)
                ])
              ]),
              o("div", tn, " Copyright © " + L((/* @__PURE__ */ new Date()).getFullYear()) + "University of Washington ", 1)
            ])
          ])
        ]) : y("", !0)
      ])
    ])
  ], 2);
}
const Zo = /* @__PURE__ */ R(Re, [["render", ln]]), un = {
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
  data() {
    return {};
  }
}, gn = {
  key: 0,
  class: "d-flex align-items-center"
}, dn = { class: "flex-fill dropdown" }, sn = {
  key: 0,
  class: "text-white text-decoration-none py-2",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, fn = { class: "me-1" }, mn = { class: "text-decoration-underline" }, yn = {
  key: 1,
  class: "text-white text-decoration-none py-2",
  href: "#",
  role: "button",
  id: "dropdownMenuButton1",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Cn = {
  class: "dropdown-menu p-3",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "220px" }
}, Nn = {
  key: 0,
  class: "text-danger"
}, Ln = { class: "" }, En = { class: "" }, pn = ["href"], hn = ["href"], bn = {
  key: 1,
  class: "d-flex align-items-center text-nowrap"
}, Sn = {
  key: 0,
  class: "flex-fill text-white"
}, An = { class: "me-1" }, Tn = {
  key: 1,
  class: "flex-fill text-white"
}, vn = { class: "flex-fill text-end ms-2" }, wn = ["href"];
function kn(a, e, n, r, c, i) {
  return n.variant === "flyout" ? (l(), t("div", gn, [
    o("div", dn, [
      n.userOverride ? (l(), t("a", sn, [
        o("span", fn, L(n.userNetid), 1),
        e[0] || (e[0] = o("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1)),
        o("span", mn, L(n.userOverride), 1)
      ])) : (l(), t("a", yn, L(n.userNetid), 1)),
      o("div", Cn, [
        n.userOverride ? (l(), t("p", Nn, [
          e[1] || (e[1] = h(" overriding as ", -1)),
          e[2] || (e[2] = o("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
          h(" " + L(n.userOverride), 1)
        ])) : y("", !0),
        o("p", Ln, L(n.userOfficialName) + ", " + L(n.userPreferredName) + ", " + L(n.userPronouns), 1),
        o("p", En, [
          o("a", { href: n.profileUrl }, "go to profile", 8, pn)
        ]),
        o("div", null, [
          n.signoutUrl ? f(a.$slots, "default", { key: 0 }, () => [
            o("a", { href: n.signoutUrl }, "Sign out", 8, hn)
          ]) : f(a.$slots, "default", { key: 1 }, () => [
            e[3] || (e[3] = o("a", { href: "sadkf" }, "sign out test", -1))
          ])
        ])
      ])
    ])
  ])) : (l(), t("div", bn, [
    n.userOverride ? (l(), t("div", Sn, [
      o("span", An, L(n.userNetid), 1),
      e[4] || (e[4] = o("i", { class: "bi bi-arrow-right text-danger" }, null, -1)),
      h(" " + L(n.userOverride), 1)
    ])) : (l(), t("div", Tn, L(n.userNetid), 1)),
    o("div", vn, [
      n.signoutUrl ? f(a.$slots, "default", { key: 0 }, () => [
        o("a", {
          href: n.signoutUrl,
          class: "text-white"
        }, "Sign out", 8, wn)
      ]) : f(a.$slots, "default", { key: 1 }, () => [
        e[5] || (e[5] = o("a", { href: "sadkf" }, "sign out test", -1))
      ])
    ])
  ]));
}
const Ho = /* @__PURE__ */ R(un, [["render", kn]]);
function Pn(a, e) {
  return pa() ? (Ua(a, e), !0) : !1;
}
const ea = /* @__PURE__ */ new WeakMap(), Mn = /* @__NO_SIDE_EFFECTS__ */ (...a) => {
  var e;
  const n = a[0], r = (e = ca()) === null || e === void 0 ? void 0 : e.proxy, c = r ?? pa();
  if (c == null && !ha()) throw new Error("injectLocal must be called in setup");
  return c && ea.has(c) && n in ea.get(c) ? ea.get(c)[n] : Da(...a);
}, In = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Rn = Object.prototype.toString, Un = (a) => Rn.call(a) === "[object Object]", Dn = () => {
};
function ba(...a) {
  if (a.length !== 1) return Ia(...a);
  const e = a[0];
  return typeof e == "function" ? Ca(Ra(() => ({
    get: e,
    set: Dn
  }))) : Na(e);
}
function Fn(a, e) {
  function n(...r) {
    return new Promise((c, i) => {
      Promise.resolve(a(() => e.apply(this, r), {
        fn: e,
        thisArg: this,
        args: r
      })).then(c).catch(i);
    });
  }
  return n;
}
const Sa = (a) => a();
function Bn(a = Sa, e = {}) {
  const { initialState: n = "active" } = e, r = ba(n === "active");
  function c() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  const g = (...d) => {
    r.value && a(...d);
  };
  return {
    isActive: Ca(r),
    pause: c,
    resume: i,
    eventFilter: g
  };
}
function la(a) {
  return a.endsWith("rem") ? Number.parseFloat(a) * 16 : Number.parseFloat(a);
}
function na(a) {
  return Array.isArray(a) ? a : [a];
}
function xn(a) {
  return ca();
}
function _n(a, e, n = {}) {
  const { eventFilter: r = Sa, ...c } = n;
  return X(a, Fn(r, e), c);
}
function Gn(a, e, n = {}) {
  const { eventFilter: r, initialState: c = "active", ...i } = n, { eventFilter: g, pause: d, resume: m, isActive: u } = Bn(r, { initialState: c });
  return {
    stop: _n(a, e, {
      ...i,
      eventFilter: g
    }),
    pause: d,
    resume: m,
    isActive: u
  };
}
const On = Gn;
function Aa(a, e = !0, n) {
  xn() ? La(a, n) : e ? a() : Ea(a);
}
function Vn(a, e, n) {
  return X(a, e, {
    ...n,
    immediate: !0
  });
}
const G = In ? window : void 0;
function Ta(a) {
  var e;
  const n = D(a);
  return (e = n?.$el) !== null && e !== void 0 ? e : n;
}
function ra(...a) {
  const e = [], n = () => {
    e.forEach((d) => d()), e.length = 0;
  }, r = (d, m, u, N) => (d.addEventListener(m, u, N), () => d.removeEventListener(m, u, N)), c = O(() => {
    const d = na(D(a[0])).filter((m) => m != null);
    return d.every((m) => typeof m != "string") ? d : void 0;
  }), i = Vn(() => {
    var d, m;
    return [
      (d = (m = c.value) === null || m === void 0 ? void 0 : m.map((u) => Ta(u))) !== null && d !== void 0 ? d : [G].filter((u) => u != null),
      na(D(c.value ? a[1] : a[0])),
      na(Ba(c.value ? a[2] : a[1])),
      D(c.value ? a[3] : a[2])
    ];
  }, ([d, m, u, N]) => {
    if (n(), !d?.length || !m?.length || !u?.length) return;
    const C = Un(N) ? { ...N } : N;
    e.push(...d.flatMap((k) => m.flatMap((E) => u.map((b) => r(k, E, b, C)))));
  }, { flush: "post" }), g = () => {
    i(), n();
  };
  return Pn(n), g;
}
// @__NO_SIDE_EFFECTS__
function zn() {
  const a = Z(!1), e = ca();
  return e && La(() => {
    a.value = !0;
  }, e), a;
}
// @__NO_SIDE_EFFECTS__
function Kn(a) {
  const e = /* @__PURE__ */ zn();
  return O(() => (e.value, !!a()));
}
const jn = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function $n() {
  const a = ha() ? /* @__PURE__ */ Mn(jn, null) : null;
  return typeof a == "number" ? a : void 0;
}
function Zn(a, e = {}) {
  const { window: n = G, ssrWidth: r = /* @__PURE__ */ $n() } = e, c = /* @__PURE__ */ Kn(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), i = Z(typeof r == "number"), g = Z(), d = Z(!1), m = (u) => {
    d.value = u.matches;
  };
  return Fa(() => {
    if (i.value) {
      i.value = !c.value, d.value = D(a).split(",").some((u) => {
        const N = u.includes("not all"), C = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), k = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let E = !!(C || k);
        return C && E && (E = r >= la(C[1])), k && E && (E = r <= la(k[1])), N ? !E : E;
      });
      return;
    }
    c.value && (g.value = n.matchMedia(D(a)), d.value = g.value.matches);
  }), ra(g, "change", m, { passive: !0 }), O(() => d.value);
}
const H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, q = "__vueuse_ssr_handlers__", Hn = /* @__PURE__ */ qn();
function qn() {
  return q in H || (H[q] = H[q] || {}), H[q];
}
function va(a, e) {
  return Hn[a] || e;
}
// @__NO_SIDE_EFFECTS__
function Wn(a) {
  return Zn("(prefers-color-scheme: dark)", a);
}
function Jn(a) {
  return a == null ? "any" : a instanceof Set ? "set" : a instanceof Map ? "map" : a instanceof Date ? "date" : typeof a == "boolean" ? "boolean" : typeof a == "string" ? "string" : typeof a == "object" ? "object" : Number.isNaN(a) ? "any" : "number";
}
const Yn = {
  boolean: {
    read: (a) => a === "true",
    write: (a) => String(a)
  },
  object: {
    read: (a) => JSON.parse(a),
    write: (a) => JSON.stringify(a)
  },
  number: {
    read: (a) => Number.parseFloat(a),
    write: (a) => String(a)
  },
  any: {
    read: (a) => a,
    write: (a) => String(a)
  },
  string: {
    read: (a) => a,
    write: (a) => String(a)
  },
  map: {
    read: (a) => new Map(JSON.parse(a)),
    write: (a) => JSON.stringify(Array.from(a.entries()))
  },
  set: {
    read: (a) => new Set(JSON.parse(a)),
    write: (a) => JSON.stringify(Array.from(a))
  },
  date: {
    read: (a) => new Date(a),
    write: (a) => a.toISOString()
  }
}, ua = "vueuse-storage";
function Xn(a, e, n, r = {}) {
  var c;
  const { flush: i = "pre", deep: g = !0, listenToStorageChanges: d = !0, writeDefaults: m = !0, mergeDefaults: u = !1, shallow: N, window: C = G, eventFilter: k, onError: E = (s) => {
    console.error(s);
  }, initOnMounted: b } = r, S = (N ? Z : Na)(typeof e == "function" ? e() : e), A = O(() => D(a));
  if (!n) try {
    n = va("getDefaultStorage", () => G?.localStorage)();
  } catch (s) {
    E(s);
  }
  if (!n) return S;
  const T = D(e), j = Jn(T), F = (c = r.serializer) !== null && c !== void 0 ? c : Yn[j], { pause: P, resume: U } = On(S, (s) => B(s), {
    flush: i,
    deep: g,
    eventFilter: k
  });
  X(A, () => M(), { flush: i });
  let V = !1;
  const z = (s) => {
    b && !V || M(s);
  }, $ = (s) => {
    b && !V || _(s);
  };
  C && d && (n instanceof Storage ? ra(C, "storage", z, { passive: !0 }) : ra(C, ua, $)), b ? Aa(() => {
    V = !0, M();
  }) : M();
  function K(s, v) {
    if (C) {
      const I = {
        key: A.value,
        oldValue: s,
        newValue: v,
        storageArea: n
      };
      C.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", I) : new CustomEvent(ua, { detail: I }));
    }
  }
  function B(s) {
    try {
      const v = n.getItem(A.value);
      if (s == null)
        K(v, null), n.removeItem(A.value);
      else {
        const I = F.write(s);
        v !== I && (n.setItem(A.value, I), K(v, I));
      }
    } catch (v) {
      E(v);
    }
  }
  function x(s) {
    const v = s ? s.newValue : n.getItem(A.value);
    if (v == null)
      return m && T != null && n.setItem(A.value, F.write(T)), T;
    if (!s && u) {
      const I = F.read(v);
      return typeof u == "function" ? u(I, T) : j === "object" && !Array.isArray(I) ? {
        ...T,
        ...I
      } : I;
    } else return typeof v != "string" ? v : F.read(v);
  }
  function M(s) {
    if (!(s && s.storageArea !== n)) {
      if (s && s.key == null) {
        S.value = T;
        return;
      }
      if (!(s && s.key !== A.value)) {
        P();
        try {
          const v = F.write(S.value);
          (s === void 0 || s?.newValue !== v) && (S.value = x(s));
        } catch (v) {
          E(v);
        } finally {
          s ? Ea(U) : U();
        }
      }
    }
  }
  function _(s) {
    M(s.detail);
  }
  return S;
}
const Qn = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function ao(a = {}) {
  const { selector: e = "html", attribute: n = "class", initialValue: r = "auto", window: c = G, storage: i, storageKey: g = "vueuse-color-scheme", listenToStorageChanges: d = !0, storageRef: m, emitAuto: u, disableTransition: N = !0 } = a, C = {
    auto: "",
    light: "light",
    dark: "dark",
    ...a.modes || {}
  }, k = /* @__PURE__ */ Wn({ window: c }), E = O(() => k.value ? "dark" : "light"), b = m || (g == null ? ba(r) : Xn(g, r, i, {
    window: c,
    listenToStorageChanges: d
  })), S = O(() => b.value === "auto" ? E.value : b.value), A = va("updateHTMLAttrs", (P, U, V) => {
    const z = typeof P == "string" ? c?.document.querySelector(P) : Ta(P);
    if (!z) return;
    const $ = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
    let B = null;
    if (U === "class") {
      const M = V.split(/\s/g);
      Object.values(C).flatMap((_) => (_ || "").split(/\s/g)).filter(Boolean).forEach((_) => {
        M.includes(_) ? $.add(_) : K.add(_);
      });
    } else B = {
      key: U,
      value: V
    };
    if ($.size === 0 && K.size === 0 && B === null) return;
    let x;
    N && (x = c.document.createElement("style"), x.appendChild(document.createTextNode(Qn)), c.document.head.appendChild(x));
    for (const M of $) z.classList.add(M);
    for (const M of K) z.classList.remove(M);
    B && z.setAttribute(B.key, B.value), N && (c.getComputedStyle(x).opacity, document.head.removeChild(x));
  });
  function T(P) {
    var U;
    A(e, n, (U = C[P]) !== null && U !== void 0 ? U : P);
  }
  function j(P) {
    a.onChanged ? a.onChanged(P, T) : T(P);
  }
  X(S, j, {
    flush: "post",
    immediate: !0
  }), Aa(() => j(S.value));
  const F = O({
    get() {
      return u ? b.value : S.value;
    },
    set(P) {
      b.value = P;
    }
  });
  return Object.assign(F, {
    store: b,
    system: E,
    state: S
  });
}
const eo = {
  props: {
    colorClass: {
      type: String,
      default: "text-body"
    }
  },
  // composition in options api requires setup()
  setup() {
    return { colorMode: ao({
      emitAuto: !0,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme"
    }) };
  }
}, no = { class: "d-flex align-items-center" }, oo = { class: "bi bi-brightness-high-fill" }, io = { class: "bi bi-moon-stars-fill" }, ro = { class: "bi bi-circle-half" }, co = { class: "dropdown-menu p-1" }, to = { class: "mb-1" }, lo = { class: "mb-1" };
function uo(a, e, n, r, c, i) {
  return l(), t("div", no, [
    o("div", null, [
      o("button", {
        class: p(["btn btn-link dropdown-toggle p-1", n.colorClass]),
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        "aria-label": "Choose color mode"
      }, [
        Q(o("i", oo, null, 512), [
          [aa, r.colorMode == "light"]
        ]),
        Q(o("i", io, null, 512), [
          [aa, r.colorMode == "dark"]
        ]),
        Q(o("i", ro, null, 512), [
          [aa, r.colorMode == "auto"]
        ])
      ], 2),
      o("ul", co, [
        o("li", to, [
          o("a", {
            class: p(["dropdown-item rounded", r.colorMode == "light" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: e[0] || (e[0] = (g) => r.colorMode = "light")
          }, [...e[3] || (e[3] = [
            o("i", { class: "bi bi-brightness-high-fill" }, null, -1),
            h("Light", -1)
          ])], 2)
        ]),
        o("li", lo, [
          o("a", {
            class: p(["dropdown-item rounded", r.colorMode == "dark" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: e[1] || (e[1] = (g) => r.colorMode = "dark")
          }, [...e[4] || (e[4] = [
            o("i", { class: "bi bi-moon-stars-fill" }, null, -1),
            h("Dark", -1)
          ])], 2)
        ]),
        o("li", null, [
          o("a", {
            class: p(["dropdown-item rounded", r.colorMode == "auto" ? "active" : ""]),
            href: "#",
            role: "button",
            onClick: e[2] || (e[2] = (g) => r.colorMode = "auto")
          }, [...e[5] || (e[5] = [
            o("i", { class: "bi bi-circle-half" }, null, -1),
            h("Auto", -1)
          ])], 2)
        ])
      ])
    ])
  ]);
}
const qo = /* @__PURE__ */ R(eo, [["render", uo]]);
function go(a) {
  return ga(a[0]) + ga(a[1]);
}
function ga(a) {
  return String.fromCodePoint(127397 + a.toUpperCase().charCodeAt(0));
}
var w = {}, W = {}, da;
function so() {
  if (da) return W;
  da = 1, Object.defineProperty(W, "__esModule", { value: !0 });
  function a(e, n) {
    return e.reduce((r, c) => {
      const i = String(c[n]);
      return r[i] || (r[i] = []), r[i].push(c), r;
    }, {});
  }
  return W.default = a, W;
}
var J = {}, sa;
function fo() {
  if (sa) return J;
  sa = 1, Object.defineProperty(J, "__esModule", { value: !0 });
  function a(e, n) {
    return e.replace(/{([^{}]*)}/g, (r, c) => {
      const i = n[c];
      return typeof i == "string" || typeof i == "number" ? i.toString() : r;
    });
  }
  return J.default = a, J;
}
var Y = {}, fa;
function mo() {
  if (fa) return Y;
  fa = 1, Object.defineProperty(Y, "__esModule", { value: !0 });
  const a = [
    {
      countryNameEn: "Andorra",
      countryNameLocal: "Andorra",
      countryCode: "AD",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ca",
      officialLanguageNameEn: "Catalan, Valencian",
      officialLanguageNameLocal: "Català, Valencià",
      countryCallingCode: "376",
      areaCodes: [],
      region: "Europe",
      flag: "🇦🇩"
    },
    {
      countryNameEn: "Afghanistan",
      countryNameLocal: "د افغانستان اسلامي دولتدولت اسلامی افغانستان, جمهوری اسلامی افغانستان",
      countryCode: "AF",
      currencyCode: "AFN",
      currencyNameEn: "Afghan afghani",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fa",
      officialLanguageNameEn: "Persian",
      officialLanguageNameLocal: "فارسی",
      countryCallingCode: "93",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇦🇫"
    },
    {
      countryNameEn: "Antigua and Barbuda",
      countryNameLocal: "Antigua and Barbuda",
      countryCode: "AG",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1268",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇦🇬"
    },
    {
      countryNameEn: "Anguilla",
      countryNameLocal: "Anguilla",
      countryCode: "AI",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1264",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇦🇮"
    },
    {
      countryNameEn: "Albania",
      countryNameLocal: "Shqipëria",
      countryCode: "AL",
      currencyCode: "ALL",
      currencyNameEn: "Albanian lek",
      tinType: "NIPT",
      tinName: "Numri i Identifikimit për Personin e Tatueshëm",
      officialLanguageCode: "sq",
      officialLanguageNameEn: "Albanian",
      officialLanguageNameLocal: "Shqip",
      countryCallingCode: "355",
      areaCodes: [],
      region: "Europe",
      flag: "🇦🇱"
    },
    {
      countryNameEn: "Armenia",
      countryNameLocal: "Հայաստան",
      countryCode: "AM",
      currencyCode: "AMD",
      currencyNameEn: "Armenian dram",
      tinType: "",
      tinName: "",
      officialLanguageCode: "hy",
      officialLanguageNameEn: "Armenian",
      officialLanguageNameLocal: "Հայերեն",
      countryCallingCode: "374",
      areaCodes: [],
      region: "Europe",
      flag: "🇦🇲"
    },
    {
      countryNameEn: "Angola",
      countryNameLocal: "Angola",
      countryCode: "AO",
      currencyCode: "AOA",
      currencyNameEn: "Angolan kwanza",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "244",
      areaCodes: [],
      region: "Africa",
      flag: "🇦🇴"
    },
    {
      countryNameEn: "Antarctica",
      countryNameLocal: "Antarctica, Antártico, Antarctique, Антарктике",
      countryCode: "AQ",
      currencyCode: "",
      currencyNameEn: "",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "672",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇦🇶"
    },
    {
      countryNameEn: "Argentina",
      countryNameLocal: "Argentina",
      countryCode: "AR",
      currencyCode: "ARS",
      currencyNameEn: "Argentine peso",
      tinType: "CUIT",
      tinName: "Código Único de Identificación Tributaria",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "54",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇦🇷"
    },
    {
      countryNameEn: "American Samoa",
      countryNameLocal: "American Samoa",
      countryCode: "AS",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1684",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇦🇸"
    },
    {
      countryNameEn: "Austria",
      countryNameLocal: "Österreich",
      countryCode: "AT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "UID",
      tinName: "Umsatzsteuer-Identifikationsnummer",
      officialLanguageCode: "de",
      officialLanguageNameEn: "German",
      officialLanguageNameLocal: "Deutsch",
      countryCallingCode: "43",
      areaCodes: [],
      region: "Europe",
      flag: "🇦🇹"
    },
    {
      countryNameEn: "Australia",
      countryNameLocal: "Australia",
      countryCode: "AU",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "ABN",
      tinName: "Australian Business Number",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "61",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇦🇺"
    },
    {
      countryNameEn: "Aruba",
      countryNameLocal: "Aruba",
      countryCode: "AW",
      currencyCode: "AWG",
      currencyNameEn: "Aruban florin",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "297",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇦🇼"
    },
    {
      countryNameEn: "Åland Islands",
      countryNameLocal: "Åland",
      countryCode: "AX",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "sv",
      officialLanguageNameEn: "Swedish",
      officialLanguageNameLocal: "Svenska",
      countryCallingCode: "358",
      areaCodes: [],
      region: "Europe",
      flag: "🇦🇽"
    },
    {
      countryNameEn: "Azerbaijan",
      countryNameLocal: "Azərbaycan",
      countryCode: "AZ",
      currencyCode: "AZN",
      currencyNameEn: "Azerbaijani manat",
      tinType: "",
      tinName: "",
      officialLanguageCode: "az",
      officialLanguageNameEn: "Azerbaijani",
      officialLanguageNameLocal: "azərbaycan dili",
      countryCallingCode: "994",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇦🇿"
    },
    {
      countryNameEn: "Bosnia and Herzegovina",
      countryNameLocal: "Bosna i Hercegovina",
      countryCode: "BA",
      currencyCode: "BAM",
      currencyNameEn: "Bosnia and Herzegovina convertible mark",
      tinType: "",
      tinName: "",
      officialLanguageCode: "bs",
      officialLanguageNameEn: "Bosnian",
      officialLanguageNameLocal: "bosanski jezik",
      countryCallingCode: "387",
      areaCodes: [],
      region: "Europe",
      flag: "🇧🇦"
    },
    {
      countryNameEn: "Barbados",
      countryNameLocal: "Barbados",
      countryCode: "BB",
      currencyCode: "BBD",
      currencyNameEn: "Barbados dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1246",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇧"
    },
    {
      countryNameEn: "Bangladesh",
      countryNameLocal: "গণপ্রজাতন্ত্রী বাংলাদেশ",
      countryCode: "BD",
      currencyCode: "BDT",
      currencyNameEn: "Bangladeshi taka",
      tinType: "",
      tinName: "",
      officialLanguageCode: "bn",
      officialLanguageNameEn: "Bengali",
      officialLanguageNameLocal: "বাংলা",
      countryCallingCode: "880",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇧🇩"
    },
    {
      countryNameEn: "Belgium",
      countryNameLocal: "België, Belgique, Belgien",
      countryCode: "BE",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "n° TVABTW-nr Mwst-nr",
      tinName: "BTW identificatienummer / Numéro de TVA",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "32",
      areaCodes: [],
      region: "Europe",
      flag: "🇧🇪"
    },
    {
      countryNameEn: "Burkina Faso",
      countryNameLocal: "Burkina Faso",
      countryCode: "BF",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "226",
      areaCodes: [],
      region: "Africa",
      flag: "🇧🇫"
    },
    {
      countryNameEn: "Bulgaria",
      countryNameLocal: "България",
      countryCode: "BG",
      currencyCode: "BGN",
      currencyNameEn: "Bulgarian lev",
      tinType: "ДДС номер",
      tinName: "Идентификационен номер по ДДС",
      officialLanguageCode: "bg",
      officialLanguageNameEn: "Bulgarian",
      officialLanguageNameLocal: "български език",
      countryCallingCode: "359",
      areaCodes: [],
      region: "Europe",
      flag: "🇧🇬"
    },
    {
      countryNameEn: "Bahrain",
      countryNameLocal: "البحرين",
      countryCode: "BH",
      currencyCode: "BHD",
      currencyNameEn: "Bahraini dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "973",
      areaCodes: [],
      region: "Arab States",
      flag: "🇧🇭"
    },
    {
      countryNameEn: "Burundi",
      countryNameLocal: "Burundi",
      countryCode: "BI",
      currencyCode: "BIF",
      currencyNameEn: "Burundian franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "257",
      areaCodes: [],
      region: "Africa",
      flag: "🇧🇮"
    },
    {
      countryNameEn: "Benin",
      countryNameLocal: "Bénin",
      countryCode: "BJ",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "229",
      areaCodes: [],
      region: "Africa",
      flag: "🇧🇯"
    },
    {
      countryNameEn: "Saint Barthélemy",
      countryNameLocal: "Saint-Barthélemy",
      countryCode: "BL",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "590",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇱"
    },
    {
      countryNameEn: "Bermuda",
      countryNameLocal: "Bermuda",
      countryCode: "BM",
      currencyCode: "BMD",
      currencyNameEn: "Bermudian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1441",
      areaCodes: [],
      region: "North America",
      flag: "🇧🇲"
    },
    {
      countryNameEn: "Brunei Darussalam",
      countryNameLocal: "Brunei Darussalam",
      countryCode: "BN",
      currencyCode: "BND",
      currencyNameEn: "Brunei dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ms",
      officialLanguageNameEn: "Malay",
      officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
      countryCallingCode: "673",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇧🇳"
    },
    {
      countryNameEn: "Bolivia (Plurinational State of)",
      countryNameLocal: "Bolivia, Bulibiya, Volívia, Wuliwya",
      countryCode: "BO",
      currencyCode: "BOP",
      currencyNameEn: "",
      tinType: "NIT",
      tinName: "Número de Identificación Tributaria",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "591",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇴"
    },
    {
      countryNameEn: "Bonaire, Sint Eustatius and Saba",
      countryNameLocal: "Caribisch Nederland",
      countryCode: "BQ",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "5997",
      areaCodes: [],
      region: "Unknown",
      flag: "🇧🇶"
    },
    {
      countryNameEn: "Brazil",
      countryNameLocal: "Brasil",
      countryCode: "BR",
      currencyCode: "BRL",
      currencyNameEn: "Brazilian real",
      tinType: "CNPJ",
      tinName: "Cadastro Nacional de Pessoa Jurídica",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "55",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇷"
    },
    {
      countryNameEn: "Bhutan",
      countryNameLocal: "འབྲུག་ཡུལ",
      countryCode: "BT",
      currencyCode: "BTN",
      currencyNameEn: "Bhutanese ngultrum",
      tinType: "",
      tinName: "",
      officialLanguageCode: "dz",
      officialLanguageNameEn: "Dzongkha",
      officialLanguageNameLocal: "རྫོང་ཁ",
      countryCallingCode: "975",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇧🇹"
    },
    {
      countryNameEn: "Bouvet Island",
      countryNameLocal: "Bouvetøya",
      countryCode: "BV",
      currencyCode: "NOK",
      currencyNameEn: "Norwegian krone",
      tinType: "",
      tinName: "",
      officialLanguageCode: "no",
      officialLanguageNameEn: "Norwegian",
      officialLanguageNameLocal: "Norsk",
      countryCallingCode: "47",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇻"
    },
    {
      countryNameEn: "Botswana",
      countryNameLocal: "Botswana",
      countryCode: "BW",
      currencyCode: "BWP",
      currencyNameEn: "Botswana pula",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "267",
      areaCodes: [],
      region: "Africa",
      flag: "🇧🇼"
    },
    {
      countryNameEn: "Belarus",
      countryNameLocal: "Беларусь",
      countryCode: "BY",
      currencyCode: "BYR",
      currencyNameEn: "",
      tinType: "УНП (UNP)",
      tinName: "Учетный номер плательщика",
      officialLanguageCode: "be",
      officialLanguageNameEn: "Belarusian",
      officialLanguageNameLocal: "беларуская мова",
      countryCallingCode: "375",
      areaCodes: [],
      region: "Europe",
      flag: "🇧🇾"
    },
    {
      countryNameEn: "Belize",
      countryNameLocal: "Belize",
      countryCode: "BZ",
      currencyCode: "BZD",
      currencyNameEn: "Belize dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "501",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇧🇿"
    },
    {
      countryNameEn: "Canada",
      countryNameLocal: "Canada",
      countryCode: "CA",
      currencyCode: "CAD",
      currencyNameEn: "Canadian dollar",
      tinType: "BN / NE",
      tinName: "Business Number",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1",
      areaCodes: [
        "403",
        "587",
        "780",
        "825",
        "236",
        "250",
        "604",
        "672",
        "778",
        "204",
        "431",
        "506",
        "709",
        "782",
        "902",
        "226",
        "249",
        "289",
        "343",
        "365",
        "416",
        "437",
        "519",
        "548",
        "613",
        "647",
        "705",
        "807",
        "905",
        "367",
        "418",
        "438",
        "450",
        "514",
        "579",
        "581",
        "819",
        "873",
        "306",
        "639",
        "867"
      ],
      region: "North America",
      flag: "🇨🇦"
    },
    {
      countryNameEn: "Switzerland",
      countryNameLocal: "Schweiz, Suisse, Svizzera, Svizra",
      countryCode: "CH",
      currencyCode: "CHF",
      currencyNameEn: "Swiss franc",
      tinType: "MWST/TVA/IVA",
      tinName: "Mehrwertsteuernummer",
      officialLanguageCode: "de",
      officialLanguageNameEn: "German",
      officialLanguageNameLocal: "Deutsch",
      countryCallingCode: "41",
      areaCodes: [],
      region: "Europe",
      flag: "🇨🇭"
    },
    {
      countryNameEn: "Côte d'Ivoire",
      countryNameLocal: "Côte d'Ivoire",
      countryCode: "CI",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "225",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇮"
    },
    {
      countryNameEn: "Chile",
      countryNameLocal: "Chile",
      countryCode: "CL",
      currencyCode: "CLP",
      currencyNameEn: "Chilean peso",
      tinType: "RUT",
      tinName: "Rol Único Tributario",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "56",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇨🇱"
    },
    {
      countryNameEn: "Cameroon",
      countryNameLocal: "Cameroun, Cameroon",
      countryCode: "CM",
      currencyCode: "XAF",
      currencyNameEn: "CFA franc BEAC",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "237",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇲"
    },
    {
      countryNameEn: "China",
      countryNameLocal: "中国",
      countryCode: "CN",
      currencyCode: "CNY",
      currencyNameEn: "Renminbi (Chinese) yuan",
      tinType: "",
      tinName: "",
      officialLanguageCode: "zh-hans",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "86",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇨🇳"
    },
    {
      countryNameEn: "Colombia",
      countryNameLocal: "Colombia",
      countryCode: "CO",
      currencyCode: "COP",
      currencyNameEn: "Colombian peso",
      tinType: "NIT",
      tinName: "Número De Identificación Tributaria",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "57",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇨🇴"
    },
    {
      countryNameEn: "Costa Rica",
      countryNameLocal: "Costa Rica",
      countryCode: "CR",
      currencyCode: "CRC",
      currencyNameEn: "Costa Rican colon",
      tinType: "",
      tinName: "Cédula Jurídica",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "506",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇨🇷"
    },
    {
      countryNameEn: "Cuba",
      countryNameLocal: "Cuba",
      countryCode: "CU",
      currencyCode: "CUC",
      currencyNameEn: "Cuban convertible peso",
      tinType: "",
      tinName: "",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "53",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇨🇺"
    },
    {
      countryNameEn: "Cabo Verde",
      countryNameLocal: "Cabo Verde",
      countryCode: "CV",
      currencyCode: "CVE",
      currencyNameEn: "Cape Verdean escudo",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "238",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇻"
    },
    {
      countryNameEn: "Curaçao",
      countryNameLocal: "Curaçao",
      countryCode: "CW",
      currencyCode: "ANG",
      currencyNameEn: "Netherlands Antillean guilder",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "599",
      areaCodes: [],
      region: "Unknown",
      flag: "🇨🇼"
    },
    {
      countryNameEn: "Christmas Island",
      countryNameLocal: "Christmas Island",
      countryCode: "CX",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "61",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇨🇽"
    },
    {
      countryNameEn: "Cyprus",
      countryNameLocal: "Κύπρος, Kibris",
      countryCode: "CY",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "ΦΠΑ",
      tinName: "Αριθμός Εγγραφής Φ.Π.Α.",
      officialLanguageCode: "el",
      officialLanguageNameEn: "Greek, Modern (1453-)",
      officialLanguageNameLocal: "ελληνικά",
      countryCallingCode: "357",
      areaCodes: [],
      region: "Europe",
      flag: "🇨🇾"
    },
    {
      countryNameEn: "Germany",
      countryNameLocal: "Deutschland",
      countryCode: "DE",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "USt-IdNr.",
      tinName: "Umsatzsteuer-Identifikationsnummer",
      officialLanguageCode: "de",
      officialLanguageNameEn: "German",
      officialLanguageNameLocal: "Deutsch",
      countryCallingCode: "49",
      areaCodes: [],
      region: "Europe",
      flag: "🇩🇪"
    },
    {
      countryNameEn: "Djibouti",
      countryNameLocal: "Djibouti, جيبوتي, Jabuuti, Gabuutih",
      countryCode: "DJ",
      currencyCode: "DJF",
      currencyNameEn: "Djiboutian franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "253",
      areaCodes: [],
      region: "Arab States",
      flag: "🇩🇯"
    },
    {
      countryNameEn: "Denmark",
      countryNameLocal: "Danmark",
      countryCode: "DK",
      currencyCode: "DKK",
      currencyNameEn: "Danish krone",
      tinType: "CVR",
      tinName: "Momsregistreringsnummer",
      officialLanguageCode: "da",
      officialLanguageNameEn: "Danish",
      officialLanguageNameLocal: "dansk",
      countryCallingCode: "45",
      areaCodes: [],
      region: "Europe",
      flag: "🇩🇰"
    },
    {
      countryNameEn: "Dominica",
      countryNameLocal: "Dominica",
      countryCode: "DM",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "767",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇩🇲"
    },
    {
      countryNameEn: "Algeria",
      countryNameLocal: "الجزائر",
      countryCode: "DZ",
      currencyCode: "DZD",
      currencyNameEn: "Algerian dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "213",
      areaCodes: [],
      region: "Arab States",
      flag: "🇩🇿"
    },
    {
      countryNameEn: "Ecuador",
      countryNameLocal: "Ecuador",
      countryCode: "EC",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "RUC",
      tinName: "Número de Registro Unico de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "593",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇪🇨"
    },
    {
      countryNameEn: "Estonia",
      countryNameLocal: "Eesti",
      countryCode: "EE",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "KMKR",
      tinName: "Käibemaksukohustuslase number",
      officialLanguageCode: "et",
      officialLanguageNameEn: "Estonian",
      officialLanguageNameLocal: "eesti, eesti keel",
      countryCallingCode: "372",
      areaCodes: [],
      region: "Europe",
      flag: "🇪🇪"
    },
    {
      countryNameEn: "Egypt",
      countryNameLocal: "مصر",
      countryCode: "EG",
      currencyCode: "EGP",
      currencyNameEn: "Egyptian pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "20",
      areaCodes: [],
      region: "Arab States",
      flag: "🇪🇬"
    },
    {
      countryNameEn: "Western Sahara",
      countryNameLocal: "Sahara Occidental",
      countryCode: "EH",
      currencyCode: "MAD",
      currencyNameEn: "Moroccan dirham",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "212",
      areaCodes: [],
      region: "Africa",
      flag: "🇪🇭"
    },
    {
      countryNameEn: "Eritrea",
      countryNameLocal: "ኤርትራ, إرتريا, Eritrea",
      countryCode: "ER",
      currencyCode: "ERN",
      currencyNameEn: "Eritrean nakfa",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ti",
      officialLanguageNameEn: "Tigrinya",
      officialLanguageNameLocal: "ትግርኛ",
      countryCallingCode: "291",
      areaCodes: [],
      region: "Africa",
      flag: "🇪🇷"
    },
    {
      countryNameEn: "Spain",
      countryNameLocal: "España",
      countryCode: "ES",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "NIF (CIF)",
      tinName: "Número de Identificación Fiscal (formerly named Código de Identificación Fiscal)",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "34",
      areaCodes: [],
      region: "Europe",
      flag: "🇪🇸"
    },
    {
      countryNameEn: "Ethiopia",
      countryNameLocal: "ኢትዮጵያ, Itoophiyaa",
      countryCode: "ET",
      currencyCode: "ETB",
      currencyNameEn: "Ethiopian birr",
      tinType: "",
      tinName: "",
      officialLanguageCode: "am",
      officialLanguageNameEn: "Amharic",
      officialLanguageNameLocal: "አማርኛ",
      countryCallingCode: "251",
      areaCodes: [],
      region: "Africa",
      flag: "🇪🇹"
    },
    {
      countryNameEn: "Finland",
      countryNameLocal: "Suomi",
      countryCode: "FI",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "ALV nro",
      tinName: "Arvonlisäveronumero",
      officialLanguageCode: "fi",
      officialLanguageNameEn: "Finnish",
      officialLanguageNameLocal: "suomi, suomen kieli",
      countryCallingCode: "358",
      areaCodes: [],
      region: "Europe",
      flag: "🇫🇮"
    },
    {
      countryNameEn: "Fiji",
      countryNameLocal: "Fiji",
      countryCode: "FJ",
      currencyCode: "FJD",
      currencyNameEn: "Fiji dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "679",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇫🇯"
    },
    {
      countryNameEn: "Micronesia (Federated States of)",
      countryNameLocal: "Micronesia",
      countryCode: "FM",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "691",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇫🇲"
    },
    {
      countryNameEn: "France",
      countryNameLocal: "France",
      countryCode: "FR",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "n° TVA",
      tinName: "Numéro d'identification à la taxe sur la valeur ajoutée / Numéro de TVA intracommunautaire",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "33",
      areaCodes: [],
      region: "Europe",
      flag: "🇫🇷"
    },
    {
      countryNameEn: "Gabon",
      countryNameLocal: "Gabon",
      countryCode: "GA",
      currencyCode: "XAF",
      currencyNameEn: "CFA franc BEAC",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "241",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇦"
    },
    {
      countryNameEn: "Grenada",
      countryNameLocal: "Grenada",
      countryCode: "GD",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1473",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇩"
    },
    {
      countryNameEn: "Georgia",
      countryNameLocal: "საქართველო",
      countryCode: "GE",
      currencyCode: "GEL",
      currencyNameEn: "Georgian lari",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ka",
      officialLanguageNameEn: "Georgian",
      officialLanguageNameLocal: "ქართული",
      countryCallingCode: "995",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇪"
    },
    {
      countryNameEn: "French Guiana",
      countryNameLocal: "Guyane française",
      countryCode: "GF",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "594",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇫"
    },
    {
      countryNameEn: "Guernsey",
      countryNameLocal: "Guernsey",
      countryCode: "GG",
      currencyCode: "GBP",
      currencyNameEn: "Pound sterling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "44",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇬"
    },
    {
      countryNameEn: "Ghana",
      countryNameLocal: "Ghana",
      countryCode: "GH",
      currencyCode: "GHS",
      currencyNameEn: "Ghanaian cedi",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "233",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇭"
    },
    {
      countryNameEn: "Gibraltar",
      countryNameLocal: "Gibraltar",
      countryCode: "GI",
      currencyCode: "GIP",
      currencyNameEn: "Gibraltar pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "350",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇮"
    },
    {
      countryNameEn: "Greenland",
      countryNameLocal: "Kalaallit Nunaat, Grønland",
      countryCode: "GL",
      currencyCode: "DKK",
      currencyNameEn: "Danish krone",
      tinType: "",
      tinName: "",
      officialLanguageCode: "kl",
      officialLanguageNameEn: "Kalaallisut, Greenlandic",
      officialLanguageNameLocal: "kalaallisut, kalaallit oqaasii",
      countryCallingCode: "299",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇱"
    },
    {
      countryNameEn: "Guinea",
      countryNameLocal: "Guinée",
      countryCode: "GN",
      currencyCode: "GNF",
      currencyNameEn: "Guinean franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "224",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇳"
    },
    {
      countryNameEn: "Guadeloupe",
      countryNameLocal: "Guadeloupe",
      countryCode: "GP",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "590",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇵"
    },
    {
      countryNameEn: "Equatorial Guinea",
      countryNameLocal: "Guiena ecuatorial, Guinée équatoriale, Guiné Equatorial",
      countryCode: "GQ",
      currencyCode: "XAF",
      currencyNameEn: "CFA franc BEAC",
      tinType: "",
      tinName: "",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "240",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇶"
    },
    {
      countryNameEn: "Greece",
      countryNameLocal: "Ελλάδα",
      countryCode: "GR",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "el",
      officialLanguageNameEn: "Greek, Modern (1453-)",
      officialLanguageNameLocal: "ελληνικά",
      countryCallingCode: "30",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇷"
    },
    {
      countryNameEn: "South Georgia and the South Sandwich Islands",
      countryNameLocal: "South Georgia and the South Sandwich Islands",
      countryCode: "GS",
      currencyCode: "",
      currencyNameEn: "",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "500",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇸"
    },
    {
      countryNameEn: "Guatemala",
      countryNameLocal: "Guatemala",
      countryCode: "GT",
      currencyCode: "GTQ",
      currencyNameEn: "Guatemalan quetzal",
      tinType: "NIT",
      tinName: "Número de Identificación Tributaria",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "502",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇹"
    },
    {
      countryNameEn: "Guam",
      countryNameLocal: "Guam, Guåhån",
      countryCode: "GU",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇬🇺"
    },
    {
      countryNameEn: "Guinea-Bissau",
      countryNameLocal: "Guiné-Bissau",
      countryCode: "GW",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "245",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇼"
    },
    {
      countryNameEn: "Guyana",
      countryNameLocal: "Guyana",
      countryCode: "GY",
      currencyCode: "GYD",
      currencyNameEn: "Guyanese dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "592",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇬🇾"
    },
    {
      countryNameEn: "Hong Kong",
      countryNameLocal: "香港, Hong Kong",
      countryCode: "HK",
      currencyCode: "HKD",
      currencyNameEn: "Hong Kong dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "zh-hant",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "852",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇭🇰"
    },
    {
      countryNameEn: "Honduras",
      countryNameLocal: "Honduras",
      countryCode: "HN",
      currencyCode: "HNL",
      currencyNameEn: "Honduran lempira",
      tinType: "RTN",
      tinName: "Registro Tributario Nacional",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "504",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇭🇳"
    },
    {
      countryNameEn: "Croatia",
      countryNameLocal: "Hrvatska",
      countryCode: "HR",
      currencyCode: "HRK",
      currencyNameEn: "Croatian kuna",
      tinType: "PDV-ID; OIB",
      tinName: "PDV Id. Broj OIB",
      officialLanguageCode: "hr",
      officialLanguageNameEn: "Croatian",
      officialLanguageNameLocal: "hrvatski jezik",
      countryCallingCode: "385",
      areaCodes: [],
      region: "Europe",
      flag: "🇭🇷"
    },
    {
      countryNameEn: "Haiti",
      countryNameLocal: "Haïti, Ayiti",
      countryCode: "HT",
      currencyCode: "HTG",
      currencyNameEn: "Haitian gourde",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "509",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇭🇹"
    },
    {
      countryNameEn: "Hungary",
      countryNameLocal: "Magyarország",
      countryCode: "HU",
      currencyCode: "HUF",
      currencyNameEn: "Hungarian forint",
      tinType: "ANUM",
      tinName: "Közösségi adószám",
      officialLanguageCode: "hu",
      officialLanguageNameEn: "Hungarian",
      officialLanguageNameLocal: "magyar",
      countryCallingCode: "36",
      areaCodes: [],
      region: "Europe",
      flag: "🇭🇺"
    },
    {
      countryNameEn: "Indonesia",
      countryNameLocal: "Indonesia",
      countryCode: "ID",
      currencyCode: "IDR",
      currencyNameEn: "Indonesian rupiah",
      tinType: "NPWP",
      tinName: "Nomor Pokok Wajib Pajak",
      officialLanguageCode: "id",
      officialLanguageNameEn: "Indonesian",
      officialLanguageNameLocal: "Bahasa Indonesia",
      countryCallingCode: "62",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇮🇩"
    },
    {
      countryNameEn: "Ireland",
      countryNameLocal: "Ireland, Éire",
      countryCode: "IE",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "VAT or CBL",
      tinName: "Value added tax identification no.",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "353",
      areaCodes: [],
      region: "Europe",
      flag: "🇮🇪"
    },
    {
      countryNameEn: "Israel",
      countryNameLocal: "ישראל",
      countryCode: "IL",
      currencyCode: "ILS",
      currencyNameEn: "Israeli new shekel",
      tinType: "",
      tinName: `מס' עוסק מורשה / ח"פ`,
      officialLanguageCode: "he",
      officialLanguageNameEn: "Hebrew",
      officialLanguageNameLocal: "עברית",
      countryCallingCode: "972",
      areaCodes: [],
      region: "Europe",
      flag: "🇮🇱"
    },
    {
      countryNameEn: "Isle of Man",
      countryNameLocal: "Isle of Man",
      countryCode: "IM",
      currencyCode: "GBP",
      currencyNameEn: "Pound sterling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "44",
      areaCodes: [],
      region: "Europe",
      flag: "🇮🇲"
    },
    {
      countryNameEn: "India",
      countryNameLocal: "भारत, India",
      countryCode: "IN",
      currencyCode: "INR",
      currencyNameEn: "Indian rupee",
      tinType: "VAT TIN / CST TIN",
      tinName: "Value Added Tax - Taxpayer Identification Number / Central Sales Tax - Taxpayer Identification Number (In most states)Not applicable",
      officialLanguageCode: "hi",
      officialLanguageNameEn: "Hindi",
      officialLanguageNameLocal: "हिन्दी, हिंदी",
      countryCallingCode: "91",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇮🇳"
    },
    {
      countryNameEn: "British Indian Ocean Territories",
      countryNameLocal: "British Indian Ocean Territories",
      countryCode: "IO",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "246",
      areaCodes: [],
      region: "Indian Ocean",
      flag: "🇮🇴"
    },
    {
      countryNameEn: "Iraq",
      countryNameLocal: "العراق, Iraq",
      countryCode: "IQ",
      currencyCode: "IQD",
      currencyNameEn: "Iraqi dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "964",
      areaCodes: [],
      region: "Arab States",
      flag: "🇮🇶"
    },
    {
      countryNameEn: "Iran (Islamic Republic of)",
      countryNameLocal: "ایران",
      countryCode: "IR",
      currencyCode: "IRR",
      currencyNameEn: "Iranian rial",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fa",
      officialLanguageNameEn: "Persian",
      officialLanguageNameLocal: "فارسی",
      countryCallingCode: "98",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇮🇷"
    },
    {
      countryNameEn: "Iceland",
      countryNameLocal: "Ísland",
      countryCode: "IS",
      currencyCode: "ISK",
      currencyNameEn: "Icelandic króna",
      tinType: "VSK / VASK",
      tinName: "Virðisaukaskattsnúmer",
      officialLanguageCode: "is",
      officialLanguageNameEn: "Icelandic",
      officialLanguageNameLocal: "Íslenska",
      countryCallingCode: "354",
      areaCodes: [],
      region: "Europe",
      flag: "🇮🇸"
    },
    {
      countryNameEn: "Italy",
      countryNameLocal: "Italia",
      countryCode: "IT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "P.IVA",
      tinName: "Partita IVA(IVA = Imposta sul Valore Aggiunto)",
      officialLanguageCode: "it",
      officialLanguageNameEn: "Italian",
      officialLanguageNameLocal: "Italiano",
      countryCallingCode: "39",
      areaCodes: [],
      region: "Europe",
      flag: "🇮🇹"
    },
    {
      countryNameEn: "Jersey",
      countryNameLocal: "Jersey",
      countryCode: "JE",
      currencyCode: "GBP",
      currencyNameEn: "Pound sterling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "44",
      areaCodes: [],
      region: "Europe",
      flag: "🇯🇪"
    },
    {
      countryNameEn: "Jamaica",
      countryNameLocal: "Jamaica",
      countryCode: "JM",
      currencyCode: "JMD",
      currencyNameEn: "Jamaican dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "876",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇯🇲"
    },
    {
      countryNameEn: "Jordan",
      countryNameLocal: "الأُرْدُن",
      countryCode: "JO",
      currencyCode: "JOD",
      currencyNameEn: "Jordanian dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "962",
      areaCodes: [],
      region: "Arab States",
      flag: "🇯🇴"
    },
    {
      countryNameEn: "Japan",
      countryNameLocal: "日本",
      countryCode: "JP",
      currencyCode: "JPY",
      currencyNameEn: "Japanese yen",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ja",
      officialLanguageNameEn: "Japanese",
      officialLanguageNameLocal: "日本語 (にほんご)",
      countryCallingCode: "81",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇯🇵"
    },
    {
      countryNameEn: "Kenya",
      countryNameLocal: "Kenya",
      countryCode: "KE",
      currencyCode: "KES",
      currencyNameEn: "Kenyan shilling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "sw",
      officialLanguageNameEn: "Swahili",
      officialLanguageNameLocal: "Kiswahili",
      countryCallingCode: "254",
      areaCodes: [],
      region: "Africa",
      flag: "🇰🇪"
    },
    {
      countryNameEn: "Kyrgyzstan",
      countryNameLocal: "Кыргызстан, Киргизия",
      countryCode: "KG",
      currencyCode: "KGS",
      currencyNameEn: "Kyrgyzstani som",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ky",
      officialLanguageNameEn: "Kirghiz, Kyrgyz",
      officialLanguageNameLocal: "Кыргызча, Кыргыз тили",
      countryCallingCode: "996",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇰🇬"
    },
    {
      countryNameEn: "Cambodia",
      countryNameLocal: "កម្ពុជា",
      countryCode: "KH",
      currencyCode: "KHR",
      currencyNameEn: "Cambodian riel",
      tinType: "",
      tinName: "",
      officialLanguageCode: "km",
      officialLanguageNameEn: "Central Khmer",
      officialLanguageNameLocal: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
      countryCallingCode: "855",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇰🇭"
    },
    {
      countryNameEn: "North Korea",
      countryNameLocal: "조선민주주의인민공화국",
      countryCode: "KP",
      currencyCode: "KPW",
      currencyNameEn: "North Korean won",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ko",
      officialLanguageNameEn: "Korean",
      officialLanguageNameLocal: "조선어",
      countryCallingCode: "850",
      areaCodes: [],
      region: "Asia",
      flag: "🇰🇵"
    },
    {
      countryNameEn: "South Korea",
      countryNameLocal: "대한민국",
      countryCode: "KR",
      currencyCode: "KRW",
      currencyNameEn: "South Korean won",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ko",
      officialLanguageNameEn: "Korean",
      officialLanguageNameLocal: "한국어",
      countryCallingCode: "82",
      areaCodes: [],
      region: "Asia",
      flag: "🇰🇷"
    },
    {
      countryNameEn: "Kiribati",
      countryNameLocal: "Kiribati",
      countryCode: "KI",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "686",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇰🇮"
    },
    {
      countryNameEn: "Saint Kitts and Nevis",
      countryNameLocal: "Saint Kitts and Nevis",
      countryCode: "KN",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1869",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇰🇳"
    },
    {
      countryNameEn: "Kuwait",
      countryNameLocal: "الكويت",
      countryCode: "KW",
      currencyCode: "KWD",
      currencyNameEn: "Kuwaiti dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "965",
      areaCodes: [],
      region: "Arab States",
      flag: "🇰🇼"
    },
    {
      countryNameEn: "Kazakhstan",
      countryNameLocal: "Қазақстан, Казахстан",
      countryCode: "KZ",
      currencyCode: "KZT",
      currencyNameEn: "Kazakhstani tenge",
      tinType: "",
      tinName: "",
      officialLanguageCode: "kk",
      officialLanguageNameEn: "Kazakh",
      officialLanguageNameLocal: "қазақ тілі",
      countryCallingCode: "7",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇰🇿"
    },
    {
      countryNameEn: "Lebanon",
      countryNameLocal: "لبنان, Liban",
      countryCode: "LB",
      currencyCode: "LBP",
      currencyNameEn: "Lebanese pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "961",
      areaCodes: [],
      region: "Arab States",
      flag: "🇱🇧"
    },
    {
      countryNameEn: "Saint Lucia",
      countryNameLocal: "Saint Lucia",
      countryCode: "LC",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1758",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇱🇨"
    },
    {
      countryNameEn: "Liechtenstein",
      countryNameLocal: "Liechtenstein",
      countryCode: "LI",
      currencyCode: "CHF",
      currencyNameEn: "Swiss franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "de",
      officialLanguageNameEn: "German",
      officialLanguageNameLocal: "Deutsch",
      countryCallingCode: "423",
      areaCodes: [],
      region: "Europe",
      flag: "🇱🇮"
    },
    {
      countryNameEn: "Sri Lanka",
      countryNameLocal: "ශ්‍රී ලංකා, இலங்கை",
      countryCode: "LK",
      currencyCode: "LKR",
      currencyNameEn: "Sri Lankan rupee",
      tinType: "",
      tinName: "",
      officialLanguageCode: "si",
      officialLanguageNameEn: "Sinhala, Sinhalese",
      officialLanguageNameLocal: "සිංහල",
      countryCallingCode: "94",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇱🇰"
    },
    {
      countryNameEn: "Liberia",
      countryNameLocal: "Liberia",
      countryCode: "LR",
      currencyCode: "LRD",
      currencyNameEn: "Liberian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "231",
      areaCodes: [],
      region: "Africa",
      flag: "🇱🇷"
    },
    {
      countryNameEn: "Lesotho",
      countryNameLocal: "Lesotho",
      countryCode: "LS",
      currencyCode: "LSL",
      currencyNameEn: "Lesotho loti",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "266",
      areaCodes: [],
      region: "Africa",
      flag: "🇱🇸"
    },
    {
      countryNameEn: "Lithuania",
      countryNameLocal: "Lietuva",
      countryCode: "LT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "PVM kodas",
      tinName: "PVM (abbrev. Pridėtinės vertės mokestis) mokėtojo kodas",
      officialLanguageCode: "lt",
      officialLanguageNameEn: "Lithuanian",
      officialLanguageNameLocal: "lietuvių kalba",
      countryCallingCode: "370",
      areaCodes: [],
      region: "Europe",
      flag: "🇱🇹"
    },
    {
      countryNameEn: "Luxembourg",
      countryNameLocal: "Lëtzebuerg, Luxembourg, Luxemburg",
      countryCode: "LU",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "No. TVA",
      tinName: "Numéro d'identification à la taxe sur la valeur ajoutée",
      officialLanguageCode: "lb",
      officialLanguageNameEn: "Luxembourgish, Letzeburgesch",
      officialLanguageNameLocal: "Lëtzebuergesch",
      countryCallingCode: "352",
      areaCodes: [],
      region: "Europe",
      flag: "🇱🇺"
    },
    {
      countryNameEn: "Latvia",
      countryNameLocal: "Latvija",
      countryCode: "LV",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "PVN",
      tinName: "Pievienotās vērtības nodokļa (PVN) reģistrācijas numurs",
      officialLanguageCode: "lv",
      officialLanguageNameEn: "Latvian",
      officialLanguageNameLocal: "latviešu valoda",
      countryCallingCode: "371",
      areaCodes: [],
      region: "Europe",
      flag: "🇱🇻"
    },
    {
      countryNameEn: "Libya",
      countryNameLocal: "ليبيا",
      countryCode: "LY",
      currencyCode: "LYD",
      currencyNameEn: "Libyan dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "218",
      areaCodes: [],
      region: "Arab States",
      flag: "🇱🇾"
    },
    {
      countryNameEn: "Morocco",
      countryNameLocal: "Maroc, ⵍⵎⵖⵔⵉⴱ, المغرب",
      countryCode: "MA",
      currencyCode: "MAD",
      currencyNameEn: "Moroccan dirham",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "212",
      areaCodes: [],
      region: "Arab States",
      flag: "🇲🇦"
    },
    {
      countryNameEn: "Monaco",
      countryNameLocal: "Monaco",
      countryCode: "MC",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "377",
      areaCodes: [],
      region: "Europe",
      flag: "🇲🇨"
    },
    {
      countryNameEn: "Montenegro",
      countryNameLocal: "Crna Gora, Црна Гора",
      countryCode: "ME",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "srp",
      officialLanguageNameEn: "српски језик",
      officialLanguageNameLocal: "",
      countryCallingCode: "382",
      areaCodes: [],
      region: "Europe",
      flag: "🇲🇪"
    },
    {
      countryNameEn: "Saint Martin (French part)",
      countryNameLocal: "Saint-Martin",
      countryCode: "MF",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "590",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇲🇫"
    },
    {
      countryNameEn: "Madagascar",
      countryNameLocal: "Madagasikara, Madagascar",
      countryCode: "MG",
      currencyCode: "MGA",
      currencyNameEn: "Malagasy ariary",
      tinType: "",
      tinName: "",
      officialLanguageCode: "mg",
      officialLanguageNameEn: "Malagasy",
      officialLanguageNameLocal: "fiteny malagasy",
      countryCallingCode: "261",
      areaCodes: [],
      region: "Africa",
      flag: "🇲🇬"
    },
    {
      countryNameEn: "Mali",
      countryNameLocal: "Mali",
      countryCode: "ML",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "223",
      areaCodes: [],
      region: "Africa",
      flag: "🇲🇱"
    },
    {
      countryNameEn: "Myanmar",
      countryNameLocal: "မြန်မာ",
      countryCode: "MM",
      currencyCode: "MMK",
      currencyNameEn: "Myanmar kyat",
      tinType: "",
      tinName: "",
      officialLanguageCode: "my",
      officialLanguageNameEn: "Burmese",
      officialLanguageNameLocal: "ဗမာစာ",
      countryCallingCode: "95",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇲🇲"
    },
    {
      countryNameEn: "Mongolia",
      countryNameLocal: "Монгол Улс",
      countryCode: "MN",
      currencyCode: "MNT",
      currencyNameEn: "Mongolian tögrög",
      tinType: "",
      tinName: "",
      officialLanguageCode: "mn",
      officialLanguageNameEn: "Mongolian",
      officialLanguageNameLocal: "Монгол хэл",
      countryCallingCode: "976",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇲🇳"
    },
    {
      countryNameEn: "Macao",
      countryNameLocal: "澳門, Macau",
      countryCode: "MO",
      currencyCode: "MOP",
      currencyNameEn: "Macanese pataca",
      tinType: "",
      tinName: "",
      officialLanguageCode: "zh-hant",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "853",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇲🇴"
    },
    {
      countryNameEn: "Martinique",
      countryNameLocal: "Martinique",
      countryCode: "MQ",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "596",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇲🇶"
    },
    {
      countryNameEn: "Mauritania",
      countryNameLocal: "موريتانيا, Mauritanie",
      countryCode: "MR",
      currencyCode: "MRU",
      currencyNameEn: "",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "222",
      areaCodes: [],
      region: "Arab States",
      flag: "🇲🇷"
    },
    {
      countryNameEn: "Montserrat",
      countryNameLocal: "Montserrat",
      countryCode: "MS",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1664",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇲🇸"
    },
    {
      countryNameEn: "Malta",
      countryNameLocal: "Malta",
      countryCode: "MT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "Vat No.",
      tinName: "Vat reg. no.",
      officialLanguageCode: "mt",
      officialLanguageNameEn: "Maltese",
      officialLanguageNameLocal: "Malti",
      countryCallingCode: "356",
      areaCodes: [],
      region: "Europe",
      flag: "🇲🇹"
    },
    {
      countryNameEn: "Mauritius",
      countryNameLocal: "Maurice, Mauritius",
      countryCode: "MU",
      currencyCode: "MUR",
      currencyNameEn: "Mauritian rupee",
      tinType: "",
      tinName: "",
      officialLanguageCode: "mfe",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "230",
      areaCodes: [],
      region: "Africa",
      flag: "🇲🇺"
    },
    {
      countryNameEn: "Maldives",
      countryNameLocal: "",
      countryCode: "MV",
      currencyCode: "MVR",
      currencyNameEn: "Maldivian rufiyaa",
      tinType: "",
      tinName: "",
      officialLanguageCode: "dv",
      officialLanguageNameEn: "Divehi, Dhivehi, Maldivian",
      officialLanguageNameLocal: "ދިވެހި",
      countryCallingCode: "960",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇲🇻"
    },
    {
      countryNameEn: "Malawi",
      countryNameLocal: "Malawi",
      countryCode: "MW",
      currencyCode: "MWK",
      currencyNameEn: "Malawian kwacha",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "265",
      areaCodes: [],
      region: "Africa",
      flag: "🇲🇼"
    },
    {
      countryNameEn: "Mexico",
      countryNameLocal: "México",
      countryCode: "MX",
      currencyCode: "MXN",
      currencyNameEn: "Mexican peso",
      tinType: "RFC",
      tinName: "Registro Federal de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "52",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇲🇽"
    },
    {
      countryNameEn: "Malaysia",
      countryNameLocal: "",
      countryCode: "MY",
      currencyCode: "MYR",
      currencyNameEn: "Malaysian ringgit",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ms",
      officialLanguageNameEn: "Malay",
      officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
      countryCallingCode: "60",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇲🇾"
    },
    {
      countryNameEn: "Mozambique",
      countryNameLocal: "Mozambique",
      countryCode: "MZ",
      currencyCode: "MZN",
      currencyNameEn: "Mozambican metical",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "258",
      areaCodes: [],
      region: "Africa",
      flag: "🇲🇿"
    },
    {
      countryNameEn: "Namibia",
      countryNameLocal: "Namibia",
      countryCode: "NA",
      currencyCode: "NAD",
      currencyNameEn: "Namibian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "264",
      areaCodes: [],
      region: "Africa",
      flag: "🇳🇦"
    },
    {
      countryNameEn: "New Caledonia",
      countryNameLocal: "Nouvelle-Calédonie",
      countryCode: "NC",
      currencyCode: "XPF",
      currencyNameEn: "CFP franc (franc Pacifique)",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "687",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇨"
    },
    {
      countryNameEn: "Norfolk Island",
      countryNameLocal: "Norfolk Island",
      countryCode: "NF",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "672",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇫"
    },
    {
      countryNameEn: "Nigeria",
      countryNameLocal: "Nigeria",
      countryCode: "NG",
      currencyCode: "NGN",
      currencyNameEn: "Nigerian naira",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "234",
      areaCodes: [],
      region: "Africa",
      flag: "🇳🇬"
    },
    {
      countryNameEn: "Nicaragua",
      countryNameLocal: "Nicaragua",
      countryCode: "NI",
      currencyCode: "NIO",
      currencyNameEn: "Nicaraguan córdoba",
      tinType: "RUC",
      tinName: "Registro Unico de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "505",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇳🇮"
    },
    {
      countryNameEn: "Norway",
      countryNameLocal: "Norge, Noreg",
      countryCode: "NO",
      currencyCode: "NOK",
      currencyNameEn: "Norwegian krone",
      tinType: "Orgnr",
      tinName: "Organisasjonsnummer",
      officialLanguageCode: "nb",
      officialLanguageNameEn: "Norwegian Bokmål",
      officialLanguageNameLocal: "Norsk Bokmål",
      countryCallingCode: "47",
      areaCodes: [],
      region: "Europe",
      flag: "🇳🇴"
    },
    {
      countryNameEn: "Nepal",
      countryNameLocal: "",
      countryCode: "NP",
      currencyCode: "NPR",
      currencyNameEn: "Nepalese rupee",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ne",
      officialLanguageNameEn: "Nepali",
      officialLanguageNameLocal: "नेपाली",
      countryCallingCode: "977",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇵"
    },
    {
      countryNameEn: "Nauru",
      countryNameLocal: "Nauru",
      countryCode: "NR",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "na",
      officialLanguageNameEn: "Nauru",
      officialLanguageNameLocal: "Dorerin Naoero",
      countryCallingCode: "674",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇷"
    },
    {
      countryNameEn: "Niue",
      countryNameLocal: "Niue",
      countryCode: "NU",
      currencyCode: "NZD",
      currencyNameEn: "New Zealand dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "niu",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "683",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇺"
    },
    {
      countryNameEn: "New Zealand",
      countryNameLocal: "New Zealand",
      countryCode: "NZ",
      currencyCode: "NZD",
      currencyNameEn: "New Zealand dollar",
      tinType: "NZBN",
      tinName: "NZ Business Number",
      officialLanguageCode: "mi",
      officialLanguageNameEn: "Maori",
      officialLanguageNameLocal: "te reo Māori",
      countryCallingCode: "64",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇳🇿"
    },
    {
      countryNameEn: "Oman",
      countryNameLocal: "سلطنة عُمان",
      countryCode: "OM",
      currencyCode: "OMR",
      currencyNameEn: "Omani rial",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "968",
      areaCodes: [],
      region: "Arab States",
      flag: "🇴🇲"
    },
    {
      countryNameEn: "Panama",
      countryNameLocal: "Panama",
      countryCode: "PA",
      currencyCode: "PAB",
      currencyNameEn: "Panamanian balboa",
      tinType: "RUC",
      tinName: "Registro Unico de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "507",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇵🇦"
    },
    {
      countryNameEn: "Peru",
      countryNameLocal: "Perú",
      countryCode: "PE",
      currencyCode: "PEN",
      currencyNameEn: "Peruvian sol",
      tinType: "RUC",
      tinName: "Registro Unico de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "51",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇵🇪"
    },
    {
      countryNameEn: "French Polynesia",
      countryNameLocal: "Polynésie française",
      countryCode: "PF",
      currencyCode: "XPF",
      currencyNameEn: "CFP franc (franc Pacifique)",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "689",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇫"
    },
    {
      countryNameEn: "Papua New Guinea",
      countryNameLocal: "Papua New Guinea",
      countryCode: "PG",
      currencyCode: "PGK",
      currencyNameEn: "Papua New Guinean kina",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "675",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇬"
    },
    {
      countryNameEn: "Pakistan",
      countryNameLocal: "پاکستان",
      countryCode: "PK",
      currencyCode: "PKR",
      currencyNameEn: "Pakistani rupee",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "92",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇰"
    },
    {
      countryNameEn: "Poland",
      countryNameLocal: "Polska",
      countryCode: "PL",
      currencyCode: "PLN",
      currencyNameEn: "Polish złoty",
      tinType: "NIP",
      tinName: "numer identyfikacji podatkowej",
      officialLanguageCode: "pl",
      officialLanguageNameEn: "Polish",
      officialLanguageNameLocal: "język polski, polszczyzna",
      countryCallingCode: "48",
      areaCodes: [],
      region: "Europe",
      flag: "🇵🇱"
    },
    {
      countryNameEn: "Saint Pierre and Miquelon",
      countryNameLocal: "Saint-Pierre-et-Miquelon",
      countryCode: "PM",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "508",
      areaCodes: [],
      region: "North America",
      flag: "🇵🇲"
    },
    {
      countryNameEn: "Pitcairn",
      countryNameLocal: "Pitcairn",
      countryCode: "PN",
      currencyCode: "NZD",
      currencyNameEn: "New Zealand dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "64",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇳"
    },
    {
      countryNameEn: "Puerto Rico",
      countryNameLocal: "Puerto Rico",
      countryCode: "PR",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "1",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇵🇷"
    },
    {
      countryNameEn: "Palestine, State of",
      countryNameLocal: "Palestinian Territory",
      countryCode: "PS",
      currencyCode: "",
      currencyNameEn: "",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "970",
      areaCodes: [],
      region: "Arab States",
      flag: "🇵🇸"
    },
    {
      countryNameEn: "Portugal",
      countryNameLocal: "Portugal",
      countryCode: "PT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "NIPC",
      tinName: "Número de Identificação de Pessoa Coletiva (NIPC)",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "351",
      areaCodes: [],
      region: "Europe",
      flag: "🇵🇹"
    },
    {
      countryNameEn: "Palau",
      countryNameLocal: "Palau",
      countryCode: "PW",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "680",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇼"
    },
    {
      countryNameEn: "Paraguay",
      countryNameLocal: "Paraguay",
      countryCode: "PY",
      currencyCode: "PYG",
      currencyNameEn: "Paraguayan guaraní",
      tinType: "RUC",
      tinName: "Registro Unico de Contribuyentes",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "595",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇵🇾"
    },
    {
      countryNameEn: "Qatar",
      countryNameLocal: "قطر",
      countryCode: "QA",
      currencyCode: "QAR",
      currencyNameEn: "Qatari riyal",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "974",
      areaCodes: [],
      region: "Arab States",
      flag: "🇶🇦"
    },
    {
      countryNameEn: "Réunion",
      countryNameLocal: "La Réunion",
      countryCode: "RE",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "262",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇷🇪"
    },
    {
      countryNameEn: "Romania",
      countryNameLocal: "România",
      countryCode: "RO",
      currencyCode: "RON",
      currencyNameEn: "Romanian leu",
      tinType: "CIF",
      tinName: "Codul de identificare fiscală",
      officialLanguageCode: "ro",
      officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
      officialLanguageNameLocal: "Română",
      countryCallingCode: "40",
      areaCodes: [],
      region: "Europe",
      flag: "🇷🇴"
    },
    {
      countryNameEn: "Serbia",
      countryNameLocal: "Србија",
      countryCode: "RS",
      currencyCode: "RSD",
      currencyNameEn: "Serbian dinar",
      tinType: "PIB",
      tinName: "Poreski identifikacioni broj",
      officialLanguageCode: "sr",
      officialLanguageNameEn: "Serbian",
      officialLanguageNameLocal: "српски језик",
      countryCallingCode: "381",
      areaCodes: [],
      region: "Europe",
      flag: "🇷🇸"
    },
    {
      countryNameEn: "Russia",
      countryNameLocal: "Россия",
      countryCode: "RU",
      currencyCode: "RUB",
      currencyNameEn: "Russian ruble",
      tinType: "ИНН",
      tinName: "Идентификационный номер налогоплательщика",
      officialLanguageCode: "ru",
      officialLanguageNameEn: "Russian",
      officialLanguageNameLocal: "русский",
      countryCallingCode: "7",
      areaCodes: [],
      region: "Europe",
      flag: "🇷🇺"
    },
    {
      countryNameEn: "Rwanda",
      countryNameLocal: "Rwanda",
      countryCode: "RW",
      currencyCode: "RWF",
      currencyNameEn: "Rwandan franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "rw",
      officialLanguageNameEn: "Kinyarwanda",
      officialLanguageNameLocal: "Ikinyarwanda",
      countryCallingCode: "250",
      areaCodes: [],
      region: "Africa",
      flag: "🇷🇼"
    },
    {
      countryNameEn: "Saudi Arabia",
      countryNameLocal: "السعودية",
      countryCode: "SA",
      currencyCode: "SAR",
      currencyNameEn: "Saudi riyal",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "966",
      areaCodes: [],
      region: "Arab States",
      flag: "🇸🇦"
    },
    {
      countryNameEn: "Solomon Islands",
      countryNameLocal: "Solomon Islands",
      countryCode: "SB",
      currencyCode: "SBD",
      currencyNameEn: "Solomon Islands dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "677",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇸🇧"
    },
    {
      countryNameEn: "Seychelles",
      countryNameLocal: "Seychelles",
      countryCode: "SC",
      currencyCode: "SCR",
      currencyNameEn: "Seychelles rupee",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "248",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇨"
    },
    {
      countryNameEn: "Sweden",
      countryNameLocal: "Sverige",
      countryCode: "SE",
      currencyCode: "SEK",
      currencyNameEn: "Swedish krona/kronor",
      tinType: "Momsnr.",
      tinName: "VAT-nummer",
      officialLanguageCode: "sv",
      officialLanguageNameEn: "Swedish",
      officialLanguageNameLocal: "Svenska",
      countryCallingCode: "46",
      areaCodes: [],
      region: "Europe",
      flag: "🇸🇪"
    },
    {
      countryNameEn: "Singapore",
      countryNameLocal: "Singapore",
      countryCode: "SG",
      currencyCode: "SGD",
      currencyNameEn: "Singapore dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "zh-hans",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "65",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇸🇬"
    },
    {
      countryNameEn: "Saint Helena, Ascension and Tristan da Cunha",
      countryNameLocal: "Saint Helena",
      countryCode: "SH",
      currencyCode: "SHP",
      currencyNameEn: "Saint Helena pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "290",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇭"
    },
    {
      countryNameEn: "Slovenia",
      countryNameLocal: "Slovenija",
      countryCode: "SI",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "ID za DDV",
      tinName: "Davčna številka",
      officialLanguageCode: "sl",
      officialLanguageNameEn: "Slovenian",
      officialLanguageNameLocal: "Slovenski Jezik, Slovenščina",
      countryCallingCode: "386",
      areaCodes: [],
      region: "Europe",
      flag: "🇸🇮"
    },
    {
      countryNameEn: "Svalbard and Jan Mayen",
      countryNameLocal: "Svalbard and Jan Mayen",
      countryCode: "SJ",
      currencyCode: "NOK",
      currencyNameEn: "Norwegian krone",
      tinType: "",
      tinName: "",
      officialLanguageCode: "no",
      officialLanguageNameEn: "Norwegian",
      officialLanguageNameLocal: "Norsk",
      countryCallingCode: "4779",
      areaCodes: [],
      region: "Europe",
      flag: "🇸🇯"
    },
    {
      countryNameEn: "Slovakia",
      countryNameLocal: "Slovensko",
      countryCode: "SK",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "IČ DPH",
      tinName: "Identifikačné číslo pre daň z pridanej hodnoty",
      officialLanguageCode: "sk",
      officialLanguageNameEn: "Slovak",
      officialLanguageNameLocal: "Slovenčina, Slovenský Jazyk",
      countryCallingCode: "421",
      areaCodes: [],
      region: "Europe",
      flag: "🇸🇰"
    },
    {
      countryNameEn: "Sierra Leone",
      countryNameLocal: "Sierra Leone",
      countryCode: "SL",
      currencyCode: "SLL",
      currencyNameEn: "Sierra Leonean leone",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "232",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇱"
    },
    {
      countryNameEn: "Republic of San Marino",
      countryNameLocal: "Repubblica di San Marino",
      countryCode: "SM",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "C.O.E.",
      tinName: "Codice operatore economico",
      officialLanguageCode: "it",
      officialLanguageNameEn: "Italian",
      officialLanguageNameLocal: "Italiano",
      countryCallingCode: "378",
      areaCodes: [],
      region: "Europe",
      flag: "🇸🇲"
    },
    {
      countryNameEn: "Senegal",
      countryNameLocal: "Sénégal",
      countryCode: "SN",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "221",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇳"
    },
    {
      countryNameEn: "Somalia",
      countryNameLocal: "Somalia, الصومال",
      countryCode: "SO",
      currencyCode: "SOS",
      currencyNameEn: "Somali shilling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "so",
      officialLanguageNameEn: "Somali",
      officialLanguageNameLocal: "Soomaaliga, af Soomaali",
      countryCallingCode: "252",
      areaCodes: [],
      region: "Arab States",
      flag: "🇸🇴"
    },
    {
      countryNameEn: "Suriname",
      countryNameLocal: "Suriname",
      countryCode: "SR",
      currencyCode: "SRD",
      currencyNameEn: "Surinamese dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "597",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇸🇷"
    },
    {
      countryNameEn: "South Sudan",
      countryNameLocal: "South Sudan",
      countryCode: "SS",
      currencyCode: "SSP",
      currencyNameEn: "South Sudanese pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "211",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇸"
    },
    {
      countryNameEn: "Sao Tome and Principe",
      countryNameLocal: "São Tomé e Príncipe",
      countryCode: "ST",
      currencyCode: "STN",
      currencyNameEn: "",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "239",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇹"
    },
    {
      countryNameEn: "El Salvador",
      countryNameLocal: "El Salvador",
      countryCode: "SV",
      currencyCode: "SVC",
      currencyNameEn: "Salvadoran colón",
      tinType: "NIT",
      tinName: "Número de Identificación Tributaria",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "503",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇸🇻"
    },
    {
      countryNameEn: "Sint Maarten (Dutch part)",
      countryNameLocal: "Sint Maarten",
      countryCode: "SX",
      currencyCode: "ANG",
      currencyNameEn: "Netherlands Antillean guilder",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "1721",
      areaCodes: [],
      region: "Unknown",
      flag: "🇸🇽"
    },
    {
      countryNameEn: "Syrian Arab Republic",
      countryNameLocal: "سوريا, Sūriyya",
      countryCode: "SY",
      currencyCode: "SYP",
      currencyNameEn: "Syrian pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "963",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇸🇾"
    },
    {
      countryNameEn: "Chad",
      countryNameLocal: "Tchad, تشاد",
      countryCode: "TD",
      currencyCode: "XAF",
      currencyNameEn: "CFA franc BEAC",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "235",
      areaCodes: [],
      region: "Africa",
      flag: "🇹🇩"
    },
    {
      countryNameEn: "Togo",
      countryNameLocal: "Togo",
      countryCode: "TG",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "228",
      areaCodes: [],
      region: "Africa",
      flag: "🇹🇬"
    },
    {
      countryNameEn: "Thailand",
      countryNameLocal: "ประเทศไทย",
      countryCode: "TH",
      currencyCode: "THB",
      currencyNameEn: "Thai baht",
      tinType: "",
      tinName: "",
      officialLanguageCode: "th",
      officialLanguageNameEn: "Thai",
      officialLanguageNameLocal: "ไทย",
      countryCallingCode: "66",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇭"
    },
    {
      countryNameEn: "Tajikistan",
      countryNameLocal: ",",
      countryCode: "TJ",
      currencyCode: "TJS",
      currencyNameEn: "Tajikistani somoni",
      tinType: "",
      tinName: "",
      officialLanguageCode: "tg",
      officialLanguageNameEn: "Tajik",
      officialLanguageNameLocal: "тоҷикӣ, toçikī, تاجیکی‎",
      countryCallingCode: "992",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇯"
    },
    {
      countryNameEn: "Tokelau",
      countryNameLocal: "Tokelau",
      countryCode: "TK",
      currencyCode: "NZD",
      currencyNameEn: "New Zealand dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "tkl",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "690",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇰"
    },
    {
      countryNameEn: "Timor-Leste",
      countryNameLocal: "Timor-Leste, Timor Lorosa'e",
      countryCode: "TL",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "pt",
      officialLanguageNameEn: "Portuguese",
      officialLanguageNameLocal: "Português",
      countryCallingCode: "670",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇱"
    },
    {
      countryNameEn: "Turkmenistan",
      countryNameLocal: "Türkmenistan",
      countryCode: "TM",
      currencyCode: "TMT",
      currencyNameEn: "Turkmenistan manat",
      tinType: "",
      tinName: "",
      officialLanguageCode: "tk",
      officialLanguageNameEn: "Turkmen",
      officialLanguageNameLocal: "Türkmen, Түркмен",
      countryCallingCode: "993",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇲"
    },
    {
      countryNameEn: "Tunisia",
      countryNameLocal: "تونس, Tunisie",
      countryCode: "TN",
      currencyCode: "TND",
      currencyNameEn: "Tunisian dinar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "216",
      areaCodes: [],
      region: "Arab States",
      flag: "🇹🇳"
    },
    {
      countryNameEn: "Tonga",
      countryNameLocal: "Tonga",
      countryCode: "TO",
      currencyCode: "TOP",
      currencyNameEn: "Tongan paʻanga",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "676",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇴"
    },
    {
      countryNameEn: "Turkey",
      countryNameLocal: "Türkiye",
      countryCode: "TR",
      currencyCode: "TRY",
      currencyNameEn: "Turkish lira",
      tinType: "KDV",
      tinName: "Vergi Kimlik Numarası",
      officialLanguageCode: "tr",
      officialLanguageNameEn: "Turkish",
      officialLanguageNameLocal: "Türkçe",
      countryCallingCode: "90",
      areaCodes: [],
      region: "Europe",
      flag: "🇹🇷"
    },
    {
      countryNameEn: "Trinidad and Tobago",
      countryNameLocal: "Trinidad and Tobago",
      countryCode: "TT",
      currencyCode: "TTD",
      currencyNameEn: "Trinidad and Tobago dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "868",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇹🇹"
    },
    {
      countryNameEn: "Tuvalu",
      countryNameLocal: "Tuvalu",
      countryCode: "TV",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "688",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇻"
    },
    {
      countryNameEn: "United Republic of Tanzania",
      countryNameLocal: "Tanzania",
      countryCode: "TZ",
      currencyCode: "TZS",
      currencyNameEn: "Tanzanian shilling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "sw",
      officialLanguageNameEn: "Swahili",
      officialLanguageNameLocal: "Kiswahili",
      countryCallingCode: "255",
      areaCodes: [],
      region: "Africa",
      flag: "🇹🇿"
    },
    {
      countryNameEn: "Ukraine",
      countryNameLocal: "Україна",
      countryCode: "UA",
      currencyCode: "UAH",
      currencyNameEn: "Ukrainian hryvnia",
      tinType: "ІНПП",
      tinName: "Ідентифікаційний номер платника податків",
      officialLanguageCode: "uk",
      officialLanguageNameEn: "Ukrainian",
      officialLanguageNameLocal: "Українська",
      countryCallingCode: "380",
      areaCodes: [],
      region: "Europe",
      flag: "🇺🇦"
    },
    {
      countryNameEn: "Uganda",
      countryNameLocal: "Uganda",
      countryCode: "UG",
      currencyCode: "UGX",
      currencyNameEn: "Ugandan shilling",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "256",
      areaCodes: [],
      region: "Africa",
      flag: "🇺🇬"
    },
    {
      countryNameEn: "United States of America",
      countryNameLocal: "United States of America",
      countryCode: "US",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "EIN",
      tinName: "Tax Identification Number",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1",
      areaCodes: [],
      region: "North America",
      flag: "🇺🇸"
    },
    {
      countryNameEn: "Uruguay",
      countryNameLocal: "Uruguay",
      countryCode: "UY",
      currencyCode: "UYU",
      currencyNameEn: "Uruguayan peso",
      tinType: "RUT",
      tinName: "Registro Único Tributario",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "598",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇺🇾"
    },
    {
      countryNameEn: "Uzbekistan",
      countryNameLocal: "",
      countryCode: "UZ",
      currencyCode: "UZS",
      currencyNameEn: "Uzbekistan som",
      tinType: "СТИР",
      tinName: "Солиқ тўловчиларнинг идентификация рақами",
      officialLanguageCode: "uz",
      officialLanguageNameEn: "Uzbek",
      officialLanguageNameLocal: "Oʻzbek, Ўзбек, أۇزبېك‎",
      countryCallingCode: "998",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇺🇿"
    },
    {
      countryNameEn: "Saint Vincent and the Grenadines",
      countryNameLocal: "Saint Vincent and the Grenadines",
      countryCode: "VC",
      currencyCode: "XCD",
      currencyNameEn: "East Caribbean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1784",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇻🇨"
    },
    {
      countryNameEn: "Venezuela (Bolivarian Republic of)",
      countryNameLocal: "Venezuela",
      countryCode: "VE",
      currencyCode: "VES",
      currencyNameEn: "",
      tinType: "RIF",
      tinName: "Registro de Informacion Fiscal",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "58",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇻🇪"
    },
    {
      countryNameEn: "Virgin Islands (British)",
      countryNameLocal: "British Virgin Islands",
      countryCode: "VG",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1284",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇻🇬"
    },
    {
      countryNameEn: "Virgin Islands (U.S.)",
      countryNameLocal: "United States Virgin Islands",
      countryCode: "VI",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1340",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇻🇮"
    },
    {
      countryNameEn: "Vietnam",
      countryNameLocal: "Việt Nam",
      countryCode: "VN",
      currencyCode: "VND",
      currencyNameEn: "Vietnamese đồng",
      tinType: "",
      tinName: "",
      officialLanguageCode: "vi",
      officialLanguageNameEn: "Vietnamese",
      officialLanguageNameLocal: "Tiếng Việt",
      countryCallingCode: "84",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇻🇳"
    },
    {
      countryNameEn: "Vanuatu",
      countryNameLocal: "Vanuatu",
      countryCode: "VU",
      currencyCode: "VUV",
      currencyNameEn: "Vanuatu vatu",
      tinType: "",
      tinName: "",
      officialLanguageCode: "bi",
      officialLanguageNameEn: "Bislama",
      officialLanguageNameLocal: "Bislama",
      countryCallingCode: "678",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇻🇺"
    },
    {
      countryNameEn: "Wallis and Futuna",
      countryNameLocal: "Wallis-et-Futuna",
      countryCode: "WF",
      currencyCode: "XPF",
      currencyNameEn: "CFP franc (franc Pacifique)",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "681",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇼🇫"
    },
    {
      countryNameEn: "Samoa",
      countryNameLocal: "Samoa",
      countryCode: "WS",
      currencyCode: "WST",
      currencyNameEn: "Samoan tala",
      tinType: "",
      tinName: "",
      officialLanguageCode: "sm",
      officialLanguageNameEn: "Samoan",
      officialLanguageNameLocal: "gagana fa'a Samoa",
      countryCallingCode: "685",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇼🇸"
    },
    {
      countryNameEn: "Yemen",
      countryNameLocal: "اليَمَن",
      countryCode: "YE",
      currencyCode: "YER",
      currencyNameEn: "Yemeni rial",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "967",
      areaCodes: [],
      region: "Arab States",
      flag: "🇾🇪"
    },
    {
      countryNameEn: "Mayotte",
      countryNameLocal: "Mayotte",
      countryCode: "YT",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "262",
      areaCodes: [],
      region: "Africa",
      flag: "🇾🇹"
    },
    {
      countryNameEn: "South Africa",
      countryNameLocal: "South Africa",
      countryCode: "ZA",
      currencyCode: "ZAR",
      currencyNameEn: "South African rand",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "27",
      areaCodes: [],
      region: "Africa",
      flag: "🇿🇦"
    },
    {
      countryNameEn: "Zambia",
      countryNameLocal: "Zambia",
      countryCode: "ZM",
      currencyCode: "ZMW",
      currencyNameEn: "Zambian kwacha",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "260",
      areaCodes: [],
      region: "Africa",
      flag: "🇿🇲"
    },
    {
      countryNameEn: "Zimbabwe",
      countryNameLocal: "Zimbabwe",
      countryCode: "ZW",
      currencyCode: "ZWL",
      currencyNameEn: "Zimbabwean dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "263",
      areaCodes: [],
      region: "Africa",
      flag: "🇿🇼"
    },
    {
      countryNameEn: "Eswatini",
      countryNameLocal: "Swaziland",
      countryCode: "SZ",
      currencyCode: "SZL",
      currencyNameEn: "Swazi lilangeni",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "268",
      areaCodes: [],
      region: "Africa",
      flag: "🇸🇿"
    },
    {
      countryNameEn: "North Macedonia",
      countryNameLocal: "Македонија",
      countryCode: "MK",
      currencyCode: "MKD",
      currencyNameEn: "Macedonian denar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "mk",
      officialLanguageNameEn: "Macedonian",
      officialLanguageNameLocal: "македонски јазик",
      countryCallingCode: "389",
      areaCodes: [],
      region: "Europe",
      flag: "🇲🇰"
    },
    {
      countryNameEn: "Philippines",
      countryNameLocal: "Philippines",
      countryCode: "PH",
      currencyCode: "PHP",
      currencyNameEn: "Philippine peso",
      tinType: "TIN",
      tinName: "Tax Identification Number",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "63",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇵🇭"
    },
    {
      countryNameEn: "Netherlands",
      countryNameLocal: "Nederland",
      countryCode: "NL",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "Btw-nr.",
      tinName: "Btw-nummer",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "31",
      areaCodes: [],
      region: "Europe",
      flag: "🇳🇱"
    },
    {
      countryNameEn: "United Arab Emirates",
      countryNameLocal: "دولة الإمارات العربيّة المتّحدة",
      countryCode: "AE",
      currencyCode: "AED",
      currencyNameEn: "United Arab Emirates dirham",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "971",
      areaCodes: [],
      region: "Arab States",
      flag: "🇦🇪"
    },
    {
      countryNameEn: "Republic of Moldova",
      countryNameLocal: "Moldova, Молдавия",
      countryCode: "MD",
      currencyCode: "MDL",
      currencyNameEn: "Moldovan leu",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ro",
      officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
      officialLanguageNameLocal: "Română",
      countryCallingCode: "373",
      areaCodes: [],
      region: "Europe",
      flag: "🇲🇩"
    },
    {
      countryNameEn: "Gambia",
      countryNameLocal: "The Gambia",
      countryCode: "GM",
      currencyCode: "GMD",
      currencyNameEn: "Gambian dalasi",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "220",
      areaCodes: [],
      region: "Africa",
      flag: "🇬🇲"
    },
    {
      countryNameEn: "Dominican Republic",
      countryNameLocal: "República Dominicana",
      countryCode: "DO",
      currencyCode: "DOP",
      currencyNameEn: "Dominican peso",
      tinType: "RNC",
      tinName: "Registro Nacional del Contribuyente",
      officialLanguageCode: "es",
      officialLanguageNameEn: "Spanish, Castilian",
      officialLanguageNameLocal: "Español",
      countryCallingCode: "1",
      areaCodes: [],
      region: "South/Latin America",
      flag: "🇩🇴"
    },
    {
      countryNameEn: "Sudan",
      countryNameLocal: "السودان",
      countryCode: "SD",
      currencyCode: "SDG",
      currencyNameEn: "Sudanese pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "ar",
      officialLanguageNameEn: "Arabic",
      officialLanguageNameLocal: "العربية",
      countryCallingCode: "249",
      areaCodes: [],
      region: "Arab States",
      flag: "🇸🇩"
    },
    {
      countryNameEn: "Lao People's Democratic Republic",
      countryNameLocal: "ປະຊາຊົນລາວ",
      countryCode: "LA",
      currencyCode: "LAK",
      currencyNameEn: "Lao kip",
      tinType: "",
      tinName: "",
      officialLanguageCode: "lo",
      officialLanguageNameEn: "Lao",
      officialLanguageNameLocal: "ພາສາລາວ",
      countryCallingCode: "856",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇱🇦"
    },
    {
      countryNameEn: "Taiwan, Province of China",
      countryNameLocal: "Taiwan",
      countryCode: "TW",
      currencyCode: "TWD",
      currencyNameEn: "New Taiwan dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "zh-hant",
      officialLanguageNameEn: "",
      officialLanguageNameLocal: "",
      countryCallingCode: "886",
      areaCodes: [],
      region: "Asia & Pacific",
      flag: "🇹🇼"
    },
    {
      countryNameEn: "Republic of the Congo",
      countryNameLocal: "République du Congo",
      countryCode: "CG",
      currencyCode: "XAF",
      currencyNameEn: "CFA franc BEAC",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "242",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇬"
    },
    {
      countryNameEn: "Czechia",
      countryNameLocal: "Česká republika",
      countryCode: "CZ",
      currencyCode: "CZK",
      currencyNameEn: "Czech koruna",
      tinType: "DIČ",
      tinName: "Daňové identifikační číslo",
      officialLanguageCode: "cs",
      officialLanguageNameEn: "Czech",
      officialLanguageNameLocal: "Čeština",
      countryCallingCode: "420",
      areaCodes: [],
      region: "Europe",
      flag: "🇨🇿"
    },
    {
      countryNameEn: "United Kingdom",
      countryNameLocal: "Great Britain",
      countryCode: "GB",
      currencyCode: "GBP",
      currencyNameEn: "Pound sterling",
      tinType: "VAT Reg No",
      tinName: "Value added tax registration number",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "44",
      areaCodes: [],
      region: "Europe",
      flag: "🇬🇧"
    },
    {
      countryNameEn: "Niger",
      countryNameLocal: "Niger",
      countryCode: "NE",
      currencyCode: "XOF",
      currencyNameEn: "CFA franc BCEAO",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "227",
      areaCodes: [],
      region: "Africa",
      flag: "🇳🇪"
    },
    {
      countryNameEn: "Democratic Republic of the Congo",
      countryNameLocal: "Democratic Republic of the Congo",
      countryCode: "CD",
      currencyCode: "CDF",
      currencyNameEn: "Congolese franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "243",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇩"
    },
    {
      countryNameEn: "Commonwealth of The Bahamas",
      countryNameLocal: "Commonwealth of The Bahamas",
      countryCode: "BS",
      currencyCode: "BSD",
      currencyNameEn: "Bahamian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1 242",
      areaCodes: [],
      region: "Caribbean",
      flag: "🇧🇸"
    },
    {
      countryNameEn: "Cocos (Keeling) Islands",
      countryNameLocal: "Pulu Kokos (Keeling)",
      countryCode: "CC",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "61 891",
      areaCodes: [],
      region: "Australia",
      flag: "🇨🇨"
    },
    {
      countryNameEn: "Central African Republic",
      countryNameLocal: "République centrafricaine",
      countryCode: "CF",
      currencyCode: "XAF",
      currencyNameEn: "Central African CFA",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "236",
      areaCodes: [],
      region: "Africa",
      flag: "🇨🇫"
    },
    {
      countryNameEn: "Cook Islands",
      countryNameLocal: "Kūki 'Āirani",
      countryCode: "CK",
      currencyCode: "NZD",
      currencyNameEn: "New Zealand dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "682",
      areaCodes: [],
      region: "South Pacific Ocean",
      flag: "🇨🇰"
    },
    {
      countryNameEn: "Falkland Islands",
      countryNameLocal: "Falkland Islands",
      countryCode: "FK",
      currencyCode: "FKP",
      currencyNameEn: "Falklands pound",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "500",
      areaCodes: [],
      region: "South Atlantic Ocean",
      flag: "🇫🇰"
    },
    {
      countryNameEn: "Faroe Islands",
      countryNameLocal: "Færøerne",
      countryCode: "FO",
      currencyCode: "DKK",
      currencyNameEn: "Faroese króna",
      tinType: "",
      tinName: "",
      officialLanguageCode: "da",
      officialLanguageNameEn: "Danish",
      officialLanguageNameLocal: "dansk",
      countryCallingCode: "298",
      areaCodes: [],
      region: "Europe",
      flag: "🇫🇴"
    },
    {
      countryNameEn: "Territory of Heard Island and McDonald Islands",
      countryNameLocal: "Territory of Heard Island and McDonald Islands",
      countryCode: "HM",
      currencyCode: "AUD",
      currencyNameEn: "Australian dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "672",
      areaCodes: [],
      region: "Indian Ocean",
      flag: "🇭🇲"
    },
    {
      countryNameEn: "British Indian Ocean Territory",
      countryNameLocal: "British Indian Ocean Territory",
      countryCode: "IO",
      currencyCode: "USD",
      currencyNameEn: "United States Dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "246",
      areaCodes: [],
      region: "Indian Ocean",
      flag: "🇮🇴"
    },
    {
      countryNameEn: "Comoros",
      countryNameLocal: "Umoja wa Komori",
      countryCode: "KM",
      currencyCode: "KMF",
      currencyNameEn: "Comorian franc",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "269",
      areaCodes: [],
      region: "Indian Ocean",
      flag: "🇰🇲"
    },
    {
      countryNameEn: "Cayman Islands",
      countryNameLocal: "Cayman Islands",
      countryCode: "KY",
      currencyCode: "KYD",
      currencyNameEn: "Cayman Islands dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1 345",
      areaCodes: [],
      region: "Caribbean Sea",
      flag: "🇰🇾"
    },
    {
      countryNameEn: "Republic of the Marshall Islands",
      countryNameLocal: "Aolepān Aorōkin Ṃajeḷ",
      countryCode: "MH",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "692",
      areaCodes: [],
      region: "Pacific Ocean",
      flag: "🇲🇭"
    },
    {
      countryNameEn: "Commonwealth of the Northern Mariana Islands",
      countryNameLocal: "Sankattan Siha Na Islas Mariånas",
      countryCode: "MP",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1 670",
      areaCodes: [],
      region: "Pacific Ocean",
      flag: "🇲🇵"
    },
    {
      countryNameEn: "Turks and Caicos Islands",
      countryNameLocal: "Turks and Caicos Islands",
      countryCode: "TC",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1 649",
      areaCodes: [],
      region: "Atlantic Ocean",
      flag: "🇹🇨"
    },
    {
      countryNameEn: "French Southern and Antarctic Lands",
      countryNameLocal: "Terres australes et antarctiques françaises",
      countryCode: "TF",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "fr",
      officialLanguageNameEn: "French",
      officialLanguageNameLocal: "Français",
      countryCallingCode: "672",
      areaCodes: [],
      region: "Indian Ocean",
      flag: "🇹🇫"
    },
    {
      countryNameEn: "United States Minor Outlying Islands",
      countryNameLocal: "United States Minor Outlying Islands",
      countryCode: "UM",
      currencyCode: "USD",
      currencyNameEn: "United States dollar",
      tinType: "",
      tinName: "",
      officialLanguageCode: "en",
      officialLanguageNameEn: "English",
      officialLanguageNameLocal: "English",
      countryCallingCode: "1",
      areaCodes: [],
      region: "Pacific Ocean",
      flag: "🇺🇲"
    },
    {
      countryNameEn: "Holy See",
      countryNameLocal: "Sancta Sedes",
      countryCode: "VA",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "la",
      officialLanguageNameEn: "Latin",
      officialLanguageNameLocal: "lingua latīna",
      countryCallingCode: "39",
      areaCodes: [],
      region: "Europe",
      flag: "🇻🇦"
    },
    {
      countryNameEn: "Republic of Kosovo",
      countryNameLocal: "Republika e Kosovës",
      countryCode: "XK",
      currencyCode: "EUR",
      currencyNameEn: "Euro",
      tinType: "",
      tinName: "",
      officialLanguageCode: "sq",
      officialLanguageNameEn: "Albanian",
      officialLanguageNameLocal: "Shqip",
      countryCallingCode: "383",
      region: "Europe",
      flag: "🇽🇰"
    },
    {
      countryNameEn: "Netherlands Antilles",
      countryNameLocal: "Nederlandse Antillen",
      countryCode: "AN",
      currencyCode: "ANG",
      currencyNameEn: "Netherlands Antillean guilder",
      tinType: "",
      tinName: "",
      officialLanguageCode: "nl",
      officialLanguageNameEn: "Dutch, Flemish",
      officialLanguageNameLocal: "Nederlands, Vlaams",
      countryCallingCode: "599",
      region: "Europe",
      flag: "🇧🇶"
    }
  ];
  return Y.default = a, Y;
}
var ma;
function yo() {
  if (ma) return w;
  ma = 1;
  var a = w && w.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(w, "__esModule", { value: !0 }), w.customList = w.customArray = w.findOne = w.filter = w.all = w.utils = void 0;
  const e = a(so()), n = a(fo()), r = a(mo());
  w.utils = {
    groupBy: e.default
  };
  function c() {
    return r.default;
  }
  w.all = c;
  function i(u, N) {
    return r.default.filter((C) => C[u] === N);
  }
  w.filter = i;
  function g(u, N) {
    return r.default.find((C) => C[u] === N);
  }
  w.findOne = g;
  function d(u = {
    name: "{countryNameEn} ({countryCode})",
    value: "{countryCode}"
  }, { sortBy: N, sortDataBy: C, filter: k } = {}) {
    const E = [];
    let b = r.default;
    if (typeof k == "function" && (b = b.filter(k)), C) {
      const S = new Intl.Collator([], { sensitivity: "accent" });
      b.sort((A, T) => S.compare(A[C], T[C]));
    }
    if (b.forEach((S) => {
      const A = {};
      for (const T in u)
        A[T] = (0, n.default)(u[T], S);
      E.push(A);
    }), N && u[N]) {
      const S = new Intl.Collator([], { sensitivity: "accent" });
      E.sort((A, T) => S.compare(A[N], T[N]));
    }
    return E;
  }
  w.customArray = d;
  function m(u = "countryCode", N = "{countryNameEn} ({countryCode})", { filter: C } = {}) {
    const k = {};
    let E = r.default;
    return typeof C == "function" && (E = E.filter(C)), E.forEach((b) => {
      const S = (0, n.default)(N, b);
      k[String(b[u])] = S;
    }), k;
  }
  return w.customList = m, w;
}
var Co = yo();
const No = {
  emits: ["update:callingCode"],
  data() {
    return {
      countries: [],
      selectedCountry: {
        code: "US",
        name: "United States of America",
        callingCode: "1"
      }
    };
  },
  mounted() {
    const a = Co.customList(
      "countryCode",
      "{countryNameEn}|{countryCallingCode}"
    );
    this.countries = Object.entries(a).map(([e, n]) => {
      const [r, c] = n.split("|");
      let i = c.split(" ")[0];
      return i === "5997" ? i = "599" : /^\d{4}$/.test(i) && (i = i[0]), {
        code: e,
        name: r,
        callingCode: i
      };
    }).sort((e, n) => e.name.localeCompare(n.name));
  },
  methods: {
    flag(a) {
      return go(a);
    },
    selectCountry(a) {
      this.selectedCountry = a, this.$emit("update:callingCode", a.callingCode);
    }
  }
}, Lo = {
  id: "countryDropdownMenuButton",
  class: "btn btn-subdued-primary border border-secondary dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, Eo = { class: "me-1" }, po = {
  class: "dropdown-menu",
  "aria-labelledby": "countryDropdownMenuButton"
}, ho = ["onClick"], bo = { class: "text-secondary" };
function So(a, e, n, r, c, i) {
  return l(), t(ta, null, [
    o("button", Lo, [
      o("span", Eo, L(i.flag(c.selectedCountry.code)), 1)
    ]),
    o("ul", po, [
      o("li", null, [
        o("button", {
          type: "button",
          class: "dropdown-item",
          onClick: e[0] || (e[0] = (g) => i.selectCountry({
            code: "US",
            name: "United States of America",
            callingCode: "1"
          }))
        }, L(i.flag("US")) + "United States of America (+1) ", 1)
      ]),
      e[1] || (e[1] = o("li", null, [
        o("hr", { class: "dropdown-divider" })
      ], -1)),
      (l(!0), t(ta, null, xa(c.countries, (g, d) => (l(), t("li", { key: d }, [
        o("button", {
          type: "button",
          class: "dropdown-item",
          onClick: (m) => i.selectCountry(g)
        }, [
          h(L(i.flag(g.code)) + " " + L(g.name) + " ", 1),
          o("span", bo, "+" + L(g.callingCode), 1)
        ], 8, ho)
      ]))), 128))
    ])
  ], 64);
}
const Wo = /* @__PURE__ */ R(No, [["render", So]]), Ao = {
  props: {
    userNetid: {
      type: String,
      required: !0
    },
    userOverride: {
      type: String,
      required: !1
    },
    photoUrl: {
      type: String,
      required: !1
    },
    signoutUrl: {
      type: String,
      required: !1
    },
    clearOverrideUrl: {
      type: String,
      required: !1
    }
  },
  data() {
    return {};
  }
}, To = { class: "flex-fill dropdown" }, vo = ["src"], wo = {
  key: 0,
  class: "mx-2"
}, ko = {
  key: 1,
  class: "mx-2"
}, Po = {
  class: "dropdown-menu dropdown-menu-end p-0",
  "aria-labelledby": "dropdownMenuButton1",
  style: { width: "300px" }
}, Mo = {
  key: 0,
  class: "bg-danger-subtle text-danger-emphasis px-3 py-2 rounded-top d-flex justify-content-between"
}, Io = { class: "p-3" }, Ro = { class: "d-flex justify-content-center" }, Uo = ["src"], Do = { class: "mt-3" }, Fo = { class: "mt-3 pt-3 border-top" }, Bo = ["href"], xo = ["href"];
function _o(a, e, n, r, c, i) {
  return l(), t("div", {
    class: p(["d-flex align-items-center border border-white p-0 rounded-pill small", { "bg-danger-subtle border-0": n.userOverride }])
  }, [
    o("div", To, [
      o("a", {
        class: p(["d-flex text-white text-decoration-none p-1 chevron", n.userOverride ? "text-danger-emphasis" : "text-white"]),
        href: "#",
        role: "button",
        id: "dropdownMenuButton1",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, [
        o("img", {
          src: n.photoUrl ? n.photoUrl : "/src/assets/images/placeholder.png",
          class: "img-tiny rounded-circle",
          alt: "user avatar"
        }, null, 8, vo),
        n.userOverride ? (l(), t("span", wo, L(n.userOverride), 1)) : (l(), t("span", ko, L(n.userNetid), 1)),
        e[0] || (e[0] = o("i", { class: "bi bi-chevron-down me-1" }, null, -1))
      ], 2),
      o("div", Po, [
        n.userOverride ? (l(), t("div", Mo, [...e[1] || (e[1] = [
          o("span", null, "Overriding", -1)
        ])])) : y("", !0),
        o("div", Io, [
          o("div", Ro, [
            o("img", {
              src: n.photoUrl ? n.photoUrl : "/src/assets/images/placeholder.png",
              class: "img-profile rounded-circle",
              alt: "user avatar"
            }, null, 8, Uo)
          ]),
          o("div", Do, [
            f(a.$slots, "default", {}, () => [
              e[2] || (e[2] = h(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium hendrerit dui, sit amet dapibus nulla condimentum id. Quisque pulvinar viverra eros, sit amet blandit tellus faucibus at. Maecenas a turpis sed quam vulputate placerat. Duis id eros sit amet turpis dignissim lacinia. Suspendisse molestie vel nisl sit amet convallis. ", -1))
            ], !0)
          ]),
          o("div", Fo, [
            n.userOverride ? (l(), t("a", {
              key: 0,
              href: n.clearOverrideUrl,
              class: "link-quiet-danger"
            }, [...e[3] || (e[3] = [
              o("i", { class: "bi bi-x-circle me-1" }, null, -1),
              h("Clear override", -1)
            ])], 8, Bo)) : (l(), t("a", {
              key: 1,
              href: n.signoutUrl,
              class: "link-quiet-danger"
            }, [...e[4] || (e[4] = [
              o("i", { class: "bi bi-x-circle me-1" }, null, -1),
              h("Sign out", -1)
            ])], 8, xo))
          ])
        ])
      ])
    ])
  ], 2);
}
const Jo = /* @__PURE__ */ R(Ao, [["render", _o], ["__scopeId", "data-v-bd0f861b"]]);
export {
  qo as SColorMode,
  Wo as SCountryCode,
  Ho as SProfile,
  jo as SSidebar,
  Vo as STabsDisplay,
  zo as STabsItem,
  Oo as STabsList,
  Ko as STabsPanel,
  $o as STopbar,
  Zo as STopbarNeo,
  Jo as SUser
};
