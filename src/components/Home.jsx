import React from 'react';
import Button from '../layouts/Button';
import food from '../assets/img/jj.jpg';

const Home = () => {
  return (
    <div
      className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5'
      style={{
        backgroundImage: `url(${food})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        borderRadius: '1.5rem 1.5rem'
        
      }
    }
    >
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className='text-black font-semibold text-6xl'>
          Elivate your fooding with every bite
        </h1>
        <p className='text-black'>
         
        </p>

        <div>
          <Button title='Order Now'></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
