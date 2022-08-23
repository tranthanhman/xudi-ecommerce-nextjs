import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'
import { postData } from '../utils/fetchData'

const Login = () => {
    const initialState = { phone: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { phone, password } = userData

    const router = useRouter()

    const [state, dispatch] = useContext(DataContext)
    const { auth } = state


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })

        dispatch({type: 'NOTIFY',payload: {}})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const res = await postData('/auth/login', userData)
        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        console.log(res)

        dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

        dispatch({
            type: 'AUTH', payload: {
                token: res.access_token,
                user: res.user
            }
        })

        Cookie.set('refresh_token', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem('fisrtLogin', true)
    }


    useEffect(()=>{
        if(Object.keys(auth)?.length !== 0) router.push('/')
    },[auth])

    return (
        <div>
            <Head>
                <title>Đăng nhập</title>
            </Head>
            <div className='container my-20'>
                <div className='flex flex-col flex-1 justify-center items-center w-full '>
                    <div className='max-w-md w-full'>
                        <h1>Đăng Nhập</h1>
                        <form onSubmit={handleSubmit} method="POST" className='py-3 space-y-3'>
                            <input name="phone" type="text" placeholder="Số điện thoại" className='p-2 border rounded w-full' onChange={handleChangeInput} />
                            <input name="password" type="password" placeholder="Mật khẩu" className='p-2 border rounded w-full' onChange={handleChangeInput} />
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