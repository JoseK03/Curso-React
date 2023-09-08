import img0 from './img/rey_ataulfo.png';
import img1 from './img/rey_ervigio.png';
import './App.css';

function App() {

  function incrementar(e){
     e.target.innerHTML = Number(e.target.innerHTML)+1; 
  }

  return (
    <>
      <div className="caja" onClick={incrementar}>1 </div>
      <button>Aceptar</button>
      <div>
        <img src={img0}/>
      </div>
      <input className="campo"/>
    </>
  );
}

export default App;
 