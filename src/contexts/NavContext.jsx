import { createContext, useState } from 'react';


export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {


   const [open, setOpen] = useState(false);

   return (
      <NavContext.Provider value={{open, setOpen}}>
         {children}
      </NavContext.Provider>
   );
}

