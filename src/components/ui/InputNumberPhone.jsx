
import { InputMask } from "@react-input/mask";

import { useFormikContext } from 'formik';


export const InputNumberPhone = ({ label, ...props }) => {
   const formik = useFormikContext();

   return (
      <InputMask
         mask="(+373) __-___-___"
         replacement={{ _: /\d/ }}
         {...props}
         onChange={(e) => formik.setFieldValue(props.name, e.target.value)}
      />

   )
};
