import { useState } from 'react'
import { Mail, CheckCircle, Zap } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Newsletter
          </h1>
          <p className="text-xl text-gray-300">
            MomoMindset Letter – Le boost de la semaine
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-gold-600/20 to-gold-600/5 rounded-lg p-12 border border-gold-500/30 mb-16">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-gold-500" size={40} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Reçois chaque semaine un message puissant
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Pour t'aider à avancer, guérir, évoluer et réveiller ta force mentale.
              </p>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Ton adresse email"
                  className="input-field flex-grow"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  S'abonner
                </button>
              </div>

              {submitted && (
                <div className="mt-4 p-4 bg-gold-500/20 border border-gold-500/50 rounded-lg flex items-center gap-3 text-gold-500">
                  <CheckCircle size={20} />
                  <span>Merci ! Vérifie ta boîte email pour confirmer.</span>
                </div>
              )}
            </form>
          </div>

          {/* What You'll Get */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
              Ce que tu recevras
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Messages Motivants",
                  description: "Des paroles puissantes pour te rappeler ta force et ta valeur."
                },
                {
                  title: "Conseils Pratiques",
                  description: "Des stratégies concrètes pour développer ton mindset et ta résilience."
                },
                {
                  title: "Ressources Exclusives",
                  description: "Accès prioritaire aux nouveaux guides, articles et outils."
                },
                {
                  title: "Communauté",
                  description: "Connecte-toi avec d'autres personnes en quête de transformation."
                },
              ].map((item, index) => (
                <div key={index} className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "À quelle fréquence recevrai-je les emails ?",
                  a: "Tu recevras un email chaque semaine, généralement le lundi matin. C'est le moment parfait pour commencer ta semaine avec une dose de motivation."
                },
                {
                  q: "Est-ce que c'est gratuit ?",
                  a: "Oui, complètement gratuit ! Je crois que la transformation personnelle doit être accessible à tous."
                },
                {
                  q: "Puis-je me désabonner à tout moment ?",
                  a: "Bien sûr ! Chaque email contient un lien de désinscription. Pas de problème si tu veux partir."
                },
                {
                  q: "Vais-je recevoir du spam ?",
                  a: "Non, jamais. Je ne partagerai jamais ton email avec d'autres et je n'enverrai que du contenu de qualité."
                },
              ].map((item, index) => (
                <div key={index} className="card border border-dark-700 p-6">
                  <h3 className="font-serif font-bold text-lg text-white mb-3">
                    {item.q}
                  </h3>
                  <p className="text-gray-400">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              Prêt à transformer ta vie ?
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Ton adresse email"
                  className="input-field flex-grow"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
