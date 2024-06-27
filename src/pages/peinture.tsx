
import React from "react";
import FetchOeuvreByCategorie from "../component/fetchOuvreByCategorie";
import Breadcrumb from "../component/common/breadcrumb";

const Peinture: React.FC = () => {

    const presentation="Presentation peinture"
    const text="L'artiste fusionne photo et peinture, maniant la bombe aérosol et l'acrylique avec talent. Chaque détail capturé sur la photo devient une toile d'expression. À travers son art, l'image figée prend vie, transformée en une œuvre dynamique et saisissante."

    
    
    
   
        const categorieUrl = "/api/categories/1"
        const title="peinture"
    
        return(
            <>
      <Breadcrumb />
            <section className=" mt-10 overflow-hidden w-full h-full absolute">
            <FetchOeuvreByCategorie categorieUrl={categorieUrl} title={title} text={text} presentation={presentation} ></FetchOeuvreByCategorie>
            </section>
            </>
        )
        }

export default Peinture
