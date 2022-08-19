import Image from 'next/image'
import React from 'react'
import mini from '../public/static/images/mini-banner/1.png'

  
const MiniBanner = ({props}) => {
    return (
        <div key={props} className='w-full'>
            <Image
                src={mini}
                alt="Picture of the author"
                className='rounded-3xl'
                width={500}
                height={150}
                objectFit="cover"
            />
        </div>
    )
}

export default MiniBanner