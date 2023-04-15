import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Cart from './pages/Cart';
import Card from './components/Card';

const App  = () => {
  return (
    <div className="App">
          <Navbar />
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
          </Routes>
          
          
    </div>
  );
}

export default App;
