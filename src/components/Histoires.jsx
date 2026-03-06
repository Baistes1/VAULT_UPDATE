const Histoire = () => {
    return (
        <div id="histoire" className="relative mt-20 border-b border-neutral-800 py-24 px-6">
            {/* Header */}
            <div className="text-center mb-20">
                <p className="text-orange-500 uppercase tracking-widest text-sm font-medium mb-3">Depuis 2009</p>
                <h2 className="text-4xl font-bold">Notre Histoire</h2>
                <div className="mx-auto mt-4 w-12 h-px bg-orange-500" />
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
                {/* Ligne verticale */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-700 hidden md:block" />

                {/* Étape 1 */}
                <div className="flex gap-10 mb-16 items-start">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0 bg-black z-10">
                            2009
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">Trois voitures et un téléphone</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            VAULT démarre dans un box loué à Levallois. Pas d'enseigne, pas de site. Les premiers clients arrivent parce qu'un ami leur a passé le numéro. On achète ce qu'on trouve, on vend à qui sait écouter. Pas de plan sur cinq ans. Juste l'idée que ça pouvait marcher si on ne bâclait rien.
                        </p>
                    </div>
                </div>

                {/* Étape 2 */}
                <div className="flex gap-10 mb-16 items-start">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0 bg-black z-10">
                            2016
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">La GT3 vendue sans être vue</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Une 911 GT3 RS, 4 200 km, vendue en 48h à un acheteur qui n'avait pas mis les pieds dans nos locaux. Juste des photos et un appel. Ce jour-là on a réalisé qu'on ne vendait pas des voitures — on vendait une certitude. Depuis, chaque véhicule passe par le même niveau d'exigence, qu'il parte en deux jours ou en deux mois.
                        </p>
                    </div>
                </div>

                {/* Étape 3 */}
                <div className="flex gap-10 items-start">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0 bg-black z-10">
                            2024
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">On refuse encore des voitures chaque semaine</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Le catalogue a grandi, l'équipe aussi. Mais on continue de refuser des véhicules — mauvais historique, dossier incomplet, trop de points d'interrogation. Les membres VAULT le savent : ce qu'on propose, on y a cru avant de le montrer. Pas de remplissage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Histoire