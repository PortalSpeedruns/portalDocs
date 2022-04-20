<script context="module">
	export const prerender = true;

	// funky stuff to get this endpoint to render properly

	export function load() {
		return {
			status: 307,
			redirect: '/content.json'
		};
	}
</script>
