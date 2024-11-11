import React from 'react';
import './App.css';
import Navbarcontent from './Components/Navbarcontent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Promotions from './Pages/Promotions';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';

const App = () => {
  return (
    <Router>
      <Navbarcontent />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/About" element={<About/>} /> 
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Promotions' element={<Promotions/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
};

export default App;
