import {useState} from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0)

  const aumentar = () =>{
    setContador(contador+1)
  }

  const disminuir = () =>{
    setContador(contador-1)
  }

  const restablecer = () => {
    setContador(0)
  }

  
  
  return (
    <>
      
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={restablecer}>Restablecer</button>
      <h1>{contador}</h1>

    </>

  );
}

export default App;
