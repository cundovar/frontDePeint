import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [show,setShow]=useState(false)

useEffect(()=>{
const timer=setTimeout(()=>{
  setShow(true)
},5000)
return ()=>clearTimeout(timer)
})

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
    Cookies.set('cookieConsent', 'declined', { expires: 1 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div  className={`${show ? "bottom-0" : "-bottom-40"} rounded-tl-3xl rounded-tr-3xl absolute w-full text-black bg-slate-50 p-10 transition-bottom duration-300 ease-in-out`} style={{zIndex:"9999"}}>
        <div className='m-auto flex flex-col justify-center  lg:w-1/2 space-y-5'>

        <p className='m-auto'>Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous les cookies ?</p>
        <div className='w-full flex justify-around'>
        <button className='border p-2 text-red-900 hover:bg-slate-400' onClick={handleAccept}> <p>Accepter</p></button>
        <button className='border p-2 text-red-900 hover:bg-slate-400' onClick={handleDecline}> <p>Refuser</p></button>
        </div>

        </div>
      </div>
    )
  );
};

export default CookieConsent;
