import React from 'react'
import DishesCard from '../layouts/DishesCard'
import food from '../assets/img/food.jpeg'
import food1 from '../assets/img/food1.jpg'
import food2 from '../assets/img/food2.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>
            premium Menu
        </h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={food} title="Beyeaynet" price="250birr"/>
            <DishesCard img={food1} title="kitfo" price="600birr"/>
            <DishesCard img={food2} title="Dorowet" price="400birr"/>
        </div>
    </div>
  )
}

export default Menu