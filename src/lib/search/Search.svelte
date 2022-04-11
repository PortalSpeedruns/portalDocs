<script>
	import { browser } from '$app/env';

	let nav;
	if (browser) {
		nav = navigator;
	}
</script>

<div class="searchContainer">
	<input
		type="search"
		on:input={(e) => {}}
		on:mousedown|preventDefault={() => {}}
		on:touchstart|preventDefault={() => {}}
		class="searchInput"
		id="search"
	/>
	<label for="#search">
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				fill="currentColor"
				d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
			/>
		</svg>
		<span>Search</span> <kbd>{nav?.platform === 'MacIntel' ? '⌘' : 'Ctrl'}</kbd>
		<kbd>K</kbd>
	</label>
</div>

<style lang="scss">
	.searchContainer {
		display: flex;
		position: relative;

		svg {
			position: absolute;
			width: 1.25rem;
			height: 1.25rem;
			left: 0.65rem;
			top: calc(50% - 0.625rem);
			color: #ccc;
		}

		input {
			height: 2rem;
			padding: 0.5em 1.25em;
			border-radius: 2rem;

			border: 1px solid #ccc;
		}

		label {
			color: #666;
			position: absolute;
			top: calc(50% - 0.5rem);
			width: 100%;
			text-align: center;
			pointer-events: none;
			font-size: 0.7rem;
			text-transform: uppercase;
		}

		kbd {
			display: none;
			background: #eee;
			border: 1px solid #ddd;
			padding: 0rem 0.2em 0.05rem 0.2em;
			color: inherit;
			font-size: inherit;
			font-family: inherit;
			border-radius: 2px;

			@media (min-width: 800px) {
				display: inline;
			}
		}

		label,
		kbd {
			text-align: center;
		}
	}
</style>
