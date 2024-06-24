import { Skeleton } from "@mui/material";
import React from "react";



const Encadrement =({name,url,isloading})=>{

return(
    <>
    { isloading ?(
      
        <Skeleton sx={{ bgcolor: 'grey.900' }}  variant="text"/>

    ):(
        <div className="m-10">
    
        <p>
        <span className="mt-1 bg-gradient-to-r  from-cyan-600 p-1">
             {name}
        </span> :
        <span className="ml-2">{url}   </span>
     </p>

        </div>
    ) }
    
    </>
)

}

export default Encadrement