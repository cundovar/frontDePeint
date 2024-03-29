
import axios from "axios";
import React, { useEffect, useState }  from "react";

interface Article {
  id: number;
  name: string;
  image: string;
  categorie?: string; // Ajoutez la propriété categorie ici
}

const FetchArticles=(url: string, categorieUrl?: string)=> {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const filteredArticles = response.data['hydra:member'].filter((article: Article) => {
          // Si aucun categorieUrl n'est fourni, renvoyer tous les articles
          if (!categorieUrl) return true;
          // Sinon, renvoyer uniquement les articles de la catégorie spécifiée
          return article.categorie === categorieUrl;
        });
        setArticles(filteredArticles);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    fetchData();
  }, [url, categorieUrl]); // Effectuer le fetch chaque fois que l'URL ou la catégorie change

  return { articles, isLoading };
}

export default FetchArticles
