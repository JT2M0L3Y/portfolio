<script lang="ts">
	import ThemeControl from "./ThemeControl.svelte";

	interface Props {
		siteName: string;
	}

	let { siteName }: Props = $props();
</script>

<footer
	class="flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-stone-500 dark:text-stone-400"
>
	<p>&copy; {new Date().getFullYear()} | {siteName}</p>
	<ThemeControl />
</footer>
