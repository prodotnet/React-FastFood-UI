import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>


                <div className="footer-content-left">
                <i class="fa-brands fa-product-hunt"></i>
                <p>Fast Food website</p>
                 <div className="footer-social-icons">
                 <i class="fa-brands fa-whatsapp"></i>
                 <i class="fa-brands fa-facebook"></i>
                 <i class="fa-brands fa-linkedin"></i>
                 <i class="fa-brands fa-twitter"></i>
                 </div>
                </div>
                <div className="footer-content-center">
                        <h2>About us</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                </div>

                <div className="footer-content-right">
                         <h2>Get In Touch </h2>
                         <ul>
                            <li>+27 71000000</li>
                            <li>Pro@dontnet.com</li>

                         </ul>
                </div>

            </div>
            <hr/>
            <p className="footer-copyrigt"> 2024</p>
        </div>
    )
}

export default Footer
