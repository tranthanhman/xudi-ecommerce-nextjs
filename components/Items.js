import React from 'react'
import item from '../public/assets/images/products/1.jpg'
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
const Items = (props) => {
    return (
        <div key={props} className='flex flex-1 flex-col w-full px-3 hover:shadow-lg py-3'>
            <Image
                src={item}
                alt="Picture of the author"
                className='rounded-3xl'
                width={200}
                height={180}
                objectFit="cover"
            />
            <div>{props.name}</div>
            <ul className='flex items-center gap-1'>
            {Array(props.rate).fill(0).map((_, i) => (
                <li key={i}><AiFillStar  size={15} className='text-yellow-400' /></li>
            ))}
            </ul>
            <div className='text-red-600 font-bold'>{props.price} đ </div>
            
        </div>
    )
}

export default Items