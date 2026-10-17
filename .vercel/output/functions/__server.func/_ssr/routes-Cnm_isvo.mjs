import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plane, i as Ship, n as Truck, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as useLocale, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, c as btnPrimary, d as countryByCode, f as countryName, h as marqueeLanes, l as cn, m as heroLanes, o as btnGhost, p as fieldClass, r as SiteFrame, s as btnLine, u as countries, v as siCities } from "./site-DxxMlZSn.mjs";
import { a as quoteLine, n as formatDays, r as formatEur } from "./pricing-jXzpwRFf.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cnm_isvo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var values = [
	97.8,
	98.1,
	97.4,
	98.6,
	98.9,
	99.2
];
function Tip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-ink px-3 py-2 text-sm text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tabular-nums text-accent",
			children: [payload[0].value, "%"]
		})]
	});
}
function ReliabilityChart({ locale }) {
	const data = (locale === "sl" ? [
		"Maj",
		"Jun",
		"Jul",
		"Avg",
		"Sep",
		"Okt"
	] : [
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct"
	]).map((month, index) => ({
		month,
		onTime: values[index]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				barSize: 28,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "month",
						tick: {
							fill: "var(--color-muted)",
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [96, 100],
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
						cursor: {
							fill: "var(--color-primary)",
							fillOpacity: .08
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "onTime",
						fill: "var(--color-primary)",
						radius: [
							8,
							8,
							0,
							0
						]
					})
				]
			})
		})
	});
}
var steps = [
	{
		n: "01",
		title: {
			en: "Book the desk",
			sl: "Naročite mizo"
		},
		body: {
			en: "A lane, a weight and a window. The estimate is on screen before anyone calls you back.",
			sl: "Linija, teža in okno. Ocena je na zaslonu, preden vas kdo pokliče nazaj."
		}
	},
	{
		n: "02",
		title: {
			en: "We collect",
			sl: "Prevzamemo"
		},
		body: {
			en: "Vans from the Slovenian cities on the board, or a trailer when the lot is heavy.",
			sl: "Kombiji iz slovenskih mest na plošči ali prikolica, ko je pošiljka težka."
		}
	},
	{
		n: "03",
		title: {
			en: "The lane runs",
			sl: "Linija steče"
		},
		body: {
			en: "Road over the Karawanks, a flight from LJU, or a box off the Port of Koper.",
			sl: "Cesta čez Karavanke, let z LJU ali zaboj iz Luke Koper."
		}
	},
	{
		n: "04",
		title: {
			en: "You see it land",
			sl: "Vidite, da prispe"
		},
		body: {
			en: "The tracking board updates at each handoff, including customs.",
			sl: "Sledilna plošča se posodobi ob vsaki predaji, tudi na carini."
		}
	}
];
var notes = [
	{
		who: "Karst Timber",
		where: "Ajdovščina",
		quote: {
			en: "The Koper cut-off used to cost us a day. Groupage now leaves the quay and is in Munich before the weekend.",
			sl: "Meja v Kopru nas je prej stala dan. Skupinski tovor zdaj zapusti pomol in je v Münchnu pred vikendom."
		}
	},
	{
		who: "North Adria Components",
		where: "Ljubljana",
		quote: {
			en: "We stopped keeping a second forwarder for air. LJU departures sit on the same desk as the van.",
			sl: "Za letalski tovor ne držimo več drugega špediterja. Odhodi z LJU so na isti mizi kot kombi."
		}
	},
	{
		who: "Sava Clinics",
		where: "Maribor",
		quote: {
			en: "Cold-chain documents and a parcel of parts — both tracked, both in Milan the next morning.",
			sl: "Dokumenti hladne verige in paket delov — oboje s sledenjem, oboje naslednje jutro v Milanu."
		}
	}
];
function Home() {
	const t = useT();
	const { locale } = useLocale();
	const navigate = useNavigate();
	const [lane, setLane] = (0, import_react.useState)(0);
	const [from, setFrom] = (0, import_react.useState)("SI");
	const [to, setTo] = (0, import_react.useState)("DE");
	const [kg, setKg] = (0, import_react.useState)("12");
	const [mode, setMode] = (0, import_react.useState)("freight");
	const [chartOn, setChartOn] = (0, import_react.useState)(false);
	const [serviceId, setServiceId] = (0, import_react.useState)("freight");
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => setLane((value) => (value + 1) % heroLanes.length), 4e3);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		setChartOn(true);
	}, []);
	const live = heroLanes[lane];
	const active = services.find((service) => service.id === serviceId) ?? services[1];
	const kgNum = Number(kg);
	const estimate = (0, import_react.useMemo)(() => {
		if (!Number.isFinite(kgNum) || kgNum <= 0) return null;
		return quoteLine({
			from: countryByCode(from).band,
			to: countryByCode(to).band,
			mode,
			kg: kgNum,
			pieces: 1,
			dims: null,
			insuredValue: 0,
			priority: false
		});
	}, [
		from,
		to,
		mode,
		kgNum
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-accent",
						children: t({
							en: "Ljubljana hub · Port of Koper · Worldwide",
							sl: "Ljubljana · Luka Koper · Svet"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl",
						children: t({
							en: "Fast lanes from Ljubljana.",
							sl: "Hitre linije iz Ljubljane."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-lg text-mist",
						children: t({
							en: "Courier, road freight, air cargo and sea freight for shippers in Slovenia — and for every lane that starts here.",
							sl: "Kurir, cestni tovor, letalski in pomorski prevoz za pošiljatelje v Sloveniji — in za vsako linijo, ki se začne tukaj."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							search: {
								from: "SI",
								to: "DE",
								kg: 12,
								mode: "freight"
							},
							className: btnAccent,
							children: [t({
								en: "Get a quote",
								sl: "Pridobi ponudbo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track",
							search: { id: "GEL-48291" },
							className: btnGhost,
							children: t({
								en: "Track a shipment",
								sl: "Sledi pošiljki"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 grid grid-cols-3 gap-3 border-t border-mist/20 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wide text-mist",
								children: t({
									en: "Countries",
									sl: "Države"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl tabular-nums",
								children: countries.length
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wide text-mist",
								children: t({
									en: "Ljubljana",
									sl: "Ljubljana"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl",
								children: t({
									en: "Same day",
									sl: "Isti dan"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wide text-mist",
								children: t({
									en: "Koper cut-off",
									sl: "Meja Koper"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-3xl tabular-nums",
								children: "16:00"
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: t({
							en: "Freight truck on a European motorway at dusk",
							sl: "Tovornjak na evropski avtocesti v mraku"
						}),
						className: "aspect-video w-full rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/track",
						search: { id: live.id },
						className: "absolute inset-x-4 bottom-4 rounded-xl bg-ink/90 p-4 text-paper backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-accent",
								children: live.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-2xl uppercase",
								children: [
									live.from,
									" → ",
									live.to
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-mist",
								children: t(live.state)
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max gap-8 py-3",
				children: [...marqueeLanes, ...marqueeLanes].map((laneName, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm uppercase tracking-widest text-primary",
					children: laneName
				}, `${laneName}-${index}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-primary",
						children: t({
							en: "The Slovenia desk",
							sl: "Slovenska miza"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl uppercase leading-none md:text-5xl",
						children: t({
							en: "Home board, not a side note.",
							sl: "Domača plošča, ne opomba."
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/network",
					className: btnLine,
					children: [t({
						en: "All countries",
						sl: "Vse države"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: siCities.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: city.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right text-sm text-muted",
						children: t(city.level)
					})]
				}, city.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[280px_1fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-primary",
						children: t({
							en: "Five ways it moves",
							sl: "Pet načinov"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl uppercase leading-none",
						children: t({
							en: "Pick a mode.",
							sl: "Izberite način."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-col gap-2",
						role: "tablist",
						"aria-label": t({
							en: "Services",
							sl: "Storitve"
						}),
						children: services.map((service) => {
							const on = service.id === active.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": on,
								onClick: () => setServiceId(service.id),
								className: cn("min-h-11 rounded-full px-4 text-left text-sm font-semibold", on ? "bg-ink text-paper" : "bg-bg text-ink hover:bg-line"),
								children: t(service.menu)
							}, service.id);
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-2xl border border-line bg-bg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: t(active.imageAlt),
						className: "aspect-[3/2] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-4xl uppercase",
								children: t(active.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-muted",
								children: t(active.lede)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-medium text-primary",
								children: t(active.si)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								search: { service: active.id },
								className: cn(btnPrimary, "mt-6"),
								children: t({
									en: "Service detail",
									sl: "Podrobnosti storitve"
								})
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl uppercase leading-none md:text-5xl",
					children: t({
						en: "How a shipment moves",
						sl: "Kako teče pošiljka"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-4 md:grid-cols-4",
					children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-accent",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold",
								children: t(step.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: t(step.body)
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 flex flex-wrap gap-4 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4 text-primary" }),
								" ",
								t({
									en: "Road via Ljubljana",
									sl: "Cesta prek Ljubljane"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-4 text-primary" }), " LJU"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "inline-flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-4 text-primary" }),
								" ",
								t({
									en: "Port of Koper",
									sl: "Luka Koper"
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-widest text-primary",
						children: t({
							en: "Network record",
							sl: "Zapis mreže"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl uppercase leading-none",
						children: t({
							en: "Inside the promised window.",
							sl: "Znotraj obljubljenega okna."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-muted",
						children: t({
							en: "Share of planned deliveries that landed on time. An illustrative desk record, not an audit.",
							sl: "Delež načrtovanih dostav, ki so prispele pravočasno. Ponazoritev mize, ne revizija."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-2xl border border-line bg-bg p-4",
						children: chartOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReliabilityChart, { locale }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56" })
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-4",
					children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-line bg-bg p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base",
							children: t(note.quote)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm font-semibold",
							children: [note.who, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-normal text-muted",
								children: [" · ", note.where]
							})]
						})]
					}, note.who))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-ink p-6 text-paper md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl uppercase leading-none md:text-5xl",
						children: t({
							en: "Price a lane.",
							sl: "Ocenite linijo."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-mist",
						children: t({
							en: "Any country on the board to any other. Slovenia is the default origin, not the only one.",
							sl: "Katera koli država na plošči v katero koli drugo. Slovenija je privzeti izvor, ne edini."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid gap-3 md:grid-cols-4",
						onSubmit: (event) => {
							event.preventDefault();
							navigate({
								to: "/quote",
								search: {
									from,
									to,
									kg: Number(kg) > 0 ? Number(kg) : 1,
									mode
								}
							});
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [t({
									en: "From",
									sl: "Od"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: cn(fieldClass, "mt-2"),
									value: from,
									onChange: (event) => setFrom(event.target.value),
									children: countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: country.code,
										children: countryName(country, locale)
									}, country.code))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [t({
									en: "To",
									sl: "Do"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: cn(fieldClass, "mt-2 text-ink"),
									value: to,
									onChange: (event) => setTo(event.target.value),
									children: countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: country.code,
										children: countryName(country, locale)
									}, country.code))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [t({
									en: "Weight, kg",
									sl: "Teža, kg"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: cn(fieldClass, "mt-2 text-ink"),
									inputMode: "decimal",
									value: kg,
									onChange: (event) => setKg(event.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [t({
									en: "Mode",
									sl: "Način"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: cn(fieldClass, "mt-2 text-ink"),
									value: mode,
									onChange: (event) => setMode(event.target.value),
									children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: service.id,
										children: t(service.title)
									}, service.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: btnAccent,
									children: t({
										en: "Open the full quote",
										sl: "Odpri celotno ponudbo"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-mist tabular-nums",
									"aria-live": "polite",
									children: estimate?.available && estimate.days ? `${formatEur(estimate.total, locale)} · ${formatDays(estimate.days, locale)}` : t({
										en: "That mode does not fit this lane.",
										sl: "Ta način ne sodi na to linijo."
									})
								})]
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
