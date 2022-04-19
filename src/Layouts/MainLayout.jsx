import React from 'react'
import Navbar from '../components/Navbar'

export default function MainLayout({children}) {
  return (
    <div className='container mx-auto py-[40px]'>
        <Navbar></Navbar>
        {children} 
    <div>
        copyright
    </div>
    </div>
  )
}
