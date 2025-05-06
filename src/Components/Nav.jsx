import React from "react"
import { Link } from "react-router-dom"

export const Nav=()=>{
    return(
        <>
        <nav className="nav">
  <a className="nav-link active" aria-current="page" href="#">Active</a>
  <Link to='/'>      
  <a className="nav-link" href="#">Products</a>
  </Link>
  <Link to='/cart'>
  <a className="nav-link" href="#">Cart</a>
  </Link>
  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
        </>
    )
}