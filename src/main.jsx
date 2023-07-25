import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StepsContextProvider } from './contexts/StepsContext.jsx'
import { DataContextProvider } from './contexts/DataContext.jsx'
import { ModalProvider } from './contexts/ModalContext.jsx'
import { NavContextProvider } from './contexts/NavContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

  <DataContextProvider>
    <StepsContextProvider>
      <ModalProvider>
        <NavContextProvider>
          <App />
        </NavContextProvider>
      </ModalProvider>
    </StepsContextProvider>
  </DataContextProvider>

)
