import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TrackingInputGroup = () => {
  return (
    <div className='mt-5 flex gap-3 w-full max-w-md'>
      <Input className='bg-dubraWhite p-5 placeholder:text-lg' placeholder='Ej: 123456789'/>
      <Button className='bg-dubraSecondary hover:bg-dubraSecondary/80 font-bold p-5 text-lg'> Seguir </Button>
    </div>
  )
}

export default TrackingInputGroup