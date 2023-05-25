"use client";

import React, { useState } from "react";
import { Template } from "@/components";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { portfolios, profile, technologies } from "@/data";
import { FaLock } from "react-icons/fa";

type PortfolioDetailType = {
  params: {
    slug: string;
  };
};

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];

const PortfolioDetail = ({ params: { slug } }: PortfolioDetailType) => {
  const portfolio = portfolios.find((item) => item.slug === slug);

  return (
    <Template menu="/portfolio">
      <h2 className="text-sky-500 font-bold text-center text-xl mb-5 mt-5">
        {portfolio?.name}
      </h2>
      <div className="text-center flex flex-wrap">
        {/* {portfolio?.images.map((image, index) => (
          <Image
            src={image}
            width={200}
            height={400}
            objectFit="contain"
            alt={`Portfolio ${portfolio.name} - ${profile.name}`}
          />
        ))} */}
      </div>
      <Gallery images={images} />
      <p className="mb-3 mt-10 text-justify">{portfolio?.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
        <div className="p-3 px-5">
          <p className="font-bold">Access:</p>
          {portfolio?.access?.is_public == 1 ? (
            portfolio.access.links.map((link) => (
              <a
                href={link.url}
                className="text-sky-500 underline italic block"
              >
                {link.label}
              </a>
            ))
          ) : (
            <span className="flex items-center gap-x-2 italic">
              <FaLock className="text-slate-300" />
              Private Access
            </span>
          )}
        </div>
        <div className="p-3 px-5">
          <p className="font-bold">Role:</p>
          <p>{portfolio?.role}</p>
        </div>
        <div className="p-3 px-5">
          <p className="font-bold">Technology:</p>
          <div className="grid grid-cols-3 gap-3 mt-5">
            {portfolio?.tech_stack.map((tech_stack, index) => {
              const technology = technologies.find(
                (item) => item.code === tech_stack
              );
              if (!technology) return null;

              return (
                <div className="space-y-2">
                  <div
                    className="h-6 w-full bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${technology.logo_path})`,
                    }}
                  ></div>
                  <div className="text-sm text-slate-500 text-center">
                    {technology.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center space-y-1">
        <p className="font-bold uppercase text-bold text-slate-500">
          Disclaimer:
        </p>
        <p className="text-slate-500">Some access link may be broken due to each business process</p>
      </div>
    </Template>
  );
};

export default PortfolioDetail;
