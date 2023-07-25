import { createContext, useEffect, useState } from 'react';
import { useAppServices } from '../services/appServices';


export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
   const { getData } = useAppServices();

   const [data, setData] = useState({});
   useEffect(() => {
      getData().then((res) => setData(res[0]))
   }, [])


   return (
      <DataContext.Provider value={{ data }}>
         {children}
      </DataContext.Provider>
   );
}

