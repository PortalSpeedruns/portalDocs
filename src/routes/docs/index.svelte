<script context="module">
	export const prerender = true;

	export function load() {
		return {
			status: 307,
			redirect: '/docs/introduction'
		};
	}
</script>
