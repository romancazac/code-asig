import React, { useContext } from 'react'
import {DataContext} from '../../contexts/DataContext'
import { NavContext } from '../../contexts/NavContext'
import './style.scss'
export const Nav = () => {
   const {data} = useContext(DataContext);

   const { open, setOpen } = useContext(NavContext);
   const {navMenu}  = data;
   return (
      <nav className="nav__menu">
         <div className="nav__top">
            <button onClick={() => setOpen(!open)} className='nav__close icon-close'></button>
         <span className="nav__name">{navMenu?.navTop?.name}</span>
         </div>
         <ul className="nav__list">
            {
               navMenu?.navList?.map((item) => 
               <li key={item.id} className="nav__li"><a href={item.link} className={`nav__link ${item.icon}`}>{item.title}</a></li>
               
               )
            }
         </ul>
         <div className="nav__bottom">
         <div className="nav__lg box-icon__item icon-lang">
               <div className="box-icon__row">
                  <button className='_active'>Ro</button>
                  <button>Eng</button>
               </div>
            </div>
            <ul className="nav__list nav__list_m">
            {
               navMenu?.navBottom?.map((item) => 
               <li key={item.id} className="nav__li"><a href={item.link} className={`nav__link ${item.icon}`}>{item.title}</a></li>
               
               )
            }
            </ul>
         </div>
      </nav>
   )
}
