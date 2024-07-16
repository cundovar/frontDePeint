import axios from 'axios';
import Cookies from 'js-cookie';
import { URLOeuvreId, urlBase, urlBase1 } from './varaibleFetch';

// Fonction pour liker une oeuvre
export const likeOeuvre = async (oeuvreId) => {
  try {
    const response = await axios.post(`${urlBase1}/api/oeuvres/${oeuvreId}/like`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const likedOeuvres = JSON.parse(Cookies.get('likedOeuvres') || '[]');
    likedOeuvres.push(oeuvreId);
    Cookies.set('likedOeuvres', JSON.stringify(likedOeuvres));

    return response.data;
  } catch (error) {
    console.error('Error liking the oeuvre:', error);
    throw error;
  }
};

// Fonction pour unliker une oeuvre
export const unlikeOeuvre = async (oeuvreId) => {
  try {
    const response = await axios.delete(`${urlBase1}/api/oeuvres/${oeuvreId}/unlike`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const likedOeuvres = JSON.parse(Cookies.get('likedOeuvres') || '[]');
    const index = likedOeuvres.indexOf(oeuvreId);
    if (index !== -1) {
      likedOeuvres.splice(index, 1);
      Cookies.set('likedOeuvres', JSON.stringify(likedOeuvres));
    }

    return response.data;
  } catch (error) {
    console.error('Error unliking the oeuvre:', error);
    throw error;
  }
};

// Fonction pour récupérer le nombre de likes
export const getLikesCount = async (oeuvreId) => {
  try {
    const response = await axios.get(`${URLOeuvreId}`);
   
    return response.data.likes.length;
} catch (error) {
    console.error('Error fetching likes count:', error);
    throw error;
}
};

// Fonction pour vérifier si l'utilisateur a liké l'oeuvre
export const hasUserLiked = (oeuvreId) => {
  const likedOeuvres = JSON.parse(Cookies.get('likedOeuvres') || '[]');
  return likedOeuvres.includes(oeuvreId);
};
