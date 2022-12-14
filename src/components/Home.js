import React from "react";
import Header from './Homepage/Header';
import Main from './Homepage/Main';
import Basket from './Homepage/Basket';
import data from  './data'
import {useState} from 'react'; 
//import'./style.css';

export default function Home(){
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    return(                
    
      <div> 
        <div>
          <Header countCartItems={cartItems.length}></Header>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Main products={products} onAdd={onAdd}></Main>
          <Basket 
          cartItems={cartItems} 
          onAdd={onAdd}
          onRemove={onRemove}
         > </Basket>
        </div>
      </div>       
          
    )        
};
  
