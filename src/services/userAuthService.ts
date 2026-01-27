import { API_CONFIG, apiCall, authenticatedApiCall } from '../config/api'

export interface LoginResponse {
  token?: string
  user?: {
    id: string
    email: string
    firstName: string
    lastName: string
  }
  message?: string
}

/**
 * User login
 * POST /user/login
 */
export const userLogin = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await apiCall(API_CONFIG.ENDPOINTS.USER_LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    // Store token if provided
    if (response.token) {
      localStorage.setItem('zeplus_auth_token', response.token)
      localStorage.setItem('zeplus_user', JSON.stringify(response.user))
    }

    return response
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

/**
 * Forgot password - request OTP
 * POST /user/forgotPassword
 */
export const forgotPassword = async (email: string): Promise<{ message: string }> => {
  try {
    return await apiCall(API_CONFIG.ENDPOINTS.FORGOT_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  } catch (error) {
    console.error('Forgot password request failed:', error)
    throw error
  }
}

/**
 * Resend OTP
 * POST /user/resendOtp
 */
export const resendOtp = async (email: string): Promise<{ message: string }> => {
  try {
    return await apiCall(API_CONFIG.ENDPOINTS.RESEND_OTP, {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  } catch (error) {
    console.error('Resend OTP failed:', error)
    throw error
  }
}

/**
 * Reset password with OTP
 * POST /user/resetPassword
 */
export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    return await apiCall(API_CONFIG.ENDPOINTS.RESET_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email, otp, newPassword }),
    })
  } catch (error) {
    console.error('Reset password failed:', error)
    throw error
  }
}

/**
 * Update password (authenticated user)
 * PUT /user/updatePassword
 */
export const updatePassword = async (
  currentPassword: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.UPDATE_PASSWORD, {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword }),
    })
  } catch (error) {
    console.error('Update password failed:', error)
    throw error
  }
}

/**
 * Get user profile
 * GET /user/profile
 */
export const getUserProfile = async (): Promise<any> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.GET_PROFILE, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Get profile failed:', error)
    throw error
  }
}

/**
 * Update user profile
 * PUT /user/updateProfile
 */
export const updateUserProfile = async (profileData: {
  firstName?: string
  lastName?: string
  email?: string
  [key: string]: any
}): Promise<any> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.UPDATE_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    })
  } catch (error) {
    console.error('Update profile failed:', error)
    throw error
  }
}

/**
 * Delete own account
 * DELETE /user/deleteOwnAccount
 */
export const deleteOwnAccount = async (password: string): Promise<{ message: string }> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.DELETE_ACCOUNT, {
      method: 'DELETE',
      body: JSON.stringify({ password }),
    })
  } catch (error) {
    console.error('Delete account failed:', error)
    throw error
  }
}

/**
 * Check if user has authentication token
 */
export const hasAuthToken = (): boolean => {
  return !!localStorage.getItem('zeplus_auth_token')
}

/**
 * Get current user from localStorage
 */
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('zeplus_user')
    return user ? JSON.parse(user) : null
  } catch {
    return null
  }
}

/**
 * Logout - clear tokens and user data
 */
export const logout = (): void => {
  localStorage.removeItem('zeplus_auth_token')
  localStorage.removeItem('zeplus_user')
}
