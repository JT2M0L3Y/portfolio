<script lang="ts">
	interface Props {
		title: string;
		href?: string;
		linkLabel?: string;
	}

	let { title, href, linkLabel }: Props = $props();
</script>

<div class="mb-5 flex items-baseline justify-between gap-3">
	<h2
		class="font-sans text-base font-semibold text-stone-900 dark:text-stone-100"
	>
		{title}
	</h2>
	{#if href && linkLabel}
		<a
			class="text-sm text-stone-600 underline decoration-stone-400/40 underline-offset-2 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
			{href}>{linkLabel}</a
		>
	{/if}
</div>
