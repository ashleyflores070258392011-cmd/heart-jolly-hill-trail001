import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$2, o as useLocale, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, d as countryByCode, f as countryName, l as cn, n as PageIntro, p as fieldClass, r as SiteFrame, s as btnLine, u as countries } from "./site-DxxMlZSn.mjs";
import { n as loadQuotes, o as saveQuote } from "./desk-CAuImmaS.mjs";
import { i as quoteAll, n as formatDays, r as formatEur } from "./pricing-jXzpwRFf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-DZPiKN6H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var knownMode = (value) => services.some((service) => service.id === value) ? value : "freight";
var knownCode = (value, fallback) => countries.some((country) => country.code === value) ? value : fallback;
function QuotePage() {
	const search = Route$2.useSearch();
	const t = useT();
	const { locale } = useLocale();
	const navigate = useNavigate();
	const [from, setFrom] = (0, import_react.useState)(knownCode(search.from, "SI"));
	const [to, setTo] = (0, import_react.useState)(knownCode(search.to, "DE"));
	const [kg, setKg] = (0, import_react.useState)(String(search.kg));
	const [pieces, setPieces] = (0, import_react.useState)("1");
	const [mode, setMode] = (0, import_react.useState)(knownMode(search.mode));
	const [priority, setPriority] = (0, import_react.useState)(false);
	const [insure, setInsure] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)("1000");
	const [useDims, setUseDims] = (0, import_react.useState)(false);
	const [length, setLength] = (0, import_react.useState)("");
	const [width, setWidth] = (0, import_react.useState)("");
	const [height, setHeight] = (0, import_react.useState)("");
	const [kept, setKept] = (0, import_react.useState)([]);
	const [savedNote, setSavedNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setFrom(knownCode(search.from, "SI"));
		setTo(knownCode(search.to, "DE"));
		setKg(String(search.kg));
		setMode(knownMode(search.mode));
	}, [
		search.from,
		search.to,
		search.kg,
		search.mode
	]);
	(0, import_react.useEffect)(() => {
		setKept(loadQuotes());
	}, []);
	const kgNum = Number(kg);
	const pieceNum = Math.min(40, Math.max(1, Math.round(Number(pieces) || 1)));
	const dims = useDims && Number(length) > 0 && Number(width) > 0 && Number(height) > 0 ? {
		l: Number(length),
		w: Number(width),
		h: Number(height)
	} : null;
	const valid = Number.isFinite(kgNum) && kgNum > 0 && kgNum <= 2e4;
	const lines = (0, import_react.useMemo)(() => {
		if (!valid) return [];
		return quoteAll({
			from: countryByCode(from).band,
			to: countryByCode(to).band,
			kg: kgNum,
			pieces: pieceNum,
			dims,
			insuredValue: insure ? Math.max(0, Number(value) || 0) : 0,
			priority
		});
	}, [
		valid,
		from,
		to,
		kgNum,
		pieceNum,
		dims,
		insure,
		value,
		priority
	]);
	const selected = lines.find((line) => line.mode === mode) ?? lines[0];
	const origin = countryByCode(from);
	const dest = countryByCode(to);
	const keep = () => {
		if (!selected?.available) return;
		const summary = `${t(services.find((service) => service.id === selected.mode)?.title ?? services[0].title)} · ${origin.city} → ${dest.city} · ${kgNum} kg`;
		const row = {
			id: `${Date.now()}`,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			summary,
			total: formatEur(selected.total, locale)
		};
		saveQuote(row);
		setKept(loadQuotes());
		setSavedNote(t({
			en: "Kept on this device.",
			sl: "Shranjeno na tej napravi."
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t({
			en: "Quote",
			sl: "Ponudba"
		}),
		title: t({
			en: "A number you can plan with.",
			sl: "Številka, s katero lahko načrtujete."
		}),
		lede: t({
			en: "Desk estimate in euros, fuel inside the linehaul. It is a planning figure — the confirmed rate follows the collection address.",
			sl: "Ocena mize v evrih, gorivo je v voznini. To je številka za načrt — potrjena cena sledi naslovu prevzema."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,340px)_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-col gap-4 rounded-2xl border border-line bg-paper p-5",
			onSubmit: (event) => event.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySelect, {
					label: t({
						en: "From",
						sl: "Od"
					}),
					value: from,
					onChange: setFrom,
					locale
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySelect, {
					label: t({
						en: "To",
						sl: "Do"
					}),
					value: to,
					onChange: setTo,
					locale
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [t({
						en: "Weight, kg",
						sl: "Teža, kg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: cn(fieldClass, "mt-2"),
						inputMode: "decimal",
						value: kg,
						onChange: (event) => setKg(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [t({
						en: "Pieces",
						sl: "Kosi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: cn(fieldClass, "mt-2"),
						inputMode: "numeric",
						value: pieces,
						onChange: (event) => setPieces(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: priority,
						onChange: (event) => setPriority(event.target.checked)
					}), t({
						en: "Priority team",
						sl: "Prednostna ekipa"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: insure,
						onChange: (event) => setInsure(event.target.checked)
					}), t({
						en: "Insurance",
						sl: "Zavarovanje"
					})]
				}),
				insure ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [t({
						en: "Declared value, EUR",
						sl: "Deklarirana vrednost, EUR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: cn(fieldClass, "mt-2"),
						inputMode: "decimal",
						value,
						onChange: (event) => setValue(event.target.value)
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: useDims,
						onChange: (event) => setUseDims(event.target.checked)
					}), t({
						en: "I have dimensions",
						sl: "Imam mere"
					})]
				}),
				useDims ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
							label: t({
								en: "L cm",
								sl: "D cm"
							}),
							value: length,
							onChange: setLength
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
							label: t({
								en: "W cm",
								sl: "Š cm"
							}),
							value: width,
							onChange: setWidth
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
							label: t({
								en: "H cm",
								sl: "V cm"
							}),
							value: height,
							onChange: setHeight
						})
					]
				}) : null,
				!valid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-primary",
					children: t({
						en: "Enter a weight up to 20,000 kg.",
						sl: "Vnesite težo do 20.000 kg."
					})
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				role: "list",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeCard, {
					line,
					selected: line.mode === mode,
					onPick: () => setMode(line.mode)
				}, line.mode))
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-2xl border border-line bg-paper p-5",
				"aria-live": "polite",
				children: selected.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							countryName(origin, locale),
							" → ",
							countryName(dest, locale),
							selected.volumetric ? ` · ${t({
								en: "charged on volume",
								sl: "obračun po prostornini"
							})} (${selected.chargeableKg} kg)` : ` · ${selected.chargeableKg} kg`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-5xl tabular-nums",
						children: formatEur(selected.total, locale)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: formatDays(selected.days, locale)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								label: t({
									en: "Linehaul",
									sl: "Voznina"
								}),
								value: formatEur(selected.linehaul, locale)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								label: t({
									en: "Handling",
									sl: "Manipulacija"
								}),
								value: formatEur(selected.handling, locale)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								label: t({
									en: "Insurance",
									sl: "Zavarovanje"
								}),
								value: formatEur(selected.insurance, locale)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								label: t({
									en: "Priority",
									sl: "Prednost"
								}),
								value: formatEur(selected.priorityFee, locale)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnAccent,
							onClick: () => {
								const service = services.find((item) => item.id === selected.mode);
								const note = `${service ? t(service.title) : selected.mode} · ${origin.code} → ${dest.code} · ${kgNum} kg · ${formatEur(selected.total, locale)} · ${formatDays(selected.days, locale)}`;
								navigate({
									to: "/contact",
									search: {
										service: selected.mode,
										note
									}
								});
							},
							children: t({
								en: "Send to the desk",
								sl: "Pošlji na mizo"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnLine,
							onClick: keep,
							children: t({
								en: "Keep this estimate",
								sl: "Hrani to oceno"
							})
						})]
					}),
					savedNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary",
						children: savedNote
					}) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: t({
						en: "This mode is too much machine for the distance. Pick road or courier, or lengthen the lane.",
						sl: "Ta način je za to razdaljo pretežak stroj. Izberite cesto ali kurirja ali podaljšajte linijo."
					})
				})
			}) : null,
			kept.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold uppercase tracking-wide text-muted",
					children: t({
						en: "Kept on this device",
						sl: "Shranjeno na tej napravi"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: kept.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.summary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums font-semibold",
							children: row.total
						})]
					}, row.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/track",
					search: { id: "" },
					className: "font-semibold text-primary",
					children: t({
						en: "Already moving? Track it.",
						sl: "Že na poti? Sledite."
					})
				})
			})
		] })]
	})] });
}
function CountrySelect({ label, value, onChange, locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: cn(fieldClass, "mt-2"),
			value,
			onChange: (event) => onChange(event.target.value),
			children: countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: country.code,
				children: countryName(country, locale)
			}, country.code))
		})]
	});
}
function Dim({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-xs font-medium text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: cn(fieldClass, "mt-1"),
			inputMode: "numeric",
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
function Money({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums font-semibold",
			children: value
		})]
	});
}
function ModeCard({ line, selected, onPick }) {
	const t = useT();
	const { locale } = useLocale();
	const service = services.find((item) => item.id === line.mode);
	if (!service) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onPick,
		"aria-pressed": selected,
		className: cn("rounded-2xl border px-4 py-4 text-left", selected ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-line bg-paper hover:border-primary"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold",
			children: t(service.menu)
		}), line.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 block font-display text-3xl tabular-nums",
			children: formatEur(line.total, locale)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: formatDays(line.days, locale)
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 block text-sm text-muted",
			children: t({
				en: "Not on this lane",
				sl: "Ni na tej liniji"
			})
		})]
	});
}
//#endregion
export { QuotePage as component };
