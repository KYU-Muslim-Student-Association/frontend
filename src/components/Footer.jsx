import React from 'react'

const Footer = () => {
  return (
    
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>address</h3>
          <p>Stay connected to us through our social media platforms .</p>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <h3>E-mail</h3>
          <a href="#" class="link">kyumsa@gmail.com</a>
          <a href="#" class="link">kyumsa@gmail.com</a>
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