import React from 'react'

const MetricCard: React.FC<{ title: string; value: string | number; sub?: string }> = ({ title, value, sub }) => {
  return (
    <div className="bg-white border rounded p-5 w-full md:w-52">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-3">{value}</div>
      {sub && <div className="text-xs text-green-500 mt-2">{sub}</div>}
    </div>
  )
}

export default MetricCard
