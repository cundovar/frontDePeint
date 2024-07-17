import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieManager = () => {
  useEffect(() => {
    const consent = Cookies.get('cookieConsent');

    if (consent === 'accepted') {
      // Initialiser les cookies ou toute autre logique dépendante des cookies
      Cookies.set('exampleCookie', 'exampleValue', { expires: 7 });
    } else if (consent === 'declined') {
    // Logique en cas de refus des cookies (éventuellement supprimer des cookies)
    Cookies.remove('exampleCookie');
    // Supprimez ici tous les autres cookies que vous avez éventuellement définis
    Cookies.remove('anotherCookie');
    Cookies.remove('yetAnotherCookie');
    }
  }, []);

  return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
};

export default CookieManager;
