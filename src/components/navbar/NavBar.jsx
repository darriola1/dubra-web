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
import DubraLogo from '../DubraLogo';


const NavBar = ({fields, extraFields, extraButton, menuRef, isOpen, Logo}) => {


  return (
<div>
        <NavigationMenu className='justify-between min-w-full bg-dubraPrimary py-2'>

            {Logo && 
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to='/'>
                        <DubraLogo className={'w-70 h-22 pe-10 object-contain'}/>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>}

            {/*NavBar for medium display and bigger.*/}
            <div className='flex items-center w-fit h-fit'> 

                {extraButton}

                <ul >
                    <div className='max-md:sr-only md:flex md:flex-row gap-5 items-center'>
                        {fields.map(({link, text, icon}) => (
                            <NavBarButton text={text} link={link} icon={icon && icon}/>
                        ))}
                        {extraFields && extraFields.map(({link, text, icon}) => (
                            <Link to={link}>
                            <Button className='text-base bg-dubraSecondary hover:bg-dubraSecondary/80 p-3 font-bold'>
                                {icon && icon}
                                {text}
                            </Button>
                        </Link>
                        ))}
                    </div>
                </ul>
            </div>

        </NavigationMenu>
            {/*NavBar for smaller than medium display.*/}
        <ResponsiveNavBar
            fields={
                fields.concat(extraFields)
            }
            className={` right-0 ${isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible'} `}
            menuRef={menuRef}
            Logo={true}
        />
    </div>
  )
}

export default NavBar