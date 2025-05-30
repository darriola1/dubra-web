import React from 'react'
import FormBuilder from './FormBuilder'

const OrderForm = () => {
  return (
    <FormBuilder
    title='Realiza tu pedido'
    description=''
    background='bg-dubraPrimary'
    fields={[
        { name: 'address1', label: 'Direccion de Recogida', type: 'text', placeholder: 'Calle Ejemplo 111' },
        { name: 'address2', label: 'Direccion de Entrega', type: 'text', placeholder: 'Calle Ejemplo 222' },
        { name: 'packagesAmount', label: 'Cantidad de bultos', type: 'number', placeholder: '3' }
    ]}
    />

    // todo: ADD MORE FIELDS, 2 COLUMNS IF FIELDS > 3
  )
}

export default OrderForm