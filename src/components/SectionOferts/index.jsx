import React, { useContext } from 'react'
import { CardOfer } from '../CardOfer'
import { DataContext } from '../../contexts/DataContext'
import './style.scss'
export const SectionOferts = () => {
   const { data } = useContext(DataContext);
   const { sectionOferts } = data;
   return (
      <section className='section oferts' style={{ backgroundImage: `url(${sectionOferts?.bg})` }}>

         <div className="oferts__container container">
            <div className="oferts__top">
               <h2 className="oferts__title title">{sectionOferts?.title}</h2>
               <a href='#' className="btn-block btn-block_right btn-block_arr-red icon-arrow-right">Vezi toate ofertele</a>
            </div>
            <div className="oferts__row">
               {
                  sectionOferts?.cards?.map((card) =>
                     <CardOfer
                        key={card.id}
                        title={card.name}
                        text={card.text.slice(0, 60)}
                        urlImg={card.img}
                        url={card.link}
                     />

                  )
               }


            </div>
         </div>
      </section>
   )
}
