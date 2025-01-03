'use client'
import { sidebarLinks } from '@/constants'
import { SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
  const pathname = usePathname();
  return (
    <section className='sticky left-0 top-14 flex w-fit flex-col h-[85vh]  justify-between sidebar_left  text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {
          sidebarLinks.map((link)=>{
            const isActive = (pathname === link.route) || (pathname.startsWith(`${link.route}/`));

            return(
              <Link href={link.route} key={link.label} className={`flex gap-4 items-center p-4 rounded-lg justify-start ${isActive && 'btn_primary_class text-black'} hover:scale-105 transition-transform duration-100 ease-in-out`}>
              <link.imgURL/>
              <p className="text-lg font-normal max-lg:hidden">
                {link.label}
              </p>
              
            </Link>

            )
          })
        }
      </div>
    </section>
  )
}

export default Sidebar