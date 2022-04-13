import React from 'react'
import spinner from './assets/Spinner.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img 
            src={spinner}
            width={180}
            alt='Loading'
            className='text-center mx-auto'
        />
    </div>
  )
}

export default Spinner