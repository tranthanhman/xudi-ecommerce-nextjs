

import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import {BiShoppingBag} from 'react-icons/bi'
const Header = () => {
    return (
        <header className='bg-blue-600 text-white z-50'>
            <div className='container w-4/5 mx-auto'>
                <div className='relative flex justify-between items-center gap-10 pt-5 pb-3'>
                    {/* logo here */}
                    <div className='flex flex-col md:flex-row flex-1 items-center'>
                        <div className='flex-shrink-0 md:basis-[190px] text-3xl h-10'>Xudi</div>
                        <div className='flex-1'>
                            <form className='flex relative shadow w-full'>
                                <input type="text" placeholder="Search" className="px-3 rounded-tl-sm rounded-bl-sm flex-1 outline-none" />
                                <button type='submit' className='flex gap-1 items-center bg-blue-900 h-10 cursor-pointer border-0 rounded-tr-md rounded-br-md px-4'>
                                    <HiOutlineSearch size={20} />
                                    <span className='hidden sm:block'>Tìm kiếm</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='flex gap-10 items-center justify-end'>
                        <div className='flex items-center gap-1'>
                            <FaRegUser size={30} />
                            <div>
                                <span className='hidden sm:block'>Đăng nhập / Đăng kí</span>
                                <div className='gap-1 hidden sm:flex'>
                                    <span>Tài khoản</span>
                                    <BiChevronDown size={15} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-end'>
                            <BiShoppingBag size={40} />
                            <span className='hidden sm:block'>Giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header