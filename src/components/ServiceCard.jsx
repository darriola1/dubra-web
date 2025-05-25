import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import '../styles.css'

const ServiceCard = ({title, description, content, icon, background, button }) => {
  return (
    //The 'background' tag allows the usage of different background colors.
    //The 'description' tag it's a subtitle below the 'title'.
    //The following tags are optional: 'button', 'description', 'background'.
    <Card className={`w-[30vh] ${background} col-span-1 border-0 shadow-none`}>
        <CardHeader className="flex items-center gap-3">
          {icon && <div>{icon}</div>}
          <div>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-start mt-[-1rem] text-lg">
            <p>{content}</p>
            {button}
        </CardContent>
    </Card>
  )
}

export default ServiceCard