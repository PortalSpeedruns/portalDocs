<script context="module">
	export const prerender = true;

	export function load({ params }) {
		return {
			status: 307,
			redirect: `/docs/docs/introduction`
		};
	}
</script>

<!-- TODO list all docs -->
