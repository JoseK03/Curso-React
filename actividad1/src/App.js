import imagen0 from './imgs/rey_atanagildo.png'
import imagen1 from './imgs/rey_ataulfo.png'
import imagen2 from './imgs/rey_ervigio.png'
import './App.css';

function App() {
  let nombres = ['Atanalgildo','Atanulfo','Ervigio'];
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen0}/>
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className="caja">
        <img src={imagen1}/>
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className="caja">
        <img src={imagen2}/>
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
