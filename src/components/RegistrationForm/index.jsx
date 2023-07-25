import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/Button';
import { useAppServices } from '../../services/appServices';
import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react';
import { RadioInput } from '../ui/RadioInput';
import { Checkbox } from '../ui/CheckBox';

export const RegistrationForm = () => {
   const { setIsModalOpen } = useContext(ModalContext)


   const schemValidation = Yup.object().shape({


      email: Yup.string().email().required('Emailul dvtra'),
      parola: Yup.string().required('Parola'),
      confirm: Yup.string().required('Confirmă parola'),
      term: Yup.boolean().oneOf([true], 'Accepati conditiile')
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

               email: '',
               parola: '',
               confirm: '',
               term: false
            }
            }
            validationSchema={schemValidation}
            onSubmit={onSubmit}
         >
            {({ }) => (

               <Form>
                  <span className='steps-form__log'>Deja ai un cont? <button onClick={() => setIsModalOpen('logare')}>Logheaza-te </button></span>
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
                  <div className="steps-form__line">

                     <Field
                        name='confirm'
                        type='password'
                        className='form__inp input-form'
                        placeholder='Confirmă parola'
                     />

                     <ErrorMessage name='confirm' component="span" className='steps-form__error' />
                  </div>

                  <div className="steps-form__line">
                     <Checkbox
                        name='term'

                     />
                     <ErrorMessage name='term' component="span" className='steps-form__error' />
                  </div>

                  <Button type='submit' className='steps-form__btn btn-block_red btn-block_right' >Trimite</Button>


               </Form>
            )
            }

         </Formik>
      </ >
   );
};


