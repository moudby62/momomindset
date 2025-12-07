import { Music, ExternalLink } from 'lucide-react'

export default function Podcast() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Podcast & Vidéos
          </h1>
          <p className="text-xl text-gray-300">
            Des conversations profondes et inspirantes sur le mindset et la transformation personnelle
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Spotify Episode */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">
              Épisode 1
            </h2>

            <div className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 overflow-hidden">
              {/* Spotify Embed */}
              <div className="mb-8 flex justify-center">
                <iframe
                  style={{
                    borderRadius: '12px'
                  }}
                  src="https://open.spotify.com/embed/episode/3SXfTDmxtOd1kfpsEsZZPy?utm_source=generator"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allowFullScreen={false}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="max-w-2xl mx-auto"
                ></iframe>
              </div>

              {/* Episode Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    Personne ne viendra te sauver — et c'est ta plus grande force
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Un message puissant sur la force mentale, la solitude, la douleur et la reconstruction personnelle. Une vérité dure, mais libératrice : Personne ne viendra te sauver… et c'est ta plus grande force.
                  </p>
                </div>

                {/* Listen on Spotify Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://open.spotify.com/episode/3SXfTDmxtOd1kfpsEsZZPy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Music size={20} />
                    Écouter sur Spotify
                  </a>
                  <a
                    href="https://open.spotify.com/episode/3SXfTDmxtOd1kfpsEsZZPy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Ouvrir le lien
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-dark-800 rounded-lg p-8 border border-dark-700 text-center">
            <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Music className="text-gold-500" size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Plus d'épisodes à venir
            </h2>
            <p className="text-gray-300 mb-6">
              Je suis en train de préparer d'autres épisodes puissants. Reste connecté pour les prochaines sorties !
            </p>
            <p className="text-gray-400 text-sm">
              Abonne-toi à ma newsletter pour être notifié des nouveaux épisodes.
            </p>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-gold-600/20 to-gold-600/10 rounded-lg p-8 text-center border border-gold-500/30">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Sois notifié des nouveaux épisodes
            </h2>
            <p className="text-gray-300 mb-6">
              Abonne-toi à notre newsletter pour recevoir les annonces des nouveaux podcasts et vidéos.
            </p>
            <a href="/newsletter" className="btn-primary">
              S'abonner
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
