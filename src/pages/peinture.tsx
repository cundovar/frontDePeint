
import React from "react";
import FetchOeuvreByCategorie from "../component/fetchOuvreByCategorie";

const Peinture: React.FC = () => {

    const text="text de peinture"
    const presentation="text presentation peinture"

    
    
    
   
        const categorieUrl = "/api/categories/1"
        const title="peinture"
    
        return(
            <>
    
            <FetchOeuvreByCategorie categorieUrl={categorieUrl} title={title} text={text} presentation={presentation} ></FetchOeuvreByCategorie>
            </>
        )
        }

export default Peinture
