import fs from 'fs';

export function get() {
	const files = [];

	console.log('../docs');
	for (const file of fs.readdirSync(`../documentation`)) {
		console.log(file);
	}

	console.log('./');
	for (const file of fs.readdirSync(`./`)) {
		console.log(file);
	}

	console.log('../');
	for (const file of fs.readdirSync(`../`)) {
		console.log(file);
	}

	return {
		body: {
			files,
			test: 'lorem ipsum'
		}
	};
}
