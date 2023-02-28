import React from 'react'
import { Carousel} from 'react-bootstrap';
import "./images.css"
const Opinions = () => {
  return (
    <Carousel>
      <h2> Reseñas</h2>
    <Carousel.Item>
      <img 
       className='block '
        src="opinion1.png"
        alt="First slide"
       
      /> <Carousel.Caption>
       
      <p>el Buho</p>
    </Carousel.Caption>
   
    </Carousel.Item>
    <Carousel.Item>
      <img1
        className="block "
        src="opinion2.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion3.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion4.png"
        alt="First slide"
       
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion5.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion6.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion7.png"
        alt="First slide"
       
      />
     
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="block "
        src="opinion8.png"
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion9.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="block "
        src="opinion10.png"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>

);
}
  

export default Opinions