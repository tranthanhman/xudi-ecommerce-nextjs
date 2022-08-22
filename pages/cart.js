import Image from 'next/image'
import React from 'react'
import { BiTrash,BiMinus,BiPlus } from 'react-icons/bi'
import item from '../public/static/images/products/1.jpg'
import { formatCurrency } from '../lib/utility'

const Cart = () => {
  return (
    <div className='container my-10'>
      <h1>Giỏ hàng</h1>
      <div className='grid grid-cols-[auto_310px] gap-10 mt-5 w-full'>
        <div className=' w-full'>
          <div className='flex-1'>
            <div>
              <div className='grid grid-cols-[340px_150px_130px_130px_auto] sticky mb-3 top-5 z-50 items-center bg-white py-2 px-4 rounded-sm'>
                <label className='flex gap-1'>
                  <input type="checkbox" />
                  <span>Tất cả (1 sản phẩm)</span>
                </label>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
                <span>
                  <BiTrash size={24} className='text-gray-500' />
                </span>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='h-auto overflow-auto'>
              <div className='grid grid-cols-[340px_150px_130px_130px_auto] mb-3 top-5 z-50 items-center bg-white py-2 px-4 rounded-sm '>
                <label className='flex gap-1'>
                  <input type="checkbox" />
                  <div className='flex gap-1 items-start px-3'>
                    <span className='rounded w-full min-w-[80px] min-h-[80px] h-full'>
                      <Image
                        src={item}
                        alt="Picture of the author"
                        className='h-full'
                        width={80}
                        height={80}
                        objectFit="contain"
                      />
                    </span>
                    <span className='line-clamp-2 overflow-clip'>Quai Vải Đựng Ly,  Bình GIữ Nhiệt từ 300ml đến 750ml, Chất liệu 100% Cotton Thân Thiện Môi Trường, Tặng kèm một Móc Khóa tiện lợi, Thay thế túi Nilong dùng một lần, Eco-Friendly - Noel Gấu</span>
                  </div>
                </label>
                <span>{formatCurrency(49000)}</span>
                <span>
                  <div className='inline-flex border whitespace-nowrap w-22 rounded'>
                    <span className='px-1'><BiMinus size={18} /></span>
                    <input type="tel" value="1" min={1} readOnly className='w-8 m-0 outline-none border-x text-center px-1' />
                    <span className='px-1'><BiPlus size={18} /></span>
                  </div>
                </span>
                <span className='text-primary'>{formatCurrency(49000)}</span>
                <span>
                  <BiTrash size={24} className='text-gray-500 hover:text-primary cursor-pointer transition' />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full'>
          <div className='flex-1'>
            <div className='h-auto overflow-auto'>
                <div className='flex flex-col gap-3 w-full'>
                  <div className='rounded bg-white w-full px-4 py-5'>
                    <h3>Mã khuyến mãi</h3>
                    <span className='flex gap-1 items-center'>
                      <input type="text" placeholder="Nhập mã khuyến mãi" className='w-2/3 p-2 border-primary border rounded'/> 
                      <button className="btn btn-primary" type="submit">Xác nhận</button>
                    </span>
                  </div>
                  <div className='rounded bg-white w-full '>
                    <div className='m-0 border-b px-4 py-5 pb-5 space-y-3'>
                      <span className='flex justify-between items-center'>
                        <span>Tạm tính</span>
                        <span className='font-medium'>0đ</span>
                      </span>
                      <span className='flex justify-between items-center'>
                        <span>Giảm giá</span>
                        <span className='font-medium'>0đ</span>
                      </span>
                    </div>
                    <div className='w-full px-4 py-5'>
                    <span className='flex justify-between items-center'>
                        <span>Tổng tiền</span>
                        <span className='font-medium'>0đ</span>
                      </span>
                    </div>
                  </div>
                  <div className='w-full'>
                      <button className="btn btn-primary w-full" type="submit">Xác nhận</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart