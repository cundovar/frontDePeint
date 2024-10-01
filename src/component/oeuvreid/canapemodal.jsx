import React from "react";




const ModalCanape=({imagecanap})=>{


    return(
    
        
        <div className=" w-full m-auto  h-[42rem] flex justify-center items-center ">
        
               <div className="relative h-[42rem] ">

            <img className=" m-auto  h-[42rem] w-full " src="../images/large.jpg" alt="canape"/>
            <img className="absolute  inset-x-1/3 z-50  top-[4%]  w-2/12 shadow-2xl shadow-black  " src={imagecanap}  alt="image id absolute"/>
               </div>

           
        </div>
        
        
      
    )
}

export default ModalCanape