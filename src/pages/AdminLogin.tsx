import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/images/adminbg.png'
import { userLogin } from '../services/userAuthService'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')

    try {
      const response = await userLogin(email, password)

      if (response.token && response.user) {
        navigate('/admin')
      } else {
        setError('Login failed. Please check your credentials.')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.message || 'Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#60070B] to-[#223458]" />

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />

      {/* Login Card */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-md bg-[#60070B] flex items-center justify-center mb-4">
            <img src="/Frame.png" alt="Frame" />
          </div>

          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Sign in to your Zeplus Academy dashboard
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60070B]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#60070B]/50"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3l18 18m-2.306-4.7C16.872 17.521 14.526 18.75 12 18.75c-5 0-9-4.5-9-6.75 0-1.003 1.045-2.69 2.884-4.195m3.111-2.263A7.477 7.477 0 0112 5.25c5 0 9 4.5 9 6.75 0 .834-.343 1.846-1.02 2.886M9.88 9.88A3 3 0 0114.12 14.12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#60070B] hover:bg-[#7a0a0f] text-white py-2 rounded transition"
          >
            Sign in to Dashboard
          </button>
        </form>

        <div className="text-center mt-4">
          <a className="text-sm text-[#60070B] cursor-pointer hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

