import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default WebLayout