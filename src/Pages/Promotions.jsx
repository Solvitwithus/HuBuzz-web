import React, { useState, useEffect } from 'react';
import "../Styles/promotions.css"
const Promotions = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMount = true;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        if (componentMount) {
          setData(products);
          setFilter(products);
          setLoading(false);
          console.log("Filtered Data:", products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return <p>Network error please try again later!</p>
      }
    };

    fetchData();

    return () => {
      componentMount = false;
    };
  }, []); // Empty dependency array for running only on mount
  if (loading) return <p>Loading...</p>;
  return (
    <>
    <h1>Latest Products Promotions</h1>
    <div className='card-containers'>
      
      {/* Render the list of products */}
      {data.map((item, idx) => (
        <div key={idx} className='card'>
          
          <img src={item.image} alt={item.title} className='card-img'/>
          <h5 style={{ color: "red" }}>{item.category}</h5>
          <p>{item.description}</p>
          <span className='prices'>
          <li className='was-price'>was: ${ (item.price + 13.00).toFixed(2) }</li>

          <li className='now-price'>now: ${item.price}</li>
          </span>
          
          <li>Remaining: {item.rating.count}</li>
          <li>Rating: {item.rating.rate}</li>

          <a href="#" class="card-link">Buy Now</a>
        </div>
      ))}
    </div>
    </>
  );
};

export default Promotions;