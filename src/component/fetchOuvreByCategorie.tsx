import React, { useEffect, useState } from "react";


import { Skeleton } from "@mui/material";

import { Link } from "react-router-dom";
import { UrlPeintureDigital } from "../utils/varaibleFetch";
import FetchArticles from "../utils/fetcharticle";




interface Props {
  categorieUrl: string;
  title:string;
  presentation:string;
  text:string
}

const FetchOeuvreByCategorie: React.FC<Props> = ({ categorieUrl,title,presentation,text }) => {
  const { articles, isLoading } = FetchArticles(UrlPeintureDigital, categorieUrl);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); 
  const handleCategoryChange = (category: string) => {
    // Mettre à jour les catégories sélectionnées
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category)); // Si la catégorie est déjà sélectionnée, la retirer
    } else {
      setSelectedCategories([...selectedCategories, category]); // Sinon, l'ajouter aux catégories sélectionnées
    }
  };

  
  return (
    <>
    <div className="border flex max-sm:w-full max-sm:hidden  border-lime-500 w-4/12 h-1/2 absolute left-0 top-0 ">
          <div className="w-4/12 "></div>
          <div className="w-8/12  space-y-5 max-sm:flex-row max-sm:w-full flex flex-col justify-center items-center ">
         <div className="w-20 h-20 bg-red-700"></div>
         <div className="w-20 h-20 bg-red-700"></div>
          </div>
    </div>
     <div className="w-4/12 h-1/2 absolute max-sm:relative max-sm:justify-end  text_left flex justify-center items-center border-amber-600 bottom-0 left-0  lg:p-20 max-sm:w-full" >
      <div className="max-sm:w-1/2">
       <h1 className="text-2xl"> {presentation} </h1>
       <p>{text} </p>
        
      </div>
     </div>
     <div className="absolute right-0 w-8/12 h-full text_right max-sm:w-full max-sm:relative   overflow-y-scroll">

      <div className="text-4xl font-title">{title} </div>
      <ul className='flex flex-wrap h-full w-full  justify-center items-end '>
        {isLoading ? (
          <div className="flex space-x-5  ">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className=" gap-2 w-96 h-96">
                <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={350} height={200} />
              </div>
            ))}
          </div>
        ) : (
          articles.map((article: any) => (
            <li className=' flex justify-center items-center  ' key={article.id}>
              <div>
                {/* <p>titre: {article.name}</p> */}
                
                <div className='p-2 cursor-pointer  '>
                  <Link to={`/oeuvre/${article.id}`}>
            

                  <img
                    style={{ width: '20rem' }}
                    alt={article.name}
                    src={`http://localhost:8020/images/oeuvre/${article.image}`}
                    className=" hover:opacity-75 "
                  />
                  

                  </Link>
                </div>
              </div>
              {/* <div className="">
                {article.description ? (
                    <p> description : {article.description} </p>
                ):(
                  <div>
                  <p> Cette oeuvre n'a pas de description</p>

                  </div>
                )}
              </div> */}
            </li>
          ))
        )}
      </ul>
     </div>
    </>
  );
};

export default FetchOeuvreByCategorie