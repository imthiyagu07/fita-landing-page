import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="home" className="relative w-full min-h-[90vh] sm:min-h-screen py-32 sm:py-40 md:py-48 bg-black text-white flex items-center justify-center overflow-hidden">
            {/* Tech Grid Background - Slightly more subtle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(148,163,184,0.15) 1px, transparent 0)', backgroundSize: '50px 50px' }}
            ></motion.div>

            {/* Dynamic Steel Glow - Larger and more atmospheric */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[900px] h-[400px] sm:h-[900px] bg-primary/5 rounded-full blur-[100px] sm:blur-[160px] animate-glow-pulse"
            ></motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/2 backdrop-blur-md text-primary text-[0.6rem] sm:text-[0.65rem] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-6 sm:mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Engineering • Infrastructure • Excellence
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5rem] mb-6 sm:mb-8 tracking-tighter sm:tracking-[-0.05em] leading-[1.1] sm:leading-[0.85] drop-shadow-2xl"
                >
                    <span className="block text-white/95">BUILDING</span>
                    <span className="block bg-clip-text text-transparent bg-linear-to-b from-primary via-primary/80 to-primary/40">
                        TRANSFORMATION
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto font-body text-balance text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 text-white/40 tracking-wide leading-relaxed"
                >
                    FITA Group integrates advanced design, precision engineering, and elite construction to redefine Singapore's most complex built environments.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#services"
                        className="btn-premium w-full sm:w-auto sm:min-w-[200px] py-4"
                    >
                        Our Expertise
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#how-we-work"
                        className="btn-outline w-full sm:w-auto sm:min-w-[200px] py-4"
                    >
                        The Approach
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Bottom smooth fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 sm:h-48 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
