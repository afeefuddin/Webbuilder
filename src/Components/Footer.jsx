import { ChevronDownIcon } from '@radix-ui/react-icons'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#212731] pb-24 pt-12 mt-2 text-[#B6BDC4] p-4'>
        <div className='max-w-5xl grid grid-cols-3 gap-2 m-auto'>
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-lg text-white'>Categories</div>
                <div className=''>Web builder </div>
                <div>Hosting</div>
                <div>Data Center </div>
                <div>Robot Automation</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-semibold text-lg text-white'>Contact</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
                <div>Terms of Services</div>
                <div>Categories</div>
                <div>About</div>
            </div>
            <div className='pl-4 pt-8'>
                <div className='flex flex-row items-center gap-2'>
                    <span>United States</span>
                    <ChevronDownIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer