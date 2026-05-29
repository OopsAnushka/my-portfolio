// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// /* ─── Data ─────────────────────────────────────────────────── */
// const timelineEvents = [
//   {
//     year: '2023',
//     title: 'Foundations',
//     description:
//       'Began the integrated MCA program at IIPS, DAVV. Stepped up as a Placement Cell Coordinator and Lead Anchor, building the organizational structure essential for leading technical teams.',
//     phase: 'SYS.INIT // 01',
//     color: '#8B5CF6',
//     glow: 'rgba(139,92,246,0.2)',
//     icon: (
//       <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
//         <path d="M27 11 L43 21 L43 29 L27 39 L11 29 L11 21 Z"
//           stroke="#8B5CF6" strokeWidth="1.5" fill="rgba(139,92,246,0.1)" />
//         <circle cx="27" cy="27" r="5.5" fill="#8B5CF6" fillOpacity="0.7" />
//         <line x1="27" y1="11" x2="27" y2="18" stroke="#8B5CF6" strokeWidth="1.5" />
//         <line x1="27" y1="36" x2="27" y2="43" stroke="#8B5CF6" strokeWidth="1.5" />
//       </svg>
//     ),
//   },
//   {
//     year: '2024',
//     title: 'Algorithmic Rigor',
//     description:
//       'Dedicated focus on competitive programming via Codeforces. Forging a robust foundation in complex algorithms to ensure backend systems are as efficient as they are visually striking.',
//     phase: 'CORE.LOGIC // 02',
//     color: '#6366F1',
//     glow: 'rgba(99,102,241,0.2)',
//     icon: (
//       <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
//         <rect x="10" y="23" width="11" height="8" rx="2"
//           stroke="#6366F1" strokeWidth="1.5" fill="rgba(99,102,241,0.15)" />
//         <rect x="33" y="23" width="11" height="8" rx="2"
//           stroke="#6366F1" strokeWidth="1.5" fill="rgba(99,102,241,0.15)" />
//         <line x1="21" y1="27" x2="33" y2="27" stroke="#6366F1" strokeWidth="1.5" />
//         <path d="M23 17 L31 17 M23 37 L31 37"
//           stroke="#6366F1" strokeWidth="1.2" strokeOpacity="0.4" />
//         <circle cx="27" cy="27" r="15" stroke="#6366F1" strokeWidth="0.5"
//           strokeDasharray="3 3" strokeOpacity="0.25" />
//       </svg>
//     ),
//   },
//   {
//     year: '2024',
//     title: 'Visual Engineering',
//     description:
//       'Transitioned to crafting immersive digital anatomies. Mastered Next.js, Framer Motion, and GSAP to build interactive spaces where function and beauty seamlessly meet.',
//     phase: 'UI.ARCHITECT // 03',
//     color: '#3B82F6',
//     glow: 'rgba(59,130,246,0.2)',
//     icon: (
//       <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
//         <path d="M29 11 L23 25 L29 25 L25 43 L31 29 L25 29 Z"
//           stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.12)" />
//         <circle cx="27" cy="27" r="16" stroke="#3B82F6"
//           strokeWidth="0.5" strokeOpacity="0.2" />
//       </svg>
//     ),
//   },
//   {
//     year: '2025',
//     title: 'High-Stakes Systems',
//     description:
//       'Architected PARAMARSH for the Smart India Hackathon. Engineered complex platforms including AeroCare (medical PWA) and SecureDoc AI with intelligent watermarking.',
//     phase: 'PROD.DEPLOY // 04',
//     color: '#06B6D4',
//     glow: 'rgba(6,182,212,0.2)',
//     icon: (
//       <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
//         <rect x="14" y="17" width="26" height="20" rx="3"
//           stroke="#06B6D4" strokeWidth="1.5" fill="none" />
//         <rect x="18" y="21" width="8" height="12" rx="1"
//           stroke="#06B6D4" strokeWidth="1" fill="rgba(6,182,212,0.15)" />
//         <rect x="28" y="21" width="8" height="5" rx="1"
//           stroke="#06B6D4" strokeWidth="1" fill="none" />
//         <rect x="28" y="28" width="8" height="5" rx="1"
//           stroke="#06B6D4" strokeWidth="1" fill="none" />
//         <path d="M21 37 L33 37 L33 41 L21 41 Z"
//           stroke="#06B6D4" strokeWidth="1" fill="none" />
//       </svg>
//     ),
//   },
//   {
//     year: 'Now',
//     title: 'The Road to Excellence',
//     description:
//       'Gearing up for the NIMCET to pursue advanced MCA studies at top-tier institutions, continually pushing the boundaries of full-stack creative development.',
//     phase: 'FUTURE.STATE // 05',
//     color: '#10B981',
//     glow: 'rgba(16,185,129,0.2)',
//     icon: (
//       <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
//         <path
//           d="M27 11 C27 11 35 19 35 27 C35 35 27 43 27 43 C27 43 19 35 19 27 C19 19 27 11 27 11Z"
//           stroke="#10B981" strokeWidth="1.5" fill="rgba(16,185,129,0.1)" />
//         <circle cx="27" cy="27" r="4.5" fill="#10B981" fillOpacity="0.8" />
//         <path
//           d="M27 11 L27 15 M27 39 L27 43 M11 27 L15 27 M39 27 L43 27"
//           stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.35" />
//       </svg>
//     ),
//   },
// ];

