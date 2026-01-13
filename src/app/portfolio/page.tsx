"use client";

import React from "react";
import { portfolios, technologies } from "@/data";
import { FiAlertCircle } from "react-icons/fi";
import { Portfolio, Template } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { cn, getUniqueValues } from "@/helpers";
import qs, { ParsedQs } from "qs";

const groupByTechnologyType = (technologies: any) => {
  return technologies
    .filter((technology: any) => technology.type !== "tools" && technology.type !== "database")
    .reduce(function (r: any, a: any) {
      r[a.type] = r[a.type] || [];
      r[a.type].push(a);
      return r;
    }, Object.create(null));
};

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const queryParams: ParsedQs = qs.parse(searchParams.toString());

  let selectedTechnologies: string[] = (queryParams.technology || []) as string[];
  let selectedPlatforms: string[] = (queryParams.platform || []) as string[];

  const filteredPortfolio = portfolios
    .filter((portfolio) => {
      // Filter by tech
      if (selectedTechnologies.length > 0) {
        return portfolio.tech_stack.some((tech_stack) => selectedTechnologies.includes(tech_stack));
      }

      return portfolio;
    })
    .filter((portfolio) => {
      // Filter by platform
      if (selectedPlatforms.length > 0) {
        return portfolio.platform.some((platform) => selectedPlatforms.includes(platform));
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
          className="overflow-y-hidden w-full h-full"
        >
          <div className="lg:grid lg:grid-cols-12 gap-6 h-full">
            <div className="col-span-2 relative overflow-y-auto">
              <SidebarTechStack selectedPlatforms={selectedPlatforms} selectedTechnologies={selectedTechnologies} />
            </div>
            <div className="col-span-10 relative lg:overflow-y-auto flex flex-col">
              {filteredPortfolio.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-3 relative">
                  {filteredPortfolio.map((portfolio, index) => (
                    <Portfolio key={`portfolio_${index}`} portfolio={portfolio} />
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
}

interface TParams {
  platform: string[];
  technology: string[];
}

interface TSidebarTechStack {
  selectedTechnologies: string[];
  selectedPlatforms: string[];
}

const SidebarTechStack = (props: TSidebarTechStack) => {
  const router = useRouter();

  const { selectedTechnologies, selectedPlatforms } = props;

  const handleFilter = (code: string, type: string) => {
    let params: TParams = {
      platform: selectedPlatforms,
      technology: selectedTechnologies,
    };

    let isDeleted = false;
    if (type === "platform") {
      if (params.platform.includes(code)) {
        isDeleted = true;
        params = {
          ...params,
          platform: params.platform.filter((item) => item !== code),
        };
      }
    } else {
      if (params?.technology.includes(code)) {
        isDeleted = true;
        params = {
          ...params,
          technology: params?.technology.filter((item) => item !== code),
        };
      }
    }

    if (!isDeleted) {
      if (type === "platform") {
        params = {
          ...params,
          platform: getUniqueValues([...params.platform, code]),
        };
      } else {
        params = {
          ...params,
          technology: getUniqueValues([...params.technology, code]),
        };
      }
    }

    const queryString = qs.stringify(params, { encode: false });

    router.push(`/portfolio?${queryString}`);
  };

  return (
    <div className="lg:absolute space-y-2 top-0 left-0 w-full pb-5">
      {Object.keys(groupByTechnologyType(technologies)).map((type, index) => (
        <div className="space-y-2 w-full" key={`type_${index}`}>
          <span className="block text-sm uppercase font-bold pt-5">{type}</span>
          <div className="flex flex-wrap gap-3 lg:block lg:space-y-2">
            {technologies
              .filter((technology) => technology.type === type)
              .map((technology, technology_index) => (
                <button
                  data-umami-event={`[PORTFOLIO][TECH STACK] ${technology.name}`}
                  key={`technology_${index}_${technology_index}`}
                  className={cn(
                    `block w-full text-left duration-200 hover:scale-[90%] hover:border-primary-600 hover:text-primary-600 px-2 py-1 text-sm border cursor-pointer rounded-lg pointer`,
                    selectedTechnologies.find((item) => item === technology.code)
                      ? "border-primary-600 text-primary-600"
                      : "text-slate-600",
                    selectedPlatforms.find((item) => item === technology.code)
                      ? "border-primary-600 text-primary-600"
                      : "text-slate-600"
                  )}
                  onClick={() => handleFilter(technology.code, technology.type)}
                >
                  {technology.name}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
