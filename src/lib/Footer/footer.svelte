<script>
	import Heart from 'svelte-material-icons/Heart.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
</script>

<footer id="footer" class="flex md:flex-row flex-col md:justify-between dark:bg-gray-800 p-2">
	<div class="flex ps-8 items-center justify-center md:justify-start">
		<p class="text-xs md:text-sm font-bold pe-1">Built with Svelte</p>
		<Heart class="inline-block" size="1.5rem" color="red" />
		<div class="ms-4 flex items-center">
			<a href="https://www.linkedin.com/in/cristian-david-pacheco-torres-0859ba110/">
				<Linkedin class="fill-black dark:fill-white" size="2.0rem" />
			</a>
			<a
				class="text-xs font-bold"
				href="https://www.linkedin.com/in/cristian-david-pacheco-torres-0859ba110/"
				>Cristian David Pacheco Torres</a
			>
		</div>
		<div class="ms-4 flex items-center">
			<a href="https://github.com/cristiandpt">
				<Github class="fill-black dark:fill-white" size="2.0rem" />
			</a>
			<a class="text-xs font-bold" href="https://github.com/cristiandpt">@cristiandpt</a>
		</div>
	</div>
	<div class="mx-0 px-8">
		<p class="text-xs text-center md:text-end text-black font-bold dark:text-white">
			© {new Date().getFullYear()} Cristian David Pacheco
		</p>
		<p class="text-xs md:text-sm text-center md:text-end text-black font-bold dark:text-white">
			All rights reserved
		</p>
	</div>
</footer>
