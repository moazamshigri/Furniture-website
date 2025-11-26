import React from 'react'

const Header  =() => {
    
  return (
    <header>
        <div className="logo"><h2>Panto</h2></div>
        <ul>
            <li>
                <a href="#">Furniture</a>
            </li>
            <li>
                <a href="#">Shop</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <div className="cart">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <div className="counter">
                
            </div>

        </div>
    </header>
  )
}

export default Header
