import Carousel from 'react-bootstrap/Carousel';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Button } from 'react-bootstrap';
function CarouselEx() {
  return (
  <> <Button
    href="https://wa.me/5493541677768"

target="_blank"
text= "chatea con nosotros"
title='chatea con nosotros'>  <IoLogoWhatsapp /> Consultanos!
    
    </Button>
    <Carousel>
      
      <Carousel.Item>
        <img
         className='block '
          src="01.png"
          alt="First slide"
         
        /> <Carousel.Caption>
         
        <p>el Buho</p>
      </Carousel.Caption>
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="02.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
         
          <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="2.jpg"
          alt="First slide"
         
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="3.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
         
          <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="4.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
         
          <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="5.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
         
          <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="6.jpg"
          alt="First slide"
         
        />
        <Carousel.Caption>
         
          <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="block "
          src="7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        <p>el Buho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block "
          src="8.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p>el Buho</p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </> 
  );
}

export default CarouselEx;
   

