import fs from 'fs';

export function get() {
	const files = [];

	if (fs.existsSync('../documentation')) {
		// Do something
		console.log('../docs');
		for (const file of fs.readdirSync(`../documentation`)) {
			console.log(file);
			files.push(file);
		}
	}

	if (fs.existsSync('./')) {
		// Do something
		console.log('./');
		for (const file of fs.readdirSync(`./`)) {
			console.log(file);
			files.push(file);
		}
	}

	if (fs.existsSync('../')) {
		// Do something
		console.log('../');
		for (const file of fs.readdirSync(`../`)) {
			console.log(file);
			files.push(file);
		}
	}

	return {
		body: {
			files,
			test: 'lorem ipsum'
		}
	};
}
