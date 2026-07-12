import { z } from 'zod';

export const profileSchema = z.object({
	name: z.string(),
	name_with_title: z.string(),
	date_of_birth: z.string(),
	role: z.string(),
	roles: z.array(z.string()),
	about: z.string(),
	photo_path: z.string(),
	phone: z.string(),
	email: z.string(),
	website: z.string(),
	address: z.object({ city: z.string() }),
	hobbies: z.string(),
	social_media: z.object({
		facebook: z.string().optional(),
		instagram: z.string().optional(),
		linked_in: z.string().optional(),
		github: z.string().optional()
	})
});

export const workingDateSchema = z.object({
	start_month: z.number(),
	start_year: z.number(),
	end_month: z.number().nullable(),
	end_year: z.number().nullable(),
	status: z.string()
});

export const experienceSchema = z.object({
	company: z.string(),
	location: z.string(),
	position: z.string(),
	description: z.string(),
	working_date: z.array(workingDateSchema)
});

export const educationSchema = z.object({
	start_year: z.number().nullable(),
	end_year: z.number().nullable(),
	school: z.string(),
	degree: z.string(),
	description: z.string()
});

export const certificationSchema = z.object({
	name: z.string(),
	issuer: z.string(),
	issued_date: z.string(),
	expiry_date: z.string(),
	credential_id: z.string()
});

export const skillSchema = z.object({
	code: z.string(),
	is_expertise: z.boolean()
});

export const skillsSchema = z.object({
	languages: z.array(skillSchema),
	frontend: z.array(skillSchema),
	backend: z.array(skillSchema),
	databases: z.array(skillSchema),
	devops: z.array(skillSchema),
	cloud: z.array(skillSchema),
	testing: z.array(skillSchema),
	tools: z.array(skillSchema),
	gis: z.array(skillSchema)
});

export const technologySchema = z.object({
	name: z.string(),
	logo_path: z.string(),
	type: z.enum(['language', 'framework', 'database', 'devops', 'cloud', 'testing', 'tools', 'gis']),
	code: z.string()
});

export const portfolioAccessSchema = z.object({
	is_public: z.boolean(),
	links: z.array(z.object({ label: z.string(), url: z.string() }))
});

export const portfolioImageSchema = z.object({
	image: z.string(),
	caption: z.string()
});

export const portfolioSchema = z.object({
	name: z.string(),
	short_description: z.string(),
	description: z.string(),
	slug: z.string(),
	thumbnail: z.string(),
	images: z.array(portfolioImageSchema),
	role: z.string(),
	platform: z.array(z.string()),
	access: portfolioAccessSchema,
	tech_stack: z.array(z.string())
});
