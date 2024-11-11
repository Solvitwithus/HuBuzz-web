import React from 'react';
import "../Styles/contact.css"
import Maps from "../Assets/maps.jpg"
import Twitter from "../Assets/x.png";
import Facebook from "../Assets/fb.png";
import Youtube from "../Assets/youtube.png"
import Pilot from "../Assets/pilot.png"
import Capterra from "../Assets/capterra.png"
const Contacts = () => {
  return (
    <div id="contact-cont">
     <div className='contact-upper-section'>
      <div className='contact-upper-left'>
        <img src={Maps} alt="maps" className='maps-image'/>
      </div>
      <div className='contact-upper-right'>
<span className='delivery'>Schedule for a delivery</span>
<hr/>
      <form action="" method="post" class="form-container">
  <div class="form-group">
    <label for="first-name">First Name *</label>
    <input type="text" name="first-name" id="first-name" placeholder="John" required />
  </div>

  <div class="form-group">
    <label for="last-name">Last Name *</label>
    <input type="text" name="last-name" id="last-name" placeholder="Doe" required />
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" name="email" id="email" placeholder="company@gmail.com" required />
  </div>

  <div class="form-group">
    <label for="company-name">Company Name *</label>
    <input type="text" name="company-name" id="company-name" placeholder="HuBuzz" required />
  </div>

  <div class="form-group">
    <label for="phone">Phone *</label>
    <input type="tel" name="phone" id="phone" placeholder="1234567890" required />
  </div>

  <div class="form-group">
    <label for="location">Location *</label>
    <input type="text" name="location" id="location" placeholder="Westlands" required />
  </div>
  <div className='btn-section'>
  <button class="styled-button clear-button" type="reset">Clear</button>
  <button class="styled-button" type="submit">Submit</button>
  </div>
 

</form>




      </div>
     </div>
     <div className='footer'>
      <div className='footer-left-indexone'>
      <h4>HuBuzz</h4>
      <p>
      Your go-to for quality clothes, latest trends,<br/>and exceptional service<br/> forfashion-forward individuals
      </p>
      <span className='the-icons'>
      <img src={Twitter} alt="Twitter" className="icon" />
      <img src={Facebook} alt="Facebook" className="icon" />
      <img src={Youtube} alt="Youtube" className="icon" />
      </span>
      <h5>See Our Glowing reviews on</h5>
      <span className='the-icons'>
      <img src={Pilot} alt="Pilot" className="icon" />
      <p>TrustPilot</p>
      <img src={Capterra} alt="Capterra" className="icon" />
      <p>Capterra</p>
      </span>
      </div>
        
        <div className='footer-left-indexone'>
          <h4>Products</h4>
          <span className='products-footer'>
            <p>Intimate Apparel</p>
            <p>Accessories</p>
            <p>Shoes</p>
            <p>Pants</p>
            <p>Shirts</p>
            <p>Jackets and coats</p>
          </span>

        </div>

        <div className='footer-left-indexone'>
          <h4>Location</h4>
        
          <span className='products-footer'>
            <p>Main Branch at Westlands</p>
            <p>Along Galitos Kobil Ojijo Road</p>
            <p>T: 0756432900  or 0700900000</p>
            <p>E: hubuzzfashions@collections.ac.ke</p>
          </span>
        </div>

        <div className='footer-left-indexone'>
        <h4>Quick Links</h4>
            <span className='products-footer'>
              <p><a href="/" title='home'>Home</a></p>
              <p><a href="/about" title='about us page'>About Us</a></p>
              <p><a href="/products" title='products'>Products</a></p>
              <p><a href="/promotions" title='promotions'>Promotions</a></p>
              <p><a href="/blog" title='blog'>Blog</a></p>
              <p><a href="/contact" title='Contact'>Contact</a></p>
            </span>
        </div>
       <p class="copyright">© 2024 HuBuzz. All rights reserved.</p>
     </div>
    </div>
  );
}

export default Contacts;
