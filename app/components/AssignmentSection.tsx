// app/components/AssignmentSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const assignments = [
  {
    id: 1,
    title: 'Data Science 1st internal test solution(part-A)',
    // description: 'A walkthrough of integrating 3D models into a React application using React Three Fiber.',
    // Replace this ID with your actual YouTube video ID
    videoId: '7FtWk9S5Ycc', 
    tags: ['DATA SCIENCE'],
  },
  {
    id: 2,
    title: 'Data Science 1st internal test solution(part-B)',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: 'Q0pOeEi_Uec',
    tags: ['DATA SCIENCE'],
  },
  {
    id: 3,
    title: 'Data Science 1st internal test solution(part-C)',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: 'u3Di_JPVfVA',
    tags:  ['DATA SCIENCE'],
  },
  {
    id: 4,
    title: 'Data Science 1st internal test solution(part-D)',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: 'EmueWK6I_y4',
    tags:  ['DATA SCIENCE'],
  },
  {
    id: 5,
    title: 'Data Science 2nd internal test solution',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: 'm1F9yArE6Ps',
    tags:  ['DATA SCIENCE'],
  },
  {
    id: 6,
    title: 'Data Science 3rd internal test solution(part-1)',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: 'JzLmaSNK5vc',
    tags:  ['DATA SCIENCE'],
  },
  {
    id: 7,
    title: 'Data Science 3rd internal test solution(part-2)',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: '1isbsCP8veI',
    tags:  ['DATA SCIENCE'],
  },
  {
    id: 8,
    title: 'Data Science end semester test solution',
    // description: 'Documenting the process of building a modern portfolio with Framer Motion and Tailwind CSS.',
    videoId: '2rXaoXqZ0fc',
    tags:  ['DATA SCIENCE'],
  },
  
];

export default function AssignmentSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="assignment" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold font-['Roboto'] mb-6 text-white">
            My{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Assignments
            </span>
          </h2>
          <p className="text-gray-300 font-['Roboto'] text-lg max-w-2xl mx-auto">
            A collection of my video assignments and technical walkthroughs demonstrating practical application of concepts.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-4 gap-2">
          {assignments.map((assign, index) => (
            <motion.div
              key={assign.id}
              className="group relative bg-[#0a0b1a]/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#D8ECF8]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Video Container */}
              <div className="relative pb-[56.25%] h-0 bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${assign.videoId}`}
                  title={assign.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {assign.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-['Roboto'] text-[#D8ECF8] bg-[#D8ECF8]/10 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-['Roboto'] text-white group-hover:text-[#D8ECF8] transition-colors">
                  {assign.title}
                </h3>
                              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}