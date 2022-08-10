import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'

export default function DefaultLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
