import { read } from '$lib/docs/server';

export const get = async ({ params }) => {
	const { prev, next, section } = await read('docs', params.slug);

	return {
		body: {
			prev,
			next,
			section
		}
	};
};
