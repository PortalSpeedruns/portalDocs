<script context="module">
	export const prerender = true;

	export function load({ params }) {
		// TODO redirect to first file in category
		return {
			status: 307,
			redirect: `/docs/${params.category}/introduction`
		};
	}
</script>
