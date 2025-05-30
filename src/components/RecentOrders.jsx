import React from 'react'
import ServiceCard from './ServiceCard'
import { Package } from 'lucide-react'

const RecentOrders = () => {
  return (
    <div className='h-fit flex flex-col gap-3 text-center border p-3 rounded-xl'>
        <h2 className='text-2xl'>Ordenes Recientes</h2>
        <ServiceCard
        icon={<Package className='text-dubraSecondary'/>}
        title='ORDEN 78329194'
        description='23/5/2025'
        background='outline bg-dubraWhite'/>
        <ServiceCard
        icon={<Package className='text-dubraSecondary'/>}
        title='ORDEN 78329194'
        description='23/5/2025'
        background='outline bg-dubraWhite'/>
        <ServiceCard
        icon={<Package className='text-dubraSecondary'/>}
        title='ORDEN 78329194'
        description='23/5/2025'
        background='outline bg-dubraWhite'/>
    </div>

    //todo: Recent orders < 3 ? Show recent orders CARDS & MAKE AN ORDER CARD : Show recent orders CARDS
  )
}

export default RecentOrders