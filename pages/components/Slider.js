import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <Carousel dynamicHeight={true} infiniteLoop={true} swipeable={true}>
      <div className="md:h-[680px]">
        <img src="https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" />
        
      </div>
      <div className="md:h-[680px]">
        <img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" />
        
      </div>
      <div className="md:h-[680px]">
        <img src="https://images.pexels.com/photos/159632/school-children-happy-food-159632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="md:h-full" />
        
      </div>
      
    </Carousel>
  );
}

export default Slider;
