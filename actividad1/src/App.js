import imagen0 from './imgs/rey_atanagildo.png'
import imagen1 from './imgs/rey_ataulfo.png'
import imagen2 from './imgs/rey_ervigio.png'
import incognito from './imgs/rey_incognito.png'

import './App.css';

function App() {
  let nombres = ['Atanalgildo','Atanulfo','Ervigio'];

  const cambiarFoto = (e) =>{
    e.target.src.includes('incognito')?e.target.style.visibility = "hidden":e.target.src=incognito
    e.target.parentNode.style.backgroundColor="white";
  }
  const cambiarTexto = (e) =>{
    if(e.target.innerHTML == 'visto'){
      e.target.innerHTML = ''
    }else{
      e.target.innerHTML = 'visto'
    }
  }
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen0} onClick={cambiarFoto}/>
        <div className='nombre' onClick={cambiarTexto}>{nombres[0]}</div>
      </div>
      <div className="caja" onClick={cambiarFoto}>
        <img src={imagen1}/>
        <div className='nombre' onClick={cambiarTexto}>{nombres[1]}</div>
      </div>
      <div className="caja" onClick={cambiarFoto}>
        <img src={imagen2}/>
        <div className='nombre' onClick={cambiarTexto}>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
