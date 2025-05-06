
import './App.css'
import { Nav } from './Components/nav'
import { Products } from './Components/Products'
import { Cart } from './Components/Cart'
import { Routes,Route } from 'react-router-dom'
import { CartContext } from './Components/Products'

function App() {


  return (
    <>
    <CartProvider>
     <Nav/>
     <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path='/products' element={<Products/>}/>
      {/* <Route  path='/cart' element={<Cart/>} /> */}
     </Routes>
     </CartProvider>
     
 
    
     
    </>
  )
}

export default App
