import React from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const Chart = ( {/*chartData */}) => {
    const chartData = [
    { month: "Marzo", montevideo: 159, costa: 188 },
    { month: "Abril", montevideo: 109, costa: 222 },
    { month: "Mayo", montevideo: 253, costa: 130 },
    { month: "Junio", montevideo: 224, costa: 140 },
    { month: "Julio", montevideo: 210, costa: 121 },
    ]
    const chartConfig = {
    montevideo: {
        label: "Montevideo",
    },
    costa: {
        label: "Ciudad de la Costa"
    },
    }

  return (
    <div className='bg-dubraPrimary p-5 rounded-2xl w-2xl h-full'>
        <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={chartData} className='text-lg font-black'>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} className={'bg-dubraPrimary text-'}/>
                <Bar dataKey="montevideo" fill="var(--color-dubraSecondary)" radius={4}/>
                <Bar dataKey="costa" fill="var(--color-dubraText)" radius={4} />
            </BarChart>
        </ChartContainer>
    </div>
    
  )
}

export default Chart