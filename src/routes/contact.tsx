import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Field, PageIntro, SiteFrame, btnAccent, fieldClass } from "@/components/site";
import { countries, countryName, services } from "@/lib/catalog";
import { loadBookings, nextRef, removeBooking, saveBooking, type Booking } from "@/lib/desk";
import { useLocale, useT } from "@/lib/locale";

type ContactSearch = { service: string; note: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : "",
    note: typeof search.note === "string" ? search.note : "",
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function ContactPage() {
  const search = Route.useSearch();
  const t = useT();
  const { locale } = useLocale();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("SI");
  const [service, setService] = useState(search.service || "freight");
  const [message, setMessage] = useState(search.note);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Booking | null>(null);
  const [rows, setRows] = useState<Booking[]>([]);

  useEffect(() => {
    if (search.service) setService(search.service);
    if (search.note) setMessage(search.note);
  }, [search.service, search.note]);

  useEffect(() => {
    setRows(loadBookings());
  }, []);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = t({ en: "Add your name.", sl: "Dodajte ime." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = t({ en: "That email does not look complete.", sl: "E-pošta ni videti popolna." });
    }
    if (message.trim().length < 8) next.message = t({ en: "Tell the desk what is moving.", sl: "Povejte mizi, kaj se premika." });
    setErrors(next);
    if (Object.keys(next).length) return;
    const booking: Booking = {
      ref: nextRef(),
      at: new Date().toLocaleString(locale === "sl" ? "sl-SI" : "en-GB", { dateStyle: "medium", timeStyle: "short" }),
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      country,
      service,
      message: message.trim(),
    };
    saveBooking(booking);
    setRows(loadBookings());
    setDone(booking);
  };

  return (
    <SiteFrame>
      <PageIntro
        kicker={t({ en: "Contact", sl: "Kontakt" })}
        title={t({ en: "The desk is open.", sl: "Miza je odprta." })}
        lede={t({
          en: "Ljubljana hub, Port of Koper, LJU cargo. Leave a request — this preview keeps it on your device and hands you a reference. It does not send email.",
          sl: "Ljubljansko vozlišče, Luka Koper, tovor LJU. Pustite zahtevo — ta predogled jo shrani na vašo napravo in vam da referenco. E-pošte ne pošlje.",
        })}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        {done ? (
          <div className="rounded-2xl bg-ink p-6 text-paper md:p-8" role="status">
            <p className="font-display text-sm uppercase tracking-widest text-accent">
              {t({ en: "Reference", sl: "Referenca" })}
            </p>
            <p className="mt-2 font-display text-5xl">{done.ref}</p>
            <p className="mt-4 max-w-md text-mist">
              {t({
                en: "Saved on this device only. Bring the reference if you continue the conversation with a real desk later.",
                sl: "Shranjeno samo na tej napravi. Referenco vzemite s seboj, če pogovor kasneje nadaljujete s pravo mizo.",
              })}
            </p>
            <button
              type="button"
              className={cnAccent()}
              onClick={() => {
                setDone(null);
                setMessage("");
              }}
            >
              {t({ en: "New request", sl: "Nova zahteva" })}
            </button>
          </div>
        ) : (
          <form className="grid gap-4 rounded-2xl border border-line bg-paper p-5 md:grid-cols-2" onSubmit={submit} noValidate>
            <Field label={t({ en: "Name", sl: "Ime" })} hint={errors.name}>
              <input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
            </Field>
            <Field label={t({ en: "Company", sl: "Podjetje" })}>
              <input className={fieldClass} value={company} onChange={(event) => setCompany(event.target.value)} autoComplete="organization" />
            </Field>
            <Field label={t({ en: "Email", sl: "E-pošta" })} hint={errors.email}>
              <input className={fieldClass} value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" inputMode="email" />
            </Field>
            <Field label={t({ en: "Phone", sl: "Telefon" })}>
              <input className={fieldClass} value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" inputMode="tel" />
            </Field>
            <Field label={t({ en: "Country", sl: "Država" })}>
              <select className={fieldClass} value={country} onChange={(event) => setCountry(event.target.value)}>
                {countries.map((item) => (
                  <option key={item.code} value={item.code}>
                    {countryName(item, locale)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t({ en: "Service", sl: "Storitev" })}>
              <select className={fieldClass} value={service} onChange={(event) => setService(event.target.value)}>
                {services.map((item) => (
                  <option key={item.id} value={item.id}>
                    {t(item.menu)}
                  </option>
                ))}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label={t({ en: "What is moving", sl: "Kaj se premika" })} hint={errors.message}>
                <textarea
                  className={cnText()}
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Field>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className={btnAccent}>
                {t({ en: "Save the request", sl: "Shrani zahtevo" })}
              </button>
            </div>
          </form>
        )}

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-line bg-paper p-5">
            <h2 className="font-display text-2xl uppercase">{t({ en: "Where to aim it", sl: "Kam jo usmeriti" })}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block font-semibold">{t({ en: "Ljubljana hub", sl: "Ljubljansko vozlišče" })}</span>
                <span className="text-muted">{t({ en: "Road, courier, cross-dock", sl: "Cesta, kurir, pretovor" })}</span>
              </li>
              <li>
                <span className="block font-semibold">{t({ en: "Port of Koper", sl: "Luka Koper" })}</span>
                <span className="text-muted">{t({ en: "Sea freight, cut-off 16:00", sl: "Pomorski tovor, meja 16.00" })}</span>
              </li>
              <li>
                <span className="block font-semibold">LJU</span>
                <span className="text-muted">{t({ en: "Air cargo, Jože Pučnik", sl: "Letalski tovor, Jože Pučnik" })}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted">{t({ en: "Desk 07:00–19:00 CET, Monday to Saturday.", sl: "Miza 07.00–19.00, ponedeljek do sobote." })}</p>
          </div>
          {rows.length > 0 ? (
            <div className="rounded-2xl border border-line bg-paper p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {t({ en: "On this device", sl: "Na tej napravi" })}
              </h2>
              <ul className="mt-3 space-y-3">
                {rows.map((row) => (
                  <li key={row.ref} className="border-b border-line pb-3 text-sm last:border-0">
                    <p className="font-semibold">{row.ref}</p>
                    <p className="text-muted">
                      {row.name}
                      {row.company ? ` · ${row.company}` : ""} · {row.at}
                    </p>
                    <button
                      type="button"
                      className="mt-1 text-sm font-semibold text-primary"
                      onClick={() => {
                        removeBooking(row.ref);
                        setRows(loadBookings());
                      }}
                    >
                      {t({ en: "Remove", sl: "Odstrani" })}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </section>
    </SiteFrame>
  );
}

function cnAccent() {
  return `${btnAccent} mt-6`;
}

function cnText() {
  return `${fieldClass} min-h-32 py-3`;
}
