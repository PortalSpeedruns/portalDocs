export const prerender = true;

export async function load({ fetch, params }) {
	const res = await fetch(`/docs/${params.category}/${params.slug}.json`);
	const { prev, next, section } = await res.json();

	return {
		prev,
		next,
		section,
		params
	};
}
