import React from 'react'

// Styled conversion funnel: vertical bars with fixed Y scale (0..1200)
const ConversionFunnel: React.FC<{ data: { contacted: number; enrolled: number } }> = ({ data }) => {
  const maxValue = 1200 // fixed scale as requested
  const width = 360
  const height = 340
  const padding = { top: 28, right: 20, bottom: 56, left: 48 }
  const innerW = width - padding.left - padding.right
  const innerH = height - padding.top - padding.bottom

  const bars = [
    { label: 'Contacted', value: data.contacted || 0, color: '#2563EB' },
    { label: 'Enrolled', value: data.enrolled || 0, color: '#10B981' },
  ]

  const ticks = [0, 300, 600, 900, 1200]

  const scaleY = (v: number) => {
    const ratio = Math.max(0, Math.min(1, v / maxValue))
    return padding.top + (innerH - ratio * innerH)
  }

  // compute bar geometry
  const barSlot = innerW / 3
  const barWidth = Math.min(96, barSlot * 0.7)

  return (
    <div className="p-4 bg-white border rounded shadow-sm" style={{ minHeight: 340 }}>
      <h3 className="text-lg font-semibold mb-3">Conversion Funnel</h3>
      <svg width={width} height={height} role="img" aria-label="Conversion funnel chart">
        {/* Y axis gridlines and labels (skip 0 label) */}
        {ticks.map((t) => {
          const y = scaleY(t)
          return (
            <g key={t}>
              <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#EEF2F7" strokeWidth={1} />
              {t !== 0 && (
                <text x={padding.left - 12} y={y + 4} textAnchor="end" fontSize={13} fill="#6B7280">{t}</text>
              )}
            </g>
          )
        })}

        {/* Bars */}
        {bars.map((b, i) => {
          const cx = padding.left + (i + 0.5) * barSlot + barSlot * 0.1
          const y = scaleY(b.value)
          const h = padding.top + innerH - y
          const x = cx - barWidth / 2
          const percent = Math.round((b.value / maxValue) * 100)

          return (
            <g key={b.label}>
              <rect x={x} y={y} width={barWidth} height={h} rx={12} fill={b.color} style={{ filter: 'drop-shadow(0 1px 4px rgba(16,24,40,0.06))' }} />

              {/* label under bar */}
              <text x={cx} y={height - padding.bottom + 30} textAnchor="middle" fontSize={14} fill="#374151">{b.label}</text>

              {/* value badge above bar (white on dark) if value > 0 */}
              {b.value > 0 && (
                <g>
                  <rect x={cx - 28} y={y - 28} width={56} height={20} rx={10} fill="#ffffff" opacity={0.98} />
                  <text x={cx} y={y - 14} textAnchor="middle" fontSize={12} fill="#111827">{`${b.value} (${percent}%)`}</text>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default ConversionFunnel
