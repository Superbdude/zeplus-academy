import { useEffect, useState, useMemo } from 'react'
import { fetchDashboardMetrics } from '../services/submissionsService'
import MonthlyEnrollmentChart from '../components/charts/MonthlyEnrollmentChart'

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        setLoading(true)
        const data = await fetchDashboardMetrics()
        setMetrics(data)
        setError(null)
      } catch (err) {
        console.error('Failed to load dashboard metrics:', err)
        setError('Failed to load dashboard data. Please try refreshing.')
        setMetrics(null)
      } finally {
        setLoading(false)
      }
    }

    loadMetrics()
  }, [])

  const displayMetrics = useMemo(() => {
    if (!metrics) {
      return {
        totalForms: 0,
        insiderForms: 0,
        courseBrochureForms: 0,
        techForTeen: 0,
        generalPartnership: 0,
        schoolPartnership: 0,
        aiBootcamp: 0
      }
    }

    return {
      totalForms: metrics.totalForms || 0,
      insiderForms: metrics.insiderForms || 0,
      courseBrochureForms: metrics.courseBrochureForms || 0,
      techForTeen: metrics.techForTeen || 0,
      generalPartnership: metrics.generalPartnership || 0,
      schoolPartnership: metrics.schoolPartnership || 0,
      aiBootcamp: metrics.aiBootcamp || 0
    }
  }, [metrics])

  return (
    <div className="w-full font-poppins bg-white">
      <div className="mb-6">
        <h1 className="text-[20px] font-medium">Dashboard</h1>
        <p className="text-gray-500 text-[14px]">Welcome back! Here's your overview.</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700">Loading dashboard data...</p>
        </div>
      )}

      {/* Summary metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {/* Total Forms */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Total Forms</div>
          <div className="text-3xl font-bold">{displayMetrics.totalForms}</div>
        </div>

        {/* Insider */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Insider</div>
          <div className="text-3xl font-bold">{displayMetrics.insiderForms}</div>
        </div>

        {/* Course and brochure */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Course and brochure</div>
          <div className="text-3xl font-bold">{displayMetrics.courseBrochureForms}</div>
        </div>

        {/* Teen and adult brochure */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Tech For Teen</div>
          <div className="text-3xl font-bold">{displayMetrics.techForTeen}</div>
        </div>

        {/* General Partnership */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Become Partnership</div>
          <div className="text-3xl font-bold">{displayMetrics.generalPartnership}</div>
        </div>

        {/* School Partnership */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">School Partnership for Teens</div>
          <div className="text-3xl font-bold">{displayMetrics.schoolPartnership}</div>
        </div>

        {/* AI Bootcamp */}
        <div className="bg-white rounded-lg p-5 shadow-sm border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">AI Bootcamp</div>
          <div className="text-3xl font-bold">{displayMetrics.aiBootcamp}</div>
        </div>
      </div>

      {/* Monthly Enrollment Growth Chart */}
      {!loading && !error && metrics && (
        <MonthlyEnrollmentChart submissions={metrics} />
      )}
    </div>
  )
}

export default AdminDashboard
