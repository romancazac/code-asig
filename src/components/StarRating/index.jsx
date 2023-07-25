import React from 'react';

export const StarRating = ({ rating, totalStars }) => {
   // Redarea stelelor
   const stars = [];
   for (let i = 1; i <= totalStars; i++) {
     let starColor = '#E7E5E4'; // Implicit, steaua este decolorată
 
     // Verificăm ratingul pentru a decide culoarea stelei
     if (rating >= i) {
       starColor = '#E8A412'; // Steaua primește culoarea orange
     }
 
     stars.push(
       <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
         <g clipPath="url(#clip0_47_2451)">
           <path d="M18.6723 7.5L12.9692 6.5625L10.4692 1.25C10.365 1.04167 10.2087 0.9375 10.0004 0.9375C9.79208 0.9375 9.63583 1.04167 9.53167 1.25L7.03167 6.64062L1.40667 7.5C1.19833 7.5 1.055 7.60417 0.976667 7.8125C0.898333 8.02083 0.9375 8.20312 1.09417 8.35938L5.23479 12.5781L4.21917 18.4375C4.21917 18.6458 4.29729 18.8152 4.45354 18.9456C4.60979 19.076 4.79208 19.0892 5.00042 18.985L10.0785 16.1725L15.1567 18.985C15.3129 19.0892 15.4692 19.076 15.6254 18.9456C15.7817 18.8152 15.8337 18.6458 15.7817 18.4375L14.8442 12.5781L18.9067 8.35938C19.0629 8.20312 19.115 8.02083 19.0629 7.8125C19.0108 7.60417 18.8806 7.5 18.6723 7.5Z" fill={starColor} />
         </g>
         <defs>
           <clipPath id="clip0_47_2451">
             <rect width="20" height="20" fill="white" />
           </clipPath>
         </defs>
       </svg>
     );
   }
 
   return <>{stars}</>;
};


