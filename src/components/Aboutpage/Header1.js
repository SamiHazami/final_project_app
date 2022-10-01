import React from 'react';
import { Link } from "react-router-dom";
//import './style.css';
export default function Header1(props){
  return (
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}} >
      <div>
        
          <button>
          <Link to="/about"> MODEL_1</Link>
          </button>
        
      </div>
      <div>
        
          <button>
          <Link to="/about"> MODEL_2</Link>
          </button>
        
      </div>
      <div>
        
          <button >
          <Link to="/about"> MODEL_3</Link>
          </button>
      
      </div>
      
    </header>
  );
};