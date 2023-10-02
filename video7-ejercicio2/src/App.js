import './App.css';
import Banderas from './components/Banderas';
import Info from './components/Info';
import Provider  from './contexts/Provider';


function App() {
  return (
    <Provider>
    
        <div className='banderas'>
          <Banderas/>
        </div>      
        <div className="contenido">
          <Info/>
        </div>
    
    </Provider>
  );
}

export default App;
