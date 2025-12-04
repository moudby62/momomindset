import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Users, BookOpen, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 via-dark-900 to-dark-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Réveille ta <span className="text-gold-500">force intérieure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforme tes cicatrices en puissance. Découvre comment ta force mentale peut te mener vers une vie extraordinaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="btn-primary inline-flex items-center justify-center gap-2">
                Découvrir l'histoire <ArrowRight size={20} />
              </Link>
              <Link to="/community" className="btn-secondary inline-flex items-center justify-center gap-2">
                Rejoindre la communauté
              </Link>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce que tu trouveras ici</h2>
            <p className="section-subtitle">Un espace complet pour ta transformation personnelle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="card hover:border-gold-500/50 border border-dark-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-gold-500" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">Motivations Quotidiennes</h3>
              <p className="text-gray-400">Des messages puissants chaque jour pour te rappeler ta force.</p>
            </div>

            {/* Feature 2 */}
            <div className="card hover:border-gold-500/50 border border-dark-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-gold-500" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">Articles & Conseils</h3>
              <p className="text-gray-400">Des ressources pour développer ton mindset et ta résilience.</p>
            </div>

            {/* Feature 3 */}
            <div className="card hover:border-gold-500/50 border border-dark-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-gold-500" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">Communauté</h3>
              <p className="text-gray-400">Connecte-toi avec d'autres personnes en quête de transformation.</p>
            </div>

            {/* Feature 4 */}
            <div className="card hover:border-gold-500/50 border border-dark-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-gold-500" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">Ressources Gratuites</h3>
              <p className="text-gray-400">Des outils et guides pour accélérer ta croissance personnelle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Prêt à commencer ton voyage ?</h2>
          <p className="section-subtitle">Rejoins une communauté de personnes qui transforment leurs vies</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary">
              Créer un compte gratuit
            </Link>
            <Link to="/newsletter" className="btn-secondary">
              S'abonner à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
