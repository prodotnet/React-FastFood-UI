import React from 'react'
import './Fooddisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Fooditem from '../componenets/FoodItem/Fooditem'

const Fooddisplay = (category) => {


    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id="food-display">
            <h2>Menu</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                   if(category="All"|| category===item.category){
                    return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                   }
                   

                })}
            </div>
        </div>
    )
}

export default Fooddisplay
