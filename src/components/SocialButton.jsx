import React from 'react'
import { Button } from './ui/button'
import { SocialIcon } from 'react-social-icons'

const SocialButton = ({alt, buttonColor, url}) => {
  return (
    <Button alt={alt} className='rounded-full w-fit h-fit p-0'>
        <SocialIcon className={`${buttonColor} rounded-full hover:scale-105`} bgColor='none' url={url} network={alt} target="_blank"/>
    </Button>
  )
}

export default SocialButton