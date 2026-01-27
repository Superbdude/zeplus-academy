import { useEffect, useState } from 'react'
import { getAllSubmissions } from '../utils/storage'
import LeadsTable from '../components/LeadsTable'

const Leads = () => {
  const [submissions, setSubmissions] = useState<Record<string, any[]>>({})

  useEffect(() => {
    setSubmissions(getAllSubmissions())

    const handler = () => setSubmissions(getAllSubmissions())
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Leads Management</h1>
          <div className="text-gray-500">Track and manage all your leads</div>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Lead</button>
        </div>
      </div>

      <div className="bg-gray-50 border rounded p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input placeholder="Search by name, email" className="border rounded px-3 py-2" />
          <select className="border rounded px-3 py-2">
            <option>All Courses</option>
          </select>
          <select className="border rounded px-3 py-2">
            <option>All Status</option>
          </select>
          <button className="border rounded px-3 py-2">More Filters</button>
        </div>
      </div>

      <LeadsTable submissions={submissions} />
    </div>
  )
}

export default Leads
