import { skillsSchema } from './schemas';

const skills = skillsSchema.parse({
	languages: [
		{ code: 'ts', is_expertise: true },
		{ code: 'js', is_expertise: true },
		{ code: 'php', is_expertise: false }
	],
	frontend: [
		{ code: 'react-native', is_expertise: true },
		{ code: 'react', is_expertise: true },
		{ code: 'nextjs', is_expertise: false },
		{ code: 'tailwind', is_expertise: false }
	],
	backend: [
		{ code: 'nest', is_expertise: false },
		{ code: 'expressjs', is_expertise: false },
		{ code: 'laravel', is_expertise: true },
		{ code: 'ci', is_expertise: false }
	],
	databases: [
		{ code: 'postgresql', is_expertise: false },
		{ code: 'mysql', is_expertise: false },
		{ code: 'oracle', is_expertise: false },
		{ code: 'redis', is_expertise: false }
	],
	devops: [
		{ code: 'github-actions', is_expertise: false },
		{ code: 'gitlab-ci', is_expertise: false },
		{ code: 'docker', is_expertise: false }
	],
	cloud: [
		{ code: 'gcp', is_expertise: false },
		{ code: 'aws', is_expertise: false },
		{ code: 'vercel', is_expertise: false },
		{ code: 'vps', is_expertise: false }
	],
	testing: [
		{ code: 'jest', is_expertise: false },
		{ code: 'detox', is_expertise: false }
	],
	tools: [
		{ code: 'jira', is_expertise: false },
		{ code: 'sentry', is_expertise: false },
		{ code: 'figma', is_expertise: false }
	],
	gis: [
		{ code: 'arcgis', is_expertise: false },
		{ code: 'geoserver', is_expertise: false },
		{ code: 'geojson', is_expertise: false },
		{ code: 'turf', is_expertise: false }
	]
});

export default skills;
