import { useEffect, useState } from 'react'
import { getAllSubmissions, confirmSubmission } from '../../utils/storage'

// Insider Forms Component (Special layout)
export const InsiderForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const handleConfirm = (submissionId: number) => {
    confirmSubmission('insider', submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    const insiderSubs = allSubs['insider'] || []
    setSubmissions(insiderSubs)

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated['insider'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const firstName = sub.data?.first || ''
    const lastName = sub.data?.last || ''
    const email = sub.data?.email || ''
    const searchLower = searchTerm.toLowerCase()
    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')

    const matchesSearch = firstName.toLowerCase().includes(searchLower) ||
           lastName.toLowerCase().includes(searchLower) ||
           email.toLowerCase().includes(searchLower)
    
    const matchesStatus = 
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')
    
    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['First Name', 'Last Name', 'Email', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        sub.data?.first || '',
        sub.data?.last || '',
        sub.data?.email || '',
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `insider_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* Insider Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">Insider</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-125">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.first || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.last || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={() => handleConfirm(sub.id)}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Generic Form View Component
interface FormPageProps {
  formType: string
  title: string
  storageKey: string
}

const FormViewPage = ({ formType, title, storageKey }: FormPageProps) => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  const handleConfirm = (submissionId: number, formTypeOverride?: string) => {
    confirmSubmission(formTypeOverride || storageKey, submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    const formSubs = allSubs[storageKey] || []
    setSubmissions(formSubs)

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated[storageKey] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [storageKey])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const firstName = sub.data?.first || sub.data?.firstName || ''
    const lastName = sub.data?.last || sub.data?.lastName || ''
    const name = `${firstName} ${lastName} ${sub.data?.name || ''}`.toLowerCase()
    const matchesSearch = 
      name.includes(searchTerm.toLowerCase()) ||
      (sub.data?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
    
    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    const matchesStatus = statusFilter === 'All Status' || 
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')
    
    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['Name', 'Contact', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const firstName = sub.data?.first || sub.data?.firstName || ''
      const lastName = sub.data?.last || sub.data?.lastName || ''
      const fullName = `${firstName} ${lastName} ${sub.data?.name || ''}`.trim()
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        fullName,
        `${sub.data?.email || ''}\n${sub.data?.phone || ''}`,
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${formType}_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by name or email.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-125">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {sub.data?.first || sub.data?.firstName || ''} {sub.data?.last || sub.data?.lastName || ''} {sub.data?.name || ''}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                        <div className="text-sm text-gray-500">{sub.data?.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={() => handleConfirm(sub.id, sub.formType)}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Course and Brochure Forms Component (Custom layout for all course submissions)
export const CourseBrochureForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  const handleConfirm = (formType: string, submissionId: number) => {
    confirmSubmission(formType, submissionId)
    setStatusFilter('Confirmed')
  }
  // Storage keys for all course-related forms
  const courseKeys = [
    'apply_now',
    'frontend',
    'cybersecurity', 
    'data',
    'deeplearning',
    'generative',
    'introweb',
    'Introweb',
    'introcybersecurity',
    'fullstack',
    'uidesign',
    'digital',
    'gamedevelopment',
    'mastery',
    'introai',
    'Introai',
    'aimachine',
    'cybersecurityai'
    
  ]

  useEffect(() => {
    const allSubs = getAllSubmissions()
    // Aggregate all course submissions and tag source formType
    let courseSubs: any[] = []
    courseKeys.forEach(key => {
      const subs = allSubs[key] || []
      courseSubs = [...courseSubs, ...subs.map((s: any) => ({ ...s, formType: key }))]
    })
    // Sort by date (newest first)
    courseSubs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    setSubmissions(courseSubs)

    const handler = () => {
      const updated = getAllSubmissions()
      let updatedSubs: any[] = []
      courseKeys.forEach(key => {
        const subs = updated[key] || []
        updatedSubs = [...updatedSubs, ...subs.map((s: any) => ({ ...s, formType: key }))]
      })
      updatedSubs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      setSubmissions(updatedSubs)
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const firstName = sub.data?.firstName || ''
    const lastName = sub.data?.lastName || ''
    const email = sub.data?.email || ''
    const searchLower = searchTerm.toLowerCase()
    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    
    const matchesSearch = 
      firstName.toLowerCase().includes(searchLower) ||
      lastName.toLowerCase().includes(searchLower) ||
      email.toLowerCase().includes(searchLower) ||
      (sub.data?.course || '').toLowerCase().includes(searchLower)
    
    const matchesStatus = 
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')
    
    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['Name', 'Hybrid', 'Contact', 'Interest', 'Heard', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        `${sub.data?.firstName || ''} ${sub.data?.lastName || ''}`,
        sub.data?.hybrid || '',
        `${sub.data?.email || ''}\n${sub.data?.phone || ''}`,
        sub.data?.course || '',
        sub.data?.source || sub.data?.referral || '',
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `course_brochure_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* Course and Brochure Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">Course form and brochure</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hybrid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heard</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-sm text-gray-900">
                          {sub.data?.firstName || ''} {sub.data?.lastName || ''}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.hybrid || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                        <div className="text-sm text-gray-500">{sub.data?.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          {sub.data?.course || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.source || sub.data?.referral || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={() => handleConfirm(sub.formType, sub.id)}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const TeenAdultBrochureForms = () => (
  <FormViewPage formType="teen-adult-brochure" title="Teen and Adult Brochure" storageKey="teen-adult-brochure" />
)

export const BecomePartnerForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  const handleConfirm = (submissionId: number) => {
    confirmSubmission('becomepartner', submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    setSubmissions(allSubs['becomepartner'] || [])

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated['becomepartner'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const fullName = (sub.data?.fullName || '').toLowerCase()
    const email = (sub.data?.email || '').toLowerCase()
    const company = (sub.data?.company || '').toLowerCase()
    const searchLower = searchTerm.toLowerCase()

    const matchesSearch =
      fullName.includes(searchLower) ||
      email.includes(searchLower) ||
      company.includes(searchLower)

    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    const matchesStatus =
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')

    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['Name', 'Company/organization', 'Contact', 'Partnership Type', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        sub.data?.fullName || '',
        sub.data?.company || '',
        sub.data?.email || '',
        sub.data?.partnershipType || '',
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `becomepartner_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by name, company, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* Become Partner Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">Become Partner Form</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company/organization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partnership Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.fullName || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.company || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.partnershipType || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={() => handleConfirm(sub.id)}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const SchoolPartnershipForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const handleConfirm = (submissionId: number) => {
    confirmSubmission('schoolpartner', submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    setSubmissions(allSubs['schoolpartner'] || [])

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated['schoolpartner'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const handleRowClick = (submission: any) => {
    setSelectedSubmission(submission)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedSubmission(null)
  }

  const filteredSubmissions = submissions.filter((sub: any) => {
    const schoolName = (sub.data?.schoolName || '').toLowerCase()
    const contactPerson = (sub.data?.contactPerson || '').toLowerCase()
    const email = (sub.data?.email || '').toLowerCase()
    const searchLower = searchTerm.toLowerCase()

    const matchesSearch =
      schoolName.includes(searchLower) ||
      contactPerson.includes(searchLower) ||
      email.includes(searchLower)

    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    const matchesStatus =
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')

    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['School Name', 'Contact Person', 'Contact', 'School Type', 'Students', 'Learning Mode', 'Schedule', 'Start Date', 'Comments', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        sub.data?.schoolName || '',
        sub.data?.contactPerson || '',
        `${sub.data?.email || ''}\n${sub.data?.phone || ''}`,
        sub.data?.schoolType || '',
        sub.data?.numStudents || '',
        sub.data?.learningMode || '',
        sub.data?.schedule || '',
        sub.data?.startDate || '',
        sub.data?.comments || '',
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `schoolpartner_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by school, contact, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* School Partnership Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">School Partnership for Teens</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning Mode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr 
                      key={sub.id} 
                      onClick={() => handleRowClick(sub)}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.schoolName || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.contactPerson || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                        <div className="text-sm text-gray-500">{sub.data?.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.schoolType || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.numStudents || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.learningMode || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.schedule || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {sub.data?.startDate || ''}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs break-words">
                        {sub.data?.comments || ''}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={(e) => { e.stopPropagation(); handleConfirm(sub.id) }}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                School Partnership for T4T form
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* School Name */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">School Name</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.schoolName || 'N/A'}
                </span>
              </div>

              {/* School Address */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">School Address</span>
                <span className="text-sm text-gray-600 text-right ml-4">
                  {selectedSubmission.data?.schoolAddress || 'N/A'}
                </span>
              </div>

              {/* Number of Students */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Number of Students</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.numStudents || 'N/A'}
                </span>
              </div>

              {/* Contact Person */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Contact Person</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.contactPerson || 'N/A'}
                </span>
              </div>

              {/* Contact Email */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Contact Email</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.email || 'N/A'}
                </span>
              </div>

              {/* Contact Phone */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Contact Phone</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.phone || 'N/A'}
                </span>
              </div>

              {/* School Type */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">School Type</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.schoolType || 'N/A'}
                </span>
              </div>

              {/* Learning Mode */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Learning Mode</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.learningMode || 'N/A'}
                </span>
              </div>

              {/* Preferred Schedule */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Preferred Schedule</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.schedule || 'N/A'}
                </span>
              </div>

              {/* Preferred Start Date */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Preferred Start Date</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.startDate || 'N/A'}
                </span>
              </div>

              {/* Additional Comments */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Additional Comments</span>
                <span className="text-sm text-gray-600 text-right ml-4 max-w-md">
                  {selectedSubmission.data?.comments || 'N/A'}
                </span>
              </div>

              {/* Registered Date */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Registered Date</span>
                <span className="text-sm text-gray-600 text-right ml-4">
                  {new Date(selectedSubmission.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              {/* Status */}
              <div className="flex justify-between items-start py-3">
                <span className="text-sm font-medium text-gray-700">Status</span>
                {(() => {
                  const statusValue = selectedSubmission.data?.status || (selectedSubmission.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                      statusValue === 'Confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {statusValue}
                    </span>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Tech4teen Forms Component (Custom layout)
export const Tech4teenForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const handleConfirm = (submissionId: number) => {
    confirmSubmission('Tech4teen', submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    const tech4teenSubs = allSubs['Tech4teen'] || []
    setSubmissions(tech4teenSubs)

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated['Tech4teen'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const firstName = sub.data?.firstName || ''
    const lastName = sub.data?.lastName || ''
    const email = sub.data?.email || ''
    const searchLower = searchTerm.toLowerCase()
    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    
    const matchesSearch = 
      firstName.toLowerCase().includes(searchLower) ||
      lastName.toLowerCase().includes(searchLower) ||
      email.toLowerCase().includes(searchLower)
    
    const matchesStatus = 
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')
    
    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['Name', 'Contact', 'Registered', 'Course', 'Heard', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        `${sub.data?.firstName || ''} ${sub.data?.lastName || ''}`,
        `${sub.data?.email || ''}\n${sub.data?.phone || ''}`,
        new Date(sub.createdAt).toLocaleDateString(),
        sub.data?.courseSelection || '',
        sub.data?.source || '',
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `tech4teen_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* Tech4teen Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">Tech for Teens</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heard</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-sm text-gray-900">
                          {sub.data?.firstName || ''} {sub.data?.lastName || ''}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                        <div className="text-sm text-gray-500">{sub.data?.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.courseSelection || ''}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{sub.data?.source || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={() => handleConfirm(sub.id)}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const AIBootcampForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  
  const handleConfirm = (submissionId: number) => {
    confirmSubmission('aibootcamp', submissionId)
    setStatusFilter('Confirmed')
  }

  useEffect(() => {
    const allSubs = getAllSubmissions()
    setSubmissions(allSubs['aibootcamp'] || [])

    const handler = () => {
      const updated = getAllSubmissions()
      setSubmissions(updated['aibootcamp'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const handleRowClick = (submission: any) => {
    setSelectedSubmission(submission)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedSubmission(null)
  }

  const filteredSubmissions = submissions.filter((sub: any) => {
    const schoolName = (sub.data?.schoolName || '').toLowerCase()
    const contactPerson = (sub.data?.contactPerson || '').toLowerCase()
    const email = (sub.data?.email || '').toLowerCase()
    const searchLower = searchTerm.toLowerCase()

    const matchesSearch =
      schoolName.includes(searchLower) ||
      contactPerson.includes(searchLower) ||
      email.includes(searchLower)

    const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
    const matchesStatus =
      statusFilter === 'All Status' ||
      (statusFilter === 'Confirmed' && statusValue === 'Confirmed') ||
      (statusFilter === 'Unconfirmed' && statusValue !== 'Confirmed')

    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['School Name', 'Contact Person', 'Email', 'Phone', 'Number of Students', 'Preferred Date', 'Facilities', 'Comments', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => {
      const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
      return [
        sub.data?.schoolName || '',
        sub.data?.contactPerson || '',
        sub.data?.email || '',
        sub.data?.phone || '',
        sub.data?.numStudents || '',
        sub.data?.startDate || '',
        sub.data?.facilities || '',
        sub.data?.comments || '',
        new Date(sub.createdAt).toLocaleDateString(),
        statusValue
      ]
    })

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aibootcamp_submissions_${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search by school, contact, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          >
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Unconfirmed">Unconfirmed</option>
          </select>
        </div>
      </div>

      {/* AI Bootcamp Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold">AI Bootcamp</h2>
          <button 
            onClick={exportData}
            className="px-4 py-2 bg-[#60080B] text-white rounded-lg hover:bg-[#470609] transition-colors"
          >
            Export Data
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facilities</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-6 py-8 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub: any) => {
                  const statusValue = sub.data?.status || (sub.data?.confirmed ? 'Confirmed' : 'Unconfirmed')
                  return (
                    <tr 
                      key={sub.id} 
                      onClick={() => handleRowClick(sub)}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.schoolName || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.contactPerson || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.email || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub.data?.numStudents || ''}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {sub.data?.startDate || ''}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs break-words">
                        {sub.data?.facilities || ''}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs break-words">
                        {sub.data?.comments || ''}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {statusValue === 'Confirmed' ? null : (
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {statusValue === 'Confirmed' ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <button
                              onClick={(e) => { e.stopPropagation(); handleConfirm(sub.id) }}
                              className="inline-flex items-center justify-center p-1 hover:bg-gray-100 rounded transition-colors"
                              title="Confirm"
                            >
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                AI Bootcamp Form Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* School Name */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">School Name</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.schoolName || 'N/A'}
                </span>
              </div>

              {/* School Address */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">School Address</span>
                <span className="text-sm text-gray-600 text-right ml-4">
                  {selectedSubmission.data?.schoolAddress || 'N/A'}
                </span>
              </div>

              {/* Contact Person */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Contact Person</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.contactPerson || 'N/A'}
                </span>
              </div>

              {/* Email */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <span className="text-sm text-blue-600 text-right ml-4">
                  {selectedSubmission.data?.email || 'N/A'}
                </span>
              </div>

              {/* Phone */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Phone</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.phone || 'N/A'}
                </span>
              </div>

              {/* Number of Students */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Number of Students</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.numStudents || 'N/A'}
                </span>
              </div>

              {/* Preferred Bootcamp Date */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Preferred Bootcamp Date</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.startDate || 'N/A'}
                </span>
              </div>

              {/* Available Facilities */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Available Facilities</span>
                <span className="text-sm text-gray-900 text-right ml-4">
                  {selectedSubmission.data?.facilities || 'N/A'}
                </span>
              </div>

              {/* Comments */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Comments</span>
                <span className="text-sm text-gray-600 text-right ml-4">
                  {selectedSubmission.data?.comments || 'N/A'}
                </span>
              </div>

              {/* Registration Date */}
              <div className="flex justify-between items-start py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Registration Date</span>
                <span className="text-sm text-gray-500 text-right ml-4">
                  {new Date(selectedSubmission.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>

              {/* Status */}
              <div className="flex justify-between items-start py-3">
                <span className="text-sm font-medium text-gray-700">Status</span>
                <span className={`text-sm font-medium text-right ml-4 ${
                  (selectedSubmission.data?.status || (selectedSubmission.data?.confirmed ? 'Confirmed' : 'Unconfirmed')) === 'Confirmed' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {selectedSubmission.data?.status || (selectedSubmission.data?.confirmed ? 'Confirmed' : 'Unconfirmed')}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormViewPage
