//#region node_modules/.nitro/vite/services/ssr/assets/desk-CAuImmaS.js
var BOOKINGS = "gel.bookings";
var QUOTES = "gel.quotes";
function read(key) {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function write(key, rows) {
	localStorage.setItem(key, JSON.stringify(rows.slice(0, 8)));
}
function loadBookings() {
	return read(BOOKINGS);
}
function saveBooking(booking) {
	write(BOOKINGS, [booking, ...loadBookings().filter((row) => row.ref !== booking.ref)]);
}
function removeBooking(ref) {
	write(BOOKINGS, loadBookings().filter((row) => row.ref !== ref));
}
function loadQuotes() {
	return read(QUOTES);
}
function saveQuote(quote) {
	write(QUOTES, [quote, ...loadQuotes().filter((row) => row.summary !== quote.summary)].slice(0, 4));
}
function nextRef() {
	return `GEL-D-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
//#endregion
export { saveBooking as a, removeBooking as i, loadQuotes as n, saveQuote as o, nextRef as r, loadBookings as t };
