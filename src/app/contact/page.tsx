"use client";

import { Template, Title } from "@/components";
import { profile } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  return (
    <Template menu="/contact">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center flex-col h-full my-10"
        >
          <Title>Contact</Title>
          <div className="text-center">
            <span className="block">{profile.address?.street}</span>
            <span className="block">{profile.address?.city}</span>
            <span className="block">{profile.address?.postal_code}</span>
            <span className="block">{profile.phone}</span>
            <span className="block">{profile.email}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </Template>
  );
};

export default Contact;
