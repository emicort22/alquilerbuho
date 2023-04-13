import React from 'react'
import { Carousel} from 'react-bootstrap';
import "./images.css"
const Opinions = () => {
  return (
    
    <Carousel class= "carousel carousel-dark" >
    
    <Carousel.Item>
      <img 
     class="w-80"
        src="opinion1.png"
        alt="First slide"
       
      /> <Carousel.Caption>
       
      <p>el Buho</p>
    </Carousel.Caption>
   
    </Carousel.Item>
    <Carousel.Item>
      <img
       class=" w-80"
        src="opinion2.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
       class=" w-80"
        src="opinion3.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
       class="w-80"
        src="opinion4.png"
        alt="First slide"
       
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
   class="w-80"
        src="opinion5.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
     class="w-80"
        src="opinion6.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
    class="w-80"
        src="opinion7.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>

    <Carousel.Item>
      <img
       class="w-80"
        src="opinion8.png"
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
      class="w-80"
        src="opinion9.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
      class="w-80"
        src="opinion10.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>
 

);
}
  

export default Opinions