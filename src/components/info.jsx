import React from 'react'
import "./info.css"
import {MdPets,MdOutdoorGrill,MdWifi,MdLocationPin} from"react-icons/md"
import {AiFillCar} from "react-icons/ai"
import{ Ri24HoursFill} from"react-icons/ri"

const info = () => {
  return (
    <div className='infocontainer'>
        

<h5><MdPets/>  Aceptamos mascotas </h5>
<h5><MdOutdoorGrill/> Parrilla</h5>
<h5><MdWifi/>Wifi gratis</h5>
<h5> <AiFillCar/> Estacionamiento gratuito</h5>

 <h5><Ri24HoursFill/>Recepción 24 horas</h5>

 <h5> <MdLocationPin/> 281 Río Cuarto, Villa Carlos Paz</h5> 
    </div>
  )
}

export default info