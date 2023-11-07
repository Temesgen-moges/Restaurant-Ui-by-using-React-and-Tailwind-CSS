import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-6 py-1 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all rounded-full'>
        {props.title}
        </button>
        
    </div>
  )
}

export default Button