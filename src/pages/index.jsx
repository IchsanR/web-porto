import React from 'react'
import Navs from '../components/Navbar'
import Footer from '../components/Footer'

const Root = ({children}) => {
  return (
    <div className='bg-[#98E4D9]'>
      <Navs />
      {children}
      <Footer />
    </div>
  )
}

export default Root