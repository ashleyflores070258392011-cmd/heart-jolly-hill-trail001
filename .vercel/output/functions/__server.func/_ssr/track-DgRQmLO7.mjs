import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, l as cn, n as PageIntro, p as fieldClass, r as SiteFrame } from "./site-DxxMlZSn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-DgRQmLO7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusCopy = {
	in_transit: {
		en: "In transit",
		sl: "V prevozu"
	},
	at_port: {
		en: "At the port",
		sl: "V luki"
	},
	customs: {
		en: "Customs",
		sl: "Carina"
	},
	out_for_delivery: {
		en: "Out for delivery",
		sl: "Na dostavi"
	},
	delivered: {
		en: "Delivered",
		sl: "Dostavljeno"
	}
};
var statusProgress = {
	at_port: 46,
	in_transit: 62,
	customs: 78,
	out_for_delivery: 90,
	delivered: 100
};
var shipments = [
	{
		id: "GEL-48291",
		from: "Ljubljana",
		to: "Munich",
		fromCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		toCountry: {
			en: "Germany",
			sl: "Nemčija"
		},
		mode: "freight",
		status: "in_transit",
		eta: "18 Oct",
		pieces: 4,
		weight: "186 kg",
		events: [
			{
				at: "16 Oct · 08:10",
				place: "Ljubljana hub",
				title: {
					en: "Collected from the shipper",
					sl: "Prevzeto pri pošiljatelju"
				}
			},
			{
				at: "16 Oct · 15:05",
				place: "Ljubljana hub",
				title: {
					en: "Left the cross-dock",
					sl: "Zapustilo pretovorno vozlišče"
				}
			},
			{
				at: "17 Oct · 01:40",
				place: "Karawanks",
				title: {
					en: "Cleared into Austria",
					sl: "Sproščeno v Avstrijo"
				}
			},
			{
				at: "17 Oct · 06:20",
				place: "Salzburg",
				title: {
					en: "Linehaul still rolling",
					sl: "Linija je še na cesti"
				}
			}
		]
	},
	{
		id: "GEL-11028",
		from: "Koper",
		to: "Rotterdam",
		fromCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		toCountry: {
			en: "Netherlands",
			sl: "Nizozemska"
		},
		mode: "sea",
		status: "at_port",
		eta: "2 Nov",
		pieces: 1,
		weight: "11,200 kg",
		events: [
			{
				at: "14 Oct · 11:00",
				place: "Port of Koper",
				title: {
					en: "Received on the terminal",
					sl: "Prevzeto na terminalu"
				}
			},
			{
				at: "15 Oct · 16:10",
				place: "Port of Koper",
				title: {
					en: "Export cleared",
					sl: "Izvoz carinjen"
				}
			},
			{
				at: "16 Oct · 09:40",
				place: "Port of Koper",
				title: {
					en: "Loaded on the vessel",
					sl: "Naloženo na ladjo"
				}
			},
			{
				at: "17 Oct · 07:00",
				place: "Adriatic",
				title: {
					en: "Vessel sailed",
					sl: "Ladja odplula"
				}
			}
		]
	},
	{
		id: "GEL-77301",
		from: "Maribor",
		to: "Milan",
		fromCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		toCountry: {
			en: "Italy",
			sl: "Italija"
		},
		mode: "courier",
		status: "delivered",
		eta: "16 Oct",
		pieces: 1,
		weight: "3.2 kg",
		events: [
			{
				at: "15 Oct · 17:40",
				place: "Maribor",
				title: {
					en: "Collected",
					sl: "Prevzeto"
				}
			},
			{
				at: "16 Oct · 02:10",
				place: "Ljubljana hub",
				title: {
					en: "Sorted overnight",
					sl: "Sortirano čez noč"
				}
			},
			{
				at: "16 Oct · 06:00",
				place: "Trieste corridor",
				title: {
					en: "Into Italy",
					sl: "V Italiji"
				}
			},
			{
				at: "16 Oct · 11:25",
				place: "Milan",
				title: {
					en: "Signed for",
					sl: "Podpisano"
				}
			}
		]
	},
	{
		id: "GEL-90011",
		from: "Ljubljana",
		to: "New York",
		fromCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		toCountry: {
			en: "United States",
			sl: "Združene države"
		},
		mode: "air",
		status: "customs",
		eta: "19 Oct",
		pieces: 2,
		weight: "42 kg",
		events: [
			{
				at: "16 Oct · 18:20",
				place: "LJU cargo",
				title: {
					en: "Accepted at the airport",
					sl: "Sprejeto na letališču"
				}
			},
			{
				at: "17 Oct · 00:10",
				place: "LJU",
				title: {
					en: "Departed",
					sl: "Odletelo"
				}
			},
			{
				at: "17 Oct · 09:40",
				place: "JFK",
				title: {
					en: "Landed",
					sl: "Pristalo"
				}
			},
			{
				at: "17 Oct · 12:05",
				place: "JFK",
				title: {
					en: "Customs, documents in order",
					sl: "Carina, dokumenti so v redu"
				}
			}
		]
	},
	{
		id: "GEL-22014",
		from: "Celje",
		to: "Ljubljana",
		fromCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		toCountry: {
			en: "Slovenia",
			sl: "Slovenija"
		},
		mode: "courier",
		status: "out_for_delivery",
		eta: "17 Oct",
		pieces: 1,
		weight: "6 kg",
		events: [
			{
				at: "17 Oct · 07:50",
				place: "Celje",
				title: {
					en: "Collected",
					sl: "Prevzeto"
				}
			},
			{
				at: "17 Oct · 09:30",
				place: "Ljubljana hub",
				title: {
					en: "Sorted for the city",
					sl: "Sortirano za mesto"
				}
			},
			{
				at: "17 Oct · 10:15",
				place: "Ljubljana",
				title: {
					en: "With the driver",
					sl: "Pri vozniku"
				}
			}
		]
	}
];
function findShipment(query) {
	const key = query.trim().toUpperCase().replace(/\s+/g, "");
	if (!key) return null;
	return shipments.find((shipment) => shipment.id.replace(/-/g, "") === key.replace(/-/g, "")) ?? null;
}
function TrackPage() {
	const search = Route.useSearch();
	const t = useT();
	const [query, setQuery] = (0, import_react.useState)(search.id);
	const [result, setResult] = (0, import_react.useState)(search.id ? findShipment(search.id) : null);
	const [miss, setMiss] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setQuery(search.id);
		if (search.id) {
			const found = findShipment(search.id);
			setResult(found);
			setMiss(!found);
		}
	}, [search.id]);
	const run = (value) => {
		const found = findShipment(value);
		setResult(found);
		setMiss(Boolean(value.trim()) && !found);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t({
			en: "Tracking",
			sl: "Sledenje"
		}),
		title: t({
			en: "Where the freight is.",
			sl: "Kje je tovor."
		}),
		lede: t({
			en: "Open a live sample from the Slovenia desk, or type a reference. These five shipments are the preview board.",
			sl: "Odprite živi vzorec slovenske mize ali vpišite referenco. Teh pet pošiljk je predogledna plošča."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					run(query);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "track-id",
						children: t({
							en: "Shipment reference",
							sl: "Referenca pošiljke"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "track-id",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "GEL-48291",
						className: fieldClass
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: btnAccent,
						children: t({
							en: "Track",
							sl: "Sledi"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: shipments.map((shipment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setQuery(shipment.id);
						run(shipment.id);
					},
					className: "min-h-11 rounded-full border border-line bg-paper px-3 text-sm font-semibold hover:border-primary",
					children: shipment.id
				}, shipment.id))
			}),
			miss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-2xl border border-line bg-paper p-5 text-sm",
				role: "status",
				children: t({
					en: "That reference is not on the preview board. Try one of the five samples above.",
					sl: "Te reference ni na predogledni plošči. Poskusite enega od petih vzorcev zgoraj."
				})
			}) : null,
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, { shipment: result }) : null
		]
	})] });
}
function Result({ shipment }) {
	const t = useT();
	const service = services.find((item) => item.id === shipment.mode);
	const progress = statusProgress[shipment.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mt-8 rounded-2xl border border-line bg-paper p-5 md:p-8",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-accent",
						children: shipment.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-1 font-display text-4xl uppercase leading-none md:text-5xl",
						children: [
							shipment.from,
							" → ",
							shipment.to
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							t(shipment.fromCountry),
							" · ",
							t(shipment.toCountry),
							service ? ` · ${t(service.title)}` : "",
							" · ",
							shipment.weight,
							" · ",
							shipment.pieces,
							" ",
							t({
								en: shipment.pieces === 1 ? "piece" : "pieces",
								sl: shipment.pieces === 1 ? "kos" : "kosov"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold uppercase tracking-wide", shipment.status === "delivered" ? "bg-primary text-paper" : "bg-accent text-ink"),
					children: t(statusCopy[shipment.status])
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					t({
						en: "Promised window",
						sl: "Obljubljeno okno"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: shipment.eta
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-2 overflow-hidden rounded-full bg-bg",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-0",
				children: shipment.events.map((event, index) => {
					const last = index === shipment.events.length - 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[16px_1fr] gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 size-3 rounded-full", last ? "bg-accent" : "bg-primary") }), index < shipment.events.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-line" }) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wide text-muted",
									children: event.at
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: t(event.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: event.place
								})
							]
						})]
					}, `${event.at}-${event.place}`);
				})
			})
		]
	});
}
//#endregion
export { TrackPage as component };
