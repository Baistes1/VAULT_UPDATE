import { voitures } from "../constants"

const RendezVous = () => {
    return (
        <div id="rendez-vous" className="relative bg-neutral-900 overflow-hidden">

            {/* Watermark décoratif */}
            <span className="pointer-events-none select-none absolute -top-4 left-0 text-[14vw] font-black text-neutral-800/25 leading-none tracking-tighter">
                RDV
            </span>

            {/* Bande orange supérieure */}
            <div className="w-full h-px bg-neutral-800" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-28">

                {/* Accroche editoriale */}
                <div className="mb-16">
                    <p className="text-orange-500 uppercase tracking-widest text-xs mb-4">Prise de contact</p>
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                        Venez voir <br />
                        <span className="text-neutral-500">par vous-même.</span>
                    </h2>
                </div>

                {/* Corps principal */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* Infos + étapes — 2 colonnes */}
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Chaque rendez-vous est privé. Pas de showroom bondé, pas de pression. Juste vous, le véhicule, et le temps qu'il faut.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { num: "01", label: "Vous choisissez un modèle" },
                                { num: "02", label: "On vous rappelle sous 24h" },
                                { num: "03", label: "Rendez-vous privatisé, Paris 8e" },
                            ].map(({ num, label }) => (
                                <div key={num} className="flex items-center gap-4">
                                    <span className="text-orange-500 font-black text-lg w-8 shrink-0">{num}</span>
                                    <span className="w-px h-5 bg-neutral-700" />
                                    <span className="text-neutral-300 text-sm">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-neutral-800 pt-8 flex flex-col gap-3 text-sm text-neutral-500">
                            <span>contact@vault-auto.fr</span>
                            <span>+33 1 23 45 67 89</span>
                        </div>
                    </div>

                    {/* Formulaire — 3 colonnes */}
                    <form className="lg:col-span-3 bg-neutral-950 border border-neutral-800 p-8 flex flex-col gap-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-neutral-500 text-xs uppercase tracking-widest">Nom</label>
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-700"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-neutral-500 text-xs uppercase tracking-widest">Téléphone</label>
                                <input
                                    type="tel"
                                    placeholder="+33 6 00 00 00 00"
                                    className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-neutral-500 text-xs uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                placeholder="votre@email.fr"
                                className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-700"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-neutral-500 text-xs uppercase tracking-widest">Véhicule souhaité</label>
                            <select className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer">
                                <option value="">Sélectionner un modèle</option>
                                {voitures.map((v) => (
                                    <option key={v.id} value={v.id}>{v.marque} {v.modele} — {v.annee}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-neutral-500 text-xs uppercase tracking-widest">Message (optionnel)</label>
                            <textarea
                                rows={3}
                                placeholder="Précisions sur votre demande..."
                                className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-700 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 text-black text-xs uppercase tracking-widest font-bold py-4 hover:bg-orange-400 transition-colors duration-200"
                        >
                            Confirmer la demande
                        </button>
                    </form>

                </div>
            </div>

            {/* Bande inférieure */}
            <div className="w-full h-px bg-neutral-800" />
        </div>
    )
}

export default RendezVous
