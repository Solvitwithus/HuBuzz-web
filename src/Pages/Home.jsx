import React from 'react';
import "../Styles/Home.css"
import  Clothes from "../Assets/Clothes.png"

import Transport from "../Assets/transport.png"
import Warlet from "../Assets/warlet.png"
import Packaging from "../Assets/Packaging.png"
const Home = () => {
  return (
    <div id='meho'>
    <div className='row'>
      <div className='adv-content'>
        <span className='adv-text'>
        Step Up Your Style Game with HuBuzz
        </span>
        <span className='collection'>
          COLLECTION 2017
        </span>
        <span className='mainiadv'>
        Your go-to for quality clothes, latest trends,<br/> and exceptional service for<br/> fashion-forward individuals
        </span>
      </div>
      <img src={Clothes} alt='clothes' className='clothes'/>
    </div>
    <div className='row-content'>
            <div className='btm-content'>
                <img src={Transport} alt='transport' className='transport-icon'/>
                <h3>Express Delivery</h3>
                <p>Express delivery ensures your packages arrive<br/> quickly and reliably. With real-time tracking <br/>and guaranteed delivery times, it’s perfect for <br/>urgent needs. Enjoy convenience and peace<br/> of mind with every order!</p>
            </div>

            <div className='btm-content'>
                <img src={Warlet} alt='transport' className='warlet-icon'/>
                <h3>Safe Payment</h3>
                <p>Secure payment methods ensure confidentiality,<br/> integrity, and availability of transactions, <br/>safeguarding sensitive financial information from <br/>unauthorized access.</p>
            </div>

            <div className='btm-content'>
                <img src={Packaging} alt='transport' className='package-icon'/>
                <h3 className='pack'>Premium Packaging</h3>
                <p>Premium packaging enhances product value through <br/>luxurious materials, superior design, and <br/>exquisite presentation, elevating brand perception <br/>and customer experience</p>
            </div>
    </div>
    </div>
  );
}

export default Home;
