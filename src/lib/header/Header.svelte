<script>
	import Search from '$lib/search/Search.svelte';
	import paintLogo from '$lib/header/portalDocsPaint.png';
</script>

<header>
	<nav>
		<div class="home">
			<a href="/">
				<img src={paintLogo} alt="Portal Docs" />
			</a>
		</div>
		<Search />
		<ul class="external">
			<li><a href="https://www.speedrun.com/portal">speedrun.com</a></li>
			<li>
				<a href="https://discord.gg/gQ285vS" title="Discord">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M19.624 5.41A17.962 17.962 0 0 0 15.146 4a.068.068 0 0 0-.072.035c-.194.348-.408.803-.558 1.16a16.523 16.523 0 0 0-5.03 0c-.15-.365-.371-.812-.565-1.16A.07.07 0 0 0 8.849 4 17.913 17.913 0 0 0 4.37 5.41a.064.064 0 0 0-.03.026C1.49 9.755.708 13.968 1.091 18.13c.002.02.013.04.029.052a18.147 18.147 0 0 0 5.493 2.815.07.07 0 0 0 .077-.026c.423-.586.8-1.203 1.124-1.853a.07.07 0 0 0-.038-.098c-.598-.23-1.168-.51-1.716-.83a.072.072 0 0 1-.007-.118c.115-.088.23-.179.34-.27a.067.067 0 0 1 .072-.01c3.6 1.666 7.498 1.666 11.056 0a.067.067 0 0 1 .072.008c.11.092.226.184.342.272.04.03.037.093-.006.119-.548.324-1.118.599-1.717.828a.072.072 0 0 0-.038.099c.33.649.708 1.267 1.123 1.852a.07.07 0 0 0 .078.027 18.086 18.086 0 0 0 5.502-2.815.072.072 0 0 0 .028-.052c.459-4.81-.768-8.99-3.253-12.694a.056.056 0 0 0-.028-.027ZM8.352 15.595c-1.084 0-1.977-1.01-1.977-2.248 0-1.24.875-2.248 1.977-2.248 1.11 0 1.994 1.018 1.977 2.248 0 1.239-.876 2.248-1.977 2.248Zm7.31 0c-1.084 0-1.977-1.01-1.977-2.248 0-1.24.876-2.248 1.977-2.248 1.11 0 1.994 1.018 1.977 2.248 0 1.239-.867 2.248-1.977 2.248Z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://github.com/vuurvos1/portaldocs" title="GitHub">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
					>
						<path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		width: 100vw;
		height: var(--nav-h);
		z-index: 100;
		margin: 0 auto;
		background-color: #fff;
		user-select: none;
		transition: transform 0.2s linear;

		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100vw;

		svg {
			width: 1.25rem;
			height: 1.25rem;
		}

		img {
			height: 1.75rem;
		}
	}

	a {
		color: var(--text);
		transition: 0.1s ease;

		&:hover {
			color: var(--accent-color);
		}
	}

	.home {
		width: 20rem;
		height: var(--nav-h);
		padding: 0 0 0 var(--nav-side);

		a {
			display: flex;
			align-items: center;
			height: 100%;
		}
	}

	.external {
		width: 20rem;
		height: var(--nav-h);
		padding: 0 var(--nav-side) 0 0;
		justify-content: end;

		li {
			margin-left: 1rem;
		}
	}

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;

		a {
			display: flex;
			align-items: center;
			height: 100%;
		}
	}

	li {
		position: relative;
		height: 100%;
	}
</style>
