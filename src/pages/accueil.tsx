

import React from 'react'
import CompoAccueilLeft from '../component/compoAccueil/compoAccueilLeft'



export default function Accueil() {

return(
    <section className="w-11/12 flex  absolute border total right-0 ">
        <article className=' w-4/12 border h-full left flex flex-col items-end justify-end '>
<div className='h-full w-full flex justify-center  items-center  2xl:visible '>
    <h2 className='text-8xl vertical '>ART</h2>
</div>
<div className='flex border items-center justify-end text_left'>
    <p className='text-justify 2xl:p-10 text-md xl:p-2 text_left_div '>
    Né en 1980, Facundo roule sa bosse dans la région parisienne, qu’il trouve jolie mais un peu grise. Il y fait de multiples boulots qui l’entraînent vers les enfants puis la logistique d’une chocolaterie... Pendant ce temps formateur et enrichissant, il élabore, de ci de là, quelques peintures, inspirées par la mégalopole, avec plein de couleurs ! Autodidacte, il s’adonne au montage photo et, maintenant, à la peinture digitale. Facundo participera à plusieurs expositions personnelles et collectives ainsi qu’au fanzine L’encornée Synthétique du collectif d’artistes Du Bout Des Étangs où il s’impliquera pendant quelques belles années ! Facundo est développeur web en herbe. Neva est son premier album.
    </p>

</div>

        </article>
        <article className=' w-full lg:w-8/12 h-full   text_right'>
            <CompoAccueilLeft/>
        </article>
    </section>
)

}