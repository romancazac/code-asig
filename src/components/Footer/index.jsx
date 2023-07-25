import React, { useContext } from 'react'

import './style.scss'
import { DataContext } from '../../contexts/DataContext'
export const Footer = () => {
   const { data } = useContext(DataContext);
   const { footer } = data;
   return (
      <footer className='footer'>
         <div className="footer__row container">
            <div className="footer__col">
               <a href="/" className="footer__logo"><img src={footer?.logo} alt="logo" /></a>
               <p className="footer__text">{footer?.about}</p>
               <a href={footer?.link} className="footer__link btn-block">Comandă apel</a>
            </div>

            {
               footer?.columns?.map((c) =>
                  <div key={c.id} className="footer__col">
                     <h4 className="footer__title">{c.title}</h4>
                     <ul className="footer__list">

                        {
                           c?.links?.map((link) =>

                              <>

                                 {
                                    !link.icon ?
                                       <li key={link.id} className="footer__li"><a href={link.link} className="footer__link">{link.name}</a></li>
                                       :
                                       <li key={link.id} className="footer__li"><a href={link.link} className={`footer__link ${link.icon}`}></a></li>
                                 }

                              </>

                           )
                        }

                     </ul>
                  </div>
               )
            }
         </div>
      </footer>
   )
}
