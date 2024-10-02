import { Skeleton, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'flowbite';
import { Helmet } from 'react-helmet';
import fetchRelation from "../utils/fetchCategorie";
import Encadrement from "../component/common/encadremenent/encadrement";
import { URLOeuvreId, URLimage } from "../utils/varaibleFetch";
import Modal from "../component/oeuvreid/modal";
import ModalCanape from "../component/oeuvreid/canapemodal";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "../component/common/breadcrumb";
import LikeButton from "../component/common/heart/heart";
import Coments from "../component/oeuvreid/coment";
import SocialMedia from "../component/oeuvreid/social/socialMedia";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PaletteIcon from '@mui/icons-material/Palette';
import DateRangeIcon from '@mui/icons-material/DateRange';
interface Like {
  id: number;

}
interface Post {
  name: string;
  description: string;
  image: string;
  categorie: string;
  theme: string;
  id: number;
  likes: Like[];

}

const ArticleDetailPage: React.FC = () => {
  const [showAbsoluteImage, setShowAbsoluteImage] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState<string>("");
  const [themeName, setThemeName] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false)
  const pageUrl = window.location.href
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const params = useParams<{ id: string; category: string }>();
  console.log("params", params)
  const fetchPost = async (id: number) => {
    try {
      const res = await fetch(`${URLOeuvreId}/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch article');
      }
      const postData = await res.json();
      console.log('post', postData);

      setPost(postData);
      fetchRelation(postData.theme, setThemeName);
      fetchRelation(postData.categorie, setCategoryName);
      setIsLoading(false); // Mettre à jour l'état de chargement après avoir récupéré les données
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const postId = Number(params.id);
    if (!isNaN(postId)) {
      fetchPost(postId);
    }
  }, [params.id]);

  const handleClickImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);

    }, 300)
    return () => clearTimeout(timer);
  })

  useEffect(() => {
    if (selectedImage === "../images/large.jpg") {
      const timer = setTimeout(() => {
        setShowAbsoluteImage(true);
      }, 450); // Délai de 450 ms avant d'afficher l'image
      return () => clearTimeout(timer); // Nettoyer le timer si selectedImage change avant que le délai soit écoulé
    } else {
      setShowAbsoluteImage(false);
    }
  }, [selectedImage]);

  return (
    <section className={`${isLoading && "flex items-center justify-center h-full "}  h-full max-xl:absolute overflow-hidden relative m-auto max-xl;w-full 2xl:w-10/12 xl:w-11/12  max-xl:flex-col-reverse max-xl:flex max-xl:mt-20 `}>

      {post && (
        <Breadcrumb categoryName={categoryName} id={post.id} Name={post.name} />

      )}


      {isLoading ? (
        <>
          <Helmet>
            {/* Balises Open Graph */}
            {post && (
              <>

                <meta property="og:title" content={post.name} />
                <meta property="og:description" content="post.description" />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />

              </>


            )}
          </Helmet>

          <div className="flex justify-center items-center">

            <div className="m-20 space-y-10  flex flex-col justify-center items-center">
              <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={70} height={70} />
              <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={70} height={70} />

            </div>


            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={800} height={700} />
          </div>

        </>
      ) : (

        <>

          <div className={`${show && "hidden"}  w-full h-full  flex justify-center items-center`}>
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>

          </div>
          {show && (


            post && (
              <div className=" lg:h-full b relative w-full m-auto   overflow-y-scroll max-lg:pb-96  ">

                <div className=" w-4/12  xl:h-1/2 flex   max-xl:flex-col max-xl:relative absolute max-xl:w-full z-40">
                  <h3 className="text-4xl justify-start font-title max-sm:text-2xl max-xl:visible hidden max-lg:text-4xl">{post.name}</h3>

                  <div className=" flex items-center  w-full flex-col justify-center">

                    <h3 className="text-4xl flex justify-center font-title max-md:text-2xl mb-10 max-lg:text-4xl">{post.name}</h3>
                    <div className="text-3xl ml-20 title_acccueil font-light   p-2 max-sm:text-xl  ">
                      {post.description}
                    </div>
                  </div>
                </div>
                <div className="w-4/12 xl:h-1/2 max-xl:w-full xl:mb-5 xl:ml-5 2xl:mb-0 2xl:ml-0 absolute max-xl:relative bottom-0 left-0 ">

                  <div className="2xl:w-10/12 m-auto h-full relative max-xl:overflow-hidden max-xl:flex max-sm:block max-xl:w-full ">
                    <div className="absolute w-2/3 top-20 -right-1/2">
                      <img className="svg-icon" src="/images/background/tache.svg" alt="style" />
                    </div>

                    <Encadrement name="titre " url={post.name} isloading={isLoading} />
                    <Encadrement name="catégorie" url={categoryName} isloading={isLoading} />
                    <Encadrement name="thème" url={themeName} isloading={isLoading} />


                    <div className="max-xl:hidden ">
                      <Coments />

                    </div>
                  </div>
                </div>
                <div className="w-8/12 xl:h-full  flex max-xl:pb-96 max-xl:w-full xl:items-center  xl:justify-center absolute max-h-full right-0 max-xl:relative">


                  <div className="flex w-full  h-full  m-auto  max-xl:flex-col justify-center items-center">
                    <article className="  w-3/3    ">
                      <div className=" h-full w-full p-5 m-auto  max-xl:flex-col max-xl:w-full  max-xl:items-center">
                        <div className=" h-full  flex  relative justify-center items-start   max-xl:w-full">
                          {isLoading ? (
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={800} height={700} />

                          ) : (
                            <div className="  cursor-pointer relative flex flex-col items-start  justify-start">

                              <img
                                className="   object-cover  h-[35rem]   zoom "
                                src={selectedImage ? selectedImage : `${URLimage}/${post.image}`}
                                alt="oeuvre_id"
                                onClick={openModal}
                              />
                              {showAbsoluteImage && (
                                <img className="absolute inset-x-1/3 z-50 top-[4%] w-2/12 shadow-2xl shadow-black" src={`${URLimage}/${post.image}`} alt="mini oeuvre" />
                              )}
                              <div className="max-xl:hidden w-full ">
                                <SocialMedia postImage={post.image}
                                  URLimage={URLimage}
                                  onclick={() => handleClickImage(`${URLimage}/${post.image}`)}
                                  onclick2={() => handleClickImage('../images/large.jpg')}
                                  likeButton={post.likes ? post.likes.length : 0}
                                  post={post.id}
                                  pageUrl={pageUrl}
                                />

                              </div>
                            </div>
                          )}
                          <div className=" max-xl:hidden space-y-5">

                            <div className=" w-52 h-20 flex flex-col justify-center items-center text-center font-light text-black bg-slate-400 ml-10 border">  <PaletteIcon fontSize="large" /> Oeuvre unique</div>
                            <div className="w-52 h-20 flex flex-col justify-center items-center text-center font-light text-black bg-slate-400 ml-10 border"> <EmojiFlagsIcon fontSize="large" />  Certificat d'authenticité inclus</div>
                            <div className="w-52 h-20 flex flex-col justify-center items-center text-center font-light text-black bg-slate-400 ml-10 border"> <FingerprintIcon fontSize="large" /> Signé par l'artiste</div>
                            <div className=" w-52 h-20 flex flex-col justify-center items-center text-center font-light text-black bg-slate-400 ml-10 border"> <DateRangeIcon fontSize="large" /> Prêt à accrocher</div>

                          </div>
                        </div>
                        <div className="xl:hidden mt-3 space-y-3 pb-96">
                          <SocialMedia postImage={post.image}
                            URLimage={URLimage}
                            onclick={() => handleClickImage(`${URLimage}/${post.image}`)}
                            onclick2={() => handleClickImage('../images/large.jpg')}
                            likeButton={post.likes ? post.likes.length : 0}
                            post={post.id}
                            pageUrl={pageUrl}
                          />
                          <Coments />

                        </div>
                        
                      </div>
                    </article>
                  </div>
                </div>
                {modalOpen && (
                  <div className="max-sm:hidden  flex items-center h-full justify-center absolute bg-opacity-25 bg-sto backdrop-blur-sm z-50 w-full">
                    <Modal image={`${URLimage}/${post.image}`} image2={<ModalCanape imagecanap={`${URLimage}/${post.image}`} />} closeModal={closeModal} />
                  </div>
                )}
              </div>
            )



          )}

        </>
      )}
    </section>
  );
};

export default ArticleDetailPage;
