import React from 'react'

const InputComponent = ({placeholder}) => {
    console.log(placeholder)
  return (
    <div className=' w-full flex relative '>
        <input type="text" className='border-0 px-8 font-normal text-base leading-6 rounded-lg outline-none flex-1 bg-transparent' placeholder={placeholder} />
    </div>
  )
}

export default InputComponent
