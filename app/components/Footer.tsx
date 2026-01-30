
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();


  return (
    <div className="py-16 px-6 border-t border-gray-800 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-gray-400 font-['Roboto'] text-sm">
            © {currentYear} Anushka Sharma. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-400 hover:text-[#D8ECF8] font-['Roboto'] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D8ECF8] rounded-full opacity-30"
              style={{
                left: `${30 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
