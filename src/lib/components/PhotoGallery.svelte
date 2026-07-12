<script lang="ts">
	let {
		images,
		onImageClick
	}: {
		images: { image: string; caption: string }[];
		onImageClick: (index: number) => void;
	} = $props();
</script>

<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
	{#each images as img, index}
		<button
			type="button"
			class="overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:border-accent/50"
			onclick={() => onImageClick(index)}
		>
			<img
				src={img.image}
				alt={img.caption || `Image ${index + 1}`}
				class="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
				loading="lazy"
			/>
		</button>
	{/each}
</div>