// /* ─── Orb ───────────────────────────────────────────────────── */
// function Orb({
//   event,
//   index,
//   isActive,
//   onClick,
// }: {
//   event: (typeof timelineEvents)[0];
//   index: number;
//   isActive: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <motion.button
//       onClick={onClick}
//       className="flex flex-col items-center gap-0 focus:outline-none group"
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//       whileHover="hover"
//       whileTap={{ scale: 0.95 }}
//     >
//       {/* Circle */}
//       <motion.div
//         className="relative w-[128px] h-[128px] rounded-full flex items-center justify-center mb-3"
//         variants={{ hover: { y: -7 } }}
//         transition={{ type: 'spring', stiffness: 260, damping: 22 }}
//         style={{
//           background: '#0d0d0d',
//           border: `1px solid ${isActive ? event.color + '60' : '#1e1e1e'}`,
//           boxShadow: isActive
//             ? `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px ${event.color}25, 0 16px 48px ${event.glow}`
//             : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.6)',
//           transition: 'border-color 0.35s, box-shadow 0.35s',
//         }}
//       >
//         {/* Gloss */}
//         <div
//           className="absolute pointer-events-none rounded-full"
//           style={{
//             top: 10, left: 22, width: 60, height: 24,
//             background: 'rgba(255,255,255,0.035)',
//             filter: 'blur(3px)',
//           }}
//         />
//         {/* Icon */}
//         <motion.div
//           animate={{ scale: isActive ? 1.1 : 1 }}
//           transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//         >
//           {event.icon}
//         </motion.div>
//       </motion.div>

//       {/* Phase tag */}
//       <span
//         className=" text-[10px] tracking-[0.18em] uppercase mb-[5px] transition-colors duration-300"
//         style={{ color: isActive ? event.color : '#757373' }}
//       >
//         {event.phase}
//       </span>

//       {/* Title */}
//       <span
//         className="text-[13px] text-center leading-tight transition-colors duration-300"
//         style={{ color: isActive ? '#666' : '#757373', maxWidth: 96 }}
//       >
//         {event.title}
//       </span>
//     </motion.button>
//   );
// }

// /* ─── Main Section ──────────────────────────────────────────── */
// export default function TimelineSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const activeEvent = activeIndex !== null ? timelineEvents[activeIndex] : null;

//   const toggle = (i: number) =>
//     setActiveIndex(prev => (prev === i ? null : i));

//   return (
//     <section
//       id="timeline"
//       className="relative bg-black py-20 md:py-32 overflow-hidden"
//     >
//       {/* ── Header ── */}
//       <div className="text-center mb-14 md:mb-20 px-4">

