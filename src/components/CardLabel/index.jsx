import React from 'react'
import { useFormikContext } from 'formik';
export const CardLabel = ({ nameState,name, icon, title}) => {
   const formik = useFormikContext();

   return (
      <div
         className={`steps-form__card ${nameState === title ? '_active' : ''}`}
         onClick={(e) => { formik.setFieldValue(name,title) }}
      >
         <span className={`steps-form__icon ${icon}`}></span>
         <p className="steps-form__name">{title.slice(0,50)}</p>
      </div>
   )
}
