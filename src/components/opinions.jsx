import React from 'react'
import { Carousel} from 'react-bootstrap';
import "./images.css"
const Opinions = () => {
  return (
  
    <Carousel class= "carousel carousel-dark slide" >
      <h2> Reseñas</h2>
    <Carousel.Item>
      <img 
     class="d-block w-100"
        src="opinion1.png"
        alt="First slide"
       
      /> <Carousel.Caption>
       
      <p>el Buho</p>
    </Carousel.Caption>
   
    </Carousel.Item>
    <Carousel.Item>
      <img
       class="d-block w-100"
        src="opinion2.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
       class="d-block w-100"
        src="opinion3.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
       class="d-block w-100"
        src="opinion4.png"
        alt="First slide"
       
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
   class="d-block w-100"
        src="opinion5.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
     class="d-block w-100"
        src="opinion6.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
    class="d-block w-100"
        src="opinion7.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>

    <Carousel.Item>
      <img
       class="d-block w-100"
        src="opinion8.png"
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
      class="d-block w-100"
        src="opinion9.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
      class="d-block w-100"
        src="opinion10.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>
 

);
}
  

export default Opinions