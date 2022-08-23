import { error } from '@sveltejs/kit';
import { read_folder } from '$lib/docs/server';

export async function load() {
	const docTypes = await read_folder('');

	if (docTypes) {
		return { docs: docTypes };
	}

	throw error(404, 'Not found');
}
