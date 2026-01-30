'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Hotel Booking Website',
    description: 'A revolutionary booking experience with 3D room visualization, real-time availability, and seamless checkout flow. Built with React and modern UI principles.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    // Replace the links below with your actual URLs
    demoLink: 'https://hotel-room-booking.vercel.app/', 
    repoLink: 'https://github.com/anushka8418/hotelRoom-Booking.git',
    image: 'hotel-preview.jpg',
    direction: 'left'
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold font-['Roboto'] mb-6 text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 font-['Roboto'] text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that push the boundaries of web development 
            and create meaningful user experiences.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                project.direction === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${
                  project.direction === 'right' ? 'lg:col-start-2' : ''
                }`}
                initial={{ 
                  opacity: 0, 
                  x: project.direction === 'left' ? -50 : 50 
                }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: project.direction === 'left' ? -50 : 50 
                }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glowing overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* View Project Button (Overlay) */}
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-8 left-8 px-6 py-3 bg-gradient-to-r from-[#D8ECF8] to-white text-[#05060f] rounded-full font-['Roboto'] font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 whitespace-nowrap cursor-pointer flex items-center justify-center decoration-0"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(216, 236, 248, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    View Project
                  </motion.a>
                </div>

                {/* Glowing border */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`space-y-6 ${
                  project.direction === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                initial={{ 
                  opacity: 0, 
                  x: project.direction === 'left' ? 50 : -50 
                }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: project.direction === 'left' ? 50 : -50 
                }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              >
                <motion.h3
                  className="text-4xl font-bold font-['Roboto'] text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 font-['Roboto'] text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.9 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 1.1 }}
                >
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-[#0a0b1a] to-[#05060f] border border-gray-800 rounded-full text-[#D8ECF8] font-['Roboto'] text-sm whitespace-nowrap cursor-pointer hover:border-[#D8ECF8]/50 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.05 + 1.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 1.3 }}
                >
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-[#D8ECF8] to-white text-[#05060f] rounded-full font-['Roboto'] font-semibold whitespace-nowrap cursor-pointer flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(216, 236, 248, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 border-[#D8ECF8] text-[#D8ECF8] rounded-full font-['Roboto'] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#D8ECF8]/10 transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(216, 236, 248, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-github-line mr-2"></i>
                    Source Code
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}