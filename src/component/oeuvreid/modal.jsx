
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Modal = ({ closeModal, image, image2 }) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <div className="2xl:w-6/12 w-9/12 xl:w-4/12   relative  max-sm:w-full h-5/6  ">

      <span className="close absolute close border  bg-stone-700 rounded-full h-16 w-16 flex items-center justify-center -top-10  -right-10 z-50 hover:bg-stone-600 cursor-pointer p-5  "
        onClick={closeModal}
      >
        close
        {/* <FontAwesomeIcon className="text-4xl hover:bg-stone-300 transition-colors ease-in-out delay-150 hover:text-orange-500 p-2 rounded-full h-10 w-10" icon={faXmark} style={{color: "#ffffff",}}  /> */}
      </span>

      <div className=" relative h-full  ">
        <Slider {...settings} ref={sliderRef} className="bh-full  f ">
          <div className="  h-full w-full f flex justify-center items-center  ">

            <img className=" 2xl:h-[40rem]  max-2xl:h-96 " src={image} alt="img-modal" />


          </div>


          <div className=" 2xl:mt-16 mt-10  ">
            {image2}

          </div>



        </Slider>

      </div>

    </div>
  )
}


export default Modal