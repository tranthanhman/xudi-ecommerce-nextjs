import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div>
            <Head>
                <title>Đăng nhập</title>
            </Head>
            <div className='container my-20'>
                <div className='flex flex-col flex-1 justify-center items-center w-full '>
                    <div className='max-w-md w-full'>
                        <h1>Đăng Nhập</h1>
                        <form method="POST" className='py-3 space-y-3'>
                            <input name="phone" type="text" placeholder="Số điện thoại" className='p-2 border rounded w-full' />
                            <input name="password" type="password" placeholder="Mật khẩu" className='p-2 border rounded w-full' />
                            <button type="submit" className='btn btn-primary w-full'>Đăng nhập</button>
                        </form>
                        <div>
                        <p>Bạn chưa có tài khoản? <Link href='/register'>
                            <a className='text-primary'>Đăng ký</a></Link> </p>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Login