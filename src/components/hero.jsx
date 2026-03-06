const HeroSection = () => {
    return(
        <div className="relative h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay dégradé du bas vers le haut */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-wide drop-shadow-lg">VAULT</h1>
                <span className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-wide bg-linear-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-lg">
                    L’élite de l’automobile
                </span>
                <p className="mt-6 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed">
                    Découvrez une sélection d’automobiles d’exception, où le luxe et la performance se rencontrent.
                    Chaque véhicule est choisi pour offrir une expérience unique à ceux qui recherchent l’excellence.
                </p>
                <div className="flex flex-row items-center justify-center gap-4 mt-10">
                    <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity">Voir la collection</a>
                    <a href="#" className="py-3 px-6 rounded-md border border-white/40 backdrop-blur-sm hover:bg-white/10 transition-colors">Devenir membre</a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection