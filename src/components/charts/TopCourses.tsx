import React from 'react'
import COURSES from '../../data/courses'

const TopCourses: React.FC<{ data: Record<string, number> }> = ({ data }) => {
  // Ensure we list all canonical course names, even if count is zero
  const entries = COURSES.map((name) => [name, data[name] || 0] as [string, number])
  const max = Math.max(1, ...entries.map(([, v]) => v))

  return (
    <div className="p-4 bg-white border rounded" style={{ minHeight: 340 }}>
      <h3 className="text-lg font-semibold mb-4">Top Performing Courses</h3>
      <div className="space-y-4 max-h-[260px] overflow-auto pr-3">
        {entries.map(([k, v]) => (
          <div key={k} className="flex items-center gap-4">
            <div className="w-36 text-sm text-gray-600 leading-tight break-words">{k}</div>
            <div className="flex-1">
              <div className="bg-gray-100 h-10 rounded-full overflow-hidden">
                <div style={{ width: `${(v / max) * 100}%` }} className="bg-green-600 h-10 rounded-full shadow-inner transition-all duration-500" />
              </div>
            </div>
            <div className="w-14 text-right text-sm text-gray-600">{v === 0 ? '' : v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCourses
