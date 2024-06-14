import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonSearch = ({placeholder}) => {
  return (
    <div>
         <div className=''>
          
        <InputComponent placeholder={placeholder} />
        <ButtonComponent/>
        
    </div>
    </div>
  )
}

export default ButtonSearch
