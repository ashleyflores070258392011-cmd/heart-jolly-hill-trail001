import type { Band, Mode } from "@/lib/catalog";
import type { Locale } from "@/lib/locale";

export type Zone = 0 | 1 | 2 | 3;

const RATE: Record<Mode, { base: number[]; kg: number[]; days: [number, number][] }> = {
  courier: {
    base: [14, 26, 42, 78],
    kg: [1.5, 2.2, 3.4, 6.4],
    days: [
      [1, 1],
      [1, 2],
      [2, 4],
      [3, 6],
    ],
  },
  freight: {
    base: [38, 64, 98, 210],
    kg: [0.42, 0.62, 0.88, 1.55],
    days: [
      [1, 2],
      [1, 3],
      [3, 6],
      [10, 22],
    ],
  },
  air: {
    base: [0, 86, 110, 148],
    kg: [0, 4.1, 4.8, 6.6],
    days: [
      [0, 0],
      [1, 2],
      [1, 3],
      [2, 5],
    ],
  },
  sea: {
    base: [0, 0, 168, 280],
    kg: [0, 0, 0.34, 0.55],
    days: [
      [0, 0],
      [0, 0],
      [9, 16],
      [20, 36],
    ],
  },
  supply: {
    base: [160, 220, 290, 420],
    kg: [0.8, 1.05, 1.35, 2.1],
    days: [
      [2, 3],
      [2, 4],
      [4, 7],
      [8, 18],
    ],
  },
};

export function zoneOf(from: Band, to: Band): Zone {
  if (from === "home" && to === "home") return 0;
  if (from === "world" || to === "world") return 3;
  const regional = (from === "home" || from === "near") && (to === "home" || to === "near");
  return regional ? 1 : 2;
}

export function modeAvailable(mode: Mode, zone: Zone) {
  if (mode === "sea" && zone < 2) return false;
  if (mode === "air" && zone < 1) return false;
  return true;
}

export type Dims = { l: number; w: number; h: number };

export type QuoteInput = {
  from: Band;
  to: Band;
  mode: Mode;
  kg: number;
  pieces: number;
  dims: Dims | null;
  insuredValue: number;
  priority: boolean;
};

export type QuoteLine = {
  mode: Mode;
  available: boolean;
  chargeableKg: number;
  volumetric: boolean;
  linehaul: number;
  handling: number;
  insurance: number;
  priorityFee: number;
  total: number;
  days: [number, number] | null;
};

function euros(value: number) {
  return Math.max(0, Math.round(value));
}

function volumetricKg(dims: Dims, mode: Mode) {
  const divisor = mode === "air" || mode === "courier" ? 5000 : 4000;
  return (dims.l * dims.w * dims.h) / divisor;
}

export function quoteLine(input: QuoteInput): QuoteLine {
  const zone = zoneOf(input.from, input.to);
  const available = modeAvailable(input.mode, zone);
  const rate = RATE[input.mode];
  const actual = Math.max(0.1, input.kg);
  let chargeable = actual;
  let volumetric = false;
  if (input.dims && input.dims.l > 0 && input.dims.w > 0 && input.dims.h > 0) {
    const vol = volumetricKg(input.dims, input.mode);
    if (vol > actual) {
      chargeable = Math.round(vol * 10) / 10;
      volumetric = true;
    }
  }
  if (!available) {
    return {
      mode: input.mode,
      available: false,
      chargeableKg: Math.round(chargeable * 10) / 10,
      volumetric,
      linehaul: 0,
      handling: 0,
      insurance: 0,
      priorityFee: 0,
      total: 0,
      days: null,
    };
  }
  const linehaul = euros(rate.base[zone] + rate.kg[zone] * chargeable);
  const perPiece = input.mode === "courier" ? 3.5 : 6.5;
  const handling = euros(Math.max(0, input.pieces - 1) * perPiece);
  const insurance = input.insuredValue > 0 ? euros(Math.max(6, input.insuredValue * 0.012)) : 0;
  const priorityFee = input.priority && input.mode !== "sea" ? euros(linehaul * 0.16) : 0;
  let days = rate.days[zone];
  if (input.priority && input.mode !== "sea" && days) {
    const min = Math.max(1, days[0] - 1);
    const max = Math.max(min, days[1] - 1);
    days = [min, max];
  }
  return {
    mode: input.mode,
    available: true,
    chargeableKg: Math.round(chargeable * 10) / 10,
    volumetric,
    linehaul,
    handling,
    insurance,
    priorityFee,
    total: linehaul + handling + insurance + priorityFee,
    days,
  };
}

export const MODES: Mode[] = ["courier", "freight", "air", "sea", "supply"];

export function quoteAll(input: Omit<QuoteInput, "mode">) {
  return MODES.map((mode) => quoteLine({ ...input, mode }));
}

export function formatEur(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "sl" ? "sl-SI" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDays(days: [number, number] | null, locale: Locale) {
  if (!days) return locale === "sl" ? "Ni na voljo" : "Not on this lane";
  const [min, max] = days;
  if (min === max) {
    if (locale === "sl") return min === 1 ? "1 dan" : `${min} dni`;
    return min === 1 ? "1 day" : `${min} days`;
  }
  return locale === "sl" ? `${min}–${max} dni` : `${min}–${max} days`;
}
