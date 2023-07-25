import React, { useContext } from 'react'
import { Button } from '../ui/Button'
import { DataContext } from '../../contexts/DataContext'
import { Link } from 'react-router-dom'
import { StepsContext } from '../../contexts/StepsContext'
import './style.scss'
export const AsigTypes = () => {
  const { data } = useContext(DataContext);
  const { form, setForm, setStep, step } = useContext(StepsContext);
  const { types } = data;


  const onSetForm = (obj) => {
    setForm(obj);
    if (step === 0) {
      setStep(prev => prev + 1)
    }
    setStep(1)
  }

  return (
    <div className='main-section__types types'>
      <h1 className="types__title title  title_w">{types?.title}</h1>
      <div className="types__row">

        {
          types?.insuranceTypes?.slice(0, 6).map((s) =>
            <Button key={s.id} onClick={() => onSetForm(s)}
              className={`types__btn ${form.formName === s.formName ? '_active' : ''}`}
            >
              {s.label}
            </Button>
          )
        }

        <Link to='#' className='types__btn-all btn-block btn-block_right btn-block_arr-nbg icon-arrow-right'>Altele</Link>
      </div>
    </div>
  )
}
