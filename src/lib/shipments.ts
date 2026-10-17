import type { Copy } from "@/lib/locale";
import type { Mode } from "@/lib/catalog";

export type Status = "in_transit" | "at_port" | "customs" | "out_for_delivery" | "delivered";

export type Shipment = {
  id: string;
  from: string;
  to: string;
  fromCountry: Copy;
  toCountry: Copy;
  mode: Mode;
  status: Status;
  eta: string;
  pieces: number;
  weight: string;
  events: { at: string; place: string; title: Copy }[];
};

export const statusCopy: Record<Status, Copy> = {
  in_transit: { en: "In transit", sl: "V prevozu" },
  at_port: { en: "At the port", sl: "V luki" },
  customs: { en: "Customs", sl: "Carina" },
  out_for_delivery: { en: "Out for delivery", sl: "Na dostavi" },
  delivered: { en: "Delivered", sl: "Dostavljeno" },
};

export const statusProgress: Record<Status, number> = {
  at_port: 46,
  in_transit: 62,
  customs: 78,
  out_for_delivery: 90,
  delivered: 100,
};

export const shipments: Shipment[] = [
  {
    id: "GEL-48291",
    from: "Ljubljana",
    to: "Munich",
    fromCountry: { en: "Slovenia", sl: "Slovenija" },
    toCountry: { en: "Germany", sl: "Nemčija" },
    mode: "freight",
    status: "in_transit",
    eta: "18 Oct",
    pieces: 4,
    weight: "186 kg",
    events: [
      { at: "16 Oct · 08:10", place: "Ljubljana hub", title: { en: "Collected from the shipper", sl: "Prevzeto pri pošiljatelju" } },
      { at: "16 Oct · 15:05", place: "Ljubljana hub", title: { en: "Left the cross-dock", sl: "Zapustilo pretovorno vozlišče" } },
      { at: "17 Oct · 01:40", place: "Karawanks", title: { en: "Cleared into Austria", sl: "Sproščeno v Avstrijo" } },
      { at: "17 Oct · 06:20", place: "Salzburg", title: { en: "Linehaul still rolling", sl: "Linija je še na cesti" } },
    ],
  },
  {
    id: "GEL-11028",
    from: "Koper",
    to: "Rotterdam",
    fromCountry: { en: "Slovenia", sl: "Slovenija" },
    toCountry: { en: "Netherlands", sl: "Nizozemska" },
    mode: "sea",
    status: "at_port",
    eta: "2 Nov",
    pieces: 1,
    weight: "11,200 kg",
    events: [
      { at: "14 Oct · 11:00", place: "Port of Koper", title: { en: "Received on the terminal", sl: "Prevzeto na terminalu" } },
      { at: "15 Oct · 16:10", place: "Port of Koper", title: { en: "Export cleared", sl: "Izvoz carinjen" } },
      { at: "16 Oct · 09:40", place: "Port of Koper", title: { en: "Loaded on the vessel", sl: "Naloženo na ladjo" } },
      { at: "17 Oct · 07:00", place: "Adriatic", title: { en: "Vessel sailed", sl: "Ladja odplula" } },
    ],
  },
  {
    id: "GEL-77301",
    from: "Maribor",
    to: "Milan",
    fromCountry: { en: "Slovenia", sl: "Slovenija" },
    toCountry: { en: "Italy", sl: "Italija" },
    mode: "courier",
    status: "delivered",
    eta: "16 Oct",
    pieces: 1,
    weight: "3.2 kg",
    events: [
      { at: "15 Oct · 17:40", place: "Maribor", title: { en: "Collected", sl: "Prevzeto" } },
      { at: "16 Oct · 02:10", place: "Ljubljana hub", title: { en: "Sorted overnight", sl: "Sortirano čez noč" } },
      { at: "16 Oct · 06:00", place: "Trieste corridor", title: { en: "Into Italy", sl: "V Italiji" } },
      { at: "16 Oct · 11:25", place: "Milan", title: { en: "Signed for", sl: "Podpisano" } },
    ],
  },
  {
    id: "GEL-90011",
    from: "Ljubljana",
    to: "New York",
    fromCountry: { en: "Slovenia", sl: "Slovenija" },
    toCountry: { en: "United States", sl: "Združene države" },
    mode: "air",
    status: "customs",
    eta: "19 Oct",
    pieces: 2,
    weight: "42 kg",
    events: [
      { at: "16 Oct · 18:20", place: "LJU cargo", title: { en: "Accepted at the airport", sl: "Sprejeto na letališču" } },
      { at: "17 Oct · 00:10", place: "LJU", title: { en: "Departed", sl: "Odletelo" } },
      { at: "17 Oct · 09:40", place: "JFK", title: { en: "Landed", sl: "Pristalo" } },
      { at: "17 Oct · 12:05", place: "JFK", title: { en: "Customs, documents in order", sl: "Carina, dokumenti so v redu" } },
    ],
  },
  {
    id: "GEL-22014",
    from: "Celje",
    to: "Ljubljana",
    fromCountry: { en: "Slovenia", sl: "Slovenija" },
    toCountry: { en: "Slovenia", sl: "Slovenija" },
    mode: "courier",
    status: "out_for_delivery",
    eta: "17 Oct",
    pieces: 1,
    weight: "6 kg",
    events: [
      { at: "17 Oct · 07:50", place: "Celje", title: { en: "Collected", sl: "Prevzeto" } },
      { at: "17 Oct · 09:30", place: "Ljubljana hub", title: { en: "Sorted for the city", sl: "Sortirano za mesto" } },
      { at: "17 Oct · 10:15", place: "Ljubljana", title: { en: "With the driver", sl: "Pri vozniku" } },
    ],
  },
];

export function findShipment(query: string) {
  const key = query.trim().toUpperCase().replace(/\s+/g, "");
  if (!key) return null;
  return (
    shipments.find((shipment) => shipment.id.replace(/-/g, "") === key.replace(/-/g, "")) ??
    null
  );
}
