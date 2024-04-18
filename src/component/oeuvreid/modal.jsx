
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Modal=({closeModal,image,image2} )=>{


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



    return(
        <div className="2xl:w-6/12 w-9/12 xl:w-4/12  relative  max-sm:w-full   ">

<span className="close absolute  border bg-stone-700 rounded-full h-16 w-16 flex items-center justify-center -top-10 2xl:top-5  -right-10 z-50 hover:bg-stone-600 cursor-pointer p-5  "
                onClick={closeModal}
                >
                    close
  {/* <FontAwesomeIcon className="text-4xl hover:bg-stone-300 transition-colors ease-in-out delay-150 hover:text-orange-500 p-2 rounded-full h-10 w-10" icon={faXmark} style={{color: "#ffffff",}}  /> */}
  </span>

  <div className="modal-content relative   max-h-full">
                <Slider {...settings}  ref={sliderRef}>
                    <div className="   "  >
    <img className="  m-auto   " src={image} alt="img-modal"/>                                

                    </div>
                    <div className="  mt-20 ">
   {image2} 

                    </div>
  
 

                    </Slider>

</div>

        </div>
    )
}


export default Modal