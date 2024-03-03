import React from 'react'
import Image from '../assets/cardImage.png'
import Tag from './Tag'
import Button from './Button'

function VerticalCard({data}) {
    const discountedPrice =  (data.price - (data.discount/100)*data.price).toFixed(2)
  return (
    <div className='min-w-64 lg:min-w-72 relative flex flex-col bg-white p-2'>
        <div className='w-full p-16'>
            <img src={Image} alt="" />
        </div>
        <div>
        <div className='flex flex-row gap-2'>
                { data.discount && <Tag>{data.discount}% off</Tag>}
                {data.limitedTime && <Tag>Limited time</Tag>}
                </div>
        </div>
        <div className='text-center text-tcolor mt-2 font-bold'>
            {data.heading}
        </div>
        <div className='text-[#626E70] mt-2'>
            {data.description}
        </div>
        <div className='text-[#626E70] mt-2 text-lg flex flex-row items-end gap-2'>
            <div className='text-lg text-[#5C6874]'>
            ${discountedPrice}
            </div>
            <div className='text-sm text-[#9FA9B3]'>
                ${data.price}
            </div>
            <div className='text-sm text-[#EF4C5D]'>
                ({data.discount}% Off)
            </div>
        </div>
        <Button color='bg-blue-500 ' text='text-white mt-4  p-4 hover:bg-blue-600 '>View Deal</Button>
    </div>
  )
}

export default VerticalCard