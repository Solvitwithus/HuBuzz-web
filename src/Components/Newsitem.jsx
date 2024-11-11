import React from 'react';
import News from '../Assets/HuBuzz.png';
import "../Styles/header.css"
const Newsitem = ({title,description,src,url}) => {
  return (
    
  

    <div className="card-container">
      <img src={src ? src : News} className="card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-description">{description ? description.slice(0, 90) : "Stay informed with our innovative news app. Get the latest headlines, breaking news, and personalized updates delivered directly to your device, keeping you connected and informed in just a few taps"}</p>
        <a href={url} className="card-button">Read More</a>
      </div>
    </div>
  
  )
}



export default Newsitem;
