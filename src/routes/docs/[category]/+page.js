import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load({ params }) {
	// TODO redirect to first file in category
	throw redirect(307, `/docs/${params.category}/introduction`);
}
