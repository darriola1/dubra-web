import React, { useEffect, useRef, useState } from 'react'
import { NavigationMenu,
        NavigationMenuList,
        NavigationMenuItem,
 } from '../ui/navigation-menu'
import { AlignJustify, Home, User } from 'lucide-react'
import NavBarButton from './NavBarButton'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import ResponsiveNavBar from './ResponsiveNavBar';


const NavBar = ({Logo}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div>
        <NavigationMenu className='justify-between min-w-full bg-dubraPrimary py-2'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to='/'>
                        <img src={Logo} alt="Dubra Transporte y Logística Logo" className='w-70 h-22 pe-10 object-contain' />
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
        <ResponsiveNavBar
            fields={[
            { text: 'INICIAR SESIÓN', link: '/login', icon:<User/> },
            { text: 'INICIO', link: '/', icon:<Home/> }
            ]}
            className={` right-0 ${isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible'} `}
            menuRef={menuRef}
            Logo = {Logo}
        />
    </div>
  )
}

export default NavBar