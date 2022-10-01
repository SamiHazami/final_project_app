import React from 'react';
//import './style.css';
export default function Header1(props){
  return (
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}} >
      <div>
        <a href="#/">
          <h1 style={{fontsize:"1.5rem", margin:"0.5rem 0"}}>MODEL 1</h1>
        </a>
      </div>
      <div>
        <a href="#/">
          <h1 style={{fontsize:"1.5rem", margin:"0.5rem 0"}}>MODEL 2</h1>
        </a>
      </div>
      <div>
        <a href="#/">
          <h1 style={{fontsize:"1.5rem", margin:"0.5rem 0"}}>MODEL 3</h1>
        </a>
      </div>
      
    </header>
  );
};