import { API_CONFIG, authenticatedApiCall } from '../config/api'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'superadmin' | 'admin'
  status: 'active' | 'suspended'
  createdAt: string
  updatedAt?: string
}

// ============================================
// SUPER ADMIN ENDPOINTS
// ============================================

/**
 * Register new super admin user
 * POST /user/register
 */
export const registerUser = async (userData: {
  email: string
  firstName: string
  lastName: string
  password: string
  role: 'admin' | 'superadmin'
}): Promise<User> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.USER_REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  } catch (error) {
    console.error('Failed to register user:', error)
    throw error
  }
}

/**
 * Get Super Admin info (via GET profile)
 * GET /user/getProfile
 */
export const getSuperAdmin = async (): Promise<User> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.GET_PROFILE, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to get super admin:', error)
    throw error
  }
}

// ============================================
// CREATE USERS (SUPER ADMIN)
// ============================================

/**
 * Create new users (Super Admin only)
 * POST /user/register (called multiple times)
 */
export const createUsers = async (usersData: Array<{
  email: string
  firstName: string
  lastName: string
  password: string
  role: 'admin' | 'superadmin'
}>): Promise<any> => {
  try {
    const results = await Promise.all(
      usersData.map(userData =>
        authenticatedApiCall(API_CONFIG.ENDPOINTS.USER_REGISTER, {
          method: 'POST',
          body: JSON.stringify(userData),
        })
      )
    )
    return { users: results }
  } catch (error) {
    console.error('Failed to create users:', error)
    throw error
  }
}

/**
 * Create single user
 */
export const createUser = async (userData: {
  email: string
  firstName: string
  lastName: string
  password: string
  role: 'admin' | 'superadmin'
}): Promise<User> => {
  try {
    const response = await registerUser(userData)
    return response
  } catch (error) {
    console.error('Failed to create user:', error)
    throw error
  }
}

// ============================================
// GET ALL USERS
// ============================================

/**
 * Get all users
 * GET /user/getAllusers
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.GET_ALL_USERS, {
      method: 'GET',
    })
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw error
  }
}

/**
 * Get all users (alias)
 */
export const getAllUsers = async (): Promise<User[]> => {
  return fetchUsers()
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Update user profile details
 * PUT /user/updateProfile
 */
export const updateUser = async (_userId: string, updates: Partial<User>): Promise<User> => {
  try {
    return await authenticatedApiCall(API_CONFIG.ENDPOINTS.UPDATE_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  } catch (error) {
    console.error('Failed to update user:', error)
    throw error
  }
}

/**
 * Delete user account
 * DELETE /user/deleteOwnAccount
 */
export const deleteUser = async (): Promise<void> => {
  try {
    await authenticatedApiCall(API_CONFIG.ENDPOINTS.DELETE_ACCOUNT, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to delete user:', error)
    throw error
  }
}

/**
 * Suspend a user account (requires backend implementation)
 */
export const suspendUser = async (_userId: string): Promise<User> => {
  try {
    throw new Error('User suspension requires backend update endpoint')
  } catch (error) {
    console.error('Failed to suspend user:', error)
    throw error
  }
}

/**
 * Reactivate a suspended user (requires backend implementation)
 */
export const reactivateUser = async (_userId: string): Promise<User> => {
  try {
    throw new Error('User reactivation requires backend update endpoint')
  } catch (error) {
    console.error('Failed to reactivate user:', error)
    throw error
  }
}

