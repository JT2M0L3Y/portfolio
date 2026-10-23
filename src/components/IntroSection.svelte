<script lang="ts">
	interface Props {
		heading: string;
		paragraphs: string[];
	}

	let { heading, paragraphs }: Props = $props();
</script>

<section aria-labelledby="intro-heading" class="animate">
	<h1
		id="intro-heading"
		class="mb-5 font-sans text-base font-semibold text-stone-900 dark:text-stone-100"
	>
		{heading}
	</h1>
	<article>
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</article>
</section>
