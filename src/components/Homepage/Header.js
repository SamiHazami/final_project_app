import React from 'react';
//import './style.css';
const Header =()=> {
  return (
    <header className="block row center" >
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
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