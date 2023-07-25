import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/Button';
import { useAppServices } from '../../services/appServices';
import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react';

export const LogInForm = () => {
   const { setIsModalOpen } = useContext(ModalContext)
   const { postComand, succes } = useAppServices();

   const schemValidation = Yup.object().shape({

      name: Yup.string().required('Numele dvtra'),
      email: Yup.string().email().required('Emailul dvtra'),
      phone: Yup.string().required('Numarul de telefon'),
   })


   const onSubmit = async (values, actions) => {
      await postComand(values)
      // actions.resetForm(); 
      // setForm({})
      // setStep(0)
   }


   return (
      <>
         <Formik
            initialValues={{
               name: '',
               email: '',
               phone: ''
            }
            }
            validationSchema={schemValidation}
            onSubmit={onSubmit}
         >
            {({}) => (

               <Form>
                  <span className='steps-form__log'>Nu ai un cont? <button onClick={() => setIsModalOpen('registr')}>Înregistreaza-te </button></span>
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
                        name='parola'
                        type='password'
                        className='form__inp input-form'
                        placeholder='Parola'
                     />

                     <ErrorMessage name='phone' component="span" className='steps-form__error' />
                  </div>
                  <a href='#' className='steps-form__log steps-form__log_m'>Nu ai un cont?</a>

                  <Button type='submit' className='steps-form__btn btn-block_red btn-block_right' >Trimite</Button>


               </Form>
            )
            }

         </Formik>
      </ >
   );
};


