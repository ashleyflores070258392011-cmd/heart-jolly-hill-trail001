import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteFrame, btnAccent } from "@/components/site";
import {
  bandLabel,
  countries,
  countryName,
  services,
  siCities,
  type Band,
  type Country,
} from "@/lib/catalog";
import { useLocale, useT } from "@/lib/locale";
import { formatDays, formatEur, quoteLine, type QuoteLine } from "@/lib/pricing";
import { MODES } from "@/lib/pricing";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/network")({
  component: NetworkPage,
});

const filters: ("all" | Band)[] = ["all", "home", "near", "europe", "world"];

function bestLine(country: Country) {
  const lines = MODES.map((mode) =>
    quoteLine({
      from: "home",
      to: country.band,
      mode,
      kg: country.band === "world" ? 80 : 40,
      pieces: 1,
      dims: null,
      insuredValue: 0,
      priority: false,
    }),
  ).filter((line) => line.available);
  return lines.sort((a, b) => a.total - b.total);
}

function NetworkPage() {
  const t = useT();
  const { locale } = useLocale();
  const [band, setBand] = useState<(typeof filters)[number]>("all");
  const [query, setQuery] = useState("");
  const [code, setCode] = useState("SI");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((country) => {
      const inBand = band === "all" || country.band === band;
      const name = `${country.en} ${country.sl} ${country.city}`.toLowerCase();
      return inBand && (!q || name.includes(q));
    });
  }, [band, query]);

  const selected = countries.find((country) => country.code === code) ?? countries[0];
  const lines = bestLine(selected);
  const filterLabel = (key: (typeof filters)[number]) =>
    key === "all" ? t({ en: "All", sl: "Vse" }) : t(bandLabel[key]);

  return (
    <SiteFrame>
      <PageIntro
        kicker={t({ en: "Network", sl: "Mreža" })}
        title={t({
          en: `${countries.length} countries. Slovenia first.`,
          sl: `${countries.length} držav. Najprej Slovenija.`,
        })}
        lede={t({
          en: "Domestic cities, neighbour road, European linehaul, and intercontinental air or Koper ocean. Pick a country and see how it leaves Ljubljana.",
          sl: "Domača mesta, sosednja cesta, evropski linijski prevoz ter medcelinski let ali ocean iz Kopra. Izberite državo in poglejte, kako odide iz Ljubljane.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-3xl uppercase">{t({ en: "Inside Slovenia", sl: "Znotraj Slovenije" })}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siCities.map((city) => (
            <li key={city.name} className="rounded-2xl border border-line bg-paper px-4 py-3">
              <p className="font-semibold">{city.name}</p>
              <p className="text-sm text-muted">{t(city.level)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[320px_1fr]">
        <div>
          <label className="text-sm font-medium">
            {t({ en: "Find a country", sl: "Najdi državo" })}
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="mt-2 min-h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              placeholder={t({ en: "Slovenia, Koper, Japan…", sl: "Slovenija, Koper, Japonska…" })}
            />
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setBand(key)}
                className={cn(
                  "min-h-10 rounded-full px-3 text-sm font-semibold",
                  band === key ? "bg-primary text-paper" : "border border-line bg-paper",
                )}
              >
                {filterLabel(key)}
              </button>
            ))}
          </div>
          <ul className="mt-4 max-h-[32rem] space-y-1 overflow-auto pr-1">
            {visible.map((country) => {
              const on = country.code === selected.code;
              return (
                <li key={country.code}>
                  <button
                    type="button"
                    onClick={() => setCode(country.code)}
                    className={cn(
                      "flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-left",
                      on ? "bg-ink text-paper" : "hover:bg-paper",
                    )}
                  >
                    <span>
                      <span className="block text-sm font-semibold">{countryName(country, locale)}</span>
                      <span className={cn("text-xs", on ? "text-mist" : "text-muted")}>{country.city}</span>
                    </span>
                    <span className={cn("text-xs uppercase tracking-wide", on ? "text-accent" : "text-primary")}>
                      {country.code}
                    </span>
                  </button>
                </li>
              );
            })}
            {visible.length === 0 ? (
              <li className="px-3 py-6 text-sm text-muted">{t({ en: "Nothing matches.", sl: "Ni zadetkov." })}</li>
            ) : null}
          </ul>
        </div>

        <article className="rounded-2xl border border-line bg-paper p-6 md:p-8">
          <p className="font-display text-sm uppercase tracking-widest text-accent">{t(bandLabel[selected.band])}</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-none">{countryName(selected, locale)}</h2>
          <p className="mt-2 text-muted">
            {t({ en: "Commercial city", sl: "Poslovno mesto" })} · {selected.city}
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted">
            {selected.band === "home"
              ? t({
                  en: "Domestic freight stays on our vans. Sea and air are for lanes that actually need them.",
                  sl: "Domači tovor ostane na naših kombijih. Morje in let sta za linije, ki ju res potrebujeta.",
                })
              : selected.band === "world"
                ? t({
                    en: "Intercontinental lots leave by air from LJU or by sea from the Port of Koper, then inland at the other end.",
                    sl: "Medcelinski tovori odidejo z letalom z LJU ali po morju iz Luke Koper, nato po kopnem na drugi strani.",
                  })
                : t({
                    en: "Neighbour and European lanes run by road from the Ljubljana hub, with air when the clock is shorter than the driver.",
                    sl: "Sosednje in evropske linije tečejo po cesti iz ljubljanskega vozlišča, z letalom, ko je ura krajša od voznika.",
                  })}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {lines.map((line) => (
              <LaneCard key={line.mode} line={line} locale={locale} />
            ))}
          </ul>
          <Link
            to="/quote"
            search={{ from: "SI", to: selected.code, kg: selected.band === "world" ? 80 : 40, mode: lines[0]?.mode ?? "freight" }}
            className={cn(btnAccent, "mt-6")}
          >
            {t({ en: "Quote from Ljubljana", sl: "Ponudba iz Ljubljane" })}
          </Link>
        </article>
      </section>
    </SiteFrame>
  );
}

function LaneCard({ line, locale }: { line: QuoteLine; locale: "en" | "sl" }) {
  const t = useT();
  const service = services.find((item) => item.id === line.mode);
  if (!service) return null;
  return (
    <li className="rounded-xl border border-line bg-bg px-4 py-3">
      <p className="text-sm font-semibold">{t(service.title)}</p>
      <p className="mt-1 font-display text-2xl tabular-nums">{formatEur(line.total, locale)}</p>
      <p className="text-sm text-muted">{formatDays(line.days, locale)}</p>
    </li>
  );
}
