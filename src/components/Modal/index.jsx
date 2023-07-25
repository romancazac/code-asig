import React, { useContext, useState, useEffect } from 'react';


import './style.scss'
import { ModalContext } from '../../contexts/ModalContext';
export const Modal = ({title,children, modal }) => {
   const { isModalOpen, closeModal} = useContext(ModalContext);


   return isModalOpen === modal ? (
      <div className="modal">
         <div className="modal__body">
            <div className="modal__header">
               <h2 className='modal__title'>{title}</h2>
               <button onClick={closeModal} className='modal__close icon-close'></button>

            </div>

            {children}

         </div>
      </div>
   ) : null;
};

