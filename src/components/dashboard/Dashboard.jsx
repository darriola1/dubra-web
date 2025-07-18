import React from 'react'
import DashboardMetrics from './DashboardMetrics'
import RecentOrders from './RecentOrders'


const Dashboard = () => {
  return (
    <div className='items-center flex  gap-5'>
        <div className='flex w-full gap-2'>
            <div className='flex flex-col items-center gap-5'>
              <DashboardMetrics rol={'user'} mdCols={2}/>
              <RecentOrders link={'/orderManager'} title={'Órdenes Recientes'}/>
            </div>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Dashboard