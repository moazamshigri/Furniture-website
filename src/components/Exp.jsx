import React from 'react'
import "./exp.css"

const Exp = () => {
  return (
    <section className="exp">

    <div className="firstExp">
        <div className="f-img"></div>
        <img className='m-img' src="src/assets/m-img.png" alt="" />
        <div className="l-img"></div>
    </div>
    <div className="secondExp">
        <h4 className='col'>Experiences</h4>
        <h1>We Provide you the <br /> best experience</h1>
        <p>You don’t have to worry about the result because all of these <br /> interiors are made by people who are professionals in their fields <br /> with an elegant and lucurious style and with premium quality <br />materials</p>
        <a href="#">More Info &rarr;</a>
    </div>
    </section>
   
  )
}

export default Exp
