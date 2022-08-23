

import React, { useContext, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState'
import { MenuIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'
import  Cookie  from 'js-cookie';



const Header = () => {
    const router = useRouter()
    const [state, dispatch] = useContext(DataContext)
    const { auth } = state

    console.log('auth', auth)
    console.log('tyoeof', typeof (auth))

    const [dropdown,setDropDown] = useState(false)

    const handleLogout = () => {
        Cookie.remove('refresh_token',{patch:'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({type:'AUTH',payload:{}})
        dispatch({type:'NOTIFY',payload:{msg:"Logged out! "}})
    }

    const loggedRouter = () => {
        return (
            <li className='list-none relative w-full'>
                <div className='cursor-pointer flex gap-1 items-center' onClick={()=>{setDropDown(!dropdown)}}>
                    <img src={auth.user.avatar} className='rounded-full w-10 h-10' />
                    <span>{auth.user.name} </span>
                    <ChevronDownIcon className='w-5 h-5' />
                </div>
                <div className={`${dropdown ? 'absolute top-12 w-full bg-white shadow  text-black transition' : 'hidden'}`}>
                    <ul className='flex gap-1 flex-col'>
                        <li className='hover:bg-primary opacity-80 px-2 py-3 hover:text-white'>Trang cá nhân</li>
                        <li className='hover:bg-primary opacity-80 px-2 py-3 hover:text-white' onClick={handleLogout}>Thoát</li>
                    </ul>
                </div>
            </li>
        )
    }

    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='flex container justify-center md:justify-between items-center'>
                <div className='flex justify-start items-center'>
                    {/* logo */}
                    <Link href={'/'}>
                        <a>
                            <span className='text-4xl font-bold'>Xudi</span>
                        </a>
                    </Link>
                    {/* serchbar */}


                    <div className='md:hidden absolute left-5'>
                        <MenuIcon className='w-10 h-10' />
                    </div>
                </div>
                <div className='hidden md:block w-full max-w-xl relative'>
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
                <div className='md:flex gap-10 items-center justify-end hidden'>
                    <Link href={'cart'} >
                        <a>
                            <div className='flex flex-col items-center relative'>
                                <BiShoppingBag size={24} />
                                <span className='hidden sm:block whitespace-nowrap'>Giỏ hàng</span>
                                <span className='absolute top-0 right-2 rounded-full w-5 h-5 bg-primary text-white text-xs flex justify-center items-center'>8</span>
                            </div>
                        </a>
                    </Link>
                    {
                        Object.keys(auth)?.length == 0 ? (
                            <Link href={'login'} >
                                <a>
                                    <div className='flex flex-col items-center relative'>
                                        <FaRegUser size={24} />
                                        <span className='hidden sm:block whitespace-nowrap'>Tài khoản</span>
                                    </div>
                                </a>
                            </Link>
                        ) : loggedRouter()
                    }
                </div>
            </div>
        </header>
    )
}

export default Header