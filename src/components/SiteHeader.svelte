<script lang="ts">
	interface Props {
		siteName: string;
	}

	let { siteName }: Props = $props();
</script>

<header
	class="fixed inset-x-0 top-0 z-50 bg-stone-100/80 py-5 backdrop-blur-sm dark:bg-stone-900/80"
>
	<div
		class="mx-auto flex w-full max-w-3xl flex-wrap justify-between gap-y-2 px-6 sm:px-10"
	>
		<a
			class="font-semibold text-stone-900 no-underline transition-colors hover:text-stone-600 dark:text-stone-100 dark:hover:text-white"
			href="/">{siteName}</a
		>
		<nav aria-label="Main navigation" class="flex gap-2 text-sm">
			<a
				class="text-stone-600 underline decoration-stone-400/40 underline-offset-2 transition-colors hover:text-stone-950 dark:text-stone-300 dark:decoration-stone-500/50 dark:hover:text-white"
				href="/about">about</a
			><span aria-hidden="true">/</span>
			<a
				class="text-stone-600 underline decoration-stone-400/40 underline-offset-2 transition-colors hover:text-stone-950 dark:text-stone-300 dark:decoration-stone-500/50 dark:hover:text-white"
				href="/skills">skills</a
			><span aria-hidden="true">/</span>
			<a
				class="text-stone-600 underline decoration-stone-400/40 underline-offset-2 transition-colors hover:text-stone-950 dark:text-stone-300 dark:decoration-stone-500/50 dark:hover:text-white"
				href="/work">work</a
			><span aria-hidden="true">/</span>
			<a
				class="text-stone-600 underline decoration-stone-400/40 underline-offset-2 transition-colors hover:text-stone-950 dark:text-stone-300 dark:decoration-stone-500/50 dark:hover:text-white"
				href="/projects">projects</a
			>
		</nav>
	</div>
</header>
