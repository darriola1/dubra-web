import React from 'react'

const HeroCard = ({content, title, image, imageDirection}) => {
  return (
    <div className={`w-3/4 bg-dubraPrimary h-fit p-5 rounded-xl flex items-center gap-5 ${imageDirection == 'left'? '' : 'flex-row-reverse'}`}> 
        <img src={image} className=' size-100 object-cover aspect-square rounded-full border-2 border-dubraText'/>
        
        <div className='items-center flex flex-col w-full gap-3'>
            <h3 className='text-3xl'>{title}</h3>
            <p className='text-xl text-center'>
                {content}
            </p>
        </div>
    </div>
    
  )
}

export default HeroCard