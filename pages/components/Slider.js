import Image from "next/image";
import React from "react";

function Slider() {
  
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner md:h-[680px] select-none">
        <div className="carousel-item active w-screen md:h-[100%] relative">
          <Image src="https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" layout="fill"  className="d-block " alt="..." />
        </div>
        <div className="carousel-item w-screen h-[100%] relative ">
          <Image src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" layout="fill" className="d-block " alt="..." />
        </div>
        <div className="carousel-item w-screen h-[100%] relative">
          <Image src="https://images.pexels.com/photos/159632/school-children-happy-food-159632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" layout="fill" className="d-block " alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
