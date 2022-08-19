import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
