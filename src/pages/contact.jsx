import { Skeleton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// import EmailIcon from "@mui/icons-material/Email";


const Contact = () => {
  const item = {
    imageSrc: "images/moi.jpg",
  };


  return (
    <div className="w-full  min-h-full z-20 flex max-lg:flex-col max-lg:items-center justify-center   max-md:pb-40  md:ml-28 overflow-hidden max-md:pt-40 max-lg:mb-10 max-lg:overflow-y-scroll max-sm:mt-9   2xl:pr-10">
      {/* <div className="w-1/3 flex justify-center  max-md:w-full  max-md:mt-56   mt items-center h-full">
        <div className="w-96 h-96 shadow-2xl  flex justify-center  items-center">
          {item ? (
            <div className=" shadow-2xl  w-56 h-56">
              <img src={item.imageSrc} alt="photo présentation" />
            </div>
          ) : (
            <div className=" shadow-2xl  w-56 h-56">
              <Skeleton variant="rectangular" />
            </div>
          )}
        </div>
      </div> */}
      <div className="w-2/3 max-md:w-full max-md:items-center  max-sm:mt-10 flex flex-col justify-center">
        <div className="mb-10 xl:ml-3 xl:w-2/3 2xl:w-full p-2">
          <h1 className=" text-4xl  font-title ">contact</h1>
        </div>
        <div className="flex  max-md:w-full  h-96   max-md:flex-col max-md:space-y-5 max-md:mt-5  max-md:items-center max-md:m-auto   justify-center item-center ">
          <div className="w-1/2 flex-col space-y-10 flex justify-center items-center ">
            {/* <div className=" p-3 pl-0">
              <p className="text-2xl">JAVIER VARAS</p>
              <p className="text-xl">
                intégrateur-Devéloppeur front-end-Freelance
              </p>
            </div>
            <div className="hover:text-slate-400 ">
              <NavLink to="/">
                <p>https://pix.varascundo.com/</p>
              </NavLink>
            </div> */}
            <p className="text-xl">
                MONTREUIL (93)</p>
                <p className="text-xl">nathanV@gmail.com</p>
          </div>

       
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
