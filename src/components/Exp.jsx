import React from 'react'
import "./exp.css"

const Exp = () => {
  return (
    <>
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
    <section className="exp2">
        
         <div className="secondExp ss">
        <h4 className='col'>Experiences</h4>
        <h1>Very Serious<br />Material for Making <br />Furniture</h1>
        <p>You don’t have to worry about the result because all of these <br /> interiors are made by people who are professionals in their fields <br /> with an elegant and lucurious style and with premium quality <br />materials</p>
        <a href="#">More Info &rarr;</a>

         
        </div>
        <div className="pehla">
               <div className="aik">
                <img className='p-one' src="src/assets/p-one.png" alt="" />
            <img className='p-two' src="src/assets/p-two.png" alt="" />
            </div>
            <div className="do">
        <div className="shade"></div>
            <img className='p-three' src="src/assets/p-three.png" alt="" />
            </div>
    </div>
    </section>
    </>
   
  )
}

export default Exp
