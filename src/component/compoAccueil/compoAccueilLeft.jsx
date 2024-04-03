import React from "react";



const CompoAccueilLeft=()=>{



    return(
        <div className="article_left h-full overflow-y-scroll  ">
 <div class="one   ">
    <div className="w-full h-1/2 " >
        <h1 className="text-8xl font-title max-sm:text-2xl max-lg:text-4xl">DIGITAL</h1>
    </div>
    <div className="w-full h-1/2 ">

        <h1 className="text-8xl flex justify-end font-title max-sm:text-2xl max-sm:mr-10 max-lg:text-4xl ">PEINTURE</h1>
    </div>

    
 </div>
  <div class="two  "></div>
  <div class="three  bg-zinc-600">
    <img className="h-full  object-cover" src="./images/accueil/akira.png"/>
  </div>
  <div class="four  bg-zinc-600">
  <img className="h-full w-full object-cover" src="./images/accueil/viet.png"/>
  </div>
  <div class="five "></div>
  <div class="sept  bg-zinc-600">7</div>
  <div class="huit ">
  <img className="h-full object-cover" src="./images/accueil/bp.png"/>
  </div>
  <div class="neuf  flex justify-center">
    
  <img className="h-full object-cover" src="./images/accueil/ville.png"/>
  </div>
  <div class="dix border bg-zinc-600 invisible">10</div>
  <div class="onze border bg-zinc-600 invisible">11</div>
  <div class="douze border bg-zinc-600 invisible">12</div>
  <div class="treize border bg-zinc-600 invisible">13</div>
  <div class="quatorze  bg-zinc-600 ">

  <img className="h-full object-cover" src="./images/accueil/jeune-fille.png"/>

  </div>

        </div>
    )
}

export default CompoAccueilLeft