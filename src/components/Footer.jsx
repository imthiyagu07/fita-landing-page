import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background text-text-main pt-32 sm:pt-48 pb-16 border-t border-primary/5 uppercase relative overflow-hidden">
            {/* Tech Grid Backdrop */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(30,27,75,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-32 text-center sm:text-left">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-3 mb-8 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xs rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-primary/20">
                                <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">F</span>
                            </div>
                            <span className="font-heading font-black text-2xl tracking-tighter text-text-main">FITA <span className="text-primary italic">GROUP</span></span>
                        </div>
                        <p className="font-body text-[0.65rem] text-text-muted/60 leading-relaxed font-bold tracking-[0.2em] mb-8 max-w-[200px]">
                            Advanced Engineering & Infrastructure Solutions for Singapore's Built Environment.
                        </p>
                        <div className="flex gap-4">
                            {['LinkedIn', 'Twitter', 'Insta'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/5 flex items-center justify-center text-[0.5rem] font-black hover:bg-primary hover:text-white transition-all duration-500">{social}</a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-black text-xs tracking-[0.3em] text-primary mb-10">System Architecture</h4>
                        <ul className="space-y-6">
                            {['Home', 'Company', 'Solutions', 'Methodology', 'Careers'].map((link) => (
                                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-text-muted hover:text-primary text-[0.6rem] font-bold tracking-[0.2em] transition-colors duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div>
                        <h4 className="font-heading font-black text-xs tracking-[0.3em] text-primary mb-10">Technical Divisions</h4>
                        <ul className="space-y-6">
                            {['Structural Engineering', 'Regulatory Compliance', 'BIM Modelling', 'Project Audits', 'Construction Mgmt'].map((link) => (
                                <li key={link}><a href="#" className="text-text-muted hover:text-primary text-[0.6rem] font-bold tracking-[0.2em] transition-colors duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Pin */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="font-heading font-black text-xs tracking-[0.3em] text-primary mb-10">Global Uplink</h4>
                        <div className="space-y-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-[0.55rem] font-mono text-text-muted/40 tracking-widest">Base_Operations</span>
                                <p className="text-text-main text-[0.7rem] font-bold leading-relaxed tracking-wider italic">
                                    33 WESTGATE TOWER<br />
                                    JURONG EAST, SG 608537
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[0.55rem] font-mono text-text-muted/40 tracking-widest">Comm_Registry</span>
                                <p className="text-primary text-[0.7rem] font-black tracking-wider">
                                    CONTACT@FITAGLOBAL.COM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <p className="text-[0.55rem] font-mono text-text-muted tracking-[0.3em]">
                        © {new Date().getFullYear()} FITA GROUP PTE LTD. ALL SYSTEMS OPERATIONAL.
                    </p>
                    <div className="flex items-center gap-10">
                        <a href="#" className="text-[0.55rem] font-mono text-text-muted/40 hover:text-primary tracking-widest transition-colors">PRIVACY_PROTOCOL</a>
                        <a href="#" className="text-[0.55rem] font-mono text-text-muted/40 hover:text-primary tracking-widest transition-colors">USER_TERMS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
