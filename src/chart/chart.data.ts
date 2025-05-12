export const DATA = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const generateZScore = (
  field: Exclude<keyof (typeof DATA)[number], 'name'>
) => {
  const averageValue =
    DATA.reduce((acc, currentValue) => acc + currentValue[field], 0) /
    DATA.length

  const standardValue = Math.sqrt(
    DATA.map(value => value[field] - averageValue)
      .map(value => value * value)
      .reduce((acc, currentValue) => acc + currentValue, 0) /
      (DATA.length - 1)
  )

  const ZScoreArray = DATA.map(value =>
    Math.abs((value[field] - averageValue) / standardValue)
  )

  return ZScoreArray
}

export const pvZScore = generateZScore('pv')
export const uvZScore = generateZScore('uv')
export const pvColor = '#82ca9d'
export const uvColor = '#8884d8'
