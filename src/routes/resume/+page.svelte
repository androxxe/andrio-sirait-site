<script lang="ts">
	import Template from '$lib/components/Template.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Title from '$lib/components/Title.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import Certification from '$lib/components/Certification.svelte';
	import { experiences, skills, technologies, certifications, profile } from '$lib/data';

	const skillCategories = [
		{ label: 'Languages', key: 'languages' as const },
		{ label: 'Frontend', key: 'frontend' as const },
		{ label: 'Backend', key: 'backend' as const },
		{ label: 'Databases', key: 'databases' as const },
		{ label: 'DevOps', key: 'devops' as const },
		{ label: 'Cloud', key: 'cloud' as const },
		{ label: 'Testing', key: 'testing' as const },
		{ label: 'Tools', key: 'tools' as const },
		{ label: 'GIS & Mapping', key: 'gis' as const }
	];
</script>

<svelte:head>
	<title>Resume | {profile.name}</title>
	<meta name="description" content={`Work experience and skills of ${profile.name}`} />
</svelte:head>

<Template>
	<PageTransition>
		<Title>Work Experience</Title>
		<ol class="relative border-l border-accent/30">
			{#each experiences as experience}
				<Experience {experience} />
			{/each}
		</ol>

		<Title>Skill</Title>
		{#each skillCategories as category}
			<div class="mb-8">
				<p class="mb-4 font-mono text-sm text-text-tertiary">{category.label}</p>
				<div class="flex flex-wrap gap-2">
					{#each skills[category.key] as item}
						{@const technology = technologies.find((t) => t.code === item.code)}
						{#if technology}
							<Skill
								src={technology.logo_path}
								name={technology.name}
								is_expertise={item.is_expertise}
							/>
						{/if}
					{/each}
				</div>
			</div>
		{/each}

		<Title>Certifications</Title>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each certifications as cert}
				<Certification certification={cert} />
			{/each}
		</div>
	</PageTransition>
</Template>
