import React from 'react'
import { StarIcon , StarFilledIcon } from '@radix-ui/react-icons'

function Rating({rating}) {
    const stars = Math.floor(rating/2)
    const ratingValue = function(){
        if(rating>9.5){
            return "Exceptional"
        }
        else if(rating>9.3){
            return "Excellent"
        }
        else if(rating > 9){
            return "Very Good"
        }
        else if(rating>7){
            return "Good"
        }
        else if(rating>5){
            return "Decent"
        }
        else{
            return "Okay"
        }
    }
  return (
    <div className="flex flex-col p-4 rounded-md text-[#074786] bg-[#e4eaf0]  items-center absolute top-0 right-0 md:relative">
    <div className="text-3xl">{rating}</div>
    <div>{ratingValue()}</div>
    <div className='flex flex-row gap-px'>
        
    {
        [...Array(stars)].map(()=>(
            <StarFilledIcon color='#FFB80F' />
        ))
    }
    {[...Array(5-stars)].map(()=>(
        <StarIcon color='#FFB80F' />
    ))}
    </div>
  </div>
  )
}

export default Rating