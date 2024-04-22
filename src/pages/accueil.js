

import React, { useEffect, useState } from 'react'
import CompoAccueilLeft from '../component/compoAccueil/compoAccueilLeft'
import { URLPageAccueil } from '../utils/varaibleFetch';
import axios from 'axios';



export default function Accueil() {

    const [article,setARticle]=useState("")
    useEffect(()=>{

        axios.get(URLPageAccueil)
        .then(response => {
          const data = response.data;
          setARticle(data['hydra:member'][0] )

       
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données :', error);
        });


    })

return(
    <section className="w-11/12 flex lg:h-full absolute borde total right-0 ">
        
        <article className=' w-4/12 borde h-full left flex flex-col items-end justify-end '>
<div className='h-full w-full flex justify-center  items-center invisible 2xl:visible '>
    <h2 className='text-8xl vertical '>ART</h2>
 
</div>
<div className='flex  items-center justify-end text_left  max-lg:mt-20 max-lg:mr-10 max-md:mr-0 max-lg:w-full   '>
    <p className='text-justify 2xl:p-10 text-md xl:p-2 text_left_div '>
    {/* Né en 1980, Nathan roule sa bosse dans la région parisienne, qu’il trouve jolie mais un peu grise. Il y fait de multiples boulots qui l’entraînent vers les enfants puis la logistique d’une chocolaterie... Pendant ce temps formateur et enrichissant, il élabore, de ci de là, quelques peintures, inspirées par la mégalopole, avec plein de couleurs ! Autodidacte, il s’adonne au montage photo et, maintenant, à la peinture digitale. Nathan participera à plusieurs expositions personnelles et collectives ainsi qu’au fanzine L’encornée Synthétique du collectif d’artistes Du Bout Des Étangs où il s’impliquera pendant quelques belles années ! Neva est son premier album. */}
    {article.texte}
    </p>

</div>

        </article>
        <article className=' w-full lg:w-8/12 h-full lg:overflow-y-scroll text_right'>
            <CompoAccueilLeft/>
        </article>
    </section>
)

}