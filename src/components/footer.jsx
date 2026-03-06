import { NavItems } from "../constants";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">

            {/* CTA band */}
            <div className=" py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-3">Accès privé</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Prêt à rejoindre<br />le cercle VAULT ?
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <a href="#" className="py-3 px-7 text-sm font-medium text-neutral-300 border border-white/20 rounded-md hover:bg-white/10 transition-colors duration-200 text-center">
                            Prendre rendez-vous
                        </a>
                        <a href="#" className="py-3 px-7 text-sm font-medium rounded-md bg-linear-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:scale-105 transition-all duration-300 text-center">
                            Devenir membre
                        </a>
                    </div>
                </div>
            </div>

            <hr className="mx-25 border-0 h-[1px] bg-neutral-800" />

            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold tracking-widest text-white uppercase mb-5">
                            VAULT
                        </h2>
                        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            L'accès privé aux véhicules d'exception. Sélection rigoureuse, discrétion absolue.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-neutral-400 hover:text-white hover:border-white/40 transition-all duration-200">
                                <i className="fa-brands fa-instagram" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-neutral-400 hover:text-white hover:border-white/40 transition-all duration-200">
                                <i className="fa-brands fa-linkedin-in" />
                            </a>
                            <a href="#" aria-label="WhatsApp" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-neutral-400 hover:text-white hover:border-white/40 transition-all duration-200">
                                <i className="fa-brands fa-whatsapp" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Membership */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
                            Membership
                        </h3>
                        <ul className="space-y-4">
                            {["VAULT Access", "VAULT Prestige", "Avantages membres", "Conditions d'adhésion"].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li>
                                <a href="mailto:contact@vault-auto.fr" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <i className="fa-regular fa-envelope w-4 text-center text-orange-500" />
                                    contact@vault-auto.fr
                                </a>
                            </li>
                            <li>
                                <a href="tel:+33100000000" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <i className="fa-solid fa-phone w-4 text-center text-orange-500" />
                                    +33 1 00 00 00 00
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500 leading-relaxed">
                                <i className="fa-solid fa-location-dot w-4 text-center text-orange-500 mt-0.5" />
                                <span>8 Avenue Montaigne<br />75008 Paris, France</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-600">
                        &copy; {new Date().getFullYear()} VAULT — Tous droits réservés.
                    </p>
                    <div className="flex gap-6 text-xs text-neutral-600">
                        <a href="#" className="hover:text-neutral-400 transition-colors duration-200">Mentions légales</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors duration-200">Politique de confidentialité</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors duration-200">CGU</a>
                    </div>
                    <p className="text-xs text-neutral-700">
                        Conçu par <span className="text-neutral-500">Baisyes Industry</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;