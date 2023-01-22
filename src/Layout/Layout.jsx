import React from 'react'
import Spinner from '../components/Spinner/Spinner'

const Layout = ({children}) => {
  return (
    <> 
    <Spinner/>   
    {children}    
    </>
  )
}

export default Layout