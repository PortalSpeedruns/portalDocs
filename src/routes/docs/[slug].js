import { read } from '$lib/docs/server';

export async function get({ params }) {
	// const { prev, next, section } = await read('docs', params.slug);
	const { section } = await read('docs', params.slug);

	// prev,
	// next,
	return {
		body: {
			section: {
				file: section.file,
				title: section.title,
				content: section.content
			}
		}
	};
}
