

import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='container flex justify-between items-center'>
                {/* logo */}
                <Link href={'/'}>
                    <a>
                        <span className='text-4xl font-bold'>Xudi</span>
                    </a>
                </Link>
                {/* serchbar */}
                <div className='w-full max-w-xl relative'>
                    <form className='flex relative shadow w-full'>
                        <span className='absolute left-4 top-2 text-xl text-gray-400'>
                            <HiOutlineSearch size={20} />
                        </span>
                        <input type="text" className="w-full border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md focus:outline-none" placeholder='search' />
                        <button type='submit' className='flex items-center bg-primary border border-primary text-white px-8  rounded-r-md hover:bg-transparent hover:text-primary transition'>
                            <HiOutlineSearch size={20} />
                        </button>
                    </form>
                </div>
                {/* icon */}
                <div className='flex gap-10 items-center justify-end'>
                    <Link href={'cart'} >
                        <a>
                            <div className='flex flex-col items-center relative'>
                                <BiShoppingBag size={24} />
                                <span className='hidden sm:block'>Giỏ hàng</span>
                                <span className='absolute top-0 right-2 rounded-full w-5 h-5 bg-primary text-white text-xs flex justify-center items-center'>8</span>
                            </div>
                        </a>
                    </Link>
                    <Link href={'login'} >
                        <a>
                            <div className='flex flex-col items-center relative'>
                                <FaRegUser size={24} />
                                <span className='hidden sm:block'>Tài khoản</span>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header