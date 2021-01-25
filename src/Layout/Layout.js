import React from 'react'
import './Layout.css';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
