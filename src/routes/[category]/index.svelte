<script context="module">
	export const prerender = true;

	export function load({ url, params }) {
		return {
			status: 307,
			redirect: `/${params.category}/introduction`
		};
	}
</script>
