import './App.css';
import React from 'react'
import Pagina1 from './Pagina1';
import Colores from './Colores';
import { Datos } from './context/Contexto';
import Pagina3 from './Pagina3';
import Pagina2 from './Pagina2';

const App = () => {
  return (
    <>
    <Datos>
      <div className='App'>
        <Pagina1/>
        <Pagina2/>
        <Pagina3/>
      </div>
      <Colores/>
    </Datos>
    </>
  )
}

export default App