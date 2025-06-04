import React from 'react'
import NavBarButton from './NavBarButton'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'

const ResponsiveNavBar = ({menuRef, fields, className, Logo}) => {
  return (
    <div className={`fixed top-0 w-full md:sr-only z-50 h-dvh transition-all duration-300 flex justify-end ${className}`}>
                <div ref={menuRef}
                 className='w-2/3 max-w-xs bg-dubraSecondary' >
                    <NavigationMenu>
                        <ul className="py-5 px-5 flex flex-col gap-5">
                          <img src={Logo} alt="Dubra Transporte y Logística Logo" className='w-70 h-22 object-contain' />
                          {fields.map(({icon, link, text}) => (
                            <NavBarButton icon={icon && icon} link={link} text={text}/>
                          ))}
                        </ul>
                    </NavigationMenu>
                </div>
            </div>
  )
}

export default ResponsiveNavBar