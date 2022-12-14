//import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import News from "./components/News";
import Main1 from "./components/Aboutpage/Main1";
import'./components/style.css';


export default function App() {
  return (
    <div>  
       <Router>   
   <Navigation /> 
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/News" element={<News />} />
        </Routes>
       </Router>           
       
   
       
    </div>
  );
};


