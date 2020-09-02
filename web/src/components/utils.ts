export function Log(caller: string = "Router", ...logs: any): void {
	const name: string = "Pebblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"color: #FF477B; border-radius: 3px 0 0 3px;",
		"background: linear-gradient(#FF602A, #FF0962); color: #fff; border-radius: 0 3px 3px 0;",
		...logs
	);
}