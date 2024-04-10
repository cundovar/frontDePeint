import React, { useEffect, useState } from "react";
import axios from 'axios';
import { URLImageAccueil, URLPageAccueil } from "../../utils/varaibleFetch";
import { Link } from "react-router-dom";



const CompoAccueilLeft=()=>{

    const [article,setARticle]=useState({})
    useEffect(()=>{

        axios.get(URLPageAccueil)
        .then(response => {
          const data = response.data;
          
          setARticle(data['hydra:member'][0] )
     
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données :', error);
        });


    },[])

    if (!article || Object.keys(article).length === 0) {
        return <div>Chargement...</div>;
    }
    return(
        <div className="article_left h-full overflow-y-scroll  ">
 <div className="one   ">
    <div className="w-full h-1/2 " >
        <h1 className="text-8xl font-title max-sm:text-2xl max-lg:text-4xl">DIGITAL</h1>
        {/* <img src={article}/> */}
      
    </div>
    <div className="w-full h-1/2 ">

        <h1 className="text-8xl flex justify-end font-title max-sm:text-2xl max-sm:mr-10 max-lg:text-4xl ">PEINTURE</h1>
    </div>

    
 </div>
  <div className="two  "></div>
  <div className="three  bg-zinc-600">
  <Link to="/peinture">
    <img className="h-full  object-cover" src= {`${URLImageAccueil}${article.img1}`}/>
    </Link>
 
  </div>
  <div className="four  bg-zinc-600">
  <Link to="/peinture">
  <img className="h-full w-full object-cover" src={`${URLImageAccueil}${article.img3}`}/>
  </Link>
  </div>
  <div className="five "></div>
  <div className="sept  bg-zinc-600">7</div>
  <div className="huit ">
    <Link to="/peinture">
  <img className="h-full object-cover" src={`${URLImageAccueil}${article.img2}`}/>

    </Link>
  </div>
  <div className="neuf  flex justify-center">
  <Link to="/digital">
  <img className="h-full object-cover" src={`${URLImageAccueil}${article.img5}`}/>
  </Link>
  </div>
  <div className="dix border bg-zinc-600 invisible">10</div>
  <div className="onze border bg-zinc-600 invisible">11</div>
  <div className="douze border bg-zinc-600 invisible">12</div>
  <div className="treize border bg-zinc-600 invisible">13</div>
  <div className="quatorze  bg-zinc-600 ">

  <img className="h-full object-cover" src={`${URLImageAccueil}${article.img4}`}/>

  </div>

        </div>
    )
}

export default CompoAccueilLeft