<script lang="ts">
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import type { IExperience } from '$lib/types';

	dayjs.extend(advancedFormat);

	let { experience }: { experience: IExperience } = $props();
</script>

<li class="ml-6 pb-8 last:pb-0">
	<span
		class="bg-surface ring-accent absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full ring-2"
	>
		<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
	</span>
	{#each experience.working_date as working_date}
		<div class="mb-2 flex flex-wrap items-center gap-2 font-mono text-xs text-text-tertiary">
			<span class="text-accent">
				{dayjs(`${working_date.start_year}-${working_date.start_month}-01`).format('MMM YYYY')} — {working_date.end_month && working_date.end_year
					? dayjs(`${working_date.end_year}-${working_date.end_month}-01`).format('MMM YYYY')
					: 'Now'}
			</span>
			<span class="text-text-tertiary">·</span>
			<span>{working_date.status}</span>
			{#if experience.location}
				<span class="text-text-tertiary">·</span>
				<span>{experience.location}</span>
			{/if}
		</div>
	{/each}
	<h3 class="text-base font-semibold text-text-primary">{experience.company}</h3>
	<p class="mb-2 font-mono text-sm text-text-secondary">{experience.position}</p>
	<p class="text-sm leading-relaxed text-text-tertiary">{experience.description}</p>
</li>
