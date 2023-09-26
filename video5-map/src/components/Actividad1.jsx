import React from 'react'

const Actividad1 = ({reyes}) => {
    const url = 'http://www.html6.es/img/rey_'
    const resultado = reyes.map(e =>
       <div className="rey" key={e.nombre}><span className='nombre'> { e.nombre.toUpperCase()} </span> ha comido {e.vacasComidas*e.reinado*365} en sus {e.reinado} años de reinado
       <img src={url+e.nombre.toLowerCase()+".png"}/>
       </div>
       
       );
  return (
    <div>
        {resultado}
    </div>
  )
}

export default Actividad1
