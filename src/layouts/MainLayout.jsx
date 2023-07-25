
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { NavContext } from '../contexts/NavContext'

export const MainLayout = () => {
   const {open } = useContext(NavContext);
   return (
      <div className={`wrapper ${open ? 'hidden' : ''}`}>
        <Header />      
        <main className="main">
           <Outlet/> 
        </main>
        <Footer/>
      </div>
    )
  
  
}
