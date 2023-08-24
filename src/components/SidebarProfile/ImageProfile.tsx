"use client";

import { profile } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageProfile = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-[350px] md:h-[420px] lg:h-full w-full relative"
    >
      <Image
        priority={true}
        className="object-contain"
        src={profile.photo_path}
        fill
        quality={80}
        alt={`Photo ${profile.name}`}
        content="fill"
      />
    </motion.div>
  );
};

export default ImageProfile;