//         <motion.h2
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1, duration: 0.55 }}
//           className=" relative text-4xl md:text-6xl font-black text-white tracking-tight"
//         >
//           My Journey
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-neutral-600 text-base md:text-lg mt-3 max-w-sm mx-auto"
          
//         >
//           Every experience in my life is important and has taught me a lot
//         </motion.p>
//       </div>

//       {/* ══════════════════════════════════════════ */}
//       {/*  DESKTOP                                  */}
//       {/* ══════════════════════════════════════════ */}
//       <div className="hidden md:block">
//         <div className="relative mx-auto" style={{ maxWidth: 1080, paddingInline: 48 }}>

//           {/* Orbs row */}
//           <div className="flex items-end justify-between" style={{ paddingBottom: 0 }}>
//             {timelineEvents.map((ev, i) => (
//               <Orb
//                 key={i}
//                 event={ev}
//                 index={i}
//                 isActive={activeIndex === i}
//                 onClick={() => toggle(i)}
//               />
//             ))}
//           </div>

//           {/* Line + nodes */}
//           <div className="relative" style={{ height: 56, marginTop: 4 }}>
//             <svg
//               className="absolute inset-0 w-full"
//               viewBox="0 0 984 56"
//               preserveAspectRatio="none"
//               fill="none"
//               style={{ height: 56 }}
//             >
//               <defs>
//                 <linearGradient id="tlg" x1="0" y1="0" x2="984" y2="0" gradientUnits="userSpaceOnUse">
//                   <stop offset="0%" stopColor="#8B5CF6" />
//                   <stop offset="25%" stopColor="#6366F1" />
//                   <stop offset="50%" stopColor="#3B82F6" />
//                   <stop offset="75%" stopColor="#06B6D4" />
//                   <stop offset="100%" stopColor="#10B981" />
//                 </linearGradient>
//               </defs>

//               {/* Main line */}
//               <motion.line
//                 x1="0" y1="28" x2="952" y2="28"
//                 stroke="url(#tlg)" strokeWidth="1.5"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 1 }}
//                 viewport={{ amount: 0.3 }}
//                 transition={{ duration: 1.8, ease: 'easeInOut' }}
//               />

//               {/* Arrow */}
//               <motion.polygon
//                 points="946,23 956,28 946,33"
//                 fill="#10B981"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ amount: 0.3 }}
//                 transition={{ delay: 1.5, duration: 1.8, ease: 'easeOut' }}
//               />

//               {/* Nodes — at 10%, 30%, 50%, 70%, 90% of 984 */}
//               {timelineEvents.map((ev, i) => {
//                 const cx = ((i + 0.5) / timelineEvents.length) * 984;
//                 return (
//                   <motion.g
//                     key={i}
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => toggle(i)}
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ amount: 0.3  }}
//                     transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 280, damping: 18 }}
//                   >
//                     <circle cx={cx} cy="28" r="7" fill="none" stroke={ev.color}
//                       strokeWidth={activeIndex === i ? 1.5 : 0.8}
//                       strokeOpacity={activeIndex === i ? 1 : 0.5} />
//                     <circle cx={cx} cy="28" r="3"
//                       fill={activeIndex === i ? ev.color : ev.color}
//                       fillOpacity={activeIndex === i ? 1 : 0.35} />
//                   </motion.g>
//                 );
//               })}
//             </svg>
//           </div>

//           {/* Year labels */}
//           <div className="flex justify-between mt-2" style={{ paddingInline: 0 }}>
//             <motion.span
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ amount: 0.3  }}
//               transition={{ delay: 0.3 }}
//               className="text-blue-500 text-3xl font-light"
              
//             >
//               2023
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ amount: 0.3  }}
//               transition={{ delay: 0.5 }}
//               className="text-blue-500 text-3xl font-light"
//             >
//               Now
//             </motion.span>
//           </div>

