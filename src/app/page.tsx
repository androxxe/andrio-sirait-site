"use client";

import { Template } from "../components";
import { profile } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Template menu="/">
      <AnimatePresence mode="wait">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className="h-full">
          <div className="flex items-center justify-center flex-col h-full">
            <p className="mb-2 mt-5">Hello, I’m</p>
            <h2 className="font-bold text-3xl mb-2 text-primary-500">{profile.name}</h2>
            <div className="text-xl text-slate-600 mb-3">{profile.role}</div>
            {profile.roles.length > 0 ? (
              <Typewriter
                options={{
                  wrapperClassName: "text-base font-semibold mb-5 text-slate-600 bg-primary-100 text-primary-400 tracking-widest p-1 px-3 ",
                  strings: profile.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            ) : null}
            <p className="mt-10 mb-20 mx-0 md:mx-4 lg:mx-10 text-center">{profile.about}</p>
            <a
              data-umami-event="[BUTTON] Download Resume"
              target="_blank"
              rel="noreferrer"
              href={"/api/resume/download"}
              className="flex gap-x-3 mt-0 items-center bg-primary-500 hover:bg-primary-700 px-5 py-3 text-white rounded-full text-sm"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default Home;
