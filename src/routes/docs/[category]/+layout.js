/** @type {import('./$types').LayoutLoad} */
export async function load({ params, fetch }) {
	const res = await fetch(`/docs/${params.category}.json`);
	const content = await fetch(`/docs/${params.category}/content.json`);

	return {
		sections: await res.json(),
		content: await content.json(),
		params
	};
}
