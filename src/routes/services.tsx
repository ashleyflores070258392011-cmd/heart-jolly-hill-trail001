import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteFrame, btnAccent, btnLine } from "@/components/site";
import { serviceById, services, type Mode } from "@/lib/catalog";
import { useT } from "@/lib/locale";
import { cn } from "@/lib/cn";

type ServiceSearch = { service: string };

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): ServiceSearch => ({
    service: typeof search.service === "string" ? search.service : "freight",
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const search = Route.useSearch();
  const initial = serviceById(search.service).id;
  const [mode, setMode] = useState<Mode>(initial);
  const active = serviceById(mode);

  return (
    <SiteFrame>
      <PageIntro
        kicker={t({ en: "Services", sl: "Storitve" })}
        title={t({ en: "Five products. One desk.", sl: "Pet storitev. Ena miza." })}
        lede={t({
          en: "Courier, freight, air, sea and a supply-chain program. Slovenia is staffed as a home network, not a remote agent.",
          sl: "Kurir, tovor, letalski, pomorski in program dobavne verige. Slovenija je domača mreža, ne oddaljeni agent.",
        })}
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {services.map((service) => {
            const on = service.id === active.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setMode(service.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
                  on ? "bg-ink text-paper" : "border border-line bg-paper text-ink",
                )}
              >
                {t(service.menu)}
              </button>
            );
          })}
        </div>
        <article className="mt-6 grid items-start gap-8 lg:grid-cols-2">
          <img src={active.image} alt={t(active.imageAlt)} className="aspect-[3/2] w-full rounded-2xl object-cover" />
          <div>
            <h2 className="font-display text-5xl uppercase leading-none">{t(active.title)}</h2>
            <p className="mt-4 text-lg text-muted">{t(active.lede)}</p>
            <ul className="mt-6 space-y-3">
              {active.points.map((point) => (
                <li key={point.en} className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium">
                  {t(point)}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-ink px-5 py-4 text-sm text-mist">{t(active.si)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quote" search={{ from: "SI", to: "DE", kg: 12, mode: active.id }} className={btnAccent}>
                {t({ en: "Quote this mode", sl: "Ponudba za ta način" })}
              </Link>
              <Link to="/network" className={btnLine}>
                {t({ en: "See the network", sl: "Poglej mrežo" })}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </SiteFrame>
  );
}
