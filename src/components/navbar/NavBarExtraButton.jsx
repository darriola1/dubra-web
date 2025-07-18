import { NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const NavBarExtraButton = ({icon, text, onClick, link}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="flex-row flex gap-1 items-center">
            <Link
            to={link}
            className={`text-xl`}
            onClick={() => window.scrollTo({ top: 0 })}
            >
                <Button className='text-base button-dubraSecondary p-3 font-bold group duration-200 transition-all' onClick={onClick}>
                    <p className='group-hover:scale-105 duration-200 transition-all'>{icon}
                    {text}</p>
                </Button>
            </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default NavBarExtraButton