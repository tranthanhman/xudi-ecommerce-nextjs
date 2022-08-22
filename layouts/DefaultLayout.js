import React, { useState } from 'react'
import Breadscrumb from '../components/Breadscrumb'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import Notify from '../components/Notify';

export default function DefaultLayout({ children }) {
  const [crumbs , setCrumbs] = useState([])
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <NavBar />
        <Notify  />
        <main className='container'>
          <Breadscrumb crumb={crumbs} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
