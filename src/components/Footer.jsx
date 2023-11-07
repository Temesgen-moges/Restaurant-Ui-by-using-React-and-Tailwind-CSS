import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>Foodieweb</h1>
                <p className='text-sm'>I am excited to inform you that our restaurant
                 website has been developed by Temesgen Technologies.
                </p>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='home'">Dishes</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='dishes'">About</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Menu</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Reviews</a>
                </nav>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Our Dishes</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Premium Menu</a>
                    
                </nav>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">temu1554@gmail.com</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">+251985246737</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Social media</a>
                    
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright developed by <span className='text-orange-600'>Temesgen M.</span>  All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer