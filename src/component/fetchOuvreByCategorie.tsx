import React from "react";
import { Skeleton } from "@mui/material";
import { URLimage } from "../utils/varaibleFetch";
import { Link } from "react-router-dom";
import { UrlPeintureDigital } from "../utils/varaibleFetch";
import FetchArticles from "../utils/fetcharticle";
import LikeButton from "./common/heart/heart";
import { any } from "prop-types";




interface Props {
  categorieUrl: string;
  title:string;
  presentation:string;
  text:string
  
}

const FetchOeuvreByCategorie: React.FC<Props> = ({ categorieUrl,title,presentation,text }) => {

  const { articles, isLoading } = FetchArticles(UrlPeintureDigital, categorieUrl);
  
 

  
  return (
    <div className="overflow-y-scroll max-xl:flex max-xl:flex-wrap max-xl:mt-20 h-full max-xl:over pb-96">


    <div className=" flex max-xl:flex-col max-xl:w-full max-sm:hidden  max-xl:justify-center max-xl:items-center   xl:w-4/12 h-1/2 xl:absolute left-0 top-0 ">
          <div className="w-4/12 "></div>
          <div className="w-8/12  space-y-5 max-lg:justify-end max-sm:flex-row max-sm:w-full flex flex-col justify-center items-center ">
      
            <div className="text-6xl title_acccueil max-sm:invisible font-title">{title} </div>
          </div>
    </div>

     <div className="xl:w-5/12  md:w-1/2 2xl:w-4/12 max-xl:mb-10  xl:absolute max-sm:relative  max-sm:justify-end xl:mb-20 2xl:mb-0  text_left flex xl:justify-center xl:items-center bottom-0 left-0  lg:p-16 max-sm:w-full" >
      <div className="">
       <h1 className="text-2xl border-b-8 rounded-lg border-cyan-700"> {presentation} </h1>
       <p>{text} </p>
        
      </div>
     </div>

     <div className=" xl:absolute  right-0 xl:w-8/12 xl:h-full text_right max-lg:w-full md:w-1/2 max-sm:relative  xl:overflow-y-scroll">

      <div className="text-4xl sm:invisible title_acccueil font-title">{title}  </div>
      <ul className='flex  flex-wrap h-full w-full  justify-center items-end '>
        {isLoading ? (
          <div className="flex gap-5 flex-wrap justify-center items-center ">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className=" gap-2 w-96 h-96">
           
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={350} height={300} />
              </div>
            ))}
          </div>
        ) : (
          articles.map((article: any) => (
            <li className=' flex justify-center items-center  ' key={article.id}>
              <div>
                {/* <p>titre: {article.name}</p> */}
                
                <div className='hover01 scrollAnim  p-2 cursor-pointer  '>
            
                  <figure className=" relative scrollAnim   overflow-hidden">
                  <Link to={`/oeuvre/${article.id}`}>
                  <img
                    style={{ width: '20rem' }}
                    alt={article.name}
                    src={`${URLimage}/${article.image}`}
                    className=" scrollAnim  hover:opacity-75 "
                  />
                  </Link>
                    <LikeButton likesCount={article.likes ? article.likes.length : 0} oeuvreId={article.id} />

                  </figure>
                  

                </div>
              </div>
       
            </li>
          ))
        )}
      </ul>
      <div className="h-96"></div>
     </div>


    </div>
  );
};

export default FetchOeuvreByCategorie