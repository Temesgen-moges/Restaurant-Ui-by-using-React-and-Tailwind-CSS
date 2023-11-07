import React from 'react'
import DishesCard from '../layouts/DishesCard'
import food from '../assets/img/food.jpeg'
import food1 from '../assets/img/food1.jpg'
import food2 from '../assets/img/food2.jpg'
import food3 from '../assets/img/food3.jpg'
import food4 from '../assets/img/food4.jpeg'
import food5 from '../assets/img/food5.jpg'
import food6 from '../assets/img/food6.jpg'

const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text.-center pt-24 pb-10'>Our Dishes</h1>
        <div class="flex flex-wrap gap-8 justify-center ">
  
            <DishesCard img={food} title="Beyeaynet" price= "250 birr"/>
            <DishesCard img={food1} title="Kitfo" price= "500 birr"/>
            <DishesCard img={food2} title="Drowot" price= "400 birr"/>
            <DishesCard img={food3} title="Shiro" price= "100 birr"/>
            <DishesCard img={food4} title="misr" price= "120 birr"/>
            <DishesCard img={food6} title="kurt" price= "800 birr"/>
        </div>
    </div>
    
  )
}

export default Dishes