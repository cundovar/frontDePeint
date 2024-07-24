import React, { useState } from "react";
import { URLimage, UrlPeintureDigital } from "../../utils/varaibleFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LikeButton from "../common/heart/heart";
import FetchArticles from "../../utils/fetcharticle";
import { Skeleton } from "@mui/material";

const ArticleItem = ({ articles }) => {
    const [show, setShow] = useState(false);

    const onEnter = () => setShow(true);
    const onLeave = () => setShow(false);

    return (
        <div className="relative h-96">
            <Link 
                onMouseEnter={onEnter}
                onMouseLeave={onLeave} 
                to={`/oeuvre/${articles.id}`}
            >
                <LikeButton likesCount={articles.likes.length} oeuvreId={articles.id} />
                <img
                    className="w-full m-auto object-contain h-full"
                    src={`${URLimage}/${articles.image}`}
                    alt={articles.name}
                />
                <div className="absolute xl:top-0 xl:left-1 left-0 top-2 border bg-gray-800 p-2 rounded-md">
                    <h3 className="verticalPopular">{articles.name}</h3>
                </div>
                <div
                    style={{
                        transition: "transform 0.3s ease-in-out",
                    }}
                    className={`absolute flex items-center justify-center ${show ? "inset-x-0 bottom-5" : "hidden -bottom-10"}`}
                >
                    <span className="bg-white text-black bg-opacity-75 p-2 rounded">
                        {articles.description}
                    </span>
                </div>
            </Link>
        </div>
    );
};

const CarouselCategories = ({ categorieUrl, title }) => {
    const { articles, isLoading } = FetchArticles(UrlPeintureDigital, categorieUrl);
    console.log("art",articles)
    


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {isLoading ? (
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={350} height={300} />
            ) : (
                <>
                    <h1 className="text-5xl mb-10 max-xl:mt-5 font-title max-sm:mt-10">{title}</h1>
                    <Slider {...settings} className="m-auto lg:w-2/3 w-5/6 xl:w-96">
                        {articles.map((article) => (
                            <ArticleItem key={article.id} articles={article} />
                        ))}
                    </Slider>
                </>
            )}
        </>
    );
};

export default CarouselCategories;
