import React from 'react'

const Row: React.FC<{ label: string; value?: React.ReactNode }> = ({ label, value }) => (
  <div className="grid grid-cols-2 gap-4 py-2">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-sm text-gray-800">{value ?? ''}</div>
  </div>
)

const SubmissionModal: React.FC<{
  open: boolean
  onClose: () => void
  id?: number
  formType?: string
  createdAt?: string
  data?: Record<string, any>
  onMarkContacted?: () => void
  onExport?: () => void
}> = ({ open, onClose, id, formType, createdAt, data = {}, onMarkContacted, onExport }) => {
  const [status, setStatus] = React.useState<string>(data.status || 'New')

  React.useEffect(() => {
    setStatus(data.status || 'New')
  }, [data])

  if (!open) return null

  const toggleAttended = async () => {
    const newStatus = status === 'Contacted' ? 'New' : 'Contacted'
    try {
      const raw = localStorage.getItem('zeplus_submissions') || '{}'
      const all = JSON.parse(raw)
      if (id && formType && all[formType]) {
        const list = all[formType]
        const idx = list.findIndex((i: any) => i.id === id)
        if (idx !== -1) {
          list[idx].data = { ...(list[idx].data || {}), status: newStatus }
          localStorage.setItem('zeplus_submissions', JSON.stringify(all))
          window.dispatchEvent(new Event('zeplus:submission'))
          setStatus(newStatus)
          if (onMarkContacted) onMarkContacted()
        }
      }
    } catch (err) {
      // ignore
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">Submission Details</h3>
            <div className="text-sm text-gray-500">{formType} - {createdAt ? new Date(createdAt).toLocaleString() : ''}</div>
          </div>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Row label="Name" value={data.name || data.fullName || ''} />
            <Row label="Phone" value={data.phone || ''} />
            <Row label="Message" value={<div className="bg-gray-100 p-3 rounded">{data.message || data.msg || ''}</div>} />
          </div>
          <div>
            <Row label="Email" value={data.email || ''} />
            <Row label="Course" value={data.course || data.program || data.courseName || ''} />
            <Row label="Status" value={<span className={`px-3 py-1 rounded-full text-white text-xs ${status==='Contacted' ? 'bg-green-500' : 'bg-yellow-500'}`}>{status}</span>} />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button onClick={() => onExport && onExport()} className="px-4 py-2 border rounded">⬇️ Export</button>
          <button onClick={toggleAttended} className={`px-4 py-2 rounded ${status==='Contacted' ? 'bg-gray-200 text-gray-800' : 'bg-blue-600 text-white'}`}>
            {status==='Contacted' ? 'Mark as Not Contacted' : 'Mark as Contacted'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubmissionModal
