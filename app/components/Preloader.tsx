"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./Loading.json";

interface PreloaderProps {
  children: ReactNode;
}

export default function Preloader({ children }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // loader for 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie 
              animationData={animationData} 
              loop={true} 
              style={{ width: 250, height: 250 }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
