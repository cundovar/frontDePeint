// src/components/PopularArticles.js

import React, { useEffect, useState } from "react";
import { URLimage, urlBase, urlBase1 } from "../../utils/varaibleFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LikeButton from "../common/heart/heart";
const ArticleItem = ({ article }) => {
  const [show, setShow] = useState(false);

  const onEnter = () => setShow(true);
  const onLeave = () => setShow(false);


  return (
    <div className="relative   h-96  ">

    <Link   onMouseEnter={onEnter}
    onMouseLeave={onLeave} to={`/oeuvre/${article.id}`}>
   
        <LikeButton likesCount={article.likes } oeuvreId={article.id} />
        <img
          className=" w-full m-auto object-contain h-full "
          src={`${URLimage}/${article.image}`}
          alt={article.name}
        />
        <div className="  absolute top-1/2 transform -translate-y-1/2    bg-gray-800 p-2 rounded-md">
            <h3 className=" title_acccueil verticalPopular">{article.name} </h3></div>
        <div
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          className={`absolute  flex items-center justify-center   ${show ? "inset-x-0 bottom-5" : "hidden -bottom-10"}`}
        >
          <span className="bg-white  text-black bg-opacity-75 p-2 rounded">
            

            {article.description}
            
           
          </span>
        </div>
  
    </Link>


    </div>
  );
};
const PopularOeuvres = () => {
  const [oeuvres, setArticles] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  useEffect(() => {
    const fetchPopularArticles = async () => {
      try {
        const response = await fetch(`${urlBase}/oeuvres/popular`);

        // Vérifiez si la réponse est au format JSON
        const contentType = response.headers.get("content-type");
        console.log("data", contentType);
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("La réponse n'est pas au format JSON");
        }

        const data = await response.json();
        setArticles(data);
        console.log("datapopular", data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des articles populaires:",
          error
        );
      }
    };

    fetchPopularArticles();
  }, []); // Utiliser un tableau vide pour ne lancer qu'une seule fois l'effet

  return (
    <>
      <h1 className="text-5xl mb-10 max-xl:mt-5 font-title max-sm:mt-10 ">Oeuvres Populaires</h1>

      <Slider {...settings} className=" m-auto lg:w-2/3 w-5/6 xl:w-96  ">
        {oeuvres.map((oeuvre) => (
          <ArticleItem key={oeuvre.id} article={oeuvre} />
        ))}
          </Slider>

    </>
  );
};

export default PopularOeuvres;
