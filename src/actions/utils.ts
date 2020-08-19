export function Log(caller: string = "Router", ...logs: any): void {
	const name: string = "Pebblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"color: #E88A4B; border-radius: 3px 0 0 3px;",
		"background: #262928; color: #fff; border-radius: 0 3px 3px 0;",
		...logs
	);
}