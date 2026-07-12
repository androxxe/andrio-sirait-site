<script lang="ts">
	import type { IEducation } from '$lib/types';

	let { education }: { education: IEducation } = $props();
</script>

<li class="ml-6 pb-8 last:pb-0">
	<span class="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent"></span>
	{#if education?.start_year && education?.end_year}
		<time class="mb-1 font-mono text-xs text-accent">
			{education.start_year} — {education.end_year}
		</time>
	{/if}
	<h3 class="text-sm font-semibold text-text-primary">{education.degree}</h3>
	<p class="mb-1 font-mono text-xs text-text-secondary">{education.school}</p>
	{#if education.description}
		<p class="text-sm leading-relaxed text-text-tertiary">{education.description}</p>
	{/if}
</li>
