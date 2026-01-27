import { API_CONFIG, apiCall, authenticatedApiCall } from '../config/api'

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    role: 'superadmin' | 'admin'
  }
}

/**
 * @deprecated Use userLogin from userAuthService instead
 * This was the old admin-specific login
 */
export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await apiCall(API_CONFIG.ENDPOINTS.USER_LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    // Store token for future authenticated requests
    if (response.token) {
      localStorage.setItem('zeplus_auth_token', response.token)
      localStorage.setItem('zeplus_current_user', JSON.stringify(response.user))
    }

    return response
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

/**
 * Logout current user
 */
export const logoutUser = async (): Promise<void> => {
  try {
    // No backend logout endpoint, just clear local data
    localStorage.removeItem('zeplus_auth_token')
    localStorage.removeItem('zeplus_current_user')
  } catch (error) {
    console.warn('Logout error:', error)
    localStorage.removeItem('zeplus_auth_token')
    localStorage.removeItem('zeplus_current_user')
  }
}

/**
 * @deprecated This endpoint might not exist on backend
 * Verify if current user is still authenticated
 */
export const verifyAuth = async (): Promise<boolean> => {
  try {
    const token = localStorage.getItem('zeplus_auth_token')
    if (!token) return false

    // Try to get profile as a verification
    const response = await authenticatedApiCall(API_CONFIG.ENDPOINTS.GET_PROFILE, {
      method: 'GET',
    })
    return !!response
  } catch (error) {
    console.warn('Auth verification failed:', error)
    localStorage.removeItem('zeplus_auth_token')
    localStorage.removeItem('zeplus_current_user')
    return false
  }
}

/**
 * Get current user from localStorage
 */
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('zeplus_current_user')
    return user ? JSON.parse(user) : null
  } catch {
    return null
  }
}

/**
 * Check if user has authentication token
 */
export const hasAuthToken = (): boolean => {
  return !!localStorage.getItem('zeplus_auth_token')
}
