import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-32 sm:pt-48 pb-16 border-t border-white/5 uppercase relative overflow-hidden">
            {/* Tech Grid Backdrop */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-32 text-center sm:text-left">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-10 justify-center sm:justify-start">
                            <h3 className="font-heading font-black text-3xl sm:text-4xl tracking-tighter">
                                FITA <span className="text-primary">GROUP</span>
                            </h3>
                        </div>
                        <p className="font-body text-white/30 text-[0.65rem] tracking-[0.3em] leading-relaxed normal-case mb-12 sm:pr-12 max-w-sm mx-auto sm:mx-0">
                            A leading provider of integrated engineering, design, and construction solutions. We build with precision and purpose.
                        </p>
                        <div className="flex gap-6 justify-center sm:justify-start">
                            {[
                                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, label: "LinkedIn" },
                                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, label: "Instagram" },
                                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>, label: "YouTube" }
                            ].map((social, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="hidden sm:block">
                        <h4 className="text-[0.65rem] font-black tracking-[0.5em] text-white/20 mb-12">Quick Access</h4>
                        <ul className="space-y-6 text-[0.75rem] font-bold tracking-[0.2em]">
                            {['About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-primary transition-colors duration-300">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Divisions */}
                    <div className="hidden lg:block">
                        <h4 className="text-[0.65rem] font-black tracking-[0.5em] text-white/20 mb-12">Our Divisions</h4>
                        <ul className="space-y-6 text-[0.75rem] font-bold tracking-[0.2em] text-white/40">
                            <li className="hover:text-white transition-colors cursor-default">Design & Engineering</li>
                            <li className="hover:text-white transition-colors cursor-default">Building Construction</li>
                            <li className="hover:text-white transition-colors cursor-default">Regulatory Compliance</li>
                            <li className="hover:text-white transition-colors cursor-default">Training Academy</li>
                            <li className="hover:text-white transition-colors cursor-default">Consultancy Services</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[0.65rem] font-black tracking-[0.5em] text-white/20 mb-12 uppercase">Headquarters</h4>
                        <div className="space-y-10">
                            <div className="text-center sm:text-left">
                                <div className="text-[0.6rem] font-black tracking-[0.4em] text-primary/40 mb-3">Location</div>
                                <div className="text-[0.8rem] font-bold normal-case text-white/70">Jurong East, Singapore 609923</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-[0.6rem] font-black tracking-[0.4em] text-primary/40 mb-3">Communication</div>
                                <div className="text-[0.8rem] font-bold lowercase text-white/70">contact@fitaglobal.com</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-[0.6rem] font-black tracking-[0.4em] text-primary/40 mb-3">Technical Line</div>
                                <div className="text-[0.8rem] font-bold lowercase text-white/70">+65 6XXX XXXX</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div>
                        <p className="text-[0.6rem] text-white/20 tracking-[0.4em] font-black mb-4">
                            &copy; {new Date().getFullYear()} FITA GROUP PTE LTD. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex gap-8 justify-center md:justify-start text-[0.55rem] text-white/10 tracking-[0.4em] font-bold uppercase">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="text-[0.65rem] text-primary/40 tracking-[0.5em] font-black animate-pulse uppercase">
                            Engineering Excellence • Singapore
                        </div>
                        <div className="w-32 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
