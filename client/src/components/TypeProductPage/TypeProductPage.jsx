import React from 'react'
import NavBarComponent from '../NavBarComponent/NavBarComponent'
import CardComponent from '../CardComponent/CardComponent'

import { Pagination }
  from
  "antd"
  ;
import '../../css/index.css'
const TypeProductPage = () => {
  const onChange = () => {}
  return (
    <div className=''>
      <div className=' flex bg-[#efefef] px-10 py-2  '>

        <div class="w-44 max-h-screen sticky overflow-y-scroll top-4 bg-transparent flex flex-col text-gray-700 text-sm leading-1.875 rounded-l-lg overflow-x-hidden scrollbar">
          <NavBarComponent class="px-10 py-10" />
          <NavBarComponent class="px-10 py-10" />
          <NavBarComponent class="px-10 py-10" />
          <NavBarComponent class="px-10 py-10" />
        </div>
        <div className='grid grid-cols-10 ml-8 overflow-x-hidden scrollbar  '>

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />

          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />
          <CardComponent className='grid-start-1 ' />


        </div>


      </div>
     <div className=' ml-[700px]'>
     <Pagination defaultCurrent={6} total={500} onChange={onChange} />
     </div>
    </div>
  )
}

export default TypeProductPage
