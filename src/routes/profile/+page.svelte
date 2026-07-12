<script lang="ts">
	import Template from '$lib/components/Template.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Title from '$lib/components/Title.svelte';
	import Education from '$lib/components/Education.svelte';
	import { educations, profile } from '$lib/data';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';

	dayjs.extend(advancedFormat);

	const aboutMeLists = [
		{ label: 'Name', value: profile.name_with_title },
		{ label: 'Date of Birth', value: dayjs(profile.date_of_birth).format('MMMM, Do YYYY') },
		{ label: 'Phone', value: profile.phone },
		{ label: 'Email', value: profile.email },
		{ label: 'Web', value: profile.website },
		{ label: 'Address', value: profile.address.city }
	];
</script>

<svelte:head>
	<title>Profile | {profile.name}</title>
	<meta name="description" content={`About ${profile.name} - ${profile.role}`} />
</svelte:head>

<Template>
	<PageTransition>
		<Title>About Me</Title>
		<dl class="mx-auto max-w-md space-y-3">
			{#each aboutMeLists as list}
				<div class="flex items-baseline justify-between border-b border-border pb-2">
					<dt class="font-mono text-sm text-text-tertiary">{list.label}</dt>
					<dd class="text-sm text-text-primary">{list.value}</dd>
				</div>
			{/each}
		</dl>
		<Title>Education</Title>
		<ol class="relative border-l border-accent/30">
			{#each educations as education}
				<Education {education} />
			{/each}
		</ol>
		<Title>Hobbies</Title>
		<p class="max-w-xl text-sm leading-relaxed text-text-secondary">{profile.hobbies}</p>
	</PageTransition>
</Template>
