import React from 'react';
//import './style.css';
const Header =()=> {
  return (
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}} >
      <div>
        <a href="#/">
          <h1 style={{fontsize:"1.5rem", margin:"0.5rem 0"}}>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart
           </a>       
            <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
export default Header ;