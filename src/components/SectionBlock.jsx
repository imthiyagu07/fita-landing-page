import React from 'react';
import { motion } from 'framer-motion';

const SectionBlock = ({
    id,
    title,
    description,
    bullets = [],
    ctaText,
    bgGray = false,
    icon = "🏗️"
}) => {
    return (
        <section id={id} className={`py-32 sm:py-48 px-6 sm:px-12 lg:px-16 relative overflow-hidden ${bgGray ? 'bg-neutral-950' : 'bg-black'} border-b border-white/5`}>
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148,163,184,0.15) 1px, transparent 0)`, backgroundSize: '60px 60px' }}></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 xl:gap-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 order-2 md:order-1"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-px bg-primary/40"
                        ></motion.div>
                        <span className="text-[0.65rem] font-black tracking-[0.4em] text-primary uppercase">
                            Technical Framework
                        </span>
                    </div>

                    <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white mb-8 tracking-tight leading-[1.1] sm:leading-[0.9] uppercase">
                        {title}
                    </h2>

                    <p className="font-body text-base sm:text-lg text-white/40 mb-10 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    {bullets.length > 0 && (
                        <ul className="mb-14 space-y-6">
                            {bullets.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="flex items-start gap-6 group cursor-default"
                                >
                                    <div className="mt-2.5 w-2.5 h-px bg-primary/60 group-hover:w-5 group-hover:bg-primary transition-all duration-500"></div>
                                    <span className="font-body text-white/60 text-[0.85rem] sm:text-[0.9rem] tracking-wide leading-relaxed group-hover:text-white transition-colors duration-500">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    )}

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="btn-premium inline-block min-w-[260px] text-center"
                    >
                        {ctaText}
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 order-1 md:order-2 relative group w-full"
                >
                    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto xl:max-w-lg">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-1000"></div>

                        <div className="relative h-full w-full bg-white/3 border border-white/10 rounded-[3rem] sm:rounded-[4rem] backdrop-blur-3xl flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-colors duration-700">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="text-[8rem] sm:text-[12rem] lg:text-[14rem] filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 transform group-hover:scale-110"
                            >
                                {icon}
                            </motion.div>

                            {/* Animated scanner line */}
                            <div className="absolute inset-x-0 h-[100px] bg-linear-to-b from-transparent via-primary/10 to-transparent top-0 animate-[scan_6s_linear_infinite] pointer-events-none"></div>
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionBlock;
