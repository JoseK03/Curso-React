import React from 'react'

const Actividad3 = ({reyes}) => {
   const resultado = reyes.find( e => e.nombre.substring(0,1)=== 'a' || e.nombre.substring(0,1) === 'A');
  return (
    <div >
      {resultado === undefined ? 'No se han encontrado resultados' : resultado.nombre}
      <h1>hola</h1>
    </div>
  )

}
export default Actividad3
