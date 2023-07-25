import React, { useContext } from 'react'
import { Carousel } from '../Carousel'

import { DataContext } from '../../contexts/DataContext'
import './style.scss'
export const SectionReviews = () => {
   const { data } = useContext(DataContext);
   const { recenzii } = data;
   return (
      <section className='section reviews'>
         <div className="reviews__container container">
            <h2 className="reviews__title title">{recenzii?.title}</h2>
            <div className="reviews__carousel">
          
               <Carousel
                  dataCards={recenzii?.cards}

               />

            </div>
         </div>

      </section>
   )
}
