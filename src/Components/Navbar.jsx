import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-[#212731] h-32 md:h-16 flex items-center'>
        <div className='max-w-5xl m-auto grid grid-rows-2 gap-4 md:gap-0 md:grid-rows-1 md:grid-cols-2'>
            <div className='flex flex-row '>
                <div className='bg-white flex flex-row rounded'>
                <div className='flex items-center'><MagnifyingGlassIcon height={24} width={24} color='#626E79'/></div>
                <input type="text" className='w-56 h-9 bg-transparent pl-2' />
                </div>
            </div>
            <div className='flex flex-row gap-4 text-sm items-center text-[#D1D6DA]'>
                <div>Categories</div>
                <div>Website Builders</div>
                <div>Today's deals</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar