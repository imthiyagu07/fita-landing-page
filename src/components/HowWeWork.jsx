import React from 'react';
import { motion } from 'framer-motion';

const ApproachStep = ({ number, title, desc, delay, isEven }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex flex-col group ${isEven ? 'lg:mt-24' : ''}`}
    >
        {/* Step Marker */}
        <div className="flex items-center gap-4 mb-8">
            <div className="relative">
                <div className="w-12 h-12 bg-surface border border-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 relative">
                    {number}
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-xl bg-primary/20 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-0 transition-opacity"></div>
            </div>
            <div className="h-px bg-primary/10 grow"></div>
            <span className="font-mono text-[0.6rem] text-text-muted/40 tracking-[0.3em] font-bold">PHASE_{number}</span>
        </div>

        {/* Content Card */}
        <div className="p-8 sm:p-10 bg-surface border border-primary/5 rounded-[2.5rem] group-hover:bg-white group-hover:border-primary/20 transition-all duration-700 shadow-sm hover:shadow-xl relative overflow-hidden">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>

            <h3 className="font-heading font-black text-xl sm:text-2xl text-text-main mb-5 tracking-tight group-hover:text-primary transition-colors duration-500">
                {title}
            </h3>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed group-hover:text-text-main transition-colors duration-500 font-light">
                {desc}
            </p>

            {/* Technical Detail readout */}
            <div className="mt-8 pt-8 border-t border-primary/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[0.55rem] font-mono text-text-muted/40 uppercase tracking-widest">Protocol: Verified</span>
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                </div>
            </div>
        </div>
    </motion.div>
);

const HowWeWork = () => {
    const steps = [
        { number: "01", title: "Consult & Strategize", desc: "We begin by understanding your specific technical requirements and project goals at the highest level." },
        { number: "02", title: "Technical Design", desc: "Our engineers develop a precise design framework optimized for performance and regulatory compliance." },
        { number: "03", title: "Compliant Execution", desc: "Rigorous onsite management ensures every detail meets international safety and quality standards." },
        { number: "04", title: "Quality Assurance", desc: "Final audits and verification guarantee long-term infrastructure integrity and reliability." }
    ];

    return (
        <section id="how-we-work" className="py-32 sm:py-48 bg-background relative overflow-hidden">
            {/* Background Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/10 to-transparent"></div>
                <div className="absolute top-[30%] left-[-10%] w-[120%] h-[400px] border border-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-primary/40"></div>
                            <span className="text-primary text-[0.65rem] font-black tracking-[0.6em] uppercase">The Pipeline</span>
                        </div>
                        <h2 className="font-heading font-black text-4xl sm:text-6xl text-text-main tracking-tighter uppercase leading-[0.85]">
                            THE <br />
                            <span className="text-primary/10">METHODOLOGY.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="font-body text-text-muted text-base max-w-sm normal-case pb-2 leading-relaxed font-light"
                    >
                        A systematic integration of engineering precision and strategic oversight across the project lifecycle.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
                    {steps.map((step, idx) => (
                        <ApproachStep
                            key={idx}
                            {...step}
                            delay={idx * 0.15}
                            isEven={idx % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
