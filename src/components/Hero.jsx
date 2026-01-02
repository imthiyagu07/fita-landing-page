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
        <section
            id="home"
            className="
            relative w-full
            min-h-[90svh] sm:min-h-screen
            py-24 sm:py-28 md:py-32 lg:py-28
            bg-background text-text-main
            flex items-center justify-center overflow-hidden"
        >
            {/* Background Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(30,27,75,0.12) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Ambient Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[360px] sm:w-[700px] lg:w-[900px]
                h-[360px] sm:h-[700px] lg:h-[900px]
                bg-primary/20 rounded-full blur-[120px]"
            />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center"
            >
                {/* 🔥 STRONG PREMIUM PILL */}
                <motion.div
                    variants={itemVariants}
                    className="
                    inline-flex items-center
                    px-6 py-2.5 sm:px-5 sm:py-1.5
                    rounded-full
                    border border-primary/20
                    bg-surface
                    text-primary
                    text-[0.65rem] sm:text-[0.7rem]
                    font-black tracking-[0.35em]
                    uppercase
                    mb-6 sm:mb-8"
                >
                    <span className="relative flex h-3 w-3 mr-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-800 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-900"></span>
                    </span>
                    Engineering Ideas into Reality
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="
                    font-heading font-black tracking-tighter
                    text-[clamp(2.5rem,6vw,7rem)]
                    leading-[1.1] sm:leading-[0.95]
                    mb-6 sm:mb-8 text-primary"
                >
                    <span className="block text-text-main">BUILDING</span>
                    <span className="block bg-clip-text text-transparent
                    bg-linear-to-b from-primary via-primary to-accent">
                        TRANSFORMATION
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="
                    max-w-3xl mx-auto
                    text-base sm:text-lg md:text-xl
                    font-light mb-10 sm:mb-14
                    text-text-muted leading-relaxed"
                >
                    FITA Group integrates advanced design, precision engineering,
                    and elite construction to redefine Singapore&apos;s most complex
                    built environments.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
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

            {/* Bottom Fade */}
            <div
                className="
                absolute bottom-0 left-0 w-full h-28 sm:h-40
                bg-linear-to-t from-background via-background/50 to-transparent
                pointer-events-none"
            />
        </section>
    );
};

export default Hero;
