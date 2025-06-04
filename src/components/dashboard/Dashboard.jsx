import React from 'react'
import DashboardMetrics from './DashboardMetrics'
import OrderForm from '../OrderForm'
import RecentOrders from './RecentOrders'


const Dashboard = () => {
  return (
    <div className='items-center flex flex-col gap-2'>
        <DashboardMetrics/>
        <div className='grid grid-cols-3 w-full gap-2'>
          <div className='max-md:col-span-3 max-2xl:col-span-2 2xl:col-span-1 flex justify-center'>
            <OrderForm/>
          </div>
          
          <div className='max-md:col-span-3 max-2xl:col-span-2 2xl:col-span-1 flex justify-center items-center'>
            <RecentOrders/>
          </div>
        </div>

    </div>
  )
}

export default Dashboard