import React from 'react'

import {MdPets,MdOutdoorGrill,MdWifi,MdLocationPin} from"react-icons/md"
import {AiFillCar} from "react-icons/ai"
import{ Ri24HoursFill} from"react-icons/ri"
import { IoLogoWhatsapp } from 'react-icons/io'
import { ListGroupItem } from 'react-bootstrap'
const info = () => {
  return (
    <div  class="w-auto p-3" >
         <ListGroupItem> <Ri24HoursFill/>  Recepción 24 horas</ListGroupItem>
 
         <ListGroupItem><MdPets/>  Aceptamos mascotas </ListGroupItem>
         <ListGroupItem> <AiFillCar/> Estacionamiento gratuito</ListGroupItem>
         <ListGroupItem><MdOutdoorGrill/> Parrilla</ListGroupItem>
         <ListGroupItem><MdWifi/> Wifi </ListGroupItem>
      

      
    </div>
  )
}

export default info