import React, { useContext } from 'react'

import { CardLabel } from '../CardLabel'
import { ErrorMessage, Field } from 'formik'
import { StepsContext } from '../../contexts/StepsContext'
import { RadioInput } from '../ui/RadioInput'
import { SelectFormik } from '../SelectFormik'

export const RcaStepOne = ({ values }) => {
   const { form } = useContext(StepsContext);
   const { steps } = form;
   return (
      <>

         <h3 className="steps-form__title title title_black">{steps[0].title}</h3>

         {
            steps[0]?.data?.map((inp) =>
               <div key={inp.id} className='steps-form__line steps-form__line_m'>
                  <span className='steps-form__label'>{inp.title}</span>


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
                  {
                     inp.select &&
                     <Field
                        className='form__inp input-form'
                        name={inp.name}
                        placeholder={inp.placeholder}
                        component={SelectFormik}
                        options={inp.select}
                     />

                  }
                  <ErrorMessage name={inp.name} component="span" className='steps-form__error' />

               </div>

            )
         }



         <ErrorMessage name='vehicle' component="span" className='steps-form__error' />

      </>

   )
}

