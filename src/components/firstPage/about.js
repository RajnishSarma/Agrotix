import React from 'react'
import './about.css'
// import backgroundImage from '..images/pic1.jpg'

function about() {
  return (
   
    <div className="about-us-container" id='#about'>
      <h2>About Us</h2>
      <p className='about-us-contant'>
        Agrotix is dedicated to revolutionizing
        agriculture by providing cutting-edge technology for crop disease
        detection. Our mission is to empower farmers with the tools they need
        to ensure the health and productivity of their crops.
      </p>
      <p className='about-us-contant'>
        With a team of experts in agriculture, artificial intelligence, and
        machine learning, we are committed to creating sustainable solutions
        that address the challenges faced by farmers around the world.
      </p>
      <p className='about-us-contant'>
        Join us in our journey to make a positive impact on global food
        production, promote sustainable farming practices, and secure the
        livelihoods of farmers.
      </p>
      {/* <p className='about-us-contant'> */}
      <p className='about-us-contant'>
      At Agrotix, we are passionate about agriculture and committed to serving
       the needs of farmers and agricultural professionals worldwide
      </p>
      {/* </p> */}
    </div>
 

  )
}

export default about