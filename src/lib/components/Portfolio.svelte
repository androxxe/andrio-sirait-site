<script lang="ts">
	import { technologies } from '$lib/data';

	let {
		portfolio
	}: {
		portfolio: {
			slug: string;
			thumbnail: string;
			name: string;
			short_description: string;
			tech_stack: string[];
		};
	} = $props();
</script>

<a href="/portfolio/{portfolio.slug}" data-umami-event="[PORTFOLIO][CARD] {portfolio.name}" class="block group/card">
	<div
		class="overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/50"
	>
		<div class="relative h-44 w-full overflow-hidden">
			<img
				class="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
				src={portfolio.thumbnail}
				alt="Thumbnail {portfolio.name}"
				loading="lazy"
			/>
			<div class="absolute right-2 top-2 flex gap-1">
				{#each portfolio.tech_stack.slice(0, 4) as tech_stack}
					{@const tech = technologies.find((t) => t.code === tech_stack)}
					{#if tech}
						<div class="h-5 w-5 overflow-hidden rounded bg-surface/80 p-0.5 shadow-sm">
							<img src={tech.logo_path} alt={tech.name} class="h-full w-full object-contain" />
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="p-4">
			<h3 class="mb-1 text-sm font-semibold text-text-primary">{portfolio.name}</h3>
			<p class="text-xs leading-relaxed text-text-tertiary">{portfolio.short_description}</p>
		</div>
	</div>
</a>
