import './App.css';
import { Nav } from './Components/nav';
import { Products } from './Components/Products';
import { Cart } from './Components/Cart';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './Components/CartContext';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
