import React, { useEffect, useRef, useState } from 'react'
import NavBar from './navbar/NavBar'
import { AlignJustify, Database, DoorOpen, Home, Info, Truck, User2 } from 'lucide-react'
import { Button } from './ui/button'
import { useAuth } from '@/context/AuthContext'
import { ROUTES } from '@/lib/constants'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const {user, logout} = useAuth(); 

  const HandleLogOut = async () =>{
   await logout();
  }

  const extraFields = [
    user ? {text: 'Programá tu envío', link: ROUTES.USERPLACEORDER, icon:<Truck/>} : {text: 'Programá tu envío', link: ROUTES.LOGIN, icon:<Truck/>},
    !user && {text: 'Iniciá Sesión', link: ROUTES.LOGIN, icon:<User2/>},
    user && {text: 'Cerrar Sesión', link: ROUTES.HOME, icon:<DoorOpen/>, onClick: () => HandleLogOut()},
  ].filter(Boolean);

  const fields = [
    { text: 'Inicio', link: ROUTES.HOME, icon:<Home/> },
    { text: 'Sobre Nosotros', link: ROUTES.ABOUTUS, icon:<Info/> },
    user && { text: 'Dashboard', link: `/${user?.role}/dashboard`, icon:<Database/> },
  ].filter(Boolean);

  return (
    <header className='w-full fixed bg-dubraPrimary px-5 lg:px-[15vh] outline-1 py-1 z-20'>
      <NavBar
      fields={fields}
      extraFields= {extraFields}
      extraButton={
        <Button className='bg-dubraSecondaryHover p-0 md:sr-only'  onClick={() => setIsOpen(!isOpen)}>
          <AlignJustify className='w-fit h-fit' size={28}/>
        </Button>
      }
      menuRef={menuRef}
      isOpen={isOpen}
      Logo={true}/>
    </header>
        
  )
}

export default Header