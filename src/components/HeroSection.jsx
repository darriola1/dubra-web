import React from 'react'

const HeroSection = ({title, subtitle, extraComponent, imageSrc, background, textColor, centerContent, customHeight, id}) => {
  return (
    //Every section on the web have this structure:
    //'extraComponent', 'imageSrc', 'subtitle', 'centerContent', 'fit', 'textColor' tags are optional.
    <section id={id} className={`flex ${customHeight? customHeight : 'h-150'} w-full bg-cover bg-center justify-center items-center`} style={{ backgroundImage: `url(${imageSrc})` }}>

    <div className={`w-full h-full p-5 ${background} flex `}>
        <div className={`w-full flex items-center ${centerContent? 'justify-center':'pt-5'} ${textColor} flex-col`}>
          <div>
            <h1 className='md:text-6xl text-5xl text-center mb-3'>{title}</h1>
            {subtitle && <h2 className='text-xl text-center'>{subtitle}</h2>}
          </div>
            {extraComponent}
        </div>
    </div>

    </section>
  )
}

export default HeroSection