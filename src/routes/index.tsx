import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Plane, Ship, Truck } from "lucide-react";
import { SiteFrame, btnAccent, btnGhost, btnLine, btnPrimary, fieldClass } from "@/components/site";
import { ReliabilityChart } from "@/components/reliability-chart";
import {
  countries,
  countryByCode,
  countryName,
  heroLanes,
  marqueeLanes,
  services,
  siCities,
  type Mode,
} from "@/lib/catalog";
import { useLocale, useT } from "@/lib/locale";
import { formatDays, formatEur, quoteLine } from "@/lib/pricing";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({
  component: Home,
});

const steps = [
  {
    n: "01",
    title: { en: "Book the desk", sl: "Naročite mizo" },
    body: {
      en: "A lane, a weight and a window. The estimate is on screen before anyone calls you back.",
      sl: "Linija, teža in okno. Ocena je na zaslonu, preden vas kdo pokliče nazaj.",
    },
  },
  {
    n: "02",
    title: { en: "We collect", sl: "Prevzamemo" },
    body: {
      en: "Vans from the Slovenian cities on the board, or a trailer when the lot is heavy.",
      sl: "Kombiji iz slovenskih mest na plošči ali prikolica, ko je pošiljka težka.",
    },
  },
  {
    n: "03",
    title: { en: "The lane runs", sl: "Linija steče" },
    body: {
      en: "Road over the Karawanks, a flight from LJU, or a box off the Port of Koper.",
      sl: "Cesta čez Karavanke, let z LJU ali zaboj iz Luke Koper.",
    },
  },
  {
    n: "04",
    title: { en: "You see it land", sl: "Vidite, da prispe" },
    body: {
      en: "The tracking board updates at each handoff, including customs.",
      sl: "Sledilna plošča se posodobi ob vsaki predaji, tudi na carini.",
    },
  },
];

const notes = [
  {
    who: "Karst Timber",
    where: "Ajdovščina",
    quote: {
      en: "The Koper cut-off used to cost us a day. Groupage now leaves the quay and is in Munich before the weekend.",
      sl: "Meja v Kopru nas je prej stala dan. Skupinski tovor zdaj zapusti pomol in je v Münchnu pred vikendom.",
    },
  },
  {
    who: "North Adria Components",
    where: "Ljubljana",
    quote: {
      en: "We stopped keeping a second forwarder for air. LJU departures sit on the same desk as the van.",
      sl: "Za letalski tovor ne držimo več drugega špediterja. Odhodi z LJU so na isti mizi kot kombi.",
    },
  },
  {
    who: "Sava Clinics",
    where: "Maribor",
    quote: {
      en: "Cold-chain documents and a parcel of parts — both tracked, both in Milan the next morning.",
      sl: "Dokumenti hladne verige in paket delov — oboje s sledenjem, oboje naslednje jutro v Milanu.",
    },
  },
];

