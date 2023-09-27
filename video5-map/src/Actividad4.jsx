import React, { useRef } from 'react'

const Actividad4 = ({reyes}) => {

    const aumentar = (e) =>{
        ++e.target.innerHTML
    }
    const resultado = reyes.filter(rey => rey.vacasComidas > 10 && rey.reinado >10).map(rey => <div>{rey.nombre} <div className='numero' onClick={aumentar}>0</div></div> )
  return (
    <div className='div'>
      {resultado}
    </div>
  )
}

export default Actividad4
