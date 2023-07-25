import React, { useContext } from 'react'
import { FormConsultation } from '../FormConsultation'
import { DataContext } from '../../contexts/DataContext';
import './style.scss'
export const SectionConsultation = () => {
   const {data} = useContext(DataContext);

   const {sectionConsult } = data;


  return (
    <section className='section consultation'>
      <div className="consultation__row  container">
         <div className="consultation__column">
            <h2 className="consultation__title title">{sectionConsult?.title}</h2>
            <p className="consultation__text">{sectionConsult?.text}</p>
         </div>
         <div className="consultation__column form-cons">
            <FormConsultation formData={sectionConsult?.formData }/>
         </div>
      </div>
    </section>
  )
}
