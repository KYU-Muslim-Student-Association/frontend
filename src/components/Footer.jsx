import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>address</h3>
          <p>Stay connected to us through our social media platforms .</p>
    
        </div>

        <div class="box">
          <h3>E-mail</h3>
          <Link to='#' className='link'>kyumsa@gmail.com</Link>
          <Link to='#' className='link'>kyumsa@gmail.com</Link>
       
        </div>

        <div class="box">
          <h3>call us</h3>
          <p>+254 720555703</p>
          <p>+254 720555703</p>
        </div>
      </div>

      <div class="credit">
        created by <span>kymsa developers</span> all rights reserved!
      </div>
    </section>
  )
}

export default Footer