import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';



// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { StarRating } from '../StarRating';

export const Carousel = ({ dataCards }) => {
   return (
      <>
         <Swiper
            slidesPerView={2}
            grid={{
               rows: 2,
               fill: "row",
            }}

            spaceBetween={20}
            pagination={{
               clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="reviews__slides"
         >
            {
               dataCards?.map((card) =>
                  <SwiperSlide key={card.id} className='reviews__slide slide-review'>

                     <div className="slide-review__avatar">
                        <img src={card.img} alt={card.name} />
                     </div>
                     <div className="slide-review__content">
                        <h4 className="slide-review__name">{card.name}</h4>
                        <div className="slide-review__stars">
                           <StarRating rating={card.rating} totalStars={5} />
                        </div>
                        <p className="slide-review__message">{card.text}</p>
                     </div>

                  </SwiperSlide>
               )
            }



         </Swiper>
      </>
   );
}
