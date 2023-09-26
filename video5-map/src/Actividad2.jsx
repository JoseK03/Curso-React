import React from 'react'

const Actividad2 = ({reyes}) => {
    const eliminar = (e) =>{
        e.target.parentNode.remove()
    }
    const nombres = reyes.filter(element => !element.nombre.includes('g')).map(e => <div key={e.nombre}>{e.nombre} <button onClick={eliminar}>Eliminar</button> </div>);
  return (
    <div>
      {nombres}
    </div>
  )
}

export default Actividad2
