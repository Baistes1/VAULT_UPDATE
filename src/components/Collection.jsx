import { voitures } from "../constants"

const Collection = () => {
    const populaires = voitures.filter((v) => v.populaire)

    return (
        <div id="collection" className="relative bg-neutral-950 border-b border-neutral-800 py-24 px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-orange-500 uppercase tracking-widest text-sm font-medium mb-3">Sélection actuelle</p>
                <h2 className="text-4xl font-bold">La Collection</h2>
                <div className="mx-auto mt-4 w-12 h-px bg-orange-500" />
                <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
                    On refuse plus de voitures qu'on n'en vend. Ce qui reste, c'est ce qu'on signerait.
                </p>
            </div>

            {/* Grille — populaires uniquement */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {populaires.map((v) => (
                    <div
                        key={v.id}
                        className="border border-neutral-800 bg-neutral-950 rounded-md overflow-hidden hover:border-orange-500 transition-colors duration-300 group"
                    >
                        {/* Image */}
                        <div className="w-full h-48 bg-neutral-900 overflow-hidden">
                            <img src={v.image} alt={`${v.marque} ${v.modele}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>

                        {/* Infos */}
                        <div className="p-5">
                            <p className="text-orange-500 text-xs uppercase tracking-widest mb-1">{v.marque}</p>
                            <h3 className="text-white font-semibold text-lg mb-4">{v.modele}</h3>

                            <div className="flex gap-4 text-neutral-500 text-xs">
                                <span>{v.annee}</span>
                                <span>·</span>
                                <span>{v.km.toLocaleString("fr-FR")} km</span>
                                <span>·</span>
                                <span>{v.boite}</span>
                            </div>

                            <button className="mt-5 w-full border border-orange-500 text-orange-500 text-xs uppercase tracking-widest py-2 hover:bg-orange-500 hover:text-black transition-colors duration-200">
                                Voir le dossier
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
                <button className="border border-neutral-600 text-neutral-300 text-xs uppercase tracking-widest px-10 py-3 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200">
                    Voir toute la collection
                </button>
            </div>
        </div>
    )
}

export default Collection
