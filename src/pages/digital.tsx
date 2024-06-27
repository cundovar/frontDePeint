
import React from "react";
import FetchOeuvreByCategorie from "../component/fetchOuvreByCategorie";
import Breadcrumb from "../component/common/breadcrumb";
const Digital: React.FC = () => {
    const presentation="Presentation digital"
    const text="L'artiste digital manie Krita avec habileté, fusionnant couleur et émotion pour créer des œuvres captivantes. Chaque coup de pinceau virtuel donne vie à ses idées, transformant l'écran en un univers artistique vibrant et saisissant."
    
    
   
        const categorieUrl = "/api/categories/2"
        const title="digital"
    
        return(
            <>
      <Breadcrumb />
            <section className=" mt-10 overflow-hidden w-full h-full absolute">
            <FetchOeuvreByCategorie categorieUrl={categorieUrl} title={title} text={text} presentation={presentation} ></FetchOeuvreByCategorie>
            </section>
            </>
        )
        }


export default Digital
