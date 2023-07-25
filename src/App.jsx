
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import './assets/scss/style.scss'

function App() {
  

  return (
    <>
       <RouterProvider router={router} /> 
    </>
  )
}

export default App
