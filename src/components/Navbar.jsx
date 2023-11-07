import React from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import Button from '../layouts/Button';

const Navbar = () => {
  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
          <div className='flex flex-row items-center cursor-pointer'>
            <span> 
                <BiRestaurant size={32}/>
            </span>
            <h1 className='text-xl font-semibold'>FoodingWeb</h1>
          </div>
          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
            <Link to='home' spy={true} smooth={true} duration={500} className=' hover:text-orange-600 transition-all cursor-pointer'>Home</Link>
            <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-orange-600 transition-all cursor-pointer'>Dishes</Link>
            <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-orange-600 transition-all cursor-pointer'>About</Link>
            <Link to='menu' spy={true} smooth={true} duration={500} className='hover:text-orange-600 transition-all cursor-pointer'>Menu</Link>
            <Link to='review' spy={true} smooth={true} duration={500} className='hover:text-orange-600 transition-all cursor-pointer'>Review</Link>
            <Button title="Login"/>
            
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
