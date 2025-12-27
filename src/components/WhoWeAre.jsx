import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="py-32 sm:py-48 bg-black relative overflow-hidden border-b border-white/5">
            {/* Tech Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-3 mb-10 overflow-hidden">
                            <div className="w-10 h-px bg-primary/40"></div>
                            <span className="text-[0.65rem] font-black tracking-[0.5em] text-primary uppercase">
                                The Foundation
                            </span>
                        </div>

                        <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-10 tracking-tight leading-[0.9] uppercase">
                            ENGINEERING <br />
                            <span className="text-white/30">WITH PURPOSE.</span>
                        </h2>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
                            className="h-1 bg-primary mb-10"
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <p className="font-body text-xl sm:text-2xl text-white/80 leading-relaxed font-light tracking-tight">
                            FITA Group is a Singapore-based leader in the built environment. We don't just build; we engineer solutions that connect vision to reality.
                        </p>

                        <p className="font-body text-base text-white/40 leading-relaxed max-w-xl">
                            With an engineer-led approach, we integrate specialized design, regulatory compliance, and precision construction. Our multi-disciplinary team ensures every project adheres to the highest standards of safety, quality, and technical integrity.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                            <div className="group">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-4xl sm:text-5xl font-heading font-black text-white mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500"
                                >
                                    3+
                                </motion.div>
                                <div className="text-[0.6rem] font-bold text-white/20 uppercase tracking-[0.3em] leading-relaxed">
                                    Years of <br /> Engineering Excellence
                                </div>
                            </div>

                            <div className="group">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="text-4xl sm:text-5xl font-heading font-black text-white mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500"
                                >
                                    10+
                                </motion.div>
                                <div className="text-[0.6rem] font-bold text-white/20 uppercase tracking-[0.3em] leading-relaxed">
                                    Strategic <br /> Complex Projects
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
