import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, g as serviceById, l as cn, n as PageIntro, r as SiteFrame, s as btnLine } from "./site-DxxMlZSn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Dbduec1l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const t = useT();
	const search = Route$1.useSearch();
	const initial = serviceById(search.service).id;
	const [mode, setMode] = (0, import_react.useState)(initial);
	const active = serviceById(mode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t({
			en: "Services",
			sl: "Storitve"
		}),
		title: t({
			en: "Five products. One desk.",
			sl: "Pet storitev. Ena miza."
		}),
		lede: t({
			en: "Courier, freight, air, sea and a supply-chain program. Slovenia is staffed as a home network, not a remote agent.",
			sl: "Kurir, tovor, letalski, pomorski in program dobavne verige. Slovenija je domača mreža, ne oddaljeni agent."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto pb-2",
			children: services.map((service) => {
				const on = service.id === active.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(service.id),
					className: cn("min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold", on ? "bg-ink text-paper" : "border border-line bg-paper text-ink"),
					children: t(service.menu)
				}, service.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mt-6 grid items-start gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: active.image,
				alt: t(active.imageAlt),
				className: "aspect-[3/2] w-full rounded-2xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-5xl uppercase leading-none",
					children: t(active.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: t(active.lede)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: active.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium",
						children: t(point)
					}, point.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 rounded-2xl bg-ink px-5 py-4 text-sm text-mist",
					children: t(active.si)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						search: {
							from: "SI",
							to: "DE",
							kg: 12,
							mode: active.id
						},
						className: btnAccent,
						children: t({
							en: "Quote this mode",
							sl: "Ponudba za ta način"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/network",
						className: btnLine,
						children: t({
							en: "See the network",
							sl: "Poglej mrežo"
						})
					})]
				})
			] })]
		})]
	})] });
}
//#endregion
export { ServicesPage as component };
