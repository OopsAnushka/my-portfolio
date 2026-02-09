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

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // Animation replays every time you visit
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
      // 1. Send data to your Backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 2. Success!
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // 3. Server Error
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      // 4. Network Error
      setError('Failed to connect to the server.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/anushka-sharma-644063295', 
      color: '#0077B5' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/anushka8418', 
      color: '#ffffff' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://x.com/Anushka33174522', 
      color: '#1DA1F2' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/anuus_h_ka', 
      color: '#E1306C' 
    },
    { 
      name: 'Dribbble', 
      icon: Dribbble, 
      url: 'https://dribbble.com/anuhska', 
      color: '#EA4C89' 
    },
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

          {/* RIGHT SIDE: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                {/* Glassmorphism Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0a0b1a] to-[#05060f] rounded-2xl opacity-90 transition-opacity duration-300"
                  style={{ backdropFilter: 'blur(10px)' }}
                />
                
                <div className="relative bg-gradient-to-r from-[#0a0b1a]/50 to-[#05060f]/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-[#D8ECF8]/30 transition-all duration-300">
                  
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                      <input 
                      suppressHydrationWarning
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-lg" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                      <input 
                      suppressHydrationWarning
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-lg" 
                        placeholder="your@email.com" 
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-300 mb-2">Subject</label>
                    <input 
                    suppressHydrationWarning
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 text-lg" 
                      placeholder="Project inquiry" 
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <textarea 
                    suppressHydrationWarning
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      maxLength={500} 
                      rows={6} 
                      className="w-full px-4 py-3 bg-[#05060f]/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D8ECF8] transition-colors duration-300 resize-none text-sm" 
                      placeholder="Tell me about your project..." 
                    />
                    <div className="text-right text-lg text-gray-500 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button 
                  suppressHydrationWarning
                    type="submit" 
                    disabled={isSubmitting || submitted} 
                    className={`
                      w-full py-4 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 flex items-center justify-center
                      ${submitted ? 'bg-green-600 text-white' : 
                        isSubmitting ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 
                        'bg-gradient-to-r from-[#D8ECF8] to-white text-[#05060f] hover:shadow-lg hover:shadow-[#D8ECF8]/20'}
                    `}
                  >
                    {submitted ? (
                      <><Check className="mr-2 w-5 h-5" />Message Sent Successfully!</>
                    ) : isSubmitting ? (
                      <><Loader2 className="mr-2 w-5 h-5 animate-spin" />Sending...</>
                    ) : (
                      <><Send className="mr-2 w-5 h-5" />Send Message</>
                    )}
                  </button>
                  
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}