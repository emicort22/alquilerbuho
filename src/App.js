import Info from './components/info';
import './App.css';
import React from "react";
import Redes from "./components/redes"
import  Images from "./components/images.jsx"
import "react-bootstrap"
import Header from './components/header.js';
import  {BsWhatsapp} from "react-icons/bs"

function App() {
  return (
 
       <div className='App'>
    <Header/>
    
 <Info/>
  
    <Images/>
     <a
        href="https://wa.me/5493541677768"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        text= "chatea con nosotros"
       title='chatea con nosotros'>
        <i >  <BsWhatsapp/></i>
      </a>

     
      <Redes />
      </div>
  
  );
}

export default App;