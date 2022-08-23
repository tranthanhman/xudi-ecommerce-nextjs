import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { valid } from '../utils/valid'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import { useRouter } from 'next/router';

const Register = () => {
  const initialState = { name: '', phone: '', email: '', password: '', cf_password: '', }
  const [userData, setUserData] = useState(initialState)
  const { name, phone, email, password, cf_password } = userData

  const [state, dispatch] = useContext(DataContext)
  const auth = { state }

  const router = useRouter()

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })

    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, phone, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('/auth/register', userData)
    console.log(res)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  useEffect(() => {
    if (Object.keys(auth)?.length !== 0) router.push('/')
  }, [auth])

  return (
    <div>
      <Head>
        <title>Đăng ký</title>
      </Head>
      <div className='container my-20'>
        <div className='flex flex-col flex-1 justify-center items-center w-full '>
          <div className='max-w-md w-full'>
            <h1>Đăng ký</h1>
            <form onSubmit={handleSubmit} className='py-3 space-y-3' method="POST">
              <input name="name" type="text" placeholder="Họ va ten" className='p-2 border rounded w-full' onChange={handleChangeInput} />
              <input name="email" type="email" placeholder="Địa chỉ email" className='p-2 border rounded w-full' onChange={handleChangeInput} />
              <input name="phone" type="phone" placeholder="Số điện thoại" required className='p-2 border rounded w-full' onChange={handleChangeInput} />
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