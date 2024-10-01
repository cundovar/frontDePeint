
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from '@mui/icons-material/Close';
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
    <div className="2xl:w-8/12  xl:w-10/12 relative  max-sm:w-full  ">

      <span className="close absolute close  bg-stone-700 rounded-full h-16 w-16 flex items-center justify-center -top-10  -right-10 z-50 hover:bg-stone-600 cursor-pointer p-5  "
        onClick={closeModal}
      >
    <CloseIcon fontSize="large"/>
        {/* <FontAwesomeIcon className="text-4xl hover:bg-stone-300 transition-colors ease-in-out delay-150 hover:text-orange-500 p-2 rounded-full h-10 w-10" icon={faXmark} style={{color: "#ffffff",}}  /> */}
      </span>

      <div className=" relative    ">
        <Slider {...settings} ref={sliderRef} className="bh-full   ">
          <div className="  h-[42rem] w-full   ">

            <img className=" b m-auto object-contain w-full  h-[42rem]" src={image} alt="img-modal" />


          </div>


          <div className=" max-xl:mt-10  h-full w-full ">

          {image2}

          </div>



        </Slider>

      </div>

    </div>
  )
}


export default Modal