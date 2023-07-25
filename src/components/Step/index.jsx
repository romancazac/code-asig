import React, { useContext } from 'react'
import './style.scss'
import { StepsContext } from '../../contexts/StepsContext'
export const Step = () => {
  const { step, form } = useContext(StepsContext);

  return (
    <ul className='step__items'>
      <li className="step__item step__item_point "><span></span></li>
      {
        !form?.steps && <li className={`step__item`}><span>1</span></li>
      }
      {
        form?.steps?.map((_, i) =>
          <li key={i} className={`step__item ${(i + 1) < step ? '_active' : ''} `}>
            <span className={`${(i + 1) < step ? 'icon-check' : ''} `}>{i + 1}</span>
          </li>
        )
      }
    </ul>
  )
}
