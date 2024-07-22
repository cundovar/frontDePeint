import React from "react";
import Slider from "react-slick";
import { URLimage } from "../../utils/varaibleFetch";



const CarouselOeuvrepopular=(image,name,show)=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <>
         <Slider {...settings}>
         <li
     
        className="relative "
      >
        <img
          className="w-52 m-5"
          src={`${URLimage}/${image}`}
          alt={name}
        />
        <div
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          className={`absolute  flex items-center justify-center   ${show ? "inset-x-0 bottom-5" : "hidden -bottom-10"}`}
        >
          <span className="bg-white text-black bg-opacity-75 p-2 rounded">
            {name}{" "}
          </span>
        </div>
      </li>
            
         </Slider>
        </>
    )
}


export default CarouselOeuvrepopular