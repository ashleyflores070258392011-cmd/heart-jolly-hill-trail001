import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageIntro, SiteFrame, btnAccent, btnLine, fieldClass } from "@/components/site";
import { countries, countryByCode, countryName, services, type Mode } from "@/lib/catalog";
import { loadQuotes, saveQuote, type KeptQuote } from "@/lib/desk";
import { useLocale, useT } from "@/lib/locale";
import { formatDays, formatEur, quoteAll, type QuoteLine } from "@/lib/pricing";
import { cn } from "@/lib/cn";

type QuoteSearch = { from: string; to: string; kg: number; mode: string };

function readKg(value: unknown) {
  const num = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(num) || num <= 0 || num > 20000) return 12;
  return num;
}

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): QuoteSearch => ({
    from: typeof search.from === "string" ? search.from : "SI",
    to: typeof search.to === "string" ? search.to : "DE",
    kg: readKg(search.kg),
    mode: typeof search.mode === "string" ? search.mode : "freight",
  }),
  component: QuotePage,
});

const knownMode = (value: string): Mode =>
  services.some((service) => service.id === value) ? (value as Mode) : "freight";

const knownCode = (value: string, fallback: string) =>
  countries.some((country) => country.code === value) ? value : fallback;

function QuotePage() {
  const search = Route.useSearch();
  const t = useT();
  const { locale } = useLocale();
  const navigate = useNavigate();
  const [from, setFrom] = useState(knownCode(search.from, "SI"));
  const [to, setTo] = useState(knownCode(search.to, "DE"));
  const [kg, setKg] = useState(String(search.kg));
  const [pieces, setPieces] = useState("1");
  const [mode, setMode] = useState<Mode>(knownMode(search.mode));
  const [priority, setPriority] = useState(false);
  const [insure, setInsure] = useState(false);
  const [value, setValue] = useState("1000");
  const [useDims, setUseDims] = useState(false);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [kept, setKept] = useState<KeptQuote[]>([]);
  const [savedNote, setSavedNote] = useState("");

  useEffect(() => {
    setFrom(knownCode(search.from, "SI"));
    setTo(knownCode(search.to, "DE"));
    setKg(String(search.kg));
    setMode(knownMode(search.mode));
  }, [search.from, search.to, search.kg, search.mode]);

  useEffect(() => {
    setKept(loadQuotes());
  }, []);

  const kgNum = Number(kg);
  const pieceNum = Math.min(40, Math.max(1, Math.round(Number(pieces) || 1)));
  const dims =
    useDims && Number(length) > 0 && Number(width) > 0 && Number(height) > 0
      ? { l: Number(length), w: Number(width), h: Number(height) }
      : null;
  const valid = Number.isFinite(kgNum) && kgNum > 0 && kgNum <= 20000;

  const lines = useMemo(() => {
    if (!valid) return [];
    return quoteAll({
      from: countryByCode(from).band,
      to: countryByCode(to).band,
      kg: kgNum,
      pieces: pieceNum,
      dims,
      insuredValue: insure ? Math.max(0, Number(value) || 0) : 0,
      priority,
    });
  }, [valid, from, to, kgNum, pieceNum, dims, insure, value, priority]);

  const selected = lines.find((line) => line.mode === mode) ?? lines[0];
  const origin = countryByCode(from);
  const dest = countryByCode(to);

  const keep = () => {
    if (!selected?.available) return;
    const summary = `${t(services.find((service) => service.id === selected.mode)?.title ?? services[0].title)} · ${origin.city} → ${dest.city} · ${kgNum} kg`;
    const row: KeptQuote = {
      id: `${Date.now()}`,
      at: new Date().toISOString(),
      summary,
      total: formatEur(selected.total, locale),
    };
    saveQuote(row);
    setKept(loadQuotes());
    setSavedNote(t({ en: "Kept on this device.", sl: "Shranjeno na tej napravi." }));
  };

  return (
    <SiteFrame>
      <PageIntro
        kicker={t({ en: "Quote", sl: "Ponudba" })}
        title={t({ en: "A number you can plan with.", sl: "Številka, s katero lahko načrtujete." })}
        lede={t({
          en: "Desk estimate in euros, fuel inside the linehaul. It is a planning figure — the confirmed rate follows the collection address.",
          sl: "Ocena mize v evrih, gorivo je v voznini. To je številka za načrt — potrjena cena sledi naslovu prevzema.",
        })}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,340px)_1fr]">
        <form
          className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <CountrySelect label={t({ en: "From", sl: "Od" })} value={from} onChange={setFrom} locale={locale} />
          <CountrySelect label={t({ en: "To", sl: "Do" })} value={to} onChange={setTo} locale={locale} />
          <label className="text-sm font-medium">
            {t({ en: "Weight, kg", sl: "Teža, kg" })}
            <input className={cn(fieldClass, "mt-2")} inputMode="decimal" value={kg} onChange={(event) => setKg(event.target.value)} />
          </label>
          <label className="text-sm font-medium">
            {t({ en: "Pieces", sl: "Kosi" })}
            <input
              className={cn(fieldClass, "mt-2")}
              inputMode="numeric"
              value={pieces}
              onChange={(event) => setPieces(event.target.value)}
            />
          </label>
          <label className="flex min-h-11 items-center gap-3 text-sm font-medium">
            <input type="checkbox" checked={priority} onChange={(event) => setPriority(event.target.checked)} />
            {t({ en: "Priority team", sl: "Prednostna ekipa" })}
          </label>
          <label className="flex min-h-11 items-center gap-3 text-sm font-medium">
            <input type="checkbox" checked={insure} onChange={(event) => setInsure(event.target.checked)} />
            {t({ en: "Insurance", sl: "Zavarovanje" })}
          </label>
          {insure ? (
            <label className="text-sm font-medium">
              {t({ en: "Declared value, EUR", sl: "Deklarirana vrednost, EUR" })}
              <input className={cn(fieldClass, "mt-2")} inputMode="decimal" value={value} onChange={(event) => setValue(event.target.value)} />
            </label>
          ) : null}
          <label className="flex min-h-11 items-center gap-3 text-sm font-medium">
            <input type="checkbox" checked={useDims} onChange={(event) => setUseDims(event.target.checked)} />
            {t({ en: "I have dimensions", sl: "Imam mere" })}
          </label>
          {useDims ? (
            <div className="grid grid-cols-3 gap-2">
              <Dim label={t({ en: "L cm", sl: "D cm" })} value={length} onChange={setLength} />
              <Dim label={t({ en: "W cm", sl: "Š cm" })} value={width} onChange={setWidth} />
              <Dim label={t({ en: "H cm", sl: "V cm" })} value={height} onChange={setHeight} />
            </div>
          ) : null}
          {!valid ? (
            <p className="text-sm text-primary">{t({ en: "Enter a weight up to 20,000 kg.", sl: "Vnesite težo do 20.000 kg." })}</p>
          ) : null}
        </form>

        <div>
          <div className="grid gap-3 sm:grid-cols-2" role="list">
            {lines.map((line) => (
              <ModeCard key={line.mode} line={line} selected={line.mode === mode} onPick={() => setMode(line.mode)} />
            ))}
          </div>
          {selected ? (
            <div className="mt-4 rounded-2xl border border-line bg-paper p-5" aria-live="polite">
              {selected.available ? (
                <>
                  <p className="text-sm text-muted">
                    {countryName(origin, locale)} → {countryName(dest, locale)}
                    {selected.volumetric
                      ? ` · ${t({ en: "charged on volume", sl: "obračun po prostornini" })} (${selected.chargeableKg} kg)`
                      : ` · ${selected.chargeableKg} kg`}
                  </p>
                  <p className="mt-2 font-display text-5xl tabular-nums">{formatEur(selected.total, locale)}</p>
                  <p className="text-muted">{formatDays(selected.days, locale)}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                    <Money label={t({ en: "Linehaul", sl: "Voznina" })} value={formatEur(selected.linehaul, locale)} />
                    <Money label={t({ en: "Handling", sl: "Manipulacija" })} value={formatEur(selected.handling, locale)} />
                    <Money label={t({ en: "Insurance", sl: "Zavarovanje" })} value={formatEur(selected.insurance, locale)} />
                    <Money label={t({ en: "Priority", sl: "Prednost" })} value={formatEur(selected.priorityFee, locale)} />
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className={btnAccent}
                      onClick={() => {
                        const service = services.find((item) => item.id === selected.mode);
                        const note = `${service ? t(service.title) : selected.mode} · ${origin.code} → ${dest.code} · ${kgNum} kg · ${formatEur(selected.total, locale)} · ${formatDays(selected.days, locale)}`;
                        void navigate({
                          to: "/contact",
                          search: { service: selected.mode, note },
                        });
                      }}
                    >
                      {t({ en: "Send to the desk", sl: "Pošlji na mizo" })}
                    </button>
                    <button type="button" className={btnLine} onClick={keep}>
                      {t({ en: "Keep this estimate", sl: "Hrani to oceno" })}
                    </button>
                  </div>
                  {savedNote ? <p className="mt-3 text-sm text-primary">{savedNote}</p> : null}
                </>
              ) : (
                <p className="text-sm">
                  {t({
                    en: "This mode is too much machine for the distance. Pick road or courier, or lengthen the lane.",
                    sl: "Ta način je za to razdaljo pretežak stroj. Izberite cesto ali kurirja ali podaljšajte linijo.",
                  })}
                </p>
              )}
            </div>
          ) : null}
          {kept.length > 0 ? (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {t({ en: "Kept on this device", sl: "Shranjeno na tej napravi" })}
              </h2>
              <ul className="mt-2 space-y-2">
                {kept.map((row) => (
                  <li key={row.id} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm">
                    <span>{row.summary}</span>
                    <span className="tabular-nums font-semibold">{row.total}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="mt-6 text-sm text-muted">
            <Link to="/track" search={{ id: "" }} className="font-semibold text-primary">
              {t({ en: "Already moving? Track it.", sl: "Že na poti? Sledite." })}
            </Link>
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}

function CountrySelect({
  label,
  value,
  onChange,
  locale,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  locale: "en" | "sl";
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <select className={cn(fieldClass, "mt-2")} value={value} onChange={(event) => onChange(event.target.value)}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {countryName(country, locale)}
          </option>
        ))}
      </select>
    </label>
  );
}

function Dim({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-xs font-medium text-muted">
      {label}
      <input className={cn(fieldClass, "mt-1")} inputMode="numeric" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Money({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-bg px-3 py-2">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="tabular-nums font-semibold">{value}</dd>
    </div>
  );
}

function ModeCard({ line, selected, onPick }: { line: QuoteLine; selected: boolean; onPick: () => void }) {
  const t = useT();
  const { locale } = useLocale();
  const service = services.find((item) => item.id === line.mode);
  if (!service) return null;
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={selected}
      className={cn(
        "rounded-2xl border px-4 py-4 text-left",
        selected ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-line bg-paper hover:border-primary",
      )}
    >
      <span className="text-sm font-semibold">{t(service.menu)}</span>
      {line.available ? (
        <>
          <span className="mt-2 block font-display text-3xl tabular-nums">{formatEur(line.total, locale)}</span>
          <span className="text-sm text-muted">{formatDays(line.days, locale)}</span>
        </>
      ) : (
        <span className="mt-2 block text-sm text-muted">{t({ en: "Not on this lane", sl: "Ni na tej liniji" })}</span>
      )}
    </button>
  );
}
