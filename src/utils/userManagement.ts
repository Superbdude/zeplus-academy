// User management utilities for team management
export interface User {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: 'superadmin' | 'admin'
  profilePicture?: string
  status: 'active' | 'suspended'
  mustChangePassword: boolean
  createdAt: string
  updatedAt: string
}

const USERS_KEY = 'zeplus_users'
const CURRENT_USER_KEY = 'zeplus_current_user'

// Initialize with a default superadmin if no users exist
export const initializeUsers = () => {
  const users = getUsers()
  if (users.length === 0) {
    const defaultSuperadmin: User = {
      id: crypto.randomUUID(),
      email: 'superadmin@zeplusacademy.com',
      password: 'Admin@123', // Default password - should be changed on first login
      firstName: 'Super',
      lastName: 'Admin',
      role: 'superadmin',
      status: 'active',
      mustChangePassword: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    saveUser(defaultSuperadmin)
  }
}

// Get all users
export const getUsers = (): User[] => {
  try {
    const data = localStorage.getItem(USERS_KEY)
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.error('Error fetching users:', err)
    return []
  }
}

// Get user by ID
export const getUserById = (id: string): User | null => {
  const users = getUsers()
  return users.find(u => u.id === id) || null
}

// Get user by email
export const getUserByEmail = (email: string): User | null => {
  const users = getUsers()
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null
}

// Save/create user
export const saveUser = (user: User) => {
  const users = getUsers()
  const existingIndex = users.findIndex(u => u.id === user.id)
  
  if (existingIndex >= 0) {
    users[existingIndex] = { ...user, updatedAt: new Date().toISOString() }
  } else {
    users.push(user)
  }
  
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  window.dispatchEvent(new Event('zeplus:users'))
}

// Delete user
export const deleteUser = (userId: string) => {
  const users = getUsers().filter(u => u.id !== userId)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  window.dispatchEvent(new Event('zeplus:users'))
}

// Suspend/activate user
export const toggleUserStatus = (userId: string) => {
  const users = getUsers()
  const userIndex = users.findIndex(u => u.id === userId)
  
  if (userIndex >= 0) {
    users[userIndex].status = users[userIndex].status === 'active' ? 'suspended' : 'active'
    users[userIndex].updatedAt = new Date().toISOString()
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    window.dispatchEvent(new Event('zeplus:users'))
  }
}

// Authenticate user
export const authenticateUser = (email: string, password: string): User | null => {
  const user = getUserByEmail(email)
  if (user && user.password === password && user.status === 'active') {
    return user
  }
  return null
}

// Set current logged-in user
export const setCurrentUser = (user: User) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
}

// Get current logged-in user
export const getCurrentUser = (): User | null => {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY)
    return data ? JSON.parse(data) : null
  } catch (err) {
    console.error('Error fetching current user:', err)
    return null
  }
}

// Clear current user (logout)
export const clearCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
  // Notify app that authentication state changed so listeners can react
  window.dispatchEvent(new Event('zeplus:users'))
}

// Update user profile
export const updateUserProfile = (
  userId: string,
  updates: Partial<Pick<User, 'firstName' | 'lastName' | 'profilePicture' | 'password' | 'mustChangePassword'>>
) => {
  const users = getUsers()
  const userIndex = users.findIndex(u => u.id === userId)
  
  if (userIndex >= 0) {
    users[userIndex] = {
      ...users[userIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    }
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    
    // Update current user if it's the same
    const currentUser = getCurrentUser()
    if (currentUser && currentUser.id === userId) {
      setCurrentUser(users[userIndex])
    }
    
    window.dispatchEvent(new Event('zeplus:users'))
  }
}

// Create new admin user (superadmin only)
export const createAdminUser = (email: string, password: string, role: 'admin' | 'superadmin' = 'admin'): User => {
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    password,
    firstName: '',
    lastName: '',
    role,
    status: 'active',
    mustChangePassword: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  saveUser(newUser)
  return newUser
}
