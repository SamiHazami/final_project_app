import React from 'react';
import Product_1 from './Product_1';

export default function Main1(props){
    const {products,onAdd} = props;  
  return (
    <main style={{padding:'10rem',margin:"0.5rem",borderRadius:"0.5rem",justicontent:'space-around',backgroundColor:'#e0e0e0'}}>
    <div style={{dispaly:'flex',flexdirection:'column'}} >
        {products.map((product) => (
          <Product_1 key={product.id} product={product} onAdd={onAdd}> </Product_1>
        ))}
      </div>
    </main>
  );
};