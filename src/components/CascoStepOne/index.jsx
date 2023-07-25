import React, { useContext } from 'react'

import { CardLabel } from '../CardLabel'
import { ErrorMessage } from 'formik'
import { StepsContext } from '../../contexts/StepsContext'

export const CascoStepOne = ({ values }) => {
   const { form } = useContext(StepsContext);
   const { steps } = form;

   return (
      <>

         <h3 className="steps-form__title title title_black">{steps[0].title}</h3>
         <div className="steps-form__row">
            {
               steps[0]?.cards?.map((card) =>
                  <CardLabel
                     key={card.id}
                     title={card.title}
                     icon={card.icon}
                     name='vehicle'
                     nameState={values.vehicle}
                  />
               )
            }


         </div>
         <ErrorMessage name='vehicle' component="span" className='steps-form__error' />

      </>

   )
}

