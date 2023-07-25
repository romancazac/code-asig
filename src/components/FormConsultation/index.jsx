
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { InputNumberPhone } from '../ui/InputNumberPhone';
import { useAppServices } from '../../services/appServices';





export const FormConsultation = ({ formData }) => {
   const {postConsult, succes} = useAppServices();
   const consultationSchema = Yup.object().shape({
      name: Yup.string().required('Numele dvstra'),
      phone: Yup.string().required('Telefonul Dvstra'),

   })
   const onSubmit = async  (values, actions) => {
      await postConsult(values)
      actions.resetForm(); 
   }
   return (
      <>
         <Formik
            initialValues={{
               name: '',
               phone: ''
            }
            }
            validationSchema={consultationSchema}
            onSubmit={onSubmit}
         >
            {({ }) =>
               <Form>

                  <div className="form-cons__line">

                     <div className='form-cons__col'>
                        {formData && formData[0]?.name && (
                           <>

                              <Field

                                 name={formData[0]?.name}
                                 placeholder={formData[0]?.placeholder}
                                 className={'form-cons__inp input-form'}
                              />
                              <ErrorMessage name={formData[0]?.name} component="span" className='steps-form__error' />
                           </>
                        )

                        }
                     </div>
                     <div className='form-cons__col'>
                        {formData && formData[1]?.name && (
                           <>
                              <InputNumberPhone
                                 name={formData[1]?.name}
                                 placeholder={formData[1]?.placeholder}
                                 className="form-cons__inp input-form"
                              />
                              <ErrorMessage name={formData[1]?.name} component="span" className='steps-form__error' />
                           </>

                        )}
                     </div>

                  </div>
                  {
                   succes &&  <div className="steps-form__error"> Forma a fost expediata cu succes!</div>
                   
                  }         

                  <button type='submit' className='form-cons__btn btn-block btn-block_red'>Trimite</button>

               </Form>

            }
         </Formik>
      </ >
   );
};
