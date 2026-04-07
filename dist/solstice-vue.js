import { Fragment as e, computed as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createStaticVNode as a, createTextVNode as o, createVNode as s, customRef as c, getCurrentInstance as l, getCurrentScope as u, hasInjectionContext as d, inject as f, mergeProps as p, nextTick as m, normalizeClass as h, normalizeStyle as g, onMounted as _, openBlock as v, readonly as y, ref as b, renderList as x, renderSlot as S, resolveComponent as C, shallowRef as w, toDisplayString as T, toRef as E, toValue as D, unref as O, vShow as k, watch as A, watchEffect as j, withCtx as M, withDirectives as N, withKeys as P, withModifiers as ee } from "vue";
//#region \0rolldown/runtime.js
var te = Object.create, F = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, re = Object.getOwnPropertyNames, ie = Object.getPrototypeOf, ae = Object.prototype.hasOwnProperty, I = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), oe = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = re(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ae.call(e, s) && s !== n && F(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ne(t, s)) || r.enumerable
	});
	return e;
}, se = (e, t, n) => (n = e == null ? {} : te(ie(e)), oe(t || !e || !e.__esModule ? F(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), L = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ce = { props: {
	variant: {
		type: String,
		required: !1,
		default: "underline"
	},
	tabsId: {
		type: [String, Number],
		required: !0
	}
} }, le = ["id"], ue = ["id"];
function de(e, t, i, a, o, s) {
	return i.variant == "underline" ? (v(), r("ul", {
		key: 0,
		class: "text-body nav nav-underline border-bottom",
		id: i.tabsId,
		role: "tablist"
	}, [S(e.$slots, "default")], 8, le)) : i.variant == "pills" ? (v(), r("ul", {
		key: 1,
		class: "bg-body-tertiary text-body rounded-3 nav nav-pills gap-1 border p-1",
		id: i.tabsId,
		role: "tablist"
	}, [S(e.$slots, "default")], 8, ue)) : n("", !0);
}
var fe = /* @__PURE__ */ L(ce, [["render", de]]), pe = { props: { tabsId: {
	type: [String, Number],
	required: !0
} } }, me = ["id"];
function he(e, t, n, i, a, o) {
	return v(), r("div", {
		class: "tab-content",
		id: n.tabsId + "Content"
	}, [S(e.$slots, "default")], 8, me);
}
var ge = /* @__PURE__ */ L(pe, [["render", he]]), _e = {
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
			return [].findIndex.call(this.elements, (t) => t === e);
		},
		moveTab(e) {
			this.elements[e].click(), this.elements[e].focus(), Array.from(this.elements).forEach((t, n) => {
				n === e ? t.tabIndex = 0 : t.tabIndex = -1;
			});
		},
		moveNext(e) {
			let t = this.findIndex(e.target);
			t < this.elements.length - 1 && this.moveTab(t + 1);
		},
		movePrev(e) {
			let t = this.findIndex(e.target);
			t > 0 && this.moveTab(t - 1);
		},
		onClick(e) {
			let t = this.findIndex(e.target);
			this.moveTab(t);
		}
	}
}, ve = {
	class: "nav-item",
	role: "presentation"
}, ye = [
	"tabindex",
	"id",
	"data-bs-target",
	"aria-controls",
	"aria-selected"
];
function be(e, t, n, a, o, s) {
	return v(), r("li", ve, [i("a", {
		class: h(["nav-link", s.classObject]),
		href: "#",
		tabindex: [n.activeTab ? "0" : "-1"],
		id: n.panelId + "-tab",
		"data-bs-toggle": "tab",
		"data-bs-target": "#" + n.panelId,
		type: "button",
		role: "tab",
		"aria-controls": n.panelId,
		"aria-selected": n.activeTab,
		onKeydown: [t[0] ||= P((...e) => s.moveNext && s.moveNext(...e), ["right"]), t[1] ||= P((...e) => s.movePrev && s.movePrev(...e), ["left"])],
		onClick: t[2] ||= (...e) => s.onClick && s.onClick(...e)
	}, [S(e.$slots, "default")], 42, ye)]);
}
var xe = /* @__PURE__ */ L(_e, [["render", be]]), Se = {
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
	methods: { setFocus() {
		document.getElementById(this.panelId + "-tab").focus();
	} }
}, Ce = ["id", "aria-labelledby"];
function we(e, t, n, i, a, o) {
	return v(), r("div", {
		id: n.panelId,
		class: h(["tab-pane fade", { "show active": n.activePanel }]),
		role: "tabpanel",
		"aria-labelledby": n.panelId + "-tab",
		tabindex: "0",
		onKeydown: t[0] ||= P(ee((...e) => o.setFocus && o.setFocus(...e), ["shift", "prevent"]), ["tab"])
	}, [S(e.$slots, "default")], 42, Ce);
}
var Te = /* @__PURE__ */ L(Se, [["render", we]]), Ee = {
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
			default: "bg-spirit-purple"
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
	created() {}
}, De = {
	key: 0,
	class: "small bg-opacity-10 bg-black px-3 py-2"
}, Oe = { class: "d-flex" }, ke = { class: "flex-fill text-end" }, Ae = ["href"], je = {
	key: 0,
	class: "btn btn-link btn-sm border-light rounded-3 text-light d-lg-none me-2 border border-1 px-1 py-0",
	"data-bs-toggle": "collapse",
	"data-bs-target": "#sidebar-nav-collapse",
	role: "button",
	"aria-expanded": "false",
	"aria-controls": "sidebar-nav-collapse",
	"aria-label": "Toggle Navigation Menu"
}, Me = {
	key: 0,
	role: "navigation"
}, Ne = {
	key: 1,
	class: "text-light mb-3"
}, Pe = { class: "container-xl d-flex flex-column" }, Fe = { class: "flex-fill" }, Ie = { key: 0 }, Le = { class: "font-weight-light small py-3" };
function Re(e, t, c, l, u, d) {
	let f = C("router-link");
	return v(), r("div", {
		class: h([d.mq.mdMinus ? "" : "d-flex vh-100 gap-3"]),
		style: g([c.isPreview ? "min-height: auto !important;" : ""])
	}, [i("div", {
		class: h([c.sidebarClass, "sol-sidebar d-flex flex-column overflow-auto"]),
		style: g([d.mq.mdMinus ? "" : "min-width: 280px; max-width:280px;"])
	}, [
		i("header", null, [e.$slots.profile ? (v(), r("div", De, [S(e.$slots, "profile", {}, () => [i("div", Oe, [t[0] ||= i("div", { class: "flex-fill" }, "username", -1), i("div", ke, [i("a", {
			href: c.signOutUrl,
			class: "text-white"
		}, "Sign out", 8, Ae)])])])])) : n("", !0), i("div", { class: h([[d.mq.lgMinus ? "sol-sidebar-brand-sm" : "sol-sidebar-brand"], "px-3"]) }, [e.$slots.navigation ? (v(), r("a", je, [...t[1] ||= [i("i", { class: "bi bi-list fw-bold fs-6" }, null, -1)]])) : n("", !0), i("div", { class: h(["d-inline align-middle", [d.mq.mdPlus ? "h2" : "h3"]]) }, [s(f, {
			to: c.appRootUrl,
			class: "ff-encode-sans text-decoration-none text-light"
		}, {
			default: M(() => [o(T(c.appName), 1)]),
			_: 1
		}, 8, ["to"])], 2)], 2)]),
		i("div", {
			id: "sidebar-nav-collapse",
			class: h(["flex-fill px-3", [d.mq.mdMinus ? "collapse" : "collapse.show d-flex flex-column justify-content-between"]])
		}, [e.$slots.navigation ? (v(), r("nav", Me, [S(e.$slots, "navigation", {}, () => [t[2] ||= i("ul", { class: "text-white" }, [
			i("li", null, "nav 1"),
			i("li", null, "nav 2"),
			i("li", null, "nav 3"),
			i("li", null, "nav 4")
		], -1)])])) : n("", !0), e.$slots.aside ? (v(), r("aside", Ne, [S(e.$slots, "aside", {}, () => [t[3] ||= o("this is aside content", -1)])])) : n("", !0)], 2),
		t[4] ||= i("div", { class: "sol-sidebar-logo" }, "\xA0", -1)
	], 6), i("div", {
		id: "scrollbody",
		class: h([[d.mq.mdMinus ? "" : "flex-fill overflow-y-scroll"], "d-flex bg-body text-body"])
	}, [i("div", Pe, [i("main", Fe, [S(e.$slots, "main")]), e.$slots.footer ? (v(), r("footer", Ie, [S(e.$slots, "footer", {}, () => [i("div", Le, [t[5] ||= a("<ul class=\"list-inline m-0\"><li class=\"list-inline-item\"><a href=\"http://www.washington.edu/online/privacy/\">Privacy</a></li><li class=\"list-inline-item\"><a href=\"http://www.washington.edu/online/terms/\">Terms</a></li></ul>", 1), i("div", null, " Copyright © " + T((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)])])])) : n("", !0)])], 2)], 6);
}
var ze = /* @__PURE__ */ L(Ee, [["render", Re]]), Be = {
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
	created() {}
}, Ve = {
	key: 0,
	class: "w-100"
}, He = { class: "w-100" }, Ue = {
	key: 0,
	class: "bg-opacity-10 small bg-black py-2 text-white"
}, We = { class: "container-xl" }, Ge = { class: "axdd-topbar-brand" }, Ke = { class: "container-xl axdd-topbar-logo" }, qe = {
	key: 0,
	class: "btn btn-link btn-sm d-xl-none border-light rounded-3 me-2 border border-1 px-1 py-0 text-white",
	"data-bs-toggle": "collapse",
	"data-bs-target": "#topbar-nav-collapse",
	role: "button",
	"aria-expanded": "false",
	"aria-controls": "topbar-nav-collapse",
	"aria-label": "Toggle Navigation Menu"
}, Je = ["href"], Ye = { class: "container-xl" }, Xe = { class: "row" }, Ze = {
	key: 0,
	role: "navigation"
}, Qe = { key: 1 }, $e = { class: "col-xl" }, et = { key: 0 }, tt = {
	key: 1,
	class: "col-sm col-xl-3"
}, nt = { class: "w-100" }, rt = {
	key: 0,
	class: "bg-dark small py-2 text-white"
}, it = { class: "container-xl" }, at = { class: "font-weight-light py-3 text-white" };
function ot(e, t, s, c, l, u) {
	return v(), r("div", { class: h([[s.topbarClass, s.isPreview ? "" : "min-vh-100"], "d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"]) }, [
		e.$slots.system ? (v(), r("div", Ve, [S(e.$slots, "system", {}, () => [t[0] ||= o("System messages", -1)])])) : n("", !0),
		i("header", He, [e.$slots.profile ? (v(), r("div", Ue, [i("div", We, [S(e.$slots, "profile", {}, () => [t[1] ||= o("Welcome!", -1)])])])) : n("", !0), i("div", Ge, [i("div", Ke, [e.$slots.navigation ? (v(), r("a", qe, [...t[2] ||= [i("i", { class: "bi bi-list fw-bold fs-6 text-white" }, null, -1)]])) : n("", !0), i("div", { class: h(["d-inline align-middle text-white", [u.mq.xlPlus ? "h2" : "h3"]]) }, [i("a", {
			href: s.appRootUrl,
			class: "ff-encode-sans text-decoration-none text-white"
		}, T(s.appName), 9, Je)], 2)])])]),
		i("div", { class: h([s.backgroundClass, "flex-fill text-body w-100"]) }, [i("div", Ye, [i("div", Xe, [
			e.$slots.navigation ? (v(), r("div", {
				key: 0,
				style: g(u.mq.xlPlus ? "min-width: 272px; max-width: 272px" : "")
			}, [i("div", {
				id: "topbar-nav-collapse",
				class: h([u.mq.xlPlus ? "collapse.show" : "collapse"])
			}, [e.$slots.navigation ? (v(), r("nav", Ze, [S(e.$slots, "navigation")])) : n("", !0), e.$slots.navigation && e.$slots.aside ? (v(), r("aside", Qe, [S(e.$slots, "aside", {}, () => [t[3] ||= o("Aside content", -1)])])) : n("", !0)], 2)], 4)) : n("", !0),
			i("main", $e, [e.$slots.bar ? (v(), r("div", et, [S(e.$slots, "bar")])) : n("", !0), S(e.$slots, "main", {}, () => [t[4] ||= i("div", { style: { outline: "dashed 1px lightgray" } }, [i("h1", null, "Hello world..."), i("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")], -1)])]),
			!e.$slots.navigation && e.$slots.aside ? (v(), r("aside", tt, [S(e.$slots, "aside", {}, () => [t[5] ||= o("Aside content", -1)])])) : n("", !0)
		])])], 2),
		i("footer", nt, [e.$slots.footer ? (v(), r("div", rt, [i("div", it, [S(e.$slots, "footer", {}, () => [i("div", at, [t[6] ||= a("<ul class=\"list-inline m-0\"><li class=\"list-inline-item\"><a href=\"http://www.washington.edu/online/privacy/\" class=\"link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover\">Privacy</a></li><li class=\"list-inline-item\"><a href=\"http://www.washington.edu/online/terms/\" class=\"link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover\">Terms</a></li></ul>", 1), i("div", null, " Copyright © " + T((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)])])])])) : n("", !0)])
	], 2);
}
var st = /* @__PURE__ */ L(Be, [["render", ot]]), ct = {
	inject: ["mq"],
	props: {
		appName: {
			type: String,
			default: "appName"
		},
		appDeptName: { type: String },
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
}, lt = { class: "bg-spirit-purple w-100" }, ut = { class: "container-xl" }, dt = { class: "d-flex justify-content-between align-items-center" }, ft = { class: "d-flex flex-fill align-items-center my-4" }, pt = { class: "d-flex flex-fill flex-column text-white" }, mt = {
	key: 0,
	class: "fw-light text-nowrap",
	style: { "margin-bottom": "-7px" }
}, ht = ["href"], gt = ["href"], _t = { class: "d-flex justify-content-end align-items-center" }, vt = {
	key: 1,
	class: "btn btn-link btn-sm d-md-none ms-1 py-0 py-1 text-white",
	"data-bs-toggle": "collapse",
	"data-bs-target": "#navbarToggler",
	"aria-controls": "navbarToggler",
	"aria-expanded": "false",
	"aria-label": "Toggle navigation"
}, yt = {
	key: 0,
	class: "navbar navbar-expand-md py-xl-2 bg-husky-purple w-100 p-0"
}, bt = { class: "container-xl" }, xt = {
	class: "navbar-collapse collapse",
	id: "navbarToggler"
}, St = {
	key: 1,
	class: "bg-info-subtle w-100"
}, Ct = { class: "container-xl" }, wt = { class: "container-xl flex-fill" }, Tt = { class: "row" }, Et = { class: "col" }, Dt = {
	key: 0,
	class: "col-sm-12 col-xl-3"
}, Ot = { class: "bg-body-tertiary w-100" }, kt = { class: "container-xl" }, At = { class: "row" }, jt = { class: "col small font-weight-light my-4" }, Mt = { class: "list-inline m-0" }, Nt = { class: "list-inline-item" }, Pt = ["href"], Ft = { class: "list-inline-item" }, It = ["href"], Lt = { class: "" };
function Rt(e, t, a, s, c, l) {
	return v(), r("div", { class: h([[a.isPreview ? " " : "min-vh-100"], "d-flex align-items-end flex-column"]) }, [
		i("header", lt, [i("div", ut, [i("div", dt, [i("div", ft, [t[0] ||= i("div", { class: "d-none d-md-block border-end border-opacity-25 me-3 border-white pe-3" }, [i("img", {
			src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjA3NEU2NTJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjA3NEU2NjJDQTkxMUU0QTcxOEIwNEIyRTA4NDYxMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMDc0RTYzMkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMDc0RTY0MkNBOTExRTRBNzE4QjA0QjJFMDg0NjEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TGF1VAAAA3RJREFUeNq0mEtPFEEQx2dXQAUPIohE4ysKvpAVBeIDFCNREw8eMTHePHjycxg9e/ATePGgB02MgLK74mNBASUxqBj1YEQMGFxYdsX1P0ltHDvVM1WzayU/Hv2o7pruqq7uSD6fTzmOUw1+OeFkJYiDC0zdPnALLIE8lUVAOTgHnjN9roEeMC8cfxW4WYYf28FqpzjZYik/A7ZZ6rothmwAG5Xjr486pZElS3mHT59jlvLfIcbPl8oQTtaBNp/6JlBfqsGi/1HPQVDjtx3ATqY8EnYCCyAL0mBR2C9D7QsOucC06RLoOWHR7ZDutOf/f7YS1RfGX4wgau3AH8tADtSC26AuYALXwVVQRR/jJ/joqXf1PQMHAvTcB6eZlaomX5kDV8B5o81dcBlU0FgzDgwx6csHyz2mn5dGkBbomQb1PnqiIMn0u2S25fZ2v2BL7AFrfeo7QaVATw05vU22MgEjS6sd6KQpwQQ2WRxV4x8FOR4QoiuMsnfgldSQb4IJHPU56TsUhrQrP0iCy0I4Q2aEq3LEUu46+GaFIS2WMF1pGSOpOUcGBROIWaLbIeVZ4BqxnylvZlKfBa0hSUl+A3Yz5adCnGeHLf5hzu8l+KQxZBR8FUygi0n4mkIY0iH0j0FbLmYzZBY8CeGoMcqxtNJihHN3y7Yy7R6GybWGBBNoo2ygICeZNl8Ed4sa47xoN/S6Mk1bS22I5GCs9Thq1LJFboA3ytXtZOqH6aOoDZkAnxWO2kAnvil3wJjS37qZ+njYNP6731J6pNUTdlcYdR/AiDCc7wJr6EbZyNQPFHMfSQj9pNySkqc8YTPoTaCOVjRG93CvTIJxv85lAcrjwgPtLNjL1PXS79e0Og0Bujot9/8RiqShV8T1k/cBbdz7wEXmkSHjyVIzlocGU3osacmDYq+6s1ymaTnNze3w1tgOAwI9zUy2kJN8BMmdvS/kPT5uvK6kFFfpwLQ9jCFDIQ15bPw/blyHpZKgVSnakDH6KhpJM4bkhMmoKY9K9Rw0T1FDIy8sh+lTpZ4f3LW2mHetfuUEks7ft15zu2UVeiboDCmZIcOO7pHbFqEmKZpJpVfzQCeRUduFhpEpn9QmI90q2q0oNWRRmC8VVm9KEc38cj3pmIEpihk93Be/OZ82VYLtkKBJLnfsL+9VdA5NSyf3R4ABABbMYvghpWrNAAAAAElFTkSuQmCC",
			alt: "UW logo",
			class: "my-1",
			style: { height: "30px" }
		})], -1), i("div", pt, [
			a.appDeptName ? (v(), r("div", mt, T(a.appDeptName), 1)) : n("", !0),
			i("a", {
				href: a.appRootUrl,
				class: "d-block d-sm-none ff-encode-sans text-decoration-none fs-3 fw-medium text-truncate text-nowrap text-white",
				style: { "max-width": "180px" }
			}, T(a.appName), 9, ht),
			i("a", {
				href: a.appRootUrl,
				class: "d-none d-sm-block ff-encode-sans text-decoration-none fs-3 fw-medium text-nowrap text-white"
			}, T(a.appName), 9, gt)
		])]), i("div", _t, [e.$slots.settings ? S(e.$slots, "settings", { key: 0 }, () => [t[1] ||= o("user info", -1)]) : n("", !0), e.$slots.navigation ? (v(), r("a", vt, [...t[2] ||= [i("i", { class: "bi bi-list text-light fs-3" }, null, -1)]])) : n("", !0)])])])]),
		e.$slots.navigation ? (v(), r("nav", yt, [i("div", bt, [i("div", xt, [S(e.$slots, "navigation", {}, () => [t[3] ||= o("navigation bar", -1)])])])])) : n("", !0),
		e.$slots.system ? (v(), r("div", St, [i("div", Ct, [S(e.$slots, "system", {}, () => [t[4] ||= o("system messages", -1)])])])) : n("", !0),
		i("div", wt, [i("div", Tt, [i("main", Et, [S(e.$slots, "main", {}, () => [t[5] ||= i("div", { style: { outline: "dashed 1px lightgray" } }, [i("h1", null, "Hello world..."), i("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")], -1)])]), e.$slots.aside ? (v(), r("aside", Dt, [S(e.$slots, "aside", {}, () => [t[6] ||= o("aside content", -1)])])) : n("", !0)])]),
		i("footer", Ot, [i("div", kt, [e.$slots.footer ? S(e.$slots, "footer", { key: 0 }, () => [i("div", At, [i("div", jt, [i("ul", Mt, [i("li", Nt, [a.privacyURL ? (v(), r("a", {
			key: 0,
			href: a.privacyURL,
			target: "_blank",
			rel: "noopener",
			class: "link-body-emphasis"
		}, "Privacy", 8, Pt)) : n("", !0)]), i("li", Ft, [a.termsURL ? (v(), r("a", {
			key: 0,
			href: a.termsURL,
			target: "_blank",
			rel: "noopener",
			class: "link-body-emphasis"
		}, "Terms", 8, It)) : n("", !0)])]), i("div", Lt, " Copyright © " + T((/* @__PURE__ */ new Date()).getFullYear()) + " University of Washington ", 1)])])]) : n("", !0)])])
	], 2);
}
var zt = /* @__PURE__ */ L(ct, [["render", Rt]]), Bt = {
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
		userOfficialName: { type: String },
		userPreferredName: { type: String },
		userPronouns: { type: String },
		signoutUrl: { type: String },
		profileUrl: { type: String }
	},
	data() {
		return {};
	}
}, Vt = {
	key: 0,
	class: "d-flex align-items-center"
}, Ht = { class: "flex-fill dropdown" }, Ut = {
	key: 0,
	class: "text-decoration-none py-2 text-white",
	href: "#",
	role: "button",
	id: "dropdownMenuButton1",
	"data-bs-toggle": "dropdown",
	"aria-expanded": "false"
}, Wt = { class: "me-1" }, Gt = { class: "text-decoration-underline" }, Kt = {
	key: 1,
	class: "text-decoration-none py-2 text-white",
	href: "#",
	role: "button",
	id: "dropdownMenuButton1",
	"data-bs-toggle": "dropdown",
	"aria-expanded": "false"
}, qt = {
	class: "dropdown-menu p-3",
	"aria-labelledby": "dropdownMenuButton1",
	style: { width: "220px" }
}, Jt = {
	key: 0,
	class: "text-danger"
}, Yt = { class: "" }, Xt = { class: "" }, Zt = ["href"], Qt = ["href"], $t = {
	key: 1,
	class: "d-flex align-items-center text-nowrap"
}, en = {
	key: 0,
	class: "flex-fill text-white"
}, tn = { class: "me-1" }, nn = {
	key: 1,
	class: "flex-fill text-white"
}, rn = { class: "flex-fill ms-2 text-end" }, an = ["href"];
function on(e, t, a, s, c, l) {
	return a.variant === "flyout" ? (v(), r("div", Vt, [i("div", Ht, [a.userOverride ? (v(), r("a", Ut, [
		i("span", Wt, T(a.userNetid), 1),
		t[0] ||= i("i", { class: "bi bi-arrow-right text-danger me-1" }, null, -1),
		i("span", Gt, T(a.userOverride), 1)
	])) : (v(), r("a", Kt, T(a.userNetid), 1)), i("div", qt, [
		a.userOverride ? (v(), r("p", Jt, [
			t[1] ||= o(" overriding as ", -1),
			t[2] ||= i("i", { class: "bi bi-arrow-right text-danger" }, null, -1),
			o(" " + T(a.userOverride), 1)
		])) : n("", !0),
		i("p", Yt, T(a.userOfficialName) + ", " + T(a.userPreferredName) + ", " + T(a.userPronouns), 1),
		i("p", Xt, [i("a", { href: a.profileUrl }, "go to profile", 8, Zt)]),
		i("div", null, [a.signoutUrl ? S(e.$slots, "default", { key: 0 }, () => [i("a", { href: a.signoutUrl }, "Sign out", 8, Qt)]) : S(e.$slots, "default", { key: 1 }, () => [t[3] ||= i("a", { href: "sadkf" }, "sign out test", -1)])])
	])])])) : (v(), r("div", $t, [a.userOverride ? (v(), r("div", en, [
		i("span", tn, T(a.userNetid), 1),
		t[4] ||= i("i", { class: "bi bi-arrow-right text-danger" }, null, -1),
		o(" " + T(a.userOverride), 1)
	])) : (v(), r("div", nn, T(a.userNetid), 1)), i("div", rn, [a.signoutUrl ? S(e.$slots, "default", { key: 0 }, () => [i("a", {
		href: a.signoutUrl,
		class: "text-white"
	}, "Sign out", 8, an)]) : S(e.$slots, "default", { key: 1 }, () => [t[5] ||= i("a", { href: "sadkf" }, "sign out test", -1)])])]));
}
var sn = /* @__PURE__ */ L(Bt, [["render", on]]), R = /* @__PURE__ */ new WeakMap(), cn = (...e) => {
	let t = e[0], n = l()?.proxy ?? u();
	if (n == null && !d()) throw Error("injectLocal must be called in setup");
	return n && R.has(n) && t in R.get(n) ? R.get(n)[t] : f(...e);
}, z = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ln = Object.prototype.toString, un = (e) => ln.call(e) === "[object Object]", dn = () => {};
function B(...e) {
	if (e.length !== 1) return E(...e);
	let t = e[0];
	return typeof t == "function" ? y(c(() => ({
		get: t,
		set: dn
	}))) : b(t);
}
function fn(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return n;
}
var V = (e) => e();
function pn(e = V, t = {}) {
	let { initialState: n = "active" } = t, r = B(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: y(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function H(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function U(e) {
	return Array.isArray(e) ? e : [e];
}
function mn(e) {
	return e || l();
}
function hn(e, t, n = {}) {
	let { eventFilter: r = V, ...i } = n;
	return A(e, fn(r, t), i);
}
function gn(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = pn(r, { initialState: i });
	return {
		stop: hn(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function W(e, t = !0, n) {
	mn(n) ? _(e, n) : t ? e() : m(e);
}
function _n(e, t, n) {
	return A(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var G = z ? window : void 0;
z && window.document, z && window.navigator, z && window.location;
function K(e) {
	let t = D(e);
	return t?.$el ?? t;
}
function q(...e) {
	let n = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), r = t(() => {
		let t = U(D(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return _n(() => [
		r.value?.map((e) => K(e)) ?? [G].filter((e) => e != null),
		U(D(r.value ? e[1] : e[0])),
		U(O(r.value ? e[2] : e[1])),
		D(r.value ? e[3] : e[2])
	], ([e, t, r, i], a, o) => {
		if (!e?.length || !t?.length || !r?.length) return;
		let s = un(i) ? { ...i } : i, c = e.flatMap((e) => t.flatMap((t) => r.map((r) => n(e, t, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function vn() {
	let e = w(!1), t = l();
	return t && _(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function yn(e) {
	let n = vn();
	return t(() => (n.value, !!e()));
}
var bn = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function xn() {
	let e = d() ? cn(bn, null) : null;
	return typeof e == "number" ? e : void 0;
}
function Sn(e, n = {}) {
	let { window: r = G, ssrWidth: i = /* @__PURE__ */ xn() } = n, a = /* @__PURE__ */ yn(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), o = w(typeof i == "number"), s = w(), c = w(!1);
	return j(() => {
		if (o.value) {
			o.value = !a.value, c.value = D(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || r);
				return n && a && (a = i >= H(n[1])), r && a && (a = i <= H(r[1])), t ? !a : a;
			});
			return;
		}
		a.value && (s.value = r.matchMedia(D(e)), c.value = s.value.matches);
	}), q(s, "change", (e) => {
		c.value = e.matches;
	}, { passive: !0 }), t(() => c.value);
}
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", Cn = /* @__PURE__ */ wn();
function wn() {
	return Y in J || (J[Y] = J[Y] || {}), J[Y];
}
function X(e, t) {
	return Cn[e] || t;
}
function Tn(e) {
	return Sn("(prefers-color-scheme: dark)", e);
}
function En(e) {
	return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Dn = {
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
}, Z = "vueuse-storage";
function On(e, n, r, i = {}) {
	let { flush: a = "pre", deep: o = !0, listenToStorageChanges: s = !0, writeDefaults: c = !0, mergeDefaults: l = !1, shallow: u, window: d = G, eventFilter: f, onError: p = (e) => {
		console.error(e);
	}, initOnMounted: h } = i, g = (u ? w : b)(typeof n == "function" ? n() : n), _ = t(() => D(e));
	if (!r) try {
		r = X("getDefaultStorage", () => G?.localStorage)();
	} catch (e) {
		p(e);
	}
	if (!r) return g;
	let v = D(n), y = En(v), x = i.serializer ?? Dn[y], { pause: S, resume: C } = gn(g, (e) => O(e), {
		flush: a,
		deep: o,
		eventFilter: f
	});
	A(_, () => j(), { flush: a });
	let T = !1;
	d && s && (r instanceof Storage ? q(d, "storage", (e) => {
		h && !T || j(e);
	}, { passive: !0 }) : q(d, Z, (e) => {
		h && !T || M(e);
	})), h ? W(() => {
		T = !0, j();
	}) : j();
	function E(e, t) {
		if (d) {
			let n = {
				key: _.value,
				oldValue: e,
				newValue: t,
				storageArea: r
			};
			d.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", n) : new CustomEvent(Z, { detail: n }));
		}
	}
	function O(e) {
		try {
			let t = r.getItem(_.value);
			if (e == null) E(t, null), r.removeItem(_.value);
			else {
				let n = x.write(e);
				t !== n && (r.setItem(_.value, n), E(t, n));
			}
		} catch (e) {
			p(e);
		}
	}
	function k(e) {
		let t = e ? e.newValue : r.getItem(_.value);
		if (t == null) return c && v != null && r.setItem(_.value, x.write(v)), v;
		if (!e && l) {
			let e = x.read(t);
			return typeof l == "function" ? l(e, v) : y === "object" && !Array.isArray(e) ? {
				...v,
				...e
			} : e;
		} else if (typeof t != "string") return t;
		else return x.read(t);
	}
	function j(e) {
		if (!(e && e.storageArea !== r)) {
			if (e && e.key == null) {
				g.value = v;
				return;
			}
			if (!(e && e.key !== _.value)) {
				S();
				try {
					let t = x.write(g.value);
					(e === void 0 || e?.newValue !== t) && (g.value = k(e));
				} catch (e) {
					p(e);
				} finally {
					e ? m(C) : C();
				}
			}
		}
	}
	function M(e) {
		j(e.detail);
	}
	return g;
}
var kn = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function An(e = {}) {
	let { selector: n = "html", attribute: r = "class", initialValue: i = "auto", window: a = G, storage: o, storageKey: s = "vueuse-color-scheme", listenToStorageChanges: c = !0, storageRef: l, emitAuto: u, disableTransition: d = !0 } = e, f = {
		auto: "",
		light: "light",
		dark: "dark",
		...e.modes || {}
	}, p = Tn({ window: a }), m = t(() => p.value ? "dark" : "light"), h = l || (s == null ? B(i) : On(s, i, o, {
		window: a,
		listenToStorageChanges: c
	})), g = t(() => h.value === "auto" ? m.value : h.value), _ = X("updateHTMLAttrs", (e, t, n) => {
		let r = typeof e == "string" ? a?.document.querySelector(e) : K(e);
		if (!r) return;
		let i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = null;
		if (t === "class") {
			let e = n.split(/\s/g);
			Object.values(f).flatMap((e) => (e || "").split(/\s/g)).filter(Boolean).forEach((t) => {
				e.includes(t) ? i.add(t) : o.add(t);
			});
		} else s = {
			key: t,
			value: n
		};
		if (i.size === 0 && o.size === 0 && s === null) return;
		let c;
		d && (c = a.document.createElement("style"), c.appendChild(document.createTextNode(kn)), a.document.head.appendChild(c));
		for (let e of i) r.classList.add(e);
		for (let e of o) r.classList.remove(e);
		s && r.setAttribute(s.key, s.value), d && (a.getComputedStyle(c).opacity, document.head.removeChild(c));
	});
	function v(e) {
		_(n, r, f[e] ?? e);
	}
	function y(t) {
		e.onChanged ? e.onChanged(t, v) : v(t);
	}
	A(g, y, {
		flush: "post",
		immediate: !0
	}), W(() => y(g.value));
	let b = t({
		get() {
			return u ? h.value : g.value;
		},
		set(e) {
			h.value = e;
		}
	});
	return Object.assign(b, {
		store: h,
		system: m,
		state: g
	});
}
//#endregion
//#region src/components/SColorMode.vue
var jn = {
	props: { colorClass: {
		type: String,
		default: "text-body"
	} },
	setup() {
		return { colorMode: An({
			emitAuto: !0,
			attribute: "data-bs-theme"
		}) };
	}
}, Mn = { class: "d-flex align-items-center" }, Nn = { class: "bi bi-brightness-high-fill" }, Pn = { class: "bi bi-moon-stars-fill" }, Fn = { class: "bi bi-circle-half" }, In = { class: "dropdown-menu p-1" }, Ln = { class: "mb-1" }, Rn = { class: "mb-1" };
function zn(e, t, n, a, s, c) {
	return v(), r("div", Mn, [i("div", null, [i("button", {
		class: h(["btn btn-link dropdown-toggle p-1", n.colorClass]),
		type: "button",
		"data-bs-toggle": "dropdown",
		"aria-expanded": "false",
		"aria-label": "Choose color mode"
	}, [
		N(i("i", Nn, null, 512), [[k, a.colorMode == "light"]]),
		N(i("i", Pn, null, 512), [[k, a.colorMode == "dark"]]),
		N(i("i", Fn, null, 512), [[k, a.colorMode == "auto"]])
	], 2), i("ul", In, [
		i("li", Ln, [i("a", {
			class: h(["dropdown-item rounded", a.colorMode == "light" ? "active" : ""]),
			href: "#",
			role: "button",
			onClick: t[0] ||= (e) => a.colorMode = "light"
		}, [...t[3] ||= [i("i", { class: "bi bi-brightness-high-fill me-2" }, null, -1), o("Light", -1)]], 2)]),
		i("li", Rn, [i("a", {
			class: h(["dropdown-item rounded", a.colorMode == "dark" ? "active" : ""]),
			href: "#",
			role: "button",
			onClick: t[1] ||= (e) => a.colorMode = "dark"
		}, [...t[4] ||= [i("i", { class: "bi bi-moon-stars-fill me-2" }, null, -1), o("Dark", -1)]], 2)]),
		i("li", null, [i("a", {
			class: h(["dropdown-item rounded", a.colorMode == "auto" ? "active" : ""]),
			href: "#",
			role: "button",
			onClick: t[2] ||= (e) => a.colorMode = "auto"
		}, [...t[5] ||= [i("i", { class: "bi bi-circle-half me-2" }, null, -1), o("Auto", -1)]], 2)])
	])])]);
}
var Bn = /* @__PURE__ */ L(jn, [["render", zn]]);
//#endregion
//#region node_modules/country-flag-icons/modules/unicode.js
function Vn(e) {
	return Q(e[0]) + Q(e[1]);
}
function Q(e) {
	return String.fromCodePoint(127397 + e.toUpperCase().charCodeAt(0));
}
//#endregion
//#region node_modules/country-codes-list/dist/utils/groupBy.js
var Hn = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		return e.reduce((e, n) => {
			let r = String(n[t]);
			return e[r] || (e[r] = []), e[r].push(n), e;
		}, {});
	}
	e.default = t;
})), Un = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		return e.replace(/{([^{}]*)}/g, (e, n) => {
			let r = t[n];
			return typeof r == "string" || typeof r == "number" ? r.toString() : e;
		});
	}
	e.default = t;
})), Wn = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [
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
			areaCodes: /* @__PURE__ */ "403.587.780.825.236.250.604.672.778.204.431.506.709.782.902.226.249.289.343.365.416.437.519.548.613.647.705.807.905.367.418.438.450.514.579.581.819.873.306.639.867".split("."),
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
			tinName: "מס' עוסק מורשה / ח\"פ",
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
})), Gn = /* @__PURE__ */ se((/* @__PURE__ */ I(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.customList = e.customArray = e.findOne = e.filter = e.all = e.utils = void 0;
	var n = t(Hn()), r = t(Un()), i = t(Wn());
	e.utils = { groupBy: n.default };
	function a() {
		return i.default;
	}
	e.all = a;
	function o(e, t) {
		return i.default.filter((n) => n[e] === t);
	}
	e.filter = o;
	function s(e, t) {
		return i.default.find((n) => n[e] === t);
	}
	e.findOne = s;
	function c(e = {
		name: "{countryNameEn} ({countryCode})",
		value: "{countryCode}"
	}, { sortBy: t, sortDataBy: n, filter: a } = {}) {
		let o = [], s = i.default;
		if (typeof a == "function" && (s = s.filter(a)), n) {
			let e = new Intl.Collator([], { sensitivity: "accent" });
			s.sort((t, r) => e.compare(t[n], r[n]));
		}
		if (s.forEach((t) => {
			let n = {};
			for (let i in e) n[i] = (0, r.default)(e[i], t);
			o.push(n);
		}), t && e[t]) {
			let e = new Intl.Collator([], { sensitivity: "accent" });
			o.sort((n, r) => e.compare(n[t], r[t]));
		}
		return o;
	}
	e.customArray = c;
	function l(e = "countryCode", t = "{countryNameEn} ({countryCode})", { filter: n } = {}) {
		let a = {}, o = i.default;
		return typeof n == "function" && (o = o.filter(n)), o.forEach((n) => {
			let i = (0, r.default)(t, n);
			a[String(n[e])] = i;
		}), a;
	}
	e.customList = l;
})))()), Kn = {
	props: { callingCode: {
		type: String,
		default: "1"
	} },
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
	watch: { callingCode: {
		immediate: !0,
		handler(e) {
			e && this.countries.length > 0 && this.updateSelectedCountry(e);
		}
	} },
	mounted() {
		let e = Gn.customList("countryCode", "{countryNameEn}|{countryCallingCode}");
		this.countries = Object.entries(e).map(([e, t]) => {
			let [n, r] = t.split("|"), i = r.split(" ")[0];
			return i === "5997" ? i = "599" : /^\d{4}$/.test(i) && (i = i[0]), {
				code: e,
				name: n,
				callingCode: i
			};
		}).sort((e, t) => e.name.localeCompare(t.name)), this.callingCode && this.updateSelectedCountry(this.callingCode);
	},
	methods: {
		flag(e) {
			return Vn(e);
		},
		selectCountry(e) {
			this.selectedCountry = e, this.$emit("update:callingCode", e.callingCode);
		},
		updateSelectedCountry(e) {
			if (e === "1") {
				this.selectedCountry = {
					code: "US",
					name: "United States of America",
					callingCode: "1"
				};
				return;
			}
			let t = this.countries.find((t) => t.callingCode === e);
			t && (this.selectedCountry = t);
		}
	}
}, qn = {
	id: "countryDropdownMenuButton",
	class: "btn btn-subdued-primary border-secondary dropdown-toggle border",
	type: "button",
	"data-bs-toggle": "dropdown",
	"aria-expanded": "false"
}, Jn = { class: "me-1" }, Yn = {
	class: "dropdown-menu",
	"aria-labelledby": "countryDropdownMenuButton"
}, Xn = ["onClick"], Zn = { class: "text-secondary" };
function Qn(t, n, a, s, c, l) {
	return v(), r(e, null, [i("button", qn, [i("span", Jn, T(l.flag(c.selectedCountry.code)), 1)]), i("ul", Yn, [
		i("li", null, [i("button", {
			type: "button",
			class: "dropdown-item",
			onClick: n[0] ||= (e) => l.selectCountry({
				code: "US",
				name: "United States of America",
				callingCode: "1"
			})
		}, T(l.flag("US")) + " United States of America (+1) ", 1)]),
		n[1] ||= i("li", null, [i("hr", { class: "dropdown-divider" })], -1),
		(v(!0), r(e, null, x(c.countries, (e, t) => (v(), r("li", { key: t }, [i("button", {
			type: "button",
			class: "dropdown-item",
			onClick: (t) => l.selectCountry(e)
		}, [o(T(l.flag(e.code)) + " " + T(e.name) + " ", 1), i("span", Zn, "+" + T(e.callingCode), 1)], 8, Xn)]))), 128))
	])], 64);
}
var $n = /* @__PURE__ */ L(Kn, [["render", Qn]]), $ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeCAIAAABCSeBNAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABXqADAAQAAAABAAABXgAAAAD5J0HiAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAxt0lEQVR4Ae3d65Ijx3UtYNIc8SKSkmzF8R+//2PZ4X8+oWNbFMm5UqTOB6zuHEx39XSjkEBjgJUxkZO1K68r9165M6tQ/fm//8d/ftZQBIpAEfgQgX/68LJXRaAIFIENAqWG6kERKAILCJQaFkCpqAgUgVJDdaAIFIEFBEoNC6BUVASKQKmhOlAEisACAqWGBVAqKgJFoNRQHSgCRWABgVLDAigVFYEiUGqoDhSBIrCAQKlhAZSKikARKDVUB4pAEVhAoNSwAEpFRaAIlBqqA0WgCCwgUGpYAKWiIlAESg3VgSJQBBYQKDUsgFJRESgCpYbqQBEoAgsIlBoWQKmoCBSBUkN1oAgUgQUESg0LoFRUBIpAqaE6UASKwAICpYYFUCoqAkWg1FAdKAJFYAGBUsMCKBUVgSJQaqgOFIEisIBAqWEBlIqKQBEoNVQHikARWECg1LAASkVFoAiUGqoDRaAILCBQalgApaIiUARKDdWBIlAEFhAoNSyAUlERKAKlhupAESgCCwiUGhZAqagIFIFSQ3WgCBSBBQRKDQugVFQEikCpoTpQBIrAAgKlhgVQKioCRaDUUB0oAkVgAYFSwwIoFRWBIlBqqA4UgSKwgECpYQGUiopAESg1VAeKQBFYQKDUsABKRUWgCJQaqgNFoAgsIFBqWACloiJQBEoN1YEiUAQWECg1LIBSUREoAqWG6kARKAILCJQaFkCpqAgUgVJDdaAIFIEFBEoNC6BUVASKQKmhOlAEisACAqWGBVAqKgJFoNRQHSgCRWABgVLDAigVFYEiUGqoDhSBIrCAQKlhAZSKikARKDVUB4pAEVhAoNSwAEpFRaAIlBqqA0WgCCwgUGpYAKWiIlAESg3VgSJQBBYQKDUsgFJRESgCpYbqQBEoAgsIlBoWQKmoCBSBUkN1oAgUgQUESg0LoFRUBIpAqaE6UASKwAICpYYFUCoqAkWg1FAdKAJFYAGBUsMCKBUVgSJQaqgOFIEisIBAqWEBlIqKQBEoNVQHikARWECg1LAASkVFoAiUGqoDRaAILCBQalgApaIiUAReFIKLR+Dzzz+/M0aSX3/99b78TrZx+Y9//OOf/mmziowiJMLI0MTlIVBquLw5/WBEKMB1THoYdhLDvGPku6a+mz/p3377bbfelBW/eFEV2gXmctKd18uZy8WRMN1dm096hUn/8ssvOCIhDe1Wu9h0hZ80AqWGT3r6Hu+8jcCgg5FQ7PXr1+Jh6iORGuUcmZP44osvckvO3YJ3vInkaXwBCJQaLmASPzaEd+/exZiTaVDAV199NYrF+MflSOwWzMbErXDBhjm2Zw2DMkapJi4DgVLDZczjI6MII4xYbiYd82bqI8TaZeNrjJBSLpVKBrEiST/ScG9/sgiUGj7ZqXtax3/3u9/JGGO28ksk/Pjjj0MeaoiccHBB2MEl4ffff3+HMtwlUdbdhstDoNRweXP6wYhivX//+9/tLASniQJ7HhuEWH7i4RqgCUVUJJHq3rx5w9FANF9ug4QDzpT6oL1eXAoCpYZPbCbZJ6Nl2MyScTLmrPmGwYwJs9S7lMct3oH8YYR4Dclzx6pDAYMIBigjm1sqefv2rVuaQA2Cznz99dfyCNJpOpepSlpCSCfFSrlM/e5KJB4tNnEmCJQazmQintoNxskIrdyxutg/Y2OWJIkJOQjW+bgJ7iabNoYBxyl4aqtbA1ZPGpVQPI2+evWKMGFQg2pRhkvNCSgsHZZNl9Ko4hK3RbsxefpUnChnqeFEQE9shjmxOqbF4AXp+PbWZAs7oxUwCGpwuduugrmMWe7eejStiOIpmKY1p1TiWLjLkfBwVFrHuAljD4Im0vM7Hbhz+WhnmuEECJQaTgDyzCaYmepCCsyS+WVZRgcWZGs4m5SOscUO5Rk9UERwV6khfEoiFQ7Ld5mQ/tyvIVsPXdKQkN2HRI4zRz0Kpj+6er+SSp4RgVLDM4K/pmkGGVtS2JosRhO8A4zADsXS8mztcbNEyzyaIZcexYf8KQllY88hGpfCbsFxmYT3JiTSFqrSyRQniSuBLOLs7FbS9PkgUGo4n7l4Uk+yR2Dz7Ers8uXLlxjB9iE2GTk7ZIQMkjDGHMtM/KSWHs60W4lWZEzTuzFuIg83kSeQ/PTTT24hjoR4E3co7OGWe+d0CJQaTof1lJZYUSyT2aMDpGATwXtne+TuJsQU5XEprelkkJAtl3v1Rz3Jn9pGPaktt6RHKzyFUX/ko2B6jtS4OU4rcUTdh4HV+SRKDeczF0/qCUNiY+wKI/z8889IwbrN9sjjJrBJl0KsNCbtlkshbSTDk9q7zRSKSSWpRyVu7sbkudxtJRK30gdnE6hB//VTkCYnxBG3TfX/s0Dg83//j/88i45cdyeGRQ0TiknvyiHk7n/91/8deUhkkFPMwD5pCB1P/n4bjAXfYQ2uBMrwTobxjqG5m/Cpj3eM6GwT9RqeeWroPV3XiRi8BFMX7BTsw7MVz4GCXTqhp4EIYfsvPU96V/LMI1rX/Js39kRA+AwdeBPCKxEAMXDYwCfsEKDUn8t1DbXUExEoNTwRqGNlo+WDGpLGCxZMKyhn2xGjJVSwLY/7vaWGY3XmGevNWxi44NttgIDhcxlevNhwxCAFPSwvnGaaSg2nwfnBVhBBdF0ip/qyshBCPoLXnB0oIAW37Ma/+eYbP4OwtA5TkbgMUzGKjNrwDcpgDVkgH4PNSBMP4YPI9sZhCJQaDsPv4NIYwfJI3SVsH2yhrZ/C3/72t9TNSIZJcB+cLUR+YbbBTTBMwdiBEPfhq682Zw3Gm8GKZTgY8lbwJARKDU+C6aiZht5vXei/53kkC7FmMhixDG4luNo5aLjp1wUYjGEaDFLgIkFAAlfmEMbwt2n/G/smXMB4M5BzjksNzzw7bGCj8lvjz+uMSMGaGWchpqKLbEPAFJ73pceKSFyMkYQLjBFHIEEE4ZzFqw/ff/8doWGKtzhtnsVIXMzAn1n/Hm6+1PAwNie5Q9HtI+g9Y/CqAnuQiNlrXyLLqTRjYDPicXd0cFE47n4SCaMOLxivhJGiSK90fffdt3dYIMO/I/wkxvhpdbLvNZxovmLVFJrqW/yj/YQusQN/ASk4ceQvuIss3HqgZwsbigdyXoAYG/79z3/+s7ceoCR4tBkavYCxnfkQ6jWcaIIYvJay1kXLpS2AAjrgL1giScIaMpyoW2ffDCIAjtjTXLyAMeNfnH3HP/kOlhpONIUoQEtUnNmjAGFLC59TdKQQf4EHwV9wq9QwZiXUABNvgm9fjty8W004MjRxJARKDUcC9m61OUFAB9QaBcT+abl9hAN5jgM6iGehpHS1PwhCDFae2mJPmAQWklDtXZR7PQ+Bsu88LD9aU1Q87kD0O+ru9WcHDST8BXlkSJ6PVnZdNzkLBgyofAU7l9cFwXOMtl7DiVDnEcTmrXi4ILzAX5DmRAhZBt0VuiSOWYEG6MQQQ6BOHFwWn4HP8RKlhuNh+0HNlJv9E+EC52qCBLKIB7Gbld7LvCu58rS9WNCTiOPgpY/6VsfWim4ojo3wTf1OE+g3s3e+EGqg3DYRAnaQJpdBWh7hgW49JH8g+0WIQQccQIHF0Qz07vPpRQz0vAZRapg8H7SWhTN1erzdKGx2Cgla8jDihx9+iHK7S+M9r/Bmk6NJ/yS2jy9kzMsL9+PJvT3/6ngKDhf8rkxXpQFrZ/HXv/7VtgJlSMM2Ow5gSp//iD6VHnZDMX+mQgQIgrKqPc4C9bWDsOhR6MEUt21XoW+RWPo/VOtOcMMOMBSwsEBOkrtyLlVQ2RoESg1rUPtIGdoZfd16BDcqKz+15izYKpPL4FJOYesgfKS+a78FKygxfnFwAyBnQeBN2GW4FQpOTsBeO2STxt8NxSQgb6uhqVncIpCOQuf3lBwHclsJih6Fvi3X/x9E4A41QBiM8AySYkgGczkfrKU39kSg1LAnYI9lz/qWXEjBPiKr2Xh/gYQeyyY8Vlnv33ypITYPN4iEVXkN9hRDXlKYriulhsmQRkeHysZBoMdOGQgHU2g1ij65+YuubqCKbfGCM13AGrFLMaotpBPnv9QwEcxNVbSTBgtxCiR4v17ydUmDBd6vgCPsk92d3PzFVReI4DaAlYAeDEMNuQzgsl0cAM82oEI5GXqaKiCC6LTY+mZjTGvjQbh0l3ILyTO5BxdXXSA1rMDlMkjiXGCSw9at3L240T/bgEoNk6G3mqmR7kZfPYqnvpSYQuexPEZwi0SQmNz8xVUHN2OK2YPLpTQkwUieH6269LtMXljAvzgMnmdAVc3JuGdBo74xe1orlAImo7ytLhyBeTFCuCPxMdq6wjpLDZMnPU/ac7JgiXNOVu9gMsTb6uI+4IU8qiCLf3GMtq6zzlLD5HmP1xBqsIjxeKlvvYbJKN8+leAvYF4IgzrbjekNXW2FpYb5Uz/cWoobd7fUMB1lPgIWFgPZlg0XSxfniTiXGiaCualq6Gh4weXkBlrdFoG4CfHR8G/YodhMRKDUMBHMTVU5dLR8ZTUjsZoNP2JyY1dcHXiNHs6wRQ22FSTFeaJGlBomgrmpKl4DOpAY6vtwG/0t0MPY3NxZhijYhnbRsUBSH+1RNJ+eodTwdKyelNO7TvnywuvXb169ek1dbYG3Lz1S8fv/nlTn1We6jxtHzK+qvFfGcfDZi99AbVfx5ZdfXT1W0wDoj7KnQZmKti7uRmtxhH+hg+4p1qK87DKoDeHuUK13ojb/GiYiUK9hIpibqlADVhhP1EjwgjC5mVZ3i0DgdcqwIePSwy0sh/9fajgcww9qyAGk93Dsfoemlho+wGjGBUjBKwA86VLDDFzf11FqeI/FlBRNRQqhBhWGFGjwlMpbyUBgsG0SeKHHkAOcKYlSwxQYP6jEszSBptLaKG6p4QOAZlwANqhuMb75NE5xngHtTR2lholgbqqinUgBNUhEayWEyc1cfXWDcwfI3VDMVYpSw1w8N7XR0ahptJak1DAf5VtUB0cU5LkglxpW4sn4KeU4A6OX0n526bPRHk+4JS3OzsL7vCubabEHEAA4hN2EcLLEU3sge8V7I1Bq2BuyUeD+MkUyHkxICyNzE8dDII7D8eq/zpr7ytPKed9Vx6TDBXETkg417OZc2ViLPYYAkBMey9j7T0WgXsNTkVrMt+sXSDuAtJuw19jNTGV3L5uejkAQLjXMBbZew3o8h1MQ1czRYzYUkcgwEuubacknIBBeCNpPyN4sjyNQr+FxjBZzDJvftX/skNcZ8pURBaOyIZHFeipch8CAdJcUSg3rwFwsVa9hEZa9hVHKOA55bKGKqK9YqNbujemeBYrwnoA9kr1ewyMAffw2m5chSrllgJvLwQ4fL967cxEoO0zEs9SwEkwOgpAXFvxiQi3S/nod7SR34mBnsUsWK5tpsQcQCLa7CKNj4YHsFe+NQKHcG7L7Be54DfczVDIdgfsOwqCJ6W1dZ4WlhpXzvqia/IWV1bXYKgTGLAwnYlU1LbSAQKlhAZSniIankMwuaadNxFPKNs8UBDIFYyLgX2qeAmwqKTWsBDMamcJJ08tSw0o01xYbsxBeKDWsBXKhXKlhAZSniCilQCNH5noNA4pTJsxCmqvXMBf2UsOheNLIaGdV81Ao9y8/kA/49Rr2h/DBEqWGB6H5+I2xWI1stFMYl00cG4HFKTh2o9dTf6lh5Vx7cyFP0SmoNxpc+su3fa6+Es1VxRCxwx3IK50308e3G1bV10IfIFBq+ACOXhSBIhAE+huKasIniUD2brt7is12rhu6eZNZr2Eelq3p+RAIL/QYcuIMlBomgtmqTofAfQch7HC6Hlx6S6WGS5/hSx/f2FOghnoNE2e7Zw0TwWxVJ0Vg13FIeldy0q5cYmP1Gi5xVq9gTPdZgOS+8AqQONYQ6zWsRJYfO1xZVUQpq5or0dy/mD9Cke2Dd0kkxF5tKP77A/lgiXoND0LTG0XgmhEoNVzz7HfsReBBBEoND0LTG0XgmhEoNVzz7HfsReBBBEoND0LTG0XgmhEoNVzz7HfsReBBBEoND0LTG0XgmhEoNayc/TxU92qDhOC5urCyrhbbHwGvMHi1AebAzxsNvt1AkpdN3BU2b55sPw8nvX8L116i2nztGvBJj3/YfCjgkx7LuXW+1HBuM9L+PAmBQQoj99ZFuPmE7BA2sRqBUsNq6FrwmRG4zw7P3KHLar7UcFnzeTWjWeSFbismzn+pYSKYreqkCGCHQRDdTUyHvtQwHdJWeAoEBinsNlavYReNA9OlhgMBbPEicJkI9HsNK+c1q5Yn6sr78wfv3r3zgP3bb7998+btyhpbbB8EvNEw/sJoElyGn3766cWLL9zygoNgdjbvnPz2m1uLXsY+DV5d3lLDyin/6quvMMLPP//86tUriWhe9W8lmvsX27V2sOfS+00//vijNF74+uuvzdGLFy9cqr5Tsy/GpYZ9EbvJT/n8uSq8IFiXrFRUcKuFfbS+EtJ9i0H7vsG/ffuWUJy/amVe+vWnfYFN/lLDOtw+wwuvX7/mL9C8L7/8kppya3HEyupabE8Ewgt32AEpcBMyEaYm7KDi7Cn2bOHas/cYcqUGhBqsTkPt6GWpYSWaq4rhhd1y8SDiJoSpcQThnWy7RZr+CAL1Gj4CzsduZRMbLrA6UUFh67t+rFTvzULgvr8QCWchCdMxqAFfuJzV9JXUU69h5UTTvyxQ6GCoqfTK6lrsYARi/OhATaZGLC2UFNZBW2pYh9tnL1++zIkXOggj0MKxuV1ZaYvtgwBGlj1xymEBpMChc0gcT4Fbl7BPxc27QaDUsFIPPBijiPEdkAJFJFlZV4vtj8CuwZuFEdSUW2YnweX+1bdEqeEAHaCOStO/A+po0aMgkEnJBCU+SjMXXWm9hpXTu6twZYeVIB65mDlKOHI7l1l9qWHlvN7RubLDShxnFzMvqhxeg41eJLPbufz6Sg0r53goHC2MIq6sqMWmIjCowaRIlxpWo9v3GlZCR+2EFA41lCBWQjm7mInIXGSOxjTNbufC66vXsHKCo3YKRwtX1tJisxG4QwR3Lme3dsn1lRpWzu6uzpUdVoJ4tGL1Gg6HttSwEkPUYB/rHSdv5uYFm7zdsLK6FpuEgBnxBhpqkMhBgwkqd69At9SwArSbItghYWjeSKyvtCVnIHA7MzeHQTOqvLo6Sg3rp9yilFek11fRkrMRQAohaLMjzK7+iuordisnmwpufjux89sqkpV1tdgRENidnU7NCoBLDStAuymyq3wRdUOxHs15Jc3CIO55tV5dTaWG9VMealA+jNClaT2U80qOWdgl7iGc187l11RqWD/HtrL0r2q3HsHjlIzXsD1qqHqvh7jYrcQOIyQoX69hJYjHLHZndo7Z1GXWXWpYOa++Dfn999/7RoO/QGGBoohJrKyuxSYh4BO++QbcN998Y158rCHO3aTqr6iaUsPKycYF47hLFUmvrKvF5iGAC0xNdhMSqbhfc1kBcKlhBWibItQuK5JXIaOC4uwsVtbYYjMQyKT4BpwQb86kdF5WQFtqWAHapkiowTGkPUVIodSwEsqpxQZf754Q12tYgXGpYQVomyJWJD+aGNQQSVenlWjOK4YFTIoTh1ADvp5X93XVVGpYOd/Da8ifrkIKyKLUsBLNqcWQQnYTpkMoO6xDt9SwDre7Zw1RQfHK6lpsHgKoQRj7OwlhXvXXUlOpYeVM07bQAS1cWUWLHQGBLQ9snlCo2wQJEqWGFUiXGlaAdlPEswnHDdTuj3/8I4Lw13FLE+vR3LPkrs07XzARYkKJb7/91tmwhMtwROdlT3Q32fttyBWgbYpEEbNG0TybW7pIEennyhpbbE8Ewg4Kxf4l7BvMRXwEdyXECXvW3eylhrU6EGrYquPm19k8iP5Vu7VYrizH5oM/arhlgd/4C3d8hFLDOny7oViH2/tSNI9e5kic4/D+RlPHRADmQtgh7Ujja9Sw9d02mwvyCHezHbNTF1V3NxQrp3OoJrWTjh9LNb/4omy7EtK9isE8+WP8o2yogVC4wx0jTxNPQaB6/BSUFvIMakAH0jYUwtj0LhSoaDYCmQK1ctbMAvDxglkgzxlkMoxss9u/8PpKDSsnmMIpmdWJy0Ap/dTv66+/Xlldi+2JQBg5zlocBO+eeTZhZ6cmdwklMk2l7D3R3WQvNawAbVMkmidB+WiexYpqCiura7E9ERiWH6fAFAA/P8RW07grnQx7Vt/sfUKxVgcoH53LYbgPBKgGO/zpT3+yVr1+/SYSeSxf1jFaG8na1q63HAyZvTh/VyLkC8xcglcCI/zzP/8zl81fBZFTMBcgyzMjxZO4XhBXjbzHkKtge7gQdvj97zeKS0HFvviSnfDDJXrnYwiAMbcRsQQuEBOiAyGvkyCCnD5igY/V1Xv7IFBq2AetJ+Slpj4ZGYW2uEm8fPnSB6CyB35CBc3yAQIAFPBCfIdQgxgvfPfddzwFaRkK7weozbgoNcxAcaeO7cYh29uNNlNZFxyH6u4OSGuSu16DNDwT8ALvLAQREllTe8vcQ6DUcA+SwwRbDb555I4a4ut2r7saVHjG4JNI2hGPIJ2HlImhLdhtrG6rBXcR6N5sF40J6VsFvXl+5nJLFhNqvs4qBnpJoAOQOozEuSRIIbwAHJf8iOtE6RijLjVMRpWmxrkVU1Z6bH2b3MY1VTcYYQw61IAd3MIU5CSCRC5HziYOQaAsewh6C2Uxgt/+8RX8GnPr9L745Zd3FrmP7iluNiAL1V27aPdlZyzgEhHwDr4QI2FcEP6V8KS4P2GZqC/1GiaCuamK7vr3669/f/v2jcfsflLxu9/xczkOG7XeLmwUmkOxyUadJzd/cdWhVBjC0z9IglTiX//1/4gHpD7XAFKX238XB8EzDajUMBn4WDv/Nu6uS2kbY80MIthxkksNj+Cfn6vxv4BmswZJjy0lHinW2wcjUGo4GMJ7FVDiBFxAiVGDx+8kLm03ZJdOoUEW9+qo4AaBPIngd4HRg2GvNvmjYR/dnRW6OQiUGubgeKcWeiyECyQoNOUOIwzWcHdwxJ3ivRwIgCgHuiR41ukjr2H78sjI0sRRECg1zIc1vkDMPmlLH3bIAjjay61x2cQiAnghAVxIFjWAkWQxc4UTESg1TARzUxVGoMTR3ZEm+f3vf59H8WkvvEDXJzd/cdUBCox2EANDvkNo9+LGel4DqmpOno+xj6C+0mI0QZsdN4w9BS0XNFxqeBR9QA03wY8m0KvdBCQfLdgMByJQajgQwIXiW8PfWH4WN5fZJFPxsdyFGsblQi0V3SIQaoCVUwZpYJYabrE54v+lhvng8gUExp9tBW221vkrFX6vTbnfvn3rrqMHd3vS/ij6WABiYi5DmFS6x5CP4nZ4hjpmh2P4pBqoNS5wioYUslsOfdRx+Dh8QAMUbs0BJLiK2McRm3W3XsMsJB+vh4/gxMHqhxq6YX4cr20OoHG7eFuoAUeQlR2eCN2B2UoNBwL41OIU2gLIZYhjbLsRRX9q+WvNBzQ7CLhxHGAAN+FawTjpuEsNp4MbO1gArX6CRB3jp0APJdSAFzApmhDKDk/B7fA8pYbDMXxqDZSbWtN1jkOOIcsOj2IXJsUOoAsvKFLH4VHcDs9Qajgcw6fWkKN1Bw2owaFDH088BTinDGiUkxVnAZmWT5+C2+F5Sg2HY/ikGmg2rwEvCHTdYmgNvD4td0yw17/PAGU3MYCCoTAunwR9M61CoNSwCrb9C0WhKbqiHtT7O0t//vOfOQ60PNqPKbCG5VG4dIdigR3yLQafvfErbLb/7t1bG4jvvoPTtyACSLhVDKj94W+JvREoNewN2boC2SfT8gTqz3fwwwpKH73HCITYQU5bj3WtfAqllp8vhBbzGEI6+Nh2fQojusw+lhpONK/U3YqnMUqfGDX84Q9/GHRwNdSwDHioASeGQ8ObDhqWc1d6fARKDcfH+LYF1MBlcBWvGCnkDajsIJiEu9fsMBs+EOIy8KcEyNyC1/9PjUCp4USID1LQHgOwiRBjBz+siNsctyI+hVsn6tbZNAMfCIBFgrOAF3gQJGfTwavrSKnhRFOeBTB7Ctof7wAF4AVmIA4piIWrpQaw2ErkvQ8TU2o4kXYuNXPBx11Lw30+WeiA6ksIoyPWyXgNP//8sycXbl0nNQAEOB7W+PSjpxLS8SAGUE2cGIF6DScCnM1Td0EiJ44SQn5xzHHIc029IcQOJ+rW2TQTRwkIeEEMKJIrxOFsJuSzeg0nmguKvqWCDUHs+ske1+USO0jwHa7zR5l8hD9ug/nwbQuxs4Yw6YlmqM18iMDVrU4fDv9cruIpMAbrpPS5dOuE/eBJCdc59hPCvEdTpYY9wDpeViaBF3gQAnawWh6vrfOs2emjsZcdzmd2Sg3nMhcYYcsMV00N43Ch7sOz62Wp4dmn4ObzJKyC4yAM83j+np2wB7wGLoMGh8dUdjgh/AtNlRoWQDmliAEwhgSkwDzELk/Zh3Noa3BioDiHLl15H/qE4pkVIGuj5xeCruAFkgifuWenbT4DxwvB4bSNt7UFBEoNC6CcWMQctktlnk3wF8a/hzpygY8wwoa7LsMV8uND8/0s8lLDs8D+vlG/J/Kw0gHku3fvxD5c4lMFdhWM5H2m96kLJIUMDhEYstjOIpJcvh96U6dFoGcNp8X70NYW+eLQSlu+CNxHoNRwH5NKikAR+KzUUCUoAkVgAYFSwwIoFRWBIlBqqA4UgSKwgECpYQGUiopAESg1VAeKQBFYQKDUsADKKUV5eu8bDV5q8Ej/1atXXgd84KWGU/br1G35VkXeaPDhhrwZSSJx6n60vVsECv0tEs/3/3jtDyNcISkE+L4f/XwKuNxyqWEZl2eRhhqukx34CAYeltxNPMtEtFEIlBrOQg1iElbOLJ7DjziLzp2kE7ZUxr47cOnrZMmT4P14I6WGxzE6dg42EDPYMsM1HjRAGDXcdxZKDcfWvY/UX2r4CDinvsUSsMOwkFM3/6ztlRqeFf6FxksNC6CcWBSvQaNIIeHEHTiH5nLWcKcn0Lgj6eXJECg1nAzqxxt6Ai9cwI+yl4ewe8gCh0GXj6PWHMdBoN9rmIzreBRPv8epO0Un3z1KIMnXk7/++htfanj79p03Gt68eeOpvo82/PrrBwdyk7v4/NUtsAO4/vKX/+ePcQgvXnxhXzX+Uk82WQD04gPcoAqlfEjy+YdyuT34/N//4z8vd3TPMLKsePSYEksL6QT7J0wYt9z9+eeXiMBOW6D0MrsrZBV9hgE8U5OGrGX4sH+fkE3AEYAMpY4dRz6feW34nH5a6jVMxpzK0m82vzXwjbqTjMvxVVjrHrIQ//Wvf8UGMiSPsqPg5J6dfXWACiyQQZTSXhD12SugCWAhDLxnP5RL6GCpYfIsUmJGHjpQddIuLYO59Ecuqbg41DCaRwpJyzyE15PIqKGXIcNH4El8883XoPvmm2+8SC4hm8CDiJdxPficfqSlhsmYs/DornqlBUosdmkZpO4OFMTSsiEOf7MqXoMMLhNLpIjL6wkBKjbP+Dcc8Jv41yDmz+T6k+JxH7Lzuh5knmWkpYb5sMfCqTg9ZuEu6fjLly85C4MXtOqW4BZqSCdSUDrmMb9nZ1wjKPQOGkAwfGF76PjCmSP3SgDdd999F/fB3YHVGY/p0+5aqWHy/EVl6S5dF1vfqDU3wZ/ApvdR/dxKHqujHgxFJ0wYksn9O+PqDDkhfYSDRGK4oQZgQtK2AmvgiDMeyiV0rdQweRZj2NFpCk2Vf/rpJw8m7SAwAj+CWrvLBtyl6wS2EbdGsdlQXCc1QMPAc9YQcFAqhDhehIIMMMSwIC01TNbaper68HIJlcNkNg5098svv7SJ+Mtf/kKVLXEPb4+tjTcbisOavcjSuPLm6e+d4QH53/7t3wAbpnBICWEhG5M7mXu5AoG+DbkCtI8VyRJnAYwjkJWQ8GNlem9/BECKf4VgO9Dev6aWWEag1LCMy+FSDrBAZQ+vqjXcRyDwkiNfcaCuy3AfqNWSUsNq6JYL2g+HDrKOySRBuJy70rUI2DtAVRy0UYOa6p2thXOhXKlhAZRDRHTUOpYTx8Quo7iHVNuydxCwlYiPIE4ijsOdbL1cjUCpYTV0ywWpqbUry9c4aIjTu1yg0lUIjNefAriY+8CJWFVZCy0g0IeXC6AcIgoL0NG8DZ2tBGH83kNqbtldBPgInm6SIAVvOogDcll4F6VD0qWGQ9BbKIsCaK3godrr168RhEwUdyHrRtTHlg8A814MooWjXK+K2FMgBQ+JPbnECEAWSsHvkTssVWq4wW9oVXRrxIx8q3I3P4gkH0FJGpmQtPjHH3+Kv2BN4zK4u91c0O+ywA3U+/+3AJ2vWrx+vXnvHLwvX77ygoPggeYvv7wzQZoQA9/cySDhcsvYN8+MMqfinhA/NB2lhhtkhj7lOsoktjRFEt2STk4KR7FkIKFeeRt6Swre4dtoIS7w0ykZbrMtLH2pufHDCCyQQjIzeRMheNPcr1hh7pfc5sQvNU2ZsGXkz7KzE2fTQZhSJsisieV8uPWrvlNcbqZ/a8w3D8lvlW+zC4icPkmz82HqJG4J6AAv5HdT0jSV1mZRklmp5EydjWchsIsthBm/HRy837x5bX/hkFKQGC6DORpzNxJhilldurB6Sg03E0q9aExiomiemPG7zMrvUkiB/CyCwgnWHwXJt0uQTwl8sPtQg7tdnYLbrDiAm5c7FZoXcyQOQficHI5wHpFZEAsyKIgXxN1Q3AFwXJYaBhTLCRrmBmWii5YmmiRI+H3EuJSBnsWJpXV5AVL+hMEmyw1UugqBoHoP238ggsxLTnycBNtKmMQ//OEP2sEFqCHzIgOJiVvV/uUXKjXczPEdVaM9JGJaJaZtvAMuazYO2CEZ5KF5qYKEHDW4jP5J0EV5BJKblvrfDAQAC3A1iUfCVby6sVMwaygA/uYufoT5yl1zKszoy2XWUWq4mVeqFj0b8xxj9itgCkS9omRxGegi9aJwSqXgWIuoZrwGd0dVTUxHYEsI76OBtmka8yKRHGbnhx9+4NZtTiC+3nxRDk2YuMEg07t3ARWWGm4mMWqUmIhKJf6f//kf1BBGIKFeNq5UilCesAb5liI2qma3Ecdh6KU8MrglbpiFwOBiFYI6+GNjX40kydSMtmRABybCNlAYHGEqh9M3MjcRBC78ew104s5M0yFaJZDnbhYWT8WpTnYNnM/4CMl2p4bHLrV4t9HHivT+LAQQ+obTnx62f/Zi403gCJShIH0w7xaDVBIlEdMcEolkGCoUVlqlKk/v5jPkvFiv4c5U3a4qmw+WZ4It44KZllPgcIophAyChEtKIM8zTEubPBUCf/vb3zBCTisRhI2GS9oiEVLQkY1+bJ9SRx9CE1EMEsGiMjKfquNHb+diqcHUZkbH5EmAkw+ZhDgUwEdABB53kewWSbajz0AbeFYEEIGJjpOIIEINzJ43gSAksqjoY9Qjnb0G3bhYasgOPwRvOgepm1S34h2M7QOOGM5k5j4FR6kIG18eAjwF6wGVEDbu4i+/4ALz7lEUXsAU1pLwhTj6MPJDgyT0QXhh4FwsNTB7c5ZpM9kYQTB//lpUlEAcoTgrg8TggiTElzflF6bBBw6HnqQGOiBhxgWJvDpFf8IOTiJy/EwyFGY0TTLSF5O4WGqwGmSSUECOFSkBZ0EINYQIskRwGaIQY45zd1xezHx3IHcQoAxbNrg5ZXTXpAuhAHcFmsOJwBGECIK2iAUFrRzRKLfu1PypX14sNZgzgX+IF0INmUJ7SHOGEdwNHUiQjKmlFp/6pLb/T0eAwcu8ZYONU5nZF5OLIxFTJPpDYbLRCDXIk6UlivT0Rj+JnBdLDf/93/+N70MH5tgUhuzRRKafRDCpLiPJhI1pTmL31hNmtI8tnwDScbOYgj3IfTv5NxRgxodW0BzdjGS3v9EfL8LJaZfhz+0JEsm/m/NTT5/dew0mIwGypg1hJ4TFM5G7oJtN+Uni+Dlkxus5aNjNdtp0CeK0eL9vbQ9SeF9oRupf/uVfOJ601AqENVRJb7cKfPMudrRUnLsy3FHmZCCc0Z0JdZwdNeyyNbBGwNbS0IesRIYOx1evXvsdNC6Iy2c+cldiAjytogg8DQGqGGrIXkO83W5sXJihrlnkrGEyR40VcVfILXLppzV49Fxnt6EAlkHDKGGL2ybKqY8EENEHIkAHW0/BJnDz2IlQEYij7VRydPDaQBG4RYDuUUKB05qt69aD+MJrlnSSQooF2eWkwzRZeiQIXUZ4W+Uz/3921ACd+wABjhARbLlg8wvIBJcghby7ZkIciNHE/UqeGek2f9EIWLrYOYUUW7Ro4JYKfDlis1BRzvgRWCOKCgyZZRNLy5wljeRMcDo7agimYdmYOqyB9b//+7+BPmhGKBt3wV0JyEokj5jkTCBuN64BAf5ChhnFo7rR3o+8HyG/zHElpJP/fLA6O2pArtCx+KMAYeuj+ara5tmyWGD27gI0sPqf40AiA3CDLJqI+3A+QLcnl40AtaR+1FIsUL+tom6WKOmoLhW9/34EJ0IpmWm7bMqeCVBnRw2ggVFAtGuQcAk4v4x0KxQbs99CjyM23oH07aUsmx1dQxE4JQJWo1h1SCHaiB+8HnVLExuysNTRZznHkYQHn2EHvU0Np+z2R9o6uycUP/30E+xCCkhU1ze2fvuGEuwSxpC4EVtI33OtmRAUGXmaKALHRoDKpYlbDd38z/11nkB+R2lJKHnk3Ars4E08ix+XeWxMUtszxkf3GowcCoycrYYds0fwIjM5HkW35DIgBZ/ZwKaBA5o5PsjlMPWt4b9/9rudgPe8IPP9aXhGfNv0lSCw1cObse6o6I2i7khu8mSjET+C8vOOKT/hn/70J2qftZClKMg6UIYMaYIkLonMsmX5PAbIp/AaDEbXB3aByWXQMea8p2TAsu3PmnjhA2o4BkytswisQoDmv1/GdmuI8cfI2YJL5iCBBYR4EMnD+AVpdxN264lx7UpmpY/uNRh8RjXYzvCgQM5rQASOcPElggg6swbWeorAOSPAHIadS8f+dZgh8BrYhfevedaMgpCxyJwicRYijPxIwzw6Nei3IaX3wUKcgWEE76IjCKO11wpT7G4ijjTmVlsEnh2BGEVsQWdcJtB/NME0HLehBu6Dkwixu4jgNtcpXpo8OjWgPUMyWvYfs5dGjQbvWEECLuRxGeR89jlrB4rACRBg5OGF+AXD5plJWCDWwX1w+oAddCl2JBZGWZmP1NsTUYPej8GjQ8P2TT4o2FYZJ4IgDHcgjiMNtdUWgXNDIBYuFmLkYxElkWYXPGs2wq0mCY/ERtiLy+PZy9GpwagMQDArtgyG6nABNdxhu0Ec5zZ57U8ROAYCsYjUPLwAlwxh12RcshdWQ8h3sJQqKJ2wW8n0Th6dGoxt0BvvwDgFbtJ3331nwJ5NGJ49lTz4T4Y9R9tnE9NVohXORYCKLvj89DzLISPXnnRaZQjSFtGNI7EN0uzCptsVaoilpOwoNbfHqW0aNTBsoxV2x2kwfi3t74BI/PDD33zQPdm8yuBFRw8d3ZLfew/+SeTVxvSscRG4FAQWFrDtq3qb8dkl7A4zD/p3DcEZnd8D/fzzy+3PhT73xztJmJUTPG88OILYLT4xPY0acsSIAsJkg8/wHLPnJmwHE/HNw8uJw2hVReAsEVgghXX9RAceUPg6Cdaws0AK3A1m5XWHdRU+WuoDxno090cyZNcwMuAIwaV3uWwcfvzxR/G4K/NIN1EEisCjCGSjYTMeU2JWgr3GowVXZ5hGDXrAJcBkYqSQzYWESwcKHlUaBmEkcR5Wd7oFi8AVIsB27MexQ07xkQXJ8XCYRg1IQb8HNeh0+p2RhN4MRsALR2W744HVmovAcyHAaqysMR/UIDC37OKP1KWZ1KD3go6GF0IW/J/4C3EZErt1pPG02iJwkQjEslADC3LE4GUHO3SXxxvsNGoIHSTWXcZvALjNVsKlfZGxDd8hDsXxRtWai8DlIRCvHDUwJc64fTrJ8YY5jRriDuxSAyLYPpjY/JiU57NLDTIfb0ituQhcHgJMxnIrsCamxLJ4DZ8GNehlvB2MoOtxE7wN7XUmt/J4QgZpo5Lh8iavIyoCx0OAWTEfSyx2YEQIQoLvoEWssUsc4Y7DezJz9dZj3dVL3Yq/UAo4fIZaQxGAAIMXx6CkBbbGyhjdEM4FatorTxhBR3WOvyDO11nm9rW1FYGrRQAXoAB0AAG25hIp+GkFb0L6GOeR07wG3Q175VjBAeT+P4i42nnvwIvAIwgMamBloQY0YZ/OyuI4yJA8j1T05NvTqEG39Bh7Seh0enwMMnvy0JqxCFwUAkhBMKQNB9w6EQyN43CMcU6jBnSAGgQcFl7IGI7R6dZZBK4QgTCCgQ+CYG53vIZx93B8plEDRkjXnTjkVS2Xh/evNRSBIgCBQQfxF1xK8Mq5DGNDMReomdSQnukrdsh5ScYzt8etrQhcJwJZeo2dWQmhBrwQW5uOyTRq0FGd08uE9F48vcetsAhcLQJhh9ga42Jr4rz7ZHPhEjIeESbDgShNo4bRj9LBgKKJInBsBLBAOEJDgzKmNDqZGvDW8HCmUNeUQbaSInCpCLCyXaPLMKcsz5OpQZ9CDXosTOnipU5qx1UEDkcg+4hxEsnoDq8zNUymBgSWI1Nd1OlSw6x5aj1FYBEBhsboxsG/PLOMbj417HoNi4OpsAgUgVkIWIBZnPUYQcRlQA1T2GEaNaQ34vg2Rq6jU7o4C8TWUwQuD4FY2TC6iQOcRg3pEy5ICIFN7GirKgJF4D4CoYZjGN00atBFwWubgpe04ueQ3B9MJUWgCMxCgL8wvpPE6Jje2Fkc2MQ0ajiwHy1eBIrAWSEw7XsNZzWqdqYIXAkCHPPbTfzm/4x6irder+FKVKjDvGQEBjsY5CCIAwdcr+FAAFu8CJwFAmGHiV0pNUwEs1UVgedBYNdrmNWD/w+rgfS1xdSAHgAAAABJRU5ErkJggg==", er = {
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
		}
	},
	data() {
		return {};
	},
	methods: {}
}, tr = { class: "flex-fill" }, nr = ["src"], rr = {
	key: 1,
	src: $,
	class: "img-tiny rounded-circle me-2",
	alt: "user avatar"
}, ir = {
	key: 2,
	class: "d-none d-md-block me-2"
}, ar = {
	key: 3,
	class: "d-none d-md-block me-2"
}, or = {
	class: "dropdown-menu p-0",
	"aria-labelledby": "dropdownMenuButton1",
	style: { width: "280px" }
}, sr = {
	key: 0,
	class: "bg-danger-subtle text-danger-emphasis rounded-top small fw-bold px-3 py-2"
}, cr = { class: "p-3" }, lr = { class: "d-flex justify-content-center" }, ur = ["src"], dr = {
	key: 1,
	src: $,
	class: "img-profile rounded-circle",
	alt: "user avatar"
}, fr = { class: "mt-3" }, pr = { class: "border-top mt-3 pt-3" };
function mr(e, t, a, s, c, l) {
	return v(), r("div", { class: h(["d-flex align-items-center rounded-pill small border border-white p-0", { "bg-danger-subtle border-0": a.userOverride }]) }, [i("div", tr, [i("a", {
		class: h(["d-flex text-decoration-none chevron p-1 text-white", a.userOverride ? "text-danger-emphasis" : "text-white"]),
		href: "#",
		role: "button",
		id: "dropdownMenuButton1",
		"data-bs-toggle": "dropdown",
		"aria-expanded": "false"
	}, [
		a.photoUrl ? (v(), r("img", {
			key: 0,
			src: a.photoUrl,
			class: "img-tiny rounded-circle me-2",
			alt: "user avatar"
		}, null, 8, nr)) : (v(), r("img", rr)),
		a.userOverride ? (v(), r("span", ir, T(a.userOverride), 1)) : (v(), r("span", ar, T(a.userNetid), 1)),
		t[0] ||= i("i", { class: "bi bi-chevron-down me-1" }, null, -1)
	], 2), i("div", or, [a.userOverride ? (v(), r("div", sr, " You are overriding as another user ")) : n("", !0), i("div", cr, [
		i("div", lr, [a.photoUrl ? (v(), r("img", {
			key: 0,
			src: a.photoUrl,
			class: "img-profile rounded-circle",
			alt: "user avatar"
		}, null, 8, ur)) : (v(), r("img", dr))]),
		i("div", fr, [S(e.$slots, "default", {}, () => [t[1] ||= o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium hendrerit dui, sit amet dapibus nulla condimentum id. Quisque pulvinar viverra eros, sit amet blandit tellus faucibus at. Maecenas a turpis sed quam vulputate placerat. Duis id eros sit amet turpis dignissim lacinia. Suspendisse molestie vel nisl sit amet convallis. ", -1)], !0)]),
		i("div", pr, [S(e.$slots, "action", {}, () => [t[2] ||= o("action", -1)], !0)])
	])])])], 2);
}
var hr = /* @__PURE__ */ L(er, [["render", mr], ["__scopeId", "data-v-6364356f"]]), gr = {
	props: { level: {
		type: String,
		required: !0
	} },
	data() {
		return {};
	}
};
function _r(t, i, a, o, s, c) {
	return v(), r(e, null, [
		a.level === "1" ? (v(), r("h1", p({
			key: 0,
			class: "fw-bold ff-encode-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0),
		a.level === "2" ? (v(), r("h2", p({
			key: 1,
			class: "fw-normal ff-open-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0),
		a.level === "3" ? (v(), r("h3", p({
			key: 2,
			class: "fw-semibold ff-open-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0),
		a.level === "4" ? (v(), r("h4", p({
			key: 3,
			class: "fw-bold ff-open-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0),
		a.level === "5" ? (v(), r("h5", p({
			key: 4,
			class: "fw-bold ff-open-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0),
		a.level === "6" ? (v(), r("h6", p({
			key: 5,
			class: "fw-bold ff-open-sans"
		}, t.$attrs), [S(t.$slots, "default")], 16)) : n("", !0)
	], 64);
}
var vr = /* @__PURE__ */ L(gr, [["render", _r]]);
//#endregion
export { Bn as SColorMode, $n as SCountryCode, vr as SHeading, sn as SProfile, ze as SSidebar, ge as STabsDisplay, xe as STabsItem, fe as STabsList, Te as STabsPanel, st as STopbar, zt as STopbarNeo, hr as SUser };
