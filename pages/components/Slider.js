import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <Carousel dynamicHeight={true} infiniteLoop={true} swipeable={true}>
      <div className="md:h-[680px]">
        <img src="https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" alt="" />
        
      </div>

      <div className="md:h-[680px] h-[300px]">
        <img src="https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" alt="" />
        
      </div>
      
      <div className="md:h-[680px]">
        <img src="https://images.pexels.com/photos/159632/school-children-happy-food-159632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" alt="" />
        
      </div>
      
    </Carousel>
  );
}

export default Slider;
