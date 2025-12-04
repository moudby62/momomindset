import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', formData)
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
          <p className="text-gray-400">Connecte-toi à ton compte</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded bg-dark-800 border-dark-600 text-gold-500 cursor-pointer" />
              Se souvenir de moi
            </label>
            <a href="#" className="text-sm text-gold-500 hover:text-gold-400 transition-colors">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            Se connecter
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-dark-700"></div>
          <span className="text-gray-500 text-sm">ou</span>
          <div className="flex-1 h-px bg-dark-700"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-300 hover:border-gold-500/50 hover:text-gold-500 transition-all font-medium">
            Continuer avec Google
          </button>
          <button className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-300 hover:border-gold-500/50 hover:text-gold-500 transition-all font-medium">
            Continuer avec Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-gray-400">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-gold-500 hover:text-gold-400 font-semibold transition-colors">
            S'inscrire
          </Link>
        </p>

        {/* Terms */}
        <p className="mt-6 text-center text-xs text-gray-500">
          En te connectant, tu acceptes nos{' '}
          <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
            conditions d'utilisation
          </a>
          {' '}et notre{' '}
          <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
            politique de confidentialité
          </a>
        </p>
      </div>
    </div>
  )
}
