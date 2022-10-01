import React from 'react';
//import './style.css';
export default function Header(props){
  return (
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}} >
      <div>
        <a href="#/">
          <h1 style={{fontsize:"1.5rem", margin:"0.5rem 0"}}>HERE YOU CAN BUY YOUR CHOICE</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
        Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
           </a>       
            <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
};