import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='h-full pt-36'>
        {children}
    </main>
  )
}

export default layout