import { Clock, User, ArrowRight } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Comment guérir d'un passé difficile et redevenir fort mentalement",
    excerpt: "Tu es né pour être aimé. Mais tout le monde ne sait pas aimer. Découvre comment reconstruire ta confiance après les blessures d'enfance.",
    content: `Tu es né pour être aimé.
Mais tout le monde ne sait pas aimer. Et parfois, tu as dû survivre là où tu aurais dû être protégé.

**Pourquoi les blessures d'enfance t'ont rendu silencieux**

Les blessures d'enfance ne disparaissent pas. Elles se transforment. Elles deviennent du silence. Un silence protecteur. Un silence qui te dit : "Parle moins, tu seras moins blessé."

Mais ce silence a un prix. Il te coupe du monde. Il te rend invisible. Et pendant longtemps, tu as cru que c'était la seule façon de survivre.

**Pourquoi tu t'es isolé pour survivre**

L'isolement n'est pas une faiblesse. C'est un mécanisme de survie. Quand le monde extérieur te fait mal, tu te retires. Tu construis des murs. Tu crées un espace où personne ne peut t'atteindre.

Pendant des années, tu as pensé que c'était la solution. Que si tu restais seul, tu serais en sécurité. Que si tu ne faisais confiance à personne, personne ne pourrait te trahir.

Et tu avais raison. Mais tu avais aussi tort.

**Comment reconstruire ta confiance**

La confiance ne se reconstruit pas en un jour. Elle se reconstruit en petits pas. En petites victoires. En moments où tu décides que la peur ne t'arrêtera plus.

Commence par toi. Fais confiance à tes instincts. Écoute ta voix intérieure. Celle qui sait ce qui est bon pour toi.

Ensuite, prends des risques calculés. Ouvre-toi à une personne. Puis à une autre. Lentement. Prudemment. Mais résolument.

**Pourquoi ressentir "aucune émotion" est un mécanisme de défense**

Tu as appris à ne rien ressentir. Parce que ressentir, c'était souffrir. Et tu en avais assez de souffrir.

Alors tu as fermé ton cœur. Tu as construit une forteresse émotionnelle. Et pendant longtemps, tu as cru que c'était la force.

Mais la vraie force, c'est de ressentir et de continuer quand même.

**Comment redevenir un adulte stable et puissant**

Tu es maintenant un adulte. Et tu as le pouvoir de guérir. Pas en oubliant. Pas en niant. Mais en acceptant. En intégrant tes blessures dans ton histoire. En transformant ta douleur en sagesse.

Un adulte stable et puissant n'est pas quelqu'un qui n'a jamais souffert. C'est quelqu'un qui a souffert et qui a choisi de se reconstruire.

**Conclusion**

Ton passé ne définit pas ta valeur.
Il définit ta mission.

Tu as survécu à des choses que beaucoup ne pourraient pas supporter. Et cette survie t'a donné une force que peu possèdent.

Maintenant, il est temps de l'utiliser. Non pas pour te protéger du monde. Mais pour changer le monde.`,
    author: "Mohamoud Condé",
    date: "6 décembre 2024",
    readTime: "12 min",
    category: "Guérison",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 2,
    title: "Pourquoi la solitude forge les personnes les plus fortes",
    excerpt: "La plupart des gens ont peur d'être seuls. Mais toi, tu as été forcé d'y vivre. Et tu as découvert que la solitude est ta plus grande force.",
    content: `La plupart des gens ont peur d'être seuls.
Mais toi, tu as été forcé d'y vivre.

Et tu as découvert quelque chose que peu de gens comprennent : la solitude n'est pas une malédiction. C'est une école.

**La solitude t'apprend à penser**

Quand tu es seul, tu dois penser. Il n'y a personne pour te distraire. Pas de bruit. Pas de chaos. Juste toi et tes pensées.

Au début, c'est difficile. Tes pensées sont bruyantes. Elles te font mal. Elles te jugent. Elles te critiquent.

Mais avec le temps, tu apprends à les écouter. À les comprendre. À les maîtriser.

Et tu découvres que tu es plus intelligent que tu ne le pensais. Plus créatif. Plus capable.

**Elle t'apprend à ne dépendre de personne**

La solitude t'enseigne l'indépendance. Tu apprends à résoudre tes propres problèmes. À prendre tes propres décisions. À vivre selon tes propres règles.

Tu ne cherches pas l'approbation des autres. Tu ne pleures pas pour obtenir de l'aide. Tu te lèves. Tu agis. Tu avances.

Et tu découvres que tu es capable de bien plus que tu ne l'imaginais.

**Elle t'enseigne la discipline**

La solitude forge la discipline. Quand personne ne te regarde, quand personne ne t'oblige, tu dois te motiver toi-même.

Tu dois te lever le matin. Tu dois faire ce qui doit être fait. Tu dois tenir tes promesses envers toi-même.

Et cette discipline devient ton superpouvoir.

**Elle te construit un mental impossible à briser**

Un mental forgé dans la solitude est un mental qui a appris à survivre. À endurer. À persévérer.

Tu as affronté tes peurs. Tu as surmonté tes doutes. Tu as continué quand tout te disait d'abandonner.

Et maintenant, il n'y a presque rien qui peut te briser.

**La solitude ne t'a pas détruit. Elle t'a transformé.**

Pendant longtemps, tu as cru que la solitude était une punition. Une malédiction. La preuve que tu ne valais rien.

Mais tu avais tort.

La solitude était ton école. Et tu en es sorti plus fort. Plus sage. Plus puissant.

Maintenant, tu peux choisir d'être seul. Ou d'être avec d'autres. Mais tu ne dépends plus de personne pour être heureux.

Et c'est la plus grande liberté qu'on puisse avoir.`,
    author: "Mohamoud Condé",
    date: "5 décembre 2024",
    readTime: "10 min",
    category: "Force Mentale",
    image: "bg-gradient-to-br from-gold-600/20 to-gold-600/5"
  },
  {
    id: 3,
    title: "Les 5 habitudes qui peuvent changer ta vie en 30 jours",
    excerpt: "5 habitudes simples mais puissantes qui peuvent transformer ta vie en seulement 30 jours. Découvre comment commencer dès aujourd'hui.",
    content: `En 30 jours, ta vie ne sera plus la même.

Pas parce que tu vas faire quelque chose d'extraordinaire. Mais parce que tu vas faire quelque chose de simple. Tous les jours.

Voici les 5 habitudes qui peuvent changer ta vie :

**1. Te lever 1 heure plus tôt**

Ton matin détermine ta journée. Et ta journée détermine ta vie.

En te levant 1 heure plus tôt, tu te donnes du temps. Du temps pour toi. Du temps pour penser. Du temps pour planifier.

Pas de précipitation. Pas de stress. Juste toi et tes pensées.

Cette heure supplémentaire devient ton avantage compétitif. Pendant que tout le monde dort, tu travailles sur toi-même.

**2. Faire 20 minutes de silence complet**

Dans un monde bruyant, le silence est un superpouvoir.

20 minutes. Pas de téléphone. Pas de musique. Pas de distractions. Juste toi et tes pensées.

Assieds-toi. Respire. Écoute. Observe.

Ces 20 minutes vont clarifier ton esprit. Elles vont te montrer ce qui est vraiment important. Elles vont te connecter à ta force intérieure.

**3. Écrire tes objectifs chaque soir**

Écrire, c'est clarifier. C'est transformer une pensée floue en une intention précise.

Chaque soir, écris 3 objectifs pour demain. Pas des rêves vagues. Des objectifs spécifiques. Mesurables. Réalisables.

Écris aussi ce que tu as accompli aujourd'hui. Célèbre tes petites victoires.

Cette pratique va te donner de la direction. Et la direction est le début du succès.

**4. Lire 5 pages par jour**

La lecture est un voyage. Chaque page t'apporte une nouvelle idée. Une nouvelle perspective. Une nouvelle possibilité.

5 pages par jour, c'est seulement 15 minutes. Mais en 30 jours, tu auras lu 150 pages. Peut-être un livre entier.

Et ce livre va te changer. Il va te montrer que d'autres ont affronté ce que tu affrontes. Que d'autres ont réussi. Et que tu peux aussi réussir.

**5. Éliminer 1 mauvaise habitude par semaine**

Tu ne peux pas changer tout d'un coup. Mais tu peux éliminer une mauvaise habitude par semaine.

Semaine 1 : Arrête de checker ton téléphone le matin.
Semaine 2 : Arrête de manger junk food.
Semaine 3 : Arrête de procrastiner.
Semaine 4 : Arrête de te plaindre.

En 30 jours, tu auras éliminé 4 mauvaises habitudes. Et tu auras créé 5 bonnes habitudes.

**En 30 jours, ta vie ne sera plus la même.**

Ce ne sont pas des habitudes extraordinaires. Ce sont des habitudes simples. Mais c'est leur simplicité qui les rend puissantes.

Parce que tu peux les faire. Tous les jours. Sans exception.

Et c'est la répétition qui crée la transformation.

Alors commence dès demain. Ou mieux encore, commence aujourd'hui.

30 jours. 5 habitudes. Une vie transformée.

Ça commence maintenant.`,
    author: "Mohamoud Condé",
    date: "4 décembre 2024",
    readTime: "11 min",
    category: "Habitudes",
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
                className="card border border-dark-700 hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 flex flex-col animate-slideUp group cursor-pointer"
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
                <h3 className="text-xl font-serif font-bold text-white mb-3 leading-tight flex-grow group-hover:text-gold-500 transition-colors">
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
        </div>
      </section>
    </div>
  )
}
