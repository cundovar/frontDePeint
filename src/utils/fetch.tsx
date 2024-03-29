
import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  name: string;
  image: string;
  categorie?: string;
}

export function fetchArticles(url: string, params?: { [key: string]: any }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        console.log('response.data:', response.data);
        setArticles(response.data['hydra:member']);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    fetchData();
  }, [url, params]); // Effectuer le fetch chaque fois que l'URL ou les paramètres de requête changent

  return { articles, isLoading }; // Retourner les articles et le statut de chargement
}


