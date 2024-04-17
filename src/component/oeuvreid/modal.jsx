
import Slider from "react-slick";
import { useRef } from "react";

const Modal=({closeModal,image,image2} )=>{


    const settings = {
        dots: true,
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
        <div className="modal w-1/3 relative  max-sm:w-full  mt-10 max-sm:mt-50  max-sm:-left:5">

<span className="close absolute -top-20 -right-7 p-5  "
                onClick={closeModal}
                >
                    close
  {/* <FontAwesomeIcon className="text-4xl hover:bg-stone-300 transition-colors ease-in-out delay-150 hover:text-orange-500 p-2 rounded-full h-10 w-10" icon={faXmark} style={{color: "#ffffff",}}  /> */}
  </span>

  <div className="modal-content relative">
                <Slider {...settings}  ref={sliderRef}>
    <img src={image} alt="img-modal"/>
    <div>{image2} </div>
 

                    </Slider>

</div>

        </div>
    )
}


export default Modal