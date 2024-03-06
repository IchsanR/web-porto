import React from 'react'
import Navs from '../components/Navbar'

const Root = ({children}) => {
  return (
    <div className='bg-[#98E4D9] h-screen'>
      <Navs />
      {children}
    </div>
  )
}

export default Root