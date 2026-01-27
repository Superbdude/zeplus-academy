import { useEffect, useState } from 'react'
import { getAllSubmissions } from '../utils/storage'

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState<Record<string, any[]>>({})
  const [selectedFormType, setSelectedFormType] = useState<string>('all')

  useEffect(() => {
    setSubmissions(getAllSubmissions())
    const handler = () => setSubmissions(getAllSubmissions())
    window.addEventListener('zeplus:submission', handler)
    return () => window.removeEventListener('zeplus:submission', handler)
  }, [])

  const total = Object.values(submissions).flat().length
  const contacted = Object.values(submissions).flat().filter((s: any) => String(s.data?.status || '').toLowerCase() === 'contacted').length
  const reviewed = Object.values(submissions).flat().filter((s: any) => s.data?.reviewed).length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Form Submissions</h1>
          <div className="text-gray-500">View and manage all website form submissions</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border rounded p-4">{total}<div className="text-sm text-gray-500">Total Submissions</div></div>
        <div className="bg-white border rounded p-4">{Object.values(submissions).flat().filter((s:any)=>String(s.data?.status||'').toLowerCase()!=='contacted').length}<div className="text-sm text-gray-500">New</div></div>
        <div className="bg-white border rounded p-4">{reviewed}<div className="text-sm text-gray-500">Reviewed</div></div>
        <div className="bg-white border rounded p-4">{contacted}<div className="text-sm text-gray-500">Contacted</div></div>
      </div>

      <div className="border rounded bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input placeholder="Search by name, email, or phone" className="border rounded px-3 py-2" />
          <select className="border rounded px-3 py-2" value={selectedFormType} onChange={(e) => setSelectedFormType(e.target.value)}>
            <option value="all">All Form Types</option>
            <option value="insider">Insider</option>
            <option value="apply_now">Apply Now</option>
            <option value="frontend">Frontend</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="data">Data Science</option>
            <option value="deeplearning">Deep Learning</option>
            <option value="generative">Generative AI</option>
            <option value="introweb">Intro Web</option>
            <option value="introcybersecurity">Intro Cybersecurity</option>
            <option value="fullstack">Fullstack</option>
            <option value="uidesign">UI Design</option>
            <option value="digital">Digital</option>
            <option value="gamedevelopment">Game Development</option>
            <option value="mastery">Mastery</option>
            <option value="introai">Intro AI</option>
            <option value="aimachine">AI Machine</option>
            <option value="cybersecurityai">Cybersecurity AI</option>
            <option value="Tech4teen">Tech 4 Teen</option>
            <option value="becomepartner">Become Partner</option>
            <option value="schoolpartner">School Partner</option>
            <option value="aibootcamp">AI Bootcamp</option>
          </select>
          <select className="border rounded px-3 py-2"><option>All Status</option></select>
        </div>
      </div>

      <div className="mt-6">
        <AllSubmissionsList submissions={submissions} selectedFormType={selectedFormType} />
      </div>
    </div>
  )
}

