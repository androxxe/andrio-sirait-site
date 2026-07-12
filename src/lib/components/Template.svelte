<script lang="ts">
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<div class="relative">
	{@render children()}
</div>
