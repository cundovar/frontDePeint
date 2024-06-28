
import React from "react";
import Breadcrumb from "../component/common/breadcrumb";





const Contact = () => {



  return (
    <div className="  min-h-full z-20 flex max-xl:flex-col max-lg:items-center justify-center    md:ml-28 overflow-hidden max-md:pt-8 max-lg:mb-10 max-lg:overflow-y-scroll max-sm:mt-9   2xl:pr-10">
 <Breadcrumb/>
      <div className="w-2/3 max-md:w-full max-xl:items-center   flex flex-col justify-center">
        <div className="mb-10 xl:ml-3 xl:w-2/3 2xl:w-full p-2 2xl:justify-start flex justify-end  ">
          <h1 className=" text-4xl  font-title  ">contact</h1>
        </div>
        <div className="flex   max-md:w-full  h-96   max-md:flex-col max-md:space-y-5 max-md:mt-5  max-md:items-center max-md:m-auto   justify-center item-center ">
          <div className="w-1/2 flex-col space-y-10   flex justify-center items-center ">
       
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
