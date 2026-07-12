<script lang="ts">
	import Template from '$lib/components/Template.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { profile } from '$lib/data';
</script>

<svelte:head>
	<title>{profile.name} — {profile.role}</title>
	<meta name="description" content={profile.about} />
</svelte:head>

<Template>
	<PageTransition>
		<div class="flex min-h-[calc(100vh-12rem)] flex-col justify-center">
			<p class="font-mono text-sm text-text-tertiary">Hello, I'm</p>
			<h1 class="mt-2 font-display text-4xl text-text-primary md:text-5xl">{profile.name}</h1>
			<p class="mt-2 text-xl text-text-secondary">{profile.role}</p>
			{#if profile.roles.length > 0}
				<div class="mt-4 font-mono text-sm text-accent">
					<span class="text-text-tertiary">[</span>
					{#each profile.roles as role, i}
						<span class="animate-[fadeIn_0.4s_ease-out]" style="animation-delay: {0.1 + i * 0.08}s">
							<span class="text-text-tertiary">"</span>{role}<span class="text-text-tertiary">"</span>
							{#if i < profile.roles.length - 1}<span class="text-text-tertiary">, </span>{/if}
						</span>
					{/each}
					<span class="text-text-tertiary">]</span>
				</div>
			{/if}
			<p class="mt-8 max-w-xl text-base leading-relaxed text-text-secondary">{profile.about}</p>
		</div>
	</PageTransition>
</Template>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
