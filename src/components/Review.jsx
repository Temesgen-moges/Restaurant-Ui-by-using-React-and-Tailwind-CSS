import React from 'react'
import pp from '../assets/img/pp2.jpg'

import ReviewCard from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer Review</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={pp} name="Temesgen .M" />
            <ReviewCard img={pp} name="Temesgen .M" />
            <ReviewCard img={pp} name="Temesgen .M" />
        </div>
    </div>
  )
}

export default Review