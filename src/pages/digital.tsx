
import React from "react";
import FetchOeuvreByCategorie from "../component/fetchOuvreByCategorie";
const Digital: React.FC = () => {
    const presentation="Presentation digital"
    const text="L'artiste digital manie Krita avec habileté, fusionnant couleur et émotion pour créer des œuvres captivantes. Chaque coup de pinceau virtuel donne vie à ses idées, transformant l'écran en un univers artistique vibrant et saisissant."
    
    
   
        const categorieUrl = "/api/categories/2"
        const title="digital"
    
        return(
            <>
    
            <FetchOeuvreByCategorie categorieUrl={categorieUrl} title={title} presentation={presentation} text={text} ></FetchOeuvreByCategorie>
            </>
        )
        }

export default Digital
