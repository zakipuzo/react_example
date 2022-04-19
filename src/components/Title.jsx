import React, { useEffect } from 'react'

export default function Title({level,children}) {
 
    useEffect(() => {
   
    }, [])
    
  return (
       level === 1 ? <h1 className='text-2xl'>{children}</h1> 
       :
       level === 2 ? <h2 className='text-xl'>{children}</h2> 
       :
       level === 3 ? <h3 className='text-lg'>{children}</h3> 
       :
       ""
  )
}
