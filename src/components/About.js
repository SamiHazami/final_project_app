import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Header1 from "./Aboutpage/Header1";
import Main1 from "./Aboutpage/Main1";
import data from  './data'

export default function About() {
  const { products } = data;
  return (
    <div>
      
        <Routes>
          <Route path="/About-Main1" element={<About/>}/>
          <Route path="/About-Main1" element={<About/>}/>
          <Route path="/About-Main1" element={<About/>} />
        </Routes>
      
    <div>
      <Header1> </Header1>
    </div>
    <section>
     <Main1 products={products} >  </Main1>
    </section>
    </div>

  )

   
};

