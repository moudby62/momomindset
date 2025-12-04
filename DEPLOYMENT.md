# Guide de Déploiement - MomoMindset

## 🚀 Déploiement sur Vercel (Recommandé)

### Prérequis
- Compte Vercel (gratuit)
- Repository GitHub : https://github.com/moudby62/momomindset

### Étapes

1. **Accéder à Vercel**
   - Va sur https://vercel.com
   - Clique sur "Sign Up" ou "Log In"

2. **Connecter GitHub**
   - Clique sur "Continue with GitHub"
   - Autorise Vercel à accéder à tes repositories

3. **Importer le Projet**
   - Clique sur "New Project"
   - Sélectionne `momomindset` dans la liste

4. **Configurer le Build**
   - **Build Command** : `pnpm build`
   - **Output Directory** : `dist`
   - **Install Command** : `pnpm install`
   - Les autres paramètres peuvent rester par défaut

5. **Déployer**
   - Clique sur "Deploy"
   - Attends que le build se termine (environ 2-3 minutes)

6. **Accéder au Site**
   - Une fois déployé, tu recevras une URL comme :
     - `https://momomindset.vercel.app`
     - Ou un domaine personnalisé si configuré

### Déploiements Automatiques
Chaque fois que tu pousses du code vers GitHub (branche `master` ou `main`), Vercel redéploiera automatiquement le site.

---

## 📦 Déploiement sur Netlify

### Étapes

1. **Accéder à Netlify**
   - Va sur https://netlify.com
   - Clique sur "Sign Up" ou "Log In"

2. **Connecter GitHub**
   - Clique sur "Connect to Git"
   - Sélectionne GitHub

3. **Sélectionner le Repository**
   - Choisis `momomindset`

4. **Configurer le Build**
   - **Build command** : `pnpm build`
   - **Publish directory** : `dist`

5. **Déployer**
   - Clique sur "Deploy site"

---

## 🔧 Variables d'Environnement

Actuellement, le site n'a pas besoin de variables d'environnement. Si tu ajoutes une API backend à l'avenir, tu pourras les configurer dans :

- **Vercel** : Settings → Environment Variables
- **Netlify** : Site settings → Build & deploy → Environment

---

## 📝 Notes Importantes

- Le site est un **frontend React pur** sans backend
- Les formulaires (Contact, Newsletter) sont mockés et ne font que des logs console
- Pour les fonctionnalités backend, tu devras ajouter une API (Node.js, Python, etc.)

---

## 🆘 Dépannage

### Le build échoue
- Vérifie que `pnpm` est installé
- Assure-toi que tous les fichiers sont commitées sur GitHub
- Vérifie les logs de build sur Vercel/Netlify

### Le site ne s'affiche pas correctement
- Vide le cache du navigateur (Ctrl+Shift+Delete)
- Vérifie que les chemins des assets sont corrects
- Assure-toi que le dossier `dist` est bien généré

---

## 📞 Support

Pour plus d'aide :
- Vercel Docs : https://vercel.com/docs
- Netlify Docs : https://docs.netlify.com
- React Docs : https://react.dev
