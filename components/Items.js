import React from 'react'
import item from '../public/static/images/products/1.jpg'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
const Items = (props) => {
    return (
        <div className='hover:shadow-lg max-w-[200px] max-h-[272px] overflow-hidden bg-white rounded-md hover:border-primary transition'>
            <div key={props} className='flex flex-1 flex-col w-full '>
            <Image
                src={item}
                alt="Picture of the author"
                className='rounded-3xl'
                width={188}
                height={188}
                objectFit="contain"
            />
            <div className='p-2'>
                <div className='pb-1 overflow-clip '>{props.name}</div>
                <div className='flex justify-between items-center'>
                    <span className='text-red-600 font-bold '>{props.price} đ </span>
                    <span>{props.price} đ </span>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Items