import { technologies } from "@/data";
import Image from "next/image";
import Link from "next/link";

type PortfolioType = {
  portfolio: {
    slug: string;
    logo_path?: string;
    thumbnail: string;
    name: string;
    short_description: string;
    tech_stack: Array<string>;
  };
};

const Portfolio = ({ portfolio }: PortfolioType) => {
  return (
    <Link href={`/portfolio/${portfolio.slug}`} data-umami-event={`[PORTFOLIO][CARD] ${portfolio.name}`}>
      <div className="w-full h-80 relative border-2 border-slate-200 rounded-lg hover:scale-[101%] ease-out duration-100 group/portfolio">
        <div className="absolute top-0 right-0 z-10 mt-2 mx-2 flex flex-wrap gap-1 h-10 justify-end">
          {portfolio.tech_stack.map((tech_stack, index) => (
            <div
              key={index}
              className="h-[22px] w-[30px] bg-white rounded shadow-sm border-[0.5px] border-slate-300 overflow-hidden relative"
            >
              <Image
                quality={75}
                src={technologies.find((technology) => technology.code == tech_stack)?.logo_path || ""}
                fill={true}
                sizes="100vw"
                className="object-contain py-1 px-1"
                alt={`Technology ${tech_stack}`}
              />
            </div>
          ))}
        </div>
        <div className="invisible duration-200 rounded-lg ease-out group-hover/portfolio:visible absolute w-full h-full bg-slate-700 opacity-25"></div>
        <div className="w-full h-52 relative overflow-hidden">
          <Image
            className="object-cover"
            src={portfolio.thumbnail}
            fill={true}
            quality={80}
            loading="lazy"
            alt={`Thumbnail ${portfolio.name}`}
            sizes="100vw"
          />
        </div>
        <div className="p-3 h-44 duration-200 ease-in absolute w-full -bottom-16 left-0 right-0 group-hover/portfolio:-translate-y-16 group-hover/portfolio:rounded-t-xl group-hover/portfolio:rounded-b-lg group-hover/portfolio:bg-white">
          <h6 className="font-bold text-primary-500 text-sm mb-1">{portfolio.name}</h6>
          <p className="text-sm truncate group-hover/portfolio:whitespace-normal">{portfolio.short_description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Portfolio;
