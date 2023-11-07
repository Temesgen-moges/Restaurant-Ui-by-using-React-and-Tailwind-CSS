import React from 'react'
import img from '../assets/img/aa.jpeg'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img className='pr-10  h-auto max-w-lg rounded-lg' src={img} alt="img" />
        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>
                Why choose Us?
            </h1>
            <p>
             Our restaurant offers a truly authentic Ethiopian dining experience,
             with traditional dishes prepared using time-honored recipes and techniques.
             every dish is cooked to perfection and tastes delicious.
            </p>
            <p>
            We pride ourselves on creating a warm and welcoming atmosphere for our customers,
             providing excellent customer service and a comfortable dining environment.
            </p>
            <div className='flex justify-center lg:justify-start pl-40'>
                <Button title="Learn More"></Button>
            </div>
        </div>
    </div>

  )
}

export default About