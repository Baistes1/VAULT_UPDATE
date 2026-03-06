import { plans } from "../constants"

const Membership = () => {
    return (
        <div id="membership" className="relative bg-neutral-950 border-b border-neutral-800 py-24 px-6">

            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-orange-500 uppercase tracking-widest text-sm font-medium mb-3">Membership</p>
                <h2 className="text-4xl font-bold">Rejoindre VAULT</h2>
                <div className="mx-auto mt-4 w-12 h-px bg-orange-500" />
                <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
                    Deux façons d'entrer dans VAULT. L'une pour observer, l'autre pour agir.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative flex flex-col rounded-md overflow-hidden transition-all duration-300 ${
                            plan.highlight
                                ? "border border-yellow-400/60 shadow-[0_0_40px_rgba(212,175,55,0.35),0_0_80px_rgba(212,175,55,0.15)]"
                                : "border border-neutral-800 bg-neutral-950 hover:border-neutral-600"
                        }`}
                        style={plan.highlight ? {
                            background: "linear-gradient(145deg, #6B4E10 0%, #C9962A 25%, #F0C040 50%, #C9962A 75%, #6B4E10 100%)"
                        } : {}}
                    >
                        {/* Badge high ticket */}


                        <div className="p-8 flex flex-col gap-6 flex-1">

                            {/* En-tête plan */}
                            <div>
                                <p className={`text-xs uppercase tracking-widest mb-2 ${plan.highlight ? "text-yellow-900 font-semibold" : "text-neutral-500"}`}>
                                    {plan.tag}
                                </p>
                                <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-neutral-900" : "text-white"}`}>{plan.nom}</h3>
                                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-yellow-950/80" : "text-neutral-500"}`}>{plan.description}</p>
                            </div>

                            {/* Prix */}
                            <div className="flex items-end gap-1">
                                <span className={`text-4xl font-black ${plan.highlight ? "text-neutral-900" : "text-neutral-300"}`}>
                                    {plan.prix} €
                                </span>
                                <span className={`text-sm mb-1 ${plan.highlight ? "text-yellow-900/70" : "text-neutral-500"}`}>{plan.periode}</span>
                            </div>

                            {/* Séparateur */}
                            <div className={`h-px ${plan.highlight ? "bg-yellow-900/30" : "bg-neutral-800"}`} />

                            {/* Avantages */}
                            <ul className="flex flex-col gap-3">
                                {plan.avantages.map((avantage, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-yellow-950" : "text-neutral-300"}`}>
                                        <span className={`mt-0.5 shrink-0 ${plan.highlight ? "text-yellow-800" : "text-orange-500"}`}>—</span>
                                        {avantage}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button
                                className={`mt-auto w-full text-xs uppercase tracking-widest font-semibold py-4 transition-all duration-200 ${
                                    plan.highlight
                                        ? "text-yellow-300 hover:brightness-110"
                                        : "border border-neutral-700 text-neutral-300 hover:border-orange-500 hover:text-orange-500"
                                }`}
                                style={plan.highlight ? {
                                    background: "linear-gradient(90deg, #3B2800, #5C3D00, #3B2800)",
                                    boxShadow: "inset 0 1px 0 rgba(255,215,0,0.2)"
                                } : {}}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Membership
