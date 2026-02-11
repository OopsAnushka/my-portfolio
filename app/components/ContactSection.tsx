'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Dribbble, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Loader2,
  Github
} from 'lucide-react';
import { CardSpotlight } from './ui/card-spotlight';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/anushka-sharma-644063295', color: '#0077B5' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/anushka8418', color: '#ffffff' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Anushka33174522', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/anuus_h_ka', color: '#E1306C' },
    { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/anuhska', color: '#EA4C89' },
  ];

  return (
     <section id="contact" className="py-10 md:py-20 px-6 relative bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-[#D8ECF8]">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <Mail className="text-[#D8ECF8] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">anushkasharma8418@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <Phone className="text-[#D8ECF8] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 7987250763</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <MapPin className="text-[#D8ECF8] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Indore (M.P.), INDIA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#0a0b1a] to-[#05060f] border border-gray-800 rounded-full hover:border-[#D8ECF8]/50 transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}40` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#D8ECF8] transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.4 }}>
            
            {/* The Form is now "Revealed" by the 3D Pixels on hover */}
            <CardSpotlight className="w-full p-8 border-zinc-800 bg-black/50">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                      <input  suppressHydrationWarning type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:border-[#D8ECF8] outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email</label>
                      <input   suppressHydrationWarning type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:border-[#D8ECF8] outline-none" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:border-[#D8ECF8] outline-none" placeholder="Your message..." />
                  </div>
                  <button  suppressHydrationWarning type="submit" disabled={isSubmitting || submitted} className="w-full py-4 rounded-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all">
                    {submitted ? "Message Sent!" : isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
            </CardSpotlight>

          </motion.div>
        </div>
      </div>
    </section>
  );
}