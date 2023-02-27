import React from 'react'
import "./images.css"
import { MdLocationPin } from 'react-icons/md'
import { Button } from 'react-bootstrap'
import { IoLogoWhatsapp } from 'react-icons/io'
const Images = () => {
  return (
    <div  >
      <div class="w-auto p-3">
        <Button
    href="https://wa.me/5493541677768"

target="_blank"
text= "chatea con nosotros"
title='chatea con nosotros'>  <IoLogoWhatsapp /> Consultanos!
    
    </Button>
    </div>
  <div class="w-auto p-3"> 
        <img src="01.png"  class="object-fit-fill border rounded"
          alt="First slide"/> 
        <img src="2.jpg" class="object-fit-fill border rounded"
          alt="First slide"/> 
        <img src="3.jpg"  class="object-fit-fill border rounded"
          alt="First slide"/> 
        <img src="04.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
           <img src="4.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
           <img src="5.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
           <img src="6.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
           <img src="7.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
           <img src="8.jpg" class="object-fit-md-contain border rounded"
          alt="First slide"/> 
</div> 
       </div>
       
  )
}

export default Images