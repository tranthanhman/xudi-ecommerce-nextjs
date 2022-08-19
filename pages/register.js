import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Register = () => {
  const initialState = {
    name: '',
    phone: '',
    email:'',
    password: '',
    cf_password: '',
  }
  const [userData,setUserData] = useState(initialState)

  const handleChangeInput = e => {
    const {name,value} = e.target    
    setUserData({...userData,[name]: value })
  }

  return (
    <div>
      <Head>
        <title>Đăng ký</title>
      </Head>
      <div className='container my-20'>
        <div className='flex flex-col flex-1 justify-center items-center w-full '>
          <div className='max-w-md w-full'>
            <h1>Đăng ký</h1>
            <form className='py-3 space-y-3' method="POST">
              <input name="name" type="text" placeholder="Họ va ten" className='p-2 border rounded w-full' onChange={handleChangeInput}  />
              <input name="email" type="email" placeholder="Địa chỉ email" className='p-2 border rounded w-full' onChange={handleChangeInput}  />
              <input name="phone" type="phone" placeholder="Số điện thoại" className='p-2 border rounded w-full' onChange={handleChangeInput}  />
              <input name="password" type="password" placeholder="Mật khẩu" className='p-2 border rounded w-full' onChange={handleChangeInput} />
              <input name="cf_password" type="password" placeholder="Xác nhận mật khẩu" className='p-2 border rounded w-full' onChange={handleChangeInput} />
              <button type="submit" className='btn btn-primary w-full'>Đăng ký</button>
            </form>
            <div>
              <p>Bạn đã có tài khoản? <Link href='/login'>
                <a className='text-primary'>Đăng nhập</a></Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register