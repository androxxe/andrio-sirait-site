import { educationSchema } from './schemas';

const educations = educationSchema.array().parse([
	{
		start_year: 2016,
		end_year: 2021,
		school: 'Universitas Riau',
		degree: 'Bachelor of Engineering, Informatics',
		description: 'Graduated with 3.71 GPA. Final Project: Online Thesis Guidance Management System.'
	}
]);

export default educations;
