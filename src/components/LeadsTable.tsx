import React, { useState } from 'react'
import type { SubmissionRecord } from '../utils/storage'
import SubmissionModal from './SubmissionModal'

type Flat = { id: string | number; createdAt: string; formType?: string; flatData: Record<string, any> }

const flatten = (obj: any, prefix = ''): Record<string, any> => {
  const out: Record<string, any> = {}
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    if (prefix) out[prefix] = obj
    return out
  }
  for (const k of Object.keys(obj)) {
    const val = obj[k]
    const key = prefix ? `${prefix}.${k}` : k
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(out, flatten(val, key))
    } else {
      out[key] = val
    }
  }
  return out
}

const LeadsTable: React.FC<{ submissions: Record<string, SubmissionRecord[]> }> = ({ submissions }) => {
  // convert all submissions into a flat array of entries with formType
  const entries: Flat[] = []
  Object.entries(submissions).forEach(([type, items]) => {
    items.forEach(it => entries.push({ id: it.id, createdAt: it.createdAt, formType: type, flatData: flatten(it.data || {}) }))
  })

  const [selected, setSelected] = useState<Flat | null>(null)

  const handleExport = (entry: Flat) => {
    const headers = Object.keys(entry.flatData)
    const row = headers.map(h => JSON.stringify(entry.flatData[h] ?? ''))
    const csv = [headers.join(','), row.join(',')].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `submission_${entry.id}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const markAsContacted = (entry: Flat) => {
    // mutate localStorage submissions: try to set data.status = 'Contacted'
    try {
      const raw = localStorage.getItem('zeplus_submissions') || '{}'
      const all = JSON.parse(raw)
      const list = (entry.formType && all[entry.formType]) || []
      const idx = list.findIndex((i: any) => i.id === entry.id)
      if (idx !== -1) {
        list[idx].data = { ...(list[idx].data || {}), status: 'Contacted' }
        localStorage.setItem('zeplus_submissions', JSON.stringify(all))
        // dispatch global event to inform other parts
        window.dispatchEvent(new Event('zeplus:submission'))
      }
    } catch (err) {
      // ignore
    }
  }

  return (
    <div className="mt-4 overflow-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Course</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="border-t border-gray-200">
              <td className="px-4 py-3 align-top">{e.flatData['name'] || e.flatData['fullName'] || ''}</td>
              <td className="px-4 py-3 align-top">{e.flatData['email'] || ''}</td>
              <td className="px-4 py-3 align-top">{e.flatData['phone'] || ''}</td>
              <td className="px-4 py-3 align-top">{e.flatData['course'] || ''}</td>
              <td className="px-4 py-3 align-top">{e.flatData['source'] || ''}</td>
              <td className="px-4 py-3 align-top">{e.flatData['location'] || ''}</td>
              <td className="px-4 py-3 align-top">
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">{e.flatData['status'] || 'New'}</span>
              </td>
              <td className="px-4 py-3 align-top">
                <button onClick={() => setSelected(e)} aria-label="view" className="mr-2">👁️</button>
                <button onClick={() => { handleExport(e) }} className="mr-2">⬇️</button>
                <button onClick={() => { markAsContacted(e); setSelected({ ...e, flatData: { ...e.flatData, status: 'Contacted' } }) }}>✓</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SubmissionModal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        formType={selected?.formType}
        createdAt={selected?.createdAt}
        data={selected?.flatData}
        onExport={() => selected && handleExport(selected)}
        onMarkContacted={() => selected && (markAsContacted(selected))}
      />
    </div>
  )
}

export default LeadsTable
