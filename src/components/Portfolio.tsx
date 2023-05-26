import { technologies } from "@/data";
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
    <Link href={`/portfolio/${portfolio.slug}`}>
      <div className="w-full h-80 relative border-2 border-slate-200 rounded-lg hover:scale-[101%] ease-out duration-100 group/portfolio">
        <div className="absolute top-0 right-0 z-10 mt-2 mx-2 flex flex-wrap gap-1 h-10 justify-end">
          {portfolio.tech_stack.map((tech_stack, index) => (
            <img
              key={`tech_stack_${index}`}
              src={
                technologies.find((technology) => technology.code == tech_stack)
                  ?.logo_path
              }
              className="bg-white py-1 px-1.5 rounded-md shadow-sm rounded h-[22px]"
            />
          ))}
        </div>
        <div className="invisible duration-200 rounded-lg ease-out group-hover/portfolio:visible absolute w-full h-full bg-slate-700 opacity-25"></div>
        <div
          className="h-52 w-full bg-slate-200 rounded-tr-lg rounded-tl-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${portfolio.thumbnail})`,
          }}
        ></div>
        <div className="p-3 h-44 duration-200 ease-in absolute w-full -bottom-16 left-0 right-0 group-hover/portfolio:-translate-y-16 group-hover/portfolio:rounded-t-xl group-hover/portfolio:rounded-b-lg group-hover/portfolio:bg-white">
          <h6 className="font-bold text-primary-500 text-sm mb-1">
            {portfolio.name}
          </h6>
          <p className="text-sm truncate group-hover/portfolio:whitespace-normal">
            {portfolio.short_description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Portfolio;
