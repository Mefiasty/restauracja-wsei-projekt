import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Home = () => {
  const slideImages = [
    'img\slide1.jpg',
    'img\slide2.jpg',
    'img\slide3.jpg'
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  }


  return (
    <div className=''>
      <div></div>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img src="img\slide1.jpg" alt="" className='object-cover object-center' style={{ 'height': '50vh', 'width': '250vh', 'border-radius': '10px' }} />
          </div>

          <div className="each-slide">
            <img src="img\slide2.jpg" alt="" className='object-cover object-center' style={{ 'height': '50vh', 'width': '250vh', 'border-radius': '10px' }} />
          </div>

          <div className="each-slide">
            <img src="img\slide3.jpg" alt="" className='object-cover object-center' style={{ 'height': '50vh', 'width': '250vh', 'border-radius': '10px' }} />
          </div >
        </Slide >
      </div >
      <div></div>
    </div >
  )

};

export default Home;