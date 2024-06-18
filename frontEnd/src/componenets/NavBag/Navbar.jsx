import React, { useState } from 'react'
import './Navbar.css'




const Navbar = () => {

  const [menu ,setMenu] = useState("home");

  return (
    <div className='NavBar'>
       
      <i class="fa-brands fa-product-hunt"></i>
     
     <ul className='NavBar-menu'>
        
        <li onClick={()=> setMenu("home")} className={menu==="home"?"active" :""}>Home</li>
        <li onClick={()=> setMenu("menu")}  className={menu==="menu"?"active" :""}>Menu</li>
        <li onClick={()=> setMenu("mobile")} className={menu==="mobile"?"active" :""}>Delivery-App</li>
        <li onClick={()=> setMenu("about")} className={menu==="about"?"active" :""}>About us</li>
        
        
     </ul>

     <div className='NavBar-right'>
        
     <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
       
       <div className="NavBar-search-icon">
      
       <a href="#"><i className="fa-solid fa-cart-plus"></i></a>

       <div className="dot"> </div>

       </div>

       <button>Sign in</button>
     </div>

    
      
    </div>
  )
}

export default Navbar
