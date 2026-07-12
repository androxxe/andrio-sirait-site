<script lang="ts">
	import { profile } from '$lib/data';
	import Menu from '$lib/components/Menu.svelte';

	const socials = [
		{
			key: 'facebook',
			url: profile.social_media?.facebook,
			event: '[SOCIAL MEDIA] Facebook',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>'
		},
		{
			key: 'instagram',
			url: profile.social_media?.instagram,
			event: '[SOCIAL MEDIA] Instagram',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'
		},
		{
			key: 'linked_in',
			url: profile.social_media?.linked_in,
			event: '[SOCIAL MEDIA] Linked-In',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
		},
		{
			key: 'github',
			url: profile.social_media?.github,
			event: '[SOCIAL MEDIA] GitHub',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
		}
	];
</script>

<aside class="flex w-full flex-col border-b border-border bg-surface lg:w-[280px] lg:min-h-screen lg:border-b-0 lg:border-r">
	<div class="relative w-full overflow-hidden">
		<img
			src={profile.photo_path}
			alt="Photo {profile.name}"
			class="h-[200px] w-full object-cover object-top lg:h-[280px]"
		/>
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent"></div>
	</div>
	<div class="px-5 pb-5 pt-3">
		<h1 class="font-display text-2xl text-text-primary">{profile.name}</h1>
		<p class="font-mono text-sm text-accent">{profile.role}</p>
	</div>
	<div class="flex items-center justify-center space-x-5 border-t border-border px-5 py-4">
		{#each socials as social}
			{#if social.url}
				<a
					target="_blank"
					rel="noreferrer"
					href={social.url}
					class="text-text-secondary transition-colors duration-150 hover:text-accent"
					data-umami-event={social.event}
				>
					{@html social.svg}
				</a>
			{/if}
		{/each}
	</div>
	<nav class="border-t border-border px-3 py-4">
		<Menu />
	</nav>
</aside>
