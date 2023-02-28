import Info from './components/info';
import './App.css';
import React from "react";
import Redes from "./components/redes"
import  Images from "./components/images.jsx"
import "react-bootstrap"
import Header from './components/header.js';
import  {IoLogoWhatsapp} from "react-icons/io"
import { Button}  from 'bootstrap';
import CarouselEx from './components/carousel';
import { MdLocationPin } from 'react-icons/md';
import Opinions from './components/opinions';

function App() {
  return (
 
       <div className='App'>
    <Header/>
    
 <Info/>
  
    <Images/>
  
    <span>   Comunicate con nosotros! </span>  
     
      <Redes />

      <Opinions/>
  
      <p><h5> <MdLocationPin/> 281 Río Cuarto, Villa Carlos Paz</h5> </p>
      </div>
  
  );
}

export default App;