import React from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const Chart = ( {/*chartData */}) => {
    const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
    desktop: {
        label: "Bultos",
    },
    mobile: {
        label: "Pedidos"
    },
    }

  return (
    <div className='bg-dubraPrimary p-5 rounded-2xl w-full h-full'>
        <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} className='bg-dubraPrimary'/>
                <Bar dataKey="desktop" fill="var(--color-dubraSecondary)" radius={4}/>
                <Bar dataKey="mobile" fill="var(--color-dubraText)" radius={4} />
            </BarChart>
        </ChartContainer>
    </div>
    
  )
}

export default Chart