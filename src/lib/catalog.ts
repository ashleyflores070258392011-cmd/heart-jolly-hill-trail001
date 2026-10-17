import type { Copy } from "@/lib/locale";

export type Band = "home" | "near" | "europe" | "world";
export type Mode = "courier" | "freight" | "air" | "sea" | "supply";

export type Country = {
  code: string;
  en: string;
  sl: string;
  band: Band;
  city: string;
};

const seed: Country[] = [
  { code: "SI", en: "Slovenia", sl: "Slovenija", band: "home", city: "Ljubljana" },
  { code: "AT", en: "Austria", sl: "Avstrija", band: "near", city: "Vienna" },
  { code: "IT", en: "Italy", sl: "Italija", band: "near", city: "Milan" },
  { code: "HR", en: "Croatia", sl: "Hrvaška", band: "near", city: "Zagreb" },
  { code: "HU", en: "Hungary", sl: "Madžarska", band: "near", city: "Budapest" },
  { code: "DE", en: "Germany", sl: "Nemčija", band: "near", city: "Munich" },
  { code: "CZ", en: "Czechia", sl: "Češka", band: "near", city: "Prague" },
  { code: "SK", en: "Slovakia", sl: "Slovaška", band: "near", city: "Bratislava" },
  { code: "FR", en: "France", sl: "Francija", band: "europe", city: "Lyon" },
  { code: "NL", en: "Netherlands", sl: "Nizozemska", band: "europe", city: "Rotterdam" },
  { code: "BE", en: "Belgium", sl: "Belgija", band: "europe", city: "Antwerp" },
  { code: "ES", en: "Spain", sl: "Španija", band: "europe", city: "Barcelona" },
  { code: "PL", en: "Poland", sl: "Poljska", band: "europe", city: "Warsaw" },
  { code: "CH", en: "Switzerland", sl: "Švica", band: "europe", city: "Zurich" },
  { code: "GB", en: "United Kingdom", sl: "Združeno kraljestvo", band: "europe", city: "London" },
  { code: "SE", en: "Sweden", sl: "Švedska", band: "europe", city: "Gothenburg" },
  { code: "GR", en: "Greece", sl: "Grčija", band: "europe", city: "Thessaloniki" },
  { code: "RO", en: "Romania", sl: "Romunija", band: "europe", city: "Bucharest" },
  { code: "RS", en: "Serbia", sl: "Srbija", band: "europe", city: "Belgrade" },
  { code: "BA", en: "Bosnia and Herzegovina", sl: "Bosna in Hercegovina", band: "europe", city: "Sarajevo" },
  { code: "PT", en: "Portugal", sl: "Portugalska", band: "europe", city: "Lisbon" },
  { code: "DK", en: "Denmark", sl: "Danska", band: "europe", city: "Copenhagen" },
  { code: "NO", en: "Norway", sl: "Norveška", band: "europe", city: "Oslo" },
  { code: "IE", en: "Ireland", sl: "Irska", band: "europe", city: "Dublin" },
  { code: "BG", en: "Bulgaria", sl: "Bolgarija", band: "europe", city: "Sofia" },
  { code: "FI", en: "Finland", sl: "Finska", band: "europe", city: "Helsinki" },
  { code: "US", en: "United States", sl: "Združene države", band: "world", city: "New York" },
  { code: "CN", en: "China", sl: "Kitajska", band: "world", city: "Shanghai" },
  { code: "AE", en: "United Arab Emirates", sl: "Združeni arabski emirati", band: "world", city: "Dubai" },
  { code: "JP", en: "Japan", sl: "Japonska", band: "world", city: "Tokyo" },
  { code: "IN", en: "India", sl: "Indija", band: "world", city: "Mumbai" },
  { code: "TR", en: "Türkiye", sl: "Turčija", band: "world", city: "Istanbul" },
  { code: "BR", en: "Brazil", sl: "Brazilija", band: "world", city: "Santos" },
  { code: "AU", en: "Australia", sl: "Avstralija", band: "world", city: "Melbourne" },
  { code: "KR", en: "South Korea", sl: "Južna Koreja", band: "world", city: "Busan" },
  { code: "SG", en: "Singapore", sl: "Singapur", band: "world", city: "Singapore" },
  { code: "CA", en: "Canada", sl: "Kanada", band: "world", city: "Toronto" },
  { code: "MX", en: "Mexico", sl: "Mehika", band: "world", city: "Mexico City" },
  { code: "ZA", en: "South Africa", sl: "Južna Afrika", band: "world", city: "Durban" },
  { code: "EG", en: "Egypt", sl: "Egipt", band: "world", city: "Alexandria" },
  { code: "QA", en: "Qatar", sl: "Katar", band: "world", city: "Doha" },
  { code: "MY", en: "Malaysia", sl: "Malezija", band: "world", city: "Kuala Lumpur" },
];

