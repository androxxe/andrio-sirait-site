<script lang="ts">
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<h2 class="mb-6 mt-10 flex items-center gap-3 border-b border-border pb-3 font-mono text-lg font-medium text-text-primary">
	<span class="text-accent">/</span>
	{@render children()}
</h2>
