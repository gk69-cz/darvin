import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
    <div>{children}</div>
    </ClerkProvider>
    
  )
}

export default layout