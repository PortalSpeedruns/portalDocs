import { read_folder } from '$lib/docs/server';

export async function get() {
	const docTypes = await read_folder('');

	return {
		body: {
			docs: docTypes
		}
	};
}
