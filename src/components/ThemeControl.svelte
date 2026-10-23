<script lang="ts">
	import { onMount } from "svelte";

	type Theme = "light" | "dark" | "system";
	const themes: Theme[] = ["light", "dark", "system"];
	let selected = $state<Theme>("system");
	let colorScheme: MediaQueryList;

	function applyTheme(theme: Theme) {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);
		document.documentElement.classList.toggle("dark", isDark);
	}

	function selectTheme(theme: Theme) {
		selected = theme;
		localStorage.setItem("theme", theme);
		applyTheme(theme);
	}

	onMount(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme && themes.includes(savedTheme as Theme)) {
			selected = savedTheme as Theme;
		}
		applyTheme(selected);

		colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
		const updateSystemTheme = () => {
			if (selected === "system") applyTheme("system");
		};
		colorScheme.addEventListener("change", updateSystemTheme);

		return () => colorScheme.removeEventListener("change", updateSystemTheme);
	});
</script>

<div aria-label="Color theme" class="flex items-center gap-1">
	{#each themes as theme}
		<button
			type="button"
			aria-label={`${theme[0].toUpperCase()}${theme.slice(1)} theme`}
			aria-pressed={selected === theme}
			class="size-8 rounded-full text-stone-500 transition-colors hover:text-stone-950 aria-pressed:text-stone-950 dark:text-stone-400 dark:hover:text-white dark:aria-pressed:text-white"
			onclick={() => selectTheme(theme)}
		>
			{#if theme === "light"}
				<svg
					aria-hidden="true"
					class="mx-auto size-[18px]"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				>
					<circle cx="12" cy="12" r="5" /><path
						d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
					/>
				</svg>
			{:else if theme === "dark"}
				<svg
					aria-hidden="true"
					class="mx-auto size-[18px]"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
				</svg>
			{:else}
				<svg
					aria-hidden="true"
					class="mx-auto size-[18px]"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				>
					<rect x="2" y="3" width="20" height="14" rx="2" /><path
						d="M8 21h8m-4-4v4"
					/>
				</svg>
			{/if}
		</button>
	{/each}
</div>
