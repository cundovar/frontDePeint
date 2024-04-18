import React from "react";




const ModalCanape=({imagecanap})=>{


    return(
    
        
        <div className="relative    h-full">
        

            <img className="max-h-full object-cover  m-auto" src="../images/large.jpg" alt="canape"/>
            <img className="absolute z-50 inset-x-1/3 z-50  top-2 w-2/12 shadow-2xl shadow-black  " src={imagecanap}  alt="image id absolute"/>

           
        </div>
        
        
      
    )
}

export default ModalCanape