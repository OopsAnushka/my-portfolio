'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: 'ri-linkedin-fill', 
      url: 'https://www.linkedin.com/in/anushka-sharma-644063295', 
      color: '#0077B5' 
    },
    { 
      name: 'GitHub', 
      icon: 'ri-github-fill', 
      url: 'https://github.com/anushka8418', // UPDATE THIS WITH YOUR GITHUB URL
      color: '#333' 
    },
    { 
      name: 'Twitter', 
      icon: 'ri-twitter-fill', 
      url: 'https://x.com/Anushka33174522', 
      color: '#1DA1F2' 
    },
    { 
      name: 'Dribbble', 
      icon: 'ri-dribbble-line', 
      url: 'https://dribbble.com/anuhska', 
      color: '#EA4C89' 
    },
  
  ];

  return (
    <section id="contact" className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold font-['Roboto'] mb-6 text-white">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 font-['Roboto'] text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-['Roboto'] font-semibold mb-8 text-[#D8ECF8]">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <i className="ri-mail-line text-[#D8ECF8] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-['Roboto']">Email</p>
                    <p className="text-white font-['Roboto']">anushkasharma8418@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <i className="ri-phone-line text-[#D8ECF8] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-['Roboto']">Phone</p>
                    <p className="text-white font-['Roboto']">+91 7987250763</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <i className="ri-map-pin-line text-[#D8ECF8] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-['Roboto']">Location</p>
                    <p className="text-white font-['Roboto']">Indore (M.P.), INDIA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-['Roboto'] font-semibold mb-6 text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#0a0b1a] to-[#05060f] border border-gray-800 rounded-full hover:border-[#D8ECF8]/50 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i 
                      className={`${social.icon} text-xl text-gray-400 group-hover:text-[#D8ECF8] transition-colors duration-300`}
                    ></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0a0b1a] to-[#05060f] rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backdropFilter: 'blur(10px)' }}
                />
                <div className="relative bg-gradient-to-r from-[#0a0b1a]/50 to-[#05060f]/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-[#D8ECF8]/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <label className="block text-sm font-['Roboto'] text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white font-['Roboto'] focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-sm"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <label className="block text-sm font-['Roboto'] text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white font-['Roboto'] focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-sm"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <label className="block text-sm font-['Roboto'] text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white font-['Roboto'] focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-sm"
                      placeholder="Project inquiry"
                    />
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <label className="block text-sm font-['Roboto'] text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white font-['Roboto'] focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 resize-none text-sm"
                      placeholder="Tell me about your project..."
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className={`w-full py-4 rounded-lg font-['Roboto'] font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                        submitted 
                          ? 'bg-green-600 text-white' 
                          : isSubmitting
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#D8ECF8] to-white text-[#05060f] hover:shadow-lg hover:shadow-[#D8ECF8]/20'
                      }`}
                      whileHover={!isSubmitting && !submitted ? { 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(216, 236, 248, 0.4)"
                      } : {}}
                      whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                      animate={submitted ? {
                        y: [0, -5, 0],
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {submitted ? (
                        <>
                          <i className="ri-check-line mr-2"></i>
                          Message Sent Successfully!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line mr-2 animate-spin"></i>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line mr-2"></i>
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}