import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import './layout.css'
interface Childern {
  children?: React.FC,
}
const Layout: React.FC<Childern> = ({children}) => {
  return (
    <>
    <Header/>
    <div className='wrapper'>
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout