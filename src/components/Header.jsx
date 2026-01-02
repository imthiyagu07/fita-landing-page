import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pendingScrollRef = useRef(null); // Stores href to scroll after menu closes

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Who We Are', href: '#who-we-are' },
        { name: 'Services', href: '#services' },
        { name: 'Approach', href: '#how-we-work' },
        { name: 'Careers', href: '#careers' },
    ];

    const scrollToTarget = (href) => {
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            if (!elem) return;

            const headerOffset = 80;
            const y =
                elem.getBoundingClientRect().top +
                window.pageYOffset -
                headerOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }

        // Update URL cleanly
        window.history.pushState({}, '', href);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();

        // If menu is closed (desktop or already closed), scroll immediately
        if (!mobileMenuOpen) {
            scrollToTarget(href);
            return;
        }

        // Mobile: close menu first, then scroll after animation ends
        pendingScrollRef.current = href;
        setMobileMenuOpen(false);
    };

    // Runs exactly when mobile menu exit animation completes
    const handleMenuExitComplete = () => {
        if (pendingScrollRef.current) {
            scrollToTarget(pendingScrollRef.current);
            pendingScrollRef.current = null;
        }
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${scrolled || mobileMenuOpen
                    ? 'bg-background/80 backdrop-blur-3xl border-b border-primary/5 py-4'
                    : 'bg-transparent border-b border-transparent py-8 sm:py-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col cursor-pointer relative z-50"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="flex items-center gap-2">
                            <img src="/Fita-logo.png" alt="Fita Logo" className="w-8" />
                            <h1 className="font-heading text-2xl sm:text-3xl tracking-tighter text-indigo-900 flex gap-2">
                                <span className="font-black">FITA</span>
                                <span className="font-extralight">GROUP</span>
                            </h1>
                        </div>

                        <AnimatePresence>
                            {!scrolled && !mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="hidden md:block overflow-hidden"
                                >
                                    <p className="text-[0.6rem] font-bold text-indigo-900 tracking-[0.4em] uppercase mt-2.5 pl-3 border-l border-indigo-900/20">
                                        Building the Future.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="flex items-center gap-6 sm:gap-12">
                        <nav className="hidden lg:flex gap-10 text-[0.65rem] font-bold tracking-[0.25em] uppercase">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href="javascript:void(0)"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="relative text-indigo-900 hover:text-indigo-950 py-2 cursor-pointer touch-manipulation"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-900 transition-all duration-500 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <motion.a
                            href="javascript:void(0)"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="hidden sm:inline-block btn-premium px-8 py-3.5 text-[0.6rem] text-indigo-950 cursor-pointer"
                        >
                            Connect Now
                        </motion.a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center z-[60]"
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 flex flex-col items-end gap-1.5">
                                <span className={`h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'bg-white -rotate-45 w-6' : 'bg-indigo-900 w-6'}`} />
                                <span className={`h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'bg-white opacity-0' : 'bg-indigo-900 w-4'}`} />
                                <span className={`h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'bg-white rotate-45 w-6' : 'bg-indigo-900 w-5'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence onExitComplete={handleMenuExitComplete}>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:hidden fixed inset-0 z-50 flex flex-col items-center justify-center px-10
                        bg-white/80 backdrop-blur-2xl"
                    >
                        <nav className="flex flex-col items-center gap-10 mb-16 w-full z-10">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href="javascript:void(0)"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="text-3xl sm:text-4xl font-heading font-extrabold
                                    tracking-wider text-indigo-900 uppercase w-full text-center
                                    cursor-pointer touch-manipulation"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        <motion.a
                            href="javascript:void(0)"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="btn-premium w-full max-w-sm text-center py-6 text-[0.8rem]
                            bg-white text-indigo-950 cursor-pointer z-10"
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