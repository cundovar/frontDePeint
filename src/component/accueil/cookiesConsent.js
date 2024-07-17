import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowPopup(false);
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="cookie-consent-popup text-black bg-slate-50 p-10 " style={{zIndex:"9999"}}>
        <p>Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous les cookies ?</p>
        <div className='w-full flex justify-around'>
        <button onClick={handleAccept}>Accepter</button>
        <button onClick={handleDecline}>Refuser</button>

        </div>
      </div>
    )
  );
};

export default CookieConsent;
