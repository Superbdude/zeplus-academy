import { useEffect, useState } from 'react'
import { getAllSubmissions } from '../../utils/storage'

const InsiderForms = () => {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  useEffect(() => {
    const loadData = async () => {
      const allSubs = await getAllSubmissions()
      const insiderSubs = (allSubs as any)['insider'] || []
      setSubmissions(insiderSubs)
    }
    loadData()

    const handler = async () => {
      const updated = await getAllSubmissions()
      setSubmissions((updated as any)['insider'] || [])
    }
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const filteredSubmissions = submissions.filter((sub: any) => {
    const matchesSearch = 
      (sub.data?.firstName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.data?.lastName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.data?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'All Status' || 
      (sub.data?.status || 'Inactive') === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const exportData = () => {
    const headers = ['Name', 'Contact', 'Registered', 'Status']
    const rows = filteredSubmissions.map((sub: any) => [
      `${sub.data?.firstName || ''} ${sub.data?.lastName || ''}`,
      `${sub.data?.email || ''}\n${sub.data?.phone || ''}`,
      new Date(sub.createdAt).toLocaleDateString(),
      sub.data?.status || 'Inactive'
    ])

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
              placeholder="Search by name or parent.."
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
            <option>Active</option>
            <option>Inactive</option>
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

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
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
                filteredSubmissions.map((sub: any) => (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                        sub.data?.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {sub.data?.status || 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default InsiderForms
