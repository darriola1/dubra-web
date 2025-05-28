import React from 'react'
import { NavigationMenu,
        NavigationMenuList,
        NavigationMenuItem,
 } from './ui/navigation-menu'
import { Button } from './ui/button'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import NavBarButton from './NavBarButton'
import { Link } from 'react-router-dom';



const NavBar = ({Logo}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    <div>
        <NavigationMenu className='justify-between min-w-full bg-dubraPrimary py-2'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to='/'>
                        <img src={Logo} alt="Dubra Transporte y Logística Logo" className='w-70 pe-10' />
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>

            {/*NavBar for medium display and bigger.*/}
            <div className='flex items-center w-fit h-fit'> 

                <Button className='bg-dubraSecondaryHover p-0 md:sr-only ' onClick={() => setIsOpen(!isOpen)}>
                    <AlignJustify className='w-fit h-fit' size={28}/>
                </Button>

                <ul >
                    <div className='max-md:sr-only md:flex md:flex-row gap-5 items-center'> 
                        <NavBarButton text={'Inicio'} link={'/'}/>
                        <Link to="/login">
                            <Button className='text-base bg-dubraSecondary hover:bg-dubraSecondary/80 p-3 font-bold'>
                                PROGRAMÁ TU ENVÍO
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button className='text-base bg-dubraSecondary hover:bg-dubraSecondary/80 p-3 font-bold'>
                                INICIAR SESIÓN
                            </Button>
                        </Link>
                    </div>
                </ul>
            </div>

        </NavigationMenu>
            {/*NavBar for smaller than medium display.*/}
        <div className={`absolute right-0 mt-2 w-48 bg-dubraSecondary rounded-lg shadow-lg md:sr-only ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} transition-all duration-300`}>
            <NavigationMenu>
                <ul className="py-2 mx-5">
                    <NavBarButton text={'Inicio'} link={'/'}/>
                    <NavBarButton text={'Sobre Nosotros'} link={'/nosotros'}/>
                    <NavBarButton text={'Iniciar Sesión'} link={'/login'}/>
                </ul>
            </NavigationMenu>
        </div>
    </div>
  )
}

export default NavBar