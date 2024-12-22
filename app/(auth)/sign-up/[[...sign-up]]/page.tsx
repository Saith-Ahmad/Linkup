import { SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
   <div className="flex justify-center items-center min-h-screen py-10"> 
        <div className="shadow-blue-300 shadow-lg">
        <SignUp/>
        </div>
       </div>
  )
}

export default page