import React from 'react'

// tuned marketing palette (blue, green, orange, purple, red, cyan)
const colors = ['#2563EB', '#10B981', '#F59E0B', '#A78BFA', '#EF4444', '#06B6D4']

const PieSlice: React.FC<{ cx: number; cy: number; r: number; start: number; end: number; fill: string }> = ({ cx, cy, r, start, end, fill }) => {
  const startRad = (Math.PI / 180) * start
  const endRad = (Math.PI / 180) * end
  const x1 = cx + r * Math.cos(startRad)
  const y1 = cy + r * Math.sin(startRad)
  const x2 = cx + r * Math.cos(endRad)
  const y2 = cy + r * Math.sin(endRad)
  const large = end - start > 180 ? 1 : 0
  const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`
  return <path d={d} fill={fill} stroke="#fff" strokeWidth={2} />
}

const LeadSourcesChart: React.FC<{ data: Record<string, number> }> = ({ data }) => {
  const entries = Object.entries(data).filter(([, v]) => v > 0)
  const total = Object.values(data).reduce((s, v) => s + (v || 0), 0) || 1

  // sort entries descending so largest slice is first
  entries.sort((a, b) => b[1] - a[1])

  let angle = 0

  return (
    <div className="p-2 bg-white border rounded flex items-center justify-center" style={{ minHeight: 320 }}>
      <svg width={300} height={300} viewBox="0 0 300 300">
        {entries.map(([k, v], i) => {
          const start = angle
          const slice = (v / total) * 360
          angle += slice
          const end = angle
          const cx = 150
          const cy = 150
          const r = 140
          return <PieSlice key={k} cx={cx} cy={cy} r={r} start={start} end={end} fill={colors[i % colors.length]} />
        })}
      </svg>
    </div>
  )
}

export default LeadSourcesChart
