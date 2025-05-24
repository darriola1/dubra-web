import React from 'react'
import LogoSF from '@/assets/LogoSF.png'
import NavBar from './NavBar'

const Header = () => {

  return (
    <header className='w-full fixed bg-dubraPrimary px-15 md:px-[15vh] outline-1 py-1 z-20'>
      <NavBar
      Logo={LogoSF}/>
    </header>
        
  )
}

export default Header
