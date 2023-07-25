import React, { useContext } from 'react'

import { Step } from '../Step'
import { AsigTypes } from '../AsigTypes'
import { FormCasco } from '../FormCasco'
import { FormStepDescription } from '../FormStepDescription'
import { StepsContext } from '../../contexts/StepsContext'
import { FormGreenCard } from '../FormGreenCard'
import { FormRca } from '../FormRca'
import { DataContext } from '../../contexts/DataContext'
import './style.scss'
export const MainSection = () => {
   const { form } = useContext(StepsContext);

   const { data } = useContext(DataContext);
   const { social } = data;
   const renderForm = () => {
      switch (form.formName) {

         case "green card":
            return <FormGreenCard />
            break;
         case "rca":
            return <FormRca />
            break;
         case "casco":
            return <FormCasco />
            break;

         case "medical":
            return <FormGreenCard />
            break;
         case "bunuri":
            return <FormCasco />
            break;
         case "location":
            return <FormCasco />
            break;
         default:
            return ''
      }
   }

   return (
      <section className='section main-section'>
         <aside className="main-section__aside aside box-icon">

            <div className="box-icon__item icon-lang">
               <div className="box-icon__row">
                  <button className='_active'>Ro</button>
                  <button>Eng</button>
               </div>
            </div>

            {
               social?.mainSection?.map((item) =>
                  <a key={item.id} href={item.link} className={`box-icon__item ${item.icon}`}>
                     <span className="aside__link">{item.title}</span>
                  </a>
               )
            }


         </aside>
         <div className="main-section__body container">
            <AsigTypes />
            <div className='main-section__steps steps-form'>

               <div className="steps-form__column">
                  {
                     renderForm()
                  }

               </div>
               <div className="steps-form__column">
                  <FormStepDescription data={form.description} />
               </div>
            </div>

         </div>
         <aside className="main-section__aside step">
            <Step />
         </aside>


      </section>
   )
}
