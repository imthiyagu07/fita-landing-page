import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
    const roles = [
        "Technical Engineering Roles",
        "Project Management & Supervision",
        "Design & BIM Specialists",
        "Administrative & Operations"
    ];

    return (
        <section id="careers" className="py-32 sm:py-48 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.05)_0%,transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10 overflow-hidden">
                            <div className="w-10 h-px bg-primary/40"></div>
                            <span className="text-primary text-[0.65rem] font-black tracking-[0.5em] uppercase">Human Capital</span>
                        </div>

                        <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-10 tracking-tight leading-[0.9] uppercase">
                            BUILD YOUR <br />
                            <span className="text-white/30">FUTURE HERE.</span>
                        </h2>

                        <p className="font-body text-xl text-white/50 mb-16 leading-relaxed max-w-xl font-light tracking-tight">
                            We are always looking for passionate engineers, designers, and project managers to join our growing team. Shape the infrastructure of tomorrow with FITA Group.
                        </p>

                        <div className="space-y-8">
                            {roles.map((role, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                                    className="flex items-center gap-6 group cursor-pointer"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-12 h-px bg-white/10 group-hover:bg-primary transition-all duration-700 group-hover:w-20"></div>
                                    <span className="text-white/50 group-hover:text-white transition-colors duration-500 font-bold text-sm tracking-widest uppercase">{role}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-white/2 border border-white/10 p-10 sm:p-20 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-1000"></div>

                        <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mb-8 tracking-tighter">Open Applications</h3>
                        <p className="font-body text-base text-white/40 mb-12 leading-relaxed">
                            Don't see a specific role but think you'd be a great fit? Submit your interest and portfolio to our talent pool.
                        </p>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:careers@fitagroup.com"
                            className="btn-premium w-full text-center py-6 block text-[0.8rem]"
                        >
                            Apply for a Position
                        </motion.a>

                        <div className="mt-12 pt-12 border-t border-white/10 text-center">
                            <p className="text-[0.6rem] font-black text-white/20 uppercase tracking-[0.4em] leading-relaxed">
                                Competitive Benefits • Growth Mindset • Professional Development
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