export const countries = seed;

export function countryByCode(code: string) {
  return countries.find((country) => country.code === code) ?? countries[0];
}

export function countryName(country: Country, locale: "en" | "sl") {
  return locale === "sl" ? country.sl : country.en;
}

export const bandLabel: Record<Band, Copy> = {
  home: { en: "Slovenia", sl: "Slovenija" },
  near: { en: "Neighbours", sl: "Sosedje" },
  europe: { en: "Europe", sl: "Evropa" },
  world: { en: "Worldwide", sl: "Svet" },
};

export const siCities: { name: string; level: Copy }[] = [
  { name: "Ljubljana", level: { en: "Same-day inside the ring", sl: "Isti dan znotraj obvoznice" } },
  { name: "Koper", level: { en: "Sea cut-off 16:00", sl: "Pomorska meja 16.00" } },
  { name: "Maribor", level: { en: "Next morning", sl: "Naslednje jutro" } },
  { name: "Celje", level: { en: "Next morning", sl: "Naslednje jutro" } },
  { name: "Kranj", level: { en: "Same-day with Ljubljana", sl: "Isti dan z Ljubljano" } },
  { name: "Postojna", level: { en: "Same evening", sl: "Isti večer" } },
  { name: "Novo mesto", level: { en: "Next day", sl: "Naslednji dan" } },
  { name: "Nova Gorica", level: { en: "Next day, to the border", sl: "Naslednji dan, do meje" } },
  { name: "Murska Sobota", level: { en: "Next day", sl: "Naslednji dan" } },
  { name: "Ptuj", level: { en: "Next day", sl: "Naslednji dan" } },
  { name: "Velenje", level: { en: "Next day", sl: "Naslednji dan" } },
  { name: "Kranjska Gora", level: { en: "Next day, alpine", sl: "Naslednji dan, alpsko" } },
];

export type Service = {
  id: Mode;
  image: string;
  imageAlt: Copy;
  title: Copy;
  menu: Copy;
  lede: Copy;
  points: Copy[];
  si: Copy;
};

