import React from "react";
import Header1 from "./Aboutpage/Header1";
import Main1 from "./Aboutpage/Main1";
import data from  './data'

export default function About() {
  const { products } = data;
  return (
    <div>
    <div>
      <Header1> </Header1>
    </div>
    <section>
     <Main1 products={products} >  </Main1>
    </section>
    </div>
  )

   
};

