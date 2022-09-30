import React from "react";
import Header from './Homepage/Header';
import Main from './Homepage/Main';
import Basket from './Homepage/Basket';
import data from  './data'
//import'./style.css';

export default function Home(){
  const { products } = data;
    return(                
    
      <div> 
        <div>
          <Header></Header>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Main products={products}></Main>
          <Basket></Basket>

        </div>
      </div>       
          
    )        
};
  
