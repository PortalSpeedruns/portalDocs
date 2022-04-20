<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch('/content.json');

		return {
			props: {
				sections: await res.json()
			}
		};
	}
</script>
