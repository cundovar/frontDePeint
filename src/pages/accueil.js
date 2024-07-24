import React, { useEffect, useState } from "react";
import CompoAccueilLeft from "../component/compoAccueil/compoAccueilLeft";
import { URLPageAccueil } from "../utils/varaibleFetch";
import axios from "axios";
import Breadcrumb from "../component/common/breadcrumb";
import PopularOeuvres from "../component/accueil/popularOeuvre";
import CarouselCategories from "../component/accueil/carouselCategorie";



export default function Accueil() {
  // url et données des categories et titre des corousel categorie 
  const urldigital="/api/categories/2"
  const urlpeinture="/api/categories/1"
  const titleDigital="Digital"
  const titlePeinture="Peinture"

  
  const [article, setARticle] = useState("");
  useEffect(() => {
    axios
      .get(URLPageAccueil)
      .then((response) => {
        const data = response.data;
        setARticle(data["hydra:member"][0]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  });

  return (
  
    
    <div className="overflow-hidden max-xl:mt-10  m-auto  h-full">
      <Breadcrumb />
    <section className="w-11/12  flex absolute  max-xl:flex-col-reverse overflow-y-scroll    max-xl:mt-10 max-xl:pb-96 h-full max-xl:w-full  total right-0 ">
    
      <article className=" relative  xl:w-4/12   min-h-96  max-xl:items-center  left flex flex-col items-end justify-end  ">
     
        <div className="h-full w-full flex justify-center  items-center invisible xl:visible ">
          <h2 className="2xl:text-8xl xl:text-6xl   vertical ">ART</h2>
        </div>
        <div className="flex h-full items-center xl:justify-end max-xl:w-1/2   text_left max-sm:mt-0 p-3 max-md:pr-3   max-lg:mt-20 max-lg:mr-10 max-md:mr-0 max-md:w-full   ">
          <p className="text-justify 2xl:p-10 text-md xl:p-2 max-sm:p-2  ">
            {article.texte}
          </p>
        </div>
      </article>
      
      <article className="   relative  w-full scroll  xl:w-8/12 xl:overflow-y-scroll    text_right">
        <CompoAccueilLeft />
      <article className="max-sm:mb-36  ">
        <PopularOeuvres/>
      </article>
      <article className="max-sm:mb-36  ">
        <CarouselCategories categorieUrl={urldigital} title={titleDigital}/>
      </article>
      <article className="max-sm:mb-36  ">
        <CarouselCategories categorieUrl={urlpeinture} title={titlePeinture}/>
      </article>
      </article>



    </section>




    </div>
    


   
    
    
    
  );
}
