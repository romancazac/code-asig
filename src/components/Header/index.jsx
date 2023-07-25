import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Nav } from '../Nav'
import { NavContext } from '../../contexts/NavContext'
import {Modal} from '../Modal'
import { ModalContext } from '../../contexts/ModalContext'
import { LogInForm } from '../LogInForm'
import { RegistrationForm } from '../RegistrationForm'
import { DataContext } from '../../contexts/DataContext'
import './style.scss'
export const Header = () => {
   const { open, setOpen } = useContext(NavContext);
   const { setIsModalOpen, closeModal} = useContext(ModalContext)
   const {data} = useContext(DataContext);
   const {header} = data;

   return (
      <header className='header'>
         <div className="header__l ">
            <div className="header__nav nav">
               <button onClick={() => setOpen(!open)} className="nav__btn icon-menu"></button>
               {
                open && <Nav />
               }

            </div>
            <Link to='/' className="header__logo"><img src={header?.logo} alt="logo" /></Link>
         </div>
         <div className="header__center lines">
            <span className='title'>{header?.label}</span>
         </div>

         <ul className="header__r box-icon">
            <li onClick={() => setIsModalOpen('logare')} className="box-icon__item icon-users"><button>Logare</button></li>
            <li  onClick={() => setIsModalOpen('registr')} className="box-icon__item icon-file-reg"><button>Înregistrare</button></li>
         </ul>
           <Modal modal='logare' title='Loghează-te'>
              <LogInForm/>
            </Modal>
            <Modal modal='registr' title='Inregistrare'>
               <RegistrationForm/>
            </Modal>         
      </header>
   )
}
