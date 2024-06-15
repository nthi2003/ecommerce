import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const Header = () => {
  return (
    <div className='grid grid-cols-6 gap-4 py-[10px] px-[120px] bg-slate-100 flex-nowrap'>
      <div className='col-start-1 col-end-2 text-[18px] text-slate-900 items-center mt-[15px]'>OKINAWA</div>
      <div className='col-start-2 col-end-5 w-full flex relative border border-solid border-1 border-[##dddde3] rounded-[8px] items-center'>
        <CiSearch className='w-[20px] h-[24px] bg-transparent ml-[18px]' />
        <InputComponent placeholder='Tìm kiếm sản phẩm ...'/>
        <ButtonComponent TextButtom = 'Tìm kiếm' />
      </div>
      <div className='col-start-5 col-end-6 flex items-center gap-[10px]'>
      <CiUser className='text-[30px]' />
       <div className=''>
        <span className='whitespace-nowrap'>Đăng nhập/Đăng Kí</span>
        <div className='flex'>
          <span>Tài khoản</span>
          <FaChevronDown className='mt-1 ml-1' />
        </div>
       </div>
      </div>
      <div className='mt-2 flex'>
      <MdOutlineShoppingCart className='text-[30px] ' />
      <span>Giỏ hàng</span>
      </div>
    </div>
  )
}

export default Header
