import React, { useContext } from 'react';
import spain from './../assets/spain.jpg';
import francia from './../assets/francia.png';
import uk from './../assets/uk.png'
import Contexto from '../contexts/Contexto';
import Provider from '../contexts/Provider';

const Banderas = () => {
  const {setAlumno, alumno}= useContext(Contexto);
  const sustitucion =(indice)=>{
    setAlumno(
        alumno.map((dato,posicion)=>
        posicion == 3 
        ? {...dato,idioma:indice}
        : {...dato}
        )
      );
  }
   
const cambio1 = ()=>{
  sustitucion(0)
}
const cambio2 = ()=>{
  sustitucion(1)
}
const cambio3 = ()=>{
 sustitucion(2)
}
  return (
    <div className="banderas">
      <div className="spain" onClick={cambio1}>
        <img src={spain} alt='imagen'/>
      </div>
      <div className="spain" onClick={cambio2}>
        <img src={francia}alt='imagen'/>
      </div>
      <div className="spain" onClick={cambio3}>
        <img src={uk}alt='imagen'/>
      </div>
    </div>
  )
}

export default Banderas