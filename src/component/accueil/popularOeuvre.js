// src/components/PopularArticles.js

import React, { useEffect, useState } from "react";
import { URLimage, urlBase, urlBase1 } from "../../utils/varaibleFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const ArticleItem = ({ article }) => {
  const [show, setShow] = useState(false);

  const onEnter = () => setShow(true);
  const onLeave = () => setShow(false);


  return (
    <div className="realtive  h-96 -200 ">

    <Link   onMouseEnter={onEnter}
    onMouseLeave={onLeave} to={`/oeuvre/${article.id}`}>
   
        <img
          className=" w-full m-auto object-contain h-full "
          src={`${URLimage}/${article.image}`}
          alt={article.name}
        />
        <div
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          className={`absolute  flex items-center justify-center   ${show ? "inset-x-0 bottom-5" : "hidden -bottom-10"}`}
        >
          <span className="bg-white text-black bg-opacity-75 p-2 rounded">
            {article.name}{" "}
          </span>
        </div>
  
    </Link>


    </div>
  );
};
const PopularOeuvres = () => {
  const [articles, setArticles] = useState([]);

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
      <h1 className="text-5xl mb-10 font-title max-sm:mt-10 ">Oeuvres Populaires</h1>

      <Slider {...settings} className=" m-auto xl:w-2/3 ">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
          </Slider>


    
    </>
  );
};

export default PopularOeuvres;
