<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/helpers';

	const menuList = [
		{ name: 'Home', route: '/', index: '01.' },
		{ name: 'Profile', route: '/profile', index: '02.' },
		{ name: 'Resume', route: '/resume', index: '03.' },
		{ name: 'Portfolio', route: '/portfolio', index: '04.' }
	];

	let { active }: { active?: string } = $props();

	const currentPath = $derived(page.url.pathname);
</script>

<!-- Desktop: vertical nav -->
<div class="hidden flex-col space-y-1 lg:flex">
	{#each menuList as item}
		{@const isActive = active === item.route || (item.route !== '/' && currentPath.startsWith(item.route))}
		<a
			href={item.route}
			data-umami-event="[MENU] {item.name}"
			class={cn(
				'font-mono text-sm transition-all duration-150',
				isActive
					? 'border-l-2 border-l-accent pl-3 text-accent'
					: 'pl-4 text-text-secondary hover:pl-5 hover:text-text-primary'
			)}
		>
			<span class="text-text-tertiary">{item.index}</span> {item.name}
		</a>
	{/each}
</div>

<!-- Mobile: horizontal tabs -->
<div class="flex space-x-1 overflow-x-auto lg:hidden">
	{#each menuList as item}
		{@const isActive = active === item.route || (item.route !== '/' && currentPath.startsWith(item.route))}
		<a
			href={item.route}
			data-umami-event="[MENU] {item.name}"
			class={cn(
				'whitespace-nowrap rounded px-3 py-1.5 font-mono text-xs transition-colors duration-150',
				isActive ? 'bg-accent/10 text-accent' : 'text-text-secondary hover:text-text-primary'
			)}
		>
			{item.name}
		</a>
	{/each}
</div>
