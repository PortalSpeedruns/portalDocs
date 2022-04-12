import fs from 'fs';

export function get() {
	const paths = [];

	fs.readdir('./', (err, files) => {
		files.forEach((file) => {
			console.log(file);
			paths.push(file);
		});
	});

	return {
		body: {
			paths
		}
	};
}
