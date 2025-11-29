import React, { useState } from 'react'
import "./header.css"

const Header  =() => {
    const [counter, setCounter] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    
    
  return (
    <header>
        <div className="logo"><h2>Panto</h2></div>
        <ul className='nav-links'>
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
       <div className='fle'>
         <div className="cart">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <div className="counter">
                {counter}
            </div>


        </div>
         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
    {isOpen 
      ? <i className='fa fa-close'></i> 
      : <i className='fa fa-bars'></i>
    }
  </div>
  </div>
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul className='ul1'>
        <li><a href="#">Furniture</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>

      </ul>
      </div>
      
    </header>
  )
}

export default Header
