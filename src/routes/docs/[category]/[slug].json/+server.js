import { error } from '@sveltejs/kit';
import { read } from '$lib/docs/server';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const { prev, next, section } = await read(params.category, params.slug);

	if (!section) {
		throw error(400, 'Could not find section');
	}

	return new Response(
		String(
			JSON.stringify({
				prev,
				next,
				section: {
					file: section.file,
					title: section.title,
					content: section.content
				}
			})
		)
	);
}
