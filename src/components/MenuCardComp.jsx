import React from 'react';
import '../assets/css/menucardcomp.css';

function MenuCardComp({ price, menuName, menuDescription }) { // Destructure the props here
  return (
    <div className='maindiv'>
      <b className='price price'>{price} AED</b>
      <b className='menuName'>{menuName}</b>
      <b className='mt-2'>Description</b>
      <p className='descriptionDiv'>{menuDescription}</p>
      <button className='cartButton'>Add To Cart</button>
    </div>
  );
}

export default MenuCardComp;
