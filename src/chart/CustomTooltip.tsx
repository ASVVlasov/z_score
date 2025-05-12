import type { TooltipProps } from 'recharts'

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{label}</p>
        {payload.map((element, index) => (
          <p
            key={index}
            className='label'
          >{`${element.name} : ${element.value}`}</p>
        ))}
      </div>
    )
  }

  return null
}
