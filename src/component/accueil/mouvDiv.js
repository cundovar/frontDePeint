import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import FetchArticles from "../../utils/fetcharticle";
import { URLimage, UrlPeintureDigital } from "../../utils/varaibleFetch";
import { Link } from "react-router-dom";
import { createTrue } from "typescript";

const MovingDivs = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const { articles } = FetchArticles(UrlPeintureDigital);
  const [hoveredArticleId, setHoveredArticleId] = useState();
  console.log("article", articles);
  useGSAP(() => {
    animationRef.current = gsap.to(containerRef.current, {
      x: "300vw",
      repeat: -1,
      ease: "linear",
      duration: 50,
      stagger: 0.2,
    });
  });

  const handleMouseEnter = () => {
    animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current.resume();
  };

  const handleMouseOverArticle = (id) => {
    setHoveredArticleId(id);
    console.log("tt", hoveredArticleId);
  };

  const handleMouseOutArticle = () => {
    setHoveredArticleId(null);
  };
  return (
    <div
      ref={containerRef}
      className=" absolute boder -left-[300vh]  z-10 h-[5rem]"
      style={{ display: "flex", gap: "1rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {articles &&
        articles.map((article, index) => (
          <div
            key={index}
            style={{
              width: "10rem",
              height: "5rem",
             
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Link to={`oeuvre/${article.id}`}>
              <div className=" w-[10rem] relative overflow-hidden h-[5rem]">
               
                <img
                  onMouseEnter={() => {
                      handleMouseOverArticle(article.id);
                    }}
                  onMouseLeave={handleMouseOutArticle}
                  className=" z-0 absolute cursor-pointer h-full w-full object-cover hover:opacity-5 hover:scale-125 ease-in duration-150"
                  src={`${URLimage}/${article.image}`}
                  alt={article.id}
                />
                {hoveredArticleId === article.id && (
<div className="w-full bg-white h-full flex items-center justify-center">

    <h3 className=" font-black text-3xl z-2 p-3 text-pink-900">{article.name}</h3>

</div>
                )}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MovingDivs;
