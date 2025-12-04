import { Download, BookOpen, FileText, Zap } from 'lucide-react'

interface Resource {
  id: number
  title: string
  description: string
  type: string
  icon: React.ReactNode
  downloadLink: string
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Guide : Les 7 piliers de la résilience",
    description: "Un guide complet pour construire une résilience inébranlable face aux défis de la vie.",
    type: "PDF",
    icon: <FileText className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Workbook : 30 jours de transformation",
    description: "Un carnet d'exercices pratiques pour transformer ton mindset en 30 jours.",
    type: "PDF",
    icon: <BookOpen className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Affirmations quotidiennes pour la force mentale",
    description: "Une collection d'affirmations puissantes à pratiquer chaque jour.",
    type: "PDF",
    icon: <Zap className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Méditation guidée : Retrouver ta force intérieure",
    description: "Une méditation de 15 minutes pour reconnecter avec ta puissance intérieure.",
    type: "Audio",
    icon: <FileText className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Checklist : Construire ton plan de transformation",
    description: "Une checklist pratique pour structurer ton parcours de transformation.",
    type: "PDF",
    icon: <BookOpen className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Ressources recommandées : Livres & Podcasts",
    description: "Ma sélection personnelle des meilleures ressources pour ta croissance.",
    type: "PDF",
    icon: <Zap className="text-gold-500" size={24} />,
    downloadLink: "#"
  },
]

export default function Resources() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Ressources Gratuites
          </h1>
          <p className="text-xl text-gray-300">
            Des outils et guides pour accélérer ta transformation personnelle
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 flex flex-col animate-slideUp group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors">
                  {resource.icon}
                </div>

                {/* Type Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold-500 transition-colors flex-grow">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm">
                  {resource.description}
                </p>

                {/* Download Button */}
                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500/20 text-gold-500 rounded-lg hover:bg-gold-500/30 transition-colors font-medium">
                  <Download size={18} />
                  Télécharger
                </button>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 bg-dark-800 rounded-lg p-8 border border-dark-700">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Toutes les ressources sont gratuites
            </h2>
            <p className="text-gray-300 mb-4">
              Je crois que la transformation personnelle doit être accessible à tous. C'est pourquoi je partage tous ces outils gratuitement.
            </p>
            <p className="text-gray-300">
              Si tu trouves ces ressources utiles, n'hésite pas à les partager avec quelqu'un qui en aurait besoin. Ensemble, nous pouvons créer un mouvement de transformation.
            </p>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-gold-600/20 to-gold-600/10 rounded-lg p-8 text-center border border-gold-500/30">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Reçois les nouvelles ressources en priorité
            </h2>
            <p className="text-gray-300 mb-6">
              Abonne-toi à notre newsletter pour être notifié des nouveaux guides et outils.
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
