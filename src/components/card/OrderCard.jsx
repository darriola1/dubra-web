import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const OrderCard = ({orderId, userName, createdAt, shippingsAmount, orderStatus, icon}) => {


  return (
    <Card className={`w-[30vh] bg-dubraText text-dubraPrimary place-self-center border-0 shadow-none`}>
        <CardHeader className="flex items-center gap-3">
          {icon && <div>{icon}</div>}
          <div>
            <CardTitle className='text-lg'>Id de la Orden: {orderId}</CardTitle>
            <CardDescription className='text-base'>Creada: {createdAt}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-start mt-[-1rem] text-lg flex flex-col gap-2 font-semibold">
            <p className='bg-dubraPrimary px-2 py-1 rounded-2xl'>Creado por: {userName}</p>
            <p className='bg-dubraPrimary px-2 py-1 rounded-2xl'>Estado de la orden: {orderStatus}</p>
            <p className='bg-dubraPrimary px-2 py-1 rounded-2xl'>Cantidad de paradas: {shippingsAmount}</p>
        </CardContent>
    </Card>
  )
}

export default OrderCard