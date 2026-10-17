import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteFrame, btnAccent, fieldClass } from "@/components/site";
import { services } from "@/lib/catalog";
import { useT } from "@/lib/locale";
import { findShipment, shipments, statusCopy, statusProgress, type Shipment } from "@/lib/shipments";
import { cn } from "@/lib/cn";

type TrackSearch = { id: string };

export const Route = createFileRoute("/track")({
  validateSearch: (search: Record<string, unknown>): TrackSearch => ({
    id: typeof search.id === "string" ? search.id : "",
  }),
  component: TrackPage,
});

function TrackPage() {
  const search = Route.useSearch();
  const t = useT();
  const [query, setQuery] = useState(search.id);
  const [result, setResult] = useState<Shipment | null>(search.id ? findShipment(search.id) : null);
  const [miss, setMiss] = useState(false);

  useEffect(() => {
    setQuery(search.id);
    if (search.id) {
      const found = findShipment(search.id);
      setResult(found);
      setMiss(!found);
    }
  }, [search.id]);

  const run = (value: string) => {
    const found = findShipment(value);
    setResult(found);
    setMiss(Boolean(value.trim()) && !found);
  };

  return (
    <SiteFrame>
      <PageIntro
        kicker={t({ en: "Tracking", sl: "Sledenje" })}
        title={t({ en: "Where the freight is.", sl: "Kje je tovor." })}
        lede={t({
          en: "Open a live sample from the Slovenia desk, or type a reference. These five shipments are the preview board.",
          sl: "Odprite živi vzorec slovenske mize ali vpišite referenco. Teh pet pošiljk je predogledna plošča.",
        })}
      />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            run(query);
          }}
        >
          <label className="sr-only" htmlFor="track-id">
            {t({ en: "Shipment reference", sl: "Referenca pošiljke" })}
          </label>
          <input
            id="track-id"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="GEL-48291"
            className={fieldClass}
          />
          <button type="submit" className={btnAccent}>
            {t({ en: "Track", sl: "Sledi" })}
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          {shipments.map((shipment) => (
            <button
              key={shipment.id}
              type="button"
              onClick={() => {
                setQuery(shipment.id);
                run(shipment.id);
              }}
              className="min-h-11 rounded-full border border-line bg-paper px-3 text-sm font-semibold hover:border-primary"
            >
              {shipment.id}
            </button>
          ))}
        </div>

        {miss ? (
          <p className="mt-8 rounded-2xl border border-line bg-paper p-5 text-sm" role="status">
            {t({
              en: "That reference is not on the preview board. Try one of the five samples above.",
              sl: "Te reference ni na predogledni plošči. Poskusite enega od petih vzorcev zgoraj.",
            })}
          </p>
        ) : null}

        {result ? <Result shipment={result} /> : null}
      </section>
    </SiteFrame>
  );
}

function Result({ shipment }: { shipment: Shipment }) {
  const t = useT();
  const service = services.find((item) => item.id === shipment.mode);
  const progress = statusProgress[shipment.status];
  return (
    <article className="mt-8 rounded-2xl border border-line bg-paper p-5 md:p-8" aria-live="polite">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-accent">{shipment.id}</p>
          <h2 className="mt-1 font-display text-4xl uppercase leading-none md:text-5xl">
            {shipment.from} → {shipment.to}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {t(shipment.fromCountry)} · {t(shipment.toCountry)}
            {service ? ` · ${t(service.title)}` : ""} · {shipment.weight} · {shipment.pieces}{" "}
            {t({ en: shipment.pieces === 1 ? "piece" : "pieces", sl: shipment.pieces === 1 ? "kos" : "kosov" })}
          </p>
        </div>
        <span
          className={cn(
            "inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold uppercase tracking-wide",
            shipment.status === "delivered" ? "bg-primary text-paper" : "bg-accent text-ink",
          )}
        >
          {t(statusCopy[shipment.status])}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">
        {t({ en: "Promised window", sl: "Obljubljeno okno" })} · <span className="font-semibold text-ink">{shipment.eta}</span>
      </p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg" aria-hidden="true">
        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
      <ol className="mt-8 space-y-0">
        {shipment.events.map((event, index) => {
          const last = index === shipment.events.length - 1;
          return (
            <li key={`${event.at}-${event.place}`} className="grid grid-cols-[16px_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className={cn("mt-1 size-3 rounded-full", last ? "bg-accent" : "bg-primary")} />
                {index < shipment.events.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
              </div>
              <div className="pb-6">
                <p className="text-xs uppercase tracking-wide text-muted">{event.at}</p>
                <p className="font-semibold">{t(event.title)}</p>
                <p className="text-sm text-muted">{event.place}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
