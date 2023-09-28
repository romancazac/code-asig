import { useContext, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { StepsContext } from '../../contexts/StepsContext';
import { Button } from '../ui/Button';

import { Modal } from '../Modal';
import { ModalContext } from '../../contexts/ModalContext';
import { ComandForm } from '../ComandForm';
import { useAppServices } from '../../services/appServices';
import { RcaStepOne } from './RcaStepOne';
import { RcaStepTwo } from './RcaStepTwo';
import { RcaStepThree } from './RcaStepThree';
import { RcaStepFour } from './RcaStepFour';




export const FormRca = () => {
  const { step, setStep, form, setForm, totalPrice } = useContext(StepsContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { postComand, succes } = useAppServices();

  const [viewPrice, setViewPrice] = useState(false);
  const stepOne = Yup.object().shape({
    inmatriculat: Yup.string().required('Alege optiunea'),
    posesor: Yup.string().required('Alege o optiunea'),
    domiciliu: Yup.string().required('Selecteaza o optiunea'),
  })
  const stepTwo = Yup.object().shape({
    vehicle: Yup.string().required('Alege tipul autovehiculului'),
  })
  const stepThree = Yup.object().shape({
    locuri: Yup.string().required('Selecteaza o optiunea'),
    person: Yup.string().required('Selecteaza o optiunea'),
    stagiu: Yup.string().required('Selecteaza o optiunea'),

  })
  const stepFour = Yup.object().shape({
    personalDate: Yup.string().required('Selecteaza o optiunea'),
    contract: Yup.string().required('Selecteaza o optiunea'),
    remorc: Yup.string().required('Selecteaza o optiunea'),
    name: Yup.string().required('Numele dvtra'),
    email: Yup.string().email().required('Emailul dvtra'),
    phone: Yup.string().required('Numarul de telefon'),

  })


  const schemValidation = (step === 1 && stepOne) || (step === 2 && stepTwo) || (step === 3 && stepThree) || (step === 4 && stepFour);

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
          inmatriculat: '',
          posesor: '',
          domiciliu: '',
          vehicle: '',
          locuri: '',
          stagiu: '',
          person: '',
          personalDate: '',
          contract: '',
          remorc: '',
          name: '',
          email: '',
          phone: ''
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

              {step === 1 && <RcaStepOne values={values} />}
              {step === 2 && <RcaStepTwo values={values} />}
              {step === 3 && <RcaStepThree values={values} />}
              {step === 4 && <RcaStepFour values={values} />}

              {
                viewPrice &&
                <div className="steps-form__row steps-form__row-livration">
                  {(onTotalPrice(isValid) * 1000).toFixed(2)} €
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
                <ComandForm succes={succes} />
              </Modal>
            </Form>
          )
        }
        }
      </Formik>
    </ >
  );
};


