import React from 'react'
import './Menu.css'
import { MenuList } from '../../assets/assest'

const Menu = ({category,setCategory}) => {


  return (
    <div className='menu' id="menu">
        <h1>Explore our menu</h1>
       <p className='menu-text'>Choose from a diverse menu</p>
        <div className="menu-list">
       
        {MenuList.map((item , index)=>{

            return(

        <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className="menu-list-item">

           <img className={category===item.menu_name?"active":""} src={item.menu_image}  alt=''/>
           <p>{item.menu_name}</p>


        </div>


            )
        })}
              


        </div>
        <hr/>
    </div>
  )
}

export default Menu
