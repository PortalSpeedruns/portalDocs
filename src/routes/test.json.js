import fs from 'fs';

export function get() {
	const files = [];

	if (fs.existsSync('../documentation')) {
		// Do something
		files.push('../docs');
		for (const file of fs.readdirSync(`../documentation`)) {
			files.push(file);
		}
	}

	if (fs.existsSync('./')) {
		// Do something
		files.push('./');
		for (const file of fs.readdirSync(`./`)) {
			files.push(file);
		}
	}

	if (fs.existsSync('../')) {
		// Do something
		files.push('../');
		for (const file of fs.readdirSync(`../`)) {
			files.push(file);
		}
	}

	if (fs.existsSync('../../')) {
		// Do something
		files.push('../');
		for (const file of fs.readdirSync(`../`)) {
			files.push(file);
		}
	}

	if (fs.existsSync('../../documentation')) {
		// Do something
		files.push('../../docs');
		for (const file of fs.readdirSync(`../`)) {
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
