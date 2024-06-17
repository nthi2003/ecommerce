import React from 'react'
import InputForm from '../InputForm/InputForm'
import ButtomComponent from '../ButtomComponent/ButtomComponent'

const SignInPage = () => {
  return (
   <div className='flex items-center justify-center bg-[#ccc] h-screen'>
     <div className='lg:w-[800px] lg:h-[445px] bg-white flex'>
      <div className='lg:w-[500px] p-20'>
        <h1>Xin Chào</h1>
        <p>Đăng nhập và tạo tài khoản</p>
        <div className=' relative mb-[15px] z-10'>
        
       
        <InputForm placeholder='abc@email.com' inputClass=' w-full py-2.5  text-base text-gray-900 outline-none'/>
        <div className=' border-t-4 border-black-500'></div>
        <InputForm  placeholder='Mật khẩu' inputClass=' w-full py-2.5  text-base text-gray-900 outline-none'/>
        <div className=' border-t-4 border-black-500'></div>
        </div>
        <div className='w-[120px] h-[120px]'><ButtomComponent buttomStyle='mt-26 outline-none rounded-lg bg-red-500 p-[10px] w-full text-white border-none text-20 cursor-pointer' value='Đăng nhập' /></div>
        <p className='text-blue-500'>Quên tài khoản?</p>
        <p>Bạn chưa có tài khoản <span className='text-blue-500'>Tạo Tài khoản</span> </p>
      </div>
      <div className='bg-blue-200 flex flex-col items-center p-10   '>
        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" className='h-[230px] w-[230px]' alt="" />
        <h4 className=''>Mua săm tại OKI</h4>
        <h4>Siêu ưu đãi mỗi ngày</h4>
      </div>
    </div>
   </div>
  )
}

export default SignInPage
