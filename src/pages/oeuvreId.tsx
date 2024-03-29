
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchRelation from "../utils/fetchCategorie";
import Encadrement from "../component/common/encadremenent/encadrement";

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



const params=useParams<{id:string}>()
  const fetchPost = async (id: number) => {
    const res = await fetch(`http://localhost:8020/api/oeuvres/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch article');
      
    }
    
      setIsLoading(false);
    
    const postData = await res.json();
    console.log( 'post',postData)
    
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
console.log('dataa',categoryName)
  return (
    <section>
<div className="border w-4/12 h-1/2 flex absolute z-40  ">
    <div className="w-1/2"></div>
    <div className="w-1/2 flex item-center justify-center h-full border ">
        <div className=" m-auto space-y-8">

        <div className="h-20 w-20 border bg-red-700"></div>
        <div className="h-20 w-20 border bg-red-700"></div>

        </div>


    </div>
</div>
   
      {post && (
        <>
     <div className="w-4/12 h-1/2 absolute  flex items-center-amber-600 bottom-0 left-0 border" >
       <div className="w-10/12 m-auto h-5/6 p-10 border">
       
       
  
       
      

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
      <div className="w-8/12 h-full flex items-center justify-center absolute max-h-full right-0 border">
        <article className= "h-full">
          <div className="h-full p-5 w-11/12 m-auto ">
            {isLoading ? (
                 <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={500} height={600} />
            ):(
                <img className="h-full w-full object-cover  " src={`http://localhost:8020/images/oeuvre/${post.image}`} alt='y' />

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




