import React from 'react'

const Footer = () => {
  const footerYear = new Date().getFullYear()  
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <p>All rights reserved &copy; {footerYear}</p>
    </footer>
  )
}

export default Footer