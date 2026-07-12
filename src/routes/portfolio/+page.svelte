<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Template from '$lib/components/Template.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import { portfolios, technologies, profile } from '$lib/data';
	import { cn, getUniqueValues } from '$lib/helpers';
	import { AlertCircle } from '@lucide/svelte';
	import qs from 'qs';

	const groupedTechnologies = $derived(
		technologies.reduce(
			(acc, t) => {
				acc[t.type] = acc[t.type] || [];
				acc[t.type].push(t);
				return acc;
			},
			{} as Record<string, typeof technologies>
		)
	);

	let selectedTechnologies = $state<string[]>([]);
	let selectedPlatforms = $state<string[]>([]);

	$effect(() => {
		if (browser) {
			const params = qs.parse(window.location.search.slice(1));
			selectedTechnologies = (params.technology as string[]) || [];
			selectedPlatforms = (params.platform as string[]) || [];
		}
	});

	const filteredPortfolio = $derived(
		portfolios.filter((p) => {
			if (selectedTechnologies.length > 0 && !p.tech_stack.some((t) => selectedTechnologies.includes(t))) {
				return false;
			}
			if (selectedPlatforms.length > 0 && !p.platform.some((pl) => selectedPlatforms.includes(pl))) {
				return false;
			}
			return true;
		})
	);

	function handleFilter(code: string, type: string) {
		let params: { platform: string[]; technology: string[] } = {
			platform: [...selectedPlatforms],
			technology: [...selectedTechnologies]
		};

		const targetArray = type === 'platform' ? params.platform : params.technology;
		const idx = targetArray.indexOf(code);

		if (idx >= 0) {
			targetArray.splice(idx, 1);
		} else {
			targetArray.push(code);
			if (type === 'platform') {
				params.platform = getUniqueValues(params.platform);
			} else {
				params.technology = getUniqueValues(params.technology);
			}
		}

		selectedTechnologies = params.technology;
		selectedPlatforms = params.platform;

		const queryString = qs.stringify(params, { encode: false });
		goto(`/portfolio?${queryString}`, { replaceState: true });
	}
</script>

<svelte:head>
	<title>Portfolio | {profile.name}</title>
	<meta name="description" content={`Portfolio projects by ${profile.name}`} />
</svelte:head>

<Template>
	<PageTransition>
		<div class="mb-6 flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
			<AlertCircle class="mt-0.5 flex-shrink-0 text-xl text-accent" />
			<div class="text-sm text-text-secondary">
				<strong class="text-text-primary">Note:</strong> The projects showcased here are freelance and personal
				projects. Work done during office hours remains proprietary to the respective companies.
			</div>
		</div>

		<div class="flex flex-col gap-6 lg:flex-row">
			<aside class="w-full shrink-0 lg:w-56">
				<div class="space-y-4">
					{#each Object.entries(groupedTechnologies) as [type, techs]}
						<div>
							<span class="mb-2 block font-mono text-xs uppercase text-text-tertiary">{type}</span>
							<div class="flex flex-wrap gap-2 lg:block lg:space-y-1.5">
								{#each techs as technology}
									{@const isSelected =
										selectedTechnologies.includes(technology.code) || selectedPlatforms.includes(technology.code)}
									<button
										data-umami-event="[PORTFOLIO][TECH STACK] {technology.name}"
										class={cn(
											'rounded border px-2.5 py-1 text-left text-xs transition-all duration-150',
											isSelected
												? 'border-accent bg-accent/10 text-accent'
												: 'border-border bg-surface text-text-secondary hover:border-border-accent hover:text-text-primary'
										)}
										onclick={() => handleFilter(technology.code, technology.type)}
									>
										{technology.name}
									</button>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</aside>

			<div class="min-w-0 flex-1">
				{#if filteredPortfolio.length > 0}
					<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{#each filteredPortfolio as portfolio}
							<Portfolio {portfolio} />
						{/each}
					</div>
				{:else}
					<div class="flex h-64 flex-col items-center justify-center space-y-3">
						<AlertCircle class="text-4xl text-text-tertiary" />
						<p class="text-sm text-text-tertiary">No Projects Found</p>
					</div>
				{/if}
			</div>
		</div>
	</PageTransition>
</Template>
