"use client";

import { motion } from "framer-motion";
import { ReactNode, Suspense } from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
    </div>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="h-full">
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </motion.div>
  );
}
