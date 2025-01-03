import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className='bg-bg1'>
      <div className='bg-grid-small-white/[0.2] relative '>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#1c42a1] bg-opacity-10 backdrop-blur-lg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
      </div>
    </main>
  )
}

export default RootLayout