export function Log(caller: string = "Router", ...logs: any): void {
	const name: string = "Pebblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"color: #FF477B; border-radius: 3px 0 0 3px;",
		"background: linear-gradient(#FF602A, #FF0962); color: #fff; border-radius: 0 3px 3px 0;",
		...logs
	);
}

export function abbreivate(n: any) {
		if (n < 1e3) return n;
		if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
		if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
		if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
		if (n >= 1e12) return + (n / 1e12).toFixed(1) + "T";
}
