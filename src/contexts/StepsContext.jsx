import { createContext,  useState } from 'react';


export const StepsContext = createContext()

export const StepsContextProvider = ({ children }) => {


   const [step, setStep] = useState(0);
   const [form, setForm] = useState({});
   const [totalPrice, setTotalPrice] = useState([{}])



   return (
      <StepsContext.Provider value={{ step, setStep, form, setForm,totalPrice, setTotalPrice }}>
         {children}
      </StepsContext.Provider>
   );
}

