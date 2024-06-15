import React from 'react'
import { CiSearch } from 'react-icons/ci'

const ButtonComponent = ({TextButtom}) => {
  return (
    <div className=' '>
     
       
        <button className="flex justify-center items-center bg-transparent cursor-pointer w-24 h-10 p-1 rounded-r-2xl text-blue-500 font-normal text-sm leading-6 outline-none relative">
        <span className="before:absolute before:border-l before:border-gray-300 before:h-[24px] before:top-[8px] before:left-0">{TextButtom}</span>
              
        </button>
    </div>
  )
}

export default ButtonComponent
