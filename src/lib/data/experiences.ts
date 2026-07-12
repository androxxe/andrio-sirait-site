import { experienceSchema } from './schemas';

const experiences = experienceSchema.array().parse([
	{
		company: 'PT. Mitra Tech Indonesia',
		location: 'Jakarta Selatan',
		position: 'Senior Software Engineer',
		description:
			'Led small development team using Scrum, facilitating sprint ceremonies and coordinating feature delivery. Owned code review workflow with merge authority to protected branches. Architected a multi-module React Native application consolidating 4 government service modules used by 100+ field officers, integrating ArcGIS and GeoServer for real-time geospatial data capture. Built PDF processing microservice (Express.js, Ghostscript, MuTool) processing 10K+ documents/month. Developed E-Sign gateway service processing 10K+ digital signatures. Maintained PinjamKu mobile (React Native) and web (Next.js) platforms for fintech client, and revamped FinBOS mobile app for 1,000+ users.',
		working_date: [
			{
				start_month: 1,
				start_year: 2024,
				end_month: null,
				end_year: null,
				status: 'Full-Time'
			}
		]
	},
	{
		company: 'PT. Mitra Tech Indonesia',
		location: 'Jakarta Selatan',
		position: 'Software Engineer',
		description:
			'Contributed to government and fintech client projects as part of the engineering team. Developed and maintained full-stack features across React Native, Next.js, and Express.js, collaborating with senior engineers on GIS integrations and document processing services.',
		working_date: [
			{
				start_month: 11,
				start_year: 2022,
				end_month: 12,
				end_year: 2023,
				status: 'Full-Time'
			}
		]
	},
	{
		company: 'PT. Andomus Tech Universe',
		location: 'Jakarta Selatan',
		position: 'Mobile Engineer',
		description:
			'Developed a React Native mobile app for a political campaign survey platform enabling field teams to collect voter data with a multi-level user hierarchy (Candidate → Campaign Team → Field Coordinator). Integrated GeoJSON-based mapping with heatmap visualization to analyze voter density and identify coverage areas for campaign targeting.',
		working_date: [
			{
				start_month: 1,
				start_year: 2023,
				end_month: 4,
				end_year: 2024,
				status: 'Project Based'
			}
		]
	},
	{
		company: 'PT. Agritech Retail Indonesia',
		location: 'Pekanbaru',
		position: 'Co-Founder & Technical Lead',
		description:
			'Co-founded WarungSegar, an agritech marketplace connecting local farmers to urban consumers — scaling to 15,000+ users and 30,000+ orders. Built the complete technical stack from scratch: customer mobile app, ordering system, inventory management, admin panel, and reporting dashboard. Expanded to offline retail with an integrated POS system. Secured partnerships with Bank Indonesia KPW Riau and PLN Riau, growing the team to 20+ employees.',
		working_date: [
			{
				start_month: 10,
				start_year: 2019,
				end_month: 11,
				end_year: 2022,
				status: 'Full-Time'
			}
		]
	},
	{
		company: 'Site Media',
		location: 'Pekanbaru',
		position: 'Full Stack Developer',
		description:
			'Developed 5+ client projects across web and mobile using Laravel, React, React Native, and Express.js. Built an offline-first mobile app for PT. Tri Bakti Sarimas (palm oil plantation) enabling harvest data recording without network connectivity with automatic sync. Communicated directly with clients to gather requirements and deliver solutions.',
		working_date: [
			{
				start_month: 4,
				start_year: 2021,
				end_month: 11,
				end_year: 2022,
				status: 'Freelance'
			}
		]
	}
]);

export default experiences;
