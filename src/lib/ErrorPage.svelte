<script>
	export let error = 'Something went bad';
	export let status = 404;
</script>

<main>
	<div>
		{#if status === 404}
			<h1>
				4 <span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 906.26 1457.543">
						<path
							fill="#17C0E9"
							d="M254.854 137.158c-34.46 84.407-88.363 149.39-110.934 245.675 90.926-187.569 308.397-483.654 554.729-348.685 135.487 74.216 194.878 270.78 206.058 467.566 21.924 385.996-190.977 853.604-467.585 943.057-174.879 56.543-307.375-86.447-364.527-198.115-176.498-344.82 2.041-910.077 182.259-1109.498zm198.13 7.918C202.61 280.257 4.622 968.542 207.322 1270.414c51.713 77.029 194.535 160.648 285.294 71.318-209.061 31.529-288.389-176.143-301.145-340.765 31.411 147.743 139.396 326.12 309.075 253.588 251.957-107.723 376.778-648.46 269.433-966.817 22.394 134.616 15.572 317.711-47.551 412.087 86.655-230.615 7.903-704.478-269.444-554.749z"
						/>
					</svg>
				</span> 4
			</h1>
			<p>You're not meant to be here 😳😂</p>
		{:else}
			<h1>{status}</h1>
			<p>{error.message}</p>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		align-items: center;

		padding-top: var(--top-offset);
		padding-bottom: var(--top-offset);

		background-image: url('/images/404background.png');
		background-size: cover;
	}

	div {
		max-width: var(--linemax);
		width: var(--linemax);
		margin-left: auto;
		margin-right: auto;
		color: white;
	}

	h1,
	p {
		text-shadow: rgb(30 30 30 / 50%) 0px 0px 0.5rem;
	}

	h1 {
		font-size: 5.5rem;

		span {
			svg {
				width: auto;
				height: 0.8em;
				transform: translateY(0.05em);
			}
		}
	}

	p {
		font-size: 3.5rem;
	}
</style>
