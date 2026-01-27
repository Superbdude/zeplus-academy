import { useMemo } from 'react'

interface MonthlyEnrollmentChartProps {
  submissions: Record<string, any[]>
}

const MonthlyEnrollmentChart = ({ submissions }: MonthlyEnrollmentChartProps) => {
  const monthlyData = useMemo(() => {
    const allItems = Object.values(submissions).flat()
    const monthCounts: Record<string, number> = {}

    // Full year months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // Initialize all months with 0
    months.forEach(month => {
      monthCounts[month] = 0
    })

    // Count submissions by month (aggregate across years)
    allItems.forEach((item: any) => {
      const date = new Date(item.createdAt || Date.now())
      if (Number.isNaN(date.getTime())) return
      const monthIndex = date.getMonth()
      const monthName = months[monthIndex]
      if (monthName) {
        monthCounts[monthName] = (monthCounts[monthName] || 0) + 1
      }
    })

    return months.map(month => ({ month, count: monthCounts[month] || 0 }))
  }, [submissions])
  
  const maxValue = Math.max(...monthlyData.map(d => d.count), 10)
  const chartHeight = 300
  const chartWidth = 1200
  const padding = { top: 20, right: 40, bottom: 40, left: 40 }
  const innerHeight = chartHeight - padding.top - padding.bottom
  const innerWidth = chartWidth - padding.left - padding.right
  
  const xScale = (index: number) => padding.left + (index / (monthlyData.length - 1)) * innerWidth
  const yScale = (value: number) => chartHeight - padding.bottom - (value / maxValue) * innerHeight
  
  // Create path for line chart
  const linePath = monthlyData
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.count)}`)
    .join(' ')
  
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-[20px] font-[500] mb-4">Monthly Enrollment Growth</h3>
      <svg
        width="100%"
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="none"
        className="w-full"
      >
        {/* Y-axis grid lines */}
        {[0, 15, 30, 45, 60].map(value => (
          <g key={value}>
            <line
              x1={padding.left}
              y1={yScale(value)}
              x2={chartWidth - padding.right}
              y2={yScale(value)}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <text
              x={padding.left - 10}
              y={yScale(value)}
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {value}
            </text>
          </g>
        ))}
        
        {/* Line path */}
        <path
          d={linePath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {monthlyData.map((d, i) => (
          <circle
            key={i}
            cx={xScale(i)}
            cy={yScale(d.count)}
            r="4"
            fill="#3b82f6"
            stroke="white"
            strokeWidth="2"
          />
        ))}
        
        {/* X-axis labels */}
        {monthlyData.map((d, i) => (
          <text
            key={i}
            x={xScale(i)}
            y={chartHeight - padding.bottom + 25}
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            {d.month}
          </text>
        ))}
        
      </svg>
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
        <span className="inline-block w-3 h-3 rounded-full bg-blue-500" aria-hidden="true"></span>
        <span>Enrollments</span>
      </div>
    </div>
  )
}

export default MonthlyEnrollmentChart
