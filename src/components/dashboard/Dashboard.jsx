import React from 'react'
import DashboardMetrics from './DashboardMetrics'
import RecentOrders from './RecentOrders'
import favicon from '@/assets/favicon.ico'

const Dashboard = () => {
  return (
    <div className=' flex gap-5 size-full'>
        <div className='flex w-full gap-2 max-lg:justify-center'>
            <div className='flex flex-col items-center gap-5 w-full min-w-xl'>
              <DashboardMetrics rol={'user'} cols={`sm:grid-cols-2`}/>
              <RecentOrders link={'/orderManager'} title={'Órdenes Recientes'}/>
            </div>
            <div className='xl:w-full flex justify-center items-center w-0'>
              <div className='xl:w-4/5'>
                <img src={favicon} className='w-full mix-blend-overlay opacity-35 aspect-square object-cover'></img>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard