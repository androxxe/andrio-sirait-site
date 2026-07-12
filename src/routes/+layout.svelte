<script lang="ts">
	import SidebarProfile from '$lib/components/SidebarProfile.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	const UMAMI_URL = import.meta.env?.VITE_UMAMI_URL ?? '';
	const UMAMI_WEBSITE_ID = import.meta.env?.VITE_UMAMI_WEBSITE_ID ?? '';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@andriosirait" />
	{#if UMAMI_URL && UMAMI_WEBSITE_ID}
		<script defer src={UMAMI_URL} data-website-id={UMAMI_WEBSITE_ID}></script>
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col lg:flex-row">
	<SidebarProfile />
	<div class="flex flex-1 flex-col">
		<div class="relative flex-1 overflow-x-hidden overflow-y-auto px-6 py-10 md:px-12 lg:px-16">
			<slot />
		</div>
		<Footer />
	</div>
</div>
