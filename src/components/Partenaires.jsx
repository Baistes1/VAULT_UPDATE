import { partenaires, logos } from "../constants"

const Partenaires = () => {
    return (
        <div id="partenaires" className="relative bg-neutral-950 border-b border-neutral-800 py-24 px-6">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                    <p className="text-orange-500 uppercase tracking-widest text-sm font-medium mb-3">Réseau</p>
                    <h2 className="text-4xl font-bold">Nos Partenaires</h2>
                    <div className="mt-4 w-12 h-px bg-orange-500" />
                </div>
                <p className="text-neutral-500 text-sm max-w-xs leading-relaxed sm:text-right">
                    Chaque partenaire a été sélectionné selon les mêmes exigences que nos véhicules.
                </p>
            </div>

            {/* Logo strip */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                    {logos.map((l) => (
                        <div
                            key={l.nom}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <img
                                src={l.src}
                                alt={l.nom}
                                className="h-8 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                            />
                            <span className="text-neutral-600 text-[10px] uppercase tracking-widest group-hover:text-neutral-400 transition-colors duration-300">
                                {l.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Détail partenaires clés */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
                {partenaires.map((p) => (
                    <div
                        key={p.nom}
                        className="bg-neutral-950 p-8 flex flex-col gap-4 hover:bg-neutral-900 transition-colors duration-300 group"
                    >
                        <p className="text-orange-500 text-xs uppercase tracking-widest">{p.categorie}</p>
                        <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-orange-500 transition-colors duration-300">
                            {p.nom}
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{p.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Partenaires
