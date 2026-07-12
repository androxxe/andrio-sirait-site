<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Template from '$lib/components/Template.svelte';
	import Title from '$lib/components/Title.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { portfolios, technologies, profile } from '$lib/data';
	import { ChevronLeft, Lock } from '@lucide/svelte';

	const slug = $derived(page.params.slug);
	const portfolio = $derived(portfolios.find((item) => item.slug === slug));

	let isOpen = $state(false);
	let imageIndex = $state(0);

	function handleImageClick(index: number) {
		imageIndex = index;
		isOpen = true;
	}

	$effect(() => {
		if (!portfolio) {
			goto('/portfolio');
		}
	});
</script>

<svelte:head>
	{#if portfolio}
		<title>{portfolio.name} — Portfolio | {profile.name}</title>
		<meta name="description" content={portfolio.short_description} />
	{/if}
</svelte:head>

{#if portfolio}
	<Template>
		<button
			type="button"
			class="mb-4 flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
			onclick={() => history.back()}
		>
			<ChevronLeft size={16} />
			Back
		</button>

		{#if portfolio.images.length > 0}
			<div class="mb-8 overflow-hidden rounded-lg border border-border">
				<img
					src={portfolio.images[0].image}
					alt={portfolio.name}
					class="h-auto w-full object-cover"
				/>
			</div>
		{/if}

		<Title>{portfolio.name}</Title>

		<div class="mb-6 flex flex-wrap gap-2">
			{#each portfolio.platform as platform}
				<span class="rounded border border-border bg-surface px-2.5 py-1 font-mono text-xs text-text-secondary">
					{platform}
				</span>
			{/each}
		</div>

		<p class="mb-8 text-sm leading-relaxed text-text-secondary">{portfolio.description ?? 'No Description'}</p>

		<div class="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
			<div>
				<p class="mb-2 font-mono text-xs text-text-tertiary">Access</p>
				{#if portfolio.access?.is_public}
					{#each portfolio.access.links as link}
						<a href={link.url} class="block text-sm text-accent underline underline-offset-2">
							{link.label}
						</a>
					{/each}
				{:else}
					<span class="flex items-center gap-2 text-sm text-text-tertiary">
						<Lock size={14} />
						Private Access
					</span>
				{/if}
			</div>
			<div>
				<p class="mb-2 font-mono text-xs text-text-tertiary">Role</p>
				<p class="text-sm text-text-primary">{portfolio.role}</p>
			</div>
			<div>
				<p class="mb-2 font-mono text-xs text-text-tertiary">Technology</p>
				<div class="flex flex-wrap gap-2">
					{#each portfolio.tech_stack as tech_code}
						{@const technology = technologies.find((t) => t.code === tech_code)}
						{#if technology}
							<div class="flex items-center gap-1.5 rounded border border-border bg-surface px-2 py-1">
								<img
									src={technology.logo_path}
									alt={technology.name}
									class="h-4 w-4 object-contain"
									loading="lazy"
								/>
								<span class="text-xs text-text-secondary">{technology.name}</span>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		{#if portfolio.images.length > 1}
			<Title>Screenshots</Title>
			<PhotoGallery images={portfolio.images} onImageClick={handleImageClick} />
		{/if}

		<div class="mt-10 border-t border-border pt-4 text-center">
			<p class="font-mono text-xs text-text-tertiary">
				Some access links may be broken due to each business process.
			</p>
		</div>
	</Template>

	<Lightbox images={portfolio.images} currentIndex={imageIndex} open={isOpen} onClose={() => (isOpen = false)} />
{/if}
