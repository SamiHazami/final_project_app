import React from 'react';

export default function Product_1(props){
  const { product,onAdd} = props;
  return (
    <div>
      
      <img  style={{display:'block',marginleft:'auto',marginright:'auto',width:"100%"}}src={product.image} alt={product.description}></img> 
      <h3>{product.description}</h3>
      <div>
        <button onClick={() => onAdd(product)}>to buy go to homepage</button>
      </div>
      
  </div>
  );
};