const AllSubmissionsList: React.FC<{ submissions: Record<string, any[]>, selectedFormType: string }> = ({ submissions, selectedFormType }) => {
  let items = Object.entries(submissions).flatMap(([type, arr]) => arr.map(it => ({ formType: type, ...it })))
  
  if (selectedFormType !== 'all') {
    items = items.filter(item => item.formType === selectedFormType)
  }

  if (items.length === 0) return <div className="text-gray-500">No submissions yet.</div>

  return (
    <div className="overflow-auto bg-white border rounded">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Form Type</th>
            <th className="px-4 py-3">Submitted</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it: any) => (
            <tr key={it.id} className="border-t border-gray-200">
              <td className="px-4 py-3 align-top">{it.data?.name || it.data?.fullName || it.data?.schoolName || ''}</td>
              <td className="px-4 py-3 align-top">{it.data?.email || ''}</td>
              <td className="px-4 py-3 align-top">{it.data?.phone || ''}</td>
              <td className="px-4 py-3 align-top">{it.formType}</td>
              <td className="px-4 py-3 align-top">{new Date(it.createdAt).toLocaleString()}</td>
              <td className="px-4 py-3 align-top">{it.data?.status || 'New'}</td>
              <td className="px-4 py-3 align-top"> <SubmissionViewButton submission={it} /> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const SubmissionViewButton: React.FC<{ submission: any }> = ({ submission }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="mr-2">👁️</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setOpen(false)}></div>
          <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Submission Details</h3>
                <div className="text-sm text-gray-500">{submission.formType} - {new Date(submission.createdAt).toLocaleString()}</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-500">✕</button>
            </div>

            {submission.formType === 'aibootcamp' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="text-sm font-semibold mb-3">School Details</h4>
                  <div className="text-sm text-gray-600">School Name</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.schoolName || '-'}</div>
                  <div className="text-sm text-gray-600">Address / Region</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.schoolAddress || '-'}</div>
                  <div className="text-sm text-gray-600">Number of Students</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.numStudents || '-'}</div>
                  <div className="text-sm text-gray-600">Preferred Bootcamp Date</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.startDate || '-'}</div>
                  <div className="text-sm text-gray-600">Available Facilities</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.facilities || '-'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="text-sm font-semibold mb-3">Contact Details</h4>
                  <div className="text-sm text-gray-600">Contact Person</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.contactPerson || '-'}</div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.email || '-'}</div>
                  <div className="text-sm text-gray-600">Phone</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.phone || '-'}</div>
                  <div className="text-sm text-gray-600">Status</div>
                  <div className="text-sm text-gray-800 mb-3">{submission.data?.status || 'New'}</div>
                </div>
                {submission.data?.comments ? (
                  <div className="bg-white p-4 rounded border md:col-span-2">
                    <h4 className="text-sm font-semibold mb-2">Additional Notes</h4>
                    <div className="text-sm text-gray-800 whitespace-pre-wrap">{submission.data?.comments}</div>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600">Name</div>
                  <div className="text-sm text-gray-800 mb-4">{submission.data?.name || submission.data?.fullName || submission.data?.schoolName || ''}</div>

                  <div className="text-sm text-gray-600">Phone</div>
                  <div className="text-sm text-gray-800 mb-4">{submission.data?.phone || ''}</div>

                  <div className="text-sm text-gray-600">Message</div>
                  <div className="bg-gray-100 p-3 rounded">{submission.data?.message || submission.data?.msg || submission.data?.comments || ''}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="text-sm text-gray-800 mb-4">{submission.data?.email || ''}</div>

                  <div className="text-sm text-gray-600">Course</div>
                  <div className="text-sm text-gray-800 mb-4">{submission.data?.course || submission.data?.program || submission.data?.courseName || submission.data?.startDate || ''}</div>

                  <div className="text-sm text-gray-600">Status</div>
                  <div className="text-sm text-gray-800 mb-4">{submission.data?.status || 'New'}</div>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => {
                // export
                const headers = Object.keys(submission.data || {})
                const row = headers.map(h => JSON.stringify(submission.data[h] ?? ''))
                const csv = [headers.join(','), row.join(',')].join('\n')
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `submission_${submission.id}.csv`
                document.body.appendChild(a)
                a.click()
                a.remove()
                URL.revokeObjectURL(url)
              }} className="px-4 py-2 border rounded">⬇️ Export</button>

              <button onClick={() => {
                // toggle attended status
                try {
                  const raw = localStorage.getItem('zeplus_submissions') || '{}'
                  const all = JSON.parse(raw)
                  const list = all[submission.formType] || []
                  const idx = list.findIndex((i: any) => i.id === submission.id)
                  if (idx !== -1) {
                    const current = String(list[idx].data?.status || 'New')
                    const next = current === 'Contacted' ? 'New' : 'Contacted'
                    list[idx].data = { ...(list[idx].data || {}), status: next }
                    localStorage.setItem('zeplus_submissions', JSON.stringify(all))
                    window.dispatchEvent(new Event('zeplus:submission'))
                  }
                } catch (err) {}
              }} className="px-4 py-2 bg-blue-600 text-white rounded">Toggle Attended</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormSubmissions
