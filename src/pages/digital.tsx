
import React from "react";
import FetchOeuvreByCategorie from "../component/fetchOuvreByCategorie";
const Digital: React.FC = () => {
    const text="text de digital"
    const presentation="text presentation digital"
    
    
   
        const categorieUrl = "/api/categories/2"
        const title="digital"
    
        return(
            <>
    
            <FetchOeuvreByCategorie categorieUrl={categorieUrl} title={title} presentation={presentation} text={text} ></FetchOeuvreByCategorie>
            </>
        )
        }

export default Digital
