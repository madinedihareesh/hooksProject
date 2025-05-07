
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

export const Nav=()=>{  
  const {cart}=useContext(CartContext)
    return(
        <>
        <nav className="nav">
  <a className="nav-link active" aria-current="page" href="#">Active</a>
  <Link to='/'>  
    Products
  </Link>
  <Link to='/cart'> 
    Cart <span>{cart.length}</span>
  </Link>
  <a className="nav-link disabled" aria-disabled="true">
    Disabled</a>
</nav>
        </>
    )
}