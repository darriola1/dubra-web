import React from 'react'
import HeroSection from '../HeroSection'
import DubraCamioneta from '@/assets/DubraCamioneta3.png'
import HeroCard from '../HeroCard'

const AboutUsPage = () => {
  return (
    <div className='pt-25'>
      <HeroSection
        title= '¡Conocé más de nosotros!'
        subtitle=''
        background= 'bg-dubraText'
        centerContent= {false}
        customHeight= 'h-fit'
        extraComponent={
          <div className='pt-5 size-full flex flex-col items-center gap-10'> 
            <HeroCard
            imageDirection='left'
            image={DubraCamioneta}
            title={'Hola'}
            content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi illo perspiciatis dolore velit? Quaerat maxime fugit, molestiae delectus quis eum, voluptatum, nemo dolorem deleniti eveniet aliquam facilis incidunt earum?'}/>
            <HeroCard
            imageDirection='right'
            image={DubraCamioneta}
            title={'Hola'}
            content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi illo perspiciatis dolore velit? Quaerat maxime fugit, molestiae delectus quis eum, voluptatum, nemo dolorem deleniti eveniet aliquam facilis incidunt earum?'}/>
          </div>
        }/>
    </div>
  )
}

export default AboutUsPage