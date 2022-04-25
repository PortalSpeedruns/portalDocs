import { read } from '$lib/docs/server';

export async function get({ params }) {
	const { prev, next, section } = await read(params.category, params.slug);

	return {
		body: {
			prev,
			next,
			section: {
				file: section.file,
				title: section.title,
				content: section.content
			}
		}
	};
}
