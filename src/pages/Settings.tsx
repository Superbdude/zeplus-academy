import React, { useState, useEffect } from 'react'
import { getCurrentUser, updateUserProfile, createAdminUser, getUsers } from '../utils/userManagement'
import type { User } from '../utils/userManagement'

const Settings: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showNewUserPassword, setShowNewUserPassword] = useState(true)
  const [profilePicture, setProfilePicture] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [showCreateUser, setShowCreateUser] = useState(false)
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const [newUserRole, setNewUserRole] = useState<'admin' | 'superadmin'>('admin')
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [createUserError, setCreateUserError] = useState('')
  const [createUserSuccess, setCreateUserSuccess] = useState('')

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setCurrentUser(user)
      setFirstName(user.firstName || '')
      setLastName(user.lastName || '')
      setProfilePicture(user.profilePicture || '')
      
      if (user.mustChangePassword) {
        setShowPasswordChange(true)
      }
    }

    setAllUsers(getUsers())

    const handleUserUpdate = () => {
      setAllUsers(getUsers())
    }

    window.addEventListener('zeplus:users', handleUserUpdate)
    return () => window.removeEventListener('zeplus:users', handleUserUpdate)
  }, [])

  const handleProfileUpdate = () => {
    setError('')
    setSuccess('')

    if (!currentUser) return

    updateUserProfile(currentUser.id, {
      firstName,
      lastName,
      profilePicture: profilePicture || undefined
    })

    setSuccess('Profile updated successfully!')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handlePasswordChange = () => {
    setError('')
    setSuccess('')

    if (!currentUser) return

    if (!currentPassword) {
      setError('Current password is required')
      return
    }

    if (currentPassword !== currentUser.password) {
      setError('Current password is incorrect')
      return
    }

    if (!newPassword || newPassword.length < 6) {
      setError('New password must be at least 6 characters')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    updateUserProfile(currentUser.id, {
      password: newPassword,
      mustChangePassword: false
    })

    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setShowPasswordChange(false)
    setSuccess('Password changed successfully!')
    setTimeout(() => setSuccess(''), 3000)

    const updatedUser = getCurrentUser()
    if (updatedUser) {
      setCurrentUser(updatedUser)
    }
  }

  const handleCreateUser = () => {
    setCreateUserError('')
    setCreateUserSuccess('')

    if (!newUserEmail || !newUserPassword) {
      setCreateUserError('Email and password are required')
      return
    }

    if (newUserPassword.length < 6) {
      setCreateUserError('Password must be at least 6 characters')
      return
    }

    const existingUser = allUsers.find(u => u.email.toLowerCase() === newUserEmail.toLowerCase())
    if (existingUser) {
      setCreateUserError('Email already exists')
      return
    }

    try {
      createAdminUser(newUserEmail, newUserPassword, newUserRole)
      setCreateUserSuccess(`${newUserRole === 'superadmin' ? 'Superadmin' : 'Admin'} created successfully!`)
      setNewUserEmail('')
      setNewUserPassword('')
      setNewUserRole('admin')
      setTimeout(() => {
        setCreateUserSuccess('')
        setShowCreateUser(false)
      }, 2000)
    } catch (err) {
      setCreateUserError('Failed to create user')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePicture(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  if (!currentUser) {
    return (
      <div className="p-6">
        <div className="text-center py-12 text-gray-500">
          Please log in to access settings.
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          {success}
        </div>
      )}

      <div className="max-w-2xl space-y-6 font-poppins">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-[18px] font-[500] text-gray-900 mb-4">Profile Information</h2>

          {/* Profile Picture */}
          <div className="mb-6">
            <label className="block text-sm font-[450] text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold border-4 border-gray-200">
                  {firstName?.[0]?.toUpperCase() || currentUser.email[0].toUpperCase()}
                  {lastName?.[0]?.toUpperCase() || ''}
                </div>
              )}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="profile-upload"
                />
                <label
                  htmlFor="profile-upload"
                  className="cursor-pointer bg-[#60080B] text-[14px] text-white px-4 py-2 rounded-lg hover:bg-[#470609] transition-colors inline-block"
                >
                  Upload Photo
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Recommended: Square image, at least 200x200px
                </p>
              </div>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=" "
              />
            </div>
          </div>

          {/* Email (Read-only) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={currentUser.email}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
          </div>

          <button
            onClick={handleProfileUpdate}
            className="bg-[#60080B] text-white text-[14px] px-6 py-2 rounded-lg hover:bg-[#470609] transition-colors"
          >
            Save Profile
          </button>
        </div>

        {/* Password Section */}
        <div className="bg-white rounded-lg shadow-md p-6 font-poppins">
          <h2 className="text-[18px] font-[500] text-gray-900 mb-4">Change Password</h2>

          {currentUser.mustChangePassword && (
            <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
              <strong>Required:</strong> You must change your password before continuing.
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
              {error}
            </div>
          )}

            <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCurrentPassword ? (
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? (
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
            </div>
          </div>

          <button
            onClick={handlePasswordChange}
            className="mt-4 bg-[#60080B] text-[14px] text-white px-6 py-2 rounded-lg hover:bg-[#470609] transition-colors"
          >
            Change Password
          </button>
        </div>

        {/* Create User Section - Only for Superadmins */}
        {currentUser.role === 'superadmin' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-[18px] font-[500] text-gray-900 mb-4">Create New User</h2>
            <p className="text-gray-600 text-sm mb-4">Add new admin or superadmin to your team</p>
            <button
              onClick={() => setShowCreateUser(true)}
              className="bg-[#60080B] text-[14px] text-white px-6 py-2 rounded-lg hover:bg-[#470609] transition-colors"
            >
              + New User
            </button>
          </div>
        )}

        {/* Role Information */}
        <div className="bg-white rounded-lg shadow-md p-6 font-poppins">
          <h2 className="text-[18px] font-[500] text-gray-900 mb-4">Account Information</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Role:</span>
              <span className={`font-semibold ${
                currentUser.role === 'superadmin' ? 'text-purple-600' : 'text-[#60080B]'
              }`}>
                {currentUser.role === 'superadmin' ? 'Superadmin' : 'Admin'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className={`font-semibold ${
                currentUser.status === 'active' ? 'text-green-800' : 'text-red-600'
              }`}>
                {currentUser.status === 'active' ? 'Active' : 'Suspended'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Account Created:</span>
              <span className="font-[500] text-[15px] text-gray-900">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Password Change Modal */}
      {showPasswordChange && currentUser.mustChangePassword && (
        <div className="fixed inset-0 bg-[#EEE8DF] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl border-4 border-[#60080B]">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Password Change Required</h2>
            
            <p className="text-gray-600 mb-8">
              For security reasons, you must change your password before continuing.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 pr-10"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showCurrentPassword ? (
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 pr-10"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? (
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 pr-10"
                    placeholder="Re-enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
              </div>
            </div>

            <button
              onClick={handlePasswordChange}
              className="w-full mt-10 px-4 py-4 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
            >
              Change Password
            </button>
          </div>
        </div>
      )}

      {/* Create User Modal */}
      {showCreateUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md border-4 border-[#60080B]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Admin User</h2>
            
            {createUserError && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                {createUserError}
              </div>
            )}

            {createUserSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                {createUserSuccess}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Temporary Password
                </label>
                <div className="relative">
                  <input
                    type={showNewUserPassword ? 'text' : 'password'}
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewUserPassword(!showNewUserPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewUserPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18m-2.306-4.7C16.872 17.521 14.526 18.75 12 18.75c-5 0-9-4.5-9-6.75 0-1.003 1.045-2.69 2.884-4.195m3.111-2.263A7.477 7.477 0 0112 5.25c5 0 9 4.5 9 6.75 0 .834-.343 1.846-1.02 2.886M9.88 9.88A3 3 0 0114.12 14.12" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  User will be required to change password on first login
                </p>
              </div>

              <div className='w-35'>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  User Type
                </label>
                <select
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value as 'admin' | 'superadmin')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowCreateUser(false)}
                className="flex-1 px-4 py-3 text-[14px] border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateUser}
                className="flex-1 px-4 text-[14px] py-3 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors font-medium"
              >
                Create {newUserRole === 'superadmin' ? 'Superadmin' : 'Admin'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings
