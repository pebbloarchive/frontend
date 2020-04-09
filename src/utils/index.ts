export function Log(caller: string = "Router", ...logs: any): void {
	const name: string = "Pebblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"background: #5E6563; color: #ffffff; border-radius: 3px 0 0 3px;",
		"background: #262928; color: #90D5EC; border-radius: 0 3px 3px 0;",
		...logs
	);
}