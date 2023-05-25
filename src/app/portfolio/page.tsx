"use client";

import React from "react";
import Link from "next/link";
import { portfolios, technologies } from "@/data";
import { FiAlertCircle } from "react-icons/fi";
import { Template } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { getUniqueValues } from "@/helpers";

type PortfolioType = {
  portfolio: {
    slug: string;
    logo_path: string;
    thumbnail: string;
    name: string;
    short_description: string;
    tech_stack: Array<string>;
  };
};

const PortfolioItem = ({ portfolio }: PortfolioType) => {
  return (
    <Link href={`/portfolio/${portfolio.slug}`}>
      <div className="w-full h-80 relative relative border-2 border-slate-200 rounded-lg hover:scale-[101%] ease-out duration-100 group/portfolio">
        <div className="absolute top-0 right-0 z-10 mt-2 mx-2 flex flex-wrap gap-1 h-10 justify-end">
          {portfolio.tech_stack.map((tech_stack, index) => (
            <img
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
        <div className="p-3 h-44 duration-200 ease-in absolute w-full -bottom-16 left-0 right-0 group-hover/portfolio:-translate-y-16 group-hover/portfolio:rounded-t-xl group-hover/portfolio:bg-white">
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

const groupByTechnologyType = (technologies: any) => {
  return technologies
    .filter(
      (technology) =>
        technology.type !== "tools" && technology.type !== "database"
    )
    .reduce(function (r, a) {
      r[a.type] = r[a.type] || [];
      r[a.type].push(a);
      return r;
    }, Object.create(null));
};

const Portfolio = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let selectedTechnologies: Array<string> = [];
  let selectedPlatforms: Array<string> = [];

  try {
    selectedTechnologies = JSON.parse(searchParams.getAll("technology")) ?? [];
  } catch (e) {
    // Silent Error
  }

  try {
    selectedPlatforms = JSON.parse(searchParams.getAll("platform")) ?? [];
  } catch (e) {
    // Silent Error
  }

  const handleFilter = (code: string, type: string) => {
    let paramsTechnology = null;
    let paramsPlatform = null;

    if (type === "platform") {
      if (selectedPlatforms.find((item) => item === code)) {
        selectedPlatforms = selectedPlatforms.filter((item) => item !== code);
        paramsPlatform = encodeURIComponent(
          JSON.stringify(getUniqueValues(selectedPlatforms))
        );
      } else {
        paramsPlatform = encodeURIComponent(
          JSON.stringify(getUniqueValues([...selectedPlatforms, code]))
        );
      }
    } else {
      if (selectedTechnologies.find((item) => item === code)) {
        selectedTechnologies = selectedTechnologies.filter(
          (item) => item !== code
        );
        paramsTechnology = encodeURIComponent(
          JSON.stringify(getUniqueValues(selectedTechnologies))
        );
      } else {
        paramsTechnology = encodeURIComponent(
          JSON.stringify(getUniqueValues([...selectedTechnologies, code]))
        );
      }
    }

    if(!paramsTechnology) paramsTechnology = encodeURIComponent(JSON.stringify(selectedTechnologies))
    if(!paramsPlatform) paramsPlatform = encodeURIComponent(JSON.stringify(selectedPlatforms))

    router.push(
      `/portfolio?technology=${paramsTechnology}&platform=${paramsPlatform}`
    );
  };

  const filteredPortfolio = portfolios
    .filter((portfolio) => {
      if (selectedTechnologies.length > 0) {
        return portfolio.tech_stack.some((tech_stack) =>
          selectedTechnologies.includes(tech_stack)
        );
      }

      return portfolio;
    })
    .filter((portfolio) => {
      if (selectedPlatforms.length > 0) {
        return portfolio.platform.some((platform) =>
          selectedPlatforms.includes(platform)
        );
      }

      return portfolio;
    });

  return (
    <Template menu="/portfolio">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-y-hidden flex flex-col flex-1 w-full"
        >
          <div className="grid lg:grid-cols-12 h-full gap-6">
            <div className="col-span-2 relative">
              <div className="absolute space-y-2 top-0 left-0 w-full h-full overflow-y-auto">
                {Object.keys(groupByTechnologyType(technologies)).map(
                  (type, index) => (
                    <div className="space-y-2" key={`type_${index}`}>
                      <span className="block text-sm uppercase font-bold pt-5">
                        {type}
                      </span>
                      {technologies
                        .filter((technology) => technology.type === type)
                        .map((technology, technology_index) => (
                          <div
                            key={`technology_${index}_${technology_index}`}
                            className={`duration-200 hover:scale-[90%] hover:border-primary-600 hover:text-primary-600 px-2 py-1 text-sm border cursor-pointer rounded-lg pointer ${
                              selectedTechnologies.find(
                                (item) => item === technology.code
                              )
                                ? "border-primary-600 text-primary-600"
                                : "text-slate-600"
                            } ${
                              selectedPlatforms.find(
                                (item) => item === technology.code
                              )
                                ? "border-primary-600 text-primary-600"
                                : "text-slate-600"
                            }}`}
                            onClick={() =>
                              handleFilter(technology.code, technology.type)
                            }
                          >
                            {technology.name}
                          </div>
                        ))}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-span-10 overflow-y-auto ">
              {filteredPortfolio.length > 0 ? (
                <div className=" h-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-3 mb-10 relative">
                  {filteredPortfolio.map((portfolio, index) => (
                    <PortfolioItem
                      key={`portfolio_${index}`}
                      portfolio={portfolio}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center flex-col space-y-5 h-full">
                  <FiAlertCircle className="text-5xl text-orange-400" />
                  <div className="text-slate-400">No Projects Found</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default Portfolio;
