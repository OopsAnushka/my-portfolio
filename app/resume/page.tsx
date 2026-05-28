'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, FileText } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="relative bg-black min-h-screen flex flex-col">
      <Header />

      {/* Main Content — centered vertically */}
      <section className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg mx-auto text-center relative z-10">
          
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center"
          >
            <FileText className="text-blue-500 w-9 h-9" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight"
          >
            My Resume
          
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base mb-10"
          >
            Click below to download my resume as a PDF.
          </motion.p>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="/Anushka_Sharma_Resume.pdf"
              download="Anushka_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-500 transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </div>
  );
}
