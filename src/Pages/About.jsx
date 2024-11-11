import React from 'react';
import Slideshow from '../Components/Slideshow';
import "../Styles/About.css"
import Pilartemplate from '../Components/Pilartemplate';
import { FaEye, FaBullseye, FaRegHandshake } from 'react-icons/fa'; 
const About = () => {
  const imageArray=[
    "Slideshowimages/Shirts.jpg",
    "Slideshowimages/maasai-market.jpg",
    "Slideshowimages/leso.jpeg",
    "Slideshowimages/menshoes.jpg",
    "Slideshowimages/lingerie.jpeg",
    "Slideshowimages/jeans.jpg",
    "Slideshowimages/the-vintage-collection.jpg",
    "Slideshowimages/swimming-cost.webp",
    "Slideshowimages/leather.jpg"
  ]
  return (
    <div className='about-container'>
      <div className='about-upper-sec'>
     <div className='upper-left'>
          <h4 className='bout-hubuzz-title'>About HuBuzz</h4>
          <p className='about-text'>Was founded in 1989 by the Flappin Nzing Mwaura family in Nairobi's Westlands,<br/>
          has grown from a small family-run clothing store into a prominent fashion retailer in Kenya.<br/> 
           Known for offering high-quality, affordable fashion, HuBuzz expanded with branches in <br/> 
           Kitengela (1995), Rongai (2002), Elite (2010), Nakuru (2015), and Kisumu (2022). <br/> 
           With a blend of contemporary style and timeless fashion, the brand is committed <br/> 
           to maintaining its values of quality, affordability, and community. Today, HuBuzz <br/> 
           continues to help customers express their unique styles while remaining a trusted name<br/> 
            in the Kenyan fashion industry.</p>
     </div>
      
      <Slideshow Images={imageArray}/>
      </div>
      <div className='about-lower-section'>
        <Pilartemplate Icon={ <FaEye size={30} color="#80681a" />} Header={"Our Visions"} Text={"To be Kenya's leading provider of high-quality, affordable fashion that inspires self-expression."}/>
        <Pilartemplate Icon={  <FaBullseye size={30} color="#80681a" />} Header={"Our Mission"} Text={"To offer a diverse range of stylish, affordable clothing while maintaining a commitment to quality and customer satisfaction."}/>
        <Pilartemplate Icon={  <FaRegHandshake size={30} color="#80681a" /> } Header={"Our Values"} Text={"Quality, affordability, community, and integrity are at the heart of everything we do."}/>
      </div>
    </div>
  );
}

export default About;
