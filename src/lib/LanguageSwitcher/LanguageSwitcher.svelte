<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let isOpen = false;
	let langs = 'uk.jpg';

	const toggleDropdown = () => {
		isOpen = !isOpen;
	};

	const changeLanguage = (lang: string) => {
		locale.set(lang);
		langs = lang === 'es' ? 'spain.png' : 'uk.jpg';
		isOpen = false;
	};

	// Close dropdown if clicked outside
	const handleClickOutside = (event: any) => {
		const dropdown = document.getElementById('dropdown-menu');
		const button = document.getElementById('dropdown-button');

		if (dropdown && button) {
			if (!dropdown.contains(event.target) && !button.contains(event.target)) {
				isOpen = false;
			}
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative inline-block text-left">
	<!-- Dropdown toggle button -->
	<div>
		<button
			id="dropdown-button"
			class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none"
			on:click={toggleDropdown}
		>
			<img src={`${base}/flags/` + langs} alt="English" class="w-8 h-8 rounded-full" />
			<svg
				class="-mr-1 ml-2 h-5 w-5 mt-[5px]"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>

	<!-- Dropdown menu -->
	{#if isOpen}
		<div
			id="dropdown-menu"
			class="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[10000]"
		>
			<div class="py-1">
				<button
					class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					on:click={() => changeLanguage('en')}
				>
					<img src={`${base}/flags/uk.jpg`} alt="English" class="w-6 h-6 rounded-full mr-2" />
					English
				</button>
				<button
					class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					on:click={() => changeLanguage('es')}
				>
					<img src={`${base}/flags/spain.png`} alt="Español" class="w-6 h-6 rounded-full mr-2" />
					Español
				</button>
			</div>
		</div>
	{/if}
</div>
