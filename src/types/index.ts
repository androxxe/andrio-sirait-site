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
