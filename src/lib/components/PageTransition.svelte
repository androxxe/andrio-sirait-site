<script lang="ts">
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<div class="animate-[slideIn_0.3s_ease-out]">
	{@render children()}
</div>

<style>
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
