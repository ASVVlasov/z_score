import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DATA, pvColor, pvZScore, uvColor, uvZScore } from './chart.data'

export const Chart = () => {
  return (
    <LineChart
      width={600}
      height={400}
      data={DATA}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip itemStyle={{ color: 'black' }} labelStyle={{ color: 'black' }} />
      <Legend stroke='black' />
      <defs>
        <linearGradient id='uvColors' x1={0} y1={0} x2={1} y2={0}>
          {uvZScore.map((value, index) => (
            <stop
              key={index}
              offset={(1 / (uvZScore.length - 1)) * index}
              stopColor={value > 1 ? 'red' : 'green'}
              stopOpacity={1}
            />
          ))}
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id='pvColors' x1={0} y1={0} x2={1} y2={0}>
          {pvZScore.map((value, index) => (
            <stop
              key={index}
              offset={(1 / (pvZScore.length - 1)) * index}
              stopColor={value > 1 ? 'red' : 'green'}
              stopOpacity={1}
            />
          ))}
        </linearGradient>
      </defs>
      <Line
        type='monotone'
        dataKey='uv'
        stroke='url(#uvColors)'
        activeDot={{ r: 8, stroke: uvColor, fill: uvColor }}
        dot={{
          stroke: uvColor,
          fill: uvColor,
        }}
      />
      <Line
        type='monotone'
        dataKey='pv'
        stroke='url(#pvColors)'
        activeDot={{ r: 8, stroke: pvColor, fill: pvColor }}
        dot={{
          stroke: pvColor,
          fill: pvColor,
        }}
      />
    </LineChart>
  )
}
