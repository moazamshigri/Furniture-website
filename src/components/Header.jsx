import React, { useState } from 'react'


const Header  =() => {
    const [counter, setCounter] = useState(0);
    
    
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
                {counter}
            </div>


        </div>
      
    </header>
  )
}

export default Header
