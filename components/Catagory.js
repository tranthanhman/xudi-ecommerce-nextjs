import React from 'react'

const Catagory = () => {
  return (
    <div className='px-4 bg-white rounded-md my-4'>
        <div className='text-2xl py-2.5'>Danh mục nổi bậc</div>
        <div className='grid grid-cols-10 gap-y-3 gap-x-2 pb-2'>
            {Array(20).fill(0).map((_, i) => (
                <div key={i} className=''>
                    <div className='w-auto h-28 bg-primary'></div>
                    <div className='py-2 text-center'>Do gia dung</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Catagory