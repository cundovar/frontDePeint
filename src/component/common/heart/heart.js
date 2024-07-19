import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { urlBase1 } from '../../../utils/varaibleFetch';

const LikeButton = ({ likesCount, oeuvreId }) => {
  const [internalLikesCount, setInternalLikesCount] = useState(likesCount);
  const [liked, setLiked] = useState(false);
  const [cookiesAllowed, setCookiesAllowed] = useState(null);
// Cookies : Si les cookies sont acceptés, les likes sont stockés dans les cookies.
// LocalStorage : Si les cookies ne sont pas acceptés, les likes sont stockés dans localStorage. Notez que localStorage est moins sécurisé et persistant que les cookies.
// Cette solution réduit les clics multiples sur le bouton de like en utilisant le stockage local du navigateur. Cependant, pour une sécurité et une fiabilité maximales, surtout dans un contexte d'utilisateur non authentifié, une gestion côté serveur avec une forme d'identification serait préférable.
  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    setCookiesAllowed(consent === 'accepted');
    
    let likedPaintingsArray = [];
    if (consent === 'accepted') {
      const likedPaintings = Cookies.get('likedPaintings');
      likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
    } else {
      const likedPaintings = localStorage.getItem('likedPaintings');
      likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
    }
    
    if (likedPaintingsArray.includes(oeuvreId)) {
      setLiked(true);
    }
  }, [oeuvreId]);

  const handleLike = async () => {
    if (liked) {
      await axios.delete(`${urlBase1}/api/oeuvres/${oeuvreId}/unlike`);
      setInternalLikesCount(internalLikesCount - 1);

      if (cookiesAllowed) {
        const likedPaintings = Cookies.get('likedPaintings');
        let likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
        likedPaintingsArray = likedPaintingsArray.filter(id => id !== oeuvreId);
        Cookies.set('likedPaintings', JSON.stringify(likedPaintingsArray), { expires: 365 });
      } else {
        let likedPaintingsArray = JSON.parse(localStorage.getItem('likedPaintings') || '[]');
        likedPaintingsArray = likedPaintingsArray.filter(id => id !== oeuvreId);
        localStorage.setItem('likedPaintings', JSON.stringify(likedPaintingsArray));
      }
    } else {
      await axios.post(`${urlBase1}/api/oeuvres/${oeuvreId}/like`);
      setInternalLikesCount(internalLikesCount + 1);

      if (cookiesAllowed) {
        const likedPaintings = Cookies.get('likedPaintings');
        let likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
        likedPaintingsArray.push(oeuvreId);
        Cookies.set('likedPaintings', JSON.stringify(likedPaintingsArray), { expires: 365 });
      } else {
        let likedPaintingsArray = JSON.parse(localStorage.getItem('likedPaintings') || '[]');
        likedPaintingsArray.push(oeuvreId);
        localStorage.setItem('likedPaintings', JSON.stringify(likedPaintingsArray));
      }
    }

    setLiked(!liked);
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }} onClick={handleLike} className='p-3 bg-gradient-to-l flex items-end justify-end from-cyan-600 w-1/6 rounded-xl'>
      <button style={{ border: 'none', background: 'none' }} className=''>
        {liked ? '❤️' : '🤍'}
      </button>
      <span>{internalLikesCount}</span>
    </div>
  );
};

export default LikeButton;
