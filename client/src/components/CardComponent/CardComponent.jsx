import React from 'react'

const CardComponent = () => {
    return (
        <div className='w-[151px] bg-white border-gray-300 border-solid border h-[320px]'>
            <div>

                <div className='h-full w-full'>
                    <a href="" className='flex relative cursor-pointer h-full overflow-hidden '>
                        <span className='w-100% flex border border-b-gray-300 border-solid gap-[4px] relative '>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/53/47/8a/4e962077e4fa7045348a68d60a739701.png.webp" alt="" />
                        </span>
                        <div className='absolute'>
                            <img src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" className='w-20 mt-1' />
                        </div>
                    </a>
                </div>
                <div className='flex gap-4 h-[120px] '>
                    <div className='gap-4 m-3 h-full'>
                        <div className=''>
                            <img src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" className='w-20 mt-1' />
                        </div>
                        <h3 className='flex flex-col overflow-hidden text-primary-dark text-sm font-normal leading-6 m-0 '>
                            Chuột không dây bluetooth
                        </h3>
                        <div className='flex'>
                        <div className='text-[12px]'>4.8</div>
                            <div className='w-[22px] h-[22px]'>
                               
                                <svg

                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <div className='text-[12px]'>| 10 Đã bán </div>
                        </div>
                        <div className='text-left text-base leading-6 font-semibold text-primary-dark m-0 items-center'>
                            <div className='text-red-500'>
                                582.000
                                <sup>đ</sup>
                            </div>
                            <div className='gap-[4px] flex h-[18px] '>
                                <div className='flex p-0 md:p-4 items-start rounded-lg bg-gray-100 text-gray-700 md:text-base font-medium leading-150 relative'>

                                </div>
                                <div className='absolute text-xs px-1 py-2' >-17%</div>
                                <div className=''>
                                    <div className='text-[10px] px-1 py-2 text-[#c2c3c3] line-through'>
                                        699.000
                                        <sup>đ</sup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardComponent