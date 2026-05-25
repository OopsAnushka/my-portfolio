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
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/anushka-sharma-644063295', color: '#0077B5' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/anushka8418', color: '#ffffff' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/Anushka33174522', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/anuus_h_ka', color: '#E1306C' },
    { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/anuhska', color: '#EA4C89' },
  ];

  return (
     <section id="contact" className="py-10 md:py-20 px-4 md:px-6 relative bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-[#D8ECF8] to-white bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Ready to bring your ideas to life? Let&apos;s discuss your next project 
            and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-[#D8ECF8]">
                Get in Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <Mail className="text-[#D8ECF8] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs md:text-sm">Email</p>
                    <p className="text-white text-sm md:text-base truncate">anushkasharma8418@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <Phone className="text-[#D8ECF8] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                    <p className="text-white text-sm md:text-base">+91 7987250763</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[#D8ECF8]/20 to-white/20 rounded-full">
                    <MapPin className="text-[#D8ECF8] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Location</p>
                    <p className="text-white text-sm md:text-base">Indore (M.P.), INDIA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Follow Me</h4>
              <div className="flex flex-wrap gap-3 md:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-r from-[#0a0b1a] to-[#05060f] border border-gray-800 rounded-full hover:border-[#D8ECF8]/50 transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}40` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#D8ECF8] transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <CardSpotlight className="w-full p-4 md:p-8 border-zinc-800 bg-black/50">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label className="block text-xs md:text-sm text-gray-300 mb-2">Full Name</label>
                      <input suppressHydrationWarning type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm md:text-base focus:border-[#D8ECF8] outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm text-gray-300 mb-2">Email</label>
                      <input suppressHydrationWarning type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm md:text-base focus:border-[#D8ECF8] outline-none transition-colors" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6">
                    <label className="block text-xs md:text-sm text-gray-300 mb-2">Subject</label>
                    <input suppressHydrationWarning type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm md:text-base focus:border-[#D8ECF8] outline-none transition-colors" placeholder="What's this about?" />
                  </div>
                  <div className="mb-4 md:mb-6">
                    <label className="block text-xs md:text-sm text-gray-300 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm md:text-base focus:border-[#D8ECF8] outline-none resize-none transition-colors" placeholder="Your message..." />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs md:text-sm text-center">{error}</p>
                  )}

                  <button suppressHydrationWarning type="submit" disabled={isSubmitting || submitted} className="w-full py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base bg-white text-black hover:bg-gray-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {submitted ? (
                      <><Check size={18} /> Message Sent!</>
                    ) : isSubmitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
            </CardSpotlight>

          </motion.div>
        </div>
      </div>
    </section>
  );
}