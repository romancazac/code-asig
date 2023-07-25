import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { Button } from '../ui/Button'

export const ComandForm = ({ succes }) => {

   return (
      <>
         {
            succes ?
               "Comanda plasata cu succes"
               :
               <>
                  <div className="steps-form__line">
                     <Field
                        name='name'
                        className='form__inp input-form'
                        placeholder='Numele'
                     />
                     <ErrorMessage name='name' component="span" className='steps-form__error' />
                  </div>
                  <div className="steps-form__line">
                     <Field
                        name='email'
                        className='form__inp input-form'
                        placeholder='Email'
                     />
                       <ErrorMessage name='email' component="span" className='steps-form__error' />
                  </div>
                  <div className="steps-form__line">

                     <Field
                        name='phone'

                        className='form__inp input-form'
                        placeholder='Phone'
                     />
                     
                       <ErrorMessage name='phone' component="span" className='steps-form__error' />
                  </div>
                  <Button type='submit' className='btn-block_red btn-block_right' >Trimite</Button>

               </>

         }


      </>
   )
}
