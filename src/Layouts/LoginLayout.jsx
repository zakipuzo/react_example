 
import React from 'react'
import Navbar from '../components/Navbar'

export default function LoginLayout({children}) {
  return (
    <div className='container mx-auto py-[40px]'>
    
        {children} 
    <div>
        copyright
    </div>
    </div>
  )
}
