<script lang="ts">
	interface Props {
		company: string;
		role: string;
		startDate: Date;
		endDate?: Date;
		description?: string;
	}

	let { company, role, startDate, endDate, description }: Props = $props();
	const dateFormatter = new Intl.DateTimeFormat("en", {
		month: "short",
		year: "numeric",
	});
</script>

<li class="py-3">
	<p class="text-sm text-stone-500 dark:text-stone-400">
		{dateFormatter.format(startDate)} – {endDate
			? dateFormatter.format(endDate)
			: "Current"}
	</p>
	<h3
		class="mt-1 font-sans text-sm font-semibold text-stone-800 dark:text-stone-200"
	>
		{company}
	</h3>
	<p class="text-sm text-stone-500 dark:text-stone-400">{role}</p>
	{#if description}
		<p class="mt-3 font-serif leading-6 text-stone-600 dark:text-stone-300">
			{description}
		</p>
	{/if}
</li>
