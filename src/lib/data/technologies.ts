import { technologySchema } from './schemas';

const technologies = technologySchema.array().parse([
	// Languages
	{ name: 'TypeScript', logo_path: '/assets/images/technology/typescript.png', type: 'language', code: 'ts' },
	{ name: 'JavaScript', logo_path: '/assets/images/technology/javascript.png', type: 'language', code: 'js' },
	{ name: 'PHP', logo_path: '/assets/images/technology/php.png', type: 'language', code: 'php' },

	// Frontend
	{ name: 'React Native', logo_path: '/assets/images/technology/react-native.png', type: 'framework', code: 'react-native' },
	{ name: 'React.js', logo_path: '/assets/images/technology/react.png', type: 'framework', code: 'react' },
	{ name: 'Next.js', logo_path: '/assets/images/technology/next.png', type: 'framework', code: 'nextjs' },
	{ name: 'Tailwind CSS', logo_path: '/assets/images/technology/tailwind.png', type: 'framework', code: 'tailwind' },

	// Backend
	{ name: 'NestJS', logo_path: '/assets/images/technology/nestjs.png', type: 'framework', code: 'nest' },
	{ name: 'Express.js', logo_path: '/assets/images/technology/express.png', type: 'framework', code: 'expressjs' },
	{ name: 'Laravel', logo_path: '/assets/images/technology/laravel.png', type: 'framework', code: 'laravel' },
	{ name: 'CodeIgniter', logo_path: '/assets/images/technology/codeigniter.png', type: 'framework', code: 'ci' },

	// Databases
	{ name: 'PostgreSQL', logo_path: '/assets/images/technology/postgres.png', type: 'database', code: 'postgresql' },
	{ name: 'MySQL', logo_path: '/assets/images/technology/mysql.png', type: 'database', code: 'mysql' },
	{ name: 'Oracle', logo_path: '/assets/images/technology/oracle.png', type: 'database', code: 'oracle' },
	{ name: 'Redis', logo_path: '/assets/images/technology/redis.png', type: 'database', code: 'redis' },

	// DevOps
	{ name: 'GitHub Actions', logo_path: '/assets/images/technology/github.png', type: 'devops', code: 'github-actions' },
	{ name: 'GitLab CI', logo_path: '/assets/images/technology/gitlab.png', type: 'devops', code: 'gitlab-ci' },
	{ name: 'Docker', logo_path: '/assets/images/technology/docker.webp', type: 'devops', code: 'docker' },

	// Cloud
	{ name: 'Google App Engine', logo_path: '/assets/images/technology/gcp.png', type: 'cloud', code: 'gcp' },
	{ name: 'AWS', logo_path: '/assets/images/technology/aws.png', type: 'cloud', code: 'aws' },
	{ name: 'Vercel', logo_path: '/assets/images/technology/vercel.png', type: 'cloud', code: 'vercel' },
	{ name: 'VPS/VM', logo_path: '/assets/images/technology/vps.png', type: 'cloud', code: 'vps' },

	// Testing
	{ name: 'Jest', logo_path: '/assets/images/technology/jest.png', type: 'testing', code: 'jest' },
	{ name: 'Detox', logo_path: '/assets/images/technology/detox.png', type: 'testing', code: 'detox' },

	// Tools
	{ name: 'Jira', logo_path: '/assets/images/technology/jira.png', type: 'tools', code: 'jira' },
	{ name: 'Sentry', logo_path: '/assets/images/technology/sentry.png', type: 'tools', code: 'sentry' },
	{ name: 'Figma', logo_path: '/assets/images/technology/figma.png', type: 'tools', code: 'figma' },

	// GIS
	{ name: 'ArcGIS', logo_path: '/assets/images/technology/arcgis.png', type: 'gis', code: 'arcgis' },
	{ name: 'GeoServer', logo_path: '/assets/images/technology/geoserver.png', type: 'gis', code: 'geoserver' },
	{ name: 'GeoJSON', logo_path: '/assets/images/technology/geojson.png', type: 'gis', code: 'geojson' },
	{ name: 'Turf.js', logo_path: '/assets/images/technology/turf.png', type: 'gis', code: 'turf' }
]);

export default technologies;
