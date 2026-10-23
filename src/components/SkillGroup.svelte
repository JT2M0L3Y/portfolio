<script lang="ts">
	interface Props {
		category: string;
		skills: string[];
	}

	let { category, skills }: Props = $props();
</script>

<section class="animate">
	<h2 class="mb-4 font-sans text-base font-semibold text-stone-900 dark:text-stone-100">
		{category}
	</h2>
	<ul class="flex flex-wrap gap-2">
		{#each skills as skill}
			<li class="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300">
				{skill}
			</li>
		{/each}
	</ul>
</section>
