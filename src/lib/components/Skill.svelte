<script lang="ts">
	import { cn } from '$lib/helpers';

	let {
		src,
		name,
		is_expertise = false
	}: {
		src: string;
		name: string;
		is_expertise?: boolean;
	} = $props();

	let hasError = $state(false);
</script>

<div
	class={cn(
		'flex items-center gap-2 rounded border px-3 py-2 transition-colors duration-150',
		is_expertise ? 'border-accent bg-accent/5 text-accent' : 'border-border bg-surface text-text-secondary'
	)}
>
	{#if src && !hasError}
		<img
			alt={name}
			{src}
			class="h-5 w-5 rounded object-contain"
			onerror={() => (hasError = true)}
		/>
	{:else}
		<span class="flex h-5 w-5 items-center justify-center rounded bg-border font-mono text-[10px] text-text-tertiary">
			{name.charAt(0)}
		</span>
	{/if}
	<span class="text-sm">{name}</span>
	{#if is_expertise}
		<span class="ml-1 rounded bg-accent/20 px-1.5 py-0.5 font-mono text-[10px] text-accent">Expert</span>
	{/if}
</div>
