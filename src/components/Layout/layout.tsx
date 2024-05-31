import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'

interface Childern {
  children?: React.FC,
}
const Layout: React.FC<Childern> = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout