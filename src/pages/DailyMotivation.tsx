import { useState } from 'react'
import { Share2, Heart } from 'lucide-react'

interface Motivation {
  id: number
  text: string
  author: string
  category: string
  date: string
}

const motivations: Motivation[] = [
  {
    id: 1,
    text: "Ta force n'est pas dans l'absence de cicatrices, mais dans ta capacité à les transformer en sagesse.",
    author: "Mohamoud Condé",
    category: "Résilience",
    date: "Aujourd'hui"
  },
  {
    id: 2,
    text: "Le silence n'est pas une faiblesse. C'est souvent la preuve que tu as suffisamment de force pour ne pas réagir.",
    author: "Mohamoud Condé",
    category: "Sagesse",
    date: "Hier"
  },
  {
    id: 3,
    text: "Ne cherche pas à être aimé par tous. Cherche à être authentique avec toi-même.",
    author: "Mohamoud Condé",
    category: "Authenticité",
    date: "Il y a 2 jours"
  },
  {
    id: 4,
    text: "Tes blessures ne te définissent pas. C'est ce que tu en fais qui te construit.",
    author: "Mohamoud Condé",
    category: "Transformation",
    date: "Il y a 3 jours"
  },
  {
    id: 5,
    text: "La solitude n'est pas une punition. C'est parfois le seul endroit où tu peux vraiment te connaître.",
    author: "Mohamoud Condé",
    category: "Introspection",
    date: "Il y a 4 jours"
  },
  {
    id: 6,
    text: "Ton pouvoir réside dans ta capacité à choisir comment tu réagis à ce qui t'arrive.",
    author: "Mohamoud Condé",
    category: "Empowerment",
    date: "Il y a 5 jours"
  },
]

export default function DailyMotivation() {
  const [liked, setLiked] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')

  const categories = ['Tous', 'Résilience', 'Sagesse', 'Authenticité', 'Transformation', 'Introspection', 'Empowerment']

  const filteredMotivations = selectedCategory === 'Tous'
    ? motivations
    : motivations.filter(m => m.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLiked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Motivations Quotidiennes
          </h1>
          <p className="text-xl text-gray-300">
            Des messages puissants pour réveiller ta force intérieure chaque jour
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-white mb-4">Filtrer par catégorie</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold-500 text-dark-900'
                      : 'bg-dark-800 text-gray-300 hover:text-gold-500 border border-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Motivations Grid */}
          <div className="space-y-6">
            {filteredMotivations.map((motivation, index) => (
              <div
                key={motivation.id}
                className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 text-sm font-medium rounded-full">
                      {motivation.category}
                    </span>
                    <span className="text-gray-500 text-sm">{motivation.date}</span>
                  </div>

                  <p className="text-lg text-gray-100 mb-6 flex-grow leading-relaxed">
                    "{motivation.text}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                    <span className="text-gold-500 font-medium">{motivation.author}</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(motivation.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                          liked.includes(motivation.id)
                            ? 'bg-gold-500/20 text-gold-500'
                            : 'text-gray-400 hover:text-gold-500'
                        }`}
                      >
                        <Heart
                          size={18}
                          fill={liked.includes(motivation.id) ? 'currentColor' : 'none'}
                        />
                        <span className="text-sm">{liked.includes(motivation.id) ? 'Aimé' : 'Aimer'}</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-gold-500 transition-colors">
                        <Share2 size={18} />
                        <span className="text-sm">Partager</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-gold-600/20 to-gold-600/10 rounded-lg p-8 text-center border border-gold-500/30">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Reçois une motivation chaque jour
            </h2>
            <p className="text-gray-300 mb-6">
              Abonne-toi à notre newsletter pour recevoir des messages puissants directement dans ta boîte mail.
            </p>
            <button className="btn-primary">
              S'abonner à la newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
