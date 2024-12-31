import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Sidebar from './Sidebar'
import SideContact from './SideContact'


const Navbar = () => {
    return (
        <div className='sticky top-0 shadow-md  hrefp-0 z-50'>
            <div className='px-4 md:px-12 lg:px-24  bg-white h-16 flex items-center justify-between'>
                <Link href={'/'}>
                <div className='flex items-center justify-center'>
                    <Image width={100} height={100} className='w-44' unoptimized src={'/logo.png'} alt='logo' />
                </div>
                </Link>
                <div>
                    <ul className='flex gap-2'>
                        <Link href={'/'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer'>Home</li>
                        </Link>
                        <Link href={'/about'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >About</li>
                        </Link>
                        <Link href={'/services'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Services</li>
                        </Link>
                        <Link href={'/courses'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Courses</li>
                        </Link>
                        <Link href={'/internship'}>
                            <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Internship</li>
                        </Link>
                        <Link href={'/contact'}>
                        <li className='hidden md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    {/* <Button className='bg-primary text-white'>Get Started</Button>     */}
                    <SideContact title={'Get Started'}/>
                </div>
                <div className='md:hidden'>
                    <Sidebar />
                </div>
            </div>

        </div>
    )
}

export default Navbar