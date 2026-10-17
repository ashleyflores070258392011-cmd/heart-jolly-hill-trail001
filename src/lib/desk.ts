export type Booking = {
  ref: string;
  at: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  message: string;
};

export type KeptQuote = {
  id: string;
  at: string;
  summary: string;
  total: string;
};

const BOOKINGS = "gel.bookings";
const QUOTES = "gel.quotes";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as T[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, rows: T[]) {
  localStorage.setItem(key, JSON.stringify(rows.slice(0, 8)));
}

export function loadBookings() {
  return read<Booking>(BOOKINGS);
}

export function saveBooking(booking: Booking) {
  write(BOOKINGS, [booking, ...loadBookings().filter((row) => row.ref !== booking.ref)]);
}

export function removeBooking(ref: string) {
  write(
    BOOKINGS,
    loadBookings().filter((row) => row.ref !== ref),
  );
}

export function loadQuotes() {
  return read<KeptQuote>(QUOTES);
}

export function saveQuote(quote: KeptQuote) {
  write(QUOTES, [quote, ...loadQuotes().filter((row) => row.summary !== quote.summary)].slice(0, 4));
}

export function nextRef() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `GEL-D-${n}`;
}
