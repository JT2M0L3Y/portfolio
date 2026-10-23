<script lang="ts">
	interface Props {
		href: string;
		title: string;
		description: string;
		meta?: string;
	}

	let { href, title, description, meta }: Props = $props();
</script>

<li>
	<a
		class="group flex items-center justify-between gap-4 rounded-lg border border-stone-300/80 p-3 no-underline transition-colors hover:border-stone-500 dark:border-stone-700 dark:hover:border-stone-500"
		{href}
	>
		<span>
			<span
				class="block font-sans text-sm font-medium text-stone-800 dark:text-stone-200"
				>{title}</span
			>
			<span class="mt-0.5 block text-sm text-stone-500 dark:text-stone-400"
				>{description}</span
			>
			{#if meta}
				<span class="mt-1 block text-xs text-stone-400 dark:text-stone-500"
					>{meta}</span
				>
			{/if}
		</span>
		<svg
			aria-hidden="true"
			class="size-4 shrink-0 text-stone-500 transition-transform group-hover:translate-x-1 dark:text-stone-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M5 12h14m-6-6 6 6-6 6" />
		</svg>
	</a>
</li>
