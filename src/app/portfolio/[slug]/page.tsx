"use client";

import React, { useEffect, useState } from "react";
import { Template, Title } from "@/components";
import { portfolios, technologies } from "@/data";
import { FaChevronLeft, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { calculateImageHeight } from "@/helpers";
import Image from "next/image";
import { IPortfolioItem } from "@/types";

type PortfolioDetailType = {
  params: {
    slug: string;
  };
};

type ImageType = Array<{
  src: string;
  description?: string;
  height: number;
  width: number;
}>;

const PortfolioDetail = ({ params: { slug } }: PortfolioDetailType) => {
  const portfolio: IPortfolioItem = portfolios.find((item) => item.slug === slug) as IPortfolioItem;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [images, setImages] = useState<ImageType>([]);

  useEffect(() => {
    (async () => {
      const temp: ImageType = await Promise.all(
        portfolio?.images.map(async (item) => {
          const dimension = await calculateImageHeight(item.image);

          return {
            src: item.image,
            description: item.caption,
            height: dimension.height,
            width: dimension.width,
          };
        })
      );

      setImages(temp);
    })();
  }, []);

  const router = useRouter();

  return (
    <>
      <Template menu="/portfolio">
        <a href="#" className="flex items-center space-x-2" onClick={() => router.back()}>
          <FaChevronLeft />
          <span>Back</span>
        </a>
        <Title>{portfolio.name}</Title>
        <PhotoAlbum
          layout="rows"
          targetRowHeight={400}
          photos={images}
          onClick={({ index }: { index: number }) => {
            setImageIndex(index);
            setIsOpen(true);
          }}
        />
        <p className="my-10 text-justify">{portfolio?.description ?? "No Description"}</p>
        <div className="space-x-2 mb-10">
          {portfolio?.platform.map((platform: string, index: number) => (
            <span key={`portfolio_platform_${index}`} className="bg-slate-200 px-3 text-slate-500 py-1 rounded-full font-bold">
              {platform}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:divide-x mt-5 mb-10">
          <div className="py-3 lg:px-5">
            <p className="font-bold">Access:</p>
            {portfolio.access?.is_public ? (
              portfolio.access.links.map((link: { url: string; label: string }, index: number) => (
                <a key={`access_link_${index}`} href={link.url} className="text-sky-500 underline italic block">
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
          <div className="py-3 lg:px-5">
            <p className="font-bold">Role:</p>
            <p>{portfolio?.role}</p>
          </div>
          <div className="py-3 lg:px-5">
            <p className="font-bold">Technology:</p>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {portfolio?.tech_stack.map((tech_stack: string, index: number) => {
                const technology = technologies.find((item) => item.code === tech_stack);
                if (!technology) return null;

                return (
                  <div className="space-y-2" key={`portfolio_technology_${index}`}>
                    <div className="w-full h-6 relative overflow-hidden">
                      <Image className="object-contain" src={technology.logo_path} fill quality={80} loading="lazy" alt={`Tech stack ${technology.name}`} content="fill" />
                    </div>
                    <div className="text-sm text-slate-500 text-center">{technology.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center space-y-1 border-t pt-4 w-full">
          <p className="font-bold uppercase text-bold text-slate-500">Disclaimer:</p>
          <p className="text-slate-500">Some access link may be broken due to each business process</p>
        </div>
      </Template>
      <Lightbox index={imageIndex} plugins={[Captions]} open={isOpen} close={() => setIsOpen(false)} slides={images} />
    </>
  );
};

export default PortfolioDetail;
