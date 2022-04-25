<script context="module">
	export const prerender = true;

	export function load({ fetch, params }) {
		return {
			status: 307,
			redirect: `/docs/${params.category}/content.json`
		};
	}
</script>
