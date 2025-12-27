import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ title, items, buttonText, link, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-neutral-950 border border-white/5 p-10 sm:p-12 overflow-hidden transition-all duration-700 hover:border-primary/30 hover:bg-neutral-900 rounded-[2.5rem] flex flex-col h-full"
        >
            {/* Background Tech Snippet */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                        {title}
                    </h3>
                </div>

                <ul className="mb-14 space-y-6 grow">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-5 text-white/30 text-[0.85rem] font-medium tracking-wide group-hover:text-white/60 transition-colors duration-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 group-hover:bg-primary transition-colors duration-500 shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                <motion.a
                    whileHover={{ x: 5 }}
                    href={link}
                    className="btn-outline w-full text-center py-5 text-[0.65rem] tracking-[0.3em]"
                >
                    {buttonText}
                </motion.a>
            </div>

            {/* Subtle bottom accent line */}
            <div className="absolute bottom-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
        </motion.div>
    );
};

const CorePillars = () => {
    const pillars = [
        {
            title: "CONSTRUCTION",
            items: ["Building Construction", "Structural & Steel Works", "Quality & Safety Compliance"],
            buttonText: "View Capability",
            link: "#construction"
        },
        {
            title: "DESIGN & ENGINEERING",
            items: ["Engineering Consultancy", "Welding Engineering", "Technical Audits"],
            buttonText: "View Services",
            link: "#engineering"
        },
        {
            title: "TRAINING",
            items: ["ISO Auditor Training", "Standard Based Modules", "Customized Programs"],
            buttonText: "View Programs",
            link: "#training"
        }
    ];

    return (
        <section id="services" className="py-32 sm:py-48 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-px bg-primary/40"></div>
                            <span className="text-primary text-[0.65rem] font-black tracking-[0.5em] uppercase">Core Solutions</span>
                        </div>
                        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-[1.1] sm:leading-[0.85]">
                            PRECISION <br />
                            <span className="text-white/20">MEETS SCALE.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-body text-white/30 text-base max-w-sm normal-case pb-2 leading-relaxed"
                    >
                        FITA Group operates at the intersection of traditional expertise and future-ready technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {pillars.map((pillar, idx) => (
                        <PillarCard key={idx} {...pillar} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePillars;
