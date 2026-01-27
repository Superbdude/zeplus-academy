import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUnconfirmedCount } from '../../utils/notifications'
import { clearCurrentUser } from '../../utils/userManagement'

const AdminSidebar = () => {
  const navigate = useNavigate()
  const [isFormsOpen, setIsFormsOpen] = useState(false)
  const [unconfirmedCount, setUnconfirmedCount] = useState(0)

  useEffect(() => {
    // Initial load
    setUnconfirmedCount(getUnconfirmedCount())

    // Listen for submission updates
    const handleSubmissionUpdate = () => {
      setUnconfirmedCount(getUnconfirmedCount())
    }

    window.addEventListener('zeplus:submission', handleSubmissionUpdate)
    
    // Poll every 5 seconds for updates
    const interval = setInterval(() => {
      setUnconfirmedCount(getUnconfirmedCount())
    }, 5000)

    return () => {
      window.removeEventListener('zeplus:submission', handleSubmissionUpdate)
      clearInterval(interval)
    }
  }, [])
  
  return (
    <aside className="w-70 bg-[white] text-gray-900 border border-gray-300 p-6 flex flex-col justify-between font-poppins">
      <div>
        <div className="mb-8">
          <h3 className="text-[16px] font-medium text-[#60080B]">Zeplus Academy</h3>
          <NavLink to="/admin" className="text-[13px] text-gray-400 hover:underline">Admin Dashboard</NavLink>
        </div>
        <nav className="space-y-2">
          {/* Dashboard */}
          <NavLink
            to="/admin"
            className={({ isActive }) => `flex items-center justify-between gap-3 px-3 py-3 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
            end
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Dashboard</span>
            </div>
            {unconfirmedCount > 0 && (
              <span className="min-w-6 h-6 px-2 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ml-auto">
                {unconfirmedCount > 99 ? '99+' : unconfirmedCount}
              </span>
            )}
          </NavLink>

          {/* Forms with dropdown */}
          <div>
            <button
              onClick={() => setIsFormsOpen(!isFormsOpen)}
              className="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-md hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Forms</span>
              </div>
              <svg className={`w-4 h-4 transition-transform ${isFormsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isFormsOpen && (
              <div className="ml-11 mt-1 space-y-1 max-h-64 overflow-y-auto overflow-x-hidden pr-1">
                <NavLink
                  to="/admin/forms/insider"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  Insider
                </NavLink>
                <NavLink
                  to="/admin/forms/course-brochure"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  Courses and brochure
                </NavLink>
               
                <NavLink
                  to="/admin/forms/tech4teen"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  Tech For Teen
                </NavLink>
                <NavLink
                  to="/admin/forms/becomepartner"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  Become Partner
                </NavLink>
                <NavLink
                  to="/admin/forms/schoolpartner"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  School Partnership for Teens
                </NavLink>
                <NavLink
                  to="/admin/forms/aibootcamp"
                  className={({ isActive }) => `block px-3 py-2 text-sm rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                >
                  AI Bootcamp
                </NavLink>
              </div>
            )}
          </div>

          {/* Team Management */}
          <NavLink
            to="/admin/team-management"
            className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Team Management</span>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      <div>
        <button
          onClick={() => {
            clearCurrentUser()
            navigate('/admin/login')
          }}
          className="text-red-400 flex items-center gap-2 hover:text-red-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className='text-[14px]'>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}

export default AdminSidebar
