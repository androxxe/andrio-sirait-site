"use client";

import { Services, Template } from "../components";
import { profile } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Template menu="/">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-center flex-col my-10">
            <p className="mb-2 mt-5">Hello, I’m</p>
            <h2 className="font-bold text-3xl mb-2 text-primary-500">
              {profile.name}
            </h2>
            <Typewriter
              options={{
                wrapperClassName: "text-xl mb-5 text-slate-600",
                strings: [profile.role],
                autoStart: true,
                loop: true,
              }}
            />
            <p className="mt-10 mb-20 mx-0 md:mx-4 lg:mx-10 text-center">
              {profile.about}
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={profile.resume_path}
              className="flex gap-x-3 mt-0 items-center bg-primary-500 hover:bg-primary-700 px-5 py-3 text-white rounded-full text-sm"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
          <Services />
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

Home.layout = "asd";

export default Home;