//           {/* Description panel */}
//           <div className="min-h-[96px] flex items-start justify-center pt-8">
//             <AnimatePresence mode="wait">
//               {activeEvent && activeIndex !== null && (
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 6 }}
//                   transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                   className="text-center max-w-[500px]"
//                 >
//                   <span
//                     className="inline-block text-[9px] tracking-[0.22em] uppercase px-3 py-[5px] rounded-full border mb-3"
//                     style={{
//                       color: activeEvent.color,
//                       borderColor: activeEvent.color + '35',
//                       background: activeEvent.color + '0e',
//                     }}
//                   >
//                     {activeEvent.phase}
//                   </span>
//                   <h3
//                     className="text-white text-xl mb-3 "
                  
//                   >
//                     {activeEvent.title}
//                   </h3>
//                   <p className="text-neutral-600 text-sm leading-relaxed">
//                     {activeEvent.description}
//                   </p>
//                   <div
//                     className="mt-5 mx-auto h-px w-20"
//                     style={{
//                       background: `linear-gradient(to right, transparent, ${activeEvent.color}50, transparent)`,
//                     }}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════ */}
//       {/*  MOBILE                                   */}
//       {/* ══════════════════════════════════════════ */}
//       <div className="md:hidden px-5">
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="absolute left-[25px] top-0 bottom-0 w-px">
//             <motion.div
//               className="w-full h-full"
//               style={{
//                 background:
//                   'linear-gradient(to bottom, #8B5CF6, #6366F1, #3B82F6, #06B6D4, #10B981)',
//                 transformOrigin: 'top',
//               }}
//               initial={{ scaleY: 0 }}
//               whileInView={{ scaleY: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.4, ease: 'easeInOut' }}
//             />
//           </div>

//           <div className="space-y-5">
//             {timelineEvents.map((ev, i) => {
//               const isActive = activeIndex === i;
//               return (
//                 <motion.div
//                   key={i}
//                   className="relative flex items-start gap-4 pl-[58px]"
//                   initial={{ opacity: 0, x: -14 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.09, duration: 0.4 }}
//                 >
//                   {/* Mini orb node */}
//                   <button
//                     onClick={() => toggle(i)}
//                     className="absolute left-0 top-0 w-[50px] h-[50px] rounded-full flex items-center justify-center focus:outline-none"
//                     style={{
//                       background: '#0d0d0d',
//                       border: `1px solid ${isActive ? ev.color + '60' : '#1e1e1e'}`,
//                       boxShadow: isActive ? `0 0 16px ${ev.glow}` : 'none',
//                       transition: 'all 0.3s',
//                     }}
//                   >
//                     <div style={{ transform: 'scale(0.6)', transformOrigin: 'center' }}>
//                       {ev.icon}
//                     </div>
//                   </button>

//                   {/* Content card */}
//                   <button
//                     onClick={() => toggle(i)}
//                     className="w-full text-left rounded-xl focus:outline-none"
//                     style={{
//                       background: isActive ? ev.color + '07' : 'transparent',
//                       border: `1px solid ${isActive ? ev.color + '30' : '#181818'}`,
//                       padding: '13px 15px',
//                       transition: 'all 0.3s',
//                     }}
//                   >
//                     <div className="flex justify-between items-center mb-[3px]">
//                       <span
//                         className=" text-[10px] tracking-widest uppercase"
//                         style={{ color: ev.color }}
//                       >
//                         {ev.year}
//                       </span>
//                       <span className="text-[8px] text-neutral-800">
//                         {ev.phase}
//                       </span>
//                     </div>
//                     <p className="text-white font-medium text-[15px]">{ev.title}</p>

//                     <AnimatePresence>
//                       {isActive && (
//                         <motion.p
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.28 }}
//                           className="font-mono text-neutral-600 text-xs leading-relaxed mt-2 overflow-hidden"
//                         >
//                           {ev.description}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>

//           <motion.p
//             className="mt-10 text-center text-gray-100 text-xs tracking-widest"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6 }}
//             style={{ fontStyle: 'italic' }}
//           >
//             → and the journey continues...
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }