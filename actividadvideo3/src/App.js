import {useState} from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('Jose')
  
  return (
    <>
      <h1>Me llamo {nombre}</h1>
      <button onClick={()=> setNombre('Bob Esponja')}>Cambiar nombre</button>
    </>
  );
}

export default App;
