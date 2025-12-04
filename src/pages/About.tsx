import { Link } from 'react-router-dom'
import { Heart, Lightbulb, Target } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gold-600/10 to-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-center">
            Mon histoire
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Comment j'ai transformé mes cicatrices en une mission de vie
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Je m'appelle <span className="text-gold-500 font-semibold">Mohamoud Condé</span>, je suis Guinéen, et mon parcours a forgé ma mission : aider les jeunes et les adultes à <span className="text-gold-500 font-semibold">trouver leur force mentale</span>, même lorsque la vie semble les avoir brisés.
              </p>

              <div className="bg-dark-800 border-l-4 border-gold-500 p-6 rounded">
                <p className="text-lg">
                  Dès mon enfance, on me disait souvent que j'étais "impoli" simplement parce que je parlais avec franchise, sans peur, et en regardant les gens dans les yeux. Moi, je ne voyais pas ça comme un défaut : c'était juste ma manière d'être honnête.
                </p>
              </div>

              <p className="text-lg">
                Mais l'amour que je recherchais, je ne l'ai jamais vraiment trouvé. En Afrique, l'affection n'est pas toujours exprimée comme en Occident. Moi, je voulais sentir cet amour-là… mais je ne l'ai pas reçu. Alors j'ai fait ce que font beaucoup d'enfants : j'essayais d'être remarqué, accepté, apprécié. Mais au lieu de ça, plus je faisais des efforts, plus les gens s'éloignaient.
              </p>

              <p className="text-lg">
                Certains me voyaient même comme une "mauvaise personne", alors que je n'étais qu'un gamin qui voulait être aimé.
              </p>

              <p className="text-lg">
                Avec le temps, ces blessures m'ont poussé à m'isoler. J'ai passé des années enfermé dans ma chambre : école, mosquée, toilette… et retour dans ma chambre. Personne ne me demandait pourquoi. Personne ne cherchait à comprendre.
              </p>

              <p className="text-lg">
                On préférait me juger, me critiquer, me diffamer.
              </p>

              <p className="text-lg">
                Tout cela a laissé des traces : un cœur qui n'arrive plus à ressentir l'amour, un jeune qui observe sans se plaindre, un esprit qui a dû devenir fort, seul.
              </p>

              <div className="bg-dark-800 border-l-4 border-gold-500 p-6 rounded my-8">
                <h3 className="text-xl font-serif font-bold text-gold-500 mb-4">La plus grande leçon de ma vie</h3>
                <p className="text-lg">
                  <span className="text-gold-500 font-semibold">Ne place jamais ton espoir entièrement dans quelqu'un.</span> Quand tu t'attends à ce qu'une personne te comprenne, te soutienne ou te rende fier… C'est souvent elle qui te fera le plus de mal.
                </p>
              </div>

              <p className="text-lg">
                Aujourd'hui, j'ai transformé mes blessures en mission.
              </p>

              <p className="text-lg">
                Je crée du contenu motivationnel pour aider ceux qui souffrent en silence : jeunes, adultes, hommes, femmes… toutes ces personnes qui pensent qu'elles ne valent rien, alors qu'elles ont une <span className="text-gold-500 font-semibold">force immense</span> en elles.
              </p>

              <p className="text-lg">
                Si mon vécu peut sauver quelqu'un, alors rien n'a été inutile.
              </p>

              <p className="text-lg font-semibold text-gold-500">
                Bienvenue sur MomoMindset — l'endroit où les cicatrices deviennent une puissance.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gold text-center">
              <div className="w-16 h-16 bg-dark-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-gold-500" size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Compassion</h3>
              <p>Je comprends ta douleur parce que je l'ai vécue.</p>
            </div>

            <div className="card-gold text-center">
              <div className="w-16 h-16 bg-dark-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-gold-500" size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Illumination</h3>
              <p>Découvre la lumière qui brille déjà en toi.</p>
            </div>

            <div className="card-gold text-center">
              <div className="w-16 h-16 bg-dark-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-gold-500" size={32} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Transformation</h3>
              <p>Transforme ta douleur en puissance et en action.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Prêt à rejoindre la communauté ?</h2>
            <Link to="/register" className="btn-primary">
              Créer un compte gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
