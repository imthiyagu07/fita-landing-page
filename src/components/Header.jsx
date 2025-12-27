import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Who We Are', href: '#who-we-are' },
        { name: 'Services', href: '#services' },
        { name: 'Approach', href: '#how-we-work' },
        { name: 'Careers', href: '#careers' },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled || mobileMenuOpen
                ? 'bg-black/80 backdrop-blur-3xl border-b border-white/5 py-4'
                : 'bg-transparent border-b border-transparent py-8 sm:py-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex justify-between items-center">

                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col group cursor-pointer relative z-60"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <h1 className="font-heading text-2xl sm:text-3xl tracking-tighter text-white flex items-center gap-2">
                            <span className="font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-white to-white/60 group-hover:to-primary transition-all duration-700">FITA</span>
                            <span className="font-extralight text-white/30 group-hover:text-white/70 transition-colors duration-500 tracking-[0.2em]">GROUP</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_15px_rgba(148,163,184,0.5)] group-hover:scale-150 transition-transform duration-700"></div>
                        </h1>
                        <AnimatePresence>
                            {!scrolled && !mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden origin-top hidden md:block"
                                >
                                    <p className="text-[0.6rem] font-bold text-primary tracking-[0.4em] uppercase mt-2.5 pl-3 border-l border-primary/20">
                                        Engineering the Future.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-6 sm:gap-12">
                        <nav className="hidden lg:flex gap-10 text-[0.65rem] font-bold tracking-[0.25em] uppercase">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx, ease: "easeOut" }}
                                    className="relative text-white/40 hover:text-white transition-all duration-500 group py-2"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="hidden sm:inline-block btn-premium px-8 py-3.5 text-[0.6rem]"
                        >
                            Connect Now
                        </motion.a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none z-60 relative"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 flex flex-col items-end gap-1.5">
                                <span className={`h-0.5 bg-white transition-all duration-300 origin-right ${mobileMenuOpen ? '-rotate-45 w-6' : 'w-6'}`}></span>
                                <span className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                                <span className={`h-0.5 bg-white transition-all duration-300 origin-right ${mobileMenuOpen ? 'rotate-45 w-6' : 'w-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:hidden fixed inset-0 bg-neutral-950 z-50 flex flex-col items-center justify-center px-10"
                    >
                        {/* Background subtle grid */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(148,163,184,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                        <nav className="flex flex-col items-center gap-10 mb-16 relative z-10 w-full">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="text-3xl sm:text-4xl font-heading font-black tracking-widest text-white/40 hover:text-primary transition-colors uppercase w-full text-center"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                        <motion.a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="btn-premium w-full max-w-sm text-center py-6 text-[0.8rem] relative z-10"
                        >
                            Start a Project
                        </motion.a>

                        <div className="absolute bottom-10 text-[0.6rem] font-bold text-white/20 tracking-[0.5em] uppercase">
                            FITA GROUP • SINGAPORE
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
