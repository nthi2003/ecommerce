import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SiliderComponent from '../../components/SiliderComponent/SiliderComponent'
import Slider3 from '../../assets/images/Slider3.webp'
import Slider4 from '../../assets/images/Slider4.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtomComponent from '../../components/ButtomComponent/ButtomComponent'

const HomePage = () => {
  const arr = [ 'Laptop', 'TV' , 'Máy giặt','Quần áo' ]
  return (
    <>
     <div className='px-[120px]'>
    <div className='flex items-center gap-[24px] justify-start border-b-[1px] h-[44px]'>
    {arr.map((item , index) => {
        return (
          <TypeProduct name={item} key={index} />

        )
    })}
    </div>
      
    </div>  
    <div id="container"  className='bg-[#efefef] px-[120px] h-full' >
      <SiliderComponent arrImg={ [Slider3 , Slider4] }/>
      <div className='mt-[20px] grid grid-cols-10  '>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        
      </div>
      <ButtomComponent value='Xem Thêm' buttomStyle='border border-blue-400 border-solid  bg-white px-[85px] hover:bg-blue-500  ' spanStyle='text-sm text-blue-500 hover:text-white  ' type="outline" />
      </div>
    </>
  )
}

export default HomePage
