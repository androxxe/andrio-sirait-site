<script lang="ts">
	import { X, ChevronLeft, ChevronRight } from '@lucide/svelte';

	let {
		images,
		currentIndex,
		open,
		onClose
	}: {
		images: { image: string; caption: string }[];
		currentIndex: number;
		open: boolean;
		onClose: () => void;
	} = $props();

	let index = $state(0);

	$effect(() => {
		index = currentIndex;
	});

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') onClose();
		if (e.key === 'ArrowLeft' && index > 0) index--;
		if (e.key === 'ArrowRight' && index < images.length - 1) index++;
	}

	$effect(() => {
		if (open) {
			document.addEventListener('keydown', handleKeydown);
			return () => document.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onclick={onClose}>
		<button
			type="button"
			class="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
			onclick={(e) => { e.stopPropagation(); onClose(); }}
		>
			<X size={24} />
		</button>

		{#if index > 0}
			<button
				type="button"
				class="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
				onclick={(e) => { e.stopPropagation(); index--; }}
			>
				<ChevronLeft size={32} />
			</button>
		{/if}

		{#if index < images.length - 1}
			<button
				type="button"
				class="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
				onclick={(e) => { e.stopPropagation(); index++; }}
			>
				<ChevronRight size={32} />
			</button>
		{/if}

		<div class="flex max-h-[90vh] max-w-[90vw] flex-col items-center" onclick={(e) => e.stopPropagation()}>
			<img
				src={images[index]?.image}
				alt={images[index]?.caption || `Image ${index + 1}`}
				class="max-h-[80vh] max-w-full object-contain"
			/>
			{#if images[index]?.caption}
				<p class="mt-4 text-center text-sm text-text-secondary">{images[index].caption}</p>
			{/if}
			<p class="mt-2 font-mono text-xs text-text-tertiary">{index + 1} / {images.length}</p>
		</div>
	</div>
{/if}
