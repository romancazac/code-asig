import { useContext, useEffect, useState } from 'react';
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';
import { CascoStepOne } from '../CascoStepOne';
import { CascoStepTwo } from '../CascoStepTwo';
import { StepsContext } from '../../contexts/StepsContext';
import { Button } from '../ui/Button';
import { CascoStepThree } from '../CascoStepThree';
import { Modal } from '../Modal';
import { ModalContext } from '../../contexts/ModalContext';
import { ComandForm } from '../ComandForm';
import { useAppServices } from '../../services/appServices';




export const FormGreenCard = () => {
  const { step, setStep, form, setForm, totalPrice } = useContext(StepsContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const {postComand,succes} = useAppServices();

  const [viewPrice, setViewPrice] = useState(false);
  const stepOne = Yup.object().shape({
    vehicle: Yup.string().required('Alege tipul autovehiculului'),
  })
  const stepTwo = Yup.object().shape({
    marca: Yup.string().required('Introduceti Marca'),
    model: Yup.string().required('Introduceti Modelul'),
    year: Yup.string().required('Alegeti anul productiei'),
  })
  const stepThree = Yup.object().shape({
    carPrice: Yup.number().required('Introduceti suma'),
    teritoriu: Yup.string().required('Alege Teritoriu de acoperiere'),
    franciz: Yup.string().required('Alege una din variante'),
    name: Yup.string().required('Numele dvtra'),
    email: Yup.string().email().required('Emailul dvtra'),
    phone: Yup.string().required('Numarul de telefon'),
  })
 

  const schemValidation = (step === 1 && stepOne) || (step === 2 && stepTwo)  || (step === 3 && stepThree) ;

  const onSubmit = async (values, actions) => {
    await postComand(values)
    // actions.resetForm(); 
    // setForm({})
    // setStep(0)
  }
  const onNextStep = (valid, submitForm) => {

    if (valid) {
      setStep(prev => prev + 1);

    } else {
      submitForm();
    }
  }
  const onPrevStep = () => {
    setStep(prev => prev - 1);
    if (step <= 1) {
      setForm({})
    }
    setViewPrice(false)
  }

  const onTotalPrice = () => {
    
      const val = Object.values(totalPrice)
      const sum = val.reduce((total, currentValue) => {

        if (typeof currentValue === 'number') {
          return total + currentValue;
        }
        return total
      }, 0);
      setViewPrice(true)
      return sum
    



  }


  return (
    <>
      <Formik
        initialValues={{
          vehicle: '',
          marca: '',
          model: '',
          year: '',
          carPrice: '',
          teritoriu: '',
          franciz: '',
          name:'',
          email:'',
          phone:''
        }
        }
        validationSchema={schemValidation}
        onSubmit={onSubmit}
      >
        {({ values, isValid, validateForm, submitForm }) => {

          useEffect(() => {
            validateForm()
          }, [values, onTotalPrice]);
          return (
            <Form>

              {step === 1 && <CascoStepOne values={values} />}
              {step === 2 && <CascoStepTwo values={values} />}
              {step === 3 && <CascoStepThree values={values} />}

              {
                viewPrice &&
                <div className="steps-form__row steps-form__row-livration">
                  {(onTotalPrice(isValid) * values.carPrice).toFixed(2)} €
                  +
                  <span>Livrare gratuită</span>
                </div>
              }
              <div className="steps-form__footer">
                <Button
                  type='button'
                  className='icon-arrow-right'
                  onClick={onPrevStep}
                >
                  <span>Înapoi</span>
                </Button>
                {
                  step <= (form.steps.length - 1) ?
                    (<Button
                      type='button'
                      className='btn-block_red btn-block_right icon-arrow-right'
                      onClick={() => onNextStep(isValid, submitForm)}
                    >
                      <span>Înainte</span>
                    </Button>
                    )
                    :
                    !viewPrice ?
                      (
                        <Button
                          type='button'
                          className='btn-block_red btn-block_right '
                          onClick={() => onTotalPrice(isValid)}
                        >
                          <span>Vezi Costul</span>
                        </Button>
                      )
                      :

                      (
                        <Button
                          type='button'
                          className='btn-block_red btn-block_right '
                          onClick={() => setIsModalOpen('comand')}
                        >
                          <span>Comandă și achită online</span>
                        </Button>
                      )
                }

              </div>
              <Modal modal='comand' title='Comandă'>
                  <ComandForm  succes={succes}/>
              </Modal>
            </Form>
          )
        }
        }
      </Formik>
    </ >
  );
};


