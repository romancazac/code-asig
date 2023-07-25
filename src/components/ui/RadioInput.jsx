import React, { useContext } from 'react'
import { useFormikContext } from 'formik';
import { StepsContext } from '../../contexts/StepsContext';
export const RadioInput = ({ id, name, price, title,className = '' }) => {
   const{setTotalPrice} = useContext(StepsContext);
   const formik = useFormikContext();
   const isChecked = formik.values[name] === title;

   return (
      <label className={`steps-form__radio  radio-inp ${className} ${isChecked ? 'checked' : ''} `} htmlFor={id} >
         <div className={`radio-inp__circle `} />
         <input
            id={id}
            type="radio"
            value={price}
            name={name}
            checked={isChecked}
            onChange={() => { 
               formik.setFieldValue(name, title),
               setTotalPrice(prev => ({...prev, [name]:price})) 
            }}
         />
         <span className='radio-inp__name'>{title}</span>
      </label>
   )
}


