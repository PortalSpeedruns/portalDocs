import { error } from '@sveltejs/kit';
import { read_headings } from '$lib/docs/server';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	const headings = read_headings(params.category);

	if (headings.length < 1) {
		throw error(400, 'Invalid category, headings not found');
	}

	return new Response(String(JSON.stringify(headings)));
}
