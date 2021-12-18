import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const SlideShow = ({ game, screenshots }) => {

  const handleDragStart = (e) => e.preventDefault();

  const items =
    screenshots.map((screenshot, index) => (
      <img style={{width: '100%', borderRadius: '10px'}} key={index} src={screenshot.image} alt={`Screenshot ${index + 1} of the game ${game}`} onDragStart={handleDragStart} />
    ))

  return (
    <AliceCarousel mouseTracking autoPlay={true} autoPlayInterval={3000} disableButtonsControls={true} infinite={true} items={items} />
  )
}

export default SlideShow