import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details.
      <br />
      <strong>
      By: { ' ' }
          <a href="https://linkedin.com/in/mahmoud-hanouneh">
              Mahmoud Hanouneh
          </a>
      </strong>
     .
    </p>
   
    <p>
    Credits to  { ' ' }
      <strong>
        
         
        <a href="">Brad Traversy</a>
      </strong>
    </p>
  </>
  )
}

export default About