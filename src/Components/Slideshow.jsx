import {React,useState,useEffect} from 'react';
import "../Styles/Slideshow.css"
const Slideshow = ({Images}) => {
  const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % Images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [Images]);
  
  return (
    <div>
      <img src={Images[index]} alt='shirts' className='slide-showimages' />
    </div>
  );
}

export default Slideshow;
