export interface IMenuList {
	name: string;
	route: string;
}

export interface IPortfolioItem {
	name: string;
	short_description: string;
	description: string;
	slug: string;
	thumbnail: string;
	images: { image: string; caption: string }[];
	role: string;
	platform: string[];
	access: { is_public: boolean; links: { label: string; url: string }[] };
	tech_stack: string[];
}

export interface ITechnology {
	name: string;
	logo_path: string;
	type: string;
	code: string;
}

export interface IExperience {
	company: string;
	location: string;
	position: string;
	description: string;
	working_date: {
		start_month: number;
		start_year: number;
		end_month: number | null;
		end_year: number | null;
		status: string;
	}[];
}

export interface IEducation {
	start_year: number | null;
	end_year: number | null;
	school: string;
	degree: string;
	description: string;
}

export interface ICertification {
	name: string;
	issuer: string;
	issued_date: string;
	expiry_date: string;
	credential_id: string;
}

export interface ISkill {
	code: string;
	is_expertise: boolean;
}

export interface ISkills {
	languages: ISkill[];
	frontend: ISkill[];
	backend: ISkill[];
	databases: ISkill[];
	devops: ISkill[];
	cloud: ISkill[];
	testing: ISkill[];
	tools: ISkill[];
	gis: ISkill[];
}

export interface IProfile {
	name: string;
	name_with_title: string;
	date_of_birth: string;
	role: string;
	roles: string[];
	about: string;
	photo_path: string;
	phone: string;
	email: string;
	website: string;
	address: { city: string };
	hobbies: string;
	social_media: {
		facebook?: string;
		instagram?: string;
		linked_in?: string;
		github?: string;
	};
}
