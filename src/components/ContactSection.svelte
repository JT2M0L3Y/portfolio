<script lang="ts">
	interface ContactLink {
		label: string;
		href: string;
		icon: "github" | "linkedin";
	}

	interface Props {
		description: string;
		links: readonly ContactLink[];
	}

	let { description, links }: Props = $props();
</script>

<section class="animate">
	<h2
		class="mb-3 font-sans text-base font-semibold text-stone-900 dark:text-stone-100"
	>
		Let's Connect
	</h2>
	<article><p>{description}</p></article>
	{#if links.length}
		<ul class="mt-4 flex flex-wrap gap-3 text-sm">
			{#each links as link}
				<li>
					<a
						class="inline-flex items-center gap-2 text-stone-600 underline decoration-stone-400/40 underline-offset-2 transition-colors hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{#if link.icon === "github"}
							<svg
								aria-hidden="true"
								class="size-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.4-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else}
							<svg
								aria-hidden="true"
								class="size-4"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.38h2.95v9.52ZM6.45 8.08a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.48 10.82h-2.94v-4.63c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.71H9.74V9.38h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.55 1.96 3.55 4.51v5.23Z"
								/>
							</svg>
						{/if}
						<span>{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
