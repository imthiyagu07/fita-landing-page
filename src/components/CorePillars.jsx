import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="group relative p-10 bg-surface border border-primary/5 rounded-[3rem] hover:bg-white hover:border-primary/20 transition-all duration-700 shadow-sm hover:shadow-2xl"
    >
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
            {icon}
        </div>
        <h3 className="font-heading font-black text-2xl text-text-main mb-6 tracking-tight group-hover:text-primary transition-colors duration-500 uppercase">{title}</h3>
        <p className="font-body text-text-muted text-base leading-relaxed font-light group-hover:text-text-main transition-colors duration-500">
            {desc}
        </p>

        {/* Technical Accent */}
        <div className="absolute top-6 right-10 flex gap-1 items-center opacity-10 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-8 h-px bg-primary/40"></div>
            <span className="text-[0.5rem] font-mono text-primary font-bold tracking-widest uppercase">SYST_ACTV</span>
        </div>
    </motion.div>
);

const CorePillars = () => {
    const pillars = [
        {
            icon: "📐",
            title: "Design & Engineering",
            desc: "Advanced architectural design and structural engineering solutions tailored for complex infrastructure."
        },
        {
            icon: "🏙️",
            title: "Building Construction",
            desc: "Precision construction management and elite execution of strategic built environment projects."
        },
        {
            icon: "⚖️",
            title: "Regulatory Compliance",
            desc: "Strategic navigation of Singapore's regulatory frameworks ensuring 100% project integrity."
        }
    ];

    return (
        <section id="services" className="py-32 sm:py-48 bg-background relative overflow-hidden">
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
                        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-text-main tracking-tighter uppercase leading-[1.1] sm:leading-[0.85]">
                            PRECISION <br />
                            <span className="text-primary/10">MEETS SCALE.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-body text-text-muted text-base max-w-sm normal-case pb-2 leading-relaxed"
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
