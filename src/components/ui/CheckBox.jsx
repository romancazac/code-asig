
import { useField } from 'formik';

export const Checkbox = ({ title, ...props }) => {

   const [field, meta] = useField({ ...props, type: 'checkbox' });



   return (
      <label className={`steps-form__chk radio-inp radio-inp_check ${field.value ? 'checked' : ''} `} >
         <div className={`radio-inp__circle `} />

         <input className='checkbox__inp' type="checkbox" {...field} {...props} />
         <span className='steps-form__chk_link'>Sunt de acord cu <a href="#" className="">Termenii și condițiile</a> site-ului</span>
      </label>
   )
}


