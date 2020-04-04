export function Logger(caller: string = "Router", ...logs: any): void {
	const name: string = "Peblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"background: #17171E; color: #e8e8e8; border-radius: 3px 0 0 3px;",
		"background: #00fff0; color: #17171E; border-radius: 0 3px 3px 0;",
		...logs
	);
}