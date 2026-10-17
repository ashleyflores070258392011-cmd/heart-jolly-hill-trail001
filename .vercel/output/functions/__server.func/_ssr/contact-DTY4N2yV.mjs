import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$4, o as useLocale, s as useT } from "./router-BnUweQrn.mjs";
import { _ as services, a as btnAccent, f as countryName, n as PageIntro, p as fieldClass, r as SiteFrame, t as Field, u as countries } from "./site-DxxMlZSn.mjs";
import { a as saveBooking, i as removeBooking, r as nextRef, t as loadBookings } from "./desk-CAuImmaS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DTY4N2yV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const search = Route$4.useSearch();
	const t = useT();
	const { locale } = useLocale();
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("SI");
	const [service, setService] = (0, import_react.useState)(search.service || "freight");
	const [message, setMessage] = (0, import_react.useState)(search.note);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(null);
	const [rows, setRows] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (search.service) setService(search.service);
		if (search.note) setMessage(search.note);
	}, [search.service, search.note]);
	(0, import_react.useEffect)(() => {
		setRows(loadBookings());
	}, []);
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = t({
			en: "Add your name.",
			sl: "Dodajte ime."
		});
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = t({
			en: "That email does not look complete.",
			sl: "E-pošta ni videti popolna."
		});
		if (message.trim().length < 8) next.message = t({
			en: "Tell the desk what is moving.",
			sl: "Povejte mizi, kaj se premika."
		});
		setErrors(next);
		if (Object.keys(next).length) return;
		const booking = {
			ref: nextRef(),
			at: (/* @__PURE__ */ new Date()).toLocaleString(locale === "sl" ? "sl-SI" : "en-GB", {
				dateStyle: "medium",
				timeStyle: "short"
			}),
			name: name.trim(),
			company: company.trim(),
			email: email.trim(),
			phone: phone.trim(),
			country,
			service,
			message: message.trim()
		};
		saveBooking(booking);
		setRows(loadBookings());
		setDone(booking);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t({
			en: "Contact",
			sl: "Kontakt"
		}),
		title: t({
			en: "The desk is open.",
			sl: "Miza je odprta."
		}),
		lede: t({
			en: "Ljubljana hub, Port of Koper, LJU cargo. Leave a request — this preview keeps it on your device and hands you a reference. It does not send email.",
			sl: "Ljubljansko vozlišče, Luka Koper, tovor LJU. Pustite zahtevo — ta predogled jo shrani na vašo napravo in vam da referenco. E-pošte ne pošlje."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr]",
		children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-ink p-6 text-paper md:p-8",
			role: "status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-widest text-accent",
					children: t({
						en: "Reference",
						sl: "Referenca"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-5xl",
					children: done.ref
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-mist",
					children: t({
						en: "Saved on this device only. Bring the reference if you continue the conversation with a real desk later.",
						sl: "Shranjeno samo na tej napravi. Referenco vzemite s seboj, če pogovor kasneje nadaljujete s pravo mizo."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cnAccent(),
					onClick: () => {
						setDone(null);
						setMessage("");
					},
					children: t({
						en: "New request",
						sl: "Nova zahteva"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-4 rounded-2xl border border-line bg-paper p-5 md:grid-cols-2",
			onSubmit: submit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Name",
						sl: "Ime"
					}),
					hint: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value),
						autoComplete: "name"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Company",
						sl: "Podjetje"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: company,
						onChange: (event) => setCompany(event.target.value),
						autoComplete: "organization"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Email",
						sl: "E-pošta"
					}),
					hint: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: email,
						onChange: (event) => setEmail(event.target.value),
						autoComplete: "email",
						inputMode: "email"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Phone",
						sl: "Telefon"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: phone,
						onChange: (event) => setPhone(event.target.value),
						autoComplete: "tel",
						inputMode: "tel"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Country",
						sl: "Država"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: country,
						onChange: (event) => setCountry(event.target.value),
						children: countries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.code,
							children: countryName(item, locale)
						}, item.code))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t({
						en: "Service",
						sl: "Storitev"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: service,
						onChange: (event) => setService(event.target.value),
						children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.id,
							children: t(item.menu)
						}, item.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t({
							en: "What is moving",
							sl: "Kaj se premika"
						}),
						hint: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: cnText(),
							rows: 5,
							value: message,
							onChange: (event) => setMessage(event.target.value)
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: btnAccent,
						children: t({
							en: "Save the request",
							sl: "Shrani zahtevo"
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-paper p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl uppercase",
						children: t({
							en: "Where to aim it",
							sl: "Kam jo usmeriti"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: t({
									en: "Ljubljana hub",
									sl: "Ljubljansko vozlišče"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: t({
									en: "Road, courier, cross-dock",
									sl: "Cesta, kurir, pretovor"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: t({
									en: "Port of Koper",
									sl: "Luka Koper"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: t({
									en: "Sea freight, cut-off 16:00",
									sl: "Pomorski tovor, meja 16.00"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: "LJU"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: t({
									en: "Air cargo, Jože Pučnik",
									sl: "Letalski tovor, Jože Pučnik"
								})
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: t({
							en: "Desk 07:00–19:00 CET, Monday to Saturday.",
							sl: "Miza 07.00–19.00, ponedeljek do sobote."
						})
					})
				]
			}), rows.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold uppercase tracking-wide text-muted",
					children: t({
						en: "On this device",
						sl: "Na tej napravi"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-b border-line pb-3 text-sm last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: row.ref
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									row.name,
									row.company ? ` · ${row.company}` : "",
									" · ",
									row.at
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-1 text-sm font-semibold text-primary",
								onClick: () => {
									removeBooking(row.ref);
									setRows(loadBookings());
								},
								children: t({
									en: "Remove",
									sl: "Odstrani"
								})
							})
						]
					}, row.ref))
				})]
			}) : null]
		})]
	})] });
}
function cnAccent() {
	return `${btnAccent} mt-6`;
}
function cnText() {
	return `${fieldClass} min-h-32 py-3`;
}
//#endregion
export { ContactPage as component };
