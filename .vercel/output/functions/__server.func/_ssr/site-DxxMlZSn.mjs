import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { o as useLocale, s as useT } from "./router-BnUweQrn.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-DxxMlZSn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var countries = [
	{
		code: "SI",
		en: "Slovenia",
		sl: "Slovenija",
		band: "home",
		city: "Ljubljana"
	},
	{
		code: "AT",
		en: "Austria",
		sl: "Avstrija",
		band: "near",
		city: "Vienna"
	},
	{
		code: "IT",
		en: "Italy",
		sl: "Italija",
		band: "near",
		city: "Milan"
	},
	{
		code: "HR",
		en: "Croatia",
		sl: "Hrvaška",
		band: "near",
		city: "Zagreb"
	},
	{
		code: "HU",
		en: "Hungary",
		sl: "Madžarska",
		band: "near",
		city: "Budapest"
	},
	{
		code: "DE",
		en: "Germany",
		sl: "Nemčija",
		band: "near",
		city: "Munich"
	},
	{
		code: "CZ",
		en: "Czechia",
		sl: "Češka",
		band: "near",
		city: "Prague"
	},
	{
		code: "SK",
		en: "Slovakia",
		sl: "Slovaška",
		band: "near",
		city: "Bratislava"
	},
	{
		code: "FR",
		en: "France",
		sl: "Francija",
		band: "europe",
		city: "Lyon"
	},
	{
		code: "NL",
		en: "Netherlands",
		sl: "Nizozemska",
		band: "europe",
		city: "Rotterdam"
	},
	{
		code: "BE",
		en: "Belgium",
		sl: "Belgija",
		band: "europe",
		city: "Antwerp"
	},
	{
		code: "ES",
		en: "Spain",
		sl: "Španija",
		band: "europe",
		city: "Barcelona"
	},
	{
		code: "PL",
		en: "Poland",
		sl: "Poljska",
		band: "europe",
		city: "Warsaw"
	},
	{
		code: "CH",
		en: "Switzerland",
		sl: "Švica",
		band: "europe",
		city: "Zurich"
	},
	{
		code: "GB",
		en: "United Kingdom",
		sl: "Združeno kraljestvo",
		band: "europe",
		city: "London"
	},
	{
		code: "SE",
		en: "Sweden",
		sl: "Švedska",
		band: "europe",
		city: "Gothenburg"
	},
	{
		code: "GR",
		en: "Greece",
		sl: "Grčija",
		band: "europe",
		city: "Thessaloniki"
	},
	{
		code: "RO",
		en: "Romania",
		sl: "Romunija",
		band: "europe",
		city: "Bucharest"
	},
	{
		code: "RS",
		en: "Serbia",
		sl: "Srbija",
		band: "europe",
		city: "Belgrade"
	},
	{
		code: "BA",
		en: "Bosnia and Herzegovina",
		sl: "Bosna in Hercegovina",
		band: "europe",
		city: "Sarajevo"
	},
	{
		code: "PT",
		en: "Portugal",
		sl: "Portugalska",
		band: "europe",
		city: "Lisbon"
	},
	{
		code: "DK",
		en: "Denmark",
		sl: "Danska",
		band: "europe",
		city: "Copenhagen"
	},
	{
		code: "NO",
		en: "Norway",
		sl: "Norveška",
		band: "europe",
		city: "Oslo"
	},
	{
		code: "IE",
		en: "Ireland",
		sl: "Irska",
		band: "europe",
		city: "Dublin"
	},
	{
		code: "BG",
		en: "Bulgaria",
		sl: "Bolgarija",
		band: "europe",
		city: "Sofia"
	},
	{
		code: "FI",
		en: "Finland",
		sl: "Finska",
		band: "europe",
		city: "Helsinki"
	},
	{
		code: "US",
		en: "United States",
		sl: "Združene države",
		band: "world",
		city: "New York"
	},
	{
		code: "CN",
		en: "China",
		sl: "Kitajska",
		band: "world",
		city: "Shanghai"
	},
	{
		code: "AE",
		en: "United Arab Emirates",
		sl: "Združeni arabski emirati",
		band: "world",
		city: "Dubai"
	},
	{
		code: "JP",
		en: "Japan",
		sl: "Japonska",
		band: "world",
		city: "Tokyo"
	},
	{
		code: "IN",
		en: "India",
		sl: "Indija",
		band: "world",
		city: "Mumbai"
	},
	{
		code: "TR",
		en: "Türkiye",
		sl: "Turčija",
		band: "world",
		city: "Istanbul"
	},
	{
		code: "BR",
		en: "Brazil",
		sl: "Brazilija",
		band: "world",
		city: "Santos"
	},
	{
		code: "AU",
		en: "Australia",
		sl: "Avstralija",
		band: "world",
		city: "Melbourne"
	},
	{
		code: "KR",
		en: "South Korea",
		sl: "Južna Koreja",
		band: "world",
		city: "Busan"
	},
	{
		code: "SG",
		en: "Singapore",
		sl: "Singapur",
		band: "world",
		city: "Singapore"
	},
	{
		code: "CA",
		en: "Canada",
		sl: "Kanada",
		band: "world",
		city: "Toronto"
	},
	{
		code: "MX",
		en: "Mexico",
		sl: "Mehika",
		band: "world",
		city: "Mexico City"
	},
	{
		code: "ZA",
		en: "South Africa",
		sl: "Južna Afrika",
		band: "world",
		city: "Durban"
	},
	{
		code: "EG",
		en: "Egypt",
		sl: "Egipt",
		band: "world",
		city: "Alexandria"
	},
	{
		code: "QA",
		en: "Qatar",
		sl: "Katar",
		band: "world",
		city: "Doha"
	},
	{
		code: "MY",
		en: "Malaysia",
		sl: "Malezija",
		band: "world",
		city: "Kuala Lumpur"
	}
];
function countryByCode(code) {
	return countries.find((country) => country.code === code) ?? countries[0];
}
function countryName(country, locale) {
	return locale === "sl" ? country.sl : country.en;
}
var bandLabel = {
	home: {
		en: "Slovenia",
		sl: "Slovenija"
	},
	near: {
		en: "Neighbours",
		sl: "Sosedje"
	},
	europe: {
		en: "Europe",
		sl: "Evropa"
	},
	world: {
		en: "Worldwide",
		sl: "Svet"
	}
};
var siCities = [
	{
		name: "Ljubljana",
		level: {
			en: "Same-day inside the ring",
			sl: "Isti dan znotraj obvoznice"
		}
	},
	{
		name: "Koper",
		level: {
			en: "Sea cut-off 16:00",
			sl: "Pomorska meja 16.00"
		}
	},
	{
		name: "Maribor",
		level: {
			en: "Next morning",
			sl: "Naslednje jutro"
		}
	},
	{
		name: "Celje",
		level: {
			en: "Next morning",
			sl: "Naslednje jutro"
		}
	},
	{
		name: "Kranj",
		level: {
			en: "Same-day with Ljubljana",
			sl: "Isti dan z Ljubljano"
		}
	},
	{
		name: "Postojna",
		level: {
			en: "Same evening",
			sl: "Isti večer"
		}
	},
	{
		name: "Novo mesto",
		level: {
			en: "Next day",
			sl: "Naslednji dan"
		}
	},
	{
		name: "Nova Gorica",
		level: {
			en: "Next day, to the border",
			sl: "Naslednji dan, do meje"
		}
	},
	{
		name: "Murska Sobota",
		level: {
			en: "Next day",
			sl: "Naslednji dan"
		}
	},
	{
		name: "Ptuj",
		level: {
			en: "Next day",
			sl: "Naslednji dan"
		}
	},
	{
		name: "Velenje",
		level: {
			en: "Next day",
			sl: "Naslednji dan"
		}
	},
	{
		name: "Kranjska Gora",
		level: {
			en: "Next day, alpine",
			sl: "Naslednji dan, alpsko"
		}
	}
];
var services = [
	{
		id: "courier",
		image: "/images/parcels.jpg",
		imageAlt: {
			en: "Parcels moving through a sorting hub",
			sl: "Paketi na sortirnem traku"
		},
		title: {
			en: "Courier",
			sl: "Kurir"
		},
		menu: {
			en: "Courier services",
			sl: "Kurirske storitve"
		},
		lede: {
			en: "Documents and parcels, door to door, with a same-day option on the Slovenian board.",
			sl: "Dokumenti in paketi od vrat do vrat, z možnostjo istega dne na slovenski plošči."
		},
		points: [
			{
				en: "Same-day Ljubljana, Kranj and Postojna",
				sl: "Isti dan Ljubljana, Kranj in Postojna"
			},
			{
				en: "Next morning to Maribor, Celje and the coast",
				sl: "Naslednje jutro v Maribor, Celje in na obalo"
			},
			{
				en: "Signed proof when it lands",
				sl: "Podpis ob predaji"
			}
		],
		si: {
			en: "The Slovenia desk runs its own vans. Neighbour lanes go overnight.",
			sl: "Slovenska miza vozi svoje kombije. Sosednje linije gredo čez noč."
		}
	},
	{
		id: "freight",
		image: "/images/hero.jpg",
		imageAlt: {
			en: "A freight truck on a wet European motorway",
			sl: "Tovornjak na mokri evropski avtocesti"
		},
		title: {
			en: "Road freight",
			sl: "Cestni tovor"
		},
		menu: {
			en: "Freight services",
			sl: "Tovorne storitve"
		},
		lede: {
			en: "Pallets and part-loads over the Alps, through the Balkans and up the German corridor.",
			sl: "Palete in delni tovori čez Alpe, skozi Balkan in po nemškem koridorju."
		},
		points: [
			{
				en: "Groupage from a single pallet",
				sl: "Skupinski tovor že od ene palete"
			},
			{
				en: "A dedicated van when the window is tight",
				sl: "Namenski kombi, ko je okno tesno"
			},
			{
				en: "Border paperwork prepared before the truck rolls",
				sl: "Mejni papirji pripravljeni, preden tovornjak steče"
			}
		],
		si: {
			en: "Ljubljana is the cross-dock. Cargo off Koper can roll the same day it lands.",
			sl: "Ljubljana je pretovorno vozlišče. Tovor iz Kopra lahko steče isti dan, ko prispe."
		}
	},
	{
		id: "air",
		image: "/images/air.jpg",
		imageAlt: {
			en: "Air-cargo containers inside a freighter",
			sl: "Letalski zabojniki v tovornem letalu"
		},
		title: {
			en: "Air cargo",
			sl: "Letalski tovor"
		},
		menu: {
			en: "Air cargo solutions",
			sl: "Rešitve letalskega tovora"
		},
		lede: {
			en: "Through Ljubljana Jože Pučnik, or trucked to a bigger European hub when that flight is the better one.",
			sl: "Prek Letališča Jožeta Pučnika Ljubljana ali z dovozom na večje evropsko vozlišče, ko je tisti let boljši."
		},
		points: [
			{
				en: "Europe often on the next flight",
				sl: "Evropa pogosto z naslednjim letom"
			},
			{
				en: "Secure handling for high-value lots",
				sl: "Varni prevzem za dragocene pošiljke"
			},
			{
				en: "Intercontinental in days, not weeks",
				sl: "Medcelinsko v dneh, ne v tednih"
			}
		],
		si: {
			en: "LJU is home. Heavy lots can still make a same-night departure via Vienna or Munich.",
			sl: "LJU je doma. Težji tovori lahko še isto noč odletijo prek Dunaja ali Münchna."
		}
	},
	{
		id: "sea",
		image: "/images/sea.jpg",
		imageAlt: {
			en: "Container cranes along an Adriatic quay",
			sl: "Kontejnerska dvigala ob jadranskem pomolu"
		},
		title: {
			en: "Sea freight",
			sl: "Pomorski tovor"
		},
		menu: {
			en: "Sea freight solutions",
			sl: "Rešitve pomorskega tovora"
		},
		lede: {
			en: "Full containers and groupage over the Port of Koper, the Adriatic gate for Central Europe.",
			sl: "Polni zabojniki in skupinski tovor prek Luke Koper, jadranskih vrat Srednje Evrope."
		},
		points: [
			{
				en: "FCL and LCL on the same desk",
				sl: "FCL in LCL na isti mizi"
			},
			{
				en: "Export cut-off 16:00 on the quay",
				sl: "Izvozna meja 16.00 na pomolu"
			},
			{
				en: "Inland haul to Ljubljana, Graz, Zagreb, Munich",
				sl: "Kopenski dovoz v Ljubljano, Gradec, Zagreb, München"
			}
		],
		si: {
			en: "Koper is not a detour. For this desk it is the front door.",
			sl: "Koper ni ovinek. Za to mizo so vhodna vrata."
		}
	},
	{
		id: "supply",
		image: "/images/warehouse.jpg",
		imageAlt: {
			en: "A warehouse aisle with pallet racking",
			sl: "Skladiščni hodnik s paletnimi regali"
		},
		title: {
			en: "Supply chain",
			sl: "Dobavna veriga"
		},
		menu: {
			en: "Supply chain solutions",
			sl: "Rešitve dobavne verige"
		},
		lede: {
			en: "A standing program: storage in Slovenia, replenishment, and one desk for every mode.",
			sl: "Stalni program: skladiščenje v Sloveniji, polnjenje zalog in ena miza za vse načine."
		},
		points: [
			{
				en: "Storage near the airport corridor",
				sl: "Skladišče ob letališkem koridorju"
			},
			{
				en: "Reorder rules you can actually read",
				sl: "Pravila naročanja, ki jih lahko berete"
			},
			{
				en: "One invoice across van, flight and box",
				sl: "En račun za kombi, let in zaboj"
			}
		],
		si: {
			en: "Inventory sits where a van, a flight or a Koper box can leave the same building.",
			sl: "Zaloga stoji tam, od koder lahko iz iste stavbe odpelje kombi, let ali koprski zaboj."
		}
	}
];
function serviceById(id) {
	return services.find((service) => service.id === id) ?? services[1];
}
var heroLanes = [
	{
		from: "Ljubljana",
		to: "Munich",
		id: "GEL-48291",
		state: {
			en: "On the road",
			sl: "Na cesti"
		}
	},
	{
		from: "Koper",
		to: "Rotterdam",
		id: "GEL-11028",
		state: {
			en: "Vessel sailed",
			sl: "Ladja odplula"
		}
	},
	{
		from: "Maribor",
		to: "Milan",
		id: "GEL-77301",
		state: {
			en: "Delivered",
			sl: "Dostavljeno"
		}
	},
	{
		from: "Ljubljana",
		to: "New York",
		id: "GEL-90011",
		state: {
			en: "At customs",
			sl: "Na carini"
		}
	},
	{
		from: "Celje",
		to: "Ljubljana",
		id: "GEL-22014",
		state: {
			en: "With the driver",
			sl: "Pri vozniku"
		}
	}
];
var marqueeLanes = [
	"Ljubljana → Munich",
	"Koper → Rotterdam",
	"Maribor → Milan",
	"Ljubljana → Vienna",
	"Koper → Shanghai",
	"Ljubljana → New York",
	"Celje → Zagreb",
	"Ljubljana → Dubai",
	"Koper → Mumbai",
	"Nova Gorica → Lyon",
	"Maribor → Belgrade",
	"Ljubljana → Warsaw"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var btn = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50";
var btnAccent = cn(btn, "bg-accent text-ink hover:bg-accent-deep");
var btnPrimary = cn(btn, "bg-primary text-paper hover:bg-primary-deep");
var btnLine = cn(btn, "border border-line bg-paper text-ink hover:bg-bg");
var btnGhost = cn(btn, "border border-mist/40 text-paper hover:bg-paper/10");
var fieldClass = "min-h-11 w-full rounded-xl border border-line bg-paper px-3 text-base font-normal text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";
var quoteSearch = {
	from: "SI",
	to: "DE",
	kg: 12,
	mode: "freight"
};
var nav = [
	{
		to: "/services",
		label: {
			en: "Services",
			sl: "Storitve"
		},
		search: { service: "freight" }
	},
	{
		to: "/network",
		label: {
			en: "Network",
			sl: "Mreža"
		}
	},
	{
		to: "/quote",
		label: {
			en: "Quote",
			sl: "Ponudba"
		},
		search: quoteSearch
	},
	{
		to: "/track",
		label: {
			en: "Track",
			sl: "Sledenje"
		},
		search: { id: "" }
	},
	{
		to: "/contact",
		label: {
			en: "Contact",
			sl: "Kontakt"
		},
		search: {
			service: "",
			note: ""
		}
	}
];
function LocaleSwitch() {
	const { locale, setLocale } = useLocale();
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-full border border-mist/30 p-1",
		role: "group",
		"aria-label": t({
			en: "Language",
			sl: "Jezik"
		}),
		children: ["en", "sl"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": locale === code,
			onClick: () => setLocale(code),
			className: cn("min-h-9 min-w-11 rounded-full px-2 text-xs font-semibold uppercase tracking-wide", locale === code ? "bg-accent text-ink" : "text-mist hover:text-paper"),
			children: code
		}, code))
	});
}
function Header() {
	const t = useT();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.jpg",
							alt: "Global Express Logistics",
							className: "h-14 w-14 rounded-lg object-cover sm:h-16 sm:w-16"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden leading-none sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl uppercase tracking-wide",
								children: "Global Express"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-sm uppercase tracking-widest text-accent",
								children: "Logistics"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-4 hidden items-center gap-1 lg:flex",
						"aria-label": t({
							en: "Primary",
							sl: "Glavni meni"
						}),
						children: nav.map((item) => {
							const on = path === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								search: item.search,
								className: cn("rounded-full px-3 py-2 text-sm font-medium", on ? "bg-paper/10 text-paper" : "text-mist hover:text-paper"),
								children: t(item.label)
							}, String(item.to));
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitch, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								search: quoteSearch,
								className: cn(btnAccent, "hidden sm:inline-flex"),
								children: t({
									en: "Get a quote",
									sl: "Pridobi ponudbo"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-mist/30 lg:hidden",
								"aria-expanded": open,
								"aria-label": open ? t({
									en: "Close menu",
									sl: "Zapri meni"
								}) : t({
									en: "Open menu",
									sl: "Odpri meni"
								}),
								onClick: () => setOpen((value) => !value),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-mist/20 px-4 py-3 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl flex-col gap-1",
					"aria-label": t({
						en: "Mobile",
						sl: "Mobilni meni"
					}),
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						search: item.search,
						onClick: () => setOpen(false),
						className: "flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-paper hover:bg-paper/10",
						children: t(item.label)
					}, String(item.to))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						search: quoteSearch,
						onClick: () => setOpen(false),
						className: cn(btnAccent, "mt-2"),
						children: t({
							en: "Get a quote",
							sl: "Pridobi ponudbo"
						})
					})]
				})
			}) : null
		]
	});
}
function Footer() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo.jpg",
					alt: "",
					className: "h-16 w-16 rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm text-mist",
					children: t({
						en: "Fast, reliable, worldwide — with the European hub in Ljubljana and the sea gate at Koper.",
						sl: "Hitro, zanesljivo, po vsem svetu — z evropskim vozliščem v Ljubljani in morskimi vrati v Kopru."
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-accent",
					children: t({
						en: "The board",
						sl: "Plošča"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						search: item.search,
						className: "text-mist hover:text-paper",
						children: t(item.label)
					}) }, String(item.to)))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-accent",
					children: t({
						en: "Gates",
						sl: "Vrata"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-mist",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t({
							en: "European hub, Ljubljana",
							sl: "Evropsko vozlišče, Ljubljana"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t({
							en: "Sea gate, Port of Koper",
							sl: "Morska vrata, Luka Koper"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t({
							en: "Air gate, Ljubljana Airport (LJU)",
							sl: "Letalska vrata, Letališče Ljubljana (LJU)"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t({
							en: "Desk 07:00–19:00 CET, Mon–Sat",
							sl: "Miza 07.00–19.00, pon–sob"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							countries.length,
							" ",
							t({
								en: "countries on the board",
								sl: "držav na plošči"
							})
						] })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-mist/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-mist",
				children: t({
					en: "Global Express Logistics · Fast · Reliable · Worldwide. Quote and tracking samples on this site stay in your browser.",
					sl: "Global Express Logistics · Hitro · Zanesljivo · Po vsem svetu. Vzorci ponudb in sledenja ostanejo v vašem brskalniku."
				})
			})
		})]
	});
}
function SiteFrame({ children }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink",
				children: t({
					en: "Skip to content",
					sl: "Preskoči na vsebino"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-accent",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-3xl font-display text-5xl uppercase leading-none md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-mist",
					children: lede
				})
			]
		})
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2 text-sm font-medium text-ink",
		children: [
			label,
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-normal text-muted",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { services as _, btnAccent as a, btnPrimary as c, countryByCode as d, countryName as f, serviceById as g, marqueeLanes as h, bandLabel as i, cn as l, heroLanes as m, PageIntro as n, btnGhost as o, fieldClass as p, SiteFrame as r, btnLine as s, Field as t, countries as u, siCities as v };
