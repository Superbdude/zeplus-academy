import React, { useState, useEffect } from 'react'
import { 
  getUsers, 
  getCurrentUser, 
  deleteUser, 
  toggleUserStatus, 
  createAdminUser,
  getUserById
} from '../utils/userManagement'
import { isUserOnline } from '../utils/onlineStatus'
import type { User } from '../utils/userManagement'

const TeamManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newRole, setNewRole] = useState<'admin' | 'superadmin'>('admin')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [creating, setCreating] = useState(false)
  const [onlineStatuses, setOnlineStatuses] = useState<Record<string, boolean>>({})
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmAction, setConfirmAction] = useState<'suspend' | 'unsuspend' | 'delete' | null>(null)
  const [targetUserId, setTargetUserId] = useState<string | null>(null)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [confirmError, setConfirmError] = useState('')

  useEffect(() => {
    loadUsers()
    const user = getCurrentUser()
    setCurrentUser(user)

    const handleUpdate = () => {
      loadUsers()
    }

    const handleOnlineStatusUpdate = () => {
      updateOnlineStatuses()
    }

    window.addEventListener('zeplus:users', handleUpdate)
    window.addEventListener('zeplus:online_status', handleOnlineStatusUpdate)
    
    // Poll for online status updates every 3 seconds
    const interval = setInterval(updateOnlineStatuses, 3000)

    return () => {
      window.removeEventListener('zeplus:users', handleUpdate)
      window.removeEventListener('zeplus:online_status', handleOnlineStatusUpdate)
      clearInterval(interval)
    }
  }, [])

  const loadUsers = () => {
    const allUsers = getUsers()
    setUsers(allUsers)
    updateOnlineStatuses()
  }

  const updateOnlineStatuses = () => {
    const allUsers = getUsers()
    const statuses: Record<string, boolean> = {}
    allUsers.forEach(user => {
      statuses[user.id] = isUserOnline(user.id)
    })
    setOnlineStatuses(statuses)
  }

  const handleCreateAdmin = () => {
    setError('')
    
    if (!newEmail || !newPassword) {
      setError('Email and password are required')
      return
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Check if email already exists
    const existingUser = getUsers().find(u => u.email.toLowerCase() === newEmail.toLowerCase())
    if (existingUser) {
      setError('User with this email already exists')
      return
    }

    // Prevent non-superadmin from creating another superadmin as an extra guard
    if (newRole === 'superadmin' && currentUser?.role !== 'superadmin') {
      setError('Only superadmins can create another superadmin')
      return
    }

    // show spinner while creating (simulate brief processing)
    setCreating(true)
    createAdminUser(newEmail, newPassword, newRole)
    setTimeout(() => {
      setShowCreateModal(false)
      setNewEmail('')
      setNewPassword('')
      setNewRole('admin')
      setCreating(false)
    }, 400)
  }

  

  const openConfirmModal = (action: 'suspend' | 'unsuspend' | 'delete', userId: string) => {
    setConfirmError('')
    setConfirmPassword('')
    setConfirmAction(action)
    setTargetUserId(userId)
    setShowConfirmModal(true)
  }

  const handleConfirmAction = () => {
    if (!currentUser || currentUser.role !== 'superadmin') {
      setConfirmError('Only superadmins can perform this action')
      return
    }
    if (!confirmPassword) {
      setConfirmError('Please enter your password to proceed')
      return
    }
    if (confirmPassword !== currentUser.password) {
      setConfirmError('Incorrect password')
      return
    }
    if (!targetUserId || !confirmAction) return

    if (confirmAction === 'delete') {
      deleteUser(targetUserId)
    } else if (confirmAction === 'suspend') {
      const target = getUserById(targetUserId)
      if (target && target.status === 'active') {
        toggleUserStatus(targetUserId)
      } else {
        setConfirmError('User is not active; cannot suspend')
        return
      }
    } else if (confirmAction === 'unsuspend') {
      const target = getUserById(targetUserId)
      if (target && target.status === 'suspended') {
        toggleUserStatus(targetUserId)
      } else {
        setConfirmError('Only suspended users can be unsuspended')
        return
      }
    }

    setShowConfirmModal(false)
    setConfirmAction(null)
    setTargetUserId(null)
    setConfirmPassword('')
  }

  const handleToggleStatus = (userId: string) => {
    const target = getUserById(userId)
    if (!target) return
    const action = target.status === 'active' ? 'suspend' : 'unsuspend'
    openConfirmModal(action, userId)
  }

  const isSuperadmin = currentUser?.role === 'superadmin'

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[16px] font-[500] text-gray-700">Team Management</h1>
        {isSuperadmin && (
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-[#60080B] text-white px-4 py-2 text-[14px] rounded-lg hover:bg-[#60080B] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Admin
          </button>
        )}
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => {
          const isOnline = onlineStatuses[user.id] || false
          
          return (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            {/* Profile Picture */}
            <div className="flex justify-center mb-4 relative">
              {user.profilePicture ? (
                <div className="relative">
                  <img
                    src={user.profilePicture}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  />
                  {/* Online/Offline indicator */}
                  <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white ${
                    isOnline ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                </div>
              ) : (
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold border-4 border-gray-200">
                    {user.firstName?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                    {user.lastName?.[0]?.toUpperCase() || ''}
                  </div>
                  {/* Online/Offline indicator */}
                  <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white ${
                    isOnline ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {user.firstName || user.lastName 
                  ? `${user.firstName} ${user.lastName}`.trim()
                  : 'Name not set'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
              
              {/* Role Badge */}
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                user.role === 'superadmin' 
                  ? 'bg-purple-100 text-purple-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {user.role === 'superadmin' ? 'Superadmin' : 'Admin'}
              </span>

              {/* Online Status Text */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className={`w-2 h-2 rounded-full ${
                  isOnline ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-xs text-gray-600">
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>

            {/* Actions (Superadmin only) */}
            {isSuperadmin && user.role !== 'superadmin' && (
              <div className="flex gap-2 justify-center pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleToggleStatus(user.id)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    user.status === 'active'
                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  {user.status === 'active' ? 'Suspend' : 'Unsuspend'}
                </button>
                <button
                  onClick={() => openConfirmModal('delete', user.id)}
                  className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )})}
      </div>

      {users.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No team members found.
        </div>
      )}

      {/* Create Admin Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-[#EEE8DF] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl border-4 border-[#60080B]">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Create New Admin User</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-7">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Temporary Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 pr-10"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18m-2.306-4.7C16.872 17.521 14.526 18.75 12 18.75c-5 0-9-4.5-9-6.75 0-1.003 1.045-2.69 2.884-4.195m3.111-2.263A7.477 7.477 0 0112 5.25c5 0 9 4.5 9 6.75 0 .834-.343 1.846-1.02 2.886M9.88 9.88A3 3 0 0114.12 14.12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  User will be required to change password on first login
                </p>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as 'admin' | 'superadmin')}
                  className="w-40px-3 py-2 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-100"
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Choose the role for the new user.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-10">
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  setNewEmail('')
                  setNewPassword('')
                  setError('')
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAdmin}
                disabled={creating}
                className={`flex-1 px-4 py-2 rounded-lg text-white transition-colors ${creating ? 'bg-[#470609] opacity-80 cursor-not-allowed' : 'bg-[#60080B] hover:bg-[#470609]'}`}
              >
                {creating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Creating...
                  </span>
                ) : (
                  'Create Admin'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      

      {/* Confirm Password Modal for Suspend/Unsuspend/Delete */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-[#EEE8DF] flex items-center justify-center z-50 font-poppins">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md border-4 border-[#60080B]">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {confirmAction === 'delete' ? 'Confirm Delete' : confirmAction === 'suspend' ? 'Confirm Suspend' : 'Confirm Unsuspend'}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Please enter your superadmin password to proceed.
            </p>
            {confirmError && (
              <div className="mb-3 p-2 bg-red-100 text-red-800 rounded-lg text-sm">
                {confirmError}
              </div>
            )}
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label="Toggle password visibility"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18m-2.306-4.7C16.872 17.521 14.526 18.75 12 18.75c-5 0-9-4.5-9-6.75 0-1.003 1.045-2.69 2.884-4.195m3.111-2.263A7.477 7.477 0 0112 5.25c5 0 9 4.5 9 6.75 0 .834-.343 1.846-1.02 2.886M9.88 9.88A3 3 0 0114.12 14.12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowConfirmModal(false)
                  setConfirmAction(null)
                  setTargetUserId(null)
                  setConfirmPassword('')
                  setConfirmError('')
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="flex-1 px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamManagement
