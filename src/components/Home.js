import React from "react";
import Header from './Homepage/Header';
import Main from './Homepage/Main';
import Basket from './Homepage/Basket';

const Home = () => {
    return(                
    
      <div> 
        <div>
          <Header></Header>
        </div>
        <div className="row">
          <Main></Main>
          <Basket></Basket>

        </div>
      </div>  
      
          
    )        
};
  
  export default Home;