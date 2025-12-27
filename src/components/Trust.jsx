import React from 'react';

const Trust = () => {
    const commitments = [
        "ISO 9001:2015 Quality Management",
        "WSH Council bizSAFE STAR Certification",
        "Professional Engineering Accreditation",
        "Registered Structural Design Firm",
        "Authorized Singapore Training Provider",
        "BCA Licensed Contractor"
    ];

    return (
        <section className="py-32 bg-neutral-950 border-y border-white/5 relative overflow-hidden">
            {/* Tech Grid Background (Hero Aesthetic) */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56,189,248,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tighter mb-16 uppercase">
                        OUR <span className="text-primary opacity-80">COMMITMENT</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {commitments.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 bg-black/50 border border-white/5 hover:border-primary/20 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-6 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                                <span className="relative z-10 font-body font-bold text-white/40 group-hover:text-white text-[0.7rem] tracking-[0.18em] uppercase text-center transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
