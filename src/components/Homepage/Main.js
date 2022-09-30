import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products} = props;  
  return (
    <main style={{flex:'2',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0',alignItems:'center'}}>
      <h2>Products</h2>
      <div style={{display:'flex',justifyContent:'space-between'}} >
        {products.map((product) => (
          <Product key={product.id} product={product}> </Product>
        ))}
      </div>
    </main>
  );
};
