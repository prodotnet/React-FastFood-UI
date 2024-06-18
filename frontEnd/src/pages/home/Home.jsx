import React, { useState } from 'react'
import './Home.css'
import HeaderComp from '../../componenets/Header/HeaderComp'
import Menu from '../../componenets/ExploreMenu/Menu'
import Fooddisplay from '../../Fooddisplay/Fooddisplay'



const Home = () => {

 const [category,setCategory] = useState("All");


  return (
    <div>
     
     <HeaderComp/>
     <Menu category={category} setCategory={setCategory}/>
     <Fooddisplay category={category} />
    </div>
  )
}

export default Home
