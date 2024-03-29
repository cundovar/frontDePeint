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
        <span className="border p-1">
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