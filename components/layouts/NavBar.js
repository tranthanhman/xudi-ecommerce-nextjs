import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-white'>
            <div className='container flex justify-between items-center'>
                <ul className='flex justify-between items-center w-full'>
                    {navs.map((nav, i) => (
                        <Link href={nav.link} key={i}>
                            <a>
                                <li key={i} className='px-2 py-3 hover:bg-gray-100 duration-150 w-full'>{nav.name}</li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

const navs = [
    {
        name: 'Điện gia dụng',
        link: '/dien-gia-dung'
    },
    {
        name: 'Đồ tiêu dùng',
        link: '/do-tieu-dung'
    },
    {
        name: 'Workstation',
        link: '/pc-laptop'
    },
    {
        name: 'linh kiện',
        link: '/linh-kien'
    },
    {
        name: 'Camera các loại',
        link: '/camera'
    },
    {
        name: 'Nhà cửa - đời sống',
        link: '/nha-cua'
    },
    {
        name: 'Đồ chơi mẹ và bé',
        link: '/do-choi'
    },
    {
        name: 'Máy chơi game',
        link: '/may-choi'
    },
    {
        name: 'Máy chơi game',
        link: '/may-choi'
    },
    {
        name: 'Máy chơi game',
        link: '/may-choi'
    },
    {
        name: 'Máy chơi game',
        link: '/may-choi'
    },

]