import { profileSchema } from './schemas';

const profile = profileSchema.parse({
	name: 'Andrio Pratama Sirait',
	name_with_title: 'Andrio Pratama Sirait, S.T',
	date_of_birth: '1998-09-07',
	role: 'Full Stack Engineer',
	roles: ['Mobile Developer', 'Web Front-End Developer', 'Backend Developer'],
	about: 'Full Stack Engineer with 5+ years of experience building mobile and web applications across multiple industries. Currently leading a small development team at PT. Mitra Tech Indonesia, delivering multi-service government field operations platforms and digital platforms for fintech clients. Previously co-founded WarungSegar, an agritech marketplace connecting farmers directly to consumers, scaling it to 15,000+ users.',
	photo_path: '/assets/images/foto-jas-2.png',
	phone: '+62812 2669 6696',
	email: 'andriopratama16@gmail.com',
	website: 'www.andriosirait.com',
	address: { city: 'Bekasi, Jawa Barat' },
	hobbies: 'Enjoy playing video games a little while to refresh myself from the exhausting coding. Also enjoy watching video on YouTube',
	social_media: {
		facebook: 'https://www.facebook.com/yangngambiltaik/',
		instagram: 'https://www.instagram.com/andrio.sirait/',
		linked_in: 'https://www.linkedin.com/in/andrio-pratama-sirait-632223125/',
		github: 'https://github.com/androxxe'
	}
});

export default profile;
