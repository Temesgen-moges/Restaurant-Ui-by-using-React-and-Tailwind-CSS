import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div>
            <p className='flex flex-row justify-center items-center'>
            I recently dined at an Ethiopian restaurant and I was blown away by the amazing flavors and unique dining experience. The injera bread was soft and tangy, 
            and the various stews and dishes served on top were so flavorful and delicious.
            </p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4 gap-4'>
            <img className='rounded-full w-1/4' src={props.img} alt="img" />
            <h3 className='font-semibold'>{props.name}</h3>
        </div>
    </div>
  )
}

export default ReviewCard