import logo from "../assets/logo.svg";
import { NavItems } from "../constants";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-5"
            }`}>
                <div className="max-w-7xl px-6 mx-auto">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <div className="flex items-center shrink-0">
                            <img src={logo} alt="Vault logo" className="h-9 w-auto" />
                        </div>

                        {/* Nav links */}
                        <ul className="hidden lg:flex items-center space-x-10 text-sm font-medium">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-300 hover:text-white transition-colors duration-200 relative group"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a href="#rendez-vous" className="py-2 px-4 text-sm font-medium text-neutral-300 border border-white/20 rounded-md hover:bg-white/10 transition-colors duration-200">
                                Rendez-vous
                            </a>
                            <a href="#membership" className="py-2 px-5 text-sm font-medium rounded-md bg-linear-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-all duration-300">
                                Devenir membre
                            </a>
                        </div>

                        {/* Mobile toggle */}
                        <button onClick={toggleNavbar} className="lg:hidden text-neutral-300 hover:text-white transition-colors">
                            {mobileDrawerOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer — outside nav to avoid fixed stacking context issue */}
            {mobileDrawerOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-2">
                    <ul className="text-center mb-8">
                        {NavItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a
                                    href={item.href}
                                    onClick={() => setMobileDrawerOpen(false)}
                                    className="text-xl font-medium text-neutral-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col items-center gap-4 w-48">
                        <a href="#rendez-vous" onClick={() => setMobileDrawerOpen(false)} className="w-full text-center py-2 px-4 border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                            Rendez-vous
                        </a>
                        <a href="#membership" onClick={() => setMobileDrawerOpen(false)} className="w-full text-center py-2 px-5 rounded-md bg-linear-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                            Devenir membre
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
