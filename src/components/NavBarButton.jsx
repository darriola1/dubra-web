import React from "react"
import { NavigationMenuItem,
   NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"


const NavBarButton = ({text, link}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to={link} className="text-xl relative cursor-pointer after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-[#e9f2ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
          {text}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default NavBarButton