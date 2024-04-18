
import { Box, Button, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchRelation from "../utils/fetchCategorie";
import Encadrement from "../component/common/encadremenent/encadrement";
import { URLOeuvreId, URLimage } from "../utils/varaibleFetch";
import Modal from "../component/oeuvreid/modal";
import ModalCanape from "../component/oeuvreid/canapemodal";


import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Post {
  name: string;
  description: string;
  image: string;
  categorie: string;
  theme: string
}



const ArticleDetailPage: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState<string>("");
  const [themeName, setThemeName] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };



  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const params = useParams<{ id: string }>()
  const fetchPost = async (id: number) => {
    const res = await fetch(`${URLOeuvreId}/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch article');

    }


    const postData = await res.json();
    setIsLoading(false);
    // console.log( 'post',postData)

    if (postData) {
      setPost(postData);

      fetchRelation(postData.theme, setThemeName)
      fetchRelation(postData.categorie, setCategoryName)
      console.log('url', postData.categorie)
    }
  };


  // const ImgCanape = (url:any) => (
  //   <>
  //     {selectedImage === "../images/large.jpg" && (
  //       <div className="absolute md:top-80 top md:right-48 lg:top-9 xl:top-20 xl:right-96 bg-black xl:w-52 md:w-36">
  //         <img className="shadow-2xl shadow-black sha" src= {url} />
  //       </div>
  //     )}
  //   </>
  // );

  useEffect(() => {
    const postId = Number(params.id);
    if (!isNaN(postId)) {
      fetchPost(postId);
    }
  }, [params.id]);
  // console.log('dataa',categoryName)

  const handleClickImage = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }
  return (
    <section className=" max-sm:flex-col-reverse max-sm:flex max-sm:mt-56 borde ">

      {post && (
        <>

          <div className="borde w-4/12 h-1/2 flex max-sm:flex-col absolute max-sm:w-full z-40   ">
            <h3 className="text-4xl flex justify-start font-title max-sm:text-2xl max-md:visible hidden  max-lg:text-4xl ">{post.name} </h3>
            <div className="w-1/2"> </div>
            <div className="w-1/2 flex items-center justify-center   ">


              <h3 className="text-4xl max-md:hidden  flex justify-center font-title max-sm:text-2xl  max-lg:text-4xl ">{post.name} </h3>

            </div>
          </div>
          <div className="w-4/12 h-1/2 max-sm:w-full  xl:mb-5 xl:ml-5 2xl:mb-0 2xl:ml-0 absolute max-sm:relative   flex items-start bottom-0 left-0 borde " >
            <div className="2xl:w-10/12 m-auto h-full   borde max-sm:w-full ">


              <Encadrement name="titre" url={post.name} isloading={isLoading} />
              <Encadrement name="catégorie" url={categoryName} isloading={isLoading} />
              <Encadrement name="thème" url={themeName} isloading={isLoading} />

              {post.description ? (

                <Encadrement name="description" url={post.description} isloading={isLoading} />

              ) : (

                <p></p>
              )}

              {/* <p style={{ paddingTop: '10px' }}>theme :{post.theme}</p> */}
            </div>
          </div>


          <div className="w-8/12 h-full flex max-sm:w-full items-center justify-center borde   absolute max-h-full right-0 borde max-sm:relative ">
            <div className="borde space-y-3 max-md:hidden">
              <div className="h-16 w-16 image overflow-hidden cursor-pointer "
                onClick={() =>
                  handleClickImage(
                    `${URLimage}/${post.image}`
                  )
                }>

                <img className="object-cover" src={`${URLimage}/${post.image}`} alt="img-id" />
              </div>
              <div className="h-16 w-16 borde bg-stone-200 cursor-pointer "
                onClick={() =>
                  handleClickImage(
                    '../images/large.jpg'
                  )
                } >

                <img className="object-cover logo " src="../images/logo/canape.webp" alt="logo-canape" />
              </div>

            </div>
        <div className="flex max-xl:flex-col overflow-y-scroll">

            <article className="h-full xl:w-2/3 w-full overflow-y-scroll borde ">

              <div className="h-full p-1 w-full m-auto flex borde max-sm:flex-col max-md:w-full max-lg:flex max-lg:items-center  ">
                <div className="h-full w-full flex borde  p-5 justify-center items-center cursor-pointer max-md:w-full">
                  {isLoading ? (
                    <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={500} height={600} />
                  ) : (
                    <>
                      <div className="  relative">



                        <img
                          className="max-lg:h-1/2 relative  h-full   "
                          src={selectedImage ? selectedImage : `${URLimage}/${post.image}`}
                          alt="oeuvre_id"
                          onClick={openModal}
                        />
                        {selectedImage === "../images/large.jpg" && (


                          <img className=" absolute inset-x-1/3 z-50  top-2 w-2/12 shadow-2xl shadow-black " src={`${URLimage}/${post.image}`} />


                        )}

                      </div>

                    </>
                  )}
                </div>
                {/* <div className="h-full w-1/3 max-md:w-full">
                  <p>commentaire :</p>
               
                </div> */}

              </div>



            </article>

            <article className="xl:w-1/3 w-full h-full bg-stone-700 p-5 flex items-center justify-center">
              <div>
              <h1>commenatire</h1>
              <p>La Bavière, nid d’espions ? Les autorités allemandes ont annoncé, ce jeudi 18 avril, l’arrestation de deux agents russes présumés, soupçonnés d’avoir planifié des actes de sabotage y compris contre l’armée américaine pour soutenir le «régime criminel de Poutine» dans sa guerre contre l’Ukraine. Les deux hommes, qui possèdent également la nationalité allemande, ont été interpellés à Bayreuth, dans le sud-est du pays, a préc</p>

              </div>
            </article>


        </div>

          </div>
          {modalOpen && (
            <div className=" flex  items-center h-full justify-center absolute backdrop-blur-sm z-50 w-full  ">


              <Modal image={`${URLimage}/${post.image}`} image2={<ModalCanape imagecanap={`${URLimage}/${post.image}`} />} closeModal={closeModal} />
            </div>
          )}
        </>
      )
      }




    </section>
  );
};

export default ArticleDetailPage;




