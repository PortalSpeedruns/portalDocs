import fs from 'fs';

export function get() {
	const files = [];

	for (const file of fs.readdirSync(`../documentation`)) {
		files.push(file);
	}

	return {
		body: {
			files
		}
	};
}
