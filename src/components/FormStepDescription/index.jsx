import React from 'react'
import { Spoller } from '../Spoller'

export const FormStepDescription = ({ data }) => {
   return (
      <>
         {
            data?.map((descr) =>
               <Spoller
                  key={descr.id}
                  title={descr.title}
                  i={descr.id}
               >
                  {descr.text}
               </Spoller>

            )
         }

      </>
   )
}
