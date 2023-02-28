import button, { Button } from "react-bootstrap"
import { MdLocationPin } from "react-icons/md"
import "./redes.css"
import {GrMail} from "react-icons/gr"
import {MdCardTravel, MdTravelExplore} from"react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
export default function Redes(){
return(
    <div className="butons">
      
   
    
     <Button className="btn btn-primary"
                href="https://wa.me/5493541677768"
       
        target="_blank"
        text= "chatea con nosotros"
       title='chatea con nosotros'>  <IoLogoWhatsapp />
                
                </Button>
        <Button class="btn btn-primary"

                href="mailto:emiliacortegozo@gmail.com ">  <GrMail/>
                </Button>
            <Button 
                href="https://www.booking.com/hotel/ar/el-buho-apartamentos.es-ar.html">
                     <MdCardTravel/>
          
            </Button> 
           
    
            <Button
                href="https://www.google.com/travel/hotels/google%20el%20buho%20departamentos/entity/CgoI8au9kcatnNYGEAE/overview?q=google%20el%20buho%20departamentos&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4308227%2C4597339%2C4718358%2C4723331%2C4731329%2C4757164%2C4810789%2C4810791%2C4814050%2C4861688%2C4864715%2C4865467%2C4874190%2C4886082%2C4886480%2C4893075%2C4902277%2C4903082%2C4905600%2C4906050%2C4910204%2C4920622%2C4923542&hl=es-AR&gl=ar&ssta=1&rp=EPGrvZHGrZzWBjgCQABIAcABAg&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpICioSJjIkMHg5NDJkNjdiNDZmMWJhZjAzOjB4NmFjNzE2YzYyMmY1NWYxGgASGhIUCgcI5g8QDBgOEgcI5g8QDBgPGAEyAhAAKgQKABoA">
                <MdTravelExplore/></Button>
              
               
        </div>)
    
}