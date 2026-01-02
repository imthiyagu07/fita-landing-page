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
        <section id="why-fita" className="py-32 bg-background overflow-hidden relative border-t border-primary/5">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30,27,75,0.1) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-text-main tracking-tighter mb-6 uppercase">
                        WHY <span className="text-primary italic">FITA</span> GROUP
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto opacity-30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="group relative">
                            <div className="flex items-start gap-6">
                                <div className="mt-1 w-14 h-14 shrink-0 bg-primary/5 border border-primary/5 rounded-2xl flex items-center justify-center group-hover:border-primary/30 transition-all duration-500 overflow-hidden relative shadow-sm group-hover:shadow-lg">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/1 group-hover:animate-pulse"></div>
                                    <span className="relative z-10 text-primary font-black text-base tracking-tighter">0{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-text-main text-xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-300 uppercase">
                                        {reason.title}
                                    </h3>
                                    <p className="font-body text-text-muted text-[0.9rem] leading-relaxed group-hover:text-text-main transition-colors duration-500 font-light">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Texture Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </section>
    );
};

export default WhyFita;
