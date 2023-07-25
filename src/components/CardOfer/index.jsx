import React from 'react'
import { Link } from 'react-router-dom'

export const CardOfer = ({ urlImg, url, title, text }) => {
   return (
      <div className='oferts__column '>
         <div className="oferts__img _ibg"><img src={urlImg} alt={title} /></div>
         <div className="oferts__content">
            <h4 className="oferts__title">{title}</h4>
            <p className="oferts__text">{text}...</p>
            <Link to={url} className='oferts__link btn-block btn-block_right btn-block_arr-red icon-arrow-right'><span>Vezi mai mult</span></Link>

         </div>

      </div>
   )
}
