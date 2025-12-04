import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas')
      return
    }
    console.log('Register:', formData)
  }

  return (
    <div className="bg-dark-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-dark-900 font-bold text-2xl mx-auto mb-4">
            M
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">
            MomoMindset
          </h1>
          <p className="text-gray-400">Rejoins la communauté gratuite</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nom complet
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-500" size={20} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field pl-10"
                placeholder="Ton nom"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Adresse email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-500" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field pl-10"
                placeholder="ton.email@exemple.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field pl-10 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gold-500 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Au moins 8 caractères</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={20} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input-field pl-10 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gold-500 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 rounded bg-dark-800 border-dark-600 text-gold-500 cursor-pointer mt-0.5"
            />
            <span>
              J'accepte les{' '}
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
                conditions d'utilisation
              </a>
              {' '}et la{' '}
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
                politique de confidentialité
              </a>
            </span>
          </label>

          {/* Newsletter Signup */}
          <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 rounded bg-dark-800 border-dark-600 text-gold-500 cursor-pointer mt-0.5"
            />
            <span>
              Oui, je veux recevoir la newsletter MomoMindset Letter
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!agreeTerms}
            className={`btn-primary w-full ${!agreeTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Créer mon compte
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-dark-700"></div>
          <span className="text-gray-500 text-sm">ou</span>
          <div className="flex-1 h-px bg-dark-700"></div>
        </div>

        {/* Social Signup */}
        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-300 hover:border-gold-500/50 hover:text-gold-500 transition-all font-medium">
            S'inscrire avec Google
          </button>
          <button className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-300 hover:border-gold-500/50 hover:text-gold-500 transition-all font-medium">
            S'inscrire avec Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-8 text-center text-gray-400">
          Tu as déjà un compte ?{' '}
          <Link to="/login" className="text-gold-500 hover:text-gold-400 font-semibold transition-colors">
            Se connecter
          </Link>
        </p>

        {/* Benefits */}
        <div className="mt-8 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-xs text-gray-400 mb-3 font-semibold">Ton compte inclut :</p>
          <ul className="space-y-2">
            {[
              'Accès à la communauté',
              'Forum privé',
              'Ressources exclusives',
              'Newsletter gratuite'
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle size={14} className="text-gold-500 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
