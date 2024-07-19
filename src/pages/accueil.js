import React, { useEffect, useState } from "react";
import CompoAccueilLeft from "../component/compoAccueil/compoAccueilLeft";
import { URLPageAccueil } from "../utils/varaibleFetch";
import axios from "axios";
import Breadcrumb from "../component/common/breadcrumb";



export default function Accueil() {
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
    <>
    
    <div className="overflow-hidden max-xl:mt-10  w-full h-full">
      <Breadcrumb />
    <section className="w-11/12  flex absolute  max-xl:flex-col-reverse overflow-y-scroll    max-xl:mt-10 max-xl:pb-96 h-full max-xl:w-full  total right-0 ">
    
      <article className=" relative   lg:w-4/12  max-xl:w-full h-full   left flex flex-col items-end justify-end  ">
     
        <div className="h-full w-full flex justify-center  items-center invisible xl:visible ">
          <h2 className="2xl:text-8xl xl:text-6xl   vertical ">ART</h2>
        </div>
        <div className="flex h-full  items-center xl:justify-end text_left max-sm:mt-0 p-3 max-md:pr-3   max-lg:mt-20 max-lg:mr-10 max-md:mr-0 max-xl:w-full   ">
          <p className="text-justify 2xl:p-10 text-md xl:p-2   text_left_div ">
            {article.texte}
          </p>
        </div>
      </article>
      
      <article className="   relative  w-full scroll  xl:w-8/12 xl:overflow-y-scroll    text_right">
        <CompoAccueilLeft />
      </article>



    </section>



    </div>
    


   
    
    
    </>
  );
}
