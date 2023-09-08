import img0 from './img/rey_ataulfo.png';
import img1 from './img/rey_ervigio.png';
import {useRef} from 'react';
import './App.css';

function App() {
  const cambio  = 23.16;
  const refCaja = useRef();
  function incrementar(e){
     e.target.innerHTML = Number(e.target.innerHTML)+1;
      if(e.target.innerHTML >= 10){
        e.target.innerHTML = 1
     }
     if(e.target.innerHTML >= 8){
      refCaja.current.style.backgroundColor="red";
    }else{
      refCaja.current.style.backgroundColor="white";
    }
     
  }
  const convetir = () =>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }
  const cambiar=(e)=>{
    if(e.target.src.includes('ataulfo')){
      e.target.src=img1
    }else{
      e.target.src=img0
    }
  }
  const lectura = (e) =>{
    refCaja.current.innerHTML = e.target.value; 
  }


  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1 </div>
      <button onClick={convetir}>Aceptar</button>
      <div>
        <img src={img0} onClick={cambiar}/>
      </div>
      <input className="campo" onChange={lectura}/>
    </>
  );
}

export default App;
 