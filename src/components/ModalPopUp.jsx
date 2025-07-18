import { X } from 'lucide-react';
import React from 'react'

const ModalPopUp = ({isOpen, children, onClose}) => {
  if (!isOpen) return null;
  
  return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-dubraWhite p-6 px-8 rounded-2xl shadow-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
          type='button'
        >
          <X className='transition duration-100 ease-in hover:text-red-500'/>
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalPopUp