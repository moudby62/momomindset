import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Users, Lock, ArrowRight, Heart, Reply } from 'lucide-react'

interface ForumPost {
  id: number
  author: string
  avatar: string
  title: string
  content: string
  category: string
  replies: number
  likes: number
  date: string
  isLocked: boolean
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "S",
    title: "Comment j'ai surmonté ma peur du jugement",
    content: "Après des années d'isolement, j'ai enfin compris que le jugement des autres n'était pas ma responsabilité...",
    category: "Témoignages",
    replies: 12,
    likes: 45,
    date: "Il y a 2 heures",
    isLocked: false
  },
  {
    id: 2,
    author: "Ahmed K.",
    avatar: "A",
    title: "Ressources pour développer la résilience",
    content: "Je partage les livres et podcasts qui m'ont vraiment aidé à renforcer mon mindset...",
    category: "Ressources",
    replies: 8,
    likes: 32,
    date: "Il y a 5 heures",
    isLocked: false
  },
  {
    id: 3,
    author: "Marie D.",
    avatar: "M",
    title: "Groupe d'entraide : Sortir de l'isolement",
    content: "Créons ensemble un espace où nous pouvons partager nos expériences et nous soutenir mutuellement...",
    category: "Groupes",
    replies: 24,
    likes: 67,
    date: "Il y a 1 jour",
    isLocked: false
  },
  {
    id: 4,
    author: "Thomas L.",
    avatar: "T",
    title: "Défi 30 jours : Transformer mon mindset",
    content: "Qui veut se joindre à moi pour un défi de 30 jours ? Chaque jour, je partagerai mes progrès...",
    category: "Défis",
    replies: 15,
    likes: 52,
    date: "Il y a 2 jours",
    isLocked: false
  },
]

export default function Community() {
  const [activeTab, setActiveTab] = useState('forum')
  const [isLoggedIn] = useState(false)

  const categories = ['Tous', 'Témoignages', 'Ressources', 'Groupes', 'Défis']

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Communauté
          </h1>
          <p className="text-xl text-gray-300">
            Connecte-toi avec d'autres personnes en quête de transformation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isLoggedIn ? (
            // Not logged in state
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-gold-500" size={40} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Rejoins notre communauté
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                L'espace membre est réservé à nos membres inscrits. Crée un compte gratuit pour accéder au forum, discuter avec d'autres membres et partager ton parcours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register" className="btn-primary inline-flex items-center justify-center gap-2">
                  Créer un compte <ArrowRight size={20} />
                </Link>
                <Link to="/login" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Se connecter
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                <div className="card border border-dark-700">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <MessageCircle className="text-gold-500" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">Forum Actif</h3>
                  <p className="text-gray-400">Discute avec d'autres membres et partage tes expériences</p>
                </div>

                <div className="card border border-dark-700">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="text-gold-500" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">Groupes d'Entraide</h3>
                  <p className="text-gray-400">Rejoins des groupes basés sur tes intérêts et défis</p>
                </div>

                <div className="card border border-dark-700">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Heart className="text-gold-500" size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">Soutien Mutuel</h3>
                  <p className="text-gray-400">Sois soutenu et soutiens les autres dans ton parcours</p>
                </div>
              </div>
            </div>
          ) : (
            // Logged in state - Forum view
            <div>
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-dark-700">
                <button
                  onClick={() => setActiveTab('forum')}
                  className={`px-4 py-3 font-medium transition-colors ${
                    activeTab === 'forum'
                      ? 'text-gold-500 border-b-2 border-gold-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Forum
                </button>
                <button
                  onClick={() => setActiveTab('groups')}
                  className={`px-4 py-3 font-medium transition-colors ${
                    activeTab === 'groups'
                      ? 'text-gold-500 border-b-2 border-gold-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Groupes
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className="px-4 py-2 rounded-full bg-dark-800 text-gray-300 hover:text-gold-500 hover:bg-dark-700 transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* New Post Button */}
              <button className="btn-primary mb-8">
                Créer une nouvelle discussion
              </button>

              {/* Forum Posts */}
              <div className="space-y-6">
                {forumPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-dark-900 font-bold flex-shrink-0">
                        {post.avatar}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-serif font-bold text-lg text-white hover:text-gold-500 cursor-pointer transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              par <span className="text-gray-300">{post.author}</span> • {post.date}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {post.content}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <button className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                            <Reply size={16} />
                            <span>{post.replies} réponses</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                            <Heart size={16} />
                            <span>{post.likes} j'aime</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-secondary">
                  Charger plus de discussions
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
