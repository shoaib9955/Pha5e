import React, { useEffect, useState } from 'react';

function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
  
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      
      document.body.style.overflow = '';
    }

    
    const timer = setTimeout(() => setShow(false), 3000);

  
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [show]);

  if (show) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <img
          src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/logo.svg"
          alt="Logo"
          className="h-24 animate-bounce"
        />
        <p className="mt-4 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }


  return null;
}

export default Splash;
