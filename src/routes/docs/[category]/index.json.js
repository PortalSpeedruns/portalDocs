import { read_headings } from '$lib/docs/server';

export function get({ params }) {
	return {
		body: read_headings(params.category)
	};
}
