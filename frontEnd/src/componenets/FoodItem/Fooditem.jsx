import React, { useContext } from 'react';
import './Fooditem.css';
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {
  const { carItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />

        {!carItems[id] || carItems[id] === 0 ? (
          <i onClick={() => addToCart(id)} className="fa fa-circle-plus"></i>
        ) : (
          <div className='count'>
            <i onClick={() => removeFromCart(id)} className="fa fa-minus"></i>
            <p>{carItems[id]}</p>
            <i onClick={() => addToCart(id)} className="fa fa-plus"></i>
          </div>
        )}
      </div>
      <div className='food-item-information'>
        <div className="food-item-name">
          <p>{name}</p>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>
      </div>
      <p className="food-item-des">{description}</p>
      <p className="food-item-pri">R{price}</p>
    </div>
  );
};

export default Fooditem;
