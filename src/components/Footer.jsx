import React from 'react'
import "./footer.css"
const Footer = () => {
  return (

    <footer>

    <div className="upper-kohistan">
        <div className="first">
            <h2>Panto</h2>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Neque quo unde <br /> cum impedit. Nihil autem possimus vitae </p>
        </div>
        <div className="second"><ul>
            <li className='col'>Services</li>
            <li>Email Marketing</li>
            <li>Nothin Here</li>
            <li>Testing</li>
            </ul></div>
        <div className="third"><ul>
            <li className='col'>Furniture</li>
            <li>Bed</li>
            <li>Chair</li>
            <li>All</li>
            </ul></div><div className="fourth"><ul>
            <li className='col'>Follow us</li>
            <li><i class="fa-brands fa-facebook"></i> <a href="www.facebook.com/" target='_blank'>Facebook</a></li>
            <li><i className='fa-brands fa-github'></i><a href="www.github.com" target='_blank'>Github</a></li>
            <li><i className='fa-brands fa-linkedin'></i><a href="www.linkedin.com" target='_blank'>Linkedin</a></li>
            </ul></div>
    </div>
    <div className="lower-kohistan"><div className="lef">Copyright&copy;2025 </div><div className="rig">Made with❤️ by Moaxam</div></div>
    </footer>
   
  )
}

export default Footer
