import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useLocale, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, f as countryName, i as bandLabel, l as cn, n as PageIntro, r as SiteFrame, u as countries, v as siCities } from "./site-DxxMlZSn.mjs";
import { a as quoteLine, n as formatDays, r as formatEur, t as MODES } from "./pricing-jXzpwRFf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/network-7BvxqyO9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"all",
	"home",
	"near",
	"europe",
	"world"
];
function bestLine(country) {
	return MODES.map((mode) => quoteLine({
		from: "home",
		to: country.band,
		mode,
		kg: country.band === "world" ? 80 : 40,
		pieces: 1,
		dims: null,
		insuredValue: 0,
		priority: false
	})).filter((line) => line.available).sort((a, b) => a.total - b.total);
}
function NetworkPage() {
	const t = useT();
	const { locale } = useLocale();
	const [band, setBand] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("SI");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return countries.filter((country) => {
			const inBand = band === "all" || country.band === band;
			const name = `${country.en} ${country.sl} ${country.city}`.toLowerCase();
			return inBand && (!q || name.includes(q));
		});
	}, [band, query]);
	const selected = countries.find((country) => country.code === code) ?? countries[0];
	const lines = bestLine(selected);
	const filterLabel = (key) => key === "all" ? t({
		en: "All",
		sl: "Vse"
	}) : t(bandLabel[key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: t({
				en: "Network",
				sl: "Mreža"
			}),
			title: t({
				en: `${countries.length} countries. Slovenia first.`,
				sl: `${countries.length} držav. Najprej Slovenija.`
			}),
			lede: t({
				en: "Domestic cities, neighbour road, European linehaul, and intercontinental air or Koper ocean. Pick a country and see how it leaves Ljubljana.",
				sl: "Domača mesta, sosednja cesta, evropski linijski prevoz ter medcelinski let ali ocean iz Kopra. Izberite državo in poglejte, kako odide iz Ljubljane."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl uppercase",
				children: t({
					en: "Inside Slovenia",
					sl: "Znotraj Slovenije"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: siCities.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-paper px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: city.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t(city.level)
					})]
				}, city.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[320px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [t({
						en: "Find a country",
						sl: "Najdi državo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						className: "mt-2 min-h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25",
						placeholder: t({
							en: "Slovenia, Koper, Japan…",
							sl: "Slovenija, Koper, Japonska…"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: filters.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setBand(key),
						className: cn("min-h-10 rounded-full px-3 text-sm font-semibold", band === key ? "bg-primary text-paper" : "border border-line bg-paper"),
						children: filterLabel(key)
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 max-h-[32rem] space-y-1 overflow-auto pr-1",
					children: [visible.map((country) => {
						const on = country.code === selected.code;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setCode(country.code),
							className: cn("flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-left", on ? "bg-ink text-paper" : "hover:bg-paper"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: countryName(country, locale)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs", on ? "text-mist" : "text-muted"),
								children: country.city
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs uppercase tracking-wide", on ? "text-accent" : "text-primary"),
								children: country.code
							})]
						}) }, country.code);
					}), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-6 text-sm text-muted",
						children: t({
							en: "Nothing matches.",
							sl: "Ni zadetkov."
						})
					}) : null]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-line bg-paper p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-accent",
						children: t(bandLabel[selected.band])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-5xl uppercase leading-none",
						children: countryName(selected, locale)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-muted",
						children: [
							t({
								en: "Commercial city",
								sl: "Poslovno mesto"
							}),
							" · ",
							selected.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm text-muted",
						children: selected.band === "home" ? t({
							en: "Domestic freight stays on our vans. Sea and air are for lanes that actually need them.",
							sl: "Domači tovor ostane na naših kombijih. Morje in let sta za linije, ki ju res potrebujeta."
						}) : selected.band === "world" ? t({
							en: "Intercontinental lots leave by air from LJU or by sea from the Port of Koper, then inland at the other end.",
							sl: "Medcelinski tovori odidejo z letalom z LJU ali po morju iz Luke Koper, nato po kopnem na drugi strani."
						}) : t({
							en: "Neighbour and European lanes run by road from the Ljubljana hub, with air when the clock is shorter than the driver.",
							sl: "Sosednje in evropske linije tečejo po cesti iz ljubljanskega vozlišča, z letalom, ko je ura krajša od voznika."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaneCard, {
							line,
							locale
						}, line.mode))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						search: {
							from: "SI",
							to: selected.code,
							kg: selected.band === "world" ? 80 : 40,
							mode: lines[0]?.mode ?? "freight"
						},
						className: cn(btnAccent, "mt-6"),
						children: t({
							en: "Quote from Ljubljana",
							sl: "Ponudba iz Ljubljane"
						})
					})
				]
			})]
		})
	] });
}
function LaneCard({ line, locale }) {
	const t = useT();
	const service = services.find((item) => item.id === line.mode);
	if (!service) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl border border-line bg-bg px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: t(service.title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-2xl tabular-nums",
				children: formatEur(line.total, locale)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: formatDays(line.days, locale)
			})
		]
	});
}
//#endregion
export { NetworkPage as component };
