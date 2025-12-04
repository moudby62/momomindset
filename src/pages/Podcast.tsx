import { Play, Calendar, Clock } from 'lucide-react'

interface Episode {
  id: number
  title: string
  description: string
  date: string
  duration: string
  image: string
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "Épisode 1 : Mon parcours vers la force mentale",
    description: "Découvre mon histoire et comment j'ai transformé mes cicatrices en puissance.",
    date: "À venir",
    duration: "45 min",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 2,
    title: "Épisode 2 : Les secrets de la résilience",
    description: "Les 5 principes clés pour développer une résilience inébranlable.",
    date: "À venir",
    duration: "38 min",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 3,
    title: "Épisode 3 : Authenticité vs Acceptation",
    description: "Comment rester authentique tout en acceptant les autres.",
    date: "À venir",
    duration: "42 min",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
]

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-gold-500" size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Les épisodes arrivent bientôt
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Je suis en train de préparer une série de podcasts et vidéos inspirants. Reste connecté pour les premières sorties !
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 animate-slideUp group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className={`h-40 rounded-lg mb-6 ${episode.image} flex items-center justify-center group-hover:bg-gold-500/30 transition-colors`}>
                  <Play className="text-gold-500/60 group-hover:text-gold-500 transition-colors" size={40} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {episode.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm">
                  {episode.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-6 border-t border-dark-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{episode.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-r from-gold-600/20 to-gold-600/10 rounded-lg p-8 text-center border border-gold-500/30">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Sois notifié des nouveaux épisodes
            </h2>
            <p className="text-gray-300 mb-6">
              Abonne-toi à notre newsletter pour recevoir les annonces des nouveaux podcasts et vidéos.
            </p>
            <button className="btn-primary">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
