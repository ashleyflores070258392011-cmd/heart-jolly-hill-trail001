//#region node_modules/.nitro/vite/services/ssr/assets/pricing-jXzpwRFf.js
var RATE = {
	courier: {
		base: [
			14,
			26,
			42,
			78
		],
		kg: [
			1.5,
			2.2,
			3.4,
			6.4
		],
		days: [
			[1, 1],
			[1, 2],
			[2, 4],
			[3, 6]
		]
	},
	freight: {
		base: [
			38,
			64,
			98,
			210
		],
		kg: [
			.42,
			.62,
			.88,
			1.55
		],
		days: [
			[1, 2],
			[1, 3],
			[3, 6],
			[10, 22]
		]
	},
	air: {
		base: [
			0,
			86,
			110,
			148
		],
		kg: [
			0,
			4.1,
			4.8,
			6.6
		],
		days: [
			[0, 0],
			[1, 2],
			[1, 3],
			[2, 5]
		]
	},
	sea: {
		base: [
			0,
			0,
			168,
			280
		],
		kg: [
			0,
			0,
			.34,
			.55
		],
		days: [
			[0, 0],
			[0, 0],
			[9, 16],
			[20, 36]
		]
	},
	supply: {
		base: [
			160,
			220,
			290,
			420
		],
		kg: [
			.8,
			1.05,
			1.35,
			2.1
		],
		days: [
			[2, 3],
			[2, 4],
			[4, 7],
			[8, 18]
		]
	}
};
function zoneOf(from, to) {
	if (from === "home" && to === "home") return 0;
	if (from === "world" || to === "world") return 3;
	return (from === "home" || from === "near") && (to === "home" || to === "near") ? 1 : 2;
}
function modeAvailable(mode, zone) {
	if (mode === "sea" && zone < 2) return false;
	if (mode === "air" && zone < 1) return false;
	return true;
}
function euros(value) {
	return Math.max(0, Math.round(value));
}
function volumetricKg(dims, mode) {
	const divisor = mode === "air" || mode === "courier" ? 5e3 : 4e3;
	return dims.l * dims.w * dims.h / divisor;
}
function quoteLine(input) {
	const zone = zoneOf(input.from, input.to);
	const available = modeAvailable(input.mode, zone);
	const rate = RATE[input.mode];
	const actual = Math.max(.1, input.kg);
	let chargeable = actual;
	let volumetric = false;
	if (input.dims && input.dims.l > 0 && input.dims.w > 0 && input.dims.h > 0) {
		const vol = volumetricKg(input.dims, input.mode);
		if (vol > actual) {
			chargeable = Math.round(vol * 10) / 10;
			volumetric = true;
		}
	}
	if (!available) return {
		mode: input.mode,
		available: false,
		chargeableKg: Math.round(chargeable * 10) / 10,
		volumetric,
		linehaul: 0,
		handling: 0,
		insurance: 0,
		priorityFee: 0,
		total: 0,
		days: null
	};
	const linehaul = euros(rate.base[zone] + rate.kg[zone] * chargeable);
	const perPiece = input.mode === "courier" ? 3.5 : 6.5;
	const handling = euros(Math.max(0, input.pieces - 1) * perPiece);
	const insurance = input.insuredValue > 0 ? euros(Math.max(6, input.insuredValue * .012)) : 0;
	const priorityFee = input.priority && input.mode !== "sea" ? euros(linehaul * .16) : 0;
	let days = rate.days[zone];
	if (input.priority && input.mode !== "sea" && days) {
		const min = Math.max(1, days[0] - 1);
		days = [min, Math.max(min, days[1] - 1)];
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
		days
	};
}
var MODES = [
	"courier",
	"freight",
	"air",
	"sea",
	"supply"
];
function quoteAll(input) {
	return MODES.map((mode) => quoteLine({
		...input,
		mode
	}));
}
function formatEur(value, locale) {
	return new Intl.NumberFormat(locale === "sl" ? "sl-SI" : "en-GB", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	}).format(value);
}
function formatDays(days, locale) {
	if (!days) return locale === "sl" ? "Ni na voljo" : "Not on this lane";
	const [min, max] = days;
	if (min === max) {
		if (locale === "sl") return min === 1 ? "1 dan" : `${min} dni`;
		return min === 1 ? "1 day" : `${min} days`;
	}
	return locale === "sl" ? `${min}–${max} dni` : `${min}–${max} days`;
}
//#endregion
export { quoteLine as a, quoteAll as i, formatDays as n, formatEur as r, MODES as t };
