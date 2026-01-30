// app/components/CertificationSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certificates = [
  {
    id: 1,
    title: ' Postman API fundamental student expert',
    issuer: 'postman API',
    date: '31august 2024',
    description: 'Comprehensive specialization covering React, Node.js, Databases, and API development.',
    image: 'postman.jpg', // Replace with actual certificate image path
    link: 'https://badges.parchment.com/public/assertions/wy3jLIuES-uIkisd3enfxQ?identity__email=anushkasharma8418@gmail.com'
  },
  
];

export default function CertificationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="certificate" className="py-20 px-6 relative bg-black/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold font-['Roboto'] mb-6 text-white">
            Professional{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 font-['Roboto'] text-lg max-w-2xl mx-auto">
            Continuous learning and validation of skills through industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              key={cert.id}
              className="group relative bg-[#0a0b1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#D8ECF8]/50 transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1a] to-transparent z-10 opacity-60"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 relative z-20 -mt-10">
                <div className="bg-[#0a0b1a] p-4 rounded-lg border border-gray-800 group-hover:border-[#D8ECF8]/20 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-['Roboto'] text-[#D8ECF8] bg-[#D8ECF8]/10 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                    <i className="ri-award-line text-gray-400 group-hover:text-[#D8ECF8] transition-colors"></i>
                  </div>
                  <h3 className="text-xl font-bold font-['Roboto'] text-white mb-1 group-hover:text-[#D8ECF8] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-['Roboto'] mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 font-['Roboto'] line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}