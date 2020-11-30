export function Log(caller: string = "Router", ...logs: any): void {
	const name: string = "Pebblo";
	console.log(
		`%c ${name} %c ${caller} `,
		"color: #FF477B; border-radius: 3px 0 0 3px;",
		"background: linear-gradient(#FF602A, #FF0962); color: #fff; border-radius: 0 3px 3px 0;",
		...logs
	);
}

export function getAvatar(user: string) {
    switch(user) {
        case 'andre':
            return 'https://cdn.discordapp.com/avatars/215302985826304010/a_72b33eb7c3e076cc233c9cf68edd27eb.gif?size=1024';
        case 'kyle':
			return 'https://i.gifer.com/2pJC.gif';
		case 'pebblo':
			return 'https://cdn.discordapp.com/icons/564373498336903168/eaca6d5ba992b22f378c00104f6ced66.webp?size=1024';
    }
}