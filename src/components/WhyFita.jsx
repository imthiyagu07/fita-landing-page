import React from 'react';

const WhyFita = () => {
    const reasons = [
        { title: "Precision Design", desc: "Expert engineering design services with PE endorsement and BIM integration." },
        { title: "Technical Construction", desc: "Complex structural and civil engineering projects delivered on schedule." },
        { title: "Specialized Training", desc: "Industry-accredited programs for the next generation of construction leaders." },
        { title: "Holistic Compliance", desc: "Seamless navigation of local and international regulatory frameworks." },
        { title: "Future-Ready Tech", desc: "Adopting advanced VDC and engineering tools across all project phases." }
    ];

    return (
        <section className="py-32 bg-black overflow-hidden relative border-t border-white/5">
            {/* Tech Grid Background (Hero Aesthetic) */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56,189,248,0.1) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20 text-center">
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-white tracking-tighter mb-4 uppercase">
                        WHY <span className="text-primary">FITA</span> GROUP
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="group relative">
                            <div className="flex items-start gap-6">
                                <div className="mt-1 w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                                    <span className="relative z-10 text-primary font-black text-sm tracking-tighter">0{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-lg mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <p className="font-body text-white/40 text-[0.85rem] leading-relaxed group-hover:text-white/60 transition-colors">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Texture Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </section>
    );
};

export default WhyFita;
