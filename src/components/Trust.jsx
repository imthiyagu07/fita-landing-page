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
        <section className="py-32 sm:py-48 bg-surface border-y border-primary/5 relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30,27,75,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-text-main tracking-tighter mb-20 uppercase">
                        OUR <span className="text-primary opacity-80 italic">COMMITMENT</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
                        {commitments.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-10 bg-white border border-primary/5 rounded-[2.5rem] hover:border-primary/20 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-primary mb-8 group-hover:scale-125 transition-transform shadow-lg shadow-primary/20"></div>
                                <span className="relative z-10 font-body font-bold text-text-muted group-hover:text-text-main text-[0.85rem] tracking-widest uppercase text-center transition-colors">
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
