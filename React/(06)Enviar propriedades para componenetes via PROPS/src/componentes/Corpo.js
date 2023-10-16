import React from 'react'
import Dados from './Dados'

export default function Corpo(){
   const cnl = 'CFB Cursos'
   const yt = 'youtube.com/cfbcursos'
   const crs = 'React.js'

   return(
      <section>
         <h2>Curso de React</h2>
         <p>Se inscreva em nosso canal</p>
         <p>Ative o sininho e clique no like</p>

         <Dados 
            /*canal='CFB Cursos' 
            youtube='youtube.com/cfbcursos' 
            curso='React.js' */ // Via props

            canal = {cnl}
            youtube = {yt}
            curso = {crs}
         />
      </section>
   )
}