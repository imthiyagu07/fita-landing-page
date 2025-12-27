import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormField = ({ label, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="space-y-2 group"
    >
        <div className="flex justify-between items-center px-1">
            <label className="text-[0.6rem] font-bold text-white/20 uppercase tracking-[0.2em] group-focus-within:text-primary/60 transition-colors">
                {label}
            </label>
            <div className="h-px bg-white/5 grow mx-4"></div>
            <span className="text-[0.5rem] font-mono text-white/10 group-focus-within:text-primary/20 transition-colors">REQ_FL_0{delay * 10}</span>
        </div>
        {children}
    </motion.div>
);

const ContactCTA = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 sm:py-48 bg-black relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/5 pointer-events-none"></div>
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Perspective Content - 5 Cols */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-px bg-primary/40"></div>
                                <span className="text-primary text-[0.65rem] font-black tracking-[0.6em] uppercase text-shimmer">Inquiry Portal</span>
                            </div>

                            <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-10 tracking-tighter uppercase leading-[0.85]">
                                CONNECT <br />
                                <span className="text-white/20">TO EXPERTISE.</span>
                            </h2>

                            <p className="font-body text-white/40 text-lg mb-12 max-w-md font-light leading-relaxed">
                                Deploy our engineering capabilities for your next infrastructure challenge. Our technical team is standing by for strategic integration.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: "HQ_LOCATION", value: "Jurong East, Singapore" },
                                    { label: "COMM_CHANNEL", value: "contact@fitaglobal.com" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 border-l-2 border-white/5 pl-6 hover:border-primary/40 transition-colors duration-500 py-1">
                                        <span className="text-[0.6rem] font-mono text-white/20 tracking-widest">{item.label}</span>
                                        <span className="text-white/80 font-medium tracking-wide">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Data Entry Console - 7 Cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative p-1 px-1 sm:p-1.5 sm:px-1.5 bg-linear-to-br from-white/10 to-transparent rounded-[3rem] overflow-hidden group">
                            <div className="relative bg-neutral-950 p-10 sm:p-16 rounded-[2.9rem] flex flex-col gap-10">

                                {/* Console Header */}
                                <div className="flex justify-between items-center border-b border-white/5 pb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="text-[0.7rem] font-black text-white/60 tracking-[0.2em] uppercase">Security Transmission</span>
                                    </div>
                                    <span className="text-[0.6rem] font-mono text-white/10 hidden sm:block">ENCRYPTION: AES-256</span>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <FormField label="Full Name" delay={0.1}>
                                            <input
                                                type="text" name="name" onChange={handleChange}
                                                className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm"
                                                placeholder="Spec_Name"
                                            />
                                        </FormField>
                                        <FormField label="Email Registry" delay={0.2}>
                                            <input
                                                type="email" name="email" onChange={handleChange}
                                                className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm"
                                                placeholder="auth@domain.com"
                                            />
                                        </FormField>
                                    </div>

                                    <FormField label="Project Domain" delay={0.3}>
                                        <div className="relative">
                                            <select
                                                name="subject" onChange={handleChange}
                                                className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm cursor-pointer"
                                            >
                                                <option className="bg-neutral-900">Engineering & Design</option>
                                                <option className="bg-neutral-900">Construction & Infrastructure</option>
                                                <option className="bg-neutral-900">Training & Development</option>
                                                <option className="bg-neutral-900">Strategic Compliance</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </FormField>

                                    <FormField label="Technical Directive" delay={0.4}>
                                        <textarea
                                            name="message" rows="4" onChange={handleChange}
                                            className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-sm resize-none"
                                            placeholder="Transmission contents..."
                                        ></textarea>
                                    </FormField>

                                    <div className="pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            className="w-full group/btn relative"
                                        >
                                            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                            <div className="btn-premium w-full py-5 text-[0.7rem] sm:text-[0.75rem] tracking-[0.5em] relative z-10">
                                                SUBMIT
                                            </div>
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
