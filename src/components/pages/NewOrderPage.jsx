import React from 'react'
import HeroSection from '../HeroSection'
import PlaceOrderForm from '../PlaceOrderForm'

const NewOrderPage = () => {
  return (
    <div className='h-full'>
          <HeroSection
          extraComponent={<PlaceOrderForm/>}
          customHeight=' h-full '
          centerContent={true}
          textColor={'text-dubraPrimary'}
          />
    </div>
  )
}

export default NewOrderPage