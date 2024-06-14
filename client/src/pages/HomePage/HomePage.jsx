import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SiliderComponent from '../../components/SiliderComponent/SiliderComponent'
import Slider3 from '../../assets/images/Slider3.webp'
import Slider4 from '../../assets/images/Slider4.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
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
      <div className='mt-[20px] flex items-center gap-[20px]'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        
      </div>
      <NavBarComponent/>
      </div>
    </>
  )
}

export default HomePage