function Home() {
  const t = useT();
  const { locale } = useLocale();
  const navigate = useNavigate();
  const [lane, setLane] = useState(0);
  const [from, setFrom] = useState("SI");
  const [to, setTo] = useState("DE");
  const [kg, setKg] = useState("12");
  const [mode, setMode] = useState<Mode>("freight");
  const [chartOn, setChartOn] = useState(false);
  const [serviceId, setServiceId] = useState<Mode>("freight");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => setLane((value) => (value + 1) % heroLanes.length), 4000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setChartOn(true);
  }, []);

  const live = heroLanes[lane];
  const active = services.find((service) => service.id === serviceId) ?? services[1];
  const kgNum = Number(kg);
  const estimate = useMemo(() => {
    if (!Number.isFinite(kgNum) || kgNum <= 0) return null;
    return quoteLine({
      from: countryByCode(from).band,
      to: countryByCode(to).band,
      mode,
      kg: kgNum,
      pieces: 1,
      dims: null,
      insuredValue: 0,
      priority: false,
    });
  }, [from, to, mode, kgNum]);

  return (
    <SiteFrame>
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-accent">
              {t({ en: "Ljubljana hub · Port of Koper · Worldwide", sl: "Ljubljana · Luka Koper · Svet" })}
            </p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl">
              {t({ en: "Fast lanes from Ljubljana.", sl: "Hitre linije iz Ljubljane." })}
            </h1>
            <p className="mt-5 max-w-md text-lg text-mist">
              {t({
                en: "Courier, road freight, air cargo and sea freight for shippers in Slovenia — and for every lane that starts here.",
                sl: "Kurir, cestni tovor, letalski in pomorski prevoz za pošiljatelje v Sloveniji — in za vsako linijo, ki se začne tukaj.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" search={{ from: "SI", to: "DE", kg: 12, mode: "freight" }} className={btnAccent}>
                {t({ en: "Get a quote", sl: "Pridobi ponudbo" })}
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/track" search={{ id: "GEL-48291" }} className={btnGhost}>
                {t({ en: "Track a shipment", sl: "Sledi pošiljki" })}
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-mist/20 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">{t({ en: "Countries", sl: "Države" })}</dt>
                <dd className="mt-1 font-display text-3xl tabular-nums">{countries.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">{t({ en: "Ljubljana", sl: "Ljubljana" })}</dt>
                <dd className="mt-1 font-display text-3xl">{t({ en: "Same day", sl: "Isti dan" })}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">{t({ en: "Koper cut-off", sl: "Meja Koper" })}</dt>
                <dd className="mt-1 font-display text-3xl tabular-nums">16:00</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <img
              src="/images/hero.jpg"
              alt={t({ en: "Freight truck on a European motorway at dusk", sl: "Tovornjak na evropski avtocesti v mraku" })}
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <Link
              to="/track"
              search={{ id: live.id }}
              className="absolute inset-x-4 bottom-4 rounded-xl bg-ink/90 p-4 text-paper backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-widest text-accent">{live.id}</p>
              <p className="mt-1 font-display text-2xl uppercase">
                {live.from} → {live.to}
              </p>
              <p className="text-sm text-mist">{t(live.state)}</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-line bg-paper">
        <div className="marquee-track flex w-max gap-8 py-3">
          {[...marqueeLanes, ...marqueeLanes].map((laneName, index) => (
            <span key={`${laneName}-${index}`} className="font-display text-sm uppercase tracking-widest text-primary">
              {laneName}
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="font-display text-sm uppercase tracking-widest text-primary">
              {t({ en: "The Slovenia desk", sl: "Slovenska miza" })}
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none md:text-5xl">
              {t({ en: "Home board, not a side note.", sl: "Domača plošča, ne opomba." })}
            </h2>
          </div>
          <Link to="/network" className={btnLine}>
            {t({ en: "All countries", sl: "Vse države" })}
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siCities.map((city) => (
            <li key={city.name} className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 py-3">
              <span className="font-semibold">{city.name}</span>
              <span className="text-right text-sm text-muted">{t(city.level)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[280px_1fr] lg:items-start">
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-primary">
              {t({ en: "Five ways it moves", sl: "Pet načinov" })}
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none">
              {t({ en: "Pick a mode.", sl: "Izberite način." })}
            </h2>
            <div className="mt-6 flex flex-col gap-2" role="tablist" aria-label={t({ en: "Services", sl: "Storitve" })}>
              {services.map((service) => {
                const on = service.id === active.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setServiceId(service.id)}
                    className={cn(
                      "min-h-11 rounded-full px-4 text-left text-sm font-semibold",
                      on ? "bg-ink text-paper" : "bg-bg text-ink hover:bg-line",
                    )}
                  >
                    {t(service.menu)}
                  </button>
                );
              })}
            </div>
          </div>
          <article className="overflow-hidden rounded-2xl border border-line bg-bg">
            <img src={active.image} alt={t(active.imageAlt)} className="aspect-[3/2] w-full object-cover" />
            <div className="p-6 md:p-8">
              <h3 className="font-display text-4xl uppercase">{t(active.title)}</h3>
              <p className="mt-3 max-w-xl text-muted">{t(active.lede)}</p>
              <p className="mt-4 text-sm font-medium text-primary">{t(active.si)}</p>
              <Link
                to="/services"
                search={{ service: active.id }}
                className={cn(btnPrimary, "mt-6")}
              >
                {t({ en: "Service detail", sl: "Podrobnosti storitve" })}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
          {t({ en: "How a shipment moves", sl: "Kako teče pošiljka" })}
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-line bg-paper p-5">
              <p className="font-display text-3xl text-accent">{step.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{t(step.title)}</h3>
              <p className="mt-2 text-sm text-muted">{t(step.body)}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
          <li className="inline-flex items-center gap-2">
            <Truck className="size-4 text-primary" /> {t({ en: "Road via Ljubljana", sl: "Cesta prek Ljubljane" })}
          </li>
          <li className="inline-flex items-center gap-2">
            <Plane className="size-4 text-primary" /> LJU
          </li>
          <li className="inline-flex items-center gap-2">
            <Ship className="size-4 text-primary" /> {t({ en: "Port of Koper", sl: "Luka Koper" })}
          </li>
        </ul>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm uppercase tracking-widest text-primary">
              {t({ en: "Network record", sl: "Zapis mreže" })}
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none">
              {t({ en: "Inside the promised window.", sl: "Znotraj obljubljenega okna." })}
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              {t({
                en: "Share of planned deliveries that landed on time. An illustrative desk record, not an audit.",
                sl: "Delež načrtovanih dostav, ki so prispele pravočasno. Ponazoritev mize, ne revizija.",
              })}
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-bg p-4">
              {chartOn ? <ReliabilityChart locale={locale} /> : <div className="h-56" />}
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            {notes.map((note) => (
              <li key={note.who} className="rounded-2xl border border-line bg-bg p-5">
                <p className="text-base">{t(note.quote)}</p>
                <p className="mt-3 text-sm font-semibold">
                  {note.who}
                  <span className="font-normal text-muted"> · {note.where}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl bg-ink p-6 text-paper md:p-10">
          <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
            {t({ en: "Price a lane.", sl: "Ocenite linijo." })}
          </h2>
          <p className="mt-3 max-w-xl text-mist">
            {t({
              en: "Any country on the board to any other. Slovenia is the default origin, not the only one.",
              sl: "Katera koli država na plošči v katero koli drugo. Slovenija je privzeti izvor, ne edini.",
            })}
          </p>
          <form
            className="mt-6 grid gap-3 md:grid-cols-4"
            onSubmit={(event) => {
              event.preventDefault();
              void navigate({
                to: "/quote",
                search: { from, to, kg: Number(kg) > 0 ? Number(kg) : 1, mode },
              });
            }}
          >
            <label className="text-sm font-medium">
              {t({ en: "From", sl: "Od" })}
              <select className={cn(fieldClass, "mt-2")} value={from} onChange={(event) => setFrom(event.target.value)}>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {countryName(country, locale)}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              {t({ en: "To", sl: "Do" })}
              <select className={cn(fieldClass, "mt-2 text-ink")} value={to} onChange={(event) => setTo(event.target.value)}>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {countryName(country, locale)}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              {t({ en: "Weight, kg", sl: "Teža, kg" })}
              <input
                className={cn(fieldClass, "mt-2 text-ink")}
                inputMode="decimal"
                value={kg}
                onChange={(event) => setKg(event.target.value)}
              />
            </label>
            <label className="text-sm font-medium">
              {t({ en: "Mode", sl: "Način" })}
              <select
                className={cn(fieldClass, "mt-2 text-ink")}
                value={mode}
                onChange={(event) => setMode(event.target.value as Mode)}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {t(service.title)}
                  </option>
                ))}
              </select>
            </label>
            <div className="md:col-span-4 flex flex-wrap items-center gap-4">
              <button type="submit" className={btnAccent}>
                {t({ en: "Open the full quote", sl: "Odpri celotno ponudbo" })}
              </button>
              <p className="text-sm text-mist tabular-nums" aria-live="polite">
                {estimate?.available && estimate.days
                  ? `${formatEur(estimate.total, locale)} · ${formatDays(estimate.days, locale)}`
                  : t({ en: "That mode does not fit this lane.", sl: "Ta način ne sodi na to linijo." })}
              </p>
            </div>
          </form>
        </div>
      </section>
    </SiteFrame>
  );
}
