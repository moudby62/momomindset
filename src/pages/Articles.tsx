import { Clock, User, ArrowRight } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Comment transformer ta douleur en force",
    excerpt: "Découvre les 5 étapes essentielles pour convertir tes blessures en sagesse et en puissance personnelle.",
    author: "Mohamoud Condé",
    date: "4 décembre 2024",
    readTime: "8 min",
    category: "Résilience",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 2,
    title: "L'art de l'authenticité : Être vrai dans un monde de façades",
    excerpt: "Pourquoi être authentique est ta plus grande force, et comment cultiver cette authenticité au quotidien.",
    author: "Mohamoud Condé",
    date: "1 décembre 2024",
    readTime: "6 min",
    category: "Authenticité",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 3,
    title: "Maîtriser ton mindset : Les fondamentaux",
    excerpt: "Les principes clés pour développer un mindset fort et résilient face aux défis de la vie.",
    author: "Mohamoud Condé",
    date: "28 novembre 2024",
    readTime: "10 min",
    category: "Mindset",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 4,
    title: "La solitude : Ennemi ou allié ?",
    excerpt: "Comprendre la solitude et comment l'utiliser comme outil de croissance personnelle.",
    author: "Mohamoud Condé",
    date: "25 novembre 2024",
    readTime: "7 min",
    category: "Introspection",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 5,
    title: "Construire une confiance inébranlable en toi-même",
    excerpt: "Les stratégies pratiques pour renforcer ta confiance et croire en ta valeur.",
    author: "Mohamoud Condé",
    date: "22 novembre 2024",
    readTime: "9 min",
    category: "Confiance",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 6,
    title: "Lâcher prise : Le secret de la liberté",
    excerpt: "Apprends à lâcher prise sur ce que tu ne peux pas contrôler et trouve la paix intérieure.",
    author: "Mohamoud Condé",
    date: "19 novembre 2024",
    readTime: "8 min",
    category: "Sagesse",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
]

export default function Articles() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Articles & Conseils
          </h1>
          <p className="text-xl text-gray-300">
            Développe ton mindset et ta force mentale avec nos articles inspirants
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 flex flex-col animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className={`h-40 rounded-lg mb-6 ${article.image}`}></div>

                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 leading-tight flex-grow">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-dark-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>

                {/* Date & Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <button className="flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors font-medium">
                    Lire plus
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-secondary">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
