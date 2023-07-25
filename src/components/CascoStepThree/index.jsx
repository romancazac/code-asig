import React, { useContext } from 'react'


import { ErrorMessage, Field } from 'formik'
import { StepsContext } from '../../contexts/StepsContext'
import { RadioInput } from '../ui/RadioInput'

export const CascoStepThree = ({ values }) => {
   const { form } = useContext(StepsContext);
   const { steps } = form;

   return (
      <>

         <h3 className="steps-form__title title title_black">{steps[2].title}</h3>

         {
            steps[2]?.data?.map((inp) =>
               <div key={inp.id} className='steps-form__line steps-form__line_m'>
                  <span className='steps-form__label'>{inp.title}</span>

                  {
                     inp.placeholder &&
                     <Field
                        type='number'
                        className='form__inp input-form'
                        name={inp.name}
                        placeholder={inp.placeholder}
                     />

                  }
                  {
                     inp.option &&
                     <div className="steps-form__row steps-form__row_m">
                        {
                           inp?.option.map((radio) =>
                              <RadioInput
                                 key={radio.id}
                                 className='radio-inp_check'
                                 name={inp.name}
                                 {...radio}
                              />
                           )
                        }
                     </div>

                  }
                  <ErrorMessage name={inp.name} component="span" className='steps-form__error' />



               </div>

            )
         }



         <ErrorMessage name='vehicle' component="span" className='steps-form__error' />

      </>

   )
}

