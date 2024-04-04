
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchRelation from "../utils/fetchCategorie";
import Encadrement from "../component/common/encadremenent/encadrement";
import { URLOeuvreId, URLimage } from "../utils/varaibleFetch";

interface Post {
  name: string;
  description: string;
  image: string;
  categorie:string;
  theme:string
}



const ArticleDetailPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState<string>("");
  const [themeName, setThemeName] = useState<string>("");
  const [selectedImage,setSelectedImage]=useState<string>("")



const params=useParams<{id:string}>()
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
    
       fetchRelation(postData.theme,setThemeName)
       fetchRelation(postData.categorie,setCategoryName)
      console.log('url',postData.categorie)
    }
};




  useEffect(() => {
    const postId = Number(params.id);
    if (!isNaN(postId)) {
      fetchPost(postId);
    }
  }, [params.id]);
// console.log('dataa',categoryName)

const handleClickImage=(imageUrl:string)=>{
    setSelectedImage(imageUrl)
}
  return (
    <section className=" max-sm:flex-col-reverse max-sm:flex max-sm:mt-56">
   
      {post && (
        <>
<div className="borde w-4/12 h-1/2 flex max-sm:flex-col absolute max-sm:w-full z-40  ">
    <div className="w-1/2"></div>
    <div className="w-1/2 flex item-center justify-end  h-full  ">
        <div className="    lg:space-y-8 max-md:hidden flex flex-col items-end justify-end">
<div className="borde space-y-3 ">
        <div className="h-16 w-16 image overflow-hidden cursor-pointer "
              onClick={() =>
                handleClickImage(
                  `${URLimage}/${post.image}`
                )
              }>

            <img className="object-cover" src={`${URLimage}/${post.image}`} alt="img-id"/>
        </div>
        <div className="h-16 w-16 borde bg-stone-200 cursor-pointer "
              onClick={() =>
                handleClickImage(
                  '../images/large.jpg'
                )
              } >

        <img className="object-cover logo " src="../images/logo/canape.webp" alt="logo-canape"/>
        </div>
    
</div>

        </div>


    </div>
</div>
     <div className="w-4/12 h-1/2 max-sm:w-full  absolute max-sm:relative   flex items-start bottom-0 left-0 borde " >
       <div className="2xl:w-10/12 m-auto h-full  borde max-sm:w-full ">

       
       
  
       
      

<Encadrement name="titre" url={post.name} isloading={isLoading} />
<Encadrement name="catégorie" url={ categoryName} isloading={isLoading} />
<Encadrement name="thème" url={themeName} isloading={isLoading} />

    
        
           {post.description ? (
               
               <Encadrement name="description" url={post.description} isloading={isLoading} />
               
               ):(
                   
                  <p></p>
           ) }
        
          {/* <p style={{ paddingTop: '10px' }}>theme :{post.theme}</p> */}
              </div>
       </div>
      <div className="w-8/12  h-full flex max-sm:w-full items-center justify-center absolute max-h-full right-0 borde max-sm:relative ">
        <article className= "h-full">
          <div className="h-full p-5 w-11/12 m-auto  relative max-lg:flex max-lg:items-center  ">
            {isLoading ? (
                 <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={500} height={600} />
            ):(
                <>
                
                {selectedImage === "../images/large.jpg" &&(

                    <div className="absolute md:top-80 top md:right-48 lg:top-9 xl:top-20 xl:right-96 bg-black xl:w-52 md:w-36    ">
                           <img className=" shadow-2xl shadow-black sha" src= {`${URLimage}/${post.image}`}/>
                    </div>
            
                ) }
                <img
                    className="max-lg:h-1/2 w-full object-cover  "
                    src={selectedImage ? selectedImage : `${URLimage}/${post.image}`}
                    alt="oeuvre_id"
                    />
                    </>
            )}

          </div>

          {/* <img src={`http://localhost:8020/images/oeuvre/${post.image}`} alt='y' />
          <Magnifier imageUrl={`http://localhost:8020/images/oeuvre/${post.image}`} /> */}
        </article>

      </div>
    </>
      )
    }


  
        </section>
  );
};

export default ArticleDetailPage;




