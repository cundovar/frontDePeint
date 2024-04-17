import React from "react";




const ModalCanape=({imagecanap})=>{


    return(
        <div>
        
        <div className="relative">
            <img className="z-20" src="../images/large.jpg" alt="canape"/>
            <img className="absolute z-50 top-0 left-0  w-20 h-20" src={imagecanap}  alt="image id absolute"/>
        </div>
        
        
        </div>
    )
}

export default ModalCanape