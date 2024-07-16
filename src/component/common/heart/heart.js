import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { urlBase1 } from '../../../utils/varaibleFetch';



const LikeButton = ({ likesCount, oeuvreId }) => {
    const [internalLikesCount, setInternalLikesCount] = useState(likesCount);
    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        // Vérifier si l'utilisateur a déjà liké cette œuvre via les cookies
        const likedPaintings = Cookies.get('likedPaintings');
        if (likedPaintings) {
            const likedPaintingsArray = JSON.parse(likedPaintings);
            if (likedPaintingsArray.includes(oeuvreId)) {
                setLiked(true);
            }
        }
    }, [oeuvreId]);

    const handleLike = async () => {
        if (liked) {
            await axios.delete(`${urlBase1}/api/oeuvres/${oeuvreId}/unlike`);
            setInternalLikesCount(internalLikesCount - 1);

            // Retirer l'ID de l'œuvre des cookies
            const likedPaintings = Cookies.get('likedPaintings');
            let likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
            likedPaintingsArray = likedPaintingsArray.filter(id => id !== oeuvreId);
            Cookies.set('likedPaintings', JSON.stringify(likedPaintingsArray), { expires: 365 });
        } else {
            await axios.post(`${urlBase1}/api/oeuvres/${oeuvreId}/like`);
            setInternalLikesCount(internalLikesCount + 1);

            // Ajouter l'ID de l'œuvre aux cookies
            const likedPaintings = Cookies.get('likedPaintings');
            let likedPaintingsArray = likedPaintings ? JSON.parse(likedPaintings) : [];
            likedPaintingsArray.push(oeuvreId);
            Cookies.set('likedPaintings', JSON.stringify(likedPaintingsArray), { expires: 365 });
        }

        setLiked(!liked);
    };

    return (
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }} onClick={handleLike} className=' p-3 bg-gradient-to-l flex items-end justify-end from-cyan-600 w-1/6 rounded-xl'>
            <button style={{ border: 'none', background: 'none' }} className=''>
                {liked ? '❤️' : '🤍'}
            </button>
            <span>{internalLikesCount}</span>
          
        </div>
        
        
    );
};

export default LikeButton;
