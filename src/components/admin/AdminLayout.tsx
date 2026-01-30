import React, { useState, useEffect, useRef } from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../services/userAuthService'
import type { User } from '../../services/userAuthService'
import { getUnconfirmedCount, getFormTypesWithUnconfirmed, getUnconfirmedCountPerFormType } from '../../utils/notifications'
import { startHeartbeat } from '../../utils/onlineStatus'

const AdminLayout: React.FC = () => {
  const navigate = useNavigate()
  const notificationRef = useRef<HTMLDivElement>(null)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [unconfirmedCount, setUnconfirmedCount] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)
  const [formTypesWithNotifications, setFormTypesWithNotifications] = useState<string[]>([])
  const [unconfirmedCountPerType, setUnconfirmedCountPerType] = useState<Record<string, number>>({})

  useEffect(() => {
    // Require login before showing admin pages
    const user = getCurrentUser()
    if (!user) {
      navigate('/admin/login')
      return
    }

    setCurrentUser(user)

    // Start heartbeat for online status tracking
    let cleanupHeartbeat: (() => void) | undefined
    cleanupHeartbeat = startHeartbeat(user.id)

    // Load initial notification count
    updateNotifications()

    // Listen for submission changes
    const handleSubmissionUpdate = () => {
      updateNotifications()
    }

    // Listen for user profile updates
    const handleUserUpdate = () => {
      const updatedUser = getCurrentUser()
      setCurrentUser(updatedUser)

      // If user logs out elsewhere, force redirect
      if (!updatedUser) navigate('/admin/login')
    }

    window.addEventListener('zeplus:submission', handleSubmissionUpdate)
    window.addEventListener('zeplus:users', handleUserUpdate)
    
    // Poll for updates every 10 seconds
    const interval = setInterval(updateNotifications, 10000)

    return () => {
      window.removeEventListener('zeplus:submission', handleSubmissionUpdate)
      window.removeEventListener('zeplus:users', handleUserUpdate)
      clearInterval(interval)
      if (cleanupHeartbeat) {
        cleanupHeartbeat()
      }
    }
  }, [navigate])

  // Click outside to close notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNotifications])

  const updateNotifications = () => {
    const count = getUnconfirmedCount()
    setUnconfirmedCount(count)
    
    const formTypes = getFormTypesWithUnconfirmed()
    setFormTypesWithNotifications(formTypes)

    const countPerType = getUnconfirmedCountPerFormType()
    setUnconfirmedCountPerType(countPerType)
  }

  const getUserInitials = () => {
    if (currentUser?.firstName && currentUser?.lastName) {
      return `${currentUser.firstName[0]}${currentUser.lastName[0]}`.toUpperCase()
    }
    if (currentUser?.email) {
      return currentUser.email.substring(0, 2).toUpperCase()
    }
    return 'AD'
  }

  const getDateParts = () => {
    const now = new Date()
    const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    const day = now.getDate()
    return { month, day }
  }
  return (
    <div className="bg-[#EEE8DF] font-poppins min-h-screen">
      {/* Centered boxed container that wraps sidebar + main */}
      <div className="mx-auto max-w-[1400px] py-20">
        <div className="flex rounded-lg border border-gray-200 shadow overflow-hidden bg-white" style={{ height: 'calc(90vh - 6rem)' }}>
          <AdminSidebar />
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar inside the box */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              {/* Date display on the left */}
              <div className="flex items-center">

                <div className="border-2 border-gray-300 rounded-lg p-4 bg-white w-20 h-24 flex flex-col items-center justify-center">
                  <div className="text-sm font-semibold text-gray-700">{getDateParts().month}</div>
                  <div className="text-3xl font-bold text-gray-900">{getDateParts().day}</div>
                </div>
              </div>
              {/* Notification and Profile on the right */}
              <div className="flex items-center gap-4">
                {/* Notification icon with badge */}
                <div className="relative" ref={notificationRef}>
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {/* Blue dot indicator for new notifications */}
                    {unconfirmedCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            New Submissions
                          </h3>
                          {unconfirmedCount > 0 && (
                            <span className="text-sm text-gray-600">
                              {unconfirmedCount} new
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Form Links */}
                      <div className="py-2">
                        {formTypesWithNotifications.length > 0 ? (
                          <>
                            {formTypesWithNotifications.includes('insider') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/insider')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">Insider Forms</span>
                                  {unconfirmedCountPerType['insider'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['insider']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                            {formTypesWithNotifications.includes('course-brochure') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/course-brochure')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">Course/Brochure Forms</span>
                                  {unconfirmedCountPerType['course-brochure'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['course-brochure']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                            {formTypesWithNotifications.includes('tech4teen') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/tech4teen')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">Tech4teen Forms</span>
                                  {unconfirmedCountPerType['tech4teen'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['tech4teen']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                            {formTypesWithNotifications.includes('becomepartner') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/becomepartner')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">Become Partner Forms</span>
                                  {unconfirmedCountPerType['becomepartner'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['becomepartner']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                            {formTypesWithNotifications.includes('schoolpartner') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/schoolpartner')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">School Partnership Forms</span>
                                  {unconfirmedCountPerType['schoolpartner'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['schoolpartner']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                            {formTypesWithNotifications.includes('aibootcamp') && (
                              <button
                                onClick={() => {
                                  navigate('/admin/forms/aibootcamp')
                                  setShowNotifications(false)
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-medium text-gray-900">AI Bootcamp Forms</span>
                                  {unconfirmedCountPerType['aibootcamp'] && (
                                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                                      {unconfirmedCountPerType['aibootcamp']} new
                                    </span>
                                  )}
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </button>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">All caught up!</p>
                            <p className="text-xs text-gray-400 mt-1">No unconfirmed submissions</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* User Avatar */}
                <button
                  onClick={() => navigate('/admin/settings')}
                  className="flex items-center gap-2 hover:bg-gray-100 rounded-full transition-colors p-1"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-semibold text-sm">
                    {getUserInitials()}
                  </div>
                </button>
              </div>
            </div>

            {/* Page content inside the box */}
            <div className="flex-1 p-6 overflow-y-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