export const services: Service[] = [
  {
    id: "courier",
    image: "/images/parcels.jpg",
    imageAlt: { en: "Parcels moving through a sorting hub", sl: "Paketi na sortirnem traku" },
    title: { en: "Courier", sl: "Kurir" },
    menu: { en: "Courier services", sl: "Kurirske storitve" },
    lede: {
      en: "Documents and parcels, door to door, with a same-day option on the Slovenian board.",
      sl: "Dokumenti in paketi od vrat do vrat, z možnostjo istega dne na slovenski plošči.",
    },
    points: [
      { en: "Same-day Ljubljana, Kranj and Postojna", sl: "Isti dan Ljubljana, Kranj in Postojna" },
      { en: "Next morning to Maribor, Celje and the coast", sl: "Naslednje jutro v Maribor, Celje in na obalo" },
      { en: "Signed proof when it lands", sl: "Podpis ob predaji" },
    ],
    si: {
      en: "The Slovenia desk runs its own vans. Neighbour lanes go overnight.",
      sl: "Slovenska miza vozi svoje kombije. Sosednje linije gredo čez noč.",
    },
  },
  {
    id: "freight",
    image: "/images/hero.jpg",
    imageAlt: { en: "A freight truck on a wet European motorway", sl: "Tovornjak na mokri evropski avtocesti" },
    title: { en: "Road freight", sl: "Cestni tovor" },
    menu: { en: "Freight services", sl: "Tovorne storitve" },
    lede: {
      en: "Pallets and part-loads over the Alps, through the Balkans and up the German corridor.",
      sl: "Palete in delni tovori čez Alpe, skozi Balkan in po nemškem koridorju.",
    },
    points: [
      { en: "Groupage from a single pallet", sl: "Skupinski tovor že od ene palete" },
      { en: "A dedicated van when the window is tight", sl: "Namenski kombi, ko je okno tesno" },
      { en: "Border paperwork prepared before the truck rolls", sl: "Mejni papirji pripravljeni, preden tovornjak steče" },
    ],
    si: {
      en: "Ljubljana is the cross-dock. Cargo off Koper can roll the same day it lands.",
      sl: "Ljubljana je pretovorno vozlišče. Tovor iz Kopra lahko steče isti dan, ko prispe.",
    },
  },
  {
    id: "air",
    image: "/images/air.jpg",
    imageAlt: { en: "Air-cargo containers inside a freighter", sl: "Letalski zabojniki v tovornem letalu" },
    title: { en: "Air cargo", sl: "Letalski tovor" },
    menu: { en: "Air cargo solutions", sl: "Rešitve letalskega tovora" },
    lede: {
      en: "Through Ljubljana Jože Pučnik, or trucked to a bigger European hub when that flight is the better one.",
      sl: "Prek Letališča Jožeta Pučnika Ljubljana ali z dovozom na večje evropsko vozlišče, ko je tisti let boljši.",
    },
    points: [
      { en: "Europe often on the next flight", sl: "Evropa pogosto z naslednjim letom" },
      { en: "Secure handling for high-value lots", sl: "Varni prevzem za dragocene pošiljke" },
      { en: "Intercontinental in days, not weeks", sl: "Medcelinsko v dneh, ne v tednih" },
    ],
    si: {
      en: "LJU is home. Heavy lots can still make a same-night departure via Vienna or Munich.",
      sl: "LJU je doma. Težji tovori lahko še isto noč odletijo prek Dunaja ali Münchna.",
    },
  },
  {
    id: "sea",
    image: "/images/sea.jpg",
    imageAlt: { en: "Container cranes along an Adriatic quay", sl: "Kontejnerska dvigala ob jadranskem pomolu" },
    title: { en: "Sea freight", sl: "Pomorski tovor" },
    menu: { en: "Sea freight solutions", sl: "Rešitve pomorskega tovora" },
    lede: {
      en: "Full containers and groupage over the Port of Koper, the Adriatic gate for Central Europe.",
      sl: "Polni zabojniki in skupinski tovor prek Luke Koper, jadranskih vrat Srednje Evrope.",
    },
    points: [
      { en: "FCL and LCL on the same desk", sl: "FCL in LCL na isti mizi" },
      { en: "Export cut-off 16:00 on the quay", sl: "Izvozna meja 16.00 na pomolu" },
      { en: "Inland haul to Ljubljana, Graz, Zagreb, Munich", sl: "Kopenski dovoz v Ljubljano, Gradec, Zagreb, München" },
    ],
    si: {
      en: "Koper is not a detour. For this desk it is the front door.",
      sl: "Koper ni ovinek. Za to mizo so vhodna vrata.",
    },
  },
  {
    id: "supply",
    image: "/images/warehouse.jpg",
    imageAlt: { en: "A warehouse aisle with pallet racking", sl: "Skladiščni hodnik s paletnimi regali" },
    title: { en: "Supply chain", sl: "Dobavna veriga" },
    menu: { en: "Supply chain solutions", sl: "Rešitve dobavne verige" },
    lede: {
      en: "A standing program: storage in Slovenia, replenishment, and one desk for every mode.",
      sl: "Stalni program: skladiščenje v Sloveniji, polnjenje zalog in ena miza za vse načine.",
    },
    points: [
      { en: "Storage near the airport corridor", sl: "Skladišče ob letališkem koridorju" },
      { en: "Reorder rules you can actually read", sl: "Pravila naročanja, ki jih lahko berete" },
      { en: "One invoice across van, flight and box", sl: "En račun za kombi, let in zaboj" },
    ],
    si: {
      en: "Inventory sits where a van, a flight or a Koper box can leave the same building.",
      sl: "Zaloga stoji tam, od koder lahko iz iste stavbe odpelje kombi, let ali koprski zaboj.",
    },
  },
];

export function serviceById(id: string) {
  return services.find((service) => service.id === id) ?? services[1];
}

export const heroLanes: { from: string; to: string; id: string; state: Copy }[] = [
  { from: "Ljubljana", to: "Munich", id: "GEL-48291", state: { en: "On the road", sl: "Na cesti" } },
  { from: "Koper", to: "Rotterdam", id: "GEL-11028", state: { en: "Vessel sailed", sl: "Ladja odplula" } },
  { from: "Maribor", to: "Milan", id: "GEL-77301", state: { en: "Delivered", sl: "Dostavljeno" } },
  { from: "Ljubljana", to: "New York", id: "GEL-90011", state: { en: "At customs", sl: "Na carini" } },
  { from: "Celje", to: "Ljubljana", id: "GEL-22014", state: { en: "With the driver", sl: "Pri vozniku" } },
];

export const marqueeLanes = [
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
  "Ljubljana → Warsaw",
];
